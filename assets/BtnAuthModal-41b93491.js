import{F as s,k as e,I as n}from"./index-061bd8a1.js";import{I as m}from"./index-aaf07ab1.js";const c={labelCol:{span:6},wrapperCol:{span:16}},x={required:"${label} is required!"},p=({isModalOpen:l,setIsOpen:r,title:o})=>{const[t]=s.useForm(),i=async(a,u)=>{if(u=="sure"){const d=await t.validateFields();r(a,d)}else r(a,"")};return e.jsx(m,{isModalOpen:l,setIsOpen:i,title:o,children:e.jsxs(s,{...c,form:t,name:"nest-messages",validateMessages:x,children:[e.jsx(s.Item,{name:"title",label:"权限名称",rules:[{required:!0}],children:e.jsx(n,{})}),e.jsx(s.Item,{name:"key",label:"权限标识",rules:[{required:!0}],children:e.jsx(n,{})})]})})},h=p;export{h as default};
