(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{1780:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(8510)}])},7845:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var r=n(5893),a=n(8846),i=n.n(a),o=n(7294),c=n(1664),l=n(4123);var s=n(1163),u=n(5675);function d(e){var t=(0,s.useRouter)().asPath,n=(0,o.useState)(["Home"]),a=n[0],d=n[1],v=(0,o.useState)(f),m=v[0],g=v[1],b=i().style,y=(0,l.Z)();!function(){var e=(0,o.useState)({path:void 0,url:void 0}),t=e[0],n=e[1];(0,o.useEffect)((function(){var e=function(){n({path:window.location.pathname,url:window.location.href})};return window.addEventListener("onhashchange",e),e(),function(){return window.removeEventListener("onhashchange",e)}}),[])}();return(0,o.useEffect)((function(){"/"==t?g(p):"/contact"==t?g(h):"/cheatsheet"==t&&g(ItemsCheatsheet)}),[t]),(0,r.jsx)(o.Fragment,{children:(0,r.jsx)("nav",{className:"navbar navbar-expand-lg ".concat(i().Navbar),children:(0,r.jsxs)("div",{className:"container",children:[(0,r.jsx)(c.default,{className:"navbar-brand",href:"/",passHref:!0,children:(0,r.jsx)("div",{className:"d-inline-block align-top ".concat(i().link),children:(0,r.jsx)(u.default,{src:"/logo-2.png",alt:"Hackers Logo",height:"40px",width:"35px"})})}),(0,r.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbar","aria-controls":"navbar","aria-expanded":"false",id:"button",children:(0,r.jsx)("div",{className:"d-inline-block align-top",children:(0,r.jsx)(u.default,{src:"/fa-bar.png",alt:"far-bar",height:"35px",width:"35px"})})}),(0,r.jsx)("div",{className:"navbar-collapse collapse",id:"navbar",children:(0,r.jsx)("div",{className:"navbar-nav ms-auto",children:m.map((function(e){return(0,r.jsx)("a",{className:"nav-link ".concat(i().Nav," ").concat(e.id==a?b:""),href:e.path,"data-bs-toggle":"collapse","data-bs-target":"#navbar","aria-controls":"navbar",onClick:function(){return t=e.id,d(t),void(y.width<992&&setTimeout((function(){document.getElementById("button").click()}),700));var t},children:(0,r.jsx)("h6",{className:i().NavItem,children:e.label})},e.label)}))})})]})})})}var f=[],p=[{label:"Home",path:"#Home",id:"Home"},{label:"About",path:"#About",id:"About"},{label:"Live Now",path:"#Live_Now",id:"Live Now"},{label:"Events",path:"#Events",id:"Events"},{label:"FAQ",path:"#FAQ",id:"FAQ"},{label:"Contact Us",path:"#ContactUs",id:"Contact Us"},{label:"Team",path:"/contact",id:"Team"}],h=[{label:"Team",path:"/contact",id:"Home"},{label:"Home Page",path:"/",id:"Home Page"}]},4123:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(7294);function a(){var e=(0,r.useState)({width:void 0,height:void 0}),t=e[0],n=e[1];return(0,r.useEffect)((function(){var e=function(){n({width:window.innerWidth,height:window.innerHeight})};return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),t}},8045:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,a=!1,i=void 0;try{for(var o,c=e[Symbol.iterator]();!(r=(o=c.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(l){a=!0,i=l}finally{try{r||null==c.return||c.return()}finally{if(a)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function i(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}t.default=function(e){var t=e.src,n=e.sizes,i=e.unoptimized,s=void 0!==i&&i,d=e.priority,f=void 0!==d&&d,m=e.loading,y=e.lazyBoundary,w=void 0===y?"200px":y,j=e.className,x=e.quality,A=e.width,E=e.height,N=e.objectFit,O=e.objectPosition,z=e.onLoadingComplete,L=e.loader,I=void 0===L?S:L,P=e.placeholder,C=void 0===P?"empty":P,R=e.blurDataURL,D=function(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}(e,["src","sizes","unoptimized","priority","loading","lazyBoundary","className","quality","width","height","objectFit","objectPosition","onLoadingComplete","loader","placeholder","blurDataURL"]),H=n?"responsive":"intrinsic";"layout"in D&&(D.layout&&(H=D.layout),delete D.layout);var M="";if(function(e){return"object"===typeof e&&(g(e)||function(e){return void 0!==e.src}(e))}(t)){var q=g(t)?t.default:t;if(!q.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(q)));if(R=R||q.blurDataURL,M=q.src,(!H||"fill"!==H)&&(E=E||q.height,A=A||q.width,!q.height||!q.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(q)))}t="string"===typeof t?t:M;var T=_(A),U=_(E),K=_(x),W=!f&&("lazy"===m||"undefined"===typeof m);(t.startsWith("data:")||t.startsWith("blob:"))&&(s=!0,W=!1);h.has(t)&&(W=!1);0;var F,B=a(u.useIntersection({rootMargin:w,disabled:!W}),2),Z=B[0],G=B[1],J=!W||G,Q={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},X={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},V=!1,Y={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:N,objectPosition:O},$="blur"===C?{filter:"blur(20px)",backgroundSize:N||"cover",backgroundImage:'url("'.concat(R,'")'),backgroundPosition:O||"0% 0%"}:{};if("fill"===H)Q.display="block",Q.position="absolute",Q.top=0,Q.left=0,Q.bottom=0,Q.right=0;else if("undefined"!==typeof T&&"undefined"!==typeof U){var ee=U/T,te=isNaN(ee)?"100%":"".concat(100*ee,"%");"responsive"===H?(Q.display="block",Q.position="relative",V=!0,X.paddingTop=te):"intrinsic"===H?(Q.display="inline-block",Q.position="relative",Q.maxWidth="100%",V=!0,X.maxWidth="100%",F='<svg width="'.concat(T,'" height="').concat(U,'" xmlns="http://www.w3.org/2000/svg" version="1.1"/>')):"fixed"===H&&(Q.display="inline-block",Q.position="relative",Q.width=T,Q.height=U)}else 0;var ne={src:v,srcSet:void 0,sizes:void 0};J&&(ne=k({src:t,unoptimized:s,layout:H,width:T,quality:K,sizes:n,loader:I}));var re=t;0;0;var ae=(r(b={},"imagesrcset",ne.srcSet),r(b,"imagesizes",ne.sizes),b);return o.default.createElement("span",{style:Q},V?o.default.createElement("span",{style:X},F?o.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:"data:image/svg+xml;base64,".concat(l.toBase64(F))}):null):null,o.default.createElement("img",Object.assign({},D,ne,{decoding:"async","data-nimg":H,className:j,ref:function(e){Z(e),function(e,t,n,r,a){if(!e)return;var i=function(){e.src!==v&&("decode"in e?e.decode():Promise.resolve()).catch((function(){})).then((function(){if("blur"===r&&(e.style.filter="none",e.style.backgroundSize="none",e.style.backgroundImage="none"),h.add(t),a){var n=e.naturalWidth,i=e.naturalHeight;a({naturalWidth:n,naturalHeight:i})}}))};e.complete?i():e.onload=i}(e,re,0,C,z)},style:p({},Y,$)})),o.default.createElement("noscript",null,o.default.createElement("img",Object.assign({},D,k({src:t,unoptimized:s,layout:H,width:T,quality:K,sizes:n,loader:I}),{decoding:"async","data-nimg":H,style:Y,className:j,loading:m||"lazy"}))),f?o.default.createElement(c.default,null,o.default.createElement("link",Object.assign({key:"__nimg-"+ne.src+ne.srcSet+ne.sizes,rel:"preload",as:"image",href:ne.srcSet?void 0:ne.src},ae))):null)};var o=f(n(7294)),c=f(n(5443)),l=n(6978),s=n(5809),u=n(7190);function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function f(e){return e&&e.__esModule?e:{default:e}}function p(e){for(var t=arguments,n=function(n){var r=null!=t[n]?t[n]:{},a=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),a.forEach((function(t){d(e,t,r[t])}))},r=1;r<arguments.length;r++)n(r);return e}var h=new Set,v=(new Map,"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");var m=new Map([["default",function(e){var t=e.root,n=e.src,r=e.width,a=e.quality;0;return"".concat(t,"?url=").concat(encodeURIComponent(n),"&w=").concat(r,"&q=").concat(a||75)}],["imgix",function(e){var t=e.root,n=e.src,r=e.width,a=e.quality,i=new URL("".concat(t).concat(N(n))),o=i.searchParams;o.set("auto",o.get("auto")||"format"),o.set("fit",o.get("fit")||"max"),o.set("w",o.get("w")||r.toString()),a&&o.set("q",a.toString());return i.href}],["cloudinary",function(e){var t=e.root,n=e.src,r=e.width,a=e.quality,i=["f_auto","c_limit","w_"+r,"q_"+(a||"auto")].join(",")+"/";return"".concat(t).concat(i).concat(N(n))}],["akamai",function(e){var t=e.root,n=e.src,r=e.width;return"".concat(t).concat(N(n),"?imwidth=").concat(r)}],["custom",function(e){var t=e.src;throw new Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function g(e){return void 0!==e.default}var b,y={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"",loader:"akamai"}||s.imageConfigDefault,w=y.deviceSizes,j=y.imageSizes,x=y.loader,A=y.path,E=(y.domains,i(w).concat(i(j)));function k(e){var t=e.src,n=e.unoptimized,r=e.layout,a=e.width,o=e.quality,c=e.sizes,l=e.loader;if(n)return{src:t,srcSet:void 0,sizes:void 0};var s=function(e,t,n){if(n&&("fill"===t||"responsive"===t)){for(var r,a=/(^|\s)(1?\d?\d)vw/g,o=[];r=a.exec(n);r)o.push(parseInt(r[2]));if(o.length){var c,l=.01*(c=Math).min.apply(c,i(o));return{widths:E.filter((function(e){return e>=w[0]*l})),kind:"w"}}return{widths:E,kind:"w"}}return"number"!==typeof e||"fill"===t||"responsive"===t?{widths:w,kind:"w"}:{widths:i(new Set([e,2*e].map((function(e){return E.find((function(t){return t>=e}))||E[E.length-1]})))),kind:"x"}}(a,r,c),u=s.widths,d=s.kind,f=u.length-1;return{sizes:c||"w"!==d?c:"100vw",srcSet:u.map((function(e,n){return"".concat(l({src:t,quality:o,width:e})," ").concat("w"===d?e:n+1).concat(d)})).join(", "),src:l({src:t,quality:o,width:u[f]})}}function _(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function S(e){var t=m.get(x);if(t)return t(p({root:A},e));throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(s.VALID_LOADERS.join(", "),". Received: ").concat(x))}function N(e){return"/"===e[0]?e.slice(1):e}w.sort((function(e,t){return e-t})),E.sort((function(e,t){return e-t}))},8418:function(e,t,n){"use strict";function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,a=!1,i=void 0;try{for(var o,c=e[Symbol.iterator]();!(r=(o=c.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(l){a=!0,i=l}finally{try{r||null==c.return||c.return()}finally{if(a)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}t.default=void 0;var a,i=(a=n(7294))&&a.__esModule?a:{default:a},o=n(6273),c=n(387),l=n(7190);var s={};function u(e,t,n,r){if(e&&o.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var a=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;s[t+"%"+n+(a?"%"+a:"")]=!0}}var d=function(e){var t,n=!1!==e.prefetch,a=c.useRouter(),d=i.default.useMemo((function(){var t=r(o.resolveHref(a,e.href,!0),2),n=t[0],i=t[1];return{href:n,as:e.as?o.resolveHref(a,e.as):i||n}}),[a,e.href,e.as]),f=d.href,p=d.as,h=e.children,v=e.replace,m=e.shallow,g=e.scroll,b=e.locale;"string"===typeof h&&(h=i.default.createElement("a",null,h));var y=(t=i.default.Children.only(h))&&"object"===typeof t&&t.ref,w=r(l.useIntersection({rootMargin:"200px"}),2),j=w[0],x=w[1],A=i.default.useCallback((function(e){j(e),y&&("function"===typeof y?y(e):"object"===typeof y&&(y.current=e))}),[y,j]);i.default.useEffect((function(){var e=x&&n&&o.isLocalURL(f),t="undefined"!==typeof b?b:a&&a.locale,r=s[f+"%"+p+(t?"%"+t:"")];e&&!r&&u(a,f,p,{locale:t})}),[p,f,x,b,n,a]);var E={ref:A,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,a,i,c,l){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&o.isLocalURL(n))&&(e.preventDefault(),null==c&&r.indexOf("#")>=0&&(c=!1),t[a?"replace":"push"](n,r,{shallow:i,locale:l,scroll:c}))}(e,a,f,p,v,m,g,b)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),o.isLocalURL(f)&&u(a,f,p,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var k="undefined"!==typeof b?b:a&&a.locale,_=a&&a.isLocaleDomain&&o.getDomainLocale(p,k,a&&a.locales,a&&a.domainLocales);E.href=_||o.addBasePath(o.addLocale(p,k,a&&a.defaultLocale))}return i.default.cloneElement(t,E)};t.default=d},7190:function(e,t,n){"use strict";function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,a=!1,i=void 0;try{for(var o,c=e[Symbol.iterator]();!(r=(o=c.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(l){a=!0,i=l}finally{try{r||null==c.return||c.return()}finally{if(a)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!o,l=a.useRef(),s=r(a.useState(!1),2),u=s[0],d=s[1],f=a.useCallback((function(e){l.current&&(l.current(),l.current=void 0),n||u||e&&e.tagName&&(l.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=c.get(t);if(n)return n;var r=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return c.set(t,n={id:t,observer:a,elements:r}),n}(n),a=r.id,i=r.observer,o=r.elements;return o.set(e,t),i.observe(e),function(){o.delete(e),i.unobserve(e),0===o.size&&(i.disconnect(),c.delete(a))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[n,t,u]);return a.useEffect((function(){if(!o&&!u){var e=i.requestIdleCallback((function(){return d(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[u]),[f,u]};var a=n(7294),i=n(9311),o="undefined"!==typeof IntersectionObserver;var c=new Map},6978:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.toBase64=function(e){return window.btoa(e)}},8510:function(e,t,n){"use strict";n.r(t);var r=n(5893),a=n(7845);n(906);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){i(e,t,n[t])}))}return e}t.default=function(e){var t=e.Component,n=e.pageProps;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.Z,{}),(0,r.jsx)(t,o({},n)),(0,r.jsx)("script",{src:"https://code.jquery.com/jquery-3.2.1.slim.min.js",integrity:"sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN",crossOrigin:"anonymous",async:!0}),(0,r.jsx)("script",{src:"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.3/js/bootstrap.min.js",integrity:"sha384-a5N7Y/aK3qNeh15eJKGWxsqtnX/wWdSZSKp+81YjTmS15nvnvxKHuzaWwXHDli+4",crossOrigin:"anonymous",async:!0})]})}},8846:function(e){e.exports={Navbar:"Navbar_Navbar__i5ZpK",link:"Navbar_link__REZg_",NavItem:"Navbar_NavItem__OhDtj",style:"Navbar_style__zhSUS",Nav:"Navbar_Nav__gLHHy"}},906:function(){},5809:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.imageConfigDefault=t.VALID_LOADERS=void 0;t.VALID_LOADERS=["default","imgix","cloudinary","akamai","custom"];t.imageConfigDefault={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"]}},5675:function(e,t,n){e.exports=n(8045)},1664:function(e,t,n){e.exports=n(8418)},1163:function(e,t,n){e.exports=n(387)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(1780),t(387)}));var n=e.O();_N_E=n}]);