import{r,j as t}from"./react-16261f20.js";import{AccountColumns as j,queryAccountConfig as S}from"./data-0e82f21a.js";import y from"./AddAccount-babd1690.js";import{g as C,F as w}from"./index-5f631dc2.js";import{T as O}from"./index-8daff594.js";import{B as s}from"./antd-51a1d5a7.js";import{Z as b,_ as A}from"./@ant-design-afc9f0aa.js";import"./@babel-9367d27f.js";import"./index-b591ed7f.js";import"./index-2bd25246.js";import"./react-dom-c85821af.js";import"./scheduler-765c72db.js";import"./axios-4a70c6fc.js";import"./react-redux-4e71ec28.js";import"./hoist-non-react-statics-2a75d658.js";import"./react-is-e8e5dbb3.js";import"./use-sync-external-store-78eeb758.js";import"./react-router-f05be614.js";import"./@remix-run-9fc1a2d6.js";import"./echarts-372a619d.js";import"./zrender-bd06e061.js";import"./screenfull-b3e6dc1f.js";import"./immer-5a0388fb.js";import"./redux-3af1e7b5.js";import"./redux-persist-e653194e.js";import"./redux-thunk-ef899f4c.js";import"./dayjs-7d381acd.js";import"./rc-util-8ac52126.js";import"./react-router-dom-f3ba7af8.js";import"./vite-plugin-mock-decfdb26.js";import"./mockjs-1c5cce79.js";import"./path-to-regexp-31db6522.js";import"./classnames-f3eb6505.js";import"./rc-resize-observer-f56315fc.js";import"./resize-observer-polyfill-0f9f8adb.js";import"./rc-motion-66270194.js";import"./rc-picker-24f2c650.js";import"./@rc-component-47431e57.js";import"./rc-menu-65d2ea2f.js";import"./rc-overflow-62006d10.js";import"./rc-cascader-0ccd2334.js";import"./rc-select-d03dfa8d.js";import"./rc-virtual-list-e5cdb37f.js";import"./rc-tree-6e351d8e.js";import"./rc-input-number-d3c7589b.js";import"./rc-input-7d7eb8fa.js";import"./rc-field-form-d778d3a4.js";import"./async-validator-dee29e8b.js";import"./scroll-into-view-if-needed-640b7801.js";import"./compute-scroll-into-view-50f8bc03.js";import"./rc-dialog-8d13d67b.js";import"./rc-notification-f8e8cbae.js";import"./rc-tooltip-f0c21eff.js";import"./rc-switch-52a861e6.js";import"./@ctrl-fb5a5473.js";import"./rc-table-51ecba66.js";import"./rc-pagination-fa9d1e90.js";import"./throttle-debounce-87e7e444.js";import"./rc-checkbox-3bd48391.js";import"./rc-dropdown-64be8282.js";import"./rc-tree-select-74207cf5.js";import"./copy-to-clipboard-2fd384cc.js";import"./toggle-selection-93f4ad84.js";import"./rc-textarea-0246ae10.js";import"./@emotion-c0b5c018.js";import"./stylis-fad5b415.js";import"./uuid-a960c1f4.js";function Ut(){const[n,a]=r.useState([]),[c,i]=r.useState(!1),l={submit:o=>{console.warn("Received values of form: ",o),m()},formsColumn:S};r.useEffect(()=>{m()},[]);async function m(){i(!0);const{data:o}=await C();a(o),i(!1)}const[e,p]=r.useState(!1),u=()=>{p(!e)},d=(o,h)=>{p(o),console.warn("表单内容",h)},[f,x]=r.useState([]),g={selectedRowKeys:f,onChange:o=>{console.warn("selectedRowKeys changed: ",o),x(o)}};return t.jsxs("div",{className:"card",children:[t.jsx(y,{isModalOpen:e,setIsOpen:d}),t.jsx(w,{formConfig:l}),t.jsx("p",{className:"mb-[12px]"}),t.jsx(O,{columns:j,dataSource:n,loading:c,rowSelection:g,headerContent:{content:()=>[t.jsx(s,{onClick:u,type:"primary",icon:t.jsx(b,{}),children:"新增"},"button2"),t.jsx(s,{type:"primary",danger:!0,icon:t.jsx(A,{}),children:"批量删除"},"button3")]}})]})}export{Ut as default};
