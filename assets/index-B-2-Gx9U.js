import{j as e,e as m,f as d,F as x}from"./index-BDuXLi4I.js";import{R as f,S as u}from"./countup-BYvE2JDv.js";import{c as n}from"./utils-DnNDQBbQ.js";function p({className:a,reverse:r,pauseOnHover:l=!1,children:t,vertical:s=!1,repeat:o=4,...i}){return e.jsx("div",{...i,className:n("group flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)]",{"flex-row":!s,"flex-col":s},a),children:Array(o).fill(0).map((j,c)=>e.jsx("div",{className:n("flex shrink-0 justify-around [gap:var(--gap)]",{"animate-marquee flex-row":!s,"animate-marquee-vertical flex-col":s,"group-hover:[animation-play-state:paused]":l,"[animation-direction:reverse]":r}),children:t},c))})}const g=({img:a,name:r,username:l,body:t,stars:s})=>e.jsxs("figure",{className:n("relative w-64 cursor-pointer overflow-hidden rounded-[.375rem] border p-4 shadow-[] bg-white"),children:[e.jsxs("div",{className:"flex flex-row items-center gap-2",children:[e.jsx("img",{className:"rounded-full",width:"32",height:"32",alt:r,src:a}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("figcaption",{className:"text-sm font-medium text-black",children:r}),e.jsx("p",{className:"text-xs font-medium text-black",children:l})]})]}),e.jsx("blockquote",{className:"mt-4 line-clamp-4 text-gray-700",children:t}),e.jsx(f,{initialRating:s,readonly:!0,emptySymbol:e.jsx(m,{className:"text-[#efc019]"}),fullSymbol:e.jsx(d,{className:"text-[#efc019]"}),className:"text-[14px]"})]});function h({children:a,data:r}){const t=r==null?void 0:r.map(s=>({name:s.UserName,username:`@${s.UserName.toLowerCase().replace(" ","")}`,body:s.Feedback,img:s.UserImage,stars:s.Stars}));return e.jsxs("div",{className:"relative  flex mt-10 w-full flex-col items-center justify-center overflow-hidden rounded-lg ",children:[e.jsx(p,{className:"[--duration:10s]",children:t==null?void 0:t.map((s,o)=>e.jsx(g,{img:s.img,name:s.name,body:s.body,stars:s.stars},o))}),a,e.jsx("div",{className:"pointer-events-none absolute inset-y-0 left-0 h-full w-1/5 bg-gradient-to-r from-[#f1f1f152]"}),e.jsx("div",{className:"pointer-events-none absolute inset-y-0 right-0 h-full w-1/5 bg-gradient-to-l from-[#f1f1f152]"})]})}function w({title:a,stats:r,data:l,statsCounter:t}){return console.log("statsCounter: ",t),e.jsxs("section",{className:"py-20 bg-gradient-to-r from-[#7760F3] to-[#00E0EA]",children:[e.jsxs("div",{className:"desc text-center ms-10  col-start-1 lg:flex flex-col justify-center",children:[e.jsx("h1",{className:"text-4xl font-extrabold bg-clip-text text-white bg-gradient-to-r from-[#7760F3] to-[#00E0EA]",children:a==null?void 0:a.Title}),e.jsx("p",{className:"my-3 text-white lg:w-1/3 md:w-1/2 w-full mx-auto",children:a==null?void 0:a.Description})]}),e.jsx("div",{className:"grid",children:e.jsx("div",{className:"comments overflow-hidden ",children:e.jsx(h,{data:l,children:r&&e.jsx(x,{direction:"up",children:e.jsx("div",{className:"countersUp  my-20 text-center font-extrabold text-5xl ",children:t.map((s,o)=>e.jsx(u,{title:s.Title,description:s.Description,parentClass:"bg-clip-text text-transparent bg-gradient-to-r from-[#7760F3] to-[#00E0EA]",sim:s.Sim||"+"},o))})})})})})]})}export{w as default};
