import{A as c,s as h}from"./scheduler.3fa296d9.js";const t=[];function d(i,l=c){let n;const o=new Set;function r(e){if(h(i,e)&&(i=e,n)){const b=!t.length;for(const s of o)s[1](),t.push(s,i);if(b){for(let s=0;s<t.length;s+=2)t[s][0](t[s+1]);t.length=0}}}function f(e){r(e(i))}function _(e,b=c){const s=[e,b];return o.add(s),o.size===1&&(n=l(r,f)||c),e(i),()=>{o.delete(s),o.size===0&&n&&(n(),n=null)}}return{set:r,update:f,subscribe:_}}var u;const p=((u=globalThis.__sveltekit_1fsivej)==null?void 0:u.base)??"";var a;const q=((a=globalThis.__sveltekit_1fsivej)==null?void 0:a.assets)??p;export{q as a,p as b,d as w};
