var app=function(){"use strict";function e(){}function t(e){return e()}function n(){return Object.create(null)}function l(e){e.forEach(t)}function o(e){return"function"==typeof e}function c(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}let i,r;function a(e,t){return i||(i=document.createElement("a")),i.href=t,e===i.href}function s(e,t){e.appendChild(t)}function f(e,t,n){e.insertBefore(t,n||null)}function u(e){e.parentNode.removeChild(e)}function m(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function d(e){return document.createElement(e)}function p(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function h(e){return document.createTextNode(e)}function g(){return h(" ")}function $(e,t,n,l){return e.addEventListener(t,n,l),()=>e.removeEventListener(t,n,l)}function v(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function _(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function y(e,t,n,l){null===n?e.style.removeProperty(t):e.style.setProperty(t,n,l?"important":"")}function w(e,t,n){e.classList[n?"add":"remove"](t)}function z(e){r=e}function b(e){(function(){if(!r)throw new Error("Function called outside component initialization");return r})().$$.on_mount.push(e)}const x=[],C=[],H=[],V=[],M=Promise.resolve();let L=!1;function k(e){H.push(e)}const N=new Set;let D=0;function O(){const e=r;do{for(;D<x.length;){const e=x[D];D++,z(e),S(e.$$)}for(z(null),x.length=0,D=0;C.length;)C.pop()();for(let e=0;e<H.length;e+=1){const t=H[e];N.has(t)||(N.add(t),t())}H.length=0}while(x.length);for(;V.length;)V.pop()();L=!1,N.clear(),z(e)}function S(e){if(null!==e.fragment){e.update(),l(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(k)}}const E=new Set;let j;function A(){j={r:0,c:[],p:j}}function R(){j.r||l(j.c),j=j.p}function B(e,t){e&&e.i&&(E.delete(e),e.i(t))}function F(e,t,n,l){if(e&&e.o){if(E.has(e))return;E.add(e),j.c.push((()=>{E.delete(e),l&&(n&&e.d(1),l())})),e.o(t)}else l&&l()}function W(e){e&&e.c()}function X(e,n,c,i){const{fragment:r,on_mount:a,on_destroy:s,after_update:f}=e.$$;r&&r.m(n,c),i||k((()=>{const n=a.map(t).filter(o);s?s.push(...n):l(n),e.$$.on_mount=[]})),f.forEach(k)}function q(e,t){const n=e.$$;null!==n.fragment&&(l(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function T(e,t){-1===e.$$.dirty[0]&&(x.push(e),L||(L=!0,M.then(O)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function P(t,o,c,i,a,s,f,m=[-1]){const d=r;z(t);const p=t.$$={fragment:null,ctx:null,props:s,update:e,not_equal:a,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(o.context||(d?d.$$.context:[])),callbacks:n(),dirty:m,skip_bound:!1,root:o.target||d.$$.root};f&&f(p.root);let h=!1;if(p.ctx=c?c(t,o.props||{},((e,n,...l)=>{const o=l.length?l[0]:n;return p.ctx&&a(p.ctx[e],p.ctx[e]=o)&&(!p.skip_bound&&p.bound[e]&&p.bound[e](o),h&&T(t,e)),n})):[],p.update(),h=!0,l(p.before_update),p.fragment=!!i&&i(p.ctx),o.target){if(o.hydrate){const e=function(e){return Array.from(e.childNodes)}(o.target);p.fragment&&p.fragment.l(e),e.forEach(u)}else p.fragment&&p.fragment.c();o.intro&&B(t.$$.fragment),X(t,o.target,o.anchor,o.customElement),O()}z(d)}class Y{$destroy(){q(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const K=parseFloat;function I(e,t=";"){let n;if(Array.isArray(e))n=e.filter((e=>e));else{n=[];for(const t in e)e[t]&&n.push(`${t}:${e[t]}`)}return n.join(t)}function Z(e){let t,n,l,o,c,i,r,a;function m(e,t){return"string"==typeof e[10][4]?G:J}let d=m(e),h=d(e);return{c(){t=p("svg"),n=p("g"),l=p("g"),h.c(),v(l,"transform",e[12]),v(n,"transform",o="translate("+e[10][0]/2+" "+e[10][1]/2+")"),v(n,"transform-origin",c=e[10][0]/4+" 0"),v(t,"id",i=e[1]||void 0),v(t,"class",r="svelte-fa "+e[0]+" svelte-1cj2gr0"),v(t,"style",e[11]),v(t,"viewBox",a="0 0 "+e[10][0]+" "+e[10][1]),v(t,"aria-hidden","true"),v(t,"role","img"),v(t,"xmlns","http://www.w3.org/2000/svg"),w(t,"pulse",e[4]),w(t,"spin",e[3])},m(e,o){f(e,t,o),s(t,n),s(n,l),h.m(l,null)},p(e,s){d===(d=m(e))&&h?h.p(e,s):(h.d(1),h=d(e),h&&(h.c(),h.m(l,null))),4096&s&&v(l,"transform",e[12]),1024&s&&o!==(o="translate("+e[10][0]/2+" "+e[10][1]/2+")")&&v(n,"transform",o),1024&s&&c!==(c=e[10][0]/4+" 0")&&v(n,"transform-origin",c),2&s&&i!==(i=e[1]||void 0)&&v(t,"id",i),1&s&&r!==(r="svelte-fa "+e[0]+" svelte-1cj2gr0")&&v(t,"class",r),2048&s&&v(t,"style",e[11]),1024&s&&a!==(a="0 0 "+e[10][0]+" "+e[10][1])&&v(t,"viewBox",a),17&s&&w(t,"pulse",e[4]),9&s&&w(t,"spin",e[3])},d(e){e&&u(t),h.d()}}}function J(e){let t,n,l,o,c,i,r,a,s,m;return{c(){t=p("path"),i=p("path"),v(t,"d",n=e[10][4][0]),v(t,"fill",l=e[6]||e[2]||"currentColor"),v(t,"fill-opacity",o=0!=e[9]?e[7]:e[8]),v(t,"transform",c="translate("+e[10][0]/-2+" "+e[10][1]/-2+")"),v(i,"d",r=e[10][4][1]),v(i,"fill",a=e[5]||e[2]||"currentColor"),v(i,"fill-opacity",s=0!=e[9]?e[8]:e[7]),v(i,"transform",m="translate("+e[10][0]/-2+" "+e[10][1]/-2+")")},m(e,n){f(e,t,n),f(e,i,n)},p(e,f){1024&f&&n!==(n=e[10][4][0])&&v(t,"d",n),68&f&&l!==(l=e[6]||e[2]||"currentColor")&&v(t,"fill",l),896&f&&o!==(o=0!=e[9]?e[7]:e[8])&&v(t,"fill-opacity",o),1024&f&&c!==(c="translate("+e[10][0]/-2+" "+e[10][1]/-2+")")&&v(t,"transform",c),1024&f&&r!==(r=e[10][4][1])&&v(i,"d",r),36&f&&a!==(a=e[5]||e[2]||"currentColor")&&v(i,"fill",a),896&f&&s!==(s=0!=e[9]?e[8]:e[7])&&v(i,"fill-opacity",s),1024&f&&m!==(m="translate("+e[10][0]/-2+" "+e[10][1]/-2+")")&&v(i,"transform",m)},d(e){e&&u(t),e&&u(i)}}}function G(e){let t,n,l,o;return{c(){t=p("path"),v(t,"d",n=e[10][4]),v(t,"fill",l=e[2]||e[5]||"currentColor"),v(t,"transform",o="translate("+e[10][0]/-2+" "+e[10][1]/-2+")")},m(e,n){f(e,t,n)},p(e,c){1024&c&&n!==(n=e[10][4])&&v(t,"d",n),36&c&&l!==(l=e[2]||e[5]||"currentColor")&&v(t,"fill",l),1024&c&&o!==(o="translate("+e[10][0]/-2+" "+e[10][1]/-2+")")&&v(t,"transform",o)},d(e){e&&u(t)}}}function Q(t){let n,l=t[10][4]&&Z(t);return{c(){l&&l.c(),n=h("")},m(e,t){l&&l.m(e,t),f(e,n,t)},p(e,[t]){e[10][4]?l?l.p(e,t):(l=Z(e),l.c(),l.m(n.parentNode,n)):l&&(l.d(1),l=null)},i:e,o:e,d(e){l&&l.d(e),e&&u(n)}}}function U(e,t,n){let l,o,c,{class:i=""}=t,{id:r=""}=t,{style:a=""}=t,{icon:s}=t,{size:f=""}=t,{color:u=""}=t,{fw:m=!1}=t,{pull:d=""}=t,{scale:p=1}=t,{translateX:h=0}=t,{translateY:g=0}=t,{rotate:$=""}=t,{flip:v=!1}=t,{spin:_=!1}=t,{pulse:y=!1}=t,{primaryColor:w=""}=t,{secondaryColor:z=""}=t,{primaryOpacity:b=1}=t,{secondaryOpacity:x=.4}=t,{swapOpacity:C=!1}=t;return e.$$set=e=>{"class"in e&&n(0,i=e.class),"id"in e&&n(1,r=e.id),"style"in e&&n(13,a=e.style),"icon"in e&&n(14,s=e.icon),"size"in e&&n(15,f=e.size),"color"in e&&n(2,u=e.color),"fw"in e&&n(16,m=e.fw),"pull"in e&&n(17,d=e.pull),"scale"in e&&n(18,p=e.scale),"translateX"in e&&n(19,h=e.translateX),"translateY"in e&&n(20,g=e.translateY),"rotate"in e&&n(21,$=e.rotate),"flip"in e&&n(22,v=e.flip),"spin"in e&&n(3,_=e.spin),"pulse"in e&&n(4,y=e.pulse),"primaryColor"in e&&n(5,w=e.primaryColor),"secondaryColor"in e&&n(6,z=e.secondaryColor),"primaryOpacity"in e&&n(7,b=e.primaryOpacity),"secondaryOpacity"in e&&n(8,x=e.secondaryOpacity),"swapOpacity"in e&&n(9,C=e.swapOpacity)},e.$$.update=()=>{16384&e.$$.dirty&&n(10,l=s&&s.icon||[0,0,"",[],""]),237568&e.$$.dirty&&n(11,o=function(e,t,n,l){let o,c,i,r,a,s="-.125em";return l&&(a="center",c="1.25em"),n&&(o=n),t&&("lg"==t?(r="1.33333em",i=".75em",s="-.225em"):r="xs"==t?".75em":"sm"==t?".875em":t.replace("x","em")),I([I({float:o,width:c,height:"1em","line-height":i,"font-size":r,"text-align":a,"vertical-align":s,"transform-origin":"center",overflow:"visible"}),e])}(a,f,d,m)),8126464&e.$$.dirty&&n(12,c=function(e,t,n,l,o,c=1,i="",r=""){let a=1,s=1;return o&&("horizontal"==o?a=-1:"vertical"==o?s=-1:a=s=-1),I([`translate(${K(t)*c}${i},${K(n)*c}${i})`,`scale(${a*K(e)},${s*K(e)})`,l&&`rotate(${l}${r})`]," ")}(p,h,g,$,v,512))},[i,r,u,_,y,w,z,b,x,C,l,o,c,a,s,f,m,d,p,h,g,$,v]}class ee extends Y{constructor(e){super(),P(this,e,U,Q,c,{class:0,id:1,style:13,icon:14,size:15,color:2,fw:16,pull:17,scale:18,translateX:19,translateY:20,rotate:21,flip:22,spin:3,pulse:4,primaryColor:5,secondaryColor:6,primaryOpacity:7,secondaryOpacity:8,swapOpacity:9})}}
/*!
     * Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com
     * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
     */var te={prefix:"fas",iconName:"caret-down",icon:[320,512,[],"f0d7","M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"]},ne={prefix:"fas",iconName:"caret-up",icon:[320,512,[],"f0d8","M288.662 352H31.338c-17.818 0-26.741-21.543-14.142-34.142l128.662-128.662c7.81-7.81 20.474-7.81 28.284 0l128.662 128.662c12.6 12.599 3.676 34.142-14.142 34.142z"]},le={prefix:"fas",iconName:"file",icon:[384,512,[],"f15b","M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm160-14.1v6.1H256V0h6.1c6.4 0 12.5 2.5 17 7l97.9 98c4.5 4.5 7 10.6 7 16.9z"]},oe={prefix:"fas",iconName:"file-alt",icon:[384,512,[],"f15c","M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm64 236c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12v8zm0-64c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12v8zm0-72v8c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12zm96-114.1v6.1H256V0h6.1c6.4 0 12.5 2.5 17 7l97.9 98c4.5 4.5 7 10.6 7 16.9z"]},ce={prefix:"fas",iconName:"file-audio",icon:[384,512,[],"f1c7","M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm-64 268c0 10.7-12.9 16-20.5 8.5L104 376H76c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h28l35.5-36.5c7.6-7.6 20.5-2.2 20.5 8.5v136zm33.2-47.6c9.1-9.3 9.1-24.1 0-33.4-22.1-22.8 12.2-56.2 34.4-33.5 27.2 27.9 27.2 72.4 0 100.4-21.8 22.3-56.9-10.4-34.4-33.5zm86-117.1c54.4 55.9 54.4 144.8 0 200.8-21.8 22.4-57-10.3-34.4-33.5 36.2-37.2 36.3-96.5 0-133.8-22.1-22.8 12.3-56.3 34.4-33.5zM384 121.9v6.1H256V0h6.1c6.4 0 12.5 2.5 17 7l97.9 98c4.5 4.5 7 10.6 7 16.9z"]},ie={prefix:"fas",iconName:"file-csv",icon:[384,512,[],"f6dd","M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm-96 144c0 4.42-3.58 8-8 8h-8c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h8c4.42 0 8 3.58 8 8v16c0 4.42-3.58 8-8 8h-8c-26.51 0-48-21.49-48-48v-32c0-26.51 21.49-48 48-48h8c4.42 0 8 3.58 8 8v16zm44.27 104H160c-4.42 0-8-3.58-8-8v-16c0-4.42 3.58-8 8-8h12.27c5.95 0 10.41-3.5 10.41-6.62 0-1.3-.75-2.66-2.12-3.84l-21.89-18.77c-8.47-7.22-13.33-17.48-13.33-28.14 0-21.3 19.02-38.62 42.41-38.62H200c4.42 0 8 3.58 8 8v16c0 4.42-3.58 8-8 8h-12.27c-5.95 0-10.41 3.5-10.41 6.62 0 1.3.75 2.66 2.12 3.84l21.89 18.77c8.47 7.22 13.33 17.48 13.33 28.14.01 21.29-19 38.62-42.39 38.62zM256 264v20.8c0 20.27 5.7 40.17 16 56.88 10.3-16.7 16-36.61 16-56.88V264c0-4.42 3.58-8 8-8h16c4.42 0 8 3.58 8 8v20.8c0 35.48-12.88 68.89-36.28 94.09-3.02 3.25-7.27 5.11-11.72 5.11s-8.7-1.86-11.72-5.11c-23.4-25.2-36.28-58.61-36.28-94.09V264c0-4.42 3.58-8 8-8h16c4.42 0 8 3.58 8 8zm121-159L279.1 7c-4.5-4.5-10.6-7-17-7H256v128h128v-6.1c0-6.3-2.5-12.4-7-16.9z"]},re={prefix:"fas",iconName:"file-excel",icon:[384,512,[],"f1c3","M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm60.1 106.5L224 336l60.1 93.5c5.1 8-.6 18.5-10.1 18.5h-34.9c-4.4 0-8.5-2.4-10.6-6.3C208.9 405.5 192 373 192 373c-6.4 14.8-10 20-36.6 68.8-2.1 3.9-6.1 6.3-10.5 6.3H110c-9.5 0-15.2-10.5-10.1-18.5l60.3-93.5-60.3-93.5c-5.2-8 .6-18.5 10.1-18.5h34.8c4.4 0 8.5 2.4 10.6 6.3 26.1 48.8 20 33.6 36.6 68.5 0 0 6.1-11.7 36.6-68.5 2.1-3.9 6.2-6.3 10.6-6.3H274c9.5-.1 15.2 10.4 10.1 18.4zM384 121.9v6.1H256V0h6.1c6.4 0 12.5 2.5 17 7l97.9 98c4.5 4.5 7 10.6 7 16.9z"]},ae={prefix:"fas",iconName:"file-image",icon:[384,512,[],"f1c5","M384 121.941V128H256V0h6.059a24 24 0 0 1 16.97 7.029l97.941 97.941a24.002 24.002 0 0 1 7.03 16.971zM248 160c-13.2 0-24-10.8-24-24V0H24C10.745 0 0 10.745 0 24v464c0 13.255 10.745 24 24 24h336c13.255 0 24-10.745 24-24V160H248zm-135.455 16c26.51 0 48 21.49 48 48s-21.49 48-48 48-48-21.49-48-48 21.491-48 48-48zm208 240h-256l.485-48.485L104.545 328c4.686-4.686 11.799-4.201 16.485.485L160.545 368 264.06 264.485c4.686-4.686 12.284-4.686 16.971 0L320.545 304v112z"]},se={prefix:"fas",iconName:"file-pdf",icon:[384,512,[],"f1c1","M181.9 256.1c-5-16-4.9-46.9-2-46.9 8.4 0 7.6 36.9 2 46.9zm-1.7 47.2c-7.7 20.2-17.3 43.3-28.4 62.7 18.3-7 39-17.2 62.9-21.9-12.7-9.6-24.9-23.4-34.5-40.8zM86.1 428.1c0 .8 13.2-5.4 34.9-40.2-6.7 6.3-29.1 24.5-34.9 40.2zM248 160h136v328c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V24C0 10.7 10.7 0 24 0h200v136c0 13.2 10.8 24 24 24zm-8 171.8c-20-12.2-33.3-29-42.7-53.8 4.5-18.5 11.6-46.6 6.2-64.2-4.7-29.4-42.4-26.5-47.8-6.8-5 18.3-.4 44.1 8.1 77-11.6 27.6-28.7 64.6-40.8 85.8-.1 0-.1.1-.2.1-27.1 13.9-73.6 44.5-54.5 68 5.6 6.9 16 10 21.5 10 17.9 0 35.7-18 61.1-61.8 25.8-8.5 54.1-19.1 79-23.2 21.7 11.8 47.1 19.5 64 19.5 29.2 0 31.2-32 19.7-43.4-13.9-13.6-54.3-9.7-73.6-7.2zM377 105L279 7c-4.5-4.5-10.6-7-17-7h-6v128h128v-6.1c0-6.3-2.5-12.4-7-16.9zm-74.1 255.3c4.1-2.7-2.5-11.9-42.8-9 37.1 15.8 42.8 9 42.8 9z"]},fe={prefix:"fas",iconName:"file-video",icon:[384,512,[],"f1c8","M384 121.941V128H256V0h6.059c6.365 0 12.47 2.529 16.971 7.029l97.941 97.941A24.005 24.005 0 0 1 384 121.941zM224 136V0H24C10.745 0 0 10.745 0 24v464c0 13.255 10.745 24 24 24h336c13.255 0 24-10.745 24-24V160H248c-13.2 0-24-10.8-24-24zm96 144.016v111.963c0 21.445-25.943 31.998-40.971 16.971L224 353.941V392c0 13.255-10.745 24-24 24H88c-13.255 0-24-10.745-24-24V280c0-13.255 10.745-24 24-24h112c13.255 0 24 10.745 24 24v38.059l55.029-55.013c15.011-15.01 40.971-4.491 40.971 16.97z"]},ue={prefix:"fas",iconName:"file-word",icon:[384,512,[],"f1c2","M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm57.1 120H305c7.7 0 13.4 7.1 11.7 14.7l-38 168c-1.2 5.5-6.1 9.3-11.7 9.3h-38c-5.5 0-10.3-3.8-11.6-9.1-25.8-103.5-20.8-81.2-25.6-110.5h-.5c-1.1 14.3-2.4 17.4-25.6 110.5-1.3 5.3-6.1 9.1-11.6 9.1H117c-5.6 0-10.5-3.9-11.7-9.4l-37.8-168c-1.7-7.5 4-14.6 11.7-14.6h24.5c5.7 0 10.7 4 11.8 9.7 15.6 78 20.1 109.5 21 122.2 1.6-10.2 7.3-32.7 29.4-122.7 1.3-5.4 6.1-9.1 11.7-9.1h29.1c5.6 0 10.4 3.8 11.7 9.2 24 100.4 28.8 124 29.6 129.4-.2-11.2-2.6-17.8 21.6-129.2 1-5.6 5.9-9.5 11.5-9.5zM384 121.9v6.1H256V0h6.1c6.4 0 12.5 2.5 17 7l97.9 98c4.5 4.5 7 10.6 7 16.9z"]},me={prefix:"fas",iconName:"folder",icon:[512,512,[],"f07b","M464 128H272l-64-64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V176c0-26.51-21.49-48-48-48z"]},de={prefix:"fas",iconName:"folder-plus",icon:[512,512,[],"f65e","M464,128H272L208,64H48A48,48,0,0,0,0,112V400a48,48,0,0,0,48,48H464a48,48,0,0,0,48-48V176A48,48,0,0,0,464,128ZM359.5,296a16,16,0,0,1-16,16h-64v64a16,16,0,0,1-16,16h-16a16,16,0,0,1-16-16V312h-64a16,16,0,0,1-16-16V280a16,16,0,0,1,16-16h64V200a16,16,0,0,1,16-16h16a16,16,0,0,1,16,16v64h64a16,16,0,0,1,16,16Z"]},pe={prefix:"fas",iconName:"home",icon:[576,512,[],"f015","M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"]};function he(e,t,n){const l=e.slice();return l[28]=t[n],l}function ge(e,t,n){const l=e.slice();return l[31]=t[n],l}function $e(e,t,n){const l=e.slice();return l[34]=t[n],l}function ve(e,t,n){const l=e.slice();return l[37]=t[n],l}function _e(t){let n,l=t[37].name+"";return{c(){n=h(l)},m(e,t){f(e,n,t)},p(e,t){32&t[0]&&l!==(l=e[37].name+"")&&_(n,l)},i:e,o:e,d(e){e&&u(n)}}}function ye(e){let t,n;return t=new ee({props:{icon:e[37].icon}}),{c(){W(t.$$.fragment)},m(e,l){X(t,e,l),n=!0},p(e,n){const l={};32&n[0]&&(l.icon=e[37].icon),t.$set(l)},i(e){n||(B(t.$$.fragment,e),n=!0)},o(e){F(t.$$.fragment,e),n=!1},d(e){q(t,e)}}}function we(e){let t,n,l,c,i,r,a;const m=[ye,_e],p=[];function h(e,t){return e[37].icon?0:1}return n=h(e),l=p[n]=m[n](e),{c(){t=d("li"),l.c(),c=g(),v(t,"class","breadcrumb-item")},m(l,u){f(l,t,u),p[n].m(t,null),s(t,c),i=!0,r||(a=$(t,"click",(function(){o(e[15](e[37].location))&&e[15](e[37].location).apply(this,arguments)})),r=!0)},p(o,i){let r=n;n=h(e=o),n===r?p[n].p(e,i):(A(),F(p[r],1,1,(()=>{p[r]=null})),R(),l=p[n],l?l.p(e,i):(l=p[n]=m[n](e),l.c()),B(l,1),l.m(t,c))},i(e){i||(B(l),i=!0)},o(e){F(l),i=!1},d(e){e&&u(t),p[n].d(),r=!1,a()}}}function ze(e){let t,n=e[34].filename+"";return{c(){t=h(n)},m(e,n){f(e,t,n)},p(e,l){2&l[0]&&n!==(n=e[34].filename+"")&&_(t,n)},d(e){e&&u(t)}}}function be(e){let t,n,l=e[34].filename+"";return{c(){t=h(l),n=h("/")},m(e,l){f(e,t,l),f(e,n,l)},p(e,n){2&n[0]&&l!==(l=e[34].filename+"")&&_(t,l)},d(e){e&&u(t),e&&u(n)}}}function xe(e){let t,n,o,c,i,r,a,m,p,z,b,x,C,H,V,M,L,k,N,D,O=e[34].mimetype+"",S=(e[34].isDirectory?"":e[34].size_kb)+"",E=e[3][e[34].min_role_read]+"",j=new Date(e[34].uploaded_at).toLocaleString()+"";function A(e,t){return e[34].isDirectory?be:ze}o=new ee({props:{size:"lg",icon:e[16](e[34])}});let R=A(e),T=R(e);function P(...t){return e[24](e[34],...t)}function Y(){return e[25](e[34])}return{c(){t=d("tr"),n=d("td"),W(o.$$.fragment),c=g(),i=d("td"),T.c(),r=g(),a=d("td"),m=h(O),p=g(),z=d("td"),b=h(S),x=g(),C=d("td"),H=h(E),V=g(),M=d("td"),L=h(j),y(z,"text-align","right"),v(t,"class","svelte-16rl54v"),w(t,"selected",e[4][e[34].filename])},m(e,l){f(e,t,l),s(t,n),X(o,n,null),s(t,c),s(t,i),T.m(i,null),s(t,r),s(t,a),s(a,m),s(t,p),s(t,z),s(z,b),s(t,x),s(t,C),s(C,H),s(t,V),s(t,M),s(M,L),k=!0,N||(D=[$(t,"click",P),$(t,"dblclick",Y)],N=!0)},p(n,l){e=n;const c={};2&l[0]&&(c.icon=e[16](e[34])),o.$set(c),R===(R=A(e))&&T?T.p(e,l):(T.d(1),T=R(e),T&&(T.c(),T.m(i,null))),(!k||2&l[0])&&O!==(O=e[34].mimetype+"")&&_(m,O),(!k||2&l[0])&&S!==(S=(e[34].isDirectory?"":e[34].size_kb)+"")&&_(b,S),(!k||10&l[0])&&E!==(E=e[3][e[34].min_role_read]+"")&&_(H,E),(!k||2&l[0])&&j!==(j=new Date(e[34].uploaded_at).toLocaleString()+"")&&_(L,j),(!k||18&l[0])&&w(t,"selected",e[4][e[34].filename])},i(e){k||(B(o.$$.fragment,e),k=!0)},o(e){F(o.$$.fragment,e),k=!1},d(e){e&&u(t),q(o),T.d(),N=!1,l(D)}}}function Ce(e){let t,n,o,c,i,r,a,p,y,w,z,b,x,C,H,V,M,L,k,N,D,O,S,E,j,A,R,B,F,W,X,q,T,P,Y,K,I,Z,J,G,Q,U,ee,te,ne,le,oe=e[8].filename+"",ce=new Date(e[8].uploaded_at).toLocaleString()+"",ie=e[3][e[8].min_role_read]+"",re="image"===e[8].mime_super&&He(e),ae=!e[8].isDirectory&&Ve(e);function se(e,t){return e[8].isDirectory?Le:Me}let fe=se(e),ue=fe(e),me=e[6].length>1&&ke(e),de=e[7],pe=[];for(let t=0;t<de.length;t+=1)pe[t]=Ne(ge(e,de,t));let $e=e[2],ve=[];for(let t=0;t<$e.length;t+=1)ve[t]=De(he(e,$e,t));let _e=1===e[6].length&&Oe();return{c(){t=d("h5"),n=h(oe),o=g(),re&&re.c(),c=g(),i=d("table"),r=d("tbody"),ae&&ae.c(),a=g(),p=d("tr"),y=d("th"),y.textContent="MIME type",w=g(),z=d("td"),ue.c(),b=g(),x=d("tr"),C=d("th"),C.textContent="Created",H=g(),V=d("td"),M=h(ce),L=g(),k=d("tr"),N=d("th"),N.textContent="Role to access",D=g(),O=d("td"),S=h(ie),E=g(),j=d("div"),A=d("a"),R=h("Link"),F=h("\n           | \n          "),W=d("a"),X=h("Download"),T=g(),me&&me.c(),P=g(),Y=d("div"),K=d("select"),I=d("option"),I.textContent="Set access";for(let e=0;e<pe.length;e+=1)pe[e].c();Z=g(),J=d("select"),G=d("option"),G.textContent="Move to...";for(let e=0;e<ve.length;e+=1)ve[e].c();Q=g(),U=d("select"),ee=d("option"),ee.textContent="Action...",te=d("option"),te.textContent="Delete",_e&&_e.c(),v(N,"class","pe-1"),v(A,"href",B=`/files/serve/${e[8].location}`),v(W,"href",q=`/files/download/${e[8].location}`),I.__value="",I.value=I.__value,I.disabled=!0,I.selected=!0,v(K,"class","form-select svelte-16rl54v"),G.__value="",G.value=G.__value,G.disabled=!0,G.selected=!0,v(J,"class","form-select svelte-16rl54v"),ee.__value="",ee.value=ee.__value,ee.disabled=!0,ee.selected=!0,te.__value="Delete",te.value=te.__value,v(U,"class","form-select svelte-16rl54v"),v(Y,"class","file-actions d-flex svelte-16rl54v")},m(l,u){f(l,t,u),s(t,n),f(l,o,u),re&&re.m(l,u),f(l,c,u),f(l,i,u),s(i,r),ae&&ae.m(r,null),s(r,a),s(r,p),s(p,y),s(p,w),s(p,z),ue.m(z,null),s(r,b),s(r,x),s(x,C),s(x,H),s(x,V),s(V,M),s(r,L),s(r,k),s(k,N),s(k,D),s(k,O),s(O,S),f(l,E,u),f(l,j,u),s(j,A),s(A,R),s(j,F),s(j,W),s(W,X),f(l,T,u),me&&me.m(l,u),f(l,P,u),f(l,Y,u),s(Y,K),s(K,I);for(let e=0;e<pe.length;e+=1)pe[e].m(K,null);s(Y,Z),s(Y,J),s(J,G);for(let e=0;e<ve.length;e+=1)ve[e].m(J,null);s(Y,Q),s(Y,U),s(U,ee),s(U,te),_e&&_e.m(U,null),ne||(le=[$(K,"change",e[13]),$(J,"change",e[14]),$(U,"change",e[12])],ne=!0)},p(e,t){if(256&t[0]&&oe!==(oe=e[8].filename+"")&&_(n,oe),"image"===e[8].mime_super?re?re.p(e,t):(re=He(e),re.c(),re.m(c.parentNode,c)):re&&(re.d(1),re=null),e[8].isDirectory?ae&&(ae.d(1),ae=null):ae?ae.p(e,t):(ae=Ve(e),ae.c(),ae.m(r,a)),fe===(fe=se(e))&&ue?ue.p(e,t):(ue.d(1),ue=fe(e),ue&&(ue.c(),ue.m(z,null))),256&t[0]&&ce!==(ce=new Date(e[8].uploaded_at).toLocaleString()+"")&&_(M,ce),264&t[0]&&ie!==(ie=e[3][e[8].min_role_read]+"")&&_(S,ie),256&t[0]&&B!==(B=`/files/serve/${e[8].location}`)&&v(A,"href",B),256&t[0]&&q!==(q=`/files/download/${e[8].location}`)&&v(W,"href",q),e[6].length>1?me?me.p(e,t):(me=ke(e),me.c(),me.m(P.parentNode,P)):me&&(me.d(1),me=null),128&t[0]){let n;for(de=e[7],n=0;n<de.length;n+=1){const l=ge(e,de,n);pe[n]?pe[n].p(l,t):(pe[n]=Ne(l),pe[n].c(),pe[n].m(K,null))}for(;n<pe.length;n+=1)pe[n].d(1);pe.length=de.length}if(4&t[0]){let n;for($e=e[2],n=0;n<$e.length;n+=1){const l=he(e,$e,n);ve[n]?ve[n].p(l,t):(ve[n]=De(l),ve[n].c(),ve[n].m(J,null))}for(;n<ve.length;n+=1)ve[n].d(1);ve.length=$e.length}1===e[6].length?_e||(_e=Oe(),_e.c(),_e.m(U,null)):_e&&(_e.d(1),_e=null)},d(e){e&&u(t),e&&u(o),re&&re.d(e),e&&u(c),e&&u(i),ae&&ae.d(),ue.d(),e&&u(E),e&&u(j),e&&u(T),me&&me.d(e),e&&u(P),e&&u(Y),m(pe,e),m(ve,e),_e&&_e.d(),ne=!1,l(le)}}}function He(e){let t,n,l;return{c(){t=d("img"),v(t,"class","file-preview my-2 svelte-16rl54v"),a(t.src,n=`/files/serve/${e[8].location}`)||v(t,"src",n),v(t,"alt",l=e[8].filename)},m(e,n){f(e,t,n)},p(e,o){256&o[0]&&!a(t.src,n=`/files/serve/${e[8].location}`)&&v(t,"src",n),256&o[0]&&l!==(l=e[8].filename)&&v(t,"alt",l)},d(e){e&&u(t)}}}function Ve(e){let t,n,l,o,c,i,r=e[8].size_kb+"";return{c(){t=d("tr"),n=d("th"),n.textContent="Size",l=g(),o=d("td"),c=h(r),i=h(" KB")},m(e,r){f(e,t,r),s(t,n),s(t,l),s(t,o),s(o,c),s(o,i)},p(e,t){256&t[0]&&r!==(r=e[8].size_kb+"")&&_(c,r)},d(e){e&&u(t)}}}function Me(e){let t,n,l,o=e[8].mime_super+"",c=e[8].mime_sub+"";return{c(){t=h(o),n=h("/"),l=h(c)},m(e,o){f(e,t,o),f(e,n,o),f(e,l,o)},p(e,n){256&n[0]&&o!==(o=e[8].mime_super+"")&&_(t,o),256&n[0]&&c!==(c=e[8].mime_sub+"")&&_(l,c)},d(e){e&&u(t),e&&u(n),e&&u(l)}}}function Le(t){let n;return{c(){n=h("Directory")},m(e,t){f(e,n,t)},p:e,d(e){e&&u(n)}}}function ke(e){let t,n,l,o,c,i,r=e[6].length-1+"",a=e[6].length>2?"s":"";return{c(){t=d("strong"),n=h("and "),l=h(r),o=h(" other file"),c=h(a),i=h(":")},m(e,r){f(e,t,r),s(t,n),s(t,l),s(t,o),s(t,c),s(t,i)},p(e,t){64&t[0]&&r!==(r=e[6].length-1+"")&&_(l,r),64&t[0]&&a!==(a=e[6].length>2?"s":"")&&_(c,a)},d(e){e&&u(t)}}}function Ne(e){let t,n,l,o=e[31].role+"";return{c(){t=d("option"),n=h(o),t.__value=l=e[31].id,t.value=t.__value},m(e,l){f(e,t,l),s(t,n)},p(e,c){128&c[0]&&o!==(o=e[31].role+"")&&_(n,o),128&c[0]&&l!==(l=e[31].id)&&(t.__value=l,t.value=t.__value)},d(e){e&&u(t)}}}function De(e){let t,n,l,o=(e[28].location||"/")+"";return{c(){t=d("option"),n=h(o),t.__value=l=e[28].location||"/",t.value=t.__value},m(e,l){f(e,t,l),s(t,n)},p(e,c){4&c[0]&&o!==(o=(e[28].location||"/")+"")&&_(n,o),4&c[0]&&l!==(l=e[28].location||"/")&&(t.__value=l,t.value=t.__value)},d(e){e&&u(t)}}}function Oe(e){let t;return{c(){t=d("option"),t.textContent="Rename",t.__value="Rename",t.value=t.__value},m(e,n){f(e,t,n)},d(e){e&&u(t)}}}function Se(e){let t,n,o,c,i,r,a,p,_,w,z,b,x,C,H,V,M,L,k,N,D,O,S,E,j,T,P,Y,K,I,Z,J,G,Q,U,te,ne,le,oe,ce,ie,re,ae,se,fe,ue,me,pe,he,ge,_e,ye=e[5],ze=[];for(let t=0;t<ye.length;t+=1)ze[t]=we(ve(e,ye,t));const be=e=>F(ze[e],1,1,(()=>{ze[e]=null}));V=new ee({props:{icon:e[18]("filename",e[9],e[10])}}),N=new ee({props:{icon:e[18]("mimetype",e[9],e[10])}}),S=new ee({props:{icon:e[18]("size_kb",e[9],e[10])}}),Y=new ee({props:{icon:e[18]("min_role_read",e[9],e[10])}}),J=new ee({props:{icon:e[18]("uploaded_at",e[9],e[10])}});let He=e[1],Ve=[];for(let t=0;t<He.length;t+=1)Ve[t]=xe($e(e,He,t));const Me=e=>F(Ve[e],1,1,(()=>{Ve[e]=null}));le=new ee({props:{size:"lg",icon:de}});let Le=e[6].length>0&&Ce(e);return{c(){t=d("main"),n=d("div"),o=d("div"),c=d("div"),i=d("nav"),r=d("ol");for(let e=0;e<ze.length;e+=1)ze[e].c();a=g(),p=d("div"),_=d("table"),w=d("thead"),z=d("tr"),b=d("th"),x=g(),C=d("th"),H=h("Filename\n                "),W(V.$$.fragment),M=g(),L=d("th"),k=h("Media type\n                "),W(N.$$.fragment),D=g(),O=d("th"),W(S.$$.fragment),E=h("\n                Size (KiB)"),j=g(),T=d("th"),P=h("Role to access\n                "),W(Y.$$.fragment),K=g(),I=d("th"),Z=h("Created\n                "),W(J.$$.fragment),G=g(),Q=d("tbody");for(let e=0;e<Ve.length;e+=1)Ve[e].c();U=g(),te=d("tr"),ne=d("td"),W(le.$$.fragment),oe=g(),ce=d("td"),ce.textContent="Create new folder...",ie=g(),re=d("td"),ae=g(),se=d("td"),fe=g(),ue=d("td"),me=g(),pe=d("div"),Le&&Le.c(),v(r,"class","breadcrumb"),v(i,"aria-label","breadcrumb"),y(O,"text-align","right"),v(_,"class","table table-sm"),v(p,"class","filelist svelte-16rl54v"),v(o,"class","col-8"),v(pe,"class","col-4"),v(n,"class","row")},m(l,u){f(l,t,u),s(t,n),s(n,o),s(o,c),s(c,i),s(i,r);for(let e=0;e<ze.length;e+=1)ze[e].m(r,null);s(o,a),s(o,p),s(p,_),s(_,w),s(w,z),s(z,b),s(z,x),s(z,C),s(C,H),X(V,C,null),s(z,M),s(z,L),s(L,k),X(N,L,null),s(z,D),s(z,O),X(S,O,null),s(O,E),s(z,j),s(z,T),s(T,P),X(Y,T,null),s(z,K),s(z,I),s(I,Z),X(J,I,null),s(_,G),s(_,Q);for(let e=0;e<Ve.length;e+=1)Ve[e].m(Q,null);s(Q,U),s(Q,te),s(te,ne),X(le,ne,null),s(te,oe),s(te,ce),s(te,ie),s(te,re),s(te,ae),s(te,se),s(te,fe),s(te,ue),s(n,me),s(n,pe),Le&&Le.m(pe,null),he=!0,ge||(_e=[$(C,"click",e[19]),$(L,"click",e[20]),$(O,"click",e[21]),$(T,"click",e[22]),$(I,"click",e[23]),$(te,"click",e[26])],ge=!0)},p(e,t){if(32800&t[0]){let n;for(ye=e[5],n=0;n<ye.length;n+=1){const l=ve(e,ye,n);ze[n]?(ze[n].p(l,t),B(ze[n],1)):(ze[n]=we(l),ze[n].c(),B(ze[n],1),ze[n].m(r,null))}for(A(),n=ye.length;n<ze.length;n+=1)be(n);R()}const n={};1536&t[0]&&(n.icon=e[18]("filename",e[9],e[10])),V.$set(n);const l={};1536&t[0]&&(l.icon=e[18]("mimetype",e[9],e[10])),N.$set(l);const o={};1536&t[0]&&(o.icon=e[18]("size_kb",e[9],e[10])),S.$set(o);const c={};1536&t[0]&&(c.icon=e[18]("min_role_read",e[9],e[10])),Y.$set(c);const i={};if(1536&t[0]&&(i.icon=e[18]("uploaded_at",e[9],e[10])),J.$set(i),100378&t[0]){let n;for(He=e[1],n=0;n<He.length;n+=1){const l=$e(e,He,n);Ve[n]?(Ve[n].p(l,t),B(Ve[n],1)):(Ve[n]=xe(l),Ve[n].c(),B(Ve[n],1),Ve[n].m(Q,U))}for(A(),n=He.length;n<Ve.length;n+=1)Me(n);R()}e[6].length>0?Le?Le.p(e,t):(Le=Ce(e),Le.c(),Le.m(pe,null)):Le&&(Le.d(1),Le=null)},i(e){if(!he){for(let e=0;e<ye.length;e+=1)B(ze[e]);B(V.$$.fragment,e),B(N.$$.fragment,e),B(S.$$.fragment,e),B(Y.$$.fragment,e),B(J.$$.fragment,e);for(let e=0;e<He.length;e+=1)B(Ve[e]);B(le.$$.fragment,e),he=!0}},o(e){ze=ze.filter(Boolean);for(let e=0;e<ze.length;e+=1)F(ze[e]);F(V.$$.fragment,e),F(N.$$.fragment,e),F(S.$$.fragment,e),F(Y.$$.fragment,e),F(J.$$.fragment,e),Ve=Ve.filter(Boolean);for(let e=0;e<Ve.length;e+=1)F(Ve[e]);F(le.$$.fragment,e),he=!1},d(e){e&&u(t),m(ze,e),q(V),q(N),q(S),q(Y),q(J),m(Ve,e),q(le),Le&&Le.d(),ge=!1,l(_e)}}}async function Ee(e,t){return await fetch(e,{headers:{"X-Requested-With":"XMLHttpRequest","CSRF-Token":window._sc_globalCsrf,"Content-Type":"application/json"},method:"POST",body:JSON.stringify(t||{})})}function je(e,t,n){let l,o,{files:c=[]}=t,{directories:i=[]}=t,{roles:r={}}=t,{currentFolder:a="/"}=t,s=[],f={};const u=async function(e){const t=await fetch(`/files?dir=${a}`,{headers:{"X-Requested-With":"XMLHttpRequest"}}),u=await t.json();n(1,c=u.files);for(const e of c)e.mimetype=e.mime_sub&&e.mime_super?`${e.mime_super}/${e.mime_sub}`:"";n(2,i=u.directories),n(7,l=u.roles);for(const e of u.roles)n(3,r[e.id]=e.role,r);e?o&&n(8,o=c.find((e=>e.filename===o.filename))):(n(6,s=[]),n(4,f={}),n(8,o=null)),$("filename")};function m(e,t){e.selected=!0;const l=f[e.filename];if(t.shiftKey||n(4,f={}),n(4,f[e.filename]=!l,f),l){const e=Object.entries(f).findLast((([e,t])=>t));n(8,o=e?c.find((t=>t.filename===e[0])):null)}else n(8,o=e);document.getSelection().removeAllRanges(),console.log(o)}function d(e){n(0,a=e),u()}b(u);let p,h=[];let g=!1;function $(e){p===e?n(10,g=!g):n(9,p=e);let t=e=>e[p];"uploaded_at"===p&&(t=e=>new Date(e[p])),"filename"===p&&(t=e=>(e[p]||"").toLowerCase());n(1,c=c.sort(((e,n)=>t(e)<t(n)?g?1:-1:t(e)>t(n)?g?-1:1:0)))}return e.$$set=e=>{"files"in e&&n(1,c=e.files),"directories"in e&&n(2,i=e.directories),"roles"in e&&n(3,r=e.roles),"currentFolder"in e&&n(0,a=e.currentFolder)},e.$$.update=()=>{16&e.$$.dirty[0]&&n(6,s=Object.entries(f).filter((([e,t])=>t)).map((([e,t])=>e))),33&e.$$.dirty[0]&&("/"===a||""===a?n(5,h=[{icon:pe,location:"/"}]):(n(5,h=a.split("/").map(((e,t)=>({name:e,location:a.split("/").slice(0,t+1).join("/")})))),h.unshift({icon:pe,location:"/"})))},[a,c,i,r,f,h,s,l,o,p,g,m,async function(e){const t=e?.target.value;if(t)switch(t){case"Delete":if(!confirm(`Delete files: ${s.join()}`))return;for(const e of s){const t=c.find((t=>t.filename===e));await Ee(`/files/delete/${t.location}`)}await u();break;case"Rename":const e=window.prompt(`Rename ${o.filename} to:`,o.filename);if(!e)return;await Ee(`/files/setname/${o.location}`,{value:e}),await u()}},async function(e){const t=e.target.value;for(const e of s){const n=c.find((t=>t.filename===e));await Ee(`/files/setrole/${n.location}`,{role:t})}await u(!0)},async function(e){for(const t of s){const n=e.target.value;if(!n)return;const l=c.find((e=>e.filename===t));await Ee(`/files/move/${l.location}`,{new_path:n})}await u()},d,function(e){if("image"===e.mime_super)return ae;if("audio"===e.mime_super)return ce;if("video"===e.mime_super)return fe;if("pdf"===e.mime_sub)return se;if(e.isDirectory)return me;const t=e.filename.toLowerCase();return t.endsWith(".csv")?ie:t.endsWith(".xls")||t.endsWith(".xlsx")?re:t.endsWith(".doc")||t.endsWith(".docx")?ue:t.endsWith(".txt")?oe:le},$,function(e){return console.log({varNm:e,sortBy:p}),e!==p?null:g?te:ne},()=>$("filename"),()=>$("mimetype"),()=>$("size_kb"),()=>$("min_role_read"),()=>$("uploaded_at"),(e,t)=>m(e,t),e=>{e.isDirectory?d(e.location):window.open(`/files/serve/${e.location}`)},()=>window.create_new_folder(a)]}return new class extends Y{constructor(e){super(),P(this,e,je,Se,c,{files:1,directories:2,roles:3,currentFolder:0},null,[-1,-1])}}({target:document.getElementById("saltcorn-file-manager"),props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map