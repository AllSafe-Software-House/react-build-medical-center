import{j as e,N as s,u as o,a as r,r as c,c as n,w as d,x as m,e as x,O as p}from"./index-BnSpTr-0.js";function u(){return e.jsx("div",{className:"flex flex-col justify-between order-2 lg:order-1",children:e.jsx("div",{className:"px-4 py-6",children:e.jsxs("ul",{className:"space-y-1",children:[e.jsx("li",{className:"!mb-5",children:e.jsx(s,{to:"/user-profile/profile",className:"block px-4 py-2 text-sm font-medium text-gray-700",children:"Profile"})}),e.jsx("li",{className:"!mb-5",children:e.jsx(s,{to:"/user-profile/documents",className:"block px-4 py-2 text-sm font-medium text-gray-700",children:"Documents"})}),e.jsx("li",{className:"!mb-5",children:e.jsx(s,{to:"/user-profile/reservation",className:"block px-4 py-2 text-sm font-medium text-gray-700",children:"Reservation"})}),e.jsx("li",{className:"!mb-5",children:e.jsx(s,{to:"/user-profile/change-password",className:"block px-4 py-2 text-sm font-medium text-gray-700",children:"Change Password"})}),e.jsx("li",{className:"!mb-5",children:e.jsx(s,{to:"/user-profile/settings",className:"block px-4 py-2 text-sm font-medium text-gray-700",children:"Settings"})})]})})})}function j(){const t=o(),{status:a}=r(i=>i.profile),{status:l}=r(i=>i.appointment);return c.useEffect(()=>{(a==="idle"||a==="loading")&&(t(n()),t(d())),(l==="idle"||l==="loading")&&t(m())},[t,a,l]),a==="loading"||l==="loading"?e.jsx(x,{}):e.jsx("main",{className:"my-10",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"grid lg:grid-cols-4 ",children:[e.jsx(u,{}),e.jsx("div",{className:"px-4 py-6 lg:col-span-3 overflow-hidden lg:order-2 order-1",children:e.jsx(p,{})})]})})})}export{j as default};