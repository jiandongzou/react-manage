import{r as i,j as o}from"./react-16261f20.js";import"./index-0386a59e.js";import{t as v,n as m,o as L,A as k,B as w}from"./antd-51a1d5a7.js";import"./@babel-9367d27f.js";import"./react-dom-c85821af.js";import"./scheduler-765c72db.js";import"./axios-4a70c6fc.js";import"./react-redux-4e71ec28.js";import"./hoist-non-react-statics-2a75d658.js";import"./react-is-e8e5dbb3.js";import"./use-sync-external-store-78eeb758.js";import"./react-router-f05be614.js";import"./@remix-run-9fc1a2d6.js";import"./@ant-design-afc9f0aa.js";import"./classnames-f3eb6505.js";import"./@ctrl-fb5a5473.js";import"./rc-util-8ac52126.js";import"./@emotion-c0b5c018.js";import"./stylis-fad5b415.js";import"./resize-observer-polyfill-0f9f8adb.js";import"./echarts-372a619d.js";import"./zrender-bd06e061.js";import"./screenfull-b3e6dc1f.js";import"./immer-5a0388fb.js";import"./redux-3af1e7b5.js";import"./redux-persist-e653194e.js";import"./redux-thunk-ef899f4c.js";import"./dayjs-7d381acd.js";import"./react-router-dom-f3ba7af8.js";import"./vite-plugin-mock-decfdb26.js";import"./mockjs-1c5cce79.js";import"./path-to-regexp-31db6522.js";import"./rc-resize-observer-f56315fc.js";import"./rc-motion-66270194.js";import"./rc-picker-24f2c650.js";import"./@rc-component-47431e57.js";import"./rc-menu-65d2ea2f.js";import"./rc-overflow-62006d10.js";import"./rc-cascader-0ccd2334.js";import"./rc-select-d03dfa8d.js";import"./rc-virtual-list-e5cdb37f.js";import"./rc-tree-6e351d8e.js";import"./rc-input-number-d3c7589b.js";import"./rc-input-7d7eb8fa.js";import"./rc-field-form-d778d3a4.js";import"./async-validator-dee29e8b.js";import"./scroll-into-view-if-needed-640b7801.js";import"./compute-scroll-into-view-50f8bc03.js";import"./rc-dialog-8d13d67b.js";import"./rc-notification-f8e8cbae.js";import"./rc-tooltip-f0c21eff.js";import"./rc-switch-52a861e6.js";import"./rc-table-51ecba66.js";import"./rc-pagination-fa9d1e90.js";import"./throttle-debounce-87e7e444.js";import"./rc-checkbox-3bd48391.js";import"./rc-dropdown-64be8282.js";import"./rc-tree-select-74207cf5.js";import"./copy-to-clipboard-2fd384cc.js";import"./toggle-selection-93f4ad84.js";import"./rc-textarea-0246ae10.js";const c=8,l=`https://randomuser.me/api/?results=${c}&inc=name,gender,email,nat,picture&noinfo`,Mt=()=>{const[a,d]=i.useState(!0),[u,n]=i.useState(!1),[s,p]=i.useState([]),[h,e]=i.useState([]),{token:{colorBgContainer:x,colorText:g}}=v.useToken();i.useEffect(()=>{fetch(l).then(t=>t.json()).then(t=>{d(!1),p(t.results),e(t.results)})},[]);const j=()=>{n(!0),e(s.concat([...new Array(c)].map(()=>({loading:!0,name:{},picture:{}})))),fetch(l).then(t=>t.json()).then(t=>{const r=s.concat(t.results);p(r),e(r),n(!1),window.dispatchEvent(new Event("resize"))})},f=!a&&!u?o.jsx("div",{style:{textAlign:"center",marginTop:12,height:32,lineHeight:"32px"},children:o.jsx(w,{onClick:j,children:"loading more"})}):null;return o.jsx("div",{className:"dynamic",style:{background:x},children:o.jsx(m,{className:"demo-loadmore-list",loading:a,itemLayout:"horizontal",loadMore:f,dataSource:h,renderItem:t=>{var r;return o.jsx(m.Item,{actions:[o.jsx("a",{style:{color:g},children:"查看详情"},"list-loadmore-view")],children:o.jsx(L,{avatar:!0,title:!1,loading:t.loading,active:!0,children:o.jsx(m.Item.Meta,{avatar:o.jsx(k,{src:t.picture.large}),title:o.jsx("span",{children:(r=t.name)==null?void 0:r.last}),description:"一分钟前更新动态"})})})}})})};export{Mt as default};
