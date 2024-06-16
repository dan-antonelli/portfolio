import{s as K,f as k,a as H,g as x,h as V,d as _,c as E,j as o,i as R,v as z,w as S,x as f1,y as z1,o as _1,l as v1,m as d1,G as e1,n as C1,B as U,p as g1,H as t1,I as r1,A as q,J as M1,r as a1}from"../chunks/scheduler.3fa296d9.js";import{S as Q,i as W,b as F,d as J,m as O,a as j,t as P,e as Z,c as b1,g as w1}from"../chunks/index.e127cdc7.js";import{e as N,g as l1}from"../chunks/index.dc8dfafa.js";import{U as s1}from"../chunks/UIcon.92db3070.js";import{P as D}from"../chunks/types.3ee0598d.js";import{u as L1,M as k1,t as x1}from"../chunks/app.d18bcfda.js";import{c as V1,m as n1,t as A1,a as o1}from"../chunks/home.599d43e7.js";import{i as y1}from"../chunks/skills.75ef5dac.js";import{i as H1}from"../chunks/index.8a23ec79.js";function c1(e,t,r){const a=e.slice();return a[16]=t[r],a}function i1(e){let t,r,a,s,l,n,c=e[16].name+"",i,v;return{c(){t=k("div"),r=k("img"),l=H(),n=k("span"),i=v1(c),v=H(),this.h()},l(d){t=x(d,"DIV",{class:!0});var b=V(t);r=x(b,"IMG",{class:!0,src:!0,alt:!0}),l=E(b),n=x(b,"SPAN",{class:!0});var w=V(n);i=d1(w,c),w.forEach(_),v=E(b),b.forEach(_),this.h()},h(){o(r,"class","w-120px h-120px aspect-square"),e1(r.src,a=l1(e[16].logo))||o(r,"src",a),o(r,"alt",s=e[16].name),o(n,"class","text-center m-t-20px"),o(t,"class","box-content w-150px p-15px col-center")},m(d,b){R(d,t,b),z(t,r),z(t,l),z(t,n),z(n,i),z(t,v)},p(d,b){b&1&&!e1(r.src,a=l1(d[16].logo))&&o(r,"src",a),b&1&&s!==(s=d[16].name)&&o(r,"alt",s),b&1&&c!==(c=d[16].name+"")&&C1(i,c)},d(d){d&&_(t)}}}function E1(e){let t,r,a,s,l,n,c,i,v,d,b;a=new s1({props:{icon:"i-carbon-chevron-left"}});let w=N(e[0]),C=[];for(let h=0;h<w.length;h+=1)C[h]=i1(c1(e,w,h));return i=new s1({props:{icon:"i-carbon-chevron-right"}}),{c(){t=k("div"),r=k("button"),F(a.$$.fragment),s=H(),l=k("div");for(let h=0;h<C.length;h+=1)C[h].c();n=H(),c=k("button"),F(i.$$.fragment),this.h()},l(h){t=x(h,"DIV",{class:!0});var M=V(t);r=x(M,"BUTTON",{class:!0});var f=V(r);J(a.$$.fragment,f),f.forEach(_),s=E(M),l=x(M,"DIV",{class:!0});var A=V(l);for(let u=0;u<C.length;u+=1)C[u].l(A);A.forEach(_),n=E(M),c=x(M,"BUTTON",{class:!0});var y=V(c);J(i.$$.fragment,y),y.forEach(_),M.forEach(_),this.h()},h(){o(r,"class","row-center font-500 p-5px m-y-0px m-x-10px cursor-pointer border-1px border-solid border-[var(--border)] bg-transparent rounded-[50%] hover:border-[var(--border-hover)]"),o(l,"class","row overflow-hidden box-content w-150px"),o(c,"class","row-center font-500 p-5px m-y-0px m-x-10px cursor-pointer border-1px border-solid border-[var(--border)] bg-transparent rounded-[50%] hover:border-[var(--border-hover)]"),o(t,"class","carrousel flex-[0.5] row-center")},m(h,M){R(h,t,M),z(t,r),O(a,r,null),z(t,s),z(t,l);for(let f=0;f<C.length;f+=1)C[f]&&C[f].m(l,null);e[11](l),z(t,n),z(t,c),O(i,c,null),v=!0,d||(b=[S(r,"click",e[2]),S(r,"keyup",e[8]),S(r,"keydown",e[9]),S(r,"keypress",e[10]),S(c,"click",e[3]),S(c,"keyup",e[5]),S(c,"keydown",e[6]),S(c,"keypress",e[7])],d=!0)},p(h,[M]){if(M&1){w=N(h[0]);let f;for(f=0;f<w.length;f+=1){const A=c1(h,w,f);C[f]?C[f].p(A,M):(C[f]=i1(A),C[f].c(),C[f].m(l,null))}for(;f<C.length;f+=1)C[f].d(1);C.length=w.length}},i(h){v||(j(a.$$.fragment,h),j(i.$$.fragment,h),v=!0)},o(h){P(a.$$.fragment,h),P(i.$$.fragment,h),v=!1},d(h){h&&_(t),Z(a),f1(C,h),e[11](null),Z(i),d=!1,z1(b)}}}const T1=2e3;function $1(e,t,r){let{items:a=[]}=t,s,l,n=0,c=!0;const i=u=>{u?n<a.length-1?r(4,n=n+1):(r(4,n=n-1),c=!1):n>0?r(4,n=n-1):(r(4,n=n+1),c=!0)},v=u=>{clearTimeout(l),l=setTimeout(()=>{i(u),v(c)},T1)},d=()=>{clearTimeout(l),c=!1,i(!1),v(c)},b=()=>{clearTimeout(l),c=!0,i(!0),v(c)};_1(()=>{v(!0)});function w(u){U.call(this,e,u)}function C(u){U.call(this,e,u)}function h(u){U.call(this,e,u)}function M(u){U.call(this,e,u)}function f(u){U.call(this,e,u)}function A(u){U.call(this,e,u)}function y(u){g1[u?"unshift":"push"](()=>{s=u,r(1,s)})}return e.$$set=u=>{"items"in u&&r(0,a=u.items)},e.$$.update=()=>{e.$$.dirty&18&&s&&s.scroll({left:n*150,behavior:"smooth"})},[a,s,d,b,n,w,C,h,M,f,A,y]}class S1 extends Q{constructor(t){super(),W(this,t,$1,E1,K,{items:0})}}var G=(e=>(e.Code="M5.854 4.854a.5.5 0 1 0-.708-.708l-3.5 3.5a.5.5 0 0 0 0 .708l3.5 3.5a.5.5 0 0 0 .708-.708L2.707 8l3.147-3.146zm4.292 0a.5.5 0 0 1 .708-.708l3.5 3.5a.5.5 0 0 1 0 .708l-3.5 3.5a.5.5 0 0 1-.708-.708L13.293 8l-3.147-3.146z",e.Search="M14.56 12.44L11.3 9.18a5.51 5.51 0 10-2.12 2.12l3.26 3.26a1.5 1.5 0 102.12-2.12zM3 6.5A3.5 3.5 0 116.5 10 3.5 3.5 0 013 6.5z",e.Email="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10h5v-2h-5c-4.34 0-8-3.66-8-8s3.66-8 8-8 8 3.66 8 8v1.43c0 .79-.71 1.57-1.5 1.57s-1.5-.78-1.5-1.57V12c0-2.76-2.24-5-5-5s-5 2.24-5 5 2.24 5 5 5c1.38 0 2.64-.56 3.54-1.47.65.89 1.77 1.47 2.96 1.47 1.97 0 3.5-1.6 3.5-3.57V12c0-5.52-4.48-10-10-10zm0 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z",e.Skills="M19 5a3 3 0 00-3-3H5v20l7-6.29L19 22z",e.GitHub="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z",e.StackOverflow="m17.12 21.857h-14.977v-6.428h-2.143v8.571h19.259v-8.571h-2.139zm-12.616-7.018.442-2.102 10.486 2.21-.442 2.09zm1.379-5.009.898-1.955 9.71 4.54-.898 1.942zm2.692-4.768 1.366-1.647 8.218 6.87-1.366 1.647zm5.313-5.062 6.388 8.585-1.716 1.286-6.386-8.585zm-9.616 19.701v-2.13h10.714v2.13z",e.LinkedIn="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z",e.Twitter="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z",e.Home="M23 9v2h-2v7a3 3 0 01-3 3h-4v-6h-4v6H6a3 3 0 01-3-3v-7H1V9l11-7 5 3.18V2h3v5.09z",e.Projects="M3 3h4v4H3zm7 4h4V3h-4zm7-4v4h4V3zM3 14h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4zM3 21h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4z",e.Job="M17 6V5a3 3 0 00-3-3h-4a3 3 0 00-3 3v1H2v4a3 3 0 003 3h14a3 3 0 003-3V6zM9 5a1 1 0 011-1h4a1 1 0 011 1v1H9zm10 9a4 4 0 003-1.38V17a3 3 0 01-3 3H5a3 3 0 01-3-3v-4.38A4 4 0 005 14z",e.Academic="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z",e.Resume="M3 3v15a3 3 0 003 3h9v-6h6V3zm9 8H6v-1h6zm6-3H6V7h12zm-2 8h5l-5 5z",e.RightArrow="M9.4,18.4l-0.7-0.7l5.6-5.6L8.6,6.4l0.7-0.7l6.4,6.4L9.4,18.4z",e.LeftArrow="M14.6,18.4L8.3,12l6.4-6.4l0.7,0.7L9.7,12l5.6,5.6L14.6,18.4z",e.Youtube="M365.257,67.393H95.744C42.866,67.393,0,110.259,0,163.137v134.728 c0,52.878,42.866,95.744,95.744,95.744h269.513c52.878,0,95.744-42.866,95.744-95.744V163.137 C461.001,110.259,418.135,67.393,365.257,67.393z M300.506,237.056l-126.06,60.123c-3.359,1.602-7.239-0.847-7.239-4.568V168.607 c0-3.774,3.982-6.22,7.348-4.514l126.06,63.881C304.363,229.873,304.298,235.248,300.506,237.056z",e.Link="M19.83 4.17a4 4 0 00-5.66 0l-2 2A4 4 0 0011 9a4 4 0 00.56 2l-.54.54a4 4 0 00-4.85.63l-2 2a4 4 0 005.66 5.66l2-2A4 4 0 0013 15a4 4 0 00-.56-2l.54-.54a4 4 0 004.85-.63l2-2a4 4 0 000-5.66zM11 15a2 2 0 01-.59 1.41l-2 2a2 2 0 11-3-2.6l.22-.22 2-2A2 2 0 019 13a2.24 2.24 0 01.51.07l-1.22 1.22a1 1 0 000 1.41 1 1 0 001.41 0l1.22-1.22A2.24 2.24 0 0111 15zm7.41-6.59l-2 2A2 2 0 0115 11a2.24 2.24 0 01-.51-.07l1.22-1.22A1 1 0 0016 9a1 1 0 00-.29-.7A1 1 0 0015 8a1 1 0 00-.7.29l-1.23 1.22A2.24 2.24 0 0113 9a2 2 0 01.59-1.41l2-2a2 2 0 013 2.6z",e.Sun="M108.5 24C108.5 27.5902136 105.590214 30.5 102 30.5 98.4097864 30.5 95.5 27.5902136 95.5 24 95.5 20.4097864 98.4097864 17.5 102 17.5 105.590214 17.5 108.5 20.4097864 108.5 24zM107 24C107 21.2382136 104.761786 19 102 19 99.2382136 19 97 21.2382136 97 24 97 26.7617864 99.2382136 29 102 29 104.761786 29 107 26.7617864 107 24zM101 12.75L101 14.75C101 15.1642136 101.335786 15.5 101.75 15.5 102.164214 15.5 102.5 15.1642136 102.5 14.75L102.5 12.75C102.5 12.3357864 102.164214 12 101.75 12 101.335786 12 101 12.3357864 101 12.75zM95.7255165 14.6323616L96.7485165 16.4038616C96.9556573 16.7625614 97.4143618 16.8854243 97.7730616 16.6782835 98.1317614 16.4711427 98.2546243 16.0124382 98.0474835 15.6537384L97.0244835 13.8822384C96.8173427 13.5235386 96.3586382 13.4006757 95.9999384 13.6078165 95.6412386 13.8149573 95.5183757 14.2736618 95.7255165 14.6323616zM91.8822384 19.0244835L93.6537384 20.0474835C94.0124382 20.2546243 94.4711427 20.1317614 94.6782835 19.7730616 94.8854243 19.4143618 94.7625614 18.9556573 94.4038616 18.7485165L92.6323616 17.7255165C92.2736618 17.5183757 91.8149573 17.6412386 91.6078165 17.9999384 91.4006757 18.3586382 91.5235386 18.8173427 91.8822384 19.0244835zM90.75 25L92.75 25C93.1642136 25 93.5 24.6642136 93.5 24.25 93.5 23.8357864 93.1642136 23.5 92.75 23.5L90.75 23.5C90.3357864 23.5 90 23.8357864 90 24.25 90 24.6642136 90.3357864 25 90.75 25zM92.6323616 30.2744835L94.4038616 29.2514835C94.7625614 29.0443427 94.8854243 28.5856382 94.6782835 28.2269384 94.4711427 27.8682386 94.0124382 27.7453757 93.6537384 27.9525165L91.8822384 28.9755165C91.5235386 29.1826573 91.4006757 29.6413618 91.6078165 30.0000616 91.8149573 30.3587614 92.2736618 30.4816243 92.6323616 30.2744835zM97.0244835 34.1177616L98.0474835 32.3462616C98.2546243 31.9875618 98.1317614 31.5288573 97.7730616 31.3217165 97.4143618 31.1145757 96.9556573 31.2374386 96.7485165 31.5961384L95.7255165 33.3676384C95.5183757 33.7263382 95.6412386 34.1850427 95.9999384 34.3921835 96.3586382 34.5993243 96.8173427 34.4764614 97.0244835 34.1177616zM103 35.25L103 33.25C103 32.8357864 102.664214 32.5 102.25 32.5 101.835786 32.5 101.5 32.8357864 101.5 33.25L101.5 35.25C101.5 35.6642136 101.835786 36 102.25 36 102.664214 36 103 35.6642136 103 35.25zM108.274483 33.3676384L107.251483 31.5961384C107.044343 31.2374386 106.585638 31.1145757 106.226938 31.3217165 105.868239 31.5288573 105.745376 31.9875618 105.952517 32.3462616L106.975517 34.1177616C107.182657 34.4764614 107.641362 34.5993243 108.000062 34.3921835 108.358761 34.1850427 108.481624 33.7263382 108.274483 33.3676384zM112.117762 28.9755165L110.346262 27.9525165C109.987562 27.7453757 109.528857 27.8682386 109.321717 28.2269384 109.114576 28.5856382 109.237439 29.0443427 109.596138 29.2514835L111.367638 30.2744835C111.726338 30.4816243 112.185043 30.3587614 112.392183 30.0000616 112.599324 29.6413618 112.476461 29.1826573 112.117762 28.9755165zM113.25 23L111.25 23C110.835786 23 110.5 23.3357864 110.5 23.75 110.5 24.1642136 110.835786 24.5 111.25 24.5L113.25 24.5C113.664214 24.5 114 24.1642136 114 23.75 114 23.3357864 113.664214 23 113.25 23zM111.367638 17.7255165L109.596138 18.7485165C109.237439 18.9556573 109.114576 19.4143618 109.321717 19.7730616 109.528857 20.1317614 109.987562 20.2546243 110.346262 20.0474835L112.117762 19.0244835C112.476461 18.8173427 112.599324 18.3586382 112.392183 17.9999384 112.185043 17.6412386 111.726338 17.5183757 111.367638 17.7255165zM106.975517 13.8822384L105.952517 15.6537384C105.745376 16.0124382 105.868239 16.4711427 106.226938 16.6782835 106.585638 16.8854243 107.044343 16.7625614 107.251483 16.4038616L108.274483 14.6323616C108.481624 14.2736618 108.358761 13.8149573 108.000062 13.6078165 107.641362 13.4006757 107.182657 13.5235386 106.975517 13.8822384z",e.Moon="M102,21 C102,18.1017141 103.307179,15.4198295 105.51735,13.6246624 C106.001939,13.2310647 105.821611,12.4522936 105.21334,12.3117518 C104.322006,12.1058078 103.414758,12 102.5,12 C95.8722864,12 90.5,17.3722864 90.5,24 C90.5,30.6277136 95.8722864,36 102.5,36 C106.090868,36 109.423902,34.4109093 111.690274,31.7128995 C112.091837,31.2348572 111.767653,30.5041211 111.143759,30.4810139 C106.047479,30.2922628 102,26.1097349 102,21 Z M102.5,34.5 C96.7007136,34.5 92,29.7992864 92,24 C92,18.2007136 96.7007136,13.5 102.5,13.5 C102.807386,13.5 103.113925,13.5136793 103.419249,13.5407785 C101.566047,15.5446378 100.5,18.185162 100.5,21 C100.5,26.3198526 104.287549,30.7714322 109.339814,31.7756638 L109.516565,31.8092927 C107.615276,33.5209452 105.138081,34.5 102.5,34.5 Z",e.Facebook="M353.701,0H55.087C24.665,0,0.002,24.662,0.002,55.085v298.616c0,30.423,24.662,55.085,55.085,55.085 h147.275l0.251-146.078h-37.951c-4.932,0-8.935-3.988-8.954-8.92l-0.182-47.087c-0.019-4.959,3.996-8.989,8.955-8.989h37.882 v-45.498c0-52.8,32.247-81.55,79.348-81.55h38.65c4.945,0,8.955,4.009,8.955,8.955v39.704c0,4.944-4.007,8.952-8.95,8.955 l-23.719,0.011c-25.615,0-30.575,12.172-30.575,30.035v39.389h56.285c5.363,0,9.524,4.683,8.892,10.009l-5.581,47.087 c-0.534,4.506-4.355,7.901-8.892,7.901h-50.453l-0.251,146.078h87.631c30.422,0,55.084-24.662,55.084-55.084V55.085 C408.786,24.662,384.124,0,353.701,0z",e))(G||{});const j1=e=>{switch(e){case D.GitHub:return"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z";case D.Linkedin:return"M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z";case D.StackOverflow:return"m17.12 21.857h-14.977v-6.428h-2.143v8.571h19.259v-8.571h-2.139zm-12.616-7.018.442-2.102 10.486 2.21-.442 2.09zm1.379-5.009.898-1.955 9.71 4.54-.898 1.942zm2.692-4.768 1.366-1.647 8.218 6.87-1.366 1.647zm5.313-5.062 6.388 8.585-1.716 1.286-6.386-8.585zm-9.616 19.701v-2.13h10.714v2.13z";case D.Facebook:return"M353.701,0H55.087C24.665,0,0.002,24.662,0.002,55.085v298.616c0,30.423,24.662,55.085,55.085,55.085 h147.275l0.251-146.078h-37.951c-4.932,0-8.935-3.988-8.954-8.92l-0.182-47.087c-0.019-4.959,3.996-8.989,8.955-8.989h37.882 v-45.498c0-52.8,32.247-81.55,79.348-81.55h38.65c4.945,0,8.955,4.009,8.955,8.955v39.704c0,4.944-4.007,8.952-8.95,8.955 l-23.719,0.011c-25.615,0-30.575,12.172-30.575,30.035v39.389h56.285c5.363,0,9.524,4.683,8.892,10.009l-5.581,47.087 c-0.534,4.506-4.355,7.901-8.892,7.901h-50.453l-0.251,146.078h87.631c30.422,0,55.084-24.662,55.084-55.084V55.085 C408.786,24.662,384.124,0,353.701,0z";case D.Email:return"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10h5v-2h-5c-4.34 0-8-3.66-8-8s3.66-8 8-8 8 3.66 8 8v1.43c0 .79-.71 1.57-1.5 1.57s-1.5-.78-1.5-1.57V12c0-2.76-2.24-5-5-5s-5 2.24-5 5 2.24 5 5 5c1.38 0 2.64-.56 3.54-1.47.65.89 1.77 1.47 2.96 1.47 1.97 0 3.5-1.6 3.5-3.57V12c0-5.52-4.48-10-10-10zm0 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z";case D.Twitter:return"M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z";case D.Youtube:return"M365.257,67.393H95.744C42.866,67.393,0,110.259,0,163.137v134.728 c0,52.878,42.866,95.744,95.744,95.744h269.513c52.878,0,95.744-42.866,95.744-95.744V163.137 C461.001,110.259,418.135,67.393,365.257,67.393z M300.506,237.056l-126.06,60.123c-3.359,1.602-7.239-0.847-7.239-4.568V168.607 c0-3.774,3.982-6.22,7.348-4.514l126.06,63.881C304.363,229.873,304.298,235.248,300.506,237.056z"}},h1=e=>e===G.Youtube?"0 0 461.001 461.001":e===G.Facebook?"0 0 408.788 408.788":[G.GitHub,G.Search,G.Code].includes(e)?"0 0 16 16":"0 0 24 24";function B1(e){let t,r,a;return{c(){t=t1("svg"),r=t1("path"),this.h()},l(s){t=r1(s,"svg",{class:!0,viewBox:!0,fill:!0,height:!0,width:!0});var l=V(t);r=r1(l,"path",{d:!0}),V(r).forEach(_),l.forEach(_),this.h()},h(){o(r,"d",e[2]),o(t,"class","inline-block"),o(t,"viewBox",a=h1(e[2])),o(t,"fill",e[1]),o(t,"height",e[0]),o(t,"width",e[0])},m(s,l){R(s,t,l),z(t,r),e[4](t)},p(s,[l]){l&4&&o(r,"d",s[2]),l&4&&a!==(a=h1(s[2]))&&o(t,"viewBox",a),l&2&&o(t,"fill",s[1]),l&1&&o(t,"height",s[0]),l&1&&o(t,"width",s[0])},i:q,o:q,d(s){s&&_(t),e[4](null)}}}function D1(e,t,r){let a,{size:s="30px"}=t,{color:l="var(--main-text)"}=t,{icon:n}=t;function c(i){g1[i?"unshift":"push"](()=>{a=i,r(3,a)})}return e.$$set=i=>{"size"in i&&r(0,s=i.size),"color"in i&&r(1,l=i.color),"icon"in i&&r(2,n=i.icon)},[s,l,n,a,c]}class P1 extends Q{constructor(t){super(),W(this,t,D1,B1,K,{size:0,color:1,icon:2})}}const R1=""+new URL("../assets/avatar.fda42a0a.png",import.meta.url).href;function u1(e,t,r){const a=e.slice();return a[1]=t[r],a}function U1(e){let t;return{c(){t=v1(n1)},l(r){t=d1(r,n1)},m(r,a){R(r,t,a)},p:q,d(r){r&&_(t)}}}function m1(e){let t,r,a,s;return r=new P1({props:{icon:j1(e[1].platform),color:"var(--accent-text)",size:"20px"}}),{c(){t=k("a"),F(r.$$.fragment),a=H(),this.h()},l(l){t=x(l,"A",{class:!0,href:!0,target:!0,rel:!0});var n=V(t);J(r.$$.fragment,n),a=E(n),n.forEach(_),this.h()},h(){o(t,"class","decoration-none"),o(t,"href",`${e[0](e[1].link)?"mailto:":""}${e[1].link}`),o(t,"target","_blank"),o(t,"rel","noreferrer")},m(l,n){R(l,t,n),O(r,t,null),z(t,a),s=!0},p:q,i(l){s||(j(r.$$.fragment,l),s=!0)},o(l){P(r.$$.fragment,l),s=!1},d(l){l&&_(t),Z(r)}}}function G1(e){let t,r,a,s,l=`<img src="${R1}" alt="avatar" class="avatar w-60 h-60"/>`,n,c,i,v,d,b,w,C=`I&#39;m a product-focused <strong>Senior Fullstack Engineer with over 6 years of experience</strong>, specializing in building dynamic web applications. I have a strong background in
				technologies ranging from Java to JavaScript, with a current focus on
				<strong>React</strong>. Check out my
				<a href="projects" class="animated-underline">projects</a>
				and my
				<a href="experience" class="animated-underline">résumé</a>!`,h,M,f,A,y,u;document.title=L1(A1,x1),d=new k1({props:{classes:"text-center md:text-left ",$$slots:{default:[U1]},$$scope:{ctx:e}}});let B=N(o1),g=[];for(let m=0;m<B.length;m+=1)g[m]=m1(u1(e,B,m));const p1=m=>P(g[m],1,1,()=>{g[m]=null});return y=new S1({props:{items:V1??y1}}),{c(){t=H(),r=k("div"),a=k("div"),s=k("div"),s.innerHTML=l,n=H(),c=k("div"),i=H(),v=k("div"),F(d.$$.fragment),b=H(),w=k("p"),w.innerHTML=C,h=H(),M=k("div");for(let m=0;m<g.length;m+=1)g[m].c();f=H(),A=k("div"),F(y.$$.fragment),this.h()},l(m){M1("svelte-1tippc1",document.head).forEach(_),t=E(m),r=x(m,"DIV",{class:!0});var T=V(r);a=x(T,"DIV",{class:!0});var p=V(a);s=x(p,"DIV",{class:!0,"data-svelte-h":!0}),a1(s)!=="svelte-rjseu0"&&(s.innerHTML=l),n=E(p),c=x(p,"DIV",{class:!0}),V(c).forEach(_),i=E(p),v=x(p,"DIV",{class:!0});var $=V(v);J(d.$$.fragment,$),b=E($),w=x($,"P",{class:!0,"data-svelte-h":!0}),a1(w)!=="svelte-ax8od"&&(w.innerHTML=C),h=E($),M=x($,"DIV",{class:!0});var X=V(M);for(let Y=0;Y<g.length;Y+=1)g[Y].l(X);X.forEach(_),$.forEach(_),f=E(p),A=x(p,"DIV",{class:!0});var I=V(A);J(y.$$.fragment,I),I.forEach(_),p.forEach(_),T.forEach(_),this.h()},h(){o(s,"class","col-span-full md:col-span-1 flex items-center justify-center md:block"),o(c,"class","col-start-1 row-start-2 md:col-start-2 md:row-start-1"),o(w,"class","text-[var(--tertiary-text)] text-center md:text-left text-[1.2em] font-extralight"),o(M,"class","row justify-center md:justify-start p-y-15px p-x-0px gap-2"),o(v,"class","col-start-1 row-start-3 md:col-start-1 md:row-start-2 md:col-span-2"),o(A,"class","col-start-1 row-start-4 md:col-start-3 md:row-start-2 self-center"),o(a,"class","grid grid-cols-1 space-y-0 md:grid-cols-3 md:space-y-4 gap-y-6 md:gap-y-0 pl-at-1076 pl-at-s"),o(r,"class","col self-center flex-1 flex-col md:flex-row md:slef-stretch justify-center lg:justify-between items-center p-y-0px p-x-10px flex justify-center items-center min-h-screen lg:-mt-10 md:-mt-15 xs-mt-0 mt-in-landscape mt-at-540")},m(m,L){R(m,t,L),R(m,r,L),z(r,a),z(a,s),z(a,n),z(a,c),z(a,i),z(a,v),O(d,v,null),z(v,b),z(v,w),z(v,h),z(v,M);for(let T=0;T<g.length;T+=1)g[T]&&g[T].m(M,null);z(a,f),z(a,A),O(y,A,null),u=!0},p(m,[L]){const T={};if(L&16&&(T.$$scope={dirty:L,ctx:m}),d.$set(T),L&1){B=N(o1);let p;for(p=0;p<B.length;p+=1){const $=u1(m,B,p);g[p]?(g[p].p($,L),j(g[p],1)):(g[p]=m1($),g[p].c(),j(g[p],1),g[p].m(M,null))}for(w1(),p=B.length;p<g.length;p+=1)p1(p);b1()}},i(m){if(!u){j(d.$$.fragment,m);for(let L=0;L<B.length;L+=1)j(g[L]);j(y.$$.fragment,m),u=!0}},o(m){P(d.$$.fragment,m),g=g.filter(Boolean);for(let L=0;L<g.length;L+=1)P(g[L]);P(y.$$.fragment,m),u=!1},d(m){m&&(_(t),_(r)),Z(d),f1(g,m),Z(y)}}}function F1(e){return[r=>{const a=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return!H1(r)&&a.test(r)}]}class X1 extends Q{constructor(t){super(),W(this,t,F1,G1,K,{})}}export{X1 as component};
