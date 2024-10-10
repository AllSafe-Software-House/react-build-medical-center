import{u as h,c as g,d as o,b as D,a as j,e as f,j as e,F as B,I as y,s as N,g as b,n as c,f as _}from"./index-D1MC2yBr.js";function w({category:m,doctors:p}){var n;const s=h();let a=localStorage.getItem("AccessToken");const x=g({category_id:o().required("Service is required"),doctor_id:o().required("Doctor is required"),appointment_datetime:D().required("Appointment date and time are required"),name:a?o():o().required("Name is required"),phone:a?o():o().required("Phone is required"),gender:a?o():o().required("Gender is required")}),{dataService:l}=j(r=>r.serviceCategory),t=f({initialValues:{category_id:"",doctor_id:"",appointment_datetime:"",name:"",phone:"",gender:""},validationSchema:x,onSubmit:r=>{const i=new Date(r.appointment_datetime),d={name:r.name,phone:r.phone,gender:r.gender,category_id:r.category_id,doctor_id:r.doctor_id,appointment_date:i.toISOString().split("T")[0],appointment_time:i.toTimeString().slice(0,8)};console.log("appointmentData: ",d),a?s(_(d)).unwrap().then(u=>{c.success("Successfully created!")}):s(b(d)).unwrap().then(u=>{c.success("Successfully created!")})}});return e.jsx("section",{className:"bg-[var(--primary-color)] p-10",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"grid md:flex",children:[e.jsx("div",{className:"left lg:flex me-5 lg:justify-center lg:items-start lg:flex-col text-white",children:e.jsxs(B,{direction:"up",children:[e.jsx("h2",{className:"font-bold text-4xl",children:"Leave your worries at the door and enjoy a healthier, more precise smile"}),e.jsx("p",{className:"my-10 lg:w-[70%]",children:`We use only the best quality materials on the market in order to
                provide the best products to our patients, So don't worry about
                anything and book yourself.`}),e.jsxs("button",{className:"text-white shadow hover:shadow-lg flex items-center transition px-4 py-2 rounded-lg",style:{background:"var(--gradient-color-reverse)"},children:["Make Appointment",e.jsx(y,{className:"ms-2"})]})]})}),e.jsx("div",{className:"right mt-5 lg:w-1/2 bg-white p-10",children:e.jsxs("form",{onSubmit:t.handleSubmit,className:"form-booking",children:[e.jsxs("h3",{className:"title text-3xl text-center mb-3 text-[var(--primary-color)]",children:["Request ",e.jsx("br",{})," Appointment"]}),a?null:e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"form-group flex flex-col w-full mb-5",children:[e.jsx("input",{type:"text",id:"name",name:"name",className:"placeholder:text-[#BDBDBD] rounded-lg border-[#BDBDBD] py-2 px-3",placeholder:"Name",...t.getFieldProps("name")}),t.touched.name&&t.errors.name&&e.jsx("div",{className:"error text-red-500",children:t.errors.name})]}),e.jsxs("div",{className:"form-group flex flex-col w-full mb-5",children:[e.jsx("input",{type:"text",id:"phone",name:"phone",className:"placeholder:text-[#BDBDBD] rounded-lg border-[#BDBDBD] py-2 px-3",placeholder:"Phone",...t.getFieldProps("phone")}),t.touched.phone&&t.errors.phone&&e.jsx("div",{className:"error text-red-500",children:t.errors.phone})]}),e.jsxs("div",{className:"form-group flex flex-col w-full mb-5",children:[e.jsxs("select",{id:"gender",name:"gender",className:"placeholder:text-[#BDBDBD] rounded-lg border-[#BDBDBD] py-2 px-3",...t.getFieldProps("gender"),children:[e.jsx("option",{value:"",disabled:!0,children:"Select Your Gender"}),e.jsx("option",{value:"male",children:"Male"}),e.jsx("option",{value:"female",children:"Female"}),e.jsx("option",{value:"other",children:"Other"})]}),t.touched.gender&&t.errors.gender&&e.jsx("div",{className:"error text-red-500",children:t.errors.gender})]})]}),e.jsx("div",{className:"form-group flex flex-col w-full mb-5",children:e.jsxs("select",{className:"placeholder:text-[#BDBDBD] rounded-lg border-[#BDBDBD] py-2 px-3",onChange:r=>{s(N(r.target.value))},children:[e.jsx("option",{value:"",selected:!0,className:"text-[#BDBDBD]",disabled:!0,children:"Select Department"}),m.map(r=>e.jsx("option",{value:r.ID,children:r.Name},r.ID))]})}),e.jsxs("div",{className:"form-group flex flex-col w-full mb-5",children:[e.jsxs("select",{id:"services",name:"category_id",className:"placeholder:text-[#BDBDBD] rounded-lg border-[#BDBDBD] py-2 px-3",...t.getFieldProps("category_id"),children:[e.jsx("option",{value:"",selected:!0,disabled:!0,children:"Select Services"}),(n=l==null?void 0:l.data)==null?void 0:n.map(r=>e.jsx("option",{value:r==null?void 0:r.ID,children:r==null?void 0:r.Name},r==null?void 0:r.ID))]}),t.touched.category_id&&t.errors.category_id&&e.jsx("div",{className:"error text-red-500",children:t.errors.category_id})]}),e.jsxs("div",{className:"form-group flex flex-col w-full mb-5",children:[e.jsxs("select",{name:"doctor_id",className:"placeholder:text-[#BDBDBD] rounded-lg border-[#BDBDBD] py-2 px-3",...t.getFieldProps("doctor_id"),children:[e.jsx("option",{value:"",disabled:!0,children:"Select Doctor"}),p.map(r=>e.jsx("option",{value:r.ID,children:r.Name},r.ID))]}),t.touched.doctor_id&&t.errors.doctor_id&&e.jsx("div",{className:"error text-red-500",children:t.errors.doctor_id})]}),e.jsxs("div",{className:"form-group flex flex-col w-full mb-5",children:[e.jsx("input",{type:"datetime-local",id:"appointment_datetime",name:"appointment_datetime",className:"rounded-lg border-[#BDBDBD]",...t.getFieldProps("appointment_datetime")}),t.touched.appointment_datetime&&t.errors.appointment_datetime&&e.jsx("div",{className:"error text-red-500",children:t.errors.appointment_datetime})]}),e.jsx("div",{className:"form-group flex justify-center items-end bg-[var(--primary-color)] rounded-lg w-fit m-auto",children:e.jsx("button",{type:"submit",className:"text-white shadow hover:shadow-lg transition px-4 py-2 rounded-lg",children:"Request Appointment"})})]})})]})})})}export{w as R};