function M(n,d,l){var o=l||{},r=o.noTrailing,f=r===void 0?!1:r,v=o.noLeading,m=v===void 0?!1:v,p=o.debounceMode,a=p===void 0?void 0:p,i,T=!1,s=0;function b(){i&&clearTimeout(i)}function D(t){var u=t||{},e=u.upcomingOnly,g=e===void 0?!1:e;b(),T=!g}function w(){for(var t=arguments.length,u=new Array(t),e=0;e<t;e++)u[e]=arguments[e];var g=this,$=Date.now()-s;if(T)return;function c(){s=Date.now(),d.apply(g,u)}function x(){i=void 0}!m&&a&&!i&&c(),b(),a===void 0&&$>n?m?(s=Date.now(),f||(i=setTimeout(a?x:c,n))):c():f!==!0&&(i=setTimeout(a?x:c,a===void 0?n-$:n))}return w.cancel=D,w}function h(n,d,l){var o=l||{},r=o.atBegin,f=r===void 0?!1:r;return M(n,d,{debounceMode:f!==!1})}export{h as d};