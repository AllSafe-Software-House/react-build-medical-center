import{u as i,a as n,r as m,w as p,j as e,l as u}from"./index-CN00o8aR.js";import{O as f}from"./index-BvBSrPQG.js";import{R as l}from"./index-_gWmP-Do.js";import"./index-o-qclmoW.js";function v(){var t;const r=i(),{data:s,status:o,error:a}=n(c=>c.services);return console.log("data: ",s),m.useEffect(()=>{o==="loading"&&r(p()),console.log("data: ",s)},[o,r]),a?"error":o==="loading"?e.jsx(u,{}):e.jsxs(e.Fragment,{children:[e.jsx(f,{data:s==null?void 0:s.Services,num:6,showButton:!1}),e.jsx(l,{category:s==null?void 0:s.Department,doctors:(t=s==null?void 0:s.ContactUs)==null?void 0:t.Doctors})]})}export{v as default};
