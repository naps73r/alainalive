self.addEventListener("install", (event) => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  clients.claim();
});

self.addEventListener("fetch", (event) => {
  // Just go to the network
  event.respondWith(fetch(event.request).catch(() => new Response("Offline")));
});
