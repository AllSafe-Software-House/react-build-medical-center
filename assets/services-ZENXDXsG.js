import{u as f,a as m,r as t,k as c,j as s,d as u}from"./index-BfNAhHpa.js";import p from"./index-DVFmjmOh.js";import{R as g}from"./index-DGu9Zxdh.js";import{G as x}from"./GallarySection-USIF0jNp.js";import"./index-B2cL3hdY.js";function h(){var a;const r=f(),{data:e,status:o,error:i}=m(l=>l.services);let n=localStorage.getItem("lang");return t.useEffect(()=>{o==="loading"&&r(c()),console.log("data: ",e)},[o,r]),t.useEffect(()=>{r(c())},[n]),t.useEffect(()=>{window.scrollTo(0,0)},[]),i?"error":o==="loading"?s.jsx(u,{}):s.jsxs(s.Fragment,{children:[s.jsx(p,{data:e==null?void 0:e.Services,num:6,showButton:!1}),s.jsx(x,{data:e==null?void 0:e.Gallary}),s.jsx(g,{category:e==null?void 0:e.Department,doctors:(a=e==null?void 0:e.ContactUs)==null?void 0:a.Doctors})]})}export{h as default};
