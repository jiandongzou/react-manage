import{d as R,e as L,b as De,c as W,_ as je}from"./@babel-9367d27f.js";import{n as he,t as we,g as I,a as ye,v as Ye,b as re}from"./@rc-component-47431e57.js";import{c as ue}from"./classnames-f3eb6505.js";import{B as ze,t as Ge}from"./rc-input-7d7eb8fa.js";import{r}from"./react-16261f20.js";import{w as Je,l as j,H as Qe,m as Ve,I as te}from"./rc-util-8ac52126.js";function Xe(e,i){var u=r.useRef(null);function y(){try{var v=e.selectionStart,g=e.selectionEnd,c=e.value,N=c.substring(0,v),p=c.substring(g);u.current={start:v,end:g,value:c,beforeTxt:N,afterTxt:p}}catch{}}function d(){if(e&&u.current&&i)try{var v=e.value,g=u.current,c=g.beforeTxt,N=g.afterTxt,p=g.start,l=v.length;if(v.endsWith(N))l=v.length-u.current.afterTxt.length;else if(v.startsWith(c))l=c.length;else{var b=c[p-1],f=v.indexOf(b,p-1);f!==-1&&(l=f+1)}e.setSelectionRange(l,l)}catch(m){Je(!1,"Something warning of cursor restore. Please fire issue about this: ".concat(m.message))}}return[y,d]}var Ze=200,ea=600;function aa(e){var i=e.prefixCls,u=e.upNode,y=e.downNode,d=e.upDisabled,v=e.downDisabled,g=e.onStep,c=r.useRef(),N=r.useRef([]),p=r.useRef();p.current=g;var l=function(){clearTimeout(c.current)},b=function(E,h){E.preventDefault(),l(),p.current(h);function $(){p.current(h),c.current=setTimeout($,Ze)}c.current=setTimeout($,ea)};r.useEffect(function(){return function(){l(),N.current.forEach(function(w){return j.cancel(w)})}},[]);var f=Qe();if(f)return null;var m="".concat(i,"-handler"),x=ue(m,"".concat(m,"-up"),R({},"".concat(m,"-up-disabled"),d)),B=ue(m,"".concat(m,"-down"),R({},"".concat(m,"-down-disabled"),v)),A=function(){return N.current.push(j(l))},D={unselectable:"on",role:"button",onMouseUp:A,onMouseLeave:A};return r.createElement("div",{className:"".concat(m,"-wrap")},r.createElement("span",L({},D,{onMouseDown:function(E){b(E,!0)},"aria-label":"Increase Value","aria-disabled":d,className:x}),u||r.createElement("span",{unselectable:"on",className:"".concat(i,"-handler-up-inner")})),r.createElement("span",L({},D,{onMouseDown:function(E){b(E,!1)},"aria-label":"Decrease Value","aria-disabled":v,className:B}),y||r.createElement("span",{unselectable:"on",className:"".concat(i,"-handler-down-inner")})))}function Ce(e){var i=typeof e=="number"?he(e):we(e).fullStr,u=i.includes(".");return u?we(i.replace(/(\d)\.(\d)/g,"$1$2.")).fullStr:e+"0"}const na=function(){var e=r.useRef(0),i=function(){j.cancel(e.current)};return r.useEffect(function(){return i},[]),function(u){i(),e.current=j(function(){u()})}};var ra=["prefixCls","className","style","min","max","step","defaultValue","value","disabled","readOnly","upHandler","downHandler","keyboard","controls","classNames","stringMode","parser","formatter","precision","decimalSeparator","onChange","onInput","onPressEnter","onStep"],ta=["disabled","style","prefixCls","value","prefix","suffix","addonBefore","addonAfter","classes","className","classNames"],Ee=function(i,u){return i||u.isEmpty()?u.toString():u.toNumber()},Re=function(i){var u=I(i);return u.isInvalidate()?null:u},ua=r.forwardRef(function(e,i){var u,y=e.prefixCls,d=y===void 0?"rc-input-number":y,v=e.className,g=e.style,c=e.min,N=e.max,p=e.step,l=p===void 0?1:p,b=e.defaultValue,f=e.value,m=e.disabled,x=e.readOnly,B=e.upHandler,A=e.downHandler,D=e.keyboard,w=e.controls,E=w===void 0?!0:w,h=e.classNames,$=e.stringMode,O=e.parser,F=e.formatter,V=e.precision,M=e.decimalSeparator,Y=e.onChange,z=e.onInput,G=e.onPressEnter,J=e.onStep,Me=De(e,ra),se="".concat(d,"-input"),T=r.useRef(null),_e=r.useState(!1),oe=W(_e,2),le=oe[0],ie=oe[1],C=r.useRef(!1),H=r.useRef(!1),q=r.useRef(!1),Ue=r.useState(function(){return I(f??b)}),ce=W(Ue,2),o=ce[0],fe=ce[1];function Be(n){f===void 0&&fe(n)}var Q=r.useCallback(function(n,a){if(!a)return V>=0?V:Math.max(ye(n),ye(l))},[V,l]),X=r.useCallback(function(n){var a=String(n);if(O)return O(a);var s=a;return M&&(s=s.replace(M,".")),s.replace(/[^\w.-]+/g,"")},[O,M]),Z=r.useRef(""),de=r.useCallback(function(n,a){if(F)return F(n,{userTyping:a,input:String(Z.current)});var s=typeof n=="number"?he(n):n;if(!a){var t=Q(s,a);if(Ye(s)&&(M||t>=0)){var S=M||".";s=re(s,S,t)}}return s},[F,Q,M]),Ae=r.useState(function(){var n=b??f;return o.isInvalidate()&&["string","number"].includes(je(n))?Number.isNaN(n)?"":n:de(o.toString(),!1)}),ve=W(Ae,2),K=ve[0],me=ve[1];Z.current=K;function P(n,a){me(de(n.isInvalidate()?n.toString(!1):n.toString(!a),a))}var _=r.useMemo(function(){return Re(N)},[N,V]),U=r.useMemo(function(){return Re(c)},[c,V]),pe=r.useMemo(function(){return!_||!o||o.isInvalidate()?!1:_.lessEquals(o)},[_,o]),ge=r.useMemo(function(){return!U||!o||o.isInvalidate()?!1:o.lessEquals(U)},[U,o]),$e=Xe(T.current,le),Ne=W($e,2),Fe=Ne[0],He=Ne[1],be=function(a){return _&&!a.lessEquals(_)?_:U&&!U.lessEquals(a)?U:null},ee=function(a){return!be(a)},ae=function(a,s){var t=a,S=ee(t)||t.isEmpty();if(!t.isEmpty()&&!s&&(t=be(t)||t,S=!0),!x&&!m&&S){var k=t.toString(),ne=Q(k,s);return ne>=0&&(t=I(re(k,".",ne)),ee(t)||(t=I(re(k,".",ne,!0)))),t.equals(o)||(Be(t),Y==null||Y(t.isEmpty()?null:Ee($,t)),f===void 0&&P(t,s)),t}return o},Ke=na(),Se=function n(a){if(Fe(),Z.current=a,me(a),!H.current){var s=X(a),t=I(s);t.isNaN()||ae(t,!0)}z==null||z(a),Ke(function(){var S=a;O||(S=a.replace(/。/g,".")),S!==a&&n(S)})},Pe=function(){H.current=!0},ke=function(){H.current=!1,Se(T.current.value)},Oe=function(a){Se(a.target.value)},Ie=function(a){var s;if(!(a&&pe||!a&&ge)){C.current=!1;var t=I(q.current?Ce(l):l);a||(t=t.negate());var S=(o||I(0)).add(t.toString()),k=ae(S,!1);J==null||J(Ee($,k),{offset:q.current?Ce(l):l,type:a?"up":"down"}),(s=T.current)===null||s===void 0||s.focus()}},xe=function(a){var s=I(X(K)),t=s;s.isNaN()?t=o:t=ae(s,a),f!==void 0?P(o,!1):t.isNaN()||P(t,!1)},Te=function(){C.current=!0},qe=function(a){var s=a.key,t=a.shiftKey;C.current=!0,q.current=t,s==="Enter"&&(H.current||(C.current=!1),xe(!1),G==null||G(a)),D!==!1&&!H.current&&["Up","ArrowUp","Down","ArrowDown"].includes(s)&&(Ie(s==="Up"||s==="ArrowUp"),a.preventDefault())},We=function(){C.current=!1,q.current=!1},Le=function(){xe(!1),ie(!1),C.current=!1};return te(function(){o.isInvalidate()||P(o,!1)},[V]),te(function(){var n=I(f);fe(n);var a=I(X(K));(!n.equals(a)||!C.current||F)&&P(n,C.current)},[f]),te(function(){F&&He()},[K]),r.createElement("div",{className:ue(d,h==null?void 0:h.input,v,(u={},R(u,"".concat(d,"-focused"),le),R(u,"".concat(d,"-disabled"),m),R(u,"".concat(d,"-readonly"),x),R(u,"".concat(d,"-not-a-number"),o.isNaN()),R(u,"".concat(d,"-out-of-range"),!o.isInvalidate()&&!ee(o)),u)),style:g,onFocus:function(){ie(!0)},onBlur:Le,onKeyDown:qe,onKeyUp:We,onCompositionStart:Pe,onCompositionEnd:ke,onBeforeInput:Te},E&&r.createElement(aa,{prefixCls:d,upNode:B,downNode:A,upDisabled:pe,downDisabled:ge,onStep:Ie}),r.createElement("div",{className:"".concat(se,"-wrap")},r.createElement("input",L({autoComplete:"off",role:"spinbutton","aria-valuemin":c,"aria-valuemax":N,"aria-valuenow":o.isInvalidate()?null:o.toString(),step:l},Me,{ref:Ve(T,i),className:se,value:K,onChange:Oe,disabled:m,readOnly:x}))))}),sa=r.forwardRef(function(e,i){var u=e.disabled,y=e.style,d=e.prefixCls,v=e.value,g=e.prefix,c=e.suffix,N=e.addonBefore,p=e.addonAfter,l=e.classes,b=e.className,f=e.classNames,m=De(e,ta),x=r.useRef(null),B=function(D){x.current&&Ge(x.current,D)};return r.createElement(ze,{inputElement:r.createElement(ua,L({prefixCls:d,disabled:u,classNames:f,ref:Ve(x,i)},m)),className:b,triggerFocus:B,prefixCls:d,value:v,disabled:u,style:y,prefix:g,suffix:c,addonAfter:p,addonBefore:N,classes:l,classNames:f,components:{affixWrapper:"div",groupWrapper:"div",wrapper:"div",groupAddon:"div"}})});sa.displayName="InputNumber";export{sa as I};