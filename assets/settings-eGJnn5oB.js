import{j as e,T as r,m as l,n as d,o as t,E as s,p as n,q as a}from"./index-CwwpYieH.js";const i=n({first_name:a().required("First Name is required"),middle_name:a().required("Middle Name is required"),last_name:a().required("Last Name is required"),email:a().email("Invalid email address").required("Email is required"),phone:a().required("Phone is required"),current_location:a().required("Current Location is required"),street:a().required("Street is required"),city:a().required("City is required"),country:a().required("Country is required")}),o={first_name:"John",middle_name:"A.",last_name:"Doe",email:"john.doe@example.com",phone:"+20 123 456 7890",current_location:"GPS Coordinates",street:"123 Main St",city:"Cairo",country:"Egypt"},c=m=>{console.log(m)};function h(){return e.jsx("main",{className:"settings-form px-4",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"px-10",children:[e.jsx(r,{text:"Settings",className:"!mt-0 mb-10"}),e.jsx(l,{initialValues:o,validationSchema:i,onSubmit:c,children:()=>e.jsxs(d,{className:"grid grid-cols-12 gap-6",children:[e.jsxs("div",{className:"col-span-12 sm:col-span-4",children:[e.jsx("label",{htmlFor:"first_name",className:"block text-sm font-medium text-gray-700",children:"First Name"}),e.jsx(t,{type:"text",id:"first_name",name:"first_name",placeholder:"First Name",className:"mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"}),e.jsx(s,{name:"first_name",component:"div",className:"text-red-600 text-sm"})]}),e.jsxs("div",{className:"col-span-12 sm:col-span-4",children:[e.jsx("label",{htmlFor:"middle_name",className:"block text-sm font-medium text-gray-700",children:"Middle Name"}),e.jsx(t,{type:"text",id:"middle_name",name:"middle_name",placeholder:"Middle Name",className:"mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"}),e.jsx(s,{name:"middle_name",component:"div",className:"text-red-600 text-sm"})]}),e.jsxs("div",{className:"col-span-12 sm:col-span-4",children:[e.jsx("label",{htmlFor:"last_name",className:"block text-sm font-medium text-gray-700",children:"Last Name"}),e.jsx(t,{type:"text",id:"last_name",name:"last_name",placeholder:"Last Name",className:"mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"}),e.jsx(s,{name:"last_name",component:"div",className:"text-red-600 text-sm"})]}),e.jsxs("div",{className:"col-span-12",children:[e.jsx("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-700",children:"Email"}),e.jsx(t,{type:"email",id:"email",name:"email",placeholder:"you@company.com",className:"mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"}),e.jsx(s,{name:"email",component:"div",className:"text-red-600 text-sm"})]}),e.jsxs("div",{className:"col-span-12",children:[e.jsx("label",{htmlFor:"phone",className:"block text-sm font-medium text-gray-700",children:"Phone"}),e.jsx(t,{type:"text",id:"phone",name:"phone",placeholder:"+20 123 456 7890",className:"mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"}),e.jsx(s,{name:"phone",component:"div",className:"text-red-600 text-sm"})]}),e.jsxs("div",{className:"col-span-12",children:[e.jsx("label",{htmlFor:"current_location",className:"block text-sm font-medium text-gray-700",children:"Current Location"}),e.jsx(t,{type:"text",id:"current_location",name:"current_location",placeholder:"Use GPS",className:"mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"}),e.jsx(s,{name:"current_location",component:"div",className:"text-red-600 text-sm"})]}),e.jsxs("div",{className:"col-span-12 sm:col-span-6",children:[e.jsx("label",{htmlFor:"street",className:"block text-sm font-medium text-gray-700",children:"Street"}),e.jsx(t,{type:"text",id:"street",name:"street",placeholder:"Street",className:"mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"}),e.jsx(s,{name:"street",component:"div",className:"text-red-600 text-sm"})]}),e.jsxs("div",{className:"col-span-12 sm:col-span-6",children:[e.jsx("label",{htmlFor:"city",className:"block text-sm font-medium text-gray-700",children:"City"}),e.jsx(t,{type:"text",id:"city",name:"city",placeholder:"City",className:"mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"}),e.jsx(s,{name:"city",component:"div",className:"text-red-600 text-sm"})]}),e.jsxs("div",{className:"col-span-12",children:[e.jsx("label",{htmlFor:"country",className:"block text-sm font-medium text-gray-700",children:"Country"}),e.jsx(t,{type:"text",id:"country",name:"country",placeholder:"Country",className:"mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"}),e.jsx(s,{name:"country",component:"div",className:"text-red-600 text-sm"})]}),e.jsx("div",{className:"col-span-12 sm:flex sm:items-center sm:gap-4",children:e.jsx("button",{type:"submit",className:"text-white px-3 py-2 rounded-md w-full hover:shadow-lg transition",style:{background:"var(--gradient-color)"},children:"Save Settings"})})]})})]})})})}export{h as default};
