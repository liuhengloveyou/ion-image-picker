/*! Built with http://stenciljs.com */
((w,d,x,n,h,c,r)=>{((s)=>{s&&(r=s.getAttribute('data-resources-url'))})(d.querySelector("script[data-namespace='ionimagepicker']"));
function e(e,t){return"sc-"+e.t+(t&&t!==l?"-"+t:"")}function t(e,t){return e+(t?"-h":"-s")}function o(e,t){let n,o,l=null,s=!1,i=!1,a=arguments.length;for(;a-- >2;)j.push(arguments[a]);for(;j.length>0;){let t=j.pop();if(t&&void 0!==t.pop)for(a=t.length;a--;)j.push(t[a]);else"boolean"==typeof t&&(t=null),(i="function"!=typeof e)&&(null==t?t="":"number"==typeof t?t=String(t):"string"!=typeof t&&(i=!1)),i&&s?l[l.length-1].vtext+=t:null===l?l=[i?{vtext:t}:t]:l.push(i?{vtext:t}:t),s=i}if(null!=t){if(t.className&&(t.class=t.className),"object"==typeof t.class){for(a in t.class)t.class[a]&&j.push(a);t.class=j.join(" "),j.length=0}null!=t.key&&(n=t.key),null!=t.name&&(o=t.name)}return"function"==typeof e?e(t,l||[],C):{vtag:e,vchildren:l,vtext:void 0,vattrs:t,vkey:n,vname:o,o:void 0,l:!1}}const l="$",s={},i={enter:13,escape:27,space:32,tab:9,left:37,up:38,right:39,down:40},a=(t,n,o,s)=>{let i=o.t+l,a=o[i];if((2===o.s||1===o.s&&!t.u.i)&&(s["s-sc"]=a?e(o,s.mode):e(o)),a){let e=n.p.head;if(n.i)if(1===o.s)e=s.shadowRoot;else{const t=s.getRootNode();t.host&&(e=t)}let l=t.m.get(e);if(l||t.m.set(e,l={}),!l[i]){let t;{t=a.content.cloneNode(!0),l[i]=!0;const o=e.querySelectorAll("[data-styles]");n.v(e,t,o.length&&o[o.length-1].nextSibling||e.firstChild)}}}},f=e=>null!=e,u=e=>e.toLowerCase(),p=()=>{},b="http://www.w3.org/1999/xlink",m=(e,t,n,o,l,s)=>{if("class"!==n||s)if("style"===n){for(const e in o)l&&null!=l[e]||(/-/.test(e)?t.style.removeProperty(e):t.style[e]="");for(const e in l)o&&l[e]===o[e]||(/-/.test(e)?t.style.setProperty(e,l[e]):t.style[e]=l[e])}else if("o"!==n[0]||"n"!==n[1]||!/[A-Z]/.test(n[2])||n in t)if("list"!==n&&"type"!==n&&!s&&(n in t||-1!==["object","function"].indexOf(typeof l)&&null!==l)){const o=e.M(t);o&&o.g&&o.g[n]?y(t,n,l):"ref"!==n&&(y(t,n,null==l?"":l),null!=l&&!1!==l||e.u.k(t,n))}else null!=l&&"key"!==n?((e,t,n,o="boolean"==typeof n,l)=>{l=t!==(t=t.replace(/^xlink\:?/,"")),null==n||o&&(!n||"false"===n)?l?e.removeAttributeNS(b,u(t)):e.removeAttribute(t):"function"!=typeof n&&(n=o?"":n.toString(),l?e.setAttributeNS(b,u(t),n):e.setAttribute(t,n))})(t,n,l):(s||e.u.j(t,n)&&(null==l||!1===l))&&e.u.k(t,n);else n=u(n)in t?u(n.substring(2)):u(n[2])+n.substring(3),l?l!==o&&e.u.C(t,n,l,0):e.u.W(t,n,0);else if(o!==l){const e=v(o),n=v(l),s=e.filter(e=>!n.includes(e)),i=v(t.className).filter(e=>!s.includes(e)),a=n.filter(t=>!e.includes(t)&&!i.includes(t));i.push(...a),t.className=i.join(" ")}},v=e=>null==e||""===e?[]:e.trim().split(/\s+/),y=(e,t,n)=>{try{e[t]=n}catch(e){}},M=(e,t,n,o,l)=>{const i=11===n.o.nodeType&&n.o.host?n.o.host:n.o,a=t&&t.vattrs||s,r=n.vattrs||s;for(l in a)r&&null!=r[l]||null==a[l]||m(e,i,l,a[l],void 0,o,n.l);for(l in r)l in a&&r[l]===("value"===l||"checked"===l?i[l]:a[l])||m(e,i,l,a[l],r[l],o,n.l)};let $=!1;const g=(e,t)=>{e&&(e.vattrs&&e.vattrs.ref&&e.vattrs.ref(t?null:e.o),e.vchildren&&e.vchildren.forEach(e=>{g(e,t)}))},k=(e,t)=>{{let n=0,o=!1;const l=()=>t.performance.now(),s=!1!==e.asyncQueue,i=Promise.resolve(),a=[],r=[],c=[],f=[],u=t=>n=>{t.push(n),o||(o=!0,e.raf(b))},p=e=>{for(let t=0;t<e.length;t++)try{e[t](l())}catch(e){console.error(e)}e.length=0},d=(e,t)=>{let n,o=0;for(;o<e.length&&(n=l())<t;)try{e[o++](n)}catch(e){console.error(e)}o===e.length?e.length=0:0!==o&&e.splice(0,o)},b=()=>{n++,p(r);const t=s?l()+7*Math.ceil(n*(1/22)):Infinity;d(c,t),d(f,t),c.length>0&&(f.push(...c),c.length=0),(o=r.length+c.length+f.length>0)?e.raf(b):n=0};return e.raf||(e.raf=t.requestAnimationFrame.bind(t)),{tick(e){a.push(e),1===a.length&&i.then(()=>p(a))},read:u(r),write:u(c)}}},j=[],C={forEach:(e,t)=>e.forEach(t),map:(e,t)=>e.map(t)},W=(e,t,n)=>{const[o,l,,s,i,a]=e,r={color:{N:"color"}};if(s)for(t=0;t<s.length;t++)r[(n=s[t])[0]]={O:n[1],S:!!n[2],N:"string"==typeof n[3]?n[3]:n[3]?n[0]:0,A:n[4]};return{t:o,T:l,g:Object.assign({},r),s:i,R:a?a.map(N):void 0}},N=e=>({L:e[0],D:e[1],q:!!e[2],B:!!e[3],I:!!e[4]}),O=(e,t)=>f(t)&&"object"!=typeof t&&"function"!=typeof t?e===Boolean||4===e?"false"!==t&&(""===t||!!t):e===Number||8===e?parseFloat(t):e===String||2===e?t.toString():t:t,S=(e,t,n)=>{e.P.add(t),e.F.has(t)||(e.F.set(t,!0),e.H?e.queue.write(()=>E(e,t,n)):e.queue.tick(()=>E(e,t,n)))},E=async(e,n,l,s,i,a)=>{if(e.F.delete(n),!e.U.has(n)){if(!(i=e.Z.get(n))){if((a=e.G.get(n))&&!a["s-rn"])return void(a["s-rc"]=a["s-rc"]||[]).push(()=>{E(e,n,l)});if(i=q(e,n,e.J.get(n),l))try{i.componentWillLoad&&await i.componentWillLoad()}catch(t){e.K(t,3,n)}}((e,n,l,s)=>{try{const i=n.V.host,a=n.V.encapsulation,r="shadow"===a&&e.u.i;let c,f=l;if(r&&(f=l.shadowRoot),!l["s-rn"]){e.X(e,e.u,n,l);const o=l["s-sc"];o&&(e.u.Y(l,t(o,!0)),"scoped"===a&&e.u.Y(l,t(o)))}if(s.render||s.hostData||i||c){e._=!0;const t=s.render&&s.render();let n;e._=!1;const i=o(null,n,t),c=e.ee.get(l)||{};c.o=f,e.ee.set(l,e.render(l,c,i,r,a))}l["s-rn"]=!0,l["s-rc"]&&(l["s-rc"].forEach(e=>e()),l["s-rc"]=null)}catch(t){e._=!1,e.K(t,8,l,!0)}})(e,e.M(n),n,i),n["s-init"]()}},A=(e,t,n,o,l,s,i,a,r)=>{if(t.type){const c=e.te.get(n);!t.attr||void 0!==c[l]&&""!==c[l]||(a=s&&s.ne)&&f(r=a[t.attr])&&(c[l]=O(t.type,r)),n.hasOwnProperty(l)&&(void 0===c[l]&&(c[l]=O(t.type,n[l])),"mode"!==l&&delete n[l]),o.hasOwnProperty(l)&&void 0===c[l]&&(c[l]=o[l]),t.watchCallbacks&&(c[D+l]=t.watchCallbacks.slice()),L(o,l,function c(t){return(t=e.te.get(e.oe.get(this)))&&t[l]},function u(n,o){(o=e.oe.get(this))&&t.mutable&&T(e,o,l,n,i)})}else t.method&&R(n,l,o[l].bind(o))},T=(e,t,n,o,l,s,i)=>{(i=e.te.get(t))||e.te.set(t,i={});const a=i[n];if(o!==a&&(i[n]=o,s=e.Z.get(t))){{const e=i[D+n];if(e)for(let t=0;t<e.length;t++)try{s[e[t]].call(s,o,a,n)}catch(e){console.error(e)}}!e._&&t["s-rn"]&&S(e,t,l)}},R=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,value:n})},L=(e,t,n,o)=>{Object.defineProperty(e,t,{configurable:!0,get:n,set:o})},D="wc-",q=(e,t,n,o,l,s)=>{try{l=new(s=e.M(t).V),((e,t,n,o,l,s)=>{e.oe.set(o,n),e.te.has(n)||e.te.set(n,{}),Object.entries(Object.assign({color:{type:String}},t.properties,{mode:{type:String}})).forEach(([t,i])=>{A(e,i,n,o,t,l,s)})})(e,s,t,l,n,o),function i(e,t,n){if(t){const o=e.oe.get(n);t.forEach(t=>{n[t.method]={emit:n=>e.le(o,t.name,{bubbles:t.bubbles,composed:t.composed,cancelable:t.cancelable,detail:n})}})}}(e,s.events,l)}catch(n){l={},e.K(n,7,t,!0)}return e.Z.set(t,l),l},B=(e,t,n,o,l,s)=>{if(e.P.delete(t),(l=e.G.get(t))&&((o=l["s-ld"])&&((n=o.indexOf(t))>-1&&o.splice(n,1),o.length||l["s-init"]&&l["s-init"]()),e.G.delete(t)),e.se.length&&!e.P.size)for(;s=e.se.shift();)s()},I=(e,t,n,o)=>{t.forEach(([t,l])=>{const s=l.O;3&s?L(n,t,function n(){return(e.te.get(this)||{})[t]},function n(s){T(e,this,t,O(l.A,s),o)}):32===s&&R(n,t,p)})},P=(e,t,n,o,l)=>{if(n.connectedCallback=function(){((e,t,n)=>{e.U.delete(n),e.ie.has(n)||(e.ae=!0,e.P.add(n),e.ie.set(n,!0),((e,t,n)=>{for(n=t;n=e.u.re(n);)if(e.ce(n)){e.fe.has(t)||(e.G.set(t,n),(n["s-ld"]=n["s-ld"]||[]).push(t));break}})(e,n),e.queue.tick(()=>{e.J.set(n,((e,t,n,o,l)=>(n.mode||(n.mode=e.ue(n)),n["s-cr"]||e.pe(n,"ssrv")||e.i&&1===t.s||(n["s-cr"]=e.de(""),n["s-cr"]["s-cn"]=!0,e.v(n,n["s-cr"],e.be(n)[0])),1===t.s&&e.i&&!n.shadowRoot&&e.me(n,{mode:"open"}),o={ne:{}},t.g&&Object.keys(t.g).forEach(s=>{(l=t.g[s].N)&&(o.ne[l]=e.pe(n,l))}),o))(e.u,t,n)),e.ve(t,n)}))})(e,t,this)},n.disconnectedCallback=function(){((e,t)=>{!e.he&&((e,t)=>{for(;t;){if(!e.ye(t))return 9!==e.we(t);t=e.ye(t)}})(e.u,t)&&(e.U.set(t,!0),B(e,t),g(e.ee.get(t),!0),e.u.W(t),e.Me.delete(t),[e.G,e.$e,e.J].forEach(e=>e.delete(t)))})(e,this)},n["s-init"]=function(){((e,t,n,o,l,s)=>{if(e.Z.get(t)&&!e.U.has(t)&&(!t["s-ld"]||!t["s-ld"].length)){e.fe.set(t,!0),e.ge.has(t)||(e.ge.set(t,!0),t["s-ld"]=void 0,e.u.Y(t,n));try{g(e.ee.get(t)),(s=e.$e.get(t))&&(s.forEach(e=>e(t)),e.$e.delete(t))}catch(n){e.K(n,4,t)}B(e,t)}})(e,this,o)},n.forceUpdate=function(){S(e,this,l)},t.g){const o=Object.entries(t.g);{let e={};o.forEach(([t,{N:n}])=>{n&&(e[n]=t)}),e=Object.assign({},e),n.attributeChangedCallback=function(t,n,o){(function l(e,t,n,o){const l=e[u(n)];l&&(t[l]=(null!==o||"boolean"!=typeof t[l])&&o)})(e,this,t,o)}}I(e,o,n,l)}};((e,t,n,s,r,c,p)=>{const d=n.performance,b={html:{}},m=n[e]=n[e]||{},v=((e,t,n)=>{const o=new WeakMap,l={p:n,i:!!n.documentElement.attachShadow,ke:!1,we:e=>e.nodeType,je:e=>n.createElement(e),Ce:(e,t)=>n.createElementNS(e,t),de:e=>n.createTextNode(e),We:e=>n.createComment(e),v:(e,t,n)=>e.insertBefore(t,n),Ne:e=>e.remove(),Oe:(e,t)=>e.appendChild(t),Y:(e,t)=>{e.classList.add(t)},be:e=>e.childNodes,ye:e=>e.parentNode,Se:e=>e.nextSibling,Ee:e=>e.previousSibling,xe:e=>u(e.nodeName),Ae:e=>e.textContent,Te:(e,t)=>e.textContent=t,pe:(e,t)=>e.getAttribute(t),Re:(e,t,n)=>e.setAttribute(t,n),k:(e,t)=>e.removeAttribute(t),j:(e,t)=>e.hasAttribute(t),ue:t=>t.getAttribute("mode")||(e.Context||{}).mode,Le:(e,o)=>"child"===o?e.firstElementChild:"parent"===o?l.re(e):"body"===o?n.body:"document"===o?n:"window"===o?t:e,C:(t,n,s,a,r,c,f,u,p,d)=>{let b=t,m=s,v=o.get(t);d=n+a,v&&v[d]&&v[d](),"string"==typeof f?b=l.Le(t,f):"object"==typeof f?b=f:(p=n.split(":")).length>1&&(b=l.Le(t,p[0]),n=p[1]),b&&((p=n.split(".")).length>1&&(n=p[0],m=(e=>{e.keyCode===i[p[1]]&&s(e)})),u=l.ke?{capture:!!r,passive:!!c}:!!r,e.ael(b,n,m,u),v||o.set(t,v={}),v[d]=(()=>{b&&e.rel(b,n,m,u),v[d]=null}))},W:(e,t,n,l)=>{(l=o.get(e))&&(t?l[t+n]&&l[t+n]():Object.keys(l).forEach(e=>{l[e]&&l[e]()}))},De:(e,n,o,l)=>(l=new t.CustomEvent(n,o),e&&e.dispatchEvent(l),l),re:(e,t)=>(t=l.ye(e))&&11===l.we(t)?t.host:t,qe:(e,t,n,o)=>e.setAttributeNS(t,n,o),me:(e,t)=>e.attachShadow(t)};e.ael||(e.ael=((e,t,n,o)=>e.addEventListener(t,n,o)),e.rel=((e,t,n,o)=>e.removeEventListener(t,n,o)));try{t.addEventListener("e",null,Object.defineProperty({},"passive",{get:()=>l.ke=!0}))}catch(e){}return l})(m,n,s),h=v.p.documentElement,y=n["s-defined"]=n["s-defined"]||{},w=(e,t)=>{n.customElements.get(e.t)||(P(g,b[e.t]=e,t.prototype,c,d),t.observedAttributes=Object.values(e.g).map(e=>e.N).filter(e=>!!e),n.customElements.define(e.t,t))},g={u:v,Be:w,M:e=>b[v.xe(e)],Ie:e=>t[e],isClient:!0,ce:e=>!(!y[v.xe(e)]&&!g.M(e)),K:(e,t,n)=>console.error(e,t,n&&n.tagName),queue:t.queue=k(m,n),ve:(e,t)=>{{const n=e.T,o=!v.i;let s=r+n+(o?".sc":"")+".entry.js";import(s).then(n=>{try{e.V=n[(e=>u(e).split("-").map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(""))(e.t)],function o(e,t,n,s,i){if(s){const n=t.t+(i||l);if(!t[n]){const o=e.je("template");t[n]=o,o.innerHTML=`<style>${s}</style>`,e.Oe(e.p.head,o)}}}(v,e,e.s,e.V.style,e.V.styleMode),S(g,t,d)}catch(t){console.error(t),e.V=class{}}},e=>console.error(e,s))}},_:!1,H:!1,he:!1,X:a,G:new WeakMap,m:new WeakMap,ie:new WeakMap,Me:new WeakMap,ge:new WeakMap,fe:new WeakMap,oe:new WeakMap,J:new WeakMap,Z:new WeakMap,U:new WeakMap,F:new WeakMap,$e:new WeakMap,Pe:new WeakMap,ee:new WeakMap,te:new WeakMap,P:new Set,se:[]};return t.isServer=t.isPrerender=!(t.isClient=!0),t.window=n,t.location=n.location,t.document=s,t.resourcesUrl=t.publicPath=r,g.le=t.emit=((e,n,o)=>v.De(e,t.eventNameFn?t.eventNameFn(n):n,o)),m.h=o,m.Context=t,m.onReady=(()=>new Promise(e=>g.queue.write(()=>g.P.size?g.se.push(e):e()))),g.render=((e,t)=>{let n,o,l,s,i,a,r;const c=(l,p,d,b,m,v,h,y,w)=>{if(y=p.vchildren[d],n||(s=!0,"slot"===y.vtag&&(o&&t.Y(b,o+"-s"),y.vchildren?y.Fe=!0:y.He=!0)),f(y.vtext))y.o=t.de(y.vtext);else if(y.He)y.o=t.de("");else{if(v=y.o=$||"svg"===y.vtag?t.Ce("http://www.w3.org/2000/svg",y.vtag):t.je(y.Fe?"slot-fb":y.vtag),e.ce(v)&&e.fe.delete(r),$="svg"===y.vtag||"foreignObject"!==y.vtag&&$,M(e,null,y,$),f(o)&&v["s-si"]!==o&&t.Y(v,v["s-si"]=o),y.vchildren)for(m=0;m<y.vchildren.length;++m)(h=c(l,y,m,v))&&t.Oe(v,h);"svg"===y.vtag&&($=!1)}return y.o["s-hn"]=a,(y.Fe||y.He)&&(y.o["s-sr"]=!0,y.o["s-cr"]=i,y.o["s-sn"]=y.vname||"",(w=l&&l.vchildren&&l.vchildren[d])&&w.vtag===y.vtag&&l.o&&u(l.o)),y.o},u=(n,o,l,i)=>{e.he=!0;const r=t.be(n);for(l=r.length-1;l>=0;l--)(i=r[l])["s-hn"]!==a&&i["s-ol"]&&(t.Ne(i),t.v(v(i),i,m(i)),t.Ne(i["s-ol"]),i["s-ol"]=null,s=!0),o&&u(i,o);e.he=!1},p=(e,n,o,l,s,i,r,u)=>{const p=e["s-cr"];for((r=p&&t.ye(p)||e).shadowRoot&&t.xe(r)===a&&(r=r.shadowRoot);s<=i;++s)l[s]&&(u=f(l[s].vtext)?t.de(l[s].vtext):c(null,o,s,e))&&(l[s].o=u,t.v(r,u,m(n)))},d=(e,n,o,s)=>{for(;n<=o;++n)f(e[n])&&(s=e[n].o,l=!0,s["s-ol"]?t.Ne(s["s-ol"]):u(s,!0),t.Ne(s))},b=(e,t)=>e.vtag===t.vtag&&e.vkey===t.vkey&&("slot"!==e.vtag||e.vname===t.vname),m=e=>e&&e["s-ol"]?e["s-ol"]:e,v=e=>t.ye(e["s-ol"]?e["s-ol"]:e),h=(n,o,l)=>{const s=o.o=n.o,i=n.vchildren,a=o.vchildren;$=o.o&&f(t.re(o.o))&&void 0!==o.o.ownerSVGElement,$="svg"===o.vtag||"foreignObject"!==o.vtag&&$,f(o.vtext)?(l=s["s-cr"])?t.Te(t.ye(l),o.vtext):n.vtext!==o.vtext&&t.Te(s,o.vtext):("slot"!==o.vtag&&M(e,n,o,$),f(i)&&f(a)?((e,n,o,l,s,i,a,r)=>{let y=0,w=0,M=n.length-1,$=n[0],g=n[M],k=l.length-1,j=l[0],C=l[k];for(;y<=M&&w<=k;)if(null==$)$=n[++y];else if(null==g)g=n[--M];else if(null==j)j=l[++w];else if(null==C)C=l[--k];else if(b($,j))h($,j),$=n[++y],j=l[++w];else if(b(g,C))h(g,C),g=n[--M],C=l[--k];else if(b($,C))"slot"!==$.vtag&&"slot"!==C.vtag||u(t.ye($.o)),h($,C),t.v(e,$.o,t.Se(g.o)),$=n[++y],C=l[--k];else if(b(g,j))"slot"!==$.vtag&&"slot"!==C.vtag||u(t.ye(g.o)),h(g,j),t.v(e,g.o,$.o),g=n[--M],j=l[++w];else{for(s=null,i=y;i<=M;++i)if(n[i]&&f(n[i].vkey)&&n[i].vkey===j.vkey){s=i;break}f(s)?((r=n[s]).vtag!==j.vtag?a=c(n&&n[w],o,s,e):(h(r,j),n[s]=void 0,a=r.o),j=l[++w]):(a=c(n&&n[w],o,w,e),j=l[++w]),a&&t.v(v($.o),a,m($.o))}y>M?p(e,null==l[k+1]?null:l[k+1].o,o,l,w,k):w>k&&d(n,y,M)})(s,i,o,a):f(a)?(f(n.vtext)&&t.Te(s,""),p(s,null,o,a,0,a.length-1)):f(i)&&d(i,0,i.length-1)),$&&"svg"===o.vtag&&($=!1)},y=(e,n,o,l,s,i,a,r)=>{for(l=0,s=(o=t.be(e)).length;l<s;l++)if(n=o[l],1===t.we(n)){if(n["s-sr"])for(a=n["s-sn"],n.hidden=!1,i=0;i<s;i++)if(o[i]["s-hn"]!==n["s-hn"])if(r=t.we(o[i]),""!==a){if(1===r&&a===t.pe(o[i],"slot")){n.hidden=!0;break}}else if(1===r||3===r&&""!==t.Ae(o[i]).trim()){n.hidden=!0;break}y(n)}},w=[],g=(e,n,o,s,i,a,r,c,f,u)=>{for(i=0,a=(n=t.be(e)).length;i<a;i++){if((o=n[i])["s-sr"]&&(s=o["s-cr"]))for(c=t.be(t.ye(s)),f=o["s-sn"],r=c.length-1;r>=0;r--)(s=c[r])["s-cn"]||s["s-nr"]||s["s-hn"]===o["s-hn"]||((3===(u=t.we(s))||8===u)&&""===f||1===u&&null===t.pe(s,"slot")&&""===f||1===u&&t.pe(s,"slot")===f)&&(w.some(e=>e.Qe===s)||(l=!0,s["s-sn"]=f,w.push({Ue:o,Qe:s})));1===t.we(o)&&g(o)}};return(c,f,u,p,d,b,m,v,M,$,k,j)=>{if(r=c,a=t.xe(r),i=r["s-cr"],n=p,o=r["s-sc"],s=l=!1,h(f,u),s){for(g(u.o),m=0;m<w.length;m++)(v=w[m]).Qe["s-ol"]||((M=t.de(""))["s-nr"]=v.Qe,t.v(t.ye(v.Qe),v.Qe["s-ol"]=M,v.Qe));for(e.he=!0,m=0;m<w.length;m++){for(v=w[m],k=t.ye(v.Ue),j=t.Se(v.Ue),M=v.Qe["s-ol"];M=t.Ee(M);)if(($=M["s-nr"])&&$&&$["s-sn"]===v.Qe["s-sn"]&&k===t.ye($)&&($=t.Se($))&&$&&!$["s-nr"]){j=$;break}(!j&&k!==t.ye(v.Qe)||t.Se(v.Qe)!==j)&&v.Qe!==j&&(t.Ne(v.Qe),t.v(k,v.Qe,j))}e.he=!1}return l&&y(u.o),w.length=0,u}})(g,v),h["s-ld"]=[],h["s-rn"]=!0,h["s-init"]=(()=>{g.fe.set(h,m.loaded=g.H=!0),v.De(n,"appload",{detail:{namespace:e}})}),p.map(W).forEach(e=>w(e,class extends HTMLElement{})),g.ae||h["s-init"](),((e,t,n,o,l,s)=>{if(t.componentOnReady=((t,n)=>{if(!t.nodeName.includes("-"))return n(null),!1;const o=e.M(t);if(o)if(e.fe.has(t))n(t);else{const o=e.$e.get(t)||[];o.push(n),e.$e.set(t,o)}return!!o}),l){for(s=l.length-1;s>=0;s--)t.componentOnReady(l[s][0],l[s][1])&&l.splice(s,1);for(s=0;s<o.length;s++)if(!n[o[s]].componentOnReady)return;for(s=0;s<l.length;s++)l[s][1](null);l.length=0}})(g,m,n,n["s-apps"],n["s-cr"]),m.initialized=!0,g})(n,x,w,d,r,h,c);
})(window,document,{},"ionimagepicker","hydrated",[["ion-image-picker","pm1jukjj",1,[["disabled",1,0,1,4],["max",1,0,1,8],["open",32],["readonly",1,0,1,4],["value",2]],1]]);