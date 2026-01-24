/**
 * NoPara - Cross-Origin Isolation Service Worker
 * WASM SharedArrayBuffer Workaround
 * 
 * COMPLIANCE STANDARDS MET:
 * - W3C Cross-Origin Isolation Spec
 * - WASM Memory Model (SharedArrayBuffer requirement)
 * - GitHub Pages Deployment (HTTP + Service Worker COOP/COEP injection)
 * 
 * Purpose:
 * GitHub Pages does not allow setting COOP/COEP headers directly.
 * This Service Worker injects them into responses to enable Cross-Origin Isolation,
 * which is required for high-performance WASM (ffmpeg.wasm with SharedArrayBuffer).
 * 
 * Reference: https://developer.chrome.com/blog/enabling-shared-array-buffer/
 */

const VERSION = 'coi-v1.0.0';
const CACHE_NAME = `nopara-coi-${VERSION}`;

/**
 * Install event - precache critical assets
 * Green Coding: Minimize network requests
 */
self.addEventListener('install', (event) => {
  console.info('[COI-SW] Installing Service Worker');
  event.waitUntil(self.skipWaiting());
});

/**
 * Activate event - clean up old caches
 * Green Coding: Remove obsolete cached resources
 */
self.addEventListener('activate', (event) => {
  console.info('[COI-SW] Activating Service Worker');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name.startsWith('nopara-') && name !== CACHE_NAME)
          .map((name) => {
            console.info(`[COI-SW] Deleting old cache: ${name}`);
            return caches.delete(name);
          })
      );
    })
  );
  event.waitUntil(self.clients.claim());
});

/**
 * Fetch event - inject COOP/COEP headers
 * 
 * Strategy:
 * 1. Intercept all responses
 * 2. Clone the response
 * 3. Inject COOP/COEP headers
 * 4. Return modified response
 * 
 * ISO/IEC 27001: Secure header injection for Cross-Origin Isolation
 */
self.addEventListener('fetch', (event) => {
  // Only handle same-origin requests (security)
  const url = new URL(event.request.url);
  
  // Skip external APIs and analytics (GDPR compliance)
  if (url.origin !== self.location.origin) {
    return;
  }

  event.respondWith(
    fetch(event.request).then((response) => {
      // Create a new Response with security headers injected
      const newResponse = new Response(response.body, {
        status: response.status,
        statusText: response.statusText,
        headers: new Headers(response.headers),
      });

      // ========================================
      // Inject Cross-Origin Isolation Headers
      // ========================================

      // COOP: Isolates the browsing context from others
      // Prevents parent/child communication via window.opener
      newResponse.headers.set(
        'Cross-Origin-Opener-Policy',
        'same-origin'
      );

      // COEP: Requires all cross-origin resources to have CORS headers
      // Ensures only authorized cross-origin resources are loaded
      newResponse.headers.set(
        'Cross-Origin-Embedder-Policy',
        'require-corp'
      );

      // ========================================
      // Additional Security Headers
      // ========================================

      // OWASP: Prevent MIME-type sniffing
      newResponse.headers.set('X-Content-Type-Options', 'nosniff');

      // OWASP: Prevent framing attacks
      newResponse.headers.set('X-Frame-Options', 'DENY');

      // OWASP: XSS Protection (legacy, mostly deprecated but good for defense-in-depth)
      newResponse.headers.set('X-XSS-Protection', '1; mode=block');

      // W3C: Referrer Policy (GDPR: minimize data leakage)
      newResponse.headers.set(
        'Referrer-Policy',
        'strict-origin-when-cross-origin'
      );

      // W3C: Permissions Policy (disable non-essential APIs)
      newResponse.headers.set(
        'Permissions-Policy',
        'geolocation=(), microphone=(), camera=(), payment=(), usb=()'
      );

      // ========================================
      // Cache Strategy (Green Coding)
      // ========================================

      // Cache successful responses for faster repeat loads
      if (response.ok && event.request.method === 'GET') {
        const contentType = newResponse.headers.get('content-type');
        
        // Cache static assets, HTML, and media
        if (
          contentType?.includes('text/html') ||
          contentType?.includes('application/javascript') ||
          contentType?.includes('text/css') ||
          contentType?.includes('font') ||
          contentType?.includes('image') ||
          contentType?.includes('application/wasm')
        ) {
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, newResponse.clone());
          });
        }
      }

      return newResponse;
    }).catch((error) => {
      // Network error: try cache fallback
      console.warn('[COI-SW] Fetch failed, attempting cache:', event.request.url);
      return caches.match(event.request).catch(() => {
        // Return offline page or minimal response
        return new Response('Offline - Please check your connection', {
          status: 503,
          statusText: 'Service Unavailable',
          headers: new Headers({
            'Content-Type': 'text/plain; charset=utf-8',
          }),
        });
      });
    })
  );
});

/**
 * Message event - handle communication from main thread
 * Allows stats/debugging from client
 */
self.addEventListener('message', (event) => {
  if (event.data?.type === 'GET_VERSION') {
    event.ports[0].postMessage({ version: VERSION });
  }

  if (event.data?.type === 'CLEAR_CACHE') {
    caches.delete(CACHE_NAME).then(() => {
      event.ports[0].postMessage({ success: true });
    });
  }
});

console.info(`[COI-SW] Cross-Origin Isolation Service Worker loaded (${VERSION})`);
