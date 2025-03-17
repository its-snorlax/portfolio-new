(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[177],{285:(e,t,r)=>{"use strict";r.d(t,{A:()=>a});var n=r(5155),o=r(9434);let i=(0,r(2115).forwardRef)((e,t)=>{let{className:r,variant:i="primary",size:a="md",...s}=e;return(0,n.jsx)("button",{className:(0,o.cn)("inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{primary:"bg-indigo-600 text-white hover:bg-indigo-700 focus-visible:ring-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-600",secondary:"bg-gray-100 text-gray-900 hover:bg-gray-200 focus-visible:ring-gray-500 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700",outline:"border border-gray-200 bg-white hover:bg-gray-100 hover:text-gray-900 focus-visible:ring-gray-500 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-100 dark:hover:bg-gray-800"}[i],{sm:"h-8 px-3 text-sm",md:"h-10 px-4",lg:"h-12 px-6 text-lg"}[a],r),ref:t,...s})});i.displayName="Button";let a=i},347:()=>{},2359:(e,t,r)=>{"use strict";r.d(t,{default:()=>l});var n=r(5155),o=r(2115),i=r(6874),a=r.n(i),s=r(285);let u=[{id:"skills",label:"Skills"},{id:"education",label:"Education"},{id:"experience",label:"Experience"},{id:"contact",label:"Contact"}];function l(){let[e,t]=(0,o.useState)("");return(0,o.useEffect)(()=>{let e=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&t(e.target.id)})},{threshold:.5});return u.forEach(t=>{let r=document.getElementById(t.id);r&&e.observe(r)}),()=>e.disconnect()},[]),(0,n.jsx)("nav",{className:"fixed left-0 right-0 top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-sm dark:border-gray-800 dark:bg-gray-900/80",children:(0,n.jsxs)("div",{className:"container mx-auto flex h-16 items-center justify-between px-4",children:[(0,n.jsx)(a(),{href:"/",className:"text-xl font-bold text-gray-900 dark:text-white",children:"Portfolio"}),(0,n.jsx)("div",{className:"flex items-center justify-center gap-4",children:u.map(t=>(0,n.jsx)(s.A,{variant:e===t.id?"primary":"outline",size:"sm",onClick:()=>{var e;null===(e=document.getElementById(t.id))||void 0===e||e.scrollIntoView({behavior:"smooth"})},children:t.label},t.id))})]})})}},2757:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{formatUrl:function(){return i},formatWithValidation:function(){return s},urlObjectKeys:function(){return a}});let n=r(6966)._(r(8859)),o=/https?|ftp|gopher|file/;function i(e){let{auth:t,hostname:r}=e,i=e.protocol||"",a=e.pathname||"",s=e.hash||"",u=e.query||"",l=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?l=t+e.host:r&&(l=t+(~r.indexOf(":")?"["+r+"]":r),e.port&&(l+=":"+e.port)),u&&"object"==typeof u&&(u=String(n.urlQueryToSearchParams(u)));let c=e.search||u&&"?"+u||"";return i&&!i.endsWith(":")&&(i+=":"),e.slashes||(!i||o.test(i))&&!1!==l?(l="//"+(l||""),a&&"/"!==a[0]&&(a="/"+a)):l||(l=""),s&&"#"!==s[0]&&(s="#"+s),c&&"?"!==c[0]&&(c="?"+c),""+i+l+(a=a.replace(/[?#]/g,encodeURIComponent))+(c=c.replace("#","%23"))+s}let a=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function s(e){return i(e)}},6874:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return g}});let n=r(8229),o=r(5155),i=n._(r(2115)),a=r(2757),s=r(5227),u=r(9818),l=r(6654),c=r(9991),f=r(5929);r(3230);let d=r(4930);function p(e){return"string"==typeof e?e:(0,a.formatUrl)(e)}let g=i.default.forwardRef(function(e,t){let r,n;let{href:a,as:g,children:h,prefetch:y=null,passHref:b,replace:m,shallow:v,scroll:x,onClick:E,onMouseEnter:P,onTouchStart:k,legacyBehavior:j=!1,...N}=e;r=h,j&&("string"==typeof r||"number"==typeof r)&&(r=(0,o.jsx)("a",{children:r}));let _=i.default.useContext(s.AppRouterContext),O=!1!==y,w=null===y?u.PrefetchKind.AUTO:u.PrefetchKind.FULL,{href:C,as:S}=i.default.useMemo(()=>{let e=p(a);return{href:e,as:g?p(g):e}},[a,g]);j&&(n=i.default.Children.only(r));let I=j?n&&"object"==typeof n&&n.ref:t,T=i.default.useCallback(e=>(O&&null!==_&&(0,d.mountLinkInstance)(e,C,_,w),()=>{(0,d.unmountLinkInstance)(e)}),[O,C,_,w]),A={ref:(0,l.useMergedRef)(T,I),onClick(e){j||"function"!=typeof E||E(e),j&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),_&&!e.defaultPrevented&&!function(e,t,r,n,o,a,s){let{nodeName:u}=e.currentTarget;!("A"===u.toUpperCase()&&function(e){let t=e.currentTarget.getAttribute("target");return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e))&&(e.preventDefault(),i.default.startTransition(()=>{let e=null==s||s;"beforePopState"in t?t[o?"replace":"push"](r,n,{shallow:a,scroll:e}):t[o?"replace":"push"](n||r,{scroll:e})}))}(e,_,C,S,m,v,x)},onMouseEnter(e){j||"function"!=typeof P||P(e),j&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),_&&O&&(0,d.onNavigationIntent)(e.currentTarget)},onTouchStart:function(e){j||"function"!=typeof k||k(e),j&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),_&&O&&(0,d.onNavigationIntent)(e.currentTarget)}};return(0,c.isAbsoluteUrl)(S)?A.href=S:j&&!b&&("a"!==n.type||"href"in n.props)||(A.href=(0,f.addBasePath)(S)),j?i.default.cloneElement(n,A):(0,o.jsx)("a",{...N,...A,children:r})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8183:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,8346,23)),Promise.resolve().then(r.t.bind(r,347,23)),Promise.resolve().then(r.bind(r,2359))},8346:e=>{e.exports={style:{fontFamily:"'Inter', 'Inter Fallback'",fontStyle:"normal"},className:"__className_2a73d7"}},8859:(e,t)=>{"use strict";function r(e){let t={};for(let[r,n]of e.entries()){let e=t[r];void 0===e?t[r]=n:Array.isArray(e)?e.push(n):t[r]=[e,n]}return t}function n(e){return"string"==typeof e?e:("number"!=typeof e||isNaN(e))&&"boolean"!=typeof e?"":String(e)}function o(e){let t=new URLSearchParams;for(let[r,o]of Object.entries(e))if(Array.isArray(o))for(let e of o)t.append(r,n(e));else t.set(r,n(o));return t}function i(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];for(let t of r){for(let r of t.keys())e.delete(r);for(let[r,n]of t.entries())e.append(r,n)}return e}Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{assign:function(){return i},searchParamsToUrlQuery:function(){return r},urlQueryToSearchParams:function(){return o}})},9434:(e,t,r)=>{"use strict";r.d(t,{cn:()=>i});var n=r(2596),o=r(9688);function i(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,o.QP)((0,n.$)(t))}},9991:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{DecodeError:function(){return g},MiddlewareNotFoundError:function(){return m},MissingStaticPage:function(){return b},NormalizeError:function(){return h},PageNotFoundError:function(){return y},SP:function(){return d},ST:function(){return p},WEB_VITALS:function(){return r},execOnce:function(){return n},getDisplayName:function(){return u},getLocationOrigin:function(){return a},getURL:function(){return s},isAbsoluteUrl:function(){return i},isResSent:function(){return l},loadGetInitialProps:function(){return f},normalizeRepeatedSlashes:function(){return c},stringifyError:function(){return v}});let r=["CLS","FCP","FID","INP","LCP","TTFB"];function n(e){let t,r=!1;return function(){for(var n=arguments.length,o=Array(n),i=0;i<n;i++)o[i]=arguments[i];return r||(r=!0,t=e(...o)),t}}let o=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,i=e=>o.test(e);function a(){let{protocol:e,hostname:t,port:r}=window.location;return e+"//"+t+(r?":"+r:"")}function s(){let{href:e}=window.location,t=a();return e.substring(t.length)}function u(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function l(e){return e.finished||e.headersSent}function c(e){let t=e.split("?");return t[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?"?"+t.slice(1).join("?"):"")}async function f(e,t){let r=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await f(t.Component,t.ctx)}:{};let n=await e.getInitialProps(t);if(r&&l(r))return n;if(!n)throw Object.defineProperty(Error('"'+u(e)+'.getInitialProps()" should resolve to an object. But found "'+n+'" instead.'),"__NEXT_ERROR_CODE",{value:"E394",enumerable:!1,configurable:!0});return n}let d="undefined"!=typeof performance,p=d&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class g extends Error{}class h extends Error{}class y extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message="Cannot find module for page: "+e}}class b extends Error{constructor(e,t){super(),this.message="Failed to load static file for page: "+e+" "+t}}class m extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function v(e){return JSON.stringify({message:e.message,stack:e.stack})}}},e=>{var t=t=>e(e.s=t);e.O(0,[838,578,441,684,358],()=>t(8183)),_N_E=e.O()}]);