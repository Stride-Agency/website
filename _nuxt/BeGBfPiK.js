import{a as i,f as c,P as u,w as l,V as p,W as y,X as h,O as e,bD as _,$ as x,U as k,k as n,bE as C,bF as v,a1 as B,a2 as b,bH as O,h as $,bG as F,g as P,n as z,bI as E}from"./BPRbXq3f.js";import{_ as R,a as U,b as Y,c as q}from"./Cm2Lail9.js";import"./WD3eTI53.js";import"./cSgx0cT4.js";import"./UqS8jf3w.js";import"./BQrQb1ub.js";import"./CxYJgpPD.js";const G=i({__name:"DialogClose",props:{asChild:{type:Boolean},as:{}},setup(s){const o=s;return(t,r)=>(c(),u(e(_),y(h(o)),{default:l(()=>[p(t.$slots,"default")]),_:3},16))}}),K=i({__name:"DialogContent",props:{forceMount:{type:Boolean},trapFocus:{type:Boolean},disableOutsidePointerEvents:{type:Boolean},asChild:{type:Boolean},as:{},class:{}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside","openAutoFocus","closeAutoFocus"],setup(s,{emit:o}){const t=s,r=o,f=x(()=>{const{class:d,...a}=t;return a}),g=k(f,r);return(d,a)=>(c(),u(e(F),null,{default:l(()=>[n(e(C),{class:"fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"}),n(e(v),B(e(g),{class:e(b)("fixed left-1/2 top-1/2 z-50 grid w-full max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 border border-slate-200 bg-white p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg dark:border-slate-800 dark:bg-slate-950",t.class)}),{default:l(()=>[p(d.$slots,"default"),n(e(_),{class:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-slate-100 data-[state=open]:text-slate-500 dark:ring-offset-slate-950 dark:focus:ring-slate-300 dark:data-[state=open]:bg-slate-800 dark:data-[state=open]:text-slate-400"},{default:l(()=>[n(e(O),{class:"w-4 h-4"}),a[0]||(a[0]=$("span",{class:"sr-only"},"Close",-1))]),_:1})]),_:3},16,["class"])]),_:3}))}}),M=i({__name:"DialogFooter",props:{class:{}},setup(s){const o=s;return(t,r)=>(c(),P("div",{class:z(e(b)("flex flex-col-reverse sm:flex-row sm:justify-end sm:gap-x-2",o.class))},[p(t.$slots,"default")],2))}}),N=i({__name:"DialogScrollContent",props:{forceMount:{type:Boolean},trapFocus:{type:Boolean},disableOutsidePointerEvents:{type:Boolean},asChild:{type:Boolean},as:{},class:{}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside","openAutoFocus","closeAutoFocus"],setup(s,{emit:o}){const t=s,r=o,f=x(()=>{const{class:d,...a}=t;return a}),g=k(f,r);return(d,a)=>(c(),u(e(F),null,{default:l(()=>[n(e(C),{class:"fixed inset-0 z-50 grid place-items-center overflow-y-auto bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"},{default:l(()=>[n(e(v),B({class:e(b)("relative z-50 grid w-full max-w-lg my-8 gap-4 border border-slate-200 bg-white p-6 shadow-lg duration-200 sm:rounded-lg md:w-full dark:border-slate-800 dark:bg-slate-950",t.class)},e(g),{onPointerDownOutside:a[0]||(a[0]=w=>{const m=w.detail.originalEvent,D=m.target;(m.offsetX>D.clientWidth||m.offsetY>D.clientHeight)&&w.preventDefault()})}),{default:l(()=>[p(d.$slots,"default"),n(e(_),{class:"absolute top-3 right-3 p-0.5 transition-colors rounded-md hover:bg-slate-100 dark:hover:bg-slate-800"},{default:l(()=>[n(e(O),{class:"w-4 h-4"}),a[1]||(a[1]=$("span",{class:"sr-only"},"Close",-1))]),_:1})]),_:3},16,["class"])]),_:3})]),_:3}))}}),W=i({__name:"DialogTrigger",props:{asChild:{type:Boolean},as:{}},setup(s){const o=s;return(t,r)=>(c(),u(e(E),y(h(o)),{default:l(()=>[p(t.$slots,"default")]),_:3},16))}});export{R as Dialog,G as DialogClose,K as DialogContent,U as DialogDescription,M as DialogFooter,Y as DialogHeader,N as DialogScrollContent,q as DialogTitle,W as DialogTrigger};
