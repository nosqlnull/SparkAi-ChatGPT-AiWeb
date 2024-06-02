
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{d as _,r as m,t as N,F as R,o as w,c as f,N as b,G as T,b as s,n as k,O as M,a as y,x,J as z,k as E,u as A,e,f as n,P as F,E as I,h as u,g as L,m as D,q as V}from"./index-56458f60.js";import{_ as G}from"./index-c786b651.js";const J=_({name:"FixedActionBar"}),O=_({...J,setup(i){const a=m(!1);N(()=>{l(),window.addEventListener("scroll",l)}),R(()=>{window.removeEventListener("scroll",l)});function l(){const r=document.documentElement.scrollTop||document.body.scrollTop,d=document.documentElement.clientHeight||document.body.clientHeight,o=document.documentElement.scrollHeight||document.body.scrollHeight;a.value=Math.ceil(r+d)>=o}return(r,d)=>(w(),f("div",{class:T(["actionbar",{shadow:!s(a)}]),"data-fixed-calc-width":""},[b(r.$slots,"default",{},void 0,!0)],2))}});const j=k(O,[["__scopeId","data-v-63511cc5"]]),K={class:"header"},Q={class:"main"},W={class:"title"},X={class:"content"},Y={key:0,class:"sub"},Z=_({name:"PageHeader"}),ee=_({...Z,props:{title:{type:String,required:!0},content:{type:String,default:""}},setup(i){const a=M();return(l,r)=>(w(),f("div",K,[y("div",Q,[y("div",W,x(i.title),1),y("div",X,[b(l.$slots,"content",{},()=>[E(x(i.content),1)],!0)])]),s(a).default?(w(),f("div",Y,[b(l.$slots,"default",{},void 0,!0)])):z("",!0)]))}});const oe=k(ee,[["__scopeId","data-v-24ce26ee"]]),te=_({name:"PersonalEditPassword"}),se=_({...te,setup(i){const a=L(),l=D(),r=A(),d=m(),o=m({password:"",newpassword:"",checkpassword:""}),S=m({password:[{required:!0,message:"请输入原密码",trigger:"blur"}],newpassword:[{required:!0,message:"请输入新密码",trigger:"blur"},{min:6,max:18,trigger:"blur",message:"密码长度为6到18位"}],checkpassword:[{required:!0,message:"请输入新密码",trigger:"blur"},{validator:(g,t,c)=>{t!==o.value.newpassword?c(new Error("两次密码不一致！")):c()}}]});function $(){d.value&&d.value.validate(g=>{if(g){const{password:t,newpassword:c}=o.value;F.updatePassword({oldPassword:t,password:c}).then(()=>{I({type:"success",message:"修改密码成功，请重新登录"}),r.logout().then(()=>{l.push({name:"login",query:{redirect:a.fullPath}})})})}})}return(g,t)=>{const c=oe,h=u("el-input"),v=u("el-form-item"),H=u("el-form"),P=u("el-col"),q=u("el-row"),C=G,U=u("el-button"),B=j;return w(),f("div",null,[e(c,{title:"修改密码",content:"定期修改密码可以提高帐号安全性噢~"}),e(C,null,{default:n(()=>[e(q,null,{default:n(()=>[e(P,{md:24,lg:12},{default:n(()=>[e(H,{ref_key:"formRef",ref:d,model:s(o),rules:s(S),"label-width":"120px"},{default:n(()=>[e(v,{label:"原密码",prop:"password"},{default:n(()=>[e(h,{modelValue:s(o).password,"onUpdate:modelValue":t[0]||(t[0]=p=>s(o).password=p),type:"password",placeholder:"请输入原密码","show-password":""},null,8,["modelValue"])]),_:1}),e(v,{label:"新密码",prop:"newpassword"},{default:n(()=>[e(h,{modelValue:s(o).newpassword,"onUpdate:modelValue":t[1]||(t[1]=p=>s(o).newpassword=p),type:"password",placeholder:"请输入新密码","show-password":""},null,8,["modelValue"])]),_:1}),e(v,{label:"确认新密码",prop:"checkpassword"},{default:n(()=>[e(h,{modelValue:s(o).checkpassword,"onUpdate:modelValue":t[2]||(t[2]=p=>s(o).checkpassword=p),type:"password",placeholder:"请输入新密码","show-password":""},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])]),_:1})]),_:1})]),_:1}),e(B,null,{default:n(()=>[e(U,{type:"primary",size:"large",onClick:$},{default:n(()=>[E(" 提交 ")]),_:1})]),_:1})])}}});typeof V=="function"&&V(se);export{se as default};
