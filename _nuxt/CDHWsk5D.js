import{f as i}from"./CxYJgpPD.js";import{a as u,b8 as f,a0 as c,ab as r,L as d}from"./CPnbS0aC.js";const p=u({name:"MDCSlot",functional:!0,props:{name:{type:String,default:"default"},unwrap:{type:[Boolean,String],default:!1},use:{type:Function,default:void 0}},setup(t){const{parent:s}=d(),{default:n}=f(),a=c(()=>typeof t.unwrap=="string"?t.unwrap.split(" "):["*"]);return{fallbackSlot:n,tags:a,parent:s}},render({use:t,unwrap:s,fallbackSlot:n,tags:a,parent:e}){var l;try{let o=t;return typeof t=="string"&&(o=(e==null?void 0:e.slots[t])||((l=e==null?void 0:e.parent)==null?void 0:l.slots[t]),console.warn(`Please set :use="$slots.${t}" in <MDCSlot> component to enable reactivity`)),o?s?i(o(),a):[o()]:n?n():r("div")}catch{return r("div")}}}),g=u({props:{use:{type:Function,default:void 0},unwrap:{type:[Boolean,String],default:!1}},render(t){return r(p,t)}});export{g as default};