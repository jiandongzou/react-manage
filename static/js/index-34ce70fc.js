import{r,j as t}from"./react-16261f20.js";import{C as x,P as b,B as N,u as S,c as E,v as y}from"./antd-51a1d5a7.js";import{$ as I}from"./@ant-design-afc9f0aa.js";import{E as T}from"./index-6c2a5cd5.js";const P=x.Group,A=({children:s,columns:l,setColumns:i,settingDisable:o})=>{const n=l.map(e=>({label:e.title,value:e.dataIndex,disabled:o.includes(e.dataIndex)})),h=l.map(e=>e.dataIndex),c=l.map(e=>e.dataIndex),[d,a]=r.useState(c),[C,m]=r.useState(!1),[g,u]=r.useState(n.length==c.length),p=e=>{a(e),m(!!e.length&&e.length<n.length),u(e.length===n.length)},j=e=>{a(e.target.checked?h:o),m(e.target.checked?!1:!!o.length),u(e.target.checked)},f=()=>{u(c.length==n.length),m(!1),a(c)};r.useEffect(()=>{i(d)},[d]);const k=t.jsxs("div",{className:"set-header",children:[t.jsx(x,{indeterminate:C,onChange:j,checked:g,children:"全选"}),t.jsx(N,{type:"link",onClick:f,children:"重置"})]}),v=t.jsx(P,{options:n,value:d,onChange:p});return t.jsx(b,{getPopupContainer:e=>e.parentNode,className:"mu-popover",placement:"bottomRight",title:k,content:v,trigger:"click",children:s})},L=s=>s.headerContent&&t.jsxs("div",{className:"flex items-center justify-between py-[16px]",children:[t.jsx("div",{className:"header-left flex",children:s.headerContent.content()}),t.jsx("div",{className:"cursor-pointer",children:s.headerContent.isShowFilter&&t.jsx(A,{settingDisable:s.headerContent.settingDisable||[],columns:s.columns||[],setColumns:s.setColumns,children:t.jsx(S,{title:"列设置",children:t.jsx("span",{className:"text-[18px]",children:t.jsx(I,{})})})})})]});const O=s=>{const{columns:l,dataSource:i}=s,o={size:"middle",...s},[n,h]=r.useState(l||[]),c=d=>{n.forEach(a=>{d.includes(a.dataIndex)?a.className="":a.className="hidden"}),h([...n])};return t.jsxs("div",{className:"mu-custom-tables",children:[t.jsx(L,{setColumns:c,columns:n,headerContent:s.headerContent||null}),t.jsx(E,{renderEmpty:T,children:t.jsx(y,{...o,dataSource:i,columns:n})})]})},R=O;export{R as T};
