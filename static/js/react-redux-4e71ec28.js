import{r as ke}from"./react-dom-c85821af.js";import{r as u}from"./react-16261f20.js";import{h as ye}from"./hoist-non-react-statics-2a75d658.js";import{w as _e,s as Le}from"./use-sync-external-store-78eeb758.js";import{s as xe,e as T}from"./@babel-9367d27f.js";function Ie(e){e()}let we=Ie;const Ue=e=>we=e,Be=()=>we,Se=Symbol.for("react-redux-context"),be=typeof globalThis<"u"?globalThis:{};function Te(){var e;if(!u.createContext)return{};const t=(e=be[Se])!=null?e:be[Se]=new Map;let n=t.get(u.createContext);return n||(n=u.createContext(null),t.set(u.createContext,n)),n}const I=Te();function ge(e=I){return function(){return u.useContext(e)}}const Ve=ge(),Pe=()=>{throw new Error("uSES not initialized!")};let Me=Pe;const ze=e=>{Me=e},Ae=(e,t)=>e===t;function We(e=I){const t=e===I?Ve:ge(e);return function(o,s={}){const{equalityFn:r=Ae,stabilityCheck:a=void 0,noopCheck:d=void 0}=typeof s=="function"?{equalityFn:s}:s,{store:l,subscription:c,getServerState:f,stabilityCheck:p,noopCheck:y}=t();u.useRef(!0);const M=u.useCallback({[o.name](F){return o(F)}}[o.name],[o,p,a]),C=Me(c.addNestedSub,l.getState,f||l.getState,M,r);return u.useDebugValue(C),C}}const bt=We();var ve={exports:{}},i={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ce=Symbol.for("react.element"),ue=Symbol.for("react.portal"),z=Symbol.for("react.fragment"),A=Symbol.for("react.strict_mode"),W=Symbol.for("react.profiler"),q=Symbol.for("react.provider"),H=Symbol.for("react.context"),qe=Symbol.for("react.server_context"),K=Symbol.for("react.forward_ref"),j=Symbol.for("react.suspense"),Y=Symbol.for("react.suspense_list"),G=Symbol.for("react.memo"),J=Symbol.for("react.lazy"),He=Symbol.for("react.offscreen"),Re;Re=Symbol.for("react.module.reference");function h(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case ce:switch(e=e.type,e){case z:case W:case A:case j:case Y:return e;default:switch(e=e&&e.$$typeof,e){case qe:case H:case K:case J:case G:case q:return e;default:return t}}case ue:return t}}}i.ContextConsumer=H;i.ContextProvider=q;i.Element=ce;i.ForwardRef=K;i.Fragment=z;i.Lazy=J;i.Memo=G;i.Portal=ue;i.Profiler=W;i.StrictMode=A;i.Suspense=j;i.SuspenseList=Y;i.isAsyncMode=function(){return!1};i.isConcurrentMode=function(){return!1};i.isContextConsumer=function(e){return h(e)===H};i.isContextProvider=function(e){return h(e)===q};i.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===ce};i.isForwardRef=function(e){return h(e)===K};i.isFragment=function(e){return h(e)===z};i.isLazy=function(e){return h(e)===J};i.isMemo=function(e){return h(e)===G};i.isPortal=function(e){return h(e)===ue};i.isProfiler=function(e){return h(e)===W};i.isStrictMode=function(e){return h(e)===A};i.isSuspense=function(e){return h(e)===j};i.isSuspenseList=function(e){return h(e)===Y};i.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===z||e===W||e===A||e===j||e===Y||e===He||typeof e=="object"&&e!==null&&(e.$$typeof===J||e.$$typeof===G||e.$$typeof===q||e.$$typeof===H||e.$$typeof===K||e.$$typeof===Re||e.getModuleId!==void 0)};i.typeOf=h;ve.exports=i;var Ke=ve.exports;const je=["initMapStateToProps","initMapDispatchToProps","initMergeProps"];function Ye(e,t,n,o,{areStatesEqual:s,areOwnPropsEqual:r,areStatePropsEqual:a}){let d=!1,l,c,f,p,y;function M(b,m){return l=b,c=m,f=e(l,c),p=t(o,c),y=n(f,p,c),d=!0,y}function C(){return f=e(l,c),t.dependsOnOwnProps&&(p=t(o,c)),y=n(f,p,c),y}function F(){return e.dependsOnOwnProps&&(f=e(l,c)),t.dependsOnOwnProps&&(p=t(o,c)),y=n(f,p,c),y}function S(){const b=e(l,c),m=!a(b,f);return f=b,m&&(y=n(f,p,c)),y}function N(b,m){const v=!r(m,c),Q=!s(b,l,m,c);return l=b,c=m,v&&Q?C():v?F():Q?S():y}return function(m,v){return d?N(m,v):M(m,v)}}function Ge(e,t){let{initMapStateToProps:n,initMapDispatchToProps:o,initMergeProps:s}=t,r=xe(t,je);const a=n(e,r),d=o(e,r),l=s(e,r);return Ye(a,d,l,e,r)}function Je(e,t){const n={};for(const o in e){const s=e[o];typeof s=="function"&&(n[o]=(...r)=>t(s(...r)))}return n}function se(e){return function(n){const o=e(n);function s(){return o}return s.dependsOnOwnProps=!1,s}}function me(e){return e.dependsOnOwnProps?!!e.dependsOnOwnProps:e.length!==1}function Ee(e,t){return function(o,{displayName:s}){const r=function(d,l){return r.dependsOnOwnProps?r.mapToProps(d,l):r.mapToProps(d,void 0)};return r.dependsOnOwnProps=!0,r.mapToProps=function(d,l){r.mapToProps=e,r.dependsOnOwnProps=me(e);let c=r(d,l);return typeof c=="function"&&(r.mapToProps=c,r.dependsOnOwnProps=me(c),c=r(d,l)),c},r}}function ie(e,t){return(n,o)=>{throw new Error(`Invalid value of type ${typeof e} for ${t} argument when connecting component ${o.wrappedComponentName}.`)}}function Qe(e){return e&&typeof e=="object"?se(t=>Je(e,t)):e?typeof e=="function"?Ee(e):ie(e,"mapDispatchToProps"):se(t=>({dispatch:t}))}function Xe(e){return e?typeof e=="function"?Ee(e):ie(e,"mapStateToProps"):se(()=>({}))}function Ze(e,t,n){return T({},n,e,t)}function De(e){return function(n,{displayName:o,areMergedPropsEqual:s}){let r=!1,a;return function(l,c,f){const p=e(l,c,f);return r?s(p,a)||(a=p):(r=!0,a=p),a}}}function et(e){return e?typeof e=="function"?De(e):ie(e,"mergeProps"):()=>Ze}function tt(){const e=Be();let t=null,n=null;return{clear(){t=null,n=null},notify(){e(()=>{let o=t;for(;o;)o.callback(),o=o.next})},get(){let o=[],s=t;for(;s;)o.push(s),s=s.next;return o},subscribe(o){let s=!0,r=n={callback:o,next:null,prev:n};return r.prev?r.prev.next=r:t=r,function(){!s||t===null||(s=!1,r.next?r.next.prev=r.prev:n=r.prev,r.prev?r.prev.next=r.next:t=r.next)}}}}const he={notify(){},get:()=>[]};function Ne(e,t){let n,o=he;function s(p){return l(),o.subscribe(p)}function r(){o.notify()}function a(){f.onStateChange&&f.onStateChange()}function d(){return!!n}function l(){n||(n=t?t.addNestedSub(a):e.subscribe(a),o=tt())}function c(){n&&(n(),n=void 0,o.clear(),o=he)}const f={addNestedSub:s,notifyNestedSubs:r,handleChangeWrapper:a,isSubscribed:d,trySubscribe:l,tryUnsubscribe:c,getListeners:()=>o};return f}const nt=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",V=nt?u.useLayoutEffect:u.useEffect;function Ce(e,t){return e===t?e!==0||t!==0||1/e===1/t:e!==e&&t!==t}function oe(e,t){if(Ce(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;const n=Object.keys(e),o=Object.keys(t);if(n.length!==o.length)return!1;for(let s=0;s<n.length;s++)if(!Object.prototype.hasOwnProperty.call(t,n[s])||!Ce(e[n[s]],t[n[s]]))return!1;return!0}const rt=["reactReduxForwardedRef"];let Fe=Pe;const ot=e=>{Fe=e},st=[null,null];function ct(e,t,n){V(()=>e(...t),n)}function ut(e,t,n,o,s,r){e.current=o,n.current=!1,s.current&&(s.current=null,r())}function it(e,t,n,o,s,r,a,d,l,c,f){if(!e)return()=>{};let p=!1,y=null;const M=()=>{if(p||!d.current)return;const F=t.getState();let S,N;try{S=o(F,s.current)}catch(b){N=b,y=b}N||(y=null),S===r.current?a.current||c():(r.current=S,l.current=S,a.current=!0,f())};return n.onStateChange=M,n.trySubscribe(),M(),()=>{if(p=!0,n.tryUnsubscribe(),n.onStateChange=null,y)throw y}}function lt(e,t){return e===t}function mt(e,t,n,{pure:o,areStatesEqual:s=lt,areOwnPropsEqual:r=oe,areStatePropsEqual:a=oe,areMergedPropsEqual:d=oe,forwardRef:l=!1,context:c=I}={}){const f=c,p=Xe(e),y=Qe(t),M=et(n),C=!!e;return S=>{const N=S.displayName||S.name||"Component",b=`Connect(${N})`,m={shouldHandleStateChanges:C,displayName:b,wrappedComponentName:N,WrappedComponent:S,initMapStateToProps:p,initMapDispatchToProps:y,initMergeProps:M,areStatesEqual:s,areStatePropsEqual:a,areOwnPropsEqual:r,areMergedPropsEqual:d};function v(w){const[g,X,R]=u.useMemo(()=>{const{reactReduxForwardedRef:x}=w,L=xe(w,rt);return[w.context,x,L]},[w]),$=u.useMemo(()=>g&&g.Consumer&&Ke.isContextConsumer(u.createElement(g.Consumer,null))?g:f,[g,f]),P=u.useContext($),O=!!w.store&&!!w.store.getState&&!!w.store.dispatch,$e=!!P&&!!P.store,E=O?w.store:P.store,le=$e?P.getServerState:E.getState,Z=u.useMemo(()=>Ge(E.dispatch,m),[E]),[k,ae]=u.useMemo(()=>{if(!C)return st;const x=Ne(E,O?void 0:P.subscription),L=x.notifyNestedSubs.bind(x);return[x,L]},[E,O,P]),fe=u.useMemo(()=>O?P:T({},P,{subscription:k}),[O,P,k]),D=u.useRef(),ee=u.useRef(R),_=u.useRef(),de=u.useRef(!1);u.useRef(!1);const te=u.useRef(!1),ne=u.useRef();V(()=>(te.current=!0,()=>{te.current=!1}),[]);const pe=u.useMemo(()=>()=>_.current&&R===ee.current?_.current:Z(E.getState(),R),[E,R]),Oe=u.useMemo(()=>L=>k?it(C,E,k,Z,ee,D,de,te,_,ae,L):()=>{},[k]);ct(ut,[ee,D,de,R,_,ae]);let B;try{B=Fe(Oe,pe,le?()=>Z(le(),R):pe)}catch(x){throw ne.current&&(x.message+=`
The error may be correlated with this previous error:
${ne.current.stack}

`),x}V(()=>{ne.current=void 0,_.current=void 0,D.current=B});const re=u.useMemo(()=>u.createElement(S,T({},B,{ref:X})),[X,S,B]);return u.useMemo(()=>C?u.createElement($.Provider,{value:fe},re):re,[$,re,fe])}const U=u.memo(v);if(U.WrappedComponent=S,U.displayName=v.displayName=b,l){const g=u.forwardRef(function(R,$){return u.createElement(U,T({},R,{reactReduxForwardedRef:$}))});return g.displayName=b,g.WrappedComponent=S,ye(g,S)}return ye(U,S)}}function ht({store:e,context:t,children:n,serverState:o,stabilityCheck:s="once",noopCheck:r="once"}){const a=u.useMemo(()=>{const c=Ne(e);return{store:e,subscription:c,getServerState:o?()=>o:void 0,stabilityCheck:s,noopCheck:r}},[e,o,s,r]),d=u.useMemo(()=>e.getState(),[e]);V(()=>{const{subscription:c}=a;return c.onStateChange=c.notifyNestedSubs,c.trySubscribe(),d!==e.getState()&&c.notifyNestedSubs(),()=>{c.tryUnsubscribe(),c.onStateChange=void 0}},[a,d]);const l=t||I;return u.createElement(l.Provider,{value:a},n)}ze(_e.useSyncExternalStoreWithSelector);ot(Le.useSyncExternalStore);Ue(ke.unstable_batchedUpdates);export{ht as P,mt as c,bt as u};