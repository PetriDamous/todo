const VERSION = "v1";
const CACHE_NAME = `todo-cache-${VERSION}`;

const APP_STATIC_RESOURCES = [
  "/",
  "/index.html",
  "/scripts/bundle.js",
  "/css/styles.css",
  "/icons/todo.svg",
  "/img/chromatic.png",
  "/img/shiba.png",
  "/manifest.webmanifest",
];

// Event Listners
self.addEventListener("install", installApp);

self.addEventListener("activate", (e) => {
  e.waitUntil(async () => {
    const names = await caches.keys();

    await Promise.all(
      names.map((name) => {
        if (name !== CACHE_NAME) {
          return caches.delete(name);
        }
      })
    );

    await clients.claim();
  })();
});

self.addEventListener("fetch", (e) => {
  if (e.request.mode === "navigate") {
    e.respondWith(caches.match("./"));
    return;
  }

  e.respondWith(
    (async () => {
      const cache = await caches.open(CACHE_NAME);

      const cachedResponse = await cache.match(e.request.url);

      if (cachedResponse) {
        return cachedResponse;
      }

      return new Response(null, { status: 404 });
    })()
  );
});

// Core Functions
function installApp(e) {
  e.waitUntil(initialCacheSetup());
}

async function initialCacheSetup() {
  const cache = await caches.open(CACHE_NAME);
  cache.addAll(APP_STATIC_RESOURCES);
}
