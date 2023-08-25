import{_ as p,a as E,q as Se,h as D,c as g,n as ne,o as y}from"./@babel-9367d27f.js";import{r as re}from"./react-is-e8e5dbb3.js";import{r as v,R as te,a as ye}from"./react-16261f20.js";import{R as O,a as we}from"./react-dom-c85821af.js";var T={},Ne=function(n){};function Ae(e,n){}function Re(e,n){}function _e(){T={}}function ae(e,n,r){!n&&!T[r]&&(e(!1,r),T[r]=!0)}function N(e,n){ae(Ae,e,n)}function Me(e,n){ae(Re,e,n)}N.preMessage=Ne;N.resetWarned=_e;N.noteOnce=Me;function F(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function be(e,n){if(!e)return!1;if(e.contains)return e.contains(n);for(var r=n;r;){if(r===e)return!0;r=r.parentNode}return!1}var W="data-rc-order",B="data-rc-priority",Ce="rc-util-key",L=new Map;function ie(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.mark;return n?n.startsWith("data-")?n:"data-".concat(n):Ce}function A(e){if(e.attachTo)return e.attachTo;var n=document.querySelector("head");return n||document.body}function Oe(e){return e==="queue"?"prependQueue":e?"prepend":"append"}function oe(e){return Array.from((L.get(e)||e).children).filter(function(n){return n.tagName==="STYLE"})}function ue(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!F())return null;var r=n.csp,t=n.prepend,a=n.priority,i=a===void 0?0:a,o=Oe(t),s=o==="prependQueue",c=document.createElement("style");c.setAttribute(W,o),s&&i&&c.setAttribute(B,"".concat(i)),r!=null&&r.nonce&&(c.nonce=r==null?void 0:r.nonce),c.innerHTML=e;var f=A(n),d=f.firstChild;if(t){if(s){var l=oe(f).filter(function(m){if(!["prepend","prependQueue"].includes(m.getAttribute(W)))return!1;var _=Number(m.getAttribute(B)||0);return i>=_});if(l.length)return f.insertBefore(c,l[l.length-1].nextSibling),c}f.insertBefore(c,d)}else f.appendChild(c);return c}function se(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=A(n);return oe(r).find(function(t){return t.getAttribute(ie(n))===e})}function sn(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=se(e,n);if(r){var t=A(n);t.removeChild(r)}}function Te(e,n){var r=L.get(e);if(!r||!be(document,r)){var t=ue("",n),a=t.parentNode;L.set(e,a),e.removeChild(t)}}function cn(e,n){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},t=A(r);Te(t,r);var a=se(n,r);if(a){var i,o;if((i=r.csp)!==null&&i!==void 0&&i.nonce&&a.nonce!==((o=r.csp)===null||o===void 0?void 0:o.nonce)){var s;a.nonce=(s=r.csp)===null||s===void 0?void 0:s.nonce}return a.innerHTML!==e&&(a.innerHTML=e),a}var c=ue(e,r);return c.setAttribute(ie(r),n),c}function ce(e){var n;return e==null||(n=e.getRootNode)===null||n===void 0?void 0:n.call(e)}function Le(e){return ce(e)!==(e==null?void 0:e.ownerDocument)}function fn(e){return Le(e)?ce(e):null}function Ue(e,n,r){var t=v.useRef({});return(!("value"in t.current)||r(t.current.condition,n))&&(t.current.value=e(),t.current.condition=n),t.current.value}function Ie(e,n){typeof e=="function"?e(n):p(e)==="object"&&e&&"current"in e&&(e.current=n)}function Pe(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];var t=n.filter(function(a){return a});return t.length<=1?t[0]:function(a){n.forEach(function(i){Ie(i,a)})}}function ln(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return Ue(function(){return Pe.apply(void 0,n)},n,function(t,a){return t.length===a.length&&t.every(function(i,o){return i===a[o]})})}function dn(e){var n,r,t=re.isMemo(e)?e.type.type:e.type;return!(typeof t=="function"&&!((n=t.prototype)!==null&&n!==void 0&&n.render)||typeof e=="function"&&!((r=e.prototype)!==null&&r!==void 0&&r.render))}function V(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=[];return te.Children.forEach(e,function(t){t==null&&!n.keepEmpty||(Array.isArray(t)?r=r.concat(V(t)):re.isFragment(t)&&t.props?r=r.concat(V(t.props.children,n)):r.push(t))}),r}function De(e){return e instanceof HTMLElement||e instanceof SVGElement}function vn(e){return De(e)?e:e instanceof te.Component?O.findDOMNode(e):null}function mn(e,n){var r=E({},e);return Array.isArray(n)&&n.forEach(function(t){delete r[t]}),r}var fe=function(n){return+setTimeout(n,16)},le=function(n){return clearTimeout(n)};typeof window<"u"&&"requestAnimationFrame"in window&&(fe=function(n){return window.requestAnimationFrame(n)},le=function(n){return window.cancelAnimationFrame(n)});var j=0,K=new Map;function de(e){K.delete(e)}var Fe=function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;j+=1;var t=j;function a(i){if(i===0)de(t),n();else{var o=fe(function(){a(i-1)});K.set(t,o)}}return a(r),t};Fe.cancel=function(e){var n=K.get(e);return de(n),le(n)};function pn(e,n){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,t=new Set;function a(i,o){var s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1,c=t.has(i);if(N(!c,"Warning: There may be circular references"),c)return!1;if(i===o)return!0;if(r&&s>1)return!1;t.add(i);var f=s+1;if(Array.isArray(i)){if(!Array.isArray(o)||i.length!==o.length)return!1;for(var d=0;d<i.length;d++)if(!a(i[d],o[d],f))return!1;return!0}if(i&&o&&p(i)==="object"&&p(o)==="object"){var l=Object.keys(i);return l.length!==Object.keys(o).length?!1:l.every(function(m){return a(i[m],o[m],f)})}return!1}return a(e,n)}var G=F()?v.useLayoutEffect:v.useEffect,ve=function(n,r){var t=v.useRef(!0);G(function(){return n(t.current)},r),G(function(){return t.current=!1,function(){t.current=!0}},[])},q=function(n,r){ve(function(t){if(!t)return n()},r)};function U(e,n){for(var r=e,t=0;t<n.length;t+=1){if(r==null)return;r=r[n[t]]}return r}function me(e,n,r,t){if(!n.length)return r;var a=Se(n),i=a[0],o=a.slice(1),s;return!e&&typeof i=="number"?s=[]:Array.isArray(e)?s=D(e):s=E({},e),t&&r===void 0&&o.length===1?delete s[i][o[0]]:s[i]=me(s[i],o,r,t),s}function M(e,n,r){var t=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1;return n.length&&t&&r===void 0&&!U(e,n.slice(0,-1))?e:me(e,n,r,t)}function Ke(e){return p(e)==="object"&&e!==null&&Object.getPrototypeOf(e)===Object.prototype}function z(e){return Array.isArray(e)?[]:{}}var ke=typeof Reflect>"u"?Object.keys:Reflect.ownKeys;function gn(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];var t=z(n[0]);return n.forEach(function(a){function i(o,s){var c=new Set(s),f=U(a,o),d=Array.isArray(f);if(d||Ke(f)){if(!c.has(f)){c.add(f);var l=U(t,o);d?t=M(t,o,[]):(!l||p(l)!=="object")&&(t=M(t,o,z(f))),ke(f).forEach(function(m){i([].concat(D(o),[m]),c)})}}else t=M(t,o,f)}i([])}),t}function Q(e){var n=v.useRef();n.current=e;var r=v.useCallback(function(){for(var t,a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(t=n.current)===null||t===void 0?void 0:t.call.apply(t,[n].concat(i))},[]);return r}function Y(e){var n=v.useRef(!1),r=v.useState(e),t=g(r,2),a=t[0],i=t[1];v.useEffect(function(){return n.current=!1,function(){n.current=!0}},[]);function o(s,c){c&&n.current||i(s)}return[a,o]}function b(e){return e!==void 0}function En(e,n){var r=n||{},t=r.defaultValue,a=r.value,i=r.onChange,o=r.postState,s=Y(function(){return b(a)?a:b(t)?typeof t=="function"?t():t:typeof e=="function"?e():e}),c=g(s,2),f=c[0],d=c[1],l=a!==void 0?a:f,m=o?o(l):l,_=Q(i),ge=Y([l]),k=g(ge,2),x=k[0],Ee=k[1];q(function(){var S=x[0];f!==S&&_(f,S)},[x]),q(function(){b(a)||d(a)},[a]);var he=Q(function(S,H){d(S,H),Ee([l],H)});return[m,he]}var xe=`accept acceptCharset accessKey action allowFullScreen allowTransparency
    alt async autoComplete autoFocus autoPlay capture cellPadding cellSpacing challenge
    charSet checked classID className colSpan cols content contentEditable contextMenu
    controls coords crossOrigin data dateTime default defer dir disabled download draggable
    encType form formAction formEncType formMethod formNoValidate formTarget frameBorder
    headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity
    is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media
    mediaGroup method min minLength multiple muted name noValidate nonce open
    optimum pattern placeholder poster preload radioGroup readOnly rel required
    reversed role rowSpan rows sandbox scope scoped scrolling seamless selected
    shape size sizes span spellCheck src srcDoc srcLang srcSet start step style
    summary tabIndex target title type useMap value width wmode wrap`,He=`onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown
    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick
    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown
    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel
    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough
    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata
    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError`,We="".concat(xe," ").concat(He).split(/[\s\n]+/),Be="aria-",Ve="data-";function $(e,n){return e.indexOf(n)===0}function hn(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,r;n===!1?r={aria:!0,data:!0,attr:!0}:n===!0?r={aria:!0}:r=E({},n);var t={};return Object.keys(e).forEach(function(a){(r.aria&&(a==="role"||$(a,Be))||r.data&&$(a,Ve)||r.attr&&We.includes(a))&&(t[a]=e[a])}),t}var u={MAC_ENTER:3,BACKSPACE:8,TAB:9,NUM_CENTER:12,ENTER:13,SHIFT:16,CTRL:17,ALT:18,PAUSE:19,CAPS_LOCK:20,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,PRINT_SCREEN:44,INSERT:45,DELETE:46,ZERO:48,ONE:49,TWO:50,THREE:51,FOUR:52,FIVE:53,SIX:54,SEVEN:55,EIGHT:56,NINE:57,QUESTION_MARK:63,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,META:91,WIN_KEY_RIGHT:92,CONTEXT_MENU:93,NUM_ZERO:96,NUM_ONE:97,NUM_TWO:98,NUM_THREE:99,NUM_FOUR:100,NUM_FIVE:101,NUM_SIX:102,NUM_SEVEN:103,NUM_EIGHT:104,NUM_NINE:105,NUM_MULTIPLY:106,NUM_PLUS:107,NUM_MINUS:109,NUM_PERIOD:110,NUM_DIVISION:111,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,NUMLOCK:144,SEMICOLON:186,DASH:189,EQUALS:187,COMMA:188,PERIOD:190,SLASH:191,APOSTROPHE:192,SINGLE_QUOTE:222,OPEN_SQUARE_BRACKET:219,BACKSLASH:220,CLOSE_SQUARE_BRACKET:221,WIN_KEY:224,MAC_FF_META:224,WIN_IME:229,isTextModifyingKeyEvent:function(n){var r=n.keyCode;if(n.altKey&&!n.ctrlKey||n.metaKey||r>=u.F1&&r<=u.F12)return!1;switch(r){case u.ALT:case u.CAPS_LOCK:case u.CONTEXT_MENU:case u.CTRL:case u.DOWN:case u.END:case u.ESC:case u.HOME:case u.INSERT:case u.LEFT:case u.MAC_FF_META:case u.META:case u.NUMLOCK:case u.NUM_CENTER:case u.PAGE_DOWN:case u.PAGE_UP:case u.PAUSE:case u.PRINT_SCREEN:case u.RIGHT:case u.SHIFT:case u.UP:case u.WIN_KEY:case u.WIN_KEY_RIGHT:return!1;default:return!0}},isCharacterKey:function(n){if(n>=u.ZERO&&n<=u.NINE||n>=u.NUM_ZERO&&n<=u.NUM_MULTIPLY||n>=u.A&&n<=u.Z||window.navigator.userAgent.indexOf("WebKit")!==-1&&n===0)return!0;switch(n){case u.SPACE:case u.QUESTION_MARK:case u.NUM_PLUS:case u.NUM_MINUS:case u.NUM_PERIOD:case u.NUM_DIVISION:case u.SEMICOLON:case u.DASH:case u.EQUALS:case u.COMMA:case u.PERIOD:case u.SLASH:case u.APOSTROPHE:case u.SINGLE_QUOTE:case u.OPEN_SQUARE_BRACKET:case u.BACKSLASH:case u.CLOSE_SQUARE_BRACKET:return!0;default:return!1}}},h=E({},we),je=h.version,Ge=h.render,qe=h.unmountComponentAtNode,R;try{var ze=Number((je||"").split(".")[0]);ze>=18&&(R=h.createRoot)}catch{}function X(e){var n=h.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;n&&p(n)==="object"&&(n.usingClientEntryPoint=e)}var w="__rc_react_root__";function Qe(e,n){X(!0);var r=n[w]||R(n);X(!1),r.render(e),n[w]=r}function Ye(e,n){Ge(e,n)}function Sn(e,n){if(R){Qe(e,n);return}Ye(e,n)}function $e(e){return I.apply(this,arguments)}function I(){return I=ne(y().mark(function e(n){return y().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Promise.resolve().then(function(){var a;(a=n[w])===null||a===void 0||a.unmount(),delete n[w]}));case 1:case"end":return t.stop()}},e)})),I.apply(this,arguments)}function Xe(e){qe(e)}function yn(e){return P.apply(this,arguments)}function P(){return P=ne(y().mark(function e(n){return y().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(R===void 0){t.next=2;break}return t.abrupt("return",$e(n));case 2:Xe(n);case 3:case"end":return t.stop()}},e)})),P.apply(this,arguments)}const Ze=function(e){if(!e)return!1;if(e instanceof Element){if(e.offsetParent)return!0;if(e.getBBox){var n=e.getBBox(),r=n.width,t=n.height;if(r||t)return!0}if(e.getBoundingClientRect){var a=e.getBoundingClientRect(),i=a.width,o=a.height;if(i||o)return!0}}return!1};var C;function Je(e){if(typeof document>"u")return 0;if(e||C===void 0){var n=document.createElement("div");n.style.width="100%",n.style.height="200px";var r=document.createElement("div"),t=r.style;t.position="absolute",t.top="0",t.left="0",t.pointerEvents="none",t.visibility="hidden",t.width="200px",t.height="150px",t.overflow="hidden",r.appendChild(n),document.body.appendChild(r);var a=n.offsetWidth;r.style.overflow="scroll";var i=n.offsetWidth;a===i&&(i=r.clientWidth),document.body.removeChild(r),C=a-i}return C}function Z(e){var n=e.match(/^(.*)px$/),r=Number(n==null?void 0:n[1]);return Number.isNaN(r)?Je():r}function wn(e){if(typeof document>"u"||!e||!(e instanceof Element))return{width:0,height:0};var n=getComputedStyle(e,"::-webkit-scrollbar"),r=n.width,t=n.height;return{width:Z(r),height:Z(t)}}function en(){var e=E({},ye);return e.useId}var J=0;function Nn(e){var n=v.useState("ssr-id"),r=g(n,2),t=r[0],a=r[1],i=en(),o=i==null?void 0:i();return v.useEffect(function(){if(!i){var s=J;J+=1,a("rc_unique_".concat(s))}},[]),e||o||t}var pe=function(n){if(F()&&window.document.documentElement){var r=Array.isArray(n)?n:[n],t=window.document.documentElement;return r.some(function(a){return a in t.style})}return!1},nn=function(n,r){if(!pe(n))return!1;var t=document.createElement("div"),a=t.style[n];return t.style[n]=r,t.style[n]!==a};function An(e,n){return!Array.isArray(e)&&n!==void 0?nn(e,n):pe(e)}const rn=function(){if(typeof navigator>"u"||typeof window>"u")return!1;var e=navigator.userAgent||navigator.vendor||window.opera;return/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(e==null?void 0:e.substr(0,4))};function ee(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(Ze(e)){var r=e.nodeName.toLowerCase(),t=["input","select","textarea","button"].includes(r)||e.isContentEditable||r==="a"&&!!e.getAttribute("href"),a=e.getAttribute("tabindex"),i=Number(a),o=null;return a&&!Number.isNaN(i)?o=i:t&&o===null&&(o=0),t&&e.disabled&&(o=null),o!==null&&(o>=0||n&&o<0)}return!1}function Rn(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,r=D(e.querySelectorAll("*")).filter(function(t){return ee(t,n)});return ee(e,n)&&r.unshift(e),r}var _n=function(){var n=v.useState(!1),r=g(n,2),t=r[0],a=r[1];return ve(function(){a(rn())},[]),t};function Mn(e){var n=e.getBoundingClientRect(),r=document.documentElement;return{left:n.left+(window.pageXOffset||r.scrollLeft)-(r.clientLeft||document.body.clientLeft||0),top:n.top+(window.pageYOffset||r.scrollTop)-(r.clientTop||document.body.clientTop||0)}}function bn(e,n,r,t){var a=O.unstable_batchedUpdates?function(o){O.unstable_batchedUpdates(r,o)}:r;return e!=null&&e.addEventListener&&e.addEventListener(n,a,t),{remove:function(){e!=null&&e.removeEventListener&&e.removeEventListener(n,a,t)}}}export{Y as A,En as B,hn as C,An as D,be as E,U as F,M as G,_n as H,q as I,Rn as J,u as K,Me as L,bn as M,Je as N,Mn as O,Ue as a,Ae as b,F as c,ve as d,wn as e,ln as f,fn as g,Q as h,pn as i,De as j,Ze as k,Fe as l,Pe as m,Ie as n,rn as o,Nn as p,vn as q,sn as r,dn as s,gn as t,cn as u,Sn as v,N as w,yn as x,V as y,mn as z};
