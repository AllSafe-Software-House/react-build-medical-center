import{j as e,f as x,h as f,F as u}from"./index-CbeO4G6W.js";import{R as p,S as g}from"./countup-DTHMuslC.js";import{c as i}from"./utils-DnNDQBbQ.js";function m({className:r,reverse:t,pauseOnHover:n=!1,children:l,vertical:a=!1,repeat:s=4,...o}){return e.jsx("div",{...o,className:i("group flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)]",{"flex-row":!a,"flex-col":a},r),children:Array(s).fill(0).map((j,d)=>e.jsx("div",{className:i("flex shrink-0 justify-around [gap:var(--gap)]",{"animate-marquee flex-row":!a,"animate-marquee-vertical flex-col":a,"group-hover:[animation-play-state:paused]":n,"[animation-direction:reverse]":t}),children:l},d))})}const c=({img:r,name:t,username:n,body:l,stars:a})=>e.jsxs("figure",{className:i("relative w-64 cursor-pointer overflow-hidden rounded-[.375rem] border p-4 shadow-[] bg-white"),children:[e.jsxs("div",{className:"flex flex-row items-center gap-2",children:[e.jsx("img",{className:"rounded-full",width:"32",height:"32",alt:t,src:r}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("figcaption",{className:"text-sm font-medium text-black",children:t}),e.jsx("p",{className:"text-xs font-medium text-black",children:n})]})]}),e.jsx("blockquote",{className:"mt-4 line-clamp-4 text-gray-700",children:l}),e.jsx(p,{initialRating:a,readonly:!0,emptySymbol:e.jsx(x,{className:"text-[#efc019]"}),fullSymbol:e.jsx(f,{className:"text-[#efc019]"}),className:"text-[14px]"})]});function h({children:r,data:t}){const n=t==null?void 0:t.map(s=>({name:s.UserName,username:`@${s.UserName.toLowerCase().replace(" ","")}`,body:s.Feedback,img:s.UserImage,stars:s.Stars})),l=n,a=n;return e.jsxs("div",{className:"relative  flex mt-10 w-full flex-col items-center justify-center overflow-hidden rounded-lg ",children:[e.jsx(m,{className:"[--duration:10s]",children:l==null?void 0:l.map((s,o)=>e.jsx(c,{img:s.img,name:s.name,body:s.body,stars:s.stars},o))}),r,e.jsx(m,{reverse:!0,className:"[--duration:10s]",children:a==null?void 0:a.map((s,o)=>e.jsx(c,{img:s.img,name:s.name,body:s.body,stars:s.stars},o))}),e.jsx("div",{className:"pointer-events-none absolute inset-y-0 left-0 h-full w-1/5 bg-gradient-to-r from-[#f1f1f152]"}),e.jsx("div",{className:"pointer-events-none absolute inset-y-0 right-0 h-full w-1/5 bg-gradient-to-l from-[#f1f1f152]"})]})}function v({title:r,stats:t,data:n,statsCounter:l}){return console.log("statsCounter: ",l),e.jsxs("section",{className:"py-20 bg-gradient-to-r from-[#7760F3] to-[#00E0EA]",children:[e.jsxs("div",{className:"desc text-center ms-10  col-start-1 lg:flex flex-col justify-center",children:[e.jsx("h1",{className:"text-4xl font-extrabold bg-clip-text text-white bg-gradient-to-r from-[#7760F3] to-[#00E0EA]",children:r==null?void 0:r.Title}),e.jsx("p",{className:"my-3 text-white lg:w-1/3 md:w-1/2 w-full mx-auto",children:r==null?void 0:r.Description})]}),e.jsx("div",{className:"grid",children:e.jsx("div",{className:"comments overflow-hidden ",children:e.jsx(h,{data:n,children:t&&e.jsx(u,{direction:"up",children:e.jsx("div",{className:"countersUp  my-20 text-center font-extrabold text-5xl ",children:l.map((a,s)=>e.jsx(g,{title:a.Title,description:a.Description,parentClass:"bg-clip-text text-transparent bg-gradient-to-r from-[#7760F3] to-[#00E0EA]",sim:a.Sim||"+"},s))})})})})})]})}export{v as default};
