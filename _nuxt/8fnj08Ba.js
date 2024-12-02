import{a as R,c as V,E as Se,o as Ae,G as $e,H as Z,f as g,g as b,F as ne,I as se,C as k,n as j,J as I,D as ae,K as xe,L as W,M as Me,w as K,h as w,N as F,j as U,k as G,O as ye,t as X,i as Ie}from"./BhTgoVSt.js";import{_ as Le}from"./0wr4MYtr.js";import{_ as Ge}from"./CfbFxild.js";import{f as Re}from"./CxYJgpPD.js";import{_ as Te}from"./DlAUqK2U.js";const je=["initial","enter"],Be=R({__name:"BlurReveal",props:{duration:{default:1},delay:{default:2},blur:{default:"20px"},yOffset:{default:20},class:{}},setup(e){const t=e,o=V(null),r=V([]),a=Se(),n=V([]);Ae(()=>{$e(()=>{n.value=a.default?a.default():[]})});function i(){return{opacity:0,filter:`blur(${t.blur})`,y:t.yOffset,transition:{duration:0,easing:"easeInOut",delay:0}}}function s(c){return{opacity:1,filter:"blur(0px)",y:0,transition:{duration:t.duration*1e3,easing:"easeInOut",delay:t.delay*c*1e3}}}return(c,u)=>{const d=Z("motion");return g(),b("div",{ref_key:"container",ref:o,class:j(t.class)},[(g(!0),b(ne,null,se(k(n),(m,x)=>I((g(),b("div",{key:x,ref_for:!0,ref_key:"childElements",ref:r,initial:i(),enter:s(x)},[(g(),ae(xe(m)))],8,je)),[[d]])),128))],2)}}}),Ee={key:0,class:"flex relative pointer-events-none font-medium"},Pe={key:0,class:"inline-block mr-2"},Ne={key:1},Oe=R({__name:"Button",props:{to:String,variant:{type:String,default:"primary"},full:{type:Boolean,default:!1},isLoading:{type:Boolean,default:!1},type:{type:String,default:"button"},disabled:{type:Boolean},download:{type:String,default:""}},setup(e){const t=Le,o=e,r=W(()=>o.to?t:"button"),a=W(()=>({"rounded-xl bg-purple text-white py-4 px-8 bg-gradient-to-r from-purple-800 to-purple-600 hover:from-purple-600 hover:to-purple-500 shadow-[inset_0_4px_4px_rgba(255,255,255,0.05),_0_2px_2px_rgba(21,9,84,0.2)] transition-all duration-300 ease-in-out":o.variant==="primary","w-full":o.full}));return(n,i)=>{const s=Me("LoadingSpinner");return g(),ae(xe(k(r)),{to:e.disabled?"":e.to,class:j(["relative overflow-hidden rounded-xl text-white py-4 px-8 transition-all duration-300 ease-in-out text-xl",k(a)]),type:k(r)==="button"?e.type:"",disabled:e.isLoading||e.disabled,"aria-disabled":e.disabled},{default:K(()=>[i[0]||(i[0]=w("span",{class:"absolute inset-0 bg-gradient-to-r from-purple-800 to-purple-600 transition-opacity duration-300 ease-in-out opacity-100 hover:opacity-0"},null,-1)),i[1]||(i[1]=w("span",{class:"absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-500 transition-opacity duration-300 ease-in-out opacity-0 hover:opacity-100"},null,-1)),e.isLoading?(g(),b("span",Ne,[G(s)])):(g(),b("span",Ee,[n.$slots.icon?(g(),b("span",Pe,[F(n.$slots,"icon")])):U("",!0),F(n.$slots,"default")]))]),_:3},8,["to","class","type","disabled","aria-disabled"])}}}),Ve={class:"flex"},We=["onMouseenter"],Fe={class:"relative z-30 text-base font-bold text-white"},Ue={class:"text-xs text-white"},Xe=["src","alt"],He=R({__name:"Avatars",props:{items:{}},setup(e){const t=V(null),o=V(0),r=W(()=>o.value/100*50),a=W(()=>o.value/100*50);function n(s,c){var m;t.value=c;const u=(m=s.target)==null?void 0:m.getBoundingClientRect(),d=u.width/2;o.value=s.clientX-u.left-d}function i(s){var d;const c=(d=s.target)==null?void 0:d.getBoundingClientRect(),u=c.width/2;o.value=s.clientX-c.left-u}return(s,c)=>{const u=Z("motion");return g(),b("div",Ve,[(g(!0),b(ne,null,se(s.items,d=>(g(),b("div",{key:d.id,class:"group relative -mr-4",onMouseenter:m=>n(m,d.id),onMouseleave:c[0]||(c[0]=m=>t.value=null),onMousemove:i},[k(t)===d.id?I((g(),b("div",{key:0,initial:{opacity:0,y:20,scale:.6},enter:{opacity:1,y:0,scale:1,transition:{type:"spring",stiffness:260,damping:10}},leave:{opacity:0,y:20,scale:.6},style:ye({translate:`${k(a)}px`,rotate:`${k(r)}deg`}),class:"absolute -left-1/2 -top-16 z-50 flex translate-x-1/2 flex-col items-center justify-center whitespace-nowrap rounded-md bg-black px-4 py-2 text-xs shadow-xl"},[c[1]||(c[1]=w("div",{class:"absolute inset-x-10 -bottom-px z-30 h-px w-1/5 bg-gradient-to-r from-transparent via-emerald-500 to-transparent"},null,-1)),c[2]||(c[2]=w("div",{class:"absolute -bottom-px left-10 z-30 h-px w-2/5 bg-gradient-to-r from-transparent via-sky-500 to-transparent"},null,-1)),w("div",Fe,X(d.name),1),w("div",Ue,X(d.designation),1)],4)),[[u]]):U("",!0),w("img",{src:d.image,alt:d.name,class:"relative !m-0 size-14 rounded-full border-2 border-white object-cover object-top !p-0 transition duration-500"},null,8,Xe)],40,We))),128))])}}});function ve(e){var t,o,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var a=e.length;for(t=0;t<a;t++)e[t]&&(o=ve(e[t]))&&(r&&(r+=" "),r+=o)}else for(o in e)e[o]&&(r&&(r+=" "),r+=o);return r}function Je(){for(var e,t,o=0,r="",a=arguments.length;o<a;o++)(e=arguments[o])&&(t=ve(e))&&(r&&(r+=" "),r+=t);return r}const ie="-",qe=e=>{const t=Ze(e),{conflictingClassGroups:o,conflictingClassGroupModifiers:r}=e;return{getClassGroupId:i=>{const s=i.split(ie);return s[0]===""&&s.length!==1&&s.shift(),we(s,t)||Ke(i)},getConflictingClassGroupIds:(i,s)=>{const c=o[i]||[];return s&&r[i]?[...c,...r[i]]:c}}},we=(e,t)=>{var i;if(e.length===0)return t.classGroupId;const o=e[0],r=t.nextPart.get(o),a=r?we(e.slice(1),r):void 0;if(a)return a;if(t.validators.length===0)return;const n=e.join(ie);return(i=t.validators.find(({validator:s})=>s(n)))==null?void 0:i.classGroupId},be=/^\[(.+)\]$/,Ke=e=>{if(be.test(e)){const t=be.exec(e)[1],o=t==null?void 0:t.substring(0,t.indexOf(":"));if(o)return"arbitrary.."+o}},Ze=e=>{const{theme:t,prefix:o}=e,r={nextPart:new Map,validators:[]};return Ye(Object.entries(e.classGroups),o).forEach(([n,i])=>{oe(i,r,n,t)}),r},oe=(e,t,o,r)=>{e.forEach(a=>{if(typeof a=="string"){const n=a===""?t:me(t,a);n.classGroupId=o;return}if(typeof a=="function"){if(Qe(a)){oe(a(r),t,o,r);return}t.validators.push({validator:a,classGroupId:o});return}Object.entries(a).forEach(([n,i])=>{oe(i,me(t,n),o,r)})})},me=(e,t)=>{let o=e;return t.split(ie).forEach(r=>{o.nextPart.has(r)||o.nextPart.set(r,{nextPart:new Map,validators:[]}),o=o.nextPart.get(r)}),o},Qe=e=>e.isThemeGetter,Ye=(e,t)=>t?e.map(([o,r])=>{const a=r.map(n=>typeof n=="string"?t+n:typeof n=="object"?Object.fromEntries(Object.entries(n).map(([i,s])=>[t+i,s])):n);return[o,a]}):e,De=e=>{if(e<1)return{get:()=>{},set:()=>{}};let t=0,o=new Map,r=new Map;const a=(n,i)=>{o.set(n,i),t++,t>e&&(t=0,r=o,o=new Map)};return{get(n){let i=o.get(n);if(i!==void 0)return i;if((i=r.get(n))!==void 0)return a(n,i),i},set(n,i){o.has(n)?o.set(n,i):a(n,i)}}},_e="!",et=e=>{const{separator:t,experimentalParseClassName:o}=e,r=t.length===1,a=t[0],n=t.length,i=s=>{const c=[];let u=0,d=0,m;for(let h=0;h<s.length;h++){let v=s[h];if(u===0){if(v===a&&(r||s.slice(h,h+n)===t)){c.push(s.slice(d,h)),d=h+n;continue}if(v==="/"){m=h;continue}}v==="["?u++:v==="]"&&u--}const x=c.length===0?s:s.substring(d),z=x.startsWith(_e),C=z?x.substring(1):x,y=m&&m>d?m-d:void 0;return{modifiers:c,hasImportantModifier:z,baseClassName:C,maybePostfixModifierPosition:y}};return o?s=>o({className:s,parseClassName:i}):i},tt=e=>{if(e.length<=1)return e;const t=[];let o=[];return e.forEach(r=>{r[0]==="["?(t.push(...o.sort(),r),o=[]):o.push(r)}),t.push(...o.sort()),t},ot=e=>({cache:De(e.cacheSize),parseClassName:et(e),...qe(e)}),rt=/\s+/,nt=(e,t)=>{const{parseClassName:o,getClassGroupId:r,getConflictingClassGroupIds:a}=t,n=[],i=e.trim().split(rt);let s="";for(let c=i.length-1;c>=0;c-=1){const u=i[c],{modifiers:d,hasImportantModifier:m,baseClassName:x,maybePostfixModifierPosition:z}=o(u);let C=!!z,y=r(C?x.substring(0,z):x);if(!y){if(!C){s=u+(s.length>0?" "+s:s);continue}if(y=r(x),!y){s=u+(s.length>0?" "+s:s);continue}C=!1}const h=tt(d).join(":"),v=m?h+_e:h,_=v+y;if(n.includes(_))continue;n.push(_);const E=a(y,C);for(let L=0;L<E.length;++L){const H=E[L];n.push(v+H)}s=u+(s.length>0?" "+s:s)}return s};function st(){let e=0,t,o,r="";for(;e<arguments.length;)(t=arguments[e++])&&(o=ke(t))&&(r&&(r+=" "),r+=o);return r}const ke=e=>{if(typeof e=="string")return e;let t,o="";for(let r=0;r<e.length;r++)e[r]&&(t=ke(e[r]))&&(o&&(o+=" "),o+=t);return o};function at(e,...t){let o,r,a,n=i;function i(c){const u=t.reduce((d,m)=>m(d),e());return o=ot(u),r=o.cache.get,a=o.cache.set,n=s,s(c)}function s(c){const u=r(c);if(u)return u;const d=nt(c,o);return a(c,d),d}return function(){return n(st.apply(null,arguments))}}const p=e=>{const t=o=>o[e]||[];return t.isThemeGetter=!0,t},Ce=/^\[(?:([a-z-]+):)?(.+)\]$/i,it=/^\d+\/\d+$/,lt=new Set(["px","full","screen"]),ct=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,dt=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,ut=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,pt=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,gt=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,A=e=>T(e)||lt.has(e)||it.test(e),$=e=>B(e,"length",wt),T=e=>!!e&&!Number.isNaN(Number(e)),te=e=>B(e,"number",T),N=e=>!!e&&Number.isInteger(Number(e)),ft=e=>e.endsWith("%")&&T(e.slice(0,-1)),l=e=>Ce.test(e),M=e=>ct.test(e),bt=new Set(["length","size","percentage"]),mt=e=>B(e,bt,ze),ht=e=>B(e,"position",ze),xt=new Set(["image","url"]),yt=e=>B(e,xt,kt),vt=e=>B(e,"",_t),O=()=>!0,B=(e,t,o)=>{const r=Ce.exec(e);return r?r[1]?typeof t=="string"?r[1]===t:t.has(r[1]):o(r[2]):!1},wt=e=>dt.test(e)&&!ut.test(e),ze=()=>!1,_t=e=>pt.test(e),kt=e=>gt.test(e),Ct=()=>{const e=p("colors"),t=p("spacing"),o=p("blur"),r=p("brightness"),a=p("borderColor"),n=p("borderRadius"),i=p("borderSpacing"),s=p("borderWidth"),c=p("contrast"),u=p("grayscale"),d=p("hueRotate"),m=p("invert"),x=p("gap"),z=p("gradientColorStops"),C=p("gradientColorStopPositions"),y=p("inset"),h=p("margin"),v=p("opacity"),_=p("padding"),E=p("saturate"),L=p("scale"),H=p("sepia"),le=p("skew"),ce=p("space"),de=p("translate"),Q=()=>["auto","contain","none"],Y=()=>["auto","hidden","clip","visible","scroll"],D=()=>["auto",l,t],f=()=>[l,t],ue=()=>["",A,$],J=()=>["auto",T,l],pe=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],q=()=>["solid","dashed","dotted","double","none"],ge=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],ee=()=>["start","end","center","between","around","evenly","stretch"],P=()=>["","0",l],fe=()=>["auto","avoid","all","avoid-page","page","left","right","column"],S=()=>[T,l];return{cacheSize:500,separator:":",theme:{colors:[O],spacing:[A,$],blur:["none","",M,l],brightness:S(),borderColor:[e],borderRadius:["none","","full",M,l],borderSpacing:f(),borderWidth:ue(),contrast:S(),grayscale:P(),hueRotate:S(),invert:P(),gap:f(),gradientColorStops:[e],gradientColorStopPositions:[ft,$],inset:D(),margin:D(),opacity:S(),padding:f(),saturate:S(),scale:S(),sepia:P(),skew:S(),space:f(),translate:f()},classGroups:{aspect:[{aspect:["auto","square","video",l]}],container:["container"],columns:[{columns:[M]}],"break-after":[{"break-after":fe()}],"break-before":[{"break-before":fe()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...pe(),l]}],overflow:[{overflow:Y()}],"overflow-x":[{"overflow-x":Y()}],"overflow-y":[{"overflow-y":Y()}],overscroll:[{overscroll:Q()}],"overscroll-x":[{"overscroll-x":Q()}],"overscroll-y":[{"overscroll-y":Q()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[y]}],"inset-x":[{"inset-x":[y]}],"inset-y":[{"inset-y":[y]}],start:[{start:[y]}],end:[{end:[y]}],top:[{top:[y]}],right:[{right:[y]}],bottom:[{bottom:[y]}],left:[{left:[y]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",N,l]}],basis:[{basis:D()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",l]}],grow:[{grow:P()}],shrink:[{shrink:P()}],order:[{order:["first","last","none",N,l]}],"grid-cols":[{"grid-cols":[O]}],"col-start-end":[{col:["auto",{span:["full",N,l]},l]}],"col-start":[{"col-start":J()}],"col-end":[{"col-end":J()}],"grid-rows":[{"grid-rows":[O]}],"row-start-end":[{row:["auto",{span:[N,l]},l]}],"row-start":[{"row-start":J()}],"row-end":[{"row-end":J()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",l]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",l]}],gap:[{gap:[x]}],"gap-x":[{"gap-x":[x]}],"gap-y":[{"gap-y":[x]}],"justify-content":[{justify:["normal",...ee()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...ee(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...ee(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[_]}],px:[{px:[_]}],py:[{py:[_]}],ps:[{ps:[_]}],pe:[{pe:[_]}],pt:[{pt:[_]}],pr:[{pr:[_]}],pb:[{pb:[_]}],pl:[{pl:[_]}],m:[{m:[h]}],mx:[{mx:[h]}],my:[{my:[h]}],ms:[{ms:[h]}],me:[{me:[h]}],mt:[{mt:[h]}],mr:[{mr:[h]}],mb:[{mb:[h]}],ml:[{ml:[h]}],"space-x":[{"space-x":[ce]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[ce]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",l,t]}],"min-w":[{"min-w":[l,t,"min","max","fit"]}],"max-w":[{"max-w":[l,t,"none","full","min","max","fit","prose",{screen:[M]},M]}],h:[{h:[l,t,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[l,t,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[l,t,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[l,t,"auto","min","max","fit"]}],"font-size":[{text:["base",M,$]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",te]}],"font-family":[{font:[O]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",l]}],"line-clamp":[{"line-clamp":["none",T,te]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",A,l]}],"list-image":[{"list-image":["none",l]}],"list-style-type":[{list:["none","disc","decimal",l]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[v]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[v]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...q(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",A,$]}],"underline-offset":[{"underline-offset":["auto",A,l]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:f()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",l]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",l]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[v]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...pe(),ht]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",mt]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},yt]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[C]}],"gradient-via-pos":[{via:[C]}],"gradient-to-pos":[{to:[C]}],"gradient-from":[{from:[z]}],"gradient-via":[{via:[z]}],"gradient-to":[{to:[z]}],rounded:[{rounded:[n]}],"rounded-s":[{"rounded-s":[n]}],"rounded-e":[{"rounded-e":[n]}],"rounded-t":[{"rounded-t":[n]}],"rounded-r":[{"rounded-r":[n]}],"rounded-b":[{"rounded-b":[n]}],"rounded-l":[{"rounded-l":[n]}],"rounded-ss":[{"rounded-ss":[n]}],"rounded-se":[{"rounded-se":[n]}],"rounded-ee":[{"rounded-ee":[n]}],"rounded-es":[{"rounded-es":[n]}],"rounded-tl":[{"rounded-tl":[n]}],"rounded-tr":[{"rounded-tr":[n]}],"rounded-br":[{"rounded-br":[n]}],"rounded-bl":[{"rounded-bl":[n]}],"border-w":[{border:[s]}],"border-w-x":[{"border-x":[s]}],"border-w-y":[{"border-y":[s]}],"border-w-s":[{"border-s":[s]}],"border-w-e":[{"border-e":[s]}],"border-w-t":[{"border-t":[s]}],"border-w-r":[{"border-r":[s]}],"border-w-b":[{"border-b":[s]}],"border-w-l":[{"border-l":[s]}],"border-opacity":[{"border-opacity":[v]}],"border-style":[{border:[...q(),"hidden"]}],"divide-x":[{"divide-x":[s]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[s]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[v]}],"divide-style":[{divide:q()}],"border-color":[{border:[a]}],"border-color-x":[{"border-x":[a]}],"border-color-y":[{"border-y":[a]}],"border-color-s":[{"border-s":[a]}],"border-color-e":[{"border-e":[a]}],"border-color-t":[{"border-t":[a]}],"border-color-r":[{"border-r":[a]}],"border-color-b":[{"border-b":[a]}],"border-color-l":[{"border-l":[a]}],"divide-color":[{divide:[a]}],"outline-style":[{outline:["",...q()]}],"outline-offset":[{"outline-offset":[A,l]}],"outline-w":[{outline:[A,$]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:ue()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[v]}],"ring-offset-w":[{"ring-offset":[A,$]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",M,vt]}],"shadow-color":[{shadow:[O]}],opacity:[{opacity:[v]}],"mix-blend":[{"mix-blend":[...ge(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":ge()}],filter:[{filter:["","none"]}],blur:[{blur:[o]}],brightness:[{brightness:[r]}],contrast:[{contrast:[c]}],"drop-shadow":[{"drop-shadow":["","none",M,l]}],grayscale:[{grayscale:[u]}],"hue-rotate":[{"hue-rotate":[d]}],invert:[{invert:[m]}],saturate:[{saturate:[E]}],sepia:[{sepia:[H]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[o]}],"backdrop-brightness":[{"backdrop-brightness":[r]}],"backdrop-contrast":[{"backdrop-contrast":[c]}],"backdrop-grayscale":[{"backdrop-grayscale":[u]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[d]}],"backdrop-invert":[{"backdrop-invert":[m]}],"backdrop-opacity":[{"backdrop-opacity":[v]}],"backdrop-saturate":[{"backdrop-saturate":[E]}],"backdrop-sepia":[{"backdrop-sepia":[H]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[i]}],"border-spacing-x":[{"border-spacing-x":[i]}],"border-spacing-y":[{"border-spacing-y":[i]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",l]}],duration:[{duration:S()}],ease:[{ease:["linear","in","out","in-out",l]}],delay:[{delay:S()}],animate:[{animate:["none","spin","ping","pulse","bounce",l]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[L]}],"scale-x":[{"scale-x":[L]}],"scale-y":[{"scale-y":[L]}],rotate:[{rotate:[N,l]}],"translate-x":[{"translate-x":[de]}],"translate-y":[{"translate-y":[de]}],"skew-x":[{"skew-x":[le]}],"skew-y":[{"skew-y":[le]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",l]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",l]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":f()}],"scroll-mx":[{"scroll-mx":f()}],"scroll-my":[{"scroll-my":f()}],"scroll-ms":[{"scroll-ms":f()}],"scroll-me":[{"scroll-me":f()}],"scroll-mt":[{"scroll-mt":f()}],"scroll-mr":[{"scroll-mr":f()}],"scroll-mb":[{"scroll-mb":f()}],"scroll-ml":[{"scroll-ml":f()}],"scroll-p":[{"scroll-p":f()}],"scroll-px":[{"scroll-px":f()}],"scroll-py":[{"scroll-py":f()}],"scroll-ps":[{"scroll-ps":f()}],"scroll-pe":[{"scroll-pe":f()}],"scroll-pt":[{"scroll-pt":f()}],"scroll-pr":[{"scroll-pr":f()}],"scroll-pb":[{"scroll-pb":f()}],"scroll-pl":[{"scroll-pl":f()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",l]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[A,$,te]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}},zt=at(Ct);function re(...e){return zt(Je(e))}const St={class:"w-full py-12"},At={class:"flex w-full flex-col items-center justify-center gap-4 px-4 md:px-8"},$t={key:0,class:"font-medium uppercase text-muted-foreground"},Mt=R({__name:"StaticLogoCloud",props:{class:{},title:{},logos:{}},setup(e){const t=e;return(o,r)=>{const a=Ge;return g(),b("div",St,[w("div",At,[t.title?(g(),b("div",$t,X(t.title),1)):U("",!0),w("div",{class:j(k(re)("grid grid-cols-2 gap-x-4 sm:grid-cols-4",t.class))},[(g(!0),b(ne,null,se(t.logos,(n,i)=>(g(),ae(a,{key:i,src:n.path,alt:n.name,class:"h-10 w-28 px-2 brightness-0 dark:invert object-contain aspect-[4/1]"},null,8,["src","alt"]))),128))],2)])])}}}),It=R({__name:"Container",props:{size:{type:String,default:"xl"}},setup(e){const t=e,o=W(()=>{switch(t.size){case"sm":return"w-full sm:max-w-[54rem]";case"xl":return"";default:return""}});return(r,a)=>(g(),b("div",{class:j(["px-4 sm:px-6 lg:px-8 mx-auto",k(o)])},[F(r.$slots,"default")],2))}}),Lt={class:"absolute inset-0 [transform:rotateX(var(--grid-angle))]"},Gt=R({__name:"RetroGrid",props:{angle:{default:65},class:{}},setup(e){const t=e;return(o,r)=>(g(),b("div",{class:j(k(re)("selection:pointer-events-none absolute size-full overflow-hidden opacity-50 [perspective:200px]",t.class)),style:ye({"--grid-angle":`${t.angle}deg`})},[w("div",Lt,[w("div",{class:j(k(re)("animate-grid","[background-repeat:repeat] [background-size:60px_60px] [height:300vh] [inset:0%_0px] [margin-left:-50%] [transform-origin:100%_0_0] [width:600vw]","[background-image:linear-gradient(to_right,rgba(0,0,0,0.3)_1px,transparent_0),linear-gradient(to_bottom,rgba(0,0,0,0.3)_1px,transparent_0)]","dark:[background-image:linear-gradient(to_right,rgba(255,255,255,0.2)_1px,transparent_0),linear-gradient(to_bottom,rgba(255,255,255,0.2)_1px,transparent_0)]"))},null,2)]),r[0]||(r[0]=w("div",{class:"absolute inset-0 bg-gradient-to-t from-white to-transparent dark:from-black to-90%"},null,-1))],6))}}),he=(e,t,o,...r)=>e[t]?F({...e,[t]:()=>Re(e[t](),o==null?void 0:o.unwrap)},t,o,...r):F(e,t,o,...r),Rt={class:"relative flex items-center overflow-hidden min-h-screen hero-gradient"},Tt={class:"font-medium text-neutral-100 text-4xl",delay:300},jt={class:"text-xl",delay:2500},Bt={class:"grid grid-cols-2 gap-8 justify-center"},Et={key:0,class:"flex justify-end",delay:2700},Pt={class:"flex items-center space-x-8",delay:2900},Nt={key:0},Ot=R({__name:"Hero",props:{CTAButtonText:{type:String},CTAButtonLink:{type:String},clientLogoText:{type:String}},setup(e){const t=[{id:1,name:"Kaspar & Lukas",designation:"Founders of VISIO",image:"/images/kaspar-and-lukas-visio-official.webp"},{id:2,name:"Jörg Prowald",designation:"Founder of Bano24",image:"/images/joerg-prowald-bano24.webp"},{id:3,name:"Gianmaria Heering",designation:"Founder of Leadpros",image:"/images/gianmaria-heering-leadpros.jpg"}],o=[{name:"VISIO",path:"/images/visio-logo.webp"},{name:"Leadpros",path:"/images/leadpros-logo.png"},{name:"Tente",path:"/images/tente-logo.png"},{name:"Threes Physiyoga",path:"/images/threes-logo.png"}];return(r,a)=>{const n=Be,i=Oe,s=He,c=Mt,u=It,d=Gt,m=Z("motion-pop"),x=Z("motion-fade");return g(),b("section",Rt,[G(u,{class:"text-center z-10 space-y-10",size:"sm"},{default:K(()=>[I((g(),b("h1",Tt,[G(n,{duration:1,delay:1.1},{default:K(()=>[he(r.$slots,"heading",{},void 0,!0)]),_:3})])),[[m]]),I((g(),b("p",jt,[he(r.$slots,"description",{},void 0,!0)])),[[x]]),I((g(),b("div",Bt,[e.CTAButtonText?I((g(),b("div",Et,[G(i,{variant:"primary",to:e.CTAButtonLink},{default:K(()=>[Ie(X(e.CTAButtonText),1)]),_:1},8,["to"])])),[[x]]):U("",!0),I((g(),b("div",Pt,[G(s,{items:t}),e.clientLogoText?(g(),b("div",Nt,X(e.clientLogoText),1)):U("",!0)])),[[x]])])),[[x]]),I(G(c,{logos:o,title:"From Startups to Industry Leaders",delay:3100},null,512),[[x]])]),_:3}),a[0]||(a[0]=w("div",{class:"testsvg h-screen w-screen bg-hero-light bg-no-repeat bg-cover absolute"},null,-1)),G(d)])}}}),Ht=Te(Ot,[["__scopeId","data-v-1dce9a41"]]);export{Ht as default};