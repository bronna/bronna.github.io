import{c as A,a as m,t as h}from"./BbqtUwm8.js";import"./8uNgZMnL.js";import{o as $,w as g,g as c,v as I,x as v,t as y,M as p,as as w,n as V}from"./DGhBhFf6.js";import{l as k,s as z,p as X,a as q}from"./DxC1w3kq.js";import{I as E,_ as B}from"./BkkwsYK0.js";import{d as F,e as M,s as H}from"./4dmz90AE.js";import{i as b}from"./BJvpYKQz.js";import{h as O,s as d}from"./DcOKtYbm.js";import{t as T}from"./Bvena8yX.js";import{s as N}from"./cU_QayF1.js";function Q(i,e){const o=k(e,["children","$$slots","$$events","$$legacy"]);E(i,z({name:"pause"},()=>o,{iconNode:[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1"}]],children:(r,f)=>{var n=A(),u=$(n);N(u,e,"default",{}),m(r,n)},$$slots:{default:!0}}))}function R(i,e){const o=k(e,["children","$$slots","$$events","$$legacy"]);E(i,z({name:"play"},()=>o,{iconNode:[["polygon",{points:"6 3 20 12 6 21 6 3"}]],children:(r,f)=>{var n=A(),u=$(n);N(u,e,"default",{}),m(r,n)},$$slots:{default:!0}}))}function Y(i,e){(i.key==="Enter"||i.key===" ")&&(i.preventDefault(),e())}function Z(i,e,o){p(e,!0),c(o)&&clearTimeout(c(o)),p(o,q(setTimeout(()=>{p(e,!1)},2e3)))}var ee=h('<img class="image svelte-10dxzd8">'),te=h('<img class="image svelte-10dxzd8">'),ae=h('<figcaption class="caption svelte-10dxzd8"> </figcaption>'),ie=h('<div class="gif-container svelte-10dxzd8"><figure class="figure svelte-10dxzd8"><div class="image-container svelte-10dxzd8" role="button" tabindex="0"><!> <div class="control-overlay svelte-10dxzd8" aria-hidden="true"><!></div></div> <!></figure></div>');function oe(i,e){let o=X(e,"maxWidth",3,"600px"),s=w(!0),r=w(!1),f=w(null);function n(){p(s,!c(s))}function u(){p(r,!0)}function D(){p(r,!1)}var _=ie(),P=g(_),l=g(P);l.__click=n,l.__keydown=[Y,n],l.__touchstart=[Z,r,f];var S=g(l);{var W=t=>{var a=ee();y(()=>{d(a,"src",e.staticSrc),d(a,"alt",e.alt),d(a,"style",`max-width: ${o()??""};`)}),m(t,a)},j=t=>{var a=te();y(()=>{d(a,"src",e.src),d(a,"alt",e.alt),d(a,"style",`max-width: ${o()??""};`),d(a,"loading",c(s)?"eager":"lazy"),T(a,"paused",!c(s))}),O(a),m(t,a)};b(S,t=>{e.staticSrc&&!c(s)?t(W):t(j,!1)})}var x=I(S,2),C=g(x);{var L=t=>{Q(t,{size:32})},G=t=>{R(t,{size:32})};b(C,t=>{c(s)?t(L):t(G,!1)})}v(x),v(l);var J=I(l,2);{var K=t=>{var a=ae(),U=g(a,!0);v(a),y(()=>H(U,e.description)),m(t,a)};b(J,t=>{e.description&&t(K)})}v(P),v(_),y(()=>{d(l,"aria-label",c(s)?"Pause animation":"Play animation"),T(x,"visible",c(r))}),M("mouseenter",l,u),M("mouseleave",l,D),m(i,_)}F(["click","keydown","touchstart"]);const se={title:null,date:"2025-02-13",description:"A second introduction to my blog and what I plan to write about. This is a description. Lorem ipsum doloret bla bla bla bla bla. An introduction helps the reader to know what it is they can read about.",categories:["mac","UX","tips and tricks"]};var ne=h('<!> <p>Mac users: did you know you can drag a file onto an icon in the dock and it will magically open in that app? I’ve been using it all the time ever since seeing it in a <a href="https://www.youtube.com/@jsoma/videos" rel="noopener noreferrer" target="_blank">Jonathan Soma tutorial</a>. Sometimes you want to open your python script in Terminal or sometimes in VSCode; sometimes you want to open your csv in TextEdit or sometimes in Excel. It delights me every time!</p>',1);function he(i,e){const o=k(e,["children","$$slots","$$events","$$legacy"]);B(i,z(()=>o,se,{children:(s,r)=>{var f=ne(),n=$(f);oe(n,{src:"/images/file-opening.gif",staticSrc:"/images/file-opening-static.jpg",alt:"Animation showing how to open a file on a Mac by dragging it onto an app in the dock",description:"An easy way to open a file in different applicationson on Mac: 1) Click the file icon, 2) Drag the file icon to the dock, 3) Place the file icon over the app you want to open it in 4) The file will open in that app",maxWidth:"400px"}),V(2),m(s,f)},$$slots:{default:!0}}))}export{he as default,se as metadata};
