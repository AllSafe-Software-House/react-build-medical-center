import{R as C,a1 as ae,r as I,j}from"./index-BfNAhHpa.js";function U(a){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?U=function(e){return typeof e}:U=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},U(a)}function Y(a,e){if(!(a instanceof e))throw new TypeError("Cannot call a class as a function")}function ie(a,e){for(var r=0;r<e.length;r++){var t=e[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(a,t.key,t)}}function X(a,e,r){return e&&ie(a.prototype,e),a}function z(a,e,r){return e in a?Object.defineProperty(a,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):a[e]=r,a}function T(){return T=Object.assign||function(a){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(a[t]=r[t])}return a},T.apply(this,arguments)}function N(a){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{},t=Object.keys(r);typeof Object.getOwnPropertySymbols=="function"&&(t=t.concat(Object.getOwnPropertySymbols(r).filter(function(n){return Object.getOwnPropertyDescriptor(r,n).enumerable}))),t.forEach(function(n){z(a,n,r[n])})}return a}function B(a,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(e&&e.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),e&&G(a,e)}function F(a){return F=Object.setPrototypeOf?Object.getPrototypeOf:function(r){return r.__proto__||Object.getPrototypeOf(r)},F(a)}function G(a,e){return G=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t},G(a,e)}function R(a){if(a===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function J(a,e){return e&&(typeof e=="object"||typeof e=="function")?e:R(a)}var $={display:"inline-block",borderRadius:"50%",border:"5px double white",width:30,height:30},q={empty:N({},$,{backgroundColor:"#ccc"}),full:N({},$,{backgroundColor:"black"}),placeholder:N({},$,{backgroundColor:"red"})},Q=function(e){if(C.isValidElement(e))return e;if(U(e)==="object"&&e!==null)return C.createElement("span",{style:e});if(Object.prototype.toString.call(e)==="[object String]")return C.createElement("span",{className:e})},oe=function(a){B(e,a);function e(){return Y(this,e),J(this,F(e).apply(this,arguments))}return X(e,[{key:"render",value:function(){var t,n=this.props,i=n.index,o=n.inactiveIcon,s=n.activeIcon,l=n.percent,u=n.direction,c=n.readonly,f=n.onClick,p=n.onMouseMove,b=Q(o),m=l<100,y=m?{}:{visibility:"hidden"},d=Q(s),E=(t={display:"inline-block",position:"absolute",overflow:"hidden",top:0},z(t,u==="rtl"?"right":"left",0),z(t,"width","".concat(l,"%")),t),g={cursor:c?"inherit":"pointer",display:"inline-block",position:"relative"};function w(h){p&&p(i,h)}function S(h){f&&(h.preventDefault(),f(i,h))}return C.createElement("span",{style:g,onClick:S,onMouseMove:w,onTouchMove:w,onTouchEnd:S},C.createElement("span",{style:y},b),C.createElement("span",{style:E},d))}}]),e}(C.PureComponent),se=function(a){B(e,a);function e(r){var t;return Y(this,e),t=J(this,F(e).call(this,r)),t.state={displayValue:t.props.value,interacting:!1},t.onMouseLeave=t.onMouseLeave.bind(R(R(t))),t.symbolMouseMove=t.symbolMouseMove.bind(R(R(t))),t.symbolClick=t.symbolClick.bind(R(R(t))),t}return X(e,[{key:"UNSAFE_componentWillReceiveProps",value:function(t){var n=this.props.value!==t.value;this.setState(function(i){return{displayValue:n?t.value:i.displayValue}})}},{key:"componentDidUpdate",value:function(t,n){if(t.value===this.props.value){if(n.interacting&&!this.state.interacting)return this.props.onHover();this.state.interacting&&this.props.onHover(this.state.displayValue)}}},{key:"symbolClick",value:function(t,n){var i=this.calculateDisplayValue(t,n);this.props.onClick(i,n)}},{key:"symbolMouseMove",value:function(t,n){var i=this.calculateDisplayValue(t,n);this.setState({interacting:!this.props.readonly,displayValue:i})}},{key:"onMouseLeave",value:function(){this.setState({displayValue:this.props.value,interacting:!1})}},{key:"calculateDisplayValue",value:function(t,n){var i=this.calculateHoverPercentage(n),o=Math.ceil(i%1*this.props.fractions)/this.props.fractions,s=Math.pow(10,3),l=t+(Math.floor(i)+Math.floor(o*s)/s);return l>0?l>this.props.totalSymbols?this.props.totalSymbols:l:1/this.props.fractions}},{key:"calculateHoverPercentage",value:function(t){var n=t.nativeEvent.type.indexOf("touch")>-1?t.nativeEvent.type.indexOf("touchend")>-1?t.changedTouches[0].clientX:t.touches[0].clientX:t.clientX,i=t.target.getBoundingClientRect(),o=this.props.direction==="rtl"?i.right-n:n-i.left;return o<0?0:o/i.width}},{key:"render",value:function(){var t=this.props,n=t.readonly,i=t.quiet,o=t.totalSymbols,s=t.value,l=t.placeholderValue,u=t.direction,c=t.emptySymbol,f=t.fullSymbol,p=t.placeholderSymbol,b=t.className,m=t.id,y=t.style,d=t.tabIndex,E=this.state,g=E.displayValue,w=E.interacting,S=[],h=[].concat(c),_=[].concat(f),M=[].concat(p),k=l!==0&&s===0&&!w,V;k?V=l:V=i?s:g;for(var x=Math.floor(V),O=0;O<o;O++){var D=void 0;O-x<0?D=100:O-x===0?D=(V-O)*100:D=0,S.push(C.createElement(oe,T({key:O,index:O,readonly:n,inactiveIcon:h[O%h.length],activeIcon:k?M[O%_.length]:_[O%_.length],percent:D,direction:u},!n&&{onClick:this.symbolClick,onMouseMove:this.symbolMouseMove,onTouchMove:this.symbolMouseMove,onTouchEnd:this.symbolClick})))}return C.createElement("span",T({id:m,style:N({},y,{display:"inline-block",direction:u}),className:b,tabIndex:d,"aria-label":this.props["aria-label"]},!n&&{onMouseLeave:this.onMouseLeave}),S)}}]),e}(C.PureComponent);function A(){}A._name="react_rating_noop";var te=function(a){B(e,a);function e(r){var t;return Y(this,e),t=J(this,F(e).call(this,r)),t.state={value:r.initialRating},t.handleClick=t.handleClick.bind(R(R(t))),t.handleHover=t.handleHover.bind(R(R(t))),t}return X(e,[{key:"UNSAFE_componentWillReceiveProps",value:function(t){this.setState({value:t.initialRating})}},{key:"handleClick",value:function(t,n){var i=this,o=this.translateDisplayValueToValue(t);this.props.onClick(o),this.state.value!==o&&this.setState({value:o},function(){return i.props.onChange(i.state.value)})}},{key:"handleHover",value:function(t){var n=t===void 0?t:this.translateDisplayValueToValue(t);this.props.onHover(n)}},{key:"translateDisplayValueToValue",value:function(t){var n=t*this.props.step+this.props.start;return n===this.props.start?n+1/this.props.fractions:n}},{key:"tranlateValueToDisplayValue",value:function(t){return t===void 0?0:(t-this.props.start)/this.props.step}},{key:"render",value:function(){var t=this.props,n=t.step,i=t.emptySymbol,o=t.fullSymbol,s=t.placeholderSymbol,l=t.readonly,u=t.quiet,c=t.fractions,f=t.direction,p=t.start,b=t.stop,m=t.id,y=t.className,d=t.style,E=t.tabIndex;function g(w,S,h){return Math.floor((S-w)/h)}return C.createElement(se,{id:m,style:d,className:y,tabIndex:E,"aria-label":this.props["aria-label"],totalSymbols:g(p,b,n),value:this.tranlateValueToDisplayValue(this.state.value),placeholderValue:this.tranlateValueToDisplayValue(this.props.placeholderRating),readonly:l,quiet:u,fractions:c,direction:f,emptySymbol:i,fullSymbol:o,placeholderSymbol:s,onClick:this.handleClick,onHover:this.handleHover})}}]),e}(C.PureComponent);te.defaultProps={start:0,stop:5,step:1,readonly:!1,quiet:!1,fractions:1,direction:"ltr",onHover:A,onClick:A,onChange:A,emptySymbol:q.empty,fullSymbol:q.full,placeholderSymbol:q.placeholder};const je=te;var K={},H=function(){return H=Object.assign||function(a){for(var e,r=1,t=arguments.length;r<t;r++)for(var n in e=arguments[r])Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a},H.apply(this,arguments)},le=function(){function a(e,r,t){var n=this;this.endVal=r,this.options=t,this.version="2.8.0",this.defaults={startVal:0,decimalPlaces:0,duration:2,useEasing:!0,useGrouping:!0,useIndianSeparators:!1,smartEasingThreshold:999,smartEasingAmount:333,separator:",",decimal:".",prefix:"",suffix:"",enableScrollSpy:!1,scrollSpyDelay:200,scrollSpyOnce:!1},this.finalEndVal=null,this.useEasing=!0,this.countDown=!1,this.error="",this.startVal=0,this.paused=!0,this.once=!1,this.count=function(i){n.startTime||(n.startTime=i);var o=i-n.startTime;n.remaining=n.duration-o,n.useEasing?n.countDown?n.frameVal=n.startVal-n.easingFn(o,0,n.startVal-n.endVal,n.duration):n.frameVal=n.easingFn(o,n.startVal,n.endVal-n.startVal,n.duration):n.frameVal=n.startVal+(n.endVal-n.startVal)*(o/n.duration);var s=n.countDown?n.frameVal<n.endVal:n.frameVal>n.endVal;n.frameVal=s?n.endVal:n.frameVal,n.frameVal=Number(n.frameVal.toFixed(n.options.decimalPlaces)),n.printValue(n.frameVal),o<n.duration?n.rAF=requestAnimationFrame(n.count):n.finalEndVal!==null?n.update(n.finalEndVal):n.options.onCompleteCallback&&n.options.onCompleteCallback()},this.formatNumber=function(i){var o,s,l,u,c=i<0?"-":"";o=Math.abs(i).toFixed(n.options.decimalPlaces);var f=(o+="").split(".");if(s=f[0],l=f.length>1?n.options.decimal+f[1]:"",n.options.useGrouping){u="";for(var p=3,b=0,m=0,y=s.length;m<y;++m)n.options.useIndianSeparators&&m===4&&(p=2,b=1),m!==0&&b%p==0&&(u=n.options.separator+u),b++,u=s[y-m-1]+u;s=u}return n.options.numerals&&n.options.numerals.length&&(s=s.replace(/[0-9]/g,function(d){return n.options.numerals[+d]}),l=l.replace(/[0-9]/g,function(d){return n.options.numerals[+d]})),c+n.options.prefix+s+l+n.options.suffix},this.easeOutExpo=function(i,o,s,l){return s*(1-Math.pow(2,-10*i/l))*1024/1023+o},this.options=H(H({},this.defaults),t),this.formattingFn=this.options.formattingFn?this.options.formattingFn:this.formatNumber,this.easingFn=this.options.easingFn?this.options.easingFn:this.easeOutExpo,this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.endVal=this.validateValue(r),this.options.decimalPlaces=Math.max(this.options.decimalPlaces),this.resetDuration(),this.options.separator=String(this.options.separator),this.useEasing=this.options.useEasing,this.options.separator===""&&(this.options.useGrouping=!1),this.el=typeof e=="string"?document.getElementById(e):e,this.el?this.printValue(this.startVal):this.error="[CountUp] target is null or undefined",typeof window<"u"&&this.options.enableScrollSpy&&(this.error?console.error(this.error,e):(window.onScrollFns=window.onScrollFns||[],window.onScrollFns.push(function(){return n.handleScroll(n)}),window.onscroll=function(){window.onScrollFns.forEach(function(i){return i()})},this.handleScroll(this)))}return a.prototype.handleScroll=function(e){if(e&&window&&!e.once){var r=window.innerHeight+window.scrollY,t=e.el.getBoundingClientRect(),n=t.top+window.pageYOffset,i=t.top+t.height+window.pageYOffset;i<r&&i>window.scrollY&&e.paused?(e.paused=!1,setTimeout(function(){return e.start()},e.options.scrollSpyDelay),e.options.scrollSpyOnce&&(e.once=!0)):(window.scrollY>i||n>r)&&!e.paused&&e.reset()}},a.prototype.determineDirectionAndSmartEasing=function(){var e=this.finalEndVal?this.finalEndVal:this.endVal;this.countDown=this.startVal>e;var r=e-this.startVal;if(Math.abs(r)>this.options.smartEasingThreshold&&this.options.useEasing){this.finalEndVal=e;var t=this.countDown?1:-1;this.endVal=e+t*this.options.smartEasingAmount,this.duration=this.duration/2}else this.endVal=e,this.finalEndVal=null;this.finalEndVal!==null?this.useEasing=!1:this.useEasing=this.options.useEasing},a.prototype.start=function(e){this.error||(this.options.onStartCallback&&this.options.onStartCallback(),e&&(this.options.onCompleteCallback=e),this.duration>0?(this.determineDirectionAndSmartEasing(),this.paused=!1,this.rAF=requestAnimationFrame(this.count)):this.printValue(this.endVal))},a.prototype.pauseResume=function(){this.paused?(this.startTime=null,this.duration=this.remaining,this.startVal=this.frameVal,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count)):cancelAnimationFrame(this.rAF),this.paused=!this.paused},a.prototype.reset=function(){cancelAnimationFrame(this.rAF),this.paused=!0,this.resetDuration(),this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.printValue(this.startVal)},a.prototype.update=function(e){cancelAnimationFrame(this.rAF),this.startTime=null,this.endVal=this.validateValue(e),this.endVal!==this.frameVal&&(this.startVal=this.frameVal,this.finalEndVal==null&&this.resetDuration(),this.finalEndVal=null,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count))},a.prototype.printValue=function(e){var r;if(this.el){var t=this.formattingFn(e);!((r=this.options.plugin)===null||r===void 0)&&r.render?this.options.plugin.render(this.el,t):this.el.tagName==="INPUT"?this.el.value=t:this.el.tagName==="text"||this.el.tagName==="tspan"?this.el.textContent=t:this.el.innerHTML=t}},a.prototype.ensureNumber=function(e){return typeof e=="number"&&!isNaN(e)},a.prototype.validateValue=function(e){var r=Number(e);return this.ensureNumber(r)?r:(this.error="[CountUp] invalid start or end value: ".concat(e),null)},a.prototype.resetDuration=function(){this.startTime=null,this.duration=1e3*Number(this.options.duration),this.remaining=this.duration},a}();const ue=Object.freeze(Object.defineProperty({__proto__:null,CountUp:le},Symbol.toStringTag,{value:"Module"})),ce=ae(ue);Object.defineProperty(K,"__esModule",{value:!0});var v=I,fe=ce;function pe(a,e){var r=a==null?null:typeof Symbol<"u"&&a[Symbol.iterator]||a["@@iterator"];if(r!=null){var t,n,i,o,s=[],l=!0,u=!1;try{if(i=(r=r.call(a)).next,e!==0)for(;!(l=(t=i.call(r)).done)&&(s.push(t.value),s.length!==e);l=!0);}catch(c){u=!0,n=c}finally{try{if(!l&&r.return!=null&&(o=r.return(),Object(o)!==o))return}finally{if(u)throw n}}return s}}function Z(a,e){var r=Object.keys(a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(a);e&&(t=t.filter(function(n){return Object.getOwnPropertyDescriptor(a,n).enumerable})),r.push.apply(r,t)}return r}function L(a){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?Z(Object(r),!0).forEach(function(t){me(a,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(r)):Z(Object(r)).forEach(function(t){Object.defineProperty(a,t,Object.getOwnPropertyDescriptor(r,t))})}return a}function de(a,e){if(typeof a!="object"||!a)return a;var r=a[Symbol.toPrimitive];if(r!==void 0){var t=r.call(a,e||"default");if(typeof t!="object")return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(a)}function he(a){var e=de(a,"string");return typeof e=="symbol"?e:String(e)}function me(a,e,r){return e=he(e),e in a?Object.defineProperty(a,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):a[e]=r,a}function W(){return W=Object.assign?Object.assign.bind():function(a){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(a[t]=r[t])}return a},W.apply(this,arguments)}function ye(a,e){if(a==null)return{};var r={},t=Object.keys(a),n,i;for(i=0;i<t.length;i++)n=t[i],!(e.indexOf(n)>=0)&&(r[n]=a[n]);return r}function ne(a,e){if(a==null)return{};var r=ye(a,e),t,n;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(a);for(n=0;n<i.length;n++)t=i[n],!(e.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(a,t)&&(r[t]=a[t])}return r}function ve(a,e){return be(a)||pe(a,e)||ge(a,e)||Se()}function be(a){if(Array.isArray(a))return a}function ge(a,e){if(a){if(typeof a=="string")return ee(a,e);var r=Object.prototype.toString.call(a).slice(8,-1);if(r==="Object"&&a.constructor&&(r=a.constructor.name),r==="Map"||r==="Set")return Array.from(a);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return ee(a,e)}}function ee(a,e){(e==null||e>a.length)&&(e=a.length);for(var r=0,t=new Array(e);r<e;r++)t[r]=a[r];return t}function Se(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Ve=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u"?v.useLayoutEffect:v.useEffect;function P(a){var e=v.useRef(a);return Ve(function(){e.current=a}),v.useCallback(function(){for(var r=arguments.length,t=new Array(r),n=0;n<r;n++)t[n]=arguments[n];return e.current.apply(void 0,t)},[])}var Oe=function(e,r){var t=r.decimal,n=r.decimals,i=r.duration,o=r.easingFn,s=r.end,l=r.formattingFn,u=r.numerals,c=r.prefix,f=r.separator,p=r.start,b=r.suffix,m=r.useEasing,y=r.useGrouping,d=r.useIndianSeparators,E=r.enableScrollSpy,g=r.scrollSpyDelay,w=r.scrollSpyOnce,S=r.plugin;return new fe.CountUp(e,s,{startVal:p,duration:i,decimal:t,decimalPlaces:n,easingFn:o,formattingFn:l,numerals:u,separator:f,prefix:c,suffix:b,plugin:S,useEasing:m,useIndianSeparators:d,useGrouping:y,enableScrollSpy:E,scrollSpyDelay:g,scrollSpyOnce:w})},Ee=["ref","startOnMount","enableReinitialize","delay","onEnd","onStart","onPauseResume","onReset","onUpdate"],we={decimal:".",separator:",",delay:null,prefix:"",suffix:"",duration:2,start:0,decimals:0,startOnMount:!0,enableReinitialize:!0,useEasing:!0,useGrouping:!0,useIndianSeparators:!1},re=function(e){var r=Object.fromEntries(Object.entries(e).filter(function(V){var x=ve(V,2),O=x[1];return O!==void 0})),t=v.useMemo(function(){return L(L({},we),r)},[e]),n=t.ref,i=t.startOnMount,o=t.enableReinitialize,s=t.delay,l=t.onEnd,u=t.onStart,c=t.onPauseResume,f=t.onReset,p=t.onUpdate,b=ne(t,Ee),m=v.useRef(),y=v.useRef(),d=v.useRef(!1),E=P(function(){return Oe(typeof n=="string"?n:n.current,b)}),g=P(function(V){var x=m.current;if(x&&!V)return x;var O=E();return m.current=O,O}),w=P(function(){var V=function(){return g(!0).start(function(){l==null||l({pauseResume:S,reset:h,start:M,update:_})})};s&&s>0?y.current=setTimeout(V,s*1e3):V(),u==null||u({pauseResume:S,reset:h,update:_})}),S=P(function(){g().pauseResume(),c==null||c({reset:h,start:M,update:_})}),h=P(function(){g().el&&(y.current&&clearTimeout(y.current),g().reset(),f==null||f({pauseResume:S,start:M,update:_}))}),_=P(function(V){g().update(V),p==null||p({pauseResume:S,reset:h,start:M})}),M=P(function(){h(),w()}),k=P(function(V){i&&(V&&h(),w())});return v.useEffect(function(){d.current?o&&k(!0):(d.current=!0,k())},[o,d,k,s,e.start,e.suffix,e.prefix,e.duration,e.separator,e.decimals,e.decimal,e.formattingFn]),v.useEffect(function(){return function(){h()}},[h]),{start:M,pauseResume:S,reset:h,update:_,getCountUp:g}},Ce=["className","redraw","containerProps","children","style"],Pe=function(e){var r=e.className,t=e.redraw,n=e.containerProps,i=e.children,o=e.style,s=ne(e,Ce),l=v.useRef(null),u=v.useRef(!1),c=re(L(L({},s),{},{ref:l,startOnMount:typeof i!="function"||e.delay===0,enableReinitialize:!1})),f=c.start,p=c.reset,b=c.update,m=c.pauseResume,y=c.getCountUp,d=P(function(){f()}),E=P(function(S){e.preserveValue||p(),b(S)}),g=P(function(){if(typeof e.children=="function"&&!(l.current instanceof Element)){console.error(`Couldn't find attached element to hook the CountUp instance into! Try to attach "containerRef" from the render prop to a an Element, eg. <span ref={containerRef} />.`);return}y()});v.useEffect(function(){g()},[g]),v.useEffect(function(){u.current&&E(e.end)},[e.end,E]);var w=t&&e;return v.useEffect(function(){t&&u.current&&d()},[d,t,w]),v.useEffect(function(){!t&&u.current&&d()},[d,t,e.start,e.suffix,e.prefix,e.duration,e.separator,e.decimals,e.decimal,e.className,e.formattingFn]),v.useEffect(function(){u.current=!0},[]),typeof i=="function"?i({countUpRef:l,start:f,reset:p,update:b,pauseResume:m,getCountUp:y}):v.createElement("span",W({className:r,ref:l,style:o},n),typeof e.start<"u"?y().formattingFn(e.start):"")},Re=K.default=Pe;K.useCountUp=re;const _e=({start:a,end:e,sim:r,span:t,textClass:n,parentClass:i,title:o,description:s})=>{const[l,u]=I.useState(!1),c=I.useRef(null);return I.useEffect(()=>{const f=new IntersectionObserver(p=>{p[0].isIntersecting&&(u(!0),f.unobserve(c.current))},{threshold:.5});return c.current&&f.observe(c.current),()=>{c.current&&f.unobserve(c.current)}},[]),j.jsxs("div",{children:[j.jsx("div",{ref:c,children:l?j.jsxs("div",{className:`${i} mx-4`,children:[j.jsxs("div",{className:"countUp",children:[j.jsx(Re,{className:n,start:a,end:parseInt(o),duration:3}),r]}),j.jsx("span",{className:"text-[14px] text-[#000]",children:s})]}):j.jsx("span",{children:"0"})}),j.jsx("div",{})," "]})},Me=_e;export{je as R,Me as S};
