(function(t){function e(e){for(var r,a,s=e[0],c=e[1],i=e[2],u=0,d=[];u<s.length;u++)a=s[u],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);f&&f(e);while(d.length)d.shift()();return l.push.apply(l,i||[]),n()}function n(){for(var t,e=0;e<l.length;e++){for(var n=l[e],r=!0,a=1;a<n.length;a++){var s=n[a];0!==o[s]&&(r=!1)}r&&(l.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},a={app:0},o={app:0},l=[];function s(t){return c.p+"js/"+({profile:"profile"}[t]||t)+"."+{profile:"a5672338"}[t]+".js"}function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={profile:1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise((function(e,n){for(var r="css/"+({profile:"profile"}[t]||t)+"."+{profile:"70d2377c"}[t]+".css",o=c.p+r,l=document.getElementsByTagName("link"),s=0;s<l.length;s++){var i=l[s],u=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(u===r||u===o))return e()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){i=d[s],u=i.getAttribute("data-href");if(u===r||u===o)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var r=e&&e.target&&e.target.src||o,l=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");l.code="CSS_CHUNK_LOAD_FAILED",l.request=r,delete a[t],f.parentNode.removeChild(f),n(l)},f.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){a[t]=0})));var r=o[t];if(0!==r)if(r)e.push(r[2]);else{var l=new Promise((function(e,n){r=o[t]=[e,n]}));e.push(r[2]=l);var i,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=s(t);var d=new Error;i=function(e){u.onerror=u.onload=null,clearTimeout(f);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}o[t]=void 0}};var f=setTimeout((function(){i({type:"timeout",target:u})}),12e4);u.onerror=u.onload=i,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=e,i=i.slice();for(var d=0;d<i.length;d++)e(i[d]);var f=u;l.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"1d0f":function(t,e,n){var r=n("ded3").default,a=n("4082").default,o=["class","staticClass","style","staticStyle","attrs"];n("99af"),t.exports={functional:!0,render:function(t,e){var n=e._c,l=(e._v,e.data),s=e.children,c=void 0===s?[]:s,i=l.class,u=l.staticClass,d=l.style,f=l.staticStyle,p=l.attrs,v=void 0===p?{}:p,h=a(l,o);return n("svg",r({class:[i,u],style:[d,f],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg","aria-label":"Ana Sayfa",height:"22",viewBox:"0 0 48 48",width:"22"},v)},h),c.concat([n("path",{attrs:{fill:"currentColor",d:"M45.5 48H30.1c-.8 0-1.5-.7-1.5-1.5V34.2c0-2.6-2.1-4.6-4.6-4.6s-4.6 2.1-4.6 4.6v12.3c0 .8-.7 1.5-1.5 1.5H2.5c-.8 0-1.5-.7-1.5-1.5V23c0-.4.2-.8.4-1.1L22.9.4c.6-.6 1.6-.6 2.1 0l21.5 21.5c.3.3.4.7.4 1.1v23.5c.1.8-.6 1.5-1.4 1.5z"}})]))}}},"3c19":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n(t.tag,{tag:"component",class:t.size},[t._t("default")],2)},a=[],o={name:"CustomText",props:{tag:{type:String,default:"span"},size:{type:String,default:"normal",validator:function(t){return-1!==["normal","sm","xsm","xxsm"].indexOf(t)}}}},l=o,s=(n("896d"),n("2877")),c=Object(s["a"])(l,r,a,!1,null,"af48f70a",null);e["a"]=c.exports},"565d":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app"},[n("MasterHeader"),n("main",[n("Container",[n("router-view")],1)],1)],1)},o=[],l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"header"},[n("Container",{staticClass:"header-inner"},[n("router-link",{staticClass:"logo",attrs:{to:"/"}},[t._v("Instagram")]),n("form",{staticClass:"search"},[n("input",{attrs:{type:"text",placeholder:"search"}})]),n("nav",{staticClass:"nav"},[n("router-link",{attrs:{to:"/"}},["Home"!==t.$route.name?n("HomeIcon"):n("HomeFillIcon")],1),n("router-link",{attrs:{to:"/direct"}},["Direct"!==t.$route.name?n("DirectIcon"):n("DirectFillIcon")],1),n("router-link",{attrs:{to:"/explore"}},["Explore"!==t.$route.name?n("ExploreIcon"):n("ExploreFillIcon")],1),n("router-link",{attrs:{to:"/profile"}},[t._v("Profile ")])],1)],1)],1)},s=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[t._t("default")],2)},i=[],u={name:"Container"},d=u,f=(n("88b1"),n("2877")),p=Object(f["a"])(d,c,i,!1,null,null,null),v=p.exports,h=n("ac9d"),m=n.n(h),g=n("1d0f"),y=n.n(g),b=n("6643"),w=n.n(b),C=n("d2c8"),x=n.n(C),_=n("75ae"),S=n.n(_),O=n("bf13"),j=n.n(O),E={name:"MasterHeader",components:{Container:v,HomeIcon:m.a,HomeFillIcon:y.a,DirectIcon:w.a,DirectFillIcon:x.a,ExploreIcon:S.a,ExploreFillIcon:j.a}},H=E,k=(n("8baf"),Object(f["a"])(H,l,s,!1,null,null,null)),z=k.exports,I={name:"app",components:{MasterHeader:z,Container:v}},P=I,T=(n("034f"),Object(f["a"])(P,a,o,!1,null,null,null)),M=T.exports,B=n("9483");Object(B["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});n("d3b7"),n("3ca3"),n("ddb0");var D=n("8c4f"),A=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("Instagram Clone - Commit Deploy Deneme")]),n("CustomText",{staticClass:"a1"},[t._v("Hello World")]),n("CustomText",{staticClass:"a2",attrs:{tag:"p",size:"sm"}},[t._v("Hello World")]),n("CustomText",{staticClass:"a3",attrs:{tag:"div",size:"xsm"}},[t._v("Hello World")]),n("IconHome")],1)},L=[],F=n("3c19"),V={name:"Home",components:{CustomText:F["a"],IconHome:m.a}},$=V,N=(n("d912"),Object(f["a"])($,A,L,!1,null,"3a033dc3",null)),q=N.exports;r["a"].use(D["a"]);var K=[{path:"/",name:"Home",component:q},{path:"/direct",name:"Direct",component:function(){return n.e("profile").then(n.bind(null,"d967"))}},{path:"/explore",name:"Explore",component:function(){return n.e("profile").then(n.bind(null,"dbde"))}},{path:"/profile",name:"Profile",component:function(){return n.e("profile").then(n.bind(null,"ecac"))},children:[{path:"",name:"ProfilePost",component:function(){return n.e("profile").then(n.bind(null,"6d1d"))}},{path:"save",name:"ProfileSave",component:function(){return n.e("profile").then(n.bind(null,"c7a4"))}},{path:"igtv",name:"ProfileIGTV",component:function(){return n.e("profile").then(n.bind(null,"f661"))}},{path:"tag",name:"ProfileTag",component:function(){return n.e("profile").then(n.bind(null,"658e"))}}]}],W=new D["a"]({mode:"history",base:"/",routes:K}),J=W,G=n("2f62");r["a"].use(G["a"]);var U=new G["a"].Store({state:{},mutations:{},actions:{},modules:{}});n("565d");r["a"].config.productionTip=!1,new r["a"]({router:J,store:U,render:function(t){return t(M)}}).$mount("#app")},"5faf":function(t,e,n){},6643:function(t,e,n){var r=n("ded3").default,a=n("4082").default,o=["class","staticClass","style","staticStyle","attrs"];n("99af"),t.exports={functional:!0,render:function(t,e){var n=e._c,l=(e._v,e.data),s=e.children,c=void 0===s?[]:s,i=l.class,u=l.staticClass,d=l.style,f=l.staticStyle,p=l.attrs,v=void 0===p?{}:p,h=a(l,o);return n("svg",r({class:[i,u],style:[d,f],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg","aria-label":"Direct",height:"22",viewBox:"0 0 48 48",width:"22"},v)},h),c.concat([n("path",{attrs:{fill:"currentColor",d:"M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z"}})]))}}},6860:function(t,e,n){},"75ae":function(t,e,n){var r=n("ded3").default,a=n("4082").default,o=["class","staticClass","style","staticStyle","attrs"];n("99af"),t.exports={functional:!0,render:function(t,e){var n=e._c,l=(e._v,e.data),s=e.children,c=void 0===s?[]:s,i=l.class,u=l.staticClass,d=l.style,f=l.staticStyle,p=l.attrs,v=void 0===p?{}:p,h=a(l,o);return n("svg",r({class:[i,u],style:[d,f],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg","aria-label":"Kişiler Bul",height:"22",viewBox:"0 0 48 48",width:"22"},v)},h),c.concat([n("path",{attrs:{"clip-rule":"evenodd",fill:"currentColor",d:"M24 0C10.8 0 0 10.8 0 24s10.8 24 24 24 24-10.8 24-24S37.2 0 24 0zm0 45C12.4 45 3 35.6 3 24S12.4 3 24 3s21 9.4 21 21-9.4 21-21 21zm10.2-33.2l-14.8 7c-.3.1-.6.4-.7.7l-7 14.8c-.3.6-.2 1.3.3 1.7.3.3.7.4 1.1.4.2 0 .4 0 .6-.1l14.8-7c.3-.1.6-.4.7-.7l7-14.8c.3-.6.2-1.3-.3-1.7-.4-.5-1.1-.6-1.7-.3zm-7.4 15l-5.5-5.5 10.5-5-5 10.5z","fill-rule":"evenodd"}})]))}}},"85ec":function(t,e,n){},"88b1":function(t,e,n){"use strict";n("5faf")},"896d":function(t,e,n){"use strict";n("d740")},"8baf":function(t,e,n){"use strict";n("6860")},ac9d:function(t,e,n){var r=n("ded3").default,a=n("4082").default,o=["class","staticClass","style","staticStyle","attrs"];n("99af"),t.exports={functional:!0,render:function(t,e){var n=e._c,l=(e._v,e.data),s=e.children,c=void 0===s?[]:s,i=l.class,u=l.staticClass,d=l.style,f=l.staticStyle,p=l.attrs,v=void 0===p?{}:p,h=a(l,o);return n("svg",r({class:[i,u],style:[d,f],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg","aria-label":"Ana Sayfa",height:"22",viewBox:"0 0 48 48",width:"22"},v)},h),c.concat([n("path",{attrs:{fill:"currentColor",d:"M45.3 48H30c-.8 0-1.5-.7-1.5-1.5V34.2c0-2.6-2-4.6-4.6-4.6s-4.6 2-4.6 4.6v12.3c0 .8-.7 1.5-1.5 1.5H2.5c-.8 0-1.5-.7-1.5-1.5V23c0-.4.2-.8.4-1.1L22.9.4c.6-.6 1.5-.6 2.1 0l21.5 21.5c.4.4.6 1.1.3 1.6 0 .1-.1.1-.1.2v22.8c.1.8-.6 1.5-1.4 1.5zm-13.8-3h12.3V23.4L24 3.6l-20 20V45h12.3V34.2c0-4.3 3.3-7.6 7.6-7.6s7.6 3.3 7.6 7.6V45z"}})]))}}},bf13:function(t,e,n){var r=n("ded3").default,a=n("4082").default,o=["class","staticClass","style","staticStyle","attrs"];n("99af"),t.exports={functional:!0,render:function(t,e){var n=e._c,l=(e._v,e.data),s=e.children,c=void 0===s?[]:s,i=l.class,u=l.staticClass,d=l.style,f=l.staticStyle,p=l.attrs,v=void 0===p?{}:p,h=a(l,o);return n("svg",r({class:[i,u],style:[d,f],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg","aria-label":"Kişiler Bul",height:"22",viewBox:"0 0 48 48",width:"22"},v)},h),c.concat([n("path",{attrs:{"clip-rule":"evenodd",fill:"currentColor",d:"M24 0C10.8 0 0 10.8 0 24s10.8 24 24 24 24-10.8 24-24S37.2 0 24 0zm12.2 13.8l-7 14.8c-.1.3-.4.6-.7.7l-14.8 7c-.2.1-.4.1-.6.1-.4 0-.8-.2-1.1-.4-.4-.4-.6-1.1-.3-1.7l7-14.8c.1-.3.4-.6.7-.7l14.8-7c.6-.3 1.3-.2 1.7.3.5.4.6 1.1.3 1.7zm-15 7.4l-5 10.5 10.5-5-5.5-5.5z","fill-rule":"evenodd"}})]))}}},d2c8:function(t,e,n){var r=n("ded3").default,a=n("4082").default,o=["class","staticClass","style","staticStyle","attrs"];n("99af"),t.exports={functional:!0,render:function(t,e){var n=e._c,l=(e._v,e.data),s=e.children,c=void 0===s?[]:s,i=l.class,u=l.staticClass,d=l.style,f=l.staticStyle,p=l.attrs,v=void 0===p?{}:p,h=a(l,o);return n("svg",r({class:[i,u],style:[d,f],attrs:Object.assign({xmlns:"http://www.w3.org/2000/svg","aria-label":"Direct",height:"22",viewBox:"0 0 48 48",width:"22"},v)},h),c.concat([n("path",{attrs:{fill:"currentColor",d:"M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l13.2 13c.5.4 1.1.6 1.7.3l16.6-8c.7-.3 1.6-.1 2 .5.4.7.2 1.6-.5 2l-15.6 9.9c-.5.3-.8 1-.7 1.6l4.6 19c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.5-.5.5-1.1.2-1.6z"}})]))}}},d4b8:function(t,e,n){},d740:function(t,e,n){},d912:function(t,e,n){"use strict";n("d4b8")}});
//# sourceMappingURL=app.5dc4bbc8.js.map