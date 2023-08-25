import{b as J,a as _,h as ye,d as R,c as $,e as H,i as Rn,j as Pn,g as En,f as Kn,_ as wn}from"./@babel-9367d27f.js";import{c as fe}from"./classnames-f3eb6505.js";import{F as Ae}from"./rc-overflow-62006d10.js";import{a as Nn,i as Ot,l as $e,K as ne,J as _n,B as qe,w as kt,f as Dn,z as At,y as On}from"./rc-util-8ac52126.js";import{r as e}from"./react-16261f20.js";import{r as kn}from"./react-dom-c85821af.js";import{T as An}from"./@rc-component-47431e57.js";import{C as $n}from"./rc-motion-66270194.js";var $t=e.createContext(null);function dt(r,t){return r===void 0?null:"".concat(r,"-").concat(t)}function Lt(r){var t=e.useContext($t);return dt(t,r)}var Ln=["children","locked"],Z=e.createContext(null);function Tn(r,t){var a=_({},r);return Object.keys(t).forEach(function(o){var n=t[o];n!==void 0&&(a[o]=n)}),a}function Le(r){var t=r.children,a=r.locked,o=J(r,Ln),n=e.useContext(Z),l=Nn(function(){return Tn(n,o)},[n,o],function(i,u){return!a&&(i[0]!==u[0]||!Ot(i[1],u[1],!0))});return e.createElement(Z.Provider,{value:l},t)}var Fn=[],Tt=e.createContext(null);function Ze(){return e.useContext(Tt)}var Ft=e.createContext(Fn);function Te(r){var t=e.useContext(Ft);return e.useMemo(function(){return r!==void 0?[].concat(ye(t),[r]):t},[t,r])}var Vt=e.createContext(null),vt=e.createContext({}),ot=ne.LEFT,lt=ne.RIGHT,ut=ne.UP,Ye=ne.DOWN,Je=ne.ENTER,Ut=ne.ESC,De=ne.HOME,Oe=ne.END,wt=[ut,Ye,ot,lt];function Vn(r,t,a,o){var n,l,i,u,s="prev",c="next",v="children",E="parent";if(r==="inline"&&o===Je)return{inlineTrigger:!0};var p=(n={},R(n,ut,s),R(n,Ye,c),n),P=(l={},R(l,ot,a?c:s),R(l,lt,a?s:c),R(l,Ye,v),R(l,Je,v),l),m=(i={},R(i,ut,s),R(i,Ye,c),R(i,Je,v),R(i,Ut,E),R(i,ot,a?v:E),R(i,lt,a?E:v),i),b={inline:p,horizontal:P,vertical:m,inlineSub:p,horizontalSub:m,verticalSub:m},M=(u=b["".concat(r).concat(t?"":"Sub")])===null||u===void 0?void 0:u[o];switch(M){case s:return{offset:-1,sibling:!0};case c:return{offset:1,sibling:!0};case E:return{offset:-1,sibling:!1};case v:return{offset:1,sibling:!1};default:return null}}function Un(r){for(var t=r;t;){if(t.getAttribute("data-menu-list"))return t;t=t.parentElement}return null}function zn(r,t){for(var a=r||document.activeElement;a;){if(t.has(a))return a;a=a.parentElement}return null}function zt(r,t){var a=_n(r,!0);return a.filter(function(o){return t.has(o)})}function Nt(r,t,a){var o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:1;if(!r)return null;var n=zt(r,t),l=n.length,i=n.findIndex(function(u){return a===u});return o<0?i===-1?i=l-1:i-=1:o>0&&(i+=1),i=(i+l)%l,n[i]}function Hn(r,t,a,o,n,l,i,u,s,c){var v=e.useRef(),E=e.useRef();E.current=t;var p=function(){$e.cancel(v.current)};return e.useEffect(function(){return function(){p()}},[]),function(P){var m=P.which;if([].concat(wt,[Je,Ut,De,Oe]).includes(m)){var b,M,I,K=function(){b=new Set,M=new Map,I=new Map;var T=l();return T.forEach(function(D){var w=document.querySelector("[data-menu-id='".concat(dt(o,D),"']"));w&&(b.add(w),I.set(w,D),M.set(D,w))}),b};K();var g=M.get(t),f=zn(g,b),h=I.get(f),d=Vn(r,i(h,!0).length===1,a,m);if(!d&&m!==De&&m!==Oe)return;(wt.includes(m)||[De,Oe].includes(m))&&P.preventDefault();var j=function(T){if(T){var D=T,w=T.querySelector("a");w!=null&&w.getAttribute("href")&&(D=w);var re=I.get(T);u(re),p(),v.current=$e(function(){E.current===re&&D.focus()})}};if([De,Oe].includes(m)||d.sibling||!f){var S;!f||r==="inline"?S=n.current:S=Un(f);var B,G=zt(S,b);m===De?B=G[0]:m===Oe?B=G[G.length-1]:B=Nt(S,b,f,d.offset),j(B)}else if(d.inlineTrigger)s(h);else if(d.offset>0)s(h,!0),p(),v.current=$e(function(){K();var k=f.getAttribute("aria-controls"),T=document.getElementById(k),D=Nt(T,b);j(D)},5);else if(d.offset<0){var N=i(h,!0),L=N[N.length-2],te=M.get(L);s(L,!1),j(te)}}c==null||c(P)}}function jn(r){Promise.resolve().then(r)}var ft="__RC_UTIL_PATH_SPLIT__",_t=function(t){return t.join(ft)},Bn=function(t){return t.split(ft)},st="rc-menu-more";function Gn(){var r=e.useState({}),t=$(r,2),a=t[1],o=e.useRef(new Map),n=e.useRef(new Map),l=e.useState([]),i=$(l,2),u=i[0],s=i[1],c=e.useRef(0),v=e.useRef(!1),E=function(){v.current||a({})},p=e.useCallback(function(g,f){var h=_t(f);n.current.set(h,g),o.current.set(g,h),c.current+=1;var d=c.current;jn(function(){d===c.current&&E()})},[]),P=e.useCallback(function(g,f){var h=_t(f);n.current.delete(h),o.current.delete(g)},[]),m=e.useCallback(function(g){s(g)},[]),b=e.useCallback(function(g,f){var h=o.current.get(g)||"",d=Bn(h);return f&&u.includes(d[0])&&d.unshift(st),d},[u]),M=e.useCallback(function(g,f){return g.some(function(h){var d=b(h,!0);return d.includes(f)})},[b]),I=function(){var f=ye(o.current.keys());return u.length&&f.push(st),f},K=e.useCallback(function(g){var f="".concat(o.current.get(g)).concat(ft),h=new Set;return ye(n.current.keys()).forEach(function(d){d.startsWith(f)&&h.add(n.current.get(d))}),h},[]);return e.useEffect(function(){return function(){v.current=!0}},[]),{registerPath:p,unregisterPath:P,refreshOverflowKeys:m,isSubPathKey:M,getKeyPath:b,getKeys:I,getSubPathKeys:K}}function ke(r){var t=e.useRef(r);t.current=r;var a=e.useCallback(function(){for(var o,n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(o=t.current)===null||o===void 0?void 0:o.call.apply(o,[t].concat(l))},[]);return r?a:void 0}var Wn=Math.random().toFixed(5).toString().slice(2),Dt=0;function qn(r){var t=qe(r,{value:r}),a=$(t,2),o=a[0],n=a[1];return e.useEffect(function(){Dt+=1;var l="".concat(Wn,"-").concat(Dt);n("rc-menu-uuid-".concat(l))},[]),o}function Ht(r,t,a,o){var n=e.useContext(Z),l=n.activeKey,i=n.onActive,u=n.onInactive,s={active:l===r};return t||(s.onMouseEnter=function(c){a==null||a({key:r,domEvent:c}),i(r)},s.onMouseLeave=function(c){o==null||o({key:r,domEvent:c}),u(r)}),s}function jt(r){var t=e.useContext(Z),a=t.mode,o=t.rtl,n=t.inlineIndent;if(a!=="inline")return null;var l=r;return o?{paddingRight:l*n}:{paddingLeft:l*n}}function Bt(r){var t=r.icon,a=r.props,o=r.children,n;return typeof t=="function"?n=e.createElement(t,_({},a)):n=t,n||o||null}var Yn=["item"];function Xe(r){var t=r.item,a=J(r,Yn);return Object.defineProperty(a,"item",{get:function(){return kt(!1,"`info.item` is deprecated since we will move to function component that not provides React Node instance in future."),t}}),a}var Jn=["title","attribute","elementRef"],Xn=["style","className","eventKey","warnKey","disabled","itemIcon","children","role","onMouseEnter","onMouseLeave","onClick","onKeyDown","onFocus"],Zn=["active"],Qn=function(r){Rn(a,r);var t=Pn(a);function a(){return En(this,a),t.apply(this,arguments)}return Kn(a,[{key:"render",value:function(){var n=this.props,l=n.title,i=n.attribute,u=n.elementRef,s=J(n,Jn),c=At(s,["eventKey","popupClassName","popupOffset","onTitleClick"]);return kt(!i,"`attribute` of Menu.Item is deprecated. Please pass attribute directly."),e.createElement(Ae.Item,H({},i,{title:typeof l=="string"?l:void 0},c,{ref:u}))}}]),a}(e.Component),er=e.forwardRef(function(r,t){var a,o=r.style,n=r.className,l=r.eventKey;r.warnKey;var i=r.disabled,u=r.itemIcon,s=r.children,c=r.role,v=r.onMouseEnter,E=r.onMouseLeave,p=r.onClick,P=r.onKeyDown,m=r.onFocus,b=J(r,Xn),M=Lt(l),I=e.useContext(Z),K=I.prefixCls,g=I.onItemClick,f=I.disabled,h=I.overflowDisabled,d=I.itemIcon,j=I.selectedKeys,S=I.onActive,B=e.useContext(vt),G=B._internalRenderMenuItem,N="".concat(K,"-item"),L=e.useRef(),te=e.useRef(),k=f||i,T=Dn(t,te),D=Te(l),w=function(F){return{key:l,keyPath:ye(D).reverse(),item:L.current,domEvent:F}},re=u||d,me=Ht(l,k,v,E),ae=me.active,le=J(me,Zn),X=j.includes(l),ue=jt(D.length),U=function(F){if(!k){var A=w(F);p==null||p(Xe(A)),g(A)}},W=function(F){if(P==null||P(F),F.which===ne.ENTER){var A=w(F);p==null||p(Xe(A)),g(A)}},pe=function(F){S(l),m==null||m(F)},he={};r.role==="option"&&(he["aria-selected"]=X);var se=e.createElement(Qn,H({ref:L,elementRef:T,role:c===null?"none":c||"menuitem",tabIndex:i?null:-1,"data-menu-id":h&&M?null:M},b,le,he,{component:"li","aria-disabled":i,style:_(_({},ue),o),className:fe(N,(a={},R(a,"".concat(N,"-active"),ae),R(a,"".concat(N,"-selected"),X),R(a,"".concat(N,"-disabled"),k),a),n),onClick:U,onKeyDown:W,onFocus:pe}),s,e.createElement(Bt,{props:_(_({},r),{},{isSelected:X}),icon:re}));return G&&(se=G(se,r,{selected:X})),se});function tr(r,t){var a=r.eventKey,o=Ze(),n=Te(a);return e.useEffect(function(){if(o)return o.registerPath(a,n),function(){o.unregisterPath(a,n)}},[n]),o?null:e.createElement(er,H({},r,{ref:t}))}const mt=e.forwardRef(tr);var nr=["className","children"],rr=function(t,a){var o=t.className,n=t.children,l=J(t,nr),i=e.useContext(Z),u=i.prefixCls,s=i.mode,c=i.rtl;return e.createElement("ul",H({className:fe(u,c&&"".concat(u,"-rtl"),"".concat(u,"-sub"),"".concat(u,"-").concat(s==="inline"?"inline":"vertical"),o),role:"menu"},l,{"data-menu-list":!0,ref:a}),n)},pt=e.forwardRef(rr);pt.displayName="SubMenuList";function ht(r,t){return On(r).map(function(a,o){if(e.isValidElement(a)){var n,l,i=a.key,u=(n=(l=a.props)===null||l===void 0?void 0:l.eventKey)!==null&&n!==void 0?n:i,s=u==null;s&&(u="tmp_key-".concat([].concat(ye(t),[o]).join("-")));var c={key:u,eventKey:u};return e.cloneElement(a,c)}return a})}var O={adjustX:1,adjustY:1},ar={topLeft:{points:["bl","tl"],overflow:O},topRight:{points:["br","tr"],overflow:O},bottomLeft:{points:["tl","bl"],overflow:O},bottomRight:{points:["tr","br"],overflow:O},leftTop:{points:["tr","tl"],overflow:O},leftBottom:{points:["br","bl"],overflow:O},rightTop:{points:["tl","tr"],overflow:O},rightBottom:{points:["bl","br"],overflow:O}},ir={topLeft:{points:["bl","tl"],overflow:O},topRight:{points:["br","tr"],overflow:O},bottomLeft:{points:["tl","bl"],overflow:O},bottomRight:{points:["tr","br"],overflow:O},rightTop:{points:["tr","tl"],overflow:O},rightBottom:{points:["br","bl"],overflow:O},leftTop:{points:["tl","tr"],overflow:O},leftBottom:{points:["bl","br"],overflow:O}};function Gt(r,t,a){if(t)return t;if(a)return a[r]||a.other}var or={horizontal:"bottomLeft",vertical:"rightTop","vertical-left":"rightTop","vertical-right":"leftTop"};function lr(r){var t=r.prefixCls,a=r.visible,o=r.children,n=r.popup,l=r.popupClassName,i=r.popupOffset,u=r.disabled,s=r.mode,c=r.onVisibleChange,v=e.useContext(Z),E=v.getPopupContainer,p=v.rtl,P=v.subMenuOpenDelay,m=v.subMenuCloseDelay,b=v.builtinPlacements,M=v.triggerSubMenuAction,I=v.forceSubMenuRender,K=v.rootClassName,g=v.motion,f=v.defaultMotions,h=e.useState(!1),d=$(h,2),j=d[0],S=d[1],B=p?_(_({},ir),b):_(_({},ar),b),G=or[s],N=Gt(s,g,f),L=e.useRef(N);s!=="inline"&&(L.current=N);var te=_(_({},L.current),{},{leavedClassName:"".concat(t,"-hidden"),removeOnLeave:!1,motionAppear:!0}),k=e.useRef();return e.useEffect(function(){return k.current=$e(function(){S(a)}),function(){$e.cancel(k.current)}},[a]),e.createElement(An,{prefixCls:t,popupClassName:fe("".concat(t,"-popup"),R({},"".concat(t,"-rtl"),p),l,K),stretch:s==="horizontal"?"minWidth":null,getPopupContainer:E,builtinPlacements:B,popupPlacement:G,popupVisible:j,popup:n,popupAlign:i&&{offset:i},action:u?[]:[M],mouseEnterDelay:P,mouseLeaveDelay:m,onPopupVisibleChange:c,forceRender:I,popupMotion:te},o)}function ur(r){var t=r.id,a=r.open,o=r.keyPath,n=r.children,l="inline",i=e.useContext(Z),u=i.prefixCls,s=i.forceSubMenuRender,c=i.motion,v=i.defaultMotions,E=i.mode,p=e.useRef(!1);p.current=E===l;var P=e.useState(!p.current),m=$(P,2),b=m[0],M=m[1],I=p.current?a:!1;e.useEffect(function(){p.current&&M(!1)},[E]);var K=_({},Gt(l,c,v));o.length>1&&(K.motionAppear=!1);var g=K.onVisibleChanged;return K.onVisibleChanged=function(f){return!p.current&&!f&&M(!0),g==null?void 0:g(f)},b?null:e.createElement(Le,{mode:l,locked:!p.current},e.createElement($n,H({visible:I},K,{forceRender:s,removeOnLeave:!1,leavedClassName:"".concat(u,"-hidden")}),function(f){var h=f.className,d=f.style;return e.createElement(pt,{id:t,className:h,style:d},n)}))}var sr=["style","className","title","eventKey","warnKey","disabled","internalPopupClose","children","itemIcon","expandIcon","popupClassName","popupOffset","onClick","onMouseEnter","onMouseLeave","onTitleClick","onTitleMouseEnter","onTitleMouseLeave"],cr=["active"],dr=function(t){var a,o=t.style,n=t.className,l=t.title,i=t.eventKey;t.warnKey;var u=t.disabled,s=t.internalPopupClose,c=t.children,v=t.itemIcon,E=t.expandIcon,p=t.popupClassName,P=t.popupOffset,m=t.onClick,b=t.onMouseEnter,M=t.onMouseLeave,I=t.onTitleClick,K=t.onTitleMouseEnter,g=t.onTitleMouseLeave,f=J(t,sr),h=Lt(i),d=e.useContext(Z),j=d.prefixCls,S=d.mode,B=d.openKeys,G=d.disabled,N=d.overflowDisabled,L=d.activeKey,te=d.selectedKeys,k=d.itemIcon,T=d.expandIcon,D=d.onItemClick,w=d.onOpenChange,re=d.onActive,me=e.useContext(vt),ae=me._internalRenderSubMenuItem,le=e.useContext(Vt),X=le.isSubPathKey,ue=Te(),U="".concat(j,"-submenu"),W=G||u,pe=e.useRef(),he=e.useRef(),se=v||k,ie=E||T,F=B.includes(i),A=!N&&F,Fe=X(te,i),Ve=Ht(i,W,K,g),Me=Ve.active,Se=J(Ve,cr),xe=e.useState(!1),Ue=$(xe,2),Re=Ue[0],ze=Ue[1],He=function(Y){W||ze(Y)},Q=function(Y){He(!0),b==null||b({key:i,domEvent:Y})},et=function(Y){He(!1),M==null||M({key:i,domEvent:Y})},Pe=e.useMemo(function(){return Me||(S!=="inline"?Re||X([L],i):!1)},[S,Me,L,Re,i,X]),je=jt(ue.length),tt=function(Y){W||(I==null||I({key:i,domEvent:Y}),S==="inline"&&w(i,!F))},ge=ke(function(ee){m==null||m(Xe(ee)),D(ee)}),Ee=function(Y){S!=="inline"&&w(i,Y)},Ke=function(){re(i)},we=h&&"".concat(h,"-popup"),Ce=e.createElement("div",H({role:"menuitem",style:je,className:"".concat(U,"-title"),tabIndex:W?null:-1,ref:pe,title:typeof l=="string"?l:null,"data-menu-id":N&&h?null:h,"aria-expanded":A,"aria-haspopup":!0,"aria-controls":we,"aria-disabled":W,onClick:tt,onFocus:Ke},Se),l,e.createElement(Bt,{icon:S!=="horizontal"?ie:null,props:_(_({},t),{},{isOpen:A,isSubMenu:!0})},e.createElement("i",{className:"".concat(U,"-arrow")}))),q=e.useRef(S);if(S!=="inline"&&ue.length>1?q.current="vertical":q.current=S,!N){var be=q.current;Ce=e.createElement(lr,{mode:be,prefixCls:U,visible:!s&&A&&S!=="inline",popupClassName:p,popupOffset:P,popup:e.createElement(Le,{mode:be==="horizontal"?"vertical":be},e.createElement(pt,{id:we,ref:he},c)),disabled:W,onVisibleChange:Ee},Ce)}var ce=e.createElement(Ae.Item,H({role:"none"},f,{component:"li",style:o,className:fe(U,"".concat(U,"-").concat(S),n,(a={},R(a,"".concat(U,"-open"),A),R(a,"".concat(U,"-active"),Pe),R(a,"".concat(U,"-selected"),Fe),R(a,"".concat(U,"-disabled"),W),a)),onMouseEnter:Q,onMouseLeave:et}),Ce,!N&&e.createElement(ur,{id:we,open:A,keyPath:ue},c));return ae&&(ce=ae(ce,t,{selected:Fe,active:Pe,open:A,disabled:W})),e.createElement(Le,{onItemClick:ge,mode:S==="horizontal"?"vertical":S,itemIcon:se,expandIcon:ie},ce)};function gt(r){var t=r.eventKey,a=r.children,o=Te(t),n=ht(a,o),l=Ze();e.useEffect(function(){if(l)return l.registerPath(t,o),function(){l.unregisterPath(t,o)}},[o]);var i;return l?i=n:i=e.createElement(dr,r,n),e.createElement(Ft.Provider,{value:o},i)}var vr=["className","title","eventKey","children"],fr=["children"],mr=function(t){var a=t.className,o=t.title;t.eventKey;var n=t.children,l=J(t,vr),i=e.useContext(Z),u=i.prefixCls,s="".concat(u,"-item-group");return e.createElement("li",H({role:"presentation"},l,{onClick:function(v){return v.stopPropagation()},className:fe(s,a)}),e.createElement("div",{role:"presentation",className:"".concat(s,"-title"),title:typeof o=="string"?o:void 0},o),e.createElement("ul",{role:"group",className:"".concat(s,"-list")},n))};function Wt(r){var t=r.children,a=J(r,fr),o=Te(a.eventKey),n=ht(t,o),l=Ze();return l?n:e.createElement(mr,At(a,["warnKey"]),n)}function qt(r){var t=r.className,a=r.style,o=e.useContext(Z),n=o.prefixCls,l=Ze();return l?null:e.createElement("li",{className:fe("".concat(n,"-item-divider"),t),style:a})}var pr=["label","children","key","type"];function ct(r){return(r||[]).map(function(t,a){if(t&&wn(t)==="object"){var o=t,n=o.label,l=o.children,i=o.key,u=o.type,s=J(o,pr),c=i??"tmp-".concat(a);return l||u==="group"?u==="group"?e.createElement(Wt,H({key:c},s,{title:n}),ct(l)):e.createElement(gt,H({key:c},s,{title:n}),ct(l)):u==="divider"?e.createElement(qt,H({key:c},s)):e.createElement(mt,H({key:c},s),n)}return null}).filter(function(t){return t})}function hr(r,t,a){var o=r;return t&&(o=ct(t)),ht(o,a)}var gr=["prefixCls","rootClassName","style","className","tabIndex","items","children","direction","id","mode","inlineCollapsed","disabled","disabledOverflow","subMenuOpenDelay","subMenuCloseDelay","forceSubMenuRender","defaultOpenKeys","openKeys","activeKey","defaultActiveFirst","selectable","multiple","defaultSelectedKeys","selectedKeys","onSelect","onDeselect","inlineIndent","motion","defaultMotions","triggerSubMenuAction","builtinPlacements","itemIcon","expandIcon","overflowedIndicator","overflowedIndicatorPopupClassName","getPopupContainer","onClick","onOpenChange","onKeyDown","openAnimation","openTransitionName","_internalRenderMenuItem","_internalRenderSubMenuItem"],Ie=[],Cr=e.forwardRef(function(r,t){var a,o,n=r,l=n.prefixCls,i=l===void 0?"rc-menu":l,u=n.rootClassName,s=n.style,c=n.className,v=n.tabIndex,E=v===void 0?0:v,p=n.items,P=n.children,m=n.direction,b=n.id,M=n.mode,I=M===void 0?"vertical":M,K=n.inlineCollapsed,g=n.disabled,f=n.disabledOverflow,h=n.subMenuOpenDelay,d=h===void 0?.1:h,j=n.subMenuCloseDelay,S=j===void 0?.1:j,B=n.forceSubMenuRender,G=n.defaultOpenKeys,N=n.openKeys,L=n.activeKey,te=n.defaultActiveFirst,k=n.selectable,T=k===void 0?!0:k,D=n.multiple,w=D===void 0?!1:D,re=n.defaultSelectedKeys,me=n.selectedKeys,ae=n.onSelect,le=n.onDeselect,X=n.inlineIndent,ue=X===void 0?24:X,U=n.motion,W=n.defaultMotions,pe=n.triggerSubMenuAction,he=pe===void 0?"hover":pe,se=n.builtinPlacements,ie=n.itemIcon,F=n.expandIcon,A=n.overflowedIndicator,Fe=A===void 0?"...":A,Ve=n.overflowedIndicatorPopupClassName,Me=n.getPopupContainer,Se=n.onClick,xe=n.onOpenChange,Ue=n.onKeyDown;n.openAnimation,n.openTransitionName;var Re=n._internalRenderMenuItem,ze=n._internalRenderSubMenuItem,He=J(n,gr),Q=e.useMemo(function(){return hr(P,p,Ie)},[P,p]),et=e.useState(!1),Pe=$(et,2),je=Pe[0],tt=Pe[1],ge=e.useRef(),Ee=qn(b),Ke=m==="rtl",we=qe(G,{value:N,postState:function(C){return C||Ie}}),Ce=$(we,2),q=Ce[0],be=Ce[1],ce=function(C){var y=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;function V(){be(C),xe==null||xe(C)}y?kn.flushSync(V):V()},ee=e.useState(q),Y=$(ee,2),Yt=Y[0],Jt=Y[1],nt=e.useRef(!1),Xt=e.useMemo(function(){return(I==="inline"||I==="vertical")&&K?["vertical",K]:[I,!1]},[I,K]),Ct=$(Xt,2),Be=Ct[0],rt=Ct[1],bt=Be==="inline",Zt=e.useState(Be),It=$(Zt,2),oe=It[0],Qt=It[1],en=e.useState(rt),yt=$(en,2),tn=yt[0],nn=yt[1];e.useEffect(function(){Qt(Be),nn(rt),nt.current&&(bt?be(Yt):ce(Ie))},[Be,rt]);var rn=e.useState(0),Mt=$(rn,2),Ge=Mt[0],an=Mt[1],at=Ge>=Q.length-1||oe!=="horizontal"||f;e.useEffect(function(){bt&&Jt(q)},[q]),e.useEffect(function(){return nt.current=!0,function(){nt.current=!1}},[]);var de=Gn(),St=de.registerPath,xt=de.unregisterPath,on=de.refreshOverflowKeys,Rt=de.isSubPathKey,ln=de.getKeyPath,un=de.getKeys,sn=de.getSubPathKeys,cn=e.useMemo(function(){return{registerPath:St,unregisterPath:xt}},[St,xt]),dn=e.useMemo(function(){return{isSubPathKey:Rt}},[Rt]);e.useEffect(function(){on(at?Ie:Q.slice(Ge+1).map(function(x){return x.key}))},[Ge,at]);var vn=qe(L||te&&((a=Q[0])===null||a===void 0?void 0:a.key),{value:L}),Pt=$(vn,2),Ne=Pt[0],it=Pt[1],fn=ke(function(x){it(x)}),mn=ke(function(){it(void 0)});e.useImperativeHandle(t,function(){return{list:ge.current,focus:function(C){var y,V=Ne??((y=Q.find(function(xn){return!xn.props.disabled}))===null||y===void 0?void 0:y.key);if(V){var z,ve,_e;(z=ge.current)===null||z===void 0||(ve=z.querySelector("li[data-menu-id='".concat(dt(Ee,V),"']")))===null||ve===void 0||(_e=ve.focus)===null||_e===void 0||_e.call(ve,C)}}}});var pn=qe(re||[],{value:me,postState:function(C){return Array.isArray(C)?C:C==null?Ie:[C]}}),Et=$(pn,2),We=Et[0],hn=Et[1],gn=function(C){if(T){var y=C.key,V=We.includes(y),z;w?V?z=We.filter(function(_e){return _e!==y}):z=[].concat(ye(We),[y]):z=[y],hn(z);var ve=_(_({},C),{},{selectedKeys:z});V?le==null||le(ve):ae==null||ae(ve)}!w&&q.length&&oe!=="inline"&&ce(Ie)},Cn=ke(function(x){Se==null||Se(Xe(x)),gn(x)}),Kt=ke(function(x,C){var y=q.filter(function(z){return z!==x});if(C)y.push(x);else if(oe!=="inline"){var V=sn(x);y=y.filter(function(z){return!V.has(z)})}Ot(q,y,!0)||ce(y,!0)}),bn=function(C,y){var V=y??!q.includes(C);Kt(C,V)},In=Hn(oe,Ne,Ke,Ee,ge,un,ln,it,bn,Ue);e.useEffect(function(){tt(!0)},[]);var yn=e.useMemo(function(){return{_internalRenderMenuItem:Re,_internalRenderSubMenuItem:ze}},[Re,ze]),Mn=oe!=="horizontal"||f?Q:Q.map(function(x,C){return e.createElement(Le,{key:x.key,overflowDisabled:C>Ge},x)}),Sn=e.createElement(Ae,H({id:b,ref:ge,prefixCls:"".concat(i,"-overflow"),component:"ul",itemComponent:mt,className:fe(i,"".concat(i,"-root"),"".concat(i,"-").concat(oe),c,(o={},R(o,"".concat(i,"-inline-collapsed"),tn),R(o,"".concat(i,"-rtl"),Ke),o),u),dir:m,style:s,role:"menu",tabIndex:E,data:Mn,renderRawItem:function(C){return C},renderRawRest:function(C){var y=C.length,V=y?Q.slice(-y):null;return e.createElement(gt,{eventKey:st,title:Fe,disabled:at,internalPopupClose:y===0,popupClassName:Ve},V)},maxCount:oe!=="horizontal"||f?Ae.INVALIDATE:Ae.RESPONSIVE,ssr:"full","data-menu-list":!0,onVisibleChange:function(C){an(C)},onKeyDown:In},He));return e.createElement(vt.Provider,{value:yn},e.createElement($t.Provider,{value:Ee},e.createElement(Le,{prefixCls:i,rootClassName:u,mode:oe,openKeys:q,rtl:Ke,disabled:g,motion:je?U:null,defaultMotions:je?W:null,activeKey:Ne,onActive:fn,onInactive:mn,selectedKeys:We,inlineIndent:ue,subMenuOpenDelay:d,subMenuCloseDelay:S,forceSubMenuRender:B,builtinPlacements:se,triggerSubMenuAction:he,getPopupContainer:Me,itemIcon:ie,expandIcon:F,onItemClick:Cn,onOpenChange:Kt},e.createElement(Vt.Provider,{value:dn},Sn),e.createElement("div",{style:{display:"none"},"aria-hidden":!0},e.createElement(Tt.Provider,{value:cn},Q)))))}),Qe=Cr;Qe.Item=mt;Qe.SubMenu=gt;Qe.ItemGroup=Wt;Qe.Divider=qt;export{qt as D,Qe as E,mt as M,gt as S,Wt as a,Te as u};
