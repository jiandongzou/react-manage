import{b as j}from"./index-0386a59e.js";import{r as P,j as e}from"./react-16261f20.js";import{I as p,p as T,h as w,q as G,r as q,C as g,i as b,j as F,s as L,R as D,g as u,F as m,B as d}from"./antd-51a1d5a7.js";import{U as B,D as E}from"./@ant-design-afc9f0aa.js";import{v as U}from"./uuid-a960c1f4.js";function W(){return j.request({url:"/api/users",method:"post"})}function X(){return j.request({url:"/api/notifys",method:"post"})}const s=new Map;s.set("Input",p);s.set("InputPassword",p.Password);s.set("InputTextArea",p.TextArea);s.set("InputSearch",p.Search);s.set("InputNumber",T);s.set("Select",w);s.set("Cascader",G);s.set("TreeSelect",q);s.set("CheckboxGroup",g.Group);s.set("Checkbox",g.Group);s.set("DatePicker",b);s.set("RangePicker",b.RangePicker);s.set("RadioGroup",F.Group);s.set("Radio",F.Group);s.set("TimePicker",L);const M={labelAlign:"right",colon:!0,placeholder:"请填写内容",labelCol:{span:6,offset:0}},O=({formsColumn:r,expand:n,isShowAdvanced:o})=>{function a(){const t=[],c=r.length,i=3-c%4,k=i==-1?3:i;for(let l=0;l<c;l++){const{components:v,label:x,labelAlign:y,labelCol:C,name:I,required:h,colon:S,options:N,placeholder:R}={...M,...r[l]},f=s.get(v);if(!f)continue;const A={placeholder:R,options:N};t.push(e.jsx(u,{span:6,style:{display:l>6&&c>8&&o&&!n?"none":"block"},children:e.jsx(m.Item,{label:x,labelAlign:y,labelCol:C,name:I,required:h,colon:S,rules:[{required:h,message:`请输入${x}`}],children:e.jsx(f,{...A})})},l))}for(let l=0;l<k&&(n||c<9||!o);l++)t.push(e.jsx(u,{span:6},U()));return t}return e.jsx(e.Fragment,{children:a()})},$=r=>{const{expand:n,toggleAdvanced:o,fcLen:a,isShowAdvanced:t,form:c}=r,i=()=>{c.resetFields()};return e.jsx(u,{span:6,children:e.jsxs(m.Item,{className:"flex flex-row-reverse items-center",children:[e.jsx(d,{type:"primary",htmlType:"submit",children:"查询"}),e.jsx(d,{className:"ml-[12px]",onClick:i,children:"重置"}),a>8&&t&&e.jsx(d,{type:"primary",className:"ml-[12px]",onClick:o,children:e.jsxs("div",{className:"flex items-center advanced-query",children:[n?e.jsx(B,{}):e.jsx(E,{}),e.jsx("span",{className:"ml-[5px]",children:"高级查询"})]})})]})})},_=({formsColumn:r,form:n,isShowAdvanced:o=!0})=>{const[a,t]=P.useState(!1),c=r.length,i=()=>{t(!a)};return e.jsx(e.Fragment,{children:e.jsxs(D,{gutter:24,children:[e.jsx(O,{expand:a,formsColumn:r,isShowAdvanced:o,form:n}),e.jsx($,{fcLen:c,expand:a,toggleAdvanced:i,isShowAdvanced:o,form:n})]})})};const z=({formConfig:r})=>{const{formsColumn:n=[],isShowAdvanced:o,submit:a}=r,[t]=m.useForm();return e.jsx(e.Fragment,{children:e.jsx(m,{form:t,name:"advanced_search",className:"ant-advanced-search-form custom-form",onFinish:a,children:e.jsx(_,{formsColumn:n,isShowAdvanced:o,form:t})})})},Y=z;export{Y as F,X as a,W as g};
