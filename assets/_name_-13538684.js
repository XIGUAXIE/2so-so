import{D as h,m as _,e as d,d as x,k as b,i as y,E as g,G as f,o as u,c as i,a as e,g as v,t as r,f as s,F as w,r as C,w as S,z as E,v as V,_ as B}from"./app-972d0bec.js";const D=h("user",()=>{const t=_(""),a=_(new Set),m=d(()=>Array.from(a.value)),o=d(()=>m.value.filter(c=>c!==t.value));function n(c){t.value&&a.value.add(t.value),t.value=c}return{setNewName:n,otherNames:o,savedName:t}}),F={class:"text-4xl"},G={class:"text-sm opacity-50"},$={key:0,class:"text-sm mt-4"},q={class:"opacity-75"},z=x({__name:"[name]",props:{name:{type:String,required:!0}},setup(t){const a=t,m=b(),o=D(),{t:n}=y();return g(()=>{o.setNewName(a.name)}),(c,p)=>{const k=f("carbon-pedestrian"),N=f("router-link");return u(),i("div",null,[e("p",F,[v(k,{class:"inline-block"})]),e("p",null,r(s(n)("intro.hi",{name:a.name})),1),e("p",G,[e("em",null,r(s(n)("intro.dynamic-route")),1)]),s(o).otherNames.length?(u(),i("p",$,[e("span",q,r(s(n)("intro.aka"))+":",1),e("ul",null,[(u(!0),i(w,null,C(s(o).otherNames,l=>(u(),i("li",{key:l},[v(N,{to:`/hi/${l}`,replace:""},{default:S(()=>[E(r(l),1)]),_:2},1032,["to"])]))),128))])])):V("v-if",!0),e("div",null,[e("button",{class:"btn m-3 text-sm mt-6",onClick:p[0]||(p[0]=l=>s(m).back())},r(s(n)("button.back")),1)])])}}}),I=B(z,[["__file","E:/Github Clone/soso-in/src/pages/u/[name].vue"]]);export{I as default};
