import{R as d,Q as ct,u as dt,a as ut,r as P,x as _,j as v,d as mt,T as ft,S as pt,U as wt,V as vt,D as U,W as gt}from"./index-BDuXLi4I.js";function Lt(){return d.createElement("svg",{"aria-hidden":"true","data-rmiz-btn-unzoom-icon":!0,fill:"currentColor",focusable:"false",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg"},d.createElement("path",{d:"M 14.144531 1.148438 L 9 6.292969 L 9 3 L 8 3 L 8 8 L 13 8 L 13 7 L 9.707031 7 L 14.855469 1.851563 Z M 8 8 L 3 8 L 3 9 L 6.292969 9 L 1.148438 14.144531 L 1.851563 14.855469 L 7 9.707031 L 7 13 L 8 13 Z"}))}function yt(){return d.createElement("svg",{"aria-hidden":"true","data-rmiz-btn-zoom-icon":!0,fill:"currentColor",focusable:"false",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg"},d.createElement("path",{d:"M 9 1 L 9 2 L 12.292969 2 L 2 12.292969 L 2 9 L 1 9 L 1 14 L 6 14 L 6 13 L 2.707031 13 L 13 2.707031 L 13 6 L 14 6 L 14 1 Z"}))}const M=(n,t)=>{var e,s;return n===((s=(e=t==null?void 0:t.tagName)==null?void 0:e.toUpperCase)==null?void 0:s.call(e))},j=n=>M("DIV",n)||M("SPAN",n),T=n=>M("IMG",n),q=n=>n.complete&&n.naturalHeight!==0,x=n=>M("SVG",n),Q=({height:n,offset:t,width:e})=>Math.min((window.innerWidth-t*2)/e,(window.innerHeight-t*2)/n),Et=({containerHeight:n,containerWidth:t,offset:e,targetHeight:s,targetWidth:o})=>{const i=Q({height:s,offset:e,width:o}),l=o>s?o/t:s/n;return i>1?l:i*l},S=({containerHeight:n,containerWidth:t,hasScalableSrc:e,offset:s,targetHeight:o,targetWidth:i})=>!n||!t?1:!e&&o&&i?Et({containerHeight:n,containerWidth:t,offset:s,targetHeight:o,targetWidth:i}):Q({height:n,offset:s,width:t}),Dt=/url(?:\(['"]?)(.*?)(?:['"]?\))/,K=n=>{var t;if(n){if(T(n))return n.currentSrc;if(j(n)){const e=window.getComputedStyle(n).backgroundImage;if(e)return(t=Dt.exec(e))==null?void 0:t[1]}}},St=n=>{if(n)return T(n)?n.alt??void 0:n.getAttribute("aria-label")??void 0},bt=({containerHeight:n,containerLeft:t,containerTop:e,containerWidth:s,hasScalableSrc:o,offset:i,targetHeight:l,targetWidth:h})=>{const r=S({containerHeight:n,containerWidth:s,hasScalableSrc:o,offset:i,targetHeight:l,targetWidth:h});return{top:e,left:t,width:s*r,height:n*r,transform:`translate(0,0) scale(${1/r})`}},y=({position:n,relativeNum:t})=>{const e=parseFloat(n);return n.endsWith("%")?t*e/100:e},Ct=({containerHeight:n,containerLeft:t,containerTop:e,containerWidth:s,hasScalableSrc:o,objectFit:i,objectPosition:l,offset:h,targetHeight:r,targetWidth:a})=>{if(i==="scale-down"&&(a<=s&&r<=n?i="none":i="contain"),i==="cover"||i==="contain"){const u=s/a,m=n/r,c=i==="cover"?Math.max(u,m):Math.min(u,m),[p="50%",w="50%"]=l.split(" "),L=y({position:p,relativeNum:s-a*c}),f=y({position:w,relativeNum:n-r*c}),g=S({containerHeight:r*c,containerWidth:a*c,hasScalableSrc:o,offset:h,targetHeight:r,targetWidth:a});return{top:e+f,left:t+L,width:a*c*g,height:r*c*g,transform:`translate(0,0) scale(${1/g})`}}else if(i==="none"){const[u="50%",m="50%"]=l.split(" "),c=y({position:u,relativeNum:s-a}),p=y({position:m,relativeNum:n-r}),w=S({containerHeight:r,containerWidth:a,hasScalableSrc:o,offset:h,targetHeight:r,targetWidth:a});return{top:e+p,left:t+c,width:a*w,height:r*w,transform:`translate(0,0) scale(${1/w})`}}else if(i==="fill"){const u=s/a,m=n/r,c=Math.max(u,m),p=S({containerHeight:r*c,containerWidth:a*c,hasScalableSrc:o,offset:h,targetHeight:r,targetWidth:a});return{width:s*p,height:n*p,transform:`translate(0,0) scale(${1/p})`}}else return{}},Nt=({backgroundPosition:n,backgroundSize:t,containerHeight:e,containerLeft:s,containerTop:o,containerWidth:i,hasScalableSrc:l,offset:h,targetHeight:r,targetWidth:a})=>{if(t==="cover"||t==="contain"){const u=i/a,m=e/r,c=t==="cover"?Math.max(u,m):Math.min(u,m),[p="50%",w="50%"]=n.split(" "),L=y({position:p,relativeNum:i-a*c}),f=y({position:w,relativeNum:e-r*c}),g=S({containerHeight:r*c,containerWidth:a*c,hasScalableSrc:l,offset:h,targetHeight:r,targetWidth:a});return{top:o+f,left:s+L,width:a*c*g,height:r*c*g,transform:`translate(0,0) scale(${1/g})`}}else if(t==="auto"){const[u="50%",m="50%"]=n.split(" "),c=y({position:u,relativeNum:i-a}),p=y({position:m,relativeNum:e-r}),w=S({containerHeight:r,containerWidth:a,hasScalableSrc:l,offset:h,targetHeight:r,targetWidth:a});return{top:o+p,left:s+c,width:a*w,height:r*w,transform:`translate(0,0) scale(${1/w})`}}else{const[u="50%",m="50%"]=t.split(" "),c=y({position:u,relativeNum:i}),p=y({position:m,relativeNum:e}),w=c/a,L=p/r,f=Math.min(w,L),[g="50%",C="50%"]=n.split(" "),N=y({position:g,relativeNum:i-a*f}),b=y({position:C,relativeNum:e-r*f}),E=S({containerHeight:r*f,containerWidth:a*f,hasScalableSrc:l,offset:h,targetHeight:r,targetWidth:a});return{top:o+b,left:s+N,width:a*f*E,height:r*f*E,transform:`translate(0,0) scale(${1/E})`}}},It=/\.svg$/i,zt=({hasZoomImg:n,imgSrc:t,isSvg:e,isZoomed:s,loadedImgEl:o,offset:i,shouldRefresh:l,targetEl:h})=>{var g;const r=e||((g=t==null?void 0:t.slice)==null?void 0:g.call(t,0,18))==="data:image/svg+xml"||n||!!(t&&It.test(t)),a=h.getBoundingClientRect(),u=window.getComputedStyle(h),m=o!=null&&j(h),c=o!=null&&!m,p=bt({containerHeight:a.height,containerLeft:a.left,containerTop:a.top,containerWidth:a.width,hasScalableSrc:r,offset:i,targetHeight:(o==null?void 0:o.naturalHeight)||a.height,targetWidth:(o==null?void 0:o.naturalWidth)||a.width}),w=c?Ct({containerHeight:a.height,containerLeft:a.left,containerTop:a.top,containerWidth:a.width,hasScalableSrc:r,objectFit:u.objectFit,objectPosition:u.objectPosition,offset:i,targetHeight:(o==null?void 0:o.naturalHeight)||a.height,targetWidth:(o==null?void 0:o.naturalWidth)||a.width}):void 0,L=m?Nt({backgroundPosition:u.backgroundPosition,backgroundSize:u.backgroundSize,containerHeight:a.height,containerLeft:a.left,containerTop:a.top,containerWidth:a.width,hasScalableSrc:r,offset:i,targetHeight:(o==null?void 0:o.naturalHeight)||a.height,targetWidth:(o==null?void 0:o.naturalWidth)||a.width}):void 0,f=Object.assign({},p,w,L);if(s){const C=window.innerWidth/2,N=window.innerHeight/2,b=parseFloat(String(f.left||0))+parseFloat(String(f.width||0))/2,E=parseFloat(String(f.top||0))+parseFloat(String(f.height||0))/2,z=C-b,A=N-E;l&&(f.transitionDuration="0.01ms"),f.transform=`translate(${z}px,${A}px) scale(1)`}return f},Z=n=>{if(!n)return{};if(x(n)){const t=n.parentElement,e=n.getBoundingClientRect();if(t){const s=t.getBoundingClientRect();return{height:e.height,left:s.left-e.left,top:s.top-e.top,width:e.width}}else return{height:e.height,left:e.left,width:e.width,top:e.top}}else return{height:n.offsetHeight,left:n.offsetLeft,width:n.offsetWidth,top:n.offsetTop}},xt=n=>{const t="-zoom",e=["clip-path","fill","mask","marker-start","marker-mid","marker-end"],s=new Map;if(n.hasAttribute("id")){const o=n.id,i=o+t;s.set(o,i),n.id=i}n.querySelectorAll("[id]").forEach(o=>{const i=o.id,l=i+t;s.set(i,l),o.id=l}),s.forEach((o,i)=>{const l=`url(#${i})`,h=`url(#${o})`,r=e.map(a=>`[${a}="${l}"]`).join(", ");n.querySelectorAll(r).forEach(a=>{e.forEach(u=>{a.getAttribute(u)===l&&a.setAttribute(u,h)})})}),n.querySelectorAll("style").forEach(o=>{s.forEach((i,l)=>{o.textContent&&(o.textContent=o.textContent.replaceAll(`#${l}`,`#${i}`))})})},Mt=["img","svg",'[role="img"]',"[data-zoom]"].map(n=>`${n}:not([aria-hidden="true"])`).join(","),V={overflow:"",width:""};function Tt(n){return d.createElement(J,{...n})}class J extends d.Component{constructor(){super(...arguments),this.state={id:"",isZoomImgLoaded:!1,loadedImgEl:void 0,modalState:"UNLOADED",shouldRefresh:!1,styleGhost:{}},this.refContent=d.createRef(),this.refDialog=d.createRef(),this.refModalContent=d.createRef(),this.refModalImg=d.createRef(),this.refWrap=d.createRef(),this.imgEl=null,this.isScaling=!1,this.prevBodyAttrs=V,this.styleModalImg={},this.handleModalStateChange=t=>{var s,o,i,l;const{modalState:e}=this.state;t!=="LOADING"&&e==="LOADING"?(this.loadZoomImg(),window.addEventListener("resize",this.handleResize,{passive:!0}),window.addEventListener("touchstart",this.handleTouchStart,{passive:!0}),window.addEventListener("touchmove",this.handleTouchMove,{passive:!0}),window.addEventListener("touchend",this.handleTouchEnd,{passive:!0}),window.addEventListener("touchcancel",this.handleTouchCancel,{passive:!0}),document.addEventListener("keydown",this.handleKeyDown,!0)):t!=="LOADED"&&e==="LOADED"?window.addEventListener("wheel",this.handleWheel,{passive:!0}):t!=="UNLOADING"&&e==="UNLOADING"?(this.ensureImgTransitionEnd(),window.removeEventListener("wheel",this.handleWheel),window.removeEventListener("touchstart",this.handleTouchStart),window.removeEventListener("touchmove",this.handleTouchMove),window.removeEventListener("touchend",this.handleTouchEnd),window.removeEventListener("touchcancel",this.handleTouchCancel),document.removeEventListener("keydown",this.handleKeyDown,!0)):t!=="UNLOADED"&&e==="UNLOADED"&&(this.bodyScrollEnable(),window.removeEventListener("resize",this.handleResize),(o=(s=this.refModalImg.current)==null?void 0:s.removeEventListener)==null||o.call(s,"transitionend",this.handleImgTransitionEnd),(l=(i=this.refDialog.current)==null?void 0:i.close)==null||l.call(i))},this.getDialogContainer=()=>{let t=document.querySelector("[data-rmiz-portal]");return t==null&&(t=document.createElement("div"),t.setAttribute("data-rmiz-portal",""),document.body.appendChild(t)),t},this.setId=()=>{const t=()=>Math.random().toString(16).slice(-4);this.setState({id:t()+t()+t()})},this.setAndTrackImg=()=>{var e,s;const t=this.refContent.current;t&&(this.imgEl=t.querySelector(Mt),this.imgEl?((s=(e=this.contentNotFoundChangeObserver)==null?void 0:e.disconnect)==null||s.call(e),this.imgEl.addEventListener("load",this.handleImgLoad),this.imgEl.addEventListener("click",this.handleZoom),this.state.loadedImgEl||this.handleImgLoad(),this.imgElResizeObserver=new ResizeObserver(o=>{const i=o[0];i!=null&&i.target&&(this.imgEl=i.target,this.setState({styleGhost:Z(this.imgEl)}))}),this.imgElResizeObserver.observe(this.imgEl),this.contentChangeObserver||(this.contentChangeObserver=new MutationObserver(()=>{this.setState({styleGhost:Z(this.imgEl)})}),this.contentChangeObserver.observe(t,{attributes:!0,childList:!0,subtree:!0}))):this.contentNotFoundChangeObserver||(this.contentNotFoundChangeObserver=new MutationObserver(this.setAndTrackImg),this.contentNotFoundChangeObserver.observe(t,{childList:!0,subtree:!0})))},this.handleIfZoomChanged=t=>{const{isZoomed:e}=this.props;!t&&e?this.zoom():t&&!e&&this.unzoom()},this.handleImgLoad=()=>{const t=K(this.imgEl);if(!t)return;const e=new Image;T(this.imgEl)&&(e.sizes=this.imgEl.sizes,e.srcset=this.imgEl.srcset),e.src=t;const s=()=>{this.setState({loadedImgEl:e,styleGhost:Z(this.imgEl)})};e.decode().then(s).catch(()=>{if(q(e)){s();return}e.onload=s})},this.handleZoom=()=>{var t,e;this.hasImage()&&((e=(t=this.props).onZoomChange)==null||e.call(t,!0))},this.handleUnzoom=()=>{var t,e;(e=(t=this.props).onZoomChange)==null||e.call(t,!1)},this.handleDialogCancel=t=>{t.preventDefault()},this.handleDialogClick=t=>{(t.target===this.refModalContent.current||t.target===this.refModalImg.current)&&this.handleUnzoom()},this.handleKeyDown=t=>{(t.key==="Escape"||t.keyCode===27)&&(t.preventDefault(),t.stopPropagation(),this.handleUnzoom())},this.handleWheel=t=>{t.ctrlKey||(t.stopPropagation(),queueMicrotask(()=>{this.handleUnzoom()}))},this.handleTouchStart=t=>{if(t.touches.length>1){this.isScaling=!0;return}t.changedTouches.length===1&&t.changedTouches[0]&&(this.touchYStart=t.changedTouches[0].screenY)},this.handleTouchMove=t=>{var s;const e=((s=window.visualViewport)==null?void 0:s.scale)??1;if(this.props.canSwipeToUnzoom&&!this.isScaling&&e<=1&&this.touchYStart!=null&&t.changedTouches[0]){this.touchYEnd=t.changedTouches[0].screenY;const o=Math.max(this.touchYStart,this.touchYEnd),i=Math.min(this.touchYStart,this.touchYEnd);Math.abs(o-i)>this.props.swipeToUnzoomThreshold&&(this.touchYStart=void 0,this.touchYEnd=void 0,this.handleUnzoom())}},this.handleTouchEnd=()=>{this.isScaling=!1,this.touchYStart=void 0,this.touchYEnd=void 0},this.handleTouchCancel=()=>{this.isScaling=!1,this.touchYStart=void 0,this.touchYEnd=void 0},this.handleResize=()=>{this.setState({shouldRefresh:!0})},this.hasImage=()=>this.imgEl&&(this.state.loadedImgEl||x(this.imgEl))&&window.getComputedStyle(this.imgEl).display!=="none",this.zoom=()=>{var t,e,s,o;this.bodyScrollDisable(),(e=(t=this.refDialog.current)==null?void 0:t.showModal)==null||e.call(t),(o=(s=this.refModalImg.current)==null?void 0:s.addEventListener)==null||o.call(s,"transitionend",this.handleImgTransitionEnd),this.setState({modalState:"LOADING"})},this.unzoom=()=>{this.setState({modalState:"UNLOADING"})},this.handleImgTransitionEnd=()=>{clearTimeout(this.timeoutTransitionEnd),this.state.modalState==="LOADING"?this.setState({modalState:"LOADED"}):this.state.modalState==="UNLOADING"&&this.setState({shouldRefresh:!1,modalState:"UNLOADED"})},this.ensureImgTransitionEnd=()=>{if(this.refModalImg.current){const t=window.getComputedStyle(this.refModalImg.current).transitionDuration,e=parseFloat(t);if(e){const s=e*(t.endsWith("ms")?1:1e3)+50;this.timeoutTransitionEnd=setTimeout(this.handleImgTransitionEnd,s)}}},this.bodyScrollDisable=()=>{this.prevBodyAttrs={overflow:document.body.style.overflow,width:document.body.style.width};const t=document.body.clientWidth;document.body.style.overflow="hidden",document.body.style.width=`${t}px`},this.bodyScrollEnable=()=>{document.body.style.width=this.prevBodyAttrs.width,document.body.style.overflow=this.prevBodyAttrs.overflow,this.prevBodyAttrs=V},this.loadZoomImg=()=>{const{props:{zoomImg:t}}=this,e=t==null?void 0:t.src;if(e){const s=new Image;s.sizes=(t==null?void 0:t.sizes)??"",s.srcset=(t==null?void 0:t.srcSet)??"",s.src=e;const o=()=>{this.setState({isZoomImgLoaded:!0})};s.decode().then(o).catch(()=>{if(q(s)){o();return}s.onload=o})}},this.UNSAFE_handleSvg=()=>{var o,i,l,h,r;const{imgEl:t,refModalImg:e,styleModalImg:s}=this;if(x(t)){const a=t.cloneNode(!0);xt(a),a.style.width=`${s.width||0}px`,a.style.height=`${s.height||0}px`,a.addEventListener("click",this.handleUnzoom),(l=(i=(o=e.current)==null?void 0:o.firstChild)==null?void 0:i.remove)==null||l.call(i),(r=(h=e.current)==null?void 0:h.appendChild)==null||r.call(h,a)}}}render(){const{handleDialogCancel:t,handleDialogClick:e,handleUnzoom:s,handleZoom:o,imgEl:i,props:{a11yNameButtonUnzoom:l,a11yNameButtonZoom:h,children:r,classDialog:a,IconUnzoom:u,IconZoom:m,isZoomed:c,wrapElement:p,ZoomContent:w,zoomImg:L,zoomMargin:f},refContent:g,refDialog:C,refModalContent:N,refModalImg:b,refWrap:E,state:{id:z,isZoomImgLoaded:A,loadedImgEl:W,modalState:D,shouldRefresh:H,styleGhost:tt}}=this,Y=`rmiz-modal-${z}`,k=`rmiz-modal-img-${z}`,et=j(i),O=T(i),$=x(i),R=St(i),G=K(i),nt=O?i.sizes:void 0,st=O?i.srcset:void 0,ot=!!(L!=null&&L.src),I=this.hasImage(),it=R?`${h}: ${R}`:h,at=D==="LOADING"||D==="LOADED",rt=I?"found":"not-found",lt=D==="UNLOADED"||D==="UNLOADING"?"hidden":"visible",ht={visibility:D==="UNLOADED"?"visible":"hidden"};this.styleModalImg=I?zt({hasZoomImg:ot,imgSrc:G,isSvg:$,isZoomed:c&&at,loadedImgEl:W,offset:f,shouldRefresh:H,targetEl:i}):{};let B=null;if(I){const F=O||et?d.createElement("img",{alt:R,sizes:nt,src:G,srcSet:st,...A&&D==="LOADED"?L:{},"data-rmiz-modal-img":"",height:this.styleModalImg.height||void 0,id:k,ref:b,style:this.styleModalImg,width:this.styleModalImg.width||void 0}):$?d.createElement("div",{"data-rmiz-modal-img":!0,ref:b,style:this.styleModalImg}):null,X=d.createElement("button",{"aria-label":l,"data-rmiz-btn-unzoom":"",onClick:s,type:"button"},d.createElement(u,null));B=w?d.createElement(w,{buttonUnzoom:X,modalState:D,img:F,onUnzoom:s}):d.createElement(d.Fragment,null,F,X)}return d.createElement(p,{"aria-owns":Y,"data-rmiz":"",ref:E},d.createElement(p,{"data-rmiz-content":rt,ref:g,style:ht},r),I&&d.createElement(p,{"data-rmiz-ghost":"",style:tt},d.createElement("button",{"aria-label":it,"data-rmiz-btn-zoom":"",onClick:o,type:"button"},d.createElement(m,null))),I&&ct.createPortal(d.createElement("dialog",{"aria-labelledby":k,"aria-modal":"true",className:a,"data-rmiz-modal":"",id:Y,onClick:e,onClose:s,onCancel:t,ref:C,role:"dialog"},d.createElement("div",{"data-rmiz-modal-overlay":lt}),d.createElement("div",{"data-rmiz-modal-content":"",ref:N},B)),this.getDialogContainer()))}componentDidMount(){this.setId(),this.setAndTrackImg(),this.handleImgLoad(),this.UNSAFE_handleSvg()}componentWillUnmount(){var t,e,s,o,i,l,h,r,a,u,m,c;this.state.modalState!=="UNLOADED"&&this.bodyScrollEnable(),(e=(t=this.contentChangeObserver)==null?void 0:t.disconnect)==null||e.call(t),(o=(s=this.contentNotFoundChangeObserver)==null?void 0:s.disconnect)==null||o.call(s),(l=(i=this.imgElResizeObserver)==null?void 0:i.disconnect)==null||l.call(i),(r=(h=this.imgEl)==null?void 0:h.removeEventListener)==null||r.call(h,"load",this.handleImgLoad),(u=(a=this.imgEl)==null?void 0:a.removeEventListener)==null||u.call(a,"click",this.handleZoom),(c=(m=this.refModalImg.current)==null?void 0:m.removeEventListener)==null||c.call(m,"transitionend",this.handleImgTransitionEnd),window.removeEventListener("wheel",this.handleWheel),window.removeEventListener("touchstart",this.handleTouchStart),window.removeEventListener("touchmove",this.handleTouchMove),window.removeEventListener("touchend",this.handleTouchEnd),window.removeEventListener("touchcancel",this.handleTouchCancel),window.removeEventListener("resize",this.handleResize),document.removeEventListener("keydown",this.handleKeyDown,!0)}componentDidUpdate(t,e){this.handleModalStateChange(e.modalState),this.UNSAFE_handleSvg(),this.handleIfZoomChanged(t.isZoomed)}}J.defaultProps={a11yNameButtonUnzoom:"Minimize image",a11yNameButtonZoom:"Expand image",canSwipeToUnzoom:!0,IconUnzoom:Lt,IconZoom:yt,swipeToUnzoomThreshold:10,wrapElement:"div",zoomMargin:0};function At(n){const[t,e]=d.useState(!1);return d.createElement(Tt,{...n,isZoomed:t,onZoomChange:e})}function Rt(){var i;const n=dt(),{documents:t,status:e,error:s}=ut(l=>l.profile);console.log("documents, status, error: ",t,e,s);const o=l=>{U(h=>v.jsxs("span",{className:"p-0",children:["Are you sure you want to delete this document?",v.jsxs("div",{className:"buttons flex justify-center",children:[v.jsx("button",{className:"me-2 font-bold hover:text-red-500 text-black rounded-md",onClick:()=>{n(gt(l.ID)),n(_()),U.dismiss(h.id)},children:"Yes"}),v.jsx("button",{className:" font-bold hover:text-red-500 text-black rounded-md",onClick:()=>U.dismiss(h.id),children:"No"})]})]}),{duration:1e3})};return P.useEffect(()=>{e==="loading"&&n(_()),console.log("data: ",t==null?void 0:t.data)},[e,n,t==null?void 0:t.data]),P.useEffect(()=>{window.scrollTo(0,0)},[]),s?"error":e==="loading"?v.jsx(mt,{}):v.jsxs("section",{className:"",children:[v.jsx(ft,{text:"Your",specialText:"Documents",className:"!mt-0 mb-5"}),v.jsx("div",{className:"button flex justify-center lg:justify-end me-4 !my-5",children:v.jsx(pt,{text:"Upload Document"})}),v.jsx("div",{className:"grid lg:grid-cols-3 gap-4 p-4",children:((i=t==null?void 0:t.data)==null?void 0:i.length)>0?t.data.map(l=>v.jsxs("div",{className:"relative",children:[v.jsx("button",{onClick:()=>o(l),className:"icon absolute text-xl top-2 right-2 p-1 shadow-lg hover:bg-white hover:text-red-500 transition bg-[var(--primary-color)] rounded-full text-white z-3",children:v.jsx(wt,{})}),v.jsx(At,{children:v.jsx("img",{src:l.FilePath,alt:"Image 1",className:"h-[350px] w-full object-cover cursor-pointer"})})]},l.ID)):v.jsx("div",{className:"col-span-full text-center text-gray-500",children:"No documents found."})}),v.jsx(vt,{})]})}export{Rt as default};
