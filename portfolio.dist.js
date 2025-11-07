"use strict";(()=>{var Jv=Object.create;var fh=Object.defineProperty;var Qv=Object.getOwnPropertyDescriptor;var e0=Object.getOwnPropertyNames;var t0=Object.getPrototypeOf,i0=Object.prototype.hasOwnProperty;var n0=(r,e,t)=>e in r?fh(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var r0=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports);var s0=(r,e,t,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let n of e0(e))!i0.call(r,n)&&n!==t&&fh(r,n,{get:()=>e[n],enumerable:!(i=Qv(e,n))||i.enumerable});return r};var o0=(r,e,t)=>(t=r!=null?Jv(t0(r)):{},s0(e||!r||!r.__esModule?fh(t,"default",{value:r,enumerable:!0}):t,r));var lt=(r,e,t)=>(n0(r,typeof e!="symbol"?e+"":e,t),t),ph=(r,e,t)=>{if(!e.has(r))throw TypeError("Cannot "+t)};var Yt=(r,e,t)=>(ph(r,e,"read from private field"),t?t.call(r):e.get(r)),wt=(r,e,t)=>{if(e.has(r))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(r):e.set(r,t)},jt=(r,e,t,i)=>(ph(r,e,"write to private field"),i?i.call(r,t):e.set(r,t),t);var ct=(r,e,t)=>(ph(r,e,"access private method"),t);var tf=r0((mh,gh)=>{(function(r,e){typeof mh=="object"&&typeof gh!="undefined"?gh.exports=e():typeof define=="function"&&define.amd?define(e):(r||self).barba=e()})(mh,function(){function r(U,F){for(var w=0;w<F.length;w++){var v=F[w];v.enumerable=v.enumerable||!1,v.configurable=!0,"value"in v&&(v.writable=!0),Object.defineProperty(U,typeof(y=function(R,N){if(typeof R!="object"||R===null)return R;var k=R[Symbol.toPrimitive];if(k!==void 0){var I=k.call(R,"string");if(typeof I!="object")return I;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(R)}(v.key))=="symbol"?y:String(y),v)}var y}function e(U,F,w){return F&&r(U.prototype,F),w&&r(U,w),Object.defineProperty(U,"prototype",{writable:!1}),U}function t(){return t=Object.assign?Object.assign.bind():function(U){for(var F=1;F<arguments.length;F++){var w=arguments[F];for(var v in w)Object.prototype.hasOwnProperty.call(w,v)&&(U[v]=w[v])}return U},t.apply(this,arguments)}function i(U,F){U.prototype=Object.create(F.prototype),U.prototype.constructor=U,s(U,F)}function n(U){return n=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(F){return F.__proto__||Object.getPrototypeOf(F)},n(U)}function s(U,F){return s=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(w,v){return w.__proto__=v,w},s(U,F)}function o(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function a(U,F,w){return a=o()?Reflect.construct.bind():function(v,y,R){var N=[null];N.push.apply(N,y);var k=new(Function.bind.apply(v,N));return R&&s(k,R.prototype),k},a.apply(null,arguments)}function l(U){var F=typeof Map=="function"?new Map:void 0;return l=function(w){if(w===null||Function.toString.call(w).indexOf("[native code]")===-1)return w;if(typeof w!="function")throw new TypeError("Super expression must either be null or a function");if(F!==void 0){if(F.has(w))return F.get(w);F.set(w,v)}function v(){return a(w,arguments,n(this).constructor)}return v.prototype=Object.create(w.prototype,{constructor:{value:v,enumerable:!1,writable:!0,configurable:!0}}),s(v,w)},l(U)}function c(U){if(U===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return U}var h,u=function(){this.before=void 0,this.beforeLeave=void 0,this.leave=void 0,this.afterLeave=void 0,this.beforeEnter=void 0,this.enter=void 0,this.afterEnter=void 0,this.after=void 0};(function(U){U[U.off=0]="off",U[U.error=1]="error",U[U.warning=2]="warning",U[U.info=3]="info",U[U.debug=4]="debug"})(h||(h={}));var d=h.off,f=function(){function U(w){this.t=void 0,this.t=w}U.getLevel=function(){return d},U.setLevel=function(w){return d=h[w]};var F=U.prototype;return F.error=function(){this.i(console.error,h.error,[].slice.call(arguments))},F.warn=function(){this.i(console.warn,h.warning,[].slice.call(arguments))},F.info=function(){this.i(console.info,h.info,[].slice.call(arguments))},F.debug=function(){this.i(console.log,h.debug,[].slice.call(arguments))},F.i=function(w,v,y){v<=U.getLevel()&&w.apply(console,["["+this.t+"] "].concat(y))},U}();function _(U){return U.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function g(U){return U&&U.sensitive?"":"i"}var m={container:"container",history:"history",namespace:"namespace",prefix:"data-barba",prevent:"prevent",wrapper:"wrapper"},p=function(){function U(){this.o=m,this.u=void 0,this.h={after:null,before:null,parent:null}}var F=U.prototype;return F.toString=function(w){return w.outerHTML},F.toDocument=function(w){return this.u||(this.u=new DOMParser),this.u.parseFromString(w,"text/html")},F.toElement=function(w){var v=document.createElement("div");return v.innerHTML=w,v},F.getHtml=function(w){return w===void 0&&(w=document),this.toString(w.documentElement)},F.getWrapper=function(w){return w===void 0&&(w=document),w.querySelector("["+this.o.prefix+'="'+this.o.wrapper+'"]')},F.getContainer=function(w){return w===void 0&&(w=document),w.querySelector("["+this.o.prefix+'="'+this.o.container+'"]')},F.removeContainer=function(w){document.body.contains(w)&&(this.v(w),w.parentNode.removeChild(w))},F.addContainer=function(w,v){var y=this.getContainer()||this.h.before;y?this.l(w,y):this.h.after?this.h.after.parentNode.insertBefore(w,this.h.after):this.h.parent?this.h.parent.appendChild(w):v.appendChild(w)},F.getSibling=function(){return this.h},F.getNamespace=function(w){w===void 0&&(w=document);var v=w.querySelector("["+this.o.prefix+"-"+this.o.namespace+"]");return v?v.getAttribute(this.o.prefix+"-"+this.o.namespace):null},F.getHref=function(w){if(w.tagName&&w.tagName.toLowerCase()==="a"){if(typeof w.href=="string")return w.href;var v=w.getAttribute("href")||w.getAttribute("xlink:href");if(v)return this.resolveUrl(v.baseVal||v)}return null},F.resolveUrl=function(){var w=[].slice.call(arguments).length;if(w===0)throw new Error("resolveUrl requires at least one argument; got none.");var v=document.createElement("base");if(v.href=arguments[0],w===1)return v.href;var y=document.getElementsByTagName("head")[0];y.insertBefore(v,y.firstChild);for(var R,N=document.createElement("a"),k=1;k<w;k++)N.href=arguments[k],v.href=R=N.href;return y.removeChild(v),R},F.l=function(w,v){v.parentNode.insertBefore(w,v.nextSibling)},F.v=function(w){return this.h={after:w.nextElementSibling,before:w.previousElementSibling,parent:w.parentElement},this.h},U}(),S=new p,x=function(){function U(){this.p=void 0,this.m=[],this.P=-1}var F=U.prototype;return F.init=function(w,v){this.p="barba";var y={data:{},ns:v,scroll:{x:window.scrollX,y:window.scrollY},url:w};this.P=0,this.m.push(y);var R={from:this.p,index:this.P,states:[].concat(this.m)};window.history&&window.history.replaceState(R,"",w)},F.change=function(w,v,y){if(y&&y.state){var R=y.state,N=R.index;v=this.g(this.P-N),this.replace(R.states),this.P=N}else this.add(w,v);return v},F.add=function(w,v,y,R){var N=y!=null?y:this.R(v),k={data:R!=null?R:{},ns:"tmp",scroll:{x:window.scrollX,y:window.scrollY},url:w};switch(N){case"push":this.P=this.size,this.m.push(k);break;case"replace":this.set(this.P,k)}var I={from:this.p,index:this.P,states:[].concat(this.m)};switch(N){case"push":window.history&&window.history.pushState(I,"",w);break;case"replace":window.history&&window.history.replaceState(I,"",w)}},F.store=function(w,v){var y=v||this.P,R=this.get(y);R.data=t({},R.data,w),this.set(y,R);var N={from:this.p,index:this.P,states:[].concat(this.m)};window.history.replaceState(N,"")},F.update=function(w,v){var y=v||this.P,R=t({},this.get(y),w);this.set(y,R)},F.remove=function(w){w?this.m.splice(w,1):this.m.pop(),this.P--},F.clear=function(){this.m=[],this.P=-1},F.replace=function(w){this.m=w},F.get=function(w){return this.m[w]},F.set=function(w,v){return this.m[w]=v},F.R=function(w){var v="push",y=w,R=m.prefix+"-"+m.history;return y.hasAttribute&&y.hasAttribute(R)&&(v=y.getAttribute(R)),v},F.g=function(w){return Math.abs(w)>1?w>0?"forward":"back":w===0?"popstate":w>0?"back":"forward"},e(U,[{key:"current",get:function(){return this.m[this.P]}},{key:"previous",get:function(){return this.P<1?null:this.m[this.P-1]}},{key:"size",get:function(){return this.m.length}}]),U}(),b=new x,T=function(U,F){try{var w=function(){if(!F.next.html)return Promise.resolve(U).then(function(v){var y=F.next;if(v){var R=S.toElement(v.html);y.namespace=S.getNamespace(R),y.container=S.getContainer(R),y.url=v.url,y.html=v.html,b.update({ns:y.namespace});var N=S.toDocument(v.html);document.title=N.title}})}();return Promise.resolve(w&&w.then?w.then(function(){}):void 0)}catch(v){return Promise.reject(v)}},C=function U(F,w,v){return F instanceof RegExp?function(y,R){if(!R)return y;for(var N=/\((?:\?<(.*?)>)?(?!\?)/g,k=0,I=N.exec(y.source);I;)R.push({name:I[1]||k++,prefix:"",suffix:"",modifier:"",pattern:""}),I=N.exec(y.source);return y}(F,w):Array.isArray(F)?function(y,R,N){var k=y.map(function(I){return U(I,R,N).source});return new RegExp("(?:".concat(k.join("|"),")"),g(N))}(F,w,v):function(y,R,N){return function(k,I,Q){Q===void 0&&(Q={});for(var ne=Q.strict,he=ne!==void 0&&ne,ie=Q.start,te=ie===void 0||ie,se=Q.end,pe=se===void 0||se,me=Q.encode,le=me===void 0?function(ci){return ci}:me,Pe=Q.delimiter,B=Pe===void 0?"/#?":Pe,ae=Q.endsWith,de="[".concat(_(ae===void 0?"":ae),"]|$"),ge="[".concat(_(B),"]"),re=te?"^":"",J=0,xe=k;J<xe.length;J++){var ve=xe[J];if(typeof ve=="string")re+=_(le(ve));else{var Ge=_(le(ve.prefix)),Me=_(le(ve.suffix));if(ve.pattern)if(I&&I.push(ve),Ge||Me)if(ve.modifier==="+"||ve.modifier==="*"){var nt=ve.modifier==="*"?"?":"";re+="(?:".concat(Ge,"((?:").concat(ve.pattern,")(?:").concat(Me).concat(Ge,"(?:").concat(ve.pattern,"))*)").concat(Me,")").concat(nt)}else re+="(?:".concat(Ge,"(").concat(ve.pattern,")").concat(Me,")").concat(ve.modifier);else re+=ve.modifier==="+"||ve.modifier==="*"?"((?:".concat(ve.pattern,")").concat(ve.modifier,")"):"(".concat(ve.pattern,")").concat(ve.modifier);else re+="(?:".concat(Ge).concat(Me,")").concat(ve.modifier)}}if(pe)he||(re+="".concat(ge,"?")),re+=Q.endsWith?"(?=".concat(de,")"):"$";else{var He=k[k.length-1],Xt=typeof He=="string"?ge.indexOf(He[He.length-1])>-1:He===void 0;he||(re+="(?:".concat(ge,"(?=").concat(de,"))?")),Xt||(re+="(?=".concat(ge,"|").concat(de,")"))}return new RegExp(re,g(Q))}(function(k,I){I===void 0&&(I={});for(var Q=function(Me){for(var nt=[],He=0;He<Me.length;){var Xt=Me[He];if(Xt!=="*"&&Xt!=="+"&&Xt!=="?")if(Xt!=="\\")if(Xt!=="{")if(Xt!=="}")if(Xt!==":")if(Xt!=="(")nt.push({type:"CHAR",index:He,value:Me[He++]});else{var ci=1,Tn="";if(Me[Et=He+1]==="?")throw new TypeError('Pattern cannot start with "?" at '.concat(Et));for(;Et<Me.length;)if(Me[Et]!=="\\"){if(Me[Et]===")"){if(--ci==0){Et++;break}}else if(Me[Et]==="("&&(ci++,Me[Et+1]!=="?"))throw new TypeError("Capturing groups are not allowed at ".concat(Et));Tn+=Me[Et++]}else Tn+=Me[Et++]+Me[Et++];if(ci)throw new TypeError("Unbalanced pattern at ".concat(He));if(!Tn)throw new TypeError("Missing pattern at ".concat(He));nt.push({type:"PATTERN",index:He,value:Tn}),He=Et}else{for(var qr="",Et=He+1;Et<Me.length;){var bi=Me.charCodeAt(Et);if(!(bi>=48&&bi<=57||bi>=65&&bi<=90||bi>=97&&bi<=122||bi===95))break;qr+=Me[Et++]}if(!qr)throw new TypeError("Missing parameter name at ".concat(He));nt.push({type:"NAME",index:He,value:qr}),He=Et}else nt.push({type:"CLOSE",index:He,value:Me[He++]});else nt.push({type:"OPEN",index:He,value:Me[He++]});else nt.push({type:"ESCAPED_CHAR",index:He++,value:Me[He++]});else nt.push({type:"MODIFIER",index:He,value:Me[He++]})}return nt.push({type:"END",index:He,value:""}),nt}(k),ne=I.prefixes,he=ne===void 0?"./":ne,ie="[^".concat(_(I.delimiter||"/#?"),"]+?"),te=[],se=0,pe=0,me="",le=function(Me){if(pe<Q.length&&Q[pe].type===Me)return Q[pe++].value},Pe=function(Me){var nt=le(Me);if(nt!==void 0)return nt;var He=Q[pe],Xt=He.index;throw new TypeError("Unexpected ".concat(He.type," at ").concat(Xt,", expected ").concat(Me))},B=function(){for(var Me,nt="";Me=le("CHAR")||le("ESCAPED_CHAR");)nt+=Me;return nt};pe<Q.length;){var ae=le("CHAR"),de=le("NAME"),ge=le("PATTERN");if(de||ge)he.indexOf(J=ae||"")===-1&&(me+=J,J=""),me&&(te.push(me),me=""),te.push({name:de||se++,prefix:J,suffix:"",pattern:ge||ie,modifier:le("MODIFIER")||""});else{var re=ae||le("ESCAPED_CHAR");if(re)me+=re;else if(me&&(te.push(me),me=""),le("OPEN")){var J=B(),xe=le("NAME")||"",ve=le("PATTERN")||"",Ge=B();Pe("CLOSE"),te.push({name:xe||(ve?se++:""),pattern:xe&&!ve?ie:ve,prefix:J,suffix:Ge,modifier:le("MODIFIER")||""})}else Pe("END")}}return te}(y,N),R,N)}(F,w,v)},L={__proto__:null,update:T,nextTick:function(){return new Promise(function(U){window.requestAnimationFrame(U)})},pathToRegexp:C},P=function(){return window.location.origin},M=function(U){return U===void 0&&(U=window.location.href),E(U).port},E=function(U){var F,w=U.match(/:\d+/);if(w===null)/^http/.test(U)&&(F=80),/^https/.test(U)&&(F=443);else{var v=w[0].substring(1);F=parseInt(v,10)}var y,R=U.replace(P(),""),N={},k=R.indexOf("#");k>=0&&(y=R.slice(k+1),R=R.slice(0,k));var I=R.indexOf("?");return I>=0&&(N=O(R.slice(I+1)),R=R.slice(0,I)),{hash:y,path:R,port:F,query:N}},O=function(U){return U.split("&").reduce(function(F,w){var v=w.split("=");return F[v[0]]=v[1],F},{})},V=function(U){return U===void 0&&(U=window.location.href),U.replace(/(\/#.*|\/|#.*)$/,"")},W={__proto__:null,getHref:function(){return window.location.href},getAbsoluteHref:function(U,F){return F===void 0&&(F=document.baseURI),new URL(U,F).href},getOrigin:P,getPort:M,getPath:function(U){return U===void 0&&(U=window.location.href),E(U).path},getQuery:function(U,F){return F===void 0&&(F=!1),F?JSON.stringify(E(U).query):E(U).query},getHash:function(U){return E(U).hash},parse:E,parseQuery:O,clean:V};function $(U,F,w,v,y){return F===void 0&&(F=2e3),new Promise(function(R,N){var k=new XMLHttpRequest;k.onreadystatechange=function(){if(k.readyState===XMLHttpRequest.DONE){if(k.status===200){var I=k.responseURL!==""&&k.responseURL!==U?k.responseURL:U;R({html:k.responseText,url:t({href:I},E(I))}),v.update(U,{status:"fulfilled",target:I})}else if(k.status){var Q={status:k.status,statusText:k.statusText};w(U,Q),N(Q),v.update(U,{status:"rejected"})}}},k.ontimeout=function(){var I=new Error("Timeout error ["+F+"]");w(U,I),N(I),v.update(U,{status:"rejected"})},k.onerror=function(){var I=new Error("Fetch error");w(U,I),N(I),v.update(U,{status:"rejected"})},k.open("GET",U),k.timeout=F,k.setRequestHeader("Accept","text/html,application/xhtml+xml,application/xml"),k.setRequestHeader("x-barba","yes"),y.all().forEach(function(I,Q){k.setRequestHeader(Q,I)}),k.send()})}function K(U){return!!U&&(typeof U=="object"||typeof U=="function")&&typeof U.then=="function"}function q(U,F){return F===void 0&&(F={}),function(){var w=arguments,v=!1,y=new Promise(function(R,N){F.async=function(){return v=!0,function(I,Q){I?N(I):R(Q)}};var k=U.apply(F,[].slice.call(w));v||(K(k)?k.then(R,N):R(k))});return y}}var oe=function(U){function F(){var v;return(v=U.call(this)||this).logger=new f("@barba/core"),v.all=["ready","page","reset","currentAdded","currentRemoved","nextAdded","nextRemoved","beforeOnce","once","afterOnce","before","beforeLeave","leave","afterLeave","beforeEnter","enter","afterEnter","after"],v.registered=new Map,v.init(),v}i(F,U);var w=F.prototype;return w.init=function(){var v=this;this.registered.clear(),this.all.forEach(function(y){v[y]||(v[y]=function(R,N){v.registered.has(y)||v.registered.set(y,new Set),v.registered.get(y).add({ctx:N||{},fn:R})})})},w.do=function(v){var y=arguments,R=this;if(this.registered.has(v)){var N=Promise.resolve();return this.registered.get(v).forEach(function(k){N=N.then(function(){return q(k.fn,k.ctx).apply(void 0,[].slice.call(y,1))})}),N.catch(function(k){R.logger.debug("Hook error ["+v+"]"),R.logger.error(k)})}return Promise.resolve()},w.clear=function(){var v=this;this.all.forEach(function(y){delete v[y]}),this.init()},w.help=function(){this.logger.info("Available hooks: "+this.all.join(","));var v=[];this.registered.forEach(function(y,R){return v.push(R)}),this.logger.info("Registered hooks: "+v.join(","))},F}(u),X=new oe,fe=function(){function U(F){if(this.k=void 0,this.O=[],typeof F=="boolean")this.k=F;else{var w=Array.isArray(F)?F:[F];this.O=w.map(function(v){return C(v)})}}return U.prototype.checkHref=function(F){if(typeof this.k=="boolean")return this.k;var w=E(F).path;return this.O.some(function(v){return v.exec(w)!==null})},U}(),ye=function(U){function F(v){var y;return(y=U.call(this,v)||this).T=new Map,y}i(F,U);var w=F.prototype;return w.set=function(v,y,R,N,k){return this.T.set(v,{action:R,request:y,status:N,target:k!=null?k:v}),{action:R,request:y,status:N,target:k}},w.get=function(v){return this.T.get(v)},w.getRequest=function(v){return this.T.get(v).request},w.getAction=function(v){return this.T.get(v).action},w.getStatus=function(v){return this.T.get(v).status},w.getTarget=function(v){return this.T.get(v).target},w.has=function(v){return!this.checkHref(v)&&this.T.has(v)},w.delete=function(v){return this.T.delete(v)},w.update=function(v,y){var R=t({},this.T.get(v),y);return this.T.set(v,R),R},F}(fe),we=function(){function U(){this.A=new Map}var F=U.prototype;return F.set=function(w,v){return this.A.set(w,v),{name:v}},F.get=function(w){return this.A.get(w)},F.all=function(){return this.A},F.has=function(w){return this.A.has(w)},F.delete=function(w){return this.A.delete(w)},F.clear=function(){return this.A.clear()},U}(),Ne=function(){return!window.history.pushState},Qe=function(U){return!U.el||!U.href},Xe=function(U){var F=U.event;return F.which>1||F.metaKey||F.ctrlKey||F.shiftKey||F.altKey},Ve=function(U){var F=U.el;return F.hasAttribute("target")&&F.target==="_blank"},ee=function(U){var F=U.el;return F.protocol!==void 0&&window.location.protocol!==F.protocol||F.hostname!==void 0&&window.location.hostname!==F.hostname},ce=function(U){var F=U.el;return F.port!==void 0&&M()!==M(F.href)},Ee=function(U){var F=U.el;return F.getAttribute&&typeof F.getAttribute("download")=="string"},Ue=function(U){return U.el.hasAttribute(m.prefix+"-"+m.prevent)},Re=function(U){return!!U.el.closest("["+m.prefix+"-"+m.prevent+'="all"]')},qe=function(U){var F=U.href;return V(F)===V()&&M(F)===M()},Lt=function(U){function F(v){var y;return(y=U.call(this,v)||this).suite=[],y.tests=new Map,y.init(),y}i(F,U);var w=F.prototype;return w.init=function(){this.add("pushState",Ne),this.add("exists",Qe),this.add("newTab",Xe),this.add("blank",Ve),this.add("corsDomain",ee),this.add("corsPort",ce),this.add("download",Ee),this.add("preventSelf",Ue),this.add("preventAll",Re),this.add("sameUrl",qe,!1)},w.add=function(v,y,R){R===void 0&&(R=!0),this.tests.set(v,y),R&&this.suite.push(v)},w.run=function(v,y,R,N){return this.tests.get(v)({el:y,event:R,href:N})},w.checkLink=function(v,y,R){var N=this;return this.suite.some(function(k){return N.run(k,v,y,R)})},F}(fe),D=function(U){function F(w,v){var y;return v===void 0&&(v="Barba error"),(y=U.call.apply(U,[this].concat([].slice.call(arguments,2)))||this).error=void 0,y.label=void 0,y.error=w,y.label=v,Error.captureStackTrace&&Error.captureStackTrace(c(y),F),y.name="BarbaError",y}return i(F,U),F}(l(Error)),ot=function(){function U(w){w===void 0&&(w=[]),this.logger=new f("@barba/core"),this.all=[],this.page=[],this.once=[],this.j=[{name:"namespace",type:"strings"},{name:"custom",type:"function"}],w&&(this.all=this.all.concat(w)),this.update()}var F=U.prototype;return F.add=function(w,v){w==="rule"?this.j.splice(v.position||0,0,v.value):this.all.push(v),this.update()},F.resolve=function(w,v){var y=this;v===void 0&&(v={});var R=v.once?this.once:this.page;R=R.filter(v.self?function(ie){return ie.name&&ie.name==="self"}:function(ie){return!ie.name||ie.name!=="self"});var N=new Map,k=R.find(function(ie){var te=!0,se={};return v.self&&ie.name==="self"?(N.set(ie,se),!0):(y.j.reverse().forEach(function(pe){te&&(te=y.M(ie,pe,w,se),ie.from&&ie.to&&(te=y.M(ie,pe,w,se,"from")&&y.M(ie,pe,w,se,"to")),ie.from&&!ie.to&&(te=y.M(ie,pe,w,se,"from")),!ie.from&&ie.to&&(te=y.M(ie,pe,w,se,"to")))}),N.set(ie,se),te)}),I=N.get(k),Q=[];if(Q.push(v.once?"once":"page"),v.self&&Q.push("self"),I){var ne,he=[k];Object.keys(I).length>0&&he.push(I),(ne=this.logger).info.apply(ne,["Transition found ["+Q.join(",")+"]"].concat(he))}else this.logger.info("No transition found ["+Q.join(",")+"]");return k},F.update=function(){var w=this;this.all=this.all.map(function(v){return w.N(v)}).sort(function(v,y){return v.priority-y.priority}).reverse().map(function(v){return delete v.priority,v}),this.page=this.all.filter(function(v){return v.leave!==void 0||v.enter!==void 0}),this.once=this.all.filter(function(v){return v.once!==void 0})},F.M=function(w,v,y,R,N){var k=!0,I=!1,Q=w,ne=v.name,he=ne,ie=ne,te=ne,se=N?Q[N]:Q,pe=N==="to"?y.next:y.current;if(N?se&&se[ne]:se[ne]){switch(v.type){case"strings":default:var me=Array.isArray(se[he])?se[he]:[se[he]];pe[he]&&me.indexOf(pe[he])!==-1&&(I=!0),me.indexOf(pe[he])===-1&&(k=!1);break;case"object":var le=Array.isArray(se[ie])?se[ie]:[se[ie]];pe[ie]?(pe[ie].name&&le.indexOf(pe[ie].name)!==-1&&(I=!0),le.indexOf(pe[ie].name)===-1&&(k=!1)):k=!1;break;case"function":se[te](y)?I=!0:k=!1}I&&(N?(R[N]=R[N]||{},R[N][ne]=Q[N][ne]):R[ne]=Q[ne])}return k},F.S=function(w,v,y){var R=0;return(w[v]||w.from&&w.from[v]||w.to&&w.to[v])&&(R+=Math.pow(10,y),w.from&&w.from[v]&&(R+=1),w.to&&w.to[v]&&(R+=2)),R},F.N=function(w){var v=this;w.priority=0;var y=0;return this.j.forEach(function(R,N){y+=v.S(w,R.name,N+1)}),w.priority=y,w},U}();function Fe(U,F){try{var w=U()}catch(v){return F(v)}return w&&w.then?w.then(void 0,F):w}var De=function(){function U(w){w===void 0&&(w=[]),this.logger=new f("@barba/core"),this.store=void 0,this.C=!1,this.store=new ot(w)}var F=U.prototype;return F.get=function(w,v){return this.store.resolve(w,v)},F.doOnce=function(w){var v=w.data,y=w.transition;try{var R=function(){N.C=!1},N=this,k=y||{};N.C=!0;var I=Fe(function(){return Promise.resolve(N.L("beforeOnce",v,k)).then(function(){return Promise.resolve(N.once(v,k)).then(function(){return Promise.resolve(N.L("afterOnce",v,k)).then(function(){})})})},function(Q){N.C=!1,N.logger.debug("Transition error [before/after/once]"),N.logger.error(Q)});return Promise.resolve(I&&I.then?I.then(R):R())}catch(Q){return Promise.reject(Q)}},F.doPage=function(w){var v=w.data,y=w.transition,R=w.page,N=w.wrapper;try{var k=function(ie){I.C=!1},I=this,Q=y||{},ne=Q.sync===!0||!1;I.C=!0;var he=Fe(function(){function ie(){return Promise.resolve(I.L("before",v,Q)).then(function(){function se(me){return Promise.resolve(I.remove(v)).then(function(){return Promise.resolve(I.L("after",v,Q)).then(function(){})})}var pe=function(){if(ne)return Fe(function(){return Promise.resolve(I.add(v,N)).then(function(){return Promise.resolve(I.L("beforeLeave",v,Q)).then(function(){return Promise.resolve(I.L("beforeEnter",v,Q)).then(function(){return Promise.resolve(Promise.all([I.leave(v,Q),I.enter(v,Q)])).then(function(){return Promise.resolve(I.L("afterLeave",v,Q)).then(function(){return Promise.resolve(I.L("afterEnter",v,Q)).then(function(){})})})})})})},function(B){if(I.H(B))throw new D(B,"Transition error [sync]")});var me=function(B){return Fe(function(){var ae=function(){if(le!==!1)return Promise.resolve(I.add(v,N)).then(function(){return Promise.resolve(I.L("beforeEnter",v,Q)).then(function(){return Promise.resolve(I.enter(v,Q,le)).then(function(){return Promise.resolve(I.L("afterEnter",v,Q)).then(function(){})})})})}();if(ae&&ae.then)return ae.then(function(){})},function(ae){if(I.H(ae))throw new D(ae,"Transition error [before/after/enter]")})},le=!1,Pe=Fe(function(){return Promise.resolve(I.L("beforeLeave",v,Q)).then(function(){return Promise.resolve(Promise.all([I.leave(v,Q),T(R,v)]).then(function(B){return B[0]})).then(function(B){return le=B,Promise.resolve(I.L("afterLeave",v,Q)).then(function(){})})})},function(B){if(I.H(B))throw new D(B,"Transition error [before/after/leave]")});return Pe&&Pe.then?Pe.then(me):me()}();return pe&&pe.then?pe.then(se):se()})}var te=function(){if(ne)return Promise.resolve(T(R,v)).then(function(){})}();return te&&te.then?te.then(ie):ie()},function(ie){throw I.C=!1,ie.name&&ie.name==="BarbaError"?(I.logger.debug(ie.label),I.logger.error(ie.error),ie):(I.logger.debug("Transition error [page]"),I.logger.error(ie),ie)});return Promise.resolve(he&&he.then?he.then(k):k())}catch(ie){return Promise.reject(ie)}},F.once=function(w,v){try{return Promise.resolve(X.do("once",w,v)).then(function(){return v.once?q(v.once,v)(w):Promise.resolve()})}catch(y){return Promise.reject(y)}},F.leave=function(w,v){try{return Promise.resolve(X.do("leave",w,v)).then(function(){return v.leave?q(v.leave,v)(w):Promise.resolve()})}catch(y){return Promise.reject(y)}},F.enter=function(w,v,y){try{return Promise.resolve(X.do("enter",w,v)).then(function(){return v.enter?q(v.enter,v)(w,y):Promise.resolve()})}catch(R){return Promise.reject(R)}},F.add=function(w,v){try{return S.addContainer(w.next.container,v),X.do("nextAdded",w),Promise.resolve()}catch(y){return Promise.reject(y)}},F.remove=function(w){try{return S.removeContainer(w.current.container),X.do("currentRemoved",w),Promise.resolve()}catch(v){return Promise.reject(v)}},F.H=function(w){return w.message?!/Timeout error|Fetch error/.test(w.message):!w.status},F.L=function(w,v,y){try{return Promise.resolve(X.do(w,v,y)).then(function(){return y[w]?q(y[w],y)(v):Promise.resolve()})}catch(R){return Promise.reject(R)}},e(U,[{key:"isRunning",get:function(){return this.C},set:function(w){this.C=w}},{key:"hasOnce",get:function(){return this.store.once.length>0}},{key:"hasSelf",get:function(){return this.store.all.some(function(w){return w.name==="self"})}},{key:"shouldWait",get:function(){return this.store.all.some(function(w){return w.to&&!w.to.route||w.sync})}}]),U}(),Te=function(){function U(F){var w=this;this.names=["beforeLeave","afterLeave","beforeEnter","afterEnter"],this.byNamespace=new Map,F.length!==0&&(F.forEach(function(v){w.byNamespace.set(v.namespace,v)}),this.names.forEach(function(v){X[v](w._(v))}))}return U.prototype._=function(F){var w=this;return function(v){var y=F.match(/enter/i)?v.next:v.current,R=w.byNamespace.get(y.namespace);return R&&R[F]?q(R[F],R)(v):Promise.resolve()}},U}();Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(U){var F=this;do{if(F.matches(U))return F;F=F.parentElement||F.parentNode}while(F!==null&&F.nodeType===1);return null});var at={container:null,html:"",namespace:"",url:{hash:"",href:"",path:"",port:null,query:{}}},Ae=function(){function U(){this.version="2.10.0",this.schemaPage=at,this.Logger=f,this.logger=new f("@barba/core"),this.plugins=[],this.timeout=void 0,this.cacheIgnore=void 0,this.cacheFirstPage=void 0,this.prefetchIgnore=void 0,this.preventRunning=void 0,this.hooks=X,this.cache=void 0,this.headers=void 0,this.prevent=void 0,this.transitions=void 0,this.views=void 0,this.dom=S,this.helpers=L,this.history=b,this.request=$,this.url=W,this.D=void 0,this.B=void 0,this.q=void 0,this.F=void 0}var F=U.prototype;return F.use=function(w,v){var y=this.plugins;y.indexOf(w)>-1?this.logger.warn("Plugin ["+w.name+"] already installed."):typeof w.install=="function"?(w.install(this,v),y.push(w)):this.logger.warn("Plugin ["+w.name+'] has no "install" method.')},F.init=function(w){var v=w===void 0?{}:w,y=v.transitions,R=y===void 0?[]:y,N=v.views,k=N===void 0?[]:N,I=v.schema,Q=I===void 0?m:I,ne=v.requestError,he=v.timeout,ie=he===void 0?2e3:he,te=v.cacheIgnore,se=te!==void 0&&te,pe=v.cacheFirstPage,me=pe!==void 0&&pe,le=v.prefetchIgnore,Pe=le!==void 0&&le,B=v.preventRunning,ae=B!==void 0&&B,de=v.prevent,ge=de===void 0?null:de,re=v.debug,J=v.logLevel;if(f.setLevel((re!==void 0&&re)===!0?"debug":J===void 0?"off":J),this.logger.info(this.version),Object.keys(Q).forEach(function(Ge){m[Ge]&&(m[Ge]=Q[Ge])}),this.B=ne,this.timeout=ie,this.cacheIgnore=se,this.cacheFirstPage=me,this.prefetchIgnore=Pe,this.preventRunning=ae,this.q=this.dom.getWrapper(),!this.q)throw new Error("[@barba/core] No Barba wrapper found");this.I();var xe=this.data.current;if(!xe.container)throw new Error("[@barba/core] No Barba container found");if(this.cache=new ye(se),this.headers=new we,this.prevent=new Lt(Pe),this.transitions=new De(R),this.views=new Te(k),ge!==null){if(typeof ge!="function")throw new Error("[@barba/core] Prevent should be a function");this.prevent.add("preventCustom",ge)}this.history.init(xe.url.href,xe.namespace),me&&this.cache.set(xe.url.href,Promise.resolve({html:xe.html,url:xe.url}),"init","fulfilled"),this.U=this.U.bind(this),this.$=this.$.bind(this),this.X=this.X.bind(this),this.G(),this.plugins.forEach(function(Ge){return Ge.init()});var ve=this.data;ve.trigger="barba",ve.next=ve.current,ve.current=t({},this.schemaPage),this.hooks.do("ready",ve),this.once(ve),this.I()},F.destroy=function(){this.I(),this.J(),this.history.clear(),this.hooks.clear(),this.plugins=[]},F.force=function(w){window.location.assign(w)},F.go=function(w,v,y){var R;if(v===void 0&&(v="barba"),this.F=null,this.transitions.isRunning)this.force(w);else if(!(R=v==="popstate"?this.history.current&&this.url.getPath(this.history.current.url)===this.url.getPath(w)&&this.url.getQuery(this.history.current.url,!0)===this.url.getQuery(w,!0):this.prevent.run("sameUrl",null,null,w))||this.transitions.hasSelf)return v=this.history.change(this.cache.has(w)?this.cache.get(w).target:w,v,y),y&&(y.stopPropagation(),y.preventDefault()),this.page(w,v,y!=null?y:void 0,R)},F.once=function(w){try{var v=this;return Promise.resolve(v.hooks.do("beforeEnter",w)).then(function(){function y(){return Promise.resolve(v.hooks.do("afterEnter",w)).then(function(){})}var R=function(){if(v.transitions.hasOnce){var N=v.transitions.get(w,{once:!0});return Promise.resolve(v.transitions.doOnce({transition:N,data:w})).then(function(){})}}();return R&&R.then?R.then(y):y()})}catch(y){return Promise.reject(y)}},F.page=function(w,v,y,R){try{var N,k=function(){var he=I.data;return Promise.resolve(I.hooks.do("page",he)).then(function(){var ie=function(te,se){try{var pe=(me=I.transitions.get(he,{once:!1,self:R}),Promise.resolve(I.transitions.doPage({data:he,page:N,transition:me,wrapper:I.q})).then(function(){I.I()}))}catch{return se()}var me;return pe&&pe.then?pe.then(void 0,se):pe}(0,function(){f.getLevel()===0&&I.force(he.next.url.href)});if(ie&&ie.then)return ie.then(function(){})})},I=this;if(I.data.next.url=t({href:w},I.url.parse(w)),I.data.trigger=v,I.data.event=y,I.cache.has(w))N=I.cache.update(w,{action:"click"}).request;else{var Q=I.request(w,I.timeout,I.onRequestError.bind(I,v),I.cache,I.headers);Q.then(function(he){he.url.href!==w&&I.history.add(he.url.href,v,"replace")}),N=I.cache.set(w,Q,"click","pending").request}var ne=function(){if(I.transitions.shouldWait)return Promise.resolve(T(N,I.data)).then(function(){})}();return Promise.resolve(ne&&ne.then?ne.then(k):k())}catch(he){return Promise.reject(he)}},F.onRequestError=function(w){this.transitions.isRunning=!1;var v=[].slice.call(arguments,1),y=v[0],R=v[1],N=this.cache.getAction(y);return this.cache.delete(y),this.B&&this.B(w,N,y,R)===!1||N==="click"&&this.force(y),!1},F.prefetch=function(w){var v=this;w=this.url.getAbsoluteHref(w),this.cache.has(w)||this.cache.set(w,this.request(w,this.timeout,this.onRequestError.bind(this,"barba"),this.cache,this.headers).catch(function(y){v.logger.error(y)}),"prefetch","pending")},F.G=function(){this.prefetchIgnore!==!0&&(document.addEventListener("mouseover",this.U),document.addEventListener("touchstart",this.U)),document.addEventListener("click",this.$),window.addEventListener("popstate",this.X)},F.J=function(){this.prefetchIgnore!==!0&&(document.removeEventListener("mouseover",this.U),document.removeEventListener("touchstart",this.U)),document.removeEventListener("click",this.$),window.removeEventListener("popstate",this.X)},F.U=function(w){var v=this,y=this.W(w);if(y){var R=this.url.getAbsoluteHref(this.dom.getHref(y));this.prevent.checkHref(R)||this.cache.has(R)||this.cache.set(R,this.request(R,this.timeout,this.onRequestError.bind(this,y),this.cache,this.headers).catch(function(N){v.logger.error(N)}),"enter","pending")}},F.$=function(w){this.F=w;var v=this.W(w);if(v)return this.transitions.isRunning&&this.preventRunning?(w.preventDefault(),void w.stopPropagation()):void this.go(this.dom.getHref(v),v,w)},F.X=function(w){this.F&&!this.W(this.F)||this.go(this.url.getHref(),"popstate",w)},F.W=function(w){for(var v=w.target;v&&!this.dom.getHref(v);)v=v.parentNode;if(v&&!this.prevent.checkLink(v,w,this.dom.getHref(v)))return v},F.I=function(){var w=this.url.getHref(),v={container:this.dom.getContainer(),html:this.dom.getHtml(),namespace:this.dom.getNamespace(),url:t({href:w},this.url.parse(w))};this.D={current:v,event:void 0,next:t({},this.schemaPage),trigger:void 0},this.hooks.do("reset",this.data)},e(U,[{key:"data",get:function(){return this.D}},{key:"wrapper",get:function(){return this.q}}]),U}();return new Ae})});var rn=o0(tf(),1);var vh=(r=document)=>r.documentElement.getAttribute("data-wf-site");var _h=async r=>{var t,i;let{Webflow:e}=window;if(!(!e||!("destroy"in e)||!("ready"in e)||!("require"in e))&&!(r&&!r.length)){if(r||(e.destroy(),e.ready()),!r||r.includes("ix2")){let n=e.require("ix2");if(n){let{store:s,actions:o}=n,{eventState:a}=s.getState().ixSession,l=Object.entries(a);r||n.destroy(),n.init(),await Promise.all(l.map(c=>s.dispatch(o.eventStateChanged(...c))))}}if(!r||r.includes("commerce")){let n=e.require("commerce"),s=vh();n&&s&&(n.destroy(),n.init({siteId:s,apiUrl:"https://render.webflow.com"}))}if(r!=null&&r.includes("lightbox")&&((t=e.require("lightbox"))==null||t.ready()),r!=null&&r.includes("slider")){let n=e.require("slider");n&&(n.redraw(),n.ready())}return r!=null&&r.includes("tabs")&&((i=e.require("tabs"))==null||i.redraw()),new Promise(n=>e.push(()=>n(void 0)))}};function sn(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function hf(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}var si={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Zr={duration:.5,overwrite:!1,delay:0},Uh,Bt,ft,wi=1e8,ht=1/wi,Th=Math.PI*2,a0=Th/4,l0=0,uf=Math.sqrt,c0=Math.cos,h0=Math.sin,Ct=function(e){return typeof e=="string"},yt=function(e){return typeof e=="function"},an=function(e){return typeof e=="number"},Ia=function(e){return typeof e=="undefined"},Vi=function(e){return typeof e=="object"},ri=function(e){return e!==!1},Bh=function(){return typeof window!="undefined"},Ma=function(e){return yt(e)||Ct(e)},df=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},kt=Array.isArray,Ah=/(?:-?\.?\d|\.)+/gi,kh=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,cr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,yh=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Hh=/[+-]=-?[.\d]+/,ff=/[^,'"\[\]\s]+/gi,u0=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,gt,Hi,Ch,zh,fi={},Aa={},pf,mf=function(e){return(Aa=lr(e,fi))&&Ht},Da=function(e,t){},lo=function(e,t){return!t&&void 0},gf=function(e,t){return e&&(fi[e]=t)&&Aa&&(Aa[e]=t)||fi},co=function(){return 0},d0={suppressEvents:!0,isStart:!0,kill:!1},Ea={suppressEvents:!0,kill:!1},f0={suppressEvents:!0},Vh={},Cn=[],Rh={},vf,ii={},xh={},nf=30,wa=[],Gh="",Wh=function(e){var t=e[0],i,n;if(Vi(t)||yt(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(n=wa.length;n--&&!wa[n].targetTest(t););i=wa[n]}for(n=e.length;n--;)e[n]&&(e[n]._gsap||(e[n]._gsap=new Yh(e[n],i)))||e.splice(n,1);return e},Rn=function(e){return e._gsap||Wh(Ti(e))[0]._gsap},Xh=function(e,t,i){return(i=e[t])&&yt(i)?e[t]():Ia(i)&&e.getAttribute&&e.getAttribute(t)||i},Zt=function(e,t){return(e=e.split(",")).forEach(t)||e},xt=function(e){return Math.round(e*1e5)/1e5||0},It=function(e){return Math.round(e*1e7)/1e7||0},hr=function(e,t){var i=t.charAt(0),n=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+n:i==="-"?e-n:i==="*"?e*n:e/n},p0=function(e,t){for(var i=t.length,n=0;e.indexOf(t[n])<0&&++n<i;);return n<i},Ca=function(){var e=Cn.length,t=Cn.slice(0),i,n;for(Rh={},Cn.length=0,i=0;i<e;i++)n=t[i],n&&n._lazy&&(n.render(n._lazy[0],n._lazy[1],!0)._lazy=0)},_f=function(e,t,i,n){Cn.length&&!Bt&&Ca(),e.render(t,i,n||Bt&&t<0&&(e._initted||e._startAt)),Cn.length&&!Bt&&Ca()},yf=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(ff).length<2?t:Ct(e)?e.trim():e},xf=function(e){return e},Ai=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},m0=function(e){return function(t,i){for(var n in i)n in t||n==="duration"&&e||n==="ease"||(t[n]=i[n])}},lr=function(e,t){for(var i in t)e[i]=t[i];return e},rf=function r(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=Vi(t[i])?r(e[i]||(e[i]={}),t[i]):t[i]);return e},Ra=function(e,t){var i={},n;for(n in e)n in t||(i[n]=e[n]);return i},so=function(e){var t=e.parent||gt,i=e.keyframes?m0(kt(e.keyframes)):Ai;if(ri(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},g0=function(e,t){for(var i=e.length,n=i===t.length;n&&i--&&e[i]===t[i];);return i<0},bf=function(e,t,i,n,s){i===void 0&&(i="_first"),n===void 0&&(n="_last");var o=e[n],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[n]=t,t._prev=o,t.parent=t._dp=e,t},Oa=function(e,t,i,n){i===void 0&&(i="_first"),n===void 0&&(n="_last");var s=t._prev,o=t._next;s?s._next=o:e[i]===t&&(e[i]=o),o?o._prev=s:e[n]===t&&(e[n]=s),t._next=t._prev=t.parent=null},Pn=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},sr=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},v0=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Ph=function(e,t,i,n){return e._startAt&&(Bt?e._startAt.revert(Ea):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,n))},_0=function r(e){return!e||e._ts&&r(e.parent)},sf=function(e){return e._repeat?$r(e._tTime,e=e.duration()+e._rDelay)*e:0},$r=function(e,t){var i=Math.floor(e/=t);return e&&i===e?i-1:i},Pa=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Fa=function(e){return e._end=It(e._start+(e._tDur/Math.abs(e._ts||e._rts||ht)||0))},Na=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=It(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Fa(e),i._dirty||sr(i,e)),e},Sf=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=Pa(e.rawTime(),t),(!t._dur||fo(0,t.totalDuration(),i)-t._tTime>ht)&&t.render(i,!0)),sr(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-ht}},zi=function(e,t,i,n){return t.parent&&Pn(t),t._start=It((an(i)?i:i||e!==gt?Ei(e,i,t):e._time)+t._delay),t._end=It(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),bf(e,t,"_first","_last",e._sort?"_start":0),Lh(t)||(e._recent=t),n||Sf(e,t),e._ts<0&&Na(e,e._tTime),e},Mf=function(e,t){return(fi.ScrollTrigger||Da("scrollTrigger",t))&&fi.ScrollTrigger.create(t,e)},Ef=function(e,t,i,n,s){if($h(e,t,s),!e._initted)return 1;if(!i&&e._pt&&!Bt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&vf!==ni.frame)return Cn.push(e),e._lazy=[s,n],1},y0=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},Lh=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},x0=function(e,t,i,n){var s=e.ratio,o=t<0||!t&&(!e._start&&y0(e)&&!(!e._initted&&Lh(e))||(e._ts<0||e._dp._ts<0)&&!Lh(e))?0:1,a=e._rDelay,l=0,c,h,u;if(a&&e._repeat&&(l=fo(0,e._tDur,t),h=$r(l,a),e._yoyo&&h&1&&(o=1-o),h!==$r(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||Bt||n||e._zTime===ht||!t&&e._zTime){if(!e._initted&&Ef(e,t,n,i,l))return;for(u=e._zTime,e._zTime=t||(i?ht:0),i||(i=t&&!u),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&Ph(e,t,i,!0),e._onUpdate&&!i&&di(e,"onUpdate"),l&&e._repeat&&!i&&e.parent&&di(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Pn(e,1),!i&&!Bt&&(di(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},b0=function(e,t,i){var n;if(i>t)for(n=e._first;n&&n._start<=i;){if(n.data==="isPause"&&n._start>t)return n;n=n._next}else for(n=e._last;n&&n._start>=i;){if(n.data==="isPause"&&n._start<t)return n;n=n._prev}},Kr=function(e,t,i,n){var s=e._repeat,o=It(t)||0,a=e._tTime/e._tDur;return a&&!n&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:It(o*(s+1)+e._rDelay*s):o,a>0&&!n&&Na(e,e._tTime=e._tDur*a),e.parent&&Fa(e),i||sr(e.parent,e),e},of=function(e){return e instanceof Ot?sr(e):Kr(e,e._dur)},S0={_start:0,endTime:co,totalDuration:co},Ei=function r(e,t,i){var n=e.labels,s=e._recent||S0,o=e.duration()>=wi?s.endTime(!1):e._dur,a,l,c;return Ct(t)&&(isNaN(t)||t in n)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:i).totalDuration()/100:1)):a<0?(t in n||(n[t]=o),n[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&i&&(l=l/100*(kt(i)?i[0]:i).totalDuration()),a>1?r(e,t.substr(0,a-1),i)+l:o+l)):t==null?o:+t},oo=function(e,t,i){var n=an(t[1]),s=(n?2:1)+(e<2?0:1),o=t[s],a,l;if(n&&(o.duration=t[1]),o.parent=i,e){for(a=o,l=i;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=ri(l.vars.inherit)&&l.parent;o.immediateRender=ri(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new St(t[0],o,t[s+1])},Ln=function(e,t){return e||e===0?t(e):t},fo=function(e,t,i){return i<e?e:i>t?t:i},Ft=function(e,t){return!Ct(e)||!(t=u0.exec(e))?"":t[1]},M0=function(e,t,i){return Ln(i,function(n){return fo(e,t,n)})},Ih=[].slice,wf=function(e,t){return e&&Vi(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Vi(e[0]))&&!e.nodeType&&e!==Hi},E0=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(n){var s;return Ct(n)&&!t||wf(n,1)?(s=i).push.apply(s,Ti(n)):i.push(n)})||i},Ti=function(e,t,i){return ft&&!t&&ft.selector?ft.selector(e):Ct(e)&&!i&&(Ch||!Jr())?Ih.call((t||zh).querySelectorAll(e),0):kt(e)?E0(e,i):wf(e)?Ih.call(e,0):e?[e]:[]},Dh=function(e){return e=Ti(e)[0]||lo("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return Ti(t,i.querySelectorAll?i:i===e?lo("Invalid scope")||zh.createElement("div"):e)}},Tf=function(e){return e.sort(function(){return .5-Math.random()})},Af=function(e){if(yt(e))return e;var t=Vi(e)?e:{each:e},i=or(t.ease),n=t.from||0,s=parseFloat(t.base)||0,o={},a=n>0&&n<1,l=isNaN(n)||a,c=t.axis,h=n,u=n;return Ct(n)?h=u={center:.5,edges:.5,end:1}[n]||0:!a&&l&&(h=n[0],u=n[1]),function(d,f,_){var g=(_||t).length,m=o[g],p,S,x,b,T,C,L,P,M;if(!m){if(M=t.grid==="auto"?0:(t.grid||[1,wi])[1],!M){for(L=-wi;L<(L=_[M++].getBoundingClientRect().left)&&M<g;);M<g&&M--}for(m=o[g]=[],p=l?Math.min(M,g)*h-.5:n%M,S=M===wi?0:l?g*u/M-.5:n/M|0,L=0,P=wi,C=0;C<g;C++)x=C%M-p,b=S-(C/M|0),m[C]=T=c?Math.abs(c==="y"?b:x):uf(x*x+b*b),T>L&&(L=T),T<P&&(P=T);n==="random"&&Tf(m),m.max=L-P,m.min=P,m.v=g=(parseFloat(t.amount)||parseFloat(t.each)*(M>g?g-1:c?c==="y"?g/M:M:Math.max(M,g/M))||0)*(n==="edges"?-1:1),m.b=g<0?s-g:s,m.u=Ft(t.amount||t.each)||0,i=i&&g<0?Nf(i):i}return g=(m[d]-m.min)/m.max||0,It(m.b+(i?i(g):g)*m.v)+m.u}},Oh=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var n=It(Math.round(parseFloat(i)/e)*e*t);return(n-n%1)/t+(an(i)?0:Ft(i))}},Cf=function(e,t){var i=kt(e),n,s;return!i&&Vi(e)&&(n=i=e.radius||wi,e.values?(e=Ti(e.values),(s=!an(e[0]))&&(n*=n)):e=Oh(e.increment)),Ln(t,i?yt(e)?function(o){return s=e(o),Math.abs(s-o)<=n?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=wi,h=0,u=e.length,d,f;u--;)s?(d=e[u].x-a,f=e[u].y-l,d=d*d+f*f):d=Math.abs(e[u]-a),d<c&&(c=d,h=u);return h=!n||c<=n?e[h]:o,s||h===o||an(o)?h:h+Ft(o)}:Oh(e))},Rf=function(e,t,i,n){return Ln(kt(e)?!t:i===!0?!!(i=0):!n,function(){return kt(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(n=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*n)/n})},w0=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(n){return t.reduce(function(s,o){return o(s)},n)}},T0=function(e,t){return function(i){return e(parseFloat(i))+(t||Ft(i))}},A0=function(e,t,i){return Lf(e,t,0,1,i)},Pf=function(e,t,i){return Ln(i,function(n){return e[~~t(n)]})},C0=function r(e,t,i){var n=t-e;return kt(e)?Pf(e,r(0,e.length),t):Ln(i,function(s){return(n+(s-e)%n)%n+e})},R0=function r(e,t,i){var n=t-e,s=n*2;return kt(e)?Pf(e,r(0,e.length-1),t):Ln(i,function(o){return o=(s+(o-e)%s)%s||0,e+(o>n?s-o:o)})},Qr=function(e){for(var t=0,i="",n,s,o,a;~(n=e.indexOf("random(",t));)o=e.indexOf(")",n),a=e.charAt(n+7)==="[",s=e.substr(n+7,o-n-7).match(a?ff:Ah),i+=e.substr(t,n-t)+Rf(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),t=o+1;return i+e.substr(t,e.length-t)},Lf=function(e,t,i,n,s){var o=t-e,a=n-i;return Ln(s,function(l){return i+((l-e)/o*a||0)})},P0=function r(e,t,i,n){var s=isNaN(e+t)?0:function(f){return(1-f)*e+f*t};if(!s){var o=Ct(e),a={},l,c,h,u,d;if(i===!0&&(n=1)&&(i=null),o)e={p:e},t={p:t};else if(kt(e)&&!kt(t)){for(h=[],u=e.length,d=u-2,c=1;c<u;c++)h.push(r(e[c-1],e[c]));u--,s=function(_){_*=u;var g=Math.min(d,~~_);return h[g](_-g)},i=t}else n||(e=lr(kt(e)?[]:{},e));if(!h){for(l in t)jh.call(a,e,l,"get",t[l]);s=function(_){return Qh(_,a)||(o?e.p:e)}}}return Ln(i,s)},af=function(e,t,i){var n=e.labels,s=wi,o,a,l;for(o in n)a=n[o]-t,a<0==!!i&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},di=function(e,t,i){var n=e.vars,s=n[t],o=ft,a=e._ctx,l,c,h;if(s)return l=n[t+"Params"],c=n.callbackScope||e,i&&Cn.length&&Ca(),a&&(ft=a),h=l?s.apply(c,l):s.call(c),ft=o,h},no=function(e){return Pn(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Bt),e.progress()<1&&di(e,"onInterrupt"),e},jr,If=[],Df=function(e){if(e)if(e=!e.name&&e.default||e,Bh()||e.headless){var t=e.name,i=yt(e),n=t&&!i&&e.init?function(){this._props=[]}:e,s={init:co,render:Qh,add:jh,kill:q0,modifier:X0,rawVars:0},o={targetTest:0,get:0,getSetter:Ua,aliases:{},register:0};if(Jr(),e!==n){if(ii[t])return;Ai(n,Ai(Ra(e,s),o)),lr(n.prototype,lr(s,Ra(e,o))),ii[n.prop=t]=n,e.targetTest&&(wa.push(n),Vh[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}gf(t,n),e.register&&e.register(Ht,n,$t)}else If.push(e)},st=255,ro={aqua:[0,st,st],lime:[0,st,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,st],navy:[0,0,128],white:[st,st,st],olive:[128,128,0],yellow:[st,st,0],orange:[st,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[st,0,0],pink:[st,192,203],cyan:[0,st,st],transparent:[st,st,st,0]},bh=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*st+.5|0},Of=function(e,t,i){var n=e?an(e)?[e>>16,e>>8&st,e&st]:0:ro.black,s,o,a,l,c,h,u,d,f,_;if(!n){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),ro[e])n=ro[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return n=parseInt(e.substr(1,6),16),[n>>16,n>>8&st,n&st,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),n=[e>>16,e>>8&st,e&st]}else if(e.substr(0,3)==="hsl"){if(n=_=e.match(Ah),!t)l=+n[0]%360/360,c=+n[1]/100,h=+n[2]/100,o=h<=.5?h*(c+1):h+c-h*c,s=h*2-o,n.length>3&&(n[3]*=1),n[0]=bh(l+1/3,s,o),n[1]=bh(l,s,o),n[2]=bh(l-1/3,s,o);else if(~e.indexOf("="))return n=e.match(kh),i&&n.length<4&&(n[3]=1),n}else n=e.match(Ah)||ro.transparent;n=n.map(Number)}return t&&!_&&(s=n[0]/st,o=n[1]/st,a=n[2]/st,u=Math.max(s,o,a),d=Math.min(s,o,a),h=(u+d)/2,u===d?l=c=0:(f=u-d,c=h>.5?f/(2-u-d):f/(u+d),l=u===s?(o-a)/f+(o<a?6:0):u===o?(a-s)/f+2:(s-o)/f+4,l*=60),n[0]=~~(l+.5),n[1]=~~(c*100+.5),n[2]=~~(h*100+.5)),i&&n.length<4&&(n[3]=1),n},Ff=function(e){var t=[],i=[],n=-1;return e.split(on).forEach(function(s){var o=s.match(cr)||[];t.push.apply(t,o),i.push(n+=o.length+1)}),t.c=i,t},lf=function(e,t,i){var n="",s=(e+n).match(on),o=t?"hsla(":"rgba(",a=0,l,c,h,u;if(!s)return e;if(s=s.map(function(d){return(d=Of(d,t,1))&&o+(t?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),i&&(h=Ff(e),l=i.c,l.join(n)!==h.c.join(n)))for(c=e.replace(on,"1").split(cr),u=c.length-1;a<u;a++)n+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(h.length?h:s.length?s:i).shift());if(!c)for(c=e.split(on),u=c.length-1;a<u;a++)n+=c[a]+s[a];return n+c[u]},on=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in ro)r+="|"+e+"\\b";return new RegExp(r+")","gi")}(),L0=/hsl[a]?\(/,qh=function(e){var t=e.join(" "),i;if(on.lastIndex=0,on.test(t))return i=L0.test(t),e[1]=lf(e[1],i),e[0]=lf(e[0],i,Ff(e[1])),!0},ho,ni=function(){var r=Date.now,e=500,t=33,i=r(),n=i,s=1e3/240,o=s,a=[],l,c,h,u,d,f,_=function g(m){var p=r()-n,S=m===!0,x,b,T,C;if((p>e||p<0)&&(i+=p-t),n+=p,T=n-i,x=T-o,(x>0||S)&&(C=++u.frame,d=T-u.time*1e3,u.time=T=T/1e3,o+=x+(x>=s?4:s-x),b=1),S||(l=c(g)),b)for(f=0;f<a.length;f++)a[f](T,d,C,m)};return u={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(m){return d/(1e3/(m||60))},wake:function(){pf&&(!Ch&&Bh()&&(Hi=Ch=window,zh=Hi.document||{},fi.gsap=Ht,(Hi.gsapVersions||(Hi.gsapVersions=[])).push(Ht.version),mf(Aa||Hi.GreenSockGlobals||!Hi.gsap&&Hi||{}),If.forEach(Df)),h=typeof requestAnimationFrame!="undefined"&&requestAnimationFrame,l&&u.sleep(),c=h||function(m){return setTimeout(m,o-u.time*1e3+1|0)},ho=1,_(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),ho=0,c=co},lagSmoothing:function(m,p){e=m||1/0,t=Math.min(p||33,e)},fps:function(m){s=1e3/(m||240),o=u.time*1e3+s},add:function(m,p,S){var x=p?function(b,T,C,L){m(b,T,C,L),u.remove(x)}:m;return u.remove(m),a[S?"unshift":"push"](x),Jr(),x},remove:function(m,p){~(p=a.indexOf(m))&&a.splice(p,1)&&f>=p&&f--},_listeners:a},u}(),Jr=function(){return!ho&&ni.wake()},Ze={},I0=/^[\d.\-M][\d.\-,\s]/,D0=/["']/g,O0=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),n=i[0],s=1,o=i.length,a,l,c;s<o;s++)l=i[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[n]=isNaN(c)?c.replace(D0,"").trim():+c,n=l.substr(a+1).trim();return t},F0=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),n=e.indexOf("(",t);return e.substring(t,~n&&n<i?e.indexOf(")",i+1):i)},N0=function(e){var t=(e+"").split("("),i=Ze[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[O0(t[1])]:F0(e).split(",").map(yf)):Ze._CE&&I0.test(e)?Ze._CE("",e):i},Nf=function(e){return function(t){return 1-e(1-t)}},Uf=function r(e,t){for(var i=e._first,n;i;)i instanceof Ot?r(i,t):i.vars.yoyoEase&&(!i._yoyo||!i._repeat)&&i._yoyo!==t&&(i.timeline?r(i.timeline,t):(n=i._ease,i._ease=i._yEase,i._yEase=n,i._yoyo=t)),i=i._next},or=function(e,t){return e&&(yt(e)?e:Ze[e]||N0(e))||t},ur=function(e,t,i,n){i===void 0&&(i=function(l){return 1-t(1-l)}),n===void 0&&(n=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:i,easeInOut:n},o;return Zt(e,function(a){Ze[a]=fi[a]=s,Ze[o=a.toLowerCase()]=i;for(var l in s)Ze[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Ze[a+"."+l]=s[l]}),s},Bf=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Sh=function r(e,t,i){var n=t>=1?t:1,s=(i||(e?.3:.45))/(t<1?t:1),o=s/Th*(Math.asin(1/n)||0),a=function(h){return h===1?1:n*Math.pow(2,-10*h)*h0((h-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:Bf(a);return s=Th/s,l.config=function(c,h){return r(e,c,h)},l},Mh=function r(e,t){t===void 0&&(t=1.70158);var i=function(o){return o?--o*o*((t+1)*o+t)+1:0},n=e==="out"?i:e==="in"?function(s){return 1-i(1-s)}:Bf(i);return n.config=function(s){return r(e,s)},n};Zt("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;ur(r+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});Ze.Linear.easeNone=Ze.none=Ze.Linear.easeIn;ur("Elastic",Sh("in"),Sh("out"),Sh());(function(r,e){var t=1/e,i=2*t,n=2.5*t,s=function(a){return a<t?r*a*a:a<i?r*Math.pow(a-1.5/e,2)+.75:a<n?r*(a-=2.25/e)*a+.9375:r*Math.pow(a-2.625/e,2)+.984375};ur("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);ur("Expo",function(r){return r?Math.pow(2,10*(r-1)):0});ur("Circ",function(r){return-(uf(1-r*r)-1)});ur("Sine",function(r){return r===1?1:-c0(r*a0)+1});ur("Back",Mh("in"),Mh("out"),Mh());Ze.SteppedEase=Ze.steps=fi.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,n=e+(t?0:1),s=t?1:0,o=1-ht;return function(a){return((n*fo(0,o,a)|0)+s)*i}}};Zr.ease=Ze["quad.out"];Zt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Gh+=r+","+r+"Params,"});var Yh=function(e,t){this.id=l0++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Xh,this.set=t?t.getSetter:Ua},uo=function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Kr(this,+t.duration,1,1),this.data=t.data,ft&&(this._ctx=ft,ft.data.push(this)),ho||ni.wake()}var e=r.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,Kr(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,n){if(Jr(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Na(this,i),!s._dp||s.parent||Sf(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&zi(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!n||this._initted&&Math.abs(this._zTime)===ht||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),_f(this,i,n)),this},e.time=function(i,n){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+sf(this))%(this._dur+this._rDelay)||(i?this._dur:0),n):this._time},e.totalProgress=function(i,n){return arguments.length?this.totalTime(this.totalDuration()*i,n):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>0?1:0},e.progress=function(i,n){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+sf(this),n):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,n){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,n):this._repeat?$r(this._tTime,s)+1:1},e.timeScale=function(i,n){if(!arguments.length)return this._rts===-ht?0:this._rts;if(this._rts===i)return this;var s=this.parent&&this._ts?Pa(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-ht?0:this._rts,this.totalTime(fo(-Math.abs(this._delay),this._tDur,s),n!==!1),Fa(this),v0(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Jr(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==ht&&(this._tTime-=ht)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=i;var n=this.parent||this._dp;return n&&(n._sort||!this.parent)&&zi(n,this,i-this._delay),this}return this._start},e.endTime=function(i){return this._start+(ri(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var n=this.parent||this._dp;return n?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Pa(n.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=f0);var n=Bt;return Bt=i,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),Bt=n,this},e.globalTime=function(i){for(var n=this,s=arguments.length?i:n.rawTime();n;)s=n._start+s/(Math.abs(n._ts)||1),n=n._dp;return!this.parent&&this._sat?this._sat.globalTime(i):s},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,of(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var n=this._time;return this._rDelay=i,of(this),n?this.time(n):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,n){return this.totalTime(Ei(this,i),ri(n))},e.restart=function(i,n){return this.play().totalTime(i?-this._delay:0,ri(n))},e.play=function(i,n){return i!=null&&this.seek(i,n),this.reversed(!1).paused(!1)},e.reverse=function(i,n){return i!=null&&this.seek(i||this.totalDuration(),n),this.reversed(!0).paused(!1)},e.pause=function(i,n){return i!=null&&this.seek(i,n),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-ht:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-ht,this},e.isActive=function(){var i=this.parent||this._dp,n=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=n&&s<this.endTime(!0)-ht)},e.eventCallback=function(i,n,s){var o=this.vars;return arguments.length>1?(n?(o[i]=n,s&&(o[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=n)):delete o[i],this):o[i]},e.then=function(i){var n=this;return new Promise(function(s){var o=yt(i)?i:xf,a=function(){var c=n.then;n.then=null,yt(o)&&(o=o(n))&&(o.then||o===n)&&(n.then=c),s(o),n.then=c};n._initted&&n.totalProgress()===1&&n._ts>=0||!n._tTime&&n._ts<0?a():n._prom=a})},e.kill=function(){no(this)},r}();Ai(uo.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-ht,_prom:0,_ps:!1,_rts:1});var Ot=function(r){hf(e,r);function e(i,n){var s;return i===void 0&&(i={}),s=r.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=ri(i.sortChildren),gt&&zi(i.parent||gt,sn(s),n),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&Mf(sn(s),i.scrollTrigger),s}var t=e.prototype;return t.to=function(n,s,o){return oo(0,arguments,this),this},t.from=function(n,s,o){return oo(1,arguments,this),this},t.fromTo=function(n,s,o,a){return oo(2,arguments,this),this},t.set=function(n,s,o){return s.duration=0,s.parent=this,so(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new St(n,s,Ei(this,o),1),this},t.call=function(n,s,o){return zi(this,St.delayedCall(0,n,s),o)},t.staggerTo=function(n,s,o,a,l,c,h){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=h,o.parent=this,new St(n,o,Ei(this,l)),this},t.staggerFrom=function(n,s,o,a,l,c,h){return o.runBackwards=1,so(o).immediateRender=ri(o.immediateRender),this.staggerTo(n,s,o,a,l,c,h)},t.staggerFromTo=function(n,s,o,a,l,c,h,u){return a.startAt=o,so(a).immediateRender=ri(a.immediateRender),this.staggerTo(n,s,a,l,c,h,u)},t.render=function(n,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=n<=0?0:It(n),u=this._zTime<0!=n<0&&(this._initted||!c),d,f,_,g,m,p,S,x,b,T,C,L;if(this!==gt&&h>l&&n>=0&&(h=l),h!==this._tTime||o||u){if(a!==this._time&&c&&(h+=this._time-a,n+=this._time-a),d=h,b=this._start,x=this._ts,p=!x,u&&(c||(a=this._zTime),(n||!s)&&(this._zTime=n)),this._repeat){if(C=this._yoyo,m=c+this._rDelay,this._repeat<-1&&n<0)return this.totalTime(m*100+n,s,o);if(d=It(h%m),h===l?(g=this._repeat,d=c):(g=~~(h/m),g&&g===h/m&&(d=c,g--),d>c&&(d=c)),T=$r(this._tTime,m),!a&&this._tTime&&T!==g&&this._tTime-T*m-this._dur<=0&&(T=g),C&&g&1&&(d=c-d,L=1),g!==T&&!this._lock){var P=C&&T&1,M=P===(C&&g&1);if(g<T&&(P=!P),a=P?0:h%c?c:h,this._lock=1,this.render(a||(L?0:It(g*m)),s,!c)._lock=0,this._tTime=h,!s&&this.parent&&di(this,"onRepeat"),this.vars.repeatRefresh&&!L&&(this.invalidate()._lock=1),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,M&&(this._lock=2,a=P?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!L&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;Uf(this,L)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(S=b0(this,It(a),It(d)),S&&(h-=d-(d=S._start))),this._tTime=h,this._time=d,this._act=!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=n,a=0),!a&&d&&!s&&!g&&(di(this,"onStart"),this._tTime!==h))return this;if(d>=a&&n>=0)for(f=this._first;f;){if(_=f._next,(f._act||d>=f._start)&&f._ts&&S!==f){if(f.parent!==this)return this.render(n,s,o);if(f.render(f._ts>0?(d-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(d-f._start)*f._ts,s,o),d!==this._time||!this._ts&&!p){S=0,_&&(h+=this._zTime=-ht);break}}f=_}else{f=this._last;for(var E=n<0?n:d;f;){if(_=f._prev,(f._act||E<=f._end)&&f._ts&&S!==f){if(f.parent!==this)return this.render(n,s,o);if(f.render(f._ts>0?(E-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(E-f._start)*f._ts,s,o||Bt&&(f._initted||f._startAt)),d!==this._time||!this._ts&&!p){S=0,_&&(h+=this._zTime=E?-ht:ht);break}}f=_}}if(S&&!s&&(this.pause(),S.render(d>=a?0:-ht)._zTime=d>=a?1:-1,this._ts))return this._start=b,Fa(this),this.render(n,s,o);this._onUpdate&&!s&&di(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&a)&&(b===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((n||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&Pn(this,1),!s&&!(n<0&&!a)&&(h||a||!l)&&(di(this,h===l&&n>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(n,s){var o=this;if(an(s)||(s=Ei(this,s,n)),!(n instanceof uo)){if(kt(n))return n.forEach(function(a){return o.add(a,s)}),this;if(Ct(n))return this.addLabel(n,s);if(yt(n))n=St.delayedCall(0,n);else return this}return this!==n?zi(this,n,s):this},t.getChildren=function(n,s,o,a){n===void 0&&(n=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-wi);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof St?s&&l.push(c):(o&&l.push(c),n&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(n){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===n)return s[o]},t.remove=function(n){return Ct(n)?this.removeLabel(n):yt(n)?this.killTweensOf(n):(Oa(this,n),n===this._recent&&(this._recent=this._last),sr(this))},t.totalTime=function(n,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=It(ni.time-(this._ts>0?n/this._ts:(this.totalDuration()-n)/-this._ts))),r.prototype.totalTime.call(this,n,s),this._forcing=0,this):this._tTime},t.addLabel=function(n,s){return this.labels[n]=Ei(this,s),this},t.removeLabel=function(n){return delete this.labels[n],this},t.addPause=function(n,s,o){var a=St.delayedCall(0,s||co,o);return a.data="isPause",this._hasPause=1,zi(this,a,Ei(this,n))},t.removePause=function(n){var s=this._first;for(n=Ei(this,n);s;)s._start===n&&s.data==="isPause"&&Pn(s),s=s._next},t.killTweensOf=function(n,s,o){for(var a=this.getTweensOf(n,o),l=a.length;l--;)An!==a[l]&&a[l].kill(n,s);return this},t.getTweensOf=function(n,s){for(var o=[],a=Ti(n),l=this._first,c=an(s),h;l;)l instanceof St?p0(l._targets,a)&&(c?(!An||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(h=l.getTweensOf(a,s)).length&&o.push.apply(o,h),l=l._next;return o},t.tweenTo=function(n,s){s=s||{};var o=this,a=Ei(o,n),l=s,c=l.startAt,h=l.onStart,u=l.onStartParams,d=l.immediateRender,f,_=St.to(o,Ai({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||ht,onStart:function(){if(o.pause(),!f){var m=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());_._dur!==m&&Kr(_,m,0,1).render(_._time,!0,!0),f=1}h&&h.apply(_,u||[])}},s));return d?_.render(0):_},t.tweenFromTo=function(n,s,o){return this.tweenTo(s,Ai({startAt:{time:Ei(this,n)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(n){return n===void 0&&(n=this._time),af(this,Ei(this,n))},t.previousLabel=function(n){return n===void 0&&(n=this._time),af(this,Ei(this,n),1)},t.currentLabel=function(n){return arguments.length?this.seek(n,!0):this.previousLabel(this._time+ht)},t.shiftChildren=function(n,s,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=n,a._end+=n),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=n);return sr(this)},t.invalidate=function(n){var s=this._first;for(this._lock=0;s;)s.invalidate(n),s=s._next;return r.prototype.invalidate.call(this,n)},t.clear=function(n){n===void 0&&(n=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),n&&(this.labels={}),sr(this)},t.totalDuration=function(n){var s=0,o=this,a=o._last,l=wi,c,h,u;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-n:n));if(o._dirty){for(u=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),h=a._start,h>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,zi(o,a,h-a._delay,1)._lock=0):l=h,h<0&&a._ts&&(s-=h,(!u&&!o._dp||u&&u.smoothChildTiming)&&(o._start+=h/o._ts,o._time-=h,o._tTime-=h),o.shiftChildren(-h,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;Kr(o,o===gt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(n){if(gt._ts&&(_f(gt,Pa(n,gt)),vf=ni.frame),ni.frame>=nf){nf+=si.autoSleep||120;var s=gt._first;if((!s||!s._ts)&&si.autoSleep&&ni._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||ni.sleep()}}},e}(uo);Ai(Ot.prototype,{_lock:0,_hasPause:0,_forcing:0});var U0=function(e,t,i,n,s,o,a){var l=new $t(this._pt,e,t,0,1,Jh,null,s),c=0,h=0,u,d,f,_,g,m,p,S;for(l.b=i,l.e=n,i+="",n+="",(p=~n.indexOf("random("))&&(n=Qr(n)),o&&(S=[i,n],o(S,e,t),i=S[0],n=S[1]),d=i.match(yh)||[];u=yh.exec(n);)_=u[0],g=n.substring(c,u.index),f?f=(f+1)%5:g.substr(-5)==="rgba("&&(f=1),_!==d[h++]&&(m=parseFloat(d[h-1])||0,l._pt={_next:l._pt,p:g||h===1?g:",",s:m,c:_.charAt(1)==="="?hr(m,_)-m:parseFloat(_)-m,m:f&&f<4?Math.round:0},c=yh.lastIndex);return l.c=c<n.length?n.substring(c,n.length):"",l.fp=a,(Hh.test(n)||p)&&(l.e=0),this._pt=l,l},jh=function(e,t,i,n,s,o,a,l,c,h){yt(n)&&(n=n(s||0,e,o));var u=e[t],d=i!=="get"?i:yt(u)?c?e[t.indexOf("set")||!yt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():u,f=yt(u)?c?V0:zf:Kh,_;if(Ct(n)&&(~n.indexOf("random(")&&(n=Qr(n)),n.charAt(1)==="="&&(_=hr(d,n)+(Ft(d)||0),(_||_===0)&&(n=_))),!h||d!==n||Fh)return!isNaN(d*n)&&n!==""?(_=new $t(this._pt,e,t,+d||0,n-(d||0),typeof u=="boolean"?W0:Vf,0,f),c&&(_.fp=c),a&&_.modifier(a,this,e),this._pt=_):(!u&&!(t in e)&&Da(t,n),U0.call(this,e,t,d,n,f,l||si.stringFilter,c))},B0=function(e,t,i,n,s){if(yt(e)&&(e=ao(e,s,t,i,n)),!Vi(e)||e.style&&e.nodeType||kt(e)||df(e))return Ct(e)?ao(e,s,t,i,n):e;var o={},a;for(a in e)o[a]=ao(e[a],s,t,i,n);return o},Zh=function(e,t,i,n,s,o){var a,l,c,h;if(ii[e]&&(a=new ii[e]).init(s,a.rawVars?t[e]:B0(t[e],n,s,o,i),i,n,o)!==!1&&(i._pt=l=new $t(i._pt,s,e,0,1,a.render,a,0,a.priority),i!==jr))for(c=i._ptLookup[i._targets.indexOf(s)],h=a._props.length;h--;)c[a._props[h]]=l;return a},An,Fh,$h=function r(e,t,i){var n=e.vars,s=n.ease,o=n.startAt,a=n.immediateRender,l=n.lazy,c=n.onUpdate,h=n.runBackwards,u=n.yoyoEase,d=n.keyframes,f=n.autoRevert,_=e._dur,g=e._startAt,m=e._targets,p=e.parent,S=p&&p.data==="nested"?p.vars.targets:m,x=e._overwrite==="auto"&&!Uh,b=e.timeline,T,C,L,P,M,E,O,V,W,$,K,q,oe;if(b&&(!d||!s)&&(s="none"),e._ease=or(s,Zr.ease),e._yEase=u?Nf(or(u===!0?s:u,Zr.ease)):0,u&&e._yoyo&&!e._repeat&&(u=e._yEase,e._yEase=e._ease,e._ease=u),e._from=!b&&!!n.runBackwards,!b||d&&!n.stagger){if(V=m[0]?Rn(m[0]).harness:0,q=V&&n[V.prop],T=Ra(n,Vh),g&&(g._zTime<0&&g.progress(1),t<0&&h&&a&&!f?g.render(-1,!0):g.revert(h&&_?Ea:d0),g._lazy=0),o){if(Pn(e._startAt=St.set(m,Ai({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!g&&ri(l),startAt:null,delay:0,onUpdate:c&&function(){return di(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Bt||!a&&!f)&&e._startAt.revert(Ea),a&&_&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(h&&_&&!g){if(t&&(a=!1),L=Ai({overwrite:!1,data:"isFromStart",lazy:a&&!g&&ri(l),immediateRender:a,stagger:0,parent:p},T),q&&(L[V.prop]=q),Pn(e._startAt=St.set(m,L)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Bt?e._startAt.revert(Ea):e._startAt.render(-1,!0)),e._zTime=t,!a)r(e._startAt,ht,ht);else if(!t)return}for(e._pt=e._ptCache=0,l=_&&ri(l)||l&&!_,C=0;C<m.length;C++){if(M=m[C],O=M._gsap||Wh(m)[C]._gsap,e._ptLookup[C]=$={},Rh[O.id]&&Cn.length&&Ca(),K=S===m?C:S.indexOf(M),V&&(W=new V).init(M,q||T,e,K,S)!==!1&&(e._pt=P=new $t(e._pt,M,W.name,0,1,W.render,W,0,W.priority),W._props.forEach(function(X){$[X]=P}),W.priority&&(E=1)),!V||q)for(L in T)ii[L]&&(W=Zh(L,T,e,K,M,S))?W.priority&&(E=1):$[L]=P=jh.call(e,M,L,"get",T[L],K,S,0,n.stringFilter);e._op&&e._op[C]&&e.kill(M,e._op[C]),x&&e._pt&&(An=e,gt.killTweensOf(M,$,e.globalTime(t)),oe=!e.parent,An=0),e._pt&&l&&(Rh[O.id]=1)}E&&eu(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!oe,d&&t<=0&&b.render(wi,!0,!0)},k0=function(e,t,i,n,s,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],h,u,d,f;if(!c)for(c=e._ptCache[t]=[],d=e._ptLookup,f=e._targets.length;f--;){if(h=d[f][t],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==t&&h.fp!==t;)h=h._next;if(!h)return Fh=1,e.vars[t]="+=0",$h(e,a),Fh=0,l?lo(t+" not eligible for reset"):1;c.push(h)}for(f=c.length;f--;)u=c[f],h=u._pt||u,h.s=(n||n===0)&&!s?n:h.s+(n||0)+o*h.c,h.c=i-h.s,u.e&&(u.e=xt(i)+Ft(u.e)),u.b&&(u.b=h.s+Ft(u.b))},H0=function(e,t){var i=e[0]?Rn(e[0]).harness:0,n=i&&i.aliases,s,o,a,l;if(!n)return t;s=lr({},t);for(o in n)if(o in s)for(l=n[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},z0=function(e,t,i,n){var s=t.ease||n||"power1.inOut",o,a;if(kt(t))a=i[e]||(i[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(o in t)a=i[o]||(i[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},ao=function(e,t,i,n,s){return yt(e)?e.call(t,i,n,s):Ct(e)&&~e.indexOf("random(")?Qr(e):e},kf=Gh+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Hf={};Zt(kf+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return Hf[r]=1});var St=function(r){hf(e,r);function e(i,n,s,o){var a;typeof n=="number"&&(s.duration=n,n=s,s=null),a=r.call(this,o?n:so(n))||this;var l=a.vars,c=l.duration,h=l.delay,u=l.immediateRender,d=l.stagger,f=l.overwrite,_=l.keyframes,g=l.defaults,m=l.scrollTrigger,p=l.yoyoEase,S=n.parent||gt,x=(kt(i)||df(i)?an(i[0]):"length"in n)?[i]:Ti(i),b,T,C,L,P,M,E,O;if(a._targets=x.length?Wh(x):lo("GSAP target "+i+" not found. https://gsap.com",!si.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=f,_||d||Ma(c)||Ma(h)){if(n=a.vars,b=a.timeline=new Ot({data:"nested",defaults:g||{},targets:S&&S.data==="nested"?S.vars.targets:x}),b.kill(),b.parent=b._dp=sn(a),b._start=0,d||Ma(c)||Ma(h)){if(L=x.length,E=d&&Af(d),Vi(d))for(P in d)~kf.indexOf(P)&&(O||(O={}),O[P]=d[P]);for(T=0;T<L;T++)C=Ra(n,Hf),C.stagger=0,p&&(C.yoyoEase=p),O&&lr(C,O),M=x[T],C.duration=+ao(c,sn(a),T,M,x),C.delay=(+ao(h,sn(a),T,M,x)||0)-a._delay,!d&&L===1&&C.delay&&(a._delay=h=C.delay,a._start+=h,C.delay=0),b.to(M,C,E?E(T,M,x):0),b._ease=Ze.none;b.duration()?c=h=0:a.timeline=0}else if(_){so(Ai(b.vars.defaults,{ease:"none"})),b._ease=or(_.ease||n.ease||"none");var V=0,W,$,K;if(kt(_))_.forEach(function(q){return b.to(x,q,">")}),b.duration();else{C={};for(P in _)P==="ease"||P==="easeEach"||z0(P,_[P],C,_.easeEach);for(P in C)for(W=C[P].sort(function(q,oe){return q.t-oe.t}),V=0,T=0;T<W.length;T++)$=W[T],K={ease:$.e,duration:($.t-(T?W[T-1].t:0))/100*c},K[P]=$.v,b.to(x,K,V),V+=K.duration;b.duration()<c&&b.to({},{duration:c-b.duration()})}}c||a.duration(c=b.duration())}else a.timeline=0;return f===!0&&!Uh&&(An=sn(a),gt.killTweensOf(x),An=0),zi(S,sn(a),s),n.reversed&&a.reverse(),n.paused&&a.paused(!0),(u||!c&&!_&&a._start===It(S._time)&&ri(u)&&_0(sn(a))&&S.data!=="nested")&&(a._tTime=-ht,a.render(Math.max(0,-h)||0)),m&&Mf(sn(a),m),a}var t=e.prototype;return t.render=function(n,s,o){var a=this._time,l=this._tDur,c=this._dur,h=n<0,u=n>l-ht&&!h?l:n<ht?0:n,d,f,_,g,m,p,S,x,b;if(!c)x0(this,n,s,o);else if(u!==this._tTime||!n||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h){if(d=u,x=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(g*100+n,s,o);if(d=It(u%g),u===l?(_=this._repeat,d=c):(_=~~(u/g),_&&_===It(u/g)&&(d=c,_--),d>c&&(d=c)),p=this._yoyo&&_&1,p&&(b=this._yEase,d=c-d),m=$r(this._tTime,g),d===a&&!o&&this._initted&&_===m)return this._tTime=u,this;_!==m&&(x&&this._yEase&&Uf(x,p),this.vars.repeatRefresh&&!p&&!this._lock&&this._time!==g&&this._initted&&(this._lock=o=1,this.render(It(g*_),!0).invalidate()._lock=0))}if(!this._initted){if(Ef(this,h?n:d,o,s,u))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&_!==m))return this;if(c!==this._dur)return this.render(n,s,o)}if(this._tTime=u,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=S=(b||this._ease)(d/c),this._from&&(this.ratio=S=1-S),d&&!a&&!s&&!_&&(di(this,"onStart"),this._tTime!==u))return this;for(f=this._pt;f;)f.r(S,f.d),f=f._next;x&&x.render(n<0?n:x._dur*x._ease(d/this._dur),s,o)||this._startAt&&(this._zTime=n),this._onUpdate&&!s&&(h&&Ph(this,n,s,o),di(this,"onUpdate")),this._repeat&&_!==m&&this.vars.onRepeat&&!s&&this.parent&&di(this,"onRepeat"),(u===this._tDur||!u)&&this._tTime===u&&(h&&!this._onUpdate&&Ph(this,n,!0,!0),(n||!c)&&(u===this._tDur&&this._ts>0||!u&&this._ts<0)&&Pn(this,1),!s&&!(h&&!a)&&(u||a||p)&&(di(this,u===l?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(n){return(!n||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(n),r.prototype.invalidate.call(this,n)},t.resetTo=function(n,s,o,a,l){ho||ni.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||$h(this,c),h=this._ease(c/this._dur),k0(this,n,s,o,a,h,c,l)?this.resetTo(n,s,o,a,1):(Na(this,0),this.parent||bf(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(n,s){if(s===void 0&&(s="all"),!n&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?no(this):this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(n,s,An&&An.vars.overwrite!==!0)._first||no(this),this.parent&&o!==this.timeline.totalDuration()&&Kr(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=n?Ti(n):a,c=this._ptLookup,h=this._pt,u,d,f,_,g,m,p;if((!s||s==="all")&&g0(a,l))return s==="all"&&(this._pt=0),no(this);for(u=this._op=this._op||[],s!=="all"&&(Ct(s)&&(g={},Zt(s,function(S){return g[S]=1}),s=g),s=H0(a,s)),p=a.length;p--;)if(~l.indexOf(a[p])){d=c[p],s==="all"?(u[p]=s,_=d,f={}):(f=u[p]=u[p]||{},_=s);for(g in _)m=d&&d[g],m&&((!("kill"in m.d)||m.d.kill(g)===!0)&&Oa(this,m,"_pt"),delete d[g]),f!=="all"&&(f[g]=1)}return this._initted&&!this._pt&&h&&no(this),this},e.to=function(n,s){return new e(n,s,arguments[2])},e.from=function(n,s){return oo(1,arguments)},e.delayedCall=function(n,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:n,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(n,s,o){return oo(2,arguments)},e.set=function(n,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(n,s)},e.killTweensOf=function(n,s,o){return gt.killTweensOf(n,s,o)},e}(uo);Ai(St.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Zt("staggerTo,staggerFrom,staggerFromTo",function(r){St[r]=function(){var e=new Ot,t=Ih.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var Kh=function(e,t,i){return e[t]=i},zf=function(e,t,i){return e[t](i)},V0=function(e,t,i,n){return e[t](n.fp,i)},G0=function(e,t,i){return e.setAttribute(t,i)},Ua=function(e,t){return yt(e[t])?zf:Ia(e[t])&&e.setAttribute?G0:Kh},Vf=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},W0=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Jh=function(e,t){var i=t._pt,n="";if(!e&&t.b)n=t.b;else if(e===1&&t.e)n=t.e;else{for(;i;)n=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+n,i=i._next;n+=t.c}t.set(t.t,t.p,n,t)},Qh=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},X0=function(e,t,i,n){for(var s=this._pt,o;s;)o=s._next,s.p===n&&s.modifier(e,t,i),s=o},q0=function(e){for(var t=this._pt,i,n;t;)n=t._next,t.p===e&&!t.op||t.op===e?Oa(this,t,"_pt"):t.dep||(i=1),t=n;return!i},Y0=function(e,t,i,n){n.mSet(e,t,n.m.call(n.tween,i,n.mt),n)},eu=function(e){for(var t=e._pt,i,n,s,o;t;){for(i=t._next,n=s;n&&n.pr>t.pr;)n=n._next;(t._prev=n?n._prev:o)?t._prev._next=t:s=t,(t._next=n)?n._prev=t:o=t,t=i}e._pt=s},$t=function(){function r(t,i,n,s,o,a,l,c,h){this.t=i,this.s=s,this.c=o,this.p=n,this.r=a||Vf,this.d=l||this,this.set=c||Kh,this.pr=h||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(i,n,s){this.mSet=this.mSet||this.set,this.set=Y0,this.m=i,this.mt=s,this.tween=n},r}();Zt(Gh+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return Vh[r]=1});fi.TweenMax=fi.TweenLite=St;fi.TimelineLite=fi.TimelineMax=Ot;gt=new Ot({sortChildren:!1,defaults:Zr,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});si.stringFilter=qh;var ar=[],Ta={},j0=[],cf=0,Z0=0,Eh=function(e){return(Ta[e]||j0).map(function(t){return t()})},Nh=function(){var e=Date.now(),t=[];e-cf>2&&(Eh("matchMediaInit"),ar.forEach(function(i){var n=i.queries,s=i.conditions,o,a,l,c;for(a in n)o=Hi.matchMedia(n[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(i.revert(),l&&t.push(i))}),Eh("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i,function(n){return i.add(null,n)})}),cf=e,Eh("matchMedia"))},Gf=function(){function r(t,i){this.selector=i&&Dh(i),this.data=[],this._r=[],this.isReverted=!1,this.id=Z0++,t&&this.add(t)}var e=r.prototype;return e.add=function(i,n,s){yt(i)&&(s=n,n=i,i=yt);var o=this,a=function(){var c=ft,h=o.selector,u;return c&&c!==o&&c.data.push(o),s&&(o.selector=Dh(s)),ft=o,u=n.apply(o,arguments),yt(u)&&o._r.push(u),ft=c,o.selector=h,o.isReverted=!1,u};return o.last=a,i===yt?a(o,function(l){return o.add(null,l)}):i?o[i]=a:a},e.ignore=function(i){var n=ft;ft=null,i(this),ft=n},e.getTweens=function(){var i=[];return this.data.forEach(function(n){return n instanceof r?i.push.apply(i,n.getTweens()):n instanceof St&&!(n.parent&&n.parent.data==="nested")&&i.push(n)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,n){var s=this;if(i?function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return a.splice(a.indexOf(h),1)}));for(a.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,u){return u.g-h.g||-1/0}).forEach(function(h){return h.t.revert(i)}),l=s.data.length;l--;)c=s.data[l],c instanceof Ot?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof St)&&c.revert&&c.revert(i);s._r.forEach(function(h){return h(i,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),n)for(var o=ar.length;o--;)ar[o].id===this.id&&ar.splice(o,1)},e.revert=function(i){this.kill(i||{})},r}(),$0=function(){function r(t){this.contexts=[],this.scope=t,ft&&ft.data.push(this)}var e=r.prototype;return e.add=function(i,n,s){Vi(i)||(i={matches:i});var o=new Gf(0,s||this.scope),a=o.conditions={},l,c,h;ft&&!o.selector&&(o.selector=ft.selector),this.contexts.push(o),n=o.add("onMatch",n),o.queries=i;for(c in i)c==="all"?h=1:(l=Hi.matchMedia(i[c]),l&&(ar.indexOf(o)<0&&ar.push(o),(a[c]=l.matches)&&(h=1),l.addListener?l.addListener(Nh):l.addEventListener("change",Nh)));return h&&n(o,function(u){return o.add(null,u)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(n){return n.kill(i,!0)})},r}(),La={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(n){return Df(n)})},timeline:function(e){return new Ot(e)},getTweensOf:function(e,t){return gt.getTweensOf(e,t)},getProperty:function(e,t,i,n){Ct(e)&&(e=Ti(e)[0]);var s=Rn(e||{}).get,o=i?xf:yf;return i==="native"&&(i=""),e&&(t?o((ii[t]&&ii[t].get||s)(e,t,i,n)):function(a,l,c){return o((ii[a]&&ii[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,i){if(e=Ti(e),e.length>1){var n=e.map(function(h){return Ht.quickSetter(h,t,i)}),s=n.length;return function(h){for(var u=s;u--;)n[u](h)}}e=e[0]||{};var o=ii[t],a=Rn(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(h){var u=new o;jr._pt=0,u.init(e,i?h+i:h,jr,0,[e]),u.render(1,u),jr._pt&&Qh(1,jr)}:a.set(e,l);return o?c:function(h){return c(e,l,i?h+i:h,a,1)}},quickTo:function(e,t,i){var n,s=Ht.to(e,lr((n={},n[t]="+=0.1",n.paused=!0,n),i||{})),o=function(l,c,h){return s.resetTo(t,l,c,h)};return o.tween=s,o},isTweening:function(e){return gt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=or(e.ease,Zr.ease)),rf(Zr,e||{})},config:function(e){return rf(si,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,n=e.plugins,s=e.defaults,o=e.extendTimeline;(n||"").split(",").forEach(function(a){return a&&!ii[a]&&!fi[a]&&lo(t+" effect requires "+a+" plugin.")}),xh[t]=function(a,l,c){return i(Ti(a),Ai(l||{},s),c)},o&&(Ot.prototype[t]=function(a,l,c){return this.add(xh[t](a,Vi(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){Ze[e]=or(t)},parseEase:function(e,t){return arguments.length?or(e,t):Ze},getById:function(e){return gt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new Ot(e),n,s;for(i.smoothChildTiming=ri(e.smoothChildTiming),gt.remove(i),i._dp=0,i._time=i._tTime=gt._time,n=gt._first;n;)s=n._next,(t||!(!n._dur&&n instanceof St&&n.vars.onComplete===n._targets[0]))&&zi(i,n,n._start-n._delay),n=s;return zi(gt,i,0),i},context:function(e,t){return e?new Gf(e,t):ft},matchMedia:function(e){return new $0(e)},matchMediaRefresh:function(){return ar.forEach(function(e){var t=e.conditions,i,n;for(n in t)t[n]&&(t[n]=!1,i=1);i&&e.revert()})||Nh()},addEventListener:function(e,t){var i=Ta[e]||(Ta[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=Ta[e],n=i&&i.indexOf(t);n>=0&&i.splice(n,1)},utils:{wrap:C0,wrapYoyo:R0,distribute:Af,random:Rf,snap:Cf,normalize:A0,getUnit:Ft,clamp:M0,splitColor:Of,toArray:Ti,selector:Dh,mapRange:Lf,pipe:w0,unitize:T0,interpolate:P0,shuffle:Tf},install:mf,effects:xh,ticker:ni,updateRoot:Ot.updateRoot,plugins:ii,globalTimeline:gt,core:{PropTween:$t,globals:gf,Tween:St,Timeline:Ot,Animation:uo,getCache:Rn,_removeLinkedListItem:Oa,reverting:function(){return Bt},context:function(e){return e&&ft&&(ft.data.push(e),e._ctx=ft),ft},suppressOverwrites:function(e){return Uh=e}}};Zt("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return La[r]=St[r]});ni.add(Ot.updateRoot);jr=La.to({},{duration:0});var K0=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},J0=function(e,t){var i=e._targets,n,s,o;for(n in t)for(s=i.length;s--;)o=e._ptLookup[s][n],o&&(o=o.d)&&(o._pt&&(o=K0(o,n)),o&&o.modifier&&o.modifier(t[n],e,i[s],n))},wh=function(e,t){return{name:e,rawVars:1,init:function(n,s,o){o._onInit=function(a){var l,c;if(Ct(s)&&(l={},Zt(s,function(h){return l[h]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}J0(a,s)}}}},Ht=La.registerPlugin({name:"attr",init:function(e,t,i,n,s){var o,a,l;this.tween=i;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],n,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var i=t._pt;i;)Bt?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},wh("roundProps",Oh),wh("modifiers"),wh("snap",Cf))||La;St.version=Ot.version=Ht.version="3.12.5";pf=1;Bh()&&Jr();var Q0=Ze.Power0,e_=Ze.Power1,t_=Ze.Power2,i_=Ze.Power3,n_=Ze.Power4,r_=Ze.Linear,s_=Ze.Quad,o_=Ze.Cubic,a_=Ze.Quart,l_=Ze.Quint,c_=Ze.Strong,h_=Ze.Elastic,u_=Ze.Back,d_=Ze.SteppedEase,f_=Ze.Bounce,p_=Ze.Sine,m_=Ze.Expo,g_=Ze.Circ;var Wf,In,ts,au,mr,v_,Xf,lu,__=function(){return typeof window!="undefined"},cn={},pr=180/Math.PI,is=Math.PI/180,es=Math.atan2,qf=1e8,cu=/([A-Z])/g,y_=/(left|right|width|margin|padding|x)/i,x_=/[\s,\(]\S/,Gi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},nu=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},b_=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},S_=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},M_=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},Qf=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},ep=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},E_=function(e,t,i){return e.style[t]=i},w_=function(e,t,i){return e.style.setProperty(t,i)},T_=function(e,t,i){return e._gsap[t]=i},A_=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},C_=function(e,t,i,n,s){var o=e._gsap;o.scaleX=o.scaleY=i,o.renderTransform(s,o)},R_=function(e,t,i,n,s){var o=e._gsap;o[t]=i,o.renderTransform(s,o)},vt="transform",oi=vt+"Origin",P_=function r(e,t){var i=this,n=this.target,s=n.style,o=n._gsap;if(e in cn&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Gi[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return i.tfm[a]=ln(n,a)}):this.tfm[e]=o.x?o[e]:ln(n,e),e===oi&&(this.tfm.zOrigin=o.zOrigin);else return Gi.transform.split(",").forEach(function(a){return r.call(i,a,t)});if(this.props.indexOf(vt)>=0)return;o.svg&&(this.svgo=n.getAttribute("data-svg-origin"),this.props.push(oi,t,"")),e=vt}(s||t)&&this.props.push(e,t,s[e])},tp=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},L_=function(){var e=this.props,t=this.target,i=t.style,n=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?t[e[s]]=e[s+2]:e[s+2]?i[e[s]]=e[s+2]:i.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(cu,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)n[o]=this.tfm[o];n.svg&&(n.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=lu(),(!s||!s.isStart)&&!i[vt]&&(tp(i),n.zOrigin&&i[oi]&&(i[oi]+=" "+n.zOrigin+"px",n.zOrigin=0,n.renderTransform()),n.uncache=1)}},ip=function(e,t){var i={target:e,props:[],revert:L_,save:P_};return e._gsap||Ht.core.getCache(e),t&&t.split(",").forEach(function(n){return i.save(n)}),i},np,ru=function(e,t){var i=In.createElementNS?In.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):In.createElement(e);return i&&i.style?i:In.createElement(e)},Wi=function r(e,t,i){var n=getComputedStyle(e);return n[t]||n.getPropertyValue(t.replace(cu,"-$1").toLowerCase())||n.getPropertyValue(t)||!i&&r(e,ns(t)||t,1)||""},Yf="O,Moz,ms,Ms,Webkit".split(","),ns=function(e,t,i){var n=t||mr,s=n.style,o=5;if(e in s&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(Yf[o]+e in s););return o<0?null:(o===3?"ms":o>=0?Yf[o]:"")+e},su=function(){__()&&window.document&&(Wf=window,In=Wf.document,ts=In.documentElement,mr=ru("div")||{style:{}},v_=ru("div"),vt=ns(vt),oi=vt+"Origin",mr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",np=!!ns("perspective"),lu=Ht.core.reverting,au=1)},tu=function r(e){var t=ru("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=this.parentNode,n=this.nextSibling,s=this.style.cssText,o;if(ts.appendChild(t),t.appendChild(this),this.style.display="block",e)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=r}catch{}else this._gsapBBox&&(o=this._gsapBBox());return i&&(n?i.insertBefore(this,n):i.appendChild(this)),ts.removeChild(t),this.style.cssText=s,o},jf=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},rp=function(e){var t;try{t=e.getBBox()}catch{t=tu.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===tu||(t=tu.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+jf(e,["x","cx","x1"])||0,y:+jf(e,["y","cy","y1"])||0,width:0,height:0}:t},sp=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&rp(e))},gr=function(e,t){if(t){var i=e.style,n;t in cn&&t!==oi&&(t=vt),i.removeProperty?(n=t.substr(0,2),(n==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(n==="--"?t:t.replace(cu,"-$1").toLowerCase())):i.removeAttribute(t)}},Dn=function(e,t,i,n,s,o){var a=new $t(e._pt,t,i,0,1,o?ep:Qf);return e._pt=a,a.b=n,a.e=s,e._props.push(i),a},Zf={deg:1,rad:1,turn:1},I_={grid:1,flex:1},On=function r(e,t,i,n){var s=parseFloat(i)||0,o=(i+"").trim().substr((s+"").length)||"px",a=mr.style,l=y_.test(t),c=e.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),u=100,d=n==="px",f=n==="%",_,g,m,p;if(n===o||!s||Zf[n]||Zf[o])return s;if(o!=="px"&&!d&&(s=r(e,t,i,"px")),p=e.getCTM&&sp(e),(f||o==="%")&&(cn[t]||~t.indexOf("adius")))return _=p?e.getBBox()[l?"width":"height"]:e[h],xt(f?s/_*u:s/100*_);if(a[l?"width":"height"]=u+(d?o:n),g=~t.indexOf("adius")||n==="em"&&e.appendChild&&!c?e:e.parentNode,p&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===In||!g.appendChild)&&(g=In.body),m=g._gsap,m&&f&&m.width&&l&&m.time===ni.time&&!m.uncache)return xt(s/m.width*u);if(f&&(t==="height"||t==="width")){var S=e.style[t];e.style[t]=u+n,_=e[h],S?e.style[t]=S:gr(e,t)}else(f||o==="%")&&!I_[Wi(g,"display")]&&(a.position=Wi(e,"position")),g===e&&(a.position="static"),g.appendChild(mr),_=mr[h],g.removeChild(mr),a.position="absolute";return l&&f&&(m=Rn(g),m.time=ni.time,m.width=g[h]),xt(d?_*s/u:_&&s?u/_*s:0)},ln=function(e,t,i,n){var s;return au||su(),t in Gi&&t!=="transform"&&(t=Gi[t],~t.indexOf(",")&&(t=t.split(",")[0])),cn[t]&&t!=="transform"?(s=go(e,n),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:ka(Wi(e,oi))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||n||~(s+"").indexOf("calc("))&&(s=Ba[t]&&Ba[t](e,t,i)||Wi(e,t)||Xh(e,t)||(t==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?On(e,t,s,i)+i:s},D_=function(e,t,i,n){if(!i||i==="none"){var s=ns(t,e,1),o=s&&Wi(e,s,1);o&&o!==i?(t=s,i=o):t==="borderColor"&&(i=Wi(e,"borderTopColor"))}var a=new $t(this._pt,e.style,t,0,1,Jh),l=0,c=0,h,u,d,f,_,g,m,p,S,x,b,T;if(a.b=i,a.e=n,i+="",n+="",n==="auto"&&(g=e.style[t],e.style[t]=n,n=Wi(e,t)||n,g?e.style[t]=g:gr(e,t)),h=[i,n],qh(h),i=h[0],n=h[1],d=i.match(cr)||[],T=n.match(cr)||[],T.length){for(;u=cr.exec(n);)m=u[0],S=n.substring(l,u.index),_?_=(_+1)%5:(S.substr(-5)==="rgba("||S.substr(-5)==="hsla(")&&(_=1),m!==(g=d[c++]||"")&&(f=parseFloat(g)||0,b=g.substr((f+"").length),m.charAt(1)==="="&&(m=hr(f,m)+b),p=parseFloat(m),x=m.substr((p+"").length),l=cr.lastIndex-x.length,x||(x=x||si.units[t]||b,l===n.length&&(n+=x,a.e+=x)),b!==x&&(f=On(e,t,g,x)||0),a._pt={_next:a._pt,p:S||c===1?S:",",s:f,c:p-f,m:_&&_<4||t==="zIndex"?Math.round:0});a.c=l<n.length?n.substring(l,n.length):""}else a.r=t==="display"&&n==="none"?ep:Qf;return Hh.test(n)&&(a.e=0),this._pt=a,a},$f={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},O_=function(e){var t=e.split(" "),i=t[0],n=t[1]||"50%";return(i==="top"||i==="bottom"||n==="left"||n==="right")&&(e=i,i=n,n=e),t[0]=$f[i]||i,t[1]=$f[n]||n,t.join(" ")},F_=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,n=i.style,s=t.u,o=i._gsap,a,l,c;if(s==="all"||s===!0)n.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],cn[a]&&(l=1,a=a==="transformOrigin"?oi:vt),gr(i,a);l&&(gr(i,vt),o&&(o.svg&&i.removeAttribute("transform"),go(i,1),o.uncache=1,tp(n)))}},Ba={clearProps:function(e,t,i,n,s){if(s.data!=="isFromStart"){var o=e._pt=new $t(e._pt,t,i,0,0,F_);return o.u=n,o.pr=-10,o.tween=s,e._props.push(i),1}}},mo=[1,0,0,1,0,0],op={},ap=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Kf=function(e){var t=Wi(e,vt);return ap(t)?mo:t.substr(7).match(kh).map(xt)},hu=function(e,t){var i=e._gsap||Rn(e),n=e.style,s=Kf(e),o,a,l,c;return i.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?mo:s):(s===mo&&!e.offsetParent&&e!==ts&&!i.svg&&(l=n.display,n.display="block",o=e.parentNode,(!o||!e.offsetParent)&&(c=1,a=e.nextElementSibling,ts.appendChild(e)),s=Kf(e),l?n.display=l:gr(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):ts.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},ou=function(e,t,i,n,s,o){var a=e._gsap,l=s||hu(e,!0),c=a.xOrigin||0,h=a.yOrigin||0,u=a.xOffset||0,d=a.yOffset||0,f=l[0],_=l[1],g=l[2],m=l[3],p=l[4],S=l[5],x=t.split(" "),b=parseFloat(x[0])||0,T=parseFloat(x[1])||0,C,L,P,M;i?l!==mo&&(L=f*m-_*g)&&(P=b*(m/L)+T*(-g/L)+(g*S-m*p)/L,M=b*(-_/L)+T*(f/L)-(f*S-_*p)/L,b=P,T=M):(C=rp(e),b=C.x+(~x[0].indexOf("%")?b/100*C.width:b),T=C.y+(~(x[1]||x[0]).indexOf("%")?T/100*C.height:T)),n||n!==!1&&a.smooth?(p=b-c,S=T-h,a.xOffset=u+(p*f+S*g)-p,a.yOffset=d+(p*_+S*m)-S):a.xOffset=a.yOffset=0,a.xOrigin=b,a.yOrigin=T,a.smooth=!!n,a.origin=t,a.originIsAbsolute=!!i,e.style[oi]="0px 0px",o&&(Dn(o,a,"xOrigin",c,b),Dn(o,a,"yOrigin",h,T),Dn(o,a,"xOffset",u,a.xOffset),Dn(o,a,"yOffset",d,a.yOffset)),e.setAttribute("data-svg-origin",b+" "+T)},go=function(e,t){var i=e._gsap||new Yh(e);if("x"in i&&!t&&!i.uncache)return i;var n=e.style,s=i.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=Wi(e,oi)||"0",h,u,d,f,_,g,m,p,S,x,b,T,C,L,P,M,E,O,V,W,$,K,q,oe,X,fe,ye,we,Ne,Qe,Xe,Ve;return h=u=d=g=m=p=S=x=b=0,f=_=1,i.svg=!!(e.getCTM&&sp(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(n[vt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[vt]!=="none"?l[vt]:"")),n.scale=n.rotate=n.translate="none"),L=hu(e,i.svg),i.svg&&(i.uncache?(X=e.getBBox(),c=i.xOrigin-X.x+"px "+(i.yOrigin-X.y)+"px",oe=""):oe=!t&&e.getAttribute("data-svg-origin"),ou(e,oe||c,!!oe||i.originIsAbsolute,i.smooth!==!1,L)),T=i.xOrigin||0,C=i.yOrigin||0,L!==mo&&(O=L[0],V=L[1],W=L[2],$=L[3],h=K=L[4],u=q=L[5],L.length===6?(f=Math.sqrt(O*O+V*V),_=Math.sqrt($*$+W*W),g=O||V?es(V,O)*pr:0,S=W||$?es(W,$)*pr+g:0,S&&(_*=Math.abs(Math.cos(S*is))),i.svg&&(h-=T-(T*O+C*W),u-=C-(T*V+C*$))):(Ve=L[6],Qe=L[7],ye=L[8],we=L[9],Ne=L[10],Xe=L[11],h=L[12],u=L[13],d=L[14],P=es(Ve,Ne),m=P*pr,P&&(M=Math.cos(-P),E=Math.sin(-P),oe=K*M+ye*E,X=q*M+we*E,fe=Ve*M+Ne*E,ye=K*-E+ye*M,we=q*-E+we*M,Ne=Ve*-E+Ne*M,Xe=Qe*-E+Xe*M,K=oe,q=X,Ve=fe),P=es(-W,Ne),p=P*pr,P&&(M=Math.cos(-P),E=Math.sin(-P),oe=O*M-ye*E,X=V*M-we*E,fe=W*M-Ne*E,Xe=$*E+Xe*M,O=oe,V=X,W=fe),P=es(V,O),g=P*pr,P&&(M=Math.cos(P),E=Math.sin(P),oe=O*M+V*E,X=K*M+q*E,V=V*M-O*E,q=q*M-K*E,O=oe,K=X),m&&Math.abs(m)+Math.abs(g)>359.9&&(m=g=0,p=180-p),f=xt(Math.sqrt(O*O+V*V+W*W)),_=xt(Math.sqrt(q*q+Ve*Ve)),P=es(K,q),S=Math.abs(P)>2e-4?P*pr:0,b=Xe?1/(Xe<0?-Xe:Xe):0),i.svg&&(oe=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!ap(Wi(e,vt)),oe&&e.setAttribute("transform",oe))),Math.abs(S)>90&&Math.abs(S)<270&&(s?(f*=-1,S+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,S+=S<=0?180:-180)),t=t||i.uncache,i.x=h-((i.xPercent=h&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-h)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+o,i.y=u-((i.yPercent=u&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-u)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+o,i.z=d+o,i.scaleX=xt(f),i.scaleY=xt(_),i.rotation=xt(g)+a,i.rotationX=xt(m)+a,i.rotationY=xt(p)+a,i.skewX=S+a,i.skewY=x+a,i.transformPerspective=b+o,(i.zOrigin=parseFloat(c.split(" ")[2])||!t&&i.zOrigin||0)&&(n[oi]=ka(c)),i.xOffset=i.yOffset=0,i.force3D=si.force3D,i.renderTransform=i.svg?U_:np?lp:N_,i.uncache=0,i},ka=function(e){return(e=e.split(" "))[0]+" "+e[1]},iu=function(e,t,i){var n=Ft(t);return xt(parseFloat(t)+parseFloat(On(e,"x",i+"px",n)))+n},N_=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,lp(e,t)},dr="0deg",po="0px",fr=") ",lp=function(e,t){var i=t||this,n=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.z,c=i.rotation,h=i.rotationY,u=i.rotationX,d=i.skewX,f=i.skewY,_=i.scaleX,g=i.scaleY,m=i.transformPerspective,p=i.force3D,S=i.target,x=i.zOrigin,b="",T=p==="auto"&&e&&e!==1||p===!0;if(x&&(u!==dr||h!==dr)){var C=parseFloat(h)*is,L=Math.sin(C),P=Math.cos(C),M;C=parseFloat(u)*is,M=Math.cos(C),o=iu(S,o,L*M*-x),a=iu(S,a,-Math.sin(C)*-x),l=iu(S,l,P*M*-x+x)}m!==po&&(b+="perspective("+m+fr),(n||s)&&(b+="translate("+n+"%, "+s+"%) "),(T||o!==po||a!==po||l!==po)&&(b+=l!==po||T?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+fr),c!==dr&&(b+="rotate("+c+fr),h!==dr&&(b+="rotateY("+h+fr),u!==dr&&(b+="rotateX("+u+fr),(d!==dr||f!==dr)&&(b+="skew("+d+", "+f+fr),(_!==1||g!==1)&&(b+="scale("+_+", "+g+fr),S.style[vt]=b||"translate(0, 0)"},U_=function(e,t){var i=t||this,n=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.rotation,c=i.skewX,h=i.skewY,u=i.scaleX,d=i.scaleY,f=i.target,_=i.xOrigin,g=i.yOrigin,m=i.xOffset,p=i.yOffset,S=i.forceCSS,x=parseFloat(o),b=parseFloat(a),T,C,L,P,M;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=is,c*=is,T=Math.cos(l)*u,C=Math.sin(l)*u,L=Math.sin(l-c)*-d,P=Math.cos(l-c)*d,c&&(h*=is,M=Math.tan(c-h),M=Math.sqrt(1+M*M),L*=M,P*=M,h&&(M=Math.tan(h),M=Math.sqrt(1+M*M),T*=M,C*=M)),T=xt(T),C=xt(C),L=xt(L),P=xt(P)):(T=u,P=d,C=L=0),(x&&!~(o+"").indexOf("px")||b&&!~(a+"").indexOf("px"))&&(x=On(f,"x",o,"px"),b=On(f,"y",a,"px")),(_||g||m||p)&&(x=xt(x+_-(_*T+g*L)+m),b=xt(b+g-(_*C+g*P)+p)),(n||s)&&(M=f.getBBox(),x=xt(x+n/100*M.width),b=xt(b+s/100*M.height)),M="matrix("+T+","+C+","+L+","+P+","+x+","+b+")",f.setAttribute("transform",M),S&&(f.style[vt]=M)},B_=function(e,t,i,n,s){var o=360,a=Ct(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?pr:1),c=l-n,h=n+c+"deg",u,d;return a&&(u=s.split("_")[1],u==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),u==="cw"&&c<0?c=(c+o*qf)%o-~~(c/o)*o:u==="ccw"&&c>0&&(c=(c-o*qf)%o-~~(c/o)*o)),e._pt=d=new $t(e._pt,t,i,n,c,b_),d.e=h,d.u="deg",e._props.push(i),d},Jf=function(e,t){for(var i in t)e[i]=t[i];return e},k_=function(e,t,i){var n=Jf({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=i.style,a,l,c,h,u,d,f,_;n.svg?(c=i.getAttribute("transform"),i.setAttribute("transform",""),o[vt]=t,a=go(i,1),gr(i,vt),i.setAttribute("transform",c)):(c=getComputedStyle(i)[vt],o[vt]=t,a=go(i,1),o[vt]=c);for(l in cn)c=n[l],h=a[l],c!==h&&s.indexOf(l)<0&&(f=Ft(c),_=Ft(h),u=f!==_?On(i,l,c,_):parseFloat(c),d=parseFloat(h),e._pt=new $t(e._pt,a,l,u,d-u,nu),e._pt.u=_||0,e._props.push(l));Jf(a,n)};Zt("padding,margin,Width,Radius",function(r,e){var t="Top",i="Right",n="Bottom",s="Left",o=(e<3?[t,i,n,s]:[t+s,t+i,n+i,n+s]).map(function(a){return e<2?r+a:"border"+a+r});Ba[e>1?"border"+r:r]=function(a,l,c,h,u){var d,f;if(arguments.length<4)return d=o.map(function(_){return ln(a,_,c)}),f=d.join(" "),f.split(d[0]).length===5?d[0]:f;d=(h+"").split(" "),f={},o.forEach(function(_,g){return f[_]=d[g]=d[g]||d[(g-1)/2|0]}),a.init(l,f,u)}});var uu={name:"css",register:su,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,n,s){var o=this._props,a=e.style,l=i.vars.startAt,c,h,u,d,f,_,g,m,p,S,x,b,T,C,L,P;au||su(),this.styles=this.styles||ip(e),P=this.styles.props,this.tween=i;for(g in t)if(g!=="autoRound"&&(h=t[g],!(ii[g]&&Zh(g,t,i,n,e,s)))){if(f=typeof h,_=Ba[g],f==="function"&&(h=h.call(i,n,e,s),f=typeof h),f==="string"&&~h.indexOf("random(")&&(h=Qr(h)),_)_(this,e,g,h,i)&&(L=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(g)+"").trim(),h+="",on.lastIndex=0,on.test(c)||(m=Ft(c),p=Ft(h)),p?m!==p&&(c=On(e,g,c,p)+p):m&&(h+=m),this.add(a,"setProperty",c,h,n,s,0,0,g),o.push(g),P.push(g,0,a[g]);else if(f!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(i,n,e,s):l[g],Ct(c)&&~c.indexOf("random(")&&(c=Qr(c)),Ft(c+"")||c==="auto"||(c+=si.units[g]||Ft(ln(e,g))||""),(c+"").charAt(1)==="="&&(c=ln(e,g))):c=ln(e,g),d=parseFloat(c),S=f==="string"&&h.charAt(1)==="="&&h.substr(0,2),S&&(h=h.substr(2)),u=parseFloat(h),g in Gi&&(g==="autoAlpha"&&(d===1&&ln(e,"visibility")==="hidden"&&u&&(d=0),P.push("visibility",0,a.visibility),Dn(this,a,"visibility",d?"inherit":"hidden",u?"inherit":"hidden",!u)),g!=="scale"&&g!=="transform"&&(g=Gi[g],~g.indexOf(",")&&(g=g.split(",")[0]))),x=g in cn,x){if(this.styles.save(g),b||(T=e._gsap,T.renderTransform&&!t.parseTransform||go(e,t.parseTransform),C=t.smoothOrigin!==!1&&T.smooth,b=this._pt=new $t(this._pt,a,vt,0,1,T.renderTransform,T,0,-1),b.dep=1),g==="scale")this._pt=new $t(this._pt,T,"scaleY",T.scaleY,(S?hr(T.scaleY,S+u):u)-T.scaleY||0,nu),this._pt.u=0,o.push("scaleY",g),g+="X";else if(g==="transformOrigin"){P.push(oi,0,a[oi]),h=O_(h),T.svg?ou(e,h,0,C,0,this):(p=parseFloat(h.split(" ")[2])||0,p!==T.zOrigin&&Dn(this,T,"zOrigin",T.zOrigin,p),Dn(this,a,g,ka(c),ka(h)));continue}else if(g==="svgOrigin"){ou(e,h,1,C,0,this);continue}else if(g in op){B_(this,T,g,d,S?hr(d,S+h):h);continue}else if(g==="smoothOrigin"){Dn(this,T,"smooth",T.smooth,h);continue}else if(g==="force3D"){T[g]=h;continue}else if(g==="transform"){k_(this,h,e);continue}}else g in a||(g=ns(g)||g);if(x||(u||u===0)&&(d||d===0)&&!x_.test(h)&&g in a)m=(c+"").substr((d+"").length),u||(u=0),p=Ft(h)||(g in si.units?si.units[g]:m),m!==p&&(d=On(e,g,c,p)),this._pt=new $t(this._pt,x?T:a,g,d,(S?hr(d,S+u):u)-d,!x&&(p==="px"||g==="zIndex")&&t.autoRound!==!1?M_:nu),this._pt.u=p||0,m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=S_);else if(g in a)D_.call(this,e,g,c,S?S+h:h);else if(g in e)this.add(e,g,c||e[g],S?S+h:h,n,s);else if(g!=="parseTransform"){Da(g,h);continue}x||(g in a?P.push(g,0,a[g]):P.push(g,1,c||e[g])),o.push(g)}}L&&eu(this)},render:function(e,t){if(t.tween._time||!lu())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:ln,aliases:Gi,getSetter:function(e,t,i){var n=Gi[t];return n&&n.indexOf(",")<0&&(t=n),t in cn&&t!==oi&&(e._gsap.x||ln(e,"x"))?i&&Xf===i?t==="scale"?A_:T_:(Xf=i||{})&&(t==="scale"?C_:R_):e.style&&!Ia(e.style[t])?E_:~t.indexOf("-")?w_:Ua(e,t)},core:{_removeProperty:gr,_getMatrix:hu}};Ht.utils.checkPrefix=ns;Ht.core.getStyleSaver=ip;(function(r,e,t,i){var n=Zt(r+","+e+","+t,function(s){cn[s]=1});Zt(e,function(s){si.units[s]="deg",op[s]=1}),Gi[n[13]]=r+","+e,Zt(i,function(s){var o=s.split(":");Gi[o[1]]=n[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Zt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){si.units[r]="px"});Ht.registerPlugin(uu);var j=Ht.registerPlugin(uu)||Ht,NT=j.core.Tween;var H_=Object.create,{getPrototypeOf:z_,defineProperty:cp,getOwnPropertyNames:V_}=Object,G_=Object.prototype.hasOwnProperty,W_=(r,e,t)=>{t=r!=null?H_(z_(r)):{};let i=e||!r||!r.__esModule?cp(t,"default",{value:r,enumerable:!0}):t;for(let n of V_(r))G_.call(i,n)||cp(i,n,{get:()=>r[n],enumerable:!0});return i},X_=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports),q_=X_((r,e)=>{(function(t,i){typeof r=="object"&&typeof e!="undefined"?e.exports=i():typeof define=="function"&&define.amd?define(i):(t||self).virtualScroll=i()})(r,function(){var t=0;function i(g){return"__private_"+t+++"_"+g}function n(g,m){if(!Object.prototype.hasOwnProperty.call(g,m))throw new TypeError("attempted to use private field on non-instance");return g}function s(){}s.prototype={on:function(g,m,p){var S=this.e||(this.e={});return(S[g]||(S[g]=[])).push({fn:m,ctx:p}),this},once:function(g,m,p){var S=this;function x(){S.off(g,x),m.apply(p,arguments)}return x._=m,this.on(g,x,p)},emit:function(g){for(var m=[].slice.call(arguments,1),p=((this.e||(this.e={}))[g]||[]).slice(),S=0,x=p.length;S<x;S++)p[S].fn.apply(p[S].ctx,m);return this},off:function(g,m){var p=this.e||(this.e={}),S=p[g],x=[];if(S&&m)for(var b=0,T=S.length;b<T;b++)S[b].fn!==m&&S[b].fn._!==m&&x.push(S[b]);return x.length?p[g]=x:delete p[g],this}};var o=s;o.TinyEmitter=s;var a,l="virtualscroll",c=i("options"),h=i("el"),u=i("emitter"),d=i("event"),f=i("touchStart"),_=i("bodyTouchAction");return function(){function g(p){var S=this;Object.defineProperty(this,c,{writable:!0,value:void 0}),Object.defineProperty(this,h,{writable:!0,value:void 0}),Object.defineProperty(this,u,{writable:!0,value:void 0}),Object.defineProperty(this,d,{writable:!0,value:void 0}),Object.defineProperty(this,f,{writable:!0,value:void 0}),Object.defineProperty(this,_,{writable:!0,value:void 0}),this._onWheel=function(x){var b=n(S,c)[c],T=n(S,d)[d];T.deltaX=x.wheelDeltaX||-1*x.deltaX,T.deltaY=x.wheelDeltaY||-1*x.deltaY,a.isFirefox&&x.deltaMode===1&&(T.deltaX*=b.firefoxMultiplier,T.deltaY*=b.firefoxMultiplier),T.deltaX*=b.mouseMultiplier,T.deltaY*=b.mouseMultiplier,S._notify(x)},this._onMouseWheel=function(x){var b=n(S,d)[d];b.deltaX=x.wheelDeltaX?x.wheelDeltaX:0,b.deltaY=x.wheelDeltaY?x.wheelDeltaY:x.wheelDelta,S._notify(x)},this._onTouchStart=function(x){var b=x.targetTouches?x.targetTouches[0]:x;n(S,f)[f].x=b.pageX,n(S,f)[f].y=b.pageY},this._onTouchMove=function(x){var b=n(S,c)[c];b.preventTouch&&!x.target.classList.contains(b.unpreventTouchClass)&&x.preventDefault();var T=n(S,d)[d],C=x.targetTouches?x.targetTouches[0]:x;T.deltaX=(C.pageX-n(S,f)[f].x)*b.touchMultiplier,T.deltaY=(C.pageY-n(S,f)[f].y)*b.touchMultiplier,n(S,f)[f].x=C.pageX,n(S,f)[f].y=C.pageY,S._notify(x)},this._onKeyDown=function(x){var b=n(S,d)[d];b.deltaX=b.deltaY=0;var T=window.innerHeight-40;switch(x.keyCode){case 37:case 38:b.deltaY=n(S,c)[c].keyStep;break;case 39:case 40:b.deltaY=-n(S,c)[c].keyStep;break;case 32:b.deltaY=T*(x.shiftKey?1:-1);break;default:return}S._notify(x)},n(this,h)[h]=window,p&&p.el&&(n(this,h)[h]=p.el,delete p.el),a||(a={hasWheelEvent:"onwheel"in document,hasMouseWheelEvent:"onmousewheel"in document,hasTouch:"ontouchstart"in document,hasTouchWin:navigator.msMaxTouchPoints&&navigator.msMaxTouchPoints>1,hasPointer:!!window.navigator.msPointerEnabled,hasKeyDown:"onkeydown"in document,isFirefox:navigator.userAgent.indexOf("Firefox")>-1}),n(this,c)[c]=Object.assign({mouseMultiplier:1,touchMultiplier:2,firefoxMultiplier:15,keyStep:120,preventTouch:!1,unpreventTouchClass:"vs-touchmove-allowed",useKeyboard:!0,useTouch:!0},p),n(this,u)[u]=new o,n(this,d)[d]={y:0,x:0,deltaX:0,deltaY:0},n(this,f)[f]={x:null,y:null},n(this,_)[_]=null,n(this,c)[c].passive!==void 0&&(this.listenerOptions={passive:n(this,c)[c].passive})}var m=g.prototype;return m._notify=function(p){var S=n(this,d)[d];S.x+=S.deltaX,S.y+=S.deltaY,n(this,u)[u].emit(l,{x:S.x,y:S.y,deltaX:S.deltaX,deltaY:S.deltaY,originalEvent:p})},m._bind=function(){a.hasWheelEvent&&n(this,h)[h].addEventListener("wheel",this._onWheel,this.listenerOptions),a.hasMouseWheelEvent&&n(this,h)[h].addEventListener("mousewheel",this._onMouseWheel,this.listenerOptions),a.hasTouch&&n(this,c)[c].useTouch&&(n(this,h)[h].addEventListener("touchstart",this._onTouchStart,this.listenerOptions),n(this,h)[h].addEventListener("touchmove",this._onTouchMove,this.listenerOptions)),a.hasPointer&&a.hasTouchWin&&(n(this,_)[_]=document.body.style.msTouchAction,document.body.style.msTouchAction="none",n(this,h)[h].addEventListener("MSPointerDown",this._onTouchStart,!0),n(this,h)[h].addEventListener("MSPointerMove",this._onTouchMove,!0)),a.hasKeyDown&&n(this,c)[c].useKeyboard&&document.addEventListener("keydown",this._onKeyDown)},m._unbind=function(){a.hasWheelEvent&&n(this,h)[h].removeEventListener("wheel",this._onWheel),a.hasMouseWheelEvent&&n(this,h)[h].removeEventListener("mousewheel",this._onMouseWheel),a.hasTouch&&(n(this,h)[h].removeEventListener("touchstart",this._onTouchStart),n(this,h)[h].removeEventListener("touchmove",this._onTouchMove)),a.hasPointer&&a.hasTouchWin&&(document.body.style.msTouchAction=n(this,_)[_],n(this,h)[h].removeEventListener("MSPointerDown",this._onTouchStart,!0),n(this,h)[h].removeEventListener("MSPointerMove",this._onTouchMove,!0)),a.hasKeyDown&&n(this,c)[c].useKeyboard&&document.removeEventListener("keydown",this._onKeyDown)},m.on=function(p,S){n(this,u)[u].on(l,p,S);var x=n(this,u)[u].e;x&&x[l]&&x[l].length===1&&this._bind()},m.off=function(p,S){n(this,u)[u].off(l,p,S);var x=n(this,u)[u].e;(!x[l]||x[l].length<=0)&&this._unbind()},m.destroy=function(){n(this,u)[u].off(),this._unbind()},g}()})}),Y_=W_(q_(),1);function hp(r,e,t,i){let n=1-Math.exp(-t*i);return r+(e-r)*n}function up(r,e){let t=r%e;return Math.abs(t)>e/2&&(t=t>0?t-e:t+e),t}var j_={infinite:!0,snap:!0,dragSensitivity:.005,lerpFactor:.3,scrollSensitivity:1,snapStrength:.1,speedDecay:.85,bounceLimit:1,virtualScroll:{mouseMultiplier:.5,touchMultiplier:2,firefoxMultiplier:30,useKeyboard:!1,passive:!0},setOffset:({itemWidth:r,wrapperWidth:e})=>r,scrollInput:!1},rs,xo,ss,hn,Fn,un,os,za,dp,as,Ha,Va,fp,bo,fu,Ga,pp,vr,vo,_r,_o,yr,yo,Wa,mp,Xa,gp,qa,vp,So,pu,du=class{constructor(e,t={}){wt(this,za);wt(this,as);wt(this,Va);wt(this,bo);wt(this,Ga);wt(this,vr);wt(this,_r);wt(this,yr);wt(this,Wa);wt(this,Xa);wt(this,qa);wt(this,So);lt(this,"speed",0);wt(this,rs,0);wt(this,xo,0);wt(this,ss,0);lt(this,"deltaTime",0);wt(this,hn,!0);wt(this,Fn,!1);wt(this,un,0);wt(this,os,0);lt(this,"config");lt(this,"wrapper");lt(this,"items");lt(this,"viewport");lt(this,"isDragging",!1);lt(this,"dragStart",0);lt(this,"dragStartTarget",0);lt(this,"isVisible",!1);lt(this,"current",0);lt(this,"target",0);lt(this,"maxScroll",0);lt(this,"resizeTimeout");lt(this,"virtualScroll");lt(this,"observer");lt(this,"touchStartY");lt(this,"touchStartX");lt(this,"touchPreviousX");lt(this,"scrollDirection");lt(this,"parallaxValues");lt(this,"webglValue",0);lt(this,"onSlideChange");lt(this,"onResize");lt(this,"onUpdate");this.config={...j_,...t},t.onSlideChange&&(this.onSlideChange=t.onSlideChange),t.onResize&&(this.onResize=t.onResize),t.onUpdate&&(this.onUpdate=t.onUpdate),delete this.config.onSlideChange,delete this.config.onResize,delete this.config.onUpdate,this.wrapper=e,this.items=[...e.children],this.current=0,this.target=0,this.isDragging=!1,this.dragStart=0,this.dragStartTarget=0,this.isVisible=!1,jt(this,un,0),jt(this,os,0),ct(this,as,Ha).call(this),ct(this,za,dp).call(this),ct(this,Va,fp).call(this),this.wrapper.style.cursor="grab",ct(this,as,Ha).call(this),ct(this,Ga,pp).call(this)}update(){var t;if(!this.isVisible||!Yt(this,hn))return;let e=performance.now();if(this.deltaTime=(e-Yt(this,ss))/1e3,jt(this,ss,e),this.config.snap&&!this.isDragging){let i=Math.round(this.target)-this.target;this.target+=i*this.config.snapStrength}if(this.current=hp(this.current,this.target,1/this.config.lerpFactor,this.deltaTime),this.config.infinite){let i=Math.round(-this.current),n=this.items.length,s=(i%n+n)%n;ct(this,So,pu).call(this,s),ct(this,Xa,gp).call(this)}else ct(this,So,pu).call(this,Math.round(Math.abs(this.current))),ct(this,Wa,mp).call(this);ct(this,qa,vp).call(this),(t=this.onUpdate)==null||t.call(this,this)}goToNext(){this.config.infinite?this.target=Math.round(this.target-1):this.target=Math.max(this.maxScroll,Math.round(this.target-1))}goToPrev(){this.config.infinite?this.target=Math.round(this.target+1):this.target=Math.min(0,Math.round(this.target+1))}goToIndex(e){this.target=-e}set snap(e){this.config.snap=e}getProgress(){let e=this.items.length;return Math.abs(this.current)%e/e}destroy(){this.kill(),window.removeEventListener("mousemove",e=>ct(this,_r,_o).call(this,e)),window.removeEventListener("mouseup",()=>ct(this,yr,yo).call(this)),window.removeEventListener("touchmove",e=>{let t=e.touches[0];ct(this,_r,_o).call(this,t)}),window.removeEventListener("touchend",()=>ct(this,yr,yo).call(this)),this.wrapper.removeEventListener("mousedown",e=>ct(this,vr,vo).call(this,e)),this.wrapper.removeEventListener("touchstart",e=>{let t=e.touches[0];ct(this,vr,vo).call(this,t)}),this.resizeTimeout&&clearTimeout(this.resizeTimeout),this.virtualScroll&&this.config.scrollInput&&this.virtualScroll.destroy(),this.observer&&this.observer.disconnect()}get currentSlide(){return Yt(this,un)}kill(){jt(this,hn,!1),this.items.forEach(e=>{e.style.transform=""}),this.current=0,this.target=0,this.speed=0,jt(this,rs,0),this.touchPreviousX=void 0}init(){jt(this,hn,!0),jt(this,ss,performance.now())}set paused(e){jt(this,Fn,e)}get paused(){return Yt(this,Fn)}get progress(){if(this.config.infinite){let e=-this.target,t=this.items.length;return(e%t+t)%t/(t-1)}else{let e=Math.abs(this.current),t=Math.abs(this.maxScroll);return Math.max(0,Math.min(1,e/t))}}resize(){ct(this,as,Ha).call(this);let e=Yt(this,hn),t=this.isVisible;jt(this,hn,!0),this.isVisible=!0,this.update(),jt(this,hn,e),this.isVisible=t}};rs=new WeakMap,xo=new WeakMap,ss=new WeakMap,hn=new WeakMap,Fn=new WeakMap,un=new WeakMap,os=new WeakMap,za=new WeakSet,dp=function(){let e={root:null,rootMargin:"50px",threshold:0};this.observer=new IntersectionObserver(t=>{t.forEach(i=>{this.isVisible=i.isIntersecting})},e),this.observer.observe(this.wrapper)},as=new WeakSet,Ha=function(){this.viewport={itemWidth:this.items[0].getBoundingClientRect().width,wrapperWidth:this.wrapper.clientWidth,totalWidth:this.items.reduce((e,t)=>e+t.clientWidth,0)},jt(this,xo,this.config.setOffset(this.viewport)),this.maxScroll=-(this.viewport.totalWidth-Yt(this,xo))/this.viewport.itemWidth,queueMicrotask(()=>{var e;(e=this.onResize)==null||e.call(this,this)})},Va=new WeakSet,fp=function(){let e=l=>ct(this,vr,vo).call(this,l),t=l=>ct(this,_r,_o).call(this,l),i=()=>ct(this,yr,yo).call(this);this.wrapper.addEventListener("mousedown",e),window.addEventListener("mousemove",t),window.addEventListener("mouseup",i);let n=5,s=l=>{let c=l.touches[0];this.touchStartY=c.clientY,this.touchStartX=c.clientX,this.touchPreviousX=c.clientX,this.scrollDirection=void 0,ct(this,vr,vo).call(this,c)},o=l=>{let c=l.touches[0],h=Math.abs(c.clientY-this.touchStartY),u=Math.abs(c.clientX-this.touchStartX);!this.scrollDirection&&(u>n||h>n)&&(this.scrollDirection=u>h?"horizontal":"vertical"),this.scrollDirection==="horizontal"&&(l.preventDefault(),ct(this,_r,_o).call(this,c),this.touchPreviousX=c.clientX)},a=()=>{this.scrollDirection=void 0,this.touchPreviousX=void 0,ct(this,yr,yo).call(this)};this.wrapper.addEventListener("touchstart",s),window.addEventListener("touchmove",o,{passive:!1}),window.addEventListener("touchend",a),new ResizeObserver(()=>{this.resizeTimeout&&clearTimeout(this.resizeTimeout),this.resizeTimeout=setTimeout(()=>this.resize(),10)}).observe(this.wrapper)},bo=new WeakSet,fu=function(e){if(!this.config.infinite){if(e>this.config.bounceLimit)return this.config.bounceLimit;if(e<this.maxScroll-this.config.bounceLimit)return this.maxScroll-this.config.bounceLimit}return e},Ga=new WeakSet,pp=function(){this.virtualScroll=new Y_.default({...this.config.virtualScroll,el:this.wrapper});let e=5;this.virtualScroll.on(t=>{if(!this.isDragging&&!Yt(this,Fn)){if(t.touchDevice){let s=Math.abs(t.deltaY),o=Math.abs(t.deltaX);if(s<e&&o<e||s>o)return}let i=(this.config.scrollInput?Math.abs(t.deltaX)>Math.abs(t.deltaY)?t.deltaX:t.deltaY:t.deltaX)*this.config.scrollSensitivity*.001,n=this.target+i;this.config.infinite||(n>0?n=0:n<this.maxScroll&&(n=this.maxScroll)),this.target=ct(this,bo,fu).call(this,n),this.speed=-i*10}})},vr=new WeakSet,vo=function(e){Yt(this,Fn)||(this.isDragging=!0,this.dragStart=e.clientX,this.dragStartTarget=this.target,this.wrapper.style.cursor="grabbing")},_r=new WeakSet,_o=function(e){if(!this.isDragging||Yt(this,Fn))return;let t=e.clientX-this.dragStart,i=this.dragStartTarget+t*this.config.dragSensitivity;if(this.target=ct(this,bo,fu).call(this,i),"movementX"in e)this.speed+=e.movementX*.01;else{let n=e.clientX,s=this.touchPreviousX||n,o=n-s;this.speed+=o*.01}},yr=new WeakSet,yo=function(){if(this.isDragging=!1,this.wrapper.style.cursor="grab",!this.config.infinite){if(this.target>0)this.target=0;else if(this.target<this.maxScroll)this.target=this.maxScroll;else if(this.config.snap){let e=Math.round(this.target);this.target=Math.min(0,Math.max(this.maxScroll,e))}}else this.config.snap&&(this.target=Math.round(this.target))},Wa=new WeakSet,mp=function(){this.parallaxValues=this.items.map((e,t)=>{let i=this.current*this.viewport.itemWidth;return e.style.transform=`translateX(${i}px)`,i})},Xa=new WeakSet,gp=function(){this.parallaxValues=this.items.map((e,t)=>{let i=this.current+t,n=(up(i,this.items.length)-t)*this.viewport.itemWidth;return e.style.transform=`translateX(${n}px)`,up(i,this.items.length)})},qa=new WeakSet,vp=function(){jt(this,rs,hp(Yt(this,rs),this.speed,1/this.config.lerpFactor,this.deltaTime)),this.speed*=this.config.speedDecay},So=new WeakSet,pu=function(e){var t;Yt(this,un)!==e&&(jt(this,os,Yt(this,un)),jt(this,un,e),(t=this.onSlideChange)==null||t.call(this,Yt(this,un),Yt(this,os)))};var _p=du;var xp=["w-condition-invisible","-w-condition-invisible"],Z_=["class","style","hidden"],$_="video[data-src-1080], video[data-src-720], video[data-hls], video.slide-video, img, picture",Ci=new Map;function Mo(r){let e=xp.map(n=>`.${n}`).join(", ");if(!e)return;(r instanceof Document,r).querySelectorAll(e).forEach(n=>{n.dataset.hlsPreserve==="true"||n.dataset.mediaPreserve==="true"||(ty(n),n.remove())})}function xr(r){return r.isConnected?!!K_(r):!0}function Eo(r,e){if(!xr(r)){e();return}let t=Ci.get(r);if(t){t.callbacks.add(e);return}let i=new MutationObserver(()=>{if(!r.isConnected){Ya(r);return}xr(r)||Ya(r)});ey(r,i);let n={observer:i,callbacks:new Set([e])};Ci.set(r,n),Q_(r)}function bp(r){if(!Ci.size)return;if(!r){Ci.forEach((t,i)=>{t.observer.disconnect(),Ci.delete(i)});return}let e=(r instanceof Document,r);Ci.forEach((t,i)=>{(!i.isConnected||e.contains(i))&&(t.observer.disconnect(),Ci.delete(i))})}function K_(r){var t,i;let e=r;for(;e;){if(J_(e)||e.hasAttribute("hidden"))return e;let n=(t=e.style)==null?void 0:t.display;if(n&&n.toLowerCase()==="none")return e;let s=(i=e.style)==null?void 0:i.visibility;if(s&&s.toLowerCase()==="hidden")return e;let o=window.getComputedStyle(e);if(o.display==="none"||o.visibility==="hidden")return e;e=e.parentElement}return null}function J_(r){return xp.some(e=>r.classList.contains(e))}function Q_(r){let e=()=>{if(Ci.has(r)){if(!r.isConnected){Ya(r);return}xr(r)||Ya(r)}};typeof window!="undefined"&&typeof window.requestAnimationFrame=="function"?window.requestAnimationFrame(e):window.setTimeout(e,32)}function Ya(r){let e=Ci.get(r);e&&(e.observer.disconnect(),Ci.delete(r),e.callbacks.forEach(t=>{try{t()}catch{}}))}function ey(r,e){let t=r;for(;t;)e.observe(t,{attributes:!0,attributeFilter:Z_}),t=t.parentElement}function ty(r){yp(r),r.querySelectorAll($_).forEach(t=>yp(t))}function yp(r){let e=Ci.get(r);e&&(e.observer.disconnect(),Ci.delete(r))}var Ri=new Map,br=null,wo=400,Tp="video[data-src-1080], video[data-src-720]",iy={root:null,rootMargin:`${wo}px 0px`,threshold:[0,.5,1]};function ny(){return br||(br=new IntersectionObserver(ry,iy)),br}function ry(r){r.forEach(e=>{let t=e.target;if(!(t instanceof HTMLVideoElement))return;let i=Ri.get(t);if(!i)return;i.lastIntersection=e;let n=i.sliderRoot?Ap(i.sliderRoot):sy(e);if(i.isInViewport=n,i.isFilteredOut||i.suppressed){n?i.sliderRoot&&To(i):ja(i);return}n?To(i):ja(i)})}function sy(r){let e=window.innerHeight||document.documentElement.clientHeight||0,{top:t,bottom:i}=r.boundingClientRect;return i>-wo&&t<e+wo}function Ap(r){let e=window.innerHeight||document.documentElement.clientHeight||0,t=r.getBoundingClientRect();return t.bottom>-wo&&t.top<e+wo}function oy(r,e){if(r==null||r==="")return e;let t=r.trim().toLowerCase();return["false","0","no"].includes(t)?!1:["true","1","yes"].includes(t)?!0:e}function ay(r){let{hd:e,sd:t}=r.sources;return e&&t?window.innerWidth<=720?t:e:e||t||null}function To(r){let{video:e}=r,t=ay(r);if(!t||(r.currentSource!==t?(Sp(e,t),r.currentSource=t):e.currentSrc||Sp(e,t),!r.shouldAutoplay))return;e.readyState<HTMLMediaElement.HAVE_ENOUGH_DATA&&e.load();let i=e.play();i&&typeof i.catch=="function"&&i.catch(()=>{})}function ja(r){let{video:e}=r;e.pause(),e.hasAttribute("src")&&e.removeAttribute("src"),e.load(),r.currentSource=null}function Sp(r,e){r.setAttribute("src",e),r.load()}function ly(r){let e=Cp(r.video);if(!e){r.isFilteredOut=!1;return}let t=new MutationObserver(()=>{Mp(r)});t.observe(e,{attributes:!0,attributeFilter:["style","class"]}),r.mutationObserver=t,Mp(r)}function Mp(r){r.filterCheckHandle!==void 0&&cancelAnimationFrame(r.filterCheckHandle),r.filterCheckHandle=requestAnimationFrame(()=>{r.filterCheckHandle=void 0,cy(r)})}function cy(r){let e=Cp(r.video);if(!e){r.isFilteredOut&&(r.isFilteredOut=!1,r.isInViewport&&To(r));return}let t=window.getComputedStyle(e),i=t.display==="none"||t.visibility==="hidden"||Number.parseFloat(t.opacity)===0;i!==r.isFilteredOut&&(r.isFilteredOut=i,i?ja(r):r.isInViewport&&To(r))}function Cp(r){var e;return(e=r.closest(".project-div, .project-item, [data-filter-card], [data-project-card]"))!=null?e:null}function hy(r){var e;(e=r.mutationObserver)==null||e.disconnect(),r.filterCheckHandle!==void 0&&(cancelAnimationFrame(r.filterCheckHandle),r.filterCheckHandle=void 0),r.isFilteredOut=!1,r.suppressed=!1,r.isInViewport=!1,r.sliderRoot=null,ja(r),r.video.removeAttribute("data-mp4-initialized")}function vu(r){return r.dataset.src1080&&r.dataset.src1080.trim().length>0||r.dataset.src720&&r.dataset.src720.trim().length>0||r.hasAttribute("data-src-1080")||r.hasAttribute("data-src-720")}function uy(r){r.muted=!0,r.loop=!0,r.preload="metadata",r.playsInline=!0,r.controls=!1,r.setAttribute("muted",""),r.setAttribute("playsinline",""),r.setAttribute("preload","metadata"),r.setAttribute("loop",""),r.removeAttribute("controls")}function dy(r){var i,n,s,o;let e=(n=(i=r.dataset.src1080)!=null?i:r.getAttribute("data-src-1080"))!=null?n:void 0,t=(o=(s=r.dataset.src720)!=null?s:r.getAttribute("data-src-720"))!=null?o:void 0;return{hd:(e==null?void 0:e.trim())||void 0,sd:(t==null?void 0:t.trim())||void 0}}function Rp(r){return r||document}function fy(r){var t;if(r instanceof HTMLVideoElement)return r.matches("video[data-src-1080], video[data-src-720]")?[r]:[];let e=r instanceof Document?r:(t=r.shadowRoot)!=null?t:r;return Array.from(e.querySelectorAll(Tp))}function py(r,e){return e instanceof Document?!0:e.contains(r)}function mu(r){if(Ri.has(r)||!vu(r))return;uy(r);let e=dy(r),t={video:r,sources:e,currentSource:null,shouldAutoplay:oy(r.dataset.autoplay,!0),isFilteredOut:!1,suppressed:!1,isInViewport:!1,sliderRoot:void 0};Ri.set(r,t),r.dataset.mp4Initialized="true",ly(t),ny().observe(r)}function Ep(r,e){r.sliderRoot=e,r.suppressed=!1,r.isFilteredOut=!1;let t=Ap(e);r.isInViewport=t,t&&To(r)}function Nn(r){let e=Rp(r);Mo(e);let t=fy(e);t.length&&t.forEach(i=>{if(!Ri.has(i)&&vu(i)){if(xr(i)){Eo(i,()=>{mu(i)});return}mu(i)}})}function Za(r){if(!Ri.size)return;let e=Rp(r);Array.from(Ri.keys()).filter(i=>py(i,e)).forEach(i=>{let n=Ri.get(i);if(!n)return;let s=br;s&&s.unobserve(i),hy(n),Ri.delete(i)}),br&&Ri.size===0&&(br.disconnect(),br=null),bp(e)}function my(r){let e=[".embla__slide:not(.is-clone)",".slide",".swiper-slide",".w-slide","[data-slide]","[data-slider-slide]"],t=[];return e.forEach(i=>{r.querySelectorAll(i).forEach(s=>{t.includes(s)||t.push(s)})}),t.length||t.push(r),t}function gy(r,e){return e<=0||r<0?0:r>=e?e-1:r}var gu=class{constructor(e,t={}){this.activeIndex=0;this.destroyed=!1;this.debounceTimer=null;var i;this.root=e,this.debounceMs=Math.max(0,(i=t.debounceMs)!=null?i:120),this.slides=t.slides&&t.slides.length?[...t.slides]:my(e),wp(this.root,this.root),this.slides.forEach((n,s)=>{this.setSlideState(n,s===this.activeIndex)})}onSlideChange(e){if(this.destroyed||!this.slides.length)return;let t=gy(e,this.slides.length);if(t===this.activeIndex)return;let i=()=>{this.destroyed||(this.setSlideState(this.slides[this.activeIndex],!1),this.activeIndex=t,this.setSlideState(this.slides[this.activeIndex],!0))};this.debounceMs>0?(this.debounceTimer!==null&&window.clearTimeout(this.debounceTimer),this.debounceTimer=window.setTimeout(i,this.debounceMs)):i()}destroy(){this.destroyed||(this.destroyed=!0,this.debounceTimer!==null&&(window.clearTimeout(this.debounceTimer),this.debounceTimer=null),this.slides.forEach(e=>this.setSlideState(e,!1)),Za(this.root))}setSlideState(e,t){e&&wp(e,this.root)}};function Pp(r,e={}){return new gu(r,e)}function wp(r,e){Mo(r),Nn(r),r.querySelectorAll(Tp).forEach(i=>{let n=Ri.get(i);if(n){Ep(n,e);return}vu(i)&&Eo(i,()=>{Ri.has(i)||mu(i);let s=Ri.get(i);s&&Ep(s,e)})})}var Ao={infinite:!0,snap:!0,dragSensitivity:.0075,lerpFactor:.3,scrollSensitivity:1.35,snapStrength:.08,speedDecay:.85,bounceLimit:1,scrollInput:!0},Lp={mouseMultiplier:.85,touchMultiplier:3.2,firefoxMultiplier:30,useKeyboard:!1,passive:!0},ls={enabled:!0,speed:.12,direction:"forward",pauseOnHover:!1,pauseOnInteraction:!0,resumeDelay:1800,initialDelay:1200},vy=5.6,_y=.0115,yu=new Map,_u={speedThreshold:.35,settleDelay:160,dispatchThrottle:90},$a=".slide, [data-slider-slide], .slider-item";function Ip(r){let e=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:void 0,t=e==null?void 0:e.crypto;return t&&typeof t.randomUUID=="function"?`${r}-${t.randomUUID()}`:`${r}-${Math.random().toString(36).slice(2,10)}-${Date.now()}`}function Dp(r,e,t){r.setAttribute("data-smooothy-instance",e),r.dataset.smooothyManaged="true",yu.set(e,t)}var cs=class{constructor(e){this.options=e;this.wrapperEl=null;this.hostEl=null;this.slider=null;this.entranceTimeline=null;this.sliderVideoController=null;this.tickerFn=null;this.isInitialized=!1;this.teardownCallbacks=[];this.clones=[];this.autoScrollState=null;this.touchHoverConfig=null;this.touchHoverEnabled=!1;this.touchHoverState={pointerActive:!1,pointerType:"touch",settleHandle:null};this.hoverSyncState={pointerInside:!1,lastPointer:null,lastMovementTime:0,lastDispatchTime:0,activeSlide:null};this.coarsePointerEnvironment=!1;this.keyboardOptions=null;this.keyboardHandler=null;this.keyboardListenerTarget=null;this.keyboardListenerIsWindow=!1;this.bumpSpacingOptions=null;this.bumpSpacingState={compression:0};this.parallaxOptions=null;this.parallaxTargets=[];this.speedState={lerped:0}}get initialized(){return this.isInitialized}registerPointerObservers(){var S;if(!this.wrapperEl||typeof window=="undefined")return;let e=this.wrapperEl,t="PointerEvent"in window,i=!!(this.touchHoverEnabled&&((S=this.touchHoverConfig)!=null&&S.pointerTypes.has("touch"))),n={capture:!0},s={capture:!0,passive:!0},o=null,a=null,l=null,c=x=>{this.shouldHandlePointer(x.pointerType)&&(this.hoverSyncState.pointerInside=!0,this.storePointer(x),this.syncActiveSlideFromPointer(x),this.setAutoScrollHoverState(!0))},h=x=>{this.shouldHandlePointer(x.pointerType)&&(this.hoverSyncState.pointerInside=!0,this.storePointer(x),this.syncActiveSlideFromPointer(x),this.setAutoScrollHoverState(!0))},u=x=>{if(!this.shouldHandlePointer(x.pointerType))return;if(i&&this.isTouchHoverPointer(x.pointerType)){this.endTouchHover(x);return}this.hoverSyncState.pointerInside=!1;let b=this.snapshotPointer(x);this.hoverSyncState.lastPointer=null,this.clearSyntheticHover(b),this.setAutoScrollHoverState(!1)},d=x=>{if(!this.shouldHandlePointer(x.pointerType))return;if(i&&this.isTouchHoverPointer(x.pointerType)){this.endTouchHover(x,{cancelled:!0});return}this.hoverSyncState.pointerInside=!1;let b=this.snapshotPointer(x);this.hoverSyncState.lastPointer=null,this.clearSyntheticHover(b),this.setAutoScrollHoverState(!1)},f=x=>{!i||!this.isTouchHoverPointer(x.pointerType)||this.beginTouchHover(x)},_=x=>{!i||!this.isTouchHoverPointer(x.pointerType)||this.endTouchHover(x)},g=x=>{this.hoverSyncState.pointerInside=!0,this.storePointer(x),this.syncActiveSlideFromPointer(x),this.setAutoScrollHoverState(!0)},m=x=>{this.hoverSyncState.pointerInside=!0,this.storePointer(x),this.syncActiveSlideFromPointer(x),this.setAutoScrollHoverState(!0)},p=x=>{this.hoverSyncState.pointerInside=!1;let b=this.snapshotPointer(x);this.hoverSyncState.lastPointer=null,this.clearSyntheticHover(b),this.setAutoScrollHoverState(!1)};t?(e.addEventListener("pointerenter",c),e.addEventListener("pointermove",h),e.addEventListener("pointerleave",u),e.addEventListener("pointercancel",d),i&&(e.addEventListener("pointerdown",f,n),e.addEventListener("pointerup",_,n))):(e.addEventListener("mouseenter",g),e.addEventListener("mousemove",m),e.addEventListener("mouseleave",p),i&&(o=x=>{this.beginTouchHover(x)},a=x=>{this.endTouchHover(x)},l=x=>{this.endTouchHover(x,{cancelled:!0})},e.addEventListener("touchstart",o,s),e.addEventListener("touchend",a),e.addEventListener("touchcancel",l))),this.teardownCallbacks.push(()=>{t?(e.removeEventListener("pointerenter",c),e.removeEventListener("pointermove",h),e.removeEventListener("pointerleave",u),e.removeEventListener("pointercancel",d),i&&(e.removeEventListener("pointerdown",f,n),e.removeEventListener("pointerup",_,n))):(e.removeEventListener("mouseenter",g),e.removeEventListener("mousemove",m),e.removeEventListener("mouseleave",p),i&&o&&a&&l&&(e.removeEventListener("touchstart",o,s),e.removeEventListener("touchend",a),e.removeEventListener("touchcancel",l)))})}beginTouchHover(e){var n;if(!this.touchHoverEnabled||!((n=this.touchHoverConfig)!=null&&n.pointerTypes.has("touch")))return;this.touchHoverState.pointerActive=!0,this.touchHoverState.pointerType="touch",this.hoverSyncState.pointerInside=!0,this.storePointer(e);let t=this.snapshotPointer(e,"touch"),i=this.findSlideFromEvent(e,t);i&&this.applySyntheticHover(i,t),this.cancelTouchHoverSettle(),this.setAutoScrollHoverState(!0)}endTouchHover(e,t={}){var n;if(!this.touchHoverEnabled||!((n=this.touchHoverConfig)!=null&&n.pointerTypes.has("touch")))return;let{cancelled:i=!1}=t;this.touchHoverState.pointerActive=!1,this.hoverSyncState.pointerInside=!1,e&&this.storePointer(e),this.hoverSyncState.lastPointer=null,this.cancelTouchHoverSettle(),this.touchHoverConfig.revertToFeaturedOnRelease!==!1?this.scheduleFeaturedHoverSync(this.touchHoverState.pointerType):i&&this.clearSyntheticHover(),this.setAutoScrollHoverState(!1)}scheduleFeaturedHoverSync(e,t=10){var n,s,o;if(!this.touchHoverEnabled||!((n=this.touchHoverConfig)!=null&&n.pointerTypes.has("touch"))||this.touchHoverConfig.revertToFeaturedOnRelease===!1)return;if(typeof window=="undefined"){this.syncHoverToSlide((o=(s=this.slider)==null?void 0:s.currentSlide)!=null?o:0,e);return}this.cancelTouchHoverSettle();let i=a=>{var u,d;let{slider:l}=this;if(!l){this.touchHoverState.settleHandle=null;return}let c=Math.abs(l.target-Math.round(l.target)),h=Math.abs(l.speed);if(!l.isDragging&&c<=.02&&h<=.02){this.syncHoverToSlide((u=l.currentSlide)!=null?u:0,e),this.touchHoverState.settleHandle=null;return}if(a<=0){this.syncHoverToSlide((d=l.currentSlide)!=null?d:0,e),this.touchHoverState.settleHandle=null;return}this.touchHoverState.settleHandle=window.requestAnimationFrame(()=>i(a-1))};this.touchHoverState.settleHandle=window.requestAnimationFrame(()=>i(t))}cancelTouchHoverSettle(){this.touchHoverState.settleHandle!==null&&typeof window!="undefined"&&(cancelAnimationFrame(this.touchHoverState.settleHandle),this.touchHoverState.settleHandle=null)}syncHoverToSlide(e,t){var s;if(!this.touchHoverEnabled||!((s=this.touchHoverConfig)!=null&&s.pointerTypes.has("touch")))return;let i=this.getSliderItemForIndex(e);if(!i)return;let n=this.createPointerSnapshotForElement(i,t);this.applySyntheticHover(i,n),this.hoverSyncState.lastPointer=n}getSliderItemForIndex(e){var s;if(!this.slider||!Array.isArray(this.slider.items)||this.slider.items.length===0)return null;let{items:t}=this.slider,i=t.length;if(!Number.isFinite(e)||i===0)return null;let n=(Math.round(e)%i+i)%i;return(s=t[n])!=null?s:null}createPointerSnapshotForElement(e,t){let i=e.getBoundingClientRect();return{clientX:i.left+i.width/2,clientY:i.top+i.height/2,pointerType:t}}findSlideFromEvent(e,t){var s;let{target:i}=e;if(i instanceof HTMLElement){let o=i.closest($a);if(o)return o}if(typeof document=="undefined")return null;let n=document.elementFromPoint(t.clientX,t.clientY);return(s=n==null?void 0:n.closest($a))!=null?s:null}normalizePointerType(e){return e==="mouse"||e==="pen"||e==="touch"?e:"unknown"}isTouchHoverPointer(e){var i;return e?this.normalizePointerType(e)==="touch"&&!!(this.touchHoverEnabled&&((i=this.touchHoverConfig)!=null&&i.pointerTypes.has("touch"))):!1}setAutoScrollHoverState(e){let t=this.autoScrollState;if(t){if(!t.config.pauseOnHover){t.hovering=e;return}if(t.hovering!==e)if(t.hovering=e,e&&t.config.pauseOnHover){let i=this.getNow();t.pausedUntil=Math.max(t.pausedUntil,i+t.config.resumeDelay),t.interacting=!0}else!e&&t.config.pauseOnHover&&(t.pausedUntil=Math.max(t.pausedUntil,this.getNow()+t.config.resumeDelay))}}markAutoScrollInteraction(){let e=this.autoScrollState;if(!e||!e.config.pauseOnInteraction)return;let t=this.getNow();e.interacting=!0,e.pausedUntil=Math.max(e.pausedUntil,t+e.config.resumeDelay),this.setAutoScrollActive(!1)}setAutoScrollActive(e){let{slider:t}=this,i=this.autoScrollState;if(!(!t||!i))if(e){if(i.snapDisabled)return;i.snapDisabled=!0,t.snap=!1}else{if(!i.snapDisabled)return;i.snapDisabled=!1,t.snap=i.originalSnap,t.target=t.current,t.speed=0}}registerAutoScrollInteractionHandlers(){if(!this.wrapperEl||typeof window=="undefined")return;let e=this.autoScrollState;if(!e||!e.config.pauseOnInteraction)return;let t=this.wrapperEl,i="PointerEvent"in window,n={capture:!0},s={capture:!0,passive:!0},o={capture:!0},a=typeof document!="undefined",l=()=>{this.markAutoScrollInteraction()},c=()=>{this.markAutoScrollInteraction()},h=()=>{this.markAutoScrollInteraction()},u=d=>{if(!this.wrapperEl)return;let{target:f}=d;f instanceof Node&&this.wrapperEl.contains(f)&&this.markAutoScrollInteraction()};i?(t.addEventListener("pointerdown",l,n),t.addEventListener("pointerup",l,n),t.addEventListener("pointercancel",l,n)):(t.addEventListener("mousedown",l,n),t.addEventListener("mouseup",l,n),t.addEventListener("mouseleave",l,n),t.addEventListener("touchstart",c,s),t.addEventListener("touchend",c,s),t.addEventListener("touchcancel",c,s)),t.addEventListener("wheel",h,o),a&&document.addEventListener("keydown",u,!0),this.teardownCallbacks.push(()=>{i?(t.removeEventListener("pointerdown",l,n),t.removeEventListener("pointerup",l,n),t.removeEventListener("pointercancel",l,n)):(t.removeEventListener("mousedown",l,n),t.removeEventListener("mouseup",l,n),t.removeEventListener("mouseleave",l,n),t.removeEventListener("touchstart",c,s),t.removeEventListener("touchend",c,s),t.removeEventListener("touchcancel",c,s)),t.removeEventListener("wheel",h,o),a&&document.removeEventListener("keydown",u,!0)})}normalizeAutoScrollOptions(e){var o,a,l,c;if(!e||!((o=e.enabled)!=null?o:!0))return null;let i=(h,u,d=0)=>{let f=typeof h=="number"&&Number.isFinite(h)?h:u;return Math.max(d,f)},n=i(e.speed,ls.speed);return{enabled:!0,speed:this.coarsePointerEnvironment?n*1.25:n,direction:(a=e.direction)!=null?a:ls.direction,pauseOnHover:(l=e.pauseOnHover)!=null?l:ls.pauseOnHover,pauseOnInteraction:(c=e.pauseOnInteraction)!=null?c:ls.pauseOnInteraction,resumeDelay:i(e.resumeDelay,ls.resumeDelay),initialDelay:i(e.initialDelay,ls.initialDelay)}}normalizeTouchHoverOptions(e){var s,o,a,l,c;if(!e||!((s=e.enabled)!=null?s:!0))return null;let i=new Set;return((o=e.pointerTypes)!=null?o:["touch"]).forEach(h=>{(h==="touch"||h==="mouse"||h==="pen")&&i.add(h)}),i.size||i.add("touch"),{pointerTypes:i,coarseOnly:(a=e.coarseOnly)!=null?a:!0,applyInitialFeatured:(l=e.applyInitialFeatured)!=null?l:!0,revertToFeaturedOnRelease:(c=e.revertToFeaturedOnRelease)!=null?c:!0}}normalizeKeyboardOptions(e){var i,n,s,o;return((i=e==null?void 0:e.enabled)!=null?i:!0)?{target:(n=e==null?void 0:e.target)!=null?n:"window",ignoreInputs:(s=e==null?void 0:e.ignoreInputs)!=null?s:!0,allowWhileHidden:(o=e==null?void 0:e.allowWhileHidden)!=null?o:!1}:null}normalizeBumpSpacingOptions(e){var a;if(!((a=e==null?void 0:e.enabled)!=null?a:!0))return null;let i=(l,c,h)=>Math.min(Math.max(l,c),h),n=typeof(e==null?void 0:e.maxCompression)=="number"&&Number.isFinite(e.maxCompression)?e.maxCompression:.22,s=typeof(e==null?void 0:e.speedMultiplier)=="number"&&Number.isFinite(e.speedMultiplier)?e.speedMultiplier:1.15,o=typeof(e==null?void 0:e.smoothing)=="number"&&Number.isFinite(e.smoothing)?e.smoothing:.25;return{maxCompression:i(n,0,.6),speedMultiplier:Math.max(0,s),smoothing:i(o,.05,.9)}}normalizeParallaxOptions(e){var s,o;if(!((s=e==null?void 0:e.enabled)!=null?s:!0))return null;let i=typeof(e==null?void 0:e.maxOffset)=="number"&&Number.isFinite(e.maxOffset)?e.maxOffset:48,n=typeof(e==null?void 0:e.speedInfluence)=="number"&&Number.isFinite(e.speedInfluence)?e.speedInfluence:120;return{selector:(o=e==null?void 0:e.selector)!=null?o:"[data-slider-parallax]",axis:(e==null?void 0:e.axis)==="y"?"y":"x",maxOffset:i,speedInfluence:n}}detectCoarsePointerEnvironment(){if(typeof window=="undefined")return!1;let e=typeof navigator!="undefined"?navigator:null;if(typeof(e==null?void 0:e.maxTouchPoints)=="number"&&e.maxTouchPoints>0||typeof(e==null?void 0:e.msMaxTouchPoints)=="number"&&e.msMaxTouchPoints>0)return!0;if(typeof window.matchMedia=="function"){try{if(window.matchMedia("(pointer: coarse)").matches)return!0}catch{}try{if(window.matchMedia("(hover: none)").matches)return!0}catch{}}return"ontouchstart"in window}isFormField(e){return e?!!(e instanceof HTMLInputElement||e instanceof HTMLTextAreaElement||e instanceof HTMLSelectElement||e instanceof HTMLElement&&(e.isContentEditable||e.getAttribute("role")==="textbox")):!1}isInsideSlider(e){return!e||!(e instanceof Node)?!1:!!(this.hostEl&&this.hostEl.contains(e)||this.wrapperEl&&this.wrapperEl.contains(e))}initializeTouchHover(e){var t;this.cancelTouchHoverSettle(),this.touchHoverState.pointerActive=!1,this.touchHoverState.pointerType="touch",this.touchHoverConfig=this.normalizeTouchHoverOptions(this.options.touchHover),this.touchHoverEnabled=!1,this.touchHoverConfig&&this.touchHoverConfig.pointerTypes.has("touch")&&(this.touchHoverConfig.coarseOnly&&!this.detectCoarsePointerEnvironment()||(this.touchHoverEnabled=!0,this.touchHoverState.pointerType="touch",this.touchHoverConfig.applyInitialFeatured&&this.syncHoverToSlide((t=e.currentSlide)!=null?t:0,this.touchHoverState.pointerType)))}handleTouchHoverSlideChange(e){var t;this.touchHoverEnabled&&((t=this.touchHoverConfig)==null?void 0:t.revertToFeaturedOnRelease)!==!1&&(this.touchHoverState.pointerActive||this.syncHoverToSlide(e,this.touchHoverState.pointerType))}registerKeyboardControls(e){var s;if(typeof window=="undefined")return;this.unregisterKeyboardControls();let t=this.keyboardOptions;if(!t)return;let i=t.target==="host"?(s=this.hostEl)!=null?s:this.wrapperEl:null,n=o=>{var d,f,_;if(!this.slider||this.slider!==e||o.defaultPrevented||o.metaKey||o.ctrlKey||o.altKey)return;let a=(d=typeof document!="undefined"?document.activeElement:null)!=null?d:null,l=(f=o.target)!=null?f:a;if(t.ignoreInputs&&this.isFormField(l))return;let c=this.isInsideSlider(l);if(!c&&!this.hoverSyncState.pointerInside&&!t.allowWhileHidden&&!e.isVisible)return;let h=!1,{key:u}=o;if(/^[0-9]$/.test(u)){let g=Number.parseInt(u,10);Number.isNaN(g)||(e.config.infinite||g<e.items.length)&&(e.goToIndex(g),h=!0)}else switch(u){case"ArrowLeft":case"ArrowUp":e.goToNext(),h=!0;break;case"ArrowRight":case"ArrowDown":e.goToPrev(),h=!0;break;case" ":case"Spacebar":e.goToNext(),h=!0;break;case"Home":e.goToIndex(0),h=!0;break;case"End":{let g=e.items.length?e.items.length-1:0;e.goToIndex(g),h=!0;break}}h&&(o.preventDefault(),this.markAutoScrollInteraction(),!c&&!this.hoverSyncState.pointerInside&&this.syncHoverToSlide((_=e.currentSlide)!=null?_:0,this.touchHoverState.pointerType))};i?(i.addEventListener("keydown",n),this.keyboardListenerTarget=i,this.keyboardListenerIsWindow=!1):(window.addEventListener("keydown",n),this.keyboardListenerTarget=window,this.keyboardListenerIsWindow=!0),this.keyboardHandler=n,this.teardownCallbacks.push(()=>{this.unregisterKeyboardControls()})}unregisterKeyboardControls(){this.keyboardListenerTarget&&this.keyboardHandler&&(this.keyboardListenerIsWindow&&typeof window!="undefined"?this.keyboardListenerTarget.removeEventListener("keydown",this.keyboardHandler):this.keyboardListenerTarget.removeEventListener("keydown",this.keyboardHandler)),this.keyboardListenerTarget=null,this.keyboardHandler=null,this.keyboardListenerIsWindow=!1}registerParallaxTargets(e){this.parallaxTargets=[];let t=this.parallaxOptions;t&&e.items.forEach((i,n)=>{i.querySelectorAll(t.selector).forEach(a=>{var m,p,S;let l=(m=a.dataset.sliderParallaxDepth)!=null?m:a.dataset.parallaxDepth,c=l?Number.parseFloat(l):1,h=(p=a.dataset.sliderParallaxSpeed)!=null?p:a.dataset.parallaxSpeed,u=h?Number.parseFloat(h):c,d=a.dataset.sliderParallaxAxis,f=d==="y"||d==="x"?d:t.axis,_=(S=a.style.transform)!=null?S:"",g=a.style.willChange||null;(!g||!g.includes("transform"))&&(a.style.willChange=g?`${g}, transform`:"transform"),this.parallaxTargets.push({element:a,depth:Number.isFinite(c)?c:1,speedScale:Number.isFinite(u)?u:Number.isFinite(c)?c:1,axis:f,slideIndex:n,baseTransform:_,originalWillChange:g})})})}resetParallaxTargets(){this.parallaxTargets.length&&(this.parallaxTargets.forEach(e=>{e.element.style.transform=e.baseTransform,e.originalWillChange!==null?e.element.style.willChange=e.originalWillChange:e.element.style.removeProperty("will-change")}),this.parallaxTargets=[])}applySpeedEffects(e){let t=e.deltaTime||0,i=Math.min(Math.max(t*12,.06),1);this.speedState.lerped+=(e.speed-this.speedState.lerped)*i;let n=Math.abs(this.speedState.lerped),s=h=>{h&&(h.style.setProperty("--slider-speed",this.speedState.lerped.toFixed(4)),h.style.setProperty("--slider-speed-abs",n.toFixed(4)),h.style.setProperty("--slider-progress",e.progress.toFixed(4)))};if(s(this.wrapperEl),this.hostEl&&this.hostEl!==this.wrapperEl&&s(this.hostEl),this.applyBumpSpacingEffect(t,n),!this.parallaxTargets.length||!this.parallaxOptions)return;let{parallaxValues:o}=e;if(!o||!o.length)return;let{maxOffset:a,speedInfluence:l}=this.parallaxOptions,c=this.clamp(this.speedState.lerped*l,-a*.75,a*.75);this.parallaxTargets.forEach(h=>{let u=o[h.slideIndex];if(typeof u!="number")return;let d=this.clamp(u*a*h.depth,-a,a),f=this.clamp(c*h.speedScale,-a*h.speedScale,a*h.speedScale),_=a*Math.max(h.depth,h.speedScale)*1.75,g=this.clamp(d+f,-_,_),m=h.axis==="x"?g:0,p=h.axis==="y"?g:0;h.element.style.transform=`${h.baseTransform} translate3d(${m.toFixed(3)}px, ${p.toFixed(3)}px, 0)`})}applyBumpSpacingEffect(e,t){let i=this.bumpSpacingOptions;if(!this.slider||!i){this.bumpSpacingState.compression=0,this.updateBumpSpacingMetrics(0);return}let n=this.clamp(t*i.speedMultiplier,0,i.maxCompression),s=Math.max(e*60,0),o=this.clamp(1-Math.pow(1-i.smoothing,Math.max(s,1)),0,1);this.bumpSpacingState.compression+=(n-this.bumpSpacingState.compression)*o;let{compression:a}=this.bumpSpacingState,l=a>1e-4?a:0;this.updateBumpSpacingMetrics(l)}updateBumpSpacingMetrics(e){let t=e.toFixed(4),i=(1+e).toFixed(4),n=s=>{s&&(s.style.setProperty("--slider-bump-compression",t),s.style.setProperty("--slider-bump-scale",i))};n(this.wrapperEl),this.hostEl&&this.hostEl!==this.wrapperEl&&n(this.hostEl)}clamp(e,t,i){return Math.min(Math.max(e,t),i)}configureAutoScroll(){var s,o,a,l;if(typeof window=="undefined"||!this.slider){this.setAutoScrollActive(!1),this.autoScrollState=null;return}let e=this.normalizeAutoScrollOptions(this.options.autoScroll);if(!e){this.setAutoScrollActive(!1),this.autoScrollState=null;return}let t=this.getNow(),{slider:i}=this,n=(l=(a=(s=i==null?void 0:i.config)==null?void 0:s.snap)!=null?a:(o=this.options.config)==null?void 0:o.snap)!=null?l:Ao.snap;this.autoScrollState={config:e,lastTickTime:t,pausedUntil:t+e.initialDelay,hovering:!1,interacting:!1,directionMultiplier:e.direction==="backward"?1:-1,originalSnap:n,snapDisabled:!1},this.registerAutoScrollInteractionHandlers()}updateAutoScroll(e){let{slider:t}=this,i=this.autoScrollState;if(!t||!i||!i.config.enabled)return;if(i.lastTickTime===null){i.lastTickTime=e;return}let n=Math.max(0,(e-i.lastTickTime)/1e3);if(i.lastTickTime=e,!t.isVisible||i.config.speed<=0){this.setAutoScrollActive(!1);return}if(i.config.pauseOnHover&&i.hovering&&(i.pausedUntil=Math.max(i.pausedUntil,e+i.config.resumeDelay),i.interacting=!0),i.config.pauseOnInteraction){if(t.isDragging)i.interacting=!0,i.pausedUntil=Math.max(i.pausedUntil,e+i.config.resumeDelay);else if(i.interacting&&e>=i.pausedUntil){let a=Math.abs(t.target-Math.round(t.target)),l=Math.abs(t.speed);a<=.05&&l<=.02?i.interacting=!1:i.pausedUntil=e+120}}if(e<i.pausedUntil||i.interacting){this.setAutoScrollActive(!1);return}this.setAutoScrollActive(!0);let o=i.config.speed*n*i.directionMultiplier;if(!t.config.infinite){let a=t.target+o;a>0?(o=Math.min(o,-t.target),i.directionMultiplier=-1):a<t.maxScroll&&(o=Math.max(o,t.maxScroll-t.target),i.directionMultiplier=1)}t.target+=o}getNow(){return typeof performance!="undefined"&&typeof performance.now=="function"?performance.now():Date.now()}updateHoverSync(){if(!this.slider||typeof window=="undefined"||typeof document=="undefined"||!this.hoverSyncState.pointerInside)return;let e=this.hoverSyncState.lastPointer;if(!e||!this.shouldHandlePointer(e.pointerType))return;let{slider:t}=this,i=performance.now();if(t.isDragging||Math.abs(t.speed)>_u.speedThreshold){this.hoverSyncState.lastMovementTime=i;return}if(i-this.hoverSyncState.lastMovementTime<_u.settleDelay||i-this.hoverSyncState.lastDispatchTime<_u.dispatchThrottle)return;let n=document.elementFromPoint(e.clientX,e.clientY);if(!n)return;let s=n.closest($a);if(!s){this.clearSyntheticHover(e),this.hoverSyncState.lastDispatchTime=i;return}s!==this.hoverSyncState.activeSlide&&(this.applySyntheticHover(s,e),this.hoverSyncState.lastDispatchTime=i)}syncActiveSlideFromPointer(e){if(typeof document=="undefined")return;let t=this.snapshotPointer(e);if(!this.shouldHandlePointer(t.pointerType))return;let i=document.elementFromPoint(t.clientX,t.clientY);if(!i){this.hoverSyncState.activeSlide=null;return}let n=i.closest($a);this.hoverSyncState.activeSlide=n}applySyntheticHover(e,t){let i=this.hoverSyncState.activeSlide;i&&i!==e&&(this.dispatchSyntheticMouseEvent(i,"mouseleave",t,!1),this.dispatchSyntheticMouseEvent(i,"mouseout",t,!0)),e&&e!==i&&(this.dispatchSyntheticMouseEvent(e,"mouseenter",t,!1),this.dispatchSyntheticMouseEvent(e,"mouseover",t,!0)),this.hoverSyncState.activeSlide=e!=null?e:null}clearSyntheticHover(e){var n;let t=this.hoverSyncState.activeSlide;if(!t)return;let i=(n=e!=null?e:this.hoverSyncState.lastPointer)!=null?n:{...(()=>{let s=t.getBoundingClientRect();return{clientX:s.left+s.width/2,clientY:s.top+s.height/2}})(),pointerType:"mouse"};this.dispatchSyntheticMouseEvent(t,"mouseleave",i,!1),this.dispatchSyntheticMouseEvent(t,"mouseout",i,!0),this.hoverSyncState.activeSlide=null}dispatchSyntheticMouseEvent(e,t,i,n){let s=new MouseEvent(t,{bubbles:n,cancelable:!1,clientX:i.clientX,clientY:i.clientY,screenX:i.clientX,screenY:i.clientY,buttons:0});e.dispatchEvent(s)}storePointer(e){let t=this.getEventPoint(e),i="mouse";if("pointerType"in e&&e.pointerType){let s=this.normalizePointerType(e.pointerType);i=s==="unknown"?"mouse":s}else("touches"in e||"changedTouches"in e)&&(i="touch");let n=performance.now();this.hoverSyncState.lastPointer={clientX:t.clientX,clientY:t.clientY,pointerType:i},this.hoverSyncState.lastMovementTime=n}snapshotPointer(e,t="mouse"){let i=this.getEventPoint(e),n=t;if("pointerType"in e&&e.pointerType){let s=this.normalizePointerType(e.pointerType);n=s==="unknown"?t:s}else("touches"in e||"changedTouches"in e)&&(n="touch");return{clientX:i.clientX,clientY:i.clientY,pointerType:n}}shouldHandlePointer(e){if(!e)return!0;let t=this.normalizePointerType(e);return t==="mouse"||t==="pen"?!0:t==="touch"?this.isTouchHoverPointer(e):!1}stripIds(e){e.hasAttribute("id")&&e.removeAttribute("id"),e.querySelectorAll("[id]").forEach(t=>{t.removeAttribute("id")})}resolveCloneRootForDuplicate(e){if(!this.wrapperEl||e.parentElement===this.wrapperEl)return e;let t=e;for(;t&&t.parentElement&&t.parentElement!==this.wrapperEl;)t=t.parentElement;return t&&t.parentElement===this.wrapperEl?t:e}markCloneForAccessibility(e){e.setAttribute("aria-hidden","true"),e.getAttribute("role")==="listitem"&&e.setAttribute("role","presentation"),(e instanceof HTMLAnchorElement||e instanceof HTMLButtonElement||e instanceof HTMLInputElement||e instanceof HTMLSelectElement||e instanceof HTMLTextAreaElement)&&e.setAttribute("tabindex","-1"),e.querySelectorAll("a, button, input, select, textarea, [tabindex]").forEach(t=>{t.setAttribute("tabindex","-1"),t.setAttribute("aria-hidden","true")})}duplicateSlides(e){if(!this.wrapperEl||!e.length)return;let t=[];e.forEach((i,n)=>{var a;let o=this.resolveCloneRootForDuplicate(i).cloneNode(!0);this.stripIds(o),o.dataset.smooothyClone="true",o.dataset.smooothySourceIndex=String(n),this.markCloneForAccessibility(o),(a=this.wrapperEl)==null||a.appendChild(o),t.push(o)}),t.length&&this.clones.push(...t)}cleanupClones(){this.clones.length&&(this.clones.forEach(e=>{e.parentElement&&e.parentElement.removeChild(e)}),this.clones=[])}async initialize(){var s,o,a,l,c;if(this.isInitialized)return;let e=document.querySelector(this.options.selector);if(!e)return;this.wrapperEl=e,this.wrapperEl.style.userSelect="none",this.wrapperEl.style.webkitUserSelect="none",this.wrapperEl.style.touchAction="pan-y",this.coarsePointerEnvironment=this.detectCoarsePointerEnvironment(),this.keyboardOptions=this.normalizeKeyboardOptions(this.options.keyboard),this.bumpSpacingOptions=this.normalizeBumpSpacingOptions((s=this.options.bumpSpacing)!=null?s:{enabled:!0}),this.parallaxOptions=this.normalizeParallaxOptions(this.options.parallax),this.parallaxTargets=[],this.speedState.lerped=0,this.bumpSpacingState.compression=0,this.hostEl=(o=e.closest("[data-slider-root], .slider, .case-slider, .slider_wrapper, .panorama-slider"))!=null?o:e,this.prepareEntranceState();let t=this.collectSlides();this.duplicateSlides(t),typeof window!="undefined"&&Nn((a=this.hostEl)!=null?a:e);let i=this.collectSlides(),n=this.createConfig();try{let h=new _p(e,n);this.slider=h,h.onSlideChange=(d,f)=>{var _,g,m;d!==f&&((_=this.sliderVideoController)==null||_.onSlideChange(d)),this.handleTouchHoverSlideChange(d),(m=(g=this.options).onSlideChange)==null||m.call(g,d,f)},h.init(),this.initializeTouchHover(h),this.registerKeyboardControls(h),this.registerParallaxTargets(h),this.wrapperEl&&this.attachWheelGuards(this.wrapperEl),this.applyInteractionGuards(i),this.registerPointerObservers(),this.configureAutoScroll();let u=()=>{if(!this.slider)return;let d=this.getNow();this.updateAutoScroll(d),this.slider.update(),this.updateHoverSync()};j.ticker.add(u),this.tickerFn=u,this.sliderVideoController=Pp((l=this.hostEl)!=null?l:e,{debounceMs:140}),this.sliderVideoController.onSlideChange((c=h.currentSlide)!=null?c:0)}catch(h){throw this.cleanupClones(),this.slider=null,h}this.isInitialized=!0,typeof window!="undefined"&&this.shouldExposeInstance()&&this.slider&&(window.smooothySliderInstance=this.slider)}async fadeIn(e=.8,t=0){await this.playEntranceAnimation(e,t)}async fadeOut(e=.5){let t=this.getWrappers();await new Promise(i=>{j.to(t.length?t:this.hostEl,{opacity:0,duration:e,ease:"power2.out",onComplete:()=>{t.length?t.forEach(n=>n.style.visibility="hidden"):this.hostEl&&(this.hostEl.style.visibility="hidden"),i()}})})}update(){this.slider&&this.slider.resize()}destroy(){this.entranceTimeline&&(this.entranceTimeline.kill(),this.entranceTimeline=null),this.tickerFn&&(j.ticker.remove(this.tickerFn),this.tickerFn=null),this.slider&&(this.setAutoScrollActive(!1),this.slider.destroy(),this.slider=null),this.sliderVideoController&&(this.sliderVideoController.destroy(),this.sliderVideoController=null),this.unregisterKeyboardControls(),this.resetParallaxTargets(),this.cleanupClones(),this.autoScrollState=null,this.cancelTouchHoverSettle(),this.touchHoverEnabled=!1,this.touchHoverConfig=null,this.touchHoverState.pointerActive=!1,this.touchHoverState.pointerType="touch",this.touchHoverState.settleHandle=null,this.keyboardOptions=null,this.bumpSpacingOptions=null,this.speedState.lerped=0,this.bumpSpacingState.compression=0,this.wrapperEl&&(this.wrapperEl.style.removeProperty("user-select"),this.wrapperEl.style.removeProperty("-webkit-user-select"),this.wrapperEl.style.removeProperty("touch-action")),typeof window!="undefined"&&this.shouldExposeInstance()&&(window.smooothySliderInstance=null),this.teardownCallbacks.length&&(this.teardownCallbacks.forEach(e=>{try{e()}catch{}}),this.teardownCallbacks=[]),this.isInitialized=!1,this.hoverSyncState={pointerInside:!1,lastPointer:null,lastMovementTime:0,lastDispatchTime:0,activeSlide:null}}createConfig(){var u,d,f,_,g;let{setOffset:e,scrollInput:t,...i}=(u=this.options.config)!=null?u:{},n=this.coarsePointerEnvironment?{lerpFactor:.42,scrollSensitivity:1.55,snapStrength:.065,speedDecay:.9}:{},s={...Ao,...n,...i},o=this.coarsePointerEnvironment?{touchMultiplier:10,mouseMultiplier:1.05}:{},a={...Lp,...o,...(d=this.options.virtualScroll)!=null?d:{}};this.keyboardOptions&&((f=this.options.virtualScroll)==null?void 0:f.useKeyboard)===void 0&&(a.useKeyboard=!0);let l=t!==void 0?t:Ao.scrollInput,c=e!=null?e:m=>m.itemWidth,{dragSensitivity:h}=s;if(this.coarsePointerEnvironment&&((_=this.options.config)==null?void 0:_.dragSensitivity)===void 0){let p=((g=a.touchMultiplier)!=null?g:Lp.touchMultiplier)/vy,S=_y*(Number.isFinite(p)&&p>0?p:1),x=Ao.dragSensitivity*.55,b=Ao.dragSensitivity*3.5;h=this.clamp(S,x,b)}return{...s,dragSensitivity:h,scrollInput:l,setOffset:c,virtualScroll:a,onResize:m=>{var p,S,x,b,T;(x=this.sliderVideoController)==null||x.onSlideChange((S=(p=this.slider)==null?void 0:p.currentSlide)!=null?S:0),(T=(b=this.options).onResize)==null||T.call(b,m)},onUpdate:m=>{var p,S;this.applySpeedEffects(m),(S=(p=this.options).onUpdate)==null||S.call(p,m)}}}collectSlides(){let e=this.wrapperEl;if(!e)return[];let t=[".slide","[data-slider-slide]",".slider-item"],i=[];return t.forEach(n=>{e.querySelectorAll(n).forEach(s=>{i.includes(s)||i.push(s)})}),i.length?i:Array.from(e.children).filter(n=>n instanceof HTMLElement)}getWrappers(){var i,n,s;if(!this.wrapperEl&&!this.hostEl)return[];let e=new Set;this.hostEl&&e.add(this.hostEl),this.wrapperEl&&this.wrapperEl!==this.hostEl&&e.add(this.wrapperEl);let t=(s=(i=this.hostEl)==null?void 0:i.closest(".slider, .case-slider, .slider_wrapper, .panorama-slider"))!=null?s:(n=this.wrapperEl)==null?void 0:n.closest(".slider, .case-slider, .slider_wrapper, .panorama-slider");return t&&e.add(t),Array.from(e)}prepareEntranceState(){let e=this.getWrappers();e.length&&j.set(e,{opacity:0,y:24,visibility:"hidden"});let t=this.collectSlides();t.length&&j.set(t,{opacity:0})}playEntranceAnimation(e=.8,t=0){return new Promise(i=>{let n=this.getWrappers(),s=this.collectSlides();this.entranceTimeline&&(this.entranceTimeline.kill(),this.entranceTimeline=null),n.forEach(a=>a.style.visibility="visible");let o=j.timeline({delay:t,defaults:{ease:"power2.out"},onComplete:()=>{this.entranceTimeline=null,i()}});n.length&&o.to(n,{opacity:1,y:0,duration:e},0),s.length&&o.set(s,{opacity:1},0),this.entranceTimeline=o})}attachWheelGuards(e){let t=n=>{let s=Math.abs(n.deltaX);Math.abs(n.deltaY)>s&&n.stopImmediatePropagation()},i={capture:!0};e.addEventListener("wheel",t,i),this.teardownCallbacks.push(()=>{e.removeEventListener("wheel",t,i)})}applyInteractionGuards(e){e.length&&(this.disableNativeDrag(e),this.registerSlideLinkGuards(e))}disableNativeDrag(e){let t=i=>{i.preventDefault()};e.forEach(i=>{[i,...Array.from(i.querySelectorAll("a, img, picture, source, video"))].forEach(s=>{s.setAttribute("draggable","false"),s.addEventListener("dragstart",t),this.teardownCallbacks.push(()=>{s.removeEventListener("dragstart",t)})})})}registerSlideLinkGuards(e){e.forEach(i=>{let n=i.matches("a")?[i]:Array.from(i.querySelectorAll("a"));n.length&&n.forEach(s=>{let o=0,a=0,l=!1,c=null,h=()=>{c&&(c(),c=null)},u=p=>{if(l)return;let S=this.getEventPoint(p);(Math.abs(S.clientX-o)>6||Math.abs(S.clientY-a)>6)&&(l=!0)},d=()=>{h();let p=()=>{h()};window.addEventListener("mousemove",u),window.addEventListener("mouseup",p),window.addEventListener("touchmove",u,{passive:!0}),window.addEventListener("touchend",p),window.addEventListener("touchcancel",p),c=()=>{window.removeEventListener("mousemove",u),window.removeEventListener("mouseup",p),window.removeEventListener("touchmove",u),window.removeEventListener("touchend",p),window.removeEventListener("touchcancel",p)}},f=p=>{let S=this.getEventPoint(p);o=S.clientX,a=S.clientY,l=!1,d()},_=p=>{l&&(p.preventDefault(),p.stopImmediatePropagation()),l=!1},g=p=>{f(p)},m=p=>{p.button===0&&f(p)};s.addEventListener("mousedown",m),s.addEventListener("touchstart",g,{passive:!0}),s.addEventListener("click",_,!0),this.teardownCallbacks.push(()=>{s.removeEventListener("mousedown",m),s.removeEventListener("touchstart",g),s.removeEventListener("click",_,!0),h()})})})}getEventPoint(e){var t,i,n,s;if("touches"in e){let o=(i=e.touches[0])!=null?i:(t=e.changedTouches)==null?void 0:t[0];if(o)return{clientX:o.clientX,clientY:o.clientY}}return{clientX:(n=e.clientX)!=null?n:0,clientY:(s=e.clientY)!=null?s:0}}shouldExposeInstance(){return typeof process!="undefined"?!1:typeof window!="undefined"&&window.location?window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1":!1}};function Op(r){return new cs(r)}async function Fp(r=document){var n;let e=yy(r);if(!e)return null;let t=(n=e.getAttribute("data-smooothy-instance"))!=null?n:Ip("smooothy-home-slider");e.setAttribute("data-smooothy-instance",t),e.dataset.smooothyManaged="pending";let i=new cs({selector:`[data-smooothy-instance="${t}"]`,config:{infinite:!0,snap:!0},autoScroll:{enabled:!1},touchHover:{enabled:!0,coarseOnly:!0,applyInitialFeatured:!0,revertToFeaturedOnRelease:!0}});try{return await i.initialize(),Dp(e,t,i),i}catch(s){throw delete e.dataset.smooothyManaged,s}}async function Ka(r=document,e={}){var n;let t=Array.from(r.querySelectorAll("[data-smooothy], .slider-wrapper, .slider_wrapper")),i=[];for(let s of t){if(s.closest(".case-slider")||s.dataset.smooothyManaged==="true"||s.dataset.smooothyManaged==="pending")continue;let o=(n=s.getAttribute("data-smooothy-instance"))!=null?n:Ip("smooothy-wrapper");s.setAttribute("data-smooothy-instance",o),s.dataset.smooothyManaged="pending";let a=new cs({selector:`[data-smooothy-instance="${o}"]`,config:e.config,virtualScroll:e.virtualScroll,onSlideChange:e.onSlideChange,onResize:e.onResize,onUpdate:e.onUpdate,autoScroll:e.autoScroll,touchHover:e.touchHover});try{await a.initialize(),Dp(s,o,a),i.push(a)}catch(l){throw delete s.dataset.smooothyManaged,l}}return i}function Co(r=document){Array.from(r.querySelectorAll("[data-smooothy-managed]")).forEach(t=>{let i=t.getAttribute("data-smooothy-instance");if(!i)return;let n=yu.get(i);n&&(n.destroy(),yu.delete(i)),delete t.dataset.smooothyManaged})}function yy(r){var i,n;let e=["[data-smooothy]",".slider-wrapper",".slider_wrapper"];for(let s of e){let o=r.querySelector(s);if(o)return o}let t=r.querySelector(".panorama-slider, .slider, .case-slider");return t?(n=(i=t.querySelector("[data-smooothy]"))!=null?i:t.querySelector(".slider-wrapper"))!=null?n:t:null}var xy=".case-slider",Qa="data-case-slider-id",xu="data-slider-screensaver",Np=6e3,el=[],Sr=null,tl=!1,Ja=0;function by(r,e){let t=`case-slider-${Date.now()}-${e}`;return r.setAttribute(Qa,t),t}function Up(r){r.hasAttribute(Qa)&&r.removeAttribute(Qa)}function Ro(r=!1){r&&(Ja+=1),r&&Sr&&(Sr=null),tl=!1,el.forEach(({slider:e,wrapper:t,container:i})=>{e.destroy(),Up(t)}),el=[]}function Mr(r){Mo(r),Ja+=1;let e=Ja;tl=!1,Ro(),Sr=(async()=>{var n,s;let t=Array.from(r.querySelectorAll(xy)).filter(o=>!o.classList.contains("w-condition-invisible")),i=[];for(let[o,a]of t.entries()){let l=(n=a.querySelector("[data-smooothy], .slider-wrapper, .slider_container, .slider-items, .w-dyn-items"))!=null?n:a;if(!l||!((s=l.querySelector(".slide, [data-slider-slide]"))!=null?s:l.firstElementChild instanceof HTMLElement?l.firstElementChild:null))continue;let u=a.closest(`[${xu}], [data-slider="screensaver"]`)!==null||a.hasAttribute(xu)||l.hasAttribute(xu)||a.dataset.slider==="screensaver"||l.dataset.slider==="screensaver",d=by(l,o),f=Op({selector:`[${Qa}="${d}"]`,config:{infinite:!0,snap:!0},autoScroll:{enabled:!0,speed:u?.12:.1,initialDelay:u?Np:1600,resumeDelay:u?Np:2e3,pauseOnHover:!1,pauseOnInteraction:!0},touchHover:{enabled:!0,coarseOnly:!0,applyInitialFeatured:!0,revertToFeaturedOnRelease:!0}});await f.initialize(),i.push({slider:f,wrapper:l,container:a})}return e!==Ja?(i.forEach(({slider:o,wrapper:a})=>{o.destroy(),Up(a)}),[]):(el=i,i.map(({slider:o})=>o))})()}function Er(r=.8,e=.1){let t=i=>{!i.length||tl||(tl=!0,i.forEach((n,s)=>{n.fadeIn(r,e+s*.12)}))};Sr?Sr.then(i=>{Sr=null,i.length&&t(i)}).catch(i=>{Sr=null}):t(el.map(({slider:i})=>i))}var Un=[],Po=null,il=!0,Sy="Europe/Zurich",My=new Intl.DateTimeFormat("en-GB",{hour:"2-digit",minute:"2-digit",hourCycle:"h23",timeZone:Sy});function Ey(){let r=My.formatToParts(new Date),e="00",t="00";return r.forEach(i=>{i.type==="hour"?e=i.value:i.type==="minute"&&(t=i.value)}),{hours:e,minutes:t}}function wy(r){let e=document.createElement("span");e.className="local-time__hours";let t=document.createElement("span");t.className="local-time__colon",t.textContent=":";let i=document.createElement("span");return i.className="local-time__minutes",r.textContent="",r.append(e,t,i),{container:r,hours:e,colon:t,minutes:i}}function Ty(){for(let r=Un.length-1;r>=0;r-=1){let{container:e}=Un[r];e.isConnected||(delete e.dataset.localTimeInitialized,Un.splice(r,1))}!Un.length&&Po!==null&&(window.clearInterval(Po),Po=null)}function kp(){if(Ty(),!Un.length)return;let{hours:r,minutes:e}=Ey();Un.forEach(({hours:t,minutes:i,colon:n})=>{t.textContent=r,i.textContent=e,n.style.opacity=il?"1":"0"}),il=!il}function Ay(){Po!==null||!Un.length||(Po=window.setInterval(()=>{kp()},1e3))}function Bp(r){var e,t,i,n;return r.matches("[data-local-time-display]")?r:(n=(i=(t=(e=r.querySelector("[data-local-time-display]"))!=null?e:r.querySelector(".text-size-footer"))!=null?t:r.querySelector(".heading-style-extras"))!=null?i:r.querySelector(".text-size-regular"))!=null?n:r}function nl(r=document){let e='[data-attribute="local-time"]',t="[data-local-time-display]",i=".local-time .heading-style-extras, .local-time .text-size-regular, .local-time [data-local-time-display]",n=new Set,s=r instanceof Element?r:null,o=l=>{l&&n.add(l)};if(s&&s.matches(e)&&o(Bp(s)),r.querySelectorAll(e).forEach(l=>{o(Bp(l))}),s&&s.matches(t)&&!s.closest(e)&&n.add(s),r.querySelectorAll(t).forEach(l=>{l.closest(e)||n.add(l)}),!n.size){let l=new Set;s&&(s.classList.contains("heading-style-extras")||s.classList.contains("text-size-regular"))&&l.add(s),r.querySelectorAll(i).forEach(c=>{l.add(c)}),l.forEach(c=>{var u;let h=(u=c.closest(t))!=null?u:c;n.add(h)})}if(!n.size)return;let a=!1;n.forEach(l=>{if(l.dataset.localTimeInitialized==="true")return;let c=wy(l);l.dataset.localTimeInitialized="true",Un.push(c),a=!0}),a&&(il=!0,kp(),Ay())}var Kt,Gp,dn,Xi,Bn,Wp,Xp,rl,qp=function(){return typeof window!="undefined"},Yp=function(){return Kt||qp()&&(Kt=window.gsap)&&Kt.registerPlugin&&Kt},jp=function(e){return typeof e=="string"},Hp=function(e){return typeof e=="function"},Lo=function(e,t){var i=t==="x"?"Width":"Height",n="scroll"+i,s="client"+i;return e===dn||e===Xi||e===Bn?Math.max(Xi[n],Bn[n])-(dn["inner"+i]||Xi[s]||Bn[s]):e[n]-e["offset"+i]},Io=function(e,t){var i="scroll"+(t==="x"?"Left":"Top");return e===dn&&(e.pageXOffset!=null?i="page"+t.toUpperCase()+"Offset":e=Xi[i]!=null?Xi:Bn),function(){return e[i]}},Cy=function(e,t,i,n){if(Hp(e)&&(e=e(t,i,n)),typeof e!="object")return jp(e)&&e!=="max"&&e.charAt(1)!=="="?{x:e,y:e}:{y:e};if(e.nodeType)return{y:e,x:e};var s={},o;for(o in e)s[o]=o!=="onAutoKill"&&Hp(e[o])?e[o](t,i,n):e[o];return s},Zp=function(e,t){if(e=Wp(e)[0],!e||!e.getBoundingClientRect)return{x:0,y:0};var i=e.getBoundingClientRect(),n=!t||t===dn||t===Bn,s=n?{top:Xi.clientTop-(dn.pageYOffset||Xi.scrollTop||Bn.scrollTop||0),left:Xi.clientLeft-(dn.pageXOffset||Xi.scrollLeft||Bn.scrollLeft||0)}:t.getBoundingClientRect(),o={x:i.left-s.left,y:i.top-s.top};return!n&&t&&(o.x+=Io(t,"x")(),o.y+=Io(t,"y")()),o},zp=function(e,t,i,n,s){return!isNaN(e)&&typeof e!="object"?parseFloat(e)-s:jp(e)&&e.charAt(1)==="="?parseFloat(e.substr(2))*(e.charAt(0)==="-"?-1:1)+n-s:e==="max"?Lo(t,i)-s:Math.min(Lo(t,i),Zp(e,t)[i]-s)},Vp=function(){Kt=Yp(),qp()&&Kt&&typeof document!="undefined"&&document.body&&(dn=window,Bn=document.body,Xi=document.documentElement,Wp=Kt.utils.toArray,Kt.config({autoKillThreshold:7}),Xp=Kt.config(),Gp=1)},hs={version:"3.12.5",name:"scrollTo",rawVars:1,register:function(e){Kt=e,Vp()},init:function(e,t,i,n,s){Gp||Vp();var o=this,a=Kt.getProperty(e,"scrollSnapType");o.isWin=e===dn,o.target=e,o.tween=i,t=Cy(t,n,e,s),o.vars=t,o.autoKill=!!t.autoKill,o.getX=Io(e,"x"),o.getY=Io(e,"y"),o.x=o.xPrev=o.getX(),o.y=o.yPrev=o.getY(),rl||(rl=Kt.core.globals().ScrollTrigger),Kt.getProperty(e,"scrollBehavior")==="smooth"&&Kt.set(e,{scrollBehavior:"auto"}),a&&a!=="none"&&(o.snap=1,o.snapInline=e.style.scrollSnapType,e.style.scrollSnapType="none"),t.x!=null?(o.add(o,"x",o.x,zp(t.x,e,"x",o.x,t.offsetX||0),n,s),o._props.push("scrollTo_x")):o.skipX=1,t.y!=null?(o.add(o,"y",o.y,zp(t.y,e,"y",o.y,t.offsetY||0),n,s),o._props.push("scrollTo_y")):o.skipY=1},render:function(e,t){for(var i=t._pt,n=t.target,s=t.tween,o=t.autoKill,a=t.xPrev,l=t.yPrev,c=t.isWin,h=t.snap,u=t.snapInline,d,f,_,g,m;i;)i.r(e,i.d),i=i._next;d=c||!t.skipX?t.getX():a,f=c||!t.skipY?t.getY():l,_=f-l,g=d-a,m=Xp.autoKillThreshold,t.x<0&&(t.x=0),t.y<0&&(t.y=0),o&&(!t.skipX&&(g>m||g<-m)&&d<Lo(n,"x")&&(t.skipX=1),!t.skipY&&(_>m||_<-m)&&f<Lo(n,"y")&&(t.skipY=1),t.skipX&&t.skipY&&(s.kill(),t.vars.onAutoKill&&t.vars.onAutoKill.apply(s,t.vars.onAutoKillParams||[]))),c?dn.scrollTo(t.skipX?d:t.x,t.skipY?f:t.y):(t.skipY||(n.scrollTop=t.y),t.skipX||(n.scrollLeft=t.x)),h&&(e===1||e===0)&&(f=n.scrollTop,d=n.scrollLeft,u?n.style.scrollSnapType=u:n.style.removeProperty("scroll-snap-type"),n.scrollTop=f+1,n.scrollLeft=d+1,n.scrollTop=f,n.scrollLeft=d),t.xPrev=t.x,t.yPrev=t.y,rl&&rl.update()},kill:function(e){var t=e==="scrollTo",i=this._props.indexOf(e);return(t||e==="scrollTo_x")&&(this.skipX=1),(t||e==="scrollTo_y")&&(this.skipY=1),i>-1&&this._props.splice(i,1),!this._props.length}};hs.max=Lo;hs.getOffset=Zp;hs.buildGetter=Io;Yp()&&Kt.registerPlugin(hs);j.registerPlugin(hs);var t1=/^((?!chrome|android).)*safari/i.test(navigator.userAgent),sl=/iPhone|iPad|iPod|Android/i.test(navigator.userAgent),$p="0px 24px 32px -12px rgba(0, 0, 0, 0.22), 0px 12px 20px -10px rgba(0, 0, 0, 0.12)",Ry="0px 0px 0px rgba(0, 0, 0, 0)",Py={desktop:{minWidth:992,targetWidthPercentage:30},tablet:{minWidth:768,maxWidth:991,targetWidthPercentage:30},mobileLandscape:{minWidth:480,maxWidth:767,targetWidthPercentage:40},mobilePortrait:{maxWidth:479,targetWidthPercentage:100}},bu=class{constructor(){this.containers=[];this.expandedContainers=new Set;this.animationInProgress=!1;this.eventHandlers=new Map;this.hoverEffectsInitialized=!1;this.containerGapCache=new WeakMap;this.expandedContainerBreakpoints=new WeakMap;this.init()}init(){this.findAndSetupContainers()}getCurrentBreakpoint(){let e=window.innerWidth||document.documentElement.clientWidth;return e<=479?"mobilePortrait":e<=767?"mobileLandscape":e<=991?"tablet":"desktop"}getBreakpointConfig(e=this.getCurrentBreakpoint()){return Py[e]}normalizeGapValue(e){return!e||e==="normal"?"0px":e}captureContainerGap(e,t=this.getCurrentBreakpoint()){let i=getComputedStyle(e),n=this.normalizeGapValue(i.rowGap),s=this.normalizeGapValue(i.columnGap),a={gap:(i.gap&&i.gap!=="normal"?i.gap:`${n} ${s}`.trim()).trim(),rowGap:n,columnGap:s},l=this.containerGapCache.get(e);return l||(l=new Map,this.containerGapCache.set(e,l)),l.set(t,a),a}applyGapOverrides(e,t,i,n=0){var f,_,g;let s=this.getBreakpointConfig(i),o=this.captureContainerGap(e,i),a=(f=s.gapOverride)!=null?f:null,l=(_=s.rowGapOverride)!=null?_:a,c=(g=s.columnGapOverride)!=null?g:a;if(l===null&&c===null)return;let h=l!=null?l:o.rowGap,u=c!=null?c:o.columnGap,d=l!==null&&c!==null?`${l} ${c}`:l!==null?`${l} ${o.columnGap}`:c!==null?`${o.rowGap} ${c}`:o.gap;t.to(e,{gap:d,rowGap:h,columnGap:u,duration:.4,ease:"power2.out"},n)}restoreContainerGap(e,t,i,n=0){let s=this.containerGapCache.get(e),o=s==null?void 0:s.get(i);if(!o){let a=this.captureContainerGap(e,i);t.to(e,{gap:a.gap,rowGap:a.rowGap,columnGap:a.columnGap,duration:.4,ease:"power2.inOut"},n);return}t.to(e,{gap:o.gap,rowGap:o.rowGap,columnGap:o.columnGap,duration:.4,ease:"power2.inOut"},n)}resolveGapForBreakpoint(e,t){var d,f,_,g;let i=this.containerGapCache.get(e),n=(d=i==null?void 0:i.get(t))!=null?d:null;if(!n&&!this.expandedContainers.has(e)&&(n=this.captureContainerGap(e,t)),!n)return null;let s=this.getBreakpointConfig(t),o=(f=s.gapOverride)!=null?f:null,a=(_=s.rowGapOverride)!=null?_:o,l=(g=s.columnGapOverride)!=null?g:o,c=a!=null?a:n.rowGap,h=l!=null?l:n.columnGap;return{gap:a!==null&&l!==null?`${c} ${h}`:a!==null?`${c} ${n.columnGap}`:l!==null?`${n.rowGap} ${h}`:n.gap,rowGap:c,columnGap:h}}calculateExpandedDimensions(e,t){let i=parseFloat(e.dataset.originalWidth||"0"),n=parseFloat(e.dataset.originalHeight||"0");if(i<=0||n<=0){let h=Math.max(t,0);return{width:h,height:h}}let s=i/n||1,o=t>0?t:i,a=Math.min(o,i*5),l=o>=i?a:i,c=l/s;return{width:l,height:c}}getMediaItems(e){return Array.from(e.querySelectorAll(".project-media"))}getPrimaryMediaElement(e){return e.querySelector(".project-image, .project-video")}getPrimaryMediaElements(e){return e.map(t=>this.getPrimaryMediaElement(t)).filter(t=>!!t)}ensureMediaVisibility(e){let t=e.querySelectorAll(".project-image, .project-video");if(t.length===0)return;let i=Array.from(t);j.killTweensOf(i),j.set(i,{opacity:1})}clearInlineSizing(e){e.style.removeProperty("width"),e.style.removeProperty("height"),e.style.removeProperty("min-width"),e.style.removeProperty("max-width"),e.style.removeProperty("flex-basis"),e.style.removeProperty("flex-grow"),e.style.removeProperty("flex-shrink")}clearContainerGap(e){e.style.removeProperty("gap"),e.style.removeProperty("row-gap"),e.style.removeProperty("column-gap")}cacheMediaItemDimensions(e,t=!1){let i=parseFloat(getComputedStyle(document.documentElement).fontSize);Array.from(e).forEach(n=>{let s=getComputedStyle(n),o=parseFloat(s.width),a=parseFloat(s.height);if(!o||!a)return;let l=o/i,c=a/i;(t||!n.dataset.originalWidth)&&(n.dataset.originalWidth=l.toString(),n.dataset.originalWidthUnit="rem"),(t||!n.dataset.originalHeight)&&(n.dataset.originalHeight=c.toString(),n.dataset.originalHeightUnit="rem"),(t||!n.dataset.originalFlexBasis)&&(n.dataset.originalFlexBasis=s.flexBasis||""),(t||!n.dataset.originalMinWidth)&&(n.dataset.originalMinWidth=s.minWidth||""),(t||!n.dataset.originalMaxWidth)&&(n.dataset.originalMaxWidth=s.maxWidth||""),(t||!n.dataset.originalFlexGrow)&&(n.dataset.originalFlexGrow=s.flexGrow||""),(t||!n.dataset.originalFlexShrink)&&(n.dataset.originalFlexShrink=s.flexShrink||"")})}getMediaWrapperFromTarget(e){return e?e.classList.contains("project-media")?e:e.closest(".project-media"):null}normalizeHoverStates(e){this.getMediaItems(e).forEach(i=>{j.killTweensOf(i),j.set(i,{scale:1,y:0,opacity:1,clearProps:"transform",overwrite:!0});let n=this.getPrimaryMediaElement(i);n&&(j.killTweensOf(n),j.set(n,{scale:1,y:0,opacity:1,clearProps:"transform",overwrite:!0}),n.style.removeProperty("box-shadow"))})}findAndSetupContainers(){this.containers=[],document.querySelectorAll(".project-flex").forEach(t=>{this.containers.push(t),j.set(t,{position:"relative",overflow:"visible",willChange:"transform",backfaceVisibility:"hidden",transform:"translateZ(0)",touchAction:"pan-y"}),t.setAttribute("data-ripple-container","true");let i=this.getMediaItems(t);i.length>0&&(this.cacheMediaItemDimensions(i,!0),i.forEach(n=>{j.set(n,{position:"relative",zIndex:1,transformOrigin:"50% 50%"})})),this.captureContainerGap(t),this.setupContainerClickHandler(t)}),window.removeEventListener("resize",this.handleResize.bind(this)),window.addEventListener("resize",this.handleResize.bind(this))}initializeHoverEffects(){sl||this.hoverEffectsInitialized||(this.containers.forEach(e=>{if(this.expandedContainers.has(e))return;this.getMediaItems(e).forEach(i=>{this.setupDesktopHoverEffects(i,e)})}),this.hoverEffectsInitialized=!0)}setupDesktopHoverEffects(e,t){let i=e,n=()=>{!this.animationInProgress&&!this.expandedContainers.has(t)&&j.to(i,{scale:1.15,y:-10,zIndex:2,duration:.025,ease:"power3.out",overwrite:"auto",force3D:!0,backfaceVisibility:"hidden"})},s=()=>{!this.animationInProgress&&!this.expandedContainers.has(t)&&j.to(i,{scale:1,y:0,zIndex:1,duration:.05,ease:"power1.out",overwrite:"auto",force3D:!0})};e.removeEventListener("mouseenter",n),e.removeEventListener("mouseleave",s),e.addEventListener("mouseenter",n),e.addEventListener("mouseleave",s),this.eventHandlers.set(e,()=>{e.removeEventListener("mouseenter",n),e.removeEventListener("mouseleave",s)})}setupContainerClickHandler(e){let t=P=>{this.animationInProgress||(this.normalizeHoverStates(e),sl||j.set(P,{scale:1,y:0,clearProps:"transform,filter"}),this.toggleContainer(e,P))},o={pointerActive:!1,pointerId:null,touchId:null,startX:0,startY:0,startTime:0,moved:!1,pointerType:"",lastTarget:null,suppressClickUntil:0},a=()=>typeof performance!="undefined"&&typeof performance.now=="function"?performance.now():Date.now(),l=()=>{o.pointerActive=!1,o.pointerId=null,o.touchId=null,o.startX=0,o.startY=0,o.startTime=0,o.moved=!1,o.pointerType="",o.lastTarget=null},c=()=>{o.suppressClickUntil=a()+400},h=(P,M)=>{var O;let E=(O=this.getMediaWrapperFromTarget(P))!=null?O:M?this.getMediaWrapperFromTarget(M):null;E&&t(E)},u=typeof window!="undefined"&&"PointerEvent"in window,d=typeof window!="undefined"&&"ontouchstart"in window,f=P=>{P.pointerType==="mouse"&&P.button!==0||(o.pointerActive=!0,o.pointerId=P.pointerId,o.pointerType=P.pointerType,o.startX=P.clientX,o.startY=P.clientY,o.startTime=a(),o.moved=!1,o.lastTarget=P.target,o.suppressClickUntil=0)},_=P=>{if(!o.pointerActive||o.pointerId!==P.pointerId||o.moved)return;let M=Math.abs(P.clientX-o.startX),E=Math.abs(P.clientY-o.startY);(M>10||E>10)&&(o.moved=!0,c())},g=P=>{if(!o.pointerActive||o.pointerId!==P.pointerId)return;let M=o.lastTarget,E=a()-o.startTime,O=!o.moved&&E<=350;l(),O&&h(P.target,M),c()},m=()=>{l(),c()},p=(P,M)=>{if(M===null)return null;for(let E=0;E<P.length;E+=1){let O=P.item(E);if(O&&O.identifier===M)return O}return null},S=P=>{if(o.pointerActive)return;let M=P.changedTouches[0];M&&(o.pointerActive=!0,o.touchId=M.identifier,o.pointerType="touch",o.startX=M.clientX,o.startY=M.clientY,o.startTime=a(),o.moved=!1,o.lastTarget=P.target,o.suppressClickUntil=0)},x=P=>{var V;if(!o.pointerActive||o.pointerType!=="touch"||o.moved)return;let M=(V=p(P.changedTouches,o.touchId))!=null?V:p(P.touches,o.touchId);if(!M)return;let E=Math.abs(M.clientX-o.startX),O=Math.abs(M.clientY-o.startY);(E>10||O>10)&&(o.moved=!0,c())},b=P=>{if(!o.pointerActive||o.pointerType!=="touch"||!p(P.changedTouches,o.touchId))return;let E=o.lastTarget,O=a()-o.startTime,V=!o.moved&&O<=350;l(),V&&h(P.target,E),c()},T=()=>{l(),c()},C=P=>{if(this.animationInProgress)return;let M=a();if(o.suppressClickUntil&&M<o.suppressClickUntil){o.suppressClickUntil=0;return}h(P.target),o.suppressClickUntil=M+400},L=[];if(e.addEventListener("click",C),L.push(()=>{e.removeEventListener("click",C)}),u){let P={passive:!0};e.addEventListener("pointerdown",f,P),e.addEventListener("pointermove",_,P),e.addEventListener("pointerup",g),e.addEventListener("pointercancel",m),L.push(()=>{e.removeEventListener("pointerdown",f,P),e.removeEventListener("pointermove",_,P),e.removeEventListener("pointerup",g),e.removeEventListener("pointercancel",m)})}else if(d){let P={passive:!0};e.addEventListener("touchstart",S,P),e.addEventListener("touchmove",x,P),e.addEventListener("touchend",b),e.addEventListener("touchcancel",T),L.push(()=>{e.removeEventListener("touchstart",S,P),e.removeEventListener("touchmove",x,P),e.removeEventListener("touchend",b),e.removeEventListener("touchcancel",T)})}this.eventHandlers.set(e,()=>{L.forEach(P=>{P()})})}findParentProjectDiv(e){let t=e;for(;t;){if(t.classList.contains("project-div"))return t;t=t.parentElement}return null}resetHoverEffects(){this.hoverEffectsInitialized=!1,this.eventHandlers.forEach((e,t)=>{(t.classList.contains("project-media")||t.classList.contains("project-image")||t.classList.contains("project-video"))&&(e(),this.eventHandlers.delete(t))})}fadeInAllImages(){if(this.refreshContainers(),this.containers.length===0)return;this.resetHoverEffects();let e=j.timeline({onStart:()=>{},onComplete:()=>{setTimeout(()=>{this.initializeHoverEffects()},100)}});this.containers.forEach((t,i)=>{let n=this.getMediaItems(t);n.length!==0&&(j.set(n,{opacity:0}),e.to(n,{opacity:1,duration:.8,stagger:.03,ease:"power2.out",overwrite:"auto"},.25))}),e.play()}prepareForTransition(){this.resetHoverEffects(),this.expandedContainers.size>0&&(this.expandedContainers.forEach(e=>{e&&e.classList.remove("gallery-expanded")}),this.expandedContainers.clear()),this.animationInProgress=!1}destroy(){this.resetHoverEffects(),window.removeEventListener("resize",this.handleResize.bind(this)),this.eventHandlers.forEach((e,t)=>{e()}),this.eventHandlers.clear(),this.expandedContainers.clear(),this.containers=[],this.containerGapCache=new WeakMap,this.expandedContainerBreakpoints=new WeakMap}handleResize(){if(this.animationInProgress)return;let e=this.getCurrentBreakpoint();this.containers.forEach(t=>{if(this.normalizeHoverStates(t),this.expandedContainers.has(t))this.animationInProgress||this.updateExpandedContainer(t,e);else{this.captureContainerGap(t,e);let i=this.getMediaItems(t);i.length>0&&this.cacheMediaItemDimensions(i,!0)}})}updateExpandedContainer(e,t=this.getCurrentBreakpoint()){let i=this.getMediaItems(e),n=parseFloat(getComputedStyle(document.documentElement).fontSize),s=e.clientWidth/n,o=this.getBreakpointConfig(t),a=s*(o.targetWidthPercentage/100),l=this.getPrimaryMediaElements(i);i.forEach(h=>{let{width:u,height:d}=this.calculateExpandedDimensions(h,a);j.to(h,{width:`${u}rem`,height:`${d}rem`,minWidth:`${u}rem`,maxWidth:`${u}rem`,flexBasis:`${u}rem`,flexGrow:0,flexShrink:0,scale:1,y:0,duration:.5,ease:"power2.out",overwrite:!0})}),l.length>0&&j.to(l,{boxShadow:$p,duration:.4,ease:"power2.out",overwrite:!0});let c=this.resolveGapForBreakpoint(e,t);c&&j.to(e,{gap:c.gap,rowGap:c.rowGap,columnGap:c.columnGap,duration:.4,ease:"power2.out"}),this.expandedContainerBreakpoints.set(e,t)}toggleContainer(e,t){this.animationInProgress||(this.animationInProgress=!0,this.expandedContainers.has(e)?(this.shrinkContainer(e),this.expandedContainers.delete(e)):(this.expandContainer(e,t),this.expandedContainers.add(e)))}customScrollTo(e,t=.66,i="quad.out"){let n=window.scrollY,s=e-n,o=performance.now(),a=o+t*1e3,l=h=>h*(2-h),c=h=>{if(h>=a){window.scrollTo(0,e);return}let u=(h-o)/(t*1e3),d=l(u),f=n+s*d;window.scrollTo(0,f),requestAnimationFrame(c)};requestAnimationFrame(c)}expandContainer(e,t){let i=this.getMediaItems(e);if(i.length===0){this.animationInProgress=!1;return}this.normalizeHoverStates(e),this.ensureMediaVisibility(e),this.cacheMediaItemDimensions(i,!0);let n=this.findParentProjectDiv(e),s=1.5*parseFloat(getComputedStyle(document.documentElement).fontSize),o=j.timeline({onComplete:()=>{this.animationInProgress=!1}});t&&this.sortItemsByDistanceFrom(i,t),e.classList.add("gallery-expanded");let a=this.getCurrentBreakpoint();this.expandedContainerBreakpoints.set(e,a);let l=parseFloat(getComputedStyle(document.documentElement).fontSize),c=e.clientWidth/l,h=this.getBreakpointConfig(a),u=c*(h.targetWidthPercentage/100),d=new Map;i.forEach(_=>{d.set(_,this.calculateExpandedDimensions(_,u))});let f=this.getPrimaryMediaElements(i);if(this.applyGapOverrides(e,o,a),f.length>0&&o.to(f,{boxShadow:$p,duration:.6,ease:"power2.out",overwrite:!0},0),o.set(i,{scale:1,y:0,clearProps:"transform"},0),o.to(i,{width:(_,g)=>{var p;let m=d.get(g);return`${(p=m==null?void 0:m.width)!=null?p:u}rem`},height:(_,g)=>{var p;let m=d.get(g);return`${(p=m==null?void 0:m.height)!=null?p:u}rem`},minWidth:(_,g)=>{var p;let m=d.get(g);return`${(p=m==null?void 0:m.width)!=null?p:u}rem`},maxWidth:(_,g)=>{var p;let m=d.get(g);return`${(p=m==null?void 0:m.width)!=null?p:u}rem`},flexBasis:(_,g)=>{var p;let m=d.get(g);return`${(p=m==null?void 0:m.width)!=null?p:u}rem`},flexGrow:0,flexShrink:0,scale:1,y:0,zIndex:_=>_+1,duration:.6,stagger:.04,ease:"power2.out",force3D:!0},0),n){let _=n.getBoundingClientRect().top+window.scrollY-s;o.call(()=>{sl?this.customScrollTo(_,.66,"quad.out"):j.to(window,{scrollTo:{y:_,autoKill:!0},duration:.66,ease:"quad.out"})},[],0)}}shrinkContainer(e){var u;let t=this.getMediaItems(e),i=(u=this.expandedContainerBreakpoints.get(e))!=null?u:this.getCurrentBreakpoint();if(t.length===0){e.classList.remove("gallery-expanded"),this.animationInProgress=!1,this.expandedContainerBreakpoints.delete(e);return}this.normalizeHoverStates(e);let n=this.getPrimaryMediaElements(t),s=this.findParentProjectDiv(e),o=1.5*parseFloat(getComputedStyle(document.documentElement).fontSize),a=s&&s.getBoundingClientRect().top<o,l=a&&s?s.getBoundingClientRect().top+window.scrollY-o:0,c=j.timeline({onComplete:()=>{e.classList.remove("gallery-expanded"),this.animationInProgress=!1,this.expandedContainerBreakpoints.delete(e),t.forEach(d=>{this.clearInlineSizing(d)}),n.forEach(d=>{this.clearInlineSizing(d),d.style.removeProperty("box-shadow")}),this.clearContainerGap(e),this.captureContainerGap(e,i),this.cacheMediaItemDimensions(t,!0)}});a&&s&&c.call(()=>{sl?this.customScrollTo(l,.66,"quad.out"):j.to(window,{scrollTo:{y:l,autoKill:!0},duration:.66,ease:"quad.out"})},[],0);let h=a?.1:0;c.set(t,{scale:1,y:0,clearProps:"transform"},0),n.length>0&&c.to(n,{boxShadow:Ry,duration:.5,ease:"power2.inOut",overwrite:!0},h),this.restoreContainerGap(e,c,i,h),c.to(t,{width:(d,f)=>{let _=parseFloat(f.dataset.originalWidth||"0"),g=f.dataset.originalWidthUnit||"rem";return`${_}${g}`},height:(d,f)=>{let _=parseFloat(f.dataset.originalHeight||"0"),g=f.dataset.originalHeightUnit||"rem";return`${_}${g}`},minWidth:(d,f)=>f.dataset.originalMinWidth||"auto",maxWidth:(d,f)=>f.dataset.originalMaxWidth||"none",flexBasis:(d,f)=>{let _=f.dataset.originalFlexBasis;if(_&&_!=="auto")return _;let{originalWidth:g}=f.dataset,m=f.dataset.originalWidthUnit||"rem";return g?`${g}${m}`:"auto"},flexGrow:(d,f)=>f.dataset.originalFlexGrow!==void 0&&f.dataset.originalFlexGrow!==""?f.dataset.originalFlexGrow:0,flexShrink:(d,f)=>f.dataset.originalFlexShrink!==void 0&&f.dataset.originalFlexShrink!==""?f.dataset.originalFlexShrink:1,scale:1,y:0,zIndex:1,duration:.5,stagger:.02,ease:"power2.inOut",force3D:!0,clearProps:"filter,transform"},h)}sortItemsByDistanceFrom(e,t){let i=t.getBoundingClientRect(),n=i.left+i.width/2,s=i.top+i.height/2;e.sort((o,a)=>{let l=o.getBoundingClientRect(),c=a.getBoundingClientRect(),h=l.left+l.width/2,u=l.top+l.height/2,d=c.left+c.width/2,f=c.top+c.height/2,_=Math.sqrt(Math.pow(h-n,2)+Math.pow(u-s,2)),g=Math.sqrt(Math.pow(d-n,2)+Math.pow(f-s,2));return _-g})}refreshContainers(){this.eventHandlers.forEach((e,t)=>{e()}),this.eventHandlers.clear(),this.findAndSetupContainers(),this.containers.forEach(e=>{j.set(e,{opacity:1,display:"flex",visibility:"visible",overflow:"visible"})})}reset(){this.resetHoverEffects(),this.refreshContainers()}fadeOutAllImages(){this.containers.forEach(e=>{let t=this.getMediaItems(e);t.length>0&&j.to(t,{opacity:0,duration:.5,stagger:.02,ease:"power2.in"})})}};function Kp(){return new bu}var us=null,Ly=!1;function Jp(){return us?us.refreshContainers():us=Kp(),us}function Qp(){us&&(us.prepareForTransition(),Ly=!1)}var Iy=".section_about .about_wrapper",Dy=".footer .component-footer",Pi=null,ol=null;function Oy(r){var e,t;return r instanceof Element?r.matches('[data-barba="container"]')?r:r.closest('[data-barba="container"]'):typeof document!="undefined"?(t=(e=r.querySelector)==null?void 0:e.call(r,'[data-barba="container"]'))!=null?t:document.querySelector('[data-barba="container"]'):null}function Fy(r){var t;let e=Oy(r);return(t=e==null?void 0:e.getAttribute("data-barba-namespace"))!=null?t:null}function em(r){let e=Array.from(r.querySelectorAll(Iy)),t=Array.from(r.querySelectorAll(Dy));e.forEach(o=>{o.__infoRevealType="about",o.__infoRevealExtraGroups=void 0}),t.forEach(o=>{o.__infoRevealType="footer"});let i=Fy(r),n=new Set;if(i==="info"&&e.length&&t.length){let o=e[e.length-1];o.__infoRevealExtraGroups=t,t.forEach(a=>{n.add(a)})}return[...e,...t.filter(o=>!n.has(o))]}function tm(r,e){if(r.__infoRevealWords&&r.__infoRevealWords.length)return r.__infoRevealWords;let t=[],i=document.createTreeWalker(r,NodeFilter.SHOW_TEXT),n=[];for(;i.nextNode();){let s=i.currentNode;!s.textContent||!s.textContent.trim()||s.parentElement&&n.push(s)}return n.forEach(s=>{var l;let o=s.parentNode;if(!o)return;((l=s.textContent)!=null?l:"").split(/(\s+)/).forEach(c=>{if(c)if(/^\s+$/.test(c))o.insertBefore(document.createTextNode(c),s);else{let h=document.createElement("span");h.textContent=c,h.style.display="inline-block",h.style.opacity="0",h.style.transform=`translateY(${e*.6}px)`,h.classList.add("info-reveal-word"),o.insertBefore(h,s),t.push(h)}}),o.removeChild(s)}),r.__infoRevealWords=t,t}function Ny(r,e){if(r.__infoRevealPrepared)return;let t=new Set,i=r.querySelector(".footer-logo-wrapper");i&&t.add(i),r.querySelectorAll(".footer-extra").forEach(a=>t.add(a));let n=Array.from(t);n.length&&j.set(n,{opacity:0,y:e*.4,willChange:"transform, opacity"});let s=new Set;r.querySelectorAll(".footer-extra .heading-style-extras, .footer-extra .text-size-regular, .footer-extra .contact, .footer-extra .copyright, .footer-extra [data-footer-stagger]").forEach(a=>{if(a.matches(".contact")){s.add(a);return}let l=a.closest(".contact");if(l){s.add(l);return}s.add(a)});let o=Array.from(s);o.length?(j.set(o,{opacity:0,y:e*.3,willChange:"transform, opacity"}),r.__infoRevealSecondary=o):r.__infoRevealSecondary=void 0,j.set(r,{opacity:0,y:e,willChange:"transform, opacity"}),r.__infoRevealInner=n,r.__infoRevealPrepared=!0}function Uy(r,e){if(r.__infoRevealPrepared)return;let i=r.__infoRevealType==="footer"?[r]:Array.from(r.children),n=r.__infoRevealExtraGroups;n&&n.length&&n.forEach(s=>{i.includes(s)||i.push(s)}),i.forEach(s=>{if(s.__infoRevealPrepared)return;if(s.__infoRevealType==="footer"){Ny(s,e);return}if(j.set(s,{opacity:0,y:e,willChange:"transform, opacity"}),s.dataset.fade==="bio"){let l=tm(s,e);l.length&&j.set(l,{opacity:0,y:e*.6}),s.__infoRevealInner=void 0,s.__infoRevealSecondary=void 0}else{let l=Array.from(s.children);l.length?(j.set(l,{opacity:0,y:e*.6,willChange:"transform, opacity"}),s.__infoRevealInner=l):s.__infoRevealInner=void 0;let c=new Set;s.querySelectorAll(".about-list .services_link, .about-list [data-animate-stagger], .about-list-item, .about-list .text-size-medium").forEach(u=>{if(u.matches(".about-list-item")){let f=u.querySelector(".services_link");if(f){c.add(f);return}}let d=u.closest(".services_link");if(d){c.add(d);return}c.add(u)});let h=Array.from(c).filter(u=>u!==s);h.length?(j.set(h,{opacity:0,y:e*.45,willChange:"transform, opacity"}),s.__infoRevealSecondary=h):s.__infoRevealSecondary=void 0}s.__infoRevealPrepared=!0}),r.__infoRevealChildren=i,r.__infoRevealPrepared=!0}function im(r,e,t){var a;let i=(a=r.__infoRevealChildren)!=null?a:Array.from(r.children);if(!i.length)return;let n=j.timeline({defaults:{ease:"power2.out"}}),s=Math.max(e,.6),o=Math.max(s*.38,.14);i.forEach((l,c)=>{var m;let h=c*o,u=l.dataset.fade==="bio",d=l.__infoRevealType==="footer",f=l.__infoRevealWords||(u?tm(l,t):void 0),_=!u||d?l.__infoRevealInner:void 0,g=(!u||d)&&((m=l.__infoRevealSecondary)!=null&&m.length)?l.__infoRevealSecondary:void 0;n.to(l,{opacity:1,y:0,duration:s,onStart:()=>{l.__infoRevealActivated=!0},onComplete:()=>{l.style.removeProperty("will-change")}},h),f&&f.length&&n.to(f,{opacity:1,y:0,stagger:.01,duration:Math.max(s*.42,.26)},h+Math.min(s*.14,s-.2)),_&&_.length&&n.to(_,{opacity:1,y:0,duration:Math.max(s*.5,.38),stagger:{each:.06,from:"start",onComplete:(p,S)=>{S instanceof HTMLElement&&S.style.removeProperty("will-change")}}},h+Math.min(s*.1,.1)),g&&g.length&&n.to(g,{opacity:1,y:0,duration:Math.max(s*.38,.26),stagger:{each:.05,from:"start",onComplete:(p,S)=>{S instanceof HTMLElement&&S.style.removeProperty("will-change")}}},h+Math.min(s*.22,s-.16))})}function By(r,e,t){r.forEach(i=>{var s;let n=i.target;if(!(!i.isIntersecting||n.__infoRevealActivated)){if(typeof window!="undefined"){let o=window.innerHeight||((s=document.documentElement)==null?void 0:s.clientHeight)||0;if(o&&i.boundingClientRect.top>o*.98)return}n.__infoRevealActivated=!0,Pi==null||Pi.unobserve(n),im(n,e,t)}})}function Oi(r=document,e){var o,a;let t=(o=e==null?void 0:e.duration)!=null?o:.72,i=(a=e==null?void 0:e.offset)!=null?a:20;Pi&&Pi.disconnect();let n=typeof window!="undefined"&&"IntersectionObserver"in window,s=em(r);if(s.length){if(ol=r,s.forEach(l=>{Uy(l,i)}),!n){s.forEach(l=>{l.__infoRevealActivated||(l.__infoRevealActivated=!0,im(l,t,i))});return}Pi=new IntersectionObserver(l=>By(l,t,i),{threshold:0,rootMargin:"0px 0px -5% 0px"}),s.forEach(l=>{l.__infoRevealActivated||Pi==null||Pi.observe(l)})}}function wr(){Pi&&(Pi.disconnect(),Pi=null),ol&&em(ol).forEach(r=>{var t;r.style.removeProperty("will-change"),((t=r.__infoRevealChildren)!=null?t:Array.from(r.children)).forEach(i=>{var n,s;i.style.removeProperty("will-change"),(n=i.__infoRevealInner)==null||n.forEach(o=>o.style.removeProperty("will-change")),(s=i.__infoRevealSecondary)==null||s.forEach(o=>o.style.removeProperty("will-change"))})}),ol=null}function al(){return window.innerWidth>480}var Su=class r{constructor(){}static getInstance(){return r.instance||(r.instance=new r),r.instance}cleanup(){}},nm=Su.getInstance();var rm=/[:x\/]/i;function ky(r){if(!r)return null;let e=r.trim();if(!e)return null;let t=e.replace(/\s+/g,"");if(rm.test(t)){let n=t.split(rm);if(n.length!==2)return null;let s=Number.parseFloat(n[0]),o=Number.parseFloat(n[1]);return!Number.isFinite(s)||!Number.isFinite(o)||s<=0||o<=0?null:{width:s,height:o}}let i=Number.parseFloat(t);return!Number.isFinite(i)||i<=0?null:{width:i,height:1}}function Hy(r){for(let e of Array.from(r)){let t=e.toLowerCase(),i=t.startsWith("ratio")?t.replace(/^ratio[-_]?/,""):t;if(!i)continue;if(/^\d+(?:[x:\/]\d+)?$/.test(i)||/^\d+(?:\.\d+)?$/.test(i))return i}return null}function Mu(r){let e=".project-video, .case-media, .grid-video, .video-item, .video-item-prj, video[data-aspect], video[data-ratio]",t=[];r instanceof Element&&r.matches(e)&&t.push(r),t.push(...r.querySelectorAll(e)),t.forEach(i=>{var l,c,h,u;let n=Hy(i.classList),s=(u=(h=(c=(l=i.getAttribute("aspect-ratio"))!=null?l:i.dataset.aspect)!=null?c:i.getAttribute("data-aspect"))!=null?h:i.getAttribute("data-ratio"))!=null?u:n,o=ky(s);if(!o){i.dataset.aspectRatioApplied==="true"&&(i.style.removeProperty("aspect-ratio"),delete i.dataset.aspectRatioApplied);return}i.style.setProperty("aspect-ratio",`${o.width} / ${o.height}`),i.dataset.aspectRatioApplied="true";let a=[];i.matches("video, iframe, embed")?a.push(i):a.push(...i.querySelectorAll("video, iframe, embed, picture, img")),a.forEach(d=>{d.style.width||(d.style.width="100%"),d.style.height||(d.style.height="100%"),d.style.objectFit||(d.style.objectFit=d instanceof HTMLVideoElement?"cover":d.style.objectFit)})})}function qi(r){Mu(r),typeof requestAnimationFrame=="function"&&requestAnimationFrame(()=>{Mu(r)}),setTimeout(()=>{Mu(r)},200),r.querySelectorAll("video").forEach(t=>{t.dataset.initialized!=="true"&&(t.muted=!0,t.loop=!0,t.playsInline=!0,t.setAttribute("playsinline",""),t.hasAttribute("controls")&&t.removeAttribute("controls"),t.controls=!1,t.dataset.initialized="true",zy(t))}),Vy(r)}function zy(r){if(r.dataset.bgHandlerInitialized==="true")return;r.dataset.bgHandlerInitialized="true",r.style.backgroundColor="transparent";let e=null;if(r.classList.contains("video-item")||r.classList.contains("video-item-prj")?e=r:e=r.closest(".video-item, .video-item-prj, .grid-video"),!e)return;let t=e,i=r.poster||r.getAttribute("data-poster")||"",n=()=>{if(t.style.backgroundColor="transparent",!i)return;let o=t.style.backgroundImage,a=t.dataset.bgPosterApplied==="true",l=o&&o!=="none"&&o.trim()!=="";a||l||(t.style.backgroundImage=`url("${i}")`,t.style.backgroundSize||(t.style.backgroundSize="cover"),t.style.backgroundPosition||(t.style.backgroundPosition="center"),t.style.backgroundRepeat||(t.style.backgroundRepeat="no-repeat"),t.dataset.bgPosterApplied="true")};n();let s=()=>{e&&r.readyState>=3&&n()};r.addEventListener("playing",()=>{setTimeout(s,50)}),r.addEventListener("loadeddata",()=>{!r.paused&&r.readyState>=3&&setTimeout(s,50)}),!r.paused&&r.readyState>=3&&s()}function Vy(r){r.querySelectorAll("img.grid-image, img.project-image, .grid-image > img, .project-image > img").forEach(t=>{if(t.dataset.bgHandlerInitialized==="true")return;t.dataset.bgHandlerInitialized="true";let i=null;if(t.classList.contains("grid-image")||t.classList.contains("project-image")?i=t:i=t.closest(".grid-image, .project-image"),!i)return;let n=()=>{i&&t.complete&&t.naturalWidth>0&&(i.style.backgroundColor="transparent")};if(t.complete&&t.naturalWidth>0){n();return}t.addEventListener("load",()=>{setTimeout(n,50)})})}function ds(r){r.querySelectorAll("video").forEach(t=>{if(t.paused){t.muted=!0;try{let i=t.play();i!==void 0&&i.catch(()=>{})}catch{}}})}function fs(){if(!al())return;let r=document.querySelectorAll(".project-media, .project-image, .project-video, .grid-image, .grid-video"),e=new Set;r.forEach(i=>{if(!i)return;if(i.classList.contains("project-media")){e.add(i);return}let n=i.closest(".project-media");if(n){e.add(n);return}e.add(i)}),e.forEach(i=>{let l=1;i.style.zIndex="1",i.style.position="relative",i.addEventListener("mouseenter",()=>{let c=i.closest(".project-flex"),h=c==null?void 0:c.classList.contains("gallery-expanded"),u=i.classList.contains("expanded");!h&&!u&&(l++,i.style.zIndex=l.toString(),j.to(i,{scale:1.15,duration:.025,ease:"power2.out",overwrite:"auto"}))}),i.addEventListener("mouseleave",()=>{let c=i.closest(".project-flex"),h=c==null?void 0:c.classList.contains("gallery-expanded"),u=i.classList.contains("expanded");!h&&!u&&j.to(i,{scale:1,duration:.12,ease:"power3.inOut",overwrite:"auto",onComplete:()=>{i.style.zIndex="1"}})})}),[{trigger:"#creative-hover",target:".creative-direction-hover"},{trigger:"#digital-hover",target:".digital-hover"},{trigger:"#identity-hover",target:".identity-hover"},{trigger:"#imaging-hover",target:".imaging-hover"}].forEach(({trigger:i,target:n})=>{let s=document.querySelector(i),o=document.querySelector(n);if(!s||!o)return;qi(o);let a=j.timeline({paused:!0}).set(o,{display:"flex"}).fromTo(o,{opacity:0},{opacity:1,duration:.1,ease:"power2.out"}),l=j.timeline({paused:!0}).to(o,{opacity:0,duration:.1,ease:"power2.in",onComplete:()=>j.set(o,{display:"none"})});s.addEventListener("mouseenter",()=>{l.kill(),a.restart(),o.querySelectorAll("video").forEach(h=>{try{h.play()}catch{}})}),s.addEventListener("mouseleave",()=>{a.kill(),l.restart(),o.querySelectorAll("video").forEach(h=>{try{h.pause(),h.currentTime=0}catch{}})})})}var lm=479,cm={height:"32px",borderRadius:"15.5px"},Gy={height:"36px",borderRadius:"17.5px"},Wy="2.5px",fn=null,sm,Do=null,om=new Map,ps=!1,am=!1,ll=!1;function hm(){if(!fn||typeof window=="undefined")return;let e=window.innerWidth<=lm?Gy:cm;Object.assign(fn.style,e)}function Xy(){if(typeof window=="undefined"||am)return;let r=()=>window.requestAnimationFrame(hm),e=window.matchMedia(`(max-width: ${lm}px)`);typeof e.addEventListener=="function"?e.addEventListener("change",r):e.addListener(r),window.addEventListener("resize",r),am=!0}function Eu(){if(fn)return fn;fn=document.createElement("div"),fn.classList.add("active-link-background","active-link-overlay"),Object.assign(fn.style,{position:"absolute",top:Wy,...cm,zIndex:"1",pointerEvents:"none"}),typeof window!="undefined"&&(hm(),Xy());let r=document.querySelector(".navbar-container");return r&&!r.querySelector(".active-link-background")&&(r.appendChild(fn),Zy(),qy()),fn}function wu(){ps=!0,document.querySelectorAll(".nav-button").forEach(e=>{j.set(e,{backgroundColor:"transparent"}),e.classList.add("is-transitioning")})}function um(){ps=!1,document.querySelectorAll(".nav-button").forEach(e=>{e.classList.remove("is-transitioning")}),ll&&(ll=!1,typeof window!="undefined"?window.requestAnimationFrame(()=>ai()):ai())}function qy(){document.querySelectorAll(".nav-button").forEach(e=>{let t=om.get(e);t&&(e.removeEventListener("mouseenter",t.mouseenter),e.removeEventListener("mouseleave",t.mouseleave),e.removeEventListener("click",t.click));let i=()=>{!e.classList.contains("w--current")&&!e.classList.contains("is-transitioning")&&!ps&&j.to(e,{backgroundColor:"light-dark(rgba(0, 0, 0, 0.04), rgba(255, 255, 255, 0.06))",duration:.2,ease:"power2.out",overwrite:"auto"})},n=()=>{!e.classList.contains("w--current")&&!ps&&j.to(e,{backgroundColor:"transparent",duration:.3,ease:"power2.out",overwrite:"auto"})},s=()=>{j.set(e,{backgroundColor:"transparent"}),wu()};e.addEventListener("mouseenter",i),e.addEventListener("mouseleave",n),e.addEventListener("click",s),om.set(e,{mouseenter:i,mouseleave:n,click:s})})}function Yy(){return document.querySelector(".nav-button.w--current")}function ai(r,e){var x;let t=Eu();if(!t)return;if(!r&&ps){ll=!0;return}ll=!1;let{duration:i=.5,ease:n="power2.out",delay:s=0}=e||{},o=document.querySelector(".navbar-container");if(!o)return;let a=window.location.pathname,l=r||document.querySelector('[data-barba="container"]')||void 0,c=l==null?void 0:l.getAttribute("data-barba-namespace"),h=b=>b?["cases","projects","digital","graphic","direction","imaging"].includes(b)?document.querySelector('[data-page="projects"]'):b==="info"?document.querySelector('[data-page="info"]'):b==="archive"?document.querySelector('[data-page="archive"]'):null:null,u=()=>a==="/info"||a==="/"?document.querySelector('[data-page="info"]'):a==="/archive"?document.querySelector('[data-page="archive"]'):a.startsWith("/projects")||a.includes("/case")||["digital","graphic","direction","imaging"].some(b=>a.includes(b))?document.querySelector('[data-page="projects"]'):document.querySelector(".nav-button.w--current"),d=(x=h(c))!=null?x:u();if(!d)return;let f=Yy(),_=o.getBoundingClientRect(),g=d.getBoundingClientRect(),m=g.left-_.left,p=g.width;Do&&Do.kill(),f&&f!==d&&f.classList.remove("w--current"),d.classList.add("w--current"),Array.from(document.querySelectorAll(".nav-button")).forEach(b=>{let T=b===d,C=b.querySelector(".nav_text");T?(b.style.setProperty("color","var(--text-white)","important"),C==null||C.style.setProperty("color","var(--text-white)","important")):(b.style.removeProperty("color"),C==null||C.style.removeProperty("color"))}),j.set(t,{visibility:"visible",opacity:1}),Do=j.to(t,{left:m,width:p,duration:i,ease:"power2.out",delay:s,overwrite:"auto",onComplete:()=>{Do=null}}),jy()}function jy(){document.querySelectorAll(".nav-button").forEach(e=>{j.set(e,{backgroundColor:"transparent"})})}function Zy(){let r=document.querySelectorAll(".nav-button"),e={attributes:!0,attributeFilter:["class"]},t=function(i){if(!ps)for(let n of i)n.type==="attributes"&&n.attributeName==="class"&&(Do||ai())};sm=new MutationObserver(t),r.forEach(i=>{sm.observe(i,e)})}var cl=["projects","digital","graphic","direction","imaging"];var dm=.5,fm="power2.out",pm=null;function mm(r){let e={display:"flex",gap:"0.5rem",flexDirection:"row"};Object.assign(r.style,e)}function gm(r){let e=document.querySelector(".projects-nav");if(!e)return;pm=e;let t=cl.includes(r.next.namespace);if(!cl.includes(r.next.namespace)){j.to(e,{opacity:0,duration:dm,ease:fm,onComplete:()=>j.set(e,{display:"none"})});return}if(t){if(mm(e),r.current.namespace!==r.next.namespace){e.querySelectorAll("a").forEach(o=>{o.classList.remove("w--current")});let s=e.querySelector(`[href*="${r.next.namespace}"]`);s&&s.classList.add("w--current")}cl.includes(r.current.namespace)||j.set(e,{display:"flex",opacity:0,visibility:"visible"})}}function vm(r=!0){let e=document.querySelector(".projects-nav");if(!e)return;pm=e;let t=document.querySelector('[data-barba="container"]'),i=t==null?void 0:t.getAttribute("data-barba-namespace");if(!cl.includes(i)){j.set(e,{display:"none",opacity:0});return}mm(e),r?j.fromTo(e,{opacity:0},{opacity:1,duration:dm,ease:fm,delay:.1}):j.set(e,{opacity:0,display:"flex",visibility:"visible"})}var _m=.75,ym=.75,hl=20,xm="power2.out",ul=new Set(["projects","digital","graphic","direction","imaging"]),dl={info:[{selectors:[".headline"],enter:"down",leave:"up"},{selectors:[".slider",".slider-wrapper",".slider_wrapper",".hero-slider-wrapper",".panorama-slider"],enter:"up",leave:"down"},{selectors:[".section_about",".footer"],enter:"up",leave:"down"},{selectors:[".info-reveal-word"],enter:"up",leave:"down"}],projects:[{selectors:[".component_project-header"],enter:"down",leave:"up"},{selectors:[".top-nav"],enter:"down",leave:"up"},{selectors:[".projects-nav"],enter:"down",leave:"up"},{selectors:[".projects-wrapper",".projects_wrapper"],enter:"up",leave:"down"},{selectors:[".footer"],enter:"up",leave:"down"}],cases:[{selectors:[".top-nav"],enter:"down",leave:"up"},{selectors:[".section_case-header",".component_case-header"],enter:"up",leave:"down"},{selectors:[".section_case-media"],enter:"up",leave:"down"},{selectors:[".section_case-description",".section_cases-nav",".footer"],enter:"up",leave:"down"}],archive:[{selectors:[".top-nav",".top-nav-text"],enter:"down",leave:"up"},{selectors:[".loading-ui",".loading-ui-wrapper"],enter:"up",leave:"down"},{selectors:[".archive-container"],enter:"up",leave:"down"},{selectors:[".archive-sphere",".archive-sphere__renderer","[data-archive-sphere]"],enter:"up",leave:"down"},{selectors:[".footer"],enter:"up",leave:"down"}]};function Tu(r){return r?ul.has(r)?"projects":dl[r]?r:"info":"info"}function bm(r,e){let t=new Set;return e.forEach(i=>{if(!i)return;r.querySelectorAll(i).forEach(s=>{t.has(s)||t.add(s)})}),Array.from(t)}function $y(r,e,t){e.forEach(i=>{let n=bm(r,i.selectors);if(!n.length)return;if(!i.enter){j.set(n,{opacity:1,y:0,visibility:"visible"});return}let s=i.enter==="down"?-t:t;j.set(n,{opacity:0,y:s,visibility:"visible",willChange:"transform, opacity"})})}function Sm(r,e,t,i){let n=j.timeline({defaults:{ease:xm}});return t.forEach(s=>{let o=s[r];if(!o)return;let a=bm(e,s.selectors);if(!a.length)return;let l=r==="enter",c=o==="down"?i:-i,h=l?{opacity:1,y:0,duration:_m}:{opacity:0,y:c,duration:ym};j.set(a,{visibility:"visible",willChange:"transform, opacity"}),n.to(a,h,0),l?n.set(a,{clearProps:"willChange,visibility"},n.duration()-.001):n.set(a,{visibility:"hidden",clearProps:"willChange"},n.duration()-.001)}),n.getChildren().length?new Promise(s=>{n.eventCallback("onComplete",()=>{n.getChildren().forEach(o=>o.kill()),s()})}):(n.kill(),Promise.resolve())}function Oo(r,e){var n;let t=Tu(r),i=(n=dl[t])!=null?n:[];$y(e,i,hl)}function Fo(r,e){var n;let t=Tu(r),i=(n=dl[t])!=null?n:[];return Sm("enter",e,i,hl)}function Mm(r,e){var n;let t=Tu(r),i=(n=dl[t])!=null?n:[];return Sm("leave",e,i,hl)}var Mt={enter:_m,leave:ym,distance:hl,ease:xm};var Em=.22;function ms(r,e={}){var u,d;let{animateMedia:t=!0}=e,i=r,n=Array.from(r.querySelectorAll(".project-div"));if(i.__projectsEntranceHandled=!0,!n.length){if(i.__projectsEntrancePromise)return i.__projectsEntrancePromise;let f=new Promise(_=>{let g=new MutationObserver(()=>{if(!Array.from(r.querySelectorAll(".project-div")).length)return;g.disconnect(),i.__projectsEntranceObserver=null;let p=ms(r,e);p?p.then(_).catch(_):_()});i.__projectsEntranceObserver=g,g.observe(r,{childList:!0,subtree:!0})});return i.__projectsEntrancePromise=f,i.__projectsFiltersInitialized=!1,f}i.__projectsEntranceObserver&&(i.__projectsEntranceObserver.disconnect(),i.__projectsEntranceObserver=null);let s=(u=r.querySelector(".project-list-wrapper"))!=null?u:r.querySelector(".project-list");if(!t){let f=(d=r.querySelector(".projects-wrapper"))!=null?d:r.querySelector(".projects_wrapper");f&&j.set(f,{pointerEvents:"auto"}),j.set(n,{pointerEvents:"auto"});let _=n.map(m=>m.querySelector(".description-div")).filter(m=>!!m);_.length&&j.set(_,{pointerEvents:"auto"});let g=r.querySelectorAll(".project-image, .project-video, .grid-image, .grid-video, .video-item");return g.length&&j.set(g,{pointerEvents:"auto"}),s&&j.set(s,{pointerEvents:"auto"}),i.__projectsEntranceTimeline=void 0,i.__projectsEntrancePromise=null,null}let o=Mt.distance*1.1;i.__projectsEntranceTimeline&&(i.__projectsEntranceTimeline.kill(),delete i.__projectsEntranceTimeline),i.__projectsEntrancePromise=null,i.__projectsFiltersInitialized=!1,s&&j.set(s,{autoAlpha:1,pointerEvents:"none"}),j.set(n,{autoAlpha:0,y:o,overwrite:"auto",pointerEvents:"none",visibility:"hidden"});let a=n.map(f=>f.querySelector(".description-div")).filter(f=>!!f);a.length&&j.set(a,{autoAlpha:0,y:o*.6,overwrite:"auto",pointerEvents:"none",visibility:"hidden"});let l=r.querySelectorAll(".project-image, .project-video, .grid-image, .grid-video, .video-item");l.length&&j.set(l,{autoAlpha:0,overwrite:"auto",pointerEvents:"none",visibility:"hidden"});let c=j.timeline({defaults:{ease:"power2.out"}});i.__projectsEntranceTimeline=c,c.addLabel("start",Em),c.to(n,{autoAlpha:1,y:0,duration:Mt.enter,overwrite:"auto",onStart:()=>{j.set(n,{visibility:"visible"})},onComplete:()=>{j.set(n,{pointerEvents:"auto"})}},"start"),n.forEach(f=>{let _=f.querySelector(".description-div");_&&c.to(_,{autoAlpha:1,y:0,duration:.55,pointerEvents:"auto",overwrite:"auto",onStart:()=>{_.style.visibility="visible"}},"start+=0.05");let g=f.querySelectorAll(".project-image, .project-video, .grid-image, .grid-video, .video-item");g.length&&c.to(g,{autoAlpha:1,duration:.6,stagger:.04,overwrite:"auto",onStart:()=>{g.forEach(m=>{m.style.visibility="visible"})},onComplete:()=>{g.forEach(m=>{m.style.pointerEvents="auto"})}},`start+=${Em}`)});let h=new Promise(f=>{let _=!1,g=()=>{_||(_=!0,i.__projectsEntranceTimeline===c&&delete i.__projectsEntranceTimeline,s&&(s.style.pointerEvents="auto"),i.__projectsEntrancePromise=null,f())};c.eventCallback("onComplete",g),c.eventCallback("onInterrupt",g)});return i.__projectsEntrancePromise=h,h}var Ky=".project-div",Jy=".project-image",Qy=".case-media",wm=["loading","data-loading","data-wf-loading","data-wf-lazy","data-lazy"],fl=new WeakMap,ex=new WeakMap,tx=new WeakMap;function Uo(r){return r instanceof Document,r}function Tm(r,e,t){if(typeof window=="undefined"||typeof window.requestAnimationFrame!="function"){t();return}let i=e.get(r);typeof i=="number"&&window.cancelAnimationFrame(i);let n=window.requestAnimationFrame(()=>{e.delete(r),t()});e.set(r,n)}function ix(r){let e=fl.get(r);return e||(e=new Map,fl.set(r,e)),e}function nx(r,e){let t=r.getAttribute(e),i=ix(r);t!==null?(i.set(e,t),r.removeAttribute(e)):i.has(e)||i.set(e,null)}function rx(r,e){let t=fl.get(r),i=t==null?void 0:t.get(e);if(i===void 0){e==="loading"&&(!r.hasAttribute("loading")||r.getAttribute("loading")==="eager")&&r.setAttribute("loading","lazy");return}i===null?r.removeAttribute(e):r.setAttribute(e,i),t==null||t.delete(e),t&&t.size===0&&fl.delete(r)}function Am(r){return r instanceof HTMLImageElement?r.dataset.lcpPriority==="true"?(r.setAttribute("loading","eager"),r.setAttribute("fetchpriority","high"),r):(wm.forEach(e=>nx(r,e)),r.setAttribute("loading","eager"),r.setAttribute("fetchpriority","high"),r.dataset.lcpPriority="true",r):null}function sx(r){r.dataset.lcpPriority==="true"&&(r.removeAttribute("fetchpriority"),wm.forEach(e=>rx(r,e)),delete r.dataset.lcpPriority)}function No(r){if(!r)return null;if(r instanceof HTMLImageElement)return r;if(r instanceof HTMLPictureElement){let t=r.querySelector("img");return t instanceof HTMLImageElement?t:null}let e=r.querySelector("img");return e instanceof HTMLImageElement?e:null}function ox(r){let t=Array.from(r.querySelectorAll(Jy)).map(n=>No(n)).filter(n=>!!n);if(t.length)return Array.from(new Set(t));let i=No(r.querySelector("img"));return i?[i]:[]}function Au(r,e){Uo(r).querySelectorAll('img[data-lcp-priority="true"]').forEach(n=>{e.has(n)||sx(n)})}function ax(r){if(!r.isConnected)return!1;let e=window.getComputedStyle(r);return!(e.display==="none"||e.visibility==="hidden"||r.offsetWidth===0&&r.offsetHeight===0)}function lx(r){let e=Uo(r),t=Array.from(e.querySelectorAll(Ky));for(let i of t)if(ax(i))return i;return null}function cx(r){let e=lx(r),t=new Set;e&&ox(e).forEach(n=>{let s=Am(n);s&&t.add(s)}),Au(r,t)}function hx(r){let e=Uo(r),t=e instanceof Element?e.querySelector(".section_case-media"):null,i=t!=null?t:e,n=Array.from(i.querySelectorAll(".case-list-wrapper .case-list .case-media-wrapper, .case-media-wrapper"));for(let a of n){let l=a.querySelector(".case-media"),c=No(l);if(c)return c;let h=No(a);if(h)return h}let s=i.querySelector(Qy);if(s){let a=No(s);if(a)return a}let o=i.querySelector("img");return o instanceof HTMLImageElement?o:null}function ux(r){let e=hx(r),t=new Set;if(!e){Au(r,t);return}let i=()=>{let n=Am(e);n&&t.add(n),Au(r,t)};xr(e)?Eo(e,i):i()}function Cm(r){let e=Uo(r);Tm(e,ex,()=>cx(e))}function gs(r){let e=Uo(r);Tm(e,tx,()=>ux(e))}var dx={initialListState:"hidden"};function Tr(r){return r?r.trim().toLowerCase().replace(/\s+/g,"-"):""}function Rm(r){let e=window.getComputedStyle(r);return e?e.display==="none"?"block":e.display:"block"}var kn={fadeIn:1,expand:1.1,fadeOut:.7,collapse:.85,delayStep:.1,maxDelay:.5,listReveal:1.2},fx=".project-div",px=".project-image, .project-video, .grid-image, .grid-video, .video-item, .video-item-prj",mx=".description-div",gx=".categories [data-filter-value], .categories .text-size-small, .project-services .text-size-small, .services-list-wrapper .text-size-small, .service-text .text-size-small, [data-filter-category], [data-filter-slug], [data-filter-value], [data-capability], [data-category]",Pm=Mt.distance*1.1,Cu=class{constructor(e,t={}){this.listWrapper=null;this.triggerMap=new Map;this.triggerHandlers=new Map;this.cards=new Map;this.activeFilter="all";this.observer=null;this.refreshTimeout=null;this.hasRevealedList=!1;this.initialFilterApplied=!1;this.popStateHandler=()=>{this.applyFilter(this.getFilterFromUrl(),{animate:!0,updateUrl:!1,force:!0})};var n,s,o;this.options={...dx,...t},this.container=e instanceof Document?e.documentElement:e;let i=e instanceof Document?e:e.ownerDocument;this.nav=i==null?void 0:i.querySelector(".projects-nav"),e instanceof Element?this.listWrapper=(n=e.querySelector(".project-list-wrapper"))!=null?n:e.querySelector(".project-list"):this.listWrapper=(o=(s=i==null?void 0:i.querySelector(".project-list-wrapper"))!=null?s:i==null?void 0:i.querySelector(".project-list"))!=null?o:null}init(){this.hideListWrapper(),this.collectTriggers(),this.collectCards(),this.observeMutations(),window.addEventListener("popstate",this.popStateHandler);let e=this.getFilterFromUrl();this.applyFilter(e,{animate:!1,updateUrl:!0,pushState:!1,force:!0})}destroy(){this.triggerHandlers.forEach((e,t)=>{t.removeEventListener("click",e)}),this.triggerHandlers.clear(),this.triggerMap.clear(),this.cards.forEach(e=>{var t;(t=e.timeline)==null||t.kill(),e.timeline=void 0}),this.cards.clear(),this.observer&&(this.observer.disconnect(),this.observer=null),this.refreshTimeout!==null&&(window.clearTimeout(this.refreshTimeout),this.refreshTimeout=null),window.removeEventListener("popstate",this.popStateHandler),this.hasRevealedList=!1,this.initialFilterApplied=!1}applyExternalFilter(e,t={}){this.applyFilter(e,t)}hideListWrapper(){var t;if(!this.listWrapper){this.hasRevealedList=!1,this.initialFilterApplied=!1;return}let e=(t=this.listWrapper.querySelector("[data-filter-empty]"))!=null?t:this.listWrapper.querySelector(".w-dyn-empty");if(this.options.initialListState==="visible"){j.set(this.listWrapper,{autoAlpha:1,pointerEvents:"auto",visibility:"visible"}),e&&j.set(e,{autoAlpha:0,display:"none",pointerEvents:"none"}),this.hasRevealedList=!0,this.initialFilterApplied=!1;return}j.set(this.listWrapper,{autoAlpha:0,pointerEvents:"none"}),e&&j.set(e,{autoAlpha:0,display:"none",pointerEvents:"none"}),this.hasRevealedList=!1,this.initialFilterApplied=!1}maybeRevealList(e){if(!this.listWrapper||this.hasRevealedList)return;let t=Array.from(this.cards.values()).some(s=>s.isVisible),i=this.listWrapper.querySelector(".w-dyn-empty");if(!t&&!i)return;this.hasRevealedList=!0,e||!this.initialFilterApplied?j.to(this.listWrapper,{autoAlpha:1,duration:kn.listReveal,ease:"power2.out",pointerEvents:"auto"}):j.set(this.listWrapper,{autoAlpha:1,pointerEvents:"auto"})}readElementMetrics(e){let{element:t,defaultDisplay:i}=e,n=t.getAttribute("style"),s=n!==null,o=window.getComputedStyle(t),a=o.display==="none"||t.offsetHeight===0||Number.isNaN(t.offsetHeight);if(a){t.style.position="absolute",t.style.visibility="hidden",t.style.pointerEvents="none",t.style.display=i||"block";let{width:h}=o;h&&h!=="auto"&&(t.style.width=h),t.style.height="",t.style.marginTop="",t.style.marginBottom="",t.style.paddingTop="",t.style.paddingBottom=""}let l=window.getComputedStyle(t),c={height:t.offsetHeight,marginTop:parseFloat(l.marginTop)||0,marginBottom:parseFloat(l.marginBottom)||0,paddingTop:parseFloat(l.paddingTop)||0,paddingBottom:parseFloat(l.paddingBottom)||0};return a&&(s?t.setAttribute("style",n):t.removeAttribute("style")),c}measureCard(e,t=!1){if(!t&&e.metrics)return e.metrics;let i=this.readElementMetrics(e);return e.metrics=i,i}getCardDescription(e){return e.element.querySelector(mx)}getCardMediaElements(e){return Array.from(e.element.querySelectorAll(px))}restoreCardVisibility(e,t,i){let n=[e.element];t||(t=this.getCardDescription(e)),(!i||!i.length)&&(i=this.getCardMediaElements(e)),t&&n.push(t),i&&i.length&&n.push(...i),n.forEach(s=>{s&&(s.style.opacity&&s.style.opacity!=="1"&&(s.style.opacity="1"),s.style.visibility&&s.style.visibility!=="visible"&&(s.style.visibility="visible"),s.style.removeProperty("translate"),s.style.removeProperty("rotate"),s.style.removeProperty("scale"),s.style.removeProperty("transform"))})}toggleEmptyState(e){var n;if(!this.listWrapper)return;let t=(n=this.listWrapper.querySelector("[data-filter-empty]"))!=null?n:this.listWrapper.querySelector(".w-dyn-empty");if(!t)return;let i=Rm(t);j.killTweensOf(t),e?(j.set(t,{display:i,pointerEvents:"auto"}),j.to(t,{autoAlpha:1,duration:.45,ease:"power2.out"})):j.to(t,{autoAlpha:0,duration:.3,ease:"power2.out",pointerEvents:"none",onComplete:()=>{t.style.display="none"}})}collectTriggers(){if(!this.nav)return;let e=Array.from(this.nav.querySelectorAll("[data-filter-trigger]"));if(e.forEach(t=>{var s,o;let i=Tr((o=(s=t.dataset.filterTrigger)!=null?s:t.getAttribute("href"))!=null?o:"");if(!i)return;this.triggerMap.set(i,t);let n=a=>{a.preventDefault(),this.applyFilter(i,{animate:!0,updateUrl:!0,pushState:!0})};t.addEventListener("click",n),this.triggerHandlers.set(t,n)}),!this.triggerMap.has("all")){let t=e.find(i=>{var s;return Tr((s=i.dataset.filterTrigger)!=null?s:"")==="all"});t&&this.triggerMap.set("all",t)}}collectCards(){let e=Array.from(this.container.querySelectorAll(fx)),t=new Map;e.forEach(i=>{let n=this.cards.get(i),s=this.extractCategories(i);if(n){n.categories=s,this.measureCard(n,!0),t.set(i,n);return}let o={element:i,categories:s,defaultDisplay:Rm(i),isVisible:!0};this.measureCard(o,!0),t.set(i,o)}),this.cards.forEach((i,n)=>{var s;t.has(n)||(s=i.timeline)==null||s.kill()}),this.cards=t}extractCategories(e){let t=new Set,i=a=>{a&&a.split(/[,/|]+/).map(l=>Tr(l)).filter(Boolean).forEach(l=>t.add(l))};return["data-filter-slug","data-filter-category","data-category","data-categories","data-capability","data-filter-value","data-category-slugs"].forEach(a=>{i(e.getAttribute(a))}),["filterSlug","filterCategory","category","categories","capability","filterValue"].forEach(a=>{a in e.dataset&&i(e.dataset[a])}),Array.from(e.querySelectorAll(gx)).filter(a=>a.childElementCount===0).forEach(a=>{i(a.textContent)}),t}observeMutations(){let e=this.container.querySelector(".project-list"),t=e!=null?e:this.container;this.observer=new MutationObserver(i=>{i.some(n=>n.type==="childList")&&this.scheduleRefresh()}),this.observer.observe(t,{childList:!0,subtree:!0})}scheduleRefresh(){this.refreshTimeout!==null&&window.clearTimeout(this.refreshTimeout),this.refreshTimeout=window.setTimeout(()=>{this.refreshTimeout=null,this.collectCards(),this.applyFilter(this.activeFilter,{animate:!1,updateUrl:!1,force:!0})},50)}getFilterFromUrl(){var n,s;let e=new URL(window.location.href),t=Tr((s=(n=e.searchParams.get("category"))!=null?n:e.searchParams.get("capability"))!=null?s:"");if(t)return t;let i=e.hash.replace("#","");if(!i)return"all";if(i.includes("=")){let[o,a]=i.split("=");if(o==="category"||o==="capability")return Tr(a)}return Tr(i)||"all"}applyFilter(e,t={}){let{animate:i=!0,updateUrl:n=!1,pushState:s=!1,force:o=!1}=t,a=Tr(e);if(a||(a="all"),a!=="all"&&!this.triggerMap.has(a)&&(a="all"),!o&&a===this.activeFilter){n&&this.updateUrl(a,s);return}this.activeFilter=a,this.updateTriggers(a),this.filterCards(a,i),this.maybeRevealList(!this.hasRevealedList),this.initialFilterApplied=!0,Cm(this.container),n&&this.updateUrl(a,s)}updateTriggers(e){this.triggerMap.forEach((t,i)=>{let n=i===e||e==="all"&&i==="all";t.classList.toggle("is-active",n),t.classList.toggle("w--current",n),n?(t.setAttribute("aria-current","true"),t.setAttribute("aria-pressed","true")):(t.removeAttribute("aria-current"),t.setAttribute("aria-pressed","false"))})}filterCards(e,t){let i=e==="all",n=Array.from(this.cards.values()),s=0,o=0;n.forEach(a=>{i||a.categories.has(e)?(this.showCard(a,t,s),s+=1,o+=1):this.hideCard(a,t)}),this.toggleEmptyState(o===0)}showCard(e,t,i){var c;(c=e.timeline)==null||c.kill(),e.timeline=void 0;let n=this.getCardMediaElements(e),s=this.getCardDescription(e);if(this.restoreCardVisibility(e,s,n),e.isVisible){j.set(e.element,{display:e.defaultDisplay,autoAlpha:1,y:0,pointerEvents:"auto",overflow:"",height:"",marginTop:"",marginBottom:"",paddingTop:"",paddingBottom:""}),s&&j.set(s,{autoAlpha:1,y:0,pointerEvents:"auto"}),n.length&&j.set(n,{autoAlpha:1,y:0,pointerEvents:"auto"}),this.restoreCardVisibility(e,s,n);return}let o=this.measureCard(e,!0),a=Math.min(i*kn.delayStep,kn.maxDelay),l=Pm;if(e.isVisible=!0,t){let h=j.timeline({defaults:{overwrite:"auto"},onComplete:()=>{e.timeline===h&&(e.timeline=void 0),j.set(e.element,{overflow:"",height:"",marginTop:"",marginBottom:"",paddingTop:"",paddingBottom:"",pointerEvents:"auto",visibility:"visible"}),s&&j.set(s,{pointerEvents:"auto"}),n.length&&j.set(n,{pointerEvents:"auto"}),this.restoreCardVisibility(e,s,n),this.measureCard(e,!0)}});h.set(e.element,{display:e.defaultDisplay,autoAlpha:0,height:0,marginTop:0,marginBottom:0,paddingTop:0,paddingBottom:0,y:l,overflow:"hidden",pointerEvents:"none",visibility:"hidden"}),s&&h.set(s,{autoAlpha:0,y:l*.65,pointerEvents:"none",visibility:"hidden"},0),n.length&&h.set(n,{autoAlpha:0,pointerEvents:"none",visibility:"hidden"},0),h.to(e.element,{height:o.height,marginTop:o.marginTop,marginBottom:o.marginBottom,paddingTop:o.paddingTop,paddingBottom:o.paddingBottom,duration:kn.expand,ease:"power2.inOut",delay:a},0),h.to(e.element,{autoAlpha:1,y:0,pointerEvents:"auto",visibility:"visible",duration:kn.fadeIn,ease:"power2.out"},a+.12),s&&h.to(s,{autoAlpha:1,y:0,pointerEvents:"auto",visibility:"visible",duration:.55,ease:"power2.out"},a+.18),n.length&&h.to(n,{autoAlpha:1,pointerEvents:"auto",visibility:"visible",duration:.6,stagger:.04,ease:"power2.out"},a+.24),e.timeline=h}else j.set(e.element,{display:e.defaultDisplay,autoAlpha:1,y:0,pointerEvents:"auto",overflow:"",height:"",marginTop:"",marginBottom:"",paddingTop:"",paddingBottom:"",visibility:"visible"}),s&&j.set(s,{autoAlpha:1,y:0,pointerEvents:"auto",visibility:"visible"}),n.length&&j.set(n,{autoAlpha:1,pointerEvents:"auto",visibility:"visible"}),this.restoreCardVisibility(e,s,n),this.measureCard(e,!0)}hideCard(e,t){var o;if(!e.isVisible&&!e.timeline)return;(o=e.timeline)==null||o.kill(),e.timeline=void 0,this.measureCard(e,!0),e.isVisible=!1;let i=this.getCardDescription(e),n=this.getCardMediaElements(e),s=Pm;if(t){let a=j.timeline({defaults:{overwrite:"auto"},onComplete:()=>{e.timeline===a&&(e.timeline=void 0),j.set(e.element,{display:"none",pointerEvents:"none",autoAlpha:0,y:0,height:"",marginTop:"",marginBottom:"",paddingTop:"",paddingBottom:"",overflow:"",visibility:"hidden"}),i&&j.set(i,{autoAlpha:0,y:0,pointerEvents:"none",visibility:"hidden"}),n.length&&j.set(n,{autoAlpha:0,pointerEvents:"none",visibility:"hidden"})}});if(a.set(e.element,{overflow:"hidden",pointerEvents:"none",visibility:"visible"}),n.length){let l=n.slice().reverse();a.to(l,{autoAlpha:0,duration:Math.max(.45,kn.fadeOut*.75),ease:"power2.inOut",stagger:.04},0)}i&&a.to(i,{autoAlpha:0,y:-s*.6,duration:Math.max(.4,kn.fadeOut*.7),ease:"power2.inOut"},.06),a.to(e.element,{autoAlpha:0,y:-s,height:0,marginTop:0,marginBottom:0,paddingTop:0,paddingBottom:0,duration:kn.collapse,ease:"power2.inOut"},0),e.timeline=a}else j.set(e.element,{autoAlpha:0,y:0,display:"none",pointerEvents:"none",height:"",marginTop:"",marginBottom:"",paddingTop:"",paddingBottom:"",overflow:"",visibility:"hidden"}),i&&j.set(i,{autoAlpha:0,y:0,pointerEvents:"none",visibility:"hidden"}),n.length&&j.set(n,{autoAlpha:0,y:0,pointerEvents:"none",visibility:"hidden"})}updateUrl(e,t){let i=new URL(window.location.href);e==="all"?(i.searchParams.delete("category"),i.searchParams.delete("capability")):i.searchParams.set("category",e);let n=`${i.pathname}${i.search}${i.hash}`;t?window.history.pushState({filter:e},"",n):window.history.replaceState({filter:e},"",n)}},pn=null;function Bo(r=document,e){pl(),pn=new Cu(r,e),pn.init()}function pl(){pn==null||pn.destroy(),pn=null}function Lm(r,e){pn==null||pn.applyExternalFilter(r,e)}var Im=Fp;var Dm=[{id:"archive-video-01",type:"video",src:"https://coscostudio.b-cdn.net/Portfolio%20Videos/Haus%20x%20Sautter%20Sisters/720/ss-3.mp4",thumb:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69062df40d4a0bb384bffe9b_ss-3-cover.avif",aspectRatio:.75},{id:"archive-video-02",type:"video",src:"https://coscostudio.b-cdn.net/Portfolio%20Videos/Summit/Short%20Videos/720p/summit-concrete-short.mp4",thumb:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69062f3fb2d24fda2019e07c_js-cover-02.avif",aspectRatio:.5208333333333334},{id:"archive-video-03",type:"video",src:"https://coscostudio.b-cdn.net/Portfolio%20Videos/Haus%20x%20Gilly/720/gilly-1.mp4",thumb:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69062de88d55ba8f8c2b922b_gilly-1.avif",aspectRatio:.5625},{id:"archive-video-04",type:"video",src:"https://coscostudio.b-cdn.net/Portfolio%20Videos/Haus%20x%20Sautter%20Sisters/720/ss-6.mp4",thumb:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69062df4d00970133fc9713b_ss-6-cover.avif",aspectRatio:1.7777777777777777},{id:"archive-video-05",type:"video",src:"https://coscostudio.b-cdn.net/Portfolio%20Videos/Haus%20x%20Gilly/720/gilly-4.mp4",thumb:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69062de8b2317b4b155f73ea_gilly-4.avif",aspectRatio:.5625},{id:"archive-video-06",type:"video",src:"https://coscostudio.b-cdn.net/Portfolio%20Videos/Summit/Short%20Videos/720p/summit-blackhole-short.mp4",thumb:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69062f3f546bb2d5ad041774_js-cover-03.avif",aspectRatio:.5208333333333334},{id:"archive-video-07",type:"video",src:"https://coscostudio.b-cdn.net/Portfolio%20Videos/Haus%20x%20Gilly/720/gilly-3.mp4",thumb:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69062de842634eaed9fa5c7b_gilly-3.avif",aspectRatio:.5625},{id:"archive-video-08",type:"video",src:"https://coscostudio.b-cdn.net/Portfolio%20Videos/Haus%20x%20Sautter%20Sisters/720/ss-2.mp4",thumb:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69062df453ef7df9dc01f186_ss-2-cover.avif",aspectRatio:.75}],Ru=[{id:"archive-video-mobile-01",type:"video",src:"https://vz-962f74a4-f42.b-cdn.net/585a1399-fd31-4824-8113-5cac96c81eca/playlist.m3u8",thumb:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69062df40d4a0bb384bffe9b_ss-3-cover.avif",aspectRatio:3/4},{id:"archive-video-mobile-02",type:"video",src:"https://vz-962f74a4-f42.b-cdn.net/302a81de-ae29-48cb-abf2-c03af75b54a4/playlist.m3u8",thumb:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69062f3fb2d24fda2019e07c_js-cover-02.avif",aspectRatio:1e3/1920},{id:"archive-video-mobile-03",type:"video",src:"https://vz-962f74a4-f42.b-cdn.net/cda8db0e-3794-45d4-a07c-b02236381da5/playlist.m3u8",thumb:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69062de88d55ba8f8c2b922b_gilly-1.avif",aspectRatio:9/16},{id:"archive-video-mobile-04",type:"video",src:"https://vz-962f74a4-f42.b-cdn.net/339bce8f-79d8-4e23-a190-79305d379012/playlist.m3u8",thumb:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69062df4d00970133fc9713b_ss-6-cover.avif",aspectRatio:16/9},{id:"archive-video-mobile-05",type:"video",src:"https://vz-962f74a4-f42.b-cdn.net/305f01fa-9b34-4a78-a966-5d9f708dc8ae/playlist.m3u8",thumb:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69062f3f3b0f6fd08d836a66_js-cover-01.avif",aspectRatio:1e3/1920},{id:"archive-video-mobile-06",type:"video",src:"https://vz-962f74a4-f42.b-cdn.net/8e796f4c-84bb-4dee-9c57-4b4737697135/playlist.m3u8",thumb:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69062de8b2317b4b155f73ea_gilly-4.avif",aspectRatio:9/16},{id:"archive-video-mobile-07",type:"video",src:"https://vz-962f74a4-f42.b-cdn.net/d9b4ff0c-602c-4dae-bbd1-e724d43ddfd9/playlist.m3u8",thumb:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69062f3f546bb2d5ad041774_js-cover-03.avif",aspectRatio:1e3/1920},{id:"archive-video-mobile-08",type:"video",src:"https://vz-962f74a4-f42.b-cdn.net/21bbd845-bb98-405e-accf-2683d2518add/playlist.m3u8",thumb:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69062de842634eaed9fa5c7b_gilly-3.avif",aspectRatio:9/16},{id:"archive-video-mobile-09",type:"video",src:"https://vz-962f74a4-f42.b-cdn.net/f5ba8727-7436-4714-afc6-ddf79515c3f6/playlist.m3u8",thumb:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69062df453ef7df9dc01f186_ss-2-cover.avif",aspectRatio:3/4}],Om=[{id:"archive-image-001",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/680a6f54d3c1c3c5c5204b6c_20240530-2709801-314-positive.avif"},{id:"archive-image-002",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/680a74fa2c4ebce341322c3b_stephen-cosco-23.avif"},{id:"archive-image-003",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/680a720712a2c3aa1df669a7_stephen-cosco-50.avif"},{id:"archive-image-004",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/690513f07f1d3d1877b498db_20230804-1304402-0031.avif"},{id:"archive-image-005",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/6905143cf3d2d8ad5d991896_DSC02945-Edit.avif"},{id:"archive-image-006",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/6905148b1a22f03ce89b711d_20240111-2013707-004.avif"},{id:"archive-image-007",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/690514e26ab377afa42d1f02_220719003624010028.avif"},{id:"archive-image-008",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/6905155aa921702bc2a1cd5a_230217007904020028.avif"},{id:"archive-image-009",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/680a70fd2877ed516086ac9b_stephen-cosco-102.avif"},{id:"archive-image-010",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/6905160f3bb6ded4ca413f41_20240207-2171107-241-positive.avif"},{id:"archive-image-011",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/690516246ab377afa42d5826_Chaste%20Poster.avif"},{id:"archive-image-012",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69051635a5eea1ba298faf16_index-video-desktop.avif"},{id:"archive-image-013",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/680a6f97e7dfbcb41437abf1_20230804-1304609-0002-positive.avif"},{id:"archive-image-014",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/690516deeaf1dfc9f5740baa_repetto.avif"},{id:"archive-image-015",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69051450dce4ed40700f0351_220719003624080003.avif"},{id:"archive-image-016",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/6905170a837f9ec544fb1877_Haus-ss--11.avif"},{id:"archive-image-017",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/690518192b1b03904c5e513e_20231118-1803213-001-12.avif"},{id:"archive-image-018",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/680a7d962e771cc63959db3f_stephen-cosco-18.avif"},{id:"archive-image-019",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/690518a540e9289f7abb9faa_220719003624020036.avif"},{id:"archive-image-020",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/690518c9c5873500a83b6bd0_220719003624120014.avif"},{id:"archive-image-021",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/690518d72b43bafea8332f3e_220719003624050009-Edit.avif"},{id:"archive-image-022",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/690518f0c5671628a94f1562_20231118-1803212-001-16.avif"},{id:"archive-image-023",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/680a71161c2012036f98ec67_stephen-cosco-59.avif"},{id:"archive-image-024",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/6905197c80a70fa61670d74c_index_screenshots.avif"},{id:"archive-image-025",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/6905199c0ff8fc1ce4496a63_20231118-1803213-001-31.avif"},{id:"archive-image-026",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/6904d3413273aff69aae7f7f_MACBOOK-MOCKUP-0122%20copy.avif"},{id:"archive-image-027",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/680a726e346e5a1c89b70b9b_stephen-cosco-14.avif"},{id:"archive-image-028",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69051fc636c9ee3c294cf193_renegade-archive-tablet-full.avif"},{id:"archive-image-029",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/680a727be03e8668802ea180_stephen-cosco-68.avif"},{id:"archive-image-030",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076de687ede58922159491_835d464b0dca3fa7d1198da18723f250_cosco-archive-2.avif"},{id:"archive-image-031",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/680a728f9bf42c395d22ddde_stephen-cosco-4.avif"},{id:"archive-image-032",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69051aae8c732c1cc80b729b_DSC00714-1.avif"},{id:"archive-image-033",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69051af2c3abc8af78159292_220902004432010006.avif"},{id:"archive-image-034",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69051b5fd47ff9dfa35e2c43_Emma.avif"},{id:"archive-image-035",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69051c63f44cb19477865cda_220719003624180028.avif"},{id:"archive-image-036",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69051c6e7800f980410a2ba6_manola-homepage-mobile.avif"},{id:"archive-image-037",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69051c8644447cc2880506a1_20240111-2013704-079-positive.avif"},{id:"archive-image-038",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/680a73789f3f1383f23d4c9a_stephen-cosco-60.avif"},{id:"archive-image-039",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/680a739d5eca17c17a78bc46_stephen-cosco-54.avif"},{id:"archive-image-040",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69051cc452a8e80109ffb004_20240111-2013705-021-positive.avif"},{id:"archive-image-041",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/680a73b1ff00431da310490d_stephen-cosco-42.avif"},{id:"archive-image-042",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/680a7449c769460bb8dc1916_stephen-cosco-44.avif"},{id:"archive-image-043",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69051d04f9576cad6fa2d63c_dal-tablets.avif"},{id:"archive-image-044",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69051d1ca1ca7499396c97b1_220902004432040001.avif"},{id:"archive-image-045",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69051d2a98a8f80cfdc0ac5a_fnt-featured.avif"},{id:"archive-image-046",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69051d3c2dad815e703fc411_20230804-1304607-0016.avif"},{id:"archive-image-047",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/680a73420d1fd5315b1b3c87_stephen-cosco-39.avif"},{id:"archive-image-048",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/680a7439eeee4bfdd1beef42_stephen-cosco-83.avif"},{id:"archive-image-049",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69051d80fd87545006c79a07_renegade-fullscreen.avif"},{id:"archive-image-050",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69051d9b2a1e63e5ccf1bcaf_20240207-2171103-089-positive-Edit-2.avif"},{id:"archive-image-051",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69051daa46bc2ef4a0edb532_302342_0007-1.avif"},{id:"archive-image-052",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69051de1e7f20ff276390989_20230804-1304605-0028.avif"},{id:"archive-image-053",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/680a74bcb3d2265c7c23559f_stephen-cosco-34.avif"},{id:"archive-image-054",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69051e6281a93e1fde06383d_220719003624070036-Edit.avif"},{id:"archive-image-055",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69051e71f5ccebdbf7fd9dc5_manola-featured.avif"},{id:"archive-image-056",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/680a74e39e1f1c396f9dabab_stephen-cosco-67.avif"},{id:"archive-image-057",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/680a7505b5dfb8fe2e73c494_stephen-cosco-48.avif"},{id:"archive-image-058",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69051ebf285d76c8feebaa0c_20230804-1304603-0029-positive.avif"},{id:"archive-image-059",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69051ed450dd6000901d257a_renegade-paper3.avif"},{id:"archive-image-060",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/680a754ebdad02f4ef39cf79_stephen-cosco-64.avif"},{id:"archive-image-061",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69051efe570c2c569b96a4d8_dal-pdp.avif"},{id:"archive-image-062",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69051f08ff7ef63434a81ab8_dal-stories-1.avif"},{id:"archive-image-063",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69051f291f5b9fd8bd4be435_220719003624170008.avif"},{id:"archive-image-064",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69051f37ae90debc068eaabb_wlw-pdp-phones.avif"},{id:"archive-image-065",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69051f5349adbd9af8d8e095_20240207-2171104-149.avif"},{id:"archive-image-066",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/680a75ca7a8ddacd1bc80107_stephen-cosco-115.avif"},{id:"archive-image-067",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69051fa3e06096afd7de1975_20230804-1304605-0035.avif"},{id:"archive-image-068",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69051fb17d72bafed993d47e_DSC03520-Edit.avif"},{id:"archive-image-069",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69051fea87881520f8faf5b8_230217007904030035.avif"},{id:"archive-image-070",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69052049ecafd368a340bffb_480395_0033-3.avif"},{id:"archive-image-071",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69052063cb378a85d131757e_230217007904010025.avif"},{id:"archive-image-072",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69052074a502d0958768ad5a_dal%20-%20macbook%204.avif"},{id:"archive-image-073",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69052089a3a7bf1614f5c2a1_20230804-1304601-0008-positive.avif"},{id:"archive-image-074",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/680a7d9cef0420fb287eb229_0bead3c47cb29177fc92673e30f7fbf2_stephen-cosco-92.avif"},{id:"archive-image-075",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/680a7d9bebc42918cd0b28af_stephen-cosco-80.avif"},{id:"archive-image-076",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69052117e9a8af6a503b550f_220719003624020018.avif"},{id:"archive-image-077",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69052132ce4cec81d187ebab_220719003624130027.avif"},{id:"archive-image-078",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/6905213d00e214ca38d5cf52_220719003624110010.avif"},{id:"archive-image-079",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/6905217315633a4e4357e92d_230217007904020031.avif"},{id:"archive-image-080",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/6905219f15633a4e4357f310_The%20Volume%20Poster2.avif"},{id:"archive-image-081",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/680a7526d4c68538179a38b4_stephen-cosco-75.avif"},{id:"archive-image-082",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/690520de2cef3e7b8fdd99a0_20240207-2171105-175.avif"},{id:"archive-image-083",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69051cf68de1209418552ec2_25-04-10-4381113-0%2032-positive.avif"},{id:"archive-image-084",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076de90a0c537e5a8117bf_060fb36fc6a880fa6112089dfe87dcc9_cosco-archive-3.avif"}],Pu=[{id:"archive-mobile-image-001",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076dec5f456f77386386b2_cosco-archive-15.avif"},{id:"archive-mobile-image-002",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076deb4cb2d0116fe8da6e_cosco-archive-16.avif"},{id:"archive-mobile-image-003",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076deb6031dfaacaf6bdcd_cosco-archive-17.avif"},{id:"archive-mobile-image-004",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076deb043ccfe688541b6c_cosco-archive-14.avif"},{id:"archive-mobile-image-005",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076debedc89e709d163c7b_cosco-archive-18.avif"},{id:"archive-mobile-image-006",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076deb225ee4460cfba164_cosco-archive-19.avif"},{id:"archive-mobile-image-007",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076deb5f456f7738638681_cosco-archive-36.avif"},{id:"archive-mobile-image-008",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076deb750fdefaeabf3539_cosco-archive-20.avif"},{id:"archive-mobile-image-009",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076deb3c228aa6bd2163b4_cosco-archive-60.avif"},{id:"archive-mobile-image-010",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076deb043ccfe688541b56_cosco-archive-52.avif"},{id:"archive-mobile-image-011",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076deb19ca00923307b196_cosco-archive-51.avif"},{id:"archive-mobile-image-012",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076deb0fa10c5d626074f7_cosco-archive-35.avif"},{id:"archive-mobile-image-013",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076dea016fe09d35a68849_cosco-archive-50.avif"},{id:"archive-mobile-image-014",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076deaa57558ad3369260d_cosco-archive-72.avif"},{id:"archive-mobile-image-015",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076dea1c8930c360f07be0_cosco-archive-30.avif"},{id:"archive-mobile-image-016",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076dea85c0c5cdaa8d31a6_cosco-archive-8.avif"},{id:"archive-mobile-image-017",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076dea5b93950f7686908d_cosco-archive-12.avif"},{id:"archive-mobile-image-018",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076dea7bfc824831784c8a_cosco-archive-11.avif"},{id:"archive-mobile-image-019",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076deaf9d2a79222b02460_cosco-archive-5.avif"},{id:"archive-mobile-image-020",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076dea925b642e45856ebe_cosco-archive-37.avif"},{id:"archive-mobile-image-021",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076dea9984bd617f963fb6_cosco-archive-70.avif"},{id:"archive-mobile-image-022",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076deaa632f23997a84a5d_cosco-archive-48.avif"},{id:"archive-mobile-image-023",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076dea407b21d560d6c7d2_cosco-archive-85.avif"},{id:"archive-mobile-image-024",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076dea1ac3ba7124b3e179_cosco-archive-66.avif"},{id:"archive-mobile-image-025",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076deab47331a4d73876fd_cosco-archive-65.avif"},{id:"archive-mobile-image-026",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076deacf5965b7ab1a1e96_cosco-archive-31.avif"},{id:"archive-mobile-image-027",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076de93917f833252e661d_cosco-archive-58.avif"},{id:"archive-mobile-image-028",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076de90a0c537e5a8117bf_cosco-archive-3.avif"},{id:"archive-mobile-image-029",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076de9b877c8b1484f58e4_cosco-archive-43.avif"},{id:"archive-mobile-image-030",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076de950f2e3002303ecd3_cosco-archive-28.avif"},{id:"archive-mobile-image-031",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076de99e2deb54cc090aef_cosco-archive-33.avif"},{id:"archive-mobile-image-032",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076de92d82c1e31fbf2d42_cosco-archive-46.avif"},{id:"archive-mobile-image-033",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076de9559f31a9c059fc29_cosco-archive-13.avif"},{id:"archive-mobile-image-034",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076de9edee260753a37f86_cosco-archive-67.avif"},{id:"archive-mobile-image-035",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076de83d343eacde823a7a_cosco-archive-82.avif"},{id:"archive-mobile-image-036",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076de84bb4b377555c8847_cosco-archive-41.avif"},{id:"archive-mobile-image-037",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076de8559f31a9c059fbd0_cosco-archive-47.avif"},{id:"archive-mobile-image-038",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076de806bc77ef643eb12f_cosco-archive-64.avif"},{id:"archive-mobile-image-039",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076de819ca00923307b157_cosco-archive-55.avif"},{id:"archive-mobile-image-040",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076de82a7fee6a709b9505_cosco-archive-45.avif"},{id:"archive-mobile-image-041",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076de89e714bc46b571d68_cosco-archive-83.avif"},{id:"archive-mobile-image-042",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076de86c5b3049dde525b9_cosco-archive-84.avif"},{id:"archive-mobile-image-043",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076de8af19854065b59c2d_cosco-archive-81.avif"},{id:"archive-mobile-image-044",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076de744bba020b2d36bbf_cosco-archive-79.avif"},{id:"archive-mobile-image-045",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076de7925b642e45856e43_cosco-archive-71.avif"},{id:"archive-mobile-image-046",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076de7eabdeca3151a1a8d_cosco-archive-74.avif"},{id:"archive-mobile-image-047",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076de7fedc115462996d68_cosco-archive-76.avif"},{id:"archive-mobile-image-048",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076de7e02d9505305f4a82_cosco-archive-78.avif"},{id:"archive-mobile-image-049",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076de783eb3b81d3585001_cosco-archive-75.avif"},{id:"archive-mobile-image-050",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076de796f08def568bc855_cosco-archive-80.avif"},{id:"archive-mobile-image-051",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076de71ac3ba7124b3e0ad_cosco-archive-77.avif"},{id:"archive-mobile-image-052",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076de718905abc392280b4_cosco-archive-73.avif"},{id:"archive-mobile-image-053",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076de7f205e1e50505af2a_cosco-archive-56.avif"},{id:"archive-mobile-image-054",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076de7fa6875df889e1ea9_cosco-archive-69.avif"},{id:"archive-mobile-image-055",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076de783fc6e08aac37588_cosco-archive-57.avif"},{id:"archive-mobile-image-056",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076de72d0be33e59717b6e_cosco-archive-63.avif"},{id:"archive-mobile-image-057",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076de77e5fc505b9bf4e2a_cosco-archive-68.avif"},{id:"archive-mobile-image-058",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076de75b508b4ffc9b8a60_cosco-archive-44.avif"},{id:"archive-mobile-image-059",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076de75b508b4ffc9b8a5d_cosco-archive-59.avif"},{id:"archive-mobile-image-060",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076de71f4a5827fe6ca011_cosco-archive-6.avif"},{id:"archive-mobile-image-061",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076de72c7c4e086bdfe86b_cosco-archive-49.avif"},{id:"archive-mobile-image-062",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076de7637da0b05db959e0_cosco-archive-54.avif"},{id:"archive-mobile-image-063",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076de7f9d2a79222b023d6_cosco-archive-53.avif"},{id:"archive-mobile-image-064",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076de6180c4364fcb88131_cosco-archive-42.avif"},{id:"archive-mobile-image-065",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076de669261d0557db24f2_cosco-archive-61.avif"},{id:"archive-mobile-image-066",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076de66031dfaacaf6bd2d_cosco-archive-62.avif"},{id:"archive-mobile-image-067",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076de696b2ea520c783dd9_cosco-archive-26.avif"},{id:"archive-mobile-image-068",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076de6d1dd54727813ddcb_cosco-archive-27.avif"},{id:"archive-mobile-image-069",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076de67cd6438e3bbd0242_cosco-archive-40.avif"},{id:"archive-mobile-image-070",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076de63d343eacde823a37_cosco-archive-39.avif"},{id:"archive-mobile-image-071",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076de6ad50d9bd766757f0_cosco-archive-38.avif"},{id:"archive-mobile-image-072",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076de60fa10c5d62607433_cosco-archive-7.avif"},{id:"archive-mobile-image-073",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076de683eb3b81d3584fc9_cosco-archive-9.avif"},{id:"archive-mobile-image-074",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076de621ac2617e79f1211_cosco-archive-22.avif"},{id:"archive-mobile-image-075",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076de6f863f58737f20f1b_cosco-archive-24.avif"},{id:"archive-mobile-image-076",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076de60d3c837ca04f6f0a_cosco-archive-1.avif"},{id:"archive-mobile-image-077",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076de625d3d4f912d22073_cosco-archive-4.avif"},{id:"archive-mobile-image-078",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076de63ffc25050aedf1a4_cosco-archive-32.avif"},{id:"archive-mobile-image-079",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076de687ede58922159491_cosco-archive-2.avif"},{id:"archive-mobile-image-080",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076de67af118e819073724_cosco-archive-29.avif"},{id:"archive-mobile-image-081",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076de618905abc39228098_cosco-archive-25.avif"},{id:"archive-mobile-image-082",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076de6e20b5f65048e41c0_cosco-archive-23.avif"},{id:"archive-mobile-image-083",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076de6007b33fe8999590b_cosco-archive-21.avif"},{id:"archive-mobile-image-084",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076de63f5592f89dae8688_cosco-archive-10.avif"},{id:"archive-mobile-image-085",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076de64283f4085fc72faf_cosco-archive-34.avif"}];var sc="180",er={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2};var tg=0,sd=1,ig=2;var od=1,ng=2,Ji=3,Sn=0,ei=1,xi=2,Mn=0,Ir=1,ad=2,ld=3,cd=4,rg=5,jn=100,sg=101,og=102,ag=103,lg=104,cg=200,hg=201,ug=202,dg=203,Fl=204,Nl=205,fg=206,pg=207,mg=208,gg=209,vg=210,_g=211,yg=212,xg=213,bg=214,oc=0,ac=1,lc=2,Dr=3,cc=4,hc=5,uc=6,dc=7,hd=0,Sg=1,Mg=2,En=0,Eg=1,wg=2,Tg=3,Ag=4,Cg=5,Rg=6,Pg=7;var ud=300,Br=301,kr=302,fc=303,pc=304,ua=306,Ul=1e3,Yn=1001,Bl=1002,Ii=1003,Lg=1004;var da=1005;var Ut=1006,mc=1007;var Qi=1008;var en=1009,dd=1010,fd=1011,Vs=1012,gc=1013,tr=1014,tn=1015,Gs=1016,vc=1017,_c=1018,Ws=1020,pd=35902,md=35899,gd=1021,vd=1022,Di=1023,Is=1026,Xs=1027,_d=1028,yc=1029,yd=1030,xc=1031;var bc=1033,fa=33776,pa=33777,ma=33778,ga=33779,Sc=35840,Mc=35841,Ec=35842,wc=35843,Tc=36196,Ac=37492,Cc=37496,Rc=37808,Pc=37809,Lc=37810,Ic=37811,Dc=37812,Oc=37813,Fc=37814,Nc=37815,Uc=37816,Bc=37817,kc=37818,Hc=37819,zc=37820,Vc=37821,Gc=36492,Wc=36494,Xc=36495,qc=36283,Yc=36284,jc=36285,Zc=36286;var Xo=2300,kl=2301,Dl=2302,Ju=2400,Qu=2401,ed=2402;var Ig=3200,Dg=3201;var Og=0,Fg=1,wn="",Nt="srgb",Or="srgb-linear",qo="linear",tt="srgb";var Lr=7680;var td=519,Ng=512,Ug=513,Bg=514,xd=515,kg=516,Hg=517,zg=518,Vg=519,id=35044;var bd="300 es",Bi=2e3,Yo=2001;var Zi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let n=i[e];if(n!==void 0){let s=n.indexOf(t);s!==-1&&n.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let n=i.slice(0);for(let s=0,o=n.length;s<o;s++)n[s].call(this,e);e.target=null}}},zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Fm=1234567,Go=Math.PI/180,Ds=180/Math.PI;function qs(){let r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(zt[r&255]+zt[r>>8&255]+zt[r>>16&255]+zt[r>>24&255]+"-"+zt[e&255]+zt[e>>8&255]+"-"+zt[e>>16&15|64]+zt[e>>24&255]+"-"+zt[t&63|128]+zt[t>>8&255]+"-"+zt[t>>16&255]+zt[t>>24&255]+zt[i&255]+zt[i>>8&255]+zt[i>>16&255]+zt[i>>24&255]).toLowerCase()}function je(r,e,t){return Math.max(e,Math.min(t,r))}function Sd(r,e){return(r%e+e)%e}function vx(r,e,t,i,n){return i+(r-e)*(n-i)/(t-e)}function _x(r,e,t){return r!==e?(t-r)/(e-r):0}function Wo(r,e,t){return(1-t)*r+t*e}function yx(r,e,t,i){return Wo(r,e,1-Math.exp(-t*i))}function xx(r,e=1){return e-Math.abs(Sd(r,e*2)-e)}function bx(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function Sx(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function Mx(r,e){return r+Math.floor(Math.random()*(e-r+1))}function Ex(r,e){return r+Math.random()*(e-r)}function wx(r){return r*(.5-Math.random())}function Tx(r){r!==void 0&&(Fm=r);let e=Fm+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Ax(r){return r*Go}function Cx(r){return r*Ds}function Rx(r){return(r&r-1)===0&&r!==0}function Px(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Lx(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Ix(r,e,t,i,n){let s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+i)/2),h=o((e+i)/2),u=s((e-i)/2),d=o((e-i)/2),f=s((i-e)/2),_=o((i-e)/2);switch(n){case"XYX":r.set(a*h,l*u,l*d,a*c);break;case"YZY":r.set(l*d,a*h,l*u,a*c);break;case"ZXZ":r.set(l*u,l*d,a*h,a*c);break;case"XZX":r.set(a*h,l*_,l*f,a*c);break;case"YXY":r.set(l*f,a*h,l*_,a*c);break;case"ZYZ":r.set(l*_,l*f,a*h,a*c);break;default:}}function Ps(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Jt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}var $c={DEG2RAD:Go,RAD2DEG:Ds,generateUUID:qs,clamp:je,euclideanModulo:Sd,mapLinear:vx,inverseLerp:_x,lerp:Wo,damp:yx,pingpong:xx,smoothstep:bx,smootherstep:Sx,randInt:Mx,randFloat:Ex,randFloatSpread:wx,seededRandom:Tx,degToRad:Ax,radToDeg:Cx,isPowerOfTwo:Rx,ceilPowerOfTwo:Px,floorPowerOfTwo:Lx,setQuaternionFromProperEuler:Ix,normalize:Jt,denormalize:Ps},ze=class r{constructor(e=0,t=0){r.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6],this.y=n[1]*t+n[4]*i+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),n=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*n+e.x,this.y=s*n+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},vi=class{constructor(e=0,t=0,i=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=n}static slerpFlat(e,t,i,n,s,o,a){let l=i[n+0],c=i[n+1],h=i[n+2],u=i[n+3],d=s[o+0],f=s[o+1],_=s[o+2],g=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=_,e[t+3]=g;return}if(u!==g||l!==d||c!==f||h!==_){let m=1-a,p=l*d+c*f+h*_+u*g,S=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){let T=Math.sqrt(x),C=Math.atan2(T,p*S);m=Math.sin(m*C)/T,a=Math.sin(a*C)/T}let b=a*S;if(l=l*m+d*b,c=c*m+f*b,h=h*m+_*b,u=u*m+g*b,m===1-a){let T=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=T,c*=T,h*=T,u*=T}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,n,s,o){let a=i[n],l=i[n+1],c=i[n+2],h=i[n+3],u=s[o],d=s[o+1],f=s[o+2],_=s[o+3];return e[t]=a*_+h*u+l*f-c*d,e[t+1]=l*_+h*d+c*u-a*f,e[t+2]=c*_+h*f+a*d-l*u,e[t+3]=h*_-a*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,n){return this._x=e,this._y=t,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,n=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(n/2),u=a(s/2),d=l(i/2),f=l(n/2),_=l(s/2);switch(o){case"XYZ":this._x=d*h*u+c*f*_,this._y=c*f*u-d*h*_,this._z=c*h*_+d*f*u,this._w=c*h*u-d*f*_;break;case"YXZ":this._x=d*h*u+c*f*_,this._y=c*f*u-d*h*_,this._z=c*h*_-d*f*u,this._w=c*h*u+d*f*_;break;case"ZXY":this._x=d*h*u-c*f*_,this._y=c*f*u+d*h*_,this._z=c*h*_+d*f*u,this._w=c*h*u-d*f*_;break;case"ZYX":this._x=d*h*u-c*f*_,this._y=c*f*u+d*h*_,this._z=c*h*_-d*f*u,this._w=c*h*u+d*f*_;break;case"YZX":this._x=d*h*u+c*f*_,this._y=c*f*u+d*h*_,this._z=c*h*_-d*f*u,this._w=c*h*u-d*f*_;break;case"XZY":this._x=d*h*u-c*f*_,this._y=c*f*u-d*h*_,this._z=c*h*_+d*f*u,this._w=c*h*u+d*f*_;break;default:}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,n=Math.sin(i);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],n=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=i+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(o-n)*f}else if(i>a&&i>u){let f=2*Math.sqrt(1+i-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(n+o)/f,this._z=(s+c)/f}else if(a>u){let f=2*Math.sqrt(1+a-i-u);this._w=(s-c)/f,this._x=(n+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-i-a);this._w=(o-n)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(je(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let n=Math.min(1,t/i);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,n=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+o*a+n*c-s*l,this._y=n*h+o*l+s*a-i*c,this._z=s*h+o*c+i*l-n*a,this._w=o*h-i*a-n*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,n=this._y,s=this._z,o=this._w,a=o*e._w+i*e._x+n*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=n,this._z=s,this;let l=1-a*a;if(l<=Number.EPSILON){let f=1-t;return this._w=f*o+t*this._w,this._x=f*i+t*this._x,this._y=f*n+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=o*u+this._w*d,this._x=i*u+this._x*d,this._y=n*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(n*Math.sin(e),n*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},G=class r{constructor(e=0,t=0,i=0){r.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Nm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Nm.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,n=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*n,this.y=s[1]*t+s[4]*i+s[7]*n,this.z=s[2]*t+s[5]*i+s[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,n=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*n+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*n+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*n+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*n+s[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,n=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*n-a*i),h=2*(a*t-s*n),u=2*(s*i-o*t);return this.x=t+l*c+o*u-a*h,this.y=i+l*h+a*c-s*u,this.z=n+l*u+s*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,n=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*n,this.y=s[1]*t+s[5]*i+s[9]*n,this.z=s[2]*t+s[6]*i+s[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this.z=je(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this.z=je(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,n=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=n*l-s*a,this.y=s*o-i*l,this.z=i*a-n*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Lu.copy(this).projectOnVector(e),this.sub(Lu)}reflect(e){return this.sub(Lu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,n=this.z-e.z;return t*t+i*i+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let n=Math.sin(t)*e;return this.x=n*Math.sin(i),this.y=Math.cos(t)*e,this.z=n*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Lu=new G,Nm=new vi,ke=class r{constructor(e,t,i,n,s,o,a,l,c){r.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,n,s,o,a,l,c)}set(e,t,i,n,s,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=n,h[2]=a,h[3]=t,h[4]=s,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,n=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],f=i[5],_=i[8],g=n[0],m=n[3],p=n[6],S=n[1],x=n[4],b=n[7],T=n[2],C=n[5],L=n[8];return s[0]=o*g+a*S+l*T,s[3]=o*m+a*x+l*C,s[6]=o*p+a*b+l*L,s[1]=c*g+h*S+u*T,s[4]=c*m+h*x+u*C,s[7]=c*p+h*b+u*L,s[2]=d*g+f*S+_*T,s[5]=d*m+f*x+_*C,s[8]=d*p+f*b+_*L,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-i*s*h+i*a*l+n*s*c-n*o*l}invert(){let e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,d=a*l-h*s,f=c*s-o*l,_=t*u+i*d+n*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/_;return e[0]=u*g,e[1]=(n*c-h*i)*g,e[2]=(a*i-n*o)*g,e[3]=d*g,e[4]=(h*t-n*l)*g,e[5]=(n*s-a*t)*g,e[6]=f*g,e[7]=(i*l-c*t)*g,e[8]=(o*t-i*s)*g,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,n,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-n*c,n*l,-n*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Iu.makeScale(e,t)),this}rotate(e){return this.premultiply(Iu.makeRotation(-e)),this}translate(e,t){return this.premultiply(Iu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let n=0;n<9;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Iu=new ke;function Md(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Os(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Gg(){let r=Os("canvas");return r.style.display="block",r}var Um={};function Fs(r){r in Um||(Um[r]=!0)}function Wg(r,e,t){return new Promise(function(i,n){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:n();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}var Bm=new ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),km=new ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Dx(){let r={enabled:!0,workingColorSpace:Or,spaces:{},convert:function(n,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===tt&&(n.r=bn(n.r),n.g=bn(n.g),n.b=bn(n.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(n.applyMatrix3(this.spaces[s].toXYZ),n.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===tt&&(n.r=Ls(n.r),n.g=Ls(n.g),n.b=Ls(n.b))),n},workingToColorSpace:function(n,s){return this.convert(n,this.workingColorSpace,s)},colorSpaceToWorking:function(n,s){return this.convert(n,s,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===wn?qo:this.spaces[n].transfer},getToneMappingMode:function(n){return this.spaces[n].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(n,s=this.workingColorSpace){return n.fromArray(this.spaces[s].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,s,o){return n.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(n,s){return Fs("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(n,s)},toWorkingColorSpace:function(n,s){return Fs("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(n,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return r.define({[Or]:{primaries:e,whitePoint:i,transfer:qo,toXYZ:Bm,fromXYZ:km,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Nt},outputColorSpaceConfig:{drawingBufferColorSpace:Nt}},[Nt]:{primaries:e,whitePoint:i,transfer:tt,toXYZ:Bm,fromXYZ:km,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Nt}}}),r}var Ke=Dx();function bn(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Ls(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var vs,Hl=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{vs===void 0&&(vs=Os("canvas")),vs.width=e.width,vs.height=e.height;let n=vs.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),i=vs}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){let t=Os("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let n=i.getImageData(0,0,e.width,e.height),s=n.data;for(let o=0;o<s.length;o++)s[o]=bn(s[o]/255)*255;return i.putImageData(n,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(bn(t[i]/255)*255):t[i]=bn(t[i]);return{data:t,width:e.width,height:e.height}}else return e}},Ox=0,Ns=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ox++}),this.uuid=qs(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement!="undefined"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let s;if(Array.isArray(n)){s=[];for(let o=0,a=n.length;o<a;o++)n[o].isDataTexture?s.push(Du(n[o].image)):s.push(Du(n[o]))}else s=Du(n);i.url=s}return t||(e.images[this.uuid]=i),i}};function Du(r){return typeof HTMLImageElement!="undefined"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&r instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&r instanceof ImageBitmap?Hl.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:{}}var Fx=0,Ou=new G,Qt=class r extends Zi{constructor(e=r.DEFAULT_IMAGE,t=r.DEFAULT_MAPPING,i=Yn,n=Yn,s=Ut,o=Qi,a=Di,l=en,c=r.DEFAULT_ANISOTROPY,h=wn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Fx++}),this.uuid=qs(),this.name="",this.source=new Ns(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ze(0,0),this.repeat=new ze(1,1),this.center=new ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ou).x}get height(){return this.source.getSize(Ou).y}get depth(){return this.source.getSize(Ou).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0)continue;let n=this[t];n!==void 0&&(n&&i&&n.isVector2&&i.isVector2||n&&i&&n.isVector3&&i.isVector3||n&&i&&n.isMatrix3&&i.isMatrix3?n.copy(i):this[t]=i)}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ud)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ul:e.x=e.x-Math.floor(e.x);break;case Yn:e.x=e.x<0?0:1;break;case Bl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ul:e.y=e.y-Math.floor(e.y);break;case Yn:e.y=e.y<0?0:1;break;case Bl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Qt.DEFAULT_IMAGE=null;Qt.DEFAULT_MAPPING=ud;Qt.DEFAULT_ANISOTROPY=1;var bt=class r{constructor(e=0,t=0,i=0,n=1){r.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,n=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*n+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*n+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*n+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*n+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,n,s,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],_=l[9],g=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+g)<.1&&Math.abs(_+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let x=(c+1)/2,b=(f+1)/2,T=(p+1)/2,C=(h+d)/4,L=(u+g)/4,P=(_+m)/4;return x>b&&x>T?x<.01?(i=0,n=.707106781,s=.707106781):(i=Math.sqrt(x),n=C/i,s=L/i):b>T?b<.01?(i=.707106781,n=0,s=.707106781):(n=Math.sqrt(b),i=C/n,s=P/n):T<.01?(i=.707106781,n=.707106781,s=0):(s=Math.sqrt(T),i=L/s,n=P/s),this.set(i,n,s,t),this}let S=Math.sqrt((m-_)*(m-_)+(u-g)*(u-g)+(d-h)*(d-h));return Math.abs(S)<.001&&(S=1),this.x=(m-_)/S,this.y=(u-g)/S,this.z=(d-h)/S,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this.z=je(this.z,e.z,t.z),this.w=je(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this.z=je(this.z,e,t),this.w=je(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},zl=class extends Zi{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ut,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new bt(0,0,e,t),this.scissorTest=!1,this.viewport=new bt(0,0,e,t);let n={width:e,height:t,depth:i.depth},s=new Qt(n);this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){let t={minFilter:Ut,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let n=0,s=this.textures.length;n<s;n++)this.textures[n].image.width=e,this.textures[n].image.height=t,this.textures[n].image.depth=i,this.textures[n].isArrayTexture=this.textures[n].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new Ns(n)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},$i=class extends zl{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},jo=class extends Qt{constructor(e=null,t=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=Ii,this.minFilter=Ii,this.wrapR=Yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Vl=class extends Qt{constructor(e=null,t=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=Ii,this.minFilter=Ii,this.wrapR=Yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Zn=class{constructor(e=new G(1/0,1/0,1/0),t=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Fi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Fi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Fi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Fi):Fi.fromBufferAttribute(s,o),Fi.applyMatrix4(e.matrixWorld),this.expandByPoint(Fi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ml.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ml.copy(i.boundingBox)),ml.applyMatrix4(e.matrixWorld),this.union(ml)}let n=e.children;for(let s=0,o=n.length;s<o;s++)this.expandByObject(n[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Fi),Fi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ko),gl.subVectors(this.max,ko),_s.subVectors(e.a,ko),ys.subVectors(e.b,ko),xs.subVectors(e.c,ko),Hn.subVectors(ys,_s),zn.subVectors(xs,ys),Ar.subVectors(_s,xs);let t=[0,-Hn.z,Hn.y,0,-zn.z,zn.y,0,-Ar.z,Ar.y,Hn.z,0,-Hn.x,zn.z,0,-zn.x,Ar.z,0,-Ar.x,-Hn.y,Hn.x,0,-zn.y,zn.x,0,-Ar.y,Ar.x,0];return!Fu(t,_s,ys,xs,gl)||(t=[1,0,0,0,1,0,0,0,1],!Fu(t,_s,ys,xs,gl))?!1:(vl.crossVectors(Hn,zn),t=[vl.x,vl.y,vl.z],Fu(t,_s,ys,xs,gl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Fi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Fi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(mn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),mn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),mn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),mn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),mn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),mn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),mn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),mn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(mn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},mn=[new G,new G,new G,new G,new G,new G,new G,new G],Fi=new G,ml=new Zn,_s=new G,ys=new G,xs=new G,Hn=new G,zn=new G,Ar=new G,ko=new G,gl=new G,vl=new G,Cr=new G;function Fu(r,e,t,i,n){for(let s=0,o=r.length-3;s<=o;s+=3){Cr.fromArray(r,s);let a=n.x*Math.abs(Cr.x)+n.y*Math.abs(Cr.y)+n.z*Math.abs(Cr.z),l=e.dot(Cr),c=t.dot(Cr),h=i.dot(Cr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Nx=new Zn,Ho=new G,Nu=new G,Us=class{constructor(e=new G,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Nx.setFromPoints(e).getCenter(i);let n=0;for(let s=0,o=e.length;s<o;s++)n=Math.max(n,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ho.subVectors(e,this.center);let t=Ho.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),n=(i-this.radius)*.5;this.center.addScaledVector(Ho,n/i),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Nu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ho.copy(e.center).add(Nu)),this.expandByPoint(Ho.copy(e.center).sub(Nu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},gn=new G,Uu=new G,_l=new G,Vn=new G,Bu=new G,yl=new G,ku=new G,Zo=class{constructor(e=new G,t=new G(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,gn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=gn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(gn.copy(this.origin).addScaledVector(this.direction,t),gn.distanceToSquared(e))}distanceSqToSegment(e,t,i,n){Uu.copy(e).add(t).multiplyScalar(.5),_l.copy(t).sub(e).normalize(),Vn.copy(this.origin).sub(Uu);let s=e.distanceTo(t)*.5,o=-this.direction.dot(_l),a=Vn.dot(this.direction),l=-Vn.dot(_l),c=Vn.lengthSq(),h=Math.abs(1-o*o),u,d,f,_;if(h>0)if(u=o*l-a,d=o*a-l,_=s*h,u>=0)if(d>=-_)if(d<=_){let g=1/h;u*=g,d*=g,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-_?(u=Math.max(0,-(-o*s+a)),d=u>0?-s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c):d<=_?(u=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(u=Math.max(0,-(o*s+a)),d=u>0?s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c);else d=o>0?-s:s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),n&&n.copy(Uu).addScaledVector(_l,d),f}intersectSphere(e,t){gn.subVectors(e.center,this.origin);let i=gn.dot(this.direction),n=gn.dot(gn)-i*i,s=e.radius*e.radius;if(n>s)return null;let o=Math.sqrt(s-n),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,n,s,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,n=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,n=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),i>o||s>n||((s>i||isNaN(i))&&(i=s),(o<n||isNaN(n))&&(n=o),u>=0?(a=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),i>l||a>n)||((a>i||i!==i)&&(i=a),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,t)}intersectsBox(e){return this.intersectBox(e,gn)!==null}intersectTriangle(e,t,i,n,s){Bu.subVectors(t,e),yl.subVectors(i,e),ku.crossVectors(Bu,yl);let o=this.direction.dot(ku),a;if(o>0){if(n)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Vn.subVectors(this.origin,e);let l=a*this.direction.dot(yl.crossVectors(Vn,yl));if(l<0)return null;let c=a*this.direction.dot(Bu.cross(Vn));if(c<0||l+c>o)return null;let h=-a*Vn.dot(ku);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},At=class r{constructor(e,t,i,n,s,o,a,l,c,h,u,d,f,_,g,m){r.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,n,s,o,a,l,c,h,u,d,f,_,g,m)}set(e,t,i,n,s,o,a,l,c,h,u,d,f,_,g,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=n,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=_,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new r().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,n=1/bs.setFromMatrixColumn(e,0).length(),s=1/bs.setFromMatrixColumn(e,1).length(),o=1/bs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*n,t[1]=i[1]*n,t[2]=i[2]*n,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,n=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(n),c=Math.sin(n),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){let d=o*h,f=o*u,_=a*h,g=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+_*c,t[5]=d-g*c,t[9]=-a*l,t[2]=g-d*c,t[6]=_+f*c,t[10]=o*l}else if(e.order==="YXZ"){let d=l*h,f=l*u,_=c*h,g=c*u;t[0]=d+g*a,t[4]=_*a-f,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-_,t[6]=g+d*a,t[10]=o*l}else if(e.order==="ZXY"){let d=l*h,f=l*u,_=c*h,g=c*u;t[0]=d-g*a,t[4]=-o*u,t[8]=_+f*a,t[1]=f+_*a,t[5]=o*h,t[9]=g-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let d=o*h,f=o*u,_=a*h,g=a*u;t[0]=l*h,t[4]=_*c-f,t[8]=d*c+g,t[1]=l*u,t[5]=g*c+d,t[9]=f*c-_,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let d=o*l,f=o*c,_=a*l,g=a*c;t[0]=l*h,t[4]=g-d*u,t[8]=_*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=f*u+_,t[10]=d-g*u}else if(e.order==="XZY"){let d=o*l,f=o*c,_=a*l,g=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+g,t[5]=o*h,t[9]=f*u-_,t[2]=_*u-f,t[6]=a*h,t[10]=g*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ux,e,Bx)}lookAt(e,t,i){let n=this.elements;return pi.subVectors(e,t),pi.lengthSq()===0&&(pi.z=1),pi.normalize(),Gn.crossVectors(i,pi),Gn.lengthSq()===0&&(Math.abs(i.z)===1?pi.x+=1e-4:pi.z+=1e-4,pi.normalize(),Gn.crossVectors(i,pi)),Gn.normalize(),xl.crossVectors(pi,Gn),n[0]=Gn.x,n[4]=xl.x,n[8]=pi.x,n[1]=Gn.y,n[5]=xl.y,n[9]=pi.y,n[2]=Gn.z,n[6]=xl.z,n[10]=pi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,n=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],f=i[13],_=i[2],g=i[6],m=i[10],p=i[14],S=i[3],x=i[7],b=i[11],T=i[15],C=n[0],L=n[4],P=n[8],M=n[12],E=n[1],O=n[5],V=n[9],W=n[13],$=n[2],K=n[6],q=n[10],oe=n[14],X=n[3],fe=n[7],ye=n[11],we=n[15];return s[0]=o*C+a*E+l*$+c*X,s[4]=o*L+a*O+l*K+c*fe,s[8]=o*P+a*V+l*q+c*ye,s[12]=o*M+a*W+l*oe+c*we,s[1]=h*C+u*E+d*$+f*X,s[5]=h*L+u*O+d*K+f*fe,s[9]=h*P+u*V+d*q+f*ye,s[13]=h*M+u*W+d*oe+f*we,s[2]=_*C+g*E+m*$+p*X,s[6]=_*L+g*O+m*K+p*fe,s[10]=_*P+g*V+m*q+p*ye,s[14]=_*M+g*W+m*oe+p*we,s[3]=S*C+x*E+b*$+T*X,s[7]=S*L+x*O+b*K+T*fe,s[11]=S*P+x*V+b*q+T*ye,s[15]=S*M+x*W+b*oe+T*we,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],n=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],_=e[3],g=e[7],m=e[11],p=e[15];return _*(+s*l*u-n*c*u-s*a*d+i*c*d+n*a*f-i*l*f)+g*(+t*l*f-t*c*d+s*o*d-n*o*f+n*c*h-s*l*h)+m*(+t*c*u-t*a*f-s*o*u+i*o*f+s*a*h-i*c*h)+p*(-n*a*h-t*l*u+t*a*d+n*o*u-i*o*d+i*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],_=e[12],g=e[13],m=e[14],p=e[15],S=u*m*c-g*d*c+g*l*f-a*m*f-u*l*p+a*d*p,x=_*d*c-h*m*c-_*l*f+o*m*f+h*l*p-o*d*p,b=h*g*c-_*u*c+_*a*f-o*g*f-h*a*p+o*u*p,T=_*u*l-h*g*l-_*a*d+o*g*d+h*a*m-o*u*m,C=t*S+i*x+n*b+s*T;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let L=1/C;return e[0]=S*L,e[1]=(g*d*s-u*m*s-g*n*f+i*m*f+u*n*p-i*d*p)*L,e[2]=(a*m*s-g*l*s+g*n*c-i*m*c-a*n*p+i*l*p)*L,e[3]=(u*l*s-a*d*s-u*n*c+i*d*c+a*n*f-i*l*f)*L,e[4]=x*L,e[5]=(h*m*s-_*d*s+_*n*f-t*m*f-h*n*p+t*d*p)*L,e[6]=(_*l*s-o*m*s-_*n*c+t*m*c+o*n*p-t*l*p)*L,e[7]=(o*d*s-h*l*s+h*n*c-t*d*c-o*n*f+t*l*f)*L,e[8]=b*L,e[9]=(_*u*s-h*g*s-_*i*f+t*g*f+h*i*p-t*u*p)*L,e[10]=(o*g*s-_*a*s+_*i*c-t*g*c-o*i*p+t*a*p)*L,e[11]=(h*a*s-o*u*s-h*i*c+t*u*c+o*i*f-t*a*f)*L,e[12]=T*L,e[13]=(h*g*n-_*u*n+_*i*d-t*g*d-h*i*m+t*u*m)*L,e[14]=(_*a*n-o*g*n-_*i*l+t*g*l+o*i*m-t*a*m)*L,e[15]=(o*u*n-h*a*n+h*i*l-t*u*l-o*i*d+t*a*d)*L,this}scale(e){let t=this.elements,i=e.x,n=e.y,s=e.z;return t[0]*=i,t[4]*=n,t[8]*=s,t[1]*=i,t[5]*=n,t[9]*=s,t[2]*=i,t[6]*=n,t[10]*=s,t[3]*=i,t[7]*=n,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,n))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),n=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,h=s*a;return this.set(c*o+i,c*a-n*l,c*l+n*a,0,c*a+n*l,h*a+i,h*l-n*o,0,c*l-n*a,h*l+n*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,n,s,o){return this.set(1,i,s,0,e,1,o,0,t,n,1,0,0,0,0,1),this}compose(e,t,i){let n=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,h=o+o,u=a+a,d=s*c,f=s*h,_=s*u,g=o*h,m=o*u,p=a*u,S=l*c,x=l*h,b=l*u,T=i.x,C=i.y,L=i.z;return n[0]=(1-(g+p))*T,n[1]=(f+b)*T,n[2]=(_-x)*T,n[3]=0,n[4]=(f-b)*C,n[5]=(1-(d+p))*C,n[6]=(m+S)*C,n[7]=0,n[8]=(_+x)*L,n[9]=(m-S)*L,n[10]=(1-(d+g))*L,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,i){let n=this.elements,s=bs.set(n[0],n[1],n[2]).length(),o=bs.set(n[4],n[5],n[6]).length(),a=bs.set(n[8],n[9],n[10]).length();this.determinant()<0&&(s=-s),e.x=n[12],e.y=n[13],e.z=n[14],Ni.copy(this);let c=1/s,h=1/o,u=1/a;return Ni.elements[0]*=c,Ni.elements[1]*=c,Ni.elements[2]*=c,Ni.elements[4]*=h,Ni.elements[5]*=h,Ni.elements[6]*=h,Ni.elements[8]*=u,Ni.elements[9]*=u,Ni.elements[10]*=u,t.setFromRotationMatrix(Ni),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,n,s,o,a=Bi,l=!1){let c=this.elements,h=2*s/(t-e),u=2*s/(i-n),d=(t+e)/(t-e),f=(i+n)/(i-n),_,g;if(l)_=s/(o-s),g=o*s/(o-s);else if(a===Bi)_=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Yo)_=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,n,s,o,a=Bi,l=!1){let c=this.elements,h=2/(t-e),u=2/(i-n),d=-(t+e)/(t-e),f=-(i+n)/(i-n),_,g;if(l)_=1/(o-s),g=o/(o-s);else if(a===Bi)_=-2/(o-s),g=-(o+s)/(o-s);else if(a===Yo)_=-1/(o-s),g=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=_,c[14]=g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let n=0;n<16;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},bs=new G,Ni=new At,Ux=new G(0,0,0),Bx=new G(1,1,1),Gn=new G,xl=new G,pi=new G,Hm=new At,zm=new vi,Ki=class r{constructor(e=0,t=0,i=0,n=r.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,n=this._order){return this._x=e,this._y=t,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let n=e.elements,s=n[0],o=n[4],a=n[8],l=n[1],c=n[5],h=n[9],u=n[2],d=n[6],f=n[10];switch(t){case"XYZ":this._y=Math.asin(je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-je(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(je(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-je(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Hm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Hm,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return zm.setFromEuler(this),this.setFromQuaternion(zm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ki.DEFAULT_ORDER="XYZ";var Bs=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},kx=0,Vm=new G,Ss=new vi,vn=new At,bl=new G,zo=new G,Hx=new G,zx=new vi,Gm=new G(1,0,0),Wm=new G(0,1,0),Xm=new G(0,0,1),qm={type:"added"},Vx={type:"removed"},Ms={type:"childadded",child:null},Hu={type:"childremoved",child:null},_i=class r extends Zi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:kx++}),this.uuid=qs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let e=new G,t=new Ki,i=new vi,n=new G(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new At},normalMatrix:{value:new ke}}),this.matrix=new At,this.matrixWorld=new At,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Bs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ss.setFromAxisAngle(e,t),this.quaternion.multiply(Ss),this}rotateOnWorldAxis(e,t){return Ss.setFromAxisAngle(e,t),this.quaternion.premultiply(Ss),this}rotateX(e){return this.rotateOnAxis(Gm,e)}rotateY(e){return this.rotateOnAxis(Wm,e)}rotateZ(e){return this.rotateOnAxis(Xm,e)}translateOnAxis(e,t){return Vm.copy(e).applyQuaternion(this.quaternion),this.position.add(Vm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Gm,e)}translateY(e){return this.translateOnAxis(Wm,e)}translateZ(e){return this.translateOnAxis(Xm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(vn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?bl.copy(e):bl.set(e,t,i);let n=this.parent;this.updateWorldMatrix(!0,!1),zo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vn.lookAt(zo,bl,this.up):vn.lookAt(bl,zo,this.up),this.quaternion.setFromRotationMatrix(vn),n&&(vn.extractRotation(n.matrixWorld),Ss.setFromRotationMatrix(vn),this.quaternion.premultiply(Ss.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?this:(e&&e.isObject3D&&(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(qm),Ms.child=e,this.dispatchEvent(Ms),Ms.child=null),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Vx),Hu.child=e,this.dispatchEvent(Hu),Hu.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),vn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),vn.multiply(e.parent.matrixWorld)),e.applyMatrix4(vn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(qm),Ms.child=e,this.dispatchEvent(Ms),Ms.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,n=this.children.length;i<n;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let n=this.children;for(let s=0,o=n.length;s<o;s++)n[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zo,e,Hx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zo,zx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let n=this.children;for(let s=0,o=n.length;s<o;s++)n[s].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),n.instanceInfo=this._instanceInfo.map(a=>({...a})),n.availableInstanceIds=this._availableInstanceIds.slice(),n.availableGeometryIds=this._availableGeometryIds.slice(),n.nextIndexStart=this._nextIndexStart,n.nextVertexStart=this._nextVertexStart,n.geometryCount=this._geometryCount,n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.matricesTexture=this._matricesTexture.toJSON(e),n.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(n.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(n.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=s(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));n.material=a}else n.material=s(e.materials,this.material);if(this.children.length>0){n.children=[];for(let a=0;a<this.children.length;a++)n.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];n.animations.push(s(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),_.length>0&&(i.nodes=_)}return i.object=n,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let n=e.children[i];this.add(n.clone())}return this}};_i.DEFAULT_UP=new G(0,1,0);_i.DEFAULT_MATRIX_AUTO_UPDATE=!0;_i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ui=new G,_n=new G,zu=new G,yn=new G,Es=new G,ws=new G,Ym=new G,Vu=new G,Gu=new G,Wu=new G,Xu=new bt,qu=new bt,Yu=new bt,qn=class r{constructor(e=new G,t=new G,i=new G){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,n){n.subVectors(i,t),Ui.subVectors(e,t),n.cross(Ui);let s=n.lengthSq();return s>0?n.multiplyScalar(1/Math.sqrt(s)):n.set(0,0,0)}static getBarycoord(e,t,i,n,s){Ui.subVectors(n,t),_n.subVectors(i,t),zu.subVectors(e,t);let o=Ui.dot(Ui),a=Ui.dot(_n),l=Ui.dot(zu),c=_n.dot(_n),h=_n.dot(zu),u=o*c-a*a;if(u===0)return s.set(0,0,0),null;let d=1/u,f=(c*l-a*h)*d,_=(o*h-a*l)*d;return s.set(1-f-_,_,f)}static containsPoint(e,t,i,n){return this.getBarycoord(e,t,i,n,yn)===null?!1:yn.x>=0&&yn.y>=0&&yn.x+yn.y<=1}static getInterpolation(e,t,i,n,s,o,a,l){return this.getBarycoord(e,t,i,n,yn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,yn.x),l.addScaledVector(o,yn.y),l.addScaledVector(a,yn.z),l)}static getInterpolatedAttribute(e,t,i,n,s,o){return Xu.setScalar(0),qu.setScalar(0),Yu.setScalar(0),Xu.fromBufferAttribute(e,t),qu.fromBufferAttribute(e,i),Yu.fromBufferAttribute(e,n),o.setScalar(0),o.addScaledVector(Xu,s.x),o.addScaledVector(qu,s.y),o.addScaledVector(Yu,s.z),o}static isFrontFacing(e,t,i,n){return Ui.subVectors(i,t),_n.subVectors(e,t),Ui.cross(_n).dot(n)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,n){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,i,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ui.subVectors(this.c,this.b),_n.subVectors(this.a,this.b),Ui.cross(_n).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return r.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return r.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,n,s){return r.getInterpolation(e,this.a,this.b,this.c,t,i,n,s)}containsPoint(e){return r.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return r.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,n=this.b,s=this.c,o,a;Es.subVectors(n,i),ws.subVectors(s,i),Vu.subVectors(e,i);let l=Es.dot(Vu),c=ws.dot(Vu);if(l<=0&&c<=0)return t.copy(i);Gu.subVectors(e,n);let h=Es.dot(Gu),u=ws.dot(Gu);if(h>=0&&u<=h)return t.copy(n);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(i).addScaledVector(Es,o);Wu.subVectors(e,s);let f=Es.dot(Wu),_=ws.dot(Wu);if(_>=0&&f<=_)return t.copy(s);let g=f*c-l*_;if(g<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(i).addScaledVector(ws,a);let m=h*_-f*u;if(m<=0&&u-h>=0&&f-_>=0)return Ym.subVectors(s,n),a=(u-h)/(u-h+(f-_)),t.copy(n).addScaledVector(Ym,a);let p=1/(m+g+d);return o=g*p,a=d*p,t.copy(i).addScaledVector(Es,o).addScaledVector(ws,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Xg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wn={h:0,s:0,l:0},Sl={h:0,s:0,l:0};function ju(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}var $e=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Nt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ke.colorSpaceToWorking(this,t),this}setRGB(e,t,i,n=Ke.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ke.colorSpaceToWorking(this,n),this}setHSL(e,t,i,n=Ke.workingColorSpace){if(e=Sd(e,1),t=je(t,0,1),i=je(i,0,1),t===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=ju(o,s,e+1/3),this.g=ju(o,s,e),this.b=ju(o,s,e-1/3)}return Ke.colorSpaceToWorking(this,n),this}setStyle(e,t=Nt){function i(s){s!==void 0&&parseFloat(s)<1}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=n[1],a=n[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=n[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Nt){let i=Xg[e.toLowerCase()];return i!==void 0&&this.setHex(i,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=bn(e.r),this.g=bn(e.g),this.b=bn(e.b),this}copyLinearToSRGB(e){return this.r=Ls(e.r),this.g=Ls(e.g),this.b=Ls(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Nt){return Ke.workingToColorSpace(Vt.copy(this),e),Math.round(je(Vt.r*255,0,255))*65536+Math.round(je(Vt.g*255,0,255))*256+Math.round(je(Vt.b*255,0,255))}getHexString(e=Nt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ke.workingColorSpace){Ke.workingToColorSpace(Vt.copy(this),t);let i=Vt.r,n=Vt.g,s=Vt.b,o=Math.max(i,n,s),a=Math.min(i,n,s),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case i:l=(n-s)/u+(n<s?6:0);break;case n:l=(s-i)/u+2;break;case s:l=(i-n)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Ke.workingColorSpace){return Ke.workingToColorSpace(Vt.copy(this),t),e.r=Vt.r,e.g=Vt.g,e.b=Vt.b,e}getStyle(e=Nt){Ke.workingToColorSpace(Vt.copy(this),e);let t=Vt.r,i=Vt.g,n=Vt.b;return e!==Nt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(e,t,i){return this.getHSL(Wn),this.setHSL(Wn.h+e,Wn.s+t,Wn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Wn),e.getHSL(Sl);let i=Wo(Wn.h,Sl.h,t),n=Wo(Wn.s,Sl.s,t),s=Wo(Wn.l,Sl.l,t);return this.setHSL(i,n,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,n=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*n,this.g=s[1]*t+s[4]*i+s[7]*n,this.b=s[2]*t+s[5]*i+s[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Vt=new $e;$e.NAMES=Xg;var Gx=0,Fr=class extends Zi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Gx++}),this.uuid=qs(),this.name="",this.type="Material",this.blending=Ir,this.side=Sn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Fl,this.blendDst=Nl,this.blendEquation=jn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $e(0,0,0),this.blendAlpha=0,this.depthFunc=Dr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=td,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Lr,this.stencilZFail=Lr,this.stencilZPass=Lr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0)continue;let n=this[t];n!==void 0&&(n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[t]=i)}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ir&&(i.blending=this.blending),this.side!==Sn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Fl&&(i.blendSrc=this.blendSrc),this.blendDst!==Nl&&(i.blendDst=this.blendDst),this.blendEquation!==jn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Dr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==td&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Lr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Lr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Lr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(t){let s=n(e.textures),o=n(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let n=t.length;i=new Array(n);for(let s=0;s!==n;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},$n=class extends Fr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ki,this.combine=hd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Tt=new G,Ml=new ze,Wx=0,gi=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Wx++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=id,this.updateRanges=[],this.gpuType=tn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let n=0,s=this.itemSize;n<s;n++)this.array[e+n]=t.array[i+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ml.fromBufferAttribute(this,t),Ml.applyMatrix3(e),this.setXY(t,Ml.x,Ml.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix3(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix4(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.applyNormalMatrix(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.transformDirection(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ps(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Jt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ps(t,this.array)),t}setX(e,t){return this.normalized&&(t=Jt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ps(t,this.array)),t}setY(e,t){return this.normalized&&(t=Jt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ps(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Jt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ps(t,this.array)),t}setW(e,t){return this.normalized&&(t=Jt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Jt(t,this.array),i=Jt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,n){return e*=this.itemSize,this.normalized&&(t=Jt(t,this.array),i=Jt(i,this.array),n=Jt(n,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this}setXYZW(e,t,i,n,s){return e*=this.itemSize,this.normalized&&(t=Jt(t,this.array),i=Jt(i,this.array),n=Jt(n,this.array),s=Jt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==id&&(e.usage=this.usage),e}};var $o=class extends gi{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Ko=class extends gi{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var ji=class extends gi{constructor(e,t,i){super(new Float32Array(e),t,i)}},Xx=0,Li=new At,Zu=new _i,Ts=new G,mi=new Zn,Vo=new Zn,Dt=new G,Kn=class r extends Zi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Xx++}),this.uuid=qs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Md(e)?Ko:$o)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new ke().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}let n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Li.makeRotationFromQuaternion(e),this.applyMatrix4(Li),this}rotateX(e){return Li.makeRotationX(e),this.applyMatrix4(Li),this}rotateY(e){return Li.makeRotationY(e),this.applyMatrix4(Li),this}rotateZ(e){return Li.makeRotationZ(e),this.applyMatrix4(Li),this}translate(e,t,i){return Li.makeTranslation(e,t,i),this.applyMatrix4(Li),this}scale(e,t,i){return Li.makeScale(e,t,i),this.applyMatrix4(Li),this}lookAt(e){return Zu.lookAt(e),Zu.updateMatrix(),this.applyMatrix4(Zu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ts).negate(),this.translate(Ts.x,Ts.y,Ts.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let n=0,s=e.length;n<s;n++){let o=e[n];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ji(i,3))}else{let i=Math.min(e.length,t.count);for(let n=0;n<i;n++){let s=e[n];t.setXYZ(n,s.x,s.y,s.z||0)}e.length>t.count,t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Zn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,n=t.length;i<n;i++){let s=t[i];mi.setFromBufferAttribute(s),this.morphTargetsRelative?(Dt.addVectors(this.boundingBox.min,mi.min),this.boundingBox.expandByPoint(Dt),Dt.addVectors(this.boundingBox.max,mi.max),this.boundingBox.expandByPoint(Dt)):(this.boundingBox.expandByPoint(mi.min),this.boundingBox.expandByPoint(mi.max))}}else this.boundingBox.makeEmpty();isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Us);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){this.boundingSphere.set(new G,1/0);return}if(e){let i=this.boundingSphere.center;if(mi.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];Vo.setFromBufferAttribute(a),this.morphTargetsRelative?(Dt.addVectors(mi.min,Vo.min),mi.expandByPoint(Dt),Dt.addVectors(mi.max,Vo.max),mi.expandByPoint(Dt)):(mi.expandByPoint(Vo.min),mi.expandByPoint(Vo.max))}mi.getCenter(i);let n=0;for(let s=0,o=e.count;s<o;s++)Dt.fromBufferAttribute(e,s),n=Math.max(n,i.distanceToSquared(Dt));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Dt.fromBufferAttribute(a,c),l&&(Ts.fromBufferAttribute(e,c),Dt.add(Ts)),n=Math.max(n,i.distanceToSquared(Dt))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0)return;let i=t.position,n=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new gi(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<i.count;P++)a[P]=new G,l[P]=new G;let c=new G,h=new G,u=new G,d=new ze,f=new ze,_=new ze,g=new G,m=new G;function p(P,M,E){c.fromBufferAttribute(i,P),h.fromBufferAttribute(i,M),u.fromBufferAttribute(i,E),d.fromBufferAttribute(s,P),f.fromBufferAttribute(s,M),_.fromBufferAttribute(s,E),h.sub(c),u.sub(c),f.sub(d),_.sub(d);let O=1/(f.x*_.y-_.x*f.y);isFinite(O)&&(g.copy(h).multiplyScalar(_.y).addScaledVector(u,-f.y).multiplyScalar(O),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-_.x).multiplyScalar(O),a[P].add(g),a[M].add(g),a[E].add(g),l[P].add(m),l[M].add(m),l[E].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let P=0,M=S.length;P<M;++P){let E=S[P],O=E.start,V=E.count;for(let W=O,$=O+V;W<$;W+=3)p(e.getX(W+0),e.getX(W+1),e.getX(W+2))}let x=new G,b=new G,T=new G,C=new G;function L(P){T.fromBufferAttribute(n,P),C.copy(T);let M=a[P];x.copy(M),x.sub(T.multiplyScalar(T.dot(M))).normalize(),b.crossVectors(C,M);let O=b.dot(l[P])<0?-1:1;o.setXYZW(P,x.x,x.y,x.z,O)}for(let P=0,M=S.length;P<M;++P){let E=S[P],O=E.start,V=E.count;for(let W=O,$=O+V;W<$;W+=3)L(e.getX(W+0)),L(e.getX(W+1)),L(e.getX(W+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new gi(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);let n=new G,s=new G,o=new G,a=new G,l=new G,c=new G,h=new G,u=new G;if(e)for(let d=0,f=e.count;d<f;d+=3){let _=e.getX(d+0),g=e.getX(d+1),m=e.getX(d+2);n.fromBufferAttribute(t,_),s.fromBufferAttribute(t,g),o.fromBufferAttribute(t,m),h.subVectors(o,s),u.subVectors(n,s),h.cross(u),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,g),c.fromBufferAttribute(i,m),a.add(h),l.add(h),c.add(h),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)n.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,s),u.subVectors(n,s),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Dt.fromBufferAttribute(e,t),Dt.normalize(),e.setXYZ(t,Dt.x,Dt.y,Dt.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h),f=0,_=0;for(let g=0,m=l.length;g<m;g++){a.isInterleavedBufferAttribute?f=l[g]*a.data.stride+a.offset:f=l[g]*h;for(let p=0;p<h;p++)d[_++]=c[f++]}return new gi(d,h,u)}if(this.index===null)return this;let t=new r,i=this.index.array,n=this.attributes;for(let a in n){let l=n[a],c=e(l,i);t.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=e(d,i);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let n={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(n[l]=h,s=!0)}s&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let n=e.attributes;for(let c in n){let h=n[c];this.setAttribute(c,h.clone(t))}let s=e.morphAttributes;for(let c in s){let h=[],u=s[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},jm=new At,Rr=new Zo,El=new Us,Zm=new G,wl=new G,Tl=new G,Al=new G,$u=new G,Cl=new G,$m=new G,Rl=new G,li=class extends _i{constructor(e=new Kn,t=new $n){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=n.length;s<o;s++){let a=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let i=this.geometry,n=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(n,e);let a=this.morphTargetInfluences;if(s&&a){Cl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=a[l],u=s[l];h!==0&&($u.fromBufferAttribute(u,e),o?Cl.addScaledVector($u,h):Cl.addScaledVector($u.sub(t),h))}t.add(Cl)}return t}raycast(e,t){let i=this.geometry,n=this.material,s=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),El.copy(i.boundingSphere),El.applyMatrix4(s),Rr.copy(e.ray).recast(e.near),!(El.containsPoint(Rr.origin)===!1&&(Rr.intersectSphere(El,Zm)===null||Rr.origin.distanceToSquared(Zm)>(e.far-e.near)**2))&&(jm.copy(s).invert(),Rr.copy(e.ray).applyMatrix4(jm),!(i.boundingBox!==null&&Rr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Rr)))}_computeIntersections(e,t,i){let n,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,g=d.length;_<g;_++){let m=d[_],p=o[m.materialIndex],S=Math.max(m.start,f.start),x=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let b=S,T=x;b<T;b+=3){let C=a.getX(b),L=a.getX(b+1),P=a.getX(b+2);n=Pl(this,p,e,i,c,h,u,C,L,P),n&&(n.faceIndex=Math.floor(b/3),n.face.materialIndex=m.materialIndex,t.push(n))}}else{let _=Math.max(0,f.start),g=Math.min(a.count,f.start+f.count);for(let m=_,p=g;m<p;m+=3){let S=a.getX(m),x=a.getX(m+1),b=a.getX(m+2);n=Pl(this,o,e,i,c,h,u,S,x,b),n&&(n.faceIndex=Math.floor(m/3),t.push(n))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,g=d.length;_<g;_++){let m=d[_],p=o[m.materialIndex],S=Math.max(m.start,f.start),x=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let b=S,T=x;b<T;b+=3){let C=b,L=b+1,P=b+2;n=Pl(this,p,e,i,c,h,u,C,L,P),n&&(n.faceIndex=Math.floor(b/3),n.face.materialIndex=m.materialIndex,t.push(n))}}else{let _=Math.max(0,f.start),g=Math.min(l.count,f.start+f.count);for(let m=_,p=g;m<p;m+=3){let S=m,x=m+1,b=m+2;n=Pl(this,o,e,i,c,h,u,S,x,b),n&&(n.faceIndex=Math.floor(m/3),t.push(n))}}}};function qx(r,e,t,i,n,s,o,a){let l;if(e.side===ei?l=i.intersectTriangle(o,s,n,!0,a):l=i.intersectTriangle(n,s,o,e.side===Sn,a),l===null)return null;Rl.copy(a),Rl.applyMatrix4(r.matrixWorld);let c=t.ray.origin.distanceTo(Rl);return c<t.near||c>t.far?null:{distance:c,point:Rl.clone(),object:r}}function Pl(r,e,t,i,n,s,o,a,l,c){r.getVertexPosition(a,wl),r.getVertexPosition(l,Tl),r.getVertexPosition(c,Al);let h=qx(r,e,t,i,wl,Tl,Al,$m);if(h){let u=new G;qn.getBarycoord($m,wl,Tl,Al,u),n&&(h.uv=qn.getInterpolatedAttribute(n,a,l,c,u,new ze)),s&&(h.uv1=qn.getInterpolatedAttribute(s,a,l,c,u,new ze)),o&&(h.normal=qn.getInterpolatedAttribute(o,a,l,c,u,new G),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new G,materialIndex:0};qn.getNormal(wl,Tl,Al,d.normal),h.face=d,h.barycoord=u}return h}var ks=class r extends Kn{constructor(e=1,t=1,i=1,n=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:n,heightSegments:s,depthSegments:o};let a=this;n=Math.floor(n),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],h=[],u=[],d=0,f=0;_("z","y","x",-1,-1,i,t,e,o,s,0),_("z","y","x",1,-1,i,t,-e,o,s,1),_("x","z","y",1,1,e,i,t,n,o,2),_("x","z","y",1,-1,e,i,-t,n,o,3),_("x","y","z",1,-1,e,t,i,n,s,4),_("x","y","z",-1,-1,e,t,-i,n,s,5),this.setIndex(l),this.setAttribute("position",new ji(c,3)),this.setAttribute("normal",new ji(h,3)),this.setAttribute("uv",new ji(u,2));function _(g,m,p,S,x,b,T,C,L,P,M){let E=b/L,O=T/P,V=b/2,W=T/2,$=C/2,K=L+1,q=P+1,oe=0,X=0,fe=new G;for(let ye=0;ye<q;ye++){let we=ye*O-W;for(let Ne=0;Ne<K;Ne++){let Qe=Ne*E-V;fe[g]=Qe*S,fe[m]=we*x,fe[p]=$,c.push(fe.x,fe.y,fe.z),fe[g]=0,fe[m]=0,fe[p]=C>0?1:-1,h.push(fe.x,fe.y,fe.z),u.push(Ne/L),u.push(1-ye/P),oe+=1}}for(let ye=0;ye<P;ye++)for(let we=0;we<L;we++){let Ne=d+we+K*ye,Qe=d+we+K*(ye+1),Xe=d+(we+1)+K*(ye+1),Ve=d+(we+1)+K*ye;l.push(Ne,Qe,Ve),l.push(Qe,Xe,Ve),X+=6}a.addGroup(f,X,M),f+=X,d+=oe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Hr(r){let e={};for(let t in r){e[t]={};for(let i in r[t]){let n=r[t][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?e[t][i]=null:e[t][i]=n.clone():Array.isArray(n)?e[t][i]=n.slice():e[t][i]=n}}return e}function Wt(r){let e={};for(let t=0;t<r.length;t++){let i=Hr(r[t]);for(let n in i)e[n]=i[n]}return e}function Yx(r){let e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Ed(r){let e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ke.workingColorSpace}var qg={clone:Hr,merge:Wt},jx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Zx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ki=class extends Fr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=jx,this.fragmentShader=Zx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Hr(e.uniforms),this.uniformsGroups=Yx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let o=this.uniforms[n].value;o&&o.isTexture?t.uniforms[n]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[n]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[n]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[n]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[n]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[n]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[n]={type:"m4",value:o.toArray()}:t.uniforms[n]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},Jo=class extends _i{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new At,this.projectionMatrix=new At,this.projectionMatrixInverse=new At,this.coordinateSystem=Bi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Xn=new G,Km=new ze,Jm=new ze,Gt=class extends Jo{constructor(e=50,t=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ds*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Go*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ds*2*Math.atan(Math.tan(Go*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Xn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Xn.x,Xn.y).multiplyScalar(-e/Xn.z),Xn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Xn.x,Xn.y).multiplyScalar(-e/Xn.z)}getViewSize(e,t){return this.getViewBounds(e,Km,Jm),t.subVectors(Jm,Km)}setViewOffset(e,t,i,n,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Go*.5*this.fov)/this.zoom,i=2*t,n=this.aspect*i,s=-.5*n,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*n/l,t-=o.offsetY*i/c,n*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+n,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},As=-90,Cs=1,Gl=class extends _i{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let n=new Gt(As,Cs,e,t);n.layers=this.layers,this.add(n);let s=new Gt(As,Cs,e,t);s.layers=this.layers,this.add(s);let o=new Gt(As,Cs,e,t);o.layers=this.layers,this.add(o);let a=new Gt(As,Cs,e,t);a.layers=this.layers,this.add(a);let l=new Gt(As,Cs,e,t);l.layers=this.layers,this.add(l);let c=new Gt(As,Cs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,n,s,o,a,l]=t;for(let c of t)this.remove(c);if(e===Bi)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Yo)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;let g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,n),e.render(t,s),e.setRenderTarget(i,1,n),e.render(t,o),e.setRenderTarget(i,2,n),e.render(t,a),e.setRenderTarget(i,3,n),e.render(t,l),e.setRenderTarget(i,4,n),e.render(t,c),i.texture.generateMipmaps=g,e.setRenderTarget(i,5,n),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}},Qo=class extends Qt{constructor(e=[],t=Br,i,n,s,o,a,l,c,h){super(e,t,i,n,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Wl=class extends $i{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},n=[i,i,i,i,i,i];this.texture=new Qo(n),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new ks(5,5,5),s=new ki({name:"CubemapFromEquirect",uniforms:Hr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ei,blending:Mn});s.uniforms.tEquirect.value=t;let o=new li(n,s),a=t.minFilter;return t.minFilter===Qi&&(t.minFilter=Ut),new Gl(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,n=!0){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,n);e.setRenderTarget(s)}},xn=class extends _i{constructor(){super(),this.isGroup=!0,this.type="Group"}},$x={type:"move"},Hs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let n=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let g of e.hand.values()){let m=t.getJointPose(g,i),p=this._getHandJoint(c,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,_=.005;c.inputState.pinching&&d>f+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(n=t.getPose(e.targetRaySpace,i),n===null&&s!==null&&(n=s),n!==null&&(a.matrix.fromArray(n.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,n.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(n.linearVelocity)):a.hasLinearVelocity=!1,n.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(n.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent($x)))}return a!==null&&(a.visible=n!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new xn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}};var ea=class extends _i{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ki,this.environmentIntensity=1,this.environmentRotation=new Ki,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var Ku=new G,Kx=new G,Jx=new ke,Yi=class{constructor(e=new G(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,n){return this.normal.set(e,t,i),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let n=Ku.subVectors(i,t).cross(Kx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(Ku),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/n;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Jx.getNormalMatrix(e),n=this.coplanarPoint(Ku).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Pr=new Us,Qx=new ze(.5,.5),Ll=new G,ta=class{constructor(e=new Yi,t=new Yi,i=new Yi,n=new Yi,s=new Yi,o=new Yi){this.planes=[e,t,i,n,s,o]}set(e,t,i,n,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(n),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Bi,i=!1){let n=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],h=s[4],u=s[5],d=s[6],f=s[7],_=s[8],g=s[9],m=s[10],p=s[11],S=s[12],x=s[13],b=s[14],T=s[15];if(n[0].setComponents(c-o,f-h,p-_,T-S).normalize(),n[1].setComponents(c+o,f+h,p+_,T+S).normalize(),n[2].setComponents(c+a,f+u,p+g,T+x).normalize(),n[3].setComponents(c-a,f-u,p-g,T-x).normalize(),i)n[4].setComponents(l,d,m,b).normalize(),n[5].setComponents(c-l,f-d,p-m,T-b).normalize();else if(n[4].setComponents(c-l,f-d,p-m,T-b).normalize(),t===Bi)n[5].setComponents(c+l,f+d,p+m,T+b).normalize();else if(t===Yo)n[5].setComponents(l,d,m,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Pr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Pr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Pr)}intersectsSprite(e){Pr.center.set(0,0,0);let t=Qx.distanceTo(e.center);return Pr.radius=.7071067811865476+t,Pr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Pr)}intersectsSphere(e){let t=this.planes,i=e.center,n=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<n)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let n=t[i];if(Ll.x=n.normal.x>0?e.max.x:e.min.x,Ll.y=n.normal.y>0?e.max.y:e.min.y,Ll.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(Ll)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var ia=class extends Qt{constructor(e,t,i,n,s=Ut,o=Ut,a,l,c){super(e,t,i,n,s,o,a,l,c),this.isVideoTexture=!0,this.generateMipmaps=!1,this._requestVideoFrameCallbackId=0;let h=this;function u(){h.needsUpdate=!0,h._requestVideoFrameCallbackId=e.requestVideoFrameCallback(u)}"requestVideoFrameCallback"in e&&(this._requestVideoFrameCallbackId=e.requestVideoFrameCallback(u))}clone(){return new this.constructor(this.image).copy(this)}update(){let e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}dispose(){this._requestVideoFrameCallbackId!==0&&this.source.data.cancelVideoFrameCallback(this._requestVideoFrameCallbackId),super.dispose()}};var na=class extends Qt{constructor(e,t,i=tr,n,s,o,a=Ii,l=Ii,c,h=Is,u=1){if(h!==Is&&h!==Xs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:u};super(d,n,s,o,a,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ns(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},ra=class extends Qt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}};var Nr=class r extends Kn{constructor(e=1,t=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:n};let s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(n),c=a+1,h=l+1,u=e/a,d=t/l,f=[],_=[],g=[],m=[];for(let p=0;p<h;p++){let S=p*d-o;for(let x=0;x<c;x++){let b=x*u-s;_.push(b,-S,0),g.push(0,0,1),m.push(x/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let S=0;S<a;S++){let x=S+c*p,b=S+c*(p+1),T=S+1+c*(p+1),C=S+1+c*p;f.push(x,b,C),f.push(b,T,C)}this.setIndex(f),this.setAttribute("position",new ji(_,3)),this.setAttribute("normal",new ji(g,3)),this.setAttribute("uv",new ji(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.widthSegments,e.heightSegments)}};var Xl=class extends Fr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ig,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ql=class extends Fr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Il(r,e){return!r||r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function eb(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}var Ur=class{constructor(e,t,i,n){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,n=t[i],s=t[i-1];i:{e:{let o;t:{n:if(!(e<n)){for(let a=i+2;;){if(n===void 0){if(e<s)break n;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=n,n=t[++i],e<n)break e}o=t.length;break t}if(!(e>=s)){let a=t[1];e<a&&(i=2,s=a);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(n=s,s=t[--i-1],e>=s)break e}o=i,i=0;break t}break i}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(n=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,n)}return this.interpolate_(i,s,e,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,s=e*n;for(let o=0;o!==n;++o)t[o]=i[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Yl=class extends Ur{constructor(e,t,i,n){super(e,t,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ju,endingEnd:Ju}}intervalChanged_(e,t,i){let n=this.parameterPositions,s=e-2,o=e+1,a=n[s],l=n[o];if(a===void 0)switch(this.getSettings_().endingStart){case Qu:s=e,a=2*t-i;break;case ed:s=n.length-2,a=t+n[s]-n[s+1];break;default:s=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Qu:o=e,l=2*i-t;break;case ed:o=1,l=i+n[1]-n[0];break;default:o=e-1,l=t}let c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(e,t,i,n){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,_=(i-t)/(n-t),g=_*_,m=g*_,p=-d*m+2*d*g-d*_,S=(1+d)*m+(-1.5-2*d)*g+(-.5+d)*_+1,x=(-1-f)*m+(1.5+f)*g+.5*_,b=f*m-f*g;for(let T=0;T!==a;++T)s[T]=p*o[h+T]+S*o[c+T]+x*o[l+T]+b*o[u+T];return s}},jl=class extends Ur{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(i-t)/(n-t),u=1-h;for(let d=0;d!==a;++d)s[d]=o[c+d]*u+o[l+d]*h;return s}},Zl=class extends Ur{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e){return this.copySampleValue_(e-1)}},yi=class{constructor(e,t,i,n){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Il(t,this.TimeBufferType),this.values=Il(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Il(e.times,Array),values:Il(e.values,Array)};let n=e.getInterpolation();n!==e.DefaultInterpolation&&(i.interpolation=n)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Zl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new jl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Yl(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Xo:t=this.InterpolantFactoryMethodDiscrete;break;case kl:t=this.InterpolantFactoryMethodLinear;break;case Dl:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Xo;case this.InterpolantFactoryMethodLinear:return kl;case this.InterpolantFactoryMethodSmooth:return Dl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]*=e}return this}trim(e,t){let i=this.times,n=i.length,s=0,o=n-1;for(;s!==n&&i[s]<e;)++s;for(;o!==-1&&i[o]>t;)--o;if(++o,s!==0||o!==n){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=i.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(e=!1);let i=this.times,n=this.values,s=i.length;s===0&&(e=!1);let o=null;for(let a=0;a!==s;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){e=!1;break}if(o!==null&&o>l){e=!1;break}o=l}if(n!==void 0&&eb(n))for(let a=0,l=n.length;a!==l;++a){let c=n[a];if(isNaN(c)){e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===Dl,s=e.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(n)l=!0;else{let u=a*i,d=u-i,f=u+i;for(let _=0;_!==i;++_){let g=t[u+_];if(g!==t[d+_]||g!==t[f+_]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let u=a*i,d=o*i;for(let f=0;f!==i;++f)t[d+f]=t[u+f]}++o}}if(s>0){e[o]=e[s];for(let a=s*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,n=new i(this.name,e,t);return n.createInterpolant=this.createInterpolant,n}};yi.prototype.ValueTypeName="";yi.prototype.TimeBufferType=Float32Array;yi.prototype.ValueBufferType=Float32Array;yi.prototype.DefaultInterpolation=kl;var Jn=class extends yi{constructor(e,t,i){super(e,t,i)}};Jn.prototype.ValueTypeName="bool";Jn.prototype.ValueBufferType=Array;Jn.prototype.DefaultInterpolation=Xo;Jn.prototype.InterpolantFactoryMethodLinear=void 0;Jn.prototype.InterpolantFactoryMethodSmooth=void 0;var $l=class extends yi{constructor(e,t,i,n){super(e,t,i,n)}};$l.prototype.ValueTypeName="color";var Kl=class extends yi{constructor(e,t,i,n){super(e,t,i,n)}};Kl.prototype.ValueTypeName="number";var Jl=class extends Ur{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(n-t),c=e*a;for(let h=c+a;c!==h;c+=4)vi.slerpFlat(s,0,o,c-a,o,c,l);return s}},sa=class extends yi{constructor(e,t,i,n){super(e,t,i,n)}InterpolantFactoryMethodLinear(e){return new Jl(this.times,this.values,this.getValueSize(),e)}};sa.prototype.ValueTypeName="quaternion";sa.prototype.InterpolantFactoryMethodSmooth=void 0;var Qn=class extends yi{constructor(e,t,i){super(e,t,i)}};Qn.prototype.ValueTypeName="string";Qn.prototype.ValueBufferType=Array;Qn.prototype.DefaultInterpolation=Xo;Qn.prototype.InterpolantFactoryMethodLinear=void 0;Qn.prototype.InterpolantFactoryMethodSmooth=void 0;var Ql=class extends yi{constructor(e,t,i,n){super(e,t,i,n)}};Ql.prototype.ValueTypeName="vector";var Ol={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}},ec=class{constructor(e,t,i){let n=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.abortController=new AbortController,this.itemStart=function(h){a++,s===!1&&n.onStart!==void 0&&n.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,n.onProgress!==void 0&&n.onProgress(h,o,a),o===a&&(s=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(h){n.onError!==void 0&&n.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],_=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return _}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},Yg=new ec,zs=class{constructor(e){this.manager=e!==void 0?e:Yg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(n,s){i.load(e,n,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};zs.DEFAULT_MATERIAL_NAME="__DEFAULT";var Rs=new WeakMap,tc=class extends zs{constructor(e){super(e)}load(e,t,i,n){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,o=Ol.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0);else{let u=Rs.get(o);u===void 0&&(u=[],Rs.set(o,u)),u.push({onLoad:t,onError:n})}return o}let a=Os("img");function l(){h(),t&&t(this);let u=Rs.get(this)||[];for(let d=0;d<u.length;d++){let f=u[d];f.onLoad&&f.onLoad(this)}Rs.delete(this),s.manager.itemEnd(e)}function c(u){h(),n&&n(u),Ol.remove(`image:${e}`);let d=Rs.get(this)||[];for(let f=0;f<d.length;f++){let _=d[f];_.onError&&_.onError(u)}Rs.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Ol.add(`image:${e}`,a),s.manager.itemStart(e),a.src=e,a}};var oa=class extends zs{constructor(e){super(e)}load(e,t,i,n){let s=new Qt,o=new tc(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},i,n),s}},ic=class extends _i{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new $e(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}};var nc=class extends Jo{constructor(e=-1,t=1,i=1,n=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=n,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,n,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2,s=i-e,o=i+e,a=n+t,l=n-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};var aa=class extends ic{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var rc=class extends Gt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},la=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};var wd="\\[\\]\\.:\\/",tb=new RegExp("["+wd+"]","g"),Td="[^"+wd+"]",ib="[^"+wd.replace("\\.","")+"]",nb=/((?:WC+[\/:])*)/.source.replace("WC",Td),rb=/(WCOD+)?/.source.replace("WCOD",ib),sb=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Td),ob=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Td),ab=new RegExp("^"+nb+rb+sb+ob+"$"),lb=["material","materials","bones","map"],nd=class{constructor(e,t,i){let n=i||dt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,n)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,n=this._bindings[i];n!==void 0&&n.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,s=i.length;n!==s;++n)i[n].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},dt=class r{constructor(e,t,i){this.path=t,this.parsedPath=i||r.parseTrackName(t),this.node=r.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new r.Composite(e,t,i):new r(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(tb,"")}static parseTrackName(e){let t=ab.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){let s=i.nodeName.substring(n+1);lb.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},n=i(e.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)e[t++]=i[n]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,n=t.propertyName,s=t.propertyIndex;if(e||(e=r.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e)return;if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material||!e.material.materials)return;e=e.material.materials;break;case"bones":if(!e.skeleton)return;e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material||!e.material.map)return;e=e.material.map;break;default:if(e[i]===void 0)return;e=e[i]}if(c!==void 0){if(e[c]===void 0)return;e=e[c]}}let o=e[n];if(o===void 0){let c=t.nodeName;return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(n==="morphTargetInfluences"){if(!e.geometry||!e.geometry.morphAttributes)return;e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};dt.Composite=nd;dt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};dt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};dt.prototype.GetterByBindingType=[dt.prototype._getValue_direct,dt.prototype._getValue_array,dt.prototype._getValue_arrayElement,dt.prototype._getValue_toArray];dt.prototype.SetterByBindingTypeAndVersioning=[[dt.prototype._setValue_direct,dt.prototype._setValue_direct_setNeedsUpdate,dt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[dt.prototype._setValue_array,dt.prototype._setValue_array_setNeedsUpdate,dt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[dt.prototype._setValue_arrayElement,dt.prototype._setValue_arrayElement_setNeedsUpdate,dt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[dt.prototype._setValue_fromArray,dt.prototype._setValue_fromArray_setNeedsUpdate,dt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var H1=new Float32Array(1);var Qm=new At,ca=class{constructor(e,t,i=0,n=1/0){this.ray=new Zo(e,t),this.near=i,this.far=n,this.camera=null,this.layers=new Bs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera&&(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t)}setFromXRController(e){return Qm.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Qm),this}intersectObject(e,t=!0,i=[]){return rd(e,this,i,t),i.sort(eg),i}intersectObjects(e,t=!0,i=[]){for(let n=0,s=e.length;n<s;n++)rd(e[n],this,i,t);return i.sort(eg),i}};function eg(r,e){return r.distance-e.distance}function rd(r,e,t,i){let n=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(n=!1),n===!0&&i===!0){let s=r.children;for(let o=0,a=s.length;o<a;o++)rd(s[o],e,t,!0)}}var ha=class extends Zi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){e!==void 0&&(this.domElement!==null&&this.disconnect(),this.domElement=e)}disconnect(){}dispose(){}update(){}};function Ad(r,e,t,i){let n=cb(i);switch(t){case gd:return r*e;case _d:return r*e/n.components*n.byteLength;case yc:return r*e/n.components*n.byteLength;case yd:return r*e*2/n.components*n.byteLength;case xc:return r*e*2/n.components*n.byteLength;case vd:return r*e*3/n.components*n.byteLength;case Di:return r*e*4/n.components*n.byteLength;case bc:return r*e*4/n.components*n.byteLength;case fa:case pa:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case ma:case ga:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Mc:case wc:return Math.max(r,16)*Math.max(e,8)/4;case Sc:case Ec:return Math.max(r,8)*Math.max(e,8)/2;case Tc:case Ac:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Cc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Rc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Pc:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Lc:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Ic:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Dc:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Oc:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Fc:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Nc:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Uc:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Bc:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case kc:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Hc:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case zc:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Vc:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Gc:case Wc:case Xc:return Math.ceil(r/4)*Math.ceil(e/4)*16;case qc:case Yc:return Math.ceil(r/4)*Math.ceil(e/4)*8;case jc:case Zc:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function cb(r){switch(r){case en:case dd:return{byteLength:1,components:1};case Vs:case fd:case Gs:return{byteLength:2,components:1};case vc:case _c:return{byteLength:2,components:4};case tr:case gc:case tn:return{byteLength:4,components:1};case pd:case md:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:sc}}));typeof window!="undefined"&&(window.__THREE__||(window.__THREE__=sc));function vv(){let r=null,e=!1,t=null,i=null;function n(s,o){t(s,o),i=r.requestAnimationFrame(n)}return{start:function(){e!==!0&&t!==null&&(i=r.requestAnimationFrame(n),e=!0)},stop:function(){r.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function hb(r){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,u=c.byteLength,d=r.createBuffer();r.bindBuffer(l,d),r.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=r.FLOAT;else if(typeof Float16Array!="undefined"&&c instanceof Float16Array)f=r.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=r.SHORT;else if(c instanceof Uint32Array)f=r.UNSIGNED_INT;else if(c instanceof Int32Array)f=r.INT;else if(c instanceof Int8Array)f=r.BYTE;else if(c instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,l,c){let h=l.array,u=l.updateRanges;if(r.bindBuffer(c,a),u.length===0)r.bufferSubData(c,0,h);else{u.sort((f,_)=>f.start-_.start);let d=0;for(let f=1;f<u.length;f++){let _=u[d],g=u[f];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++d,u[d]=g)}u.length=d+1;for(let f=0,_=u.length;f<_;f++){let g=u[f];r.bufferSubData(c,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(r.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:n,remove:s,update:o}}var ub=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,db=`#ifdef USE_ALPHAHASH
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
#endif`,fb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,pb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,gb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,vb=`#ifdef USE_AOMAP
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
#endif`,_b=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,yb=`#ifdef USE_BATCHING
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
#endif`,xb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,bb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Sb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Mb=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Eb=`#ifdef USE_IRIDESCENCE
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
#endif`,wb=`#ifdef USE_BUMPMAP
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
#endif`,Tb=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ab=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Cb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Rb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Pb=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Lb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ib=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Db=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Ob=`#define PI 3.141592653589793
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
} // validated`,Fb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Nb=`vec3 transformedNormal = objectNormal;
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
#endif`,Ub=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Bb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,kb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Hb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,zb="gl_FragColor = linearToOutputTexel( gl_FragColor );",Vb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Gb=`#ifdef USE_ENVMAP
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
#endif`,Wb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Xb=`#ifdef USE_ENVMAP
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
#endif`,qb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Yb=`#ifdef USE_ENVMAP
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
#endif`,jb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Zb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,$b=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Kb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Jb=`#ifdef USE_GRADIENTMAP
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
}`,Qb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,eS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,tS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,iS=`uniform bool receiveShadow;
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
#endif`,nS=`#ifdef USE_ENVMAP
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
#endif`,rS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,sS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,oS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,aS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lS=`PhysicalMaterial material;
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
#endif`,cS=`struct PhysicalMaterial {
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
}`,hS=`
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
#endif`,uS=`#if defined( RE_IndirectDiffuse )
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
#endif`,dS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,fS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,pS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,vS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_S=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,yS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,xS=`#if defined( USE_POINTS_UV )
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
#endif`,bS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,SS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,MS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ES=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,wS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,TS=`#ifdef USE_MORPHTARGETS
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
#endif`,AS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,CS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,RS=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,PS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,LS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,IS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,DS=`#ifdef USE_NORMALMAP
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
#endif`,OS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,FS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,NS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,US=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,BS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,kS=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,HS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,zS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,VS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,GS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,WS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,XS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,qS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,YS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ZS=`float getShadowMask() {
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
}`,$S=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,KS=`#ifdef USE_SKINNING
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
#endif`,JS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,QS=`#ifdef USE_SKINNING
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
#endif`,eM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,tM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,iM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,nM=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,rM=`#ifdef USE_TRANSMISSION
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
#endif`,sM=`#ifdef USE_TRANSMISSION
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
#endif`,oM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,aM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,hM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,uM=`uniform sampler2D t2D;
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
}`,dM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fM=`#ifdef ENVMAP_TYPE_CUBE
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
}`,pM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gM=`#include <common>
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
}`,vM=`#if DEPTH_PACKING == 3200
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
}`,_M=`#define DISTANCE
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
}`,yM=`#define DISTANCE
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
}`,xM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,bM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,SM=`uniform float scale;
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
}`,MM=`uniform vec3 diffuse;
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
}`,EM=`#include <common>
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
}`,wM=`uniform vec3 diffuse;
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
}`,TM=`#define LAMBERT
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
}`,AM=`#define LAMBERT
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
}`,CM=`#define MATCAP
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
}`,RM=`#define MATCAP
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
}`,PM=`#define NORMAL
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
}`,LM=`#define NORMAL
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
}`,IM=`#define PHONG
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
}`,DM=`#define PHONG
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
}`,OM=`#define STANDARD
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
}`,FM=`#define STANDARD
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
}`,NM=`#define TOON
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
}`,UM=`#define TOON
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
}`,BM=`uniform float size;
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
}`,kM=`uniform vec3 diffuse;
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
}`,HM=`#include <common>
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
}`,zM=`uniform vec3 color;
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
}`,VM=`uniform float rotation;
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
}`,GM=`uniform vec3 diffuse;
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
}`,We={alphahash_fragment:ub,alphahash_pars_fragment:db,alphamap_fragment:fb,alphamap_pars_fragment:pb,alphatest_fragment:mb,alphatest_pars_fragment:gb,aomap_fragment:vb,aomap_pars_fragment:_b,batching_pars_vertex:yb,batching_vertex:xb,begin_vertex:bb,beginnormal_vertex:Sb,bsdfs:Mb,iridescence_fragment:Eb,bumpmap_pars_fragment:wb,clipping_planes_fragment:Tb,clipping_planes_pars_fragment:Ab,clipping_planes_pars_vertex:Cb,clipping_planes_vertex:Rb,color_fragment:Pb,color_pars_fragment:Lb,color_pars_vertex:Ib,color_vertex:Db,common:Ob,cube_uv_reflection_fragment:Fb,defaultnormal_vertex:Nb,displacementmap_pars_vertex:Ub,displacementmap_vertex:Bb,emissivemap_fragment:kb,emissivemap_pars_fragment:Hb,colorspace_fragment:zb,colorspace_pars_fragment:Vb,envmap_fragment:Gb,envmap_common_pars_fragment:Wb,envmap_pars_fragment:Xb,envmap_pars_vertex:qb,envmap_physical_pars_fragment:nS,envmap_vertex:Yb,fog_vertex:jb,fog_pars_vertex:Zb,fog_fragment:$b,fog_pars_fragment:Kb,gradientmap_pars_fragment:Jb,lightmap_pars_fragment:Qb,lights_lambert_fragment:eS,lights_lambert_pars_fragment:tS,lights_pars_begin:iS,lights_toon_fragment:rS,lights_toon_pars_fragment:sS,lights_phong_fragment:oS,lights_phong_pars_fragment:aS,lights_physical_fragment:lS,lights_physical_pars_fragment:cS,lights_fragment_begin:hS,lights_fragment_maps:uS,lights_fragment_end:dS,logdepthbuf_fragment:fS,logdepthbuf_pars_fragment:pS,logdepthbuf_pars_vertex:mS,logdepthbuf_vertex:gS,map_fragment:vS,map_pars_fragment:_S,map_particle_fragment:yS,map_particle_pars_fragment:xS,metalnessmap_fragment:bS,metalnessmap_pars_fragment:SS,morphinstance_vertex:MS,morphcolor_vertex:ES,morphnormal_vertex:wS,morphtarget_pars_vertex:TS,morphtarget_vertex:AS,normal_fragment_begin:CS,normal_fragment_maps:RS,normal_pars_fragment:PS,normal_pars_vertex:LS,normal_vertex:IS,normalmap_pars_fragment:DS,clearcoat_normal_fragment_begin:OS,clearcoat_normal_fragment_maps:FS,clearcoat_pars_fragment:NS,iridescence_pars_fragment:US,opaque_fragment:BS,packing:kS,premultiplied_alpha_fragment:HS,project_vertex:zS,dithering_fragment:VS,dithering_pars_fragment:GS,roughnessmap_fragment:WS,roughnessmap_pars_fragment:XS,shadowmap_pars_fragment:qS,shadowmap_pars_vertex:YS,shadowmap_vertex:jS,shadowmask_pars_fragment:ZS,skinbase_vertex:$S,skinning_pars_vertex:KS,skinning_vertex:JS,skinnormal_vertex:QS,specularmap_fragment:eM,specularmap_pars_fragment:tM,tonemapping_fragment:iM,tonemapping_pars_fragment:nM,transmission_fragment:rM,transmission_pars_fragment:sM,uv_pars_fragment:oM,uv_pars_vertex:aM,uv_vertex:lM,worldpos_vertex:cM,background_vert:hM,background_frag:uM,backgroundCube_vert:dM,backgroundCube_frag:fM,cube_vert:pM,cube_frag:mM,depth_vert:gM,depth_frag:vM,distanceRGBA_vert:_M,distanceRGBA_frag:yM,equirect_vert:xM,equirect_frag:bM,linedashed_vert:SM,linedashed_frag:MM,meshbasic_vert:EM,meshbasic_frag:wM,meshlambert_vert:TM,meshlambert_frag:AM,meshmatcap_vert:CM,meshmatcap_frag:RM,meshnormal_vert:PM,meshnormal_frag:LM,meshphong_vert:IM,meshphong_frag:DM,meshphysical_vert:OM,meshphysical_frag:FM,meshtoon_vert:NM,meshtoon_frag:UM,points_vert:BM,points_frag:kM,shadow_vert:HM,shadow_frag:zM,sprite_vert:VM,sprite_frag:GM},_e={common:{diffuse:{value:new $e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ke}},envmap:{envMap:{value:null},envMapRotation:{value:new ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ke},normalScale:{value:new ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new $e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0},uvTransform:{value:new ke}},sprite:{diffuse:{value:new $e(16777215)},opacity:{value:1},center:{value:new ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}}},nn={basic:{uniforms:Wt([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.fog]),vertexShader:We.meshbasic_vert,fragmentShader:We.meshbasic_frag},lambert:{uniforms:Wt([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new $e(0)}}]),vertexShader:We.meshlambert_vert,fragmentShader:We.meshlambert_frag},phong:{uniforms:Wt([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new $e(0)},specular:{value:new $e(1118481)},shininess:{value:30}}]),vertexShader:We.meshphong_vert,fragmentShader:We.meshphong_frag},standard:{uniforms:Wt([_e.common,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.roughnessmap,_e.metalnessmap,_e.fog,_e.lights,{emissive:{value:new $e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag},toon:{uniforms:Wt([_e.common,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.gradientmap,_e.fog,_e.lights,{emissive:{value:new $e(0)}}]),vertexShader:We.meshtoon_vert,fragmentShader:We.meshtoon_frag},matcap:{uniforms:Wt([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,{matcap:{value:null}}]),vertexShader:We.meshmatcap_vert,fragmentShader:We.meshmatcap_frag},points:{uniforms:Wt([_e.points,_e.fog]),vertexShader:We.points_vert,fragmentShader:We.points_frag},dashed:{uniforms:Wt([_e.common,_e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:We.linedashed_vert,fragmentShader:We.linedashed_frag},depth:{uniforms:Wt([_e.common,_e.displacementmap]),vertexShader:We.depth_vert,fragmentShader:We.depth_frag},normal:{uniforms:Wt([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,{opacity:{value:1}}]),vertexShader:We.meshnormal_vert,fragmentShader:We.meshnormal_frag},sprite:{uniforms:Wt([_e.sprite,_e.fog]),vertexShader:We.sprite_vert,fragmentShader:We.sprite_frag},background:{uniforms:{uvTransform:{value:new ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:We.background_vert,fragmentShader:We.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ke}},vertexShader:We.backgroundCube_vert,fragmentShader:We.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:We.cube_vert,fragmentShader:We.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:We.equirect_vert,fragmentShader:We.equirect_frag},distanceRGBA:{uniforms:Wt([_e.common,_e.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:We.distanceRGBA_vert,fragmentShader:We.distanceRGBA_frag},shadow:{uniforms:Wt([_e.lights,_e.fog,{color:{value:new $e(0)},opacity:{value:1}}]),vertexShader:We.shadow_vert,fragmentShader:We.shadow_frag}};nn.physical={uniforms:Wt([nn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ke},clearcoatNormalScale:{value:new ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ke},sheen:{value:0},sheenColor:{value:new $e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ke},transmissionSamplerSize:{value:new ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ke},attenuationDistance:{value:0},attenuationColor:{value:new $e(0)},specularColor:{value:new $e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ke},anisotropyVector:{value:new ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ke}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag};var Kc={r:0,b:0,g:0},zr=new Ki,WM=new At;function XM(r,e,t,i,n,s,o){let a=new $e(0),l=s===!0?0:1,c,h,u=null,d=0,f=null;function _(x){let b=x.isScene===!0?x.background:null;return b&&b.isTexture&&(b=(x.backgroundBlurriness>0?t:e).get(b)),b}function g(x){let b=!1,T=_(x);T===null?p(a,l):T&&T.isColor&&(p(T,1),b=!0);let C=r.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(r.autoClear||b)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(x,b){let T=_(b);T&&(T.isCubeTexture||T.mapping===ua)?(h===void 0&&(h=new li(new ks(1,1,1),new ki({name:"BackgroundCubeMaterial",uniforms:Hr(nn.backgroundCube.uniforms),vertexShader:nn.backgroundCube.vertexShader,fragmentShader:nn.backgroundCube.fragmentShader,side:ei,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,L,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),zr.copy(b.backgroundRotation),zr.x*=-1,zr.y*=-1,zr.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(zr.y*=-1,zr.z*=-1),h.material.uniforms.envMap.value=T,h.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(WM.makeRotationFromEuler(zr)),h.material.toneMapped=Ke.getTransfer(T.colorSpace)!==tt,(u!==T||d!==T.version||f!==r.toneMapping)&&(h.material.needsUpdate=!0,u=T,d=T.version,f=r.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null)):T&&T.isTexture&&(c===void 0&&(c=new li(new Nr(2,2),new ki({name:"BackgroundMaterial",uniforms:Hr(nn.background.uniforms),vertexShader:nn.background.vertexShader,fragmentShader:nn.background.fragmentShader,side:Sn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=T,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=Ke.getTransfer(T.colorSpace)!==tt,T.matrixAutoUpdate===!0&&T.updateMatrix(),c.material.uniforms.uvTransform.value.copy(T.matrix),(u!==T||d!==T.version||f!==r.toneMapping)&&(c.material.needsUpdate=!0,u=T,d=T.version,f=r.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function p(x,b){x.getRGB(Kc,Ed(r)),i.buffers.color.setClear(Kc.r,Kc.g,Kc.b,b,o)}function S(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,b=1){a.set(x),l=b,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,p(a,l)},render:g,addToRenderList:m,dispose:S}}function qM(r,e){let t=r.getParameter(r.MAX_VERTEX_ATTRIBS),i={},n=d(null),s=n,o=!1;function a(E,O,V,W,$){let K=!1,q=u(W,V,O);s!==q&&(s=q,c(s.object)),K=f(E,W,V,$),K&&_(E,W,V,$),$!==null&&e.update($,r.ELEMENT_ARRAY_BUFFER),(K||o)&&(o=!1,b(E,O,V,W),$!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get($).buffer))}function l(){return r.createVertexArray()}function c(E){return r.bindVertexArray(E)}function h(E){return r.deleteVertexArray(E)}function u(E,O,V){let W=V.wireframe===!0,$=i[E.id];$===void 0&&($={},i[E.id]=$);let K=$[O.id];K===void 0&&(K={},$[O.id]=K);let q=K[W];return q===void 0&&(q=d(l()),K[W]=q),q}function d(E){let O=[],V=[],W=[];for(let $=0;$<t;$++)O[$]=0,V[$]=0,W[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:V,attributeDivisors:W,object:E,attributes:{},index:null}}function f(E,O,V,W){let $=s.attributes,K=O.attributes,q=0,oe=V.getAttributes();for(let X in oe)if(oe[X].location>=0){let ye=$[X],we=K[X];if(we===void 0&&(X==="instanceMatrix"&&E.instanceMatrix&&(we=E.instanceMatrix),X==="instanceColor"&&E.instanceColor&&(we=E.instanceColor)),ye===void 0||ye.attribute!==we||we&&ye.data!==we.data)return!0;q++}return s.attributesNum!==q||s.index!==W}function _(E,O,V,W){let $={},K=O.attributes,q=0,oe=V.getAttributes();for(let X in oe)if(oe[X].location>=0){let ye=K[X];ye===void 0&&(X==="instanceMatrix"&&E.instanceMatrix&&(ye=E.instanceMatrix),X==="instanceColor"&&E.instanceColor&&(ye=E.instanceColor));let we={};we.attribute=ye,ye&&ye.data&&(we.data=ye.data),$[X]=we,q++}s.attributes=$,s.attributesNum=q,s.index=W}function g(){let E=s.newAttributes;for(let O=0,V=E.length;O<V;O++)E[O]=0}function m(E){p(E,0)}function p(E,O){let V=s.newAttributes,W=s.enabledAttributes,$=s.attributeDivisors;V[E]=1,W[E]===0&&(r.enableVertexAttribArray(E),W[E]=1),$[E]!==O&&(r.vertexAttribDivisor(E,O),$[E]=O)}function S(){let E=s.newAttributes,O=s.enabledAttributes;for(let V=0,W=O.length;V<W;V++)O[V]!==E[V]&&(r.disableVertexAttribArray(V),O[V]=0)}function x(E,O,V,W,$,K,q){q===!0?r.vertexAttribIPointer(E,O,V,$,K):r.vertexAttribPointer(E,O,V,W,$,K)}function b(E,O,V,W){g();let $=W.attributes,K=V.getAttributes(),q=O.defaultAttributeValues;for(let oe in K){let X=K[oe];if(X.location>=0){let fe=$[oe];if(fe===void 0&&(oe==="instanceMatrix"&&E.instanceMatrix&&(fe=E.instanceMatrix),oe==="instanceColor"&&E.instanceColor&&(fe=E.instanceColor)),fe!==void 0){let ye=fe.normalized,we=fe.itemSize,Ne=e.get(fe);if(Ne===void 0)continue;let Qe=Ne.buffer,Xe=Ne.type,Ve=Ne.bytesPerElement,ee=Xe===r.INT||Xe===r.UNSIGNED_INT||fe.gpuType===gc;if(fe.isInterleavedBufferAttribute){let ce=fe.data,Ee=ce.stride,Ue=fe.offset;if(ce.isInstancedInterleavedBuffer){for(let Re=0;Re<X.locationSize;Re++)p(X.location+Re,ce.meshPerAttribute);E.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let Re=0;Re<X.locationSize;Re++)m(X.location+Re);r.bindBuffer(r.ARRAY_BUFFER,Qe);for(let Re=0;Re<X.locationSize;Re++)x(X.location+Re,we/X.locationSize,Xe,ye,Ee*Ve,(Ue+we/X.locationSize*Re)*Ve,ee)}else{if(fe.isInstancedBufferAttribute){for(let ce=0;ce<X.locationSize;ce++)p(X.location+ce,fe.meshPerAttribute);E.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let ce=0;ce<X.locationSize;ce++)m(X.location+ce);r.bindBuffer(r.ARRAY_BUFFER,Qe);for(let ce=0;ce<X.locationSize;ce++)x(X.location+ce,we/X.locationSize,Xe,ye,we*Ve,we/X.locationSize*ce*Ve,ee)}}else if(q!==void 0){let ye=q[oe];if(ye!==void 0)switch(ye.length){case 2:r.vertexAttrib2fv(X.location,ye);break;case 3:r.vertexAttrib3fv(X.location,ye);break;case 4:r.vertexAttrib4fv(X.location,ye);break;default:r.vertexAttrib1fv(X.location,ye)}}}}S()}function T(){P();for(let E in i){let O=i[E];for(let V in O){let W=O[V];for(let $ in W)h(W[$].object),delete W[$];delete O[V]}delete i[E]}}function C(E){if(i[E.id]===void 0)return;let O=i[E.id];for(let V in O){let W=O[V];for(let $ in W)h(W[$].object),delete W[$];delete O[V]}delete i[E.id]}function L(E){for(let O in i){let V=i[O];if(V[E.id]===void 0)continue;let W=V[E.id];for(let $ in W)h(W[$].object),delete W[$];delete V[E.id]}}function P(){M(),o=!0,s!==n&&(s=n,c(s.object))}function M(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:a,reset:P,resetDefaultState:M,dispose:T,releaseStatesOfGeometry:C,releaseStatesOfProgram:L,initAttributes:g,enableAttribute:m,disableUnusedAttributes:S}}function YM(r,e,t){let i;function n(c){i=c}function s(c,h){r.drawArrays(i,c,h),t.update(h,i,1)}function o(c,h,u){u!==0&&(r.drawArraysInstanced(i,c,h,u),t.update(h,i,u))}function a(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let f=0;for(let _=0;_<u;_++)f+=h[_];t.update(f,i,1)}function l(c,h,u,d){if(u===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let _=0;_<c.length;_++)o(c[_],h[_],d[_]);else{f.multiDrawArraysInstancedWEBGL(i,c,0,h,0,d,0,u);let _=0;for(let g=0;g<u;g++)_+=h[g]*d[g];t.update(_,i,1)}}this.setMode=n,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function jM(r,e,t,i){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let L=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function o(L){return!(L!==Di&&i.convert(L)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(L){let P=L===Gs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(L!==en&&i.convert(L)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==tn&&!P)}function l(L){if(L==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(c=h);let u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),S=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),x=r.getParameter(r.MAX_VARYING_VECTORS),b=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),T=_>0,C=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:S,maxVaryings:x,maxFragmentUniforms:b,vertexTextures:T,maxSamples:C}}function ZM(r){let e=this,t=null,i=0,n=!1,s=!1,o=new Yi,a=new ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||i!==0||n;return n=d,i=u.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let _=u.clippingPlanes,g=u.clipIntersection,m=u.clipShadows,p=r.get(u);if(!n||_===null||_.length===0||s&&!m)s?h(null):c();else{let S=s?0:i,x=S*4,b=p.clippingState||null;l.value=b,b=h(_,d,x,f);for(let T=0;T!==x;++T)b[T]=t[T];p.clippingState=b,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,d,f,_){let g=u!==null?u.length:0,m=null;if(g!==0){if(m=l.value,_!==!0||m===null){let p=f+g*4,S=d.matrixWorldInverse;a.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,b=f;x!==g;++x,b+=4)o.copy(u[x]).applyMatrix4(S,a),o.normal.toArray(m,b),m[b+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function $M(r){let e=new WeakMap;function t(o,a){return a===fc?o.mapping=Br:a===pc&&(o.mapping=kr),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===fc||a===pc)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Wl(l.height);return c.fromEquirectangularTexture(r,o),e.set(o,c),o.addEventListener("dispose",n),t(c.texture,o.mapping)}else return null}}return o}function n(o){let a=o.target;a.removeEventListener("dispose",n);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}var js=4,jg=[.125,.215,.35,.446,.526,.582],Zs=20,Cd=new nc,Zg=new $e,Rd=null,Pd=0,Ld=0,Id=!1,Gr=(1+Math.sqrt(5))/2,Ys=1/Gr,$g=[new G(-Gr,Ys,0),new G(Gr,Ys,0),new G(-Ys,0,Gr),new G(Ys,0,Gr),new G(0,Gr,-Ys),new G(0,Gr,Ys),new G(-1,1,-1),new G(1,1,-1),new G(-1,1,1),new G(1,1,1)],KM=new G,eh=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,n=100,s={}){let{size:o=256,position:a=KM}=s;Rd=this._renderer.getRenderTarget(),Pd=this._renderer.getActiveCubeFace(),Ld=this._renderer.getActiveMipmapLevel(),Id=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,n,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Qg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Jg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Rd,Pd,Ld),this._renderer.xr.enabled=Id,e.scissorTest=!1,Jc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Br||e.mapping===kr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Rd=this._renderer.getRenderTarget(),Pd=this._renderer.getActiveCubeFace(),Ld=this._renderer.getActiveMipmapLevel(),Id=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Ut,minFilter:Ut,generateMipmaps:!1,type:Gs,format:Di,colorSpace:Or,depthBuffer:!1},n=Kg(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Kg(e,t,i);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=JM(s)),this._blurMaterial=QM(s,e,t)}return n}_compileMaterial(e){let t=new li(this._lodPlanes[0],e);this._renderer.compile(t,Cd)}_sceneToCubeUV(e,t,i,n,s){let l=new Gt(90,1,t,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(Zg),u.toneMapping=En,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(n),u.clearDepth(),u.setRenderTarget(null));let g=new $n({name:"PMREM.Background",side:ei,depthWrite:!1,depthTest:!1}),m=new li(new ks,g),p=!1,S=e.background;S?S.isColor&&(g.color.copy(S),e.background=null,p=!0):(g.color.copy(Zg),p=!0);for(let x=0;x<6;x++){let b=x%3;b===0?(l.up.set(0,c[x],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[x],s.y,s.z)):b===1?(l.up.set(0,0,c[x]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[x],s.z)):(l.up.set(0,c[x],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[x]));let T=this._cubeSize;Jc(n,b*T,x>2?T:0,T,T),u.setRenderTarget(n),p&&u.render(m,l),u.render(e,l)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=S}_textureToCubeUV(e,t){let i=this._renderer,n=e.mapping===Br||e.mapping===kr;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=Qg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Jg());let s=n?this._cubemapMaterial:this._equirectMaterial,o=new li(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;let l=this._cubeSize;Jc(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Cd)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let n=this._lodPlanes.length;for(let s=1;s<n;s++){let o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=$g[(n-s-1)%$g.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,n,s){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,n,"latitudinal",s),this._halfBlur(o,e,i,i,n,"longitudinal",s)}_halfBlur(e,t,i,n,s,o,a){let l=this._renderer,c=this._blurMaterial,h=3,u=new li(this._lodPlanes[n],c),d=c.uniforms,f=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Zs-1),g=s/_,m=isFinite(s)?1+Math.floor(h*g):Zs;m>Zs;let p=[],S=0;for(let L=0;L<Zs;++L){let P=L/g,M=Math.exp(-P*P/2);p.push(M),L===0?S+=M:L<m&&(S+=2*M)}for(let L=0;L<p.length;L++)p[L]=p[L]/S;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:x}=this;d.dTheta.value=_,d.mipInt.value=x-i;let b=this._sizeLods[n],T=3*b*(n>x-js?n-x+js:0),C=4*(this._cubeSize-b);Jc(t,T,C,3*b,2*b),l.setRenderTarget(t),l.render(u,Cd)}};function JM(r){let e=[],t=[],i=[],n=r,s=r-js+1+jg.length;for(let o=0;o<s;o++){let a=Math.pow(2,n);t.push(a);let l=1/a;o>r-js?l=jg[o-r+js-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,_=6,g=3,m=2,p=1,S=new Float32Array(g*_*f),x=new Float32Array(m*_*f),b=new Float32Array(p*_*f);for(let C=0;C<f;C++){let L=C%3*2/3-1,P=C>2?0:-1,M=[L,P,0,L+2/3,P,0,L+2/3,P+1,0,L,P,0,L+2/3,P+1,0,L,P+1,0];S.set(M,g*_*C),x.set(d,m*_*C);let E=[C,C,C,C,C,C];b.set(E,p*_*C)}let T=new Kn;T.setAttribute("position",new gi(S,g)),T.setAttribute("uv",new gi(x,m)),T.setAttribute("faceIndex",new gi(b,p)),e.push(T),n>js&&n--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Kg(r,e,t){let i=new $i(r,e,t);return i.texture.mapping=ua,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Jc(r,e,t,i,n){r.viewport.set(e,t,i,n),r.scissor.set(e,t,i,n)}function QM(r,e,t){let i=new Float32Array(Zs),n=new G(0,1,0);return new ki({name:"SphericalGaussianBlur",defines:{n:Zs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:Vd(),fragmentShader:`

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
		`,blending:Mn,depthTest:!1,depthWrite:!1})}function Jg(){return new ki({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Vd(),fragmentShader:`

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
		`,blending:Mn,depthTest:!1,depthWrite:!1})}function Qg(){return new ki({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Vd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Mn,depthTest:!1,depthWrite:!1})}function Vd(){return`

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
	`}function eE(r){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===fc||l===pc,h=l===Br||l===kr;if(c||h){let u=e.get(a),d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new eh(r)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{let f=a.image;return c&&f&&f.height>0||h&&f&&n(f)?(t===null&&(t=new eh(r)),u=c?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",s),u.texture):null}}}return a}function n(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){let l=a.target;l.removeEventListener("dispose",s);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function tE(r){let e={};function t(i){if(e[i]!==void 0)return e[i];let n;switch(i){case"WEBGL_depth_texture":n=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=r.getExtension(i)}return e[i]=n,n}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let n=t(i);return n===null&&Fs("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function iE(r,e,t,i){let n={},s=new WeakMap;function o(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let _ in d.attributes)e.remove(d.attributes[_]);d.removeEventListener("dispose",o),delete n[d.id];let f=s.get(d);f&&(e.remove(f),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return n[d.id]===!0||(d.addEventListener("dispose",o),n[d.id]=!0,t.memory.geometries++),d}function l(u){let d=u.attributes;for(let f in d)e.update(d[f],r.ARRAY_BUFFER)}function c(u){let d=[],f=u.index,_=u.attributes.position,g=0;if(f!==null){let S=f.array;g=f.version;for(let x=0,b=S.length;x<b;x+=3){let T=S[x+0],C=S[x+1],L=S[x+2];d.push(T,C,C,L,L,T)}}else if(_!==void 0){let S=_.array;g=_.version;for(let x=0,b=S.length/3-1;x<b;x+=3){let T=x+0,C=x+1,L=x+2;d.push(T,C,C,L,L,T)}}else return;let m=new(Md(d)?Ko:$o)(d,1);m.version=g;let p=s.get(u);p&&e.remove(p),s.set(u,m)}function h(u){let d=s.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return s.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function nE(r,e,t){let i;function n(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,f){r.drawElements(i,f,s,d*o),t.update(f,i,1)}function c(d,f,_){_!==0&&(r.drawElementsInstanced(i,f,s,d*o,_),t.update(f,i,_))}function h(d,f,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,d,0,_);let m=0;for(let p=0;p<_;p++)m+=f[p];t.update(m,i,1)}function u(d,f,_,g){if(_===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/o,f[p],g[p]);else{m.multiDrawElementsInstancedWEBGL(i,f,0,s,d,0,g,0,_);let p=0;for(let S=0;S<_;S++)p+=f[S]*g[S];t.update(p,i,1)}}this.setMode=n,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function rE(r){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:break}}function n(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:n,update:i}}function sE(r,e,t){let i=new WeakMap,n=new bt;function s(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=i.get(a);if(d===void 0||d.count!==u){let M=function(){L.dispose(),i.delete(a),a.removeEventListener("dispose",M)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],S=a.morphAttributes.color||[],x=0;f===!0&&(x=1),_===!0&&(x=2),g===!0&&(x=3);let b=a.attributes.position.count*x,T=1;b>e.maxTextureSize&&(T=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);let C=new Float32Array(b*T*4*u),L=new jo(C,b,T,u);L.type=tn,L.needsUpdate=!0;let P=x*4;for(let E=0;E<u;E++){let O=m[E],V=p[E],W=S[E],$=b*T*4*E;for(let K=0;K<O.count;K++){let q=K*P;f===!0&&(n.fromBufferAttribute(O,K),C[$+q+0]=n.x,C[$+q+1]=n.y,C[$+q+2]=n.z,C[$+q+3]=0),_===!0&&(n.fromBufferAttribute(V,K),C[$+q+4]=n.x,C[$+q+5]=n.y,C[$+q+6]=n.z,C[$+q+7]=0),g===!0&&(n.fromBufferAttribute(W,K),C[$+q+8]=n.x,C[$+q+9]=n.y,C[$+q+10]=n.z,C[$+q+11]=W.itemSize===4?n.w:1)}}d={count:u,texture:L,size:new ze(b,T)},i.set(a,d),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,t);else{let f=0;for(let g=0;g<c.length;g++)f+=c[g];let _=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(r,"morphTargetBaseInfluence",_),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function oE(r,e,t,i){let n=new WeakMap;function s(l){let c=i.render.frame,h=l.geometry,u=e.get(l,h);if(n.get(u)!==c&&(e.update(u),n.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),n.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),n.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;n.get(d)!==c&&(d.update(),n.set(d,c))}return u}function o(){n=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}var _v=new Qt,ev=new na(1,1),yv=new jo,xv=new Vl,bv=new Qo,tv=[],iv=[],nv=new Float32Array(16),rv=new Float32Array(9),sv=new Float32Array(4);function Ks(r,e,t){let i=r[0];if(i<=0||i>0)return r;let n=e*t,s=tv[n];if(s===void 0&&(s=new Float32Array(n),tv[n]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function Rt(r,e){if(r.length!==e.length)return!1;for(let t=0,i=r.length;t<i;t++)if(r[t]!==e[t])return!1;return!0}function Pt(r,e){for(let t=0,i=e.length;t<i;t++)r[t]=e[t]}function ih(r,e){let t=iv[e];t===void 0&&(t=new Int32Array(e),iv[e]=t);for(let i=0;i!==e;++i)t[i]=r.allocateTextureUnit();return t}function aE(r,e){let t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function lE(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;r.uniform2fv(this.addr,e),Pt(t,e)}}function cE(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Rt(t,e))return;r.uniform3fv(this.addr,e),Pt(t,e)}}function hE(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;r.uniform4fv(this.addr,e),Pt(t,e)}}function uE(r,e){let t=this.cache,i=e.elements;if(i===void 0){if(Rt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Pt(t,e)}else{if(Rt(t,i))return;sv.set(i),r.uniformMatrix2fv(this.addr,!1,sv),Pt(t,i)}}function dE(r,e){let t=this.cache,i=e.elements;if(i===void 0){if(Rt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Pt(t,e)}else{if(Rt(t,i))return;rv.set(i),r.uniformMatrix3fv(this.addr,!1,rv),Pt(t,i)}}function fE(r,e){let t=this.cache,i=e.elements;if(i===void 0){if(Rt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Pt(t,e)}else{if(Rt(t,i))return;nv.set(i),r.uniformMatrix4fv(this.addr,!1,nv),Pt(t,i)}}function pE(r,e){let t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function mE(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;r.uniform2iv(this.addr,e),Pt(t,e)}}function gE(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rt(t,e))return;r.uniform3iv(this.addr,e),Pt(t,e)}}function vE(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;r.uniform4iv(this.addr,e),Pt(t,e)}}function _E(r,e){let t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function yE(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Rt(t,e))return;r.uniform2uiv(this.addr,e),Pt(t,e)}}function xE(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Rt(t,e))return;r.uniform3uiv(this.addr,e),Pt(t,e)}}function bE(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Rt(t,e))return;r.uniform4uiv(this.addr,e),Pt(t,e)}}function SE(r,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n);let s;this.type===r.SAMPLER_2D_SHADOW?(ev.compareFunction=xd,s=ev):s=_v,t.setTexture2D(e||s,n)}function ME(r,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTexture3D(e||xv,n)}function EE(r,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTextureCube(e||bv,n)}function wE(r,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTexture2DArray(e||yv,n)}function TE(r){switch(r){case 5126:return aE;case 35664:return lE;case 35665:return cE;case 35666:return hE;case 35674:return uE;case 35675:return dE;case 35676:return fE;case 5124:case 35670:return pE;case 35667:case 35671:return mE;case 35668:case 35672:return gE;case 35669:case 35673:return vE;case 5125:return _E;case 36294:return yE;case 36295:return xE;case 36296:return bE;case 35678:case 36198:case 36298:case 36306:case 35682:return SE;case 35679:case 36299:case 36307:return ME;case 35680:case 36300:case 36308:case 36293:return EE;case 36289:case 36303:case 36311:case 36292:return wE}}function AE(r,e){r.uniform1fv(this.addr,e)}function CE(r,e){let t=Ks(e,this.size,2);r.uniform2fv(this.addr,t)}function RE(r,e){let t=Ks(e,this.size,3);r.uniform3fv(this.addr,t)}function PE(r,e){let t=Ks(e,this.size,4);r.uniform4fv(this.addr,t)}function LE(r,e){let t=Ks(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function IE(r,e){let t=Ks(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function DE(r,e){let t=Ks(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function OE(r,e){r.uniform1iv(this.addr,e)}function FE(r,e){r.uniform2iv(this.addr,e)}function NE(r,e){r.uniform3iv(this.addr,e)}function UE(r,e){r.uniform4iv(this.addr,e)}function BE(r,e){r.uniform1uiv(this.addr,e)}function kE(r,e){r.uniform2uiv(this.addr,e)}function HE(r,e){r.uniform3uiv(this.addr,e)}function zE(r,e){r.uniform4uiv(this.addr,e)}function VE(r,e,t){let i=this.cache,n=e.length,s=ih(t,n);Rt(i,s)||(r.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==n;++o)t.setTexture2D(e[o]||_v,s[o])}function GE(r,e,t){let i=this.cache,n=e.length,s=ih(t,n);Rt(i,s)||(r.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==n;++o)t.setTexture3D(e[o]||xv,s[o])}function WE(r,e,t){let i=this.cache,n=e.length,s=ih(t,n);Rt(i,s)||(r.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==n;++o)t.setTextureCube(e[o]||bv,s[o])}function XE(r,e,t){let i=this.cache,n=e.length,s=ih(t,n);Rt(i,s)||(r.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==n;++o)t.setTexture2DArray(e[o]||yv,s[o])}function qE(r){switch(r){case 5126:return AE;case 35664:return CE;case 35665:return RE;case 35666:return PE;case 35674:return LE;case 35675:return IE;case 35676:return DE;case 5124:case 35670:return OE;case 35667:case 35671:return FE;case 35668:case 35672:return NE;case 35669:case 35673:return UE;case 5125:return BE;case 36294:return kE;case 36295:return HE;case 36296:return zE;case 35678:case 36198:case 36298:case 36306:case 35682:return VE;case 35679:case 36299:case 36307:return GE;case 35680:case 36300:case 36308:case 36293:return WE;case 36289:case 36303:case 36311:case 36292:return XE}}var Od=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=TE(t.type)}},Fd=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=qE(t.type)}},Nd=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let n=this.seq;for(let s=0,o=n.length;s!==o;++s){let a=n[s];a.setValue(e,t[a.id],i)}}},Dd=/(\w+)(\])?(\[|\.)?/g;function ov(r,e){r.seq.push(e),r.map[e.id]=e}function YE(r,e,t){let i=r.name,n=i.length;for(Dd.lastIndex=0;;){let s=Dd.exec(i),o=Dd.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===n){ov(t,c===void 0?new Od(a,r,e):new Fd(a,r,e));break}else{let u=t.map[a];u===void 0&&(u=new Nd(a),ov(t,u)),t=u}}}var $s=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){let s=e.getActiveUniform(t,n),o=e.getUniformLocation(t,s.name);YE(s,o,this)}}setValue(e,t,i,n){let s=this.map[t];s!==void 0&&s.setValue(e,i,n)}setOptional(e,t,i){let n=t[i];n!==void 0&&this.setValue(e,i,n)}static upload(e,t,i,n){for(let s=0,o=t.length;s!==o;++s){let a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,n)}}static seqWithValue(e,t){let i=[];for(let n=0,s=e.length;n!==s;++n){let o=e[n];o.id in t&&i.push(o)}return i}};function av(r,e,t){let i=r.createShader(e);return r.shaderSource(i,t),r.compileShader(i),i}var jE=37297,ZE=0;function $E(r,e){let t=r.split(`
`),i=[],n=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=n;o<s;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var lv=new ke;function KE(r){Ke._getMatrix(lv,Ke.workingColorSpace,r);let e=`mat3( ${lv.elements.map(t=>t.toFixed(4))} )`;switch(Ke.getTransfer(r)){case qo:return[e,"LinearTransferOETF"];case tt:return[e,"sRGBTransferOETF"];default:return[e,"LinearTransferOETF"]}}function cv(r,e,t){let i=r.getShaderParameter(e,r.COMPILE_STATUS),s=(r.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+$E(r.getShaderSource(e),a)}else return s}function JE(r,e){let t=KE(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function QE(r,e){let t;switch(e){case Eg:t="Linear";break;case wg:t="Reinhard";break;case Tg:t="Cineon";break;case Ag:t="ACESFilmic";break;case Rg:t="AgX";break;case Pg:t="Neutral";break;case Cg:t="Custom";break;default:t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Qc=new G;function ew(){Ke.getLuminanceCoefficients(Qc);let r=Qc.x.toFixed(4),e=Qc.y.toFixed(4),t=Qc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function tw(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(va).join(`
`)}function iw(r){let e=[];for(let t in r){let i=r[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function nw(r,e){let t={},i=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){let s=r.getActiveAttrib(e,n),o=s.name,a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function va(r){return r!==""}function hv(r,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function uv(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var rw=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ud(r){return r.replace(rw,ow)}var sw=new Map;function ow(r,e){let t=We[e];if(t===void 0){let i=sw.get(e);if(i!==void 0)t=We[i];else throw new Error("Can not resolve #include <"+e+">")}return Ud(t)}var aw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function dv(r){return r.replace(aw,lw)}function lw(r,e,t,i){let n="";for(let s=parseInt(e);s<parseInt(t);s++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return n}function fv(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}function cw(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===od?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===ng?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Ji&&(e="SHADOWMAP_TYPE_VSM"),e}function hw(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Br:case kr:e="ENVMAP_TYPE_CUBE";break;case ua:e="ENVMAP_TYPE_CUBE_UV";break}return e}function uw(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case kr:e="ENVMAP_MODE_REFRACTION";break}return e}function dw(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case hd:e="ENVMAP_BLENDING_MULTIPLY";break;case Sg:e="ENVMAP_BLENDING_MIX";break;case Mg:e="ENVMAP_BLENDING_ADD";break}return e}function fw(r){let e=r.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function pw(r,e,t,i){let n=r.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,l=cw(t),c=hw(t),h=uw(t),u=dw(t),d=fw(t),f=tw(t),_=iw(s),g=n.createProgram(),m,p,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(va).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(va).join(`
`),p.length>0&&(p+=`
`)):(m=[fv(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(va).join(`
`),p=[fv(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==En?"#define TONE_MAPPING":"",t.toneMapping!==En?We.tonemapping_pars_fragment:"",t.toneMapping!==En?QE("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",We.colorspace_pars_fragment,JE("linearToOutputTexel",t.outputColorSpace),ew(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(va).join(`
`)),o=Ud(o),o=hv(o,t),o=uv(o,t),a=Ud(a),a=hv(a,t),a=uv(a,t),o=dv(o),a=dv(a),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===bd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===bd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let x=S+m+o,b=S+p+a,T=av(n,n.VERTEX_SHADER,x),C=av(n,n.FRAGMENT_SHADER,b);n.attachShader(g,T),n.attachShader(g,C),t.index0AttributeName!==void 0?n.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&n.bindAttribLocation(g,0,"position"),n.linkProgram(g);function L(O){if(r.debug.checkShaderErrors){let V=n.getProgramInfoLog(g)||"",W=n.getShaderInfoLog(T)||"",$=n.getShaderInfoLog(C)||"",K=V.trim(),q=W.trim(),oe=$.trim(),X=!0,fe=!0;if(n.getProgramParameter(g,n.LINK_STATUS)===!1)if(X=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(n,g,T,C);else{let ye=cv(n,T,"vertex"),we=cv(n,C,"fragment")}else K!==""||(q===""||oe==="")&&(fe=!1);fe&&(O.diagnostics={runnable:X,programLog:K,vertexShader:{log:q,prefix:m},fragmentShader:{log:oe,prefix:p}})}n.deleteShader(T),n.deleteShader(C),P=new $s(n,g),M=nw(n,g)}let P;this.getUniforms=function(){return P===void 0&&L(this),P};let M;this.getAttributes=function(){return M===void 0&&L(this),M};let E=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=n.getProgramParameter(g,jE)),E},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ZE++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=T,this.fragmentShader=C,this}var mw=0,Bd=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,n=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(n)===!1&&(o.add(n),n.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new kd(e),t.set(e,i)),i}},kd=class{constructor(e){this.id=mw++,this.code=e,this.usedTimes=0}};function gw(r,e,t,i,n,s,o){let a=new Bs,l=new Bd,c=new Set,h=[],u=n.logarithmicDepthBuffer,d=n.vertexTextures,f=n.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(M){return c.add(M),M===0?"uv":`uv${M}`}function m(M,E,O,V,W){let $=V.fog,K=W.geometry,q=M.isMeshStandardMaterial?V.environment:null,oe=(M.isMeshStandardMaterial?t:e).get(M.envMap||q),X=oe&&oe.mapping===ua?oe.image.height:null,fe=_[M.type];M.precision!==null&&(f=n.getMaxPrecision(M.precision),M.precision);let ye=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,we=ye!==void 0?ye.length:0,Ne=0;K.morphAttributes.position!==void 0&&(Ne=1),K.morphAttributes.normal!==void 0&&(Ne=2),K.morphAttributes.color!==void 0&&(Ne=3);let Qe,Xe,Ve,ee;if(fe){let Me=nn[fe];Qe=Me.vertexShader,Xe=Me.fragmentShader}else Qe=M.vertexShader,Xe=M.fragmentShader,l.update(M),Ve=l.getVertexShaderID(M),ee=l.getFragmentShaderID(M);let ce=r.getRenderTarget(),Ee=r.state.buffers.depth.getReversed(),Ue=W.isInstancedMesh===!0,Re=W.isBatchedMesh===!0,qe=!!M.map,Lt=!!M.matcap,D=!!oe,ot=!!M.aoMap,Fe=!!M.lightMap,De=!!M.bumpMap,Te=!!M.normalMap,at=!!M.displacementMap,Ae=!!M.emissiveMap,U=!!M.metalnessMap,F=!!M.roughnessMap,w=M.anisotropy>0,v=M.clearcoat>0,y=M.dispersion>0,R=M.iridescence>0,N=M.sheen>0,k=M.transmission>0,I=w&&!!M.anisotropyMap,Q=v&&!!M.clearcoatMap,ne=v&&!!M.clearcoatNormalMap,he=v&&!!M.clearcoatRoughnessMap,ie=R&&!!M.iridescenceMap,te=R&&!!M.iridescenceThicknessMap,se=N&&!!M.sheenColorMap,pe=N&&!!M.sheenRoughnessMap,me=!!M.specularMap,le=!!M.specularColorMap,Pe=!!M.specularIntensityMap,B=k&&!!M.transmissionMap,ae=k&&!!M.thicknessMap,de=!!M.gradientMap,ge=!!M.alphaMap,re=M.alphaTest>0,J=!!M.alphaHash,xe=!!M.extensions,ve=En;M.toneMapped&&(ce===null||ce.isXRRenderTarget===!0)&&(ve=r.toneMapping);let Ge={shaderID:fe,shaderType:M.type,shaderName:M.name,vertexShader:Qe,fragmentShader:Xe,defines:M.defines,customVertexShaderID:Ve,customFragmentShaderID:ee,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:Re,batchingColor:Re&&W._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&W.instanceColor!==null,instancingMorph:Ue&&W.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ce===null?r.outputColorSpace:ce.isXRRenderTarget===!0?ce.texture.colorSpace:Or,alphaToCoverage:!!M.alphaToCoverage,map:qe,matcap:Lt,envMap:D,envMapMode:D&&oe.mapping,envMapCubeUVHeight:X,aoMap:ot,lightMap:Fe,bumpMap:De,normalMap:Te,displacementMap:d&&at,emissiveMap:Ae,normalMapObjectSpace:Te&&M.normalMapType===Fg,normalMapTangentSpace:Te&&M.normalMapType===Og,metalnessMap:U,roughnessMap:F,anisotropy:w,anisotropyMap:I,clearcoat:v,clearcoatMap:Q,clearcoatNormalMap:ne,clearcoatRoughnessMap:he,dispersion:y,iridescence:R,iridescenceMap:ie,iridescenceThicknessMap:te,sheen:N,sheenColorMap:se,sheenRoughnessMap:pe,specularMap:me,specularColorMap:le,specularIntensityMap:Pe,transmission:k,transmissionMap:B,thicknessMap:ae,gradientMap:de,opaque:M.transparent===!1&&M.blending===Ir&&M.alphaToCoverage===!1,alphaMap:ge,alphaTest:re,alphaHash:J,combine:M.combine,mapUv:qe&&g(M.map.channel),aoMapUv:ot&&g(M.aoMap.channel),lightMapUv:Fe&&g(M.lightMap.channel),bumpMapUv:De&&g(M.bumpMap.channel),normalMapUv:Te&&g(M.normalMap.channel),displacementMapUv:at&&g(M.displacementMap.channel),emissiveMapUv:Ae&&g(M.emissiveMap.channel),metalnessMapUv:U&&g(M.metalnessMap.channel),roughnessMapUv:F&&g(M.roughnessMap.channel),anisotropyMapUv:I&&g(M.anisotropyMap.channel),clearcoatMapUv:Q&&g(M.clearcoatMap.channel),clearcoatNormalMapUv:ne&&g(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:he&&g(M.clearcoatRoughnessMap.channel),iridescenceMapUv:ie&&g(M.iridescenceMap.channel),iridescenceThicknessMapUv:te&&g(M.iridescenceThicknessMap.channel),sheenColorMapUv:se&&g(M.sheenColorMap.channel),sheenRoughnessMapUv:pe&&g(M.sheenRoughnessMap.channel),specularMapUv:me&&g(M.specularMap.channel),specularColorMapUv:le&&g(M.specularColorMap.channel),specularIntensityMapUv:Pe&&g(M.specularIntensityMap.channel),transmissionMapUv:B&&g(M.transmissionMap.channel),thicknessMapUv:ae&&g(M.thicknessMap.channel),alphaMapUv:ge&&g(M.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(Te||w),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!K.attributes.uv&&(qe||ge),fog:!!$,useFog:M.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:Ee,skinning:W.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:we,morphTextureStride:Ne,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:r.shadowMap.enabled&&O.length>0,shadowMapType:r.shadowMap.type,toneMapping:ve,decodeVideoTexture:qe&&M.map.isVideoTexture===!0&&Ke.getTransfer(M.map.colorSpace)===tt,decodeVideoTextureEmissive:Ae&&M.emissiveMap.isVideoTexture===!0&&Ke.getTransfer(M.emissiveMap.colorSpace)===tt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===xi,flipSided:M.side===ei,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:xe&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(xe&&M.extensions.multiDraw===!0||Re)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Ge.vertexUv1s=c.has(1),Ge.vertexUv2s=c.has(2),Ge.vertexUv3s=c.has(3),c.clear(),Ge}function p(M){let E=[];if(M.shaderID?E.push(M.shaderID):(E.push(M.customVertexShaderID),E.push(M.customFragmentShaderID)),M.defines!==void 0)for(let O in M.defines)E.push(O),E.push(M.defines[O]);return M.isRawShaderMaterial===!1&&(S(E,M),x(E,M),E.push(r.outputColorSpace)),E.push(M.customProgramCacheKey),E.join()}function S(M,E){M.push(E.precision),M.push(E.outputColorSpace),M.push(E.envMapMode),M.push(E.envMapCubeUVHeight),M.push(E.mapUv),M.push(E.alphaMapUv),M.push(E.lightMapUv),M.push(E.aoMapUv),M.push(E.bumpMapUv),M.push(E.normalMapUv),M.push(E.displacementMapUv),M.push(E.emissiveMapUv),M.push(E.metalnessMapUv),M.push(E.roughnessMapUv),M.push(E.anisotropyMapUv),M.push(E.clearcoatMapUv),M.push(E.clearcoatNormalMapUv),M.push(E.clearcoatRoughnessMapUv),M.push(E.iridescenceMapUv),M.push(E.iridescenceThicknessMapUv),M.push(E.sheenColorMapUv),M.push(E.sheenRoughnessMapUv),M.push(E.specularMapUv),M.push(E.specularColorMapUv),M.push(E.specularIntensityMapUv),M.push(E.transmissionMapUv),M.push(E.thicknessMapUv),M.push(E.combine),M.push(E.fogExp2),M.push(E.sizeAttenuation),M.push(E.morphTargetsCount),M.push(E.morphAttributeCount),M.push(E.numDirLights),M.push(E.numPointLights),M.push(E.numSpotLights),M.push(E.numSpotLightMaps),M.push(E.numHemiLights),M.push(E.numRectAreaLights),M.push(E.numDirLightShadows),M.push(E.numPointLightShadows),M.push(E.numSpotLightShadows),M.push(E.numSpotLightShadowsWithMaps),M.push(E.numLightProbes),M.push(E.shadowMapType),M.push(E.toneMapping),M.push(E.numClippingPlanes),M.push(E.numClipIntersection),M.push(E.depthPacking)}function x(M,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),E.gradientMap&&a.enable(22),M.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),M.push(a.mask)}function b(M){let E=_[M.type],O;if(E){let V=nn[E];O=qg.clone(V.uniforms)}else O=M.uniforms;return O}function T(M,E){let O;for(let V=0,W=h.length;V<W;V++){let $=h[V];if($.cacheKey===E){O=$,++O.usedTimes;break}}return O===void 0&&(O=new pw(r,E,M,s),h.push(O)),O}function C(M){if(--M.usedTimes===0){let E=h.indexOf(M);h[E]=h[h.length-1],h.pop(),M.destroy()}}function L(M){l.remove(M)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:b,acquireProgram:T,releaseProgram:C,releaseShaderCache:L,programs:h,dispose:P}}function vw(){let r=new WeakMap;function e(o){return r.has(o)}function t(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function i(o){r.delete(o)}function n(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:i,update:n,dispose:s}}function _w(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function pv(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function mv(){let r=[],e=0,t=[],i=[],n=[];function s(){e=0,t.length=0,i.length=0,n.length=0}function o(u,d,f,_,g,m){let p=r[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:_,renderOrder:u.renderOrder,z:g,group:m},r[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=_,p.renderOrder=u.renderOrder,p.z=g,p.group=m),e++,p}function a(u,d,f,_,g,m){let p=o(u,d,f,_,g,m);f.transmission>0?i.push(p):f.transparent===!0?n.push(p):t.push(p)}function l(u,d,f,_,g,m){let p=o(u,d,f,_,g,m);f.transmission>0?i.unshift(p):f.transparent===!0?n.unshift(p):t.unshift(p)}function c(u,d){t.length>1&&t.sort(u||_w),i.length>1&&i.sort(d||pv),n.length>1&&n.sort(d||pv)}function h(){for(let u=e,d=r.length;u<d;u++){let f=r[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:n,init:s,push:a,unshift:l,finish:h,sort:c}}function yw(){let r=new WeakMap;function e(i,n){let s=r.get(i),o;return s===void 0?(o=new mv,r.set(i,[o])):n>=s.length?(o=new mv,s.push(o)):o=s[n],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function xw(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new G,color:new $e};break;case"SpotLight":t={position:new G,direction:new G,color:new $e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new G,color:new $e,distance:0,decay:0};break;case"HemisphereLight":t={direction:new G,skyColor:new $e,groundColor:new $e};break;case"RectAreaLight":t={color:new $e,position:new G,halfWidth:new G,halfHeight:new G};break}return r[e.id]=t,t}}}function bw(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}var Sw=0;function Mw(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function Ew(r){let e=new xw,t=bw(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new G);let n=new G,s=new At,o=new At;function a(c){let h=0,u=0,d=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let f=0,_=0,g=0,m=0,p=0,S=0,x=0,b=0,T=0,C=0,L=0;c.sort(Mw);for(let M=0,E=c.length;M<E;M++){let O=c[M],V=O.color,W=O.intensity,$=O.distance,K=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)h+=V.r*W,u+=V.g*W,d+=V.b*W;else if(O.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(O.sh.coefficients[q],W);L++}else if(O.isDirectionalLight){let q=e.get(O);if(q.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){let oe=O.shadow,X=t.get(O);X.shadowIntensity=oe.intensity,X.shadowBias=oe.bias,X.shadowNormalBias=oe.normalBias,X.shadowRadius=oe.radius,X.shadowMapSize=oe.mapSize,i.directionalShadow[f]=X,i.directionalShadowMap[f]=K,i.directionalShadowMatrix[f]=O.shadow.matrix,S++}i.directional[f]=q,f++}else if(O.isSpotLight){let q=e.get(O);q.position.setFromMatrixPosition(O.matrixWorld),q.color.copy(V).multiplyScalar(W),q.distance=$,q.coneCos=Math.cos(O.angle),q.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),q.decay=O.decay,i.spot[g]=q;let oe=O.shadow;if(O.map&&(i.spotLightMap[T]=O.map,T++,oe.updateMatrices(O),O.castShadow&&C++),i.spotLightMatrix[g]=oe.matrix,O.castShadow){let X=t.get(O);X.shadowIntensity=oe.intensity,X.shadowBias=oe.bias,X.shadowNormalBias=oe.normalBias,X.shadowRadius=oe.radius,X.shadowMapSize=oe.mapSize,i.spotShadow[g]=X,i.spotShadowMap[g]=K,b++}g++}else if(O.isRectAreaLight){let q=e.get(O);q.color.copy(V).multiplyScalar(W),q.halfWidth.set(O.width*.5,0,0),q.halfHeight.set(0,O.height*.5,0),i.rectArea[m]=q,m++}else if(O.isPointLight){let q=e.get(O);if(q.color.copy(O.color).multiplyScalar(O.intensity),q.distance=O.distance,q.decay=O.decay,O.castShadow){let oe=O.shadow,X=t.get(O);X.shadowIntensity=oe.intensity,X.shadowBias=oe.bias,X.shadowNormalBias=oe.normalBias,X.shadowRadius=oe.radius,X.shadowMapSize=oe.mapSize,X.shadowCameraNear=oe.camera.near,X.shadowCameraFar=oe.camera.far,i.pointShadow[_]=X,i.pointShadowMap[_]=K,i.pointShadowMatrix[_]=O.shadow.matrix,x++}i.point[_]=q,_++}else if(O.isHemisphereLight){let q=e.get(O);q.skyColor.copy(O.color).multiplyScalar(W),q.groundColor.copy(O.groundColor).multiplyScalar(W),i.hemi[p]=q,p++}}m>0&&(r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=_e.LTC_FLOAT_1,i.rectAreaLTC2=_e.LTC_FLOAT_2):(i.rectAreaLTC1=_e.LTC_HALF_1,i.rectAreaLTC2=_e.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;let P=i.hash;(P.directionalLength!==f||P.pointLength!==_||P.spotLength!==g||P.rectAreaLength!==m||P.hemiLength!==p||P.numDirectionalShadows!==S||P.numPointShadows!==x||P.numSpotShadows!==b||P.numSpotMaps!==T||P.numLightProbes!==L)&&(i.directional.length=f,i.spot.length=g,i.rectArea.length=m,i.point.length=_,i.hemi.length=p,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=b+T-C,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=L,P.directionalLength=f,P.pointLength=_,P.spotLength=g,P.rectAreaLength=m,P.hemiLength=p,P.numDirectionalShadows=S,P.numPointShadows=x,P.numSpotShadows=b,P.numSpotMaps=T,P.numLightProbes=L,i.version=Sw++)}function l(c,h){let u=0,d=0,f=0,_=0,g=0,m=h.matrixWorldInverse;for(let p=0,S=c.length;p<S;p++){let x=c[p];if(x.isDirectionalLight){let b=i.directional[u];b.direction.setFromMatrixPosition(x.matrixWorld),n.setFromMatrixPosition(x.target.matrixWorld),b.direction.sub(n),b.direction.transformDirection(m),u++}else if(x.isSpotLight){let b=i.spot[f];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(x.matrixWorld),n.setFromMatrixPosition(x.target.matrixWorld),b.direction.sub(n),b.direction.transformDirection(m),f++}else if(x.isRectAreaLight){let b=i.rectArea[_];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(m),o.identity(),s.copy(x.matrixWorld),s.premultiply(m),o.extractRotation(s),b.halfWidth.set(x.width*.5,0,0),b.halfHeight.set(0,x.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),_++}else if(x.isPointLight){let b=i.point[d];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(m),d++}else if(x.isHemisphereLight){let b=i.hemi[g];b.direction.setFromMatrixPosition(x.matrixWorld),b.direction.transformDirection(m),g++}}}return{setup:a,setupView:l,state:i}}function gv(r){let e=new Ew(r),t=[],i=[];function n(h){c.camera=h,t.length=0,i.length=0}function s(h){t.push(h)}function o(h){i.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}let c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:n,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function ww(r){let e=new WeakMap;function t(n,s=0){let o=e.get(n),a;return o===void 0?(a=new gv(r),e.set(n,[a])):s>=o.length?(a=new gv(r),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var Tw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Aw=`uniform sampler2D shadow_pass;
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
}`;function Cw(r,e,t){let i=new ta,n=new ze,s=new ze,o=new bt,a=new Xl({depthPacking:Dg}),l=new ql,c={},h=t.maxTextureSize,u={[Sn]:ei,[ei]:Sn,[xi]:xi},d=new ki({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ze},radius:{value:4}},vertexShader:Tw,fragmentShader:Aw}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let _=new Kn;_.setAttribute("position",new gi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new li(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=od;let p=this.type;this.render=function(C,L,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;let M=r.getRenderTarget(),E=r.getActiveCubeFace(),O=r.getActiveMipmapLevel(),V=r.state;V.setBlending(Mn),V.buffers.depth.getReversed()===!0?V.buffers.color.setClear(0,0,0,0):V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);let W=p!==Ji&&this.type===Ji,$=p===Ji&&this.type!==Ji;for(let K=0,q=C.length;K<q;K++){let oe=C[K],X=oe.shadow;if(X===void 0||X.autoUpdate===!1&&X.needsUpdate===!1)continue;n.copy(X.mapSize);let fe=X.getFrameExtents();if(n.multiply(fe),s.copy(X.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(s.x=Math.floor(h/fe.x),n.x=s.x*fe.x,X.mapSize.x=s.x),n.y>h&&(s.y=Math.floor(h/fe.y),n.y=s.y*fe.y,X.mapSize.y=s.y)),X.map===null||W===!0||$===!0){let we=this.type!==Ji?{minFilter:Ii,magFilter:Ii}:{};X.map!==null&&X.map.dispose(),X.map=new $i(n.x,n.y,we),X.map.texture.name=oe.name+".shadowMap",X.camera.updateProjectionMatrix()}r.setRenderTarget(X.map),r.clear();let ye=X.getViewportCount();for(let we=0;we<ye;we++){let Ne=X.getViewport(we);o.set(s.x*Ne.x,s.y*Ne.y,s.x*Ne.z,s.y*Ne.w),V.viewport(o),X.updateMatrices(oe,we),i=X.getFrustum(),b(L,P,X.camera,oe,this.type)}X.isPointLightShadow!==!0&&this.type===Ji&&S(X,P),X.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(M,E,O)};function S(C,L){let P=e.update(g);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,f.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new $i(n.x,n.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,r.setRenderTarget(C.mapPass),r.clear(),r.renderBufferDirect(L,null,P,d,g,null),f.uniforms.shadow_pass.value=C.mapPass.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,r.setRenderTarget(C.map),r.clear(),r.renderBufferDirect(L,null,P,f,g,null)}function x(C,L,P,M){let E=null,O=P.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(O!==void 0)E=O;else if(E=P.isPointLight===!0?l:a,r.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){let V=E.uuid,W=L.uuid,$=c[V];$===void 0&&($={},c[V]=$);let K=$[W];K===void 0&&(K=E.clone(),$[W]=K,L.addEventListener("dispose",T)),E=K}if(E.visible=L.visible,E.wireframe=L.wireframe,M===Ji?E.side=L.shadowSide!==null?L.shadowSide:L.side:E.side=L.shadowSide!==null?L.shadowSide:u[L.side],E.alphaMap=L.alphaMap,E.alphaTest=L.alphaToCoverage===!0?.5:L.alphaTest,E.map=L.map,E.clipShadows=L.clipShadows,E.clippingPlanes=L.clippingPlanes,E.clipIntersection=L.clipIntersection,E.displacementMap=L.displacementMap,E.displacementScale=L.displacementScale,E.displacementBias=L.displacementBias,E.wireframeLinewidth=L.wireframeLinewidth,E.linewidth=L.linewidth,P.isPointLight===!0&&E.isMeshDistanceMaterial===!0){let V=r.properties.get(E);V.light=P}return E}function b(C,L,P,M,E){if(C.visible===!1)return;if(C.layers.test(L.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&E===Ji)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,C.matrixWorld);let W=e.update(C),$=C.material;if(Array.isArray($)){let K=W.groups;for(let q=0,oe=K.length;q<oe;q++){let X=K[q],fe=$[X.materialIndex];if(fe&&fe.visible){let ye=x(C,fe,M,E);C.onBeforeShadow(r,C,L,P,W,ye,X),r.renderBufferDirect(P,null,W,ye,C,X),C.onAfterShadow(r,C,L,P,W,ye,X)}}}else if($.visible){let K=x(C,$,M,E);C.onBeforeShadow(r,C,L,P,W,K,null),r.renderBufferDirect(P,null,W,K,C,null),C.onAfterShadow(r,C,L,P,W,K,null)}}let V=C.children;for(let W=0,$=V.length;W<$;W++)b(V[W],L,P,M,E)}function T(C){C.target.removeEventListener("dispose",T);for(let P in c){let M=c[P],E=C.target.uuid;E in M&&(M[E].dispose(),delete M[E])}}}var Rw={[oc]:ac,[lc]:uc,[cc]:dc,[Dr]:hc,[ac]:oc,[uc]:lc,[dc]:cc,[hc]:Dr};function Pw(r,e){function t(){let B=!1,ae=new bt,de=null,ge=new bt(0,0,0,0);return{setMask:function(re){de!==re&&!B&&(r.colorMask(re,re,re,re),de=re)},setLocked:function(re){B=re},setClear:function(re,J,xe,ve,Ge){Ge===!0&&(re*=ve,J*=ve,xe*=ve),ae.set(re,J,xe,ve),ge.equals(ae)===!1&&(r.clearColor(re,J,xe,ve),ge.copy(ae))},reset:function(){B=!1,de=null,ge.set(-1,0,0,0)}}}function i(){let B=!1,ae=!1,de=null,ge=null,re=null;return{setReversed:function(J){if(ae!==J){let xe=e.get("EXT_clip_control");J?xe.clipControlEXT(xe.LOWER_LEFT_EXT,xe.ZERO_TO_ONE_EXT):xe.clipControlEXT(xe.LOWER_LEFT_EXT,xe.NEGATIVE_ONE_TO_ONE_EXT),ae=J;let ve=re;re=null,this.setClear(ve)}},getReversed:function(){return ae},setTest:function(J){J?ce(r.DEPTH_TEST):Ee(r.DEPTH_TEST)},setMask:function(J){de!==J&&!B&&(r.depthMask(J),de=J)},setFunc:function(J){if(ae&&(J=Rw[J]),ge!==J){switch(J){case oc:r.depthFunc(r.NEVER);break;case ac:r.depthFunc(r.ALWAYS);break;case lc:r.depthFunc(r.LESS);break;case Dr:r.depthFunc(r.LEQUAL);break;case cc:r.depthFunc(r.EQUAL);break;case hc:r.depthFunc(r.GEQUAL);break;case uc:r.depthFunc(r.GREATER);break;case dc:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}ge=J}},setLocked:function(J){B=J},setClear:function(J){re!==J&&(ae&&(J=1-J),r.clearDepth(J),re=J)},reset:function(){B=!1,de=null,ge=null,re=null,ae=!1}}}function n(){let B=!1,ae=null,de=null,ge=null,re=null,J=null,xe=null,ve=null,Ge=null;return{setTest:function(Me){B||(Me?ce(r.STENCIL_TEST):Ee(r.STENCIL_TEST))},setMask:function(Me){ae!==Me&&!B&&(r.stencilMask(Me),ae=Me)},setFunc:function(Me,nt,He){(de!==Me||ge!==nt||re!==He)&&(r.stencilFunc(Me,nt,He),de=Me,ge=nt,re=He)},setOp:function(Me,nt,He){(J!==Me||xe!==nt||ve!==He)&&(r.stencilOp(Me,nt,He),J=Me,xe=nt,ve=He)},setLocked:function(Me){B=Me},setClear:function(Me){Ge!==Me&&(r.clearStencil(Me),Ge=Me)},reset:function(){B=!1,ae=null,de=null,ge=null,re=null,J=null,xe=null,ve=null,Ge=null}}}let s=new t,o=new i,a=new n,l=new WeakMap,c=new WeakMap,h={},u={},d=new WeakMap,f=[],_=null,g=!1,m=null,p=null,S=null,x=null,b=null,T=null,C=null,L=new $e(0,0,0),P=0,M=!1,E=null,O=null,V=null,W=null,$=null,K=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),q=!1,oe=0,X=r.getParameter(r.VERSION);X.indexOf("WebGL")!==-1?(oe=parseFloat(/^WebGL (\d)/.exec(X)[1]),q=oe>=1):X.indexOf("OpenGL ES")!==-1&&(oe=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),q=oe>=2);let fe=null,ye={},we=r.getParameter(r.SCISSOR_BOX),Ne=r.getParameter(r.VIEWPORT),Qe=new bt().fromArray(we),Xe=new bt().fromArray(Ne);function Ve(B,ae,de,ge){let re=new Uint8Array(4),J=r.createTexture();r.bindTexture(B,J),r.texParameteri(B,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(B,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let xe=0;xe<de;xe++)B===r.TEXTURE_3D||B===r.TEXTURE_2D_ARRAY?r.texImage3D(ae,0,r.RGBA,1,1,ge,0,r.RGBA,r.UNSIGNED_BYTE,re):r.texImage2D(ae+xe,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,re);return J}let ee={};ee[r.TEXTURE_2D]=Ve(r.TEXTURE_2D,r.TEXTURE_2D,1),ee[r.TEXTURE_CUBE_MAP]=Ve(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),ee[r.TEXTURE_2D_ARRAY]=Ve(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ee[r.TEXTURE_3D]=Ve(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ce(r.DEPTH_TEST),o.setFunc(Dr),De(!1),Te(sd),ce(r.CULL_FACE),ot(Mn);function ce(B){h[B]!==!0&&(r.enable(B),h[B]=!0)}function Ee(B){h[B]!==!1&&(r.disable(B),h[B]=!1)}function Ue(B,ae){return u[B]!==ae?(r.bindFramebuffer(B,ae),u[B]=ae,B===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=ae),B===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=ae),!0):!1}function Re(B,ae){let de=f,ge=!1;if(B){de=d.get(ae),de===void 0&&(de=[],d.set(ae,de));let re=B.textures;if(de.length!==re.length||de[0]!==r.COLOR_ATTACHMENT0){for(let J=0,xe=re.length;J<xe;J++)de[J]=r.COLOR_ATTACHMENT0+J;de.length=re.length,ge=!0}}else de[0]!==r.BACK&&(de[0]=r.BACK,ge=!0);ge&&r.drawBuffers(de)}function qe(B){return _!==B?(r.useProgram(B),_=B,!0):!1}let Lt={[jn]:r.FUNC_ADD,[sg]:r.FUNC_SUBTRACT,[og]:r.FUNC_REVERSE_SUBTRACT};Lt[ag]=r.MIN,Lt[lg]=r.MAX;let D={[cg]:r.ZERO,[hg]:r.ONE,[ug]:r.SRC_COLOR,[Fl]:r.SRC_ALPHA,[vg]:r.SRC_ALPHA_SATURATE,[mg]:r.DST_COLOR,[fg]:r.DST_ALPHA,[dg]:r.ONE_MINUS_SRC_COLOR,[Nl]:r.ONE_MINUS_SRC_ALPHA,[gg]:r.ONE_MINUS_DST_COLOR,[pg]:r.ONE_MINUS_DST_ALPHA,[_g]:r.CONSTANT_COLOR,[yg]:r.ONE_MINUS_CONSTANT_COLOR,[xg]:r.CONSTANT_ALPHA,[bg]:r.ONE_MINUS_CONSTANT_ALPHA};function ot(B,ae,de,ge,re,J,xe,ve,Ge,Me){if(B===Mn){g===!0&&(Ee(r.BLEND),g=!1);return}if(g===!1&&(ce(r.BLEND),g=!0),B!==rg){if(B!==m||Me!==M){if((p!==jn||b!==jn)&&(r.blendEquation(r.FUNC_ADD),p=jn,b=jn),Me)switch(B){case Ir:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case ad:r.blendFunc(r.ONE,r.ONE);break;case ld:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case cd:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:break}else switch(B){case Ir:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case ad:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case ld:break;case cd:break;default:break}S=null,x=null,T=null,C=null,L.set(0,0,0),P=0,m=B,M=Me}return}re=re||ae,J=J||de,xe=xe||ge,(ae!==p||re!==b)&&(r.blendEquationSeparate(Lt[ae],Lt[re]),p=ae,b=re),(de!==S||ge!==x||J!==T||xe!==C)&&(r.blendFuncSeparate(D[de],D[ge],D[J],D[xe]),S=de,x=ge,T=J,C=xe),(ve.equals(L)===!1||Ge!==P)&&(r.blendColor(ve.r,ve.g,ve.b,Ge),L.copy(ve),P=Ge),m=B,M=!1}function Fe(B,ae){B.side===xi?Ee(r.CULL_FACE):ce(r.CULL_FACE);let de=B.side===ei;ae&&(de=!de),De(de),B.blending===Ir&&B.transparent===!1?ot(Mn):ot(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),o.setFunc(B.depthFunc),o.setTest(B.depthTest),o.setMask(B.depthWrite),s.setMask(B.colorWrite);let ge=B.stencilWrite;a.setTest(ge),ge&&(a.setMask(B.stencilWriteMask),a.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),a.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),Ae(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?ce(r.SAMPLE_ALPHA_TO_COVERAGE):Ee(r.SAMPLE_ALPHA_TO_COVERAGE)}function De(B){E!==B&&(B?r.frontFace(r.CW):r.frontFace(r.CCW),E=B)}function Te(B){B!==tg?(ce(r.CULL_FACE),B!==O&&(B===sd?r.cullFace(r.BACK):B===ig?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ee(r.CULL_FACE),O=B}function at(B){B!==V&&(q&&r.lineWidth(B),V=B)}function Ae(B,ae,de){B?(ce(r.POLYGON_OFFSET_FILL),(W!==ae||$!==de)&&(r.polygonOffset(ae,de),W=ae,$=de)):Ee(r.POLYGON_OFFSET_FILL)}function U(B){B?ce(r.SCISSOR_TEST):Ee(r.SCISSOR_TEST)}function F(B){B===void 0&&(B=r.TEXTURE0+K-1),fe!==B&&(r.activeTexture(B),fe=B)}function w(B,ae,de){de===void 0&&(fe===null?de=r.TEXTURE0+K-1:de=fe);let ge=ye[de];ge===void 0&&(ge={type:void 0,texture:void 0},ye[de]=ge),(ge.type!==B||ge.texture!==ae)&&(fe!==de&&(r.activeTexture(de),fe=de),r.bindTexture(B,ae||ee[B]),ge.type=B,ge.texture=ae)}function v(){let B=ye[fe];B!==void 0&&B.type!==void 0&&(r.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function y(){try{r.compressedTexImage2D(...arguments)}catch{}}function R(){try{r.compressedTexImage3D(...arguments)}catch{}}function N(){try{r.texSubImage2D(...arguments)}catch{}}function k(){try{r.texSubImage3D(...arguments)}catch{}}function I(){try{r.compressedTexSubImage2D(...arguments)}catch{}}function Q(){try{r.compressedTexSubImage3D(...arguments)}catch{}}function ne(){try{r.texStorage2D(...arguments)}catch{}}function he(){try{r.texStorage3D(...arguments)}catch{}}function ie(){try{r.texImage2D(...arguments)}catch{}}function te(){try{r.texImage3D(...arguments)}catch{}}function se(B){Qe.equals(B)===!1&&(r.scissor(B.x,B.y,B.z,B.w),Qe.copy(B))}function pe(B){Xe.equals(B)===!1&&(r.viewport(B.x,B.y,B.z,B.w),Xe.copy(B))}function me(B,ae){let de=c.get(ae);de===void 0&&(de=new WeakMap,c.set(ae,de));let ge=de.get(B);ge===void 0&&(ge=r.getUniformBlockIndex(ae,B.name),de.set(B,ge))}function le(B,ae){let ge=c.get(ae).get(B);l.get(ae)!==ge&&(r.uniformBlockBinding(ae,ge,B.__bindingPointIndex),l.set(ae,ge))}function Pe(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},fe=null,ye={},u={},d=new WeakMap,f=[],_=null,g=!1,m=null,p=null,S=null,x=null,b=null,T=null,C=null,L=new $e(0,0,0),P=0,M=!1,E=null,O=null,V=null,W=null,$=null,Qe.set(0,0,r.canvas.width,r.canvas.height),Xe.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ce,disable:Ee,bindFramebuffer:Ue,drawBuffers:Re,useProgram:qe,setBlending:ot,setMaterial:Fe,setFlipSided:De,setCullFace:Te,setLineWidth:at,setPolygonOffset:Ae,setScissorTest:U,activeTexture:F,bindTexture:w,unbindTexture:v,compressedTexImage2D:y,compressedTexImage3D:R,texImage2D:ie,texImage3D:te,updateUBOMapping:me,uniformBlockBinding:le,texStorage2D:ne,texStorage3D:he,texSubImage2D:N,texSubImage3D:k,compressedTexSubImage2D:I,compressedTexSubImage3D:Q,scissor:se,viewport:pe,reset:Pe}}function Lw(r,e,t,i,n,s,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ze,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(v,y){return f?new OffscreenCanvas(v,y):Os("canvas")}function g(v,y,R){let N=1,k=w(v);if((k.width>R||k.height>R)&&(N=R/Math.max(k.width,k.height)),N<1)if(typeof HTMLImageElement!="undefined"&&v instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&v instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&v instanceof ImageBitmap||typeof VideoFrame!="undefined"&&v instanceof VideoFrame){let I=Math.floor(N*k.width),Q=Math.floor(N*k.height);u===void 0&&(u=_(I,Q));let ne=y?_(I,Q):u;return ne.width=I,ne.height=Q,ne.getContext("2d").drawImage(v,0,0,I,Q),ne}else return"data"in v,v;return v}function m(v){return v.generateMipmaps}function p(v){r.generateMipmap(v)}function S(v){return v.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:v.isWebGL3DRenderTarget?r.TEXTURE_3D:v.isWebGLArrayRenderTarget||v.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function x(v,y,R,N,k=!1){if(v!==null&&r[v]!==void 0)return r[v];let I=y;if(y===r.RED&&(R===r.FLOAT&&(I=r.R32F),R===r.HALF_FLOAT&&(I=r.R16F),R===r.UNSIGNED_BYTE&&(I=r.R8)),y===r.RED_INTEGER&&(R===r.UNSIGNED_BYTE&&(I=r.R8UI),R===r.UNSIGNED_SHORT&&(I=r.R16UI),R===r.UNSIGNED_INT&&(I=r.R32UI),R===r.BYTE&&(I=r.R8I),R===r.SHORT&&(I=r.R16I),R===r.INT&&(I=r.R32I)),y===r.RG&&(R===r.FLOAT&&(I=r.RG32F),R===r.HALF_FLOAT&&(I=r.RG16F),R===r.UNSIGNED_BYTE&&(I=r.RG8)),y===r.RG_INTEGER&&(R===r.UNSIGNED_BYTE&&(I=r.RG8UI),R===r.UNSIGNED_SHORT&&(I=r.RG16UI),R===r.UNSIGNED_INT&&(I=r.RG32UI),R===r.BYTE&&(I=r.RG8I),R===r.SHORT&&(I=r.RG16I),R===r.INT&&(I=r.RG32I)),y===r.RGB_INTEGER&&(R===r.UNSIGNED_BYTE&&(I=r.RGB8UI),R===r.UNSIGNED_SHORT&&(I=r.RGB16UI),R===r.UNSIGNED_INT&&(I=r.RGB32UI),R===r.BYTE&&(I=r.RGB8I),R===r.SHORT&&(I=r.RGB16I),R===r.INT&&(I=r.RGB32I)),y===r.RGBA_INTEGER&&(R===r.UNSIGNED_BYTE&&(I=r.RGBA8UI),R===r.UNSIGNED_SHORT&&(I=r.RGBA16UI),R===r.UNSIGNED_INT&&(I=r.RGBA32UI),R===r.BYTE&&(I=r.RGBA8I),R===r.SHORT&&(I=r.RGBA16I),R===r.INT&&(I=r.RGBA32I)),y===r.RGB&&(R===r.UNSIGNED_INT_5_9_9_9_REV&&(I=r.RGB9_E5),R===r.UNSIGNED_INT_10F_11F_11F_REV&&(I=r.R11F_G11F_B10F)),y===r.RGBA){let Q=k?qo:Ke.getTransfer(N);R===r.FLOAT&&(I=r.RGBA32F),R===r.HALF_FLOAT&&(I=r.RGBA16F),R===r.UNSIGNED_BYTE&&(I=Q===tt?r.SRGB8_ALPHA8:r.RGBA8),R===r.UNSIGNED_SHORT_4_4_4_4&&(I=r.RGBA4),R===r.UNSIGNED_SHORT_5_5_5_1&&(I=r.RGB5_A1)}return(I===r.R16F||I===r.R32F||I===r.RG16F||I===r.RG32F||I===r.RGBA16F||I===r.RGBA32F)&&e.get("EXT_color_buffer_float"),I}function b(v,y){let R;return v?y===null||y===tr||y===Ws?R=r.DEPTH24_STENCIL8:y===tn?R=r.DEPTH32F_STENCIL8:y===Vs&&(R=r.DEPTH24_STENCIL8):y===null||y===tr||y===Ws?R=r.DEPTH_COMPONENT24:y===tn?R=r.DEPTH_COMPONENT32F:y===Vs&&(R=r.DEPTH_COMPONENT16),R}function T(v,y){return m(v)===!0||v.isFramebufferTexture&&v.minFilter!==Ii&&v.minFilter!==Ut?Math.log2(Math.max(y.width,y.height))+1:v.mipmaps!==void 0&&v.mipmaps.length>0?v.mipmaps.length:v.isCompressedTexture&&Array.isArray(v.image)?y.mipmaps.length:1}function C(v){let y=v.target;y.removeEventListener("dispose",C),P(y),y.isVideoTexture&&h.delete(y)}function L(v){let y=v.target;y.removeEventListener("dispose",L),E(y)}function P(v){let y=i.get(v);if(y.__webglInit===void 0)return;let R=v.source,N=d.get(R);if(N){let k=N[y.__cacheKey];k.usedTimes--,k.usedTimes===0&&M(v),Object.keys(N).length===0&&d.delete(R)}i.remove(v)}function M(v){let y=i.get(v);r.deleteTexture(y.__webglTexture);let R=v.source,N=d.get(R);delete N[y.__cacheKey],o.memory.textures--}function E(v){let y=i.get(v);if(v.depthTexture&&(v.depthTexture.dispose(),i.remove(v.depthTexture)),v.isWebGLCubeRenderTarget)for(let N=0;N<6;N++){if(Array.isArray(y.__webglFramebuffer[N]))for(let k=0;k<y.__webglFramebuffer[N].length;k++)r.deleteFramebuffer(y.__webglFramebuffer[N][k]);else r.deleteFramebuffer(y.__webglFramebuffer[N]);y.__webglDepthbuffer&&r.deleteRenderbuffer(y.__webglDepthbuffer[N])}else{if(Array.isArray(y.__webglFramebuffer))for(let N=0;N<y.__webglFramebuffer.length;N++)r.deleteFramebuffer(y.__webglFramebuffer[N]);else r.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&r.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&r.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let N=0;N<y.__webglColorRenderbuffer.length;N++)y.__webglColorRenderbuffer[N]&&r.deleteRenderbuffer(y.__webglColorRenderbuffer[N]);y.__webglDepthRenderbuffer&&r.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let R=v.textures;for(let N=0,k=R.length;N<k;N++){let I=i.get(R[N]);I.__webglTexture&&(r.deleteTexture(I.__webglTexture),o.memory.textures--),i.remove(R[N])}i.remove(v)}let O=0;function V(){O=0}function W(){let v=O;return v>=n.maxTextures,O+=1,v}function $(v){let y=[];return y.push(v.wrapS),y.push(v.wrapT),y.push(v.wrapR||0),y.push(v.magFilter),y.push(v.minFilter),y.push(v.anisotropy),y.push(v.internalFormat),y.push(v.format),y.push(v.type),y.push(v.generateMipmaps),y.push(v.premultiplyAlpha),y.push(v.flipY),y.push(v.unpackAlignment),y.push(v.colorSpace),y.join()}function K(v,y){let R=i.get(v);if(v.isVideoTexture&&U(v),v.isRenderTargetTexture===!1&&v.isExternalTexture!==!0&&v.version>0&&R.__version!==v.version){let N=v.image;if(N!==null){if(N.complete!==!1){ee(R,v,y);return}}}else v.isExternalTexture&&(R.__webglTexture=v.sourceTexture?v.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,R.__webglTexture,r.TEXTURE0+y)}function q(v,y){let R=i.get(v);if(v.isRenderTargetTexture===!1&&v.version>0&&R.__version!==v.version){ee(R,v,y);return}t.bindTexture(r.TEXTURE_2D_ARRAY,R.__webglTexture,r.TEXTURE0+y)}function oe(v,y){let R=i.get(v);if(v.isRenderTargetTexture===!1&&v.version>0&&R.__version!==v.version){ee(R,v,y);return}t.bindTexture(r.TEXTURE_3D,R.__webglTexture,r.TEXTURE0+y)}function X(v,y){let R=i.get(v);if(v.version>0&&R.__version!==v.version){ce(R,v,y);return}t.bindTexture(r.TEXTURE_CUBE_MAP,R.__webglTexture,r.TEXTURE0+y)}let fe={[Ul]:r.REPEAT,[Yn]:r.CLAMP_TO_EDGE,[Bl]:r.MIRRORED_REPEAT},ye={[Ii]:r.NEAREST,[Lg]:r.NEAREST_MIPMAP_NEAREST,[da]:r.NEAREST_MIPMAP_LINEAR,[Ut]:r.LINEAR,[mc]:r.LINEAR_MIPMAP_NEAREST,[Qi]:r.LINEAR_MIPMAP_LINEAR},we={[Ng]:r.NEVER,[Vg]:r.ALWAYS,[Ug]:r.LESS,[xd]:r.LEQUAL,[Bg]:r.EQUAL,[zg]:r.GEQUAL,[kg]:r.GREATER,[Hg]:r.NOTEQUAL};function Ne(v,y){if(y.type===tn&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Ut||y.magFilter===mc||y.magFilter===da||y.magFilter===Qi||y.minFilter===Ut||y.minFilter===mc||y.minFilter===da||(y.minFilter,Qi)),r.texParameteri(v,r.TEXTURE_WRAP_S,fe[y.wrapS]),r.texParameteri(v,r.TEXTURE_WRAP_T,fe[y.wrapT]),(v===r.TEXTURE_3D||v===r.TEXTURE_2D_ARRAY)&&r.texParameteri(v,r.TEXTURE_WRAP_R,fe[y.wrapR]),r.texParameteri(v,r.TEXTURE_MAG_FILTER,ye[y.magFilter]),r.texParameteri(v,r.TEXTURE_MIN_FILTER,ye[y.minFilter]),y.compareFunction&&(r.texParameteri(v,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(v,r.TEXTURE_COMPARE_FUNC,we[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Ii||y.minFilter!==da&&y.minFilter!==Qi||y.type===tn&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){let R=e.get("EXT_texture_filter_anisotropic");r.texParameterf(v,R.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,n.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function Qe(v,y){let R=!1;v.__webglInit===void 0&&(v.__webglInit=!0,y.addEventListener("dispose",C));let N=y.source,k=d.get(N);k===void 0&&(k={},d.set(N,k));let I=$(y);if(I!==v.__cacheKey){k[I]===void 0&&(k[I]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,R=!0),k[I].usedTimes++;let Q=k[v.__cacheKey];Q!==void 0&&(k[v.__cacheKey].usedTimes--,Q.usedTimes===0&&M(y)),v.__cacheKey=I,v.__webglTexture=k[I].texture}return R}function Xe(v,y,R){return Math.floor(Math.floor(v/R)/y)}function Ve(v,y,R,N){let I=v.updateRanges;if(I.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,y.width,y.height,R,N,y.data);else{I.sort((te,se)=>te.start-se.start);let Q=0;for(let te=1;te<I.length;te++){let se=I[Q],pe=I[te],me=se.start+se.count,le=Xe(pe.start,y.width,4),Pe=Xe(se.start,y.width,4);pe.start<=me+1&&le===Pe&&Xe(pe.start+pe.count-1,y.width,4)===le?se.count=Math.max(se.count,pe.start+pe.count-se.start):(++Q,I[Q]=pe)}I.length=Q+1;let ne=r.getParameter(r.UNPACK_ROW_LENGTH),he=r.getParameter(r.UNPACK_SKIP_PIXELS),ie=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,y.width);for(let te=0,se=I.length;te<se;te++){let pe=I[te],me=Math.floor(pe.start/4),le=Math.ceil(pe.count/4),Pe=me%y.width,B=Math.floor(me/y.width),ae=le,de=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,Pe),r.pixelStorei(r.UNPACK_SKIP_ROWS,B),t.texSubImage2D(r.TEXTURE_2D,0,Pe,B,ae,de,R,N,y.data)}v.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,ne),r.pixelStorei(r.UNPACK_SKIP_PIXELS,he),r.pixelStorei(r.UNPACK_SKIP_ROWS,ie)}}function ee(v,y,R){let N=r.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(N=r.TEXTURE_2D_ARRAY),y.isData3DTexture&&(N=r.TEXTURE_3D);let k=Qe(v,y),I=y.source;t.bindTexture(N,v.__webglTexture,r.TEXTURE0+R);let Q=i.get(I);if(I.version!==Q.__version||k===!0){t.activeTexture(r.TEXTURE0+R);let ne=Ke.getPrimaries(Ke.workingColorSpace),he=y.colorSpace===wn?null:Ke.getPrimaries(y.colorSpace),ie=y.colorSpace===wn||ne===he?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,y.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,y.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie);let te=g(y.image,!1,n.maxTextureSize);te=F(y,te);let se=s.convert(y.format,y.colorSpace),pe=s.convert(y.type),me=x(y.internalFormat,se,pe,y.colorSpace,y.isVideoTexture);Ne(N,y);let le,Pe=y.mipmaps,B=y.isVideoTexture!==!0,ae=Q.__version===void 0||k===!0,de=I.dataReady,ge=T(y,te);if(y.isDepthTexture)me=b(y.format===Xs,y.type),ae&&(B?t.texStorage2D(r.TEXTURE_2D,1,me,te.width,te.height):t.texImage2D(r.TEXTURE_2D,0,me,te.width,te.height,0,se,pe,null));else if(y.isDataTexture)if(Pe.length>0){B&&ae&&t.texStorage2D(r.TEXTURE_2D,ge,me,Pe[0].width,Pe[0].height);for(let re=0,J=Pe.length;re<J;re++)le=Pe[re],B?de&&t.texSubImage2D(r.TEXTURE_2D,re,0,0,le.width,le.height,se,pe,le.data):t.texImage2D(r.TEXTURE_2D,re,me,le.width,le.height,0,se,pe,le.data);y.generateMipmaps=!1}else B?(ae&&t.texStorage2D(r.TEXTURE_2D,ge,me,te.width,te.height),de&&Ve(y,te,se,pe)):t.texImage2D(r.TEXTURE_2D,0,me,te.width,te.height,0,se,pe,te.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){B&&ae&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ge,me,Pe[0].width,Pe[0].height,te.depth);for(let re=0,J=Pe.length;re<J;re++)if(le=Pe[re],y.format!==Di){if(se!==null)if(B){if(de)if(y.layerUpdates.size>0){let xe=Ad(le.width,le.height,y.format,y.type);for(let ve of y.layerUpdates){let Ge=le.data.subarray(ve*xe/le.data.BYTES_PER_ELEMENT,(ve+1)*xe/le.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,re,0,0,ve,le.width,le.height,1,se,Ge)}y.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,re,0,0,0,le.width,le.height,te.depth,se,le.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,re,me,le.width,le.height,te.depth,0,le.data,0,0)}else B?de&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,re,0,0,0,le.width,le.height,te.depth,se,pe,le.data):t.texImage3D(r.TEXTURE_2D_ARRAY,re,me,le.width,le.height,te.depth,0,se,pe,le.data)}else{B&&ae&&t.texStorage2D(r.TEXTURE_2D,ge,me,Pe[0].width,Pe[0].height);for(let re=0,J=Pe.length;re<J;re++)le=Pe[re],y.format!==Di?se!==null&&(B?de&&t.compressedTexSubImage2D(r.TEXTURE_2D,re,0,0,le.width,le.height,se,le.data):t.compressedTexImage2D(r.TEXTURE_2D,re,me,le.width,le.height,0,le.data)):B?de&&t.texSubImage2D(r.TEXTURE_2D,re,0,0,le.width,le.height,se,pe,le.data):t.texImage2D(r.TEXTURE_2D,re,me,le.width,le.height,0,se,pe,le.data)}else if(y.isDataArrayTexture)if(B){if(ae&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ge,me,te.width,te.height,te.depth),de)if(y.layerUpdates.size>0){let re=Ad(te.width,te.height,y.format,y.type);for(let J of y.layerUpdates){let xe=te.data.subarray(J*re/te.data.BYTES_PER_ELEMENT,(J+1)*re/te.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,J,te.width,te.height,1,se,pe,xe)}y.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,se,pe,te.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,me,te.width,te.height,te.depth,0,se,pe,te.data);else if(y.isData3DTexture)B?(ae&&t.texStorage3D(r.TEXTURE_3D,ge,me,te.width,te.height,te.depth),de&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,se,pe,te.data)):t.texImage3D(r.TEXTURE_3D,0,me,te.width,te.height,te.depth,0,se,pe,te.data);else if(y.isFramebufferTexture){if(ae)if(B)t.texStorage2D(r.TEXTURE_2D,ge,me,te.width,te.height);else{let re=te.width,J=te.height;for(let xe=0;xe<ge;xe++)t.texImage2D(r.TEXTURE_2D,xe,me,re,J,0,se,pe,null),re>>=1,J>>=1}}else if(Pe.length>0){if(B&&ae){let re=w(Pe[0]);t.texStorage2D(r.TEXTURE_2D,ge,me,re.width,re.height)}for(let re=0,J=Pe.length;re<J;re++)le=Pe[re],B?de&&t.texSubImage2D(r.TEXTURE_2D,re,0,0,se,pe,le):t.texImage2D(r.TEXTURE_2D,re,me,se,pe,le);y.generateMipmaps=!1}else if(B){if(ae){let re=w(te);t.texStorage2D(r.TEXTURE_2D,ge,me,re.width,re.height)}de&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,se,pe,te)}else t.texImage2D(r.TEXTURE_2D,0,me,se,pe,te);m(y)&&p(N),Q.__version=I.version,y.onUpdate&&y.onUpdate(y)}v.__version=y.version}function ce(v,y,R){if(y.image.length!==6)return;let N=Qe(v,y),k=y.source;t.bindTexture(r.TEXTURE_CUBE_MAP,v.__webglTexture,r.TEXTURE0+R);let I=i.get(k);if(k.version!==I.__version||N===!0){t.activeTexture(r.TEXTURE0+R);let Q=Ke.getPrimaries(Ke.workingColorSpace),ne=y.colorSpace===wn?null:Ke.getPrimaries(y.colorSpace),he=y.colorSpace===wn||Q===ne?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,y.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,y.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);let ie=y.isCompressedTexture||y.image[0].isCompressedTexture,te=y.image[0]&&y.image[0].isDataTexture,se=[];for(let J=0;J<6;J++)!ie&&!te?se[J]=g(y.image[J],!0,n.maxCubemapSize):se[J]=te?y.image[J].image:y.image[J],se[J]=F(y,se[J]);let pe=se[0],me=s.convert(y.format,y.colorSpace),le=s.convert(y.type),Pe=x(y.internalFormat,me,le,y.colorSpace),B=y.isVideoTexture!==!0,ae=I.__version===void 0||N===!0,de=k.dataReady,ge=T(y,pe);Ne(r.TEXTURE_CUBE_MAP,y);let re;if(ie){B&&ae&&t.texStorage2D(r.TEXTURE_CUBE_MAP,ge,Pe,pe.width,pe.height);for(let J=0;J<6;J++){re=se[J].mipmaps;for(let xe=0;xe<re.length;xe++){let ve=re[xe];y.format!==Di?me!==null&&(B?de&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,xe,0,0,ve.width,ve.height,me,ve.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,xe,Pe,ve.width,ve.height,0,ve.data)):B?de&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,xe,0,0,ve.width,ve.height,me,le,ve.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,xe,Pe,ve.width,ve.height,0,me,le,ve.data)}}}else{if(re=y.mipmaps,B&&ae){re.length>0&&ge++;let J=w(se[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,ge,Pe,J.width,J.height)}for(let J=0;J<6;J++)if(te){B?de&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,se[J].width,se[J].height,me,le,se[J].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Pe,se[J].width,se[J].height,0,me,le,se[J].data);for(let xe=0;xe<re.length;xe++){let Ge=re[xe].image[J].image;B?de&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,xe+1,0,0,Ge.width,Ge.height,me,le,Ge.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,xe+1,Pe,Ge.width,Ge.height,0,me,le,Ge.data)}}else{B?de&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,me,le,se[J]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Pe,me,le,se[J]);for(let xe=0;xe<re.length;xe++){let ve=re[xe];B?de&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,xe+1,0,0,me,le,ve.image[J]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,xe+1,Pe,me,le,ve.image[J])}}}m(y)&&p(r.TEXTURE_CUBE_MAP),I.__version=k.version,y.onUpdate&&y.onUpdate(y)}v.__version=y.version}function Ee(v,y,R,N,k,I){let Q=s.convert(R.format,R.colorSpace),ne=s.convert(R.type),he=x(R.internalFormat,Q,ne,R.colorSpace),ie=i.get(y),te=i.get(R);if(te.__renderTarget=y,!ie.__hasExternalTextures){let se=Math.max(1,y.width>>I),pe=Math.max(1,y.height>>I);k===r.TEXTURE_3D||k===r.TEXTURE_2D_ARRAY?t.texImage3D(k,I,he,se,pe,y.depth,0,Q,ne,null):t.texImage2D(k,I,he,se,pe,0,Q,ne,null)}t.bindFramebuffer(r.FRAMEBUFFER,v),Ae(y)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,N,k,te.__webglTexture,0,at(y)):(k===r.TEXTURE_2D||k>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&k<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,N,k,te.__webglTexture,I),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ue(v,y,R){if(r.bindRenderbuffer(r.RENDERBUFFER,v),y.depthBuffer){let N=y.depthTexture,k=N&&N.isDepthTexture?N.type:null,I=b(y.stencilBuffer,k),Q=y.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ne=at(y);Ae(y)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ne,I,y.width,y.height):R?r.renderbufferStorageMultisample(r.RENDERBUFFER,ne,I,y.width,y.height):r.renderbufferStorage(r.RENDERBUFFER,I,y.width,y.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Q,r.RENDERBUFFER,v)}else{let N=y.textures;for(let k=0;k<N.length;k++){let I=N[k],Q=s.convert(I.format,I.colorSpace),ne=s.convert(I.type),he=x(I.internalFormat,Q,ne,I.colorSpace),ie=at(y);R&&Ae(y)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,ie,he,y.width,y.height):Ae(y)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ie,he,y.width,y.height):r.renderbufferStorage(r.RENDERBUFFER,he,y.width,y.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Re(v,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,v),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let N=i.get(y.depthTexture);N.__renderTarget=y,(!N.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),K(y.depthTexture,0);let k=N.__webglTexture,I=at(y);if(y.depthTexture.format===Is)Ae(y)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,k,0,I):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,k,0);else if(y.depthTexture.format===Xs)Ae(y)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,k,0,I):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,k,0);else throw new Error("Unknown depthTexture format")}function qe(v){let y=i.get(v),R=v.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==v.depthTexture){let N=v.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),N){let k=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,N.removeEventListener("dispose",k)};N.addEventListener("dispose",k),y.__depthDisposeCallback=k}y.__boundDepthTexture=N}if(v.depthTexture&&!y.__autoAllocateDepthBuffer){if(R)throw new Error("target.depthTexture not supported in Cube render targets");let N=v.texture.mipmaps;N&&N.length>0?Re(y.__webglFramebuffer[0],v):Re(y.__webglFramebuffer,v)}else if(R){y.__webglDepthbuffer=[];for(let N=0;N<6;N++)if(t.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer[N]),y.__webglDepthbuffer[N]===void 0)y.__webglDepthbuffer[N]=r.createRenderbuffer(),Ue(y.__webglDepthbuffer[N],v,!1);else{let k=v.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,I=y.__webglDepthbuffer[N];r.bindRenderbuffer(r.RENDERBUFFER,I),r.framebufferRenderbuffer(r.FRAMEBUFFER,k,r.RENDERBUFFER,I)}}else{let N=v.texture.mipmaps;if(N&&N.length>0?t.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=r.createRenderbuffer(),Ue(y.__webglDepthbuffer,v,!1);else{let k=v.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,I=y.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,I),r.framebufferRenderbuffer(r.FRAMEBUFFER,k,r.RENDERBUFFER,I)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Lt(v,y,R){let N=i.get(v);y!==void 0&&Ee(N.__webglFramebuffer,v,v.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),R!==void 0&&qe(v)}function D(v){let y=v.texture,R=i.get(v),N=i.get(y);v.addEventListener("dispose",L);let k=v.textures,I=v.isWebGLCubeRenderTarget===!0,Q=k.length>1;if(Q||(N.__webglTexture===void 0&&(N.__webglTexture=r.createTexture()),N.__version=y.version,o.memory.textures++),I){R.__webglFramebuffer=[];for(let ne=0;ne<6;ne++)if(y.mipmaps&&y.mipmaps.length>0){R.__webglFramebuffer[ne]=[];for(let he=0;he<y.mipmaps.length;he++)R.__webglFramebuffer[ne][he]=r.createFramebuffer()}else R.__webglFramebuffer[ne]=r.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){R.__webglFramebuffer=[];for(let ne=0;ne<y.mipmaps.length;ne++)R.__webglFramebuffer[ne]=r.createFramebuffer()}else R.__webglFramebuffer=r.createFramebuffer();if(Q)for(let ne=0,he=k.length;ne<he;ne++){let ie=i.get(k[ne]);ie.__webglTexture===void 0&&(ie.__webglTexture=r.createTexture(),o.memory.textures++)}if(v.samples>0&&Ae(v)===!1){R.__webglMultisampledFramebuffer=r.createFramebuffer(),R.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,R.__webglMultisampledFramebuffer);for(let ne=0;ne<k.length;ne++){let he=k[ne];R.__webglColorRenderbuffer[ne]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,R.__webglColorRenderbuffer[ne]);let ie=s.convert(he.format,he.colorSpace),te=s.convert(he.type),se=x(he.internalFormat,ie,te,he.colorSpace,v.isXRRenderTarget===!0),pe=at(v);r.renderbufferStorageMultisample(r.RENDERBUFFER,pe,se,v.width,v.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ne,r.RENDERBUFFER,R.__webglColorRenderbuffer[ne])}r.bindRenderbuffer(r.RENDERBUFFER,null),v.depthBuffer&&(R.__webglDepthRenderbuffer=r.createRenderbuffer(),Ue(R.__webglDepthRenderbuffer,v,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(I){t.bindTexture(r.TEXTURE_CUBE_MAP,N.__webglTexture),Ne(r.TEXTURE_CUBE_MAP,y);for(let ne=0;ne<6;ne++)if(y.mipmaps&&y.mipmaps.length>0)for(let he=0;he<y.mipmaps.length;he++)Ee(R.__webglFramebuffer[ne][he],v,y,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,he);else Ee(R.__webglFramebuffer[ne],v,y,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0);m(y)&&p(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Q){for(let ne=0,he=k.length;ne<he;ne++){let ie=k[ne],te=i.get(ie),se=r.TEXTURE_2D;(v.isWebGL3DRenderTarget||v.isWebGLArrayRenderTarget)&&(se=v.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(se,te.__webglTexture),Ne(se,ie),Ee(R.__webglFramebuffer,v,ie,r.COLOR_ATTACHMENT0+ne,se,0),m(ie)&&p(se)}t.unbindTexture()}else{let ne=r.TEXTURE_2D;if((v.isWebGL3DRenderTarget||v.isWebGLArrayRenderTarget)&&(ne=v.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(ne,N.__webglTexture),Ne(ne,y),y.mipmaps&&y.mipmaps.length>0)for(let he=0;he<y.mipmaps.length;he++)Ee(R.__webglFramebuffer[he],v,y,r.COLOR_ATTACHMENT0,ne,he);else Ee(R.__webglFramebuffer,v,y,r.COLOR_ATTACHMENT0,ne,0);m(y)&&p(ne),t.unbindTexture()}v.depthBuffer&&qe(v)}function ot(v){let y=v.textures;for(let R=0,N=y.length;R<N;R++){let k=y[R];if(m(k)){let I=S(v),Q=i.get(k).__webglTexture;t.bindTexture(I,Q),p(I),t.unbindTexture()}}}let Fe=[],De=[];function Te(v){if(v.samples>0){if(Ae(v)===!1){let y=v.textures,R=v.width,N=v.height,k=r.COLOR_BUFFER_BIT,I=v.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Q=i.get(v),ne=y.length>1;if(ne)for(let ie=0;ie<y.length;ie++)t.bindFramebuffer(r.FRAMEBUFFER,Q.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ie,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Q.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ie,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Q.__webglMultisampledFramebuffer);let he=v.texture.mipmaps;he&&he.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Q.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Q.__webglFramebuffer);for(let ie=0;ie<y.length;ie++){if(v.resolveDepthBuffer&&(v.depthBuffer&&(k|=r.DEPTH_BUFFER_BIT),v.stencilBuffer&&v.resolveStencilBuffer&&(k|=r.STENCIL_BUFFER_BIT)),ne){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Q.__webglColorRenderbuffer[ie]);let te=i.get(y[ie]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,te,0)}r.blitFramebuffer(0,0,R,N,0,0,R,N,k,r.NEAREST),l===!0&&(Fe.length=0,De.length=0,Fe.push(r.COLOR_ATTACHMENT0+ie),v.depthBuffer&&v.resolveDepthBuffer===!1&&(Fe.push(I),De.push(I),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,De)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Fe))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ne)for(let ie=0;ie<y.length;ie++){t.bindFramebuffer(r.FRAMEBUFFER,Q.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ie,r.RENDERBUFFER,Q.__webglColorRenderbuffer[ie]);let te=i.get(y[ie]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Q.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ie,r.TEXTURE_2D,te,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Q.__webglMultisampledFramebuffer)}else if(v.depthBuffer&&v.resolveDepthBuffer===!1&&l){let y=v.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[y])}}}function at(v){return Math.min(n.maxSamples,v.samples)}function Ae(v){let y=i.get(v);return v.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function U(v){let y=o.render.frame;h.get(v)!==y&&(h.set(v,y),v.update())}function F(v,y){let R=v.colorSpace,N=v.format,k=v.type;return v.isCompressedTexture===!0||v.isVideoTexture===!0||R!==Or&&R!==wn&&(Ke.getTransfer(R),tt),y}function w(v){return typeof HTMLImageElement!="undefined"&&v instanceof HTMLImageElement?(c.width=v.naturalWidth||v.width,c.height=v.naturalHeight||v.height):typeof VideoFrame!="undefined"&&v instanceof VideoFrame?(c.width=v.displayWidth,c.height=v.displayHeight):(c.width=v.width,c.height=v.height),c}this.allocateTextureUnit=W,this.resetTextureUnits=V,this.setTexture2D=K,this.setTexture2DArray=q,this.setTexture3D=oe,this.setTextureCube=X,this.rebindTextures=Lt,this.setupRenderTarget=D,this.updateRenderTargetMipmap=ot,this.updateMultisampleRenderTarget=Te,this.setupDepthRenderbuffer=qe,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=Ae}function Iw(r,e){function t(i,n=wn){let s,o=Ke.getTransfer(n);if(i===en)return r.UNSIGNED_BYTE;if(i===vc)return r.UNSIGNED_SHORT_4_4_4_4;if(i===_c)return r.UNSIGNED_SHORT_5_5_5_1;if(i===pd)return r.UNSIGNED_INT_5_9_9_9_REV;if(i===md)return r.UNSIGNED_INT_10F_11F_11F_REV;if(i===dd)return r.BYTE;if(i===fd)return r.SHORT;if(i===Vs)return r.UNSIGNED_SHORT;if(i===gc)return r.INT;if(i===tr)return r.UNSIGNED_INT;if(i===tn)return r.FLOAT;if(i===Gs)return r.HALF_FLOAT;if(i===gd)return r.ALPHA;if(i===vd)return r.RGB;if(i===Di)return r.RGBA;if(i===Is)return r.DEPTH_COMPONENT;if(i===Xs)return r.DEPTH_STENCIL;if(i===_d)return r.RED;if(i===yc)return r.RED_INTEGER;if(i===yd)return r.RG;if(i===xc)return r.RG_INTEGER;if(i===bc)return r.RGBA_INTEGER;if(i===fa||i===pa||i===ma||i===ga)if(o===tt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===fa)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===pa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ma)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ga)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===fa)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===pa)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ma)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ga)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Sc||i===Mc||i===Ec||i===wc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Sc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Mc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ec)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===wc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Tc||i===Ac||i===Cc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Tc||i===Ac)return o===tt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Cc)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Rc||i===Pc||i===Lc||i===Ic||i===Dc||i===Oc||i===Fc||i===Nc||i===Uc||i===Bc||i===kc||i===Hc||i===zc||i===Vc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Rc)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Pc)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Lc)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ic)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Dc)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Oc)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Fc)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Nc)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Uc)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Bc)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===kc)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Hc)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===zc)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Vc)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Gc||i===Wc||i===Xc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Gc)return o===tt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Wc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Xc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===qc||i===Yc||i===jc||i===Zc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===qc)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Yc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===jc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Zc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ws?r.UNSIGNED_INT_24_8:r[i]!==void 0?r[i]:null}return{convert:t}}var Dw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ow=`
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

}`,Hd=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new ra(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new ki({vertexShader:Dw,fragmentShader:Ow,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new li(new Nr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},zd=class extends Zi{constructor(e,t){super();let i=this,n=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,_=null,g=typeof XRWebGLBinding!="undefined",m=new Hd,p={},S=t.getContextAttributes(),x=null,b=null,T=[],C=[],L=new ze,P=null,M=new Gt;M.viewport=new bt;let E=new Gt;E.viewport=new bt;let O=[M,E],V=new rc,W=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let ce=T[ee];return ce===void 0&&(ce=new Hs,T[ee]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function(ee){let ce=T[ee];return ce===void 0&&(ce=new Hs,T[ee]=ce),ce.getGripSpace()},this.getHand=function(ee){let ce=T[ee];return ce===void 0&&(ce=new Hs,T[ee]=ce),ce.getHandSpace()};function K(ee){let ce=C.indexOf(ee.inputSource);if(ce===-1)return;let Ee=T[ce];Ee!==void 0&&(Ee.update(ee.inputSource,ee.frame,c||o),Ee.dispatchEvent({type:ee.type,data:ee.inputSource}))}function q(){n.removeEventListener("select",K),n.removeEventListener("selectstart",K),n.removeEventListener("selectend",K),n.removeEventListener("squeeze",K),n.removeEventListener("squeezestart",K),n.removeEventListener("squeezeend",K),n.removeEventListener("end",q),n.removeEventListener("inputsourceschange",oe);for(let ee=0;ee<T.length;ee++){let ce=C[ee];ce!==null&&(C[ee]=null,T[ee].disconnect(ce))}W=null,$=null,m.reset();for(let ee in p)delete p[ee];e.setRenderTarget(x),f=null,d=null,u=null,n=null,b=null,Ve.stop(),i.isPresenting=!1,e.setPixelRatio(P),e.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){s=ee,i.isPresenting},this.setReferenceSpaceType=function(ee){a=ee,i.isPresenting},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ee){c=ee},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&g&&(u=new XRWebGLBinding(n,t)),u},this.getFrame=function(){return _},this.getSession=function(){return n},this.setSession=async function(ee){if(n=ee,n!==null){if(x=e.getRenderTarget(),n.addEventListener("select",K),n.addEventListener("selectstart",K),n.addEventListener("selectend",K),n.addEventListener("squeeze",K),n.addEventListener("squeezestart",K),n.addEventListener("squeezeend",K),n.addEventListener("end",q),n.addEventListener("inputsourceschange",oe),S.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(L),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ee=null,Ue=null,Re=null;S.depth&&(Re=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ee=S.stencil?Xs:Is,Ue=S.stencil?Ws:tr);let qe={colorFormat:t.RGBA8,depthFormat:Re,scaleFactor:s};u=this.getBinding(),d=u.createProjectionLayer(qe),n.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),b=new $i(d.textureWidth,d.textureHeight,{format:Di,type:en,depthTexture:new na(d.textureWidth,d.textureHeight,Ue,void 0,void 0,void 0,void 0,void 0,void 0,Ee),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let Ee={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(n,t,Ee),n.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new $i(f.framebufferWidth,f.framebufferHeight,{format:Di,type:en,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await n.requestReferenceSpace(a),Ve.setContext(n),Ve.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function oe(ee){for(let ce=0;ce<ee.removed.length;ce++){let Ee=ee.removed[ce],Ue=C.indexOf(Ee);Ue>=0&&(C[Ue]=null,T[Ue].disconnect(Ee))}for(let ce=0;ce<ee.added.length;ce++){let Ee=ee.added[ce],Ue=C.indexOf(Ee);if(Ue===-1){for(let qe=0;qe<T.length;qe++)if(qe>=C.length){C.push(Ee),Ue=qe;break}else if(C[qe]===null){C[qe]=Ee,Ue=qe;break}if(Ue===-1)break}let Re=T[Ue];Re&&Re.connect(Ee)}}let X=new G,fe=new G;function ye(ee,ce,Ee){X.setFromMatrixPosition(ce.matrixWorld),fe.setFromMatrixPosition(Ee.matrixWorld);let Ue=X.distanceTo(fe),Re=ce.projectionMatrix.elements,qe=Ee.projectionMatrix.elements,Lt=Re[14]/(Re[10]-1),D=Re[14]/(Re[10]+1),ot=(Re[9]+1)/Re[5],Fe=(Re[9]-1)/Re[5],De=(Re[8]-1)/Re[0],Te=(qe[8]+1)/qe[0],at=Lt*De,Ae=Lt*Te,U=Ue/(-De+Te),F=U*-De;if(ce.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(F),ee.translateZ(U),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert(),Re[10]===-1)ee.projectionMatrix.copy(ce.projectionMatrix),ee.projectionMatrixInverse.copy(ce.projectionMatrixInverse);else{let w=Lt+U,v=D+U,y=at-F,R=Ae+(Ue-F),N=ot*D/v*w,k=Fe*D/v*w;ee.projectionMatrix.makePerspective(y,R,N,k,w,v),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}}function we(ee,ce){ce===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(ce.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(n===null)return;let ce=ee.near,Ee=ee.far;m.texture!==null&&(m.depthNear>0&&(ce=m.depthNear),m.depthFar>0&&(Ee=m.depthFar)),V.near=E.near=M.near=ce,V.far=E.far=M.far=Ee,(W!==V.near||$!==V.far)&&(n.updateRenderState({depthNear:V.near,depthFar:V.far}),W=V.near,$=V.far),V.layers.mask=ee.layers.mask|6,M.layers.mask=V.layers.mask&3,E.layers.mask=V.layers.mask&5;let Ue=ee.parent,Re=V.cameras;we(V,Ue);for(let qe=0;qe<Re.length;qe++)we(Re[qe],Ue);Re.length===2?ye(V,M,E):V.projectionMatrix.copy(M.projectionMatrix),Ne(ee,V,Ue)};function Ne(ee,ce,Ee){Ee===null?ee.matrix.copy(ce.matrixWorld):(ee.matrix.copy(Ee.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(ce.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(ce.projectionMatrix),ee.projectionMatrixInverse.copy(ce.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=Ds*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(ee){l=ee,d!==null&&(d.fixedFoveation=ee),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=ee)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(V)},this.getCameraTexture=function(ee){return p[ee]};let Qe=null;function Xe(ee,ce){if(h=ce.getViewerPose(c||o),_=ce,h!==null){let Ee=h.views;f!==null&&(e.setRenderTargetFramebuffer(b,f.framebuffer),e.setRenderTarget(b));let Ue=!1;Ee.length!==V.cameras.length&&(V.cameras.length=0,Ue=!0);for(let D=0;D<Ee.length;D++){let ot=Ee[D],Fe=null;if(f!==null)Fe=f.getViewport(ot);else{let Te=u.getViewSubImage(d,ot);Fe=Te.viewport,D===0&&(e.setRenderTargetTextures(b,Te.colorTexture,Te.depthStencilTexture),e.setRenderTarget(b))}let De=O[D];De===void 0&&(De=new Gt,De.layers.enable(D),De.viewport=new bt,O[D]=De),De.matrix.fromArray(ot.transform.matrix),De.matrix.decompose(De.position,De.quaternion,De.scale),De.projectionMatrix.fromArray(ot.projectionMatrix),De.projectionMatrixInverse.copy(De.projectionMatrix).invert(),De.viewport.set(Fe.x,Fe.y,Fe.width,Fe.height),D===0&&(V.matrix.copy(De.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),Ue===!0&&V.cameras.push(De)}let Re=n.enabledFeatures;if(Re&&Re.includes("depth-sensing")&&n.depthUsage=="gpu-optimized"&&g){u=i.getBinding();let D=u.getDepthInformation(Ee[0]);D&&D.isValid&&D.texture&&m.init(D,n.renderState)}if(Re&&Re.includes("camera-access")&&g){e.state.unbindTexture(),u=i.getBinding();for(let D=0;D<Ee.length;D++){let ot=Ee[D].camera;if(ot){let Fe=p[ot];Fe||(Fe=new ra,p[ot]=Fe);let De=u.getCameraImage(ot);Fe.sourceTexture=De}}}}for(let Ee=0;Ee<T.length;Ee++){let Ue=C[Ee],Re=T[Ee];Ue!==null&&Re!==void 0&&Re.update(Ue,ce,c||o)}Qe&&Qe(ee,ce),ce.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ce}),_=null}let Ve=new vv;Ve.setAnimationLoop(Xe),this.setAnimationLoop=function(ee){Qe=ee},this.dispose=function(){}}},Vr=new Ki,Fw=new At;function Nw(r,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Ed(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function n(m,p,S,x,b){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),u(m,p)):p.isMeshPhongMaterial?(s(m,p),h(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,b)):p.isMeshMatcapMaterial?(s(m,p),_(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),g(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,S,x):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===ei&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===ei&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let S=e.get(p),x=S.envMap,b=S.envMapRotation;x&&(m.envMap.value=x,Vr.copy(b),Vr.x*=-1,Vr.y*=-1,Vr.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Vr.y*=-1,Vr.z*=-1),m.envMapRotation.value.setFromMatrix4(Fw.makeRotationFromEuler(Vr)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,S,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=x*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===ei&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){let S=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function Uw(r,e,t,i){let n={},s={},o=[],a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,x){let b=x.program;i.uniformBlockBinding(S,b)}function c(S,x){let b=n[S.id];b===void 0&&(_(S),b=h(S),n[S.id]=b,S.addEventListener("dispose",m));let T=x.program;i.updateUBOMapping(S,T);let C=e.render.frame;s[S.id]!==C&&(d(S),s[S.id]=C)}function h(S){let x=u();S.__bindingPointIndex=x;let b=r.createBuffer(),T=S.__size,C=S.usage;return r.bindBuffer(r.UNIFORM_BUFFER,b),r.bufferData(r.UNIFORM_BUFFER,T,C),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,x,b),b}function u(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return 0}function d(S){let x=n[S.id],b=S.uniforms,T=S.__cache;r.bindBuffer(r.UNIFORM_BUFFER,x);for(let C=0,L=b.length;C<L;C++){let P=Array.isArray(b[C])?b[C]:[b[C]];for(let M=0,E=P.length;M<E;M++){let O=P[M];if(f(O,C,M,T)===!0){let V=O.__offset,W=Array.isArray(O.value)?O.value:[O.value],$=0;for(let K=0;K<W.length;K++){let q=W[K],oe=g(q);typeof q=="number"||typeof q=="boolean"?(O.__data[0]=q,r.bufferSubData(r.UNIFORM_BUFFER,V+$,O.__data)):q.isMatrix3?(O.__data[0]=q.elements[0],O.__data[1]=q.elements[1],O.__data[2]=q.elements[2],O.__data[3]=0,O.__data[4]=q.elements[3],O.__data[5]=q.elements[4],O.__data[6]=q.elements[5],O.__data[7]=0,O.__data[8]=q.elements[6],O.__data[9]=q.elements[7],O.__data[10]=q.elements[8],O.__data[11]=0):(q.toArray(O.__data,$),$+=oe.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,V,O.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(S,x,b,T){let C=S.value,L=x+"_"+b;if(T[L]===void 0)return typeof C=="number"||typeof C=="boolean"?T[L]=C:T[L]=C.clone(),!0;{let P=T[L];if(typeof C=="number"||typeof C=="boolean"){if(P!==C)return T[L]=C,!0}else if(P.equals(C)===!1)return P.copy(C),!0}return!1}function _(S){let x=S.uniforms,b=0,T=16;for(let L=0,P=x.length;L<P;L++){let M=Array.isArray(x[L])?x[L]:[x[L]];for(let E=0,O=M.length;E<O;E++){let V=M[E],W=Array.isArray(V.value)?V.value:[V.value];for(let $=0,K=W.length;$<K;$++){let q=W[$],oe=g(q),X=b%T,fe=X%oe.boundary,ye=X+fe;b+=fe,ye!==0&&T-ye<oe.storage&&(b+=T-ye),V.__data=new Float32Array(oe.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=b,b+=oe.storage}}}let C=b%T;return C>0&&(b+=T-C),S.__size=b,S.__cache={},this}function g(S){let x={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(x.boundary=4,x.storage=4):S.isVector2?(x.boundary=8,x.storage=8):S.isVector3||S.isColor?(x.boundary=16,x.storage=12):S.isVector4?(x.boundary=16,x.storage=16):S.isMatrix3?(x.boundary=48,x.storage=48):S.isMatrix4?(x.boundary=64,x.storage=64):S.isTexture,x}function m(S){let x=S.target;x.removeEventListener("dispose",m);let b=o.indexOf(x.__bindingPointIndex);o.splice(b,1),r.deleteBuffer(n[x.id]),delete n[x.id],delete s[x.id]}function p(){for(let S in n)r.deleteBuffer(n[S]);o=[],n={},s={}}return{bind:l,update:c,dispose:p}}var th=class{constructor(e={}){let{canvas:t=Gg(),context:i=null,depth:n=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext!="undefined"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;let _=new Uint32Array(4),g=new Int32Array(4),m=null,p=null,S=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=En,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let b=this,T=!1;this._outputColorSpace=Nt;let C=0,L=0,P=null,M=-1,E=null,O=new bt,V=new bt,W=null,$=new $e(0),K=0,q=t.width,oe=t.height,X=1,fe=null,ye=null,we=new bt(0,0,q,oe),Ne=new bt(0,0,q,oe),Qe=!1,Xe=new ta,Ve=!1,ee=!1,ce=new At,Ee=new G,Ue=new bt,Re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},qe=!1;function Lt(){return P===null?X:1}let D=i;function ot(A,H){return t.getContext(A,H)}try{let A={alpha:!0,depth:n,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${sc}`),t.addEventListener("webglcontextlost",de,!1),t.addEventListener("webglcontextrestored",ge,!1),t.addEventListener("webglcontextcreationerror",re,!1),D===null){let H="webgl2";if(D=ot(H,A),D===null)throw ot(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw A}let Fe,De,Te,at,Ae,U,F,w,v,y,R,N,k,I,Q,ne,he,ie,te,se,pe,me,le,Pe;function B(){Fe=new tE(D),Fe.init(),me=new Iw(D,Fe),De=new jM(D,Fe,e,me),Te=new Pw(D,Fe),De.reversedDepthBuffer&&d&&Te.buffers.depth.setReversed(!0),at=new rE(D),Ae=new vw,U=new Lw(D,Fe,Te,Ae,De,me,at),F=new $M(b),w=new eE(b),v=new hb(D),le=new qM(D,v),y=new iE(D,v,at,le),R=new oE(D,y,v,at),te=new sE(D,De,U),ne=new ZM(Ae),N=new gw(b,F,w,Fe,De,le,ne),k=new Nw(b,Ae),I=new yw,Q=new ww(Fe),ie=new XM(b,F,w,Te,R,f,l),he=new Cw(b,R,De),Pe=new Uw(D,at,De,Te),se=new YM(D,Fe,at),pe=new nE(D,Fe,at),at.programs=N.programs,b.capabilities=De,b.extensions=Fe,b.properties=Ae,b.renderLists=I,b.shadowMap=he,b.state=Te,b.info=at}B();let ae=new zd(b,D);this.xr=ae,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let A=Fe.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=Fe.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(A){A!==void 0&&(X=A,this.setSize(q,oe,!1))},this.getSize=function(A){return A.set(q,oe)},this.setSize=function(A,H,Y=!0){ae.isPresenting||(q=A,oe=H,t.width=Math.floor(A*X),t.height=Math.floor(H*X),Y===!0&&(t.style.width=A+"px",t.style.height=H+"px"),this.setViewport(0,0,A,H))},this.getDrawingBufferSize=function(A){return A.set(q*X,oe*X).floor()},this.setDrawingBufferSize=function(A,H,Y){q=A,oe=H,X=Y,t.width=Math.floor(A*Y),t.height=Math.floor(H*Y),this.setViewport(0,0,A,H)},this.getCurrentViewport=function(A){return A.copy(O)},this.getViewport=function(A){return A.copy(we)},this.setViewport=function(A,H,Y,Z){A.isVector4?we.set(A.x,A.y,A.z,A.w):we.set(A,H,Y,Z),Te.viewport(O.copy(we).multiplyScalar(X).round())},this.getScissor=function(A){return A.copy(Ne)},this.setScissor=function(A,H,Y,Z){A.isVector4?Ne.set(A.x,A.y,A.z,A.w):Ne.set(A,H,Y,Z),Te.scissor(V.copy(Ne).multiplyScalar(X).round())},this.getScissorTest=function(){return Qe},this.setScissorTest=function(A){Te.setScissorTest(Qe=A)},this.setOpaqueSort=function(A){fe=A},this.setTransparentSort=function(A){ye=A},this.getClearColor=function(A){return A.copy(ie.getClearColor())},this.setClearColor=function(){ie.setClearColor(...arguments)},this.getClearAlpha=function(){return ie.getClearAlpha()},this.setClearAlpha=function(){ie.setClearAlpha(...arguments)},this.clear=function(A=!0,H=!0,Y=!0){let Z=0;if(A){let z=!1;if(P!==null){let ue=P.texture.format;z=ue===bc||ue===xc||ue===yc}if(z){let ue=P.texture.type,be=ue===en||ue===tr||ue===Vs||ue===Ws||ue===vc||ue===_c,Ce=ie.getClearColor(),Se=ie.getClearAlpha(),Oe=Ce.r,Be=Ce.g,Le=Ce.b;be?(_[0]=Oe,_[1]=Be,_[2]=Le,_[3]=Se,D.clearBufferuiv(D.COLOR,0,_)):(g[0]=Oe,g[1]=Be,g[2]=Le,g[3]=Se,D.clearBufferiv(D.COLOR,0,g))}else Z|=D.COLOR_BUFFER_BIT}H&&(Z|=D.DEPTH_BUFFER_BIT),Y&&(Z|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",de,!1),t.removeEventListener("webglcontextrestored",ge,!1),t.removeEventListener("webglcontextcreationerror",re,!1),ie.dispose(),I.dispose(),Q.dispose(),Ae.dispose(),F.dispose(),w.dispose(),R.dispose(),le.dispose(),Pe.dispose(),N.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",He),ae.removeEventListener("sessionend",Xt),ci.stop()};function de(A){A.preventDefault(),T=!0}function ge(){T=!1;let A=at.autoReset,H=he.enabled,Y=he.autoUpdate,Z=he.needsUpdate,z=he.type;B(),at.autoReset=A,he.enabled=H,he.autoUpdate=Y,he.needsUpdate=Z,he.type=z}function re(A){}function J(A){let H=A.target;H.removeEventListener("dispose",J),xe(H)}function xe(A){ve(A),Ae.remove(A)}function ve(A){let H=Ae.get(A).programs;H!==void 0&&(H.forEach(function(Y){N.releaseProgram(Y)}),A.isShaderMaterial&&N.releaseShaderCache(A))}this.renderBufferDirect=function(A,H,Y,Z,z,ue){H===null&&(H=Re);let be=z.isMesh&&z.matrixWorld.determinant()<0,Ce=qv(A,H,Y,Z,z);Te.setMaterial(Z,be);let Se=Y.index,Oe=1;if(Z.wireframe===!0){if(Se=y.getWireframeAttribute(Y),Se===void 0)return;Oe=2}let Be=Y.drawRange,Le=Y.attributes.position,Ye=Be.start*Oe,it=(Be.start+Be.count)*Oe;ue!==null&&(Ye=Math.max(Ye,ue.start*Oe),it=Math.min(it,(ue.start+ue.count)*Oe)),Se!==null?(Ye=Math.max(Ye,0),it=Math.min(it,Se.count)):Le!=null&&(Ye=Math.max(Ye,0),it=Math.min(it,Le.count));let _t=it-Ye;if(_t<0||_t===1/0)return;le.setup(z,Z,Ce,Y,Se);let ut,rt=se;if(Se!==null&&(ut=v.get(Se),rt=pe,rt.setIndex(ut)),z.isMesh)Z.wireframe===!0?(Te.setLineWidth(Z.wireframeLinewidth*Lt()),rt.setMode(D.LINES)):rt.setMode(D.TRIANGLES);else if(z.isLine){let Ie=Z.linewidth;Ie===void 0&&(Ie=1),Te.setLineWidth(Ie*Lt()),z.isLineSegments?rt.setMode(D.LINES):z.isLineLoop?rt.setMode(D.LINE_LOOP):rt.setMode(D.LINE_STRIP)}else z.isPoints?rt.setMode(D.POINTS):z.isSprite&&rt.setMode(D.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)Fs("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),rt.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(Fe.get("WEBGL_multi_draw"))rt.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{let Ie=z._multiDrawStarts,pt=z._multiDrawCounts,Je=z._multiDrawCount,hi=Se?v.get(Se).bytesPerElement:1,Yr=Ae.get(Z).currentProgram.getUniforms();for(let ui=0;ui<Je;ui++)Yr.setValue(D,"_gl_DrawID",ui),rt.render(Ie[ui]/hi,pt[ui])}else if(z.isInstancedMesh)rt.renderInstances(Ye,_t,z.count);else if(Y.isInstancedBufferGeometry){let Ie=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,pt=Math.min(Y.instanceCount,Ie);rt.renderInstances(Ye,_t,pt)}else rt.render(Ye,_t)};function Ge(A,H,Y){A.transparent===!0&&A.side===xi&&A.forceSinglePass===!1?(A.side=ei,A.needsUpdate=!0,Sa(A,H,Y),A.side=Sn,A.needsUpdate=!0,Sa(A,H,Y),A.side=xi):Sa(A,H,Y)}this.compile=function(A,H,Y=null){Y===null&&(Y=A),p=Q.get(Y),p.init(H),x.push(p),Y.traverseVisible(function(z){z.isLight&&z.layers.test(H.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),A!==Y&&A.traverseVisible(function(z){z.isLight&&z.layers.test(H.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),p.setupLights();let Z=new Set;return A.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;let ue=z.material;if(ue)if(Array.isArray(ue))for(let be=0;be<ue.length;be++){let Ce=ue[be];Ge(Ce,Y,z),Z.add(Ce)}else Ge(ue,Y,z),Z.add(ue)}),p=x.pop(),Z},this.compileAsync=function(A,H,Y=null){let Z=this.compile(A,H,Y);return new Promise(z=>{function ue(){if(Z.forEach(function(be){Ae.get(be).currentProgram.isReady()&&Z.delete(be)}),Z.size===0){z(A);return}setTimeout(ue,10)}Fe.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let Me=null;function nt(A){Me&&Me(A)}function He(){ci.stop()}function Xt(){ci.start()}let ci=new vv;ci.setAnimationLoop(nt),typeof self!="undefined"&&ci.setContext(self),this.setAnimationLoop=function(A){Me=A,ae.setAnimationLoop(A),A===null?ci.stop():ci.start()},ae.addEventListener("sessionstart",He),ae.addEventListener("sessionend",Xt),this.render=function(A,H){if(H!==void 0&&H.isCamera!==!0||T===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(ae.cameraAutoUpdate===!0&&ae.updateCamera(H),H=ae.getCamera()),A.isScene===!0&&A.onBeforeRender(b,A,H,P),p=Q.get(A,x.length),p.init(H),x.push(p),ce.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),Xe.setFromProjectionMatrix(ce,Bi,H.reversedDepth),ee=this.localClippingEnabled,Ve=ne.init(this.clippingPlanes,ee),m=I.get(A,S.length),m.init(),S.push(m),ae.enabled===!0&&ae.isPresenting===!0){let ue=b.xr.getDepthSensingMesh();ue!==null&&Tn(ue,H,-1/0,b.sortObjects)}Tn(A,H,0,b.sortObjects),m.finish(),b.sortObjects===!0&&m.sort(fe,ye),qe=ae.enabled===!1||ae.isPresenting===!1||ae.hasDepthSensing()===!1,qe&&ie.addToRenderList(m,A),this.info.render.frame++,Ve===!0&&ne.beginShadows();let Y=p.state.shadowsArray;he.render(Y,A,H),Ve===!0&&ne.endShadows(),this.info.autoReset===!0&&this.info.reset();let Z=m.opaque,z=m.transmissive;if(p.setupLights(),H.isArrayCamera){let ue=H.cameras;if(z.length>0)for(let be=0,Ce=ue.length;be<Ce;be++){let Se=ue[be];Et(Z,z,A,Se)}qe&&ie.render(A);for(let be=0,Ce=ue.length;be<Ce;be++){let Se=ue[be];qr(m,A,Se,Se.viewport)}}else z.length>0&&Et(Z,z,A,H),qe&&ie.render(A),qr(m,A,H);P!==null&&L===0&&(U.updateMultisampleRenderTarget(P),U.updateRenderTargetMipmap(P)),A.isScene===!0&&A.onAfterRender(b,A,H),le.resetDefaultState(),M=-1,E=null,x.pop(),x.length>0?(p=x[x.length-1],Ve===!0&&ne.setGlobalState(b.clippingPlanes,p.state.camera)):p=null,S.pop(),S.length>0?m=S[S.length-1]:m=null};function Tn(A,H,Y,Z){if(A.visible===!1)return;if(A.layers.test(H.layers)){if(A.isGroup)Y=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(H);else if(A.isLight)p.pushLight(A),A.castShadow&&p.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Xe.intersectsSprite(A)){Z&&Ue.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ce);let be=R.update(A),Ce=A.material;Ce.visible&&m.push(A,be,Ce,Y,Ue.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Xe.intersectsObject(A))){let be=R.update(A),Ce=A.material;if(Z&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ue.copy(A.boundingSphere.center)):(be.boundingSphere===null&&be.computeBoundingSphere(),Ue.copy(be.boundingSphere.center)),Ue.applyMatrix4(A.matrixWorld).applyMatrix4(ce)),Array.isArray(Ce)){let Se=be.groups;for(let Oe=0,Be=Se.length;Oe<Be;Oe++){let Le=Se[Oe],Ye=Ce[Le.materialIndex];Ye&&Ye.visible&&m.push(A,be,Ye,Y,Ue.z,Le)}}else Ce.visible&&m.push(A,be,Ce,Y,Ue.z,null)}}let ue=A.children;for(let be=0,Ce=ue.length;be<Ce;be++)Tn(ue[be],H,Y,Z)}function qr(A,H,Y,Z){let z=A.opaque,ue=A.transmissive,be=A.transparent;p.setupLightsView(Y),Ve===!0&&ne.setGlobalState(b.clippingPlanes,Y),Z&&Te.viewport(O.copy(Z)),z.length>0&&bi(z,H,Y),ue.length>0&&bi(ue,H,Y),be.length>0&&bi(be,H,Y),Te.buffers.depth.setTest(!0),Te.buffers.depth.setMask(!0),Te.buffers.color.setMask(!0),Te.setPolygonOffset(!1)}function Et(A,H,Y,Z){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[Z.id]===void 0&&(p.state.transmissionRenderTarget[Z.id]=new $i(1,1,{generateMipmaps:!0,type:Fe.has("EXT_color_buffer_half_float")||Fe.has("EXT_color_buffer_float")?Gs:en,minFilter:Qi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ke.workingColorSpace}));let ue=p.state.transmissionRenderTarget[Z.id],be=Z.viewport||O;ue.setSize(be.z*b.transmissionResolutionScale,be.w*b.transmissionResolutionScale);let Ce=b.getRenderTarget(),Se=b.getActiveCubeFace(),Oe=b.getActiveMipmapLevel();b.setRenderTarget(ue),b.getClearColor($),K=b.getClearAlpha(),K<1&&b.setClearColor(16777215,.5),b.clear(),qe&&ie.render(Y);let Be=b.toneMapping;b.toneMapping=En;let Le=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),p.setupLightsView(Z),Ve===!0&&ne.setGlobalState(b.clippingPlanes,Z),bi(A,Y,Z),U.updateMultisampleRenderTarget(ue),U.updateRenderTargetMipmap(ue),Fe.has("WEBGL_multisampled_render_to_texture")===!1){let Ye=!1;for(let it=0,_t=H.length;it<_t;it++){let ut=H[it],rt=ut.object,Ie=ut.geometry,pt=ut.material,Je=ut.group;if(pt.side===xi&&rt.layers.test(Z.layers)){let hi=pt.side;pt.side=ei,pt.needsUpdate=!0,Jd(rt,Y,Z,Ie,pt,Je),pt.side=hi,pt.needsUpdate=!0,Ye=!0}}Ye===!0&&(U.updateMultisampleRenderTarget(ue),U.updateRenderTargetMipmap(ue))}b.setRenderTarget(Ce,Se,Oe),b.setClearColor($,K),Le!==void 0&&(Z.viewport=Le),b.toneMapping=Be}function bi(A,H,Y){let Z=H.isScene===!0?H.overrideMaterial:null;for(let z=0,ue=A.length;z<ue;z++){let be=A[z],Ce=be.object,Se=be.geometry,Oe=be.group,Be=be.material;Be.allowOverride===!0&&Z!==null&&(Be=Z),Ce.layers.test(Y.layers)&&Jd(Ce,H,Y,Se,Be,Oe)}}function Jd(A,H,Y,Z,z,ue){A.onBeforeRender(b,H,Y,Z,z,ue),A.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),z.onBeforeRender(b,H,Y,Z,A,ue),z.transparent===!0&&z.side===xi&&z.forceSinglePass===!1?(z.side=ei,z.needsUpdate=!0,b.renderBufferDirect(Y,H,Z,z,A,ue),z.side=Sn,z.needsUpdate=!0,b.renderBufferDirect(Y,H,Z,z,A,ue),z.side=xi):b.renderBufferDirect(Y,H,Z,z,A,ue),A.onAfterRender(b,H,Y,Z,z,ue)}function Sa(A,H,Y){H.isScene!==!0&&(H=Re);let Z=Ae.get(A),z=p.state.lights,ue=p.state.shadowsArray,be=z.state.version,Ce=N.getParameters(A,z.state,ue,H,Y),Se=N.getProgramCacheKey(Ce),Oe=Z.programs;Z.environment=A.isMeshStandardMaterial?H.environment:null,Z.fog=H.fog,Z.envMap=(A.isMeshStandardMaterial?w:F).get(A.envMap||Z.environment),Z.envMapRotation=Z.environment!==null&&A.envMap===null?H.environmentRotation:A.envMapRotation,Oe===void 0&&(A.addEventListener("dispose",J),Oe=new Map,Z.programs=Oe);let Be=Oe.get(Se);if(Be!==void 0){if(Z.currentProgram===Be&&Z.lightsStateVersion===be)return ef(A,Ce),Be}else Ce.uniforms=N.getUniforms(A),A.onBeforeCompile(Ce,b),Be=N.acquireProgram(Ce,Se),Oe.set(Se,Be),Z.uniforms=Ce.uniforms;let Le=Z.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Le.clippingPlanes=ne.uniform),ef(A,Ce),Z.needsLights=jv(A),Z.lightsStateVersion=be,Z.needsLights&&(Le.ambientLightColor.value=z.state.ambient,Le.lightProbe.value=z.state.probe,Le.directionalLights.value=z.state.directional,Le.directionalLightShadows.value=z.state.directionalShadow,Le.spotLights.value=z.state.spot,Le.spotLightShadows.value=z.state.spotShadow,Le.rectAreaLights.value=z.state.rectArea,Le.ltc_1.value=z.state.rectAreaLTC1,Le.ltc_2.value=z.state.rectAreaLTC2,Le.pointLights.value=z.state.point,Le.pointLightShadows.value=z.state.pointShadow,Le.hemisphereLights.value=z.state.hemi,Le.directionalShadowMap.value=z.state.directionalShadowMap,Le.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Le.spotShadowMap.value=z.state.spotShadowMap,Le.spotLightMatrix.value=z.state.spotLightMatrix,Le.spotLightMap.value=z.state.spotLightMap,Le.pointShadowMap.value=z.state.pointShadowMap,Le.pointShadowMatrix.value=z.state.pointShadowMatrix),Z.currentProgram=Be,Z.uniformsList=null,Be}function Qd(A){if(A.uniformsList===null){let H=A.currentProgram.getUniforms();A.uniformsList=$s.seqWithValue(H.seq,A.uniforms)}return A.uniformsList}function ef(A,H){let Y=Ae.get(A);Y.outputColorSpace=H.outputColorSpace,Y.batching=H.batching,Y.batchingColor=H.batchingColor,Y.instancing=H.instancing,Y.instancingColor=H.instancingColor,Y.instancingMorph=H.instancingMorph,Y.skinning=H.skinning,Y.morphTargets=H.morphTargets,Y.morphNormals=H.morphNormals,Y.morphColors=H.morphColors,Y.morphTargetsCount=H.morphTargetsCount,Y.numClippingPlanes=H.numClippingPlanes,Y.numIntersection=H.numClipIntersection,Y.vertexAlphas=H.vertexAlphas,Y.vertexTangents=H.vertexTangents,Y.toneMapping=H.toneMapping}function qv(A,H,Y,Z,z){H.isScene!==!0&&(H=Re),U.resetTextureUnits();let ue=H.fog,be=Z.isMeshStandardMaterial?H.environment:null,Ce=P===null?b.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Or,Se=(Z.isMeshStandardMaterial?w:F).get(Z.envMap||be),Oe=Z.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Be=!!Y.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),Le=!!Y.morphAttributes.position,Ye=!!Y.morphAttributes.normal,it=!!Y.morphAttributes.color,_t=En;Z.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(_t=b.toneMapping);let ut=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,rt=ut!==void 0?ut.length:0,Ie=Ae.get(Z),pt=p.state.lights;if(Ve===!0&&(ee===!0||A!==E)){let qt=A===E&&Z.id===M;ne.setState(Z,A,qt)}let Je=!1;Z.version===Ie.__version?(Ie.needsLights&&Ie.lightsStateVersion!==pt.state.version||Ie.outputColorSpace!==Ce||z.isBatchedMesh&&Ie.batching===!1||!z.isBatchedMesh&&Ie.batching===!0||z.isBatchedMesh&&Ie.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Ie.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Ie.instancing===!1||!z.isInstancedMesh&&Ie.instancing===!0||z.isSkinnedMesh&&Ie.skinning===!1||!z.isSkinnedMesh&&Ie.skinning===!0||z.isInstancedMesh&&Ie.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Ie.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Ie.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Ie.instancingMorph===!1&&z.morphTexture!==null||Ie.envMap!==Se||Z.fog===!0&&Ie.fog!==ue||Ie.numClippingPlanes!==void 0&&(Ie.numClippingPlanes!==ne.numPlanes||Ie.numIntersection!==ne.numIntersection)||Ie.vertexAlphas!==Oe||Ie.vertexTangents!==Be||Ie.morphTargets!==Le||Ie.morphNormals!==Ye||Ie.morphColors!==it||Ie.toneMapping!==_t||Ie.morphTargetsCount!==rt)&&(Je=!0):(Je=!0,Ie.__version=Z.version);let hi=Ie.currentProgram;Je===!0&&(hi=Sa(Z,H,z));let Yr=!1,ui=!1,io=!1,mt=hi.getUniforms(),Si=Ie.uniforms;if(Te.useProgram(hi.program)&&(Yr=!0,ui=!0,io=!0),Z.id!==M&&(M=Z.id,ui=!0),Yr||E!==A){Te.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),mt.setValue(D,"projectionMatrix",A.projectionMatrix),mt.setValue(D,"viewMatrix",A.matrixWorldInverse);let ti=mt.map.cameraPosition;ti!==void 0&&ti.setValue(D,Ee.setFromMatrixPosition(A.matrixWorld)),De.logarithmicDepthBuffer&&mt.setValue(D,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&mt.setValue(D,"isOrthographic",A.isOrthographicCamera===!0),E!==A&&(E=A,ui=!0,io=!0)}if(z.isSkinnedMesh){mt.setOptional(D,z,"bindMatrix"),mt.setOptional(D,z,"bindMatrixInverse");let qt=z.skeleton;qt&&(qt.boneTexture===null&&qt.computeBoneTexture(),mt.setValue(D,"boneTexture",qt.boneTexture,U))}z.isBatchedMesh&&(mt.setOptional(D,z,"batchingTexture"),mt.setValue(D,"batchingTexture",z._matricesTexture,U),mt.setOptional(D,z,"batchingIdTexture"),mt.setValue(D,"batchingIdTexture",z._indirectTexture,U),mt.setOptional(D,z,"batchingColorTexture"),z._colorsTexture!==null&&mt.setValue(D,"batchingColorTexture",z._colorsTexture,U));let Mi=Y.morphAttributes;if((Mi.position!==void 0||Mi.normal!==void 0||Mi.color!==void 0)&&te.update(z,Y,hi),(ui||Ie.receiveShadow!==z.receiveShadow)&&(Ie.receiveShadow=z.receiveShadow,mt.setValue(D,"receiveShadow",z.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(Si.envMap.value=Se,Si.flipEnvMap.value=Se.isCubeTexture&&Se.isRenderTargetTexture===!1?-1:1),Z.isMeshStandardMaterial&&Z.envMap===null&&H.environment!==null&&(Si.envMapIntensity.value=H.environmentIntensity),ui&&(mt.setValue(D,"toneMappingExposure",b.toneMappingExposure),Ie.needsLights&&Yv(Si,io),ue&&Z.fog===!0&&k.refreshFogUniforms(Si,ue),k.refreshMaterialUniforms(Si,Z,X,oe,p.state.transmissionRenderTarget[A.id]),$s.upload(D,Qd(Ie),Si,U)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&($s.upload(D,Qd(Ie),Si,U),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&mt.setValue(D,"center",z.center),mt.setValue(D,"modelViewMatrix",z.modelViewMatrix),mt.setValue(D,"normalMatrix",z.normalMatrix),mt.setValue(D,"modelMatrix",z.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){let qt=Z.uniformsGroups;for(let ti=0,dh=qt.length;ti<dh;ti++){let rr=qt[ti];Pe.update(rr,hi),Pe.bind(rr,hi)}}return hi}function Yv(A,H){A.ambientLightColor.needsUpdate=H,A.lightProbe.needsUpdate=H,A.directionalLights.needsUpdate=H,A.directionalLightShadows.needsUpdate=H,A.pointLights.needsUpdate=H,A.pointLightShadows.needsUpdate=H,A.spotLights.needsUpdate=H,A.spotLightShadows.needsUpdate=H,A.rectAreaLights.needsUpdate=H,A.hemisphereLights.needsUpdate=H}function jv(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(A,H,Y){let Z=Ae.get(A);Z.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,Z.__autoAllocateDepthBuffer===!1&&(Z.__useRenderToTexture=!1),Ae.get(A.texture).__webglTexture=H,Ae.get(A.depthTexture).__webglTexture=Z.__autoAllocateDepthBuffer?void 0:Y,Z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,H){let Y=Ae.get(A);Y.__webglFramebuffer=H,Y.__useDefaultFramebuffer=H===void 0};let Zv=D.createFramebuffer();this.setRenderTarget=function(A,H=0,Y=0){P=A,C=H,L=Y;let Z=!0,z=null,ue=!1,be=!1;if(A){let Se=Ae.get(A);if(Se.__useDefaultFramebuffer!==void 0)Te.bindFramebuffer(D.FRAMEBUFFER,null),Z=!1;else if(Se.__webglFramebuffer===void 0)U.setupRenderTarget(A);else if(Se.__hasExternalTextures)U.rebindTextures(A,Ae.get(A.texture).__webglTexture,Ae.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let Le=A.depthTexture;if(Se.__boundDepthTexture!==Le){if(Le!==null&&Ae.has(Le)&&(A.width!==Le.image.width||A.height!==Le.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");U.setupDepthRenderbuffer(A)}}let Oe=A.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture||Oe.isCompressedArrayTexture)&&(be=!0);let Be=Ae.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Be[H])?z=Be[H][Y]:z=Be[H],ue=!0):A.samples>0&&U.useMultisampledRTT(A)===!1?z=Ae.get(A).__webglMultisampledFramebuffer:Array.isArray(Be)?z=Be[Y]:z=Be,O.copy(A.viewport),V.copy(A.scissor),W=A.scissorTest}else O.copy(we).multiplyScalar(X).floor(),V.copy(Ne).multiplyScalar(X).floor(),W=Qe;if(Y!==0&&(z=Zv),Te.bindFramebuffer(D.FRAMEBUFFER,z)&&Z&&Te.drawBuffers(A,z),Te.viewport(O),Te.scissor(V),Te.setScissorTest(W),ue){let Se=Ae.get(A.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+H,Se.__webglTexture,Y)}else if(be){let Se=H;for(let Oe=0;Oe<A.textures.length;Oe++){let Be=Ae.get(A.textures[Oe]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Oe,Be.__webglTexture,Y,Se)}}else if(A!==null&&Y!==0){let Se=Ae.get(A.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Se.__webglTexture,Y)}M=-1},this.readRenderTargetPixels=function(A,H,Y,Z,z,ue,be,Ce=0){if(!(A&&A.isWebGLRenderTarget))return;let Se=Ae.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&be!==void 0&&(Se=Se[be]),Se){Te.bindFramebuffer(D.FRAMEBUFFER,Se);try{let Oe=A.textures[Ce],Be=Oe.format,Le=Oe.type;if(!De.textureFormatReadable(Be)||!De.textureTypeReadable(Le))return;H>=0&&H<=A.width-Z&&Y>=0&&Y<=A.height-z&&(A.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Ce),D.readPixels(H,Y,Z,z,me.convert(Be),me.convert(Le),ue))}finally{let Oe=P!==null?Ae.get(P).__webglFramebuffer:null;Te.bindFramebuffer(D.FRAMEBUFFER,Oe)}}},this.readRenderTargetPixelsAsync=async function(A,H,Y,Z,z,ue,be,Ce=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Se=Ae.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&be!==void 0&&(Se=Se[be]),Se)if(H>=0&&H<=A.width-Z&&Y>=0&&Y<=A.height-z){Te.bindFramebuffer(D.FRAMEBUFFER,Se);let Oe=A.textures[Ce],Be=Oe.format,Le=Oe.type;if(!De.textureFormatReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!De.textureTypeReadable(Le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ye=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Ye),D.bufferData(D.PIXEL_PACK_BUFFER,ue.byteLength,D.STREAM_READ),A.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Ce),D.readPixels(H,Y,Z,z,me.convert(Be),me.convert(Le),0);let it=P!==null?Ae.get(P).__webglFramebuffer:null;Te.bindFramebuffer(D.FRAMEBUFFER,it);let _t=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Wg(D,_t,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Ye),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ue),D.deleteBuffer(Ye),D.deleteSync(_t),ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,H=null,Y=0){let Z=Math.pow(2,-Y),z=Math.floor(A.image.width*Z),ue=Math.floor(A.image.height*Z),be=H!==null?H.x:0,Ce=H!==null?H.y:0;U.setTexture2D(A,0),D.copyTexSubImage2D(D.TEXTURE_2D,Y,0,0,be,Ce,z,ue),Te.unbindTexture()};let $v=D.createFramebuffer(),Kv=D.createFramebuffer();this.copyTextureToTexture=function(A,H,Y=null,Z=null,z=0,ue=null){ue===null&&(z!==0?(Fs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ue=z,z=0):ue=0);let be,Ce,Se,Oe,Be,Le,Ye,it,_t,ut=A.isCompressedTexture?A.mipmaps[ue]:A.image;if(Y!==null)be=Y.max.x-Y.min.x,Ce=Y.max.y-Y.min.y,Se=Y.isBox3?Y.max.z-Y.min.z:1,Oe=Y.min.x,Be=Y.min.y,Le=Y.isBox3?Y.min.z:0;else{let Mi=Math.pow(2,-z);be=Math.floor(ut.width*Mi),Ce=Math.floor(ut.height*Mi),A.isDataArrayTexture?Se=ut.depth:A.isData3DTexture?Se=Math.floor(ut.depth*Mi):Se=1,Oe=0,Be=0,Le=0}Z!==null?(Ye=Z.x,it=Z.y,_t=Z.z):(Ye=0,it=0,_t=0);let rt=me.convert(H.format),Ie=me.convert(H.type),pt;H.isData3DTexture?(U.setTexture3D(H,0),pt=D.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(U.setTexture2DArray(H,0),pt=D.TEXTURE_2D_ARRAY):(U.setTexture2D(H,0),pt=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,H.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,H.unpackAlignment);let Je=D.getParameter(D.UNPACK_ROW_LENGTH),hi=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Yr=D.getParameter(D.UNPACK_SKIP_PIXELS),ui=D.getParameter(D.UNPACK_SKIP_ROWS),io=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,ut.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ut.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Oe),D.pixelStorei(D.UNPACK_SKIP_ROWS,Be),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Le);let mt=A.isDataArrayTexture||A.isData3DTexture,Si=H.isDataArrayTexture||H.isData3DTexture;if(A.isDepthTexture){let Mi=Ae.get(A),qt=Ae.get(H),ti=Ae.get(Mi.__renderTarget),dh=Ae.get(qt.__renderTarget);Te.bindFramebuffer(D.READ_FRAMEBUFFER,ti.__webglFramebuffer),Te.bindFramebuffer(D.DRAW_FRAMEBUFFER,dh.__webglFramebuffer);for(let rr=0;rr<Se;rr++)mt&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ae.get(A).__webglTexture,z,Le+rr),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ae.get(H).__webglTexture,ue,_t+rr)),D.blitFramebuffer(Oe,Be,be,Ce,Ye,it,be,Ce,D.DEPTH_BUFFER_BIT,D.NEAREST);Te.bindFramebuffer(D.READ_FRAMEBUFFER,null),Te.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(z!==0||A.isRenderTargetTexture||Ae.has(A)){let Mi=Ae.get(A),qt=Ae.get(H);Te.bindFramebuffer(D.READ_FRAMEBUFFER,$v),Te.bindFramebuffer(D.DRAW_FRAMEBUFFER,Kv);for(let ti=0;ti<Se;ti++)mt?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Mi.__webglTexture,z,Le+ti):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Mi.__webglTexture,z),Si?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,qt.__webglTexture,ue,_t+ti):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,qt.__webglTexture,ue),z!==0?D.blitFramebuffer(Oe,Be,be,Ce,Ye,it,be,Ce,D.COLOR_BUFFER_BIT,D.NEAREST):Si?D.copyTexSubImage3D(pt,ue,Ye,it,_t+ti,Oe,Be,be,Ce):D.copyTexSubImage2D(pt,ue,Ye,it,Oe,Be,be,Ce);Te.bindFramebuffer(D.READ_FRAMEBUFFER,null),Te.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else Si?A.isDataTexture||A.isData3DTexture?D.texSubImage3D(pt,ue,Ye,it,_t,be,Ce,Se,rt,Ie,ut.data):H.isCompressedArrayTexture?D.compressedTexSubImage3D(pt,ue,Ye,it,_t,be,Ce,Se,rt,ut.data):D.texSubImage3D(pt,ue,Ye,it,_t,be,Ce,Se,rt,Ie,ut):A.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,ue,Ye,it,be,Ce,rt,Ie,ut.data):A.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,ue,Ye,it,ut.width,ut.height,rt,ut.data):D.texSubImage2D(D.TEXTURE_2D,ue,Ye,it,be,Ce,rt,Ie,ut);D.pixelStorei(D.UNPACK_ROW_LENGTH,Je),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,hi),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Yr),D.pixelStorei(D.UNPACK_SKIP_ROWS,ui),D.pixelStorei(D.UNPACK_SKIP_IMAGES,io),ue===0&&H.generateMipmaps&&D.generateMipmap(pt),Te.unbindTexture()},this.initRenderTarget=function(A){Ae.get(A).__webglFramebuffer===void 0&&U.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?U.setTextureCube(A,0):A.isData3DTexture?U.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?U.setTexture2DArray(A,0):U.setTexture2D(A,0),Te.unbindTexture()},this.resetState=function(){C=0,L=0,P=null,Te.reset(),le.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Bi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Ke._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ke._getUnpackColorSpace()}};var Gd={type:"change"},qd={type:"start"},Yd={type:"end"},Sv=1e-6,et={NONE:-1,ROTATE:0,ZOOM:1,PAN:2,TOUCH_ROTATE:3,TOUCH_ZOOM_PAN:4},nh=new ze,ir=new ze,Bw=new G,rh=new G,Wd=new G,Js=new vi,Mv=new G,sh=new G,Xd=new G,oh=new G,ah=class extends ha{constructor(e,t=null){super(e,t),this.screen={left:0,top:0,width:0,height:0},this.rotateSpeed=1,this.zoomSpeed=1.2,this.panSpeed=.3,this.noRotate=!1,this.noZoom=!1,this.noPan=!1,this.staticMoving=!1,this.dynamicDampingFactor=.2,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.keys=["KeyA","KeyS","KeyD"],this.mouseButtons={LEFT:er.ROTATE,MIDDLE:er.DOLLY,RIGHT:er.PAN},this.target=new G,this.state=et.NONE,this.keyState=et.NONE,this._lastPosition=new G,this._lastZoom=1,this._touchZoomDistanceStart=0,this._touchZoomDistanceEnd=0,this._lastAngle=0,this._eye=new G,this._movePrev=new ze,this._moveCurr=new ze,this._lastAxis=new G,this._zoomStart=new ze,this._zoomEnd=new ze,this._panStart=new ze,this._panEnd=new ze,this._pointers=[],this._pointerPositions={},this._onPointerMove=Hw.bind(this),this._onPointerDown=kw.bind(this),this._onPointerUp=zw.bind(this),this._onPointerCancel=Vw.bind(this),this._onContextMenu=Zw.bind(this),this._onMouseWheel=jw.bind(this),this._onKeyDown=Ww.bind(this),this._onKeyUp=Gw.bind(this),this._onTouchStart=$w.bind(this),this._onTouchMove=Kw.bind(this),this._onTouchEnd=Jw.bind(this),this._onMouseDown=Xw.bind(this),this._onMouseMove=qw.bind(this),this._onMouseUp=Yw.bind(this),this._target0=this.target.clone(),this._position0=this.object.position.clone(),this._up0=this.object.up.clone(),this._zoom0=this.object.zoom,t!==null&&(this.connect(t),this.handleResize()),this.update()}connect(e){super.connect(e),window.addEventListener("keydown",this._onKeyDown),window.addEventListener("keyup",this._onKeyUp),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerCancel),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.style.touchAction="none"}disconnect(){window.removeEventListener("keydown",this._onKeyDown),window.removeEventListener("keyup",this._onKeyUp),this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerCancel),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}handleResize(){let e=this.domElement.getBoundingClientRect(),t=this.domElement.ownerDocument.documentElement;this.screen.left=e.left+window.pageXOffset-t.clientLeft,this.screen.top=e.top+window.pageYOffset-t.clientTop,this.screen.width=e.width,this.screen.height=e.height}update(){this._eye.subVectors(this.object.position,this.target),this.noRotate||this._rotateCamera(),this.noZoom||this._zoomCamera(),this.noPan||this._panCamera(),this.object.position.addVectors(this.target,this._eye),this.object.isPerspectiveCamera?(this._checkDistances(),this.object.lookAt(this.target),this._lastPosition.distanceToSquared(this.object.position)>Sv&&(this.dispatchEvent(Gd),this._lastPosition.copy(this.object.position))):this.object.isOrthographicCamera&&(this.object.lookAt(this.target),(this._lastPosition.distanceToSquared(this.object.position)>Sv||this._lastZoom!==this.object.zoom)&&(this.dispatchEvent(Gd),this._lastPosition.copy(this.object.position),this._lastZoom=this.object.zoom))}reset(){this.state=et.NONE,this.keyState=et.NONE,this.target.copy(this._target0),this.object.position.copy(this._position0),this.object.up.copy(this._up0),this.object.zoom=this._zoom0,this.object.updateProjectionMatrix(),this._eye.subVectors(this.object.position,this.target),this.object.lookAt(this.target),this.dispatchEvent(Gd),this._lastPosition.copy(this.object.position),this._lastZoom=this.object.zoom}_panCamera(){if(ir.copy(this._panEnd).sub(this._panStart),ir.lengthSq()){if(this.object.isOrthographicCamera){let e=(this.object.right-this.object.left)/this.object.zoom/this.domElement.clientWidth,t=(this.object.top-this.object.bottom)/this.object.zoom/this.domElement.clientWidth;ir.x*=e,ir.y*=t}ir.multiplyScalar(this._eye.length()*this.panSpeed),rh.copy(this._eye).cross(this.object.up).setLength(ir.x),rh.add(Bw.copy(this.object.up).setLength(ir.y)),this.object.position.add(rh),this.target.add(rh),this.staticMoving?this._panStart.copy(this._panEnd):this._panStart.add(ir.subVectors(this._panEnd,this._panStart).multiplyScalar(this.dynamicDampingFactor))}}_rotateCamera(){oh.set(this._moveCurr.x-this._movePrev.x,this._moveCurr.y-this._movePrev.y,0);let e=oh.length();e?(this._eye.copy(this.object.position).sub(this.target),Mv.copy(this._eye).normalize(),sh.copy(this.object.up).normalize(),Xd.crossVectors(sh,Mv).normalize(),sh.setLength(this._moveCurr.y-this._movePrev.y),Xd.setLength(this._moveCurr.x-this._movePrev.x),oh.copy(sh.add(Xd)),Wd.crossVectors(oh,this._eye).normalize(),e*=this.rotateSpeed,Js.setFromAxisAngle(Wd,e),this._eye.applyQuaternion(Js),this.object.up.applyQuaternion(Js),this._lastAxis.copy(Wd),this._lastAngle=e):!this.staticMoving&&this._lastAngle&&(this._lastAngle*=Math.sqrt(1-this.dynamicDampingFactor),this._eye.copy(this.object.position).sub(this.target),Js.setFromAxisAngle(this._lastAxis,this._lastAngle),this._eye.applyQuaternion(Js),this.object.up.applyQuaternion(Js)),this._movePrev.copy(this._moveCurr)}_zoomCamera(){let e;this.state===et.TOUCH_ZOOM_PAN?(e=this._touchZoomDistanceStart/this._touchZoomDistanceEnd,this._touchZoomDistanceStart=this._touchZoomDistanceEnd,this.object.isPerspectiveCamera?this._eye.multiplyScalar(e):this.object.isOrthographicCamera&&(this.object.zoom=$c.clamp(this.object.zoom/e,this.minZoom,this.maxZoom),this._lastZoom!==this.object.zoom&&this.object.updateProjectionMatrix())):(e=1+(this._zoomEnd.y-this._zoomStart.y)*this.zoomSpeed,e!==1&&e>0&&(this.object.isPerspectiveCamera?this._eye.multiplyScalar(e):this.object.isOrthographicCamera&&(this.object.zoom=$c.clamp(this.object.zoom/e,this.minZoom,this.maxZoom),this._lastZoom!==this.object.zoom&&this.object.updateProjectionMatrix())),this.staticMoving?this._zoomStart.copy(this._zoomEnd):this._zoomStart.y+=(this._zoomEnd.y-this._zoomStart.y)*this.dynamicDampingFactor)}_getMouseOnScreen(e,t){return nh.set((e-this.screen.left)/this.screen.width,(t-this.screen.top)/this.screen.height),nh}_getMouseOnCircle(e,t){return nh.set((e-this.screen.width*.5-this.screen.left)/(this.screen.width*.5),(this.screen.height+2*(this.screen.top-t))/this.screen.width),nh}_addPointer(e){this._pointers.push(e)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t].pointerId==e.pointerId){this._pointers.splice(t,1);return}}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ze,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0].pointerId?this._pointers[1]:this._pointers[0];return this._pointerPositions[t.pointerId]}_checkDistances(){(!this.noZoom||!this.noPan)&&(this._eye.lengthSq()>this.maxDistance*this.maxDistance&&(this.object.position.addVectors(this.target,this._eye.setLength(this.maxDistance)),this._zoomStart.copy(this._zoomEnd)),this._eye.lengthSq()<this.minDistance*this.minDistance&&(this.object.position.addVectors(this.target,this._eye.setLength(this.minDistance)),this._zoomStart.copy(this._zoomEnd)))}};function kw(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r))}function Hw(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function zw(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchEnd(r):this._onMouseUp(),this._removePointer(r),this._pointers.length===0&&(this.domElement.releasePointerCapture(r.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp)))}function Vw(r){this._removePointer(r)}function Gw(){this.enabled!==!1&&(this.keyState=et.NONE,window.addEventListener("keydown",this._onKeyDown))}function Ww(r){this.enabled!==!1&&(window.removeEventListener("keydown",this._onKeyDown),this.keyState===et.NONE&&(r.code===this.keys[et.ROTATE]&&!this.noRotate?this.keyState=et.ROTATE:r.code===this.keys[et.ZOOM]&&!this.noZoom?this.keyState=et.ZOOM:r.code===this.keys[et.PAN]&&!this.noPan&&(this.keyState=et.PAN)))}function Xw(r){let e;switch(r.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case er.DOLLY:this.state=et.ZOOM;break;case er.ROTATE:this.state=et.ROTATE;break;case er.PAN:this.state=et.PAN;break;default:this.state=et.NONE}let t=this.keyState!==et.NONE?this.keyState:this.state;t===et.ROTATE&&!this.noRotate?(this._moveCurr.copy(this._getMouseOnCircle(r.pageX,r.pageY)),this._movePrev.copy(this._moveCurr)):t===et.ZOOM&&!this.noZoom?(this._zoomStart.copy(this._getMouseOnScreen(r.pageX,r.pageY)),this._zoomEnd.copy(this._zoomStart)):t===et.PAN&&!this.noPan&&(this._panStart.copy(this._getMouseOnScreen(r.pageX,r.pageY)),this._panEnd.copy(this._panStart)),this.dispatchEvent(qd)}function qw(r){let e=this.keyState!==et.NONE?this.keyState:this.state;e===et.ROTATE&&!this.noRotate?(this._movePrev.copy(this._moveCurr),this._moveCurr.copy(this._getMouseOnCircle(r.pageX,r.pageY))):e===et.ZOOM&&!this.noZoom?this._zoomEnd.copy(this._getMouseOnScreen(r.pageX,r.pageY)):e===et.PAN&&!this.noPan&&this._panEnd.copy(this._getMouseOnScreen(r.pageX,r.pageY))}function Yw(){this.state=et.NONE,this.dispatchEvent(Yd)}function jw(r){if(this.enabled!==!1&&this.noZoom!==!0){switch(r.preventDefault(),r.deltaMode){case 2:this._zoomStart.y-=r.deltaY*.025;break;case 1:this._zoomStart.y-=r.deltaY*.01;break;default:this._zoomStart.y-=r.deltaY*25e-5;break}this.dispatchEvent(qd),this.dispatchEvent(Yd)}}function Zw(r){this.enabled!==!1&&r.preventDefault()}function $w(r){switch(this._trackPointer(r),this._pointers.length){case 1:this.state=et.TOUCH_ROTATE,this._moveCurr.copy(this._getMouseOnCircle(this._pointers[0].pageX,this._pointers[0].pageY)),this._movePrev.copy(this._moveCurr);break;default:this.state=et.TOUCH_ZOOM_PAN;let e=this._pointers[0].pageX-this._pointers[1].pageX,t=this._pointers[0].pageY-this._pointers[1].pageY;this._touchZoomDistanceEnd=this._touchZoomDistanceStart=Math.sqrt(e*e+t*t);let i=(this._pointers[0].pageX+this._pointers[1].pageX)/2,n=(this._pointers[0].pageY+this._pointers[1].pageY)/2;this._panStart.copy(this._getMouseOnScreen(i,n)),this._panEnd.copy(this._panStart);break}this.dispatchEvent(qd)}function Kw(r){switch(this._trackPointer(r),this._pointers.length){case 1:this._movePrev.copy(this._moveCurr),this._moveCurr.copy(this._getMouseOnCircle(r.pageX,r.pageY));break;default:let e=this._getSecondPointerPosition(r),t=r.pageX-e.x,i=r.pageY-e.y;this._touchZoomDistanceEnd=Math.sqrt(t*t+i*i);let n=(r.pageX+e.x)/2,s=(r.pageY+e.y)/2;this._panEnd.copy(this._getMouseOnScreen(n,s));break}}function Jw(r){switch(this._pointers.length){case 0:this.state=et.NONE;break;case 1:this.state=et.TOUCH_ROTATE,this._moveCurr.copy(this._getMouseOnCircle(r.pageX,r.pageY)),this._movePrev.copy(this._moveCurr);break;case 2:this.state=et.TOUCH_ZOOM_PAN;for(let e=0;e<this._pointers.length;e++)if(this._pointers[e].pointerId!==r.pointerId){let t=this._pointerPositions[this._pointers[e].pointerId];this._moveCurr.copy(this._getMouseOnCircle(t.x,t.y)),this._movePrev.copy(this._moveCurr);break}break}this.dispatchEvent(Yd)}var Tv="[data-archive-media-item]",Av=".archive-media-element, .grid-image, .grid-video",Ev="",jd=[];function Cv(r){let e=r instanceof Document?r.documentElement:r,t=oT(e);if(t===Ev&&jd.length)return jd;let i=Array.from(e.querySelectorAll(Tv)),n=[];if(i.length)n=i.map((s,o)=>Qw(s,o)).filter(s=>!!s);else{let s=Array.from(e.querySelectorAll(Av));n=s.map((o,a)=>eT(o,a)).filter(o=>!!o),s.length&&sT(e)}return Ev=t,jd=n,n}function Qw(r,e){var s,o,a,l,c,h,u,d,f,_,g;let t=tT((s=r.dataset.mediaType)!=null?s:r.dataset.type),i=(a=(o=r.dataset.mediaSrc)!=null?o:r.dataset.src)!=null?a:r.getAttribute("src");if(!t||!i)return null;let n=Rv((l=r.dataset.aspect)!=null?l:r.getAttribute("data-aspect"));return{id:r.dataset.mediaId||r.id||`archive-media-${e}`,type:t,src:i,thumb:(h=(c=r.dataset.thumb)!=null?c:r.dataset.poster)!=null?h:void 0,aspectRatio:n,title:(d=(u=r.dataset.title)!=null?u:r.getAttribute("data-title"))!=null?d:void 0,description:(f=r.dataset.description)!=null?f:void 0,link:(_=r.dataset.link)!=null?_:void 0,alt:(g=r.getAttribute("alt"))!=null?g:void 0,metadata:Zd(r.dataset)}}function eT(r,e){var n,s,o,a,l,c,h,u,d;let t=r.tagName.toLowerCase()==="img",i=iT(r);if(t){let f=(s=(n=r.getAttribute("src"))!=null?n:r.dataset.src)!=null?s:null;return f?{id:r.dataset.mediaId||r.id||`archive-legacy-${e}`,type:"image",src:f,thumb:(l=(a=(o=r.getAttribute("data-thumb"))!=null?o:r.dataset.thumb)!=null?a:r.getAttribute("data-poster"))!=null?l:void 0,aspectRatio:wv(r),title:(c=r.getAttribute("alt"))!=null?c:void 0,alt:(h=r.getAttribute("alt"))!=null?h:void 0,metadata:Zd(r.dataset)}:null}if(i){let f=nT(i);return f?{id:r.dataset.mediaId||r.id||`archive-legacy-${e}`,type:"video",src:f,thumb:(u=rT(i))!=null?u:void 0,aspectRatio:wv(i),title:(d=r.getAttribute("data-title"))!=null?d:void 0,metadata:Zd({...r.dataset,...i.dataset})}:null}return null}function tT(r){if(!r)return null;if(r==="video"||r==="image")return r;let e=r.toLowerCase();return e.includes("video")?"video":e.includes("image")?"image":null}function Rv(r){if(!r)return;if(r.includes(":")){let[t,i]=r.split(":").map(n=>Number.parseFloat(n.trim()));if(Number.isFinite(t)&&Number.isFinite(i)&&i>0)return i===0?void 0:i/t}let e=Number.parseFloat(r);if(Number.isFinite(e)&&e>0)return e}function wv(r){var s,o;let e=Number.parseFloat((s=r.getAttribute("width"))!=null?s:"")||r.clientWidth,t=Number.parseFloat((o=r.getAttribute("height"))!=null?o:"")||r.clientHeight;if(e>0&&t>0)return t/e;let i=r.getBoundingClientRect();if(i.width>0&&i.height>0)return i.height/i.width;let n=r.getAttribute("data-aspect");return Rv(n)}function iT(r){return r.tagName.toLowerCase()==="video"?r:r.querySelector("video")}function nT(r){var n,s;let e=[(n=r.dataset.src1080)!=null?n:r.getAttribute("data-src-1080"),(s=r.dataset.src720)!=null?s:r.getAttribute("data-src-720"),r.getAttribute("data-src"),r.dataset.src,r.getAttribute("src")];for(let o of e)if(o&&o.trim().length)return o.trim();let t=r.querySelector("source");if(t){let o=[t.getAttribute("data-src-1080"),t.getAttribute("data-src-720"),t.getAttribute("data-src"),t.getAttribute("src")];for(let a of o)if(a&&a.trim().length)return a.trim()}let i=r.innerHTML.match(/https:\/\/[^"'\s]+/);return i?i[0]:null}function rT(r){var t,i;let e=(i=(t=r.dataset.poster)!=null?t:r.getAttribute("data-poster"))!=null?i:r.getAttribute("poster");return e&&e.trim().length?e.trim():null}function Zd(r){let e=Object.entries(r).filter(t=>typeof t[1]=="string");return Object.fromEntries(e)}function sT(r){let e=r.querySelector(".grid-images");e&&(e.setAttribute("data-archive-sphere-hidden","true"),e.style.display="none",lT()||aT(e))}function oT(r){return Array.from(r.querySelectorAll(Tv+", "+Av)).map(i=>{var n,s,o;return(o=(s=(n=i.getAttribute("data-media-id"))!=null?n:i.id)!=null?s:i.getAttribute("src"))!=null?o:i.outerHTML.length.toString()}).join("|")}function aT(r){r.querySelectorAll("img").forEach(i=>{var n;i.dataset.archiveSpherePreserve!=="true"&&(i.dataset.src||(i.dataset.src=(n=i.getAttribute("src"))!=null?n:""),i.removeAttribute("src"),i.removeAttribute("srcset"),i.loading="lazy")}),r.querySelectorAll("video").forEach(i=>{var s,o;if(i.dataset.archiveSpherePreserve==="true")return;!i.dataset.src&&i.getAttribute("src")&&(i.dataset.src=(s=i.getAttribute("src"))!=null?s:""),!i.dataset.poster&&i.getAttribute("poster")&&(i.dataset.poster=(o=i.getAttribute("poster"))!=null?o:""),i.removeAttribute("src"),i.removeAttribute("poster"),i.querySelectorAll("source").forEach(a=>{var l;a.getAttribute("src")&&(a.setAttribute("data-src",(l=a.getAttribute("src"))!=null?l:""),a.removeAttribute("src"))})})}function lT(){if(typeof document=="undefined")return!1;let r=document.documentElement;return r.classList.contains("w-editor")||r.classList.contains("wf-design-mode")}var Pv=!1;function Lv(){if(Pv)return;Pv=!0;let r=document.createElement("style");r.dataset.archiveSphereStyles="true",r.textContent=`
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

  `,document.head.appendChild(r)}var cT=Math.PI*(3-Math.sqrt(5)),hT=640,uT=.1,dT=6,fT=1.05,pT=1.12,Iv=82,$d=1.18,Dv=.08,Kd=["texturesReady","imagesReady","videosReady","videoMetadataReady","meshesBound"],lh=class{constructor(e={}){this.pointer=new ze;this.loader=new oa;this.mediaBindings=[];this.mediaGroup=new xn;this.clock=new la;this.loaderDisplayRaf=null;this.introTimeline=null;this.focusPixelRatioActive=!1;this.animationFrame=0;this.destroyed=!1;this.mode="idle";this.featured=null;this.rollover=null;this.isDragging=!1;this.pointerDownTime=0;this.pointerDownCoords={x:0,y:0};this.dragStartedOnMedia=!1;this.focusState=null;this.loaderHideTimer=null;this.loaderSession=0;this.loaderPaddingTarget=null;this.inactivityDelay=3500;this.inactivityTimer=null;this.screensaverState={active:!1,direction:1,currentSpeed:0,targetSpeed:0,baseSpeed:.09,rampDuration:2,elapsed:0};this.screensaverOrientationTween=null;var h;Lv();let t=this.resolveContainer(e.container),i=t.querySelector("[data-archive-sphere]");this.root=i!=null?i:document.createElement("div"),this.root.dataset.archiveSphere="true",this.root.classList.add("archive-sphere"),i||t.appendChild(this.root),this.setLoadingState(!0),this.loaderStats={totalItems:0,texturesTotal:0,texturesReady:0,imagesTotal:0,imagesReady:0,videosTotal:0,videosReady:0,videoMetadataReady:0,meshesBound:0,webglReady:!1,controlsReady:!1,introComplete:!1,status:"Initializing..."},this.loaderDisplay={texturesReady:0,imagesReady:0,videosReady:0,videoMetadataReady:0,meshesBound:0};let{overlay:n,inner:s,barFill:o,counter:a,status:l}=this.createLoaderOverlay();this.loaderOverlay=n,this.loaderInner=s,this.loaderBarFill=o,this.loaderCounter=a,this.loaderStatusText=l,this.sourceItems=e.items&&e.items.length?this.cloneSourceItems(e.items):null,this.radius=(h=e.radius)!=null?h:hT,this.scene=new ea,this.scene.background=null,this.camera=new Gt(40,1,1,6e3),this.camera.position.set(0,0,this.radius*2),this.defaultCameraPosition=this.camera.position.clone(),this.defaultCameraTarget=new G(0,0,0),this.defaultCameraUp=this.camera.up.clone(),this.focusCameraDistance=Math.max(this.radius*fT,this.radius*1.4);let c=new aa(new $e("#ffffff"),1.2);this.scene.add(c),this.scene.add(this.mediaGroup),this.renderer=new th({antialias:!0,alpha:!0,premultipliedAlpha:!0}),this.applyIdleRendererPixelRatio(),this.renderer.setClearColor(new $e("transparent"),0),this.renderer.outputColorSpace=Nt,this.renderer.domElement.classList.add("archive-sphere__renderer"),this.renderer.domElement.style.position="absolute",this.root.appendChild(this.renderer.domElement),this.root.appendChild(this.loaderOverlay),this.loaderPaddingTarget=this.resolveLoaderPaddingTarget(),this.updateLoaderPadding(),this.loaderStats.webglReady=!0,this.renderLoaderText(),this.refreshLoaderStatus(),this.controls=new ah(this.camera,this.renderer.domElement),this.controls.rotateSpeed=1.05,this.controls.zoomSpeed=1.2,this.controls.panSpeed=.4,this.controls.noPan=!0,this.controls.noRotate=!1,this.controls.noZoom=!1,this.controls.staticMoving=!1,this.controls.dynamicDampingFactor=Dv,this.controls.minDistance=Math.max(this.radius*uT,80),this.controls.maxDistance=this.radius*dT,this.controls.target.copy(this.defaultCameraTarget),this.controls.handleResize(),this.controls.update(),this.clock.start(),this.loaderStats.controlsReady=!0,this.refreshLoaderStatus(),this.recalcDefaultCameraPose(),this.focusCameraDistance=Math.max(this.focusCameraDistance,this.controls.minDistance*1.6),this.raycaster=new ca,this.handlePointerMove=this.onPointerMove.bind(this),this.handlePointerDown=this.onPointerDown.bind(this),this.handlePointerUp=this.onPointerUp.bind(this),this.handleResize=this.onResize.bind(this),this.handleKeydown=this.onKeydown.bind(this),this.handleControlsStart=()=>this.handleUserInteraction(),this.handleControlsChange=()=>this.handleUserInteraction(),this.handleControlsEnd=()=>this.handleUserInteraction(),this.installEvents(),this.onResize()}get viewportWidth(){return this.renderer.domElement.clientWidth||window.innerWidth||1920}get viewportHeight(){return this.renderer.domElement.clientHeight||window.innerHeight||1080}computeFullSphereDistance(e=1.06){let t=this.viewportWidth,i=this.viewportHeight,n=Math.max(1e-4,t/Math.max(1,i)),s=this.camera.fov*Math.PI/180,o=2*Math.atan(Math.tan(s/2)*n),a=this.radius/Math.tan(s/2),l=this.radius/Math.tan(o/2);return Math.max(a,l)*e}computeIdleDistance(){let e=this.computeFullSphereDistance(1.06);if(this.viewportWidth<=900)return Math.max(e*.9,this.controls.minDistance*1.35);let i=this.camera.fov*Math.PI/180,n=this.radius/Math.tan(i/2)*pT;return Math.max(n,this.controls.minDistance*1.6)}applyResponsiveControls(){let t=this.viewportWidth<=900,i=t?.62:1.05,n=t?.9:1.2,s=t?.12:Dv,o=this.camera.position.distanceTo(this.controls.target),a=Math.min(1,Math.max(.45,o/(this.radius*1.25)));this.controls.rotateSpeed=i*a,this.controls.zoomSpeed=n*Math.max(.6,a),this.controls.dynamicDampingFactor=s}recalcDefaultCameraPose(){let e=this.computeIdleDistance(),t=new G(0,0,e);this.defaultCameraPosition.copy(t),this.defaultCameraTarget.set(0,0,0),this.defaultCameraUp.set(0,1,0),this.mode==="idle"&&(this.camera.position.copy(this.defaultCameraPosition),this.controls.target.copy(this.defaultCameraTarget),this.camera.up.copy(this.defaultCameraUp),this.camera.updateProjectionMatrix(),this.controls.update());let i=this.controls.minDistance*1.6,n=this.controls.maxDistance*.7;this.focusCameraDistance=Math.min(Math.max(e*.9,i),n),this.applyResponsiveControls()}computeIdlePixelRatio(){if(typeof window=="undefined")return 1;let e=Number.isFinite(window.devicePixelRatio)?window.devicePixelRatio:1;return Math.min(Math.max(1,e),1.8)}computeFocusPixelRatio(){if(typeof window=="undefined")return 1;let e=Number.isFinite(window.devicePixelRatio)?window.devicePixelRatio:1,t=Math.max(1,e);return Math.min(t,1.8)}applyIdleRendererPixelRatio(){let{renderer:e}=this;if(!e)return;let t=this.computeIdlePixelRatio();Math.abs(e.getPixelRatio()-t)>.001&&e.setPixelRatio(t),this.focusPixelRatioActive=!1}applyFocusRendererPixelRatio(){let{renderer:e}=this;if(!e)return;let t=this.computeFocusPixelRatio();Math.abs(e.getPixelRatio()-t)>.001&&e.setPixelRatio(t),this.focusPixelRatioActive=!0}animateCameraUpTo(e,t,i=.9){var l;let n=e.clone().normalize();(!Number.isFinite(n.lengthSq())||n.lengthSq()<1e-6)&&n.set(0,1,0);let s=this.camera.up.clone().normalize(),o=s.dot(n);if((l=t.upTween)==null||l.kill(),!Number.isFinite(o)||o>.999){this.camera.up.copy(n),this.camera.updateProjectionMatrix(),t.upTween=null;return}let a={t:0};t.upTween=j.to(a,{t:1,duration:i,ease:"power3.inOut",onUpdate:()=>{this.camera.up.copy(s).lerp(n,a.t).normalize(),this.camera.updateProjectionMatrix(),this.controls.update()},onComplete:()=>{this.camera.up.copy(n),this.camera.updateProjectionMatrix()}})}async initialize(){let e=this.resolveMediaSources();e.length&&(await this.populateMedia(e),this.prepareIntroState(),this.animate(),this.playIntroAnimation())}refresh(){if(this.destroyed)return;let e=this.resolveMediaSources();e.length&&(this.releaseFocus(!0),this.disposeMedia(),this.populateMedia(e).then(()=>{this.prepareIntroState(),this.playIntroAnimation()}))}destroy(){var e,t;this.destroyed||(this.destroyed=!0,cancelAnimationFrame(this.animationFrame),this.controls.dispose(),this.releaseFocus(!0),this.disposeMedia(),(e=this.introTimeline)==null||e.kill(),this.introTimeline=null,(t=this.screensaverOrientationTween)==null||t.kill(),this.screensaverOrientationTween=null,this.loaderHideTimer!==null&&(window.clearTimeout(this.loaderHideTimer),this.loaderHideTimer=null),this.loaderDisplayRaf!==null&&(cancelAnimationFrame(this.loaderDisplayRaf),this.loaderDisplayRaf=null),this.inactivityTimer!==null&&(window.clearTimeout(this.inactivityTimer),this.inactivityTimer=null),this.screensaverState.active=!1,this.screensaverState.currentSpeed=0,this.screensaverState.targetSpeed=0,this.screensaverState.rampDuration=0,this.screensaverState.elapsed=0,this.renderer.dispose(),this.root.remove(),this.removeEvents())}resolveContainer(e){if(e instanceof HTMLElement)return e;if(e&&"querySelector"in e){let n=e.querySelector("[data-archive-sphere-root]");if(n)return n}let t=document.querySelector("[data-archive-sphere-root]");if(t)return t;let i=document.querySelector('[data-barba-namespace="archive"]');return i||document.body}installEvents(){this.renderer.domElement.addEventListener("pointermove",this.handlePointerMove),this.renderer.domElement.addEventListener("pointerdown",this.handlePointerDown),window.addEventListener("pointerup",this.handlePointerUp),window.addEventListener("resize",this.handleResize),window.addEventListener("keydown",this.handleKeydown),this.controls.addEventListener("start",this.handleControlsStart),this.controls.addEventListener("change",this.handleControlsChange),this.controls.addEventListener("end",this.handleControlsEnd)}removeEvents(){this.renderer.domElement.removeEventListener("pointermove",this.handlePointerMove),this.renderer.domElement.removeEventListener("pointerdown",this.handlePointerDown),window.removeEventListener("pointerup",this.handlePointerUp),window.removeEventListener("resize",this.handleResize),window.removeEventListener("keydown",this.handleKeydown),this.controls.removeEventListener("start",this.handleControlsStart),this.controls.removeEventListener("change",this.handleControlsChange),this.controls.removeEventListener("end",this.handleControlsEnd)}handleUserInteraction(){this.destroyed||(this.requestScreensaverStop(),this.clearInactivityTimer(),this.scheduleInactivityTimer())}handlePassiveInteraction(){this.destroyed||(this.clearInactivityTimer(),this.scheduleInactivityTimer())}clearInactivityTimer(){this.inactivityTimer!==null&&typeof window!="undefined"&&(window.clearTimeout(this.inactivityTimer),this.inactivityTimer=null)}scheduleInactivityTimer(){this.destroyed||typeof window=="undefined"||this.loaderStats.introComplete&&(this.clearInactivityTimer(),this.inactivityTimer=window.setTimeout(()=>{this.inactivityTimer=null,this.activateScreensaver()},this.inactivityDelay))}activateScreensaver(){if(this.destroyed)return;if(this.mode!=="idle"||!this.mediaBindings.length){this.scheduleInactivityTimer();return}let e=this.screensaverState;e.active=!0,e.direction=1,e.rampDuration=1.1+Math.random()*.7,e.elapsed=e.rampDuration*.12;let t=.7+Math.random()*.6;e.targetSpeed=e.baseSpeed*t*e.direction,e.currentSpeed=e.targetSpeed*.1,this.gentlyRealignOrientation()}deactivateScreensaver(){var t;let e=this.screensaverState;e.active=!1,e.targetSpeed=0,e.rampDuration=0,e.elapsed=0,e.currentSpeed=0,(t=this.screensaverOrientationTween)==null||t.kill(),this.screensaverOrientationTween=null,this.mediaGroup.rotation.x=0,this.mediaGroup.rotation.z=0,this.renderFrame()}requestScreensaverStop(){let e=this.screensaverState;!e.active&&Math.abs(e.currentSpeed)<=1e-4||(e.active=!1,e.targetSpeed=0,e.rampDuration=Math.max(e.rampDuration,.45),e.elapsed=e.rampDuration)}updateScreensaver(e){if(this.destroyed)return;let t=this.screensaverState;if(this.mode!=="idle"&&(t.active||Math.abs(t.currentSpeed)>1e-4)&&this.requestScreensaverStop(),!t.active&&Math.abs(t.currentSpeed)<=1e-4){t.currentSpeed=0;return}let i=t.targetSpeed;if(t.active){t.elapsed+=e;let s=Math.max(1e-4,t.rampDuration),o=Math.min(1,t.elapsed/s),a=o*o*(3-2*o);i=t.targetSpeed*a}if(t.active)t.currentSpeed=i;else{let s=Math.min(1,e*12);t.currentSpeed+=(i-t.currentSpeed)*s}let n=t.currentSpeed;if(Math.abs(n)<=1e-4){t.active||(t.currentSpeed=0);return}this.mediaGroup.rotation.y+=n*e}normalizeAngle(e){let t=Math.PI*2,i=e%t;return i>Math.PI?i-=t:i<-Math.PI&&(i+=t),i}gentlyRealignOrientation(){var n;(n=this.screensaverOrientationTween)==null||n.kill();let e=this.normalizeAngle(this.mediaGroup.rotation.x),t=this.normalizeAngle(this.mediaGroup.rotation.z);this.mediaGroup.rotation.x=e,this.mediaGroup.rotation.z=t;let i=8e-4;if(Math.abs(e)<=i&&Math.abs(t)<=i){this.screensaverOrientationTween=null;return}this.screensaverOrientationTween=j.to(this.mediaGroup.rotation,{x:0,z:0,duration:2.2,ease:"power3.out",overwrite:"auto",onUpdate:()=>{this.controls.update(),this.renderFrame()},onComplete:()=>{this.screensaverOrientationTween=null},onInterrupt:()=>{this.screensaverOrientationTween=null}})}async populateMedia(e){this.prepareLoaderForSources(e);let t=this.loaderSession,i=this.shuffleItems(e),n=i.length;this.mediaGroup.position.set(0,0,0),this.mediaGroup.scale.set(1,1,1),this.mediaGroup.rotation.set(0,0,0);for(let s=0;s<i.length;s+=1){let o=i[s],{material:a,texture:l,videoElement:c,intrinsicAspect:h,intrinsicAspectPromise:u}=await this.createMaterial(o),d=new Nr(1,1),f=new li(d,a),_=this.normalizeAspect(Number.isFinite(o.aspectRatio)&&o.aspectRatio?o.aspectRatio:h!=null?h:1),g=Iv,m=g*_;f.scale.set(g,m,1);let p=this.computePosition(s,n,this.radius);f.position.copy(p),this.orientMeshOutwards(f),this.mediaGroup.add(f);let S={item:o,mesh:f,material:a,texture:l,videoElement:c,baseScale:{x:g,y:m},hoverTween:null,opacityTween:null,opacityTarget:a.opacity};if(this.mediaBindings.push(S),this.trackMediaBinding(o,t,o.type==="video"?u:void 0),!Number.isFinite(o.aspectRatio)||!o.aspectRatio){let x=b=>{this.destroyed||b===void 0||b===null||!this.mediaBindings.includes(S)||this.updateBindingAspect(S,b)};h&&Math.abs(h-_)>.001&&x(h),u==null||u.then(b=>{x(b)}).catch(()=>{})}}i.length&&(this.mediaGroup.rotation.y=Math.random()*Math.PI*2,this.mediaGroup.rotation.x=(Math.random()-.5)*.35)}disposeMedia(){this.mediaBindings.forEach(e=>{e.mesh.geometry.dispose(),e.material.dispose(),e.texture.dispose(),e.videoElement&&(e.videoElement.pause(),e.videoElement.removeAttribute("src"),e.videoElement.load())}),this.mediaGroup.clear(),this.mediaBindings.length=0}resolveMediaSources(){var e;return this.sourceItems?this.cloneSourceItems(this.sourceItems):Cv((e=this.root.parentElement)!=null?e:document)}cloneSourceItems(e){return e.map(t=>({...t,metadata:t.metadata?{...t.metadata}:void 0}))}shuffleItems(e){let t=e.slice();for(let i=t.length-1;i>0;i-=1){let n=Math.floor(Math.random()*(i+1)),s=t[i];t[i]=t[n],t[n]=s}return t}computePosition(e,t,i){if(t<=1)return new G(0,0,i);let n=1-e/(t-1)*2,s=Math.sqrt(Math.max(0,1-n*n)),o=cT*e,a=Math.cos(o)*s,l=Math.sin(o)*s;return new G(a,n,l).multiplyScalar(i)}orientMeshOutwards(e){let t=e.position.clone().normalize();e.lookAt(t.clone().multiplyScalar(this.radius*2))}createLoaderOverlay(){let e=document.createElement("div");e.className="archive-sphere__loader";let t=document.createElement("div");t.className="archive-sphere__loader-inner";let i=document.createElement("div");i.className="archive-sphere__loader-bar";let n=document.createElement("div");n.className="archive-sphere__loader-bar-fill",i.appendChild(n);let s=document.createElement("div");s.className="archive-sphere__loader-meta text-size-small";let o=document.createElement("span");o.className="archive-sphere__loader-status text-size-small",o.textContent="Loading media...";let a=document.createElement("span");return a.className="archive-sphere__loader-counter text-size-small",a.textContent="0/0",s.appendChild(o),s.appendChild(a),t.appendChild(i),t.appendChild(s),e.appendChild(t),{overlay:e,inner:t,barFill:n,counter:a,status:o}}renderLoaderText(){let e=this.loaderStats,t=this.loaderDisplay,i=e.texturesTotal>0?e.texturesTotal:Math.max(e.totalItems,e.texturesTotal),n=i>0?Math.min(t.texturesReady,i):0,s=0;i>0?s=n/Math.max(1,i):e.introComplete&&(s=1),s=Math.min(1,Math.max(0,s)),this.loaderBarFill.style.width=`${Math.round(s*100)}%`,this.loaderCounter.textContent=this.formatLoaderCount(n,i),this.loaderStatusText.textContent=e.status}resolveLoaderPaddingTarget(){var n;let e=this.root.closest('[data-barba-namespace="archive"]'),i=((n=e!=null?e:this.root.parentElement)!=null?n:document.body).querySelector(".padding-global");return i!=null?i:null}updateLoaderPadding(){this.loaderPaddingTarget=null,this.loaderInner.style.paddingLeft="0px",this.loaderInner.style.paddingRight="0px"}setLoadingState(e){e?this.root.classList.add("is-loading"):this.root.classList.remove("is-loading")}hasDisplayLag(){return Kd.some(e=>this.loaderDisplay[e]!==this.loaderStats[e])}scheduleLoaderRender(){this.loaderDisplayRaf!==null||this.destroyed||(this.loaderDisplayRaf=requestAnimationFrame(()=>this.advanceLoaderDisplay()))}fadeOutLoaderImmediately(){!this.loaderOverlay||this.destroyed||this.loaderOverlay.classList.contains("is-hidden")||this.setLoaderVisible(!1,0)}advanceLoaderDisplay(){if(this.destroyed){this.loaderDisplayRaf=null;return}this.loaderDisplayRaf=null;let e=this.stepLoaderDisplay();this.renderLoaderText(),this.maybeHideLoader(),e&&this.scheduleLoaderRender()}stepLoaderDisplay(){let e=!1;for(let t of Kd){let i=this.loaderStats[t],n=this.loaderDisplay[t];if(n===i)continue;e=!0;let s=i-n,o=Math.abs(s),a=Math.ceil(o*.18),l=o>10?Math.min(o,Math.max(1,Math.floor(Math.random()*Math.min(6,o)))):0,c=Math.max(1,a+l),h=s>0?1:-1,u=n+h*c;h>0&&u>i||h<0&&u<i?this.loaderDisplay[t]=i:this.loaderDisplay[t]=u}return e}prepareLoaderForSources(e){this.loaderHideTimer!==null&&(window.clearTimeout(this.loaderHideTimer),this.loaderHideTimer=null),this.loaderSession+=1,this.loaderPaddingTarget=this.resolveLoaderPaddingTarget(),this.updateLoaderPadding(),this.setLoadingState(!0);let t=e.filter(n=>n.type==="image").length,i=e.filter(n=>n.type==="video").length;this.loaderStats={...this.loaderStats,totalItems:e.length,texturesTotal:e.length,texturesReady:0,imagesTotal:t,imagesReady:0,videosTotal:i,videosReady:0,videoMetadataReady:0,meshesBound:0,introComplete:!1},Kd.forEach(n=>{this.loaderDisplay[n]=0}),this.setLoaderVisible(!0),this.renderLoaderText(),this.refreshLoaderStatus()}setLoaderVisible(e,t=0){if(!this.loaderOverlay||this.destroyed)return;if(e){this.loaderHideTimer!==null&&(window.clearTimeout(this.loaderHideTimer),this.loaderHideTimer=null),this.loaderOverlay.classList.remove("is-hidden");return}let i=()=>{this.loaderOverlay.classList.add("is-hidden"),this.loaderHideTimer=null};this.loaderHideTimer!==null&&(window.clearTimeout(this.loaderHideTimer),this.loaderHideTimer=null),t>0?this.loaderHideTimer=window.setTimeout(i,t):i()}trackMediaBinding(e,t,i){if(!(t!==this.loaderSession||this.destroyed)){if(this.loaderStats.meshesBound=Math.min(this.loaderStats.meshesBound+1,this.loaderStats.totalItems),this.loaderStats.texturesReady=Math.min(this.loaderStats.texturesReady+1,this.loaderStats.texturesTotal),e.type==="image")this.loaderStats.imagesReady=Math.min(this.loaderStats.imagesReady+1,this.loaderStats.imagesTotal);else{this.loaderStats.videosReady=Math.min(this.loaderStats.videosReady+1,this.loaderStats.videosTotal);let n=()=>{t!==this.loaderSession||this.destroyed||this.markVideoMetadataReady(t)};i==null||i.then(n).catch(n)}this.refreshLoaderStatus()}}markVideoMetadataReady(e){e!==this.loaderSession||this.destroyed||this.loaderStats.videosTotal<=0||this.loaderStats.videoMetadataReady>=this.loaderStats.videosTotal||(this.loaderStats.videoMetadataReady=Math.min(this.loaderStats.videoMetadataReady+1,this.loaderStats.videosTotal),this.refreshLoaderStatus(),this.maybeHideLoader())}formatLoaderCount(e,t){return t<=0?"0/0":`${Math.min(t,Math.max(0,Math.round(e)))}/${t}`}refreshLoaderStatus(){let e=this.loaderStats;e.status="Loading media...",this.renderLoaderText(),this.hasDisplayLag()&&this.scheduleLoaderRender()}completeLoaderSequence(e){e!==this.loaderSession||this.destroyed||this.loaderStats.introComplete||(this.loaderStats.introComplete=!0,this.setLoadingState(!1),this.refreshLoaderStatus(),this.maybeHideLoader(),this.handleUserInteraction())}maybeHideLoader(){this.destroyed||this.loaderStats.introComplete&&(this.loaderStats.texturesTotal>0&&this.loaderStats.texturesReady<this.loaderStats.texturesTotal||this.loaderStats.videosTotal>0&&this.loaderStats.videoMetadataReady<this.loaderStats.videosTotal||this.hasDisplayLag()||this.loaderOverlay.classList.contains("is-hidden")||this.setLoaderVisible(!1,900))}normalizeAspect(e){return!Number.isFinite(e)||!e?1:Math.min(Math.max(e,.05),20)}updateBindingAspect(e,t){var u,d,f,_;let i=this.normalizeAspect(t),n=e.baseScale.x||Iv,s=n*i;e.baseScale.x=n,e.baseScale.y=s;let o=this.featured===e&&((u=this.focusState)==null?void 0:u.binding)===e,l=this.rollover===e&&!o?$d:1,c=n*l,h=s*l;if(o&&this.focusState){let g=this.getFocusPose(e);(d=this.focusState.scaleTween)==null||d.kill(),this.focusState.scaleTween=j.to(e.mesh.scale,{x:g.scaledW,y:g.scaledH,duration:.45,ease:"power3.out",overwrite:"auto"});let m=this.mode!=="focused";(f=this.focusState.cameraTween)==null||f.kill(),this.focusState.cameraTween=j.to(this.camera.position,{x:g.camPos.x,y:g.camPos.y,z:g.camPos.z,duration:.6,ease:"power3.inOut",overwrite:"auto",onUpdate:()=>{this.controls.update()},onComplete:()=>{m&&(this.mode="focused",this.updateVideoPlayback(),e.videoElement&&e.videoElement.play().catch(()=>{}))}}),(_=this.focusState.targetTween)==null||_.kill(),this.focusState.targetTween=j.to(this.controls.target,{x:g.target.x,y:g.target.y,z:g.target.z,duration:.6,ease:"power3.inOut",overwrite:"auto",onUpdate:()=>{this.controls.update()}});return}j.to(e.mesh.scale,{x:c,y:h,duration:.25,ease:"power2.out",overwrite:"auto"})}async createMaterial(e){var a,l,c,h;if(e.type==="video"){let u=document.createElement("video");u.preload="metadata",u.loop=!0,u.muted=!0,u.autoplay=!0,u.playsInline=!0,u.crossOrigin="anonymous",u.setAttribute("playsinline","true"),u.setAttribute("muted","true"),u.src=e.src;let d=()=>{u.play().catch(()=>{})};u.addEventListener("loadeddata",d,{once:!0}),d();let f=()=>{},_=!1,g=null,m=T=>{_||(_=!0,f(T))},p=new Promise(T=>{f=T}),S=()=>{let T=u.videoWidth,C=u.videoHeight;T>0&&C>0?m(C/T):m(null)};if(u.readyState>=HTMLMediaElement.HAVE_METADATA&&u.videoWidth>0&&u.videoHeight>0){let T=u.videoWidth,C=u.videoHeight;g=T>0&&C>0?C/T:null,m(g)}else u.addEventListener("loadedmetadata",S,{once:!0}),u.addEventListener("error",()=>{m(null)},{once:!0});let x=new ia(u);x.minFilter=Ut,x.magFilter=Ut,x.colorSpace=Nt,x.generateMipmaps=!1,x.premultiplyAlpha=!0,x.needsUpdate=!0;let b=new $n({map:x,transparent:!0,depthWrite:!1,side:xi,alphaTest:.001});return b.premultipliedAlpha=!0,{material:b,texture:x,videoElement:u,intrinsicAspect:g,intrinsicAspectPromise:p}}let t=await this.loader.loadAsync(e.src);t.colorSpace=Nt,t.generateMipmaps=!0,t.minFilter=Qi,t.magFilter=Ut,t.premultiplyAlpha=!0,t.needsUpdate=!0;let i=this.renderer.capabilities.getMaxAnisotropy();i>1&&(t.anisotropy=Math.min(i,4));let n=null,s=t.image;if(s){let u=(l=(a=s.naturalWidth)!=null?a:s.width)!=null?l:0,d=(h=(c=s.naturalHeight)!=null?c:s.height)!=null?h:0;u>0&&d>0&&(n=d/u)}let o=new $n({map:t,transparent:!0,depthWrite:!1,side:xi,alphaTest:.001});return o.premultipliedAlpha=!0,{material:o,texture:t,intrinsicAspect:n}}onPointerMove(e){if(this.isDragging){this.handleUserInteraction();return}this.handlePassiveInteraction();let t=this.renderer.domElement.getBoundingClientRect();this.pointer.x=(e.clientX-t.left)/t.width*2-1,this.pointer.y=-((e.clientY-t.top)/t.height)*2+1,this.updateHover()}onPointerDown(e){if(this.handleUserInteraction(),e.button!==0)return;let t=this.renderer.domElement.getBoundingClientRect();this.pointer.x=(e.clientX-t.left)/t.width*2-1,this.pointer.y=-((e.clientY-t.top)/t.height)*2+1,this.isDragging=!0,this.pointerDownTime=performance.now(),this.pointerDownCoords={x:e.clientX,y:e.clientY},this.dragStartedOnMedia=!!this.pickBindingAtPointer()}onPointerUp(e){if(this.handleUserInteraction(),!this.isDragging)return;this.isDragging=!1;let t=performance.now()-this.pointerDownTime,i=Math.hypot(e.clientX-this.pointerDownCoords.x,e.clientY-this.pointerDownCoords.y),n=i<12&&t<250,s=!n&&i>=4;if(this.dragStartedOnMedia&&s&&this.renderer.domElement.classList.remove("is-hovering"),this.dragStartedOnMedia=!1,!n)return;let o=this.renderer.domElement.getBoundingClientRect();this.pointer.x=(e.clientX-o.left)/o.width*2-1,this.pointer.y=-((e.clientY-o.top)/o.height)*2+1,this.handleClick()}onResize(){this.handleUserInteraction();let e=this.viewportWidth,t=this.viewportHeight;this.camera.aspect=Math.max(1e-4,e/Math.max(1,t)),this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t,!1),this.focusPixelRatioActive?this.applyFocusRendererPixelRatio():this.applyIdleRendererPixelRatio(),this.controls.handleResize(),this.recalcDefaultCameraPose(),this.updateLoaderPadding(),this.renderFrame()}onKeydown(e){if(this.handleUserInteraction(),e.key==="Escape"){this.releaseFocus();return}if(!this.featured||this.mode!=="focused"||!["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(e.key))return;let i=this.mediaBindings.filter(o=>o!==this.featured);if(!i.length)return;e.preventDefault();let n=Math.floor(Math.random()*i.length),s=i[n];this.focusBinding(s)}updateHover(){var i,n;if(this.mode==="transitioning"){this.clearRollover(),this.renderer.domElement.classList.remove("is-hovering");return}let e=this.pickBindingAtPointer(),t=!!(e&&e!==this.featured);this.renderer.domElement.classList.toggle("is-hovering",t),e!==this.rollover&&(this.rollover&&this.rollover!==this.featured&&((i=this.rollover.hoverTween)==null||i.kill(),j.to(this.rollover.mesh.scale,{x:this.rollover.baseScale.x,y:this.rollover.baseScale.y,duration:.22,ease:"power2.out"})),this.rollover=e||null,this.rollover&&this.rollover!==this.featured&&((n=this.rollover.hoverTween)==null||n.kill(),this.rollover.hoverTween=j.to(this.rollover.mesh.scale,{x:this.rollover.baseScale.x*$d,y:this.rollover.baseScale.y*$d,duration:.28,ease:"power2.out"})),this.setMediaOpacity(this.featured,this.rollover))}clearRollover(e){var t;this.rollover&&(e&&this.rollover===e||((t=this.rollover.hoverTween)==null||t.kill(),this.rollover.mesh.scale.set(this.rollover.baseScale.x,this.rollover.baseScale.y,1),this.rollover=null,this.renderer.domElement.classList.remove("is-hovering")))}handleClick(){this.handleUserInteraction();let e=this.pickBindingAtPointer();if(e){if(this.featured&&e===this.featured)return;this.focusBinding(e);return}(this.mode==="focused"||this.mode==="transitioning")&&this.releaseFocus()}pickBindingAtPointer(){var i;this.raycaster.setFromCamera(this.pointer,this.camera);let e=this.raycaster.intersectObjects(this.mediaGroup.children,!1);if(!e.length)return null;let t=e[0].object;return(i=this.mediaBindings.find(n=>n.mesh===t))!=null?i:null}getFocusPose(e){let i=this.renderer.domElement.clientWidth||window.innerWidth||1920,n=this.renderer.domElement.clientHeight||window.innerHeight||1080,s=i/n,o=e.baseScale.x*1.85,a=e.baseScale.y*1.85,l=this.camera.fov*Math.PI/180,c=2*Math.atan(Math.tan(l/2)*s),h=a/.86/(2*Math.tan(l/2)),u=o/.86/(2*Math.tan(c/2)),d=Math.max(h,u);this.mediaGroup.updateMatrixWorld(!0);let f=e.mesh.getWorldPosition(new G),_=f.clone().normalize(),g=this.controls.minDistance*1.2,m=this.controls.maxDistance*.7,p=Math.min(Math.max(d,g),m),S=f.clone().add(_.multiplyScalar(p)),x=f,b=e.mesh.getWorldQuaternion(new vi),T=new G(0,1,0).applyQuaternion(b).normalize();return(!Number.isFinite(T.lengthSq())||Math.abs(T.dot(_))>.985)&&T.set(0,1,0),{camPos:S,target:x,up:T,scaledW:o,scaledH:a}}setMediaOpacity(e,t,i=.25){let n=!!e;this.mediaBindings.forEach(s=>{var c,h;let o=!!(e&&s===e),l=o||!!(t&&s===t&&!o)?1:n?.5:1;if(s.material.transparent=!0,i<=0){(c=s.opacityTween)==null||c.kill(),s.opacityTween=null,s.material.opacity=l,s.opacityTarget=l;return}s.opacityTarget!==void 0&&Math.abs(s.opacityTarget-l)<.001||(s.opacityTarget=l,(h=s.opacityTween)==null||h.kill(),s.opacityTween=j.to(s.material,{opacity:l,duration:i,ease:"power2.out",overwrite:"auto",onComplete:()=>{s.opacityTween=null,s.opacityTarget=l}}))})}updateVideoPlayback(){}focusBinding(e){var n,s,o,a,l;if(this.handleUserInteraction(),this.mode==="transitioning")return;this.clearRollover(e),this.renderer.domElement.classList.remove("is-hovering"),(n=e.hoverTween)==null||n.kill(),this.mode="transitioning",this.applyFocusRendererPixelRatio(),this.root.classList.add("archive-sphere--focused"),document.body.classList.add("archive-sphere--focused");let t=this.getFocusPose(e);this.focusState&&((s=this.focusState.cameraTween)==null||s.kill(),(o=this.focusState.targetTween)==null||o.kill(),(a=this.focusState.scaleTween)==null||a.kill(),(l=this.focusState.upTween)==null||l.kill()),this.featured&&this.featured!==e&&j.to(this.featured.mesh.scale,{x:this.featured.baseScale.x,y:this.featured.baseScale.y,duration:.35,ease:"power2.out"}),this.featured=e,this.rollover=null,this.focusState={binding:e};let i=this.focusState;i&&this.animateCameraUpTo(t.up,i,.9),this.setMediaOpacity(this.featured,null,.9),this.focusState.scaleTween=j.to(e.mesh.scale,{x:t.scaledW,y:t.scaledH,duration:.6,ease:"power3.out"}),this.focusState.cameraTween=j.to(this.camera.position,{x:t.camPos.x,y:t.camPos.y,z:t.camPos.z,duration:.9,ease:"power3.inOut",onUpdate:()=>{this.controls.update()},onComplete:()=>{this.mode="focused",this.updateVideoPlayback(),e.videoElement&&e.videoElement.play().catch(()=>{})}}),this.focusState.targetTween=j.to(this.controls.target,{x:t.target.x,y:t.target.y,z:t.target.z,duration:.9,ease:"power3.inOut",onUpdate:()=>{this.controls.update()}})}releaseFocus(e=!1){var s,o,a,l,c,h,u;if(this.handleUserInteraction(),this.mode==="idle"){this.applyIdleRendererPixelRatio(),this.root.classList.remove("archive-sphere--focused"),document.body.classList.remove("archive-sphere--focused"),this.renderer.domElement.classList.remove("is-hovering"),this.clearRollover(),this.rollover=null,this.featured=null,this.setMediaOpacity(null,null,0);return}let t=this.focusState;this.focusState=null,this.mode="transitioning",(s=t==null?void 0:t.cameraTween)==null||s.kill(),(o=t==null?void 0:t.targetTween)==null||o.kill(),(a=t==null?void 0:t.scaleTween)==null||a.kill(),(l=t==null?void 0:t.upTween)==null||l.kill();let i=(c=t==null?void 0:t.binding)!=null?c:null;if(this.clearRollover(),this.rollover=null,this.renderer.domElement.classList.remove("is-hovering"),this.featured=null,e){i&&((h=i.hoverTween)==null||h.kill(),i.mesh.scale.set(i.baseScale.x,i.baseScale.y,1)),this.setMediaOpacity(null,null,0),this.camera.position.copy(this.defaultCameraPosition),this.controls.target.copy(this.defaultCameraTarget),this.camera.up.copy(this.defaultCameraUp),this.camera.updateProjectionMatrix(),this.controls.update(),this.mode="idle",this.root.classList.remove("archive-sphere--focused"),document.body.classList.remove("archive-sphere--focused"),this.updateVideoPlayback(),this.applyIdleRendererPixelRatio();return}this.setMediaOpacity(null,null,.9),i&&((u=i.hoverTween)==null||u.kill(),j.to(i.mesh.scale,{x:i.baseScale.x,y:i.baseScale.y,duration:.5,ease:"power2.out"}));let n=()=>{this.mode="idle",this.root.classList.remove("archive-sphere--focused"),document.body.classList.remove("archive-sphere--focused"),this.updateVideoPlayback(),this.applyIdleRendererPixelRatio()};j.to(this.camera.position,{x:this.defaultCameraPosition.x,y:this.defaultCameraPosition.y,z:this.defaultCameraPosition.z,duration:.9,ease:"power3.inOut",onUpdate:()=>{this.controls.update()}}),j.to(this.controls.target,{x:this.defaultCameraTarget.x,y:this.defaultCameraTarget.y,z:this.defaultCameraTarget.z,duration:.9,ease:"power3.inOut",onUpdate:()=>{this.controls.update()},onComplete:n}),this.camera.up.copy(this.defaultCameraUp),this.camera.updateProjectionMatrix()}prepareIntroState(){var e;(e=this.introTimeline)==null||e.kill(),this.introTimeline=null,this.controls.enabled=!1,this.mediaGroup.position.set(0,-this.radius*.32,0),this.mediaGroup.scale.set(.8,.8,.8),this.mediaGroup.rotation.x=.35+(Math.random()-.5)*.25,this.mediaBindings.forEach(t=>{t.material.transparent=!0,t.material.opacity=0}),this.renderFrame()}playIntroAnimation(){var t;(t=this.introTimeline)==null||t.kill();let e=this.loaderSession;if(this.introTimeline=j.timeline({defaults:{ease:"power3.out"},onUpdate:()=>this.renderFrame(),onComplete:()=>{this.mediaGroup.scale.set(1,1,1),this.mediaGroup.position.set(0,0,0),this.mediaGroup.rotation.x=0,this.controls.enabled=!0,this.recalcDefaultCameraPose(),this.controls.update(),this.renderFrame(),this.completeLoaderSequence(e)}}),this.introTimeline.to(this.mediaGroup.position,{y:0,duration:1.6},0),this.introTimeline.to(this.mediaGroup.scale,{x:1,y:1,z:1,duration:1.6},0),this.introTimeline.to(this.mediaGroup.rotation,{x:0,y:this.mediaGroup.rotation.y+Math.PI*.6,duration:2.25,ease:"power2.out"},0),this.mediaBindings.forEach((i,n)=>{var s;i.material.opacity=0,i.material.transparent=!0,(s=this.introTimeline)==null||s.to(i.material,{opacity:1,duration:.9,ease:"power2.out"},.4+n*.02)}),this.mediaBindings.length&&this.introTimeline.call(()=>{this.fadeOutLoaderImmediately()},[],.4),this.mediaBindings.length){let i=.4+(this.mediaBindings.length-1)*.02+.9;this.introTimeline.call(()=>{this.controls.enabled=!0,this.controls.update(),this.renderFrame(),this.completeLoaderSequence(e)},[],i)}else this.fadeOutLoaderImmediately(),this.controls.enabled=!0,this.completeLoaderSequence(e)}animate(){if(this.destroyed)return;this.animationFrame=requestAnimationFrame(()=>this.animate());let e=this.clock.getDelta();this.applyResponsiveControls(),this.controls.update(),this.updateScreensaver(e),this.renderFrame()}renderFrame(){this.destroyed||this.renderer.render(this.scene,this.camera)}};var Qs=null,_a=null;async function Ov(r){return Qs||_a||(_a=(async()=>{try{let e={container:r},t=typeof window!="undefined"?window.innerWidth<=480:!1,i=t&&Ru.length?Ru:Dm,n=t&&Pu.length?Pu:Om,s=[...i,...n];s.length>0&&(e.items=s);let o=new lh(e);return await o.initialize(),o?(Qs=o,o):null}catch{return null}finally{_a=null}})(),_a)}function Fv(){Qs&&(Qs.destroy(),Qs=null)}function Nv(){[".active-link-background",".barba-container",".project-flex",".project-div"].forEach(e=>{let t=document.querySelectorAll(e);t.length>0&&t.forEach(i=>{i.style.willChange="transform, opacity",(e===".barba-container"||e===".project-flex")&&(i.style.transform="translateZ(0)")})})}function ya(){['[data-barba="container"]',".projects-nav",".project-flex"].forEach(e=>{let t=document.querySelectorAll(e);t.length>0&&t.forEach(i=>{let n=i;n.style.willChange="transform, opacity",e==='[data-barba="container"]'&&(n.style.backfaceVisibility="hidden",n.style.transform="translateZ(0)")})})}function eo(){setTimeout(()=>{let r=document.querySelectorAll('[style*="will-change"]:not(.barba-container):not(.project-flex):not(.active-link-background)');r.length>0&&r.forEach(e=>{let t=e;t.style.willChange="auto"}),typeof j!="undefined"&&j.globalTimeline.getChildren().forEach(e=>{e.progress()===1&&e.kill()})},100)}function Uv(){let r=document.querySelectorAll(".project-flex, .project-div");r.length>0&&r.forEach(e=>{e.style.willChange="transform, opacity",e.classList.contains("project-flex")&&(e.style.backfaceVisibility="hidden",e.style.transform="translateZ(0)")})}var Wr=null,ch=!1,ba=0;function Bv(r){ba+=1;let e=ba;ch=!1,Wr=(async()=>{var t;try{window.currentPanoramaSlider&&(window.currentPanoramaSlider.destroy(),window.currentPanoramaSlider=void 0);let i=await Im(r!=null?r:document);return e!==ba?((t=i==null?void 0:i.destroy)==null||t.call(i),null):(i&&(window.currentPanoramaSlider=i),i)}catch{return null}})()}function to(r=1.15,e=0){let t=i=>{Wr=null,!(!i||ch)&&(ch=!0,i.fadeIn(r,e))};Wr?Wr.then(i=>{t(i)}).catch(()=>{Wr=null}):window.currentPanoramaSlider&&t(window.currentPanoramaSlider)}var xa={beforeEnter({next:r}){var l,c,h,u;pl(),ya(),ai(r.container),qi(r.container),Jp(),fs(),Oi(r.container),Bo(r.container,{initialListState:"hidden"});let e=new URL(window.location.href),t=(c=(l=e.searchParams.get("category"))!=null?l:e.searchParams.get("capability"))!=null?c:"",i=t?t.toLowerCase().trim():"all";Lm(i,{animate:!1,updateUrl:!1});let n=r.container.querySelectorAll('.project-div[style*="display: block"]');n.length&&j.set(n,{opacity:0,overwrite:"auto"});let s=Array.from(n).flatMap(d=>Array.from(d.querySelectorAll(".project-image, .project-video, .grid-image, .grid-video, .video-item")));s.length&&j.set(s,{opacity:0,overwrite:"auto"});let o=Array.from(n).flatMap(d=>Array.from(d.querySelectorAll(".description-div")));o.length&&j.set(o,{opacity:0,overwrite:"auto"});let a=(h=r.container.querySelector(".project-list-wrapper"))!=null?h:r.container.querySelector(".project-list");if(a){j.set(a,{autoAlpha:0,pointerEvents:"none"});let d=(u=a.querySelector("[data-filter-empty]"))!=null?u:a.querySelector(".w-dyn-empty");d&&j.set(d,{autoAlpha:0,display:"none",pointerEvents:"none"})}},beforeLeave(){wr(),pl(),window.currentPanoramaSlider&&(window.currentPanoramaSlider.destroy(),window.currentPanoramaSlider=void 0)},afterEnter({next:r}){Oi(r.container),setTimeout(()=>{eo()},1e3);let e=r.container;e.__projectsFiltersInitialized||(e.__projectsFiltersInitialized=!0)}},kv=[{namespace:"info",beforeEnter({next:r}){let e=document.querySelector('[data-page="projects"]');e&&(e.classList.remove("w--current"),e.style.color="var(--text-dark)"),ai(r.container),fs(),Bv(r.container),Oi(r.container)},afterEnter({next:r}){!Wr&&!window.currentPanoramaSlider&&Bv(r.container),Oi(r.container)},beforeLeave(){ba+=1,Wr=null,ch=!1,wr(),window.currentPanoramaSlider&&window.currentPanoramaSlider.fadeOut(.3).then(()=>{window.currentPanoramaSlider&&(window.currentPanoramaSlider.destroy(),window.currentPanoramaSlider=void 0)})}},{namespace:"archive",beforeEnter({next:r}){let e=document.querySelector('[data-page="projects"]');e&&(e.classList.remove("w--current"),e.style.color="var(--text-dark)"),ai(r.container),Oi(r.container)},beforeLeave(){wr(),window.currentPanoramaSlider&&(window.currentPanoramaSlider.destroy(),window.currentPanoramaSlider=void 0)},afterEnter({next:r}){if(Oi(r.container),!document.body.contains(r.container))return;r.container.getAttribute("data-barba-namespace")==="archive"&&requestAnimationFrame(()=>{document.body.contains(r.container)&&Ov(r.container)})}},{namespace:"cases",beforeEnter({next:r}){ya(),ai(r.container),fs(),qi(r.container),Mr(r.container),gs(r.container),Oi(r.container)},afterEnter({next:r}){Oi(r.container),setTimeout(()=>{eo()},1e3)},beforeLeave(){wr(),Ro(!0)}},{namespace:"projects",...xa},{namespace:"digital",...xa},{namespace:"graphic",...xa},{namespace:"direction",...xa},{namespace:"imaging",...xa}];var Hv=Array.from(ul);function hh(r){var e,t;return r?r.namespace?r.namespace:(t=(e=r.container)==null?void 0:e.getAttribute("data-barba-namespace"))!=null?t:null:null}async function mT(r,e){let t=[],i=Fo(r,e);t.push(i),r==="cases"&&Er(Mt.enter,.1),r==="info"&&to(Mt.enter,0),await Promise.all(t)}async function gT(r,e){await Mm(r,e),r==="archive"&&Fv()}var Xr={name:"page-transition",sync:!1,before(r){wu(),gm({current:r.current,next:r.next})},leave(r){var t,i,n;if(!((t=r.current)!=null&&t.container))return Promise.resolve();let e=hh(r.current);return ai((n=(i=r.next)==null?void 0:i.container)!=null?n:void 0),gT(e,r.current.container)},beforeEnter(r){var i;let e=(i=r.next)==null?void 0:i.container;if(!e)return;let t=hh(r.next);Oo(t,e),qi(e),ds(e)},enter(r){var i;let e=(i=r.next)==null?void 0:i.container;if(!e)return Promise.resolve();let t=hh(r.next);return ds(e),mT(t,e)},after(r){var e;if(um(),(e=r.next)!=null&&e.container){ds(r.next.container),ai(r.next.container);let t=hh(r.next);t&&ul.has(t)&&ms(r.next.container,{animateMedia:!1})}}},zv={name:"project-page-transition",from:{namespace:Hv},to:{namespace:Hv},sync:!1,before:Xr.before,leave:Xr.leave,beforeEnter:Xr.beforeEnter,enter:Xr.enter,after:Xr.after};var Vv=`
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
`;var Wv=document.createElement("style");Wv.textContent=Vv;document.head.appendChild(Wv);var nr=null,Gv=!1;function vT(){nr&&j.set(nr,{opacity:0,y:Mt.distance,willChange:"transform, opacity"})}function Xv(){return!nr||Gv?Promise.resolve():(Gv=!0,new Promise(r=>{j.to(nr,{opacity:1,y:0,duration:Mt.enter,ease:Mt.ease,onComplete:()=>{nr==null||nr.style.removeProperty("will-change"),r()}})}))}rn.default.init({debug:!1,sync:!1,preventRunning:!0,transitions:[Xr,zv],views:kv,prefetch:!0});rn.default.hooks.before(r=>{ya()});rn.default.hooks.beforeLeave(({current:r})=>{r!=null&&r.container?Za(r.container):Za()});rn.default.hooks.leave(r=>{if(uh(r.current.namespace)){let e=r.current.container.querySelectorAll(".project-image, .project-video");j.set(e,{opacity:1})}});rn.default.hooks.afterEnter(({next:r})=>{var i,n,s,o,a;let e=(i=r==null?void 0:r.container)!=null?i:document;Nn(e);let t=(o=(s=r==null?void 0:r.namespace)!=null?s:(n=r==null?void 0:r.container)==null?void 0:n.getAttribute("data-barba-namespace"))!=null?o:null;(a=r==null?void 0:r.container)!=null&&a.querySelector(".case-slider")&&t!=="cases"&&(Mr(r.container),Er(Mt.enter,.1)),Ka(e).then(l=>{l.length&&l.forEach(c=>{c.fadeIn(Mt.enter,0)})}).catch(l=>{}),t==="info"&&to(Mt.enter,0)});rn.default.hooks.once(async({next:r})=>{var s,o,a;let e=(s=r==null?void 0:r.container)!=null?s:document.querySelector('[data-barba="container"]'),t=(a=(o=r==null?void 0:r.namespace)!=null?o:e==null?void 0:e.getAttribute("data-barba-namespace"))!=null?a:null;e instanceof HTMLElement?Nn(e):Nn(document);let i=[Xv()],n=e instanceof HTMLElement?e:null;if(n!=null&&n.querySelector(".case-slider")&&t!=="cases"&&(Mr(n),Er(Mt.enter,.1)),Ka(n!=null?n:document).then(l=>{l.length&&l.forEach(c=>{c.fadeIn(Mt.enter,0)})}).catch(l=>{}),n){Oo(t,n);let l=Fo(t,n);i.push(l)}if(t==="info"&&to(Mt.enter,0),t==="cases"&&gs(n!=null?n:document),await Promise.all(i),t&&uh(t)&&n){Bo(n,{initialListState:"visible"});let l=n;l.__projectsFiltersInitialized=!0,ms(n,{animateMedia:!1})}});rn.default.hooks.enter(r=>{let e=document.querySelector(".preload-container");e&&(e.style.display="none")});rn.default.hooks.after(async({next:r})=>{"scrollRestoration"in history&&(history.scrollRestoration="manual");try{r!=null&&r.container&&(_h(),nl(r.container),await new Promise(e=>setTimeout(e,100)),ds(r.container),setTimeout(()=>{eo()},1e3))}catch{}setTimeout(()=>{eo()},1e3),nl(document)});rn.default.hooks.afterLeave(r=>{var e;Qp(),(e=r.current)!=null&&e.container?Co(r.current.container):Co(document),typeof window!="undefined"&&window.scrollTo(0,0)});function uh(r){return r?["projects","digital","graphic","direction","imaging"].includes(r):!1}document.addEventListener("DOMContentLoaded",()=>{nr=document.querySelector(".navbar-container"),nl(document),vT(),Xv(),typeof window!="undefined"&&window.scrollTo(0,0),Eu(),ai(),qi(document),fs(),Nn(document),vm(!1),Uv(),Nv();let r=document.querySelector('[data-barba="container"]'),e=()=>{var c;if(!(r instanceof HTMLElement))return;let n=(c=r.getAttribute("data-barba-namespace"))!=null?c:null,s=r,o=n?uh(n):!1,a=[];if(Oi(r),!o||!s.__projectsEntranceHandled){Oo(n,r);let h=Fo(n,r);a.push(h)}Promise.all(a.length?a:[Promise.resolve()]).then(()=>{o&&!s.__projectsFiltersInitialized&&(Bo(r,{initialListState:"visible"}),s.__projectsFiltersInitialized=!0),o&&!s.__projectsEntranceHandled&&ms(r,{animateMedia:!1}),n==="info"&&to(Mt.enter,0),n==="cases"&&gs(r)}),r.querySelector(".case-slider")&&(Mr(r),Er(Mt.enter,.1))},t=r instanceof HTMLElement?r.getAttribute("data-barba-namespace"):null,i=window.Webflow;if(e(),t&&uh(t)&&i&&typeof i.push=="function"&&i.push(e),!(r instanceof HTMLElement)){let n=document;n.querySelector(".case-slider")&&(Mr(n),Er(Mt.enter,.1)),t==="cases"&&gs(n)}});window.addEventListener("resize",()=>{ai(),al()&&qi(document),window.currentPanoramaSlider&&window.currentPanoramaSlider.update()});window.addEventListener("unload",()=>{nm.cleanup(),window.currentPanoramaSlider&&(window.currentPanoramaSlider.destroy(),window.currentPanoramaSlider=void 0),Ro(!0),Co(document),wr()});})();
