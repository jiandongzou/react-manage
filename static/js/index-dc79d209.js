import{r as n,j as o}from"./react-16261f20.js";import{MenuColumns as R,MenuBtnColumns as D}from"./data-0e82f21a.js";import E from"./BtnAuthModal-5750877d.js";import k from"./MenuModal-eb606913.js";import{g as K,a as v}from"./index-8322a048.js";import{T as u}from"./index-994c4df8.js";import{R as P,g as l,B as Z}from"./antd-51a1d5a7.js";import{Z as q}from"./@ant-design-afc9f0aa.js";import"./@babel-9367d27f.js";import"./index-b591ed7f.js";import"./react-dom-c85821af.js";import"./scheduler-765c72db.js";import"./axios-4a70c6fc.js";import"./react-redux-4e71ec28.js";import"./hoist-non-react-statics-2a75d658.js";import"./react-is-e8e5dbb3.js";import"./use-sync-external-store-78eeb758.js";import"./react-router-58ee9837.js";import"./@remix-run-150ccd8a.js";import"./echarts-372a619d.js";import"./zrender-bd06e061.js";import"./screenfull-b3e6dc1f.js";import"./immer-5a0388fb.js";import"./redux-3af1e7b5.js";import"./redux-persist-e653194e.js";import"./redux-thunk-ef899f4c.js";import"./dayjs-7d381acd.js";import"./rc-util-8ac52126.js";import"./react-router-dom-d948da02.js";import"./vite-plugin-mock-decfdb26.js";import"./mockjs-1c5cce79.js";import"./path-to-regexp-31db6522.js";import"./classnames-f3eb6505.js";import"./rc-resize-observer-f56315fc.js";import"./resize-observer-polyfill-0f9f8adb.js";import"./rc-motion-66270194.js";import"./rc-picker-24f2c650.js";import"./@rc-component-47431e57.js";import"./rc-menu-65d2ea2f.js";import"./rc-overflow-62006d10.js";import"./rc-cascader-0ccd2334.js";import"./rc-select-d03dfa8d.js";import"./rc-virtual-list-e5cdb37f.js";import"./rc-tree-6e351d8e.js";import"./rc-input-number-d3c7589b.js";import"./rc-input-7d7eb8fa.js";import"./rc-field-form-d778d3a4.js";import"./async-validator-dee29e8b.js";import"./scroll-into-view-if-needed-640b7801.js";import"./compute-scroll-into-view-50f8bc03.js";import"./rc-dialog-8d13d67b.js";import"./rc-notification-f8e8cbae.js";import"./rc-tooltip-f0c21eff.js";import"./rc-switch-52a861e6.js";import"./@ctrl-fb5a5473.js";import"./rc-table-51ecba66.js";import"./rc-pagination-fa9d1e90.js";import"./throttle-debounce-87e7e444.js";import"./rc-checkbox-3bd48391.js";import"./rc-dropdown-64be8282.js";import"./rc-tree-select-74207cf5.js";import"./copy-to-clipboard-2fd384cc.js";import"./toggle-selection-93f4ad84.js";import"./rc-textarea-0246ae10.js";import"./@emotion-c0b5c018.js";import"./stylis-fad5b415.js";function $t(){const[c,d]=n.useState([]),[h,M]=n.useState([]),[x,s]=n.useState(!1),[f,i]=n.useState(!1),[g,j]=n.useState("首页"),[A,B]=n.useState(""),[w,S]=n.useState(""),[b,r]=n.useState(!1),[O,m]=n.useState(!1);n.useEffect(()=>{p("home"),L()},[]);const T=(t,e)=>{r(t),B(e)},a=(t,e)=>{m(t),S(e)},C=(t,e)=>{r(t),console.warn("表单内容",e)},y=(t,e)=>{m(t),console.warn("表单内容",e)};async function p(t){i(!0);const{data:e}=await K({path:t});d(e),i(!1)}async function L(){s(!0);const{data:t}=await v(),e=t.map(N=>N.children[0]);M(e),s(!1)}const I=t=>({onClick:()=>{p(t.path),j(t.meta.title||"")}});return o.jsxs("div",{className:"card",children:[o.jsx(k,{isModalOpen:b,setIsOpen:C,title:A}),o.jsx(E,{isModalOpen:O,setIsOpen:y,title:w}),o.jsxs(P,{gutter:24,children:[o.jsx(l,{span:14,children:o.jsx(u,{rowKey:t=>t.meta.title,columns:R(T),dataSource:h,loading:x,className:"menu-tables",onRow:I,headerContent:{content:()=>[o.jsx("h1",{className:"text-[18px] font-bold",children:"菜单配置"},"menu")]}})}),o.jsx(l,{span:10,children:o.jsx(u,{rowKey:"index",columns:D(a),dataSource:c,loading:f,className:"menu-tables",headerContent:{content:()=>[o.jsxs("h1",{className:"text-[18px] font-bold",children:[g,"按钮权限配置"]},"menu"),o.jsxs(Z,{type:"primary",onClick:()=>a(!0,"新增权限配置"),icon:o.jsx(q,{}),children:[" ","新增配置"]},"btn")]}})})]})]})}export{$t as default};
