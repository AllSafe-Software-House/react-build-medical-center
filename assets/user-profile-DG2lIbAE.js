import{l as c,j as e,N as t,u as n,a as r,r as o,b as m,x as d,y as x,d as p,O as u}from"./index-Bsy08rZ6.js";function f(){const{t:s}=c("global");return e.jsx("div",{className:"flex flex-col justify-between order-2 lg:order-1",children:e.jsx("div",{className:"px-4 py-6",children:e.jsxs("ul",{className:"space-y-1",children:[e.jsx("li",{className:"!mb-5",children:e.jsx(t,{to:"/user-profile/profile",className:"block px-4 py-2 text-sm font-medium text-gray-700",children:s("custom-text.profile")})}),e.jsx("li",{className:"!mb-5",children:e.jsx(t,{to:"/user-profile/documents",className:"block px-4 py-2 text-sm font-medium text-gray-700",children:s("custom-text.document")})}),e.jsx("li",{className:"!mb-5",children:e.jsx(t,{to:"/user-profile/reservation",className:"block px-4 py-2 text-sm font-medium text-gray-700",children:s("custom-text.reserv")})}),e.jsx("li",{className:"!mb-5",children:e.jsx(t,{to:"/user-profile/change-password",className:"block px-4 py-2 text-sm font-medium text-gray-700",children:s("custom-text.changePass")})}),e.jsx("li",{className:"!mb-5",children:e.jsx(t,{to:"/user-profile/settings",className:"block px-4 py-2 text-sm font-medium text-gray-700",children:s("custom-text.settings")})})]})})})}function j(){const s=n(),{status:l}=r(i=>i.profile),{status:a}=r(i=>i.appointment);return o.useEffect(()=>{(l==="idle"||l==="loading")&&(s(m()),s(d())),(a==="idle"||a==="loading")&&s(x())},[s,l,a]),l==="loading"||a==="loading"?e.jsx(p,{}):(o.useEffect(()=>{window.scrollTo(0,0)},[]),e.jsx("main",{className:"my-10",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"grid lg:grid-cols-4 ",children:[e.jsx(f,{}),e.jsx("div",{className:"px-4 py-6 lg:col-span-3 overflow-hidden lg:order-2 order-1",children:e.jsx(u,{})})]})})}))}export{j as default};