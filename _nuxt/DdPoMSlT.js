import{a as k,c as b,b4 as C,o as O,aa as M,b5 as w,f as t,g as e,F as S,ai as z,H as v,n as $,aV as _,I as L,a5 as V,U as I,b6 as j,h as r,t as x,j as h,W as T,k as y,w as B,i as E,a_ as R,K as F,m as N}from"./D-Z9-mnp.js";import{_ as D}from"./gvkfe0lQ.js";import{r as H}from"./DXE4qHLz.js";import"./CxYJgpPD.js";const X=["initial","enter"],G=k({__name:"BlurReveal",props:{duration:{default:1},delay:{default:2},blur:{default:"20px"},yOffset:{default:20},class:{}},setup(n){const a=n,l=b(null),c=b([]),d=C(),u=b([]);O(()=>{M(()=>{u.value=d.default?d.default():[]})});function f(){return{opacity:0,filter:`blur(${a.blur})`,y:a.yOffset,transition:{duration:0,easing:"easeInOut",delay:0}}}function i(o){return{opacity:1,filter:"blur(0px)",y:0,transition:{duration:a.duration*1e3,easing:"easeInOut",delay:a.delay*o*1e3}}}return(o,g)=>{const s=w("motion");return t(),e("div",{ref_key:"container",ref:l,class:$(a.class)},[(t(!0),e(S,null,z(v(u),(p,m)=>_((t(),e("div",{key:m,ref_for:!0,ref_key:"childElements",ref:c,initial:f(),enter:i(m)},[(t(),L(V(p)))],8,X)),[[s]])),128))],2)}}}),W={class:"flex"},A=["onMouseenter"],K={class:"relative z-30 text-base font-bold text-white-100"},P={class:"text-xs text-white-100"},J=["src","alt"],U=k({__name:"Avatars",props:{items:{}},setup(n){const a=b(null),l=b(0),c=I(()=>l.value/100*50),d=I(()=>l.value/100*50);function u(i,o){var p;a.value=o;const g=(p=i.target)==null?void 0:p.getBoundingClientRect(),s=g.width/2;l.value=i.clientX-g.left-s}function f(i){var s;const o=(s=i.target)==null?void 0:s.getBoundingClientRect(),g=o.width/2;l.value=i.clientX-o.left-g}return(i,o)=>{const g=w("motion");return t(),e("div",W,[(t(!0),e(S,null,z(i.items,s=>(t(),e("div",{key:s.id,class:"group relative -mr-4",onMouseenter:p=>u(p,s.id),onMouseleave:o[0]||(o[0]=p=>a.value=null),onMousemove:f},[v(a)===s.id?_((t(),e("div",{key:0,initial:{opacity:0,y:20,scale:.6},enter:{opacity:1,y:0,scale:1,transition:{type:"spring",stiffness:260,damping:10}},leave:{opacity:0,y:20,scale:.6},style:j({translate:`${v(d)}px`,rotate:`${v(c)}deg`}),class:"absolute -left-1/2 -top-16 z-50 flex translate-x-1/2 flex-col items-center justify-center whitespace-nowrap rounded-md bg-black px-4 py-2 text-xs shadow-xl"},[o[1]||(o[1]=r("div",{class:"absolute inset-x-10 -bottom-px z-30 h-px w-1/5 bg-gradient-to-r from-transparent via-emerald-500 to-transparent"},null,-1)),o[2]||(o[2]=r("div",{class:"absolute -bottom-px left-10 z-30 h-px w-2/5 bg-gradient-to-r from-transparent via-sky-500 to-transparent"},null,-1)),r("div",K,x(s.name),1),r("div",P,x(s.designation),1)],4)),[[g]]):h("",!0),r("img",{src:s.image,alt:s.name,class:"relative !m-0 size-14 rounded-full border-2 border-white-100 object-cover object-top !p-0 transition duration-500"},null,8,J)],40,A))),128))])}}}),q={class:"w-full py-12"},Q={class:"flex w-full flex-col items-center justify-center gap-4 px-4 md:px-8"},Y={key:0,class:"font-medium uppercase text-muted-foreground"},Z=k({__name:"StaticLogoCloud",props:{class:{},title:{},logos:{}},setup(n){const a=n;return(l,c)=>{const d=D;return t(),e("div",q,[r("div",Q,[a.title?(t(),e("div",Y,x(a.title),1)):h("",!0),r("div",{class:$(v(T)("grid grid-cols-2 gap-x-4 sm:grid-cols-4",a.class))},[(t(!0),e(S,null,z(a.logos,(u,f)=>(t(),L(d,{key:f,src:u.path,alt:u.name,class:"h-10 w-28 px-2 brightness-0 dark:invert object-contain aspect-[4/1]"},null,8,["src","alt"]))),128))],2)])])}}}),tt={class:"absolute inset-0 [transform:rotateX(var(--grid-angle))]"},et=k({__name:"RetroGrid",props:{angle:{default:65},class:{}},setup(n){const a=n;return(l,c)=>(t(),e("div",{class:$(v(T)("selection:pointer-events-none absolute size-full overflow-hidden opacity-50 [perspective:200px]",a.class)),style:j({"--grid-angle":`${a.angle}deg`})},[r("div",tt,[r("div",{class:$(v(T)("animate-grid","[background-repeat:repeat] [background-size:60px_60px] [height:300vh] [inset:0%_0px] [margin-left:-50%] [transform-origin:100%_0_0] [width:600vw]","[background-image:linear-gradient(to_right,rgba(0,0,0,0.3)_1px,transparent_0),linear-gradient(to_bottom,rgba(0,0,0,0.3)_1px,transparent_0)]","dark:[background-image:linear-gradient(to_right,rgba(255,255,255,0.2)_1px,transparent_0),linear-gradient(to_bottom,rgba(255,255,255,0.2)_1px,transparent_0)]"))},null,2)]),c[0]||(c[0]=r("div",{class:"absolute inset-0 bg-gradient-to-t from-white to-transparent dark:from-black to-90%"},null,-1))],6))}}),nt={class:"relative flex items-center overflow-hidden min-h-screen hero-gradient"},at={class:"font-medium text-neutral-100 text-4xl",delay:300},ot={key:0},st={key:1,class:"italic bg-text-highlight-1 text-transparent bg-clip-text text-8xl pr-[0.2em] mr-[0.2em] font-bold"},it={class:"text-xl",delay:2500},rt={class:"grid grid-cols-2 gap-8 justify-center"},lt={key:0,class:"flex justify-end",delay:2700},ct={class:"flex items-center space-x-8",delay:2900},dt={key:0},ut=k({__name:"Hero",props:{headingOne:{type:String},headingTwo:{type:String},ctaButtonText:{type:String},ctaButtonLink:{type:String},clientLogoText:{type:String},logoTitle:{type:String}},setup(n){const a=[{id:1,name:"Kaspar & Lukas",designation:"Founders of VISIO",image:"/images/kaspar-and-lukas-visio-official.webp"},{id:2,name:"Jörg Prowald",designation:"Founder of Bano24",image:"/images/joerg-prowald-bano24.webp"},{id:3,name:"Gianmaria Heering",designation:"Founder of Leadpros",image:"/images/gianmaria-heering-leadpros.jpg"}],l=[{name:"VISIO",path:"/images/visio-logo.webp"},{name:"Leadpros",path:"/images/leadpros-logo.png"},{name:"Tente",path:"/images/tente-logo.png"},{name:"Threes Physiyoga",path:"/images/threes-logo.png"}];return(c,d)=>{const u=G,f=R,i=U,o=Z,g=F,s=et,p=w("motion-pop"),m=w("motion-fade");return t(),e("section",nt,[y(g,{class:"text-center z-10 space-y-10",size:"sm"},{default:B(()=>[_((t(),e("h1",at,[y(u,{duration:1,delay:1.1},{default:B(()=>[n.headingOne?(t(),e("span",ot,x(n.headingOne),1)):h("",!0),n.headingTwo?(t(),e("mark",st,x(n.headingTwo),1)):h("",!0)]),_:1})])),[[p]]),_((t(),e("p",it,[H(c.$slots,"description",{},void 0,!0)])),[[m]]),_((t(),e("div",rt,[n.ctaButtonText&&n.ctaButtonLink?_((t(),e("div",lt,[y(f,{variant:"primary",to:n.ctaButtonLink,size:"lg"},{default:B(()=>[E(x(n.ctaButtonText),1)]),_:1},8,["to"])])),[[m]]):h("",!0),_((t(),e("div",ct,[y(i,{items:a}),n.clientLogoText?(t(),e("div",dt,x(n.clientLogoText),1)):h("",!0)])),[[m]])])),[[m]]),n.logoTitle?_((t(),L(o,{key:0,logos:l,title:n.logoTitle,delay:3100},null,8,["title"])),[[m]]):h("",!0)]),_:3}),d[0]||(d[0]=r("div",{class:"h-[200%] w-[200%] bg-hero-light-3 bg-no-repeat bg-cover bg-[position:bottom_50px_right_100px] absolute inset-0"},null,-1)),y(s)])}}}),ft=N(ut,[["__scopeId","data-v-a240bc86"]]);export{ft as default};
