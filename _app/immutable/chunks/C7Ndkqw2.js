import{at as x,au as z,av as B,y as D,h as S,a as G,F as M,D as P,G as $,U as j,E as K,aw as W,ax as X,e as Z,u as H,ay as J,O as R,a3 as Q,q as V,az as T,aA as Y,aB as aa,ad as q,X as L,ae as ra}from"./DGhBhFf6.js";import{a as ta}from"./4dmz90AE.js";function ca(r,a,t){S&&G();var i=r,e=j,f,v=x()?z:B;D(()=>{v(e,e=a())&&(f&&M(f),f=P(()=>t(i)))}),S&&(i=$)}const ia=()=>performance.now(),h={tick:r=>requestAnimationFrame(r),now:()=>ia(),tasks:new Set};function g(){const r=h.now();h.tasks.forEach(a=>{a.c(r)||(h.tasks.delete(a),a.f())}),h.tasks.size!==0&&h.tick(g)}function ea(r){let a;return h.tasks.size===0&&h.tick(g),{promise:new Promise(t=>{h.tasks.add(a={c:r,f:t})}),abort(){h.tasks.delete(a)}}}function p(r,a){r.dispatchEvent(new CustomEvent(a))}function sa(r){if(r==="float")return"cssFloat";if(r==="offset")return"cssOffset";if(r.startsWith("--"))return r;const a=r.split("-");return a.length===1?a[0]:a[0]+a.slice(1).map(t=>t[0].toUpperCase()+t.slice(1)).join("")}function U(r){const a={},t=r.split(";");for(const i of t){const[e,f]=i.split(":");if(!e||f===void 0)break;const v=sa(e.trim());a[v]=f.trim()}return a}const fa=r=>r;function ua(r,a,t,i){var e=(r&J)!==0,f=(r&Y)!==0,v=e&&f,k=(r&aa)!==0,I=v?"both":e?"in":"out",l,c=a.inert,b=a.style.overflow,n,s;function y(){var o=ra,E=R;q(null),L(null);try{return l??(l=t()(a,(i==null?void 0:i())??{},{direction:I}))}finally{q(o),L(E)}}var u={is_global:k,in(){var o;if(a.inert=c,!e){s==null||s.abort(),(o=s==null?void 0:s.reset)==null||o.call(s);return}f||n==null||n.abort(),p(a,"introstart"),n=m(a,y(),s,1,()=>{p(a,"introend"),n==null||n.abort(),n=l=void 0,a.style.overflow=b})},out(o){if(!f){o==null||o(),l=void 0;return}a.inert=!0,p(a,"outrostart"),s=m(a,y(),n,0,()=>{p(a,"outroend"),o==null||o()})},stop:()=>{n==null||n.abort(),s==null||s.abort()}},_=R;if((_.transitions??(_.transitions=[])).push(u),e&&ta){var w=k;if(!w){for(var d=_.parent;d&&d.f&K;)for(;(d=d.parent)&&!(d.f&W););w=!d||(d.f&X)!==0}w&&Z(()=>{H(()=>u.in())})}}function m(r,a,t,i,e){var f=i===1;if(Q(a)){var v,k=!1;return V(()=>{if(!k){var _=a({direction:f?"in":"out"});v=m(r,_,t,i,e)}}),{abort:()=>{k=!0,v==null||v.abort()},deactivate:()=>v.deactivate(),reset:()=>v.reset(),t:()=>v.t()}}if(t==null||t.deactivate(),!(a!=null&&a.duration))return e(),{abort:T,deactivate:T,reset:T,t:()=>i};const{delay:I=0,css:l,tick:c,easing:b=fa}=a;var n=[];if(f&&t===void 0&&(c&&c(0,1),l)){var s=U(l(0,1));n.push(s,s)}var y=()=>1-i,u=r.animate(n,{duration:I});return u.onfinish=()=>{var _=(t==null?void 0:t.t())??1-i;t==null||t.abort();var w=i-_,d=a.duration*Math.abs(w),o=[];if(d>0){var E=!1;if(l)for(var F=Math.ceil(d/16.666666666666668),A=0;A<=F;A+=1){var O=_+w*b(A/F),C=U(l(O,1-O));o.push(C),E||(E=C.overflow==="hidden")}E&&(r.style.overflow="hidden"),y=()=>{var N=u.currentTime;return _+w*b(N/d)},c&&ea(()=>{if(u.playState!=="running")return!1;var N=y();return c(N,1-N),!0})}u=r.animate(o,{duration:d,fill:"forwards"}),u.onfinish=()=>{y=()=>i,c==null||c(i,1-i),e()}},{abort:()=>{u&&(u.cancel(),u.effect=null,u.onfinish=T)},deactivate:()=>{e=T},reset:()=>{i===0&&(c==null||c(1,0))},t:()=>y()}}const na=r=>r;function da(r,{delay:a=0,duration:t=400,easing:i=na}={}){const e=+getComputedStyle(r).opacity;return{delay:a,duration:t,easing:i,css:f=>`opacity: ${f*e}`}}export{da as f,ca as k,ua as t};
