import{u as p,c as x,b as n,a as u,d as h,j as e,F as g,E as j,n as o,e as f}from"./index-CQfleUZ3.js";function D({category:d,doctors:l}){const c=p(),m=x({category_id:n().required("Category is required"),doctor_id:n().required("Doctor is required"),appointment_datetime:u().required("Appointment date and time are required")}),t=h({initialValues:{category_id:"",doctor_id:"",appointment_datetime:""},validationSchema:m,onSubmit:r=>{const s=new Date(r.appointment_datetime),a={category_id:r.category_id,doctor_id:r.doctor_id,appointment_date:s.toISOString().split("T")[0],appointment_time:s.toTimeString().slice(0,8)};console.log("appointmentData: ",a),o.loading("Creating Appointment...",{id:"promiss"}),c(f(a)).unwrap().then(i=>{i.status==!1?(o.dismiss("promiss"),o.error("Something went wrong!")):(o.dismiss("promiss"),o.success("Successfully created!"))}).catch(i=>console.error("Error creating appointment:",i))}});return e.jsx("section",{className:"bg-[var(--primary-color)] p-10",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"grid md:flex",children:[e.jsx("div",{className:"left lg:flex me-5 lg:justify-center lg:items-start lg:flex-col text-white",children:e.jsxs(g,{direction:"up",children:[e.jsx("h2",{className:"font-bold text-4xl",children:"Leave your worries at the door and enjoy a healthier, more precise smile"}),e.jsx("p",{className:"my-10 lg:w-[70%]",children:`We use only the best quality materials on the market in order to
                provide the best products to our patients, So don't worry about
                anything and book yourself.`}),e.jsxs("button",{className:"text-white shadow hover:shadow-lg flex items-center transition px-4 py-2 rounded-lg",style:{background:"var(--gradient-color-reverse)"},children:["Make Appointment",e.jsx(j,{className:"ms-2"})]})]})}),e.jsx("div",{className:"right mt-5 lg:w-1/2 bg-white p-10",children:e.jsxs("form",{onSubmit:t.handleSubmit,className:"form-booking",children:[e.jsxs("h3",{className:"title text-3xl text-center mb-3 text-[var(--primary-color)]",children:["Request ",e.jsx("br",{})," Appointment"]}),e.jsxs("div",{className:"form-group flex flex-col w-full mb-5",children:[e.jsxs("select",{name:"category_id",className:"placeholder:text-[#BDBDBD] rounded-lg border-[#BDBDBD] py-2 px-3",...t.getFieldProps("category_id"),children:[e.jsx("option",{value:"",className:"text-[#BDBDBD]",disabled:!0,children:"Select Category"}),d.map(r=>e.jsx("option",{value:r.ID,children:r.Name},r.ID))]}),t.touched.category_id&&t.errors.category_id&&e.jsx("div",{className:"error text-red-500",children:t.errors.category_id})]}),e.jsxs("div",{className:"form-group flex flex-col w-full mb-5",children:[e.jsxs("select",{name:"doctor_id",className:"placeholder:text-[#BDBDBD] rounded-lg border-[#BDBDBD] py-2 px-3",...t.getFieldProps("doctor_id"),children:[e.jsx("option",{value:"",disabled:!0,children:"Select Doctor"}),l.map(r=>e.jsx("option",{value:r.ID,children:r.Name},r.ID))]}),t.touched.doctor_id&&t.errors.doctor_id&&e.jsx("div",{className:"error text-red-500",children:t.errors.doctor_id})]}),e.jsxs("div",{className:"form-group flex flex-col w-full mb-5",children:[e.jsx("input",{type:"datetime-local",id:"appointment_datetime",name:"appointment_datetime",className:"placeholder:text-[#BDBDBD] rounded-lg border-[#BDBDBD]",...t.getFieldProps("appointment_datetime")}),t.touched.appointment_datetime&&t.errors.appointment_datetime&&e.jsx("div",{className:"error text-red-500",children:t.errors.appointment_datetime})]}),e.jsx("div",{className:"form-group flex justify-center items-end bg-[var(--primary-color)] rounded-lg w-fit m-auto",children:e.jsx("button",{type:"submit",className:"text-white shadow hover:shadow-lg transition px-4 py-2 rounded-lg",children:"Request Appointment"})})]})})]})})})}export{D as R};