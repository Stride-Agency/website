import{a as l,a$ as d,a0 as f,q as v,A as p,Q as g,bk as m,bl as h,bf as y,ab as i,C as _}from"./DHi1UYHD.js";const b=l({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(u){const{query:a}=d(u),n=f(()=>{var t;return typeof((t=a.value)==null?void 0:t.params)=="function"?a.value.params():a.value});if(!n.value&&v("dd-navigation").value){const{navigation:t}=p();return{navigation:t}}const{data:o}=await g(`content-navigation-${h(n.value)}`,()=>m(n.value));return{navigation:o}},render(u){const a=y(),{navigation:n}=u,o=e=>i(_,{to:e._path},()=>e.title),t=(e,r)=>i("ul",r?{"data-level":r}:null,e.map(s=>s.children?i("li",null,[o(s),t(s.children,r+1)]):i("li",null,o(s)))),c=e=>t(e,0);return a!=null&&a.default?a.default({navigation:n,...this.$attrs}):c(n)}}),q=b;export{q as default};