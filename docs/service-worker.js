if(!self.define){let e,i={};const n=(n,r)=>(n=new URL(n+".js",r).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(r,s)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let t={};const l=e=>n(e,o),u={module:{uri:o},exports:t,require:l};i[o]=Promise.all(r.map((e=>u[e]||l(e)))).then((e=>(s(...e),t)))}}define(["./workbox-2b403519"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"b6879d41b0852f01ed5b.woff2",revision:null},{url:"ba591bccfa9d34279c0d.svg",revision:null},{url:"d75e3fd1eb12e9bd6655.ttf",revision:null},{url:"index.html",revision:"32a707b92ae75e005bfa7656790c135f"},{url:"main.js",revision:"3d946ba31501961480a97b389a5ad8e6"}],{})}));