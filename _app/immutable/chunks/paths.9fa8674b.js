import{A as c,s as p}from"./scheduler.98dcdc08.js";const e=[];function d(o,l=c){let n;const i=new Set;function f(t){if(p(o,t)&&(o=t,n)){const r=!e.length;for(const s of i)s[1](),e.push(s,o);if(r){for(let s=0;s<e.length;s+=2)e[s][0](e[s+1]);e.length=0}}}function b(t){f(t(o))}function _(t,r=c){const s=[t,r];return i.add(s),i.size===1&&(n=l(f,b)||c),t(o),()=>{i.delete(s),i.size===0&&n&&(n(),n=null)}}return{set:f,update:b,subscribe:_}}var u;const h=((u=globalThis.__sveltekit_fff3cn)==null?void 0:u.base)??"/portfolio";var a;const q=((a=globalThis.__sveltekit_fff3cn)==null?void 0:a.assets)??h;export{q as a,h as b,d as w};
