(function(){const v=document.createElement("link").relList;if(v&&v.supports&&v.supports("modulepreload"))return;for(const y of document.querySelectorAll('link[rel="modulepreload"]'))j(y);new MutationObserver(y=>{for(const C of y)if(C.type==="childList")for(const E of C.addedNodes)E.tagName==="LINK"&&E.rel==="modulepreload"&&j(E)}).observe(document,{childList:!0,subtree:!0});function a(y){const C={};return y.integrity&&(C.integrity=y.integrity),y.referrerPolicy&&(C.referrerPolicy=y.referrerPolicy),y.crossOrigin==="use-credentials"?C.credentials="include":y.crossOrigin==="anonymous"?C.credentials="omit":C.credentials="same-origin",C}function j(y){if(y.ep)return;y.ep=!0;const C=a(y);fetch(y.href,C)}})();var Ul={exports:{}},Ir={},Vl={exports:{}},H={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qu;function pf(){if(Qu)return H;Qu=1;var d=Symbol.for("react.element"),v=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),j=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),C=Symbol.for("react.provider"),E=Symbol.for("react.context"),W=Symbol.for("react.forward_ref"),O=Symbol.for("react.suspense"),L=Symbol.for("react.memo"),G=Symbol.for("react.lazy"),Q=Symbol.iterator;function J(p){return p===null||typeof p!="object"?null:(p=Q&&p[Q]||p["@@iterator"],typeof p=="function"?p:null)}var ye={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},P=Object.assign,B={};function z(p,w,$){this.props=p,this.context=w,this.refs=B,this.updater=$||ye}z.prototype.isReactComponent={},z.prototype.setState=function(p,w){if(typeof p!="object"&&typeof p!="function"&&p!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,p,w,"setState")},z.prototype.forceUpdate=function(p){this.updater.enqueueForceUpdate(this,p,"forceUpdate")};function Ce(){}Ce.prototype=z.prototype;function Ee(p,w,$){this.props=p,this.context=w,this.refs=B,this.updater=$||ye}var Ve=Ee.prototype=new Ce;Ve.constructor=Ee,P(Ve,z.prototype),Ve.isPureReactComponent=!0;var Pe=Array.isArray,on=Object.prototype.hasOwnProperty,Re={current:null},_e={key:!0,ref:!0,__self:!0,__source:!0};function Ye(p,w,$){var K,X={},Z=null,te=null;if(w!=null)for(K in w.ref!==void 0&&(te=w.ref),w.key!==void 0&&(Z=""+w.key),w)on.call(w,K)&&!_e.hasOwnProperty(K)&&(X[K]=w[K]);var ee=arguments.length-2;if(ee===1)X.children=$;else if(1<ee){for(var se=Array(ee),Ge=0;Ge<ee;Ge++)se[Ge]=arguments[Ge+2];X.children=se}if(p&&p.defaultProps)for(K in ee=p.defaultProps,ee)X[K]===void 0&&(X[K]=ee[K]);return{$$typeof:d,type:p,key:Z,ref:te,props:X,_owner:Re.current}}function _n(p,w){return{$$typeof:d,type:p.type,key:w,ref:p.ref,props:p.props,_owner:p._owner}}function Nn(p){return typeof p=="object"&&p!==null&&p.$$typeof===d}function nt(p){var w={"=":"=0",":":"=2"};return"$"+p.replace(/[=:]/g,function($){return w[$]})}var mn=/\/+/g;function Be(p,w){return typeof p=="object"&&p!==null&&p.key!=null?nt(""+p.key):w.toString(36)}function ln(p,w,$,K,X){var Z=typeof p;(Z==="undefined"||Z==="boolean")&&(p=null);var te=!1;if(p===null)te=!0;else switch(Z){case"string":case"number":te=!0;break;case"object":switch(p.$$typeof){case d:case v:te=!0}}if(te)return te=p,X=X(te),p=K===""?"."+Be(te,0):K,Pe(X)?($="",p!=null&&($=p.replace(mn,"$&/")+"/"),ln(X,w,$,"",function(Ge){return Ge})):X!=null&&(Nn(X)&&(X=_n(X,$+(!X.key||te&&te.key===X.key?"":(""+X.key).replace(mn,"$&/")+"/")+p)),w.push(X)),1;if(te=0,K=K===""?".":K+":",Pe(p))for(var ee=0;ee<p.length;ee++){Z=p[ee];var se=K+Be(Z,ee);te+=ln(Z,w,$,se,X)}else if(se=J(p),typeof se=="function")for(p=se.call(p),ee=0;!(Z=p.next()).done;)Z=Z.value,se=K+Be(Z,ee++),te+=ln(Z,w,$,se,X);else if(Z==="object")throw w=String(p),Error("Objects are not valid as a React child (found: "+(w==="[object Object]"?"object with keys {"+Object.keys(p).join(", ")+"}":w)+"). If you meant to render a collection of children, use an array instead.");return te}function hn(p,w,$){if(p==null)return p;var K=[],X=0;return ln(p,K,"","",function(Z){return w.call($,Z,X++)}),K}function Oe(p){if(p._status===-1){var w=p._result;w=w(),w.then(function($){(p._status===0||p._status===-1)&&(p._status=1,p._result=$)},function($){(p._status===0||p._status===-1)&&(p._status=2,p._result=$)}),p._status===-1&&(p._status=0,p._result=w)}if(p._status===1)return p._result.default;throw p._result}var de={current:null},F={transition:null},U={ReactCurrentDispatcher:de,ReactCurrentBatchConfig:F,ReactCurrentOwner:Re};function R(){throw Error("act(...) is not supported in production builds of React.")}return H.Children={map:hn,forEach:function(p,w,$){hn(p,function(){w.apply(this,arguments)},$)},count:function(p){var w=0;return hn(p,function(){w++}),w},toArray:function(p){return hn(p,function(w){return w})||[]},only:function(p){if(!Nn(p))throw Error("React.Children.only expected to receive a single React element child.");return p}},H.Component=z,H.Fragment=a,H.Profiler=y,H.PureComponent=Ee,H.StrictMode=j,H.Suspense=O,H.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=U,H.act=R,H.cloneElement=function(p,w,$){if(p==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+p+".");var K=P({},p.props),X=p.key,Z=p.ref,te=p._owner;if(w!=null){if(w.ref!==void 0&&(Z=w.ref,te=Re.current),w.key!==void 0&&(X=""+w.key),p.type&&p.type.defaultProps)var ee=p.type.defaultProps;for(se in w)on.call(w,se)&&!_e.hasOwnProperty(se)&&(K[se]=w[se]===void 0&&ee!==void 0?ee[se]:w[se])}var se=arguments.length-2;if(se===1)K.children=$;else if(1<se){ee=Array(se);for(var Ge=0;Ge<se;Ge++)ee[Ge]=arguments[Ge+2];K.children=ee}return{$$typeof:d,type:p.type,key:X,ref:Z,props:K,_owner:te}},H.createContext=function(p){return p={$$typeof:E,_currentValue:p,_currentValue2:p,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},p.Provider={$$typeof:C,_context:p},p.Consumer=p},H.createElement=Ye,H.createFactory=function(p){var w=Ye.bind(null,p);return w.type=p,w},H.createRef=function(){return{current:null}},H.forwardRef=function(p){return{$$typeof:W,render:p}},H.isValidElement=Nn,H.lazy=function(p){return{$$typeof:G,_payload:{_status:-1,_result:p},_init:Oe}},H.memo=function(p,w){return{$$typeof:L,type:p,compare:w===void 0?null:w}},H.startTransition=function(p){var w=F.transition;F.transition={};try{p()}finally{F.transition=w}},H.unstable_act=R,H.useCallback=function(p,w){return de.current.useCallback(p,w)},H.useContext=function(p){return de.current.useContext(p)},H.useDebugValue=function(){},H.useDeferredValue=function(p){return de.current.useDeferredValue(p)},H.useEffect=function(p,w){return de.current.useEffect(p,w)},H.useId=function(){return de.current.useId()},H.useImperativeHandle=function(p,w,$){return de.current.useImperativeHandle(p,w,$)},H.useInsertionEffect=function(p,w){return de.current.useInsertionEffect(p,w)},H.useLayoutEffect=function(p,w){return de.current.useLayoutEffect(p,w)},H.useMemo=function(p,w){return de.current.useMemo(p,w)},H.useReducer=function(p,w,$){return de.current.useReducer(p,w,$)},H.useRef=function(p){return de.current.useRef(p)},H.useState=function(p){return de.current.useState(p)},H.useSyncExternalStore=function(p,w,$){return de.current.useSyncExternalStore(p,w,$)},H.useTransition=function(){return de.current.useTransition()},H.version="18.3.1",H}var Ku;function Yl(){return Ku||(Ku=1,Vl.exports=pf()),Vl.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yu;function mf(){if(Yu)return Ir;Yu=1;var d=Yl(),v=Symbol.for("react.element"),a=Symbol.for("react.fragment"),j=Object.prototype.hasOwnProperty,y=d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,C={key:!0,ref:!0,__self:!0,__source:!0};function E(W,O,L){var G,Q={},J=null,ye=null;L!==void 0&&(J=""+L),O.key!==void 0&&(J=""+O.key),O.ref!==void 0&&(ye=O.ref);for(G in O)j.call(O,G)&&!C.hasOwnProperty(G)&&(Q[G]=O[G]);if(W&&W.defaultProps)for(G in O=W.defaultProps,O)Q[G]===void 0&&(Q[G]=O[G]);return{$$typeof:v,type:W,key:J,ref:ye,props:Q,_owner:y.current}}return Ir.Fragment=a,Ir.jsx=E,Ir.jsxs=E,Ir}var Xu;function hf(){return Xu||(Xu=1,Ul.exports=mf()),Ul.exports}var s=hf(),Vi={},Bl={exports:{}},Ue={},Gl={exports:{}},$l={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zu;function gf(){return Zu||(Zu=1,(function(d){function v(F,U){var R=F.length;F.push(U);e:for(;0<R;){var p=R-1>>>1,w=F[p];if(0<y(w,U))F[p]=U,F[R]=w,R=p;else break e}}function a(F){return F.length===0?null:F[0]}function j(F){if(F.length===0)return null;var U=F[0],R=F.pop();if(R!==U){F[0]=R;e:for(var p=0,w=F.length,$=w>>>1;p<$;){var K=2*(p+1)-1,X=F[K],Z=K+1,te=F[Z];if(0>y(X,R))Z<w&&0>y(te,X)?(F[p]=te,F[Z]=R,p=Z):(F[p]=X,F[K]=R,p=K);else if(Z<w&&0>y(te,R))F[p]=te,F[Z]=R,p=Z;else break e}}return U}function y(F,U){var R=F.sortIndex-U.sortIndex;return R!==0?R:F.id-U.id}if(typeof performance=="object"&&typeof performance.now=="function"){var C=performance;d.unstable_now=function(){return C.now()}}else{var E=Date,W=E.now();d.unstable_now=function(){return E.now()-W}}var O=[],L=[],G=1,Q=null,J=3,ye=!1,P=!1,B=!1,z=typeof setTimeout=="function"?setTimeout:null,Ce=typeof clearTimeout=="function"?clearTimeout:null,Ee=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Ve(F){for(var U=a(L);U!==null;){if(U.callback===null)j(L);else if(U.startTime<=F)j(L),U.sortIndex=U.expirationTime,v(O,U);else break;U=a(L)}}function Pe(F){if(B=!1,Ve(F),!P)if(a(O)!==null)P=!0,Oe(on);else{var U=a(L);U!==null&&de(Pe,U.startTime-F)}}function on(F,U){P=!1,B&&(B=!1,Ce(Ye),Ye=-1),ye=!0;var R=J;try{for(Ve(U),Q=a(O);Q!==null&&(!(Q.expirationTime>U)||F&&!nt());){var p=Q.callback;if(typeof p=="function"){Q.callback=null,J=Q.priorityLevel;var w=p(Q.expirationTime<=U);U=d.unstable_now(),typeof w=="function"?Q.callback=w:Q===a(O)&&j(O),Ve(U)}else j(O);Q=a(O)}if(Q!==null)var $=!0;else{var K=a(L);K!==null&&de(Pe,K.startTime-U),$=!1}return $}finally{Q=null,J=R,ye=!1}}var Re=!1,_e=null,Ye=-1,_n=5,Nn=-1;function nt(){return!(d.unstable_now()-Nn<_n)}function mn(){if(_e!==null){var F=d.unstable_now();Nn=F;var U=!0;try{U=_e(!0,F)}finally{U?Be():(Re=!1,_e=null)}}else Re=!1}var Be;if(typeof Ee=="function")Be=function(){Ee(mn)};else if(typeof MessageChannel<"u"){var ln=new MessageChannel,hn=ln.port2;ln.port1.onmessage=mn,Be=function(){hn.postMessage(null)}}else Be=function(){z(mn,0)};function Oe(F){_e=F,Re||(Re=!0,Be())}function de(F,U){Ye=z(function(){F(d.unstable_now())},U)}d.unstable_IdlePriority=5,d.unstable_ImmediatePriority=1,d.unstable_LowPriority=4,d.unstable_NormalPriority=3,d.unstable_Profiling=null,d.unstable_UserBlockingPriority=2,d.unstable_cancelCallback=function(F){F.callback=null},d.unstable_continueExecution=function(){P||ye||(P=!0,Oe(on))},d.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):_n=0<F?Math.floor(1e3/F):5},d.unstable_getCurrentPriorityLevel=function(){return J},d.unstable_getFirstCallbackNode=function(){return a(O)},d.unstable_next=function(F){switch(J){case 1:case 2:case 3:var U=3;break;default:U=J}var R=J;J=U;try{return F()}finally{J=R}},d.unstable_pauseExecution=function(){},d.unstable_requestPaint=function(){},d.unstable_runWithPriority=function(F,U){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var R=J;J=F;try{return U()}finally{J=R}},d.unstable_scheduleCallback=function(F,U,R){var p=d.unstable_now();switch(typeof R=="object"&&R!==null?(R=R.delay,R=typeof R=="number"&&0<R?p+R:p):R=p,F){case 1:var w=-1;break;case 2:w=250;break;case 5:w=1073741823;break;case 4:w=1e4;break;default:w=5e3}return w=R+w,F={id:G++,callback:U,priorityLevel:F,startTime:R,expirationTime:w,sortIndex:-1},R>p?(F.sortIndex=R,v(L,F),a(O)===null&&F===a(L)&&(B?(Ce(Ye),Ye=-1):B=!0,de(Pe,R-p))):(F.sortIndex=w,v(O,F),P||ye||(P=!0,Oe(on))),F},d.unstable_shouldYield=nt,d.unstable_wrapCallback=function(F){var U=J;return function(){var R=J;J=U;try{return F.apply(this,arguments)}finally{J=R}}}})($l)),$l}var qu;function vf(){return qu||(qu=1,Gl.exports=gf()),Gl.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ju;function yf(){if(Ju)return Ue;Ju=1;var d=Yl(),v=vf();function a(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var j=new Set,y={};function C(e,n){E(e,n),E(e+"Capture",n)}function E(e,n){for(y[e]=n,e=0;e<n.length;e++)j.add(n[e])}var W=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),O=Object.prototype.hasOwnProperty,L=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,G={},Q={};function J(e){return O.call(Q,e)?!0:O.call(G,e)?!1:L.test(e)?Q[e]=!0:(G[e]=!0,!1)}function ye(e,n,t,r){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return r?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function P(e,n,t,r){if(n===null||typeof n>"u"||ye(e,n,t,r))return!0;if(r)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function B(e,n,t,r,i,o,l){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=o,this.removeEmptyString=l}var z={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){z[e]=new B(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];z[n]=new B(n,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){z[e]=new B(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){z[e]=new B(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){z[e]=new B(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){z[e]=new B(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){z[e]=new B(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){z[e]=new B(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){z[e]=new B(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ce=/[\-:]([a-z])/g;function Ee(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(Ce,Ee);z[n]=new B(n,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(Ce,Ee);z[n]=new B(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(Ce,Ee);z[n]=new B(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){z[e]=new B(e,1,!1,e.toLowerCase(),null,!1,!1)}),z.xlinkHref=new B("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){z[e]=new B(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ve(e,n,t,r){var i=z.hasOwnProperty(n)?z[n]:null;(i!==null?i.type!==0:r||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(P(n,t,i,r)&&(t=null),r||i===null?J(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):i.mustUseProperty?e[i.propertyName]=t===null?i.type===3?!1:"":t:(n=i.attributeName,r=i.attributeNamespace,t===null?e.removeAttribute(n):(i=i.type,t=i===3||i===4&&t===!0?"":""+t,r?e.setAttributeNS(r,n,t):e.setAttribute(n,t))))}var Pe=d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,on=Symbol.for("react.element"),Re=Symbol.for("react.portal"),_e=Symbol.for("react.fragment"),Ye=Symbol.for("react.strict_mode"),_n=Symbol.for("react.profiler"),Nn=Symbol.for("react.provider"),nt=Symbol.for("react.context"),mn=Symbol.for("react.forward_ref"),Be=Symbol.for("react.suspense"),ln=Symbol.for("react.suspense_list"),hn=Symbol.for("react.memo"),Oe=Symbol.for("react.lazy"),de=Symbol.for("react.offscreen"),F=Symbol.iterator;function U(e){return e===null||typeof e!="object"?null:(e=F&&e[F]||e["@@iterator"],typeof e=="function"?e:null)}var R=Object.assign,p;function w(e){if(p===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);p=n&&n[1]||""}return`
`+p+e}var $=!1;function K(e,n){if(!e||$)return"";$=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(g){var r=g}Reflect.construct(e,[],n)}else{try{n.call()}catch(g){r=g}e.call(n.prototype)}else{try{throw Error()}catch(g){r=g}e()}}catch(g){if(g&&r&&typeof g.stack=="string"){for(var i=g.stack.split(`
`),o=r.stack.split(`
`),l=i.length-1,u=o.length-1;1<=l&&0<=u&&i[l]!==o[u];)u--;for(;1<=l&&0<=u;l--,u--)if(i[l]!==o[u]){if(l!==1||u!==1)do if(l--,u--,0>u||i[l]!==o[u]){var c=`
`+i[l].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=l&&0<=u);break}}}finally{$=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?w(e):""}function X(e){switch(e.tag){case 5:return w(e.type);case 16:return w("Lazy");case 13:return w("Suspense");case 19:return w("SuspenseList");case 0:case 2:case 15:return e=K(e.type,!1),e;case 11:return e=K(e.type.render,!1),e;case 1:return e=K(e.type,!0),e;default:return""}}function Z(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case _e:return"Fragment";case Re:return"Portal";case _n:return"Profiler";case Ye:return"StrictMode";case Be:return"Suspense";case ln:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case nt:return(e.displayName||"Context")+".Consumer";case Nn:return(e._context.displayName||"Context")+".Provider";case mn:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case hn:return n=e.displayName||null,n!==null?n:Z(e.type)||"Memo";case Oe:n=e._payload,e=e._init;try{return Z(e(n))}catch{}}return null}function te(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Z(n);case 8:return n===Ye?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function ee(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function se(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Ge(e){var n=se(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),r=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var i=t.get,o=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return i.call(this)},set:function(l){r=""+l,o.call(this,l)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Mr(e){e._valueTracker||(e._valueTracker=Ge(e))}function Jl(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),r="";return e&&(r=se(e)?e.checked?"true":"false":e.value),e=r,e!==t?(n.setValue(e),!0):!1}function Tr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Qi(e,n){var t=n.checked;return R({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function es(e,n){var t=n.defaultValue==null?"":n.defaultValue,r=n.checked!=null?n.checked:n.defaultChecked;t=ee(n.value!=null?n.value:t),e._wrapperState={initialChecked:r,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function ns(e,n){n=n.checked,n!=null&&Ve(e,"checked",n,!1)}function Ki(e,n){ns(e,n);var t=ee(n.value),r=n.type;if(t!=null)r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?Yi(e,n.type,t):n.hasOwnProperty("defaultValue")&&Yi(e,n.type,ee(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function ts(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var r=n.type;if(!(r!=="submit"&&r!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function Yi(e,n,t){(n!=="number"||Tr(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var $t=Array.isArray;function gt(e,n,t,r){if(e=e.options,n){n={};for(var i=0;i<t.length;i++)n["$"+t[i]]=!0;for(t=0;t<e.length;t++)i=n.hasOwnProperty("$"+e[t].value),e[t].selected!==i&&(e[t].selected=i),i&&r&&(e[t].defaultSelected=!0)}else{for(t=""+ee(t),n=null,i=0;i<e.length;i++){if(e[i].value===t){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}n!==null||e[i].disabled||(n=e[i])}n!==null&&(n.selected=!0)}}function Xi(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(a(91));return R({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function rs(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(a(92));if($t(t)){if(1<t.length)throw Error(a(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:ee(t)}}function is(e,n){var t=ee(n.value),r=ee(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),r!=null&&(e.defaultValue=""+r)}function os(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function ls(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Zi(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?ls(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var _r,ss=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,r,i){MSApp.execUnsafeLocalFunction(function(){return e(n,t,r,i)})}:e})(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(_r=_r||document.createElement("div"),_r.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=_r.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function Ht(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var Qt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},gc=["Webkit","ms","Moz","O"];Object.keys(Qt).forEach(function(e){gc.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Qt[n]=Qt[e]})});function as(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||Qt.hasOwnProperty(e)&&Qt[e]?(""+n).trim():n+"px"}function us(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var r=t.indexOf("--")===0,i=as(t,n[t],r);t==="float"&&(t="cssFloat"),r?e.setProperty(t,i):e[t]=i}}var vc=R({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function qi(e,n){if(n){if(vc[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(a(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(a(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(a(61))}if(n.style!=null&&typeof n.style!="object")throw Error(a(62))}}function Ji(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var eo=null;function no(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var to=null,vt=null,yt=null;function cs(e){if(e=hr(e)){if(typeof to!="function")throw Error(a(280));var n=e.stateNode;n&&(n=ri(n),to(e.stateNode,e.type,n))}}function ds(e){vt?yt?yt.push(e):yt=[e]:vt=e}function fs(){if(vt){var e=vt,n=yt;if(yt=vt=null,cs(e),n)for(e=0;e<n.length;e++)cs(n[e])}}function ps(e,n){return e(n)}function ms(){}var ro=!1;function hs(e,n,t){if(ro)return e(n,t);ro=!0;try{return ps(e,n,t)}finally{ro=!1,(vt!==null||yt!==null)&&(ms(),fs())}}function Kt(e,n){var t=e.stateNode;if(t===null)return null;var r=ri(t);if(r===null)return null;t=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(a(231,n,typeof t));return t}var io=!1;if(W)try{var Yt={};Object.defineProperty(Yt,"passive",{get:function(){io=!0}}),window.addEventListener("test",Yt,Yt),window.removeEventListener("test",Yt,Yt)}catch{io=!1}function yc(e,n,t,r,i,o,l,u,c){var g=Array.prototype.slice.call(arguments,3);try{n.apply(t,g)}catch(S){this.onError(S)}}var Xt=!1,Or=null,Lr=!1,oo=null,xc={onError:function(e){Xt=!0,Or=e}};function wc(e,n,t,r,i,o,l,u,c){Xt=!1,Or=null,yc.apply(xc,arguments)}function Sc(e,n,t,r,i,o,l,u,c){if(wc.apply(this,arguments),Xt){if(Xt){var g=Or;Xt=!1,Or=null}else throw Error(a(198));Lr||(Lr=!0,oo=g)}}function tt(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function gs(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function vs(e){if(tt(e)!==e)throw Error(a(188))}function Nc(e){var n=e.alternate;if(!n){if(n=tt(e),n===null)throw Error(a(188));return n!==e?null:e}for(var t=e,r=n;;){var i=t.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){t=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===t)return vs(i),e;if(o===r)return vs(i),n;o=o.sibling}throw Error(a(188))}if(t.return!==r.return)t=i,r=o;else{for(var l=!1,u=i.child;u;){if(u===t){l=!0,t=i,r=o;break}if(u===r){l=!0,r=i,t=o;break}u=u.sibling}if(!l){for(u=o.child;u;){if(u===t){l=!0,t=o,r=i;break}if(u===r){l=!0,r=o,t=i;break}u=u.sibling}if(!l)throw Error(a(189))}}if(t.alternate!==r)throw Error(a(190))}if(t.tag!==3)throw Error(a(188));return t.stateNode.current===t?e:n}function ys(e){return e=Nc(e),e!==null?xs(e):null}function xs(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=xs(e);if(n!==null)return n;e=e.sibling}return null}var ws=v.unstable_scheduleCallback,Ss=v.unstable_cancelCallback,kc=v.unstable_shouldYield,Cc=v.unstable_requestPaint,pe=v.unstable_now,Ec=v.unstable_getCurrentPriorityLevel,lo=v.unstable_ImmediatePriority,Ns=v.unstable_UserBlockingPriority,zr=v.unstable_NormalPriority,Pc=v.unstable_LowPriority,ks=v.unstable_IdlePriority,br=null,gn=null;function Fc(e){if(gn&&typeof gn.onCommitFiberRoot=="function")try{gn.onCommitFiberRoot(br,e,void 0,(e.current.flags&128)===128)}catch{}}var sn=Math.clz32?Math.clz32:Ic,Ac=Math.log,jc=Math.LN2;function Ic(e){return e>>>=0,e===0?32:31-(Ac(e)/jc|0)|0}var Dr=64,Wr=4194304;function Zt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ur(e,n){var t=e.pendingLanes;if(t===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,l=t&268435455;if(l!==0){var u=l&~i;u!==0?r=Zt(u):(o&=l,o!==0&&(r=Zt(o)))}else l=t&~i,l!==0?r=Zt(l):o!==0&&(r=Zt(o));if(r===0)return 0;if(n!==0&&n!==r&&(n&i)===0&&(i=r&-r,o=n&-n,i>=o||i===16&&(o&4194240)!==0))return n;if((r&4)!==0&&(r|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=r;0<n;)t=31-sn(n),i=1<<t,r|=e[t],n&=~i;return r}function Rc(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Mc(e,n){for(var t=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var l=31-sn(o),u=1<<l,c=i[l];c===-1?((u&t)===0||(u&r)!==0)&&(i[l]=Rc(u,n)):c<=n&&(e.expiredLanes|=u),o&=~u}}function so(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Cs(){var e=Dr;return Dr<<=1,(Dr&4194240)===0&&(Dr=64),e}function ao(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function qt(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-sn(n),e[n]=t}function Tc(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<t;){var i=31-sn(t),o=1<<i;n[i]=0,r[i]=-1,e[i]=-1,t&=~o}}function uo(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var r=31-sn(t),i=1<<r;i&n|e[r]&n&&(e[r]|=n),t&=~i}}var ne=0;function Es(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Ps,co,Fs,As,js,fo=!1,Vr=[],On=null,Ln=null,zn=null,Jt=new Map,er=new Map,bn=[],_c="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Is(e,n){switch(e){case"focusin":case"focusout":On=null;break;case"dragenter":case"dragleave":Ln=null;break;case"mouseover":case"mouseout":zn=null;break;case"pointerover":case"pointerout":Jt.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":er.delete(n.pointerId)}}function nr(e,n,t,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:n,domEventName:t,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},n!==null&&(n=hr(n),n!==null&&co(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,i!==null&&n.indexOf(i)===-1&&n.push(i),e)}function Oc(e,n,t,r,i){switch(n){case"focusin":return On=nr(On,e,n,t,r,i),!0;case"dragenter":return Ln=nr(Ln,e,n,t,r,i),!0;case"mouseover":return zn=nr(zn,e,n,t,r,i),!0;case"pointerover":var o=i.pointerId;return Jt.set(o,nr(Jt.get(o)||null,e,n,t,r,i)),!0;case"gotpointercapture":return o=i.pointerId,er.set(o,nr(er.get(o)||null,e,n,t,r,i)),!0}return!1}function Rs(e){var n=rt(e.target);if(n!==null){var t=tt(n);if(t!==null){if(n=t.tag,n===13){if(n=gs(t),n!==null){e.blockedOn=n,js(e.priority,function(){Fs(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Br(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=mo(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var r=new t.constructor(t.type,t);eo=r,t.target.dispatchEvent(r),eo=null}else return n=hr(t),n!==null&&co(n),e.blockedOn=t,!1;n.shift()}return!0}function Ms(e,n,t){Br(e)&&t.delete(n)}function Lc(){fo=!1,On!==null&&Br(On)&&(On=null),Ln!==null&&Br(Ln)&&(Ln=null),zn!==null&&Br(zn)&&(zn=null),Jt.forEach(Ms),er.forEach(Ms)}function tr(e,n){e.blockedOn===n&&(e.blockedOn=null,fo||(fo=!0,v.unstable_scheduleCallback(v.unstable_NormalPriority,Lc)))}function rr(e){function n(i){return tr(i,e)}if(0<Vr.length){tr(Vr[0],e);for(var t=1;t<Vr.length;t++){var r=Vr[t];r.blockedOn===e&&(r.blockedOn=null)}}for(On!==null&&tr(On,e),Ln!==null&&tr(Ln,e),zn!==null&&tr(zn,e),Jt.forEach(n),er.forEach(n),t=0;t<bn.length;t++)r=bn[t],r.blockedOn===e&&(r.blockedOn=null);for(;0<bn.length&&(t=bn[0],t.blockedOn===null);)Rs(t),t.blockedOn===null&&bn.shift()}var xt=Pe.ReactCurrentBatchConfig,Gr=!0;function zc(e,n,t,r){var i=ne,o=xt.transition;xt.transition=null;try{ne=1,po(e,n,t,r)}finally{ne=i,xt.transition=o}}function bc(e,n,t,r){var i=ne,o=xt.transition;xt.transition=null;try{ne=4,po(e,n,t,r)}finally{ne=i,xt.transition=o}}function po(e,n,t,r){if(Gr){var i=mo(e,n,t,r);if(i===null)Ro(e,n,r,$r,t),Is(e,r);else if(Oc(i,e,n,t,r))r.stopPropagation();else if(Is(e,r),n&4&&-1<_c.indexOf(e)){for(;i!==null;){var o=hr(i);if(o!==null&&Ps(o),o=mo(e,n,t,r),o===null&&Ro(e,n,r,$r,t),o===i)break;i=o}i!==null&&r.stopPropagation()}else Ro(e,n,r,null,t)}}var $r=null;function mo(e,n,t,r){if($r=null,e=no(r),e=rt(e),e!==null)if(n=tt(e),n===null)e=null;else if(t=n.tag,t===13){if(e=gs(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return $r=e,null}function Ts(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ec()){case lo:return 1;case Ns:return 4;case zr:case Pc:return 16;case ks:return 536870912;default:return 16}default:return 16}}var Dn=null,ho=null,Hr=null;function _s(){if(Hr)return Hr;var e,n=ho,t=n.length,r,i="value"in Dn?Dn.value:Dn.textContent,o=i.length;for(e=0;e<t&&n[e]===i[e];e++);var l=t-e;for(r=1;r<=l&&n[t-r]===i[o-r];r++);return Hr=i.slice(e,1<r?1-r:void 0)}function Qr(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Kr(){return!0}function Os(){return!1}function $e(e){function n(t,r,i,o,l){this._reactName=t,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(t=e[u],this[u]=t?t(o):o[u]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Kr:Os,this.isPropagationStopped=Os,this}return R(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Kr)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Kr)},persist:function(){},isPersistent:Kr}),n}var wt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},go=$e(wt),ir=R({},wt,{view:0,detail:0}),Dc=$e(ir),vo,yo,or,Yr=R({},ir,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:wo,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==or&&(or&&e.type==="mousemove"?(vo=e.screenX-or.screenX,yo=e.screenY-or.screenY):yo=vo=0,or=e),vo)},movementY:function(e){return"movementY"in e?e.movementY:yo}}),Ls=$e(Yr),Wc=R({},Yr,{dataTransfer:0}),Uc=$e(Wc),Vc=R({},ir,{relatedTarget:0}),xo=$e(Vc),Bc=R({},wt,{animationName:0,elapsedTime:0,pseudoElement:0}),Gc=$e(Bc),$c=R({},wt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Hc=$e($c),Qc=R({},wt,{data:0}),zs=$e(Qc),Kc={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Yc={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Xc={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Zc(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Xc[e])?!!n[e]:!1}function wo(){return Zc}var qc=R({},ir,{key:function(e){if(e.key){var n=Kc[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Qr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Yc[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:wo,charCode:function(e){return e.type==="keypress"?Qr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Qr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Jc=$e(qc),ed=R({},Yr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),bs=$e(ed),nd=R({},ir,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:wo}),td=$e(nd),rd=R({},wt,{propertyName:0,elapsedTime:0,pseudoElement:0}),id=$e(rd),od=R({},Yr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ld=$e(od),sd=[9,13,27,32],So=W&&"CompositionEvent"in window,lr=null;W&&"documentMode"in document&&(lr=document.documentMode);var ad=W&&"TextEvent"in window&&!lr,Ds=W&&(!So||lr&&8<lr&&11>=lr),Ws=" ",Us=!1;function Vs(e,n){switch(e){case"keyup":return sd.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Bs(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var St=!1;function ud(e,n){switch(e){case"compositionend":return Bs(n);case"keypress":return n.which!==32?null:(Us=!0,Ws);case"textInput":return e=n.data,e===Ws&&Us?null:e;default:return null}}function cd(e,n){if(St)return e==="compositionend"||!So&&Vs(e,n)?(e=_s(),Hr=ho=Dn=null,St=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Ds&&n.locale!=="ko"?null:n.data;default:return null}}var dd={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Gs(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!dd[e.type]:n==="textarea"}function $s(e,n,t,r){ds(r),n=ei(n,"onChange"),0<n.length&&(t=new go("onChange","change",null,t,r),e.push({event:t,listeners:n}))}var sr=null,ar=null;function fd(e){ua(e,0)}function Xr(e){var n=Pt(e);if(Jl(n))return e}function pd(e,n){if(e==="change")return n}var Hs=!1;if(W){var No;if(W){var ko="oninput"in document;if(!ko){var Qs=document.createElement("div");Qs.setAttribute("oninput","return;"),ko=typeof Qs.oninput=="function"}No=ko}else No=!1;Hs=No&&(!document.documentMode||9<document.documentMode)}function Ks(){sr&&(sr.detachEvent("onpropertychange",Ys),ar=sr=null)}function Ys(e){if(e.propertyName==="value"&&Xr(ar)){var n=[];$s(n,ar,e,no(e)),hs(fd,n)}}function md(e,n,t){e==="focusin"?(Ks(),sr=n,ar=t,sr.attachEvent("onpropertychange",Ys)):e==="focusout"&&Ks()}function hd(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Xr(ar)}function gd(e,n){if(e==="click")return Xr(n)}function vd(e,n){if(e==="input"||e==="change")return Xr(n)}function yd(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var an=typeof Object.is=="function"?Object.is:yd;function ur(e,n){if(an(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),r=Object.keys(n);if(t.length!==r.length)return!1;for(r=0;r<t.length;r++){var i=t[r];if(!O.call(n,i)||!an(e[i],n[i]))return!1}return!0}function Xs(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Zs(e,n){var t=Xs(e);e=0;for(var r;t;){if(t.nodeType===3){if(r=e+t.textContent.length,e<=n&&r>=n)return{node:t,offset:n-e};e=r}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Xs(t)}}function qs(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?qs(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Js(){for(var e=window,n=Tr();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Tr(e.document)}return n}function Co(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function xd(e){var n=Js(),t=e.focusedElem,r=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&qs(t.ownerDocument.documentElement,t)){if(r!==null&&Co(t)){if(n=r.start,e=r.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var i=t.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Zs(t,o);var l=Zs(t,r);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(n=n.createRange(),n.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(n),e.extend(l.node,l.offset)):(n.setEnd(l.node,l.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var wd=W&&"documentMode"in document&&11>=document.documentMode,Nt=null,Eo=null,cr=null,Po=!1;function ea(e,n,t){var r=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Po||Nt==null||Nt!==Tr(r)||(r=Nt,"selectionStart"in r&&Co(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),cr&&ur(cr,r)||(cr=r,r=ei(Eo,"onSelect"),0<r.length&&(n=new go("onSelect","select",null,n,t),e.push({event:n,listeners:r}),n.target=Nt)))}function Zr(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var kt={animationend:Zr("Animation","AnimationEnd"),animationiteration:Zr("Animation","AnimationIteration"),animationstart:Zr("Animation","AnimationStart"),transitionend:Zr("Transition","TransitionEnd")},Fo={},na={};W&&(na=document.createElement("div").style,"AnimationEvent"in window||(delete kt.animationend.animation,delete kt.animationiteration.animation,delete kt.animationstart.animation),"TransitionEvent"in window||delete kt.transitionend.transition);function qr(e){if(Fo[e])return Fo[e];if(!kt[e])return e;var n=kt[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in na)return Fo[e]=n[t];return e}var ta=qr("animationend"),ra=qr("animationiteration"),ia=qr("animationstart"),oa=qr("transitionend"),la=new Map,sa="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Wn(e,n){la.set(e,n),C(n,[e])}for(var Ao=0;Ao<sa.length;Ao++){var jo=sa[Ao],Sd=jo.toLowerCase(),Nd=jo[0].toUpperCase()+jo.slice(1);Wn(Sd,"on"+Nd)}Wn(ta,"onAnimationEnd"),Wn(ra,"onAnimationIteration"),Wn(ia,"onAnimationStart"),Wn("dblclick","onDoubleClick"),Wn("focusin","onFocus"),Wn("focusout","onBlur"),Wn(oa,"onTransitionEnd"),E("onMouseEnter",["mouseout","mouseover"]),E("onMouseLeave",["mouseout","mouseover"]),E("onPointerEnter",["pointerout","pointerover"]),E("onPointerLeave",["pointerout","pointerover"]),C("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),C("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),C("onBeforeInput",["compositionend","keypress","textInput","paste"]),C("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),C("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),C("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var dr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),kd=new Set("cancel close invalid load scroll toggle".split(" ").concat(dr));function aa(e,n,t){var r=e.type||"unknown-event";e.currentTarget=t,Sc(r,n,void 0,e),e.currentTarget=null}function ua(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var r=e[t],i=r.event;r=r.listeners;e:{var o=void 0;if(n)for(var l=r.length-1;0<=l;l--){var u=r[l],c=u.instance,g=u.currentTarget;if(u=u.listener,c!==o&&i.isPropagationStopped())break e;aa(i,u,g),o=c}else for(l=0;l<r.length;l++){if(u=r[l],c=u.instance,g=u.currentTarget,u=u.listener,c!==o&&i.isPropagationStopped())break e;aa(i,u,g),o=c}}}if(Lr)throw e=oo,Lr=!1,oo=null,e}function ie(e,n){var t=n[zo];t===void 0&&(t=n[zo]=new Set);var r=e+"__bubble";t.has(r)||(ca(n,e,2,!1),t.add(r))}function Io(e,n,t){var r=0;n&&(r|=4),ca(t,e,r,n)}var Jr="_reactListening"+Math.random().toString(36).slice(2);function fr(e){if(!e[Jr]){e[Jr]=!0,j.forEach(function(t){t!=="selectionchange"&&(kd.has(t)||Io(t,!1,e),Io(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Jr]||(n[Jr]=!0,Io("selectionchange",!1,n))}}function ca(e,n,t,r){switch(Ts(n)){case 1:var i=zc;break;case 4:i=bc;break;default:i=po}t=i.bind(null,n,t,e),i=void 0,!io||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(n,t,{capture:!0,passive:i}):e.addEventListener(n,t,!0):i!==void 0?e.addEventListener(n,t,{passive:i}):e.addEventListener(n,t,!1)}function Ro(e,n,t,r,i){var o=r;if((n&1)===0&&(n&2)===0&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var u=r.stateNode.containerInfo;if(u===i||u.nodeType===8&&u.parentNode===i)break;if(l===4)for(l=r.return;l!==null;){var c=l.tag;if((c===3||c===4)&&(c=l.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;l=l.return}for(;u!==null;){if(l=rt(u),l===null)return;if(c=l.tag,c===5||c===6){r=o=l;continue e}u=u.parentNode}}r=r.return}hs(function(){var g=o,S=no(t),N=[];e:{var x=la.get(e);if(x!==void 0){var A=go,M=e;switch(e){case"keypress":if(Qr(t)===0)break e;case"keydown":case"keyup":A=Jc;break;case"focusin":M="focus",A=xo;break;case"focusout":M="blur",A=xo;break;case"beforeblur":case"afterblur":A=xo;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":A=Ls;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":A=Uc;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":A=td;break;case ta:case ra:case ia:A=Gc;break;case oa:A=id;break;case"scroll":A=Dc;break;case"wheel":A=ld;break;case"copy":case"cut":case"paste":A=Hc;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":A=bs}var T=(n&4)!==0,me=!T&&e==="scroll",m=T?x!==null?x+"Capture":null:x;T=[];for(var f=g,h;f!==null;){h=f;var k=h.stateNode;if(h.tag===5&&k!==null&&(h=k,m!==null&&(k=Kt(f,m),k!=null&&T.push(pr(f,k,h)))),me)break;f=f.return}0<T.length&&(x=new A(x,M,null,t,S),N.push({event:x,listeners:T}))}}if((n&7)===0){e:{if(x=e==="mouseover"||e==="pointerover",A=e==="mouseout"||e==="pointerout",x&&t!==eo&&(M=t.relatedTarget||t.fromElement)&&(rt(M)||M[kn]))break e;if((A||x)&&(x=S.window===S?S:(x=S.ownerDocument)?x.defaultView||x.parentWindow:window,A?(M=t.relatedTarget||t.toElement,A=g,M=M?rt(M):null,M!==null&&(me=tt(M),M!==me||M.tag!==5&&M.tag!==6)&&(M=null)):(A=null,M=g),A!==M)){if(T=Ls,k="onMouseLeave",m="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(T=bs,k="onPointerLeave",m="onPointerEnter",f="pointer"),me=A==null?x:Pt(A),h=M==null?x:Pt(M),x=new T(k,f+"leave",A,t,S),x.target=me,x.relatedTarget=h,k=null,rt(S)===g&&(T=new T(m,f+"enter",M,t,S),T.target=h,T.relatedTarget=me,k=T),me=k,A&&M)n:{for(T=A,m=M,f=0,h=T;h;h=Ct(h))f++;for(h=0,k=m;k;k=Ct(k))h++;for(;0<f-h;)T=Ct(T),f--;for(;0<h-f;)m=Ct(m),h--;for(;f--;){if(T===m||m!==null&&T===m.alternate)break n;T=Ct(T),m=Ct(m)}T=null}else T=null;A!==null&&da(N,x,A,T,!1),M!==null&&me!==null&&da(N,me,M,T,!0)}}e:{if(x=g?Pt(g):window,A=x.nodeName&&x.nodeName.toLowerCase(),A==="select"||A==="input"&&x.type==="file")var _=pd;else if(Gs(x))if(Hs)_=vd;else{_=hd;var b=md}else(A=x.nodeName)&&A.toLowerCase()==="input"&&(x.type==="checkbox"||x.type==="radio")&&(_=gd);if(_&&(_=_(e,g))){$s(N,_,t,S);break e}b&&b(e,x,g),e==="focusout"&&(b=x._wrapperState)&&b.controlled&&x.type==="number"&&Yi(x,"number",x.value)}switch(b=g?Pt(g):window,e){case"focusin":(Gs(b)||b.contentEditable==="true")&&(Nt=b,Eo=g,cr=null);break;case"focusout":cr=Eo=Nt=null;break;case"mousedown":Po=!0;break;case"contextmenu":case"mouseup":case"dragend":Po=!1,ea(N,t,S);break;case"selectionchange":if(wd)break;case"keydown":case"keyup":ea(N,t,S)}var D;if(So)e:{switch(e){case"compositionstart":var V="onCompositionStart";break e;case"compositionend":V="onCompositionEnd";break e;case"compositionupdate":V="onCompositionUpdate";break e}V=void 0}else St?Vs(e,t)&&(V="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(V="onCompositionStart");V&&(Ds&&t.locale!=="ko"&&(St||V!=="onCompositionStart"?V==="onCompositionEnd"&&St&&(D=_s()):(Dn=S,ho="value"in Dn?Dn.value:Dn.textContent,St=!0)),b=ei(g,V),0<b.length&&(V=new zs(V,e,null,t,S),N.push({event:V,listeners:b}),D?V.data=D:(D=Bs(t),D!==null&&(V.data=D)))),(D=ad?ud(e,t):cd(e,t))&&(g=ei(g,"onBeforeInput"),0<g.length&&(S=new zs("onBeforeInput","beforeinput",null,t,S),N.push({event:S,listeners:g}),S.data=D))}ua(N,n)})}function pr(e,n,t){return{instance:e,listener:n,currentTarget:t}}function ei(e,n){for(var t=n+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Kt(e,t),o!=null&&r.unshift(pr(e,o,i)),o=Kt(e,n),o!=null&&r.push(pr(e,o,i))),e=e.return}return r}function Ct(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function da(e,n,t,r,i){for(var o=n._reactName,l=[];t!==null&&t!==r;){var u=t,c=u.alternate,g=u.stateNode;if(c!==null&&c===r)break;u.tag===5&&g!==null&&(u=g,i?(c=Kt(t,o),c!=null&&l.unshift(pr(t,c,u))):i||(c=Kt(t,o),c!=null&&l.push(pr(t,c,u)))),t=t.return}l.length!==0&&e.push({event:n,listeners:l})}var Cd=/\r\n?/g,Ed=/\u0000|\uFFFD/g;function fa(e){return(typeof e=="string"?e:""+e).replace(Cd,`
`).replace(Ed,"")}function ni(e,n,t){if(n=fa(n),fa(e)!==n&&t)throw Error(a(425))}function ti(){}var Mo=null,To=null;function _o(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Oo=typeof setTimeout=="function"?setTimeout:void 0,Pd=typeof clearTimeout=="function"?clearTimeout:void 0,pa=typeof Promise=="function"?Promise:void 0,Fd=typeof queueMicrotask=="function"?queueMicrotask:typeof pa<"u"?function(e){return pa.resolve(null).then(e).catch(Ad)}:Oo;function Ad(e){setTimeout(function(){throw e})}function Lo(e,n){var t=n,r=0;do{var i=t.nextSibling;if(e.removeChild(t),i&&i.nodeType===8)if(t=i.data,t==="/$"){if(r===0){e.removeChild(i),rr(n);return}r--}else t!=="$"&&t!=="$?"&&t!=="$!"||r++;t=i}while(t);rr(n)}function Un(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function ma(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var Et=Math.random().toString(36).slice(2),vn="__reactFiber$"+Et,mr="__reactProps$"+Et,kn="__reactContainer$"+Et,zo="__reactEvents$"+Et,jd="__reactListeners$"+Et,Id="__reactHandles$"+Et;function rt(e){var n=e[vn];if(n)return n;for(var t=e.parentNode;t;){if(n=t[kn]||t[vn]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=ma(e);e!==null;){if(t=e[vn])return t;e=ma(e)}return n}e=t,t=e.parentNode}return null}function hr(e){return e=e[vn]||e[kn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Pt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(a(33))}function ri(e){return e[mr]||null}var bo=[],Ft=-1;function Vn(e){return{current:e}}function oe(e){0>Ft||(e.current=bo[Ft],bo[Ft]=null,Ft--)}function re(e,n){Ft++,bo[Ft]=e.current,e.current=n}var Bn={},Fe=Vn(Bn),Le=Vn(!1),it=Bn;function At(e,n){var t=e.type.contextTypes;if(!t)return Bn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===n)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in t)i[o]=n[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=i),i}function ze(e){return e=e.childContextTypes,e!=null}function ii(){oe(Le),oe(Fe)}function ha(e,n,t){if(Fe.current!==Bn)throw Error(a(168));re(Fe,n),re(Le,t)}function ga(e,n,t){var r=e.stateNode;if(n=n.childContextTypes,typeof r.getChildContext!="function")return t;r=r.getChildContext();for(var i in r)if(!(i in n))throw Error(a(108,te(e)||"Unknown",i));return R({},t,r)}function oi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Bn,it=Fe.current,re(Fe,e),re(Le,Le.current),!0}function va(e,n,t){var r=e.stateNode;if(!r)throw Error(a(169));t?(e=ga(e,n,it),r.__reactInternalMemoizedMergedChildContext=e,oe(Le),oe(Fe),re(Fe,e)):oe(Le),re(Le,t)}var Cn=null,li=!1,Do=!1;function ya(e){Cn===null?Cn=[e]:Cn.push(e)}function Rd(e){li=!0,ya(e)}function Gn(){if(!Do&&Cn!==null){Do=!0;var e=0,n=ne;try{var t=Cn;for(ne=1;e<t.length;e++){var r=t[e];do r=r(!0);while(r!==null)}Cn=null,li=!1}catch(i){throw Cn!==null&&(Cn=Cn.slice(e+1)),ws(lo,Gn),i}finally{ne=n,Do=!1}}return null}var jt=[],It=0,si=null,ai=0,Xe=[],Ze=0,ot=null,En=1,Pn="";function lt(e,n){jt[It++]=ai,jt[It++]=si,si=e,ai=n}function xa(e,n,t){Xe[Ze++]=En,Xe[Ze++]=Pn,Xe[Ze++]=ot,ot=e;var r=En;e=Pn;var i=32-sn(r)-1;r&=~(1<<i),t+=1;var o=32-sn(n)+i;if(30<o){var l=i-i%5;o=(r&(1<<l)-1).toString(32),r>>=l,i-=l,En=1<<32-sn(n)+i|t<<i|r,Pn=o+e}else En=1<<o|t<<i|r,Pn=e}function Wo(e){e.return!==null&&(lt(e,1),xa(e,1,0))}function Uo(e){for(;e===si;)si=jt[--It],jt[It]=null,ai=jt[--It],jt[It]=null;for(;e===ot;)ot=Xe[--Ze],Xe[Ze]=null,Pn=Xe[--Ze],Xe[Ze]=null,En=Xe[--Ze],Xe[Ze]=null}var He=null,Qe=null,ae=!1,un=null;function wa(e,n){var t=nn(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function Sa(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,He=e,Qe=Un(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,He=e,Qe=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=ot!==null?{id:En,overflow:Pn}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=nn(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,He=e,Qe=null,!0):!1;default:return!1}}function Vo(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Bo(e){if(ae){var n=Qe;if(n){var t=n;if(!Sa(e,n)){if(Vo(e))throw Error(a(418));n=Un(t.nextSibling);var r=He;n&&Sa(e,n)?wa(r,t):(e.flags=e.flags&-4097|2,ae=!1,He=e)}}else{if(Vo(e))throw Error(a(418));e.flags=e.flags&-4097|2,ae=!1,He=e}}}function Na(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;He=e}function ui(e){if(e!==He)return!1;if(!ae)return Na(e),ae=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!_o(e.type,e.memoizedProps)),n&&(n=Qe)){if(Vo(e))throw ka(),Error(a(418));for(;n;)wa(e,n),n=Un(n.nextSibling)}if(Na(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){Qe=Un(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}Qe=null}}else Qe=He?Un(e.stateNode.nextSibling):null;return!0}function ka(){for(var e=Qe;e;)e=Un(e.nextSibling)}function Rt(){Qe=He=null,ae=!1}function Go(e){un===null?un=[e]:un.push(e)}var Md=Pe.ReactCurrentBatchConfig;function gr(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(a(309));var r=t.stateNode}if(!r)throw Error(a(147,e));var i=r,o=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===o?n.ref:(n=function(l){var u=i.refs;l===null?delete u[o]:u[o]=l},n._stringRef=o,n)}if(typeof e!="string")throw Error(a(284));if(!t._owner)throw Error(a(290,e))}return e}function ci(e,n){throw e=Object.prototype.toString.call(n),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function Ca(e){var n=e._init;return n(e._payload)}function Ea(e){function n(m,f){if(e){var h=m.deletions;h===null?(m.deletions=[f],m.flags|=16):h.push(f)}}function t(m,f){if(!e)return null;for(;f!==null;)n(m,f),f=f.sibling;return null}function r(m,f){for(m=new Map;f!==null;)f.key!==null?m.set(f.key,f):m.set(f.index,f),f=f.sibling;return m}function i(m,f){return m=qn(m,f),m.index=0,m.sibling=null,m}function o(m,f,h){return m.index=h,e?(h=m.alternate,h!==null?(h=h.index,h<f?(m.flags|=2,f):h):(m.flags|=2,f)):(m.flags|=1048576,f)}function l(m){return e&&m.alternate===null&&(m.flags|=2),m}function u(m,f,h,k){return f===null||f.tag!==6?(f=Ol(h,m.mode,k),f.return=m,f):(f=i(f,h),f.return=m,f)}function c(m,f,h,k){var _=h.type;return _===_e?S(m,f,h.props.children,k,h.key):f!==null&&(f.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===Oe&&Ca(_)===f.type)?(k=i(f,h.props),k.ref=gr(m,f,h),k.return=m,k):(k=_i(h.type,h.key,h.props,null,m.mode,k),k.ref=gr(m,f,h),k.return=m,k)}function g(m,f,h,k){return f===null||f.tag!==4||f.stateNode.containerInfo!==h.containerInfo||f.stateNode.implementation!==h.implementation?(f=Ll(h,m.mode,k),f.return=m,f):(f=i(f,h.children||[]),f.return=m,f)}function S(m,f,h,k,_){return f===null||f.tag!==7?(f=mt(h,m.mode,k,_),f.return=m,f):(f=i(f,h),f.return=m,f)}function N(m,f,h){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Ol(""+f,m.mode,h),f.return=m,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case on:return h=_i(f.type,f.key,f.props,null,m.mode,h),h.ref=gr(m,null,f),h.return=m,h;case Re:return f=Ll(f,m.mode,h),f.return=m,f;case Oe:var k=f._init;return N(m,k(f._payload),h)}if($t(f)||U(f))return f=mt(f,m.mode,h,null),f.return=m,f;ci(m,f)}return null}function x(m,f,h,k){var _=f!==null?f.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return _!==null?null:u(m,f,""+h,k);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case on:return h.key===_?c(m,f,h,k):null;case Re:return h.key===_?g(m,f,h,k):null;case Oe:return _=h._init,x(m,f,_(h._payload),k)}if($t(h)||U(h))return _!==null?null:S(m,f,h,k,null);ci(m,h)}return null}function A(m,f,h,k,_){if(typeof k=="string"&&k!==""||typeof k=="number")return m=m.get(h)||null,u(f,m,""+k,_);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case on:return m=m.get(k.key===null?h:k.key)||null,c(f,m,k,_);case Re:return m=m.get(k.key===null?h:k.key)||null,g(f,m,k,_);case Oe:var b=k._init;return A(m,f,h,b(k._payload),_)}if($t(k)||U(k))return m=m.get(h)||null,S(f,m,k,_,null);ci(f,k)}return null}function M(m,f,h,k){for(var _=null,b=null,D=f,V=f=0,Se=null;D!==null&&V<h.length;V++){D.index>V?(Se=D,D=null):Se=D.sibling;var q=x(m,D,h[V],k);if(q===null){D===null&&(D=Se);break}e&&D&&q.alternate===null&&n(m,D),f=o(q,f,V),b===null?_=q:b.sibling=q,b=q,D=Se}if(V===h.length)return t(m,D),ae&&lt(m,V),_;if(D===null){for(;V<h.length;V++)D=N(m,h[V],k),D!==null&&(f=o(D,f,V),b===null?_=D:b.sibling=D,b=D);return ae&&lt(m,V),_}for(D=r(m,D);V<h.length;V++)Se=A(D,m,V,h[V],k),Se!==null&&(e&&Se.alternate!==null&&D.delete(Se.key===null?V:Se.key),f=o(Se,f,V),b===null?_=Se:b.sibling=Se,b=Se);return e&&D.forEach(function(Jn){return n(m,Jn)}),ae&&lt(m,V),_}function T(m,f,h,k){var _=U(h);if(typeof _!="function")throw Error(a(150));if(h=_.call(h),h==null)throw Error(a(151));for(var b=_=null,D=f,V=f=0,Se=null,q=h.next();D!==null&&!q.done;V++,q=h.next()){D.index>V?(Se=D,D=null):Se=D.sibling;var Jn=x(m,D,q.value,k);if(Jn===null){D===null&&(D=Se);break}e&&D&&Jn.alternate===null&&n(m,D),f=o(Jn,f,V),b===null?_=Jn:b.sibling=Jn,b=Jn,D=Se}if(q.done)return t(m,D),ae&&lt(m,V),_;if(D===null){for(;!q.done;V++,q=h.next())q=N(m,q.value,k),q!==null&&(f=o(q,f,V),b===null?_=q:b.sibling=q,b=q);return ae&&lt(m,V),_}for(D=r(m,D);!q.done;V++,q=h.next())q=A(D,m,V,q.value,k),q!==null&&(e&&q.alternate!==null&&D.delete(q.key===null?V:q.key),f=o(q,f,V),b===null?_=q:b.sibling=q,b=q);return e&&D.forEach(function(ff){return n(m,ff)}),ae&&lt(m,V),_}function me(m,f,h,k){if(typeof h=="object"&&h!==null&&h.type===_e&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case on:e:{for(var _=h.key,b=f;b!==null;){if(b.key===_){if(_=h.type,_===_e){if(b.tag===7){t(m,b.sibling),f=i(b,h.props.children),f.return=m,m=f;break e}}else if(b.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===Oe&&Ca(_)===b.type){t(m,b.sibling),f=i(b,h.props),f.ref=gr(m,b,h),f.return=m,m=f;break e}t(m,b);break}else n(m,b);b=b.sibling}h.type===_e?(f=mt(h.props.children,m.mode,k,h.key),f.return=m,m=f):(k=_i(h.type,h.key,h.props,null,m.mode,k),k.ref=gr(m,f,h),k.return=m,m=k)}return l(m);case Re:e:{for(b=h.key;f!==null;){if(f.key===b)if(f.tag===4&&f.stateNode.containerInfo===h.containerInfo&&f.stateNode.implementation===h.implementation){t(m,f.sibling),f=i(f,h.children||[]),f.return=m,m=f;break e}else{t(m,f);break}else n(m,f);f=f.sibling}f=Ll(h,m.mode,k),f.return=m,m=f}return l(m);case Oe:return b=h._init,me(m,f,b(h._payload),k)}if($t(h))return M(m,f,h,k);if(U(h))return T(m,f,h,k);ci(m,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,f!==null&&f.tag===6?(t(m,f.sibling),f=i(f,h),f.return=m,m=f):(t(m,f),f=Ol(h,m.mode,k),f.return=m,m=f),l(m)):t(m,f)}return me}var Mt=Ea(!0),Pa=Ea(!1),di=Vn(null),fi=null,Tt=null,$o=null;function Ho(){$o=Tt=fi=null}function Qo(e){var n=di.current;oe(di),e._currentValue=n}function Ko(e,n,t){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===t)break;e=e.return}}function _t(e,n){fi=e,$o=Tt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&n)!==0&&(be=!0),e.firstContext=null)}function qe(e){var n=e._currentValue;if($o!==e)if(e={context:e,memoizedValue:n,next:null},Tt===null){if(fi===null)throw Error(a(308));Tt=e,fi.dependencies={lanes:0,firstContext:e}}else Tt=Tt.next=e;return n}var st=null;function Yo(e){st===null?st=[e]:st.push(e)}function Fa(e,n,t,r){var i=n.interleaved;return i===null?(t.next=t,Yo(n)):(t.next=i.next,i.next=t),n.interleaved=t,Fn(e,r)}function Fn(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var $n=!1;function Xo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Aa(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function An(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function Hn(e,n,t){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(Y&2)!==0){var i=r.pending;return i===null?n.next=n:(n.next=i.next,i.next=n),r.pending=n,Fn(e,t)}return i=r.interleaved,i===null?(n.next=n,Yo(r)):(n.next=i.next,i.next=n),r.interleaved=n,Fn(e,t)}function pi(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,uo(e,t)}}function ja(e,n){var t=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,t===r)){var i=null,o=null;if(t=t.firstBaseUpdate,t!==null){do{var l={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};o===null?i=o=l:o=o.next=l,t=t.next}while(t!==null);o===null?i=o=n:o=o.next=n}else i=o=n;t={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function mi(e,n,t,r){var i=e.updateQueue;$n=!1;var o=i.firstBaseUpdate,l=i.lastBaseUpdate,u=i.shared.pending;if(u!==null){i.shared.pending=null;var c=u,g=c.next;c.next=null,l===null?o=g:l.next=g,l=c;var S=e.alternate;S!==null&&(S=S.updateQueue,u=S.lastBaseUpdate,u!==l&&(u===null?S.firstBaseUpdate=g:u.next=g,S.lastBaseUpdate=c))}if(o!==null){var N=i.baseState;l=0,S=g=c=null,u=o;do{var x=u.lane,A=u.eventTime;if((r&x)===x){S!==null&&(S=S.next={eventTime:A,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var M=e,T=u;switch(x=n,A=t,T.tag){case 1:if(M=T.payload,typeof M=="function"){N=M.call(A,N,x);break e}N=M;break e;case 3:M.flags=M.flags&-65537|128;case 0:if(M=T.payload,x=typeof M=="function"?M.call(A,N,x):M,x==null)break e;N=R({},N,x);break e;case 2:$n=!0}}u.callback!==null&&u.lane!==0&&(e.flags|=64,x=i.effects,x===null?i.effects=[u]:x.push(u))}else A={eventTime:A,lane:x,tag:u.tag,payload:u.payload,callback:u.callback,next:null},S===null?(g=S=A,c=N):S=S.next=A,l|=x;if(u=u.next,u===null){if(u=i.shared.pending,u===null)break;x=u,u=x.next,x.next=null,i.lastBaseUpdate=x,i.shared.pending=null}}while(!0);if(S===null&&(c=N),i.baseState=c,i.firstBaseUpdate=g,i.lastBaseUpdate=S,n=i.shared.interleaved,n!==null){i=n;do l|=i.lane,i=i.next;while(i!==n)}else o===null&&(i.shared.lanes=0);ct|=l,e.lanes=l,e.memoizedState=N}}function Ia(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var r=e[n],i=r.callback;if(i!==null){if(r.callback=null,r=t,typeof i!="function")throw Error(a(191,i));i.call(r)}}}var vr={},yn=Vn(vr),yr=Vn(vr),xr=Vn(vr);function at(e){if(e===vr)throw Error(a(174));return e}function Zo(e,n){switch(re(xr,n),re(yr,e),re(yn,vr),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:Zi(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=Zi(n,e)}oe(yn),re(yn,n)}function Ot(){oe(yn),oe(yr),oe(xr)}function Ra(e){at(xr.current);var n=at(yn.current),t=Zi(n,e.type);n!==t&&(re(yr,e),re(yn,t))}function qo(e){yr.current===e&&(oe(yn),oe(yr))}var ue=Vn(0);function hi(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Jo=[];function el(){for(var e=0;e<Jo.length;e++)Jo[e]._workInProgressVersionPrimary=null;Jo.length=0}var gi=Pe.ReactCurrentDispatcher,nl=Pe.ReactCurrentBatchConfig,ut=0,ce=null,ge=null,xe=null,vi=!1,wr=!1,Sr=0,Td=0;function Ae(){throw Error(a(321))}function tl(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!an(e[t],n[t]))return!1;return!0}function rl(e,n,t,r,i,o){if(ut=o,ce=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,gi.current=e===null||e.memoizedState===null?zd:bd,e=t(r,i),wr){o=0;do{if(wr=!1,Sr=0,25<=o)throw Error(a(301));o+=1,xe=ge=null,n.updateQueue=null,gi.current=Dd,e=t(r,i)}while(wr)}if(gi.current=wi,n=ge!==null&&ge.next!==null,ut=0,xe=ge=ce=null,vi=!1,n)throw Error(a(300));return e}function il(){var e=Sr!==0;return Sr=0,e}function xn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return xe===null?ce.memoizedState=xe=e:xe=xe.next=e,xe}function Je(){if(ge===null){var e=ce.alternate;e=e!==null?e.memoizedState:null}else e=ge.next;var n=xe===null?ce.memoizedState:xe.next;if(n!==null)xe=n,ge=e;else{if(e===null)throw Error(a(310));ge=e,e={memoizedState:ge.memoizedState,baseState:ge.baseState,baseQueue:ge.baseQueue,queue:ge.queue,next:null},xe===null?ce.memoizedState=xe=e:xe=xe.next=e}return xe}function Nr(e,n){return typeof n=="function"?n(e):n}function ol(e){var n=Je(),t=n.queue;if(t===null)throw Error(a(311));t.lastRenderedReducer=e;var r=ge,i=r.baseQueue,o=t.pending;if(o!==null){if(i!==null){var l=i.next;i.next=o.next,o.next=l}r.baseQueue=i=o,t.pending=null}if(i!==null){o=i.next,r=r.baseState;var u=l=null,c=null,g=o;do{var S=g.lane;if((ut&S)===S)c!==null&&(c=c.next={lane:0,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null}),r=g.hasEagerState?g.eagerState:e(r,g.action);else{var N={lane:S,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null};c===null?(u=c=N,l=r):c=c.next=N,ce.lanes|=S,ct|=S}g=g.next}while(g!==null&&g!==o);c===null?l=r:c.next=u,an(r,n.memoizedState)||(be=!0),n.memoizedState=r,n.baseState=l,n.baseQueue=c,t.lastRenderedState=r}if(e=t.interleaved,e!==null){i=e;do o=i.lane,ce.lanes|=o,ct|=o,i=i.next;while(i!==e)}else i===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function ll(e){var n=Je(),t=n.queue;if(t===null)throw Error(a(311));t.lastRenderedReducer=e;var r=t.dispatch,i=t.pending,o=n.memoizedState;if(i!==null){t.pending=null;var l=i=i.next;do o=e(o,l.action),l=l.next;while(l!==i);an(o,n.memoizedState)||(be=!0),n.memoizedState=o,n.baseQueue===null&&(n.baseState=o),t.lastRenderedState=o}return[o,r]}function Ma(){}function Ta(e,n){var t=ce,r=Je(),i=n(),o=!an(r.memoizedState,i);if(o&&(r.memoizedState=i,be=!0),r=r.queue,sl(La.bind(null,t,r,e),[e]),r.getSnapshot!==n||o||xe!==null&&xe.memoizedState.tag&1){if(t.flags|=2048,kr(9,Oa.bind(null,t,r,i,n),void 0,null),we===null)throw Error(a(349));(ut&30)!==0||_a(t,n,i)}return i}function _a(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=ce.updateQueue,n===null?(n={lastEffect:null,stores:null},ce.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function Oa(e,n,t,r){n.value=t,n.getSnapshot=r,za(n)&&ba(e)}function La(e,n,t){return t(function(){za(n)&&ba(e)})}function za(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!an(e,t)}catch{return!0}}function ba(e){var n=Fn(e,1);n!==null&&pn(n,e,1,-1)}function Da(e){var n=xn();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Nr,lastRenderedState:e},n.queue=e,e=e.dispatch=Ld.bind(null,ce,e),[n.memoizedState,e]}function kr(e,n,t,r){return e={tag:e,create:n,destroy:t,deps:r,next:null},n=ce.updateQueue,n===null?(n={lastEffect:null,stores:null},ce.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(r=t.next,t.next=e,e.next=r,n.lastEffect=e)),e}function Wa(){return Je().memoizedState}function yi(e,n,t,r){var i=xn();ce.flags|=e,i.memoizedState=kr(1|n,t,void 0,r===void 0?null:r)}function xi(e,n,t,r){var i=Je();r=r===void 0?null:r;var o=void 0;if(ge!==null){var l=ge.memoizedState;if(o=l.destroy,r!==null&&tl(r,l.deps)){i.memoizedState=kr(n,t,o,r);return}}ce.flags|=e,i.memoizedState=kr(1|n,t,o,r)}function Ua(e,n){return yi(8390656,8,e,n)}function sl(e,n){return xi(2048,8,e,n)}function Va(e,n){return xi(4,2,e,n)}function Ba(e,n){return xi(4,4,e,n)}function Ga(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function $a(e,n,t){return t=t!=null?t.concat([e]):null,xi(4,4,Ga.bind(null,n,e),t)}function al(){}function Ha(e,n){var t=Je();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&tl(n,r[1])?r[0]:(t.memoizedState=[e,n],e)}function Qa(e,n){var t=Je();n=n===void 0?null:n;var r=t.memoizedState;return r!==null&&n!==null&&tl(n,r[1])?r[0]:(e=e(),t.memoizedState=[e,n],e)}function Ka(e,n,t){return(ut&21)===0?(e.baseState&&(e.baseState=!1,be=!0),e.memoizedState=t):(an(t,n)||(t=Cs(),ce.lanes|=t,ct|=t,e.baseState=!0),n)}function _d(e,n){var t=ne;ne=t!==0&&4>t?t:4,e(!0);var r=nl.transition;nl.transition={};try{e(!1),n()}finally{ne=t,nl.transition=r}}function Ya(){return Je().memoizedState}function Od(e,n,t){var r=Xn(e);if(t={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null},Xa(e))Za(n,t);else if(t=Fa(e,n,t,r),t!==null){var i=Te();pn(t,e,r,i),qa(t,n,r)}}function Ld(e,n,t){var r=Xn(e),i={lane:r,action:t,hasEagerState:!1,eagerState:null,next:null};if(Xa(e))Za(n,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=n.lastRenderedReducer,o!==null))try{var l=n.lastRenderedState,u=o(l,t);if(i.hasEagerState=!0,i.eagerState=u,an(u,l)){var c=n.interleaved;c===null?(i.next=i,Yo(n)):(i.next=c.next,c.next=i),n.interleaved=i;return}}catch{}finally{}t=Fa(e,n,i,r),t!==null&&(i=Te(),pn(t,e,r,i),qa(t,n,r))}}function Xa(e){var n=e.alternate;return e===ce||n!==null&&n===ce}function Za(e,n){wr=vi=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function qa(e,n,t){if((t&4194240)!==0){var r=n.lanes;r&=e.pendingLanes,t|=r,n.lanes=t,uo(e,t)}}var wi={readContext:qe,useCallback:Ae,useContext:Ae,useEffect:Ae,useImperativeHandle:Ae,useInsertionEffect:Ae,useLayoutEffect:Ae,useMemo:Ae,useReducer:Ae,useRef:Ae,useState:Ae,useDebugValue:Ae,useDeferredValue:Ae,useTransition:Ae,useMutableSource:Ae,useSyncExternalStore:Ae,useId:Ae,unstable_isNewReconciler:!1},zd={readContext:qe,useCallback:function(e,n){return xn().memoizedState=[e,n===void 0?null:n],e},useContext:qe,useEffect:Ua,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,yi(4194308,4,Ga.bind(null,n,e),t)},useLayoutEffect:function(e,n){return yi(4194308,4,e,n)},useInsertionEffect:function(e,n){return yi(4,2,e,n)},useMemo:function(e,n){var t=xn();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var r=xn();return n=t!==void 0?t(n):n,r.memoizedState=r.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},r.queue=e,e=e.dispatch=Od.bind(null,ce,e),[r.memoizedState,e]},useRef:function(e){var n=xn();return e={current:e},n.memoizedState=e},useState:Da,useDebugValue:al,useDeferredValue:function(e){return xn().memoizedState=e},useTransition:function(){var e=Da(!1),n=e[0];return e=_d.bind(null,e[1]),xn().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var r=ce,i=xn();if(ae){if(t===void 0)throw Error(a(407));t=t()}else{if(t=n(),we===null)throw Error(a(349));(ut&30)!==0||_a(r,n,t)}i.memoizedState=t;var o={value:t,getSnapshot:n};return i.queue=o,Ua(La.bind(null,r,o,e),[e]),r.flags|=2048,kr(9,Oa.bind(null,r,o,t,n),void 0,null),t},useId:function(){var e=xn(),n=we.identifierPrefix;if(ae){var t=Pn,r=En;t=(r&~(1<<32-sn(r)-1)).toString(32)+t,n=":"+n+"R"+t,t=Sr++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=Td++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},bd={readContext:qe,useCallback:Ha,useContext:qe,useEffect:sl,useImperativeHandle:$a,useInsertionEffect:Va,useLayoutEffect:Ba,useMemo:Qa,useReducer:ol,useRef:Wa,useState:function(){return ol(Nr)},useDebugValue:al,useDeferredValue:function(e){var n=Je();return Ka(n,ge.memoizedState,e)},useTransition:function(){var e=ol(Nr)[0],n=Je().memoizedState;return[e,n]},useMutableSource:Ma,useSyncExternalStore:Ta,useId:Ya,unstable_isNewReconciler:!1},Dd={readContext:qe,useCallback:Ha,useContext:qe,useEffect:sl,useImperativeHandle:$a,useInsertionEffect:Va,useLayoutEffect:Ba,useMemo:Qa,useReducer:ll,useRef:Wa,useState:function(){return ll(Nr)},useDebugValue:al,useDeferredValue:function(e){var n=Je();return ge===null?n.memoizedState=e:Ka(n,ge.memoizedState,e)},useTransition:function(){var e=ll(Nr)[0],n=Je().memoizedState;return[e,n]},useMutableSource:Ma,useSyncExternalStore:Ta,useId:Ya,unstable_isNewReconciler:!1};function cn(e,n){if(e&&e.defaultProps){n=R({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function ul(e,n,t,r){n=e.memoizedState,t=t(r,n),t=t==null?n:R({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var Si={isMounted:function(e){return(e=e._reactInternals)?tt(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var r=Te(),i=Xn(e),o=An(r,i);o.payload=n,t!=null&&(o.callback=t),n=Hn(e,o,i),n!==null&&(pn(n,e,i,r),pi(n,e,i))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var r=Te(),i=Xn(e),o=An(r,i);o.tag=1,o.payload=n,t!=null&&(o.callback=t),n=Hn(e,o,i),n!==null&&(pn(n,e,i,r),pi(n,e,i))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=Te(),r=Xn(e),i=An(t,r);i.tag=2,n!=null&&(i.callback=n),n=Hn(e,i,r),n!==null&&(pn(n,e,r,t),pi(n,e,r))}};function Ja(e,n,t,r,i,o,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,l):n.prototype&&n.prototype.isPureReactComponent?!ur(t,r)||!ur(i,o):!0}function eu(e,n,t){var r=!1,i=Bn,o=n.contextType;return typeof o=="object"&&o!==null?o=qe(o):(i=ze(n)?it:Fe.current,r=n.contextTypes,o=(r=r!=null)?At(e,i):Bn),n=new n(t,o),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Si,e.stateNode=n,n._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),n}function nu(e,n,t,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,r),n.state!==e&&Si.enqueueReplaceState(n,n.state,null)}function cl(e,n,t,r){var i=e.stateNode;i.props=t,i.state=e.memoizedState,i.refs={},Xo(e);var o=n.contextType;typeof o=="object"&&o!==null?i.context=qe(o):(o=ze(n)?it:Fe.current,i.context=At(e,o)),i.state=e.memoizedState,o=n.getDerivedStateFromProps,typeof o=="function"&&(ul(e,n,o,t),i.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(n=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),n!==i.state&&Si.enqueueReplaceState(i,i.state,null),mi(e,t,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Lt(e,n){try{var t="",r=n;do t+=X(r),r=r.return;while(r);var i=t}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:n,stack:i,digest:null}}function dl(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function fl(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var Wd=typeof WeakMap=="function"?WeakMap:Map;function tu(e,n,t){t=An(-1,t),t.tag=3,t.payload={element:null};var r=n.value;return t.callback=function(){Ai||(Ai=!0,Fl=r),fl(e,n)},t}function ru(e,n,t){t=An(-1,t),t.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=n.value;t.payload=function(){return r(i)},t.callback=function(){fl(e,n)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(t.callback=function(){fl(e,n),typeof r!="function"&&(Kn===null?Kn=new Set([this]):Kn.add(this));var l=n.stack;this.componentDidCatch(n.value,{componentStack:l!==null?l:""})}),t}function iu(e,n,t){var r=e.pingCache;if(r===null){r=e.pingCache=new Wd;var i=new Set;r.set(n,i)}else i=r.get(n),i===void 0&&(i=new Set,r.set(n,i));i.has(t)||(i.add(t),e=ef.bind(null,e,n,t),n.then(e,e))}function ou(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function lu(e,n,t,r,i){return(e.mode&1)===0?(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=An(-1,1),n.tag=2,Hn(t,n,1))),t.lanes|=1),e):(e.flags|=65536,e.lanes=i,e)}var Ud=Pe.ReactCurrentOwner,be=!1;function Me(e,n,t,r){n.child=e===null?Pa(n,null,t,r):Mt(n,e.child,t,r)}function su(e,n,t,r,i){t=t.render;var o=n.ref;return _t(n,i),r=rl(e,n,t,r,o,i),t=il(),e!==null&&!be?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,jn(e,n,i)):(ae&&t&&Wo(n),n.flags|=1,Me(e,n,r,i),n.child)}function au(e,n,t,r,i){if(e===null){var o=t.type;return typeof o=="function"&&!_l(o)&&o.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=o,uu(e,n,o,r,i)):(e=_i(t.type,null,r,n,n.mode,i),e.ref=n.ref,e.return=n,n.child=e)}if(o=e.child,(e.lanes&i)===0){var l=o.memoizedProps;if(t=t.compare,t=t!==null?t:ur,t(l,r)&&e.ref===n.ref)return jn(e,n,i)}return n.flags|=1,e=qn(o,r),e.ref=n.ref,e.return=n,n.child=e}function uu(e,n,t,r,i){if(e!==null){var o=e.memoizedProps;if(ur(o,r)&&e.ref===n.ref)if(be=!1,n.pendingProps=r=o,(e.lanes&i)!==0)(e.flags&131072)!==0&&(be=!0);else return n.lanes=e.lanes,jn(e,n,i)}return pl(e,n,t,r,i)}function cu(e,n,t){var r=n.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((n.mode&1)===0)n.memoizedState={baseLanes:0,cachePool:null,transitions:null},re(bt,Ke),Ke|=t;else{if((t&1073741824)===0)return e=o!==null?o.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,re(bt,Ke),Ke|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:t,re(bt,Ke),Ke|=r}else o!==null?(r=o.baseLanes|t,n.memoizedState=null):r=t,re(bt,Ke),Ke|=r;return Me(e,n,i,t),n.child}function du(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function pl(e,n,t,r,i){var o=ze(t)?it:Fe.current;return o=At(n,o),_t(n,i),t=rl(e,n,t,r,o,i),r=il(),e!==null&&!be?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i,jn(e,n,i)):(ae&&r&&Wo(n),n.flags|=1,Me(e,n,t,i),n.child)}function fu(e,n,t,r,i){if(ze(t)){var o=!0;oi(n)}else o=!1;if(_t(n,i),n.stateNode===null)ki(e,n),eu(n,t,r),cl(n,t,r,i),r=!0;else if(e===null){var l=n.stateNode,u=n.memoizedProps;l.props=u;var c=l.context,g=t.contextType;typeof g=="object"&&g!==null?g=qe(g):(g=ze(t)?it:Fe.current,g=At(n,g));var S=t.getDerivedStateFromProps,N=typeof S=="function"||typeof l.getSnapshotBeforeUpdate=="function";N||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(u!==r||c!==g)&&nu(n,l,r,g),$n=!1;var x=n.memoizedState;l.state=x,mi(n,r,l,i),c=n.memoizedState,u!==r||x!==c||Le.current||$n?(typeof S=="function"&&(ul(n,t,S,r),c=n.memoizedState),(u=$n||Ja(n,t,u,r,x,c,g))?(N||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(n.flags|=4194308)):(typeof l.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=c),l.props=r,l.state=c,l.context=g,r=u):(typeof l.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{l=n.stateNode,Aa(e,n),u=n.memoizedProps,g=n.type===n.elementType?u:cn(n.type,u),l.props=g,N=n.pendingProps,x=l.context,c=t.contextType,typeof c=="object"&&c!==null?c=qe(c):(c=ze(t)?it:Fe.current,c=At(n,c));var A=t.getDerivedStateFromProps;(S=typeof A=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(u!==N||x!==c)&&nu(n,l,r,c),$n=!1,x=n.memoizedState,l.state=x,mi(n,r,l,i);var M=n.memoizedState;u!==N||x!==M||Le.current||$n?(typeof A=="function"&&(ul(n,t,A,r),M=n.memoizedState),(g=$n||Ja(n,t,g,r,x,M,c)||!1)?(S||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,M,c),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,M,c)),typeof l.componentDidUpdate=="function"&&(n.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof l.componentDidUpdate!="function"||u===e.memoizedProps&&x===e.memoizedState||(n.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&x===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=M),l.props=r,l.state=M,l.context=c,r=g):(typeof l.componentDidUpdate!="function"||u===e.memoizedProps&&x===e.memoizedState||(n.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&x===e.memoizedState||(n.flags|=1024),r=!1)}return ml(e,n,t,r,o,i)}function ml(e,n,t,r,i,o){du(e,n);var l=(n.flags&128)!==0;if(!r&&!l)return i&&va(n,t,!1),jn(e,n,o);r=n.stateNode,Ud.current=n;var u=l&&typeof t.getDerivedStateFromError!="function"?null:r.render();return n.flags|=1,e!==null&&l?(n.child=Mt(n,e.child,null,o),n.child=Mt(n,null,u,o)):Me(e,n,u,o),n.memoizedState=r.state,i&&va(n,t,!0),n.child}function pu(e){var n=e.stateNode;n.pendingContext?ha(e,n.pendingContext,n.pendingContext!==n.context):n.context&&ha(e,n.context,!1),Zo(e,n.containerInfo)}function mu(e,n,t,r,i){return Rt(),Go(i),n.flags|=256,Me(e,n,t,r),n.child}var hl={dehydrated:null,treeContext:null,retryLane:0};function gl(e){return{baseLanes:e,cachePool:null,transitions:null}}function hu(e,n,t){var r=n.pendingProps,i=ue.current,o=!1,l=(n.flags&128)!==0,u;if((u=l)||(u=e!==null&&e.memoizedState===null?!1:(i&2)!==0),u?(o=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),re(ue,i&1),e===null)return Bo(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((n.mode&1)===0?n.lanes=1:e.data==="$!"?n.lanes=8:n.lanes=1073741824,null):(l=r.children,e=r.fallback,o?(r=n.mode,o=n.child,l={mode:"hidden",children:l},(r&1)===0&&o!==null?(o.childLanes=0,o.pendingProps=l):o=Oi(l,r,0,null),e=mt(e,r,t,null),o.return=n,e.return=n,o.sibling=e,n.child=o,n.child.memoizedState=gl(t),n.memoizedState=hl,e):vl(n,l));if(i=e.memoizedState,i!==null&&(u=i.dehydrated,u!==null))return Vd(e,n,l,r,u,i,t);if(o){o=r.fallback,l=n.mode,i=e.child,u=i.sibling;var c={mode:"hidden",children:r.children};return(l&1)===0&&n.child!==i?(r=n.child,r.childLanes=0,r.pendingProps=c,n.deletions=null):(r=qn(i,c),r.subtreeFlags=i.subtreeFlags&14680064),u!==null?o=qn(u,o):(o=mt(o,l,t,null),o.flags|=2),o.return=n,r.return=n,r.sibling=o,n.child=r,r=o,o=n.child,l=e.child.memoizedState,l=l===null?gl(t):{baseLanes:l.baseLanes|t,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=e.childLanes&~t,n.memoizedState=hl,r}return o=e.child,e=o.sibling,r=qn(o,{mode:"visible",children:r.children}),(n.mode&1)===0&&(r.lanes=t),r.return=n,r.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=r,n.memoizedState=null,r}function vl(e,n){return n=Oi({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function Ni(e,n,t,r){return r!==null&&Go(r),Mt(n,e.child,null,t),e=vl(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Vd(e,n,t,r,i,o,l){if(t)return n.flags&256?(n.flags&=-257,r=dl(Error(a(422))),Ni(e,n,l,r)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(o=r.fallback,i=n.mode,r=Oi({mode:"visible",children:r.children},i,0,null),o=mt(o,i,l,null),o.flags|=2,r.return=n,o.return=n,r.sibling=o,n.child=r,(n.mode&1)!==0&&Mt(n,e.child,null,l),n.child.memoizedState=gl(l),n.memoizedState=hl,o);if((n.mode&1)===0)return Ni(e,n,l,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var u=r.dgst;return r=u,o=Error(a(419)),r=dl(o,r,void 0),Ni(e,n,l,r)}if(u=(l&e.childLanes)!==0,be||u){if(r=we,r!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(r.suspendedLanes|l))!==0?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Fn(e,i),pn(r,e,i,-1))}return Tl(),r=dl(Error(a(421))),Ni(e,n,l,r)}return i.data==="$?"?(n.flags|=128,n.child=e.child,n=nf.bind(null,e),i._reactRetry=n,null):(e=o.treeContext,Qe=Un(i.nextSibling),He=n,ae=!0,un=null,e!==null&&(Xe[Ze++]=En,Xe[Ze++]=Pn,Xe[Ze++]=ot,En=e.id,Pn=e.overflow,ot=n),n=vl(n,r.children),n.flags|=4096,n)}function gu(e,n,t){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),Ko(e.return,n,t)}function yl(e,n,t,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:t,tailMode:i}:(o.isBackwards=n,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=t,o.tailMode=i)}function vu(e,n,t){var r=n.pendingProps,i=r.revealOrder,o=r.tail;if(Me(e,n,r.children,t),r=ue.current,(r&2)!==0)r=r&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&gu(e,t,n);else if(e.tag===19)gu(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(re(ue,r),(n.mode&1)===0)n.memoizedState=null;else switch(i){case"forwards":for(t=n.child,i=null;t!==null;)e=t.alternate,e!==null&&hi(e)===null&&(i=t),t=t.sibling;t=i,t===null?(i=n.child,n.child=null):(i=t.sibling,t.sibling=null),yl(n,!1,i,t,o);break;case"backwards":for(t=null,i=n.child,n.child=null;i!==null;){if(e=i.alternate,e!==null&&hi(e)===null){n.child=i;break}e=i.sibling,i.sibling=t,t=i,i=e}yl(n,!0,t,null,o);break;case"together":yl(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function ki(e,n){(n.mode&1)===0&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function jn(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),ct|=n.lanes,(t&n.childLanes)===0)return null;if(e!==null&&n.child!==e.child)throw Error(a(153));if(n.child!==null){for(e=n.child,t=qn(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=qn(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function Bd(e,n,t){switch(n.tag){case 3:pu(n),Rt();break;case 5:Ra(n);break;case 1:ze(n.type)&&oi(n);break;case 4:Zo(n,n.stateNode.containerInfo);break;case 10:var r=n.type._context,i=n.memoizedProps.value;re(di,r._currentValue),r._currentValue=i;break;case 13:if(r=n.memoizedState,r!==null)return r.dehydrated!==null?(re(ue,ue.current&1),n.flags|=128,null):(t&n.child.childLanes)!==0?hu(e,n,t):(re(ue,ue.current&1),e=jn(e,n,t),e!==null?e.sibling:null);re(ue,ue.current&1);break;case 19:if(r=(t&n.childLanes)!==0,(e.flags&128)!==0){if(r)return vu(e,n,t);n.flags|=128}if(i=n.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),re(ue,ue.current),r)break;return null;case 22:case 23:return n.lanes=0,cu(e,n,t)}return jn(e,n,t)}var yu,xl,xu,wu;yu=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}},xl=function(){},xu=function(e,n,t,r){var i=e.memoizedProps;if(i!==r){e=n.stateNode,at(yn.current);var o=null;switch(t){case"input":i=Qi(e,i),r=Qi(e,r),o=[];break;case"select":i=R({},i,{value:void 0}),r=R({},r,{value:void 0}),o=[];break;case"textarea":i=Xi(e,i),r=Xi(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ti)}qi(t,r);var l;t=null;for(g in i)if(!r.hasOwnProperty(g)&&i.hasOwnProperty(g)&&i[g]!=null)if(g==="style"){var u=i[g];for(l in u)u.hasOwnProperty(l)&&(t||(t={}),t[l]="")}else g!=="dangerouslySetInnerHTML"&&g!=="children"&&g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(y.hasOwnProperty(g)?o||(o=[]):(o=o||[]).push(g,null));for(g in r){var c=r[g];if(u=i!=null?i[g]:void 0,r.hasOwnProperty(g)&&c!==u&&(c!=null||u!=null))if(g==="style")if(u){for(l in u)!u.hasOwnProperty(l)||c&&c.hasOwnProperty(l)||(t||(t={}),t[l]="");for(l in c)c.hasOwnProperty(l)&&u[l]!==c[l]&&(t||(t={}),t[l]=c[l])}else t||(o||(o=[]),o.push(g,t)),t=c;else g==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,u=u?u.__html:void 0,c!=null&&u!==c&&(o=o||[]).push(g,c)):g==="children"?typeof c!="string"&&typeof c!="number"||(o=o||[]).push(g,""+c):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&(y.hasOwnProperty(g)?(c!=null&&g==="onScroll"&&ie("scroll",e),o||u===c||(o=[])):(o=o||[]).push(g,c))}t&&(o=o||[]).push("style",t);var g=o;(n.updateQueue=g)&&(n.flags|=4)}},wu=function(e,n,t,r){t!==r&&(n.flags|=4)};function Cr(e,n){if(!ae)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function je(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,r=0;if(n)for(var i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)t|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=t,n}function Gd(e,n,t){var r=n.pendingProps;switch(Uo(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return je(n),null;case 1:return ze(n.type)&&ii(),je(n),null;case 3:return r=n.stateNode,Ot(),oe(Le),oe(Fe),el(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ui(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,un!==null&&(Il(un),un=null))),xl(e,n),je(n),null;case 5:qo(n);var i=at(xr.current);if(t=n.type,e!==null&&n.stateNode!=null)xu(e,n,t,r,i),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!r){if(n.stateNode===null)throw Error(a(166));return je(n),null}if(e=at(yn.current),ui(n)){r=n.stateNode,t=n.type;var o=n.memoizedProps;switch(r[vn]=n,r[mr]=o,e=(n.mode&1)!==0,t){case"dialog":ie("cancel",r),ie("close",r);break;case"iframe":case"object":case"embed":ie("load",r);break;case"video":case"audio":for(i=0;i<dr.length;i++)ie(dr[i],r);break;case"source":ie("error",r);break;case"img":case"image":case"link":ie("error",r),ie("load",r);break;case"details":ie("toggle",r);break;case"input":es(r,o),ie("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},ie("invalid",r);break;case"textarea":rs(r,o),ie("invalid",r)}qi(t,o),i=null;for(var l in o)if(o.hasOwnProperty(l)){var u=o[l];l==="children"?typeof u=="string"?r.textContent!==u&&(o.suppressHydrationWarning!==!0&&ni(r.textContent,u,e),i=["children",u]):typeof u=="number"&&r.textContent!==""+u&&(o.suppressHydrationWarning!==!0&&ni(r.textContent,u,e),i=["children",""+u]):y.hasOwnProperty(l)&&u!=null&&l==="onScroll"&&ie("scroll",r)}switch(t){case"input":Mr(r),ts(r,o,!0);break;case"textarea":Mr(r),os(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=ti)}r=i,n.updateQueue=r,r!==null&&(n.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ls(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(t,{is:r.is}):(e=l.createElement(t),t==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,t),e[vn]=n,e[mr]=r,yu(e,n,!1,!1),n.stateNode=e;e:{switch(l=Ji(t,r),t){case"dialog":ie("cancel",e),ie("close",e),i=r;break;case"iframe":case"object":case"embed":ie("load",e),i=r;break;case"video":case"audio":for(i=0;i<dr.length;i++)ie(dr[i],e);i=r;break;case"source":ie("error",e),i=r;break;case"img":case"image":case"link":ie("error",e),ie("load",e),i=r;break;case"details":ie("toggle",e),i=r;break;case"input":es(e,r),i=Qi(e,r),ie("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=R({},r,{value:void 0}),ie("invalid",e);break;case"textarea":rs(e,r),i=Xi(e,r),ie("invalid",e);break;default:i=r}qi(t,i),u=i;for(o in u)if(u.hasOwnProperty(o)){var c=u[o];o==="style"?us(e,c):o==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&ss(e,c)):o==="children"?typeof c=="string"?(t!=="textarea"||c!=="")&&Ht(e,c):typeof c=="number"&&Ht(e,""+c):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(y.hasOwnProperty(o)?c!=null&&o==="onScroll"&&ie("scroll",e):c!=null&&Ve(e,o,c,l))}switch(t){case"input":Mr(e),ts(e,r,!1);break;case"textarea":Mr(e),os(e);break;case"option":r.value!=null&&e.setAttribute("value",""+ee(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?gt(e,!!r.multiple,o,!1):r.defaultValue!=null&&gt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=ti)}switch(t){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return je(n),null;case 6:if(e&&n.stateNode!=null)wu(e,n,e.memoizedProps,r);else{if(typeof r!="string"&&n.stateNode===null)throw Error(a(166));if(t=at(xr.current),at(yn.current),ui(n)){if(r=n.stateNode,t=n.memoizedProps,r[vn]=n,(o=r.nodeValue!==t)&&(e=He,e!==null))switch(e.tag){case 3:ni(r.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ni(r.nodeValue,t,(e.mode&1)!==0)}o&&(n.flags|=4)}else r=(t.nodeType===9?t:t.ownerDocument).createTextNode(r),r[vn]=n,n.stateNode=r}return je(n),null;case 13:if(oe(ue),r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ae&&Qe!==null&&(n.mode&1)!==0&&(n.flags&128)===0)ka(),Rt(),n.flags|=98560,o=!1;else if(o=ui(n),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(a(318));if(o=n.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(a(317));o[vn]=n}else Rt(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;je(n),o=!1}else un!==null&&(Il(un),un=null),o=!0;if(!o)return n.flags&65536?n:null}return(n.flags&128)!==0?(n.lanes=t,n):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(n.child.flags|=8192,(n.mode&1)!==0&&(e===null||(ue.current&1)!==0?ve===0&&(ve=3):Tl())),n.updateQueue!==null&&(n.flags|=4),je(n),null);case 4:return Ot(),xl(e,n),e===null&&fr(n.stateNode.containerInfo),je(n),null;case 10:return Qo(n.type._context),je(n),null;case 17:return ze(n.type)&&ii(),je(n),null;case 19:if(oe(ue),o=n.memoizedState,o===null)return je(n),null;if(r=(n.flags&128)!==0,l=o.rendering,l===null)if(r)Cr(o,!1);else{if(ve!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(l=hi(e),l!==null){for(n.flags|=128,Cr(o,!1),r=l.updateQueue,r!==null&&(n.updateQueue=r,n.flags|=4),n.subtreeFlags=0,r=t,t=n.child;t!==null;)o=t,e=r,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,e=l.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return re(ue,ue.current&1|2),n.child}e=e.sibling}o.tail!==null&&pe()>Dt&&(n.flags|=128,r=!0,Cr(o,!1),n.lanes=4194304)}else{if(!r)if(e=hi(l),e!==null){if(n.flags|=128,r=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),Cr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!ae)return je(n),null}else 2*pe()-o.renderingStartTime>Dt&&t!==1073741824&&(n.flags|=128,r=!0,Cr(o,!1),n.lanes=4194304);o.isBackwards?(l.sibling=n.child,n.child=l):(t=o.last,t!==null?t.sibling=l:n.child=l,o.last=l)}return o.tail!==null?(n=o.tail,o.rendering=n,o.tail=n.sibling,o.renderingStartTime=pe(),n.sibling=null,t=ue.current,re(ue,r?t&1|2:t&1),n):(je(n),null);case 22:case 23:return Ml(),r=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(n.flags|=8192),r&&(n.mode&1)!==0?(Ke&1073741824)!==0&&(je(n),n.subtreeFlags&6&&(n.flags|=8192)):je(n),null;case 24:return null;case 25:return null}throw Error(a(156,n.tag))}function $d(e,n){switch(Uo(n),n.tag){case 1:return ze(n.type)&&ii(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Ot(),oe(Le),oe(Fe),el(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 5:return qo(n),null;case 13:if(oe(ue),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(a(340));Rt()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return oe(ue),null;case 4:return Ot(),null;case 10:return Qo(n.type._context),null;case 22:case 23:return Ml(),null;case 24:return null;default:return null}}var Ci=!1,Ie=!1,Hd=typeof WeakSet=="function"?WeakSet:Set,I=null;function zt(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(r){fe(e,n,r)}else t.current=null}function wl(e,n,t){try{t()}catch(r){fe(e,n,r)}}var Su=!1;function Qd(e,n){if(Mo=Gr,e=Js(),Co(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var r=t.getSelection&&t.getSelection();if(r&&r.rangeCount!==0){t=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{t.nodeType,o.nodeType}catch{t=null;break e}var l=0,u=-1,c=-1,g=0,S=0,N=e,x=null;n:for(;;){for(var A;N!==t||i!==0&&N.nodeType!==3||(u=l+i),N!==o||r!==0&&N.nodeType!==3||(c=l+r),N.nodeType===3&&(l+=N.nodeValue.length),(A=N.firstChild)!==null;)x=N,N=A;for(;;){if(N===e)break n;if(x===t&&++g===i&&(u=l),x===o&&++S===r&&(c=l),(A=N.nextSibling)!==null)break;N=x,x=N.parentNode}N=A}t=u===-1||c===-1?null:{start:u,end:c}}else t=null}t=t||{start:0,end:0}}else t=null;for(To={focusedElem:e,selectionRange:t},Gr=!1,I=n;I!==null;)if(n=I,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,I=e;else for(;I!==null;){n=I;try{var M=n.alternate;if((n.flags&1024)!==0)switch(n.tag){case 0:case 11:case 15:break;case 1:if(M!==null){var T=M.memoizedProps,me=M.memoizedState,m=n.stateNode,f=m.getSnapshotBeforeUpdate(n.elementType===n.type?T:cn(n.type,T),me);m.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var h=n.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(a(163))}}catch(k){fe(n,n.return,k)}if(e=n.sibling,e!==null){e.return=n.return,I=e;break}I=n.return}return M=Su,Su=!1,M}function Er(e,n,t){var r=n.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&wl(n,t,o)}i=i.next}while(i!==r)}}function Ei(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var r=t.create;t.destroy=r()}t=t.next}while(t!==n)}}function Sl(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function Nu(e){var n=e.alternate;n!==null&&(e.alternate=null,Nu(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[vn],delete n[mr],delete n[zo],delete n[jd],delete n[Id])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function ku(e){return e.tag===5||e.tag===3||e.tag===4}function Cu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||ku(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Nl(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=ti));else if(r!==4&&(e=e.child,e!==null))for(Nl(e,n,t),e=e.sibling;e!==null;)Nl(e,n,t),e=e.sibling}function kl(e,n,t){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(kl(e,n,t),e=e.sibling;e!==null;)kl(e,n,t),e=e.sibling}var Ne=null,dn=!1;function Qn(e,n,t){for(t=t.child;t!==null;)Eu(e,n,t),t=t.sibling}function Eu(e,n,t){if(gn&&typeof gn.onCommitFiberUnmount=="function")try{gn.onCommitFiberUnmount(br,t)}catch{}switch(t.tag){case 5:Ie||zt(t,n);case 6:var r=Ne,i=dn;Ne=null,Qn(e,n,t),Ne=r,dn=i,Ne!==null&&(dn?(e=Ne,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):Ne.removeChild(t.stateNode));break;case 18:Ne!==null&&(dn?(e=Ne,t=t.stateNode,e.nodeType===8?Lo(e.parentNode,t):e.nodeType===1&&Lo(e,t),rr(e)):Lo(Ne,t.stateNode));break;case 4:r=Ne,i=dn,Ne=t.stateNode.containerInfo,dn=!0,Qn(e,n,t),Ne=r,dn=i;break;case 0:case 11:case 14:case 15:if(!Ie&&(r=t.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,l=o.destroy;o=o.tag,l!==void 0&&((o&2)!==0||(o&4)!==0)&&wl(t,n,l),i=i.next}while(i!==r)}Qn(e,n,t);break;case 1:if(!Ie&&(zt(t,n),r=t.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=t.memoizedProps,r.state=t.memoizedState,r.componentWillUnmount()}catch(u){fe(t,n,u)}Qn(e,n,t);break;case 21:Qn(e,n,t);break;case 22:t.mode&1?(Ie=(r=Ie)||t.memoizedState!==null,Qn(e,n,t),Ie=r):Qn(e,n,t);break;default:Qn(e,n,t)}}function Pu(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new Hd),n.forEach(function(r){var i=tf.bind(null,e,r);t.has(r)||(t.add(r),r.then(i,i))})}}function fn(e,n){var t=n.deletions;if(t!==null)for(var r=0;r<t.length;r++){var i=t[r];try{var o=e,l=n,u=l;e:for(;u!==null;){switch(u.tag){case 5:Ne=u.stateNode,dn=!1;break e;case 3:Ne=u.stateNode.containerInfo,dn=!0;break e;case 4:Ne=u.stateNode.containerInfo,dn=!0;break e}u=u.return}if(Ne===null)throw Error(a(160));Eu(o,l,i),Ne=null,dn=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(g){fe(i,n,g)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Fu(n,e),n=n.sibling}function Fu(e,n){var t=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(fn(n,e),wn(e),r&4){try{Er(3,e,e.return),Ei(3,e)}catch(T){fe(e,e.return,T)}try{Er(5,e,e.return)}catch(T){fe(e,e.return,T)}}break;case 1:fn(n,e),wn(e),r&512&&t!==null&&zt(t,t.return);break;case 5:if(fn(n,e),wn(e),r&512&&t!==null&&zt(t,t.return),e.flags&32){var i=e.stateNode;try{Ht(i,"")}catch(T){fe(e,e.return,T)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,l=t!==null?t.memoizedProps:o,u=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{u==="input"&&o.type==="radio"&&o.name!=null&&ns(i,o),Ji(u,l);var g=Ji(u,o);for(l=0;l<c.length;l+=2){var S=c[l],N=c[l+1];S==="style"?us(i,N):S==="dangerouslySetInnerHTML"?ss(i,N):S==="children"?Ht(i,N):Ve(i,S,N,g)}switch(u){case"input":Ki(i,o);break;case"textarea":is(i,o);break;case"select":var x=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var A=o.value;A!=null?gt(i,!!o.multiple,A,!1):x!==!!o.multiple&&(o.defaultValue!=null?gt(i,!!o.multiple,o.defaultValue,!0):gt(i,!!o.multiple,o.multiple?[]:"",!1))}i[mr]=o}catch(T){fe(e,e.return,T)}}break;case 6:if(fn(n,e),wn(e),r&4){if(e.stateNode===null)throw Error(a(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(T){fe(e,e.return,T)}}break;case 3:if(fn(n,e),wn(e),r&4&&t!==null&&t.memoizedState.isDehydrated)try{rr(n.containerInfo)}catch(T){fe(e,e.return,T)}break;case 4:fn(n,e),wn(e);break;case 13:fn(n,e),wn(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Pl=pe())),r&4&&Pu(e);break;case 22:if(S=t!==null&&t.memoizedState!==null,e.mode&1?(Ie=(g=Ie)||S,fn(n,e),Ie=g):fn(n,e),wn(e),r&8192){if(g=e.memoizedState!==null,(e.stateNode.isHidden=g)&&!S&&(e.mode&1)!==0)for(I=e,S=e.child;S!==null;){for(N=I=S;I!==null;){switch(x=I,A=x.child,x.tag){case 0:case 11:case 14:case 15:Er(4,x,x.return);break;case 1:zt(x,x.return);var M=x.stateNode;if(typeof M.componentWillUnmount=="function"){r=x,t=x.return;try{n=r,M.props=n.memoizedProps,M.state=n.memoizedState,M.componentWillUnmount()}catch(T){fe(r,t,T)}}break;case 5:zt(x,x.return);break;case 22:if(x.memoizedState!==null){Iu(N);continue}}A!==null?(A.return=x,I=A):Iu(N)}S=S.sibling}e:for(S=null,N=e;;){if(N.tag===5){if(S===null){S=N;try{i=N.stateNode,g?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(u=N.stateNode,c=N.memoizedProps.style,l=c!=null&&c.hasOwnProperty("display")?c.display:null,u.style.display=as("display",l))}catch(T){fe(e,e.return,T)}}}else if(N.tag===6){if(S===null)try{N.stateNode.nodeValue=g?"":N.memoizedProps}catch(T){fe(e,e.return,T)}}else if((N.tag!==22&&N.tag!==23||N.memoizedState===null||N===e)&&N.child!==null){N.child.return=N,N=N.child;continue}if(N===e)break e;for(;N.sibling===null;){if(N.return===null||N.return===e)break e;S===N&&(S=null),N=N.return}S===N&&(S=null),N.sibling.return=N.return,N=N.sibling}}break;case 19:fn(n,e),wn(e),r&4&&Pu(e);break;case 21:break;default:fn(n,e),wn(e)}}function wn(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(ku(t)){var r=t;break e}t=t.return}throw Error(a(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ht(i,""),r.flags&=-33);var o=Cu(e);kl(e,o,i);break;case 3:case 4:var l=r.stateNode.containerInfo,u=Cu(e);Nl(e,u,l);break;default:throw Error(a(161))}}catch(c){fe(e,e.return,c)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Kd(e,n,t){I=e,Au(e)}function Au(e,n,t){for(var r=(e.mode&1)!==0;I!==null;){var i=I,o=i.child;if(i.tag===22&&r){var l=i.memoizedState!==null||Ci;if(!l){var u=i.alternate,c=u!==null&&u.memoizedState!==null||Ie;u=Ci;var g=Ie;if(Ci=l,(Ie=c)&&!g)for(I=i;I!==null;)l=I,c=l.child,l.tag===22&&l.memoizedState!==null?Ru(i):c!==null?(c.return=l,I=c):Ru(i);for(;o!==null;)I=o,Au(o),o=o.sibling;I=i,Ci=u,Ie=g}ju(e)}else(i.subtreeFlags&8772)!==0&&o!==null?(o.return=i,I=o):ju(e)}}function ju(e){for(;I!==null;){var n=I;if((n.flags&8772)!==0){var t=n.alternate;try{if((n.flags&8772)!==0)switch(n.tag){case 0:case 11:case 15:Ie||Ei(5,n);break;case 1:var r=n.stateNode;if(n.flags&4&&!Ie)if(t===null)r.componentDidMount();else{var i=n.elementType===n.type?t.memoizedProps:cn(n.type,t.memoizedProps);r.componentDidUpdate(i,t.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=n.updateQueue;o!==null&&Ia(n,o,r);break;case 3:var l=n.updateQueue;if(l!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}Ia(n,l,t)}break;case 5:var u=n.stateNode;if(t===null&&n.flags&4){t=u;var c=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&t.focus();break;case"img":c.src&&(t.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var g=n.alternate;if(g!==null){var S=g.memoizedState;if(S!==null){var N=S.dehydrated;N!==null&&rr(N)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(a(163))}Ie||n.flags&512&&Sl(n)}catch(x){fe(n,n.return,x)}}if(n===e){I=null;break}if(t=n.sibling,t!==null){t.return=n.return,I=t;break}I=n.return}}function Iu(e){for(;I!==null;){var n=I;if(n===e){I=null;break}var t=n.sibling;if(t!==null){t.return=n.return,I=t;break}I=n.return}}function Ru(e){for(;I!==null;){var n=I;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{Ei(4,n)}catch(c){fe(n,t,c)}break;case 1:var r=n.stateNode;if(typeof r.componentDidMount=="function"){var i=n.return;try{r.componentDidMount()}catch(c){fe(n,i,c)}}var o=n.return;try{Sl(n)}catch(c){fe(n,o,c)}break;case 5:var l=n.return;try{Sl(n)}catch(c){fe(n,l,c)}}}catch(c){fe(n,n.return,c)}if(n===e){I=null;break}var u=n.sibling;if(u!==null){u.return=n.return,I=u;break}I=n.return}}var Yd=Math.ceil,Pi=Pe.ReactCurrentDispatcher,Cl=Pe.ReactCurrentOwner,en=Pe.ReactCurrentBatchConfig,Y=0,we=null,he=null,ke=0,Ke=0,bt=Vn(0),ve=0,Pr=null,ct=0,Fi=0,El=0,Fr=null,De=null,Pl=0,Dt=1/0,In=null,Ai=!1,Fl=null,Kn=null,ji=!1,Yn=null,Ii=0,Ar=0,Al=null,Ri=-1,Mi=0;function Te(){return(Y&6)!==0?pe():Ri!==-1?Ri:Ri=pe()}function Xn(e){return(e.mode&1)===0?1:(Y&2)!==0&&ke!==0?ke&-ke:Md.transition!==null?(Mi===0&&(Mi=Cs()),Mi):(e=ne,e!==0||(e=window.event,e=e===void 0?16:Ts(e.type)),e)}function pn(e,n,t,r){if(50<Ar)throw Ar=0,Al=null,Error(a(185));qt(e,t,r),((Y&2)===0||e!==we)&&(e===we&&((Y&2)===0&&(Fi|=t),ve===4&&Zn(e,ke)),We(e,r),t===1&&Y===0&&(n.mode&1)===0&&(Dt=pe()+500,li&&Gn()))}function We(e,n){var t=e.callbackNode;Mc(e,n);var r=Ur(e,e===we?ke:0);if(r===0)t!==null&&Ss(t),e.callbackNode=null,e.callbackPriority=0;else if(n=r&-r,e.callbackPriority!==n){if(t!=null&&Ss(t),n===1)e.tag===0?Rd(Tu.bind(null,e)):ya(Tu.bind(null,e)),Fd(function(){(Y&6)===0&&Gn()}),t=null;else{switch(Es(r)){case 1:t=lo;break;case 4:t=Ns;break;case 16:t=zr;break;case 536870912:t=ks;break;default:t=zr}t=Uu(t,Mu.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function Mu(e,n){if(Ri=-1,Mi=0,(Y&6)!==0)throw Error(a(327));var t=e.callbackNode;if(Wt()&&e.callbackNode!==t)return null;var r=Ur(e,e===we?ke:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||n)n=Ti(e,r);else{n=r;var i=Y;Y|=2;var o=Ou();(we!==e||ke!==n)&&(In=null,Dt=pe()+500,ft(e,n));do try{qd();break}catch(u){_u(e,u)}while(!0);Ho(),Pi.current=o,Y=i,he!==null?n=0:(we=null,ke=0,n=ve)}if(n!==0){if(n===2&&(i=so(e),i!==0&&(r=i,n=jl(e,i))),n===1)throw t=Pr,ft(e,0),Zn(e,r),We(e,pe()),t;if(n===6)Zn(e,r);else{if(i=e.current.alternate,(r&30)===0&&!Xd(i)&&(n=Ti(e,r),n===2&&(o=so(e),o!==0&&(r=o,n=jl(e,o))),n===1))throw t=Pr,ft(e,0),Zn(e,r),We(e,pe()),t;switch(e.finishedWork=i,e.finishedLanes=r,n){case 0:case 1:throw Error(a(345));case 2:pt(e,De,In);break;case 3:if(Zn(e,r),(r&130023424)===r&&(n=Pl+500-pe(),10<n)){if(Ur(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Te(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Oo(pt.bind(null,e,De,In),n);break}pt(e,De,In);break;case 4:if(Zn(e,r),(r&4194240)===r)break;for(n=e.eventTimes,i=-1;0<r;){var l=31-sn(r);o=1<<l,l=n[l],l>i&&(i=l),r&=~o}if(r=i,r=pe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Yd(r/1960))-r,10<r){e.timeoutHandle=Oo(pt.bind(null,e,De,In),r);break}pt(e,De,In);break;case 5:pt(e,De,In);break;default:throw Error(a(329))}}}return We(e,pe()),e.callbackNode===t?Mu.bind(null,e):null}function jl(e,n){var t=Fr;return e.current.memoizedState.isDehydrated&&(ft(e,n).flags|=256),e=Ti(e,n),e!==2&&(n=De,De=t,n!==null&&Il(n)),e}function Il(e){De===null?De=e:De.push.apply(De,e)}function Xd(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var r=0;r<t.length;r++){var i=t[r],o=i.getSnapshot;i=i.value;try{if(!an(o(),i))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Zn(e,n){for(n&=~El,n&=~Fi,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-sn(n),r=1<<t;e[t]=-1,n&=~r}}function Tu(e){if((Y&6)!==0)throw Error(a(327));Wt();var n=Ur(e,0);if((n&1)===0)return We(e,pe()),null;var t=Ti(e,n);if(e.tag!==0&&t===2){var r=so(e);r!==0&&(n=r,t=jl(e,r))}if(t===1)throw t=Pr,ft(e,0),Zn(e,n),We(e,pe()),t;if(t===6)throw Error(a(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,pt(e,De,In),We(e,pe()),null}function Rl(e,n){var t=Y;Y|=1;try{return e(n)}finally{Y=t,Y===0&&(Dt=pe()+500,li&&Gn())}}function dt(e){Yn!==null&&Yn.tag===0&&(Y&6)===0&&Wt();var n=Y;Y|=1;var t=en.transition,r=ne;try{if(en.transition=null,ne=1,e)return e()}finally{ne=r,en.transition=t,Y=n,(Y&6)===0&&Gn()}}function Ml(){Ke=bt.current,oe(bt)}function ft(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,Pd(t)),he!==null)for(t=he.return;t!==null;){var r=t;switch(Uo(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ii();break;case 3:Ot(),oe(Le),oe(Fe),el();break;case 5:qo(r);break;case 4:Ot();break;case 13:oe(ue);break;case 19:oe(ue);break;case 10:Qo(r.type._context);break;case 22:case 23:Ml()}t=t.return}if(we=e,he=e=qn(e.current,null),ke=Ke=n,ve=0,Pr=null,El=Fi=ct=0,De=Fr=null,st!==null){for(n=0;n<st.length;n++)if(t=st[n],r=t.interleaved,r!==null){t.interleaved=null;var i=r.next,o=t.pending;if(o!==null){var l=o.next;o.next=i,r.next=l}t.pending=r}st=null}return e}function _u(e,n){do{var t=he;try{if(Ho(),gi.current=wi,vi){for(var r=ce.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}vi=!1}if(ut=0,xe=ge=ce=null,wr=!1,Sr=0,Cl.current=null,t===null||t.return===null){ve=1,Pr=n,he=null;break}e:{var o=e,l=t.return,u=t,c=n;if(n=ke,u.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var g=c,S=u,N=S.tag;if((S.mode&1)===0&&(N===0||N===11||N===15)){var x=S.alternate;x?(S.updateQueue=x.updateQueue,S.memoizedState=x.memoizedState,S.lanes=x.lanes):(S.updateQueue=null,S.memoizedState=null)}var A=ou(l);if(A!==null){A.flags&=-257,lu(A,l,u,o,n),A.mode&1&&iu(o,g,n),n=A,c=g;var M=n.updateQueue;if(M===null){var T=new Set;T.add(c),n.updateQueue=T}else M.add(c);break e}else{if((n&1)===0){iu(o,g,n),Tl();break e}c=Error(a(426))}}else if(ae&&u.mode&1){var me=ou(l);if(me!==null){(me.flags&65536)===0&&(me.flags|=256),lu(me,l,u,o,n),Go(Lt(c,u));break e}}o=c=Lt(c,u),ve!==4&&(ve=2),Fr===null?Fr=[o]:Fr.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,n&=-n,o.lanes|=n;var m=tu(o,c,n);ja(o,m);break e;case 1:u=c;var f=o.type,h=o.stateNode;if((o.flags&128)===0&&(typeof f.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(Kn===null||!Kn.has(h)))){o.flags|=65536,n&=-n,o.lanes|=n;var k=ru(o,u,n);ja(o,k);break e}}o=o.return}while(o!==null)}zu(t)}catch(_){n=_,he===t&&t!==null&&(he=t=t.return);continue}break}while(!0)}function Ou(){var e=Pi.current;return Pi.current=wi,e===null?wi:e}function Tl(){(ve===0||ve===3||ve===2)&&(ve=4),we===null||(ct&268435455)===0&&(Fi&268435455)===0||Zn(we,ke)}function Ti(e,n){var t=Y;Y|=2;var r=Ou();(we!==e||ke!==n)&&(In=null,ft(e,n));do try{Zd();break}catch(i){_u(e,i)}while(!0);if(Ho(),Y=t,Pi.current=r,he!==null)throw Error(a(261));return we=null,ke=0,ve}function Zd(){for(;he!==null;)Lu(he)}function qd(){for(;he!==null&&!kc();)Lu(he)}function Lu(e){var n=Wu(e.alternate,e,Ke);e.memoizedProps=e.pendingProps,n===null?zu(e):he=n,Cl.current=null}function zu(e){var n=e;do{var t=n.alternate;if(e=n.return,(n.flags&32768)===0){if(t=Gd(t,n,Ke),t!==null){he=t;return}}else{if(t=$d(t,n),t!==null){t.flags&=32767,he=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ve=6,he=null;return}}if(n=n.sibling,n!==null){he=n;return}he=n=e}while(n!==null);ve===0&&(ve=5)}function pt(e,n,t){var r=ne,i=en.transition;try{en.transition=null,ne=1,Jd(e,n,t,r)}finally{en.transition=i,ne=r}return null}function Jd(e,n,t,r){do Wt();while(Yn!==null);if((Y&6)!==0)throw Error(a(327));t=e.finishedWork;var i=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(a(177));e.callbackNode=null,e.callbackPriority=0;var o=t.lanes|t.childLanes;if(Tc(e,o),e===we&&(he=we=null,ke=0),(t.subtreeFlags&2064)===0&&(t.flags&2064)===0||ji||(ji=!0,Uu(zr,function(){return Wt(),null})),o=(t.flags&15990)!==0,(t.subtreeFlags&15990)!==0||o){o=en.transition,en.transition=null;var l=ne;ne=1;var u=Y;Y|=4,Cl.current=null,Qd(e,t),Fu(t,e),xd(To),Gr=!!Mo,To=Mo=null,e.current=t,Kd(t),Cc(),Y=u,ne=l,en.transition=o}else e.current=t;if(ji&&(ji=!1,Yn=e,Ii=i),o=e.pendingLanes,o===0&&(Kn=null),Fc(t.stateNode),We(e,pe()),n!==null)for(r=e.onRecoverableError,t=0;t<n.length;t++)i=n[t],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ai)throw Ai=!1,e=Fl,Fl=null,e;return(Ii&1)!==0&&e.tag!==0&&Wt(),o=e.pendingLanes,(o&1)!==0?e===Al?Ar++:(Ar=0,Al=e):Ar=0,Gn(),null}function Wt(){if(Yn!==null){var e=Es(Ii),n=en.transition,t=ne;try{if(en.transition=null,ne=16>e?16:e,Yn===null)var r=!1;else{if(e=Yn,Yn=null,Ii=0,(Y&6)!==0)throw Error(a(331));var i=Y;for(Y|=4,I=e.current;I!==null;){var o=I,l=o.child;if((I.flags&16)!==0){var u=o.deletions;if(u!==null){for(var c=0;c<u.length;c++){var g=u[c];for(I=g;I!==null;){var S=I;switch(S.tag){case 0:case 11:case 15:Er(8,S,o)}var N=S.child;if(N!==null)N.return=S,I=N;else for(;I!==null;){S=I;var x=S.sibling,A=S.return;if(Nu(S),S===g){I=null;break}if(x!==null){x.return=A,I=x;break}I=A}}}var M=o.alternate;if(M!==null){var T=M.child;if(T!==null){M.child=null;do{var me=T.sibling;T.sibling=null,T=me}while(T!==null)}}I=o}}if((o.subtreeFlags&2064)!==0&&l!==null)l.return=o,I=l;else e:for(;I!==null;){if(o=I,(o.flags&2048)!==0)switch(o.tag){case 0:case 11:case 15:Er(9,o,o.return)}var m=o.sibling;if(m!==null){m.return=o.return,I=m;break e}I=o.return}}var f=e.current;for(I=f;I!==null;){l=I;var h=l.child;if((l.subtreeFlags&2064)!==0&&h!==null)h.return=l,I=h;else e:for(l=f;I!==null;){if(u=I,(u.flags&2048)!==0)try{switch(u.tag){case 0:case 11:case 15:Ei(9,u)}}catch(_){fe(u,u.return,_)}if(u===l){I=null;break e}var k=u.sibling;if(k!==null){k.return=u.return,I=k;break e}I=u.return}}if(Y=i,Gn(),gn&&typeof gn.onPostCommitFiberRoot=="function")try{gn.onPostCommitFiberRoot(br,e)}catch{}r=!0}return r}finally{ne=t,en.transition=n}}return!1}function bu(e,n,t){n=Lt(t,n),n=tu(e,n,1),e=Hn(e,n,1),n=Te(),e!==null&&(qt(e,1,n),We(e,n))}function fe(e,n,t){if(e.tag===3)bu(e,e,t);else for(;n!==null;){if(n.tag===3){bu(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Kn===null||!Kn.has(r))){e=Lt(t,e),e=ru(n,e,1),n=Hn(n,e,1),e=Te(),n!==null&&(qt(n,1,e),We(n,e));break}}n=n.return}}function ef(e,n,t){var r=e.pingCache;r!==null&&r.delete(n),n=Te(),e.pingedLanes|=e.suspendedLanes&t,we===e&&(ke&t)===t&&(ve===4||ve===3&&(ke&130023424)===ke&&500>pe()-Pl?ft(e,0):El|=t),We(e,n)}function Du(e,n){n===0&&((e.mode&1)===0?n=1:(n=Wr,Wr<<=1,(Wr&130023424)===0&&(Wr=4194304)));var t=Te();e=Fn(e,n),e!==null&&(qt(e,n,t),We(e,t))}function nf(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Du(e,t)}function tf(e,n){var t=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(t=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(a(314))}r!==null&&r.delete(n),Du(e,t)}var Wu;Wu=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||Le.current)be=!0;else{if((e.lanes&t)===0&&(n.flags&128)===0)return be=!1,Bd(e,n,t);be=(e.flags&131072)!==0}else be=!1,ae&&(n.flags&1048576)!==0&&xa(n,ai,n.index);switch(n.lanes=0,n.tag){case 2:var r=n.type;ki(e,n),e=n.pendingProps;var i=At(n,Fe.current);_t(n,t),i=rl(null,n,r,e,i,t);var o=il();return n.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,ze(r)?(o=!0,oi(n)):o=!1,n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Xo(n),i.updater=Si,n.stateNode=i,i._reactInternals=n,cl(n,r,e,t),n=ml(null,n,r,!0,o,t)):(n.tag=0,ae&&o&&Wo(n),Me(null,n,i,t),n=n.child),n;case 16:r=n.elementType;e:{switch(ki(e,n),e=n.pendingProps,i=r._init,r=i(r._payload),n.type=r,i=n.tag=of(r),e=cn(r,e),i){case 0:n=pl(null,n,r,e,t);break e;case 1:n=fu(null,n,r,e,t);break e;case 11:n=su(null,n,r,e,t);break e;case 14:n=au(null,n,r,cn(r.type,e),t);break e}throw Error(a(306,r,""))}return n;case 0:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:cn(r,i),pl(e,n,r,i,t);case 1:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:cn(r,i),fu(e,n,r,i,t);case 3:e:{if(pu(n),e===null)throw Error(a(387));r=n.pendingProps,o=n.memoizedState,i=o.element,Aa(e,n),mi(n,r,null,t);var l=n.memoizedState;if(r=l.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},n.updateQueue.baseState=o,n.memoizedState=o,n.flags&256){i=Lt(Error(a(423)),n),n=mu(e,n,r,t,i);break e}else if(r!==i){i=Lt(Error(a(424)),n),n=mu(e,n,r,t,i);break e}else for(Qe=Un(n.stateNode.containerInfo.firstChild),He=n,ae=!0,un=null,t=Pa(n,null,r,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Rt(),r===i){n=jn(e,n,t);break e}Me(e,n,r,t)}n=n.child}return n;case 5:return Ra(n),e===null&&Bo(n),r=n.type,i=n.pendingProps,o=e!==null?e.memoizedProps:null,l=i.children,_o(r,i)?l=null:o!==null&&_o(r,o)&&(n.flags|=32),du(e,n),Me(e,n,l,t),n.child;case 6:return e===null&&Bo(n),null;case 13:return hu(e,n,t);case 4:return Zo(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=Mt(n,null,r,t):Me(e,n,r,t),n.child;case 11:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:cn(r,i),su(e,n,r,i,t);case 7:return Me(e,n,n.pendingProps,t),n.child;case 8:return Me(e,n,n.pendingProps.children,t),n.child;case 12:return Me(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(r=n.type._context,i=n.pendingProps,o=n.memoizedProps,l=i.value,re(di,r._currentValue),r._currentValue=l,o!==null)if(an(o.value,l)){if(o.children===i.children&&!Le.current){n=jn(e,n,t);break e}}else for(o=n.child,o!==null&&(o.return=n);o!==null;){var u=o.dependencies;if(u!==null){l=o.child;for(var c=u.firstContext;c!==null;){if(c.context===r){if(o.tag===1){c=An(-1,t&-t),c.tag=2;var g=o.updateQueue;if(g!==null){g=g.shared;var S=g.pending;S===null?c.next=c:(c.next=S.next,S.next=c),g.pending=c}}o.lanes|=t,c=o.alternate,c!==null&&(c.lanes|=t),Ko(o.return,t,n),u.lanes|=t;break}c=c.next}}else if(o.tag===10)l=o.type===n.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(a(341));l.lanes|=t,u=l.alternate,u!==null&&(u.lanes|=t),Ko(l,t,n),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===n){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}Me(e,n,i.children,t),n=n.child}return n;case 9:return i=n.type,r=n.pendingProps.children,_t(n,t),i=qe(i),r=r(i),n.flags|=1,Me(e,n,r,t),n.child;case 14:return r=n.type,i=cn(r,n.pendingProps),i=cn(r.type,i),au(e,n,r,i,t);case 15:return uu(e,n,n.type,n.pendingProps,t);case 17:return r=n.type,i=n.pendingProps,i=n.elementType===r?i:cn(r,i),ki(e,n),n.tag=1,ze(r)?(e=!0,oi(n)):e=!1,_t(n,t),eu(n,r,i),cl(n,r,i,t),ml(null,n,r,!0,e,t);case 19:return vu(e,n,t);case 22:return cu(e,n,t)}throw Error(a(156,n.tag))};function Uu(e,n){return ws(e,n)}function rf(e,n,t,r){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function nn(e,n,t,r){return new rf(e,n,t,r)}function _l(e){return e=e.prototype,!(!e||!e.isReactComponent)}function of(e){if(typeof e=="function")return _l(e)?1:0;if(e!=null){if(e=e.$$typeof,e===mn)return 11;if(e===hn)return 14}return 2}function qn(e,n){var t=e.alternate;return t===null?(t=nn(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function _i(e,n,t,r,i,o){var l=2;if(r=e,typeof e=="function")_l(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case _e:return mt(t.children,i,o,n);case Ye:l=8,i|=8;break;case _n:return e=nn(12,t,n,i|2),e.elementType=_n,e.lanes=o,e;case Be:return e=nn(13,t,n,i),e.elementType=Be,e.lanes=o,e;case ln:return e=nn(19,t,n,i),e.elementType=ln,e.lanes=o,e;case de:return Oi(t,i,o,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Nn:l=10;break e;case nt:l=9;break e;case mn:l=11;break e;case hn:l=14;break e;case Oe:l=16,r=null;break e}throw Error(a(130,e==null?e:typeof e,""))}return n=nn(l,t,n,i),n.elementType=e,n.type=r,n.lanes=o,n}function mt(e,n,t,r){return e=nn(7,e,r,n),e.lanes=t,e}function Oi(e,n,t,r){return e=nn(22,e,r,n),e.elementType=de,e.lanes=t,e.stateNode={isHidden:!1},e}function Ol(e,n,t){return e=nn(6,e,null,n),e.lanes=t,e}function Ll(e,n,t){return n=nn(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function lf(e,n,t,r,i){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ao(0),this.expirationTimes=ao(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ao(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function zl(e,n,t,r,i,o,l,u,c){return e=new lf(e,n,t,u,c),n===1?(n=1,o===!0&&(n|=8)):n=0,o=nn(3,null,null,n),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Xo(o),e}function sf(e,n,t){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Re,key:r==null?null:""+r,children:e,containerInfo:n,implementation:t}}function Vu(e){if(!e)return Bn;e=e._reactInternals;e:{if(tt(e)!==e||e.tag!==1)throw Error(a(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(ze(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(a(171))}if(e.tag===1){var t=e.type;if(ze(t))return ga(e,t,n)}return n}function Bu(e,n,t,r,i,o,l,u,c){return e=zl(t,r,!0,e,i,o,l,u,c),e.context=Vu(null),t=e.current,r=Te(),i=Xn(t),o=An(r,i),o.callback=n??null,Hn(t,o,i),e.current.lanes=i,qt(e,i,r),We(e,r),e}function Li(e,n,t,r){var i=n.current,o=Te(),l=Xn(i);return t=Vu(t),n.context===null?n.context=t:n.pendingContext=t,n=An(o,l),n.payload={element:e},r=r===void 0?null:r,r!==null&&(n.callback=r),e=Hn(i,n,l),e!==null&&(pn(e,i,l,o),pi(e,i,l)),l}function zi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Gu(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function bl(e,n){Gu(e,n),(e=e.alternate)&&Gu(e,n)}function af(){return null}var $u=typeof reportError=="function"?reportError:function(e){console.error(e)};function Dl(e){this._internalRoot=e}bi.prototype.render=Dl.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(a(409));Li(e,n,null,null)},bi.prototype.unmount=Dl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;dt(function(){Li(null,e,null,null)}),n[kn]=null}};function bi(e){this._internalRoot=e}bi.prototype.unstable_scheduleHydration=function(e){if(e){var n=As();e={blockedOn:null,target:e,priority:n};for(var t=0;t<bn.length&&n!==0&&n<bn[t].priority;t++);bn.splice(t,0,e),t===0&&Rs(e)}};function Wl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Di(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Hu(){}function uf(e,n,t,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var g=zi(l);o.call(g)}}var l=Bu(n,r,e,0,null,!1,!1,"",Hu);return e._reactRootContainer=l,e[kn]=l.current,fr(e.nodeType===8?e.parentNode:e),dt(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var u=r;r=function(){var g=zi(c);u.call(g)}}var c=zl(e,0,!1,null,null,!1,!1,"",Hu);return e._reactRootContainer=c,e[kn]=c.current,fr(e.nodeType===8?e.parentNode:e),dt(function(){Li(n,c,t,r)}),c}function Wi(e,n,t,r,i){var o=t._reactRootContainer;if(o){var l=o;if(typeof i=="function"){var u=i;i=function(){var c=zi(l);u.call(c)}}Li(n,l,e,i)}else l=uf(t,n,e,i,r);return zi(l)}Ps=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=Zt(n.pendingLanes);t!==0&&(uo(n,t|1),We(n,pe()),(Y&6)===0&&(Dt=pe()+500,Gn()))}break;case 13:dt(function(){var r=Fn(e,1);if(r!==null){var i=Te();pn(r,e,1,i)}}),bl(e,1)}},co=function(e){if(e.tag===13){var n=Fn(e,134217728);if(n!==null){var t=Te();pn(n,e,134217728,t)}bl(e,134217728)}},Fs=function(e){if(e.tag===13){var n=Xn(e),t=Fn(e,n);if(t!==null){var r=Te();pn(t,e,n,r)}bl(e,n)}},As=function(){return ne},js=function(e,n){var t=ne;try{return ne=e,n()}finally{ne=t}},to=function(e,n,t){switch(n){case"input":if(Ki(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var r=t[n];if(r!==e&&r.form===e.form){var i=ri(r);if(!i)throw Error(a(90));Jl(r),Ki(r,i)}}}break;case"textarea":is(e,t);break;case"select":n=t.value,n!=null&&gt(e,!!t.multiple,n,!1)}},ps=Rl,ms=dt;var cf={usingClientEntryPoint:!1,Events:[hr,Pt,ri,ds,fs,Rl]},jr={findFiberByHostInstance:rt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},df={bundleType:jr.bundleType,version:jr.version,rendererPackageName:jr.rendererPackageName,rendererConfig:jr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Pe.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ys(e),e===null?null:e.stateNode},findFiberByHostInstance:jr.findFiberByHostInstance||af,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ui=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ui.isDisabled&&Ui.supportsFiber)try{br=Ui.inject(df),gn=Ui}catch{}}return Ue.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=cf,Ue.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Wl(n))throw Error(a(200));return sf(e,n,null,t)},Ue.createRoot=function(e,n){if(!Wl(e))throw Error(a(299));var t=!1,r="",i=$u;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),n=zl(e,1,!1,null,null,t,!1,r,i),e[kn]=n.current,fr(e.nodeType===8?e.parentNode:e),new Dl(n)},Ue.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=ys(n),e=e===null?null:e.stateNode,e},Ue.flushSync=function(e){return dt(e)},Ue.hydrate=function(e,n,t){if(!Di(n))throw Error(a(200));return Wi(null,e,n,!0,t)},Ue.hydrateRoot=function(e,n,t){if(!Wl(e))throw Error(a(405));var r=t!=null&&t.hydratedSources||null,i=!1,o="",l=$u;if(t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),n=Bu(n,null,e,1,t??null,i,!1,o,l),e[kn]=n.current,fr(e),r)for(e=0;e<r.length;e++)t=r[e],i=t._getVersion,i=i(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,i]:n.mutableSourceEagerHydrationData.push(t,i);return new bi(n)},Ue.render=function(e,n,t){if(!Di(n))throw Error(a(200));return Wi(null,e,n,!1,t)},Ue.unmountComponentAtNode=function(e){if(!Di(e))throw Error(a(40));return e._reactRootContainer?(dt(function(){Wi(null,null,e,!1,function(){e._reactRootContainer=null,e[kn]=null})}),!0):!1},Ue.unstable_batchedUpdates=Rl,Ue.unstable_renderSubtreeIntoContainer=function(e,n,t,r){if(!Di(t))throw Error(a(200));if(e==null||e._reactInternals===void 0)throw Error(a(38));return Wi(e,n,t,!1,r)},Ue.version="18.3.1-next-f1338f8080-20240426",Ue}var ec;function xf(){if(ec)return Bl.exports;ec=1;function d(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(d)}catch(v){console.error(v)}}return d(),Bl.exports=yf(),Bl.exports}var nc;function wf(){if(nc)return Vi;nc=1;var d=xf();return Vi.createRoot=d.createRoot,Vi.hydrateRoot=d.hydrateRoot,Vi}var Sf=wf(),le=Yl();const Sn={mp4:{mimeType:"video/mp4",magicNumbers:[{bytes:[102,116,121,112],offset:4}]},mkv:{mimeType:"video/x-matroska",magicNumbers:[{bytes:[26,69,223,163],offset:0}]},avi:{mimeType:"video/x-msvideo",magicNumbers:[{bytes:[82,73,70,70],offset:0},{bytes:[65,86,73,32],offset:8}]},webm:{mimeType:"video/webm",magicNumbers:[{bytes:[26,69,223,163],offset:0}]},mp3:{mimeType:"audio/mpeg",magicNumbers:[{bytes:[255,251],offset:0},{bytes:[255,250],offset:0},{bytes:[255,243],offset:0},{bytes:[255,242],offset:0},{bytes:[255,227],offset:0},{bytes:[255,226],offset:0},{bytes:[73,68,51],offset:0}]},wav:{mimeType:"audio/wav",magicNumbers:[{bytes:[82,73,70,70],offset:0},{bytes:[87,65,86,69],offset:8}]},flac:{mimeType:"audio/flac",magicNumbers:[{bytes:[102,76,97,67],offset:0}]},aac:{mimeType:"audio/aac",magicNumbers:[{bytes:[255,241],offset:0},{bytes:[255,249],offset:0},{bytes:[73,68,51],offset:0}]},jpeg:{mimeType:"image/jpeg",magicNumbers:[{bytes:[255,216,255],offset:0}]},png:{mimeType:"image/png",magicNumbers:[{bytes:[137,80,78,71,13,10,26,10],offset:0}]},gif:{mimeType:"image/gif",magicNumbers:[{bytes:[71,73,70,56,55,97],offset:0},{bytes:[71,73,70,56,57,97],offset:0}]},webp:{mimeType:"image/webp",magicNumbers:[{bytes:[82,73,70,70],offset:0},{bytes:[87,69,66,80],offset:8}]},bmp:{mimeType:"image/bmp",magicNumbers:[{bytes:[66,77],offset:0}]}},Xl={jpg:"jpeg"},rn={video:1024*1024*1024,audio:500*1024*1024,image:100*1024*1024},Mn={INVALID_FILE_TYPE:"File type not supported. Please upload a valid media file.",INVALID_SIGNATURE:"File signature validation failed. The file may be corrupted or misidentified.",FILE_TOO_LARGE:"File exceeds maximum allowed size for secure processing.",MIME_MISMATCH:"File extension does not match file contents. Potential security threat detected.",UNKNOWN_FORMAT:"Unknown file format. Unable to process.",CORRUPTED_FILE:"File appears to be corrupted or incomplete.",NO_FILE_PROVIDED:"No file was provided for validation."};function dc(d){const v={valid:!1,errors:[],sanitized:null};if(!d)return v.errors.push(Mn.NO_FILE_PROVIDED),v;const a=d.name.split(".").pop().toLowerCase(),j=Xl[a]||a,y=fc(a);if(!y)return v.errors.push(Mn.UNKNOWN_FORMAT),v;const C=rn[y];if(d.size>C)return v.errors.push(`${Mn.FILE_TOO_LARGE} Max: ${Cf(C)}`),v;const E=Sn[j];return E?(d.type&&d.type!==E.mimeType&&v.errors.push(`${Mn.MIME_MISMATCH} Expected: ${E.mimeType}, Got: ${d.type}`),Nf(d,E,v,a)):(v.errors.push(Mn.INVALID_FILE_TYPE),v)}function Nf(d,v,a,j){return new Promise(y=>{const C=new FileReader;C.onload=E=>{try{const W=new Uint8Array(E.target.result);if(!Ut(W,v)){a.errors.push(Mn.INVALID_SIGNATURE),y(a);return}if(d.size<100){a.errors.push(Mn.CORRUPTED_FILE),y(a);return}a.valid=!0,a.sanitized={name:kf(d.name),type:v.mimeType,size:d.size,extension:j,category:fc(j)},y(a)}catch{a.errors.push(Mn.CORRUPTED_FILE),y(a)}},C.onerror=()=>{a.errors.push(Mn.CORRUPTED_FILE),y(a)},C.readAsArrayBuffer(d.slice(0,512))})}function Ut(d,v){return v.magicNumbers.some(a=>{const j=a.offset,y=a.bytes;return d.length<j+y.length?!1:y.every((C,E)=>d[j+E]===C)})}function fc(d){const v=d.toLowerCase(),a=Sn[Xl[v]||v];return a?a.mimeType.startsWith("video/")?"video":a.mimeType.startsWith("audio/")?"audio":a.mimeType.startsWith("image/")?"image":null:null}function kf(d){let v=d.replace(/\.\./g,"").replace(/[/\\]/g,"").replace(/[<>:"|?*]/g,"_").replace(/[\x00-\x1f]/g,"");if(v.length>255){const a=v.split(".").pop();v=v.substring(0,255-a.length-1)+"."+a}return v||"unnamed-file"}function Cf(d){const v=["B","KB","MB","GB"];if(d===0)return"0 B";const a=Math.floor(Math.log(d)/Math.log(1024));return(d/Math.pow(1024,a)).toFixed(2)+" "+v[a]}function Ef(){return{videoFormats:Object.entries(Sn).filter(([,d])=>d.mimeType.startsWith("video/")).map(([d])=>d.toUpperCase()),audioFormats:Object.entries(Sn).filter(([,d])=>d.mimeType.startsWith("audio/")).map(([d])=>d.toUpperCase()),imageFormats:Object.entries(Sn).filter(([,d])=>d.mimeType.startsWith("image/")).map(([d])=>d.toUpperCase())}}function pc(d,v,a,j){const y=["-i",d];if(["mp3","wav","aac","flac"].includes(a)){if(a==="mp3")return[...y,"-vn","-acodec","libmp3lame","-q:a","2",v];if(a==="wav")return[...y,"-vn","-acodec","pcm_s16le",v];if(a==="aac")return[...y,"-vn","-acodec","aac","-b:a","192k",v];if(a==="flac")return[...y,"-vn","-acodec","flac",v]}if(["mp4","webm","avi","mkv"].includes(a)){if(a==="mp4")return[...y,"-c:v","libx264","-preset","medium","-crf","23","-c:a","aac",v];if(a==="webm")return[...y,"-c:v","libvpx","-crf","30","-b:v","0","-c:a","libvorbis",v];if(a==="avi")return[...y,"-c:v","mpeg4","-q:v","5","-c:a","mp3",v];if(a==="mkv")return[...y,"-c:v","copy","-c:a","copy",v]}if(["gif","png","jpg","webp"].includes(a)){if(a==="gif")return[...y,"-vf","fps=15,scale=-1:-1:flags=lanczos","-gifflags","+transdiff","-loop","0",v];if(a==="png")return[...y,"-vframes","1",v];if(a==="jpg")return[...y,"-vframes","1","-q:v","2",v];if(a==="webp")return[...y,"-vframes","1","-quality","80",v]}return[...y,"-c","copy",v]}function Pf(d){return{mp3:"audio/mpeg",wav:"audio/wav",aac:"audio/aac",flac:"audio/flac",mp4:"video/mp4",webm:"video/webm",avi:"video/x-msvideo",mkv:"video/x-matroska",gif:"image/gif",png:"image/png",jpg:"image/jpeg",webp:"image/webp"}[d]||"application/octet-stream"}const Rr=`/**
 * NoPara - Main Application Component
 * 
 * COMPLIANCE STANDARDS MET:
 * - ISO/IEC 40500:2025 (WCAG 2.2 Level AAA)
 * - EN 301 549 (European Accessibility)
 * - ADA/EAA (American Accessibility)
 * - GDPR Article 32 (Secure Processing)
 * - PIPEDA (Privacy Protection)
 * - OWASP Top 10 (XSS Prevention via CSP)
 * - Green Coding: Lazy loading, no blocking operations
 * - Core Web Vitals: LCP < 2.5s, FID < 100ms, CLS < 0.1
 * 
 * Architecture:
 * - React Functional Components with Hooks
 * - Zero external UI libraries (pure CSS)
 * - Semantic HTML5 with ARIA landmarks
 * - Keyboard-navigable (WCAG 2.4.3)
 * - High contrast ratios (7:1 - WCAG 2.2 AAA)
 */

import React, { useState, useRef, useCallback, useEffect } from 'react';
import { validateFile, getSecurityStatus, getValidationSchemas } from './utils/security.js';
import { buildFFmpegArgs, getMimeType } from './utils/ffmpeg-args.js';
import { FFmpeg } from '@ffmpeg/ffmpeg';
import { fetchFile, toBlobURL } from '@ffmpeg/util';

/**
 * Main Application Root Component
 * Accessible, zero-dependency media conversion interface
 */
export default function App() {
  // ========================================
  // State Management
  // ========================================
  const [selectedFile, setSelectedFile] = useState(null);
  const [validationErrors, setValidationErrors] = useState([]);
  const [conversionFormat, setConversionFormat] = useState('mp4');
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [processedFile, setProcessedFile] = useState(null);
  const [editorMode, setEditorMode] = useState(null); // 'trim', 'crop', or null
  const [conversionSettings, setConversionSettings] = useState({
    crf: 28, // Quality: 18-28 (lower = better quality, higher file size)
    preset: 'medium', // fast, medium, slow (slower = better compression)
  });
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [loadingText, setLoadingText] = useState('Initializing...');

  const fileInputRef = useRef(null);
  const dropZoneRef = useRef(null);

  // ========================================
  // Bootloader / Loading Screen
  // ========================================
  useEffect(() => {
    const loadingMessages = [
      'Initializing...',
      'Loading core modules...',
      'Preparing FFmpeg engine...',
      'Setting up secure environment...',
      'Configuring media codecs...',
      'Almost ready...'
    ];

    let progress = 0;
    let messageIndex = 0;

    const progressInterval = setInterval(() => {
      progress += Math.random() * 15 + 5;
      if (progress > 100) progress = 100;
      setLoadingProgress(progress);

      // Update loading message
      const newIndex = Math.min(Math.floor(progress / 20), loadingMessages.length - 1);
      if (newIndex !== messageIndex) {
        messageIndex = newIndex;
        setLoadingText(loadingMessages[messageIndex]);
      }

      if (progress >= 100) {
        clearInterval(progressInterval);
        setTimeout(() => setIsLoading(false), 500);
      }
    }, 200);

    return () => clearInterval(progressInterval);
  }, []);

  // ========================================
  // File Handling (Zero-Trust Validation)
  // ========================================

  /**
   * Handle file selection with security validation
   * OWASP: Validate all inputs immediately
   */
  const handleFileSelect = useCallback(async (file) => {
    setValidationErrors([]);
    setSelectedFile(null);
    setProcessedFile(null);

    try {
      const validation = await validateFile(file);

      if (!validation.valid) {
        setValidationErrors(validation.errors);
        return;
      }

      // Store only sanitized metadata (GDPR: no PII)
      setSelectedFile({
        file: file,
        metadata: validation.sanitized,
      });
    } catch (error) {
      setValidationErrors(['An unexpected error occurred during file validation.']);
    }
  }, []);

  /**
   * Handle file input change
   */
  const handleFileInput = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFileSelect(file);
    }
  };

  /**
   * Handle drag and drop with accessibility
   * EN 301 549: Provide keyboard alternatives too
   */
  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (dropZoneRef.current) {
      dropZoneRef.current.setAttribute('data-drag-active', 'true');
    }
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    if (dropZoneRef.current) {
      dropZoneRef.current.removeAttribute('data-drag-active');
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (dropZoneRef.current) {
      dropZoneRef.current.removeAttribute('data-drag-active');
    }

    const file = e.dataTransfer?.files?.[0];
    if (file) {
      handleFileSelect(file);
    }
  };

  // ========================================
  // Conversion Logic (Green Coding + Security)
  // ========================================

  // FFmpeg instance ref
  const ffmpegRef = useRef(null);
  const [ffmpegLoaded, setFfmpegLoaded] = useState(false);
  const [ffmpegLoading, setFfmpegLoading] = useState(false);

  /**
   * Load FFmpeg WASM module
   * Green Coding: Load only when needed, uses SharedArrayBuffer when available
   */
  const loadFFmpeg = async () => {
    if (ffmpegRef.current && ffmpegLoaded) return true;

    setFfmpegLoading(true);
    try {
      const ffmpeg = new FFmpeg();
      ffmpegRef.current = ffmpeg;

      // Set up progress handler
      ffmpeg.on('progress', ({ progress }) => {
        setProgress(Math.round(progress * 100));
      });

      ffmpeg.on('log', ({ message }) => {
        console.log('[FFmpeg]', message);
      });

      // Load FFmpeg core from CDN (with CORS)
      const baseURL = 'https://unpkg.com/@ffmpeg/core@0.12.6/dist/esm';
      await ffmpeg.load({
        coreURL: await toBlobURL(\`\${baseURL}/ffmpeg-core.js\`, 'text/javascript'),
        wasmURL: await toBlobURL(\`\${baseURL}/ffmpeg-core.wasm\`, 'application/wasm'),
      });

      setFfmpegLoaded(true);
      return true;
    } catch (error) {
      console.error('FFmpeg load error:', error);
      setValidationErrors(['Failed to load media processor. Please refresh and try again.']);
      return false;
    } finally {
      setFfmpegLoading(false);
    }
  };

  /**
   * Real media conversion using ffmpeg.wasm
   * Green Coding: Process only when necessary, clean up memory after
   */
  const handleConvert = async () => {
    if (!selectedFile) {
      setValidationErrors(['No file selected for conversion.']);
      return;
    }

    setIsProcessing(true);
    setProgress(0);
    setProcessedFile(null);
    setValidationErrors([]);

    try {
      // Load FFmpeg if not already loaded
      announceToScreenReader('Loading media processor...');
      const loaded = await loadFFmpeg();
      if (!loaded) {
        setIsProcessing(false);
        return;
      }

      const ffmpeg = ffmpegRef.current;

      // Get input file extension
      const inputExt = selectedFile.metadata.name.split('.').pop().toLowerCase();
      const inputFileName = \`input.\${inputExt}\`;
      const outputFileName = \`output.\${conversionFormat}\`;

      announceToScreenReader('Processing your file...');

      // Write input file to FFmpeg virtual filesystem
      await ffmpeg.writeFile(inputFileName, await fetchFile(selectedFile.file));

      // Build FFmpeg command based on conversion type
      const ffmpegArgs = buildFFmpegArgs(inputFileName, outputFileName, conversionFormat, selectedFile.metadata.category);

      // Execute FFmpeg conversion
      await ffmpeg.exec(ffmpegArgs);

      // Read output file from FFmpeg virtual filesystem
      const outputData = await ffmpeg.readFile(outputFileName);

      // Determine correct MIME type for output
      const mimeType = getMimeType(conversionFormat);

      // Create blob from output
      const outputBlob = new Blob([outputData.buffer], { type: mimeType });

      // Clean up FFmpeg filesystem
      await ffmpeg.deleteFile(inputFileName);
      await ffmpeg.deleteFile(outputFileName);

      setProgress(100);
      setProcessedFile({
        blob: outputBlob,
        fileName: \`converted-\${Date.now()}.\${conversionFormat}\`,
        size: outputBlob.size,
      });

      // WCAG 2.4.9: Announce completion to screen readers
      announceToScreenReader('Conversion completed successfully. Your file is ready to download.');
    } catch (error) {
      console.error('Conversion error:', error);
      setValidationErrors([\`Conversion failed: \${error.message || 'Unknown error'}. Please try a different format.\`]);
      announceToScreenReader('Conversion failed. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  /**
   * Download converted file
   * GDPR: File exists only in volatile memory (RAM)
   */
  const handleDownload = () => {
    if (!processedFile) return;

    const url = URL.createObjectURL(processedFile.blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = processedFile.fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Clean up memory (Green Coding)
    setTimeout(() => URL.revokeObjectURL(url), 100);
  };

  // ========================================
  // WCAG 2.2 AAA: Screen Reader Support
  // ========================================

  const announceToScreenReader = (message) => {
    const announcement = document.createElement('div');
    announcement.setAttribute('role', 'status');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;

    document.body.appendChild(announcement);
    setTimeout(() => announcement.remove(), 1000);
  };

  // ========================================
  // UI Rendering
  // ========================================

  // Show bootloader while loading
  if (isLoading) {
    return (
      <div className="bootloader">
        <div className="bootloader-content">
          <div className="bootloader-logo-container">
            <svg className="bootloader-ring" viewBox="0 0 100 100">
              <circle
                className="bootloader-ring-bg"
                cx="50"
                cy="50"
                r="45"
                fill="none"
                strokeWidth="4"
              />
              <circle
                className="bootloader-ring-progress"
                cx="50"
                cy="50"
                r="45"
                fill="none"
                strokeWidth="4"
                strokeDasharray={\`\${loadingProgress * 2.83} 283\`}
                strokeLinecap="round"
              />
            </svg>
            <img src="./logo.png" alt="NoPara" className="bootloader-logo" />
          </div>
          <div className="bootloader-text">
            <h1 className="bootloader-title">NoPara</h1>
            <p className="bootloader-status">{loadingText}</p>
            <span className="bootloader-percent">{Math.round(loadingProgress)}%</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="app-container">
      {/* ====== HEADER ====== */}
      <header role="banner" className="app-header">
        <div className="header-content">
          <div className="logo-title">
            <img src="./logo.png" alt="NoPara Logo" className="header-logo" />
            <h1 id="app-title">NoPara</h1>
          </div>
          <p className="header-subtitle">Secure Browser-Based Media Conversion</p>
          <div className="header-descriptor">
            <span>🔒 Zero-Trust</span>
            <span>♿ WCAG 2.2 AAA</span>
            <span>🌱 Green Coding</span>
            <span>📴 Offline Ready</span>
          </div>
        </div>
      </header>

      {/* ====== MAIN CONTENT ====== */}
      <main id="main-content" role="main" className="app-main">
        <div className="content-wrapper">
          {/* File Upload Section */}
          <section aria-labelledby="upload-section-title" className="section upload-section">
            <h2 id="upload-section-title" className="section-title">
              1. Select Your Media File
            </h2>

            {/* Drop Zone (Accessible) */}
            <div
              ref={dropZoneRef}
              className="drop-zone"
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current?.click()}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  fileInputRef.current?.click();
                }
              }}
              role="button"
              tabIndex="0"
              aria-label="Drop media file here or click to browse"
              aria-describedby="drop-zone-hint"
            >
              <div className="drop-zone-content">
                <svg
                  className="drop-zone-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="17 8 12 3 7 8"></polyline>
                  <line x1="12" y1="3" x2="12" y2="15"></line>
                </svg>
                <p className="drop-zone-text">Drag and drop your media file here</p>
                <p className="drop-zone-hint" id="drop-zone-hint">
                  or click to browse (MP4, MKV, AVI, MP3, WAV, GIF, WEBP supported)
                </p>
              </div>
            </div>

            {/* Hidden File Input */}
            <input
              ref={fileInputRef}
              type="file"
              className="hidden-input"
              onChange={handleFileInput}
              accept=".mp4,.mkv,.avi,.mp3,.wav,.gif,.webp,.jpeg,.jpg,.png,.webm,.flac,.aac,.bmp"
              aria-label="Select media file"
              aria-describedby="file-input-hint"
            />
            <p id="file-input-hint" className="sr-only">
              Select a media file to convert. Supported formats: MP4, MKV, AVI, MP3, WAV, GIF, WEBP, and image formats.
            </p>

            {/* Validation Errors (Accessible) */}
            {validationErrors.length > 0 && (
              <div
                role="alert"
                aria-live="assertive"
                className="alert alert-error"
              >
                <h3 className="alert-title">File Validation Error</h3>
                <ul className="alert-list">
                  {validationErrors.map((error, index) => (
                    <li key={index}>{error}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Selected File Info */}
            {selectedFile && (
              <div className="file-info-box" role="region" aria-live="polite">
                <h3 className="file-info-title">Selected File</h3>
                <dl className="file-details">
                  <dt>Name:</dt>
                  <dd>{selectedFile.metadata.name}</dd>
                  <dt>Type:</dt>
                  <dd>{selectedFile.metadata.type}</dd>
                  <dt>Size:</dt>
                  <dd>{formatFileSize(selectedFile.metadata.size)}</dd>
                  <dt>Category:</dt>
                  <dd>{selectedFile.metadata.category.toUpperCase()}</dd>
                </dl>
              </div>
            )}
          </section>

          {/* Conversion Settings Section */}
          {selectedFile && (
            <section
              aria-labelledby="settings-section-title"
              className="section settings-section"
            >
              <h2 id="settings-section-title" className="section-title">
                2. Conversion Settings
              </h2>

              {/* Output Format Selection */}
              <div className="form-group">
                <label htmlFor="output-format" className="form-label">
                  Output Format:
                </label>
                <select
                  id="output-format"
                  value={conversionFormat}
                  onChange={(e) => setConversionFormat(e.target.value)}
                  className="form-select"
                  aria-describedby="format-hint"
                >
                  <optgroup label="Video Formats">
                    <option value="mp4">MP4 (H.264)</option>
                    <option value="mkv">Matroska (MKV)</option>
                    <option value="avi">AVI</option>
                    <option value="webm">WebM</option>
                  </optgroup>
                  <optgroup label="Audio Formats">
                    <option value="mp3">MP3</option>
                    <option value="wav">WAV</option>
                    <option value="flac">FLAC</option>
                    <option value="aac">AAC</option>
                  </optgroup>
                  <optgroup label="Image Formats">
                    <option value="gif">GIF</option>
                    <option value="webp">WebP</option>
                    <option value="png">PNG</option>
                  </optgroup>
                </select>
                <p id="format-hint" className="form-hint">
                  Choose the desired output format for your media
                </p>
              </div>

              {/* Quality Setting (CRF) */}
              <div className="form-group">
                <label htmlFor="crf-slider" className="form-label">
                  Quality Level: <span aria-live="polite">{conversionSettings.crf}</span>
                </label>
                <input
                  id="crf-slider"
                  type="range"
                  min="18"
                  max="28"
                  value={conversionSettings.crf}
                  onChange={(e) =>
                    setConversionSettings({
                      ...conversionSettings,
                      crf: parseInt(e.target.value),
                    })
                  }
                  className="form-range"
                  aria-describedby="crf-hint"
                />
                <p id="crf-hint" className="form-hint">
                  18 = highest quality (larger file), 28 = lowest quality (smallest file)
                </p>
              </div>

              {/* Compression Preset */}
              <div className="form-group">
                <legend className="form-label">Compression Speed:</legend>
                <div className="radio-group">
                  {['fast', 'medium', 'slow'].map((preset) => (
                    <div key={preset} className="form-radio">
                      <input
                        id={\`preset-\${preset}\`}
                        type="radio"
                        name="preset"
                        value={preset}
                        checked={conversionSettings.preset === preset}
                        onChange={(e) =>
                          setConversionSettings({
                            ...conversionSettings,
                            preset: e.target.value,
                          })
                        }
                        className="radio-input"
                      />
                      <label htmlFor={\`preset-\${preset}\`} className="radio-label">
                        {preset.charAt(0).toUpperCase() + preset.slice(1)}
                      </label>
                    </div>
                  ))}
                </div>
                <p className="form-hint">
                  Slower compression uses less storage but takes longer. Green coding: faster = lower energy usage.
                </p>
              </div>

              {/* Green Coding Note */}
              <div className="info-box" role="status">
                <p className="green-tip">
                  💚 <strong>Green Coding Tip:</strong> Lower quality settings reduce storage and processing power, lowering carbon footprint.
                </p>
              </div>
            </section>
          )}

          {/* Editing Tools Section (Optional Future Feature) */}
          {selectedFile && selectedFile.metadata.category === 'video' && (
            <section
              aria-labelledby="editing-section-title"
              className="section editing-section"
            >
              <h2 id="editing-section-title" className="section-title">
                3. Optional Editing (Green Feature - Reduces Processing)
              </h2>
              <div className="btn-group">
                <button
                  onClick={() => setEditorMode('trim')}
                  className="btn btn-secondary"
                  aria-pressed={editorMode === 'trim'}
                >
                  ✂️ Trim Video
                </button>
                <button
                  onClick={() => setEditorMode('crop')}
                  className="btn btn-secondary"
                  aria-pressed={editorMode === 'crop'}
                >
                  🔍 Crop Video
                </button>
              </div>
              <p className="form-hint">
                Edit before conversion to reduce file size and processing time (green coding).
              </p>
            </section>
          )}

          {/* Conversion Action Section */}
          {selectedFile && (
            <section
              aria-labelledby="action-section-title"
              className="section action-section"
            >
              <h2 id="action-section-title" className="sr-only">
                Conversion Action
              </h2>

              {/* Progress Bar (WCAG 2.4.8) */}
              {isProcessing && (
                <div className="progress-container">
                  <div className="progress-label">
                    <span className="progress-text">
                      {ffmpegLoading ? '🔧 Loading FFmpeg...' : '⚡ Converting...'}
                    </span>
                    <span className="progress-value">{Math.round(progress)}%</span>
                  </div>
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow={Math.round(progress)}
                    aria-valuemin="0"
                    aria-valuemax="100"
                    aria-label="Conversion progress"
                  >
                    <div className="progress-fill" style={{ width: \`\${progress}%\` }}></div>
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="btn-group">
                <button
                  onClick={handleConvert}
                  disabled={isProcessing || !selectedFile}
                  className="btn btn-primary"
                  aria-busy={isProcessing}
                >
                  {isProcessing ? '⏳ Converting...' : '▶️ Start Conversion'}
                </button>

                {processedFile && (
                  <button
                    onClick={handleDownload}
                    className="btn btn-success"
                    aria-label={\`Download \${processedFile.fileName}\`}
                  >
                    ⬇️ Download ({formatFileSize(processedFile.size)})
                  </button>
                )}

                <button
                  onClick={() => {
                    setSelectedFile(null);
                    setProcessedFile(null);
                    setProgress(0);
                    setValidationErrors([]);
                  }}
                  className="btn btn-secondary"
                >
                  🔄 Start Over
                </button>
              </div>
            </section>
          )}
        </div>
      </main>

      {/* Floating Info Button */}
      <InfoButton />

      {/* ====== FOOTER ====== */}
      <footer role="contentinfo" className="app-footer">
        <div className="footer-content">
          <div className="footer-badges">
            <span className="badge badge-success">✓ WCAG 2.2 AAA</span>
            <span className="badge badge-success">✓ GDPR Compliant</span>
            <span className="badge badge-success">✓ Zero-Trust</span>
            <span className="badge">🌱 Green Coded</span>
          </div>
          <p className="footer-text">
            NoPara © 2026 • All processing happens in your browser • No data leaves your device
          </p>
        </div>
      </footer>
    </div>
  );
}

/**
 * Info Button with Modal
 * Shows security & compliance info on click
 */
function InfoButton() {
  const [isOpen, setIsOpen] = useState(false);
  const securityStatus = getSecurityStatus();

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      {/* Floating Button */}
      <button
        className="info-fab"
        onClick={() => setIsOpen(true)}
        aria-label="View security and privacy information"
        title="Security & Privacy Info"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="16" x2="12" y2="12"></line>
          <line x1="12" y1="8" x2="12.01" y2="8"></line>
        </svg>
      </button>

      {/* Modal Overlay */}
      {isOpen && (
        <div 
          className="modal-overlay" 
          onClick={() => setIsOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="info-modal-title"
        >
          <div 
            className="modal-content" 
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="modal-header">
              <h2 id="info-modal-title" className="modal-title">
                🔐 Security & Privacy
              </h2>
              <button 
                className="modal-close" 
                onClick={() => setIsOpen(false)}
                aria-label="Close modal"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>

            {/* Modal Body */}
            <div className="modal-body">
              {/* Security Features */}
              <div className="info-card">
                <h3 className="info-card-title">🔒 Security Features</h3>
                <ul className="info-list">
                  <li className="info-item success">
                    <span className="info-icon">✓</span>
                    <span>Content Security Policy (CSP) Enabled</span>
                  </li>
                  <li className={\`info-item \${securityStatus.features.crossOriginIsolated ? 'success' : 'warning'}\`}>
                    <span className="info-icon">{securityStatus.features.crossOriginIsolated ? '✓' : '⚠'}</span>
                    <span>Cross-Origin Isolation (WASM Support)</span>
                  </li>
                  <li className="info-item success">
                    <span className="info-icon">✓</span>
                    <span>Zero-Trust File Validation</span>
                  </li>
                  <li className="info-item success">
                    <span className="info-icon">✓</span>
                    <span>No Data Tracking or Collection</span>
                  </li>
                </ul>
              </div>

              {/* Supported Formats */}
              <div className="info-card">
                <h3 className="info-card-title">📁 Supported Formats</h3>
                <div className="format-grid">
                  <div className="format-category">
                    <span className="format-label">Video</span>
                    <span className="format-tags">
                      <span className="format-tag">MP4</span>
                      <span className="format-tag">MKV</span>
                      <span className="format-tag">AVI</span>
                      <span className="format-tag">WebM</span>
                    </span>
                  </div>
                  <div className="format-category">
                    <span className="format-label">Audio</span>
                    <span className="format-tags">
                      <span className="format-tag">MP3</span>
                      <span className="format-tag">WAV</span>
                      <span className="format-tag">FLAC</span>
                      <span className="format-tag">AAC</span>
                    </span>
                  </div>
                  <div className="format-category">
                    <span className="format-label">Image</span>
                    <span className="format-tags">
                      <span className="format-tag">GIF</span>
                      <span className="format-tag">WebP</span>
                      <span className="format-tag">PNG</span>
                      <span className="format-tag">JPEG</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Compliance */}
              <div className="info-card">
                <h3 className="info-card-title">🌍 Standards Compliance</h3>
                <div className="compliance-badges">
                  <span className="compliance-badge">WCAG 2.2 AAA</span>
                  <span className="compliance-badge">GDPR</span>
                  <span className="compliance-badge">PIPEDA</span>
                  <span className="compliance-badge">ISO 27001</span>
                  <span className="compliance-badge">EN 301 549</span>
                </div>
              </div>

              {/* Privacy Notice */}
              <div className="info-card highlight">
                <h3 className="info-card-title">🛡️ Your Privacy</h3>
                <p className="privacy-text">
                  All file processing happens <strong>entirely in your browser</strong>. 
                  Your files never leave your device and are not uploaded to any server. 
                  We use no cookies, no tracking, and collect no data.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Buy Me a Coffee Floating Button */}
      <a
        href="https://buymeacoffee.com/jesun"
        target="_blank"
        rel="noopener noreferrer"
        className="coffee-fab"
        aria-label="Buy me a coffee"
        title="Buy me a coffee"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
          <path d="M2 21V19H20V21H2ZM20 8V5H18V8H20ZM20 3C21.1 3 22 3.9 22 5V8C22 9.1 21.1 10 20 10H18V13C18 15.21 16.21 17 14 17H8C5.79 17 4 15.21 4 13V3H20ZM14 15C15.1 15 16 14.1 16 13V5H6V13C6 14.1 6.9 15 8 15H14Z"/>
        </svg>
      </a>

      {/* Footer */}
      <footer className="app-footer">
        <p>Developed by <a href="https://jesunahmadushno.com" target="_blank" rel="noopener noreferrer">Jesun</a></p>
      </footer>
    </>
  );
}

/**
 * Utility: Format file size to human-readable format
 * @private
 */
function formatFileSize(bytes) {
  const sizes = ['B', 'KB', 'MB', 'GB'];
  if (bytes === 0) return '0 B';

  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  return (bytes / Math.pow(1024, i)).toFixed(2) + ' ' + sizes[i];
}
`,Ff=`/**
 * NoPara - React Application Entry Point
 * 
 * COMPLIANCE STANDARDS MET:
 * - React 18 with StrictMode for development warnings
 * - WCAG 2.2 AAA compliance
 * - GDPR/PIPEDA data privacy (no external trackers)
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import '../public/styles/globals.css';
import '../public/styles/components.css';
import '../public/styles/accessibility.css';

// ========================================
// Initialize React Application
// WCAG 2.2 AAA: Semantic HTML with React
// ========================================

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// ========================================
// Performance Monitoring (Local Only - GDPR)
// Core Web Vitals tracking to sessionStorage
// ========================================

if ('web-vital' in window) {
  window.addEventListener('load', () => {
    // LCP, FID, CLS metrics are tracked in HTML
    const lcp = sessionStorage.getItem('lcp');
    const fid = sessionStorage.getItem('fid');
    const cls = sessionStorage.getItem('cls');

    if (process.env.NODE_ENV === 'development') {
      console.info('[Performance]', {
        LCP: lcp ? \`\${Math.round(lcp)}ms\` : 'N/A',
        FID: fid ? \`\${Math.round(fid)}ms\` : 'N/A',
        CLS: cls ? parseFloat(cls).toFixed(3) : 'N/A',
      });
    }
  });
}

// ========================================
// Unregister Service Worker in Development
// (Can be toggled for offline testing)
// ========================================

if (import.meta.env.DEV) {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.getRegistrations().then((registrations) => {
      registrations.forEach((registration) => {
        // Uncomment to unregister in development
        // registration.unregister();
      });
    });
  }
}

// ========================================
// Security Check on Startup
// ========================================

if (window.crossOriginIsolated) {
  console.info('[Security] ✓ Cross-Origin Isolation enabled - WASM ready');
} else {
  console.warn('[Security] ⚠ Cross-Origin Isolation disabled - WASM may be unavailable');
}

console.info('[Startup] NoPara application initialized');
`,Gi=`/**
 * NoPara - Security & File Validation Utility
 * 
 * COMPLIANCE STANDARDS MET:
 * - Zero-Trust Architecture: Validate all user inputs (OWASP)
 * - ISO/IEC 27001:2022: File type validation via magic numbers
 * - GDPR Article 32: Data integrity checks before processing
 * - PIPEDA: No persistent storage of file metadata
 * 
 * Magic Numbers Reference:
 * https://en.wikipedia.org/wiki/List_of_file_signatures
 */

/**
 * Supported MIME types with security validation
 * Maps file extension → MIME type → magic number signature (hex bytes)
 */
export const SUPPORTED_FORMATS = {
  // Video Formats
  mp4: {
    mimeType: 'video/mp4',
    magicNumbers: [
      // "ftyp" after the 4-byte box size; the size varies with the number of brands
      { bytes: [0x66, 0x74, 0x79, 0x70], offset: 4 },
    ],
  },
  mkv: {
    mimeType: 'video/x-matroska',
    magicNumbers: [
      { bytes: [0x1a, 0x45, 0xdf, 0xa3], offset: 0 }, // EBML (Matroska)
    ],
  },
  avi: {
    mimeType: 'video/x-msvideo',
    magicNumbers: [
      { bytes: [0x52, 0x49, 0x46, 0x46], offset: 0 }, // RIFF (AVI)
      { bytes: [0x41, 0x56, 0x49, 0x20], offset: 8 }, // "AVI " signature
    ],
  },
  webm: {
    mimeType: 'video/webm',
    magicNumbers: [
      { bytes: [0x1a, 0x45, 0xdf, 0xa3], offset: 0 }, // EBML (WebM)
    ],
  },

  // Audio Formats
  mp3: {
    mimeType: 'audio/mpeg',
    magicNumbers: [
      { bytes: [0xff, 0xfb], offset: 0 }, // MPEG Audio Frame (FFFB)
      { bytes: [0xff, 0xfa], offset: 0 }, // MPEG Audio Frame (FFFA)
      { bytes: [0xff, 0xf3], offset: 0 }, // MPEG-2 Layer III frame (FFF3)
      { bytes: [0xff, 0xf2], offset: 0 }, // MPEG-2 Layer III frame (FFF2)
      { bytes: [0xff, 0xe3], offset: 0 }, // MPEG-2.5 Layer III frame (FFE3)
      { bytes: [0xff, 0xe2], offset: 0 }, // MPEG-2.5 Layer III frame (FFE2)
      { bytes: [0x49, 0x44, 0x33], offset: 0 }, // ID3v2 tag
    ],
  },
  wav: {
    mimeType: 'audio/wav',
    magicNumbers: [
      { bytes: [0x52, 0x49, 0x46, 0x46], offset: 0 }, // RIFF header
      { bytes: [0x57, 0x41, 0x56, 0x45], offset: 8 }, // "WAVE" signature
    ],
  },
  flac: {
    mimeType: 'audio/flac',
    magicNumbers: [
      { bytes: [0x66, 0x4c, 0x61, 0x43], offset: 0 }, // "fLaC"
    ],
  },
  aac: {
    mimeType: 'audio/aac',
    magicNumbers: [
      { bytes: [0xff, 0xf1], offset: 0 }, // AAC ADTS frame (FFF1)
      { bytes: [0xff, 0xf9], offset: 0 }, // AAC ADTS frame (FFF9)
      { bytes: [0x49, 0x44, 0x33], offset: 0 }, // ID3v2 tag before the ADTS frames
    ],
  },

  // Image Formats
  jpeg: {
    mimeType: 'image/jpeg',
    magicNumbers: [
      { bytes: [0xff, 0xd8, 0xff], offset: 0 }, // JPEG SOI + APP0/1
    ],
  },
  png: {
    mimeType: 'image/png',
    magicNumbers: [
      { bytes: [0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a], offset: 0 }, // PNG signature
    ],
  },
  gif: {
    mimeType: 'image/gif',
    magicNumbers: [
      { bytes: [0x47, 0x49, 0x46, 0x38, 0x37, 0x61], offset: 0 }, // "GIF87a"
      { bytes: [0x47, 0x49, 0x46, 0x38, 0x39, 0x61], offset: 0 }, // "GIF89a"
    ],
  },
  webp: {
    mimeType: 'image/webp',
    magicNumbers: [
      { bytes: [0x52, 0x49, 0x46, 0x46], offset: 0 }, // RIFF header
      { bytes: [0x57, 0x45, 0x42, 0x50], offset: 8 }, // "WEBP" signature
    ],
  },
  bmp: {
    mimeType: 'image/bmp',
    magicNumbers: [
      { bytes: [0x42, 0x4d], offset: 0 }, // "BM" header
    ],
  },
};

/**
 * Extra extensions that name a format already in SUPPORTED_FORMATS
 * (kept out of the table so format counts stay one per format)
 */
export const EXTENSION_ALIASES = { jpg: 'jpeg' };

/**
 * Maximum file sizes (bytes) - Green Coding: Prevent excessive memory usage
 * ISO/IEC 27001: Resource limits prevent DoS attacks
 */
export const MAX_FILE_SIZES = {
  // Video: 1 GB (WASM memory constraint)
  video: 1024 * 1024 * 1024,
  // Audio: 500 MB
  audio: 500 * 1024 * 1024,
  // Image: 100 MB
  image: 100 * 1024 * 1024,
};

/**
 * Security Error Messages (No stack traces - ISO/IEC 27001)
 */
const SECURITY_ERRORS = {
  INVALID_FILE_TYPE: 'File type not supported. Please upload a valid media file.',
  INVALID_SIGNATURE: 'File signature validation failed. The file may be corrupted or misidentified.',
  FILE_TOO_LARGE: 'File exceeds maximum allowed size for secure processing.',
  MIME_MISMATCH: 'File extension does not match file contents. Potential security threat detected.',
  UNKNOWN_FORMAT: 'Unknown file format. Unable to process.',
  CORRUPTED_FILE: 'File appears to be corrupted or incomplete.',
  NO_FILE_PROVIDED: 'No file was provided for validation.',
};

/**
 * Validates file against Zero-Trust criteria
 * 
 * @param {File} file - File object from input
 * @returns {Object} {valid: boolean, errors: string[], sanitized: {name, type, size}}
 * 
 * OWASP: Treat all inputs as untrusted
 * ISO/IEC 27001: Multi-layer validation
 */
export function validateFile(file) {
  const result = {
    valid: false,
    errors: [],
    sanitized: null,
  };

  // Layer 1: Null/undefined check
  if (!file) {
    result.errors.push(SECURITY_ERRORS.NO_FILE_PROVIDED);
    return result;
  }

  // Layer 2: File size validation (DoS prevention)
  const fileExtension = file.name.split('.').pop().toLowerCase();
  const formatKey = EXTENSION_ALIASES[fileExtension] || fileExtension;
  const fileCategory = getFileCategory(fileExtension);
  
  if (!fileCategory) {
    result.errors.push(SECURITY_ERRORS.UNKNOWN_FORMAT);
    return result;
  }

  const maxSize = MAX_FILE_SIZES[fileCategory];
  if (file.size > maxSize) {
    result.errors.push(
      \`\${SECURITY_ERRORS.FILE_TOO_LARGE} Max: \${formatBytes(maxSize)}\`
    );
    return result;
  }

  // Layer 3: MIME type check (preliminary - can be spoofed)
  const supportedFormat = SUPPORTED_FORMATS[formatKey];
  if (!supportedFormat) {
    result.errors.push(SECURITY_ERRORS.INVALID_FILE_TYPE);
    return result;
  }

  if (file.type && file.type !== supportedFormat.mimeType) {
    result.errors.push(
      \`\${SECURITY_ERRORS.MIME_MISMATCH} Expected: \${supportedFormat.mimeType}, Got: \${file.type}\`
    );
    // Continue validation - don't fail immediately
  }

  // Layer 4: Magic number validation (cryptographic authenticity check)
  return validateMagicNumbers(file, supportedFormat, result, fileExtension);
}

/**
 * Validates file magic numbers (binary signature)
 * OWASP: Defense in depth - validates actual file content
 * 
 * @private
 */
function validateMagicNumbers(file, format, result, fileExtension) {
  return new Promise((resolve) => {
    const reader = new FileReader();

    reader.onload = (event) => {
      try {
        const headerBytes = new Uint8Array(event.target.result);

        // Check against all known magic number signatures
        const isValid = matchSignature(headerBytes, format);

        if (!isValid) {
          result.errors.push(SECURITY_ERRORS.INVALID_SIGNATURE);
          resolve(result);
          return;
        }

        // Layer 5: File integrity check (size consistency)
        if (file.size < 100) {
          result.errors.push(SECURITY_ERRORS.CORRUPTED_FILE);
          resolve(result);
          return;
        }

        // All validations passed - sanitize metadata
        result.valid = true;
        result.sanitized = {
          name: sanitizeFileName(file.name),
          type: format.mimeType,
          size: file.size,
          extension: fileExtension,
          category: getFileCategory(fileExtension),
        };

        resolve(result);
      } catch (error) {
        // Fail securely without exposing stack trace
        result.errors.push(SECURITY_ERRORS.CORRUPTED_FILE);
        resolve(result);
      }
    };

    reader.onerror = () => {
      result.errors.push(SECURITY_ERRORS.CORRUPTED_FILE);
      resolve(result);
    };

    // Read only first 512 bytes for magic number check (performance)
    reader.readAsArrayBuffer(file.slice(0, 512));
  });
}

/**
 * Pure signature check: true when ANY one of the format's magic-number entries
 * matches the header bytes (entries are alternatives, evaluated with some()).
 * Note: for RIFF formats (avi, wav, webp) the bare "RIFF" entry alone is enough.
 *
 * @param {Uint8Array|number[]} headerBytes - first bytes of the file
 * @param {{magicNumbers: {bytes: number[], offset: number}[]}} format - SUPPORTED_FORMATS entry
 * @returns {boolean}
 */
export function matchSignature(headerBytes, format) {
  return format.magicNumbers.some((signature) => {
    const offset = signature.offset;
    const expectedBytes = signature.bytes;

    // Ensure file is large enough for signature
    if (headerBytes.length < offset + expectedBytes.length) {
      return false;
    }

    // Compare bytes
    return expectedBytes.every((byte, index) => headerBytes[offset + index] === byte);
  });
}

/**
 * Determines file category from extension
 * @private
 */
function getFileCategory(extension) {
  const ext = extension.toLowerCase();
  const format = SUPPORTED_FORMATS[EXTENSION_ALIASES[ext] || ext];
  if (!format) return null;

  // Categorize based on MIME type
  if (format.mimeType.startsWith('video/')) return 'video';
  if (format.mimeType.startsWith('audio/')) return 'audio';
  if (format.mimeType.startsWith('image/')) return 'image';

  return null;
}

/**
 * Sanitizes file names to prevent path traversal and XSS
 * OWASP: Remove dangerous characters
 * 
 * @private
 */
function sanitizeFileName(fileName) {
  // Remove path traversal attempts
  let sanitized = fileName
    .replace(/\\.\\./g, '') // Remove ..
    .replace(/[/\\\\]/g, '') // Remove path separators
    .replace(/[<>:"|?*]/g, '_') // Replace invalid Windows chars
    .replace(/[\\x00-\\x1f]/g, ''); // Remove control characters

  // Limit length to prevent buffer overflow (255 chars = typical filesystem limit)
  if (sanitized.length > 255) {
    const extension = sanitized.split('.').pop();
    sanitized = sanitized.substring(0, 255 - extension.length - 1) + '.' + extension;
  }

  return sanitized || 'unnamed-file';
}

/**
 * Formats bytes to human-readable size
 * @private
 */
function formatBytes(bytes) {
  const sizes = ['B', 'KB', 'MB', 'GB'];
  if (bytes === 0) return '0 B';

  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  return (bytes / Math.pow(1024, i)).toFixed(2) + ' ' + sizes[i];
}

/**
 * Comprehensive security status check
 * Returns object with all validation results
 */
export function getSecurityStatus() {
  return {
    features: {
      // CSP enabled (checked via meta tags in HTML)
      cspEnabled: true,
      // Cross-Origin Isolation (checked at runtime)
      crossOriginIsolated: typeof window !== 'undefined' && window.crossOriginIsolated,
      // SharedArrayBuffer availability (required for WASM)
      sharedArrayBufferAvailable: typeof SharedArrayBuffer !== 'undefined',
    },
    supportedFormats: Object.keys(SUPPORTED_FORMATS),
    maxFileSizes: MAX_FILE_SIZES,
  };
}

/**
 * Export validation schemas for UI components
 */
export function getValidationSchemas() {
  return {
    videoFormats: Object.entries(SUPPORTED_FORMATS)
      .filter(([, format]) => format.mimeType.startsWith('video/'))
      .map(([ext]) => ext.toUpperCase()),
    audioFormats: Object.entries(SUPPORTED_FORMATS)
      .filter(([, format]) => format.mimeType.startsWith('audio/'))
      .map(([ext]) => ext.toUpperCase()),
    imageFormats: Object.entries(SUPPORTED_FORMATS)
      .filter(([, format]) => format.mimeType.startsWith('image/'))
      .map(([ext]) => ext.toUpperCase()),
  };
}
`,Af=`/**
 * NoPara - FFmpeg argument builder (moved out of App.jsx unchanged so it can be tested).
 * Note: the CRF slider and preset radios in the UI are not passed in; the codec
 * settings below are fixed per output format.
 */

/**
 * Build FFmpeg arguments based on input/output formats
 */
export function buildFFmpegArgs(input, output, format, category) {
  const baseArgs = ['-i', input];

  // Audio conversions
  if (['mp3', 'wav', 'aac', 'flac'].includes(format)) {
    if (format === 'mp3') {
      return [...baseArgs, '-vn', '-acodec', 'libmp3lame', '-q:a', '2', output];
    } else if (format === 'wav') {
      return [...baseArgs, '-vn', '-acodec', 'pcm_s16le', output];
    } else if (format === 'aac') {
      return [...baseArgs, '-vn', '-acodec', 'aac', '-b:a', '192k', output];
    } else if (format === 'flac') {
      return [...baseArgs, '-vn', '-acodec', 'flac', output];
    }
  }

  // Video conversions
  if (['mp4', 'webm', 'avi', 'mkv'].includes(format)) {
    if (format === 'mp4') {
      return [...baseArgs, '-c:v', 'libx264', '-preset', 'medium', '-crf', '23', '-c:a', 'aac', output];
    } else if (format === 'webm') {
      return [...baseArgs, '-c:v', 'libvpx', '-crf', '30', '-b:v', '0', '-c:a', 'libvorbis', output];
    } else if (format === 'avi') {
      return [...baseArgs, '-c:v', 'mpeg4', '-q:v', '5', '-c:a', 'mp3', output];
    } else if (format === 'mkv') {
      return [...baseArgs, '-c:v', 'copy', '-c:a', 'copy', output];
    }
  }

  // Image/GIF conversions - HIGH QUALITY
  if (['gif', 'png', 'jpg', 'webp'].includes(format)) {
    if (format === 'gif') {
      // High quality GIF: 15fps, lanczos scaling, keep original size
      return [
        ...baseArgs,
        '-vf', 'fps=15,scale=-1:-1:flags=lanczos',
        '-gifflags', '+transdiff',
        '-loop', '0',
        output
      ];
    } else if (format === 'png') {
      return [...baseArgs, '-vframes', '1', output];
    } else if (format === 'jpg') {
      return [...baseArgs, '-vframes', '1', '-q:v', '2', output];
    } else if (format === 'webp') {
      return [...baseArgs, '-vframes', '1', '-quality', '80', output];
    }
  }

  // Default: simple copy
  return [...baseArgs, '-c', 'copy', output];
}

/**
 * Get MIME type for output format
 */
export function getMimeType(format) {
  const mimeTypes = {
    mp3: 'audio/mpeg',
    wav: 'audio/wav',
    aac: 'audio/aac',
    flac: 'audio/flac',
    mp4: 'video/mp4',
    webm: 'video/webm',
    avi: 'video/x-msvideo',
    mkv: 'video/x-matroska',
    gif: 'image/gif',
    png: 'image/png',
    jpg: 'image/jpeg',
    webp: 'image/webp',
  };
  return mimeTypes[format] || 'application/octet-stream';
}

`,Hi=`<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- ========================================
         NoPara - Secure Media Conversion Platform
         COMPLIANCE STANDARDS:
         - ISO/IEC 40500:2025 (WCAG 2.2 Level AAA)
         - EN 301 549 (European Accessibility Standard)
         - OWASP Top 10 (XSS Prevention via CSP)
         - GDPR Article 32 (Secure Processing)
         - PIPEDA (Privacy by Design)
         ======================================== -->

    <meta charset="UTF-8" />
    <!-- EN 301 549: Specify language for assistive technologies -->
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />

    <!-- Core Web Vitals: Viewport optimization -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <!-- ========================================
         SEO META TAGS - Primary
         ======================================== -->
    <title>NoPara - Free Online Video Converter | MP4 to GIF, WebM, MP3 | 100% Private & Secure</title>
    
    <meta name="description" content="Free online video converter - Convert MP4 to GIF, WebM, MP3, AVI, MKV instantly in your browser. 100% private, no upload required. Best free media converter 2026. WCAG accessible." />
    
    <meta name="keywords" content="free video converter, online video converter, mp4 to gif, video to gif converter, mp4 to mp3, convert video online, free media converter, browser video converter, private video converter, no upload converter, webm converter, mkv converter, avi converter, wav converter, flac converter, audio converter, gif maker, video to audio, secure file converter, offline video converter, GDPR compliant converter, accessible video converter, best free converter 2026" />
    
    <meta name="author" content="Jesun Ahmad Ushno" />
    <meta name="creator" content="Jesun Ahmad Ushno" />
    <meta name="publisher" content="Jesun Ahmad Ushno" />
    
    <!-- Canonical URL -->
    <link rel="canonical" href="https://jesunahmadushno.github.io/NoPara/" />
    
    <!-- Language & Region -->
    <meta name="language" content="English" />
    <meta name="geo.region" content="US" />
    <meta name="geo.placename" content="Global" />
    
    <!-- Robots -->
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
    <meta name="googlebot" content="index, follow" />
    <meta name="bingbot" content="index, follow" />
    
    <!-- ========================================
         Open Graph (Facebook, LinkedIn, Discord)
         ======================================== -->
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="NoPara" />
    <meta property="og:title" content="NoPara - Free Online Video Converter | 100% Private" />
    <meta property="og:description" content="Convert videos, audio & images instantly in your browser. MP4 to GIF, WebM, MP3 & more. No uploads, 100% private. Best free converter 2026!" />
    <meta property="og:url" content="https://jesunahmadushno.github.io/NoPara/" />
    <meta property="og:image" content="https://jesunahmadushno.github.io/NoPara/logo.png" />
    <meta property="og:image:alt" content="NoPara - Free Online Video Converter" />
    <meta property="og:image:width" content="512" />
    <meta property="og:image:height" content="512" />
    <meta property="og:locale" content="en_US" />
    
    <!-- ========================================
         Twitter Card
         ======================================== -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="NoPara - Free Online Video Converter | 100% Private" />
    <meta name="twitter:description" content="Convert videos, audio & images instantly in your browser. MP4 to GIF, WebM, MP3 & more. No uploads, 100% private!" />
    <meta name="twitter:image" content="https://jesunahmadushno.github.io/NoPara/logo.png" />
    <meta name="twitter:image:alt" content="NoPara - Free Online Video Converter" />
    <meta name="twitter:site" content="@jesun" />
    <meta name="twitter:creator" content="@jesun" />
    
    <!-- ========================================
         Additional SEO Tags
         ======================================== -->
    <meta name="application-name" content="NoPara" />
    <meta name="apple-mobile-web-app-title" content="NoPara" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
    <meta name="mobile-web-app-capable" content="yes" />
    <meta name="format-detection" content="telephone=no" />
    
    <!-- Classification -->
    <meta name="classification" content="Video Converter, Media Converter, Online Tools" />
    <meta name="category" content="Technology, Tools, Media" />
    <meta name="coverage" content="Worldwide" />
    <meta name="distribution" content="global" />
    <meta name="rating" content="general" />
    <meta name="revisit-after" content="7 days" />
    
    <!-- ========================================
         JSON-LD Structured Data (Schema.org)
         ======================================== -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "NoPara",
      "alternateName": ["NoPara Video Converter", "NoPara Media Converter"],
      "description": "Free online video converter - Convert MP4 to GIF, WebM, MP3, AVI, MKV instantly in your browser. 100% private, no upload required.",
      "url": "https://jesunahmadushno.github.io/NoPara/",
      "applicationCategory": "MultimediaApplication",
      "operatingSystem": "Any",
      "browserRequirements": "Requires JavaScript, WebAssembly support",
      "softwareVersion": "1.2.0",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "author": {
        "@type": "Person",
        "name": "Jesun Ahmad Ushno",
        "url": "https://jesunahmadushno.com"
      },
      "creator": {
        "@type": "Person",
        "name": "Jesun Ahmad Ushno",
        "url": "https://jesunahmadushno.com"
      },
      "image": "https://jesunahmadushno.github.io/NoPara/logo.png",
      "screenshot": "https://jesunahmadushno.github.io/NoPara/logo.png",
      "featureList": [
        "Video to GIF conversion",
        "MP4 to MP3 conversion",
        "WebM conversion",
        "MKV conversion",
        "AVI conversion",
        "FLAC conversion",
        "WAV conversion",
        "100% browser-based",
        "No file uploads",
        "GDPR compliant",
        "WCAG 2.2 AAA accessible",
        "Offline capable"
      ],
      "keywords": "video converter, mp4 to gif, online converter, free converter, media converter",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5",
        "ratingCount": "100",
        "bestRating": "5",
        "worstRating": "1"
      }
    }
    <\/script>
    
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Is NoPara really free?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, NoPara is 100% free to use. There are no hidden fees, subscriptions, or limitations."
          }
        },
        {
          "@type": "Question",
          "name": "Are my files uploaded to a server?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. All file processing happens entirely in your browser using WebAssembly technology. Your files never leave your device."
          }
        },
        {
          "@type": "Question",
          "name": "What formats can NoPara convert?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "NoPara supports video formats (MP4, WebM, MKV, AVI), audio formats (MP3, WAV, FLAC, AAC), and image formats (GIF, PNG, JPEG, WebP)."
          }
        },
        {
          "@type": "Question",
          "name": "Does NoPara work offline?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, NoPara is a Progressive Web App (PWA) that can be installed and used offline after the initial load."
          }
        }
      ]
    }
    <\/script>
    
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "NoPara Video Converter",
      "applicationCategory": "UtilitiesApplication",
      "operatingSystem": "Web Browser",
      "downloadUrl": "https://jesunahmadushno.github.io/NoPara/",
      "softwareVersion": "1.2.0",
      "datePublished": "2026-01-24",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "150"
      }
    }
    <\/script>
    
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "NoPara",
      "url": "https://jesunahmadushno.github.io/NoPara/",
      "logo": "https://jesunahmadushno.github.io/NoPara/logo.png",
      "sameAs": [
        "https://github.com/JesunAhmadUshno/NoPara",
        "https://jesunahmadushno.com"
      ]
    }
    <\/script>
    
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://jesunahmadushno.github.io/NoPara/"
        }
      ]
    }
    <\/script>

    <!-- WCAG 2.2 AAA: High-contrast mode support -->
    <meta name="color-scheme" content="light dark" />

    <!-- ========================================
         Content Security Policy (OWASP)
         Zero-Trust: Deny all non-local scripts
         ======================================== -->
    <meta
      http-equiv="Content-Security-Policy"
      content="
        default-src 'self';
        script-src 'self' 'unsafe-inline' 'wasm-unsafe-eval' blob:;
        style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
        img-src 'self' data: blob:;
        media-src 'self' blob:;
        font-src 'self' data: https://fonts.gstatic.com;
        connect-src 'self' https://unpkg.com;
        worker-src 'self' blob:;
        object-src 'none';
        base-uri 'self';
        form-action 'self';
      "
    />

    <!-- ========================================
         Cross-Origin Isolation (WASM SharedArrayBuffer)
         Required for ffmpeg.wasm high-performance execution
         ======================================== -->
    <meta http-equiv="Cross-Origin-Opener-Policy" content="same-origin" />
    <meta
      http-equiv="Cross-Origin-Embedder-Policy"
      content="require-corp"
    />

    <!-- ========================================
         Security & Privacy Headers
         ISO/IEC 27001: Defense in depth
         ======================================== -->
    <meta http-equiv="X-Content-Type-Options" content="nosniff" />
    <meta http-equiv="X-XSS-Protection" content="1; mode=block" />
    <meta name="referrer" content="strict-origin-when-cross-origin" />

    <!-- ========================================
         PWA & Offline Capability (W3C Web App Manifest)
         Green Coding: Install on Desktop reduces carbon (no app store)
         ======================================== -->
    <meta name="theme-color" content="#0a0a0f" />
    <link rel="manifest" href="./manifest.json" />
    <link rel="icon" type="image/png" href="./logo.png" />
    <link rel="apple-touch-icon" href="./logo.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="./logo.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="./logo.png" />
    
    <!-- Preconnect for performance -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link rel="preconnect" href="https://unpkg.com" />
    <link rel="dns-prefetch" href="https://unpkg.com" />

    <!-- ========================================
         Service Worker Registration (Offline Capability)
         GDPR: No data persisted beyond RAM
         ======================================== -->
    <script>
      // Only one service worker can control scope ./ - registering service-worker.js here
      // replaced the COI worker below on every visit, so isolation never stuck.
      // coi-serviceworker.js also caches responses and serves them when offline.

      // ========================================
      // COI Service Worker (Cross-Origin Isolation Workaround)
      // Required for WASM SharedArrayBuffer on non-HTTPS GitHub Pages
      // ========================================
      document.addEventListener('DOMContentLoaded', () => {
        if (window.crossOriginIsolated) {
          console.info('[Security] Cross-Origin Isolation enabled (COOP/COEP headers detected)');
        } else if (navigator.serviceWorker) {
          // Fallback: Load COI workaround via service worker
          navigator.serviceWorker.register('./coi-serviceworker.js').catch(() => {
            console.warn('[Warning] COI workaround unavailable - SharedArrayBuffer may not function');
          });
        }
      });
    <\/script>

    <!-- ========================================
         No External Frameworks
         Pure CSS + Semantic HTML for minimal carbon footprint
         ======================================== -->


    <title>NoPara - Secure Media Conversion</title>
  </head>

  <body>
    <!-- ========================================
         Semantic HTML5 Structure (EN 301 549)
         ARIA landmarks for screen reader navigation
         ======================================== -->

    <!-- Skip navigation link (WCAG 2.2 - Keyboard Access) -->
    <a href="#main-content" class="skip-link">Skip to main content</a>

    <!-- Application container -->
    <div id="root" role="application" aria-label="NoPara Media Conversion Application"></div>

    <!-- ========================================
         No External Scripts (OWASP CSP)
         Only inline trusted code and bundled React app
         ======================================== -->
    <script type="module" src="/src/main.jsx"><\/script>

    <!-- ========================================
         Performance Monitoring (Green Coding)
         Send metrics only to localStorage (no tracking)
         ======================================== -->
    <script>
      // Core Web Vitals tracking (local only - GDPR compliant)
      if (window.PerformanceObserver) {
        try {
          // LCP: Largest Contentful Paint (target < 2.5s)
          new PerformanceObserver((list) => {
            const entries = list.getEntries();
            const lastEntry = entries[entries.length - 1];
            sessionStorage.setItem('lcp', lastEntry.renderTime || lastEntry.loadTime);
          }).observe({ entryTypes: ['largest-contentful-paint'] });

          // FID: First Input Delay (target < 100ms)
          new PerformanceObserver((list) => {
            const entries = list.getEntries();
            entries.forEach((entry) => {
              sessionStorage.setItem('fid', entry.processingDuration);
            });
          }).observe({ entryTypes: ['first-input'] });

          // CLS: Cumulative Layout Shift (target < 0.1)
          new PerformanceObserver((list) => {
            const entries = list.getEntries();
            let cls = 0;
            entries.forEach((entry) => {
              if (!entry.hadRecentInput) cls += entry.value;
            });
            sessionStorage.setItem('cls', cls);
          }).observe({ entryTypes: ['layout-shift'] });
        } catch (e) {
          console.info('[Performance] Core Web Vitals monitoring unavailable');
        }
      }
    <\/script>
  </body>
</html>
`,jf=`# NoPara - Secure Media Conversion Application

<p align="center">
  <img src="logo.png" alt="NoPara Logo" width="150" />
</p>

<p align="center">
  <strong>🔗 Live Demo: <a href="https://jesunahmadushno.github.io/NoPara/">https://jesunahmadushno.github.io/NoPara/</a></strong>
</p>

<p align="center">
  <strong>Live dashboard: <a href="https://jesunahmadushno.github.io/NoPara/dashboard/">https://jesunahmadushno.github.io/NoPara/dashboard/</a></strong>
  <br />Test the real file checks in your browser, see the exact ffmpeg arguments, and read a claims-versus-code audit.
</p>

<p align="center">
  <a href="https://buymeacoffee.com/jesun">☕ Buy Me a Coffee</a> •
  <a href="https://jesunahmadushno.com">👨‍💻 Developer</a>
</p>

Production-grade, serverless, browser-based media conversion platform with enterprise-grade security and accessibility. Powered by **FFmpeg.wasm** for real client-side media processing.

![NoPara](https://img.shields.io/badge/NoPara-Media%20Converter-ff00ff?style=for-the-badge)
![FFmpeg](https://img.shields.io/badge/FFmpeg-WASM-007808?style=for-the-badge)
![React](https://img.shields.io/badge/React-18.2-61DAFB?style=for-the-badge)
![Vite](https://img.shields.io/badge/Vite-5.0-646CFF?style=for-the-badge)
![Privacy](https://img.shields.io/badge/Privacy-100%25%20Local-39ff14?style=for-the-badge)

## Start here

1. Open the live app: https://jesunahmadushno.github.io/NoPara/
2. Drop in a file. Pick the output format. Convert. The file never
   leaves your device.
3. Or run it from source: \`npm install\`, then \`npm run dev\`
   (Node 18 or newer).

## Benchmarks and limits

| Item | Value | Where it comes from |
| :--- | :--- | :--- |
| Video formats in | 4: MP4, MKV, AVI, WebM | \`SUPPORTED_FORMATS\` in \`src/utils/security.js\` |
| Audio formats in | 4: MP3, WAV, FLAC, AAC | \`SUPPORTED_FORMATS\` in \`src/utils/security.js\` |
| Image formats in | 5: JPEG, PNG, GIF, WebP, BMP | \`SUPPORTED_FORMATS\` in \`src/utils/security.js\` |
| Max file size, video | 1 GB | \`MAX_FILE_SIZES\` in \`src/utils/security.js\` |
| Max file size, audio | 500 MB | \`MAX_FILE_SIZES\` in \`src/utils/security.js\` |
| Max file size, image | 100 MB | \`MAX_FILE_SIZES\` in \`src/utils/security.js\` |
| Output formats | 11: MP4, MKV, AVI, WebM, MP3, WAV, FLAC, AAC, GIF, WebP, PNG | Output menu in \`src/App.jsx\` |
| Bitrate, resolution, frame rate controls | None in the app | Not present in \`src/\`; codec settings are fixed per format in \`src/utils/ffmpeg-args.js\` |
| Conversion speed | TBD-NO-RECORD | No timed conversion run is recorded in this repo yet |

Speed depends on the device that runs the browser. No benchmark run is
published yet. To add one: time a 60 second 1080p MP4 to WebM conversion
on a named device, then record the device, the file, and the seconds in
this table.

## ✨ Features

### 🎨 Graffiti Neon UI
- Stunning neon color palette (Cyan, Magenta, Purple, Green, Orange)
- Animated gradients and glow effects
- Glassmorphism cards with frosted glass appearance
- **Panic Bootloader** - Animated loading screen with scrambling logo
- Responsive design for all screen sizes

### 🔄 Real Media Conversion
- **Video**: MP4, WebM, MKV, AVI
- **Audio**: MP3, WAV, FLAC, AAC
- **Image**: GIF (high quality), WebP, PNG, JPEG
- Quality slider (CRF) and preset buttons are shown, but not yet passed to ffmpeg: settings are fixed per format in \`src/utils/ffmpeg-args.js\`
- Real-time conversion progress

### 🔒 100% Private
- **All processing happens in YOUR browser**
- Files NEVER leave your device
- No uploads, no servers, no tracking
- Zero cookies, zero analytics
- GDPR & PIPEDA compliant

## 🔐 Security & Compliance

### Standards Met
- **ISO/IEC 40500:2025** - WCAG 2.2 Level AAA (Accessibility)
- **EN 301 549** - European Accessibility Standard
- **ISO/IEC 27001:2022** - Information Security Management
- **GDPR Article 32** - Secure Data Processing
- **PIPEDA** - Canadian Privacy Protection
- **OWASP Top 10** - Web Application Security
- **Zero-Trust Architecture** - Validate all inputs

### Key Security Features
- ✅ Cross-Origin Isolation (COOP/COEP) for WASM SharedArrayBuffer
- ✅ Content Security Policy (CSP) - restricts sources; note \`script-src\` allows \`'unsafe-inline'\` and \`index.html\` has inline scripts
- ✅ Zero-Trust File Validation - Magic number verification
- ✅ No Data Tracking - Zero cookies, zero localStorage, zero analytics
- ✅ Volatile RAM Only - Files never persisted to disk
- ✅ Secure Error Handling - No stack trace exposure

## ♿ Accessibility Features

### WCAG 2.2 Level AAA Compliance
- 7:1 Minimum Color Contrast Ratio
- 24px Minimum Touch Target Size
- Full Keyboard Navigation (Tab, Enter, Space)
- Screen Reader Support (ARIA Landmarks)
- Focus Indicators (Visible on all interactive elements)
- High Contrast Mode Support
- Reduced Motion Preference Respect

### Keyboard Navigation
- **Tab** - Navigate between focusable elements
- **Enter/Space** - Activate buttons
- **Arrow Keys** - Select options in dropdowns/radios
- **Skip Link** - Jump to main content

## 📦 Project Structure

\`\`\`
NoPara/
├── public/
│   ├── coi-serviceworker.js      # Cross-Origin Isolation workaround
│   ├── service-worker.js          # Offline cache (not registered; it would replace the COI worker)
│   ├── manifest.json              # PWA manifest
│   ├── styles/
│   │   ├── globals.css            # Global styles + variables
│   │   ├── accessibility.css      # WCAG 2.2 AAA rules
│   │   └── components.css         # Component styles
│   └── icons/                     # PWA icons (192x192, 512x512)
├── src/
│   ├── main.jsx                   # React entry point
│   ├── App.jsx                    # Main application component
│   └── utils/
│       ├── security.js            # File validation + magic numbers
│       ├── ffmpeg-args.js         # ffmpeg argument builder + output MIME types
│       └── wasm-loader.js         # Not imported anywhere (unused)
├── site/                          # Live dashboard (served at /NoPara/dashboard/)
├── test/                          # Smoke tests: npm test
├── index.html                     # Semantic HTML with CSP meta tags
├── vite.config.js                 # Vite build configuration
├── package.json                   # Dependencies
└── README.md                      # This file
\`\`\`

## 🚀 Getting Started

### Prerequisites
- Node.js 18.0 or higher
- npm or yarn

### Installation

\`\`\`bash
# Clone or navigate to the project
cd NoPara

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
\`\`\`

### Development Server
Runs on \`http://localhost:5173\` with hot module replacement (HMR).

Security headers are enabled in dev mode:
- COOP/COEP for Cross-Origin Isolation
- X-Content-Type-Options: nosniff
- X-Frame-Options: DENY
(The CSP itself comes from the meta tag in \`index.html\`.)

### Production Build
Optimized for GitHub Pages deployment:

\`\`\`bash
npm run build

# Deploy dist/ folder to GitHub Pages
# Set base URL in vite.config.js to your repository name
\`\`\`

## 🎯 Core Features

### 1. Real Media Conversion (FFmpeg.wasm)
Actual client-side media conversion using FFmpeg compiled to WebAssembly.
Inputs accepted by the file check (\`src/utils/security.js\`):
- **Video**: MP4, MKV, AVI, WebM
- **Audio**: MP3, WAV, FLAC, AAC
- **Image**: JPEG, PNG, GIF, WebP, BMP

Other files (MOV, FLV, WMV, MPEG, OGG, WMA, M4A, OPUS, TIFF) are rejected
as an unknown format, even though ffmpeg itself could read most of them.

### 2. Modern Glassmorphism UI
- Beautiful gradient backgrounds with animated effects
- Glassmorphism cards with frosted glass appearance
- Smooth animations and micro-interactions
- Floating action button for Security & Privacy info
- Responsive design for all screen sizes

### 3. File Validation (Security)
- Magic number verification (binary signatures)
- MIME type validation
- File size limits (prevents DoS)
- Sanitized file names (prevents path traversal)
- Secure error messages (no stack traces)

### 4. Conversion Settings
- Output format menu (11 formats)
- A quality slider and fast/medium/slow preset buttons are shown; they are not
  yet wired into the ffmpeg command
- Bitrate, resolution, frame rate and sample rate controls are not built

### 5. Offline Capability (PWA)
- Cache-first strategy for static assets
- Network-first for HTML
- Share Target API for direct file sharing
- Install on Desktop (no app store required)

## 🔧 Configuration

### Environment Variables
Create \`.env\` file in root:

\`\`\`env
VITE_API_URL=http://localhost:5173
VITE_ENVIRONMENT=development
\`\`\`

### Vite Configuration (\`vite.config.js\`)
Key settings:
- \`base\`: '/NoPara/' (for GitHub Pages)
- BROTLI compression (40% smaller bundles)
- Security headers injection
- WASM support
- Terser minification

## 🌍 Deployment

### GitHub Pages (Live)
The app is deployed at: **https://jesunahmadushno.github.io/NoPara/**

To deploy your own:
\`\`\`bash
# Build and deploy in one command
npm run deploy
\`\`\`

This runs \`npm run build && gh-pages -d dist --dotfiles --add\` which:
1. Builds the production bundle
2. Deploys to the \`gh-pages\` branch automatically (\`--add\` keeps the
   \`dashboard/\` folder; old hashed asset files are left in place)

### Live dashboard
\`site/\` holds a separate dashboard served at \`/NoPara/dashboard/\`. The
\`Pages dashboard\` workflow (\`.github/workflows/pages.yml\`) builds it on every
push to \`main\` that touches it and copies it into \`gh-pages/dashboard/\`, without
touching the app. Build it locally with \`cd site && npm ci && npm run build\`.

### Security Headers for GitHub Pages
The \`coi-serviceworker.js\` injects COOP/COEP headers since GitHub Pages doesn't allow direct header configuration.

## 📊 Performance Metrics (Core Web Vitals)

Targets:
- **LCP** (Largest Contentful Paint): < 2.5s
- **FID** (First Input Delay): < 100ms
- **CLS** (Cumulative Layout Shift): < 0.1

Optimizations:
- Lazy loading for non-critical assets
- Brotli compression (dev: ~40% size reduction)
- CSS code splitting
- Minimal external dependencies
- Green Coding practices

## 🛡️ Security Best Practices

### Input Validation (Zero-Trust)
\`\`\`javascript
// All files validated via magic numbers
import { validateFile } from './utils/security.js';

const validation = await validateFile(userFile);
if (!validation.valid) {
  // Handle error securely
  console.error(validation.errors);
}
\`\`\`

### Content Security Policy
CSP meta tag in \`index.html\`:
- \`script-src 'self' 'unsafe-inline' 'wasm-unsafe-eval' blob:\` (inline scripts are allowed and used)
- Outbound requests limited to \`'self'\` and \`https://unpkg.com\` (the ffmpeg core download)
- Data only in volatile RAM
- WASM trusted via 'wasm-unsafe-eval'

### No Data Persistence
- Session storage only (cleared on close)
- No IndexedDB
- No cookies
- No analytics
- No remote logging

## 🎨 Customization

### Colors
Edit CSS variables in \`public/styles/globals.css\`:
\`\`\`css
:root {
  /* Graffiti Neon Color Palette */
  --primary: #00e5ff;        /* Cyan */
  --secondary: #ff00ff;      /* Magenta */
  --accent: #39ff14;         /* Green */
  --purple: #9d4edd;         /* Purple */
  --orange: #ff6d00;         /* Orange */
  /* ... more colors */
}
\`\`\`

### Fonts
System font stack for optimal performance:
\`\`\`css
--font-family-system: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto...
\`\`\`

### Branding
- Update \`public/manifest.json\` with app details
- Replace icons in \`public/icons/\`
- Update header text in \`src/App.jsx\`

## 🚧 Future Enhancements

### Planned Features
- [ ] Advanced video editing (timeline scrubbing, trim, crop)
- [ ] Batch processing for multiple files
- [ ] Hardware acceleration (WebGL rendering)
- [ ] Cloud storage integration (with encryption)
- [ ] Internationalization (i18n)
- [ ] Dark/Light mode toggle

### Completed ✅
- [x] FFmpeg WASM integration (actual media processing)
- [x] Modern glassmorphism UI with animations
- [x] Floating info button with modal
- [x] Real-time conversion progress
- [x] GitHub Pages deployment
- [x] Graffiti neon theme with custom skull logo
- [x] Panic bootloader with animated loading screen
- [x] Buy Me a Coffee floating button
- [x] Developer footer with link
- [x] High quality GIF conversion

### Accessibility Roadmap
- [ ] Real-time captions
- [ ] Haptic feedback for touch devices
- [ ] Voice control (Web Speech API)
- [ ] Better mobile keyboard support

## 📚 Standards Documentation

### WCAG 2.2 AAA Implementation
- [WCAG 2.2 Level AAA](https://www.w3.org/WAI/WCAG22/quickref/)
- [EN 301 549 Standard](https://www.etsi.org/deliver/etsi_en/301500_301599/301549/03.02.01_60/en_301549v030201p.pdf)
- [ADA Compliance](https://www.ada.gov/)

### Security Standards
- [ISO/IEC 27001:2022](https://www.iso.org/standard/27001)
- [OWASP Top 10](https://owasp.org/Top10/)
- [GDPR Article 32](https://gdpr-info.eu/art-32-gdpr/)
- [PIPEDA](https://www.priv.gc.ca/en/for-individuals/privacy-at-work/pipeda_basis/)

### Web Standards
- [W3C Web Performance](https://www.w3.org/webperf/)
- [Service Worker API](https://w3c.github.io/ServiceWorker/)
- [Web App Manifest](https://www.w3.org/TR/appmanifest/)
- [Cross-Origin Isolation](https://html.spec.whatwg.org/multipage/origin.html#cross-origin-isolation)

## 🐛 Troubleshooting

### WASM SharedArrayBuffer Not Available
**Issue**: \`SharedArrayBuffer is not defined\`

**Solution**: 
- Ensure COOP/COEP headers are set
- Check browser support (Chrome 91+, Firefox 79+)
- Verify \`crossOriginIsolated\` flag in DevTools console

### Service Worker Not Registering
**Issue**: "Service Worker registration failed"

**Solution**:
- Check browser console for errors
- Ensure site is HTTPS (or localhost)
- Clear cache and hard refresh (Ctrl+Shift+R)
- Check service worker file path in \`index.html\`

### Contrast Ratio Issues
**Issue**: WCAG AAA compliance check failing

**Solution**:
- Use color variables from \`globals.css\`
- Test with tools like [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- Ensure text color is at least 7:1 ratio with background

## 📝 License

NoPara is provided as-is for educational and commercial use. Modify and deploy freely with compliance to standards.

## 🤝 Contributing

Contributions are welcome! Please ensure:
1. WCAG 2.2 AAA compliance is maintained
2. Security standards are followed
3. Code is well-documented
4. Performance metrics are met

---

**Version**: 1.2.0  
**Last Updated**: January 24, 2026  
**Architecture**: Serverless, Client-Side Only (React + Vite + FFmpeg.wasm)  
**Security**: Zero-Trust, GDPR Compliant, No Data Persistence  
**Developer**: [Jesun Ahmad Ushno](https://jesunahmadushno.com)  
**Repository**: [github.com/JesunAhmadUshno/NoPara](https://github.com/JesunAhmadUshno/NoPara)  
**Support**: [Buy Me a Coffee](https://buymeacoffee.com/jesun)
`,Bt=Object.entries(Sn).map(([d,v])=>({ext:d,mime:v.mimeType,category:v.mimeType.split("/")[0],signatures:v.magicNumbers})),tc=d=>Array.from(d,v=>v.toString(16).padStart(2,"0").toUpperCase()).join(" ");function rc(d){const v=d.replace(/0x/gi,"").split(/[\s,]+/).filter(Boolean),a=[];for(const j of v){if(!/^[0-9a-f]{1,2}$/i.test(j))return null;a.push(parseInt(j,16))}return a}function ht(d){const v=[];for(const a of Sn[d].magicNumbers)a.bytes.some((j,y)=>v[a.offset+y]!==void 0)||a.bytes.forEach((j,y)=>{v[a.offset+y]=j});return Array.from(v,a=>a??0)}const ic=d=>[...d].map(v=>v.charCodeAt(0)),Vt=[...Bt.map(d=>({id:d.ext,label:`Valid ${d.ext.toUpperCase()} header`,name:`sample.${d.ext}`,bytes:ht(d.ext),size:512})),{id:"mp4-1c",edge:!0,label:"Real-world MP4, ftyp box size 0x1C",name:"phone.mp4",bytes:[0,0,0,28,...ic("ftypisom")],size:512},{id:"wav-as-avi",edge:!0,label:"WAV header renamed .avi",name:"renamed.avi",bytes:ht("wav"),size:512},{id:"webm-as-mkv",edge:!0,label:"WebM header named .mkv (shared EBML)",name:"clip.mkv",bytes:ht("webm"),size:512},{id:"jpg",edge:!0,label:"JPEG photo named .jpg",name:"photo.jpg",bytes:ht("jpeg"),size:512},{id:"png-as-jpeg",edge:!0,label:"PNG bytes named .jpeg",name:"photo.jpeg",bytes:ht("png"),size:512},{id:"mov",edge:!0,label:"QuickTime .mov (not in the table)",name:"clip.mov",bytes:[0,0,0,20,...ic("ftypqt  ")],size:512},{id:"tiny-bmp",edge:!0,label:"BMP header, only 50 bytes long",name:"tiny.bmp",bytes:ht("bmp"),size:50},{id:"mime-mismatch",edge:!0,label:"BMP declared as image/png by the browser",name:"scan.bmp",bytes:ht("bmp"),size:512,type:"image/png"}];function mc({bytes:d,name:v,size:a,type:j=""}){const y=new Uint8Array(Math.max(a,0));return y.set(d.slice(0,y.length)),new File([y],v,{type:j})}function If({name:d,size:v,type:a="",bytes:j},y){const C=d.split(".").pop().toLowerCase(),E=Sn[Xl[C]||C],W=E?E.mimeType.split("/")[0]:null,O=j.slice(0,Math.min(v,y)),L=[{k:"File type known",ok:!!E,d:E?`.${C} is ${W}`:`.${C} is not in the signature table`},{k:"Size limit",ok:E?v<=rn[W]:null,d:E?`${tn(v)} of ${tn(rn[W])}`:""},{k:"MIME type",ok:E?!a||a===E.mimeType?!0:"warn":null,d:E?a?`declared ${a}, expected ${E.mimeType}`:"none declared, check skipped":""},{k:"Magic number",ok:E?Ut(O,E):null,d:E?"first bytes against the table":""},{k:"At least 100 bytes",ok:E?v>=100:null,d:`${v.toLocaleString("en-US")} B`}];let G=!1;for(const Q of L)G?Q.ok=null:Q.ok===!1&&(G=!0);return L}function tn(d){const v=["B","KB","MB","GB"];let a=0;for(;d>=1024&&a<v.length-1;)d/=1024,a++;return`${d%1?d.toFixed(d<10?2:1):d} ${v[a]}`}function Rf(d){return[...d.slice(d.indexOf('id="output-format"'),d.indexOf("</select>",d.indexOf('id="output-format"'))).matchAll(/<option value="([^"]+)">([^<]+)<\/option>/g)].map(a=>({value:a[1],label:a[2]}))}const Mf=d=>+d.match(/crf:\s*(\d+)/)[1],Tf=d=>JSON.parse(d.match(/\{(\[[^\]]*'fast'[^\]]*\])\.map/)[1].replace(/'/g,'"')),_f=d=>d.match(/baseURL = '([^']+)'/)[1];function Of(d){const v=d.match(/http-equiv="Content-Security-Policy"\s+content="([^"]+)"/)[1];return Object.fromEntries(v.split(";").map(a=>a.trim().split(/\s+/)).filter(a=>a[0]).map(([a,...j])=>[a,j]))}const Lf=d=>(d.match(/<script>/g)||[]).length;function zf(d){return{layers:Math.max(...[...d.matchAll(/Layer (\d)/g)].map(v=>+v[1])),readBytes:+d.match(/file\.slice\(0, (\d+)\)/)[1],minSize:+d.match(/file\.size < (\d+)/)[1]}}function bf(d){const v={};for(const j of d.matchAll(/^\| ([^|]+?) \| ([^|]+?) \| ([^|]+?) \|$/gm))v[j[1].trim()]=j[2].trim();const a=j=>{var y;return v[j]?+((y=v[j].match(/^(\d+)/))==null?void 0:y[1]):NaN};return{rows:v,video:a("Video formats in"),audio:a("Audio formats in"),image:a("Image formats in"),speed:v["Conversion speed"]}}const hc="https://github.com/JesunAhmadUshno/NoPara",Gt=d=>`${hc}/blob/main/${d}`,Zl="/NoPara/",Hl=Ef(),Ql=Rf(Rr),Tn=zf(Gi),Kl=Of(Hi),et=bf(jf),Bi=Mf(Rr),Df=Tf(Rr),Wf=_f(Rr),Uf=Lf(Hi),$i=(Hi.match(/serviceWorker\.register\(/g)||[]).length,oc=/wasm-loader/.test(Rr+Ff+Gi+Hi),lc=/conversionSettings|settings\.crf/.test(Af),sc=/function sanitizeFileName/.test(Gi)&&/sanitizeFileName\(file\.name\)/.test(Gi),ac=["video","audio","image"],uc=pc("i","o","mp4"),Vf=uc[uc.indexOf("-crf")+1],Rn={video:Hl.videoFormats.length,audio:Hl.audioFormats.length,image:Hl.imageFormats.length},cc=[["top","Overview","◎"],["check","File check","▣"],["signatures","Signatures","⌗"],["ffmpeg","FFmpeg","❯_"],["limits","Size limits","⇲"],["pipeline","Privacy path","⇄"],["claims","Claims audit","✓"],["receipts","Receipts","≡"]];function Bf(){le.useEffect(()=>{const d=document.querySelectorAll(".reveal");if(!("IntersectionObserver"in window)){d.forEach(a=>a.classList.add("in"));return}const v=new IntersectionObserver(a=>a.forEach(j=>{j.isIntersecting&&(j.target.classList.add("in"),v.unobserve(j.target))}),{threshold:.08});return d.forEach(a=>v.observe(a)),()=>v.disconnect()},[])}function Gf(){const[d,v]=le.useState(()=>new Date);return le.useEffect(()=>{const a=setInterval(()=>v(new Date),3e4);return()=>clearInterval(a)},[]),s.jsxs("div",{className:"menubar",role:"banner",children:[s.jsx("span",{className:"apple","aria-hidden":"true",children:"◆"}),s.jsx("a",{className:"app",href:"#top",children:"NoPara Dashboard"}),s.jsx("a",{className:"m",href:Zl,children:"Open the app"}),s.jsx("a",{className:"m",href:Gt("src/utils/security.js"),children:"security.js"}),s.jsx("a",{className:"m",href:Gt("docs/research-review.md"),children:"Review"}),s.jsx("span",{className:"spacer"}),s.jsxs("span",{className:"status",children:[s.jsx("i",{})," Checks run in your browser"]}),s.jsx("a",{href:hc,children:"GitHub ↗"}),s.jsx("span",{className:"clock",children:d.toLocaleString("en-US",{weekday:"short",hour:"numeric",minute:"2-digit"})})]})}function $f(){const[d,v]=le.useState("top");return le.useEffect(()=>{const a=new IntersectionObserver(j=>j.forEach(y=>y.isIntersecting&&v(y.target.id)),{rootMargin:"-45% 0px -50% 0px"});return cc.forEach(([j])=>{const y=document.getElementById(j);y&&a.observe(y)}),()=>a.disconnect()},[]),s.jsx("nav",{className:"dock","aria-label":"Sections",children:cc.map(([a,j,y])=>s.jsxs("a",{href:`#${a}`,className:d===a?"on":"","aria-current":d===a?"true":void 0,children:[s.jsx("span",{className:"ico","aria-hidden":"true",children:y}),s.jsx("span",{className:"lbl",children:j})]},a))})}function Hf({label:d,value:v,min:a,max:j,step:y,onChange:C,show:E}){const W=le.useId();return s.jsxs("div",{className:"field",children:[s.jsxs("label",{htmlFor:W,children:[d," ",s.jsx("span",{children:E})]}),s.jsx("input",{id:W,type:"range",min:a,max:j,step:y,value:v,onChange:O=>C(+O.target.value)})]})}const ql=d=>{const v=Vt.find(a=>a.id===d);return{...v,type:v.type??"",source:"preset"}};function Qf(){Bf();const[d,v]=le.useState(()=>ql("mp4-1c"));return s.jsxs("div",{className:"wrap",children:[s.jsx(Gf,{}),s.jsx("div",{className:"glow","aria-hidden":"true"}),s.jsx(Kf,{}),s.jsx(Xf,{sample:d,setSample:v}),s.jsx(Zf,{sample:d,setSample:v}),s.jsx(Jf,{}),s.jsx(ep,{}),s.jsx(np,{}),s.jsx(tp,{}),s.jsx(rp,{}),s.jsx($f,{}),s.jsxs("footer",{children:["Every number on this page is read from the NoPara repo at build time (",s.jsx("code",{children:"src/utils/security.js"}),", ",s.jsx("code",{children:"src/App.jsx"}),", ",s.jsx("code",{children:"index.html"}),", ",s.jsx("code",{children:"README.md"}),"), and the file check runs the app’s own ",s.jsx("code",{children:"validateFile()"})," in your browser. No conversion runs here and no speed figures are shown, because none are recorded."]})]})}function Kf(){return s.jsxs("header",{className:"card hero window",id:"top","data-title":"NoPara — README",children:[s.jsxs("div",{className:"head",children:[s.jsx("p",{className:"eyebrow",children:"Browser-only media converter · React + ffmpeg.wasm"}),s.jsx("span",{className:"pill good",children:"● Live app on GitHub Pages"})]}),s.jsxs("h1",{children:["NoPara converts video, audio and images ",s.jsx("em",{children:"inside your browser"}),", with a ",Tn.layers,"-layer file check you can run on this page."]}),s.jsx("p",{className:"sub",children:"NoPara is a working converter: you drop a file, it checks the file, converts it with ffmpeg compiled to WebAssembly, and hands back a download, all on your device. This dashboard runs the app’s real file check, shows the exact ffmpeg command for each output, and audits the README’s claims against the code, including the places where they disagree."}),s.jsxs("div",{className:"actions",children:[s.jsx("a",{className:"btn primary",href:Zl,children:"Open the app"}),s.jsx("a",{className:"btn ghost",href:"#check",children:"Try the file check"}),s.jsxs("span",{className:"hint",children:["Run the tests with ",s.jsx("code",{children:"npm test"})]})]}),s.jsxs("div",{className:"tiles",children:[s.jsxs("div",{className:"tile",children:[s.jsx("div",{className:"num",children:Bt.length}),s.jsxs("div",{className:"cap",children:["Input types the check accepts: ",Rn.video," video, ",Rn.audio," audio, ",Rn.image," image"]})]}),s.jsxs("div",{className:"tile",children:[s.jsx("div",{className:"num",children:Ql.length}),s.jsx("div",{className:"cap",children:"Output formats in the app’s menu"})]}),s.jsxs("div",{className:"tile",children:[s.jsx("div",{className:"num",children:tn(rn.video)}),s.jsxs("div",{className:"cap",children:["Largest video allowed; audio ",tn(rn.audio),", image ",tn(rn.image)]})]}),s.jsxs("div",{className:"tile",children:[s.jsxs("div",{className:"num",children:[Tn.readBytes," B"]}),s.jsxs("div",{className:"cap",children:["Read from each file to check its signature; files under ",Tn.minSize," B are rejected"]})]})]})]})}const Yf={true:["good","Pass"],false:["bad","Fail"],warn:["warn","Warning"],null:["","Not run"]};function Xf({sample:d,setSample:v}){const[a,j]=le.useState(null),[y,C]=le.useState(tc(d.bytes)),[E,W]=le.useState(!1),O={preset:le.useId(),name:le.useId(),hex:le.useId(),size:le.useId(),type:le.useId(),file:le.useId()};le.useEffect(()=>{C(tc(d.bytes))},[d.bytes]),le.useEffect(()=>{let P=!0;return Promise.resolve(dc(d.file??mc(d))).then(B=>P&&j(B)),()=>{P=!1}},[d]);const L=If(d,Tn.readBytes),G=P=>v(B=>({...B,...P,file:void 0,source:"edited",id:"custom"})),Q=P=>{C(P);const B=rc(P);B&&G({bytes:B})},J=async P=>{if(!P)return;const B=Array.from(new Uint8Array(await P.slice(0,32).arrayBuffer()));v({id:"own",name:P.name,size:P.size,type:P.type,bytes:B,file:P,source:"your file"})},ye=Vt.some(P=>P.id===d.id)?d.id:"";return s.jsxs("section",{id:"check",className:"card window reveal","data-title":"validator.app — runs validateFile() live",children:[s.jsxs("div",{className:"head",children:[s.jsxs("div",{children:[s.jsx("p",{className:"eyebrow",children:"Live file check"}),s.jsx("h2",{children:"The real check, on your file or on a header you build."}),s.jsxs("p",{className:"sub",children:["This calls the app’s own ",s.jsx("a",{href:Gt("src/utils/security.js"),children:s.jsx("code",{children:"validateFile()"})}),", unchanged. It reads only the first ",Tn.readBytes," bytes, in your browser; nothing is uploaded. The presets include edge cases that show how the code really behaves: some real MP4s are turned away, and any RIFF file passes as ",s.jsx("code",{children:".avi"}),"."]})]}),a&&s.jsxs("span",{className:`pill ${a.valid?"good":"bad"}`,children:["● ",a.valid?"Accepted":"Rejected"]})]}),s.jsxs("div",{className:"grid2",children:[s.jsxs("div",{children:[s.jsxs("div",{className:"controls",style:{gridTemplateColumns:"1fr 1fr"},children:[s.jsxs("div",{className:"field",style:{gridColumn:"1 / -1"},children:[s.jsx("label",{htmlFor:O.preset,children:"Preset"}),s.jsxs("select",{id:O.preset,value:ye,onChange:P=>P.target.value&&v(ql(P.target.value)),children:[!ye&&s.jsx("option",{value:"",children:d.source==="your file"?"Your file":"Edited header"}),s.jsx("optgroup",{label:"Edge cases",children:Vt.filter(P=>P.edge).map(P=>s.jsx("option",{value:P.id,children:P.label},P.id))}),s.jsx("optgroup",{label:"Clean headers from the signature table",children:Vt.filter(P=>!P.edge).map(P=>s.jsx("option",{value:P.id,children:P.label},P.id))})]})]}),s.jsxs("div",{className:"field",children:[s.jsx("label",{htmlFor:O.name,children:"File name"}),s.jsx("input",{id:O.name,className:"text",value:d.name,onChange:P=>G({name:P.target.value||"unnamed"}),disabled:!!d.file})]}),s.jsxs("div",{className:"field",children:[s.jsx("label",{htmlFor:O.size,children:"Size in bytes"}),s.jsx("input",{id:O.size,type:"number",min:"0",value:d.size,onChange:P=>G({size:Math.max(0,Math.min(4e6,+P.target.value||0))}),disabled:!!d.file})]}),s.jsxs("div",{className:"field",style:{gridColumn:"1 / -1"},children:[s.jsx("label",{htmlFor:O.type,children:"MIME type the browser reports"}),s.jsxs("select",{id:O.type,value:d.type,onChange:P=>G({type:P.target.value}),disabled:!!d.file,children:[s.jsx("option",{value:"",children:"none (check skipped)"}),[...new Set(Bt.map(P=>P.mime))].map(P=>s.jsx("option",{value:P,children:P},P))]})]}),s.jsxs("div",{className:"field",style:{gridColumn:"1 / -1"},children:[s.jsx("label",{htmlFor:O.hex,children:"First bytes (hex, editable)"}),s.jsx("textarea",{id:O.hex,className:"hexin mono",rows:"2",value:y,spellCheck:"false",onChange:P=>Q(P.target.value),disabled:!!d.file,"aria-invalid":!rc(y)})]})]}),s.jsxs("label",{htmlFor:O.file,className:`drop ${E?"over":""}`,onDragOver:P=>{P.preventDefault(),W(!0)},onDragLeave:()=>W(!1),onDrop:P=>{P.preventDefault(),W(!1),J(P.dataTransfer.files[0])},children:[s.jsx("b",{children:"Drop a media file here, or choose one"}),s.jsxs("span",{className:"hint",children:["Read locally with FileReader. Only the first ",Tn.readBytes," bytes are examined."]}),s.jsx("input",{id:O.file,type:"file",onChange:P=>J(P.target.files[0])})]})]}),s.jsxs("div",{children:[s.jsx("h3",{children:"Layer by layer"}),s.jsx("ol",{className:"layers",children:L.map((P,B)=>{const[z,Ce]=Yf[P.ok];return s.jsxs("li",{className:z,children:[s.jsx("span",{className:"n",children:B+1}),s.jsxs("div",{children:[s.jsx("b",{children:P.k}),s.jsx("div",{className:"hint",children:P.ok===null?"Skipped: an earlier layer already failed":P.d})]}),s.jsx("span",{className:`pill ${z}`,children:Ce})]},P.k)})}),s.jsx("div",{className:"tip","aria-live":"polite",children:a?s.jsxs(s.Fragment,{children:["validateFile returned ",s.jsxs("b",{children:["valid: ",String(a.valid)]}),a.errors.length?s.jsxs(s.Fragment,{children:[" with ",a.errors.length===1?"message":"messages",": “",a.errors.join("” “"),"”"]}):", no messages",a.valid&&a.errors.length>0&&s.jsx(s.Fragment,{children:" Note: a MIME mismatch is recorded but does not block the file."})]}):"Checking…"})]})]})]})}function Zf({sample:d,setSample:v}){const a=d.name.split(".").pop().toLowerCase(),j=Array.from({length:16},(E,W)=>d.bytes[W]),y=Sn[a],C=new Set;return y==null||y.magicNumbers.forEach(E=>{Ut(d.bytes,{magicNumbers:[E]})&&E.bytes.forEach((W,O)=>C.add(E.offset+O))}),s.jsxs("section",{id:"signatures",className:"card window reveal","data-title":"signatures.hex — the table the check uses",children:[s.jsx("p",{className:"eyebrow",children:"Signature explorer"}),s.jsxs("h2",{children:[Bt.length," signatures decide what gets in. One match is enough."]}),s.jsxs("p",{className:"sub",children:["Each format lists one or more byte patterns. The matcher accepts a file if ",s.jsx("i",{children:"any one"})," of them matches, so for AVI, WAV and WebP the shared four-byte “RIFF” entry alone is enough, and WebM and MKV share the same EBML bytes. Bytes from the header loaded above are coloured green where they match and red where they don’t."]}),s.jsxs("div",{className:"hexview","aria-label":`First 16 bytes of ${d.name}`,children:[j.map((E,W)=>s.jsx("span",{className:E===void 0?"empty":C.has(W)?"match":"",children:E===void 0?"··":E.toString(16).padStart(2,"0").toUpperCase()},W)),s.jsxs("small",{children:[d.name," · offset 0 to 15 · ",y?Ut(d.bytes,y)?`matches .${a}`:`no .${a} signature matches`:`.${a} not in table`]})]}),s.jsx("div",{style:{overflowX:"auto",marginTop:14},children:s.jsxs("table",{children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"Format"}),s.jsx("th",{children:"MIME type"}),s.jsx("th",{children:"Signature entries (offset: bytes)"}),s.jsx("th",{children:"Loaded header"}),s.jsx("th",{})]})}),s.jsx("tbody",{children:Bt.map(E=>{const W=Ut(d.bytes,{magicNumbers:E.signatures});return s.jsxs("tr",{className:E.ext===a?"cur":"",children:[s.jsxs("td",{className:"mono",children:[".",E.ext]}),s.jsx("td",{className:"mono",children:E.mime}),s.jsx("td",{children:E.signatures.map((O,L)=>s.jsxs("div",{className:"sig mono",children:["@",O.offset,": ",O.bytes.map((G,Q)=>{const J=d.bytes[O.offset+Q];return s.jsx("span",{className:J===G?"match":"miss",children:G.toString(16).padStart(2,"0").toUpperCase()},Q)})]},L))}),s.jsx("td",{children:s.jsx("span",{className:`pill ${W?"good":""}`,children:W?"matches":"no match"})}),s.jsx("td",{children:s.jsx("button",{className:"btn ghost sm",onClick:()=>v(ql(E.ext)),children:"Load"})})]},E.ext)})})]})})]})}const qf={"-c:v":"video codec","-c:a":"audio codec","-acodec":"audio codec","-crf":"constant quality","-preset":"encoder speed","-q:a":"audio quality","-q:v":"quality scale","-b:a":"audio bitrate","-b:v":"video bitrate","-vn":"drop video","-vf":"filters","-vframes":"frames to keep","-quality":"WebP quality","-loop":"GIF loop","-gifflags":"GIF options"};function Jf(){var O;const[d,v]=le.useState(Ql[0].value),[a,j]=le.useState("mkv"),y=le.useId(),C=pc(`input.${a}`,`output.${d}`,d),E=C.indexOf("-crf")>=0?C[C.indexOf("-crf")+1]:null,W=[];for(let L=2;L<C.length-1;L++)if(C[L].startsWith("-")){const G=(O=C[L+1])!=null&&O.startsWith("-")||L+1===C.length-1?"":C[L+1];W.push([C[L],G]),G&&L++}return s.jsxs("section",{id:"ffmpeg",className:"card window reveal","data-title":"ffmpeg-args.sh — buildFFmpegArgs()",children:[s.jsxs("div",{className:"head",children:[s.jsxs("div",{children:[s.jsx("p",{className:"eyebrow",children:"Command builder"}),s.jsx("h2",{children:"Pick an output and see the exact command the app runs."}),s.jsxs("p",{className:"sub",children:["Generated by the app’s own ",s.jsx("a",{href:Gt("src/utils/ffmpeg-args.js"),children:s.jsx("code",{children:"buildFFmpegArgs()"})}),". The settings are fixed per format: the app’s quality slider (default CRF ",Bi,") and its ",Df.join(" / ")," preset buttons are not passed in."]})]}),s.jsxs("div",{className:"field",style:{minWidth:160},children:[s.jsx("label",{htmlFor:y,children:"Input file type"}),s.jsx("select",{id:y,value:a,onChange:L=>j(L.target.value),children:Bt.map(L=>s.jsxs("option",{value:L.ext,children:[".",L.ext]},L.ext))})]})]}),s.jsx("div",{className:"seg wrapseg",role:"group","aria-label":"Output format",children:Ql.map(L=>s.jsx("button",{"aria-pressed":d===L.value,onClick:()=>v(L.value),children:L.label},L.value))}),s.jsxs("pre",{className:"cmd","aria-live":"polite",children:[s.jsx("span",{className:"dim",children:"$ "}),"ffmpeg ",C.map((L,G)=>s.jsxs("span",{className:L.startsWith("-")?"flag":"",children:[L," "]},G))]}),s.jsxs("div",{className:"grid2",children:[s.jsx("div",{style:{overflowX:"auto"},children:s.jsxs("table",{children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"Flag"}),s.jsx("th",{children:"Value"}),s.jsx("th",{children:"Meaning"})]})}),s.jsx("tbody",{children:W.map(([L,G])=>s.jsxs("tr",{children:[s.jsx("td",{className:"mono",children:L}),s.jsx("td",{className:"mono",children:G||"—"}),s.jsx("td",{children:qf[L]??""})]},L))})]})}),s.jsxs("div",{className:"tiles",style:{gridTemplateColumns:"1fr 1fr",marginTop:0},children:[s.jsxs("div",{className:"tile",children:[s.jsx("div",{className:"num mono-num",children:Pf(d)}),s.jsxs("div",{className:"cap",children:["MIME type of the download (",s.jsx("code",{children:"getMimeType"}),")"]})]}),s.jsxs("div",{className:"tile",children:[s.jsx("div",{className:"num",children:E??"none"}),s.jsx("div",{className:"cap",children:E?`CRF in the command, while the slider shows ${Bi}`:`No CRF flag for ${d}; the slider (${Bi}) has no effect here`})]}),s.jsxs("div",{className:"tile",children:[s.jsx("div",{className:"num",children:C.length}),s.jsxs("div",{className:"cap",children:["arguments in the list passed to ",s.jsx("code",{children:"ffmpeg.exec"})]})]}),s.jsxs("div",{className:"tile",children:[s.jsx("div",{className:"num",children:C.includes("copy")?"copy":"encode"}),s.jsx("div",{className:"cap",children:C.includes("copy")?"streams copied as they are: fast, but the input codecs must fit the container":"streams decoded and encoded again"})]})]})]})]})}function ep(){const[d,v]=le.useState("video"),[a,j]=le.useState(Math.log10(750*1024**2)),[y,C]=le.useState(null),E=Math.round(10**a),W={video:"mkv",audio:"flac",image:"png"}[d],O=rn[d];le.useEffect(()=>{let z=!0;const Ce=mc(Vt.find(Ee=>Ee.id===W));return Promise.resolve(dc({name:`sample.${W}`,size:E,type:"",slice:(Ee,Ve)=>Ce.slice(Ee,Ve)})).then(Ee=>z&&C(Ee)),()=>{z=!1}},[E,W]);const L=460,G=150,Q=52,J=16,ye=3,P=Math.log10(4*1024**3),B=z=>Q+(Math.log10(z)-ye)/(P-ye)*(L-Q-J);return s.jsxs("section",{id:"limits",className:"card window reveal","data-title":"limits.calc — MAX_FILE_SIZES",children:[s.jsx("p",{className:"eyebrow",children:"Size-limit calculator"}),s.jsxs("h2",{children:["Will this file fit? The limits are ",tn(rn.video),", ",tn(rn.audio)," and ",tn(rn.image),"."]}),s.jsxs("p",{className:"sub",children:["The verdict comes from ",s.jsx("code",{children:"validateFile()"})," itself, given a valid ",W.toUpperCase()," header and the size you choose. The code’s comment ties the video cap to WebAssembly memory; no memory test in the repo backs the exact figure."]}),s.jsxs("div",{className:"grid2",style:{marginTop:14},children:[s.jsxs("div",{children:[s.jsx("div",{className:"seg",role:"group","aria-label":"Media type",children:ac.map(z=>s.jsx("button",{"aria-pressed":d===z,onClick:()=>v(z),children:z},z))}),s.jsx("div",{className:"controls",style:{gridTemplateColumns:"1fr",marginTop:14},children:s.jsx(Hf,{label:"File size",value:a,min:3,max:P,step:.005,onChange:j,show:tn(E)})}),s.jsxs("div",{className:"tiles",style:{gridTemplateColumns:"1fr 1fr",marginTop:0},children:[s.jsxs("div",{className:"tile",children:[s.jsx("div",{className:"num",style:{color:y!=null&&y.valid?"var(--good)":"var(--bad)"},children:y?y.valid?"Passes":"Rejected":"…"}),s.jsx("div",{className:"cap",children:(y==null?void 0:y.errors[0])??`within the ${d} limit`})]}),s.jsxs("div",{className:"tile",children:[s.jsxs("div",{className:"num",children:[(E/O*100).toFixed(E/O<.1?2:0),"%"]}),s.jsxs("div",{className:"cap",children:["of the ",tn(O)," ",d," limit"]})]})]})]}),s.jsxs("svg",{className:"chart",viewBox:`0 0 ${L} ${G}`,role:"img","aria-label":"File size against the three limits on a log scale",children:[[1024,1024**2,1024**3].map(z=>s.jsxs("g",{children:[s.jsx("line",{className:"axis",x1:B(z),x2:B(z),y1:8,y2:G-26}),s.jsx("text",{x:B(z),y:G-8,textAnchor:"middle",children:tn(z)})]},z)),ac.map((z,Ce)=>s.jsxs("g",{children:[s.jsx("text",{x:Q-8,y:30+Ce*34,textAnchor:"end",children:z}),s.jsx("rect",{x:Q,y:18+Ce*34,width:B(rn[z])-Q,height:16,rx:8,fill:z===d?"var(--primary)":"var(--grid)",opacity:z===d?.85:1})]},z)),s.jsx("line",{x1:B(E),x2:B(E),y1:10,y2:G-26,stroke:y!=null&&y.valid?"var(--good)":"var(--bad)",strokeWidth:"2.5"})]})]})]})}function np(){const d=Kl["connect-src"].filter(a=>a.startsWith("http")),v=[["Your file","stays on your device"],["validateFile()",`${Tn.layers} layers, ${Tn.readBytes} B header`],["ffmpeg.wasm","runs in a Web Worker"],["Blob URL","download from memory"]];return s.jsxs("section",{id:"pipeline",className:"card window reveal","data-title":"pipeline.md — where your file goes",children:[s.jsx("p",{className:"eyebrow",children:"Privacy architecture"}),s.jsx("h2",{children:"The file never leaves the page. One download comes in: the ffmpeg core."}),s.jsxs("p",{className:"sub",children:["The Content Security Policy in ",s.jsx("a",{href:Gt("index.html"),children:s.jsx("code",{children:"index.html"})})," allows network requests only to the page’s own origin and ",d.map(a=>s.jsx("code",{children:a},a)),", which serves the ffmpeg core (",s.jsx("span",{className:"mono",children:Wf.replace("https://","")}),"). ffmpeg.wasm needs cross-origin isolation, which GitHub Pages can’t set as a header, so ",s.jsx("code",{children:"coi-serviceworker.js"})," adds it."]}),s.jsxs("div",{className:"flow",role:"img","aria-label":"Data flow: your file, validateFile, ffmpeg.wasm in a worker, Blob URL download, all inside the browser tab; the only outbound request is the ffmpeg core",children:[s.jsx("span",{className:"zone",children:"Inside your browser tab"}),v.map(([a,j],y)=>s.jsxs("div",{className:`step ${y===2?"core":""}`,children:[s.jsx("b",{children:a}),s.jsx("small",{children:j})]},a))]}),s.jsxs("p",{className:"inbound",children:[s.jsx("span",{"aria-hidden":"true",children:"↓"})," Only inbound download: the ffmpeg core from ",d.map(a=>s.jsx("code",{children:a.replace("https://","")},a))," (CSP ",s.jsx("code",{children:"connect-src"}),"), into the ffmpeg.wasm step."]}),s.jsxs("p",{className:"hint",children:["The page registers ",$i===1?"one service worker, the isolation shim, which also caches responses for offline use":`${$i} service workers at the same scope, so one replaces the other`,"; offline use has not been tested."]})]})}function tp(){const d=et.video===Rn.video&&et.audio===Rn.audio&&et.image===Rn.image,v=Ut(Vt.find(C=>C.id==="wav-as-avi").bytes,Sn.avi),a=[{c:"Files never leave your device",w:"README",e:`CSP connect-src allows only 'self' and ${Kl["connect-src"].filter(C=>C.startsWith("http")).join(", ")} (the ffmpeg core). No upload code exists in src/.`,s:"verified"},{c:`Input formats: ${et.video} video, ${et.audio} audio, ${et.image} image`,w:"README table",e:`The validator accepts ${Rn.video} / ${Rn.audio} / ${Rn.image}. Earlier README versions also listed MOV, FLV, WMV, MPEG, OGG, WMA, M4A, OPUS and TIFF, which the check rejects; corrected on this branch.`,s:d?"verified":"contradicted"},{c:"Magic-number verification",w:"README, security.js",e:`Implemented, but entries are alternatives: a WAV header named .avi ${v?"passes":"fails"} and WebM and MKV are indistinguishable.`,s:"partly"},{c:"Adjustable quality (CRF, presets)",w:"App UI",e:lc?"The builder reads the UI settings.":`buildFFmpegArgs never reads the slider (default ${Bi}) or presets; MP4 is fixed at CRF ${Vf}.`,s:lc?"verified":"contradicted"},{c:"Strict CSP",w:"index.html",e:`script-src includes 'unsafe-inline'; index.html has ${Uf} inline <script> blocks. README wording corrected on this branch.`,s:Kl["script-src"].includes("'unsafe-inline'")?"partly":"verified"},{c:"Sanitised file names",w:"security.js",e:sc?'sanitizeFileName strips "..", path separators and control characters before the name is used.':"Not found.",s:sc?"verified":"contradicted"},{c:"Offline capability (PWA)",w:"README",e:$i===1?"Only coi-serviceworker.js registers; it caches responses and falls back to the cache offline. No offline test is recorded.":`${$i} service workers register at one scope, so only one controls the page at a time.`,s:"unclear"},{c:"WCAG 2.2 AAA, ISO/IEC 27001, EN 301 549, GDPR Art. 32",w:"README, code comments",e:"No axe, Lighthouse, contrast or audit report is committed; the certification documents contain no test evidence.",s:"asserted"},{c:"Conversion speed",w:"README table",e:`Recorded as ${et.speed}. No timed run exists.`,s:"unmeasured"},{c:"src/utils/wasm-loader.js",w:"repo",e:oc?"Imported.":"Not imported anywhere: dead code (kept, flagged).",s:oc?"verified":"unused"}],j={verified:["good","Verified in code"],contradicted:["bad","Contradicted by code"],partly:["warn","Partly true"],unclear:["warn","Unclear"],asserted:["warn","Asserted only"],unmeasured:["","Not measured"],unused:["warn","Unused code"]},y=a.reduce((C,E)=>({...C,[E.s]:(C[E.s]||0)+1}),{});return s.jsxs("section",{id:"claims",className:"card window reveal","data-title":"claims.audit — README against the code",children:[s.jsx("p",{className:"eyebrow",children:"Claims audit"}),s.jsxs("h2",{children:[a.length," claims checked: ",y.verified||0," hold up in code, ",(y.contradicted||0)+(y.partly||0)," don’t fully."]}),s.jsx("p",{className:"sub",children:"Each status is computed when the page is built, from the source files, so it changes if the code changes. Where the README was wrong, it has been corrected on this branch and the row says so."}),s.jsx("div",{style:{overflowX:"auto",marginTop:12},children:s.jsxs("table",{children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"Claim"}),s.jsx("th",{className:"where",children:"Where"}),s.jsx("th",{children:"What the code shows"}),s.jsx("th",{children:"Status"})]})}),s.jsx("tbody",{children:a.map(C=>s.jsxs("tr",{children:[s.jsx("td",{children:s.jsx("b",{children:C.c})}),s.jsx("td",{className:"hint where",children:C.w}),s.jsx("td",{children:C.e}),s.jsx("td",{children:s.jsx("span",{className:`pill ${j[C.s][0]}`,children:j[C.s][1]})})]},C.c))})]})})]})}function rp(){const d=[["src/utils/security.js","security.js","File check and signature table"],["src/utils/ffmpeg-args.js","ffmpeg-args.js","Command builder and MIME types"],["index.html","index.html","CSP and service workers"],["test/security.test.mjs","Smoke tests","npm test, no dependencies"],["site/src/validator.check.mjs","Known-answer check","Runs before every dashboard build"],["docs/research-review.md","Engineering review","Graded rubric and open gaps"]];return s.jsxs("section",{id:"receipts",className:"card window reveal","data-title":"receipts — what is and isn’t measured",children:[s.jsx("p",{className:"eyebrow",children:"Receipts and limits"}),s.jsx("h2",{children:"What this page can show, and what nobody has measured yet."}),s.jsxs("div",{className:"grid2",style:{marginTop:16},children:[s.jsxs("div",{className:"tile",children:[s.jsx("h3",{children:"Not measured"}),s.jsxs("p",{className:"hint",style:{margin:0,fontSize:13},children:["Conversion speed (",et.speed,"), memory use near the ",tn(rn.video)," video cap, output quality per format, and accessibility conformance. The dashboard shows none of these as numbers."]})]}),s.jsxs("div",{className:"tile",children:[s.jsx("h3",{children:"Why no conversion runs here"}),s.jsxs("p",{className:"hint",style:{margin:0,fontSize:13},children:["ffmpeg.wasm needs cross-origin isolation and a large core download, so this page links to ",s.jsx("a",{href:Zl,children:"the real app"})," instead of imitating a run."]})]}),s.jsxs("div",{className:"tile",children:[s.jsx("h3",{children:"Scope of the file check"}),s.jsxs("p",{className:"hint",style:{margin:0,fontSize:13},children:["It is a type filter, not malware scanning: it reads ",Tn.readBytes," bytes and trusts the rest. The edge cases above are observed behaviour of this code, not tested exploits."]})]}),s.jsxs("div",{className:"tile",children:[s.jsx("h3",{children:"Reproduce"}),s.jsxs("p",{className:"hint",style:{margin:0,fontSize:13},children:[s.jsx("code",{children:"npm test"})," at the repo root; ",s.jsx("code",{children:"cd site && npm ci && npm run build"})," reruns the known-answer check, then builds this page."]})]})]}),s.jsx("div",{className:"docs",style:{marginTop:20},children:d.map(([v,a,j])=>s.jsxs("a",{href:Gt(v),children:[s.jsx("b",{children:a}),s.jsx("small",{children:j})]},v))})]})}Sf.createRoot(document.getElementById("root")).render(s.jsx(Qf,{}));
