import{j as s,T as x,F as l,u as n,a as i,r as p,z as j,l as d}from"./index-D1MC2yBr.js";import{R as h}from"./index-CnGdX_VF.js";import{S as m}from"./index-ETbdtXot.js";import"./swiper-react-uyqdj15l.js";function f({about:r,mission:e}){return s.jsx("section",{className:"my-20",children:s.jsxs("div",{className:"container",children:[s.jsx(x,{specialText:r==null?void 0:r.Title,p:r==null?void 0:r.Description}),s.jsxs("div",{className:"grid md:grid-cols-2 gap-4 mt-16",children:[s.jsx(l,{children:s.jsxs("div",{className:"left",children:[s.jsx("h2",{className:"text-3xl font-bold",children:e==null?void 0:e.SectionName}),s.jsx("p",{className:"",children:e==null?void 0:e.Description})]})}),s.jsx(l,{children:s.jsx("div",{className:"right",children:s.jsx("img",{src:e==null?void 0:e.Image,className:"w-[100%] h-[400px]",alt:""})})})]})]})})}function v(){var t;const r=n(),{data:e,status:c,error:a}=i(o=>o.about);return p.useEffect(()=>{c==="loading"&&r(j())},[c,r]),a?"error":c==="loading"?s.jsx(d,{}):s.jsxs("section",{className:"mt-20",children:[s.jsx(f,{about:e==null?void 0:e.Aboutus,mission:e==null?void 0:e.Mission}),s.jsx(m,{data:e==null?void 0:e.Doctors}),s.jsx(h,{category:e==null?void 0:e.Services,doctors:(t=e==null?void 0:e.ContactUs)==null?void 0:t.Doctors})]})}export{v as default};