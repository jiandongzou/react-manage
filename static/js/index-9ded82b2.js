import{R as b,r as D,j as e}from"./react-16261f20.js";import{t as I,F as t,R as x,g as r,I as k,h as n,i as u,C as m,j as l,k as F,d as v,B as j,e as y}from"./antd-51a1d5a7.js";import"./@babel-9367d27f.js";import"./rc-util-8ac52126.js";import"./react-is-e8e5dbb3.js";import"./react-dom-c85821af.js";import"./scheduler-765c72db.js";import"./@ant-design-afc9f0aa.js";import"./classnames-f3eb6505.js";import"./@ctrl-fb5a5473.js";import"./@emotion-c0b5c018.js";import"./stylis-fad5b415.js";import"./resize-observer-polyfill-0f9f8adb.js";import"./rc-resize-observer-f56315fc.js";import"./rc-motion-66270194.js";import"./rc-picker-24f2c650.js";import"./dayjs-7d381acd.js";import"./@rc-component-47431e57.js";import"./rc-menu-65d2ea2f.js";import"./rc-overflow-62006d10.js";import"./rc-cascader-0ccd2334.js";import"./rc-select-d03dfa8d.js";import"./rc-virtual-list-e5cdb37f.js";import"./rc-tree-6e351d8e.js";import"./rc-input-number-d3c7589b.js";import"./rc-input-7d7eb8fa.js";import"./rc-field-form-d778d3a4.js";import"./async-validator-dee29e8b.js";import"./scroll-into-view-if-needed-640b7801.js";import"./compute-scroll-into-view-50f8bc03.js";import"./rc-dialog-8d13d67b.js";import"./rc-notification-f8e8cbae.js";import"./rc-tooltip-f0c21eff.js";import"./rc-switch-52a861e6.js";import"./rc-table-51ecba66.js";import"./rc-pagination-fa9d1e90.js";import"./throttle-debounce-87e7e444.js";import"./rc-checkbox-3bd48391.js";import"./rc-dropdown-64be8282.js";import"./rc-tree-select-74207cf5.js";import"./copy-to-clipboard-2fd384cc.js";import"./toggle-selection-93f4ad84.js";import"./rc-textarea-0246ae10.js";const{RangePicker:O}=u,o="YYYY/MM/DD",ge=()=>{const{token:{colorBgContainer:S,colorText:f}}=I.useToken(),p=b.useRef(null),[c,d]=D.useState(null),g=()=>{var i;(i=p.current)==null||i.resetFields(),d(null)},R=i=>{const h=i.date,s=i.dateRange;console.log(s);const a={...i};h&&Object.assign(a,{date:h.format(o)}),s&&Object.assign(a,{dateRange:[s[0].format(o),s[1].format(o)]}),d(a)};return e.jsxs(e.Fragment,{children:[e.jsxs(t,{ref:p,name:"control-ref",onFinish:R,children:[e.jsxs(x,{gutter:24,children:[e.jsx(r,{span:6,children:e.jsx(t.Item,{label:"输入框",name:"name",rules:[{required:!0}],children:e.jsx(k,{})})}),e.jsx(r,{span:6,children:e.jsx(t.Item,{label:"下拉框",name:"select",children:e.jsxs(n,{children:[e.jsx(n.Option,{value:"demo1",children:"Demo1"}),e.jsx(n.Option,{value:"demo2",children:"Demo2"}),e.jsx(n.Option,{value:"demo3",children:"Demo3"})]})})}),e.jsx(r,{span:6,children:e.jsx(t.Item,{label:"日期范围",name:"dateRange",children:e.jsx(O,{format:o})})}),e.jsx(r,{span:6,children:e.jsx(t.Item,{label:"日期",name:"date",children:e.jsx(u,{format:o,style:{width:"100%"}})})})]}),e.jsxs(x,{gutter:24,children:[e.jsx(r,{span:6,children:e.jsx(t.Item,{label:"复选框",name:"check",children:e.jsxs(m.Group,{children:[e.jsx(m,{value:"A",children:"A"}),e.jsx(m,{value:"B",children:"B"})]})})}),e.jsx(r,{span:6,children:e.jsx(t.Item,{label:"单选框",name:"radio",children:e.jsxs(l.Group,{children:[e.jsx(l,{value:"apple",children:" Apple "}),e.jsx(l,{value:"pear",children:" Pear "})]})})}),e.jsx(r,{span:6,children:e.jsx(t.Item,{label:"Switch",name:"switch",children:e.jsx(F,{})})}),e.jsx(r,{span:6,children:e.jsx(t.Item,{children:e.jsxs(v,{children:[e.jsx(j,{type:"primary",htmlType:"submit",children:"提交"}),e.jsx(j,{htmlType:"button",onClick:g,children:"重置"})]})})})]})]}),e.jsx(y,{}),e.jsxs("div",{style:{color:f},children:["提交数据:",c?JSON.stringify(c):"空"]})]})};export{ge as default};
