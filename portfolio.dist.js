var y0=Object.create;var Aa=Object.defineProperty;var b0=Object.getOwnPropertyDescriptor;var x0=Object.getOwnPropertyNames;var S0=Object.getPrototypeOf,M0=Object.prototype.hasOwnProperty;var E0=(r,e,t)=>e in r?Aa(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var Yt=(r,e)=>()=>(r&&(e=r(r=0)),e);var w0=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports),pf=(r,e)=>{for(var t in e)Aa(r,t,{get:e[t],enumerable:!0})},T0=(r,e,t,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let n of x0(e))!M0.call(r,n)&&n!==t&&Aa(r,n,{get:()=>e[n],enumerable:!(i=b0(e,n))||i.enumerable});return r};var A0=(r,e,t)=>(t=r!=null?y0(S0(r)):{},T0(e||!r||!r.__esModule?Aa(t,"default",{value:r,enumerable:!0}):t,r));var lt=(r,e,t)=>(E0(r,typeof e!="symbol"?e+"":e,t),t),bh=(r,e,t)=>{if(!e.has(r))throw TypeError("Cannot "+t)};var jt=(r,e,t)=>(bh(r,e,"read from private field"),t?t.call(r):e.get(r)),wt=(r,e,t)=>{if(e.has(r))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(r):e.set(r,t)},Zt=(r,e,t,i)=>(bh(r,e,"write to private field"),i?i.call(r,t):e.set(r,t),t);var ct=(r,e,t)=>(bh(r,e,"access private method"),t);var mf=w0((xh,Sh)=>{(function(r,e){typeof xh=="object"&&typeof Sh!="undefined"?Sh.exports=e():typeof define=="function"&&define.amd?define(e):(r||self).barba=e()})(xh,function(){function r(U,F){for(var w=0;w<F.length;w++){var v=F[w];v.enumerable=v.enumerable||!1,v.configurable=!0,"value"in v&&(v.writable=!0),Object.defineProperty(U,typeof(y=function(R,N){if(typeof R!="object"||R===null)return R;var k=R[Symbol.toPrimitive];if(k!==void 0){var L=k.call(R,"string");if(typeof L!="object")return L;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(R)}(v.key))=="symbol"?y:String(y),v)}var y}function e(U,F,w){return F&&r(U.prototype,F),w&&r(U,w),Object.defineProperty(U,"prototype",{writable:!1}),U}function t(){return t=Object.assign?Object.assign.bind():function(U){for(var F=1;F<arguments.length;F++){var w=arguments[F];for(var v in w)Object.prototype.hasOwnProperty.call(w,v)&&(U[v]=w[v])}return U},t.apply(this,arguments)}function i(U,F){U.prototype=Object.create(F.prototype),U.prototype.constructor=U,s(U,F)}function n(U){return n=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(F){return F.__proto__||Object.getPrototypeOf(F)},n(U)}function s(U,F){return s=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(w,v){return w.__proto__=v,w},s(U,F)}function o(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function a(U,F,w){return a=o()?Reflect.construct.bind():function(v,y,R){var N=[null];N.push.apply(N,y);var k=new(Function.bind.apply(v,N));return R&&s(k,R.prototype),k},a.apply(null,arguments)}function l(U){var F=typeof Map=="function"?new Map:void 0;return l=function(w){if(w===null||Function.toString.call(w).indexOf("[native code]")===-1)return w;if(typeof w!="function")throw new TypeError("Super expression must either be null or a function");if(F!==void 0){if(F.has(w))return F.get(w);F.set(w,v)}function v(){return a(w,arguments,n(this).constructor)}return v.prototype=Object.create(w.prototype,{constructor:{value:v,enumerable:!1,writable:!0,configurable:!0}}),s(v,w)},l(U)}function c(U){if(U===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return U}var h,u=function(){this.before=void 0,this.beforeLeave=void 0,this.leave=void 0,this.afterLeave=void 0,this.beforeEnter=void 0,this.enter=void 0,this.afterEnter=void 0,this.after=void 0};(function(U){U[U.off=0]="off",U[U.error=1]="error",U[U.warning=2]="warning",U[U.info=3]="info",U[U.debug=4]="debug"})(h||(h={}));var d=h.off,f=function(){function U(w){this.t=void 0,this.t=w}U.getLevel=function(){return d},U.setLevel=function(w){return d=h[w]};var F=U.prototype;return F.error=function(){this.i(console.error,h.error,[].slice.call(arguments))},F.warn=function(){this.i(console.warn,h.warning,[].slice.call(arguments))},F.info=function(){this.i(console.info,h.info,[].slice.call(arguments))},F.debug=function(){this.i(console.log,h.debug,[].slice.call(arguments))},F.i=function(w,v,y){v<=U.getLevel()&&w.apply(console,["["+this.t+"] "].concat(y))},U}();function _(U){return U.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function g(U){return U&&U.sensitive?"":"i"}var m={container:"container",history:"history",namespace:"namespace",prefix:"data-barba",prevent:"prevent",wrapper:"wrapper"},p=function(){function U(){this.o=m,this.u=void 0,this.h={after:null,before:null,parent:null}}var F=U.prototype;return F.toString=function(w){return w.outerHTML},F.toDocument=function(w){return this.u||(this.u=new DOMParser),this.u.parseFromString(w,"text/html")},F.toElement=function(w){var v=document.createElement("div");return v.innerHTML=w,v},F.getHtml=function(w){return w===void 0&&(w=document),this.toString(w.documentElement)},F.getWrapper=function(w){return w===void 0&&(w=document),w.querySelector("["+this.o.prefix+'="'+this.o.wrapper+'"]')},F.getContainer=function(w){return w===void 0&&(w=document),w.querySelector("["+this.o.prefix+'="'+this.o.container+'"]')},F.removeContainer=function(w){document.body.contains(w)&&(this.v(w),w.parentNode.removeChild(w))},F.addContainer=function(w,v){var y=this.getContainer()||this.h.before;y?this.l(w,y):this.h.after?this.h.after.parentNode.insertBefore(w,this.h.after):this.h.parent?this.h.parent.appendChild(w):v.appendChild(w)},F.getSibling=function(){return this.h},F.getNamespace=function(w){w===void 0&&(w=document);var v=w.querySelector("["+this.o.prefix+"-"+this.o.namespace+"]");return v?v.getAttribute(this.o.prefix+"-"+this.o.namespace):null},F.getHref=function(w){if(w.tagName&&w.tagName.toLowerCase()==="a"){if(typeof w.href=="string")return w.href;var v=w.getAttribute("href")||w.getAttribute("xlink:href");if(v)return this.resolveUrl(v.baseVal||v)}return null},F.resolveUrl=function(){var w=[].slice.call(arguments).length;if(w===0)throw new Error("resolveUrl requires at least one argument; got none.");var v=document.createElement("base");if(v.href=arguments[0],w===1)return v.href;var y=document.getElementsByTagName("head")[0];y.insertBefore(v,y.firstChild);for(var R,N=document.createElement("a"),k=1;k<w;k++)N.href=arguments[k],v.href=R=N.href;return y.removeChild(v),R},F.l=function(w,v){v.parentNode.insertBefore(w,v.nextSibling)},F.v=function(w){return this.h={after:w.nextElementSibling,before:w.previousElementSibling,parent:w.parentElement},this.h},U}(),M=new p,b=function(){function U(){this.p=void 0,this.m=[],this.P=-1}var F=U.prototype;return F.init=function(w,v){this.p="barba";var y={data:{},ns:v,scroll:{x:window.scrollX,y:window.scrollY},url:w};this.P=0,this.m.push(y);var R={from:this.p,index:this.P,states:[].concat(this.m)};window.history&&window.history.replaceState(R,"",w)},F.change=function(w,v,y){if(y&&y.state){var R=y.state,N=R.index;v=this.g(this.P-N),this.replace(R.states),this.P=N}else this.add(w,v);return v},F.add=function(w,v,y,R){var N=y!=null?y:this.R(v),k={data:R!=null?R:{},ns:"tmp",scroll:{x:window.scrollX,y:window.scrollY},url:w};switch(N){case"push":this.P=this.size,this.m.push(k);break;case"replace":this.set(this.P,k)}var L={from:this.p,index:this.P,states:[].concat(this.m)};switch(N){case"push":window.history&&window.history.pushState(L,"",w);break;case"replace":window.history&&window.history.replaceState(L,"",w)}},F.store=function(w,v){var y=v||this.P,R=this.get(y);R.data=t({},R.data,w),this.set(y,R);var N={from:this.p,index:this.P,states:[].concat(this.m)};window.history.replaceState(N,"")},F.update=function(w,v){var y=v||this.P,R=t({},this.get(y),w);this.set(y,R)},F.remove=function(w){w?this.m.splice(w,1):this.m.pop(),this.P--},F.clear=function(){this.m=[],this.P=-1},F.replace=function(w){this.m=w},F.get=function(w){return this.m[w]},F.set=function(w,v){return this.m[w]=v},F.R=function(w){var v="push",y=w,R=m.prefix+"-"+m.history;return y.hasAttribute&&y.hasAttribute(R)&&(v=y.getAttribute(R)),v},F.g=function(w){return Math.abs(w)>1?w>0?"forward":"back":w===0?"popstate":w>0?"back":"forward"},e(U,[{key:"current",get:function(){return this.m[this.P]}},{key:"previous",get:function(){return this.P<1?null:this.m[this.P-1]}},{key:"size",get:function(){return this.m.length}}]),U}(),S=new b,T=function(U,F){try{var w=function(){if(!F.next.html)return Promise.resolve(U).then(function(v){var y=F.next;if(v){var R=M.toElement(v.html);y.namespace=M.getNamespace(R),y.container=M.getContainer(R),y.url=v.url,y.html=v.html,S.update({ns:y.namespace});var N=M.toDocument(v.html);document.title=N.title}})}();return Promise.resolve(w&&w.then?w.then(function(){}):void 0)}catch(v){return Promise.reject(v)}},C=function U(F,w,v){return F instanceof RegExp?function(y,R){if(!R)return y;for(var N=/\((?:\?<(.*?)>)?(?!\?)/g,k=0,L=N.exec(y.source);L;)R.push({name:L[1]||k++,prefix:"",suffix:"",modifier:"",pattern:""}),L=N.exec(y.source);return y}(F,w):Array.isArray(F)?function(y,R,N){var k=y.map(function(L){return U(L,R,N).source});return new RegExp("(?:".concat(k.join("|"),")"),g(N))}(F,w,v):function(y,R,N){return function(k,L,Q){Q===void 0&&(Q={});for(var ne=Q.strict,he=ne!==void 0&&ne,ie=Q.start,te=ie===void 0||ie,se=Q.end,pe=se===void 0||se,me=Q.encode,le=me===void 0?function(ui){return ui}:me,Pe=Q.delimiter,B=Pe===void 0?"/#?":Pe,ae=Q.endsWith,de="[".concat(_(ae===void 0?"":ae),"]|$"),ge="[".concat(_(B),"]"),re=te?"^":"",J=0,be=k;J<be.length;J++){var ve=be[J];if(typeof ve=="string")re+=_(le(ve));else{var Ge=_(le(ve.prefix)),Me=_(le(ve.suffix));if(ve.pattern)if(L&&L.push(ve),Ge||Me)if(ve.modifier==="+"||ve.modifier==="*"){var nt=ve.modifier==="*"?"?":"";re+="(?:".concat(Ge,"((?:").concat(ve.pattern,")(?:").concat(Me).concat(Ge,"(?:").concat(ve.pattern,"))*)").concat(Me,")").concat(nt)}else re+="(?:".concat(Ge,"(").concat(ve.pattern,")").concat(Me,")").concat(ve.modifier);else re+=ve.modifier==="+"||ve.modifier==="*"?"((?:".concat(ve.pattern,")").concat(ve.modifier,")"):"(".concat(ve.pattern,")").concat(ve.modifier);else re+="(?:".concat(Ge).concat(Me,")").concat(ve.modifier)}}if(pe)he||(re+="".concat(ge,"?")),re+=Q.endsWith?"(?=".concat(de,")"):"$";else{var He=k[k.length-1],Xt=typeof He=="string"?ge.indexOf(He[He.length-1])>-1:He===void 0;he||(re+="(?:".concat(ge,"(?=").concat(de,"))?")),Xt||(re+="(?=".concat(ge,"|").concat(de,")"))}return new RegExp(re,g(Q))}(function(k,L){L===void 0&&(L={});for(var Q=function(Me){for(var nt=[],He=0;He<Me.length;){var Xt=Me[He];if(Xt!=="*"&&Xt!=="+"&&Xt!=="?")if(Xt!=="\\")if(Xt!=="{")if(Xt!=="}")if(Xt!==":")if(Xt!=="(")nt.push({type:"CHAR",index:He,value:Me[He++]});else{var ui=1,Rn="";if(Me[Et=He+1]==="?")throw new TypeError('Pattern cannot start with "?" at '.concat(Et));for(;Et<Me.length;)if(Me[Et]!=="\\"){if(Me[Et]===")"){if(--ui==0){Et++;break}}else if(Me[Et]==="("&&(ui++,Me[Et+1]!=="?"))throw new TypeError("Capturing groups are not allowed at ".concat(Et));Rn+=Me[Et++]}else Rn+=Me[Et++]+Me[Et++];if(ui)throw new TypeError("Unbalanced pattern at ".concat(He));if(!Rn)throw new TypeError("Missing pattern at ".concat(He));nt.push({type:"PATTERN",index:He,value:Rn}),He=Et}else{for(var $r="",Et=He+1;Et<Me.length;){var Mi=Me.charCodeAt(Et);if(!(Mi>=48&&Mi<=57||Mi>=65&&Mi<=90||Mi>=97&&Mi<=122||Mi===95))break;$r+=Me[Et++]}if(!$r)throw new TypeError("Missing parameter name at ".concat(He));nt.push({type:"NAME",index:He,value:$r}),He=Et}else nt.push({type:"CLOSE",index:He,value:Me[He++]});else nt.push({type:"OPEN",index:He,value:Me[He++]});else nt.push({type:"ESCAPED_CHAR",index:He++,value:Me[He++]});else nt.push({type:"MODIFIER",index:He,value:Me[He++]})}return nt.push({type:"END",index:He,value:""}),nt}(k),ne=L.prefixes,he=ne===void 0?"./":ne,ie="[^".concat(_(L.delimiter||"/#?"),"]+?"),te=[],se=0,pe=0,me="",le=function(Me){if(pe<Q.length&&Q[pe].type===Me)return Q[pe++].value},Pe=function(Me){var nt=le(Me);if(nt!==void 0)return nt;var He=Q[pe],Xt=He.index;throw new TypeError("Unexpected ".concat(He.type," at ").concat(Xt,", expected ").concat(Me))},B=function(){for(var Me,nt="";Me=le("CHAR")||le("ESCAPED_CHAR");)nt+=Me;return nt};pe<Q.length;){var ae=le("CHAR"),de=le("NAME"),ge=le("PATTERN");if(de||ge)he.indexOf(J=ae||"")===-1&&(me+=J,J=""),me&&(te.push(me),me=""),te.push({name:de||se++,prefix:J,suffix:"",pattern:ge||ie,modifier:le("MODIFIER")||""});else{var re=ae||le("ESCAPED_CHAR");if(re)me+=re;else if(me&&(te.push(me),me=""),le("OPEN")){var J=B(),be=le("NAME")||"",ve=le("PATTERN")||"",Ge=B();Pe("CLOSE"),te.push({name:be||(ve?se++:""),pattern:be&&!ve?ie:ve,prefix:J,suffix:Ge,modifier:le("MODIFIER")||""})}else Pe("END")}}return te}(y,N),R,N)}(F,w,v)},P={__proto__:null,update:T,nextTick:function(){return new Promise(function(U){window.requestAnimationFrame(U)})},pathToRegexp:C},I=function(){return window.location.origin},x=function(U){return U===void 0&&(U=window.location.href),E(U).port},E=function(U){var F,w=U.match(/:\d+/);if(w===null)/^http/.test(U)&&(F=80),/^https/.test(U)&&(F=443);else{var v=w[0].substring(1);F=parseInt(v,10)}var y,R=U.replace(I(),""),N={},k=R.indexOf("#");k>=0&&(y=R.slice(k+1),R=R.slice(0,k));var L=R.indexOf("?");return L>=0&&(N=O(R.slice(L+1)),R=R.slice(0,L)),{hash:y,path:R,port:F,query:N}},O=function(U){return U.split("&").reduce(function(F,w){var v=w.split("=");return F[v[0]]=v[1],F},{})},H=function(U){return U===void 0&&(U=window.location.href),U.replace(/(\/#.*|\/|#.*)$/,"")},W={__proto__:null,getHref:function(){return window.location.href},getAbsoluteHref:function(U,F){return F===void 0&&(F=document.baseURI),new URL(U,F).href},getOrigin:I,getPort:x,getPath:function(U){return U===void 0&&(U=window.location.href),E(U).path},getQuery:function(U,F){return F===void 0&&(F=!1),F?JSON.stringify(E(U).query):E(U).query},getHash:function(U){return E(U).hash},parse:E,parseQuery:O,clean:H};function $(U,F,w,v,y){return F===void 0&&(F=2e3),new Promise(function(R,N){var k=new XMLHttpRequest;k.onreadystatechange=function(){if(k.readyState===XMLHttpRequest.DONE){if(k.status===200){var L=k.responseURL!==""&&k.responseURL!==U?k.responseURL:U;R({html:k.responseText,url:t({href:L},E(L))}),v.update(U,{status:"fulfilled",target:L})}else if(k.status){var Q={status:k.status,statusText:k.statusText};w(U,Q),N(Q),v.update(U,{status:"rejected"})}}},k.ontimeout=function(){var L=new Error("Timeout error ["+F+"]");w(U,L),N(L),v.update(U,{status:"rejected"})},k.onerror=function(){var L=new Error("Fetch error");w(U,L),N(L),v.update(U,{status:"rejected"})},k.open("GET",U),k.timeout=F,k.setRequestHeader("Accept","text/html,application/xhtml+xml,application/xml"),k.setRequestHeader("x-barba","yes"),y.all().forEach(function(L,Q){k.setRequestHeader(Q,L)}),k.send()})}function K(U){return!!U&&(typeof U=="object"||typeof U=="function")&&typeof U.then=="function"}function q(U,F){return F===void 0&&(F={}),function(){var w=arguments,v=!1,y=new Promise(function(R,N){F.async=function(){return v=!0,function(L,Q){L?N(L):R(Q)}};var k=U.apply(F,[].slice.call(w));v||(K(k)?k.then(R,N):R(k))});return y}}var oe=function(U){function F(){var v;return(v=U.call(this)||this).logger=new f("@barba/core"),v.all=["ready","page","reset","currentAdded","currentRemoved","nextAdded","nextRemoved","beforeOnce","once","afterOnce","before","beforeLeave","leave","afterLeave","beforeEnter","enter","afterEnter","after"],v.registered=new Map,v.init(),v}i(F,U);var w=F.prototype;return w.init=function(){var v=this;this.registered.clear(),this.all.forEach(function(y){v[y]||(v[y]=function(R,N){v.registered.has(y)||v.registered.set(y,new Set),v.registered.get(y).add({ctx:N||{},fn:R})})})},w.do=function(v){var y=arguments,R=this;if(this.registered.has(v)){var N=Promise.resolve();return this.registered.get(v).forEach(function(k){N=N.then(function(){return q(k.fn,k.ctx).apply(void 0,[].slice.call(y,1))})}),N.catch(function(k){R.logger.debug("Hook error ["+v+"]"),R.logger.error(k)})}return Promise.resolve()},w.clear=function(){var v=this;this.all.forEach(function(y){delete v[y]}),this.init()},w.help=function(){this.logger.info("Available hooks: "+this.all.join(","));var v=[];this.registered.forEach(function(y,R){return v.push(R)}),this.logger.info("Registered hooks: "+v.join(","))},F}(u),X=new oe,fe=function(){function U(F){if(this.k=void 0,this.O=[],typeof F=="boolean")this.k=F;else{var w=Array.isArray(F)?F:[F];this.O=w.map(function(v){return C(v)})}}return U.prototype.checkHref=function(F){if(typeof this.k=="boolean")return this.k;var w=E(F).path;return this.O.some(function(v){return v.exec(w)!==null})},U}(),ye=function(U){function F(v){var y;return(y=U.call(this,v)||this).T=new Map,y}i(F,U);var w=F.prototype;return w.set=function(v,y,R,N,k){return this.T.set(v,{action:R,request:y,status:N,target:k!=null?k:v}),{action:R,request:y,status:N,target:k}},w.get=function(v){return this.T.get(v)},w.getRequest=function(v){return this.T.get(v).request},w.getAction=function(v){return this.T.get(v).action},w.getStatus=function(v){return this.T.get(v).status},w.getTarget=function(v){return this.T.get(v).target},w.has=function(v){return!this.checkHref(v)&&this.T.has(v)},w.delete=function(v){return this.T.delete(v)},w.update=function(v,y){var R=t({},this.T.get(v),y);return this.T.set(v,R),R},F}(fe),we=function(){function U(){this.A=new Map}var F=U.prototype;return F.set=function(w,v){return this.A.set(w,v),{name:v}},F.get=function(w){return this.A.get(w)},F.all=function(){return this.A},F.has=function(w){return this.A.has(w)},F.delete=function(w){return this.A.delete(w)},F.clear=function(){return this.A.clear()},U}(),Ne=function(){return!window.history.pushState},Qe=function(U){return!U.el||!U.href},Xe=function(U){var F=U.event;return F.which>1||F.metaKey||F.ctrlKey||F.shiftKey||F.altKey},Ve=function(U){var F=U.el;return F.hasAttribute("target")&&F.target==="_blank"},ee=function(U){var F=U.el;return F.protocol!==void 0&&window.location.protocol!==F.protocol||F.hostname!==void 0&&window.location.hostname!==F.hostname},ce=function(U){var F=U.el;return F.port!==void 0&&x()!==x(F.href)},Ee=function(U){var F=U.el;return F.getAttribute&&typeof F.getAttribute("download")=="string"},Ue=function(U){return U.el.hasAttribute(m.prefix+"-"+m.prevent)},Re=function(U){return!!U.el.closest("["+m.prefix+"-"+m.prevent+'="all"]')},qe=function(U){var F=U.href;return H(F)===H()&&x(F)===x()},Lt=function(U){function F(v){var y;return(y=U.call(this,v)||this).suite=[],y.tests=new Map,y.init(),y}i(F,U);var w=F.prototype;return w.init=function(){this.add("pushState",Ne),this.add("exists",Qe),this.add("newTab",Xe),this.add("blank",Ve),this.add("corsDomain",ee),this.add("corsPort",ce),this.add("download",Ee),this.add("preventSelf",Ue),this.add("preventAll",Re),this.add("sameUrl",qe,!1)},w.add=function(v,y,R){R===void 0&&(R=!0),this.tests.set(v,y),R&&this.suite.push(v)},w.run=function(v,y,R,N){return this.tests.get(v)({el:y,event:R,href:N})},w.checkLink=function(v,y,R){var N=this;return this.suite.some(function(k){return N.run(k,v,y,R)})},F}(fe),D=function(U){function F(w,v){var y;return v===void 0&&(v="Barba error"),(y=U.call.apply(U,[this].concat([].slice.call(arguments,2)))||this).error=void 0,y.label=void 0,y.error=w,y.label=v,Error.captureStackTrace&&Error.captureStackTrace(c(y),F),y.name="BarbaError",y}return i(F,U),F}(l(Error)),ot=function(){function U(w){w===void 0&&(w=[]),this.logger=new f("@barba/core"),this.all=[],this.page=[],this.once=[],this.j=[{name:"namespace",type:"strings"},{name:"custom",type:"function"}],w&&(this.all=this.all.concat(w)),this.update()}var F=U.prototype;return F.add=function(w,v){w==="rule"?this.j.splice(v.position||0,0,v.value):this.all.push(v),this.update()},F.resolve=function(w,v){var y=this;v===void 0&&(v={});var R=v.once?this.once:this.page;R=R.filter(v.self?function(ie){return ie.name&&ie.name==="self"}:function(ie){return!ie.name||ie.name!=="self"});var N=new Map,k=R.find(function(ie){var te=!0,se={};return v.self&&ie.name==="self"?(N.set(ie,se),!0):(y.j.reverse().forEach(function(pe){te&&(te=y.M(ie,pe,w,se),ie.from&&ie.to&&(te=y.M(ie,pe,w,se,"from")&&y.M(ie,pe,w,se,"to")),ie.from&&!ie.to&&(te=y.M(ie,pe,w,se,"from")),!ie.from&&ie.to&&(te=y.M(ie,pe,w,se,"to")))}),N.set(ie,se),te)}),L=N.get(k),Q=[];if(Q.push(v.once?"once":"page"),v.self&&Q.push("self"),L){var ne,he=[k];Object.keys(L).length>0&&he.push(L),(ne=this.logger).info.apply(ne,["Transition found ["+Q.join(",")+"]"].concat(he))}else this.logger.info("No transition found ["+Q.join(",")+"]");return k},F.update=function(){var w=this;this.all=this.all.map(function(v){return w.N(v)}).sort(function(v,y){return v.priority-y.priority}).reverse().map(function(v){return delete v.priority,v}),this.page=this.all.filter(function(v){return v.leave!==void 0||v.enter!==void 0}),this.once=this.all.filter(function(v){return v.once!==void 0})},F.M=function(w,v,y,R,N){var k=!0,L=!1,Q=w,ne=v.name,he=ne,ie=ne,te=ne,se=N?Q[N]:Q,pe=N==="to"?y.next:y.current;if(N?se&&se[ne]:se[ne]){switch(v.type){case"strings":default:var me=Array.isArray(se[he])?se[he]:[se[he]];pe[he]&&me.indexOf(pe[he])!==-1&&(L=!0),me.indexOf(pe[he])===-1&&(k=!1);break;case"object":var le=Array.isArray(se[ie])?se[ie]:[se[ie]];pe[ie]?(pe[ie].name&&le.indexOf(pe[ie].name)!==-1&&(L=!0),le.indexOf(pe[ie].name)===-1&&(k=!1)):k=!1;break;case"function":se[te](y)?L=!0:k=!1}L&&(N?(R[N]=R[N]||{},R[N][ne]=Q[N][ne]):R[ne]=Q[ne])}return k},F.S=function(w,v,y){var R=0;return(w[v]||w.from&&w.from[v]||w.to&&w.to[v])&&(R+=Math.pow(10,y),w.from&&w.from[v]&&(R+=1),w.to&&w.to[v]&&(R+=2)),R},F.N=function(w){var v=this;w.priority=0;var y=0;return this.j.forEach(function(R,N){y+=v.S(w,R.name,N+1)}),w.priority=y,w},U}();function Fe(U,F){try{var w=U()}catch(v){return F(v)}return w&&w.then?w.then(void 0,F):w}var De=function(){function U(w){w===void 0&&(w=[]),this.logger=new f("@barba/core"),this.store=void 0,this.C=!1,this.store=new ot(w)}var F=U.prototype;return F.get=function(w,v){return this.store.resolve(w,v)},F.doOnce=function(w){var v=w.data,y=w.transition;try{var R=function(){N.C=!1},N=this,k=y||{};N.C=!0;var L=Fe(function(){return Promise.resolve(N.L("beforeOnce",v,k)).then(function(){return Promise.resolve(N.once(v,k)).then(function(){return Promise.resolve(N.L("afterOnce",v,k)).then(function(){})})})},function(Q){N.C=!1,N.logger.debug("Transition error [before/after/once]"),N.logger.error(Q)});return Promise.resolve(L&&L.then?L.then(R):R())}catch(Q){return Promise.reject(Q)}},F.doPage=function(w){var v=w.data,y=w.transition,R=w.page,N=w.wrapper;try{var k=function(ie){L.C=!1},L=this,Q=y||{},ne=Q.sync===!0||!1;L.C=!0;var he=Fe(function(){function ie(){return Promise.resolve(L.L("before",v,Q)).then(function(){function se(me){return Promise.resolve(L.remove(v)).then(function(){return Promise.resolve(L.L("after",v,Q)).then(function(){})})}var pe=function(){if(ne)return Fe(function(){return Promise.resolve(L.add(v,N)).then(function(){return Promise.resolve(L.L("beforeLeave",v,Q)).then(function(){return Promise.resolve(L.L("beforeEnter",v,Q)).then(function(){return Promise.resolve(Promise.all([L.leave(v,Q),L.enter(v,Q)])).then(function(){return Promise.resolve(L.L("afterLeave",v,Q)).then(function(){return Promise.resolve(L.L("afterEnter",v,Q)).then(function(){})})})})})})},function(B){if(L.H(B))throw new D(B,"Transition error [sync]")});var me=function(B){return Fe(function(){var ae=function(){if(le!==!1)return Promise.resolve(L.add(v,N)).then(function(){return Promise.resolve(L.L("beforeEnter",v,Q)).then(function(){return Promise.resolve(L.enter(v,Q,le)).then(function(){return Promise.resolve(L.L("afterEnter",v,Q)).then(function(){})})})})}();if(ae&&ae.then)return ae.then(function(){})},function(ae){if(L.H(ae))throw new D(ae,"Transition error [before/after/enter]")})},le=!1,Pe=Fe(function(){return Promise.resolve(L.L("beforeLeave",v,Q)).then(function(){return Promise.resolve(Promise.all([L.leave(v,Q),T(R,v)]).then(function(B){return B[0]})).then(function(B){return le=B,Promise.resolve(L.L("afterLeave",v,Q)).then(function(){})})})},function(B){if(L.H(B))throw new D(B,"Transition error [before/after/leave]")});return Pe&&Pe.then?Pe.then(me):me()}();return pe&&pe.then?pe.then(se):se()})}var te=function(){if(ne)return Promise.resolve(T(R,v)).then(function(){})}();return te&&te.then?te.then(ie):ie()},function(ie){throw L.C=!1,ie.name&&ie.name==="BarbaError"?(L.logger.debug(ie.label),L.logger.error(ie.error),ie):(L.logger.debug("Transition error [page]"),L.logger.error(ie),ie)});return Promise.resolve(he&&he.then?he.then(k):k())}catch(ie){return Promise.reject(ie)}},F.once=function(w,v){try{return Promise.resolve(X.do("once",w,v)).then(function(){return v.once?q(v.once,v)(w):Promise.resolve()})}catch(y){return Promise.reject(y)}},F.leave=function(w,v){try{return Promise.resolve(X.do("leave",w,v)).then(function(){return v.leave?q(v.leave,v)(w):Promise.resolve()})}catch(y){return Promise.reject(y)}},F.enter=function(w,v,y){try{return Promise.resolve(X.do("enter",w,v)).then(function(){return v.enter?q(v.enter,v)(w,y):Promise.resolve()})}catch(R){return Promise.reject(R)}},F.add=function(w,v){try{return M.addContainer(w.next.container,v),X.do("nextAdded",w),Promise.resolve()}catch(y){return Promise.reject(y)}},F.remove=function(w){try{return M.removeContainer(w.current.container),X.do("currentRemoved",w),Promise.resolve()}catch(v){return Promise.reject(v)}},F.H=function(w){return w.message?!/Timeout error|Fetch error/.test(w.message):!w.status},F.L=function(w,v,y){try{return Promise.resolve(X.do(w,v,y)).then(function(){return y[w]?q(y[w],y)(v):Promise.resolve()})}catch(R){return Promise.reject(R)}},e(U,[{key:"isRunning",get:function(){return this.C},set:function(w){this.C=w}},{key:"hasOnce",get:function(){return this.store.once.length>0}},{key:"hasSelf",get:function(){return this.store.all.some(function(w){return w.name==="self"})}},{key:"shouldWait",get:function(){return this.store.all.some(function(w){return w.to&&!w.to.route||w.sync})}}]),U}(),Te=function(){function U(F){var w=this;this.names=["beforeLeave","afterLeave","beforeEnter","afterEnter"],this.byNamespace=new Map,F.length!==0&&(F.forEach(function(v){w.byNamespace.set(v.namespace,v)}),this.names.forEach(function(v){X[v](w._(v))}))}return U.prototype._=function(F){var w=this;return function(v){var y=F.match(/enter/i)?v.next:v.current,R=w.byNamespace.get(y.namespace);return R&&R[F]?q(R[F],R)(v):Promise.resolve()}},U}();Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(U){var F=this;do{if(F.matches(U))return F;F=F.parentElement||F.parentNode}while(F!==null&&F.nodeType===1);return null});var at={container:null,html:"",namespace:"",url:{hash:"",href:"",path:"",port:null,query:{}}},Ae=function(){function U(){this.version="2.10.0",this.schemaPage=at,this.Logger=f,this.logger=new f("@barba/core"),this.plugins=[],this.timeout=void 0,this.cacheIgnore=void 0,this.cacheFirstPage=void 0,this.prefetchIgnore=void 0,this.preventRunning=void 0,this.hooks=X,this.cache=void 0,this.headers=void 0,this.prevent=void 0,this.transitions=void 0,this.views=void 0,this.dom=M,this.helpers=P,this.history=S,this.request=$,this.url=W,this.D=void 0,this.B=void 0,this.q=void 0,this.F=void 0}var F=U.prototype;return F.use=function(w,v){var y=this.plugins;y.indexOf(w)>-1?this.logger.warn("Plugin ["+w.name+"] already installed."):typeof w.install=="function"?(w.install(this,v),y.push(w)):this.logger.warn("Plugin ["+w.name+'] has no "install" method.')},F.init=function(w){var v=w===void 0?{}:w,y=v.transitions,R=y===void 0?[]:y,N=v.views,k=N===void 0?[]:N,L=v.schema,Q=L===void 0?m:L,ne=v.requestError,he=v.timeout,ie=he===void 0?2e3:he,te=v.cacheIgnore,se=te!==void 0&&te,pe=v.cacheFirstPage,me=pe!==void 0&&pe,le=v.prefetchIgnore,Pe=le!==void 0&&le,B=v.preventRunning,ae=B!==void 0&&B,de=v.prevent,ge=de===void 0?null:de,re=v.debug,J=v.logLevel;if(f.setLevel((re!==void 0&&re)===!0?"debug":J===void 0?"off":J),this.logger.info(this.version),Object.keys(Q).forEach(function(Ge){m[Ge]&&(m[Ge]=Q[Ge])}),this.B=ne,this.timeout=ie,this.cacheIgnore=se,this.cacheFirstPage=me,this.prefetchIgnore=Pe,this.preventRunning=ae,this.q=this.dom.getWrapper(),!this.q)throw new Error("[@barba/core] No Barba wrapper found");this.I();var be=this.data.current;if(!be.container)throw new Error("[@barba/core] No Barba container found");if(this.cache=new ye(se),this.headers=new we,this.prevent=new Lt(Pe),this.transitions=new De(R),this.views=new Te(k),ge!==null){if(typeof ge!="function")throw new Error("[@barba/core] Prevent should be a function");this.prevent.add("preventCustom",ge)}this.history.init(be.url.href,be.namespace),me&&this.cache.set(be.url.href,Promise.resolve({html:be.html,url:be.url}),"init","fulfilled"),this.U=this.U.bind(this),this.$=this.$.bind(this),this.X=this.X.bind(this),this.G(),this.plugins.forEach(function(Ge){return Ge.init()});var ve=this.data;ve.trigger="barba",ve.next=ve.current,ve.current=t({},this.schemaPage),this.hooks.do("ready",ve),this.once(ve),this.I()},F.destroy=function(){this.I(),this.J(),this.history.clear(),this.hooks.clear(),this.plugins=[]},F.force=function(w){window.location.assign(w)},F.go=function(w,v,y){var R;if(v===void 0&&(v="barba"),this.F=null,this.transitions.isRunning)this.force(w);else if(!(R=v==="popstate"?this.history.current&&this.url.getPath(this.history.current.url)===this.url.getPath(w)&&this.url.getQuery(this.history.current.url,!0)===this.url.getQuery(w,!0):this.prevent.run("sameUrl",null,null,w))||this.transitions.hasSelf)return v=this.history.change(this.cache.has(w)?this.cache.get(w).target:w,v,y),y&&(y.stopPropagation(),y.preventDefault()),this.page(w,v,y!=null?y:void 0,R)},F.once=function(w){try{var v=this;return Promise.resolve(v.hooks.do("beforeEnter",w)).then(function(){function y(){return Promise.resolve(v.hooks.do("afterEnter",w)).then(function(){})}var R=function(){if(v.transitions.hasOnce){var N=v.transitions.get(w,{once:!0});return Promise.resolve(v.transitions.doOnce({transition:N,data:w})).then(function(){})}}();return R&&R.then?R.then(y):y()})}catch(y){return Promise.reject(y)}},F.page=function(w,v,y,R){try{var N,k=function(){var he=L.data;return Promise.resolve(L.hooks.do("page",he)).then(function(){var ie=function(te,se){try{var pe=(me=L.transitions.get(he,{once:!1,self:R}),Promise.resolve(L.transitions.doPage({data:he,page:N,transition:me,wrapper:L.q})).then(function(){L.I()}))}catch{return se()}var me;return pe&&pe.then?pe.then(void 0,se):pe}(0,function(){f.getLevel()===0&&L.force(he.next.url.href)});if(ie&&ie.then)return ie.then(function(){})})},L=this;if(L.data.next.url=t({href:w},L.url.parse(w)),L.data.trigger=v,L.data.event=y,L.cache.has(w))N=L.cache.update(w,{action:"click"}).request;else{var Q=L.request(w,L.timeout,L.onRequestError.bind(L,v),L.cache,L.headers);Q.then(function(he){he.url.href!==w&&L.history.add(he.url.href,v,"replace")}),N=L.cache.set(w,Q,"click","pending").request}var ne=function(){if(L.transitions.shouldWait)return Promise.resolve(T(N,L.data)).then(function(){})}();return Promise.resolve(ne&&ne.then?ne.then(k):k())}catch(he){return Promise.reject(he)}},F.onRequestError=function(w){this.transitions.isRunning=!1;var v=[].slice.call(arguments,1),y=v[0],R=v[1],N=this.cache.getAction(y);return this.cache.delete(y),this.B&&this.B(w,N,y,R)===!1||N==="click"&&this.force(y),!1},F.prefetch=function(w){var v=this;w=this.url.getAbsoluteHref(w),this.cache.has(w)||this.cache.set(w,this.request(w,this.timeout,this.onRequestError.bind(this,"barba"),this.cache,this.headers).catch(function(y){v.logger.error(y)}),"prefetch","pending")},F.G=function(){this.prefetchIgnore!==!0&&(document.addEventListener("mouseover",this.U),document.addEventListener("touchstart",this.U)),document.addEventListener("click",this.$),window.addEventListener("popstate",this.X)},F.J=function(){this.prefetchIgnore!==!0&&(document.removeEventListener("mouseover",this.U),document.removeEventListener("touchstart",this.U)),document.removeEventListener("click",this.$),window.removeEventListener("popstate",this.X)},F.U=function(w){var v=this,y=this.W(w);if(y){var R=this.url.getAbsoluteHref(this.dom.getHref(y));this.prevent.checkHref(R)||this.cache.has(R)||this.cache.set(R,this.request(R,this.timeout,this.onRequestError.bind(this,y),this.cache,this.headers).catch(function(N){v.logger.error(N)}),"enter","pending")}},F.$=function(w){this.F=w;var v=this.W(w);if(v)return this.transitions.isRunning&&this.preventRunning?(w.preventDefault(),void w.stopPropagation()):void this.go(this.dom.getHref(v),v,w)},F.X=function(w){this.F&&!this.W(this.F)||this.go(this.url.getHref(),"popstate",w)},F.W=function(w){for(var v=w.target;v&&!this.dom.getHref(v);)v=v.parentNode;if(v&&!this.prevent.checkLink(v,w,this.dom.getHref(v)))return v},F.I=function(){var w=this.url.getHref(),v={container:this.dom.getContainer(),html:this.dom.getHtml(),namespace:this.dom.getNamespace(),url:t({href:w},this.url.parse(w))};this.D={current:v,event:void 0,next:t({},this.schemaPage),trigger:void 0},this.hooks.do("reset",this.data)},e(U,[{key:"data",get:function(){return this.D}},{key:"wrapper",get:function(){return this.q}}]),U}();return new Ae})});function an(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Mf(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}var oi,Qr,Gh,Bt,ft,Ai,ht,Ih,C0,R0,Ef,P0,L0,Ct,yt,cn,Ua,Wi,si,Wh,Ca,wf,kt,Dh,Xh,dr,wh,qh,Tf,I0,gt,Vi,Oh,Yh,mi,Ia,Af,Cf,Ba,uo,Rf,fo,D0,Ra,O0,jh,Ln,Fh,Pf,ni,Th,gf,Pa,Zh,$h,In,Kh,$t,bt,It,fr,F0,Da,Lf,If,Df,Ri,N0,ur,vf,Oa,lo,U0,Of,ka,Dn,lr,B0,Nh,k0,_f,es,Fa,Ha,za,Ff,Gi,Nf,Uf,H0,Uh,z0,V0,ts,yf,G0,Ti,co,On,go,Ft,W0,Bh,Bf,X0,Ci,kh,kf,Hf,Hh,zf,Vf,q0,Y0,j0,Gf,Z0,$0,ns,Wf,K0,bf,pi,oo,Jr,Xf,qf,st,ao,Ah,Yf,jf,xf,ln,J0,Jh,po,ri,is,Ze,Q0,e_,t_,i_,n_,Zf,$f,cr,pr,Kf,Ch,Rh,Qh,mo,Ot,r_,eu,s_,tu,Pn,zh,iu,o_,a_,l_,ho,Jf,Qf,St,nu,ep,c_,h_,Va,tp,u_,ru,su,d_,f_,p_,ou,Kt,hr,La,m_,Sf,g_,Ph,Vh,ip,v_,Na,__,y_,Lh,Ht,b_,x_,S_,M_,E_,w_,T_,A_,C_,R_,P_,L_,I_,D_,O_,F_,N_,U_,au=Yt(()=>{oi={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Qr={duration:.5,overwrite:!1,delay:0},Ai=1e8,ht=1/Ai,Ih=Math.PI*2,C0=Ih/4,R0=0,Ef=Math.sqrt,P0=Math.cos,L0=Math.sin,Ct=function(e){return typeof e=="string"},yt=function(e){return typeof e=="function"},cn=function(e){return typeof e=="number"},Ua=function(e){return typeof e=="undefined"},Wi=function(e){return typeof e=="object"},si=function(e){return e!==!1},Wh=function(){return typeof window!="undefined"},Ca=function(e){return yt(e)||Ct(e)},wf=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},kt=Array.isArray,Dh=/(?:-?\.?\d|\.)+/gi,Xh=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,dr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,wh=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,qh=/[+-]=-?[.\d]+/,Tf=/[^,'"\[\]\s]+/gi,I0=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,mi={},Ia={},Cf=function(e){return(Ia=ur(e,mi))&&Ht},Ba=function(e,t){},uo=function(e,t){return!t&&void 0},Rf=function(e,t){return e&&(mi[e]=t)&&Ia&&(Ia[e]=t)||mi},fo=function(){return 0},D0={suppressEvents:!0,isStart:!0,kill:!1},Ra={suppressEvents:!0,kill:!1},O0={suppressEvents:!0},jh={},Ln=[],Fh={},ni={},Th={},gf=30,Pa=[],Zh="",$h=function(e){var t=e[0],i,n;if(Wi(t)||yt(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(n=Pa.length;n--&&!Pa[n].targetTest(t););i=Pa[n]}for(n=e.length;n--;)e[n]&&(e[n]._gsap||(e[n]._gsap=new Qh(e[n],i)))||e.splice(n,1);return e},In=function(e){return e._gsap||$h(Ci(e))[0]._gsap},Kh=function(e,t,i){return(i=e[t])&&yt(i)?e[t]():Ua(i)&&e.getAttribute&&e.getAttribute(t)||i},$t=function(e,t){return(e=e.split(",")).forEach(t)||e},bt=function(e){return Math.round(e*1e5)/1e5||0},It=function(e){return Math.round(e*1e7)/1e7||0},fr=function(e,t){var i=t.charAt(0),n=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+n:i==="-"?e-n:i==="*"?e*n:e/n},F0=function(e,t){for(var i=t.length,n=0;e.indexOf(t[n])<0&&++n<i;);return n<i},Da=function(){var e=Ln.length,t=Ln.slice(0),i,n;for(Fh={},Ln.length=0,i=0;i<e;i++)n=t[i],n&&n._lazy&&(n.render(n._lazy[0],n._lazy[1],!0)._lazy=0)},Lf=function(e,t,i,n){Ln.length&&!Bt&&Da(),e.render(t,i,n||Bt&&t<0&&(e._initted||e._startAt)),Ln.length&&!Bt&&Da()},If=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Tf).length<2?t:Ct(e)?e.trim():e},Df=function(e){return e},Ri=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},N0=function(e){return function(t,i){for(var n in i)n in t||n==="duration"&&e||n==="ease"||(t[n]=i[n])}},ur=function(e,t){for(var i in t)e[i]=t[i];return e},vf=function r(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=Wi(t[i])?r(e[i]||(e[i]={}),t[i]):t[i]);return e},Oa=function(e,t){var i={},n;for(n in e)n in t||(i[n]=e[n]);return i},lo=function(e){var t=e.parent||gt,i=e.keyframes?N0(kt(e.keyframes)):Ri;if(si(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},U0=function(e,t){for(var i=e.length,n=i===t.length;n&&i--&&e[i]===t[i];);return i<0},Of=function(e,t,i,n,s){i===void 0&&(i="_first"),n===void 0&&(n="_last");var o=e[n],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[n]=t,t._prev=o,t.parent=t._dp=e,t},ka=function(e,t,i,n){i===void 0&&(i="_first"),n===void 0&&(n="_last");var s=t._prev,o=t._next;s?s._next=o:e[i]===t&&(e[i]=o),o?o._prev=s:e[n]===t&&(e[n]=s),t._next=t._prev=t.parent=null},Dn=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},lr=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},B0=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Nh=function(e,t,i,n){return e._startAt&&(Bt?e._startAt.revert(Ra):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,n))},k0=function r(e){return!e||e._ts&&r(e.parent)},_f=function(e){return e._repeat?es(e._tTime,e=e.duration()+e._rDelay)*e:0},es=function(e,t){var i=Math.floor(e/=t);return e&&i===e?i-1:i},Fa=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Ha=function(e){return e._end=It(e._start+(e._tDur/Math.abs(e._ts||e._rts||ht)||0))},za=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=It(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Ha(e),i._dirty||lr(i,e)),e},Ff=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=Fa(e.rawTime(),t),(!t._dur||go(0,t.totalDuration(),i)-t._tTime>ht)&&t.render(i,!0)),lr(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-ht}},Gi=function(e,t,i,n){return t.parent&&Dn(t),t._start=It((cn(i)?i:i||e!==gt?Ti(e,i,t):e._time)+t._delay),t._end=It(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Of(e,t,"_first","_last",e._sort?"_start":0),Uh(t)||(e._recent=t),n||Ff(e,t),e._ts<0&&za(e,e._tTime),e},Nf=function(e,t){return(mi.ScrollTrigger||Ba("scrollTrigger",t))&&mi.ScrollTrigger.create(t,e)},Uf=function(e,t,i,n,s){if(iu(e,t,s),!e._initted)return 1;if(!i&&e._pt&&!Bt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Pf!==ri.frame)return Ln.push(e),e._lazy=[s,n],1},H0=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},Uh=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},z0=function(e,t,i,n){var s=e.ratio,o=t<0||!t&&(!e._start&&H0(e)&&!(!e._initted&&Uh(e))||(e._ts<0||e._dp._ts<0)&&!Uh(e))?0:1,a=e._rDelay,l=0,c,h,u;if(a&&e._repeat&&(l=go(0,e._tDur,t),h=es(l,a),e._yoyo&&h&1&&(o=1-o),h!==es(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||Bt||n||e._zTime===ht||!t&&e._zTime){if(!e._initted&&Uf(e,t,n,i,l))return;for(u=e._zTime,e._zTime=t||(i?ht:0),i||(i=t&&!u),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&Nh(e,t,i,!0),e._onUpdate&&!i&&pi(e,"onUpdate"),l&&e._repeat&&!i&&e.parent&&pi(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Dn(e,1),!i&&!Bt&&(pi(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},V0=function(e,t,i){var n;if(i>t)for(n=e._first;n&&n._start<=i;){if(n.data==="isPause"&&n._start>t)return n;n=n._next}else for(n=e._last;n&&n._start>=i;){if(n.data==="isPause"&&n._start<t)return n;n=n._prev}},ts=function(e,t,i,n){var s=e._repeat,o=It(t)||0,a=e._tTime/e._tDur;return a&&!n&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:It(o*(s+1)+e._rDelay*s):o,a>0&&!n&&za(e,e._tTime=e._tDur*a),e.parent&&Ha(e),i||lr(e.parent,e),e},yf=function(e){return e instanceof Ot?lr(e):ts(e,e._dur)},G0={_start:0,endTime:fo,totalDuration:fo},Ti=function r(e,t,i){var n=e.labels,s=e._recent||G0,o=e.duration()>=Ai?s.endTime(!1):e._dur,a,l,c;return Ct(t)&&(isNaN(t)||t in n)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:i).totalDuration()/100:1)):a<0?(t in n||(n[t]=o),n[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&i&&(l=l/100*(kt(i)?i[0]:i).totalDuration()),a>1?r(e,t.substr(0,a-1),i)+l:o+l)):t==null?o:+t},co=function(e,t,i){var n=cn(t[1]),s=(n?2:1)+(e<2?0:1),o=t[s],a,l;if(n&&(o.duration=t[1]),o.parent=i,e){for(a=o,l=i;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=si(l.vars.inherit)&&l.parent;o.immediateRender=si(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new St(t[0],o,t[s+1])},On=function(e,t){return e||e===0?t(e):t},go=function(e,t,i){return i<e?e:i>t?t:i},Ft=function(e,t){return!Ct(e)||!(t=I0.exec(e))?"":t[1]},W0=function(e,t,i){return On(i,function(n){return go(e,t,n)})},Bh=[].slice,Bf=function(e,t){return e&&Wi(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Wi(e[0]))&&!e.nodeType&&e!==Vi},X0=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(n){var s;return Ct(n)&&!t||Bf(n,1)?(s=i).push.apply(s,Ci(n)):i.push(n)})||i},Ci=function(e,t,i){return ft&&!t&&ft.selector?ft.selector(e):Ct(e)&&!i&&(Oh||!is())?Bh.call((t||Yh).querySelectorAll(e),0):kt(e)?X0(e,i):Bf(e)?Bh.call(e,0):e?[e]:[]},kh=function(e){return e=Ci(e)[0]||uo("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return Ci(t,i.querySelectorAll?i:i===e?uo("Invalid scope")||Yh.createElement("div"):e)}},kf=function(e){return e.sort(function(){return .5-Math.random()})},Hf=function(e){if(yt(e))return e;var t=Wi(e)?e:{each:e},i=cr(t.ease),n=t.from||0,s=parseFloat(t.base)||0,o={},a=n>0&&n<1,l=isNaN(n)||a,c=t.axis,h=n,u=n;return Ct(n)?h=u={center:.5,edges:.5,end:1}[n]||0:!a&&l&&(h=n[0],u=n[1]),function(d,f,_){var g=(_||t).length,m=o[g],p,M,b,S,T,C,P,I,x;if(!m){if(x=t.grid==="auto"?0:(t.grid||[1,Ai])[1],!x){for(P=-Ai;P<(P=_[x++].getBoundingClientRect().left)&&x<g;);x<g&&x--}for(m=o[g]=[],p=l?Math.min(x,g)*h-.5:n%x,M=x===Ai?0:l?g*u/x-.5:n/x|0,P=0,I=Ai,C=0;C<g;C++)b=C%x-p,S=M-(C/x|0),m[C]=T=c?Math.abs(c==="y"?S:b):Ef(b*b+S*S),T>P&&(P=T),T<I&&(I=T);n==="random"&&kf(m),m.max=P-I,m.min=I,m.v=g=(parseFloat(t.amount)||parseFloat(t.each)*(x>g?g-1:c?c==="y"?g/x:x:Math.max(x,g/x))||0)*(n==="edges"?-1:1),m.b=g<0?s-g:s,m.u=Ft(t.amount||t.each)||0,i=i&&g<0?Zf(i):i}return g=(m[d]-m.min)/m.max||0,It(m.b+(i?i(g):g)*m.v)+m.u}},Hh=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var n=It(Math.round(parseFloat(i)/e)*e*t);return(n-n%1)/t+(cn(i)?0:Ft(i))}},zf=function(e,t){var i=kt(e),n,s;return!i&&Wi(e)&&(n=i=e.radius||Ai,e.values?(e=Ci(e.values),(s=!cn(e[0]))&&(n*=n)):e=Hh(e.increment)),On(t,i?yt(e)?function(o){return s=e(o),Math.abs(s-o)<=n?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=Ai,h=0,u=e.length,d,f;u--;)s?(d=e[u].x-a,f=e[u].y-l,d=d*d+f*f):d=Math.abs(e[u]-a),d<c&&(c=d,h=u);return h=!n||c<=n?e[h]:o,s||h===o||cn(o)?h:h+Ft(o)}:Hh(e))},Vf=function(e,t,i,n){return On(kt(e)?!t:i===!0?!!(i=0):!n,function(){return kt(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(n=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*n)/n})},q0=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(n){return t.reduce(function(s,o){return o(s)},n)}},Y0=function(e,t){return function(i){return e(parseFloat(i))+(t||Ft(i))}},j0=function(e,t,i){return Wf(e,t,0,1,i)},Gf=function(e,t,i){return On(i,function(n){return e[~~t(n)]})},Z0=function r(e,t,i){var n=t-e;return kt(e)?Gf(e,r(0,e.length),t):On(i,function(s){return(n+(s-e)%n)%n+e})},$0=function r(e,t,i){var n=t-e,s=n*2;return kt(e)?Gf(e,r(0,e.length-1),t):On(i,function(o){return o=(s+(o-e)%s)%s||0,e+(o>n?s-o:o)})},ns=function(e){for(var t=0,i="",n,s,o,a;~(n=e.indexOf("random(",t));)o=e.indexOf(")",n),a=e.charAt(n+7)==="[",s=e.substr(n+7,o-n-7).match(a?Tf:Dh),i+=e.substr(t,n-t)+Vf(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),t=o+1;return i+e.substr(t,e.length-t)},Wf=function(e,t,i,n,s){var o=t-e,a=n-i;return On(s,function(l){return i+((l-e)/o*a||0)})},K0=function r(e,t,i,n){var s=isNaN(e+t)?0:function(f){return(1-f)*e+f*t};if(!s){var o=Ct(e),a={},l,c,h,u,d;if(i===!0&&(n=1)&&(i=null),o)e={p:e},t={p:t};else if(kt(e)&&!kt(t)){for(h=[],u=e.length,d=u-2,c=1;c<u;c++)h.push(r(e[c-1],e[c]));u--,s=function(_){_*=u;var g=Math.min(d,~~_);return h[g](_-g)},i=t}else n||(e=ur(kt(e)?[]:{},e));if(!h){for(l in t)eu.call(a,e,l,"get",t[l]);s=function(_){return su(_,a)||(o?e.p:e)}}}return On(i,s)},bf=function(e,t,i){var n=e.labels,s=Ai,o,a,l;for(o in n)a=n[o]-t,a<0==!!i&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},pi=function(e,t,i){var n=e.vars,s=n[t],o=ft,a=e._ctx,l,c,h;if(s)return l=n[t+"Params"],c=n.callbackScope||e,i&&Ln.length&&Da(),a&&(ft=a),h=l?s.apply(c,l):s.call(c),ft=o,h},oo=function(e){return Dn(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Bt),e.progress()<1&&pi(e,"onInterrupt"),e},Xf=[],qf=function(e){if(e)if(e=!e.name&&e.default||e,Wh()||e.headless){var t=e.name,i=yt(e),n=t&&!i&&e.init?function(){this._props=[]}:e,s={init:fo,render:su,add:eu,kill:f_,modifier:d_,rawVars:0},o={targetTest:0,get:0,getSetter:Va,aliases:{},register:0};if(is(),e!==n){if(ni[t])return;Ri(n,Ri(Oa(e,s),o)),ur(n.prototype,ur(s,Oa(e,o))),ni[n.prop=t]=n,e.targetTest&&(Pa.push(n),jh[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Rf(t,n),e.register&&e.register(Ht,n,Kt)}else Xf.push(e)},st=255,ao={aqua:[0,st,st],lime:[0,st,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,st],navy:[0,0,128],white:[st,st,st],olive:[128,128,0],yellow:[st,st,0],orange:[st,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[st,0,0],pink:[st,192,203],cyan:[0,st,st],transparent:[st,st,st,0]},Ah=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*st+.5|0},Yf=function(e,t,i){var n=e?cn(e)?[e>>16,e>>8&st,e&st]:0:ao.black,s,o,a,l,c,h,u,d,f,_;if(!n){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),ao[e])n=ao[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return n=parseInt(e.substr(1,6),16),[n>>16,n>>8&st,n&st,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),n=[e>>16,e>>8&st,e&st]}else if(e.substr(0,3)==="hsl"){if(n=_=e.match(Dh),!t)l=+n[0]%360/360,c=+n[1]/100,h=+n[2]/100,o=h<=.5?h*(c+1):h+c-h*c,s=h*2-o,n.length>3&&(n[3]*=1),n[0]=Ah(l+1/3,s,o),n[1]=Ah(l,s,o),n[2]=Ah(l-1/3,s,o);else if(~e.indexOf("="))return n=e.match(Xh),i&&n.length<4&&(n[3]=1),n}else n=e.match(Dh)||ao.transparent;n=n.map(Number)}return t&&!_&&(s=n[0]/st,o=n[1]/st,a=n[2]/st,u=Math.max(s,o,a),d=Math.min(s,o,a),h=(u+d)/2,u===d?l=c=0:(f=u-d,c=h>.5?f/(2-u-d):f/(u+d),l=u===s?(o-a)/f+(o<a?6:0):u===o?(a-s)/f+2:(s-o)/f+4,l*=60),n[0]=~~(l+.5),n[1]=~~(c*100+.5),n[2]=~~(h*100+.5)),i&&n.length<4&&(n[3]=1),n},jf=function(e){var t=[],i=[],n=-1;return e.split(ln).forEach(function(s){var o=s.match(dr)||[];t.push.apply(t,o),i.push(n+=o.length+1)}),t.c=i,t},xf=function(e,t,i){var n="",s=(e+n).match(ln),o=t?"hsla(":"rgba(",a=0,l,c,h,u;if(!s)return e;if(s=s.map(function(d){return(d=Yf(d,t,1))&&o+(t?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),i&&(h=jf(e),l=i.c,l.join(n)!==h.c.join(n)))for(c=e.replace(ln,"1").split(dr),u=c.length-1;a<u;a++)n+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(h.length?h:s.length?s:i).shift());if(!c)for(c=e.split(ln),u=c.length-1;a<u;a++)n+=c[a]+s[a];return n+c[u]},ln=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in ao)r+="|"+e+"\\b";return new RegExp(r+")","gi")}(),J0=/hsl[a]?\(/,Jh=function(e){var t=e.join(" "),i;if(ln.lastIndex=0,ln.test(t))return i=J0.test(t),e[1]=xf(e[1],i),e[0]=xf(e[0],i,jf(e[1])),!0},ri=function(){var r=Date.now,e=500,t=33,i=r(),n=i,s=1e3/240,o=s,a=[],l,c,h,u,d,f,_=function g(m){var p=r()-n,M=m===!0,b,S,T,C;if((p>e||p<0)&&(i+=p-t),n+=p,T=n-i,b=T-o,(b>0||M)&&(C=++u.frame,d=T-u.time*1e3,u.time=T=T/1e3,o+=b+(b>=s?4:s-b),S=1),M||(l=c(g)),S)for(f=0;f<a.length;f++)a[f](T,d,C,m)};return u={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(m){return d/(1e3/(m||60))},wake:function(){Af&&(!Oh&&Wh()&&(Vi=Oh=window,Yh=Vi.document||{},mi.gsap=Ht,(Vi.gsapVersions||(Vi.gsapVersions=[])).push(Ht.version),Cf(Ia||Vi.GreenSockGlobals||!Vi.gsap&&Vi||{}),Xf.forEach(qf)),h=typeof requestAnimationFrame!="undefined"&&requestAnimationFrame,l&&u.sleep(),c=h||function(m){return setTimeout(m,o-u.time*1e3+1|0)},po=1,_(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),po=0,c=fo},lagSmoothing:function(m,p){e=m||1/0,t=Math.min(p||33,e)},fps:function(m){s=1e3/(m||240),o=u.time*1e3+s},add:function(m,p,M){var b=p?function(S,T,C,P){m(S,T,C,P),u.remove(b)}:m;return u.remove(m),a[M?"unshift":"push"](b),is(),b},remove:function(m,p){~(p=a.indexOf(m))&&a.splice(p,1)&&f>=p&&f--},_listeners:a},u}(),is=function(){return!po&&ri.wake()},Ze={},Q0=/^[\d.\-M][\d.\-,\s]/,e_=/["']/g,t_=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),n=i[0],s=1,o=i.length,a,l,c;s<o;s++)l=i[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[n]=isNaN(c)?c.replace(e_,"").trim():+c,n=l.substr(a+1).trim();return t},i_=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),n=e.indexOf("(",t);return e.substring(t,~n&&n<i?e.indexOf(")",i+1):i)},n_=function(e){var t=(e+"").split("("),i=Ze[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[t_(t[1])]:i_(e).split(",").map(If)):Ze._CE&&Q0.test(e)?Ze._CE("",e):i},Zf=function(e){return function(t){return 1-e(1-t)}},$f=function r(e,t){for(var i=e._first,n;i;)i instanceof Ot?r(i,t):i.vars.yoyoEase&&(!i._yoyo||!i._repeat)&&i._yoyo!==t&&(i.timeline?r(i.timeline,t):(n=i._ease,i._ease=i._yEase,i._yEase=n,i._yoyo=t)),i=i._next},cr=function(e,t){return e&&(yt(e)?e:Ze[e]||n_(e))||t},pr=function(e,t,i,n){i===void 0&&(i=function(l){return 1-t(1-l)}),n===void 0&&(n=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:i,easeInOut:n},o;return $t(e,function(a){Ze[a]=mi[a]=s,Ze[o=a.toLowerCase()]=i;for(var l in s)Ze[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Ze[a+"."+l]=s[l]}),s},Kf=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Ch=function r(e,t,i){var n=t>=1?t:1,s=(i||(e?.3:.45))/(t<1?t:1),o=s/Ih*(Math.asin(1/n)||0),a=function(h){return h===1?1:n*Math.pow(2,-10*h)*L0((h-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:Kf(a);return s=Ih/s,l.config=function(c,h){return r(e,c,h)},l},Rh=function r(e,t){t===void 0&&(t=1.70158);var i=function(o){return o?--o*o*((t+1)*o+t)+1:0},n=e==="out"?i:e==="in"?function(s){return 1-i(1-s)}:Kf(i);return n.config=function(s){return r(e,s)},n};$t("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;pr(r+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});Ze.Linear.easeNone=Ze.none=Ze.Linear.easeIn;pr("Elastic",Ch("in"),Ch("out"),Ch());(function(r,e){var t=1/e,i=2*t,n=2.5*t,s=function(a){return a<t?r*a*a:a<i?r*Math.pow(a-1.5/e,2)+.75:a<n?r*(a-=2.25/e)*a+.9375:r*Math.pow(a-2.625/e,2)+.984375};pr("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);pr("Expo",function(r){return r?Math.pow(2,10*(r-1)):0});pr("Circ",function(r){return-(Ef(1-r*r)-1)});pr("Sine",function(r){return r===1?1:-P0(r*C0)+1});pr("Back",Rh("in"),Rh("out"),Rh());Ze.SteppedEase=Ze.steps=mi.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,n=e+(t?0:1),s=t?1:0,o=1-ht;return function(a){return((n*go(0,o,a)|0)+s)*i}}};Qr.ease=Ze["quad.out"];$t("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Zh+=r+","+r+"Params,"});Qh=function(e,t){this.id=R0++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Kh,this.set=t?t.getSetter:Va},mo=function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,ts(this,+t.duration,1,1),this.data=t.data,ft&&(this._ctx=ft,ft.data.push(this)),po||ri.wake()}var e=r.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,ts(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,n){if(is(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(za(this,i),!s._dp||s.parent||Ff(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&Gi(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!n||this._initted&&Math.abs(this._zTime)===ht||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),Lf(this,i,n)),this},e.time=function(i,n){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+_f(this))%(this._dur+this._rDelay)||(i?this._dur:0),n):this._time},e.totalProgress=function(i,n){return arguments.length?this.totalTime(this.totalDuration()*i,n):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>0?1:0},e.progress=function(i,n){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+_f(this),n):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,n){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,n):this._repeat?es(this._tTime,s)+1:1},e.timeScale=function(i,n){if(!arguments.length)return this._rts===-ht?0:this._rts;if(this._rts===i)return this;var s=this.parent&&this._ts?Fa(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-ht?0:this._rts,this.totalTime(go(-Math.abs(this._delay),this._tDur,s),n!==!1),Ha(this),B0(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(is(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==ht&&(this._tTime-=ht)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=i;var n=this.parent||this._dp;return n&&(n._sort||!this.parent)&&Gi(n,this,i-this._delay),this}return this._start},e.endTime=function(i){return this._start+(si(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var n=this.parent||this._dp;return n?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Fa(n.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=O0);var n=Bt;return Bt=i,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),Bt=n,this},e.globalTime=function(i){for(var n=this,s=arguments.length?i:n.rawTime();n;)s=n._start+s/(Math.abs(n._ts)||1),n=n._dp;return!this.parent&&this._sat?this._sat.globalTime(i):s},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,yf(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var n=this._time;return this._rDelay=i,yf(this),n?this.time(n):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,n){return this.totalTime(Ti(this,i),si(n))},e.restart=function(i,n){return this.play().totalTime(i?-this._delay:0,si(n))},e.play=function(i,n){return i!=null&&this.seek(i,n),this.reversed(!1).paused(!1)},e.reverse=function(i,n){return i!=null&&this.seek(i||this.totalDuration(),n),this.reversed(!0).paused(!1)},e.pause=function(i,n){return i!=null&&this.seek(i,n),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-ht:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-ht,this},e.isActive=function(){var i=this.parent||this._dp,n=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=n&&s<this.endTime(!0)-ht)},e.eventCallback=function(i,n,s){var o=this.vars;return arguments.length>1?(n?(o[i]=n,s&&(o[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=n)):delete o[i],this):o[i]},e.then=function(i){var n=this;return new Promise(function(s){var o=yt(i)?i:Df,a=function(){var c=n.then;n.then=null,yt(o)&&(o=o(n))&&(o.then||o===n)&&(n.then=c),s(o),n.then=c};n._initted&&n.totalProgress()===1&&n._ts>=0||!n._tTime&&n._ts<0?a():n._prom=a})},e.kill=function(){oo(this)},r}();Ri(mo.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-ht,_prom:0,_ps:!1,_rts:1});Ot=function(r){Mf(e,r);function e(i,n){var s;return i===void 0&&(i={}),s=r.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=si(i.sortChildren),gt&&Gi(i.parent||gt,an(s),n),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&Nf(an(s),i.scrollTrigger),s}var t=e.prototype;return t.to=function(n,s,o){return co(0,arguments,this),this},t.from=function(n,s,o){return co(1,arguments,this),this},t.fromTo=function(n,s,o,a){return co(2,arguments,this),this},t.set=function(n,s,o){return s.duration=0,s.parent=this,lo(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new St(n,s,Ti(this,o),1),this},t.call=function(n,s,o){return Gi(this,St.delayedCall(0,n,s),o)},t.staggerTo=function(n,s,o,a,l,c,h){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=h,o.parent=this,new St(n,o,Ti(this,l)),this},t.staggerFrom=function(n,s,o,a,l,c,h){return o.runBackwards=1,lo(o).immediateRender=si(o.immediateRender),this.staggerTo(n,s,o,a,l,c,h)},t.staggerFromTo=function(n,s,o,a,l,c,h,u){return a.startAt=o,lo(a).immediateRender=si(a.immediateRender),this.staggerTo(n,s,a,l,c,h,u)},t.render=function(n,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=n<=0?0:It(n),u=this._zTime<0!=n<0&&(this._initted||!c),d,f,_,g,m,p,M,b,S,T,C,P;if(this!==gt&&h>l&&n>=0&&(h=l),h!==this._tTime||o||u){if(a!==this._time&&c&&(h+=this._time-a,n+=this._time-a),d=h,S=this._start,b=this._ts,p=!b,u&&(c||(a=this._zTime),(n||!s)&&(this._zTime=n)),this._repeat){if(C=this._yoyo,m=c+this._rDelay,this._repeat<-1&&n<0)return this.totalTime(m*100+n,s,o);if(d=It(h%m),h===l?(g=this._repeat,d=c):(g=~~(h/m),g&&g===h/m&&(d=c,g--),d>c&&(d=c)),T=es(this._tTime,m),!a&&this._tTime&&T!==g&&this._tTime-T*m-this._dur<=0&&(T=g),C&&g&1&&(d=c-d,P=1),g!==T&&!this._lock){var I=C&&T&1,x=I===(C&&g&1);if(g<T&&(I=!I),a=I?0:h%c?c:h,this._lock=1,this.render(a||(P?0:It(g*m)),s,!c)._lock=0,this._tTime=h,!s&&this.parent&&pi(this,"onRepeat"),this.vars.repeatRefresh&&!P&&(this.invalidate()._lock=1),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,x&&(this._lock=2,a=I?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!P&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;$f(this,P)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(M=V0(this,It(a),It(d)),M&&(h-=d-(d=M._start))),this._tTime=h,this._time=d,this._act=!b,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=n,a=0),!a&&d&&!s&&!g&&(pi(this,"onStart"),this._tTime!==h))return this;if(d>=a&&n>=0)for(f=this._first;f;){if(_=f._next,(f._act||d>=f._start)&&f._ts&&M!==f){if(f.parent!==this)return this.render(n,s,o);if(f.render(f._ts>0?(d-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(d-f._start)*f._ts,s,o),d!==this._time||!this._ts&&!p){M=0,_&&(h+=this._zTime=-ht);break}}f=_}else{f=this._last;for(var E=n<0?n:d;f;){if(_=f._prev,(f._act||E<=f._end)&&f._ts&&M!==f){if(f.parent!==this)return this.render(n,s,o);if(f.render(f._ts>0?(E-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(E-f._start)*f._ts,s,o||Bt&&(f._initted||f._startAt)),d!==this._time||!this._ts&&!p){M=0,_&&(h+=this._zTime=E?-ht:ht);break}}f=_}}if(M&&!s&&(this.pause(),M.render(d>=a?0:-ht)._zTime=d>=a?1:-1,this._ts))return this._start=S,Ha(this),this.render(n,s,o);this._onUpdate&&!s&&pi(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&a)&&(S===this._start||Math.abs(b)!==Math.abs(this._ts))&&(this._lock||((n||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&Dn(this,1),!s&&!(n<0&&!a)&&(h||a||!l)&&(pi(this,h===l&&n>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(n,s){var o=this;if(cn(s)||(s=Ti(this,s,n)),!(n instanceof mo)){if(kt(n))return n.forEach(function(a){return o.add(a,s)}),this;if(Ct(n))return this.addLabel(n,s);if(yt(n))n=St.delayedCall(0,n);else return this}return this!==n?Gi(this,n,s):this},t.getChildren=function(n,s,o,a){n===void 0&&(n=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-Ai);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof St?s&&l.push(c):(o&&l.push(c),n&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(n){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===n)return s[o]},t.remove=function(n){return Ct(n)?this.removeLabel(n):yt(n)?this.killTweensOf(n):(ka(this,n),n===this._recent&&(this._recent=this._last),lr(this))},t.totalTime=function(n,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=It(ri.time-(this._ts>0?n/this._ts:(this.totalDuration()-n)/-this._ts))),r.prototype.totalTime.call(this,n,s),this._forcing=0,this):this._tTime},t.addLabel=function(n,s){return this.labels[n]=Ti(this,s),this},t.removeLabel=function(n){return delete this.labels[n],this},t.addPause=function(n,s,o){var a=St.delayedCall(0,s||fo,o);return a.data="isPause",this._hasPause=1,Gi(this,a,Ti(this,n))},t.removePause=function(n){var s=this._first;for(n=Ti(this,n);s;)s._start===n&&s.data==="isPause"&&Dn(s),s=s._next},t.killTweensOf=function(n,s,o){for(var a=this.getTweensOf(n,o),l=a.length;l--;)Pn!==a[l]&&a[l].kill(n,s);return this},t.getTweensOf=function(n,s){for(var o=[],a=Ci(n),l=this._first,c=cn(s),h;l;)l instanceof St?F0(l._targets,a)&&(c?(!Pn||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(h=l.getTweensOf(a,s)).length&&o.push.apply(o,h),l=l._next;return o},t.tweenTo=function(n,s){s=s||{};var o=this,a=Ti(o,n),l=s,c=l.startAt,h=l.onStart,u=l.onStartParams,d=l.immediateRender,f,_=St.to(o,Ri({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||ht,onStart:function(){if(o.pause(),!f){var m=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());_._dur!==m&&ts(_,m,0,1).render(_._time,!0,!0),f=1}h&&h.apply(_,u||[])}},s));return d?_.render(0):_},t.tweenFromTo=function(n,s,o){return this.tweenTo(s,Ri({startAt:{time:Ti(this,n)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(n){return n===void 0&&(n=this._time),bf(this,Ti(this,n))},t.previousLabel=function(n){return n===void 0&&(n=this._time),bf(this,Ti(this,n),1)},t.currentLabel=function(n){return arguments.length?this.seek(n,!0):this.previousLabel(this._time+ht)},t.shiftChildren=function(n,s,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=n,a._end+=n),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=n);return lr(this)},t.invalidate=function(n){var s=this._first;for(this._lock=0;s;)s.invalidate(n),s=s._next;return r.prototype.invalidate.call(this,n)},t.clear=function(n){n===void 0&&(n=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),n&&(this.labels={}),lr(this)},t.totalDuration=function(n){var s=0,o=this,a=o._last,l=Ai,c,h,u;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-n:n));if(o._dirty){for(u=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),h=a._start,h>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Gi(o,a,h-a._delay,1)._lock=0):l=h,h<0&&a._ts&&(s-=h,(!u&&!o._dp||u&&u.smoothChildTiming)&&(o._start+=h/o._ts,o._time-=h,o._tTime-=h),o.shiftChildren(-h,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;ts(o,o===gt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(n){if(gt._ts&&(Lf(gt,Fa(n,gt)),Pf=ri.frame),ri.frame>=gf){gf+=oi.autoSleep||120;var s=gt._first;if((!s||!s._ts)&&oi.autoSleep&&ri._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||ri.sleep()}}},e}(mo);Ri(Ot.prototype,{_lock:0,_hasPause:0,_forcing:0});r_=function(e,t,i,n,s,o,a){var l=new Kt(this._pt,e,t,0,1,ru,null,s),c=0,h=0,u,d,f,_,g,m,p,M;for(l.b=i,l.e=n,i+="",n+="",(p=~n.indexOf("random("))&&(n=ns(n)),o&&(M=[i,n],o(M,e,t),i=M[0],n=M[1]),d=i.match(wh)||[];u=wh.exec(n);)_=u[0],g=n.substring(c,u.index),f?f=(f+1)%5:g.substr(-5)==="rgba("&&(f=1),_!==d[h++]&&(m=parseFloat(d[h-1])||0,l._pt={_next:l._pt,p:g||h===1?g:",",s:m,c:_.charAt(1)==="="?fr(m,_)-m:parseFloat(_)-m,m:f&&f<4?Math.round:0},c=wh.lastIndex);return l.c=c<n.length?n.substring(c,n.length):"",l.fp=a,(qh.test(n)||p)&&(l.e=0),this._pt=l,l},eu=function(e,t,i,n,s,o,a,l,c,h){yt(n)&&(n=n(s||0,e,o));var u=e[t],d=i!=="get"?i:yt(u)?c?e[t.indexOf("set")||!yt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():u,f=yt(u)?c?c_:ep:nu,_;if(Ct(n)&&(~n.indexOf("random(")&&(n=ns(n)),n.charAt(1)==="="&&(_=fr(d,n)+(Ft(d)||0),(_||_===0)&&(n=_))),!h||d!==n||zh)return!isNaN(d*n)&&n!==""?(_=new Kt(this._pt,e,t,+d||0,n-(d||0),typeof u=="boolean"?u_:tp,0,f),c&&(_.fp=c),a&&_.modifier(a,this,e),this._pt=_):(!u&&!(t in e)&&Ba(t,n),r_.call(this,e,t,d,n,f,l||oi.stringFilter,c))},s_=function(e,t,i,n,s){if(yt(e)&&(e=ho(e,s,t,i,n)),!Wi(e)||e.style&&e.nodeType||kt(e)||wf(e))return Ct(e)?ho(e,s,t,i,n):e;var o={},a;for(a in e)o[a]=ho(e[a],s,t,i,n);return o},tu=function(e,t,i,n,s,o){var a,l,c,h;if(ni[e]&&(a=new ni[e]).init(s,a.rawVars?t[e]:s_(t[e],n,s,o,i),i,n,o)!==!1&&(i._pt=l=new Kt(i._pt,s,e,0,1,a.render,a,0,a.priority),i!==Jr))for(c=i._ptLookup[i._targets.indexOf(s)],h=a._props.length;h--;)c[a._props[h]]=l;return a},iu=function r(e,t,i){var n=e.vars,s=n.ease,o=n.startAt,a=n.immediateRender,l=n.lazy,c=n.onUpdate,h=n.runBackwards,u=n.yoyoEase,d=n.keyframes,f=n.autoRevert,_=e._dur,g=e._startAt,m=e._targets,p=e.parent,M=p&&p.data==="nested"?p.vars.targets:m,b=e._overwrite==="auto"&&!Gh,S=e.timeline,T,C,P,I,x,E,O,H,W,$,K,q,oe;if(S&&(!d||!s)&&(s="none"),e._ease=cr(s,Qr.ease),e._yEase=u?Zf(cr(u===!0?s:u,Qr.ease)):0,u&&e._yoyo&&!e._repeat&&(u=e._yEase,e._yEase=e._ease,e._ease=u),e._from=!S&&!!n.runBackwards,!S||d&&!n.stagger){if(H=m[0]?In(m[0]).harness:0,q=H&&n[H.prop],T=Oa(n,jh),g&&(g._zTime<0&&g.progress(1),t<0&&h&&a&&!f?g.render(-1,!0):g.revert(h&&_?Ra:D0),g._lazy=0),o){if(Dn(e._startAt=St.set(m,Ri({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!g&&si(l),startAt:null,delay:0,onUpdate:c&&function(){return pi(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Bt||!a&&!f)&&e._startAt.revert(Ra),a&&_&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(h&&_&&!g){if(t&&(a=!1),P=Ri({overwrite:!1,data:"isFromStart",lazy:a&&!g&&si(l),immediateRender:a,stagger:0,parent:p},T),q&&(P[H.prop]=q),Dn(e._startAt=St.set(m,P)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Bt?e._startAt.revert(Ra):e._startAt.render(-1,!0)),e._zTime=t,!a)r(e._startAt,ht,ht);else if(!t)return}for(e._pt=e._ptCache=0,l=_&&si(l)||l&&!_,C=0;C<m.length;C++){if(x=m[C],O=x._gsap||$h(m)[C]._gsap,e._ptLookup[C]=$={},Fh[O.id]&&Ln.length&&Da(),K=M===m?C:M.indexOf(x),H&&(W=new H).init(x,q||T,e,K,M)!==!1&&(e._pt=I=new Kt(e._pt,x,W.name,0,1,W.render,W,0,W.priority),W._props.forEach(function(X){$[X]=I}),W.priority&&(E=1)),!H||q)for(P in T)ni[P]&&(W=tu(P,T,e,K,x,M))?W.priority&&(E=1):$[P]=I=eu.call(e,x,P,"get",T[P],K,M,0,n.stringFilter);e._op&&e._op[C]&&e.kill(x,e._op[C]),b&&e._pt&&(Pn=e,gt.killTweensOf(x,$,e.globalTime(t)),oe=!e.parent,Pn=0),e._pt&&l&&(Fh[O.id]=1)}E&&ou(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!oe,d&&t<=0&&S.render(Ai,!0,!0)},o_=function(e,t,i,n,s,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],h,u,d,f;if(!c)for(c=e._ptCache[t]=[],d=e._ptLookup,f=e._targets.length;f--;){if(h=d[f][t],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==t&&h.fp!==t;)h=h._next;if(!h)return zh=1,e.vars[t]="+=0",iu(e,a),zh=0,l?uo(t+" not eligible for reset"):1;c.push(h)}for(f=c.length;f--;)u=c[f],h=u._pt||u,h.s=(n||n===0)&&!s?n:h.s+(n||0)+o*h.c,h.c=i-h.s,u.e&&(u.e=bt(i)+Ft(u.e)),u.b&&(u.b=h.s+Ft(u.b))},a_=function(e,t){var i=e[0]?In(e[0]).harness:0,n=i&&i.aliases,s,o,a,l;if(!n)return t;s=ur({},t);for(o in n)if(o in s)for(l=n[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},l_=function(e,t,i,n){var s=t.ease||n||"power1.inOut",o,a;if(kt(t))a=i[e]||(i[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(o in t)a=i[o]||(i[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},ho=function(e,t,i,n,s){return yt(e)?e.call(t,i,n,s):Ct(e)&&~e.indexOf("random(")?ns(e):e},Jf=Zh+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Qf={};$t(Jf+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return Qf[r]=1});St=function(r){Mf(e,r);function e(i,n,s,o){var a;typeof n=="number"&&(s.duration=n,n=s,s=null),a=r.call(this,o?n:lo(n))||this;var l=a.vars,c=l.duration,h=l.delay,u=l.immediateRender,d=l.stagger,f=l.overwrite,_=l.keyframes,g=l.defaults,m=l.scrollTrigger,p=l.yoyoEase,M=n.parent||gt,b=(kt(i)||wf(i)?cn(i[0]):"length"in n)?[i]:Ci(i),S,T,C,P,I,x,E,O;if(a._targets=b.length?$h(b):uo("GSAP target "+i+" not found. https://gsap.com",!oi.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=f,_||d||Ca(c)||Ca(h)){if(n=a.vars,S=a.timeline=new Ot({data:"nested",defaults:g||{},targets:M&&M.data==="nested"?M.vars.targets:b}),S.kill(),S.parent=S._dp=an(a),S._start=0,d||Ca(c)||Ca(h)){if(P=b.length,E=d&&Hf(d),Wi(d))for(I in d)~Jf.indexOf(I)&&(O||(O={}),O[I]=d[I]);for(T=0;T<P;T++)C=Oa(n,Qf),C.stagger=0,p&&(C.yoyoEase=p),O&&ur(C,O),x=b[T],C.duration=+ho(c,an(a),T,x,b),C.delay=(+ho(h,an(a),T,x,b)||0)-a._delay,!d&&P===1&&C.delay&&(a._delay=h=C.delay,a._start+=h,C.delay=0),S.to(x,C,E?E(T,x,b):0),S._ease=Ze.none;S.duration()?c=h=0:a.timeline=0}else if(_){lo(Ri(S.vars.defaults,{ease:"none"})),S._ease=cr(_.ease||n.ease||"none");var H=0,W,$,K;if(kt(_))_.forEach(function(q){return S.to(b,q,">")}),S.duration();else{C={};for(I in _)I==="ease"||I==="easeEach"||l_(I,_[I],C,_.easeEach);for(I in C)for(W=C[I].sort(function(q,oe){return q.t-oe.t}),H=0,T=0;T<W.length;T++)$=W[T],K={ease:$.e,duration:($.t-(T?W[T-1].t:0))/100*c},K[I]=$.v,S.to(b,K,H),H+=K.duration;S.duration()<c&&S.to({},{duration:c-S.duration()})}}c||a.duration(c=S.duration())}else a.timeline=0;return f===!0&&!Gh&&(Pn=an(a),gt.killTweensOf(b),Pn=0),Gi(M,an(a),s),n.reversed&&a.reverse(),n.paused&&a.paused(!0),(u||!c&&!_&&a._start===It(M._time)&&si(u)&&k0(an(a))&&M.data!=="nested")&&(a._tTime=-ht,a.render(Math.max(0,-h)||0)),m&&Nf(an(a),m),a}var t=e.prototype;return t.render=function(n,s,o){var a=this._time,l=this._tDur,c=this._dur,h=n<0,u=n>l-ht&&!h?l:n<ht?0:n,d,f,_,g,m,p,M,b,S;if(!c)z0(this,n,s,o);else if(u!==this._tTime||!n||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h){if(d=u,b=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(g*100+n,s,o);if(d=It(u%g),u===l?(_=this._repeat,d=c):(_=~~(u/g),_&&_===It(u/g)&&(d=c,_--),d>c&&(d=c)),p=this._yoyo&&_&1,p&&(S=this._yEase,d=c-d),m=es(this._tTime,g),d===a&&!o&&this._initted&&_===m)return this._tTime=u,this;_!==m&&(b&&this._yEase&&$f(b,p),this.vars.repeatRefresh&&!p&&!this._lock&&this._time!==g&&this._initted&&(this._lock=o=1,this.render(It(g*_),!0).invalidate()._lock=0))}if(!this._initted){if(Uf(this,h?n:d,o,s,u))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&_!==m))return this;if(c!==this._dur)return this.render(n,s,o)}if(this._tTime=u,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=M=(S||this._ease)(d/c),this._from&&(this.ratio=M=1-M),d&&!a&&!s&&!_&&(pi(this,"onStart"),this._tTime!==u))return this;for(f=this._pt;f;)f.r(M,f.d),f=f._next;b&&b.render(n<0?n:b._dur*b._ease(d/this._dur),s,o)||this._startAt&&(this._zTime=n),this._onUpdate&&!s&&(h&&Nh(this,n,s,o),pi(this,"onUpdate")),this._repeat&&_!==m&&this.vars.onRepeat&&!s&&this.parent&&pi(this,"onRepeat"),(u===this._tDur||!u)&&this._tTime===u&&(h&&!this._onUpdate&&Nh(this,n,!0,!0),(n||!c)&&(u===this._tDur&&this._ts>0||!u&&this._ts<0)&&Dn(this,1),!s&&!(h&&!a)&&(u||a||p)&&(pi(this,u===l?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(n){return(!n||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(n),r.prototype.invalidate.call(this,n)},t.resetTo=function(n,s,o,a,l){po||ri.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||iu(this,c),h=this._ease(c/this._dur),o_(this,n,s,o,a,h,c,l)?this.resetTo(n,s,o,a,1):(za(this,0),this.parent||Of(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(n,s){if(s===void 0&&(s="all"),!n&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?oo(this):this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(n,s,Pn&&Pn.vars.overwrite!==!0)._first||oo(this),this.parent&&o!==this.timeline.totalDuration()&&ts(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=n?Ci(n):a,c=this._ptLookup,h=this._pt,u,d,f,_,g,m,p;if((!s||s==="all")&&U0(a,l))return s==="all"&&(this._pt=0),oo(this);for(u=this._op=this._op||[],s!=="all"&&(Ct(s)&&(g={},$t(s,function(M){return g[M]=1}),s=g),s=a_(a,s)),p=a.length;p--;)if(~l.indexOf(a[p])){d=c[p],s==="all"?(u[p]=s,_=d,f={}):(f=u[p]=u[p]||{},_=s);for(g in _)m=d&&d[g],m&&((!("kill"in m.d)||m.d.kill(g)===!0)&&ka(this,m,"_pt"),delete d[g]),f!=="all"&&(f[g]=1)}return this._initted&&!this._pt&&h&&oo(this),this},e.to=function(n,s){return new e(n,s,arguments[2])},e.from=function(n,s){return co(1,arguments)},e.delayedCall=function(n,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:n,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(n,s,o){return co(2,arguments)},e.set=function(n,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(n,s)},e.killTweensOf=function(n,s,o){return gt.killTweensOf(n,s,o)},e}(mo);Ri(St.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});$t("staggerTo,staggerFrom,staggerFromTo",function(r){St[r]=function(){var e=new Ot,t=Bh.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});nu=function(e,t,i){return e[t]=i},ep=function(e,t,i){return e[t](i)},c_=function(e,t,i,n){return e[t](n.fp,i)},h_=function(e,t,i){return e.setAttribute(t,i)},Va=function(e,t){return yt(e[t])?ep:Ua(e[t])&&e.setAttribute?h_:nu},tp=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},u_=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},ru=function(e,t){var i=t._pt,n="";if(!e&&t.b)n=t.b;else if(e===1&&t.e)n=t.e;else{for(;i;)n=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+n,i=i._next;n+=t.c}t.set(t.t,t.p,n,t)},su=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},d_=function(e,t,i,n){for(var s=this._pt,o;s;)o=s._next,s.p===n&&s.modifier(e,t,i),s=o},f_=function(e){for(var t=this._pt,i,n;t;)n=t._next,t.p===e&&!t.op||t.op===e?ka(this,t,"_pt"):t.dep||(i=1),t=n;return!i},p_=function(e,t,i,n){n.mSet(e,t,n.m.call(n.tween,i,n.mt),n)},ou=function(e){for(var t=e._pt,i,n,s,o;t;){for(i=t._next,n=s;n&&n.pr>t.pr;)n=n._next;(t._prev=n?n._prev:o)?t._prev._next=t:s=t,(t._next=n)?n._prev=t:o=t,t=i}e._pt=s},Kt=function(){function r(t,i,n,s,o,a,l,c,h){this.t=i,this.s=s,this.c=o,this.p=n,this.r=a||tp,this.d=l||this,this.set=c||nu,this.pr=h||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(i,n,s){this.mSet=this.mSet||this.set,this.set=p_,this.m=i,this.mt=s,this.tween=n},r}();$t(Zh+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return jh[r]=1});mi.TweenMax=mi.TweenLite=St;mi.TimelineLite=mi.TimelineMax=Ot;gt=new Ot({sortChildren:!1,defaults:Qr,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});oi.stringFilter=Jh;hr=[],La={},m_=[],Sf=0,g_=0,Ph=function(e){return(La[e]||m_).map(function(t){return t()})},Vh=function(){var e=Date.now(),t=[];e-Sf>2&&(Ph("matchMediaInit"),hr.forEach(function(i){var n=i.queries,s=i.conditions,o,a,l,c;for(a in n)o=Vi.matchMedia(n[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(i.revert(),l&&t.push(i))}),Ph("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i,function(n){return i.add(null,n)})}),Sf=e,Ph("matchMedia"))},ip=function(){function r(t,i){this.selector=i&&kh(i),this.data=[],this._r=[],this.isReverted=!1,this.id=g_++,t&&this.add(t)}var e=r.prototype;return e.add=function(i,n,s){yt(i)&&(s=n,n=i,i=yt);var o=this,a=function(){var c=ft,h=o.selector,u;return c&&c!==o&&c.data.push(o),s&&(o.selector=kh(s)),ft=o,u=n.apply(o,arguments),yt(u)&&o._r.push(u),ft=c,o.selector=h,o.isReverted=!1,u};return o.last=a,i===yt?a(o,function(l){return o.add(null,l)}):i?o[i]=a:a},e.ignore=function(i){var n=ft;ft=null,i(this),ft=n},e.getTweens=function(){var i=[];return this.data.forEach(function(n){return n instanceof r?i.push.apply(i,n.getTweens()):n instanceof St&&!(n.parent&&n.parent.data==="nested")&&i.push(n)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,n){var s=this;if(i?function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return a.splice(a.indexOf(h),1)}));for(a.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,u){return u.g-h.g||-1/0}).forEach(function(h){return h.t.revert(i)}),l=s.data.length;l--;)c=s.data[l],c instanceof Ot?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof St)&&c.revert&&c.revert(i);s._r.forEach(function(h){return h(i,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),n)for(var o=hr.length;o--;)hr[o].id===this.id&&hr.splice(o,1)},e.revert=function(i){this.kill(i||{})},r}(),v_=function(){function r(t){this.contexts=[],this.scope=t,ft&&ft.data.push(this)}var e=r.prototype;return e.add=function(i,n,s){Wi(i)||(i={matches:i});var o=new ip(0,s||this.scope),a=o.conditions={},l,c,h;ft&&!o.selector&&(o.selector=ft.selector),this.contexts.push(o),n=o.add("onMatch",n),o.queries=i;for(c in i)c==="all"?h=1:(l=Vi.matchMedia(i[c]),l&&(hr.indexOf(o)<0&&hr.push(o),(a[c]=l.matches)&&(h=1),l.addListener?l.addListener(Vh):l.addEventListener("change",Vh)));return h&&n(o,function(u){return o.add(null,u)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(n){return n.kill(i,!0)})},r}(),Na={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(n){return qf(n)})},timeline:function(e){return new Ot(e)},getTweensOf:function(e,t){return gt.getTweensOf(e,t)},getProperty:function(e,t,i,n){Ct(e)&&(e=Ci(e)[0]);var s=In(e||{}).get,o=i?Df:If;return i==="native"&&(i=""),e&&(t?o((ni[t]&&ni[t].get||s)(e,t,i,n)):function(a,l,c){return o((ni[a]&&ni[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,i){if(e=Ci(e),e.length>1){var n=e.map(function(h){return Ht.quickSetter(h,t,i)}),s=n.length;return function(h){for(var u=s;u--;)n[u](h)}}e=e[0]||{};var o=ni[t],a=In(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(h){var u=new o;Jr._pt=0,u.init(e,i?h+i:h,Jr,0,[e]),u.render(1,u),Jr._pt&&su(1,Jr)}:a.set(e,l);return o?c:function(h){return c(e,l,i?h+i:h,a,1)}},quickTo:function(e,t,i){var n,s=Ht.to(e,ur((n={},n[t]="+=0.1",n.paused=!0,n),i||{})),o=function(l,c,h){return s.resetTo(t,l,c,h)};return o.tween=s,o},isTweening:function(e){return gt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=cr(e.ease,Qr.ease)),vf(Qr,e||{})},config:function(e){return vf(oi,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,n=e.plugins,s=e.defaults,o=e.extendTimeline;(n||"").split(",").forEach(function(a){return a&&!ni[a]&&!mi[a]&&uo(t+" effect requires "+a+" plugin.")}),Th[t]=function(a,l,c){return i(Ci(a),Ri(l||{},s),c)},o&&(Ot.prototype[t]=function(a,l,c){return this.add(Th[t](a,Wi(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){Ze[e]=cr(t)},parseEase:function(e,t){return arguments.length?cr(e,t):Ze},getById:function(e){return gt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new Ot(e),n,s;for(i.smoothChildTiming=si(e.smoothChildTiming),gt.remove(i),i._dp=0,i._time=i._tTime=gt._time,n=gt._first;n;)s=n._next,(t||!(!n._dur&&n instanceof St&&n.vars.onComplete===n._targets[0]))&&Gi(i,n,n._start-n._delay),n=s;return Gi(gt,i,0),i},context:function(e,t){return e?new ip(e,t):ft},matchMedia:function(e){return new v_(e)},matchMediaRefresh:function(){return hr.forEach(function(e){var t=e.conditions,i,n;for(n in t)t[n]&&(t[n]=!1,i=1);i&&e.revert()})||Vh()},addEventListener:function(e,t){var i=La[e]||(La[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=La[e],n=i&&i.indexOf(t);n>=0&&i.splice(n,1)},utils:{wrap:Z0,wrapYoyo:$0,distribute:Hf,random:Vf,snap:zf,normalize:j0,getUnit:Ft,clamp:W0,splitColor:Yf,toArray:Ci,selector:kh,mapRange:Wf,pipe:q0,unitize:Y0,interpolate:K0,shuffle:kf},install:Cf,effects:Th,ticker:ri,updateRoot:Ot.updateRoot,plugins:ni,globalTimeline:gt,core:{PropTween:Kt,globals:Rf,Tween:St,Timeline:Ot,Animation:mo,getCache:In,_removeLinkedListItem:ka,reverting:function(){return Bt},context:function(e){return e&&ft&&(ft.data.push(e),e._ctx=ft),ft},suppressOverwrites:function(e){return Gh=e}}};$t("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Na[r]=St[r]});ri.add(Ot.updateRoot);Jr=Na.to({},{duration:0});__=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},y_=function(e,t){var i=e._targets,n,s,o;for(n in t)for(s=i.length;s--;)o=e._ptLookup[s][n],o&&(o=o.d)&&(o._pt&&(o=__(o,n)),o&&o.modifier&&o.modifier(t[n],e,i[s],n))},Lh=function(e,t){return{name:e,rawVars:1,init:function(n,s,o){o._onInit=function(a){var l,c;if(Ct(s)&&(l={},$t(s,function(h){return l[h]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}y_(a,s)}}}},Ht=Na.registerPlugin({name:"attr",init:function(e,t,i,n,s){var o,a,l;this.tween=i;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],n,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var i=t._pt;i;)Bt?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},Lh("roundProps",Hh),Lh("modifiers"),Lh("snap",zf))||Na;St.version=Ot.version=Ht.version="3.12.5";Af=1;Wh()&&is();b_=Ze.Power0,x_=Ze.Power1,S_=Ze.Power2,M_=Ze.Power3,E_=Ze.Power4,w_=Ze.Linear,T_=Ze.Quad,A_=Ze.Cubic,C_=Ze.Quart,R_=Ze.Quint,P_=Ze.Strong,L_=Ze.Elastic,I_=Ze.Back,D_=Ze.SteppedEase,O_=Ze.Bounce,F_=Ze.Sine,N_=Ze.Expo,U_=Ze.Circ});var np,Fn,ss,pu,_r,B_,rp,mu,k_,un,vr,os,rs,sp,gu,H_,z_,Xi,hu,V_,G_,W_,dp,fp,X_,q_,Y_,j_,Z_,$_,vt,ai,K_,pp,J_,mp,gp,uu,qi,op,as,du,lu,ap,vp,_p,yr,Nn,lp,Q_,Un,hn,ey,cp,ty,iy,Ga,_o,yp,bp,hp,vu,fu,yo,Wa,cu,ny,mr,vo,gr,xp,ry,sy,up,oy,_u,Sp=Yt(()=>{au();k_=function(){return typeof window!="undefined"},un={},vr=180/Math.PI,os=Math.PI/180,rs=Math.atan2,sp=1e8,gu=/([A-Z])/g,H_=/(left|right|width|margin|padding|x)/i,z_=/[\s,\(]\S/,Xi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},hu=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},V_=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},G_=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},W_=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},dp=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},fp=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},X_=function(e,t,i){return e.style[t]=i},q_=function(e,t,i){return e.style.setProperty(t,i)},Y_=function(e,t,i){return e._gsap[t]=i},j_=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},Z_=function(e,t,i,n,s){var o=e._gsap;o.scaleX=o.scaleY=i,o.renderTransform(s,o)},$_=function(e,t,i,n,s){var o=e._gsap;o[t]=i,o.renderTransform(s,o)},vt="transform",ai=vt+"Origin",K_=function r(e,t){var i=this,n=this.target,s=n.style,o=n._gsap;if(e in un&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Xi[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return i.tfm[a]=hn(n,a)}):this.tfm[e]=o.x?o[e]:hn(n,e),e===ai&&(this.tfm.zOrigin=o.zOrigin);else return Xi.transform.split(",").forEach(function(a){return r.call(i,a,t)});if(this.props.indexOf(vt)>=0)return;o.svg&&(this.svgo=n.getAttribute("data-svg-origin"),this.props.push(ai,t,"")),e=vt}(s||t)&&this.props.push(e,t,s[e])},pp=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},J_=function(){var e=this.props,t=this.target,i=t.style,n=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?t[e[s]]=e[s+2]:e[s+2]?i[e[s]]=e[s+2]:i.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(gu,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)n[o]=this.tfm[o];n.svg&&(n.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=mu(),(!s||!s.isStart)&&!i[vt]&&(pp(i),n.zOrigin&&i[ai]&&(i[ai]+=" "+n.zOrigin+"px",n.zOrigin=0,n.renderTransform()),n.uncache=1)}},mp=function(e,t){var i={target:e,props:[],revert:J_,save:K_};return e._gsap||Ht.core.getCache(e),t&&t.split(",").forEach(function(n){return i.save(n)}),i},uu=function(e,t){var i=Fn.createElementNS?Fn.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Fn.createElement(e);return i&&i.style?i:Fn.createElement(e)},qi=function r(e,t,i){var n=getComputedStyle(e);return n[t]||n.getPropertyValue(t.replace(gu,"-$1").toLowerCase())||n.getPropertyValue(t)||!i&&r(e,as(t)||t,1)||""},op="O,Moz,ms,Ms,Webkit".split(","),as=function(e,t,i){var n=t||_r,s=n.style,o=5;if(e in s&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(op[o]+e in s););return o<0?null:(o===3?"ms":o>=0?op[o]:"")+e},du=function(){k_()&&window.document&&(np=window,Fn=np.document,ss=Fn.documentElement,_r=uu("div")||{style:{}},B_=uu("div"),vt=as(vt),ai=vt+"Origin",_r.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",gp=!!as("perspective"),mu=Ht.core.reverting,pu=1)},lu=function r(e){var t=uu("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=this.parentNode,n=this.nextSibling,s=this.style.cssText,o;if(ss.appendChild(t),t.appendChild(this),this.style.display="block",e)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=r}catch{}else this._gsapBBox&&(o=this._gsapBBox());return i&&(n?i.insertBefore(this,n):i.appendChild(this)),ss.removeChild(t),this.style.cssText=s,o},ap=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},vp=function(e){var t;try{t=e.getBBox()}catch{t=lu.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===lu||(t=lu.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+ap(e,["x","cx","x1"])||0,y:+ap(e,["y","cy","y1"])||0,width:0,height:0}:t},_p=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&vp(e))},yr=function(e,t){if(t){var i=e.style,n;t in un&&t!==ai&&(t=vt),i.removeProperty?(n=t.substr(0,2),(n==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(n==="--"?t:t.replace(gu,"-$1").toLowerCase())):i.removeAttribute(t)}},Nn=function(e,t,i,n,s,o){var a=new Kt(e._pt,t,i,0,1,o?fp:dp);return e._pt=a,a.b=n,a.e=s,e._props.push(i),a},lp={deg:1,rad:1,turn:1},Q_={grid:1,flex:1},Un=function r(e,t,i,n){var s=parseFloat(i)||0,o=(i+"").trim().substr((s+"").length)||"px",a=_r.style,l=H_.test(t),c=e.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),u=100,d=n==="px",f=n==="%",_,g,m,p;if(n===o||!s||lp[n]||lp[o])return s;if(o!=="px"&&!d&&(s=r(e,t,i,"px")),p=e.getCTM&&_p(e),(f||o==="%")&&(un[t]||~t.indexOf("adius")))return _=p?e.getBBox()[l?"width":"height"]:e[h],bt(f?s/_*u:s/100*_);if(a[l?"width":"height"]=u+(d?o:n),g=~t.indexOf("adius")||n==="em"&&e.appendChild&&!c?e:e.parentNode,p&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===Fn||!g.appendChild)&&(g=Fn.body),m=g._gsap,m&&f&&m.width&&l&&m.time===ri.time&&!m.uncache)return bt(s/m.width*u);if(f&&(t==="height"||t==="width")){var M=e.style[t];e.style[t]=u+n,_=e[h],M?e.style[t]=M:yr(e,t)}else(f||o==="%")&&!Q_[qi(g,"display")]&&(a.position=qi(e,"position")),g===e&&(a.position="static"),g.appendChild(_r),_=_r[h],g.removeChild(_r),a.position="absolute";return l&&f&&(m=In(g),m.time=ri.time,m.width=g[h]),bt(d?_*s/u:_&&s?u/_*s:0)},hn=function(e,t,i,n){var s;return pu||du(),t in Xi&&t!=="transform"&&(t=Xi[t],~t.indexOf(",")&&(t=t.split(",")[0])),un[t]&&t!=="transform"?(s=yo(e,n),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Wa(qi(e,ai))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||n||~(s+"").indexOf("calc("))&&(s=Ga[t]&&Ga[t](e,t,i)||qi(e,t)||Kh(e,t)||(t==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?Un(e,t,s,i)+i:s},ey=function(e,t,i,n){if(!i||i==="none"){var s=as(t,e,1),o=s&&qi(e,s,1);o&&o!==i?(t=s,i=o):t==="borderColor"&&(i=qi(e,"borderTopColor"))}var a=new Kt(this._pt,e.style,t,0,1,ru),l=0,c=0,h,u,d,f,_,g,m,p,M,b,S,T;if(a.b=i,a.e=n,i+="",n+="",n==="auto"&&(g=e.style[t],e.style[t]=n,n=qi(e,t)||n,g?e.style[t]=g:yr(e,t)),h=[i,n],Jh(h),i=h[0],n=h[1],d=i.match(dr)||[],T=n.match(dr)||[],T.length){for(;u=dr.exec(n);)m=u[0],M=n.substring(l,u.index),_?_=(_+1)%5:(M.substr(-5)==="rgba("||M.substr(-5)==="hsla(")&&(_=1),m!==(g=d[c++]||"")&&(f=parseFloat(g)||0,S=g.substr((f+"").length),m.charAt(1)==="="&&(m=fr(f,m)+S),p=parseFloat(m),b=m.substr((p+"").length),l=dr.lastIndex-b.length,b||(b=b||oi.units[t]||S,l===n.length&&(n+=b,a.e+=b)),S!==b&&(f=Un(e,t,g,b)||0),a._pt={_next:a._pt,p:M||c===1?M:",",s:f,c:p-f,m:_&&_<4||t==="zIndex"?Math.round:0});a.c=l<n.length?n.substring(l,n.length):""}else a.r=t==="display"&&n==="none"?fp:dp;return qh.test(n)&&(a.e=0),this._pt=a,a},cp={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},ty=function(e){var t=e.split(" "),i=t[0],n=t[1]||"50%";return(i==="top"||i==="bottom"||n==="left"||n==="right")&&(e=i,i=n,n=e),t[0]=cp[i]||i,t[1]=cp[n]||n,t.join(" ")},iy=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,n=i.style,s=t.u,o=i._gsap,a,l,c;if(s==="all"||s===!0)n.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],un[a]&&(l=1,a=a==="transformOrigin"?ai:vt),yr(i,a);l&&(yr(i,vt),o&&(o.svg&&i.removeAttribute("transform"),yo(i,1),o.uncache=1,pp(n)))}},Ga={clearProps:function(e,t,i,n,s){if(s.data!=="isFromStart"){var o=e._pt=new Kt(e._pt,t,i,0,0,iy);return o.u=n,o.pr=-10,o.tween=s,e._props.push(i),1}}},_o=[1,0,0,1,0,0],yp={},bp=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},hp=function(e){var t=qi(e,vt);return bp(t)?_o:t.substr(7).match(Xh).map(bt)},vu=function(e,t){var i=e._gsap||In(e),n=e.style,s=hp(e),o,a,l,c;return i.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?_o:s):(s===_o&&!e.offsetParent&&e!==ss&&!i.svg&&(l=n.display,n.display="block",o=e.parentNode,(!o||!e.offsetParent)&&(c=1,a=e.nextElementSibling,ss.appendChild(e)),s=hp(e),l?n.display=l:yr(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):ss.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},fu=function(e,t,i,n,s,o){var a=e._gsap,l=s||vu(e,!0),c=a.xOrigin||0,h=a.yOrigin||0,u=a.xOffset||0,d=a.yOffset||0,f=l[0],_=l[1],g=l[2],m=l[3],p=l[4],M=l[5],b=t.split(" "),S=parseFloat(b[0])||0,T=parseFloat(b[1])||0,C,P,I,x;i?l!==_o&&(P=f*m-_*g)&&(I=S*(m/P)+T*(-g/P)+(g*M-m*p)/P,x=S*(-_/P)+T*(f/P)-(f*M-_*p)/P,S=I,T=x):(C=vp(e),S=C.x+(~b[0].indexOf("%")?S/100*C.width:S),T=C.y+(~(b[1]||b[0]).indexOf("%")?T/100*C.height:T)),n||n!==!1&&a.smooth?(p=S-c,M=T-h,a.xOffset=u+(p*f+M*g)-p,a.yOffset=d+(p*_+M*m)-M):a.xOffset=a.yOffset=0,a.xOrigin=S,a.yOrigin=T,a.smooth=!!n,a.origin=t,a.originIsAbsolute=!!i,e.style[ai]="0px 0px",o&&(Nn(o,a,"xOrigin",c,S),Nn(o,a,"yOrigin",h,T),Nn(o,a,"xOffset",u,a.xOffset),Nn(o,a,"yOffset",d,a.yOffset)),e.setAttribute("data-svg-origin",S+" "+T)},yo=function(e,t){var i=e._gsap||new Qh(e);if("x"in i&&!t&&!i.uncache)return i;var n=e.style,s=i.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=qi(e,ai)||"0",h,u,d,f,_,g,m,p,M,b,S,T,C,P,I,x,E,O,H,W,$,K,q,oe,X,fe,ye,we,Ne,Qe,Xe,Ve;return h=u=d=g=m=p=M=b=S=0,f=_=1,i.svg=!!(e.getCTM&&_p(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(n[vt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[vt]!=="none"?l[vt]:"")),n.scale=n.rotate=n.translate="none"),P=vu(e,i.svg),i.svg&&(i.uncache?(X=e.getBBox(),c=i.xOrigin-X.x+"px "+(i.yOrigin-X.y)+"px",oe=""):oe=!t&&e.getAttribute("data-svg-origin"),fu(e,oe||c,!!oe||i.originIsAbsolute,i.smooth!==!1,P)),T=i.xOrigin||0,C=i.yOrigin||0,P!==_o&&(O=P[0],H=P[1],W=P[2],$=P[3],h=K=P[4],u=q=P[5],P.length===6?(f=Math.sqrt(O*O+H*H),_=Math.sqrt($*$+W*W),g=O||H?rs(H,O)*vr:0,M=W||$?rs(W,$)*vr+g:0,M&&(_*=Math.abs(Math.cos(M*os))),i.svg&&(h-=T-(T*O+C*W),u-=C-(T*H+C*$))):(Ve=P[6],Qe=P[7],ye=P[8],we=P[9],Ne=P[10],Xe=P[11],h=P[12],u=P[13],d=P[14],I=rs(Ve,Ne),m=I*vr,I&&(x=Math.cos(-I),E=Math.sin(-I),oe=K*x+ye*E,X=q*x+we*E,fe=Ve*x+Ne*E,ye=K*-E+ye*x,we=q*-E+we*x,Ne=Ve*-E+Ne*x,Xe=Qe*-E+Xe*x,K=oe,q=X,Ve=fe),I=rs(-W,Ne),p=I*vr,I&&(x=Math.cos(-I),E=Math.sin(-I),oe=O*x-ye*E,X=H*x-we*E,fe=W*x-Ne*E,Xe=$*E+Xe*x,O=oe,H=X,W=fe),I=rs(H,O),g=I*vr,I&&(x=Math.cos(I),E=Math.sin(I),oe=O*x+H*E,X=K*x+q*E,H=H*x-O*E,q=q*x-K*E,O=oe,K=X),m&&Math.abs(m)+Math.abs(g)>359.9&&(m=g=0,p=180-p),f=bt(Math.sqrt(O*O+H*H+W*W)),_=bt(Math.sqrt(q*q+Ve*Ve)),I=rs(K,q),M=Math.abs(I)>2e-4?I*vr:0,S=Xe?1/(Xe<0?-Xe:Xe):0),i.svg&&(oe=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!bp(qi(e,vt)),oe&&e.setAttribute("transform",oe))),Math.abs(M)>90&&Math.abs(M)<270&&(s?(f*=-1,M+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,M+=M<=0?180:-180)),t=t||i.uncache,i.x=h-((i.xPercent=h&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-h)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+o,i.y=u-((i.yPercent=u&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-u)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+o,i.z=d+o,i.scaleX=bt(f),i.scaleY=bt(_),i.rotation=bt(g)+a,i.rotationX=bt(m)+a,i.rotationY=bt(p)+a,i.skewX=M+a,i.skewY=b+a,i.transformPerspective=S+o,(i.zOrigin=parseFloat(c.split(" ")[2])||!t&&i.zOrigin||0)&&(n[ai]=Wa(c)),i.xOffset=i.yOffset=0,i.force3D=oi.force3D,i.renderTransform=i.svg?ry:gp?xp:ny,i.uncache=0,i},Wa=function(e){return(e=e.split(" "))[0]+" "+e[1]},cu=function(e,t,i){var n=Ft(t);return bt(parseFloat(t)+parseFloat(Un(e,"x",i+"px",n)))+n},ny=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,xp(e,t)},mr="0deg",vo="0px",gr=") ",xp=function(e,t){var i=t||this,n=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.z,c=i.rotation,h=i.rotationY,u=i.rotationX,d=i.skewX,f=i.skewY,_=i.scaleX,g=i.scaleY,m=i.transformPerspective,p=i.force3D,M=i.target,b=i.zOrigin,S="",T=p==="auto"&&e&&e!==1||p===!0;if(b&&(u!==mr||h!==mr)){var C=parseFloat(h)*os,P=Math.sin(C),I=Math.cos(C),x;C=parseFloat(u)*os,x=Math.cos(C),o=cu(M,o,P*x*-b),a=cu(M,a,-Math.sin(C)*-b),l=cu(M,l,I*x*-b+b)}m!==vo&&(S+="perspective("+m+gr),(n||s)&&(S+="translate("+n+"%, "+s+"%) "),(T||o!==vo||a!==vo||l!==vo)&&(S+=l!==vo||T?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+gr),c!==mr&&(S+="rotate("+c+gr),h!==mr&&(S+="rotateY("+h+gr),u!==mr&&(S+="rotateX("+u+gr),(d!==mr||f!==mr)&&(S+="skew("+d+", "+f+gr),(_!==1||g!==1)&&(S+="scale("+_+", "+g+gr),M.style[vt]=S||"translate(0, 0)"},ry=function(e,t){var i=t||this,n=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.rotation,c=i.skewX,h=i.skewY,u=i.scaleX,d=i.scaleY,f=i.target,_=i.xOrigin,g=i.yOrigin,m=i.xOffset,p=i.yOffset,M=i.forceCSS,b=parseFloat(o),S=parseFloat(a),T,C,P,I,x;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=os,c*=os,T=Math.cos(l)*u,C=Math.sin(l)*u,P=Math.sin(l-c)*-d,I=Math.cos(l-c)*d,c&&(h*=os,x=Math.tan(c-h),x=Math.sqrt(1+x*x),P*=x,I*=x,h&&(x=Math.tan(h),x=Math.sqrt(1+x*x),T*=x,C*=x)),T=bt(T),C=bt(C),P=bt(P),I=bt(I)):(T=u,I=d,C=P=0),(b&&!~(o+"").indexOf("px")||S&&!~(a+"").indexOf("px"))&&(b=Un(f,"x",o,"px"),S=Un(f,"y",a,"px")),(_||g||m||p)&&(b=bt(b+_-(_*T+g*P)+m),S=bt(S+g-(_*C+g*I)+p)),(n||s)&&(x=f.getBBox(),b=bt(b+n/100*x.width),S=bt(S+s/100*x.height)),x="matrix("+T+","+C+","+P+","+I+","+b+","+S+")",f.setAttribute("transform",x),M&&(f.style[vt]=x)},sy=function(e,t,i,n,s){var o=360,a=Ct(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?vr:1),c=l-n,h=n+c+"deg",u,d;return a&&(u=s.split("_")[1],u==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),u==="cw"&&c<0?c=(c+o*sp)%o-~~(c/o)*o:u==="ccw"&&c>0&&(c=(c-o*sp)%o-~~(c/o)*o)),e._pt=d=new Kt(e._pt,t,i,n,c,V_),d.e=h,d.u="deg",e._props.push(i),d},up=function(e,t){for(var i in t)e[i]=t[i];return e},oy=function(e,t,i){var n=up({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=i.style,a,l,c,h,u,d,f,_;n.svg?(c=i.getAttribute("transform"),i.setAttribute("transform",""),o[vt]=t,a=yo(i,1),yr(i,vt),i.setAttribute("transform",c)):(c=getComputedStyle(i)[vt],o[vt]=t,a=yo(i,1),o[vt]=c);for(l in un)c=n[l],h=a[l],c!==h&&s.indexOf(l)<0&&(f=Ft(c),_=Ft(h),u=f!==_?Un(i,l,c,_):parseFloat(c),d=parseFloat(h),e._pt=new Kt(e._pt,a,l,u,d-u,hu),e._pt.u=_||0,e._props.push(l));up(a,n)};$t("padding,margin,Width,Radius",function(r,e){var t="Top",i="Right",n="Bottom",s="Left",o=(e<3?[t,i,n,s]:[t+s,t+i,n+i,n+s]).map(function(a){return e<2?r+a:"border"+a+r});Ga[e>1?"border"+r:r]=function(a,l,c,h,u){var d,f;if(arguments.length<4)return d=o.map(function(_){return hn(a,_,c)}),f=d.join(" "),f.split(d[0]).length===5?d[0]:f;d=(h+"").split(" "),f={},o.forEach(function(_,g){return f[_]=d[g]=d[g]||d[(g-1)/2|0]}),a.init(l,f,u)}});_u={name:"css",register:du,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,n,s){var o=this._props,a=e.style,l=i.vars.startAt,c,h,u,d,f,_,g,m,p,M,b,S,T,C,P,I;pu||du(),this.styles=this.styles||mp(e),I=this.styles.props,this.tween=i;for(g in t)if(g!=="autoRound"&&(h=t[g],!(ni[g]&&tu(g,t,i,n,e,s)))){if(f=typeof h,_=Ga[g],f==="function"&&(h=h.call(i,n,e,s),f=typeof h),f==="string"&&~h.indexOf("random(")&&(h=ns(h)),_)_(this,e,g,h,i)&&(P=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(g)+"").trim(),h+="",ln.lastIndex=0,ln.test(c)||(m=Ft(c),p=Ft(h)),p?m!==p&&(c=Un(e,g,c,p)+p):m&&(h+=m),this.add(a,"setProperty",c,h,n,s,0,0,g),o.push(g),I.push(g,0,a[g]);else if(f!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(i,n,e,s):l[g],Ct(c)&&~c.indexOf("random(")&&(c=ns(c)),Ft(c+"")||c==="auto"||(c+=oi.units[g]||Ft(hn(e,g))||""),(c+"").charAt(1)==="="&&(c=hn(e,g))):c=hn(e,g),d=parseFloat(c),M=f==="string"&&h.charAt(1)==="="&&h.substr(0,2),M&&(h=h.substr(2)),u=parseFloat(h),g in Xi&&(g==="autoAlpha"&&(d===1&&hn(e,"visibility")==="hidden"&&u&&(d=0),I.push("visibility",0,a.visibility),Nn(this,a,"visibility",d?"inherit":"hidden",u?"inherit":"hidden",!u)),g!=="scale"&&g!=="transform"&&(g=Xi[g],~g.indexOf(",")&&(g=g.split(",")[0]))),b=g in un,b){if(this.styles.save(g),S||(T=e._gsap,T.renderTransform&&!t.parseTransform||yo(e,t.parseTransform),C=t.smoothOrigin!==!1&&T.smooth,S=this._pt=new Kt(this._pt,a,vt,0,1,T.renderTransform,T,0,-1),S.dep=1),g==="scale")this._pt=new Kt(this._pt,T,"scaleY",T.scaleY,(M?fr(T.scaleY,M+u):u)-T.scaleY||0,hu),this._pt.u=0,o.push("scaleY",g),g+="X";else if(g==="transformOrigin"){I.push(ai,0,a[ai]),h=ty(h),T.svg?fu(e,h,0,C,0,this):(p=parseFloat(h.split(" ")[2])||0,p!==T.zOrigin&&Nn(this,T,"zOrigin",T.zOrigin,p),Nn(this,a,g,Wa(c),Wa(h)));continue}else if(g==="svgOrigin"){fu(e,h,1,C,0,this);continue}else if(g in yp){sy(this,T,g,d,M?fr(d,M+h):h);continue}else if(g==="smoothOrigin"){Nn(this,T,"smooth",T.smooth,h);continue}else if(g==="force3D"){T[g]=h;continue}else if(g==="transform"){oy(this,h,e);continue}}else g in a||(g=as(g)||g);if(b||(u||u===0)&&(d||d===0)&&!z_.test(h)&&g in a)m=(c+"").substr((d+"").length),u||(u=0),p=Ft(h)||(g in oi.units?oi.units[g]:m),m!==p&&(d=Un(e,g,c,p)),this._pt=new Kt(this._pt,b?T:a,g,d,(M?fr(d,M+u):u)-d,!b&&(p==="px"||g==="zIndex")&&t.autoRound!==!1?W_:hu),this._pt.u=p||0,m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=G_);else if(g in a)ey.call(this,e,g,c,M?M+h:h);else if(g in e)this.add(e,g,c||e[g],M?M+h:h,n,s);else if(g!=="parseTransform"){Ba(g,h);continue}b||(g in a?I.push(g,0,a[g]):I.push(g,1,c||e[g])),o.push(g)}}P&&ou(this)},render:function(e,t){if(t.tween._time||!mu())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:hn,aliases:Xi,getSetter:function(e,t,i){var n=Xi[t];return n&&n.indexOf(",")<0&&(t=n),t in un&&t!==ai&&(e._gsap.x||hn(e,"x"))?i&&rp===i?t==="scale"?j_:Y_:(rp=i||{})&&(t==="scale"?Z_:$_):e.style&&!Ua(e.style[t])?X_:~t.indexOf("-")?q_:Va(e,t)},core:{_removeProperty:yr,_getMatrix:vu}};Ht.utils.checkPrefix=as;Ht.core.getStyleSaver=mp;(function(r,e,t,i){var n=$t(r+","+e+","+t,function(s){un[s]=1});$t(e,function(s){oi.units[s]="deg",yp[s]=1}),Xi[n[13]]=r+","+e,$t(i,function(s){var o=s.split(":");Xi[o[1]]=n[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");$t("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){oi.units[r]="px"});Ht.registerPlugin(_u)});var j,c1,li=Yt(()=>{au();Sp();j=Ht.registerPlugin(_u)||Ht,c1=j.core.Tween});function To(r){let e=Op.map(n=>`.${n}`).join(", ");if(!e)return;(r instanceof Document,r).querySelectorAll(e).forEach(n=>{n.dataset.hlsPreserve==="true"||n.dataset.mediaPreserve==="true"||(Sy(n),n.remove())})}function Mr(r){return r.isConnected?!!_y(r):!0}function Ao(r,e){if(!Mr(r)){e();return}let t=Pi.get(r);if(t){t.callbacks.add(e);return}let i=new MutationObserver(()=>{if(!r.isConnected){Ja(r);return}Mr(r)||Ja(r)});xy(r,i);let n={observer:i,callbacks:new Set([e])};Pi.set(r,n),by(r)}function Fp(r){if(!Pi.size)return;if(!r){Pi.forEach((t,i)=>{t.observer.disconnect(),Pi.delete(i)});return}let e=(r instanceof Document,r);Pi.forEach((t,i)=>{(!i.isConnected||e.contains(i))&&(t.observer.disconnect(),Pi.delete(i))})}function _y(r){var t,i;let e=r;for(;e;){if(yy(e)||e.hasAttribute("hidden"))return e;let n=(t=e.style)==null?void 0:t.display;if(n&&n.toLowerCase()==="none")return e;let s=(i=e.style)==null?void 0:i.visibility;if(s&&s.toLowerCase()==="hidden")return e;let o=window.getComputedStyle(e);if(o.display==="none"||o.visibility==="hidden")return e;e=e.parentElement}return null}function yy(r){return Op.some(e=>r.classList.contains(e))}function by(r){let e=()=>{if(Pi.has(r)){if(!r.isConnected){Ja(r);return}Mr(r)||Ja(r)}};typeof window!="undefined"&&typeof window.requestAnimationFrame=="function"?window.requestAnimationFrame(e):window.setTimeout(e,32)}function Ja(r){let e=Pi.get(r);e&&(e.observer.disconnect(),Pi.delete(r),e.callbacks.forEach(t=>{try{t()}catch{}}))}function xy(r,e){let t=r;for(;t;)e.observe(t,{attributes:!0,attributeFilter:gy}),t=t.parentElement}function Sy(r){Dp(r),r.querySelectorAll(vy).forEach(t=>Dp(t))}function Dp(r){let e=Pi.get(r);e&&(e.observer.disconnect(),Pi.delete(r))}var Op,gy,vy,Pi,Qa=Yt(()=>{"use strict";Op=["w-condition-invisible","-w-condition-invisible"],gy=["class","style","hidden"],vy="video[data-src-1080], video[data-src-720], video[data-hls], video.slide-video, img, picture",Pi=new Map});function Ou(r){return r?vl.has(r)?"projects":_l[r]?r:"info":"info"}function Fm(r,e){let t=new Set;return e.forEach(i=>{if(!i)return;r.querySelectorAll(i).forEach(s=>{t.has(s)||t.add(s)})}),Array.from(t)}function _b(r,e,t){e.forEach(i=>{let n=Fm(r,i.selectors);if(!n.length)return;if(!i.enter){j.set(n,{opacity:1,y:0,visibility:"visible"});return}let s=i.enter==="down"?-t:t;j.set(n,{opacity:0,y:s,visibility:"visible",willChange:"transform, opacity"})})}function Nm(r,e,t,i){let n=j.timeline({defaults:{ease:Om}});return t.forEach(s=>{let o=s[r];if(!o)return;let a=Fm(e,s.selectors);if(!a.length)return;let l=r==="enter",c=o==="down"?i:-i,h=l?{opacity:1,y:0,duration:Im}:{opacity:0,y:c,duration:Dm};j.set(a,{visibility:"visible",willChange:"transform, opacity"}),n.to(a,h,0),l?n.set(a,{clearProps:"willChange,visibility"},n.duration()-.001):n.set(a,{visibility:"hidden",clearProps:"willChange"},n.duration()-.001)}),n.getChildren().length?new Promise(s=>{n.eventCallback("onComplete",()=>{n.getChildren().forEach(o=>o.kill()),s()})}):(n.kill(),Promise.resolve())}function Uo(r,e){var n;let t=Ou(r),i=(n=_l[t])!=null?n:[];_b(e,i,gl)}function Bo(r,e){var n;let t=Ou(r),i=(n=_l[t])!=null?n:[];return Nm("enter",e,i,gl)}function Um(r,e){var n;let t=Ou(r),i=(n=_l[t])!=null?n:[];return Nm("leave",e,i,gl)}var Im,Dm,gl,Om,vl,_l,Mt,ko=Yt(()=>{"use strict";li();Im=.75,Dm=.75,gl=20,Om="power2.out",vl=new Set(["projects","digital","graphic","direction","imaging"]),_l={info:[{selectors:[".headline"],enter:"down",leave:"up"},{selectors:[".slider",".slider-wrapper",".slider_wrapper",".hero-slider-wrapper",".panorama-slider"],enter:"up",leave:"down"},{selectors:[".section_about",".footer"],enter:"up",leave:"down"},{selectors:[".info-reveal-word"],enter:"up",leave:"down"}],projects:[{selectors:[".component_project-header"],enter:"down",leave:"up"},{selectors:[".top-nav"],enter:"down",leave:"up"},{selectors:[".projects-nav"],enter:"down",leave:"up"},{selectors:[".projects-wrapper",".projects_wrapper"],enter:"up",leave:"down"},{selectors:[".footer"],enter:"up",leave:"down"}],cases:[{selectors:[".top-nav"],enter:"down",leave:"up"},{selectors:[".section_case-header",".component_case-header"],enter:"up",leave:"down"},{selectors:[".section_case-media"],enter:"up",leave:"down"},{selectors:[".section_case-description",".section_cases-nav",".footer"],enter:"up",leave:"down"}],archive:[{selectors:[".top-nav",".top-nav-text"],enter:"down",leave:"up"},{selectors:[".loading-ui",".loading-ui-wrapper"],enter:"up",leave:"down"},{selectors:[".archive-container"],enter:"up",leave:"down"},{selectors:[".archive-sphere",".archive-sphere__renderer","[data-archive-sphere]"],enter:"up",leave:"down"},{selectors:[".footer"],enter:"up",leave:"down"}]};Mt={enter:Im,leave:Dm,distance:gl,ease:Om}});function Vo(r){return r instanceof Document,r}function Gm(r,e,t){if(typeof window=="undefined"||typeof window.requestAnimationFrame!="function"){t();return}let i=e.get(r);typeof i=="number"&&window.cancelAnimationFrame(i);let n=window.requestAnimationFrame(()=>{e.delete(r),t()});e.set(r,n)}function Eb(r){let e=yl.get(r);return e||(e=new Map,yl.set(r,e)),e}function wb(r,e){let t=r.getAttribute(e),i=Eb(r);t!==null?(i.set(e,t),r.removeAttribute(e)):i.has(e)||i.set(e,null)}function Tb(r,e){let t=yl.get(r),i=t==null?void 0:t.get(e);if(i===void 0){e==="loading"&&(!r.hasAttribute("loading")||r.getAttribute("loading")==="eager")&&r.setAttribute("loading","lazy");return}i===null?r.removeAttribute(e):r.setAttribute(e,i),t==null||t.delete(e),t&&t.size===0&&yl.delete(r)}function Wm(r){return r instanceof HTMLImageElement?r.dataset.lcpPriority==="true"?(r.setAttribute("loading","eager"),r.setAttribute("fetchpriority","high"),r):(Vm.forEach(e=>wb(r,e)),r.setAttribute("loading","eager"),r.setAttribute("fetchpriority","high"),r.dataset.lcpPriority="true",r):null}function Ab(r){r.dataset.lcpPriority==="true"&&(r.removeAttribute("fetchpriority"),Vm.forEach(e=>Tb(r,e)),delete r.dataset.lcpPriority)}function zo(r){if(!r)return null;if(r instanceof HTMLImageElement)return r;if(r instanceof HTMLPictureElement){let t=r.querySelector("img");return t instanceof HTMLImageElement?t:null}let e=r.querySelector("img");return e instanceof HTMLImageElement?e:null}function Cb(r){let t=Array.from(r.querySelectorAll(bb)).map(n=>zo(n)).filter(n=>!!n);if(t.length)return Array.from(new Set(t));let i=zo(r.querySelector("img"));return i?[i]:[]}function Fu(r,e){Vo(r).querySelectorAll('img[data-lcp-priority="true"]').forEach(n=>{e.has(n)||Ab(n)})}function Rb(r){if(!r.isConnected)return!1;let e=window.getComputedStyle(r);return!(e.display==="none"||e.visibility==="hidden"||r.offsetWidth===0&&r.offsetHeight===0)}function Pb(r){let e=Vo(r),t=Array.from(e.querySelectorAll(yb));for(let i of t)if(Rb(i))return i;return null}function Lb(r){let e=Pb(r),t=new Set;e&&Cb(e).forEach(n=>{let s=Wm(n);s&&t.add(s)}),Fu(r,t)}function Ib(r){let e=Vo(r),t=e instanceof Element?e.querySelector(".section_case-media"):null,i=t!=null?t:e,n=Array.from(i.querySelectorAll(".case-list-wrapper .case-list .case-media-wrapper, .case-media-wrapper"));for(let a of n){let l=a.querySelector(".case-media"),c=zo(l);if(c)return c;let h=zo(a);if(h)return h}let s=i.querySelector(xb);if(s){let a=zo(s);if(a)return a}let o=i.querySelector("img");return o instanceof HTMLImageElement?o:null}function Db(r){let e=Ib(r),t=new Set;if(!e){Fu(r,t);return}let i=()=>{let n=Wm(e);n&&t.add(n),Fu(r,t)};Mr(e)?Ao(e,i):i()}function Xm(r){let e=Vo(r);Gm(e,Sb,()=>Lb(e))}function xs(r){let e=Vo(r);Gm(e,Mb,()=>Db(e))}var yb,bb,xb,Vm,yl,Sb,Mb,bl=Yt(()=>{"use strict";Qa();yb=".project-div",bb=".project-image",xb=".case-media",Vm=["loading","data-loading","data-wf-loading","data-wf-lazy","data-lazy"],yl=new WeakMap,Sb=new WeakMap,Mb=new WeakMap});var Zm={};pf(Zm,{applyProjectFilter:()=>Hb,destroyProjectFilters:()=>jm,initProjectFilters:()=>kb});function Rr(r){return r?r.trim().toLowerCase().replace(/\s+/g,"-"):""}function qm(r){let e=window.getComputedStyle(r);return e?e.display==="none"?"block":e.display:"block"}function kb(r=document,e){jm(),vn=new Nu(r,e),vn.init()}function jm(){vn==null||vn.destroy(),vn=null}function Hb(r,e){vn==null||vn.applyExternalFilter(r,e)}var Ob,zn,Fb,Nb,Ub,Bb,Ym,Nu,vn,$m=Yt(()=>{"use strict";li();bl();ko();Ob={initialListState:"hidden"};zn={fadeIn:1,expand:1.1,fadeOut:.7,collapse:.85,delayStep:.1,maxDelay:.5,listReveal:1.2},Fb=".project-div",Nb=".project-image, .project-video, .grid-image, .grid-video, .video-item, .video-item-prj",Ub=".description-div",Bb=".categories [data-filter-value], .categories .text-size-small, .project-services .text-size-small, .services-list-wrapper .text-size-small, .service-text .text-size-small, [data-filter-category], [data-filter-slug], [data-filter-value], [data-capability], [data-category]",Ym=Mt.distance*1.1,Nu=class{constructor(e,t={}){this.listWrapper=null;this.triggerMap=new Map;this.triggerHandlers=new Map;this.cards=new Map;this.activeFilter="all";this.observer=null;this.refreshTimeout=null;this.hasRevealedList=!1;this.initialFilterApplied=!1;this.popStateHandler=()=>{this.applyFilter(this.getFilterFromUrl(),{animate:!0,updateUrl:!1,force:!0})};var n,s,o;this.options={...Ob,...t},this.container=e instanceof Document?e.documentElement:e;let i=e instanceof Document?e:e.ownerDocument;this.nav=i==null?void 0:i.querySelector(".projects-nav"),e instanceof Element?this.listWrapper=(n=e.querySelector(".project-list-wrapper"))!=null?n:e.querySelector(".project-list"):this.listWrapper=(o=(s=i==null?void 0:i.querySelector(".project-list-wrapper"))!=null?s:i==null?void 0:i.querySelector(".project-list"))!=null?o:null}init(){this.hideListWrapper(),this.collectTriggers(),this.collectCards(),this.observeMutations(),window.addEventListener("popstate",this.popStateHandler);let e=this.getFilterFromUrl();this.applyFilter(e,{animate:!1,updateUrl:!0,pushState:!1,force:!0})}destroy(){this.triggerHandlers.forEach((e,t)=>{t.removeEventListener("click",e)}),this.triggerHandlers.clear(),this.triggerMap.clear(),this.cards.forEach(e=>{var t;(t=e.timeline)==null||t.kill(),e.timeline=void 0}),this.cards.clear(),this.observer&&(this.observer.disconnect(),this.observer=null),this.refreshTimeout!==null&&(window.clearTimeout(this.refreshTimeout),this.refreshTimeout=null),window.removeEventListener("popstate",this.popStateHandler),this.hasRevealedList=!1,this.initialFilterApplied=!1}applyExternalFilter(e,t={}){this.applyFilter(e,t)}hideListWrapper(){var t;if(!this.listWrapper){this.hasRevealedList=!1,this.initialFilterApplied=!1;return}let e=(t=this.listWrapper.querySelector("[data-filter-empty]"))!=null?t:this.listWrapper.querySelector(".w-dyn-empty");if(this.options.initialListState==="visible"){j.set(this.listWrapper,{autoAlpha:1,pointerEvents:"auto",visibility:"visible"}),e&&j.set(e,{autoAlpha:0,display:"none",pointerEvents:"none"}),this.hasRevealedList=!0,this.initialFilterApplied=!1;return}j.set(this.listWrapper,{autoAlpha:0,pointerEvents:"none"}),e&&j.set(e,{autoAlpha:0,display:"none",pointerEvents:"none"}),this.hasRevealedList=!1,this.initialFilterApplied=!1}maybeRevealList(e){if(!this.listWrapper||this.hasRevealedList)return;let t=Array.from(this.cards.values()).some(s=>s.isVisible),i=this.listWrapper.querySelector(".w-dyn-empty");if(!t&&!i)return;this.hasRevealedList=!0,e||!this.initialFilterApplied?j.to(this.listWrapper,{autoAlpha:1,duration:zn.listReveal,ease:"power2.out",pointerEvents:"auto"}):j.set(this.listWrapper,{autoAlpha:1,pointerEvents:"auto"})}readElementMetrics(e){let{element:t,defaultDisplay:i}=e,n=t.getAttribute("style"),s=n!==null,o=window.getComputedStyle(t),a=o.display==="none"||t.offsetHeight===0||Number.isNaN(t.offsetHeight);if(a){t.style.position="absolute",t.style.visibility="hidden",t.style.pointerEvents="none",t.style.display=i||"block";let{width:h}=o;h&&h!=="auto"&&(t.style.width=h),t.style.height="",t.style.marginTop="",t.style.marginBottom="",t.style.paddingTop="",t.style.paddingBottom=""}let l=window.getComputedStyle(t),c={height:t.offsetHeight,marginTop:parseFloat(l.marginTop)||0,marginBottom:parseFloat(l.marginBottom)||0,paddingTop:parseFloat(l.paddingTop)||0,paddingBottom:parseFloat(l.paddingBottom)||0};return a&&(s?t.setAttribute("style",n):t.removeAttribute("style")),c}measureCard(e,t=!1){if(!t&&e.metrics)return e.metrics;let i=this.readElementMetrics(e);return e.metrics=i,i}getCardDescription(e){return e.element.querySelector(Ub)}getCardMediaElements(e){return Array.from(e.element.querySelectorAll(Nb))}restoreCardVisibility(e,t,i){let n=[e.element];t||(t=this.getCardDescription(e)),(!i||!i.length)&&(i=this.getCardMediaElements(e)),t&&n.push(t),i&&i.length&&n.push(...i),n.forEach(s=>{s&&(s.style.opacity&&s.style.opacity!=="1"&&(s.style.opacity="1"),s.style.visibility&&s.style.visibility!=="visible"&&(s.style.visibility="visible"),s.style.removeProperty("translate"),s.style.removeProperty("rotate"),s.style.removeProperty("scale"),s.style.removeProperty("transform"))})}toggleEmptyState(e){var n;if(!this.listWrapper)return;let t=(n=this.listWrapper.querySelector("[data-filter-empty]"))!=null?n:this.listWrapper.querySelector(".w-dyn-empty");if(!t)return;let i=qm(t);j.killTweensOf(t),e?(j.set(t,{display:i,pointerEvents:"auto"}),j.to(t,{autoAlpha:1,duration:.45,ease:"power2.out"})):j.to(t,{autoAlpha:0,duration:.3,ease:"power2.out",pointerEvents:"none",onComplete:()=>{t.style.display="none"}})}collectTriggers(){if(!this.nav)return;let e=Array.from(this.nav.querySelectorAll("[data-filter-trigger]"));if(e.forEach(t=>{var s,o;let i=Rr((o=(s=t.dataset.filterTrigger)!=null?s:t.getAttribute("href"))!=null?o:"");if(!i)return;this.triggerMap.set(i,t);let n=a=>{a.preventDefault(),this.applyFilter(i,{animate:!0,updateUrl:!0,pushState:!0})};t.addEventListener("click",n),this.triggerHandlers.set(t,n)}),!this.triggerMap.has("all")){let t=e.find(i=>{var s;return Rr((s=i.dataset.filterTrigger)!=null?s:"")==="all"});t&&this.triggerMap.set("all",t)}}collectCards(){let e=Array.from(this.container.querySelectorAll(Fb)),t=new Map;e.forEach(i=>{let n=this.cards.get(i),s=this.extractCategories(i);if(n){n.categories=s,this.measureCard(n,!0),t.set(i,n);return}let o={element:i,categories:s,defaultDisplay:qm(i),isVisible:!0};this.measureCard(o,!0),t.set(i,o)}),this.cards.forEach((i,n)=>{var s;t.has(n)||(s=i.timeline)==null||s.kill()}),this.cards=t}extractCategories(e){let t=new Set,i=a=>{a&&a.split(/[,/|]+/).map(l=>Rr(l)).filter(Boolean).forEach(l=>t.add(l))};return["data-filter-slug","data-filter-category","data-category","data-categories","data-capability","data-filter-value","data-category-slugs"].forEach(a=>{i(e.getAttribute(a))}),["filterSlug","filterCategory","category","categories","capability","filterValue"].forEach(a=>{a in e.dataset&&i(e.dataset[a])}),Array.from(e.querySelectorAll(Bb)).filter(a=>a.childElementCount===0).forEach(a=>{i(a.textContent)}),t}observeMutations(){let e=this.container.querySelector(".project-list"),t=e!=null?e:this.container;this.observer=new MutationObserver(i=>{i.some(n=>n.type==="childList")&&this.scheduleRefresh()}),this.observer.observe(t,{childList:!0,subtree:!0})}scheduleRefresh(){this.refreshTimeout!==null&&window.clearTimeout(this.refreshTimeout),this.refreshTimeout=window.setTimeout(()=>{this.refreshTimeout=null,this.collectCards(),this.applyFilter(this.activeFilter,{animate:!1,updateUrl:!1,force:!0})},50)}getFilterFromUrl(){var n,s;let e=new URL(window.location.href),t=Rr((s=(n=e.searchParams.get("category"))!=null?n:e.searchParams.get("capability"))!=null?s:"");if(t)return t;let i=e.hash.replace("#","");if(!i)return"all";if(i.includes("=")){let[o,a]=i.split("=");if(o==="category"||o==="capability")return Rr(a)}return Rr(i)||"all"}applyFilter(e,t={}){let{animate:i=!0,updateUrl:n=!1,pushState:s=!1,force:o=!1}=t,a=Rr(e);if(a||(a="all"),a!=="all"&&!this.triggerMap.has(a)&&(a="all"),!o&&a===this.activeFilter){n&&this.updateUrl(a,s);return}this.activeFilter=a,this.updateTriggers(a),this.filterCards(a,i),this.maybeRevealList(!this.hasRevealedList),this.initialFilterApplied=!0,Xm(this.container),n&&this.updateUrl(a,s)}updateTriggers(e){this.triggerMap.forEach((t,i)=>{let n=i===e||e==="all"&&i==="all";t.classList.toggle("is-active",n),t.classList.toggle("w--current",n),n?(t.setAttribute("aria-current","true"),t.setAttribute("aria-pressed","true")):(t.removeAttribute("aria-current"),t.setAttribute("aria-pressed","false"))})}filterCards(e,t){let i=e==="all",n=Array.from(this.cards.values()),s=0,o=0;n.forEach(a=>{i||a.categories.has(e)?(this.showCard(a,t,s),s+=1,o+=1):this.hideCard(a,t)}),this.toggleEmptyState(o===0)}showCard(e,t,i){var c;(c=e.timeline)==null||c.kill(),e.timeline=void 0;let n=this.getCardMediaElements(e),s=this.getCardDescription(e);if(this.restoreCardVisibility(e,s,n),e.isVisible){j.set(e.element,{display:e.defaultDisplay,autoAlpha:1,y:0,pointerEvents:"auto",overflow:"",height:"",marginTop:"",marginBottom:"",paddingTop:"",paddingBottom:""}),s&&j.set(s,{autoAlpha:1,y:0,pointerEvents:"auto"}),n.length&&j.set(n,{autoAlpha:1,y:0,pointerEvents:"auto"}),this.restoreCardVisibility(e,s,n);return}let o=this.measureCard(e,!0),a=Math.min(i*zn.delayStep,zn.maxDelay),l=Ym;if(e.isVisible=!0,t){let h=j.timeline({defaults:{overwrite:"auto"},onComplete:()=>{e.timeline===h&&(e.timeline=void 0),j.set(e.element,{overflow:"",height:"",marginTop:"",marginBottom:"",paddingTop:"",paddingBottom:"",pointerEvents:"auto",visibility:"visible"}),s&&j.set(s,{pointerEvents:"auto"}),n.length&&j.set(n,{pointerEvents:"auto"}),this.restoreCardVisibility(e,s,n),this.measureCard(e,!0)}});h.set(e.element,{display:e.defaultDisplay,autoAlpha:0,height:0,marginTop:0,marginBottom:0,paddingTop:0,paddingBottom:0,y:l,overflow:"hidden",pointerEvents:"none",visibility:"hidden"}),s&&h.set(s,{autoAlpha:0,y:l*.65,pointerEvents:"none",visibility:"hidden"},0),n.length&&h.set(n,{autoAlpha:0,pointerEvents:"none",visibility:"hidden"},0),h.to(e.element,{height:o.height,marginTop:o.marginTop,marginBottom:o.marginBottom,paddingTop:o.paddingTop,paddingBottom:o.paddingBottom,duration:zn.expand,ease:"power2.inOut",delay:a},0),h.to(e.element,{autoAlpha:1,y:0,pointerEvents:"auto",visibility:"visible",duration:zn.fadeIn,ease:"power2.out"},a+.12),s&&h.to(s,{autoAlpha:1,y:0,pointerEvents:"auto",visibility:"visible",duration:.55,ease:"power2.out"},a+.18),n.length&&h.to(n,{autoAlpha:1,pointerEvents:"auto",visibility:"visible",duration:.6,stagger:.04,ease:"power2.out"},a+.24),e.timeline=h}else j.set(e.element,{display:e.defaultDisplay,autoAlpha:1,y:0,pointerEvents:"auto",overflow:"",height:"",marginTop:"",marginBottom:"",paddingTop:"",paddingBottom:"",visibility:"visible"}),s&&j.set(s,{autoAlpha:1,y:0,pointerEvents:"auto",visibility:"visible"}),n.length&&j.set(n,{autoAlpha:1,pointerEvents:"auto",visibility:"visible"}),this.restoreCardVisibility(e,s,n),this.measureCard(e,!0)}hideCard(e,t){var o;if(!e.isVisible&&!e.timeline)return;(o=e.timeline)==null||o.kill(),e.timeline=void 0,this.measureCard(e,!0),e.isVisible=!1;let i=this.getCardDescription(e),n=this.getCardMediaElements(e),s=Ym;if(t){let a=j.timeline({defaults:{overwrite:"auto"},onComplete:()=>{e.timeline===a&&(e.timeline=void 0),j.set(e.element,{display:"none",pointerEvents:"none",autoAlpha:0,y:0,height:"",marginTop:"",marginBottom:"",paddingTop:"",paddingBottom:"",overflow:"",visibility:"hidden"}),i&&j.set(i,{autoAlpha:0,y:0,pointerEvents:"none",visibility:"hidden"}),n.length&&j.set(n,{autoAlpha:0,pointerEvents:"none",visibility:"hidden"})}});if(a.set(e.element,{overflow:"hidden",pointerEvents:"none",visibility:"visible"}),n.length){let l=n.slice().reverse();a.to(l,{autoAlpha:0,duration:Math.max(.45,zn.fadeOut*.75),ease:"power2.inOut",stagger:.04},0)}i&&a.to(i,{autoAlpha:0,y:-s*.6,duration:Math.max(.4,zn.fadeOut*.7),ease:"power2.inOut"},.06),a.to(e.element,{autoAlpha:0,y:-s,height:0,marginTop:0,marginBottom:0,paddingTop:0,paddingBottom:0,duration:zn.collapse,ease:"power2.inOut"},0),e.timeline=a}else j.set(e.element,{autoAlpha:0,y:0,display:"none",pointerEvents:"none",height:"",marginTop:"",marginBottom:"",paddingTop:"",paddingBottom:"",overflow:"",visibility:"hidden"}),i&&j.set(i,{autoAlpha:0,y:0,pointerEvents:"none",visibility:"hidden"}),n.length&&j.set(n,{autoAlpha:0,y:0,pointerEvents:"none",visibility:"hidden"})}updateUrl(e,t){let i=new URL(window.location.href);e==="all"?(i.searchParams.delete("category"),i.searchParams.delete("capability")):i.searchParams.set("category",e);let n=`${i.pathname}${i.search}${i.hash}`;t?window.history.pushState({filter:e},"",n):window.history.replaceState({filter:e},"",n)}},vn=null});var Km,Uu,Jm,Bu,Qm=Yt(()=>{"use strict";Km=[{id:"archive-video-01",type:"video",src:"https://coscostudio.b-cdn.net/Portfolio%20Videos/Haus%20x%20Sautter%20Sisters/720/ss-3.mp4",thumb:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69062df40d4a0bb384bffe9b_ss-3-cover.avif",aspectRatio:.75},{id:"archive-video-02",type:"video",src:"https://coscostudio.b-cdn.net/Portfolio%20Videos/Summit/Short%20Videos/720p/summit-concrete-short.mp4",thumb:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69062f3fb2d24fda2019e07c_js-cover-02.avif",aspectRatio:.5208333333333334},{id:"archive-video-03",type:"video",src:"https://coscostudio.b-cdn.net/Portfolio%20Videos/Haus%20x%20Gilly/720/gilly-1.mp4",thumb:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69062de88d55ba8f8c2b922b_gilly-1.avif",aspectRatio:.5625},{id:"archive-video-04",type:"video",src:"https://coscostudio.b-cdn.net/Portfolio%20Videos/Haus%20x%20Sautter%20Sisters/720/ss-6.mp4",thumb:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69062df4d00970133fc9713b_ss-6-cover.avif",aspectRatio:1.7777777777777777},{id:"archive-video-05",type:"video",src:"https://coscostudio.b-cdn.net/Portfolio%20Videos/Haus%20x%20Gilly/720/gilly-4.mp4",thumb:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69062de8b2317b4b155f73ea_gilly-4.avif",aspectRatio:.5625},{id:"archive-video-06",type:"video",src:"https://coscostudio.b-cdn.net/Portfolio%20Videos/Summit/Short%20Videos/720p/summit-blackhole-short.mp4",thumb:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69062f3f546bb2d5ad041774_js-cover-03.avif",aspectRatio:.5208333333333334},{id:"archive-video-07",type:"video",src:"https://coscostudio.b-cdn.net/Portfolio%20Videos/Haus%20x%20Gilly/720/gilly-3.mp4",thumb:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69062de842634eaed9fa5c7b_gilly-3.avif",aspectRatio:.5625},{id:"archive-video-08",type:"video",src:"https://coscostudio.b-cdn.net/Portfolio%20Videos/Haus%20x%20Sautter%20Sisters/720/ss-2.mp4",thumb:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69062df453ef7df9dc01f186_ss-2-cover.avif",aspectRatio:.75}],Uu=[{id:"archive-video-mobile-01",type:"video",src:"https://vz-962f74a4-f42.b-cdn.net/585a1399-fd31-4824-8113-5cac96c81eca/playlist.m3u8",thumb:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69062df40d4a0bb384bffe9b_ss-3-cover.avif",aspectRatio:3/4},{id:"archive-video-mobile-02",type:"video",src:"https://vz-962f74a4-f42.b-cdn.net/302a81de-ae29-48cb-abf2-c03af75b54a4/playlist.m3u8",thumb:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69062f3fb2d24fda2019e07c_js-cover-02.avif",aspectRatio:1e3/1920},{id:"archive-video-mobile-03",type:"video",src:"https://vz-962f74a4-f42.b-cdn.net/cda8db0e-3794-45d4-a07c-b02236381da5/playlist.m3u8",thumb:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69062de88d55ba8f8c2b922b_gilly-1.avif",aspectRatio:9/16},{id:"archive-video-mobile-04",type:"video",src:"https://vz-962f74a4-f42.b-cdn.net/339bce8f-79d8-4e23-a190-79305d379012/playlist.m3u8",thumb:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69062df4d00970133fc9713b_ss-6-cover.avif",aspectRatio:16/9},{id:"archive-video-mobile-05",type:"video",src:"https://vz-962f74a4-f42.b-cdn.net/305f01fa-9b34-4a78-a966-5d9f708dc8ae/playlist.m3u8",thumb:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69062f3f3b0f6fd08d836a66_js-cover-01.avif",aspectRatio:1e3/1920},{id:"archive-video-mobile-06",type:"video",src:"https://vz-962f74a4-f42.b-cdn.net/8e796f4c-84bb-4dee-9c57-4b4737697135/playlist.m3u8",thumb:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69062de8b2317b4b155f73ea_gilly-4.avif",aspectRatio:9/16},{id:"archive-video-mobile-07",type:"video",src:"https://vz-962f74a4-f42.b-cdn.net/d9b4ff0c-602c-4dae-bbd1-e724d43ddfd9/playlist.m3u8",thumb:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69062f3f546bb2d5ad041774_js-cover-03.avif",aspectRatio:1e3/1920},{id:"archive-video-mobile-08",type:"video",src:"https://vz-962f74a4-f42.b-cdn.net/21bbd845-bb98-405e-accf-2683d2518add/playlist.m3u8",thumb:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69062de842634eaed9fa5c7b_gilly-3.avif",aspectRatio:9/16},{id:"archive-video-mobile-09",type:"video",src:"https://vz-962f74a4-f42.b-cdn.net/f5ba8727-7436-4714-afc6-ddf79515c3f6/playlist.m3u8",thumb:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69062df453ef7df9dc01f186_ss-2-cover.avif",aspectRatio:3/4}],Jm=[{id:"archive-image-001",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/680a6f54d3c1c3c5c5204b6c_20240530-2709801-314-positive.avif"},{id:"archive-image-002",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/680a74fa2c4ebce341322c3b_stephen-cosco-23.avif"},{id:"archive-image-003",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/680a720712a2c3aa1df669a7_stephen-cosco-50.avif"},{id:"archive-image-004",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/690513f07f1d3d1877b498db_20230804-1304402-0031.avif"},{id:"archive-image-005",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/6905143cf3d2d8ad5d991896_DSC02945-Edit.avif"},{id:"archive-image-006",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/6905148b1a22f03ce89b711d_20240111-2013707-004.avif"},{id:"archive-image-007",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/690514e26ab377afa42d1f02_220719003624010028.avif"},{id:"archive-image-008",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/6905155aa921702bc2a1cd5a_230217007904020028.avif"},{id:"archive-image-009",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/680a70fd2877ed516086ac9b_stephen-cosco-102.avif"},{id:"archive-image-010",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/6905160f3bb6ded4ca413f41_20240207-2171107-241-positive.avif"},{id:"archive-image-011",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/690516246ab377afa42d5826_Chaste%20Poster.avif"},{id:"archive-image-012",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69051635a5eea1ba298faf16_index-video-desktop.avif"},{id:"archive-image-013",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/680a6f97e7dfbcb41437abf1_20230804-1304609-0002-positive.avif"},{id:"archive-image-014",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/690516deeaf1dfc9f5740baa_repetto.avif"},{id:"archive-image-015",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69051450dce4ed40700f0351_220719003624080003.avif"},{id:"archive-image-016",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/6905170a837f9ec544fb1877_Haus-ss--11.avif"},{id:"archive-image-017",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/690518192b1b03904c5e513e_20231118-1803213-001-12.avif"},{id:"archive-image-018",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/680a7d962e771cc63959db3f_stephen-cosco-18.avif"},{id:"archive-image-019",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/690518a540e9289f7abb9faa_220719003624020036.avif"},{id:"archive-image-020",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/690518c9c5873500a83b6bd0_220719003624120014.avif"},{id:"archive-image-021",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/690518d72b43bafea8332f3e_220719003624050009-Edit.avif"},{id:"archive-image-022",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/690518f0c5671628a94f1562_20231118-1803212-001-16.avif"},{id:"archive-image-023",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/680a71161c2012036f98ec67_stephen-cosco-59.avif"},{id:"archive-image-024",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/6905197c80a70fa61670d74c_index_screenshots.avif"},{id:"archive-image-025",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/6905199c0ff8fc1ce4496a63_20231118-1803213-001-31.avif"},{id:"archive-image-026",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/6904d3413273aff69aae7f7f_MACBOOK-MOCKUP-0122%20copy.avif"},{id:"archive-image-027",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/680a726e346e5a1c89b70b9b_stephen-cosco-14.avif"},{id:"archive-image-028",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69051fc636c9ee3c294cf193_renegade-archive-tablet-full.avif"},{id:"archive-image-029",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/680a727be03e8668802ea180_stephen-cosco-68.avif"},{id:"archive-image-030",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076de687ede58922159491_835d464b0dca3fa7d1198da18723f250_cosco-archive-2.avif"},{id:"archive-image-031",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/680a728f9bf42c395d22ddde_stephen-cosco-4.avif"},{id:"archive-image-032",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69051aae8c732c1cc80b729b_DSC00714-1.avif"},{id:"archive-image-033",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69051af2c3abc8af78159292_220902004432010006.avif"},{id:"archive-image-034",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69051b5fd47ff9dfa35e2c43_Emma.avif"},{id:"archive-image-035",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69051c63f44cb19477865cda_220719003624180028.avif"},{id:"archive-image-036",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69051c6e7800f980410a2ba6_manola-homepage-mobile.avif"},{id:"archive-image-037",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69051c8644447cc2880506a1_20240111-2013704-079-positive.avif"},{id:"archive-image-038",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/680a73789f3f1383f23d4c9a_stephen-cosco-60.avif"},{id:"archive-image-039",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/680a739d5eca17c17a78bc46_stephen-cosco-54.avif"},{id:"archive-image-040",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69051cc452a8e80109ffb004_20240111-2013705-021-positive.avif"},{id:"archive-image-041",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/680a73b1ff00431da310490d_stephen-cosco-42.avif"},{id:"archive-image-042",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/680a7449c769460bb8dc1916_stephen-cosco-44.avif"},{id:"archive-image-043",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69051d04f9576cad6fa2d63c_dal-tablets.avif"},{id:"archive-image-044",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69051d1ca1ca7499396c97b1_220902004432040001.avif"},{id:"archive-image-045",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69051d2a98a8f80cfdc0ac5a_fnt-featured.avif"},{id:"archive-image-046",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69051d3c2dad815e703fc411_20230804-1304607-0016.avif"},{id:"archive-image-047",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/680a73420d1fd5315b1b3c87_stephen-cosco-39.avif"},{id:"archive-image-048",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/680a7439eeee4bfdd1beef42_stephen-cosco-83.avif"},{id:"archive-image-049",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69051d80fd87545006c79a07_renegade-fullscreen.avif"},{id:"archive-image-050",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69051d9b2a1e63e5ccf1bcaf_20240207-2171103-089-positive-Edit-2.avif"},{id:"archive-image-051",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69051daa46bc2ef4a0edb532_302342_0007-1.avif"},{id:"archive-image-052",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69051de1e7f20ff276390989_20230804-1304605-0028.avif"},{id:"archive-image-053",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/680a74bcb3d2265c7c23559f_stephen-cosco-34.avif"},{id:"archive-image-054",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69051e6281a93e1fde06383d_220719003624070036-Edit.avif"},{id:"archive-image-055",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/690e2b00fbd6ae8e03603fd6_Manola-slider.avif"},{id:"archive-image-056",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/680a74e39e1f1c396f9dabab_stephen-cosco-67.avif"},{id:"archive-image-057",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/680a7505b5dfb8fe2e73c494_stephen-cosco-48.avif"},{id:"archive-image-058",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69051ebf285d76c8feebaa0c_20230804-1304603-0029-positive.avif"},{id:"archive-image-059",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69051ed450dd6000901d257a_renegade-paper3.avif"},{id:"archive-image-060",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/680a754ebdad02f4ef39cf79_stephen-cosco-64.avif"},{id:"archive-image-061",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69051efe570c2c569b96a4d8_dal-pdp.avif"},{id:"archive-image-062",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69051f08ff7ef63434a81ab8_dal-stories-1.avif"},{id:"archive-image-063",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69051f291f5b9fd8bd4be435_220719003624170008.avif"},{id:"archive-image-064",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69051f37ae90debc068eaabb_wlw-pdp-phones.avif"},{id:"archive-image-065",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69051f5349adbd9af8d8e095_20240207-2171104-149.avif"},{id:"archive-image-066",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/680a75ca7a8ddacd1bc80107_stephen-cosco-115.avif"},{id:"archive-image-067",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69051fa3e06096afd7de1975_20230804-1304605-0035.avif"},{id:"archive-image-068",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69051fb17d72bafed993d47e_DSC03520-Edit.avif"},{id:"archive-image-069",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69051fea87881520f8faf5b8_230217007904030035.avif"},{id:"archive-image-070",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69052049ecafd368a340bffb_480395_0033-3.avif"},{id:"archive-image-071",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69052063cb378a85d131757e_230217007904010025.avif"},{id:"archive-image-072",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69052074a502d0958768ad5a_dal%20-%20macbook%204.avif"},{id:"archive-image-073",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69052089a3a7bf1614f5c2a1_20230804-1304601-0008-positive.avif"},{id:"archive-image-074",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/680a7d9cef0420fb287eb229_0bead3c47cb29177fc92673e30f7fbf2_stephen-cosco-92.avif"},{id:"archive-image-075",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/680a7d9bebc42918cd0b28af_stephen-cosco-80.avif"},{id:"archive-image-076",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69052117e9a8af6a503b550f_220719003624020018.avif"},{id:"archive-image-077",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69052132ce4cec81d187ebab_220719003624130027.avif"},{id:"archive-image-078",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/6905213d00e214ca38d5cf52_220719003624110010.avif"},{id:"archive-image-079",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/6905217315633a4e4357e92d_230217007904020031.avif"},{id:"archive-image-080",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/6905219f15633a4e4357f310_The%20Volume%20Poster2.avif"},{id:"archive-image-081",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/680a7526d4c68538179a38b4_stephen-cosco-75.avif"},{id:"archive-image-082",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/690520de2cef3e7b8fdd99a0_20240207-2171105-175.avif"},{id:"archive-image-083",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69051cf68de1209418552ec2_25-04-10-4381113-0%2032-positive.avif"},{id:"archive-image-084",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076de90a0c537e5a8117bf_060fb36fc6a880fa6112089dfe87dcc9_cosco-archive-3.avif"}],Bu=[{id:"archive-mobile-image-001",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076dec5f456f77386386b2_cosco-archive-15.avif"},{id:"archive-mobile-image-002",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076deb4cb2d0116fe8da6e_cosco-archive-16.avif"},{id:"archive-mobile-image-003",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076deb6031dfaacaf6bdcd_cosco-archive-17.avif"},{id:"archive-mobile-image-004",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076deb043ccfe688541b6c_cosco-archive-14.avif"},{id:"archive-mobile-image-005",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076debedc89e709d163c7b_cosco-archive-18.avif"},{id:"archive-mobile-image-006",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076deb225ee4460cfba164_cosco-archive-19.avif"},{id:"archive-mobile-image-007",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076deb5f456f7738638681_cosco-archive-36.avif"},{id:"archive-mobile-image-008",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076deb750fdefaeabf3539_cosco-archive-20.avif"},{id:"archive-mobile-image-009",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076deb3c228aa6bd2163b4_cosco-archive-60.avif"},{id:"archive-mobile-image-010",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076deb043ccfe688541b56_cosco-archive-52.avif"},{id:"archive-mobile-image-011",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076deb19ca00923307b196_cosco-archive-51.avif"},{id:"archive-mobile-image-012",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076deb0fa10c5d626074f7_cosco-archive-35.avif"},{id:"archive-mobile-image-013",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076dea016fe09d35a68849_cosco-archive-50.avif"},{id:"archive-mobile-image-014",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076deaa57558ad3369260d_cosco-archive-72.avif"},{id:"archive-mobile-image-015",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076dea1c8930c360f07be0_cosco-archive-30.avif"},{id:"archive-mobile-image-016",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076dea85c0c5cdaa8d31a6_cosco-archive-8.avif"},{id:"archive-mobile-image-017",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076dea5b93950f7686908d_cosco-archive-12.avif"},{id:"archive-mobile-image-018",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076dea7bfc824831784c8a_cosco-archive-11.avif"},{id:"archive-mobile-image-019",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076deaf9d2a79222b02460_cosco-archive-5.avif"},{id:"archive-mobile-image-020",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076dea925b642e45856ebe_cosco-archive-37.avif"},{id:"archive-mobile-image-021",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076dea9984bd617f963fb6_cosco-archive-70.avif"},{id:"archive-mobile-image-022",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076deaa632f23997a84a5d_cosco-archive-48.avif"},{id:"archive-mobile-image-023",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076dea407b21d560d6c7d2_cosco-archive-85.avif"},{id:"archive-mobile-image-024",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076dea1ac3ba7124b3e179_cosco-archive-66.avif"},{id:"archive-mobile-image-025",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076deab47331a4d73876fd_cosco-archive-65.avif"},{id:"archive-mobile-image-026",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076deacf5965b7ab1a1e96_cosco-archive-31.avif"},{id:"archive-mobile-image-027",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076de93917f833252e661d_cosco-archive-58.avif"},{id:"archive-mobile-image-028",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076de90a0c537e5a8117bf_cosco-archive-3.avif"},{id:"archive-mobile-image-029",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076de9b877c8b1484f58e4_cosco-archive-43.avif"},{id:"archive-mobile-image-030",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076de950f2e3002303ecd3_cosco-archive-28.avif"},{id:"archive-mobile-image-031",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076de99e2deb54cc090aef_cosco-archive-33.avif"},{id:"archive-mobile-image-032",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076de92d82c1e31fbf2d42_cosco-archive-46.avif"},{id:"archive-mobile-image-033",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076de9559f31a9c059fc29_cosco-archive-13.avif"},{id:"archive-mobile-image-034",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076de9edee260753a37f86_cosco-archive-67.avif"},{id:"archive-mobile-image-035",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076de83d343eacde823a7a_cosco-archive-82.avif"},{id:"archive-mobile-image-036",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076de84bb4b377555c8847_cosco-archive-41.avif"},{id:"archive-mobile-image-037",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076de8559f31a9c059fbd0_cosco-archive-47.avif"},{id:"archive-mobile-image-038",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076de806bc77ef643eb12f_cosco-archive-64.avif"},{id:"archive-mobile-image-039",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076de819ca00923307b157_cosco-archive-55.avif"},{id:"archive-mobile-image-040",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076de82a7fee6a709b9505_cosco-archive-45.avif"},{id:"archive-mobile-image-041",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076de89e714bc46b571d68_cosco-archive-83.avif"},{id:"archive-mobile-image-042",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076de86c5b3049dde525b9_cosco-archive-84.avif"},{id:"archive-mobile-image-043",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076de8af19854065b59c2d_cosco-archive-81.avif"},{id:"archive-mobile-image-044",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076de744bba020b2d36bbf_cosco-archive-79.avif"},{id:"archive-mobile-image-045",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076de7925b642e45856e43_cosco-archive-71.avif"},{id:"archive-mobile-image-046",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076de7eabdeca3151a1a8d_cosco-archive-74.avif"},{id:"archive-mobile-image-047",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076de7fedc115462996d68_cosco-archive-76.avif"},{id:"archive-mobile-image-048",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076de7e02d9505305f4a82_cosco-archive-78.avif"},{id:"archive-mobile-image-049",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076de783eb3b81d3585001_cosco-archive-75.avif"},{id:"archive-mobile-image-050",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076de796f08def568bc855_cosco-archive-80.avif"},{id:"archive-mobile-image-051",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076de71ac3ba7124b3e0ad_cosco-archive-77.avif"},{id:"archive-mobile-image-052",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076de718905abc392280b4_cosco-archive-73.avif"},{id:"archive-mobile-image-053",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076de7f205e1e50505af2a_cosco-archive-56.avif"},{id:"archive-mobile-image-054",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076de7fa6875df889e1ea9_cosco-archive-69.avif"},{id:"archive-mobile-image-055",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076de783fc6e08aac37588_cosco-archive-57.avif"},{id:"archive-mobile-image-056",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076de72d0be33e59717b6e_cosco-archive-63.avif"},{id:"archive-mobile-image-057",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076de77e5fc505b9bf4e2a_cosco-archive-68.avif"},{id:"archive-mobile-image-058",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076de75b508b4ffc9b8a60_cosco-archive-44.avif"},{id:"archive-mobile-image-059",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076de75b508b4ffc9b8a5d_cosco-archive-59.avif"},{id:"archive-mobile-image-060",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076de71f4a5827fe6ca011_cosco-archive-6.avif"},{id:"archive-mobile-image-061",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076de72c7c4e086bdfe86b_cosco-archive-49.avif"},{id:"archive-mobile-image-062",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076de7637da0b05db959e0_cosco-archive-54.avif"},{id:"archive-mobile-image-063",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076de7f9d2a79222b023d6_cosco-archive-53.avif"},{id:"archive-mobile-image-064",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076de6180c4364fcb88131_cosco-archive-42.avif"},{id:"archive-mobile-image-065",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076de669261d0557db24f2_cosco-archive-61.avif"},{id:"archive-mobile-image-066",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076de66031dfaacaf6bd2d_cosco-archive-62.avif"},{id:"archive-mobile-image-067",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076de696b2ea520c783dd9_cosco-archive-26.avif"},{id:"archive-mobile-image-068",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076de6d1dd54727813ddcb_cosco-archive-27.avif"},{id:"archive-mobile-image-069",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076de67cd6438e3bbd0242_cosco-archive-40.avif"},{id:"archive-mobile-image-070",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076de63d343eacde823a37_cosco-archive-39.avif"},{id:"archive-mobile-image-071",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076de6ad50d9bd766757f0_cosco-archive-38.avif"},{id:"archive-mobile-image-072",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076de60fa10c5d62607433_cosco-archive-7.avif"},{id:"archive-mobile-image-073",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076de683eb3b81d3584fc9_cosco-archive-9.avif"},{id:"archive-mobile-image-074",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076de621ac2617e79f1211_cosco-archive-22.avif"},{id:"archive-mobile-image-075",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076de6f863f58737f20f1b_cosco-archive-24.avif"},{id:"archive-mobile-image-076",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076de60d3c837ca04f6f0a_cosco-archive-1.avif"},{id:"archive-mobile-image-077",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076de625d3d4f912d22073_cosco-archive-4.avif"},{id:"archive-mobile-image-078",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076de63ffc25050aedf1a4_cosco-archive-32.avif"},{id:"archive-mobile-image-079",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076de687ede58922159491_cosco-archive-2.avif"},{id:"archive-mobile-image-080",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076de67af118e819073724_cosco-archive-29.avif"},{id:"archive-mobile-image-081",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076de618905abc39228098_cosco-archive-25.avif"},{id:"archive-mobile-image-082",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076de6e20b5f65048e41c0_cosco-archive-23.avif"},{id:"archive-mobile-image-083",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076de6007b33fe8999590b_cosco-archive-21.avif"},{id:"archive-mobile-image-084",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076de63f5592f89dae8688_cosco-archive-10.avif"},{id:"archive-mobile-image-085",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076de64283f4085fc72faf_cosco-archive-34.avif"}]});function Ks(){let r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(zt[r&255]+zt[r>>8&255]+zt[r>>16&255]+zt[r>>24&255]+"-"+zt[e&255]+zt[e>>8&255]+"-"+zt[e>>16&15|64]+zt[e>>24&255]+"-"+zt[t&63|128]+zt[t>>8&255]+"-"+zt[t>>16&255]+zt[t>>24&255]+zt[i&255]+zt[i>>8&255]+zt[i>>16&255]+zt[i>>24&255]).toLowerCase()}function je(r,e,t){return Math.max(e,Math.min(t,r))}function Pd(r,e){return(r%e+e)%e}function zb(r,e,t,i,n){return i+(r-e)*(n-i)/(t-e)}function Vb(r,e,t){return r!==e?(t-r)/(e-r):0}function jo(r,e,t){return(1-t)*r+t*e}function Gb(r,e,t,i){return jo(r,e,1-Math.exp(-t*i))}function Wb(r,e=1){return e-Math.abs(Pd(r,e*2)-e)}function Xb(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function qb(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function Yb(r,e){return r+Math.floor(Math.random()*(e-r+1))}function jb(r,e){return r+Math.random()*(e-r)}function Zb(r){return r*(.5-Math.random())}function $b(r){r!==void 0&&(eg=r);let e=eg+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Kb(r){return r*Yo}function Jb(r){return r*Bs}function Qb(r){return(r&r-1)===0&&r!==0}function ex(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function tx(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function ix(r,e,t,i,n){let s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+i)/2),h=o((e+i)/2),u=s((e-i)/2),d=o((e-i)/2),f=s((i-e)/2),_=o((i-e)/2);switch(n){case"XYX":r.set(a*h,l*u,l*d,a*c);break;case"YZY":r.set(l*d,a*h,l*u,a*c);break;case"ZXZ":r.set(l*u,l*d,a*h,a*c);break;case"XZX":r.set(a*h,l*_,l*f,a*c);break;case"YXY":r.set(l*f,a*h,l*_,a*c);break;case"ZYZ":r.set(l*_,l*f,a*h,a*c);break;default:}}function Fs(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Qt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}function Ld(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function ks(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function lv(){let r=ks("canvas");return r.style.display="block",r}function Hs(r){r in ig||(ig[r]=!0)}function cv(r,e,t){return new Promise(function(i,n){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:n();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function nx(){let r={enabled:!0,workingColorSpace:Ur,spaces:{},convert:function(n,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===tt&&(n.r=En(n.r),n.g=En(n.g),n.b=En(n.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(n.applyMatrix3(this.spaces[s].toXYZ),n.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===tt&&(n.r=Ns(n.r),n.g=Ns(n.g),n.b=Ns(n.b))),n},workingToColorSpace:function(n,s){return this.convert(n,this.workingColorSpace,s)},colorSpaceToWorking:function(n,s){return this.convert(n,s,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Cn?$o:this.spaces[n].transfer},getToneMappingMode:function(n){return this.spaces[n].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(n,s=this.workingColorSpace){return n.fromArray(this.spaces[s].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,s,o){return n.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(n,s){return Hs("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(n,s)},toWorkingColorSpace:function(n,s){return Hs("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(n,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return r.define({[Ur]:{primaries:e,whitePoint:i,transfer:$o,toXYZ:ng,fromXYZ:rg,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Nt},outputColorSpaceConfig:{drawingBufferColorSpace:Nt}},[Nt]:{primaries:e,whitePoint:i,transfer:tt,toXYZ:ng,fromXYZ:rg,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Nt}}}),r}function En(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Ns(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}function zu(r){return typeof HTMLImageElement!="undefined"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&r instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&r instanceof ImageBitmap?ql.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:{}}function Gu(r,e,t,i,n){for(let s=0,o=r.length-3;s<=o;s+=3){Lr.fromArray(r,s);let a=n.x*Math.abs(Lr.x)+n.y*Math.abs(Lr.y)+n.z*Math.abs(Lr.z),l=e.dot(Lr),c=t.dot(Lr),h=i.dot(Lr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}function id(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}function gx(r,e,t,i,n,s,o,a){let l;if(e.side===ti?l=i.intersectTriangle(o,s,n,!0,a):l=i.intersectTriangle(n,s,o,e.side===wn,a),l===null)return null;Fl.copy(a),Fl.applyMatrix4(r.matrixWorld);let c=t.ray.origin.distanceTo(Fl);return c<t.near||c>t.far?null:{distance:c,point:Fl.clone(),object:r}}function Nl(r,e,t,i,n,s,o,a,l,c){r.getVertexPosition(a,Ll),r.getVertexPosition(l,Il),r.getVertexPosition(c,Dl);let h=gx(r,e,t,i,Ll,Il,Dl,mg);if(h){let u=new G;jn.getBarycoord(mg,Ll,Il,Dl,u),n&&(h.uv=jn.getInterpolatedAttribute(n,a,l,c,u,new ze)),s&&(h.uv1=jn.getInterpolatedAttribute(s,a,l,c,u,new ze)),o&&(h.normal=jn.getInterpolatedAttribute(o,a,l,c,u,new G),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new G,materialIndex:0};jn.getNormal(Ll,Il,Dl,d.normal),h.face=d,h.barycoord=u}return h}function Gr(r){let e={};for(let t in r){e[t]={};for(let i in r[t]){let n=r[t][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?e[t][i]=null:e[t][i]=n.clone():Array.isArray(n)?e[t][i]=n.slice():e[t][i]=n}}return e}function Wt(r){let e={};for(let t=0;t<r.length;t++){let i=Gr(r[t]);for(let n in i)e[n]=i[n]}return e}function vx(r){let e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Id(r){let e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ke.workingColorSpace}function Bl(r,e){return!r||r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function Ex(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function yg(r,e){return r.distance-e.distance}function dd(r,e,t,i){let n=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(n=!1),n===!0&&i===!0){let s=r.children;for(let o=0,a=s.length;o<a;o++)dd(s[o],e,t,!0)}}function Fd(r,e,t,i){let n=Dx(i);switch(t){case Ed:return r*e;case Td:return r*e/n.components*n.byteLength;case wc:return r*e/n.components*n.byteLength;case Ad:return r*e*2/n.components*n.byteLength;case Tc:return r*e*2/n.components*n.byteLength;case wd:return r*e*3/n.components*n.byteLength;case Fi:return r*e*4/n.components*n.byteLength;case Ac:return r*e*4/n.components*n.byteLength;case va:case _a:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case ya:case ba:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Rc:case Lc:return Math.max(r,16)*Math.max(e,8)/4;case Cc:case Pc:return Math.max(r,8)*Math.max(e,8)/2;case Ic:case Dc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Oc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Fc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Nc:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Uc:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Bc:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case kc:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Hc:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case zc:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Vc:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Gc:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Wc:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Xc:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case qc:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Yc:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case jc:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Zc:case $c:case Kc:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Jc:case Qc:return Math.ceil(r/4)*Math.ceil(e/4)*8;case eh:case th:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Dx(r){switch(r){case nn:case bd:return{byteLength:1,components:1};case Ys:case xd:case js:return{byteLength:2,components:1};case Mc:case Ec:return{byteLength:2,components:4};case nr:case Sc:case rn:return{byteLength:4,components:1};case Sd:case Md:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}var uc,ir,bg,fd,xg,pd,Sg,en,wn,ti,Si,Tn,Fr,md,gd,vd,Mg,$n,Eg,wg,Tg,Ag,Cg,Rg,Pg,Lg,zl,Vl,Ig,Dg,Og,Fg,Ng,Ug,Bg,kg,Hg,dc,fc,pc,Nr,mc,gc,vc,_c,_d,zg,Vg,An,Gg,Wg,Xg,qg,Yg,jg,Zg,yd,zr,Vr,yc,bc,ma,Gl,Zn,Wl,Oi,$g,ga,Ut,xc,tn,nn,bd,xd,Ys,Sc,nr,rn,js,Mc,Ec,Zs,Sd,Md,Ed,wd,Fi,Us,$s,Td,wc,Ad,Tc,Ac,va,_a,ya,ba,Cc,Rc,Pc,Lc,Ic,Dc,Oc,Fc,Nc,Uc,Bc,kc,Hc,zc,Vc,Gc,Wc,Xc,qc,Yc,jc,Zc,$c,Kc,Jc,Qc,eh,th,Zo,Xl,kl,od,ad,ld,Kg,Jg,Qg,ev,Cn,Nt,Ur,$o,tt,Or,cd,tv,iv,nv,Cd,rv,sv,ov,av,hd,Rd,Hi,Ko,Ki,zt,eg,Yo,Bs,ih,ze,yi,G,ku,tg,ke,Hu,ig,ng,rg,Ke,Ss,ql,rx,zs,sx,Vu,ei,xt,Yl,Ji,Jo,jl,Kn,_n,Ui,xl,Ms,Es,ws,Vn,Gn,Pr,Go,Sl,Ml,Lr,ox,Wo,Wu,Vs,yn,Xu,El,Wn,qu,wl,Yu,Qo,At,Ts,Bi,ax,lx,Xn,Tl,gi,sg,og,Qi,Gs,cx,ag,As,bn,Al,Xo,hx,ux,lg,cg,hg,ug,dx,Cs,ju,bi,ki,xn,Zu,Sn,Rs,Ps,dg,$u,Ku,Ju,Qu,ed,td,jn,hv,qn,Cl,$e,Vt,fx,Br,Jn,Tt,Rl,px,_i,ea,ta,$i,mx,Di,nd,Ls,vi,qo,Dt,Qn,fg,Ir,Pl,pg,Ll,Il,Dl,rd,Ol,mg,Fl,hi,Ws,uv,_x,yx,zi,ia,Yn,gg,vg,Gt,Is,Ds,Zl,na,$l,Mn,bx,Xs,ra,sd,xx,Sx,Zi,Dr,Mx,Ul,sa,oa,aa,la,kr,Kl,Jl,Hr,Ql,ec,tc,xi,er,ic,nc,rc,ca,tr,sc,Hl,oc,dv,qs,Os,ac,ha,lc,cc,ua,hc,da,Dd,wx,Od,Tx,Ax,Cx,Rx,Px,Lx,Ix,ud,dt,pA,_g,fa,pa,Nd=Yt(()=>{uc="180",ir={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},bg=0,fd=1,xg=2,pd=1,Sg=2,en=3,wn=0,ti=1,Si=2,Tn=0,Fr=1,md=2,gd=3,vd=4,Mg=5,$n=100,Eg=101,wg=102,Tg=103,Ag=104,Cg=200,Rg=201,Pg=202,Lg=203,zl=204,Vl=205,Ig=206,Dg=207,Og=208,Fg=209,Ng=210,Ug=211,Bg=212,kg=213,Hg=214,dc=0,fc=1,pc=2,Nr=3,mc=4,gc=5,vc=6,_c=7,_d=0,zg=1,Vg=2,An=0,Gg=1,Wg=2,Xg=3,qg=4,Yg=5,jg=6,Zg=7,yd=300,zr=301,Vr=302,yc=303,bc=304,ma=306,Gl=1e3,Zn=1001,Wl=1002,Oi=1003,$g=1004,ga=1005,Ut=1006,xc=1007,tn=1008,nn=1009,bd=1010,xd=1011,Ys=1012,Sc=1013,nr=1014,rn=1015,js=1016,Mc=1017,Ec=1018,Zs=1020,Sd=35902,Md=35899,Ed=1021,wd=1022,Fi=1023,Us=1026,$s=1027,Td=1028,wc=1029,Ad=1030,Tc=1031,Ac=1033,va=33776,_a=33777,ya=33778,ba=33779,Cc=35840,Rc=35841,Pc=35842,Lc=35843,Ic=36196,Dc=37492,Oc=37496,Fc=37808,Nc=37809,Uc=37810,Bc=37811,kc=37812,Hc=37813,zc=37814,Vc=37815,Gc=37816,Wc=37817,Xc=37818,qc=37819,Yc=37820,jc=37821,Zc=36492,$c=36494,Kc=36495,Jc=36283,Qc=36284,eh=36285,th=36286,Zo=2300,Xl=2301,kl=2302,od=2400,ad=2401,ld=2402,Kg=3200,Jg=3201,Qg=0,ev=1,Cn="",Nt="srgb",Ur="srgb-linear",$o="linear",tt="srgb",Or=7680,cd=519,tv=512,iv=513,nv=514,Cd=515,rv=516,sv=517,ov=518,av=519,hd=35044,Rd="300 es",Hi=2e3,Ko=2001,Ki=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let n=i[e];if(n!==void 0){let s=n.indexOf(t);s!==-1&&n.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let n=i.slice(0);for(let s=0,o=n.length;s<o;s++)n[s].call(this,e);e.target=null}}},zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],eg=1234567,Yo=Math.PI/180,Bs=180/Math.PI;ih={DEG2RAD:Yo,RAD2DEG:Bs,generateUUID:Ks,clamp:je,euclideanModulo:Pd,mapLinear:zb,inverseLerp:Vb,lerp:jo,damp:Gb,pingpong:Wb,smoothstep:Xb,smootherstep:qb,randInt:Yb,randFloat:jb,randFloatSpread:Zb,seededRandom:$b,degToRad:Kb,radToDeg:Jb,isPowerOfTwo:Qb,ceilPowerOfTwo:ex,floorPowerOfTwo:tx,setQuaternionFromProperEuler:ix,normalize:Qt,denormalize:Fs},ze=class r{constructor(e=0,t=0){r.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6],this.y=n[1]*t+n[4]*i+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),n=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*n+e.x,this.y=s*n+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},yi=class{constructor(e=0,t=0,i=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=n}static slerpFlat(e,t,i,n,s,o,a){let l=i[n+0],c=i[n+1],h=i[n+2],u=i[n+3],d=s[o+0],f=s[o+1],_=s[o+2],g=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=_,e[t+3]=g;return}if(u!==g||l!==d||c!==f||h!==_){let m=1-a,p=l*d+c*f+h*_+u*g,M=p>=0?1:-1,b=1-p*p;if(b>Number.EPSILON){let T=Math.sqrt(b),C=Math.atan2(T,p*M);m=Math.sin(m*C)/T,a=Math.sin(a*C)/T}let S=a*M;if(l=l*m+d*S,c=c*m+f*S,h=h*m+_*S,u=u*m+g*S,m===1-a){let T=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=T,c*=T,h*=T,u*=T}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,n,s,o){let a=i[n],l=i[n+1],c=i[n+2],h=i[n+3],u=s[o],d=s[o+1],f=s[o+2],_=s[o+3];return e[t]=a*_+h*u+l*f-c*d,e[t+1]=l*_+h*d+c*u-a*f,e[t+2]=c*_+h*f+a*d-l*u,e[t+3]=h*_-a*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,n){return this._x=e,this._y=t,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,n=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(n/2),u=a(s/2),d=l(i/2),f=l(n/2),_=l(s/2);switch(o){case"XYZ":this._x=d*h*u+c*f*_,this._y=c*f*u-d*h*_,this._z=c*h*_+d*f*u,this._w=c*h*u-d*f*_;break;case"YXZ":this._x=d*h*u+c*f*_,this._y=c*f*u-d*h*_,this._z=c*h*_-d*f*u,this._w=c*h*u+d*f*_;break;case"ZXY":this._x=d*h*u-c*f*_,this._y=c*f*u+d*h*_,this._z=c*h*_+d*f*u,this._w=c*h*u-d*f*_;break;case"ZYX":this._x=d*h*u-c*f*_,this._y=c*f*u+d*h*_,this._z=c*h*_-d*f*u,this._w=c*h*u+d*f*_;break;case"YZX":this._x=d*h*u+c*f*_,this._y=c*f*u+d*h*_,this._z=c*h*_-d*f*u,this._w=c*h*u-d*f*_;break;case"XZY":this._x=d*h*u-c*f*_,this._y=c*f*u-d*h*_,this._z=c*h*_+d*f*u,this._w=c*h*u+d*f*_;break;default:}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,n=Math.sin(i);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],n=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=i+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(o-n)*f}else if(i>a&&i>u){let f=2*Math.sqrt(1+i-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(n+o)/f,this._z=(s+c)/f}else if(a>u){let f=2*Math.sqrt(1+a-i-u);this._w=(s-c)/f,this._x=(n+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-i-a);this._w=(o-n)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(je(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let n=Math.min(1,t/i);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,n=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+o*a+n*c-s*l,this._y=n*h+o*l+s*a-i*c,this._z=s*h+o*c+i*l-n*a,this._w=o*h-i*a-n*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,n=this._y,s=this._z,o=this._w,a=o*e._w+i*e._x+n*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=n,this._z=s,this;let l=1-a*a;if(l<=Number.EPSILON){let f=1-t;return this._w=f*o+t*this._w,this._x=f*i+t*this._x,this._y=f*n+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=o*u+this._w*d,this._x=i*u+this._x*d,this._y=n*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(n*Math.sin(e),n*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},G=class r{constructor(e=0,t=0,i=0){r.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(tg.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(tg.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,n=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*n,this.y=s[1]*t+s[4]*i+s[7]*n,this.z=s[2]*t+s[5]*i+s[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,n=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*n+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*n+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*n+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*n+s[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,n=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*n-a*i),h=2*(a*t-s*n),u=2*(s*i-o*t);return this.x=t+l*c+o*u-a*h,this.y=i+l*h+a*c-s*u,this.z=n+l*u+s*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,n=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*n,this.y=s[1]*t+s[5]*i+s[9]*n,this.z=s[2]*t+s[6]*i+s[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this.z=je(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this.z=je(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,n=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=n*l-s*a,this.y=s*o-i*l,this.z=i*a-n*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ku.copy(this).projectOnVector(e),this.sub(ku)}reflect(e){return this.sub(ku.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,n=this.z-e.z;return t*t+i*i+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let n=Math.sin(t)*e;return this.x=n*Math.sin(i),this.y=Math.cos(t)*e,this.z=n*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ku=new G,tg=new yi,ke=class r{constructor(e,t,i,n,s,o,a,l,c){r.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,n,s,o,a,l,c)}set(e,t,i,n,s,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=n,h[2]=a,h[3]=t,h[4]=s,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,n=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],f=i[5],_=i[8],g=n[0],m=n[3],p=n[6],M=n[1],b=n[4],S=n[7],T=n[2],C=n[5],P=n[8];return s[0]=o*g+a*M+l*T,s[3]=o*m+a*b+l*C,s[6]=o*p+a*S+l*P,s[1]=c*g+h*M+u*T,s[4]=c*m+h*b+u*C,s[7]=c*p+h*S+u*P,s[2]=d*g+f*M+_*T,s[5]=d*m+f*b+_*C,s[8]=d*p+f*S+_*P,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-i*s*h+i*a*l+n*s*c-n*o*l}invert(){let e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,d=a*l-h*s,f=c*s-o*l,_=t*u+i*d+n*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/_;return e[0]=u*g,e[1]=(n*c-h*i)*g,e[2]=(a*i-n*o)*g,e[3]=d*g,e[4]=(h*t-n*l)*g,e[5]=(n*s-a*t)*g,e[6]=f*g,e[7]=(i*l-c*t)*g,e[8]=(o*t-i*s)*g,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,n,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-n*c,n*l,-n*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Hu.makeScale(e,t)),this}rotate(e){return this.premultiply(Hu.makeRotation(-e)),this}translate(e,t){return this.premultiply(Hu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let n=0;n<9;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Hu=new ke;ig={};ng=new ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),rg=new ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Ke=nx();ql=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Ss===void 0&&(Ss=ks("canvas")),Ss.width=e.width,Ss.height=e.height;let n=Ss.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),i=Ss}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){let t=ks("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let n=i.getImageData(0,0,e.width,e.height),s=n.data;for(let o=0;o<s.length;o++)s[o]=En(s[o]/255)*255;return i.putImageData(n,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(En(t[i]/255)*255):t[i]=En(t[i]);return{data:t,width:e.width,height:e.height}}else return e}},rx=0,zs=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:rx++}),this.uuid=Ks(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement!="undefined"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let s;if(Array.isArray(n)){s=[];for(let o=0,a=n.length;o<a;o++)n[o].isDataTexture?s.push(zu(n[o].image)):s.push(zu(n[o]))}else s=zu(n);i.url=s}return t||(e.images[this.uuid]=i),i}};sx=0,Vu=new G,ei=class r extends Ki{constructor(e=r.DEFAULT_IMAGE,t=r.DEFAULT_MAPPING,i=Zn,n=Zn,s=Ut,o=tn,a=Fi,l=nn,c=r.DEFAULT_ANISOTROPY,h=Cn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:sx++}),this.uuid=Ks(),this.name="",this.source=new zs(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ze(0,0),this.repeat=new ze(1,1),this.center=new ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Vu).x}get height(){return this.source.getSize(Vu).y}get depth(){return this.source.getSize(Vu).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0)continue;let n=this[t];n!==void 0&&(n&&i&&n.isVector2&&i.isVector2||n&&i&&n.isVector3&&i.isVector3||n&&i&&n.isMatrix3&&i.isMatrix3?n.copy(i):this[t]=i)}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==yd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Gl:e.x=e.x-Math.floor(e.x);break;case Zn:e.x=e.x<0?0:1;break;case Wl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Gl:e.y=e.y-Math.floor(e.y);break;case Zn:e.y=e.y<0?0:1;break;case Wl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};ei.DEFAULT_IMAGE=null;ei.DEFAULT_MAPPING=yd;ei.DEFAULT_ANISOTROPY=1;xt=class r{constructor(e=0,t=0,i=0,n=1){r.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,n=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*n+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*n+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*n+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*n+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,n,s,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],_=l[9],g=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+g)<.1&&Math.abs(_+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let b=(c+1)/2,S=(f+1)/2,T=(p+1)/2,C=(h+d)/4,P=(u+g)/4,I=(_+m)/4;return b>S&&b>T?b<.01?(i=0,n=.707106781,s=.707106781):(i=Math.sqrt(b),n=C/i,s=P/i):S>T?S<.01?(i=.707106781,n=0,s=.707106781):(n=Math.sqrt(S),i=C/n,s=I/n):T<.01?(i=.707106781,n=.707106781,s=0):(s=Math.sqrt(T),i=P/s,n=I/s),this.set(i,n,s,t),this}let M=Math.sqrt((m-_)*(m-_)+(u-g)*(u-g)+(d-h)*(d-h));return Math.abs(M)<.001&&(M=1),this.x=(m-_)/M,this.y=(u-g)/M,this.z=(d-h)/M,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this.z=je(this.z,e.z,t.z),this.w=je(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this.z=je(this.z,e,t),this.w=je(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Yl=class extends Ki{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ut,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new xt(0,0,e,t),this.scissorTest=!1,this.viewport=new xt(0,0,e,t);let n={width:e,height:t,depth:i.depth},s=new ei(n);this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){let t={minFilter:Ut,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let n=0,s=this.textures.length;n<s;n++)this.textures[n].image.width=e,this.textures[n].image.height=t,this.textures[n].image.depth=i,this.textures[n].isArrayTexture=this.textures[n].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new zs(n)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ji=class extends Yl{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Jo=class extends ei{constructor(e=null,t=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=Oi,this.minFilter=Oi,this.wrapR=Zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},jl=class extends ei{constructor(e=null,t=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=Oi,this.minFilter=Oi,this.wrapR=Zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Kn=class{constructor(e=new G(1/0,1/0,1/0),t=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Ui.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Ui.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Ui.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Ui):Ui.fromBufferAttribute(s,o),Ui.applyMatrix4(e.matrixWorld),this.expandByPoint(Ui);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),xl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),xl.copy(i.boundingBox)),xl.applyMatrix4(e.matrixWorld),this.union(xl)}let n=e.children;for(let s=0,o=n.length;s<o;s++)this.expandByObject(n[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ui),Ui.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Go),Sl.subVectors(this.max,Go),Ms.subVectors(e.a,Go),Es.subVectors(e.b,Go),ws.subVectors(e.c,Go),Vn.subVectors(Es,Ms),Gn.subVectors(ws,Es),Pr.subVectors(Ms,ws);let t=[0,-Vn.z,Vn.y,0,-Gn.z,Gn.y,0,-Pr.z,Pr.y,Vn.z,0,-Vn.x,Gn.z,0,-Gn.x,Pr.z,0,-Pr.x,-Vn.y,Vn.x,0,-Gn.y,Gn.x,0,-Pr.y,Pr.x,0];return!Gu(t,Ms,Es,ws,Sl)||(t=[1,0,0,0,1,0,0,0,1],!Gu(t,Ms,Es,ws,Sl))?!1:(Ml.crossVectors(Vn,Gn),t=[Ml.x,Ml.y,Ml.z],Gu(t,Ms,Es,ws,Sl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ui).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ui).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(_n[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),_n[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),_n[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),_n[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),_n[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),_n[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),_n[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),_n[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(_n),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},_n=[new G,new G,new G,new G,new G,new G,new G,new G],Ui=new G,xl=new Kn,Ms=new G,Es=new G,ws=new G,Vn=new G,Gn=new G,Pr=new G,Go=new G,Sl=new G,Ml=new G,Lr=new G;ox=new Kn,Wo=new G,Wu=new G,Vs=class{constructor(e=new G,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):ox.setFromPoints(e).getCenter(i);let n=0;for(let s=0,o=e.length;s<o;s++)n=Math.max(n,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Wo.subVectors(e,this.center);let t=Wo.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),n=(i-this.radius)*.5;this.center.addScaledVector(Wo,n/i),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Wu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Wo.copy(e.center).add(Wu)),this.expandByPoint(Wo.copy(e.center).sub(Wu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},yn=new G,Xu=new G,El=new G,Wn=new G,qu=new G,wl=new G,Yu=new G,Qo=class{constructor(e=new G,t=new G(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,yn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=yn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(yn.copy(this.origin).addScaledVector(this.direction,t),yn.distanceToSquared(e))}distanceSqToSegment(e,t,i,n){Xu.copy(e).add(t).multiplyScalar(.5),El.copy(t).sub(e).normalize(),Wn.copy(this.origin).sub(Xu);let s=e.distanceTo(t)*.5,o=-this.direction.dot(El),a=Wn.dot(this.direction),l=-Wn.dot(El),c=Wn.lengthSq(),h=Math.abs(1-o*o),u,d,f,_;if(h>0)if(u=o*l-a,d=o*a-l,_=s*h,u>=0)if(d>=-_)if(d<=_){let g=1/h;u*=g,d*=g,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-_?(u=Math.max(0,-(-o*s+a)),d=u>0?-s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c):d<=_?(u=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(u=Math.max(0,-(o*s+a)),d=u>0?s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c);else d=o>0?-s:s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),n&&n.copy(Xu).addScaledVector(El,d),f}intersectSphere(e,t){yn.subVectors(e.center,this.origin);let i=yn.dot(this.direction),n=yn.dot(yn)-i*i,s=e.radius*e.radius;if(n>s)return null;let o=Math.sqrt(s-n),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,n,s,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,n=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,n=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),i>o||s>n||((s>i||isNaN(i))&&(i=s),(o<n||isNaN(n))&&(n=o),u>=0?(a=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),i>l||a>n)||((a>i||i!==i)&&(i=a),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,t)}intersectsBox(e){return this.intersectBox(e,yn)!==null}intersectTriangle(e,t,i,n,s){qu.subVectors(t,e),wl.subVectors(i,e),Yu.crossVectors(qu,wl);let o=this.direction.dot(Yu),a;if(o>0){if(n)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Wn.subVectors(this.origin,e);let l=a*this.direction.dot(wl.crossVectors(Wn,wl));if(l<0)return null;let c=a*this.direction.dot(qu.cross(Wn));if(c<0||l+c>o)return null;let h=-a*Wn.dot(Yu);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},At=class r{constructor(e,t,i,n,s,o,a,l,c,h,u,d,f,_,g,m){r.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,n,s,o,a,l,c,h,u,d,f,_,g,m)}set(e,t,i,n,s,o,a,l,c,h,u,d,f,_,g,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=n,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=_,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new r().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,n=1/Ts.setFromMatrixColumn(e,0).length(),s=1/Ts.setFromMatrixColumn(e,1).length(),o=1/Ts.setFromMatrixColumn(e,2).length();return t[0]=i[0]*n,t[1]=i[1]*n,t[2]=i[2]*n,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,n=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(n),c=Math.sin(n),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){let d=o*h,f=o*u,_=a*h,g=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+_*c,t[5]=d-g*c,t[9]=-a*l,t[2]=g-d*c,t[6]=_+f*c,t[10]=o*l}else if(e.order==="YXZ"){let d=l*h,f=l*u,_=c*h,g=c*u;t[0]=d+g*a,t[4]=_*a-f,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-_,t[6]=g+d*a,t[10]=o*l}else if(e.order==="ZXY"){let d=l*h,f=l*u,_=c*h,g=c*u;t[0]=d-g*a,t[4]=-o*u,t[8]=_+f*a,t[1]=f+_*a,t[5]=o*h,t[9]=g-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let d=o*h,f=o*u,_=a*h,g=a*u;t[0]=l*h,t[4]=_*c-f,t[8]=d*c+g,t[1]=l*u,t[5]=g*c+d,t[9]=f*c-_,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let d=o*l,f=o*c,_=a*l,g=a*c;t[0]=l*h,t[4]=g-d*u,t[8]=_*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=f*u+_,t[10]=d-g*u}else if(e.order==="XZY"){let d=o*l,f=o*c,_=a*l,g=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+g,t[5]=o*h,t[9]=f*u-_,t[2]=_*u-f,t[6]=a*h,t[10]=g*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ax,e,lx)}lookAt(e,t,i){let n=this.elements;return gi.subVectors(e,t),gi.lengthSq()===0&&(gi.z=1),gi.normalize(),Xn.crossVectors(i,gi),Xn.lengthSq()===0&&(Math.abs(i.z)===1?gi.x+=1e-4:gi.z+=1e-4,gi.normalize(),Xn.crossVectors(i,gi)),Xn.normalize(),Tl.crossVectors(gi,Xn),n[0]=Xn.x,n[4]=Tl.x,n[8]=gi.x,n[1]=Xn.y,n[5]=Tl.y,n[9]=gi.y,n[2]=Xn.z,n[6]=Tl.z,n[10]=gi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,n=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],f=i[13],_=i[2],g=i[6],m=i[10],p=i[14],M=i[3],b=i[7],S=i[11],T=i[15],C=n[0],P=n[4],I=n[8],x=n[12],E=n[1],O=n[5],H=n[9],W=n[13],$=n[2],K=n[6],q=n[10],oe=n[14],X=n[3],fe=n[7],ye=n[11],we=n[15];return s[0]=o*C+a*E+l*$+c*X,s[4]=o*P+a*O+l*K+c*fe,s[8]=o*I+a*H+l*q+c*ye,s[12]=o*x+a*W+l*oe+c*we,s[1]=h*C+u*E+d*$+f*X,s[5]=h*P+u*O+d*K+f*fe,s[9]=h*I+u*H+d*q+f*ye,s[13]=h*x+u*W+d*oe+f*we,s[2]=_*C+g*E+m*$+p*X,s[6]=_*P+g*O+m*K+p*fe,s[10]=_*I+g*H+m*q+p*ye,s[14]=_*x+g*W+m*oe+p*we,s[3]=M*C+b*E+S*$+T*X,s[7]=M*P+b*O+S*K+T*fe,s[11]=M*I+b*H+S*q+T*ye,s[15]=M*x+b*W+S*oe+T*we,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],n=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],_=e[3],g=e[7],m=e[11],p=e[15];return _*(+s*l*u-n*c*u-s*a*d+i*c*d+n*a*f-i*l*f)+g*(+t*l*f-t*c*d+s*o*d-n*o*f+n*c*h-s*l*h)+m*(+t*c*u-t*a*f-s*o*u+i*o*f+s*a*h-i*c*h)+p*(-n*a*h-t*l*u+t*a*d+n*o*u-i*o*d+i*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],_=e[12],g=e[13],m=e[14],p=e[15],M=u*m*c-g*d*c+g*l*f-a*m*f-u*l*p+a*d*p,b=_*d*c-h*m*c-_*l*f+o*m*f+h*l*p-o*d*p,S=h*g*c-_*u*c+_*a*f-o*g*f-h*a*p+o*u*p,T=_*u*l-h*g*l-_*a*d+o*g*d+h*a*m-o*u*m,C=t*M+i*b+n*S+s*T;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let P=1/C;return e[0]=M*P,e[1]=(g*d*s-u*m*s-g*n*f+i*m*f+u*n*p-i*d*p)*P,e[2]=(a*m*s-g*l*s+g*n*c-i*m*c-a*n*p+i*l*p)*P,e[3]=(u*l*s-a*d*s-u*n*c+i*d*c+a*n*f-i*l*f)*P,e[4]=b*P,e[5]=(h*m*s-_*d*s+_*n*f-t*m*f-h*n*p+t*d*p)*P,e[6]=(_*l*s-o*m*s-_*n*c+t*m*c+o*n*p-t*l*p)*P,e[7]=(o*d*s-h*l*s+h*n*c-t*d*c-o*n*f+t*l*f)*P,e[8]=S*P,e[9]=(_*u*s-h*g*s-_*i*f+t*g*f+h*i*p-t*u*p)*P,e[10]=(o*g*s-_*a*s+_*i*c-t*g*c-o*i*p+t*a*p)*P,e[11]=(h*a*s-o*u*s-h*i*c+t*u*c+o*i*f-t*a*f)*P,e[12]=T*P,e[13]=(h*g*n-_*u*n+_*i*d-t*g*d-h*i*m+t*u*m)*P,e[14]=(_*a*n-o*g*n-_*i*l+t*g*l+o*i*m-t*a*m)*P,e[15]=(o*u*n-h*a*n+h*i*l-t*u*l-o*i*d+t*a*d)*P,this}scale(e){let t=this.elements,i=e.x,n=e.y,s=e.z;return t[0]*=i,t[4]*=n,t[8]*=s,t[1]*=i,t[5]*=n,t[9]*=s,t[2]*=i,t[6]*=n,t[10]*=s,t[3]*=i,t[7]*=n,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,n))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),n=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,h=s*a;return this.set(c*o+i,c*a-n*l,c*l+n*a,0,c*a+n*l,h*a+i,h*l-n*o,0,c*l-n*a,h*l+n*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,n,s,o){return this.set(1,i,s,0,e,1,o,0,t,n,1,0,0,0,0,1),this}compose(e,t,i){let n=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,h=o+o,u=a+a,d=s*c,f=s*h,_=s*u,g=o*h,m=o*u,p=a*u,M=l*c,b=l*h,S=l*u,T=i.x,C=i.y,P=i.z;return n[0]=(1-(g+p))*T,n[1]=(f+S)*T,n[2]=(_-b)*T,n[3]=0,n[4]=(f-S)*C,n[5]=(1-(d+p))*C,n[6]=(m+M)*C,n[7]=0,n[8]=(_+b)*P,n[9]=(m-M)*P,n[10]=(1-(d+g))*P,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,i){let n=this.elements,s=Ts.set(n[0],n[1],n[2]).length(),o=Ts.set(n[4],n[5],n[6]).length(),a=Ts.set(n[8],n[9],n[10]).length();this.determinant()<0&&(s=-s),e.x=n[12],e.y=n[13],e.z=n[14],Bi.copy(this);let c=1/s,h=1/o,u=1/a;return Bi.elements[0]*=c,Bi.elements[1]*=c,Bi.elements[2]*=c,Bi.elements[4]*=h,Bi.elements[5]*=h,Bi.elements[6]*=h,Bi.elements[8]*=u,Bi.elements[9]*=u,Bi.elements[10]*=u,t.setFromRotationMatrix(Bi),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,n,s,o,a=Hi,l=!1){let c=this.elements,h=2*s/(t-e),u=2*s/(i-n),d=(t+e)/(t-e),f=(i+n)/(i-n),_,g;if(l)_=s/(o-s),g=o*s/(o-s);else if(a===Hi)_=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Ko)_=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,n,s,o,a=Hi,l=!1){let c=this.elements,h=2/(t-e),u=2/(i-n),d=-(t+e)/(t-e),f=-(i+n)/(i-n),_,g;if(l)_=1/(o-s),g=o/(o-s);else if(a===Hi)_=-2/(o-s),g=-(o+s)/(o-s);else if(a===Ko)_=-1/(o-s),g=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=_,c[14]=g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let n=0;n<16;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Ts=new G,Bi=new At,ax=new G(0,0,0),lx=new G(1,1,1),Xn=new G,Tl=new G,gi=new G,sg=new At,og=new yi,Qi=class r{constructor(e=0,t=0,i=0,n=r.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,n=this._order){return this._x=e,this._y=t,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let n=e.elements,s=n[0],o=n[4],a=n[8],l=n[1],c=n[5],h=n[9],u=n[2],d=n[6],f=n[10];switch(t){case"XYZ":this._y=Math.asin(je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-je(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(je(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-je(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return sg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(sg,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return og.setFromEuler(this),this.setFromQuaternion(og,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Qi.DEFAULT_ORDER="XYZ";Gs=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},cx=0,ag=new G,As=new yi,bn=new At,Al=new G,Xo=new G,hx=new G,ux=new yi,lg=new G(1,0,0),cg=new G(0,1,0),hg=new G(0,0,1),ug={type:"added"},dx={type:"removed"},Cs={type:"childadded",child:null},ju={type:"childremoved",child:null},bi=class r extends Ki{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:cx++}),this.uuid=Ks(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let e=new G,t=new Qi,i=new yi,n=new G(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new At},normalMatrix:{value:new ke}}),this.matrix=new At,this.matrixWorld=new At,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Gs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return As.setFromAxisAngle(e,t),this.quaternion.multiply(As),this}rotateOnWorldAxis(e,t){return As.setFromAxisAngle(e,t),this.quaternion.premultiply(As),this}rotateX(e){return this.rotateOnAxis(lg,e)}rotateY(e){return this.rotateOnAxis(cg,e)}rotateZ(e){return this.rotateOnAxis(hg,e)}translateOnAxis(e,t){return ag.copy(e).applyQuaternion(this.quaternion),this.position.add(ag.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(lg,e)}translateY(e){return this.translateOnAxis(cg,e)}translateZ(e){return this.translateOnAxis(hg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(bn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Al.copy(e):Al.set(e,t,i);let n=this.parent;this.updateWorldMatrix(!0,!1),Xo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bn.lookAt(Xo,Al,this.up):bn.lookAt(Al,Xo,this.up),this.quaternion.setFromRotationMatrix(bn),n&&(bn.extractRotation(n.matrixWorld),As.setFromRotationMatrix(bn),this.quaternion.premultiply(As.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?this:(e&&e.isObject3D&&(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ug),Cs.child=e,this.dispatchEvent(Cs),Cs.child=null),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(dx),ju.child=e,this.dispatchEvent(ju),ju.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),bn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),bn.multiply(e.parent.matrixWorld)),e.applyMatrix4(bn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ug),Cs.child=e,this.dispatchEvent(Cs),Cs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,n=this.children.length;i<n;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let n=this.children;for(let s=0,o=n.length;s<o;s++)n[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xo,e,hx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xo,ux,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let n=this.children;for(let s=0,o=n.length;s<o;s++)n[s].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),n.instanceInfo=this._instanceInfo.map(a=>({...a})),n.availableInstanceIds=this._availableInstanceIds.slice(),n.availableGeometryIds=this._availableGeometryIds.slice(),n.nextIndexStart=this._nextIndexStart,n.nextVertexStart=this._nextVertexStart,n.geometryCount=this._geometryCount,n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.matricesTexture=this._matricesTexture.toJSON(e),n.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(n.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(n.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=s(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));n.material=a}else n.material=s(e.materials,this.material);if(this.children.length>0){n.children=[];for(let a=0;a<this.children.length;a++)n.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];n.animations.push(s(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),_.length>0&&(i.nodes=_)}return i.object=n,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let n=e.children[i];this.add(n.clone())}return this}};bi.DEFAULT_UP=new G(0,1,0);bi.DEFAULT_MATRIX_AUTO_UPDATE=!0;bi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;ki=new G,xn=new G,Zu=new G,Sn=new G,Rs=new G,Ps=new G,dg=new G,$u=new G,Ku=new G,Ju=new G,Qu=new xt,ed=new xt,td=new xt,jn=class r{constructor(e=new G,t=new G,i=new G){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,n){n.subVectors(i,t),ki.subVectors(e,t),n.cross(ki);let s=n.lengthSq();return s>0?n.multiplyScalar(1/Math.sqrt(s)):n.set(0,0,0)}static getBarycoord(e,t,i,n,s){ki.subVectors(n,t),xn.subVectors(i,t),Zu.subVectors(e,t);let o=ki.dot(ki),a=ki.dot(xn),l=ki.dot(Zu),c=xn.dot(xn),h=xn.dot(Zu),u=o*c-a*a;if(u===0)return s.set(0,0,0),null;let d=1/u,f=(c*l-a*h)*d,_=(o*h-a*l)*d;return s.set(1-f-_,_,f)}static containsPoint(e,t,i,n){return this.getBarycoord(e,t,i,n,Sn)===null?!1:Sn.x>=0&&Sn.y>=0&&Sn.x+Sn.y<=1}static getInterpolation(e,t,i,n,s,o,a,l){return this.getBarycoord(e,t,i,n,Sn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Sn.x),l.addScaledVector(o,Sn.y),l.addScaledVector(a,Sn.z),l)}static getInterpolatedAttribute(e,t,i,n,s,o){return Qu.setScalar(0),ed.setScalar(0),td.setScalar(0),Qu.fromBufferAttribute(e,t),ed.fromBufferAttribute(e,i),td.fromBufferAttribute(e,n),o.setScalar(0),o.addScaledVector(Qu,s.x),o.addScaledVector(ed,s.y),o.addScaledVector(td,s.z),o}static isFrontFacing(e,t,i,n){return ki.subVectors(i,t),xn.subVectors(e,t),ki.cross(xn).dot(n)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,n){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,i,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ki.subVectors(this.c,this.b),xn.subVectors(this.a,this.b),ki.cross(xn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return r.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return r.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,n,s){return r.getInterpolation(e,this.a,this.b,this.c,t,i,n,s)}containsPoint(e){return r.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return r.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,n=this.b,s=this.c,o,a;Rs.subVectors(n,i),Ps.subVectors(s,i),$u.subVectors(e,i);let l=Rs.dot($u),c=Ps.dot($u);if(l<=0&&c<=0)return t.copy(i);Ku.subVectors(e,n);let h=Rs.dot(Ku),u=Ps.dot(Ku);if(h>=0&&u<=h)return t.copy(n);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(i).addScaledVector(Rs,o);Ju.subVectors(e,s);let f=Rs.dot(Ju),_=Ps.dot(Ju);if(_>=0&&f<=_)return t.copy(s);let g=f*c-l*_;if(g<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(i).addScaledVector(Ps,a);let m=h*_-f*u;if(m<=0&&u-h>=0&&f-_>=0)return dg.subVectors(s,n),a=(u-h)/(u-h+(f-_)),t.copy(n).addScaledVector(dg,a);let p=1/(m+g+d);return o=g*p,a=d*p,t.copy(i).addScaledVector(Rs,o).addScaledVector(Ps,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},hv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qn={h:0,s:0,l:0},Cl={h:0,s:0,l:0};$e=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Nt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ke.colorSpaceToWorking(this,t),this}setRGB(e,t,i,n=Ke.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ke.colorSpaceToWorking(this,n),this}setHSL(e,t,i,n=Ke.workingColorSpace){if(e=Pd(e,1),t=je(t,0,1),i=je(i,0,1),t===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=id(o,s,e+1/3),this.g=id(o,s,e),this.b=id(o,s,e-1/3)}return Ke.colorSpaceToWorking(this,n),this}setStyle(e,t=Nt){function i(s){s!==void 0&&parseFloat(s)<1}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=n[1],a=n[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=n[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Nt){let i=hv[e.toLowerCase()];return i!==void 0&&this.setHex(i,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=En(e.r),this.g=En(e.g),this.b=En(e.b),this}copyLinearToSRGB(e){return this.r=Ns(e.r),this.g=Ns(e.g),this.b=Ns(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Nt){return Ke.workingToColorSpace(Vt.copy(this),e),Math.round(je(Vt.r*255,0,255))*65536+Math.round(je(Vt.g*255,0,255))*256+Math.round(je(Vt.b*255,0,255))}getHexString(e=Nt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ke.workingColorSpace){Ke.workingToColorSpace(Vt.copy(this),t);let i=Vt.r,n=Vt.g,s=Vt.b,o=Math.max(i,n,s),a=Math.min(i,n,s),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case i:l=(n-s)/u+(n<s?6:0);break;case n:l=(s-i)/u+2;break;case s:l=(i-n)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Ke.workingColorSpace){return Ke.workingToColorSpace(Vt.copy(this),t),e.r=Vt.r,e.g=Vt.g,e.b=Vt.b,e}getStyle(e=Nt){Ke.workingToColorSpace(Vt.copy(this),e);let t=Vt.r,i=Vt.g,n=Vt.b;return e!==Nt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(e,t,i){return this.getHSL(qn),this.setHSL(qn.h+e,qn.s+t,qn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(qn),e.getHSL(Cl);let i=jo(qn.h,Cl.h,t),n=jo(qn.s,Cl.s,t),s=jo(qn.l,Cl.l,t);return this.setHSL(i,n,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,n=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*n,this.g=s[1]*t+s[4]*i+s[7]*n,this.b=s[2]*t+s[5]*i+s[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Vt=new $e;$e.NAMES=hv;fx=0,Br=class extends Ki{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:fx++}),this.uuid=Ks(),this.name="",this.type="Material",this.blending=Fr,this.side=wn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=zl,this.blendDst=Vl,this.blendEquation=$n,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $e(0,0,0),this.blendAlpha=0,this.depthFunc=Nr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=cd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Or,this.stencilZFail=Or,this.stencilZPass=Or,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0)continue;let n=this[t];n!==void 0&&(n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[t]=i)}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Fr&&(i.blending=this.blending),this.side!==wn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==zl&&(i.blendSrc=this.blendSrc),this.blendDst!==Vl&&(i.blendDst=this.blendDst),this.blendEquation!==$n&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Nr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==cd&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Or&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Or&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Or&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(t){let s=n(e.textures),o=n(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let n=t.length;i=new Array(n);for(let s=0;s!==n;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Jn=class extends Br{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qi,this.combine=_d,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Tt=new G,Rl=new ze,px=0,_i=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:px++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=hd,this.updateRanges=[],this.gpuType=rn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let n=0,s=this.itemSize;n<s;n++)this.array[e+n]=t.array[i+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Rl.fromBufferAttribute(this,t),Rl.applyMatrix3(e),this.setXY(t,Rl.x,Rl.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix3(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix4(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.applyNormalMatrix(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.transformDirection(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Fs(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Qt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Fs(t,this.array)),t}setX(e,t){return this.normalized&&(t=Qt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Fs(t,this.array)),t}setY(e,t){return this.normalized&&(t=Qt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Fs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Qt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Fs(t,this.array)),t}setW(e,t){return this.normalized&&(t=Qt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Qt(t,this.array),i=Qt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,n){return e*=this.itemSize,this.normalized&&(t=Qt(t,this.array),i=Qt(i,this.array),n=Qt(n,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this}setXYZW(e,t,i,n,s){return e*=this.itemSize,this.normalized&&(t=Qt(t,this.array),i=Qt(i,this.array),n=Qt(n,this.array),s=Qt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==hd&&(e.usage=this.usage),e}},ea=class extends _i{constructor(e,t,i){super(new Uint16Array(e),t,i)}},ta=class extends _i{constructor(e,t,i){super(new Uint32Array(e),t,i)}},$i=class extends _i{constructor(e,t,i){super(new Float32Array(e),t,i)}},mx=0,Di=new At,nd=new bi,Ls=new G,vi=new Kn,qo=new Kn,Dt=new G,Qn=class r extends Ki{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:mx++}),this.uuid=Ks(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ld(e)?ta:ea)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new ke().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}let n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Di.makeRotationFromQuaternion(e),this.applyMatrix4(Di),this}rotateX(e){return Di.makeRotationX(e),this.applyMatrix4(Di),this}rotateY(e){return Di.makeRotationY(e),this.applyMatrix4(Di),this}rotateZ(e){return Di.makeRotationZ(e),this.applyMatrix4(Di),this}translate(e,t,i){return Di.makeTranslation(e,t,i),this.applyMatrix4(Di),this}scale(e,t,i){return Di.makeScale(e,t,i),this.applyMatrix4(Di),this}lookAt(e){return nd.lookAt(e),nd.updateMatrix(),this.applyMatrix4(nd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ls).negate(),this.translate(Ls.x,Ls.y,Ls.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let n=0,s=e.length;n<s;n++){let o=e[n];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new $i(i,3))}else{let i=Math.min(e.length,t.count);for(let n=0;n<i;n++){let s=e[n];t.setXYZ(n,s.x,s.y,s.z||0)}e.length>t.count,t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Kn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,n=t.length;i<n;i++){let s=t[i];vi.setFromBufferAttribute(s),this.morphTargetsRelative?(Dt.addVectors(this.boundingBox.min,vi.min),this.boundingBox.expandByPoint(Dt),Dt.addVectors(this.boundingBox.max,vi.max),this.boundingBox.expandByPoint(Dt)):(this.boundingBox.expandByPoint(vi.min),this.boundingBox.expandByPoint(vi.max))}}else this.boundingBox.makeEmpty();isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vs);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){this.boundingSphere.set(new G,1/0);return}if(e){let i=this.boundingSphere.center;if(vi.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];qo.setFromBufferAttribute(a),this.morphTargetsRelative?(Dt.addVectors(vi.min,qo.min),vi.expandByPoint(Dt),Dt.addVectors(vi.max,qo.max),vi.expandByPoint(Dt)):(vi.expandByPoint(qo.min),vi.expandByPoint(qo.max))}vi.getCenter(i);let n=0;for(let s=0,o=e.count;s<o;s++)Dt.fromBufferAttribute(e,s),n=Math.max(n,i.distanceToSquared(Dt));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Dt.fromBufferAttribute(a,c),l&&(Ls.fromBufferAttribute(e,c),Dt.add(Ls)),n=Math.max(n,i.distanceToSquared(Dt))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0)return;let i=t.position,n=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new _i(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let I=0;I<i.count;I++)a[I]=new G,l[I]=new G;let c=new G,h=new G,u=new G,d=new ze,f=new ze,_=new ze,g=new G,m=new G;function p(I,x,E){c.fromBufferAttribute(i,I),h.fromBufferAttribute(i,x),u.fromBufferAttribute(i,E),d.fromBufferAttribute(s,I),f.fromBufferAttribute(s,x),_.fromBufferAttribute(s,E),h.sub(c),u.sub(c),f.sub(d),_.sub(d);let O=1/(f.x*_.y-_.x*f.y);isFinite(O)&&(g.copy(h).multiplyScalar(_.y).addScaledVector(u,-f.y).multiplyScalar(O),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-_.x).multiplyScalar(O),a[I].add(g),a[x].add(g),a[E].add(g),l[I].add(m),l[x].add(m),l[E].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let I=0,x=M.length;I<x;++I){let E=M[I],O=E.start,H=E.count;for(let W=O,$=O+H;W<$;W+=3)p(e.getX(W+0),e.getX(W+1),e.getX(W+2))}let b=new G,S=new G,T=new G,C=new G;function P(I){T.fromBufferAttribute(n,I),C.copy(T);let x=a[I];b.copy(x),b.sub(T.multiplyScalar(T.dot(x))).normalize(),S.crossVectors(C,x);let O=S.dot(l[I])<0?-1:1;o.setXYZW(I,b.x,b.y,b.z,O)}for(let I=0,x=M.length;I<x;++I){let E=M[I],O=E.start,H=E.count;for(let W=O,$=O+H;W<$;W+=3)P(e.getX(W+0)),P(e.getX(W+1)),P(e.getX(W+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new _i(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);let n=new G,s=new G,o=new G,a=new G,l=new G,c=new G,h=new G,u=new G;if(e)for(let d=0,f=e.count;d<f;d+=3){let _=e.getX(d+0),g=e.getX(d+1),m=e.getX(d+2);n.fromBufferAttribute(t,_),s.fromBufferAttribute(t,g),o.fromBufferAttribute(t,m),h.subVectors(o,s),u.subVectors(n,s),h.cross(u),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,g),c.fromBufferAttribute(i,m),a.add(h),l.add(h),c.add(h),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)n.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,s),u.subVectors(n,s),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Dt.fromBufferAttribute(e,t),Dt.normalize(),e.setXYZ(t,Dt.x,Dt.y,Dt.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h),f=0,_=0;for(let g=0,m=l.length;g<m;g++){a.isInterleavedBufferAttribute?f=l[g]*a.data.stride+a.offset:f=l[g]*h;for(let p=0;p<h;p++)d[_++]=c[f++]}return new _i(d,h,u)}if(this.index===null)return this;let t=new r,i=this.index.array,n=this.attributes;for(let a in n){let l=n[a],c=e(l,i);t.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=e(d,i);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let n={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(n[l]=h,s=!0)}s&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let n=e.attributes;for(let c in n){let h=n[c];this.setAttribute(c,h.clone(t))}let s=e.morphAttributes;for(let c in s){let h=[],u=s[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},fg=new At,Ir=new Qo,Pl=new Vs,pg=new G,Ll=new G,Il=new G,Dl=new G,rd=new G,Ol=new G,mg=new G,Fl=new G,hi=class extends bi{constructor(e=new Qn,t=new Jn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=n.length;s<o;s++){let a=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let i=this.geometry,n=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(n,e);let a=this.morphTargetInfluences;if(s&&a){Ol.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=a[l],u=s[l];h!==0&&(rd.fromBufferAttribute(u,e),o?Ol.addScaledVector(rd,h):Ol.addScaledVector(rd.sub(t),h))}t.add(Ol)}return t}raycast(e,t){let i=this.geometry,n=this.material,s=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Pl.copy(i.boundingSphere),Pl.applyMatrix4(s),Ir.copy(e.ray).recast(e.near),!(Pl.containsPoint(Ir.origin)===!1&&(Ir.intersectSphere(Pl,pg)===null||Ir.origin.distanceToSquared(pg)>(e.far-e.near)**2))&&(fg.copy(s).invert(),Ir.copy(e.ray).applyMatrix4(fg),!(i.boundingBox!==null&&Ir.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ir)))}_computeIntersections(e,t,i){let n,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,g=d.length;_<g;_++){let m=d[_],p=o[m.materialIndex],M=Math.max(m.start,f.start),b=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let S=M,T=b;S<T;S+=3){let C=a.getX(S),P=a.getX(S+1),I=a.getX(S+2);n=Nl(this,p,e,i,c,h,u,C,P,I),n&&(n.faceIndex=Math.floor(S/3),n.face.materialIndex=m.materialIndex,t.push(n))}}else{let _=Math.max(0,f.start),g=Math.min(a.count,f.start+f.count);for(let m=_,p=g;m<p;m+=3){let M=a.getX(m),b=a.getX(m+1),S=a.getX(m+2);n=Nl(this,o,e,i,c,h,u,M,b,S),n&&(n.faceIndex=Math.floor(m/3),t.push(n))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,g=d.length;_<g;_++){let m=d[_],p=o[m.materialIndex],M=Math.max(m.start,f.start),b=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let S=M,T=b;S<T;S+=3){let C=S,P=S+1,I=S+2;n=Nl(this,p,e,i,c,h,u,C,P,I),n&&(n.faceIndex=Math.floor(S/3),n.face.materialIndex=m.materialIndex,t.push(n))}}else{let _=Math.max(0,f.start),g=Math.min(l.count,f.start+f.count);for(let m=_,p=g;m<p;m+=3){let M=m,b=m+1,S=m+2;n=Nl(this,o,e,i,c,h,u,M,b,S),n&&(n.faceIndex=Math.floor(m/3),t.push(n))}}}};Ws=class r extends Qn{constructor(e=1,t=1,i=1,n=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:n,heightSegments:s,depthSegments:o};let a=this;n=Math.floor(n),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],h=[],u=[],d=0,f=0;_("z","y","x",-1,-1,i,t,e,o,s,0),_("z","y","x",1,-1,i,t,-e,o,s,1),_("x","z","y",1,1,e,i,t,n,o,2),_("x","z","y",1,-1,e,i,-t,n,o,3),_("x","y","z",1,-1,e,t,i,n,s,4),_("x","y","z",-1,-1,e,t,-i,n,s,5),this.setIndex(l),this.setAttribute("position",new $i(c,3)),this.setAttribute("normal",new $i(h,3)),this.setAttribute("uv",new $i(u,2));function _(g,m,p,M,b,S,T,C,P,I,x){let E=S/P,O=T/I,H=S/2,W=T/2,$=C/2,K=P+1,q=I+1,oe=0,X=0,fe=new G;for(let ye=0;ye<q;ye++){let we=ye*O-W;for(let Ne=0;Ne<K;Ne++){let Qe=Ne*E-H;fe[g]=Qe*M,fe[m]=we*b,fe[p]=$,c.push(fe.x,fe.y,fe.z),fe[g]=0,fe[m]=0,fe[p]=C>0?1:-1,h.push(fe.x,fe.y,fe.z),u.push(Ne/P),u.push(1-ye/I),oe+=1}}for(let ye=0;ye<I;ye++)for(let we=0;we<P;we++){let Ne=d+we+K*ye,Qe=d+we+K*(ye+1),Xe=d+(we+1)+K*(ye+1),Ve=d+(we+1)+K*ye;l.push(Ne,Qe,Ve),l.push(Qe,Xe,Ve),X+=6}a.addGroup(f,X,x),f+=X,d+=oe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};uv={clone:Gr,merge:Wt},_x=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,yx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,zi=class extends Br{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_x,this.fragmentShader=yx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Gr(e.uniforms),this.uniformsGroups=vx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let o=this.uniforms[n].value;o&&o.isTexture?t.uniforms[n]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[n]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[n]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[n]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[n]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[n]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[n]={type:"m4",value:o.toArray()}:t.uniforms[n]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},ia=class extends bi{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new At,this.projectionMatrix=new At,this.projectionMatrixInverse=new At,this.coordinateSystem=Hi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Yn=new G,gg=new ze,vg=new ze,Gt=class extends ia{constructor(e=50,t=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Bs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Yo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Bs*2*Math.atan(Math.tan(Yo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Yn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Yn.x,Yn.y).multiplyScalar(-e/Yn.z),Yn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Yn.x,Yn.y).multiplyScalar(-e/Yn.z)}getViewSize(e,t){return this.getViewBounds(e,gg,vg),t.subVectors(vg,gg)}setViewOffset(e,t,i,n,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Yo*.5*this.fov)/this.zoom,i=2*t,n=this.aspect*i,s=-.5*n,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*n/l,t-=o.offsetY*i/c,n*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+n,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Is=-90,Ds=1,Zl=class extends bi{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let n=new Gt(Is,Ds,e,t);n.layers=this.layers,this.add(n);let s=new Gt(Is,Ds,e,t);s.layers=this.layers,this.add(s);let o=new Gt(Is,Ds,e,t);o.layers=this.layers,this.add(o);let a=new Gt(Is,Ds,e,t);a.layers=this.layers,this.add(a);let l=new Gt(Is,Ds,e,t);l.layers=this.layers,this.add(l);let c=new Gt(Is,Ds,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,n,s,o,a,l]=t;for(let c of t)this.remove(c);if(e===Hi)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ko)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;let g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,n),e.render(t,s),e.setRenderTarget(i,1,n),e.render(t,o),e.setRenderTarget(i,2,n),e.render(t,a),e.setRenderTarget(i,3,n),e.render(t,l),e.setRenderTarget(i,4,n),e.render(t,c),i.texture.generateMipmaps=g,e.setRenderTarget(i,5,n),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}},na=class extends ei{constructor(e=[],t=zr,i,n,s,o,a,l,c,h){super(e,t,i,n,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},$l=class extends Ji{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},n=[i,i,i,i,i,i];this.texture=new na(n),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},n=new Ws(5,5,5),s=new zi({name:"CubemapFromEquirect",uniforms:Gr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ti,blending:Tn});s.uniforms.tEquirect.value=t;let o=new hi(n,s),a=t.minFilter;return t.minFilter===tn&&(t.minFilter=Ut),new Zl(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,n=!0){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,n);e.setRenderTarget(s)}},Mn=class extends bi{constructor(){super(),this.isGroup=!0,this.type="Group"}},bx={type:"move"},Xs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Mn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Mn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Mn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let n=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let g of e.hand.values()){let m=t.getJointPose(g,i),p=this._getHandJoint(c,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,_=.005;c.inputState.pinching&&d>f+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(n=t.getPose(e.targetRaySpace,i),n===null&&s!==null&&(n=s),n!==null&&(a.matrix.fromArray(n.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,n.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(n.linearVelocity)):a.hasLinearVelocity=!1,n.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(n.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(bx)))}return a!==null&&(a.visible=n!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Mn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},ra=class extends bi{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Qi,this.environmentIntensity=1,this.environmentRotation=new Qi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},sd=new G,xx=new G,Sx=new ke,Zi=class{constructor(e=new G(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,n){return this.normal.set(e,t,i),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let n=sd.subVectors(i,t).cross(xx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(sd),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/n;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Sx.getNormalMatrix(e),n=this.coplanarPoint(sd).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Dr=new Vs,Mx=new ze(.5,.5),Ul=new G,sa=class{constructor(e=new Zi,t=new Zi,i=new Zi,n=new Zi,s=new Zi,o=new Zi){this.planes=[e,t,i,n,s,o]}set(e,t,i,n,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(n),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Hi,i=!1){let n=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],h=s[4],u=s[5],d=s[6],f=s[7],_=s[8],g=s[9],m=s[10],p=s[11],M=s[12],b=s[13],S=s[14],T=s[15];if(n[0].setComponents(c-o,f-h,p-_,T-M).normalize(),n[1].setComponents(c+o,f+h,p+_,T+M).normalize(),n[2].setComponents(c+a,f+u,p+g,T+b).normalize(),n[3].setComponents(c-a,f-u,p-g,T-b).normalize(),i)n[4].setComponents(l,d,m,S).normalize(),n[5].setComponents(c-l,f-d,p-m,T-S).normalize();else if(n[4].setComponents(c-l,f-d,p-m,T-S).normalize(),t===Hi)n[5].setComponents(c+l,f+d,p+m,T+S).normalize();else if(t===Ko)n[5].setComponents(l,d,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Dr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Dr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Dr)}intersectsSprite(e){Dr.center.set(0,0,0);let t=Mx.distanceTo(e.center);return Dr.radius=.7071067811865476+t,Dr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Dr)}intersectsSphere(e){let t=this.planes,i=e.center,n=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<n)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let n=t[i];if(Ul.x=n.normal.x>0?e.max.x:e.min.x,Ul.y=n.normal.y>0?e.max.y:e.min.y,Ul.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(Ul)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},oa=class extends ei{constructor(e,t,i,n,s=Ut,o=Ut,a,l,c){super(e,t,i,n,s,o,a,l,c),this.isVideoTexture=!0,this.generateMipmaps=!1,this._requestVideoFrameCallbackId=0;let h=this;function u(){h.needsUpdate=!0,h._requestVideoFrameCallbackId=e.requestVideoFrameCallback(u)}"requestVideoFrameCallback"in e&&(this._requestVideoFrameCallbackId=e.requestVideoFrameCallback(u))}clone(){return new this.constructor(this.image).copy(this)}update(){let e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}dispose(){this._requestVideoFrameCallbackId!==0&&this.source.data.cancelVideoFrameCallback(this._requestVideoFrameCallbackId),super.dispose()}},aa=class extends ei{constructor(e,t,i=nr,n,s,o,a=Oi,l=Oi,c,h=Us,u=1){if(h!==Us&&h!==$s)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:u};super(d,n,s,o,a,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new zs(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},la=class extends ei{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},kr=class r extends Qn{constructor(e=1,t=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:n};let s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(n),c=a+1,h=l+1,u=e/a,d=t/l,f=[],_=[],g=[],m=[];for(let p=0;p<h;p++){let M=p*d-o;for(let b=0;b<c;b++){let S=b*u-s;_.push(S,-M,0),g.push(0,0,1),m.push(b/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<a;M++){let b=M+c*p,S=M+c*(p+1),T=M+1+c*(p+1),C=M+1+c*p;f.push(b,S,C),f.push(S,T,C)}this.setIndex(f),this.setAttribute("position",new $i(_,3)),this.setAttribute("normal",new $i(g,3)),this.setAttribute("uv",new $i(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.widthSegments,e.heightSegments)}},Kl=class extends Br{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Kg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Jl=class extends Br{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};Hr=class{constructor(e,t,i,n){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,n=t[i],s=t[i-1];i:{e:{let o;t:{n:if(!(e<n)){for(let a=i+2;;){if(n===void 0){if(e<s)break n;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=n,n=t[++i],e<n)break e}o=t.length;break t}if(!(e>=s)){let a=t[1];e<a&&(i=2,s=a);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(n=s,s=t[--i-1],e>=s)break e}o=i,i=0;break t}break i}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(n=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,n)}return this.interpolate_(i,s,e,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,s=e*n;for(let o=0;o!==n;++o)t[o]=i[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Ql=class extends Hr{constructor(e,t,i,n){super(e,t,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:od,endingEnd:od}}intervalChanged_(e,t,i){let n=this.parameterPositions,s=e-2,o=e+1,a=n[s],l=n[o];if(a===void 0)switch(this.getSettings_().endingStart){case ad:s=e,a=2*t-i;break;case ld:s=n.length-2,a=t+n[s]-n[s+1];break;default:s=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case ad:o=e,l=2*i-t;break;case ld:o=1,l=i+n[1]-n[0];break;default:o=e-1,l=t}let c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(e,t,i,n){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,_=(i-t)/(n-t),g=_*_,m=g*_,p=-d*m+2*d*g-d*_,M=(1+d)*m+(-1.5-2*d)*g+(-.5+d)*_+1,b=(-1-f)*m+(1.5+f)*g+.5*_,S=f*m-f*g;for(let T=0;T!==a;++T)s[T]=p*o[h+T]+M*o[c+T]+b*o[l+T]+S*o[u+T];return s}},ec=class extends Hr{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(i-t)/(n-t),u=1-h;for(let d=0;d!==a;++d)s[d]=o[c+d]*u+o[l+d]*h;return s}},tc=class extends Hr{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e){return this.copySampleValue_(e-1)}},xi=class{constructor(e,t,i,n){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Bl(t,this.TimeBufferType),this.values=Bl(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Bl(e.times,Array),values:Bl(e.values,Array)};let n=e.getInterpolation();n!==e.DefaultInterpolation&&(i.interpolation=n)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new tc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ec(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ql(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Zo:t=this.InterpolantFactoryMethodDiscrete;break;case Xl:t=this.InterpolantFactoryMethodLinear;break;case kl:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Zo;case this.InterpolantFactoryMethodLinear:return Xl;case this.InterpolantFactoryMethodSmooth:return kl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]*=e}return this}trim(e,t){let i=this.times,n=i.length,s=0,o=n-1;for(;s!==n&&i[s]<e;)++s;for(;o!==-1&&i[o]>t;)--o;if(++o,s!==0||o!==n){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=i.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(e=!1);let i=this.times,n=this.values,s=i.length;s===0&&(e=!1);let o=null;for(let a=0;a!==s;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){e=!1;break}if(o!==null&&o>l){e=!1;break}o=l}if(n!==void 0&&Ex(n))for(let a=0,l=n.length;a!==l;++a){let c=n[a];if(isNaN(c)){e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===kl,s=e.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(n)l=!0;else{let u=a*i,d=u-i,f=u+i;for(let _=0;_!==i;++_){let g=t[u+_];if(g!==t[d+_]||g!==t[f+_]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let u=a*i,d=o*i;for(let f=0;f!==i;++f)t[d+f]=t[u+f]}++o}}if(s>0){e[o]=e[s];for(let a=s*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,n=new i(this.name,e,t);return n.createInterpolant=this.createInterpolant,n}};xi.prototype.ValueTypeName="";xi.prototype.TimeBufferType=Float32Array;xi.prototype.ValueBufferType=Float32Array;xi.prototype.DefaultInterpolation=Xl;er=class extends xi{constructor(e,t,i){super(e,t,i)}};er.prototype.ValueTypeName="bool";er.prototype.ValueBufferType=Array;er.prototype.DefaultInterpolation=Zo;er.prototype.InterpolantFactoryMethodLinear=void 0;er.prototype.InterpolantFactoryMethodSmooth=void 0;ic=class extends xi{constructor(e,t,i,n){super(e,t,i,n)}};ic.prototype.ValueTypeName="color";nc=class extends xi{constructor(e,t,i,n){super(e,t,i,n)}};nc.prototype.ValueTypeName="number";rc=class extends Hr{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(n-t),c=e*a;for(let h=c+a;c!==h;c+=4)yi.slerpFlat(s,0,o,c-a,o,c,l);return s}},ca=class extends xi{constructor(e,t,i,n){super(e,t,i,n)}InterpolantFactoryMethodLinear(e){return new rc(this.times,this.values,this.getValueSize(),e)}};ca.prototype.ValueTypeName="quaternion";ca.prototype.InterpolantFactoryMethodSmooth=void 0;tr=class extends xi{constructor(e,t,i){super(e,t,i)}};tr.prototype.ValueTypeName="string";tr.prototype.ValueBufferType=Array;tr.prototype.DefaultInterpolation=Zo;tr.prototype.InterpolantFactoryMethodLinear=void 0;tr.prototype.InterpolantFactoryMethodSmooth=void 0;sc=class extends xi{constructor(e,t,i,n){super(e,t,i,n)}};sc.prototype.ValueTypeName="vector";Hl={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}},oc=class{constructor(e,t,i){let n=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.abortController=new AbortController,this.itemStart=function(h){a++,s===!1&&n.onStart!==void 0&&n.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,n.onProgress!==void 0&&n.onProgress(h,o,a),o===a&&(s=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(h){n.onError!==void 0&&n.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],_=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return _}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},dv=new oc,qs=class{constructor(e){this.manager=e!==void 0?e:dv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(n,s){i.load(e,n,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};qs.DEFAULT_MATERIAL_NAME="__DEFAULT";Os=new WeakMap,ac=class extends qs{constructor(e){super(e)}load(e,t,i,n){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,o=Hl.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0);else{let u=Os.get(o);u===void 0&&(u=[],Os.set(o,u)),u.push({onLoad:t,onError:n})}return o}let a=ks("img");function l(){h(),t&&t(this);let u=Os.get(this)||[];for(let d=0;d<u.length;d++){let f=u[d];f.onLoad&&f.onLoad(this)}Os.delete(this),s.manager.itemEnd(e)}function c(u){h(),n&&n(u),Hl.remove(`image:${e}`);let d=Os.get(this)||[];for(let f=0;f<d.length;f++){let _=d[f];_.onError&&_.onError(u)}Os.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Hl.add(`image:${e}`,a),s.manager.itemStart(e),a.src=e,a}},ha=class extends qs{constructor(e){super(e)}load(e,t,i,n){let s=new ei,o=new ac(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},i,n),s}},lc=class extends bi{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new $e(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},cc=class extends ia{constructor(e=-1,t=1,i=1,n=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=n,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,n,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2,s=i-e,o=i+e,a=n+t,l=n-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},ua=class extends lc{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}},hc=class extends Gt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},da=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}},Dd="\\[\\]\\.:\\/",wx=new RegExp("["+Dd+"]","g"),Od="[^"+Dd+"]",Tx="[^"+Dd.replace("\\.","")+"]",Ax=/((?:WC+[\/:])*)/.source.replace("WC",Od),Cx=/(WCOD+)?/.source.replace("WCOD",Tx),Rx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Od),Px=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Od),Lx=new RegExp("^"+Ax+Cx+Rx+Px+"$"),Ix=["material","materials","bones","map"],ud=class{constructor(e,t,i){let n=i||dt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,n)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,n=this._bindings[i];n!==void 0&&n.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,s=i.length;n!==s;++n)i[n].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},dt=class r{constructor(e,t,i){this.path=t,this.parsedPath=i||r.parseTrackName(t),this.node=r.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new r.Composite(e,t,i):new r(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(wx,"")}static parseTrackName(e){let t=Lx.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){let s=i.nodeName.substring(n+1);Ix.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},n=i(e.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)e[t++]=i[n]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,n=t.propertyName,s=t.propertyIndex;if(e||(e=r.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e)return;if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material||!e.material.materials)return;e=e.material.materials;break;case"bones":if(!e.skeleton)return;e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material||!e.material.map)return;e=e.material.map;break;default:if(e[i]===void 0)return;e=e[i]}if(c!==void 0){if(e[c]===void 0)return;e=e[c]}}let o=e[n];if(o===void 0){let c=t.nodeName;return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(n==="morphTargetInfluences"){if(!e.geometry||!e.geometry.morphAttributes)return;e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};dt.Composite=ud;dt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};dt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};dt.prototype.GetterByBindingType=[dt.prototype._getValue_direct,dt.prototype._getValue_array,dt.prototype._getValue_arrayElement,dt.prototype._getValue_toArray];dt.prototype.SetterByBindingTypeAndVersioning=[[dt.prototype._setValue_direct,dt.prototype._setValue_direct_setNeedsUpdate,dt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[dt.prototype._setValue_array,dt.prototype._setValue_array_setNeedsUpdate,dt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[dt.prototype._setValue_arrayElement,dt.prototype._setValue_arrayElement_setNeedsUpdate,dt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[dt.prototype._setValue_fromArray,dt.prototype._setValue_fromArray_setNeedsUpdate,dt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];pA=new Float32Array(1),_g=new At,fa=class{constructor(e,t,i=0,n=1/0){this.ray=new Qo(e,t),this.near=i,this.far=n,this.camera=null,this.layers=new Gs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera&&(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t)}setFromXRController(e){return _g.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(_g),this}intersectObject(e,t=!0,i=[]){return dd(e,this,i,t),i.sort(yg),i}intersectObjects(e,t=!0,i=[]){for(let n=0,s=e.length;n<s;n++)dd(e[n],this,i,t);return i.sort(yg),i}};pa=class extends Ki{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){e!==void 0&&(this.domElement!==null&&this.disconnect(),this.domElement=e)}disconnect(){}dispose(){}update(){}};typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:uc}}));typeof window!="undefined"&&(window.__THREE__||(window.__THREE__=uc))});function Nv(){let r=null,e=!1,t=null,i=null;function n(s,o){t(s,o),i=r.requestAnimationFrame(n)}return{start:function(){e!==!0&&t!==null&&(i=r.requestAnimationFrame(n),e=!0)},stop:function(){r.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Ox(r){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,u=c.byteLength,d=r.createBuffer();r.bindBuffer(l,d),r.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=r.FLOAT;else if(typeof Float16Array!="undefined"&&c instanceof Float16Array)f=r.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=r.SHORT;else if(c instanceof Uint32Array)f=r.UNSIGNED_INT;else if(c instanceof Int32Array)f=r.INT;else if(c instanceof Int8Array)f=r.BYTE;else if(c instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,l,c){let h=l.array,u=l.updateRanges;if(r.bindBuffer(c,a),u.length===0)r.bufferSubData(c,0,h);else{u.sort((f,_)=>f.start-_.start);let d=0;for(let f=1;f<u.length;f++){let _=u[d],g=u[f];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++d,u[d]=g)}u.length=d+1;for(let f=0,_=u.length;f<_;f++){let g=u[f];r.bufferSubData(c,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(r.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:n,remove:s,update:o}}function mE(r,e,t,i,n,s,o){let a=new $e(0),l=s===!0?0:1,c,h,u=null,d=0,f=null;function _(b){let S=b.isScene===!0?b.background:null;return S&&S.isTexture&&(S=(b.backgroundBlurriness>0?t:e).get(S)),S}function g(b){let S=!1,T=_(b);T===null?p(a,l):T&&T.isColor&&(p(T,1),S=!0);let C=r.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(r.autoClear||S)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(b,S){let T=_(S);T&&(T.isCubeTexture||T.mapping===ma)?(h===void 0&&(h=new hi(new Ws(1,1,1),new zi({name:"BackgroundCubeMaterial",uniforms:Gr(sn.backgroundCube.uniforms),vertexShader:sn.backgroundCube.vertexShader,fragmentShader:sn.backgroundCube.fragmentShader,side:ti,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,P,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),Wr.copy(S.backgroundRotation),Wr.x*=-1,Wr.y*=-1,Wr.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Wr.y*=-1,Wr.z*=-1),h.material.uniforms.envMap.value=T,h.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(pE.makeRotationFromEuler(Wr)),h.material.toneMapped=Ke.getTransfer(T.colorSpace)!==tt,(u!==T||d!==T.version||f!==r.toneMapping)&&(h.material.needsUpdate=!0,u=T,d=T.version,f=r.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):T&&T.isTexture&&(c===void 0&&(c=new hi(new kr(2,2),new zi({name:"BackgroundMaterial",uniforms:Gr(sn.background.uniforms),vertexShader:sn.background.vertexShader,fragmentShader:sn.background.fragmentShader,side:wn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=T,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=Ke.getTransfer(T.colorSpace)!==tt,T.matrixAutoUpdate===!0&&T.updateMatrix(),c.material.uniforms.uvTransform.value.copy(T.matrix),(u!==T||d!==T.version||f!==r.toneMapping)&&(c.material.needsUpdate=!0,u=T,d=T.version,f=r.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function p(b,S){b.getRGB(nh,Id(r)),i.buffers.color.setClear(nh.r,nh.g,nh.b,S,o)}function M(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,S=1){a.set(b),l=S,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,p(a,l)},render:g,addToRenderList:m,dispose:M}}function gE(r,e){let t=r.getParameter(r.MAX_VERTEX_ATTRIBS),i={},n=d(null),s=n,o=!1;function a(E,O,H,W,$){let K=!1,q=u(W,H,O);s!==q&&(s=q,c(s.object)),K=f(E,W,H,$),K&&_(E,W,H,$),$!==null&&e.update($,r.ELEMENT_ARRAY_BUFFER),(K||o)&&(o=!1,S(E,O,H,W),$!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get($).buffer))}function l(){return r.createVertexArray()}function c(E){return r.bindVertexArray(E)}function h(E){return r.deleteVertexArray(E)}function u(E,O,H){let W=H.wireframe===!0,$=i[E.id];$===void 0&&($={},i[E.id]=$);let K=$[O.id];K===void 0&&(K={},$[O.id]=K);let q=K[W];return q===void 0&&(q=d(l()),K[W]=q),q}function d(E){let O=[],H=[],W=[];for(let $=0;$<t;$++)O[$]=0,H[$]=0,W[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:H,attributeDivisors:W,object:E,attributes:{},index:null}}function f(E,O,H,W){let $=s.attributes,K=O.attributes,q=0,oe=H.getAttributes();for(let X in oe)if(oe[X].location>=0){let ye=$[X],we=K[X];if(we===void 0&&(X==="instanceMatrix"&&E.instanceMatrix&&(we=E.instanceMatrix),X==="instanceColor"&&E.instanceColor&&(we=E.instanceColor)),ye===void 0||ye.attribute!==we||we&&ye.data!==we.data)return!0;q++}return s.attributesNum!==q||s.index!==W}function _(E,O,H,W){let $={},K=O.attributes,q=0,oe=H.getAttributes();for(let X in oe)if(oe[X].location>=0){let ye=K[X];ye===void 0&&(X==="instanceMatrix"&&E.instanceMatrix&&(ye=E.instanceMatrix),X==="instanceColor"&&E.instanceColor&&(ye=E.instanceColor));let we={};we.attribute=ye,ye&&ye.data&&(we.data=ye.data),$[X]=we,q++}s.attributes=$,s.attributesNum=q,s.index=W}function g(){let E=s.newAttributes;for(let O=0,H=E.length;O<H;O++)E[O]=0}function m(E){p(E,0)}function p(E,O){let H=s.newAttributes,W=s.enabledAttributes,$=s.attributeDivisors;H[E]=1,W[E]===0&&(r.enableVertexAttribArray(E),W[E]=1),$[E]!==O&&(r.vertexAttribDivisor(E,O),$[E]=O)}function M(){let E=s.newAttributes,O=s.enabledAttributes;for(let H=0,W=O.length;H<W;H++)O[H]!==E[H]&&(r.disableVertexAttribArray(H),O[H]=0)}function b(E,O,H,W,$,K,q){q===!0?r.vertexAttribIPointer(E,O,H,$,K):r.vertexAttribPointer(E,O,H,W,$,K)}function S(E,O,H,W){g();let $=W.attributes,K=H.getAttributes(),q=O.defaultAttributeValues;for(let oe in K){let X=K[oe];if(X.location>=0){let fe=$[oe];if(fe===void 0&&(oe==="instanceMatrix"&&E.instanceMatrix&&(fe=E.instanceMatrix),oe==="instanceColor"&&E.instanceColor&&(fe=E.instanceColor)),fe!==void 0){let ye=fe.normalized,we=fe.itemSize,Ne=e.get(fe);if(Ne===void 0)continue;let Qe=Ne.buffer,Xe=Ne.type,Ve=Ne.bytesPerElement,ee=Xe===r.INT||Xe===r.UNSIGNED_INT||fe.gpuType===Sc;if(fe.isInterleavedBufferAttribute){let ce=fe.data,Ee=ce.stride,Ue=fe.offset;if(ce.isInstancedInterleavedBuffer){for(let Re=0;Re<X.locationSize;Re++)p(X.location+Re,ce.meshPerAttribute);E.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let Re=0;Re<X.locationSize;Re++)m(X.location+Re);r.bindBuffer(r.ARRAY_BUFFER,Qe);for(let Re=0;Re<X.locationSize;Re++)b(X.location+Re,we/X.locationSize,Xe,ye,Ee*Ve,(Ue+we/X.locationSize*Re)*Ve,ee)}else{if(fe.isInstancedBufferAttribute){for(let ce=0;ce<X.locationSize;ce++)p(X.location+ce,fe.meshPerAttribute);E.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let ce=0;ce<X.locationSize;ce++)m(X.location+ce);r.bindBuffer(r.ARRAY_BUFFER,Qe);for(let ce=0;ce<X.locationSize;ce++)b(X.location+ce,we/X.locationSize,Xe,ye,we*Ve,we/X.locationSize*ce*Ve,ee)}}else if(q!==void 0){let ye=q[oe];if(ye!==void 0)switch(ye.length){case 2:r.vertexAttrib2fv(X.location,ye);break;case 3:r.vertexAttrib3fv(X.location,ye);break;case 4:r.vertexAttrib4fv(X.location,ye);break;default:r.vertexAttrib1fv(X.location,ye)}}}}M()}function T(){I();for(let E in i){let O=i[E];for(let H in O){let W=O[H];for(let $ in W)h(W[$].object),delete W[$];delete O[H]}delete i[E]}}function C(E){if(i[E.id]===void 0)return;let O=i[E.id];for(let H in O){let W=O[H];for(let $ in W)h(W[$].object),delete W[$];delete O[H]}delete i[E.id]}function P(E){for(let O in i){let H=i[O];if(H[E.id]===void 0)continue;let W=H[E.id];for(let $ in W)h(W[$].object),delete W[$];delete H[E.id]}}function I(){x(),o=!0,s!==n&&(s=n,c(s.object))}function x(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:a,reset:I,resetDefaultState:x,dispose:T,releaseStatesOfGeometry:C,releaseStatesOfProgram:P,initAttributes:g,enableAttribute:m,disableUnusedAttributes:M}}function vE(r,e,t){let i;function n(c){i=c}function s(c,h){r.drawArrays(i,c,h),t.update(h,i,1)}function o(c,h,u){u!==0&&(r.drawArraysInstanced(i,c,h,u),t.update(h,i,u))}function a(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let f=0;for(let _=0;_<u;_++)f+=h[_];t.update(f,i,1)}function l(c,h,u,d){if(u===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let _=0;_<c.length;_++)o(c[_],h[_],d[_]);else{f.multiDrawArraysInstancedWEBGL(i,c,0,h,0,d,0,u);let _=0;for(let g=0;g<u;g++)_+=h[g]*d[g];t.update(_,i,1)}}this.setMode=n,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function _E(r,e,t,i){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let P=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function o(P){return!(P!==Fi&&i.convert(P)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){let I=P===js&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==nn&&i.convert(P)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==rn&&!I)}function l(P){if(P==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(c=h);let u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),M=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),b=r.getParameter(r.MAX_VARYING_VECTORS),S=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),T=_>0,C=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:b,maxFragmentUniforms:S,vertexTextures:T,maxSamples:C}}function yE(r){let e=this,t=null,i=0,n=!1,s=!1,o=new Zi,a=new ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||i!==0||n;return n=d,i=u.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let _=u.clippingPlanes,g=u.clipIntersection,m=u.clipShadows,p=r.get(u);if(!n||_===null||_.length===0||s&&!m)s?h(null):c();else{let M=s?0:i,b=M*4,S=p.clippingState||null;l.value=S,S=h(_,d,b,f);for(let T=0;T!==b;++T)S[T]=t[T];p.clippingState=S,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,d,f,_){let g=u!==null?u.length:0,m=null;if(g!==0){if(m=l.value,_!==!0||m===null){let p=f+g*4,M=d.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let b=0,S=f;b!==g;++b,S+=4)o.copy(u[b]).applyMatrix4(M,a),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function bE(r){let e=new WeakMap;function t(o,a){return a===yc?o.mapping=zr:a===bc&&(o.mapping=Vr),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===yc||a===bc)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new $l(l.height);return c.fromEquirectangularTexture(r,o),e.set(o,c),o.addEventListener("dispose",n),t(c.texture,o.mapping)}else return null}}return o}function n(o){let a=o.target;a.removeEventListener("dispose",n);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}function SE(r){let e=[],t=[],i=[],n=r,s=r-Qs+1+fv.length;for(let o=0;o<s;o++){let a=Math.pow(2,n);t.push(a);let l=1/a;o>r-Qs?l=fv[o-r+Qs-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,_=6,g=3,m=2,p=1,M=new Float32Array(g*_*f),b=new Float32Array(m*_*f),S=new Float32Array(p*_*f);for(let C=0;C<f;C++){let P=C%3*2/3-1,I=C>2?0:-1,x=[P,I,0,P+2/3,I,0,P+2/3,I+1,0,P,I,0,P+2/3,I+1,0,P,I+1,0];M.set(x,g*_*C),b.set(d,m*_*C);let E=[C,C,C,C,C,C];S.set(E,p*_*C)}let T=new Qn;T.setAttribute("position",new _i(M,g)),T.setAttribute("uv",new _i(b,m)),T.setAttribute("faceIndex",new _i(S,p)),e.push(T),n>Qs&&n--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function gv(r,e,t){let i=new Ji(r,e,t);return i.texture.mapping=ma,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function rh(r,e,t,i,n){r.viewport.set(e,t,i,n),r.scissor.set(e,t,i,n)}function ME(r,e,t){let i=new Float32Array(eo),n=new G(0,1,0);return new zi({name:"SphericalGaussianBlur",defines:{n:eo,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:Kd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Tn,depthTest:!1,depthWrite:!1})}function vv(){return new zi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Kd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Tn,depthTest:!1,depthWrite:!1})}function _v(){return new zi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Kd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Tn,depthTest:!1,depthWrite:!1})}function Kd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function EE(r){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===yc||l===bc,h=l===zr||l===Vr;if(c||h){let u=e.get(a),d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new oh(r)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{let f=a.image;return c&&f&&f.height>0||h&&f&&n(f)?(t===null&&(t=new oh(r)),u=c?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",s),u.texture):null}}}return a}function n(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){let l=a.target;l.removeEventListener("dispose",s);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function wE(r){let e={};function t(i){if(e[i]!==void 0)return e[i];let n;switch(i){case"WEBGL_depth_texture":n=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=r.getExtension(i)}return e[i]=n,n}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let n=t(i);return n===null&&Hs("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function TE(r,e,t,i){let n={},s=new WeakMap;function o(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let _ in d.attributes)e.remove(d.attributes[_]);d.removeEventListener("dispose",o),delete n[d.id];let f=s.get(d);f&&(e.remove(f),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return n[d.id]===!0||(d.addEventListener("dispose",o),n[d.id]=!0,t.memory.geometries++),d}function l(u){let d=u.attributes;for(let f in d)e.update(d[f],r.ARRAY_BUFFER)}function c(u){let d=[],f=u.index,_=u.attributes.position,g=0;if(f!==null){let M=f.array;g=f.version;for(let b=0,S=M.length;b<S;b+=3){let T=M[b+0],C=M[b+1],P=M[b+2];d.push(T,C,C,P,P,T)}}else if(_!==void 0){let M=_.array;g=_.version;for(let b=0,S=M.length/3-1;b<S;b+=3){let T=b+0,C=b+1,P=b+2;d.push(T,C,C,P,P,T)}}else return;let m=new(Ld(d)?ta:ea)(d,1);m.version=g;let p=s.get(u);p&&e.remove(p),s.set(u,m)}function h(u){let d=s.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return s.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function AE(r,e,t){let i;function n(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,f){r.drawElements(i,f,s,d*o),t.update(f,i,1)}function c(d,f,_){_!==0&&(r.drawElementsInstanced(i,f,s,d*o,_),t.update(f,i,_))}function h(d,f,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,d,0,_);let m=0;for(let p=0;p<_;p++)m+=f[p];t.update(m,i,1)}function u(d,f,_,g){if(_===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/o,f[p],g[p]);else{m.multiDrawElementsInstancedWEBGL(i,f,0,s,d,0,g,0,_);let p=0;for(let M=0;M<_;M++)p+=f[M]*g[M];t.update(p,i,1)}}this.setMode=n,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function CE(r){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:break}}function n(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:n,update:i}}function RE(r,e,t){let i=new WeakMap,n=new xt;function s(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=i.get(a);if(d===void 0||d.count!==u){let x=function(){P.dispose(),i.delete(a),a.removeEventListener("dispose",x)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],M=a.morphAttributes.color||[],b=0;f===!0&&(b=1),_===!0&&(b=2),g===!0&&(b=3);let S=a.attributes.position.count*b,T=1;S>e.maxTextureSize&&(T=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);let C=new Float32Array(S*T*4*u),P=new Jo(C,S,T,u);P.type=rn,P.needsUpdate=!0;let I=b*4;for(let E=0;E<u;E++){let O=m[E],H=p[E],W=M[E],$=S*T*4*E;for(let K=0;K<O.count;K++){let q=K*I;f===!0&&(n.fromBufferAttribute(O,K),C[$+q+0]=n.x,C[$+q+1]=n.y,C[$+q+2]=n.z,C[$+q+3]=0),_===!0&&(n.fromBufferAttribute(H,K),C[$+q+4]=n.x,C[$+q+5]=n.y,C[$+q+6]=n.z,C[$+q+7]=0),g===!0&&(n.fromBufferAttribute(W,K),C[$+q+8]=n.x,C[$+q+9]=n.y,C[$+q+10]=n.z,C[$+q+11]=W.itemSize===4?n.w:1)}}d={count:u,texture:P,size:new ze(S,T)},i.set(a,d),a.addEventListener("dispose",x)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,t);else{let f=0;for(let g=0;g<c.length;g++)f+=c[g];let _=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(r,"morphTargetBaseInfluence",_),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function PE(r,e,t,i){let n=new WeakMap;function s(l){let c=i.render.frame,h=l.geometry,u=e.get(l,h);if(n.get(u)!==c&&(e.update(u),n.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),n.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),n.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;n.get(d)!==c&&(d.update(),n.set(d,c))}return u}function o(){n=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}function io(r,e,t){let i=r[0];if(i<=0||i>0)return r;let n=e*t,s=bv[n];if(s===void 0&&(s=new Float32Array(n),bv[n]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function Rt(r,e){if(r.length!==e.length)return!1;for(let t=0,i=r.length;t<i;t++)if(r[t]!==e[t])return!1;return!0}function Pt(r,e){for(let t=0,i=e.length;t<i;t++)r[t]=e[t]}function lh(r,e){let t=xv[e];t===void 0&&(t=new Int32Array(e),xv[e]=t);for(let i=0;i!==e;++i)t[i]=r.allocateTextureUnit();return t}function LE(r,e){let t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function IE(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;r.uniform2fv(this.addr,e),Pt(t,e)}}function DE(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Rt(t,e))return;r.uniform3fv(this.addr,e),Pt(t,e)}}function OE(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;r.uniform4fv(this.addr,e),Pt(t,e)}}function FE(r,e){let t=this.cache,i=e.elements;if(i===void 0){if(Rt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Pt(t,e)}else{if(Rt(t,i))return;Ev.set(i),r.uniformMatrix2fv(this.addr,!1,Ev),Pt(t,i)}}function NE(r,e){let t=this.cache,i=e.elements;if(i===void 0){if(Rt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Pt(t,e)}else{if(Rt(t,i))return;Mv.set(i),r.uniformMatrix3fv(this.addr,!1,Mv),Pt(t,i)}}function UE(r,e){let t=this.cache,i=e.elements;if(i===void 0){if(Rt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Pt(t,e)}else{if(Rt(t,i))return;Sv.set(i),r.uniformMatrix4fv(this.addr,!1,Sv),Pt(t,i)}}function BE(r,e){let t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function kE(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;r.uniform2iv(this.addr,e),Pt(t,e)}}function HE(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rt(t,e))return;r.uniform3iv(this.addr,e),Pt(t,e)}}function zE(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;r.uniform4iv(this.addr,e),Pt(t,e)}}function VE(r,e){let t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function GE(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;r.uniform2uiv(this.addr,e),Pt(t,e)}}function WE(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rt(t,e))return;r.uniform3uiv(this.addr,e),Pt(t,e)}}function XE(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;r.uniform4uiv(this.addr,e),Pt(t,e)}}function qE(r,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n);let s;this.type===r.SAMPLER_2D_SHADOW?(yv.compareFunction=Cd,s=yv):s=Uv,t.setTexture2D(e||s,n)}function YE(r,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTexture3D(e||kv,n)}function jE(r,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTextureCube(e||Hv,n)}function ZE(r,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTexture2DArray(e||Bv,n)}function $E(r){switch(r){case 5126:return LE;case 35664:return IE;case 35665:return DE;case 35666:return OE;case 35674:return FE;case 35675:return NE;case 35676:return UE;case 5124:case 35670:return BE;case 35667:case 35671:return kE;case 35668:case 35672:return HE;case 35669:case 35673:return zE;case 5125:return VE;case 36294:return GE;case 36295:return WE;case 36296:return XE;case 35678:case 36198:case 36298:case 36306:case 35682:return qE;case 35679:case 36299:case 36307:return YE;case 35680:case 36300:case 36308:case 36293:return jE;case 36289:case 36303:case 36311:case 36292:return ZE}}function KE(r,e){r.uniform1fv(this.addr,e)}function JE(r,e){let t=io(e,this.size,2);r.uniform2fv(this.addr,t)}function QE(r,e){let t=io(e,this.size,3);r.uniform3fv(this.addr,t)}function ew(r,e){let t=io(e,this.size,4);r.uniform4fv(this.addr,t)}function tw(r,e){let t=io(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function iw(r,e){let t=io(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function nw(r,e){let t=io(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function rw(r,e){r.uniform1iv(this.addr,e)}function sw(r,e){r.uniform2iv(this.addr,e)}function ow(r,e){r.uniform3iv(this.addr,e)}function aw(r,e){r.uniform4iv(this.addr,e)}function lw(r,e){r.uniform1uiv(this.addr,e)}function cw(r,e){r.uniform2uiv(this.addr,e)}function hw(r,e){r.uniform3uiv(this.addr,e)}function uw(r,e){r.uniform4uiv(this.addr,e)}function dw(r,e,t){let i=this.cache,n=e.length,s=lh(t,n);Rt(i,s)||(r.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==n;++o)t.setTexture2D(e[o]||Uv,s[o])}function fw(r,e,t){let i=this.cache,n=e.length,s=lh(t,n);Rt(i,s)||(r.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==n;++o)t.setTexture3D(e[o]||kv,s[o])}function pw(r,e,t){let i=this.cache,n=e.length,s=lh(t,n);Rt(i,s)||(r.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==n;++o)t.setTextureCube(e[o]||Hv,s[o])}function mw(r,e,t){let i=this.cache,n=e.length,s=lh(t,n);Rt(i,s)||(r.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==n;++o)t.setTexture2DArray(e[o]||Bv,s[o])}function gw(r){switch(r){case 5126:return KE;case 35664:return JE;case 35665:return QE;case 35666:return ew;case 35674:return tw;case 35675:return iw;case 35676:return nw;case 5124:case 35670:return rw;case 35667:case 35671:return sw;case 35668:case 35672:return ow;case 35669:case 35673:return aw;case 5125:return lw;case 36294:return cw;case 36295:return hw;case 36296:return uw;case 35678:case 36198:case 36298:case 36306:case 35682:return dw;case 35679:case 36299:case 36307:return fw;case 35680:case 36300:case 36308:case 36293:return pw;case 36289:case 36303:case 36311:case 36292:return mw}}function wv(r,e){r.seq.push(e),r.map[e.id]=e}function vw(r,e,t){let i=r.name,n=i.length;for(Vd.lastIndex=0;;){let s=Vd.exec(i),o=Vd.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===n){wv(t,c===void 0?new Gd(a,r,e):new Wd(a,r,e));break}else{let u=t.map[a];u===void 0&&(u=new Xd(a),wv(t,u)),t=u}}}function Tv(r,e,t){let i=r.createShader(e);return r.shaderSource(i,t),r.compileShader(i),i}function bw(r,e){let t=r.split(`
`),i=[],n=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=n;o<s;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function xw(r){Ke._getMatrix(Av,Ke.workingColorSpace,r);let e=`mat3( ${Av.elements.map(t=>t.toFixed(4))} )`;switch(Ke.getTransfer(r)){case $o:return[e,"LinearTransferOETF"];case tt:return[e,"sRGBTransferOETF"];default:return[e,"LinearTransferOETF"]}}function Cv(r,e,t){let i=r.getShaderParameter(e,r.COMPILE_STATUS),s=(r.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+bw(r.getShaderSource(e),a)}else return s}function Sw(r,e){let t=xw(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Mw(r,e){let t;switch(e){case Gg:t="Linear";break;case Wg:t="Reinhard";break;case Xg:t="Cineon";break;case qg:t="ACESFilmic";break;case jg:t="AgX";break;case Zg:t="Neutral";break;case Yg:t="Custom";break;default:t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Ew(){Ke.getLuminanceCoefficients(sh);let r=sh.x.toFixed(4),e=sh.y.toFixed(4),t=sh.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ww(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(xa).join(`
`)}function Tw(r){let e=[];for(let t in r){let i=r[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Aw(r,e){let t={},i=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){let s=r.getActiveAttrib(e,n),o=s.name,a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function xa(r){return r!==""}function Rv(r,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Pv(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}function qd(r){return r.replace(Cw,Pw)}function Pw(r,e){let t=We[e];if(t===void 0){let i=Rw.get(e);if(i!==void 0)t=We[i];else throw new Error("Can not resolve #include <"+e+">")}return qd(t)}function Lv(r){return r.replace(Lw,Iw)}function Iw(r,e,t,i){let n="";for(let s=parseInt(e);s<parseInt(t);s++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return n}function Iv(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Dw(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===pd?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Sg?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===en&&(e="SHADOWMAP_TYPE_VSM"),e}function Ow(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case zr:case Vr:e="ENVMAP_TYPE_CUBE";break;case ma:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Fw(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Vr:e="ENVMAP_MODE_REFRACTION";break}return e}function Nw(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case _d:e="ENVMAP_BLENDING_MULTIPLY";break;case zg:e="ENVMAP_BLENDING_MIX";break;case Vg:e="ENVMAP_BLENDING_ADD";break}return e}function Uw(r){let e=r.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function Bw(r,e,t,i){let n=r.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,l=Dw(t),c=Ow(t),h=Fw(t),u=Nw(t),d=Uw(t),f=ww(t),_=Tw(s),g=n.createProgram(),m,p,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(xa).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(xa).join(`
`),p.length>0&&(p+=`
`)):(m=[Iv(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xa).join(`
`),p=[Iv(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==An?"#define TONE_MAPPING":"",t.toneMapping!==An?We.tonemapping_pars_fragment:"",t.toneMapping!==An?Mw("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",We.colorspace_pars_fragment,Sw("linearToOutputTexel",t.outputColorSpace),Ew(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(xa).join(`
`)),o=qd(o),o=Rv(o,t),o=Pv(o,t),a=qd(a),a=Rv(a,t),a=Pv(a,t),o=Lv(o),a=Lv(a),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Rd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Rd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let b=M+m+o,S=M+p+a,T=Tv(n,n.VERTEX_SHADER,b),C=Tv(n,n.FRAGMENT_SHADER,S);n.attachShader(g,T),n.attachShader(g,C),t.index0AttributeName!==void 0?n.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&n.bindAttribLocation(g,0,"position"),n.linkProgram(g);function P(O){if(r.debug.checkShaderErrors){let H=n.getProgramInfoLog(g)||"",W=n.getShaderInfoLog(T)||"",$=n.getShaderInfoLog(C)||"",K=H.trim(),q=W.trim(),oe=$.trim(),X=!0,fe=!0;if(n.getProgramParameter(g,n.LINK_STATUS)===!1)if(X=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(n,g,T,C);else{let ye=Cv(n,T,"vertex"),we=Cv(n,C,"fragment")}else K!==""||(q===""||oe==="")&&(fe=!1);fe&&(O.diagnostics={runnable:X,programLog:K,vertexShader:{log:q,prefix:m},fragmentShader:{log:oe,prefix:p}})}n.deleteShader(T),n.deleteShader(C),I=new to(n,g),x=Aw(n,g)}let I;this.getUniforms=function(){return I===void 0&&P(this),I};let x;this.getAttributes=function(){return x===void 0&&P(this),x};let E=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=n.getProgramParameter(g,_w)),E},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=yw++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=T,this.fragmentShader=C,this}function Hw(r,e,t,i,n,s,o){let a=new Gs,l=new Yd,c=new Set,h=[],u=n.logarithmicDepthBuffer,d=n.vertexTextures,f=n.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return c.add(x),x===0?"uv":`uv${x}`}function m(x,E,O,H,W){let $=H.fog,K=W.geometry,q=x.isMeshStandardMaterial?H.environment:null,oe=(x.isMeshStandardMaterial?t:e).get(x.envMap||q),X=oe&&oe.mapping===ma?oe.image.height:null,fe=_[x.type];x.precision!==null&&(f=n.getMaxPrecision(x.precision),x.precision);let ye=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,we=ye!==void 0?ye.length:0,Ne=0;K.morphAttributes.position!==void 0&&(Ne=1),K.morphAttributes.normal!==void 0&&(Ne=2),K.morphAttributes.color!==void 0&&(Ne=3);let Qe,Xe,Ve,ee;if(fe){let Me=sn[fe];Qe=Me.vertexShader,Xe=Me.fragmentShader}else Qe=x.vertexShader,Xe=x.fragmentShader,l.update(x),Ve=l.getVertexShaderID(x),ee=l.getFragmentShaderID(x);let ce=r.getRenderTarget(),Ee=r.state.buffers.depth.getReversed(),Ue=W.isInstancedMesh===!0,Re=W.isBatchedMesh===!0,qe=!!x.map,Lt=!!x.matcap,D=!!oe,ot=!!x.aoMap,Fe=!!x.lightMap,De=!!x.bumpMap,Te=!!x.normalMap,at=!!x.displacementMap,Ae=!!x.emissiveMap,U=!!x.metalnessMap,F=!!x.roughnessMap,w=x.anisotropy>0,v=x.clearcoat>0,y=x.dispersion>0,R=x.iridescence>0,N=x.sheen>0,k=x.transmission>0,L=w&&!!x.anisotropyMap,Q=v&&!!x.clearcoatMap,ne=v&&!!x.clearcoatNormalMap,he=v&&!!x.clearcoatRoughnessMap,ie=R&&!!x.iridescenceMap,te=R&&!!x.iridescenceThicknessMap,se=N&&!!x.sheenColorMap,pe=N&&!!x.sheenRoughnessMap,me=!!x.specularMap,le=!!x.specularColorMap,Pe=!!x.specularIntensityMap,B=k&&!!x.transmissionMap,ae=k&&!!x.thicknessMap,de=!!x.gradientMap,ge=!!x.alphaMap,re=x.alphaTest>0,J=!!x.alphaHash,be=!!x.extensions,ve=An;x.toneMapped&&(ce===null||ce.isXRRenderTarget===!0)&&(ve=r.toneMapping);let Ge={shaderID:fe,shaderType:x.type,shaderName:x.name,vertexShader:Qe,fragmentShader:Xe,defines:x.defines,customVertexShaderID:Ve,customFragmentShaderID:ee,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:f,batching:Re,batchingColor:Re&&W._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&W.instanceColor!==null,instancingMorph:Ue&&W.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ce===null?r.outputColorSpace:ce.isXRRenderTarget===!0?ce.texture.colorSpace:Ur,alphaToCoverage:!!x.alphaToCoverage,map:qe,matcap:Lt,envMap:D,envMapMode:D&&oe.mapping,envMapCubeUVHeight:X,aoMap:ot,lightMap:Fe,bumpMap:De,normalMap:Te,displacementMap:d&&at,emissiveMap:Ae,normalMapObjectSpace:Te&&x.normalMapType===ev,normalMapTangentSpace:Te&&x.normalMapType===Qg,metalnessMap:U,roughnessMap:F,anisotropy:w,anisotropyMap:L,clearcoat:v,clearcoatMap:Q,clearcoatNormalMap:ne,clearcoatRoughnessMap:he,dispersion:y,iridescence:R,iridescenceMap:ie,iridescenceThicknessMap:te,sheen:N,sheenColorMap:se,sheenRoughnessMap:pe,specularMap:me,specularColorMap:le,specularIntensityMap:Pe,transmission:k,transmissionMap:B,thicknessMap:ae,gradientMap:de,opaque:x.transparent===!1&&x.blending===Fr&&x.alphaToCoverage===!1,alphaMap:ge,alphaTest:re,alphaHash:J,combine:x.combine,mapUv:qe&&g(x.map.channel),aoMapUv:ot&&g(x.aoMap.channel),lightMapUv:Fe&&g(x.lightMap.channel),bumpMapUv:De&&g(x.bumpMap.channel),normalMapUv:Te&&g(x.normalMap.channel),displacementMapUv:at&&g(x.displacementMap.channel),emissiveMapUv:Ae&&g(x.emissiveMap.channel),metalnessMapUv:U&&g(x.metalnessMap.channel),roughnessMapUv:F&&g(x.roughnessMap.channel),anisotropyMapUv:L&&g(x.anisotropyMap.channel),clearcoatMapUv:Q&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:ne&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:he&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:ie&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:te&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:se&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:pe&&g(x.sheenRoughnessMap.channel),specularMapUv:me&&g(x.specularMap.channel),specularColorMapUv:le&&g(x.specularColorMap.channel),specularIntensityMapUv:Pe&&g(x.specularIntensityMap.channel),transmissionMapUv:B&&g(x.transmissionMap.channel),thicknessMapUv:ae&&g(x.thicknessMap.channel),alphaMapUv:ge&&g(x.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(Te||w),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!K.attributes.uv&&(qe||ge),fog:!!$,useFog:x.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:x.flatShading===!0&&x.wireframe===!1,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:Ee,skinning:W.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:we,morphTextureStride:Ne,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:r.shadowMap.enabled&&O.length>0,shadowMapType:r.shadowMap.type,toneMapping:ve,decodeVideoTexture:qe&&x.map.isVideoTexture===!0&&Ke.getTransfer(x.map.colorSpace)===tt,decodeVideoTextureEmissive:Ae&&x.emissiveMap.isVideoTexture===!0&&Ke.getTransfer(x.emissiveMap.colorSpace)===tt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Si,flipSided:x.side===ti,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:be&&x.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(be&&x.extensions.multiDraw===!0||Re)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Ge.vertexUv1s=c.has(1),Ge.vertexUv2s=c.has(2),Ge.vertexUv3s=c.has(3),c.clear(),Ge}function p(x){let E=[];if(x.shaderID?E.push(x.shaderID):(E.push(x.customVertexShaderID),E.push(x.customFragmentShaderID)),x.defines!==void 0)for(let O in x.defines)E.push(O),E.push(x.defines[O]);return x.isRawShaderMaterial===!1&&(M(E,x),b(E,x),E.push(r.outputColorSpace)),E.push(x.customProgramCacheKey),E.join()}function M(x,E){x.push(E.precision),x.push(E.outputColorSpace),x.push(E.envMapMode),x.push(E.envMapCubeUVHeight),x.push(E.mapUv),x.push(E.alphaMapUv),x.push(E.lightMapUv),x.push(E.aoMapUv),x.push(E.bumpMapUv),x.push(E.normalMapUv),x.push(E.displacementMapUv),x.push(E.emissiveMapUv),x.push(E.metalnessMapUv),x.push(E.roughnessMapUv),x.push(E.anisotropyMapUv),x.push(E.clearcoatMapUv),x.push(E.clearcoatNormalMapUv),x.push(E.clearcoatRoughnessMapUv),x.push(E.iridescenceMapUv),x.push(E.iridescenceThicknessMapUv),x.push(E.sheenColorMapUv),x.push(E.sheenRoughnessMapUv),x.push(E.specularMapUv),x.push(E.specularColorMapUv),x.push(E.specularIntensityMapUv),x.push(E.transmissionMapUv),x.push(E.thicknessMapUv),x.push(E.combine),x.push(E.fogExp2),x.push(E.sizeAttenuation),x.push(E.morphTargetsCount),x.push(E.morphAttributeCount),x.push(E.numDirLights),x.push(E.numPointLights),x.push(E.numSpotLights),x.push(E.numSpotLightMaps),x.push(E.numHemiLights),x.push(E.numRectAreaLights),x.push(E.numDirLightShadows),x.push(E.numPointLightShadows),x.push(E.numSpotLightShadows),x.push(E.numSpotLightShadowsWithMaps),x.push(E.numLightProbes),x.push(E.shadowMapType),x.push(E.toneMapping),x.push(E.numClippingPlanes),x.push(E.numClipIntersection),x.push(E.depthPacking)}function b(x,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),E.gradientMap&&a.enable(22),x.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),x.push(a.mask)}function S(x){let E=_[x.type],O;if(E){let H=sn[E];O=uv.clone(H.uniforms)}else O=x.uniforms;return O}function T(x,E){let O;for(let H=0,W=h.length;H<W;H++){let $=h[H];if($.cacheKey===E){O=$,++O.usedTimes;break}}return O===void 0&&(O=new Bw(r,E,x,s),h.push(O)),O}function C(x){if(--x.usedTimes===0){let E=h.indexOf(x);h[E]=h[h.length-1],h.pop(),x.destroy()}}function P(x){l.remove(x)}function I(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:S,acquireProgram:T,releaseProgram:C,releaseShaderCache:P,programs:h,dispose:I}}function zw(){let r=new WeakMap;function e(o){return r.has(o)}function t(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function i(o){r.delete(o)}function n(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:i,update:n,dispose:s}}function Vw(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Dv(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Ov(){let r=[],e=0,t=[],i=[],n=[];function s(){e=0,t.length=0,i.length=0,n.length=0}function o(u,d,f,_,g,m){let p=r[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:_,renderOrder:u.renderOrder,z:g,group:m},r[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=_,p.renderOrder=u.renderOrder,p.z=g,p.group=m),e++,p}function a(u,d,f,_,g,m){let p=o(u,d,f,_,g,m);f.transmission>0?i.push(p):f.transparent===!0?n.push(p):t.push(p)}function l(u,d,f,_,g,m){let p=o(u,d,f,_,g,m);f.transmission>0?i.unshift(p):f.transparent===!0?n.unshift(p):t.unshift(p)}function c(u,d){t.length>1&&t.sort(u||Vw),i.length>1&&i.sort(d||Dv),n.length>1&&n.sort(d||Dv)}function h(){for(let u=e,d=r.length;u<d;u++){let f=r[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:n,init:s,push:a,unshift:l,finish:h,sort:c}}function Gw(){let r=new WeakMap;function e(i,n){let s=r.get(i),o;return s===void 0?(o=new Ov,r.set(i,[o])):n>=s.length?(o=new Ov,s.push(o)):o=s[n],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function Ww(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new G,color:new $e};break;case"SpotLight":t={position:new G,direction:new G,color:new $e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new G,color:new $e,distance:0,decay:0};break;case"HemisphereLight":t={direction:new G,skyColor:new $e,groundColor:new $e};break;case"RectAreaLight":t={color:new $e,position:new G,halfWidth:new G,halfHeight:new G};break}return r[e.id]=t,t}}}function Xw(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}function Yw(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function jw(r){let e=new Ww,t=Xw(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new G);let n=new G,s=new At,o=new At;function a(c){let h=0,u=0,d=0;for(let x=0;x<9;x++)i.probe[x].set(0,0,0);let f=0,_=0,g=0,m=0,p=0,M=0,b=0,S=0,T=0,C=0,P=0;c.sort(Yw);for(let x=0,E=c.length;x<E;x++){let O=c[x],H=O.color,W=O.intensity,$=O.distance,K=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)h+=H.r*W,u+=H.g*W,d+=H.b*W;else if(O.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(O.sh.coefficients[q],W);P++}else if(O.isDirectionalLight){let q=e.get(O);if(q.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){let oe=O.shadow,X=t.get(O);X.shadowIntensity=oe.intensity,X.shadowBias=oe.bias,X.shadowNormalBias=oe.normalBias,X.shadowRadius=oe.radius,X.shadowMapSize=oe.mapSize,i.directionalShadow[f]=X,i.directionalShadowMap[f]=K,i.directionalShadowMatrix[f]=O.shadow.matrix,M++}i.directional[f]=q,f++}else if(O.isSpotLight){let q=e.get(O);q.position.setFromMatrixPosition(O.matrixWorld),q.color.copy(H).multiplyScalar(W),q.distance=$,q.coneCos=Math.cos(O.angle),q.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),q.decay=O.decay,i.spot[g]=q;let oe=O.shadow;if(O.map&&(i.spotLightMap[T]=O.map,T++,oe.updateMatrices(O),O.castShadow&&C++),i.spotLightMatrix[g]=oe.matrix,O.castShadow){let X=t.get(O);X.shadowIntensity=oe.intensity,X.shadowBias=oe.bias,X.shadowNormalBias=oe.normalBias,X.shadowRadius=oe.radius,X.shadowMapSize=oe.mapSize,i.spotShadow[g]=X,i.spotShadowMap[g]=K,S++}g++}else if(O.isRectAreaLight){let q=e.get(O);q.color.copy(H).multiplyScalar(W),q.halfWidth.set(O.width*.5,0,0),q.halfHeight.set(0,O.height*.5,0),i.rectArea[m]=q,m++}else if(O.isPointLight){let q=e.get(O);if(q.color.copy(O.color).multiplyScalar(O.intensity),q.distance=O.distance,q.decay=O.decay,O.castShadow){let oe=O.shadow,X=t.get(O);X.shadowIntensity=oe.intensity,X.shadowBias=oe.bias,X.shadowNormalBias=oe.normalBias,X.shadowRadius=oe.radius,X.shadowMapSize=oe.mapSize,X.shadowCameraNear=oe.camera.near,X.shadowCameraFar=oe.camera.far,i.pointShadow[_]=X,i.pointShadowMap[_]=K,i.pointShadowMatrix[_]=O.shadow.matrix,b++}i.point[_]=q,_++}else if(O.isHemisphereLight){let q=e.get(O);q.skyColor.copy(O.color).multiplyScalar(W),q.groundColor.copy(O.groundColor).multiplyScalar(W),i.hemi[p]=q,p++}}m>0&&(r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=_e.LTC_FLOAT_1,i.rectAreaLTC2=_e.LTC_FLOAT_2):(i.rectAreaLTC1=_e.LTC_HALF_1,i.rectAreaLTC2=_e.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;let I=i.hash;(I.directionalLength!==f||I.pointLength!==_||I.spotLength!==g||I.rectAreaLength!==m||I.hemiLength!==p||I.numDirectionalShadows!==M||I.numPointShadows!==b||I.numSpotShadows!==S||I.numSpotMaps!==T||I.numLightProbes!==P)&&(i.directional.length=f,i.spot.length=g,i.rectArea.length=m,i.point.length=_,i.hemi.length=p,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=S+T-C,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=P,I.directionalLength=f,I.pointLength=_,I.spotLength=g,I.rectAreaLength=m,I.hemiLength=p,I.numDirectionalShadows=M,I.numPointShadows=b,I.numSpotShadows=S,I.numSpotMaps=T,I.numLightProbes=P,i.version=qw++)}function l(c,h){let u=0,d=0,f=0,_=0,g=0,m=h.matrixWorldInverse;for(let p=0,M=c.length;p<M;p++){let b=c[p];if(b.isDirectionalLight){let S=i.directional[u];S.direction.setFromMatrixPosition(b.matrixWorld),n.setFromMatrixPosition(b.target.matrixWorld),S.direction.sub(n),S.direction.transformDirection(m),u++}else if(b.isSpotLight){let S=i.spot[f];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(b.matrixWorld),n.setFromMatrixPosition(b.target.matrixWorld),S.direction.sub(n),S.direction.transformDirection(m),f++}else if(b.isRectAreaLight){let S=i.rectArea[_];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(m),o.identity(),s.copy(b.matrixWorld),s.premultiply(m),o.extractRotation(s),S.halfWidth.set(b.width*.5,0,0),S.halfHeight.set(0,b.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),_++}else if(b.isPointLight){let S=i.point[d];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(m),d++}else if(b.isHemisphereLight){let S=i.hemi[g];S.direction.setFromMatrixPosition(b.matrixWorld),S.direction.transformDirection(m),g++}}}return{setup:a,setupView:l,state:i}}function Fv(r){let e=new jw(r),t=[],i=[];function n(h){c.camera=h,t.length=0,i.length=0}function s(h){t.push(h)}function o(h){i.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}let c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:n,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function Zw(r){let e=new WeakMap;function t(n,s=0){let o=e.get(n),a;return o===void 0?(a=new Fv(r),e.set(n,[a])):s>=o.length?(a=new Fv(r),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}function Jw(r,e,t){let i=new sa,n=new ze,s=new ze,o=new xt,a=new Kl({depthPacking:Jg}),l=new Jl,c={},h=t.maxTextureSize,u={[wn]:ti,[ti]:wn,[Si]:Si},d=new zi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ze},radius:{value:4}},vertexShader:$w,fragmentShader:Kw}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let _=new Qn;_.setAttribute("position",new _i(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new hi(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=pd;let p=this.type;this.render=function(C,P,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;let x=r.getRenderTarget(),E=r.getActiveCubeFace(),O=r.getActiveMipmapLevel(),H=r.state;H.setBlending(Tn),H.buffers.depth.getReversed()===!0?H.buffers.color.setClear(0,0,0,0):H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);let W=p!==en&&this.type===en,$=p===en&&this.type!==en;for(let K=0,q=C.length;K<q;K++){let oe=C[K],X=oe.shadow;if(X===void 0||X.autoUpdate===!1&&X.needsUpdate===!1)continue;n.copy(X.mapSize);let fe=X.getFrameExtents();if(n.multiply(fe),s.copy(X.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(s.x=Math.floor(h/fe.x),n.x=s.x*fe.x,X.mapSize.x=s.x),n.y>h&&(s.y=Math.floor(h/fe.y),n.y=s.y*fe.y,X.mapSize.y=s.y)),X.map===null||W===!0||$===!0){let we=this.type!==en?{minFilter:Oi,magFilter:Oi}:{};X.map!==null&&X.map.dispose(),X.map=new Ji(n.x,n.y,we),X.map.texture.name=oe.name+".shadowMap",X.camera.updateProjectionMatrix()}r.setRenderTarget(X.map),r.clear();let ye=X.getViewportCount();for(let we=0;we<ye;we++){let Ne=X.getViewport(we);o.set(s.x*Ne.x,s.y*Ne.y,s.x*Ne.z,s.y*Ne.w),H.viewport(o),X.updateMatrices(oe,we),i=X.getFrustum(),S(P,I,X.camera,oe,this.type)}X.isPointLightShadow!==!0&&this.type===en&&M(X,I),X.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(x,E,O)};function M(C,P){let I=e.update(g);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,f.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Ji(n.x,n.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,r.setRenderTarget(C.mapPass),r.clear(),r.renderBufferDirect(P,null,I,d,g,null),f.uniforms.shadow_pass.value=C.mapPass.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,r.setRenderTarget(C.map),r.clear(),r.renderBufferDirect(P,null,I,f,g,null)}function b(C,P,I,x){let E=null,O=I.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(O!==void 0)E=O;else if(E=I.isPointLight===!0?l:a,r.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){let H=E.uuid,W=P.uuid,$=c[H];$===void 0&&($={},c[H]=$);let K=$[W];K===void 0&&(K=E.clone(),$[W]=K,P.addEventListener("dispose",T)),E=K}if(E.visible=P.visible,E.wireframe=P.wireframe,x===en?E.side=P.shadowSide!==null?P.shadowSide:P.side:E.side=P.shadowSide!==null?P.shadowSide:u[P.side],E.alphaMap=P.alphaMap,E.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,E.map=P.map,E.clipShadows=P.clipShadows,E.clippingPlanes=P.clippingPlanes,E.clipIntersection=P.clipIntersection,E.displacementMap=P.displacementMap,E.displacementScale=P.displacementScale,E.displacementBias=P.displacementBias,E.wireframeLinewidth=P.wireframeLinewidth,E.linewidth=P.linewidth,I.isPointLight===!0&&E.isMeshDistanceMaterial===!0){let H=r.properties.get(E);H.light=I}return E}function S(C,P,I,x,E){if(C.visible===!1)return;if(C.layers.test(P.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&E===en)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,C.matrixWorld);let W=e.update(C),$=C.material;if(Array.isArray($)){let K=W.groups;for(let q=0,oe=K.length;q<oe;q++){let X=K[q],fe=$[X.materialIndex];if(fe&&fe.visible){let ye=b(C,fe,x,E);C.onBeforeShadow(r,C,P,I,W,ye,X),r.renderBufferDirect(I,null,W,ye,C,X),C.onAfterShadow(r,C,P,I,W,ye,X)}}}else if($.visible){let K=b(C,$,x,E);C.onBeforeShadow(r,C,P,I,W,K,null),r.renderBufferDirect(I,null,W,K,C,null),C.onAfterShadow(r,C,P,I,W,K,null)}}let H=C.children;for(let W=0,$=H.length;W<$;W++)S(H[W],P,I,x,E)}function T(C){C.target.removeEventListener("dispose",T);for(let I in c){let x=c[I],E=C.target.uuid;E in x&&(x[E].dispose(),delete x[E])}}}function eT(r,e){function t(){let B=!1,ae=new xt,de=null,ge=new xt(0,0,0,0);return{setMask:function(re){de!==re&&!B&&(r.colorMask(re,re,re,re),de=re)},setLocked:function(re){B=re},setClear:function(re,J,be,ve,Ge){Ge===!0&&(re*=ve,J*=ve,be*=ve),ae.set(re,J,be,ve),ge.equals(ae)===!1&&(r.clearColor(re,J,be,ve),ge.copy(ae))},reset:function(){B=!1,de=null,ge.set(-1,0,0,0)}}}function i(){let B=!1,ae=!1,de=null,ge=null,re=null;return{setReversed:function(J){if(ae!==J){let be=e.get("EXT_clip_control");J?be.clipControlEXT(be.LOWER_LEFT_EXT,be.ZERO_TO_ONE_EXT):be.clipControlEXT(be.LOWER_LEFT_EXT,be.NEGATIVE_ONE_TO_ONE_EXT),ae=J;let ve=re;re=null,this.setClear(ve)}},getReversed:function(){return ae},setTest:function(J){J?ce(r.DEPTH_TEST):Ee(r.DEPTH_TEST)},setMask:function(J){de!==J&&!B&&(r.depthMask(J),de=J)},setFunc:function(J){if(ae&&(J=Qw[J]),ge!==J){switch(J){case dc:r.depthFunc(r.NEVER);break;case fc:r.depthFunc(r.ALWAYS);break;case pc:r.depthFunc(r.LESS);break;case Nr:r.depthFunc(r.LEQUAL);break;case mc:r.depthFunc(r.EQUAL);break;case gc:r.depthFunc(r.GEQUAL);break;case vc:r.depthFunc(r.GREATER);break;case _c:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}ge=J}},setLocked:function(J){B=J},setClear:function(J){re!==J&&(ae&&(J=1-J),r.clearDepth(J),re=J)},reset:function(){B=!1,de=null,ge=null,re=null,ae=!1}}}function n(){let B=!1,ae=null,de=null,ge=null,re=null,J=null,be=null,ve=null,Ge=null;return{setTest:function(Me){B||(Me?ce(r.STENCIL_TEST):Ee(r.STENCIL_TEST))},setMask:function(Me){ae!==Me&&!B&&(r.stencilMask(Me),ae=Me)},setFunc:function(Me,nt,He){(de!==Me||ge!==nt||re!==He)&&(r.stencilFunc(Me,nt,He),de=Me,ge=nt,re=He)},setOp:function(Me,nt,He){(J!==Me||be!==nt||ve!==He)&&(r.stencilOp(Me,nt,He),J=Me,be=nt,ve=He)},setLocked:function(Me){B=Me},setClear:function(Me){Ge!==Me&&(r.clearStencil(Me),Ge=Me)},reset:function(){B=!1,ae=null,de=null,ge=null,re=null,J=null,be=null,ve=null,Ge=null}}}let s=new t,o=new i,a=new n,l=new WeakMap,c=new WeakMap,h={},u={},d=new WeakMap,f=[],_=null,g=!1,m=null,p=null,M=null,b=null,S=null,T=null,C=null,P=new $e(0,0,0),I=0,x=!1,E=null,O=null,H=null,W=null,$=null,K=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),q=!1,oe=0,X=r.getParameter(r.VERSION);X.indexOf("WebGL")!==-1?(oe=parseFloat(/^WebGL (\d)/.exec(X)[1]),q=oe>=1):X.indexOf("OpenGL ES")!==-1&&(oe=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),q=oe>=2);let fe=null,ye={},we=r.getParameter(r.SCISSOR_BOX),Ne=r.getParameter(r.VIEWPORT),Qe=new xt().fromArray(we),Xe=new xt().fromArray(Ne);function Ve(B,ae,de,ge){let re=new Uint8Array(4),J=r.createTexture();r.bindTexture(B,J),r.texParameteri(B,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(B,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let be=0;be<de;be++)B===r.TEXTURE_3D||B===r.TEXTURE_2D_ARRAY?r.texImage3D(ae,0,r.RGBA,1,1,ge,0,r.RGBA,r.UNSIGNED_BYTE,re):r.texImage2D(ae+be,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,re);return J}let ee={};ee[r.TEXTURE_2D]=Ve(r.TEXTURE_2D,r.TEXTURE_2D,1),ee[r.TEXTURE_CUBE_MAP]=Ve(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),ee[r.TEXTURE_2D_ARRAY]=Ve(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ee[r.TEXTURE_3D]=Ve(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ce(r.DEPTH_TEST),o.setFunc(Nr),De(!1),Te(fd),ce(r.CULL_FACE),ot(Tn);function ce(B){h[B]!==!0&&(r.enable(B),h[B]=!0)}function Ee(B){h[B]!==!1&&(r.disable(B),h[B]=!1)}function Ue(B,ae){return u[B]!==ae?(r.bindFramebuffer(B,ae),u[B]=ae,B===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=ae),B===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=ae),!0):!1}function Re(B,ae){let de=f,ge=!1;if(B){de=d.get(ae),de===void 0&&(de=[],d.set(ae,de));let re=B.textures;if(de.length!==re.length||de[0]!==r.COLOR_ATTACHMENT0){for(let J=0,be=re.length;J<be;J++)de[J]=r.COLOR_ATTACHMENT0+J;de.length=re.length,ge=!0}}else de[0]!==r.BACK&&(de[0]=r.BACK,ge=!0);ge&&r.drawBuffers(de)}function qe(B){return _!==B?(r.useProgram(B),_=B,!0):!1}let Lt={[$n]:r.FUNC_ADD,[Eg]:r.FUNC_SUBTRACT,[wg]:r.FUNC_REVERSE_SUBTRACT};Lt[Tg]=r.MIN,Lt[Ag]=r.MAX;let D={[Cg]:r.ZERO,[Rg]:r.ONE,[Pg]:r.SRC_COLOR,[zl]:r.SRC_ALPHA,[Ng]:r.SRC_ALPHA_SATURATE,[Og]:r.DST_COLOR,[Ig]:r.DST_ALPHA,[Lg]:r.ONE_MINUS_SRC_COLOR,[Vl]:r.ONE_MINUS_SRC_ALPHA,[Fg]:r.ONE_MINUS_DST_COLOR,[Dg]:r.ONE_MINUS_DST_ALPHA,[Ug]:r.CONSTANT_COLOR,[Bg]:r.ONE_MINUS_CONSTANT_COLOR,[kg]:r.CONSTANT_ALPHA,[Hg]:r.ONE_MINUS_CONSTANT_ALPHA};function ot(B,ae,de,ge,re,J,be,ve,Ge,Me){if(B===Tn){g===!0&&(Ee(r.BLEND),g=!1);return}if(g===!1&&(ce(r.BLEND),g=!0),B!==Mg){if(B!==m||Me!==x){if((p!==$n||S!==$n)&&(r.blendEquation(r.FUNC_ADD),p=$n,S=$n),Me)switch(B){case Fr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case md:r.blendFunc(r.ONE,r.ONE);break;case gd:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case vd:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:break}else switch(B){case Fr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case md:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case gd:break;case vd:break;default:break}M=null,b=null,T=null,C=null,P.set(0,0,0),I=0,m=B,x=Me}return}re=re||ae,J=J||de,be=be||ge,(ae!==p||re!==S)&&(r.blendEquationSeparate(Lt[ae],Lt[re]),p=ae,S=re),(de!==M||ge!==b||J!==T||be!==C)&&(r.blendFuncSeparate(D[de],D[ge],D[J],D[be]),M=de,b=ge,T=J,C=be),(ve.equals(P)===!1||Ge!==I)&&(r.blendColor(ve.r,ve.g,ve.b,Ge),P.copy(ve),I=Ge),m=B,x=!1}function Fe(B,ae){B.side===Si?Ee(r.CULL_FACE):ce(r.CULL_FACE);let de=B.side===ti;ae&&(de=!de),De(de),B.blending===Fr&&B.transparent===!1?ot(Tn):ot(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),o.setFunc(B.depthFunc),o.setTest(B.depthTest),o.setMask(B.depthWrite),s.setMask(B.colorWrite);let ge=B.stencilWrite;a.setTest(ge),ge&&(a.setMask(B.stencilWriteMask),a.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),a.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),Ae(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?ce(r.SAMPLE_ALPHA_TO_COVERAGE):Ee(r.SAMPLE_ALPHA_TO_COVERAGE)}function De(B){E!==B&&(B?r.frontFace(r.CW):r.frontFace(r.CCW),E=B)}function Te(B){B!==bg?(ce(r.CULL_FACE),B!==O&&(B===fd?r.cullFace(r.BACK):B===xg?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ee(r.CULL_FACE),O=B}function at(B){B!==H&&(q&&r.lineWidth(B),H=B)}function Ae(B,ae,de){B?(ce(r.POLYGON_OFFSET_FILL),(W!==ae||$!==de)&&(r.polygonOffset(ae,de),W=ae,$=de)):Ee(r.POLYGON_OFFSET_FILL)}function U(B){B?ce(r.SCISSOR_TEST):Ee(r.SCISSOR_TEST)}function F(B){B===void 0&&(B=r.TEXTURE0+K-1),fe!==B&&(r.activeTexture(B),fe=B)}function w(B,ae,de){de===void 0&&(fe===null?de=r.TEXTURE0+K-1:de=fe);let ge=ye[de];ge===void 0&&(ge={type:void 0,texture:void 0},ye[de]=ge),(ge.type!==B||ge.texture!==ae)&&(fe!==de&&(r.activeTexture(de),fe=de),r.bindTexture(B,ae||ee[B]),ge.type=B,ge.texture=ae)}function v(){let B=ye[fe];B!==void 0&&B.type!==void 0&&(r.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function y(){try{r.compressedTexImage2D(...arguments)}catch{}}function R(){try{r.compressedTexImage3D(...arguments)}catch{}}function N(){try{r.texSubImage2D(...arguments)}catch{}}function k(){try{r.texSubImage3D(...arguments)}catch{}}function L(){try{r.compressedTexSubImage2D(...arguments)}catch{}}function Q(){try{r.compressedTexSubImage3D(...arguments)}catch{}}function ne(){try{r.texStorage2D(...arguments)}catch{}}function he(){try{r.texStorage3D(...arguments)}catch{}}function ie(){try{r.texImage2D(...arguments)}catch{}}function te(){try{r.texImage3D(...arguments)}catch{}}function se(B){Qe.equals(B)===!1&&(r.scissor(B.x,B.y,B.z,B.w),Qe.copy(B))}function pe(B){Xe.equals(B)===!1&&(r.viewport(B.x,B.y,B.z,B.w),Xe.copy(B))}function me(B,ae){let de=c.get(ae);de===void 0&&(de=new WeakMap,c.set(ae,de));let ge=de.get(B);ge===void 0&&(ge=r.getUniformBlockIndex(ae,B.name),de.set(B,ge))}function le(B,ae){let ge=c.get(ae).get(B);l.get(ae)!==ge&&(r.uniformBlockBinding(ae,ge,B.__bindingPointIndex),l.set(ae,ge))}function Pe(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},fe=null,ye={},u={},d=new WeakMap,f=[],_=null,g=!1,m=null,p=null,M=null,b=null,S=null,T=null,C=null,P=new $e(0,0,0),I=0,x=!1,E=null,O=null,H=null,W=null,$=null,Qe.set(0,0,r.canvas.width,r.canvas.height),Xe.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ce,disable:Ee,bindFramebuffer:Ue,drawBuffers:Re,useProgram:qe,setBlending:ot,setMaterial:Fe,setFlipSided:De,setCullFace:Te,setLineWidth:at,setPolygonOffset:Ae,setScissorTest:U,activeTexture:F,bindTexture:w,unbindTexture:v,compressedTexImage2D:y,compressedTexImage3D:R,texImage2D:ie,texImage3D:te,updateUBOMapping:me,uniformBlockBinding:le,texStorage2D:ne,texStorage3D:he,texSubImage2D:N,texSubImage3D:k,compressedTexSubImage2D:L,compressedTexSubImage3D:Q,scissor:se,viewport:pe,reset:Pe}}function tT(r,e,t,i,n,s,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ze,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(v,y){return f?new OffscreenCanvas(v,y):ks("canvas")}function g(v,y,R){let N=1,k=w(v);if((k.width>R||k.height>R)&&(N=R/Math.max(k.width,k.height)),N<1)if(typeof HTMLImageElement!="undefined"&&v instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&v instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&v instanceof ImageBitmap||typeof VideoFrame!="undefined"&&v instanceof VideoFrame){let L=Math.floor(N*k.width),Q=Math.floor(N*k.height);u===void 0&&(u=_(L,Q));let ne=y?_(L,Q):u;return ne.width=L,ne.height=Q,ne.getContext("2d").drawImage(v,0,0,L,Q),ne}else return"data"in v,v;return v}function m(v){return v.generateMipmaps}function p(v){r.generateMipmap(v)}function M(v){return v.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:v.isWebGL3DRenderTarget?r.TEXTURE_3D:v.isWebGLArrayRenderTarget||v.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function b(v,y,R,N,k=!1){if(v!==null&&r[v]!==void 0)return r[v];let L=y;if(y===r.RED&&(R===r.FLOAT&&(L=r.R32F),R===r.HALF_FLOAT&&(L=r.R16F),R===r.UNSIGNED_BYTE&&(L=r.R8)),y===r.RED_INTEGER&&(R===r.UNSIGNED_BYTE&&(L=r.R8UI),R===r.UNSIGNED_SHORT&&(L=r.R16UI),R===r.UNSIGNED_INT&&(L=r.R32UI),R===r.BYTE&&(L=r.R8I),R===r.SHORT&&(L=r.R16I),R===r.INT&&(L=r.R32I)),y===r.RG&&(R===r.FLOAT&&(L=r.RG32F),R===r.HALF_FLOAT&&(L=r.RG16F),R===r.UNSIGNED_BYTE&&(L=r.RG8)),y===r.RG_INTEGER&&(R===r.UNSIGNED_BYTE&&(L=r.RG8UI),R===r.UNSIGNED_SHORT&&(L=r.RG16UI),R===r.UNSIGNED_INT&&(L=r.RG32UI),R===r.BYTE&&(L=r.RG8I),R===r.SHORT&&(L=r.RG16I),R===r.INT&&(L=r.RG32I)),y===r.RGB_INTEGER&&(R===r.UNSIGNED_BYTE&&(L=r.RGB8UI),R===r.UNSIGNED_SHORT&&(L=r.RGB16UI),R===r.UNSIGNED_INT&&(L=r.RGB32UI),R===r.BYTE&&(L=r.RGB8I),R===r.SHORT&&(L=r.RGB16I),R===r.INT&&(L=r.RGB32I)),y===r.RGBA_INTEGER&&(R===r.UNSIGNED_BYTE&&(L=r.RGBA8UI),R===r.UNSIGNED_SHORT&&(L=r.RGBA16UI),R===r.UNSIGNED_INT&&(L=r.RGBA32UI),R===r.BYTE&&(L=r.RGBA8I),R===r.SHORT&&(L=r.RGBA16I),R===r.INT&&(L=r.RGBA32I)),y===r.RGB&&(R===r.UNSIGNED_INT_5_9_9_9_REV&&(L=r.RGB9_E5),R===r.UNSIGNED_INT_10F_11F_11F_REV&&(L=r.R11F_G11F_B10F)),y===r.RGBA){let Q=k?$o:Ke.getTransfer(N);R===r.FLOAT&&(L=r.RGBA32F),R===r.HALF_FLOAT&&(L=r.RGBA16F),R===r.UNSIGNED_BYTE&&(L=Q===tt?r.SRGB8_ALPHA8:r.RGBA8),R===r.UNSIGNED_SHORT_4_4_4_4&&(L=r.RGBA4),R===r.UNSIGNED_SHORT_5_5_5_1&&(L=r.RGB5_A1)}return(L===r.R16F||L===r.R32F||L===r.RG16F||L===r.RG32F||L===r.RGBA16F||L===r.RGBA32F)&&e.get("EXT_color_buffer_float"),L}function S(v,y){let R;return v?y===null||y===nr||y===Zs?R=r.DEPTH24_STENCIL8:y===rn?R=r.DEPTH32F_STENCIL8:y===Ys&&(R=r.DEPTH24_STENCIL8):y===null||y===nr||y===Zs?R=r.DEPTH_COMPONENT24:y===rn?R=r.DEPTH_COMPONENT32F:y===Ys&&(R=r.DEPTH_COMPONENT16),R}function T(v,y){return m(v)===!0||v.isFramebufferTexture&&v.minFilter!==Oi&&v.minFilter!==Ut?Math.log2(Math.max(y.width,y.height))+1:v.mipmaps!==void 0&&v.mipmaps.length>0?v.mipmaps.length:v.isCompressedTexture&&Array.isArray(v.image)?y.mipmaps.length:1}function C(v){let y=v.target;y.removeEventListener("dispose",C),I(y),y.isVideoTexture&&h.delete(y)}function P(v){let y=v.target;y.removeEventListener("dispose",P),E(y)}function I(v){let y=i.get(v);if(y.__webglInit===void 0)return;let R=v.source,N=d.get(R);if(N){let k=N[y.__cacheKey];k.usedTimes--,k.usedTimes===0&&x(v),Object.keys(N).length===0&&d.delete(R)}i.remove(v)}function x(v){let y=i.get(v);r.deleteTexture(y.__webglTexture);let R=v.source,N=d.get(R);delete N[y.__cacheKey],o.memory.textures--}function E(v){let y=i.get(v);if(v.depthTexture&&(v.depthTexture.dispose(),i.remove(v.depthTexture)),v.isWebGLCubeRenderTarget)for(let N=0;N<6;N++){if(Array.isArray(y.__webglFramebuffer[N]))for(let k=0;k<y.__webglFramebuffer[N].length;k++)r.deleteFramebuffer(y.__webglFramebuffer[N][k]);else r.deleteFramebuffer(y.__webglFramebuffer[N]);y.__webglDepthbuffer&&r.deleteRenderbuffer(y.__webglDepthbuffer[N])}else{if(Array.isArray(y.__webglFramebuffer))for(let N=0;N<y.__webglFramebuffer.length;N++)r.deleteFramebuffer(y.__webglFramebuffer[N]);else r.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&r.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&r.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let N=0;N<y.__webglColorRenderbuffer.length;N++)y.__webglColorRenderbuffer[N]&&r.deleteRenderbuffer(y.__webglColorRenderbuffer[N]);y.__webglDepthRenderbuffer&&r.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let R=v.textures;for(let N=0,k=R.length;N<k;N++){let L=i.get(R[N]);L.__webglTexture&&(r.deleteTexture(L.__webglTexture),o.memory.textures--),i.remove(R[N])}i.remove(v)}let O=0;function H(){O=0}function W(){let v=O;return v>=n.maxTextures,O+=1,v}function $(v){let y=[];return y.push(v.wrapS),y.push(v.wrapT),y.push(v.wrapR||0),y.push(v.magFilter),y.push(v.minFilter),y.push(v.anisotropy),y.push(v.internalFormat),y.push(v.format),y.push(v.type),y.push(v.generateMipmaps),y.push(v.premultiplyAlpha),y.push(v.flipY),y.push(v.unpackAlignment),y.push(v.colorSpace),y.join()}function K(v,y){let R=i.get(v);if(v.isVideoTexture&&U(v),v.isRenderTargetTexture===!1&&v.isExternalTexture!==!0&&v.version>0&&R.__version!==v.version){let N=v.image;if(N!==null){if(N.complete!==!1){ee(R,v,y);return}}}else v.isExternalTexture&&(R.__webglTexture=v.sourceTexture?v.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,R.__webglTexture,r.TEXTURE0+y)}function q(v,y){let R=i.get(v);if(v.isRenderTargetTexture===!1&&v.version>0&&R.__version!==v.version){ee(R,v,y);return}t.bindTexture(r.TEXTURE_2D_ARRAY,R.__webglTexture,r.TEXTURE0+y)}function oe(v,y){let R=i.get(v);if(v.isRenderTargetTexture===!1&&v.version>0&&R.__version!==v.version){ee(R,v,y);return}t.bindTexture(r.TEXTURE_3D,R.__webglTexture,r.TEXTURE0+y)}function X(v,y){let R=i.get(v);if(v.version>0&&R.__version!==v.version){ce(R,v,y);return}t.bindTexture(r.TEXTURE_CUBE_MAP,R.__webglTexture,r.TEXTURE0+y)}let fe={[Gl]:r.REPEAT,[Zn]:r.CLAMP_TO_EDGE,[Wl]:r.MIRRORED_REPEAT},ye={[Oi]:r.NEAREST,[$g]:r.NEAREST_MIPMAP_NEAREST,[ga]:r.NEAREST_MIPMAP_LINEAR,[Ut]:r.LINEAR,[xc]:r.LINEAR_MIPMAP_NEAREST,[tn]:r.LINEAR_MIPMAP_LINEAR},we={[tv]:r.NEVER,[av]:r.ALWAYS,[iv]:r.LESS,[Cd]:r.LEQUAL,[nv]:r.EQUAL,[ov]:r.GEQUAL,[rv]:r.GREATER,[sv]:r.NOTEQUAL};function Ne(v,y){if(y.type===rn&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Ut||y.magFilter===xc||y.magFilter===ga||y.magFilter===tn||y.minFilter===Ut||y.minFilter===xc||y.minFilter===ga||(y.minFilter,tn)),r.texParameteri(v,r.TEXTURE_WRAP_S,fe[y.wrapS]),r.texParameteri(v,r.TEXTURE_WRAP_T,fe[y.wrapT]),(v===r.TEXTURE_3D||v===r.TEXTURE_2D_ARRAY)&&r.texParameteri(v,r.TEXTURE_WRAP_R,fe[y.wrapR]),r.texParameteri(v,r.TEXTURE_MAG_FILTER,ye[y.magFilter]),r.texParameteri(v,r.TEXTURE_MIN_FILTER,ye[y.minFilter]),y.compareFunction&&(r.texParameteri(v,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(v,r.TEXTURE_COMPARE_FUNC,we[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Oi||y.minFilter!==ga&&y.minFilter!==tn||y.type===rn&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){let R=e.get("EXT_texture_filter_anisotropic");r.texParameterf(v,R.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,n.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function Qe(v,y){let R=!1;v.__webglInit===void 0&&(v.__webglInit=!0,y.addEventListener("dispose",C));let N=y.source,k=d.get(N);k===void 0&&(k={},d.set(N,k));let L=$(y);if(L!==v.__cacheKey){k[L]===void 0&&(k[L]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,R=!0),k[L].usedTimes++;let Q=k[v.__cacheKey];Q!==void 0&&(k[v.__cacheKey].usedTimes--,Q.usedTimes===0&&x(y)),v.__cacheKey=L,v.__webglTexture=k[L].texture}return R}function Xe(v,y,R){return Math.floor(Math.floor(v/R)/y)}function Ve(v,y,R,N){let L=v.updateRanges;if(L.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,y.width,y.height,R,N,y.data);else{L.sort((te,se)=>te.start-se.start);let Q=0;for(let te=1;te<L.length;te++){let se=L[Q],pe=L[te],me=se.start+se.count,le=Xe(pe.start,y.width,4),Pe=Xe(se.start,y.width,4);pe.start<=me+1&&le===Pe&&Xe(pe.start+pe.count-1,y.width,4)===le?se.count=Math.max(se.count,pe.start+pe.count-se.start):(++Q,L[Q]=pe)}L.length=Q+1;let ne=r.getParameter(r.UNPACK_ROW_LENGTH),he=r.getParameter(r.UNPACK_SKIP_PIXELS),ie=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,y.width);for(let te=0,se=L.length;te<se;te++){let pe=L[te],me=Math.floor(pe.start/4),le=Math.ceil(pe.count/4),Pe=me%y.width,B=Math.floor(me/y.width),ae=le,de=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,Pe),r.pixelStorei(r.UNPACK_SKIP_ROWS,B),t.texSubImage2D(r.TEXTURE_2D,0,Pe,B,ae,de,R,N,y.data)}v.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,ne),r.pixelStorei(r.UNPACK_SKIP_PIXELS,he),r.pixelStorei(r.UNPACK_SKIP_ROWS,ie)}}function ee(v,y,R){let N=r.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(N=r.TEXTURE_2D_ARRAY),y.isData3DTexture&&(N=r.TEXTURE_3D);let k=Qe(v,y),L=y.source;t.bindTexture(N,v.__webglTexture,r.TEXTURE0+R);let Q=i.get(L);if(L.version!==Q.__version||k===!0){t.activeTexture(r.TEXTURE0+R);let ne=Ke.getPrimaries(Ke.workingColorSpace),he=y.colorSpace===Cn?null:Ke.getPrimaries(y.colorSpace),ie=y.colorSpace===Cn||ne===he?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,y.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,y.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie);let te=g(y.image,!1,n.maxTextureSize);te=F(y,te);let se=s.convert(y.format,y.colorSpace),pe=s.convert(y.type),me=b(y.internalFormat,se,pe,y.colorSpace,y.isVideoTexture);Ne(N,y);let le,Pe=y.mipmaps,B=y.isVideoTexture!==!0,ae=Q.__version===void 0||k===!0,de=L.dataReady,ge=T(y,te);if(y.isDepthTexture)me=S(y.format===$s,y.type),ae&&(B?t.texStorage2D(r.TEXTURE_2D,1,me,te.width,te.height):t.texImage2D(r.TEXTURE_2D,0,me,te.width,te.height,0,se,pe,null));else if(y.isDataTexture)if(Pe.length>0){B&&ae&&t.texStorage2D(r.TEXTURE_2D,ge,me,Pe[0].width,Pe[0].height);for(let re=0,J=Pe.length;re<J;re++)le=Pe[re],B?de&&t.texSubImage2D(r.TEXTURE_2D,re,0,0,le.width,le.height,se,pe,le.data):t.texImage2D(r.TEXTURE_2D,re,me,le.width,le.height,0,se,pe,le.data);y.generateMipmaps=!1}else B?(ae&&t.texStorage2D(r.TEXTURE_2D,ge,me,te.width,te.height),de&&Ve(y,te,se,pe)):t.texImage2D(r.TEXTURE_2D,0,me,te.width,te.height,0,se,pe,te.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){B&&ae&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ge,me,Pe[0].width,Pe[0].height,te.depth);for(let re=0,J=Pe.length;re<J;re++)if(le=Pe[re],y.format!==Fi){if(se!==null)if(B){if(de)if(y.layerUpdates.size>0){let be=Fd(le.width,le.height,y.format,y.type);for(let ve of y.layerUpdates){let Ge=le.data.subarray(ve*be/le.data.BYTES_PER_ELEMENT,(ve+1)*be/le.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,re,0,0,ve,le.width,le.height,1,se,Ge)}y.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,re,0,0,0,le.width,le.height,te.depth,se,le.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,re,me,le.width,le.height,te.depth,0,le.data,0,0)}else B?de&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,re,0,0,0,le.width,le.height,te.depth,se,pe,le.data):t.texImage3D(r.TEXTURE_2D_ARRAY,re,me,le.width,le.height,te.depth,0,se,pe,le.data)}else{B&&ae&&t.texStorage2D(r.TEXTURE_2D,ge,me,Pe[0].width,Pe[0].height);for(let re=0,J=Pe.length;re<J;re++)le=Pe[re],y.format!==Fi?se!==null&&(B?de&&t.compressedTexSubImage2D(r.TEXTURE_2D,re,0,0,le.width,le.height,se,le.data):t.compressedTexImage2D(r.TEXTURE_2D,re,me,le.width,le.height,0,le.data)):B?de&&t.texSubImage2D(r.TEXTURE_2D,re,0,0,le.width,le.height,se,pe,le.data):t.texImage2D(r.TEXTURE_2D,re,me,le.width,le.height,0,se,pe,le.data)}else if(y.isDataArrayTexture)if(B){if(ae&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ge,me,te.width,te.height,te.depth),de)if(y.layerUpdates.size>0){let re=Fd(te.width,te.height,y.format,y.type);for(let J of y.layerUpdates){let be=te.data.subarray(J*re/te.data.BYTES_PER_ELEMENT,(J+1)*re/te.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,J,te.width,te.height,1,se,pe,be)}y.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,se,pe,te.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,me,te.width,te.height,te.depth,0,se,pe,te.data);else if(y.isData3DTexture)B?(ae&&t.texStorage3D(r.TEXTURE_3D,ge,me,te.width,te.height,te.depth),de&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,se,pe,te.data)):t.texImage3D(r.TEXTURE_3D,0,me,te.width,te.height,te.depth,0,se,pe,te.data);else if(y.isFramebufferTexture){if(ae)if(B)t.texStorage2D(r.TEXTURE_2D,ge,me,te.width,te.height);else{let re=te.width,J=te.height;for(let be=0;be<ge;be++)t.texImage2D(r.TEXTURE_2D,be,me,re,J,0,se,pe,null),re>>=1,J>>=1}}else if(Pe.length>0){if(B&&ae){let re=w(Pe[0]);t.texStorage2D(r.TEXTURE_2D,ge,me,re.width,re.height)}for(let re=0,J=Pe.length;re<J;re++)le=Pe[re],B?de&&t.texSubImage2D(r.TEXTURE_2D,re,0,0,se,pe,le):t.texImage2D(r.TEXTURE_2D,re,me,se,pe,le);y.generateMipmaps=!1}else if(B){if(ae){let re=w(te);t.texStorage2D(r.TEXTURE_2D,ge,me,re.width,re.height)}de&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,se,pe,te)}else t.texImage2D(r.TEXTURE_2D,0,me,se,pe,te);m(y)&&p(N),Q.__version=L.version,y.onUpdate&&y.onUpdate(y)}v.__version=y.version}function ce(v,y,R){if(y.image.length!==6)return;let N=Qe(v,y),k=y.source;t.bindTexture(r.TEXTURE_CUBE_MAP,v.__webglTexture,r.TEXTURE0+R);let L=i.get(k);if(k.version!==L.__version||N===!0){t.activeTexture(r.TEXTURE0+R);let Q=Ke.getPrimaries(Ke.workingColorSpace),ne=y.colorSpace===Cn?null:Ke.getPrimaries(y.colorSpace),he=y.colorSpace===Cn||Q===ne?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,y.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,y.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);let ie=y.isCompressedTexture||y.image[0].isCompressedTexture,te=y.image[0]&&y.image[0].isDataTexture,se=[];for(let J=0;J<6;J++)!ie&&!te?se[J]=g(y.image[J],!0,n.maxCubemapSize):se[J]=te?y.image[J].image:y.image[J],se[J]=F(y,se[J]);let pe=se[0],me=s.convert(y.format,y.colorSpace),le=s.convert(y.type),Pe=b(y.internalFormat,me,le,y.colorSpace),B=y.isVideoTexture!==!0,ae=L.__version===void 0||N===!0,de=k.dataReady,ge=T(y,pe);Ne(r.TEXTURE_CUBE_MAP,y);let re;if(ie){B&&ae&&t.texStorage2D(r.TEXTURE_CUBE_MAP,ge,Pe,pe.width,pe.height);for(let J=0;J<6;J++){re=se[J].mipmaps;for(let be=0;be<re.length;be++){let ve=re[be];y.format!==Fi?me!==null&&(B?de&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,be,0,0,ve.width,ve.height,me,ve.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,be,Pe,ve.width,ve.height,0,ve.data)):B?de&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,be,0,0,ve.width,ve.height,me,le,ve.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,be,Pe,ve.width,ve.height,0,me,le,ve.data)}}}else{if(re=y.mipmaps,B&&ae){re.length>0&&ge++;let J=w(se[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,ge,Pe,J.width,J.height)}for(let J=0;J<6;J++)if(te){B?de&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,se[J].width,se[J].height,me,le,se[J].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Pe,se[J].width,se[J].height,0,me,le,se[J].data);for(let be=0;be<re.length;be++){let Ge=re[be].image[J].image;B?de&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,be+1,0,0,Ge.width,Ge.height,me,le,Ge.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,be+1,Pe,Ge.width,Ge.height,0,me,le,Ge.data)}}else{B?de&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,me,le,se[J]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Pe,me,le,se[J]);for(let be=0;be<re.length;be++){let ve=re[be];B?de&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,be+1,0,0,me,le,ve.image[J]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,be+1,Pe,me,le,ve.image[J])}}}m(y)&&p(r.TEXTURE_CUBE_MAP),L.__version=k.version,y.onUpdate&&y.onUpdate(y)}v.__version=y.version}function Ee(v,y,R,N,k,L){let Q=s.convert(R.format,R.colorSpace),ne=s.convert(R.type),he=b(R.internalFormat,Q,ne,R.colorSpace),ie=i.get(y),te=i.get(R);if(te.__renderTarget=y,!ie.__hasExternalTextures){let se=Math.max(1,y.width>>L),pe=Math.max(1,y.height>>L);k===r.TEXTURE_3D||k===r.TEXTURE_2D_ARRAY?t.texImage3D(k,L,he,se,pe,y.depth,0,Q,ne,null):t.texImage2D(k,L,he,se,pe,0,Q,ne,null)}t.bindFramebuffer(r.FRAMEBUFFER,v),Ae(y)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,N,k,te.__webglTexture,0,at(y)):(k===r.TEXTURE_2D||k>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&k<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,N,k,te.__webglTexture,L),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ue(v,y,R){if(r.bindRenderbuffer(r.RENDERBUFFER,v),y.depthBuffer){let N=y.depthTexture,k=N&&N.isDepthTexture?N.type:null,L=S(y.stencilBuffer,k),Q=y.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ne=at(y);Ae(y)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ne,L,y.width,y.height):R?r.renderbufferStorageMultisample(r.RENDERBUFFER,ne,L,y.width,y.height):r.renderbufferStorage(r.RENDERBUFFER,L,y.width,y.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Q,r.RENDERBUFFER,v)}else{let N=y.textures;for(let k=0;k<N.length;k++){let L=N[k],Q=s.convert(L.format,L.colorSpace),ne=s.convert(L.type),he=b(L.internalFormat,Q,ne,L.colorSpace),ie=at(y);R&&Ae(y)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,ie,he,y.width,y.height):Ae(y)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ie,he,y.width,y.height):r.renderbufferStorage(r.RENDERBUFFER,he,y.width,y.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Re(v,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,v),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let N=i.get(y.depthTexture);N.__renderTarget=y,(!N.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),K(y.depthTexture,0);let k=N.__webglTexture,L=at(y);if(y.depthTexture.format===Us)Ae(y)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,k,0,L):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,k,0);else if(y.depthTexture.format===$s)Ae(y)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,k,0,L):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,k,0);else throw new Error("Unknown depthTexture format")}function qe(v){let y=i.get(v),R=v.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==v.depthTexture){let N=v.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),N){let k=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,N.removeEventListener("dispose",k)};N.addEventListener("dispose",k),y.__depthDisposeCallback=k}y.__boundDepthTexture=N}if(v.depthTexture&&!y.__autoAllocateDepthBuffer){if(R)throw new Error("target.depthTexture not supported in Cube render targets");let N=v.texture.mipmaps;N&&N.length>0?Re(y.__webglFramebuffer[0],v):Re(y.__webglFramebuffer,v)}else if(R){y.__webglDepthbuffer=[];for(let N=0;N<6;N++)if(t.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer[N]),y.__webglDepthbuffer[N]===void 0)y.__webglDepthbuffer[N]=r.createRenderbuffer(),Ue(y.__webglDepthbuffer[N],v,!1);else{let k=v.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,L=y.__webglDepthbuffer[N];r.bindRenderbuffer(r.RENDERBUFFER,L),r.framebufferRenderbuffer(r.FRAMEBUFFER,k,r.RENDERBUFFER,L)}}else{let N=v.texture.mipmaps;if(N&&N.length>0?t.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=r.createRenderbuffer(),Ue(y.__webglDepthbuffer,v,!1);else{let k=v.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,L=y.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,L),r.framebufferRenderbuffer(r.FRAMEBUFFER,k,r.RENDERBUFFER,L)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Lt(v,y,R){let N=i.get(v);y!==void 0&&Ee(N.__webglFramebuffer,v,v.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),R!==void 0&&qe(v)}function D(v){let y=v.texture,R=i.get(v),N=i.get(y);v.addEventListener("dispose",P);let k=v.textures,L=v.isWebGLCubeRenderTarget===!0,Q=k.length>1;if(Q||(N.__webglTexture===void 0&&(N.__webglTexture=r.createTexture()),N.__version=y.version,o.memory.textures++),L){R.__webglFramebuffer=[];for(let ne=0;ne<6;ne++)if(y.mipmaps&&y.mipmaps.length>0){R.__webglFramebuffer[ne]=[];for(let he=0;he<y.mipmaps.length;he++)R.__webglFramebuffer[ne][he]=r.createFramebuffer()}else R.__webglFramebuffer[ne]=r.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){R.__webglFramebuffer=[];for(let ne=0;ne<y.mipmaps.length;ne++)R.__webglFramebuffer[ne]=r.createFramebuffer()}else R.__webglFramebuffer=r.createFramebuffer();if(Q)for(let ne=0,he=k.length;ne<he;ne++){let ie=i.get(k[ne]);ie.__webglTexture===void 0&&(ie.__webglTexture=r.createTexture(),o.memory.textures++)}if(v.samples>0&&Ae(v)===!1){R.__webglMultisampledFramebuffer=r.createFramebuffer(),R.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,R.__webglMultisampledFramebuffer);for(let ne=0;ne<k.length;ne++){let he=k[ne];R.__webglColorRenderbuffer[ne]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,R.__webglColorRenderbuffer[ne]);let ie=s.convert(he.format,he.colorSpace),te=s.convert(he.type),se=b(he.internalFormat,ie,te,he.colorSpace,v.isXRRenderTarget===!0),pe=at(v);r.renderbufferStorageMultisample(r.RENDERBUFFER,pe,se,v.width,v.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ne,r.RENDERBUFFER,R.__webglColorRenderbuffer[ne])}r.bindRenderbuffer(r.RENDERBUFFER,null),v.depthBuffer&&(R.__webglDepthRenderbuffer=r.createRenderbuffer(),Ue(R.__webglDepthRenderbuffer,v,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(L){t.bindTexture(r.TEXTURE_CUBE_MAP,N.__webglTexture),Ne(r.TEXTURE_CUBE_MAP,y);for(let ne=0;ne<6;ne++)if(y.mipmaps&&y.mipmaps.length>0)for(let he=0;he<y.mipmaps.length;he++)Ee(R.__webglFramebuffer[ne][he],v,y,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,he);else Ee(R.__webglFramebuffer[ne],v,y,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0);m(y)&&p(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Q){for(let ne=0,he=k.length;ne<he;ne++){let ie=k[ne],te=i.get(ie),se=r.TEXTURE_2D;(v.isWebGL3DRenderTarget||v.isWebGLArrayRenderTarget)&&(se=v.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(se,te.__webglTexture),Ne(se,ie),Ee(R.__webglFramebuffer,v,ie,r.COLOR_ATTACHMENT0+ne,se,0),m(ie)&&p(se)}t.unbindTexture()}else{let ne=r.TEXTURE_2D;if((v.isWebGL3DRenderTarget||v.isWebGLArrayRenderTarget)&&(ne=v.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(ne,N.__webglTexture),Ne(ne,y),y.mipmaps&&y.mipmaps.length>0)for(let he=0;he<y.mipmaps.length;he++)Ee(R.__webglFramebuffer[he],v,y,r.COLOR_ATTACHMENT0,ne,he);else Ee(R.__webglFramebuffer,v,y,r.COLOR_ATTACHMENT0,ne,0);m(y)&&p(ne),t.unbindTexture()}v.depthBuffer&&qe(v)}function ot(v){let y=v.textures;for(let R=0,N=y.length;R<N;R++){let k=y[R];if(m(k)){let L=M(v),Q=i.get(k).__webglTexture;t.bindTexture(L,Q),p(L),t.unbindTexture()}}}let Fe=[],De=[];function Te(v){if(v.samples>0){if(Ae(v)===!1){let y=v.textures,R=v.width,N=v.height,k=r.COLOR_BUFFER_BIT,L=v.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Q=i.get(v),ne=y.length>1;if(ne)for(let ie=0;ie<y.length;ie++)t.bindFramebuffer(r.FRAMEBUFFER,Q.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ie,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Q.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ie,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Q.__webglMultisampledFramebuffer);let he=v.texture.mipmaps;he&&he.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Q.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Q.__webglFramebuffer);for(let ie=0;ie<y.length;ie++){if(v.resolveDepthBuffer&&(v.depthBuffer&&(k|=r.DEPTH_BUFFER_BIT),v.stencilBuffer&&v.resolveStencilBuffer&&(k|=r.STENCIL_BUFFER_BIT)),ne){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Q.__webglColorRenderbuffer[ie]);let te=i.get(y[ie]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,te,0)}r.blitFramebuffer(0,0,R,N,0,0,R,N,k,r.NEAREST),l===!0&&(Fe.length=0,De.length=0,Fe.push(r.COLOR_ATTACHMENT0+ie),v.depthBuffer&&v.resolveDepthBuffer===!1&&(Fe.push(L),De.push(L),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,De)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Fe))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ne)for(let ie=0;ie<y.length;ie++){t.bindFramebuffer(r.FRAMEBUFFER,Q.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ie,r.RENDERBUFFER,Q.__webglColorRenderbuffer[ie]);let te=i.get(y[ie]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Q.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ie,r.TEXTURE_2D,te,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Q.__webglMultisampledFramebuffer)}else if(v.depthBuffer&&v.resolveDepthBuffer===!1&&l){let y=v.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[y])}}}function at(v){return Math.min(n.maxSamples,v.samples)}function Ae(v){let y=i.get(v);return v.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function U(v){let y=o.render.frame;h.get(v)!==y&&(h.set(v,y),v.update())}function F(v,y){let R=v.colorSpace,N=v.format,k=v.type;return v.isCompressedTexture===!0||v.isVideoTexture===!0||R!==Ur&&R!==Cn&&(Ke.getTransfer(R),tt),y}function w(v){return typeof HTMLImageElement!="undefined"&&v instanceof HTMLImageElement?(c.width=v.naturalWidth||v.width,c.height=v.naturalHeight||v.height):typeof VideoFrame!="undefined"&&v instanceof VideoFrame?(c.width=v.displayWidth,c.height=v.displayHeight):(c.width=v.width,c.height=v.height),c}this.allocateTextureUnit=W,this.resetTextureUnits=H,this.setTexture2D=K,this.setTexture2DArray=q,this.setTexture3D=oe,this.setTextureCube=X,this.rebindTextures=Lt,this.setupRenderTarget=D,this.updateRenderTargetMipmap=ot,this.updateMultisampleRenderTarget=Te,this.setupDepthRenderbuffer=qe,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=Ae}function iT(r,e){function t(i,n=Cn){let s,o=Ke.getTransfer(n);if(i===nn)return r.UNSIGNED_BYTE;if(i===Mc)return r.UNSIGNED_SHORT_4_4_4_4;if(i===Ec)return r.UNSIGNED_SHORT_5_5_5_1;if(i===Sd)return r.UNSIGNED_INT_5_9_9_9_REV;if(i===Md)return r.UNSIGNED_INT_10F_11F_11F_REV;if(i===bd)return r.BYTE;if(i===xd)return r.SHORT;if(i===Ys)return r.UNSIGNED_SHORT;if(i===Sc)return r.INT;if(i===nr)return r.UNSIGNED_INT;if(i===rn)return r.FLOAT;if(i===js)return r.HALF_FLOAT;if(i===Ed)return r.ALPHA;if(i===wd)return r.RGB;if(i===Fi)return r.RGBA;if(i===Us)return r.DEPTH_COMPONENT;if(i===$s)return r.DEPTH_STENCIL;if(i===Td)return r.RED;if(i===wc)return r.RED_INTEGER;if(i===Ad)return r.RG;if(i===Tc)return r.RG_INTEGER;if(i===Ac)return r.RGBA_INTEGER;if(i===va||i===_a||i===ya||i===ba)if(o===tt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===va)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===_a)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ya)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ba)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===va)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===_a)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ya)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ba)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Cc||i===Rc||i===Pc||i===Lc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Cc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Rc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Pc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Lc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ic||i===Dc||i===Oc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Ic||i===Dc)return o===tt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Oc)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Fc||i===Nc||i===Uc||i===Bc||i===kc||i===Hc||i===zc||i===Vc||i===Gc||i===Wc||i===Xc||i===qc||i===Yc||i===jc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Fc)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Nc)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Uc)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Bc)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===kc)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Hc)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===zc)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Vc)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Gc)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Wc)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Xc)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===qc)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Yc)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===jc)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Zc||i===$c||i===Kc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Zc)return o===tt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===$c)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Kc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Jc||i===Qc||i===eh||i===th)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Jc)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Qc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===eh)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===th)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Zs?r.UNSIGNED_INT_24_8:r[i]!==void 0?r[i]:null}return{convert:t}}function oT(r,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Id(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function n(m,p,M,b,S){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),u(m,p)):p.isMeshPhongMaterial?(s(m,p),h(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,S)):p.isMeshMatcapMaterial?(s(m,p),_(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),g(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,M,b):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===ti&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===ti&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let M=e.get(p),b=M.envMap,S=M.envMapRotation;b&&(m.envMap.value=b,Xr.copy(S),Xr.x*=-1,Xr.y*=-1,Xr.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Xr.y*=-1,Xr.z*=-1),m.envMapRotation.value.setFromMatrix4(sT.makeRotationFromEuler(Xr)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,M,b){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=b*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===ti&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){let M=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function aT(r,e,t,i){let n={},s={},o=[],a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,b){let S=b.program;i.uniformBlockBinding(M,S)}function c(M,b){let S=n[M.id];S===void 0&&(_(M),S=h(M),n[M.id]=S,M.addEventListener("dispose",m));let T=b.program;i.updateUBOMapping(M,T);let C=e.render.frame;s[M.id]!==C&&(d(M),s[M.id]=C)}function h(M){let b=u();M.__bindingPointIndex=b;let S=r.createBuffer(),T=M.__size,C=M.usage;return r.bindBuffer(r.UNIFORM_BUFFER,S),r.bufferData(r.UNIFORM_BUFFER,T,C),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,b,S),S}function u(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return 0}function d(M){let b=n[M.id],S=M.uniforms,T=M.__cache;r.bindBuffer(r.UNIFORM_BUFFER,b);for(let C=0,P=S.length;C<P;C++){let I=Array.isArray(S[C])?S[C]:[S[C]];for(let x=0,E=I.length;x<E;x++){let O=I[x];if(f(O,C,x,T)===!0){let H=O.__offset,W=Array.isArray(O.value)?O.value:[O.value],$=0;for(let K=0;K<W.length;K++){let q=W[K],oe=g(q);typeof q=="number"||typeof q=="boolean"?(O.__data[0]=q,r.bufferSubData(r.UNIFORM_BUFFER,H+$,O.__data)):q.isMatrix3?(O.__data[0]=q.elements[0],O.__data[1]=q.elements[1],O.__data[2]=q.elements[2],O.__data[3]=0,O.__data[4]=q.elements[3],O.__data[5]=q.elements[4],O.__data[6]=q.elements[5],O.__data[7]=0,O.__data[8]=q.elements[6],O.__data[9]=q.elements[7],O.__data[10]=q.elements[8],O.__data[11]=0):(q.toArray(O.__data,$),$+=oe.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,H,O.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(M,b,S,T){let C=M.value,P=b+"_"+S;if(T[P]===void 0)return typeof C=="number"||typeof C=="boolean"?T[P]=C:T[P]=C.clone(),!0;{let I=T[P];if(typeof C=="number"||typeof C=="boolean"){if(I!==C)return T[P]=C,!0}else if(I.equals(C)===!1)return I.copy(C),!0}return!1}function _(M){let b=M.uniforms,S=0,T=16;for(let P=0,I=b.length;P<I;P++){let x=Array.isArray(b[P])?b[P]:[b[P]];for(let E=0,O=x.length;E<O;E++){let H=x[E],W=Array.isArray(H.value)?H.value:[H.value];for(let $=0,K=W.length;$<K;$++){let q=W[$],oe=g(q),X=S%T,fe=X%oe.boundary,ye=X+fe;S+=fe,ye!==0&&T-ye<oe.storage&&(S+=T-ye),H.__data=new Float32Array(oe.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=S,S+=oe.storage}}}let C=S%T;return C>0&&(S+=T-C),M.__size=S,M.__cache={},this}function g(M){let b={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(b.boundary=4,b.storage=4):M.isVector2?(b.boundary=8,b.storage=8):M.isVector3||M.isColor?(b.boundary=16,b.storage=12):M.isVector4?(b.boundary=16,b.storage=16):M.isMatrix3?(b.boundary=48,b.storage=48):M.isMatrix4?(b.boundary=64,b.storage=64):M.isTexture,b}function m(M){let b=M.target;b.removeEventListener("dispose",m);let S=o.indexOf(b.__bindingPointIndex);o.splice(S,1),r.deleteBuffer(n[b.id]),delete n[b.id],delete s[b.id]}function p(){for(let M in n)r.deleteBuffer(n[M]);o=[],n={},s={}}return{bind:l,update:c,dispose:p}}var Fx,Nx,Ux,Bx,kx,Hx,zx,Vx,Gx,Wx,Xx,qx,Yx,jx,Zx,$x,Kx,Jx,Qx,eS,tS,iS,nS,rS,sS,oS,aS,lS,cS,hS,uS,dS,fS,pS,mS,gS,vS,_S,yS,bS,xS,SS,MS,ES,wS,TS,AS,CS,RS,PS,LS,IS,DS,OS,FS,NS,US,BS,kS,HS,zS,VS,GS,WS,XS,qS,YS,jS,ZS,$S,KS,JS,QS,eM,tM,iM,nM,rM,sM,oM,aM,lM,cM,hM,uM,dM,fM,pM,mM,gM,vM,_M,yM,bM,xM,SM,MM,EM,wM,TM,AM,CM,RM,PM,LM,IM,DM,OM,FM,NM,UM,BM,kM,HM,zM,VM,GM,WM,XM,qM,YM,jM,ZM,$M,KM,JM,QM,eE,tE,iE,nE,rE,sE,oE,aE,lE,cE,hE,uE,dE,fE,We,_e,sn,nh,Wr,pE,Qs,fv,eo,Ud,pv,Bd,kd,Hd,zd,qr,Js,mv,xE,oh,Uv,yv,Bv,kv,Hv,bv,xv,Sv,Mv,Ev,Gd,Wd,Xd,Vd,to,_w,yw,Av,sh,Cw,Rw,Lw,kw,Yd,jd,qw,$w,Kw,Qw,nT,rT,Zd,$d,Xr,sT,ah,Jd=Yt(()=>{Nd();Nd();Fx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Nx=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Ux=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Bx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Hx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,zx=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Vx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Gx=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Wx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Xx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,qx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Yx=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,jx=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Zx=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,$x=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Kx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Jx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Qx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,eS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,tS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,iS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,nS=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,rS=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,sS=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,oS=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,aS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,lS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,cS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,hS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,uS="gl_FragColor = linearToOutputTexel( gl_FragColor );",dS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,fS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,pS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,mS=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,gS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,vS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,_S=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,yS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,bS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,xS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,SS=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,MS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ES=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,wS=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,TS=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,AS=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,CS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,RS=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,PS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,LS=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,IS=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,DS=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,OS=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,FS=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,NS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,US=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,BS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,HS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,zS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,VS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,GS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,WS=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,XS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,qS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,YS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,jS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ZS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$S=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,KS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,JS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,QS=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,eM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,iM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,nM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,rM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,sM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,oM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,aM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,lM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,cM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,hM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,uM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,fM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,pM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,mM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,gM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,vM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,_M=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,yM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,bM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,xM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,SM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,MM=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,EM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,wM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,TM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,AM=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,CM=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,RM=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,PM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,LM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,IM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,DM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,OM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,FM=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,NM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,UM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,BM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,HM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,zM=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,VM=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,GM=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,WM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,XM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qM=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,YM=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,jM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,ZM=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$M=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,KM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,JM=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,QM=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,tE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,iE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,nE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,sE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,oE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,aE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,cE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,hE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,uE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,dE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,fE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,We={alphahash_fragment:Fx,alphahash_pars_fragment:Nx,alphamap_fragment:Ux,alphamap_pars_fragment:Bx,alphatest_fragment:kx,alphatest_pars_fragment:Hx,aomap_fragment:zx,aomap_pars_fragment:Vx,batching_pars_vertex:Gx,batching_vertex:Wx,begin_vertex:Xx,beginnormal_vertex:qx,bsdfs:Yx,iridescence_fragment:jx,bumpmap_pars_fragment:Zx,clipping_planes_fragment:$x,clipping_planes_pars_fragment:Kx,clipping_planes_pars_vertex:Jx,clipping_planes_vertex:Qx,color_fragment:eS,color_pars_fragment:tS,color_pars_vertex:iS,color_vertex:nS,common:rS,cube_uv_reflection_fragment:sS,defaultnormal_vertex:oS,displacementmap_pars_vertex:aS,displacementmap_vertex:lS,emissivemap_fragment:cS,emissivemap_pars_fragment:hS,colorspace_fragment:uS,colorspace_pars_fragment:dS,envmap_fragment:fS,envmap_common_pars_fragment:pS,envmap_pars_fragment:mS,envmap_pars_vertex:gS,envmap_physical_pars_fragment:AS,envmap_vertex:vS,fog_vertex:_S,fog_pars_vertex:yS,fog_fragment:bS,fog_pars_fragment:xS,gradientmap_pars_fragment:SS,lightmap_pars_fragment:MS,lights_lambert_fragment:ES,lights_lambert_pars_fragment:wS,lights_pars_begin:TS,lights_toon_fragment:CS,lights_toon_pars_fragment:RS,lights_phong_fragment:PS,lights_phong_pars_fragment:LS,lights_physical_fragment:IS,lights_physical_pars_fragment:DS,lights_fragment_begin:OS,lights_fragment_maps:FS,lights_fragment_end:NS,logdepthbuf_fragment:US,logdepthbuf_pars_fragment:BS,logdepthbuf_pars_vertex:kS,logdepthbuf_vertex:HS,map_fragment:zS,map_pars_fragment:VS,map_particle_fragment:GS,map_particle_pars_fragment:WS,metalnessmap_fragment:XS,metalnessmap_pars_fragment:qS,morphinstance_vertex:YS,morphcolor_vertex:jS,morphnormal_vertex:ZS,morphtarget_pars_vertex:$S,morphtarget_vertex:KS,normal_fragment_begin:JS,normal_fragment_maps:QS,normal_pars_fragment:eM,normal_pars_vertex:tM,normal_vertex:iM,normalmap_pars_fragment:nM,clearcoat_normal_fragment_begin:rM,clearcoat_normal_fragment_maps:sM,clearcoat_pars_fragment:oM,iridescence_pars_fragment:aM,opaque_fragment:lM,packing:cM,premultiplied_alpha_fragment:hM,project_vertex:uM,dithering_fragment:dM,dithering_pars_fragment:fM,roughnessmap_fragment:pM,roughnessmap_pars_fragment:mM,shadowmap_pars_fragment:gM,shadowmap_pars_vertex:vM,shadowmap_vertex:_M,shadowmask_pars_fragment:yM,skinbase_vertex:bM,skinning_pars_vertex:xM,skinning_vertex:SM,skinnormal_vertex:MM,specularmap_fragment:EM,specularmap_pars_fragment:wM,tonemapping_fragment:TM,tonemapping_pars_fragment:AM,transmission_fragment:CM,transmission_pars_fragment:RM,uv_pars_fragment:PM,uv_pars_vertex:LM,uv_vertex:IM,worldpos_vertex:DM,background_vert:OM,background_frag:FM,backgroundCube_vert:NM,backgroundCube_frag:UM,cube_vert:BM,cube_frag:kM,depth_vert:HM,depth_frag:zM,distanceRGBA_vert:VM,distanceRGBA_frag:GM,equirect_vert:WM,equirect_frag:XM,linedashed_vert:qM,linedashed_frag:YM,meshbasic_vert:jM,meshbasic_frag:ZM,meshlambert_vert:$M,meshlambert_frag:KM,meshmatcap_vert:JM,meshmatcap_frag:QM,meshnormal_vert:eE,meshnormal_frag:tE,meshphong_vert:iE,meshphong_frag:nE,meshphysical_vert:rE,meshphysical_frag:sE,meshtoon_vert:oE,meshtoon_frag:aE,points_vert:lE,points_frag:cE,shadow_vert:hE,shadow_frag:uE,sprite_vert:dE,sprite_frag:fE},_e={common:{diffuse:{value:new $e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ke}},envmap:{envMap:{value:null},envMapRotation:{value:new ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ke},normalScale:{value:new ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new $e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0},uvTransform:{value:new ke}},sprite:{diffuse:{value:new $e(16777215)},opacity:{value:1},center:{value:new ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}}},sn={basic:{uniforms:Wt([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.fog]),vertexShader:We.meshbasic_vert,fragmentShader:We.meshbasic_frag},lambert:{uniforms:Wt([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new $e(0)}}]),vertexShader:We.meshlambert_vert,fragmentShader:We.meshlambert_frag},phong:{uniforms:Wt([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new $e(0)},specular:{value:new $e(1118481)},shininess:{value:30}}]),vertexShader:We.meshphong_vert,fragmentShader:We.meshphong_frag},standard:{uniforms:Wt([_e.common,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.roughnessmap,_e.metalnessmap,_e.fog,_e.lights,{emissive:{value:new $e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag},toon:{uniforms:Wt([_e.common,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.gradientmap,_e.fog,_e.lights,{emissive:{value:new $e(0)}}]),vertexShader:We.meshtoon_vert,fragmentShader:We.meshtoon_frag},matcap:{uniforms:Wt([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,{matcap:{value:null}}]),vertexShader:We.meshmatcap_vert,fragmentShader:We.meshmatcap_frag},points:{uniforms:Wt([_e.points,_e.fog]),vertexShader:We.points_vert,fragmentShader:We.points_frag},dashed:{uniforms:Wt([_e.common,_e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:We.linedashed_vert,fragmentShader:We.linedashed_frag},depth:{uniforms:Wt([_e.common,_e.displacementmap]),vertexShader:We.depth_vert,fragmentShader:We.depth_frag},normal:{uniforms:Wt([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,{opacity:{value:1}}]),vertexShader:We.meshnormal_vert,fragmentShader:We.meshnormal_frag},sprite:{uniforms:Wt([_e.sprite,_e.fog]),vertexShader:We.sprite_vert,fragmentShader:We.sprite_frag},background:{uniforms:{uvTransform:{value:new ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:We.background_vert,fragmentShader:We.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ke}},vertexShader:We.backgroundCube_vert,fragmentShader:We.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:We.cube_vert,fragmentShader:We.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:We.equirect_vert,fragmentShader:We.equirect_frag},distanceRGBA:{uniforms:Wt([_e.common,_e.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:We.distanceRGBA_vert,fragmentShader:We.distanceRGBA_frag},shadow:{uniforms:Wt([_e.lights,_e.fog,{color:{value:new $e(0)},opacity:{value:1}}]),vertexShader:We.shadow_vert,fragmentShader:We.shadow_frag}};sn.physical={uniforms:Wt([sn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ke},clearcoatNormalScale:{value:new ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ke},sheen:{value:0},sheenColor:{value:new $e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ke},transmissionSamplerSize:{value:new ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ke},attenuationDistance:{value:0},attenuationColor:{value:new $e(0)},specularColor:{value:new $e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ke},anisotropyVector:{value:new ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ke}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag};nh={r:0,b:0,g:0},Wr=new Qi,pE=new At;Qs=4,fv=[.125,.215,.35,.446,.526,.582],eo=20,Ud=new cc,pv=new $e,Bd=null,kd=0,Hd=0,zd=!1,qr=(1+Math.sqrt(5))/2,Js=1/qr,mv=[new G(-qr,Js,0),new G(qr,Js,0),new G(-Js,0,qr),new G(Js,0,qr),new G(0,qr,-Js),new G(0,qr,Js),new G(-1,1,-1),new G(1,1,-1),new G(-1,1,1),new G(1,1,1)],xE=new G,oh=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,n=100,s={}){let{size:o=256,position:a=xE}=s;Bd=this._renderer.getRenderTarget(),kd=this._renderer.getActiveCubeFace(),Hd=this._renderer.getActiveMipmapLevel(),zd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,n,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_v(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=vv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Bd,kd,Hd),this._renderer.xr.enabled=zd,e.scissorTest=!1,rh(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===zr||e.mapping===Vr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Bd=this._renderer.getRenderTarget(),kd=this._renderer.getActiveCubeFace(),Hd=this._renderer.getActiveMipmapLevel(),zd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Ut,minFilter:Ut,generateMipmaps:!1,type:js,format:Fi,colorSpace:Ur,depthBuffer:!1},n=gv(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=gv(e,t,i);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=SE(s)),this._blurMaterial=ME(s,e,t)}return n}_compileMaterial(e){let t=new hi(this._lodPlanes[0],e);this._renderer.compile(t,Ud)}_sceneToCubeUV(e,t,i,n,s){let l=new Gt(90,1,t,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(pv),u.toneMapping=An,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(n),u.clearDepth(),u.setRenderTarget(null));let g=new Jn({name:"PMREM.Background",side:ti,depthWrite:!1,depthTest:!1}),m=new hi(new Ws,g),p=!1,M=e.background;M?M.isColor&&(g.color.copy(M),e.background=null,p=!0):(g.color.copy(pv),p=!0);for(let b=0;b<6;b++){let S=b%3;S===0?(l.up.set(0,c[b],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[b],s.y,s.z)):S===1?(l.up.set(0,0,c[b]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[b],s.z)):(l.up.set(0,c[b],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[b]));let T=this._cubeSize;rh(n,S*T,b>2?T:0,T,T),u.setRenderTarget(n),p&&u.render(m,l),u.render(e,l)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=M}_textureToCubeUV(e,t){let i=this._renderer,n=e.mapping===zr||e.mapping===Vr;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=_v()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=vv());let s=n?this._cubemapMaterial:this._equirectMaterial,o=new hi(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;let l=this._cubeSize;rh(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Ud)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let n=this._lodPlanes.length;for(let s=1;s<n;s++){let o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=mv[(n-s-1)%mv.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,n,s){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,n,"latitudinal",s),this._halfBlur(o,e,i,i,n,"longitudinal",s)}_halfBlur(e,t,i,n,s,o,a){let l=this._renderer,c=this._blurMaterial,h=3,u=new hi(this._lodPlanes[n],c),d=c.uniforms,f=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*eo-1),g=s/_,m=isFinite(s)?1+Math.floor(h*g):eo;m>eo;let p=[],M=0;for(let P=0;P<eo;++P){let I=P/g,x=Math.exp(-I*I/2);p.push(x),P===0?M+=x:P<m&&(M+=2*x)}for(let P=0;P<p.length;P++)p[P]=p[P]/M;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:b}=this;d.dTheta.value=_,d.mipInt.value=b-i;let S=this._sizeLods[n],T=3*S*(n>b-Qs?n-b+Qs:0),C=4*(this._cubeSize-S);rh(t,T,C,3*S,2*S),l.setRenderTarget(t),l.render(u,Ud)}};Uv=new ei,yv=new aa(1,1),Bv=new Jo,kv=new jl,Hv=new na,bv=[],xv=[],Sv=new Float32Array(16),Mv=new Float32Array(9),Ev=new Float32Array(4);Gd=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=$E(t.type)}},Wd=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=gw(t.type)}},Xd=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let n=this.seq;for(let s=0,o=n.length;s!==o;++s){let a=n[s];a.setValue(e,t[a.id],i)}}},Vd=/(\w+)(\])?(\[|\.)?/g;to=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){let s=e.getActiveUniform(t,n),o=e.getUniformLocation(t,s.name);vw(s,o,this)}}setValue(e,t,i,n){let s=this.map[t];s!==void 0&&s.setValue(e,i,n)}setOptional(e,t,i){let n=t[i];n!==void 0&&this.setValue(e,i,n)}static upload(e,t,i,n){for(let s=0,o=t.length;s!==o;++s){let a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,n)}}static seqWithValue(e,t){let i=[];for(let n=0,s=e.length;n!==s;++n){let o=e[n];o.id in t&&i.push(o)}return i}};_w=37297,yw=0;Av=new ke;sh=new G;Cw=/^[ \t]*#include +<([\w\d./]+)>/gm;Rw=new Map;Lw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;kw=0,Yd=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,n=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(n)===!1&&(o.add(n),n.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new jd(e),t.set(e,i)),i}},jd=class{constructor(e){this.id=kw++,this.code=e,this.usedTimes=0}};qw=0;$w=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Kw=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;Qw={[dc]:fc,[pc]:vc,[mc]:_c,[Nr]:gc,[fc]:dc,[vc]:pc,[_c]:mc,[gc]:Nr};nT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,rT=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Zd=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new la(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new zi({vertexShader:nT,fragmentShader:rT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new hi(new kr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},$d=class extends Ki{constructor(e,t){super();let i=this,n=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,_=null,g=typeof XRWebGLBinding!="undefined",m=new Zd,p={},M=t.getContextAttributes(),b=null,S=null,T=[],C=[],P=new ze,I=null,x=new Gt;x.viewport=new xt;let E=new Gt;E.viewport=new xt;let O=[x,E],H=new hc,W=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let ce=T[ee];return ce===void 0&&(ce=new Xs,T[ee]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function(ee){let ce=T[ee];return ce===void 0&&(ce=new Xs,T[ee]=ce),ce.getGripSpace()},this.getHand=function(ee){let ce=T[ee];return ce===void 0&&(ce=new Xs,T[ee]=ce),ce.getHandSpace()};function K(ee){let ce=C.indexOf(ee.inputSource);if(ce===-1)return;let Ee=T[ce];Ee!==void 0&&(Ee.update(ee.inputSource,ee.frame,c||o),Ee.dispatchEvent({type:ee.type,data:ee.inputSource}))}function q(){n.removeEventListener("select",K),n.removeEventListener("selectstart",K),n.removeEventListener("selectend",K),n.removeEventListener("squeeze",K),n.removeEventListener("squeezestart",K),n.removeEventListener("squeezeend",K),n.removeEventListener("end",q),n.removeEventListener("inputsourceschange",oe);for(let ee=0;ee<T.length;ee++){let ce=C[ee];ce!==null&&(C[ee]=null,T[ee].disconnect(ce))}W=null,$=null,m.reset();for(let ee in p)delete p[ee];e.setRenderTarget(b),f=null,d=null,u=null,n=null,S=null,Ve.stop(),i.isPresenting=!1,e.setPixelRatio(I),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){s=ee,i.isPresenting},this.setReferenceSpaceType=function(ee){a=ee,i.isPresenting},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ee){c=ee},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&g&&(u=new XRWebGLBinding(n,t)),u},this.getFrame=function(){return _},this.getSession=function(){return n},this.setSession=async function(ee){if(n=ee,n!==null){if(b=e.getRenderTarget(),n.addEventListener("select",K),n.addEventListener("selectstart",K),n.addEventListener("selectend",K),n.addEventListener("squeeze",K),n.addEventListener("squeezestart",K),n.addEventListener("squeezeend",K),n.addEventListener("end",q),n.addEventListener("inputsourceschange",oe),M.xrCompatible!==!0&&await t.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(P),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ee=null,Ue=null,Re=null;M.depth&&(Re=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ee=M.stencil?$s:Us,Ue=M.stencil?Zs:nr);let qe={colorFormat:t.RGBA8,depthFormat:Re,scaleFactor:s};u=this.getBinding(),d=u.createProjectionLayer(qe),n.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),S=new Ji(d.textureWidth,d.textureHeight,{format:Fi,type:nn,depthTexture:new aa(d.textureWidth,d.textureHeight,Ue,void 0,void 0,void 0,void 0,void 0,void 0,Ee),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let Ee={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(n,t,Ee),n.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),S=new Ji(f.framebufferWidth,f.framebufferHeight,{format:Fi,type:nn,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await n.requestReferenceSpace(a),Ve.setContext(n),Ve.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function oe(ee){for(let ce=0;ce<ee.removed.length;ce++){let Ee=ee.removed[ce],Ue=C.indexOf(Ee);Ue>=0&&(C[Ue]=null,T[Ue].disconnect(Ee))}for(let ce=0;ce<ee.added.length;ce++){let Ee=ee.added[ce],Ue=C.indexOf(Ee);if(Ue===-1){for(let qe=0;qe<T.length;qe++)if(qe>=C.length){C.push(Ee),Ue=qe;break}else if(C[qe]===null){C[qe]=Ee,Ue=qe;break}if(Ue===-1)break}let Re=T[Ue];Re&&Re.connect(Ee)}}let X=new G,fe=new G;function ye(ee,ce,Ee){X.setFromMatrixPosition(ce.matrixWorld),fe.setFromMatrixPosition(Ee.matrixWorld);let Ue=X.distanceTo(fe),Re=ce.projectionMatrix.elements,qe=Ee.projectionMatrix.elements,Lt=Re[14]/(Re[10]-1),D=Re[14]/(Re[10]+1),ot=(Re[9]+1)/Re[5],Fe=(Re[9]-1)/Re[5],De=(Re[8]-1)/Re[0],Te=(qe[8]+1)/qe[0],at=Lt*De,Ae=Lt*Te,U=Ue/(-De+Te),F=U*-De;if(ce.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(F),ee.translateZ(U),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert(),Re[10]===-1)ee.projectionMatrix.copy(ce.projectionMatrix),ee.projectionMatrixInverse.copy(ce.projectionMatrixInverse);else{let w=Lt+U,v=D+U,y=at-F,R=Ae+(Ue-F),N=ot*D/v*w,k=Fe*D/v*w;ee.projectionMatrix.makePerspective(y,R,N,k,w,v),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}}function we(ee,ce){ce===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(ce.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(n===null)return;let ce=ee.near,Ee=ee.far;m.texture!==null&&(m.depthNear>0&&(ce=m.depthNear),m.depthFar>0&&(Ee=m.depthFar)),H.near=E.near=x.near=ce,H.far=E.far=x.far=Ee,(W!==H.near||$!==H.far)&&(n.updateRenderState({depthNear:H.near,depthFar:H.far}),W=H.near,$=H.far),H.layers.mask=ee.layers.mask|6,x.layers.mask=H.layers.mask&3,E.layers.mask=H.layers.mask&5;let Ue=ee.parent,Re=H.cameras;we(H,Ue);for(let qe=0;qe<Re.length;qe++)we(Re[qe],Ue);Re.length===2?ye(H,x,E):H.projectionMatrix.copy(x.projectionMatrix),Ne(ee,H,Ue)};function Ne(ee,ce,Ee){Ee===null?ee.matrix.copy(ce.matrixWorld):(ee.matrix.copy(Ee.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(ce.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(ce.projectionMatrix),ee.projectionMatrixInverse.copy(ce.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=Bs*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(ee){l=ee,d!==null&&(d.fixedFoveation=ee),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=ee)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(H)},this.getCameraTexture=function(ee){return p[ee]};let Qe=null;function Xe(ee,ce){if(h=ce.getViewerPose(c||o),_=ce,h!==null){let Ee=h.views;f!==null&&(e.setRenderTargetFramebuffer(S,f.framebuffer),e.setRenderTarget(S));let Ue=!1;Ee.length!==H.cameras.length&&(H.cameras.length=0,Ue=!0);for(let D=0;D<Ee.length;D++){let ot=Ee[D],Fe=null;if(f!==null)Fe=f.getViewport(ot);else{let Te=u.getViewSubImage(d,ot);Fe=Te.viewport,D===0&&(e.setRenderTargetTextures(S,Te.colorTexture,Te.depthStencilTexture),e.setRenderTarget(S))}let De=O[D];De===void 0&&(De=new Gt,De.layers.enable(D),De.viewport=new xt,O[D]=De),De.matrix.fromArray(ot.transform.matrix),De.matrix.decompose(De.position,De.quaternion,De.scale),De.projectionMatrix.fromArray(ot.projectionMatrix),De.projectionMatrixInverse.copy(De.projectionMatrix).invert(),De.viewport.set(Fe.x,Fe.y,Fe.width,Fe.height),D===0&&(H.matrix.copy(De.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),Ue===!0&&H.cameras.push(De)}let Re=n.enabledFeatures;if(Re&&Re.includes("depth-sensing")&&n.depthUsage=="gpu-optimized"&&g){u=i.getBinding();let D=u.getDepthInformation(Ee[0]);D&&D.isValid&&D.texture&&m.init(D,n.renderState)}if(Re&&Re.includes("camera-access")&&g){e.state.unbindTexture(),u=i.getBinding();for(let D=0;D<Ee.length;D++){let ot=Ee[D].camera;if(ot){let Fe=p[ot];Fe||(Fe=new la,p[ot]=Fe);let De=u.getCameraImage(ot);Fe.sourceTexture=De}}}}for(let Ee=0;Ee<T.length;Ee++){let Ue=C[Ee],Re=T[Ee];Ue!==null&&Re!==void 0&&Re.update(Ue,ce,c||o)}Qe&&Qe(ee,ce),ce.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ce}),_=null}let Ve=new Nv;Ve.setAnimationLoop(Xe),this.setAnimationLoop=function(ee){Qe=ee},this.dispose=function(){}}},Xr=new Qi,sT=new At;ah=class{constructor(e={}){let{canvas:t=lv(),context:i=null,depth:n=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext!="undefined"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;let _=new Uint32Array(4),g=new Int32Array(4),m=null,p=null,M=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=An,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let S=this,T=!1;this._outputColorSpace=Nt;let C=0,P=0,I=null,x=-1,E=null,O=new xt,H=new xt,W=null,$=new $e(0),K=0,q=t.width,oe=t.height,X=1,fe=null,ye=null,we=new xt(0,0,q,oe),Ne=new xt(0,0,q,oe),Qe=!1,Xe=new sa,Ve=!1,ee=!1,ce=new At,Ee=new G,Ue=new xt,Re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},qe=!1;function Lt(){return I===null?X:1}let D=i;function ot(A,z){return t.getContext(A,z)}try{let A={alpha:!0,depth:n,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${uc}`),t.addEventListener("webglcontextlost",de,!1),t.addEventListener("webglcontextrestored",ge,!1),t.addEventListener("webglcontextcreationerror",re,!1),D===null){let z="webgl2";if(D=ot(z,A),D===null)throw ot(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw A}let Fe,De,Te,at,Ae,U,F,w,v,y,R,N,k,L,Q,ne,he,ie,te,se,pe,me,le,Pe;function B(){Fe=new wE(D),Fe.init(),me=new iT(D,Fe),De=new _E(D,Fe,e,me),Te=new eT(D,Fe),De.reversedDepthBuffer&&d&&Te.buffers.depth.setReversed(!0),at=new CE(D),Ae=new zw,U=new tT(D,Fe,Te,Ae,De,me,at),F=new bE(S),w=new EE(S),v=new Ox(D),le=new gE(D,v),y=new TE(D,v,at,le),R=new PE(D,y,v,at),te=new RE(D,De,U),ne=new yE(Ae),N=new Hw(S,F,w,Fe,De,le,ne),k=new oT(S,Ae),L=new Gw,Q=new Zw(Fe),ie=new mE(S,F,w,Te,R,f,l),he=new Jw(S,R,De),Pe=new aT(D,at,De,Te),se=new vE(D,Fe,at),pe=new AE(D,Fe,at),at.programs=N.programs,S.capabilities=De,S.extensions=Fe,S.properties=Ae,S.renderLists=L,S.shadowMap=he,S.state=Te,S.info=at}B();let ae=new $d(S,D);this.xr=ae,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let A=Fe.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=Fe.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(A){A!==void 0&&(X=A,this.setSize(q,oe,!1))},this.getSize=function(A){return A.set(q,oe)},this.setSize=function(A,z,Y=!0){ae.isPresenting||(q=A,oe=z,t.width=Math.floor(A*X),t.height=Math.floor(z*X),Y===!0&&(t.style.width=A+"px",t.style.height=z+"px"),this.setViewport(0,0,A,z))},this.getDrawingBufferSize=function(A){return A.set(q*X,oe*X).floor()},this.setDrawingBufferSize=function(A,z,Y){q=A,oe=z,X=Y,t.width=Math.floor(A*Y),t.height=Math.floor(z*Y),this.setViewport(0,0,A,z)},this.getCurrentViewport=function(A){return A.copy(O)},this.getViewport=function(A){return A.copy(we)},this.setViewport=function(A,z,Y,Z){A.isVector4?we.set(A.x,A.y,A.z,A.w):we.set(A,z,Y,Z),Te.viewport(O.copy(we).multiplyScalar(X).round())},this.getScissor=function(A){return A.copy(Ne)},this.setScissor=function(A,z,Y,Z){A.isVector4?Ne.set(A.x,A.y,A.z,A.w):Ne.set(A,z,Y,Z),Te.scissor(H.copy(Ne).multiplyScalar(X).round())},this.getScissorTest=function(){return Qe},this.setScissorTest=function(A){Te.setScissorTest(Qe=A)},this.setOpaqueSort=function(A){fe=A},this.setTransparentSort=function(A){ye=A},this.getClearColor=function(A){return A.copy(ie.getClearColor())},this.setClearColor=function(){ie.setClearColor(...arguments)},this.getClearAlpha=function(){return ie.getClearAlpha()},this.setClearAlpha=function(){ie.setClearAlpha(...arguments)},this.clear=function(A=!0,z=!0,Y=!0){let Z=0;if(A){let V=!1;if(I!==null){let ue=I.texture.format;V=ue===Ac||ue===Tc||ue===wc}if(V){let ue=I.texture.type,xe=ue===nn||ue===nr||ue===Ys||ue===Zs||ue===Mc||ue===Ec,Ce=ie.getClearColor(),Se=ie.getClearAlpha(),Oe=Ce.r,Be=Ce.g,Le=Ce.b;xe?(_[0]=Oe,_[1]=Be,_[2]=Le,_[3]=Se,D.clearBufferuiv(D.COLOR,0,_)):(g[0]=Oe,g[1]=Be,g[2]=Le,g[3]=Se,D.clearBufferiv(D.COLOR,0,g))}else Z|=D.COLOR_BUFFER_BIT}z&&(Z|=D.DEPTH_BUFFER_BIT),Y&&(Z|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",de,!1),t.removeEventListener("webglcontextrestored",ge,!1),t.removeEventListener("webglcontextcreationerror",re,!1),ie.dispose(),L.dispose(),Q.dispose(),Ae.dispose(),F.dispose(),w.dispose(),R.dispose(),le.dispose(),Pe.dispose(),N.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",He),ae.removeEventListener("sessionend",Xt),ui.stop()};function de(A){A.preventDefault(),T=!0}function ge(){T=!1;let A=at.autoReset,z=he.enabled,Y=he.autoUpdate,Z=he.needsUpdate,V=he.type;B(),at.autoReset=A,he.enabled=z,he.autoUpdate=Y,he.needsUpdate=Z,he.type=V}function re(A){}function J(A){let z=A.target;z.removeEventListener("dispose",J),be(z)}function be(A){ve(A),Ae.remove(A)}function ve(A){let z=Ae.get(A).programs;z!==void 0&&(z.forEach(function(Y){N.releaseProgram(Y)}),A.isShaderMaterial&&N.releaseShaderCache(A))}this.renderBufferDirect=function(A,z,Y,Z,V,ue){z===null&&(z=Re);let xe=V.isMesh&&V.matrixWorld.determinant()<0,Ce=f0(A,z,Y,Z,V);Te.setMaterial(Z,xe);let Se=Y.index,Oe=1;if(Z.wireframe===!0){if(Se=y.getWireframeAttribute(Y),Se===void 0)return;Oe=2}let Be=Y.drawRange,Le=Y.attributes.position,Ye=Be.start*Oe,it=(Be.start+Be.count)*Oe;ue!==null&&(Ye=Math.max(Ye,ue.start*Oe),it=Math.min(it,(ue.start+ue.count)*Oe)),Se!==null?(Ye=Math.max(Ye,0),it=Math.min(it,Se.count)):Le!=null&&(Ye=Math.max(Ye,0),it=Math.min(it,Le.count));let _t=it-Ye;if(_t<0||_t===1/0)return;le.setup(V,Z,Ce,Y,Se);let ut,rt=se;if(Se!==null&&(ut=v.get(Se),rt=pe,rt.setIndex(ut)),V.isMesh)Z.wireframe===!0?(Te.setLineWidth(Z.wireframeLinewidth*Lt()),rt.setMode(D.LINES)):rt.setMode(D.TRIANGLES);else if(V.isLine){let Ie=Z.linewidth;Ie===void 0&&(Ie=1),Te.setLineWidth(Ie*Lt()),V.isLineSegments?rt.setMode(D.LINES):V.isLineLoop?rt.setMode(D.LINE_LOOP):rt.setMode(D.LINE_STRIP)}else V.isPoints?rt.setMode(D.POINTS):V.isSprite&&rt.setMode(D.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)Hs("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),rt.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(Fe.get("WEBGL_multi_draw"))rt.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{let Ie=V._multiDrawStarts,pt=V._multiDrawCounts,Je=V._multiDrawCount,di=Se?v.get(Se).bytesPerElement:1,Kr=Ae.get(Z).currentProgram.getUniforms();for(let fi=0;fi<Je;fi++)Kr.setValue(D,"_gl_DrawID",fi),rt.render(Ie[fi]/di,pt[fi])}else if(V.isInstancedMesh)rt.renderInstances(Ye,_t,V.count);else if(Y.isInstancedBufferGeometry){let Ie=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,pt=Math.min(Y.instanceCount,Ie);rt.renderInstances(Ye,_t,pt)}else rt.render(Ye,_t)};function Ge(A,z,Y){A.transparent===!0&&A.side===Si&&A.forceSinglePass===!1?(A.side=ti,A.needsUpdate=!0,Ta(A,z,Y),A.side=wn,A.needsUpdate=!0,Ta(A,z,Y),A.side=Si):Ta(A,z,Y)}this.compile=function(A,z,Y=null){Y===null&&(Y=A),p=Q.get(Y),p.init(z),b.push(p),Y.traverseVisible(function(V){V.isLight&&V.layers.test(z.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),A!==Y&&A.traverseVisible(function(V){V.isLight&&V.layers.test(z.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),p.setupLights();let Z=new Set;return A.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;let ue=V.material;if(ue)if(Array.isArray(ue))for(let xe=0;xe<ue.length;xe++){let Ce=ue[xe];Ge(Ce,Y,V),Z.add(Ce)}else Ge(ue,Y,V),Z.add(ue)}),p=b.pop(),Z},this.compileAsync=function(A,z,Y=null){let Z=this.compile(A,z,Y);return new Promise(V=>{function ue(){if(Z.forEach(function(xe){Ae.get(xe).currentProgram.isReady()&&Z.delete(xe)}),Z.size===0){V(A);return}setTimeout(ue,10)}Fe.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let Me=null;function nt(A){Me&&Me(A)}function He(){ui.stop()}function Xt(){ui.start()}let ui=new Nv;ui.setAnimationLoop(nt),typeof self!="undefined"&&ui.setContext(self),this.setAnimationLoop=function(A){Me=A,ae.setAnimationLoop(A),A===null?ui.stop():ui.start()},ae.addEventListener("sessionstart",He),ae.addEventListener("sessionend",Xt),this.render=function(A,z){if(z!==void 0&&z.isCamera!==!0||T===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(ae.cameraAutoUpdate===!0&&ae.updateCamera(z),z=ae.getCamera()),A.isScene===!0&&A.onBeforeRender(S,A,z,I),p=Q.get(A,b.length),p.init(z),b.push(p),ce.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),Xe.setFromProjectionMatrix(ce,Hi,z.reversedDepth),ee=this.localClippingEnabled,Ve=ne.init(this.clippingPlanes,ee),m=L.get(A,M.length),m.init(),M.push(m),ae.enabled===!0&&ae.isPresenting===!0){let ue=S.xr.getDepthSensingMesh();ue!==null&&Rn(ue,z,-1/0,S.sortObjects)}Rn(A,z,0,S.sortObjects),m.finish(),S.sortObjects===!0&&m.sort(fe,ye),qe=ae.enabled===!1||ae.isPresenting===!1||ae.hasDepthSensing()===!1,qe&&ie.addToRenderList(m,A),this.info.render.frame++,Ve===!0&&ne.beginShadows();let Y=p.state.shadowsArray;he.render(Y,A,z),Ve===!0&&ne.endShadows(),this.info.autoReset===!0&&this.info.reset();let Z=m.opaque,V=m.transmissive;if(p.setupLights(),z.isArrayCamera){let ue=z.cameras;if(V.length>0)for(let xe=0,Ce=ue.length;xe<Ce;xe++){let Se=ue[xe];Et(Z,V,A,Se)}qe&&ie.render(A);for(let xe=0,Ce=ue.length;xe<Ce;xe++){let Se=ue[xe];$r(m,A,Se,Se.viewport)}}else V.length>0&&Et(Z,V,A,z),qe&&ie.render(A),$r(m,A,z);I!==null&&P===0&&(U.updateMultisampleRenderTarget(I),U.updateRenderTargetMipmap(I)),A.isScene===!0&&A.onAfterRender(S,A,z),le.resetDefaultState(),x=-1,E=null,b.pop(),b.length>0?(p=b[b.length-1],Ve===!0&&ne.setGlobalState(S.clippingPlanes,p.state.camera)):p=null,M.pop(),M.length>0?m=M[M.length-1]:m=null};function Rn(A,z,Y,Z){if(A.visible===!1)return;if(A.layers.test(z.layers)){if(A.isGroup)Y=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(z);else if(A.isLight)p.pushLight(A),A.castShadow&&p.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Xe.intersectsSprite(A)){Z&&Ue.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ce);let xe=R.update(A),Ce=A.material;Ce.visible&&m.push(A,xe,Ce,Y,Ue.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Xe.intersectsObject(A))){let xe=R.update(A),Ce=A.material;if(Z&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ue.copy(A.boundingSphere.center)):(xe.boundingSphere===null&&xe.computeBoundingSphere(),Ue.copy(xe.boundingSphere.center)),Ue.applyMatrix4(A.matrixWorld).applyMatrix4(ce)),Array.isArray(Ce)){let Se=xe.groups;for(let Oe=0,Be=Se.length;Oe<Be;Oe++){let Le=Se[Oe],Ye=Ce[Le.materialIndex];Ye&&Ye.visible&&m.push(A,xe,Ye,Y,Ue.z,Le)}}else Ce.visible&&m.push(A,xe,Ce,Y,Ue.z,null)}}let ue=A.children;for(let xe=0,Ce=ue.length;xe<Ce;xe++)Rn(ue[xe],z,Y,Z)}function $r(A,z,Y,Z){let V=A.opaque,ue=A.transmissive,xe=A.transparent;p.setupLightsView(Y),Ve===!0&&ne.setGlobalState(S.clippingPlanes,Y),Z&&Te.viewport(O.copy(Z)),V.length>0&&Mi(V,z,Y),ue.length>0&&Mi(ue,z,Y),xe.length>0&&Mi(xe,z,Y),Te.buffers.depth.setTest(!0),Te.buffers.depth.setMask(!0),Te.buffers.color.setMask(!0),Te.setPolygonOffset(!1)}function Et(A,z,Y,Z){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[Z.id]===void 0&&(p.state.transmissionRenderTarget[Z.id]=new Ji(1,1,{generateMipmaps:!0,type:Fe.has("EXT_color_buffer_half_float")||Fe.has("EXT_color_buffer_float")?js:nn,minFilter:tn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ke.workingColorSpace}));let ue=p.state.transmissionRenderTarget[Z.id],xe=Z.viewport||O;ue.setSize(xe.z*S.transmissionResolutionScale,xe.w*S.transmissionResolutionScale);let Ce=S.getRenderTarget(),Se=S.getActiveCubeFace(),Oe=S.getActiveMipmapLevel();S.setRenderTarget(ue),S.getClearColor($),K=S.getClearAlpha(),K<1&&S.setClearColor(16777215,.5),S.clear(),qe&&ie.render(Y);let Be=S.toneMapping;S.toneMapping=An;let Le=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),p.setupLightsView(Z),Ve===!0&&ne.setGlobalState(S.clippingPlanes,Z),Mi(A,Y,Z),U.updateMultisampleRenderTarget(ue),U.updateRenderTargetMipmap(ue),Fe.has("WEBGL_multisampled_render_to_texture")===!1){let Ye=!1;for(let it=0,_t=z.length;it<_t;it++){let ut=z[it],rt=ut.object,Ie=ut.geometry,pt=ut.material,Je=ut.group;if(pt.side===Si&&rt.layers.test(Z.layers)){let di=pt.side;pt.side=ti,pt.needsUpdate=!0,uf(rt,Y,Z,Ie,pt,Je),pt.side=di,pt.needsUpdate=!0,Ye=!0}}Ye===!0&&(U.updateMultisampleRenderTarget(ue),U.updateRenderTargetMipmap(ue))}S.setRenderTarget(Ce,Se,Oe),S.setClearColor($,K),Le!==void 0&&(Z.viewport=Le),S.toneMapping=Be}function Mi(A,z,Y){let Z=z.isScene===!0?z.overrideMaterial:null;for(let V=0,ue=A.length;V<ue;V++){let xe=A[V],Ce=xe.object,Se=xe.geometry,Oe=xe.group,Be=xe.material;Be.allowOverride===!0&&Z!==null&&(Be=Z),Ce.layers.test(Y.layers)&&uf(Ce,z,Y,Se,Be,Oe)}}function uf(A,z,Y,Z,V,ue){A.onBeforeRender(S,z,Y,Z,V,ue),A.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),V.onBeforeRender(S,z,Y,Z,A,ue),V.transparent===!0&&V.side===Si&&V.forceSinglePass===!1?(V.side=ti,V.needsUpdate=!0,S.renderBufferDirect(Y,z,Z,V,A,ue),V.side=wn,V.needsUpdate=!0,S.renderBufferDirect(Y,z,Z,V,A,ue),V.side=Si):S.renderBufferDirect(Y,z,Z,V,A,ue),A.onAfterRender(S,z,Y,Z,V,ue)}function Ta(A,z,Y){z.isScene!==!0&&(z=Re);let Z=Ae.get(A),V=p.state.lights,ue=p.state.shadowsArray,xe=V.state.version,Ce=N.getParameters(A,V.state,ue,z,Y),Se=N.getProgramCacheKey(Ce),Oe=Z.programs;Z.environment=A.isMeshStandardMaterial?z.environment:null,Z.fog=z.fog,Z.envMap=(A.isMeshStandardMaterial?w:F).get(A.envMap||Z.environment),Z.envMapRotation=Z.environment!==null&&A.envMap===null?z.environmentRotation:A.envMapRotation,Oe===void 0&&(A.addEventListener("dispose",J),Oe=new Map,Z.programs=Oe);let Be=Oe.get(Se);if(Be!==void 0){if(Z.currentProgram===Be&&Z.lightsStateVersion===xe)return ff(A,Ce),Be}else Ce.uniforms=N.getUniforms(A),A.onBeforeCompile(Ce,S),Be=N.acquireProgram(Ce,Se),Oe.set(Se,Be),Z.uniforms=Ce.uniforms;let Le=Z.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Le.clippingPlanes=ne.uniform),ff(A,Ce),Z.needsLights=m0(A),Z.lightsStateVersion=xe,Z.needsLights&&(Le.ambientLightColor.value=V.state.ambient,Le.lightProbe.value=V.state.probe,Le.directionalLights.value=V.state.directional,Le.directionalLightShadows.value=V.state.directionalShadow,Le.spotLights.value=V.state.spot,Le.spotLightShadows.value=V.state.spotShadow,Le.rectAreaLights.value=V.state.rectArea,Le.ltc_1.value=V.state.rectAreaLTC1,Le.ltc_2.value=V.state.rectAreaLTC2,Le.pointLights.value=V.state.point,Le.pointLightShadows.value=V.state.pointShadow,Le.hemisphereLights.value=V.state.hemi,Le.directionalShadowMap.value=V.state.directionalShadowMap,Le.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Le.spotShadowMap.value=V.state.spotShadowMap,Le.spotLightMatrix.value=V.state.spotLightMatrix,Le.spotLightMap.value=V.state.spotLightMap,Le.pointShadowMap.value=V.state.pointShadowMap,Le.pointShadowMatrix.value=V.state.pointShadowMatrix),Z.currentProgram=Be,Z.uniformsList=null,Be}function df(A){if(A.uniformsList===null){let z=A.currentProgram.getUniforms();A.uniformsList=to.seqWithValue(z.seq,A.uniforms)}return A.uniformsList}function ff(A,z){let Y=Ae.get(A);Y.outputColorSpace=z.outputColorSpace,Y.batching=z.batching,Y.batchingColor=z.batchingColor,Y.instancing=z.instancing,Y.instancingColor=z.instancingColor,Y.instancingMorph=z.instancingMorph,Y.skinning=z.skinning,Y.morphTargets=z.morphTargets,Y.morphNormals=z.morphNormals,Y.morphColors=z.morphColors,Y.morphTargetsCount=z.morphTargetsCount,Y.numClippingPlanes=z.numClippingPlanes,Y.numIntersection=z.numClipIntersection,Y.vertexAlphas=z.vertexAlphas,Y.vertexTangents=z.vertexTangents,Y.toneMapping=z.toneMapping}function f0(A,z,Y,Z,V){z.isScene!==!0&&(z=Re),U.resetTextureUnits();let ue=z.fog,xe=Z.isMeshStandardMaterial?z.environment:null,Ce=I===null?S.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Ur,Se=(Z.isMeshStandardMaterial?w:F).get(Z.envMap||xe),Oe=Z.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Be=!!Y.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),Le=!!Y.morphAttributes.position,Ye=!!Y.morphAttributes.normal,it=!!Y.morphAttributes.color,_t=An;Z.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(_t=S.toneMapping);let ut=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,rt=ut!==void 0?ut.length:0,Ie=Ae.get(Z),pt=p.state.lights;if(Ve===!0&&(ee===!0||A!==E)){let qt=A===E&&Z.id===x;ne.setState(Z,A,qt)}let Je=!1;Z.version===Ie.__version?(Ie.needsLights&&Ie.lightsStateVersion!==pt.state.version||Ie.outputColorSpace!==Ce||V.isBatchedMesh&&Ie.batching===!1||!V.isBatchedMesh&&Ie.batching===!0||V.isBatchedMesh&&Ie.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&Ie.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&Ie.instancing===!1||!V.isInstancedMesh&&Ie.instancing===!0||V.isSkinnedMesh&&Ie.skinning===!1||!V.isSkinnedMesh&&Ie.skinning===!0||V.isInstancedMesh&&Ie.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Ie.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Ie.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Ie.instancingMorph===!1&&V.morphTexture!==null||Ie.envMap!==Se||Z.fog===!0&&Ie.fog!==ue||Ie.numClippingPlanes!==void 0&&(Ie.numClippingPlanes!==ne.numPlanes||Ie.numIntersection!==ne.numIntersection)||Ie.vertexAlphas!==Oe||Ie.vertexTangents!==Be||Ie.morphTargets!==Le||Ie.morphNormals!==Ye||Ie.morphColors!==it||Ie.toneMapping!==_t||Ie.morphTargetsCount!==rt)&&(Je=!0):(Je=!0,Ie.__version=Z.version);let di=Ie.currentProgram;Je===!0&&(di=Ta(Z,z,V));let Kr=!1,fi=!1,so=!1,mt=di.getUniforms(),Ei=Ie.uniforms;if(Te.useProgram(di.program)&&(Kr=!0,fi=!0,so=!0),Z.id!==x&&(x=Z.id,fi=!0),Kr||E!==A){Te.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),mt.setValue(D,"projectionMatrix",A.projectionMatrix),mt.setValue(D,"viewMatrix",A.matrixWorldInverse);let ii=mt.map.cameraPosition;ii!==void 0&&ii.setValue(D,Ee.setFromMatrixPosition(A.matrixWorld)),De.logarithmicDepthBuffer&&mt.setValue(D,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&mt.setValue(D,"isOrthographic",A.isOrthographicCamera===!0),E!==A&&(E=A,fi=!0,so=!0)}if(V.isSkinnedMesh){mt.setOptional(D,V,"bindMatrix"),mt.setOptional(D,V,"bindMatrixInverse");let qt=V.skeleton;qt&&(qt.boneTexture===null&&qt.computeBoneTexture(),mt.setValue(D,"boneTexture",qt.boneTexture,U))}V.isBatchedMesh&&(mt.setOptional(D,V,"batchingTexture"),mt.setValue(D,"batchingTexture",V._matricesTexture,U),mt.setOptional(D,V,"batchingIdTexture"),mt.setValue(D,"batchingIdTexture",V._indirectTexture,U),mt.setOptional(D,V,"batchingColorTexture"),V._colorsTexture!==null&&mt.setValue(D,"batchingColorTexture",V._colorsTexture,U));let wi=Y.morphAttributes;if((wi.position!==void 0||wi.normal!==void 0||wi.color!==void 0)&&te.update(V,Y,di),(fi||Ie.receiveShadow!==V.receiveShadow)&&(Ie.receiveShadow=V.receiveShadow,mt.setValue(D,"receiveShadow",V.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(Ei.envMap.value=Se,Ei.flipEnvMap.value=Se.isCubeTexture&&Se.isRenderTargetTexture===!1?-1:1),Z.isMeshStandardMaterial&&Z.envMap===null&&z.environment!==null&&(Ei.envMapIntensity.value=z.environmentIntensity),fi&&(mt.setValue(D,"toneMappingExposure",S.toneMappingExposure),Ie.needsLights&&p0(Ei,so),ue&&Z.fog===!0&&k.refreshFogUniforms(Ei,ue),k.refreshMaterialUniforms(Ei,Z,X,oe,p.state.transmissionRenderTarget[A.id]),to.upload(D,df(Ie),Ei,U)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(to.upload(D,df(Ie),Ei,U),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&mt.setValue(D,"center",V.center),mt.setValue(D,"modelViewMatrix",V.modelViewMatrix),mt.setValue(D,"normalMatrix",V.normalMatrix),mt.setValue(D,"modelMatrix",V.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){let qt=Z.uniformsGroups;for(let ii=0,yh=qt.length;ii<yh;ii++){let ar=qt[ii];Pe.update(ar,di),Pe.bind(ar,di)}}return di}function p0(A,z){A.ambientLightColor.needsUpdate=z,A.lightProbe.needsUpdate=z,A.directionalLights.needsUpdate=z,A.directionalLightShadows.needsUpdate=z,A.pointLights.needsUpdate=z,A.pointLightShadows.needsUpdate=z,A.spotLights.needsUpdate=z,A.spotLightShadows.needsUpdate=z,A.rectAreaLights.needsUpdate=z,A.hemisphereLights.needsUpdate=z}function m0(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(A,z,Y){let Z=Ae.get(A);Z.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,Z.__autoAllocateDepthBuffer===!1&&(Z.__useRenderToTexture=!1),Ae.get(A.texture).__webglTexture=z,Ae.get(A.depthTexture).__webglTexture=Z.__autoAllocateDepthBuffer?void 0:Y,Z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,z){let Y=Ae.get(A);Y.__webglFramebuffer=z,Y.__useDefaultFramebuffer=z===void 0};let g0=D.createFramebuffer();this.setRenderTarget=function(A,z=0,Y=0){I=A,C=z,P=Y;let Z=!0,V=null,ue=!1,xe=!1;if(A){let Se=Ae.get(A);if(Se.__useDefaultFramebuffer!==void 0)Te.bindFramebuffer(D.FRAMEBUFFER,null),Z=!1;else if(Se.__webglFramebuffer===void 0)U.setupRenderTarget(A);else if(Se.__hasExternalTextures)U.rebindTextures(A,Ae.get(A.texture).__webglTexture,Ae.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let Le=A.depthTexture;if(Se.__boundDepthTexture!==Le){if(Le!==null&&Ae.has(Le)&&(A.width!==Le.image.width||A.height!==Le.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");U.setupDepthRenderbuffer(A)}}let Oe=A.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture||Oe.isCompressedArrayTexture)&&(xe=!0);let Be=Ae.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Be[z])?V=Be[z][Y]:V=Be[z],ue=!0):A.samples>0&&U.useMultisampledRTT(A)===!1?V=Ae.get(A).__webglMultisampledFramebuffer:Array.isArray(Be)?V=Be[Y]:V=Be,O.copy(A.viewport),H.copy(A.scissor),W=A.scissorTest}else O.copy(we).multiplyScalar(X).floor(),H.copy(Ne).multiplyScalar(X).floor(),W=Qe;if(Y!==0&&(V=g0),Te.bindFramebuffer(D.FRAMEBUFFER,V)&&Z&&Te.drawBuffers(A,V),Te.viewport(O),Te.scissor(H),Te.setScissorTest(W),ue){let Se=Ae.get(A.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+z,Se.__webglTexture,Y)}else if(xe){let Se=z;for(let Oe=0;Oe<A.textures.length;Oe++){let Be=Ae.get(A.textures[Oe]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Oe,Be.__webglTexture,Y,Se)}}else if(A!==null&&Y!==0){let Se=Ae.get(A.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Se.__webglTexture,Y)}x=-1},this.readRenderTargetPixels=function(A,z,Y,Z,V,ue,xe,Ce=0){if(!(A&&A.isWebGLRenderTarget))return;let Se=Ae.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&xe!==void 0&&(Se=Se[xe]),Se){Te.bindFramebuffer(D.FRAMEBUFFER,Se);try{let Oe=A.textures[Ce],Be=Oe.format,Le=Oe.type;if(!De.textureFormatReadable(Be)||!De.textureTypeReadable(Le))return;z>=0&&z<=A.width-Z&&Y>=0&&Y<=A.height-V&&(A.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Ce),D.readPixels(z,Y,Z,V,me.convert(Be),me.convert(Le),ue))}finally{let Oe=I!==null?Ae.get(I).__webglFramebuffer:null;Te.bindFramebuffer(D.FRAMEBUFFER,Oe)}}},this.readRenderTargetPixelsAsync=async function(A,z,Y,Z,V,ue,xe,Ce=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Se=Ae.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&xe!==void 0&&(Se=Se[xe]),Se)if(z>=0&&z<=A.width-Z&&Y>=0&&Y<=A.height-V){Te.bindFramebuffer(D.FRAMEBUFFER,Se);let Oe=A.textures[Ce],Be=Oe.format,Le=Oe.type;if(!De.textureFormatReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!De.textureTypeReadable(Le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ye=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Ye),D.bufferData(D.PIXEL_PACK_BUFFER,ue.byteLength,D.STREAM_READ),A.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Ce),D.readPixels(z,Y,Z,V,me.convert(Be),me.convert(Le),0);let it=I!==null?Ae.get(I).__webglFramebuffer:null;Te.bindFramebuffer(D.FRAMEBUFFER,it);let _t=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await cv(D,_t,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Ye),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ue),D.deleteBuffer(Ye),D.deleteSync(_t),ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,z=null,Y=0){let Z=Math.pow(2,-Y),V=Math.floor(A.image.width*Z),ue=Math.floor(A.image.height*Z),xe=z!==null?z.x:0,Ce=z!==null?z.y:0;U.setTexture2D(A,0),D.copyTexSubImage2D(D.TEXTURE_2D,Y,0,0,xe,Ce,V,ue),Te.unbindTexture()};let v0=D.createFramebuffer(),_0=D.createFramebuffer();this.copyTextureToTexture=function(A,z,Y=null,Z=null,V=0,ue=null){ue===null&&(V!==0?(Hs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ue=V,V=0):ue=0);let xe,Ce,Se,Oe,Be,Le,Ye,it,_t,ut=A.isCompressedTexture?A.mipmaps[ue]:A.image;if(Y!==null)xe=Y.max.x-Y.min.x,Ce=Y.max.y-Y.min.y,Se=Y.isBox3?Y.max.z-Y.min.z:1,Oe=Y.min.x,Be=Y.min.y,Le=Y.isBox3?Y.min.z:0;else{let wi=Math.pow(2,-V);xe=Math.floor(ut.width*wi),Ce=Math.floor(ut.height*wi),A.isDataArrayTexture?Se=ut.depth:A.isData3DTexture?Se=Math.floor(ut.depth*wi):Se=1,Oe=0,Be=0,Le=0}Z!==null?(Ye=Z.x,it=Z.y,_t=Z.z):(Ye=0,it=0,_t=0);let rt=me.convert(z.format),Ie=me.convert(z.type),pt;z.isData3DTexture?(U.setTexture3D(z,0),pt=D.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(U.setTexture2DArray(z,0),pt=D.TEXTURE_2D_ARRAY):(U.setTexture2D(z,0),pt=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,z.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,z.unpackAlignment);let Je=D.getParameter(D.UNPACK_ROW_LENGTH),di=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Kr=D.getParameter(D.UNPACK_SKIP_PIXELS),fi=D.getParameter(D.UNPACK_SKIP_ROWS),so=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,ut.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ut.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Oe),D.pixelStorei(D.UNPACK_SKIP_ROWS,Be),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Le);let mt=A.isDataArrayTexture||A.isData3DTexture,Ei=z.isDataArrayTexture||z.isData3DTexture;if(A.isDepthTexture){let wi=Ae.get(A),qt=Ae.get(z),ii=Ae.get(wi.__renderTarget),yh=Ae.get(qt.__renderTarget);Te.bindFramebuffer(D.READ_FRAMEBUFFER,ii.__webglFramebuffer),Te.bindFramebuffer(D.DRAW_FRAMEBUFFER,yh.__webglFramebuffer);for(let ar=0;ar<Se;ar++)mt&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ae.get(A).__webglTexture,V,Le+ar),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ae.get(z).__webglTexture,ue,_t+ar)),D.blitFramebuffer(Oe,Be,xe,Ce,Ye,it,xe,Ce,D.DEPTH_BUFFER_BIT,D.NEAREST);Te.bindFramebuffer(D.READ_FRAMEBUFFER,null),Te.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(V!==0||A.isRenderTargetTexture||Ae.has(A)){let wi=Ae.get(A),qt=Ae.get(z);Te.bindFramebuffer(D.READ_FRAMEBUFFER,v0),Te.bindFramebuffer(D.DRAW_FRAMEBUFFER,_0);for(let ii=0;ii<Se;ii++)mt?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,wi.__webglTexture,V,Le+ii):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,wi.__webglTexture,V),Ei?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,qt.__webglTexture,ue,_t+ii):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,qt.__webglTexture,ue),V!==0?D.blitFramebuffer(Oe,Be,xe,Ce,Ye,it,xe,Ce,D.COLOR_BUFFER_BIT,D.NEAREST):Ei?D.copyTexSubImage3D(pt,ue,Ye,it,_t+ii,Oe,Be,xe,Ce):D.copyTexSubImage2D(pt,ue,Ye,it,Oe,Be,xe,Ce);Te.bindFramebuffer(D.READ_FRAMEBUFFER,null),Te.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else Ei?A.isDataTexture||A.isData3DTexture?D.texSubImage3D(pt,ue,Ye,it,_t,xe,Ce,Se,rt,Ie,ut.data):z.isCompressedArrayTexture?D.compressedTexSubImage3D(pt,ue,Ye,it,_t,xe,Ce,Se,rt,ut.data):D.texSubImage3D(pt,ue,Ye,it,_t,xe,Ce,Se,rt,Ie,ut):A.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,ue,Ye,it,xe,Ce,rt,Ie,ut.data):A.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,ue,Ye,it,ut.width,ut.height,rt,ut.data):D.texSubImage2D(D.TEXTURE_2D,ue,Ye,it,xe,Ce,rt,Ie,ut);D.pixelStorei(D.UNPACK_ROW_LENGTH,Je),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,di),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Kr),D.pixelStorei(D.UNPACK_SKIP_ROWS,fi),D.pixelStorei(D.UNPACK_SKIP_IMAGES,so),ue===0&&z.generateMipmaps&&D.generateMipmap(pt),Te.unbindTexture()},this.initRenderTarget=function(A){Ae.get(A).__webglFramebuffer===void 0&&U.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?U.setTextureCube(A,0):A.isData3DTexture?U.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?U.setTexture2DArray(A,0):U.setTexture2D(A,0),Te.unbindTexture()},this.resetState=function(){C=0,P=0,I=null,Te.reset(),le.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Ke._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ke._getUnpackColorSpace()}}});function cT(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r))}function hT(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function uT(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchEnd(r):this._onMouseUp(),this._removePointer(r),this._pointers.length===0&&(this.domElement.releasePointerCapture(r.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp)))}function dT(r){this._removePointer(r)}function fT(){this.enabled!==!1&&(this.keyState=et.NONE,window.addEventListener("keydown",this._onKeyDown))}function pT(r){this.enabled!==!1&&(window.removeEventListener("keydown",this._onKeyDown),this.keyState===et.NONE&&(r.code===this.keys[et.ROTATE]&&!this.noRotate?this.keyState=et.ROTATE:r.code===this.keys[et.ZOOM]&&!this.noZoom?this.keyState=et.ZOOM:r.code===this.keys[et.PAN]&&!this.noPan&&(this.keyState=et.PAN)))}function mT(r){let e;switch(r.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case ir.DOLLY:this.state=et.ZOOM;break;case ir.ROTATE:this.state=et.ROTATE;break;case ir.PAN:this.state=et.PAN;break;default:this.state=et.NONE}let t=this.keyState!==et.NONE?this.keyState:this.state;t===et.ROTATE&&!this.noRotate?(this._moveCurr.copy(this._getMouseOnCircle(r.pageX,r.pageY)),this._movePrev.copy(this._moveCurr)):t===et.ZOOM&&!this.noZoom?(this._zoomStart.copy(this._getMouseOnScreen(r.pageX,r.pageY)),this._zoomEnd.copy(this._zoomStart)):t===et.PAN&&!this.noPan&&(this._panStart.copy(this._getMouseOnScreen(r.pageX,r.pageY)),this._panEnd.copy(this._panStart)),this.dispatchEvent(nf)}function gT(r){let e=this.keyState!==et.NONE?this.keyState:this.state;e===et.ROTATE&&!this.noRotate?(this._movePrev.copy(this._moveCurr),this._moveCurr.copy(this._getMouseOnCircle(r.pageX,r.pageY))):e===et.ZOOM&&!this.noZoom?this._zoomEnd.copy(this._getMouseOnScreen(r.pageX,r.pageY)):e===et.PAN&&!this.noPan&&this._panEnd.copy(this._getMouseOnScreen(r.pageX,r.pageY))}function vT(){this.state=et.NONE,this.dispatchEvent(rf)}function _T(r){if(this.enabled!==!1&&this.noZoom!==!0){switch(r.preventDefault(),r.deltaMode){case 2:this._zoomStart.y-=r.deltaY*.025;break;case 1:this._zoomStart.y-=r.deltaY*.01;break;default:this._zoomStart.y-=r.deltaY*25e-5;break}this.dispatchEvent(nf),this.dispatchEvent(rf)}}function yT(r){this.enabled!==!1&&r.preventDefault()}function bT(r){switch(this._trackPointer(r),this._pointers.length){case 1:this.state=et.TOUCH_ROTATE,this._moveCurr.copy(this._getMouseOnCircle(this._pointers[0].pageX,this._pointers[0].pageY)),this._movePrev.copy(this._moveCurr);break;default:this.state=et.TOUCH_ZOOM_PAN;let e=this._pointers[0].pageX-this._pointers[1].pageX,t=this._pointers[0].pageY-this._pointers[1].pageY;this._touchZoomDistanceEnd=this._touchZoomDistanceStart=Math.sqrt(e*e+t*t);let i=(this._pointers[0].pageX+this._pointers[1].pageX)/2,n=(this._pointers[0].pageY+this._pointers[1].pageY)/2;this._panStart.copy(this._getMouseOnScreen(i,n)),this._panEnd.copy(this._panStart);break}this.dispatchEvent(nf)}function xT(r){switch(this._trackPointer(r),this._pointers.length){case 1:this._movePrev.copy(this._moveCurr),this._moveCurr.copy(this._getMouseOnCircle(r.pageX,r.pageY));break;default:let e=this._getSecondPointerPosition(r),t=r.pageX-e.x,i=r.pageY-e.y;this._touchZoomDistanceEnd=Math.sqrt(t*t+i*i);let n=(r.pageX+e.x)/2,s=(r.pageY+e.y)/2;this._panEnd.copy(this._getMouseOnScreen(n,s));break}}function ST(r){switch(this._pointers.length){case 0:this.state=et.NONE;break;case 1:this.state=et.TOUCH_ROTATE,this._moveCurr.copy(this._getMouseOnCircle(r.pageX,r.pageY)),this._movePrev.copy(this._moveCurr);break;case 2:this.state=et.TOUCH_ZOOM_PAN;for(let e=0;e<this._pointers.length;e++)if(this._pointers[e].pointerId!==r.pointerId){let t=this._pointerPositions[this._pointers[e].pointerId];this._moveCurr.copy(this._getMouseOnCircle(t.x,t.y)),this._movePrev.copy(this._moveCurr);break}break}this.dispatchEvent(rf)}var Qd,nf,rf,zv,et,ch,rr,lT,hh,ef,no,Vv,uh,tf,dh,fh,Gv=Yt(()=>{Jd();Qd={type:"change"},nf={type:"start"},rf={type:"end"},zv=1e-6,et={NONE:-1,ROTATE:0,ZOOM:1,PAN:2,TOUCH_ROTATE:3,TOUCH_ZOOM_PAN:4},ch=new ze,rr=new ze,lT=new G,hh=new G,ef=new G,no=new yi,Vv=new G,uh=new G,tf=new G,dh=new G,fh=class extends pa{constructor(e,t=null){super(e,t),this.screen={left:0,top:0,width:0,height:0},this.rotateSpeed=1,this.zoomSpeed=1.2,this.panSpeed=.3,this.noRotate=!1,this.noZoom=!1,this.noPan=!1,this.staticMoving=!1,this.dynamicDampingFactor=.2,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.keys=["KeyA","KeyS","KeyD"],this.mouseButtons={LEFT:ir.ROTATE,MIDDLE:ir.DOLLY,RIGHT:ir.PAN},this.target=new G,this.state=et.NONE,this.keyState=et.NONE,this._lastPosition=new G,this._lastZoom=1,this._touchZoomDistanceStart=0,this._touchZoomDistanceEnd=0,this._lastAngle=0,this._eye=new G,this._movePrev=new ze,this._moveCurr=new ze,this._lastAxis=new G,this._zoomStart=new ze,this._zoomEnd=new ze,this._panStart=new ze,this._panEnd=new ze,this._pointers=[],this._pointerPositions={},this._onPointerMove=hT.bind(this),this._onPointerDown=cT.bind(this),this._onPointerUp=uT.bind(this),this._onPointerCancel=dT.bind(this),this._onContextMenu=yT.bind(this),this._onMouseWheel=_T.bind(this),this._onKeyDown=pT.bind(this),this._onKeyUp=fT.bind(this),this._onTouchStart=bT.bind(this),this._onTouchMove=xT.bind(this),this._onTouchEnd=ST.bind(this),this._onMouseDown=mT.bind(this),this._onMouseMove=gT.bind(this),this._onMouseUp=vT.bind(this),this._target0=this.target.clone(),this._position0=this.object.position.clone(),this._up0=this.object.up.clone(),this._zoom0=this.object.zoom,t!==null&&(this.connect(t),this.handleResize()),this.update()}connect(e){super.connect(e),window.addEventListener("keydown",this._onKeyDown),window.addEventListener("keyup",this._onKeyUp),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerCancel),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.style.touchAction="none"}disconnect(){window.removeEventListener("keydown",this._onKeyDown),window.removeEventListener("keyup",this._onKeyUp),this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerCancel),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}handleResize(){let e=this.domElement.getBoundingClientRect(),t=this.domElement.ownerDocument.documentElement;this.screen.left=e.left+window.pageXOffset-t.clientLeft,this.screen.top=e.top+window.pageYOffset-t.clientTop,this.screen.width=e.width,this.screen.height=e.height}update(){this._eye.subVectors(this.object.position,this.target),this.noRotate||this._rotateCamera(),this.noZoom||this._zoomCamera(),this.noPan||this._panCamera(),this.object.position.addVectors(this.target,this._eye),this.object.isPerspectiveCamera?(this._checkDistances(),this.object.lookAt(this.target),this._lastPosition.distanceToSquared(this.object.position)>zv&&(this.dispatchEvent(Qd),this._lastPosition.copy(this.object.position))):this.object.isOrthographicCamera&&(this.object.lookAt(this.target),(this._lastPosition.distanceToSquared(this.object.position)>zv||this._lastZoom!==this.object.zoom)&&(this.dispatchEvent(Qd),this._lastPosition.copy(this.object.position),this._lastZoom=this.object.zoom))}reset(){this.state=et.NONE,this.keyState=et.NONE,this.target.copy(this._target0),this.object.position.copy(this._position0),this.object.up.copy(this._up0),this.object.zoom=this._zoom0,this.object.updateProjectionMatrix(),this._eye.subVectors(this.object.position,this.target),this.object.lookAt(this.target),this.dispatchEvent(Qd),this._lastPosition.copy(this.object.position),this._lastZoom=this.object.zoom}_panCamera(){if(rr.copy(this._panEnd).sub(this._panStart),rr.lengthSq()){if(this.object.isOrthographicCamera){let e=(this.object.right-this.object.left)/this.object.zoom/this.domElement.clientWidth,t=(this.object.top-this.object.bottom)/this.object.zoom/this.domElement.clientWidth;rr.x*=e,rr.y*=t}rr.multiplyScalar(this._eye.length()*this.panSpeed),hh.copy(this._eye).cross(this.object.up).setLength(rr.x),hh.add(lT.copy(this.object.up).setLength(rr.y)),this.object.position.add(hh),this.target.add(hh),this.staticMoving?this._panStart.copy(this._panEnd):this._panStart.add(rr.subVectors(this._panEnd,this._panStart).multiplyScalar(this.dynamicDampingFactor))}}_rotateCamera(){dh.set(this._moveCurr.x-this._movePrev.x,this._moveCurr.y-this._movePrev.y,0);let e=dh.length();e?(this._eye.copy(this.object.position).sub(this.target),Vv.copy(this._eye).normalize(),uh.copy(this.object.up).normalize(),tf.crossVectors(uh,Vv).normalize(),uh.setLength(this._moveCurr.y-this._movePrev.y),tf.setLength(this._moveCurr.x-this._movePrev.x),dh.copy(uh.add(tf)),ef.crossVectors(dh,this._eye).normalize(),e*=this.rotateSpeed,no.setFromAxisAngle(ef,e),this._eye.applyQuaternion(no),this.object.up.applyQuaternion(no),this._lastAxis.copy(ef),this._lastAngle=e):!this.staticMoving&&this._lastAngle&&(this._lastAngle*=Math.sqrt(1-this.dynamicDampingFactor),this._eye.copy(this.object.position).sub(this.target),no.setFromAxisAngle(this._lastAxis,this._lastAngle),this._eye.applyQuaternion(no),this.object.up.applyQuaternion(no)),this._movePrev.copy(this._moveCurr)}_zoomCamera(){let e;this.state===et.TOUCH_ZOOM_PAN?(e=this._touchZoomDistanceStart/this._touchZoomDistanceEnd,this._touchZoomDistanceStart=this._touchZoomDistanceEnd,this.object.isPerspectiveCamera?this._eye.multiplyScalar(e):this.object.isOrthographicCamera&&(this.object.zoom=ih.clamp(this.object.zoom/e,this.minZoom,this.maxZoom),this._lastZoom!==this.object.zoom&&this.object.updateProjectionMatrix())):(e=1+(this._zoomEnd.y-this._zoomStart.y)*this.zoomSpeed,e!==1&&e>0&&(this.object.isPerspectiveCamera?this._eye.multiplyScalar(e):this.object.isOrthographicCamera&&(this.object.zoom=ih.clamp(this.object.zoom/e,this.minZoom,this.maxZoom),this._lastZoom!==this.object.zoom&&this.object.updateProjectionMatrix())),this.staticMoving?this._zoomStart.copy(this._zoomEnd):this._zoomStart.y+=(this._zoomEnd.y-this._zoomStart.y)*this.dynamicDampingFactor)}_getMouseOnScreen(e,t){return ch.set((e-this.screen.left)/this.screen.width,(t-this.screen.top)/this.screen.height),ch}_getMouseOnCircle(e,t){return ch.set((e-this.screen.width*.5-this.screen.left)/(this.screen.width*.5),(this.screen.height+2*(this.screen.top-t))/this.screen.width),ch}_addPointer(e){this._pointers.push(e)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t].pointerId==e.pointerId){this._pointers.splice(t,1);return}}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ze,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0].pointerId?this._pointers[1]:this._pointers[0];return this._pointerPositions[t.pointerId]}_checkDistances(){(!this.noZoom||!this.noPan)&&(this._eye.lengthSq()>this.maxDistance*this.maxDistance&&(this.object.position.addVectors(this.target,this._eye.setLength(this.maxDistance)),this._zoomStart.copy(this._zoomEnd)),this._eye.lengthSq()<this.minDistance*this.minDistance&&(this.object.position.addVectors(this.target,this._eye.setLength(this.minDistance)),this._zoomStart.copy(this._zoomEnd)))}}});function jv(r){let e=r instanceof Document?r.documentElement:r,t=PT(e);if(t===Wv&&sf.length)return sf;let i=Array.from(e.querySelectorAll(qv)),n=[];if(i.length)n=i.map((s,o)=>MT(s,o)).filter(s=>!!s);else{let s=Array.from(e.querySelectorAll(Yv));n=s.map((o,a)=>ET(o,a)).filter(o=>!!o),s.length&&RT(e)}return Wv=t,sf=n,n}function MT(r,e){var s,o,a,l,c,h,u,d,f,_,g;let t=wT((s=r.dataset.mediaType)!=null?s:r.dataset.type),i=(a=(o=r.dataset.mediaSrc)!=null?o:r.dataset.src)!=null?a:r.getAttribute("src");if(!t||!i)return null;let n=Zv((l=r.dataset.aspect)!=null?l:r.getAttribute("data-aspect"));return{id:r.dataset.mediaId||r.id||`archive-media-${e}`,type:t,src:i,thumb:(h=(c=r.dataset.thumb)!=null?c:r.dataset.poster)!=null?h:void 0,aspectRatio:n,title:(d=(u=r.dataset.title)!=null?u:r.getAttribute("data-title"))!=null?d:void 0,description:(f=r.dataset.description)!=null?f:void 0,link:(_=r.dataset.link)!=null?_:void 0,alt:(g=r.getAttribute("alt"))!=null?g:void 0,metadata:of(r.dataset)}}function ET(r,e){var n,s,o,a,l,c,h,u,d;let t=r.tagName.toLowerCase()==="img",i=TT(r);if(t){let f=(s=(n=r.getAttribute("src"))!=null?n:r.dataset.src)!=null?s:null;return f?{id:r.dataset.mediaId||r.id||`archive-legacy-${e}`,type:"image",src:f,thumb:(l=(a=(o=r.getAttribute("data-thumb"))!=null?o:r.dataset.thumb)!=null?a:r.getAttribute("data-poster"))!=null?l:void 0,aspectRatio:Xv(r),title:(c=r.getAttribute("alt"))!=null?c:void 0,alt:(h=r.getAttribute("alt"))!=null?h:void 0,metadata:of(r.dataset)}:null}if(i){let f=AT(i);return f?{id:r.dataset.mediaId||r.id||`archive-legacy-${e}`,type:"video",src:f,thumb:(u=CT(i))!=null?u:void 0,aspectRatio:Xv(i),title:(d=r.getAttribute("data-title"))!=null?d:void 0,metadata:of({...r.dataset,...i.dataset})}:null}return null}function wT(r){if(!r)return null;if(r==="video"||r==="image")return r;let e=r.toLowerCase();return e.includes("video")?"video":e.includes("image")?"image":null}function Zv(r){if(!r)return;if(r.includes(":")){let[t,i]=r.split(":").map(n=>Number.parseFloat(n.trim()));if(Number.isFinite(t)&&Number.isFinite(i)&&i>0)return i===0?void 0:i/t}let e=Number.parseFloat(r);if(Number.isFinite(e)&&e>0)return e}function Xv(r){var s,o;let e=Number.parseFloat((s=r.getAttribute("width"))!=null?s:"")||r.clientWidth,t=Number.parseFloat((o=r.getAttribute("height"))!=null?o:"")||r.clientHeight;if(e>0&&t>0)return t/e;let i=r.getBoundingClientRect();if(i.width>0&&i.height>0)return i.height/i.width;let n=r.getAttribute("data-aspect");return Zv(n)}function TT(r){return r.tagName.toLowerCase()==="video"?r:r.querySelector("video")}function AT(r){var n,s;let e=[(n=r.dataset.src1080)!=null?n:r.getAttribute("data-src-1080"),(s=r.dataset.src720)!=null?s:r.getAttribute("data-src-720"),r.getAttribute("data-src"),r.dataset.src,r.getAttribute("src")];for(let o of e)if(o&&o.trim().length)return o.trim();let t=r.querySelector("source");if(t){let o=[t.getAttribute("data-src-1080"),t.getAttribute("data-src-720"),t.getAttribute("data-src"),t.getAttribute("src")];for(let a of o)if(a&&a.trim().length)return a.trim()}let i=r.innerHTML.match(/https:\/\/[^"'\s]+/);return i?i[0]:null}function CT(r){var t,i;let e=(i=(t=r.dataset.poster)!=null?t:r.getAttribute("data-poster"))!=null?i:r.getAttribute("poster");return e&&e.trim().length?e.trim():null}function of(r){let e=Object.entries(r).filter(t=>typeof t[1]=="string");return Object.fromEntries(e)}function RT(r){let e=r.querySelector(".grid-images");e&&(e.setAttribute("data-archive-sphere-hidden","true"),e.style.display="none",IT()||LT(e))}function PT(r){return Array.from(r.querySelectorAll(qv+", "+Yv)).map(i=>{var n,s,o;return(o=(s=(n=i.getAttribute("data-media-id"))!=null?n:i.id)!=null?s:i.getAttribute("src"))!=null?o:i.outerHTML.length.toString()}).join("|")}function LT(r){r.querySelectorAll("img").forEach(i=>{var n;i.dataset.archiveSpherePreserve!=="true"&&(i.dataset.src||(i.dataset.src=(n=i.getAttribute("src"))!=null?n:""),i.removeAttribute("src"),i.removeAttribute("srcset"),i.loading="lazy")}),r.querySelectorAll("video").forEach(i=>{var s,o;if(i.dataset.archiveSpherePreserve==="true")return;!i.dataset.src&&i.getAttribute("src")&&(i.dataset.src=(s=i.getAttribute("src"))!=null?s:""),!i.dataset.poster&&i.getAttribute("poster")&&(i.dataset.poster=(o=i.getAttribute("poster"))!=null?o:""),i.removeAttribute("src"),i.removeAttribute("poster"),i.querySelectorAll("source").forEach(a=>{var l;a.getAttribute("src")&&(a.setAttribute("data-src",(l=a.getAttribute("src"))!=null?l:""),a.removeAttribute("src"))})})}function IT(){if(typeof document=="undefined")return!1;let r=document.documentElement;return r.classList.contains("w-editor")||r.classList.contains("wf-design-mode")}var qv,Yv,Wv,sf,$v=Yt(()=>{"use strict";qv="[data-archive-media-item]",Yv=".archive-media-element, .grid-image, .grid-video",Wv="",sf=[]});function Jv(){if(Kv)return;Kv=!0;let r=document.createElement("style");r.dataset.archiveSphereStyles="true",r.textContent=`
    :root {
      --archive-sphere-bg: transparent;
      --archive-sphere-text: #f5f5f5;
      --archive-sphere-muted: rgba(245, 245, 245, 0.64);
      --archive-sphere-focus-bg: rgba(10, 10, 10, 0.58);
      --archive-sphere-focus-border: rgba(255, 255, 255, 0.22);
    }

    [data-barba-namespace='archive'] .grid-images[data-archive-sphere-hidden='true'],
    [data-barba-namespace='archive'] .grid-slider-container,
    [data-barba-namespace='archive'] .grid-images,
    [data-barba-namespace='archive'] .grid-image,
    [data-barba-namespace='archive'] .grid-video,
    [data-barba-namespace='archive'] .grid-item {
      display: none !important;
      opacity: 0 !important;
      visibility: hidden !important;
      pointer-events: none !important;
      transition: none !important;
    }

    .archive-sphere {
      position: fixed;
      inset: 0;
      width: 100vw;
      height: 100vh;
      pointer-events: auto;
      background: var(--archive-sphere-bg);
      touch-action: none;
      z-index: 0;
    }

    .archive-sphere.is-loading {
      pointer-events: none;
    }

    .archive-sphere__renderer {
      position: absolute !important;
      inset: 0;
      width: 100% !important;
      height: 100% !important;
      display: block;
      cursor: grab;
      user-select: none;
    }

    .archive-sphere__renderer:active {
      cursor: grabbing;
    }

    .archive-sphere__loader {
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: clamp(16px, 4vw, 48px);
      pointer-events: none;
      font-family: inherit;
      font-size: inherit;
      line-height: 1.3;
      color: var(--text-medium);
      letter-spacing: 0.01em;
      opacity: 1;
      transition: opacity 0.35s ease;
      z-index: 25;
      background: transparent;
      box-sizing: border-box;
    }

    .archive-sphere__loader-inner {
      width: min(480px, 90vw);
      display: flex;
      flex-direction: column;
      gap: clamp(12px, 1.4vw, 18px);
      pointer-events: none;
    }

    .archive-sphere__loader-bar {
      width: 100%;
      height: 2px;
      background: var(--text-medium);
      overflow: hidden;
    }

    .archive-sphere__loader-bar-fill {
      width: 0%;
      height: 100%;
      background: var(--text-dark);
      transition: width 0.35s ease;
      transform-origin: left center;
    }

    .archive-sphere__loader-meta {
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: var(--text-medium);
    }

    .archive-sphere__loader-status,
    .archive-sphere__loader-counter {
      font-family: inherit;
      color: inherit;
    }

    .archive-sphere__loader.is-hidden {
      opacity: 0;
    }

    /* Crosshair only when JS sets is-hovering for non-featured hover */
    .archive-sphere__renderer.is-hovering {
      cursor: crosshair;
    }

    /* Do not force crosshair on body when focused */
    body.archive-sphere--focused {
      cursor: auto;
    }

    .archive-sphere__backdrop {
      position: absolute;
      inset: 0;
      border: 0;
      margin: 0;
      padding: 0;
      background: rgba(8, 8, 8, 0.48);
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.35s ease;
      z-index: 5;
      backdrop-filter: blur(28px) saturate(135%);
      -webkit-backdrop-filter: blur(28px) saturate(135%);
    }

    .archive-sphere__backdrop.is-active {
      opacity: 1;
      pointer-events: auto;
      cursor: pointer;
    }

    .archive-sphere-focus {
      position: fixed;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      pointer-events: none;
      opacity: 0;
      transition: opacity 0.35s ease;
      z-index: 4200;
    }

    .archive-sphere-focus.is-visible {
      opacity: 1;
    }

    .archive-sphere-focus__media {
      pointer-events: auto;
      max-width: min(82vw, 980px);
      max-height: min(82vh, 720px);
      border-radius: 22px;
      overflow: hidden;
      box-shadow: 0 32px 68px rgba(0, 0, 0, 0.38);
      background: rgba(12, 12, 12, 0.72);
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .archive-sphere-focus__image,
    .archive-sphere-focus__video {
      width: 100%;
      height: 100%;
      object-fit: contain;
      background: transparent;
      display: block;
    }

    @media (max-width: 900px) {
      .archive-sphere-focus__media {
        max-width: min(92vw, 640px);
        max-height: min(88vh, 640px);
        border-radius: 16px;
      }
    }

  `,document.head.appendChild(r)}var Kv,Qv=Yt(()=>{"use strict";Kv=!1});var DT,OT,FT,NT,UT,BT,e0,af,t0,lf,ph,i0=Yt(()=>{"use strict";li();Jd();Gv();$v();Qv();DT=Math.PI*(3-Math.sqrt(5)),OT=640,FT=.1,NT=6,UT=1.05,BT=1.12,e0=82,af=1.18,t0=.08,lf=["texturesReady","imagesReady","videosReady","videoMetadataReady","meshesBound"],ph=class{constructor(e={}){this.pointer=new ze;this.loader=new ha;this.mediaBindings=[];this.mediaGroup=new Mn;this.clock=new da;this.loaderDisplayRaf=null;this.introTimeline=null;this.focusPixelRatioActive=!1;this.animationFrame=0;this.destroyed=!1;this.mode="idle";this.featured=null;this.rollover=null;this.isDragging=!1;this.pointerDownTime=0;this.pointerDownCoords={x:0,y:0};this.dragStartedOnMedia=!1;this.focusState=null;this.loaderHideTimer=null;this.loaderSession=0;this.loaderPaddingTarget=null;this.inactivityDelay=3500;this.inactivityTimer=null;this.screensaverState={active:!1,direction:1,currentSpeed:0,targetSpeed:0,baseSpeed:.09,rampDuration:2,elapsed:0};this.screensaverOrientationTween=null;var h;Jv();let t=this.resolveContainer(e.container),i=t.querySelector("[data-archive-sphere]");this.root=i!=null?i:document.createElement("div"),this.root.dataset.archiveSphere="true",this.root.classList.add("archive-sphere"),i||t.appendChild(this.root),this.setLoadingState(!0),this.loaderStats={totalItems:0,texturesTotal:0,texturesReady:0,imagesTotal:0,imagesReady:0,videosTotal:0,videosReady:0,videoMetadataReady:0,meshesBound:0,webglReady:!1,controlsReady:!1,introComplete:!1,status:"Initializing..."},this.loaderDisplay={texturesReady:0,imagesReady:0,videosReady:0,videoMetadataReady:0,meshesBound:0};let{overlay:n,inner:s,barFill:o,counter:a,status:l}=this.createLoaderOverlay();this.loaderOverlay=n,this.loaderInner=s,this.loaderBarFill=o,this.loaderCounter=a,this.loaderStatusText=l,this.sourceItems=e.items&&e.items.length?this.cloneSourceItems(e.items):null,this.radius=(h=e.radius)!=null?h:OT,this.scene=new ra,this.scene.background=null,this.camera=new Gt(40,1,1,6e3),this.camera.position.set(0,0,this.radius*2),this.defaultCameraPosition=this.camera.position.clone(),this.defaultCameraTarget=new G(0,0,0),this.defaultCameraUp=this.camera.up.clone(),this.focusCameraDistance=Math.max(this.radius*UT,this.radius*1.4);let c=new ua(new $e("#ffffff"),1.2);this.scene.add(c),this.scene.add(this.mediaGroup),this.renderer=new ah({antialias:!0,alpha:!0,premultipliedAlpha:!0}),this.applyIdleRendererPixelRatio(),this.renderer.setClearColor(new $e("transparent"),0),this.renderer.outputColorSpace=Nt,this.renderer.domElement.classList.add("archive-sphere__renderer"),this.renderer.domElement.style.position="absolute",this.root.appendChild(this.renderer.domElement),this.root.appendChild(this.loaderOverlay),this.loaderPaddingTarget=this.resolveLoaderPaddingTarget(),this.updateLoaderPadding(),this.loaderStats.webglReady=!0,this.renderLoaderText(),this.refreshLoaderStatus(),this.controls=new fh(this.camera,this.renderer.domElement),this.controls.rotateSpeed=1.05,this.controls.zoomSpeed=1.2,this.controls.panSpeed=.4,this.controls.noPan=!0,this.controls.noRotate=!1,this.controls.noZoom=!1,this.controls.staticMoving=!1,this.controls.dynamicDampingFactor=t0,this.controls.minDistance=Math.max(this.radius*FT,80),this.controls.maxDistance=this.radius*NT,this.controls.target.copy(this.defaultCameraTarget),this.controls.handleResize(),this.controls.update(),this.clock.start(),this.loaderStats.controlsReady=!0,this.refreshLoaderStatus(),this.recalcDefaultCameraPose(),this.focusCameraDistance=Math.max(this.focusCameraDistance,this.controls.minDistance*1.6),this.raycaster=new fa,this.handlePointerMove=this.onPointerMove.bind(this),this.handlePointerDown=this.onPointerDown.bind(this),this.handlePointerUp=this.onPointerUp.bind(this),this.handleResize=this.onResize.bind(this),this.handleKeydown=this.onKeydown.bind(this),this.handleControlsStart=()=>this.handleUserInteraction(),this.handleControlsChange=()=>this.handleUserInteraction(),this.handleControlsEnd=()=>this.handleUserInteraction(),this.installEvents(),this.onResize()}get viewportWidth(){return this.renderer.domElement.clientWidth||window.innerWidth||1920}get viewportHeight(){return this.renderer.domElement.clientHeight||window.innerHeight||1080}computeFullSphereDistance(e=1.06){let t=this.viewportWidth,i=this.viewportHeight,n=Math.max(1e-4,t/Math.max(1,i)),s=this.camera.fov*Math.PI/180,o=2*Math.atan(Math.tan(s/2)*n),a=this.radius/Math.tan(s/2),l=this.radius/Math.tan(o/2);return Math.max(a,l)*e}computeIdleDistance(){let e=this.computeFullSphereDistance(1.06);if(this.viewportWidth<=900)return Math.max(e*.9,this.controls.minDistance*1.35);let i=this.camera.fov*Math.PI/180,n=this.radius/Math.tan(i/2)*BT;return Math.max(n,this.controls.minDistance*1.6)}applyResponsiveControls(){let t=this.viewportWidth<=900,i=t?.62:1.05,n=t?.9:1.2,s=t?.12:t0,o=this.camera.position.distanceTo(this.controls.target),a=Math.min(1,Math.max(.45,o/(this.radius*1.25)));this.controls.rotateSpeed=i*a,this.controls.zoomSpeed=n*Math.max(.6,a),this.controls.dynamicDampingFactor=s}recalcDefaultCameraPose(){let e=this.computeIdleDistance(),t=new G(0,0,e);this.defaultCameraPosition.copy(t),this.defaultCameraTarget.set(0,0,0),this.defaultCameraUp.set(0,1,0),this.mode==="idle"&&(this.camera.position.copy(this.defaultCameraPosition),this.controls.target.copy(this.defaultCameraTarget),this.camera.up.copy(this.defaultCameraUp),this.camera.updateProjectionMatrix(),this.controls.update());let i=this.controls.minDistance*1.6,n=this.controls.maxDistance*.7;this.focusCameraDistance=Math.min(Math.max(e*.9,i),n),this.applyResponsiveControls()}computeIdlePixelRatio(){if(typeof window=="undefined")return 1;let e=Number.isFinite(window.devicePixelRatio)?window.devicePixelRatio:1;return Math.min(Math.max(1,e),1.8)}computeFocusPixelRatio(){if(typeof window=="undefined")return 1;let e=Number.isFinite(window.devicePixelRatio)?window.devicePixelRatio:1,t=Math.max(1,e);return Math.min(t,1.8)}applyIdleRendererPixelRatio(){let{renderer:e}=this;if(!e)return;let t=this.computeIdlePixelRatio();Math.abs(e.getPixelRatio()-t)>.001&&e.setPixelRatio(t),this.focusPixelRatioActive=!1}applyFocusRendererPixelRatio(){let{renderer:e}=this;if(!e)return;let t=this.computeFocusPixelRatio();Math.abs(e.getPixelRatio()-t)>.001&&e.setPixelRatio(t),this.focusPixelRatioActive=!0}animateCameraUpTo(e,t,i=.9){var l;let n=e.clone().normalize();(!Number.isFinite(n.lengthSq())||n.lengthSq()<1e-6)&&n.set(0,1,0);let s=this.camera.up.clone().normalize(),o=s.dot(n);if((l=t.upTween)==null||l.kill(),!Number.isFinite(o)||o>.999){this.camera.up.copy(n),this.camera.updateProjectionMatrix(),t.upTween=null;return}let a={t:0};t.upTween=j.to(a,{t:1,duration:i,ease:"power3.inOut",onUpdate:()=>{this.camera.up.copy(s).lerp(n,a.t).normalize(),this.camera.updateProjectionMatrix(),this.controls.update()},onComplete:()=>{this.camera.up.copy(n),this.camera.updateProjectionMatrix()}})}async initialize(){let e=this.resolveMediaSources();e.length&&(await this.populateMedia(e),this.prepareIntroState(),this.animate(),this.playIntroAnimation())}refresh(){if(this.destroyed)return;let e=this.resolveMediaSources();e.length&&(this.releaseFocus(!0),this.disposeMedia(),this.populateMedia(e).then(()=>{this.prepareIntroState(),this.playIntroAnimation()}))}destroy(){var e,t;this.destroyed||(this.destroyed=!0,cancelAnimationFrame(this.animationFrame),this.controls.dispose(),this.releaseFocus(!0),this.disposeMedia(),(e=this.introTimeline)==null||e.kill(),this.introTimeline=null,(t=this.screensaverOrientationTween)==null||t.kill(),this.screensaverOrientationTween=null,this.loaderHideTimer!==null&&(window.clearTimeout(this.loaderHideTimer),this.loaderHideTimer=null),this.loaderDisplayRaf!==null&&(cancelAnimationFrame(this.loaderDisplayRaf),this.loaderDisplayRaf=null),this.inactivityTimer!==null&&(window.clearTimeout(this.inactivityTimer),this.inactivityTimer=null),this.screensaverState.active=!1,this.screensaverState.currentSpeed=0,this.screensaverState.targetSpeed=0,this.screensaverState.rampDuration=0,this.screensaverState.elapsed=0,this.renderer.dispose(),this.root.remove(),this.removeEvents())}resolveContainer(e){if(e instanceof HTMLElement)return e;if(e&&"querySelector"in e){let n=e.querySelector("[data-archive-sphere-root]");if(n)return n}let t=document.querySelector("[data-archive-sphere-root]");if(t)return t;let i=document.querySelector('[data-barba-namespace="archive"]');return i||document.body}installEvents(){this.renderer.domElement.addEventListener("pointermove",this.handlePointerMove),this.renderer.domElement.addEventListener("pointerdown",this.handlePointerDown),window.addEventListener("pointerup",this.handlePointerUp),window.addEventListener("resize",this.handleResize),window.addEventListener("keydown",this.handleKeydown),this.controls.addEventListener("start",this.handleControlsStart),this.controls.addEventListener("change",this.handleControlsChange),this.controls.addEventListener("end",this.handleControlsEnd)}removeEvents(){this.renderer.domElement.removeEventListener("pointermove",this.handlePointerMove),this.renderer.domElement.removeEventListener("pointerdown",this.handlePointerDown),window.removeEventListener("pointerup",this.handlePointerUp),window.removeEventListener("resize",this.handleResize),window.removeEventListener("keydown",this.handleKeydown),this.controls.removeEventListener("start",this.handleControlsStart),this.controls.removeEventListener("change",this.handleControlsChange),this.controls.removeEventListener("end",this.handleControlsEnd)}handleUserInteraction(){this.destroyed||(this.requestScreensaverStop(),this.clearInactivityTimer(),this.scheduleInactivityTimer())}handlePassiveInteraction(){this.destroyed||(this.clearInactivityTimer(),this.scheduleInactivityTimer())}clearInactivityTimer(){this.inactivityTimer!==null&&typeof window!="undefined"&&(window.clearTimeout(this.inactivityTimer),this.inactivityTimer=null)}scheduleInactivityTimer(){this.destroyed||typeof window=="undefined"||this.loaderStats.introComplete&&(this.clearInactivityTimer(),this.inactivityTimer=window.setTimeout(()=>{this.inactivityTimer=null,this.activateScreensaver()},this.inactivityDelay))}activateScreensaver(){if(this.destroyed)return;if(this.mode!=="idle"||!this.mediaBindings.length){this.scheduleInactivityTimer();return}let e=this.screensaverState;e.active=!0,e.direction=1,e.rampDuration=1.1+Math.random()*.7,e.elapsed=e.rampDuration*.12;let t=.7+Math.random()*.6;e.targetSpeed=e.baseSpeed*t*e.direction,e.currentSpeed=e.targetSpeed*.1,this.gentlyRealignOrientation()}deactivateScreensaver(){var t;let e=this.screensaverState;e.active=!1,e.targetSpeed=0,e.rampDuration=0,e.elapsed=0,e.currentSpeed=0,(t=this.screensaverOrientationTween)==null||t.kill(),this.screensaverOrientationTween=null,this.mediaGroup.rotation.x=0,this.mediaGroup.rotation.z=0,this.renderFrame()}requestScreensaverStop(){let e=this.screensaverState;!e.active&&Math.abs(e.currentSpeed)<=1e-4||(e.active=!1,e.targetSpeed=0,e.rampDuration=Math.max(e.rampDuration,.45),e.elapsed=e.rampDuration)}updateScreensaver(e){if(this.destroyed)return;let t=this.screensaverState;if(this.mode!=="idle"&&(t.active||Math.abs(t.currentSpeed)>1e-4)&&this.requestScreensaverStop(),!t.active&&Math.abs(t.currentSpeed)<=1e-4){t.currentSpeed=0;return}let i=t.targetSpeed;if(t.active){t.elapsed+=e;let s=Math.max(1e-4,t.rampDuration),o=Math.min(1,t.elapsed/s),a=o*o*(3-2*o);i=t.targetSpeed*a}if(t.active)t.currentSpeed=i;else{let s=Math.min(1,e*12);t.currentSpeed+=(i-t.currentSpeed)*s}let n=t.currentSpeed;if(Math.abs(n)<=1e-4){t.active||(t.currentSpeed=0);return}this.mediaGroup.rotation.y+=n*e}normalizeAngle(e){let t=Math.PI*2,i=e%t;return i>Math.PI?i-=t:i<-Math.PI&&(i+=t),i}gentlyRealignOrientation(){var n;(n=this.screensaverOrientationTween)==null||n.kill();let e=this.normalizeAngle(this.mediaGroup.rotation.x),t=this.normalizeAngle(this.mediaGroup.rotation.z);this.mediaGroup.rotation.x=e,this.mediaGroup.rotation.z=t;let i=8e-4;if(Math.abs(e)<=i&&Math.abs(t)<=i){this.screensaverOrientationTween=null;return}this.screensaverOrientationTween=j.to(this.mediaGroup.rotation,{x:0,z:0,duration:2.2,ease:"power3.out",overwrite:"auto",onUpdate:()=>{this.controls.update(),this.renderFrame()},onComplete:()=>{this.screensaverOrientationTween=null},onInterrupt:()=>{this.screensaverOrientationTween=null}})}async populateMedia(e){this.prepareLoaderForSources(e);let t=this.loaderSession,i=this.shuffleItems(e),n=i.length;this.mediaGroup.position.set(0,0,0),this.mediaGroup.scale.set(1,1,1),this.mediaGroup.rotation.set(0,0,0);for(let s=0;s<i.length;s+=1){let o=i[s],{material:a,texture:l,videoElement:c,intrinsicAspect:h,intrinsicAspectPromise:u}=await this.createMaterial(o),d=new kr(1,1),f=new hi(d,a),_=this.normalizeAspect(Number.isFinite(o.aspectRatio)&&o.aspectRatio?o.aspectRatio:h!=null?h:1),g=e0,m=g*_;f.scale.set(g,m,1);let p=this.computePosition(s,n,this.radius);f.position.copy(p),this.orientMeshOutwards(f),this.mediaGroup.add(f);let M={item:o,mesh:f,material:a,texture:l,videoElement:c,baseScale:{x:g,y:m},hoverTween:null,opacityTween:null,opacityTarget:a.opacity};if(this.mediaBindings.push(M),this.trackMediaBinding(o,t,o.type==="video"?u:void 0),!Number.isFinite(o.aspectRatio)||!o.aspectRatio){let b=S=>{this.destroyed||S===void 0||S===null||!this.mediaBindings.includes(M)||this.updateBindingAspect(M,S)};h&&Math.abs(h-_)>.001&&b(h),u==null||u.then(S=>{b(S)}).catch(()=>{})}}i.length&&(this.mediaGroup.rotation.y=Math.random()*Math.PI*2,this.mediaGroup.rotation.x=(Math.random()-.5)*.35)}disposeMedia(){this.mediaBindings.forEach(e=>{e.mesh.geometry.dispose(),e.material.dispose(),e.texture.dispose(),e.videoElement&&(e.videoElement.pause(),e.videoElement.removeAttribute("src"),e.videoElement.load())}),this.mediaGroup.clear(),this.mediaBindings.length=0}resolveMediaSources(){var e;return this.sourceItems?this.cloneSourceItems(this.sourceItems):jv((e=this.root.parentElement)!=null?e:document)}cloneSourceItems(e){return e.map(t=>({...t,metadata:t.metadata?{...t.metadata}:void 0}))}shuffleItems(e){let t=e.slice();for(let i=t.length-1;i>0;i-=1){let n=Math.floor(Math.random()*(i+1)),s=t[i];t[i]=t[n],t[n]=s}return t}computePosition(e,t,i){if(t<=1)return new G(0,0,i);let n=1-e/(t-1)*2,s=Math.sqrt(Math.max(0,1-n*n)),o=DT*e,a=Math.cos(o)*s,l=Math.sin(o)*s;return new G(a,n,l).multiplyScalar(i)}orientMeshOutwards(e){let t=e.position.clone().normalize();e.lookAt(t.clone().multiplyScalar(this.radius*2))}createLoaderOverlay(){let e=document.createElement("div");e.className="archive-sphere__loader";let t=document.createElement("div");t.className="archive-sphere__loader-inner";let i=document.createElement("div");i.className="archive-sphere__loader-bar";let n=document.createElement("div");n.className="archive-sphere__loader-bar-fill",i.appendChild(n);let s=document.createElement("div");s.className="archive-sphere__loader-meta text-size-small";let o=document.createElement("span");o.className="archive-sphere__loader-status text-size-small",o.textContent="Loading media...";let a=document.createElement("span");return a.className="archive-sphere__loader-counter text-size-small",a.textContent="0/0",s.appendChild(o),s.appendChild(a),t.appendChild(i),t.appendChild(s),e.appendChild(t),{overlay:e,inner:t,barFill:n,counter:a,status:o}}renderLoaderText(){let e=this.loaderStats,t=this.loaderDisplay,i=e.texturesTotal>0?e.texturesTotal:Math.max(e.totalItems,e.texturesTotal),n=i>0?Math.min(t.texturesReady,i):0,s=0;i>0?s=n/Math.max(1,i):e.introComplete&&(s=1),s=Math.min(1,Math.max(0,s)),this.loaderBarFill.style.width=`${Math.round(s*100)}%`,this.loaderCounter.textContent=this.formatLoaderCount(n,i),this.loaderStatusText.textContent=e.status}resolveLoaderPaddingTarget(){var n;let e=this.root.closest('[data-barba-namespace="archive"]'),i=((n=e!=null?e:this.root.parentElement)!=null?n:document.body).querySelector(".padding-global");return i!=null?i:null}updateLoaderPadding(){this.loaderPaddingTarget=null,this.loaderInner.style.paddingLeft="0px",this.loaderInner.style.paddingRight="0px"}setLoadingState(e){e?this.root.classList.add("is-loading"):this.root.classList.remove("is-loading")}hasDisplayLag(){return lf.some(e=>this.loaderDisplay[e]!==this.loaderStats[e])}scheduleLoaderRender(){this.loaderDisplayRaf!==null||this.destroyed||(this.loaderDisplayRaf=requestAnimationFrame(()=>this.advanceLoaderDisplay()))}fadeOutLoaderImmediately(){!this.loaderOverlay||this.destroyed||this.loaderOverlay.classList.contains("is-hidden")||this.setLoaderVisible(!1,0)}advanceLoaderDisplay(){if(this.destroyed){this.loaderDisplayRaf=null;return}this.loaderDisplayRaf=null;let e=this.stepLoaderDisplay();this.renderLoaderText(),this.maybeHideLoader(),e&&this.scheduleLoaderRender()}stepLoaderDisplay(){let e=!1;for(let t of lf){let i=this.loaderStats[t],n=this.loaderDisplay[t];if(n===i)continue;e=!0;let s=i-n,o=Math.abs(s),a=Math.ceil(o*.18),l=o>10?Math.min(o,Math.max(1,Math.floor(Math.random()*Math.min(6,o)))):0,c=Math.max(1,a+l),h=s>0?1:-1,u=n+h*c;h>0&&u>i||h<0&&u<i?this.loaderDisplay[t]=i:this.loaderDisplay[t]=u}return e}prepareLoaderForSources(e){this.loaderHideTimer!==null&&(window.clearTimeout(this.loaderHideTimer),this.loaderHideTimer=null),this.loaderSession+=1,this.loaderPaddingTarget=this.resolveLoaderPaddingTarget(),this.updateLoaderPadding(),this.setLoadingState(!0);let t=e.filter(n=>n.type==="image").length,i=e.filter(n=>n.type==="video").length;this.loaderStats={...this.loaderStats,totalItems:e.length,texturesTotal:e.length,texturesReady:0,imagesTotal:t,imagesReady:0,videosTotal:i,videosReady:0,videoMetadataReady:0,meshesBound:0,introComplete:!1},lf.forEach(n=>{this.loaderDisplay[n]=0}),this.setLoaderVisible(!0),this.renderLoaderText(),this.refreshLoaderStatus()}setLoaderVisible(e,t=0){if(!this.loaderOverlay||this.destroyed)return;if(e){this.loaderHideTimer!==null&&(window.clearTimeout(this.loaderHideTimer),this.loaderHideTimer=null),this.loaderOverlay.classList.remove("is-hidden");return}let i=()=>{this.loaderOverlay.classList.add("is-hidden"),this.loaderHideTimer=null};this.loaderHideTimer!==null&&(window.clearTimeout(this.loaderHideTimer),this.loaderHideTimer=null),t>0?this.loaderHideTimer=window.setTimeout(i,t):i()}trackMediaBinding(e,t,i){if(!(t!==this.loaderSession||this.destroyed)){if(this.loaderStats.meshesBound=Math.min(this.loaderStats.meshesBound+1,this.loaderStats.totalItems),this.loaderStats.texturesReady=Math.min(this.loaderStats.texturesReady+1,this.loaderStats.texturesTotal),e.type==="image")this.loaderStats.imagesReady=Math.min(this.loaderStats.imagesReady+1,this.loaderStats.imagesTotal);else{this.loaderStats.videosReady=Math.min(this.loaderStats.videosReady+1,this.loaderStats.videosTotal);let n=()=>{t!==this.loaderSession||this.destroyed||this.markVideoMetadataReady(t)};i==null||i.then(n).catch(n)}this.refreshLoaderStatus()}}markVideoMetadataReady(e){e!==this.loaderSession||this.destroyed||this.loaderStats.videosTotal<=0||this.loaderStats.videoMetadataReady>=this.loaderStats.videosTotal||(this.loaderStats.videoMetadataReady=Math.min(this.loaderStats.videoMetadataReady+1,this.loaderStats.videosTotal),this.refreshLoaderStatus(),this.maybeHideLoader())}formatLoaderCount(e,t){return t<=0?"0/0":`${Math.min(t,Math.max(0,Math.round(e)))}/${t}`}refreshLoaderStatus(){let e=this.loaderStats;e.status="Loading media...",this.renderLoaderText(),this.hasDisplayLag()&&this.scheduleLoaderRender()}completeLoaderSequence(e){e!==this.loaderSession||this.destroyed||this.loaderStats.introComplete||(this.loaderStats.introComplete=!0,this.setLoadingState(!1),this.refreshLoaderStatus(),this.maybeHideLoader(),this.handleUserInteraction())}maybeHideLoader(){this.destroyed||this.loaderStats.introComplete&&(this.loaderStats.texturesTotal>0&&this.loaderStats.texturesReady<this.loaderStats.texturesTotal||this.loaderStats.videosTotal>0&&this.loaderStats.videoMetadataReady<this.loaderStats.videosTotal||this.hasDisplayLag()||this.loaderOverlay.classList.contains("is-hidden")||this.setLoaderVisible(!1,900))}normalizeAspect(e){return!Number.isFinite(e)||!e?1:Math.min(Math.max(e,.05),20)}updateBindingAspect(e,t){var u,d,f,_;let i=this.normalizeAspect(t),n=e.baseScale.x||e0,s=n*i;e.baseScale.x=n,e.baseScale.y=s;let o=this.featured===e&&((u=this.focusState)==null?void 0:u.binding)===e,l=this.rollover===e&&!o?af:1,c=n*l,h=s*l;if(o&&this.focusState){let g=this.getFocusPose(e);(d=this.focusState.scaleTween)==null||d.kill(),this.focusState.scaleTween=j.to(e.mesh.scale,{x:g.scaledW,y:g.scaledH,duration:.45,ease:"power3.out",overwrite:"auto"});let m=this.mode!=="focused";(f=this.focusState.cameraTween)==null||f.kill(),this.focusState.cameraTween=j.to(this.camera.position,{x:g.camPos.x,y:g.camPos.y,z:g.camPos.z,duration:.6,ease:"power3.inOut",overwrite:"auto",onUpdate:()=>{this.controls.update()},onComplete:()=>{m&&(this.mode="focused",this.updateVideoPlayback(),e.videoElement&&e.videoElement.play().catch(()=>{}))}}),(_=this.focusState.targetTween)==null||_.kill(),this.focusState.targetTween=j.to(this.controls.target,{x:g.target.x,y:g.target.y,z:g.target.z,duration:.6,ease:"power3.inOut",overwrite:"auto",onUpdate:()=>{this.controls.update()}});return}j.to(e.mesh.scale,{x:c,y:h,duration:.25,ease:"power2.out",overwrite:"auto"})}async createMaterial(e){var a,l,c,h;if(e.type==="video"){let u=document.createElement("video");u.preload="metadata",u.loop=!0,u.muted=!0,u.autoplay=!0,u.playsInline=!0,u.crossOrigin="anonymous",u.setAttribute("playsinline","true"),u.setAttribute("muted","true"),u.src=e.src;let d=()=>{u.play().catch(()=>{})};u.addEventListener("loadeddata",d,{once:!0}),d();let f=()=>{},_=!1,g=null,m=T=>{_||(_=!0,f(T))},p=new Promise(T=>{f=T}),M=()=>{let T=u.videoWidth,C=u.videoHeight;T>0&&C>0?m(C/T):m(null)};if(u.readyState>=HTMLMediaElement.HAVE_METADATA&&u.videoWidth>0&&u.videoHeight>0){let T=u.videoWidth,C=u.videoHeight;g=T>0&&C>0?C/T:null,m(g)}else u.addEventListener("loadedmetadata",M,{once:!0}),u.addEventListener("error",()=>{m(null)},{once:!0});let b=new oa(u);b.minFilter=Ut,b.magFilter=Ut,b.colorSpace=Nt,b.generateMipmaps=!1,b.premultiplyAlpha=!0,b.needsUpdate=!0;let S=new Jn({map:b,transparent:!0,depthWrite:!1,side:Si,alphaTest:.001});return S.premultipliedAlpha=!0,{material:S,texture:b,videoElement:u,intrinsicAspect:g,intrinsicAspectPromise:p}}let t=await this.loader.loadAsync(e.src);t.colorSpace=Nt,t.generateMipmaps=!0,t.minFilter=tn,t.magFilter=Ut,t.premultiplyAlpha=!0,t.needsUpdate=!0;let i=this.renderer.capabilities.getMaxAnisotropy();i>1&&(t.anisotropy=Math.min(i,4));let n=null,s=t.image;if(s){let u=(l=(a=s.naturalWidth)!=null?a:s.width)!=null?l:0,d=(h=(c=s.naturalHeight)!=null?c:s.height)!=null?h:0;u>0&&d>0&&(n=d/u)}let o=new Jn({map:t,transparent:!0,depthWrite:!1,side:Si,alphaTest:.001});return o.premultipliedAlpha=!0,{material:o,texture:t,intrinsicAspect:n}}onPointerMove(e){if(this.isDragging){this.handleUserInteraction();return}this.handlePassiveInteraction();let t=this.renderer.domElement.getBoundingClientRect();this.pointer.x=(e.clientX-t.left)/t.width*2-1,this.pointer.y=-((e.clientY-t.top)/t.height)*2+1,this.updateHover()}onPointerDown(e){if(this.handleUserInteraction(),e.button!==0)return;let t=this.renderer.domElement.getBoundingClientRect();this.pointer.x=(e.clientX-t.left)/t.width*2-1,this.pointer.y=-((e.clientY-t.top)/t.height)*2+1,this.isDragging=!0,this.pointerDownTime=performance.now(),this.pointerDownCoords={x:e.clientX,y:e.clientY},this.dragStartedOnMedia=!!this.pickBindingAtPointer()}onPointerUp(e){if(this.handleUserInteraction(),!this.isDragging)return;this.isDragging=!1;let t=performance.now()-this.pointerDownTime,i=Math.hypot(e.clientX-this.pointerDownCoords.x,e.clientY-this.pointerDownCoords.y),n=i<12&&t<250,s=!n&&i>=4;if(this.dragStartedOnMedia&&s&&this.renderer.domElement.classList.remove("is-hovering"),this.dragStartedOnMedia=!1,!n)return;let o=this.renderer.domElement.getBoundingClientRect();this.pointer.x=(e.clientX-o.left)/o.width*2-1,this.pointer.y=-((e.clientY-o.top)/o.height)*2+1,this.handleClick()}onResize(){this.handleUserInteraction();let e=this.viewportWidth,t=this.viewportHeight;this.camera.aspect=Math.max(1e-4,e/Math.max(1,t)),this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t,!1),this.focusPixelRatioActive?this.applyFocusRendererPixelRatio():this.applyIdleRendererPixelRatio(),this.controls.handleResize(),this.recalcDefaultCameraPose(),this.updateLoaderPadding(),this.renderFrame()}onKeydown(e){if(this.handleUserInteraction(),e.key==="Escape"){this.releaseFocus();return}if(!this.featured||this.mode!=="focused"||!["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(e.key))return;let i=this.mediaBindings.filter(o=>o!==this.featured);if(!i.length)return;e.preventDefault();let n=Math.floor(Math.random()*i.length),s=i[n];this.focusBinding(s)}updateHover(){var i,n;if(this.mode==="transitioning"){this.clearRollover(),this.renderer.domElement.classList.remove("is-hovering");return}let e=this.pickBindingAtPointer(),t=!!(e&&e!==this.featured);this.renderer.domElement.classList.toggle("is-hovering",t),e!==this.rollover&&(this.rollover&&this.rollover!==this.featured&&((i=this.rollover.hoverTween)==null||i.kill(),j.to(this.rollover.mesh.scale,{x:this.rollover.baseScale.x,y:this.rollover.baseScale.y,duration:.22,ease:"power2.out"})),this.rollover=e||null,this.rollover&&this.rollover!==this.featured&&((n=this.rollover.hoverTween)==null||n.kill(),this.rollover.hoverTween=j.to(this.rollover.mesh.scale,{x:this.rollover.baseScale.x*af,y:this.rollover.baseScale.y*af,duration:.28,ease:"power2.out"})),this.setMediaOpacity(this.featured,this.rollover))}clearRollover(e){var t;this.rollover&&(e&&this.rollover===e||((t=this.rollover.hoverTween)==null||t.kill(),this.rollover.mesh.scale.set(this.rollover.baseScale.x,this.rollover.baseScale.y,1),this.rollover=null,this.renderer.domElement.classList.remove("is-hovering")))}handleClick(){this.handleUserInteraction();let e=this.pickBindingAtPointer();if(e){if(this.featured&&e===this.featured)return;this.focusBinding(e);return}(this.mode==="focused"||this.mode==="transitioning")&&this.releaseFocus()}pickBindingAtPointer(){var i;this.raycaster.setFromCamera(this.pointer,this.camera);let e=this.raycaster.intersectObjects(this.mediaGroup.children,!1);if(!e.length)return null;let t=e[0].object;return(i=this.mediaBindings.find(n=>n.mesh===t))!=null?i:null}getFocusPose(e){let i=this.renderer.domElement.clientWidth||window.innerWidth||1920,n=this.renderer.domElement.clientHeight||window.innerHeight||1080,s=i/n,o=e.baseScale.x*1.85,a=e.baseScale.y*1.85,l=this.camera.fov*Math.PI/180,c=2*Math.atan(Math.tan(l/2)*s),h=a/.86/(2*Math.tan(l/2)),u=o/.86/(2*Math.tan(c/2)),d=Math.max(h,u);this.mediaGroup.updateMatrixWorld(!0);let f=e.mesh.getWorldPosition(new G),_=f.clone().normalize(),g=this.controls.minDistance*1.2,m=this.controls.maxDistance*.7,p=Math.min(Math.max(d,g),m),M=f.clone().add(_.multiplyScalar(p)),b=f,S=e.mesh.getWorldQuaternion(new yi),T=new G(0,1,0).applyQuaternion(S).normalize();return(!Number.isFinite(T.lengthSq())||Math.abs(T.dot(_))>.985)&&T.set(0,1,0),{camPos:M,target:b,up:T,scaledW:o,scaledH:a}}setMediaOpacity(e,t,i=.25){let n=!!e;this.mediaBindings.forEach(s=>{var c,h;let o=!!(e&&s===e),l=o||!!(t&&s===t&&!o)?1:n?.5:1;if(s.material.transparent=!0,i<=0){(c=s.opacityTween)==null||c.kill(),s.opacityTween=null,s.material.opacity=l,s.opacityTarget=l;return}s.opacityTarget!==void 0&&Math.abs(s.opacityTarget-l)<.001||(s.opacityTarget=l,(h=s.opacityTween)==null||h.kill(),s.opacityTween=j.to(s.material,{opacity:l,duration:i,ease:"power2.out",overwrite:"auto",onComplete:()=>{s.opacityTween=null,s.opacityTarget=l}}))})}updateVideoPlayback(){}focusBinding(e){var n,s,o,a,l;if(this.handleUserInteraction(),this.mode==="transitioning")return;this.clearRollover(e),this.renderer.domElement.classList.remove("is-hovering"),(n=e.hoverTween)==null||n.kill(),this.mode="transitioning",this.applyFocusRendererPixelRatio(),this.root.classList.add("archive-sphere--focused"),document.body.classList.add("archive-sphere--focused");let t=this.getFocusPose(e);this.focusState&&((s=this.focusState.cameraTween)==null||s.kill(),(o=this.focusState.targetTween)==null||o.kill(),(a=this.focusState.scaleTween)==null||a.kill(),(l=this.focusState.upTween)==null||l.kill()),this.featured&&this.featured!==e&&j.to(this.featured.mesh.scale,{x:this.featured.baseScale.x,y:this.featured.baseScale.y,duration:.35,ease:"power2.out"}),this.featured=e,this.rollover=null,this.focusState={binding:e};let i=this.focusState;i&&this.animateCameraUpTo(t.up,i,.9),this.setMediaOpacity(this.featured,null,.9),this.focusState.scaleTween=j.to(e.mesh.scale,{x:t.scaledW,y:t.scaledH,duration:.6,ease:"power3.out"}),this.focusState.cameraTween=j.to(this.camera.position,{x:t.camPos.x,y:t.camPos.y,z:t.camPos.z,duration:.9,ease:"power3.inOut",onUpdate:()=>{this.controls.update()},onComplete:()=>{this.mode="focused",this.updateVideoPlayback(),e.videoElement&&e.videoElement.play().catch(()=>{})}}),this.focusState.targetTween=j.to(this.controls.target,{x:t.target.x,y:t.target.y,z:t.target.z,duration:.9,ease:"power3.inOut",onUpdate:()=>{this.controls.update()}})}releaseFocus(e=!1){var s,o,a,l,c,h,u;if(this.handleUserInteraction(),this.mode==="idle"){this.applyIdleRendererPixelRatio(),this.root.classList.remove("archive-sphere--focused"),document.body.classList.remove("archive-sphere--focused"),this.renderer.domElement.classList.remove("is-hovering"),this.clearRollover(),this.rollover=null,this.featured=null,this.setMediaOpacity(null,null,0);return}let t=this.focusState;this.focusState=null,this.mode="transitioning",(s=t==null?void 0:t.cameraTween)==null||s.kill(),(o=t==null?void 0:t.targetTween)==null||o.kill(),(a=t==null?void 0:t.scaleTween)==null||a.kill(),(l=t==null?void 0:t.upTween)==null||l.kill();let i=(c=t==null?void 0:t.binding)!=null?c:null;if(this.clearRollover(),this.rollover=null,this.renderer.domElement.classList.remove("is-hovering"),this.featured=null,e){i&&((h=i.hoverTween)==null||h.kill(),i.mesh.scale.set(i.baseScale.x,i.baseScale.y,1)),this.setMediaOpacity(null,null,0),this.camera.position.copy(this.defaultCameraPosition),this.controls.target.copy(this.defaultCameraTarget),this.camera.up.copy(this.defaultCameraUp),this.camera.updateProjectionMatrix(),this.controls.update(),this.mode="idle",this.root.classList.remove("archive-sphere--focused"),document.body.classList.remove("archive-sphere--focused"),this.updateVideoPlayback(),this.applyIdleRendererPixelRatio();return}this.setMediaOpacity(null,null,.9),i&&((u=i.hoverTween)==null||u.kill(),j.to(i.mesh.scale,{x:i.baseScale.x,y:i.baseScale.y,duration:.5,ease:"power2.out"}));let n=()=>{this.mode="idle",this.root.classList.remove("archive-sphere--focused"),document.body.classList.remove("archive-sphere--focused"),this.updateVideoPlayback(),this.applyIdleRendererPixelRatio()};j.to(this.camera.position,{x:this.defaultCameraPosition.x,y:this.defaultCameraPosition.y,z:this.defaultCameraPosition.z,duration:.9,ease:"power3.inOut",onUpdate:()=>{this.controls.update()}}),j.to(this.controls.target,{x:this.defaultCameraTarget.x,y:this.defaultCameraTarget.y,z:this.defaultCameraTarget.z,duration:.9,ease:"power3.inOut",onUpdate:()=>{this.controls.update()},onComplete:n}),this.camera.up.copy(this.defaultCameraUp),this.camera.updateProjectionMatrix()}prepareIntroState(){var e;(e=this.introTimeline)==null||e.kill(),this.introTimeline=null,this.controls.enabled=!1,this.mediaGroup.position.set(0,-this.radius*.32,0),this.mediaGroup.scale.set(.8,.8,.8),this.mediaGroup.rotation.x=.35+(Math.random()-.5)*.25,this.mediaBindings.forEach(t=>{t.material.transparent=!0,t.material.opacity=0}),this.renderFrame()}playIntroAnimation(){var t;(t=this.introTimeline)==null||t.kill();let e=this.loaderSession;if(this.introTimeline=j.timeline({defaults:{ease:"power3.out"},onUpdate:()=>this.renderFrame(),onComplete:()=>{this.mediaGroup.scale.set(1,1,1),this.mediaGroup.position.set(0,0,0),this.mediaGroup.rotation.x=0,this.controls.enabled=!0,this.recalcDefaultCameraPose(),this.controls.update(),this.renderFrame(),this.completeLoaderSequence(e)}}),this.introTimeline.to(this.mediaGroup.position,{y:0,duration:1.6},0),this.introTimeline.to(this.mediaGroup.scale,{x:1,y:1,z:1,duration:1.6},0),this.introTimeline.to(this.mediaGroup.rotation,{x:0,y:this.mediaGroup.rotation.y+Math.PI*.6,duration:2.25,ease:"power2.out"},0),this.mediaBindings.forEach((i,n)=>{var s;i.material.opacity=0,i.material.transparent=!0,(s=this.introTimeline)==null||s.to(i.material,{opacity:1,duration:.9,ease:"power2.out"},.4+n*.02)}),this.mediaBindings.length&&this.introTimeline.call(()=>{this.fadeOutLoaderImmediately()},[],.4),this.mediaBindings.length){let i=.4+(this.mediaBindings.length-1)*.02+.9;this.introTimeline.call(()=>{this.controls.enabled=!0,this.controls.update(),this.renderFrame(),this.completeLoaderSequence(e)},[],i)}else this.fadeOutLoaderImmediately(),this.controls.enabled=!0,this.completeLoaderSequence(e)}animate(){if(this.destroyed)return;this.animationFrame=requestAnimationFrame(()=>this.animate());let e=this.clock.getDelta();this.applyResponsiveControls(),this.controls.update(),this.updateScreensaver(e),this.renderFrame()}renderFrame(){this.destroyed||this.renderer.render(this.scene,this.camera)}}});var n0={};pf(n0,{destroyArchiveSphere:()=>HT,initializeArchiveSphere:()=>kT,refreshArchiveSphere:()=>zT});async function kT(r){return sr||Sa||(Sa=(async()=>{try{let e={container:r},t=typeof window!="undefined"?window.innerWidth<=480:!1,i=t&&Uu.length?Uu:Km,n=t&&Bu.length?Bu:Jm,s=[...i,...n];s.length>0&&(e.items=s);let o=new ph(e);return await o.initialize(),o?(sr=o,o):null}catch{return null}finally{Sa=null}})(),Sa)}function HT(){sr&&(sr.destroy(),sr=null)}function zT(){sr&&sr.refresh()}var sr,Sa,r0=Yt(()=>{"use strict";Qm();i0();sr=null,Sa=null});var on=A0(mf(),1);var Mh=(r=document)=>r.documentElement.getAttribute("data-wf-site");var Eh=async r=>{var t,i;let{Webflow:e}=window;if(!(!e||!("destroy"in e)||!("ready"in e)||!("require"in e))&&!(r&&!r.length)){if(r||(e.destroy(),e.ready()),!r||r.includes("ix2")){let n=e.require("ix2");if(n){let{store:s,actions:o}=n,{eventState:a}=s.getState().ixSession,l=Object.entries(a);r||n.destroy(),n.init(),await Promise.all(l.map(c=>s.dispatch(o.eventStateChanged(...c))))}}if(!r||r.includes("commerce")){let n=e.require("commerce"),s=Mh();n&&s&&(n.destroy(),n.init({siteId:s,apiUrl:"https://render.webflow.com"}))}if(r!=null&&r.includes("lightbox")&&((t=e.require("lightbox"))==null||t.ready()),r!=null&&r.includes("slider")){let n=e.require("slider");n&&(n.redraw(),n.ready())}return r!=null&&r.includes("tabs")&&((i=e.require("tabs"))==null||i.redraw()),new Promise(n=>e.push(()=>n(void 0)))}};li();li();var ay=Object.create,{getPrototypeOf:ly,defineProperty:Mp,getOwnPropertyNames:cy}=Object,hy=Object.prototype.hasOwnProperty,uy=(r,e,t)=>{t=r!=null?ay(ly(r)):{};let i=e||!r||!r.__esModule?Mp(t,"default",{value:r,enumerable:!0}):t;for(let n of cy(r))hy.call(i,n)||Mp(i,n,{get:()=>r[n],enumerable:!0});return i},dy=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports),fy=dy((r,e)=>{(function(t,i){typeof r=="object"&&typeof e!="undefined"?e.exports=i():typeof define=="function"&&define.amd?define(i):(t||self).virtualScroll=i()})(r,function(){var t=0;function i(g){return"__private_"+t+++"_"+g}function n(g,m){if(!Object.prototype.hasOwnProperty.call(g,m))throw new TypeError("attempted to use private field on non-instance");return g}function s(){}s.prototype={on:function(g,m,p){var M=this.e||(this.e={});return(M[g]||(M[g]=[])).push({fn:m,ctx:p}),this},once:function(g,m,p){var M=this;function b(){M.off(g,b),m.apply(p,arguments)}return b._=m,this.on(g,b,p)},emit:function(g){for(var m=[].slice.call(arguments,1),p=((this.e||(this.e={}))[g]||[]).slice(),M=0,b=p.length;M<b;M++)p[M].fn.apply(p[M].ctx,m);return this},off:function(g,m){var p=this.e||(this.e={}),M=p[g],b=[];if(M&&m)for(var S=0,T=M.length;S<T;S++)M[S].fn!==m&&M[S].fn._!==m&&b.push(M[S]);return b.length?p[g]=b:delete p[g],this}};var o=s;o.TinyEmitter=s;var a,l="virtualscroll",c=i("options"),h=i("el"),u=i("emitter"),d=i("event"),f=i("touchStart"),_=i("bodyTouchAction");return function(){function g(p){var M=this;Object.defineProperty(this,c,{writable:!0,value:void 0}),Object.defineProperty(this,h,{writable:!0,value:void 0}),Object.defineProperty(this,u,{writable:!0,value:void 0}),Object.defineProperty(this,d,{writable:!0,value:void 0}),Object.defineProperty(this,f,{writable:!0,value:void 0}),Object.defineProperty(this,_,{writable:!0,value:void 0}),this._onWheel=function(b){var S=n(M,c)[c],T=n(M,d)[d];T.deltaX=b.wheelDeltaX||-1*b.deltaX,T.deltaY=b.wheelDeltaY||-1*b.deltaY,a.isFirefox&&b.deltaMode===1&&(T.deltaX*=S.firefoxMultiplier,T.deltaY*=S.firefoxMultiplier),T.deltaX*=S.mouseMultiplier,T.deltaY*=S.mouseMultiplier,M._notify(b)},this._onMouseWheel=function(b){var S=n(M,d)[d];S.deltaX=b.wheelDeltaX?b.wheelDeltaX:0,S.deltaY=b.wheelDeltaY?b.wheelDeltaY:b.wheelDelta,M._notify(b)},this._onTouchStart=function(b){var S=b.targetTouches?b.targetTouches[0]:b;n(M,f)[f].x=S.pageX,n(M,f)[f].y=S.pageY},this._onTouchMove=function(b){var S=n(M,c)[c];S.preventTouch&&!b.target.classList.contains(S.unpreventTouchClass)&&b.preventDefault();var T=n(M,d)[d],C=b.targetTouches?b.targetTouches[0]:b;T.deltaX=(C.pageX-n(M,f)[f].x)*S.touchMultiplier,T.deltaY=(C.pageY-n(M,f)[f].y)*S.touchMultiplier,n(M,f)[f].x=C.pageX,n(M,f)[f].y=C.pageY,M._notify(b)},this._onKeyDown=function(b){var S=n(M,d)[d];S.deltaX=S.deltaY=0;var T=window.innerHeight-40;switch(b.keyCode){case 37:case 38:S.deltaY=n(M,c)[c].keyStep;break;case 39:case 40:S.deltaY=-n(M,c)[c].keyStep;break;case 32:S.deltaY=T*(b.shiftKey?1:-1);break;default:return}M._notify(b)},n(this,h)[h]=window,p&&p.el&&(n(this,h)[h]=p.el,delete p.el),a||(a={hasWheelEvent:"onwheel"in document,hasMouseWheelEvent:"onmousewheel"in document,hasTouch:"ontouchstart"in document,hasTouchWin:navigator.msMaxTouchPoints&&navigator.msMaxTouchPoints>1,hasPointer:!!window.navigator.msPointerEnabled,hasKeyDown:"onkeydown"in document,isFirefox:navigator.userAgent.indexOf("Firefox")>-1}),n(this,c)[c]=Object.assign({mouseMultiplier:1,touchMultiplier:2,firefoxMultiplier:15,keyStep:120,preventTouch:!1,unpreventTouchClass:"vs-touchmove-allowed",useKeyboard:!0,useTouch:!0},p),n(this,u)[u]=new o,n(this,d)[d]={y:0,x:0,deltaX:0,deltaY:0},n(this,f)[f]={x:null,y:null},n(this,_)[_]=null,n(this,c)[c].passive!==void 0&&(this.listenerOptions={passive:n(this,c)[c].passive})}var m=g.prototype;return m._notify=function(p){var M=n(this,d)[d];M.x+=M.deltaX,M.y+=M.deltaY,n(this,u)[u].emit(l,{x:M.x,y:M.y,deltaX:M.deltaX,deltaY:M.deltaY,originalEvent:p})},m._bind=function(){a.hasWheelEvent&&n(this,h)[h].addEventListener("wheel",this._onWheel,this.listenerOptions),a.hasMouseWheelEvent&&n(this,h)[h].addEventListener("mousewheel",this._onMouseWheel,this.listenerOptions),a.hasTouch&&n(this,c)[c].useTouch&&(n(this,h)[h].addEventListener("touchstart",this._onTouchStart,this.listenerOptions),n(this,h)[h].addEventListener("touchmove",this._onTouchMove,this.listenerOptions)),a.hasPointer&&a.hasTouchWin&&(n(this,_)[_]=document.body.style.msTouchAction,document.body.style.msTouchAction="none",n(this,h)[h].addEventListener("MSPointerDown",this._onTouchStart,!0),n(this,h)[h].addEventListener("MSPointerMove",this._onTouchMove,!0)),a.hasKeyDown&&n(this,c)[c].useKeyboard&&document.addEventListener("keydown",this._onKeyDown)},m._unbind=function(){a.hasWheelEvent&&n(this,h)[h].removeEventListener("wheel",this._onWheel),a.hasMouseWheelEvent&&n(this,h)[h].removeEventListener("mousewheel",this._onMouseWheel),a.hasTouch&&(n(this,h)[h].removeEventListener("touchstart",this._onTouchStart),n(this,h)[h].removeEventListener("touchmove",this._onTouchMove)),a.hasPointer&&a.hasTouchWin&&(document.body.style.msTouchAction=n(this,_)[_],n(this,h)[h].removeEventListener("MSPointerDown",this._onTouchStart,!0),n(this,h)[h].removeEventListener("MSPointerMove",this._onTouchMove,!0)),a.hasKeyDown&&n(this,c)[c].useKeyboard&&document.removeEventListener("keydown",this._onKeyDown)},m.on=function(p,M){n(this,u)[u].on(l,p,M);var b=n(this,u)[u].e;b&&b[l]&&b[l].length===1&&this._bind()},m.off=function(p,M){n(this,u)[u].off(l,p,M);var b=n(this,u)[u].e;(!b[l]||b[l].length<=0)&&this._unbind()},m.destroy=function(){n(this,u)[u].off(),this._unbind()},g}()})}),py=uy(fy(),1);function Ep(r,e,t,i){let n=1-Math.exp(-t*i);return r+(e-r)*n}function wp(r,e){let t=r%e;return Math.abs(t)>e/2&&(t=t>0?t-e:t+e),t}var my={infinite:!0,snap:!0,dragSensitivity:.005,lerpFactor:.3,scrollSensitivity:1,snapStrength:.1,speedDecay:.85,bounceLimit:1,virtualScroll:{mouseMultiplier:.5,touchMultiplier:2,firefoxMultiplier:30,useKeyboard:!1,passive:!0},setOffset:({itemWidth:r,wrapperWidth:e})=>r,scrollInput:!1},ls,Mo,cs,dn,Bn,fn,hs,qa,Tp,us,Xa,Ya,Ap,Eo,bu,ja,Cp,br,bo,xr,xo,Sr,So,Za,Rp,$a,Pp,Ka,Lp,wo,xu,yu=class{constructor(e,t={}){wt(this,qa);wt(this,us);wt(this,Ya);wt(this,Eo);wt(this,ja);wt(this,br);wt(this,xr);wt(this,Sr);wt(this,Za);wt(this,$a);wt(this,Ka);wt(this,wo);lt(this,"speed",0);wt(this,ls,0);wt(this,Mo,0);wt(this,cs,0);lt(this,"deltaTime",0);wt(this,dn,!0);wt(this,Bn,!1);wt(this,fn,0);wt(this,hs,0);lt(this,"config");lt(this,"wrapper");lt(this,"items");lt(this,"viewport");lt(this,"isDragging",!1);lt(this,"dragStart",0);lt(this,"dragStartTarget",0);lt(this,"isVisible",!1);lt(this,"current",0);lt(this,"target",0);lt(this,"maxScroll",0);lt(this,"resizeTimeout");lt(this,"virtualScroll");lt(this,"observer");lt(this,"touchStartY");lt(this,"touchStartX");lt(this,"touchPreviousX");lt(this,"scrollDirection");lt(this,"parallaxValues");lt(this,"webglValue",0);lt(this,"onSlideChange");lt(this,"onResize");lt(this,"onUpdate");this.config={...my,...t},t.onSlideChange&&(this.onSlideChange=t.onSlideChange),t.onResize&&(this.onResize=t.onResize),t.onUpdate&&(this.onUpdate=t.onUpdate),delete this.config.onSlideChange,delete this.config.onResize,delete this.config.onUpdate,this.wrapper=e,this.items=[...e.children],this.current=0,this.target=0,this.isDragging=!1,this.dragStart=0,this.dragStartTarget=0,this.isVisible=!1,Zt(this,fn,0),Zt(this,hs,0),ct(this,us,Xa).call(this),ct(this,qa,Tp).call(this),ct(this,Ya,Ap).call(this),this.wrapper.style.cursor="grab",ct(this,us,Xa).call(this),ct(this,ja,Cp).call(this)}update(){var t;if(!this.isVisible||!jt(this,dn))return;let e=performance.now();if(this.deltaTime=(e-jt(this,cs))/1e3,Zt(this,cs,e),this.config.snap&&!this.isDragging){let i=Math.round(this.target)-this.target;this.target+=i*this.config.snapStrength}if(this.current=Ep(this.current,this.target,1/this.config.lerpFactor,this.deltaTime),this.config.infinite){let i=Math.round(-this.current),n=this.items.length,s=(i%n+n)%n;ct(this,wo,xu).call(this,s),ct(this,$a,Pp).call(this)}else ct(this,wo,xu).call(this,Math.round(Math.abs(this.current))),ct(this,Za,Rp).call(this);ct(this,Ka,Lp).call(this),(t=this.onUpdate)==null||t.call(this,this)}goToNext(){this.config.infinite?this.target=Math.round(this.target-1):this.target=Math.max(this.maxScroll,Math.round(this.target-1))}goToPrev(){this.config.infinite?this.target=Math.round(this.target+1):this.target=Math.min(0,Math.round(this.target+1))}goToIndex(e){this.target=-e}set snap(e){this.config.snap=e}getProgress(){let e=this.items.length;return Math.abs(this.current)%e/e}destroy(){this.kill(),window.removeEventListener("mousemove",e=>ct(this,xr,xo).call(this,e)),window.removeEventListener("mouseup",()=>ct(this,Sr,So).call(this)),window.removeEventListener("touchmove",e=>{let t=e.touches[0];ct(this,xr,xo).call(this,t)}),window.removeEventListener("touchend",()=>ct(this,Sr,So).call(this)),this.wrapper.removeEventListener("mousedown",e=>ct(this,br,bo).call(this,e)),this.wrapper.removeEventListener("touchstart",e=>{let t=e.touches[0];ct(this,br,bo).call(this,t)}),this.resizeTimeout&&clearTimeout(this.resizeTimeout),this.virtualScroll&&this.config.scrollInput&&this.virtualScroll.destroy(),this.observer&&this.observer.disconnect()}get currentSlide(){return jt(this,fn)}kill(){Zt(this,dn,!1),this.items.forEach(e=>{e.style.transform=""}),this.current=0,this.target=0,this.speed=0,Zt(this,ls,0),this.touchPreviousX=void 0}init(){Zt(this,dn,!0),Zt(this,cs,performance.now())}set paused(e){Zt(this,Bn,e)}get paused(){return jt(this,Bn)}get progress(){if(this.config.infinite){let e=-this.target,t=this.items.length;return(e%t+t)%t/(t-1)}else{let e=Math.abs(this.current),t=Math.abs(this.maxScroll);return Math.max(0,Math.min(1,e/t))}}resize(){ct(this,us,Xa).call(this);let e=jt(this,dn),t=this.isVisible;Zt(this,dn,!0),this.isVisible=!0,this.update(),Zt(this,dn,e),this.isVisible=t}};ls=new WeakMap,Mo=new WeakMap,cs=new WeakMap,dn=new WeakMap,Bn=new WeakMap,fn=new WeakMap,hs=new WeakMap,qa=new WeakSet,Tp=function(){let e={root:null,rootMargin:"50px",threshold:0};this.observer=new IntersectionObserver(t=>{t.forEach(i=>{this.isVisible=i.isIntersecting})},e),this.observer.observe(this.wrapper)},us=new WeakSet,Xa=function(){this.viewport={itemWidth:this.items[0].getBoundingClientRect().width,wrapperWidth:this.wrapper.clientWidth,totalWidth:this.items.reduce((e,t)=>e+t.clientWidth,0)},Zt(this,Mo,this.config.setOffset(this.viewport)),this.maxScroll=-(this.viewport.totalWidth-jt(this,Mo))/this.viewport.itemWidth,queueMicrotask(()=>{var e;(e=this.onResize)==null||e.call(this,this)})},Ya=new WeakSet,Ap=function(){let e=l=>ct(this,br,bo).call(this,l),t=l=>ct(this,xr,xo).call(this,l),i=()=>ct(this,Sr,So).call(this);this.wrapper.addEventListener("mousedown",e),window.addEventListener("mousemove",t),window.addEventListener("mouseup",i);let n=5,s=l=>{let c=l.touches[0];this.touchStartY=c.clientY,this.touchStartX=c.clientX,this.touchPreviousX=c.clientX,this.scrollDirection=void 0,ct(this,br,bo).call(this,c)},o=l=>{let c=l.touches[0],h=Math.abs(c.clientY-this.touchStartY),u=Math.abs(c.clientX-this.touchStartX);!this.scrollDirection&&(u>n||h>n)&&(this.scrollDirection=u>h?"horizontal":"vertical"),this.scrollDirection==="horizontal"&&(l.preventDefault(),ct(this,xr,xo).call(this,c),this.touchPreviousX=c.clientX)},a=()=>{this.scrollDirection=void 0,this.touchPreviousX=void 0,ct(this,Sr,So).call(this)};this.wrapper.addEventListener("touchstart",s),window.addEventListener("touchmove",o,{passive:!1}),window.addEventListener("touchend",a),new ResizeObserver(()=>{this.resizeTimeout&&clearTimeout(this.resizeTimeout),this.resizeTimeout=setTimeout(()=>this.resize(),10)}).observe(this.wrapper)},Eo=new WeakSet,bu=function(e){if(!this.config.infinite){if(e>this.config.bounceLimit)return this.config.bounceLimit;if(e<this.maxScroll-this.config.bounceLimit)return this.maxScroll-this.config.bounceLimit}return e},ja=new WeakSet,Cp=function(){this.virtualScroll=new py.default({...this.config.virtualScroll,el:this.wrapper});let e=5;this.virtualScroll.on(t=>{if(!this.isDragging&&!jt(this,Bn)){if(t.touchDevice){let s=Math.abs(t.deltaY),o=Math.abs(t.deltaX);if(s<e&&o<e||s>o)return}let i=(this.config.scrollInput?Math.abs(t.deltaX)>Math.abs(t.deltaY)?t.deltaX:t.deltaY:t.deltaX)*this.config.scrollSensitivity*.001,n=this.target+i;this.config.infinite||(n>0?n=0:n<this.maxScroll&&(n=this.maxScroll)),this.target=ct(this,Eo,bu).call(this,n),this.speed=-i*10}})},br=new WeakSet,bo=function(e){jt(this,Bn)||(this.isDragging=!0,this.dragStart=e.clientX,this.dragStartTarget=this.target,this.wrapper.style.cursor="grabbing")},xr=new WeakSet,xo=function(e){if(!this.isDragging||jt(this,Bn))return;let t=e.clientX-this.dragStart,i=this.dragStartTarget+t*this.config.dragSensitivity;if(this.target=ct(this,Eo,bu).call(this,i),"movementX"in e)this.speed+=e.movementX*.01;else{let n=e.clientX,s=this.touchPreviousX||n,o=n-s;this.speed+=o*.01}},Sr=new WeakSet,So=function(){if(this.isDragging=!1,this.wrapper.style.cursor="grab",!this.config.infinite){if(this.target>0)this.target=0;else if(this.target<this.maxScroll)this.target=this.maxScroll;else if(this.config.snap){let e=Math.round(this.target);this.target=Math.min(0,Math.max(this.maxScroll,e))}}else this.config.snap&&(this.target=Math.round(this.target))},Za=new WeakSet,Rp=function(){this.parallaxValues=this.items.map((e,t)=>{let i=this.current*this.viewport.itemWidth;return e.style.transform=`translateX(${i}px)`,i})},$a=new WeakSet,Pp=function(){this.parallaxValues=this.items.map((e,t)=>{let i=this.current+t,n=(wp(i,this.items.length)-t)*this.viewport.itemWidth;return e.style.transform=`translateX(${n}px)`,wp(i,this.items.length)})},Ka=new WeakSet,Lp=function(){Zt(this,ls,Ep(jt(this,ls),this.speed,1/this.config.lerpFactor,this.deltaTime)),this.speed*=this.config.speedDecay},wo=new WeakSet,xu=function(e){var t;jt(this,fn)!==e&&(Zt(this,hs,jt(this,fn)),Zt(this,fn,e),(t=this.onSlideChange)==null||t.call(this,jt(this,fn),jt(this,hs)))};var Ip=yu;Qa();var Np=(()=>{var r,e;return typeof window=="undefined"||typeof document=="undefined"?0:window.innerWidth||((r=document.documentElement)==null?void 0:r.clientWidth)||((e=document.body)==null?void 0:e.clientWidth)||0})(),Li=new Map,Er=null,Co=400,Hp="video[data-src-1080], video[data-src-720]",My={root:null,rootMargin:`${Co}px 0px`,threshold:[0,.5,1]};function Ey(){return Er||(Er=new IntersectionObserver(wy,My)),Er}function wy(r){r.forEach(e=>{let t=e.target;if(!(t instanceof HTMLVideoElement))return;let i=Li.get(t);if(!i)return;i.lastIntersection=e;let n=i.sliderRoot?zp(i.sliderRoot):Ty(e);if(i.isInViewport=n,i.isFilteredOut||i.suppressed){n?i.sliderRoot&&Ro(i):el(i);return}n?Ro(i):el(i)})}function Ty(r){let e=window.innerHeight||document.documentElement.clientHeight||0,{top:t,bottom:i}=r.boundingClientRect;return i>-Co&&t<e+Co}function zp(r){let e=window.innerHeight||document.documentElement.clientHeight||0,t=r.getBoundingClientRect();return t.bottom>-Co&&t.top<e+Co}function Ay(r,e){if(r==null||r==="")return e;let t=r.trim().toLowerCase();return["false","0","no"].includes(t)?!1:["true","1","yes"].includes(t)?!0:e}function Cy(r){var i;if(r.lockedSource)return r.lockedSource;let{hd:e,sd:t}=r.sources;return e&&t?e:(i=e!=null?e:t)!=null?i:null}function Ro(r){let{video:e}=r,t=Cy(r);if(!t||(r.currentSource!==t?(Su(e,t),r.currentSource=t):e.currentSrc||Su(e,t),!r.shouldAutoplay))return;e.readyState<HTMLMediaElement.HAVE_ENOUGH_DATA&&e.load();let i=e.play();i&&typeof i.catch=="function"&&i.catch(()=>{})}function el(r){let{video:e}=r;e.pause()}function Su(r,e){r.setAttribute("src",e),r.load()}function Ry(r){let e=Vp(r.video);if(!e){r.isFilteredOut=!1;return}let t=new MutationObserver(()=>{Up(r)});t.observe(e,{attributes:!0,attributeFilter:["style","class"]}),r.mutationObserver=t,Up(r)}function Up(r){r.filterCheckHandle!==void 0&&cancelAnimationFrame(r.filterCheckHandle),r.filterCheckHandle=requestAnimationFrame(()=>{r.filterCheckHandle=void 0,Py(r)})}function Py(r){let e=Vp(r.video);if(!e){r.isFilteredOut&&(r.isFilteredOut=!1,r.isInViewport&&Ro(r));return}let t=window.getComputedStyle(e),i=t.display==="none"||t.visibility==="hidden"||Number.parseFloat(t.opacity)===0;i!==r.isFilteredOut&&(r.isFilteredOut=i,i?el(r):r.isInViewport&&Ro(r))}function Vp(r){var e;return(e=r.closest(".project-div, .project-item, [data-filter-card], [data-project-card]"))!=null?e:null}function Ly(r){var e;(e=r.mutationObserver)==null||e.disconnect(),r.filterCheckHandle!==void 0&&(cancelAnimationFrame(r.filterCheckHandle),r.filterCheckHandle=void 0),r.isFilteredOut=!1,r.suppressed=!1,r.isInViewport=!1,r.sliderRoot=null,el(r),r.video.removeAttribute("data-mp4-initialized")}function wu(r){return r.dataset.src1080&&r.dataset.src1080.trim().length>0||r.dataset.src720&&r.dataset.src720.trim().length>0||r.hasAttribute("data-src-1080")||r.hasAttribute("data-src-720")}function Iy(r){r.muted=!0,r.loop=!0,r.preload="metadata",r.playsInline=!0,r.controls=!1,r.setAttribute("muted",""),r.setAttribute("playsinline",""),r.setAttribute("preload","metadata"),r.setAttribute("loop",""),r.removeAttribute("controls")}function Dy(r){var i,n,s,o;let e=(n=(i=r.dataset.src1080)!=null?i:r.getAttribute("data-src-1080"))!=null?n:void 0,t=(o=(s=r.dataset.src720)!=null?s:r.getAttribute("data-src-720"))!=null?o:void 0;return{hd:(e==null?void 0:e.trim())||void 0,sd:(t==null?void 0:t.trim())||void 0}}function Gp(r){return r||document}function Oy(r){var t;if(r instanceof HTMLVideoElement)return r.matches("video[data-src-1080], video[data-src-720]")?[r]:[];let e=r instanceof Document?r:(t=r.shadowRoot)!=null?t:r;return Array.from(e.querySelectorAll(Hp))}function Fy(r,e){return e instanceof Document?!0:e.contains(r)}function Mu(r){if(Li.has(r)||!wu(r))return;Iy(r);let e=Dy(r),t=By(e),i={video:r,sources:e,currentSource:null,lockedQuality:t.quality,lockedSource:t.src,shouldAutoplay:Ay(r.dataset.autoplay,!0),isFilteredOut:!1,suppressed:!1,isInViewport:!1,sliderRoot:void 0};Li.set(r,i),r.dataset.mp4Initialized="true",i.lockedSource&&(Su(r,i.lockedSource),i.currentSource=i.lockedSource),Ry(i),Ey().observe(r)}function Bp(r,e){r.sliderRoot=e,r.suppressed=!1,r.isFilteredOut=!1;let t=zp(e);r.isInViewport=t,t&&Ro(r)}function pn(r){let e=Gp(r);To(e);let t=Oy(e);t.length&&t.forEach(i=>{if(!Li.has(i)&&wu(i)){if(Mr(i)){Ao(i,()=>{Mu(i)});return}Mu(i)}})}function tl(r){if(!Li.size)return;let e=Gp(r);Array.from(Li.keys()).filter(i=>Fy(i,e)).forEach(i=>{let n=Li.get(i);if(!n)return;let s=Er;s&&s.unobserve(i),Ly(n),Li.delete(i)}),Er&&Li.size===0&&(Er.disconnect(),Er=null),Fp(e)}function Ny(r){let e=[".embla__slide:not(.is-clone)",".slide",".swiper-slide",".w-slide","[data-slide]","[data-slider-slide]"],t=[];return e.forEach(i=>{r.querySelectorAll(i).forEach(s=>{t.includes(s)||t.push(s)})}),t.length||t.push(r),t}function Uy(r,e){return e<=0||r<0?0:r>=e?e-1:r}var Eu=class{constructor(e,t={}){this.activeIndex=0;this.destroyed=!1;this.debounceTimer=null;var i;this.root=e,this.debounceMs=Math.max(0,(i=t.debounceMs)!=null?i:120),this.slides=t.slides&&t.slides.length?[...t.slides]:Ny(e),kp(this.root,this.root),this.slides.forEach((n,s)=>{this.setSlideState(n,s===this.activeIndex)})}onSlideChange(e){if(this.destroyed||!this.slides.length)return;let t=Uy(e,this.slides.length);if(t===this.activeIndex)return;let i=()=>{this.destroyed||(this.setSlideState(this.slides[this.activeIndex],!1),this.activeIndex=t,this.setSlideState(this.slides[this.activeIndex],!0))};this.debounceMs>0?(this.debounceTimer!==null&&window.clearTimeout(this.debounceTimer),this.debounceTimer=window.setTimeout(i,this.debounceMs)):i()}destroy(){this.destroyed||(this.destroyed=!0,this.debounceTimer!==null&&(window.clearTimeout(this.debounceTimer),this.debounceTimer=null),this.slides.forEach(e=>this.setSlideState(e,!1)),tl(this.root))}setSlideState(e,t){e&&kp(e,this.root)}};function Wp(r,e={}){return new Eu(r,e)}function kp(r,e){To(r),pn(r),r.querySelectorAll(Hp).forEach(i=>{let n=Li.get(i);if(n){Bp(n,e);return}wu(i)&&Ao(i,()=>{Li.has(i)||Mu(i);let s=Li.get(i);s&&Bp(s,e)})})}function By(r){var n,s;let t=Np>0&&Np<=720?["sd","hd"]:["hd","sd"];for(let o of t){let a=o==="hd"?r.hd:r.sd;if(a&&a.trim().length>0)return{quality:o,src:a}}let i=(s=(n=r.hd)!=null?n:r.sd)!=null?s:null;return{quality:null,src:i!=null?i:null}}var Po={infinite:!0,snap:!0,dragSensitivity:.005,lerpFactor:.3,scrollSensitivity:1,snapStrength:.1,speedDecay:.85,bounceLimit:1,scrollInput:!0},Xp={mouseMultiplier:.5,touchMultiplier:2,firefoxMultiplier:30,useKeyboard:!1,passive:!0},ds={enabled:!0,speed:.12,direction:"forward",pauseOnHover:!1,pauseOnInteraction:!0,resumeDelay:1800,initialDelay:1200},ky=5.6,Hy=.0115,Au=new Map,Tu={speedThreshold:.35,settleDelay:160,dispatchThrottle:90},il=".slide, [data-slider-slide], .slider-item";function qp(r){let e=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:void 0,t=e==null?void 0:e.crypto;return t&&typeof t.randomUUID=="function"?`${r}-${t.randomUUID()}`:`${r}-${Math.random().toString(36).slice(2,10)}-${Date.now()}`}function Yp(r,e,t){r.setAttribute("data-smooothy-instance",e),r.dataset.smooothyManaged="true",Au.set(e,t)}var fs=class{constructor(e){this.options=e;this.wrapperEl=null;this.hostEl=null;this.slider=null;this.entranceTimeline=null;this.sliderVideoController=null;this.tickerFn=null;this.isInitialized=!1;this.teardownCallbacks=[];this.clones=[];this.autoScrollState=null;this.touchHoverConfig=null;this.touchHoverEnabled=!1;this.touchHoverState={pointerActive:!1,pointerType:"touch",settleHandle:null};this.hoverSyncState={pointerInside:!1,lastPointer:null,lastMovementTime:0,lastDispatchTime:0,activeSlide:null};this.coarsePointerEnvironment=!1;this.keyboardOptions=null;this.keyboardHandler=null;this.keyboardListenerTarget=null;this.keyboardListenerIsWindow=!1;this.bumpSpacingOptions=null;this.bumpSpacingState={compression:0};this.parallaxOptions=null;this.parallaxTargets=[];this.speedState={lerped:0}}get initialized(){return this.isInitialized}registerPointerObservers(){var M;if(!this.wrapperEl||typeof window=="undefined")return;let e=this.wrapperEl,t="PointerEvent"in window,i=!!(this.touchHoverEnabled&&((M=this.touchHoverConfig)!=null&&M.pointerTypes.has("touch"))),n={capture:!0},s={capture:!0,passive:!0},o=null,a=null,l=null,c=b=>{this.shouldHandlePointer(b.pointerType)&&(this.hoverSyncState.pointerInside=!0,this.storePointer(b),this.syncActiveSlideFromPointer(b),this.setAutoScrollHoverState(!0))},h=b=>{this.shouldHandlePointer(b.pointerType)&&(this.hoverSyncState.pointerInside=!0,this.storePointer(b),this.syncActiveSlideFromPointer(b),this.setAutoScrollHoverState(!0))},u=b=>{if(!this.shouldHandlePointer(b.pointerType))return;if(i&&this.isTouchHoverPointer(b.pointerType)){this.endTouchHover(b);return}this.hoverSyncState.pointerInside=!1;let S=this.snapshotPointer(b);this.hoverSyncState.lastPointer=null,this.clearSyntheticHover(S),this.setAutoScrollHoverState(!1)},d=b=>{if(!this.shouldHandlePointer(b.pointerType))return;if(i&&this.isTouchHoverPointer(b.pointerType)){this.endTouchHover(b,{cancelled:!0});return}this.hoverSyncState.pointerInside=!1;let S=this.snapshotPointer(b);this.hoverSyncState.lastPointer=null,this.clearSyntheticHover(S),this.setAutoScrollHoverState(!1)},f=b=>{!i||!this.isTouchHoverPointer(b.pointerType)||this.beginTouchHover(b)},_=b=>{!i||!this.isTouchHoverPointer(b.pointerType)||this.endTouchHover(b)},g=b=>{this.hoverSyncState.pointerInside=!0,this.storePointer(b),this.syncActiveSlideFromPointer(b),this.setAutoScrollHoverState(!0)},m=b=>{this.hoverSyncState.pointerInside=!0,this.storePointer(b),this.syncActiveSlideFromPointer(b),this.setAutoScrollHoverState(!0)},p=b=>{this.hoverSyncState.pointerInside=!1;let S=this.snapshotPointer(b);this.hoverSyncState.lastPointer=null,this.clearSyntheticHover(S),this.setAutoScrollHoverState(!1)};t?(e.addEventListener("pointerenter",c),e.addEventListener("pointermove",h),e.addEventListener("pointerleave",u),e.addEventListener("pointercancel",d),i&&(e.addEventListener("pointerdown",f,n),e.addEventListener("pointerup",_,n))):(e.addEventListener("mouseenter",g),e.addEventListener("mousemove",m),e.addEventListener("mouseleave",p),i&&(o=b=>{this.beginTouchHover(b)},a=b=>{this.endTouchHover(b)},l=b=>{this.endTouchHover(b,{cancelled:!0})},e.addEventListener("touchstart",o,s),e.addEventListener("touchend",a),e.addEventListener("touchcancel",l))),this.teardownCallbacks.push(()=>{t?(e.removeEventListener("pointerenter",c),e.removeEventListener("pointermove",h),e.removeEventListener("pointerleave",u),e.removeEventListener("pointercancel",d),i&&(e.removeEventListener("pointerdown",f,n),e.removeEventListener("pointerup",_,n))):(e.removeEventListener("mouseenter",g),e.removeEventListener("mousemove",m),e.removeEventListener("mouseleave",p),i&&o&&a&&l&&(e.removeEventListener("touchstart",o,s),e.removeEventListener("touchend",a),e.removeEventListener("touchcancel",l)))})}beginTouchHover(e){var n;if(!this.touchHoverEnabled||!((n=this.touchHoverConfig)!=null&&n.pointerTypes.has("touch")))return;this.touchHoverState.pointerActive=!0,this.touchHoverState.pointerType="touch",this.hoverSyncState.pointerInside=!0,this.storePointer(e);let t=this.snapshotPointer(e,"touch"),i=this.findSlideFromEvent(e,t);i&&this.applySyntheticHover(i,t),this.cancelTouchHoverSettle(),this.setAutoScrollHoverState(!0)}endTouchHover(e,t={}){var n;if(!this.touchHoverEnabled||!((n=this.touchHoverConfig)!=null&&n.pointerTypes.has("touch")))return;let{cancelled:i=!1}=t;this.touchHoverState.pointerActive=!1,this.hoverSyncState.pointerInside=!1,e&&this.storePointer(e),this.hoverSyncState.lastPointer=null,this.cancelTouchHoverSettle(),this.touchHoverConfig.revertToFeaturedOnRelease!==!1?this.scheduleFeaturedHoverSync(this.touchHoverState.pointerType):i&&this.clearSyntheticHover(),this.setAutoScrollHoverState(!1)}scheduleFeaturedHoverSync(e,t=10){var n,s,o;if(!this.touchHoverEnabled||!((n=this.touchHoverConfig)!=null&&n.pointerTypes.has("touch"))||this.touchHoverConfig.revertToFeaturedOnRelease===!1)return;if(typeof window=="undefined"){this.syncHoverToSlide((o=(s=this.slider)==null?void 0:s.currentSlide)!=null?o:0,e);return}this.cancelTouchHoverSettle();let i=a=>{var u,d;let{slider:l}=this;if(!l){this.touchHoverState.settleHandle=null;return}let c=Math.abs(l.target-Math.round(l.target)),h=Math.abs(l.speed);if(!l.isDragging&&c<=.02&&h<=.02){this.syncHoverToSlide((u=l.currentSlide)!=null?u:0,e),this.touchHoverState.settleHandle=null;return}if(a<=0){this.syncHoverToSlide((d=l.currentSlide)!=null?d:0,e),this.touchHoverState.settleHandle=null;return}this.touchHoverState.settleHandle=window.requestAnimationFrame(()=>i(a-1))};this.touchHoverState.settleHandle=window.requestAnimationFrame(()=>i(t))}cancelTouchHoverSettle(){this.touchHoverState.settleHandle!==null&&typeof window!="undefined"&&(cancelAnimationFrame(this.touchHoverState.settleHandle),this.touchHoverState.settleHandle=null)}syncHoverToSlide(e,t){var s;if(!this.touchHoverEnabled||!((s=this.touchHoverConfig)!=null&&s.pointerTypes.has("touch")))return;let i=this.getSliderItemForIndex(e);if(!i)return;let n=this.createPointerSnapshotForElement(i,t);this.applySyntheticHover(i,n),this.hoverSyncState.lastPointer=n}getSliderItemForIndex(e){var s;if(!this.slider||!Array.isArray(this.slider.items)||this.slider.items.length===0)return null;let{items:t}=this.slider,i=t.length;if(!Number.isFinite(e)||i===0)return null;let n=(Math.round(e)%i+i)%i;return(s=t[n])!=null?s:null}createPointerSnapshotForElement(e,t){let i=e.getBoundingClientRect();return{clientX:i.left+i.width/2,clientY:i.top+i.height/2,pointerType:t}}findSlideFromEvent(e,t){var s;let{target:i}=e;if(i instanceof HTMLElement){let o=i.closest(il);if(o)return o}if(typeof document=="undefined")return null;let n=document.elementFromPoint(t.clientX,t.clientY);return(s=n==null?void 0:n.closest(il))!=null?s:null}normalizePointerType(e){return e==="mouse"||e==="pen"||e==="touch"?e:"unknown"}isTouchHoverPointer(e){var i;return e?this.normalizePointerType(e)==="touch"&&!!(this.touchHoverEnabled&&((i=this.touchHoverConfig)!=null&&i.pointerTypes.has("touch"))):!1}setAutoScrollHoverState(e){let t=this.autoScrollState;if(t){if(!t.config.pauseOnHover){t.hovering=e;return}if(t.hovering!==e)if(t.hovering=e,e&&t.config.pauseOnHover){let i=this.getNow();t.pausedUntil=Math.max(t.pausedUntil,i+t.config.resumeDelay),t.interacting=!0}else!e&&t.config.pauseOnHover&&(t.pausedUntil=Math.max(t.pausedUntil,this.getNow()+t.config.resumeDelay))}}markAutoScrollInteraction(){let e=this.autoScrollState;if(!e||!e.config.pauseOnInteraction)return;let t=this.getNow();e.interacting=!0,e.pausedUntil=Math.max(e.pausedUntil,t+e.config.resumeDelay),this.setAutoScrollActive(!1)}setAutoScrollActive(e){let{slider:t}=this,i=this.autoScrollState;if(!(!t||!i))if(e){if(i.snapDisabled)return;i.snapDisabled=!0,t.snap=!1}else{if(!i.snapDisabled)return;i.snapDisabled=!1,t.snap=i.originalSnap,t.target=t.current,t.speed=0}}registerAutoScrollInteractionHandlers(){if(!this.wrapperEl||typeof window=="undefined")return;let e=this.autoScrollState;if(!e||!e.config.pauseOnInteraction)return;let t=this.wrapperEl,i="PointerEvent"in window,n={capture:!0},s={capture:!0,passive:!0},o={capture:!0},a=typeof document!="undefined",l=()=>{this.markAutoScrollInteraction()},c=()=>{this.markAutoScrollInteraction()},h=()=>{this.markAutoScrollInteraction()},u=d=>{if(!this.wrapperEl)return;let{target:f}=d;f instanceof Node&&this.wrapperEl.contains(f)&&this.markAutoScrollInteraction()};i?(t.addEventListener("pointerdown",l,n),t.addEventListener("pointerup",l,n),t.addEventListener("pointercancel",l,n)):(t.addEventListener("mousedown",l,n),t.addEventListener("mouseup",l,n),t.addEventListener("mouseleave",l,n),t.addEventListener("touchstart",c,s),t.addEventListener("touchend",c,s),t.addEventListener("touchcancel",c,s)),t.addEventListener("wheel",h,o),a&&document.addEventListener("keydown",u,!0),this.teardownCallbacks.push(()=>{i?(t.removeEventListener("pointerdown",l,n),t.removeEventListener("pointerup",l,n),t.removeEventListener("pointercancel",l,n)):(t.removeEventListener("mousedown",l,n),t.removeEventListener("mouseup",l,n),t.removeEventListener("mouseleave",l,n),t.removeEventListener("touchstart",c,s),t.removeEventListener("touchend",c,s),t.removeEventListener("touchcancel",c,s)),t.removeEventListener("wheel",h,o),a&&document.removeEventListener("keydown",u,!0)})}normalizeAutoScrollOptions(e){var o,a,l,c;if(!e||!((o=e.enabled)!=null?o:!0))return null;let i=(h,u,d=0)=>{let f=typeof h=="number"&&Number.isFinite(h)?h:u;return Math.max(d,f)},n=i(e.speed,ds.speed);return{enabled:!0,speed:this.coarsePointerEnvironment?n*1.25:n,direction:(a=e.direction)!=null?a:ds.direction,pauseOnHover:(l=e.pauseOnHover)!=null?l:ds.pauseOnHover,pauseOnInteraction:(c=e.pauseOnInteraction)!=null?c:ds.pauseOnInteraction,resumeDelay:i(e.resumeDelay,ds.resumeDelay),initialDelay:i(e.initialDelay,ds.initialDelay)}}normalizeTouchHoverOptions(e){var s,o,a,l,c;if(!e||!((s=e.enabled)!=null?s:!0))return null;let i=new Set;return((o=e.pointerTypes)!=null?o:["touch"]).forEach(h=>{(h==="touch"||h==="mouse"||h==="pen")&&i.add(h)}),i.size||i.add("touch"),{pointerTypes:i,coarseOnly:(a=e.coarseOnly)!=null?a:!0,applyInitialFeatured:(l=e.applyInitialFeatured)!=null?l:!0,revertToFeaturedOnRelease:(c=e.revertToFeaturedOnRelease)!=null?c:!0}}normalizeKeyboardOptions(e){var i,n,s,o;return((i=e==null?void 0:e.enabled)!=null?i:!0)?{target:(n=e==null?void 0:e.target)!=null?n:"window",ignoreInputs:(s=e==null?void 0:e.ignoreInputs)!=null?s:!0,allowWhileHidden:(o=e==null?void 0:e.allowWhileHidden)!=null?o:!1}:null}normalizeBumpSpacingOptions(e){var a;if(!((a=e==null?void 0:e.enabled)!=null?a:!0))return null;let i=(l,c,h)=>Math.min(Math.max(l,c),h),n=typeof(e==null?void 0:e.maxCompression)=="number"&&Number.isFinite(e.maxCompression)?e.maxCompression:.22,s=typeof(e==null?void 0:e.speedMultiplier)=="number"&&Number.isFinite(e.speedMultiplier)?e.speedMultiplier:1.15,o=typeof(e==null?void 0:e.smoothing)=="number"&&Number.isFinite(e.smoothing)?e.smoothing:.25;return{maxCompression:i(n,0,.6),speedMultiplier:Math.max(0,s),smoothing:i(o,.05,.9)}}normalizeParallaxOptions(e){var s,o;if(!((s=e==null?void 0:e.enabled)!=null?s:!0))return null;let i=typeof(e==null?void 0:e.maxOffset)=="number"&&Number.isFinite(e.maxOffset)?e.maxOffset:48,n=typeof(e==null?void 0:e.speedInfluence)=="number"&&Number.isFinite(e.speedInfluence)?e.speedInfluence:120;return{selector:(o=e==null?void 0:e.selector)!=null?o:"[data-slider-parallax]",axis:(e==null?void 0:e.axis)==="y"?"y":"x",maxOffset:i,speedInfluence:n}}detectCoarsePointerEnvironment(){if(typeof window=="undefined")return!1;let e=typeof navigator!="undefined"?navigator:null;if(typeof(e==null?void 0:e.maxTouchPoints)=="number"&&e.maxTouchPoints>0||typeof(e==null?void 0:e.msMaxTouchPoints)=="number"&&e.msMaxTouchPoints>0)return!0;if(typeof window.matchMedia=="function"){try{if(window.matchMedia("(pointer: coarse)").matches)return!0}catch{}try{if(window.matchMedia("(hover: none)").matches)return!0}catch{}}return"ontouchstart"in window}isFormField(e){return e?!!(e instanceof HTMLInputElement||e instanceof HTMLTextAreaElement||e instanceof HTMLSelectElement||e instanceof HTMLElement&&(e.isContentEditable||e.getAttribute("role")==="textbox")):!1}isInsideSlider(e){return!e||!(e instanceof Node)?!1:!!(this.hostEl&&this.hostEl.contains(e)||this.wrapperEl&&this.wrapperEl.contains(e))}initializeTouchHover(e){var t;this.cancelTouchHoverSettle(),this.touchHoverState.pointerActive=!1,this.touchHoverState.pointerType="touch",this.touchHoverConfig=this.normalizeTouchHoverOptions(this.options.touchHover),this.touchHoverEnabled=!1,this.touchHoverConfig&&this.touchHoverConfig.pointerTypes.has("touch")&&(this.touchHoverConfig.coarseOnly&&!this.detectCoarsePointerEnvironment()||(this.touchHoverEnabled=!0,this.touchHoverState.pointerType="touch",this.touchHoverConfig.applyInitialFeatured&&this.syncHoverToSlide((t=e.currentSlide)!=null?t:0,this.touchHoverState.pointerType)))}handleTouchHoverSlideChange(e){var t;this.touchHoverEnabled&&((t=this.touchHoverConfig)==null?void 0:t.revertToFeaturedOnRelease)!==!1&&(this.touchHoverState.pointerActive||this.syncHoverToSlide(e,this.touchHoverState.pointerType))}registerKeyboardControls(e){var s;if(typeof window=="undefined")return;this.unregisterKeyboardControls();let t=this.keyboardOptions;if(!t)return;let i=t.target==="host"?(s=this.hostEl)!=null?s:this.wrapperEl:null,n=o=>{var d,f,_;if(!this.slider||this.slider!==e||o.defaultPrevented||o.metaKey||o.ctrlKey||o.altKey)return;let a=(d=typeof document!="undefined"?document.activeElement:null)!=null?d:null,l=(f=o.target)!=null?f:a;if(t.ignoreInputs&&this.isFormField(l))return;let c=this.isInsideSlider(l);if(!c&&!this.hoverSyncState.pointerInside&&!t.allowWhileHidden&&!e.isVisible)return;let h=!1,{key:u}=o;if(/^[0-9]$/.test(u)){let g=Number.parseInt(u,10);Number.isNaN(g)||(e.config.infinite||g<e.items.length)&&(e.goToIndex(g),h=!0)}else switch(u){case"ArrowLeft":case"ArrowUp":e.goToNext(),h=!0;break;case"ArrowRight":case"ArrowDown":e.goToPrev(),h=!0;break;case" ":case"Spacebar":e.goToNext(),h=!0;break;case"Home":e.goToIndex(0),h=!0;break;case"End":{let g=e.items.length?e.items.length-1:0;e.goToIndex(g),h=!0;break}}h&&(o.preventDefault(),this.markAutoScrollInteraction(),!c&&!this.hoverSyncState.pointerInside&&this.syncHoverToSlide((_=e.currentSlide)!=null?_:0,this.touchHoverState.pointerType))};i?(i.addEventListener("keydown",n),this.keyboardListenerTarget=i,this.keyboardListenerIsWindow=!1):(window.addEventListener("keydown",n),this.keyboardListenerTarget=window,this.keyboardListenerIsWindow=!0),this.keyboardHandler=n,this.teardownCallbacks.push(()=>{this.unregisterKeyboardControls()})}unregisterKeyboardControls(){this.keyboardListenerTarget&&this.keyboardHandler&&(this.keyboardListenerIsWindow&&typeof window!="undefined"?this.keyboardListenerTarget.removeEventListener("keydown",this.keyboardHandler):this.keyboardListenerTarget.removeEventListener("keydown",this.keyboardHandler)),this.keyboardListenerTarget=null,this.keyboardHandler=null,this.keyboardListenerIsWindow=!1}registerParallaxTargets(e){this.parallaxTargets=[];let t=this.parallaxOptions;t&&e.items.forEach((i,n)=>{i.querySelectorAll(t.selector).forEach(a=>{var m,p,M;let l=(m=a.dataset.sliderParallaxDepth)!=null?m:a.dataset.parallaxDepth,c=l?Number.parseFloat(l):1,h=(p=a.dataset.sliderParallaxSpeed)!=null?p:a.dataset.parallaxSpeed,u=h?Number.parseFloat(h):c,d=a.dataset.sliderParallaxAxis,f=d==="y"||d==="x"?d:t.axis,_=(M=a.style.transform)!=null?M:"",g=a.style.willChange||null;(!g||!g.includes("transform"))&&(a.style.willChange=g?`${g}, transform`:"transform"),this.parallaxTargets.push({element:a,depth:Number.isFinite(c)?c:1,speedScale:Number.isFinite(u)?u:Number.isFinite(c)?c:1,axis:f,slideIndex:n,baseTransform:_,originalWillChange:g})})})}resetParallaxTargets(){this.parallaxTargets.length&&(this.parallaxTargets.forEach(e=>{e.element.style.transform=e.baseTransform,e.originalWillChange!==null?e.element.style.willChange=e.originalWillChange:e.element.style.removeProperty("will-change")}),this.parallaxTargets=[])}applySpeedEffects(e){let t=e.deltaTime||0,i=Math.min(Math.max(t*12,.06),1);this.speedState.lerped+=(e.speed-this.speedState.lerped)*i;let n=Math.abs(this.speedState.lerped),s=h=>{h&&(h.style.setProperty("--slider-speed",this.speedState.lerped.toFixed(4)),h.style.setProperty("--slider-speed-abs",n.toFixed(4)),h.style.setProperty("--slider-progress",e.progress.toFixed(4)))};if(s(this.wrapperEl),this.hostEl&&this.hostEl!==this.wrapperEl&&s(this.hostEl),this.applyBumpSpacingEffect(t,n),!this.parallaxTargets.length||!this.parallaxOptions)return;let{parallaxValues:o}=e;if(!o||!o.length)return;let{maxOffset:a,speedInfluence:l}=this.parallaxOptions,c=this.clamp(this.speedState.lerped*l,-a*.75,a*.75);this.parallaxTargets.forEach(h=>{let u=o[h.slideIndex];if(typeof u!="number")return;let d=this.clamp(u*a*h.depth,-a,a),f=this.clamp(c*h.speedScale,-a*h.speedScale,a*h.speedScale),_=a*Math.max(h.depth,h.speedScale)*1.75,g=this.clamp(d+f,-_,_),m=h.axis==="x"?g:0,p=h.axis==="y"?g:0;h.element.style.transform=`${h.baseTransform} translate3d(${m.toFixed(3)}px, ${p.toFixed(3)}px, 0)`})}applyBumpSpacingEffect(e,t){let i=this.bumpSpacingOptions;if(!this.slider||!i){this.bumpSpacingState.compression=0,this.updateBumpSpacingMetrics(0);return}let n=this.clamp(t*i.speedMultiplier,0,i.maxCompression),s=Math.max(e*60,0),o=this.clamp(1-Math.pow(1-i.smoothing,Math.max(s,1)),0,1);this.bumpSpacingState.compression+=(n-this.bumpSpacingState.compression)*o;let{compression:a}=this.bumpSpacingState,l=a>1e-4?a:0;this.updateBumpSpacingMetrics(l)}updateBumpSpacingMetrics(e){let t=e.toFixed(4),i=(1+e).toFixed(4),n=s=>{s&&(s.style.setProperty("--slider-bump-compression",t),s.style.setProperty("--slider-bump-scale",i))};n(this.wrapperEl),this.hostEl&&this.hostEl!==this.wrapperEl&&n(this.hostEl)}clamp(e,t,i){return Math.min(Math.max(e,t),i)}configureAutoScroll(){var s,o,a,l;if(typeof window=="undefined"||!this.slider){this.setAutoScrollActive(!1),this.autoScrollState=null;return}let e=this.normalizeAutoScrollOptions(this.options.autoScroll);if(!e){this.setAutoScrollActive(!1),this.autoScrollState=null;return}let t=this.getNow(),{slider:i}=this,n=(l=(a=(s=i==null?void 0:i.config)==null?void 0:s.snap)!=null?a:(o=this.options.config)==null?void 0:o.snap)!=null?l:Po.snap;this.autoScrollState={config:e,lastTickTime:t,pausedUntil:t+e.initialDelay,hovering:!1,interacting:!1,directionMultiplier:e.direction==="backward"?1:-1,originalSnap:n,snapDisabled:!1},this.registerAutoScrollInteractionHandlers()}updateAutoScroll(e){let{slider:t}=this,i=this.autoScrollState;if(!t||!i||!i.config.enabled)return;if(i.lastTickTime===null){i.lastTickTime=e;return}let n=Math.max(0,(e-i.lastTickTime)/1e3);if(i.lastTickTime=e,!t.isVisible||i.config.speed<=0){this.setAutoScrollActive(!1);return}if(i.config.pauseOnHover&&i.hovering&&(i.pausedUntil=Math.max(i.pausedUntil,e+i.config.resumeDelay),i.interacting=!0),i.config.pauseOnInteraction){if(t.isDragging)i.interacting=!0,i.pausedUntil=Math.max(i.pausedUntil,e+i.config.resumeDelay);else if(i.interacting&&e>=i.pausedUntil){let a=Math.abs(t.target-Math.round(t.target)),l=Math.abs(t.speed);a<=.05&&l<=.02?i.interacting=!1:i.pausedUntil=e+120}}if(e<i.pausedUntil||i.interacting){this.setAutoScrollActive(!1);return}this.setAutoScrollActive(!0);let o=i.config.speed*n*i.directionMultiplier;if(!t.config.infinite){let a=t.target+o;a>0?(o=Math.min(o,-t.target),i.directionMultiplier=-1):a<t.maxScroll&&(o=Math.max(o,t.maxScroll-t.target),i.directionMultiplier=1)}t.target+=o}getNow(){return typeof performance!="undefined"&&typeof performance.now=="function"?performance.now():Date.now()}updateHoverSync(){if(!this.slider||typeof window=="undefined"||typeof document=="undefined"||!this.hoverSyncState.pointerInside)return;let e=this.hoverSyncState.lastPointer;if(!e||!this.shouldHandlePointer(e.pointerType))return;let{slider:t}=this,i=performance.now();if(t.isDragging||Math.abs(t.speed)>Tu.speedThreshold){this.hoverSyncState.lastMovementTime=i;return}if(i-this.hoverSyncState.lastMovementTime<Tu.settleDelay||i-this.hoverSyncState.lastDispatchTime<Tu.dispatchThrottle)return;let n=document.elementFromPoint(e.clientX,e.clientY);if(!n)return;let s=n.closest(il);if(!s){this.clearSyntheticHover(e),this.hoverSyncState.lastDispatchTime=i;return}s!==this.hoverSyncState.activeSlide&&(this.applySyntheticHover(s,e),this.hoverSyncState.lastDispatchTime=i)}syncActiveSlideFromPointer(e){if(typeof document=="undefined")return;let t=this.snapshotPointer(e);if(!this.shouldHandlePointer(t.pointerType))return;let i=document.elementFromPoint(t.clientX,t.clientY);if(!i){this.hoverSyncState.activeSlide=null;return}let n=i.closest(il);this.hoverSyncState.activeSlide=n}applySyntheticHover(e,t){let i=this.hoverSyncState.activeSlide;i&&i!==e&&(this.dispatchSyntheticMouseEvent(i,"mouseleave",t,!1),this.dispatchSyntheticMouseEvent(i,"mouseout",t,!0)),e&&e!==i&&(this.dispatchSyntheticMouseEvent(e,"mouseenter",t,!1),this.dispatchSyntheticMouseEvent(e,"mouseover",t,!0)),this.hoverSyncState.activeSlide=e!=null?e:null}clearSyntheticHover(e){var n;let t=this.hoverSyncState.activeSlide;if(!t)return;let i=(n=e!=null?e:this.hoverSyncState.lastPointer)!=null?n:{...(()=>{let s=t.getBoundingClientRect();return{clientX:s.left+s.width/2,clientY:s.top+s.height/2}})(),pointerType:"mouse"};this.dispatchSyntheticMouseEvent(t,"mouseleave",i,!1),this.dispatchSyntheticMouseEvent(t,"mouseout",i,!0),this.hoverSyncState.activeSlide=null}dispatchSyntheticMouseEvent(e,t,i,n){let s=new MouseEvent(t,{bubbles:n,cancelable:!1,clientX:i.clientX,clientY:i.clientY,screenX:i.clientX,screenY:i.clientY,buttons:0});e.dispatchEvent(s)}storePointer(e){let t=this.getEventPoint(e),i="mouse";if("pointerType"in e&&e.pointerType){let s=this.normalizePointerType(e.pointerType);i=s==="unknown"?"mouse":s}else("touches"in e||"changedTouches"in e)&&(i="touch");let n=performance.now();this.hoverSyncState.lastPointer={clientX:t.clientX,clientY:t.clientY,pointerType:i},this.hoverSyncState.lastMovementTime=n}snapshotPointer(e,t="mouse"){let i=this.getEventPoint(e),n=t;if("pointerType"in e&&e.pointerType){let s=this.normalizePointerType(e.pointerType);n=s==="unknown"?t:s}else("touches"in e||"changedTouches"in e)&&(n="touch");return{clientX:i.clientX,clientY:i.clientY,pointerType:n}}shouldHandlePointer(e){if(!e)return!0;let t=this.normalizePointerType(e);return t==="mouse"||t==="pen"?!0:t==="touch"?this.isTouchHoverPointer(e):!1}stripIds(e){e.hasAttribute("id")&&e.removeAttribute("id"),e.querySelectorAll("[id]").forEach(t=>{t.removeAttribute("id")})}resolveCloneRootForDuplicate(e){if(!this.wrapperEl||e.parentElement===this.wrapperEl)return e;let t=e;for(;t&&t.parentElement&&t.parentElement!==this.wrapperEl;)t=t.parentElement;return t&&t.parentElement===this.wrapperEl?t:e}markCloneForAccessibility(e){e.setAttribute("aria-hidden","true"),e.getAttribute("role")==="listitem"&&e.setAttribute("role","presentation"),(e instanceof HTMLAnchorElement||e instanceof HTMLButtonElement||e instanceof HTMLInputElement||e instanceof HTMLSelectElement||e instanceof HTMLTextAreaElement)&&e.setAttribute("tabindex","-1"),e.querySelectorAll("a, button, input, select, textarea, [tabindex]").forEach(t=>{t.setAttribute("tabindex","-1"),t.setAttribute("aria-hidden","true")})}duplicateSlides(e){if(!this.wrapperEl||!e.length)return;let t=[];e.forEach((i,n)=>{var a;let o=this.resolveCloneRootForDuplicate(i).cloneNode(!0);this.stripIds(o),o.dataset.smooothyClone="true",o.dataset.smooothySourceIndex=String(n),this.markCloneForAccessibility(o),(a=this.wrapperEl)==null||a.appendChild(o),t.push(o)}),t.length&&this.clones.push(...t)}cleanupClones(){this.clones.length&&(this.clones.forEach(e=>{e.parentElement&&e.parentElement.removeChild(e)}),this.clones=[])}async initialize(){var s,o,a,l,c;if(this.isInitialized)return;let e=document.querySelector(this.options.selector);if(!e)return;this.wrapperEl=e,this.wrapperEl.style.userSelect="none",this.wrapperEl.style.webkitUserSelect="none",this.wrapperEl.style.touchAction="pan-y",this.coarsePointerEnvironment=this.detectCoarsePointerEnvironment(),this.keyboardOptions=this.normalizeKeyboardOptions(this.options.keyboard),this.bumpSpacingOptions=this.normalizeBumpSpacingOptions((s=this.options.bumpSpacing)!=null?s:{enabled:!0}),this.parallaxOptions=this.normalizeParallaxOptions(this.options.parallax),this.parallaxTargets=[],this.speedState.lerped=0,this.bumpSpacingState.compression=0,this.hostEl=(o=e.closest("[data-slider-root], .slider, .case-slider, .slider_wrapper, .panorama-slider"))!=null?o:e,this.prepareEntranceState();let t=this.collectSlides();this.duplicateSlides(t),typeof window!="undefined"&&pn((a=this.hostEl)!=null?a:e);let i=this.collectSlides(),n=this.createConfig();try{let h=new Ip(e,n);this.slider=h,h.onSlideChange=(d,f)=>{var _,g,m;d!==f&&((_=this.sliderVideoController)==null||_.onSlideChange(d)),this.handleTouchHoverSlideChange(d),(m=(g=this.options).onSlideChange)==null||m.call(g,d,f)},h.init(),this.initializeTouchHover(h),this.registerKeyboardControls(h),this.registerParallaxTargets(h),this.wrapperEl&&this.attachWheelGuards(this.wrapperEl),this.applyInteractionGuards(i),this.registerPointerObservers(),this.configureAutoScroll();let u=()=>{if(!this.slider)return;let d=this.getNow();this.updateAutoScroll(d),this.slider.update(),this.updateHoverSync()};j.ticker.add(u),this.tickerFn=u,this.sliderVideoController=Wp((l=this.hostEl)!=null?l:e,{debounceMs:140}),this.sliderVideoController.onSlideChange((c=h.currentSlide)!=null?c:0)}catch(h){throw this.cleanupClones(),this.slider=null,h}this.isInitialized=!0,typeof window!="undefined"&&this.shouldExposeInstance()&&this.slider&&(window.smooothySliderInstance=this.slider)}async fadeIn(e=.8,t=0){await this.playEntranceAnimation(e,t)}async fadeOut(e=.5){let t=this.getWrappers();await new Promise(i=>{j.to(t.length?t:this.hostEl,{opacity:0,duration:e,ease:"power2.out",onComplete:()=>{t.length?t.forEach(n=>n.style.visibility="hidden"):this.hostEl&&(this.hostEl.style.visibility="hidden"),i()}})})}update(){this.slider&&this.slider.resize()}destroy(){this.entranceTimeline&&(this.entranceTimeline.kill(),this.entranceTimeline=null),this.tickerFn&&(j.ticker.remove(this.tickerFn),this.tickerFn=null),this.slider&&(this.setAutoScrollActive(!1),this.slider.destroy(),this.slider=null),this.sliderVideoController&&(this.sliderVideoController.destroy(),this.sliderVideoController=null),this.unregisterKeyboardControls(),this.resetParallaxTargets(),this.cleanupClones(),this.autoScrollState=null,this.cancelTouchHoverSettle(),this.touchHoverEnabled=!1,this.touchHoverConfig=null,this.touchHoverState.pointerActive=!1,this.touchHoverState.pointerType="touch",this.touchHoverState.settleHandle=null,this.keyboardOptions=null,this.bumpSpacingOptions=null,this.speedState.lerped=0,this.bumpSpacingState.compression=0,this.wrapperEl&&(this.wrapperEl.style.removeProperty("user-select"),this.wrapperEl.style.removeProperty("-webkit-user-select"),this.wrapperEl.style.removeProperty("touch-action")),typeof window!="undefined"&&this.shouldExposeInstance()&&(window.smooothySliderInstance=null),this.teardownCallbacks.length&&(this.teardownCallbacks.forEach(e=>{try{e()}catch{}}),this.teardownCallbacks=[]),this.isInitialized=!1,this.hoverSyncState={pointerInside:!1,lastPointer:null,lastMovementTime:0,lastDispatchTime:0,activeSlide:null}}createConfig(){var u,d,f,_,g;let{setOffset:e,scrollInput:t,...i}=(u=this.options.config)!=null?u:{},n=this.coarsePointerEnvironment?{lerpFactor:.42,scrollSensitivity:1.55,snapStrength:.065,speedDecay:.9}:{},s={...Po,...n,...i},o=this.coarsePointerEnvironment?{touchMultiplier:5,mouseMultiplier:1}:{},a={...Xp,...o,...(d=this.options.virtualScroll)!=null?d:{}};this.keyboardOptions&&((f=this.options.virtualScroll)==null?void 0:f.useKeyboard)===void 0&&(a.useKeyboard=!0);let l=t!==void 0?t:Po.scrollInput,c=e!=null?e:m=>m.itemWidth,{dragSensitivity:h}=s;if(this.coarsePointerEnvironment&&((_=this.options.config)==null?void 0:_.dragSensitivity)===void 0){let p=((g=a.touchMultiplier)!=null?g:Xp.touchMultiplier)/ky,M=Hy*(Number.isFinite(p)&&p>0?p:1),b=Po.dragSensitivity*.55,S=Po.dragSensitivity*3.5;h=this.clamp(M,b,S)}return{...s,dragSensitivity:h,scrollInput:l,setOffset:c,virtualScroll:a,onResize:m=>{var p,M,b,S,T;(b=this.sliderVideoController)==null||b.onSlideChange((M=(p=this.slider)==null?void 0:p.currentSlide)!=null?M:0),(T=(S=this.options).onResize)==null||T.call(S,m)},onUpdate:m=>{var p,M;this.applySpeedEffects(m),(M=(p=this.options).onUpdate)==null||M.call(p,m)}}}collectSlides(){let e=this.wrapperEl;if(!e)return[];let t=[".slide","[data-slider-slide]",".slider-item"],i=[];return t.forEach(n=>{e.querySelectorAll(n).forEach(s=>{i.includes(s)||i.push(s)})}),i.length?i:Array.from(e.children).filter(n=>n instanceof HTMLElement)}getWrappers(){var i,n,s;if(!this.wrapperEl&&!this.hostEl)return[];let e=new Set;this.hostEl&&e.add(this.hostEl),this.wrapperEl&&this.wrapperEl!==this.hostEl&&e.add(this.wrapperEl);let t=(s=(i=this.hostEl)==null?void 0:i.closest(".slider, .case-slider, .slider_wrapper, .panorama-slider"))!=null?s:(n=this.wrapperEl)==null?void 0:n.closest(".slider, .case-slider, .slider_wrapper, .panorama-slider");return t&&e.add(t),Array.from(e)}prepareEntranceState(){let e=this.getWrappers();e.length&&j.set(e,{opacity:0,y:24,visibility:"hidden"});let t=this.collectSlides();t.length&&j.set(t,{opacity:0})}playEntranceAnimation(e=.8,t=0){return new Promise(i=>{let n=this.getWrappers(),s=this.collectSlides();this.entranceTimeline&&(this.entranceTimeline.kill(),this.entranceTimeline=null),n.forEach(a=>a.style.visibility="visible");let o=j.timeline({delay:t,defaults:{ease:"power2.out"},onComplete:()=>{this.entranceTimeline=null,i()}});n.length&&o.to(n,{opacity:1,y:0,duration:e},0),s.length&&o.set(s,{opacity:1},0),this.entranceTimeline=o})}attachWheelGuards(e){let t=n=>{let s=Math.abs(n.deltaX);Math.abs(n.deltaY)>s&&n.stopImmediatePropagation()},i={capture:!0};e.addEventListener("wheel",t,i),this.teardownCallbacks.push(()=>{e.removeEventListener("wheel",t,i)})}applyInteractionGuards(e){e.length&&(this.disableNativeDrag(e),this.registerSlideLinkGuards(e))}disableNativeDrag(e){let t=i=>{i.preventDefault()};e.forEach(i=>{[i,...Array.from(i.querySelectorAll("a, img, picture, source, video"))].forEach(s=>{s.setAttribute("draggable","false"),s.addEventListener("dragstart",t),this.teardownCallbacks.push(()=>{s.removeEventListener("dragstart",t)})})})}registerSlideLinkGuards(e){e.forEach(i=>{let n=i.matches("a")?[i]:Array.from(i.querySelectorAll("a"));n.length&&n.forEach(s=>{let o=0,a=0,l=!1,c=null,h=()=>{c&&(c(),c=null)},u=p=>{if(l)return;let M=this.getEventPoint(p);(Math.abs(M.clientX-o)>6||Math.abs(M.clientY-a)>6)&&(l=!0)},d=()=>{h();let p=()=>{h()};window.addEventListener("mousemove",u),window.addEventListener("mouseup",p),window.addEventListener("touchmove",u,{passive:!0}),window.addEventListener("touchend",p),window.addEventListener("touchcancel",p),c=()=>{window.removeEventListener("mousemove",u),window.removeEventListener("mouseup",p),window.removeEventListener("touchmove",u),window.removeEventListener("touchend",p),window.removeEventListener("touchcancel",p)}},f=p=>{let M=this.getEventPoint(p);o=M.clientX,a=M.clientY,l=!1,d()},_=p=>{l&&(p.preventDefault(),p.stopImmediatePropagation()),l=!1},g=p=>{f(p)},m=p=>{p.button===0&&f(p)};s.addEventListener("mousedown",m),s.addEventListener("touchstart",g,{passive:!0}),s.addEventListener("click",_,!0),this.teardownCallbacks.push(()=>{s.removeEventListener("mousedown",m),s.removeEventListener("touchstart",g),s.removeEventListener("click",_,!0),h()})})})}getEventPoint(e){var t,i,n,s;if("touches"in e){let o=(i=e.touches[0])!=null?i:(t=e.changedTouches)==null?void 0:t[0];if(o)return{clientX:o.clientX,clientY:o.clientY}}return{clientX:(n=e.clientX)!=null?n:0,clientY:(s=e.clientY)!=null?s:0}}shouldExposeInstance(){return typeof process!="undefined"?!1:typeof window!="undefined"&&window.location?window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1":!1}};function jp(r){return new fs(r)}async function Zp(r=document){var n;let e=zy(r);if(!e)return null;let t=(n=e.getAttribute("data-smooothy-instance"))!=null?n:qp("smooothy-home-slider");e.setAttribute("data-smooothy-instance",t),e.dataset.smooothyManaged="pending";let i=new fs({selector:`[data-smooothy-instance="${t}"]`,config:{infinite:!0,snap:!0},autoScroll:{enabled:!1},touchHover:{enabled:!0,coarseOnly:!0,applyInitialFeatured:!0,revertToFeaturedOnRelease:!0}});try{return await i.initialize(),Yp(e,t,i),i}catch(s){throw delete e.dataset.smooothyManaged,s}}async function nl(r=document,e={}){var n;let t=Array.from(r.querySelectorAll("[data-smooothy], .slider-wrapper, .slider_wrapper")),i=[];for(let s of t){if(s.closest(".case-slider")||s.dataset.smooothyManaged==="true"||s.dataset.smooothyManaged==="pending")continue;let o=(n=s.getAttribute("data-smooothy-instance"))!=null?n:qp("smooothy-wrapper");s.setAttribute("data-smooothy-instance",o),s.dataset.smooothyManaged="pending";let a=new fs({selector:`[data-smooothy-instance="${o}"]`,config:e.config,virtualScroll:e.virtualScroll,onSlideChange:e.onSlideChange,onResize:e.onResize,onUpdate:e.onUpdate,autoScroll:e.autoScroll,touchHover:e.touchHover});try{await a.initialize(),Yp(s,o,a),i.push(a)}catch(l){throw delete s.dataset.smooothyManaged,l}}return i}function Lo(r=document){Array.from(r.querySelectorAll("[data-smooothy-managed]")).forEach(t=>{let i=t.getAttribute("data-smooothy-instance");if(!i)return;let n=Au.get(i);n&&(n.destroy(),Au.delete(i)),delete t.dataset.smooothyManaged})}function zy(r){var i,n;let e=["[data-smooothy]",".slider-wrapper",".slider_wrapper"];for(let s of e){let o=r.querySelector(s);if(o)return o}let t=r.querySelector(".panorama-slider, .slider, .case-slider");return t?(n=(i=t.querySelector("[data-smooothy]"))!=null?i:t.querySelector(".slider-wrapper"))!=null?n:t:null}Qa();var Vy=".case-slider",sl="data-case-slider-id",Cu="data-slider-screensaver",$p=6e3,ol=[],wr=null,al=!1,rl=0;function Gy(r,e){let t=`case-slider-${Date.now()}-${e}`;return r.setAttribute(sl,t),t}function Kp(r){r.hasAttribute(sl)&&r.removeAttribute(sl)}function Io(r=!1){r&&(rl+=1),r&&wr&&(wr=null),al=!1,ol.forEach(({slider:e,wrapper:t,container:i})=>{e.destroy(),Kp(t)}),ol=[]}function Tr(r){To(r),rl+=1;let e=rl;al=!1,Io(),wr=(async()=>{var n,s;let t=Array.from(r.querySelectorAll(Vy)).filter(o=>!o.classList.contains("w-condition-invisible")),i=[];for(let[o,a]of t.entries()){let l=(n=a.querySelector("[data-smooothy], .slider-wrapper, .slider_container, .slider-items, .w-dyn-items"))!=null?n:a;if(!l||!((s=l.querySelector(".slide, [data-slider-slide]"))!=null?s:l.firstElementChild instanceof HTMLElement?l.firstElementChild:null))continue;let u=a.closest(`[${Cu}], [data-slider="screensaver"]`)!==null||a.hasAttribute(Cu)||l.hasAttribute(Cu)||a.dataset.slider==="screensaver"||l.dataset.slider==="screensaver",d=Gy(l,o),f=jp({selector:`[${sl}="${d}"]`,config:{infinite:!0,snap:!0},autoScroll:{enabled:!0,speed:u?.12:.1,initialDelay:u?$p:1600,resumeDelay:u?$p:2e3,pauseOnHover:!1,pauseOnInteraction:!0},touchHover:{enabled:!0,coarseOnly:!0,applyInitialFeatured:!0,revertToFeaturedOnRelease:!0}});await f.initialize(),i.push({slider:f,wrapper:l,container:a})}return e!==rl?(i.forEach(({slider:o,wrapper:a})=>{o.destroy(),Kp(a)}),[]):(ol=i,i.map(({slider:o})=>o))})()}function Ar(r=.8,e=.1){let t=i=>{!i.length||al||(al=!0,i.forEach((n,s)=>{n.fadeIn(r,e+s*.12)}))};wr?wr.then(i=>{wr=null,i.length&&t(i)}).catch(i=>{wr=null}):t(ol.map(({slider:i})=>i))}var kn=[],Do=null,ll=!0,Wy="Europe/Zurich",Xy=new Intl.DateTimeFormat("en-GB",{hour:"2-digit",minute:"2-digit",hourCycle:"h23",timeZone:Wy});function qy(){let r=Xy.formatToParts(new Date),e="00",t="00";return r.forEach(i=>{i.type==="hour"?e=i.value:i.type==="minute"&&(t=i.value)}),{hours:e,minutes:t}}function Yy(r){let e=document.createElement("span");e.className="local-time__hours";let t=document.createElement("span");t.className="local-time__colon",t.textContent=":";let i=document.createElement("span");return i.className="local-time__minutes",r.textContent="",r.append(e,t,i),{container:r,hours:e,colon:t,minutes:i}}function jy(){for(let r=kn.length-1;r>=0;r-=1){let{container:e}=kn[r];e.isConnected||(delete e.dataset.localTimeInitialized,kn.splice(r,1))}!kn.length&&Do!==null&&(window.clearInterval(Do),Do=null)}function Qp(){if(jy(),!kn.length)return;let{hours:r,minutes:e}=qy();kn.forEach(({hours:t,minutes:i,colon:n})=>{t.textContent=r,i.textContent=e,n.style.opacity=ll?"1":"0"}),ll=!ll}function Zy(){Do!==null||!kn.length||(Do=window.setInterval(()=>{Qp()},1e3))}function Jp(r){var e,t,i,n;return r.matches("[data-local-time-display]")?r:(n=(i=(t=(e=r.querySelector("[data-local-time-display]"))!=null?e:r.querySelector(".text-size-footer"))!=null?t:r.querySelector(".heading-style-extras"))!=null?i:r.querySelector(".text-size-regular"))!=null?n:r}function cl(r=document){let e='[data-attribute="local-time"]',t="[data-local-time-display]",i=".local-time .heading-style-extras, .local-time .text-size-regular, .local-time [data-local-time-display]",n=new Set,s=r instanceof Element?r:null,o=l=>{l&&n.add(l)};if(s&&s.matches(e)&&o(Jp(s)),r.querySelectorAll(e).forEach(l=>{o(Jp(l))}),s&&s.matches(t)&&!s.closest(e)&&n.add(s),r.querySelectorAll(t).forEach(l=>{l.closest(e)||n.add(l)}),!n.size){let l=new Set;s&&(s.classList.contains("heading-style-extras")||s.classList.contains("text-size-regular"))&&l.add(s),r.querySelectorAll(i).forEach(c=>{l.add(c)}),l.forEach(c=>{var u;let h=(u=c.closest(t))!=null?u:c;n.add(h)})}if(!n.size)return;let a=!1;n.forEach(l=>{if(l.dataset.localTimeInitialized==="true")return;let c=Yy(l);l.dataset.localTimeInitialized="true",kn.push(c),a=!0}),a&&(ll=!0,Qp(),Zy())}li();var Jt,nm,mn,Yi,Hn,rm,sm,hl,om=function(){return typeof window!="undefined"},am=function(){return Jt||om()&&(Jt=window.gsap)&&Jt.registerPlugin&&Jt},lm=function(e){return typeof e=="string"},em=function(e){return typeof e=="function"},Oo=function(e,t){var i=t==="x"?"Width":"Height",n="scroll"+i,s="client"+i;return e===mn||e===Yi||e===Hn?Math.max(Yi[n],Hn[n])-(mn["inner"+i]||Yi[s]||Hn[s]):e[n]-e["offset"+i]},Fo=function(e,t){var i="scroll"+(t==="x"?"Left":"Top");return e===mn&&(e.pageXOffset!=null?i="page"+t.toUpperCase()+"Offset":e=Yi[i]!=null?Yi:Hn),function(){return e[i]}},$y=function(e,t,i,n){if(em(e)&&(e=e(t,i,n)),typeof e!="object")return lm(e)&&e!=="max"&&e.charAt(1)!=="="?{x:e,y:e}:{y:e};if(e.nodeType)return{y:e,x:e};var s={},o;for(o in e)s[o]=o!=="onAutoKill"&&em(e[o])?e[o](t,i,n):e[o];return s},cm=function(e,t){if(e=rm(e)[0],!e||!e.getBoundingClientRect)return{x:0,y:0};var i=e.getBoundingClientRect(),n=!t||t===mn||t===Hn,s=n?{top:Yi.clientTop-(mn.pageYOffset||Yi.scrollTop||Hn.scrollTop||0),left:Yi.clientLeft-(mn.pageXOffset||Yi.scrollLeft||Hn.scrollLeft||0)}:t.getBoundingClientRect(),o={x:i.left-s.left,y:i.top-s.top};return!n&&t&&(o.x+=Fo(t,"x")(),o.y+=Fo(t,"y")()),o},tm=function(e,t,i,n,s){return!isNaN(e)&&typeof e!="object"?parseFloat(e)-s:lm(e)&&e.charAt(1)==="="?parseFloat(e.substr(2))*(e.charAt(0)==="-"?-1:1)+n-s:e==="max"?Oo(t,i)-s:Math.min(Oo(t,i),cm(e,t)[i]-s)},im=function(){Jt=am(),om()&&Jt&&typeof document!="undefined"&&document.body&&(mn=window,Hn=document.body,Yi=document.documentElement,rm=Jt.utils.toArray,Jt.config({autoKillThreshold:7}),sm=Jt.config(),nm=1)},ps={version:"3.12.5",name:"scrollTo",rawVars:1,register:function(e){Jt=e,im()},init:function(e,t,i,n,s){nm||im();var o=this,a=Jt.getProperty(e,"scrollSnapType");o.isWin=e===mn,o.target=e,o.tween=i,t=$y(t,n,e,s),o.vars=t,o.autoKill=!!t.autoKill,o.getX=Fo(e,"x"),o.getY=Fo(e,"y"),o.x=o.xPrev=o.getX(),o.y=o.yPrev=o.getY(),hl||(hl=Jt.core.globals().ScrollTrigger),Jt.getProperty(e,"scrollBehavior")==="smooth"&&Jt.set(e,{scrollBehavior:"auto"}),a&&a!=="none"&&(o.snap=1,o.snapInline=e.style.scrollSnapType,e.style.scrollSnapType="none"),t.x!=null?(o.add(o,"x",o.x,tm(t.x,e,"x",o.x,t.offsetX||0),n,s),o._props.push("scrollTo_x")):o.skipX=1,t.y!=null?(o.add(o,"y",o.y,tm(t.y,e,"y",o.y,t.offsetY||0),n,s),o._props.push("scrollTo_y")):o.skipY=1},render:function(e,t){for(var i=t._pt,n=t.target,s=t.tween,o=t.autoKill,a=t.xPrev,l=t.yPrev,c=t.isWin,h=t.snap,u=t.snapInline,d,f,_,g,m;i;)i.r(e,i.d),i=i._next;d=c||!t.skipX?t.getX():a,f=c||!t.skipY?t.getY():l,_=f-l,g=d-a,m=sm.autoKillThreshold,t.x<0&&(t.x=0),t.y<0&&(t.y=0),o&&(!t.skipX&&(g>m||g<-m)&&d<Oo(n,"x")&&(t.skipX=1),!t.skipY&&(_>m||_<-m)&&f<Oo(n,"y")&&(t.skipY=1),t.skipX&&t.skipY&&(s.kill(),t.vars.onAutoKill&&t.vars.onAutoKill.apply(s,t.vars.onAutoKillParams||[]))),c?mn.scrollTo(t.skipX?d:t.x,t.skipY?f:t.y):(t.skipY||(n.scrollTop=t.y),t.skipX||(n.scrollLeft=t.x)),h&&(e===1||e===0)&&(f=n.scrollTop,d=n.scrollLeft,u?n.style.scrollSnapType=u:n.style.removeProperty("scroll-snap-type"),n.scrollTop=f+1,n.scrollLeft=d+1,n.scrollTop=f,n.scrollLeft=d),t.xPrev=t.x,t.yPrev=t.y,hl&&hl.update()},kill:function(e){var t=e==="scrollTo",i=this._props.indexOf(e);return(t||e==="scrollTo_x")&&(this.skipX=1),(t||e==="scrollTo_y")&&(this.skipY=1),i>-1&&this._props.splice(i,1),!this._props.length}};ps.max=Oo;ps.getOffset=cm;ps.buildGetter=Fo;am()&&Jt.registerPlugin(ps);j.registerPlugin(ps);var C1=/^((?!chrome|android).)*safari/i.test(navigator.userAgent),ul=/iPhone|iPad|iPod|Android/i.test(navigator.userAgent),hm="0px 24px 32px -12px rgba(0, 0, 0, 0.22), 0px 12px 20px -10px rgba(0, 0, 0, 0.12)",Ky="0px 0px 0px rgba(0, 0, 0, 0)",Jy={desktop:{minWidth:992,targetWidthPercentage:30},tablet:{minWidth:768,maxWidth:991,targetWidthPercentage:30},mobileLandscape:{minWidth:480,maxWidth:767,targetWidthPercentage:40},mobilePortrait:{maxWidth:479,targetWidthPercentage:100}},Ru=class{constructor(){this.containers=[];this.expandedContainers=new Set;this.animationInProgress=!1;this.eventHandlers=new Map;this.hoverEffectsInitialized=!1;this.containerGapCache=new WeakMap;this.expandedContainerBreakpoints=new WeakMap;this.init()}init(){this.findAndSetupContainers()}getCurrentBreakpoint(){let e=window.innerWidth||document.documentElement.clientWidth;return e<=479?"mobilePortrait":e<=767?"mobileLandscape":e<=991?"tablet":"desktop"}getBreakpointConfig(e=this.getCurrentBreakpoint()){return Jy[e]}normalizeGapValue(e){return!e||e==="normal"?"0px":e}captureContainerGap(e,t=this.getCurrentBreakpoint()){let i=getComputedStyle(e),n=this.normalizeGapValue(i.rowGap),s=this.normalizeGapValue(i.columnGap),a={gap:(i.gap&&i.gap!=="normal"?i.gap:`${n} ${s}`.trim()).trim(),rowGap:n,columnGap:s},l=this.containerGapCache.get(e);return l||(l=new Map,this.containerGapCache.set(e,l)),l.set(t,a),a}applyGapOverrides(e,t,i,n=0){var f,_,g;let s=this.getBreakpointConfig(i),o=this.captureContainerGap(e,i),a=(f=s.gapOverride)!=null?f:null,l=(_=s.rowGapOverride)!=null?_:a,c=(g=s.columnGapOverride)!=null?g:a;if(l===null&&c===null)return;let h=l!=null?l:o.rowGap,u=c!=null?c:o.columnGap,d=l!==null&&c!==null?`${l} ${c}`:l!==null?`${l} ${o.columnGap}`:c!==null?`${o.rowGap} ${c}`:o.gap;t.to(e,{gap:d,rowGap:h,columnGap:u,duration:.4,ease:"power2.out"},n)}restoreContainerGap(e,t,i,n=0){let s=this.containerGapCache.get(e),o=s==null?void 0:s.get(i);if(!o){let a=this.captureContainerGap(e,i);t.to(e,{gap:a.gap,rowGap:a.rowGap,columnGap:a.columnGap,duration:.4,ease:"power2.inOut"},n);return}t.to(e,{gap:o.gap,rowGap:o.rowGap,columnGap:o.columnGap,duration:.4,ease:"power2.inOut"},n)}resolveGapForBreakpoint(e,t){var d,f,_,g;let i=this.containerGapCache.get(e),n=(d=i==null?void 0:i.get(t))!=null?d:null;if(!n&&!this.expandedContainers.has(e)&&(n=this.captureContainerGap(e,t)),!n)return null;let s=this.getBreakpointConfig(t),o=(f=s.gapOverride)!=null?f:null,a=(_=s.rowGapOverride)!=null?_:o,l=(g=s.columnGapOverride)!=null?g:o,c=a!=null?a:n.rowGap,h=l!=null?l:n.columnGap;return{gap:a!==null&&l!==null?`${c} ${h}`:a!==null?`${c} ${n.columnGap}`:l!==null?`${n.rowGap} ${h}`:n.gap,rowGap:c,columnGap:h}}calculateExpandedDimensions(e,t){let i=parseFloat(e.dataset.originalWidth||"0"),n=parseFloat(e.dataset.originalHeight||"0");if(i<=0||n<=0){let h=Math.max(t,0);return{width:h,height:h}}let s=i/n||1,o=t>0?t:i,a=Math.min(o,i*5),l=o>=i?a:i,c=l/s;return{width:l,height:c}}getMediaItems(e){return Array.from(e.querySelectorAll(".project-media"))}getPrimaryMediaElement(e){return e.querySelector(".project-image, .project-video")}getPrimaryMediaElements(e){return e.map(t=>this.getPrimaryMediaElement(t)).filter(t=>!!t)}ensureMediaVisibility(e){let t=e.querySelectorAll(".project-image, .project-video");if(t.length===0)return;let i=Array.from(t);j.killTweensOf(i),j.set(i,{opacity:1})}clearInlineSizing(e){e.style.removeProperty("width"),e.style.removeProperty("height"),e.style.removeProperty("min-width"),e.style.removeProperty("max-width"),e.style.removeProperty("flex-basis"),e.style.removeProperty("flex-grow"),e.style.removeProperty("flex-shrink")}clearContainerGap(e){e.style.removeProperty("gap"),e.style.removeProperty("row-gap"),e.style.removeProperty("column-gap")}cacheMediaItemDimensions(e,t=!1){let i=parseFloat(getComputedStyle(document.documentElement).fontSize);Array.from(e).forEach(n=>{let s=getComputedStyle(n),o=parseFloat(s.width),a=parseFloat(s.height);if(!o||!a)return;let l=o/i,c=a/i;(t||!n.dataset.originalWidth)&&(n.dataset.originalWidth=l.toString(),n.dataset.originalWidthUnit="rem"),(t||!n.dataset.originalHeight)&&(n.dataset.originalHeight=c.toString(),n.dataset.originalHeightUnit="rem"),(t||!n.dataset.originalFlexBasis)&&(n.dataset.originalFlexBasis=s.flexBasis||""),(t||!n.dataset.originalMinWidth)&&(n.dataset.originalMinWidth=s.minWidth||""),(t||!n.dataset.originalMaxWidth)&&(n.dataset.originalMaxWidth=s.maxWidth||""),(t||!n.dataset.originalFlexGrow)&&(n.dataset.originalFlexGrow=s.flexGrow||""),(t||!n.dataset.originalFlexShrink)&&(n.dataset.originalFlexShrink=s.flexShrink||"")})}getMediaWrapperFromTarget(e){return e?e.classList.contains("project-media")?e:e.closest(".project-media"):null}normalizeHoverStates(e){this.getMediaItems(e).forEach(i=>{j.killTweensOf(i),j.set(i,{scale:1,y:0,opacity:1,clearProps:"transform",overwrite:!0});let n=this.getPrimaryMediaElement(i);n&&(j.killTweensOf(n),j.set(n,{scale:1,y:0,opacity:1,clearProps:"transform",overwrite:!0}),n.style.removeProperty("box-shadow"))})}findAndSetupContainers(){this.containers=[],document.querySelectorAll(".project-flex").forEach(t=>{this.containers.push(t),j.set(t,{position:"relative",overflow:"visible",willChange:"transform",backfaceVisibility:"hidden",transform:"translateZ(0)",touchAction:"pan-y"}),t.setAttribute("data-ripple-container","true");let i=this.getMediaItems(t);i.length>0&&(this.cacheMediaItemDimensions(i,!0),i.forEach(n=>{j.set(n,{position:"relative",zIndex:1,transformOrigin:"50% 50%"})})),this.captureContainerGap(t),this.setupContainerClickHandler(t)}),window.removeEventListener("resize",this.handleResize.bind(this)),window.addEventListener("resize",this.handleResize.bind(this))}initializeHoverEffects(){ul||this.hoverEffectsInitialized||(this.containers.forEach(e=>{if(this.expandedContainers.has(e))return;this.getMediaItems(e).forEach(i=>{this.setupDesktopHoverEffects(i,e)})}),this.hoverEffectsInitialized=!0)}setupDesktopHoverEffects(e,t){let i=e,n=()=>{!this.animationInProgress&&!this.expandedContainers.has(t)&&j.to(i,{scale:1.15,y:-10,zIndex:2,duration:.025,ease:"power3.out",overwrite:"auto",force3D:!0,backfaceVisibility:"hidden"})},s=()=>{!this.animationInProgress&&!this.expandedContainers.has(t)&&j.to(i,{scale:1,y:0,zIndex:1,duration:.05,ease:"power1.out",overwrite:"auto",force3D:!0})};e.removeEventListener("mouseenter",n),e.removeEventListener("mouseleave",s),e.addEventListener("mouseenter",n),e.addEventListener("mouseleave",s),this.eventHandlers.set(e,()=>{e.removeEventListener("mouseenter",n),e.removeEventListener("mouseleave",s)})}setupContainerClickHandler(e){let t=x=>{this.animationInProgress||(this.normalizeHoverStates(e),ul||j.set(x,{scale:1,y:0,clearProps:"transform,filter"}),this.toggleContainer(e,x))},o={pointerActive:!1,pointerId:null,touchId:null,startX:0,startY:0,startTime:0,moved:!1,pointerType:"",lastTarget:null,suppressClickUntil:0},a=()=>typeof performance!="undefined"&&typeof performance.now=="function"?performance.now():Date.now(),l=()=>{o.pointerActive=!1,o.pointerId=null,o.touchId=null,o.startX=0,o.startY=0,o.startTime=0,o.moved=!1,o.pointerType="",o.lastTarget=null},c=()=>{o.suppressClickUntil=a()+400},h=(x,E)=>{var H;let O=(H=this.getMediaWrapperFromTarget(x))!=null?H:E?this.getMediaWrapperFromTarget(E):null;O&&t(O)},u=typeof window!="undefined"&&"PointerEvent"in window,d=typeof window!="undefined"&&"ontouchstart"in window,f=x=>x==="mouse"||x==="touch"||x==="pen"?x:"",_=x=>{x.pointerType==="mouse"&&x.button!==0||(o.pointerActive=!0,o.pointerId=x.pointerId,o.pointerType=f(x.pointerType),o.startX=x.clientX,o.startY=x.clientY,o.startTime=a(),o.moved=!1,o.lastTarget=x.target,o.suppressClickUntil=0)},g=x=>{if(!o.pointerActive||o.pointerId!==x.pointerId||o.moved)return;let E=Math.abs(x.clientX-o.startX),O=Math.abs(x.clientY-o.startY);(E>10||O>10)&&(o.moved=!0,c())},m=x=>{if(!o.pointerActive||o.pointerId!==x.pointerId)return;let E=o.lastTarget,O=a()-o.startTime,H=!o.moved&&O<=350;l(),H&&h(x.target,E),c()},p=()=>{l(),c()},M=(x,E)=>{if(E===null)return null;for(let O=0;O<x.length;O+=1){let H=x.item(O);if(H&&H.identifier===E)return H}return null},b=x=>{if(o.pointerActive)return;let E=x.changedTouches[0];E&&(o.pointerActive=!0,o.touchId=E.identifier,o.pointerType="touch",o.startX=E.clientX,o.startY=E.clientY,o.startTime=a(),o.moved=!1,o.lastTarget=x.target,o.suppressClickUntil=0)},S=x=>{var W;if(!o.pointerActive||o.pointerType!=="touch"||o.moved)return;let E=(W=M(x.changedTouches,o.touchId))!=null?W:M(x.touches,o.touchId);if(!E)return;let O=Math.abs(E.clientX-o.startX),H=Math.abs(E.clientY-o.startY);(O>10||H>10)&&(o.moved=!0,c())},T=x=>{if(!o.pointerActive||o.pointerType!=="touch"||!M(x.changedTouches,o.touchId))return;let O=o.lastTarget,H=a()-o.startTime,W=!o.moved&&H<=350;l(),W&&h(x.target,O),c()},C=()=>{l(),c()},P=x=>{if(this.animationInProgress)return;let E=a();if(o.suppressClickUntil&&E<o.suppressClickUntil){o.suppressClickUntil=0;return}h(x.target),o.suppressClickUntil=E+400},I=[];if(e.addEventListener("click",P),I.push(()=>{e.removeEventListener("click",P)}),u){let x={passive:!0};e.addEventListener("pointerdown",_,x),e.addEventListener("pointermove",g,x),e.addEventListener("pointerup",m),e.addEventListener("pointercancel",p),I.push(()=>{e.removeEventListener("pointerdown",_,x),e.removeEventListener("pointermove",g,x),e.removeEventListener("pointerup",m),e.removeEventListener("pointercancel",p)})}else if(d){let x={passive:!0};e.addEventListener("touchstart",b,x),e.addEventListener("touchmove",S,x),e.addEventListener("touchend",T),e.addEventListener("touchcancel",C),I.push(()=>{e.removeEventListener("touchstart",b,x),e.removeEventListener("touchmove",S,x),e.removeEventListener("touchend",T),e.removeEventListener("touchcancel",C)})}this.eventHandlers.set(e,()=>{I.forEach(x=>{x()})})}findParentProjectDiv(e){let t=e;for(;t;){if(t.classList.contains("project-div"))return t;t=t.parentElement}return null}resetHoverEffects(){this.hoverEffectsInitialized=!1,this.eventHandlers.forEach((e,t)=>{(t.classList.contains("project-media")||t.classList.contains("project-image")||t.classList.contains("project-video"))&&(e(),this.eventHandlers.delete(t))})}fadeInAllImages(){if(this.refreshContainers(),this.containers.length===0)return;this.resetHoverEffects();let e=j.timeline({onStart:()=>{},onComplete:()=>{setTimeout(()=>{this.initializeHoverEffects()},100)}});this.containers.forEach((t,i)=>{let n=this.getMediaItems(t);n.length!==0&&(j.set(n,{opacity:0}),e.to(n,{opacity:1,duration:.8,stagger:.03,ease:"power2.out",overwrite:"auto"},.25))}),e.play()}prepareForTransition(){this.resetHoverEffects(),this.expandedContainers.size>0&&(this.expandedContainers.forEach(e=>{e&&e.classList.remove("gallery-expanded")}),this.expandedContainers.clear()),this.animationInProgress=!1}destroy(){this.resetHoverEffects(),window.removeEventListener("resize",this.handleResize.bind(this)),this.eventHandlers.forEach((e,t)=>{e()}),this.eventHandlers.clear(),this.expandedContainers.clear(),this.containers=[],this.containerGapCache=new WeakMap,this.expandedContainerBreakpoints=new WeakMap}handleResize(){if(this.animationInProgress)return;let e=this.getCurrentBreakpoint();this.containers.forEach(t=>{if(this.normalizeHoverStates(t),this.expandedContainers.has(t))this.animationInProgress||this.updateExpandedContainer(t,e);else{this.captureContainerGap(t,e);let i=this.getMediaItems(t);i.length>0&&this.cacheMediaItemDimensions(i,!0)}})}updateExpandedContainer(e,t=this.getCurrentBreakpoint()){let i=this.getMediaItems(e),n=parseFloat(getComputedStyle(document.documentElement).fontSize),s=e.clientWidth/n,o=this.getBreakpointConfig(t),a=s*(o.targetWidthPercentage/100),l=this.getPrimaryMediaElements(i);i.forEach(h=>{let{width:u,height:d}=this.calculateExpandedDimensions(h,a);j.to(h,{width:`${u}rem`,height:`${d}rem`,minWidth:`${u}rem`,maxWidth:`${u}rem`,flexBasis:`${u}rem`,flexGrow:0,flexShrink:0,scale:1,y:0,duration:.5,ease:"power2.out",overwrite:!0})}),l.length>0&&j.to(l,{boxShadow:hm,duration:.4,ease:"power2.out",overwrite:!0});let c=this.resolveGapForBreakpoint(e,t);c&&j.to(e,{gap:c.gap,rowGap:c.rowGap,columnGap:c.columnGap,duration:.4,ease:"power2.out"}),this.expandedContainerBreakpoints.set(e,t)}toggleContainer(e,t){this.animationInProgress||(this.animationInProgress=!0,this.expandedContainers.has(e)?(this.shrinkContainer(e),this.expandedContainers.delete(e)):(this.expandContainer(e,t),this.expandedContainers.add(e)))}customScrollTo(e,t=.66,i="quad.out"){let n=window.scrollY,s=e-n,o=performance.now(),a=o+t*1e3,l=h=>h*(2-h),c=h=>{if(h>=a){window.scrollTo(0,e);return}let u=(h-o)/(t*1e3),d=l(u),f=n+s*d;window.scrollTo(0,f),requestAnimationFrame(c)};requestAnimationFrame(c)}expandContainer(e,t){let i=this.getMediaItems(e);if(i.length===0){this.animationInProgress=!1;return}this.normalizeHoverStates(e),this.ensureMediaVisibility(e),this.cacheMediaItemDimensions(i,!0);let n=this.findParentProjectDiv(e),s=1.5*parseFloat(getComputedStyle(document.documentElement).fontSize),o=j.timeline({onComplete:()=>{this.animationInProgress=!1}});t&&this.sortItemsByDistanceFrom(i,t),e.classList.add("gallery-expanded");let a=this.getCurrentBreakpoint();this.expandedContainerBreakpoints.set(e,a);let l=parseFloat(getComputedStyle(document.documentElement).fontSize),c=e.clientWidth/l,h=this.getBreakpointConfig(a),u=c*(h.targetWidthPercentage/100),d=new Map;i.forEach(_=>{d.set(_,this.calculateExpandedDimensions(_,u))});let f=this.getPrimaryMediaElements(i);if(this.applyGapOverrides(e,o,a),f.length>0&&o.to(f,{boxShadow:hm,duration:.6,ease:"power2.out",overwrite:!0},0),o.set(i,{scale:1,y:0,clearProps:"transform"},0),o.to(i,{width:(_,g)=>{var p;let m=d.get(g);return`${(p=m==null?void 0:m.width)!=null?p:u}rem`},height:(_,g)=>{var p;let m=d.get(g);return`${(p=m==null?void 0:m.height)!=null?p:u}rem`},minWidth:(_,g)=>{var p;let m=d.get(g);return`${(p=m==null?void 0:m.width)!=null?p:u}rem`},maxWidth:(_,g)=>{var p;let m=d.get(g);return`${(p=m==null?void 0:m.width)!=null?p:u}rem`},flexBasis:(_,g)=>{var p;let m=d.get(g);return`${(p=m==null?void 0:m.width)!=null?p:u}rem`},flexGrow:0,flexShrink:0,scale:1,y:0,zIndex:_=>_+1,duration:.6,stagger:.04,ease:"power2.out",force3D:!0},0),n){let _=n.getBoundingClientRect().top+window.scrollY-s;o.call(()=>{ul?this.customScrollTo(_,.66,"quad.out"):j.to(window,{scrollTo:{y:_,autoKill:!0},duration:.66,ease:"quad.out"})},[],0)}}shrinkContainer(e){var u;let t=this.getMediaItems(e),i=(u=this.expandedContainerBreakpoints.get(e))!=null?u:this.getCurrentBreakpoint();if(t.length===0){e.classList.remove("gallery-expanded"),this.animationInProgress=!1,this.expandedContainerBreakpoints.delete(e);return}this.normalizeHoverStates(e);let n=this.getPrimaryMediaElements(t),s=this.findParentProjectDiv(e),o=1.5*parseFloat(getComputedStyle(document.documentElement).fontSize),a=s&&s.getBoundingClientRect().top<o,l=a&&s?s.getBoundingClientRect().top+window.scrollY-o:0,c=j.timeline({onComplete:()=>{e.classList.remove("gallery-expanded"),this.animationInProgress=!1,this.expandedContainerBreakpoints.delete(e),t.forEach(d=>{this.clearInlineSizing(d)}),n.forEach(d=>{this.clearInlineSizing(d),d.style.removeProperty("box-shadow")}),this.clearContainerGap(e),this.captureContainerGap(e,i),this.cacheMediaItemDimensions(t,!0)}});a&&s&&c.call(()=>{ul?this.customScrollTo(l,.66,"quad.out"):j.to(window,{scrollTo:{y:l,autoKill:!0},duration:.66,ease:"quad.out"})},[],0);let h=a?.1:0;c.set(t,{scale:1,y:0,clearProps:"transform"},0),n.length>0&&c.to(n,{boxShadow:Ky,duration:.5,ease:"power2.inOut",overwrite:!0},h),this.restoreContainerGap(e,c,i,h),c.to(t,{width:(d,f)=>{let _=parseFloat(f.dataset.originalWidth||"0"),g=f.dataset.originalWidthUnit||"rem";return`${_}${g}`},height:(d,f)=>{let _=parseFloat(f.dataset.originalHeight||"0"),g=f.dataset.originalHeightUnit||"rem";return`${_}${g}`},minWidth:(d,f)=>f.dataset.originalMinWidth||"auto",maxWidth:(d,f)=>f.dataset.originalMaxWidth||"none",flexBasis:(d,f)=>{let _=f.dataset.originalFlexBasis;if(_&&_!=="auto")return _;let{originalWidth:g}=f.dataset,m=f.dataset.originalWidthUnit||"rem";return g?`${g}${m}`:"auto"},flexGrow:(d,f)=>f.dataset.originalFlexGrow!==void 0&&f.dataset.originalFlexGrow!==""?f.dataset.originalFlexGrow:0,flexShrink:(d,f)=>f.dataset.originalFlexShrink!==void 0&&f.dataset.originalFlexShrink!==""?f.dataset.originalFlexShrink:1,scale:1,y:0,zIndex:1,duration:.5,stagger:.02,ease:"power2.inOut",force3D:!0,clearProps:"filter,transform"},h)}sortItemsByDistanceFrom(e,t){let i=t.getBoundingClientRect(),n=i.left+i.width/2,s=i.top+i.height/2;e.sort((o,a)=>{let l=o.getBoundingClientRect(),c=a.getBoundingClientRect(),h=l.left+l.width/2,u=l.top+l.height/2,d=c.left+c.width/2,f=c.top+c.height/2,_=Math.sqrt(Math.pow(h-n,2)+Math.pow(u-s,2)),g=Math.sqrt(Math.pow(d-n,2)+Math.pow(f-s,2));return _-g})}refreshContainers(){this.eventHandlers.forEach((e,t)=>{e()}),this.eventHandlers.clear(),this.findAndSetupContainers(),this.containers.forEach(e=>{j.set(e,{opacity:1,display:"flex",visibility:"visible",overflow:"visible"})})}reset(){this.resetHoverEffects(),this.refreshContainers()}fadeOutAllImages(){this.containers.forEach(e=>{let t=this.getMediaItems(e);t.length>0&&j.to(t,{opacity:0,duration:.5,stagger:.02,ease:"power2.in"})})}};function um(){return new Ru}var ms=null,Qy=!1;function dm(){return ms?ms.refreshContainers():ms=um(),ms}function fm(){ms&&(ms.prepareForTransition(),Qy=!1)}li();var eb=".section_about .about_wrapper",tb=".footer .component-footer",Ii=null,dl=null;function ib(r){var e,t;return r instanceof Element?r.matches('[data-barba="container"]')?r:r.closest('[data-barba="container"]'):typeof document!="undefined"?(t=(e=r.querySelector)==null?void 0:e.call(r,'[data-barba="container"]'))!=null?t:document.querySelector('[data-barba="container"]'):null}function nb(r){var t;let e=ib(r);return(t=e==null?void 0:e.getAttribute("data-barba-namespace"))!=null?t:null}function pm(r){let e=Array.from(r.querySelectorAll(eb)),t=Array.from(r.querySelectorAll(tb));e.forEach(o=>{o.__infoRevealType="about",o.__infoRevealExtraGroups=void 0}),t.forEach(o=>{o.__infoRevealType="footer"});let i=nb(r),n=new Set;if(i==="info"&&e.length&&t.length){let o=e[e.length-1];o.__infoRevealExtraGroups=t,t.forEach(a=>{n.add(a)})}return[...e,...t.filter(o=>!n.has(o))]}function mm(r,e){if(r.__infoRevealWords&&r.__infoRevealWords.length)return r.__infoRevealWords;let t=[],i=document.createTreeWalker(r,NodeFilter.SHOW_TEXT),n=[];for(;i.nextNode();){let s=i.currentNode;!s.textContent||!s.textContent.trim()||s.parentElement&&n.push(s)}return n.forEach(s=>{var l;let o=s.parentNode;if(!o)return;((l=s.textContent)!=null?l:"").split(/(\s+)/).forEach(c=>{if(c)if(/^\s+$/.test(c))o.insertBefore(document.createTextNode(c),s);else{let h=document.createElement("span");h.textContent=c,h.style.display="inline-block",h.style.opacity="0",h.style.transform=`translateY(${e*.6}px)`,h.classList.add("info-reveal-word"),o.insertBefore(h,s),t.push(h)}}),o.removeChild(s)}),r.__infoRevealWords=t,t}function rb(r,e){if(r.__infoRevealPrepared)return;let t=new Set,i=r.querySelector(".footer-logo-wrapper");i&&t.add(i),r.querySelectorAll(".footer-extra").forEach(a=>t.add(a));let n=Array.from(t);n.length&&j.set(n,{opacity:0,y:e*.4,willChange:"transform, opacity"});let s=new Set;r.querySelectorAll(".footer-extra .heading-style-extras, .footer-extra .text-size-regular, .footer-extra .contact, .footer-extra .copyright, .footer-extra [data-footer-stagger]").forEach(a=>{if(a.matches(".contact")){s.add(a);return}let l=a.closest(".contact");if(l){s.add(l);return}s.add(a)});let o=Array.from(s);o.length?(j.set(o,{opacity:0,y:e*.3,willChange:"transform, opacity"}),r.__infoRevealSecondary=o):r.__infoRevealSecondary=void 0,j.set(r,{opacity:0,y:e,willChange:"transform, opacity"}),r.__infoRevealInner=n,r.__infoRevealPrepared=!0}function sb(r,e){if(r.__infoRevealPrepared)return;let i=r.__infoRevealType==="footer"?[r]:Array.from(r.children),n=r.__infoRevealExtraGroups;n&&n.length&&n.forEach(s=>{i.includes(s)||i.push(s)}),i.forEach(s=>{if(s.__infoRevealPrepared)return;if(s.__infoRevealType==="footer"){rb(s,e);return}if(j.set(s,{opacity:0,y:e,willChange:"transform, opacity"}),s.dataset.fade==="bio"){let l=mm(s,e);l.length&&j.set(l,{opacity:0,y:e*.6}),s.__infoRevealInner=void 0,s.__infoRevealSecondary=void 0}else{let l=Array.from(s.children);l.length?(j.set(l,{opacity:0,y:e*.6,willChange:"transform, opacity"}),s.__infoRevealInner=l):s.__infoRevealInner=void 0;let c=new Set;s.querySelectorAll(".about-list .services_link, .about-list [data-animate-stagger], .about-list-item, .about-list .text-size-medium").forEach(u=>{if(u.matches(".about-list-item")){let f=u.querySelector(".services_link");if(f){c.add(f);return}}let d=u.closest(".services_link");if(d){c.add(d);return}c.add(u)});let h=Array.from(c).filter(u=>u!==s);h.length?(j.set(h,{opacity:0,y:e*.45,willChange:"transform, opacity"}),s.__infoRevealSecondary=h):s.__infoRevealSecondary=void 0}s.__infoRevealPrepared=!0}),r.__infoRevealChildren=i,r.__infoRevealPrepared=!0}function gm(r,e,t){var a;let i=(a=r.__infoRevealChildren)!=null?a:Array.from(r.children);if(!i.length)return;let n=j.timeline({defaults:{ease:"power2.out"}}),s=Math.max(e,.6),o=Math.max(s*.38,.14);i.forEach((l,c)=>{var m;let h=c*o,u=l.dataset.fade==="bio",d=l.__infoRevealType==="footer",f=l.__infoRevealWords||(u?mm(l,t):void 0),_=!u||d?l.__infoRevealInner:void 0,g=(!u||d)&&((m=l.__infoRevealSecondary)!=null&&m.length)?l.__infoRevealSecondary:void 0;n.to(l,{opacity:1,y:0,duration:s,onStart:()=>{l.__infoRevealActivated=!0},onComplete:()=>{l.style.removeProperty("will-change")}},h),f&&f.length&&n.to(f,{opacity:1,y:0,stagger:.01,duration:Math.max(s*.42,.26)},h+Math.min(s*.14,s-.2)),_&&_.length&&n.to(_,{opacity:1,y:0,duration:Math.max(s*.5,.38),stagger:{each:.06,from:"start",onComplete:(p,M)=>{M instanceof HTMLElement&&M.style.removeProperty("will-change")}}},h+Math.min(s*.1,.1)),g&&g.length&&n.to(g,{opacity:1,y:0,duration:Math.max(s*.38,.26),stagger:{each:.05,from:"start",onComplete:(p,M)=>{M instanceof HTMLElement&&M.style.removeProperty("will-change")}}},h+Math.min(s*.22,s-.16))})}function ob(r,e,t){r.forEach(i=>{var s;let n=i.target;if(!(!i.isIntersecting||n.__infoRevealActivated)){if(typeof window!="undefined"){let o=window.innerHeight||((s=document.documentElement)==null?void 0:s.clientHeight)||0;if(o&&i.boundingClientRect.top>o*.98)return}n.__infoRevealActivated=!0,Ii==null||Ii.unobserve(n),gm(n,e,t)}})}function Ni(r=document,e){var o,a;let t=(o=e==null?void 0:e.duration)!=null?o:.72,i=(a=e==null?void 0:e.offset)!=null?a:20;Ii&&Ii.disconnect();let n=typeof window!="undefined"&&"IntersectionObserver"in window,s=pm(r);if(s.length){if(dl=r,s.forEach(l=>{sb(l,i)}),!n){s.forEach(l=>{l.__infoRevealActivated||(l.__infoRevealActivated=!0,gm(l,t,i))});return}Ii=new IntersectionObserver(l=>ob(l,t,i),{threshold:0,rootMargin:"0px 0px -5% 0px"}),s.forEach(l=>{l.__infoRevealActivated||Ii==null||Ii.observe(l)})}}function Cr(){Ii&&(Ii.disconnect(),Ii=null),dl&&pm(dl).forEach(r=>{var t;r.style.removeProperty("will-change"),((t=r.__infoRevealChildren)!=null?t:Array.from(r.children)).forEach(i=>{var n,s;i.style.removeProperty("will-change"),(n=i.__infoRevealInner)==null||n.forEach(o=>o.style.removeProperty("will-change")),(s=i.__infoRevealSecondary)==null||s.forEach(o=>o.style.removeProperty("will-change"))})}),dl=null}li();function fl(){return window.innerWidth>480}var Pu=class r{constructor(){}static getInstance(){return r.instance||(r.instance=new r),r.instance}cleanup(){}},vm=Pu.getInstance();var _m=/[:x\/]/i;function ab(r){if(!r)return null;let e=r.trim();if(!e)return null;let t=e.replace(/\s+/g,"");if(_m.test(t)){let n=t.split(_m);if(n.length!==2)return null;let s=Number.parseFloat(n[0]),o=Number.parseFloat(n[1]);return!Number.isFinite(s)||!Number.isFinite(o)||s<=0||o<=0?null:{width:s,height:o}}let i=Number.parseFloat(t);return!Number.isFinite(i)||i<=0?null:{width:i,height:1}}function lb(r){for(let e of Array.from(r)){let t=e.toLowerCase(),i=t.startsWith("ratio")?t.replace(/^ratio[-_]?/,""):t;if(!i)continue;if(/^\d+(?:[x:\/]\d+)?$/.test(i)||/^\d+(?:\.\d+)?$/.test(i))return i}return null}function Lu(r){let e=".project-video, .case-media, .grid-video, .video-item, .video-item-prj, video[data-aspect], video[data-ratio]",t=[];r instanceof HTMLElement&&r.matches(e)&&t.push(r),t.push(...r.querySelectorAll(e)),t.forEach(i=>{var l,c,h,u;let n=lb(i.classList),s=(u=(h=(c=(l=i.getAttribute("aspect-ratio"))!=null?l:i.dataset.aspect)!=null?c:i.getAttribute("data-aspect"))!=null?h:i.getAttribute("data-ratio"))!=null?u:n,o=ab(s);if(!o){i.dataset.aspectRatioApplied==="true"&&(i.style.removeProperty("aspect-ratio"),delete i.dataset.aspectRatioApplied);return}i.style.setProperty("aspect-ratio",`${o.width} / ${o.height}`),i.dataset.aspectRatioApplied="true";let a=[];i.matches("video, iframe, embed")?a.push(i):a.push(...i.querySelectorAll("video, iframe, embed, picture, img")),a.forEach(d=>{d.style.width||(d.style.width="100%"),d.style.height||(d.style.height="100%"),d.style.objectFit||(d.style.objectFit=d instanceof HTMLVideoElement?"cover":d.style.objectFit)})})}function ji(r){Lu(r),typeof requestAnimationFrame=="function"&&requestAnimationFrame(()=>{Lu(r)}),setTimeout(()=>{Lu(r)},200),r.querySelectorAll("video").forEach(t=>{t.dataset.initialized!=="true"&&(t.muted=!0,t.loop=!0,t.playsInline=!0,t.setAttribute("playsinline",""),t.hasAttribute("controls")&&t.removeAttribute("controls"),t.controls=!1,t.dataset.initialized="true",cb(t))}),hb(r)}function cb(r){if(r.dataset.bgHandlerInitialized==="true")return;r.dataset.bgHandlerInitialized="true",r.style.backgroundColor="transparent";let e=null;if(r.classList.contains("video-item")||r.classList.contains("video-item-prj")?e=r:e=r.closest(".video-item, .video-item-prj, .grid-video"),!e)return;let t=e.classList.contains("case-media"),i=e.classList.contains("slide-video"),n=window.getComputedStyle(e).backgroundImage,s=e,o=r.poster||r.getAttribute("data-poster")||"",a=()=>{if(s.style.backgroundColor="transparent",!o)return;let c=s.style.backgroundImage,h=window.getComputedStyle(s).backgroundImage,u=s.dataset.bgPosterApplied==="true",d=c&&c!=="none"&&c.trim()!=="",f=h&&h!=="none"&&h.trim()!=="";!i&&(u||d||f)||((!s.style.backgroundImage||s.style.backgroundImage==="none")&&(s.style.backgroundImage=`url("${o}")`),s.style.backgroundSize||(s.style.backgroundSize="cover"),s.style.backgroundPosition||(s.style.backgroundPosition="center"),s.style.backgroundRepeat||(s.style.backgroundRepeat="no-repeat"),s.dataset.bgPosterApplied="true")};a();let l=()=>{e&&r.readyState>=3&&(a(),(t||i)&&(s.dataset.bgPosterApplied="true",s.style.setProperty("background-image","none","important")))};if(r.addEventListener("playing",()=>{setTimeout(l,50)}),r.addEventListener("loadeddata",()=>{!r.paused&&r.readyState>=3&&setTimeout(l,50)}),t||i){let c=()=>{if(n&&n!=="none"){s.style.setProperty("background-image",n,"important"),s.dataset.bgPosterApplied="true";return}o&&(!s.style.backgroundImage||s.style.backgroundImage==="none")&&(s.style.setProperty("background-image",`url("${o}")`,"important"),s.dataset.bgPosterApplied="true")};r.addEventListener("pause",c),r.addEventListener("ended",c)}!r.paused&&r.readyState>=3&&l()}function hb(r){r.querySelectorAll("img.grid-image, img.project-image, .grid-image > img, .project-image > img").forEach(t=>{if(t.dataset.bgHandlerInitialized==="true")return;t.dataset.bgHandlerInitialized="true";let i=null;if(t.classList.contains("grid-image")||t.classList.contains("project-image")?i=t:i=t.closest(".grid-image, .project-image"),!i)return;let n=()=>{i&&t.complete&&t.naturalWidth>0&&(i.style.backgroundColor="transparent")};if(t.complete&&t.naturalWidth>0){n();return}t.addEventListener("load",()=>{setTimeout(n,50)})})}function gs(r){r.querySelectorAll("video").forEach(t=>{if(t.paused){t.muted=!0;try{let i=t.play();i!==void 0&&i.catch(()=>{})}catch{}}})}function vs(){if(!fl())return;let r=document.querySelectorAll(".project-media, .project-image, .project-video, .grid-image, .grid-video"),e=new Set;r.forEach(i=>{if(!i)return;if(i.classList.contains("project-media")){e.add(i);return}let n=i.closest(".project-media");if(n){e.add(n);return}e.add(i)}),e.forEach(i=>{let l=1;i.style.zIndex="1",i.style.position="relative",i.addEventListener("mouseenter",()=>{let c=i.closest(".project-flex"),h=c==null?void 0:c.classList.contains("gallery-expanded"),u=i.classList.contains("expanded");!h&&!u&&(l++,i.style.zIndex=l.toString(),j.to(i,{scale:1.15,duration:.025,ease:"power2.out",overwrite:"auto"}))}),i.addEventListener("mouseleave",()=>{let c=i.closest(".project-flex"),h=c==null?void 0:c.classList.contains("gallery-expanded"),u=i.classList.contains("expanded");!h&&!u&&j.to(i,{scale:1,duration:.12,ease:"power3.inOut",overwrite:"auto",onComplete:()=>{i.style.zIndex="1"}})})}),[{trigger:"#creative-hover",target:".creative-direction-hover"},{trigger:"#digital-hover",target:".digital-hover"},{trigger:"#identity-hover",target:".identity-hover"},{trigger:"#imaging-hover",target:".imaging-hover"}].forEach(({trigger:i,target:n})=>{let s=document.querySelector(i),o=document.querySelector(n);if(!s||!o)return;ji(o);let a=j.timeline({paused:!0}).set(o,{display:"flex"}).fromTo(o,{opacity:0},{opacity:1,duration:.1,ease:"power2.out"}),l=j.timeline({paused:!0}).to(o,{opacity:0,duration:.1,ease:"power2.in",onComplete:()=>{j.set(o,{display:"none"})}});s.addEventListener("mouseenter",()=>{l.kill(),a.restart(),o.querySelectorAll("video").forEach(h=>{try{h.play()}catch{}})}),s.addEventListener("mouseleave",()=>{a.kill(),l.restart(),o.querySelectorAll("video").forEach(h=>{try{h.pause(),h.currentTime=0}catch{}})})})}li();var Sm=479,Mm={height:"32px",borderRadius:"15.5px"},ub={height:"36px",borderRadius:"17.5px"},db="2.5px",gn=null,ym,No=null,bm=new Map,_s=!1,xm=!1,pl=!1;function Em(){if(!gn||typeof window=="undefined")return;let e=window.innerWidth<=Sm?ub:Mm;Object.assign(gn.style,e)}function fb(){if(typeof window=="undefined"||xm)return;let r=()=>window.requestAnimationFrame(Em),e=window.matchMedia(`(max-width: ${Sm}px)`);typeof e.addEventListener=="function"?e.addEventListener("change",r):e.addListener(r),window.addEventListener("resize",r),xm=!0}function Iu(){if(gn)return gn;gn=document.createElement("div"),gn.classList.add("active-link-background","active-link-overlay"),Object.assign(gn.style,{position:"absolute",top:db,...Mm,zIndex:"1",pointerEvents:"none"}),typeof window!="undefined"&&(Em(),fb());let r=document.querySelector(".navbar-container");return r&&!r.querySelector(".active-link-background")&&(r.appendChild(gn),vb(),pb()),gn}function Du(){_s=!0,document.querySelectorAll(".nav-button").forEach(e=>{j.set(e,{backgroundColor:"transparent"}),e.classList.add("is-transitioning")})}function wm(){_s=!1,document.querySelectorAll(".nav-button").forEach(e=>{e.classList.remove("is-transitioning")}),pl&&(pl=!1,typeof window!="undefined"?window.requestAnimationFrame(()=>ci()):ci())}function pb(){document.querySelectorAll(".nav-button").forEach(e=>{let t=bm.get(e);t&&(e.removeEventListener("mouseenter",t.mouseenter),e.removeEventListener("mouseleave",t.mouseleave),e.removeEventListener("click",t.click));let i=()=>{!e.classList.contains("w--current")&&!e.classList.contains("is-transitioning")&&!_s&&j.to(e,{backgroundColor:"light-dark(rgba(0, 0, 0, 0.04), rgba(255, 255, 255, 0.06))",duration:.2,ease:"power2.out",overwrite:"auto"})},n=()=>{!e.classList.contains("w--current")&&!_s&&j.to(e,{backgroundColor:"transparent",duration:.3,ease:"power2.out",overwrite:"auto"})},s=()=>{j.set(e,{backgroundColor:"transparent"}),Du()};e.addEventListener("mouseenter",i),e.addEventListener("mouseleave",n),e.addEventListener("click",s),bm.set(e,{mouseenter:i,mouseleave:n,click:s})})}function mb(){return document.querySelector(".nav-button.w--current")}function ci(r,e){var b;let t=Iu();if(!t)return;if(!r&&_s){pl=!0;return}pl=!1;let{duration:i=.5,ease:n="power2.out",delay:s=0}=e||{},o=document.querySelector(".navbar-container");if(!o)return;let a=window.location.pathname,l=r||document.querySelector('[data-barba="container"]')||void 0,c=l==null?void 0:l.getAttribute("data-barba-namespace"),h=S=>S?["cases","projects","digital","graphic","direction","imaging"].includes(S)?document.querySelector('[data-page="projects"]'):S==="info"?document.querySelector('[data-page="info"]'):S==="archive"?document.querySelector('[data-page="archive"]'):null:null,u=()=>a==="/info"||a==="/"?document.querySelector('[data-page="info"]'):a==="/archive"?document.querySelector('[data-page="archive"]'):a.startsWith("/projects")||a.includes("/case")||["digital","graphic","direction","imaging"].some(S=>a.includes(S))?document.querySelector('[data-page="projects"]'):document.querySelector(".nav-button.w--current"),d=(b=h(c))!=null?b:u();if(!d)return;let f=mb(),_=o.getBoundingClientRect(),g=d.getBoundingClientRect(),m=g.left-_.left,p=g.width;No&&No.kill(),f&&f!==d&&f.classList.remove("w--current"),d.classList.add("w--current"),Array.from(document.querySelectorAll(".nav-button")).forEach(S=>{let T=S===d,C=S.querySelector(".nav_text");T?(S.style.setProperty("color","var(--text-white)","important"),C==null||C.style.setProperty("color","var(--text-white)","important")):(S.style.removeProperty("color"),C==null||C.style.removeProperty("color"))}),j.set(t,{visibility:"visible",opacity:1}),No=j.to(t,{left:m,width:p,duration:i,ease:"power2.out",delay:s,overwrite:"auto",onComplete:()=>{No=null}}),gb()}function gb(){document.querySelectorAll(".nav-button").forEach(e=>{j.set(e,{backgroundColor:"transparent"})})}function vb(){let r=document.querySelectorAll(".nav-button"),e={attributes:!0,attributeFilter:["class"]},t=function(i){if(!_s)for(let n of i)n.type==="attributes"&&n.attributeName==="class"&&(No||ci())};ym=new MutationObserver(t),r.forEach(i=>{ym.observe(i,e)})}li();var ml=["projects","digital","graphic","direction","imaging"];var Tm=.5,Am="power2.out",Cm=null;function Rm(r){let e={display:"flex",gap:"0.5rem",flexDirection:"row"};Object.assign(r.style,e)}function Pm(r){let e=document.querySelector(".projects-nav");if(!e)return;Cm=e;let t=ml.includes(r.next.namespace);if(!ml.includes(r.next.namespace)){j.to(e,{opacity:0,duration:Tm,ease:Am,onComplete:()=>{j.set(e,{display:"none"})}});return}if(t){if(Rm(e),r.current.namespace!==r.next.namespace){e.querySelectorAll("a").forEach(o=>{o.classList.remove("w--current")});let s=e.querySelector(`[href*="${r.next.namespace}"]`);s&&s.classList.add("w--current")}ml.includes(r.current.namespace)||j.set(e,{display:"flex",opacity:0,visibility:"visible"})}}function Lm(r=!0){let e=document.querySelector(".projects-nav");if(!e)return;Cm=e;let t=document.querySelector('[data-barba="container"]'),i=t==null?void 0:t.getAttribute("data-barba-namespace");if(!ml.includes(i)){j.set(e,{display:"none",opacity:0});return}Rm(e),r?j.fromTo(e,{opacity:0},{opacity:1,duration:Tm,ease:Am,delay:.1}):j.set(e,{opacity:0,display:"flex",visibility:"visible"})}li();ko();var Bm=.22;function ys(r,e={}){var u,d;let{animateMedia:t=!0}=e,i=r,n=Array.from(r.querySelectorAll(".project-div"));if(i.__projectsEntranceHandled=!0,!n.length){if(i.__projectsEntrancePromise)return i.__projectsEntrancePromise;let f=new Promise(_=>{let g=new MutationObserver(()=>{if(!Array.from(r.querySelectorAll(".project-div")).length)return;g.disconnect(),i.__projectsEntranceObserver=null;let p=ys(r,e);p?p.then(_).catch(_):_()});i.__projectsEntranceObserver=g,g.observe(r,{childList:!0,subtree:!0})});return i.__projectsEntrancePromise=f,i.__projectsFiltersInitialized=!1,f}i.__projectsEntranceObserver&&(i.__projectsEntranceObserver.disconnect(),i.__projectsEntranceObserver=null);let s=(u=r.querySelector(".project-list-wrapper"))!=null?u:r.querySelector(".project-list");if(!t){let f=(d=r.querySelector(".projects-wrapper"))!=null?d:r.querySelector(".projects_wrapper");f&&j.set(f,{pointerEvents:"auto"}),j.set(n,{pointerEvents:"auto"});let _=n.map(m=>m.querySelector(".description-div")).filter(m=>!!m);_.length&&j.set(_,{pointerEvents:"auto"});let g=r.querySelectorAll(".project-image, .project-video, .grid-image, .grid-video, .video-item");return g.length&&j.set(g,{pointerEvents:"auto"}),s&&j.set(s,{pointerEvents:"auto"}),i.__projectsEntranceTimeline=void 0,i.__projectsEntrancePromise=null,null}let o=Mt.distance*1.1;i.__projectsEntranceTimeline&&(i.__projectsEntranceTimeline.kill(),delete i.__projectsEntranceTimeline),i.__projectsEntrancePromise=null,i.__projectsFiltersInitialized=!1,s&&j.set(s,{autoAlpha:1,pointerEvents:"none"}),j.set(n,{autoAlpha:0,y:o,overwrite:"auto",pointerEvents:"none",visibility:"hidden"});let a=n.map(f=>f.querySelector(".description-div")).filter(f=>!!f);a.length&&j.set(a,{autoAlpha:0,y:o*.6,overwrite:"auto",pointerEvents:"none",visibility:"hidden"});let l=r.querySelectorAll(".project-image, .project-video, .grid-image, .grid-video, .video-item");l.length&&j.set(l,{autoAlpha:0,overwrite:"auto",pointerEvents:"none",visibility:"hidden"});let c=j.timeline({defaults:{ease:"power2.out"}});i.__projectsEntranceTimeline=c,c.addLabel("start",Bm),c.to(n,{autoAlpha:1,y:0,duration:Mt.enter,overwrite:"auto",onStart:()=>{j.set(n,{visibility:"visible"})},onComplete:()=>{j.set(n,{pointerEvents:"auto"})}},"start"),n.forEach(f=>{let _=f.querySelector(".description-div");_&&c.to(_,{autoAlpha:1,y:0,duration:.55,pointerEvents:"auto",overwrite:"auto",onStart:()=>{_.style.visibility="visible"}},"start+=0.05");let g=f.querySelectorAll(".project-image, .project-video, .grid-image, .grid-video, .video-item");g.length&&c.to(g,{autoAlpha:1,duration:.6,stagger:.04,overwrite:"auto",onStart:()=>{g.forEach(m=>{m.style.visibility="visible"})},onComplete:()=>{g.forEach(m=>{m.style.pointerEvents="auto"})}},`start+=${Bm}`)});let h=new Promise(f=>{let _=!1,g=()=>{_||(_=!0,i.__projectsEntranceTimeline===c&&delete i.__projectsEntranceTimeline,s&&(s.style.pointerEvents="auto"),i.__projectsEntrancePromise=null,f())};c.eventCallback("onComplete",g),c.eventCallback("onInterrupt",g)});return i.__projectsEntrancePromise=h,h}var km=Zp;ko();li();li();function Hm(){[".active-link-background",".barba-container",".project-flex",".project-div"].forEach(e=>{let t=document.querySelectorAll(e);t.length>0&&t.forEach(i=>{i.style.willChange="transform, opacity",(e===".barba-container"||e===".project-flex")&&(i.style.transform="translateZ(0)")})})}function Ho(){['[data-barba="container"]',".projects-nav",".project-flex"].forEach(e=>{let t=document.querySelectorAll(e);t.length>0&&t.forEach(i=>{let n=i;n.style.willChange="transform, opacity",e==='[data-barba="container"]'&&(n.style.backfaceVisibility="hidden",n.style.transform="translateZ(0)")})})}function bs(){setTimeout(()=>{let r=document.querySelectorAll('[style*="will-change"]:not(.barba-container):not(.project-flex):not(.active-link-background)');r.length>0&&r.forEach(e=>{let t=e;t.style.willChange="auto"}),typeof j!="undefined"&&j.globalTimeline.getChildren().forEach(e=>{e.progress()===1&&e.kill()})},100)}function zm(){let r=document.querySelectorAll(".project-flex, .project-div");r.length>0&&r.forEach(e=>{e.style.willChange="transform, opacity",e.classList.contains("project-flex")&&(e.style.backfaceVisibility="hidden",e.style.transform="translateZ(0)")})}bl();var cf=null,hf=null;function Yr(){return cf||(cf=Promise.resolve().then(()=>($m(),Zm))),cf}function mh(){return hf||(hf=Promise.resolve().then(()=>(r0(),n0))),hf}var jr=null,gh=!1,Ea=0;function s0(r){Ea+=1;let e=Ea;gh=!1,jr=(async()=>{var t;try{window.currentPanoramaSlider&&(window.currentPanoramaSlider.destroy(),window.currentPanoramaSlider=void 0);let i=await km(r!=null?r:document);return e!==Ea?((t=i==null?void 0:i.destroy)==null||t.call(i),null):(i&&(window.currentPanoramaSlider=i),i)}catch{return null}})()}function ro(r=1.15,e=0){let t=i=>{jr=null,!(!i||gh)&&(gh=!0,i.fadeIn(r,e))};jr?jr.then(i=>{t(i)}).catch(()=>{jr=null}):window.currentPanoramaSlider&&t(window.currentPanoramaSlider)}var Ma={async beforeEnter({next:r}){var d,f,_,g;let e=r==null?void 0:r.container;if(!(e instanceof HTMLElement))return;let{destroyProjectFilters:t,initProjectFilters:i,applyProjectFilter:n}=await Yr();t(),Ho(),ci(e),ji(e),dm(),vs(),Ni(e),i(e,{initialListState:"hidden"});let s=new URL(window.location.href),o=(f=(d=s.searchParams.get("category"))!=null?d:s.searchParams.get("capability"))!=null?f:"",a=o?o.toLowerCase().trim():"all";n(a,{animate:!1,updateUrl:!1});let l=Array.from(e.querySelectorAll('.project-div[style*="display: block"]'));l.length&&j.set(l,{opacity:0,overwrite:"auto"});let c=l.flatMap(m=>Array.from(m.querySelectorAll(".project-image, .project-video, .grid-image, .grid-video, .video-item")));c.length&&j.set(c,{opacity:0,overwrite:"auto"});let h=l.flatMap(m=>Array.from(m.querySelectorAll(".description-div")));h.length&&j.set(h,{opacity:0,overwrite:"auto"});let u=(_=e.querySelector(".project-list-wrapper"))!=null?_:e.querySelector(".project-list");if(u){j.set(u,{autoAlpha:0,pointerEvents:"none"});let m=(g=u.querySelector("[data-filter-empty]"))!=null?g:u.querySelector(".w-dyn-empty");m&&j.set(m,{autoAlpha:0,display:"none",pointerEvents:"none"})}},async beforeLeave(){Cr();let{destroyProjectFilters:r}=await Yr();r(),window.currentPanoramaSlider&&(window.currentPanoramaSlider.destroy(),window.currentPanoramaSlider=void 0)},async afterEnter({next:r}){let e=r==null?void 0:r.container;if(!(e instanceof HTMLElement))return;Ni(e),setTimeout(()=>{bs()},1e3);let t=e;if(!t.__projectsFiltersInitialized){let{initProjectFilters:i}=await Yr();i(e,{initialListState:"visible"}),t.__projectsFiltersInitialized=!0}}},o0=[{namespace:"info",beforeEnter({next:r}){let e=r==null?void 0:r.container;if(!(e instanceof HTMLElement))return;let t=document.querySelector('[data-page="projects"]');t&&(t.classList.remove("w--current"),t.style.color="var(--text-dark)"),ci(e),vs(),s0(e),Ni(e)},afterEnter({next:r}){let e=r==null?void 0:r.container;e instanceof HTMLElement&&(!jr&&!window.currentPanoramaSlider&&s0(e),Ni(e))},beforeLeave(){Ea+=1,jr=null,gh=!1,Cr(),window.currentPanoramaSlider&&window.currentPanoramaSlider.fadeOut(.3).then(()=>{window.currentPanoramaSlider&&(window.currentPanoramaSlider.destroy(),window.currentPanoramaSlider=void 0)})}},{namespace:"archive",beforeEnter({next:r}){let e=r==null?void 0:r.container;if(!e)return;let t=document.querySelector('[data-page="projects"]');t&&(t.classList.remove("w--current"),t.style.color="var(--text-dark)"),ci(e),Ni(e)},beforeLeave(){Cr(),window.currentPanoramaSlider&&(window.currentPanoramaSlider.destroy(),window.currentPanoramaSlider=void 0)},afterEnter({next:r}){let e=r==null?void 0:r.container;if(!e||(Ni(e),!document.body.contains(e)))return;e.getAttribute("data-barba-namespace")==="archive"&&requestAnimationFrame(()=>{document.body.contains(e)&&mh().then(({initializeArchiveSphere:i})=>{i(e)})})}},{namespace:"cases",beforeEnter({next:r}){let e=r==null?void 0:r.container;e&&(Ho(),ci(e),vs(),ji(e),Tr(e),xs(e),Ni(e))},afterEnter({next:r}){let e=r==null?void 0:r.container;e&&(Ni(e),setTimeout(()=>{bs()},1e3))},beforeLeave(){Cr(),Io(!0)}},{namespace:"projects",...Ma},{namespace:"digital",...Ma},{namespace:"graphic",...Ma},{namespace:"direction",...Ma},{namespace:"imaging",...Ma}];var a0=Array.from(vl);function vh(r){var e,t;return r?r.namespace?r.namespace:(t=(e=r.container)==null?void 0:e.getAttribute("data-barba-namespace"))!=null?t:null:null}async function VT(r,e){let t=[],i=Bo(r,e);t.push(i),r==="cases"&&Ar(Mt.enter,.1),r==="info"&&ro(Mt.enter,0),await Promise.all(t)}async function GT(r,e){if(await Um(r,e),r==="archive"){let{destroyArchiveSphere:t}=await mh();t()}}var Zr={name:"page-transition",sync:!1,before(r){var e,t,i,n;Du(),Pm({current:{namespace:(t=(e=r.current)==null?void 0:e.namespace)!=null?t:""},next:{namespace:(n=(i=r.next)==null?void 0:i.namespace)!=null?n:""}})},leave(r){var t,i,n;if(!((t=r.current)!=null&&t.container))return Promise.resolve();let e=vh(r.current);return ci((n=(i=r.next)==null?void 0:i.container)!=null?n:void 0),GT(e,r.current.container)},beforeEnter(r){var i;let e=(i=r.next)==null?void 0:i.container;if(!e)return;let t=vh(r.next);Uo(t,e),ji(e),gs(e)},enter(r){var i;let e=(i=r.next)==null?void 0:i.container;if(!e)return Promise.resolve();let t=vh(r.next);return gs(e),VT(t,e)},after(r){var e;if(wm(),(e=r.next)!=null&&e.container){gs(r.next.container),ci(r.next.container);let t=vh(r.next);t&&vl.has(t)&&ys(r.next.container,{animateMedia:!1})}}},l0={name:"project-page-transition",from:{namespace:a0},to:{namespace:a0},sync:!1,before:Zr.before,leave:Zr.leave,beforeEnter:Zr.beforeEnter,enter:Zr.enter,after:Zr.after};bl();ko();var c0=`
.barba-container {
    position: relative;
    overflow-x: hidden;
  }
  .barba-container.is-entering,
  .barba-container.is-leaving {
    transform: translateX(100%);
  }
  .barba-container.is-entering.from-left {
    transform: translateX(-100%);
  }
  
  /* Gallery styles */
  .project-flex {
    position: relative;
    overflow: visible;
    transition: gap 0.4s ease, height 0.5s ease;
    will-change: transform;
    backface-visibility: hidden;
    perspective: 1000px;
    transform: translateZ(0);
  }

  .project-media {
    position: relative;
    transition: transform 0.3s ease, filter 0.3s ease;
    will-change: transform, opacity;
    transform: translateZ(0);
    backface-visibility: hidden;
  }

  .slider,
  .slider-wrapper,
  .case-slider,
  [data-smooothy] {
    transform: translateZ(0);
    backface-visibility: hidden;
    will-change: transform;
  }

  .slider img,
  .slider picture,
  .slider video,
  .case-slider img,
  .case-slider picture,
  .case-slider video,
  [data-smooothy] img,
  [data-smooothy] picture,
  [data-smooothy] video {
    transform: translateZ(0.01px);
    backface-visibility: hidden;
    will-change: transform, opacity;
  }

  .project-media .project-image,
  .project-media .project-video {
    transition: transform 0.3s ease, box-shadow 0.25s ease, filter 0.3s ease;
    will-change: transform, box-shadow, opacity;
    backface-visibility: hidden;
    box-shadow: none;
  }

  .project-media:hover .project-image,
  .project-media:hover .project-video {
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.12), 0 4px 6px -2px rgba(0, 0, 0, 0.08);
  }

  /* Gallery in expanded state */
  .project-flex.gallery-expanded .project-media .project-image,
  .project-flex.gallery-expanded .project-media .project-video {
    box-shadow: 0 24px 32px -12px rgba(0, 0, 0, 0.22), 0 12px 20px -10px rgba(0, 0, 0, 0.12);
  }

  /* Prevent mobile scroll jank during animation */
  .animating {
    pointer-events: none;
  }

  .case-layout-pending,
  .case-layout-ready {
    transition: opacity 0.45s ease, transform 0.6s ease;
    will-change: opacity, transform;
  }

  .case-layout-pending {
    opacity: 0;
    transform: translateY(12px);
  }

  .case-layout-ready {
    opacity: 1;
    transform: translateY(0);
  }

  /* Hide native video controls for background videos */
  video::-webkit-media-controls,
  video::-webkit-media-controls-panel,
  video::-webkit-media-controls-play-button,
  video::-webkit-media-controls-start-playback-button,
  video::-webkit-media-controls-overlay-play-button {
    display: none !important;
  }

  video::-ms-media-controls-panel {
    display: none !important;
  }
`;var u0=document.createElement("style");u0.textContent=c0;document.head.appendChild(u0);var or=null,h0=!1;function wa(r,e=4,t=600){let i=Math.max(1,e),n=()=>{r instanceof HTMLElement&&!document.body.contains(r)||(pn(r),i-=1,!(i<=0)&&window.setTimeout(n,t))};n()}function WT(){or&&j.set(or,{opacity:0,y:Mt.distance,willChange:"transform, opacity"})}function d0(){return!or||h0?Promise.resolve():(h0=!0,new Promise(r=>{j.to(or,{opacity:1,y:0,duration:Mt.enter,ease:Mt.ease,onComplete:()=>{or==null||or.style.removeProperty("will-change"),r()}})}))}on.default.init({debug:!1,sync:!1,preventRunning:!0,transitions:[Zr,l0],views:o0,prefetch:!0});on.default.hooks.before(r=>{Ho()});on.default.hooks.beforeLeave(({current:r})=>{let e=r==null?void 0:r.container;e instanceof HTMLElement||e instanceof Document?tl(e):tl()});on.default.hooks.leave(r=>{var t,i,n;let e=(i=(t=r.current)==null?void 0:t.namespace)!=null?i:null;if(_h(e)){let s=(n=r.current)==null?void 0:n.container;if(s){let o=s.querySelectorAll(".project-image, .project-video");j.set(o,{opacity:1})}}});on.default.hooks.afterEnter(({next:r})=>{var i,n,s;let e=r!=null&&r.container&&r.container instanceof HTMLElement?r.container:document;pn(e);let t=(s=(n=r==null?void 0:r.namespace)!=null?n:(i=r==null?void 0:r.container)==null?void 0:i.getAttribute("data-barba-namespace"))!=null?s:null;t==="cases"&&(r==null?void 0:r.container)instanceof HTMLElement&&wa(r.container),(r==null?void 0:r.container)instanceof HTMLElement&&r.container.querySelector(".case-slider")&&t!=="cases"&&(Tr(r.container),Ar(Mt.enter,.1)),nl(e).then(o=>{o.length&&o.forEach(a=>{a.fadeIn(Mt.enter,0)})}).catch(o=>{}),t==="info"&&ro(Mt.enter,0)});on.default.hooks.once(async({next:r})=>{var s,o,a;let e=(s=r==null?void 0:r.container)!=null?s:document.querySelector('[data-barba="container"]'),t=(a=(o=r==null?void 0:r.namespace)!=null?o:e==null?void 0:e.getAttribute("data-barba-namespace"))!=null?a:null;e instanceof HTMLElement?pn(e):pn(document),t==="cases"&&e instanceof HTMLElement&&wa(e);let i=[d0()],n=e instanceof HTMLElement?e:null;if(n!=null&&n.querySelector(".case-slider")&&t!=="cases"&&(Tr(n),Ar(Mt.enter,.1)),nl(n!=null?n:document).then(l=>{l.length&&l.forEach(c=>{c.fadeIn(Mt.enter,0)})}).catch(l=>{}),n){Uo(t,n);let l=Bo(t,n);i.push(l)}if(t==="info"&&ro(Mt.enter,0),t==="cases"&&(n&&wa(n),xs(n!=null?n:document)),await Promise.all(i),t&&_h(t)&&n){let{initProjectFilters:l}=await Yr();l(n,{initialListState:"visible"});let c=n;c.__projectsFiltersInitialized=!0,ys(n,{animateMedia:!1})}});on.default.hooks.enter(r=>{let e=document.querySelector(".preload-container");e&&(e.style.display="none")});on.default.hooks.after(async({next:r})=>{"scrollRestoration"in history&&(history.scrollRestoration="manual");try{r!=null&&r.container&&(Eh(),cl(r.container),await new Promise(e=>setTimeout(e,100)),gs(r.container),setTimeout(()=>{bs()},1e3))}catch{}setTimeout(()=>{bs()},1e3),cl(document)});on.default.hooks.afterLeave(r=>{var e;fm(),(e=r.current)!=null&&e.container?Lo(r.current.container):Lo(document),typeof window!="undefined"&&window.scrollTo(0,0)});function _h(r){return r?["projects","digital","graphic","direction","imaging"].includes(r):!1}document.addEventListener("DOMContentLoaded",()=>{or=document.querySelector(".navbar-container"),cl(document),WT(),d0(),typeof window!="undefined"&&window.scrollTo(0,0),Iu(),ci(),ji(document),vs(),pn(document),Lm(!1),zm(),Hm();let r=document.querySelector('[data-barba="container"]'),e=()=>{var c;if(!(r instanceof HTMLElement))return;let n=(c=r.getAttribute("data-barba-namespace"))!=null?c:null,s=r,o=n?_h(n):!1,a=[];if(Ni(r),!o||!s.__projectsEntranceHandled){Uo(n,r);let h=Bo(n,r);a.push(h)}Promise.all(a.length?a:[Promise.resolve()]).then(async()=>{if(o&&!s.__projectsFiltersInitialized){let{initProjectFilters:h}=await Yr();h(r,{initialListState:"visible"}),s.__projectsFiltersInitialized=!0}o&&!s.__projectsEntranceHandled&&ys(r,{animateMedia:!1}),n==="info"&&ro(Mt.enter,0),n==="cases"&&xs(r)}),r.querySelector(".case-slider")&&(Tr(r),Ar(Mt.enter,.1)),n==="cases"&&r&&wa(r)},t=r instanceof HTMLElement?r.getAttribute("data-barba-namespace"):null,i=window.Webflow;if(e(),t&&_h(t)&&i&&typeof i.push=="function"&&i.push(e),!(r instanceof HTMLElement)){let n=document;n.querySelector(".case-slider")&&(Tr(n),Ar(Mt.enter,.1)),t==="cases"&&(wa(n),xs(n))}});window.addEventListener("resize",()=>{ci(),fl()&&ji(document),window.currentPanoramaSlider&&window.currentPanoramaSlider.update()});window.addEventListener("unload",()=>{vm.cleanup(),window.currentPanoramaSlider&&(window.currentPanoramaSlider.destroy(),window.currentPanoramaSlider=void 0),Io(!0),Lo(document),Cr()});
