import{d as Q,u as G,e as v,o as h,c as _,a as i,t as b,f as u,F as $,g as k,w as J,r as j,T as K,_ as q,h as L,i as ne,j as re,k as oe,l as ie,m as R,n as B,p as ae,q as ce,s as V,v as x,x as ue,y as le,z as P,A as fe,B as de}from"./app-972d0bec.js";const he={class:"result-item relative overflow-visible",flex:"~ col",text:"left",m:"b-4"},_e={class:"flex justify-between items-center"},pe=["href"],ye={class:"not-italic",text:"xs"},me=["href"],ge={text:"xs"},Ee=["href"],be={class:"top-0 truncate"},ve=["innerHTML"],we={key:1},Re=i("div",{class:"inline-flex justify-start items-center border",p:"1",m:"1"},[i("div",{"i-ri-alert-line":""}),i("span",{m:"l-1"},"我们的探测器对这个奇怪的网站没有效果！")],-1),xe=[Re],$e={class:"reason-container absolute top-0 left-180 min-h-full justify-center hidden transition",w:"64",opacity:"0",flex:"~ col"},Te={class:"search-reason",p:"l-2",text:"xs"},Ce=Q({__name:"ResultItem",props:{keywords:{type:Array,required:!0},result:{type:null,required:!0}},setup(e){const t=e,n=G(),r=v(()=>{var s;const a=(s=n.query.q)==null?void 0:s.toString();return a!=null&&a.startsWith("site:")?a.split(" ").slice(1).join(" "):a}),o=(a,s)=>{let f=a.replace(/</g,"&lt;").replace(/>/g,"&gt;");return s.forEach(g=>{const w=new RegExp(g,"gi");f=f.replace(w,y=>`<em class="highlight">${y}</em>`)}),f},l=v(()=>new URL(t.result.网址).hostname),c=v(()=>`site:${l.value}`),d=v(()=>{var a;return`/search?q=${c.value} ${(a=r.value)==null?void 0:a.trim()}`});return(a,s)=>(h(),_("div",he,[i("span",_e,[i("a",{href:e.result.网址,target:"_blank",class:"truncate"},[i("cite",ye,b(e.result.网址),1)],8,pe),i("a",{href:u(d),class:"cursor-pointer related-info sese-link transition truncate"},[i("cite",ge,"在 "+b(u(l))+" 中找到 "+b(e.result.相同域名个数)+" 个相关页面",1)],8,me)]),e.result.信息?(h(),_($,{key:0},[i("a",{href:e.result.网址,target:"_blank",class:"text-lg text-blue-900 hover:underline dark:text-blue-500"},[i("h3",be,b(e.result.信息.标题),1)],8,Ee),i("p",{text:"sm",innerHTML:o(e.result.信息.描述||e.result.信息.文本,e.keywords)},null,8,ve)],64)):(h(),_("div",we,xe)),k(K,null,{default:J(()=>[i("div",$e,[i("blockquote",Te,[(h(!0),_($,null,j(e.result.原因,(f,g)=>(h(),_("span",{key:g,class:"block"},b(g)+"："+b(f.toFixed(3)),1))),128))])])]),_:1})]))}});const Pe=q(Ce,[["__file","E:/Github Clone/soso-in/src/components/ResultItem.vue"]]);const Se={},ke={class:"absolute loading-container flex justify-center items-center fixed inset-0",h:"screen",m:"auto"},je=i("div",{class:"spinner"},null,-1),Le=[je];function Ne(e,t){return h(),_("div",ke,Le)}const Oe=q(Se,[["render",Ne],["__file","E:/Github Clone/soso-in/src/components/Loading.vue"]]),qe="/404.png",Ae=/"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,Ie=/"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,Ue=/^\s*["[{]|^\s*-?\d[\d.]{0,14}\s*$/;function Fe(e,t){if(e!=="__proto__"&&!(e==="constructor"&&t&&typeof t=="object"&&"prototype"in t))return t}function Be(e,t={}){if(typeof e!="string")return e;const n=e.toLowerCase().trim();if(n==="true")return!0;if(n==="false")return!1;if(n==="null")return null;if(n==="nan")return Number.NaN;if(n==="infinity")return Number.POSITIVE_INFINITY;if(n!=="undefined"){if(!Ue.test(e)){if(t.strict)throw new SyntaxError("Invalid JSON");return e}try{return Ae.test(e)||Ie.test(e)?JSON.parse(e,Fe):JSON.parse(e)}catch(r){if(t.strict)throw r;return e}}}const Ve=/#/g,De=/&/g,He=/=/g,M=/\+/g,Qe=/%5B/gi,Ge=/%5D/gi,Je=/%5E/gi,Ke=/%60/gi,Me=/%7B/gi,We=/%7C/gi,ze=/%7D/gi,Ye=/%20/gi;function Xe(e){return encodeURI(""+e).replace(We,"|").replace(Qe,"[").replace(Ge,"]")}function N(e){return Xe(e).replace(M,"%2B").replace(Ye,"+").replace(Ve,"%23").replace(De,"%26").replace(Ke,"`").replace(Me,"{").replace(ze,"}").replace(Je,"^")}function S(e){return N(e).replace(He,"%3D")}function W(e=""){try{return decodeURIComponent(""+e)}catch{return""+e}}function Ze(e){return W(e.replace(M," "))}function et(e=""){const t={};e[0]==="?"&&(e=e.substr(1));for(const n of e.split("&")){const r=n.match(/([^=]+)=?(.*)/)||[];if(r.length<2)continue;const o=W(r[1]);if(o==="__proto__"||o==="constructor")continue;const l=Ze(r[2]||"");t[o]?Array.isArray(t[o])?t[o].push(l):t[o]=[t[o],l]:t[o]=l}return t}function tt(e,t){return(typeof t=="number"||typeof t=="boolean")&&(t=String(t)),t?Array.isArray(t)?t.map(n=>`${S(e)}=${N(n)}`).join("&"):`${S(e)}=${N(t)}`:S(e)}function st(e){return Object.keys(e).map(t=>tt(t,e[t])).join("&")}const nt=/^\w+:(\/\/)?/,rt=/^\/\/[^/]+/;function z(e,t=!1){return nt.test(e)||t&&rt.test(e)}const ot=/\/$|\/\?/;function O(e="",t=!1){return t?ot.test(e):e.endsWith("/")}function it(e="",t=!1){if(!t)return(O(e)?e.slice(0,-1):e)||"/";if(!O(e,!0))return e||"/";const[n,...r]=e.split("?");return(n.slice(0,-1)||"/")+(r.length?`?${r.join("?")}`:"")}function at(e="",t=!1){if(!t)return e.endsWith("/")?e:e+"/";if(O(e,!0))return e||"/";const[n,...r]=e.split("?");return n+"/"+(r.length?`?${r.join("?")}`:"")}function ct(e=""){return e.startsWith("/")}function ut(e=""){return(ct(e)?e.substr(1):e)||"/"}function lt(e,t){if(dt(t)||z(e))return e;const n=it(t);return e.startsWith(n)?e:_t(n,e)}function ft(e,t){const n=Y(e),r={...et(n.search),...t};return n.search=st(r),pt(n)}function dt(e){return!e||e==="/"}function ht(e){return e&&e!=="/"}function _t(e,...t){let n=e||"";for(const r of t.filter(ht))n=n?at(n)+ut(r):r;return n}function Y(e="",t){if(!z(e,!0))return t?Y(t+e):D(e);const[n="",r,o=""]=(e.replace(/\\/g,"/").match(/([^:/]+:)?\/\/([^/@]+@)?(.*)/)||[]).splice(1),[l="",c=""]=(o.match(/([^/?#]*)(.*)?/)||[]).splice(1),{pathname:d,search:a,hash:s}=D(c);return{protocol:n,auth:r?r.substr(0,r.length-1):"",host:l,pathname:d,search:a,hash:s}}function D(e=""){const[t="",n="",r=""]=(e.match(/([^#?]*)(\?[^#]*)?(#.*)?/)||[]).splice(1);return{pathname:t,search:n,hash:r}}function pt(e){const t=e.pathname+(e.search?(e.search.startsWith("?")?"":"?")+e.search:"")+e.hash;return e.protocol?e.protocol+"//"+(e.auth?e.auth+"@":"")+e.host+t:t}class yt extends Error{constructor(){super(...arguments),this.name="FetchError"}}function mt(e,t,n){let r="";e&&n&&(r=`${n.status} ${n.statusText} (${e.toString()})`),t&&(r=`${t.message} (${r})`);const o=new yt(r);return Object.defineProperty(o,"request",{get(){return e}}),Object.defineProperty(o,"response",{get(){return n}}),Object.defineProperty(o,"data",{get(){return n&&n._data}}),Object.defineProperty(o,"status",{get(){return n&&n.status}}),Object.defineProperty(o,"statusText",{get(){return n&&n.statusText}}),Object.defineProperty(o,"statusCode",{get(){return n&&n.status}}),Object.defineProperty(o,"statusMessage",{get(){return n&&n.statusText}}),o}const gt=new Set(Object.freeze(["PATCH","POST","PUT","DELETE"]));function H(e="GET"){return gt.has(e.toUpperCase())}function Et(e){if(e===void 0)return!1;const t=typeof e;return t==="string"||t==="number"||t==="boolean"||t===null?!0:t!=="object"?!1:Array.isArray(e)?!0:e.constructor&&e.constructor.name==="Object"||typeof e.toJSON=="function"}const bt=new Set(["image/svg","application/xml","application/xhtml","application/html"]),vt=/^application\/(?:[\w!#$%&*`\-.^~]*\+)?json(;.+)?$/i;function wt(e=""){if(!e)return"json";const t=e.split(";").shift();return vt.test(t)?"json":bt.has(t)||t.startsWith("text/")?"text":"blob"}const Rt=new Set([408,409,425,429,500,502,503,504]);function X(e){const{fetch:t,Headers:n}=e;function r(c){const d=c.error&&c.error.name==="AbortError"||!1;if(c.options.retry!==!1&&!d){const s=typeof c.options.retry=="number"?c.options.retry:H(c.options.method)?0:1,f=c.response&&c.response.status||500;if(s>0&&Rt.has(f))return o(c.request,{...c.options,retry:s-1})}const a=mt(c.request,c.error,c.response);throw Error.captureStackTrace&&Error.captureStackTrace(a,o),a}const o=async function(d,a={}){const s={request:d,options:{...e.defaults,...a},response:void 0,error:void 0};s.options.onRequest&&await s.options.onRequest(s),typeof s.request=="string"&&(s.options.baseURL&&(s.request=lt(s.request,s.options.baseURL)),(s.options.query||s.options.params)&&(s.request=ft(s.request,{...s.options.params,...s.options.query})),s.options.body&&H(s.options.method)&&Et(s.options.body)&&(s.options.body=typeof s.options.body=="string"?s.options.body:JSON.stringify(s.options.body),s.options.headers=new n(s.options.headers),s.options.headers.has("content-type")||s.options.headers.set("content-type","application/json"),s.options.headers.has("accept")||s.options.headers.set("accept","application/json"))),s.response=await t(s.request,s.options).catch(async g=>(s.error=g,s.options.onRequestError&&await s.options.onRequestError(s),r(s)));const f=(s.options.parseResponse?"json":s.options.responseType)||wt(s.response.headers.get("content-type")||"");if(f==="json"){const g=await s.response.text(),w=s.options.parseResponse||Be;s.response._data=w(g)}else f==="stream"?s.response._data=s.response.body:s.response._data=await s.response[f]();return s.options.onResponse&&await s.options.onResponse(s),s.response.status>=400&&s.response.status<600?(s.options.onResponseError&&await s.options.onResponseError(s),r(s)):s.response},l=function(d,a){return o(d,a).then(s=>s._data)};return l.raw=o,l.create=(c={})=>X({...e,defaults:{...e.defaults,...c}}),l}const Z=function(){if(typeof globalThis<"u")return globalThis;if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("unable to locate global object")}(),xt=Z.fetch||(()=>Promise.reject(new Error("[ohmyfetch] global.fetch is not supported!"))),$t=Z.Headers,Tt=X({fetch:xt,Headers:$t}),Ct=Tt.create({baseURL:"https://se-proxy.azurewebsites.net/api/",retry:0,async onResponse({response:e}){const{useToast:t}=await L(()=>import("./app-972d0bec.js").then(r=>r.I),["assets/app-972d0bec.js","assets/index-cd88d4e6.css"]),n=t();typeof e._data=="string"&&n.error("OPPPPPPPS！Something wrong.")},async onResponseError({response:e}){const{useToast:t}=await L(()=>import("./app-972d0bec.js").then(r=>r.I),["assets/app-972d0bec.js","assets/index-cd88d4e6.css"]),n=t();n.error(`${e.status} ${e.statusText}`),e._data&&n.error(e._data.信息)}});async function Pt(e){const{useToast:t}=await L(()=>import("./app-972d0bec.js").then(l=>l.I),["assets/app-972d0bec.js","assets/index-cd88d4e6.css"]),n=t(),r={q:e.q||"",slice:e.slice||"0:10"};return await Ct("/search",{params:r}).catch(l=>{console.error(l),n.error("坏了！服务器坏了！")})}const St={p:"2",h:"screen"},kt={p:"l-2 lt-sm:l-0",class:"relative flex justify-start items-center lt-sm:mt-6"},jt=["src"],Lt=i("div",{class:"line","i-ri-heart-line":""},null,-1),Nt=i("div",{class:"fill","i-ri-heart-fill":"",text:"red"},null,-1),Ot=[Lt,Nt],qt={key:0,m:"l-24 lt-sm:l-0",p:"2",class:"max-w-2xl"},At={text:"left sm gray-500",m:"b-2"},It={key:1,text:"left",m:"t-8"},Ut={text:"red-500"},Ft={m:"t-8",text:"left"},Bt={p:"4"},Vt={class:"list-circle"},Dt=["href","title"],Ht=i("img",{src:qe,alt:"404ERR"},null,-1),Qt={key:2,m:"t-6 b-4",class:"pagination-container flex justify-center items-center"},Gt=i("div",{"i-ri-arrow-left-line":""},null,-1),Jt=[Gt],Kt=["onClick"],Mt=i("div",{"i-ri-arrow-right-line":""},null,-1),Wt=[Mt],zt={key:1,m:"t-10"},Yt=Q({__name:"search",setup(e){var I,U;const{t}=ne(),{enter:n}=re(),r=G(),o=oe(),l=ie(),c=v(()=>{var E;return((E=r.query.q)==null?void 0:E.toString())||""}),d=R(c.value);B(()=>c.value,()=>{l.setNewKeyword(c.value),d.value=c.value});const a=R((I=r.query.slice)==null?void 0:I.toString()),s=R(10),f=R(),g=v(()=>f.value&&f.value.分词||[d.value]);ae({title:v(()=>`${c.value} - ${t("sese.title")}`)});const w=async()=>{l.isLoading=!0;const E=await Pt({q:d.value,slice:a.value});l.isLoading=!1,f.value=E};ce(async()=>{w()});const y=R(a.value?parseInt((U=a.value)==null?void 0:U.split(":")[0])/s.value+1:1),T=E=>{y.value=E,a.value=`${(y.value-1)*s.value}:${y.value*s.value}`,o.push({path:"/search",query:{q:d.value,slice:a.value}}),w()};B(()=>l.savedKeyword,()=>{w()});const C=v(()=>{if(f.value&&f.value.总数){const E=Math.ceil(f.value.总数/s.value);return E<=10?E:10}else return 0}),A=()=>{y.value=1,a.value=`0:${s.value}`,n(d.value)};return(E,m)=>{const ee=Oe,te=de,se=Pe;return h(),_("div",St,[k(K,null,{default:J(()=>[u(l).isLoading?(h(),V(ee,{key:0})):x("v-if",!0)]),_:1}),i("div",kt,[i("a",{class:"cursor-pointer inline-flex justify-center lt-sm:absolute -top-5 left-5",m:"r-3 b-1",onClick:m[0]||(m[0]=()=>{u(o).push("/")})},[i("img",{class:"w-16 filter drop-shadow",src:u(ue),alt:"SOSO search"},null,8,jt)]),k(te,{modelValue:u(d),"onUpdate:modelValue":m[1]||(m[1]=p=>le(d)?d.value=p:null),class:"inline-flex",enter:()=>{A()}},null,8,["modelValue","enter"]),i("button",{m:"l-2",p:"2",class:"search-btn icon-btn flex justify-center items-center border rounded rounded-full !outline-none",hover:"border-red",onClick:m[2]||(m[2]=p=>A())},Ot)]),u(f)?(h(),_("div",qt,[i("div",At," 找到约 "+b(u(f).总数)+" 个结果 ",1),u(f).总数?(h(!0),_($,{key:0},j(u(f).结果,(p,F)=>(h(),V(se,{key:F,keywords:u(g),se:"",result:p},null,8,["keywords","result"]))),128)):(h(),_("div",It,[P(" 找不到和您查询的「"),i("strong",Ut,b(u(d)),1),P("」相符的内容或信息！ "),i("p",{class:"cursor-pointer hover:underline",text:"sm",m:"t-4",onClick:m[3]||(m[3]=p=>u(o).go(-1))}," 返回上一页 "),i("p",Ft,[P(" 建议： "),i("ul",Bt,[i("li",Vt,[i("a",{class:"hover:underline",href:`https://www.google.com/search?q=${u(d)}`,target:"_blank",title:u(d)}," 使用 Google 搜索 ",8,Dt)])]),Ht])])),u(C)?(h(),_("div",Qt,[u(y)>1?(h(),_("span",{key:0,class:"page-link",text:"sm",p:"r-1",m:"r-1",onClick:m[4]||(m[4]=p=>T(u(y)-1))},Jt)):x("v-if",!0),(h(!0),_($,null,j(u(C),p=>(h(),_("span",{key:p,p:"1",m:"1",class:fe(["pagination-page",u(y)===p?"text-black dark:text-white":"text-blue-600 dark:text-blue-500 cursor-pointer hover:underline"]),text:"sm",onClick:F=>u(y)===p?null:T(p)},b(p),11,Kt))),128)),u(y)<u(C)?(h(),_("span",{key:1,class:"page-link",text:"sm",p:"l-1",m:"l-1",onClick:m[5]||(m[5]=p=>T(u(y)+1))},Wt)):x("v-if",!0)])):x("v-if",!0)])):u(l).isLoading?x("v-if",!0):(h(),_("div",zt," 服务器不……不行了…… "))])}}});const Zt=q(Yt,[["__file","E:/Github Clone/soso-in/src/pages/search.vue"]]);export{Zt as default};
