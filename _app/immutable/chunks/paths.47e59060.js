import{A as c,s as h}from"./scheduler.98dcdc08.js";const e=[];function d(o,l=c){let n;const i=new Set;function r(t){if(h(o,t)&&(o=t,n)){const b=!e.length;for(const s of i)s[1](),e.push(s,o);if(b){for(let s=0;s<e.length;s+=2)e[s][0](e[s+1]);e.length=0}}}function f(t){r(t(o))}function _(t,b=c){const s=[t,b];return i.add(s),i.size===1&&(n=l(r,f)||c),t(o),()=>{i.delete(s),i.size===0&&n&&(n(),n=null)}}return{set:r,update:f,subscribe:_}}var u;const g=((u=globalThis.__sveltekit_nw8ohg)==null?void 0:u.base)??"/portfolio";var a;const w=((a=globalThis.__sveltekit_nw8ohg)==null?void 0:a.assets)??g;export{w as a,g as b,d as w};
