import{r as p}from"./react-16261f20.js";import{a as k,n as re,o as D,h as R,d as Z,_ as ee,b as ce,e as be,i as Oe,j as Le,g as fe,p as Ie,f as ve,c as B}from"./@babel-9367d27f.js";import{w as H,t as J,F as j,G as _,i as xe,y as Ae}from"./rc-util-8ac52126.js";import{S as Ue}from"./async-validator-dee29e8b.js";var z="RC_FORM_INTERNAL_HOOKS",N=function(){H(!1,"Can not find FormContext. Please make sure you wrap Field under Form.")},q=p.createContext({getFieldValue:N,getFieldsValue:N,getFieldError:N,getFieldWarning:N,getFieldsError:N,isFieldsTouched:N,isFieldTouched:N,isFieldValidating:N,isFieldsValidating:N,resetFields:N,setFields:N,setFieldValue:N,setFieldsValue:N,validateFields:N,submit:N,getInternalHooks:function(){return N(),{dispatch:N,initEntityValue:N,registerField:N,useSubscribe:N,setInitialValues:N,destroyForm:N,setCallbacks:N,registerWatch:N,getFields:N,setValidateMessages:N,setPreserve:N,getInitialValue:N}}}),te=p.createContext(null);function ae(o){return o==null?[]:Array.isArray(o)?o:[o]}function We(o){return o&&!!o._init}var x="'${name}' is not a valid ${type}",ke={default:"Validation error on field '${name}'",required:"'${name}' is required",enum:"'${name}' must be one of [${enum}]",whitespace:"'${name}' cannot be empty",date:{format:"'${name}' is invalid for format date",parse:"'${name}' could not be parsed as date",invalid:"'${name}' is invalid date"},types:{string:x,method:x,array:x,object:x,number:x,date:x,boolean:x,integer:x,float:x,regexp:x,email:x,url:x,hex:x},string:{len:"'${name}' must be exactly ${len} characters",min:"'${name}' must be at least ${min} characters",max:"'${name}' cannot be longer than ${max} characters",range:"'${name}' must be between ${min} and ${max} characters"},number:{len:"'${name}' must equal ${len}",min:"'${name}' cannot be less than ${min}",max:"'${name}' cannot be greater than ${max}",range:"'${name}' must be between ${min} and ${max}"},array:{len:"'${name}' must be exactly ${len} in length",min:"'${name}' cannot be less than ${min} in length",max:"'${name}' cannot be greater than ${max} in length",range:"'${name}' must be between ${min} and ${max} in length"},pattern:{mismatch:"'${name}' does not match pattern ${pattern}"}},ye=Ue;function _e(o,u){return o.replace(/\$\{\w+\}/g,function(t){var r=t.slice(2,-1);return u[r]})}var Ve="CODE_LOGIC_ERROR";function se(o,u,t,r,e){return ue.apply(this,arguments)}function ue(){return ue=re(D().mark(function o(u,t,r,e,n){var a,d,i,s,l,c,f,P,y;return D().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return a=k({},r),delete a.ruleIndex,ye.warning=function(){},a.validator&&(d=a.validator,a.validator=function(){try{return d.apply(void 0,arguments)}catch(m){return console.error(m),Promise.reject(Ve)}}),i=null,a&&a.type==="array"&&a.defaultField&&(i=a.defaultField,delete a.defaultField),s=new ye(Z({},u,[a])),l=J(ke,e.validateMessages),s.messages(l),c=[],v.prev=10,v.next=13,Promise.resolve(s.validate(Z({},u,t),k({},e)));case 13:v.next=18;break;case 15:v.prev=15,v.t0=v.catch(10),v.t0.errors&&(c=v.t0.errors.map(function(m,h){var V=m.message,E=V===Ve?l.default:V;return p.isValidElement(E)?p.cloneElement(E,{key:"error_".concat(h)}):E}));case 18:if(!(!c.length&&i)){v.next=23;break}return v.next=21,Promise.all(t.map(function(m,h){return se("".concat(u,".").concat(h),m,i,e,n)}));case 21:return f=v.sent,v.abrupt("return",f.reduce(function(m,h){return[].concat(R(m),R(h))},[]));case 23:return P=k(k({},r),{},{name:u,enum:(r.enum||[]).join(", ")},n),y=c.map(function(m){return typeof m=="string"?_e(m,P):m}),v.abrupt("return",y);case 26:case"end":return v.stop()}},o,null,[[10,15]])})),ue.apply(this,arguments)}function je(o,u,t,r,e,n){var a=o.join("."),d=t.map(function(l,c){var f=l.validator,P=k(k({},l),{},{ruleIndex:c});return f&&(P.validator=function(y,g,v){var m=!1,h=function(){for(var $=arguments.length,F=new Array($),w=0;w<$;w++)F[w]=arguments[w];Promise.resolve().then(function(){H(!m,"Your validator function has already return a promise. `callback` will be ignored."),m||v.apply(void 0,F)})},V=f(y,g,h);m=V&&typeof V.then=="function"&&typeof V.catch=="function",H(m,"`callback` is deprecated. Please return a promise instead."),m&&V.then(function(){v()}).catch(function(E){v(E||" ")})}),P}).sort(function(l,c){var f=l.warningOnly,P=l.ruleIndex,y=c.warningOnly,g=c.ruleIndex;return!!f==!!y?P-g:f?1:-1}),i;if(e===!0)i=new Promise(function(){var l=re(D().mark(function c(f,P){var y,g,v;return D().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:y=0;case 1:if(!(y<d.length)){h.next=12;break}return g=d[y],h.next=5,se(a,u,g,r,n);case 5:if(v=h.sent,!v.length){h.next=9;break}return P([{errors:v,rule:g}]),h.abrupt("return");case 9:y+=1,h.next=1;break;case 12:f([]);case 13:case"end":return h.stop()}},c)}));return function(c,f){return l.apply(this,arguments)}}());else{var s=d.map(function(l){return se(a,u,l,r,n).then(function(c){return{errors:c,rule:l}})});i=(e?De(s):He(s)).then(function(l){return Promise.reject(l)})}return i.catch(function(l){return l}),i}function He(o){return le.apply(this,arguments)}function le(){return le=re(D().mark(function o(u){return D().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",Promise.all(u).then(function(e){var n,a=(n=[]).concat.apply(n,R(e));return a}));case 1:case"end":return r.stop()}},o)})),le.apply(this,arguments)}function De(o){return oe.apply(this,arguments)}function oe(){return oe=re(D().mark(function o(u){var t;return D().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=0,e.abrupt("return",new Promise(function(n){u.forEach(function(a){a.then(function(d){d.errors.length&&n([d]),t+=1,t===u.length&&n([])})})}));case 2:case"end":return e.stop()}},o)})),oe.apply(this,arguments)}function S(o){return ae(o)}function Pe(o,u){var t={};return u.forEach(function(r){var e=j(o,r);t=_(t,r,e)}),t}function Y(o,u){return o&&o.some(function(t){return Re(t,u)})}function Re(o,u){return!o||!u||o.length!==u.length?!1:o.every(function(t,r){return u[r]===t})}function Ke(o,u){if(o===u)return!0;if(!o&&u||o&&!u||!o||!u||ee(o)!=="object"||ee(u)!=="object")return!1;var t=Object.keys(o),r=Object.keys(u),e=new Set([].concat(t,r));return R(e).every(function(n){var a=o[n],d=u[n];return typeof a=="function"&&typeof d=="function"?!0:a===d})}function ze(o){var u=arguments.length<=1?void 0:arguments[1];return u&&u.target&&ee(u.target)==="object"&&o in u.target?u.target[o]:u}function Ce(o,u,t){var r=o.length;if(u<0||u>=r||t<0||t>=r)return o;var e=o[u],n=u-t;return n>0?[].concat(R(o.slice(0,t)),[e],R(o.slice(t,u)),R(o.slice(u+1,r))):n<0?[].concat(R(o.slice(0,u)),R(o.slice(u+1,t+1)),[e],R(o.slice(t+1,r))):o}var Ge=["name"],A=[];function Ee(o,u,t,r,e,n){return typeof o=="function"?o(u,t,"source"in n?{source:n.source}:{}):r!==e}var ge=function(o){Oe(t,o);var u=Le(t);function t(r){var e;if(fe(this,t),e=u.call(this,r),e.state={resetCount:0},e.cancelRegisterFunc=null,e.mounted=!1,e.touched=!1,e.dirty=!1,e.validatePromise=void 0,e.prevValidating=void 0,e.errors=A,e.warnings=A,e.cancelRegister=function(){var i=e.props,s=i.preserve,l=i.isListField,c=i.name;e.cancelRegisterFunc&&e.cancelRegisterFunc(l,s,S(c)),e.cancelRegisterFunc=null},e.getNamePath=function(){var i=e.props,s=i.name,l=i.fieldContext,c=l.prefixName,f=c===void 0?[]:c;return s!==void 0?[].concat(R(f),R(s)):[]},e.getRules=function(){var i=e.props,s=i.rules,l=s===void 0?[]:s,c=i.fieldContext;return l.map(function(f){return typeof f=="function"?f(c):f})},e.refresh=function(){e.mounted&&e.setState(function(i){var s=i.resetCount;return{resetCount:s+1}})},e.metaCache=null,e.triggerMetaEvent=function(i){var s=e.props.onMetaChange;if(s){var l=k(k({},e.getMeta()),{},{destroy:i});xe(e.metaCache,l)||s(l),e.metaCache=l}else e.metaCache=null},e.onStoreChange=function(i,s,l){var c=e.props,f=c.shouldUpdate,P=c.dependencies,y=P===void 0?[]:P,g=c.onReset,v=l.store,m=e.getNamePath(),h=e.getValue(i),V=e.getValue(v),E=s&&Y(s,m);switch(l.type==="valueUpdate"&&l.source==="external"&&h!==V&&(e.touched=!0,e.dirty=!0,e.validatePromise=null,e.errors=A,e.warnings=A,e.triggerMetaEvent()),l.type){case"reset":if(!s||E){e.touched=!1,e.dirty=!1,e.validatePromise=void 0,e.errors=A,e.warnings=A,e.triggerMetaEvent(),g==null||g(),e.refresh();return}break;case"remove":{if(f){e.reRender();return}break}case"setField":{if(E){var $=l.data;"touched"in $&&(e.touched=$.touched),"validating"in $&&!("originRCField"in $)&&(e.validatePromise=$.validating?Promise.resolve([]):null),"errors"in $&&(e.errors=$.errors||A),"warnings"in $&&(e.warnings=$.warnings||A),e.dirty=!0,e.triggerMetaEvent(),e.reRender();return}if(f&&!m.length&&Ee(f,i,v,h,V,l)){e.reRender();return}break}case"dependenciesUpdate":{var F=y.map(S);if(F.some(function(w){return Y(l.relatedFields,w)})){e.reRender();return}break}default:if(E||(!y.length||m.length||f)&&Ee(f,i,v,h,V,l)){e.reRender();return}break}f===!0&&e.reRender()},e.validateRules=function(i){var s=e.getNamePath(),l=e.getValue(),c=i||{},f=c.triggerName,P=c.validateOnly,y=P===void 0?!1:P,g=Promise.resolve().then(function(){if(!e.mounted)return[];var v=e.props,m=v.validateFirst,h=m===void 0?!1:m,V=v.messageVariables,E=e.getRules();f&&(E=E.filter(function(F){return F}).filter(function(F){var w=F.validateTrigger;if(!w)return!0;var T=ae(w);return T.includes(f)}));var $=je(s,l,E,i,h,V);return $.catch(function(F){return F}).then(function(){var F=arguments.length>0&&arguments[0]!==void 0?arguments[0]:A;if(e.validatePromise===g){var w;e.validatePromise=null;var T=[],O=[];(w=F.forEach)===null||w===void 0||w.call(F,function(C){var M=C.rule.warningOnly,b=C.errors,L=b===void 0?A:b;M?O.push.apply(O,R(L)):T.push.apply(T,R(L))}),e.errors=T,e.warnings=O,e.triggerMetaEvent(),e.reRender()}}),$});return y||(e.validatePromise=g,e.dirty=!0,e.errors=A,e.warnings=A,e.triggerMetaEvent(),e.reRender()),g},e.isFieldValidating=function(){return!!e.validatePromise},e.isFieldTouched=function(){return e.touched},e.isFieldDirty=function(){if(e.dirty||e.props.initialValue!==void 0)return!0;var i=e.props.fieldContext,s=i.getInternalHooks(z),l=s.getInitialValue;return l(e.getNamePath())!==void 0},e.getErrors=function(){return e.errors},e.getWarnings=function(){return e.warnings},e.isListField=function(){return e.props.isListField},e.isList=function(){return e.props.isList},e.isPreserve=function(){return e.props.preserve},e.getMeta=function(){e.prevValidating=e.isFieldValidating();var i={touched:e.isFieldTouched(),validating:e.prevValidating,errors:e.errors,warnings:e.warnings,name:e.getNamePath(),validated:e.validatePromise===null};return i},e.getOnlyChild=function(i){if(typeof i=="function"){var s=e.getMeta();return k(k({},e.getOnlyChild(i(e.getControlled(),s,e.props.fieldContext))),{},{isFunction:!0})}var l=Ae(i);return l.length!==1||!p.isValidElement(l[0])?{child:l,isFunction:!1}:{child:l[0],isFunction:!1}},e.getValue=function(i){var s=e.props.fieldContext.getFieldsValue,l=e.getNamePath();return j(i||s(!0),l)},e.getControlled=function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},s=e.props,l=s.trigger,c=s.validateTrigger,f=s.getValueFromEvent,P=s.normalize,y=s.valuePropName,g=s.getValueProps,v=s.fieldContext,m=c!==void 0?c:v.validateTrigger,h=e.getNamePath(),V=v.getInternalHooks,E=v.getFieldsValue,$=V(z),F=$.dispatch,w=e.getValue(),T=g||function(b){return Z({},y,b)},O=i[l],C=k(k({},i),T(w));C[l]=function(){e.touched=!0,e.dirty=!0,e.triggerMetaEvent();for(var b,L=arguments.length,I=new Array(L),W=0;W<L;W++)I[W]=arguments[W];f?b=f.apply(void 0,I):b=ze.apply(void 0,[y].concat(I)),P&&(b=P(b,w,E(!0))),F({type:"updateValue",namePath:h,value:b}),O&&O.apply(void 0,I)};var M=ae(m||[]);return M.forEach(function(b){var L=C[b];C[b]=function(){L&&L.apply(void 0,arguments);var I=e.props.rules;I&&I.length&&F({type:"validateField",namePath:h,triggerName:b})}}),C},r.fieldContext){var n=r.fieldContext.getInternalHooks,a=n(z),d=a.initEntityValue;d(Ie(e))}return e}return ve(t,[{key:"componentDidMount",value:function(){var e=this.props,n=e.shouldUpdate,a=e.fieldContext;if(this.mounted=!0,a){var d=a.getInternalHooks,i=d(z),s=i.registerField;this.cancelRegisterFunc=s(this)}n===!0&&this.reRender()}},{key:"componentWillUnmount",value:function(){this.cancelRegister(),this.triggerMetaEvent(!0),this.mounted=!1}},{key:"reRender",value:function(){this.mounted&&this.forceUpdate()}},{key:"render",value:function(){var e=this.state.resetCount,n=this.props.children,a=this.getOnlyChild(n),d=a.child,i=a.isFunction,s;return i?s=d:p.isValidElement(d)?s=p.cloneElement(d,this.getControlled(d.props)):(H(!d,"`children` of Field is not validate ReactElement."),s=d),p.createElement(p.Fragment,{key:e},s)}}]),t}(p.Component);ge.contextType=q;ge.defaultProps={trigger:"onChange",valuePropName:"value"};function $e(o){var u=o.name,t=ce(o,Ge),r=p.useContext(q),e=p.useContext(te),n=u!==void 0?S(u):void 0,a="keep";return t.isListField||(a="_".concat((n||[]).join("_"))),p.createElement(ge,be({key:a,name:n,isListField:!!e},t,{fieldContext:r}))}var qe=function(u){var t=u.name,r=u.initialValue,e=u.children,n=u.rules,a=u.validateTrigger,d=u.isListField,i=p.useContext(q),s=p.useContext(te),l=p.useRef({keys:[],id:0}),c=l.current,f=p.useMemo(function(){var v=S(i.prefixName)||[];return[].concat(R(v),R(S(t)))},[i.prefixName,t]),P=p.useMemo(function(){return k(k({},i),{},{prefixName:f})},[i,f]),y=p.useMemo(function(){return{getKey:function(m){var h=f.length,V=m[h];return[c.keys[V],m.slice(h+1)]}}},[f]);if(typeof e!="function")return H(!1,"Form.List only accepts function as children."),null;var g=function(m,h,V){var E=V.source;return E==="internal"?!1:m!==h};return p.createElement(te.Provider,{value:y},p.createElement(q.Provider,{value:P},p.createElement($e,{name:[],shouldUpdate:g,rules:n,validateTrigger:a,initialValue:r,isList:!0,isListField:d??!!s},function(v,m){var h=v.value,V=h===void 0?[]:h,E=v.onChange,$=i.getFieldValue,F=function(){var C=$(f||[]);return C||[]},w={add:function(C,M){var b=F();M>=0&&M<=b.length?(c.keys=[].concat(R(c.keys.slice(0,M)),[c.id],R(c.keys.slice(M))),E([].concat(R(b.slice(0,M)),[C],R(b.slice(M))))):(c.keys=[].concat(R(c.keys),[c.id]),E([].concat(R(b),[C]))),c.id+=1},remove:function(C){var M=F(),b=new Set(Array.isArray(C)?C:[C]);b.size<=0||(c.keys=c.keys.filter(function(L,I){return!b.has(I)}),E(M.filter(function(L,I){return!b.has(I)})))},move:function(C,M){if(C!==M){var b=F();C<0||C>=b.length||M<0||M>=b.length||(c.keys=Ce(c.keys,C,M),E(Ce(b,C,M)))}}},T=V||[];return Array.isArray(T)||(T=[]),e(T.map(function(O,C){var M=c.keys[C];return M===void 0&&(c.keys[C]=c.id,M=c.keys[C],c.id+=1),{name:C,key:M,isListField:!0}}),w,m)})))};function Je(o){var u=!1,t=o.length,r=[];return o.length?new Promise(function(e,n){o.forEach(function(a,d){a.catch(function(i){return u=!0,i}).then(function(i){t-=1,r[d]=i,!(t>0)&&(u&&n(r),e(r))})})}):Promise.resolve([])}var Ne="__@field_split__";function ie(o){return o.map(function(u){return"".concat(ee(u),":").concat(u)}).join(Ne)}var G=function(){function o(){fe(this,o),this.kvs=new Map}return ve(o,[{key:"set",value:function(t,r){this.kvs.set(ie(t),r)}},{key:"get",value:function(t){return this.kvs.get(ie(t))}},{key:"update",value:function(t,r){var e=this.get(t),n=r(e);n?this.set(t,n):this.delete(t)}},{key:"delete",value:function(t){this.kvs.delete(ie(t))}},{key:"map",value:function(t){return R(this.kvs.entries()).map(function(r){var e=B(r,2),n=e[0],a=e[1],d=n.split(Ne);return t({key:d.map(function(i){var s=i.match(/^([^:]*):(.*)$/),l=B(s,3),c=l[1],f=l[2];return c==="number"?Number(f):f}),value:a})})}},{key:"toJSON",value:function(){var t={};return this.map(function(r){var e=r.key,n=r.value;return t[e.join(".")]=n,null}),t}}]),o}(),Ye=["name"],Be=ve(function o(u){var t=this;fe(this,o),this.formHooked=!1,this.forceRootUpdate=void 0,this.subscribable=!0,this.store={},this.fieldEntities=[],this.initialValues={},this.callbacks={},this.validateMessages=null,this.preserve=null,this.lastValidatePromise=null,this.getForm=function(){return{getFieldValue:t.getFieldValue,getFieldsValue:t.getFieldsValue,getFieldError:t.getFieldError,getFieldWarning:t.getFieldWarning,getFieldsError:t.getFieldsError,isFieldsTouched:t.isFieldsTouched,isFieldTouched:t.isFieldTouched,isFieldValidating:t.isFieldValidating,isFieldsValidating:t.isFieldsValidating,resetFields:t.resetFields,setFields:t.setFields,setFieldValue:t.setFieldValue,setFieldsValue:t.setFieldsValue,validateFields:t.validateFields,submit:t.submit,_init:!0,getInternalHooks:t.getInternalHooks}},this.getInternalHooks=function(r){return r===z?(t.formHooked=!0,{dispatch:t.dispatch,initEntityValue:t.initEntityValue,registerField:t.registerField,useSubscribe:t.useSubscribe,setInitialValues:t.setInitialValues,destroyForm:t.destroyForm,setCallbacks:t.setCallbacks,setValidateMessages:t.setValidateMessages,getFields:t.getFields,setPreserve:t.setPreserve,getInitialValue:t.getInitialValue,registerWatch:t.registerWatch}):(H(!1,"`getInternalHooks` is internal usage. Should not call directly."),null)},this.useSubscribe=function(r){t.subscribable=r},this.prevWithoutPreserves=null,this.setInitialValues=function(r,e){if(t.initialValues=r||{},e){var n,a=J(r,t.store);(n=t.prevWithoutPreserves)===null||n===void 0||n.map(function(d){var i=d.key;a=_(a,i,j(r,i))}),t.prevWithoutPreserves=null,t.updateStore(a)}},this.destroyForm=function(){var r=new G;t.getFieldEntities(!0).forEach(function(e){t.isMergedPreserve(e.isPreserve())||r.set(e.getNamePath(),!0)}),t.prevWithoutPreserves=r},this.getInitialValue=function(r){var e=j(t.initialValues,r);return r.length?J(e):e},this.setCallbacks=function(r){t.callbacks=r},this.setValidateMessages=function(r){t.validateMessages=r},this.setPreserve=function(r){t.preserve=r},this.watchList=[],this.registerWatch=function(r){return t.watchList.push(r),function(){t.watchList=t.watchList.filter(function(e){return e!==r})}},this.notifyWatch=function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];if(t.watchList.length){var e=t.getFieldsValue(),n=t.getFieldsValue(!0);t.watchList.forEach(function(a){a(e,n,r)})}},this.timeoutId=null,this.warningUnhooked=function(){},this.updateStore=function(r){t.store=r},this.getFieldEntities=function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;return r?t.fieldEntities.filter(function(e){return e.getNamePath().length}):t.fieldEntities},this.getFieldsMap=function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,e=new G;return t.getFieldEntities(r).forEach(function(n){var a=n.getNamePath();e.set(a,n)}),e},this.getFieldEntitiesForNamePathList=function(r){if(!r)return t.getFieldEntities(!0);var e=t.getFieldsMap(!0);return r.map(function(n){var a=S(n);return e.get(a)||{INVALIDATE_NAME_PATH:S(n)}})},this.getFieldsValue=function(r,e){if(t.warningUnhooked(),r===!0&&!e)return t.store;var n=t.getFieldEntitiesForNamePathList(Array.isArray(r)?r:null),a=[];return n.forEach(function(d){var i,s="INVALIDATE_NAME_PATH"in d?d.INVALIDATE_NAME_PATH:d.getNamePath();if(!(!r&&(!((i=d.isListField)===null||i===void 0)&&i.call(d))))if(!e)a.push(s);else{var l="getMeta"in d?d.getMeta():null;e(l)&&a.push(s)}}),Pe(t.store,a.map(S))},this.getFieldValue=function(r){t.warningUnhooked();var e=S(r);return j(t.store,e)},this.getFieldsError=function(r){t.warningUnhooked();var e=t.getFieldEntitiesForNamePathList(r);return e.map(function(n,a){return n&&!("INVALIDATE_NAME_PATH"in n)?{name:n.getNamePath(),errors:n.getErrors(),warnings:n.getWarnings()}:{name:S(r[a]),errors:[],warnings:[]}})},this.getFieldError=function(r){t.warningUnhooked();var e=S(r),n=t.getFieldsError([e])[0];return n.errors},this.getFieldWarning=function(r){t.warningUnhooked();var e=S(r),n=t.getFieldsError([e])[0];return n.warnings},this.isFieldsTouched=function(){t.warningUnhooked();for(var r=arguments.length,e=new Array(r),n=0;n<r;n++)e[n]=arguments[n];var a=e[0],d=e[1],i,s=!1;e.length===0?i=null:e.length===1?Array.isArray(a)?(i=a.map(S),s=!1):(i=null,s=a):(i=a.map(S),s=d);var l=t.getFieldEntities(!0),c=function(v){return v.isFieldTouched()};if(!i)return s?l.every(c):l.some(c);var f=new G;i.forEach(function(g){f.set(g,[])}),l.forEach(function(g){var v=g.getNamePath();i.forEach(function(m){m.every(function(h,V){return v[V]===h})&&f.update(m,function(h){return[].concat(R(h),[g])})})});var P=function(v){return v.some(c)},y=f.map(function(g){var v=g.value;return v});return s?y.every(P):y.some(P)},this.isFieldTouched=function(r){return t.warningUnhooked(),t.isFieldsTouched([r])},this.isFieldsValidating=function(r){t.warningUnhooked();var e=t.getFieldEntities();if(!r)return e.some(function(a){return a.isFieldValidating()});var n=r.map(S);return e.some(function(a){var d=a.getNamePath();return Y(n,d)&&a.isFieldValidating()})},this.isFieldValidating=function(r){return t.warningUnhooked(),t.isFieldsValidating([r])},this.resetWithFieldInitialValue=function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=new G,n=t.getFieldEntities(!0);n.forEach(function(i){var s=i.props.initialValue,l=i.getNamePath();if(s!==void 0){var c=e.get(l)||new Set;c.add({entity:i,value:s}),e.set(l,c)}});var a=function(s){s.forEach(function(l){var c=l.props.initialValue;if(c!==void 0){var f=l.getNamePath(),P=t.getInitialValue(f);if(P!==void 0)H(!1,"Form already set 'initialValues' with path '".concat(f.join("."),"'. Field can not overwrite it."));else{var y=e.get(f);if(y&&y.size>1)H(!1,"Multiple Field with path '".concat(f.join("."),"' set 'initialValue'. Can not decide which one to pick."));else if(y){var g=t.getFieldValue(f);(!r.skipExist||g===void 0)&&t.updateStore(_(t.store,f,R(y)[0].value))}}}})},d;r.entities?d=r.entities:r.namePathList?(d=[],r.namePathList.forEach(function(i){var s=e.get(i);if(s){var l;(l=d).push.apply(l,R(R(s).map(function(c){return c.entity})))}})):d=n,a(d)},this.resetFields=function(r){t.warningUnhooked();var e=t.store;if(!r){t.updateStore(J(t.initialValues)),t.resetWithFieldInitialValue(),t.notifyObservers(e,null,{type:"reset"}),t.notifyWatch();return}var n=r.map(S);n.forEach(function(a){var d=t.getInitialValue(a);t.updateStore(_(t.store,a,d))}),t.resetWithFieldInitialValue({namePathList:n}),t.notifyObservers(e,n,{type:"reset"}),t.notifyWatch(n)},this.setFields=function(r){t.warningUnhooked();var e=t.store,n=[];r.forEach(function(a){var d=a.name,i=ce(a,Ye),s=S(d);n.push(s),"value"in i&&t.updateStore(_(t.store,s,i.value)),t.notifyObservers(e,[s],{type:"setField",data:a})}),t.notifyWatch(n)},this.getFields=function(){var r=t.getFieldEntities(!0),e=r.map(function(n){var a=n.getNamePath(),d=n.getMeta(),i=k(k({},d),{},{name:a,value:t.getFieldValue(a)});return Object.defineProperty(i,"originRCField",{value:!0}),i});return e},this.initEntityValue=function(r){var e=r.props.initialValue;if(e!==void 0){var n=r.getNamePath(),a=j(t.store,n);a===void 0&&t.updateStore(_(t.store,n,e))}},this.isMergedPreserve=function(r){var e=r!==void 0?r:t.preserve;return e??!0},this.registerField=function(r){t.fieldEntities.push(r);var e=r.getNamePath();if(t.notifyWatch([e]),r.props.initialValue!==void 0){var n=t.store;t.resetWithFieldInitialValue({entities:[r],skipExist:!0}),t.notifyObservers(n,[r.getNamePath()],{type:"valueUpdate",source:"internal"})}return function(a,d){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[];if(t.fieldEntities=t.fieldEntities.filter(function(c){return c!==r}),!t.isMergedPreserve(d)&&(!a||i.length>1)){var s=a?void 0:t.getInitialValue(e);if(e.length&&t.getFieldValue(e)!==s&&t.fieldEntities.every(function(c){return!Re(c.getNamePath(),e)})){var l=t.store;t.updateStore(_(l,e,s,!0)),t.notifyObservers(l,[e],{type:"remove"}),t.triggerDependenciesUpdate(l,e)}}t.notifyWatch([e])}},this.dispatch=function(r){switch(r.type){case"updateValue":{var e=r.namePath,n=r.value;t.updateValue(e,n);break}case"validateField":{var a=r.namePath,d=r.triggerName;t.validateFields([a],{triggerName:d});break}}},this.notifyObservers=function(r,e,n){if(t.subscribable){var a=k(k({},n),{},{store:t.getFieldsValue(!0)});t.getFieldEntities().forEach(function(d){var i=d.onStoreChange;i(r,e,a)})}else t.forceRootUpdate()},this.triggerDependenciesUpdate=function(r,e){var n=t.getDependencyChildrenFields(e);return n.length&&t.validateFields(n),t.notifyObservers(r,n,{type:"dependenciesUpdate",relatedFields:[e].concat(R(n))}),n},this.updateValue=function(r,e){var n=S(r),a=t.store;t.updateStore(_(t.store,n,e)),t.notifyObservers(a,[n],{type:"valueUpdate",source:"internal"}),t.notifyWatch([n]);var d=t.triggerDependenciesUpdate(a,n),i=t.callbacks.onValuesChange;if(i){var s=Pe(t.store,[n]);i(s,t.getFieldsValue())}t.triggerOnFieldsChange([n].concat(R(d)))},this.setFieldsValue=function(r){t.warningUnhooked();var e=t.store;if(r){var n=J(t.store,r);t.updateStore(n)}t.notifyObservers(e,null,{type:"valueUpdate",source:"external"}),t.notifyWatch()},this.setFieldValue=function(r,e){t.setFields([{name:r,value:e}])},this.getDependencyChildrenFields=function(r){var e=new Set,n=[],a=new G;t.getFieldEntities().forEach(function(i){var s=i.props.dependencies;(s||[]).forEach(function(l){var c=S(l);a.update(c,function(){var f=arguments.length>0&&arguments[0]!==void 0?arguments[0]:new Set;return f.add(i),f})})});var d=function i(s){var l=a.get(s)||new Set;l.forEach(function(c){if(!e.has(c)){e.add(c);var f=c.getNamePath();c.isFieldDirty()&&f.length&&(n.push(f),i(f))}})};return d(r),n},this.triggerOnFieldsChange=function(r,e){var n=t.callbacks.onFieldsChange;if(n){var a=t.getFields();if(e){var d=new G;e.forEach(function(s){var l=s.name,c=s.errors;d.set(l,c)}),a.forEach(function(s){s.errors=d.get(s.name)||s.errors})}var i=a.filter(function(s){var l=s.name;return Y(r,l)});i.length&&n(i,a)}},this.validateFields=function(r,e){t.warningUnhooked();var n,a;Array.isArray(r)||typeof r=="string"||typeof e=="string"?(n=r,a=e):a=r;var d=!!n,i=d?n.map(S):[],s=[],l=String(Date.now()),c=new Set;t.getFieldEntities(!0).forEach(function(g){var v;if(d||i.push(g.getNamePath()),!((v=a)===null||v===void 0)&&v.recursive&&d){var m=g.getNamePath();m.every(function(E,$){return n[$]===E||n[$]===void 0})&&i.push(m)}if(!(!g.props.rules||!g.props.rules.length)){var h=g.getNamePath();if(c.add(h.join(l)),!d||Y(i,h)){var V=g.validateRules(k({validateMessages:k(k({},ke),t.validateMessages)},a));s.push(V.then(function(){return{name:h,errors:[],warnings:[]}}).catch(function(E){var $,F=[],w=[];return($=E.forEach)===null||$===void 0||$.call(E,function(T){var O=T.rule.warningOnly,C=T.errors;O?w.push.apply(w,R(C)):F.push.apply(F,R(C))}),F.length?Promise.reject({name:h,errors:F,warnings:w}):{name:h,errors:F,warnings:w}}))}}});var f=Je(s);t.lastValidatePromise=f,f.catch(function(g){return g}).then(function(g){var v=g.map(function(m){var h=m.name;return h});t.notifyObservers(t.store,v,{type:"validateFinish"}),t.triggerOnFieldsChange(v,g)});var P=f.then(function(){return t.lastValidatePromise===f?Promise.resolve(t.getFieldsValue(i)):Promise.reject([])}).catch(function(g){var v=g.filter(function(m){return m&&m.errors.length});return Promise.reject({values:t.getFieldsValue(i),errorFields:v,outOfDate:t.lastValidatePromise!==f})});P.catch(function(g){return g});var y=i.filter(function(g){return c.has(g.join(l))});return t.triggerOnFieldsChange(y),P},this.submit=function(){t.warningUnhooked(),t.validateFields().then(function(r){var e=t.callbacks.onFinish;if(e)try{e(r)}catch(n){console.error(n)}}).catch(function(r){var e=t.callbacks.onFinishFailed;e&&e(r)})},this.forceRootUpdate=u});function Me(o){var u=p.useRef(),t=p.useState({}),r=B(t,2),e=r[1];if(!u.current)if(o)u.current=o;else{var n=function(){e({})},a=new Be(n);u.current=a.getForm()}return[u.current]}var de=p.createContext({triggerFormChange:function(){},triggerFormFinish:function(){},registerForm:function(){},unregisterForm:function(){}}),Qe=function(u){var t=u.validateMessages,r=u.onFormChange,e=u.onFormFinish,n=u.children,a=p.useContext(de),d=p.useRef({});return p.createElement(de.Provider,{value:k(k({},a),{},{validateMessages:k(k({},a.validateMessages),t),triggerFormChange:function(s,l){r&&r(s,{changedFields:l,forms:d.current}),a.triggerFormChange(s,l)},triggerFormFinish:function(s,l){e&&e(s,{values:l,forms:d.current}),a.triggerFormFinish(s,l)},registerForm:function(s,l){s&&(d.current=k(k({},d.current),{},Z({},s,l))),a.registerForm(s,l)},unregisterForm:function(s){var l=k({},d.current);delete l[s],d.current=l,a.unregisterForm(s)}})},n)},Xe=["name","initialValues","fields","form","preserve","children","component","validateMessages","validateTrigger","onValuesChange","onFieldsChange","onFinish","onFinishFailed"],Ze=function(u,t){var r=u.name,e=u.initialValues,n=u.fields,a=u.form,d=u.preserve,i=u.children,s=u.component,l=s===void 0?"form":s,c=u.validateMessages,f=u.validateTrigger,P=f===void 0?"onChange":f,y=u.onValuesChange,g=u.onFieldsChange,v=u.onFinish,m=u.onFinishFailed,h=ce(u,Xe),V=p.useContext(de),E=Me(a),$=B(E,1),F=$[0],w=F.getInternalHooks(z),T=w.useSubscribe,O=w.setInitialValues,C=w.setCallbacks,M=w.setValidateMessages,b=w.setPreserve,L=w.destroyForm;p.useImperativeHandle(t,function(){return F}),p.useEffect(function(){return V.registerForm(r,F),function(){V.unregisterForm(r)}},[V,F,r]),M(k(k({},V.validateMessages),c)),C({onValuesChange:y,onFieldsChange:function(U){if(V.triggerFormChange(r,U),g){for(var K=arguments.length,Fe=new Array(K>1?K-1:0),X=1;X<K;X++)Fe[X-1]=arguments[X];g.apply(void 0,[U].concat(Fe))}},onFinish:function(U){V.triggerFormFinish(r,U),v&&v(U)},onFinishFailed:m}),b(d);var I=p.useRef(null);O(e,!I.current),I.current||(I.current=!0),p.useEffect(function(){return L},[]);var W,he=typeof i=="function";if(he){var Se=F.getFieldsValue(!0);W=i(Se,F)}else W=i;T(!he);var me=p.useRef();p.useEffect(function(){Ke(me.current||[],n||[])||F.setFields(n||[]),me.current=n},[n,F]);var Te=p.useMemo(function(){return k(k({},F),{},{validateTrigger:P})},[F,P]),pe=p.createElement(te.Provider,{value:null},p.createElement(q.Provider,{value:Te},W));return l===!1?pe:p.createElement(l,be({},h,{onSubmit:function(U){U.preventDefault(),U.stopPropagation(),F.submit()},onReset:function(U){var K;U.preventDefault(),F.resetFields(),(K=h.onReset)===null||K===void 0||K.call(h,U)}}),pe)};function we(o){try{return JSON.stringify(o)}catch{return Math.random()}}function et(){for(var o=arguments.length,u=new Array(o),t=0;t<o;t++)u[t]=arguments[t];var r=u[0],e=r===void 0?[]:r,n=u[1],a=n===void 0?{}:n,d=We(a)?{form:a}:a,i=d.form,s=p.useState(),l=B(s,2),c=l[0],f=l[1],P=p.useMemo(function(){return we(c)},[c]),y=p.useRef(P);y.current=P;var g=p.useContext(q),v=i||g,m=v&&v._init,h=S(e),V=p.useRef(h);return V.current=h,p.useEffect(function(){if(m){var E=v.getFieldsValue,$=v.getInternalHooks,F=$(z),w=F.registerWatch,T=w(function(C,M){var b=j(d.preserve?M:C,V.current),L=we(b);y.current!==L&&(y.current=L,f(b))}),O=j(d.preserve?E(!0):E(),V.current);return f(O),T}},[m]),c}var tt=p.forwardRef(Ze),Q=tt;Q.FormProvider=Qe;Q.Field=$e;Q.List=qe;Q.useForm=Me;Q.useWatch=et;export{q as C,Qe as F,te as L,Q as R,$e as W,qe as a,et as b,Me as u};
