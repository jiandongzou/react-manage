import{r,a as p}from"./react-16261f20.js";import{R as T}from"./react-router-58ee9837.js";import{c as b}from"./@remix-run-150ccd8a.js";/**
 * React Router DOM v6.14.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const v="startTransition",l=p[v];function I(t){let{basename:f,children:S,future:h,window:R}=t,s=r.useRef();s.current==null&&(s.current=b({window:R,v5Compat:!0}));let e=s.current,[a,o]=r.useState({action:e.action,location:e.location}),{v7_startTransition:n}=h||{},i=r.useCallback(c=>{n&&l?l(()=>o(c)):o(c)},[o,n]);return r.useLayoutEffect(()=>e.listen(i),[e,i]),r.createElement(T,{basename:f,children:S,location:a.location,navigationType:a.action,navigator:e})}var u;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher"})(u||(u={}));var m;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(m||(m={}));export{I as B};
