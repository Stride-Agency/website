import{a as c,a0 as d,f as p,P as i,w as r,h as b,W as l,n as g,O as s,a3 as u,a2 as f,b3 as h,a1 as v,b4 as x,k as m,b5 as y,b6 as w,aS as B}from"./CrfG-V0-.js";const P=c({__name:"AccordionContent",props:{forceMount:{type:Boolean},asChild:{type:Boolean},as:{},class:{}},setup(o){const a=o,n=d(()=>{const{class:e,...t}=a;return t});return(e,t)=>(p(),i(s(h),f(n.value,{class:"overflow-hidden transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down px-6"}),{default:r(()=>[b("div",{class:g(s(u)("pb-4 pt-0",a.class))},[l(e.$slots,"default")],2)]),_:3},16))}}),$=c({__name:"AccordionItem",props:{disabled:{type:Boolean},value:{},asChild:{type:Boolean},as:{},class:{}},setup(o){const a=o,n=d(()=>{const{class:t,..._}=a;return _}),e=v(n);return(t,_)=>(p(),i(s(x),f(s(e),{class:[s(u)(a.class),"bg-neutral-800 bg-opacity-50 border border-white border-opacity-10 rounded-2xl"]}),{default:r(()=>[l(t.$slots,"default")]),_:3},16,["class"]))}}),k=c({__name:"AccordionTrigger",props:{asChild:{type:Boolean},as:{},class:{}},setup(o){const a=o,n=d(()=>{const{class:e,...t}=a;return t});return(e,t)=>(p(),i(s(w),{class:"flex"},{default:r(()=>[m(s(y),f(n.value,{class:s(u)("px-6 flex flex-1 items-center justify-between py-4 text-2xl font-medium transition-all [&[data-state=open]>svg]:rotate-180",a.class)}),{default:r(()=>[l(e.$slots,"default"),l(e.$slots,"icon",{},()=>[m(s(B),{class:"size-8 mr-4 shrink-0 transition-transform duration-200"})])]),_:3},16,["class"])]),_:3}))}});export{$ as _,k as a,P as b};
