var Kg=Object.create;var bo=Object.defineProperty;var Jg=Object.getOwnPropertyDescriptor;var Qg=Object.getOwnPropertyNames;var ev=Object.getPrototypeOf,tv=Object.prototype.hasOwnProperty;var Qd=r=>{throw TypeError(r)};var iv=(r,e,t)=>e in r?bo(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var Zt=(r,e)=>()=>(r&&(e=r(r=0)),e);var nv=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports),ef=(r,e)=>{for(var t in e)bo(r,t,{get:e[t],enumerable:!0})},rv=(r,e,t,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let n of Qg(e))!tv.call(r,n)&&n!==t&&bo(r,n,{get:()=>e[n],enumerable:!(i=Jg(e,n))||i.enumerable});return r};var sv=(r,e,t)=>(t=r!=null?Kg(ev(r)):{},rv(e||!r||!r.__esModule?bo(t,"default",{value:r,enumerable:!0}):t,r));var Z=(r,e,t)=>iv(r,typeof e!="symbol"?e+"":e,t),oh=(r,e,t)=>e.has(r)||Qd("Cannot "+t);var $t=(r,e,t)=>(oh(r,e,"read from private field"),t?t.call(r):e.get(r)),ln=(r,e,t)=>e.has(r)?Qd("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(r):e.set(r,t),Kt=(r,e,t,i)=>(oh(r,e,"write to private field"),i?i.call(r,t):e.set(r,t),t),ft=(r,e,t)=>(oh(r,e,"access private method"),t);var tf=nv((ch,lh)=>{(function(r,e){typeof ch=="object"&&typeof lh!="undefined"?lh.exports=e():typeof define=="function"&&define.amd?define(e):(r||self).barba=e()})(ch,function(){function r(B,L){for(var E=0;E<L.length;E++){var v=L[E];v.enumerable=v.enumerable||!1,v.configurable=!0,"value"in v&&(v.writable=!0),Object.defineProperty(B,typeof(_=(function(P,U){if(typeof P!="object"||P===null)return P;var k=P[Symbol.toPrimitive];if(k!==void 0){var I=k.call(P,"string");if(typeof I!="object")return I;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(P)})(v.key))=="symbol"?_:String(_),v)}var _}function e(B,L,E){return L&&r(B.prototype,L),E&&r(B,E),Object.defineProperty(B,"prototype",{writable:!1}),B}function t(){return t=Object.assign?Object.assign.bind():function(B){for(var L=1;L<arguments.length;L++){var E=arguments[L];for(var v in E)Object.prototype.hasOwnProperty.call(E,v)&&(B[v]=E[v])}return B},t.apply(this,arguments)}function i(B,L){B.prototype=Object.create(L.prototype),B.prototype.constructor=B,s(B,L)}function n(B){return n=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(L){return L.__proto__||Object.getPrototypeOf(L)},n(B)}function s(B,L){return s=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(E,v){return E.__proto__=v,E},s(B,L)}function a(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function o(B,L,E){return o=a()?Reflect.construct.bind():function(v,_,P){var U=[null];U.push.apply(U,_);var k=new(Function.bind.apply(v,U));return P&&s(k,P.prototype),k},o.apply(null,arguments)}function c(B){var L=typeof Map=="function"?new Map:void 0;return c=function(E){if(E===null||Function.toString.call(E).indexOf("[native code]")===-1)return E;if(typeof E!="function")throw new TypeError("Super expression must either be null or a function");if(L!==void 0){if(L.has(E))return L.get(E);L.set(E,v)}function v(){return o(E,arguments,n(this).constructor)}return v.prototype=Object.create(E.prototype,{constructor:{value:v,enumerable:!1,writable:!0,configurable:!0}}),s(v,E)},c(B)}function l(B){if(B===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return B}var h,u=function(){this.before=void 0,this.beforeLeave=void 0,this.leave=void 0,this.afterLeave=void 0,this.beforeEnter=void 0,this.enter=void 0,this.afterEnter=void 0,this.after=void 0};(function(B){B[B.off=0]="off",B[B.error=1]="error",B[B.warning=2]="warning",B[B.info=3]="info",B[B.debug=4]="debug"})(h||(h={}));var d=h.off,f=(function(){function B(E){this.t=void 0,this.t=E}B.getLevel=function(){return d},B.setLevel=function(E){return d=h[E]};var L=B.prototype;return L.error=function(){this.i(console.error,h.error,[].slice.call(arguments))},L.warn=function(){this.i(console.warn,h.warning,[].slice.call(arguments))},L.info=function(){this.i(console.info,h.info,[].slice.call(arguments))},L.debug=function(){this.i(console.log,h.debug,[].slice.call(arguments))},L.i=function(E,v,_){v<=B.getLevel()&&E.apply(console,["["+this.t+"] "].concat(_))},B})();function x(B){return B.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function g(B){return B&&B.sensitive?"":"i"}var m={container:"container",history:"history",namespace:"namespace",prefix:"data-barba",prevent:"prevent",wrapper:"wrapper"},p=(function(){function B(){this.o=m,this.u=void 0,this.h={after:null,before:null,parent:null}}var L=B.prototype;return L.toString=function(E){return E.outerHTML},L.toDocument=function(E){return this.u||(this.u=new DOMParser),this.u.parseFromString(E,"text/html")},L.toElement=function(E){var v=document.createElement("div");return v.innerHTML=E,v},L.getHtml=function(E){return E===void 0&&(E=document),this.toString(E.documentElement)},L.getWrapper=function(E){return E===void 0&&(E=document),E.querySelector("["+this.o.prefix+'="'+this.o.wrapper+'"]')},L.getContainer=function(E){return E===void 0&&(E=document),E.querySelector("["+this.o.prefix+'="'+this.o.container+'"]')},L.removeContainer=function(E){document.body.contains(E)&&(this.v(E),E.parentNode.removeChild(E))},L.addContainer=function(E,v){var _=this.getContainer()||this.h.before;_?this.l(E,_):this.h.after?this.h.after.parentNode.insertBefore(E,this.h.after):this.h.parent?this.h.parent.appendChild(E):v.appendChild(E)},L.getSibling=function(){return this.h},L.getNamespace=function(E){E===void 0&&(E=document);var v=E.querySelector("["+this.o.prefix+"-"+this.o.namespace+"]");return v?v.getAttribute(this.o.prefix+"-"+this.o.namespace):null},L.getHref=function(E){if(E.tagName&&E.tagName.toLowerCase()==="a"){if(typeof E.href=="string")return E.href;var v=E.getAttribute("href")||E.getAttribute("xlink:href");if(v)return this.resolveUrl(v.baseVal||v)}return null},L.resolveUrl=function(){var E=[].slice.call(arguments).length;if(E===0)throw new Error("resolveUrl requires at least one argument; got none.");var v=document.createElement("base");if(v.href=arguments[0],E===1)return v.href;var _=document.getElementsByTagName("head")[0];_.insertBefore(v,_.firstChild);for(var P,U=document.createElement("a"),k=1;k<E;k++)U.href=arguments[k],v.href=P=U.href;return _.removeChild(v),P},L.l=function(E,v){v.parentNode.insertBefore(E,v.nextSibling)},L.v=function(E){return this.h={after:E.nextElementSibling,before:E.previousElementSibling,parent:E.parentElement},this.h},B})(),S=new p,y=(function(){function B(){this.p=void 0,this.m=[],this.P=-1}var L=B.prototype;return L.init=function(E,v){this.p="barba";var _={data:{},ns:v,scroll:{x:window.scrollX,y:window.scrollY},url:E};this.P=0,this.m.push(_);var P={from:this.p,index:this.P,states:[].concat(this.m)};window.history&&window.history.replaceState(P,"",E)},L.change=function(E,v,_){if(_&&_.state){var P=_.state,U=P.index;v=this.g(this.P-U),this.replace(P.states),this.P=U}else this.add(E,v);return v},L.add=function(E,v,_,P){var U=_!=null?_:this.R(v),k={data:P!=null?P:{},ns:"tmp",scroll:{x:window.scrollX,y:window.scrollY},url:E};switch(U){case"push":this.P=this.size,this.m.push(k);break;case"replace":this.set(this.P,k)}var I={from:this.p,index:this.P,states:[].concat(this.m)};switch(U){case"push":window.history&&window.history.pushState(I,"",E);break;case"replace":window.history&&window.history.replaceState(I,"",E)}},L.store=function(E,v){var _=v||this.P,P=this.get(_);P.data=t({},P.data,E),this.set(_,P);var U={from:this.p,index:this.P,states:[].concat(this.m)};window.history.replaceState(U,"")},L.update=function(E,v){var _=v||this.P,P=t({},this.get(_),E);this.set(_,P)},L.remove=function(E){E?this.m.splice(E,1):this.m.pop(),this.P--},L.clear=function(){this.m=[],this.P=-1},L.replace=function(E){this.m=E},L.get=function(E){return this.m[E]},L.set=function(E,v){return this.m[E]=v},L.R=function(E){var v="push",_=E,P=m.prefix+"-"+m.history;return _.hasAttribute&&_.hasAttribute(P)&&(v=_.getAttribute(P)),v},L.g=function(E){return Math.abs(E)>1?E>0?"forward":"back":E===0?"popstate":E>0?"back":"forward"},e(B,[{key:"current",get:function(){return this.m[this.P]}},{key:"previous",get:function(){return this.P<1?null:this.m[this.P-1]}},{key:"size",get:function(){return this.m.length}}]),B})(),w=new y,A=function(B,L){try{var E=(function(){if(!L.next.html)return Promise.resolve(B).then(function(v){var _=L.next;if(v){var P=S.toElement(v.html);_.namespace=S.getNamespace(P),_.container=S.getContainer(P),_.url=v.url,_.html=v.html,w.update({ns:_.namespace});var U=S.toDocument(v.html);document.title=U.title}})})();return Promise.resolve(E&&E.then?E.then(function(){}):void 0)}catch(v){return Promise.reject(v)}},T=function B(L,E,v){return L instanceof RegExp?(function(_,P){if(!P)return _;for(var U=/\((?:\?<(.*?)>)?(?!\?)/g,k=0,I=U.exec(_.source);I;)P.push({name:I[1]||k++,prefix:"",suffix:"",modifier:"",pattern:""}),I=U.exec(_.source);return _})(L,E):Array.isArray(L)?(function(_,P,U){var k=_.map(function(I){return B(I,P,U).source});return new RegExp("(?:".concat(k.join("|"),")"),g(U))})(L,E,v):(function(_,P,U){return(function(k,I,te){te===void 0&&(te={});for(var oe=te.strict,me=oe!==void 0&&oe,re=te.start,Q=re===void 0||re,ie=te.end,ve=ie===void 0||ie,_e=te.encode,le=_e===void 0?function(In){return In}:_e,Pe=te.delimiter,D=Pe===void 0?"/#?":Pe,ue=te.endsWith,de="[".concat(x(ue===void 0?"":ue),"]|$"),he="[".concat(x(D),"]"),se=Q?"^":"",ee=0,be=k;ee<be.length;ee++){var xe=be[ee];if(typeof xe=="string")se+=x(le(xe));else{var Ge=x(le(xe.prefix)),Te=x(le(xe.suffix));if(xe.pattern)if(I&&I.push(xe),Ge||Te)if(xe.modifier==="+"||xe.modifier==="*"){var ot=xe.modifier==="*"?"?":"";se+="(?:".concat(Ge,"((?:").concat(xe.pattern,")(?:").concat(Te).concat(Ge,"(?:").concat(xe.pattern,"))*)").concat(Te,")").concat(ot)}else se+="(?:".concat(Ge,"(").concat(xe.pattern,")").concat(Te,")").concat(xe.modifier);else se+=xe.modifier==="+"||xe.modifier==="*"?"((?:".concat(xe.pattern,")").concat(xe.modifier,")"):"(".concat(xe.pattern,")").concat(xe.modifier);else se+="(?:".concat(Ge).concat(Te,")").concat(xe.modifier)}}if(ve)me||(se+="".concat(he,"?")),se+=te.endsWith?"(?=".concat(de,")"):"$";else{var Be=k[k.length-1],ii=typeof Be=="string"?he.indexOf(Be[Be.length-1])>-1:Be===void 0;me||(se+="(?:".concat(he,"(?=").concat(de,"))?")),ii||(se+="(?=".concat(he,"|").concat(de,")"))}return new RegExp(se,g(te))})((function(k,I){I===void 0&&(I={});for(var te=(function(Te){for(var ot=[],Be=0;Be<Te.length;){var ii=Te[Be];if(ii!=="*"&&ii!=="+"&&ii!=="?")if(ii!=="\\")if(ii!=="{")if(ii!=="}")if(ii!==":")if(ii!=="(")ot.push({type:"CHAR",index:Be,value:Te[Be++]});else{var In=1,cr="";if(Te[Et=Be+1]==="?")throw new TypeError('Pattern cannot start with "?" at '.concat(Et));for(;Et<Te.length;)if(Te[Et]!=="\\"){if(Te[Et]===")"){if(--In==0){Et++;break}}else if(Te[Et]==="("&&(In++,Te[Et+1]!=="?"))throw new TypeError("Capturing groups are not allowed at ".concat(Et));cr+=Te[Et++]}else cr+=Te[Et++]+Te[Et++];if(In)throw new TypeError("Unbalanced pattern at ".concat(Be));if(!cr)throw new TypeError("Missing pattern at ".concat(Be));ot.push({type:"PATTERN",index:Be,value:cr}),Be=Et}else{for(var Ui="",Et=Be+1;Et<Te.length;){var Gi=Te.charCodeAt(Et);if(!(Gi>=48&&Gi<=57||Gi>=65&&Gi<=90||Gi>=97&&Gi<=122||Gi===95))break;Ui+=Te[Et++]}if(!Ui)throw new TypeError("Missing parameter name at ".concat(Be));ot.push({type:"NAME",index:Be,value:Ui}),Be=Et}else ot.push({type:"CLOSE",index:Be,value:Te[Be++]});else ot.push({type:"OPEN",index:Be,value:Te[Be++]});else ot.push({type:"ESCAPED_CHAR",index:Be++,value:Te[Be++]});else ot.push({type:"MODIFIER",index:Be,value:Te[Be++]})}return ot.push({type:"END",index:Be,value:""}),ot})(k),oe=I.prefixes,me=oe===void 0?"./":oe,re="[^".concat(x(I.delimiter||"/#?"),"]+?"),Q=[],ie=0,ve=0,_e="",le=function(Te){if(ve<te.length&&te[ve].type===Te)return te[ve++].value},Pe=function(Te){var ot=le(Te);if(ot!==void 0)return ot;var Be=te[ve],ii=Be.index;throw new TypeError("Unexpected ".concat(Be.type," at ").concat(ii,", expected ").concat(Te))},D=function(){for(var Te,ot="";Te=le("CHAR")||le("ESCAPED_CHAR");)ot+=Te;return ot};ve<te.length;){var ue=le("CHAR"),de=le("NAME"),he=le("PATTERN");if(de||he)me.indexOf(ee=ue||"")===-1&&(_e+=ee,ee=""),_e&&(Q.push(_e),_e=""),Q.push({name:de||ie++,prefix:ee,suffix:"",pattern:he||re,modifier:le("MODIFIER")||""});else{var se=ue||le("ESCAPED_CHAR");if(se)_e+=se;else if(_e&&(Q.push(_e),_e=""),le("OPEN")){var ee=D(),be=le("NAME")||"",xe=le("PATTERN")||"",Ge=D();Pe("CLOSE"),Q.push({name:be||(xe?ie++:""),pattern:be&&!xe?re:xe,prefix:ee,suffix:Ge,modifier:le("MODIFIER")||""})}else Pe("END")}}return Q})(_,U),P,U)})(L,E,v)},R={__proto__:null,update:A,nextTick:function(){return new Promise(function(B){window.requestAnimationFrame(B)})},pathToRegexp:T},N=function(){return window.location.origin},b=function(B){return B===void 0&&(B=window.location.href),M(B).port},M=function(B){var L,E=B.match(/:\d+/);if(E===null)/^http/.test(B)&&(L=80),/^https/.test(B)&&(L=443);else{var v=E[0].substring(1);L=parseInt(v,10)}var _,P=B.replace(N(),""),U={},k=P.indexOf("#");k>=0&&(_=P.slice(k+1),P=P.slice(0,k));var I=P.indexOf("?");return I>=0&&(U=O(P.slice(I+1)),P=P.slice(0,I)),{hash:_,path:P,port:L,query:U}},O=function(B){return B.split("&").reduce(function(L,E){var v=E.split("=");return L[v[0]]=v[1],L},{})},z=function(B){return B===void 0&&(B=window.location.href),B.replace(/(\/#.*|\/|#.*)$/,"")},G={__proto__:null,getHref:function(){return window.location.href},getAbsoluteHref:function(B,L){return L===void 0&&(L=document.baseURI),new URL(B,L).href},getOrigin:N,getPort:b,getPath:function(B){return B===void 0&&(B=window.location.href),M(B).path},getQuery:function(B,L){return L===void 0&&(L=!1),L?JSON.stringify(M(B).query):M(B).query},getHash:function(B){return M(B).hash},parse:M,parseQuery:O,clean:z};function K(B,L,E,v,_){return L===void 0&&(L=2e3),new Promise(function(P,U){var k=new XMLHttpRequest;k.onreadystatechange=function(){if(k.readyState===XMLHttpRequest.DONE){if(k.status===200){var I=k.responseURL!==""&&k.responseURL!==B?k.responseURL:B;P({html:k.responseText,url:t({href:I},M(I))}),v.update(B,{status:"fulfilled",target:I})}else if(k.status){var te={status:k.status,statusText:k.statusText};E(B,te),U(te),v.update(B,{status:"rejected"})}}},k.ontimeout=function(){var I=new Error("Timeout error ["+L+"]");E(B,I),U(I),v.update(B,{status:"rejected"})},k.onerror=function(){var I=new Error("Fetch error");E(B,I),U(I),v.update(B,{status:"rejected"})},k.open("GET",B),k.timeout=L,k.setRequestHeader("Accept","text/html,application/xhtml+xml,application/xml"),k.setRequestHeader("x-barba","yes"),_.all().forEach(function(I,te){k.setRequestHeader(te,I)}),k.send()})}function J(B){return!!B&&(typeof B=="object"||typeof B=="function")&&typeof B.then=="function"}function j(B,L){return L===void 0&&(L={}),function(){var E=arguments,v=!1,_=new Promise(function(P,U){L.async=function(){return v=!0,function(I,te){I?U(I):P(te)}};var k=B.apply(L,[].slice.call(E));v||(J(k)?k.then(P,U):P(k))});return _}}var ce=(function(B){function L(){var v;return(v=B.call(this)||this).logger=new f("@barba/core"),v.all=["ready","page","reset","currentAdded","currentRemoved","nextAdded","nextRemoved","beforeOnce","once","afterOnce","before","beforeLeave","leave","afterLeave","beforeEnter","enter","afterEnter","after"],v.registered=new Map,v.init(),v}i(L,B);var E=L.prototype;return E.init=function(){var v=this;this.registered.clear(),this.all.forEach(function(_){v[_]||(v[_]=function(P,U){v.registered.has(_)||v.registered.set(_,new Set),v.registered.get(_).add({ctx:U||{},fn:P})})})},E.do=function(v){var _=arguments,P=this;if(this.registered.has(v)){var U=Promise.resolve();return this.registered.get(v).forEach(function(k){U=U.then(function(){return j(k.fn,k.ctx).apply(void 0,[].slice.call(_,1))})}),U.catch(function(k){P.logger.debug("Hook error ["+v+"]"),P.logger.error(k)})}return Promise.resolve()},E.clear=function(){var v=this;this.all.forEach(function(_){delete v[_]}),this.init()},E.help=function(){this.logger.info("Available hooks: "+this.all.join(","));var v=[];this.registered.forEach(function(_,P){return v.push(P)}),this.logger.info("Registered hooks: "+v.join(","))},L})(u),X=new ce,fe=(function(){function B(L){if(this.k=void 0,this.O=[],typeof L=="boolean")this.k=L;else{var E=Array.isArray(L)?L:[L];this.O=E.map(function(v){return T(v)})}}return B.prototype.checkHref=function(L){if(typeof this.k=="boolean")return this.k;var E=M(L).path;return this.O.some(function(v){return v.exec(E)!==null})},B})(),pe=(function(B){function L(v){var _;return(_=B.call(this,v)||this).T=new Map,_}i(L,B);var E=L.prototype;return E.set=function(v,_,P,U,k){return this.T.set(v,{action:P,request:_,status:U,target:k!=null?k:v}),{action:P,request:_,status:U,target:k}},E.get=function(v){return this.T.get(v)},E.getRequest=function(v){return this.T.get(v).request},E.getAction=function(v){return this.T.get(v).action},E.getStatus=function(v){return this.T.get(v).status},E.getTarget=function(v){return this.T.get(v).target},E.has=function(v){return!this.checkHref(v)&&this.T.has(v)},E.delete=function(v){return this.T.delete(v)},E.update=function(v,_){var P=t({},this.T.get(v),_);return this.T.set(v,P),P},L})(fe),Ce=(function(){function B(){this.A=new Map}var L=B.prototype;return L.set=function(E,v){return this.A.set(E,v),{name:v}},L.get=function(E){return this.A.get(E)},L.all=function(){return this.A},L.has=function(E){return this.A.has(E)},L.delete=function(E){return this.A.delete(E)},L.clear=function(){return this.A.clear()},B})(),Ne=function(){return!window.history.pushState},tt=function(B){return!B.el||!B.href},Xe=function(B){var L=B.event;return L.which>1||L.metaKey||L.ctrlKey||L.shiftKey||L.altKey},$e=function(B){var L=B.el;return L.hasAttribute("target")&&L.target==="_blank"},ne=function(B){var L=B.el;return L.protocol!==void 0&&window.location.protocol!==L.protocol||L.hostname!==void 0&&window.location.hostname!==L.hostname},ae=function(B){var L=B.el;return L.port!==void 0&&b()!==b(L.href)},Me=function(B){var L=B.el;return L.getAttribute&&typeof L.getAttribute("download")=="string"},Ue=function(B){return B.el.hasAttribute(m.prefix+"-"+m.prevent)},Re=function(B){return!!B.el.closest("["+m.prefix+"-"+m.prevent+'="all"]')},qe=function(B){var L=B.href;return z(L)===z()&&b(L)===b()},Lt=(function(B){function L(v){var _;return(_=B.call(this,v)||this).suite=[],_.tests=new Map,_.init(),_}i(L,B);var E=L.prototype;return E.init=function(){this.add("pushState",Ne),this.add("exists",tt),this.add("newTab",Xe),this.add("blank",$e),this.add("corsDomain",ne),this.add("corsPort",ae),this.add("download",Me),this.add("preventSelf",Ue),this.add("preventAll",Re),this.add("sameUrl",qe,!1)},E.add=function(v,_,P){P===void 0&&(P=!0),this.tests.set(v,_),P&&this.suite.push(v)},E.run=function(v,_,P,U){return this.tests.get(v)({el:_,event:P,href:U})},E.checkLink=function(v,_,P){var U=this;return this.suite.some(function(k){return U.run(k,v,_,P)})},L})(fe),ze=(function(B){function L(E,v){var _;return v===void 0&&(v="Barba error"),(_=B.call.apply(B,[this].concat([].slice.call(arguments,2)))||this).error=void 0,_.label=void 0,_.error=E,_.label=v,Error.captureStackTrace&&Error.captureStackTrace(l(_),L),_.name="BarbaError",_}return i(L,B),L})(c(Error)),dt=(function(){function B(E){E===void 0&&(E=[]),this.logger=new f("@barba/core"),this.all=[],this.page=[],this.once=[],this.j=[{name:"namespace",type:"strings"},{name:"custom",type:"function"}],E&&(this.all=this.all.concat(E)),this.update()}var L=B.prototype;return L.add=function(E,v){E==="rule"?this.j.splice(v.position||0,0,v.value):this.all.push(v),this.update()},L.resolve=function(E,v){var _=this;v===void 0&&(v={});var P=v.once?this.once:this.page;P=P.filter(v.self?function(re){return re.name&&re.name==="self"}:function(re){return!re.name||re.name!=="self"});var U=new Map,k=P.find(function(re){var Q=!0,ie={};return v.self&&re.name==="self"?(U.set(re,ie),!0):(_.j.reverse().forEach(function(ve){Q&&(Q=_.M(re,ve,E,ie),re.from&&re.to&&(Q=_.M(re,ve,E,ie,"from")&&_.M(re,ve,E,ie,"to")),re.from&&!re.to&&(Q=_.M(re,ve,E,ie,"from")),!re.from&&re.to&&(Q=_.M(re,ve,E,ie,"to")))}),U.set(re,ie),Q)}),I=U.get(k),te=[];if(te.push(v.once?"once":"page"),v.self&&te.push("self"),I){var oe,me=[k];Object.keys(I).length>0&&me.push(I),(oe=this.logger).info.apply(oe,["Transition found ["+te.join(",")+"]"].concat(me))}else this.logger.info("No transition found ["+te.join(",")+"]");return k},L.update=function(){var E=this;this.all=this.all.map(function(v){return E.N(v)}).sort(function(v,_){return v.priority-_.priority}).reverse().map(function(v){return delete v.priority,v}),this.page=this.all.filter(function(v){return v.leave!==void 0||v.enter!==void 0}),this.once=this.all.filter(function(v){return v.once!==void 0})},L.M=function(E,v,_,P,U){var k=!0,I=!1,te=E,oe=v.name,me=oe,re=oe,Q=oe,ie=U?te[U]:te,ve=U==="to"?_.next:_.current;if(U?ie&&ie[oe]:ie[oe]){switch(v.type){case"strings":default:var _e=Array.isArray(ie[me])?ie[me]:[ie[me]];ve[me]&&_e.indexOf(ve[me])!==-1&&(I=!0),_e.indexOf(ve[me])===-1&&(k=!1);break;case"object":var le=Array.isArray(ie[re])?ie[re]:[ie[re]];ve[re]?(ve[re].name&&le.indexOf(ve[re].name)!==-1&&(I=!0),le.indexOf(ve[re].name)===-1&&(k=!1)):k=!1;break;case"function":ie[Q](_)?I=!0:k=!1}I&&(U?(P[U]=P[U]||{},P[U][oe]=te[U][oe]):P[oe]=te[oe])}return k},L.S=function(E,v,_){var P=0;return(E[v]||E.from&&E.from[v]||E.to&&E.to[v])&&(P+=Math.pow(10,_),E.from&&E.from[v]&&(P+=1),E.to&&E.to[v]&&(P+=2)),P},L.N=function(E){var v=this;E.priority=0;var _=0;return this.j.forEach(function(P,U){_+=v.S(E,P.name,U+1)}),E.priority=_,E},B})();function F(B,L){try{var E=B()}catch(v){return L(v)}return E&&E.then?E.then(void 0,L):E}var Ye=(function(){function B(E){E===void 0&&(E=[]),this.logger=new f("@barba/core"),this.store=void 0,this.C=!1,this.store=new dt(E)}var L=B.prototype;return L.get=function(E,v){return this.store.resolve(E,v)},L.doOnce=function(E){var v=E.data,_=E.transition;try{var P=function(){U.C=!1},U=this,k=_||{};U.C=!0;var I=F(function(){return Promise.resolve(U.L("beforeOnce",v,k)).then(function(){return Promise.resolve(U.once(v,k)).then(function(){return Promise.resolve(U.L("afterOnce",v,k)).then(function(){})})})},function(te){U.C=!1,U.logger.debug("Transition error [before/after/once]"),U.logger.error(te)});return Promise.resolve(I&&I.then?I.then(P):P())}catch(te){return Promise.reject(te)}},L.doPage=function(E){var v=E.data,_=E.transition,P=E.page,U=E.wrapper;try{var k=function(re){I.C=!1},I=this,te=_||{},oe=te.sync===!0||!1;I.C=!0;var me=F(function(){function re(){return Promise.resolve(I.L("before",v,te)).then(function(){function ie(_e){return Promise.resolve(I.remove(v)).then(function(){return Promise.resolve(I.L("after",v,te)).then(function(){})})}var ve=(function(){if(oe)return F(function(){return Promise.resolve(I.add(v,U)).then(function(){return Promise.resolve(I.L("beforeLeave",v,te)).then(function(){return Promise.resolve(I.L("beforeEnter",v,te)).then(function(){return Promise.resolve(Promise.all([I.leave(v,te),I.enter(v,te)])).then(function(){return Promise.resolve(I.L("afterLeave",v,te)).then(function(){return Promise.resolve(I.L("afterEnter",v,te)).then(function(){})})})})})})},function(D){if(I.H(D))throw new ze(D,"Transition error [sync]")});var _e=function(D){return F(function(){var ue=(function(){if(le!==!1)return Promise.resolve(I.add(v,U)).then(function(){return Promise.resolve(I.L("beforeEnter",v,te)).then(function(){return Promise.resolve(I.enter(v,te,le)).then(function(){return Promise.resolve(I.L("afterEnter",v,te)).then(function(){})})})})})();if(ue&&ue.then)return ue.then(function(){})},function(ue){if(I.H(ue))throw new ze(ue,"Transition error [before/after/enter]")})},le=!1,Pe=F(function(){return Promise.resolve(I.L("beforeLeave",v,te)).then(function(){return Promise.resolve(Promise.all([I.leave(v,te),A(P,v)]).then(function(D){return D[0]})).then(function(D){return le=D,Promise.resolve(I.L("afterLeave",v,te)).then(function(){})})})},function(D){if(I.H(D))throw new ze(D,"Transition error [before/after/leave]")});return Pe&&Pe.then?Pe.then(_e):_e()})();return ve&&ve.then?ve.then(ie):ie()})}var Q=(function(){if(oe)return Promise.resolve(A(P,v)).then(function(){})})();return Q&&Q.then?Q.then(re):re()},function(re){throw I.C=!1,re.name&&re.name==="BarbaError"?(I.logger.debug(re.label),I.logger.error(re.error),re):(I.logger.debug("Transition error [page]"),I.logger.error(re),re)});return Promise.resolve(me&&me.then?me.then(k):k())}catch(re){return Promise.reject(re)}},L.once=function(E,v){try{return Promise.resolve(X.do("once",E,v)).then(function(){return v.once?j(v.once,v)(E):Promise.resolve()})}catch(_){return Promise.reject(_)}},L.leave=function(E,v){try{return Promise.resolve(X.do("leave",E,v)).then(function(){return v.leave?j(v.leave,v)(E):Promise.resolve()})}catch(_){return Promise.reject(_)}},L.enter=function(E,v,_){try{return Promise.resolve(X.do("enter",E,v)).then(function(){return v.enter?j(v.enter,v)(E,_):Promise.resolve()})}catch(P){return Promise.reject(P)}},L.add=function(E,v){try{return S.addContainer(E.next.container,v),X.do("nextAdded",E),Promise.resolve()}catch(_){return Promise.reject(_)}},L.remove=function(E){try{return S.removeContainer(E.current.container),X.do("currentRemoved",E),Promise.resolve()}catch(v){return Promise.reject(v)}},L.H=function(E){return E.message?!/Timeout error|Fetch error/.test(E.message):!E.status},L.L=function(E,v,_){try{return Promise.resolve(X.do(E,v,_)).then(function(){return _[E]?j(_[E],_)(v):Promise.resolve()})}catch(P){return Promise.reject(P)}},e(B,[{key:"isRunning",get:function(){return this.C},set:function(E){this.C=E}},{key:"hasOnce",get:function(){return this.store.once.length>0}},{key:"hasSelf",get:function(){return this.store.all.some(function(E){return E.name==="self"})}},{key:"shouldWait",get:function(){return this.store.all.some(function(E){return E.to&&!E.to.route||E.sync})}}]),B})(),je=(function(){function B(L){var E=this;this.names=["beforeLeave","afterLeave","beforeEnter","afterEnter"],this.byNamespace=new Map,L.length!==0&&(L.forEach(function(v){E.byNamespace.set(v.namespace,v)}),this.names.forEach(function(v){X[v](E._(v))}))}return B.prototype._=function(L){var E=this;return function(v){var _=L.match(/enter/i)?v.next:v.current,P=E.byNamespace.get(_.namespace);return P&&P[L]?j(P[L],P)(v):Promise.resolve()}},B})();Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(B){var L=this;do{if(L.matches(B))return L;L=L.parentElement||L.parentNode}while(L!==null&&L.nodeType===1);return null});var at={container:null,html:"",namespace:"",url:{hash:"",href:"",path:"",port:null,query:{}}},Ee=(function(){function B(){this.version="2.10.3",this.schemaPage=at,this.Logger=f,this.logger=new f("@barba/core"),this.plugins=[],this.timeout=void 0,this.cacheIgnore=void 0,this.cacheFirstPage=void 0,this.prefetchIgnore=void 0,this.preventRunning=void 0,this.hooks=X,this.cache=void 0,this.headers=void 0,this.prevent=void 0,this.transitions=void 0,this.views=void 0,this.dom=S,this.helpers=R,this.history=w,this.request=K,this.url=G,this.D=void 0,this.B=void 0,this.q=void 0,this.F=void 0}var L=B.prototype;return L.use=function(E,v){var _=this.plugins;_.indexOf(E)>-1?this.logger.warn("Plugin ["+E.name+"] already installed."):typeof E.install=="function"?(E.install(this,v),_.push(E)):this.logger.warn("Plugin ["+E.name+'] has no "install" method.')},L.init=function(E){var v=E===void 0?{}:E,_=v.transitions,P=_===void 0?[]:_,U=v.views,k=U===void 0?[]:U,I=v.schema,te=I===void 0?m:I,oe=v.requestError,me=v.timeout,re=me===void 0?2e3:me,Q=v.cacheIgnore,ie=Q!==void 0&&Q,ve=v.cacheFirstPage,_e=ve!==void 0&&ve,le=v.prefetchIgnore,Pe=le!==void 0&&le,D=v.preventRunning,ue=D!==void 0&&D,de=v.prevent,he=de===void 0?null:de,se=v.debug,ee=v.logLevel;if(f.setLevel((se!==void 0&&se)===!0?"debug":ee===void 0?"off":ee),this.logger.info(this.version),Object.keys(te).forEach(function(Ge){m[Ge]&&(m[Ge]=te[Ge])}),this.B=oe,this.timeout=re,this.cacheIgnore=ie,this.cacheFirstPage=_e,this.prefetchIgnore=Pe,this.preventRunning=ue,this.q=this.dom.getWrapper(),!this.q)throw new Error("[@barba/core] No Barba wrapper found");this.I();var be=this.data.current;if(!be.container)throw new Error("[@barba/core] No Barba container found");if(this.cache=new pe(ie),this.headers=new Ce,this.prevent=new Lt(Pe),this.transitions=new Ye(P),this.views=new je(k),he!==null){if(typeof he!="function")throw new Error("[@barba/core] Prevent should be a function");this.prevent.add("preventCustom",he)}this.history.init(be.url.href,be.namespace),_e&&this.cache.set(be.url.href,Promise.resolve({html:be.html,url:be.url}),"init","fulfilled"),this.U=this.U.bind(this),this.$=this.$.bind(this),this.X=this.X.bind(this),this.G(),this.plugins.forEach(function(Ge){return Ge.init()});var xe=this.data;xe.trigger="barba",xe.next=xe.current,xe.current=t({},this.schemaPage),this.hooks.do("ready",xe),this.once(xe),this.I()},L.destroy=function(){this.I(),this.J(),this.history.clear(),this.hooks.clear(),this.plugins=[]},L.force=function(E){window.location.assign(E)},L.go=function(E,v,_){var P;if(v===void 0&&(v="barba"),this.F=null,this.transitions.isRunning)this.force(E);else if(!(P=v==="popstate"?this.history.current&&this.url.getPath(this.history.current.url)===this.url.getPath(E)&&this.url.getQuery(this.history.current.url,!0)===this.url.getQuery(E,!0):this.prevent.run("sameUrl",null,null,E))||this.transitions.hasSelf)return v=this.history.change(this.cache.has(E)?this.cache.get(E).target:E,v,_),_&&(_.stopPropagation(),_.preventDefault()),this.page(E,v,_!=null?_:void 0,P)},L.once=function(E){try{var v=this;return Promise.resolve(v.hooks.do("beforeEnter",E)).then(function(){function _(){return Promise.resolve(v.hooks.do("afterEnter",E)).then(function(){})}var P=(function(){if(v.transitions.hasOnce){var U=v.transitions.get(E,{once:!0});return Promise.resolve(v.transitions.doOnce({transition:U,data:E})).then(function(){})}})();return P&&P.then?P.then(_):_()})}catch(_){return Promise.reject(_)}},L.page=function(E,v,_,P){try{var U,k=function(){var me=I.data;return Promise.resolve(I.hooks.do("page",me)).then(function(){var re=(function(Q,ie){try{var ve=(_e=I.transitions.get(me,{once:!1,self:P}),Promise.resolve(I.transitions.doPage({data:me,page:U,transition:_e,wrapper:I.q})).then(function(){I.I()}))}catch{return ie()}var _e;return ve&&ve.then?ve.then(void 0,ie):ve})(0,function(){f.getLevel()===0&&I.force(me.next.url.href)});if(re&&re.then)return re.then(function(){})})},I=this;if(I.data.next.url=t({href:E},I.url.parse(E)),I.data.trigger=v,I.data.event=_,I.cache.has(E))U=I.cache.update(E,{action:"click"}).request;else{var te=I.request(E,I.timeout,I.onRequestError.bind(I,v),I.cache,I.headers);te.then(function(me){me.url.href!==E&&I.history.add(me.url.href,v,"replace")}),U=I.cache.set(E,te,"click","pending").request}var oe=(function(){if(I.transitions.shouldWait)return Promise.resolve(A(U,I.data)).then(function(){})})();return Promise.resolve(oe&&oe.then?oe.then(k):k())}catch(me){return Promise.reject(me)}},L.onRequestError=function(E){this.transitions.isRunning=!1;var v=[].slice.call(arguments,1),_=v[0],P=v[1],U=this.cache.getAction(_);return this.cache.delete(_),this.B&&this.B(E,U,_,P)===!1||U==="click"&&this.force(_),!1},L.prefetch=function(E){var v=this;E=this.url.getAbsoluteHref(E),this.cache.has(E)||this.cache.set(E,this.request(E,this.timeout,this.onRequestError.bind(this,"barba"),this.cache,this.headers).catch(function(_){v.logger.error(_)}),"prefetch","pending")},L.G=function(){this.prefetchIgnore!==!0&&(document.addEventListener("mouseover",this.U),document.addEventListener("touchstart",this.U)),document.addEventListener("click",this.$),window.addEventListener("popstate",this.X)},L.J=function(){this.prefetchIgnore!==!0&&(document.removeEventListener("mouseover",this.U),document.removeEventListener("touchstart",this.U)),document.removeEventListener("click",this.$),window.removeEventListener("popstate",this.X)},L.U=function(E){var v=this,_=this.W(E);if(_){var P=this.url.getAbsoluteHref(this.dom.getHref(_));this.prevent.checkHref(P)||this.cache.has(P)||this.cache.set(P,this.request(P,this.timeout,this.onRequestError.bind(this,_),this.cache,this.headers).catch(function(U){v.logger.error(U)}),"enter","pending")}},L.$=function(E){var v=this.W(E);if(v){if(this.transitions.isRunning&&this.preventRunning)return E.preventDefault(),void E.stopPropagation();this.F=E,this.go(this.dom.getHref(v),v,E)}},L.X=function(E){this.go(this.url.getHref(),"popstate",E)},L.W=function(E){for(var v=E.target;v&&!this.dom.getHref(v);)v=v.parentNode;if(v&&!this.prevent.checkLink(v,E,this.dom.getHref(v)))return v},L.I=function(){var E=this.url.getHref(),v={container:this.dom.getContainer(),html:this.dom.getHtml(),namespace:this.dom.getNamespace(),url:t({href:E},this.url.parse(E))};this.D={current:v,event:void 0,next:t({},this.schemaPage),trigger:void 0},this.hooks.do("reset",this.data)},e(B,[{key:"data",get:function(){return this.D}},{key:"wrapper",get:function(){return this.q}}]),B})();return new Ee})});function hn(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function hf(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}var ci,Jr,Rh,Bt,mt,Ci,ut,_h,av,ov,uf,cv,lv,It,St,dn,Lo,qi,oi,Lh,So,df,Ht,yh,Ih,fr,dh,Dh,ff,hv,xt,Wi,bh,Oh,gi,To,pf,mf,Io,oa,gf,ca,uv,Mo,dv,Fh,On,Sh,vf,si,fh,nf,wo,Nh,Uh,Fn,Bh,Jt,Mt,Ct,pr,fv,Ao,kh,xf,_f,yf,vi,pv,Qr,rf,Co,ra,mv,bf,Do,Nn,hr,gv,Mh,vv,sf,es,Po,Oo,Fo,Sf,Xi,Mf,wf,xv,wh,_v,yv,ts,af,bv,Ai,sa,Un,ua,kt,Sv,Eh,Ef,Mv,Pi,Th,Tf,Af,Ah,Cf,Pf,wv,Ev,Tv,Rf,Av,Cv,ns,Lf,Pv,of,mi,ia,Kr,If,Df,ht,na,ph,Of,Ff,cf,un,Rv,zh,la,ai,is,Qe,Lv,Iv,Dv,Ov,Fv,Nf,Uf,ur,mr,Bf,mh,gh,Hh,ha,Ut,Nv,Vh,Uv,Gh,Dn,Ch,Wh,Bv,kv,zv,aa,kf,zf,Tt,Xh,Hf,Hv,Vv,No,Vf,Gv,qh,Yh,Wv,Xv,qv,jh,Qt,dr,Eo,Yv,lf,jv,vh,Ph,Gf,Zv,Ro,$v,Kv,xh,Vt,Jv,Qv,ex,tx,ix,nx,rx,sx,ax,ox,cx,lx,hx,ux,dx,fx,px,mx,Zh=Zt(()=>{ci={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Jr={duration:.5,overwrite:!1,delay:0},Ci=1e8,ut=1/Ci,_h=Math.PI*2,av=_h/4,ov=0,uf=Math.sqrt,cv=Math.cos,lv=Math.sin,It=function(e){return typeof e=="string"},St=function(e){return typeof e=="function"},dn=function(e){return typeof e=="number"},Lo=function(e){return typeof e=="undefined"},qi=function(e){return typeof e=="object"},oi=function(e){return e!==!1},Lh=function(){return typeof window!="undefined"},So=function(e){return St(e)||It(e)},df=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Ht=Array.isArray,yh=/(?:-?\.?\d|\.)+/gi,Ih=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,fr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,dh=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Dh=/[+-]=-?[.\d]+/,ff=/[^,'"\[\]\s]+/gi,hv=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,gi={},To={},mf=function(e){return(To=Qr(e,gi))&&Vt},Io=function(e,t){},oa=function(e,t){return!t&&void 0},gf=function(e,t){return e&&(gi[e]=t)&&To&&(To[e]=t)||gi},ca=function(){return 0},uv={suppressEvents:!0,isStart:!0,kill:!1},Mo={suppressEvents:!0,kill:!1},dv={suppressEvents:!0},Fh={},On=[],Sh={},si={},fh={},nf=30,wo=[],Nh="",Uh=function(e){var t=e[0],i,n;if(qi(t)||St(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(n=wo.length;n--&&!wo[n].targetTest(t););i=wo[n]}for(n=e.length;n--;)e[n]&&(e[n]._gsap||(e[n]._gsap=new Hh(e[n],i)))||e.splice(n,1);return e},Fn=function(e){return e._gsap||Uh(Pi(e))[0]._gsap},Bh=function(e,t,i){return(i=e[t])&&St(i)?e[t]():Lo(i)&&e.getAttribute&&e.getAttribute(t)||i},Jt=function(e,t){return(e=e.split(",")).forEach(t)||e},Mt=function(e){return Math.round(e*1e5)/1e5||0},Ct=function(e){return Math.round(e*1e7)/1e7||0},pr=function(e,t){var i=t.charAt(0),n=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+n:i==="-"?e-n:i==="*"?e*n:e/n},fv=function(e,t){for(var i=t.length,n=0;e.indexOf(t[n])<0&&++n<i;);return n<i},Ao=function(){var e=On.length,t=On.slice(0),i,n;for(Sh={},On.length=0,i=0;i<e;i++)n=t[i],n&&n._lazy&&(n.render(n._lazy[0],n._lazy[1],!0)._lazy=0)},kh=function(e){return!!(e._initted||e._startAt||e.add)},xf=function(e,t,i,n){On.length&&!Bt&&Ao(),e.render(t,i,n||!!(Bt&&t<0&&kh(e))),On.length&&!Bt&&Ao()},_f=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(ff).length<2?t:It(e)?e.trim():e},yf=function(e){return e},vi=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},pv=function(e){return function(t,i){for(var n in i)n in t||n==="duration"&&e||n==="ease"||(t[n]=i[n])}},Qr=function(e,t){for(var i in t)e[i]=t[i];return e},rf=function r(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=qi(t[i])?r(e[i]||(e[i]={}),t[i]):t[i]);return e},Co=function(e,t){var i={},n;for(n in e)n in t||(i[n]=e[n]);return i},ra=function(e){var t=e.parent||xt,i=e.keyframes?pv(Ht(e.keyframes)):vi;if(oi(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},mv=function(e,t){for(var i=e.length,n=i===t.length;n&&i--&&e[i]===t[i];);return i<0},bf=function(e,t,i,n,s){i===void 0&&(i="_first"),n===void 0&&(n="_last");var a=e[n],o;if(s)for(o=t[s];a&&a[s]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[n]=t,t._prev=a,t.parent=t._dp=e,t},Do=function(e,t,i,n){i===void 0&&(i="_first"),n===void 0&&(n="_last");var s=t._prev,a=t._next;s?s._next=a:e[i]===t&&(e[i]=a),a?a._prev=s:e[n]===t&&(e[n]=s),t._next=t._prev=t.parent=null},Nn=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},hr=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},gv=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Mh=function(e,t,i,n){return e._startAt&&(Bt?e._startAt.revert(Mo):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,n))},vv=function r(e){return!e||e._ts&&r(e.parent)},sf=function(e){return e._repeat?es(e._tTime,e=e.duration()+e._rDelay)*e:0},es=function(e,t){var i=Math.floor(e=Ct(e/t));return e&&i===e?i-1:i},Po=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Oo=function(e){return e._end=Ct(e._start+(e._tDur/Math.abs(e._ts||e._rts||ut)||0))},Fo=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=Ct(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Oo(e),i._dirty||hr(i,e)),e},Sf=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=Po(e.rawTime(),t),(!t._dur||ua(0,t.totalDuration(),i)-t._tTime>ut)&&t.render(i,!0)),hr(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-ut}},Xi=function(e,t,i,n){return t.parent&&Nn(t),t._start=Ct((dn(i)?i:i||e!==xt?Ai(e,i,t):e._time)+t._delay),t._end=Ct(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),bf(e,t,"_first","_last",e._sort?"_start":0),wh(t)||(e._recent=t),n||Sf(e,t),e._ts<0&&Fo(e,e._tTime),e},Mf=function(e,t){return(gi.ScrollTrigger||Io("scrollTrigger",t))&&gi.ScrollTrigger.create(t,e)},wf=function(e,t,i,n,s){if(Wh(e,t,s),!e._initted)return 1;if(!i&&e._pt&&!Bt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&vf!==ai.frame)return On.push(e),e._lazy=[s,n],1},xv=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},wh=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},_v=function(e,t,i,n){var s=e.ratio,a=t<0||!t&&(!e._start&&xv(e)&&!(!e._initted&&wh(e))||(e._ts<0||e._dp._ts<0)&&!wh(e))?0:1,o=e._rDelay,c=0,l,h,u;if(o&&e._repeat&&(c=ua(0,e._tDur,t),h=es(c,o),e._yoyo&&h&1&&(a=1-a),h!==es(e._tTime,o)&&(s=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==s||Bt||n||e._zTime===ut||!t&&e._zTime){if(!e._initted&&wf(e,t,n,i,c))return;for(u=e._zTime,e._zTime=t||(i?ut:0),i||(i=t&&!u),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=c,l=e._pt;l;)l.r(a,l.d),l=l._next;t<0&&Mh(e,t,i,!0),e._onUpdate&&!i&&mi(e,"onUpdate"),c&&e._repeat&&!i&&e.parent&&mi(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&Nn(e,1),!i&&!Bt&&(mi(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},yv=function(e,t,i){var n;if(i>t)for(n=e._first;n&&n._start<=i;){if(n.data==="isPause"&&n._start>t)return n;n=n._next}else for(n=e._last;n&&n._start>=i;){if(n.data==="isPause"&&n._start<t)return n;n=n._prev}},ts=function(e,t,i,n){var s=e._repeat,a=Ct(t)||0,o=e._tTime/e._tDur;return o&&!n&&(e._time*=a/e._dur),e._dur=a,e._tDur=s?s<0?1e10:Ct(a*(s+1)+e._rDelay*s):a,o>0&&!n&&Fo(e,e._tTime=e._tDur*o),e.parent&&Oo(e),i||hr(e.parent,e),e},af=function(e){return e instanceof Ut?hr(e):ts(e,e._dur)},bv={_start:0,endTime:ca,totalDuration:ca},Ai=function r(e,t,i){var n=e.labels,s=e._recent||bv,a=e.duration()>=Ci?s.endTime(!1):e._dur,o,c,l;return It(t)&&(isNaN(t)||t in n)?(c=t.charAt(0),l=t.substr(-1)==="%",o=t.indexOf("="),c==="<"||c===">"?(o>=0&&(t=t.replace(/=/,"")),(c==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(l?(o<0?s:i).totalDuration()/100:1)):o<0?(t in n||(n[t]=a),n[t]):(c=parseFloat(t.charAt(o-1)+t.substr(o+1)),l&&i&&(c=c/100*(Ht(i)?i[0]:i).totalDuration()),o>1?r(e,t.substr(0,o-1),i)+c:a+c)):t==null?a:+t},sa=function(e,t,i){var n=dn(t[1]),s=(n?2:1)+(e<2?0:1),a=t[s],o,c;if(n&&(a.duration=t[1]),a.parent=i,e){for(o=a,c=i;c&&!("immediateRender"in o);)o=c.vars.defaults||{},c=oi(c.vars.inherit)&&c.parent;a.immediateRender=oi(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[s-1]}return new Tt(t[0],a,t[s+1])},Un=function(e,t){return e||e===0?t(e):t},ua=function(e,t,i){return i<e?e:i>t?t:i},kt=function(e,t){return!It(e)||!(t=hv.exec(e))?"":t[1]},Sv=function(e,t,i){return Un(i,function(n){return ua(e,t,n)})},Eh=[].slice,Ef=function(e,t){return e&&qi(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&qi(e[0]))&&!e.nodeType&&e!==Wi},Mv=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(n){var s;return It(n)&&!t||Ef(n,1)?(s=i).push.apply(s,Pi(n)):i.push(n)})||i},Pi=function(e,t,i){return mt&&!t&&mt.selector?mt.selector(e):It(e)&&!i&&(bh||!is())?Eh.call((t||Oh).querySelectorAll(e),0):Ht(e)?Mv(e,i):Ef(e)?Eh.call(e,0):e?[e]:[]},Th=function(e){return e=Pi(e)[0]||oa("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return Pi(t,i.querySelectorAll?i:i===e?oa("Invalid scope")||Oh.createElement("div"):e)}},Tf=function(e){return e.sort(function(){return .5-Math.random()})},Af=function(e){if(St(e))return e;var t=qi(e)?e:{each:e},i=ur(t.ease),n=t.from||0,s=parseFloat(t.base)||0,a={},o=n>0&&n<1,c=isNaN(n)||o,l=t.axis,h=n,u=n;return It(n)?h=u={center:.5,edges:.5,end:1}[n]||0:!o&&c&&(h=n[0],u=n[1]),function(d,f,x){var g=(x||t).length,m=a[g],p,S,y,w,A,T,R,N,b;if(!m){if(b=t.grid==="auto"?0:(t.grid||[1,Ci])[1],!b){for(R=-Ci;R<(R=x[b++].getBoundingClientRect().left)&&b<g;);b<g&&b--}for(m=a[g]=[],p=c?Math.min(b,g)*h-.5:n%b,S=b===Ci?0:c?g*u/b-.5:n/b|0,R=0,N=Ci,T=0;T<g;T++)y=T%b-p,w=S-(T/b|0),m[T]=A=l?Math.abs(l==="y"?w:y):uf(y*y+w*w),A>R&&(R=A),A<N&&(N=A);n==="random"&&Tf(m),m.max=R-N,m.min=N,m.v=g=(parseFloat(t.amount)||parseFloat(t.each)*(b>g?g-1:l?l==="y"?g/b:b:Math.max(b,g/b))||0)*(n==="edges"?-1:1),m.b=g<0?s-g:s,m.u=kt(t.amount||t.each)||0,i=i&&g<0?Nf(i):i}return g=(m[d]-m.min)/m.max||0,Ct(m.b+(i?i(g):g)*m.v)+m.u}},Ah=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var n=Ct(Math.round(parseFloat(i)/e)*e*t);return(n-n%1)/t+(dn(i)?0:kt(i))}},Cf=function(e,t){var i=Ht(e),n,s;return!i&&qi(e)&&(n=i=e.radius||Ci,e.values?(e=Pi(e.values),(s=!dn(e[0]))&&(n*=n)):e=Ah(e.increment)),Un(t,i?St(e)?function(a){return s=e(a),Math.abs(s-a)<=n?s:a}:function(a){for(var o=parseFloat(s?a.x:a),c=parseFloat(s?a.y:0),l=Ci,h=0,u=e.length,d,f;u--;)s?(d=e[u].x-o,f=e[u].y-c,d=d*d+f*f):d=Math.abs(e[u]-o),d<l&&(l=d,h=u);return h=!n||l<=n?e[h]:a,s||h===a||dn(a)?h:h+kt(a)}:Ah(e))},Pf=function(e,t,i,n){return Un(Ht(e)?!t:i===!0?!!(i=0):!n,function(){return Ht(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(n=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*n)/n})},wv=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(n){return t.reduce(function(s,a){return a(s)},n)}},Ev=function(e,t){return function(i){return e(parseFloat(i))+(t||kt(i))}},Tv=function(e,t,i){return Lf(e,t,0,1,i)},Rf=function(e,t,i){return Un(i,function(n){return e[~~t(n)]})},Av=function r(e,t,i){var n=t-e;return Ht(e)?Rf(e,r(0,e.length),t):Un(i,function(s){return(n+(s-e)%n)%n+e})},Cv=function r(e,t,i){var n=t-e,s=n*2;return Ht(e)?Rf(e,r(0,e.length-1),t):Un(i,function(a){return a=(s+(a-e)%s)%s||0,e+(a>n?s-a:a)})},ns=function(e){for(var t=0,i="",n,s,a,o;~(n=e.indexOf("random(",t));)a=e.indexOf(")",n),o=e.charAt(n+7)==="[",s=e.substr(n+7,a-n-7).match(o?ff:yh),i+=e.substr(t,n-t)+Pf(o?s:+s[0],o?0:+s[1],+s[2]||1e-5),t=a+1;return i+e.substr(t,e.length-t)},Lf=function(e,t,i,n,s){var a=t-e,o=n-i;return Un(s,function(c){return i+((c-e)/a*o||0)})},Pv=function r(e,t,i,n){var s=isNaN(e+t)?0:function(f){return(1-f)*e+f*t};if(!s){var a=It(e),o={},c,l,h,u,d;if(i===!0&&(n=1)&&(i=null),a)e={p:e},t={p:t};else if(Ht(e)&&!Ht(t)){for(h=[],u=e.length,d=u-2,l=1;l<u;l++)h.push(r(e[l-1],e[l]));u--,s=function(x){x*=u;var g=Math.min(d,~~x);return h[g](x-g)},i=t}else n||(e=Qr(Ht(e)?[]:{},e));if(!h){for(c in t)Vh.call(o,e,c,"get",t[c]);s=function(x){return Yh(x,o)||(a?e.p:e)}}}return Un(i,s)},of=function(e,t,i){var n=e.labels,s=Ci,a,o,c;for(a in n)o=n[a]-t,o<0==!!i&&o&&s>(o=Math.abs(o))&&(c=a,s=o);return c},mi=function(e,t,i){var n=e.vars,s=n[t],a=mt,o=e._ctx,c,l,h;if(s)return c=n[t+"Params"],l=n.callbackScope||e,i&&On.length&&Ao(),o&&(mt=o),h=c?s.apply(l,c):s.call(l),mt=a,h},ia=function(e){return Nn(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Bt),e.progress()<1&&mi(e,"onInterrupt"),e},If=[],Df=function(e){if(e)if(e=!e.name&&e.default||e,Lh()||e.headless){var t=e.name,i=St(e),n=t&&!i&&e.init?function(){this._props=[]}:e,s={init:ca,render:Yh,add:Vh,kill:Xv,modifier:Wv,rawVars:0},a={targetTest:0,get:0,getSetter:No,aliases:{},register:0};if(is(),e!==n){if(si[t])return;vi(n,vi(Co(e,s),a)),Qr(n.prototype,Qr(s,Co(e,a))),si[n.prop=t]=n,e.targetTest&&(wo.push(n),Fh[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}gf(t,n),e.register&&e.register(Vt,n,Qt)}else If.push(e)},ht=255,na={aqua:[0,ht,ht],lime:[0,ht,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,ht],navy:[0,0,128],white:[ht,ht,ht],olive:[128,128,0],yellow:[ht,ht,0],orange:[ht,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[ht,0,0],pink:[ht,192,203],cyan:[0,ht,ht],transparent:[ht,ht,ht,0]},ph=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*ht+.5|0},Of=function(e,t,i){var n=e?dn(e)?[e>>16,e>>8&ht,e&ht]:0:na.black,s,a,o,c,l,h,u,d,f,x;if(!n){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),na[e])n=na[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+s+s+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return n=parseInt(e.substr(1,6),16),[n>>16,n>>8&ht,n&ht,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),n=[e>>16,e>>8&ht,e&ht]}else if(e.substr(0,3)==="hsl"){if(n=x=e.match(yh),!t)c=+n[0]%360/360,l=+n[1]/100,h=+n[2]/100,a=h<=.5?h*(l+1):h+l-h*l,s=h*2-a,n.length>3&&(n[3]*=1),n[0]=ph(c+1/3,s,a),n[1]=ph(c,s,a),n[2]=ph(c-1/3,s,a);else if(~e.indexOf("="))return n=e.match(Ih),i&&n.length<4&&(n[3]=1),n}else n=e.match(yh)||na.transparent;n=n.map(Number)}return t&&!x&&(s=n[0]/ht,a=n[1]/ht,o=n[2]/ht,u=Math.max(s,a,o),d=Math.min(s,a,o),h=(u+d)/2,u===d?c=l=0:(f=u-d,l=h>.5?f/(2-u-d):f/(u+d),c=u===s?(a-o)/f+(a<o?6:0):u===a?(o-s)/f+2:(s-a)/f+4,c*=60),n[0]=~~(c+.5),n[1]=~~(l*100+.5),n[2]=~~(h*100+.5)),i&&n.length<4&&(n[3]=1),n},Ff=function(e){var t=[],i=[],n=-1;return e.split(un).forEach(function(s){var a=s.match(fr)||[];t.push.apply(t,a),i.push(n+=a.length+1)}),t.c=i,t},cf=function(e,t,i){var n="",s=(e+n).match(un),a=t?"hsla(":"rgba(",o=0,c,l,h,u;if(!s)return e;if(s=s.map(function(d){return(d=Of(d,t,1))&&a+(t?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),i&&(h=Ff(e),c=i.c,c.join(n)!==h.c.join(n)))for(l=e.replace(un,"1").split(fr),u=l.length-1;o<u;o++)n+=l[o]+(~c.indexOf(o)?s.shift()||a+"0,0,0,0)":(h.length?h:s.length?s:i).shift());if(!l)for(l=e.split(un),u=l.length-1;o<u;o++)n+=l[o]+s[o];return n+l[u]},un=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in na)r+="|"+e+"\\b";return new RegExp(r+")","gi")})(),Rv=/hsl[a]?\(/,zh=function(e){var t=e.join(" "),i;if(un.lastIndex=0,un.test(t))return i=Rv.test(t),e[1]=cf(e[1],i),e[0]=cf(e[0],i,Ff(e[1])),!0},ai=(function(){var r=Date.now,e=500,t=33,i=r(),n=i,s=1e3/240,a=s,o=[],c,l,h,u,d,f,x=function g(m){var p=r()-n,S=m===!0,y,w,A,T;if((p>e||p<0)&&(i+=p-t),n+=p,A=n-i,y=A-a,(y>0||S)&&(T=++u.frame,d=A-u.time*1e3,u.time=A=A/1e3,a+=y+(y>=s?4:s-y),w=1),S||(c=l(g)),w)for(f=0;f<o.length;f++)o[f](A,d,T,m)};return u={time:0,frame:0,tick:function(){x(!0)},deltaRatio:function(m){return d/(1e3/(m||60))},wake:function(){pf&&(!bh&&Lh()&&(Wi=bh=window,Oh=Wi.document||{},gi.gsap=Vt,(Wi.gsapVersions||(Wi.gsapVersions=[])).push(Vt.version),mf(To||Wi.GreenSockGlobals||!Wi.gsap&&Wi||{}),If.forEach(Df)),h=typeof requestAnimationFrame!="undefined"&&requestAnimationFrame,c&&u.sleep(),l=h||function(m){return setTimeout(m,a-u.time*1e3+1|0)},la=1,x(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(c),la=0,l=ca},lagSmoothing:function(m,p){e=m||1/0,t=Math.min(p||33,e)},fps:function(m){s=1e3/(m||240),a=u.time*1e3+s},add:function(m,p,S){var y=p?function(w,A,T,R){m(w,A,T,R),u.remove(y)}:m;return u.remove(m),o[S?"unshift":"push"](y),is(),y},remove:function(m,p){~(p=o.indexOf(m))&&o.splice(p,1)&&f>=p&&f--},_listeners:o},u})(),is=function(){return!la&&ai.wake()},Qe={},Lv=/^[\d.\-M][\d.\-,\s]/,Iv=/["']/g,Dv=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),n=i[0],s=1,a=i.length,o,c,l;s<a;s++)c=i[s],o=s!==a-1?c.lastIndexOf(","):c.length,l=c.substr(0,o),t[n]=isNaN(l)?l.replace(Iv,"").trim():+l,n=c.substr(o+1).trim();return t},Ov=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),n=e.indexOf("(",t);return e.substring(t,~n&&n<i?e.indexOf(")",i+1):i)},Fv=function(e){var t=(e+"").split("("),i=Qe[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[Dv(t[1])]:Ov(e).split(",").map(_f)):Qe._CE&&Lv.test(e)?Qe._CE("",e):i},Nf=function(e){return function(t){return 1-e(1-t)}},Uf=function r(e,t){for(var i=e._first,n;i;)i instanceof Ut?r(i,t):i.vars.yoyoEase&&(!i._yoyo||!i._repeat)&&i._yoyo!==t&&(i.timeline?r(i.timeline,t):(n=i._ease,i._ease=i._yEase,i._yEase=n,i._yoyo=t)),i=i._next},ur=function(e,t){return e&&(St(e)?e:Qe[e]||Fv(e))||t},mr=function(e,t,i,n){i===void 0&&(i=function(c){return 1-t(1-c)}),n===void 0&&(n=function(c){return c<.5?t(c*2)/2:1-t((1-c)*2)/2});var s={easeIn:t,easeOut:i,easeInOut:n},a;return Jt(e,function(o){Qe[o]=gi[o]=s,Qe[a=o.toLowerCase()]=i;for(var c in s)Qe[a+(c==="easeIn"?".in":c==="easeOut"?".out":".inOut")]=Qe[o+"."+c]=s[c]}),s},Bf=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},mh=function r(e,t,i){var n=t>=1?t:1,s=(i||(e?.3:.45))/(t<1?t:1),a=s/_h*(Math.asin(1/n)||0),o=function(h){return h===1?1:n*Math.pow(2,-10*h)*lv((h-a)*s)+1},c=e==="out"?o:e==="in"?function(l){return 1-o(1-l)}:Bf(o);return s=_h/s,c.config=function(l,h){return r(e,l,h)},c},gh=function r(e,t){t===void 0&&(t=1.70158);var i=function(a){return a?--a*a*((t+1)*a+t)+1:0},n=e==="out"?i:e==="in"?function(s){return 1-i(1-s)}:Bf(i);return n.config=function(s){return r(e,s)},n};Jt("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;mr(r+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});Qe.Linear.easeNone=Qe.none=Qe.Linear.easeIn;mr("Elastic",mh("in"),mh("out"),mh());(function(r,e){var t=1/e,i=2*t,n=2.5*t,s=function(o){return o<t?r*o*o:o<i?r*Math.pow(o-1.5/e,2)+.75:o<n?r*(o-=2.25/e)*o+.9375:r*Math.pow(o-2.625/e,2)+.984375};mr("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);mr("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});mr("Circ",function(r){return-(uf(1-r*r)-1)});mr("Sine",function(r){return r===1?1:-cv(r*av)+1});mr("Back",gh("in"),gh("out"),gh());Qe.SteppedEase=Qe.steps=gi.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,n=e+(t?0:1),s=t?1:0,a=1-ut;return function(o){return((n*ua(0,a,o)|0)+s)*i}}};Jr.ease=Qe["quad.out"];Jt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Nh+=r+","+r+"Params,"});Hh=function(e,t){this.id=ov++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Bh,this.set=t?t.getSetter:No},ha=(function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,ts(this,+t.duration,1,1),this.data=t.data,mt&&(this._ctx=mt,mt.data.push(this)),la||ai.wake()}var e=r.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,ts(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,n){if(is(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Fo(this,i),!s._dp||s.parent||Sf(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&Xi(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!n||this._initted&&Math.abs(this._zTime)===ut||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),xf(this,i,n)),this},e.time=function(i,n){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+sf(this))%(this._dur+this._rDelay)||(i?this._dur:0),n):this._time},e.totalProgress=function(i,n){return arguments.length?this.totalTime(this.totalDuration()*i,n):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(i,n){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+sf(this),n):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,n){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,n):this._repeat?es(this._tTime,s)+1:1},e.timeScale=function(i,n){if(!arguments.length)return this._rts===-ut?0:this._rts;if(this._rts===i)return this;var s=this.parent&&this._ts?Po(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-ut?0:this._rts,this.totalTime(ua(-Math.abs(this._delay),this.totalDuration(),s),n!==!1),Oo(this),gv(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(is(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==ut&&(this._tTime-=ut)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=i;var n=this.parent||this._dp;return n&&(n._sort||!this.parent)&&Xi(n,this,i-this._delay),this}return this._start},e.endTime=function(i){return this._start+(oi(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var n=this.parent||this._dp;return n?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Po(n.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=dv);var n=Bt;return Bt=i,kh(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),Bt=n,this},e.globalTime=function(i){for(var n=this,s=arguments.length?i:n.rawTime();n;)s=n._start+s/(Math.abs(n._ts)||1),n=n._dp;return!this.parent&&this._sat?this._sat.globalTime(i):s},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,af(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var n=this._time;return this._rDelay=i,af(this),n?this.time(n):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,n){return this.totalTime(Ai(this,i),oi(n))},e.restart=function(i,n){return this.play().totalTime(i?-this._delay:0,oi(n)),this._dur||(this._zTime=-ut),this},e.play=function(i,n){return i!=null&&this.seek(i,n),this.reversed(!1).paused(!1)},e.reverse=function(i,n){return i!=null&&this.seek(i||this.totalDuration(),n),this.reversed(!0).paused(!1)},e.pause=function(i,n){return i!=null&&this.seek(i,n),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-ut:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-ut,this},e.isActive=function(){var i=this.parent||this._dp,n=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=n&&s<this.endTime(!0)-ut)},e.eventCallback=function(i,n,s){var a=this.vars;return arguments.length>1?(n?(a[i]=n,s&&(a[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=n)):delete a[i],this):a[i]},e.then=function(i){var n=this;return new Promise(function(s){var a=St(i)?i:yf,o=function(){var l=n.then;n.then=null,St(a)&&(a=a(n))&&(a.then||a===n)&&(n.then=l),s(a),n.then=l};n._initted&&n.totalProgress()===1&&n._ts>=0||!n._tTime&&n._ts<0?o():n._prom=o})},e.kill=function(){ia(this)},r})();vi(ha.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-ut,_prom:0,_ps:!1,_rts:1});Ut=(function(r){hf(e,r);function e(i,n){var s;return i===void 0&&(i={}),s=r.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=oi(i.sortChildren),xt&&Xi(i.parent||xt,hn(s),n),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&Mf(hn(s),i.scrollTrigger),s}var t=e.prototype;return t.to=function(n,s,a){return sa(0,arguments,this),this},t.from=function(n,s,a){return sa(1,arguments,this),this},t.fromTo=function(n,s,a,o){return sa(2,arguments,this),this},t.set=function(n,s,a){return s.duration=0,s.parent=this,ra(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Tt(n,s,Ai(this,a),1),this},t.call=function(n,s,a){return Xi(this,Tt.delayedCall(0,n,s),a)},t.staggerTo=function(n,s,a,o,c,l,h){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=l,a.onCompleteParams=h,a.parent=this,new Tt(n,a,Ai(this,c)),this},t.staggerFrom=function(n,s,a,o,c,l,h){return a.runBackwards=1,ra(a).immediateRender=oi(a.immediateRender),this.staggerTo(n,s,a,o,c,l,h)},t.staggerFromTo=function(n,s,a,o,c,l,h,u){return o.startAt=a,ra(o).immediateRender=oi(o.immediateRender),this.staggerTo(n,s,o,c,l,h,u)},t.render=function(n,s,a){var o=this._time,c=this._dirty?this.totalDuration():this._tDur,l=this._dur,h=n<=0?0:Ct(n),u=this._zTime<0!=n<0&&(this._initted||!l),d,f,x,g,m,p,S,y,w,A,T,R;if(this!==xt&&h>c&&n>=0&&(h=c),h!==this._tTime||a||u){if(o!==this._time&&l&&(h+=this._time-o,n+=this._time-o),d=h,w=this._start,y=this._ts,p=!y,u&&(l||(o=this._zTime),(n||!s)&&(this._zTime=n)),this._repeat){if(T=this._yoyo,m=l+this._rDelay,this._repeat<-1&&n<0)return this.totalTime(m*100+n,s,a);if(d=Ct(h%m),h===c?(g=this._repeat,d=l):(A=Ct(h/m),g=~~A,g&&g===A&&(d=l,g--),d>l&&(d=l)),A=es(this._tTime,m),!o&&this._tTime&&A!==g&&this._tTime-A*m-this._dur<=0&&(A=g),T&&g&1&&(d=l-d,R=1),g!==A&&!this._lock){var N=T&&A&1,b=N===(T&&g&1);if(g<A&&(N=!N),o=N?0:h%l?l:h,this._lock=1,this.render(o||(R?0:Ct(g*m)),s,!l)._lock=0,this._tTime=h,!s&&this.parent&&mi(this,"onRepeat"),this.vars.repeatRefresh&&!R&&(this.invalidate()._lock=1),o&&o!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(l=this._dur,c=this._tDur,b&&(this._lock=2,o=N?l:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!R&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;Uf(this,R)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(S=yv(this,Ct(o),Ct(d)),S&&(h-=d-(d=S._start))),this._tTime=h,this._time=d,this._act=!y,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=n,o=0),!o&&h&&!s&&!A&&(mi(this,"onStart"),this._tTime!==h))return this;if(d>=o&&n>=0)for(f=this._first;f;){if(x=f._next,(f._act||d>=f._start)&&f._ts&&S!==f){if(f.parent!==this)return this.render(n,s,a);if(f.render(f._ts>0?(d-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(d-f._start)*f._ts,s,a),d!==this._time||!this._ts&&!p){S=0,x&&(h+=this._zTime=-ut);break}}f=x}else{f=this._last;for(var M=n<0?n:d;f;){if(x=f._prev,(f._act||M<=f._end)&&f._ts&&S!==f){if(f.parent!==this)return this.render(n,s,a);if(f.render(f._ts>0?(M-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(M-f._start)*f._ts,s,a||Bt&&kh(f)),d!==this._time||!this._ts&&!p){S=0,x&&(h+=this._zTime=M?-ut:ut);break}}f=x}}if(S&&!s&&(this.pause(),S.render(d>=o?0:-ut)._zTime=d>=o?1:-1,this._ts))return this._start=w,Oo(this),this.render(n,s,a);this._onUpdate&&!s&&mi(this,"onUpdate",!0),(h===c&&this._tTime>=this.totalDuration()||!h&&o)&&(w===this._start||Math.abs(y)!==Math.abs(this._ts))&&(this._lock||((n||!l)&&(h===c&&this._ts>0||!h&&this._ts<0)&&Nn(this,1),!s&&!(n<0&&!o)&&(h||o||!c)&&(mi(this,h===c&&n>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<c&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(n,s){var a=this;if(dn(s)||(s=Ai(this,s,n)),!(n instanceof ha)){if(Ht(n))return n.forEach(function(o){return a.add(o,s)}),this;if(It(n))return this.addLabel(n,s);if(St(n))n=Tt.delayedCall(0,n);else return this}return this!==n?Xi(this,n,s):this},t.getChildren=function(n,s,a,o){n===void 0&&(n=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-Ci);for(var c=[],l=this._first;l;)l._start>=o&&(l instanceof Tt?s&&c.push(l):(a&&c.push(l),n&&c.push.apply(c,l.getChildren(!0,s,a)))),l=l._next;return c},t.getById=function(n){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===n)return s[a]},t.remove=function(n){return It(n)?this.removeLabel(n):St(n)?this.killTweensOf(n):(n.parent===this&&Do(this,n),n===this._recent&&(this._recent=this._last),hr(this))},t.totalTime=function(n,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ct(ai.time-(this._ts>0?n/this._ts:(this.totalDuration()-n)/-this._ts))),r.prototype.totalTime.call(this,n,s),this._forcing=0,this):this._tTime},t.addLabel=function(n,s){return this.labels[n]=Ai(this,s),this},t.removeLabel=function(n){return delete this.labels[n],this},t.addPause=function(n,s,a){var o=Tt.delayedCall(0,s||ca,a);return o.data="isPause",this._hasPause=1,Xi(this,o,Ai(this,n))},t.removePause=function(n){var s=this._first;for(n=Ai(this,n);s;)s._start===n&&s.data==="isPause"&&Nn(s),s=s._next},t.killTweensOf=function(n,s,a){for(var o=this.getTweensOf(n,a),c=o.length;c--;)Dn!==o[c]&&o[c].kill(n,s);return this},t.getTweensOf=function(n,s){for(var a=[],o=Pi(n),c=this._first,l=dn(s),h;c;)c instanceof Tt?fv(c._targets,o)&&(l?(!Dn||c._initted&&c._ts)&&c.globalTime(0)<=s&&c.globalTime(c.totalDuration())>s:!s||c.isActive())&&a.push(c):(h=c.getTweensOf(o,s)).length&&a.push.apply(a,h),c=c._next;return a},t.tweenTo=function(n,s){s=s||{};var a=this,o=Ai(a,n),c=s,l=c.startAt,h=c.onStart,u=c.onStartParams,d=c.immediateRender,f,x=Tt.to(a,vi({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(l&&"time"in l?l.time:a._time))/a.timeScale())||ut,onStart:function(){if(a.pause(),!f){var m=s.duration||Math.abs((o-(l&&"time"in l?l.time:a._time))/a.timeScale());x._dur!==m&&ts(x,m,0,1).render(x._time,!0,!0),f=1}h&&h.apply(x,u||[])}},s));return d?x.render(0):x},t.tweenFromTo=function(n,s,a){return this.tweenTo(s,vi({startAt:{time:Ai(this,n)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(n){return n===void 0&&(n=this._time),of(this,Ai(this,n))},t.previousLabel=function(n){return n===void 0&&(n=this._time),of(this,Ai(this,n),1)},t.currentLabel=function(n){return arguments.length?this.seek(n,!0):this.previousLabel(this._time+ut)},t.shiftChildren=function(n,s,a){a===void 0&&(a=0);for(var o=this._first,c=this.labels,l;o;)o._start>=a&&(o._start+=n,o._end+=n),o=o._next;if(s)for(l in c)c[l]>=a&&(c[l]+=n);return hr(this)},t.invalidate=function(n){var s=this._first;for(this._lock=0;s;)s.invalidate(n),s=s._next;return r.prototype.invalidate.call(this,n)},t.clear=function(n){n===void 0&&(n=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),n&&(this.labels={}),hr(this)},t.totalDuration=function(n){var s=0,a=this,o=a._last,c=Ci,l,h,u;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-n:n));if(a._dirty){for(u=a.parent;o;)l=o._prev,o._dirty&&o.totalDuration(),h=o._start,h>c&&a._sort&&o._ts&&!a._lock?(a._lock=1,Xi(a,o,h-o._delay,1)._lock=0):c=h,h<0&&o._ts&&(s-=h,(!u&&!a._dp||u&&u.smoothChildTiming)&&(a._start+=h/a._ts,a._time-=h,a._tTime-=h),a.shiftChildren(-h,!1,-1/0),c=0),o._end>s&&o._ts&&(s=o._end),o=l;ts(a,a===xt&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(n){if(xt._ts&&(xf(xt,Po(n,xt)),vf=ai.frame),ai.frame>=nf){nf+=ci.autoSleep||120;var s=xt._first;if((!s||!s._ts)&&ci.autoSleep&&ai._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||ai.sleep()}}},e})(ha);vi(Ut.prototype,{_lock:0,_hasPause:0,_forcing:0});Nv=function(e,t,i,n,s,a,o){var c=new Qt(this._pt,e,t,0,1,qh,null,s),l=0,h=0,u,d,f,x,g,m,p,S;for(c.b=i,c.e=n,i+="",n+="",(p=~n.indexOf("random("))&&(n=ns(n)),a&&(S=[i,n],a(S,e,t),i=S[0],n=S[1]),d=i.match(dh)||[];u=dh.exec(n);)x=u[0],g=n.substring(l,u.index),f?f=(f+1)%5:g.substr(-5)==="rgba("&&(f=1),x!==d[h++]&&(m=parseFloat(d[h-1])||0,c._pt={_next:c._pt,p:g||h===1?g:",",s:m,c:x.charAt(1)==="="?pr(m,x)-m:parseFloat(x)-m,m:f&&f<4?Math.round:0},l=dh.lastIndex);return c.c=l<n.length?n.substring(l,n.length):"",c.fp=o,(Dh.test(n)||p)&&(c.e=0),this._pt=c,c},Vh=function(e,t,i,n,s,a,o,c,l,h){St(n)&&(n=n(s||0,e,a));var u=e[t],d=i!=="get"?i:St(u)?l?e[t.indexOf("set")||!St(e["get"+t.substr(3)])?t:"get"+t.substr(3)](l):e[t]():u,f=St(u)?l?Hv:Hf:Xh,x;if(It(n)&&(~n.indexOf("random(")&&(n=ns(n)),n.charAt(1)==="="&&(x=pr(d,n)+(kt(d)||0),(x||x===0)&&(n=x))),!h||d!==n||Ch)return!isNaN(d*n)&&n!==""?(x=new Qt(this._pt,e,t,+d||0,n-(d||0),typeof u=="boolean"?Gv:Vf,0,f),l&&(x.fp=l),o&&x.modifier(o,this,e),this._pt=x):(!u&&!(t in e)&&Io(t,n),Nv.call(this,e,t,d,n,f,c||ci.stringFilter,l))},Uv=function(e,t,i,n,s){if(St(e)&&(e=aa(e,s,t,i,n)),!qi(e)||e.style&&e.nodeType||Ht(e)||df(e))return It(e)?aa(e,s,t,i,n):e;var a={},o;for(o in e)a[o]=aa(e[o],s,t,i,n);return a},Gh=function(e,t,i,n,s,a){var o,c,l,h;if(si[e]&&(o=new si[e]).init(s,o.rawVars?t[e]:Uv(t[e],n,s,a,i),i,n,a)!==!1&&(i._pt=c=new Qt(i._pt,s,e,0,1,o.render,o,0,o.priority),i!==Kr))for(l=i._ptLookup[i._targets.indexOf(s)],h=o._props.length;h--;)l[o._props[h]]=c;return o},Wh=function r(e,t,i){var n=e.vars,s=n.ease,a=n.startAt,o=n.immediateRender,c=n.lazy,l=n.onUpdate,h=n.runBackwards,u=n.yoyoEase,d=n.keyframes,f=n.autoRevert,x=e._dur,g=e._startAt,m=e._targets,p=e.parent,S=p&&p.data==="nested"?p.vars.targets:m,y=e._overwrite==="auto"&&!Rh,w=e.timeline,A,T,R,N,b,M,O,z,G,K,J,j,ce;if(w&&(!d||!s)&&(s="none"),e._ease=ur(s,Jr.ease),e._yEase=u?Nf(ur(u===!0?s:u,Jr.ease)):0,u&&e._yoyo&&!e._repeat&&(u=e._yEase,e._yEase=e._ease,e._ease=u),e._from=!w&&!!n.runBackwards,!w||d&&!n.stagger){if(z=m[0]?Fn(m[0]).harness:0,j=z&&n[z.prop],A=Co(n,Fh),g&&(g._zTime<0&&g.progress(1),t<0&&h&&o&&!f?g.render(-1,!0):g.revert(h&&x?Mo:uv),g._lazy=0),a){if(Nn(e._startAt=Tt.set(m,vi({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!g&&oi(c),startAt:null,delay:0,onUpdate:l&&function(){return mi(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Bt||!o&&!f)&&e._startAt.revert(Mo),o&&x&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(h&&x&&!g){if(t&&(o=!1),R=vi({overwrite:!1,data:"isFromStart",lazy:o&&!g&&oi(c),immediateRender:o,stagger:0,parent:p},A),j&&(R[z.prop]=j),Nn(e._startAt=Tt.set(m,R)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Bt?e._startAt.revert(Mo):e._startAt.render(-1,!0)),e._zTime=t,!o)r(e._startAt,ut,ut);else if(!t)return}for(e._pt=e._ptCache=0,c=x&&oi(c)||c&&!x,T=0;T<m.length;T++){if(b=m[T],O=b._gsap||Uh(m)[T]._gsap,e._ptLookup[T]=K={},Sh[O.id]&&On.length&&Ao(),J=S===m?T:S.indexOf(b),z&&(G=new z).init(b,j||A,e,J,S)!==!1&&(e._pt=N=new Qt(e._pt,b,G.name,0,1,G.render,G,0,G.priority),G._props.forEach(function(X){K[X]=N}),G.priority&&(M=1)),!z||j)for(R in A)si[R]&&(G=Gh(R,A,e,J,b,S))?G.priority&&(M=1):K[R]=N=Vh.call(e,b,R,"get",A[R],J,S,0,n.stringFilter);e._op&&e._op[T]&&e.kill(b,e._op[T]),y&&e._pt&&(Dn=e,xt.killTweensOf(b,K,e.globalTime(t)),ce=!e.parent,Dn=0),e._pt&&c&&(Sh[O.id]=1)}M&&jh(e),e._onInit&&e._onInit(e)}e._onUpdate=l,e._initted=(!e._op||e._pt)&&!ce,d&&t<=0&&w.render(Ci,!0,!0)},Bv=function(e,t,i,n,s,a,o,c){var l=(e._pt&&e._ptCache||(e._ptCache={}))[t],h,u,d,f;if(!l)for(l=e._ptCache[t]=[],d=e._ptLookup,f=e._targets.length;f--;){if(h=d[f][t],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==t&&h.fp!==t;)h=h._next;if(!h)return Ch=1,e.vars[t]="+=0",Wh(e,o),Ch=0,c?oa(t+" not eligible for reset"):1;l.push(h)}for(f=l.length;f--;)u=l[f],h=u._pt||u,h.s=(n||n===0)&&!s?n:h.s+(n||0)+a*h.c,h.c=i-h.s,u.e&&(u.e=Mt(i)+kt(u.e)),u.b&&(u.b=h.s+kt(u.b))},kv=function(e,t){var i=e[0]?Fn(e[0]).harness:0,n=i&&i.aliases,s,a,o,c;if(!n)return t;s=Qr({},t);for(a in n)if(a in s)for(c=n[a].split(","),o=c.length;o--;)s[c[o]]=s[a];return s},zv=function(e,t,i,n){var s=t.ease||n||"power1.inOut",a,o;if(Ht(t))o=i[e]||(i[e]=[]),t.forEach(function(c,l){return o.push({t:l/(t.length-1)*100,v:c,e:s})});else for(a in t)o=i[a]||(i[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:s})},aa=function(e,t,i,n,s){return St(e)?e.call(t,i,n,s):It(e)&&~e.indexOf("random(")?ns(e):e},kf=Nh+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",zf={};Jt(kf+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return zf[r]=1});Tt=(function(r){hf(e,r);function e(i,n,s,a){var o;typeof n=="number"&&(s.duration=n,n=s,s=null),o=r.call(this,a?n:ra(n))||this;var c=o.vars,l=c.duration,h=c.delay,u=c.immediateRender,d=c.stagger,f=c.overwrite,x=c.keyframes,g=c.defaults,m=c.scrollTrigger,p=c.yoyoEase,S=n.parent||xt,y=(Ht(i)||df(i)?dn(i[0]):"length"in n)?[i]:Pi(i),w,A,T,R,N,b,M,O;if(o._targets=y.length?Uh(y):oa("GSAP target "+i+" not found. https://gsap.com",!ci.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=f,x||d||So(l)||So(h)){if(n=o.vars,w=o.timeline=new Ut({data:"nested",defaults:g||{},targets:S&&S.data==="nested"?S.vars.targets:y}),w.kill(),w.parent=w._dp=hn(o),w._start=0,d||So(l)||So(h)){if(R=y.length,M=d&&Af(d),qi(d))for(N in d)~kf.indexOf(N)&&(O||(O={}),O[N]=d[N]);for(A=0;A<R;A++)T=Co(n,zf),T.stagger=0,p&&(T.yoyoEase=p),O&&Qr(T,O),b=y[A],T.duration=+aa(l,hn(o),A,b,y),T.delay=(+aa(h,hn(o),A,b,y)||0)-o._delay,!d&&R===1&&T.delay&&(o._delay=h=T.delay,o._start+=h,T.delay=0),w.to(b,T,M?M(A,b,y):0),w._ease=Qe.none;w.duration()?l=h=0:o.timeline=0}else if(x){ra(vi(w.vars.defaults,{ease:"none"})),w._ease=ur(x.ease||n.ease||"none");var z=0,G,K,J;if(Ht(x))x.forEach(function(j){return w.to(y,j,">")}),w.duration();else{T={};for(N in x)N==="ease"||N==="easeEach"||zv(N,x[N],T,x.easeEach);for(N in T)for(G=T[N].sort(function(j,ce){return j.t-ce.t}),z=0,A=0;A<G.length;A++)K=G[A],J={ease:K.e,duration:(K.t-(A?G[A-1].t:0))/100*l},J[N]=K.v,w.to(y,J,z),z+=J.duration;w.duration()<l&&w.to({},{duration:l-w.duration()})}}l||o.duration(l=w.duration())}else o.timeline=0;return f===!0&&!Rh&&(Dn=hn(o),xt.killTweensOf(y),Dn=0),Xi(S,hn(o),s),n.reversed&&o.reverse(),n.paused&&o.paused(!0),(u||!l&&!x&&o._start===Ct(S._time)&&oi(u)&&vv(hn(o))&&S.data!=="nested")&&(o._tTime=-ut,o.render(Math.max(0,-h)||0)),m&&Mf(hn(o),m),o}var t=e.prototype;return t.render=function(n,s,a){var o=this._time,c=this._tDur,l=this._dur,h=n<0,u=n>c-ut&&!h?c:n<ut?0:n,d,f,x,g,m,p,S,y,w;if(!l)_v(this,n,s,a);else if(u!==this._tTime||!n||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(d=u,y=this.timeline,this._repeat){if(g=l+this._rDelay,this._repeat<-1&&h)return this.totalTime(g*100+n,s,a);if(d=Ct(u%g),u===c?(x=this._repeat,d=l):(m=Ct(u/g),x=~~m,x&&x===m?(d=l,x--):d>l&&(d=l)),p=this._yoyo&&x&1,p&&(w=this._yEase,d=l-d),m=es(this._tTime,g),d===o&&!a&&this._initted&&x===m)return this._tTime=u,this;x!==m&&(y&&this._yEase&&Uf(y,p),this.vars.repeatRefresh&&!p&&!this._lock&&d!==g&&this._initted&&(this._lock=a=1,this.render(Ct(g*x),!0).invalidate()._lock=0))}if(!this._initted){if(wf(this,h?n:d,a,s,u))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&x!==m))return this;if(l!==this._dur)return this.render(n,s,a)}if(this._tTime=u,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=S=(w||this._ease)(d/l),this._from&&(this.ratio=S=1-S),!o&&u&&!s&&!m&&(mi(this,"onStart"),this._tTime!==u))return this;for(f=this._pt;f;)f.r(S,f.d),f=f._next;y&&y.render(n<0?n:y._dur*y._ease(d/this._dur),s,a)||this._startAt&&(this._zTime=n),this._onUpdate&&!s&&(h&&Mh(this,n,s,a),mi(this,"onUpdate")),this._repeat&&x!==m&&this.vars.onRepeat&&!s&&this.parent&&mi(this,"onRepeat"),(u===this._tDur||!u)&&this._tTime===u&&(h&&!this._onUpdate&&Mh(this,n,!0,!0),(n||!l)&&(u===this._tDur&&this._ts>0||!u&&this._ts<0)&&Nn(this,1),!s&&!(h&&!o)&&(u||o||p)&&(mi(this,u===c?"onComplete":"onReverseComplete",!0),this._prom&&!(u<c&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(n){return(!n||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(n),r.prototype.invalidate.call(this,n)},t.resetTo=function(n,s,a,o,c){la||ai.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||Wh(this,l),h=this._ease(l/this._dur),Bv(this,n,s,a,o,h,l,c)?this.resetTo(n,s,a,o,1):(Fo(this,0),this.parent||bf(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(n,s){if(s===void 0&&(s="all"),!n&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?ia(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Bt),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(n,s,Dn&&Dn.vars.overwrite!==!0)._first||ia(this),this.parent&&a!==this.timeline.totalDuration()&&ts(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,c=n?Pi(n):o,l=this._ptLookup,h=this._pt,u,d,f,x,g,m,p;if((!s||s==="all")&&mv(o,c))return s==="all"&&(this._pt=0),ia(this);for(u=this._op=this._op||[],s!=="all"&&(It(s)&&(g={},Jt(s,function(S){return g[S]=1}),s=g),s=kv(o,s)),p=o.length;p--;)if(~c.indexOf(o[p])){d=l[p],s==="all"?(u[p]=s,x=d,f={}):(f=u[p]=u[p]||{},x=s);for(g in x)m=d&&d[g],m&&((!("kill"in m.d)||m.d.kill(g)===!0)&&Do(this,m,"_pt"),delete d[g]),f!=="all"&&(f[g]=1)}return this._initted&&!this._pt&&h&&ia(this),this},e.to=function(n,s){return new e(n,s,arguments[2])},e.from=function(n,s){return sa(1,arguments)},e.delayedCall=function(n,s,a,o){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:n,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(n,s,a){return sa(2,arguments)},e.set=function(n,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(n,s)},e.killTweensOf=function(n,s,a){return xt.killTweensOf(n,s,a)},e})(ha);vi(Tt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Jt("staggerTo,staggerFrom,staggerFromTo",function(r){Tt[r]=function(){var e=new Ut,t=Eh.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});Xh=function(e,t,i){return e[t]=i},Hf=function(e,t,i){return e[t](i)},Hv=function(e,t,i,n){return e[t](n.fp,i)},Vv=function(e,t,i){return e.setAttribute(t,i)},No=function(e,t){return St(e[t])?Hf:Lo(e[t])&&e.setAttribute?Vv:Xh},Vf=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},Gv=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},qh=function(e,t){var i=t._pt,n="";if(!e&&t.b)n=t.b;else if(e===1&&t.e)n=t.e;else{for(;i;)n=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+n,i=i._next;n+=t.c}t.set(t.t,t.p,n,t)},Yh=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},Wv=function(e,t,i,n){for(var s=this._pt,a;s;)a=s._next,s.p===n&&s.modifier(e,t,i),s=a},Xv=function(e){for(var t=this._pt,i,n;t;)n=t._next,t.p===e&&!t.op||t.op===e?Do(this,t,"_pt"):t.dep||(i=1),t=n;return!i},qv=function(e,t,i,n){n.mSet(e,t,n.m.call(n.tween,i,n.mt),n)},jh=function(e){for(var t=e._pt,i,n,s,a;t;){for(i=t._next,n=s;n&&n.pr>t.pr;)n=n._next;(t._prev=n?n._prev:a)?t._prev._next=t:s=t,(t._next=n)?n._prev=t:a=t,t=i}e._pt=s},Qt=(function(){function r(t,i,n,s,a,o,c,l,h){this.t=i,this.s=s,this.c=a,this.p=n,this.r=o||Vf,this.d=c||this,this.set=l||Xh,this.pr=h||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(i,n,s){this.mSet=this.mSet||this.set,this.set=qv,this.m=i,this.mt=s,this.tween=n},r})();Jt(Nh+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return Fh[r]=1});gi.TweenMax=gi.TweenLite=Tt;gi.TimelineLite=gi.TimelineMax=Ut;xt=new Ut({sortChildren:!1,defaults:Jr,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});ci.stringFilter=zh;dr=[],Eo={},Yv=[],lf=0,jv=0,vh=function(e){return(Eo[e]||Yv).map(function(t){return t()})},Ph=function(){var e=Date.now(),t=[];e-lf>2&&(vh("matchMediaInit"),dr.forEach(function(i){var n=i.queries,s=i.conditions,a,o,c,l;for(o in n)a=Wi.matchMedia(n[o]).matches,a&&(c=1),a!==s[o]&&(s[o]=a,l=1);l&&(i.revert(),c&&t.push(i))}),vh("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i,function(n){return i.add(null,n)})}),lf=e,vh("matchMedia"))},Gf=(function(){function r(t,i){this.selector=i&&Th(i),this.data=[],this._r=[],this.isReverted=!1,this.id=jv++,t&&this.add(t)}var e=r.prototype;return e.add=function(i,n,s){St(i)&&(s=n,n=i,i=St);var a=this,o=function(){var l=mt,h=a.selector,u;return l&&l!==a&&l.data.push(a),s&&(a.selector=Th(s)),mt=a,u=n.apply(a,arguments),St(u)&&a._r.push(u),mt=l,a.selector=h,a.isReverted=!1,u};return a.last=o,i===St?o(a,function(c){return a.add(null,c)}):i?a[i]=o:o},e.ignore=function(i){var n=mt;mt=null,i(this),mt=n},e.getTweens=function(){var i=[];return this.data.forEach(function(n){return n instanceof r?i.push.apply(i,n.getTweens()):n instanceof Tt&&!(n.parent&&n.parent.data==="nested")&&i.push(n)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,n){var s=this;if(i?(function(){for(var o=s.getTweens(),c=s.data.length,l;c--;)l=s.data[c],l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(h){return o.splice(o.indexOf(h),1)}));for(o.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,u){return u.g-h.g||-1/0}).forEach(function(h){return h.t.revert(i)}),c=s.data.length;c--;)l=s.data[c],l instanceof Ut?l.data!=="nested"&&(l.scrollTrigger&&l.scrollTrigger.revert(),l.kill()):!(l instanceof Tt)&&l.revert&&l.revert(i);s._r.forEach(function(h){return h(i,s)}),s.isReverted=!0})():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),n)for(var a=dr.length;a--;)dr[a].id===this.id&&dr.splice(a,1)},e.revert=function(i){this.kill(i||{})},r})(),Zv=(function(){function r(t){this.contexts=[],this.scope=t,mt&&mt.data.push(this)}var e=r.prototype;return e.add=function(i,n,s){qi(i)||(i={matches:i});var a=new Gf(0,s||this.scope),o=a.conditions={},c,l,h;mt&&!a.selector&&(a.selector=mt.selector),this.contexts.push(a),n=a.add("onMatch",n),a.queries=i;for(l in i)l==="all"?h=1:(c=Wi.matchMedia(i[l]),c&&(dr.indexOf(a)<0&&dr.push(a),(o[l]=c.matches)&&(h=1),c.addListener?c.addListener(Ph):c.addEventListener("change",Ph)));return h&&n(a,function(u){return a.add(null,u)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(n){return n.kill(i,!0)})},r})(),Ro={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(n){return Df(n)})},timeline:function(e){return new Ut(e)},getTweensOf:function(e,t){return xt.getTweensOf(e,t)},getProperty:function(e,t,i,n){It(e)&&(e=Pi(e)[0]);var s=Fn(e||{}).get,a=i?yf:_f;return i==="native"&&(i=""),e&&(t?a((si[t]&&si[t].get||s)(e,t,i,n)):function(o,c,l){return a((si[o]&&si[o].get||s)(e,o,c,l))})},quickSetter:function(e,t,i){if(e=Pi(e),e.length>1){var n=e.map(function(h){return Vt.quickSetter(h,t,i)}),s=n.length;return function(h){for(var u=s;u--;)n[u](h)}}e=e[0]||{};var a=si[t],o=Fn(e),c=o.harness&&(o.harness.aliases||{})[t]||t,l=a?function(h){var u=new a;Kr._pt=0,u.init(e,i?h+i:h,Kr,0,[e]),u.render(1,u),Kr._pt&&Yh(1,Kr)}:o.set(e,c);return a?l:function(h){return l(e,c,i?h+i:h,o,1)}},quickTo:function(e,t,i){var n,s=Vt.to(e,vi((n={},n[t]="+=0.1",n.paused=!0,n.stagger=0,n),i||{})),a=function(c,l,h){return s.resetTo(t,c,l,h)};return a.tween=s,a},isTweening:function(e){return xt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=ur(e.ease,Jr.ease)),rf(Jr,e||{})},config:function(e){return rf(ci,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,n=e.plugins,s=e.defaults,a=e.extendTimeline;(n||"").split(",").forEach(function(o){return o&&!si[o]&&!gi[o]&&oa(t+" effect requires "+o+" plugin.")}),fh[t]=function(o,c,l){return i(Pi(o),vi(c||{},s),l)},a&&(Ut.prototype[t]=function(o,c,l){return this.add(fh[t](o,qi(c)?c:(l=c)&&{},this),l)})},registerEase:function(e,t){Qe[e]=ur(t)},parseEase:function(e,t){return arguments.length?ur(e,t):Qe},getById:function(e){return xt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new Ut(e),n,s;for(i.smoothChildTiming=oi(e.smoothChildTiming),xt.remove(i),i._dp=0,i._time=i._tTime=xt._time,n=xt._first;n;)s=n._next,(t||!(!n._dur&&n instanceof Tt&&n.vars.onComplete===n._targets[0]))&&Xi(i,n,n._start-n._delay),n=s;return Xi(xt,i,0),i},context:function(e,t){return e?new Gf(e,t):mt},matchMedia:function(e){return new Zv(e)},matchMediaRefresh:function(){return dr.forEach(function(e){var t=e.conditions,i,n;for(n in t)t[n]&&(t[n]=!1,i=1);i&&e.revert()})||Ph()},addEventListener:function(e,t){var i=Eo[e]||(Eo[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=Eo[e],n=i&&i.indexOf(t);n>=0&&i.splice(n,1)},utils:{wrap:Av,wrapYoyo:Cv,distribute:Af,random:Pf,snap:Cf,normalize:Tv,getUnit:kt,clamp:Sv,splitColor:Of,toArray:Pi,selector:Th,mapRange:Lf,pipe:wv,unitize:Ev,interpolate:Pv,shuffle:Tf},install:mf,effects:fh,ticker:ai,updateRoot:Ut.updateRoot,plugins:si,globalTimeline:xt,core:{PropTween:Qt,globals:gf,Tween:Tt,Timeline:Ut,Animation:ha,getCache:Fn,_removeLinkedListItem:Do,reverting:function(){return Bt},context:function(e){return e&&mt&&(mt.data.push(e),e._ctx=mt),mt},suppressOverwrites:function(e){return Rh=e}}};Jt("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Ro[r]=Tt[r]});ai.add(Ut.updateRoot);Kr=Ro.to({},{duration:0});$v=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},Kv=function(e,t){var i=e._targets,n,s,a;for(n in t)for(s=i.length;s--;)a=e._ptLookup[s][n],a&&(a=a.d)&&(a._pt&&(a=$v(a,n)),a&&a.modifier&&a.modifier(t[n],e,i[s],n))},xh=function(e,t){return{name:e,headless:1,rawVars:1,init:function(n,s,a){a._onInit=function(o){var c,l;if(It(s)&&(c={},Jt(s,function(h){return c[h]=1}),s=c),t){c={};for(l in s)c[l]=t(s[l]);s=c}Kv(o,s)}}}},Vt=Ro.registerPlugin({name:"attr",init:function(e,t,i,n,s){var a,o,c;this.tween=i;for(a in t)c=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(c||0)+"",t[a],n,s,0,0,a),o.op=a,o.b=c,this._props.push(a)},render:function(e,t){for(var i=t._pt;i;)Bt?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",headless:1,init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},xh("roundProps",Ah),xh("modifiers"),xh("snap",Cf))||Ro;Tt.version=Ut.version=Vt.version="3.13.0";pf=1;Lh()&&is();Jv=Qe.Power0,Qv=Qe.Power1,ex=Qe.Power2,tx=Qe.Power3,ix=Qe.Power4,nx=Qe.Linear,rx=Qe.Quad,sx=Qe.Cubic,ax=Qe.Quart,ox=Qe.Quint,cx=Qe.Strong,lx=Qe.Elastic,hx=Qe.Back,ux=Qe.SteppedEase,dx=Qe.Bounce,fx=Qe.Sine,px=Qe.Expo,mx=Qe.Circ});var Wf,Bn,ss,tu,_r,gx,Xf,iu,vx,pn,xr,as,rs,qf,nu,xx,_x,Yi,Kh,yx,bx,Sx,ep,tp,Mx,wx,Ex,Tx,Ax,Cx,_t,li,Px,ip,Rx,np,rp,Jh,Ri,Yf,os,Qh,jf,Zf,sp,ap,yr,kn,$f,Lx,zn,fn,Ix,Kf,Dx,Ox,Uo,fa,op,cp,Jf,ru,eu,pa,Bo,$h,Fx,gr,da,vr,lp,Nx,Ux,Qf,Bx,su,hp=Zt(()=>{Zh();vx=function(){return typeof window!="undefined"},pn={},xr=180/Math.PI,as=Math.PI/180,rs=Math.atan2,qf=1e8,nu=/([A-Z])/g,xx=/(left|right|width|margin|padding|x)/i,_x=/[\s,\(]\S/,Yi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Kh=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},yx=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},bx=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Sx=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},ep=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},tp=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},Mx=function(e,t,i){return e.style[t]=i},wx=function(e,t,i){return e.style.setProperty(t,i)},Ex=function(e,t,i){return e._gsap[t]=i},Tx=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},Ax=function(e,t,i,n,s){var a=e._gsap;a.scaleX=a.scaleY=i,a.renderTransform(s,a)},Cx=function(e,t,i,n,s){var a=e._gsap;a[t]=i,a.renderTransform(s,a)},_t="transform",li=_t+"Origin",Px=function r(e,t){var i=this,n=this.target,s=n.style,a=n._gsap;if(e in pn&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Yi[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return i.tfm[o]=fn(n,o)}):this.tfm[e]=a.x?a[e]:fn(n,e),e===li&&(this.tfm.zOrigin=a.zOrigin);else return Yi.transform.split(",").forEach(function(o){return r.call(i,o,t)});if(this.props.indexOf(_t)>=0)return;a.svg&&(this.svgo=n.getAttribute("data-svg-origin"),this.props.push(li,t,"")),e=_t}(s||t)&&this.props.push(e,t,s[e])},ip=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},Rx=function(){var e=this.props,t=this.target,i=t.style,n=t._gsap,s,a;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?i[e[s]]=e[s+2]:i.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(nu,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)n[a]=this.tfm[a];n.svg&&(n.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=iu(),(!s||!s.isStart)&&!i[_t]&&(ip(i),n.zOrigin&&i[li]&&(i[li]+=" "+n.zOrigin+"px",n.zOrigin=0,n.renderTransform()),n.uncache=1)}},np=function(e,t){var i={target:e,props:[],revert:Rx,save:Px};return e._gsap||Vt.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(n){return i.save(n)}),i},Jh=function(e,t){var i=Bn.createElementNS?Bn.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Bn.createElement(e);return i&&i.style?i:Bn.createElement(e)},Ri=function r(e,t,i){var n=getComputedStyle(e);return n[t]||n.getPropertyValue(t.replace(nu,"-$1").toLowerCase())||n.getPropertyValue(t)||!i&&r(e,os(t)||t,1)||""},Yf="O,Moz,ms,Ms,Webkit".split(","),os=function(e,t,i){var n=t||_r,s=n.style,a=5;if(e in s&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(Yf[a]+e in s););return a<0?null:(a===3?"ms":a>=0?Yf[a]:"")+e},Qh=function(){vx()&&window.document&&(Wf=window,Bn=Wf.document,ss=Bn.documentElement,_r=Jh("div")||{style:{}},gx=Jh("div"),_t=os(_t),li=_t+"Origin",_r.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",rp=!!os("perspective"),iu=Vt.core.reverting,tu=1)},jf=function(e){var t=e.ownerSVGElement,i=Jh("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=e.cloneNode(!0),s;n.style.display="block",i.appendChild(n),ss.appendChild(i);try{s=n.getBBox()}catch{}return i.removeChild(n),ss.removeChild(i),s},Zf=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},sp=function(e){var t,i;try{t=e.getBBox()}catch{t=jf(e),i=1}return t&&(t.width||t.height)||i||(t=jf(e)),t&&!t.width&&!t.x&&!t.y?{x:+Zf(e,["x","cx","x1"])||0,y:+Zf(e,["y","cy","y1"])||0,width:0,height:0}:t},ap=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&sp(e))},yr=function(e,t){if(t){var i=e.style,n;t in pn&&t!==li&&(t=_t),i.removeProperty?(n=t.substr(0,2),(n==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(n==="--"?t:t.replace(nu,"-$1").toLowerCase())):i.removeAttribute(t)}},kn=function(e,t,i,n,s,a){var o=new Qt(e._pt,t,i,0,1,a?tp:ep);return e._pt=o,o.b=n,o.e=s,e._props.push(i),o},$f={deg:1,rad:1,turn:1},Lx={grid:1,flex:1},zn=function r(e,t,i,n){var s=parseFloat(i)||0,a=(i+"").trim().substr((s+"").length)||"px",o=_r.style,c=xx.test(t),l=e.tagName.toLowerCase()==="svg",h=(l?"client":"offset")+(c?"Width":"Height"),u=100,d=n==="px",f=n==="%",x,g,m,p;if(n===a||!s||$f[n]||$f[a])return s;if(a!=="px"&&!d&&(s=r(e,t,i,"px")),p=e.getCTM&&ap(e),(f||a==="%")&&(pn[t]||~t.indexOf("adius")))return x=p?e.getBBox()[c?"width":"height"]:e[h],Mt(f?s/x*u:s/100*x);if(o[c?"width":"height"]=u+(d?a:n),g=n!=="rem"&&~t.indexOf("adius")||n==="em"&&e.appendChild&&!l?e:e.parentNode,p&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===Bn||!g.appendChild)&&(g=Bn.body),m=g._gsap,m&&f&&m.width&&c&&m.time===ai.time&&!m.uncache)return Mt(s/m.width*u);if(f&&(t==="height"||t==="width")){var S=e.style[t];e.style[t]=u+n,x=e[h],S?e.style[t]=S:yr(e,t)}else(f||a==="%")&&!Lx[Ri(g,"display")]&&(o.position=Ri(e,"position")),g===e&&(o.position="static"),g.appendChild(_r),x=_r[h],g.removeChild(_r),o.position="absolute";return c&&f&&(m=Fn(g),m.time=ai.time,m.width=g[h]),Mt(d?x*s/u:x&&s?u/x*s:0)},fn=function(e,t,i,n){var s;return tu||Qh(),t in Yi&&t!=="transform"&&(t=Yi[t],~t.indexOf(",")&&(t=t.split(",")[0])),pn[t]&&t!=="transform"?(s=pa(e,n),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Bo(Ri(e,li))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||n||~(s+"").indexOf("calc("))&&(s=Uo[t]&&Uo[t](e,t,i)||Ri(e,t)||Bh(e,t)||(t==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?zn(e,t,s,i)+i:s},Ix=function(e,t,i,n){if(!i||i==="none"){var s=os(t,e,1),a=s&&Ri(e,s,1);a&&a!==i?(t=s,i=a):t==="borderColor"&&(i=Ri(e,"borderTopColor"))}var o=new Qt(this._pt,e.style,t,0,1,qh),c=0,l=0,h,u,d,f,x,g,m,p,S,y,w,A;if(o.b=i,o.e=n,i+="",n+="",n.substring(0,6)==="var(--"&&(n=Ri(e,n.substring(4,n.indexOf(")")))),n==="auto"&&(g=e.style[t],e.style[t]=n,n=Ri(e,t)||n,g?e.style[t]=g:yr(e,t)),h=[i,n],zh(h),i=h[0],n=h[1],d=i.match(fr)||[],A=n.match(fr)||[],A.length){for(;u=fr.exec(n);)m=u[0],S=n.substring(c,u.index),x?x=(x+1)%5:(S.substr(-5)==="rgba("||S.substr(-5)==="hsla(")&&(x=1),m!==(g=d[l++]||"")&&(f=parseFloat(g)||0,w=g.substr((f+"").length),m.charAt(1)==="="&&(m=pr(f,m)+w),p=parseFloat(m),y=m.substr((p+"").length),c=fr.lastIndex-y.length,y||(y=y||ci.units[t]||w,c===n.length&&(n+=y,o.e+=y)),w!==y&&(f=zn(e,t,g,y)||0),o._pt={_next:o._pt,p:S||l===1?S:",",s:f,c:p-f,m:x&&x<4||t==="zIndex"?Math.round:0});o.c=c<n.length?n.substring(c,n.length):""}else o.r=t==="display"&&n==="none"?tp:ep;return Dh.test(n)&&(o.e=0),this._pt=o,o},Kf={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Dx=function(e){var t=e.split(" "),i=t[0],n=t[1]||"50%";return(i==="top"||i==="bottom"||n==="left"||n==="right")&&(e=i,i=n,n=e),t[0]=Kf[i]||i,t[1]=Kf[n]||n,t.join(" ")},Ox=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,n=i.style,s=t.u,a=i._gsap,o,c,l;if(s==="all"||s===!0)n.cssText="",c=1;else for(s=s.split(","),l=s.length;--l>-1;)o=s[l],pn[o]&&(c=1,o=o==="transformOrigin"?li:_t),yr(i,o);c&&(yr(i,_t),a&&(a.svg&&i.removeAttribute("transform"),n.scale=n.rotate=n.translate="none",pa(i,1),a.uncache=1,ip(n)))}},Uo={clearProps:function(e,t,i,n,s){if(s.data!=="isFromStart"){var a=e._pt=new Qt(e._pt,t,i,0,0,Ox);return a.u=n,a.pr=-10,a.tween=s,e._props.push(i),1}}},fa=[1,0,0,1,0,0],op={},cp=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Jf=function(e){var t=Ri(e,_t);return cp(t)?fa:t.substr(7).match(Ih).map(Mt)},ru=function(e,t){var i=e._gsap||Fn(e),n=e.style,s=Jf(e),a,o,c,l;return i.svg&&e.getAttribute("transform")?(c=e.transform.baseVal.consolidate().matrix,s=[c.a,c.b,c.c,c.d,c.e,c.f],s.join(",")==="1,0,0,1,0,0"?fa:s):(s===fa&&!e.offsetParent&&e!==ss&&!i.svg&&(c=n.display,n.display="block",a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(l=1,o=e.nextElementSibling,ss.appendChild(e)),s=Jf(e),c?n.display=c:yr(e,"display"),l&&(o?a.insertBefore(e,o):a?a.appendChild(e):ss.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},eu=function(e,t,i,n,s,a){var o=e._gsap,c=s||ru(e,!0),l=o.xOrigin||0,h=o.yOrigin||0,u=o.xOffset||0,d=o.yOffset||0,f=c[0],x=c[1],g=c[2],m=c[3],p=c[4],S=c[5],y=t.split(" "),w=parseFloat(y[0])||0,A=parseFloat(y[1])||0,T,R,N,b;i?c!==fa&&(R=f*m-x*g)&&(N=w*(m/R)+A*(-g/R)+(g*S-m*p)/R,b=w*(-x/R)+A*(f/R)-(f*S-x*p)/R,w=N,A=b):(T=sp(e),w=T.x+(~y[0].indexOf("%")?w/100*T.width:w),A=T.y+(~(y[1]||y[0]).indexOf("%")?A/100*T.height:A)),n||n!==!1&&o.smooth?(p=w-l,S=A-h,o.xOffset=u+(p*f+S*g)-p,o.yOffset=d+(p*x+S*m)-S):o.xOffset=o.yOffset=0,o.xOrigin=w,o.yOrigin=A,o.smooth=!!n,o.origin=t,o.originIsAbsolute=!!i,e.style[li]="0px 0px",a&&(kn(a,o,"xOrigin",l,w),kn(a,o,"yOrigin",h,A),kn(a,o,"xOffset",u,o.xOffset),kn(a,o,"yOffset",d,o.yOffset)),e.setAttribute("data-svg-origin",w+" "+A)},pa=function(e,t){var i=e._gsap||new Hh(e);if("x"in i&&!t&&!i.uncache)return i;var n=e.style,s=i.scaleX<0,a="px",o="deg",c=getComputedStyle(e),l=Ri(e,li)||"0",h,u,d,f,x,g,m,p,S,y,w,A,T,R,N,b,M,O,z,G,K,J,j,ce,X,fe,pe,Ce,Ne,tt,Xe,$e;return h=u=d=g=m=p=S=y=w=0,f=x=1,i.svg=!!(e.getCTM&&ap(e)),c.translate&&((c.translate!=="none"||c.scale!=="none"||c.rotate!=="none")&&(n[_t]=(c.translate!=="none"?"translate3d("+(c.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(c.rotate!=="none"?"rotate("+c.rotate+") ":"")+(c.scale!=="none"?"scale("+c.scale.split(" ").join(",")+") ":"")+(c[_t]!=="none"?c[_t]:"")),n.scale=n.rotate=n.translate="none"),R=ru(e,i.svg),i.svg&&(i.uncache?(X=e.getBBox(),l=i.xOrigin-X.x+"px "+(i.yOrigin-X.y)+"px",ce=""):ce=!t&&e.getAttribute("data-svg-origin"),eu(e,ce||l,!!ce||i.originIsAbsolute,i.smooth!==!1,R)),A=i.xOrigin||0,T=i.yOrigin||0,R!==fa&&(O=R[0],z=R[1],G=R[2],K=R[3],h=J=R[4],u=j=R[5],R.length===6?(f=Math.sqrt(O*O+z*z),x=Math.sqrt(K*K+G*G),g=O||z?rs(z,O)*xr:0,S=G||K?rs(G,K)*xr+g:0,S&&(x*=Math.abs(Math.cos(S*as))),i.svg&&(h-=A-(A*O+T*G),u-=T-(A*z+T*K))):($e=R[6],tt=R[7],pe=R[8],Ce=R[9],Ne=R[10],Xe=R[11],h=R[12],u=R[13],d=R[14],N=rs($e,Ne),m=N*xr,N&&(b=Math.cos(-N),M=Math.sin(-N),ce=J*b+pe*M,X=j*b+Ce*M,fe=$e*b+Ne*M,pe=J*-M+pe*b,Ce=j*-M+Ce*b,Ne=$e*-M+Ne*b,Xe=tt*-M+Xe*b,J=ce,j=X,$e=fe),N=rs(-G,Ne),p=N*xr,N&&(b=Math.cos(-N),M=Math.sin(-N),ce=O*b-pe*M,X=z*b-Ce*M,fe=G*b-Ne*M,Xe=K*M+Xe*b,O=ce,z=X,G=fe),N=rs(z,O),g=N*xr,N&&(b=Math.cos(N),M=Math.sin(N),ce=O*b+z*M,X=J*b+j*M,z=z*b-O*M,j=j*b-J*M,O=ce,J=X),m&&Math.abs(m)+Math.abs(g)>359.9&&(m=g=0,p=180-p),f=Mt(Math.sqrt(O*O+z*z+G*G)),x=Mt(Math.sqrt(j*j+$e*$e)),N=rs(J,j),S=Math.abs(N)>2e-4?N*xr:0,w=Xe?1/(Xe<0?-Xe:Xe):0),i.svg&&(ce=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!cp(Ri(e,_t)),ce&&e.setAttribute("transform",ce))),Math.abs(S)>90&&Math.abs(S)<270&&(s?(f*=-1,S+=g<=0?180:-180,g+=g<=0?180:-180):(x*=-1,S+=S<=0?180:-180)),t=t||i.uncache,i.x=h-((i.xPercent=h&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-h)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+a,i.y=u-((i.yPercent=u&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-u)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+a,i.z=d+a,i.scaleX=Mt(f),i.scaleY=Mt(x),i.rotation=Mt(g)+o,i.rotationX=Mt(m)+o,i.rotationY=Mt(p)+o,i.skewX=S+o,i.skewY=y+o,i.transformPerspective=w+a,(i.zOrigin=parseFloat(l.split(" ")[2])||!t&&i.zOrigin||0)&&(n[li]=Bo(l)),i.xOffset=i.yOffset=0,i.force3D=ci.force3D,i.renderTransform=i.svg?Nx:rp?lp:Fx,i.uncache=0,i},Bo=function(e){return(e=e.split(" "))[0]+" "+e[1]},$h=function(e,t,i){var n=kt(t);return Mt(parseFloat(t)+parseFloat(zn(e,"x",i+"px",n)))+n},Fx=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,lp(e,t)},gr="0deg",da="0px",vr=") ",lp=function(e,t){var i=t||this,n=i.xPercent,s=i.yPercent,a=i.x,o=i.y,c=i.z,l=i.rotation,h=i.rotationY,u=i.rotationX,d=i.skewX,f=i.skewY,x=i.scaleX,g=i.scaleY,m=i.transformPerspective,p=i.force3D,S=i.target,y=i.zOrigin,w="",A=p==="auto"&&e&&e!==1||p===!0;if(y&&(u!==gr||h!==gr)){var T=parseFloat(h)*as,R=Math.sin(T),N=Math.cos(T),b;T=parseFloat(u)*as,b=Math.cos(T),a=$h(S,a,R*b*-y),o=$h(S,o,-Math.sin(T)*-y),c=$h(S,c,N*b*-y+y)}m!==da&&(w+="perspective("+m+vr),(n||s)&&(w+="translate("+n+"%, "+s+"%) "),(A||a!==da||o!==da||c!==da)&&(w+=c!==da||A?"translate3d("+a+", "+o+", "+c+") ":"translate("+a+", "+o+vr),l!==gr&&(w+="rotate("+l+vr),h!==gr&&(w+="rotateY("+h+vr),u!==gr&&(w+="rotateX("+u+vr),(d!==gr||f!==gr)&&(w+="skew("+d+", "+f+vr),(x!==1||g!==1)&&(w+="scale("+x+", "+g+vr),S.style[_t]=w||"translate(0, 0)"},Nx=function(e,t){var i=t||this,n=i.xPercent,s=i.yPercent,a=i.x,o=i.y,c=i.rotation,l=i.skewX,h=i.skewY,u=i.scaleX,d=i.scaleY,f=i.target,x=i.xOrigin,g=i.yOrigin,m=i.xOffset,p=i.yOffset,S=i.forceCSS,y=parseFloat(a),w=parseFloat(o),A,T,R,N,b;c=parseFloat(c),l=parseFloat(l),h=parseFloat(h),h&&(h=parseFloat(h),l+=h,c+=h),c||l?(c*=as,l*=as,A=Math.cos(c)*u,T=Math.sin(c)*u,R=Math.sin(c-l)*-d,N=Math.cos(c-l)*d,l&&(h*=as,b=Math.tan(l-h),b=Math.sqrt(1+b*b),R*=b,N*=b,h&&(b=Math.tan(h),b=Math.sqrt(1+b*b),A*=b,T*=b)),A=Mt(A),T=Mt(T),R=Mt(R),N=Mt(N)):(A=u,N=d,T=R=0),(y&&!~(a+"").indexOf("px")||w&&!~(o+"").indexOf("px"))&&(y=zn(f,"x",a,"px"),w=zn(f,"y",o,"px")),(x||g||m||p)&&(y=Mt(y+x-(x*A+g*R)+m),w=Mt(w+g-(x*T+g*N)+p)),(n||s)&&(b=f.getBBox(),y=Mt(y+n/100*b.width),w=Mt(w+s/100*b.height)),b="matrix("+A+","+T+","+R+","+N+","+y+","+w+")",f.setAttribute("transform",b),S&&(f.style[_t]=b)},Ux=function(e,t,i,n,s){var a=360,o=It(s),c=parseFloat(s)*(o&&~s.indexOf("rad")?xr:1),l=c-n,h=n+l+"deg",u,d;return o&&(u=s.split("_")[1],u==="short"&&(l%=a,l!==l%(a/2)&&(l+=l<0?a:-a)),u==="cw"&&l<0?l=(l+a*qf)%a-~~(l/a)*a:u==="ccw"&&l>0&&(l=(l-a*qf)%a-~~(l/a)*a)),e._pt=d=new Qt(e._pt,t,i,n,l,yx),d.e=h,d.u="deg",e._props.push(i),d},Qf=function(e,t){for(var i in t)e[i]=t[i];return e},Bx=function(e,t,i){var n=Qf({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=i.style,o,c,l,h,u,d,f,x;n.svg?(l=i.getAttribute("transform"),i.setAttribute("transform",""),a[_t]=t,o=pa(i,1),yr(i,_t),i.setAttribute("transform",l)):(l=getComputedStyle(i)[_t],a[_t]=t,o=pa(i,1),a[_t]=l);for(c in pn)l=n[c],h=o[c],l!==h&&s.indexOf(c)<0&&(f=kt(l),x=kt(h),u=f!==x?zn(i,c,l,x):parseFloat(l),d=parseFloat(h),e._pt=new Qt(e._pt,o,c,u,d-u,Kh),e._pt.u=x||0,e._props.push(c));Qf(o,n)};Jt("padding,margin,Width,Radius",function(r,e){var t="Top",i="Right",n="Bottom",s="Left",a=(e<3?[t,i,n,s]:[t+s,t+i,n+i,n+s]).map(function(o){return e<2?r+o:"border"+o+r});Uo[e>1?"border"+r:r]=function(o,c,l,h,u){var d,f;if(arguments.length<4)return d=a.map(function(x){return fn(o,x,l)}),f=d.join(" "),f.split(d[0]).length===5?d[0]:f;d=(h+"").split(" "),f={},a.forEach(function(x,g){return f[x]=d[g]=d[g]||d[(g-1)/2|0]}),o.init(c,f,u)}});su={name:"css",register:Qh,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,n,s){var a=this._props,o=e.style,c=i.vars.startAt,l,h,u,d,f,x,g,m,p,S,y,w,A,T,R,N;tu||Qh(),this.styles=this.styles||np(e),N=this.styles.props,this.tween=i;for(g in t)if(g!=="autoRound"&&(h=t[g],!(si[g]&&Gh(g,t,i,n,e,s)))){if(f=typeof h,x=Uo[g],f==="function"&&(h=h.call(i,n,e,s),f=typeof h),f==="string"&&~h.indexOf("random(")&&(h=ns(h)),x)x(this,e,g,h,i)&&(R=1);else if(g.substr(0,2)==="--")l=(getComputedStyle(e).getPropertyValue(g)+"").trim(),h+="",un.lastIndex=0,un.test(l)||(m=kt(l),p=kt(h)),p?m!==p&&(l=zn(e,g,l,p)+p):m&&(h+=m),this.add(o,"setProperty",l,h,n,s,0,0,g),a.push(g),N.push(g,0,o[g]);else if(f!=="undefined"){if(c&&g in c?(l=typeof c[g]=="function"?c[g].call(i,n,e,s):c[g],It(l)&&~l.indexOf("random(")&&(l=ns(l)),kt(l+"")||l==="auto"||(l+=ci.units[g]||kt(fn(e,g))||""),(l+"").charAt(1)==="="&&(l=fn(e,g))):l=fn(e,g),d=parseFloat(l),S=f==="string"&&h.charAt(1)==="="&&h.substr(0,2),S&&(h=h.substr(2)),u=parseFloat(h),g in Yi&&(g==="autoAlpha"&&(d===1&&fn(e,"visibility")==="hidden"&&u&&(d=0),N.push("visibility",0,o.visibility),kn(this,o,"visibility",d?"inherit":"hidden",u?"inherit":"hidden",!u)),g!=="scale"&&g!=="transform"&&(g=Yi[g],~g.indexOf(",")&&(g=g.split(",")[0]))),y=g in pn,y){if(this.styles.save(g),f==="string"&&h.substring(0,6)==="var(--"&&(h=Ri(e,h.substring(4,h.indexOf(")"))),u=parseFloat(h)),w||(A=e._gsap,A.renderTransform&&!t.parseTransform||pa(e,t.parseTransform),T=t.smoothOrigin!==!1&&A.smooth,w=this._pt=new Qt(this._pt,o,_t,0,1,A.renderTransform,A,0,-1),w.dep=1),g==="scale")this._pt=new Qt(this._pt,A,"scaleY",A.scaleY,(S?pr(A.scaleY,S+u):u)-A.scaleY||0,Kh),this._pt.u=0,a.push("scaleY",g),g+="X";else if(g==="transformOrigin"){N.push(li,0,o[li]),h=Dx(h),A.svg?eu(e,h,0,T,0,this):(p=parseFloat(h.split(" ")[2])||0,p!==A.zOrigin&&kn(this,A,"zOrigin",A.zOrigin,p),kn(this,o,g,Bo(l),Bo(h)));continue}else if(g==="svgOrigin"){eu(e,h,1,T,0,this);continue}else if(g in op){Ux(this,A,g,d,S?pr(d,S+h):h);continue}else if(g==="smoothOrigin"){kn(this,A,"smooth",A.smooth,h);continue}else if(g==="force3D"){A[g]=h;continue}else if(g==="transform"){Bx(this,h,e);continue}}else g in o||(g=os(g)||g);if(y||(u||u===0)&&(d||d===0)&&!_x.test(h)&&g in o)m=(l+"").substr((d+"").length),u||(u=0),p=kt(h)||(g in ci.units?ci.units[g]:m),m!==p&&(d=zn(e,g,l,p)),this._pt=new Qt(this._pt,y?A:o,g,d,(S?pr(d,S+u):u)-d,!y&&(p==="px"||g==="zIndex")&&t.autoRound!==!1?Sx:Kh),this._pt.u=p||0,m!==p&&p!=="%"&&(this._pt.b=l,this._pt.r=bx);else if(g in o)Ix.call(this,e,g,l,S?S+h:h);else if(g in e)this.add(e,g,l||e[g],S?S+h:h,n,s);else if(g!=="parseTransform"){Io(g,h);continue}y||(g in o?N.push(g,0,o[g]):typeof e[g]=="function"?N.push(g,2,e[g]()):N.push(g,1,l||e[g])),a.push(g)}}R&&jh(this)},render:function(e,t){if(t.tween._time||!iu())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:fn,aliases:Yi,getSetter:function(e,t,i){var n=Yi[t];return n&&n.indexOf(",")<0&&(t=n),t in pn&&t!==li&&(e._gsap.x||fn(e,"x"))?i&&Xf===i?t==="scale"?Tx:Ex:(Xf=i||{})&&(t==="scale"?Ax:Cx):e.style&&!Lo(e.style[t])?Mx:~t.indexOf("-")?wx:No(e,t)},core:{_removeProperty:yr,_getMatrix:ru}};Vt.utils.checkPrefix=os;Vt.core.getStyleSaver=np;(function(r,e,t,i){var n=Jt(r+","+e+","+t,function(s){pn[s]=1});Jt(e,function(s){ci.units[s]="deg",op[s]=1}),Yi[n[13]]=r+","+e,Jt(i,function(s){var a=s.split(":");Yi[a[1]]=n[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Jt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){ci.units[r]="px"});Vt.registerPlugin(su)});var $,XE,hi=Zt(()=>{Zh();hp();$=Vt.registerPlugin(su)||Vt,XE=$.core.Tween});function _a(r){let e=Sp.map(n=>`.${n}`).join(", ");if(!e)return;(r instanceof Document,r).querySelectorAll(e).forEach(n=>{n.dataset.hlsPreserve==="true"||n.dataset.mediaPreserve==="true"||(e_(n),n.remove())})}function br(r){return r.isConnected?!!$x(r):!0}function ya(r,e){if(!br(r)){e();return}let t=Li.get(r);if(t){t.callbacks.add(e);return}let i=new MutationObserver(()=>{if(!r.isConnected){zo(r);return}br(r)||zo(r)});Qx(r,i);let n={observer:i,callbacks:new Set([e])};Li.set(r,n),Jx(r)}function Mp(r){if(!Li.size)return;if(!r){Li.forEach((t,i)=>{t.observer.disconnect(),Li.delete(i)});return}let e=(r instanceof Document,r);Li.forEach((t,i)=>{(!i.isConnected||e.contains(i))&&(t.observer.disconnect(),Li.delete(i))})}function $x(r){var t,i;let e=r;for(;e;){if(Kx(e)||e.hasAttribute("hidden"))return e;let n=(t=e.style)==null?void 0:t.display;if(n&&n.toLowerCase()==="none")return e;let s=(i=e.style)==null?void 0:i.visibility;if(s&&s.toLowerCase()==="hidden")return e;let a=window.getComputedStyle(e);if(a.display==="none"||a.visibility==="hidden")return e;e=e.parentElement}return null}function Kx(r){return Sp.some(e=>r.classList.contains(e))}function Jx(r){let e=()=>{if(Li.has(r)){if(!r.isConnected){zo(r);return}br(r)||zo(r)}};typeof window!="undefined"&&typeof window.requestAnimationFrame=="function"?window.requestAnimationFrame(e):window.setTimeout(e,32)}function zo(r){let e=Li.get(r);e&&(e.observer.disconnect(),Li.delete(r),e.callbacks.forEach(t=>{try{t()}catch{}}))}function Qx(r,e){let t=r;for(;t;)e.observe(t,{attributes:!0,attributeFilter:jx}),t=t.parentElement}function e_(r){bp(r),r.querySelectorAll(Zx).forEach(t=>bp(t))}function bp(r){let e=Li.get(r);e&&(e.observer.disconnect(),Li.delete(r))}var Sp,jx,Zx,Li,Ho=Zt(()=>{"use strict";Sp=["w-condition-invisible","-w-condition-invisible"],jx=["class","style","hidden"],Zx="video[data-src-1080], video[data-src-720], video[data-hls], video.slide-video, img, picture",Li=new Map});function bu(r){return r?nc.has(r)?"projects":rc[r]?r:"info":"info"}function pm(r,e){let t=new Set;return e.forEach(i=>{if(!i)return;r.querySelectorAll(i).forEach(s=>{t.has(s)||t.add(s)})}),Array.from(t)}function Z_(r,e,t){e.forEach(i=>{let n=pm(r,i.selectors);if(!n.length)return;if(!i.enter){$.set(n,{opacity:1,y:0,visibility:"visible"});return}let s=i.enter==="down"?-t:t;$.set(n,{opacity:0,y:s,visibility:"visible",willChange:"transform, opacity"})})}function mm(r,e,t,i){let n=$.timeline({defaults:{ease:fm}});return t.forEach(s=>{let a=s[r];if(!a)return;let o=pm(e,s.selectors);if(!o.length)return;let c=r==="enter",l=a==="down"?i:-i,h=c?{opacity:1,y:0,duration:um}:{opacity:0,y:l,duration:dm};$.set(o,{visibility:"visible",willChange:"transform, opacity"}),n.to(o,h,0),c?n.set(o,{clearProps:"willChange,visibility"},n.duration()-.001):n.set(o,{visibility:"hidden",clearProps:"willChange"},n.duration()-.001)}),n.getChildren().length?new Promise(s=>{n.eventCallback("onComplete",()=>{n.getChildren().forEach(a=>a.kill()),s()})}):(n.kill(),Promise.resolve())}function Ca(r,e){var n;let t=bu(r),i=(n=rc[t])!=null?n:[];Z_(e,i,ic)}function Pa(r,e){var n;let t=bu(r),i=(n=rc[t])!=null?n:[];return mm("enter",e,i,ic)}function gm(r,e){var n;let t=bu(r),i=(n=rc[t])!=null?n:[];return mm("leave",e,i,ic)}var um,dm,ic,fm,nc,rc,At,Ra=Zt(()=>{"use strict";hi();um=.75,dm=.75,ic=20,fm="power2.out",nc=new Set(["projects","digital","graphic","direction","imaging"]),rc={info:[{selectors:[".headline"],enter:"down",leave:"up"},{selectors:[".slider",".slider-wrapper",".slider_wrapper",".hero-slider-wrapper",".panorama-slider"],enter:"up",leave:"down"},{selectors:[".section_about",".footer"],enter:"up",leave:"down"},{selectors:[".info-reveal-word"],enter:"up",leave:"down"}],projects:[{selectors:[".component_project-header"],enter:"down",leave:"up"},{selectors:[".top-nav"],enter:"down",leave:"up"},{selectors:[".projects-nav"],enter:"down",leave:"up"},{selectors:[".projects-wrapper",".projects_wrapper"],enter:"up",leave:"down"},{selectors:[".footer"],enter:"up",leave:"down"}],cases:[{selectors:[".top-nav"],enter:"down",leave:"up"},{selectors:[".section_case-header",".component_case-header"],enter:"up",leave:"down"},{selectors:[".section_case-media"],enter:"up",leave:"down"},{selectors:[".section_case-description",".section_cases-nav",".footer"],enter:"up",leave:"down"}],archive:[{selectors:[".top-nav",".top-nav-text"],enter:"down",leave:"up"},{selectors:[".loading-ui",".loading-ui-wrapper"],enter:"up",leave:"down"},{selectors:[".archive-container"],enter:"up",leave:"down"},{selectors:[".archive-sphere",".archive-sphere__renderer","[data-archive-sphere]"],enter:"up",leave:"down"},{selectors:[".footer"],enter:"up",leave:"down"}]};At={enter:um,leave:dm,distance:ic,ease:fm}});function Ia(r){return r instanceof Document,r}function ym(r,e,t){if(typeof window=="undefined"||typeof window.requestAnimationFrame!="function"){t();return}let i=e.get(r);typeof i=="number"&&window.cancelAnimationFrame(i);let n=window.requestAnimationFrame(()=>{e.delete(r),t()});e.set(r,n)}function ty(r){let e=sc.get(r);return e||(e=new Map,sc.set(r,e)),e}function iy(r,e){let t=r.getAttribute(e),i=ty(r);t!==null?(i.set(e,t),r.removeAttribute(e)):i.has(e)||i.set(e,null)}function ny(r,e){let t=sc.get(r),i=t==null?void 0:t.get(e);if(i===void 0){e==="loading"&&(!r.hasAttribute("loading")||r.getAttribute("loading")==="eager")&&r.setAttribute("loading","lazy");return}i===null?r.removeAttribute(e):r.setAttribute(e,i),t==null||t.delete(e),t&&t.size===0&&sc.delete(r)}function bm(r){return r instanceof HTMLImageElement?r.dataset.lcpPriority==="true"?(r.setAttribute("loading","eager"),r.setAttribute("fetchpriority","high"),r):(_m.forEach(e=>iy(r,e)),r.setAttribute("loading","eager"),r.setAttribute("fetchpriority","high"),r.dataset.lcpPriority="true",r):null}function ry(r){r.dataset.lcpPriority==="true"&&(r.removeAttribute("fetchpriority"),_m.forEach(e=>ny(r,e)),delete r.dataset.lcpPriority)}function La(r){if(!r)return null;if(r instanceof HTMLImageElement)return r;if(r instanceof HTMLPictureElement){let t=r.querySelector("img");return t instanceof HTMLImageElement?t:null}let e=r.querySelector("img");return e instanceof HTMLImageElement?e:null}function sy(r){let t=Array.from(r.querySelectorAll(K_)).map(n=>La(n)).filter(n=>!!n);if(t.length)return Array.from(new Set(t));let i=La(r.querySelector("img"));return i?[i]:[]}function Su(r,e){Ia(r).querySelectorAll('img[data-lcp-priority="true"]').forEach(n=>{e.has(n)||ry(n)})}function ay(r){if(!r.isConnected)return!1;let e=window.getComputedStyle(r);return!(e.display==="none"||e.visibility==="hidden"||r.offsetWidth===0&&r.offsetHeight===0)}function oy(r){let e=Ia(r),t=Array.from(e.querySelectorAll($_));for(let i of t)if(ay(i))return i;return null}function cy(r){let e=oy(r),t=new Set;e&&sy(e).forEach(n=>{let s=bm(n);s&&t.add(s)}),Su(r,t)}function ly(r){let e=Ia(r),t=e instanceof Element?e.querySelector(".section_case-media"):null,i=t!=null?t:e,n=Array.from(i.querySelectorAll(".case-list-wrapper .case-list .case-media-wrapper, .case-media-wrapper"));for(let o of n){let c=o.querySelector(".case-media"),l=La(c);if(l)return l;let h=La(o);if(h)return h}let s=i.querySelector(J_);if(s){let o=La(s);if(o)return o}let a=i.querySelector("img");return a instanceof HTMLImageElement?a:null}function hy(r){let e=ly(r),t=new Set;if(!e){Su(r,t);return}let i=()=>{let n=bm(e);n&&t.add(n),Su(r,t)};br(e)?ya(e,i):i()}function Sm(r){let e=Ia(r);ym(e,Q_,()=>cy(e))}function xs(r){let e=Ia(r);ym(e,ey,()=>hy(e))}var $_,K_,J_,_m,sc,Q_,ey,ac=Zt(()=>{"use strict";Ho();$_=".project-div",K_=".project-image",J_=".case-media",_m=["loading","data-loading","data-wf-loading","data-wf-lazy","data-lazy"],sc=new WeakMap,Q_=new WeakMap,ey=new WeakMap});var Tm={};ef(Tm,{applyProjectFilter:()=>vy,destroyProjectFilters:()=>Em,initProjectFilters:()=>gy});function Cr(r){return r?r.trim().toLowerCase().replace(/\s+/g,"-"):""}function Mm(r){let e=window.getComputedStyle(r);return e?e.display==="none"?"block":e.display:"block"}function gy(r=document,e){Em(),_n=new Mu(r,e),_n.init()}function Em(){_n==null||_n.destroy(),_n=null}function vy(r,e){_n==null||_n.applyExternalFilter(r,e)}var uy,Gn,dy,fy,py,my,wm,Mu,_n,Am=Zt(()=>{"use strict";hi();ac();Ra();uy={initialListState:"hidden"};Gn={fadeIn:1,expand:1.1,fadeOut:.7,collapse:.85,delayStep:.1,maxDelay:.5,listReveal:1.2},dy=".project-div",fy=".project-image, .project-video, .grid-image, .grid-video, .video-item, .video-item-prj",py=".description-div",my=".categories [data-filter-value], .categories .text-size-small, .project-services .text-size-small, .services-list-wrapper .text-size-small, .service-text .text-size-small, [data-filter-category], [data-filter-slug], [data-filter-value], [data-capability], [data-category]",wm=At.distance*1.1,Mu=class{constructor(e,t={}){Z(this,"container");Z(this,"nav");Z(this,"listWrapper",null);Z(this,"options");Z(this,"triggerMap",new Map);Z(this,"triggerHandlers",new Map);Z(this,"cards",new Map);Z(this,"activeFilter","all");Z(this,"observer",null);Z(this,"refreshTimeout",null);Z(this,"hasRevealedList",!1);Z(this,"initialFilterApplied",!1);Z(this,"popStateHandler",()=>{this.applyFilter(this.getFilterFromUrl(),{animate:!0,updateUrl:!1,force:!0})});var n,s,a;this.options={...uy,...t},this.container=e instanceof Document?e.documentElement:e;let i=e instanceof Document?e:e.ownerDocument;this.nav=i==null?void 0:i.querySelector(".projects-nav"),e instanceof Element?this.listWrapper=(n=e.querySelector(".project-list-wrapper"))!=null?n:e.querySelector(".project-list"):this.listWrapper=(a=(s=i==null?void 0:i.querySelector(".project-list-wrapper"))!=null?s:i==null?void 0:i.querySelector(".project-list"))!=null?a:null}init(){this.hideListWrapper(),this.collectTriggers(),this.collectCards(),this.observeMutations(),window.addEventListener("popstate",this.popStateHandler);let e=this.getFilterFromUrl();this.applyFilter(e,{animate:!1,updateUrl:!0,pushState:!1,force:!0})}destroy(){this.triggerHandlers.forEach((e,t)=>{t.removeEventListener("click",e)}),this.triggerHandlers.clear(),this.triggerMap.clear(),this.cards.forEach(e=>{var t;(t=e.timeline)==null||t.kill(),e.timeline=void 0}),this.cards.clear(),this.observer&&(this.observer.disconnect(),this.observer=null),this.refreshTimeout!==null&&(window.clearTimeout(this.refreshTimeout),this.refreshTimeout=null),window.removeEventListener("popstate",this.popStateHandler),this.hasRevealedList=!1,this.initialFilterApplied=!1}applyExternalFilter(e,t={}){this.applyFilter(e,t)}hideListWrapper(){var t;if(!this.listWrapper){this.hasRevealedList=!1,this.initialFilterApplied=!1;return}let e=(t=this.listWrapper.querySelector("[data-filter-empty]"))!=null?t:this.listWrapper.querySelector(".w-dyn-empty");if(this.options.initialListState==="visible"){$.set(this.listWrapper,{autoAlpha:1,pointerEvents:"auto",visibility:"visible"}),e&&$.set(e,{autoAlpha:0,display:"none",pointerEvents:"none"}),this.hasRevealedList=!0,this.initialFilterApplied=!1;return}$.set(this.listWrapper,{autoAlpha:0,pointerEvents:"none"}),e&&$.set(e,{autoAlpha:0,display:"none",pointerEvents:"none"}),this.hasRevealedList=!1,this.initialFilterApplied=!1}maybeRevealList(e){if(!this.listWrapper||this.hasRevealedList)return;let t=Array.from(this.cards.values()).some(s=>s.isVisible),i=this.listWrapper.querySelector(".w-dyn-empty");if(!t&&!i)return;this.hasRevealedList=!0,e||!this.initialFilterApplied?$.to(this.listWrapper,{autoAlpha:1,duration:Gn.listReveal,ease:"power2.out",pointerEvents:"auto"}):$.set(this.listWrapper,{autoAlpha:1,pointerEvents:"auto"})}readElementMetrics(e){let{element:t,defaultDisplay:i}=e,n=t.getAttribute("style"),s=n!==null,a=window.getComputedStyle(t),o=a.display==="none"||t.offsetHeight===0||Number.isNaN(t.offsetHeight);if(o){t.style.position="absolute",t.style.visibility="hidden",t.style.pointerEvents="none",t.style.display=i||"block";let{width:h}=a;h&&h!=="auto"&&(t.style.width=h),t.style.height="",t.style.marginTop="",t.style.marginBottom="",t.style.paddingTop="",t.style.paddingBottom=""}let c=window.getComputedStyle(t),l={height:t.offsetHeight,marginTop:parseFloat(c.marginTop)||0,marginBottom:parseFloat(c.marginBottom)||0,paddingTop:parseFloat(c.paddingTop)||0,paddingBottom:parseFloat(c.paddingBottom)||0};return o&&(s?t.setAttribute("style",n):t.removeAttribute("style")),l}measureCard(e,t=!1){if(!t&&e.metrics)return e.metrics;let i=this.readElementMetrics(e);return e.metrics=i,i}getCardDescription(e){return e.element.querySelector(py)}getCardMediaElements(e){return Array.from(e.element.querySelectorAll(fy))}restoreCardVisibility(e,t,i){let n=[e.element];t||(t=this.getCardDescription(e)),(!i||!i.length)&&(i=this.getCardMediaElements(e)),t&&n.push(t),i&&i.length&&n.push(...i),n.forEach(s=>{s&&(s.style.opacity&&s.style.opacity!=="1"&&(s.style.opacity="1"),s.style.visibility&&s.style.visibility!=="visible"&&(s.style.visibility="visible"),s.style.removeProperty("translate"),s.style.removeProperty("rotate"),s.style.removeProperty("scale"),s.style.removeProperty("transform"))})}toggleEmptyState(e){var n;if(!this.listWrapper)return;let t=(n=this.listWrapper.querySelector("[data-filter-empty]"))!=null?n:this.listWrapper.querySelector(".w-dyn-empty");if(!t)return;let i=Mm(t);$.killTweensOf(t),e?($.set(t,{display:i,pointerEvents:"auto"}),$.to(t,{autoAlpha:1,duration:.45,ease:"power2.out"})):$.to(t,{autoAlpha:0,duration:.3,ease:"power2.out",pointerEvents:"none",onComplete:()=>{t.style.display="none"}})}collectTriggers(){if(!this.nav)return;let e=Array.from(this.nav.querySelectorAll("[data-filter-trigger]"));if(e.forEach(t=>{var s,a;let i=Cr((a=(s=t.dataset.filterTrigger)!=null?s:t.getAttribute("href"))!=null?a:"");if(!i)return;this.triggerMap.set(i,t);let n=o=>{o.preventDefault(),this.applyFilter(i,{animate:!0,updateUrl:!0,pushState:!0})};t.addEventListener("click",n),this.triggerHandlers.set(t,n)}),!this.triggerMap.has("all")){let t=e.find(i=>{var s;return Cr((s=i.dataset.filterTrigger)!=null?s:"")==="all"});t&&this.triggerMap.set("all",t)}}collectCards(){let e=Array.from(this.container.querySelectorAll(dy)),t=new Map;e.forEach(i=>{let n=this.cards.get(i),s=this.extractCategories(i);if(n){n.categories=s,this.measureCard(n,!0),t.set(i,n);return}let a={element:i,categories:s,defaultDisplay:Mm(i),isVisible:!0};this.measureCard(a,!0),t.set(i,a)}),this.cards.forEach((i,n)=>{var s;t.has(n)||(s=i.timeline)==null||s.kill()}),this.cards=t}extractCategories(e){let t=new Set,i=o=>{o&&o.split(/[,/|]+/).map(c=>Cr(c)).filter(Boolean).forEach(c=>t.add(c))};return["data-filter-slug","data-filter-category","data-category","data-categories","data-capability","data-filter-value","data-category-slugs"].forEach(o=>{i(e.getAttribute(o))}),["filterSlug","filterCategory","category","categories","capability","filterValue"].forEach(o=>{o in e.dataset&&i(e.dataset[o])}),Array.from(e.querySelectorAll(my)).filter(o=>o.childElementCount===0).forEach(o=>{i(o.textContent)}),t}observeMutations(){let e=this.container.querySelector(".project-list"),t=e!=null?e:this.container;this.observer=new MutationObserver(i=>{i.some(n=>n.type==="childList")&&this.scheduleRefresh()}),this.observer.observe(t,{childList:!0,subtree:!0})}scheduleRefresh(){this.refreshTimeout!==null&&window.clearTimeout(this.refreshTimeout),this.refreshTimeout=window.setTimeout(()=>{this.refreshTimeout=null,this.collectCards(),this.applyFilter(this.activeFilter,{animate:!1,updateUrl:!1,force:!0})},50)}getFilterFromUrl(){var n,s;let e=new URL(window.location.href),t=Cr((s=(n=e.searchParams.get("category"))!=null?n:e.searchParams.get("capability"))!=null?s:"");if(t)return t;let i=e.hash.replace("#","");if(!i)return"all";if(i.includes("=")){let[a,o]=i.split("=");if(a==="category"||a==="capability")return Cr(o)}return Cr(i)||"all"}applyFilter(e,t={}){let{animate:i=!0,updateUrl:n=!1,pushState:s=!1,force:a=!1}=t,o=Cr(e);if(o||(o="all"),o!=="all"&&!this.triggerMap.has(o)&&(o="all"),!a&&o===this.activeFilter){n&&this.updateUrl(o,s);return}this.activeFilter=o,this.updateTriggers(o),this.filterCards(o,i),this.maybeRevealList(!this.hasRevealedList),this.initialFilterApplied=!0,Sm(this.container),n&&this.updateUrl(o,s)}updateTriggers(e){this.triggerMap.forEach((t,i)=>{let n=i===e||e==="all"&&i==="all";t.classList.toggle("is-active",n),t.classList.toggle("w--current",n),n?(t.setAttribute("aria-current","true"),t.setAttribute("aria-pressed","true")):(t.removeAttribute("aria-current"),t.setAttribute("aria-pressed","false"))})}filterCards(e,t){let i=e==="all",n=Array.from(this.cards.values()),s=0,a=0;n.forEach(o=>{i||o.categories.has(e)?(this.showCard(o,t,s),s+=1,a+=1):this.hideCard(o,t)}),this.toggleEmptyState(a===0)}showCard(e,t,i){var l;(l=e.timeline)==null||l.kill(),e.timeline=void 0;let n=this.getCardMediaElements(e),s=this.getCardDescription(e);if(this.restoreCardVisibility(e,s,n),e.isVisible){$.set(e.element,{display:e.defaultDisplay,autoAlpha:1,y:0,pointerEvents:"auto",overflow:"",height:"",marginTop:"",marginBottom:"",paddingTop:"",paddingBottom:""}),s&&$.set(s,{autoAlpha:1,y:0,pointerEvents:"auto"}),n.length&&$.set(n,{autoAlpha:1,y:0,pointerEvents:"auto"}),this.restoreCardVisibility(e,s,n);return}let a=this.measureCard(e,!0),o=Math.min(i*Gn.delayStep,Gn.maxDelay),c=wm;if(e.isVisible=!0,t){let h=$.timeline({defaults:{overwrite:"auto"},onComplete:()=>{e.timeline===h&&(e.timeline=void 0),$.set(e.element,{overflow:"",height:"",marginTop:"",marginBottom:"",paddingTop:"",paddingBottom:"",pointerEvents:"auto",visibility:"visible"}),s&&$.set(s,{pointerEvents:"auto"}),n.length&&$.set(n,{pointerEvents:"auto"}),this.restoreCardVisibility(e,s,n),this.measureCard(e,!0)}});h.set(e.element,{display:e.defaultDisplay,autoAlpha:0,height:0,marginTop:0,marginBottom:0,paddingTop:0,paddingBottom:0,y:c,overflow:"hidden",pointerEvents:"none",visibility:"hidden"}),s&&h.set(s,{autoAlpha:0,y:c*.65,pointerEvents:"none",visibility:"hidden"},0),n.length&&h.set(n,{autoAlpha:0,pointerEvents:"none",visibility:"hidden"},0),h.to(e.element,{height:a.height,marginTop:a.marginTop,marginBottom:a.marginBottom,paddingTop:a.paddingTop,paddingBottom:a.paddingBottom,duration:Gn.expand,ease:"power2.inOut",delay:o},0),h.to(e.element,{autoAlpha:1,y:0,pointerEvents:"auto",visibility:"visible",duration:Gn.fadeIn,ease:"power2.out"},o+.12),s&&h.to(s,{autoAlpha:1,y:0,pointerEvents:"auto",visibility:"visible",duration:.55,ease:"power2.out"},o+.18),n.length&&h.to(n,{autoAlpha:1,pointerEvents:"auto",visibility:"visible",duration:.6,stagger:.04,ease:"power2.out"},o+.24),e.timeline=h}else $.set(e.element,{display:e.defaultDisplay,autoAlpha:1,y:0,pointerEvents:"auto",overflow:"",height:"",marginTop:"",marginBottom:"",paddingTop:"",paddingBottom:"",visibility:"visible"}),s&&$.set(s,{autoAlpha:1,y:0,pointerEvents:"auto",visibility:"visible"}),n.length&&$.set(n,{autoAlpha:1,pointerEvents:"auto",visibility:"visible"}),this.restoreCardVisibility(e,s,n),this.measureCard(e,!0)}hideCard(e,t){var a;if(!e.isVisible&&!e.timeline)return;(a=e.timeline)==null||a.kill(),e.timeline=void 0,this.measureCard(e,!0),e.isVisible=!1;let i=this.getCardDescription(e),n=this.getCardMediaElements(e),s=wm;if(t){let o=$.timeline({defaults:{overwrite:"auto"},onComplete:()=>{e.timeline===o&&(e.timeline=void 0),$.set(e.element,{display:"none",pointerEvents:"none",autoAlpha:0,y:0,height:"",marginTop:"",marginBottom:"",paddingTop:"",paddingBottom:"",overflow:"",visibility:"hidden"}),i&&$.set(i,{autoAlpha:0,y:0,pointerEvents:"none",visibility:"hidden"}),n.length&&$.set(n,{autoAlpha:0,pointerEvents:"none",visibility:"hidden"})}});if(o.set(e.element,{overflow:"hidden",pointerEvents:"none",visibility:"visible"}),n.length){let c=n.slice().reverse();o.to(c,{autoAlpha:0,duration:Math.max(.45,Gn.fadeOut*.75),ease:"power2.inOut",stagger:.04},0)}i&&o.to(i,{autoAlpha:0,y:-s*.6,duration:Math.max(.4,Gn.fadeOut*.7),ease:"power2.inOut"},.06),o.to(e.element,{autoAlpha:0,y:-s,height:0,marginTop:0,marginBottom:0,paddingTop:0,paddingBottom:0,duration:Gn.collapse,ease:"power2.inOut"},0),e.timeline=o}else $.set(e.element,{autoAlpha:0,y:0,display:"none",pointerEvents:"none",height:"",marginTop:"",marginBottom:"",paddingTop:"",paddingBottom:"",overflow:"",visibility:"hidden"}),i&&$.set(i,{autoAlpha:0,y:0,pointerEvents:"none",visibility:"hidden"}),n.length&&$.set(n,{autoAlpha:0,y:0,pointerEvents:"none",visibility:"hidden"})}updateUrl(e,t){let i=new URL(window.location.href);e==="all"?(i.searchParams.delete("category"),i.searchParams.delete("capability")):i.searchParams.set("category",e);let n=`${i.pathname}${i.search}${i.hash}`;t?window.history.pushState({filter:e},"",n):window.history.replaceState({filter:e},"",n)}},_n=null});var Cm,wu,Pm,Eu,Rm=Zt(()=>{"use strict";Cm=[{id:"archive-video-01",type:"video",src:"https://coscostudio.b-cdn.net/Portfolio%20Videos/Haus%20x%20Sautter%20Sisters/720/ss-3.mp4",thumb:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69062df40d4a0bb384bffe9b_ss-3-cover.avif",aspectRatio:.75},{id:"archive-video-02",type:"video",src:"https://coscostudio.b-cdn.net/Portfolio%20Videos/Summit/Short%20Videos/720p/summit-concrete-short.mp4",thumb:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69062f3fb2d24fda2019e07c_js-cover-02.avif",aspectRatio:.5208333333333334},{id:"archive-video-03",type:"video",src:"https://coscostudio.b-cdn.net/Portfolio%20Videos/Haus%20x%20Gilly/720/gilly-1.mp4",thumb:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69062de88d55ba8f8c2b922b_gilly-1.avif",aspectRatio:.5625},{id:"archive-video-04",type:"video",src:"https://coscostudio.b-cdn.net/Portfolio%20Videos/Haus%20x%20Sautter%20Sisters/720/ss-6.mp4",thumb:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69062df4d00970133fc9713b_ss-6-cover.avif",aspectRatio:1.7777777777777777},{id:"archive-video-05",type:"video",src:"https://coscostudio.b-cdn.net/Portfolio%20Videos/Haus%20x%20Gilly/720/gilly-4.mp4",thumb:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69062de8b2317b4b155f73ea_gilly-4.avif",aspectRatio:.5625},{id:"archive-video-06",type:"video",src:"https://coscostudio.b-cdn.net/Portfolio%20Videos/Summit/Short%20Videos/720p/summit-blackhole-short.mp4",thumb:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69062f3f546bb2d5ad041774_js-cover-03.avif",aspectRatio:.5208333333333334},{id:"archive-video-07",type:"video",src:"https://coscostudio.b-cdn.net/Portfolio%20Videos/Haus%20x%20Gilly/720/gilly-3.mp4",thumb:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69062de842634eaed9fa5c7b_gilly-3.avif",aspectRatio:.5625},{id:"archive-video-08",type:"video",src:"https://coscostudio.b-cdn.net/Portfolio%20Videos/Haus%20x%20Sautter%20Sisters/720/ss-2.mp4",thumb:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69062df453ef7df9dc01f186_ss-2-cover.avif",aspectRatio:.75}],wu=[{id:"archive-video-mobile-01",type:"video",src:"https://vz-962f74a4-f42.b-cdn.net/585a1399-fd31-4824-8113-5cac96c81eca/playlist.m3u8",thumb:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69062df40d4a0bb384bffe9b_ss-3-cover.avif",aspectRatio:3/4},{id:"archive-video-mobile-02",type:"video",src:"https://vz-962f74a4-f42.b-cdn.net/302a81de-ae29-48cb-abf2-c03af75b54a4/playlist.m3u8",thumb:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69062f3fb2d24fda2019e07c_js-cover-02.avif",aspectRatio:1e3/1920},{id:"archive-video-mobile-03",type:"video",src:"https://vz-962f74a4-f42.b-cdn.net/cda8db0e-3794-45d4-a07c-b02236381da5/playlist.m3u8",thumb:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69062de88d55ba8f8c2b922b_gilly-1.avif",aspectRatio:9/16},{id:"archive-video-mobile-04",type:"video",src:"https://vz-962f74a4-f42.b-cdn.net/339bce8f-79d8-4e23-a190-79305d379012/playlist.m3u8",thumb:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69062df4d00970133fc9713b_ss-6-cover.avif",aspectRatio:16/9},{id:"archive-video-mobile-05",type:"video",src:"https://vz-962f74a4-f42.b-cdn.net/305f01fa-9b34-4a78-a966-5d9f708dc8ae/playlist.m3u8",thumb:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69062f3f3b0f6fd08d836a66_js-cover-01.avif",aspectRatio:1e3/1920},{id:"archive-video-mobile-06",type:"video",src:"https://vz-962f74a4-f42.b-cdn.net/8e796f4c-84bb-4dee-9c57-4b4737697135/playlist.m3u8",thumb:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69062de8b2317b4b155f73ea_gilly-4.avif",aspectRatio:9/16},{id:"archive-video-mobile-07",type:"video",src:"https://vz-962f74a4-f42.b-cdn.net/d9b4ff0c-602c-4dae-bbd1-e724d43ddfd9/playlist.m3u8",thumb:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69062f3f546bb2d5ad041774_js-cover-03.avif",aspectRatio:1e3/1920},{id:"archive-video-mobile-08",type:"video",src:"https://vz-962f74a4-f42.b-cdn.net/21bbd845-bb98-405e-accf-2683d2518add/playlist.m3u8",thumb:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69062de842634eaed9fa5c7b_gilly-3.avif",aspectRatio:9/16},{id:"archive-video-mobile-09",type:"video",src:"https://vz-962f74a4-f42.b-cdn.net/f5ba8727-7436-4714-afc6-ddf79515c3f6/playlist.m3u8",thumb:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69062df453ef7df9dc01f186_ss-2-cover.avif",aspectRatio:3/4}],Pm=[{id:"archive-image-001",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/680a6f54d3c1c3c5c5204b6c_20240530-2709801-314-positive.avif"},{id:"archive-image-002",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/680a74fa2c4ebce341322c3b_stephen-cosco-23.avif"},{id:"archive-image-003",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/680a720712a2c3aa1df669a7_stephen-cosco-50.avif"},{id:"archive-image-004",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/690513f07f1d3d1877b498db_20230804-1304402-0031.avif"},{id:"archive-image-005",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/6905143cf3d2d8ad5d991896_DSC02945-Edit.avif"},{id:"archive-image-006",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/6905148b1a22f03ce89b711d_20240111-2013707-004.avif"},{id:"archive-image-007",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/690514e26ab377afa42d1f02_220719003624010028.avif"},{id:"archive-image-008",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/6905155aa921702bc2a1cd5a_230217007904020028.avif"},{id:"archive-image-009",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/680a70fd2877ed516086ac9b_stephen-cosco-102.avif"},{id:"archive-image-010",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/6905160f3bb6ded4ca413f41_20240207-2171107-241-positive.avif"},{id:"archive-image-011",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/690516246ab377afa42d5826_Chaste%20Poster.avif"},{id:"archive-image-012",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69051635a5eea1ba298faf16_index-video-desktop.avif"},{id:"archive-image-013",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/680a6f97e7dfbcb41437abf1_20230804-1304609-0002-positive.avif"},{id:"archive-image-014",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/690516deeaf1dfc9f5740baa_repetto.avif"},{id:"archive-image-015",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69051450dce4ed40700f0351_220719003624080003.avif"},{id:"archive-image-016",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/6905170a837f9ec544fb1877_Haus-ss--11.avif"},{id:"archive-image-017",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/690518192b1b03904c5e513e_20231118-1803213-001-12.avif"},{id:"archive-image-018",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/680a7d962e771cc63959db3f_stephen-cosco-18.avif"},{id:"archive-image-019",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/690518a540e9289f7abb9faa_220719003624020036.avif"},{id:"archive-image-020",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/690518c9c5873500a83b6bd0_220719003624120014.avif"},{id:"archive-image-021",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/690518d72b43bafea8332f3e_220719003624050009-Edit.avif"},{id:"archive-image-022",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/690518f0c5671628a94f1562_20231118-1803212-001-16.avif"},{id:"archive-image-023",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/680a71161c2012036f98ec67_stephen-cosco-59.avif"},{id:"archive-image-024",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/6905197c80a70fa61670d74c_index_screenshots.avif"},{id:"archive-image-025",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/6905199c0ff8fc1ce4496a63_20231118-1803213-001-31.avif"},{id:"archive-image-026",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/6904d3413273aff69aae7f7f_MACBOOK-MOCKUP-0122%20copy.avif"},{id:"archive-image-027",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/680a726e346e5a1c89b70b9b_stephen-cosco-14.avif"},{id:"archive-image-028",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69051fc636c9ee3c294cf193_renegade-archive-tablet-full.avif"},{id:"archive-image-029",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/680a727be03e8668802ea180_stephen-cosco-68.avif"},{id:"archive-image-030",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076de687ede58922159491_835d464b0dca3fa7d1198da18723f250_cosco-archive-2.avif"},{id:"archive-image-031",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/680a728f9bf42c395d22ddde_stephen-cosco-4.avif"},{id:"archive-image-032",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69051aae8c732c1cc80b729b_DSC00714-1.avif"},{id:"archive-image-033",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69051af2c3abc8af78159292_220902004432010006.avif"},{id:"archive-image-034",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69051b5fd47ff9dfa35e2c43_Emma.avif"},{id:"archive-image-035",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69051c63f44cb19477865cda_220719003624180028.avif"},{id:"archive-image-036",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69051c6e7800f980410a2ba6_manola-homepage-mobile.avif"},{id:"archive-image-037",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69051c8644447cc2880506a1_20240111-2013704-079-positive.avif"},{id:"archive-image-038",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/680a73789f3f1383f23d4c9a_stephen-cosco-60.avif"},{id:"archive-image-039",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/680a739d5eca17c17a78bc46_stephen-cosco-54.avif"},{id:"archive-image-040",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69051cc452a8e80109ffb004_20240111-2013705-021-positive.avif"},{id:"archive-image-041",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/680a73b1ff00431da310490d_stephen-cosco-42.avif"},{id:"archive-image-042",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/680a7449c769460bb8dc1916_stephen-cosco-44.avif"},{id:"archive-image-043",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69051d04f9576cad6fa2d63c_dal-tablets.avif"},{id:"archive-image-044",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69051d1ca1ca7499396c97b1_220902004432040001.avif"},{id:"archive-image-045",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69051d2a98a8f80cfdc0ac5a_fnt-featured.avif"},{id:"archive-image-046",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69051d3c2dad815e703fc411_20230804-1304607-0016.avif"},{id:"archive-image-047",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/680a73420d1fd5315b1b3c87_stephen-cosco-39.avif"},{id:"archive-image-048",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/680a7439eeee4bfdd1beef42_stephen-cosco-83.avif"},{id:"archive-image-049",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69051d80fd87545006c79a07_renegade-fullscreen.avif"},{id:"archive-image-050",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69051d9b2a1e63e5ccf1bcaf_20240207-2171103-089-positive-Edit-2.avif"},{id:"archive-image-051",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69051daa46bc2ef4a0edb532_302342_0007-1.avif"},{id:"archive-image-052",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69051de1e7f20ff276390989_20230804-1304605-0028.avif"},{id:"archive-image-053",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/680a74bcb3d2265c7c23559f_stephen-cosco-34.avif"},{id:"archive-image-054",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69051e6281a93e1fde06383d_220719003624070036-Edit.avif"},{id:"archive-image-055",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/690e2b00fbd6ae8e03603fd6_Manola-slider.avif"},{id:"archive-image-056",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/680a74e39e1f1c396f9dabab_stephen-cosco-67.avif"},{id:"archive-image-057",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/680a7505b5dfb8fe2e73c494_stephen-cosco-48.avif"},{id:"archive-image-058",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69051ebf285d76c8feebaa0c_20230804-1304603-0029-positive.avif"},{id:"archive-image-059",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69051ed450dd6000901d257a_renegade-paper3.avif"},{id:"archive-image-060",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/680a754ebdad02f4ef39cf79_stephen-cosco-64.avif"},{id:"archive-image-061",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69051efe570c2c569b96a4d8_dal-pdp.avif"},{id:"archive-image-062",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69051f08ff7ef63434a81ab8_dal-stories-1.avif"},{id:"archive-image-063",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69051f291f5b9fd8bd4be435_220719003624170008.avif"},{id:"archive-image-064",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69051f37ae90debc068eaabb_wlw-pdp-phones.avif"},{id:"archive-image-065",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69051f5349adbd9af8d8e095_20240207-2171104-149.avif"},{id:"archive-image-066",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/680a75ca7a8ddacd1bc80107_stephen-cosco-115.avif"},{id:"archive-image-067",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69051fa3e06096afd7de1975_20230804-1304605-0035.avif"},{id:"archive-image-068",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69051fb17d72bafed993d47e_DSC03520-Edit.avif"},{id:"archive-image-069",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69051fea87881520f8faf5b8_230217007904030035.avif"},{id:"archive-image-070",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69052049ecafd368a340bffb_480395_0033-3.avif"},{id:"archive-image-071",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69052063cb378a85d131757e_230217007904010025.avif"},{id:"archive-image-072",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69052074a502d0958768ad5a_dal%20-%20macbook%204.avif"},{id:"archive-image-073",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69052089a3a7bf1614f5c2a1_20230804-1304601-0008-positive.avif"},{id:"archive-image-074",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/680a7d9cef0420fb287eb229_0bead3c47cb29177fc92673e30f7fbf2_stephen-cosco-92.avif"},{id:"archive-image-075",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/680a7d9bebc42918cd0b28af_stephen-cosco-80.avif"},{id:"archive-image-076",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69052117e9a8af6a503b550f_220719003624020018.avif"},{id:"archive-image-077",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69052132ce4cec81d187ebab_220719003624130027.avif"},{id:"archive-image-078",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/6905213d00e214ca38d5cf52_220719003624110010.avif"},{id:"archive-image-079",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/6905217315633a4e4357e92d_230217007904020031.avif"},{id:"archive-image-080",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/6905219f15633a4e4357f310_The%20Volume%20Poster2.avif"},{id:"archive-image-081",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/680a7526d4c68538179a38b4_stephen-cosco-75.avif"},{id:"archive-image-082",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/690520de2cef3e7b8fdd99a0_20240207-2171105-175.avif"},{id:"archive-image-083",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69051cf68de1209418552ec2_25-04-10-4381113-0%2032-positive.avif"},{id:"archive-image-084",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076de90a0c537e5a8117bf_060fb36fc6a880fa6112089dfe87dcc9_cosco-archive-3.avif"}],Eu=[{id:"archive-mobile-image-001",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076dec5f456f77386386b2_cosco-archive-15.avif"},{id:"archive-mobile-image-002",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076deb4cb2d0116fe8da6e_cosco-archive-16.avif"},{id:"archive-mobile-image-003",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076deb6031dfaacaf6bdcd_cosco-archive-17.avif"},{id:"archive-mobile-image-004",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076deb043ccfe688541b6c_cosco-archive-14.avif"},{id:"archive-mobile-image-005",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076debedc89e709d163c7b_cosco-archive-18.avif"},{id:"archive-mobile-image-006",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076deb225ee4460cfba164_cosco-archive-19.avif"},{id:"archive-mobile-image-007",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076deb5f456f7738638681_cosco-archive-36.avif"},{id:"archive-mobile-image-008",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076deb750fdefaeabf3539_cosco-archive-20.avif"},{id:"archive-mobile-image-009",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076deb3c228aa6bd2163b4_cosco-archive-60.avif"},{id:"archive-mobile-image-010",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076deb043ccfe688541b56_cosco-archive-52.avif"},{id:"archive-mobile-image-011",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076deb19ca00923307b196_cosco-archive-51.avif"},{id:"archive-mobile-image-012",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076deb0fa10c5d626074f7_cosco-archive-35.avif"},{id:"archive-mobile-image-013",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076dea016fe09d35a68849_cosco-archive-50.avif"},{id:"archive-mobile-image-014",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076deaa57558ad3369260d_cosco-archive-72.avif"},{id:"archive-mobile-image-015",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076dea1c8930c360f07be0_cosco-archive-30.avif"},{id:"archive-mobile-image-016",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076dea85c0c5cdaa8d31a6_cosco-archive-8.avif"},{id:"archive-mobile-image-017",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076dea5b93950f7686908d_cosco-archive-12.avif"},{id:"archive-mobile-image-018",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076dea7bfc824831784c8a_cosco-archive-11.avif"},{id:"archive-mobile-image-019",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076deaf9d2a79222b02460_cosco-archive-5.avif"},{id:"archive-mobile-image-020",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076dea925b642e45856ebe_cosco-archive-37.avif"},{id:"archive-mobile-image-021",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076dea9984bd617f963fb6_cosco-archive-70.avif"},{id:"archive-mobile-image-022",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076deaa632f23997a84a5d_cosco-archive-48.avif"},{id:"archive-mobile-image-023",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076dea407b21d560d6c7d2_cosco-archive-85.avif"},{id:"archive-mobile-image-024",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076dea1ac3ba7124b3e179_cosco-archive-66.avif"},{id:"archive-mobile-image-025",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076deab47331a4d73876fd_cosco-archive-65.avif"},{id:"archive-mobile-image-026",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076deacf5965b7ab1a1e96_cosco-archive-31.avif"},{id:"archive-mobile-image-027",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076de93917f833252e661d_cosco-archive-58.avif"},{id:"archive-mobile-image-028",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076de90a0c537e5a8117bf_cosco-archive-3.avif"},{id:"archive-mobile-image-029",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076de9b877c8b1484f58e4_cosco-archive-43.avif"},{id:"archive-mobile-image-030",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076de950f2e3002303ecd3_cosco-archive-28.avif"},{id:"archive-mobile-image-031",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076de99e2deb54cc090aef_cosco-archive-33.avif"},{id:"archive-mobile-image-032",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076de92d82c1e31fbf2d42_cosco-archive-46.avif"},{id:"archive-mobile-image-033",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076de9559f31a9c059fc29_cosco-archive-13.avif"},{id:"archive-mobile-image-034",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076de9edee260753a37f86_cosco-archive-67.avif"},{id:"archive-mobile-image-035",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076de83d343eacde823a7a_cosco-archive-82.avif"},{id:"archive-mobile-image-036",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076de84bb4b377555c8847_cosco-archive-41.avif"},{id:"archive-mobile-image-037",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076de8559f31a9c059fbd0_cosco-archive-47.avif"},{id:"archive-mobile-image-038",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076de806bc77ef643eb12f_cosco-archive-64.avif"},{id:"archive-mobile-image-039",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076de819ca00923307b157_cosco-archive-55.avif"},{id:"archive-mobile-image-040",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076de82a7fee6a709b9505_cosco-archive-45.avif"},{id:"archive-mobile-image-041",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076de89e714bc46b571d68_cosco-archive-83.avif"},{id:"archive-mobile-image-042",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076de86c5b3049dde525b9_cosco-archive-84.avif"},{id:"archive-mobile-image-043",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076de8af19854065b59c2d_cosco-archive-81.avif"},{id:"archive-mobile-image-044",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076de744bba020b2d36bbf_cosco-archive-79.avif"},{id:"archive-mobile-image-045",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076de7925b642e45856e43_cosco-archive-71.avif"},{id:"archive-mobile-image-046",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076de7eabdeca3151a1a8d_cosco-archive-74.avif"},{id:"archive-mobile-image-047",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076de7fedc115462996d68_cosco-archive-76.avif"},{id:"archive-mobile-image-048",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076de7e02d9505305f4a82_cosco-archive-78.avif"},{id:"archive-mobile-image-049",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076de783eb3b81d3585001_cosco-archive-75.avif"},{id:"archive-mobile-image-050",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076de796f08def568bc855_cosco-archive-80.avif"},{id:"archive-mobile-image-051",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076de71ac3ba7124b3e0ad_cosco-archive-77.avif"},{id:"archive-mobile-image-052",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076de718905abc392280b4_cosco-archive-73.avif"},{id:"archive-mobile-image-053",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076de7f205e1e50505af2a_cosco-archive-56.avif"},{id:"archive-mobile-image-054",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076de7fa6875df889e1ea9_cosco-archive-69.avif"},{id:"archive-mobile-image-055",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076de783fc6e08aac37588_cosco-archive-57.avif"},{id:"archive-mobile-image-056",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076de72d0be33e59717b6e_cosco-archive-63.avif"},{id:"archive-mobile-image-057",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076de77e5fc505b9bf4e2a_cosco-archive-68.avif"},{id:"archive-mobile-image-058",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076de75b508b4ffc9b8a60_cosco-archive-44.avif"},{id:"archive-mobile-image-059",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076de75b508b4ffc9b8a5d_cosco-archive-59.avif"},{id:"archive-mobile-image-060",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076de71f4a5827fe6ca011_cosco-archive-6.avif"},{id:"archive-mobile-image-061",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076de72c7c4e086bdfe86b_cosco-archive-49.avif"},{id:"archive-mobile-image-062",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076de7637da0b05db959e0_cosco-archive-54.avif"},{id:"archive-mobile-image-063",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076de7f9d2a79222b023d6_cosco-archive-53.avif"},{id:"archive-mobile-image-064",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076de6180c4364fcb88131_cosco-archive-42.avif"},{id:"archive-mobile-image-065",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076de669261d0557db24f2_cosco-archive-61.avif"},{id:"archive-mobile-image-066",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076de66031dfaacaf6bd2d_cosco-archive-62.avif"},{id:"archive-mobile-image-067",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076de696b2ea520c783dd9_cosco-archive-26.avif"},{id:"archive-mobile-image-068",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076de6d1dd54727813ddcb_cosco-archive-27.avif"},{id:"archive-mobile-image-069",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076de67cd6438e3bbd0242_cosco-archive-40.avif"},{id:"archive-mobile-image-070",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076de63d343eacde823a37_cosco-archive-39.avif"},{id:"archive-mobile-image-071",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076de6ad50d9bd766757f0_cosco-archive-38.avif"},{id:"archive-mobile-image-072",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076de60fa10c5d62607433_cosco-archive-7.avif"},{id:"archive-mobile-image-073",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076de683eb3b81d3584fc9_cosco-archive-9.avif"},{id:"archive-mobile-image-074",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076de621ac2617e79f1211_cosco-archive-22.avif"},{id:"archive-mobile-image-075",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076de6f863f58737f20f1b_cosco-archive-24.avif"},{id:"archive-mobile-image-076",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076de60d3c837ca04f6f0a_cosco-archive-1.avif"},{id:"archive-mobile-image-077",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076de625d3d4f912d22073_cosco-archive-4.avif"},{id:"archive-mobile-image-078",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076de63ffc25050aedf1a4_cosco-archive-32.avif"},{id:"archive-mobile-image-079",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076de687ede58922159491_cosco-archive-2.avif"},{id:"archive-mobile-image-080",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076de67af118e819073724_cosco-archive-29.avif"},{id:"archive-mobile-image-081",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076de618905abc39228098_cosco-archive-25.avif"},{id:"archive-mobile-image-082",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076de6e20b5f65048e41c0_cosco-archive-23.avif"},{id:"archive-mobile-image-083",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076de6007b33fe8999590b_cosco-archive-21.avif"},{id:"archive-mobile-image-084",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076de63f5592f89dae8688_cosco-archive-10.avif"},{id:"archive-mobile-image-085",type:"image",src:"https://cdn.prod.website-files.com/652b2f3a422fddacbf2c2549/69076de64283f4085fc72faf_cosco-archive-34.avif"}]});function gd(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Fs(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function k0(){let r=Fs("canvas");return r.style.display="block",r}function vd(...r){let e="THREE."+r.shift();Ns&&Ns("log",e,...r)}function Fe(...r){let e="THREE."+r.shift();Ns&&Ns("warn",e,...r)}function Ze(...r){let e="THREE."+r.shift();Ns&&Ns("error",e,...r)}function Us(...r){let e=r.join(" ");e in Lm||(Lm[e]=!0,Fe(...r))}function z0(r,e,t){return new Promise(function(i,n){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:n();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function js(){let r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Gt[r&255]+Gt[r>>8&255]+Gt[r>>16&255]+Gt[r>>24&255]+"-"+Gt[e&255]+Gt[e>>8&255]+"-"+Gt[e>>16&15|64]+Gt[e>>24&255]+"-"+Gt[t&63|128]+Gt[t>>8&255]+"-"+Gt[t>>16&255]+Gt[t>>24&255]+Gt[i&255]+Gt[i>>8&255]+Gt[i>>16&255]+Gt[i>>24&255]).toLowerCase()}function Je(r,e,t){return Math.max(e,Math.min(t,r))}function xd(r,e){return(r%e+e)%e}function xy(r,e,t,i,n){return i+(r-e)*(n-i)/(t-e)}function _y(r,e,t){return r!==e?(t-r)/(e-r):0}function Ba(r,e,t){return(1-t)*r+t*e}function yy(r,e,t,i){return Ba(r,e,1-Math.exp(-t*i))}function by(r,e=1){return e-Math.abs(xd(r,e*2)-e)}function Sy(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function My(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function wy(r,e){return r+Math.floor(Math.random()*(e-r+1))}function Ey(r,e){return r+Math.random()*(e-r)}function Ty(r){return r*(.5-Math.random())}function Ay(r){r!==void 0&&(Im=r);let e=Im+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Cy(r){return r*Ua}function Py(r){return r*Bs}function Ry(r){return(r&r-1)===0&&r!==0}function Ly(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Iy(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Dy(r,e,t,i,n){let s=Math.cos,a=Math.sin,o=s(t/2),c=a(t/2),l=s((e+i)/2),h=a((e+i)/2),u=s((e-i)/2),d=a((e-i)/2),f=s((i-e)/2),x=a((i-e)/2);switch(n){case"XYX":r.set(o*h,c*u,c*d,o*l);break;case"YZY":r.set(c*d,o*h,c*u,o*l);break;case"ZXZ":r.set(c*u,c*d,o*h,o*l);break;case"XZX":r.set(o*h,c*x,c*f,o*l);break;case"YXY":r.set(c*f,o*h,c*x,o*l);break;case"ZYZ":r.set(c*x,c*f,o*h,o*l);break;default:Fe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function Is(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function ei(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}function Oy(){let r={enabled:!0,workingColorSpace:Nr,spaces:{},convert:function(n,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===st&&(n.r=Tn(n.r),n.g=Tn(n.g),n.b=Tn(n.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(n.applyMatrix3(this.spaces[s].toXYZ),n.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===st&&(n.r=Ds(n.r),n.g=Ds(n.g),n.b=Ds(n.b))),n},workingToColorSpace:function(n,s){return this.convert(n,this.workingColorSpace,s)},colorSpaceToWorking:function(n,s){return this.convert(n,s,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Rn?za:this.spaces[n].transfer},getToneMappingMode:function(n){return this.spaces[n].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(n,s=this.workingColorSpace){return n.fromArray(this.spaces[s].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,s,a){return n.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(n,s){return Us("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(n,s)},toWorkingColorSpace:function(n,s){return Us("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(n,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return r.define({[Nr]:{primaries:e,whitePoint:i,transfer:za,toXYZ:Om,fromXYZ:Fm,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:zt},outputColorSpaceConfig:{drawingBufferColorSpace:zt}},[zt]:{primaries:e,whitePoint:i,transfer:st,toXYZ:Om,fromXYZ:Fm,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:zt}}}),r}function Tn(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Ds(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}function Cu(r){return typeof HTMLImageElement!="undefined"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&r instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&r instanceof ImageBitmap?Ic.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(Fe("Texture: Unable to serialize Texture."),{})}function Ru(r,e,t,i,n){for(let s=0,a=r.length-3;s<=a;s+=3){Rr.fromArray(r,s);let o=n.x*Math.abs(Rr.x)+n.y*Math.abs(Rr.y)+n.z*Math.abs(Rr.z),c=e.dot(Rr),l=t.dot(Rr),h=i.dot(Rr);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}function Gu(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}function Yy(r,e,t,i,n,s,a,o){let c;if(e.side===ti?c=i.intersectTriangle(a,s,n,!0,o):c=i.intersectTriangle(n,s,a,e.side===An,o),c===null)return null;bc.copy(o),bc.applyMatrix4(r.matrixWorld);let l=t.ray.origin.distanceTo(bc);return l<t.near||l>t.far?null:{distance:l,point:bc.clone(),object:r}}function Sc(r,e,t,i,n,s,a,o,c,l){r.getVertexPosition(o,vc),r.getVertexPosition(c,xc),r.getVertexPosition(l,_c);let h=Yy(r,e,t,i,vc,xc,_c,qm);if(h){let u=new W;$n.getBarycoord(qm,vc,xc,_c,u),n&&(h.uv=$n.getInterpolatedAttribute(n,o,c,l,u,new He)),s&&(h.uv1=$n.getInterpolatedAttribute(s,o,c,l,u,new He)),a&&(h.normal=$n.getInterpolatedAttribute(a,o,c,l,u,new W),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:c,c:l,normal:new W,materialIndex:0};$n.getNormal(vc,xc,_c,d.normal),h.face=d,h.barycoord=u}return h}function Gr(r){let e={};for(let t in r){e[t]={};for(let i in r[t]){let n=r[t][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(Fe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=n.clone():Array.isArray(n)?e[t][i]=n.slice():e[t][i]=n}}return e}function Yt(r){let e={};for(let t=0;t<r.length;t++){let i=Gr(r[t]);for(let n in i)e[n]=i[n]}return e}function jy(r){let e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function _d(r){let e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:it.workingColorSpace}function wc(r,e){return!r||r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function tb(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function $m(r,e){return r.distance-e.distance}function Qu(r,e,t,i){let n=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(n=!1),n===!0&&i===!0){let s=r.children;for(let a=0,o=s.length;a<o;a++)Qu(s[a],e,t,!0)}}function Sd(r,e,t,i){let n=hb(i);switch(t){case ud:return r*e;case fd:return r*e/n.components*n.byteLength;case ul:return r*e/n.components*n.byteLength;case dl:return r*e*2/n.components*n.byteLength;case fl:return r*e*2/n.components*n.byteLength;case dd:return r*e*3/n.components*n.byteLength;case Ni:return r*e*4/n.components*n.byteLength;case pl:return r*e*4/n.components*n.byteLength;case oo:case co:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case lo:case ho:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case gl:case xl:return Math.max(r,16)*Math.max(e,8)/4;case ml:case vl:return Math.max(r,8)*Math.max(e,8)/2;case _l:case yl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case bl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Sl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Ml:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case wl:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case El:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Tl:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Al:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Cl:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Pl:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Rl:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Ll:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Il:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Dl:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Ol:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Fl:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Nl:case Ul:case Bl:return Math.ceil(r/4)*Math.ceil(e/4)*16;case kl:case zl:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Hl:case Vl:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function hb(r){switch(r){case sn:case od:return{byteLength:1,components:1};case Xs:case cd:case Vr:return{byteLength:2,components:1};case ll:case hl:return{byteLength:2,components:4};case nr:case cl:case an:return{byteLength:4,components:1};case ld:case hd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}var ir,Km,ed,Jm,td,Qm,tn,An,ti,Ei,nn,Or,id,nd,rd,e0,Kn,t0,i0,n0,r0,s0,a0,o0,c0,Ac,Cc,l0,h0,u0,d0,f0,p0,m0,g0,v0,Jc,Qc,el,Fr,tl,il,nl,rl,sd,x0,_0,Pn,y0,b0,S0,M0,w0,E0,T0,ad,zr,Hr,sl,al,so,Pc,$i,Rc,di,A0,ao,Dt,ol,rn,sn,od,cd,Xs,cl,nr,an,Vr,ll,hl,qs,ld,hd,ud,dd,Ni,Os,Ys,fd,ul,dl,fl,pl,oo,co,lo,ho,ml,gl,vl,xl,_l,yl,bl,Sl,Ml,wl,El,Tl,Al,Cl,Pl,Rl,Ll,Il,Dl,Ol,Fl,Nl,Ul,Bl,kl,zl,Hl,Vl,ka,Lc,Ec,Yu,ju,Zu,C0,P0,R0,L0,Rn,zt,Nr,za,st,Dr,$u,I0,D0,O0,pd,F0,N0,U0,B0,Ku,md,Vi,Ha,Lm,Ns,Ji,Gt,Im,Ua,Bs,Gl,He,bi,W,Tu,Dm,ke,Au,Om,Fm,it,_s,Ic,Fy,ks,Ny,Pu,qt,wt,Dc,Qi,Va,Oc,Jn,yn,ki,oc,ys,bs,Ss,Wn,Xn,Pr,Da,cc,lc,Rr,Uy,Oa,Lu,zs,bn,Iu,hc,qn,Du,uc,Ou,Ga,Rt,Ms,zi,By,ky,Yn,dc,xi,Nm,Um,en,Hs,zy,Bm,ws,Sn,fc,Fa,Hy,Vy,km,zm,Hm,Vm,Gy,Es,Fu,Si,Hi,Mn,Nu,wn,Ts,As,Gm,Uu,Bu,ku,zu,Hu,Vu,$n,H0,jn,pc,et,Wt,Wy,Ur,Qn,Pt,mc,Xy,yi,Wa,Xa,Ki,qy,Oi,Wu,Cs,_i,Na,Nt,Cn,Wm,Lr,gc,Xm,vc,xc,_c,Xu,yc,qm,bc,Mi,Vs,V0,Zy,$y,Fi,qa,Zn,Ym,jm,Xt,Ps,Rs,Fc,Ya,Nc,En,Ky,Gs,ja,Uc,qu,Jy,Qy,Zi,Ir,eb,Mc,Za,$a,Ka,Ja,Br,Bc,kc,kr,zc,Hc,Vc,wi,er,Gc,Wc,Xc,Qa,tr,qc,Tc,Yc,G0,Ws,Ls,jc,eo,Zc,$c,to,Kc,io,yd,ib,bd,nb,rb,sb,ab,ob,cb,lb,Ju,pt,JT,Zm,no,ro,Md=Zt(()=>{ir={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Km=0,ed=1,Jm=2,td=1,Qm=2,tn=3,An=0,ti=1,Ei=2,nn=0,Or=1,id=2,nd=3,rd=4,e0=5,Kn=100,t0=101,i0=102,n0=103,r0=104,s0=200,a0=201,o0=202,c0=203,Ac=204,Cc=205,l0=206,h0=207,u0=208,d0=209,f0=210,p0=211,m0=212,g0=213,v0=214,Jc=0,Qc=1,el=2,Fr=3,tl=4,il=5,nl=6,rl=7,sd=0,x0=1,_0=2,Pn=0,y0=1,b0=2,S0=3,M0=4,w0=5,E0=6,T0=7,ad=300,zr=301,Hr=302,sl=303,al=304,so=306,Pc=1e3,$i=1001,Rc=1002,di=1003,A0=1004,ao=1005,Dt=1006,ol=1007,rn=1008,sn=1009,od=1010,cd=1011,Xs=1012,cl=1013,nr=1014,an=1015,Vr=1016,ll=1017,hl=1018,qs=1020,ld=35902,hd=35899,ud=1021,dd=1022,Ni=1023,Os=1026,Ys=1027,fd=1028,ul=1029,dl=1030,fl=1031,pl=1033,oo=33776,co=33777,lo=33778,ho=33779,ml=35840,gl=35841,vl=35842,xl=35843,_l=36196,yl=37492,bl=37496,Sl=37808,Ml=37809,wl=37810,El=37811,Tl=37812,Al=37813,Cl=37814,Pl=37815,Rl=37816,Ll=37817,Il=37818,Dl=37819,Ol=37820,Fl=37821,Nl=36492,Ul=36494,Bl=36495,kl=36283,zl=36284,Hl=36285,Vl=36286,ka=2300,Lc=2301,Ec=2302,Yu=2400,ju=2401,Zu=2402,C0=3200,P0=3201,R0=0,L0=1,Rn="",zt="srgb",Nr="srgb-linear",za="linear",st="srgb",Dr=7680,$u=519,I0=512,D0=513,O0=514,pd=515,F0=516,N0=517,U0=518,B0=519,Ku=35044,md="300 es",Vi=2e3,Ha=2001;Lm={},Ns=null;Ji=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let n=i[e];if(n!==void 0){let s=n.indexOf(t);s!==-1&&n.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let n=i.slice(0);for(let s=0,a=n.length;s<a;s++)n[s].call(this,e);e.target=null}}},Gt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Im=1234567,Ua=Math.PI/180,Bs=180/Math.PI;Gl={DEG2RAD:Ua,RAD2DEG:Bs,generateUUID:js,clamp:Je,euclideanModulo:xd,mapLinear:xy,inverseLerp:_y,lerp:Ba,damp:yy,pingpong:by,smoothstep:Sy,smootherstep:My,randInt:wy,randFloat:Ey,randFloatSpread:Ty,seededRandom:Ay,degToRad:Cy,radToDeg:Py,isPowerOfTwo:Ry,ceilPowerOfTwo:Ly,floorPowerOfTwo:Iy,setQuaternionFromProperEuler:Dy,normalize:ei,denormalize:Is},He=class r{constructor(e=0,t=0){r.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6],this.y=n[1]*t+n[4]*i+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),n=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*n+e.x,this.y=s*n+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},bi=class{constructor(e=0,t=0,i=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=n}static slerpFlat(e,t,i,n,s,a,o){let c=i[n+0],l=i[n+1],h=i[n+2],u=i[n+3],d=s[a+0],f=s[a+1],x=s[a+2],g=s[a+3];if(o<=0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(o>=1){e[t+0]=d,e[t+1]=f,e[t+2]=x,e[t+3]=g;return}if(u!==g||c!==d||l!==f||h!==x){let m=c*d+l*f+h*x+u*g;m<0&&(d=-d,f=-f,x=-x,g=-g,m=-m);let p=1-o;if(m<.9995){let S=Math.acos(m),y=Math.sin(S);p=Math.sin(p*S)/y,o=Math.sin(o*S)/y,c=c*p+d*o,l=l*p+f*o,h=h*p+x*o,u=u*p+g*o}else{c=c*p+d*o,l=l*p+f*o,h=h*p+x*o,u=u*p+g*o;let S=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=S,l*=S,h*=S,u*=S}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,n,s,a){let o=i[n],c=i[n+1],l=i[n+2],h=i[n+3],u=s[a],d=s[a+1],f=s[a+2],x=s[a+3];return e[t]=o*x+h*u+c*f-l*d,e[t+1]=c*x+h*d+l*u-o*f,e[t+2]=l*x+h*f+o*d-c*u,e[t+3]=h*x-o*u-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,n){return this._x=e,this._y=t,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,n=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(i/2),h=o(n/2),u=o(s/2),d=c(i/2),f=c(n/2),x=c(s/2);switch(a){case"XYZ":this._x=d*h*u+l*f*x,this._y=l*f*u-d*h*x,this._z=l*h*x+d*f*u,this._w=l*h*u-d*f*x;break;case"YXZ":this._x=d*h*u+l*f*x,this._y=l*f*u-d*h*x,this._z=l*h*x-d*f*u,this._w=l*h*u+d*f*x;break;case"ZXY":this._x=d*h*u-l*f*x,this._y=l*f*u+d*h*x,this._z=l*h*x+d*f*u,this._w=l*h*u-d*f*x;break;case"ZYX":this._x=d*h*u-l*f*x,this._y=l*f*u+d*h*x,this._z=l*h*x-d*f*u,this._w=l*h*u+d*f*x;break;case"YZX":this._x=d*h*u+l*f*x,this._y=l*f*u+d*h*x,this._z=l*h*x-d*f*u,this._w=l*h*u-d*f*x;break;case"XZY":this._x=d*h*u-l*f*x,this._y=l*f*u-d*h*x,this._z=l*h*x+d*f*u,this._w=l*h*u+d*f*x;break;default:Fe("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,n=Math.sin(i);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],n=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=i+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(s-l)*f,this._z=(a-n)*f}else if(i>o&&i>u){let f=2*Math.sqrt(1+i-o-u);this._w=(h-c)/f,this._x=.25*f,this._y=(n+a)/f,this._z=(s+l)/f}else if(o>u){let f=2*Math.sqrt(1+o-i-u);this._w=(s-l)/f,this._x=(n+a)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+u-i-o);this._w=(a-n)/f,this._x=(s+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Je(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let n=Math.min(1,t/i);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,n=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=i*h+a*o+n*l-s*c,this._y=n*h+a*c+s*o-i*l,this._z=s*h+a*l+i*c-n*o,this._w=a*h-i*o-n*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let i=e._x,n=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,n=-n,s=-s,a=-a,o=-o);let c=1-t;if(o<.9995){let l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+i*t,this._y=this._y*c+n*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+i*t,this._y=this._y*c+n*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(n*Math.sin(e),n*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},W=class r{constructor(e=0,t=0,i=0){r.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Dm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Dm.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,n=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*n,this.y=s[1]*t+s[4]*i+s[7]*n,this.z=s[2]*t+s[5]*i+s[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,n=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*n+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*n+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*n+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*n+s[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,n=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*n-o*i),h=2*(o*t-s*n),u=2*(s*i-a*t);return this.x=t+c*l+a*u-o*h,this.y=i+c*h+o*l-s*u,this.z=n+c*u+s*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,n=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*n,this.y=s[1]*t+s[5]*i+s[9]*n,this.z=s[2]*t+s[6]*i+s[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this.z=Je(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this.z=Je(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,n=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=n*c-s*o,this.y=s*a-i*c,this.z=i*o-n*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Tu.copy(this).projectOnVector(e),this.sub(Tu)}reflect(e){return this.sub(Tu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,n=this.z-e.z;return t*t+i*i+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let n=Math.sin(t)*e;return this.x=n*Math.sin(i),this.y=Math.cos(t)*e,this.z=n*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Tu=new W,Dm=new bi,ke=class r{constructor(e,t,i,n,s,a,o,c,l){r.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,n,s,a,o,c,l)}set(e,t,i,n,s,a,o,c,l){let h=this.elements;return h[0]=e,h[1]=n,h[2]=o,h[3]=t,h[4]=s,h[5]=c,h[6]=i,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,n=t.elements,s=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],h=i[4],u=i[7],d=i[2],f=i[5],x=i[8],g=n[0],m=n[3],p=n[6],S=n[1],y=n[4],w=n[7],A=n[2],T=n[5],R=n[8];return s[0]=a*g+o*S+c*A,s[3]=a*m+o*y+c*T,s[6]=a*p+o*w+c*R,s[1]=l*g+h*S+u*A,s[4]=l*m+h*y+u*T,s[7]=l*p+h*w+u*R,s[2]=d*g+f*S+x*A,s[5]=d*m+f*y+x*T,s[8]=d*p+f*w+x*R,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-i*s*h+i*o*c+n*s*l-n*a*c}invert(){let e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=h*a-o*l,d=o*c-h*s,f=l*s-a*c,x=t*u+i*d+n*f;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/x;return e[0]=u*g,e[1]=(n*l-h*i)*g,e[2]=(o*i-n*a)*g,e[3]=d*g,e[4]=(h*t-n*c)*g,e[5]=(n*s-o*t)*g,e[6]=f*g,e[7]=(i*c-l*t)*g,e[8]=(a*t-i*s)*g,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,n,s,a,o){let c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*a+l*o)+a+e,-n*l,n*c,-n*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Au.makeScale(e,t)),this}rotate(e){return this.premultiply(Au.makeRotation(-e)),this}translate(e,t){return this.premultiply(Au.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let n=0;n<9;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Au=new ke,Om=new ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Fm=new ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);it=Oy();Ic=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{_s===void 0&&(_s=Fs("canvas")),_s.width=e.width,_s.height=e.height;let n=_s.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),i=_s}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){let t=Fs("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let n=i.getImageData(0,0,e.width,e.height),s=n.data;for(let a=0;a<s.length;a++)s[a]=Tn(s[a]/255)*255;return i.putImageData(n,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Tn(t[i]/255)*255):t[i]=Tn(t[i]);return{data:t,width:e.width,height:e.height}}else return Fe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Fy=0,ks=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Fy++}),this.uuid=js(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement!="undefined"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let s;if(Array.isArray(n)){s=[];for(let a=0,o=n.length;a<o;a++)n[a].isDataTexture?s.push(Cu(n[a].image)):s.push(Cu(n[a]))}else s=Cu(n);i.url=s}return t||(e.images[this.uuid]=i),i}};Ny=0,Pu=new W,qt=class r extends Ji{constructor(e=r.DEFAULT_IMAGE,t=r.DEFAULT_MAPPING,i=$i,n=$i,s=Dt,a=rn,o=Ni,c=sn,l=r.DEFAULT_ANISOTROPY,h=Rn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ny++}),this.uuid=js(),this.name="",this.source=new ks(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new He(0,0),this.repeat=new He(1,1),this.center=new He(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Pu).x}get height(){return this.source.getSize(Pu).y}get depth(){return this.source.getSize(Pu).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){Fe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let n=this[t];if(n===void 0){Fe(`Texture.setValues(): property '${t}' does not exist.`);continue}n&&i&&n.isVector2&&i.isVector2||n&&i&&n.isVector3&&i.isVector3||n&&i&&n.isMatrix3&&i.isMatrix3?n.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ad)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Pc:e.x=e.x-Math.floor(e.x);break;case $i:e.x=e.x<0?0:1;break;case Rc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Pc:e.y=e.y-Math.floor(e.y);break;case $i:e.y=e.y<0?0:1;break;case Rc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};qt.DEFAULT_IMAGE=null;qt.DEFAULT_MAPPING=ad;qt.DEFAULT_ANISOTROPY=1;wt=class r{constructor(e=0,t=0,i=0,n=1){r.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,n=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*n+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*n+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*n+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*n+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,n,s,c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],x=c[9],g=c[2],m=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-g)<.01&&Math.abs(x-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+g)<.1&&Math.abs(x+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let y=(l+1)/2,w=(f+1)/2,A=(p+1)/2,T=(h+d)/4,R=(u+g)/4,N=(x+m)/4;return y>w&&y>A?y<.01?(i=0,n=.707106781,s=.707106781):(i=Math.sqrt(y),n=T/i,s=R/i):w>A?w<.01?(i=.707106781,n=0,s=.707106781):(n=Math.sqrt(w),i=T/n,s=N/n):A<.01?(i=.707106781,n=.707106781,s=0):(s=Math.sqrt(A),i=R/s,n=N/s),this.set(i,n,s,t),this}let S=Math.sqrt((m-x)*(m-x)+(u-g)*(u-g)+(d-h)*(d-h));return Math.abs(S)<.001&&(S=1),this.x=(m-x)/S,this.y=(u-g)/S,this.z=(d-h)/S,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this.z=Je(this.z,e.z,t.z),this.w=Je(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this.z=Je(this.z,e,t),this.w=Je(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Dc=class extends Ji{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Dt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new wt(0,0,e,t),this.scissorTest=!1,this.viewport=new wt(0,0,e,t);let n={width:e,height:t,depth:i.depth},s=new qt(n);this.textures=[];let a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){let t={minFilter:Dt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let n=0,s=this.textures.length;n<s;n++)this.textures[n].image.width=e,this.textures[n].image.height=t,this.textures[n].image.depth=i,this.textures[n].isData3DTexture!==!0&&(this.textures[n].isArrayTexture=this.textures[n].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new ks(n)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Qi=class extends Dc{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Va=class extends qt{constructor(e=null,t=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=di,this.minFilter=di,this.wrapR=$i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Oc=class extends qt{constructor(e=null,t=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=di,this.minFilter=di,this.wrapR=$i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Jn=class{constructor(e=new W(1/0,1/0,1/0),t=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(ki.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(ki.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=ki.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,ki):ki.fromBufferAttribute(s,a),ki.applyMatrix4(e.matrixWorld),this.expandByPoint(ki);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),oc.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),oc.copy(i.boundingBox)),oc.applyMatrix4(e.matrixWorld),this.union(oc)}let n=e.children;for(let s=0,a=n.length;s<a;s++)this.expandByObject(n[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ki),ki.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Da),cc.subVectors(this.max,Da),ys.subVectors(e.a,Da),bs.subVectors(e.b,Da),Ss.subVectors(e.c,Da),Wn.subVectors(bs,ys),Xn.subVectors(Ss,bs),Pr.subVectors(ys,Ss);let t=[0,-Wn.z,Wn.y,0,-Xn.z,Xn.y,0,-Pr.z,Pr.y,Wn.z,0,-Wn.x,Xn.z,0,-Xn.x,Pr.z,0,-Pr.x,-Wn.y,Wn.x,0,-Xn.y,Xn.x,0,-Pr.y,Pr.x,0];return!Ru(t,ys,bs,Ss,cc)||(t=[1,0,0,0,1,0,0,0,1],!Ru(t,ys,bs,Ss,cc))?!1:(lc.crossVectors(Wn,Xn),t=[lc.x,lc.y,lc.z],Ru(t,ys,bs,Ss,cc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ki).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ki).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(yn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),yn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),yn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),yn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),yn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),yn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),yn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),yn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(yn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},yn=[new W,new W,new W,new W,new W,new W,new W,new W],ki=new W,oc=new Jn,ys=new W,bs=new W,Ss=new W,Wn=new W,Xn=new W,Pr=new W,Da=new W,cc=new W,lc=new W,Rr=new W;Uy=new Jn,Oa=new W,Lu=new W,zs=class{constructor(e=new W,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Uy.setFromPoints(e).getCenter(i);let n=0;for(let s=0,a=e.length;s<a;s++)n=Math.max(n,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Oa.subVectors(e,this.center);let t=Oa.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),n=(i-this.radius)*.5;this.center.addScaledVector(Oa,n/i),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Lu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Oa.copy(e.center).add(Lu)),this.expandByPoint(Oa.copy(e.center).sub(Lu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},bn=new W,Iu=new W,hc=new W,qn=new W,Du=new W,uc=new W,Ou=new W,Ga=class{constructor(e=new W,t=new W(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,bn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=bn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(bn.copy(this.origin).addScaledVector(this.direction,t),bn.distanceToSquared(e))}distanceSqToSegment(e,t,i,n){Iu.copy(e).add(t).multiplyScalar(.5),hc.copy(t).sub(e).normalize(),qn.copy(this.origin).sub(Iu);let s=e.distanceTo(t)*.5,a=-this.direction.dot(hc),o=qn.dot(this.direction),c=-qn.dot(hc),l=qn.lengthSq(),h=Math.abs(1-a*a),u,d,f,x;if(h>0)if(u=a*c-o,d=a*o-c,x=s*h,u>=0)if(d>=-x)if(d<=x){let g=1/h;u*=g,d*=g,f=u*(u+a*d+2*o)+d*(a*u+d+2*c)+l}else d=s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d=-s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d<=-x?(u=Math.max(0,-(-a*s+o)),d=u>0?-s:Math.min(Math.max(-s,-c),s),f=-u*u+d*(d+2*c)+l):d<=x?(u=0,d=Math.min(Math.max(-s,-c),s),f=d*(d+2*c)+l):(u=Math.max(0,-(a*s+o)),d=u>0?s:Math.min(Math.max(-s,-c),s),f=-u*u+d*(d+2*c)+l);else d=a>0?-s:s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,u),n&&n.copy(Iu).addScaledVector(hc,d),f}intersectSphere(e,t){bn.subVectors(e.center,this.origin);let i=bn.dot(this.direction),n=bn.dot(bn)-i*i,s=e.radius*e.radius;if(n>s)return null;let a=Math.sqrt(s-n),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,n,s,a,o,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(i=(e.min.x-d.x)*l,n=(e.max.x-d.x)*l):(i=(e.max.x-d.x)*l,n=(e.min.x-d.x)*l),h>=0?(s=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),i>a||s>n||((s>i||isNaN(i))&&(i=s),(a<n||isNaN(n))&&(n=a),u>=0?(o=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),i>c||o>n)||((o>i||i!==i)&&(i=o),(c<n||n!==n)&&(n=c),n<0)?null:this.at(i>=0?i:n,t)}intersectsBox(e){return this.intersectBox(e,bn)!==null}intersectTriangle(e,t,i,n,s){Du.subVectors(t,e),uc.subVectors(i,e),Ou.crossVectors(Du,uc);let a=this.direction.dot(Ou),o;if(a>0){if(n)return null;o=1}else if(a<0)o=-1,a=-a;else return null;qn.subVectors(this.origin,e);let c=o*this.direction.dot(uc.crossVectors(qn,uc));if(c<0)return null;let l=o*this.direction.dot(Du.cross(qn));if(l<0||c+l>a)return null;let h=-o*qn.dot(Ou);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Rt=class r{constructor(e,t,i,n,s,a,o,c,l,h,u,d,f,x,g,m){r.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,n,s,a,o,c,l,h,u,d,f,x,g,m)}set(e,t,i,n,s,a,o,c,l,h,u,d,f,x,g,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=n,p[1]=s,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=x,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new r().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,n=1/Ms.setFromMatrixColumn(e,0).length(),s=1/Ms.setFromMatrixColumn(e,1).length(),a=1/Ms.setFromMatrixColumn(e,2).length();return t[0]=i[0]*n,t[1]=i[1]*n,t[2]=i[2]*n,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,n=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(n),l=Math.sin(n),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){let d=a*h,f=a*u,x=o*h,g=o*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=f+x*l,t[5]=d-g*l,t[9]=-o*c,t[2]=g-d*l,t[6]=x+f*l,t[10]=a*c}else if(e.order==="YXZ"){let d=c*h,f=c*u,x=l*h,g=l*u;t[0]=d+g*o,t[4]=x*o-f,t[8]=a*l,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-x,t[6]=g+d*o,t[10]=a*c}else if(e.order==="ZXY"){let d=c*h,f=c*u,x=l*h,g=l*u;t[0]=d-g*o,t[4]=-a*u,t[8]=x+f*o,t[1]=f+x*o,t[5]=a*h,t[9]=g-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let d=a*h,f=a*u,x=o*h,g=o*u;t[0]=c*h,t[4]=x*l-f,t[8]=d*l+g,t[1]=c*u,t[5]=g*l+d,t[9]=f*l-x,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let d=a*c,f=a*l,x=o*c,g=o*l;t[0]=c*h,t[4]=g-d*u,t[8]=x*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=f*u+x,t[10]=d-g*u}else if(e.order==="XZY"){let d=a*c,f=a*l,x=o*c,g=o*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+g,t[5]=a*h,t[9]=f*u-x,t[2]=x*u-f,t[6]=o*h,t[10]=g*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(By,e,ky)}lookAt(e,t,i){let n=this.elements;return xi.subVectors(e,t),xi.lengthSq()===0&&(xi.z=1),xi.normalize(),Yn.crossVectors(i,xi),Yn.lengthSq()===0&&(Math.abs(i.z)===1?xi.x+=1e-4:xi.z+=1e-4,xi.normalize(),Yn.crossVectors(i,xi)),Yn.normalize(),dc.crossVectors(xi,Yn),n[0]=Yn.x,n[4]=dc.x,n[8]=xi.x,n[1]=Yn.y,n[5]=dc.y,n[9]=xi.y,n[2]=Yn.z,n[6]=dc.z,n[10]=xi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,n=t.elements,s=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],h=i[1],u=i[5],d=i[9],f=i[13],x=i[2],g=i[6],m=i[10],p=i[14],S=i[3],y=i[7],w=i[11],A=i[15],T=n[0],R=n[4],N=n[8],b=n[12],M=n[1],O=n[5],z=n[9],G=n[13],K=n[2],J=n[6],j=n[10],ce=n[14],X=n[3],fe=n[7],pe=n[11],Ce=n[15];return s[0]=a*T+o*M+c*K+l*X,s[4]=a*R+o*O+c*J+l*fe,s[8]=a*N+o*z+c*j+l*pe,s[12]=a*b+o*G+c*ce+l*Ce,s[1]=h*T+u*M+d*K+f*X,s[5]=h*R+u*O+d*J+f*fe,s[9]=h*N+u*z+d*j+f*pe,s[13]=h*b+u*G+d*ce+f*Ce,s[2]=x*T+g*M+m*K+p*X,s[6]=x*R+g*O+m*J+p*fe,s[10]=x*N+g*z+m*j+p*pe,s[14]=x*b+g*G+m*ce+p*Ce,s[3]=S*T+y*M+w*K+A*X,s[7]=S*R+y*O+w*J+A*fe,s[11]=S*N+y*z+w*j+A*pe,s[15]=S*b+y*G+w*ce+A*Ce,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],n=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],f=e[14],x=e[3],g=e[7],m=e[11],p=e[15];return x*(+s*c*u-n*l*u-s*o*d+i*l*d+n*o*f-i*c*f)+g*(+t*c*f-t*l*d+s*a*d-n*a*f+n*l*h-s*c*h)+m*(+t*l*u-t*o*f-s*a*u+i*a*f+s*o*h-i*l*h)+p*(-n*o*h-t*c*u+t*o*d+n*a*u-i*a*d+i*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],f=e[11],x=e[12],g=e[13],m=e[14],p=e[15],S=u*m*l-g*d*l+g*c*f-o*m*f-u*c*p+o*d*p,y=x*d*l-h*m*l-x*c*f+a*m*f+h*c*p-a*d*p,w=h*g*l-x*u*l+x*o*f-a*g*f-h*o*p+a*u*p,A=x*u*c-h*g*c-x*o*d+a*g*d+h*o*m-a*u*m,T=t*S+i*y+n*w+s*A;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/T;return e[0]=S*R,e[1]=(g*d*s-u*m*s-g*n*f+i*m*f+u*n*p-i*d*p)*R,e[2]=(o*m*s-g*c*s+g*n*l-i*m*l-o*n*p+i*c*p)*R,e[3]=(u*c*s-o*d*s-u*n*l+i*d*l+o*n*f-i*c*f)*R,e[4]=y*R,e[5]=(h*m*s-x*d*s+x*n*f-t*m*f-h*n*p+t*d*p)*R,e[6]=(x*c*s-a*m*s-x*n*l+t*m*l+a*n*p-t*c*p)*R,e[7]=(a*d*s-h*c*s+h*n*l-t*d*l-a*n*f+t*c*f)*R,e[8]=w*R,e[9]=(x*u*s-h*g*s-x*i*f+t*g*f+h*i*p-t*u*p)*R,e[10]=(a*g*s-x*o*s+x*i*l-t*g*l-a*i*p+t*o*p)*R,e[11]=(h*o*s-a*u*s-h*i*l+t*u*l+a*i*f-t*o*f)*R,e[12]=A*R,e[13]=(h*g*n-x*u*n+x*i*d-t*g*d-h*i*m+t*u*m)*R,e[14]=(x*o*n-a*g*n-x*i*c+t*g*c+a*i*m-t*o*m)*R,e[15]=(a*u*n-h*o*n+h*i*c-t*u*c-a*i*d+t*o*d)*R,this}scale(e){let t=this.elements,i=e.x,n=e.y,s=e.z;return t[0]*=i,t[4]*=n,t[8]*=s,t[1]*=i,t[5]*=n,t[9]*=s,t[2]*=i,t[6]*=n,t[10]*=s,t[3]*=i,t[7]*=n,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,n))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),n=Math.sin(t),s=1-i,a=e.x,o=e.y,c=e.z,l=s*a,h=s*o;return this.set(l*a+i,l*o-n*c,l*c+n*o,0,l*o+n*c,h*o+i,h*c-n*a,0,l*c-n*o,h*c+n*a,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,n,s,a){return this.set(1,i,s,0,e,1,a,0,t,n,1,0,0,0,0,1),this}compose(e,t,i){let n=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,h=a+a,u=o+o,d=s*l,f=s*h,x=s*u,g=a*h,m=a*u,p=o*u,S=c*l,y=c*h,w=c*u,A=i.x,T=i.y,R=i.z;return n[0]=(1-(g+p))*A,n[1]=(f+w)*A,n[2]=(x-y)*A,n[3]=0,n[4]=(f-w)*T,n[5]=(1-(d+p))*T,n[6]=(m+S)*T,n[7]=0,n[8]=(x+y)*R,n[9]=(m-S)*R,n[10]=(1-(d+g))*R,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,i){let n=this.elements,s=Ms.set(n[0],n[1],n[2]).length(),a=Ms.set(n[4],n[5],n[6]).length(),o=Ms.set(n[8],n[9],n[10]).length();this.determinant()<0&&(s=-s),e.x=n[12],e.y=n[13],e.z=n[14],zi.copy(this);let l=1/s,h=1/a,u=1/o;return zi.elements[0]*=l,zi.elements[1]*=l,zi.elements[2]*=l,zi.elements[4]*=h,zi.elements[5]*=h,zi.elements[6]*=h,zi.elements[8]*=u,zi.elements[9]*=u,zi.elements[10]*=u,t.setFromRotationMatrix(zi),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,n,s,a,o=Vi,c=!1){let l=this.elements,h=2*s/(t-e),u=2*s/(i-n),d=(t+e)/(t-e),f=(i+n)/(i-n),x,g;if(c)x=s/(a-s),g=a*s/(a-s);else if(o===Vi)x=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===Ha)x=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=x,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,n,s,a,o=Vi,c=!1){let l=this.elements,h=2/(t-e),u=2/(i-n),d=-(t+e)/(t-e),f=-(i+n)/(i-n),x,g;if(c)x=1/(a-s),g=a/(a-s);else if(o===Vi)x=-2/(a-s),g=-(a+s)/(a-s);else if(o===Ha)x=-1/(a-s),g=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=u,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=x,l[14]=g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let n=0;n<16;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Ms=new W,zi=new Rt,By=new W(0,0,0),ky=new W(1,1,1),Yn=new W,dc=new W,xi=new W,Nm=new Rt,Um=new bi,en=class r{constructor(e=0,t=0,i=0,n=r.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,n=this._order){return this._x=e,this._y=t,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let n=e.elements,s=n[0],a=n[4],o=n[8],c=n[1],l=n[5],h=n[9],u=n[2],d=n[6],f=n[10];switch(t){case"XYZ":this._y=Math.asin(Je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Je(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Je(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Je(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Je(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Fe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Nm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Nm,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Um.setFromEuler(this),this.setFromQuaternion(Um,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};en.DEFAULT_ORDER="XYZ";Hs=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},zy=0,Bm=new W,ws=new bi,Sn=new Rt,fc=new W,Fa=new W,Hy=new W,Vy=new bi,km=new W(1,0,0),zm=new W(0,1,0),Hm=new W(0,0,1),Vm={type:"added"},Gy={type:"removed"},Es={type:"childadded",child:null},Fu={type:"childremoved",child:null},Si=class r extends Ji{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zy++}),this.uuid=js(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let e=new W,t=new en,i=new bi,n=new W(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new Rt},normalMatrix:{value:new ke}}),this.matrix=new Rt,this.matrixWorld=new Rt,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Hs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ws.setFromAxisAngle(e,t),this.quaternion.multiply(ws),this}rotateOnWorldAxis(e,t){return ws.setFromAxisAngle(e,t),this.quaternion.premultiply(ws),this}rotateX(e){return this.rotateOnAxis(km,e)}rotateY(e){return this.rotateOnAxis(zm,e)}rotateZ(e){return this.rotateOnAxis(Hm,e)}translateOnAxis(e,t){return Bm.copy(e).applyQuaternion(this.quaternion),this.position.add(Bm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(km,e)}translateY(e){return this.translateOnAxis(zm,e)}translateZ(e){return this.translateOnAxis(Hm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Sn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?fc.copy(e):fc.set(e,t,i);let n=this.parent;this.updateWorldMatrix(!0,!1),Fa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Sn.lookAt(Fa,fc,this.up):Sn.lookAt(fc,Fa,this.up),this.quaternion.setFromRotationMatrix(Sn),n&&(Sn.extractRotation(n.matrixWorld),ws.setFromRotationMatrix(Sn),this.quaternion.premultiply(ws.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ze("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Vm),Es.child=e,this.dispatchEvent(Es),Es.child=null):Ze("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Gy),Fu.child=e,this.dispatchEvent(Fu),Fu.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Sn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Sn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Sn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Vm),Es.child=e,this.dispatchEvent(Es),Es.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,n=this.children.length;i<n;i++){let a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let n=this.children;for(let s=0,a=n.length;s<a;s++)n[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fa,e,Hy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fa,Vy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let n=this.children;for(let s=0,a=n.length;s<a;s++)n[s].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),n.instanceInfo=this._instanceInfo.map(o=>({...o})),n.availableInstanceIds=this._availableInstanceIds.slice(),n.availableGeometryIds=this._availableGeometryIds.slice(),n.nextIndexStart=this._nextIndexStart,n.nextVertexStart=this._nextVertexStart,n.geometryCount=this._geometryCount,n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.matricesTexture=this._matricesTexture.toJSON(e),n.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(n.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(n.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];s(e.shapes,u)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));n.material=o}else n.material=s(e.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];n.animations.push(s(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),x=a(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),x.length>0&&(i.nodes=x)}return i.object=n,i;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let n=e.children[i];this.add(n.clone())}return this}};Si.DEFAULT_UP=new W(0,1,0);Si.DEFAULT_MATRIX_AUTO_UPDATE=!0;Si.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;Hi=new W,Mn=new W,Nu=new W,wn=new W,Ts=new W,As=new W,Gm=new W,Uu=new W,Bu=new W,ku=new W,zu=new wt,Hu=new wt,Vu=new wt,$n=class r{constructor(e=new W,t=new W,i=new W){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,n){n.subVectors(i,t),Hi.subVectors(e,t),n.cross(Hi);let s=n.lengthSq();return s>0?n.multiplyScalar(1/Math.sqrt(s)):n.set(0,0,0)}static getBarycoord(e,t,i,n,s){Hi.subVectors(n,t),Mn.subVectors(i,t),Nu.subVectors(e,t);let a=Hi.dot(Hi),o=Hi.dot(Mn),c=Hi.dot(Nu),l=Mn.dot(Mn),h=Mn.dot(Nu),u=a*l-o*o;if(u===0)return s.set(0,0,0),null;let d=1/u,f=(l*c-o*h)*d,x=(a*h-o*c)*d;return s.set(1-f-x,x,f)}static containsPoint(e,t,i,n){return this.getBarycoord(e,t,i,n,wn)===null?!1:wn.x>=0&&wn.y>=0&&wn.x+wn.y<=1}static getInterpolation(e,t,i,n,s,a,o,c){return this.getBarycoord(e,t,i,n,wn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,wn.x),c.addScaledVector(a,wn.y),c.addScaledVector(o,wn.z),c)}static getInterpolatedAttribute(e,t,i,n,s,a){return zu.setScalar(0),Hu.setScalar(0),Vu.setScalar(0),zu.fromBufferAttribute(e,t),Hu.fromBufferAttribute(e,i),Vu.fromBufferAttribute(e,n),a.setScalar(0),a.addScaledVector(zu,s.x),a.addScaledVector(Hu,s.y),a.addScaledVector(Vu,s.z),a}static isFrontFacing(e,t,i,n){return Hi.subVectors(i,t),Mn.subVectors(e,t),Hi.cross(Mn).dot(n)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,n){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,i,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Hi.subVectors(this.c,this.b),Mn.subVectors(this.a,this.b),Hi.cross(Mn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return r.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return r.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,n,s){return r.getInterpolation(e,this.a,this.b,this.c,t,i,n,s)}containsPoint(e){return r.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return r.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,n=this.b,s=this.c,a,o;Ts.subVectors(n,i),As.subVectors(s,i),Uu.subVectors(e,i);let c=Ts.dot(Uu),l=As.dot(Uu);if(c<=0&&l<=0)return t.copy(i);Bu.subVectors(e,n);let h=Ts.dot(Bu),u=As.dot(Bu);if(h>=0&&u<=h)return t.copy(n);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(i).addScaledVector(Ts,a);ku.subVectors(e,s);let f=Ts.dot(ku),x=As.dot(ku);if(x>=0&&f<=x)return t.copy(s);let g=f*l-c*x;if(g<=0&&l>=0&&x<=0)return o=l/(l-x),t.copy(i).addScaledVector(As,o);let m=h*x-f*u;if(m<=0&&u-h>=0&&f-x>=0)return Gm.subVectors(s,n),o=(u-h)/(u-h+(f-x)),t.copy(n).addScaledVector(Gm,o);let p=1/(m+g+d);return a=g*p,o=d*p,t.copy(i).addScaledVector(Ts,a).addScaledVector(As,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},H0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},jn={h:0,s:0,l:0},pc={h:0,s:0,l:0};et=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=zt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,it.colorSpaceToWorking(this,t),this}setRGB(e,t,i,n=it.workingColorSpace){return this.r=e,this.g=t,this.b=i,it.colorSpaceToWorking(this,n),this}setHSL(e,t,i,n=it.workingColorSpace){if(e=xd(e,1),t=Je(t,0,1),i=Je(i,0,1),t===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=Gu(a,s,e+1/3),this.g=Gu(a,s,e),this.b=Gu(a,s,e-1/3)}return it.colorSpaceToWorking(this,n),this}setStyle(e,t=zt){function i(s){s!==void 0&&parseFloat(s)<1&&Fe("Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=n[1],o=n[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Fe("Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=n[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Fe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=zt){let i=H0[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Fe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Tn(e.r),this.g=Tn(e.g),this.b=Tn(e.b),this}copyLinearToSRGB(e){return this.r=Ds(e.r),this.g=Ds(e.g),this.b=Ds(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=zt){return it.workingToColorSpace(Wt.copy(this),e),Math.round(Je(Wt.r*255,0,255))*65536+Math.round(Je(Wt.g*255,0,255))*256+Math.round(Je(Wt.b*255,0,255))}getHexString(e=zt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=it.workingColorSpace){it.workingToColorSpace(Wt.copy(this),t);let i=Wt.r,n=Wt.g,s=Wt.b,a=Math.max(i,n,s),o=Math.min(i,n,s),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case i:c=(n-s)/u+(n<s?6:0);break;case n:c=(s-i)/u+2;break;case s:c=(i-n)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=it.workingColorSpace){return it.workingToColorSpace(Wt.copy(this),t),e.r=Wt.r,e.g=Wt.g,e.b=Wt.b,e}getStyle(e=zt){it.workingToColorSpace(Wt.copy(this),e);let t=Wt.r,i=Wt.g,n=Wt.b;return e!==zt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(e,t,i){return this.getHSL(jn),this.setHSL(jn.h+e,jn.s+t,jn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(jn),e.getHSL(pc);let i=Ba(jn.h,pc.h,t),n=Ba(jn.s,pc.s,t),s=Ba(jn.l,pc.l,t);return this.setHSL(i,n,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,n=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*n,this.g=s[1]*t+s[4]*i+s[7]*n,this.b=s[2]*t+s[5]*i+s[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Wt=new et;et.NAMES=H0;Wy=0,Ur=class extends Ji{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Wy++}),this.uuid=js(),this.name="",this.type="Material",this.blending=Or,this.side=An,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ac,this.blendDst=Cc,this.blendEquation=Kn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new et(0,0,0),this.blendAlpha=0,this.depthFunc=Fr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$u,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Dr,this.stencilZFail=Dr,this.stencilZPass=Dr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){Fe(`Material: parameter '${t}' has value of undefined.`);continue}let n=this[t];if(n===void 0){Fe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Or&&(i.blending=this.blending),this.side!==An&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ac&&(i.blendSrc=this.blendSrc),this.blendDst!==Cc&&(i.blendDst=this.blendDst),this.blendEquation!==Kn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Fr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==$u&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Dr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Dr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Dr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(s){let a=[];for(let o in s){let c=s[o];delete c.metadata,a.push(c)}return a}if(t){let s=n(e.textures),a=n(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let n=t.length;i=new Array(n);for(let s=0;s!==n;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Qn=class extends Ur{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new en,this.combine=sd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Pt=new W,mc=new He,Xy=0,yi=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Xy++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Ku,this.updateRanges=[],this.gpuType=an,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let n=0,s=this.itemSize;n<s;n++)this.array[e+n]=t.array[i+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)mc.fromBufferAttribute(this,t),mc.applyMatrix3(e),this.setXY(t,mc.x,mc.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix3(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix4(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Pt.fromBufferAttribute(this,t),Pt.applyNormalMatrix(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Pt.fromBufferAttribute(this,t),Pt.transformDirection(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Is(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ei(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Is(t,this.array)),t}setX(e,t){return this.normalized&&(t=ei(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Is(t,this.array)),t}setY(e,t){return this.normalized&&(t=ei(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Is(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ei(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Is(t,this.array)),t}setW(e,t){return this.normalized&&(t=ei(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=ei(t,this.array),i=ei(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,n){return e*=this.itemSize,this.normalized&&(t=ei(t,this.array),i=ei(i,this.array),n=ei(n,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this}setXYZW(e,t,i,n,s){return e*=this.itemSize,this.normalized&&(t=ei(t,this.array),i=ei(i,this.array),n=ei(n,this.array),s=ei(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ku&&(e.usage=this.usage),e}},Wa=class extends yi{constructor(e,t,i){super(new Uint16Array(e),t,i)}},Xa=class extends yi{constructor(e,t,i){super(new Uint32Array(e),t,i)}},Ki=class extends yi{constructor(e,t,i){super(new Float32Array(e),t,i)}},qy=0,Oi=new Rt,Wu=new Si,Cs=new W,_i=new Jn,Na=new Jn,Nt=new W,Cn=class r extends Ji{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qy++}),this.uuid=js(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(gd(e)?Xa:Wa)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new ke().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}let n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Oi.makeRotationFromQuaternion(e),this.applyMatrix4(Oi),this}rotateX(e){return Oi.makeRotationX(e),this.applyMatrix4(Oi),this}rotateY(e){return Oi.makeRotationY(e),this.applyMatrix4(Oi),this}rotateZ(e){return Oi.makeRotationZ(e),this.applyMatrix4(Oi),this}translate(e,t,i){return Oi.makeTranslation(e,t,i),this.applyMatrix4(Oi),this}scale(e,t,i){return Oi.makeScale(e,t,i),this.applyMatrix4(Oi),this}lookAt(e){return Wu.lookAt(e),Wu.updateMatrix(),this.applyMatrix4(Wu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Cs).negate(),this.translate(Cs.x,Cs.y,Cs.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let n=0,s=e.length;n<s;n++){let a=e[n];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ki(i,3))}else{let i=Math.min(e.length,t.count);for(let n=0;n<i;n++){let s=e[n];t.setXYZ(n,s.x,s.y,s.z||0)}e.length>t.count&&Fe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Jn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ze("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,n=t.length;i<n;i++){let s=t[i];_i.setFromBufferAttribute(s),this.morphTargetsRelative?(Nt.addVectors(this.boundingBox.min,_i.min),this.boundingBox.expandByPoint(Nt),Nt.addVectors(this.boundingBox.max,_i.max),this.boundingBox.expandByPoint(Nt)):(this.boundingBox.expandByPoint(_i.min),this.boundingBox.expandByPoint(_i.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ze('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zs);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ze("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(e){let i=this.boundingSphere.center;if(_i.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let o=t[s];Na.setFromBufferAttribute(o),this.morphTargetsRelative?(Nt.addVectors(_i.min,Na.min),_i.expandByPoint(Nt),Nt.addVectors(_i.max,Na.max),_i.expandByPoint(Nt)):(_i.expandByPoint(Na.min),_i.expandByPoint(Na.max))}_i.getCenter(i);let n=0;for(let s=0,a=e.count;s<a;s++)Nt.fromBufferAttribute(e,s),n=Math.max(n,i.distanceToSquared(Nt));if(t)for(let s=0,a=t.length;s<a;s++){let o=t[s],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Nt.fromBufferAttribute(o,l),c&&(Cs.fromBufferAttribute(e,l),Nt.add(Cs)),n=Math.max(n,i.distanceToSquared(Nt))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&Ze('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ze("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,n=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new yi(new Float32Array(4*i.count),4));let a=this.getAttribute("tangent"),o=[],c=[];for(let N=0;N<i.count;N++)o[N]=new W,c[N]=new W;let l=new W,h=new W,u=new W,d=new He,f=new He,x=new He,g=new W,m=new W;function p(N,b,M){l.fromBufferAttribute(i,N),h.fromBufferAttribute(i,b),u.fromBufferAttribute(i,M),d.fromBufferAttribute(s,N),f.fromBufferAttribute(s,b),x.fromBufferAttribute(s,M),h.sub(l),u.sub(l),f.sub(d),x.sub(d);let O=1/(f.x*x.y-x.x*f.y);isFinite(O)&&(g.copy(h).multiplyScalar(x.y).addScaledVector(u,-f.y).multiplyScalar(O),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-x.x).multiplyScalar(O),o[N].add(g),o[b].add(g),o[M].add(g),c[N].add(m),c[b].add(m),c[M].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let N=0,b=S.length;N<b;++N){let M=S[N],O=M.start,z=M.count;for(let G=O,K=O+z;G<K;G+=3)p(e.getX(G+0),e.getX(G+1),e.getX(G+2))}let y=new W,w=new W,A=new W,T=new W;function R(N){A.fromBufferAttribute(n,N),T.copy(A);let b=o[N];y.copy(b),y.sub(A.multiplyScalar(A.dot(b))).normalize(),w.crossVectors(T,b);let O=w.dot(c[N])<0?-1:1;a.setXYZW(N,y.x,y.y,y.z,O)}for(let N=0,b=S.length;N<b;++N){let M=S[N],O=M.start,z=M.count;for(let G=O,K=O+z;G<K;G+=3)R(e.getX(G+0)),R(e.getX(G+1)),R(e.getX(G+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new yi(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);let n=new W,s=new W,a=new W,o=new W,c=new W,l=new W,h=new W,u=new W;if(e)for(let d=0,f=e.count;d<f;d+=3){let x=e.getX(d+0),g=e.getX(d+1),m=e.getX(d+2);n.fromBufferAttribute(t,x),s.fromBufferAttribute(t,g),a.fromBufferAttribute(t,m),h.subVectors(a,s),u.subVectors(n,s),h.cross(u),o.fromBufferAttribute(i,x),c.fromBufferAttribute(i,g),l.fromBufferAttribute(i,m),o.add(h),c.add(h),l.add(h),i.setXYZ(x,o.x,o.y,o.z),i.setXYZ(g,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)n.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,s),u.subVectors(n,s),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Nt.fromBufferAttribute(e,t),Nt.normalize(),e.setXYZ(t,Nt.x,Nt.y,Nt.z)}toNonIndexed(){function e(o,c){let l=o.array,h=o.itemSize,u=o.normalized,d=new l.constructor(c.length*h),f=0,x=0;for(let g=0,m=c.length;g<m;g++){o.isInterleavedBufferAttribute?f=c[g]*o.data.stride+o.offset:f=c[g]*h;for(let p=0;p<h;p++)d[x++]=l[f++]}return new yi(d,h,u)}if(this.index===null)return Fe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new r,i=this.index.array,n=this.attributes;for(let o in n){let c=n[o],l=e(c,i);t.setAttribute(o,l)}let s=this.morphAttributes;for(let o in s){let c=[],l=s[o];for(let h=0,u=l.length;h<u;h++){let d=l[h],f=e(d,i);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let c in i){let l=i[c];e.data.attributes[c]=l.toJSON(e.data)}let n={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let f=l[u];h.push(f.toJSON(e.data))}h.length>0&&(n[c]=h,s=!0)}s&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let n=e.attributes;for(let l in n){let h=n[l];this.setAttribute(l,h.clone(t))}let s=e.morphAttributes;for(let l in s){let h=[],u=s[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,h=a.length;l<h;l++){let u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Wm=new Rt,Lr=new Ga,gc=new zs,Xm=new W,vc=new W,xc=new W,_c=new W,Xu=new W,yc=new W,qm=new W,bc=new W,Mi=class extends Si{constructor(e=new Cn,t=new Qn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=n.length;s<a;s++){let o=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){let i=this.geometry,n=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(n,e);let o=this.morphTargetInfluences;if(s&&o){yc.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let h=o[c],u=s[c];h!==0&&(Xu.fromBufferAttribute(u,e),a?yc.addScaledVector(Xu,h):yc.addScaledVector(Xu.sub(t),h))}t.add(yc)}return t}raycast(e,t){let i=this.geometry,n=this.material,s=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),gc.copy(i.boundingSphere),gc.applyMatrix4(s),Lr.copy(e.ray).recast(e.near),!(gc.containsPoint(Lr.origin)===!1&&(Lr.intersectSphere(gc,Xm)===null||Lr.origin.distanceToSquared(Xm)>(e.far-e.near)**2))&&(Wm.copy(s).invert(),Lr.copy(e.ray).applyMatrix4(Wm),!(i.boundingBox!==null&&Lr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Lr)))}_computeIntersections(e,t,i){let n,s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,g=d.length;x<g;x++){let m=d[x],p=a[m.materialIndex],S=Math.max(m.start,f.start),y=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let w=S,A=y;w<A;w+=3){let T=o.getX(w),R=o.getX(w+1),N=o.getX(w+2);n=Sc(this,p,e,i,l,h,u,T,R,N),n&&(n.faceIndex=Math.floor(w/3),n.face.materialIndex=m.materialIndex,t.push(n))}}else{let x=Math.max(0,f.start),g=Math.min(o.count,f.start+f.count);for(let m=x,p=g;m<p;m+=3){let S=o.getX(m),y=o.getX(m+1),w=o.getX(m+2);n=Sc(this,a,e,i,l,h,u,S,y,w),n&&(n.faceIndex=Math.floor(m/3),t.push(n))}}else if(c!==void 0)if(Array.isArray(a))for(let x=0,g=d.length;x<g;x++){let m=d[x],p=a[m.materialIndex],S=Math.max(m.start,f.start),y=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let w=S,A=y;w<A;w+=3){let T=w,R=w+1,N=w+2;n=Sc(this,p,e,i,l,h,u,T,R,N),n&&(n.faceIndex=Math.floor(w/3),n.face.materialIndex=m.materialIndex,t.push(n))}}else{let x=Math.max(0,f.start),g=Math.min(c.count,f.start+f.count);for(let m=x,p=g;m<p;m+=3){let S=m,y=m+1,w=m+2;n=Sc(this,a,e,i,l,h,u,S,y,w),n&&(n.faceIndex=Math.floor(m/3),t.push(n))}}}};Vs=class r extends Cn{constructor(e=1,t=1,i=1,n=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:n,heightSegments:s,depthSegments:a};let o=this;n=Math.floor(n),s=Math.floor(s),a=Math.floor(a);let c=[],l=[],h=[],u=[],d=0,f=0;x("z","y","x",-1,-1,i,t,e,a,s,0),x("z","y","x",1,-1,i,t,-e,a,s,1),x("x","z","y",1,1,e,i,t,n,a,2),x("x","z","y",1,-1,e,i,-t,n,a,3),x("x","y","z",1,-1,e,t,i,n,s,4),x("x","y","z",-1,-1,e,t,-i,n,s,5),this.setIndex(c),this.setAttribute("position",new Ki(l,3)),this.setAttribute("normal",new Ki(h,3)),this.setAttribute("uv",new Ki(u,2));function x(g,m,p,S,y,w,A,T,R,N,b){let M=w/R,O=A/N,z=w/2,G=A/2,K=T/2,J=R+1,j=N+1,ce=0,X=0,fe=new W;for(let pe=0;pe<j;pe++){let Ce=pe*O-G;for(let Ne=0;Ne<J;Ne++){let tt=Ne*M-z;fe[g]=tt*S,fe[m]=Ce*y,fe[p]=K,l.push(fe.x,fe.y,fe.z),fe[g]=0,fe[m]=0,fe[p]=T>0?1:-1,h.push(fe.x,fe.y,fe.z),u.push(Ne/R),u.push(1-pe/N),ce+=1}}for(let pe=0;pe<N;pe++)for(let Ce=0;Ce<R;Ce++){let Ne=d+Ce+J*pe,tt=d+Ce+J*(pe+1),Xe=d+(Ce+1)+J*(pe+1),$e=d+(Ce+1)+J*pe;c.push(Ne,tt,$e),c.push(tt,Xe,$e),X+=6}o.addGroup(f,X,b),f+=X,d+=ce}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};V0={clone:Gr,merge:Yt},Zy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$y=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Fi=class extends Ur{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Zy,this.fragmentShader=$y,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Gr(e.uniforms),this.uniformsGroups=jy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let a=this.uniforms[n].value;a&&a.isTexture?t.uniforms[n]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[n]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[n]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[n]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[n]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[n]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[n]={type:"m4",value:a.toArray()}:t.uniforms[n]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},qa=class extends Si{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Rt,this.projectionMatrix=new Rt,this.projectionMatrixInverse=new Rt,this.coordinateSystem=Vi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Zn=new W,Ym=new He,jm=new He,Xt=class extends qa{constructor(e=50,t=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Bs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ua*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Bs*2*Math.atan(Math.tan(Ua*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Zn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Zn.x,Zn.y).multiplyScalar(-e/Zn.z),Zn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Zn.x,Zn.y).multiplyScalar(-e/Zn.z)}getViewSize(e,t){return this.getViewBounds(e,Ym,jm),t.subVectors(jm,Ym)}setViewOffset(e,t,i,n,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ua*.5*this.fov)/this.zoom,i=2*t,n=this.aspect*i,s=-.5*n,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*n/c,t-=a.offsetY*i/l,n*=a.width/c,i*=a.height/l}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+n,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ps=-90,Rs=1,Fc=class extends Si{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let n=new Xt(Ps,Rs,e,t);n.layers=this.layers,this.add(n);let s=new Xt(Ps,Rs,e,t);s.layers=this.layers,this.add(s);let a=new Xt(Ps,Rs,e,t);a.layers=this.layers,this.add(a);let o=new Xt(Ps,Rs,e,t);o.layers=this.layers,this.add(o);let c=new Xt(Ps,Rs,e,t);c.layers=this.layers,this.add(c);let l=new Xt(Ps,Rs,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,n,s,a,o,c]=t;for(let l of t)this.remove(l);if(e===Vi)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Ha)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;let g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,n),e.render(t,s),e.setRenderTarget(i,1,n),e.render(t,a),e.setRenderTarget(i,2,n),e.render(t,o),e.setRenderTarget(i,3,n),e.render(t,c),e.setRenderTarget(i,4,n),e.render(t,l),i.texture.generateMipmaps=g,e.setRenderTarget(i,5,n),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}},Ya=class extends qt{constructor(e=[],t=zr,i,n,s,a,o,c,l,h){super(e,t,i,n,s,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Nc=class extends Qi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},n=[i,i,i,i,i,i];this.texture=new Ya(n),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new Vs(5,5,5),s=new Fi({name:"CubemapFromEquirect",uniforms:Gr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ti,blending:nn});s.uniforms.tEquirect.value=t;let a=new Mi(n,s),o=t.minFilter;return t.minFilter===rn&&(t.minFilter=Dt),new Fc(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,n=!0){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,n);e.setRenderTarget(s)}},En=class extends Si{constructor(){super(),this.isGroup=!0,this.type="Group"}},Ky={type:"move"},Gs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new En,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new En,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new En,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let n=null,s=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let g of e.hand.values()){let m=t.getJointPose(g,i),p=this._getHandJoint(l,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,x=.005;l.inputState.pinching&&d>f+x?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-x&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(n=t.getPose(e.targetRaySpace,i),n===null&&s!==null&&(n=s),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Ky)))}return o!==null&&(o.visible=n!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new En;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},ja=class extends Si{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new en,this.environmentIntensity=1,this.environmentRotation=new en,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Uc=class extends qt{constructor(e=null,t=1,i=1,n,s,a,o,c,l=di,h=di,u,d){super(null,a,o,c,l,h,n,s,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},qu=new W,Jy=new W,Qy=new ke,Zi=class{constructor(e=new W(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,n){return this.normal.set(e,t,i),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let n=qu.subVectors(i,t).cross(Jy.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(qu),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/n;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Qy.getNormalMatrix(e),n=this.coplanarPoint(qu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ir=new zs,eb=new He(.5,.5),Mc=new W,Za=class{constructor(e=new Zi,t=new Zi,i=new Zi,n=new Zi,s=new Zi,a=new Zi){this.planes=[e,t,i,n,s,a]}set(e,t,i,n,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(n),o[4].copy(s),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Vi,i=!1){let n=this.planes,s=e.elements,a=s[0],o=s[1],c=s[2],l=s[3],h=s[4],u=s[5],d=s[6],f=s[7],x=s[8],g=s[9],m=s[10],p=s[11],S=s[12],y=s[13],w=s[14],A=s[15];if(n[0].setComponents(l-a,f-h,p-x,A-S).normalize(),n[1].setComponents(l+a,f+h,p+x,A+S).normalize(),n[2].setComponents(l+o,f+u,p+g,A+y).normalize(),n[3].setComponents(l-o,f-u,p-g,A-y).normalize(),i)n[4].setComponents(c,d,m,w).normalize(),n[5].setComponents(l-c,f-d,p-m,A-w).normalize();else if(n[4].setComponents(l-c,f-d,p-m,A-w).normalize(),t===Vi)n[5].setComponents(l+c,f+d,p+m,A+w).normalize();else if(t===Ha)n[5].setComponents(c,d,m,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ir.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ir.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ir)}intersectsSprite(e){Ir.center.set(0,0,0);let t=eb.distanceTo(e.center);return Ir.radius=.7071067811865476+t,Ir.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ir)}intersectsSphere(e){let t=this.planes,i=e.center,n=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<n)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let n=t[i];if(Mc.x=n.normal.x>0?e.max.x:e.min.x,Mc.y=n.normal.y>0?e.max.y:e.min.y,Mc.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(Mc)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},$a=class extends qt{constructor(e,t,i,n,s=Dt,a=Dt,o,c,l){super(e,t,i,n,s,a,o,c,l),this.isVideoTexture=!0,this.generateMipmaps=!1,this._requestVideoFrameCallbackId=0;let h=this;function u(){h.needsUpdate=!0,h._requestVideoFrameCallbackId=e.requestVideoFrameCallback(u)}"requestVideoFrameCallback"in e&&(this._requestVideoFrameCallbackId=e.requestVideoFrameCallback(u))}clone(){return new this.constructor(this.image).copy(this)}update(){let e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}dispose(){this._requestVideoFrameCallbackId!==0&&(this.source.data.cancelVideoFrameCallback(this._requestVideoFrameCallbackId),this._requestVideoFrameCallbackId=0),super.dispose()}},Ka=class extends qt{constructor(e,t,i=nr,n,s,a,o=di,c=di,l,h=Os,u=1){if(h!==Os&&h!==Ys)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:u};super(d,n,s,a,o,c,h,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ks(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Ja=class extends qt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Br=class r extends Cn{constructor(e=1,t=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:n};let s=e/2,a=t/2,o=Math.floor(i),c=Math.floor(n),l=o+1,h=c+1,u=e/o,d=t/c,f=[],x=[],g=[],m=[];for(let p=0;p<h;p++){let S=p*d-a;for(let y=0;y<l;y++){let w=y*u-s;x.push(w,-S,0),g.push(0,0,1),m.push(y/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let S=0;S<o;S++){let y=S+l*p,w=S+l*(p+1),A=S+1+l*(p+1),T=S+1+l*p;f.push(y,w,T),f.push(w,A,T)}this.setIndex(f),this.setAttribute("position",new Ki(x,3)),this.setAttribute("normal",new Ki(g,3)),this.setAttribute("uv",new Ki(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.widthSegments,e.heightSegments)}},Bc=class extends Ur{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=C0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},kc=class extends Ur{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};kr=class{constructor(e,t,i,n){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,n=t[i],s=t[i-1];i:{e:{let a;t:{n:if(!(e<n)){for(let o=i+2;;){if(n===void 0){if(e<s)break n;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(s=n,n=t[++i],e<n)break e}a=t.length;break t}if(!(e>=s)){let o=t[1];e<o&&(i=2,s=o);for(let c=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(n=s,s=t[--i-1],e>=s)break e}a=i,i=0;break t}break i}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(n=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,n)}return this.interpolate_(i,s,e,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,s=e*n;for(let a=0;a!==n;++a)t[a]=i[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},zc=class extends kr{constructor(e,t,i,n){super(e,t,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Yu,endingEnd:Yu}}intervalChanged_(e,t,i){let n=this.parameterPositions,s=e-2,a=e+1,o=n[s],c=n[a];if(o===void 0)switch(this.getSettings_().endingStart){case ju:s=e,o=2*t-i;break;case Zu:s=n.length-2,o=t+n[s]-n[s+1];break;default:s=e,o=i}if(c===void 0)switch(this.getSettings_().endingEnd){case ju:a=e,c=2*i-t;break;case Zu:a=1,c=i+n[1]-n[0];break;default:a=e-1,c=t}let l=(i-t)*.5,h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-i),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,i,n){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,x=(i-t)/(n-t),g=x*x,m=g*x,p=-d*m+2*d*g-d*x,S=(1+d)*m+(-1.5-2*d)*g+(-.5+d)*x+1,y=(-1-f)*m+(1.5+f)*g+.5*x,w=f*m-f*g;for(let A=0;A!==o;++A)s[A]=p*a[h+A]+S*a[l+A]+y*a[c+A]+w*a[u+A];return s}},Hc=class extends kr{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(i-t)/(n-t),u=1-h;for(let d=0;d!==o;++d)s[d]=a[l+d]*u+a[c+d]*h;return s}},Vc=class extends kr{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e){return this.copySampleValue_(e-1)}},wi=class{constructor(e,t,i,n){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=wc(t,this.TimeBufferType),this.values=wc(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:wc(e.times,Array),values:wc(e.values,Array)};let n=e.getInterpolation();n!==e.DefaultInterpolation&&(i.interpolation=n)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Vc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Hc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new zc(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ka:t=this.InterpolantFactoryMethodDiscrete;break;case Lc:t=this.InterpolantFactoryMethodLinear;break;case Ec:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Fe("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ka;case this.InterpolantFactoryMethodLinear:return Lc;case this.InterpolantFactoryMethodSmooth:return Ec}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]*=e}return this}trim(e,t){let i=this.times,n=i.length,s=0,a=n-1;for(;s!==n&&i[s]<e;)++s;for(;a!==-1&&i[a]>t;)--a;if(++a,s!==0||a!==n){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=i.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ze("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,n=this.values,s=i.length;s===0&&(Ze("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let c=i[o];if(typeof c=="number"&&isNaN(c)){Ze("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){Ze("KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(n!==void 0&&tb(n))for(let o=0,c=n.length;o!==c;++o){let l=n[o];if(isNaN(l)){Ze("KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===Ec,s=e.length-1,a=1;for(let o=1;o<s;++o){let c=!1,l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(n)c=!0;else{let u=o*i,d=u-i,f=u+i;for(let x=0;x!==i;++x){let g=t[u+x];if(g!==t[d+x]||g!==t[f+x]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let u=o*i,d=a*i;for(let f=0;f!==i;++f)t[d+f]=t[u+f]}++a}}if(s>0){e[a]=e[s];for(let o=s*i,c=a*i,l=0;l!==i;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,n=new i(this.name,e,t);return n.createInterpolant=this.createInterpolant,n}};wi.prototype.ValueTypeName="";wi.prototype.TimeBufferType=Float32Array;wi.prototype.ValueBufferType=Float32Array;wi.prototype.DefaultInterpolation=Lc;er=class extends wi{constructor(e,t,i){super(e,t,i)}};er.prototype.ValueTypeName="bool";er.prototype.ValueBufferType=Array;er.prototype.DefaultInterpolation=ka;er.prototype.InterpolantFactoryMethodLinear=void 0;er.prototype.InterpolantFactoryMethodSmooth=void 0;Gc=class extends wi{constructor(e,t,i,n){super(e,t,i,n)}};Gc.prototype.ValueTypeName="color";Wc=class extends wi{constructor(e,t,i,n){super(e,t,i,n)}};Wc.prototype.ValueTypeName="number";Xc=class extends kr{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(i-t)/(n-t),l=e*o;for(let h=l+o;l!==h;l+=4)bi.slerpFlat(s,0,a,l-o,a,l,c);return s}},Qa=class extends wi{constructor(e,t,i,n){super(e,t,i,n)}InterpolantFactoryMethodLinear(e){return new Xc(this.times,this.values,this.getValueSize(),e)}};Qa.prototype.ValueTypeName="quaternion";Qa.prototype.InterpolantFactoryMethodSmooth=void 0;tr=class extends wi{constructor(e,t,i){super(e,t,i)}};tr.prototype.ValueTypeName="string";tr.prototype.ValueBufferType=Array;tr.prototype.DefaultInterpolation=ka;tr.prototype.InterpolantFactoryMethodLinear=void 0;tr.prototype.InterpolantFactoryMethodSmooth=void 0;qc=class extends wi{constructor(e,t,i,n){super(e,t,i,n)}};qc.prototype.ValueTypeName="vector";Tc={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}},Yc=class{constructor(e,t,i){let n=this,s=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(h){o++,s===!1&&n.onStart!==void 0&&n.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,n.onProgress!==void 0&&n.onProgress(h,a,o),a===o&&(s=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(h){n.onError!==void 0&&n.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let f=l[u],x=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return x}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},G0=new Yc,Ws=class{constructor(e){this.manager=e!==void 0?e:G0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(n,s){i.load(e,n,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Ws.DEFAULT_MATERIAL_NAME="__DEFAULT";Ls=new WeakMap,jc=class extends Ws{constructor(e){super(e)}load(e,t,i,n){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,a=Tc.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);else{let u=Ls.get(a);u===void 0&&(u=[],Ls.set(a,u)),u.push({onLoad:t,onError:n})}return a}let o=Fs("img");function c(){h(),t&&t(this);let u=Ls.get(this)||[];for(let d=0;d<u.length;d++){let f=u[d];f.onLoad&&f.onLoad(this)}Ls.delete(this),s.manager.itemEnd(e)}function l(u){h(),n&&n(u),Tc.remove(`image:${e}`);let d=Ls.get(this)||[];for(let f=0;f<d.length;f++){let x=d[f];x.onError&&x.onError(u)}Ls.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Tc.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}},eo=class extends Ws{constructor(e){super(e)}load(e,t,i,n){let s=new qt,a=new jc(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},i,n),s}},Zc=class extends Si{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new et(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},$c=class extends qa{constructor(e=-1,t=1,i=1,n=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=n,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,n,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2,s=i-e,a=i+e,o=n+t,c=n-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},to=class extends Zc{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}},Kc=class extends Xt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},io=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}},yd="\\[\\]\\.:\\/",ib=new RegExp("["+yd+"]","g"),bd="[^"+yd+"]",nb="[^"+yd.replace("\\.","")+"]",rb=/((?:WC+[\/:])*)/.source.replace("WC",bd),sb=/(WCOD+)?/.source.replace("WCOD",nb),ab=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",bd),ob=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",bd),cb=new RegExp("^"+rb+sb+ab+ob+"$"),lb=["material","materials","bones","map"],Ju=class{constructor(e,t,i){let n=i||pt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,n)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,n=this._bindings[i];n!==void 0&&n.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,s=i.length;n!==s;++n)i[n].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},pt=class r{constructor(e,t,i){this.path=t,this.parsedPath=i||r.parseTrackName(t),this.node=r.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new r.Composite(e,t,i):new r(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(ib,"")}static parseTrackName(e){let t=cb.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){let s=i.nodeName.substring(n+1);lb.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===t||o.uuid===t)return o;let c=i(o.children);if(c)return c}return null},n=i(e.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)e[t++]=i[n]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,n=t.propertyName,s=t.propertyIndex;if(e||(e=r.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Fe("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=t.objectIndex;switch(i){case"materials":if(!e.material){Ze("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ze("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ze("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ze("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ze("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){Ze("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(l!==void 0){if(e[l]===void 0){Ze("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[n];if(a===void 0){let l=t.nodeName;Ze("PropertyBinding: Trying to update property for track: "+l+"."+n+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(n==="morphTargetInfluences"){if(!e.geometry){Ze("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ze("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=n;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};pt.Composite=Ju;pt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};pt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};pt.prototype.GetterByBindingType=[pt.prototype._getValue_direct,pt.prototype._getValue_array,pt.prototype._getValue_arrayElement,pt.prototype._getValue_toArray];pt.prototype.SetterByBindingTypeAndVersioning=[[pt.prototype._setValue_direct,pt.prototype._setValue_direct_setNeedsUpdate,pt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[pt.prototype._setValue_array,pt.prototype._setValue_array_setNeedsUpdate,pt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[pt.prototype._setValue_arrayElement,pt.prototype._setValue_arrayElement_setNeedsUpdate,pt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[pt.prototype._setValue_fromArray,pt.prototype._setValue_fromArray_setNeedsUpdate,pt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];JT=new Float32Array(1),Zm=new Rt,no=class{constructor(e,t,i=0,n=1/0){this.ray=new Ga(e,t),this.near=i,this.far=n,this.camera=null,this.layers=new Hs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ze("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Zm.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Zm),this}intersectObject(e,t=!0,i=[]){return Qu(e,this,i,t),i.sort($m),i}intersectObjects(e,t=!0,i=[]){for(let n=0,s=e.length;n<s;n++)Qu(e[n],this,i,t);return i.sort($m),i}};ro=class extends Ji{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){Fe("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"181"}}));typeof window!="undefined"&&(window.__THREE__?Fe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="181")});function dg(){let r=null,e=!1,t=null,i=null;function n(s,a){t(s,a),i=r.requestAnimationFrame(n)}return{start:function(){e!==!0&&t!==null&&(i=r.requestAnimationFrame(n),e=!0)},stop:function(){r.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function db(r){let e=new WeakMap;function t(o,c){let l=o.array,h=o.usage,u=l.byteLength,d=r.createBuffer();r.bindBuffer(c,d),r.bufferData(c,l,h),o.onUploadCallback();let f;if(l instanceof Float32Array)f=r.FLOAT;else if(typeof Float16Array!="undefined"&&l instanceof Float16Array)f=r.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=r.SHORT;else if(l instanceof Uint32Array)f=r.UNSIGNED_INT;else if(l instanceof Int32Array)f=r.INT;else if(l instanceof Int8Array)f=r.BYTE;else if(l instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,c,l){let h=c.array,u=c.updateRanges;if(r.bindBuffer(l,o),u.length===0)r.bufferSubData(l,0,h);else{u.sort((f,x)=>f.start-x.start);let d=0;for(let f=1;f<u.length;f++){let x=u[d],g=u[f];g.start<=x.start+x.count+1?x.count=Math.max(x.count,g.start+g.count-x.start):(++d,u[d]=g)}u.length=d+1;for(let f=0,x=u.length;f<x;f++){let g=u[f];r.bufferSubData(l,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}c.clearUpdateRanges()}c.onUploadCallback()}function n(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(r.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:n,remove:s,update:a}}function YM(r,e,t,i,n,s,a){let o=new et(0),c=s===!0?0:1,l,h,u=null,d=0,f=null;function x(y){let w=y.isScene===!0?y.background:null;return w&&w.isTexture&&(w=(y.backgroundBlurriness>0?t:e).get(w)),w}function g(y){let w=!1,A=x(y);A===null?p(o,c):A&&A.isColor&&(p(A,1),w=!0);let T=r.xr.getEnvironmentBlendMode();T==="additive"?i.buffers.color.setClear(0,0,0,1,a):T==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(r.autoClear||w)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(y,w){let A=x(w);A&&(A.isCubeTexture||A.mapping===so)?(h===void 0&&(h=new Mi(new Vs(1,1,1),new Fi({name:"BackgroundCubeMaterial",uniforms:Gr(on.backgroundCube.uniforms),vertexShader:on.backgroundCube.vertexShader,fragmentShader:on.backgroundCube.fragmentShader,side:ti,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,R,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),Wr.copy(w.backgroundRotation),Wr.x*=-1,Wr.y*=-1,Wr.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Wr.y*=-1,Wr.z*=-1),h.material.uniforms.envMap.value=A,h.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(qM.makeRotationFromEuler(Wr)),h.material.toneMapped=it.getTransfer(A.colorSpace)!==st,(u!==A||d!==A.version||f!==r.toneMapping)&&(h.material.needsUpdate=!0,u=A,d=A.version,f=r.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):A&&A.isTexture&&(l===void 0&&(l=new Mi(new Br(2,2),new Fi({name:"BackgroundMaterial",uniforms:Gr(on.background.uniforms),vertexShader:on.background.vertexShader,fragmentShader:on.background.fragmentShader,side:An,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=A,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=it.getTransfer(A.colorSpace)!==st,A.matrixAutoUpdate===!0&&A.updateMatrix(),l.material.uniforms.uvTransform.value.copy(A.matrix),(u!==A||d!==A.version||f!==r.toneMapping)&&(l.material.needsUpdate=!0,u=A,d=A.version,f=r.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function p(y,w){y.getRGB(Wl,_d(r)),i.buffers.color.setClear(Wl.r,Wl.g,Wl.b,w,a)}function S(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,w=1){o.set(y),c=w,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(y){c=y,p(o,c)},render:g,addToRenderList:m,dispose:S}}function jM(r,e){let t=r.getParameter(r.MAX_VERTEX_ATTRIBS),i={},n=d(null),s=n,a=!1;function o(M,O,z,G,K){let J=!1,j=u(G,z,O);s!==j&&(s=j,l(s.object)),J=f(M,G,z,K),J&&x(M,G,z,K),K!==null&&e.update(K,r.ELEMENT_ARRAY_BUFFER),(J||a)&&(a=!1,w(M,O,z,G),K!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(K).buffer))}function c(){return r.createVertexArray()}function l(M){return r.bindVertexArray(M)}function h(M){return r.deleteVertexArray(M)}function u(M,O,z){let G=z.wireframe===!0,K=i[M.id];K===void 0&&(K={},i[M.id]=K);let J=K[O.id];J===void 0&&(J={},K[O.id]=J);let j=J[G];return j===void 0&&(j=d(c()),J[G]=j),j}function d(M){let O=[],z=[],G=[];for(let K=0;K<t;K++)O[K]=0,z[K]=0,G[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:z,attributeDivisors:G,object:M,attributes:{},index:null}}function f(M,O,z,G){let K=s.attributes,J=O.attributes,j=0,ce=z.getAttributes();for(let X in ce)if(ce[X].location>=0){let pe=K[X],Ce=J[X];if(Ce===void 0&&(X==="instanceMatrix"&&M.instanceMatrix&&(Ce=M.instanceMatrix),X==="instanceColor"&&M.instanceColor&&(Ce=M.instanceColor)),pe===void 0||pe.attribute!==Ce||Ce&&pe.data!==Ce.data)return!0;j++}return s.attributesNum!==j||s.index!==G}function x(M,O,z,G){let K={},J=O.attributes,j=0,ce=z.getAttributes();for(let X in ce)if(ce[X].location>=0){let pe=J[X];pe===void 0&&(X==="instanceMatrix"&&M.instanceMatrix&&(pe=M.instanceMatrix),X==="instanceColor"&&M.instanceColor&&(pe=M.instanceColor));let Ce={};Ce.attribute=pe,pe&&pe.data&&(Ce.data=pe.data),K[X]=Ce,j++}s.attributes=K,s.attributesNum=j,s.index=G}function g(){let M=s.newAttributes;for(let O=0,z=M.length;O<z;O++)M[O]=0}function m(M){p(M,0)}function p(M,O){let z=s.newAttributes,G=s.enabledAttributes,K=s.attributeDivisors;z[M]=1,G[M]===0&&(r.enableVertexAttribArray(M),G[M]=1),K[M]!==O&&(r.vertexAttribDivisor(M,O),K[M]=O)}function S(){let M=s.newAttributes,O=s.enabledAttributes;for(let z=0,G=O.length;z<G;z++)O[z]!==M[z]&&(r.disableVertexAttribArray(z),O[z]=0)}function y(M,O,z,G,K,J,j){j===!0?r.vertexAttribIPointer(M,O,z,K,J):r.vertexAttribPointer(M,O,z,G,K,J)}function w(M,O,z,G){g();let K=G.attributes,J=z.getAttributes(),j=O.defaultAttributeValues;for(let ce in J){let X=J[ce];if(X.location>=0){let fe=K[ce];if(fe===void 0&&(ce==="instanceMatrix"&&M.instanceMatrix&&(fe=M.instanceMatrix),ce==="instanceColor"&&M.instanceColor&&(fe=M.instanceColor)),fe!==void 0){let pe=fe.normalized,Ce=fe.itemSize,Ne=e.get(fe);if(Ne===void 0)continue;let tt=Ne.buffer,Xe=Ne.type,$e=Ne.bytesPerElement,ne=Xe===r.INT||Xe===r.UNSIGNED_INT||fe.gpuType===cl;if(fe.isInterleavedBufferAttribute){let ae=fe.data,Me=ae.stride,Ue=fe.offset;if(ae.isInstancedInterleavedBuffer){for(let Re=0;Re<X.locationSize;Re++)p(X.location+Re,ae.meshPerAttribute);M.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let Re=0;Re<X.locationSize;Re++)m(X.location+Re);r.bindBuffer(r.ARRAY_BUFFER,tt);for(let Re=0;Re<X.locationSize;Re++)y(X.location+Re,Ce/X.locationSize,Xe,pe,Me*$e,(Ue+Ce/X.locationSize*Re)*$e,ne)}else{if(fe.isInstancedBufferAttribute){for(let ae=0;ae<X.locationSize;ae++)p(X.location+ae,fe.meshPerAttribute);M.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let ae=0;ae<X.locationSize;ae++)m(X.location+ae);r.bindBuffer(r.ARRAY_BUFFER,tt);for(let ae=0;ae<X.locationSize;ae++)y(X.location+ae,Ce/X.locationSize,Xe,pe,Ce*$e,Ce/X.locationSize*ae*$e,ne)}}else if(j!==void 0){let pe=j[ce];if(pe!==void 0)switch(pe.length){case 2:r.vertexAttrib2fv(X.location,pe);break;case 3:r.vertexAttrib3fv(X.location,pe);break;case 4:r.vertexAttrib4fv(X.location,pe);break;default:r.vertexAttrib1fv(X.location,pe)}}}}S()}function A(){N();for(let M in i){let O=i[M];for(let z in O){let G=O[z];for(let K in G)h(G[K].object),delete G[K];delete O[z]}delete i[M]}}function T(M){if(i[M.id]===void 0)return;let O=i[M.id];for(let z in O){let G=O[z];for(let K in G)h(G[K].object),delete G[K];delete O[z]}delete i[M.id]}function R(M){for(let O in i){let z=i[O];if(z[M.id]===void 0)continue;let G=z[M.id];for(let K in G)h(G[K].object),delete G[K];delete z[M.id]}}function N(){b(),a=!0,s!==n&&(s=n,l(s.object))}function b(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:o,reset:N,resetDefaultState:b,dispose:A,releaseStatesOfGeometry:T,releaseStatesOfProgram:R,initAttributes:g,enableAttribute:m,disableUnusedAttributes:S}}function ZM(r,e,t){let i;function n(l){i=l}function s(l,h){r.drawArrays(i,l,h),t.update(h,i,1)}function a(l,h,u){u!==0&&(r.drawArraysInstanced(i,l,h,u),t.update(h,i,u))}function o(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,h,0,u);let f=0;for(let x=0;x<u;x++)f+=h[x];t.update(f,i,1)}function c(l,h,u,d){if(u===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let x=0;x<l.length;x++)a(l[x],h[x],d[x]);else{f.multiDrawArraysInstancedWEBGL(i,l,0,h,0,d,0,u);let x=0;for(let g=0;g<u;g++)x+=h[g]*d[g];t.update(x,i,1)}}this.setMode=n,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function $M(r,e,t,i){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let R=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function a(R){return!(R!==Ni&&i.convert(R)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){let N=R===Vr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==sn&&i.convert(R)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==an&&!N)}function c(R){if(R==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(Fe("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),x=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),S=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),y=r.getParameter(r.MAX_VARYING_VECTORS),w=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),A=x>0,T=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:x,maxTextureSize:g,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:S,maxVaryings:y,maxFragmentUniforms:w,vertexTextures:A,maxSamples:T}}function KM(r){let e=this,t=null,i=0,n=!1,s=!1,a=new Zi,o=new ke,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||i!==0||n;return n=d,i=u.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let x=u.clippingPlanes,g=u.clipIntersection,m=u.clipShadows,p=r.get(u);if(!n||x===null||x.length===0||s&&!m)s?h(null):l();else{let S=s?0:i,y=S*4,w=p.clippingState||null;c.value=w,w=h(x,d,y,f);for(let A=0;A!==y;++A)w[A]=t[A];p.clippingState=w,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,d,f,x){let g=u!==null?u.length:0,m=null;if(g!==0){if(m=c.value,x!==!0||m===null){let p=f+g*4,S=d.matrixWorldInverse;o.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,w=f;y!==g;++y,w+=4)a.copy(u[y]).applyMatrix4(S,o),a.normal.toArray(m,w),m[w+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function JM(r){let e=new WeakMap;function t(a,o){return o===sl?a.mapping=zr:o===al&&(a.mapping=Hr),a}function i(a){if(a&&a.isTexture){let o=a.mapping;if(o===sl||o===al)if(e.has(a)){let c=e.get(a).texture;return t(c,a.mapping)}else{let c=a.image;if(c&&c.height>0){let l=new Nc(c.height);return l.fromEquirectangularTexture(r,a),e.set(a,l),a.addEventListener("dispose",n),t(l.texture,a.mapping)}else return null}}return a}function n(a){let o=a.target;o.removeEventListener("dispose",n);let c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}function tw(r){let e=[],t=[],i=[],n=r,s=r-rr+1+W0.length;for(let a=0;a<s;a++){let o=Math.pow(2,n);e.push(o);let c=1/o;a>r-rr?c=W0[a-r+rr-1]:a===0&&(c=0),t.push(c);let l=1/(o-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,x=6,g=3,m=2,p=1,S=new Float32Array(g*x*f),y=new Float32Array(m*x*f),w=new Float32Array(p*x*f);for(let T=0;T<f;T++){let R=T%3*2/3-1,N=T>2?0:-1,b=[R,N,0,R+2/3,N,0,R+2/3,N+1,0,R,N,0,R+2/3,N+1,0,R,N+1,0];S.set(b,g*x*T),y.set(d,m*x*T);let M=[T,T,T,T,T,T];w.set(M,p*x*T)}let A=new Cn;A.setAttribute("position",new yi(S,g)),A.setAttribute("uv",new yi(y,m)),A.setAttribute("faceIndex",new yi(w,p)),i.push(new Mi(A,null)),n>rr&&n--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function q0(r,e,t){let i=new Qi(r,e,t);return i.texture.mapping=so,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Zs(r,e,t,i,n){r.viewport.set(e,t,i,n),r.scissor.set(e,t,i,n)}function iw(r,e,t){return new Fi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:QM,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:jl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:nn,depthTest:!1,depthWrite:!1})}function nw(r,e,t){let i=new Float32Array(qr),n=new W(0,1,0);return new Fi({name:"SphericalGaussianBlur",defines:{n:qr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:jl(),fragmentShader:`

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
		`,blending:nn,depthTest:!1,depthWrite:!1})}function Y0(){return new Fi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:jl(),fragmentShader:`

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
		`,blending:nn,depthTest:!1,depthWrite:!1})}function j0(){return new Fi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:jl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:nn,depthTest:!1,depthWrite:!1})}function jl(){return`

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
	`}function rw(r){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){let c=o.mapping,l=c===sl||c===al,h=c===zr||c===Hr;if(l||h){let u=e.get(o),d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new ql(r)),u=l?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{let f=o.image;return l&&f&&f.height>0||h&&f&&n(f)?(t===null&&(t=new ql(r)),u=l?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",s),u.texture):null}}}return o}function n(o){let c=0,l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function s(o){let c=o.target;c.removeEventListener("dispose",s);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function sw(r){let e={};function t(i){if(e[i]!==void 0)return e[i];let n=r.getExtension(i);return e[i]=n,n}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let n=t(i);return n===null&&Us("WebGLRenderer: "+i+" extension not supported."),n}}}function aw(r,e,t,i){let n={},s=new WeakMap;function a(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let x in d.attributes)e.remove(d.attributes[x]);d.removeEventListener("dispose",a),delete n[d.id];let f=s.get(d);f&&(e.remove(f),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return n[d.id]===!0||(d.addEventListener("dispose",a),n[d.id]=!0,t.memory.geometries++),d}function c(u){let d=u.attributes;for(let f in d)e.update(d[f],r.ARRAY_BUFFER)}function l(u){let d=[],f=u.index,x=u.attributes.position,g=0;if(f!==null){let S=f.array;g=f.version;for(let y=0,w=S.length;y<w;y+=3){let A=S[y+0],T=S[y+1],R=S[y+2];d.push(A,T,T,R,R,A)}}else if(x!==void 0){let S=x.array;g=x.version;for(let y=0,w=S.length/3-1;y<w;y+=3){let A=y+0,T=y+1,R=y+2;d.push(A,T,T,R,R,A)}}else return;let m=new(gd(d)?Xa:Wa)(d,1);m.version=g;let p=s.get(u);p&&e.remove(p),s.set(u,m)}function h(u){let d=s.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return s.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function ow(r,e,t){let i;function n(d){i=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function c(d,f){r.drawElements(i,f,s,d*a),t.update(f,i,1)}function l(d,f,x){x!==0&&(r.drawElementsInstanced(i,f,s,d*a,x),t.update(f,i,x))}function h(d,f,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,d,0,x);let m=0;for(let p=0;p<x;p++)m+=f[p];t.update(m,i,1)}function u(d,f,x,g){if(x===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)l(d[p]/a,f[p],g[p]);else{m.multiDrawElementsInstancedWEBGL(i,f,0,s,d,0,g,0,x);let p=0;for(let S=0;S<x;S++)p+=f[S]*g[S];t.update(p,i,1)}}this.setMode=n,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function cw(r){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=o*(s/3);break;case r.LINES:t.lines+=o*(s/2);break;case r.LINE_STRIP:t.lines+=o*(s-1);break;case r.LINE_LOOP:t.lines+=o*s;break;case r.POINTS:t.points+=o*s;break;default:Ze("WebGLInfo: Unknown draw mode:",a);break}}function n(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:n,update:i}}function lw(r,e,t){let i=new WeakMap,n=new wt;function s(a,o,c){let l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=i.get(o);if(d===void 0||d.count!==u){let b=function(){R.dispose(),i.delete(o),o.removeEventListener("dispose",b)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],S=o.morphAttributes.color||[],y=0;f===!0&&(y=1),x===!0&&(y=2),g===!0&&(y=3);let w=o.attributes.position.count*y,A=1;w>e.maxTextureSize&&(A=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);let T=new Float32Array(w*A*4*u),R=new Va(T,w,A,u);R.type=an,R.needsUpdate=!0;let N=y*4;for(let M=0;M<u;M++){let O=m[M],z=p[M],G=S[M],K=w*A*4*M;for(let J=0;J<O.count;J++){let j=J*N;f===!0&&(n.fromBufferAttribute(O,J),T[K+j+0]=n.x,T[K+j+1]=n.y,T[K+j+2]=n.z,T[K+j+3]=0),x===!0&&(n.fromBufferAttribute(z,J),T[K+j+4]=n.x,T[K+j+5]=n.y,T[K+j+6]=n.z,T[K+j+7]=0),g===!0&&(n.fromBufferAttribute(G,J),T[K+j+8]=n.x,T[K+j+9]=n.y,T[K+j+10]=n.z,T[K+j+11]=G.itemSize===4?n.w:1)}}d={count:u,texture:R,size:new He(w,A)},i.set(o,d),o.addEventListener("dispose",b)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(r,"morphTexture",a.morphTexture,t);else{let f=0;for(let g=0;g<l.length;g++)f+=l[g];let x=o.morphTargetsRelative?1:1-f;c.getUniforms().setValue(r,"morphTargetBaseInfluence",x),c.getUniforms().setValue(r,"morphTargetInfluences",l)}c.getUniforms().setValue(r,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function hw(r,e,t,i){let n=new WeakMap;function s(c){let l=i.render.frame,h=c.geometry,u=e.get(c,h);if(n.get(u)!==l&&(e.update(u),n.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),n.get(c)!==l&&(t.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,r.ARRAY_BUFFER),n.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;n.get(d)!==l&&(d.update(),n.set(d,l))}return u}function a(){n=new WeakMap}function o(c){let l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:a}}function Ks(r,e,t){let i=r[0];if(i<=0||i>0)return r;let n=e*t,s=$0[n];if(s===void 0&&(s=new Float32Array(n),$0[n]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function Ot(r,e){if(r.length!==e.length)return!1;for(let t=0,i=r.length;t<i;t++)if(r[t]!==e[t])return!1;return!0}function Ft(r,e){for(let t=0,i=e.length;t<i;t++)r[t]=e[t]}function Zl(r,e){let t=K0[e];t===void 0&&(t=new Int32Array(e),K0[e]=t);for(let i=0;i!==e;++i)t[i]=r.allocateTextureUnit();return t}function uw(r,e){let t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function dw(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;r.uniform2fv(this.addr,e),Ft(t,e)}}function fw(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ot(t,e))return;r.uniform3fv(this.addr,e),Ft(t,e)}}function pw(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;r.uniform4fv(this.addr,e),Ft(t,e)}}function mw(r,e){let t=this.cache,i=e.elements;if(i===void 0){if(Ot(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Ft(t,e)}else{if(Ot(t,i))return;eg.set(i),r.uniformMatrix2fv(this.addr,!1,eg),Ft(t,i)}}function gw(r,e){let t=this.cache,i=e.elements;if(i===void 0){if(Ot(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Ft(t,e)}else{if(Ot(t,i))return;Q0.set(i),r.uniformMatrix3fv(this.addr,!1,Q0),Ft(t,i)}}function vw(r,e){let t=this.cache,i=e.elements;if(i===void 0){if(Ot(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Ft(t,e)}else{if(Ot(t,i))return;J0.set(i),r.uniformMatrix4fv(this.addr,!1,J0),Ft(t,i)}}function xw(r,e){let t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function _w(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;r.uniform2iv(this.addr,e),Ft(t,e)}}function yw(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ot(t,e))return;r.uniform3iv(this.addr,e),Ft(t,e)}}function bw(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;r.uniform4iv(this.addr,e),Ft(t,e)}}function Sw(r,e){let t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Mw(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;r.uniform2uiv(this.addr,e),Ft(t,e)}}function ww(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ot(t,e))return;r.uniform3uiv(this.addr,e),Ft(t,e)}}function Ew(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;r.uniform4uiv(this.addr,e),Ft(t,e)}}function Tw(r,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n);let s;this.type===r.SAMPLER_2D_SHADOW?(Z0.compareFunction=pd,s=Z0):s=fg,t.setTexture2D(e||s,n)}function Aw(r,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTexture3D(e||mg,n)}function Cw(r,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTextureCube(e||gg,n)}function Pw(r,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTexture2DArray(e||pg,n)}function Rw(r){switch(r){case 5126:return uw;case 35664:return dw;case 35665:return fw;case 35666:return pw;case 35674:return mw;case 35675:return gw;case 35676:return vw;case 5124:case 35670:return xw;case 35667:case 35671:return _w;case 35668:case 35672:return yw;case 35669:case 35673:return bw;case 5125:return Sw;case 36294:return Mw;case 36295:return ww;case 36296:return Ew;case 35678:case 36198:case 36298:case 36306:case 35682:return Tw;case 35679:case 36299:case 36307:return Aw;case 35680:case 36300:case 36308:case 36293:return Cw;case 36289:case 36303:case 36311:case 36292:return Pw}}function Lw(r,e){r.uniform1fv(this.addr,e)}function Iw(r,e){let t=Ks(e,this.size,2);r.uniform2fv(this.addr,t)}function Dw(r,e){let t=Ks(e,this.size,3);r.uniform3fv(this.addr,t)}function Ow(r,e){let t=Ks(e,this.size,4);r.uniform4fv(this.addr,t)}function Fw(r,e){let t=Ks(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Nw(r,e){let t=Ks(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Uw(r,e){let t=Ks(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Bw(r,e){r.uniform1iv(this.addr,e)}function kw(r,e){r.uniform2iv(this.addr,e)}function zw(r,e){r.uniform3iv(this.addr,e)}function Hw(r,e){r.uniform4iv(this.addr,e)}function Vw(r,e){r.uniform1uiv(this.addr,e)}function Gw(r,e){r.uniform2uiv(this.addr,e)}function Ww(r,e){r.uniform3uiv(this.addr,e)}function Xw(r,e){r.uniform4uiv(this.addr,e)}function qw(r,e,t){let i=this.cache,n=e.length,s=Zl(t,n);Ot(i,s)||(r.uniform1iv(this.addr,s),Ft(i,s));for(let a=0;a!==n;++a)t.setTexture2D(e[a]||fg,s[a])}function Yw(r,e,t){let i=this.cache,n=e.length,s=Zl(t,n);Ot(i,s)||(r.uniform1iv(this.addr,s),Ft(i,s));for(let a=0;a!==n;++a)t.setTexture3D(e[a]||mg,s[a])}function jw(r,e,t){let i=this.cache,n=e.length,s=Zl(t,n);Ot(i,s)||(r.uniform1iv(this.addr,s),Ft(i,s));for(let a=0;a!==n;++a)t.setTextureCube(e[a]||gg,s[a])}function Zw(r,e,t){let i=this.cache,n=e.length,s=Zl(t,n);Ot(i,s)||(r.uniform1iv(this.addr,s),Ft(i,s));for(let a=0;a!==n;++a)t.setTexture2DArray(e[a]||pg,s[a])}function $w(r){switch(r){case 5126:return Lw;case 35664:return Iw;case 35665:return Dw;case 35666:return Ow;case 35674:return Fw;case 35675:return Nw;case 35676:return Uw;case 5124:case 35670:return Bw;case 35667:case 35671:return kw;case 35668:case 35672:return zw;case 35669:case 35673:return Hw;case 5125:return Vw;case 36294:return Gw;case 36295:return Ww;case 36296:return Xw;case 35678:case 36198:case 36298:case 36306:case 35682:return qw;case 35679:case 36299:case 36307:return Yw;case 35680:case 36300:case 36308:case 36293:return jw;case 36289:case 36303:case 36311:case 36292:return Zw}}function tg(r,e){r.seq.push(e),r.map[e.id]=e}function Kw(r,e,t){let i=r.name,n=i.length;for(Cd.lastIndex=0;;){let s=Cd.exec(i),a=Cd.lastIndex,o=s[1],c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===n){tg(t,l===void 0?new Pd(o,r,e):new Rd(o,r,e));break}else{let u=t.map[o];u===void 0&&(u=new Ld(o),tg(t,u)),t=u}}}function ig(r,e,t){let i=r.createShader(e);return r.shaderSource(i,t),r.compileShader(i),i}function e1(r,e){let t=r.split(`
`),i=[],n=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=n;a<s;a++){let o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}function t1(r){it._getMatrix(ng,it.workingColorSpace,r);let e=`mat3( ${ng.elements.map(t=>t.toFixed(4))} )`;switch(it.getTransfer(r)){case za:return[e,"LinearTransferOETF"];case st:return[e,"sRGBTransferOETF"];default:return Fe("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function rg(r,e,t){let i=r.getShaderParameter(e,r.COMPILE_STATUS),s=(r.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";let a=/ERROR: 0:(\d+)/.exec(s);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+e1(r.getShaderSource(e),o)}else return s}function i1(r,e){let t=t1(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function n1(r,e){let t;switch(e){case y0:t="Linear";break;case b0:t="Reinhard";break;case S0:t="Cineon";break;case M0:t="ACESFilmic";break;case E0:t="AgX";break;case T0:t="Neutral";break;case w0:t="Custom";break;default:Fe("WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function r1(){it.getLuminanceCoefficients(Xl);let r=Xl.x.toFixed(4),e=Xl.y.toFixed(4),t=Xl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function s1(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(fo).join(`
`)}function a1(r){let e=[];for(let t in r){let i=r[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function o1(r,e){let t={},i=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){let s=r.getActiveAttrib(e,n),a=s.name,o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function fo(r){return r!==""}function sg(r,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ag(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}function Id(r){return r.replace(c1,h1)}function h1(r,e){let t=Ve[e];if(t===void 0){let i=l1.get(e);if(i!==void 0)t=Ve[i],Fe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Id(t)}function og(r){return r.replace(u1,d1)}function d1(r,e,t,i){let n="";for(let s=parseInt(e);s<parseInt(t);s++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return n}function cg(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}function f1(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===td?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Qm?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===tn&&(e="SHADOWMAP_TYPE_VSM"),e}function p1(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case zr:case Hr:e="ENVMAP_TYPE_CUBE";break;case so:e="ENVMAP_TYPE_CUBE_UV";break}return e}function m1(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Hr:e="ENVMAP_MODE_REFRACTION";break}return e}function g1(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case sd:e="ENVMAP_BLENDING_MULTIPLY";break;case x0:e="ENVMAP_BLENDING_MIX";break;case _0:e="ENVMAP_BLENDING_ADD";break}return e}function v1(r){let e=r.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function x1(r,e,t,i){let n=r.getContext(),s=t.defines,a=t.vertexShader,o=t.fragmentShader,c=f1(t),l=p1(t),h=m1(t),u=g1(t),d=v1(t),f=s1(t),x=a1(s),g=n.createProgram(),m,p,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(fo).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(fo).join(`
`),p.length>0&&(p+=`
`)):(m=[cg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fo).join(`
`),p=[cg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Pn?"#define TONE_MAPPING":"",t.toneMapping!==Pn?Ve.tonemapping_pars_fragment:"",t.toneMapping!==Pn?n1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,i1("linearToOutputTexel",t.outputColorSpace),r1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(fo).join(`
`)),a=Id(a),a=sg(a,t),a=ag(a,t),o=Id(o),o=sg(o,t),o=ag(o,t),a=og(a),o=og(o),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===md?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===md?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let y=S+m+a,w=S+p+o,A=ig(n,n.VERTEX_SHADER,y),T=ig(n,n.FRAGMENT_SHADER,w);n.attachShader(g,A),n.attachShader(g,T),t.index0AttributeName!==void 0?n.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&n.bindAttribLocation(g,0,"position"),n.linkProgram(g);function R(O){if(r.debug.checkShaderErrors){let z=n.getProgramInfoLog(g)||"",G=n.getShaderInfoLog(A)||"",K=n.getShaderInfoLog(T)||"",J=z.trim(),j=G.trim(),ce=K.trim(),X=!0,fe=!0;if(n.getProgramParameter(g,n.LINK_STATUS)===!1)if(X=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(n,g,A,T);else{let pe=rg(n,A,"vertex"),Ce=rg(n,T,"fragment");Ze("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(g,n.VALIDATE_STATUS)+`

Material Name: `+O.name+`
Material Type: `+O.type+`

Program Info Log: `+J+`
`+pe+`
`+Ce)}else J!==""?Fe("WebGLProgram: Program Info Log:",J):(j===""||ce==="")&&(fe=!1);fe&&(O.diagnostics={runnable:X,programLog:J,vertexShader:{log:j,prefix:m},fragmentShader:{log:ce,prefix:p}})}n.deleteShader(A),n.deleteShader(T),N=new $s(n,g),b=o1(n,g)}let N;this.getUniforms=function(){return N===void 0&&R(this),N};let b;this.getAttributes=function(){return b===void 0&&R(this),b};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=n.getProgramParameter(g,Jw)),M},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Qw++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=A,this.fragmentShader=T,this}function y1(r,e,t,i,n,s,a){let o=new Hs,c=new Dd,l=new Set,h=[],u=n.logarithmicDepthBuffer,d=n.vertexTextures,f=n.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(b){return l.add(b),b===0?"uv":`uv${b}`}function m(b,M,O,z,G){let K=z.fog,J=G.geometry,j=b.isMeshStandardMaterial?z.environment:null,ce=(b.isMeshStandardMaterial?t:e).get(b.envMap||j),X=ce&&ce.mapping===so?ce.image.height:null,fe=x[b.type];b.precision!==null&&(f=n.getMaxPrecision(b.precision),f!==b.precision&&Fe("WebGLProgram.getParameters:",b.precision,"not supported, using",f,"instead."));let pe=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Ce=pe!==void 0?pe.length:0,Ne=0;J.morphAttributes.position!==void 0&&(Ne=1),J.morphAttributes.normal!==void 0&&(Ne=2),J.morphAttributes.color!==void 0&&(Ne=3);let tt,Xe,$e,ne;if(fe){let Te=on[fe];tt=Te.vertexShader,Xe=Te.fragmentShader}else tt=b.vertexShader,Xe=b.fragmentShader,c.update(b),$e=c.getVertexShaderID(b),ne=c.getFragmentShaderID(b);let ae=r.getRenderTarget(),Me=r.state.buffers.depth.getReversed(),Ue=G.isInstancedMesh===!0,Re=G.isBatchedMesh===!0,qe=!!b.map,Lt=!!b.matcap,ze=!!ce,dt=!!b.aoMap,F=!!b.lightMap,Ye=!!b.bumpMap,je=!!b.normalMap,at=!!b.displacementMap,Ee=!!b.emissiveMap,B=!!b.metalnessMap,L=!!b.roughnessMap,E=b.anisotropy>0,v=b.clearcoat>0,_=b.dispersion>0,P=b.iridescence>0,U=b.sheen>0,k=b.transmission>0,I=E&&!!b.anisotropyMap,te=v&&!!b.clearcoatMap,oe=v&&!!b.clearcoatNormalMap,me=v&&!!b.clearcoatRoughnessMap,re=P&&!!b.iridescenceMap,Q=P&&!!b.iridescenceThicknessMap,ie=U&&!!b.sheenColorMap,ve=U&&!!b.sheenRoughnessMap,_e=!!b.specularMap,le=!!b.specularColorMap,Pe=!!b.specularIntensityMap,D=k&&!!b.transmissionMap,ue=k&&!!b.thicknessMap,de=!!b.gradientMap,he=!!b.alphaMap,se=b.alphaTest>0,ee=!!b.alphaHash,be=!!b.extensions,xe=Pn;b.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(xe=r.toneMapping);let Ge={shaderID:fe,shaderType:b.type,shaderName:b.name,vertexShader:tt,fragmentShader:Xe,defines:b.defines,customVertexShaderID:$e,customFragmentShaderID:ne,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:f,batching:Re,batchingColor:Re&&G._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&G.instanceColor!==null,instancingMorph:Ue&&G.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ae===null?r.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:Nr,alphaToCoverage:!!b.alphaToCoverage,map:qe,matcap:Lt,envMap:ze,envMapMode:ze&&ce.mapping,envMapCubeUVHeight:X,aoMap:dt,lightMap:F,bumpMap:Ye,normalMap:je,displacementMap:d&&at,emissiveMap:Ee,normalMapObjectSpace:je&&b.normalMapType===L0,normalMapTangentSpace:je&&b.normalMapType===R0,metalnessMap:B,roughnessMap:L,anisotropy:E,anisotropyMap:I,clearcoat:v,clearcoatMap:te,clearcoatNormalMap:oe,clearcoatRoughnessMap:me,dispersion:_,iridescence:P,iridescenceMap:re,iridescenceThicknessMap:Q,sheen:U,sheenColorMap:ie,sheenRoughnessMap:ve,specularMap:_e,specularColorMap:le,specularIntensityMap:Pe,transmission:k,transmissionMap:D,thicknessMap:ue,gradientMap:de,opaque:b.transparent===!1&&b.blending===Or&&b.alphaToCoverage===!1,alphaMap:he,alphaTest:se,alphaHash:ee,combine:b.combine,mapUv:qe&&g(b.map.channel),aoMapUv:dt&&g(b.aoMap.channel),lightMapUv:F&&g(b.lightMap.channel),bumpMapUv:Ye&&g(b.bumpMap.channel),normalMapUv:je&&g(b.normalMap.channel),displacementMapUv:at&&g(b.displacementMap.channel),emissiveMapUv:Ee&&g(b.emissiveMap.channel),metalnessMapUv:B&&g(b.metalnessMap.channel),roughnessMapUv:L&&g(b.roughnessMap.channel),anisotropyMapUv:I&&g(b.anisotropyMap.channel),clearcoatMapUv:te&&g(b.clearcoatMap.channel),clearcoatNormalMapUv:oe&&g(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:me&&g(b.clearcoatRoughnessMap.channel),iridescenceMapUv:re&&g(b.iridescenceMap.channel),iridescenceThicknessMapUv:Q&&g(b.iridescenceThicknessMap.channel),sheenColorMapUv:ie&&g(b.sheenColorMap.channel),sheenRoughnessMapUv:ve&&g(b.sheenRoughnessMap.channel),specularMapUv:_e&&g(b.specularMap.channel),specularColorMapUv:le&&g(b.specularColorMap.channel),specularIntensityMapUv:Pe&&g(b.specularIntensityMap.channel),transmissionMapUv:D&&g(b.transmissionMap.channel),thicknessMapUv:ue&&g(b.thicknessMap.channel),alphaMapUv:he&&g(b.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(je||E),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!J.attributes.uv&&(qe||he),fog:!!K,useFog:b.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:Me,skinning:G.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:Ce,morphTextureStride:Ne,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:r.shadowMap.enabled&&O.length>0,shadowMapType:r.shadowMap.type,toneMapping:xe,decodeVideoTexture:qe&&b.map.isVideoTexture===!0&&it.getTransfer(b.map.colorSpace)===st,decodeVideoTextureEmissive:Ee&&b.emissiveMap.isVideoTexture===!0&&it.getTransfer(b.emissiveMap.colorSpace)===st,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Ei,flipSided:b.side===ti,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:be&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(be&&b.extensions.multiDraw===!0||Re)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Ge.vertexUv1s=l.has(1),Ge.vertexUv2s=l.has(2),Ge.vertexUv3s=l.has(3),l.clear(),Ge}function p(b){let M=[];if(b.shaderID?M.push(b.shaderID):(M.push(b.customVertexShaderID),M.push(b.customFragmentShaderID)),b.defines!==void 0)for(let O in b.defines)M.push(O),M.push(b.defines[O]);return b.isRawShaderMaterial===!1&&(S(M,b),y(M,b),M.push(r.outputColorSpace)),M.push(b.customProgramCacheKey),M.join()}function S(b,M){b.push(M.precision),b.push(M.outputColorSpace),b.push(M.envMapMode),b.push(M.envMapCubeUVHeight),b.push(M.mapUv),b.push(M.alphaMapUv),b.push(M.lightMapUv),b.push(M.aoMapUv),b.push(M.bumpMapUv),b.push(M.normalMapUv),b.push(M.displacementMapUv),b.push(M.emissiveMapUv),b.push(M.metalnessMapUv),b.push(M.roughnessMapUv),b.push(M.anisotropyMapUv),b.push(M.clearcoatMapUv),b.push(M.clearcoatNormalMapUv),b.push(M.clearcoatRoughnessMapUv),b.push(M.iridescenceMapUv),b.push(M.iridescenceThicknessMapUv),b.push(M.sheenColorMapUv),b.push(M.sheenRoughnessMapUv),b.push(M.specularMapUv),b.push(M.specularColorMapUv),b.push(M.specularIntensityMapUv),b.push(M.transmissionMapUv),b.push(M.thicknessMapUv),b.push(M.combine),b.push(M.fogExp2),b.push(M.sizeAttenuation),b.push(M.morphTargetsCount),b.push(M.morphAttributeCount),b.push(M.numDirLights),b.push(M.numPointLights),b.push(M.numSpotLights),b.push(M.numSpotLightMaps),b.push(M.numHemiLights),b.push(M.numRectAreaLights),b.push(M.numDirLightShadows),b.push(M.numPointLightShadows),b.push(M.numSpotLightShadows),b.push(M.numSpotLightShadowsWithMaps),b.push(M.numLightProbes),b.push(M.shadowMapType),b.push(M.toneMapping),b.push(M.numClippingPlanes),b.push(M.numClipIntersection),b.push(M.depthPacking)}function y(b,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),M.gradientMap&&o.enable(22),b.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),b.push(o.mask)}function w(b){let M=x[b.type],O;if(M){let z=on[M];O=V0.clone(z.uniforms)}else O=b.uniforms;return O}function A(b,M){let O;for(let z=0,G=h.length;z<G;z++){let K=h[z];if(K.cacheKey===M){O=K,++O.usedTimes;break}}return O===void 0&&(O=new x1(r,M,b,s),h.push(O)),O}function T(b){if(--b.usedTimes===0){let M=h.indexOf(b);h[M]=h[h.length-1],h.pop(),b.destroy()}}function R(b){c.remove(b)}function N(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:w,acquireProgram:A,releaseProgram:T,releaseShaderCache:R,programs:h,dispose:N}}function b1(){let r=new WeakMap;function e(a){return r.has(a)}function t(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function i(a){r.delete(a)}function n(a,o,c){r.get(a)[o]=c}function s(){r=new WeakMap}return{has:e,get:t,remove:i,update:n,dispose:s}}function S1(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function lg(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function hg(){let r=[],e=0,t=[],i=[],n=[];function s(){e=0,t.length=0,i.length=0,n.length=0}function a(u,d,f,x,g,m){let p=r[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:x,renderOrder:u.renderOrder,z:g,group:m},r[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=x,p.renderOrder=u.renderOrder,p.z=g,p.group=m),e++,p}function o(u,d,f,x,g,m){let p=a(u,d,f,x,g,m);f.transmission>0?i.push(p):f.transparent===!0?n.push(p):t.push(p)}function c(u,d,f,x,g,m){let p=a(u,d,f,x,g,m);f.transmission>0?i.unshift(p):f.transparent===!0?n.unshift(p):t.unshift(p)}function l(u,d){t.length>1&&t.sort(u||S1),i.length>1&&i.sort(d||lg),n.length>1&&n.sort(d||lg)}function h(){for(let u=e,d=r.length;u<d;u++){let f=r[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:n,init:s,push:o,unshift:c,finish:h,sort:l}}function M1(){let r=new WeakMap;function e(i,n){let s=r.get(i),a;return s===void 0?(a=new hg,r.set(i,[a])):n>=s.length?(a=new hg,s.push(a)):a=s[n],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function w1(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new W,color:new et};break;case"SpotLight":t={position:new W,direction:new W,color:new et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new W,color:new et,distance:0,decay:0};break;case"HemisphereLight":t={direction:new W,skyColor:new et,groundColor:new et};break;case"RectAreaLight":t={color:new et,position:new W,halfWidth:new W,halfHeight:new W};break}return r[e.id]=t,t}}}function E1(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}function A1(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function C1(r){let e=new w1,t=E1(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new W);let n=new W,s=new Rt,a=new Rt;function o(l){let h=0,u=0,d=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let f=0,x=0,g=0,m=0,p=0,S=0,y=0,w=0,A=0,T=0,R=0;l.sort(A1);for(let b=0,M=l.length;b<M;b++){let O=l[b],z=O.color,G=O.intensity,K=O.distance,J=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)h+=z.r*G,u+=z.g*G,d+=z.b*G;else if(O.isLightProbe){for(let j=0;j<9;j++)i.probe[j].addScaledVector(O.sh.coefficients[j],G);R++}else if(O.isDirectionalLight){let j=e.get(O);if(j.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){let ce=O.shadow,X=t.get(O);X.shadowIntensity=ce.intensity,X.shadowBias=ce.bias,X.shadowNormalBias=ce.normalBias,X.shadowRadius=ce.radius,X.shadowMapSize=ce.mapSize,i.directionalShadow[f]=X,i.directionalShadowMap[f]=J,i.directionalShadowMatrix[f]=O.shadow.matrix,S++}i.directional[f]=j,f++}else if(O.isSpotLight){let j=e.get(O);j.position.setFromMatrixPosition(O.matrixWorld),j.color.copy(z).multiplyScalar(G),j.distance=K,j.coneCos=Math.cos(O.angle),j.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),j.decay=O.decay,i.spot[g]=j;let ce=O.shadow;if(O.map&&(i.spotLightMap[A]=O.map,A++,ce.updateMatrices(O),O.castShadow&&T++),i.spotLightMatrix[g]=ce.matrix,O.castShadow){let X=t.get(O);X.shadowIntensity=ce.intensity,X.shadowBias=ce.bias,X.shadowNormalBias=ce.normalBias,X.shadowRadius=ce.radius,X.shadowMapSize=ce.mapSize,i.spotShadow[g]=X,i.spotShadowMap[g]=J,w++}g++}else if(O.isRectAreaLight){let j=e.get(O);j.color.copy(z).multiplyScalar(G),j.halfWidth.set(O.width*.5,0,0),j.halfHeight.set(0,O.height*.5,0),i.rectArea[m]=j,m++}else if(O.isPointLight){let j=e.get(O);if(j.color.copy(O.color).multiplyScalar(O.intensity),j.distance=O.distance,j.decay=O.decay,O.castShadow){let ce=O.shadow,X=t.get(O);X.shadowIntensity=ce.intensity,X.shadowBias=ce.bias,X.shadowNormalBias=ce.normalBias,X.shadowRadius=ce.radius,X.shadowMapSize=ce.mapSize,X.shadowCameraNear=ce.camera.near,X.shadowCameraFar=ce.camera.far,i.pointShadow[x]=X,i.pointShadowMap[x]=J,i.pointShadowMatrix[x]=O.shadow.matrix,y++}i.point[x]=j,x++}else if(O.isHemisphereLight){let j=e.get(O);j.skyColor.copy(O.color).multiplyScalar(G),j.groundColor.copy(O.groundColor).multiplyScalar(G),i.hemi[p]=j,p++}}m>0&&(r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ye.LTC_FLOAT_1,i.rectAreaLTC2=ye.LTC_FLOAT_2):(i.rectAreaLTC1=ye.LTC_HALF_1,i.rectAreaLTC2=ye.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;let N=i.hash;(N.directionalLength!==f||N.pointLength!==x||N.spotLength!==g||N.rectAreaLength!==m||N.hemiLength!==p||N.numDirectionalShadows!==S||N.numPointShadows!==y||N.numSpotShadows!==w||N.numSpotMaps!==A||N.numLightProbes!==R)&&(i.directional.length=f,i.spot.length=g,i.rectArea.length=m,i.point.length=x,i.hemi.length=p,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=w,i.spotShadowMap.length=w,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=w+A-T,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=R,N.directionalLength=f,N.pointLength=x,N.spotLength=g,N.rectAreaLength=m,N.hemiLength=p,N.numDirectionalShadows=S,N.numPointShadows=y,N.numSpotShadows=w,N.numSpotMaps=A,N.numLightProbes=R,i.version=T1++)}function c(l,h){let u=0,d=0,f=0,x=0,g=0,m=h.matrixWorldInverse;for(let p=0,S=l.length;p<S;p++){let y=l[p];if(y.isDirectionalLight){let w=i.directional[u];w.direction.setFromMatrixPosition(y.matrixWorld),n.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(n),w.direction.transformDirection(m),u++}else if(y.isSpotLight){let w=i.spot[f];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(m),w.direction.setFromMatrixPosition(y.matrixWorld),n.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(n),w.direction.transformDirection(m),f++}else if(y.isRectAreaLight){let w=i.rectArea[x];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(m),a.identity(),s.copy(y.matrixWorld),s.premultiply(m),a.extractRotation(s),w.halfWidth.set(y.width*.5,0,0),w.halfHeight.set(0,y.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),x++}else if(y.isPointLight){let w=i.point[d];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(m),d++}else if(y.isHemisphereLight){let w=i.hemi[g];w.direction.setFromMatrixPosition(y.matrixWorld),w.direction.transformDirection(m),g++}}}return{setup:o,setupView:c,state:i}}function ug(r){let e=new C1(r),t=[],i=[];function n(h){l.camera=h,t.length=0,i.length=0}function s(h){t.push(h)}function a(h){i.push(h)}function o(){e.setup(t)}function c(h){e.setupView(t,h)}let l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:n,state:l,setupLights:o,setupLightsView:c,pushLight:s,pushShadow:a}}function P1(r){let e=new WeakMap;function t(n,s=0){let a=e.get(n),o;return a===void 0?(o=new ug(r),e.set(n,[o])):s>=a.length?(o=new ug(r),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}function I1(r,e,t){let i=new Za,n=new He,s=new He,a=new wt,o=new Bc({depthPacking:P0}),c=new kc,l={},h=t.maxTextureSize,u={[An]:ti,[ti]:An,[Ei]:Ei},d=new Fi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new He},radius:{value:4}},vertexShader:R1,fragmentShader:L1}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let x=new Cn;x.setAttribute("position",new yi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new Mi(x,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=td;let p=this.type;this.render=function(T,R,N){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;let b=r.getRenderTarget(),M=r.getActiveCubeFace(),O=r.getActiveMipmapLevel(),z=r.state;z.setBlending(nn),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let G=p!==tn&&this.type===tn,K=p===tn&&this.type!==tn;for(let J=0,j=T.length;J<j;J++){let ce=T[J],X=ce.shadow;if(X===void 0){Fe("WebGLShadowMap:",ce,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;n.copy(X.mapSize);let fe=X.getFrameExtents();if(n.multiply(fe),s.copy(X.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(s.x=Math.floor(h/fe.x),n.x=s.x*fe.x,X.mapSize.x=s.x),n.y>h&&(s.y=Math.floor(h/fe.y),n.y=s.y*fe.y,X.mapSize.y=s.y)),X.map===null||G===!0||K===!0){let Ce=this.type!==tn?{minFilter:di,magFilter:di}:{};X.map!==null&&X.map.dispose(),X.map=new Qi(n.x,n.y,Ce),X.map.texture.name=ce.name+".shadowMap",X.camera.updateProjectionMatrix()}r.setRenderTarget(X.map),r.clear();let pe=X.getViewportCount();for(let Ce=0;Ce<pe;Ce++){let Ne=X.getViewport(Ce);a.set(s.x*Ne.x,s.y*Ne.y,s.x*Ne.z,s.y*Ne.w),z.viewport(a),X.updateMatrices(ce,Ce),i=X.getFrustum(),w(R,N,X.camera,ce,this.type)}X.isPointLightShadow!==!0&&this.type===tn&&S(X,N),X.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(b,M,O)};function S(T,R){let N=e.update(g);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Qi(n.x,n.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,r.setRenderTarget(T.mapPass),r.clear(),r.renderBufferDirect(R,null,N,d,g,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,r.setRenderTarget(T.map),r.clear(),r.renderBufferDirect(R,null,N,f,g,null)}function y(T,R,N,b){let M=null,O=N.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(O!==void 0)M=O;else if(M=N.isPointLight===!0?c:o,r.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){let z=M.uuid,G=R.uuid,K=l[z];K===void 0&&(K={},l[z]=K);let J=K[G];J===void 0&&(J=M.clone(),K[G]=J,R.addEventListener("dispose",A)),M=J}if(M.visible=R.visible,M.wireframe=R.wireframe,b===tn?M.side=R.shadowSide!==null?R.shadowSide:R.side:M.side=R.shadowSide!==null?R.shadowSide:u[R.side],M.alphaMap=R.alphaMap,M.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,M.map=R.map,M.clipShadows=R.clipShadows,M.clippingPlanes=R.clippingPlanes,M.clipIntersection=R.clipIntersection,M.displacementMap=R.displacementMap,M.displacementScale=R.displacementScale,M.displacementBias=R.displacementBias,M.wireframeLinewidth=R.wireframeLinewidth,M.linewidth=R.linewidth,N.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let z=r.properties.get(M);z.light=N}return M}function w(T,R,N,b,M){if(T.visible===!1)return;if(T.layers.test(R.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&M===tn)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,T.matrixWorld);let G=e.update(T),K=T.material;if(Array.isArray(K)){let J=G.groups;for(let j=0,ce=J.length;j<ce;j++){let X=J[j],fe=K[X.materialIndex];if(fe&&fe.visible){let pe=y(T,fe,b,M);T.onBeforeShadow(r,T,R,N,G,pe,X),r.renderBufferDirect(N,null,G,pe,T,X),T.onAfterShadow(r,T,R,N,G,pe,X)}}}else if(K.visible){let J=y(T,K,b,M);T.onBeforeShadow(r,T,R,N,G,J,null),r.renderBufferDirect(N,null,G,J,T,null),T.onAfterShadow(r,T,R,N,G,J,null)}}let z=T.children;for(let G=0,K=z.length;G<K;G++)w(z[G],R,N,b,M)}function A(T){T.target.removeEventListener("dispose",A);for(let N in l){let b=l[N],M=T.target.uuid;M in b&&(b[M].dispose(),delete b[M])}}}function O1(r,e){function t(){let D=!1,ue=new wt,de=null,he=new wt(0,0,0,0);return{setMask:function(se){de!==se&&!D&&(r.colorMask(se,se,se,se),de=se)},setLocked:function(se){D=se},setClear:function(se,ee,be,xe,Ge){Ge===!0&&(se*=xe,ee*=xe,be*=xe),ue.set(se,ee,be,xe),he.equals(ue)===!1&&(r.clearColor(se,ee,be,xe),he.copy(ue))},reset:function(){D=!1,de=null,he.set(-1,0,0,0)}}}function i(){let D=!1,ue=!1,de=null,he=null,se=null;return{setReversed:function(ee){if(ue!==ee){let be=e.get("EXT_clip_control");ee?be.clipControlEXT(be.LOWER_LEFT_EXT,be.ZERO_TO_ONE_EXT):be.clipControlEXT(be.LOWER_LEFT_EXT,be.NEGATIVE_ONE_TO_ONE_EXT),ue=ee;let xe=se;se=null,this.setClear(xe)}},getReversed:function(){return ue},setTest:function(ee){ee?ae(r.DEPTH_TEST):Me(r.DEPTH_TEST)},setMask:function(ee){de!==ee&&!D&&(r.depthMask(ee),de=ee)},setFunc:function(ee){if(ue&&(ee=D1[ee]),he!==ee){switch(ee){case Jc:r.depthFunc(r.NEVER);break;case Qc:r.depthFunc(r.ALWAYS);break;case el:r.depthFunc(r.LESS);break;case Fr:r.depthFunc(r.LEQUAL);break;case tl:r.depthFunc(r.EQUAL);break;case il:r.depthFunc(r.GEQUAL);break;case nl:r.depthFunc(r.GREATER);break;case rl:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}he=ee}},setLocked:function(ee){D=ee},setClear:function(ee){se!==ee&&(ue&&(ee=1-ee),r.clearDepth(ee),se=ee)},reset:function(){D=!1,de=null,he=null,se=null,ue=!1}}}function n(){let D=!1,ue=null,de=null,he=null,se=null,ee=null,be=null,xe=null,Ge=null;return{setTest:function(Te){D||(Te?ae(r.STENCIL_TEST):Me(r.STENCIL_TEST))},setMask:function(Te){ue!==Te&&!D&&(r.stencilMask(Te),ue=Te)},setFunc:function(Te,ot,Be){(de!==Te||he!==ot||se!==Be)&&(r.stencilFunc(Te,ot,Be),de=Te,he=ot,se=Be)},setOp:function(Te,ot,Be){(ee!==Te||be!==ot||xe!==Be)&&(r.stencilOp(Te,ot,Be),ee=Te,be=ot,xe=Be)},setLocked:function(Te){D=Te},setClear:function(Te){Ge!==Te&&(r.clearStencil(Te),Ge=Te)},reset:function(){D=!1,ue=null,de=null,he=null,se=null,ee=null,be=null,xe=null,Ge=null}}}let s=new t,a=new i,o=new n,c=new WeakMap,l=new WeakMap,h={},u={},d=new WeakMap,f=[],x=null,g=!1,m=null,p=null,S=null,y=null,w=null,A=null,T=null,R=new et(0,0,0),N=0,b=!1,M=null,O=null,z=null,G=null,K=null,J=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),j=!1,ce=0,X=r.getParameter(r.VERSION);X.indexOf("WebGL")!==-1?(ce=parseFloat(/^WebGL (\d)/.exec(X)[1]),j=ce>=1):X.indexOf("OpenGL ES")!==-1&&(ce=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),j=ce>=2);let fe=null,pe={},Ce=r.getParameter(r.SCISSOR_BOX),Ne=r.getParameter(r.VIEWPORT),tt=new wt().fromArray(Ce),Xe=new wt().fromArray(Ne);function $e(D,ue,de,he){let se=new Uint8Array(4),ee=r.createTexture();r.bindTexture(D,ee),r.texParameteri(D,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(D,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let be=0;be<de;be++)D===r.TEXTURE_3D||D===r.TEXTURE_2D_ARRAY?r.texImage3D(ue,0,r.RGBA,1,1,he,0,r.RGBA,r.UNSIGNED_BYTE,se):r.texImage2D(ue+be,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,se);return ee}let ne={};ne[r.TEXTURE_2D]=$e(r.TEXTURE_2D,r.TEXTURE_2D,1),ne[r.TEXTURE_CUBE_MAP]=$e(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),ne[r.TEXTURE_2D_ARRAY]=$e(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ne[r.TEXTURE_3D]=$e(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ae(r.DEPTH_TEST),a.setFunc(Fr),Ye(!1),je(ed),ae(r.CULL_FACE),dt(nn);function ae(D){h[D]!==!0&&(r.enable(D),h[D]=!0)}function Me(D){h[D]!==!1&&(r.disable(D),h[D]=!1)}function Ue(D,ue){return u[D]!==ue?(r.bindFramebuffer(D,ue),u[D]=ue,D===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=ue),D===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=ue),!0):!1}function Re(D,ue){let de=f,he=!1;if(D){de=d.get(ue),de===void 0&&(de=[],d.set(ue,de));let se=D.textures;if(de.length!==se.length||de[0]!==r.COLOR_ATTACHMENT0){for(let ee=0,be=se.length;ee<be;ee++)de[ee]=r.COLOR_ATTACHMENT0+ee;de.length=se.length,he=!0}}else de[0]!==r.BACK&&(de[0]=r.BACK,he=!0);he&&r.drawBuffers(de)}function qe(D){return x!==D?(r.useProgram(D),x=D,!0):!1}let Lt={[Kn]:r.FUNC_ADD,[t0]:r.FUNC_SUBTRACT,[i0]:r.FUNC_REVERSE_SUBTRACT};Lt[n0]=r.MIN,Lt[r0]=r.MAX;let ze={[s0]:r.ZERO,[a0]:r.ONE,[o0]:r.SRC_COLOR,[Ac]:r.SRC_ALPHA,[f0]:r.SRC_ALPHA_SATURATE,[u0]:r.DST_COLOR,[l0]:r.DST_ALPHA,[c0]:r.ONE_MINUS_SRC_COLOR,[Cc]:r.ONE_MINUS_SRC_ALPHA,[d0]:r.ONE_MINUS_DST_COLOR,[h0]:r.ONE_MINUS_DST_ALPHA,[p0]:r.CONSTANT_COLOR,[m0]:r.ONE_MINUS_CONSTANT_COLOR,[g0]:r.CONSTANT_ALPHA,[v0]:r.ONE_MINUS_CONSTANT_ALPHA};function dt(D,ue,de,he,se,ee,be,xe,Ge,Te){if(D===nn){g===!0&&(Me(r.BLEND),g=!1);return}if(g===!1&&(ae(r.BLEND),g=!0),D!==e0){if(D!==m||Te!==b){if((p!==Kn||w!==Kn)&&(r.blendEquation(r.FUNC_ADD),p=Kn,w=Kn),Te)switch(D){case Or:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case id:r.blendFunc(r.ONE,r.ONE);break;case nd:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case rd:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Ze("WebGLState: Invalid blending: ",D);break}else switch(D){case Or:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case id:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case nd:Ze("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case rd:Ze("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ze("WebGLState: Invalid blending: ",D);break}S=null,y=null,A=null,T=null,R.set(0,0,0),N=0,m=D,b=Te}return}se=se||ue,ee=ee||de,be=be||he,(ue!==p||se!==w)&&(r.blendEquationSeparate(Lt[ue],Lt[se]),p=ue,w=se),(de!==S||he!==y||ee!==A||be!==T)&&(r.blendFuncSeparate(ze[de],ze[he],ze[ee],ze[be]),S=de,y=he,A=ee,T=be),(xe.equals(R)===!1||Ge!==N)&&(r.blendColor(xe.r,xe.g,xe.b,Ge),R.copy(xe),N=Ge),m=D,b=!1}function F(D,ue){D.side===Ei?Me(r.CULL_FACE):ae(r.CULL_FACE);let de=D.side===ti;ue&&(de=!de),Ye(de),D.blending===Or&&D.transparent===!1?dt(nn):dt(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),s.setMask(D.colorWrite);let he=D.stencilWrite;o.setTest(he),he&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Ee(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ae(r.SAMPLE_ALPHA_TO_COVERAGE):Me(r.SAMPLE_ALPHA_TO_COVERAGE)}function Ye(D){M!==D&&(D?r.frontFace(r.CW):r.frontFace(r.CCW),M=D)}function je(D){D!==Km?(ae(r.CULL_FACE),D!==O&&(D===ed?r.cullFace(r.BACK):D===Jm?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Me(r.CULL_FACE),O=D}function at(D){D!==z&&(j&&r.lineWidth(D),z=D)}function Ee(D,ue,de){D?(ae(r.POLYGON_OFFSET_FILL),(G!==ue||K!==de)&&(r.polygonOffset(ue,de),G=ue,K=de)):Me(r.POLYGON_OFFSET_FILL)}function B(D){D?ae(r.SCISSOR_TEST):Me(r.SCISSOR_TEST)}function L(D){D===void 0&&(D=r.TEXTURE0+J-1),fe!==D&&(r.activeTexture(D),fe=D)}function E(D,ue,de){de===void 0&&(fe===null?de=r.TEXTURE0+J-1:de=fe);let he=pe[de];he===void 0&&(he={type:void 0,texture:void 0},pe[de]=he),(he.type!==D||he.texture!==ue)&&(fe!==de&&(r.activeTexture(de),fe=de),r.bindTexture(D,ue||ne[D]),he.type=D,he.texture=ue)}function v(){let D=pe[fe];D!==void 0&&D.type!==void 0&&(r.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function _(){try{r.compressedTexImage2D(...arguments)}catch(D){D("WebGLState:",D)}}function P(){try{r.compressedTexImage3D(...arguments)}catch(D){D("WebGLState:",D)}}function U(){try{r.texSubImage2D(...arguments)}catch(D){D("WebGLState:",D)}}function k(){try{r.texSubImage3D(...arguments)}catch(D){D("WebGLState:",D)}}function I(){try{r.compressedTexSubImage2D(...arguments)}catch(D){D("WebGLState:",D)}}function te(){try{r.compressedTexSubImage3D(...arguments)}catch(D){D("WebGLState:",D)}}function oe(){try{r.texStorage2D(...arguments)}catch(D){D("WebGLState:",D)}}function me(){try{r.texStorage3D(...arguments)}catch(D){D("WebGLState:",D)}}function re(){try{r.texImage2D(...arguments)}catch(D){D("WebGLState:",D)}}function Q(){try{r.texImage3D(...arguments)}catch(D){D("WebGLState:",D)}}function ie(D){tt.equals(D)===!1&&(r.scissor(D.x,D.y,D.z,D.w),tt.copy(D))}function ve(D){Xe.equals(D)===!1&&(r.viewport(D.x,D.y,D.z,D.w),Xe.copy(D))}function _e(D,ue){let de=l.get(ue);de===void 0&&(de=new WeakMap,l.set(ue,de));let he=de.get(D);he===void 0&&(he=r.getUniformBlockIndex(ue,D.name),de.set(D,he))}function le(D,ue){let he=l.get(ue).get(D);c.get(ue)!==he&&(r.uniformBlockBinding(ue,he,D.__bindingPointIndex),c.set(ue,he))}function Pe(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},fe=null,pe={},u={},d=new WeakMap,f=[],x=null,g=!1,m=null,p=null,S=null,y=null,w=null,A=null,T=null,R=new et(0,0,0),N=0,b=!1,M=null,O=null,z=null,G=null,K=null,tt.set(0,0,r.canvas.width,r.canvas.height),Xe.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ae,disable:Me,bindFramebuffer:Ue,drawBuffers:Re,useProgram:qe,setBlending:dt,setMaterial:F,setFlipSided:Ye,setCullFace:je,setLineWidth:at,setPolygonOffset:Ee,setScissorTest:B,activeTexture:L,bindTexture:E,unbindTexture:v,compressedTexImage2D:_,compressedTexImage3D:P,texImage2D:re,texImage3D:Q,updateUBOMapping:_e,uniformBlockBinding:le,texStorage2D:oe,texStorage3D:me,texSubImage2D:U,texSubImage3D:k,compressedTexSubImage2D:I,compressedTexSubImage3D:te,scissor:ie,viewport:ve,reset:Pe}}function F1(r,e,t,i,n,s,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new He,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(v,_){return f?new OffscreenCanvas(v,_):Fs("canvas")}function g(v,_,P){let U=1,k=E(v);if((k.width>P||k.height>P)&&(U=P/Math.max(k.width,k.height)),U<1)if(typeof HTMLImageElement!="undefined"&&v instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&v instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&v instanceof ImageBitmap||typeof VideoFrame!="undefined"&&v instanceof VideoFrame){let I=Math.floor(U*k.width),te=Math.floor(U*k.height);u===void 0&&(u=x(I,te));let oe=_?x(I,te):u;return oe.width=I,oe.height=te,oe.getContext("2d").drawImage(v,0,0,I,te),Fe("WebGLRenderer: Texture has been resized from ("+k.width+"x"+k.height+") to ("+I+"x"+te+")."),oe}else return"data"in v&&Fe("WebGLRenderer: Image in DataTexture is too big ("+k.width+"x"+k.height+")."),v;return v}function m(v){return v.generateMipmaps}function p(v){r.generateMipmap(v)}function S(v){return v.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:v.isWebGL3DRenderTarget?r.TEXTURE_3D:v.isWebGLArrayRenderTarget||v.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function y(v,_,P,U,k=!1){if(v!==null){if(r[v]!==void 0)return r[v];Fe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+v+"'")}let I=_;if(_===r.RED&&(P===r.FLOAT&&(I=r.R32F),P===r.HALF_FLOAT&&(I=r.R16F),P===r.UNSIGNED_BYTE&&(I=r.R8)),_===r.RED_INTEGER&&(P===r.UNSIGNED_BYTE&&(I=r.R8UI),P===r.UNSIGNED_SHORT&&(I=r.R16UI),P===r.UNSIGNED_INT&&(I=r.R32UI),P===r.BYTE&&(I=r.R8I),P===r.SHORT&&(I=r.R16I),P===r.INT&&(I=r.R32I)),_===r.RG&&(P===r.FLOAT&&(I=r.RG32F),P===r.HALF_FLOAT&&(I=r.RG16F),P===r.UNSIGNED_BYTE&&(I=r.RG8)),_===r.RG_INTEGER&&(P===r.UNSIGNED_BYTE&&(I=r.RG8UI),P===r.UNSIGNED_SHORT&&(I=r.RG16UI),P===r.UNSIGNED_INT&&(I=r.RG32UI),P===r.BYTE&&(I=r.RG8I),P===r.SHORT&&(I=r.RG16I),P===r.INT&&(I=r.RG32I)),_===r.RGB_INTEGER&&(P===r.UNSIGNED_BYTE&&(I=r.RGB8UI),P===r.UNSIGNED_SHORT&&(I=r.RGB16UI),P===r.UNSIGNED_INT&&(I=r.RGB32UI),P===r.BYTE&&(I=r.RGB8I),P===r.SHORT&&(I=r.RGB16I),P===r.INT&&(I=r.RGB32I)),_===r.RGBA_INTEGER&&(P===r.UNSIGNED_BYTE&&(I=r.RGBA8UI),P===r.UNSIGNED_SHORT&&(I=r.RGBA16UI),P===r.UNSIGNED_INT&&(I=r.RGBA32UI),P===r.BYTE&&(I=r.RGBA8I),P===r.SHORT&&(I=r.RGBA16I),P===r.INT&&(I=r.RGBA32I)),_===r.RGB&&(P===r.UNSIGNED_INT_5_9_9_9_REV&&(I=r.RGB9_E5),P===r.UNSIGNED_INT_10F_11F_11F_REV&&(I=r.R11F_G11F_B10F)),_===r.RGBA){let te=k?za:it.getTransfer(U);P===r.FLOAT&&(I=r.RGBA32F),P===r.HALF_FLOAT&&(I=r.RGBA16F),P===r.UNSIGNED_BYTE&&(I=te===st?r.SRGB8_ALPHA8:r.RGBA8),P===r.UNSIGNED_SHORT_4_4_4_4&&(I=r.RGBA4),P===r.UNSIGNED_SHORT_5_5_5_1&&(I=r.RGB5_A1)}return(I===r.R16F||I===r.R32F||I===r.RG16F||I===r.RG32F||I===r.RGBA16F||I===r.RGBA32F)&&e.get("EXT_color_buffer_float"),I}function w(v,_){let P;return v?_===null||_===nr||_===qs?P=r.DEPTH24_STENCIL8:_===an?P=r.DEPTH32F_STENCIL8:_===Xs&&(P=r.DEPTH24_STENCIL8,Fe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===nr||_===qs?P=r.DEPTH_COMPONENT24:_===an?P=r.DEPTH_COMPONENT32F:_===Xs&&(P=r.DEPTH_COMPONENT16),P}function A(v,_){return m(v)===!0||v.isFramebufferTexture&&v.minFilter!==di&&v.minFilter!==Dt?Math.log2(Math.max(_.width,_.height))+1:v.mipmaps!==void 0&&v.mipmaps.length>0?v.mipmaps.length:v.isCompressedTexture&&Array.isArray(v.image)?_.mipmaps.length:1}function T(v){let _=v.target;_.removeEventListener("dispose",T),N(_),_.isVideoTexture&&h.delete(_)}function R(v){let _=v.target;_.removeEventListener("dispose",R),M(_)}function N(v){let _=i.get(v);if(_.__webglInit===void 0)return;let P=v.source,U=d.get(P);if(U){let k=U[_.__cacheKey];k.usedTimes--,k.usedTimes===0&&b(v),Object.keys(U).length===0&&d.delete(P)}i.remove(v)}function b(v){let _=i.get(v);r.deleteTexture(_.__webglTexture);let P=v.source,U=d.get(P);delete U[_.__cacheKey],a.memory.textures--}function M(v){let _=i.get(v);if(v.depthTexture&&(v.depthTexture.dispose(),i.remove(v.depthTexture)),v.isWebGLCubeRenderTarget)for(let U=0;U<6;U++){if(Array.isArray(_.__webglFramebuffer[U]))for(let k=0;k<_.__webglFramebuffer[U].length;k++)r.deleteFramebuffer(_.__webglFramebuffer[U][k]);else r.deleteFramebuffer(_.__webglFramebuffer[U]);_.__webglDepthbuffer&&r.deleteRenderbuffer(_.__webglDepthbuffer[U])}else{if(Array.isArray(_.__webglFramebuffer))for(let U=0;U<_.__webglFramebuffer.length;U++)r.deleteFramebuffer(_.__webglFramebuffer[U]);else r.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&r.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&r.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let U=0;U<_.__webglColorRenderbuffer.length;U++)_.__webglColorRenderbuffer[U]&&r.deleteRenderbuffer(_.__webglColorRenderbuffer[U]);_.__webglDepthRenderbuffer&&r.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let P=v.textures;for(let U=0,k=P.length;U<k;U++){let I=i.get(P[U]);I.__webglTexture&&(r.deleteTexture(I.__webglTexture),a.memory.textures--),i.remove(P[U])}i.remove(v)}let O=0;function z(){O=0}function G(){let v=O;return v>=n.maxTextures&&Fe("WebGLTextures: Trying to use "+v+" texture units while this GPU supports only "+n.maxTextures),O+=1,v}function K(v){let _=[];return _.push(v.wrapS),_.push(v.wrapT),_.push(v.wrapR||0),_.push(v.magFilter),_.push(v.minFilter),_.push(v.anisotropy),_.push(v.internalFormat),_.push(v.format),_.push(v.type),_.push(v.generateMipmaps),_.push(v.premultiplyAlpha),_.push(v.flipY),_.push(v.unpackAlignment),_.push(v.colorSpace),_.join()}function J(v,_){let P=i.get(v);if(v.isVideoTexture&&B(v),v.isRenderTargetTexture===!1&&v.isExternalTexture!==!0&&v.version>0&&P.__version!==v.version){let U=v.image;if(U===null)Fe("WebGLRenderer: Texture marked for update but no image data found.");else if(U.complete===!1)Fe("WebGLRenderer: Texture marked for update but image is incomplete");else{ne(P,v,_);return}}else v.isExternalTexture&&(P.__webglTexture=v.sourceTexture?v.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,P.__webglTexture,r.TEXTURE0+_)}function j(v,_){let P=i.get(v);if(v.isRenderTargetTexture===!1&&v.version>0&&P.__version!==v.version){ne(P,v,_);return}else v.isExternalTexture&&(P.__webglTexture=v.sourceTexture?v.sourceTexture:null);t.bindTexture(r.TEXTURE_2D_ARRAY,P.__webglTexture,r.TEXTURE0+_)}function ce(v,_){let P=i.get(v);if(v.isRenderTargetTexture===!1&&v.version>0&&P.__version!==v.version){ne(P,v,_);return}t.bindTexture(r.TEXTURE_3D,P.__webglTexture,r.TEXTURE0+_)}function X(v,_){let P=i.get(v);if(v.version>0&&P.__version!==v.version){ae(P,v,_);return}t.bindTexture(r.TEXTURE_CUBE_MAP,P.__webglTexture,r.TEXTURE0+_)}let fe={[Pc]:r.REPEAT,[$i]:r.CLAMP_TO_EDGE,[Rc]:r.MIRRORED_REPEAT},pe={[di]:r.NEAREST,[A0]:r.NEAREST_MIPMAP_NEAREST,[ao]:r.NEAREST_MIPMAP_LINEAR,[Dt]:r.LINEAR,[ol]:r.LINEAR_MIPMAP_NEAREST,[rn]:r.LINEAR_MIPMAP_LINEAR},Ce={[I0]:r.NEVER,[B0]:r.ALWAYS,[D0]:r.LESS,[pd]:r.LEQUAL,[O0]:r.EQUAL,[U0]:r.GEQUAL,[F0]:r.GREATER,[N0]:r.NOTEQUAL};function Ne(v,_){if(_.type===an&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===Dt||_.magFilter===ol||_.magFilter===ao||_.magFilter===rn||_.minFilter===Dt||_.minFilter===ol||_.minFilter===ao||_.minFilter===rn)&&Fe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(v,r.TEXTURE_WRAP_S,fe[_.wrapS]),r.texParameteri(v,r.TEXTURE_WRAP_T,fe[_.wrapT]),(v===r.TEXTURE_3D||v===r.TEXTURE_2D_ARRAY)&&r.texParameteri(v,r.TEXTURE_WRAP_R,fe[_.wrapR]),r.texParameteri(v,r.TEXTURE_MAG_FILTER,pe[_.magFilter]),r.texParameteri(v,r.TEXTURE_MIN_FILTER,pe[_.minFilter]),_.compareFunction&&(r.texParameteri(v,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(v,r.TEXTURE_COMPARE_FUNC,Ce[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===di||_.minFilter!==ao&&_.minFilter!==rn||_.type===an&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){let P=e.get("EXT_texture_filter_anisotropic");r.texParameterf(v,P.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,n.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function tt(v,_){let P=!1;v.__webglInit===void 0&&(v.__webglInit=!0,_.addEventListener("dispose",T));let U=_.source,k=d.get(U);k===void 0&&(k={},d.set(U,k));let I=K(_);if(I!==v.__cacheKey){k[I]===void 0&&(k[I]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,P=!0),k[I].usedTimes++;let te=k[v.__cacheKey];te!==void 0&&(k[v.__cacheKey].usedTimes--,te.usedTimes===0&&b(_)),v.__cacheKey=I,v.__webglTexture=k[I].texture}return P}function Xe(v,_,P){return Math.floor(Math.floor(v/P)/_)}function $e(v,_,P,U){let I=v.updateRanges;if(I.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,_.width,_.height,P,U,_.data);else{I.sort((Q,ie)=>Q.start-ie.start);let te=0;for(let Q=1;Q<I.length;Q++){let ie=I[te],ve=I[Q],_e=ie.start+ie.count,le=Xe(ve.start,_.width,4),Pe=Xe(ie.start,_.width,4);ve.start<=_e+1&&le===Pe&&Xe(ve.start+ve.count-1,_.width,4)===le?ie.count=Math.max(ie.count,ve.start+ve.count-ie.start):(++te,I[te]=ve)}I.length=te+1;let oe=r.getParameter(r.UNPACK_ROW_LENGTH),me=r.getParameter(r.UNPACK_SKIP_PIXELS),re=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,_.width);for(let Q=0,ie=I.length;Q<ie;Q++){let ve=I[Q],_e=Math.floor(ve.start/4),le=Math.ceil(ve.count/4),Pe=_e%_.width,D=Math.floor(_e/_.width),ue=le,de=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,Pe),r.pixelStorei(r.UNPACK_SKIP_ROWS,D),t.texSubImage2D(r.TEXTURE_2D,0,Pe,D,ue,de,P,U,_.data)}v.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,oe),r.pixelStorei(r.UNPACK_SKIP_PIXELS,me),r.pixelStorei(r.UNPACK_SKIP_ROWS,re)}}function ne(v,_,P){let U=r.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(U=r.TEXTURE_2D_ARRAY),_.isData3DTexture&&(U=r.TEXTURE_3D);let k=tt(v,_),I=_.source;t.bindTexture(U,v.__webglTexture,r.TEXTURE0+P);let te=i.get(I);if(I.version!==te.__version||k===!0){t.activeTexture(r.TEXTURE0+P);let oe=it.getPrimaries(it.workingColorSpace),me=_.colorSpace===Rn?null:it.getPrimaries(_.colorSpace),re=_.colorSpace===Rn||oe===me?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,_.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,_.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,re);let Q=g(_.image,!1,n.maxTextureSize);Q=L(_,Q);let ie=s.convert(_.format,_.colorSpace),ve=s.convert(_.type),_e=y(_.internalFormat,ie,ve,_.colorSpace,_.isVideoTexture);Ne(U,_);let le,Pe=_.mipmaps,D=_.isVideoTexture!==!0,ue=te.__version===void 0||k===!0,de=I.dataReady,he=A(_,Q);if(_.isDepthTexture)_e=w(_.format===Ys,_.type),ue&&(D?t.texStorage2D(r.TEXTURE_2D,1,_e,Q.width,Q.height):t.texImage2D(r.TEXTURE_2D,0,_e,Q.width,Q.height,0,ie,ve,null));else if(_.isDataTexture)if(Pe.length>0){D&&ue&&t.texStorage2D(r.TEXTURE_2D,he,_e,Pe[0].width,Pe[0].height);for(let se=0,ee=Pe.length;se<ee;se++)le=Pe[se],D?de&&t.texSubImage2D(r.TEXTURE_2D,se,0,0,le.width,le.height,ie,ve,le.data):t.texImage2D(r.TEXTURE_2D,se,_e,le.width,le.height,0,ie,ve,le.data);_.generateMipmaps=!1}else D?(ue&&t.texStorage2D(r.TEXTURE_2D,he,_e,Q.width,Q.height),de&&$e(_,Q,ie,ve)):t.texImage2D(r.TEXTURE_2D,0,_e,Q.width,Q.height,0,ie,ve,Q.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){D&&ue&&t.texStorage3D(r.TEXTURE_2D_ARRAY,he,_e,Pe[0].width,Pe[0].height,Q.depth);for(let se=0,ee=Pe.length;se<ee;se++)if(le=Pe[se],_.format!==Ni)if(ie!==null)if(D){if(de)if(_.layerUpdates.size>0){let be=Sd(le.width,le.height,_.format,_.type);for(let xe of _.layerUpdates){let Ge=le.data.subarray(xe*be/le.data.BYTES_PER_ELEMENT,(xe+1)*be/le.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,se,0,0,xe,le.width,le.height,1,ie,Ge)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,se,0,0,0,le.width,le.height,Q.depth,ie,le.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,se,_e,le.width,le.height,Q.depth,0,le.data,0,0);else Fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else D?de&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,se,0,0,0,le.width,le.height,Q.depth,ie,ve,le.data):t.texImage3D(r.TEXTURE_2D_ARRAY,se,_e,le.width,le.height,Q.depth,0,ie,ve,le.data)}else{D&&ue&&t.texStorage2D(r.TEXTURE_2D,he,_e,Pe[0].width,Pe[0].height);for(let se=0,ee=Pe.length;se<ee;se++)le=Pe[se],_.format!==Ni?ie!==null?D?de&&t.compressedTexSubImage2D(r.TEXTURE_2D,se,0,0,le.width,le.height,ie,le.data):t.compressedTexImage2D(r.TEXTURE_2D,se,_e,le.width,le.height,0,le.data):Fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):D?de&&t.texSubImage2D(r.TEXTURE_2D,se,0,0,le.width,le.height,ie,ve,le.data):t.texImage2D(r.TEXTURE_2D,se,_e,le.width,le.height,0,ie,ve,le.data)}else if(_.isDataArrayTexture)if(D){if(ue&&t.texStorage3D(r.TEXTURE_2D_ARRAY,he,_e,Q.width,Q.height,Q.depth),de)if(_.layerUpdates.size>0){let se=Sd(Q.width,Q.height,_.format,_.type);for(let ee of _.layerUpdates){let be=Q.data.subarray(ee*se/Q.data.BYTES_PER_ELEMENT,(ee+1)*se/Q.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,ee,Q.width,Q.height,1,ie,ve,be)}_.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,ie,ve,Q.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,_e,Q.width,Q.height,Q.depth,0,ie,ve,Q.data);else if(_.isData3DTexture)D?(ue&&t.texStorage3D(r.TEXTURE_3D,he,_e,Q.width,Q.height,Q.depth),de&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,ie,ve,Q.data)):t.texImage3D(r.TEXTURE_3D,0,_e,Q.width,Q.height,Q.depth,0,ie,ve,Q.data);else if(_.isFramebufferTexture){if(ue)if(D)t.texStorage2D(r.TEXTURE_2D,he,_e,Q.width,Q.height);else{let se=Q.width,ee=Q.height;for(let be=0;be<he;be++)t.texImage2D(r.TEXTURE_2D,be,_e,se,ee,0,ie,ve,null),se>>=1,ee>>=1}}else if(Pe.length>0){if(D&&ue){let se=E(Pe[0]);t.texStorage2D(r.TEXTURE_2D,he,_e,se.width,se.height)}for(let se=0,ee=Pe.length;se<ee;se++)le=Pe[se],D?de&&t.texSubImage2D(r.TEXTURE_2D,se,0,0,ie,ve,le):t.texImage2D(r.TEXTURE_2D,se,_e,ie,ve,le);_.generateMipmaps=!1}else if(D){if(ue){let se=E(Q);t.texStorage2D(r.TEXTURE_2D,he,_e,se.width,se.height)}de&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ie,ve,Q)}else t.texImage2D(r.TEXTURE_2D,0,_e,ie,ve,Q);m(_)&&p(U),te.__version=I.version,_.onUpdate&&_.onUpdate(_)}v.__version=_.version}function ae(v,_,P){if(_.image.length!==6)return;let U=tt(v,_),k=_.source;t.bindTexture(r.TEXTURE_CUBE_MAP,v.__webglTexture,r.TEXTURE0+P);let I=i.get(k);if(k.version!==I.__version||U===!0){t.activeTexture(r.TEXTURE0+P);let te=it.getPrimaries(it.workingColorSpace),oe=_.colorSpace===Rn?null:it.getPrimaries(_.colorSpace),me=_.colorSpace===Rn||te===oe?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,_.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,_.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);let re=_.isCompressedTexture||_.image[0].isCompressedTexture,Q=_.image[0]&&_.image[0].isDataTexture,ie=[];for(let ee=0;ee<6;ee++)!re&&!Q?ie[ee]=g(_.image[ee],!0,n.maxCubemapSize):ie[ee]=Q?_.image[ee].image:_.image[ee],ie[ee]=L(_,ie[ee]);let ve=ie[0],_e=s.convert(_.format,_.colorSpace),le=s.convert(_.type),Pe=y(_.internalFormat,_e,le,_.colorSpace),D=_.isVideoTexture!==!0,ue=I.__version===void 0||U===!0,de=k.dataReady,he=A(_,ve);Ne(r.TEXTURE_CUBE_MAP,_);let se;if(re){D&&ue&&t.texStorage2D(r.TEXTURE_CUBE_MAP,he,Pe,ve.width,ve.height);for(let ee=0;ee<6;ee++){se=ie[ee].mipmaps;for(let be=0;be<se.length;be++){let xe=se[be];_.format!==Ni?_e!==null?D?de&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,be,0,0,xe.width,xe.height,_e,xe.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,be,Pe,xe.width,xe.height,0,xe.data):Fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?de&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,be,0,0,xe.width,xe.height,_e,le,xe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,be,Pe,xe.width,xe.height,0,_e,le,xe.data)}}}else{if(se=_.mipmaps,D&&ue){se.length>0&&he++;let ee=E(ie[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,he,Pe,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(Q){D?de&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,ie[ee].width,ie[ee].height,_e,le,ie[ee].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Pe,ie[ee].width,ie[ee].height,0,_e,le,ie[ee].data);for(let be=0;be<se.length;be++){let Ge=se[be].image[ee].image;D?de&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,be+1,0,0,Ge.width,Ge.height,_e,le,Ge.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,be+1,Pe,Ge.width,Ge.height,0,_e,le,Ge.data)}}else{D?de&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,_e,le,ie[ee]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Pe,_e,le,ie[ee]);for(let be=0;be<se.length;be++){let xe=se[be];D?de&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,be+1,0,0,_e,le,xe.image[ee]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,be+1,Pe,_e,le,xe.image[ee])}}}m(_)&&p(r.TEXTURE_CUBE_MAP),I.__version=k.version,_.onUpdate&&_.onUpdate(_)}v.__version=_.version}function Me(v,_,P,U,k,I){let te=s.convert(P.format,P.colorSpace),oe=s.convert(P.type),me=y(P.internalFormat,te,oe,P.colorSpace),re=i.get(_),Q=i.get(P);if(Q.__renderTarget=_,!re.__hasExternalTextures){let ie=Math.max(1,_.width>>I),ve=Math.max(1,_.height>>I);k===r.TEXTURE_3D||k===r.TEXTURE_2D_ARRAY?t.texImage3D(k,I,me,ie,ve,_.depth,0,te,oe,null):t.texImage2D(k,I,me,ie,ve,0,te,oe,null)}t.bindFramebuffer(r.FRAMEBUFFER,v),Ee(_)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,U,k,Q.__webglTexture,0,at(_)):(k===r.TEXTURE_2D||k>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&k<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,U,k,Q.__webglTexture,I),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ue(v,_,P){if(r.bindRenderbuffer(r.RENDERBUFFER,v),_.depthBuffer){let U=_.depthTexture,k=U&&U.isDepthTexture?U.type:null,I=w(_.stencilBuffer,k),te=_.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,oe=at(_);Ee(_)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,oe,I,_.width,_.height):P?r.renderbufferStorageMultisample(r.RENDERBUFFER,oe,I,_.width,_.height):r.renderbufferStorage(r.RENDERBUFFER,I,_.width,_.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,te,r.RENDERBUFFER,v)}else{let U=_.textures;for(let k=0;k<U.length;k++){let I=U[k],te=s.convert(I.format,I.colorSpace),oe=s.convert(I.type),me=y(I.internalFormat,te,oe,I.colorSpace),re=at(_);P&&Ee(_)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,re,me,_.width,_.height):Ee(_)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,re,me,_.width,_.height):r.renderbufferStorage(r.RENDERBUFFER,me,_.width,_.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Re(v,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,v),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let U=i.get(_.depthTexture);U.__renderTarget=_,(!U.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),J(_.depthTexture,0);let k=U.__webglTexture,I=at(_);if(_.depthTexture.format===Os)Ee(_)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,k,0,I):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,k,0);else if(_.depthTexture.format===Ys)Ee(_)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,k,0,I):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,k,0);else throw new Error("Unknown depthTexture format")}function qe(v){let _=i.get(v),P=v.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==v.depthTexture){let U=v.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),U){let k=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,U.removeEventListener("dispose",k)};U.addEventListener("dispose",k),_.__depthDisposeCallback=k}_.__boundDepthTexture=U}if(v.depthTexture&&!_.__autoAllocateDepthBuffer){if(P)throw new Error("target.depthTexture not supported in Cube render targets");let U=v.texture.mipmaps;U&&U.length>0?Re(_.__webglFramebuffer[0],v):Re(_.__webglFramebuffer,v)}else if(P){_.__webglDepthbuffer=[];for(let U=0;U<6;U++)if(t.bindFramebuffer(r.FRAMEBUFFER,_.__webglFramebuffer[U]),_.__webglDepthbuffer[U]===void 0)_.__webglDepthbuffer[U]=r.createRenderbuffer(),Ue(_.__webglDepthbuffer[U],v,!1);else{let k=v.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,I=_.__webglDepthbuffer[U];r.bindRenderbuffer(r.RENDERBUFFER,I),r.framebufferRenderbuffer(r.FRAMEBUFFER,k,r.RENDERBUFFER,I)}}else{let U=v.texture.mipmaps;if(U&&U.length>0?t.bindFramebuffer(r.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=r.createRenderbuffer(),Ue(_.__webglDepthbuffer,v,!1);else{let k=v.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,I=_.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,I),r.framebufferRenderbuffer(r.FRAMEBUFFER,k,r.RENDERBUFFER,I)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Lt(v,_,P){let U=i.get(v);_!==void 0&&Me(U.__webglFramebuffer,v,v.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),P!==void 0&&qe(v)}function ze(v){let _=v.texture,P=i.get(v),U=i.get(_);v.addEventListener("dispose",R);let k=v.textures,I=v.isWebGLCubeRenderTarget===!0,te=k.length>1;if(te||(U.__webglTexture===void 0&&(U.__webglTexture=r.createTexture()),U.__version=_.version,a.memory.textures++),I){P.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(_.mipmaps&&_.mipmaps.length>0){P.__webglFramebuffer[oe]=[];for(let me=0;me<_.mipmaps.length;me++)P.__webglFramebuffer[oe][me]=r.createFramebuffer()}else P.__webglFramebuffer[oe]=r.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){P.__webglFramebuffer=[];for(let oe=0;oe<_.mipmaps.length;oe++)P.__webglFramebuffer[oe]=r.createFramebuffer()}else P.__webglFramebuffer=r.createFramebuffer();if(te)for(let oe=0,me=k.length;oe<me;oe++){let re=i.get(k[oe]);re.__webglTexture===void 0&&(re.__webglTexture=r.createTexture(),a.memory.textures++)}if(v.samples>0&&Ee(v)===!1){P.__webglMultisampledFramebuffer=r.createFramebuffer(),P.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,P.__webglMultisampledFramebuffer);for(let oe=0;oe<k.length;oe++){let me=k[oe];P.__webglColorRenderbuffer[oe]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,P.__webglColorRenderbuffer[oe]);let re=s.convert(me.format,me.colorSpace),Q=s.convert(me.type),ie=y(me.internalFormat,re,Q,me.colorSpace,v.isXRRenderTarget===!0),ve=at(v);r.renderbufferStorageMultisample(r.RENDERBUFFER,ve,ie,v.width,v.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+oe,r.RENDERBUFFER,P.__webglColorRenderbuffer[oe])}r.bindRenderbuffer(r.RENDERBUFFER,null),v.depthBuffer&&(P.__webglDepthRenderbuffer=r.createRenderbuffer(),Ue(P.__webglDepthRenderbuffer,v,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(I){t.bindTexture(r.TEXTURE_CUBE_MAP,U.__webglTexture),Ne(r.TEXTURE_CUBE_MAP,_);for(let oe=0;oe<6;oe++)if(_.mipmaps&&_.mipmaps.length>0)for(let me=0;me<_.mipmaps.length;me++)Me(P.__webglFramebuffer[oe][me],v,_,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+oe,me);else Me(P.__webglFramebuffer[oe],v,_,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);m(_)&&p(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(te){for(let oe=0,me=k.length;oe<me;oe++){let re=k[oe],Q=i.get(re),ie=r.TEXTURE_2D;(v.isWebGL3DRenderTarget||v.isWebGLArrayRenderTarget)&&(ie=v.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(ie,Q.__webglTexture),Ne(ie,re),Me(P.__webglFramebuffer,v,re,r.COLOR_ATTACHMENT0+oe,ie,0),m(re)&&p(ie)}t.unbindTexture()}else{let oe=r.TEXTURE_2D;if((v.isWebGL3DRenderTarget||v.isWebGLArrayRenderTarget)&&(oe=v.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(oe,U.__webglTexture),Ne(oe,_),_.mipmaps&&_.mipmaps.length>0)for(let me=0;me<_.mipmaps.length;me++)Me(P.__webglFramebuffer[me],v,_,r.COLOR_ATTACHMENT0,oe,me);else Me(P.__webglFramebuffer,v,_,r.COLOR_ATTACHMENT0,oe,0);m(_)&&p(oe),t.unbindTexture()}v.depthBuffer&&qe(v)}function dt(v){let _=v.textures;for(let P=0,U=_.length;P<U;P++){let k=_[P];if(m(k)){let I=S(v),te=i.get(k).__webglTexture;t.bindTexture(I,te),p(I),t.unbindTexture()}}}let F=[],Ye=[];function je(v){if(v.samples>0){if(Ee(v)===!1){let _=v.textures,P=v.width,U=v.height,k=r.COLOR_BUFFER_BIT,I=v.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,te=i.get(v),oe=_.length>1;if(oe)for(let re=0;re<_.length;re++)t.bindFramebuffer(r.FRAMEBUFFER,te.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+re,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,te.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+re,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,te.__webglMultisampledFramebuffer);let me=v.texture.mipmaps;me&&me.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,te.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,te.__webglFramebuffer);for(let re=0;re<_.length;re++){if(v.resolveDepthBuffer&&(v.depthBuffer&&(k|=r.DEPTH_BUFFER_BIT),v.stencilBuffer&&v.resolveStencilBuffer&&(k|=r.STENCIL_BUFFER_BIT)),oe){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,te.__webglColorRenderbuffer[re]);let Q=i.get(_[re]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Q,0)}r.blitFramebuffer(0,0,P,U,0,0,P,U,k,r.NEAREST),c===!0&&(F.length=0,Ye.length=0,F.push(r.COLOR_ATTACHMENT0+re),v.depthBuffer&&v.resolveDepthBuffer===!1&&(F.push(I),Ye.push(I),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Ye)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,F))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),oe)for(let re=0;re<_.length;re++){t.bindFramebuffer(r.FRAMEBUFFER,te.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+re,r.RENDERBUFFER,te.__webglColorRenderbuffer[re]);let Q=i.get(_[re]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,te.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+re,r.TEXTURE_2D,Q,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,te.__webglMultisampledFramebuffer)}else if(v.depthBuffer&&v.resolveDepthBuffer===!1&&c){let _=v.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[_])}}}function at(v){return Math.min(n.maxSamples,v.samples)}function Ee(v){let _=i.get(v);return v.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function B(v){let _=a.render.frame;h.get(v)!==_&&(h.set(v,_),v.update())}function L(v,_){let P=v.colorSpace,U=v.format,k=v.type;return v.isCompressedTexture===!0||v.isVideoTexture===!0||P!==Nr&&P!==Rn&&(it.getTransfer(P)===st?(U!==Ni||k!==sn)&&Fe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ze("WebGLTextures: Unsupported texture color space:",P)),_}function E(v){return typeof HTMLImageElement!="undefined"&&v instanceof HTMLImageElement?(l.width=v.naturalWidth||v.width,l.height=v.naturalHeight||v.height):typeof VideoFrame!="undefined"&&v instanceof VideoFrame?(l.width=v.displayWidth,l.height=v.displayHeight):(l.width=v.width,l.height=v.height),l}this.allocateTextureUnit=G,this.resetTextureUnits=z,this.setTexture2D=J,this.setTexture2DArray=j,this.setTexture3D=ce,this.setTextureCube=X,this.rebindTextures=Lt,this.setupRenderTarget=ze,this.updateRenderTargetMipmap=dt,this.updateMultisampleRenderTarget=je,this.setupDepthRenderbuffer=qe,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=Ee}function N1(r,e){function t(i,n=Rn){let s,a=it.getTransfer(n);if(i===sn)return r.UNSIGNED_BYTE;if(i===ll)return r.UNSIGNED_SHORT_4_4_4_4;if(i===hl)return r.UNSIGNED_SHORT_5_5_5_1;if(i===ld)return r.UNSIGNED_INT_5_9_9_9_REV;if(i===hd)return r.UNSIGNED_INT_10F_11F_11F_REV;if(i===od)return r.BYTE;if(i===cd)return r.SHORT;if(i===Xs)return r.UNSIGNED_SHORT;if(i===cl)return r.INT;if(i===nr)return r.UNSIGNED_INT;if(i===an)return r.FLOAT;if(i===Vr)return r.HALF_FLOAT;if(i===ud)return r.ALPHA;if(i===dd)return r.RGB;if(i===Ni)return r.RGBA;if(i===Os)return r.DEPTH_COMPONENT;if(i===Ys)return r.DEPTH_STENCIL;if(i===fd)return r.RED;if(i===ul)return r.RED_INTEGER;if(i===dl)return r.RG;if(i===fl)return r.RG_INTEGER;if(i===pl)return r.RGBA_INTEGER;if(i===oo||i===co||i===lo||i===ho)if(a===st)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===oo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===co)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===lo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ho)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===oo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===co)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===lo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ho)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ml||i===gl||i===vl||i===xl)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===ml)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===gl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===vl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===xl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===_l||i===yl||i===bl)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===_l||i===yl)return a===st?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===bl)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Sl||i===Ml||i===wl||i===El||i===Tl||i===Al||i===Cl||i===Pl||i===Rl||i===Ll||i===Il||i===Dl||i===Ol||i===Fl)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Sl)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ml)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===wl)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===El)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Tl)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Al)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Cl)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Pl)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Rl)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ll)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Il)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Dl)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ol)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Fl)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Nl||i===Ul||i===Bl)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Nl)return a===st?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ul)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Bl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===kl||i===zl||i===Hl||i===Vl)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===kl)return s.COMPRESSED_RED_RGTC1_EXT;if(i===zl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Hl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Vl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===qs?r.UNSIGNED_INT_24_8:r[i]!==void 0?r[i]:null}return{convert:t}}function z1(r,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,_d(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function n(m,p,S,y,w){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),u(m,p)):p.isMeshPhongMaterial?(s(m,p),h(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,w)):p.isMeshMatcapMaterial?(s(m,p),x(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),g(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,S,y):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===ti&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===ti&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let S=e.get(p),y=S.envMap,w=S.envMapRotation;y&&(m.envMap.value=y,Xr.copy(w),Xr.x*=-1,Xr.y*=-1,Xr.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Xr.y*=-1,Xr.z*=-1),m.envMapRotation.value.setFromMatrix4(k1.makeRotationFromEuler(Xr)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,S,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=y*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===ti&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){let S=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function H1(r,e,t,i){let n={},s={},a=[],o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function c(S,y){let w=y.program;i.uniformBlockBinding(S,w)}function l(S,y){let w=n[S.id];w===void 0&&(x(S),w=h(S),n[S.id]=w,S.addEventListener("dispose",m));let A=y.program;i.updateUBOMapping(S,A);let T=e.render.frame;s[S.id]!==T&&(d(S),s[S.id]=T)}function h(S){let y=u();S.__bindingPointIndex=y;let w=r.createBuffer(),A=S.__size,T=S.usage;return r.bindBuffer(r.UNIFORM_BUFFER,w),r.bufferData(r.UNIFORM_BUFFER,A,T),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,y,w),w}function u(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return Ze("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){let y=n[S.id],w=S.uniforms,A=S.__cache;r.bindBuffer(r.UNIFORM_BUFFER,y);for(let T=0,R=w.length;T<R;T++){let N=Array.isArray(w[T])?w[T]:[w[T]];for(let b=0,M=N.length;b<M;b++){let O=N[b];if(f(O,T,b,A)===!0){let z=O.__offset,G=Array.isArray(O.value)?O.value:[O.value],K=0;for(let J=0;J<G.length;J++){let j=G[J],ce=g(j);typeof j=="number"||typeof j=="boolean"?(O.__data[0]=j,r.bufferSubData(r.UNIFORM_BUFFER,z+K,O.__data)):j.isMatrix3?(O.__data[0]=j.elements[0],O.__data[1]=j.elements[1],O.__data[2]=j.elements[2],O.__data[3]=0,O.__data[4]=j.elements[3],O.__data[5]=j.elements[4],O.__data[6]=j.elements[5],O.__data[7]=0,O.__data[8]=j.elements[6],O.__data[9]=j.elements[7],O.__data[10]=j.elements[8],O.__data[11]=0):(j.toArray(O.__data,K),K+=ce.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,z,O.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(S,y,w,A){let T=S.value,R=y+"_"+w;if(A[R]===void 0)return typeof T=="number"||typeof T=="boolean"?A[R]=T:A[R]=T.clone(),!0;{let N=A[R];if(typeof T=="number"||typeof T=="boolean"){if(N!==T)return A[R]=T,!0}else if(N.equals(T)===!1)return N.copy(T),!0}return!1}function x(S){let y=S.uniforms,w=0,A=16;for(let R=0,N=y.length;R<N;R++){let b=Array.isArray(y[R])?y[R]:[y[R]];for(let M=0,O=b.length;M<O;M++){let z=b[M],G=Array.isArray(z.value)?z.value:[z.value];for(let K=0,J=G.length;K<J;K++){let j=G[K],ce=g(j),X=w%A,fe=X%ce.boundary,pe=X+fe;w+=fe,pe!==0&&A-pe<ce.storage&&(w+=A-pe),z.__data=new Float32Array(ce.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=w,w+=ce.storage}}}let T=w%A;return T>0&&(w+=A-T),S.__size=w,S.__cache={},this}function g(S){let y={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(y.boundary=4,y.storage=4):S.isVector2?(y.boundary=8,y.storage=8):S.isVector3||S.isColor?(y.boundary=16,y.storage=12):S.isVector4?(y.boundary=16,y.storage=16):S.isMatrix3?(y.boundary=48,y.storage=48):S.isMatrix4?(y.boundary=64,y.storage=64):S.isTexture?Fe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Fe("WebGLRenderer: Unsupported uniform value type.",S),y}function m(S){let y=S.target;y.removeEventListener("dispose",m);let w=a.indexOf(y.__bindingPointIndex);a.splice(w,1),r.deleteBuffer(n[y.id]),delete n[y.id],delete s[y.id]}function p(){for(let S in n)r.deleteBuffer(n[S]);a=[],n={},s={}}return{bind:c,update:l,dispose:p}}function G1(){return Ln===null&&(Ln=new Uc(V1,32,32,dl,Vr),Ln.minFilter=Dt,Ln.magFilter=Dt,Ln.wrapS=$i,Ln.wrapT=$i,Ln.generateMipmaps=!1,Ln.needsUpdate=!0),Ln}var fb,pb,mb,gb,vb,xb,_b,yb,bb,Sb,Mb,wb,Eb,Tb,Ab,Cb,Pb,Rb,Lb,Ib,Db,Ob,Fb,Nb,Ub,Bb,kb,zb,Hb,Vb,Gb,Wb,Xb,qb,Yb,jb,Zb,$b,Kb,Jb,Qb,eS,tS,iS,nS,rS,sS,aS,oS,cS,lS,hS,uS,dS,fS,pS,mS,gS,vS,xS,_S,yS,bS,SS,MS,wS,ES,TS,AS,CS,PS,RS,LS,IS,DS,OS,FS,NS,US,BS,kS,zS,HS,VS,GS,WS,XS,qS,YS,jS,ZS,$S,KS,JS,QS,eM,tM,iM,nM,rM,sM,aM,oM,cM,lM,hM,uM,dM,fM,pM,mM,gM,vM,xM,_M,yM,bM,SM,MM,wM,EM,TM,AM,CM,PM,RM,LM,IM,DM,OM,FM,NM,UM,BM,kM,zM,HM,VM,GM,WM,XM,Ve,ye,on,Wl,Wr,qM,rr,W0,qr,QM,uo,X0,wd,Ed,Td,Ad,ew,ql,fg,Z0,pg,mg,gg,$0,K0,J0,Q0,eg,Pd,Rd,Ld,Cd,$s,Jw,Qw,ng,Xl,c1,l1,u1,_1,Dd,Od,T1,R1,L1,D1,U1,B1,Fd,Nd,Xr,k1,V1,Ln,Yl,Ud=Zt(()=>{Md();Md();fb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,pb=`#ifdef USE_ALPHAHASH
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
#endif`,mb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,gb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,xb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,_b=`#ifdef USE_AOMAP
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
#endif`,yb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,bb=`#ifdef USE_BATCHING
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
#endif`,Sb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Mb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,wb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Eb=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Tb=`#ifdef USE_IRIDESCENCE
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
#endif`,Ab=`#ifdef USE_BUMPMAP
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
#endif`,Cb=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Pb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Rb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Lb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ib=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Db=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ob=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Fb=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Nb=`#define PI 3.141592653589793
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
} // validated`,Ub=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Bb=`vec3 transformedNormal = objectNormal;
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
#endif`,kb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,zb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Hb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Vb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Gb="gl_FragColor = linearToOutputTexel( gl_FragColor );",Wb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Xb=`#ifdef USE_ENVMAP
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
#endif`,qb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Yb=`#ifdef USE_ENVMAP
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
#endif`,jb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Zb=`#ifdef USE_ENVMAP
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
#endif`,$b=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Kb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Jb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Qb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,eS=`#ifdef USE_GRADIENTMAP
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
}`,tS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,iS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,nS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,rS=`uniform bool receiveShadow;
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
#endif`,sS=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
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
#endif`,aS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,oS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,cS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,hS=`PhysicalMaterial material;
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
#endif`,uS=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	vec2 uv = vec2( roughness, dotNV );
	return texture2D( dfgLUT, uv ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNV * dotNV), 0.0, dotNV), material.roughness );
	vec2 dfgL = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNL * dotNL), 0.0, dotNL), material.roughness );
	vec3 FssEss_V = material.specularColor * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColor * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColor + ( 1.0 - material.specularColor ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
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
}`,dS=`
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
#endif`,fS=`#if defined( RE_IndirectDiffuse )
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
#endif`,pS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,mS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,gS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,_S=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,yS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,bS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,SS=`#if defined( USE_POINTS_UV )
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
#endif`,MS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,wS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ES=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,TS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,AS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,CS=`#ifdef USE_MORPHTARGETS
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
#endif`,PS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,RS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,LS=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,IS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,DS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,OS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,FS=`#ifdef USE_NORMALMAP
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
#endif`,NS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,US=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,BS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,kS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,zS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,HS=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,VS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,GS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,WS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,XS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,qS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,YS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,jS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ZS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$S=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,KS=`float getShadowMask() {
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
}`,JS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,QS=`#ifdef USE_SKINNING
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
#endif`,eM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,tM=`#ifdef USE_SKINNING
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
#endif`,iM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,nM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,rM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,sM=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,aM=`#ifdef USE_TRANSMISSION
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
#endif`,oM=`#ifdef USE_TRANSMISSION
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
#endif`,cM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,dM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,fM=`uniform sampler2D t2D;
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
}`,pM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mM=`#ifdef ENVMAP_TYPE_CUBE
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
}`,gM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xM=`#include <common>
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
}`,_M=`#if DEPTH_PACKING == 3200
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
}`,yM=`#define DISTANCE
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
}`,bM=`#define DISTANCE
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
}`,SM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,MM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wM=`uniform float scale;
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
}`,EM=`uniform vec3 diffuse;
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
}`,TM=`#include <common>
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
}`,AM=`uniform vec3 diffuse;
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
}`,CM=`#define LAMBERT
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
}`,PM=`#define LAMBERT
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
}`,RM=`#define MATCAP
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
}`,LM=`#define MATCAP
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
}`,IM=`#define NORMAL
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
}`,DM=`#define NORMAL
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
}`,OM=`#define PHONG
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
}`,FM=`#define PHONG
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
}`,NM=`#define STANDARD
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
}`,UM=`#define STANDARD
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
}`,BM=`#define TOON
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
}`,kM=`#define TOON
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
}`,zM=`uniform float size;
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
}`,HM=`uniform vec3 diffuse;
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
}`,VM=`#include <common>
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
}`,GM=`uniform vec3 color;
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
}`,WM=`uniform float rotation;
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
}`,XM=`uniform vec3 diffuse;
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
}`,Ve={alphahash_fragment:fb,alphahash_pars_fragment:pb,alphamap_fragment:mb,alphamap_pars_fragment:gb,alphatest_fragment:vb,alphatest_pars_fragment:xb,aomap_fragment:_b,aomap_pars_fragment:yb,batching_pars_vertex:bb,batching_vertex:Sb,begin_vertex:Mb,beginnormal_vertex:wb,bsdfs:Eb,iridescence_fragment:Tb,bumpmap_pars_fragment:Ab,clipping_planes_fragment:Cb,clipping_planes_pars_fragment:Pb,clipping_planes_pars_vertex:Rb,clipping_planes_vertex:Lb,color_fragment:Ib,color_pars_fragment:Db,color_pars_vertex:Ob,color_vertex:Fb,common:Nb,cube_uv_reflection_fragment:Ub,defaultnormal_vertex:Bb,displacementmap_pars_vertex:kb,displacementmap_vertex:zb,emissivemap_fragment:Hb,emissivemap_pars_fragment:Vb,colorspace_fragment:Gb,colorspace_pars_fragment:Wb,envmap_fragment:Xb,envmap_common_pars_fragment:qb,envmap_pars_fragment:Yb,envmap_pars_vertex:jb,envmap_physical_pars_fragment:sS,envmap_vertex:Zb,fog_vertex:$b,fog_pars_vertex:Kb,fog_fragment:Jb,fog_pars_fragment:Qb,gradientmap_pars_fragment:eS,lightmap_pars_fragment:tS,lights_lambert_fragment:iS,lights_lambert_pars_fragment:nS,lights_pars_begin:rS,lights_toon_fragment:aS,lights_toon_pars_fragment:oS,lights_phong_fragment:cS,lights_phong_pars_fragment:lS,lights_physical_fragment:hS,lights_physical_pars_fragment:uS,lights_fragment_begin:dS,lights_fragment_maps:fS,lights_fragment_end:pS,logdepthbuf_fragment:mS,logdepthbuf_pars_fragment:gS,logdepthbuf_pars_vertex:vS,logdepthbuf_vertex:xS,map_fragment:_S,map_pars_fragment:yS,map_particle_fragment:bS,map_particle_pars_fragment:SS,metalnessmap_fragment:MS,metalnessmap_pars_fragment:wS,morphinstance_vertex:ES,morphcolor_vertex:TS,morphnormal_vertex:AS,morphtarget_pars_vertex:CS,morphtarget_vertex:PS,normal_fragment_begin:RS,normal_fragment_maps:LS,normal_pars_fragment:IS,normal_pars_vertex:DS,normal_vertex:OS,normalmap_pars_fragment:FS,clearcoat_normal_fragment_begin:NS,clearcoat_normal_fragment_maps:US,clearcoat_pars_fragment:BS,iridescence_pars_fragment:kS,opaque_fragment:zS,packing:HS,premultiplied_alpha_fragment:VS,project_vertex:GS,dithering_fragment:WS,dithering_pars_fragment:XS,roughnessmap_fragment:qS,roughnessmap_pars_fragment:YS,shadowmap_pars_fragment:jS,shadowmap_pars_vertex:ZS,shadowmap_vertex:$S,shadowmask_pars_fragment:KS,skinbase_vertex:JS,skinning_pars_vertex:QS,skinning_vertex:eM,skinnormal_vertex:tM,specularmap_fragment:iM,specularmap_pars_fragment:nM,tonemapping_fragment:rM,tonemapping_pars_fragment:sM,transmission_fragment:aM,transmission_pars_fragment:oM,uv_pars_fragment:cM,uv_pars_vertex:lM,uv_vertex:hM,worldpos_vertex:uM,background_vert:dM,background_frag:fM,backgroundCube_vert:pM,backgroundCube_frag:mM,cube_vert:gM,cube_frag:vM,depth_vert:xM,depth_frag:_M,distanceRGBA_vert:yM,distanceRGBA_frag:bM,equirect_vert:SM,equirect_frag:MM,linedashed_vert:wM,linedashed_frag:EM,meshbasic_vert:TM,meshbasic_frag:AM,meshlambert_vert:CM,meshlambert_frag:PM,meshmatcap_vert:RM,meshmatcap_frag:LM,meshnormal_vert:IM,meshnormal_frag:DM,meshphong_vert:OM,meshphong_frag:FM,meshphysical_vert:NM,meshphysical_frag:UM,meshtoon_vert:BM,meshtoon_frag:kM,points_vert:zM,points_frag:HM,shadow_vert:VM,shadow_frag:GM,sprite_vert:WM,sprite_frag:XM},ye={common:{diffuse:{value:new et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ke}},envmap:{envMap:{value:null},envMapRotation:{value:new ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ke},normalScale:{value:new He(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0},uvTransform:{value:new ke}},sprite:{diffuse:{value:new et(16777215)},opacity:{value:1},center:{value:new He(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}}},on={basic:{uniforms:Yt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:Yt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new et(0)}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:Yt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new et(0)},specular:{value:new et(1118481)},shininess:{value:30}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:Yt([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:Yt([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new et(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:Yt([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:Yt([ye.points,ye.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:Yt([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:Yt([ye.common,ye.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:Yt([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:Yt([ye.sprite,ye.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ke}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distanceRGBA:{uniforms:Yt([ye.common,ye.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distanceRGBA_vert,fragmentShader:Ve.distanceRGBA_frag},shadow:{uniforms:Yt([ye.lights,ye.fog,{color:{value:new et(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};on.physical={uniforms:Yt([on.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ke},clearcoatNormalScale:{value:new He(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ke},sheen:{value:0},sheenColor:{value:new et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ke},transmissionSamplerSize:{value:new He},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ke},attenuationDistance:{value:0},attenuationColor:{value:new et(0)},specularColor:{value:new et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ke},anisotropyVector:{value:new He},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ke}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};Wl={r:0,b:0,g:0},Wr=new en,qM=new Rt;rr=4,W0=[.125,.215,.35,.446,.526,.582],qr=20,QM=512,uo=new $c,X0=new et,wd=null,Ed=0,Td=0,Ad=!1,ew=new W,ql=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,n=100,s={}){let{size:a=256,position:o=ew}=s;wd=this._renderer.getRenderTarget(),Ed=this._renderer.getActiveCubeFace(),Td=this._renderer.getActiveMipmapLevel(),Ad=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,n,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=j0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Y0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(wd,Ed,Td),this._renderer.xr.enabled=Ad,e.scissorTest=!1,Zs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===zr||e.mapping===Hr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),wd=this._renderer.getRenderTarget(),Ed=this._renderer.getActiveCubeFace(),Td=this._renderer.getActiveMipmapLevel(),Ad=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Dt,minFilter:Dt,generateMipmaps:!1,type:Vr,format:Ni,colorSpace:Nr,depthBuffer:!1},n=q0(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=q0(e,t,i);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=tw(s)),this._blurMaterial=nw(s,e,t)}return n}_compileMaterial(e){let t=new Mi(new Cn,e);this._renderer.compile(t,uo)}_sceneToCubeUV(e,t,i,n,s){let c=new Xt(90,1,t,i),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(X0),u.toneMapping=Pn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(n),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Mi(new Vs,new Qn({name:"PMREM.Background",side:ti,depthWrite:!1,depthTest:!1})));let g=this._backgroundBox,m=g.material,p=!1,S=e.background;S?S.isColor&&(m.color.copy(S),e.background=null,p=!0):(m.color.copy(X0),p=!0);for(let y=0;y<6;y++){let w=y%3;w===0?(c.up.set(0,l[y],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+h[y],s.y,s.z)):w===1?(c.up.set(0,0,l[y]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+h[y],s.z)):(c.up.set(0,l[y],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+h[y]));let A=this._cubeSize;Zs(n,w*A,y>2?A:0,A,A),u.setRenderTarget(n),p&&u.render(g,c),u.render(e,c)}u.toneMapping=f,u.autoClear=d,e.background=S}_textureToCubeUV(e,t){let i=this._renderer,n=e.mapping===zr||e.mapping===Hr;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=j0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Y0());let s=n?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;let o=s.uniforms;o.envMap.value=e;let c=this._cubeSize;Zs(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(a,uo)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let n=this._lodMeshes.length;for(let s=1;s<n;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){let n=this._renderer,s=this._pingPongRenderTarget;if(this._ggxMaterial===null){let S=3*Math.max(this._cubeSize,16),y=4*this._cubeSize;this._ggxMaterial=iw(this._lodMax,S,y)}let a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;let c=a.uniforms,l=i/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),u=Math.sqrt(l*l-h*h),d=.05+l*.95,f=u*d,{_lodMax:x}=this,g=this._sizeLods[i],m=3*g*(i>x-rr?i-x+rr:0),p=4*(this._cubeSize-g);c.envMap.value=e.texture,c.roughness.value=f,c.mipInt.value=x-t,Zs(s,m,p,3*g,2*g),n.setRenderTarget(s),n.render(o,uo),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=x-i,Zs(e,m,p,3*g,2*g),n.setRenderTarget(e),n.render(o,uo)}_blur(e,t,i,n,s){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,n,"latitudinal",s),this._halfBlur(a,e,i,i,n,"longitudinal",s)}_halfBlur(e,t,i,n,s,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Ze("blur direction must be either latitudinal or longitudinal!");let h=3,u=this._lodMeshes[n];u.material=l;let d=l.uniforms,f=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*qr-1),g=s/x,m=isFinite(s)?1+Math.floor(h*g):qr;m>qr&&Fe(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${qr}`);let p=[],S=0;for(let R=0;R<qr;++R){let N=R/g,b=Math.exp(-N*N/2);p.push(b),R===0?S+=b:R<m&&(S+=2*b)}for(let R=0;R<p.length;R++)p[R]=p[R]/S;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:y}=this;d.dTheta.value=x,d.mipInt.value=y-i;let w=this._sizeLods[n],A=3*w*(n>y-rr?n-y+rr:0),T=4*(this._cubeSize-w);Zs(t,A,T,3*w,2*w),c.setRenderTarget(t),c.render(u,uo)}};fg=new qt,Z0=new Ka(1,1),pg=new Va,mg=new Oc,gg=new Ya,$0=[],K0=[],J0=new Float32Array(16),Q0=new Float32Array(9),eg=new Float32Array(4);Pd=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Rw(t.type)}},Rd=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=$w(t.type)}},Ld=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let n=this.seq;for(let s=0,a=n.length;s!==a;++s){let o=n[s];o.setValue(e,t[o.id],i)}}},Cd=/(\w+)(\])?(\[|\.)?/g;$s=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){let s=e.getActiveUniform(t,n),a=e.getUniformLocation(t,s.name);Kw(s,a,this)}}setValue(e,t,i,n){let s=this.map[t];s!==void 0&&s.setValue(e,i,n)}setOptional(e,t,i){let n=t[i];n!==void 0&&this.setValue(e,i,n)}static upload(e,t,i,n){for(let s=0,a=t.length;s!==a;++s){let o=t[s],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,n)}}static seqWithValue(e,t){let i=[];for(let n=0,s=e.length;n!==s;++n){let a=e[n];a.id in t&&i.push(a)}return i}};Jw=37297,Qw=0;ng=new ke;Xl=new W;c1=/^[ \t]*#include +<([\w\d./]+)>/gm;l1=new Map;u1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;_1=0,Dd=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,n=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(n)===!1&&(a.add(n),n.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Od(e),t.set(e,i)),i}},Od=class{constructor(e){this.id=_1++,this.code=e,this.usedTimes=0}};T1=0;R1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,L1=`uniform sampler2D shadow_pass;
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
}`;D1={[Jc]:Qc,[el]:nl,[tl]:rl,[Fr]:il,[Qc]:Jc,[nl]:el,[rl]:tl,[il]:Fr};U1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,B1=`
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

}`,Fd=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new Ja(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new Fi({vertexShader:U1,fragmentShader:B1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Mi(new Br(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Nd=class extends Ji{constructor(e,t){super();let i=this,n=null,s=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,x=null,g=typeof XRWebGLBinding!="undefined",m=new Fd,p={},S=t.getContextAttributes(),y=null,w=null,A=[],T=[],R=new He,N=null,b=new Xt;b.viewport=new wt;let M=new Xt;M.viewport=new wt;let O=[b,M],z=new Kc,G=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let ae=A[ne];return ae===void 0&&(ae=new Gs,A[ne]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(ne){let ae=A[ne];return ae===void 0&&(ae=new Gs,A[ne]=ae),ae.getGripSpace()},this.getHand=function(ne){let ae=A[ne];return ae===void 0&&(ae=new Gs,A[ne]=ae),ae.getHandSpace()};function J(ne){let ae=T.indexOf(ne.inputSource);if(ae===-1)return;let Me=A[ae];Me!==void 0&&(Me.update(ne.inputSource,ne.frame,l||a),Me.dispatchEvent({type:ne.type,data:ne.inputSource}))}function j(){n.removeEventListener("select",J),n.removeEventListener("selectstart",J),n.removeEventListener("selectend",J),n.removeEventListener("squeeze",J),n.removeEventListener("squeezestart",J),n.removeEventListener("squeezeend",J),n.removeEventListener("end",j),n.removeEventListener("inputsourceschange",ce);for(let ne=0;ne<A.length;ne++){let ae=T[ne];ae!==null&&(T[ne]=null,A[ne].disconnect(ae))}G=null,K=null,m.reset();for(let ne in p)delete p[ne];e.setRenderTarget(y),f=null,d=null,u=null,n=null,w=null,$e.stop(),i.isPresenting=!1,e.setPixelRatio(N),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){s=ne,i.isPresenting===!0&&Fe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){o=ne,i.isPresenting===!0&&Fe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(ne){l=ne},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&g&&(u=new XRWebGLBinding(n,t)),u},this.getFrame=function(){return x},this.getSession=function(){return n},this.setSession=async function(ne){if(n=ne,n!==null){if(y=e.getRenderTarget(),n.addEventListener("select",J),n.addEventListener("selectstart",J),n.addEventListener("selectend",J),n.addEventListener("squeeze",J),n.addEventListener("squeezestart",J),n.addEventListener("squeezeend",J),n.addEventListener("end",j),n.addEventListener("inputsourceschange",ce),S.xrCompatible!==!0&&await t.makeXRCompatible(),N=e.getPixelRatio(),e.getSize(R),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let Me=null,Ue=null,Re=null;S.depth&&(Re=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Me=S.stencil?Ys:Os,Ue=S.stencil?qs:nr);let qe={colorFormat:t.RGBA8,depthFormat:Re,scaleFactor:s};u=this.getBinding(),d=u.createProjectionLayer(qe),n.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),w=new Qi(d.textureWidth,d.textureHeight,{format:Ni,type:sn,depthTexture:new Ka(d.textureWidth,d.textureHeight,Ue,void 0,void 0,void 0,void 0,void 0,void 0,Me),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let Me={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(n,t,Me),n.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),w=new Qi(f.framebufferWidth,f.framebufferHeight,{format:Ni,type:sn,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await n.requestReferenceSpace(o),$e.setContext(n),$e.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ce(ne){for(let ae=0;ae<ne.removed.length;ae++){let Me=ne.removed[ae],Ue=T.indexOf(Me);Ue>=0&&(T[Ue]=null,A[Ue].disconnect(Me))}for(let ae=0;ae<ne.added.length;ae++){let Me=ne.added[ae],Ue=T.indexOf(Me);if(Ue===-1){for(let qe=0;qe<A.length;qe++)if(qe>=T.length){T.push(Me),Ue=qe;break}else if(T[qe]===null){T[qe]=Me,Ue=qe;break}if(Ue===-1)break}let Re=A[Ue];Re&&Re.connect(Me)}}let X=new W,fe=new W;function pe(ne,ae,Me){X.setFromMatrixPosition(ae.matrixWorld),fe.setFromMatrixPosition(Me.matrixWorld);let Ue=X.distanceTo(fe),Re=ae.projectionMatrix.elements,qe=Me.projectionMatrix.elements,Lt=Re[14]/(Re[10]-1),ze=Re[14]/(Re[10]+1),dt=(Re[9]+1)/Re[5],F=(Re[9]-1)/Re[5],Ye=(Re[8]-1)/Re[0],je=(qe[8]+1)/qe[0],at=Lt*Ye,Ee=Lt*je,B=Ue/(-Ye+je),L=B*-Ye;if(ae.matrixWorld.decompose(ne.position,ne.quaternion,ne.scale),ne.translateX(L),ne.translateZ(B),ne.matrixWorld.compose(ne.position,ne.quaternion,ne.scale),ne.matrixWorldInverse.copy(ne.matrixWorld).invert(),Re[10]===-1)ne.projectionMatrix.copy(ae.projectionMatrix),ne.projectionMatrixInverse.copy(ae.projectionMatrixInverse);else{let E=Lt+B,v=ze+B,_=at-L,P=Ee+(Ue-L),U=dt*ze/v*E,k=F*ze/v*E;ne.projectionMatrix.makePerspective(_,P,U,k,E,v),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert()}}function Ce(ne,ae){ae===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(ae.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(n===null)return;let ae=ne.near,Me=ne.far;m.texture!==null&&(m.depthNear>0&&(ae=m.depthNear),m.depthFar>0&&(Me=m.depthFar)),z.near=M.near=b.near=ae,z.far=M.far=b.far=Me,(G!==z.near||K!==z.far)&&(n.updateRenderState({depthNear:z.near,depthFar:z.far}),G=z.near,K=z.far),z.layers.mask=ne.layers.mask|6,b.layers.mask=z.layers.mask&3,M.layers.mask=z.layers.mask&5;let Ue=ne.parent,Re=z.cameras;Ce(z,Ue);for(let qe=0;qe<Re.length;qe++)Ce(Re[qe],Ue);Re.length===2?pe(z,b,M):z.projectionMatrix.copy(b.projectionMatrix),Ne(ne,z,Ue)};function Ne(ne,ae,Me){Me===null?ne.matrix.copy(ae.matrixWorld):(ne.matrix.copy(Me.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(ae.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(ae.projectionMatrix),ne.projectionMatrixInverse.copy(ae.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=Bs*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(ne){c=ne,d!==null&&(d.fixedFoveation=ne),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=ne)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(z)},this.getCameraTexture=function(ne){return p[ne]};let tt=null;function Xe(ne,ae){if(h=ae.getViewerPose(l||a),x=ae,h!==null){let Me=h.views;f!==null&&(e.setRenderTargetFramebuffer(w,f.framebuffer),e.setRenderTarget(w));let Ue=!1;Me.length!==z.cameras.length&&(z.cameras.length=0,Ue=!0);for(let ze=0;ze<Me.length;ze++){let dt=Me[ze],F=null;if(f!==null)F=f.getViewport(dt);else{let je=u.getViewSubImage(d,dt);F=je.viewport,ze===0&&(e.setRenderTargetTextures(w,je.colorTexture,je.depthStencilTexture),e.setRenderTarget(w))}let Ye=O[ze];Ye===void 0&&(Ye=new Xt,Ye.layers.enable(ze),Ye.viewport=new wt,O[ze]=Ye),Ye.matrix.fromArray(dt.transform.matrix),Ye.matrix.decompose(Ye.position,Ye.quaternion,Ye.scale),Ye.projectionMatrix.fromArray(dt.projectionMatrix),Ye.projectionMatrixInverse.copy(Ye.projectionMatrix).invert(),Ye.viewport.set(F.x,F.y,F.width,F.height),ze===0&&(z.matrix.copy(Ye.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),Ue===!0&&z.cameras.push(Ye)}let Re=n.enabledFeatures;if(Re&&Re.includes("depth-sensing")&&n.depthUsage=="gpu-optimized"&&g){u=i.getBinding();let ze=u.getDepthInformation(Me[0]);ze&&ze.isValid&&ze.texture&&m.init(ze,n.renderState)}if(Re&&Re.includes("camera-access")&&g){e.state.unbindTexture(),u=i.getBinding();for(let ze=0;ze<Me.length;ze++){let dt=Me[ze].camera;if(dt){let F=p[dt];F||(F=new Ja,p[dt]=F);let Ye=u.getCameraImage(dt);F.sourceTexture=Ye}}}}for(let Me=0;Me<A.length;Me++){let Ue=T[Me],Re=A[Me];Ue!==null&&Re!==void 0&&Re.update(Ue,ae,l||a)}tt&&tt(ne,ae),ae.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ae}),x=null}let $e=new dg;$e.setAnimationLoop(Xe),this.setAnimationLoop=function(ne){tt=ne},this.dispose=function(){}}},Xr=new en,k1=new Rt;V1=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]),Ln=null;Yl=class{constructor(e={}){let{canvas:t=k0(),context:i=null,depth:n=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext!="undefined"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=a;let x=new Set([pl,fl,ul]),g=new Set([sn,nr,Xs,qs,ll,hl]),m=new Uint32Array(4),p=new Int32Array(4),S=null,y=null,w=[],A=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Pn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let T=this,R=!1;this._outputColorSpace=zt;let N=0,b=0,M=null,O=-1,z=null,G=new wt,K=new wt,J=null,j=new et(0),ce=0,X=t.width,fe=t.height,pe=1,Ce=null,Ne=null,tt=new wt(0,0,X,fe),Xe=new wt(0,0,X,fe),$e=!1,ne=new Za,ae=!1,Me=!1,Ue=new Rt,Re=new W,qe=new wt,Lt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ze=!1;function dt(){return M===null?pe:1}let F=i;function Ye(C,H){return t.getContext(C,H)}try{let C={alpha:!0,depth:n,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"181"}`),t.addEventListener("webglcontextlost",se,!1),t.addEventListener("webglcontextrestored",ee,!1),t.addEventListener("webglcontextcreationerror",be,!1),F===null){let H="webgl2";if(F=Ye(H,C),F===null)throw Ye(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw C("WebGLRenderer: "+C.message),C}let je,at,Ee,B,L,E,v,_,P,U,k,I,te,oe,me,re,Q,ie,ve,_e,le,Pe,D,ue;function de(){je=new sw(F),je.init(),Pe=new N1(F,je),at=new $M(F,je,e,Pe),Ee=new O1(F,je),at.reversedDepthBuffer&&d&&Ee.buffers.depth.setReversed(!0),B=new cw(F),L=new b1,E=new F1(F,je,Ee,L,at,Pe,B),v=new JM(T),_=new rw(T),P=new db(F),D=new jM(F,P),U=new aw(F,P,B,D),k=new hw(F,U,P,B),ve=new lw(F,at,E),re=new KM(L),I=new y1(T,v,_,je,at,D,re),te=new z1(T,L),oe=new M1,me=new P1(je),ie=new YM(T,v,_,Ee,k,f,c),Q=new I1(T,k,at),ue=new H1(F,B,at,Ee),_e=new ZM(F,je,B),le=new ow(F,je,B),B.programs=I.programs,T.capabilities=at,T.extensions=je,T.properties=L,T.renderLists=oe,T.shadowMap=Q,T.state=Ee,T.info=B}de();let he=new Nd(T,F);this.xr=he,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let C=je.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){let C=je.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return pe},this.setPixelRatio=function(C){C!==void 0&&(pe=C,this.setSize(X,fe,!1))},this.getSize=function(C){return C.set(X,fe)},this.setSize=function(C,H,q=!0){if(he.isPresenting){Fe("WebGLRenderer: Can't change size while VR device is presenting.");return}X=C,fe=H,t.width=Math.floor(C*pe),t.height=Math.floor(H*pe),q===!0&&(t.style.width=C+"px",t.style.height=H+"px"),this.setViewport(0,0,C,H)},this.getDrawingBufferSize=function(C){return C.set(X*pe,fe*pe).floor()},this.setDrawingBufferSize=function(C,H,q){X=C,fe=H,pe=q,t.width=Math.floor(C*q),t.height=Math.floor(H*q),this.setViewport(0,0,C,H)},this.getCurrentViewport=function(C){return C.copy(G)},this.getViewport=function(C){return C.copy(tt)},this.setViewport=function(C,H,q,Y){C.isVector4?tt.set(C.x,C.y,C.z,C.w):tt.set(C,H,q,Y),Ee.viewport(G.copy(tt).multiplyScalar(pe).round())},this.getScissor=function(C){return C.copy(Xe)},this.setScissor=function(C,H,q,Y){C.isVector4?Xe.set(C.x,C.y,C.z,C.w):Xe.set(C,H,q,Y),Ee.scissor(K.copy(Xe).multiplyScalar(pe).round())},this.getScissorTest=function(){return $e},this.setScissorTest=function(C){Ee.setScissorTest($e=C)},this.setOpaqueSort=function(C){Ce=C},this.setTransparentSort=function(C){Ne=C},this.getClearColor=function(C){return C.copy(ie.getClearColor())},this.setClearColor=function(){ie.setClearColor(...arguments)},this.getClearAlpha=function(){return ie.getClearAlpha()},this.setClearAlpha=function(){ie.setClearAlpha(...arguments)},this.clear=function(C=!0,H=!0,q=!0){let Y=0;if(C){let V=!1;if(M!==null){let ge=M.texture.format;V=x.has(ge)}if(V){let ge=M.texture.type,Se=g.has(ge),Ae=ie.getClearColor(),we=ie.getClearAlpha(),De=Ae.r,Oe=Ae.g,Le=Ae.b;Se?(m[0]=De,m[1]=Oe,m[2]=Le,m[3]=we,F.clearBufferuiv(F.COLOR,0,m)):(p[0]=De,p[1]=Oe,p[2]=Le,p[3]=we,F.clearBufferiv(F.COLOR,0,p))}else Y|=F.COLOR_BUFFER_BIT}H&&(Y|=F.DEPTH_BUFFER_BIT),q&&(Y|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",se,!1),t.removeEventListener("webglcontextrestored",ee,!1),t.removeEventListener("webglcontextcreationerror",be,!1),ie.dispose(),oe.dispose(),me.dispose(),L.dispose(),v.dispose(),_.dispose(),k.dispose(),D.dispose(),ue.dispose(),I.dispose(),he.dispose(),he.removeEventListener("sessionstart",In),he.removeEventListener("sessionend",cr),Ui.stop()};function se(C){C.preventDefault(),vd("WebGLRenderer: Context Lost."),R=!0}function ee(){vd("WebGLRenderer: Context Restored."),R=!1;let C=B.autoReset,H=Q.enabled,q=Q.autoUpdate,Y=Q.needsUpdate,V=Q.type;de(),B.autoReset=C,Q.enabled=H,Q.autoUpdate=q,Q.needsUpdate=Y,Q.type=V}function be(C){Ze("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function xe(C){let H=C.target;H.removeEventListener("dispose",xe),Ge(H)}function Ge(C){Te(C),L.remove(C)}function Te(C){let H=L.get(C).programs;H!==void 0&&(H.forEach(function(q){I.releaseProgram(q)}),C.isShaderMaterial&&I.releaseShaderCache(C))}this.renderBufferDirect=function(C,H,q,Y,V,ge){H===null&&(H=Lt);let Se=V.isMesh&&V.matrixWorld.determinant()<0,Ae=Xg(C,H,q,Y,V);Ee.setMaterial(Y,Se);let we=q.index,De=1;if(Y.wireframe===!0){if(we=U.getWireframeAttribute(q),we===void 0)return;De=2}let Oe=q.drawRange,Le=q.attributes.position,Ke=Oe.start*De,ct=(Oe.start+Oe.count)*De;ge!==null&&(Ke=Math.max(Ke,ge.start*De),ct=Math.min(ct,(ge.start+ge.count)*De)),we!==null?(Ke=Math.max(Ke,0),ct=Math.min(ct,we.count)):Le!=null&&(Ke=Math.max(Ke,0),ct=Math.min(ct,Le.count));let yt=ct-Ke;if(yt<0||yt===1/0)return;D.setup(V,Y,Ae,q,we);let bt,lt=_e;if(we!==null&&(bt=P.get(we),lt=le,lt.setIndex(bt)),V.isMesh)Y.wireframe===!0?(Ee.setLineWidth(Y.wireframeLinewidth*dt()),lt.setMode(F.LINES)):lt.setMode(F.TRIANGLES);else if(V.isLine){let Ie=Y.linewidth;Ie===void 0&&(Ie=1),Ee.setLineWidth(Ie*dt()),V.isLineSegments?lt.setMode(F.LINES):V.isLineLoop?lt.setMode(F.LINE_LOOP):lt.setMode(F.LINE_STRIP)}else V.isPoints?lt.setMode(F.POINTS):V.isSprite&&lt.setMode(F.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)Us("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),lt.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(je.get("WEBGL_multi_draw"))lt.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{let Ie=V._multiDrawStarts,gt=V._multiDrawCounts,nt=V._multiDrawCount,fi=we?P.get(we).bytesPerElement:1,$r=L.get(Y).currentProgram.getUniforms();for(let pi=0;pi<nt;pi++)$r.setValue(F,"_gl_DrawID",pi),lt.render(Ie[pi]/fi,gt[pi])}else if(V.isInstancedMesh)lt.renderInstances(Ke,yt,V.count);else if(q.isInstancedBufferGeometry){let Ie=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,gt=Math.min(q.instanceCount,Ie);lt.renderInstances(Ke,yt,gt)}else lt.render(Ke,yt)};function ot(C,H,q){C.transparent===!0&&C.side===Ei&&C.forceSinglePass===!1?(C.side=ti,C.needsUpdate=!0,yo(C,H,q),C.side=An,C.needsUpdate=!0,yo(C,H,q),C.side=Ei):yo(C,H,q)}this.compile=function(C,H,q=null){q===null&&(q=C),y=me.get(q),y.init(H),A.push(y),q.traverseVisible(function(V){V.isLight&&V.layers.test(H.layers)&&(y.pushLight(V),V.castShadow&&y.pushShadow(V))}),C!==q&&C.traverseVisible(function(V){V.isLight&&V.layers.test(H.layers)&&(y.pushLight(V),V.castShadow&&y.pushShadow(V))}),y.setupLights();let Y=new Set;return C.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;let ge=V.material;if(ge)if(Array.isArray(ge))for(let Se=0;Se<ge.length;Se++){let Ae=ge[Se];ot(Ae,q,V),Y.add(Ae)}else ot(ge,q,V),Y.add(ge)}),y=A.pop(),Y},this.compileAsync=function(C,H,q=null){let Y=this.compile(C,H,q);return new Promise(V=>{function ge(){if(Y.forEach(function(Se){L.get(Se).currentProgram.isReady()&&Y.delete(Se)}),Y.size===0){V(C);return}setTimeout(ge,10)}je.get("KHR_parallel_shader_compile")!==null?ge():setTimeout(ge,10)})};let Be=null;function ii(C){Be&&Be(C)}function In(){Ui.stop()}function cr(){Ui.start()}let Ui=new dg;Ui.setAnimationLoop(ii),typeof self!="undefined"&&Ui.setContext(self),this.setAnimationLoop=function(C){Be=C,he.setAnimationLoop(C),C===null?Ui.stop():Ui.start()},he.addEventListener("sessionstart",In),he.addEventListener("sessionend",cr),this.render=function(C,H){if(H!==void 0&&H.isCamera!==!0){Ze("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),he.enabled===!0&&he.isPresenting===!0&&(he.cameraAutoUpdate===!0&&he.updateCamera(H),H=he.getCamera()),C.isScene===!0&&C.onBeforeRender(T,C,H,M),y=me.get(C,A.length),y.init(H),A.push(y),Ue.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),ne.setFromProjectionMatrix(Ue,Vi,H.reversedDepth),Me=this.localClippingEnabled,ae=re.init(this.clippingPlanes,Me),S=oe.get(C,w.length),S.init(),w.push(S),he.enabled===!0&&he.isPresenting===!0){let ge=T.xr.getDepthSensingMesh();ge!==null&&Et(ge,H,-1/0,T.sortObjects)}Et(C,H,0,T.sortObjects),S.finish(),T.sortObjects===!0&&S.sort(Ce,Ne),ze=he.enabled===!1||he.isPresenting===!1||he.hasDepthSensing()===!1,ze&&ie.addToRenderList(S,C),this.info.render.frame++,ae===!0&&re.beginShadows();let q=y.state.shadowsArray;Q.render(q,C,H),ae===!0&&re.endShadows(),this.info.autoReset===!0&&this.info.reset();let Y=S.opaque,V=S.transmissive;if(y.setupLights(),H.isArrayCamera){let ge=H.cameras;if(V.length>0)for(let Se=0,Ae=ge.length;Se<Ae;Se++){let we=ge[Se];Zd(Y,V,C,we)}ze&&ie.render(C);for(let Se=0,Ae=ge.length;Se<Ae;Se++){let we=ge[Se];Gi(S,C,we,we.viewport)}}else V.length>0&&Zd(Y,V,C,H),ze&&ie.render(C),Gi(S,C,H);M!==null&&b===0&&(E.updateMultisampleRenderTarget(M),E.updateRenderTargetMipmap(M)),C.isScene===!0&&C.onAfterRender(T,C,H),D.resetDefaultState(),O=-1,z=null,A.pop(),A.length>0?(y=A[A.length-1],ae===!0&&re.setGlobalState(T.clippingPlanes,y.state.camera)):y=null,w.pop(),w.length>0?S=w[w.length-1]:S=null};function Et(C,H,q,Y){if(C.visible===!1)return;if(C.layers.test(H.layers)){if(C.isGroup)q=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(H);else if(C.isLight)y.pushLight(C),C.castShadow&&y.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||ne.intersectsSprite(C)){Y&&qe.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Ue);let Se=k.update(C),Ae=C.material;Ae.visible&&S.push(C,Se,Ae,q,qe.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||ne.intersectsObject(C))){let Se=k.update(C),Ae=C.material;if(Y&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),qe.copy(C.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),qe.copy(Se.boundingSphere.center)),qe.applyMatrix4(C.matrixWorld).applyMatrix4(Ue)),Array.isArray(Ae)){let we=Se.groups;for(let De=0,Oe=we.length;De<Oe;De++){let Le=we[De],Ke=Ae[Le.materialIndex];Ke&&Ke.visible&&S.push(C,Se,Ke,q,qe.z,Le)}}else Ae.visible&&S.push(C,Se,Ae,q,qe.z,null)}}let ge=C.children;for(let Se=0,Ae=ge.length;Se<Ae;Se++)Et(ge[Se],H,q,Y)}function Gi(C,H,q,Y){let{opaque:V,transmissive:ge,transparent:Se}=C;y.setupLightsView(q),ae===!0&&re.setGlobalState(T.clippingPlanes,q),Y&&Ee.viewport(G.copy(Y)),V.length>0&&_o(V,H,q),ge.length>0&&_o(ge,H,q),Se.length>0&&_o(Se,H,q),Ee.buffers.depth.setTest(!0),Ee.buffers.depth.setMask(!0),Ee.buffers.color.setMask(!0),Ee.setPolygonOffset(!1)}function Zd(C,H,q,Y){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;y.state.transmissionRenderTarget[Y.id]===void 0&&(y.state.transmissionRenderTarget[Y.id]=new Qi(1,1,{generateMipmaps:!0,type:je.has("EXT_color_buffer_half_float")||je.has("EXT_color_buffer_float")?Vr:sn,minFilter:rn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:it.workingColorSpace}));let ge=y.state.transmissionRenderTarget[Y.id],Se=Y.viewport||G;ge.setSize(Se.z*T.transmissionResolutionScale,Se.w*T.transmissionResolutionScale);let Ae=T.getRenderTarget(),we=T.getActiveCubeFace(),De=T.getActiveMipmapLevel();T.setRenderTarget(ge),T.getClearColor(j),ce=T.getClearAlpha(),ce<1&&T.setClearColor(16777215,.5),T.clear(),ze&&ie.render(q);let Oe=T.toneMapping;T.toneMapping=Pn;let Le=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),y.setupLightsView(Y),ae===!0&&re.setGlobalState(T.clippingPlanes,Y),_o(C,q,Y),E.updateMultisampleRenderTarget(ge),E.updateRenderTargetMipmap(ge),je.has("WEBGL_multisampled_render_to_texture")===!1){let Ke=!1;for(let ct=0,yt=H.length;ct<yt;ct++){let bt=H[ct],{object:lt,geometry:Ie,material:gt,group:nt}=bt;if(gt.side===Ei&&lt.layers.test(Y.layers)){let fi=gt.side;gt.side=ti,gt.needsUpdate=!0,$d(lt,q,Y,Ie,gt,nt),gt.side=fi,gt.needsUpdate=!0,Ke=!0}}Ke===!0&&(E.updateMultisampleRenderTarget(ge),E.updateRenderTargetMipmap(ge))}T.setRenderTarget(Ae,we,De),T.setClearColor(j,ce),Le!==void 0&&(Y.viewport=Le),T.toneMapping=Oe}function _o(C,H,q){let Y=H.isScene===!0?H.overrideMaterial:null;for(let V=0,ge=C.length;V<ge;V++){let Se=C[V],{object:Ae,geometry:we,group:De}=Se,Oe=Se.material;Oe.allowOverride===!0&&Y!==null&&(Oe=Y),Ae.layers.test(q.layers)&&$d(Ae,H,q,we,Oe,De)}}function $d(C,H,q,Y,V,ge){C.onBeforeRender(T,H,q,Y,V,ge),C.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),V.onBeforeRender(T,H,q,Y,C,ge),V.transparent===!0&&V.side===Ei&&V.forceSinglePass===!1?(V.side=ti,V.needsUpdate=!0,T.renderBufferDirect(q,H,Y,V,C,ge),V.side=An,V.needsUpdate=!0,T.renderBufferDirect(q,H,Y,V,C,ge),V.side=Ei):T.renderBufferDirect(q,H,Y,V,C,ge),C.onAfterRender(T,H,q,Y,V,ge)}function yo(C,H,q){H.isScene!==!0&&(H=Lt);let Y=L.get(C),V=y.state.lights,ge=y.state.shadowsArray,Se=V.state.version,Ae=I.getParameters(C,V.state,ge,H,q),we=I.getProgramCacheKey(Ae),De=Y.programs;Y.environment=C.isMeshStandardMaterial?H.environment:null,Y.fog=H.fog,Y.envMap=(C.isMeshStandardMaterial?_:v).get(C.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&C.envMap===null?H.environmentRotation:C.envMapRotation,De===void 0&&(C.addEventListener("dispose",xe),De=new Map,Y.programs=De);let Oe=De.get(we);if(Oe!==void 0){if(Y.currentProgram===Oe&&Y.lightsStateVersion===Se)return Jd(C,Ae),Oe}else Ae.uniforms=I.getUniforms(C),C.onBeforeCompile(Ae,T),Oe=I.acquireProgram(Ae,we),De.set(we,Oe),Y.uniforms=Ae.uniforms;let Le=Y.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Le.clippingPlanes=re.uniform),Jd(C,Ae),Y.needsLights=Yg(C),Y.lightsStateVersion=Se,Y.needsLights&&(Le.ambientLightColor.value=V.state.ambient,Le.lightProbe.value=V.state.probe,Le.directionalLights.value=V.state.directional,Le.directionalLightShadows.value=V.state.directionalShadow,Le.spotLights.value=V.state.spot,Le.spotLightShadows.value=V.state.spotShadow,Le.rectAreaLights.value=V.state.rectArea,Le.ltc_1.value=V.state.rectAreaLTC1,Le.ltc_2.value=V.state.rectAreaLTC2,Le.pointLights.value=V.state.point,Le.pointLightShadows.value=V.state.pointShadow,Le.hemisphereLights.value=V.state.hemi,Le.directionalShadowMap.value=V.state.directionalShadowMap,Le.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Le.spotShadowMap.value=V.state.spotShadowMap,Le.spotLightMatrix.value=V.state.spotLightMatrix,Le.spotLightMap.value=V.state.spotLightMap,Le.pointShadowMap.value=V.state.pointShadowMap,Le.pointShadowMatrix.value=V.state.pointShadowMatrix),Y.currentProgram=Oe,Y.uniformsList=null,Oe}function Kd(C){if(C.uniformsList===null){let H=C.currentProgram.getUniforms();C.uniformsList=$s.seqWithValue(H.seq,C.uniforms)}return C.uniformsList}function Jd(C,H){let q=L.get(C);q.outputColorSpace=H.outputColorSpace,q.batching=H.batching,q.batchingColor=H.batchingColor,q.instancing=H.instancing,q.instancingColor=H.instancingColor,q.instancingMorph=H.instancingMorph,q.skinning=H.skinning,q.morphTargets=H.morphTargets,q.morphNormals=H.morphNormals,q.morphColors=H.morphColors,q.morphTargetsCount=H.morphTargetsCount,q.numClippingPlanes=H.numClippingPlanes,q.numIntersection=H.numClipIntersection,q.vertexAlphas=H.vertexAlphas,q.vertexTangents=H.vertexTangents,q.toneMapping=H.toneMapping}function Xg(C,H,q,Y,V){H.isScene!==!0&&(H=Lt),E.resetTextureUnits();let ge=H.fog,Se=Y.isMeshStandardMaterial?H.environment:null,Ae=M===null?T.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:Nr,we=(Y.isMeshStandardMaterial?_:v).get(Y.envMap||Se),De=Y.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Oe=!!q.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Le=!!q.morphAttributes.position,Ke=!!q.morphAttributes.normal,ct=!!q.morphAttributes.color,yt=Pn;Y.toneMapped&&(M===null||M.isXRRenderTarget===!0)&&(yt=T.toneMapping);let bt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,lt=bt!==void 0?bt.length:0,Ie=L.get(Y),gt=y.state.lights;if(ae===!0&&(Me===!0||C!==z)){let jt=C===z&&Y.id===O;re.setState(Y,C,jt)}let nt=!1;Y.version===Ie.__version?(Ie.needsLights&&Ie.lightsStateVersion!==gt.state.version||Ie.outputColorSpace!==Ae||V.isBatchedMesh&&Ie.batching===!1||!V.isBatchedMesh&&Ie.batching===!0||V.isBatchedMesh&&Ie.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&Ie.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&Ie.instancing===!1||!V.isInstancedMesh&&Ie.instancing===!0||V.isSkinnedMesh&&Ie.skinning===!1||!V.isSkinnedMesh&&Ie.skinning===!0||V.isInstancedMesh&&Ie.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Ie.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Ie.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Ie.instancingMorph===!1&&V.morphTexture!==null||Ie.envMap!==we||Y.fog===!0&&Ie.fog!==ge||Ie.numClippingPlanes!==void 0&&(Ie.numClippingPlanes!==re.numPlanes||Ie.numIntersection!==re.numIntersection)||Ie.vertexAlphas!==De||Ie.vertexTangents!==Oe||Ie.morphTargets!==Le||Ie.morphNormals!==Ke||Ie.morphColors!==ct||Ie.toneMapping!==yt||Ie.morphTargetsCount!==lt)&&(nt=!0):(nt=!0,Ie.__version=Y.version);let fi=Ie.currentProgram;nt===!0&&(fi=yo(Y,H,V));let $r=!1,pi=!1,ta=!1,vt=fi.getUniforms(),ni=Ie.uniforms;if(Ee.useProgram(fi.program)&&($r=!0,pi=!0,ta=!0),Y.id!==O&&(O=Y.id,pi=!0),$r||z!==C){Ee.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),vt.setValue(F,"projectionMatrix",C.projectionMatrix),vt.setValue(F,"viewMatrix",C.matrixWorldInverse);let ri=vt.map.cameraPosition;ri!==void 0&&ri.setValue(F,Re.setFromMatrixPosition(C.matrixWorld)),at.logarithmicDepthBuffer&&vt.setValue(F,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&vt.setValue(F,"isOrthographic",C.isOrthographicCamera===!0),z!==C&&(z=C,pi=!0,ta=!0)}if(V.isSkinnedMesh){vt.setOptional(F,V,"bindMatrix"),vt.setOptional(F,V,"bindMatrixInverse");let jt=V.skeleton;jt&&(jt.boneTexture===null&&jt.computeBoneTexture(),vt.setValue(F,"boneTexture",jt.boneTexture,E))}V.isBatchedMesh&&(vt.setOptional(F,V,"batchingTexture"),vt.setValue(F,"batchingTexture",V._matricesTexture,E),vt.setOptional(F,V,"batchingIdTexture"),vt.setValue(F,"batchingIdTexture",V._indirectTexture,E),vt.setOptional(F,V,"batchingColorTexture"),V._colorsTexture!==null&&vt.setValue(F,"batchingColorTexture",V._colorsTexture,E));let Ti=q.morphAttributes;if((Ti.position!==void 0||Ti.normal!==void 0||Ti.color!==void 0)&&ve.update(V,q,fi),(pi||Ie.receiveShadow!==V.receiveShadow)&&(Ie.receiveShadow=V.receiveShadow,vt.setValue(F,"receiveShadow",V.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(ni.envMap.value=we,ni.flipEnvMap.value=we.isCubeTexture&&we.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&H.environment!==null&&(ni.envMapIntensity.value=H.environmentIntensity),ni.dfgLUT!==void 0&&(ni.dfgLUT.value=G1()),pi&&(vt.setValue(F,"toneMappingExposure",T.toneMappingExposure),Ie.needsLights&&qg(ni,ta),ge&&Y.fog===!0&&te.refreshFogUniforms(ni,ge),te.refreshMaterialUniforms(ni,Y,pe,fe,y.state.transmissionRenderTarget[C.id]),$s.upload(F,Kd(Ie),ni,E)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&($s.upload(F,Kd(Ie),ni,E),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&vt.setValue(F,"center",V.center),vt.setValue(F,"modelViewMatrix",V.modelViewMatrix),vt.setValue(F,"normalMatrix",V.normalMatrix),vt.setValue(F,"modelMatrix",V.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){let jt=Y.uniformsGroups;for(let ri=0,ah=jt.length;ri<ah;ri++){let lr=jt[ri];ue.update(lr,fi),ue.bind(lr,fi)}}return fi}function qg(C,H){C.ambientLightColor.needsUpdate=H,C.lightProbe.needsUpdate=H,C.directionalLights.needsUpdate=H,C.directionalLightShadows.needsUpdate=H,C.pointLights.needsUpdate=H,C.pointLightShadows.needsUpdate=H,C.spotLights.needsUpdate=H,C.spotLightShadows.needsUpdate=H,C.rectAreaLights.needsUpdate=H,C.hemisphereLights.needsUpdate=H}function Yg(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(C,H,q){let Y=L.get(C);Y.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),L.get(C.texture).__webglTexture=H,L.get(C.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:q,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,H){let q=L.get(C);q.__webglFramebuffer=H,q.__useDefaultFramebuffer=H===void 0};let jg=F.createFramebuffer();this.setRenderTarget=function(C,H=0,q=0){M=C,N=H,b=q;let Y=!0,V=null,ge=!1,Se=!1;if(C){let we=L.get(C);if(we.__useDefaultFramebuffer!==void 0)Ee.bindFramebuffer(F.FRAMEBUFFER,null),Y=!1;else if(we.__webglFramebuffer===void 0)E.setupRenderTarget(C);else if(we.__hasExternalTextures)E.rebindTextures(C,L.get(C.texture).__webglTexture,L.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){let Le=C.depthTexture;if(we.__boundDepthTexture!==Le){if(Le!==null&&L.has(Le)&&(C.width!==Le.image.width||C.height!==Le.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(C)}}let De=C.texture;(De.isData3DTexture||De.isDataArrayTexture||De.isCompressedArrayTexture)&&(Se=!0);let Oe=L.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Oe[H])?V=Oe[H][q]:V=Oe[H],ge=!0):C.samples>0&&E.useMultisampledRTT(C)===!1?V=L.get(C).__webglMultisampledFramebuffer:Array.isArray(Oe)?V=Oe[q]:V=Oe,G.copy(C.viewport),K.copy(C.scissor),J=C.scissorTest}else G.copy(tt).multiplyScalar(pe).floor(),K.copy(Xe).multiplyScalar(pe).floor(),J=$e;if(q!==0&&(V=jg),Ee.bindFramebuffer(F.FRAMEBUFFER,V)&&Y&&Ee.drawBuffers(C,V),Ee.viewport(G),Ee.scissor(K),Ee.setScissorTest(J),ge){let we=L.get(C.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+H,we.__webglTexture,q)}else if(Se){let we=H;for(let De=0;De<C.textures.length;De++){let Oe=L.get(C.textures[De]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+De,Oe.__webglTexture,q,we)}}else if(C!==null&&q!==0){let we=L.get(C.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,we.__webglTexture,q)}O=-1},this.readRenderTargetPixels=function(C,H,q,Y,V,ge,Se,Ae=0){if(!(C&&C.isWebGLRenderTarget)){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=L.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Se!==void 0&&(we=we[Se]),we){Ee.bindFramebuffer(F.FRAMEBUFFER,we);try{let De=C.textures[Ae],Oe=De.format,Le=De.type;if(!at.textureFormatReadable(Oe)){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!at.textureTypeReadable(Le)){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=C.width-Y&&q>=0&&q<=C.height-V&&(C.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Ae),F.readPixels(H,q,Y,V,Pe.convert(Oe),Pe.convert(Le),ge))}finally{let De=M!==null?L.get(M).__webglFramebuffer:null;Ee.bindFramebuffer(F.FRAMEBUFFER,De)}}},this.readRenderTargetPixelsAsync=async function(C,H,q,Y,V,ge,Se,Ae=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=L.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Se!==void 0&&(we=we[Se]),we)if(H>=0&&H<=C.width-Y&&q>=0&&q<=C.height-V){Ee.bindFramebuffer(F.FRAMEBUFFER,we);let De=C.textures[Ae],Oe=De.format,Le=De.type;if(!at.textureFormatReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!at.textureTypeReadable(Le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ke=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Ke),F.bufferData(F.PIXEL_PACK_BUFFER,ge.byteLength,F.STREAM_READ),C.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Ae),F.readPixels(H,q,Y,V,Pe.convert(Oe),Pe.convert(Le),0);let ct=M!==null?L.get(M).__webglFramebuffer:null;Ee.bindFramebuffer(F.FRAMEBUFFER,ct);let yt=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await z0(F,yt,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,Ke),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,ge),F.deleteBuffer(Ke),F.deleteSync(yt),ge}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,H=null,q=0){let Y=Math.pow(2,-q),V=Math.floor(C.image.width*Y),ge=Math.floor(C.image.height*Y),Se=H!==null?H.x:0,Ae=H!==null?H.y:0;E.setTexture2D(C,0),F.copyTexSubImage2D(F.TEXTURE_2D,q,0,0,Se,Ae,V,ge),Ee.unbindTexture()};let Zg=F.createFramebuffer(),$g=F.createFramebuffer();this.copyTextureToTexture=function(C,H,q=null,Y=null,V=0,ge=null){ge===null&&(V!==0?(Us("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ge=V,V=0):ge=0);let Se,Ae,we,De,Oe,Le,Ke,ct,yt,bt=C.isCompressedTexture?C.mipmaps[ge]:C.image;if(q!==null)Se=q.max.x-q.min.x,Ae=q.max.y-q.min.y,we=q.isBox3?q.max.z-q.min.z:1,De=q.min.x,Oe=q.min.y,Le=q.isBox3?q.min.z:0;else{let Ti=Math.pow(2,-V);Se=Math.floor(bt.width*Ti),Ae=Math.floor(bt.height*Ti),C.isDataArrayTexture?we=bt.depth:C.isData3DTexture?we=Math.floor(bt.depth*Ti):we=1,De=0,Oe=0,Le=0}Y!==null?(Ke=Y.x,ct=Y.y,yt=Y.z):(Ke=0,ct=0,yt=0);let lt=Pe.convert(H.format),Ie=Pe.convert(H.type),gt;H.isData3DTexture?(E.setTexture3D(H,0),gt=F.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(E.setTexture2DArray(H,0),gt=F.TEXTURE_2D_ARRAY):(E.setTexture2D(H,0),gt=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,H.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,H.unpackAlignment);let nt=F.getParameter(F.UNPACK_ROW_LENGTH),fi=F.getParameter(F.UNPACK_IMAGE_HEIGHT),$r=F.getParameter(F.UNPACK_SKIP_PIXELS),pi=F.getParameter(F.UNPACK_SKIP_ROWS),ta=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,bt.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,bt.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,De),F.pixelStorei(F.UNPACK_SKIP_ROWS,Oe),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Le);let vt=C.isDataArrayTexture||C.isData3DTexture,ni=H.isDataArrayTexture||H.isData3DTexture;if(C.isDepthTexture){let Ti=L.get(C),jt=L.get(H),ri=L.get(Ti.__renderTarget),ah=L.get(jt.__renderTarget);Ee.bindFramebuffer(F.READ_FRAMEBUFFER,ri.__webglFramebuffer),Ee.bindFramebuffer(F.DRAW_FRAMEBUFFER,ah.__webglFramebuffer);for(let lr=0;lr<we;lr++)vt&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,L.get(C).__webglTexture,V,Le+lr),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,L.get(H).__webglTexture,ge,yt+lr)),F.blitFramebuffer(De,Oe,Se,Ae,Ke,ct,Se,Ae,F.DEPTH_BUFFER_BIT,F.NEAREST);Ee.bindFramebuffer(F.READ_FRAMEBUFFER,null),Ee.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(V!==0||C.isRenderTargetTexture||L.has(C)){let Ti=L.get(C),jt=L.get(H);Ee.bindFramebuffer(F.READ_FRAMEBUFFER,Zg),Ee.bindFramebuffer(F.DRAW_FRAMEBUFFER,$g);for(let ri=0;ri<we;ri++)vt?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ti.__webglTexture,V,Le+ri):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Ti.__webglTexture,V),ni?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,jt.__webglTexture,ge,yt+ri):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,jt.__webglTexture,ge),V!==0?F.blitFramebuffer(De,Oe,Se,Ae,Ke,ct,Se,Ae,F.COLOR_BUFFER_BIT,F.NEAREST):ni?F.copyTexSubImage3D(gt,ge,Ke,ct,yt+ri,De,Oe,Se,Ae):F.copyTexSubImage2D(gt,ge,Ke,ct,De,Oe,Se,Ae);Ee.bindFramebuffer(F.READ_FRAMEBUFFER,null),Ee.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else ni?C.isDataTexture||C.isData3DTexture?F.texSubImage3D(gt,ge,Ke,ct,yt,Se,Ae,we,lt,Ie,bt.data):H.isCompressedArrayTexture?F.compressedTexSubImage3D(gt,ge,Ke,ct,yt,Se,Ae,we,lt,bt.data):F.texSubImage3D(gt,ge,Ke,ct,yt,Se,Ae,we,lt,Ie,bt):C.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,ge,Ke,ct,Se,Ae,lt,Ie,bt.data):C.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,ge,Ke,ct,bt.width,bt.height,lt,bt.data):F.texSubImage2D(F.TEXTURE_2D,ge,Ke,ct,Se,Ae,lt,Ie,bt);F.pixelStorei(F.UNPACK_ROW_LENGTH,nt),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,fi),F.pixelStorei(F.UNPACK_SKIP_PIXELS,$r),F.pixelStorei(F.UNPACK_SKIP_ROWS,pi),F.pixelStorei(F.UNPACK_SKIP_IMAGES,ta),ge===0&&H.generateMipmaps&&F.generateMipmap(gt),Ee.unbindTexture()},this.initRenderTarget=function(C){L.get(C).__webglFramebuffer===void 0&&E.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?E.setTextureCube(C,0):C.isData3DTexture?E.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?E.setTexture2DArray(C,0):E.setTexture2D(C,0),Ee.unbindTexture()},this.resetState=function(){N=0,b=0,M=null,Ee.reset(),D.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=it._getDrawingBufferColorSpace(e),t.unpackColorSpace=it._getUnpackColorSpace()}}});function X1(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r))}function q1(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function Y1(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchEnd(r):this._onMouseUp(),this._removePointer(r),this._pointers.length===0&&(this.domElement.releasePointerCapture(r.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp)))}function j1(r){this._removePointer(r)}function Z1(){this.enabled!==!1&&(this.keyState=rt.NONE,window.addEventListener("keydown",this._onKeyDown))}function $1(r){this.enabled!==!1&&(window.removeEventListener("keydown",this._onKeyDown),this.keyState===rt.NONE&&(r.code===this.keys[rt.ROTATE]&&!this.noRotate?this.keyState=rt.ROTATE:r.code===this.keys[rt.ZOOM]&&!this.noZoom?this.keyState=rt.ZOOM:r.code===this.keys[rt.PAN]&&!this.noPan&&(this.keyState=rt.PAN)))}function K1(r){let e;switch(r.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case ir.DOLLY:this.state=rt.ZOOM;break;case ir.ROTATE:this.state=rt.ROTATE;break;case ir.PAN:this.state=rt.PAN;break;default:this.state=rt.NONE}let t=this.keyState!==rt.NONE?this.keyState:this.state;t===rt.ROTATE&&!this.noRotate?(this._moveCurr.copy(this._getMouseOnCircle(r.pageX,r.pageY)),this._movePrev.copy(this._moveCurr)):t===rt.ZOOM&&!this.noZoom?(this._zoomStart.copy(this._getMouseOnScreen(r.pageX,r.pageY)),this._zoomEnd.copy(this._zoomStart)):t===rt.PAN&&!this.noPan&&(this._panStart.copy(this._getMouseOnScreen(r.pageX,r.pageY)),this._panEnd.copy(this._panStart)),this.dispatchEvent(Hd)}function J1(r){let e=this.keyState!==rt.NONE?this.keyState:this.state;e===rt.ROTATE&&!this.noRotate?(this._movePrev.copy(this._moveCurr),this._moveCurr.copy(this._getMouseOnCircle(r.pageX,r.pageY))):e===rt.ZOOM&&!this.noZoom?this._zoomEnd.copy(this._getMouseOnScreen(r.pageX,r.pageY)):e===rt.PAN&&!this.noPan&&this._panEnd.copy(this._getMouseOnScreen(r.pageX,r.pageY))}function Q1(){this.state=rt.NONE,this.dispatchEvent(Vd)}function eE(r){if(this.enabled!==!1&&this.noZoom!==!0){switch(r.preventDefault(),r.deltaMode){case 2:this._zoomStart.y-=r.deltaY*.025;break;case 1:this._zoomStart.y-=r.deltaY*.01;break;default:this._zoomStart.y-=r.deltaY*25e-5;break}this.dispatchEvent(Hd),this.dispatchEvent(Vd)}}function tE(r){this.enabled!==!1&&r.preventDefault()}function iE(r){switch(this._trackPointer(r),this._pointers.length){case 1:this.state=rt.TOUCH_ROTATE,this._moveCurr.copy(this._getMouseOnCircle(this._pointers[0].pageX,this._pointers[0].pageY)),this._movePrev.copy(this._moveCurr);break;default:this.state=rt.TOUCH_ZOOM_PAN;let e=this._pointers[0].pageX-this._pointers[1].pageX,t=this._pointers[0].pageY-this._pointers[1].pageY;this._touchZoomDistanceEnd=this._touchZoomDistanceStart=Math.sqrt(e*e+t*t);let i=(this._pointers[0].pageX+this._pointers[1].pageX)/2,n=(this._pointers[0].pageY+this._pointers[1].pageY)/2;this._panStart.copy(this._getMouseOnScreen(i,n)),this._panEnd.copy(this._panStart);break}this.dispatchEvent(Hd)}function nE(r){switch(this._trackPointer(r),this._pointers.length){case 1:this._movePrev.copy(this._moveCurr),this._moveCurr.copy(this._getMouseOnCircle(r.pageX,r.pageY));break;default:let e=this._getSecondPointerPosition(r),t=r.pageX-e.x,i=r.pageY-e.y;this._touchZoomDistanceEnd=Math.sqrt(t*t+i*i);let n=(r.pageX+e.x)/2,s=(r.pageY+e.y)/2;this._panEnd.copy(this._getMouseOnScreen(n,s));break}}function rE(r){switch(this._pointers.length){case 0:this.state=rt.NONE;break;case 1:this.state=rt.TOUCH_ROTATE,this._moveCurr.copy(this._getMouseOnCircle(r.pageX,r.pageY)),this._movePrev.copy(this._moveCurr);break;case 2:this.state=rt.TOUCH_ZOOM_PAN;for(let e=0;e<this._pointers.length;e++)if(this._pointers[e].pointerId!==r.pointerId){let t=this._pointerPositions[this._pointers[e].pointerId];this._moveCurr.copy(this._getMouseOnCircle(t.x,t.y)),this._movePrev.copy(this._moveCurr);break}break}this.dispatchEvent(Vd)}var Bd,Hd,Vd,vg,rt,$l,sr,W1,Kl,kd,Js,xg,Jl,zd,Ql,eh,_g=Zt(()=>{Ud();Bd={type:"change"},Hd={type:"start"},Vd={type:"end"},vg=1e-6,rt={NONE:-1,ROTATE:0,ZOOM:1,PAN:2,TOUCH_ROTATE:3,TOUCH_ZOOM_PAN:4},$l=new He,sr=new He,W1=new W,Kl=new W,kd=new W,Js=new bi,xg=new W,Jl=new W,zd=new W,Ql=new W,eh=class extends ro{constructor(e,t=null){super(e,t),this.screen={left:0,top:0,width:0,height:0},this.rotateSpeed=1,this.zoomSpeed=1.2,this.panSpeed=.3,this.noRotate=!1,this.noZoom=!1,this.noPan=!1,this.staticMoving=!1,this.dynamicDampingFactor=.2,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.keys=["KeyA","KeyS","KeyD"],this.mouseButtons={LEFT:ir.ROTATE,MIDDLE:ir.DOLLY,RIGHT:ir.PAN},this.target=new W,this.state=rt.NONE,this.keyState=rt.NONE,this._lastPosition=new W,this._lastZoom=1,this._touchZoomDistanceStart=0,this._touchZoomDistanceEnd=0,this._lastAngle=0,this._eye=new W,this._movePrev=new He,this._moveCurr=new He,this._lastAxis=new W,this._zoomStart=new He,this._zoomEnd=new He,this._panStart=new He,this._panEnd=new He,this._pointers=[],this._pointerPositions={},this._onPointerMove=q1.bind(this),this._onPointerDown=X1.bind(this),this._onPointerUp=Y1.bind(this),this._onPointerCancel=j1.bind(this),this._onContextMenu=tE.bind(this),this._onMouseWheel=eE.bind(this),this._onKeyDown=$1.bind(this),this._onKeyUp=Z1.bind(this),this._onTouchStart=iE.bind(this),this._onTouchMove=nE.bind(this),this._onTouchEnd=rE.bind(this),this._onMouseDown=K1.bind(this),this._onMouseMove=J1.bind(this),this._onMouseUp=Q1.bind(this),this._target0=this.target.clone(),this._position0=this.object.position.clone(),this._up0=this.object.up.clone(),this._zoom0=this.object.zoom,t!==null&&(this.connect(t),this.handleResize()),this.update()}connect(e){super.connect(e),window.addEventListener("keydown",this._onKeyDown),window.addEventListener("keyup",this._onKeyUp),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerCancel),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.style.touchAction="none"}disconnect(){window.removeEventListener("keydown",this._onKeyDown),window.removeEventListener("keyup",this._onKeyUp),this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerCancel),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}handleResize(){let e=this.domElement.getBoundingClientRect(),t=this.domElement.ownerDocument.documentElement;this.screen.left=e.left+window.pageXOffset-t.clientLeft,this.screen.top=e.top+window.pageYOffset-t.clientTop,this.screen.width=e.width,this.screen.height=e.height}update(){this._eye.subVectors(this.object.position,this.target),this.noRotate||this._rotateCamera(),this.noZoom||this._zoomCamera(),this.noPan||this._panCamera(),this.object.position.addVectors(this.target,this._eye),this.object.isPerspectiveCamera?(this._checkDistances(),this.object.lookAt(this.target),this._lastPosition.distanceToSquared(this.object.position)>vg&&(this.dispatchEvent(Bd),this._lastPosition.copy(this.object.position))):this.object.isOrthographicCamera&&(this.object.lookAt(this.target),(this._lastPosition.distanceToSquared(this.object.position)>vg||this._lastZoom!==this.object.zoom)&&(this.dispatchEvent(Bd),this._lastPosition.copy(this.object.position),this._lastZoom=this.object.zoom))}reset(){this.state=rt.NONE,this.keyState=rt.NONE,this.target.copy(this._target0),this.object.position.copy(this._position0),this.object.up.copy(this._up0),this.object.zoom=this._zoom0,this.object.updateProjectionMatrix(),this._eye.subVectors(this.object.position,this.target),this.object.lookAt(this.target),this.dispatchEvent(Bd),this._lastPosition.copy(this.object.position),this._lastZoom=this.object.zoom}_panCamera(){if(sr.copy(this._panEnd).sub(this._panStart),sr.lengthSq()){if(this.object.isOrthographicCamera){let e=(this.object.right-this.object.left)/this.object.zoom/this.domElement.clientWidth,t=(this.object.top-this.object.bottom)/this.object.zoom/this.domElement.clientWidth;sr.x*=e,sr.y*=t}sr.multiplyScalar(this._eye.length()*this.panSpeed),Kl.copy(this._eye).cross(this.object.up).setLength(sr.x),Kl.add(W1.copy(this.object.up).setLength(sr.y)),this.object.position.add(Kl),this.target.add(Kl),this.staticMoving?this._panStart.copy(this._panEnd):this._panStart.add(sr.subVectors(this._panEnd,this._panStart).multiplyScalar(this.dynamicDampingFactor))}}_rotateCamera(){Ql.set(this._moveCurr.x-this._movePrev.x,this._moveCurr.y-this._movePrev.y,0);let e=Ql.length();e?(this._eye.copy(this.object.position).sub(this.target),xg.copy(this._eye).normalize(),Jl.copy(this.object.up).normalize(),zd.crossVectors(Jl,xg).normalize(),Jl.setLength(this._moveCurr.y-this._movePrev.y),zd.setLength(this._moveCurr.x-this._movePrev.x),Ql.copy(Jl.add(zd)),kd.crossVectors(Ql,this._eye).normalize(),e*=this.rotateSpeed,Js.setFromAxisAngle(kd,e),this._eye.applyQuaternion(Js),this.object.up.applyQuaternion(Js),this._lastAxis.copy(kd),this._lastAngle=e):!this.staticMoving&&this._lastAngle&&(this._lastAngle*=Math.sqrt(1-this.dynamicDampingFactor),this._eye.copy(this.object.position).sub(this.target),Js.setFromAxisAngle(this._lastAxis,this._lastAngle),this._eye.applyQuaternion(Js),this.object.up.applyQuaternion(Js)),this._movePrev.copy(this._moveCurr)}_zoomCamera(){let e;this.state===rt.TOUCH_ZOOM_PAN?(e=this._touchZoomDistanceStart/this._touchZoomDistanceEnd,this._touchZoomDistanceStart=this._touchZoomDistanceEnd,this.object.isPerspectiveCamera?this._eye.multiplyScalar(e):this.object.isOrthographicCamera&&(this.object.zoom=Gl.clamp(this.object.zoom/e,this.minZoom,this.maxZoom),this._lastZoom!==this.object.zoom&&this.object.updateProjectionMatrix())):(e=1+(this._zoomEnd.y-this._zoomStart.y)*this.zoomSpeed,e!==1&&e>0&&(this.object.isPerspectiveCamera?this._eye.multiplyScalar(e):this.object.isOrthographicCamera&&(this.object.zoom=Gl.clamp(this.object.zoom/e,this.minZoom,this.maxZoom),this._lastZoom!==this.object.zoom&&this.object.updateProjectionMatrix())),this.staticMoving?this._zoomStart.copy(this._zoomEnd):this._zoomStart.y+=(this._zoomEnd.y-this._zoomStart.y)*this.dynamicDampingFactor)}_getMouseOnScreen(e,t){return $l.set((e-this.screen.left)/this.screen.width,(t-this.screen.top)/this.screen.height),$l}_getMouseOnCircle(e,t){return $l.set((e-this.screen.width*.5-this.screen.left)/(this.screen.width*.5),(this.screen.height+2*(this.screen.top-t))/this.screen.width),$l}_addPointer(e){this._pointers.push(e)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t].pointerId==e.pointerId){this._pointers.splice(t,1);return}}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new He,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0].pointerId?this._pointers[1]:this._pointers[0];return this._pointerPositions[t.pointerId]}_checkDistances(){(!this.noZoom||!this.noPan)&&(this._eye.lengthSq()>this.maxDistance*this.maxDistance&&(this.object.position.addVectors(this.target,this._eye.setLength(this.maxDistance)),this._zoomStart.copy(this._zoomEnd)),this._eye.lengthSq()<this.minDistance*this.minDistance&&(this.object.position.addVectors(this.target,this._eye.setLength(this.minDistance)),this._zoomStart.copy(this._zoomEnd)))}}});function wg(r){let e=r instanceof Document?r.documentElement:r,t=dE(e);if(t===yg&&Gd.length)return Gd;let i=Array.from(e.querySelectorAll(Sg)),n=[];if(i.length)n=i.map((s,a)=>sE(s,a)).filter(s=>!!s);else{let s=Array.from(e.querySelectorAll(Mg));n=s.map((a,o)=>aE(a,o)).filter(a=>!!a),s.length&&uE(e)}return yg=t,Gd=n,n}function sE(r,e){var s,a,o,c,l,h,u,d,f,x,g;let t=oE((s=r.dataset.mediaType)!=null?s:r.dataset.type),i=(o=(a=r.dataset.mediaSrc)!=null?a:r.dataset.src)!=null?o:r.getAttribute("src");if(!t||!i)return null;let n=Eg((c=r.dataset.aspect)!=null?c:r.getAttribute("data-aspect"));return{id:r.dataset.mediaId||r.id||`archive-media-${e}`,type:t,src:i,thumb:(h=(l=r.dataset.thumb)!=null?l:r.dataset.poster)!=null?h:void 0,aspectRatio:n,title:(d=(u=r.dataset.title)!=null?u:r.getAttribute("data-title"))!=null?d:void 0,description:(f=r.dataset.description)!=null?f:void 0,link:(x=r.dataset.link)!=null?x:void 0,alt:(g=r.getAttribute("alt"))!=null?g:void 0,metadata:Wd(r.dataset)}}function aE(r,e){var n,s,a,o,c,l,h,u,d;let t=r.tagName.toLowerCase()==="img",i=cE(r);if(t){let f=(s=(n=r.getAttribute("src"))!=null?n:r.dataset.src)!=null?s:null;return f?{id:r.dataset.mediaId||r.id||`archive-legacy-${e}`,type:"image",src:f,thumb:(c=(o=(a=r.getAttribute("data-thumb"))!=null?a:r.dataset.thumb)!=null?o:r.getAttribute("data-poster"))!=null?c:void 0,aspectRatio:bg(r),title:(l=r.getAttribute("alt"))!=null?l:void 0,alt:(h=r.getAttribute("alt"))!=null?h:void 0,metadata:Wd(r.dataset)}:null}if(i){let f=lE(i);return f?{id:r.dataset.mediaId||r.id||`archive-legacy-${e}`,type:"video",src:f,thumb:(u=hE(i))!=null?u:void 0,aspectRatio:bg(i),title:(d=r.getAttribute("data-title"))!=null?d:void 0,metadata:Wd({...r.dataset,...i.dataset})}:null}return null}function oE(r){if(!r)return null;if(r==="video"||r==="image")return r;let e=r.toLowerCase();return e.includes("video")?"video":e.includes("image")?"image":null}function Eg(r){if(!r)return;if(r.includes(":")){let[t,i]=r.split(":").map(n=>Number.parseFloat(n.trim()));if(Number.isFinite(t)&&Number.isFinite(i)&&i>0)return i===0?void 0:i/t}let e=Number.parseFloat(r);if(Number.isFinite(e)&&e>0)return e}function bg(r){var s,a;let e=Number.parseFloat((s=r.getAttribute("width"))!=null?s:"")||r.clientWidth,t=Number.parseFloat((a=r.getAttribute("height"))!=null?a:"")||r.clientHeight;if(e>0&&t>0)return t/e;let i=r.getBoundingClientRect();if(i.width>0&&i.height>0)return i.height/i.width;let n=r.getAttribute("data-aspect");return Eg(n)}function cE(r){return r.tagName.toLowerCase()==="video"?r:r.querySelector("video")}function lE(r){var n,s;let e=[(n=r.dataset.src1080)!=null?n:r.getAttribute("data-src-1080"),(s=r.dataset.src720)!=null?s:r.getAttribute("data-src-720"),r.getAttribute("data-src"),r.dataset.src,r.getAttribute("src")];for(let a of e)if(a&&a.trim().length)return a.trim();let t=r.querySelector("source");if(t){let a=[t.getAttribute("data-src-1080"),t.getAttribute("data-src-720"),t.getAttribute("data-src"),t.getAttribute("src")];for(let o of a)if(o&&o.trim().length)return o.trim()}let i=r.innerHTML.match(/https:\/\/[^"'\s]+/);return i?i[0]:null}function hE(r){var t,i;let e=(i=(t=r.dataset.poster)!=null?t:r.getAttribute("data-poster"))!=null?i:r.getAttribute("poster");return e&&e.trim().length?e.trim():null}function Wd(r){let e=Object.entries(r).filter(t=>typeof t[1]=="string");return Object.fromEntries(e)}function uE(r){let e=r.querySelector(".grid-images");e&&(e.setAttribute("data-archive-sphere-hidden","true"),e.style.display="none",pE()||fE(e))}function dE(r){return Array.from(r.querySelectorAll(Sg+", "+Mg)).map(i=>{var n,s,a;return(a=(s=(n=i.getAttribute("data-media-id"))!=null?n:i.id)!=null?s:i.getAttribute("src"))!=null?a:i.outerHTML.length.toString()}).join("|")}function fE(r){r.querySelectorAll("img").forEach(i=>{var n;i.dataset.archiveSpherePreserve!=="true"&&(i.dataset.src||(i.dataset.src=(n=i.getAttribute("src"))!=null?n:""),i.removeAttribute("src"),i.removeAttribute("srcset"),i.loading="lazy")}),r.querySelectorAll("video").forEach(i=>{var s,a;if(i.dataset.archiveSpherePreserve==="true")return;!i.dataset.src&&i.getAttribute("src")&&(i.dataset.src=(s=i.getAttribute("src"))!=null?s:""),!i.dataset.poster&&i.getAttribute("poster")&&(i.dataset.poster=(a=i.getAttribute("poster"))!=null?a:""),i.removeAttribute("src"),i.removeAttribute("poster"),i.querySelectorAll("source").forEach(o=>{var c;o.getAttribute("src")&&(o.setAttribute("data-src",(c=o.getAttribute("src"))!=null?c:""),o.removeAttribute("src"))})})}function pE(){if(typeof document=="undefined")return!1;let r=document.documentElement;return r.classList.contains("w-editor")||r.classList.contains("wf-design-mode")}var Sg,Mg,yg,Gd,Tg=Zt(()=>{"use strict";Sg="[data-archive-media-item]",Mg=".archive-media-element, .grid-image, .grid-video",yg="",Gd=[]});function Cg(){if(Ag)return;Ag=!0;let r=document.createElement("style");r.dataset.archiveSphereStyles="true",r.textContent=`
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

  `,document.head.appendChild(r)}var Ag,Pg=Zt(()=>{"use strict";Ag=!1});var mE,gE,vE,xE,_E,yE,Rg,Xd,Lg,qd,th,Ig=Zt(()=>{"use strict";hi();Ud();_g();Tg();Pg();mE=Math.PI*(3-Math.sqrt(5)),gE=640,vE=.1,xE=6,_E=1.05,yE=1.12,Rg=82,Xd=1.18,Lg=.08,qd=["texturesReady","imagesReady","videosReady","videoMetadataReady","meshesBound"],th=class{constructor(e={}){Z(this,"root");Z(this,"radius");Z(this,"scene");Z(this,"camera");Z(this,"defaultCameraPosition");Z(this,"defaultCameraTarget");Z(this,"defaultCameraUp");Z(this,"focusCameraDistance");Z(this,"renderer");Z(this,"controls");Z(this,"raycaster");Z(this,"pointer",new He);Z(this,"loader",new eo);Z(this,"mediaBindings",[]);Z(this,"mediaGroup",new En);Z(this,"clock",new io);Z(this,"loaderOverlay");Z(this,"loaderInner");Z(this,"loaderBarFill");Z(this,"loaderCounter");Z(this,"loaderStatusText");Z(this,"sourceItems");Z(this,"loaderDisplay");Z(this,"loaderDisplayRaf",null);Z(this,"introTimeline",null);Z(this,"focusPixelRatioActive",!1);Z(this,"animationFrame",0);Z(this,"destroyed",!1);Z(this,"mode","idle");Z(this,"featured",null);Z(this,"rollover",null);Z(this,"isDragging",!1);Z(this,"pointerDownTime",0);Z(this,"pointerDownCoords",{x:0,y:0});Z(this,"dragStartedOnMedia",!1);Z(this,"focusState",null);Z(this,"loaderStats");Z(this,"loaderHideTimer",null);Z(this,"loaderSession",0);Z(this,"loaderPaddingTarget",null);Z(this,"inactivityDelay",3500);Z(this,"inactivityTimer",null);Z(this,"screensaverState",{active:!1,direction:1,currentSpeed:0,targetSpeed:0,baseSpeed:.09,rampDuration:2,elapsed:0});Z(this,"screensaverOrientationTween",null);Z(this,"handlePointerMove");Z(this,"handlePointerDown");Z(this,"handlePointerUp");Z(this,"handleResize");Z(this,"handleKeydown");Z(this,"handleControlsStart");Z(this,"handleControlsChange");Z(this,"handleControlsEnd");var h;Cg();let t=this.resolveContainer(e.container),i=t.querySelector("[data-archive-sphere]");this.root=i!=null?i:document.createElement("div"),this.root.dataset.archiveSphere="true",this.root.classList.add("archive-sphere"),i||t.appendChild(this.root),this.setLoadingState(!0),this.loaderStats={totalItems:0,texturesTotal:0,texturesReady:0,imagesTotal:0,imagesReady:0,videosTotal:0,videosReady:0,videoMetadataReady:0,meshesBound:0,webglReady:!1,controlsReady:!1,introComplete:!1,status:"Initializing..."},this.loaderDisplay={texturesReady:0,imagesReady:0,videosReady:0,videoMetadataReady:0,meshesBound:0};let{overlay:n,inner:s,barFill:a,counter:o,status:c}=this.createLoaderOverlay();this.loaderOverlay=n,this.loaderInner=s,this.loaderBarFill=a,this.loaderCounter=o,this.loaderStatusText=c,this.sourceItems=e.items&&e.items.length?this.cloneSourceItems(e.items):null,this.radius=(h=e.radius)!=null?h:gE,this.scene=new ja,this.scene.background=null,this.camera=new Xt(40,1,1,6e3),this.camera.position.set(0,0,this.radius*2),this.defaultCameraPosition=this.camera.position.clone(),this.defaultCameraTarget=new W(0,0,0),this.defaultCameraUp=this.camera.up.clone(),this.focusCameraDistance=Math.max(this.radius*_E,this.radius*1.4);let l=new to(new et("#ffffff"),1.2);this.scene.add(l),this.scene.add(this.mediaGroup),this.renderer=new Yl({antialias:!0,alpha:!0,premultipliedAlpha:!0}),this.applyIdleRendererPixelRatio(),this.renderer.setClearColor(new et("transparent"),0),this.renderer.outputColorSpace=zt,this.renderer.domElement.classList.add("archive-sphere__renderer"),this.renderer.domElement.style.position="absolute",this.root.appendChild(this.renderer.domElement),this.root.appendChild(this.loaderOverlay),this.loaderPaddingTarget=this.resolveLoaderPaddingTarget(),this.updateLoaderPadding(),this.loaderStats.webglReady=!0,this.renderLoaderText(),this.refreshLoaderStatus(),this.controls=new eh(this.camera,this.renderer.domElement),this.controls.rotateSpeed=1.05,this.controls.zoomSpeed=1.2,this.controls.panSpeed=.4,this.controls.noPan=!0,this.controls.noRotate=!1,this.controls.noZoom=!1,this.controls.staticMoving=!1,this.controls.dynamicDampingFactor=Lg,this.controls.minDistance=Math.max(this.radius*vE,80),this.controls.maxDistance=this.radius*xE,this.controls.target.copy(this.defaultCameraTarget),this.controls.handleResize(),this.controls.update(),this.clock.start(),this.loaderStats.controlsReady=!0,this.refreshLoaderStatus(),this.recalcDefaultCameraPose(),this.focusCameraDistance=Math.max(this.focusCameraDistance,this.controls.minDistance*1.6),this.raycaster=new no,this.handlePointerMove=this.onPointerMove.bind(this),this.handlePointerDown=this.onPointerDown.bind(this),this.handlePointerUp=this.onPointerUp.bind(this),this.handleResize=this.onResize.bind(this),this.handleKeydown=this.onKeydown.bind(this),this.handleControlsStart=()=>this.handleUserInteraction(),this.handleControlsChange=()=>this.handleUserInteraction(),this.handleControlsEnd=()=>this.handleUserInteraction(),this.installEvents(),this.onResize()}get viewportWidth(){return this.renderer.domElement.clientWidth||window.innerWidth||1920}get viewportHeight(){return this.renderer.domElement.clientHeight||window.innerHeight||1080}computeFullSphereDistance(e=1.06){let t=this.viewportWidth,i=this.viewportHeight,n=Math.max(1e-4,t/Math.max(1,i)),s=this.camera.fov*Math.PI/180,a=2*Math.atan(Math.tan(s/2)*n),o=this.radius/Math.tan(s/2),c=this.radius/Math.tan(a/2);return Math.max(o,c)*e}computeIdleDistance(){let e=this.computeFullSphereDistance(1.06);if(this.viewportWidth<=900)return Math.max(e*.9,this.controls.minDistance*1.35);let i=this.camera.fov*Math.PI/180,n=this.radius/Math.tan(i/2)*yE;return Math.max(n,this.controls.minDistance*1.6)}applyResponsiveControls(){let t=this.viewportWidth<=900,i=t?.62:1.05,n=t?.9:1.2,s=t?.12:Lg,a=this.camera.position.distanceTo(this.controls.target),o=Math.min(1,Math.max(.45,a/(this.radius*1.25)));this.controls.rotateSpeed=i*o,this.controls.zoomSpeed=n*Math.max(.6,o),this.controls.dynamicDampingFactor=s}recalcDefaultCameraPose(){let e=this.computeIdleDistance(),t=new W(0,0,e);this.defaultCameraPosition.copy(t),this.defaultCameraTarget.set(0,0,0),this.defaultCameraUp.set(0,1,0),this.mode==="idle"&&(this.camera.position.copy(this.defaultCameraPosition),this.controls.target.copy(this.defaultCameraTarget),this.camera.up.copy(this.defaultCameraUp),this.camera.updateProjectionMatrix(),this.controls.update());let i=this.controls.minDistance*1.6,n=this.controls.maxDistance*.7;this.focusCameraDistance=Math.min(Math.max(e*.9,i),n),this.applyResponsiveControls()}computeIdlePixelRatio(){if(typeof window=="undefined")return 1;let e=Number.isFinite(window.devicePixelRatio)?window.devicePixelRatio:1;return Math.min(Math.max(1,e),1.8)}computeFocusPixelRatio(){if(typeof window=="undefined")return 1;let e=Number.isFinite(window.devicePixelRatio)?window.devicePixelRatio:1,t=Math.max(1,e);return Math.min(t,1.8)}applyIdleRendererPixelRatio(){let{renderer:e}=this;if(!e)return;let t=this.computeIdlePixelRatio();Math.abs(e.getPixelRatio()-t)>.001&&e.setPixelRatio(t),this.focusPixelRatioActive=!1}applyFocusRendererPixelRatio(){let{renderer:e}=this;if(!e)return;let t=this.computeFocusPixelRatio();Math.abs(e.getPixelRatio()-t)>.001&&e.setPixelRatio(t),this.focusPixelRatioActive=!0}animateCameraUpTo(e,t,i=.9){var c;let n=e.clone().normalize();(!Number.isFinite(n.lengthSq())||n.lengthSq()<1e-6)&&n.set(0,1,0);let s=this.camera.up.clone().normalize(),a=s.dot(n);if((c=t.upTween)==null||c.kill(),!Number.isFinite(a)||a>.999){this.camera.up.copy(n),this.camera.updateProjectionMatrix(),t.upTween=null;return}let o={t:0};t.upTween=$.to(o,{t:1,duration:i,ease:"power3.inOut",onUpdate:()=>{this.camera.up.copy(s).lerp(n,o.t).normalize(),this.camera.updateProjectionMatrix(),this.controls.update()},onComplete:()=>{this.camera.up.copy(n),this.camera.updateProjectionMatrix()}})}async initialize(){let e=this.resolveMediaSources();e.length&&(await this.populateMedia(e),this.prepareIntroState(),this.animate(),this.playIntroAnimation())}refresh(){if(this.destroyed)return;let e=this.resolveMediaSources();e.length&&(this.releaseFocus(!0),this.disposeMedia(),this.populateMedia(e).then(()=>{this.prepareIntroState(),this.playIntroAnimation()}))}destroy(){var e,t;this.destroyed||(this.destroyed=!0,cancelAnimationFrame(this.animationFrame),this.controls.dispose(),this.releaseFocus(!0),this.disposeMedia(),(e=this.introTimeline)==null||e.kill(),this.introTimeline=null,(t=this.screensaverOrientationTween)==null||t.kill(),this.screensaverOrientationTween=null,this.loaderHideTimer!==null&&(window.clearTimeout(this.loaderHideTimer),this.loaderHideTimer=null),this.loaderDisplayRaf!==null&&(cancelAnimationFrame(this.loaderDisplayRaf),this.loaderDisplayRaf=null),this.inactivityTimer!==null&&(window.clearTimeout(this.inactivityTimer),this.inactivityTimer=null),this.screensaverState.active=!1,this.screensaverState.currentSpeed=0,this.screensaverState.targetSpeed=0,this.screensaverState.rampDuration=0,this.screensaverState.elapsed=0,this.renderer.dispose(),this.root.remove(),this.removeEvents())}resolveContainer(e){if(e instanceof HTMLElement)return e;if(e&&"querySelector"in e){let n=e.querySelector("[data-archive-sphere-root]");if(n)return n}let t=document.querySelector("[data-archive-sphere-root]");if(t)return t;let i=document.querySelector('[data-barba-namespace="archive"]');return i||document.body}installEvents(){this.renderer.domElement.addEventListener("pointermove",this.handlePointerMove),this.renderer.domElement.addEventListener("pointerdown",this.handlePointerDown),window.addEventListener("pointerup",this.handlePointerUp),window.addEventListener("resize",this.handleResize),window.addEventListener("keydown",this.handleKeydown),this.controls.addEventListener("start",this.handleControlsStart),this.controls.addEventListener("change",this.handleControlsChange),this.controls.addEventListener("end",this.handleControlsEnd)}removeEvents(){this.renderer.domElement.removeEventListener("pointermove",this.handlePointerMove),this.renderer.domElement.removeEventListener("pointerdown",this.handlePointerDown),window.removeEventListener("pointerup",this.handlePointerUp),window.removeEventListener("resize",this.handleResize),window.removeEventListener("keydown",this.handleKeydown),this.controls.removeEventListener("start",this.handleControlsStart),this.controls.removeEventListener("change",this.handleControlsChange),this.controls.removeEventListener("end",this.handleControlsEnd)}handleUserInteraction(){this.destroyed||(this.requestScreensaverStop(),this.clearInactivityTimer(),this.scheduleInactivityTimer())}handlePassiveInteraction(){this.destroyed||(this.clearInactivityTimer(),this.scheduleInactivityTimer())}clearInactivityTimer(){this.inactivityTimer!==null&&typeof window!="undefined"&&(window.clearTimeout(this.inactivityTimer),this.inactivityTimer=null)}scheduleInactivityTimer(){this.destroyed||typeof window=="undefined"||this.loaderStats.introComplete&&(this.clearInactivityTimer(),this.inactivityTimer=window.setTimeout(()=>{this.inactivityTimer=null,this.activateScreensaver()},this.inactivityDelay))}activateScreensaver(){if(this.destroyed)return;if(this.mode!=="idle"||!this.mediaBindings.length){this.scheduleInactivityTimer();return}let e=this.screensaverState;e.active=!0,e.direction=1,e.rampDuration=1.1+Math.random()*.7,e.elapsed=e.rampDuration*.12;let t=.7+Math.random()*.6;e.targetSpeed=e.baseSpeed*t*e.direction,e.currentSpeed=e.targetSpeed*.1,this.gentlyRealignOrientation()}deactivateScreensaver(){var t;let e=this.screensaverState;e.active=!1,e.targetSpeed=0,e.rampDuration=0,e.elapsed=0,e.currentSpeed=0,(t=this.screensaverOrientationTween)==null||t.kill(),this.screensaverOrientationTween=null,this.mediaGroup.rotation.x=0,this.mediaGroup.rotation.z=0,this.renderFrame()}requestScreensaverStop(){let e=this.screensaverState;!e.active&&Math.abs(e.currentSpeed)<=1e-4||(e.active=!1,e.targetSpeed=0,e.rampDuration=Math.max(e.rampDuration,.45),e.elapsed=e.rampDuration)}updateScreensaver(e){if(this.destroyed)return;let t=this.screensaverState;if(this.mode!=="idle"&&(t.active||Math.abs(t.currentSpeed)>1e-4)&&this.requestScreensaverStop(),!t.active&&Math.abs(t.currentSpeed)<=1e-4){t.currentSpeed=0;return}let i=t.targetSpeed;if(t.active){t.elapsed+=e;let s=Math.max(1e-4,t.rampDuration),a=Math.min(1,t.elapsed/s),o=a*a*(3-2*a);i=t.targetSpeed*o}if(t.active)t.currentSpeed=i;else{let s=Math.min(1,e*12);t.currentSpeed+=(i-t.currentSpeed)*s}let n=t.currentSpeed;if(Math.abs(n)<=1e-4){t.active||(t.currentSpeed=0);return}this.mediaGroup.rotation.y+=n*e}normalizeAngle(e){let t=Math.PI*2,i=e%t;return i>Math.PI?i-=t:i<-Math.PI&&(i+=t),i}gentlyRealignOrientation(){var n;(n=this.screensaverOrientationTween)==null||n.kill();let e=this.normalizeAngle(this.mediaGroup.rotation.x),t=this.normalizeAngle(this.mediaGroup.rotation.z);this.mediaGroup.rotation.x=e,this.mediaGroup.rotation.z=t;let i=8e-4;if(Math.abs(e)<=i&&Math.abs(t)<=i){this.screensaverOrientationTween=null;return}this.screensaverOrientationTween=$.to(this.mediaGroup.rotation,{x:0,z:0,duration:2.2,ease:"power3.out",overwrite:"auto",onUpdate:()=>{this.controls.update(),this.renderFrame()},onComplete:()=>{this.screensaverOrientationTween=null},onInterrupt:()=>{this.screensaverOrientationTween=null}})}async populateMedia(e){this.prepareLoaderForSources(e);let t=this.loaderSession,i=this.shuffleItems(e),n=i.length;this.mediaGroup.position.set(0,0,0),this.mediaGroup.scale.set(1,1,1),this.mediaGroup.rotation.set(0,0,0);for(let s=0;s<i.length;s+=1){let a=i[s],{material:o,texture:c,videoElement:l,intrinsicAspect:h,intrinsicAspectPromise:u}=await this.createMaterial(a),d=new Br(1,1),f=new Mi(d,o),x=this.normalizeAspect(Number.isFinite(a.aspectRatio)&&a.aspectRatio?a.aspectRatio:h!=null?h:1),g=Rg,m=g*x;f.scale.set(g,m,1);let p=this.computePosition(s,n,this.radius);f.position.copy(p),this.orientMeshOutwards(f),this.mediaGroup.add(f);let S={item:a,mesh:f,material:o,texture:c,videoElement:l,baseScale:{x:g,y:m},hoverTween:null,opacityTween:null,opacityTarget:o.opacity};if(this.mediaBindings.push(S),this.trackMediaBinding(a,t,a.type==="video"?u:void 0),!Number.isFinite(a.aspectRatio)||!a.aspectRatio){let y=w=>{this.destroyed||w===void 0||w===null||!this.mediaBindings.includes(S)||this.updateBindingAspect(S,w)};h&&Math.abs(h-x)>.001&&y(h),u==null||u.then(w=>{y(w)}).catch(()=>{})}}i.length&&(this.mediaGroup.rotation.y=Math.random()*Math.PI*2,this.mediaGroup.rotation.x=(Math.random()-.5)*.35)}disposeMedia(){this.mediaBindings.forEach(e=>{e.mesh.geometry.dispose(),e.material.dispose(),e.texture.dispose(),e.videoElement&&(e.videoElement.pause(),e.videoElement.removeAttribute("src"),e.videoElement.load())}),this.mediaGroup.clear(),this.mediaBindings.length=0}resolveMediaSources(){var e;return this.sourceItems?this.cloneSourceItems(this.sourceItems):wg((e=this.root.parentElement)!=null?e:document)}cloneSourceItems(e){return e.map(t=>({...t,metadata:t.metadata?{...t.metadata}:void 0}))}shuffleItems(e){let t=e.slice();for(let i=t.length-1;i>0;i-=1){let n=Math.floor(Math.random()*(i+1)),s=t[i];t[i]=t[n],t[n]=s}return t}computePosition(e,t,i){if(t<=1)return new W(0,0,i);let n=1-e/(t-1)*2,s=Math.sqrt(Math.max(0,1-n*n)),a=mE*e,o=Math.cos(a)*s,c=Math.sin(a)*s;return new W(o,n,c).multiplyScalar(i)}orientMeshOutwards(e){let t=e.position.clone().normalize();e.lookAt(t.clone().multiplyScalar(this.radius*2))}createLoaderOverlay(){let e=document.createElement("div");e.className="archive-sphere__loader";let t=document.createElement("div");t.className="archive-sphere__loader-inner";let i=document.createElement("div");i.className="archive-sphere__loader-bar";let n=document.createElement("div");n.className="archive-sphere__loader-bar-fill",i.appendChild(n);let s=document.createElement("div");s.className="archive-sphere__loader-meta text-size-small";let a=document.createElement("span");a.className="archive-sphere__loader-status text-size-small",a.textContent="Loading media...";let o=document.createElement("span");return o.className="archive-sphere__loader-counter text-size-small",o.textContent="0/0",s.appendChild(a),s.appendChild(o),t.appendChild(i),t.appendChild(s),e.appendChild(t),{overlay:e,inner:t,barFill:n,counter:o,status:a}}renderLoaderText(){let e=this.loaderStats,t=this.loaderDisplay,i=e.texturesTotal>0?e.texturesTotal:Math.max(e.totalItems,e.texturesTotal),n=i>0?Math.min(t.texturesReady,i):0,s=0;i>0?s=n/Math.max(1,i):e.introComplete&&(s=1),s=Math.min(1,Math.max(0,s)),this.loaderBarFill.style.width=`${Math.round(s*100)}%`,this.loaderCounter.textContent=this.formatLoaderCount(n,i),this.loaderStatusText.textContent=e.status}resolveLoaderPaddingTarget(){var n;let e=this.root.closest('[data-barba-namespace="archive"]'),i=((n=e!=null?e:this.root.parentElement)!=null?n:document.body).querySelector(".padding-global");return i!=null?i:null}updateLoaderPadding(){this.loaderPaddingTarget=null,this.loaderInner.style.paddingLeft="0px",this.loaderInner.style.paddingRight="0px"}setLoadingState(e){e?this.root.classList.add("is-loading"):this.root.classList.remove("is-loading")}hasDisplayLag(){return qd.some(e=>this.loaderDisplay[e]!==this.loaderStats[e])}scheduleLoaderRender(){this.loaderDisplayRaf!==null||this.destroyed||(this.loaderDisplayRaf=requestAnimationFrame(()=>this.advanceLoaderDisplay()))}fadeOutLoaderImmediately(){!this.loaderOverlay||this.destroyed||this.loaderOverlay.classList.contains("is-hidden")||this.setLoaderVisible(!1,0)}advanceLoaderDisplay(){if(this.destroyed){this.loaderDisplayRaf=null;return}this.loaderDisplayRaf=null;let e=this.stepLoaderDisplay();this.renderLoaderText(),this.maybeHideLoader(),e&&this.scheduleLoaderRender()}stepLoaderDisplay(){let e=!1;for(let t of qd){let i=this.loaderStats[t],n=this.loaderDisplay[t];if(n===i)continue;e=!0;let s=i-n,a=Math.abs(s),o=Math.ceil(a*.18),c=a>10?Math.min(a,Math.max(1,Math.floor(Math.random()*Math.min(6,a)))):0,l=Math.max(1,o+c),h=s>0?1:-1,u=n+h*l;h>0&&u>i||h<0&&u<i?this.loaderDisplay[t]=i:this.loaderDisplay[t]=u}return e}prepareLoaderForSources(e){this.loaderHideTimer!==null&&(window.clearTimeout(this.loaderHideTimer),this.loaderHideTimer=null),this.loaderSession+=1,this.loaderPaddingTarget=this.resolveLoaderPaddingTarget(),this.updateLoaderPadding(),this.setLoadingState(!0);let t=e.filter(n=>n.type==="image").length,i=e.filter(n=>n.type==="video").length;this.loaderStats={...this.loaderStats,totalItems:e.length,texturesTotal:e.length,texturesReady:0,imagesTotal:t,imagesReady:0,videosTotal:i,videosReady:0,videoMetadataReady:0,meshesBound:0,introComplete:!1},qd.forEach(n=>{this.loaderDisplay[n]=0}),this.setLoaderVisible(!0),this.renderLoaderText(),this.refreshLoaderStatus()}setLoaderVisible(e,t=0){if(!this.loaderOverlay||this.destroyed)return;if(e){this.loaderHideTimer!==null&&(window.clearTimeout(this.loaderHideTimer),this.loaderHideTimer=null),this.loaderOverlay.classList.remove("is-hidden");return}let i=()=>{this.loaderOverlay.classList.add("is-hidden"),this.loaderHideTimer=null};this.loaderHideTimer!==null&&(window.clearTimeout(this.loaderHideTimer),this.loaderHideTimer=null),t>0?this.loaderHideTimer=window.setTimeout(i,t):i()}trackMediaBinding(e,t,i){if(!(t!==this.loaderSession||this.destroyed)){if(this.loaderStats.meshesBound=Math.min(this.loaderStats.meshesBound+1,this.loaderStats.totalItems),this.loaderStats.texturesReady=Math.min(this.loaderStats.texturesReady+1,this.loaderStats.texturesTotal),e.type==="image")this.loaderStats.imagesReady=Math.min(this.loaderStats.imagesReady+1,this.loaderStats.imagesTotal);else{this.loaderStats.videosReady=Math.min(this.loaderStats.videosReady+1,this.loaderStats.videosTotal);let n=()=>{t!==this.loaderSession||this.destroyed||this.markVideoMetadataReady(t)};i==null||i.then(n).catch(n)}this.refreshLoaderStatus()}}markVideoMetadataReady(e){e!==this.loaderSession||this.destroyed||this.loaderStats.videosTotal<=0||this.loaderStats.videoMetadataReady>=this.loaderStats.videosTotal||(this.loaderStats.videoMetadataReady=Math.min(this.loaderStats.videoMetadataReady+1,this.loaderStats.videosTotal),this.refreshLoaderStatus(),this.maybeHideLoader())}formatLoaderCount(e,t){return t<=0?"0/0":`${Math.min(t,Math.max(0,Math.round(e)))}/${t}`}refreshLoaderStatus(){let e=this.loaderStats;e.status="Loading media...",this.renderLoaderText(),this.hasDisplayLag()&&this.scheduleLoaderRender()}completeLoaderSequence(e){e!==this.loaderSession||this.destroyed||this.loaderStats.introComplete||(this.loaderStats.introComplete=!0,this.setLoadingState(!1),this.refreshLoaderStatus(),this.maybeHideLoader(),this.handleUserInteraction())}maybeHideLoader(){this.destroyed||this.loaderStats.introComplete&&(this.loaderStats.texturesTotal>0&&this.loaderStats.texturesReady<this.loaderStats.texturesTotal||this.loaderStats.videosTotal>0&&this.loaderStats.videoMetadataReady<this.loaderStats.videosTotal||this.hasDisplayLag()||this.loaderOverlay.classList.contains("is-hidden")||this.setLoaderVisible(!1,900))}normalizeAspect(e){return!Number.isFinite(e)||!e?1:Math.min(Math.max(e,.05),20)}updateBindingAspect(e,t){var u,d,f,x;let i=this.normalizeAspect(t),n=e.baseScale.x||Rg,s=n*i;e.baseScale.x=n,e.baseScale.y=s;let a=this.featured===e&&((u=this.focusState)==null?void 0:u.binding)===e,c=this.rollover===e&&!a?Xd:1,l=n*c,h=s*c;if(a&&this.focusState){let g=this.getFocusPose(e);(d=this.focusState.scaleTween)==null||d.kill(),this.focusState.scaleTween=$.to(e.mesh.scale,{x:g.scaledW,y:g.scaledH,duration:.45,ease:"power3.out",overwrite:"auto"});let m=this.mode!=="focused";(f=this.focusState.cameraTween)==null||f.kill(),this.focusState.cameraTween=$.to(this.camera.position,{x:g.camPos.x,y:g.camPos.y,z:g.camPos.z,duration:.6,ease:"power3.inOut",overwrite:"auto",onUpdate:()=>{this.controls.update()},onComplete:()=>{m&&(this.mode="focused",this.updateVideoPlayback(),e.videoElement&&e.videoElement.play().catch(()=>{}))}}),(x=this.focusState.targetTween)==null||x.kill(),this.focusState.targetTween=$.to(this.controls.target,{x:g.target.x,y:g.target.y,z:g.target.z,duration:.6,ease:"power3.inOut",overwrite:"auto",onUpdate:()=>{this.controls.update()}});return}$.to(e.mesh.scale,{x:l,y:h,duration:.25,ease:"power2.out",overwrite:"auto"})}async createMaterial(e){var o,c,l,h;if(e.type==="video"){let u=document.createElement("video");u.preload="metadata",u.loop=!0,u.muted=!0,u.autoplay=!0,u.playsInline=!0,u.crossOrigin="anonymous",u.setAttribute("playsinline","true"),u.setAttribute("muted","true"),u.src=e.src;let d=()=>{u.play().catch(()=>{})};u.addEventListener("loadeddata",d,{once:!0}),d();let f=()=>{},x=!1,g=null,m=A=>{x||(x=!0,f(A))},p=new Promise(A=>{f=A}),S=()=>{let A=u.videoWidth,T=u.videoHeight;A>0&&T>0?m(T/A):m(null)};if(u.readyState>=HTMLMediaElement.HAVE_METADATA&&u.videoWidth>0&&u.videoHeight>0){let A=u.videoWidth,T=u.videoHeight;g=A>0&&T>0?T/A:null,m(g)}else u.addEventListener("loadedmetadata",S,{once:!0}),u.addEventListener("error",()=>{m(null)},{once:!0});let y=new $a(u);y.minFilter=Dt,y.magFilter=Dt,y.colorSpace=zt,y.generateMipmaps=!1,y.premultiplyAlpha=!0,y.needsUpdate=!0;let w=new Qn({map:y,transparent:!0,depthWrite:!1,side:Ei,alphaTest:.001});return w.premultipliedAlpha=!0,{material:w,texture:y,videoElement:u,intrinsicAspect:g,intrinsicAspectPromise:p}}let t=await this.loader.loadAsync(e.src);t.colorSpace=zt,t.generateMipmaps=!0,t.minFilter=rn,t.magFilter=Dt,t.premultiplyAlpha=!0,t.needsUpdate=!0;let i=this.renderer.capabilities.getMaxAnisotropy();i>1&&(t.anisotropy=Math.min(i,4));let n=null,s=t.image;if(s){let u=(c=(o=s.naturalWidth)!=null?o:s.width)!=null?c:0,d=(h=(l=s.naturalHeight)!=null?l:s.height)!=null?h:0;u>0&&d>0&&(n=d/u)}let a=new Qn({map:t,transparent:!0,depthWrite:!1,side:Ei,alphaTest:.001});return a.premultipliedAlpha=!0,{material:a,texture:t,intrinsicAspect:n}}onPointerMove(e){if(this.isDragging){this.handleUserInteraction();return}this.handlePassiveInteraction();let t=this.renderer.domElement.getBoundingClientRect();this.pointer.x=(e.clientX-t.left)/t.width*2-1,this.pointer.y=-((e.clientY-t.top)/t.height)*2+1,this.updateHover()}onPointerDown(e){if(this.handleUserInteraction(),e.button!==0)return;let t=this.renderer.domElement.getBoundingClientRect();this.pointer.x=(e.clientX-t.left)/t.width*2-1,this.pointer.y=-((e.clientY-t.top)/t.height)*2+1,this.isDragging=!0,this.pointerDownTime=performance.now(),this.pointerDownCoords={x:e.clientX,y:e.clientY},this.dragStartedOnMedia=!!this.pickBindingAtPointer()}onPointerUp(e){if(this.handleUserInteraction(),!this.isDragging)return;this.isDragging=!1;let t=performance.now()-this.pointerDownTime,i=Math.hypot(e.clientX-this.pointerDownCoords.x,e.clientY-this.pointerDownCoords.y),n=i<12&&t<250,s=!n&&i>=4;if(this.dragStartedOnMedia&&s&&this.renderer.domElement.classList.remove("is-hovering"),this.dragStartedOnMedia=!1,!n)return;let a=this.renderer.domElement.getBoundingClientRect();this.pointer.x=(e.clientX-a.left)/a.width*2-1,this.pointer.y=-((e.clientY-a.top)/a.height)*2+1,this.handleClick()}onResize(){this.handleUserInteraction();let e=this.viewportWidth,t=this.viewportHeight;this.camera.aspect=Math.max(1e-4,e/Math.max(1,t)),this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t,!1),this.focusPixelRatioActive?this.applyFocusRendererPixelRatio():this.applyIdleRendererPixelRatio(),this.controls.handleResize(),this.recalcDefaultCameraPose(),this.updateLoaderPadding(),this.renderFrame()}onKeydown(e){if(this.handleUserInteraction(),e.key==="Escape"){this.releaseFocus();return}if(!this.featured||this.mode!=="focused"||!["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(e.key))return;let i=this.mediaBindings.filter(a=>a!==this.featured);if(!i.length)return;e.preventDefault();let n=Math.floor(Math.random()*i.length),s=i[n];this.focusBinding(s)}updateHover(){var i,n;if(this.mode==="transitioning"){this.clearRollover(),this.renderer.domElement.classList.remove("is-hovering");return}let e=this.pickBindingAtPointer(),t=!!(e&&e!==this.featured);this.renderer.domElement.classList.toggle("is-hovering",t),e!==this.rollover&&(this.rollover&&this.rollover!==this.featured&&((i=this.rollover.hoverTween)==null||i.kill(),$.to(this.rollover.mesh.scale,{x:this.rollover.baseScale.x,y:this.rollover.baseScale.y,duration:.22,ease:"power2.out"})),this.rollover=e||null,this.rollover&&this.rollover!==this.featured&&((n=this.rollover.hoverTween)==null||n.kill(),this.rollover.hoverTween=$.to(this.rollover.mesh.scale,{x:this.rollover.baseScale.x*Xd,y:this.rollover.baseScale.y*Xd,duration:.28,ease:"power2.out"})),this.setMediaOpacity(this.featured,this.rollover))}clearRollover(e){var t;this.rollover&&(e&&this.rollover===e||((t=this.rollover.hoverTween)==null||t.kill(),this.rollover.mesh.scale.set(this.rollover.baseScale.x,this.rollover.baseScale.y,1),this.rollover=null,this.renderer.domElement.classList.remove("is-hovering")))}handleClick(){this.handleUserInteraction();let e=this.pickBindingAtPointer();if(e){if(this.featured&&e===this.featured)return;this.focusBinding(e);return}(this.mode==="focused"||this.mode==="transitioning")&&this.releaseFocus()}pickBindingAtPointer(){var i;this.raycaster.setFromCamera(this.pointer,this.camera);let e=this.raycaster.intersectObjects(this.mediaGroup.children,!1);if(!e.length)return null;let t=e[0].object;return(i=this.mediaBindings.find(n=>n.mesh===t))!=null?i:null}getFocusPose(e){let i=this.renderer.domElement.clientWidth||window.innerWidth||1920,n=this.renderer.domElement.clientHeight||window.innerHeight||1080,s=i/n,a=e.baseScale.x*1.85,o=e.baseScale.y*1.85,c=this.camera.fov*Math.PI/180,l=2*Math.atan(Math.tan(c/2)*s),h=o/.86/(2*Math.tan(c/2)),u=a/.86/(2*Math.tan(l/2)),d=Math.max(h,u);this.mediaGroup.updateMatrixWorld(!0);let f=e.mesh.getWorldPosition(new W),x=f.clone().normalize(),g=this.controls.minDistance*1.2,m=this.controls.maxDistance*.7,p=Math.min(Math.max(d,g),m),S=f.clone().add(x.multiplyScalar(p)),y=f,w=e.mesh.getWorldQuaternion(new bi),A=new W(0,1,0).applyQuaternion(w).normalize();return(!Number.isFinite(A.lengthSq())||Math.abs(A.dot(x))>.985)&&A.set(0,1,0),{camPos:S,target:y,up:A,scaledW:a,scaledH:o}}setMediaOpacity(e,t,i=.25){let n=!!e;this.mediaBindings.forEach(s=>{var l,h;let a=!!(e&&s===e),c=a||!!(t&&s===t&&!a)?1:n?.5:1;if(s.material.transparent=!0,i<=0){(l=s.opacityTween)==null||l.kill(),s.opacityTween=null,s.material.opacity=c,s.opacityTarget=c;return}s.opacityTarget!==void 0&&Math.abs(s.opacityTarget-c)<.001||(s.opacityTarget=c,(h=s.opacityTween)==null||h.kill(),s.opacityTween=$.to(s.material,{opacity:c,duration:i,ease:"power2.out",overwrite:"auto",onComplete:()=>{s.opacityTween=null,s.opacityTarget=c}}))})}updateVideoPlayback(){}focusBinding(e){var n,s,a,o,c;if(this.handleUserInteraction(),this.mode==="transitioning")return;this.clearRollover(e),this.renderer.domElement.classList.remove("is-hovering"),(n=e.hoverTween)==null||n.kill(),this.mode="transitioning",this.applyFocusRendererPixelRatio(),this.root.classList.add("archive-sphere--focused"),document.body.classList.add("archive-sphere--focused");let t=this.getFocusPose(e);this.focusState&&((s=this.focusState.cameraTween)==null||s.kill(),(a=this.focusState.targetTween)==null||a.kill(),(o=this.focusState.scaleTween)==null||o.kill(),(c=this.focusState.upTween)==null||c.kill()),this.featured&&this.featured!==e&&$.to(this.featured.mesh.scale,{x:this.featured.baseScale.x,y:this.featured.baseScale.y,duration:.35,ease:"power2.out"}),this.featured=e,this.rollover=null,this.focusState={binding:e};let i=this.focusState;i&&this.animateCameraUpTo(t.up,i,.9),this.setMediaOpacity(this.featured,null,.9),this.focusState.scaleTween=$.to(e.mesh.scale,{x:t.scaledW,y:t.scaledH,duration:.6,ease:"power3.out"}),this.focusState.cameraTween=$.to(this.camera.position,{x:t.camPos.x,y:t.camPos.y,z:t.camPos.z,duration:.9,ease:"power3.inOut",onUpdate:()=>{this.controls.update()},onComplete:()=>{this.mode="focused",this.updateVideoPlayback(),e.videoElement&&e.videoElement.play().catch(()=>{})}}),this.focusState.targetTween=$.to(this.controls.target,{x:t.target.x,y:t.target.y,z:t.target.z,duration:.9,ease:"power3.inOut",onUpdate:()=>{this.controls.update()}})}releaseFocus(e=!1){var s,a,o,c,l,h,u;if(this.handleUserInteraction(),this.mode==="idle"){this.applyIdleRendererPixelRatio(),this.root.classList.remove("archive-sphere--focused"),document.body.classList.remove("archive-sphere--focused"),this.renderer.domElement.classList.remove("is-hovering"),this.clearRollover(),this.rollover=null,this.featured=null,this.setMediaOpacity(null,null,0);return}let t=this.focusState;this.focusState=null,this.mode="transitioning",(s=t==null?void 0:t.cameraTween)==null||s.kill(),(a=t==null?void 0:t.targetTween)==null||a.kill(),(o=t==null?void 0:t.scaleTween)==null||o.kill(),(c=t==null?void 0:t.upTween)==null||c.kill();let i=(l=t==null?void 0:t.binding)!=null?l:null;if(this.clearRollover(),this.rollover=null,this.renderer.domElement.classList.remove("is-hovering"),this.featured=null,e){i&&((h=i.hoverTween)==null||h.kill(),i.mesh.scale.set(i.baseScale.x,i.baseScale.y,1)),this.setMediaOpacity(null,null,0),this.camera.position.copy(this.defaultCameraPosition),this.controls.target.copy(this.defaultCameraTarget),this.camera.up.copy(this.defaultCameraUp),this.camera.updateProjectionMatrix(),this.controls.update(),this.mode="idle",this.root.classList.remove("archive-sphere--focused"),document.body.classList.remove("archive-sphere--focused"),this.updateVideoPlayback(),this.applyIdleRendererPixelRatio();return}this.setMediaOpacity(null,null,.9),i&&((u=i.hoverTween)==null||u.kill(),$.to(i.mesh.scale,{x:i.baseScale.x,y:i.baseScale.y,duration:.5,ease:"power2.out"}));let n=()=>{this.mode="idle",this.root.classList.remove("archive-sphere--focused"),document.body.classList.remove("archive-sphere--focused"),this.updateVideoPlayback(),this.applyIdleRendererPixelRatio()};$.to(this.camera.position,{x:this.defaultCameraPosition.x,y:this.defaultCameraPosition.y,z:this.defaultCameraPosition.z,duration:.9,ease:"power3.inOut",onUpdate:()=>{this.controls.update()}}),$.to(this.controls.target,{x:this.defaultCameraTarget.x,y:this.defaultCameraTarget.y,z:this.defaultCameraTarget.z,duration:.9,ease:"power3.inOut",onUpdate:()=>{this.controls.update()},onComplete:n}),this.camera.up.copy(this.defaultCameraUp),this.camera.updateProjectionMatrix()}prepareIntroState(){var e;(e=this.introTimeline)==null||e.kill(),this.introTimeline=null,this.controls.enabled=!1,this.mediaGroup.position.set(0,-this.radius*.32,0),this.mediaGroup.scale.set(.8,.8,.8),this.mediaGroup.rotation.x=.35+(Math.random()-.5)*.25,this.mediaBindings.forEach(t=>{t.material.transparent=!0,t.material.opacity=0}),this.renderFrame()}playIntroAnimation(){var t;(t=this.introTimeline)==null||t.kill();let e=this.loaderSession;if(this.introTimeline=$.timeline({defaults:{ease:"power3.out"},onUpdate:()=>this.renderFrame(),onComplete:()=>{this.mediaGroup.scale.set(1,1,1),this.mediaGroup.position.set(0,0,0),this.mediaGroup.rotation.x=0,this.controls.enabled=!0,this.recalcDefaultCameraPose(),this.controls.update(),this.renderFrame(),this.completeLoaderSequence(e)}}),this.introTimeline.to(this.mediaGroup.position,{y:0,duration:1.6},0),this.introTimeline.to(this.mediaGroup.scale,{x:1,y:1,z:1,duration:1.6},0),this.introTimeline.to(this.mediaGroup.rotation,{x:0,y:this.mediaGroup.rotation.y+Math.PI*.6,duration:2.25,ease:"power2.out"},0),this.mediaBindings.forEach((i,n)=>{var s;i.material.opacity=0,i.material.transparent=!0,(s=this.introTimeline)==null||s.to(i.material,{opacity:1,duration:.9,ease:"power2.out"},.4+n*.02)}),this.mediaBindings.length&&this.introTimeline.call(()=>{this.fadeOutLoaderImmediately()},[],.4),this.mediaBindings.length){let i=.4+(this.mediaBindings.length-1)*.02+.9;this.introTimeline.call(()=>{this.controls.enabled=!0,this.controls.update(),this.renderFrame(),this.completeLoaderSequence(e)},[],i)}else this.fadeOutLoaderImmediately(),this.controls.enabled=!0,this.completeLoaderSequence(e)}animate(){if(this.destroyed)return;this.animationFrame=requestAnimationFrame(()=>this.animate());let e=this.clock.getDelta();this.applyResponsiveControls(),this.controls.update(),this.updateScreensaver(e),this.renderFrame()}renderFrame(){this.destroyed||this.renderer.render(this.scene,this.camera)}}});var Dg={};ef(Dg,{destroyArchiveSphere:()=>SE,initializeArchiveSphere:()=>bE,refreshArchiveSphere:()=>ME});async function bE(r){return ar||po||(po=(async()=>{try{let e={container:r},t=typeof window!="undefined"?window.innerWidth<=480:!1,i=t&&wu.length?wu:Cm,n=t&&Eu.length?Eu:Pm,s=[...i,...n];s.length>0&&(e.items=s);let a=new th(e);return await a.initialize(),a?(ar=a,a):null}catch{return null}finally{po=null}})(),po)}function SE(){ar&&(ar.destroy(),ar=null)}function ME(){ar&&ar.refresh()}var ar,po,Og=Zt(()=>{"use strict";Rm();Ig();ar=null,po=null});var cn=sv(tf(),1);var hh=(r=document)=>r.documentElement.getAttribute("data-wf-site");var uh=async r=>{var t,i;let{Webflow:e}=window;if(!(!e||!("destroy"in e)||!("ready"in e)||!("require"in e))&&!(r&&!r.length)){if(r||(e.destroy(),e.ready()),!r||r.includes("ix2")){let n=e.require("ix2");if(n){let{store:s,actions:a}=n,{eventState:o}=s.getState().ixSession,c=Object.entries(o);r||n.destroy(),n.init(),await Promise.all(c.map(l=>s.dispatch(a.eventStateChanged(...l))))}}if(!r||r.includes("commerce")){let n=e.require("commerce"),s=hh();n&&s&&(n.destroy(),n.init({siteId:s,apiUrl:"https://render.webflow.com"}))}if(r!=null&&r.includes("lightbox")&&((t=e.require("lightbox"))==null||t.ready()),r!=null&&r.includes("slider")){let n=e.require("slider");n&&(n.redraw(),n.ready())}return r!=null&&r.includes("tabs")&&((i=e.require("tabs"))==null||i.redraw()),new Promise(n=>e.push(()=>n(void 0)))}};hi();hi();var kx=Object.create,{getPrototypeOf:zx,defineProperty:up,getOwnPropertyNames:Hx}=Object,Vx=Object.prototype.hasOwnProperty,Gx=(r,e,t)=>{t=r!=null?kx(zx(r)):{};let i=e||!r||!r.__esModule?up(t,"default",{value:r,enumerable:!0}):t;for(let n of Hx(r))Vx.call(i,n)||up(i,n,{get:()=>r[n],enumerable:!0});return i},Wx=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports),Xx=Wx((r,e)=>{(function(t,i){typeof r=="object"&&typeof e!="undefined"?e.exports=i():typeof define=="function"&&define.amd?define(i):(t||self).virtualScroll=i()})(r,function(){var t=0;function i(g){return"__private_"+t+++"_"+g}function n(g,m){if(!Object.prototype.hasOwnProperty.call(g,m))throw new TypeError("attempted to use private field on non-instance");return g}function s(){}s.prototype={on:function(g,m,p){var S=this.e||(this.e={});return(S[g]||(S[g]=[])).push({fn:m,ctx:p}),this},once:function(g,m,p){var S=this;function y(){S.off(g,y),m.apply(p,arguments)}return y._=m,this.on(g,y,p)},emit:function(g){for(var m=[].slice.call(arguments,1),p=((this.e||(this.e={}))[g]||[]).slice(),S=0,y=p.length;S<y;S++)p[S].fn.apply(p[S].ctx,m);return this},off:function(g,m){var p=this.e||(this.e={}),S=p[g],y=[];if(S&&m)for(var w=0,A=S.length;w<A;w++)S[w].fn!==m&&S[w].fn._!==m&&y.push(S[w]);return y.length?p[g]=y:delete p[g],this}};var a=s;a.TinyEmitter=s;var o,c="virtualscroll",l=i("options"),h=i("el"),u=i("emitter"),d=i("event"),f=i("touchStart"),x=i("bodyTouchAction");return(function(){function g(p){var S=this;Object.defineProperty(this,l,{writable:!0,value:void 0}),Object.defineProperty(this,h,{writable:!0,value:void 0}),Object.defineProperty(this,u,{writable:!0,value:void 0}),Object.defineProperty(this,d,{writable:!0,value:void 0}),Object.defineProperty(this,f,{writable:!0,value:void 0}),Object.defineProperty(this,x,{writable:!0,value:void 0}),this._onWheel=function(y){var w=n(S,l)[l],A=n(S,d)[d];A.deltaX=y.wheelDeltaX||-1*y.deltaX,A.deltaY=y.wheelDeltaY||-1*y.deltaY,o.isFirefox&&y.deltaMode===1&&(A.deltaX*=w.firefoxMultiplier,A.deltaY*=w.firefoxMultiplier),A.deltaX*=w.mouseMultiplier,A.deltaY*=w.mouseMultiplier,S._notify(y)},this._onMouseWheel=function(y){var w=n(S,d)[d];w.deltaX=y.wheelDeltaX?y.wheelDeltaX:0,w.deltaY=y.wheelDeltaY?y.wheelDeltaY:y.wheelDelta,S._notify(y)},this._onTouchStart=function(y){var w=y.targetTouches?y.targetTouches[0]:y;n(S,f)[f].x=w.pageX,n(S,f)[f].y=w.pageY},this._onTouchMove=function(y){var w=n(S,l)[l];w.preventTouch&&!y.target.classList.contains(w.unpreventTouchClass)&&y.preventDefault();var A=n(S,d)[d],T=y.targetTouches?y.targetTouches[0]:y;A.deltaX=(T.pageX-n(S,f)[f].x)*w.touchMultiplier,A.deltaY=(T.pageY-n(S,f)[f].y)*w.touchMultiplier,n(S,f)[f].x=T.pageX,n(S,f)[f].y=T.pageY,S._notify(y)},this._onKeyDown=function(y){var w=n(S,d)[d];w.deltaX=w.deltaY=0;var A=window.innerHeight-40;switch(y.keyCode){case 37:case 38:w.deltaY=n(S,l)[l].keyStep;break;case 39:case 40:w.deltaY=-n(S,l)[l].keyStep;break;case 32:w.deltaY=A*(y.shiftKey?1:-1);break;default:return}S._notify(y)},n(this,h)[h]=window,p&&p.el&&(n(this,h)[h]=p.el,delete p.el),o||(o={hasWheelEvent:"onwheel"in document,hasMouseWheelEvent:"onmousewheel"in document,hasTouch:"ontouchstart"in document,hasTouchWin:navigator.msMaxTouchPoints&&navigator.msMaxTouchPoints>1,hasPointer:!!window.navigator.msPointerEnabled,hasKeyDown:"onkeydown"in document,isFirefox:navigator.userAgent.indexOf("Firefox")>-1}),n(this,l)[l]=Object.assign({mouseMultiplier:1,touchMultiplier:2,firefoxMultiplier:15,keyStep:120,preventTouch:!1,unpreventTouchClass:"vs-touchmove-allowed",useKeyboard:!0,useTouch:!0},p),n(this,u)[u]=new a,n(this,d)[d]={y:0,x:0,deltaX:0,deltaY:0},n(this,f)[f]={x:null,y:null},n(this,x)[x]=null,n(this,l)[l].passive!==void 0&&(this.listenerOptions={passive:n(this,l)[l].passive})}var m=g.prototype;return m._notify=function(p){var S=n(this,d)[d];S.x+=S.deltaX,S.y+=S.deltaY,n(this,u)[u].emit(c,{x:S.x,y:S.y,deltaX:S.deltaX,deltaY:S.deltaY,originalEvent:p})},m._bind=function(){o.hasWheelEvent&&n(this,h)[h].addEventListener("wheel",this._onWheel,this.listenerOptions),o.hasMouseWheelEvent&&n(this,h)[h].addEventListener("mousewheel",this._onMouseWheel,this.listenerOptions),o.hasTouch&&n(this,l)[l].useTouch&&(n(this,h)[h].addEventListener("touchstart",this._onTouchStart,this.listenerOptions),n(this,h)[h].addEventListener("touchmove",this._onTouchMove,this.listenerOptions)),o.hasPointer&&o.hasTouchWin&&(n(this,x)[x]=document.body.style.msTouchAction,document.body.style.msTouchAction="none",n(this,h)[h].addEventListener("MSPointerDown",this._onTouchStart,!0),n(this,h)[h].addEventListener("MSPointerMove",this._onTouchMove,!0)),o.hasKeyDown&&n(this,l)[l].useKeyboard&&document.addEventListener("keydown",this._onKeyDown)},m._unbind=function(){o.hasWheelEvent&&n(this,h)[h].removeEventListener("wheel",this._onWheel),o.hasMouseWheelEvent&&n(this,h)[h].removeEventListener("mousewheel",this._onMouseWheel),o.hasTouch&&(n(this,h)[h].removeEventListener("touchstart",this._onTouchStart),n(this,h)[h].removeEventListener("touchmove",this._onTouchMove)),o.hasPointer&&o.hasTouchWin&&(document.body.style.msTouchAction=n(this,x)[x],n(this,h)[h].removeEventListener("MSPointerDown",this._onTouchStart,!0),n(this,h)[h].removeEventListener("MSPointerMove",this._onTouchMove,!0)),o.hasKeyDown&&n(this,l)[l].useKeyboard&&document.removeEventListener("keydown",this._onKeyDown)},m.on=function(p,S){n(this,u)[u].on(c,p,S);var y=n(this,u)[u].e;y&&y[c]&&y[c].length===1&&this._bind()},m.off=function(p,S){n(this,u)[u].off(c,p,S);var y=n(this,u)[u].e;(!y[c]||y[c].length<=0)&&this._unbind()},m.destroy=function(){n(this,u)[u].off(),this._unbind()},g})()})}),qx=Gx(Xx(),1);function dp(r,e,t,i){let n=1-Math.exp(-t*i);return r+(e-r)*n}function fp(r,e){let t=r%e;return Math.abs(t)>e/2&&(t=t>0?t-e:t+e),t}var Yx={infinite:!0,snap:!0,dragSensitivity:.005,lerpFactor:.3,scrollSensitivity:1,snapStrength:.1,speedDecay:.85,bounceLimit:1,virtualScroll:{mouseMultiplier:.5,touchMultiplier:2,firefoxMultiplier:30,useKeyboard:!1,passive:!0},setOffset:({itemWidth:r,wrapperWidth:e})=>r,scrollInput:!1},cs,xa,ls,mn,Hn,gn,hs,We,pp,ko,mp,ou,gp,ma,ga,va,vp,xp,_p,cu,au=class{constructor(e,t={}){ln(this,We);Z(this,"speed",0);ln(this,cs,0);ln(this,xa,0);ln(this,ls,0);Z(this,"deltaTime",0);ln(this,mn,!0);ln(this,Hn,!1);ln(this,gn,0);ln(this,hs,0);Z(this,"config");Z(this,"wrapper");Z(this,"items");Z(this,"viewport");Z(this,"isDragging",!1);Z(this,"dragStart",0);Z(this,"dragStartTarget",0);Z(this,"isVisible",!1);Z(this,"current",0);Z(this,"target",0);Z(this,"maxScroll",0);Z(this,"resizeTimeout");Z(this,"virtualScroll");Z(this,"observer");Z(this,"touchStartY");Z(this,"touchStartX");Z(this,"touchPreviousX");Z(this,"scrollDirection");Z(this,"parallaxValues");Z(this,"webglValue",0);Z(this,"onSlideChange");Z(this,"onResize");Z(this,"onUpdate");this.config={...Yx,...t},t.onSlideChange&&(this.onSlideChange=t.onSlideChange),t.onResize&&(this.onResize=t.onResize),t.onUpdate&&(this.onUpdate=t.onUpdate),delete this.config.onSlideChange,delete this.config.onResize,delete this.config.onUpdate,this.wrapper=e,this.items=[...e.children],this.current=0,this.target=0,this.isDragging=!1,this.dragStart=0,this.dragStartTarget=0,this.isVisible=!1,Kt(this,gn,0),Kt(this,hs,0),ft(this,We,ko).call(this),ft(this,We,pp).call(this),ft(this,We,mp).call(this),this.wrapper.style.cursor="grab",ft(this,We,ko).call(this),ft(this,We,gp).call(this)}update(){var t;if(!this.isVisible||!$t(this,mn))return;let e=performance.now();if(this.deltaTime=(e-$t(this,ls))/1e3,Kt(this,ls,e),this.config.snap&&!this.isDragging){let i=Math.round(this.target)-this.target;this.target+=i*this.config.snapStrength}if(this.current=dp(this.current,this.target,1/this.config.lerpFactor,this.deltaTime),this.config.infinite){let i=Math.round(-this.current),n=this.items.length,s=(i%n+n)%n;ft(this,We,cu).call(this,s),ft(this,We,xp).call(this)}else ft(this,We,cu).call(this,Math.round(Math.abs(this.current))),ft(this,We,vp).call(this);ft(this,We,_p).call(this),(t=this.onUpdate)==null||t.call(this,this)}goToNext(){this.config.infinite?this.target=Math.round(this.target-1):this.target=Math.max(this.maxScroll,Math.round(this.target-1))}goToPrev(){this.config.infinite?this.target=Math.round(this.target+1):this.target=Math.min(0,Math.round(this.target+1))}goToIndex(e){this.target=-e}set snap(e){this.config.snap=e}getProgress(){let e=this.items.length;return Math.abs(this.current)%e/e}destroy(){this.kill(),window.removeEventListener("mousemove",e=>ft(this,We,ga).call(this,e)),window.removeEventListener("mouseup",()=>ft(this,We,va).call(this)),window.removeEventListener("touchmove",e=>{let t=e.touches[0];ft(this,We,ga).call(this,t)}),window.removeEventListener("touchend",()=>ft(this,We,va).call(this)),this.wrapper.removeEventListener("mousedown",e=>ft(this,We,ma).call(this,e)),this.wrapper.removeEventListener("touchstart",e=>{let t=e.touches[0];ft(this,We,ma).call(this,t)}),this.resizeTimeout&&clearTimeout(this.resizeTimeout),this.virtualScroll&&this.config.scrollInput&&this.virtualScroll.destroy(),this.observer&&this.observer.disconnect()}get currentSlide(){return $t(this,gn)}kill(){Kt(this,mn,!1),this.items.forEach(e=>{e.style.transform=""}),this.current=0,this.target=0,this.speed=0,Kt(this,cs,0),this.touchPreviousX=void 0}init(){Kt(this,mn,!0),Kt(this,ls,performance.now())}set paused(e){Kt(this,Hn,e)}get paused(){return $t(this,Hn)}get progress(){if(this.config.infinite){let e=-this.target,t=this.items.length;return(e%t+t)%t/(t-1)}else{let e=Math.abs(this.current),t=Math.abs(this.maxScroll);return Math.max(0,Math.min(1,e/t))}}resize(){ft(this,We,ko).call(this);let e=$t(this,mn),t=this.isVisible;Kt(this,mn,!0),this.isVisible=!0,this.update(),Kt(this,mn,e),this.isVisible=t}};cs=new WeakMap,xa=new WeakMap,ls=new WeakMap,mn=new WeakMap,Hn=new WeakMap,gn=new WeakMap,hs=new WeakMap,We=new WeakSet,pp=function(){let e={root:null,rootMargin:"50px",threshold:0};this.observer=new IntersectionObserver(t=>{t.forEach(i=>{this.isVisible=i.isIntersecting})},e),this.observer.observe(this.wrapper)},ko=function(){this.viewport={itemWidth:this.items[0].getBoundingClientRect().width,wrapperWidth:this.wrapper.clientWidth,totalWidth:this.items.reduce((e,t)=>e+t.clientWidth,0)},Kt(this,xa,this.config.setOffset(this.viewport)),this.maxScroll=-(this.viewport.totalWidth-$t(this,xa))/this.viewport.itemWidth,queueMicrotask(()=>{var e;(e=this.onResize)==null||e.call(this,this)})},mp=function(){let e=c=>ft(this,We,ma).call(this,c),t=c=>ft(this,We,ga).call(this,c),i=()=>ft(this,We,va).call(this);this.wrapper.addEventListener("mousedown",e),window.addEventListener("mousemove",t),window.addEventListener("mouseup",i);let n=5,s=c=>{let l=c.touches[0];this.touchStartY=l.clientY,this.touchStartX=l.clientX,this.touchPreviousX=l.clientX,this.scrollDirection=void 0,ft(this,We,ma).call(this,l)},a=c=>{let l=c.touches[0],h=Math.abs(l.clientY-this.touchStartY),u=Math.abs(l.clientX-this.touchStartX);!this.scrollDirection&&(u>n||h>n)&&(this.scrollDirection=u>h?"horizontal":"vertical"),this.scrollDirection==="horizontal"&&(c.preventDefault(),ft(this,We,ga).call(this,l),this.touchPreviousX=l.clientX)},o=()=>{this.scrollDirection=void 0,this.touchPreviousX=void 0,ft(this,We,va).call(this)};this.wrapper.addEventListener("touchstart",s),window.addEventListener("touchmove",a,{passive:!1}),window.addEventListener("touchend",o),new ResizeObserver(()=>{this.resizeTimeout&&clearTimeout(this.resizeTimeout),this.resizeTimeout=setTimeout(()=>this.resize(),10)}).observe(this.wrapper)},ou=function(e){if(!this.config.infinite){if(e>this.config.bounceLimit)return this.config.bounceLimit;if(e<this.maxScroll-this.config.bounceLimit)return this.maxScroll-this.config.bounceLimit}return e},gp=function(){this.virtualScroll=new qx.default({...this.config.virtualScroll,el:this.wrapper});let e=5;this.virtualScroll.on(t=>{if(!this.isDragging&&!$t(this,Hn)){if(t.touchDevice){let s=Math.abs(t.deltaY),a=Math.abs(t.deltaX);if(s<e&&a<e||s>a)return}let i=(this.config.scrollInput?Math.abs(t.deltaX)>Math.abs(t.deltaY)?t.deltaX:t.deltaY:t.deltaX)*this.config.scrollSensitivity*.001,n=this.target+i;this.config.infinite||(n>0?n=0:n<this.maxScroll&&(n=this.maxScroll)),this.target=ft(this,We,ou).call(this,n),this.speed=-i*10}})},ma=function(e){$t(this,Hn)||(this.isDragging=!0,this.dragStart=e.clientX,this.dragStartTarget=this.target,this.wrapper.style.cursor="grabbing")},ga=function(e){if(!this.isDragging||$t(this,Hn))return;let t=e.clientX-this.dragStart,i=this.dragStartTarget+t*this.config.dragSensitivity;if(this.target=ft(this,We,ou).call(this,i),"movementX"in e)this.speed+=e.movementX*.01;else{let n=e.clientX,s=this.touchPreviousX||n,a=n-s;this.speed+=a*.01}},va=function(){if(this.isDragging=!1,this.wrapper.style.cursor="grab",!this.config.infinite){if(this.target>0)this.target=0;else if(this.target<this.maxScroll)this.target=this.maxScroll;else if(this.config.snap){let e=Math.round(this.target);this.target=Math.min(0,Math.max(this.maxScroll,e))}}else this.config.snap&&(this.target=Math.round(this.target))},vp=function(){this.parallaxValues=this.items.map((e,t)=>{let i=this.current*this.viewport.itemWidth;return e.style.transform=`translateX(${i}px)`,i})},xp=function(){this.parallaxValues=this.items.map((e,t)=>{let i=this.current+t,n=(fp(i,this.items.length)-t)*this.viewport.itemWidth;return e.style.transform=`translateX(${n}px)`,fp(i,this.items.length)})},_p=function(){Kt(this,cs,dp($t(this,cs),this.speed,1/this.config.lerpFactor,this.deltaTime)),this.speed*=this.config.speedDecay},cu=function(e){var t;$t(this,gn)!==e&&(Kt(this,hs,$t(this,gn)),Kt(this,gn,e),(t=this.onSlideChange)==null||t.call(this,$t(this,gn),$t(this,hs)))};var yp=au;Ho();var wp=(()=>{var r,e;return typeof window=="undefined"||typeof document=="undefined"?0:window.innerWidth||((r=document.documentElement)==null?void 0:r.clientWidth)||((e=document.body)==null?void 0:e.clientWidth)||0})(),Ii=new Map,Sr=null,ba=400,Cp="video[data-src-1080], video[data-src-720]",t_={root:null,rootMargin:`${ba}px 0px`,threshold:[0,.5,1]};function i_(){return Sr||(Sr=new IntersectionObserver(n_,t_)),Sr}function n_(r){r.forEach(e=>{let{target:t}=e;if(!(t instanceof HTMLVideoElement))return;let i=Ii.get(t);if(!i)return;i.lastIntersection=e;let n=i.sliderRoot?Pp(i.sliderRoot):r_(e);if(i.isInViewport=n,i.isFilteredOut||i.suppressed){n?i.sliderRoot&&Sa(i):Vo(i);return}n?Sa(i):Vo(i)})}function r_(r){let e=window.innerHeight||document.documentElement.clientHeight||0,{top:t,bottom:i}=r.boundingClientRect;return i>-ba&&t<e+ba}function Pp(r){let e=window.innerHeight||document.documentElement.clientHeight||0,t=r.getBoundingClientRect();return t.bottom>-ba&&t.top<e+ba}function s_(r,e){if(r==null||r==="")return e;let t=r.trim().toLowerCase();return["false","0","no"].includes(t)?!1:["true","1","yes"].includes(t)?!0:e}function a_(r){var i;if(r.lockedSource)return r.lockedSource;let{hd:e,sd:t}=r.sources;return e&&t?e:(i=e!=null?e:t)!=null?i:null}function Sa(r){let{video:e}=r,t=a_(r);if(!t||(r.currentSource!==t?(lu(e,t),r.currentSource=t):e.currentSrc||lu(e,t),!r.shouldAutoplay))return;e.readyState<HTMLMediaElement.HAVE_ENOUGH_DATA&&e.load();let i=e.play();i&&typeof i.catch=="function"&&i.catch(()=>{})}function Vo(r){let{video:e}=r;e.pause()}function lu(r,e){r.setAttribute("src",e),r.load()}function o_(r){let e=Rp(r.video);if(!e){r.isFilteredOut=!1;return}let t=new MutationObserver(()=>{Ep(r)});t.observe(e,{attributes:!0,attributeFilter:["style","class"]}),r.mutationObserver=t,Ep(r)}function Ep(r){r.filterCheckHandle!==void 0&&cancelAnimationFrame(r.filterCheckHandle),r.filterCheckHandle=requestAnimationFrame(()=>{r.filterCheckHandle=void 0,c_(r)})}function c_(r){let e=Rp(r.video);if(!e){r.isFilteredOut&&(r.isFilteredOut=!1,r.isInViewport&&Sa(r));return}let t=window.getComputedStyle(e),i=t.display==="none"||t.visibility==="hidden"||Number.parseFloat(t.opacity)===0;i!==r.isFilteredOut&&(r.isFilteredOut=i,i?Vo(r):r.isInViewport&&Sa(r))}function Rp(r){var e;return(e=r.closest(".project-div, .project-item, [data-filter-card], [data-project-card]"))!=null?e:null}function l_(r){var e;(e=r.mutationObserver)==null||e.disconnect(),r.filterCheckHandle!==void 0&&(cancelAnimationFrame(r.filterCheckHandle),r.filterCheckHandle=void 0),r.isFilteredOut=!1,r.suppressed=!1,r.isInViewport=!1,r.sliderRoot=null,Vo(r),r.video.removeAttribute("data-mp4-initialized")}function du(r){return r.dataset.src1080&&r.dataset.src1080.trim().length>0||r.dataset.src720&&r.dataset.src720.trim().length>0||r.hasAttribute("data-src-1080")||r.hasAttribute("data-src-720")}function h_(r){r.muted=!0,r.loop=!0,r.preload="metadata",r.playsInline=!0,r.controls=!1,r.setAttribute("muted",""),r.setAttribute("playsinline",""),r.setAttribute("preload","metadata"),r.setAttribute("loop",""),r.removeAttribute("controls")}function u_(r){var i,n,s,a;let e=(n=(i=r.dataset.src1080)!=null?i:r.getAttribute("data-src-1080"))!=null?n:void 0,t=(a=(s=r.dataset.src720)!=null?s:r.getAttribute("data-src-720"))!=null?a:void 0;return{hd:(e==null?void 0:e.trim())||void 0,sd:(t==null?void 0:t.trim())||void 0}}function Lp(r){return r||document}function d_(r){var t;if(r instanceof HTMLVideoElement)return r.matches("video[data-src-1080], video[data-src-720]")?[r]:[];let e=r instanceof Document?r:(t=r.shadowRoot)!=null?t:r;return Array.from(e.querySelectorAll(Cp))}function f_(r,e){return e instanceof Document?!0:e.contains(r)}function hu(r){if(Ii.has(r)||!du(r))return;h_(r);let e=u_(r),t=g_(e),i={video:r,sources:e,currentSource:null,lockedQuality:t.quality,lockedSource:t.src,shouldAutoplay:s_(r.dataset.autoplay,!0),isFilteredOut:!1,suppressed:!1,isInViewport:!1,sliderRoot:void 0};Ii.set(r,i),r.dataset.mp4Initialized="true",i.lockedSource&&(lu(r,i.lockedSource),i.currentSource=i.lockedSource),o_(i),i_().observe(r)}function Tp(r,e){r.sliderRoot=e,r.suppressed=!1,r.isFilteredOut=!1;let t=Pp(e);r.isInViewport=t,t&&Sa(r)}function vn(r){let e=Lp(r);_a(e);let t=d_(e);t.length&&t.forEach(i=>{if(!Ii.has(i)&&du(i)){if(br(i)){ya(i,()=>{hu(i)});return}hu(i)}})}function Go(r){if(!Ii.size)return;let e=Lp(r);Array.from(Ii.keys()).filter(i=>f_(i,e)).forEach(i=>{let n=Ii.get(i);if(!n)return;let s=Sr;s&&s.unobserve(i),l_(n),Ii.delete(i)}),Sr&&Ii.size===0&&(Sr.disconnect(),Sr=null),Mp(e)}function p_(r){let e=[".embla__slide:not(.is-clone)",".slide",".swiper-slide",".w-slide","[data-slide]","[data-slider-slide]"],t=[];return e.forEach(i=>{r.querySelectorAll(i).forEach(s=>{t.includes(s)||t.push(s)})}),t.length||t.push(r),t}function m_(r,e){return e<=0||r<0?0:r>=e?e-1:r}var uu=class{constructor(e,t={}){Z(this,"root");Z(this,"slides");Z(this,"debounceMs");Z(this,"activeIndex",0);Z(this,"destroyed",!1);Z(this,"debounceTimer",null);var i;this.root=e,this.debounceMs=Math.max(0,(i=t.debounceMs)!=null?i:120),this.slides=t.slides&&t.slides.length?[...t.slides]:p_(e),Ap(this.root,this.root),this.slides.forEach((n,s)=>{this.setSlideState(n,s===this.activeIndex)})}onSlideChange(e){if(this.destroyed||!this.slides.length)return;let t=m_(e,this.slides.length);if(t===this.activeIndex)return;let i=()=>{this.destroyed||(this.setSlideState(this.slides[this.activeIndex],!1),this.activeIndex=t,this.setSlideState(this.slides[this.activeIndex],!0))};this.debounceMs>0?(this.debounceTimer!==null&&window.clearTimeout(this.debounceTimer),this.debounceTimer=window.setTimeout(i,this.debounceMs)):i()}destroy(){this.destroyed||(this.destroyed=!0,this.debounceTimer!==null&&(window.clearTimeout(this.debounceTimer),this.debounceTimer=null),this.slides.forEach(e=>this.setSlideState(e,!1)),Go(this.root))}setSlideState(e,t){e&&Ap(e,this.root)}};function Ip(r,e={}){return new uu(r,e)}function Ap(r,e){_a(r),vn(r),r.querySelectorAll(Cp).forEach(i=>{let n=Ii.get(i);if(n){Tp(n,e);return}du(i)&&ya(i,()=>{Ii.has(i)||hu(i);let s=Ii.get(i);s&&Tp(s,e)})})}function g_(r){var n,s;let t=wp>0&&wp<=720?["sd","hd"]:["hd","sd"];for(let a of t){let o=a==="hd"?r.hd:r.sd;if(o&&o.trim().length>0)return{quality:a,src:o}}let i=(s=(n=r.hd)!=null?n:r.sd)!=null?s:null;return{quality:null,src:i!=null?i:null}}var Ma={infinite:!0,snap:!0,dragSensitivity:.005,lerpFactor:.3,scrollSensitivity:1,snapStrength:.1,speedDecay:.85,bounceLimit:1,scrollInput:!0},Dp={mouseMultiplier:.5,touchMultiplier:2,firefoxMultiplier:30,useKeyboard:!1,passive:!0},us={enabled:!0,speed:.12,direction:"forward",pauseOnHover:!1,pauseOnInteraction:!0,resumeDelay:1800,initialDelay:1200},v_=5.6,x_=.0115,pu=new Map,fu={speedThreshold:.35,settleDelay:160,dispatchThrottle:90},Wo=".slide, [data-slider-slide], .slider-item";function Op(r){let e=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:void 0,t=e==null?void 0:e.crypto;return t&&typeof t.randomUUID=="function"?`${r}-${t.randomUUID()}`:`${r}-${Math.random().toString(36).slice(2,10)}-${Date.now()}`}function Fp(r,e,t){r.setAttribute("data-smooothy-instance",e),r.dataset.smooothyManaged="true",pu.set(e,t)}var ds=class{constructor(e){this.options=e;Z(this,"wrapperEl",null);Z(this,"hostEl",null);Z(this,"slider",null);Z(this,"entranceTimeline",null);Z(this,"sliderVideoController",null);Z(this,"tickerFn",null);Z(this,"isInitialized",!1);Z(this,"teardownCallbacks",[]);Z(this,"clones",[]);Z(this,"autoScrollState",null);Z(this,"touchHoverConfig",null);Z(this,"touchHoverEnabled",!1);Z(this,"touchHoverState",{pointerActive:!1,pointerType:"touch",settleHandle:null});Z(this,"hoverSyncState",{pointerInside:!1,lastPointer:null,lastMovementTime:0,lastDispatchTime:0,activeSlide:null});Z(this,"coarsePointerEnvironment",!1);Z(this,"keyboardOptions",null);Z(this,"keyboardHandler",null);Z(this,"keyboardListenerTarget",null);Z(this,"keyboardListenerIsWindow",!1);Z(this,"bumpSpacingOptions",null);Z(this,"bumpSpacingState",{compression:0});Z(this,"parallaxOptions",null);Z(this,"parallaxTargets",[]);Z(this,"speedState",{lerped:0})}get initialized(){return this.isInitialized}registerPointerObservers(){var S;if(!this.wrapperEl||typeof window=="undefined")return;let e=this.wrapperEl,t="PointerEvent"in window,i=!!(this.touchHoverEnabled&&((S=this.touchHoverConfig)!=null&&S.pointerTypes.has("touch"))),n={capture:!0},s={capture:!0,passive:!0},a=null,o=null,c=null,l=y=>{this.shouldHandlePointer(y.pointerType)&&(this.hoverSyncState.pointerInside=!0,this.storePointer(y),this.syncActiveSlideFromPointer(y),this.setAutoScrollHoverState(!0))},h=y=>{this.shouldHandlePointer(y.pointerType)&&(this.hoverSyncState.pointerInside=!0,this.storePointer(y),this.syncActiveSlideFromPointer(y),this.setAutoScrollHoverState(!0))},u=y=>{if(!this.shouldHandlePointer(y.pointerType))return;if(i&&this.isTouchHoverPointer(y.pointerType)){this.endTouchHover(y);return}this.hoverSyncState.pointerInside=!1;let w=this.snapshotPointer(y);this.hoverSyncState.lastPointer=null,this.clearSyntheticHover(w),this.setAutoScrollHoverState(!1)},d=y=>{if(!this.shouldHandlePointer(y.pointerType))return;if(i&&this.isTouchHoverPointer(y.pointerType)){this.endTouchHover(y,{cancelled:!0});return}this.hoverSyncState.pointerInside=!1;let w=this.snapshotPointer(y);this.hoverSyncState.lastPointer=null,this.clearSyntheticHover(w),this.setAutoScrollHoverState(!1)},f=y=>{!i||!this.isTouchHoverPointer(y.pointerType)||this.beginTouchHover(y)},x=y=>{!i||!this.isTouchHoverPointer(y.pointerType)||this.endTouchHover(y)},g=y=>{this.hoverSyncState.pointerInside=!0,this.storePointer(y),this.syncActiveSlideFromPointer(y),this.setAutoScrollHoverState(!0)},m=y=>{this.hoverSyncState.pointerInside=!0,this.storePointer(y),this.syncActiveSlideFromPointer(y),this.setAutoScrollHoverState(!0)},p=y=>{this.hoverSyncState.pointerInside=!1;let w=this.snapshotPointer(y);this.hoverSyncState.lastPointer=null,this.clearSyntheticHover(w),this.setAutoScrollHoverState(!1)};t?(e.addEventListener("pointerenter",l),e.addEventListener("pointermove",h),e.addEventListener("pointerleave",u),e.addEventListener("pointercancel",d),i&&(e.addEventListener("pointerdown",f,n),e.addEventListener("pointerup",x,n))):(e.addEventListener("mouseenter",g),e.addEventListener("mousemove",m),e.addEventListener("mouseleave",p),i&&(a=y=>{this.beginTouchHover(y)},o=y=>{this.endTouchHover(y)},c=y=>{this.endTouchHover(y,{cancelled:!0})},e.addEventListener("touchstart",a,s),e.addEventListener("touchend",o),e.addEventListener("touchcancel",c))),this.teardownCallbacks.push(()=>{t?(e.removeEventListener("pointerenter",l),e.removeEventListener("pointermove",h),e.removeEventListener("pointerleave",u),e.removeEventListener("pointercancel",d),i&&(e.removeEventListener("pointerdown",f,n),e.removeEventListener("pointerup",x,n))):(e.removeEventListener("mouseenter",g),e.removeEventListener("mousemove",m),e.removeEventListener("mouseleave",p),i&&a&&o&&c&&(e.removeEventListener("touchstart",a,s),e.removeEventListener("touchend",o),e.removeEventListener("touchcancel",c)))})}beginTouchHover(e){var n;if(!this.touchHoverEnabled||!((n=this.touchHoverConfig)!=null&&n.pointerTypes.has("touch")))return;this.touchHoverState.pointerActive=!0,this.touchHoverState.pointerType="touch",this.hoverSyncState.pointerInside=!0,this.storePointer(e);let t=this.snapshotPointer(e,"touch"),i=this.findSlideFromEvent(e,t);i&&this.applySyntheticHover(i,t),this.cancelTouchHoverSettle(),this.setAutoScrollHoverState(!0)}endTouchHover(e,t={}){var n;if(!this.touchHoverEnabled||!((n=this.touchHoverConfig)!=null&&n.pointerTypes.has("touch")))return;let{cancelled:i=!1}=t;this.touchHoverState.pointerActive=!1,this.hoverSyncState.pointerInside=!1,e&&this.storePointer(e),this.hoverSyncState.lastPointer=null,this.cancelTouchHoverSettle(),this.touchHoverConfig.revertToFeaturedOnRelease!==!1?this.scheduleFeaturedHoverSync(this.touchHoverState.pointerType):i&&this.clearSyntheticHover(),this.setAutoScrollHoverState(!1)}scheduleFeaturedHoverSync(e,t=10){var n,s,a;if(!this.touchHoverEnabled||!((n=this.touchHoverConfig)!=null&&n.pointerTypes.has("touch"))||this.touchHoverConfig.revertToFeaturedOnRelease===!1)return;if(typeof window=="undefined"){this.syncHoverToSlide((a=(s=this.slider)==null?void 0:s.currentSlide)!=null?a:0,e);return}this.cancelTouchHoverSettle();let i=o=>{var u,d;let{slider:c}=this;if(!c){this.touchHoverState.settleHandle=null;return}let l=Math.abs(c.target-Math.round(c.target)),h=Math.abs(c.speed);if(!c.isDragging&&l<=.02&&h<=.02){this.syncHoverToSlide((u=c.currentSlide)!=null?u:0,e),this.touchHoverState.settleHandle=null;return}if(o<=0){this.syncHoverToSlide((d=c.currentSlide)!=null?d:0,e),this.touchHoverState.settleHandle=null;return}this.touchHoverState.settleHandle=window.requestAnimationFrame(()=>i(o-1))};this.touchHoverState.settleHandle=window.requestAnimationFrame(()=>i(t))}cancelTouchHoverSettle(){this.touchHoverState.settleHandle!==null&&typeof window!="undefined"&&(cancelAnimationFrame(this.touchHoverState.settleHandle),this.touchHoverState.settleHandle=null)}syncHoverToSlide(e,t){var s;if(!this.touchHoverEnabled||!((s=this.touchHoverConfig)!=null&&s.pointerTypes.has("touch")))return;let i=this.getSliderItemForIndex(e);if(!i)return;let n=this.createPointerSnapshotForElement(i,t);this.applySyntheticHover(i,n),this.hoverSyncState.lastPointer=n}getSliderItemForIndex(e){var s;if(!this.slider||!Array.isArray(this.slider.items)||this.slider.items.length===0)return null;let{items:t}=this.slider,i=t.length;if(!Number.isFinite(e)||i===0)return null;let n=(Math.round(e)%i+i)%i;return(s=t[n])!=null?s:null}createPointerSnapshotForElement(e,t){let i=e.getBoundingClientRect();return{clientX:i.left+i.width/2,clientY:i.top+i.height/2,pointerType:t}}findSlideFromEvent(e,t){var s;let{target:i}=e;if(i instanceof HTMLElement){let a=i.closest(Wo);if(a)return a}if(typeof document=="undefined")return null;let n=document.elementFromPoint(t.clientX,t.clientY);return(s=n==null?void 0:n.closest(Wo))!=null?s:null}normalizePointerType(e){return e==="mouse"||e==="pen"||e==="touch"?e:"unknown"}isTouchHoverPointer(e){var i;return e?this.normalizePointerType(e)==="touch"&&!!(this.touchHoverEnabled&&((i=this.touchHoverConfig)!=null&&i.pointerTypes.has("touch"))):!1}setAutoScrollHoverState(e){let t=this.autoScrollState;if(t){if(!t.config.pauseOnHover){t.hovering=e;return}if(t.hovering!==e)if(t.hovering=e,e&&t.config.pauseOnHover){let i=this.getNow();t.pausedUntil=Math.max(t.pausedUntil,i+t.config.resumeDelay),t.interacting=!0}else!e&&t.config.pauseOnHover&&(t.pausedUntil=Math.max(t.pausedUntil,this.getNow()+t.config.resumeDelay))}}markAutoScrollInteraction(){let e=this.autoScrollState;if(!e||!e.config.pauseOnInteraction)return;let t=this.getNow();e.interacting=!0,e.pausedUntil=Math.max(e.pausedUntil,t+e.config.resumeDelay),this.setAutoScrollActive(!1)}setAutoScrollActive(e){let{slider:t}=this,i=this.autoScrollState;if(!(!t||!i))if(e){if(i.snapDisabled)return;i.snapDisabled=!0,t.snap=!1}else{if(!i.snapDisabled)return;i.snapDisabled=!1,t.snap=i.originalSnap,t.target=t.current,t.speed=0}}registerAutoScrollInteractionHandlers(){if(!this.wrapperEl||typeof window=="undefined")return;let e=this.autoScrollState;if(!e||!e.config.pauseOnInteraction)return;let t=this.wrapperEl,i="PointerEvent"in window,n={capture:!0},s={capture:!0,passive:!0},a={capture:!0},o=typeof document!="undefined",c=()=>{this.markAutoScrollInteraction()},l=()=>{this.markAutoScrollInteraction()},h=()=>{this.markAutoScrollInteraction()},u=d=>{if(!this.wrapperEl)return;let{target:f}=d;f instanceof Node&&this.wrapperEl.contains(f)&&this.markAutoScrollInteraction()};i?(t.addEventListener("pointerdown",c,n),t.addEventListener("pointerup",c,n),t.addEventListener("pointercancel",c,n)):(t.addEventListener("mousedown",c,n),t.addEventListener("mouseup",c,n),t.addEventListener("mouseleave",c,n),t.addEventListener("touchstart",l,s),t.addEventListener("touchend",l,s),t.addEventListener("touchcancel",l,s)),t.addEventListener("wheel",h,a),o&&document.addEventListener("keydown",u,!0),this.teardownCallbacks.push(()=>{i?(t.removeEventListener("pointerdown",c,n),t.removeEventListener("pointerup",c,n),t.removeEventListener("pointercancel",c,n)):(t.removeEventListener("mousedown",c,n),t.removeEventListener("mouseup",c,n),t.removeEventListener("mouseleave",c,n),t.removeEventListener("touchstart",l,s),t.removeEventListener("touchend",l,s),t.removeEventListener("touchcancel",l,s)),t.removeEventListener("wheel",h,a),o&&document.removeEventListener("keydown",u,!0)})}normalizeAutoScrollOptions(e){var a,o,c,l;if(!e||!((a=e.enabled)!=null?a:!0))return null;let i=(h,u,d=0)=>{let f=typeof h=="number"&&Number.isFinite(h)?h:u;return Math.max(d,f)},n=i(e.speed,us.speed);return{enabled:!0,speed:this.coarsePointerEnvironment?n*1.25:n,direction:(o=e.direction)!=null?o:us.direction,pauseOnHover:(c=e.pauseOnHover)!=null?c:us.pauseOnHover,pauseOnInteraction:(l=e.pauseOnInteraction)!=null?l:us.pauseOnInteraction,resumeDelay:i(e.resumeDelay,us.resumeDelay),initialDelay:i(e.initialDelay,us.initialDelay)}}normalizeTouchHoverOptions(e){var s,a,o,c,l;if(!e||!((s=e.enabled)!=null?s:!0))return null;let i=new Set;return((a=e.pointerTypes)!=null?a:["touch"]).forEach(h=>{(h==="touch"||h==="mouse"||h==="pen")&&i.add(h)}),i.size||i.add("touch"),{pointerTypes:i,coarseOnly:(o=e.coarseOnly)!=null?o:!0,applyInitialFeatured:(c=e.applyInitialFeatured)!=null?c:!0,revertToFeaturedOnRelease:(l=e.revertToFeaturedOnRelease)!=null?l:!0}}normalizeKeyboardOptions(e){var i,n,s,a;return((i=e==null?void 0:e.enabled)!=null?i:!0)?{target:(n=e==null?void 0:e.target)!=null?n:"window",ignoreInputs:(s=e==null?void 0:e.ignoreInputs)!=null?s:!0,allowWhileHidden:(a=e==null?void 0:e.allowWhileHidden)!=null?a:!1}:null}normalizeBumpSpacingOptions(e){var o;if(!((o=e==null?void 0:e.enabled)!=null?o:!0))return null;let i=(c,l,h)=>Math.min(Math.max(c,l),h),n=typeof(e==null?void 0:e.maxCompression)=="number"&&Number.isFinite(e.maxCompression)?e.maxCompression:.22,s=typeof(e==null?void 0:e.speedMultiplier)=="number"&&Number.isFinite(e.speedMultiplier)?e.speedMultiplier:1.15,a=typeof(e==null?void 0:e.smoothing)=="number"&&Number.isFinite(e.smoothing)?e.smoothing:.25;return{maxCompression:i(n,0,.6),speedMultiplier:Math.max(0,s),smoothing:i(a,.05,.9)}}normalizeParallaxOptions(e){var s,a;if(!((s=e==null?void 0:e.enabled)!=null?s:!0))return null;let i=typeof(e==null?void 0:e.maxOffset)=="number"&&Number.isFinite(e.maxOffset)?e.maxOffset:48,n=typeof(e==null?void 0:e.speedInfluence)=="number"&&Number.isFinite(e.speedInfluence)?e.speedInfluence:120;return{selector:(a=e==null?void 0:e.selector)!=null?a:"[data-slider-parallax]",axis:(e==null?void 0:e.axis)==="y"?"y":"x",maxOffset:i,speedInfluence:n}}detectCoarsePointerEnvironment(){if(typeof window=="undefined")return!1;let e=typeof navigator!="undefined"?navigator:null;if(typeof(e==null?void 0:e.maxTouchPoints)=="number"&&e.maxTouchPoints>0||typeof(e==null?void 0:e.msMaxTouchPoints)=="number"&&e.msMaxTouchPoints>0)return!0;if(typeof window.matchMedia=="function"){try{if(window.matchMedia("(pointer: coarse)").matches)return!0}catch{}try{if(window.matchMedia("(hover: none)").matches)return!0}catch{}}return"ontouchstart"in window}isFormField(e){return e?!!(e instanceof HTMLInputElement||e instanceof HTMLTextAreaElement||e instanceof HTMLSelectElement||e instanceof HTMLElement&&(e.isContentEditable||e.getAttribute("role")==="textbox")):!1}isInsideSlider(e){return!e||!(e instanceof Node)?!1:!!(this.hostEl&&this.hostEl.contains(e)||this.wrapperEl&&this.wrapperEl.contains(e))}initializeTouchHover(e){var t;this.cancelTouchHoverSettle(),this.touchHoverState.pointerActive=!1,this.touchHoverState.pointerType="touch",this.touchHoverConfig=this.normalizeTouchHoverOptions(this.options.touchHover),this.touchHoverEnabled=!1,this.touchHoverConfig&&this.touchHoverConfig.pointerTypes.has("touch")&&(this.touchHoverConfig.coarseOnly&&!this.detectCoarsePointerEnvironment()||(this.touchHoverEnabled=!0,this.touchHoverState.pointerType="touch",this.touchHoverConfig.applyInitialFeatured&&this.syncHoverToSlide((t=e.currentSlide)!=null?t:0,this.touchHoverState.pointerType)))}handleTouchHoverSlideChange(e){var t;this.touchHoverEnabled&&((t=this.touchHoverConfig)==null?void 0:t.revertToFeaturedOnRelease)!==!1&&(this.touchHoverState.pointerActive||this.syncHoverToSlide(e,this.touchHoverState.pointerType))}registerKeyboardControls(e){var s;if(typeof window=="undefined")return;this.unregisterKeyboardControls();let t=this.keyboardOptions;if(!t)return;let i=t.target==="host"?(s=this.hostEl)!=null?s:this.wrapperEl:null,n=a=>{var d,f,x;if(!this.slider||this.slider!==e||a.defaultPrevented||a.metaKey||a.ctrlKey||a.altKey)return;let o=(d=typeof document!="undefined"?document.activeElement:null)!=null?d:null,c=(f=a.target)!=null?f:o;if(t.ignoreInputs&&this.isFormField(c))return;let l=this.isInsideSlider(c);if(!l&&!this.hoverSyncState.pointerInside&&!t.allowWhileHidden&&!e.isVisible)return;let h=!1,{key:u}=a;if(/^[0-9]$/.test(u)){let g=Number.parseInt(u,10);Number.isNaN(g)||(e.config.infinite||g<e.items.length)&&(e.goToIndex(g),h=!0)}else switch(u){case"ArrowLeft":case"ArrowUp":e.goToNext(),h=!0;break;case"ArrowRight":case"ArrowDown":e.goToPrev(),h=!0;break;case" ":case"Spacebar":e.goToNext(),h=!0;break;case"Home":e.goToIndex(0),h=!0;break;case"End":{let g=e.items.length?e.items.length-1:0;e.goToIndex(g),h=!0;break}}h&&(a.preventDefault(),this.markAutoScrollInteraction(),!l&&!this.hoverSyncState.pointerInside&&this.syncHoverToSlide((x=e.currentSlide)!=null?x:0,this.touchHoverState.pointerType))};i?(i.addEventListener("keydown",n),this.keyboardListenerTarget=i,this.keyboardListenerIsWindow=!1):(window.addEventListener("keydown",n),this.keyboardListenerTarget=window,this.keyboardListenerIsWindow=!0),this.keyboardHandler=n,this.teardownCallbacks.push(()=>{this.unregisterKeyboardControls()})}unregisterKeyboardControls(){this.keyboardListenerTarget&&this.keyboardHandler&&(this.keyboardListenerIsWindow&&typeof window!="undefined"?this.keyboardListenerTarget.removeEventListener("keydown",this.keyboardHandler):this.keyboardListenerTarget.removeEventListener("keydown",this.keyboardHandler)),this.keyboardListenerTarget=null,this.keyboardHandler=null,this.keyboardListenerIsWindow=!1}registerParallaxTargets(e){this.parallaxTargets=[];let t=this.parallaxOptions;t&&e.items.forEach((i,n)=>{i.querySelectorAll(t.selector).forEach(o=>{var m,p,S;let c=(m=o.dataset.sliderParallaxDepth)!=null?m:o.dataset.parallaxDepth,l=c?Number.parseFloat(c):1,h=(p=o.dataset.sliderParallaxSpeed)!=null?p:o.dataset.parallaxSpeed,u=h?Number.parseFloat(h):l,d=o.dataset.sliderParallaxAxis,f=d==="y"||d==="x"?d:t.axis,x=(S=o.style.transform)!=null?S:"",g=o.style.willChange||null;(!g||!g.includes("transform"))&&(o.style.willChange=g?`${g}, transform`:"transform"),this.parallaxTargets.push({element:o,depth:Number.isFinite(l)?l:1,speedScale:Number.isFinite(u)?u:Number.isFinite(l)?l:1,axis:f,slideIndex:n,baseTransform:x,originalWillChange:g})})})}resetParallaxTargets(){this.parallaxTargets.length&&(this.parallaxTargets.forEach(e=>{e.element.style.transform=e.baseTransform,e.originalWillChange!==null?e.element.style.willChange=e.originalWillChange:e.element.style.removeProperty("will-change")}),this.parallaxTargets=[])}applySpeedEffects(e){let t=e.deltaTime||0,i=Math.min(Math.max(t*12,.06),1);this.speedState.lerped+=(e.speed-this.speedState.lerped)*i;let n=Math.abs(this.speedState.lerped),s=h=>{h&&(h.style.setProperty("--slider-speed",this.speedState.lerped.toFixed(4)),h.style.setProperty("--slider-speed-abs",n.toFixed(4)),h.style.setProperty("--slider-progress",e.progress.toFixed(4)))};if(s(this.wrapperEl),this.hostEl&&this.hostEl!==this.wrapperEl&&s(this.hostEl),this.applyBumpSpacingEffect(t,n),!this.parallaxTargets.length||!this.parallaxOptions)return;let{parallaxValues:a}=e;if(!a||!a.length)return;let{maxOffset:o,speedInfluence:c}=this.parallaxOptions,l=this.clamp(this.speedState.lerped*c,-o*.75,o*.75);this.parallaxTargets.forEach(h=>{let u=a[h.slideIndex];if(typeof u!="number")return;let d=this.clamp(u*o*h.depth,-o,o),f=this.clamp(l*h.speedScale,-o*h.speedScale,o*h.speedScale),x=o*Math.max(h.depth,h.speedScale)*1.75,g=this.clamp(d+f,-x,x),m=h.axis==="x"?g:0,p=h.axis==="y"?g:0;h.element.style.transform=`${h.baseTransform} translate3d(${m.toFixed(3)}px, ${p.toFixed(3)}px, 0)`})}applyBumpSpacingEffect(e,t){let i=this.bumpSpacingOptions;if(!this.slider||!i){this.bumpSpacingState.compression=0,this.updateBumpSpacingMetrics(0);return}let n=this.clamp(t*i.speedMultiplier,0,i.maxCompression),s=Math.max(e*60,0),a=this.clamp(1-Math.pow(1-i.smoothing,Math.max(s,1)),0,1);this.bumpSpacingState.compression+=(n-this.bumpSpacingState.compression)*a;let{compression:o}=this.bumpSpacingState,c=o>1e-4?o:0;this.updateBumpSpacingMetrics(c)}updateBumpSpacingMetrics(e){let t=e.toFixed(4),i=(1+e).toFixed(4),n=s=>{s&&(s.style.setProperty("--slider-bump-compression",t),s.style.setProperty("--slider-bump-scale",i))};n(this.wrapperEl),this.hostEl&&this.hostEl!==this.wrapperEl&&n(this.hostEl)}clamp(e,t,i){return Math.min(Math.max(e,t),i)}configureAutoScroll(){var s,a,o,c;if(typeof window=="undefined"||!this.slider){this.setAutoScrollActive(!1),this.autoScrollState=null;return}let e=this.normalizeAutoScrollOptions(this.options.autoScroll);if(!e){this.setAutoScrollActive(!1),this.autoScrollState=null;return}let t=this.getNow(),{slider:i}=this,n=(c=(o=(s=i==null?void 0:i.config)==null?void 0:s.snap)!=null?o:(a=this.options.config)==null?void 0:a.snap)!=null?c:Ma.snap;this.autoScrollState={config:e,lastTickTime:t,pausedUntil:t+e.initialDelay,hovering:!1,interacting:!1,directionMultiplier:e.direction==="backward"?1:-1,originalSnap:n,snapDisabled:!1},this.registerAutoScrollInteractionHandlers()}updateAutoScroll(e){let{slider:t}=this,i=this.autoScrollState;if(!t||!i||!i.config.enabled)return;if(i.lastTickTime===null){i.lastTickTime=e;return}let n=Math.max(0,(e-i.lastTickTime)/1e3);if(i.lastTickTime=e,!t.isVisible||i.config.speed<=0){this.setAutoScrollActive(!1);return}if(i.config.pauseOnHover&&i.hovering&&(i.pausedUntil=Math.max(i.pausedUntil,e+i.config.resumeDelay),i.interacting=!0),i.config.pauseOnInteraction){if(t.isDragging)i.interacting=!0,i.pausedUntil=Math.max(i.pausedUntil,e+i.config.resumeDelay);else if(i.interacting&&e>=i.pausedUntil){let o=Math.abs(t.target-Math.round(t.target)),c=Math.abs(t.speed);o<=.05&&c<=.02?i.interacting=!1:i.pausedUntil=e+120}}if(e<i.pausedUntil||i.interacting){this.setAutoScrollActive(!1);return}this.setAutoScrollActive(!0);let a=i.config.speed*n*i.directionMultiplier;if(!t.config.infinite){let o=t.target+a;o>0?(a=Math.min(a,-t.target),i.directionMultiplier=-1):o<t.maxScroll&&(a=Math.max(a,t.maxScroll-t.target),i.directionMultiplier=1)}t.target+=a}getNow(){return typeof performance!="undefined"&&typeof performance.now=="function"?performance.now():Date.now()}updateHoverSync(){if(!this.slider||typeof window=="undefined"||typeof document=="undefined"||!this.hoverSyncState.pointerInside)return;let e=this.hoverSyncState.lastPointer;if(!e||!this.shouldHandlePointer(e.pointerType))return;let{slider:t}=this,i=performance.now();if(t.isDragging||Math.abs(t.speed)>fu.speedThreshold){this.hoverSyncState.lastMovementTime=i;return}if(i-this.hoverSyncState.lastMovementTime<fu.settleDelay||i-this.hoverSyncState.lastDispatchTime<fu.dispatchThrottle)return;let n=document.elementFromPoint(e.clientX,e.clientY);if(!n)return;let s=n.closest(Wo);if(!s){this.clearSyntheticHover(e),this.hoverSyncState.lastDispatchTime=i;return}s!==this.hoverSyncState.activeSlide&&(this.applySyntheticHover(s,e),this.hoverSyncState.lastDispatchTime=i)}syncActiveSlideFromPointer(e){if(typeof document=="undefined")return;let t=this.snapshotPointer(e);if(!this.shouldHandlePointer(t.pointerType))return;let i=document.elementFromPoint(t.clientX,t.clientY);if(!i){this.hoverSyncState.activeSlide=null;return}let n=i.closest(Wo);this.hoverSyncState.activeSlide=n}applySyntheticHover(e,t){let i=this.hoverSyncState.activeSlide;i&&i!==e&&(this.dispatchSyntheticMouseEvent(i,"mouseleave",t,!1),this.dispatchSyntheticMouseEvent(i,"mouseout",t,!0)),e&&e!==i&&(this.dispatchSyntheticMouseEvent(e,"mouseenter",t,!1),this.dispatchSyntheticMouseEvent(e,"mouseover",t,!0)),this.hoverSyncState.activeSlide=e!=null?e:null}clearSyntheticHover(e){var n;let t=this.hoverSyncState.activeSlide;if(!t)return;let i=(n=e!=null?e:this.hoverSyncState.lastPointer)!=null?n:{...(()=>{let s=t.getBoundingClientRect();return{clientX:s.left+s.width/2,clientY:s.top+s.height/2}})(),pointerType:"mouse"};this.dispatchSyntheticMouseEvent(t,"mouseleave",i,!1),this.dispatchSyntheticMouseEvent(t,"mouseout",i,!0),this.hoverSyncState.activeSlide=null}dispatchSyntheticMouseEvent(e,t,i,n){let s=new MouseEvent(t,{bubbles:n,cancelable:!1,clientX:i.clientX,clientY:i.clientY,screenX:i.clientX,screenY:i.clientY,buttons:0});e.dispatchEvent(s)}storePointer(e){let t=this.getEventPoint(e),i="mouse";if("pointerType"in e&&e.pointerType){let s=this.normalizePointerType(e.pointerType);i=s==="unknown"?"mouse":s}else("touches"in e||"changedTouches"in e)&&(i="touch");let n=performance.now();this.hoverSyncState.lastPointer={clientX:t.clientX,clientY:t.clientY,pointerType:i},this.hoverSyncState.lastMovementTime=n}snapshotPointer(e,t="mouse"){let i=this.getEventPoint(e),n=t;if("pointerType"in e&&e.pointerType){let s=this.normalizePointerType(e.pointerType);n=s==="unknown"?t:s}else("touches"in e||"changedTouches"in e)&&(n="touch");return{clientX:i.clientX,clientY:i.clientY,pointerType:n}}shouldHandlePointer(e){if(!e)return!0;let t=this.normalizePointerType(e);return t==="mouse"||t==="pen"?!0:t==="touch"?this.isTouchHoverPointer(e):!1}stripIds(e){e.hasAttribute("id")&&e.removeAttribute("id"),e.querySelectorAll("[id]").forEach(t=>{t.removeAttribute("id")})}resolveCloneRootForDuplicate(e){if(!this.wrapperEl||e.parentElement===this.wrapperEl)return e;let t=e;for(;t&&t.parentElement&&t.parentElement!==this.wrapperEl;)t=t.parentElement;return t&&t.parentElement===this.wrapperEl?t:e}markCloneForAccessibility(e){e.setAttribute("aria-hidden","true"),e.getAttribute("role")==="listitem"&&e.setAttribute("role","presentation"),(e instanceof HTMLAnchorElement||e instanceof HTMLButtonElement||e instanceof HTMLInputElement||e instanceof HTMLSelectElement||e instanceof HTMLTextAreaElement)&&e.setAttribute("tabindex","-1"),e.querySelectorAll("a, button, input, select, textarea, [tabindex]").forEach(t=>{t.setAttribute("tabindex","-1"),t.setAttribute("aria-hidden","true")})}duplicateSlides(e){if(!this.wrapperEl||!e.length)return;let t=[];e.forEach((i,n)=>{var o;let a=this.resolveCloneRootForDuplicate(i).cloneNode(!0);this.stripIds(a),a.dataset.smooothyClone="true",a.dataset.smooothySourceIndex=String(n),this.markCloneForAccessibility(a),(o=this.wrapperEl)==null||o.appendChild(a),t.push(a)}),t.length&&this.clones.push(...t)}cleanupClones(){this.clones.length&&(this.clones.forEach(e=>{e.parentElement&&e.parentElement.removeChild(e)}),this.clones=[])}async initialize(){var s,a,o,c,l;if(this.isInitialized)return;let e=document.querySelector(this.options.selector);if(!e)return;this.wrapperEl=e,this.wrapperEl.style.userSelect="none",this.wrapperEl.style.webkitUserSelect="none",this.wrapperEl.style.touchAction="pan-y",this.coarsePointerEnvironment=this.detectCoarsePointerEnvironment(),this.keyboardOptions=this.normalizeKeyboardOptions(this.options.keyboard),this.bumpSpacingOptions=this.normalizeBumpSpacingOptions((s=this.options.bumpSpacing)!=null?s:{enabled:!0}),this.parallaxOptions=this.normalizeParallaxOptions(this.options.parallax),this.parallaxTargets=[],this.speedState.lerped=0,this.bumpSpacingState.compression=0,this.hostEl=(a=e.closest("[data-slider-root], .slider, .case-slider, .slider_wrapper, .panorama-slider"))!=null?a:e,this.prepareEntranceState();let t=this.collectSlides();this.duplicateSlides(t),typeof window!="undefined"&&vn((o=this.hostEl)!=null?o:e);let i=this.collectSlides(),n=this.createConfig();try{let h=new yp(e,n);this.slider=h,h.onSlideChange=(d,f)=>{var x,g,m;d!==f&&((x=this.sliderVideoController)==null||x.onSlideChange(d)),this.handleTouchHoverSlideChange(d),(m=(g=this.options).onSlideChange)==null||m.call(g,d,f)},h.init(),this.initializeTouchHover(h),this.registerKeyboardControls(h),this.registerParallaxTargets(h),this.wrapperEl&&this.attachWheelGuards(this.wrapperEl),this.applyInteractionGuards(i),this.registerPointerObservers(),this.configureAutoScroll();let u=()=>{if(!this.slider)return;let d=this.getNow();this.updateAutoScroll(d),this.slider.update(),this.updateHoverSync()};$.ticker.add(u),this.tickerFn=u,this.sliderVideoController=Ip((c=this.hostEl)!=null?c:e,{debounceMs:140}),this.sliderVideoController.onSlideChange((l=h.currentSlide)!=null?l:0)}catch(h){throw this.cleanupClones(),this.slider=null,h}this.isInitialized=!0,typeof window!="undefined"&&this.shouldExposeInstance()&&this.slider&&(window.smooothySliderInstance=this.slider)}async fadeIn(e=.8,t=0){await this.playEntranceAnimation(e,t)}async fadeOut(e=.5){let t=this.getWrappers();await new Promise(i=>{$.to(t.length?t:this.hostEl,{opacity:0,duration:e,ease:"power2.out",onComplete:()=>{t.length?t.forEach(n=>n.style.visibility="hidden"):this.hostEl&&(this.hostEl.style.visibility="hidden"),i()}})})}update(){this.slider&&this.slider.resize()}destroy(){this.entranceTimeline&&(this.entranceTimeline.kill(),this.entranceTimeline=null),this.tickerFn&&($.ticker.remove(this.tickerFn),this.tickerFn=null),this.slider&&(this.setAutoScrollActive(!1),this.slider.destroy(),this.slider=null),this.sliderVideoController&&(this.sliderVideoController.destroy(),this.sliderVideoController=null),this.unregisterKeyboardControls(),this.resetParallaxTargets(),this.cleanupClones(),this.autoScrollState=null,this.cancelTouchHoverSettle(),this.touchHoverEnabled=!1,this.touchHoverConfig=null,this.touchHoverState.pointerActive=!1,this.touchHoverState.pointerType="touch",this.touchHoverState.settleHandle=null,this.keyboardOptions=null,this.bumpSpacingOptions=null,this.speedState.lerped=0,this.bumpSpacingState.compression=0,this.wrapperEl&&(this.wrapperEl.style.removeProperty("user-select"),this.wrapperEl.style.removeProperty("-webkit-user-select"),this.wrapperEl.style.removeProperty("touch-action")),typeof window!="undefined"&&this.shouldExposeInstance()&&(window.smooothySliderInstance=null),this.teardownCallbacks.length&&(this.teardownCallbacks.forEach(e=>{try{e()}catch{}}),this.teardownCallbacks=[]),this.isInitialized=!1,this.hoverSyncState={pointerInside:!1,lastPointer:null,lastMovementTime:0,lastDispatchTime:0,activeSlide:null}}createConfig(){var u,d,f,x,g;let{setOffset:e,scrollInput:t,...i}=(u=this.options.config)!=null?u:{},n=this.coarsePointerEnvironment?{lerpFactor:.42,scrollSensitivity:1.55,snapStrength:.065,speedDecay:.9}:{},s={...Ma,...n,...i},a=this.coarsePointerEnvironment?{touchMultiplier:5,mouseMultiplier:1}:{},o={...Dp,...a,...(d=this.options.virtualScroll)!=null?d:{}};this.keyboardOptions&&((f=this.options.virtualScroll)==null?void 0:f.useKeyboard)===void 0&&(o.useKeyboard=!0);let c=t!==void 0?t:Ma.scrollInput,l=e!=null?e:(m=>m.itemWidth),{dragSensitivity:h}=s;if(this.coarsePointerEnvironment&&((x=this.options.config)==null?void 0:x.dragSensitivity)===void 0){let p=((g=o.touchMultiplier)!=null?g:Dp.touchMultiplier)/v_,S=x_*(Number.isFinite(p)&&p>0?p:1),y=Ma.dragSensitivity*.55,w=Ma.dragSensitivity*3.5;h=this.clamp(S,y,w)}return{...s,dragSensitivity:h,scrollInput:c,setOffset:l,virtualScroll:o,onResize:m=>{var p,S,y,w,A;(y=this.sliderVideoController)==null||y.onSlideChange((S=(p=this.slider)==null?void 0:p.currentSlide)!=null?S:0),(A=(w=this.options).onResize)==null||A.call(w,m)},onUpdate:m=>{var p,S;this.applySpeedEffects(m),(S=(p=this.options).onUpdate)==null||S.call(p,m)}}}collectSlides(){let e=this.wrapperEl;if(!e)return[];let t=[".slide","[data-slider-slide]",".slider-item"],i=[];return t.forEach(n=>{e.querySelectorAll(n).forEach(s=>{i.includes(s)||i.push(s)})}),i.length?i:Array.from(e.children).filter(n=>n instanceof HTMLElement)}getWrappers(){var i,n,s;if(!this.wrapperEl&&!this.hostEl)return[];let e=new Set;this.hostEl&&e.add(this.hostEl),this.wrapperEl&&this.wrapperEl!==this.hostEl&&e.add(this.wrapperEl);let t=(s=(i=this.hostEl)==null?void 0:i.closest(".slider, .case-slider, .slider_wrapper, .panorama-slider"))!=null?s:(n=this.wrapperEl)==null?void 0:n.closest(".slider, .case-slider, .slider_wrapper, .panorama-slider");return t&&e.add(t),Array.from(e)}prepareEntranceState(){let e=this.getWrappers();e.length&&$.set(e,{opacity:0,y:24,visibility:"hidden"});let t=this.collectSlides();t.length&&$.set(t,{opacity:0})}playEntranceAnimation(e=.8,t=0){return new Promise(i=>{let n=this.getWrappers(),s=this.collectSlides();this.entranceTimeline&&(this.entranceTimeline.kill(),this.entranceTimeline=null),n.forEach(o=>o.style.visibility="visible");let a=$.timeline({delay:t,defaults:{ease:"power2.out"},onComplete:()=>{this.entranceTimeline=null,i()}});n.length&&a.to(n,{opacity:1,y:0,duration:e},0),s.length&&a.set(s,{opacity:1},0),this.entranceTimeline=a})}attachWheelGuards(e){let t=n=>{let s=Math.abs(n.deltaX);Math.abs(n.deltaY)>s&&n.stopImmediatePropagation()},i={capture:!0};e.addEventListener("wheel",t,i),this.teardownCallbacks.push(()=>{e.removeEventListener("wheel",t,i)})}applyInteractionGuards(e){e.length&&(this.disableNativeDrag(e),this.registerSlideLinkGuards(e))}disableNativeDrag(e){let t=i=>{i.preventDefault()};e.forEach(i=>{[i,...Array.from(i.querySelectorAll("a, img, picture, source, video"))].forEach(s=>{s.setAttribute("draggable","false"),s.addEventListener("dragstart",t),this.teardownCallbacks.push(()=>{s.removeEventListener("dragstart",t)})})})}registerSlideLinkGuards(e){e.forEach(i=>{let n=i.matches("a")?[i]:Array.from(i.querySelectorAll("a"));n.length&&n.forEach(s=>{let a=0,o=0,c=!1,l=null,h=()=>{l&&(l(),l=null)},u=p=>{if(c)return;let S=this.getEventPoint(p);(Math.abs(S.clientX-a)>6||Math.abs(S.clientY-o)>6)&&(c=!0)},d=()=>{h();let p=()=>{h()};window.addEventListener("mousemove",u),window.addEventListener("mouseup",p),window.addEventListener("touchmove",u,{passive:!0}),window.addEventListener("touchend",p),window.addEventListener("touchcancel",p),l=()=>{window.removeEventListener("mousemove",u),window.removeEventListener("mouseup",p),window.removeEventListener("touchmove",u),window.removeEventListener("touchend",p),window.removeEventListener("touchcancel",p)}},f=p=>{let S=this.getEventPoint(p);a=S.clientX,o=S.clientY,c=!1,d()},x=p=>{c&&(p.preventDefault(),p.stopImmediatePropagation()),c=!1},g=p=>{f(p)},m=p=>{p.button===0&&f(p)};s.addEventListener("mousedown",m),s.addEventListener("touchstart",g,{passive:!0}),s.addEventListener("click",x,!0),this.teardownCallbacks.push(()=>{s.removeEventListener("mousedown",m),s.removeEventListener("touchstart",g),s.removeEventListener("click",x,!0),h()})})})}getEventPoint(e){var t,i,n,s;if("touches"in e){let a=(i=e.touches[0])!=null?i:(t=e.changedTouches)==null?void 0:t[0];if(a)return{clientX:a.clientX,clientY:a.clientY}}return{clientX:(n=e.clientX)!=null?n:0,clientY:(s=e.clientY)!=null?s:0}}shouldExposeInstance(){return typeof process!="undefined"?!1:typeof window!="undefined"&&window.location?window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1":!1}};function Np(r){return new ds(r)}async function Up(r=document){var n;let e=__(r);if(!e)return null;let t=(n=e.getAttribute("data-smooothy-instance"))!=null?n:Op("smooothy-home-slider");e.setAttribute("data-smooothy-instance",t),e.dataset.smooothyManaged="pending";let i=new ds({selector:`[data-smooothy-instance="${t}"]`,config:{infinite:!0,snap:!0},autoScroll:{enabled:!1},touchHover:{enabled:!0,coarseOnly:!0,applyInitialFeatured:!0,revertToFeaturedOnRelease:!0}});try{return await i.initialize(),Fp(e,t,i),i}catch(s){throw delete e.dataset.smooothyManaged,s}}async function Xo(r=document,e={}){var n;let t=Array.from(r.querySelectorAll("[data-smooothy], .slider-wrapper, .slider_wrapper")),i=[];for(let s of t){if(s.closest(".case-slider")||s.dataset.smooothyManaged==="true"||s.dataset.smooothyManaged==="pending")continue;let a=(n=s.getAttribute("data-smooothy-instance"))!=null?n:Op("smooothy-wrapper");s.setAttribute("data-smooothy-instance",a),s.dataset.smooothyManaged="pending";let o=new ds({selector:`[data-smooothy-instance="${a}"]`,config:e.config,virtualScroll:e.virtualScroll,onSlideChange:e.onSlideChange,onResize:e.onResize,onUpdate:e.onUpdate,autoScroll:e.autoScroll,touchHover:e.touchHover});try{await o.initialize(),Fp(s,a,o),i.push(o)}catch(c){throw delete s.dataset.smooothyManaged,c}}return i}function wa(r=document){Array.from(r.querySelectorAll("[data-smooothy-managed]")).forEach(t=>{let i=t.getAttribute("data-smooothy-instance");if(!i)return;let n=pu.get(i);n&&(n.destroy(),pu.delete(i)),delete t.dataset.smooothyManaged})}function __(r){var i,n;let e=["[data-smooothy]",".slider-wrapper",".slider_wrapper"];for(let s of e){let a=r.querySelector(s);if(a)return a}let t=r.querySelector(".panorama-slider, .slider, .case-slider");return t?(n=(i=t.querySelector("[data-smooothy]"))!=null?i:t.querySelector(".slider-wrapper"))!=null?n:t:null}Ho();var y_=".case-slider",Yo="data-case-slider-id",mu="data-slider-screensaver",Bp=6e3,jo=[],Mr=null,Zo=!1,qo=0;function b_(r,e){let t=`case-slider-${Date.now()}-${e}`;return r.setAttribute(Yo,t),t}function kp(r){r.hasAttribute(Yo)&&r.removeAttribute(Yo)}function Ea(r=!1){r&&(qo+=1),r&&Mr&&(Mr=null),Zo=!1,jo.forEach(({slider:e,wrapper:t,container:i})=>{e.destroy(),kp(t)}),jo=[]}function wr(r){_a(r),qo+=1;let e=qo;Zo=!1,Ea(),Mr=(async()=>{var n,s;let t=Array.from(r.querySelectorAll(y_)).filter(a=>!a.classList.contains("w-condition-invisible")),i=[];for(let[a,o]of t.entries()){let c=(n=o.querySelector("[data-smooothy], .slider-wrapper, .slider_container, .slider-items, .w-dyn-items"))!=null?n:o;if(!c||!((s=c.querySelector(".slide, [data-slider-slide]"))!=null?s:c.firstElementChild instanceof HTMLElement?c.firstElementChild:null))continue;let u=o.closest(`[${mu}], [data-slider="screensaver"]`)!==null||o.hasAttribute(mu)||c.hasAttribute(mu)||o.dataset.slider==="screensaver"||c.dataset.slider==="screensaver",d=b_(c,a),f=Np({selector:`[${Yo}="${d}"]`,config:{infinite:!0,snap:!0},autoScroll:{enabled:!0,speed:u?.12:.1,initialDelay:u?Bp:1600,resumeDelay:u?Bp:2e3,pauseOnHover:!1,pauseOnInteraction:!0},touchHover:{enabled:!0,coarseOnly:!0,applyInitialFeatured:!0,revertToFeaturedOnRelease:!0}});await f.initialize(),i.push({slider:f,wrapper:c,container:o})}return e!==qo?(i.forEach(({slider:a,wrapper:o})=>{a.destroy(),kp(o)}),[]):(jo=i,i.map(({slider:a})=>a))})()}function Er(r=.8,e=.1){let t=i=>{!i.length||Zo||(Zo=!0,i.forEach((n,s)=>{n.fadeIn(r,e+s*.12)}))};Mr?Mr.then(i=>{Mr=null,i.length&&t(i)}).catch(i=>{Mr=null}):t(jo.map(({slider:i})=>i))}var Vn=[],Ta=null,$o=!0,S_="Europe/Zurich",M_=new Intl.DateTimeFormat("en-GB",{hour:"2-digit",minute:"2-digit",hourCycle:"h23",timeZone:S_});function w_(){let r=M_.formatToParts(new Date),e="00",t="00";return r.forEach(i=>{i.type==="hour"?e=i.value:i.type==="minute"&&(t=i.value)}),{hours:e,minutes:t}}function E_(r){let e=document.createElement("span");e.className="local-time__hours";let t=document.createElement("span");t.className="local-time__colon",t.textContent=":";let i=document.createElement("span");return i.className="local-time__minutes",r.textContent="",r.append(e,t,i),{container:r,hours:e,colon:t,minutes:i}}function T_(){for(let r=Vn.length-1;r>=0;r-=1){let{container:e}=Vn[r];e.isConnected||(delete e.dataset.localTimeInitialized,Vn.splice(r,1))}!Vn.length&&Ta!==null&&(window.clearInterval(Ta),Ta=null)}function Hp(){if(T_(),!Vn.length)return;let{hours:r,minutes:e}=w_();Vn.forEach(({hours:t,minutes:i,colon:n})=>{t.textContent=r,i.textContent=e,n.style.opacity=$o?"1":"0"}),$o=!$o}function A_(){Ta!==null||!Vn.length||(Ta=window.setInterval(()=>{Hp()},1e3))}function zp(r){var e,t,i,n;return r.matches("[data-local-time-display]")?r:(n=(i=(t=(e=r.querySelector("[data-local-time-display]"))!=null?e:r.querySelector(".text-size-footer"))!=null?t:r.querySelector(".heading-style-extras"))!=null?i:r.querySelector(".text-size-regular"))!=null?n:r}function Ko(r=document){let e='[data-attribute="local-time"]',t="[data-local-time-display]",i=".local-time .heading-style-extras, .local-time .text-size-regular, .local-time [data-local-time-display]",n=new Set,s=r instanceof Element?r:null,a=c=>{c&&n.add(c)};if(s&&s.matches(e)&&a(zp(s)),r.querySelectorAll(e).forEach(c=>{a(zp(c))}),s&&s.matches(t)&&!s.closest(e)&&n.add(s),r.querySelectorAll(t).forEach(c=>{c.closest(e)||n.add(c)}),!n.size){let c=new Set;s&&(s.classList.contains("heading-style-extras")||s.classList.contains("text-size-regular"))&&c.add(s),r.querySelectorAll(i).forEach(l=>{c.add(l)}),c.forEach(l=>{var u;let h=(u=l.closest(t))!=null?u:l;n.add(h)})}if(!n.size)return;let o=!1;n.forEach(c=>{if(c.dataset.localTimeInitialized==="true")return;let l=E_(c);c.dataset.localTimeInitialized="true",Vn.push(l),o=!0}),o&&($o=!0,Hp(),A_())}hi();var hT=/^((?!chrome|android).)*safari/i.test(navigator.userAgent),Vp=/iPhone|iPad|iPod|Android/i.test(navigator.userAgent),Gp="0px 24px 32px -12px rgba(0, 0, 0, 0.22), 0px 12px 20px -10px rgba(0, 0, 0, 0.12)",C_="0px 0px 0px rgba(0, 0, 0, 0)",P_={desktop:{minWidth:992,targetWidthPercentage:30},tablet:{minWidth:768,maxWidth:991,targetWidthPercentage:30},mobileLandscape:{minWidth:480,maxWidth:767,targetWidthPercentage:40},mobilePortrait:{maxWidth:479,targetWidthPercentage:100}},gu=class{constructor(){Z(this,"containers",[]);Z(this,"expandedContainers",new Set);Z(this,"animationInProgress",!1);Z(this,"eventHandlers",new Map);Z(this,"hoverEffectsInitialized",!1);Z(this,"containerGapCache",new WeakMap);Z(this,"expandedContainerBreakpoints",new WeakMap);Z(this,"activeScrollAnimationFrame",null);this.init()}init(){this.findAndSetupContainers()}getCurrentBreakpoint(){let e=window.innerWidth||document.documentElement.clientWidth;return e<=479?"mobilePortrait":e<=767?"mobileLandscape":e<=991?"tablet":"desktop"}getBreakpointConfig(e=this.getCurrentBreakpoint()){return P_[e]}normalizeGapValue(e){return!e||e==="normal"?"0px":e}captureContainerGap(e,t=this.getCurrentBreakpoint()){let i=getComputedStyle(e),n=this.normalizeGapValue(i.rowGap),s=this.normalizeGapValue(i.columnGap),o={gap:(i.gap&&i.gap!=="normal"?i.gap:`${n} ${s}`.trim()).trim(),rowGap:n,columnGap:s},c=this.containerGapCache.get(e);return c||(c=new Map,this.containerGapCache.set(e,c)),c.set(t,o),o}applyGapOverrides(e,t,i,n=0){var f,x,g;let s=this.getBreakpointConfig(i),a=this.captureContainerGap(e,i),o=(f=s.gapOverride)!=null?f:null,c=(x=s.rowGapOverride)!=null?x:o,l=(g=s.columnGapOverride)!=null?g:o;if(c===null&&l===null)return;let h=c!=null?c:a.rowGap,u=l!=null?l:a.columnGap,d=c!==null&&l!==null?`${c} ${l}`:c!==null?`${c} ${a.columnGap}`:l!==null?`${a.rowGap} ${l}`:a.gap;t.to(e,{gap:d,rowGap:h,columnGap:u,duration:.4,ease:"power2.out"},n)}restoreContainerGap(e,t,i,n=0){let s=this.containerGapCache.get(e),a=s==null?void 0:s.get(i);if(!a){let o=this.captureContainerGap(e,i);t.to(e,{gap:o.gap,rowGap:o.rowGap,columnGap:o.columnGap,duration:.4,ease:"power2.inOut"},n);return}t.to(e,{gap:a.gap,rowGap:a.rowGap,columnGap:a.columnGap,duration:.4,ease:"power2.inOut"},n)}resolveGapForBreakpoint(e,t){var d,f,x,g;let i=this.containerGapCache.get(e),n=(d=i==null?void 0:i.get(t))!=null?d:null;if(!n&&!this.expandedContainers.has(e)&&(n=this.captureContainerGap(e,t)),!n)return null;let s=this.getBreakpointConfig(t),a=(f=s.gapOverride)!=null?f:null,o=(x=s.rowGapOverride)!=null?x:a,c=(g=s.columnGapOverride)!=null?g:a,l=o!=null?o:n.rowGap,h=c!=null?c:n.columnGap;return{gap:o!==null&&c!==null?`${l} ${h}`:o!==null?`${l} ${n.columnGap}`:c!==null?`${n.rowGap} ${h}`:n.gap,rowGap:l,columnGap:h}}calculateExpandedDimensions(e,t){let i=parseFloat(e.dataset.originalWidth||"0"),n=parseFloat(e.dataset.originalHeight||"0");if(i<=0||n<=0){let h=Math.max(t,0);return{width:h,height:h}}let s=i/n||1,a=t>0?t:i,o=Math.min(a,i*5),c=a>=i?o:i,l=c/s;return{width:c,height:l}}getMediaItems(e){return Array.from(e.querySelectorAll(".project-media"))}getPrimaryMediaElement(e){return e.querySelector(".project-image, .project-video")}getPrimaryMediaElements(e){return e.map(t=>this.getPrimaryMediaElement(t)).filter(t=>!!t)}ensureMediaVisibility(e){let t=e.querySelectorAll(".project-image, .project-video");if(t.length===0)return;let i=Array.from(t);$.killTweensOf(i),$.set(i,{opacity:1})}clearInlineSizing(e){e.style.removeProperty("width"),e.style.removeProperty("height"),e.style.removeProperty("min-width"),e.style.removeProperty("max-width"),e.style.removeProperty("flex-basis"),e.style.removeProperty("flex-grow"),e.style.removeProperty("flex-shrink")}clearContainerGap(e){e.style.removeProperty("gap"),e.style.removeProperty("row-gap"),e.style.removeProperty("column-gap")}cacheMediaItemDimensions(e,t=!1){let i=parseFloat(getComputedStyle(document.documentElement).fontSize);Array.from(e).forEach(n=>{let s=getComputedStyle(n),a=parseFloat(s.width),o=parseFloat(s.height);if(!a||!o)return;let c=a/i,l=o/i;(t||!n.dataset.originalWidth)&&(n.dataset.originalWidth=c.toString(),n.dataset.originalWidthUnit="rem"),(t||!n.dataset.originalHeight)&&(n.dataset.originalHeight=l.toString(),n.dataset.originalHeightUnit="rem"),(t||!n.dataset.originalFlexBasis)&&(n.dataset.originalFlexBasis=s.flexBasis||""),(t||!n.dataset.originalMinWidth)&&(n.dataset.originalMinWidth=s.minWidth||""),(t||!n.dataset.originalMaxWidth)&&(n.dataset.originalMaxWidth=s.maxWidth||""),(t||!n.dataset.originalFlexGrow)&&(n.dataset.originalFlexGrow=s.flexGrow||""),(t||!n.dataset.originalFlexShrink)&&(n.dataset.originalFlexShrink=s.flexShrink||"")})}getMediaWrapperFromTarget(e){return e?e.classList.contains("project-media")?e:e.closest(".project-media"):null}normalizeHoverStates(e){this.getMediaItems(e).forEach(i=>{$.killTweensOf(i),$.set(i,{scale:1,y:0,opacity:1,clearProps:"transform",overwrite:!0});let n=this.getPrimaryMediaElement(i);n&&($.killTweensOf(n),$.set(n,{scale:1,y:0,opacity:1,clearProps:"transform",overwrite:!0}),n.style.removeProperty("box-shadow"))})}findAndSetupContainers(){this.containers=[],document.querySelectorAll(".project-flex").forEach(t=>{this.containers.push(t),$.set(t,{position:"relative",overflow:"visible",willChange:"transform",backfaceVisibility:"hidden",transform:"translateZ(0)",touchAction:"pan-y"}),t.setAttribute("data-ripple-container","true");let i=this.getMediaItems(t);i.length>0&&(this.cacheMediaItemDimensions(i,!0),i.forEach(n=>{$.set(n,{position:"relative",zIndex:1,transformOrigin:"50% 50%"})})),this.captureContainerGap(t),this.setupContainerClickHandler(t)}),window.removeEventListener("resize",this.handleResize.bind(this)),window.addEventListener("resize",this.handleResize.bind(this))}initializeHoverEffects(){Vp||this.hoverEffectsInitialized||(this.containers.forEach(e=>{if(this.expandedContainers.has(e))return;this.getMediaItems(e).forEach(i=>{this.setupDesktopHoverEffects(i,e)})}),this.hoverEffectsInitialized=!0)}setupDesktopHoverEffects(e,t){let i=e,n=()=>{!this.animationInProgress&&!this.expandedContainers.has(t)&&$.to(i,{scale:1.15,y:-10,zIndex:2,duration:.025,ease:"power3.out",overwrite:"auto",force3D:!0,backfaceVisibility:"hidden"})},s=()=>{!this.animationInProgress&&!this.expandedContainers.has(t)&&$.to(i,{scale:1,y:0,zIndex:1,duration:.05,ease:"power1.out",overwrite:"auto",force3D:!0})};e.removeEventListener("mouseenter",n),e.removeEventListener("mouseleave",s),e.addEventListener("mouseenter",n),e.addEventListener("mouseleave",s),this.eventHandlers.set(e,()=>{e.removeEventListener("mouseenter",n),e.removeEventListener("mouseleave",s)})}setupContainerClickHandler(e){let t=b=>{this.animationInProgress||(this.normalizeHoverStates(e),Vp||$.set(b,{scale:1,y:0,clearProps:"transform,filter"}),this.toggleContainer(e,b))},a={pointerActive:!1,pointerId:null,touchId:null,startX:0,startY:0,startTime:0,moved:!1,pointerType:"",lastTarget:null,suppressClickUntil:0},o=()=>typeof performance!="undefined"&&typeof performance.now=="function"?performance.now():Date.now(),c=()=>{a.pointerActive=!1,a.pointerId=null,a.touchId=null,a.startX=0,a.startY=0,a.startTime=0,a.moved=!1,a.pointerType="",a.lastTarget=null},l=()=>{a.suppressClickUntil=o()+400},h=(b,M)=>{var z;let O=(z=this.getMediaWrapperFromTarget(b))!=null?z:M?this.getMediaWrapperFromTarget(M):null;O&&t(O)},u=typeof window!="undefined"&&"PointerEvent"in window,d=typeof window!="undefined"&&"ontouchstart"in window,f=b=>b==="mouse"||b==="touch"||b==="pen"?b:"",x=b=>{b.pointerType==="mouse"&&b.button!==0||(a.pointerActive=!0,a.pointerId=b.pointerId,a.pointerType=f(b.pointerType),a.startX=b.clientX,a.startY=b.clientY,a.startTime=o(),a.moved=!1,a.lastTarget=b.target,a.suppressClickUntil=0)},g=b=>{if(!a.pointerActive||a.pointerId!==b.pointerId||a.moved)return;let M=Math.abs(b.clientX-a.startX),O=Math.abs(b.clientY-a.startY);(M>10||O>10)&&(a.moved=!0,l())},m=b=>{if(!a.pointerActive||a.pointerId!==b.pointerId)return;let M=a.lastTarget,O=o()-a.startTime,z=!a.moved&&O<=350;c(),z&&h(b.target,M),l()},p=()=>{c(),l()},S=(b,M)=>{if(M===null)return null;for(let O=0;O<b.length;O+=1){let z=b.item(O);if(z&&z.identifier===M)return z}return null},y=b=>{if(a.pointerActive)return;let M=b.changedTouches[0];M&&(a.pointerActive=!0,a.touchId=M.identifier,a.pointerType="touch",a.startX=M.clientX,a.startY=M.clientY,a.startTime=o(),a.moved=!1,a.lastTarget=b.target,a.suppressClickUntil=0)},w=b=>{var G;if(!a.pointerActive||a.pointerType!=="touch"||a.moved)return;let M=(G=S(b.changedTouches,a.touchId))!=null?G:S(b.touches,a.touchId);if(!M)return;let O=Math.abs(M.clientX-a.startX),z=Math.abs(M.clientY-a.startY);(O>10||z>10)&&(a.moved=!0,l())},A=b=>{if(!a.pointerActive||a.pointerType!=="touch"||!S(b.changedTouches,a.touchId))return;let O=a.lastTarget,z=o()-a.startTime,G=!a.moved&&z<=350;c(),G&&h(b.target,O),l()},T=()=>{c(),l()},R=b=>{if(this.animationInProgress)return;let M=o();if(a.suppressClickUntil&&M<a.suppressClickUntil){a.suppressClickUntil=0;return}h(b.target),a.suppressClickUntil=M+400},N=[];if(e.addEventListener("click",R),N.push(()=>{e.removeEventListener("click",R)}),u){let b={passive:!0};e.addEventListener("pointerdown",x,b),e.addEventListener("pointermove",g,b),e.addEventListener("pointerup",m),e.addEventListener("pointercancel",p),N.push(()=>{e.removeEventListener("pointerdown",x,b),e.removeEventListener("pointermove",g,b),e.removeEventListener("pointerup",m),e.removeEventListener("pointercancel",p)})}else if(d){let b={passive:!0};e.addEventListener("touchstart",y,b),e.addEventListener("touchmove",w,b),e.addEventListener("touchend",A),e.addEventListener("touchcancel",T),N.push(()=>{e.removeEventListener("touchstart",y,b),e.removeEventListener("touchmove",w,b),e.removeEventListener("touchend",A),e.removeEventListener("touchcancel",T)})}this.eventHandlers.set(e,()=>{N.forEach(b=>{b()})})}findParentProjectDiv(e){let t=e;for(;t;){if(t.classList.contains("project-div"))return t;t=t.parentElement}return null}resetHoverEffects(){this.hoverEffectsInitialized=!1,this.eventHandlers.forEach((e,t)=>{(t.classList.contains("project-media")||t.classList.contains("project-image")||t.classList.contains("project-video"))&&(e(),this.eventHandlers.delete(t))})}fadeInAllImages(){if(this.refreshContainers(),this.containers.length===0)return;this.resetHoverEffects();let e=$.timeline({onStart:()=>{},onComplete:()=>{setTimeout(()=>{this.initializeHoverEffects()},100)}});this.containers.forEach((t,i)=>{let n=this.getMediaItems(t);n.length!==0&&($.set(n,{opacity:0}),e.to(n,{opacity:1,duration:.8,stagger:.03,ease:"power2.out",overwrite:"auto"},.25))}),e.play()}prepareForTransition(){this.resetHoverEffects(),this.expandedContainers.size>0&&(this.expandedContainers.forEach(e=>{e&&e.classList.remove("gallery-expanded")}),this.expandedContainers.clear()),this.animationInProgress=!1}destroy(){this.resetHoverEffects(),window.removeEventListener("resize",this.handleResize.bind(this)),this.eventHandlers.forEach((e,t)=>{e()}),this.eventHandlers.clear(),this.expandedContainers.clear(),this.containers=[],this.containerGapCache=new WeakMap,this.expandedContainerBreakpoints=new WeakMap}handleResize(){if(this.animationInProgress)return;let e=this.getCurrentBreakpoint();this.containers.forEach(t=>{if(this.normalizeHoverStates(t),this.expandedContainers.has(t))this.animationInProgress||this.updateExpandedContainer(t,e);else{this.captureContainerGap(t,e);let i=this.getMediaItems(t);i.length>0&&this.cacheMediaItemDimensions(i,!0)}})}updateExpandedContainer(e,t=this.getCurrentBreakpoint()){let i=this.getMediaItems(e),n=parseFloat(getComputedStyle(document.documentElement).fontSize),s=e.clientWidth/n,a=this.getBreakpointConfig(t),o=s*(a.targetWidthPercentage/100),c=this.getPrimaryMediaElements(i);i.forEach(h=>{let{width:u,height:d}=this.calculateExpandedDimensions(h,o);$.to(h,{width:`${u}rem`,height:`${d}rem`,minWidth:`${u}rem`,maxWidth:`${u}rem`,flexBasis:`${u}rem`,flexGrow:0,flexShrink:0,scale:1,y:0,duration:.5,ease:"power2.out",overwrite:!0})}),c.length>0&&$.to(c,{boxShadow:Gp,duration:.4,ease:"power2.out",overwrite:!0});let l=this.resolveGapForBreakpoint(e,t);l&&$.to(e,{gap:l.gap,rowGap:l.rowGap,columnGap:l.columnGap,duration:.4,ease:"power2.out"}),this.expandedContainerBreakpoints.set(e,t)}toggleContainer(e,t){this.animationInProgress||(this.animationInProgress=!0,this.expandedContainers.has(e)?(this.shrinkContainer(e),this.expandedContainers.delete(e)):(this.expandContainer(e,t),this.expandedContainers.add(e)))}resolveEaseFunction(e){if(typeof e=="function")return e;try{return $.parseEase(e!=null?e:"quad.out")}catch{return t=>t}}customScrollTo(e,t=.66,i="quad.out"){let n=()=>{let u=typeof e=="function"?e():e;return Number.isFinite(u)?u:0},s=Number.isFinite(t)&&t>0?t:0;if(s===0){window.scrollTo(0,n());return}let a=this.resolveEaseFunction(i),o=window.scrollY,c=performance.now(),l=s*1e3;this.activeScrollAnimationFrame!==null&&(cancelAnimationFrame(this.activeScrollAnimationFrame),this.activeScrollAnimationFrame=null);let h=u=>{let d=u-c,f=Math.min(Math.max(d/l,0),1),x=a(f),g=n(),m=o+(g-o)*x;if(window.scrollTo(0,m),f>=1){window.scrollTo(0,g),this.activeScrollAnimationFrame=null;return}this.activeScrollAnimationFrame=requestAnimationFrame(h)};this.activeScrollAnimationFrame=requestAnimationFrame(h)}scrollToPosition(e,t=.66,i="quad.out"){this.customScrollTo(e,t,i)}expandContainer(e,t){let i=this.getMediaItems(e);if(i.length===0){this.animationInProgress=!1;return}this.normalizeHoverStates(e),this.ensureMediaVisibility(e),this.cacheMediaItemDimensions(i,!0);let n=this.findParentProjectDiv(e),s=1.5*parseFloat(getComputedStyle(document.documentElement).fontSize),a=$.timeline({onComplete:()=>{this.animationInProgress=!1}});t&&this.sortItemsByDistanceFrom(i,t),e.classList.add("gallery-expanded");let o=this.getCurrentBreakpoint();this.expandedContainerBreakpoints.set(e,o);let c=parseFloat(getComputedStyle(document.documentElement).fontSize),l=e.clientWidth/c,h=this.getBreakpointConfig(o),u=l*(h.targetWidthPercentage/100),d=new Map;i.forEach(x=>{d.set(x,this.calculateExpandedDimensions(x,u))});let f=this.getPrimaryMediaElements(i);if(this.applyGapOverrides(e,a,o),f.length>0&&a.to(f,{boxShadow:Gp,duration:.6,ease:"power2.out",overwrite:!0},0),a.set(i,{scale:1,y:0,clearProps:"transform"},0),a.to(i,{width:(x,g)=>{var p;let m=d.get(g);return`${(p=m==null?void 0:m.width)!=null?p:u}rem`},height:(x,g)=>{var p;let m=d.get(g);return`${(p=m==null?void 0:m.height)!=null?p:u}rem`},minWidth:(x,g)=>{var p;let m=d.get(g);return`${(p=m==null?void 0:m.width)!=null?p:u}rem`},maxWidth:(x,g)=>{var p;let m=d.get(g);return`${(p=m==null?void 0:m.width)!=null?p:u}rem`},flexBasis:(x,g)=>{var p;let m=d.get(g);return`${(p=m==null?void 0:m.width)!=null?p:u}rem`},flexGrow:0,flexShrink:0,scale:1,y:0,zIndex:x=>x+1,duration:.6,stagger:.04,ease:"power2.out",force3D:!0},0),n){let x=()=>n.isConnected?n.getBoundingClientRect().top+window.scrollY-s:window.scrollY;a.call(()=>{this.scrollToPosition(x,.66,"quad.out")},[],0)}}shrinkContainer(e){var h;let t=this.getMediaItems(e),i=(h=this.expandedContainerBreakpoints.get(e))!=null?h:this.getCurrentBreakpoint();if(t.length===0){e.classList.remove("gallery-expanded"),this.animationInProgress=!1,this.expandedContainerBreakpoints.delete(e);return}this.normalizeHoverStates(e);let n=this.getPrimaryMediaElements(t),s=this.findParentProjectDiv(e),a=1.5*parseFloat(getComputedStyle(document.documentElement).fontSize),o=s&&s.getBoundingClientRect().top<a,c=$.timeline({onComplete:()=>{e.classList.remove("gallery-expanded"),this.animationInProgress=!1,this.expandedContainerBreakpoints.delete(e),t.forEach(u=>{this.clearInlineSizing(u)}),n.forEach(u=>{this.clearInlineSizing(u),u.style.removeProperty("box-shadow")}),this.clearContainerGap(e),this.captureContainerGap(e,i),this.cacheMediaItemDimensions(t,!0)}});if(o&&s){let u=()=>s.isConnected?s.getBoundingClientRect().top+window.scrollY-a:window.scrollY;c.call(()=>{this.scrollToPosition(u,.66,"quad.out")},[],0)}let l=o?.1:0;c.set(t,{scale:1,y:0,clearProps:"transform"},0),n.length>0&&c.to(n,{boxShadow:C_,duration:.5,ease:"power2.inOut",overwrite:!0},l),this.restoreContainerGap(e,c,i,l),c.to(t,{width:(u,d)=>{let f=parseFloat(d.dataset.originalWidth||"0"),x=d.dataset.originalWidthUnit||"rem";return`${f}${x}`},height:(u,d)=>{let f=parseFloat(d.dataset.originalHeight||"0"),x=d.dataset.originalHeightUnit||"rem";return`${f}${x}`},minWidth:(u,d)=>d.dataset.originalMinWidth||"auto",maxWidth:(u,d)=>d.dataset.originalMaxWidth||"none",flexBasis:(u,d)=>{let f=d.dataset.originalFlexBasis;if(f&&f!=="auto")return f;let{originalWidth:x}=d.dataset,g=d.dataset.originalWidthUnit||"rem";return x?`${x}${g}`:"auto"},flexGrow:(u,d)=>d.dataset.originalFlexGrow!==void 0&&d.dataset.originalFlexGrow!==""?d.dataset.originalFlexGrow:0,flexShrink:(u,d)=>d.dataset.originalFlexShrink!==void 0&&d.dataset.originalFlexShrink!==""?d.dataset.originalFlexShrink:1,scale:1,y:0,zIndex:1,duration:.5,stagger:.02,ease:"power2.inOut",force3D:!0,clearProps:"filter,transform"},l)}sortItemsByDistanceFrom(e,t){let i=t.getBoundingClientRect(),n=i.left+i.width/2,s=i.top+i.height/2;e.sort((a,o)=>{let c=a.getBoundingClientRect(),l=o.getBoundingClientRect(),h=c.left+c.width/2,u=c.top+c.height/2,d=l.left+l.width/2,f=l.top+l.height/2,x=Math.sqrt(Math.pow(h-n,2)+Math.pow(u-s,2)),g=Math.sqrt(Math.pow(d-n,2)+Math.pow(f-s,2));return x-g})}refreshContainers(){this.eventHandlers.forEach((e,t)=>{e()}),this.eventHandlers.clear(),this.findAndSetupContainers(),this.containers.forEach(e=>{$.set(e,{opacity:1,display:"flex",visibility:"visible",overflow:"visible"})})}reset(){this.resetHoverEffects(),this.refreshContainers()}fadeOutAllImages(){this.containers.forEach(e=>{let t=this.getMediaItems(e);t.length>0&&$.to(t,{opacity:0,duration:.5,stagger:.02,ease:"power2.in"})})}};function Wp(){return new gu}var fs=null,R_=!1;function Xp(){return fs?fs.refreshContainers():fs=Wp(),fs}function qp(){fs&&(fs.prepareForTransition(),R_=!1)}hi();var L_=".section_about .about_wrapper",I_=".footer .component-footer",Di=null,Jo=null;function D_(r){var e,t;return r instanceof Element?r.matches('[data-barba="container"]')?r:r.closest('[data-barba="container"]'):typeof document!="undefined"?(t=(e=r.querySelector)==null?void 0:e.call(r,'[data-barba="container"]'))!=null?t:document.querySelector('[data-barba="container"]'):null}function O_(r){var t;let e=D_(r);return(t=e==null?void 0:e.getAttribute("data-barba-namespace"))!=null?t:null}function Yp(r){let e=Array.from(r.querySelectorAll(L_)),t=Array.from(r.querySelectorAll(I_));e.forEach(a=>{a.__infoRevealType="about",a.__infoRevealExtraGroups=void 0}),t.forEach(a=>{a.__infoRevealType="footer"});let i=O_(r),n=new Set;if(i==="info"&&e.length&&t.length){let a=e[e.length-1];a.__infoRevealExtraGroups=t,t.forEach(o=>{n.add(o)})}return[...e,...t.filter(a=>!n.has(a))]}function jp(r,e){if(r.__infoRevealWords&&r.__infoRevealWords.length)return r.__infoRevealWords;let t=[],i=document.createTreeWalker(r,NodeFilter.SHOW_TEXT),n=[];for(;i.nextNode();){let s=i.currentNode;!s.textContent||!s.textContent.trim()||s.parentElement&&n.push(s)}return n.forEach(s=>{var c;let a=s.parentNode;if(!a)return;((c=s.textContent)!=null?c:"").split(/(\s+)/).forEach(l=>{if(l)if(/^\s+$/.test(l))a.insertBefore(document.createTextNode(l),s);else{let h=document.createElement("span");h.textContent=l,h.style.display="inline-block",h.style.opacity="0",h.style.transform=`translateY(${e*.6}px)`,h.classList.add("info-reveal-word"),a.insertBefore(h,s),t.push(h)}}),a.removeChild(s)}),r.__infoRevealWords=t,t}function F_(r,e){if(r.__infoRevealPrepared)return;let t=new Set,i=r.querySelector(".footer-logo-wrapper");i&&t.add(i),r.querySelectorAll(".footer-extra").forEach(o=>t.add(o));let n=Array.from(t);n.length&&$.set(n,{opacity:0,y:e*.4,willChange:"transform, opacity"});let s=new Set;r.querySelectorAll(".footer-extra .heading-style-extras, .footer-extra .text-size-regular, .footer-extra .contact, .footer-extra .copyright, .footer-extra [data-footer-stagger]").forEach(o=>{if(o.matches(".contact")){s.add(o);return}let c=o.closest(".contact");if(c){s.add(c);return}s.add(o)});let a=Array.from(s);a.length?($.set(a,{opacity:0,y:e*.3,willChange:"transform, opacity"}),r.__infoRevealSecondary=a):r.__infoRevealSecondary=void 0,$.set(r,{opacity:0,y:e,willChange:"transform, opacity"}),r.__infoRevealInner=n,r.__infoRevealPrepared=!0}function N_(r,e){if(r.__infoRevealPrepared)return;let i=r.__infoRevealType==="footer"?[r]:Array.from(r.children),n=r.__infoRevealExtraGroups;n&&n.length&&n.forEach(s=>{i.includes(s)||i.push(s)}),i.forEach(s=>{if(s.__infoRevealPrepared)return;if(s.__infoRevealType==="footer"){F_(s,e);return}if($.set(s,{opacity:0,y:e,willChange:"transform, opacity"}),s.dataset.fade==="bio"){let c=jp(s,e);c.length&&$.set(c,{opacity:0,y:e*.6}),s.__infoRevealInner=void 0,s.__infoRevealSecondary=void 0}else{let c=Array.from(s.children);c.length?($.set(c,{opacity:0,y:e*.6,willChange:"transform, opacity"}),s.__infoRevealInner=c):s.__infoRevealInner=void 0;let l=new Set;s.querySelectorAll(".about-list .services_link, .about-list [data-animate-stagger], .about-list-item, .about-list .text-size-medium").forEach(u=>{if(u.matches(".about-list-item")){let f=u.querySelector(".services_link");if(f){l.add(f);return}}let d=u.closest(".services_link");if(d){l.add(d);return}l.add(u)});let h=Array.from(l).filter(u=>u!==s);h.length?($.set(h,{opacity:0,y:e*.45,willChange:"transform, opacity"}),s.__infoRevealSecondary=h):s.__infoRevealSecondary=void 0}s.__infoRevealPrepared=!0}),r.__infoRevealChildren=i,r.__infoRevealPrepared=!0}function Zp(r,e,t){var o;let i=(o=r.__infoRevealChildren)!=null?o:Array.from(r.children);if(!i.length)return;let n=$.timeline({defaults:{ease:"power2.out"}}),s=Math.max(e,.6),a=Math.max(s*.38,.14);i.forEach((c,l)=>{var m;let h=l*a,u=c.dataset.fade==="bio",d=c.__infoRevealType==="footer",f=c.__infoRevealWords||(u?jp(c,t):void 0),x=!u||d?c.__infoRevealInner:void 0,g=(!u||d)&&((m=c.__infoRevealSecondary)!=null&&m.length)?c.__infoRevealSecondary:void 0;n.to(c,{opacity:1,y:0,duration:s,onStart:()=>{c.__infoRevealActivated=!0},onComplete:()=>{c.style.removeProperty("will-change")}},h),f&&f.length&&n.to(f,{opacity:1,y:0,stagger:.01,duration:Math.max(s*.42,.26)},h+Math.min(s*.14,s-.2)),x&&x.length&&n.to(x,{opacity:1,y:0,duration:Math.max(s*.5,.38),stagger:{each:.06,from:"start",onComplete:(p,S)=>{S instanceof HTMLElement&&S.style.removeProperty("will-change")}}},h+Math.min(s*.1,.1)),g&&g.length&&n.to(g,{opacity:1,y:0,duration:Math.max(s*.38,.26),stagger:{each:.05,from:"start",onComplete:(p,S)=>{S instanceof HTMLElement&&S.style.removeProperty("will-change")}}},h+Math.min(s*.22,s-.16))})}function U_(r,e,t){r.forEach(i=>{var s;let n=i.target;if(!(!i.isIntersecting||n.__infoRevealActivated)){if(typeof window!="undefined"){let a=window.innerHeight||((s=document.documentElement)==null?void 0:s.clientHeight)||0;if(a&&i.boundingClientRect.top>a*.98)return}n.__infoRevealActivated=!0,Di==null||Di.unobserve(n),Zp(n,e,t)}})}function Bi(r=document,e){var a,o;let t=(a=e==null?void 0:e.duration)!=null?a:.72,i=(o=e==null?void 0:e.offset)!=null?o:20;Di&&Di.disconnect();let n=typeof window!="undefined"&&"IntersectionObserver"in window,s=Yp(r);if(s.length){if(Jo=r,s.forEach(c=>{N_(c,i)}),!n){s.forEach(c=>{c.__infoRevealActivated||(c.__infoRevealActivated=!0,Zp(c,t,i))});return}Di=new IntersectionObserver(c=>U_(c,t,i),{threshold:0,rootMargin:"0px 0px -5% 0px"}),s.forEach(c=>{c.__infoRevealActivated||Di==null||Di.observe(c)})}}function Tr(){Di&&(Di.disconnect(),Di=null),Jo&&Yp(Jo).forEach(r=>{var t;r.style.removeProperty("will-change"),((t=r.__infoRevealChildren)!=null?t:Array.from(r.children)).forEach(i=>{var n,s;i.style.removeProperty("will-change"),(n=i.__infoRevealInner)==null||n.forEach(a=>a.style.removeProperty("will-change")),(s=i.__infoRevealSecondary)==null||s.forEach(a=>a.style.removeProperty("will-change"))})}),Jo=null}hi();function Qo(){return window.innerWidth>480}var Ar=class Ar{constructor(){}static getInstance(){return Ar.instance||(Ar.instance=new Ar),Ar.instance}cleanup(){}};Z(Ar,"instance");var vu=Ar,$p=vu.getInstance();var Kp=/[:x\/]/i;function B_(r){if(!r)return null;let e=r.trim();if(!e)return null;let t=e.replace(/\s+/g,"");if(Kp.test(t)){let n=t.split(Kp);if(n.length!==2)return null;let s=Number.parseFloat(n[0]),a=Number.parseFloat(n[1]);return!Number.isFinite(s)||!Number.isFinite(a)||s<=0||a<=0?null:{width:s,height:a}}let i=Number.parseFloat(t);return!Number.isFinite(i)||i<=0?null:{width:i,height:1}}function k_(r){for(let e of Array.from(r)){let t=e.toLowerCase(),i=t.startsWith("ratio")?t.replace(/^ratio[-_]?/,""):t;if(!i)continue;if(/^\d+(?:[x:\/]\d+)?$/.test(i)||/^\d+(?:\.\d+)?$/.test(i))return i}return null}function xu(r){let e=".project-video, .case-media, .grid-video, .video-item, .video-item-prj, video[data-aspect], video[data-ratio]",t=[];r instanceof HTMLElement&&r.matches(e)&&t.push(r),t.push(...r.querySelectorAll(e)),t.forEach(i=>{var c,l,h,u;let n=k_(i.classList),s=(u=(h=(l=(c=i.getAttribute("aspect-ratio"))!=null?c:i.dataset.aspect)!=null?l:i.getAttribute("data-aspect"))!=null?h:i.getAttribute("data-ratio"))!=null?u:n,a=B_(s);if(!a){i.dataset.aspectRatioApplied==="true"&&(i.style.removeProperty("aspect-ratio"),delete i.dataset.aspectRatioApplied);return}i.style.setProperty("aspect-ratio",`${a.width} / ${a.height}`),i.dataset.aspectRatioApplied="true";let o=[];i.matches("video, iframe, embed")?o.push(i):o.push(...i.querySelectorAll("video, iframe, embed, picture, img")),o.forEach(d=>{d.style.width||(d.style.width="100%"),d.style.height||(d.style.height="100%"),d.style.objectFit||(d.style.objectFit=d instanceof HTMLVideoElement?"cover":d.style.objectFit)})})}function ji(r){xu(r),typeof requestAnimationFrame=="function"&&requestAnimationFrame(()=>{xu(r)}),setTimeout(()=>{xu(r)},200),r.querySelectorAll("video").forEach(t=>{t.dataset.initialized!=="true"&&(t.muted=!0,t.loop=!0,t.playsInline=!0,t.setAttribute("playsinline",""),t.hasAttribute("controls")&&t.removeAttribute("controls"),t.controls=!1,t.dataset.initialized="true",z_(t))}),H_(r)}function z_(r){if(r.dataset.bgHandlerInitialized==="true")return;r.dataset.bgHandlerInitialized="true",r.style.backgroundColor="transparent";let e=null;if(r.classList.contains("video-item")||r.classList.contains("video-item-prj")?e=r:e=r.closest(".video-item, .video-item-prj, .grid-video"),!e)return;let t=e.classList.contains("case-media"),i=e.classList.contains("slide-video"),n=window.getComputedStyle(e).backgroundImage,s=e,a=r.poster||r.getAttribute("data-poster")||"",o=()=>{if(s.style.backgroundColor="transparent",!a)return;let l=s.style.backgroundImage,h=window.getComputedStyle(s).backgroundImage,u=s.dataset.bgPosterApplied==="true",d=l&&l!=="none"&&l.trim()!=="",f=h&&h!=="none"&&h.trim()!=="";!i&&(u||d||f)||((!s.style.backgroundImage||s.style.backgroundImage==="none")&&(s.style.backgroundImage=`url("${a}")`),s.style.backgroundSize||(s.style.backgroundSize="cover"),s.style.backgroundPosition||(s.style.backgroundPosition="center"),s.style.backgroundRepeat||(s.style.backgroundRepeat="no-repeat"),s.dataset.bgPosterApplied="true")};o();let c=()=>{e&&r.readyState>=3&&(o(),(t||i)&&(s.dataset.bgPosterApplied="true",s.style.setProperty("background-image","none","important")))};if(r.addEventListener("playing",()=>{setTimeout(c,50)}),r.addEventListener("loadeddata",()=>{!r.paused&&r.readyState>=3&&setTimeout(c,50)}),t||i){let l=()=>{if(n&&n!=="none"){s.style.setProperty("background-image",n,"important"),s.dataset.bgPosterApplied="true";return}a&&(!s.style.backgroundImage||s.style.backgroundImage==="none")&&(s.style.setProperty("background-image",`url("${a}")`,"important"),s.dataset.bgPosterApplied="true")};r.addEventListener("pause",l),r.addEventListener("ended",l)}!r.paused&&r.readyState>=3&&c()}function H_(r){r.querySelectorAll("img.grid-image, img.project-image, .grid-image > img, .project-image > img").forEach(t=>{if(t.dataset.bgHandlerInitialized==="true")return;t.dataset.bgHandlerInitialized="true";let i=null;if(t.classList.contains("grid-image")||t.classList.contains("project-image")?i=t:i=t.closest(".grid-image, .project-image"),!i)return;let n=()=>{i&&t.complete&&t.naturalWidth>0&&(i.style.backgroundColor="transparent")};if(t.complete&&t.naturalWidth>0){n();return}t.addEventListener("load",()=>{setTimeout(n,50)})})}function ps(r){r.querySelectorAll("video").forEach(t=>{if(t.paused){t.muted=!0;try{let i=t.play();i!==void 0&&i.catch(()=>{})}catch{}}})}function ms(){if(!Qo())return;let r=document.querySelectorAll(".project-media, .project-image, .project-video, .grid-image, .grid-video"),e=new Set;r.forEach(i=>{if(!i)return;if(i.classList.contains("project-media")){e.add(i);return}let n=i.closest(".project-media");if(n){e.add(n);return}e.add(i)}),e.forEach(i=>{let c=1;i.style.zIndex="1",i.style.position="relative",i.addEventListener("mouseenter",()=>{let l=i.closest(".project-flex"),h=l==null?void 0:l.classList.contains("gallery-expanded"),u=i.classList.contains("expanded");!h&&!u&&(c++,i.style.zIndex=c.toString(),$.to(i,{scale:1.15,duration:.025,ease:"power2.out",overwrite:"auto"}))}),i.addEventListener("mouseleave",()=>{let l=i.closest(".project-flex"),h=l==null?void 0:l.classList.contains("gallery-expanded"),u=i.classList.contains("expanded");!h&&!u&&$.to(i,{scale:1,duration:.12,ease:"power3.inOut",overwrite:"auto",onComplete:()=>{i.style.zIndex="1"}})})}),[{trigger:"#creative-hover",target:".creative-direction-hover"},{trigger:"#digital-hover",target:".digital-hover"},{trigger:"#identity-hover",target:".identity-hover"},{trigger:"#imaging-hover",target:".imaging-hover"}].forEach(({trigger:i,target:n})=>{let s=document.querySelector(i),a=document.querySelector(n);if(!s||!a)return;ji(a);let o=$.timeline({paused:!0}).set(a,{display:"flex"}).fromTo(a,{opacity:0},{opacity:1,duration:.1,ease:"power2.out"}),c=$.timeline({paused:!0}).to(a,{opacity:0,duration:.1,ease:"power2.in",onComplete:()=>{$.set(a,{display:"none"})}});s.addEventListener("mouseenter",()=>{c.kill(),o.restart(),a.querySelectorAll("video").forEach(h=>{try{h.play()}catch{}})}),s.addEventListener("mouseleave",()=>{o.kill(),c.restart(),a.querySelectorAll("video").forEach(h=>{try{h.pause(),h.currentTime=0}catch{}})})})}hi();var tm=479,im={height:"32px",borderRadius:"15.5px"},V_={height:"36px",borderRadius:"17.5px"},G_="2.5px",xn=null,Jp,Aa=null,Qp=new Map,gs=!1,em=!1,ec=!1;function nm(){if(!xn||typeof window=="undefined")return;let e=window.innerWidth<=tm?V_:im;Object.assign(xn.style,e)}function W_(){if(typeof window=="undefined"||em)return;let r=()=>window.requestAnimationFrame(nm),e=window.matchMedia(`(max-width: ${tm}px)`);typeof e.addEventListener=="function"?e.addEventListener("change",r):e.addListener(r),window.addEventListener("resize",r),em=!0}function _u(){if(xn)return xn;xn=document.createElement("div"),xn.classList.add("active-link-background","active-link-overlay"),Object.assign(xn.style,{position:"absolute",top:G_,...im,zIndex:"1",pointerEvents:"none"}),typeof window!="undefined"&&(nm(),W_());let r=document.querySelector(".navbar-container");return r&&!r.querySelector(".active-link-background")&&(r.appendChild(xn),j_(),X_()),xn}function yu(){gs=!0,document.querySelectorAll(".nav-button").forEach(e=>{$.set(e,{backgroundColor:"transparent"}),e.classList.add("is-transitioning")})}function rm(){gs=!1,document.querySelectorAll(".nav-button").forEach(e=>{e.classList.remove("is-transitioning")}),ec&&(ec=!1,typeof window!="undefined"?window.requestAnimationFrame(()=>ui()):ui())}function X_(){document.querySelectorAll(".nav-button").forEach(e=>{let t=Qp.get(e);t&&(e.removeEventListener("mouseenter",t.mouseenter),e.removeEventListener("mouseleave",t.mouseleave),e.removeEventListener("click",t.click));let i=()=>{!e.classList.contains("w--current")&&!e.classList.contains("is-transitioning")&&!gs&&$.to(e,{backgroundColor:"light-dark(rgba(0, 0, 0, 0.04), rgba(255, 255, 255, 0.06))",duration:.2,ease:"power2.out",overwrite:"auto"})},n=()=>{!e.classList.contains("w--current")&&!gs&&$.to(e,{backgroundColor:"transparent",duration:.3,ease:"power2.out",overwrite:"auto"})},s=()=>{$.set(e,{backgroundColor:"transparent"}),yu()};e.addEventListener("mouseenter",i),e.addEventListener("mouseleave",n),e.addEventListener("click",s),Qp.set(e,{mouseenter:i,mouseleave:n,click:s})})}function q_(){return document.querySelector(".nav-button.w--current")}function ui(r,e){var y;let t=_u();if(!t)return;if(!r&&gs){ec=!0;return}ec=!1;let{duration:i=.5,ease:n="power2.out",delay:s=0}=e||{},a=document.querySelector(".navbar-container");if(!a)return;let o=window.location.pathname,c=r||document.querySelector('[data-barba="container"]')||void 0,l=c==null?void 0:c.getAttribute("data-barba-namespace"),h=w=>w?["cases","projects","digital","graphic","direction","imaging"].includes(w)?document.querySelector('[data-page="projects"]'):w==="info"?document.querySelector('[data-page="info"]'):w==="archive"?document.querySelector('[data-page="archive"]'):null:null,u=()=>o==="/info"||o==="/"?document.querySelector('[data-page="info"]'):o==="/archive"?document.querySelector('[data-page="archive"]'):o.startsWith("/projects")||o.includes("/case")||["digital","graphic","direction","imaging"].some(w=>o.includes(w))?document.querySelector('[data-page="projects"]'):document.querySelector(".nav-button.w--current"),d=(y=h(l))!=null?y:u();if(!d)return;let f=q_(),x=a.getBoundingClientRect(),g=d.getBoundingClientRect(),m=g.left-x.left,p=g.width;Aa&&Aa.kill(),f&&f!==d&&f.classList.remove("w--current"),d.classList.add("w--current"),Array.from(document.querySelectorAll(".nav-button")).forEach(w=>{let A=w===d,T=w.querySelector(".nav_text");A?(w.style.setProperty("color","var(--text-white)","important"),T==null||T.style.setProperty("color","var(--text-white)","important")):(w.style.removeProperty("color"),T==null||T.style.removeProperty("color"))}),$.set(t,{visibility:"visible",opacity:1}),Aa=$.to(t,{left:m,width:p,duration:i,ease:"power2.out",delay:s,overwrite:"auto",onComplete:()=>{Aa=null}}),Y_()}function Y_(){document.querySelectorAll(".nav-button").forEach(e=>{$.set(e,{backgroundColor:"transparent"})})}function j_(){let r=document.querySelectorAll(".nav-button"),e={attributes:!0,attributeFilter:["class"]},t=function(i){if(!gs)for(let n of i)n.type==="attributes"&&n.attributeName==="class"&&(Aa||ui())};Jp=new MutationObserver(t),r.forEach(i=>{Jp.observe(i,e)})}hi();var tc=["projects","digital","graphic","direction","imaging"];var sm=.5,am="power2.out",om=null;function cm(r){let e={display:"flex",gap:"0.5rem",flexDirection:"row"};Object.assign(r.style,e)}function lm(r){let e=document.querySelector(".projects-nav");if(!e)return;om=e;let t=tc.includes(r.next.namespace);if(!tc.includes(r.next.namespace)){$.to(e,{opacity:0,duration:sm,ease:am,onComplete:()=>{$.set(e,{display:"none"})}});return}if(t){if(cm(e),r.current.namespace!==r.next.namespace){e.querySelectorAll("a").forEach(a=>{a.classList.remove("w--current")});let s=e.querySelector(`[href*="${r.next.namespace}"]`);s&&s.classList.add("w--current")}tc.includes(r.current.namespace)||$.set(e,{display:"flex",opacity:0,visibility:"visible"})}}function hm(r=!0){let e=document.querySelector(".projects-nav");if(!e)return;om=e;let t=document.querySelector('[data-barba="container"]'),i=t==null?void 0:t.getAttribute("data-barba-namespace");if(!tc.includes(i)){$.set(e,{display:"none",opacity:0});return}cm(e),r?$.fromTo(e,{opacity:0},{opacity:1,duration:sm,ease:am,delay:.1}):$.set(e,{opacity:0,display:"flex",visibility:"visible"})}hi();Ra();var vm=.22;function vs(r,e={}){var u,d;let{animateMedia:t=!0}=e,i=r,n=Array.from(r.querySelectorAll(".project-div"));if(i.__projectsEntranceHandled=!0,!n.length){if(i.__projectsEntrancePromise)return i.__projectsEntrancePromise;let f=new Promise(x=>{let g=new MutationObserver(()=>{if(!Array.from(r.querySelectorAll(".project-div")).length)return;g.disconnect(),i.__projectsEntranceObserver=null;let p=vs(r,e);p?p.then(x).catch(x):x()});i.__projectsEntranceObserver=g,g.observe(r,{childList:!0,subtree:!0})});return i.__projectsEntrancePromise=f,i.__projectsFiltersInitialized=!1,f}i.__projectsEntranceObserver&&(i.__projectsEntranceObserver.disconnect(),i.__projectsEntranceObserver=null);let s=(u=r.querySelector(".project-list-wrapper"))!=null?u:r.querySelector(".project-list");if(!t){let f=(d=r.querySelector(".projects-wrapper"))!=null?d:r.querySelector(".projects_wrapper");f&&$.set(f,{pointerEvents:"auto"}),$.set(n,{pointerEvents:"auto"});let x=n.map(m=>m.querySelector(".description-div")).filter(m=>!!m);x.length&&$.set(x,{pointerEvents:"auto"});let g=r.querySelectorAll(".project-image, .project-video, .grid-image, .grid-video, .video-item");return g.length&&$.set(g,{pointerEvents:"auto"}),s&&$.set(s,{pointerEvents:"auto"}),i.__projectsEntranceTimeline=void 0,i.__projectsEntrancePromise=null,null}let a=At.distance*1.1;i.__projectsEntranceTimeline&&(i.__projectsEntranceTimeline.kill(),delete i.__projectsEntranceTimeline),i.__projectsEntrancePromise=null,i.__projectsFiltersInitialized=!1,s&&$.set(s,{autoAlpha:1,pointerEvents:"none"}),$.set(n,{autoAlpha:0,y:a,overwrite:"auto",pointerEvents:"none",visibility:"hidden"});let o=n.map(f=>f.querySelector(".description-div")).filter(f=>!!f);o.length&&$.set(o,{autoAlpha:0,y:a*.6,overwrite:"auto",pointerEvents:"none",visibility:"hidden"});let c=r.querySelectorAll(".project-image, .project-video, .grid-image, .grid-video, .video-item");c.length&&$.set(c,{autoAlpha:0,overwrite:"auto",pointerEvents:"none",visibility:"hidden"});let l=$.timeline({defaults:{ease:"power2.out"}});i.__projectsEntranceTimeline=l,l.addLabel("start",vm),l.to(n,{autoAlpha:1,y:0,duration:At.enter,overwrite:"auto",onStart:()=>{$.set(n,{visibility:"visible"})},onComplete:()=>{$.set(n,{pointerEvents:"auto"})}},"start"),n.forEach(f=>{let x=f.querySelector(".description-div");x&&l.to(x,{autoAlpha:1,y:0,duration:.55,pointerEvents:"auto",overwrite:"auto",onStart:()=>{x.style.visibility="visible"}},"start+=0.05");let g=f.querySelectorAll(".project-image, .project-video, .grid-image, .grid-video, .video-item");g.length&&l.to(g,{autoAlpha:1,duration:.6,stagger:.04,overwrite:"auto",onStart:()=>{g.forEach(m=>{m.style.visibility="visible"})},onComplete:()=>{g.forEach(m=>{m.style.pointerEvents="auto"})}},`start+=${vm}`)});let h=new Promise(f=>{let x=!1,g=()=>{x||(x=!0,i.__projectsEntranceTimeline===l&&delete i.__projectsEntranceTimeline,s&&(s.style.pointerEvents="auto"),i.__projectsEntrancePromise=null,f())};l.eventCallback("onComplete",g),l.eventCallback("onInterrupt",g)});return i.__projectsEntrancePromise=h,h}var xm=Up;var Yd=null,jd=null;function Yr(){return Yd||(Yd=Promise.resolve().then(()=>(Am(),Tm))),Yd}function ih(){return jd||(jd=Promise.resolve().then(()=>(Og(),Dg))),jd}Ra();hi();hi();function Fg(){[".active-link-background",".barba-container",".project-flex",".project-div"].forEach(e=>{let t=document.querySelectorAll(e);t.length>0&&t.forEach(i=>{i.style.willChange="transform, opacity",(e===".barba-container"||e===".project-flex")&&(i.style.transform="translateZ(0)")})})}function mo(){['[data-barba="container"]',".projects-nav",".project-flex"].forEach(e=>{let t=document.querySelectorAll(e);t.length>0&&t.forEach(i=>{let n=i;n.style.willChange="transform, opacity",e==='[data-barba="container"]'&&(n.style.backfaceVisibility="hidden",n.style.transform="translateZ(0)")})})}function Qs(){setTimeout(()=>{let r=document.querySelectorAll('[style*="will-change"]:not(.barba-container):not(.project-flex):not(.active-link-background)');r.length>0&&r.forEach(e=>{let t=e;t.style.willChange="auto"}),typeof $!="undefined"&&$.globalTimeline.getChildren().forEach(e=>{e.progress()===1&&e.kill()})},100)}function Ng(){let r=document.querySelectorAll(".project-flex, .project-div");r.length>0&&r.forEach(e=>{e.style.willChange="transform, opacity",e.classList.contains("project-flex")&&(e.style.backfaceVisibility="hidden",e.style.transform="translateZ(0)")})}ac();var jr=null,nh=!1,vo=0;function Ug(r){vo+=1;let e=vo;nh=!1,jr=(async()=>{var t;try{window.currentPanoramaSlider&&(window.currentPanoramaSlider.destroy(),window.currentPanoramaSlider=void 0);let i=await xm(r!=null?r:document);return e!==vo?((t=i==null?void 0:i.destroy)==null||t.call(i),null):(i&&(window.currentPanoramaSlider=i),i)}catch{return null}})()}function ea(r=1.15,e=0){let t=i=>{jr=null,!(!i||nh)&&(nh=!0,i.fadeIn(r,e))};jr?jr.then(i=>{t(i)}).catch(()=>{jr=null}):window.currentPanoramaSlider&&t(window.currentPanoramaSlider)}var go={async beforeEnter({next:r}){var d,f,x,g;let e=r==null?void 0:r.container;if(!(e instanceof HTMLElement))return;let{destroyProjectFilters:t,initProjectFilters:i,applyProjectFilter:n}=await Yr();t(),mo(),ui(e),ji(e),Xp(),ms(),Bi(e),i(e,{initialListState:"hidden"});let s=new URL(window.location.href),a=(f=(d=s.searchParams.get("category"))!=null?d:s.searchParams.get("capability"))!=null?f:"",o=a?a.toLowerCase().trim():"all";n(o,{animate:!1,updateUrl:!1});let c=Array.from(e.querySelectorAll('.project-div[style*="display: block"]'));c.length&&$.set(c,{opacity:0,overwrite:"auto"});let l=c.flatMap(m=>Array.from(m.querySelectorAll(".project-image, .project-video, .grid-image, .grid-video, .video-item")));l.length&&$.set(l,{opacity:0,overwrite:"auto"});let h=c.flatMap(m=>Array.from(m.querySelectorAll(".description-div")));h.length&&$.set(h,{opacity:0,overwrite:"auto"});let u=(x=e.querySelector(".project-list-wrapper"))!=null?x:e.querySelector(".project-list");if(u){$.set(u,{autoAlpha:0,pointerEvents:"none"});let m=(g=u.querySelector("[data-filter-empty]"))!=null?g:u.querySelector(".w-dyn-empty");m&&$.set(m,{autoAlpha:0,display:"none",pointerEvents:"none"})}},async beforeLeave(){Tr();let{destroyProjectFilters:r}=await Yr();r(),window.currentPanoramaSlider&&(window.currentPanoramaSlider.destroy(),window.currentPanoramaSlider=void 0)},async afterEnter({next:r}){let e=r==null?void 0:r.container;if(!(e instanceof HTMLElement))return;Bi(e),setTimeout(()=>{Qs()},1e3);let t=e;if(!t.__projectsFiltersInitialized){let{initProjectFilters:i}=await Yr();i(e,{initialListState:"visible"}),t.__projectsFiltersInitialized=!0}}},Bg=[{namespace:"info",beforeEnter({next:r}){let e=r==null?void 0:r.container;if(!(e instanceof HTMLElement))return;let t=document.querySelector('[data-page="projects"]');t&&(t.classList.remove("w--current"),t.style.color="var(--text-dark)"),ui(e),ms(),Ug(e),Bi(e)},afterEnter({next:r}){let e=r==null?void 0:r.container;e instanceof HTMLElement&&(!jr&&!window.currentPanoramaSlider&&Ug(e),Bi(e))},beforeLeave(){vo+=1,jr=null,nh=!1,Tr(),window.currentPanoramaSlider&&window.currentPanoramaSlider.fadeOut(.3).then(()=>{window.currentPanoramaSlider&&(window.currentPanoramaSlider.destroy(),window.currentPanoramaSlider=void 0)})}},{namespace:"archive",beforeEnter({next:r}){let e=r==null?void 0:r.container;if(!e)return;let t=document.querySelector('[data-page="projects"]');t&&(t.classList.remove("w--current"),t.style.color="var(--text-dark)"),ui(e),Bi(e)},beforeLeave(){Tr(),window.currentPanoramaSlider&&(window.currentPanoramaSlider.destroy(),window.currentPanoramaSlider=void 0)},afterEnter({next:r}){let e=r==null?void 0:r.container;if(!e||(Bi(e),!document.body.contains(e)))return;e.getAttribute("data-barba-namespace")==="archive"&&requestAnimationFrame(()=>{document.body.contains(e)&&ih().then(({initializeArchiveSphere:i})=>{i(e)})})}},{namespace:"cases",beforeEnter({next:r}){let e=r==null?void 0:r.container;e&&(mo(),ui(e),ms(),ji(e),wr(e),xs(e),Bi(e))},afterEnter({next:r}){let e=r==null?void 0:r.container;e&&(Bi(e),setTimeout(()=>{Qs()},1e3))},beforeLeave(){Tr(),Ea(!0)}},{namespace:"projects",...go},{namespace:"digital",...go},{namespace:"graphic",...go},{namespace:"direction",...go},{namespace:"imaging",...go}];var kg=Array.from(nc);function rh(r){var e,t;return r?r.namespace?r.namespace:(t=(e=r.container)==null?void 0:e.getAttribute("data-barba-namespace"))!=null?t:null:null}async function wE(r,e){let t=[],i=Pa(r,e);t.push(i),r==="cases"&&Er(At.enter,.1),r==="info"&&ea(At.enter,0),await Promise.all(t)}async function EE(r,e){if(await gm(r,e),r==="archive"){let{destroyArchiveSphere:t}=await ih();t()}}var Zr={name:"page-transition",sync:!1,before(r){var e,t,i,n;yu(),lm({current:{namespace:(t=(e=r.current)==null?void 0:e.namespace)!=null?t:""},next:{namespace:(n=(i=r.next)==null?void 0:i.namespace)!=null?n:""}})},leave(r){var t,i,n;if(!((t=r.current)!=null&&t.container))return Promise.resolve();let e=rh(r.current);return ui((n=(i=r.next)==null?void 0:i.container)!=null?n:void 0),EE(e,r.current.container)},beforeEnter(r){var i;let e=(i=r.next)==null?void 0:i.container;if(!e)return;let t=rh(r.next);Ca(t,e),ji(e),ps(e)},enter(r){var i;let e=(i=r.next)==null?void 0:i.container;if(!e)return Promise.resolve();let t=rh(r.next);return ps(e),wE(t,e)},after(r){var e;if(rm(),(e=r.next)!=null&&e.container){ps(r.next.container),ui(r.next.container);let t=rh(r.next);t&&nc.has(t)&&vs(r.next.container,{animateMedia:!1})}}},zg={name:"project-page-transition",from:{namespace:kg},to:{namespace:kg},sync:!1,before:Zr.before,leave:Zr.leave,beforeEnter:Zr.beforeEnter,enter:Zr.enter,after:Zr.after};ac();Ra();var Hg=`
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
`;var Gg=document.createElement("style");Gg.textContent=Hg;document.head.appendChild(Gg);var or=null,Vg=!1;function xo(r,e=4,t=600){let i=Math.max(1,e),n=()=>{r instanceof HTMLElement&&!document.body.contains(r)||(vn(r),i-=1,!(i<=0)&&window.setTimeout(n,t))};n()}function TE(){or&&$.set(or,{opacity:0,y:At.distance,willChange:"transform, opacity"})}function Wg(){return!or||Vg?Promise.resolve():(Vg=!0,new Promise(r=>{$.to(or,{opacity:1,y:0,duration:At.enter,ease:At.ease,onComplete:()=>{or==null||or.style.removeProperty("will-change"),r()}})}))}cn.default.init({debug:!1,sync:!1,preventRunning:!0,transitions:[Zr,zg],views:Bg,prefetch:!0});cn.default.hooks.before(r=>{mo()});cn.default.hooks.beforeLeave(({current:r})=>{let e=r==null?void 0:r.container;e instanceof HTMLElement||e instanceof Document?Go(e):Go()});cn.default.hooks.leave(r=>{var t,i,n;let e=(i=(t=r.current)==null?void 0:t.namespace)!=null?i:null;if(sh(e)){let s=(n=r.current)==null?void 0:n.container;if(s){let a=s.querySelectorAll(".project-image, .project-video");$.set(a,{opacity:1})}}});cn.default.hooks.afterEnter(({next:r})=>{var i,n,s;let e=r!=null&&r.container&&r.container instanceof HTMLElement?r.container:document;vn(e);let t=(s=(n=r==null?void 0:r.namespace)!=null?n:(i=r==null?void 0:r.container)==null?void 0:i.getAttribute("data-barba-namespace"))!=null?s:null;t==="cases"&&(r==null?void 0:r.container)instanceof HTMLElement&&xo(r.container),(r==null?void 0:r.container)instanceof HTMLElement&&r.container.querySelector(".case-slider")&&t!=="cases"&&(wr(r.container),Er(At.enter,.1)),Xo(e).then(a=>{a.length&&a.forEach(o=>{o.fadeIn(At.enter,0)})}).catch(a=>{}),t==="info"&&ea(At.enter,0)});cn.default.hooks.once(async({next:r})=>{var s,a,o;let e=(s=r==null?void 0:r.container)!=null?s:document.querySelector('[data-barba="container"]'),t=(o=(a=r==null?void 0:r.namespace)!=null?a:e==null?void 0:e.getAttribute("data-barba-namespace"))!=null?o:null;e instanceof HTMLElement?vn(e):vn(document),t==="cases"&&e instanceof HTMLElement&&xo(e);let i=[Wg()],n=e instanceof HTMLElement?e:null;if(n!=null&&n.querySelector(".case-slider")&&t!=="cases"&&(wr(n),Er(At.enter,.1)),Xo(n!=null?n:document).then(c=>{c.length&&c.forEach(l=>{l.fadeIn(At.enter,0)})}).catch(c=>{}),n){Ca(t,n);let c=Pa(t,n);i.push(c)}if(t==="info"&&ea(At.enter,0),t==="cases"&&(n&&xo(n),xs(n!=null?n:document)),await Promise.all(i),t&&sh(t)&&n){let{initProjectFilters:c}=await Yr();c(n,{initialListState:"visible"});let l=n;l.__projectsFiltersInitialized=!0,vs(n,{animateMedia:!1})}});cn.default.hooks.enter(r=>{let e=document.querySelector(".preload-container");e&&(e.style.display="none")});cn.default.hooks.after(async({next:r})=>{"scrollRestoration"in history&&(history.scrollRestoration="manual");try{r!=null&&r.container&&(uh(),Ko(r.container),await new Promise(e=>setTimeout(e,100)),ps(r.container),setTimeout(()=>{Qs()},1e3))}catch{}setTimeout(()=>{Qs()},1e3),Ko(document)});cn.default.hooks.afterLeave(r=>{var e;qp(),(e=r.current)!=null&&e.container?wa(r.current.container):wa(document),typeof window!="undefined"&&window.scrollTo(0,0)});function sh(r){return r?["projects","digital","graphic","direction","imaging"].includes(r):!1}document.addEventListener("DOMContentLoaded",()=>{or=document.querySelector(".navbar-container"),Ko(document),TE(),Wg(),typeof window!="undefined"&&window.scrollTo(0,0),_u(),ui(),ji(document),ms(),vn(document),hm(!1),Ng(),Fg();let r=document.querySelector('[data-barba="container"]'),e=()=>{var l;if(!(r instanceof HTMLElement))return;let n=(l=r.getAttribute("data-barba-namespace"))!=null?l:null,s=r,a=n?sh(n):!1,o=[];if(Bi(r),!a||!s.__projectsEntranceHandled){Ca(n,r);let h=Pa(n,r);o.push(h)}Promise.all(o.length?o:[Promise.resolve()]).then(async()=>{if(a&&!s.__projectsFiltersInitialized){let{initProjectFilters:h}=await Yr();h(r,{initialListState:"visible"}),s.__projectsFiltersInitialized=!0}a&&!s.__projectsEntranceHandled&&vs(r,{animateMedia:!1}),n==="info"&&ea(At.enter,0),n==="cases"&&xs(r)}),r.querySelector(".case-slider")&&(wr(r),Er(At.enter,.1)),n==="cases"&&r&&xo(r)},t=r instanceof HTMLElement?r.getAttribute("data-barba-namespace"):null,i=window.Webflow;if(e(),t&&sh(t)&&i&&typeof i.push=="function"&&i.push(e),!(r instanceof HTMLElement)){let n=document;n.querySelector(".case-slider")&&(wr(n),Er(At.enter,.1)),t==="cases"&&(xo(n),xs(n))}});window.addEventListener("resize",()=>{ui(),Qo()&&ji(document),window.currentPanoramaSlider&&window.currentPanoramaSlider.update()});window.addEventListener("unload",()=>{$p.cleanup(),window.currentPanoramaSlider&&(window.currentPanoramaSlider.destroy(),window.currentPanoramaSlider=void 0),Ea(!0),wa(document),Tr()});
