if(!self.define){let e,s={};const n=(n,t)=>(n=new URL(n+".js",t).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(t,i)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(s[a])return;let c={};const o=e=>n(e,a),r={module:{uri:a},exports:c,require:o};s[a]=Promise.all(t.map((e=>r[e]||o(e)))).then((e=>(i(...e),c)))}}define(["./workbox-ee4f4023"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/ZoGSf0fgs-2dsJ_xmtX5q/_buildManifest.js",revision:"ZoGSf0fgs-2dsJ_xmtX5q"},{url:"/_next/static/ZoGSf0fgs-2dsJ_xmtX5q/_middlewareManifest.js",revision:"ZoGSf0fgs-2dsJ_xmtX5q"},{url:"/_next/static/ZoGSf0fgs-2dsJ_xmtX5q/_ssgManifest.js",revision:"ZoGSf0fgs-2dsJ_xmtX5q"},{url:"/_next/static/chunks/framework-c4190dd27fdc6a34.js",revision:"ZoGSf0fgs-2dsJ_xmtX5q"},{url:"/_next/static/chunks/main-29875c1353ffb5ef.js",revision:"ZoGSf0fgs-2dsJ_xmtX5q"},{url:"/_next/static/chunks/pages/_app-c773baec143f2278.js",revision:"ZoGSf0fgs-2dsJ_xmtX5q"},{url:"/_next/static/chunks/pages/_error-d20da8f9a50c916f.js",revision:"ZoGSf0fgs-2dsJ_xmtX5q"},{url:"/_next/static/chunks/pages/components/Meta-adfd088be48c0e8f.js",revision:"ZoGSf0fgs-2dsJ_xmtX5q"},{url:"/_next/static/chunks/pages/index-666e933459f6bcda.js",revision:"ZoGSf0fgs-2dsJ_xmtX5q"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"ZoGSf0fgs-2dsJ_xmtX5q"},{url:"/_next/static/chunks/webpack-45f9f9587e6c08e1.js",revision:"ZoGSf0fgs-2dsJ_xmtX5q"},{url:"/icons/android-chrome-192x192.png",revision:"c80cb8a4e31a77da9bec94ff28dab07d"},{url:"/icons/android-chrome-512x512.png",revision:"eb699619e68c597a087f7d178bbad2de"},{url:"/icons/apple-touch-icon.png",revision:"57e77395466a6f6e9b30bfa946937077"},{url:"/icons/favicon-16x16.png",revision:"68be73d40a5c2fcd7e7acee3040d673a"},{url:"/icons/favicon-32x32.png",revision:"9dc55c62fe567fec9d36ab9c7da86108"},{url:"/icons/favicon.ico",revision:"f237b5ad1b01b8a02a160f502bbde862"},{url:"/icons/site.webmanifest",revision:"053100cb84a50d2ae7f5492f7dd7f25e"},{url:"/manifest.json",revision:"c671befe7f035be05fee2f3a5a5f8b08"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:t})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));