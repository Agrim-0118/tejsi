# Earthly (PWA-ready)

This is your college project converted into a Progressive Web App (PWA) and prepared for packaging as a mobile app.

## What I added
- `manifest.json` — web app manifest for installability
- `service-worker.js` — offline caching & offline fallback
- `assets/icon-192.png`, `assets/icon-512.png` — simple app icons
- Injected PWA meta tags and service worker registration into all HTML files
- `README.md` (this file) and `project-report.txt`

## How to run locally
1. Serve the folder with a local HTTP server (recommended):
   - Python 3: `python -m http.server 8000` (run in the project folder)
   - Then open `http://localhost:8000` in your browser.
2. Open the site in Chrome on Android to test installability (or use Desktop Chrome for basic PWA testing).
3. To create an Android APK using Capacitor, follow the steps in the original mentor instructions (I can generate exact commands if needed).

## Notes
- The service worker uses a small cache list. If you add/remove files, update `service-worker.js` accordingly.
- For best results, optimize images and minify CSS/JS for production.
