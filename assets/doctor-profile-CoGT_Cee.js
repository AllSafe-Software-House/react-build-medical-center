import{j as e,T as a,m as j,o as f,p,q as u,u as g,g as N,r as h,s as d,k as y}from"./index-CQfleUZ3.js";import{R as D,P}from"./index-BZBbHzlc.js";import{R}from"./index-zO8ZW3jz.js";function b({data:t,category:o,doctors:s}){return console.log("dasta: ",t),e.jsx("section",{className:"my-12",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"about-us-section rounded-2xl p-8",children:[e.jsx(a,{text:"Doctor",specialText:t==null?void 0:t.Name,className:"mt-0"}),e.jsxs("span",{className:"font-bold text-center block",children:["( ",t==null?void 0:t.Specialities," )"]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-4 mt-8",children:[e.jsx("div",{className:"left img",children:e.jsx("img",{src:t==null?void 0:t.Image,alt:"",className:"m-auto md:m-0"})}),e.jsxs("div",{className:"right flex flex-col items-center md:items-start justify-start",children:[e.jsx("p",{className:"text-center md:text-start",children:t==null?void 0:t.Description}),e.jsxs("div",{className:"rate flex my-1",children:[e.jsx(D,{initialRating:3,readonly:!0,emptySymbol:e.jsx(j,{className:"text-[#efc019]"}),fullSymbol:e.jsx(f,{className:"text-[#efc019]"}),className:"text-2xl"}),e.jsx("span",{className:" ms-3 mt-[3px]",children:"3.5 Out Of 5"})]}),e.jsx(p,{text:"Book An Appointment",category:o,doctors:s})]})]})]})})})}function k(){var c,i,l,n;const{id:t}=u(),o=g(),{data:s,status:r,error:m}=N(x=>x.doctorProfile);return h.useEffect(()=>{r==="loading"&&o(d(t)),console.log("data: ",s)},[r,o]),m?"error":r==="loading"?e.jsx(y,{}):e.jsxs("main",{children:[e.jsx(b,{data:s==null?void 0:s.Doctor,category:(c=s==null?void 0:s.ContactUs)==null?void 0:c.Category,doctors:(i=s==null?void 0:s.ContactUs)==null?void 0:i.Doctors}),e.jsx(P,{data:s==null?void 0:s.Feedback}),e.jsx(R,{category:(l=s==null?void 0:s.ContactUs)==null?void 0:l.Category,doctors:(n=s==null?void 0:s.ContactUs)==null?void 0:n.Doctors})]})}export{k as default};