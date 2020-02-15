const staticDevCoffee = "dev-coffee-site-v1";
const assets = [
  "/",
  "/index.html",
  "/css/style.css",
  "/js/app.js",
  "/images/coffee1.JPG",
  "/images/coffee2.JPG",
  "/images/coffee3.JPG",
  "/images/coffee4.JPG",
  "/images/coffee5.JPG",
  "/images/coffee6.JPG",
  "/images/coffee7.JPG",
  "/images/coffee8.JPG",
  "/images/coffee9.JPG"
];

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevCoffee).then(cache => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request);
    })
  );
});
