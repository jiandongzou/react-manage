import{c as M,h as ot,a as U,e as Wr,b as Vt,f as vt,g as ft,d as ce,i as Ht,j as qt}from"./@babel-9367d27f.js";import{r as o,R as Oe}from"./react-16261f20.js";import{r as dt}from"./react-dom-c85821af.js";import{c as fr,d as G,e as Gt,u as Ut,r as gt,s as mr,f as It,h as he,j as ut,k as jt,l as yt,g as lt,m as $t,n as Qt,o as Jt,p as Kt,i as Zt,q as St}from"./rc-util-8ac52126.js";import{c as Ye}from"./classnames-f3eb6505.js";import{R as Tt}from"./rc-resize-observer-f56315fc.js";import{C as Lt}from"./rc-motion-66270194.js";import"./react-is-e8e5dbb3.js";var xt=o.createContext(null),bt=[];function Xt(r,t){var e=o.useState(function(){if(!fr())return null;var y=document.createElement("div");return y}),n=M(e,1),a=n[0],i=o.useRef(!1),l=o.useContext(xt),u=o.useState(bt),c=M(u,2),d=c[0],h=c[1],v=l||(i.current?void 0:function(y){h(function(N){var w=[y].concat(ot(N));return w})});function b(){a.parentElement||document.body.appendChild(a),i.current=!0}function f(){var y;(y=a.parentElement)===null||y===void 0||y.removeChild(a),i.current=!1}return G(function(){return r?l?l(b):b():f(),f},[r]),G(function(){d.length&&(d.forEach(function(y){return y()}),h(bt))},[d]),[a,v]}function Ot(){return document.body.scrollHeight>(window.innerHeight||document.documentElement.clientHeight)&&window.innerWidth>document.body.offsetWidth}var Yt="rc-util-locker-".concat(Date.now()),Nt=0;function pt(r){var t=!!r,e=o.useState(function(){return Nt+=1,"".concat(Yt,"_").concat(Nt)}),n=M(e,1),a=n[0];G(function(){if(t){var i=Gt(document.body).width,l=Ot();Ut(`
html body {
  overflow-y: hidden;
  `.concat(l?"width: calc(100% - ".concat(i,"px);"):"",`
}`),a)}else gt(a);return function(){gt(a)}},[t,a])}var Ct=!1;function en(r){return typeof r=="boolean"&&(Ct=r),Ct}var Mt=function(t){return t===!1?!1:!fr()||!t?null:typeof t=="string"?document.querySelector(t):typeof t=="function"?t():t},At=o.forwardRef(function(r,t){var e=r.open,n=r.autoLock,a=r.getContainer;r.debug;var i=r.autoDestroy,l=i===void 0?!0:i,u=r.children,c=o.useState(e),d=M(c,2),h=d[0],v=d[1],b=h||e;o.useEffect(function(){(l||e)&&v(e)},[e,l]);var f=o.useState(function(){return Mt(a)}),y=M(f,2),N=y[0],w=y[1];o.useEffect(function(){var A=Mt(a);w(A??null)});var I=Xt(b&&!N),m=M(I,2),E=m[0],D=m[1],x=N??E;pt(n&&e&&fr()&&(x===E||x===document.body));var J=null;if(u&&mr(u)&&t){var ee=u;J=ee.ref}var O=It(J,t);if(!b||!fr()||N===void 0)return null;var V=x===!1||en(),S=u;return t&&(S=o.cloneElement(u,{ref:O})),o.createElement(xt.Provider,{value:D},V?S:dt.createPortal(S,x))}),wt=o.createContext(null);function Et(r){return r?Array.isArray(r)?r:[r]:[]}function rn(r,t,e,n){return o.useMemo(function(){var a=Et(e??t),i=Et(n??t),l=new Set(a),u=new Set(i);return r&&(l.has("hover")&&(l.delete("hover"),l.add("click")),u.has("hover")&&(u.delete("hover"),u.add("click"))),[l,u]},[r,t,e,n])}function tn(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],e=arguments.length>2?arguments[2]:void 0;return e?r[0]===t[0]:r[0]===t[0]&&r[1]===t[1]}function nn(r,t,e,n){for(var a=e.points,i=Object.keys(r),l=0;l<i.length;l+=1){var u,c=i[l];if(tn((u=r[c])===null||u===void 0?void 0:u.points,a,n))return"".concat(t,"-placement-").concat(c)}return""}function kt(r,t,e,n){return t||(e?{motionName:"".concat(r,"-").concat(e)}:n?{motionName:n}:null)}function hr(r){return r.ownerDocument.defaultView}function st(r){for(var t=[],e=r==null?void 0:r.parentElement,n=["hidden","scroll","clip","auto"];e;){var a=hr(e).getComputedStyle(e),i=a.overflowX,l=a.overflowY,u=a.overflow;[i,l,u].some(function(c){return n.includes(c)})&&t.push(e),e=e.parentElement}return t}function dr(r){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;return Number.isNaN(r)?t:r}function sr(r){return dr(parseFloat(r),0)}function Pt(r,t){var e=U({},r);return(t||[]).forEach(function(n){if(!(n instanceof HTMLBodyElement)){var a=hr(n).getComputedStyle(n),i=a.overflow,l=a.overflowClipMargin,u=a.borderTopWidth,c=a.borderBottomWidth,d=a.borderLeftWidth,h=a.borderRightWidth,v=n.getBoundingClientRect(),b=n.offsetHeight,f=n.clientHeight,y=n.offsetWidth,N=n.clientWidth,w=sr(u),I=sr(c),m=sr(d),E=sr(h),D=dr(Math.round(v.width/y*1e3)/1e3),x=dr(Math.round(v.height/b*1e3)/1e3),J=(y-N-m-E)*D,ee=(b-f-w-I)*x,O=w*x,V=I*x,S=m*D,A=E*D,k=0,ne=0;if(i==="clip"){var re=sr(l);k=re*D,ne=re*x}var K=v.x+S-k,$=v.y+O-ne,te=K+v.width+2*k-S-A-J,ke=$+v.height+2*ne-O-V-ee;e.left=Math.max(e.left,K),e.top=Math.max(e.top,$),e.right=Math.min(e.right,te),e.bottom=Math.min(e.bottom,ke)}}),e}function Dt(r){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,e="".concat(t),n=e.match(/^(.*)\%$/);return n?r*(parseFloat(n[1])/100):parseFloat(e)}function Rt(r,t){var e=t||[],n=M(e,2),a=n[0],i=n[1];return[Dt(r.width,a),Dt(r.height,i)]}function _t(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";return[r[0],r[1]]}function Xe(r,t){var e=t[0],n=t[1],a,i;return e==="t"?i=r.y:e==="b"?i=r.y+r.height:i=r.y+r.height/2,n==="l"?a=r.x:n==="r"?a=r.x+r.width:a=r.x+r.width/2,{x:a,y:i}}function Ee(r,t){var e={t:"b",b:"t",l:"r",r:"l"};return r.map(function(n,a){return a===t?e[n]||"c":n}).join("")}function an(r,t,e,n,a,i,l){var u=o.useState({ready:!1,offsetX:0,offsetY:0,offsetR:0,offsetB:0,arrowX:0,arrowY:0,scaleX:1,scaleY:1,align:a[n]||{}}),c=M(u,2),d=c[0],h=c[1],v=o.useRef(0),b=o.useMemo(function(){return t?st(t):[]},[t]),f=o.useRef({}),y=function(){f.current={}};r||y();var N=he(function(){if(t&&e&&r){let z=function(Ke,Fe){var Ze=arguments.length>2&&arguments[2]!==void 0?arguments[2]:fe,or=k.x+Ke,ur=k.y+Fe,lr=or+p,xr=ur+Y,rt=Math.max(or,Ze.left),tt=Math.max(ur,Ze.top),nt=Math.min(lr,Ze.right),at=Math.min(xr,Ze.bottom);return Math.max(0,(nt-rt)*(at-tt))},ir=function(){be=k.y+T,Qe=be+Y,Ne=k.x+L,Ce=Ne+p};var m=t,E=m.style.left,D=m.style.top,x=m.style.right,J=m.style.bottom,ee=m.ownerDocument,O=hr(m),V=U(U({},a[n]),i);m.style.left="0",m.style.top="0",m.style.right="auto",m.style.bottom="auto";var S;if(Array.isArray(e))S={x:e[0],y:e[1],width:0,height:0};else{var A=e.getBoundingClientRect();S={x:A.x,y:A.y,width:A.width,height:A.height}}var k=m.getBoundingClientRect(),ne=O.getComputedStyle(m),re=ne.width,K=ne.height,$=ee.documentElement,te=$.clientWidth,ke=$.clientHeight,ze=$.scrollWidth,ae=$.scrollHeight,ve=$.scrollTop,Pe=$.scrollLeft,Y=k.height,p=k.width,j=S.height,F=S.width,Ve={left:0,top:0,right:te,bottom:ke},De={left:-Pe,top:-ve,right:ze-Pe,bottom:ae-ve},ie=V.htmlRegion,He="visible",Re="visibleFirst";ie!=="scroll"&&ie!==Re&&(ie=He);var Q=ie===Re,_e=Pt(De,b),C=Pt(Ve,b),fe=ie===He?C:_e,Z=Q?C:fe;m.style.left="auto",m.style.top="auto",m.style.right="0",m.style.bottom="0";var qe=m.getBoundingClientRect();m.style.left=E,m.style.top=D,m.style.right=x,m.style.bottom=J;var de=dr(Math.round(p/parseFloat(re)*1e3)/1e3),ge=dr(Math.round(Y/parseFloat(K)*1e3)/1e3);if(de===0||ge===0||ut(e)&&!jt(e))return;var me=V.offset,Fr=V.targetOffset,zr=Rt(k,me),gr=M(zr,2),Ge=gr[0],H=gr[1],Vr=Rt(S,Fr),yr=M(Vr,2),Hr=yr[0],Sr=yr[1];S.x-=Hr,S.y-=Sr;var ye=V.points||[],br=M(ye,2),qr=br[0],Ue=br[1],B=_t(Ue),W=_t(qr),Nr=Xe(S,B),Cr=Xe(k,W),Se=U({},V),L=Nr.x-Cr.x+Ge,T=Nr.y-Cr.y+H,oe=z(L,T),Ie=z(L,T,C),q=Xe(S,["t","l"]),Mr=Xe(k,["t","l"]),$e=Xe(S,["b","r"]),pe=Xe(k,["b","r"]),Te=V.overflow||{},wr=Te.adjustX,ue=Te.adjustY,Er=Te.shiftX,er=Te.shiftY,je=function(Fe){return typeof Fe=="boolean"?Fe:Fe>=0},be,Qe,Ne,Ce;ir();var rr=je(ue),kr=W[0]===B[0];if(rr&&W[0]==="t"&&(Qe>Z.bottom||f.current.bt)){var Me=T;kr?Me-=Y-j:Me=q.y-pe.y-H;var tr=z(L,Me),Gr=z(L,Me,C);tr>oe||tr===oe&&(!Q||Gr>=Ie)?(f.current.bt=!0,T=Me,Se.points=[Ee(W,0),Ee(B,0)]):f.current.bt=!1}if(rr&&W[0]==="b"&&(be<Z.top||f.current.tb)){var le=T;kr?le+=Y-j:le=$e.y-Mr.y-H;var Pr=z(L,le),X=z(L,le,C);Pr>oe||Pr===oe&&(!Q||X>=Ie)?(f.current.tb=!0,T=le,Se.points=[Ee(W,0),Ee(B,0)]):f.current.tb=!1}var Dr=je(wr),Rr=W[1]===B[1];if(Dr&&W[1]==="l"&&(Ce>Z.right||f.current.rl)){var Le=L;Rr?Le-=p-F:Le=q.x-pe.x-Ge;var _r=z(Le,T),Ur=z(Le,T,C);_r>oe||_r===oe&&(!Q||Ur>=Ie)?(f.current.rl=!0,L=Le,Se.points=[Ee(W,1),Ee(B,1)]):f.current.rl=!1}if(Dr&&W[1]==="r"&&(Ne<Z.left||f.current.lr)){var xe=L;Rr?xe+=p-F:xe=$e.x-Mr.x-Ge;var Ir=z(xe,T),jr=z(xe,T,C);Ir>oe||Ir===oe&&(!Q||jr>=Ie)?(f.current.lr=!0,L=xe,Se.points=[Ee(W,1),Ee(B,1)]):f.current.lr=!1}ir();var Ae=Er===!0?0:Er;typeof Ae=="number"&&(Ne<C.left&&(L-=Ne-C.left,S.x+F<C.left+Ae&&(L+=S.x-C.left+F-Ae)),Ce>C.right&&(L-=Ce-C.right,S.x>C.right-Ae&&(L+=S.x-C.right+Ae)));var se=er===!0?0:er;typeof se=="number"&&(be<C.top&&(T-=be-C.top+H,S.y+j<C.top+se&&(T+=S.y-C.top+j-se)),Qe>C.bottom&&(T-=Qe-C.bottom-H,S.y>C.bottom-se&&(T+=S.y-C.bottom+se)));var Be=k.x+L,we=Be+p,nr=k.y+T,Qr=nr+Y,$r=S.x,Jr=$r+F,ar=S.y,Kr=ar+j,Zr=Math.max(Be,$r),Xr=Math.min(we,Jr),Tr=(Zr+Xr)/2,Or=Tr-Be,Yr=Math.max(nr,ar),pr=Math.min(Qr,Kr),et=(Yr+pr)/2,Lr=et-nr;l==null||l(t,Se);var Je=qe.right-k.x-(L+k.width),We=qe.bottom-k.y-(T+k.height);h({ready:!0,offsetX:L/de,offsetY:T/ge,offsetR:Je/de,offsetB:We/ge,arrowX:Or/de,arrowY:Lr/ge,scaleX:de,scaleY:ge,align:Se})}}),w=function(){v.current+=1;var E=v.current;Promise.resolve().then(function(){v.current===E&&N()})},I=function(){h(function(E){return U(U({},E),{},{ready:!1})})};return G(I,[n]),G(function(){r||I()},[r]),[d.ready,d.offsetX,d.offsetY,d.offsetR,d.offsetB,d.arrowX,d.arrowY,d.scaleX,d.scaleY,d.align,w]}function on(r,t,e,n){G(function(){if(r&&t&&e){let h=function(){n()};var a=t,i=e,l=st(a),u=st(i),c=hr(i),d=new Set([c].concat(ot(l),ot(u)));return d.forEach(function(v){v.addEventListener("scroll",h,{passive:!0})}),c.addEventListener("resize",h,{passive:!0}),n(),function(){d.forEach(function(v){v.removeEventListener("scroll",h),c.removeEventListener("resize",h)})}}},[r,t,e])}function un(r,t,e,n,a,i,l,u){var c=o.useRef(r),d=o.useRef(!1);c.current!==r&&(d.current=!0,c.current=r),o.useEffect(function(){var h=yt(function(){d.current=!1});return function(){yt.cancel(h)}},[r]),o.useEffect(function(){if(t&&n&&(!a||i)){var h=function(){var J=!1,ee=function(S){var A=S.target;J=l(A)},O=function(S){var A=S.target;!d.current&&c.current&&!J&&!l(A)&&u(!1)};return[ee,O]},v=h(),b=M(v,2),f=b[0],y=b[1],N=h(),w=M(N,2),I=w[0],m=w[1],E=hr(n);E.addEventListener("mousedown",f,!0),E.addEventListener("click",y,!0),E.addEventListener("contextmenu",y,!0);var D=lt(e);return D&&(D.addEventListener("mousedown",I,!0),D.addEventListener("click",m,!0),D.addEventListener("contextmenu",m,!0)),function(){E.removeEventListener("mousedown",f,!0),E.removeEventListener("click",y,!0),E.removeEventListener("contextmenu",y,!0),D&&(D.removeEventListener("mousedown",I,!0),D.removeEventListener("click",m,!0),D.removeEventListener("contextmenu",m,!0))}}},[t,e,n,a,i])}function ln(r){var t=r.prefixCls,e=r.align,n=r.arrow,a=r.arrowPos,i=n||{},l=i.className,u=i.content,c=a.x,d=c===void 0?0:c,h=a.y,v=h===void 0?0:h,b=o.useRef();if(!e||!e.points)return null;var f={position:"absolute"};if(e.autoArrow!==!1){var y=e.points[0],N=e.points[1],w=y[0],I=y[1],m=N[0],E=N[1];w===m||!["t","b"].includes(w)?f.top=v:w==="t"?f.top=0:f.bottom=0,I===E||!["l","r"].includes(I)?f.left=d:I==="l"?f.left=0:f.right=0}return o.createElement("div",{ref:b,className:Ye("".concat(t,"-arrow"),l),style:f},u)}function sn(r){var t=r.prefixCls,e=r.open,n=r.zIndex,a=r.mask,i=r.motion;return a?o.createElement(Lt,Wr({},i,{motionAppear:!0,visible:e,removeOnLeave:!0}),function(l){var u=l.className;return o.createElement("div",{style:{zIndex:n},className:Ye("".concat(t,"-mask"),u)})}):null}var cn=o.memo(function(r){var t=r.children;return t},function(r,t){return t.cache}),vn=o.forwardRef(function(r,t){var e=r.popup,n=r.className,a=r.prefixCls,i=r.style,l=r.target,u=r.onVisibleChanged,c=r.open,d=r.keepDom,h=r.onClick,v=r.mask,b=r.arrow,f=r.arrowPos,y=r.align,N=r.motion,w=r.maskMotion,I=r.forceRender,m=r.getPopupContainer,E=r.autoDestroy,D=r.portal,x=r.zIndex,J=r.onMouseEnter,ee=r.onMouseLeave,O=r.ready,V=r.offsetX,S=r.offsetY,A=r.offsetR,k=r.offsetB,ne=r.onAlign,re=r.onPrepare,K=r.stretch,$=r.targetWidth,te=r.targetHeight,ke=typeof e=="function"?e():e,ze=c||d,ae=(m==null?void 0:m.length)>0,ve=o.useState(!m||!ae),Pe=M(ve,2),Y=Pe[0],p=Pe[1];if(G(function(){!Y&&ae&&l&&p(!0)},[Y,ae,l]),!Y)return null;var j="auto",F={left:"-1000vw",top:"-1000vh",right:j,bottom:j};if(O||!c){var Ve=y.points,De=y._experimental,ie=De==null?void 0:De.dynamicInset,He=ie&&Ve[0][1]==="r",Re=ie&&Ve[0][0]==="b";He?(F.right=A,F.left=j):(F.left=V,F.right=j),Re?(F.bottom=k,F.top=j):(F.top=S,F.bottom=j)}var Q={};return K&&(K.includes("height")&&te?Q.height=te:K.includes("minHeight")&&te&&(Q.minHeight=te),K.includes("width")&&$?Q.width=$:K.includes("minWidth")&&$&&(Q.minWidth=$)),c||(Q.pointerEvents="none"),o.createElement(D,{open:I||ze,getContainer:m&&function(){return m(l)},autoDestroy:E},o.createElement(sn,{prefixCls:a,open:c,zIndex:x,mask:v,motion:w}),o.createElement(Tt,{onResize:ne,disabled:!c},function(_e){return o.createElement(Lt,Wr({motionAppear:!0,motionEnter:!0,motionLeave:!0,removeOnLeave:!1,forceRender:I,leavedClassName:"".concat(a,"-hidden")},N,{onAppearPrepare:re,onEnterPrepare:re,visible:c,onVisibleChanged:function(fe){var Z;N==null||(Z=N.onVisibleChanged)===null||Z===void 0||Z.call(N,fe),u(fe)}}),function(C,fe){var Z=C.className,qe=C.style,de=Ye(a,Z,n);return o.createElement("div",{ref:$t(_e,t,fe),className:de,style:U(U(U(U({"--arrow-x":"".concat(f.x||0,"px"),"--arrow-y":"".concat(f.y||0,"px")},F),Q),qe),{},{boxSizing:"border-box",zIndex:x},i),onMouseEnter:J,onMouseLeave:ee,onClick:h},b&&o.createElement(ln,{prefixCls:a,arrow:b,arrowPos:f,align:y}),o.createElement(cn,{cache:!c},ke))})}))}),fn=o.forwardRef(function(r,t){var e=r.children,n=r.getTriggerDOMNode,a=mr(e),i=o.useCallback(function(u){Qt(t,n?n(u):u)},[n]),l=It(i,e.ref);return a?o.cloneElement(e,{ref:l}):e}),dn=["prefixCls","children","action","showAction","hideAction","popupVisible","defaultPopupVisible","onPopupVisibleChange","afterPopupVisibleChange","mouseEnterDelay","mouseLeaveDelay","focusDelay","blurDelay","mask","maskClosable","getPopupContainer","forceRender","autoDestroy","destroyPopupOnHide","popup","popupClassName","popupStyle","popupPlacement","builtinPlacements","popupAlign","zIndex","stretch","getPopupClassNameFromAlign","alignPoint","onPopupClick","onPopupAlign","arrow","popupMotion","maskMotion","popupTransitionName","popupAnimation","maskTransitionName","maskAnimation","className","getTriggerDOMNode"];function mn(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:At,t=o.forwardRef(function(e,n){var a=e.prefixCls,i=a===void 0?"rc-trigger-popup":a,l=e.children,u=e.action,c=u===void 0?"hover":u,d=e.showAction,h=e.hideAction,v=e.popupVisible,b=e.defaultPopupVisible,f=e.onPopupVisibleChange,y=e.afterPopupVisibleChange,N=e.mouseEnterDelay,w=e.mouseLeaveDelay,I=w===void 0?.1:w,m=e.focusDelay,E=e.blurDelay,D=e.mask,x=e.maskClosable,J=x===void 0?!0:x,ee=e.getPopupContainer,O=e.forceRender,V=e.autoDestroy,S=e.destroyPopupOnHide,A=e.popup,k=e.popupClassName,ne=e.popupStyle,re=e.popupPlacement,K=e.builtinPlacements,$=K===void 0?{}:K,te=e.popupAlign,ke=e.zIndex,ze=e.stretch,ae=e.getPopupClassNameFromAlign,ve=e.alignPoint,Pe=e.onPopupClick,Y=e.onPopupAlign,p=e.arrow,j=e.popupMotion,F=e.maskMotion,Ve=e.popupTransitionName,De=e.popupAnimation,ie=e.maskTransitionName,He=e.maskAnimation,Re=e.className,Q=e.getTriggerDOMNode,_e=Vt(e,dn),C=V||S||!1,fe=o.useState(!1),Z=M(fe,2),qe=Z[0],de=Z[1];G(function(){de(Jt())},[]);var ge=o.useRef({}),me=o.useContext(wt),Fr=o.useMemo(function(){return{registerSubPopup:function(g,P){ge.current[g]=P,me==null||me.registerSubPopup(g,P)}}},[me]),zr=Kt(),gr=o.useState(null),Ge=M(gr,2),H=Ge[0],Vr=Ge[1],yr=he(function(s){ut(s)&&H!==s&&Vr(s),me==null||me.registerSubPopup(zr,s)}),Hr=o.useState(null),Sr=M(Hr,2),ye=Sr[0],br=Sr[1],qr=he(function(s){ut(s)&&ye!==s&&br(s)}),Ue=o.Children.only(l),B=(Ue==null?void 0:Ue.props)||{},W={},Nr=he(function(s){var g,P,R=ye;return(R==null?void 0:R.contains(s))||((g=lt(R))===null||g===void 0?void 0:g.host)===s||s===R||(H==null?void 0:H.contains(s))||((P=lt(H))===null||P===void 0?void 0:P.host)===s||s===H||Object.values(ge.current).some(function(_){return(_==null?void 0:_.contains(s))||s===_})}),Cr=kt(i,j,De,Ve),Se=kt(i,F,He,ie),L=o.useState(b||!1),T=M(L,2),oe=T[0],Ie=T[1],q=v??oe,Mr=he(function(s){v===void 0&&Ie(s)});G(function(){Ie(v||!1)},[v]);var $e=o.useRef(q);$e.current=q;var pe=he(function(s){dt.flushSync(function(){q!==s&&(Mr(s),f==null||f(s))})}),Te=o.useRef(),wr=function(){clearTimeout(Te.current)},ue=function(g){var P=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;wr(),P===0?pe(g):Te.current=setTimeout(function(){pe(g)},P*1e3)};o.useEffect(function(){return wr},[]);var Er=o.useState(!1),er=M(Er,2),je=er[0],be=er[1];G(function(s){(!s||q)&&be(!0)},[q]);var Qe=o.useState(null),Ne=M(Qe,2),Ce=Ne[0],rr=Ne[1],kr=o.useState([0,0]),Me=M(kr,2),tr=Me[0],Gr=Me[1],le=function(g){Gr([g.clientX,g.clientY])},Pr=an(q,H,ve?tr:ye,re,$,te,Y),X=M(Pr,11),Dr=X[0],Rr=X[1],Le=X[2],_r=X[3],Ur=X[4],xe=X[5],Ir=X[6],jr=X[7],Ae=X[8],se=X[9],Be=X[10],we=he(function(){je||Be()});on(q,ye,H,we),G(function(){we()},[tr,re]),G(function(){q&&!($!=null&&$[re])&&we()},[JSON.stringify(te)]);var nr=o.useMemo(function(){var s=nn($,i,se,ve);return Ye(s,ae==null?void 0:ae(se))},[se,ae,$,i,ve]);o.useImperativeHandle(n,function(){return{forceAlign:we}});var Qr=function(g){be(!1),Be(),y==null||y(g)},$r=function(){return new Promise(function(g){rr(function(){return g})})};G(function(){Ce&&(Be(),Ce(),rr(null))},[Ce]);var Jr=o.useState(0),ar=M(Jr,2),Kr=ar[0],Zr=ar[1],Xr=o.useState(0),Tr=M(Xr,2),Or=Tr[0],Yr=Tr[1],pr=function(g,P){if(we(),ze){var R=P.getBoundingClientRect();Zr(R.width),Yr(R.height)}},et=rn(qe,c,d,h),Lr=M(et,2),Je=Lr[0],We=Lr[1];function z(s,g,P,R){W[s]=function(_){var Ar;R==null||R(_),ue(g,P);for(var it=arguments.length,ht=new Array(it>1?it-1:0),Br=1;Br<it;Br++)ht[Br-1]=arguments[Br];(Ar=B[s])===null||Ar===void 0||Ar.call.apply(Ar,[B,_].concat(ht))}}var ir=Je.has("click"),Ke=We.has("click")||We.has("contextMenu");(ir||Ke)&&(W.onClick=function(s){var g;$e.current&&Ke?ue(!1):!$e.current&&ir&&(le(s),ue(!0));for(var P=arguments.length,R=new Array(P>1?P-1:0),_=1;_<P;_++)R[_-1]=arguments[_];(g=B.onClick)===null||g===void 0||g.call.apply(g,[B,s].concat(R))}),un(q,Ke,ye,H,D,J,Nr,ue);var Fe=Je.has("hover"),Ze=We.has("hover"),or,ur;Fe&&(z("onMouseEnter",!0,N,function(s){le(s)}),z("onPointerEnter",!0,N,function(s){le(s)}),or=function(){(q||je)&&ue(!0,N)},ve&&(W.onMouseMove=function(s){var g;(g=B.onMouseMove)===null||g===void 0||g.call(B,s)})),Ze&&(z("onMouseLeave",!1,I),z("onPointerLeave",!1,I),ur=function(){ue(!1,I)}),Je.has("focus")&&z("onFocus",!0,m),We.has("focus")&&z("onBlur",!1,E),Je.has("contextMenu")&&(W.onContextMenu=function(s){var g;$e.current&&We.has("contextMenu")?ue(!1):(le(s),ue(!0)),s.preventDefault();for(var P=arguments.length,R=new Array(P>1?P-1:0),_=1;_<P;_++)R[_-1]=arguments[_];(g=B.onContextMenu)===null||g===void 0||g.call.apply(g,[B,s].concat(R))}),Re&&(W.className=Ye(B.className,Re));var lr=U(U({},B),W),xr={},rt=["onContextMenu","onClick","onMouseDown","onTouchStart","onMouseEnter","onMouseLeave","onFocus","onBlur"];rt.forEach(function(s){_e[s]&&(xr[s]=function(){for(var g,P=arguments.length,R=new Array(P),_=0;_<P;_++)R[_]=arguments[_];(g=lr[s])===null||g===void 0||g.call.apply(g,[lr].concat(R)),_e[s].apply(_e,R)})});var tt=o.cloneElement(Ue,U(U({},lr),xr)),nt={x:xe,y:Ir},at=p?U({},p!==!0?p:{}):null;return o.createElement(o.Fragment,null,o.createElement(Tt,{disabled:!q,ref:qr,onResize:pr},o.createElement(fn,{getTriggerDOMNode:Q},tt)),o.createElement(wt.Provider,{value:Fr},o.createElement(vn,{portal:r,ref:yr,prefixCls:i,popup:A,className:Ye(k,nr),style:ne,target:ye,onMouseEnter:or,onMouseLeave:ur,zIndex:ke,open:q,keepDom:je,onClick:Pe,mask:D,motion:Cr,maskMotion:Se,onVisibleChanged:Qr,onPrepare:$r,forceRender:O,autoDestroy:C,getPopupContainer:ee,align:se,arrow:at,arrowPos:nt,ready:Dr,offsetX:Rr,offsetY:Le,offsetR:_r,offsetB:Ur,onAlign:we,stretch:ze,targetWidth:Kr/jr,targetHeight:Or/Ae})))});return t}const In=mn(At);function ct(){return typeof BigInt=="function"}function Bt(r){return!r&&r!==0&&!Number.isNaN(r)||!String(r).trim()}function vr(r){var t=r.trim(),e=t.startsWith("-");e&&(t=t.slice(1)),t=t.replace(/(\.\d*[^0])0*$/,"$1").replace(/\.0*$/,"").replace(/^0+/,""),t.startsWith(".")&&(t="0".concat(t));var n=t||"0",a=n.split("."),i=a[0]||"0",l=a[1]||"0";i==="0"&&l==="0"&&(e=!1);var u=e?"-":"";return{negative:e,negativeStr:u,trimStr:n,integerStr:i,decimalStr:l,fullStr:"".concat(u).concat(n)}}function mt(r){var t=String(r);return!Number.isNaN(Number(t))&&t.includes("e")}function cr(r){var t=String(r);if(mt(r)){var e=Number(t.slice(t.indexOf("e-")+2)),n=t.match(/\.(\d+)/);return n!=null&&n[1]&&(e+=n[1].length),e}return t.includes(".")&&Ft(t)?t.length-t.indexOf(".")-1:0}function Wt(r){var t=String(r);if(mt(r)){if(r>Number.MAX_SAFE_INTEGER)return String(ct()?BigInt(r).toString():Number.MAX_SAFE_INTEGER);if(r<Number.MIN_SAFE_INTEGER)return String(ct()?BigInt(r).toString():Number.MIN_SAFE_INTEGER);t=r.toFixed(cr(t))}return vr(t).fullStr}function Ft(r){return typeof r=="number"?!Number.isNaN(r):r?/^\s*-?\d+(\.\d+)?\s*$/.test(r)||/^\s*-?\d+\.\s*$/.test(r)||/^\s*-?\.\d+\s*$/.test(r):!1}var hn=function(){function r(t){if(ft(this,r),ce(this,"origin",""),ce(this,"negative",void 0),ce(this,"integer",void 0),ce(this,"decimal",void 0),ce(this,"decimalLen",void 0),ce(this,"empty",void 0),ce(this,"nan",void 0),Bt(t)){this.empty=!0;return}if(this.origin=String(t),t==="-"||Number.isNaN(t)){this.nan=!0;return}var e=t;if(mt(e)&&(e=Number(e)),e=typeof e=="string"?e:Wt(e),Ft(e)){var n=vr(e);this.negative=n.negative;var a=n.trimStr.split(".");this.integer=BigInt(a[0]);var i=a[1]||"0";this.decimal=BigInt(i),this.decimalLen=i.length}else this.nan=!0}return vt(r,[{key:"getMark",value:function(){return this.negative?"-":""}},{key:"getIntegerStr",value:function(){return this.integer.toString()}},{key:"getDecimalStr",value:function(){return this.decimal.toString().padStart(this.decimalLen,"0")}},{key:"alignDecimal",value:function(e){var n="".concat(this.getMark()).concat(this.getIntegerStr()).concat(this.getDecimalStr().padEnd(e,"0"));return BigInt(n)}},{key:"negate",value:function(){var e=new r(this.toString());return e.negative=!e.negative,e}},{key:"cal",value:function(e,n,a){var i=Math.max(this.getDecimalStr().length,e.getDecimalStr().length),l=this.alignDecimal(i),u=e.alignDecimal(i),c=n(l,u).toString(),d=a(i),h=vr(c),v=h.negativeStr,b=h.trimStr,f="".concat(v).concat(b.padStart(d+1,"0"));return new r("".concat(f.slice(0,-d),".").concat(f.slice(-d)))}},{key:"add",value:function(e){if(this.isInvalidate())return new r(e);var n=new r(e);return n.isInvalidate()?this:this.cal(n,function(a,i){return a+i},function(a){return a})}},{key:"multi",value:function(e){var n=new r(e);return this.isInvalidate()||n.isInvalidate()?new r(NaN):this.cal(n,function(a,i){return a*i},function(a){return a*2})}},{key:"isEmpty",value:function(){return this.empty}},{key:"isNaN",value:function(){return this.nan}},{key:"isInvalidate",value:function(){return this.isEmpty()||this.isNaN()}},{key:"equals",value:function(e){return this.toString()===(e==null?void 0:e.toString())}},{key:"lessEquals",value:function(e){return this.add(e.negate().toString()).toNumber()<=0}},{key:"toNumber",value:function(){return this.isNaN()?NaN:Number(this.toString())}},{key:"toString",value:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;return e?this.isInvalidate()?"":vr("".concat(this.getMark()).concat(this.getIntegerStr(),".").concat(this.getDecimalStr())).fullStr:this.origin}}]),r}(),gn=function(){function r(t){if(ft(this,r),ce(this,"origin",""),ce(this,"number",void 0),ce(this,"empty",void 0),Bt(t)){this.empty=!0;return}this.origin=String(t),this.number=Number(t)}return vt(r,[{key:"negate",value:function(){return new r(-this.toNumber())}},{key:"add",value:function(e){if(this.isInvalidate())return new r(e);var n=Number(e);if(Number.isNaN(n))return this;var a=this.number+n;if(a>Number.MAX_SAFE_INTEGER)return new r(Number.MAX_SAFE_INTEGER);if(a<Number.MIN_SAFE_INTEGER)return new r(Number.MIN_SAFE_INTEGER);var i=Math.max(cr(this.number),cr(n));return new r(a.toFixed(i))}},{key:"multi",value:function(e){var n=Number(e);if(this.isInvalidate()||Number.isNaN(n))return new r(NaN);var a=this.number*n;if(a>Number.MAX_SAFE_INTEGER)return new r(Number.MAX_SAFE_INTEGER);if(a<Number.MIN_SAFE_INTEGER)return new r(Number.MIN_SAFE_INTEGER);var i=Math.max(cr(this.number),cr(n));return new r(a.toFixed(i))}},{key:"isEmpty",value:function(){return this.empty}},{key:"isNaN",value:function(){return Number.isNaN(this.number)}},{key:"isInvalidate",value:function(){return this.isEmpty()||this.isNaN()}},{key:"equals",value:function(e){return this.toNumber()===(e==null?void 0:e.toNumber())}},{key:"lessEquals",value:function(e){return this.add(e.negate().toString()).toNumber()<=0}},{key:"toNumber",value:function(){return this.number}},{key:"toString",value:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;return e?this.isInvalidate()?"":Wt(this.number):this.origin}}]),r}();function yn(r){return ct()?new hn(r):new gn(r)}function Sn(r,t,e){var n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1;if(r==="")return"";var a=vr(r),i=a.negativeStr,l=a.integerStr,u=a.decimalStr,c="".concat(t).concat(u),d="".concat(i).concat(l);if(e>=0){var h=Number(u[e]);if(h>=5&&!n){var v=yn(r).add("".concat(i,"0.").concat("0".repeat(e)).concat(10-h));return Sn(v.toString(),t,e,n)}return e===0?d:"".concat(d).concat(t).concat(u.padEnd(e,"0").slice(0,e))}return c===".0"?d:"".concat(d).concat(c)}function $n(r){var t=o.createContext(void 0),e=function(a){var i=a.value,l=a.children,u=o.useRef(i);u.current=i;var c=o.useState(function(){return{getValue:function(){return u.current},listeners:new Set}}),d=M(c,1),h=d[0];return G(function(){dt.unstable_batchedUpdates(function(){h.listeners.forEach(function(v){v(i)})})},[i]),o.createElement(t.Provider,{value:h},l)};return{Context:t,Provider:e,defaultValue:r}}function Tn(r,t){var e=he(typeof t=="function"?t:function(v){if(t===void 0)return v;if(!Array.isArray(t))return v[t];var b={};return t.forEach(function(f){b[f]=v[f]}),b}),n=o.useContext(r==null?void 0:r.Context),a=n||{},i=a.listeners,l=a.getValue,u=o.useRef();u.current=e(n?l():r==null?void 0:r.defaultValue);var c=o.useState({}),d=M(c,2),h=d[1];return G(function(){if(!n)return;function v(b){var f=e(b);Zt(u.current,f,!0)||h({})}return i.add(v),function(){i.delete(v)}},[n]),u.current}var zt=o.createContext(0);function bn(){return o.useContext(zt)}function Ln(r,t){var e=mr(r),n=function(i,l){var u=e?{ref:l}:{},c=o.useRef(0),d=o.useRef(i);return(!t||t(d.current,i))&&(c.current+=1),d.current=i,o.createElement(zt.Provider,{value:c.current},o.createElement(r,Wr({},i,u)))};return e?o.forwardRef(n):n}function xn(r,t){var e=mr(r),n=function(i,l){var u=e?{ref:l}:{};return bn(),o.createElement(r,Wr({},i,u))};return e?o.memo(o.forwardRef(n),t):o.memo(n,t)}var Nn=function(r){Ht(e,r);var t=qt(e);function e(){return ft(this,e),t.apply(this,arguments)}return vt(e,[{key:"render",value:function(){return this.props.children}}]),e}(Oe.Component),Cn={subtree:!0,childList:!0,attributeFilter:["style","class"]},An=function(t){var e=t.children,n=t.options,a=n===void 0?Cn:n,i=t.onMutate,l=i===void 0?function(){}:i,u=he(l),c=o.useRef(null),d=Oe.useRef(null),h=Oe.isValidElement(e)&&mr(e),v=h?e==null?void 0:e.ref:null,b=Oe.useMemo(function(){return $t(v,d)},[v,d]);return o.useEffect(function(){if(fr()){var f,y=St(v==null?void 0:v.current)||St(c==null?void 0:c.current);return y&&"MutationObserver"in window&&(f=new MutationObserver(u),f.observe(y,a)),function(){var N,w;(N=f)===null||N===void 0||N.takeRecords(),(w=f)===null||w===void 0||w.disconnect()}}},[a,v]),e?Oe.createElement(Nn,{ref:c},h?Oe.cloneElement(e,{ref:b}):e):null};export{An as M,At as P,In as T,cr as a,Sn as b,$n as c,Tn as d,yn as g,Ln as m,Wt as n,xn as r,vr as t,bn as u,Ft as v};
