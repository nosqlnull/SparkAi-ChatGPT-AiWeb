import{h as Z,g as U,r as w,s as ee,bi as te,av as K,E as n,F as u,G as i,Y as b,X as M,N as e,Q as R,R as se,M as l,_ as p,a1 as B,W as F,$ as v,O as G,a7 as oe,a6 as H,a3 as J,ay as le,a4 as Q,k as C,w as z,K as ae,aw as ne,H as ie,J as re,a5 as ce,ae as P,P as W,al as ue,bj as de}from"./index-09938545.js";import{N as pe}from"./Popconfirm-dab30509.js";import{N as q}from"./NumberAnimation-52cc985b.js";import{N as fe}from"./LayoutSider-fe172ec8.js";const he=Object.assign(Object.assign({},Z.props),{trigger:String,xScrollable:Boolean,onScroll:Function,size:Number}),ye=U({name:"Scrollbar",props:he,setup(){const $=w(null);return Object.assign(Object.assign({},{scrollTo:(...d)=>{var r;(r=$.value)===null||r===void 0||r.scrollTo(d[0],d[1])},scrollBy:(...d)=>{var r;(r=$.value)===null||r===void 0||r.scrollBy(d[0],d[1])}}),{scrollbarInstRef:$})},render(){return ee(te,Object.assign({ref:"scrollbarInstRef"},this.$props),this.$slots)}}),me=ye;function _e($,f){let d;return(...r)=>{const h=()=>{clearTimeout(d),$(...r)};clearTimeout(d),d=setTimeout(h,f)}}const ve={class:"mb-2 text-xs text-neutral-400 font-bold"},ke={class:"ml-1"},be=["onClick"],ge={class:"relative flex-1 overflow-hidden break-all text-ellipsis whitespace-nowrap"},xe={key:1},Se={key:0,class:"absolute z-10 flex visible right-1"},we=["onClick"],Ce={class:"p-1"},$e={key:0,class:"p-1"},Ie={class:"p-1"},L=U({__name:"ListItem",props:{dataSources:null,title:null},emits:["update","delete","sticky","select"],setup($,{emit:f}){const d=$,r=d.dataSources,h=K();async function m(o){f("select",o)}function _(o,s,c){c==null||c.stopPropagation(),o.isEdit=s}async function k(o,s){s==null||s.stopPropagation(),await h.updateGroupInfo({isSticky:!o.isSticky,groupId:o.uuid}),await h.queryMyGroup()}async function y(o,s){s==null||s.stopPropagation(),f("delete",o)}const T=_e(y,600);async function g(o){const{uuid:s,title:c}=o;o.isEdit=!1,await h.updateGroupInfo({groupId:s,title:c}),await h.queryMyGroup()}async function N(o,s){s==null||s.stopPropagation(),s.key==="Enter"&&g(o)}function A(o,s){s==null||s.stopPropagation(),g(o)}function D(o){return h.active===o}return(o,s)=>{var c;return n(),u(R,null,[i("p",ve,[b(M(d.title)+" ",1),i("span",ke,"("+M((c=e(r))==null?void 0:c.length)+")",1)]),(n(!0),u(R,null,se(e(r),a=>(n(),u("div",{key:`${a.uuid}`},[i("a",{class:oe(["relative flex items-center gap-3 px-3 py-2 break-all border rounded-md cursor-pointer hover:bg-neutral-100 group dark:border-neutral-800 dark:hover:bg-[#24272e]",D(a.uuid)&&["border-[#3076FD]","bg-neutral-100","text-[#3076FD]","dark:bg-[#24272e]","dark:border-[#4b9e5f]","pr-20"]]),onClick:t=>m(a)},[i("span",null,[l(e(p),{icon:a.isSticky?"ri:pushpin-2-line":a.appId?"icon-park-outline:application-one":"ri:message-3-line"},null,8,["icon"])]),i("div",ge,[a.isEdit?(n(),B(e(F),{key:0,value:a.title,"onUpdate:value":t=>a.title=t,size:"tiny",onKeypress:t=>N(a,t)},null,8,["value","onUpdate:value","onKeypress"])):(n(),u("span",xe,M(a.title),1))]),D(a.uuid)?(n(),u("div",Se,[a.isEdit?(n(),u("button",{key:0,class:"p-1",onClick:t=>A(a,t)},[l(e(p),{icon:"ri:save-line"})],8,we)):(n(),u(R,{key:1},[i("button",Ce,[l(e(p),{icon:a.isSticky?"ri:unpin-line":"ri:pushpin-line",onClick:t=>k(a,t)},null,8,["icon","onClick"])]),a.appId?v("",!0):(n(),u("button",$e,[l(e(p),{icon:"ri:edit-line",onClick:t=>_(a,!0,t)},null,8,["onClick"])])),l(e(pe),{placement:"bottom",onPositiveClick:t=>e(T)(a,t)},{trigger:G(()=>[i("button",Ie,[l(e(p),{icon:"ri:delete-bin-line"})])]),default:G(()=>[b(" "+M(o.$t("chat.deleteHistoryConfirm")),1)]),_:2},1032,["onPositiveClick"])],64))])):v("",!0)],10,be)]))),128))],64)}}}),Te={class:"flex flex-col gap-2 text-sm"},De={key:0,class:"flex flex-col items-center mt-4 text-center text-neutral-300"},Ge=U({__name:"List",setup($){const{isMobile:f}=H(),d=J(),r=le(),h=Q(),m=K(),_=w(100),k=C(()=>m.groupList),y=C(()=>m.groupKeyWord);z(k,()=>_.value=_.value+1),z(y,()=>_.value=_.value+1);function T(t){const j=new Date(t).getTime()+8*60*60*1e3;return new Date(j).getTime()}const g=new Date().setHours(0,0,0,0),N=C(()=>k.value.filter(t=>y.value?t.title.includes(y.value)&&t.isSticky:t.isSticky)),A=C(()=>k.value.filter(t=>y.value?t.title.includes(y.value)&&!t.isSticky&&t.appId:!t.isSticky&&t.appId)),D=C(()=>k.value.filter(t=>y.value?t.title.includes(y.value)&&!t.isSticky&&!t.appId&&T(t.createdAt)>=g:!t.isSticky&&!t.appId&&T(t.createdAt)>=g)),o=C(()=>k.value.filter(t=>y.value?t.title.includes(y.value)&&!t.isSticky&&!t.appId&&T(t.createdAt)<g:!t.isSticky&&!t.appId&&T(t.createdAt)<g));async function s({uuid:t}){a(t)||(await m.setActiveGroup(t),r.name!=="Chat"&&d.push("/chat"),f.value&&h.setSiderCollapsed(!0))}async function c(t){event==null||event.stopPropagation(),await m.deleteGroup(t),await m.queryMyGroup(),f.value&&h.setSiderCollapsed(!0)}function a(t){return m.active===t}return ae(()=>{m.queryMyGroup()}),(t,E)=>(n(),B(e(me),{class:"px-4"},{default:G(()=>[i("div",Te,[e(k).length?(n(),u(R,{key:1},[e(N).length?(n(),B(L,{key:1e3+_.value,title:"置顶","data-sources":e(N),onSelect:s,onDelete:c},null,8,["data-sources"])):v("",!0),e(A).length?(n(),B(L,{key:2e3+_.value,title:"应用对话组","data-sources":e(A),onSelect:s,onDelete:c},null,8,["data-sources"])):v("",!0),e(D).length?(n(),B(L,{key:3e3+_.value,title:"今天","data-sources":e(D),onSelect:s,onDelete:c},null,8,["data-sources"])):v("",!0),e(o).length?(n(),B(L,{key:4e3+_.value,title:"其他","data-sources":e(o),onSelect:s,onDelete:c},null,8,["data-sources"])):v("",!0)],64)):(n(),u("div",De,[l(e(p),{icon:"ri:inbox-line",class:"mb-2 text-3xl"}),i("span",null,M(t.$t("common.noData")),1)]))])]),_:1}))}}),Ne={class:"flex flex-col h-full flex-1 min-h-0"},Ae={class:"flex h-14 items-center space-x-2 bg-white px-4 dark:bg-[#18181c]"},Me={class:"flex-1"},Be={class:"flex-1 min-h-0 pb-4 overflow-hidden"},ze={key:0,class:"px-6 py-2 flex items-center border-t dark:border-t-neutral-800"},Pe={class:"p-4 border-t dark:border-t-neutral-800 flex flex-col"},Le={key:0,class:"my-1 flex items-center select-none"},Re={key:1,class:"my-1 flex items-center select-none"},Ue={key:2,class:"my-1 flex items-center select-none"},Ee={key:3,class:"my-1 flex items-center select-none"},je={class:"my-1 flex items-center select-none"},Ke={class:"flex justify-between my-3"},Oe=i("span",{class:"mr-2"},"公告栏",-1),Ve=i("span",{class:"mr-3"},"我的应用",-1),We={class:"flex justify-betweenx"},qe=i("span",{class:"mr-3"},"清空全部非置顶会话",-1),Xe=U({__name:"index",setup($){const f=ne(),d=J(),r=Q(),h=K(),m=ie();re();const _=w(null),k=w(null),y=C(()=>m.userBalance),T=ce(),g=w(0),N=w(0),A=w(0),D=w(0);z(()=>m.userBalance.useModel3Token,(x,S)=>{var I;g.value=S||0,N.value=x||0,(I=_.value)==null||I.play()},{immediate:!0,flush:"post"}),z(()=>m.userBalance.useModel4Token,(x,S)=>{var I;A.value=S||0,D.value=x||0,(I=k.value)==null||I.play()},{immediate:!0,flush:"post"});const{isMobile:o}=H(),s=w(!1),c=C(()=>r.siderCollapsed),a=w("");function t(x){a.value=x,h.setGroupKeyWord(x)}function E(){d.push("/role")}async function j(){try{s.value=!0,await h.addNewChatGroup(),await h.queryMyGroup(),s.value=!1,o.value&&r.setSiderCollapsed(!0)}catch{s.value=!1}}async function O(){T.warning({title:"清空分组",content:"是否删除所有非置顶的对话组？",positiveText:"确认删除",negativeText:"再想想",onPositiveClick:async()=>{await h.delAllGroup()}})}function V(){r.setSiderCollapsed(!c.value)}const X=C(()=>o.value?{position:"fixed",zIndex:50}:{}),Y=C(()=>o.value?{paddingBottom:"env(safe-area-inset-bottom)"}:{});return z(o,x=>{r.setSiderCollapsed(x)},{immediate:!0,flush:"post"}),(x,S)=>(n(),u("div",null,[l(e(fe),{collapsed:e(c),"collapsed-width":0,width:260,"show-trigger":e(o)?!1:"arrow-circle","collapse-mode":"transform",position:"absolute",bordered:"",style:W(e(X)),onUpdateCollapsed:V},{default:G(()=>[i("div",{class:"flex flex-col h-full",style:W(e(Y))},[i("main",Ne,[i("div",Ae,[i("div",Me,[l(e(F),{modelValue:a.value,"onUpdate:modelValue":S[0]||(S[0]=I=>a.value=I),type:"text",placeholder:"对话历史查找",clearable:"",size:"small",onInput:t},null,8,["modelValue"])]),l(e(P),{type:"info",size:"small",loading:s.value,onClick:j},{default:G(()=>[b(" 新对话 "),l(e(p),{icon:"fluent:add-16-filled",class:"text-xl"})]),_:1},8,["loading"])]),i("div",Be,[l(Ge)]),e(o)?v("",!0):(n(),u("div",ze,[i("div",{class:"flex items-center w-full p-1 mb-1 text-[#3076fd] rounded cursor-pointer transition hover:bg-[#eef0f3] dark:border-neutral-700 dark:hover:bg-[#33373c]",onClick:S[1]||(S[1]=I=>e(f).updateGoodsDialog(!0))},[l(e(p),{icon:"icon-park:shopping-bag",class:"mr-1 text-base"}),b(" 前往商城选购您的商品 ")])])),i("div",Pe,[e(f).modelType==="reinforcement"?(n(),u("div",Le,[l(e(p),{icon:"material-symbols:account-balance-wallet-outline",class:"ml-2 mr-2 text-base"}),b("增强对话额度： "+M(`${e(y).sumModel4Count||0} 积分`),1)])):v("",!0),e(f).modelType==="general"?(n(),u("div",Re,[l(e(p),{icon:"material-symbols:account-balance-wallet-outline",class:"ml-2 mr-2 text-base"}),b("一般对话额度： "+M(`${e(y).sumModel3Count||0} 积分`),1)])):v("",!0),e(f).modelType==="reinforcement"?(n(),u("div",Ue,[l(e(p),{icon:"ic:twotone-hourglass-top",class:"ml-2 mr-2 text-base"}),b("我已使用： "),l(e(q),{ref_key:"model4AnimationInstRef",ref:k,from:A.value,to:D.value},null,8,["from","to"]),b(" Token ")])):v("",!0),e(f).modelType==="general"?(n(),u("div",Ee,[l(e(p),{icon:"ic:twotone-hourglass-top",class:"ml-2 mr-2 text-base"}),b(" 我已使用： "),l(e(q),{ref_key:"model3AnimationInstRef",ref:_,from:g.value,to:N.value},null,8,["from","to"]),b(" Token ")])):v("",!0),i("div",je,[l(e(p),{icon:"ri:exchange-cny-line",class:"ml-2 mr-2 text-base"}),b("模型费用： 1积分 / 次对话 ")]),i("div",Ke,[l(e(P),{type:"tertiary",size:"small",onClick:S[2]||(S[2]=I=>e(f).updateNoticeDialog(!0))},{default:G(()=>[l(e(p),{icon:"pepicons-pop:bulletin-notice",class:"ml-2 mr-2 text-sm"}),Oe]),_:1}),l(e(P),{type:"tertiary",size:"small",onClick:E},{default:G(()=>[l(e(p),{icon:"streamline:app-store",class:"ml-2 mr-2 text-sm"}),Ve]),_:1})]),i("div",We,[l(e(P),{type:"tertiary",size:"small",style:{width:"100%"},onClick:O},{default:G(()=>[l(e(p),{icon:"ant-design:delete-outlined",class:"ml-2 mr-2 text-sm"}),qe]),_:1})])])])],4)]),_:1},8,["collapsed","show-trigger","style"]),e(o)?ue((n(),u("div",{key:0,class:"fixed inset-0 z-40 bg-black/40",onClick:V},null,512)),[[de,!e(c)]]):v("",!0)]))}});export{Xe as _};
