import{s as Y,e as x,i as H,d as h,o as R,C as U,u as D,K as V,f as k,g as w,h as I,j as W,L as X,k as z,v as A,w as G,D as J,E as Q,F as Z,p as $}from"./scheduler.3fa296d9.js";import{S as ee,i as te,a as j,t as E}from"./index.e127cdc7.js";import{g as le}from"./spread.84d39b6c.js";import{i as re,c as se,a as v}from"./colors.51fc789a.js";import"./index.12cf9657.js";function b(o){let r,t,d,e,l,c;const _=o[13].default,a=U(_,o,o[12],null);let n=[{href:o[1]},{class:d=D(`card text-inherit decoration-none inline-flex flex-col border-1px border-solid border-[var(--border)] rounded-15px duration relative ${o[0].join(" ")}`)+" svelte-1441skb"}],m={};for(let s=0;s<n.length;s+=1)m=V(m,n[s]);return{c(){r=k(o[1]?"a":"div"),t=k("div"),a&&a.c(),this.h()},l(s){r=w(s,((o[1]?"a":"div")||"null").toUpperCase(),{href:!0,class:!0});var f=I(r);t=w(f,"DIV",{class:!0});var u=I(t);a&&a.l(u),u.forEach(h),f.forEach(h),this.h()},h(){W(t,"class","card-bg-img flex-1 flex flex-col p-25px rounded-15px svelte-1441skb"),X(o[1]?"a":"div")(r,m),z(r,"bgColor","red")},m(s,f){H(s,r,f),A(r,t),a&&a.m(t,null),o[14](r),e=!0,l||(c=G(r,"mousemove",o[3]),l=!0)},p(s,f){a&&a.p&&(!e||f&4096)&&J(a,_,s,s[12],e?Z(_,s[12],f,null):Q(s[12]),null),X(s[1]?"a":"div")(r,m=le(n,[(!e||f&2)&&{href:s[1]},(!e||f&1&&d!==(d=D(`card text-inherit decoration-none inline-flex flex-col border-1px border-solid border-[var(--border)] rounded-15px duration relative ${s[0].join(" ")}`)+" svelte-1441skb"))&&{class:d}]))},i(s){e||(j(a,s),e=!0)},o(s){E(a,s),e=!1},d(s){s&&h(r),a&&a.d(s),o[14](null),l=!1,c()}}}function oe(o){let r=o[1]?"a":"div",t,d,e=(o[1]?"a":"div")&&b(o);return{c(){e&&e.c(),t=x()},l(l){e&&e.l(l),t=x()},m(l,c){e&&e.m(l,c),H(l,t,c),d=!0},p(l,[c]){l[1],r?Y(r,l[1]?"a":"div")?(e.d(1),e=b(l),r=l[1]?"a":"div",e.c(),e.m(t.parentNode,t)):e.p(l,c):(e=b(l),r=l[1]?"a":"div",e.c(),e.m(t.parentNode,t))},i(l){d||(j(e,l),d=!0)},o(l){E(e,l),d=!1},d(l){l&&h(t),e&&e.d(l)}}}function ie(o,r,t){let d,e,l,c,{$$slots:_={},$$scope:a}=r,n,{color:m="#ffffff00"}=r,{margin:s="0px"}=r,{tiltDegree:f=5}=r,{classes:u=[]}=r,{href:p=void 0}=r,{bgImg:g=void 0}=r;const F=i=>{const y=i.currentTarget.getBoundingClientRect(),M=i.clientX-y.left,S=i.clientY-y.top;n.style.setProperty("--drop-x",`${M}px`),n.style.setProperty("--drop-y",`${S}px`);const C=n.offsetWidth,P=n.offsetHeight,T=y.x+C/2,q=y.y+P/2,B=i.clientX-T,K=i.clientY-q;t(4,f=window.matchMedia("(min-width: 768px)").matches?5:0);const L=(f*B/(C/2)).toFixed(2),O=(-1*(f*K)/(P/2)).toFixed(2);n.style.setProperty("--rot-x",`${O}deg`),n.style.setProperty("--rot-y",`${L}deg`)};R(()=>{n.style.setProperty("margin",s),n.style.setProperty("--bg-img",g?`url(${g})`:"")});function N(i){$[i?"unshift":"push"](()=>{n=i,t(2,n)})}return o.$$set=i=>{"color"in i&&t(5,m=i.color),"margin"in i&&t(6,s=i.margin),"tiltDegree"in i&&t(4,f=i.tiltDegree),"classes"in i&&t(0,u=i.classes),"href"in i&&t(1,p=i.href),"bgImg"in i&&t(7,g=i.bgImg),"$$scope"in i&&t(12,a=i.$$scope)},o.$$.update=()=>{o.$$.dirty&32&&t(11,d=re(m)?m:se(m)),o.$$.dirty&2048&&t(10,e=v(d,.5)),o.$$.dirty&2048&&t(9,l=v(d,.15)),o.$$.dirty&2048&&t(8,c=v(d,.01)),o.$$.dirty&1796&&n&&(n.style.setProperty("--border-color",e),n.style.setProperty("--drop-color",l),n.style.setProperty("--bg-color",c))},[u,p,n,F,f,m,s,g,c,l,e,d,a,_,N]}class _e extends ee{constructor(r){super(),te(this,r,ie,oe,Y,{color:5,margin:6,tiltDegree:4,classes:0,href:1,bgImg:7})}}export{_e as C};
