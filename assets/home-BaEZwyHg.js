import{j as t,i as $,L as M,F as B,T as G,M as Y,G as H,R as K,a as Z,b as J,u as Q,c as X,r as ee,g as te,d as ae}from"./index-AmISu7b8.js";import{g as L,S as se,a as re}from"./swiper-react-CBOd-WEY.js";import{M as le,a as ie}from"./index-DL8EkYkV.js";import{c as w,P as ne}from"./index-DKMlyans.js";import{O as oe}from"./index-DFkwXByY.js";import{S as ce}from"./index-DZWNOmN5.js";import"./index-1Usr4O_1.js";function de(a){let{swiper:e,extendParams:r,on:n,emit:l,params:o}=a;e.autoplay={running:!1,paused:!1,timeLeft:0},r({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!1,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let d,x,f=o&&o.autoplay?o.autoplay.delay:3e3,h=o&&o.autoplay?o.autoplay.delay:3e3,i,g=new Date().getTime(),E,N,y,C,S,m,T;function k(s){!e||e.destroyed||!e.wrapperEl||s.target===e.wrapperEl&&(e.wrapperEl.removeEventListener("transitionend",k),!(T||s.detail&&s.detail.bySwiperTouchMove)&&p())}const F=()=>{if(e.destroyed||!e.autoplay.running)return;e.autoplay.paused?E=!0:E&&(h=i,E=!1);const s=e.autoplay.paused?i:g+h-new Date().getTime();e.autoplay.timeLeft=s,l("autoplayTimeLeft",s,s/f),x=requestAnimationFrame(()=>{F()})},_=()=>{let s;return e.virtual&&e.params.virtual.enabled?s=e.slides.filter(c=>c.classList.contains("swiper-slide-active"))[0]:s=e.slides[e.activeIndex],s?parseInt(s.getAttribute("data-swiper-autoplay"),10):void 0},D=s=>{if(e.destroyed||!e.autoplay.running)return;cancelAnimationFrame(x),F();let u=typeof s>"u"?e.params.autoplay.delay:s;f=e.params.autoplay.delay,h=e.params.autoplay.delay;const c=_();!Number.isNaN(c)&&c>0&&typeof s>"u"&&(u=c,f=c,h=c),i=u;const j=e.params.speed,V=()=>{!e||e.destroyed||(e.params.autoplay.reverseDirection?!e.isBeginning||e.params.loop||e.params.rewind?(e.slidePrev(j,!0,!0),l("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(e.slides.length-1,j,!0,!0),l("autoplay")):!e.isEnd||e.params.loop||e.params.rewind?(e.slideNext(j,!0,!0),l("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(0,j,!0,!0),l("autoplay")),e.params.cssMode&&(g=new Date().getTime(),requestAnimationFrame(()=>{D()})))};return u>0?(clearTimeout(d),d=setTimeout(()=>{V()},u)):requestAnimationFrame(()=>{V()}),u},z=()=>{g=new Date().getTime(),e.autoplay.running=!0,D(),l("autoplayStart")},b=()=>{e.autoplay.running=!1,clearTimeout(d),cancelAnimationFrame(x),l("autoplayStop")},v=(s,u)=>{if(e.destroyed||!e.autoplay.running)return;clearTimeout(d),s||(m=!0);const c=()=>{l("autoplayPause"),e.params.autoplay.waitForTransition?e.wrapperEl.addEventListener("transitionend",k):p()};if(e.autoplay.paused=!0,u){S&&(i=e.params.autoplay.delay),S=!1,c();return}i=(i||e.params.autoplay.delay)-(new Date().getTime()-g),!(e.isEnd&&i<0&&!e.params.loop)&&(i<0&&(i=0),c())},p=()=>{e.isEnd&&i<0&&!e.params.loop||e.destroyed||!e.autoplay.running||(g=new Date().getTime(),m?(m=!1,D(i)):D(),e.autoplay.paused=!1,l("autoplayResume"))},A=()=>{if(e.destroyed||!e.autoplay.running)return;const s=L();s.visibilityState==="hidden"&&(m=!0,v(!0)),s.visibilityState==="visible"&&p()},I=s=>{s.pointerType==="mouse"&&(m=!0,T=!0,!(e.animating||e.autoplay.paused)&&v(!0))},O=s=>{s.pointerType==="mouse"&&(T=!1,e.autoplay.paused&&p())},R=()=>{e.params.autoplay.pauseOnMouseEnter&&(e.el.addEventListener("pointerenter",I),e.el.addEventListener("pointerleave",O))},U=()=>{e.el&&typeof e.el!="string"&&(e.el.removeEventListener("pointerenter",I),e.el.removeEventListener("pointerleave",O))},q=()=>{L().addEventListener("visibilitychange",A)},W=()=>{L().removeEventListener("visibilitychange",A)};n("init",()=>{e.params.autoplay.enabled&&(R(),q(),z())}),n("destroy",()=>{U(),W(),e.autoplay.running&&b()}),n("_freeModeStaticRelease",()=>{(y||m)&&p()}),n("_freeModeNoMomentumRelease",()=>{e.params.autoplay.disableOnInteraction?b():v(!0,!0)}),n("beforeTransitionStart",(s,u,c)=>{e.destroyed||!e.autoplay.running||(c||!e.params.autoplay.disableOnInteraction?v(!0,!0):b())}),n("sliderFirstMove",()=>{if(!(e.destroyed||!e.autoplay.running)){if(e.params.autoplay.disableOnInteraction){b();return}N=!0,y=!1,m=!1,C=setTimeout(()=>{m=!0,y=!0,v(!0)},200)}}),n("touchEnd",()=>{if(!(e.destroyed||!e.autoplay.running||!N)){if(clearTimeout(C),clearTimeout(d),e.params.autoplay.disableOnInteraction){y=!1,N=!1;return}y&&e.params.cssMode&&p(),y=!1,N=!1}}),n("slideChange",()=>{e.destroyed||!e.autoplay.running||(S=!0)}),Object.assign(e.autoplay,{start:z,stop:b,pause:v,resume:p})}function ue({data:a}){return t.jsxs("section",{className:"relative text-white overflow-hidden",children:[t.jsx("div",{className:"absolute inset-0 opacity-50"}),t.jsx("div",{className:"absolute border-b border-[#fcf8f6] inset-0 bg-cover bg-center",style:{backgroundImage:`url('${$.sliderImg}')`}}),t.jsx("div",{className:"container py-24 md:py-32 relative z-10",children:t.jsx("div",{className:"mb-12",children:t.jsx(se,{loop:!0,spaceBetween:30,autoplay:{delay:2500,disableOnInteraction:!1},modules:[de],children:a.map(e=>t.jsx(re,{children:t.jsxs("div",{className:"flex flex-col md:flex-row text-center lg:text-start items-center justify-between",children:[t.jsx("div",{className:"lg:w-1/2",children:t.jsxs("div",{className:"w-full mb-12 md:mb-0",children:[t.jsx("h1",{className:"text-5xl md:text-6xl font-extrabold mb-6 leading-tight",children:e==null?void 0:e.Title}),t.jsx("p",{className:"text-xl mb-8 text-gray-300",children:e==null?void 0:e.Description}),t.jsxs("div",{className:"flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4",children:[t.jsx(M,{to:"/find-doctors",className:"bg-[#7563f3] border-2 border-transparent hover:border-[#00E0EA] text-white font-semibold px-8 py-3 rounded-full hover:bg-[#00E0EA] transition duration-300 text-center",children:"Get Started"}),t.jsx(M,{to:"/about-us",className:"border-2 border-[#7563f3] text-white font-semibold px-8 py-3 rounded-full hover:bg-[#7563f3] hover:text-white transition duration-300 text-center",children:"Learn More"})]})]})}),t.jsxs("div",{className:"bg-red lg:w-1/2 bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-8 shadow-2xl",children:[t.jsx("h2",{className:"text-2xl font-semibold mb-6",children:"Why Medical Center ?"}),t.jsxs("ul",{className:"space-y-4",children:[t.jsxs("li",{className:"flex items-center",children:[t.jsx("svg",{className:"w-6 h-6 mr-3 text-yellow-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 10V3L4 14h7v7l9-11h-7z"})}),t.jsx("span",{children:"Experienced Professionals"})]}),t.jsxs("li",{className:"flex items-center",children:[t.jsx("svg",{className:"w-6 h-6 mr-3 text-green-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"})}),t.jsx("span",{children:"Comprehensive Care"})]}),t.jsxs("li",{className:"flex items-center",children:[t.jsx("svg",{className:"w-6 h-6 mr-3 text-purple-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"})}),t.jsx("span",{children:"State-of-the-Art Facilities"})]})]})]})]})},e.id))})})}),t.jsx("div",{className:"absolute bottom-0 left-0 right-0",children:t.jsx("svg",{viewBox:"0 0 1440 120",fill:"#fcf8f6",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z",fill:"#fcf8f6"})})})]})}function me({data:a}){return t.jsx("section",{className:"my-12",id:a==null?void 0:a.id,children:t.jsx("div",{className:"container",children:t.jsxs("div",{className:"about-us-section border border-[var(--primary-color)] rounded-2xl p-8",children:[t.jsx(B,{children:t.jsx(G,{specialText:a==null?void 0:a.Title,className:"!mt-0"})}),t.jsxs("div",{className:"grid md:grid-cols-2 gap-1 mt-8",children:[t.jsx(B,{direction:"up",children:t.jsx("div",{className:"left img",children:t.jsx("img",{src:a==null?void 0:a.Image,width:450,alt:""})})}),t.jsx(B,{direction:"up",children:t.jsxs("div",{className:"right flex flex-col justify-between",children:[t.jsx("p",{children:a==null?void 0:a.Description}),t.jsx(Y,{text:"Learn More About Us",className:"mt-6 px-10 py-4",icon:t.jsx(le,{className:"text-2xl group-hover:ms-3  transition-all"}),to:"/about-us"})]})})]})]})})})}function pe(a){return H({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4zm5.402 9.746c.625 0 1.184-.484 1.184-1.18 0-.832-.527-1.23-1.16-1.23-.586 0-1.168.387-1.168 1.21 0 .817.543 1.2 1.144 1.2"},child:[]},{tag:"path",attr:{d:"M16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2m-6.664-1.21c-1.11 0-1.656-.767-1.703-1.407h.683c.043.37.387.82 1.051.82.844 0 1.301-.848 1.305-2.164h-.027c-.153.414-.637.79-1.383.79-.852 0-1.676-.61-1.676-1.77 0-1.137.871-1.809 1.797-1.809 1.172 0 1.953.734 1.953 2.668 0 1.805-.742 2.871-2 2.871zm-2.89-5.435v5.332H5.77V8.079h-.012c-.29.156-.883.52-1.258.777V8.16a13 13 0 0 1 1.313-.805h.632z"},child:[]}]})(a)}const P=K.forwardRef(({shimmerColor:a="#2be4ec",shimmerSize:e="0.07em",shimmerDuration:r="2s",borderRadius:n=".375rem",background:l="#7563f3",className:o,children:d,to:x,...f},h)=>{const i=t.jsxs(t.Fragment,{children:[t.jsx("div",{className:w("-z-30 blur-[2px]","absolute inset-0 overflow-visible [container-type:size]"),children:t.jsx("div",{className:"absolute inset-0 h-[100cqh] animate-slide [aspect-ratio:1] [border-radius:0] [mask:none]",children:t.jsx("div",{className:"animate-spin-around absolute inset-[-100%] w-auto rotate-0 [background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,var(--shimmer-color)_var(--spread),transparent_var(--spread))] [translate:0_0]"})})}),d,t.jsx("div",{className:w("insert-0 absolute h-full w-full","rounded-2xl px-4 py-1.5 text-sm font-medium","transform-gpu transition-all duration-300 ease-in-out")}),t.jsx("div",{className:w("absolute -z-20 [background:var(--bg)] [border-radius:var(--radius)] [inset:var(--cut)]")})]});return x?t.jsx(M,{style:{"--spread":"90deg","--shimmer-color":a,"--radius":n,"--speed":r,"--cut":e,"--bg":l},to:x,className:w("relative z-0 flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap px-6 py-3 text-white [background:var(--bg)] [border-radius:var(--radius)]","transform-gpu transition-transform duration-300 ease-in-out active:translate-y-[1px]",o),...f,children:i}):t.jsx("button",{style:{"--spread":"90deg","--shimmer-color":a,"--radius":n,"--speed":r,"--cut":e,"--bg":l},className:w("relative z-0 flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap px-6 py-3 text-white [background:var(--bg)] [border-radius:var(--radius)]","transform-gpu transition-transform duration-300 ease-in-out active:translate-y-[1px]",o),ref:h,...f,children:i})});P.displayName="ShimmerButton";const xe=P;function fe({text:a,to:e,className:r}){return t.jsx("div",{className:`${r} z-10 flex items-center justify-center`,children:t.jsx(xe,{to:e,className:`${r} hover:shadow-lg transition bg-red-50`,children:t.jsx("span",{className:"whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white lg:text-lg",children:a})})})}function he(a){return H({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M10 3H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM9 9H5V5h4v4zm11-6h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm-1 6h-4V5h4v4zm-9 4H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1zm-1 6H5v-4h4v4zm8-6c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4zm0 6c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2z"},child:[]}]})(a)}function ye({category:a,doctors:e}){return t.jsx("section",{className:"my-12",children:t.jsx("div",{className:"container",children:t.jsxs("div",{className:"booking-section border border-[var(--primary-color)] rounded-2xl p-8",children:[t.jsx("h4",{className:"text-2xl font-bold text-[var(--primary-color)]",children:"Easily book an appointment in 3 simple steps."}),t.jsxs("form",{action:"",className:"form-booking mt-4 grid md:grid-cols-2 lg:grid-cols-3 gap-9",children:[t.jsxs("div",{className:"form-group flex flex-col w-full",children:[t.jsxs("div",{className:"label flex items-center text-[17px] mb-2 text-[#888888]",children:[t.jsx(ie,{className:"me-2 text-2xl text-[#7760F3]"}),t.jsx("label",{htmlFor:"name",children:"Email Adress"})]}),t.jsx("input",{className:" placeholder:text-[#BDBDBD] rounded-lg border-[#BDBDBD]",type:"text",id:"name",placeholder:"Enter Your Email Address"})]}),t.jsxs("div",{className:"form-group flex flex-col w-full",children:[t.jsxs("div",{className:"label flex items-center text-[17px] mb-2 text-[#888888]",children:[t.jsx(Z,{className:"me-2 text-2xl text-[#7760F3]"}),t.jsx("label",{htmlFor:"name",children:"Contact Number"})]}),t.jsx("input",{className:" placeholder:text-[#BDBDBD] rounded-lg border-[#BDBDBD]",type:"text",id:"name",placeholder:"Enter Your Contact Number"})]}),t.jsxs("div",{className:"form-group flex flex-col w-full",children:[t.jsxs("div",{className:"label flex items-center text-[17px] mb-2 text-[#888888]",children:[t.jsx(pe,{className:"me-2 text-2xl text-[#7760F3]"}),t.jsx("label",{htmlFor:"name",children:"Date of Appointment"})]}),t.jsx("input",{className:" placeholder:text-[#BDBDBD] rounded-lg border-[#BDBDBD]",type:"text",id:"name",placeholder:"Enter Your Date of Appointment"})]}),t.jsxs("div",{className:"form-group flex flex-col w-full mb-5",children:[t.jsxs("div",{className:"label flex items-center text-[17px] mb-2 text-[#888888]",children:[t.jsx(he,{className:"me-2 text-2xl text-[#7760F3]"}),t.jsx("label",{htmlFor:"name",children:"Select Category"})]}),t.jsxs("select",{name:"category",className:"placeholder:text-[#BDBDBD] rounded-lg border-[#BDBDBD] py-2 px-3",id:"",children:[t.jsx("option",{value:"",className:"text-[#BDBDBD] ",selected:!0,disabled:!0,children:"Select Category"}),a.map(r=>t.jsx("option",{value:r.ID,children:r.Name},r.ID))]})]}),t.jsxs("div",{className:"form-group flex flex-col w-full mb-5",children:[t.jsxs("div",{className:"label flex items-center text-[17px] mb-2 text-[#888888]",children:[t.jsx(J,{className:"me-2 text-2xl text-[#7760F3]"}),t.jsx("label",{htmlFor:"name",children:"Select Doctor"})]}),t.jsxs("select",{name:"doctor",className:"placeholder:text-[#BDBDBD] rounded-lg border-[#BDBDBD] py-2 px-3",id:"",children:[t.jsx("option",{value:"",selected:!0,disabled:!0,children:"Select Doctor"}),e.map(r=>t.jsx("option",{value:r.ID,children:r.Name},r.ID))]})]}),t.jsx("div",{className:"form-group w-full flex justify-center items-end mb-5",children:t.jsx(fe,{className:"w-full",text:"Book Now"})})]})]})})})}function Be(){var l,o;const a=Q(),{data:e,status:r,error:n}=X(d=>d.home);return ee.useEffect(()=>{r==="loading"&&a(te()),console.log("data: ",e)},[r,a]),n?"error":r==="loading"?t.jsx(ae,{}):t.jsxs("main",{className:"main mb-5",children:[t.jsx(ue,{data:e==null?void 0:e.HeroSection}),t.jsx(B,{children:t.jsx(ye,{category:(l=e==null?void 0:e.ContactUs)==null?void 0:l.Category,doctors:(o=e==null?void 0:e.ContactUs)==null?void 0:o.Doctors})}),t.jsx(oe,{data:e==null?void 0:e.Services,num:3,showButton:!0}),t.jsx(me,{data:e==null?void 0:e.Aboutus}),t.jsx(ce,{data:e==null?void 0:e.Doctors}),t.jsx(ne,{stats:!1,data:e.Feedback})]})}export{Be as default};