"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["g:/project/melvins/web/antobolo/build/index.html","cbeb8c3a5b13b6df9e0c507c771899f1"],["g:/project/melvins/web/antobolo/build/static/css/main.deb18494.css","160c69226386de80cdfafcbfe5e6e1f0"],["g:/project/melvins/web/antobolo/build/static/media/0.73476783.jpg","73476783ca0f7583198978de7073815b"],["g:/project/melvins/web/antobolo/build/static/media/1.ed986061.jpeg","ed986061ad9bf89c081724362956b134"],["g:/project/melvins/web/antobolo/build/static/media/10.fe349e85.jpeg","fe349e8528c79623ea6795ddd110985a"],["g:/project/melvins/web/antobolo/build/static/media/2.780ccb41.jpeg","780ccb41c83dad3cbd24a9bcd3262586"],["g:/project/melvins/web/antobolo/build/static/media/3.41bf3241.jpeg","41bf3241965cc7c2990174ed9d6e9714"],["g:/project/melvins/web/antobolo/build/static/media/4.026cb7af.jpeg","026cb7af3133d721efff2a0134f7e16f"],["g:/project/melvins/web/antobolo/build/static/media/5.6e846951.jpeg","6e846951d7a04c931a0f9efa94a1316f"],["g:/project/melvins/web/antobolo/build/static/media/6.47789d67.jpeg","47789d678cfff97c48fda4de3f3621d5"],["g:/project/melvins/web/antobolo/build/static/media/7.2835396c.jpeg","2835396c930c8bf53ffd3beeedba7c41"],["g:/project/melvins/web/antobolo/build/static/media/8.10b775cc.jpeg","10b775cc930b6986ec69eb9a4adef56a"],["g:/project/melvins/web/antobolo/build/static/media/9.565ad4a3.jpeg","565ad4a387d2090e5d73f0c7b8de2793"],["g:/project/melvins/web/antobolo/build/static/media/LOGO-whait.4883eb22.png","4883eb22f4a10ff88fb647db15b42d70"],["g:/project/melvins/web/antobolo/build/static/media/MaterialIcons-Regular.012cf6a1.woff","012cf6a10129e2275d79d6adac7f3b02"],["g:/project/melvins/web/antobolo/build/static/media/MaterialIcons-Regular.570eb838.woff2","570eb83859dc23dd0eec423a49e147fe"],["g:/project/melvins/web/antobolo/build/static/media/MaterialIcons-Regular.a37b0c01.ttf","a37b0c01c0baf1888ca812cc0508f6e2"],["g:/project/melvins/web/antobolo/build/static/media/MaterialIcons-Regular.e79bfd88.eot","e79bfd88537def476913f3ed52f4f4b3"],["g:/project/melvins/web/antobolo/build/static/media/Roboto-Bold.39b2c303.woff2","39b2c3031be6b4ea96e2e3e95d307814"],["g:/project/melvins/web/antobolo/build/static/media/Roboto-Bold.dc81817d.woff","dc81817def276b4f21395f7ea5e88dcd"],["g:/project/melvins/web/antobolo/build/static/media/Roboto-Bold.e31fcf18.ttf","e31fcf1885e371e19f5786c2bdfeae1b"],["g:/project/melvins/web/antobolo/build/static/media/Roboto-Bold.ecdd509c.eot","ecdd509cadbf1ea78b8d2e31ec52328c"],["g:/project/melvins/web/antobolo/build/static/media/Roboto-Light.3b813c2a.woff","3b813c2ae0d04909a33a18d792912ee7"],["g:/project/melvins/web/antobolo/build/static/media/Roboto-Light.46e48ce0.ttf","46e48ce0628835f68a7369d0254e4283"],["g:/project/melvins/web/antobolo/build/static/media/Roboto-Light.69f8a061.woff2","69f8a0617ac472f78e45841323a3df9e"],["g:/project/melvins/web/antobolo/build/static/media/Roboto-Light.a990f611.eot","a990f611f2305dc12965f186c2ef2690"],["g:/project/melvins/web/antobolo/build/static/media/Roboto-Medium.4d9f3f9e.eot","4d9f3f9e5195e7b074bb63ba4ce42208"],["g:/project/melvins/web/antobolo/build/static/media/Roboto-Medium.574fd0b5.woff2","574fd0b50367f886d359e8264938fc37"],["g:/project/melvins/web/antobolo/build/static/media/Roboto-Medium.894a2ede.ttf","894a2ede85a483bf9bedefd4db45cdb9"],["g:/project/melvins/web/antobolo/build/static/media/Roboto-Medium.fc78759e.woff","fc78759e93a6cac50458610e3d9d63a0"],["g:/project/melvins/web/antobolo/build/static/media/Roboto-Regular.2751ee43.woff2","2751ee43015f9884c3642f103b7f70c9"],["g:/project/melvins/web/antobolo/build/static/media/Roboto-Regular.30799efa.eot","30799efa5bf74129468ad4e257551dc3"],["g:/project/melvins/web/antobolo/build/static/media/Roboto-Regular.ba3dcd89.woff","ba3dcd8903e3d0af5de7792777f8ae0d"],["g:/project/melvins/web/antobolo/build/static/media/Roboto-Regular.df7b648c.ttf","df7b648ce5356ea1ebce435b3459fd60"],["g:/project/melvins/web/antobolo/build/static/media/Roboto-Thin.7500519d.woff","7500519de3d82e33d1587f8042e2afcb"],["g:/project/melvins/web/antobolo/build/static/media/Roboto-Thin.94998475.ttf","94998475f6aea65f558494802416c1cf"],["g:/project/melvins/web/antobolo/build/static/media/Roboto-Thin.954bbdeb.woff2","954bbdeb86483e4ffea00c4591530ece"],["g:/project/melvins/web/antobolo/build/static/media/Roboto-Thin.dfe56a87.eot","dfe56a876d0282555d1e2458e278060f"],["g:/project/melvins/web/antobolo/build/static/media/antobolo.8353fb69.svg","8353fb6916fc803f1ffb712e61a3dbc5"],["g:/project/melvins/web/antobolo/build/static/media/arrow_left.11911410.svg","11911410dca2de148f30954eb2fd5eab"],["g:/project/melvins/web/antobolo/build/static/media/arrow_right.8ef6a08c.svg","8ef6a08cdc1154920165680a4edde771"],["g:/project/melvins/web/antobolo/build/static/media/fa-brands-400.06147b6c.ttf","06147b6cd88c7346cecd1edd060cd5de"],["g:/project/melvins/web/antobolo/build/static/media/fa-brands-400.5063b105.eot","5063b105c7646c8043d58c5289f02cca"],["g:/project/melvins/web/antobolo/build/static/media/fa-brands-400.a9c4bb73.svg","a9c4bb7348f42626454c988dbde1d0a0"],["g:/project/melvins/web/antobolo/build/static/media/fa-brands-400.c5e0f14f.woff","c5e0f14f88a828261ba01558ce2bf26f"],["g:/project/melvins/web/antobolo/build/static/media/fa-brands-400.cccc9d29.woff2","cccc9d29470e879e40eb70249d9a2705"],["g:/project/melvins/web/antobolo/build/static/media/fa-regular-400.65b286af.ttf","65b286af947c0d982ca01b40e1fcab38"],["g:/project/melvins/web/antobolo/build/static/media/fa-regular-400.7b9568e6.svg","7b9568e6389b1f8ae0902cd39665fc1e"],["g:/project/melvins/web/antobolo/build/static/media/fa-regular-400.c1a866ec.eot","c1a866ec0e04a5e1915b41fcf261457c"],["g:/project/melvins/web/antobolo/build/static/media/fa-regular-400.c4f508e7.woff","c4f508e7c4f01a9eeba7f08155cde04e"],["g:/project/melvins/web/antobolo/build/static/media/fa-regular-400.f5f2566b.woff2","f5f2566b93e89391da4db79462b8078b"],["g:/project/melvins/web/antobolo/build/static/media/fa-solid-900.0bff33a5.ttf","0bff33a5fd7ec390235476b4859747a0"],["g:/project/melvins/web/antobolo/build/static/media/fa-solid-900.333bae20.woff","333bae208dc363746961b234ff6c2500"],["g:/project/melvins/web/antobolo/build/static/media/fa-solid-900.44d537ab.woff2","44d537ab79f921fde5a28b2c1636f397"],["g:/project/melvins/web/antobolo/build/static/media/fa-solid-900.8e4a6dcc.eot","8e4a6dcc692b3887f9f542cd6894d6d4"],["g:/project/melvins/web/antobolo/build/static/media/fa-solid-900.c2801fb4.svg","c2801fb415f03c7b170934769d7b5397"],["g:/project/melvins/web/antobolo/build/static/media/level-up.a50ad272.png","a50ad272e95eb85a58383d0fe3974618"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,o){var c=new URL(e);return o&&c.pathname.match(o)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],o=new URL(t,self.location),c=createCacheKey(o,hashParamName,a,/\.\w{8}\./);return[o.toString(),c]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var o=new Request(a,{credentials:"same-origin"});return fetch(o).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);t=urlsToCacheKeys.has(a);t||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted([],e.request.url)&&(a=new URL("/antobolo/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});