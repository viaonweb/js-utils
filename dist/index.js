!function(t,r){"object"==typeof exports&&"object"==typeof module?module.exports=r():"function"==typeof define&&define.amd?define([],r):"object"==typeof exports?exports.awesomeUtils=r():t.awesomeUtils=r()}(window,(function(){return function(t){var r={};function n(e){if(r[e])return r[e].exports;var o=r[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=r,n.d=function(t,r,e){n.o(t,r)||Object.defineProperty(t,r,{enumerable:!0,get:e})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,r){if(1&r&&(t=n(t)),8&r)return t;if(4&r&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(n.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&r&&"string"!=typeof t)for(var o in t)n.d(e,o,function(r){return t[r]}.bind(null,o));return e},n.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(r,"a",r),r},n.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},n.p="",n(n.s=6)}([function(t,r,n){var e=n(1),o=n(2),i=n(3),u=n(5);t.exports=function(t,r){return e(t)||o(t,r)||i(t,r)||u()}},function(t,r){t.exports=function(t){if(Array.isArray(t))return t}},function(t,r){t.exports=function(t,r){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var n=[],e=!0,o=!1,i=void 0;try{for(var u,f=t[Symbol.iterator]();!(e=(u=f.next()).done)&&(n.push(u.value),!r||n.length!==r);e=!0);}catch(t){o=!0,i=t}finally{try{e||null==f.return||f.return()}finally{if(o)throw i}}return n}}},function(t,r,n){var e=n(4);t.exports=function(t,r){if(t){if("string"==typeof t)return e(t,r);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?e(t,r):void 0}}},function(t,r){t.exports=function(t,r){(null==r||r>t.length)&&(r=t.length);for(var n=0,e=new Array(r);n<r;n++)e[n]=t[n];return e}},function(t,r){t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},function(t,r,n){"use strict";n.r(r),n.d(r,"compareVersion",(function(){return e})),n.d(r,"device",(function(){return s})),n.d(r,"getUrlParam",(function(){return v})),n.d(r,"promisefy",(function(){return y})),n.d(r,"throttle",(function(){return h}));var e=function(t,r){for(var n=t.split("."),e=r.split("."),o=n.length,i=e.length,u=Math.min(o,i),f=0;f<u;f++){var a=parseInt(n[f]),c=parseInt(e[f]);if(a>c)return 1;if(a<c)return-1}if(o>i){for(var l=f;l<o;l++)if(0!=parseInt(n[l]))return 1;return 0}if(o<i){for(var s=f;s<i;s++)if(0!=parseInt(e[s]))return-1;return 0}return 0},o=window.navigator.userAgent.toLowerCase(),i=/android/i.test(o),u=/\(i[^;]+;( U;)? CPU.+Mac OS X/i.test(o),f=/AliApp\(LT/i.test(o),a=/AliApp\(TM/i.test(o),c=/AliApp\(TB/i.test(o),l=/AliApp\(AP/i.test(o),s={isAndroid:i,isIos:u,isIPhoneX:u&&(812===screen.height&&375===screen.width||896===screen.height&&414===screen.width),isTJ:f,isTM:a,isTB:c,isAP:l},p=n(0),d=n.n(p),v=function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:window.location.href,n={},e=r.split("?")[1];if(!e)return"";var o=e.split("#")[0],i=o.split("&");return i.forEach((function(t){var r=t.split("="),e=d()(r,2),o=e[0],i=e[1],u=void 0===i?"":i;n[o]=u})),n[t]},y=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];r[r.length-1]("promisefy`s param format is wrong")};return function(){for(var r=arguments.length,n=new Array(r),e=0;e<r;e++)n[e]=arguments[e];var o=n[0],i=void 0===o?"":o,u=n[1],f=void 0===u?"":u,a=n[2],c=void 0===a?{}:a;return new Promise((function(r,n){t.call(void 0,i,f,c,(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";r(t)}),(function(t){n(t),console.log(t)}))}))}},h=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){},r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:80,n=!0;return function(){for(var e=arguments.length,o=new Array(e),i=0;i<e;i++)o[i]=arguments[i];if(!n)return!1;n=!1,setTimeout((function(){t.apply(void 0,o),n=!0}),r)}}}])}));