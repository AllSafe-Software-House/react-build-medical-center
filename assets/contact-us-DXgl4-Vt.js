import{u as i,a as m,r as p,k as f,j as o,l as u}from"./index-BPBEZ2UW.js";import{C as l}from"./index-K1PdVXv0.js";import{R as x}from"./index-VpDoY4pP.js";import"./index-Cd1Vl8oQ.js";function D(){var e,n;const r=i(),{dataa:t,status:s,error:c}=m(a=>a.contactUs);return p.useEffect(()=>{s==="loading"&&r(f()),console.log("data: ",t)},[s,r]),c?"error":s==="loading"?o.jsx(u,{}):o.jsxs(o.Fragment,{children:[o.jsx(l,{data:t==null?void 0:t.GeneralInfo,contactUsData:t==null?void 0:t.ContactUs}),o.jsx(x,{category:(e=t==null?void 0:t.ContactUs)==null?void 0:e.Category,doctors:(n=t==null?void 0:t.ContactUs)==null?void 0:n.Doctors})]})}export{D as default};