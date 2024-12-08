import{a as p,P as v,f as r,I as u,w as e,L as f,Q as w,H as o,R as y,aE as N,M as $,N as B,aF as z,g as b,n as O,aG as P,K as S,k as n,aH as F,aI as M,aJ as V,aK as A,i as m,t as h,h as D,F as H,a2 as E,a6 as I,D as K,m as L}from"./4avsf2S0.js";import T from"./DFTZGcQG.js";const j=p({__name:"SheetTitle",props:{asChild:{type:Boolean},as:{},class:{}},setup(a){const t=a,s=v(()=>{const{class:l,...i}=t;return i});return(l,i)=>(r(),u(o(N),w({class:o(y)("text-lg font-semibold text-slate-950 dark:text-slate-50",t.class)},s.value),{default:e(()=>[f(l.$slots,"default")]),_:3},16,["class"]))}}),R=p({__name:"SheetClose",props:{asChild:{type:Boolean},as:{}},setup(a){const t=a;return(s,l)=>(r(),u(o(z),$(B(t)),{default:e(()=>[f(s.$slots,"default")]),_:3},16))}}),U=p({__name:"SheetHeader",props:{class:{}},setup(a){const t=a;return(s,l)=>(r(),b("div",{class:O(o(y)("flex flex-col gap-y-2 text-center sm:text-left",t.class))},[f(s.$slots,"default")],2))}}),G=P("fixed z-50 gap-4 bg-white p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500 dark:bg-slate-950",{variants:{side:{top:"inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",bottom:"inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",left:"inset-y-0 left-0 h-full border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",right:"inset-y-0 right-0 h-full border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"}},defaultVariants:{side:"right"}}),J=p({inheritAttrs:!1,__name:"SheetContent",props:{class:{},side:{},forceMount:{type:Boolean},trapFocus:{type:Boolean},disableOutsidePointerEvents:{type:Boolean},asChild:{type:Boolean},as:{}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside","openAutoFocus","closeAutoFocus"],setup(a,{emit:t}){const s=a,l=t,i=v(()=>{const{class:d,side:x,...g}=s;return g}),c=S(i,l);return(d,x)=>(r(),u(o(V),null,{default:e(()=>[n(o(F),{class:"fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"}),n(o(M),w({class:o(y)(o(G)({side:d.side}),s.class)},{...o(c),...d.$attrs}),{default:e(()=>[f(d.$slots,"default")]),_:3},16,["class"])]),_:3}))}}),Q=p({__name:"Sheet",props:{open:{type:Boolean},defaultOpen:{type:Boolean},modal:{type:Boolean}},emits:["update:open"],setup(a,{emit:t}){const i=S(a,t);return(c,d)=>(r(),u(o(A),$(B(o(i))),{default:e(()=>[f(c.$slots,"default")]),_:3},16))}}),X={role:"list",class:"divide-y divide-[#ffffff17] mt-8 -mx-6"},Z=p({__name:"_MobileNavigation",props:{isMobileNavOpen:{type:Boolean,default:!1},navigation:{type:Array}},emits:["update:open"],setup(a){return(t,s)=>{const l=j,i=T,c=I,d=R,x=U,g=K,C=J,k=Q;return r(),u(k,{open:a.isMobileNavOpen,"onUpdate:open":s[0]||(s[0]=_=>t.$emit("update:open",_))},{default:e(()=>[n(C,{class:"max-w-[90%] w-[500px] border-[#ffffff17] px-6"},{default:e(()=>[n(x,{class:"flex justify-between flex-row"},{default:e(()=>[n(l,{class:"text-3xl text-left"},{default:e(()=>[m(h(t.$t("header.menu")),1)]),_:1}),n(d,null,{default:e(()=>[n(c,{variant:"glassmorphism",size:"sm"},{icon:e(()=>[n(i,{class:"size-5"})]),default:e(()=>[m(" "+h(t.$t("header.close")),1)]),_:1})]),_:1})]),_:1}),D("ul",X,[(r(!0),b(H,null,E(a.navigation,_=>(r(),b("li",null,[n(g,{class:"py-6 px-4 font-normal text-2xl mb-px inline-block w-full",to:_._path},{default:e(()=>[m(h(_.title),1)]),_:2},1032,["to"])]))),256))]),n(c,{variant:"primary",to:"/contact",class:"text-nowrap flex justify-center mt-8 -mx-3",size:"lg"},{default:e(()=>[m(h(t.$t("header.cta_button_text_contact_us_with_estimated_time")),1)]),_:1})]),_:1})]),_:1},8,["open"])}}}),Y=L(Z,[["__scopeId","data-v-b8bcf96a"]]);export{Y as default};
