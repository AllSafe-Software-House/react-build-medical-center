import{j as t,F as c,a0 as i,L as d}from"./index-CbeO4G6W.js";import{C as m}from"./index-Dm5qeKfS.js";function u({showButton:o,data:r}){const s=r==null?void 0:r.map((e,a)=>t.jsx(c,{direction:"up",delay:a*100,children:t.jsx(m,{i:i.servicesIcon,iClass:"flex justify-center",title:e==null?void 0:e.Name,className:"bg-white text-center",p:e==null?void 0:e.Description,isButton:!0,buttonClass:"flex justify-center items-center mt-5 font-bold hover:underline w-fit m-auto"})},e==null?void 0:e.id));return t.jsx("section",{className:"my-20",children:t.jsxs("div",{className:"container",children:[t.jsx("div",{className:"grid lg:grid-cols-3 md:grid-cols-2 gap-4 mt-5 bg-[#e4defd] p-5 rounded-2xl",children:s}),o&&t.jsx(d,{to:"/services",className:"btn-book mx-auto mt-5 relative justify-center hover:shadow-lg transition group text-[var(--light-color)] flex p-2 rounded-[.375rem] text-lg items-center w-fit mt-0 shadow",style:{background:"var(--gradient-color)"},children:"See All"})]})})}export{u as default};
