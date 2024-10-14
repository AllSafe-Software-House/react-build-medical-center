import{a as y,r as N,u as f,j as e,e as i,T as b,y as w,z as C,A as S,C as t,D as v,x as D}from"./index-CtkZGU8d.js";function R(){const d=localStorage.getItem("lang"),{appointments:c,status:r,error:n}=y(s=>s.appointment);console.log("appointments: ",c);const[o,x]=N.useState("Pending"),l=f();if(n)return"error";if(r==="loading")return e.jsx(i,{});const p=c[o]||[],h=s=>{x(s.target.value)},m=s=>{l(S(s)).then(a=>{console.log("res: ",a),t.success("Successfully canceled!",{id:"promiss"})}).catch(()=>{t.error("Something went wrong!",{id:"promiss"})})},u=(s,a,g)=>{t.loading("Rescheduling...",{id:"promiss"}),l(v({appointment_id:s,appointment_date:a,appointment_time:g})).unwrap().then(j=>{console.log("response: ",j),l(D()),t.success("Successfully rescheduled!",{id:"promiss"})}).catch(()=>{t.error("Something went wrong!",{id:"promiss"})})};return n?"error":r==="loading"?e.jsx(i,{}):e.jsxs(e.Fragment,{children:[e.jsx(b,{text:"Your",specialText:"Reservations",className:"mb-5 !mt-0"}),e.jsxs("div",{className:"relative overflow-x-auto",children:[e.jsxs("select",{name:"filter",id:"filter",value:o,onChange:h,className:"mt-1 w-[50%] my-3 p-2 text-start rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm",children:[e.jsx("option",{value:"All",children:"All"}),e.jsx("option",{value:"Pending",selected:!0,children:"Pending"}),e.jsx("option",{value:"Completed",children:"Completed"}),e.jsx("option",{value:"Canceled",children:"Canceled"})]}),e.jsxs("table",{className:"w-full !shadow-lg text-sm text-black",children:[e.jsx("thead",{className:`${d=="en"?"text-left":"text-right"} text-xs text-black uppercase bg-gray-50`,children:e.jsxs("tr",{children:[e.jsx("th",{scope:"col",className:"px-6 py-3",children:"Doctor Name"}),e.jsx("th",{scope:"col",className:"px-6 py-3",children:"Status"}),e.jsx("th",{scope:"col",className:"px-6 py-3",children:"Date"}),e.jsx("th",{scope:"col",className:"px-6 py-3",children:"Time"}),e.jsx("th",{scope:"col",className:"px-6 py-3",children:"Category"}),e.jsx("th",{scope:"col",className:"px-6 py-3",children:"Payment Status"}),e.jsx("th",{scope:"col",className:"px-6 py-3",children:"Actions"})]})}),e.jsx("tbody",{children:p.map(s=>e.jsxs("tr",{className:"bg-white border-b",children:[e.jsx("td",{className:"px-6 py-4 font-medium text-black whitespace-nowrap",children:s.Doctor}),e.jsx("td",{className:"px-6 py-4",children:s.Status}),e.jsx("td",{className:"px-6 py-4",children:s.Date}),e.jsx("td",{className:"px-6 py-4",children:s.Time}),e.jsx("td",{className:"px-6 py-4",children:s.Category}),e.jsx("td",{className:"px-6 py-4",children:s.PaymentStatus}),e.jsxs("td",{className:"px-6 py-4 flex items-center",children:[e.jsx("button",{onClick:()=>m(s.ID),className:"bg-red-500 text-white rounded-full px-1 py-1 mr-2",children:e.jsx(w,{})}),e.jsx(C,{text:"Reschedule",appointmentId:s.ID,onSubmit:u})]})]},s.ID))})]})]})]})}export{R as default};
