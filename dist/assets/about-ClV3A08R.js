import{j as s,T as x,F as o,u as i,g as p,r as j,w as d,k as h}from"./index-OGnFnyOy.js";import{R as m}from"./index-BZCR8A7w.js";import{S as g}from"./index--8xPwDjG.js";import"./swiper-react-C4yjxEcJ.js";function f({about:r,mission:e}){return s.jsx("section",{className:"my-20",children:s.jsxs("div",{className:"container",children:[s.jsx(x,{specialText:r==null?void 0:r.Title,p:r==null?void 0:r.Description}),s.jsxs("div",{className:"grid md:grid-cols-2 gap-4 mt-16",children:[s.jsx(o,{children:s.jsxs("div",{className:"left",children:[s.jsx("h2",{className:"text-3xl font-bold",children:e==null?void 0:e.SectionName}),s.jsx("p",{className:"",children:e==null?void 0:e.Description})]})}),s.jsx(o,{children:s.jsx("div",{className:"right",children:s.jsx("img",{src:e==null?void 0:e.Image,className:"w-[100%] h-[400px]",alt:""})})})]})]})})}function v(){var t,l;const r=i(),{data:e,status:c,error:a}=p(n=>n.about);return j.useEffect(()=>{c==="loading"&&r(d())},[c,r]),a?"error":c==="loading"?s.jsx(h,{}):s.jsxs("section",{className:"mt-20",children:[s.jsx(f,{about:e==null?void 0:e.Aboutus,mission:e==null?void 0:e.Mission}),s.jsx(g,{data:e==null?void 0:e.Doctors}),s.jsx(m,{category:(t=e==null?void 0:e.ContactUs)==null?void 0:t.Category,doctors:(l=e==null?void 0:e.ContactUs)==null?void 0:l.Doctors})]})}export{v as default};
