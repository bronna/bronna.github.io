import{a as Ee,t as He}from"../chunks/CR_3py8g.js";import{e as ye,A as Oe,B as Ge,C as Ye,D as je,v as o,$ as Ke,E as l,F as r,N as p,G as s,n as Le,O as h}from"../chunks/CVuNfkzf.js";import{l as Ne,h as Ue,e as z,s as k}from"../chunks/qDpDdD8I.js";import{r as w}from"../chunks/BWPhJSfu.js";import{b as C}from"../chunks/BGj2er40.js";import{i as We,p as Je}from"../chunks/DWvpJWiV.js";import{b as Qe}from"../chunks/Dt6cWVIg.js";import{o as Ve}from"../chunks/Dk5IxytF.js";import{R as Xe}from"../chunks/BVibnFPP.js";import{H as Ze}from"../chunks/sB8_Elye.js";function be(t,d,a){if(t.multiple)return it(t,d);for(var n of t.options){var c=D(n);if(We(c,d)){n.selected=!0;return}}(!a||d!==void 0)&&(t.selectedIndex=-1)}function et(t,d){ye(()=>{var a=new MutationObserver(()=>{var n=t.__value;be(t,n)});return a.observe(t,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),()=>{a.disconnect()}})}function tt(t,d,a=d){var n=!0;Ne(t,"change",c=>{var f=c?"[selected]":":checked",x;if(t.multiple)x=[].map.call(t.querySelectorAll(f),D);else{var _=t.querySelector(f)??t.querySelector("option:not([disabled])");x=_&&D(_)}a(x)}),ye(()=>{var c=d();if(be(t,c,n),n&&c===void 0){var f=t.querySelector(":checked");f!==null&&(c=D(f),a(c))}t.__value=c,n=!1}),et(t)}function it(t,d){for(var a of t.options)a.selected=~d.indexOf(D(a))}function D(t){return"__value"in t?t.__value:t.value}var at=He(`<!> <main class="svelte-hlt4mo"><h1 class="svelte-hlt4mo">Text Particle Effect</h1> <div class="controls svelte-hlt4mo"><div class="control-group svelte-hlt4mo"><label for="text-input" class="svelte-hlt4mo">Text:</label> <input id="text-input" type="text" maxlength="10" class="svelte-hlt4mo"></div> <div class="control-group svelte-hlt4mo"><label for="font-size" class="svelte-hlt4mo"> </label> <input id="font-size" type="range" min="50" max="300" step="10" class="svelte-hlt4mo"></div> <div class="control-group svelte-hlt4mo"><label for="font-family" class="svelte-hlt4mo">Font:</label> <select id="font-family" class="svelte-hlt4mo"><option>Serif</option><option>Sans-serif</option><option>Monospace</option><option>Shrikhand</option><option>Yeseva One</option></select></div> <div class="control-group svelte-hlt4mo"><label for="particle-count" class="svelte-hlt4mo"> </label> <input id="particle-count" type="range" min="5000" max="250000" step="1000" class="svelte-hlt4mo"></div> <div class="control-group svelte-hlt4mo"><label for="particle-size" class="svelte-hlt4mo"> </label> <input id="particle-size" type="range" min="1" max="10" step="0.5" class="svelte-hlt4mo"></div> <div class="control-group svelte-hlt4mo"><label for="density-falloff" class="svelte-hlt4mo"> </label> <input id="density-falloff" type="range" min="0.4" max="1.0" step="0.05" class="svelte-hlt4mo"></div> <div class="control-group svelte-hlt4mo"><label for="speed" class="svelte-hlt4mo"> </label> <input id="speed" type="range" min="0.1" max="2.0" step="0.1" class="svelte-hlt4mo"></div></div> <div class="canvas-container svelte-hlt4mo"><canvas class="svelte-hlt4mo"></canvas></div> <div class="explanation svelte-hlt4mo"><h2>About this experiment</h2> <p>This effect creates a stippling pattern that leaves empty spaces in the shape of letterforms,
            with particles concentrated densely around the edges and gradually dissipating outward.
            This technique resembles engraving and intaglio printing used in traditional currency design.</p> <p>The particles form a negative space for the text - there are no particles inside the letterforms,
            with the densest concentration of particles right at the edges of the letters. The density
            gradually decreases as you move away from the edges.</p> <p>Try adjusting the edge density slider to control how quickly the stippling fades away from
            the text edges, and experiment with different font styles for varied effects!</p></div></main>`,1);function ut(t,d){Oe(d,!0);let a,n,c=h(0),f=h(0),x=h("Fondu"),_=h(160),E=h("serif"),we=h(!1),y,b=h(8e4),M=h(3),A=h(.5),q=h(1);function T(){const e=document.createElement("canvas"),v=e.getContext("2d");e.width=a.width,e.height=a.height,v.fillStyle="black",v.fillRect(0,0,e.width,e.height),v.fillStyle="white",v.textAlign="center",v.textBaseline="middle",v.font=`bold ${o(_)}px ${o(E)}`,v.fillText(o(x),e.width/2,e.height/2);const S=v.getImageData(0,0,e.width,e.height).data,i=document.createElement("canvas"),u=i.getContext("2d");i.width=e.width,i.height=e.height,u.fillStyle="black",u.fillRect(0,0,i.width,i.height);const _e=u.getImageData(0,0,i.width,i.height),g=_e.data,le=Math.max(30,a.width*.1);for(let B=0;B<i.height;B++)for(let R=0;R<i.width;R++){const m=(B*i.width+R)*4;if(S[m]>200){g[m]=255,g[m+1]=255,g[m+2]=255,g[m+3]=255;continue}let ne=le;const I=Math.min(30,Math.floor(le/2));for(let P=-I;P<=I;P++){const re=B+P;if(!(re<0||re>=i.height))for(let F=-I;F<=I;F++){const se=R+F;if(se<0||se>=i.width)continue;const Re=(re*i.width+se)*4;if(S[Re]>200){const Ie=Math.sqrt(F*F+P*P);ne=Math.min(ne,Ie)}}}const Be=Math.pow(Math.max(0,1-ne/le),o(q)*7);g[m]=0,g[m+1]=0,g[m+2]=0,g[m+3]=Be*255}u.putImageData(_e,0,0),y?y({data:i,min:"linear",mag:"linear",flipY:!0}):y=n.texture({data:i,min:"linear",mag:"linear",flipY:!0}),p(we,!0)}const Ce=`
        precision mediump float;
        attribute vec2 position;
        varying vec2 vPosition;
        varying float vDensity;
        uniform float time;
        uniform float particleSize;
        uniform sampler2D textTexture;
        uniform vec2 resolution;
        
        // Function to get the texture info at a position
        vec4 getTextureInfo(vec2 pos) {
            vec2 uv = (pos + 1.0) * 0.5; // Convert from clip space to texture coords
            return texture2D(textTexture, uv);
        }
        
        void main() {
            vPosition = position;
            
            // Get the texture color at this position
            vec4 texColor = getTextureInfo(position);
            
            // White pixels (r,g,b all > 0.5) mean we're inside the text (no particles)
            bool isInText = texColor.r > 0.5 && texColor.g > 0.5 && texColor.b > 0.5;
            
            // Alpha channel contains the density for particles outside text
            float density = texColor.a;
            vDensity = density;
            
            // Create particles outside text, denser near edges
            if (isInText) {
                // Hide particles inside text (creates negative space)
                gl_Position = vec4(2.0, 2.0, 0, 1); // Move off-screen
                gl_PointSize = 0.0; // Hide
            } else {
                // Pseudo-random number based on position
                float r = fract(sin(dot(position, vec2(12.9898, 78.233)) * 43758.5453));
                
                // Probabilistic rendering based on density:
                // - Near text edges (high density): more particles
                // - Far from text (low density): fewer particles
                if (r < density * 1.2) {
                    // Keep particle visible, size based on distance from edge
                    gl_Position = vec4(position, 0, 1);
                    
                    // Make particles bigger near edges
                    float sizeFactor = mix(0.8, 1.2, density);
                    gl_PointSize = particleSize * sizeFactor;
                } else {
                    // Hide this particle (creates density variation)
                    gl_Position = vec4(2.0, 2.0, 0, 1);
                    gl_PointSize = 0.0;
                }
            }
        }
    `,Te=`
        precision mediump float;
        
        varying vec2 vPosition;
        varying float vDensity;
        uniform float time;
        uniform vec2 resolution;
        uniform float particleSize;

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
            
            // Color based on position and time
            float colorT = (vPosition.x + vPosition.y + time * 0.1) * 0.25;
            colorT = fract(colorT); // Keep in 0-1 range
            
            // Use density to make particles near edges darker/more saturated
            float densityFactor = pow(vDensity, 0.5); // Adjust the power to change the effect
            
            // Use only ocean color mode
            vec3 color = ocean(colorT);
            
            // Make particles closer to text edges darker and more opaque
            color = mix(color, color * 0.7, densityFactor); // Darker near edges
            alpha = mix(alpha * 0.6, alpha, densityFactor); // More opaque near edges
            
            gl_FragColor = vec4(color, alpha);
        }
    `;function Se(){n&&ce()}function ce(){const e=new Float32Array(o(b)*2);for(let i=0;i<o(b);i++)e[i*2]=Math.random()*2-1,e[i*2+1]=Math.random()*2-1;T();const v=n({frag:Te,vert:Ce,attributes:{position:e},uniforms:{time:()=>o(f)*o(A),resolution:({viewportWidth:i,viewportHeight:u})=>[i,u],particleSize:()=>o(M),textTexture:()=>y},count:o(b),primitive:"points",blend:{enable:!0,func:{srcRGB:"src alpha",srcAlpha:1,dstRGB:"one minus src alpha",dstAlpha:1}},depth:{enable:!1}});function S(){const i=a.clientWidth,u=a.clientHeight;(a.width!==i||a.height!==u)&&(a.width=i,a.height=u,T()),n.poll(),n.clear({color:[0,0,0,0],depth:1}),p(f,o(f)+.016),v(),p(c,Je(requestAnimationFrame(S)))}S()}function Pe(){n=Xe({canvas:a,attributes:{alpha:!0,premultipliedAlpha:!1}}),ce()}Ve(()=>{if(a)try{Pe()}catch(e){console.error("Failed to initialize regl:",e)}return()=>{cancelAnimationFrame(o(c)),n&&n.destroy()}});function de(){y&&T()}function Fe(){y&&T()}function ze(){y&&T()}var ve=at();Ue(e=>{Ke.title="Text Particle Effect"});var pe=Ge(ve);Ze(pe);var he=l(pe,2),H=l(r(he),2),O=r(H),G=l(r(O),2);w(G),s(O);var Y=l(O,2),j=r(Y),ke=r(j);s(j);var K=l(j,2);w(K),s(Y);var L=l(Y,2),$=l(r(L),2),N=r($);N.value=(N.__value="serif")==null?"":"serif";var U=l(N);U.value=(U.__value="sans-serif")==null?"":"sans-serif";var W=l(U);W.value=(W.__value="monospace")==null?"":"monospace";var J=l(W);J.value=(J.__value="Shrikhand, serif")==null?"":"Shrikhand, serif";var fe=l(J);fe.value=(fe.__value="Yeseva One, serif")==null?"":"Yeseva One, serif",s($),s(L);var Q=l(L,2),V=r(Q),De=r(V);s(V);var X=l(V,2);w(X),s(Q);var Z=l(Q,2),ee=r(Z),Me=r(ee);s(ee);var ue=l(ee,2);w(ue),s(Z);var te=l(Z,2),ie=r(te),Ae=r(ie);s(ie);var ae=l(ie,2);w(ae),s(te);var me=l(te,2),oe=r(me),qe=r(oe);s(oe);var ge=l(oe,2);w(ge),s(me),s(H);var xe=l(H,2),$e=r(xe);Qe($e,e=>a=e,()=>a),s(xe),Le(2),s(he),Ye(()=>{k(ke,`Font Size: ${o(_)??""}px`),k(De,`Particle Count: ${o(b)??""}`),k(Me,`Particle Size: ${o(M)??""}`),k(Ae,`Edge Density: ${o(q)??""}`),k(qe,`Color Speed: ${o(A)??""}`)}),C(G,()=>o(x),e=>p(x,e)),z("input",G,de),C(K,()=>o(_),e=>p(_,e)),z("input",K,Fe),tt($,()=>o(E),e=>p(E,e)),z("change",$,ze),C(X,()=>o(b),e=>p(b,e)),z("change",X,Se),C(ue,()=>o(M),e=>p(M,e)),C(ae,()=>o(q),e=>p(q,e)),z("input",ae,de),C(ge,()=>o(A),e=>p(A,e)),Ee(t,ve),je()}export{ut as component};
