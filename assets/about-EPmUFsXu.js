import{j as s,T as j,F as c,l as f,u as h,a as N,r as t,m,d as T}from"./index-BV8UKxWE.js";import{R as b}from"./index-Cu18j0-c.js";/* empty css              */import"./swiper-react-BHzGFdXo.js";import{H as v}from"./index-BXUXZaHu.js";import"./particles-B3SOAYOl.js";function p({about:l,mission:e,vission:r=!1}){return s.jsx("section",{className:"my-20",children:s.jsxs("div",{className:"container",children:[r?s.jsx(j,{specialText:l==null?void 0:l.Title,p:l==null?void 0:l.Description}):null,s.jsxs("div",{dir:r?"rtl":"ltr",className:"grid md:grid-cols-2 gap-4 mt-16",children:[s.jsx(c,{children:s.jsxs("div",{className:"left",children:[s.jsx("h2",{className:"text-3xl font-extrabold inline-block bg-clip-text text-transparent bg-gradient-to-r from-[#7760F3] to-[#00E0EA]",children:e==null?void 0:e.Title}),s.jsx("p",{className:"",children:e==null?void 0:e.Description})]})}),s.jsx(c,{children:s.jsx("div",{className:"right",children:s.jsx("img",{src:e==null?void 0:e.Image,className:"w-[100%] h-[400px]",alt:""})})})]})]})})}function E({data:l}){const{t:e}=f("global");return s.jsx(s.Fragment,{children:s.jsx("section",{className:"py-20 bg-[#ededed]",children:s.jsxs("div",{className:"container",children:[s.jsx(c,{children:s.jsx(j,{specialText:e("custom-text.staff")})}),s.jsx("div",{className:"grid mt-10 sm:grid-cols-2 lg:grid-cols-3 gap-5",children:l==null?void 0:l.map(r=>s.jsxs("div",{children:[s.jsx("img",{src:r.Image,className:"w-full object-cover rounded-full  h-[350px]",alt:""}),s.jsx("p",{className:"text-center font-bold text-black mt-4",children:r.Name}),s.jsx("p",{className:"text-center font-medium text-black mt-4",children:r.JobTitle})]},r.id))})]})})})}function I(){var i,n,o,x,a;const l=h(),{data:e,status:r,error:d}=N(g=>g.about);let u=localStorage.getItem("lang");return t.useEffect(()=>{r==="loading"&&l(m())},[r,l]),t.useEffect(()=>{l(m())},[u]),t.useEffect(()=>{window.scrollTo(0,0)},[]),d?"error":r==="loading"?s.jsx(T,{}):s.jsxs("section",{className:"mt-20",children:[s.jsx(p,{vission:!0,about:e==null?void 0:e.Aboutus,mission:e==null?void 0:e.Vission}),s.jsx(p,{about:e==null?void 0:e.Aboutus,mission:e==null?void 0:e.Mission}),s.jsx(E,{data:e==null?void 0:e.Team}),s.jsx(v,{maill:!0,mail:(i=e==null?void 0:e.OurTeam)==null?void 0:i.Email,img:(n=e==null?void 0:e.OurTeam)==null?void 0:n.Image,p:s.jsx("p",{className:"pb-8 pt-2 font-semibold",children:(o=e==null?void 0:e.OurTeam)==null?void 0:o.Description}),title:s.jsx("h2",{className:"hero-title text-4xl font-extrabold",children:(x=e==null?void 0:e.OurTeam)==null?void 0:x.Title})}),s.jsx(b,{category:e==null?void 0:e.Services,doctors:(a=e==null?void 0:e.ContactUs)==null?void 0:a.Doctors})]})}export{I as default};
