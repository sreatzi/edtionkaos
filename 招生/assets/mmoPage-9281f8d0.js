import{V as U,g as T}from"./index-513bbaed.js";import{_ as B,r as d,d as n,o as I,K as m,a as V,c as S,b as t,w as s,e as _,F,X as J,g as c,t as C,z as O,Y as P,f as Z}from"./index-987701ae.js";import{u as q}from"./index-6885d930.js";import{m as D}from"./index-3b04c4a4.js";import{q as r,r as E}from"./api-e1e47605.js";const K={setup(){const v=d(1);var a;const x=n.school.value.userId||(JSON.parse(localStorage.getItem("schooll"))||{}).userId||"无",e=n.school.value.schoolName||(JSON.parse(localStorage.getItem("schooll"))||{}).schoolName||"无",w=async()=>{console.log(a),E.api(a),l.value=n.stuhedui.value,console.log(l.value)};I(()=>{g()});const g=async()=>{l.value=[],a=2,await r.api(a),console.log(l.value),n.stuhedui.value==null?m.msg("数据为空，请稍等"):l.value=n.stuhedui.value},h=async()=>{l.value=[],a=3,await r.api(a),console.log(l.value),n.stuhedui.value==null?m.msg("数据为空 请稍等"):l.value=n.stuhedui.value},p=async()=>{l.value=[],a=4,await r.api(a),console.log(n.stuhedui.value),n.stuhedui.value==null?m.msg("数据为空 请稍等"):l.value=n.stuhedui.value},u=async()=>{l.value=[],a=1,await r.api(a),console.log(l.value),n.stuhedui.value==null?m.msg("数据为空 请稍等"):l.value=n.stuhedui.value},y=[{title:"专业代码",width:"150px",key:"spmcode"},{title:"专业名称",width:"150px",key:"spmname"},{title:"原计划数",width:"150px",key:"orginal_plan_number"},{title:"拟计划数",width:"150px",key:"plannedNum"}],l=d([]),i=d(),o=d("sm"),f=function(k){i.value=k},z=d(!0),b=d(!0),N=d(-1);return{id:x,name:e,selected1:v,sucee:w,ontw:u,puT:g,yiT:h,hzZ:p,sizeSelected:o,changeSize:f,spaceSize:i,nm:z,loading:b,active:N,columns8:y,dataSource8:l}}},L={class:"container-demo"},M={class:"wordbox"},X=_("br",null,null,-1),Y=_("br",null,null,-1),j={class:"tablebox"};function A(v,a,x,e,w,g){const h=D,p=T,u=P,y=q,l=Z,i=U;return V(),S("div",L,[t(h,{theme:"green"},{title:s(()=>[c(" 欢迎:"+C(e.name),1)]),_:1}),_("div",M,[(V(!0),S(F,null,J(v.sizeKeys,o=>(V(),O(p,{modelValue:e.sizeSelected,"onUpdate:modelValue":a[0]||(a[0]=f=>e.sizeSelected=f),name:"action",value:o,onChange:e.changeSize},{default:s(()=>[c(C(o),1)]),_:2},1032,["modelValue","value","onChange"]))),256)),X,Y,t(y,{size:e.spaceSize},{default:s(()=>[t(u,{modelValue:e.selected1,"onUpdate:modelValue":a[1]||(a[1]=o=>e.selected1=o),name:"action",value:1,type:"primary",onChange:e.puT},{default:s(()=>[c("中职普通转录计划专业目录核对稿 ")]),_:1},8,["modelValue","onChange"]),t(u,{modelValue:e.selected1,"onUpdate:modelValue":a[2]||(a[2]=o=>e.selected1=o),name:"action",value:2,type:"primary",onChange:e.yiT},{default:s(()=>[c("艺体类转录计划专业目录核对稿")]),_:1},8,["modelValue","onChange"]),t(u,{modelValue:e.selected1,"onUpdate:modelValue":a[3]||(a[3]=o=>e.selected1=o),name:"action",value:3,type:"primary",onChange:e.hzZ},{default:s(()=>[c("高中中专计划专业目录核对稿")]),_:1},8,["modelValue","onChange"]),t(u,{modelValue:e.selected1,"onUpdate:modelValue":a[4]||(a[4]=o=>e.selected1=o),name:"action",value:4,type:"primary",onChange:e.ontw},{default:s(()=>[c("1+2计划专业目录核对稿")]),_:1},8,["modelValue","onChange"]),t(u,{modelValue:e.selected1,"onUpdate:modelValue":a[5]||(a[5]=o=>e.selected1=o),name:"action",value:5,type:"primary",onChange:e.sucee},{default:s(()=>[c("核对成功点击")]),_:1},8,["modelValue","onChange"])]),_:1},8,["size"])]),t(l,{"border-style":"dashed","border-width":"3px",theme:"green"}),_("div",j,[t(i,{columns:e.columns8,"data-source":e.dataSource8,even:""},null,8,["columns","data-source"])])])}const $=B(K,[["render",A]]);export{$ as default};
