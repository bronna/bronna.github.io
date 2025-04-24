import{a as le,t as ne}from"../chunks/CICvku7R.js";import{aa as se,u as ce,r as ve,h as ue,e as N,p as fe,o as me,t as de,s as pe,i as n,ab as he,v as c,w as v,O as h,ac as g,x as u,n as ge}from"../chunks/BULq485X.js";import{l as Q,h as _e,s as R}from"../chunks/DEvdpadG.js";import{r as O}from"../chunks/rkqFsgR7.js";import{i as be,a as J}from"../chunks/BaeU3cvp.js";import{b as ye}from"../chunks/DmkCQeTk.js";import{o as we}from"../chunks/ro8IakvE.js";import{R as xe}from"../chunks/B1GrKTdP.js";import{H as ze}from"../chunks/BbJeSI5n.js";function T(e,t,o=t){var r=se();Q(e,"input",a=>{var l=a?e.defaultValue:e.value;if(l=G(e)?k(l):l,o(l),r&&l!==(l=t())){var s=e.selectionStart,f=e.selectionEnd;e.value=l??"",f!==null&&(e.selectionStart=s,e.selectionEnd=Math.min(f,e.value.length))}}),(ue&&e.defaultValue!==e.value||ce(t)==null&&e.value)&&o(G(e)?k(e.value):e.value),ve(()=>{var a=t();G(e)&&a===k(e.value)||e.type==="date"&&!a&&!e.value||a!==e.value&&(e.value=a??"")})}function G(e){var t=e.type;return t==="number"||t==="range"}function k(e){return e===""?null:+e}function U(e,t,o){if(e.multiple)return Me(e,t);for(var r of e.options){var a=_(r);if(be(a,t)){r.selected=!0;return}}(!o||t!==void 0)&&(e.selectedIndex=-1)}function Se(e,t){N(()=>{var o=new MutationObserver(()=>{var r=e.__value;U(e,r)});return o.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),()=>{o.disconnect()}})}function Ce(e,t,o=t){var r=!0;Q(e,"change",a=>{var l=a?"[selected]":":checked",s;if(e.multiple)s=[].map.call(e.querySelectorAll(l),_);else{var f=e.querySelector(l)??e.querySelector("option:not([disabled])");s=f&&_(f)}o(s)}),N(()=>{var a=t();if(U(e,a,r),r&&a===void 0){var l=e.querySelector(":checked");l!==null&&(a=_(l),o(a))}e.__value=a,r=!1}),Se(e)}function Me(e,t){for(var o of e.options)o.selected=~t.indexOf(_(o))}function _(e){return"__value"in e?e.__value:e.value}var Pe=ne(`<!> <main class="svelte-feizon"><h1 class="svelte-feizon">REGL Experiments</h1> <div class="controls svelte-feizon"><div class="control-group svelte-feizon"><label for="particle-count" class="svelte-feizon"> </label> <input id="particle-count" type="range" min="500" max="10000" class="svelte-feizon"></div> <div class="control-group svelte-feizon"><label for="particle-size" class="svelte-feizon"> </label> <input id="particle-size" type="range" min="1" max="10" step="0.5" class="svelte-feizon"></div> <div class="control-group svelte-feizon"><label for="speed" class="svelte-feizon"> </label> <input id="speed" type="range" min="0.1" max="2.0" step="0.1" class="svelte-feizon"></div> <div class="control-group svelte-feizon"><label for="color-mode" class="svelte-feizon">Color Mode:</label> <select id="color-mode" class="svelte-feizon"><option>Rainbow</option><option>Plasma</option><option>Ocean</option></select></div></div> <div class="canvas-container svelte-feizon"><canvas class="svelte-feizon"></canvas></div> <div class="explanation svelte-feizon"><h2>About this experiment</h2> <p>This is an interactive particle system created with REGL, a functional WebGL framework. 
            The particles respond to mouse movement and create organic flowing patterns. You can 
            adjust various parameters using the controls above to create different effects.</p> <p>The visualization uses WebGL shaders to efficiently animate thousands of particles 
            in real-time, with smooth color transitions and mouse interaction.</p></div></main>`,1);function qe(e,t){fe(t,!0);let o,r,a=g(0),l=g(0),s=g(500),f=g(5),b=g(1),y=g("ocean"),m=J({x:-2,y:-2,prevX:-2,prevY:-2});function q(i){const p=o.getBoundingClientRect();m.prevX=m.x,m.prevY=m.y,m.x=(i.clientX-p.left)/p.width*2-1,m.y=(p.height-(i.clientY-p.top))/p.height*2-1}function F(){m.x=-2,m.y=-2}const Z=`
        precision mediump float;
        
        varying vec2 vPosition;
        uniform float time;
        uniform vec2 mouse;
        uniform vec2 resolution;
        uniform float particleSize;

        uniform float colorMode;

        vec3 rainbow(float t) {
            vec3 c = 0.5 + 0.5 * cos(6.28318 * (t + vec3(0.0, 0.33, 0.67)));
            return mix(vec3(0.2), c, 0.8);
        }

        vec3 plasma(float t) {
            return vec3(
                sin(t * 6.28318) * 0.5 + 0.5,
                sin(t * 6.28318 + 2.0944) * 0.5 + 0.5,
                sin(t * 6.28318 + 4.18879) * 0.5 + 0.5
            );
        }

        vec3 ocean(float t) {
            // Create a sharper transition
            float edge = smoothstep(0.45, 0.55, t);
            
            // Base colors
            vec3 darkBlue = vec3(0.1, 0.3, 0.5);
            vec3 lightBlue = vec3(0.2, 0.6, 0.8);
            
            // Add a subtle glow near the transition
            float glow = (1.0 - abs(t - 0.5) * 2.0);
            glow = pow(glow, 3.0); // Sharpen the glow
            vec3 glowColor = vec3(0.3, 0.7, 0.9);
            
            // Combine colors with the glow
            vec3 baseColor = mix(darkBlue, lightBlue, edge);
            return mix(baseColor, glowColor, glow * 0.4);
        }

        void main() {
            vec2 position = gl_PointCoord.xy;
            float dist = length(position - vec2(0.5));
            
            // Create soft circle
            float alpha = 1.0 - smoothstep(0.45, 0.5, dist);
            
            // Add mouse influence
            vec2 mouseOffset = vPosition.xy - mouse;
            float mouseDistance = length(mouseOffset);
            float mouseInfluence = smoothstep(0.5, 0.0, mouseDistance);
            
            // Color based on position and time
            float colorT = (vPosition.x + vPosition.y + time * 0.1) * 0.5;
            colorT = fract(colorT); // Keep in 0-1 range
            
            // Choose color based on mode
            vec3 color;
            if (colorMode < 1.0) {
                color = rainbow(colorT);
            } else if (colorMode < 2.0) {
                color = plasma(colorT);
            } else {
                color = ocean(colorT);
            }
            
            // Brighten color near mouse
            color = mix(color, color * 1.5, mouseInfluence);
            
            gl_FragColor = vec4(color, alpha * 0.8);
        }
    `,ee=`
        precision mediump float;
        attribute vec2 position;
        varying vec2 vPosition;
        uniform float time;
        uniform float particleSize;
        uniform vec2 mouse;
        uniform vec2 mouseVelocity;
        
        void main() {
            vPosition = position;
            
            // Basic movement
            vec2 pos = position;
            
            // Add wave motion
            pos.x += sin(time * 0.5 + position.y * 4.0) * 0.02;
            pos.y += cos(time * 0.5 + position.x * 4.0) * 0.02;
            
            // Add mouse influence
            vec2 mouseOffset = position - mouse;
            float mouseDistance = length(mouseOffset);
            float mouseStrength = smoothstep(0.5, 0.0, mouseDistance);
            
            // Push particles away from mouse
            pos += normalize(mouseOffset) * mouseStrength * 0.1;
            
            gl_Position = vec4(pos, 0, 1);
            gl_PointSize = particleSize * (1.0 + mouseStrength * 2.0);
        }
    `;function oe(){r=xe({canvas:o,attributes:{alpha:!0,premultipliedAlpha:!1}});const i=new Float32Array(n(s)*2);for(let d=0;d<n(s);d++)i[d*2]=Math.random()*2-1,i[d*2+1]=Math.random()*2-1;const p=r({frag:Z,vert:ee,attributes:{position:i},uniforms:{time:()=>n(l)*n(b),mouse:()=>[m.x,m.y],resolution:({viewportWidth:d,viewportHeight:w})=>[d,w],particleSize:()=>n(f),colorMode:()=>n(y)==="rainbow"?0:n(y)==="plasma"?1:2},count:n(s),primitive:"points",blend:{enable:!0,func:{srcRGB:"src alpha",srcAlpha:1,dstRGB:"one minus src alpha",dstAlpha:1}},depth:{enable:!1}});function K(){const d=o.clientWidth,w=o.clientHeight;(o.width!==d||o.height!==w)&&(o.width=d,o.height=w),r.poll(),r.clear({color:[0,0,0,0],depth:1}),h(l,n(l)+.016),p(),h(a,J(requestAnimationFrame(K)))}K()}we(()=>{if(o)try{oe(),o.addEventListener("mousemove",q),o.addEventListener("mouseleave",F)}catch(i){console.error("Failed to initialize regl:",i)}return()=>{cancelAnimationFrame(n(a)),o&&(o.removeEventListener("mousemove",q),o.removeEventListener("mouseleave",F)),r&&r.destroy()}});var $=Pe();_e(i=>{he.title="REGL Experiments"});var D=me($);ze(D);var Y=c(D,2),x=c(v(Y),2),z=v(x),S=v(z),te=v(S);u(S);var H=c(S,2);O(H),u(z);var C=c(z,2),M=v(C),ae=v(M);u(M);var I=c(M,2);O(I),u(C);var P=c(C,2),A=v(P),ie=v(A);u(A);var V=c(A,2);O(V),u(P);var W=c(P,2),E=c(v(W),2),L=v(E);L.value=(L.__value="rainbow")==null?"":"rainbow";var B=c(L);B.value=(B.__value="plasma")==null?"":"plasma";var X=c(B);X.value=(X.__value="ocean")==null?"":"ocean",u(E),u(W),u(x);var j=c(x,2),re=v(j);ye(re,i=>o=i,()=>o),u(j),ge(2),u(Y),de(()=>{R(te,`Particle Count: ${n(s)??""}`),R(ae,`Particle Size: ${n(f)??""}`),R(ie,`Animation Speed: ${n(b)??""}`)}),T(H,()=>n(s),i=>h(s,i)),T(I,()=>n(f),i=>h(f,i)),T(V,()=>n(b),i=>h(b,i)),Ce(E,()=>n(y),i=>h(y,i)),le(e,$),pe()}export{qe as component};
