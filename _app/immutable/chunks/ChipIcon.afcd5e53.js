import{s as C,f as j,l as S,g as w,h as q,m as A,d,j as u,i as b,v as D,n as F,A as h,e as z,z as H,K,u as v,L,M as E,G as I,N,C as T,D as U,E as B,F as J}from"./scheduler.98dcdc08.js";import{S as G,i as M,a as p,t as g,g as O,c as P}from"./index.bc2cb9f6.js";import{g as Q}from"./TabTitle.d504caaa.js";import{t as R}from"./index.daa5af6e.js";function V(a){let t,r;return{c(){t=j("h3"),r=S(a[0]),this.h()},l(l){t=w(l,"H3",{class:!0});var e=q(t);r=A(e,a[0]),e.forEach(d),this.h()},h(){u(t,"class","font-[var(--title-f)] text-1.25em")},m(l,e){b(l,t,e),D(t,r)},p(l,[e]){e&1&&F(r,l[0])},i:h,o:h,d(l){l&&d(t)}}}function W(a,t,r){let{title:l}=t;return a.$$set=e=>{"title"in e&&r(0,l=e.title)},[l]}class re extends G{constructor(t){super(),M(this,t,W,V,C,{title:0})}}function X(a){let t,r,l;return{c(){t=j("img"),this.h()},l(e){t=w(e,"IMG",{class:!0,src:!0,alt:!0}),this.h()},h(){u(t,"class",r=v(`w-15px h-15px ${a[2]?"invert-100":""}`)+" svelte-1m94jop"),I(t.src,l=a[1])||u(t,"src",l),u(t,"alt",a[0]),N(t,"chip-icon-logo-inverted",a[5]&&a[2])},m(e,s){b(e,t,s)},p(e,s){s&4&&r!==(r=v(`w-15px h-15px ${e[2]?"invert-100":""}`)+" svelte-1m94jop")&&u(t,"class",r),s&2&&!I(t.src,l=e[1])&&u(t,"src",l),s&1&&u(t,"alt",e[0]),s&36&&N(t,"chip-icon-logo-inverted",e[5]&&e[2])},i:h,o:h,d(e){e&&d(t)}}}function Y(a){let t;const r=a[8].default,l=T(r,a,a[7],null);return{c(){l&&l.c()},l(e){l&&l.l(e)},m(e,s){l&&l.m(e,s),t=!0},p(e,s){l&&l.p&&(!t||s&128)&&U(l,r,e,e[7],t?J(r,e[7],s,null):B(e[7]),null)},i(e){t||(p(l,e),t=!0)},o(e){g(l,e),t=!1},d(e){l&&l.d(e)}}}function k(a){let t,r,l,e,s;const _=[Y,X],n=[];function m(i,o){return i[6].default?0:1}r=m(a),l=n[r]=_[r](a);let f=[{href:a[4]},{class:e=v(`chip-icon row-center relative text-inherit decoration-none p-10px m-r-5px m-b-5px border-1px border-solid border-[var(--border)] hover:border-[var(--border-hover)] rounded-10px hover:z-5 ${a[4]?"cursor-pointer":"cursor-help"} ${a[3]?"grayscale-65 hover:grayscale-0":""}`)+" svelte-1m94jop"},{"data-help":a[0]}],c={};for(let i=0;i<f.length;i+=1)c=L(c,f[i]);return{c(){t=j(a[4]?"a":"div"),l.c(),this.h()},l(i){t=w(i,((a[4]?"a":"div")||"null").toUpperCase(),{href:!0,class:!0,"data-help":!0});var o=q(t);l.l(o),o.forEach(d),this.h()},h(){E(a[4]?"a":"div")(t,c)},m(i,o){b(i,t,o),n[r].m(t,null),s=!0},p(i,o){let y=r;r=m(i),r===y?n[r].p(i,o):(O(),g(n[y],1,1,()=>{n[y]=null}),P(),l=n[r],l?l.p(i,o):(l=n[r]=_[r](i),l.c()),p(l,1),l.m(t,null)),E(i[4]?"a":"div")(t,c=Q(f,[(!s||o&16)&&{href:i[4]},(!s||o&24&&e!==(e=v(`chip-icon row-center relative text-inherit decoration-none p-10px m-r-5px m-b-5px border-1px border-solid border-[var(--border)] hover:border-[var(--border-hover)] rounded-10px hover:z-5 ${i[4]?"cursor-pointer":"cursor-help"} ${i[3]?"grayscale-65 hover:grayscale-0":""}`)+" svelte-1m94jop"))&&{class:e},(!s||o&1)&&{"data-help":i[0]}]))},i(i){s||(p(l),s=!0)},o(i){g(l),s=!1},d(i){i&&d(t),n[r].d()}}}function Z(a){let t=a[4]?"a":"div",r,l,e=(a[4]?"a":"div")&&k(a);return{c(){e&&e.c(),r=z()},l(s){e&&e.l(s),r=z()},m(s,_){e&&e.m(s,_),b(s,r,_),l=!0},p(s,[_]){s[4],t?C(t,s[4]?"a":"div")?(e.d(1),e=k(s),t=s[4]?"a":"div",e.c(),e.m(r.parentNode,r)):e.p(s,_):(e=k(s),t=s[4]?"a":"div",e.c(),e.m(r.parentNode,r))},i(s){l||(p(e,s),l=!0)},o(s){g(e,s),l=!1},d(s){s&&d(r),e&&e.d(s)}}}function x(a,t,r){let l;H(a,R,o=>r(5,l=o));let{$$slots:e={},$$scope:s}=t;const _=K(e);let{name:n=""}=t,{logo:m=""}=t,{inverted:f=!1}=t,{grayscale:c=!0}=t,{href:i=void 0}=t;return a.$$set=o=>{"name"in o&&r(0,n=o.name),"logo"in o&&r(1,m=o.logo),"inverted"in o&&r(2,f=o.inverted),"grayscale"in o&&r(3,c=o.grayscale),"href"in o&&r(4,i=o.href),"$$scope"in o&&r(7,s=o.$$scope)},[n,m,f,c,i,l,_,s,e]}class se extends G{constructor(t){super(),M(this,t,x,Z,C,{name:0,logo:1,inverted:2,grayscale:3,href:4})}}export{re as C,se as a};
