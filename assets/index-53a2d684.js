import{y as R,l as b,r as I,k as e,F as s,z as j,D as n,I as S,E as i,S as k,B as p}from"./index-061bd8a1.js";import{S as l}from"./index-2c14474c.js";import{D as u}from"./index-6230ffb1.js";import{R as c}from"./index-6cbb5126.js";import{S as y}from"./index-f258e3bb.js";import{D as F}from"./index-0bae6c88.js";import"./CheckOutlined-ec3de84f.js";const{RangePicker:v}=u,t="YYYY/MM/DD",P=()=>{const{token:{colorBgContainer:O,colorText:f}}=R.useToken(),d=b.useRef(null),[m,x]=I.useState(null),g=()=>{var r;(r=d.current)==null||r.resetFields(),x(null)},D=r=>{const h=r.date,a=r.dateRange;console.log(a);const o={...r};h&&Object.assign(o,{date:h.format(t)}),a&&Object.assign(o,{dateRange:[a[0].format(t),a[1].format(t)]}),x(o)};return e.jsxs(e.Fragment,{children:[e.jsxs(s,{ref:d,name:"control-ref",onFinish:D,children:[e.jsxs(j,{gutter:24,children:[e.jsx(n,{span:6,children:e.jsx(s.Item,{label:"输入框",name:"name",rules:[{required:!0}],children:e.jsx(S,{})})}),e.jsx(n,{span:6,children:e.jsx(s.Item,{label:"下拉框",name:"select",children:e.jsxs(l,{children:[e.jsx(l.Option,{value:"demo1",children:"Demo1"}),e.jsx(l.Option,{value:"demo2",children:"Demo2"}),e.jsx(l.Option,{value:"demo3",children:"Demo3"})]})})}),e.jsx(n,{span:6,children:e.jsx(s.Item,{label:"日期范围",name:"dateRange",children:e.jsx(v,{format:t})})}),e.jsx(n,{span:6,children:e.jsx(s.Item,{label:"日期",name:"date",children:e.jsx(u,{format:t,style:{width:"100%"}})})})]}),e.jsxs(j,{gutter:24,children:[e.jsx(n,{span:6,children:e.jsx(s.Item,{label:"复选框",name:"check",children:e.jsxs(i.Group,{children:[e.jsx(i,{value:"A",children:"A"}),e.jsx(i,{value:"B",children:"B"})]})})}),e.jsx(n,{span:6,children:e.jsx(s.Item,{label:"单选框",name:"radio",children:e.jsxs(c.Group,{children:[e.jsx(c,{value:"apple",children:" Apple "}),e.jsx(c,{value:"pear",children:" Pear "})]})})}),e.jsx(n,{span:6,children:e.jsx(s.Item,{label:"Switch",name:"switch",children:e.jsx(y,{})})}),e.jsx(n,{span:6,children:e.jsx(s.Item,{children:e.jsxs(k,{children:[e.jsx(p,{type:"primary",htmlType:"submit",children:"提交"}),e.jsx(p,{htmlType:"button",onClick:g,children:"重置"})]})})})]})]}),e.jsx(F,{}),e.jsxs("div",{style:{color:f},children:["提交数据:",m?JSON.stringify(m):"空"]})]})};export{P as default};
