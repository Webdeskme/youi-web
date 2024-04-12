const GHPATH = 'https://www.webdesk.me';
// Change to a different app prefix name
const APP_PREFIX = 'webdesk_me_';
const VERSION = 'version_000000';

// The files to make available for offline use. make sure to add 
// others to this list
const URLS = [
  `${GHPATH}/`,
  `${GHPATH}/index.html`,
  `${GHPATH}/index.js`,
  `${GHPATH}/index.css`,
  `${GHPATH}/phaser.min.js`,
  `${GHPATH}/assets/sky.png`,
  `${GHPATH}/assets/platform.png`,
  `${GHPATH}/assets/star.png`,
  `${GHPATH}/assets/bomb.png`,
  `${GHPATH}/assets/dude.png`,
  `${GHPATH}/assets/tropical-summer-music-112842.mp3`,
  `${GHPATH}/assets/collectcoin.mp3`,
  `${GHPATH}/assets/ra.png`,
  `${GHPATH}/assets/la.png`,
  `${GHPATH}/assets/ab.png`,
  `${GHPATH}/assets/play.png`,
  `${GHPATH}/assets/about.png`,
  `${GHPATH}/assets/support.png`,
  `${GHPATH}/assets/games.png`,
  `${GHPATH}/assets/privacy.png`,
  `${GHPATH}/assets/terms.png`,
  `${GHPATH}/assets/disclaimer.png`,
  `${GHPATH}/assets/games.png`,
  `${GHPATH}/assets/terminal.jpg`,
  `${GHPATH}/assets/events.png`,
  `${GHPATH}/assets/store.png`,
  `${GHPATH}/assets/lock.png`,
  `${GHPATH}/PWA-enabled-brightgreen.svg`,
  `${GHPATH}/about.html`,`
   ${GHPATH}/reveal.js-master/di/reset.css`,
  `${GHPATH}/reveal.js-master/di/reveal.css`,
  `${GHPATH}/reveal.js-master/di/theme/black.css`,
  `${GHPATH}/reveal.js-master/plugin/highlight/monokai.css`,
  `${GHPATH}/reveal.js-master/di/reveal.js`,
  `${GHPATH}/reveal.js-master/plugin/notes/notes.js`,
  `${GHPATH}/reveal.js-master/plugin/markdown/markdown.js`,
  `${GHPATH}/reveal.js-master/plugin/highlight/highlight.js`,
  `${GHPATH}/privacy.html`,
  `${GHPATH}/pwa.html`,
  `${GHPATH}/game.html`,
  `${GHPATH}/terms.html`,
  `${GHPATH}/game.js`,
  `${GHPATH}/disclamer.html`,
  `${GHPATH}/knockout/di/index.html`,
  `${GHPATH}/knockout/di/script.js`,
  `${GHPATH}/knockout/di/style.css`,
  
  // add more paths if you need
  // `${GHPATH}/js/app.js`
]

const CACHE_NAME = APP_PREFIX + VERSION
self.addEventListener('fetch', function (e) {
  console.log('Fetch request : ' + e.request.url);
  e.respondWith(
    caches.match(e.request).then(function (request) {
      if (request) {
        console.log('Responding with cache : ' + e.request.url);
        return request
      } else {
        console.log('File is not cached, fetching : ' + e.request.url);
        return fetch(e.request)
      }
    })
  )
})

self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      console.log('Installing cache : ' + CACHE_NAME);
      /*const stack = [];
    URLS.forEach(file => stack.push(
        cache.add(file).catch(_=>console.error(`can't load ${file} to cache`))
    ));*/
      return cache.addAll(URLS)
    })
  )
})

self.addEventListener('activate', function (e) {
  e.waitUntil(
    caches.keys().then(function (keyList) {
      var cacheWhitelist = keyList.filter(function (key) {
        return key.indexOf(APP_PREFIX)
      })
      cacheWhitelist.push(CACHE_NAME);
      return Promise.all(keyList.map(function (key, i) {
        if (cacheWhitelist.indexOf(key) === -1) {
          console.log('Deleting cache : ' + keyList[i]);
          return caches.delete(keyList[i])
        }
      }))
    })
  )
})
