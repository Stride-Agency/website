import{a as u,M as i,S as f,a1 as r,a6 as c,a5 as d}from"./D2msD6U-.js";const p=u({name:"MDCSlot",functional:!0,props:{name:{type:String,default:"default"},unwrap:{type:[Boolean,String],default:!1},use:{type:Function,default:void 0}},setup(t){const{parent:a}=d(),{default:n}=i(),s=f(()=>typeof t.unwrap=="string"?t.unwrap.split(" "):["*"]);return{fallbackSlot:n,tags:s,parent:a}},render({use:t,unwrap:a,fallbackSlot:n,tags:s,parent:e}){var l;try{let o=t;return typeof t=="string"&&(o=(e==null?void 0:e.slots[t])||((l=e==null?void 0:e.parent)==null?void 0:l.slots[t]),console.warn(`Please set :use="$slots.${t}" in <MDCSlot> component to enable reactivity`)),o?a?c(o(),s):[o()]:n?n():r("div")}catch{return r("div")}}}),y=u({props:{use:{type:Function,default:void 0},unwrap:{type:[Boolean,String],default:!1}},render(t){return r(p,t)}});export{y as default};
