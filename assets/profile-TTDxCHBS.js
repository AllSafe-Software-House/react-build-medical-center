import{a as m,r as o,j as e}from"./index-DDjG_2JC.js";function i(){const t="rounded-full object-cover xl:w-[16rem] xl:h-[16rem] lg:w-[16rem] lg:h-[16rem] md:w-[12rem] md:h-[12rem] sm:w-[10rem] sm:h-[10rem] xs:w-[8rem] xs:h-[8rem] lg:outline outline-2 outline-offset-2 lg:outline-yellow-500 shadow-xl relative xl:bottom-[7rem] lg:bottom-[8rem] md:bottom-[6rem] sm:bottom-[5rem] xs:bottom-[4.3rem]",{data:l}=m(s=>s.profile);return o.useEffect(()=>{window.scrollTo(0,0)},[]),e.jsx("section",{className:"w-full overflow-hidden",children:e.jsxs("div",{className:"w-full mx-auto",children:[e.jsx("div",{className:"hidden lg:block w-full xl:h-[20rem] lg:h-[22rem] md:h-[16rem] sm:h-[10rem] xs:h-[9.5rem]"}),e.jsx("div",{className:"w-full mx-auto flex justify-center ps-5",children:e.jsx("img",{src:l==null?void 0:l.Avatar,alt:"User Profile",className:`lg:${t} lg:rounded-full bg-transparent`})}),e.jsxs("div",{className:"xl:w-[80%] lg:w-[90%] md:w-[94%] sm:w-[96%] xs:w-[92%] mx-auto flex flex-col gap-4 justify-center items-center relative xl:-top-[6rem] lg:-top-[6rem] md:-top-[4rem] sm:-top-[3rem] xs:-top-[2.2rem]",children:[e.jsx("h1",{className:"text-center mt-5 lg:mt-auto text-gray-800 text-4xl font-serif",children:l==null?void 0:l.FullName}),e.jsx("h2",{className:"text-center text-gray-800 text-2xl font-serif",children:"Informations"}),e.jsx("div",{children:e.jsx("div",{className:"grid lg:grid-cols-3 gap-8 mt-4",children:Object.entries(l).map(([s,r])=>r!=null&&s!=="Appointments"&&r!==""?e.jsxs("div",{className:s==="FullPhoneNumber"?"col-span-2":"",children:[e.jsxs("strong",{children:[s,":"]})," ",typeof r=="object"?JSON.stringify(r):r]},s):null)})})]})]})})}export{i as default};
