import{c as ue,a as m,t as P,n as ye}from"./BbqtUwm8.js";import{i as _e}from"./8uNgZMnL.js";import{o as ee,p as ke,g as e,M as i,aP as q,aQ as xe,w as r,x as s,v as V,t as le,s as Ge,aR as p,j as B,n as ze}from"./DGhBhFf6.js";import{l as de,s as he,p as _}from"./DxC1w3kq.js";import{I as ge,_ as We}from"./BkkwsYK0.js";import{l as Ce,w as Ie,s as K}from"./4dmz90AE.js";import{i as ce}from"./BJvpYKQz.js";import{t as pe,k as Pe,f as ve}from"./C7Ndkqw2.js";import{b as N,s as ne,e as $e,i as Se}from"./DcOKtYbm.js";import{t as Le}from"./Bvena8yX.js";import{s as X}from"./cU_QayF1.js";import{b as ie}from"./BMlKmhYM.js";import{o as Ve}from"./If1F-cNU.js";function Ae(o,t){Ce(window,["resize"],()=>Ie(()=>t(window[o])))}function De(o,t){const a=de(t,["children","$$slots","$$events","$$legacy"]);ge(o,he({name:"arrow-left"},()=>a,{iconNode:[["path",{d:"m12 19-7-7 7-7"}],["path",{d:"M19 12H5"}]],children:(n,h)=>{var d=ue(),b=ee(d);X(b,t,"default",{}),m(n,d)},$$slots:{default:!0}}))}function Me(o,t){const a=de(t,["children","$$slots","$$events","$$legacy"]);ge(o,he({name:"arrow-right"},()=>a,{iconNode:[["path",{d:"M5 12h14"}],["path",{d:"m12 5 7 7-7 7"}]],children:(n,h)=>{var d=ue(),b=ee(d);X(b,t,"default",{}),m(n,d)},$$slots:{default:!0}}))}const k=[];let Z;if(typeof window<"u"){const o=()=>k.forEach(t=>t());window.addEventListener("scroll",o),window.addEventListener("resize",o)}if(typeof IntersectionObserver<"u"){const o=new Map,t=new IntersectionObserver((a,c)=>{a.forEach(n=>{const h=o.get(n.target),d=k.indexOf(h);n.isIntersecting?d===-1&&k.push(h):(h(),d!==-1&&k.splice(d,1))})},{rootMargin:"400px 0px"});Z={add:({outer:a,update:c})=>{const{top:n,bottom:h}=a.getBoundingClientRect();n<window.innerHeight&&h>0&&k.push(c),o.set(a,c),t.observe(a)},remove:({outer:a,update:c})=>{const n=k.indexOf(c);n!==-1&&k.splice(n,1),o.delete(a),t.unobserve(a)}}}else Z={add:({update:o})=>{k.push(o)},remove:({update:o})=>{const t=k.indexOf(o);t!==-1&&k.splice(t,1)}};var Be=P('<div class="scroller-helper top-helper svelte-usvca"><span class="helper-label svelte-usvca"> </span></div> <div class="scroller-helper threshold-helper svelte-usvca"><span class="helper-label svelte-usvca"> </span></div> <div class="scroller-helper bottom-helper svelte-usvca"><span class="helper-label svelte-usvca"> </span></div>',1),Oe=P("<svelte-scroller-outer><svelte-scroller-background-container><svelte-scroller-background><!></svelte-scroller-background></svelte-scroller-background-container> <svelte-scroller-foreground><!></svelte-scroller-foreground> <!></svelte-scroller-outer>",2);function Te(o,t){ke(t,!1);const a=p(),c=p(),n=p(),h=p(),d=p();let b=_(t,"top",8,0),A=_(t,"bottom",8,1),x=_(t,"threshold",8,.5),te=_(t,"query",8,"section"),v=_(t,"parallax",8,!1),ae=_(t,"showHelpers",8,!1),G=_(t,"index",12,0),O=_(t,"count",12,0),T=_(t,"offset",12,0),z=_(t,"progress",12,0),$=_(t,"visible",12,!1),W=p(),C=p(),w=p(),u,y,g=p(0),f=p(),D=p(0),oe=p(1);Ve(()=>{y=e(C).querySelectorAll(te()),O(y.length),se();const l={outer:e(W),update:se};return Z.add(l),()=>Z.remove(l)});function se(){if(!e(C))return;const l=e(W).getBoundingClientRect();u=l.left,i(oe,l.right-u);const I=e(C).getBoundingClientRect(),M=e(w).getBoundingClientRect();$(I.top<e(g)&&I.bottom>0);const F=I.bottom-I.top,Y=M.bottom-M.top,S=e(c)-e(a);z((e(a)-I.top)/(F-S)),z()<=0?(i(D,0),i(f,!1)):z()>=1?(i(D,v()?F-Y:F-S),i(f,!1)):(i(D,v()?Math.round(e(a)-z()*(Y-S)):e(a)),i(f,!0));for(let L=0;L<y.length;L++){const re=y[L],{top:j}=re.getBoundingClientRect(),H=y[L+1],Q=H?H.getBoundingClientRect().top:I.bottom;if(T((e(n)-j)/(Q-j)),Q>=e(n)){G(L);break}}}q(()=>(B(b()),e(g)),()=>{i(a,Math.round(b()*e(g)))}),q(()=>(B(A()),e(g)),()=>{i(c,Math.round(A()*e(g)))}),q(()=>(B(x()),e(g)),()=>{i(n,Math.round(x()*e(g)))}),q(()=>(B(b()),B(A()),B(x()),B(v())),()=>{b(),A(),x(),v(),se()}),q(()=>(e(f),e(D)),()=>{i(h,`
		position: ${e(f)?"fixed":"absolute"};
		top: 0;
		transform: translate(0, ${e(D)}px);
		z-index: 1;
	`)}),q(()=>(e(f),e(oe)),()=>{i(d,e(f)?`width:${e(oe)}px;`:"")}),xe(),_e();var E=Oe();N(E,"class","svelte-usvca");var R=r(E);N(R,"class","background-container svelte-usvca");var J=r(R);N(J,"class","svelte-usvca");var fe=r(J);X(fe,t,"background",{}),s(J),ie(J,l=>i(w,l),()=>e(w)),s(R);var U=V(R,2);N(U,"class","svelte-usvca");var me=r(U);X(me,t,"foreground",{}),s(U),ie(U,l=>i(C,l),()=>e(C));var be=V(U,2);{var we=l=>{var I=Be(),M=ee(I),F=r(M),Y=r(F);s(F),s(M);var S=V(M,2),L=r(S),re=r(L);s(L),s(S);var j=V(S,2),H=r(j),Q=r(H);s(H),s(j),le(()=>{ne(M,"style",`top: ${e(a)??""}px`),K(Y,`Top (${b()??""})`),ne(S,"style",`top: ${e(n)??""}px`),K(re,`Threshold (${x()??""})`),ne(j,"style",`top: ${e(c)??""}px`),K(Q,`Bottom (${A()??""})`)}),m(l,I)};ce(be,l=>{ae()&&l(we)})}s(E),ie(E,l=>i(W,l),()=>e(W)),le(()=>N(R,"style",`${e(h)??""}${e(d)??""}`)),Ae("innerHeight",l=>i(g,l)),m(o,E),Ge()}var Fe=P('<div class="arrows svelte-67ag97"><div class="left-arrow svelte-67ag97"><!></div> <div class="right-arrow svelte-67ag97"><!></div></div>'),je=ye(`<svg width="300" height="610"><rect x="0" y="0" width="300" height="250" fill="#56B6F340"></rect><rect x="95" y="130" width="110" height="20" fill="#ffffff"></rect><text x="150" y="150" text-anchor="middle" fill="#56B6F3" font-size="24" font-weight="bold">your app</text><rect x="0" y="330" width="300" height="290" fill="#FF4B8F40"></rect><rect x="10" y="450" width="280" height="20" fill="#ffffff"></rect><text x="150" y="470" text-anchor="middle" fill="#FF4B8F" font-size="24" font-weight="bold">your audience's machine</text></svg>`),qe=P('<div class="annotations"><!></div>'),Ee=P('<div slot="background" class="background-content"><div class="background-image svelte-67ag97"><img src="/images/viz-layers.jpg" alt="Base visualization layers diagram" class="base-image svelte-67ag97"> <div class="svg-overlay svelte-67ag97"><!> <!></div></div></div>'),Re=P('<section class="step svelte-67ag97"><p class="svelte-67ag97"> </p></section>'),Ue=P('<div slot="foreground" class="foreground-content svelte-67ag97"></div>'),He=P('<div class="scroller-wrapper svelte-67ag97"><!></div>');function Ne(o){let t=p(),a=p(),c=p(),n=.05,h=.5,d=.8,b=!1;const A=[{content:"We’re not going to talk too much about the layers on the ends. Instead, I want to draw your attention to the very center."},{content:"Right there, sitting quietly, is the API layer. It often gets overlooked for the cool logos in the other layers, but it can actually have a much greater impact on your visualization."},{content:"Why is that? The API acts as the 'bridge' between your audience's machine and your app. And different bridges can take you to very different places."}];var x=He(),te=r(x);Te(te,{top:n,threshold:h,bottom:d,showHelpers:b,get index(){return e(t)},set index(v){i(t,v)},get offset(){return e(a)},set offset(v){i(a,v)},get progress(){return e(c)},set progress(v){i(c,v)},$$slots:{background:(v,ae)=>{var G=Ee(),O=r(G),T=V(r(O),2),z=r(T);{var $=w=>{var u=Fe(),y=r(u),g=r(y);Me(g,{color:"#FF8B3E",size:48,strokeWidth:4}),s(y);var f=V(y,2),D=r(f);De(D,{color:"#FF8B3E",size:48,strokeWidth:4}),s(f),s(u),pe(3,u,()=>ve,()=>({duration:500})),m(w,u)};ce(z,w=>{e(t)>=1&&w($)})}var W=V(z,2);{var C=w=>{var u=qe(),y=r(u);Pe(y,()=>e(t),g=>{var f=je();m(g,f)}),s(u),pe(3,u,()=>ve,()=>({duration:300})),m(w,u)};ce(W,w=>{e(t)>=2&&w(C)})}s(T),s(O),s(G),m(v,G)},foreground:(v,ae)=>{var G=Ue();$e(G,5,()=>A,Se,(O,T,z)=>{var $=Re(),W=r($),C=r(W,!0);s(W),s($),le(()=>{Le($,"active",e(t)===z),K(C,e(T).content)}),m(O,$)}),s(G),m(v,G)}},$$legacy:!0}),s(x),m(o,x)}const Je={title:"Beyond SVG: when to use Canvas and WebGL for data visualization",date:"2025-02-20",updated:null,categories:["svg","canvas","webgl","apis","javascript"],coverImage:null,coverWidth:0,coverHeight:0,excerpt:"Do you need better performance, fanciful artistic effects, or more elements in your data visualization? Learn how and when to use Canvas and WebGL to take advantage of their possibilities"};var Ye=P(`<span class="note">I gave this presentation to the Portland Data Visualization Society in 2023. Even though it's a couple years old it's still a good introduction to the different graphics APIs in use today. In coming posts I'll address the evolving landscape of web graphics including WebGPU, optimizing for mobile, and enhanced accessibility integration for Canvas and WebGL/WebGPU</span> <p>Ever tried to animate thousands of data points and watched your computer start to steam? Or maybe you’ve dreamed of encoding your data in seas of glowing point clouds, only to have it look more like a pixelated sludge?</p> <p>You’re not alone. Most data visualizations on the web run on SVG, and for good reason; it’s relatively straightforward, has built in ways to make it accessible, and it’s reliable.</p> <p>But sometimes, when you’re working with SVG, you start to come up against barriers. Perhaps your graphics are taking <em>forever</em> to load. Maybe you need to display more data points to <a href="https://nightingaledvs.com/unfair-comparisons-how-visualizing-social-inequality-can-make-it-worse/" rel="noopener noreferrer" target="_blank">communicate concepts without introducing biases</a>. Or, perhaps, you just really really want your bar chart to apparate in a three-dimensional sparkly fog.</p> <div class="article-image"><img src="/images/smoke.jpg" alt="Pastel-colored whispy smoke trails with sparkles and butterflies against a dark background" width="400px"></div> <p>Whatever it is, sometimes, SVG just isn’t the answer.</p> <p>That’s where Canvas and WebGL come in—two more Javascript graphics APIs.</p> <h2>Different APIs make different visualizations possible</h2> <p>From the devices your audience use to the libraries you write your code with, every appearance of a visualization is unique. Every time a visualization renders on screen, is has to go through many layers that come together for the final experience:</p> <!> <h2>Two differences, three bridges</h2> <p>There are two fundamental differences between SVG, Canvas, and WebGL that determine what your visualization will (and won’t) be able to do:</p> <p>The first major difference comes down to <strong>how these APIs interact with the Document Object Model</strong> <a href="https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Using_the_Document_Object_Model" rel="noopener noreferrer" target="_blank">(DOM)</a> - the structure browsers use to organize webpage elements</p> <p>With SVG, every circle, line, and text label gets its own element cozily tucked into the DOM tree. This makes it easy to select and manipulate specific elements, attach event listeners, and handle accessibility. But all those elements can slow things down when you have too many.</p> <div class="article-image"><img src="/images/vennDOM.png" alt="Venn diagram shows SVG, Canvas, and WebGL as different pastel colored circles. 'lots of individual elements' shows up in the SVG section, whereas 'one &lt;canvas> element that gets re-painted over and over' shows up in the overlapping Canvas &amp; WebGL section. An arrow points to a screenshot showing lots of elements on the DOM for SVG, and an arrow points to a screenshot showing a single &lt;canvas> element on the DOM for the overlapping Canvas &amp; WebGL section" width="700"></div> <p>Canvas and WebGL, on the other hand, work more like a painter’s canvas — everything gets flattened onto a single element (conveniently, a <code>&lt;canvas&gt;</code>). Need to change something? You have to repaint the entire scene. It’s less organized, but more efficient for complex visualizations.</p> <p>The second key difference is <strong>which part of your computer’s hardware does the heavy lifting</strong>:</p> <p>SVG and Canvas run on the CPU — the general-purpose processor that handles most computing tasks. It’s like having one very smart worker who has to handle each task one at a time.</p> <div class="article-image"><img src="/images/vennGPU.png" alt="Venn diagram shows SVG, Canvas, and WebGL as different pastel colored circles. 'runs on the CPU (slow)' shows up in the overlapping SVG &amp; Canvas section, whereas 'runs on the GPU (fast)' shows up in the WebGL section. An arrow points to a drawing showing one processor for the overlapping SVG &amp; Canvas section, and an arrow points to a drawing showing many processors in parallel for the WebGL section" width="700"></div> <p>WebGL, meanwhile, taps into the GPU — the specialized processor that was designed specifically for rendering graphics. It’s like having a team of hundreds who can handle many simpler tasks in parallel.</p> <p>These two differences combined create three distinct realms of visualization possibilities, each with its own sweet spot.</p> <h2>What can each API actually do?</h2> <ul><li><p>2D vs. 3D</p> <ul><li>SVG: <a href="https://googletrends.github.io/asne/?view=0" rel="noopener noreferrer" target="_blank">2D</a></li> <li>Canvas: <a href="https://codepen.io/kennethcachia/pen/nPbyoR" rel="noopener noreferrer" target="_blank">2D</a></li> <li>WebGL: <a href="https://www.nytimes.com/interactive/2017/05/18/climate/antarctica-ice-melt-climate-change.html" rel="noopener noreferrer" target="_blank">2D</a> & <a href="https://observablehq.com/@bronna/parametric-seashell" rel="noopener noreferrer" target="_blank">3D</a></li></ul></li> <li><p>The number of elements that can be animated at any one time</p> <ul><li>SVG: <a href="https://observablehq.com/@dbridges/visualizing-seasonal-daylight" rel="noopener noreferrer" target="_blank">up to hundreds</a></li> <li>Canvas: <a href="https://www.spiegel.de/wissenschaft/zirkel-der-genies-a-90c50289-30ac-4a4b-bc49-348676ce6687" rel="noopener noreferrer" target="_blank">up to thousands</a></li> <li>WebGL: <a href="https://www.nature.com/immersive/d41586-019-03165-4/index.html" rel="noopener noreferrer" target="_blank">millions</a></li></ul></li> <li><p>The complexity of artistic effects (gradients, transparency, shadows, textures, etc.)</p> <ul><li>SVG: <a href="https://benjerry.heshlindsdataviz.com/" rel="noopener noreferrer" target="_blank">gradients & transparency</a></li> <li>Canvas: <a href="https://openprocessing.org/sketch/2337990/fullscreen" rel="noopener noreferrer" target="_blank">+ shadows, textures</a></li> <li>WebGL: <a href="https://edankwan.com/experiments/the-spirit/" rel="noopener noreferrer" target="_blank">+ in 3D</a></li></ul></li></ul> <h2>So, which API should I use?</h2> <p>Once you’re clear on what your visualization is going to be, you’ll be able to figure out what will be the best tool to use. To make it easer to decide for your case, here’s a table summarizing everything we’ve covered. Note: these aren’t aboslutes, they’re just the relative strengths and weaknesses between the three APIs. For example, you can get Canvas to handle accessibility features, it’s just something you have to build on your own:</p> <div class="article-image"><img src="/images/svg-canvas-webgl-compare.png" alt="Table summarizing and comparing the features previously stated about SVG, Canvas, and WebGL" width="800"></div> <h2>Where to go from here</h2> <p>If you’re itching to venture beyond the familiar territory of SVG, stay tuned for upcoming posts on:</p> <h3>The basics of using Canvas and WebGL</h3> <p>How to set up each API and where their approaches diverge</p> <h3>Create a morphing data visualization using Canvas</h3> <p>We’ll build a visualization that transitions data points from a map shape to a bar chart</p> <h3>Create a 3D network graph using WebGL</h3> <p>An easy(ish) way to create a stunning, interactive 3D network visualization with actual glow effects</p> <p>Let me know which API you’re most excited to learn about, or if you have questions about choosing between them for your visualization!</p>`,1);function ct(o,t){const a=de(t,["children","$$slots","$$events","$$legacy"]);We(o,he(()=>a,Je,{children:(c,n)=>{var h=Ye(),d=V(ee(h),18);Ne(d),ze(50),m(c,h)},$$slots:{default:!0}}))}export{ct as default,Je as metadata};
