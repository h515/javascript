/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v3.6.3/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v3.6.3"});

importScripts(
  "precache-manifest.bbbce51232614a7d4e869ccb9daf9b58.js"
);

workbox.core.setCacheNameDetails({prefix: "pwa-vuedemo"});

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("https://waituntil.online/pwa-vue/index.html", {
  
  blacklist: [/^\/_/,/\/[^\/]+\.[^\/]+$/],
});

workbox.routing.registerRoute(/.*\.js/, workbox.strategies.networkFirst({ "cacheName":"my-js-cache","matchOptions":{"ignoreSearch":true}, plugins: [{ cacheWillUpdate: () => {
workbox.routing.registerRoute(/https:\/\/www.easy-mock.com\/mock\/5ccec7de7ffbe958f9bc418b\/all/, workbox.strategies.networkFirst({ "cacheName":"my-api-cache","matchOptions":{"ignoreSearch":true}, plugins: [{ cacheDidUpdate: () => {