import{S as N,I as G,J as V,K as P,L as z,M as h,N as O,U as v,g as b,O as K,P as H,Q as J,R as Q,T as W,V as X,W as k,X as M,l as ee,Y as re,Z,_ as ne,k as U,$ as ie,a0 as $,a1 as te,u as Y,a2 as j,a3 as D,a4 as se,a5 as fe,a6 as ae,a7 as ue}from"./DGhBhFf6.js";function m(e,r=null,a){if(typeof e!="object"||e===null||N in e)return e;const u=J(e);if(u!==G&&u!==V)return e;var t=new Map,o=Q(e),w=P(0);o&&t.set("length",P(e.length));var g;return new Proxy(e,{defineProperty(l,n,i){(!("value"in i)||i.configurable===!1||i.enumerable===!1||i.writable===!1)&&z();var f=t.get(n);return f===void 0?(f=P(i.value),t.set(n,f)):h(f,m(i.value,g)),!0},deleteProperty(l,n){var i=t.get(n);if(i===void 0)n in l&&t.set(n,P(v));else{if(o&&typeof n=="string"){var f=t.get("length"),s=Number(n);Number.isInteger(s)&&s<f.v&&h(f,s)}h(i,v),q(w)}return!0},get(l,n,i){var c;if(n===N)return e;var f=t.get(n),s=n in l;if(f===void 0&&(!s||(c=O(l,n))!=null&&c.writable)&&(f=P(m(s?l[n]:v,g)),t.set(n,f)),f!==void 0){var d=b(f);return d===v?void 0:d}return Reflect.get(l,n,i)},getOwnPropertyDescriptor(l,n){var i=Reflect.getOwnPropertyDescriptor(l,n);if(i&&"value"in i){var f=t.get(n);f&&(i.value=b(f))}else if(i===void 0){var s=t.get(n),d=s==null?void 0:s.v;if(s!==void 0&&d!==v)return{enumerable:!0,configurable:!0,value:d,writable:!0}}return i},has(l,n){var d;if(n===N)return!0;var i=t.get(n),f=i!==void 0&&i.v!==v||Reflect.has(l,n);if(i!==void 0||K!==null&&(!f||(d=O(l,n))!=null&&d.writable)){i===void 0&&(i=P(f?m(l[n],g):v),t.set(n,i));var s=b(i);if(s===v)return!1}return f},set(l,n,i,f){var I;var s=t.get(n),d=n in l;if(o&&n==="length")for(var c=i;c<s.v;c+=1){var y=t.get(c+"");y!==void 0?h(y,v):c in l&&(y=P(v),t.set(c+"",y))}s===void 0?(!d||(I=O(l,n))!=null&&I.writable)&&(s=P(void 0),h(s,m(i,g)),t.set(n,s)):(d=s.v!==v,h(s,m(i,g)));var p=Reflect.getOwnPropertyDescriptor(l,n);if(p!=null&&p.set&&p.set.call(f,i),!d){if(o&&typeof n=="string"){var x=t.get("length"),S=Number(n);Number.isInteger(S)&&S>=x.v&&h(x,S+1)}q(w)}return!0},ownKeys(l){b(w);var n=Reflect.ownKeys(l).filter(s=>{var d=t.get(s);return d===void 0||d.v!==v});for(var[i,f]of t)f.v!==v&&!(i in l)&&n.push(i);return n},setPrototypeOf(){H()}})}function q(e,r=1){h(e,e.v+r)}let A=!1;function le(e){var r=A;try{return A=!1,[e(),A]}finally{A=r}}const de={get(e,r){if(!e.exclude.includes(r))return b(e.version),r in e.special?e.special[r]():e.props[r]},set(e,r,a){return r in e.special||(e.special[r]=oe({get[r](){return e.props[r]}},r,$)),e.special[r](a),j(e.version),!0},getOwnPropertyDescriptor(e,r){if(!e.exclude.includes(r)&&r in e.props)return{enumerable:!0,configurable:!0,value:e.props[r]}},deleteProperty(e,r){return e.exclude.includes(r)||(e.exclude.push(r),j(e.version)),!0},has(e,r){return e.exclude.includes(r)?!1:r in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(r=>!e.exclude.includes(r))}};function ce(e,r){return new Proxy({props:e,exclude:r,special:{},version:P(0)},de)}const _e={get(e,r){let a=e.props.length;for(;a--;){let u=e.props[a];if(D(u)&&(u=u()),typeof u=="object"&&u!==null&&r in u)return u[r]}},set(e,r,a){let u=e.props.length;for(;u--;){let t=e.props[u];D(t)&&(t=t());const o=O(t,r);if(o&&o.set)return o.set(a),!0}return!1},getOwnPropertyDescriptor(e,r){let a=e.props.length;for(;a--;){let u=e.props[a];if(D(u)&&(u=u()),typeof u=="object"&&u!==null&&r in u){const t=O(u,r);return t&&!t.configurable&&(t.configurable=!0),t}}},has(e,r){if(r===N||r===Z)return!1;for(let a of e.props)if(D(a)&&(a=a()),a!=null&&r in a)return!0;return!1},ownKeys(e){const r=[];for(let a of e.props){D(a)&&(a=a());for(const u in a)r.includes(u)||r.push(u)}return r}};function pe(...e){return new Proxy({props:e},_e)}function F(e){for(var r=K,a=K;r!==null&&!(r.f&(X|k));)r=r.parent;try{return M(r),e()}finally{M(a)}}function oe(e,r,a,u){var C;var t=(a&se)!==0,o=!ee||(a&re)!==0,w=(a&fe)!==0,g=(a&ue)!==0,l=!1,n;w?[n,l]=le(()=>e[r]):n=e[r];var i=N in e||Z in e,f=w&&(((C=O(e,r))==null?void 0:C.set)??(i&&r in e&&(_=>e[r]=_)))||void 0,s=u,d=!0,c=!1,y=()=>(c=!0,d&&(d=!1,g?s=Y(u):s=u),s);n===void 0&&u!==void 0&&(f&&o&&ne(),n=y(),f&&f(n));var p;if(o)p=()=>{var _=e[r];return _===void 0?y():(d=!0,c=!1,_)};else{var x=F(()=>(t?U:ie)(()=>e[r]));x.f|=W,p=()=>{var _=b(x);return _!==void 0&&(s=void 0),_===void 0?s:_}}if(!(a&$))return p;if(f){var S=e.$$legacy;return function(_,R){return arguments.length>0?((!o||!R||S||l)&&f(R?p():_),_):p()}}var I=!1,B=!1,T=ae(n),E=F(()=>U(()=>{var _=p(),R=b(T);return I?(I=!1,B=!0,R):(B=!1,T.v=_)}));return t||(E.equals=te),function(_,R){if(arguments.length>0){const L=R?b(E):o&&w?m(_):_;return E.equals(L)||(I=!0,h(T,L),c&&s!==void 0&&(s=L),Y(()=>b(E))),_}return b(E)}}export{m as a,ce as l,oe as p,pe as s};
