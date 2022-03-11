

this.addEventListener('install',(event)=>{
    let CacheData = "appV1";
    event.waitUntil(
        caches.open(CacheData).then((cache)=>{
            cache.addAll([
                '/static/js/main.chunk.js',
                '/static/js/vendors~main.chunk.js',
                '/static/js/vendors~main.chunk.js.map',
                '/static/js/0.chunk.js',
                '/static/js/bundle.js',
                '/index.html',
                '/',
            ])
        })
    )
})

this.addEventListener('fetch',(event)=>{
    if(!navigator.onLine){
    event.respondWith(
        caches.match(event.request).then((resp)=>{
            if(resp){
                return resp
            }
            let requestUrl = event.request.clone();
            fetch(requestUrl)
        })
    )
    }
})