# NoPara - Deployment Guide

## Pre-Deployment Checklist

### Security Review
- [ ] Content Security Policy (CSP) verified in index.html
- [ ] COOP/COEP headers configured in vite.config.js
- [ ] All external API calls removed
- [ ] No sensitive data in environment variables
- [ ] Service Workers registered and tested
- [ ] HTTPS enabled on deployment domain

### Accessibility Verification
- [ ] WCAG 2.2 AAA compliance verified
- [ ] Keyboard navigation tested (Tab, Enter, Arrow keys)
- [ ] Screen reader tested (NVDA/VoiceOver)
- [ ] Color contrast ratios verified (7:1 minimum)
- [ ] Focus indicators visible
- [ ] Mobile touch targets 24x24px minimum
- [ ] Form labels properly associated

### Performance Validation
- [ ] LCP < 2.5s measured
- [ ] FID < 100ms verified
- [ ] CLS < 0.1 confirmed
- [ ] Bundle size optimized (Brotli compression)
- [ ] No console errors or warnings
- [ ] Service Worker cache working
- [ ] Offline mode functional

### Privacy Compliance
- [ ] No cookies implemented
- [ ] No localStorage used (except metrics)
- [ ] No external analytics
- [ ] GDPR notice accurate
- [ ] PIPEDA compliance verified
- [ ] Privacy policy available

## Building for Production

### 1. Install Dependencies
```bash
npm install
```

### 2. Build Optimization
```bash
# Production build with all optimizations
npm run build

# Output: dist/ folder
```

### 3. Verify Build Output
```bash
# Check bundle size
ls -lh dist/

# Expected: <500KB total (with compression)

# Preview production build
npm run preview
```

### 4. Security Headers Check
Before deploying to GitHub Pages, verify:

```bash
# Check CSP header
curl -I https://yourusername.github.io/NoPara/

# Should show:
# Content-Security-Policy: default-src 'self'...
# Cross-Origin-Opener-Policy: same-origin
# Cross-Origin-Embedder-Policy: require-corp
```

## Deployment to GitHub Pages

### Option 1: GitHub Actions (Recommended)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy NoPara to GitHub Pages

on:
  push:
    branches: ['main', 'master']
  workflow_dispatch:

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    permissions:
      contents: read
      pages: write
      id-token: write

    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}

    steps:
      - name: Checkout
        uses: actions/checkout@v3

      - name: Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v2
        with:
          path: 'dist'

      - name: Deploy
        id: deployment
        uses: actions/deploy-pages@v2
```

### Option 2: Manual Deployment

```bash
# 1. Build
npm run build

# 2. Create/checkout gh-pages branch
git checkout --orphan gh-pages

# 3. Remove all tracked files
git rm -rf .

# 4. Copy build output
cp -r dist/* .

# 5. Create .nojekyll (prevent Jekyll processing)
touch .nojekyll

# 6. Commit and push
git add .
git commit -m "Deploy NoPara to GitHub Pages"
git push origin gh-pages

# 7. Return to main branch
git checkout main
```

### Option 3: Using gh-pages Package

```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add to package.json:
{
  "scripts": {
    "deploy": "npm run build && gh-pages -d dist"
  }
}

# Deploy
npm run deploy
```

### GitHub Pages Configuration

1. Go to repository Settings → Pages
2. Select source: Deploy from a branch
3. Select branch: `gh-pages`
4. Select folder: `/ (root)`
5. Click Save

Your site will be available at: `https://yourusername.github.io/NoPara/`

## Post-Deployment Verification

### 1. Accessibility Check
```bash
# Test keyboard navigation
# - Tab through all controls
# - Enter/Space activates buttons
# - Arrow keys work in selects

# Test screen reader
# - VoiceOver (macOS)
# - NVDA (Windows)
# - Jaws (Windows)

# Verify ARIA labels visible in DevTools
```

### 2. Performance Audit
```bash
# Using Chrome DevTools
# 1. Open Lighthouse tab
# 2. Audit for: Performance, Accessibility, Best Practices, SEO
# 3. Verify Core Web Vitals targets met

# Target scores: 90+
```

### 3. Security Audit
```bash
# Using Chrome DevTools Console
# Verify no console errors or warnings
# Check Security tab for headers
# Run: window.crossOriginIsolated should be true
```

### 4. Real Device Testing
- Test on iPhone (iOS)
- Test on Android device
- Test on Windows with Edge/Chrome
- Test on macOS with Safari
- Test offline mode (DevTools Network → offline)
- Test with various assistive technologies

## Monitoring & Maintenance

### 1. Performance Monitoring
Track Core Web Vitals locally:

```javascript
// In browser console
const lcp = sessionStorage.getItem('lcp');
const fid = sessionStorage.getItem('fid');
const cls = sessionStorage.getItem('cls');
console.log({ LCP: lcp, FID: fid, CLS: cls });
```

### 2. Error Logging (Development Only)
Browser console shows:
- WASM loading status
- Service Worker registration
- Security checks
- Performance metrics

### 3. Cache Management
Clear deployed cache:

1. Open DevTools → Application
2. Clear all site storage
3. Service Worker → Unregister
4. Reload page

## Rollback Procedure

If deployment has issues:

```bash
# Revert to previous commit
git revert <commit-hash>

# Deploy old gh-pages branch
git checkout gh-pages
git reset --hard origin/gh-pages@{1}
git push origin gh-pages --force

# Return to main
git checkout main
```

## Optimization Tips

### 1. Bundle Analysis
```bash
# Analyze bundle size
npm install -D vite-plugin-visualizer

# Add to vite.config.js
import { visualizer } from 'vite-plugin-visualizer';

plugins: [visualizer()]

# Run build and view stats.html
```

### 2. Further Compression
```bash
# Brotli compression already enabled in vite.config.js

# Manual check:
ls -lh dist/
# Should show .br files for compression
```

### 3. HTTP/2 Server Push (GitHub Pages doesn't support)
N/A - GitHub Pages uses HTTP/2 by default

## Troubleshooting

### Issue: SharedArrayBuffer not available
**Solution**: Verify COOP/COEP headers in service worker:
```javascript
newResponse.headers.set('Cross-Origin-Opener-Policy', 'same-origin');
newResponse.headers.set('Cross-Origin-Embedder-Policy', 'require-corp');
```

### Issue: Service Worker not registering
**Solution**: Check:
1. HTTPS enabled (or localhost)
2. Service worker file path correct
3. No console errors
4. Cache cleared

### Issue: CSS not loading
**Solution**: 
1. Verify base URL in vite.config.js: `/NoPara/`
2. Check dist/ folder structure
3. Clear browser cache

### Issue: Keyboard navigation not working
**Solution**:
1. Verify tabindex attributes
2. Check focus() methods in React
3. Ensure no CSS prevents tab stops (outline: none without alternative)

## Continuous Improvement

### Monthly Tasks
- [ ] Update dependencies: `npm update`
- [ ] Security audit: npm audit
- [ ] Performance review: Lighthouse
- [ ] Accessibility check: axe DevTools
- [ ] Cross-browser testing

### Quarterly Tasks
- [ ] Major dependency updates
- [ ] Security review of code
- [ ] Performance optimization
- [ ] Accessibility audit with users
- [ ] Compliance review (GDPR, PIPEDA)

### Annual Tasks
- [ ] Full security audit
- [ ] Compliance certification
- [ ] User feedback implementation
- [ ] Technology stack review
- [ ] Archive old builds

---

**Version**: 1.0.0  
**Last Updated**: January 24, 2026  
**Platform**: GitHub Pages (Static Hosting)  
**Security**: OWASP Top 10 + GDPR + WCAG 2.2 AAA
