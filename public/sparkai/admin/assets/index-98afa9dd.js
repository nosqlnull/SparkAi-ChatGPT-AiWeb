
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{_ as j}from"./index-c786b651.js";import{a8 as m,d as P,y as Q,r as u,Q as X,B as G,t as H,o as r,c as B,e as o,f as t,b as s,am as x,j as I,R,S as q,k as w,w as J,I as f,U as Y,W as Z,E as K,h as i,X as ee,l as te,x as oe,q as N}from"./index-56458f60.js";import{E as ae}from"./index-70c9cd4a.js";const V={queryBadWords:(n={})=>m.get("badwords/query",{params:n}),delBadWords:n=>m.post("badwords/del",n),addBadWords:n=>m.post("badwords/add",n),updateBadWords:n=>m.post("badwords/update",n)},le=P({__name:"index",setup(n){const T=Q(),W=u(),U=u(0),_=u(!1),d=X({word:"",status:"",page:1,size:500}),D=G(()=>T.settings.app.colorScheme),h=u([]);async function c(){try{_.value=!0;const l=await V.queryBadWords(d),{rows:a,count:v}=l.data;_.value=!1,U.value=v,h.value=a}catch{_.value=!1}}function L(l){l==null||l.resetFields(),c()}H(()=>{c()});const p=u(""),y=u(!1),C=u();async function z(l){await V.delBadWords({id:l}),K.success("删除敏感词成功"),await c()}function A(){y.value=!0,Z(()=>{C.value.input.focus()})}async function S(){p.value&&(await V.addBadWords({word:p.value}),K.success("添加敏感词成功"),d.status="",await c()),y.value=!1,p.value=""}return(l,a)=>{const v=i("el-alert"),b=j,g=i("el-form-item"),E=i("el-option"),M=i("el-select"),k=i("el-button"),F=i("el-form"),O=i("el-tag"),$=ee("loading");return r(),B("div",null,[o(b,null,{default:t(()=>[o(v,{closable:!1,"show-icon":"",title:"敏感词说明",description:"当前为自定义敏感词、触发敏感词将自动拦截、如配置过三方平台、自定义检测将在三方平台通过后最后进行检测！",type:"success"})]),_:1}),o(b,null,{default:t(()=>[o(F,{ref_key:"formRef",ref:W,inline:!0,model:d},{default:t(()=>[o(g,{label:"敏感词",prop:"word"},{default:t(()=>[o(s(x),{modelValue:d.word,"onUpdate:modelValue":a[0]||(a[0]=e=>d.word=e),placeholder:"敏感词[模糊搜索]",onKeydown:I(te(c,["prevent"]),["enter"])},null,8,["modelValue","onKeydown"])]),_:1}),o(g,{label:"敏感词状态",prop:"status"},{default:t(()=>[o(M,{modelValue:d.status,"onUpdate:modelValue":a[1]||(a[1]=e=>d.status=e),placeholder:"请选择敏感词状态",clearable:""},{default:t(()=>[(r(!0),B(R,null,q(s(ae),e=>(r(),f(E,{key:e.value,label:e.label,value:e.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),o(g,null,{default:t(()=>[o(k,{type:"primary",onClick:c},{default:t(()=>[w(" 查询 ")]),_:1}),o(k,{onClick:a[2]||(a[2]=e=>L(s(W)))},{default:t(()=>[w(" 重置 ")]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),J((r(),f(b,{style:{width:"100%"}},{default:t(()=>[(r(!0),B(R,null,q(s(h),e=>(r(),f(O,{key:e.id,type:"warning",class:"mr-3 mb-3",closable:"",hit:"",effect:s(D),"disable-transitions":!0,onClose:se=>z(e.id)},{default:t(()=>[w(oe(e.word),1)]),_:2},1032,["effect","onClose"]))),128)),s(y)?(r(),f(s(x),{key:0,ref_key:"InputRef",ref:C,modelValue:s(p),"onUpdate:modelValue":a[3]||(a[3]=e=>Y(p)?p.value=e:null),class:"ml-1",style:{width:"80px"},size:"small",onKeyup:I(S,["enter"]),onBlur:S},null,8,["modelValue","onKeyup"])):(r(),f(k,{key:1,class:"ml-1",size:"small",onClick:A},{default:t(()=>[w(" + New Word ")]),_:1}))]),_:1})),[[$,s(_)]])])}}});typeof N=="function"&&N(le);export{le as default};
