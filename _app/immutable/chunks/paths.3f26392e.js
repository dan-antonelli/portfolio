import{A as c,s as d}from"./scheduler.3fa296d9.js";const e=[];function g(i,l=c){let n;const o=new Set;function r(t){if(d(i,t)&&(i=t,n)){const b=!e.length;for(const s of o)s[1](),e.push(s,i);if(b){for(let s=0;s<e.length;s+=2)e[s][0](e[s+1]);e.length=0}}}function a(t){r(t(i))}function _(t,b=c){const s=[t,b];return o.add(s),o.size===1&&(n=l(r,a)||c),t(i),()=>{o.delete(s),o.size===0&&n&&(n(),n=null)}}return{set:r,update:a,subscribe:_}}var f;const h=((f=globalThis.__sveltekit_rdal02)==null?void 0:f.base)??"";var u;const q=((u=globalThis.__sveltekit_rdal02)==null?void 0:u.assets)??h;export{q as a,h as b,g as w};
