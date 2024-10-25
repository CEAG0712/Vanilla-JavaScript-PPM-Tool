/*! For license information please see 286.index.js.LICENSE.txt */
"use strict";(self.webpackChunkfront_end=self.webpackChunkfront_end||[]).push([[286],{286:(t,e,r)=>{r.r(e),r.d(e,{default:()=>p});var n=r(536),o=r(716),i=r(465),a=r.n(i),u=r(392);function c(t){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},c(t)}function l(){l=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",u=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function f(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(t){f=function(t,e,r){return t[e]=r}}function h(t,e,r,n){var i=e&&e.prototype instanceof b?e:b,a=Object.create(i.prototype),u=new T(n||[]);return o(a,"_invoke",{value:P(t,r,u)}),a}function p(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=h;var y="suspendedStart",v="suspendedYield",d="executing",m="completed",g={};function b(){}function w(){}function S(){}var L={};f(L,a,(function(){return this}));var x=Object.getPrototypeOf,E=x&&x(x(G([])));E&&E!==r&&n.call(E,a)&&(L=E);var k=S.prototype=b.prototype=Object.create(L);function j(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function O(t,e){function r(o,i,a,u){var l=p(t[o],t,i);if("throw"!==l.type){var s=l.arg,f=s.value;return f&&"object"==c(f)&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,a,u)}),(function(t){r("throw",t,a,u)})):e.resolve(f).then((function(t){s.value=t,a(s)}),(function(t){return r("throw",t,a,u)}))}u(l.arg)}var i;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return i=i?i.then(o,o):o()}})}function P(e,r,n){var o=y;return function(i,a){if(o===d)throw Error("Generator is already running");if(o===m){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var u=n.delegate;if(u){var c=_(u,n);if(c){if(c===g)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===y)throw o=m,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=d;var l=p(e,r,n);if("normal"===l.type){if(o=n.done?m:v,l.arg===g)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(o=m,n.method="throw",n.arg=l.arg)}}}function _(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,_(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g;var i=p(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,g;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,g):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,g)}function A(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function F(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(A,this),this.reset(!0)}function G(e){if(e||""===e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}throw new TypeError(c(e)+" is not iterable")}return w.prototype=S,o(k,"constructor",{value:S,configurable:!0}),o(S,"constructor",{value:w,configurable:!0}),w.displayName=f(S,s,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===w||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,S):(t.__proto__=S,f(t,s,"GeneratorFunction")),t.prototype=Object.create(k),t},e.awrap=function(t){return{__await:t}},j(O.prototype),f(O.prototype,u,(function(){return this})),e.AsyncIterator=O,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new O(h(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},j(k),f(k,s,"Generator"),f(k,a,(function(){return this})),f(k,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=G,T.prototype={constructor:T,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(F),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return u.type="throw",u.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],u=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),l=n.call(a,"finallyLoc");if(c&&l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!l)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,g):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),F(r),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;F(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:G(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),g}},e}function s(t,e,r,n,o,i,a){try{var u=t[i](a),c=u.value}catch(t){return void r(t)}u.done?e(c):Promise.resolve(c).then(n,o)}function f(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,h(n.key),n)}}function h(t){var e=function(t){if("object"!=c(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var r=e.call(t,"string");if("object"!=c(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==c(e)?e:e+""}const p=function(){return t=function t(){var e,r,n;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),e=this,n="/login",(r=h(r="pagePath1"))in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,this.loginForm=document.getElementById("login-form"),console.log("this.loginForm ",this.loginForm),this.pagePath="/login",this.render()},e=[{key:"addSubmitEventListener",value:function(){this.loginForm.addEventListener("submit",this.onSubmitLoginForm.bind(this))}},{key:"onSubmitLoginForm",value:(r=l().mark((function t(e){var r,i,c,s,f,h;return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.preventDefault(),r=e.target,(i={email:r.querySelector("[name = 'email']").value,password:r.querySelector("[name = 'password']").value}).email&&i.password){t.next=6;break}return a().fire({icon:"error",title:"Oops...",text:"All fields are required!"}),t.abrupt("return");case 6:return t.prev=6,t.next=9,n.A.login(i);case 9:c=t.sent,console.log("registration successfull"),this.clearFieldsAfterSubmit([r.querySelector("[name = 'email']"),r.querySelector("[name = 'password']")]),console.log("clear fields func",this.clearFieldsAfterSubmit),a().fire({title:"Login Successful!",text:"You are now ready work on your tasks!",icon:"success"}),console.log(c.data),o.A.auth.commit("setAuthUser",c.data.data),u.RR.emit("authStateChange",!0),(0,u.VJ)("/dashboard"),t.next=25;break;case 20:t.prev=20,t.t0=t.catch(6),console.log(t.t0),a().fire({icon:"error",title:"Oops...",text:null!==(s=null===t.t0||void 0===t.t0||null===(f=t.t0.response)||void 0===f||null===(f=f.data)||void 0===f?void 0:f.message)&&void 0!==s?s:" Something went wrong"}),console.log(null===t.t0||void 0===t.t0||null===(h=t.t0.response)||void 0===h?void 0:h.data);case 25:console.log(i);case 26:case"end":return t.stop()}}),t,this,[[6,20]])})),i=function(){var t=this,e=arguments;return new Promise((function(n,o){var i=r.apply(t,e);function a(t){s(i,n,o,a,u,"next",t)}function u(t){s(i,n,o,a,u,"throw",t)}a(void 0)}))},function(t){return i.apply(this,arguments)})},{key:"clearFieldsAfterSubmit",value:function(t){t.forEach((function(t){return t.value=""}))}},{key:"render",value:function(){this.addSubmitEventListener()}}],e&&f(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t;var t,e,r,i}()},536:(t,e,r)=>{r.d(e,{A:()=>u});var n=r(396);function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function i(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,a(n.key),n)}}function a(t){var e=function(t){if("object"!=o(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var r=e.call(t,"string");if("object"!=o(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==o(e)?e:e+""}const u=new(function(){return t=function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)},(e=[{key:"register",value:function(t){return n.A.post("/users/auth/create",t)}},{key:"login",value:function(t){return n.A.post("/users/auth/login",t)}}])&&i(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t;var t,e}())},396:(t,e,r)=>{r.d(e,{A:()=>u});var n=r(83);var o=r(465),i=r.n(o),a=n.A.create({baseURL:"https://kanban-board-api.azurewebsites.net/api/v1",withCredentials:!0,headers:{"Content-Type":"application/json"}});a.interceptors.response.use((function(t){return t}),(function(t){return(t.response||401===t.response.status)&&(i().fire({icon:"error",title:"Oops...",text:"Session time out, please login again"}),localStorage.removeItem("auth"),setTimeout((function(){location.href="/login"}),3e3)),Promise.reject(t)}));const u=a}}]);
//# sourceMappingURL=286.index.js.map