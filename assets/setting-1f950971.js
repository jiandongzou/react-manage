import{E as p,r as s,k as n,aB as I,B as E}from"./index-061bd8a1.js";const S=p.Group,A=({children:g,columns:c,setColumns:i,settingDisable:o})=>{const t=c.map(e=>({label:e.title,value:e.dataIndex,disabled:o.includes(e.dataIndex)})),k=c.map(e=>e.dataIndex),a=c.map(e=>e.dataIndex),[l,h]=s.useState(a),[x,d]=s.useState(!1),[u,r]=s.useState(t.length==a.length),C=e=>{h(e),d(!!e.length&&e.length<t.length),r(e.length===t.length)},m=e=>{h(e.target.checked?k:o),d(e.target.checked?!1:!!o.length),r(e.target.checked)},f=()=>{r(a.length==t.length),d(!1),h(a)};s.useEffect(()=>{i(l)},[l]);const j=n.jsxs("div",{className:"set-header",children:[n.jsx(p,{indeterminate:x,onChange:m,checked:u,children:"全选"}),n.jsx(E,{type:"link",onClick:f,children:"重置"})]}),v=n.jsx(S,{options:t,value:l,onChange:C});return n.jsx(I,{getPopupContainer:e=>e.parentNode,className:"mu-popover",placement:"bottomRight",title:j,content:v,trigger:"click",children:g})};export{A as default};
