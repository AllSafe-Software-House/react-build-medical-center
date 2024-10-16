import{l as V,j as a,F as z,L as B}from"./index-BWYMSu3u.js";import{g as N,S as Z,a as G}from"./swiper-react-ikYdkhGT.js";function J(w){let{swiper:e,extendParams:x,on:r,emit:s,params:d}=w;e.autoplay={running:!1,paused:!1,timeLeft:0},x({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!1,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let m,T,E=d&&d.autoplay?d.autoplay.delay:3e3,b=d&&d.autoplay?d.autoplay.delay:3e3,n,f=new Date().getTime(),j,h,p,D,S,l,L;function M(t){!e||e.destroyed||!e.wrapperEl||t.target===e.wrapperEl&&(e.wrapperEl.removeEventListener("transitionend",M),!(L||t.detail&&t.detail.bySwiperTouchMove)&&u())}const O=()=>{if(e.destroyed||!e.autoplay.running)return;e.autoplay.paused?j=!0:j&&(b=n,j=!1);const t=e.autoplay.paused?n:f+b-new Date().getTime();e.autoplay.timeLeft=t,s("autoplayTimeLeft",t,t/E),T=requestAnimationFrame(()=>{O()})},k=()=>{let t;return e.virtual&&e.params.virtual.enabled?t=e.slides.filter(i=>i.classList.contains("swiper-slide-active"))[0]:t=e.slides[e.activeIndex],t?parseInt(t.getAttribute("data-swiper-autoplay"),10):void 0},g=t=>{if(e.destroyed||!e.autoplay.running)return;cancelAnimationFrame(T),O();let o=typeof t>"u"?e.params.autoplay.delay:t;E=e.params.autoplay.delay,b=e.params.autoplay.delay;const i=k();!Number.isNaN(i)&&i>0&&typeof t>"u"&&(o=i,E=i,b=i),n=o;const v=e.params.speed,P=()=>{!e||e.destroyed||(e.params.autoplay.reverseDirection?!e.isBeginning||e.params.loop||e.params.rewind?(e.slidePrev(v,!0,!0),s("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(e.slides.length-1,v,!0,!0),s("autoplay")):!e.isEnd||e.params.loop||e.params.rewind?(e.slideNext(v,!0,!0),s("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(0,v,!0,!0),s("autoplay")),e.params.cssMode&&(f=new Date().getTime(),requestAnimationFrame(()=>{g()})))};return o>0?(clearTimeout(m),m=setTimeout(()=>{P()},o)):requestAnimationFrame(()=>{P()}),o},C=()=>{f=new Date().getTime(),e.autoplay.running=!0,g(),s("autoplayStart")},y=()=>{e.autoplay.running=!1,clearTimeout(m),cancelAnimationFrame(T),s("autoplayStop")},c=(t,o)=>{if(e.destroyed||!e.autoplay.running)return;clearTimeout(m),t||(l=!0);const i=()=>{s("autoplayPause"),e.params.autoplay.waitForTransition?e.wrapperEl.addEventListener("transitionend",M):u()};if(e.autoplay.paused=!0,o){S&&(n=e.params.autoplay.delay),S=!1,i();return}n=(n||e.params.autoplay.delay)-(new Date().getTime()-f),!(e.isEnd&&n<0&&!e.params.loop)&&(n<0&&(n=0),i())},u=()=>{e.isEnd&&n<0&&!e.params.loop||e.destroyed||!e.autoplay.running||(f=new Date().getTime(),l?(l=!1,g(n)):g(),e.autoplay.paused=!1,s("autoplayResume"))},I=()=>{if(e.destroyed||!e.autoplay.running)return;const t=N();t.visibilityState==="hidden"&&(l=!0,c(!0)),t.visibilityState==="visible"&&u()},A=t=>{t.pointerType==="mouse"&&(l=!0,L=!0,!(e.animating||e.autoplay.paused)&&c(!0))},F=t=>{t.pointerType==="mouse"&&(L=!1,e.autoplay.paused&&u())},R=()=>{e.params.autoplay.pauseOnMouseEnter&&(e.el.addEventListener("pointerenter",A),e.el.addEventListener("pointerleave",F))},q=()=>{e.el&&typeof e.el!="string"&&(e.el.removeEventListener("pointerenter",A),e.el.removeEventListener("pointerleave",F))},H=()=>{N().addEventListener("visibilitychange",I)},_=()=>{N().removeEventListener("visibilitychange",I)};r("init",()=>{e.params.autoplay.enabled&&(R(),H(),C())}),r("destroy",()=>{q(),_(),e.autoplay.running&&y()}),r("_freeModeStaticRelease",()=>{(p||l)&&u()}),r("_freeModeNoMomentumRelease",()=>{e.params.autoplay.disableOnInteraction?y():c(!0,!0)}),r("beforeTransitionStart",(t,o,i)=>{e.destroyed||!e.autoplay.running||(i||!e.params.autoplay.disableOnInteraction?c(!0,!0):y())}),r("sliderFirstMove",()=>{if(!(e.destroyed||!e.autoplay.running)){if(e.params.autoplay.disableOnInteraction){y();return}h=!0,p=!1,l=!1,D=setTimeout(()=>{l=!0,p=!0,c(!0)},200)}}),r("touchEnd",()=>{if(!(e.destroyed||!e.autoplay.running||!h)){if(clearTimeout(D),clearTimeout(m),e.params.autoplay.disableOnInteraction){p=!1,h=!1;return}p&&e.params.cssMode&&u(),p=!1,h=!1}}),r("slideChange",()=>{e.destroyed||!e.autoplay.running||(S=!0)}),Object.assign(e.autoplay,{start:C,stop:y,pause:c,resume:u})}function U({data:w,video:e}){localStorage.getItem("lang");const{t:x}=V("global");return a.jsxs("section",{className:"relative text-white overflow-hidden",children:[a.jsx("div",{className:"absolute inset-0"}),a.jsx("div",{className:"absolute  border-b border-[#fcf8f6] inset-0 bg-cover bg-center",children:a.jsx("video",{className:"w-full h-full block object-cover",autoPlay:!0,muted:!0,loop:!0,preload:"auto",poster:"https://cdnl.iconscout.com/lottie/premium/preview-watermark/loading-circle-animation-download-in-lottie-json-gif-static-svg-file-formats--pack-user-interface-animations-4719071.mp4",children:a.jsx("source",{src:e,type:"video/mp4"})})}),a.jsx("div",{className:"container py-24 md:py-32 relative z-10",children:a.jsx("div",{className:"mb-12",children:a.jsx(Z,{dir:"ltr",spaceBetween:30,speed:1500,autoplay:{delay:3500,disableOnInteraction:!1},modules:[J],children:w.map(r=>a.jsx(G,{children:a.jsx("div",{className:"flex flex-col md:flex-row text-center lg:text-start items-center justify-between",children:a.jsx("div",{className:"w-full text-center",children:a.jsx(z,{triggerOnce:!0,direction:"up",duration:2e3,children:a.jsxs("div",{className:"w-full mb-12 md:mb-0",children:[a.jsx("h1",{className:"text-5xl md:text-6xl font-extrabold mb-6 leading-tight",children:r==null?void 0:r.Title}),a.jsx("p",{className:"text-xl mb-8 text-gray-300",children:r==null?void 0:r.Description}),a.jsxs("div",{className:"flex flex-col justify-center sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4",children:[a.jsx(B,{to:"/find-doctors",className:"bg-[#7563f3]  border-2 border-transparent hover:border-[#00E0EA] text-white font-semibold px-8 py-3 rounded-full hover:bg-[#00E0EA] transition duration-300 text-center",children:x("custom-text.getStart")}),a.jsx(B,{to:"/about-us",className:"border-2 border-[#7563f3] text-white font-semibold px-8 py-3 rounded-full hover:bg-[#7563f3] hover:text-white transition duration-300 text-center",children:x("custom-text.learnMore")})]})]})})})})},r.id))})})}),a.jsx("div",{className:"absolute bottom-0 left-0 right-0",children:a.jsx("svg",{viewBox:"0 0 1440 120",fill:"#fcf8f6",xmlns:"http://www.w3.org/2000/svg",children:a.jsx("path",{d:"M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z",fill:"#fcf8f6"})})})]})}export{U as default};
