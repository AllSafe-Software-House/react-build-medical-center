import{G as N,R as _,j as e,L as y,l as w,u as F,a as f,n as D,p as k,o,q as B,t as z,v as S,$ as x,a0 as q,s as I}from"./index-CmkCnfeg.js";import{c as u}from"./utils-DnNDQBbQ.js";import{P as C}from"./particles-DwGKyRC9.js";function P(a){return N({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M10 3H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM9 9H5V5h4v4zm11-6h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm-1 6h-4V5h4v4zm-9 4H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1zm-1 6H5v-4h4v4zm8-6c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4zm0 6c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2z"},child:[]}]})(a)}const g=_.forwardRef(({shimmerColor:a="#2be4ec",shimmerSize:n="0.07em",shimmerDuration:s="2s",borderRadius:i=".375rem",background:l="#7563f3",className:d,children:h,to:t,...c},r)=>{const m=e.jsxs(e.Fragment,{children:[e.jsx("div",{className:u("-z-30 blur-[2px]","absolute inset-0 overflow-visible [container-type:size]"),children:e.jsx("div",{className:"absolute inset-0 h-[100cqh] animate-slide [aspect-ratio:1] [border-radius:0] [mask:none]",children:e.jsx("div",{className:"animate-spin-around absolute inset-[-100%] w-auto rotate-0 [background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,var(--shimmer-color)_var(--spread),transparent_var(--spread))] [translate:0_0]"})})}),h,e.jsx("div",{className:u("insert-0 absolute h-full w-full","rounded-2xl px-4 py-1.5 text-sm font-medium","transform-gpu transition-all duration-300 ease-in-out")}),e.jsx("div",{className:u("absolute -z-20 [background:var(--bg)] [border-radius:var(--radius)] [inset:var(--cut)]")})]});return t?e.jsx(y,{style:{"--spread":"90deg","--shimmer-color":a,"--radius":i,"--speed":s,"--cut":n,"--bg":l},to:t,className:u("relative z-0 flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap px-6 py-3 text-white [background:var(--bg)] [border-radius:var(--radius)]","transform-gpu transition-transform duration-300 ease-in-out active:translate-y-[1px]",d),...c,children:m}):e.jsx("button",{style:{"--spread":"90deg","--shimmer-color":a,"--radius":i,"--speed":s,"--cut":n,"--bg":l},className:u("relative z-0 flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap px-6 py-3 text-white [background:var(--bg)] [border-radius:var(--radius)]","transform-gpu transition-transform duration-300 ease-in-out active:translate-y-[1px]",d),ref:r,...c,children:m})});g.displayName="ShimmerButton";const T=g;function $({text:a,to:n,className:s}){return e.jsx("div",{className:`${s} z-10 flex items-center justify-center`,children:e.jsx(T,{to:n,className:`${s} hover:shadow-lg transition bg-red-50`,children:e.jsx("span",{className:"whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white lg:text-lg",children:a})})})}function M({category:a,doctors:n}){var c;const{t:s}=w("global"),i=F();let l=localStorage.getItem("AccessToken");const{dataService:d}=f(r=>r.serviceCategory);f(r=>r.home);const h=D({appointment_datetime:k().required("Date and time are required"),category_id:o().required("Service is required"),doctor_id:o(),name:l?o():o().required("Name is required"),phone:l?o():o().required("Phone is required"),gender:l?o():o().required("Gender is required")}),t=B({initialValues:{appointment_datetime:new Date().toISOString().slice(0,16),category_id:"",doctor_id:"",name:"",phone:"",gender:""},validationSchema:h,onSubmit:r=>{const m=new Date(r.appointment_datetime),b=m.toISOString().split("T")[0],j=m.toTimeString().slice(0,8),p={category_id:r.category_id,doctor_id:r.doctor_id,appointment_date:b,appointment_time:j,name:r.name,phone:r.phone,gender:r.gender};l?i(S(p)).unwrap().then(v=>{document.getElementById("my_modal_2").showModal()}):i(z(p)).unwrap().then(v=>{document.getElementById("my_modal_2").showModal()})}});return e.jsxs("section",{className:"my-12",children:[e.jsxs("div",{className:"container  rounded-2xl  relative z-[2]",children:[e.jsx(C,{className:"absolute w-full h-full inset-0 z-[-1]",quantity:200,ease:80,color:"#6671f1",refresh:!0}),e.jsxs("div",{className:"booking-section",children:[e.jsx("h4",{className:"text-2xl p-8 font-bold text-[var(--primary-color)]",children:s("custom-text.bookingTitle")}),e.jsxs("form",{onSubmit:t.handleSubmit,className:"form-booking p-8  mt-4 grid md:grid-cols-2 lg:grid-cols-4 gap-9 border border-[var(--primary-color)]",children:[l?null:e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"form-group flex flex-col w-full mb-5",children:[e.jsxs("div",{className:"label flex items-center text-[17px] mb-2 text-[#888888]",children:[e.jsx(x,{className:"me-2 text-2xl text-[#7760F3]"}),e.jsx("label",{htmlFor:"doctor_id",children:s("custom-text.name")})]}),e.jsx("input",{type:"text",id:"doctor_id",name:"name",className:" rounded-lg border-[#3f3f3f] bg-white  py-2 px-3",placeholder:"Name",onChange:t.handleChange,onBlur:t.handleBlur,value:t.values.name}),t.touched.name&&t.errors.name&&e.jsx("div",{className:"error text-red-500",children:t.errors.name})]}),e.jsxs("div",{className:"form-group flex flex-col w-full mb-5",children:[e.jsxs("div",{className:"label flex items-center text-[17px] mb-2 text-[#888888]",children:[e.jsx(x,{className:"me-2 text-2xl text-[#7760F3]"}),e.jsxs("label",{htmlFor:"doctor_id",children:[s("custom-text.phone"),":"]})]}),e.jsx("input",{type:"text",id:"doctor_id",name:"phone",className:" rounded-lg border-[#3f3f3f] bg-white  py-2 px-3",placeholder:"Phone",onChange:t.handleChange,onBlur:t.handleBlur,value:t.values.phone}),t.touched.phone&&t.errors.phone&&e.jsx("div",{className:"error text-red-500",children:t.errors.phone})]}),e.jsxs("div",{className:"form-group flex flex-col w-full mb-5",children:[e.jsxs("div",{className:"label flex items-center text-[17px] mb-2 text-[#888888]",children:[e.jsx(x,{className:"me-2 text-2xl text-[#7760F3]"}),e.jsxs("label",{htmlFor:"gender",children:[s("custom-text.gender"),":"]})]}),e.jsxs("select",{id:"gender",name:"gender",className:" rounded-lg border-[#3f3f3f] bg-white  py-2 px-3",onChange:t.handleChange,onBlur:t.handleBlur,value:t.values.gender,children:[e.jsx("option",{value:"",disabled:!0,children:s("custom-text.selectGender")}),e.jsx("option",{value:"male",children:s("custom-text.male")}),e.jsx("option",{value:"female",children:s("custom-text.female")}),e.jsx("option",{value:"other",children:s("custom-text.other")})]}),t.touched.gender&&t.errors.gender&&e.jsx("div",{className:"error text-red-500",children:t.errors.gender})]})]}),e.jsxs("div",{className:"form-group flex flex-col w-full",children:[e.jsxs("div",{className:"label flex items-center text-[17px] mb-2 text-[#888888]",children:[e.jsx(q,{className:"me-2 text-2xl text-[#7760F3]"}),e.jsx("label",{htmlFor:"appointment_datetime",children:s("custom-text.dateTime")})]}),e.jsx("input",{className:" rounded-lg border-[#3f3f3f] bg-white py-2 px-3",type:"datetime-local",name:"appointment_datetime",id:"appointment_datetime",...t.getFieldProps("appointment_datetime")}),t.touched.appointment_datetime&&t.errors.appointment_datetime&&e.jsx("div",{className:"error text-red-500",children:t.errors.appointment_datetime})]}),e.jsxs("div",{className:"form-group flex flex-col w-full mb-5",children:[e.jsxs("div",{className:"label flex items-center text-[17px] mb-2 text-[#888888]",children:[e.jsx(P,{className:"me-2 text-2xl text-[#7760F3]"}),e.jsx("label",{htmlFor:"category_id",children:s("custom-text.selectDepart")})]}),e.jsxs("select",{id:"category_id",onChange:r=>{i(I(r.target.value))},className:" rounded-lg border-[#3f3f3f] bg-white  py-2 px-3",children:[e.jsx("option",{selected:!0,value:"",disabled:!0,children:s("custom-text.selectDepart")}),a==null?void 0:a.map(r=>e.jsx("option",{value:r.ID,children:r.Name},r.ID))]})]}),e.jsxs("div",{className:"form-group flex flex-col w-full mb-5",children:[e.jsxs("div",{className:"label flex items-center text-[17px] mb-2 text-[#888888]",children:[e.jsx(x,{className:"me-2 text-2xl text-[#7760F3]"}),e.jsxs("label",{htmlFor:"services",children:[s("custom-text.services"),":"]})]}),e.jsxs("select",{id:"services",name:"category_id",...t.getFieldProps("category_id"),className:" rounded-lg border-[#3f3f3f] bg-white py-2 px-3",children:[e.jsx("option",{selected:!0,value:"",disabled:!0,children:s("custom-text.services")}),(c=d==null?void 0:d.data)==null?void 0:c.map(r=>e.jsx("option",{value:r==null?void 0:r.ID,children:r==null?void 0:r.Name},r==null?void 0:r.ID))]}),t.touched.category_id&&t.errors.category_id&&e.jsx("div",{className:"error text-red-500",children:t.errors.category_id})]}),e.jsxs("div",{className:"form-group flex flex-col w-full mb-5",children:[e.jsxs("div",{className:"label flex items-center text-[17px] mb-2 text-[#888888]",children:[e.jsx(x,{className:"me-2 text-2xl text-[#7760F3]"}),e.jsx("label",{htmlFor:"doctor_id",children:s("custom-text.selDoctor")})]}),e.jsxs("select",{id:"doctor_id",name:"doctor_id",className:" rounded-lg border-[#3f3f3f] bg-white  py-2 px-3",...t.getFieldProps("doctor_id"),children:[e.jsx("option",{selected:!0,value:"",disabled:!0,children:s("custom-text.selDoctor")}),e.jsx("option",{selected:!0,value:"",children:s("custom-text.notSeleted")}),n.map(r=>e.jsx("option",{value:r.ID,children:r.Name},r.ID))]}),t.touched.doctor_id&&t.errors.doctor_id&&e.jsx("div",{className:"error text-red-500",children:t.errors.doctor_id})]}),e.jsx("div",{className:"form-group w-full flex justify-center items-end mb-5",children:e.jsx($,{className:"w-full",text:s("custom-text.bookNow"),type:"submit"})})]})]})]}),e.jsxs("dialog",{id:"my_modal_2",className:"modal",children:[e.jsxs("div",{className:"modal-box bg-white text-black",children:[e.jsxs("h3",{className:"font-bold text-lg",children:[s("custom-text.done"),"!"]}),e.jsxs("p",{className:"py-4",children:[s("custom-text.success"),"!"]})]}),e.jsx("form",{method:"dialog",className:"modal-backdrop",children:e.jsx("button",{children:"close"})})]})]})}export{M as default};
