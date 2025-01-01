import{a as p,M as v,f as r,I as u,w as e,N as f,Q as w,R as B,H as o,S as N,by as z,U as $,k as n,bz as O,bA as P,O as S,W as y,bB as M,g,n as A,Y as D,ag as F,i as m,t as h,h as V,F as E,ai as H,a_ as T,D as j,m as I}from"./D-Z9-mnp.js";import L from"./D8iEiu6_.js";const R=p({__name:"Sheet",props:{open:{type:Boolean},defaultOpen:{type:Boolean},modal:{type:Boolean}},emits:["update:open"],setup(a,{emit:t}){const i=v(a,t);return(c,d)=>(r(),u(o(N),w(B(o(i))),{default:e(()=>[f(c.$slots,"default")]),_:3},16))}}),U=p({__name:"SheetClose",props:{asChild:{type:Boolean},as:{}},setup(a){const t=a;return(s,l)=>(r(),u(o(z),w(B(t)),{default:e(()=>[f(s.$slots,"default")]),_:3},16))}}),G=p({inheritAttrs:!1,__name:"SheetContent",props:{class:{},side:{},forceMount:{type:Boolean},trapFocus:{type:Boolean},disableOutsidePointerEvents:{type:Boolean},asChild:{type:Boolean},as:{}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside","openAutoFocus","closeAutoFocus"],setup(a,{emit:t}){const s=a,l=t,i=$(()=>{const{class:d,side:x,...b}=s;return b}),c=v(i,l);return(d,x)=>(r(),u(o(M),null,{default:e(()=>[n(o(O),{class:"fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"}),n(o(P),S({class:o(y)(o(W)({side:d.side}),s.class)},{...o(c),...d.$attrs}),{default:e(()=>[f(d.$slots,"default")]),_:3},16,["class"])]),_:3}))}}),K=p({__name:"SheetHeader",props:{class:{}},setup(a){const t=a;return(s,l)=>(r(),g("div",{class:A(o(y)("flex flex-col gap-y-2 text-center sm:text-left",t.class))},[f(s.$slots,"default")],2))}}),Q=p({__name:"SheetTitle",props:{asChild:{type:Boolean},as:{},class:{}},setup(a){const t=a,s=$(()=>{const{class:l,...i}=t;return i});return(l,i)=>(r(),u(o(D),S({class:o(y)("text-lg font-semibold text-slate-950 dark:text-slate-50",t.class)},s.value),{default:e(()=>[f(l.$slots,"default")]),_:3},16,["class"]))}}),W=F("fixed z-50 gap-4 bg-white p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500 dark:bg-slate-950",{variants:{side:{top:"inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",bottom:"inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",left:"inset-y-0 left-0 h-full border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",right:"inset-y-0 right-0 h-full border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"}},defaultVariants:{side:"right"}}),X={role:"list",class:"divide-y divide-[#ffffff17] mt-8 -mx-6"},Y=p({__name:"_MobileNavigation",props:{isMobileNavOpen:{type:Boolean,default:!1},navigation:{type:Array}},emits:["update:open"],setup(a){return(t,s)=>{const l=Q,i=L,c=T,d=U,x=K,b=j,C=G,k=R;return r(),u(k,{open:a.isMobileNavOpen,"onUpdate:open":s[0]||(s[0]=_=>t.$emit("update:open",_))},{default:e(()=>[n(C,{class:"max-w-[90%] w-[500px] border-[#ffffff17] px-6"},{default:e(()=>[n(x,{class:"flex justify-between flex-row"},{default:e(()=>[n(l,{class:"text-3xl text-left"},{default:e(()=>[m(h(t.$t("header.menu")),1)]),_:1}),n(d,null,{default:e(()=>[n(c,{variant:"glassmorphism",size:"sm"},{icon:e(()=>[n(i,{class:"size-5"})]),default:e(()=>[m(" "+h(t.$t("header.close")),1)]),_:1})]),_:1})]),_:1}),V("ul",X,[(r(!0),g(E,null,H(a.navigation,_=>(r(),g("li",null,[n(b,{class:"py-6 px-4 font-normal text-2xl mb-px inline-block w-full",to:_._path},{default:e(()=>[m(h(_.title),1)]),_:2},1032,["to"])]))),256))]),n(c,{variant:"primary",to:"/contact",class:"text-nowrap flex justify-center mt-8 -mx-3",size:"lg"},{default:e(()=>[m(h(t.$t("header.cta_button_text_contact_us_with_estimated_time")),1)]),_:1})]),_:1})]),_:1},8,["open"])}}}),Z=I(Y,[["__scopeId","data-v-b8bcf96a"]]);export{Z as default};