const VERSION = "v1";
const CACHE_NAME = `todo-cache-${VERSION}`;

const APP_STATIC_RESOURCES = [
  "/",
  "./index.html",
  "./scripts/bundle.js",
  "./css/styles.css",
  "./icons/todo.svg",
  "./img/chromatic.png",
  "./img/shiba.png",
  "./manifest.webmanifest",
];

// Event Listners
self.addEventListener("install", installApp);

// Core Functions
function installApp(e) {
  e.waitUntil(initialCacheSetup());
}

async function initialCacheSetup() {
  const cache = await caches.open(CACHE_NAME);
  cache.addAll(APP_STATIC_RESOURCES);
}
