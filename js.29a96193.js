parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"g5IB":[function(require,module,exports) {

var t,e,n=module.exports={};function r(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function i(e){if(t===setTimeout)return setTimeout(e,0);if((t===r||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}function u(t){if(e===clearTimeout)return clearTimeout(t);if((e===o||!e)&&clearTimeout)return e=clearTimeout,clearTimeout(t);try{return e(t)}catch(n){try{return e.call(null,t)}catch(n){return e.call(this,t)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:r}catch(n){t=r}try{e="function"==typeof clearTimeout?clearTimeout:o}catch(n){e=o}}();var c,s=[],l=!1,a=-1;function f(){l&&c&&(l=!1,c.length?s=c.concat(s):a=-1,s.length&&h())}function h(){if(!l){var t=i(f);l=!0;for(var e=s.length;e;){for(c=s,s=[];++a<e;)c&&c[a].run();a=-1,e=s.length}c=null,l=!1,u(t)}}function m(t,e){this.fun=t,this.array=e}function p(){}n.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];s.push(new m(t,e)),1!==s.length||l||i(h)},m.prototype.run=function(){this.fun.apply(null,this.array)},n.title="browser",n.env={},n.argv=[],n.version="",n.versions={},n.on=p,n.addListener=p,n.once=p,n.off=p,n.removeListener=p,n.removeAllListeners=p,n.emit=p,n.prependListener=p,n.prependOnceListener=p,n.listeners=function(t){return[]},n.binding=function(t){throw new Error("process.binding is not supported")},n.cwd=function(){return"/"},n.chdir=function(t){throw new Error("process.chdir is not supported")},n.umask=function(){return 0};
},{}],"sNrv":[function(require,module,exports) {
var process = require("process");
var r=require("process");function t(r,t){for(var e=0,n=r.length-1;n>=0;n--){var o=r[n];"."===o?r.splice(n,1):".."===o?(r.splice(n,1),e++):e&&(r.splice(n,1),e--)}if(t)for(;e--;e)r.unshift("..");return r}function e(r){"string"!=typeof r&&(r+="");var t,e=0,n=-1,o=!0;for(t=r.length-1;t>=0;--t)if(47===r.charCodeAt(t)){if(!o){e=t+1;break}}else-1===n&&(o=!1,n=t+1);return-1===n?"":r.slice(e,n)}function n(r,t){if(r.filter)return r.filter(t);for(var e=[],n=0;n<r.length;n++)t(r[n],n,r)&&e.push(r[n]);return e}exports.resolve=function(){for(var e="",o=!1,s=arguments.length-1;s>=-1&&!o;s--){var i=s>=0?arguments[s]:r.cwd();if("string"!=typeof i)throw new TypeError("Arguments to path.resolve must be strings");i&&(e=i+"/"+e,o="/"===i.charAt(0))}return(o?"/":"")+(e=t(n(e.split("/"),function(r){return!!r}),!o).join("/"))||"."},exports.normalize=function(r){var e=exports.isAbsolute(r),s="/"===o(r,-1);return(r=t(n(r.split("/"),function(r){return!!r}),!e).join("/"))||e||(r="."),r&&s&&(r+="/"),(e?"/":"")+r},exports.isAbsolute=function(r){return"/"===r.charAt(0)},exports.join=function(){var r=Array.prototype.slice.call(arguments,0);return exports.normalize(n(r,function(r,t){if("string"!=typeof r)throw new TypeError("Arguments to path.join must be strings");return r}).join("/"))},exports.relative=function(r,t){function e(r){for(var t=0;t<r.length&&""===r[t];t++);for(var e=r.length-1;e>=0&&""===r[e];e--);return t>e?[]:r.slice(t,e-t+1)}r=exports.resolve(r).substr(1),t=exports.resolve(t).substr(1);for(var n=e(r.split("/")),o=e(t.split("/")),s=Math.min(n.length,o.length),i=s,u=0;u<s;u++)if(n[u]!==o[u]){i=u;break}var f=[];for(u=i;u<n.length;u++)f.push("..");return(f=f.concat(o.slice(i))).join("/")},exports.sep="/",exports.delimiter=":",exports.dirname=function(r){if("string"!=typeof r&&(r+=""),0===r.length)return".";for(var t=r.charCodeAt(0),e=47===t,n=-1,o=!0,s=r.length-1;s>=1;--s)if(47===(t=r.charCodeAt(s))){if(!o){n=s;break}}else o=!1;return-1===n?e?"/":".":e&&1===n?"/":r.slice(0,n)},exports.basename=function(r,t){var n=e(r);return t&&n.substr(-1*t.length)===t&&(n=n.substr(0,n.length-t.length)),n},exports.extname=function(r){"string"!=typeof r&&(r+="");for(var t=-1,e=0,n=-1,o=!0,s=0,i=r.length-1;i>=0;--i){var u=r.charCodeAt(i);if(47!==u)-1===n&&(o=!1,n=i+1),46===u?-1===t?t=i:1!==s&&(s=1):-1!==t&&(s=-1);else if(!o){e=i+1;break}}return-1===t||-1===n||0===s||1===s&&t===n-1&&t===e+1?"":r.slice(t,n)};var o="b"==="ab".substr(-1)?function(r,t,e){return r.substr(t,e)}:function(r,t,e){return t<0&&(t=r.length+t),r.substr(t,e)};
},{"process":"g5IB"}],"qLuP":[function(require,module,exports) {
var define;
var global = arguments[3];
var process = require("process");
var t,n=arguments[3],e=require("process");!function(n){"use strict";if("function"==typeof bootstrap)bootstrap("promise",n);else if("object"==typeof exports&&"object"==typeof module)module.exports=n();else if("function"==typeof t&&t.amd)t(n);else if("undefined"!=typeof ses){if(!ses.ok())return;ses.makeQ=n}else{if("undefined"==typeof window&&"undefined"==typeof self)throw new Error("This environment was not anticipated by Q. Please file a bug.");var e="undefined"!=typeof window?window:self,r=e.Q;e.Q=n(),e.Q.noConflict=function(){return e.Q=r,this}}}(function(){"use strict";var t=!1;try{throw new Error}catch(K){t=!!K.stack}var n,r=b(),o=function(){},i=function(){var t={task:void 0,next:null},n=t,r=!1,o=void 0,u=!1,c=[];function f(){for(var n,e;t.next;)n=(t=t.next).task,t.task=void 0,(e=t.domain)&&(t.domain=void 0,e.enter()),p(n,e);for(;c.length;)p(n=c.pop());r=!1}function p(t,n){try{t()}catch(K){if(u)throw n&&n.exit(),setTimeout(f,0),n&&n.enter(),K;setTimeout(function(){throw K},0)}n&&n.exit()}if(i=function(t){n=n.next={task:t,domain:u&&e.domain,next:null},r||(r=!0,o())},"object"==typeof e&&"[object process]"===e.toString()&&e.nextTick)u=!0,o=function(){e.nextTick(f)};else if("function"==typeof setImmediate)o="undefined"!=typeof window?setImmediate.bind(window,f):function(){setImmediate(f)};else if("undefined"!=typeof MessageChannel){var s=new MessageChannel;s.port1.onmessage=function(){o=a,s.port1.onmessage=f,f()};var a=function(){s.port2.postMessage(0)};o=function(){setTimeout(f,0),a()}}else o=function(){setTimeout(f,0)};return i.runAfter=function(t){c.push(t),r||(r=!0,o())},i}(),u=Function.call;function c(t){return function(){return u.apply(t,arguments)}}var f,p=c(Array.prototype.slice),s=c(Array.prototype.reduce||function(t,n){var e=0,r=this.length;if(1===arguments.length)for(;;){if(e in this){n=this[e++];break}if(++e>=r)throw new TypeError}for(;e<r;e++)e in this&&(n=t(n,this[e],e));return n}),a=c(Array.prototype.indexOf||function(t){for(var n=0;n<this.length;n++)if(this[n]===t)return n;return-1}),l=c(Array.prototype.map||function(t,n){var e=this,r=[];return s(e,function(o,i,u){r.push(t.call(n,i,u,e))},void 0),r}),d=Object.create||function(t){function n(){}return n.prototype=t,new n},h=Object.defineProperty||function(t,n,e){return t[n]=e.value,t},y=c(Object.prototype.hasOwnProperty),v=Object.keys||function(t){var n=[];for(var e in t)y(t,e)&&n.push(e);return n},m=c(Object.prototype.toString);f="undefined"!=typeof ReturnValue?ReturnValue:function(t){this.value=t};var k="From previous event:";function w(n,e){if(t&&e.stack&&"object"==typeof n&&null!==n&&n.stack){for(var r=[],o=e;o;o=o.source)o.stack&&(!n.__minimumStackCounter__||n.__minimumStackCounter__>o.stackCounter)&&(h(n,"__minimumStackCounter__",{value:o.stackCounter,configurable:!0}),r.unshift(o.stack));r.unshift(n.stack);var i=function(t){for(var n=t.split("\n"),e=[],r=0;r<n.length;++r){var o=n[r];!g(o)&&(-1===(i=o).indexOf("(module.js:")&&-1===i.indexOf("(node.js:"))&&o&&e.push(o)}var i;return e.join("\n")}(r.join("\n"+k+"\n"));h(n,"stack",{value:i,configurable:!0})}}function j(t){var n=/at .+ \((.+):(\d+):(?:\d+)\)$/.exec(t);if(n)return[n[1],Number(n[2])];var e=/at ([^ ]+):(\d+):(?:\d+)$/.exec(t);if(e)return[e[1],Number(e[2])];var r=/.*@(.+):(\d+)$/.exec(t);return r?[r[1],Number(r[2])]:void 0}function g(t){var e=j(t);if(!e)return!1;var o=e[0],i=e[1];return o===n&&i>=r&&i<=J}function b(){if(t)try{throw new Error}catch(K){var e=K.stack.split("\n"),r=j(e[0].indexOf("@")>0?e[1]:e[2]);if(!r)return;return n=r[0],r[1]}}function x(t){return t instanceof O?t:N(t)?(n=t,e=R(),x.nextTick(function(){try{n.then(e.resolve,e.reject,e.notify)}catch(t){e.reject(t)}}),e.promise):V(t);var n,e}x.resolve=x,x.nextTick=i,x.longStackSupport=!1;var T=1;function R(){var n,e=[],r=[],o=d(R.prototype),i=d(O.prototype);if(i.promiseDispatch=function(t,o,i){var u=p(arguments);e?(e.push(u),"when"===o&&i[1]&&r.push(i[1])):x.nextTick(function(){n.promiseDispatch.apply(n,u)})},i.valueOf=function(){if(e)return i;var t=Q(n);return _(t)&&(n=t),t},i.inspect=function(){return n?n.inspect():{state:"pending"}},x.longStackSupport&&t)try{throw new Error}catch(K){i.stack=K.stack.substring(K.stack.indexOf("\n")+1),i.stackCounter=T++}function u(o){n=o,x.longStackSupport&&t&&(i.source=o),s(e,function(t,n){x.nextTick(function(){o.promiseDispatch.apply(o,n)})},void 0),e=void 0,r=void 0}return o.promise=i,o.resolve=function(t){n||u(x(t))},o.fulfill=function(t){n||u(V(t))},o.reject=function(t){n||u(B(t))},o.notify=function(t){n||s(r,function(n,e){x.nextTick(function(){e(t)})},void 0)},o}function S(t){if("function"!=typeof t)throw new TypeError("resolver must be a function.");var n=R();try{t(n.resolve,n.reject,n.notify)}catch(e){n.reject(e)}return n.promise}function E(t){return S(function(n,e){for(var r=0,o=t.length;r<o;r++)x(t[r]).then(n,e)})}function O(t,n,e){void 0===n&&(n=function(t){return B(new Error("Promise does not support operation: "+t))}),void 0===e&&(e=function(){return{state:"unknown"}});var r=d(O.prototype);if(r.promiseDispatch=function(e,o,i){var u;try{u=t[o]?t[o].apply(r,i):n.call(r,o,i)}catch(c){u=B(c)}e&&e(u)},r.inspect=e,e){var o=e();"rejected"===o.state&&(r.exception=o.reason),r.valueOf=function(){var t=e();return"pending"===t.state||"rejected"===t.state?r:t.value}}return r}function C(t,n,e,r){return x(t).then(n,e,r)}function Q(t){if(_(t)){var n=t.inspect();if("fulfilled"===n.state)return n.value}return t}function _(t){return t instanceof O}function N(t){return(n=t)===Object(n)&&"function"==typeof t.then;var n}"object"==typeof e&&e&&e.env,x.defer=R,R.prototype.makeNodeResolver=function(){var t=this;return function(n,e){n?t.reject(n):arguments.length>2?t.resolve(p(arguments,1)):t.resolve(e)}},x.Promise=S,x.promise=S,S.race=E,S.all=L,S.reject=B,S.resolve=x,x.passByCopy=function(t){return t},O.prototype.passByCopy=function(){return this},x.join=function(t,n){return x(t).join(n)},O.prototype.join=function(t){return x([this,t]).spread(function(t,n){if(t===n)return t;throw new Error("Q can't join: not the same: "+t+" "+n)})},x.race=E,O.prototype.race=function(){return this.then(x.race)},x.makePromise=O,O.prototype.toString=function(){return"[object Promise]"},O.prototype.then=function(t,n,e){var r=this,o=R(),i=!1;return x.nextTick(function(){r.promiseDispatch(function(n){i||(i=!0,o.resolve(function(n){try{return"function"==typeof t?t(n):n}catch(e){return B(e)}}(n)))},"when",[function(t){i||(i=!0,o.resolve(function(t){if("function"==typeof n){w(t,r);try{return n(t)}catch(e){return B(e)}}return B(t)}(t)))}])}),r.promiseDispatch(void 0,"when",[void 0,function(t){var n,r=!1;try{n=function(t){return"function"==typeof e?e(t):t}(t)}catch(K){if(r=!0,!x.onerror)throw K;x.onerror(K)}r||o.notify(n)}]),o.promise},x.tap=function(t,n){return x(t).tap(n)},O.prototype.tap=function(t){return t=x(t),this.then(function(n){return t.fcall(n).thenResolve(n)})},x.when=C,O.prototype.thenResolve=function(t){return this.then(function(){return t})},x.thenResolve=function(t,n){return x(t).thenResolve(n)},O.prototype.thenReject=function(t){return this.then(function(){throw t})},x.thenReject=function(t,n){return x(t).thenReject(n)},x.nearer=Q,x.isPromise=_,x.isPromiseAlike=N,x.isPending=function(t){return _(t)&&"pending"===t.inspect().state},O.prototype.isPending=function(){return"pending"===this.inspect().state},x.isFulfilled=function(t){return!_(t)||"fulfilled"===t.inspect().state},O.prototype.isFulfilled=function(){return"fulfilled"===this.inspect().state},x.isRejected=function(t){return _(t)&&"rejected"===t.inspect().state},O.prototype.isRejected=function(){return"rejected"===this.inspect().state};var P,D,A,I=[],F=[],M=[],U=!0;function $(){I.length=0,F.length=0,U||(U=!0)}function B(t){var n=O({when:function(n){return n&&function(t){if(U){var n=a(F,t);-1!==n&&("object"==typeof e&&"function"==typeof e.emit&&x.nextTick.runAfter(function(){var r=a(M,t);-1!==r&&(e.emit("rejectionHandled",I[n],t),M.splice(r,1))}),F.splice(n,1),I.splice(n,1))}}(this),n?n(t):this}},function(){return this},function(){return{state:"rejected",reason:t}});return function(t,n){U&&("object"==typeof e&&"function"==typeof e.emit&&x.nextTick.runAfter(function(){-1!==a(F,t)&&(e.emit("unhandledRejection",n,t),M.push(t))}),F.push(t),n&&void 0!==n.stack?I.push(n.stack):I.push("(no stack) "+n))}(n,t),n}function V(t){return O({when:function(){return t},get:function(n){return t[n]},set:function(n,e){t[n]=e},delete:function(n){delete t[n]},post:function(n,e){return null==n?t.apply(void 0,e):t[n].apply(t,e)},apply:function(n,e){return t.apply(n,e)},keys:function(){return v(t)}},void 0,function(){return{state:"fulfilled",value:t}})}function q(t,n,e){return x(t).spread(n,e)}function H(t,n,e){return x(t).dispatch(n,e)}function L(t){return C(t,function(t){var n=0,e=R();return s(t,function(r,o,i){var u;_(o)&&"fulfilled"===(u=o.inspect()).state?t[i]=u.value:(++n,C(o,function(r){t[i]=r,0==--n&&e.resolve(t)},e.reject,function(t){e.notify({index:i,value:t})}))},void 0),0===n&&e.resolve(t),e.promise})}function z(t){if(0===t.length)return x.resolve();var n=x.defer(),e=0;return s(t,function(r,o,i){var u=t[i];e++,C(u,function(t){n.resolve(t)},function(t){if(0==--e){var r=t||new Error(""+t);r.message="Q can't get fulfillment value from any promise, all promises were rejected. Last error message: "+r.message,n.reject(r)}},function(t){n.notify({index:i,value:t})})},void 0),n.promise}function G(t){return C(t,function(t){return t=l(t,x),C(L(l(t,function(t){return C(t,o,o)})),function(){return t})})}x.resetUnhandledRejections=$,x.getUnhandledReasons=function(){return I.slice()},x.stopUnhandledRejectionTracking=function(){$(),U=!1},$(),x.reject=B,x.fulfill=V,x.master=function(t){return O({isDef:function(){}},function(n,e){return H(t,n,e)},function(){return x(t).inspect()})},x.spread=q,O.prototype.spread=function(t,n){return this.all().then(function(n){return t.apply(void 0,n)},n)},x.async=function(t){return function(){function n(t,n){var i;if("undefined"==typeof StopIteration){try{i=e[t](n)}catch(u){return B(u)}return i.done?x(i.value):C(i.value,r,o)}try{i=e[t](n)}catch(u){return function(t){return"[object StopIteration]"===m(t)||t instanceof f}(u)?x(u.value):B(u)}return C(i,r,o)}var e=t.apply(this,arguments),r=n.bind(n,"next"),o=n.bind(n,"throw");return r()}},x.spawn=function(t){x.done(x.async(t)())},x.return=function(t){throw new f(t)},x.promised=function(t){return function(){return q([this,L(arguments)],function(n,e){return t.apply(n,e)})}},x.dispatch=H,O.prototype.dispatch=function(t,n){var e=this,r=R();return x.nextTick(function(){e.promiseDispatch(r.resolve,t,n)}),r.promise},x.get=function(t,n){return x(t).dispatch("get",[n])},O.prototype.get=function(t){return this.dispatch("get",[t])},x.set=function(t,n,e){return x(t).dispatch("set",[n,e])},O.prototype.set=function(t,n){return this.dispatch("set",[t,n])},x.del=x.delete=function(t,n){return x(t).dispatch("delete",[n])},O.prototype.del=O.prototype.delete=function(t){return this.dispatch("delete",[t])},x.mapply=x.post=function(t,n,e){return x(t).dispatch("post",[n,e])},O.prototype.mapply=O.prototype.post=function(t,n){return this.dispatch("post",[t,n])},x.send=x.mcall=x.invoke=function(t,n){return x(t).dispatch("post",[n,p(arguments,2)])},O.prototype.send=O.prototype.mcall=O.prototype.invoke=function(t){return this.dispatch("post",[t,p(arguments,1)])},x.fapply=function(t,n){return x(t).dispatch("apply",[void 0,n])},O.prototype.fapply=function(t){return this.dispatch("apply",[void 0,t])},x.try=x.fcall=function(t){return x(t).dispatch("apply",[void 0,p(arguments,1)])},O.prototype.fcall=function(){return this.dispatch("apply",[void 0,p(arguments)])},x.fbind=function(t){var n=x(t),e=p(arguments,1);return function(){return n.dispatch("apply",[this,e.concat(p(arguments))])}},O.prototype.fbind=function(){var t=this,n=p(arguments);return function(){return t.dispatch("apply",[this,n.concat(p(arguments))])}},x.keys=function(t){return x(t).dispatch("keys",[])},O.prototype.keys=function(){return this.dispatch("keys",[])},x.all=L,O.prototype.all=function(){return L(this)},x.any=z,O.prototype.any=function(){return z(this)},x.allResolved=(P=G,D="allResolved",A="allSettled",function(){return"undefined"!=typeof console&&"function"==typeof console.warn&&console.warn(D+" is deprecated, use "+A+" instead.",new Error("").stack),P.apply(P,arguments)}),O.prototype.allResolved=function(){return G(this)},x.allSettled=function(t){return x(t).allSettled()},O.prototype.allSettled=function(){return this.then(function(t){return L(l(t,function(t){function n(){return t.inspect()}return(t=x(t)).then(n,n)}))})},x.fail=x.catch=function(t,n){return x(t).then(void 0,n)},O.prototype.fail=O.prototype.catch=function(t){return this.then(void 0,t)},x.progress=function(t,n){return x(t).then(void 0,void 0,n)},O.prototype.progress=function(t){return this.then(void 0,void 0,t)},x.fin=x.finally=function(t,n){return x(t).finally(n)},O.prototype.fin=O.prototype.finally=function(t){if(!t||"function"!=typeof t.apply)throw new Error("Q can't apply finally callback");return t=x(t),this.then(function(n){return t.fcall().then(function(){return n})},function(n){return t.fcall().then(function(){throw n})})},x.done=function(t,n,e,r){return x(t).done(n,e,r)},O.prototype.done=function(t,n,r){var o=function(t){x.nextTick(function(){if(w(t,i),!x.onerror)throw t;x.onerror(t)})},i=t||n||r?this.then(t,n,r):this;"object"==typeof e&&e&&e.domain&&(o=e.domain.bind(o)),i.then(void 0,o)},x.timeout=function(t,n,e){return x(t).timeout(n,e)},O.prototype.timeout=function(t,n){var e=R(),r=setTimeout(function(){n&&"string"!=typeof n||((n=new Error(n||"Timed out after "+t+" ms")).code="ETIMEDOUT"),e.reject(n)},t);return this.then(function(t){clearTimeout(r),e.resolve(t)},function(t){clearTimeout(r),e.reject(t)},e.notify),e.promise},x.delay=function(t,n){return void 0===n&&(n=t,t=void 0),x(t).delay(n)},O.prototype.delay=function(t){return this.then(function(n){var e=R();return setTimeout(function(){e.resolve(n)},t),e.promise})},x.nfapply=function(t,n){return x(t).nfapply(n)},O.prototype.nfapply=function(t){var n=R(),e=p(t);return e.push(n.makeNodeResolver()),this.fapply(e).fail(n.reject),n.promise},x.nfcall=function(t){var n=p(arguments,1);return x(t).nfapply(n)},O.prototype.nfcall=function(){var t=p(arguments),n=R();return t.push(n.makeNodeResolver()),this.fapply(t).fail(n.reject),n.promise},x.nfbind=x.denodeify=function(t){if(void 0===t)throw new Error("Q can't wrap an undefined function");var n=p(arguments,1);return function(){var e=n.concat(p(arguments)),r=R();return e.push(r.makeNodeResolver()),x(t).fapply(e).fail(r.reject),r.promise}},O.prototype.nfbind=O.prototype.denodeify=function(){var t=p(arguments);return t.unshift(this),x.denodeify.apply(void 0,t)},x.nbind=function(t,n){var e=p(arguments,2);return function(){var r=e.concat(p(arguments)),o=R();return r.push(o.makeNodeResolver()),x(function(){return t.apply(n,arguments)}).fapply(r).fail(o.reject),o.promise}},O.prototype.nbind=function(){var t=p(arguments,0);return t.unshift(this),x.nbind.apply(void 0,t)},x.nmapply=x.npost=function(t,n,e){return x(t).npost(n,e)},O.prototype.nmapply=O.prototype.npost=function(t,n){var e=p(n||[]),r=R();return e.push(r.makeNodeResolver()),this.dispatch("post",[t,e]).fail(r.reject),r.promise},x.nsend=x.nmcall=x.ninvoke=function(t,n){var e=p(arguments,2),r=R();return e.push(r.makeNodeResolver()),x(t).dispatch("post",[n,e]).fail(r.reject),r.promise},O.prototype.nsend=O.prototype.nmcall=O.prototype.ninvoke=function(t){var n=p(arguments,1),e=R();return n.push(e.makeNodeResolver()),this.dispatch("post",[t,n]).fail(e.reject),e.promise},x.nodeify=function(t,n){return x(t).nodeify(n)},O.prototype.nodeify=function(t){if(!t)return this;this.then(function(n){x.nextTick(function(){t(null,n)})},function(n){x.nextTick(function(){t(n)})})},x.noConflict=function(){throw new Error("Q.noConflict only works when Q is used as a global")};var J=b();return x});
},{"process":"g5IB"}],"uGqo":[function(require,module,exports) {

},{}],"mahc":[function(require,module,exports) {
"use strict";var e=require("path"),r=require("q");require("../scss/style.scss");var t=function(e){var r=e;return new Promise(function(e,t){return setTimeout(function(){e(r),t()},r),e})},n=function(e){return console.log("Resolved after ".concat(e,"ms"))};t(2e3).then(n),t(1e3).then(n),t(1500).then(n);
},{"path":"sNrv","q":"qLuP","../scss/style.scss":"uGqo"}]},{},["mahc"], null)
//# sourceMappingURL=/goit-js-hw-11-promisification/js.29a96193.js.map