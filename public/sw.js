const CACHE='jusquau30-v3';
self.addEventListener('install',event=>event.waitUntil((async()=>{
  const cache=await caches.open(CACHE);
  const response=await fetch('./');
  if(!response.ok)throw new Error('Shell unavailable');
  const html=await response.clone().text();
  await cache.put('./',response);
  const assets=['./icon.svg','./icon-192.png','./icon-512.png','./manifest.webmanifest'].map(path=>new URL(path,self.registration.scope).href);
  for(const match of html.matchAll(/<(?:script|link)\b[^>]*?(?:src|href)="([^"]+)"/g)){
    const url=new URL(match[1],self.registration.scope);
    if(url.origin===self.location.origin)assets.push(url.href);
  }
  await cache.addAll([...new Set(assets)]);
})()));
self.addEventListener('activate',event=>event.waitUntil((async()=>{
  await Promise.all((await caches.keys()).filter(k=>k!==CACHE).map(k=>caches.delete(k)));
  await self.clients.claim();
})()));
self.addEventListener('fetch',event=>{
  if(event.request.method!=='GET'||new URL(event.request.url).origin!==self.location.origin)return;
  event.respondWith(fetch(event.request).then(response=>{
    if(response.ok){const copy=response.clone();caches.open(CACHE).then(cache=>cache.put(event.request,copy));}
    return response;
  }).catch(()=>caches.match(event.request).then(cached=>cached||Response.error())));
});
