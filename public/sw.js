const VERSION="v1",CACHE_NAME="todo-cache-v1",APP_STATIC_RESOURCES=["/","/index.html","/scripts/bundle.js","/css/styles.css","/icons/todo.svg","/img/chromatic.png","/img/shiba.png","/manifest.webmanifest"];function activateApp(e){e.waitUntil(deleteOldCache())}async function deleteOldCache(){const e=(await caches.keys()).map((e=>{if(e!==CACHE_NAME)return caches.delete(e)}));await Promise.all(e),await clients.claim()}function handleFetch(e){"navigate"!==e.request.mode?e.respondWith(cacheResponse(e)):e.respondWith(caches.match("/"))}async function cacheResponse(e){const t=await caches.open(CACHE_NAME);return await t.match(e.request.url)||new Response(null,{status:404})}function installApp(e){e.waitUntil(initialCacheSetup())}async function initialCacheSetup(){(await caches.open(CACHE_NAME)).addAll(APP_STATIC_RESOURCES)}self.addEventListener("install",installApp),self.addEventListener("activate",activateApp),self.addEventListener("fetch",handleFetch);