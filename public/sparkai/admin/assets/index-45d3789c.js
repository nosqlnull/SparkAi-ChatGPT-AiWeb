
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{d as P,y as z,B as D,o as a,c as u,b as i,I as c,f as s,a as r,e as f,J as h,x as B,af as d,G as E,R as I,S as F,_ as G,h as m,n as L}from"./index-56458f60.js";const $={class:"sidebar-item"},A=["href","target","onClick"],H={class:"title"},K={class:"title"},M=P({name:"SidebarItem"}),Q=P({...M,props:{item:{type:Object,required:!0},basePath:{type:String,default:""}},setup(e){const _=e,N=z(),O=D(()=>{let o=!0;return _.item.children?_.item.children.every(b=>{var l;return((l=b.meta)==null?void 0:l.sidebar)===!1})&&(o=!1):o=!1,o});return(o,b)=>{var y;const l=G,k=m("el-icon"),V=m("el-menu-item"),J=m("router-link"),R=m("SidebarItem"),j=m("el-sub-menu");return a(),u("div",$,[i(O)?(a(),c(j,{key:1,title:((y=e.item.meta)==null?void 0:y.title)??"[ 无标题 ]",index:i(N).settings.app.routeBaseOn!=="filesystem"?i(d)(e.basePath,e.item.path):JSON.stringify(e.item)},{title:s(()=>{var t,n;return[(t=e.item.meta)!=null&&t.icon?(a(),c(k,{key:0,class:"title-icon"},{default:s(()=>[f(l,{name:e.item.meta.icon},null,8,["name"])]),_:1})):h("",!0),r("span",K,B(((n=e.item.meta)==null?void 0:n.title)??"[ 无标题 ]"),1)]}),default:s(()=>[(a(!0),u(I,null,F(e.item.children,t=>{var n;return a(),u(I,null,[((n=t.meta)==null?void 0:n.sidebar)!==!1?(a(),c(R,{key:t.path,item:t,"base-path":i(d)(e.basePath,e.item.path)},null,8,["item","base-path"])):h("",!0)],64)}),256))]),_:1},8,["title","index"])):(a(),c(J,{key:0,custom:"",to:i(d)(e.basePath,e.item.path)},{default:s(({href:t,navigate:n,isActive:q,isExactActive:w})=>{var x,g,v;return[r("a",{href:(x=e.item.meta)!=null&&x.link?e.item.meta.link:t,class:E([q&&"router-link-active",w&&"router-link-exact-active"]),target:(g=e.item.meta)!=null&&g.link?"_blank":"_self",onClick:n},[f(V,{title:((v=e.item.meta)==null?void 0:v.title)??"[ 无标题 ]",index:i(d)(e.basePath,e.item.path||"")},{default:s(()=>{var S,C;return[(S=e.item.meta)!=null&&S.icon?(a(),c(k,{key:0,class:"title-icon"},{default:s(()=>[f(l,{name:e.item.meta.icon},null,8,["name"])]),_:1})):h("",!0),r("span",H,B(((C=e.item.meta)==null?void 0:C.title)??"[ 无标题 ]"),1)]}),_:1},8,["title","index"])],10,A)]}),_:1},8,["to"]))])}}});const U=L(Q,[["__scopeId","data-v-a9cfdc56"]]);export{U as default};
