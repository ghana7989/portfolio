(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function l(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(s){if(s.ep)return;s.ep=!0;const i=l(s);fetch(s.href,i)}})();const w={},ie=(e,t)=>e===t,oe=Symbol("solid-proxy"),D={equals:ie};let re=J;const $=1,M=2,Q={owned:null,cleanups:null,context:null,owner:null};var b=null;let v=null,f=null,d=null,y=null,H=0;function ce(e,t){const l=f,n=b,s=e.length===0,i=s?Q:{owned:null,cleanups:null,context:null,owner:t||n},r=s?e:()=>e(()=>O(()=>F(i)));b=i,f=null;try{return A(r,!0)}finally{f=l,b=n}}function p(e,t,l){const n=X(e,t,!1,$);P(n)}function ae(e,t,l){l=l?Object.assign({},D,l):D;const n=X(e,t,!0,0);return n.observers=null,n.observerSlots=null,n.comparator=l.equals||void 0,P(n),fe.bind(n)}function O(e){let t,l=f;return f=null,t=e(),f=l,t}function fe(){const e=v;if(this.sources&&(this.state||e))if(this.state===$||e)P(this);else{const t=d;d=null,A(()=>T(this),!1),d=t}if(f){const t=this.observers?this.observers.length:0;f.sources?(f.sources.push(this),f.sourceSlots.push(t)):(f.sources=[this],f.sourceSlots=[t]),this.observers?(this.observers.push(f),this.observerSlots.push(f.sources.length-1)):(this.observers=[f],this.observerSlots=[f.sources.length-1])}return this.value}function ue(e,t,l){let n=e.value;return(!e.comparator||!e.comparator(n,t))&&(e.value=t,e.observers&&e.observers.length&&A(()=>{for(let s=0;s<e.observers.length;s+=1){const i=e.observers[s],r=v&&v.running;r&&v.disposed.has(i),(r&&!i.tState||!r&&!i.state)&&(i.pure?d.push(i):y.push(i),i.observers&&Y(i)),r||(i.state=$)}if(d.length>1e6)throw d=[],new Error},!1)),t}function P(e){if(!e.fn)return;F(e);const t=b,l=f,n=H;f=b=e,de(e,e.value,n),f=l,b=t}function de(e,t,l){let n;try{n=e.fn(t)}catch(s){e.pure&&(e.state=$),Z(s)}(!e.updatedAt||e.updatedAt<=l)&&(e.updatedAt!=null&&"observers"in e?ue(e,n):e.value=n,e.updatedAt=l)}function X(e,t,l,n=$,s){const i={fn:e,state:n,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:b,context:null,pure:l};return b===null||b!==Q&&(b.owned?b.owned.push(i):b.owned=[i]),i}function W(e){const t=v;if(e.state===0||t)return;if(e.state===M||t)return T(e);if(e.suspense&&O(e.suspense.inFallback))return e.suspense.effects.push(e);const l=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<H);)(e.state||t)&&l.push(e);for(let n=l.length-1;n>=0;n--)if(e=l[n],e.state===$||t)P(e);else if(e.state===M||t){const s=d;d=null,A(()=>T(e,l[0]),!1),d=s}}function A(e,t){if(d)return e();let l=!1;t||(d=[]),y?l=!0:y=[],H++;try{const n=e();return he(l),n}catch(n){d||(y=null),Z(n)}}function he(e){if(d&&(J(d),d=null),e)return;const t=y;y=null,t.length&&A(()=>re(t),!1)}function J(e){for(let t=0;t<e.length;t++)W(e[t])}function T(e,t){const l=v;e.state=0;for(let n=0;n<e.sources.length;n+=1){const s=e.sources[n];s.sources&&(s.state===$||l?s!==t&&W(s):(s.state===M||l)&&T(s,t))}}function Y(e){const t=v;for(let l=0;l<e.observers.length;l+=1){const n=e.observers[l];(!n.state||t)&&(n.state=M,n.pure?d.push(n):y.push(n),n.observers&&Y(n))}}function F(e){let t;if(e.sources)for(;e.sources.length;){const l=e.sources.pop(),n=e.sourceSlots.pop(),s=l.observers;if(s&&s.length){const i=s.pop(),r=l.observerSlots.pop();n<s.length&&(i.sourceSlots[r]=n,s[n]=i,l.observerSlots[n]=r)}}if(e.owned){for(t=0;t<e.owned.length;t++)F(e.owned[t]);e.owned=null}if(e.cleanups){for(t=0;t<e.cleanups.length;t++)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function me(e){return e instanceof Error||typeof e=="string"?e:new Error("Unknown error")}function Z(e){throw e=me(e),e}function h(e,t){return O(()=>e(t||{}))}function N(){return!0}const be={get(e,t,l){return t===oe?l:e.get(t)},has(e,t){return e.has(t)},set:N,deleteProperty:N,getOwnPropertyDescriptor(e,t){return{configurable:!0,enumerable:!0,get(){return e.get(t)},set:N,deleteProperty:N}},ownKeys(e){return e.keys()}};function B(e){return(e=typeof e=="function"?e():e)==null?{}:e}function ge(...e){return new Proxy({get(t){for(let l=e.length-1;l>=0;l--){const n=B(e[l])[t];if(n!==void 0)return n}},has(t){for(let l=e.length-1;l>=0;l--)if(t in B(e[l]))return!0;return!1},keys(){const t=[];for(let l=0;l<e.length;l++)t.push(...Object.keys(B(e[l])));return[...new Set(t)]}},be)}const xe=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"],we=new Set(["className","value","readOnly","formNoValidate","isMap","noModule","playsInline",...xe]),ve=new Set(["innerHTML","textContent","innerText","children"]),ye={className:"class",htmlFor:"for"},V={class:"className",formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly"},pe=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),$e={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"};function Ce(e,t){return ae(e,void 0,t?void 0:{equals:t})}function Se(e,t,l){let n=l.length,s=t.length,i=n,r=0,o=0,a=t[s-1].nextSibling,c=null;for(;r<s||o<i;){if(t[r]===l[o]){r++,o++;continue}for(;t[s-1]===l[i-1];)s--,i--;if(s===r){const u=i<n?o?l[o-1].nextSibling:l[i-o]:a;for(;o<i;)e.insertBefore(l[o++],u)}else if(i===o)for(;r<s;)(!c||!c.has(t[r]))&&t[r].remove(),r++;else if(t[r]===l[i-1]&&l[o]===t[s-1]){const u=t[--s].nextSibling;e.insertBefore(l[o++],t[r++].nextSibling),e.insertBefore(l[--i],u),t[s]=l[i]}else{if(!c){c=new Map;let g=o;for(;g<i;)c.set(l[g],g++)}const u=c.get(t[r]);if(u!=null)if(o<u&&u<i){let g=r,k=1,L;for(;++g<s&&g<i&&!((L=c.get(t[g]))==null||L!==u+k);)k++;if(k>u-o){const z=t[r];for(;o<u;)e.insertBefore(l[o++],z)}else e.replaceChild(l[o++],t[r++])}else r++;else t[r++].remove()}}}const q="_$DX_DELEGATE";function _e(e,t,l){let n;return ce(s=>{n=s,t===document?e():m(t,e(),t.firstChild?null:void 0,l)}),()=>{n(),t.textContent=""}}function x(e,t,l){const n=document.createElement("template");n.innerHTML=e;let s=n.content.firstChild;return l&&(s=s.firstChild),s}function ke(e,t=window.document){const l=t[q]||(t[q]=new Set);for(let n=0,s=e.length;n<s;n++){const i=e[n];l.has(i)||(l.add(i),t.addEventListener(i,ze))}}function E(e,t,l){l==null?e.removeAttribute(t):e.setAttribute(t,l)}function Ae(e,t,l,n){n==null?e.removeAttributeNS(t,l):e.setAttributeNS(t,l,n)}function Le(e,t){t==null?e.removeAttribute("class"):e.className=t}function Ne(e,t,l,n){if(n)Array.isArray(l)?(e[`$$${t}`]=l[0],e[`$$${t}Data`]=l[1]):e[`$$${t}`]=l;else if(Array.isArray(l)){const s=l[0];e.addEventListener(t,l[0]=i=>s.call(e,l[1],i))}else e.addEventListener(t,l)}function Ee(e,t,l={}){const n=Object.keys(t||{}),s=Object.keys(l);let i,r;for(i=0,r=s.length;i<r;i++){const o=s[i];!o||o==="undefined"||t[o]||(U(e,o,!1),delete l[o])}for(i=0,r=n.length;i<r;i++){const o=n[i],a=!!t[o];!o||o==="undefined"||l[o]===a||!a||(U(e,o,!0),l[o]=a)}return l}function ee(e,t,l={}){const n=e.style,s=typeof l=="string";if(t==null&&s||typeof t=="string")return n.cssText=t;s&&(n.cssText=void 0,l={}),t||(t={});let i,r;for(r in l)t[r]==null&&n.removeProperty(r),delete l[r];for(r in t)i=t[r],i!==l[r]&&(n.setProperty(r,i),l[r]=i);return l}function Me(e,t,l,n){typeof t=="function"?p(s=>G(e,t(),s,l,n)):G(e,t,void 0,l,n)}function m(e,t,l,n){if(l!==void 0&&!n&&(n=[]),typeof t!="function")return S(e,t,n,l);p(s=>S(e,t(),s,l),n)}function Te(e,t,l,n,s={},i=!1){t||(t={});for(const r in s)if(!(r in t)){if(r==="children")continue;R(e,r,null,s[r],l,i)}for(const r in t){if(r==="children"){n||S(e,t.children);continue}const o=t[r];s[r]=R(e,r,o,s[r],l,i)}}function Pe(e){return e.toLowerCase().replace(/-([a-z])/g,(t,l)=>l.toUpperCase())}function U(e,t,l){const n=t.trim().split(/\s+/);for(let s=0,i=n.length;s<i;s++)e.classList.toggle(n[s],l)}function R(e,t,l,n,s,i){let r,o,a;if(t==="style")return ee(e,l,n);if(t==="classList")return Ee(e,l,n);if(l===n)return n;if(t==="ref")i||l(e);else if(t.slice(0,3)==="on:"){const c=t.slice(3);n&&e.removeEventListener(c,n),l&&e.addEventListener(c,l)}else if(t.slice(0,10)==="oncapture:"){const c=t.slice(10);n&&e.removeEventListener(c,n,!0),l&&e.addEventListener(c,l,!0)}else if(t.slice(0,2)==="on"){const c=t.slice(2).toLowerCase(),u=pe.has(c);if(!u&&n){const g=Array.isArray(n)?n[0]:n;e.removeEventListener(c,g)}(u||l)&&(Ne(e,c,l,u),u&&ke([c]))}else if((a=ve.has(t))||!s&&(V[t]||(o=we.has(t)))||(r=e.nodeName.includes("-")))t==="class"||t==="className"?Le(e,l):r&&!o&&!a?e[Pe(t)]=l:e[V[t]||t]=l;else{const c=s&&t.indexOf(":")>-1&&$e[t.split(":")[0]];c?Ae(e,c,t,l):E(e,ye[t]||t,l)}return l}function ze(e){const t=`$$${e.type}`;let l=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==l&&Object.defineProperty(e,"target",{configurable:!0,value:l}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return l||document}}),w.registry&&!w.done&&(w.done=!0,document.querySelectorAll("[id^=pl-]").forEach(n=>n.remove()));l!==null;){const n=l[t];if(n&&!l.disabled){const s=l[`${t}Data`];if(s!==void 0?n.call(l,s,e):n.call(l,e),e.cancelBubble)return}l=l.host&&l.host!==l&&l.host instanceof Node?l.host:l.parentNode}}function G(e,t,l={},n,s){return t||(t={}),!s&&"children"in t&&p(()=>l.children=S(e,t.children,l.children)),t.ref&&t.ref(e),p(()=>Te(e,t,n,!0,l,!0)),l}function S(e,t,l,n,s){for(w.context&&!l&&(l=[...e.childNodes]);typeof l=="function";)l=l();if(t===l)return l;const i=typeof t,r=n!==void 0;if(e=r&&l[0]&&l[0].parentNode||e,i==="string"||i==="number"){if(w.context)return l;if(i==="number"&&(t=t.toString()),r){let o=l[0];o&&o.nodeType===3?o.data=t:o=document.createTextNode(t),l=C(e,l,n,o)}else l!==""&&typeof l=="string"?l=e.firstChild.data=t:l=e.textContent=t}else if(t==null||i==="boolean"){if(w.context)return l;l=C(e,l,n)}else{if(i==="function")return p(()=>{let o=t();for(;typeof o=="function";)o=o();l=S(e,o,l,n)}),()=>l;if(Array.isArray(t)){const o=[],a=l&&Array.isArray(l);if(j(o,t,l,s))return p(()=>l=S(e,o,l,n,!0)),()=>l;if(w.context){if(!o.length)return l;for(let c=0;c<o.length;c++)if(o[c].parentNode)return l=o}if(o.length===0){if(l=C(e,l,n),r)return l}else a?l.length===0?K(e,o,n):Se(e,l,o):(l&&C(e),K(e,o));l=o}else if(t instanceof Node){if(w.context&&t.parentNode)return l=r?[t]:t;if(Array.isArray(l)){if(r)return l=C(e,l,n,t);C(e,l,null,t)}else l==null||l===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);l=t}}return l}function j(e,t,l,n){let s=!1;for(let i=0,r=t.length;i<r;i++){let o=t[i],a=l&&l[i];if(o instanceof Node)e.push(o);else if(!(o==null||o===!0||o===!1))if(Array.isArray(o))s=j(e,o,a)||s;else if(typeof o=="function")if(n){for(;typeof o=="function";)o=o();s=j(e,Array.isArray(o)?o:[o],a)||s}else e.push(o),s=!0;else{const c=String(o);a&&a.nodeType===3&&a.data===c?e.push(a):e.push(document.createTextNode(c))}}return s}function K(e,t,l){for(let n=0,s=t.length;n<s;n++)e.insertBefore(t[n],l)}function C(e,t,l,n){if(l===void 0)return e.textContent="";const s=n||document.createTextNode("");if(t.length){let i=!1;for(let r=t.length-1;r>=0;r--){const o=t[r];if(s!==o){const a=o.parentNode===e;!i&&!r?a?e.replaceChild(s,o):e.insertBefore(s,l):a&&o.remove()}else i=!0}}else e.insertBefore(s,l);return[s]}const Be=!1;const Ie=x('<div class="hero min-h-max bg-base-300 py-32"><div class="hero-content flex-col lg:flex-row lg:gap-6"><img src="https://www.raulwebdev.com/static/media/memoji.ce215bb0350b737669fb.png" class="max-w-sm rounded-full shadow-2xl"><div class="flex flex-col gap-10 md:gap-5"><h1 class="text-5xl font-bold text-center ">About Me</h1><p class="py-6 bg-base-100 px-6">My name is Pavan and I am a talented full stack developer. In my free time, I enjoy listening to music and coding, I have always had a love for music and find that it helps to relax and inspire me in my work. I initially started coding as a hobby, but quickly realized that it was something I was truly passionate about and decided to pursue a career change. It was a big decision, but I am excited to be able to do what I love and help others in the process.</p></div></div></div>'),je=()=>Ie.cloneNode(!0),He=x('<svg fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg"></svg>'),Oe=x("<title></title>");function _(e,t){const l=ge(e.a,t);return(()=>{const n=He.cloneNode(!0);return Me(n,l,!0,!0),m(n,()=>Be,null),m(n,(()=>{const s=Ce(()=>!!t.title,!0);return()=>s()&&(()=>{const i=Oe.cloneNode(!0);return m(i,()=>t.title),i})()})(),null),p(s=>{const i=e.a.stroke,r={...t.style,overflow:"visible",color:t.color||"currentColor"},o=t.size||"1em",a=t.size||"1em",c=e.c;return i!==s._v$&&E(n,"stroke",s._v$=i),s._v$2=ee(n,r,s._v$2),o!==s._v$3&&E(n,"height",s._v$3=o),a!==s._v$4&&E(n,"width",s._v$4=a),c!==s._v$5&&(n.innerHTML=s._v$5=c),s},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0}),n})()}function Fe(e){return _({a:{viewBox:"0 0 496 512"},c:'<path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/>'},e)}function De(e){return _({a:{viewBox:"0 0 384 512"},c:'<path d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z"/>'},e)}function Ve(e){return _({a:{viewBox:"0 0 448 512"},c:'<path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/>'},e)}function qe(e){return _({a:{viewBox:"0 0 640 512"},c:'<path d="M414.8 40.79l-128 448.01c-4.9 17-22.6 26.8-39.6 22-17-4.9-26.8-22.6-22-39.6l128-447.99c4.9-16.994 22.6-26.834 39.6-21.978 17 4.855 26.8 22.568 22 39.558zm103.8 80.61l112 112c12.5 12.5 12.5 32.7 0 45.2l-112 112c-12.5 12.5-32.7 12.5-45.2 0s-12.5-32.7 0-45.2l89.3-89.4-89.3-89.4c-12.5-12.5-12.5-32.7 0-45.2s32.7-12.5 45.2 0zm-352 45.2L77.25 256l89.35 89.4c12.5 12.5 12.5 32.7 0 45.2s-32.7 12.5-45.2 0L9.372 278.6c-12.496-12.5-12.496-32.7 0-45.2l112.028-112c12.5-12.5 32.7-12.5 45.2 0s12.5 32.7 0 45.2z"/>'},e)}function Ue(e){return _({a:{viewBox:"0 0 512 512"},c:'<path d="M464 64c26.5 0 48 21.49 48 48 0 15.1-7.1 29.3-19.2 38.4L275.2 313.6a32.1 32.1 0 01-38.4 0L19.2 150.4C7.113 141.3 0 127.1 0 112c0-26.51 21.49-48 48-48h416zM217.6 339.2a63.9 63.9 0 0076.8 0L512 176v208c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V176l217.6 163.2z"/>'},e)}function Re(e){return _({a:{viewBox:"0 0 512 512"},c:'<path d="M331.8 224.1c28.29 0 54.88 10.99 74.86 30.97l19.59 19.59c40.01-17.74 71.25-53.3 81.62-96.65 5.725-23.92 5.34-47.08.215-68.4-2.613-10.88-16.43-14.51-24.34-6.604l-68.9 68.9h-75.6V97.2l68.9-68.9c7.912-7.912 4.275-21.73-6.604-24.34-21.32-5.125-44.48-5.51-68.4.215-55.3 13.23-98.39 60.22-107.2 116.4C224.5 128.9 224.2 137 224.3 145l82.78 82.86c8.12-2.76 16.42-3.76 24.72-3.76zm52.2 54.5c-23.16-23.16-57.57-27.57-85.39-13.9L191.1 158V95.99L64 0 0 63.1l96 127.1 62.04.008 106.7 106.6c-13.67 27.82-9.251 62.23 13.91 85.39l117 117.1c14.62 14.5 38.21 14.5 52.71-.002l52.75-52.75c14.5-14.5 14.5-38.08-.002-52.71L384 278.6zM227.9 307l-59.2-59.1L19.8 396.8c-26.37 26.37-26.37 69.08 0 95.45C32.96 505.4 50.21 512 67.5 512s34.54-6.592 47.72-19.78l119.1-119.1C225.5 352.3 222.6 329.4 227.9 307zM64 472c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.7 24 24-10.75 24-24 24z"/>'},e)}const Ge=x('<section id="contact-me" class="py-10 h-full bg-base-100"><div class="container mx-auto px-2"><div class="flex flex-wrap justify-center text-center mb-10"><div class="w-full lg:w-6/12 px-4 "><h1 class="text-5xl font-bold text-center mx-auto  align-middle rounded-sm text-primary  w-max">Contact Me</h1></div></div><div class="flex flex-wrap"><div class="transition-all duration-300 md:hover:scale-110 w-full md:w-6/12 lg:w-4/12 px-4 text-center"><a href="mailto:chindukuripavan@gmail.com" target="_blank" rel="noreferrer"><div class="relative flex flex-col min-w-0 break-words bg-gray-100 w-full mb-8 shadow-lg rounded-lg border border-slate-300"><div class="px-4 py-5 flex-auto"><div class="text-white p-3 text-center inline-flex items-center justify-center w-14 h-14 mb-5 shadow rounded-full bg-primary-focus border border-slate-300 hover:bg-black transition"></div><h6 class="text-slate-600 text-xl font-semibold">Email</h6></div></div></a></div><div class="transition-all duration-300 md:hover:scale-110 w-full md:w-6/12 lg:w-4/12 px-4 text-center"><a href="https://github.com/ghana7989" target="_blank" rel="noreferrer"><div class="relative flex flex-col min-w-0 break-words bg-gray-100 w-full mb-8 shadow-lg rounded-lg border border-slate-300"><div class="px-4 py-5 flex-auto"><div class="text-white p-3 text-center inline-flex items-center justify-center w-14 h-14 mb-5 shadow rounded-full bg-primary-focus border border-slate-300 hover:bg-black transition"></div><h6 class="text-slate-600 text-xl font-semibold">GitHub</h6></div></div></a></div><div class="transition-all duration-300 md:hover:scale-110 w-full md:w-6/12 lg:w-4/12 px-4 text-center"><a href="https://www.linkedin.com/in/chindukuri-pavan7989/" target="_blank" rel="noreferrer"><div class="relative flex flex-col min-w-0 break-words bg-gray-100 w-full mb-8 shadow-lg rounded-lg border border-slate-300"><div class="px-4 py-5 flex-auto"><div class="text-white p-3 text-center inline-flex items-center justify-center w-14 h-14 mb-5 shadow rounded-full bg-primary-focus border border-slate-300 hover:bg-black transition"></div><h6 class="text-slate-600 text-xl font-semibold">LinkedIn</h6></div></div></a></div></div></div></section>'),Ke=()=>(()=>{const e=Ge.cloneNode(!0),t=e.firstChild,l=t.firstChild,n=l.nextSibling,s=n.firstChild,i=s.firstChild,r=i.firstChild,o=r.firstChild,a=o.firstChild,c=s.nextSibling,u=c.firstChild,g=u.firstChild,k=g.firstChild,L=k.firstChild,z=c.nextSibling,te=z.firstChild,le=te.firstChild,ne=le.firstChild,se=ne.firstChild;return m(a,h(Ue,{class:"text-3xl "})),m(L,h(Fe,{class:"text-3xl "})),m(se,h(Ve,{class:"text-3xl "})),e})(),Qe=x('<footer class="footer footer-center p-4 bg-base-300 text-base-content"><div><p>Copyright \xA9 2022</p></div></footer>'),Xe=()=>Qe.cloneNode(!0),We=x(`<div class="hero min-h-screen bg-base-200"><div class="hero-content flex-col lg:flex-row-reverse lg:gap-44"><img src="https://avatars.githubusercontent.com/u/65382745?s=400&amp;u=911cf66d6732a7b582283e2171191f6052f0b595&amp;v=4" class="max-w-sm rounded-lg shadow-2xl"><div class="text-center"><h1 class="text-5xl font-bold ">Hi there! I'm Pavan</h1><p class="py-6">I'm a Full Stack Web Developer based in Hyderabad, India.</p><div class="flex justify-center gap-10"><a href="#contact-me"><button class="btn btn-primary font-bold  text-lg ">Let's Talk</button></a><button class="btn btn-primary btn-outline font-bold  text-lg ">My Projects</button></div></div></div></div>`),Je=()=>We.cloneNode(!0),Ye=x('<div class="navbar  bg-transparent fixed z-50 h-16 backdrop-blur-3xl shadow-md"><div class="navbar-start"><div class="dropdown"><label tabindex="0" class="btn btn-ghost lg:hidden"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16"></path></svg></label><ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"><li><a>About Me</a></li><li><a>Skills</a></li><li><a>Projects</a></li></ul></div><a class="btn btn-ghost normal-case md:text-3xl text-xl text-primary font-bold" href="/">Pavan`D`Dev</a></div><div class="navbar-center hidden lg:flex"><ul class="menu menu-horizontal px-1"><li><a>About Me</a></li><li><a>Skills</a></li><li><a>Projects</a></li></ul></div><div class="navbar-end"><a class="btn bg-primary hover:bg-primary-focus text-neutral font-bold" href="#contact-me">Contact Me</a></div></div>'),Ze=()=>Ye.cloneNode(!0),et=x('<div class="w-full md:w-6/12 lg:w-4/12 px-4 text-center"><div class="relative flex flex-col min-w-0 break-words bg-gray-100 w-full mb-8 shadow-lg rounded-lg border border-slate-300 overflow-hidden"><div class="flex-auto"><div class="text-white p-3 text-center inline-flex flex-col items-center justify-center w-full mb-4 shadow  bg-primary"><h6 class="drop-shadow-md text-white text-xl font-bold "></h6></div><div class="mt-2 mb-4 text-base-300"><ul></ul></div></div></div></div>'),tt=x('<li class="font-semibold"></li>'),I=e=>(()=>{const t=et.cloneNode(!0),l=t.firstChild,n=l.firstChild,s=n.firstChild,i=s.firstChild,r=s.nextSibling,o=r.firstChild;return m(s,h(e.icon,{class:"drop-shadow-md text-4xl fab fa-html5","aria-hidden":"true"}),i),m(i,()=>e.title),m(o,()=>e.skills.map(a=>(()=>{const c=tt.cloneNode(!0);return m(c,a),c})())),t})(),lt=x('<section class="py-10 h-full"><div class="container mx-auto px-2"><div class="flex flex-wrap justify-center text-center mb-10"><div class="w-full lg:w-6/12 px-4 "><h1 class="text-5xl font-bold text-center  ">My Skills</h1></div></div><div class="flex flex-wrap"></div></div></section>'),nt=()=>(()=>{const e=lt.cloneNode(!0),t=e.firstChild,l=t.firstChild,n=l.nextSibling;return m(n,h(I,{title:"Front End",icon:De,skills:["HTML","CSS","JavaScript","React","Redux","TailwindCSS","Bootstrap","jQuery","OAuth"]}),null),m(n,h(I,{title:"Back End",icon:qe,skills:["Node.js","Express","PostgreSQL","MongoDB","Mongoose","Sequelize","RESTful APIs","GraphQL","Apollo","Socket.io"]}),null),m(n,h(I,{title:"Tools",icon:Re,skills:["Git","GitHub","Heroku","Netlify","VS Code","Postman","Figma","Adobe XD","Adobe Photoshop","Adobe Illustrator"]}),null),e})(),st=()=>[h(Ze,{}),h(Je,{}),h(je,{}),h(nt,{}),h(Ke,{}),h(Xe,{})];_e(()=>h(st,{}),document.getElementById("root"));
