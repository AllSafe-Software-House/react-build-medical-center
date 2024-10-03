import{u as y,g as N,r as i,H as f,j as e,k as c,T as _,S as w,U as v,V as t,W as a,c as S,b as r,a as q,n as l,X as F}from"./index-CQfleUZ3.js";const k=S({first_name:r().required("First Name is required"),middle_name:r().nullable(),last_name:r().required("Last Name is required"),phone_number:r().required("Phone Number is required"),country_code:r().required("Country Code is required"),email:r().email("Invalid email address").required("Email is required"),emirate:r().required("Emirate is required"),city:r().required("City is required"),street_address:r().required("Street Address is required"),date_of_birth:q().required("Date of Birth is required"),gender:r().required("Gender is required"),marital_status:r().required("Marital Status is required"),comments:r()});function E(){const n=y(),{data:s,status:d,error:x}=N(m=>m.profile),[o,u]=i.useState(null),[h,p]=i.useState(0);i.useEffect(()=>{(d==="idle"||d==="loading")&&n(f())},[n,d,h]),i.useEffect(()=>{if(s){const m={first_name:s.FirstName||"",middle_name:s.MiddleName||"",last_name:s.LastName||"",phone_number:s.PhoneNumber||"",country_code:s.CountryCode||"",email:s.Email||"",emirate:s.Emirate||"",city:s.City||"",street_address:s.StreetAddress||"",date_of_birth:s.DateOfBirth||"",gender:s.Gender||"",marital_status:s.MaritalStatus||"",comments:s.Comments||""};u(m)}},[s]);const g=m=>{console.log("values: ",m),l.loading("Updating profile...",{id:"promiss"}),n(F(m)).unwrap().then(b=>{b.status===!1?(l.dismiss("promiss"),l.error("Something went wrong!")):(l.dismiss("promiss"),l.success("Successfully updated!"),p(j=>j+1))})};return o?x?"error":d==="loading"?e.jsx(c,{}):e.jsx("main",{className:"settings-form px-4",children:e.jsxs("div",{className:"px-10",children:[e.jsx(_,{text:"Settings",className:"!mt-0 mb-10"}),e.jsx(w,{enableReinitialize:!0,initialValues:o,validationSchema:k,onSubmit:g,children:()=>e.jsxs(v,{className:"grid grid-cols-12 gap-6",children:[e.jsxs("div",{className:"col-span-12 sm:col-span-4",children:[e.jsx("label",{htmlFor:"first_name",className:"block text-sm font-medium text-gray-700",children:"First Name"}),e.jsx(t,{type:"text",id:"first_name",name:"first_name",className:"mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"}),e.jsx(a,{name:"first_name",component:"div",className:"text-red-600 text-sm"})]}),e.jsxs("div",{className:"col-span-12 sm:col-span-4",children:[e.jsx("label",{htmlFor:"middle_name",className:"block text-sm font-medium text-gray-700",children:"Middle Name"}),e.jsx(t,{type:"text",id:"middle_name",name:"middle_name",className:"mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"}),e.jsx(a,{name:"middle_name",component:"div",className:"text-red-600 text-sm"})]}),e.jsxs("div",{className:"col-span-12 sm:col-span-4",children:[e.jsx("label",{htmlFor:"last_name",className:"block text-sm font-medium text-gray-700",children:"Last Name"}),e.jsx(t,{type:"text",id:"last_name",name:"last_name",className:"mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"}),e.jsx(a,{name:"last_name",component:"div",className:"text-red-600 text-sm"})]}),e.jsxs("div",{className:"col-span-12 sm:col-span-6",children:[e.jsx("label",{htmlFor:"phone_number",className:"block text-sm font-medium text-gray-700",children:"Phone Number"}),e.jsx(t,{type:"text",id:"phone_number",name:"phone_number",className:"mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"}),e.jsx(a,{name:"phone_number",component:"div",className:"text-red-600 text-sm"})]}),e.jsxs("div",{className:"col-span-12 sm:col-span-6",children:[e.jsx("label",{htmlFor:"country_code",className:"block text-sm font-medium text-gray-700",children:"Country Code"}),e.jsx(t,{type:"text",id:"country_code",name:"country_code",className:"mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"}),e.jsx(a,{name:"country_code",component:"div",className:"text-red-600 text-sm"})]}),e.jsxs("div",{className:"col-span-12",children:[e.jsx("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-700",children:"Email"}),e.jsx(t,{type:"email",id:"email",name:"email",className:"mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"}),e.jsx(a,{name:"email",component:"div",className:"text-red-600 text-sm"})]}),e.jsxs("div",{className:"col-span-12 sm:col-span-6",children:[e.jsx("label",{htmlFor:"emirate",className:"block text-sm font-medium text-gray-700",children:"Emirate"}),e.jsx(t,{type:"text",id:"emirate",name:"emirate",className:"mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"}),e.jsx(a,{name:"emirate",component:"div",className:"text-red-600 text-sm"})]}),e.jsxs("div",{className:"col-span-12 sm:col-span-6",children:[e.jsx("label",{htmlFor:"city",className:"block text-sm font-medium text-gray-700",children:"City"}),e.jsx(t,{type:"text",id:"city",name:"city",className:"mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"}),e.jsx(a,{name:"city",component:"div",className:"text-red-600 text-sm"})]}),e.jsxs("div",{className:"col-span-12",children:[e.jsx("label",{htmlFor:"street_address",className:"block text-sm font-medium text-gray-700",children:"Street Address"}),e.jsx(t,{type:"text",id:"street_address",name:"street_address",className:"mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"}),e.jsx(a,{name:"street_address",component:"div",className:"text-red-600 text-sm"})]}),e.jsxs("div",{className:"col-span-12 sm:col-span-4",children:[e.jsx("label",{htmlFor:"date_of_birth",className:"block text-sm font-medium text-gray-700",children:"Date of Birth"}),e.jsx(t,{type:"date",id:"date_of_birth",name:"date_of_birth",className:"mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"}),e.jsx(a,{name:"date_of_birth",component:"div",className:"text-red-600 text-sm"})]}),e.jsxs("div",{className:"col-span-12 sm:col-span-4",children:[e.jsx("label",{htmlFor:"gender",className:"block text-sm font-medium text-gray-700",children:"Gender"}),e.jsxs(t,{as:"select",id:"gender",name:"gender",className:"mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm",children:[e.jsx("option",{value:"",children:"Select Gender"}),e.jsx("option",{value:"male",children:"Male"}),e.jsx("option",{value:"female",children:"Female"}),e.jsx("option",{value:"other",children:"Other"})]}),e.jsx(a,{name:"gender",component:"div",className:"text-red-600 text-sm"})]}),e.jsxs("div",{className:"col-span-12 sm:col-span-4",children:[e.jsx("label",{htmlFor:"marital_status",className:"block text-sm font-medium text-gray-700",children:"Marital Status"}),e.jsxs(t,{as:"select",id:"marital_status",name:"marital_status",className:"mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm",children:[e.jsx("option",{value:"",children:"Select Marital Status"}),e.jsx("option",{value:"single",children:"Single"}),e.jsx("option",{value:"married",children:"Married"}),e.jsx("option",{value:"divorced",children:"Divorced"}),e.jsx("option",{value:"widowed",children:"Widowed"})]}),e.jsx(a,{name:"marital_status",component:"div",className:"text-red-600 text-sm"})]}),e.jsxs("div",{className:"col-span-12",children:[e.jsx("label",{htmlFor:"comments",className:"block text-sm font-medium text-gray-700",children:"Comments"}),e.jsx(t,{as:"textarea",id:"comments",name:"comments",rows:"3",className:"mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"}),e.jsx(a,{name:"comments",component:"div",className:"text-red-600 text-sm"})]}),e.jsx("div",{className:"col-span-12 sm:flex sm:items-center sm:gap-4",children:e.jsx("button",{type:"submit",className:"text-white px-3 py-2 rounded-md w-full hover:shadow-lg transition",style:{background:"var(--gradient-color)"},children:"Save Settings"})})]})})]})}):e.jsx(c,{})}export{E as default};
