/* eslint-disable no-restricted-globals */
// /* eslint-disable no-undef */
// importScripts("https://storage.googleapis.com/workbox-cdn/releases/6.5.4/workbox-sw.js");

// workbox.routing.resisterRoute(
//   ({request}) => request.destination === 'image',
//   new workbox.stratergies.CashFirst(),
// )

// "/",
// "./index.html",
// "../src/index.css",
// "../src/index.js",
// "/icons/icon-192x192.png",

self.addEventListener("install", (event) => {
    event.waitUntil(
      caches.open("pwa-cache").then((cache) => {
        return cache.addAll([
          "/",
          "./index.html",
          "../src/index.css",
          "../src/index.js",
          "./icons/logo.webp",
        ]);
      })
    );
  });
  
  self.addEventListener("fetch", (event) => {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
  });
  