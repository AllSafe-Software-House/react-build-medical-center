import{r as j,j as i,T as F,F as y,A as L,C as D,D as I,E as T,L as B,H as P}from"./index-D1MC2yBr.js";import{e as O,c as A,m as f,S,a as k}from"./swiper-react-uyqdj15l.js";function q(x,e,h,r){return x.params.createElements&&Object.keys(r).forEach(c=>{if(!h[c]&&h.auto===!0){let p=O(x.el,`.${r[c]}`)[0];p||(p=A("div",r[c]),p.className=r[c],x.el.append(p)),h[c]=p,e[c]=p}}),h}function R(x){let{swiper:e,extendParams:h,on:r,emit:c}=x;h({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),e.navigation={nextEl:null,prevEl:null};function p(a){let s;return a&&typeof a=="string"&&e.isElement&&(s=e.el.querySelector(a),s)?s:(a&&(typeof a=="string"&&(s=[...document.querySelectorAll(a)]),e.params.uniqueNavElements&&typeof a=="string"&&s&&s.length>1&&e.el.querySelectorAll(a).length===1?s=e.el.querySelector(a):s&&s.length===1&&(s=s[0])),a&&!s?a:s)}function g(a,s){const l=e.params.navigation;a=f(a),a.forEach(t=>{t&&(t.classList[s?"add":"remove"](...l.disabledClass.split(" ")),t.tagName==="BUTTON"&&(t.disabled=s),e.params.watchOverflow&&e.enabled&&t.classList[e.isLocked?"add":"remove"](l.lockClass))})}function m(){const{nextEl:a,prevEl:s}=e.navigation;if(e.params.loop){g(s,!1),g(a,!1);return}g(s,e.isBeginning&&!e.params.rewind),g(a,e.isEnd&&!e.params.rewind)}function n(a){a.preventDefault(),!(e.isBeginning&&!e.params.loop&&!e.params.rewind)&&(e.slidePrev(),c("navigationPrev"))}function d(a){a.preventDefault(),!(e.isEnd&&!e.params.loop&&!e.params.rewind)&&(e.slideNext(),c("navigationNext"))}function w(){const a=e.params.navigation;if(e.params.navigation=q(e,e.originalParams.navigation,e.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(a.nextEl||a.prevEl))return;let s=p(a.nextEl),l=p(a.prevEl);Object.assign(e.navigation,{nextEl:s,prevEl:l}),s=f(s),l=f(l);const t=(o,b)=>{o&&o.addEventListener("click",b==="next"?d:n),!e.enabled&&o&&o.classList.add(...a.lockClass.split(" "))};s.forEach(o=>t(o,"next")),l.forEach(o=>t(o,"prev"))}function E(){let{nextEl:a,prevEl:s}=e.navigation;a=f(a),s=f(s);const l=(t,o)=>{t.removeEventListener("click",o==="next"?d:n),t.classList.remove(...e.params.navigation.disabledClass.split(" "))};a.forEach(t=>l(t,"next")),s.forEach(t=>l(t,"prev"))}r("init",()=>{e.params.navigation.enabled===!1?N():(w(),m())}),r("toEdge fromEdge lock unlock",()=>{m()}),r("destroy",()=>{E()}),r("enable disable",()=>{let{nextEl:a,prevEl:s}=e.navigation;if(a=f(a),s=f(s),e.enabled){m();return}[...a,...s].filter(l=>!!l).forEach(l=>l.classList.add(e.params.navigation.lockClass))}),r("click",(a,s)=>{let{nextEl:l,prevEl:t}=e.navigation;l=f(l),t=f(t);const o=s.target;let b=t.includes(o)||l.includes(o);if(e.isElement&&!b){const v=s.path||s.composedPath&&s.composedPath();v&&(b=v.find(u=>l.includes(u)||t.includes(u)))}if(e.params.navigation.hideOnClick&&!b){if(e.pagination&&e.params.pagination&&e.params.pagination.clickable&&(e.pagination.el===o||e.pagination.el.contains(o)))return;let v;l.length?v=l[0].classList.contains(e.params.navigation.hiddenClass):t.length&&(v=t[0].classList.contains(e.params.navigation.hiddenClass)),c(v===!0?"navigationShow":"navigationHide"),[...l,...t].filter(u=>!!u).forEach(u=>u.classList.toggle(e.params.navigation.hiddenClass))}});const C=()=>{e.el.classList.remove(...e.params.navigation.navigationDisabledClass.split(" ")),w(),m()},N=()=>{e.el.classList.add(...e.params.navigation.navigationDisabledClass.split(" ")),E()};Object.assign(e.navigation,{enable:C,disable:N,update:m,init:w,destroy:E})}function $({data:x}){const[e,h]=j.useState(null),[r,c]=j.useState(null),[p,g]=j.useState(0),m=[];return x==null||x.map(n=>{m.push({Image:n.Image,Name:n.Name,Desc:n.Description||`Dr. Alex Johnson is a board-certified physician with
       over 15 years of experience in internal medicine.`})}),j.useEffect(()=>{e&&e.on("slideChange",()=>{const n=e.activeIndex;g(n),r==null||r.slideTo(n)})},[e,r]),j.useEffect(()=>{r&&r.on("click",n=>{const d=n.clickedIndex;g(d),e==null||e.slideTo(d)})},[r,e]),i.jsx("section",{className:"my-20 doctorsTop",children:i.jsx("div",{className:"container",children:i.jsxs("div",{className:"p-0 lg:p-0",children:[i.jsx(F,{text:"Meet Out",specialText:"Top Doctors"}),i.jsx("div",{className:"lg:h-[50%] bg-[#FFFFFF0F] rounded-xl py-5",children:i.jsx(S,{className:"h-full",slidesPerView:1,navigation:!0,onSwiper:h,modules:[R],children:m.map((n,d)=>i.jsx(k,{children:i.jsx("div",{className:"doc?tor rounded-2xl",children:i.jsxs("div",{className:"grid lg:grid-cols-2 mt-10",children:[i.jsx("div",{className:"flex",children:i.jsx("img",{src:n==null?void 0:n.Image,className:"rounded-2xl object-cover w-full",alt:""})}),i.jsx(y,{className:"lg:col-span-1",children:i.jsxs("div",{className:"right flex flex-col items-center lg:items-start h-full justify-between py-10 px-10 text-black",children:[i.jsx("h2",{className:"font-extrabold text-2xl",children:n==null?void 0:n.Name}),i.jsx("p",{className:"my-5",children:n==null?void 0:n.Desc}),i.jsxs("ul",{className:"social flex justify-start mb-5",children:[i.jsx("li",{className:"text-3xl mx-2 text-[#00a4f4]",children:i.jsx("a",{className:"hover:!shadow-none transition",style:{border:"0.835px solid #8c98f8",boxShadow:"2.50435px 3.33913px 0px 0px #8c98f8",padding:6,borderRadius:"50%",display:"block"},href:"#",children:i.jsx(L,{})})}),i.jsx("li",{className:"text-3xl mx-2 text-[#00a4f4]",children:i.jsx("a",{className:"hover:!shadow-none transition",style:{border:"0.835px solid #8c98f8",boxShadow:"2.50435px 3.33913px 0px 0px #8c98f8",padding:6,borderRadius:"50%",display:"block"},href:"#",children:i.jsx(D,{})})}),i.jsx("li",{className:"text-3xl mx-2 text-[#00a4f4]",children:i.jsx("a",{className:" hover:!shadow-none transition",style:{border:"0.835px solid #8c98f8",boxShadow:"2.50435px 3.33913px 0px 0px #8c98f8",padding:6,borderRadius:"50%",display:"block"},href:"#",children:i.jsx(I,{})})}),i.jsx("li",{className:"text-3xl mx-2 text-[#00a4f4]",children:i.jsx("a",{className:"hover:!shadow-none transition",style:{border:"0.835px solid #8c98f8",boxShadow:"2.50435px 3.33913px 0px 0px #8c98f8",padding:6,borderRadius:"50%",display:"block"},href:"#",children:i.jsx(T,{})})})]}),i.jsx("div",{className:"",children:i.jsxs(B,{className:"font-extrabold bg-[var(--primary-color)] hover:!shadow-none text-white px-4 py-2 flex justify-start items-center shadow rounded-[.375rem] transition",style:{boxShadow:"rgb(140, 152, 248) 2.50435px 3.33913px 0px 0px"},children:["Book appointment",i.jsx(P,{className:"ms-2 text-1xl"})]})})]})})]})})},d))})}),i.jsx(S,{breakpoints:{586:{slidesPerView:1,spaceBetween:0},1024:{slidesPerView:3,spaceBetween:10},1279:{slidesPerView:5,spaceBetween:15}},onSwiper:c,className:"mySwiperSmall bg-white !p-5 shadow rounded-full",children:m.map((n,d)=>i.jsx(k,{className:"lg:!w-[100px] transition-all lg:block !flex !justify-center",children:i.jsx(y,{direction:"up",delay:d*100,children:i.jsx("div",{className:`grayscale hover:grayscale-0 hover:border-2 hover:border-[var(--primary-color)] rounded-full overflow-hidden cursor-pointer ${d===p?"border-2 border-[var(--primary-color)] !grayscale-0":"border-2"}`,children:i.jsx("img",{src:n==null?void 0:n.Image,className:"object-cover w-full h-full",alt:`Thumbnail ${d+1}`})})})},d))})]})})})}export{$ as S};
