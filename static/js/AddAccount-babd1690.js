import{j as r}from"./react-16261f20.js";import{I as n}from"./index-b591ed7f.js";import{F as e,I as t,h as u}from"./antd-51a1d5a7.js";import{O as d}from"./@ant-design-afc9f0aa.js";import"./@babel-9367d27f.js";import"./rc-util-8ac52126.js";import"./react-is-e8e5dbb3.js";import"./react-dom-c85821af.js";import"./scheduler-765c72db.js";import"./classnames-f3eb6505.js";import"./rc-resize-observer-f56315fc.js";import"./resize-observer-polyfill-0f9f8adb.js";import"./rc-motion-66270194.js";import"./rc-picker-24f2c650.js";import"./dayjs-7d381acd.js";import"./@rc-component-47431e57.js";import"./rc-menu-65d2ea2f.js";import"./rc-overflow-62006d10.js";import"./rc-cascader-0ccd2334.js";import"./rc-select-d03dfa8d.js";import"./rc-virtual-list-e5cdb37f.js";import"./rc-tree-6e351d8e.js";import"./rc-input-number-d3c7589b.js";import"./rc-input-7d7eb8fa.js";import"./rc-field-form-d778d3a4.js";import"./async-validator-dee29e8b.js";import"./scroll-into-view-if-needed-640b7801.js";import"./compute-scroll-into-view-50f8bc03.js";import"./rc-dialog-8d13d67b.js";import"./rc-notification-f8e8cbae.js";import"./rc-tooltip-f0c21eff.js";import"./rc-switch-52a861e6.js";import"./@ctrl-fb5a5473.js";import"./rc-table-51ecba66.js";import"./rc-pagination-fa9d1e90.js";import"./throttle-debounce-87e7e444.js";import"./rc-checkbox-3bd48391.js";import"./rc-dropdown-64be8282.js";import"./rc-tree-select-74207cf5.js";import"./copy-to-clipboard-2fd384cc.js";import"./toggle-selection-93f4ad84.js";import"./rc-textarea-0246ae10.js";import"./@emotion-c0b5c018.js";import"./stylis-fad5b415.js";const c={labelCol:{span:5},wrapperCol:{span:16}},x={required:"${label} is required!"},j=({isModalOpen:m,setIsOpen:i})=>{const[o]=e.useForm(),p=async(s,l)=>{if(l=="sure"){const a=await o.validateFields();i(s,a.user)}else i(s,"")};return r.jsx(n,{isModalOpen:m,setIsOpen:p,title:"新增账号",children:r.jsxs(e,{...c,form:o,name:"nest-messages",validateMessages:x,children:[r.jsx(e.Item,{name:["user","name"],label:"用户名称",rules:[{required:!0}],children:r.jsx(t,{})}),r.jsx(e.Item,{name:["user","user"],label:"用户账号",rules:[{required:!0}],children:r.jsx(t,{})}),r.jsx(e.Item,{name:["user","pass"],label:"用户密码",rules:[{required:!0}],children:r.jsx(t.Password,{autoComplete:"new-password",prefix:r.jsx(d,{})})}),r.jsx(e.Item,{name:["user","email"],label:"邮箱",rules:[{required:!0}],children:r.jsx(t,{})}),r.jsx(e.Item,{name:["user","status"],label:"状态",rules:[{required:!0}],children:r.jsx(u,{options:[{value:"running",label:"启用"},{value:"stop",label:"停用"}]})})]})})},mr=j;export{mr as default};