import{A as b,s as h}from"./scheduler.3fa296d9.js";const e=[];function q(i,l=b){let n;const o=new Set;function r(t){if(h(i,t)&&(i=t,n)){const a=!e.length;for(const s of o)s[1](),e.push(s,i);if(a){for(let s=0;s<e.length;s+=2)e[s][0](e[s+1]);e.length=0}}}function c(t){r(t(i))}function _(t,a=b){const s=[t,a];return o.add(s),o.size===1&&(n=l(r,c)||b),t(i),()=>{o.delete(s),o.size===0&&n&&(n(),n=null)}}return{set:r,update:c,subscribe:_}}var f;const p=((f=globalThis.__sveltekit_tahqra)==null?void 0:f.base)??"";var u;const d=((u=globalThis.__sveltekit_tahqra)==null?void 0:u.assets)??p;export{d as a,p as b,q as w};
