import{j as e,T as d,M as o,u as x,g as m,r as p,D as h,k as j}from"./index-CQfleUZ3.js";import{a as r}from"./index-Dj2E83xC.js";import{R as u}from"./index-zO8ZW3jz.js";function f({data:l,contactUsData:s}){return console.log("data: ",l),e.jsx("section",{className:"my-20",children:e.jsxs("div",{className:"container",children:[e.jsx(d,{specialText:s.Title,p:s.Description}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-4 mt-10",children:[e.jsxs("div",{className:"left",children:[e.jsx("div",{dangerouslySetInnerHTML:{__html:l==null?void 0:l.Applocation},className:"map"}),e.jsxs("div",{className:"contact-info mt-4 bg-white",children:[e.jsxs("div",{className:"card flex items-center mb-3 p-4 rounded-lg",style:{boxShadow:"0 5px 50px 0 #00000014"},children:[e.jsx("div",{className:"icon me-3 bg-[var(--primary-color)] text-white rounded-full p-2 text-3xl",children:e.jsx(r,{})}),e.jsxs("div",{className:"infos",children:[e.jsx("h6",{children:"Office Timings"}),e.jsx("p",{children:l.Apptimework})]})]}),e.jsxs("div",{className:"card flex items-center mb-3 p-4 rounded-lg",style:{boxShadow:"0 5px 50px 0 #00000014"},children:[e.jsx("div",{className:"icon me-3 bg-[var(--primary-color)] text-white rounded-full p-2 text-3xl",children:e.jsx(r,{})}),e.jsxs("div",{className:"infos",children:[e.jsx("h6",{children:"Emai Address"}),e.jsx("p",{children:l.Appemail})]})]}),e.jsxs("div",{className:"card flex items-center mb-3 p-4 rounded-lg",style:{boxShadow:"0 5px 50px 0 #00000014"},children:[e.jsx("div",{className:"icon me-3 bg-[var(--primary-color)] text-white rounded-full p-2 text-3xl",children:e.jsx(r,{})}),e.jsxs("div",{className:"infos",children:[e.jsx("h6",{children:"Phone Number"}),e.jsx("p",{children:l.Appphone})]})]}),e.jsxs("div",{className:"card flex items-center p-4 rounded-lg",style:{boxShadow:"0 5px 50px 0 #00000014"},children:[e.jsx("div",{className:"icon me-3 bg-[var(--primary-color)] text-white rounded-full p-2 text-3xl",children:e.jsx(r,{})}),e.jsxs("div",{className:"infos",children:[e.jsx("h6",{children:"Live chat"}),e.jsx("p",{children:l.Applivechat})]})]})]})]}),e.jsx("div",{className:"right",children:e.jsxs("form",{className:"form-contact h-full border border-[var(--primary-color)] rounded-lg p-5 grid md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"form-group",children:[e.jsx("div",{className:"label flex items-center text-[17px] mb-2 text-[#888888]",children:e.jsx("label",{htmlFor:"name",children:"Contact Number"})}),e.jsx("input",{className:" placeholder:text-[#BDBDBD] w-full rounded-lg border-[#BDBDBD]",type:"text",id:"name",placeholder:"First Name"})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("div",{className:"label flex items-center text-[17px] mb-2 text-[#888888]",children:e.jsx("label",{htmlFor:"name",children:"Contact Number"})}),e.jsx("input",{className:" placeholder:text-[#BDBDBD] rounded-lg border-[#BDBDBD] w-full",type:"text",id:"name",placeholder:"Last Name"})]}),e.jsxs("div",{className:"form-group col-span-2",children:[e.jsx("div",{className:"label flex items-center text-[17px] mb-2 text-[#888888]",children:e.jsx("label",{htmlFor:"name",children:"Email"})}),e.jsx("input",{className:" placeholder:text-[#BDBDBD] w-full rounded-lg border-[#BDBDBD]",type:"text",id:"name",placeholder:"Email"})]}),e.jsxs("div",{className:"form-group col-span-2",children:[e.jsx("div",{className:"label flex items-center text-[17px] mb-2 text-[#888888]",children:e.jsx("label",{htmlFor:"name",children:"Phone Number"})}),e.jsx("input",{className:" placeholder:text-[#BDBDBD] rounded-lg border-[#BDBDBD] w-full",type:"text",id:"name",placeholder:"Phone Number"})]}),e.jsxs("div",{className:"form-group col-span-2",children:[e.jsx("div",{className:"label flex items-center text-[17px] mb-2 text-[#888888]",children:e.jsx("label",{htmlFor:"name",children:"Select Date"})}),e.jsx("input",{className:" placeholder:text-[#BDBDBD] w-full rounded-lg border-[#BDBDBD]",type:"date",id:"name"})]}),e.jsxs("div",{className:"form-group col-span-2",children:[e.jsx("div",{className:"label flex items-center text-[17px] mb-2 text-[#888888]",children:e.jsx("label",{htmlFor:"name",children:"Message"})}),e.jsx("textarea",{className:" placeholder:text-[#BDBDBD] w-full rounded-lg border-[#BDBDBD]",name:"",id:""})]}),e.jsx(o,{text:"Send Message",className:"col-span-2 m-auto"})]})})]})]})})}function D(){var t,c;const l=x(),{data:s,status:a,error:i}=m(n=>n.contactUs);return p.useEffect(()=>{a==="loading"&&l(h()),console.log("data: ",s)},[a,l]),i?"error":a==="loading"?e.jsx(j,{}):e.jsxs(e.Fragment,{children:[e.jsx(f,{data:s.GeneralInfo,contactUsData:s.ContactUs}),e.jsx(u,{category:(t=s==null?void 0:s.ContactUs)==null?void 0:t.Category,doctors:(c=s==null?void 0:s.ContactUs)==null?void 0:c.Doctors})]})}export{D as default};
