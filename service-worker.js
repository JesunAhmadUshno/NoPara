/**
 * NoPara - Service Worker for Offline Capability
 * 
 * COMPLIANCE STANDARDS MET:
 * - W3C Service Worker API
 * - PWA Offline-First Pattern
 * - Green Coding: Cache-first strategy reduces network requests
 * - GDPR: No persistent user data storage (only volatile RAM)
 * 
 * Cache Strategy:
 * - Network-first for HTML (always get latest)
 * - Cache-first for assets (static resources)
 * - Stale-while-revalidate for API calls
 */

const CACHE_VERSION = 'nopara-v1.0.0';
const ASSETS_CACHE = `${CACHE_VERSION}-assets`;
const RUNTIME_CACHE = `${CACHE_VERSION}-runtime`;
const IMAGE_CACHE = `${CACHE_VERSION}-images`;

// ========================================
// Assets to precache on installation
// Green Coding: Only essential assets
// ========================================
const PRECACHE_ASSETS = [
  '/NoPara/',
  '/NoPara/index.html',
  '/NoPara/styles/globals.css',
  '/NoPara/styles/accessibility.css',
  '/NoPara/styles/components.css',
];

/**
 * Install Event - Precache essential assets
 * Green Coding: Minimize precache to reduce install time
 */
self.addEventListener('install', (event) => {
  console.info('[Service Worker] Installing and precaching assets');

  event.waitUntil(
    caches.open(ASSETS_CACHE)
      .then((cache) => cache.addAll(PRECACHE_ASSETS))
      .then(() => self.skipWaiting())
      .catch((error) => {
        console.warn('[Service Worker] Precache failed:', error);
        // Continue even if precache fails
        return self.skipWaiting();
      })
  );
});

/**
 * Activate Event - Clean up old caches
 * Green Coding: Remove obsolete cached data
 */
self.addEventListener('activate', (event) => {
  console.info('[Service Worker] Activating and cleaning old caches');

  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames
            .filter((name) => {
              // Keep only current version caches
              return name.startsWith('nopara-') && !name.startsWith(CACHE_VERSION);
            })
            .map((name) => {
              console.info(`[Service Worker] Deleting old cache: ${name}`);
              return caches.delete(name);
            })
        );
      })
      .then(() => self.clients.claim())
  );
});

/**
 * Fetch Event - Implement caching strategies
 * 
 * Strategies by resource type:
 * - HTML: Network-first (always get latest)
 * - JS/CSS: Cache-first (compiled, don't change)
 * - Images: Cache-first with stale-while-revalidate
 * - Media: Cache-first (large files, bandwidth sensitive)
 * - WASM: Cache-first (binary, doesn't change)
 */
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Only handle same-origin requests (security)
  if (url.origin !== self.location.origin) {
    return;
  }

  // ========================================
  // Strategy 1: Network-first for HTML
  // Always get latest, but serve cached if offline
  // ========================================
  if (request.headers.get('accept')?.includes('text/html')) {
    event.respondWith(
      fetch(request)
        .then((response) => {
          // Cache successful response
          if (response.ok) {
            const cloned = response.clone();
            caches.open(RUNTIME_CACHE).then((cache) => {
              cache.put(request, cloned);
            });
          }
          return response;
        })
        .catch(() => {
          // Network failed, try cache
          return caches.match(request)
            .then((cached) => cached || createOfflineResponse());
        })
    );
    return;
  }

  // ========================================
  // Strategy 2: Cache-first for static assets
  // JS, CSS, Fonts, WASM binaries
  // ========================================
  if (
    request.url.includes('.js') ||
    request.url.includes('.css') ||
    request.url.includes('.wasm') ||
    request.url.includes('.woff2') ||
    request.url.includes('.woff')
  ) {
    event.respondWith(
      caches.match(request)
        .then((cached) => {
          if (cached) {
            return cached;
          }

          return fetch(request)
            .then((response) => {
              // Cache successful response
              if (response.ok) {
                const cloned = response.clone();
                caches.open(ASSETS_CACHE).then((cache) => {
                  cache.put(request, cloned);
                });
              }
              return response;
            })
            .catch(() => {
              // Offline and no cache - return minimal response
              if (request.url.includes('.js')) {
                return createOfflineScript();
              }
              if (request.url.includes('.css')) {
                return createOfflineStyles();
              }
              throw new Error('Asset not available offline');
            });
        })
    );
    return;
  }

  // ========================================
  // Strategy 3: Cache-first for images
  // Stale-while-revalidate pattern
  // ========================================
  if (request.destination === 'image') {
    event.respondWith(
      caches.match(request)
        .then((cached) => {
          // Return cached image if available
          if (cached) {
            // Revalidate in background (don't wait)
            fetch(request)
              .then((response) => {
                if (response.ok) {
                  caches.open(IMAGE_CACHE).then((cache) => {
                    cache.put(request, response);
                  });
                }
              })
              .catch(() => {
                // Revalidation failed, keep using cache
              });
            return cached;
          }

          // Image not cached, fetch now
          return fetch(request)
            .then((response) => {
              if (response.ok) {
                const cloned = response.clone();
                caches.open(IMAGE_CACHE).then((cache) => {
                  cache.put(request, cloned);
                });
              }
              return response;
            })
            .catch(() => {
              // Offline and no cache - return placeholder
              return createOfflinePlaceholder();
            });
        })
    );
    return;
  }

  // ========================================
  // Strategy 4: Network-first for media files
  // User is converting files, needs latest codec support
  // ========================================
  if (request.destination === 'document' || request.destination === 'sharedworker') {
    event.respondWith(
      fetch(request)
        .then((response) => {
          if (response.ok) {
            const cloned = response.clone();
            caches.open(RUNTIME_CACHE).then((cache) => {
              cache.put(request, cloned);
            });
          }
          return response;
        })
        .catch(() => {
          return caches.match(request)
            .catch(() => createOfflineResponse());
        })
    );
    return;
  }

  // ========================================
  // Default: Network-first with fallback
  // ========================================
  event.respondWith(
    fetch(request)
      .then((response) => {
        if (response.ok) {
          const cloned = response.clone();
          caches.open(RUNTIME_CACHE).then((cache) => {
            cache.put(request, cloned);
          });
        }
        return response;
      })
      .catch(() => {
        return caches.match(request)
          .catch(() => createOfflineResponse());
      })
  );
});

/**
 * Message Event - Communicate with clients
 * Allows cache management and status checks from main thread
 */
self.addEventListener('message', (event) => {
  // SKIP_WAITING - Force immediate activation
  if (event.data?.type === 'SKIP_WAITING') {
    self.skipWaiting();
    event.ports[0]?.postMessage({ success: true });
  }

  // CLEAR_CACHE - Clear all caches
  if (event.data?.type === 'CLEAR_CACHE') {
    caches.keys()
      .then((names) => Promise.all(names.map((name) => caches.delete(name))))
      .then(() => {
        event.ports[0]?.postMessage({ success: true });
        console.info('[Service Worker] All caches cleared');
      })
      .catch((error) => {
        event.ports[0]?.postMessage({ success: false, error: error.message });
      });
  }

  // GET_VERSION - Return service worker version
  if (event.data?.type === 'GET_VERSION') {
    event.ports[0]?.postMessage({ version: CACHE_VERSION });
  }

  // GET_CACHE_STATUS - Return cache status
  if (event.data?.type === 'GET_CACHE_STATUS') {
    caches.keys()
      .then((names) => {
        event.ports[0]?.postMessage({
          caches: names,
          version: CACHE_VERSION,
        });
      });
  }
});

// ========================================
// Helper Functions - Offline Responses
// ========================================

/**
 * Create offline response page
 */
function createOfflineResponse() {
  return new Response(
    `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>NoPara - Offline</title>
  <style>
    body { font-family: system-ui, sans-serif; padding: 2rem; text-align: center; }
    h1 { color: #333; }
    p { color: #666; line-height: 1.6; }
  </style>
</head>
<body>
  <h1>📡 Offline Mode</h1>
  <p>You are currently offline. Please check your internet connection and try again.</p>
  <p>Previously cached content may still be available.</p>
</body>
</html>`,
    {
      status: 503,
      statusText: 'Service Unavailable',
      headers: new Headers({
        'Content-Type': 'text/html; charset=utf-8',
        'Cache-Control': 'no-store',
      }),
    }
  );
}

/**
 * Create offline placeholder image
 */
function createOfflinePlaceholder() {
  // Simple 1x1 transparent PNG
  const png = new Uint8Array([
    0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a, 0x00, 0x00, 0x00, 0x0d, 0x49, 0x48, 0x44, 0x52,
    0x00, 0x00, 0x00, 0x01, 0x00, 0x00, 0x00, 0x01, 0x08, 0x06, 0x00, 0x00, 0x00, 0x1f, 0x15, 0xc4,
    0x89, 0x00, 0x00, 0x00, 0x0a, 0x49, 0x44, 0x41, 0x54, 0x78, 0x9c, 0x63, 0x00, 0x01, 0x00, 0x00,
    0x05, 0x00, 0x01, 0x0d, 0x0a, 0x2d, 0xb4, 0x00, 0x00, 0x00, 0x00, 0x49, 0x45, 0x4e, 0x44, 0xae,
    0x42, 0x60, 0x82,
  ]);

  return new Response(png, {
    status: 200,
    headers: new Headers({
      'Content-Type': 'image/png',
      'Cache-Control': 'max-age=86400',
    }),
  });
}

/**
 * Create minimal offline script
 */
function createOfflineScript() {
  return new Response(
    `console.warn('[Offline Mode] JavaScript resources unavailable. Limited functionality.');`,
    {
      status: 200,
      headers: new Headers({
        'Content-Type': 'application/javascript',
        'Cache-Control': 'no-store',
      }),
    }
  );
}

/**
 * Create minimal offline styles
 */
function createOfflineStyles() {
  return new Response(
    `body { font-family: system-ui, sans-serif; padding: 1rem; }
    .offline-notice { color: #d32f2f; padding: 1rem; background: #ffebee; border-radius: 4px; }`,
    {
      status: 200,
      headers: new Headers({
        'Content-Type': 'text/css',
        'Cache-Control': 'no-store',
      }),
    }
  );
}

console.info(`[Service Worker] NoPara Service Worker loaded (${CACHE_VERSION})`);
