import{V as O}from"./index-513bbaed.js";import{_ as K,d as _,r as p,v as j,o as P,I as R,a as m,z as E,w as l,e as V,b as r,g as I,t as B,J as W,K as N,f as q,V as J,p as z,s as A,L as D,c as f,H as b,B as G}from"./index-987701ae.js";import{m as U}from"./index-3b04c4a4.js";import{k as L}from"./api-e1e47605.js";const M=W(()=>D(()=>Promise.resolve().then(()=>me),void 0,import.meta.url)),H={data(){return{showReplacement:!1}},components:{replacementComponent:M},setup(){const h=_.school.value.userId||(JSON.parse(localStorage.getItem("schooll"))||{}).userId||"无",d=_.school.value.schoolName||(JSON.parse(localStorage.getItem("schooll"))||{}).schoolName||"无",w=async e=>{L.api(e);const o=c.value.indexOf(e);o!==-1&&c.value.splice(o,1)},a=p(!1),i=p([]),S=j({current:1,limit:10,total:100}),y=async()=>{var s;const e=A.supapi+"/api/SecondaryEnrollment/getRelationmajor?Transcribe=4",o={method:"GET",headers:{Authorization:"Bearer "+(((s=JSON.parse(localStorage.getItem("taken")))==null?void 0:s.accessToken)||_.takel.accessToken),"content-type":"application/json"}};fetch(e,o).then(n=>n.json()).then(n=>{console.log("查找成功",n),n.data==null||(_.stuadd.value=n.data,c.value=_.stuadd.value)})};P(()=>{y()});const v=p([{title:"专业代码",width:"120px",key:"spmcode"},{title:"专业名称",width:"120px",key:"spmname"},{title:"操作",width:"40px",customSlot:"operator",key:"operator",fixed:"right",ignoreExport:!0}]),k=e=>{a.value=!0,setTimeout(()=>{c.value=t(e.current,e.limit),a.value=!1},1e3)},c=p([]),u=(e,o)=>{c.value.forEach(s=>{s.id===o.id&&N.msg("Success",{icon:1},()=>{s.status=e})})},x=()=>{N.msg(i.value,{area:"50%"})},t=(e,o)=>{for(var s=[],n=(e-1)*o+1,C=e*o,g=n;g<=C;g++)s.push({id:`${g}`,age:"18",sex:"男",name:`张三${g}`,email:"test@qq.com",remark:"花开堪折直须折,莫待无花空折枝.",joinTime:"2022-02-09",city:"浙江杭州",status:!0});return s};return{id:h,name:d,stud:w,columns:v,dataSource:c,selectedKeys:i,page:S,change:k,changeStatus:u,remove:x}}},$={class:"container-demo"},F=V("div",{class:"wordallbox"},null,-1),Q={class:"ttbox"};function X(h,d,w,a,i,S){const y=U,v=q,k=J,c=z,u=O,x=R("Some"),t=R("replacementComponent");return i.showReplacement?(m(),E(t,{key:1})):(m(),E(x,{key:0},{default:l(()=>[V("div",$,[r(y,{theme:"green"},{title:l(()=>[I(" 欢迎:"+B(a.name),1)]),_:1}),F,r(v,{"border-style":"dashed","border-width":"3px",theme:"green"}),V("div",Q,[r(u,{resize:!0,height:"100%",columns:a.columns,loading:h.loading,"data-source":a.dataSource,"selected-keys":a.selectedKeys,"onUpdate:selectedKeys":d[0]||(d[0]=e=>a.selectedKeys=e),onChange:a.change,onSortChange:h.sortChange},{status:l(({row:e})=>[r(k,{"model-value":e.status,onChange:o=>a.changeStatus(o,e)},null,8,["model-value","onChange"])]),operator:l(({row:e})=>[r(c,{size:"xs",type:"primary",onClick:o=>a.stud(e)},{default:l(()=>[I("添加")]),_:2},1032,["onClick"])]),_:1},8,["columns","loading","data-source","selected-keys","onChange","onSortChange"])]),r(v,{"border-style":"dashed","border-width":"3px",theme:"green"}),r(c,{class:"back",type:"primary",onClick:d[1]||(d[1]=e=>i.showReplacement=!i.showReplacement)},{default:l(()=>[I("返回")]),_:1})])]),_:1}))}const Y=K(H,[["render",X]]);const Z={components:{ReplacementComponent:Y},data(){return{showReplacement:!1}},setup(){const h=_.school.value.userId||(JSON.parse(localStorage.getItem("schooll"))||{}).userId||"无",d=_.school.value.schoolName||(JSON.parse(localStorage.getItem("schooll"))||{}).schoolName||"无",w=async()=>{var n;const o=A.supapi+"/api/SecondaryEnrollment/getprofessionalplans?transcribe=4",s={method:"GET",headers:{Authorization:"Bearer "+(((n=JSON.parse(localStorage.getItem("taken")))==null?void 0:n.accessToken)||_.takel.accessToken)}};try{const g=await(await fetch(o,s)).json();_.stuAll.value=g.data,u.value=_.stuAll.value,console.log(g),console.log(u.value)}catch(C){console.log("数据获取失败：",C)}};P(()=>{w()});const a=p([{value:1,label:"",closable:!1}]),i=p(""),S=p(!1),y=p([]),v=j({current:1,limit:10,total:100}),k=p([{title:"专业代码",width:"50px",key:"spmcode",sort:"desc"},{title:"专业名称",width:"50px",key:"spmname"},{title:"原计划数",width:"40px",key:"orginal_plan_number"},{title:"拟计划数",width:"40px",key:"planned_number"},{title:"状态",width:"40px",key:"state",customSlot:"word3"}]),c=o=>{S.value=!0,setTimeout(()=>{u.value=e(o.current,o.limit),S.value=!1},1e3)},u=p([]),x=(o,s)=>{u.value.forEach(n=>{n.id===s.id&&N.msg("Success",{icon:1},()=>{n.status=o})})},t=()=>{N.msg(y.value,{area:"50%"})},e=(o,s)=>{for(var n=[],C=(o-1)*s+1,g=o*s,T=C;T<=g;T++)n.push({id:`${T}`,age:"18",sex:"男",name:`张三${T}`,email:"test@qq.com",remark:"花开堪折直须折,莫待无花空折枝.",joinTime:"2022-02-09",city:"浙江杭州",status:!0});return n};return{id:h,name:d,data1:a,inputValue1:i,columns:k,dataSource:u,selectedKeys:y,page:v,change:c,changeStatus:x,remove:t}}},ee={key:0},te={class:"container-demo"},oe={style:{height:"800px"}},ae={key:0,id:"WcCc0",style:{color:"rgb(123, 123, 123)"}},ne={key:1,id:"WcCc1",style:{color:"rgb(36, 135, 255)"}},se={key:2,id:"WcCc2",style:{color:"rgb(26,188,156)"}},le={key:3,id:"WcCc3",style:{color:"rgb(248, 50, 10)"}},ce={key:4,id:"WcCc4",style:{color:"rgb(36, 135, 255)"}},re={key:5,id:"WcCc5",style:{color:"rgb(0, 0, 0)"}},de={key:1,class:"replacement-wrapr"};function ie(h,d,w,a,i,S){const y=U,v=J,k=z,c=G,u=O,x=R("ReplacementComponent");return i.showReplacement?(m(),f("div",de,[r(x)])):(m(),f("div",ee,[V("div",te,[r(y,{theme:"green"},{title:l(()=>[I(" 欢迎:"+B(a.name),1)]),_:1}),V("div",oe,[r(u,{resize:!0,height:"90%",columns:a.columns,loading:h.loading,"default-toolbar":!0,"data-source":a.dataSource,"selected-keys":a.selectedKeys,"onUpdate:selectedKeys":d[1]||(d[1]=t=>a.selectedKeys=t),onChange:a.change,onSortChange:h.sortChange},{date:l(({row:t})=>[]),status:l(({row:t})=>[r(v,{"model-value":t.status,onChange:e=>a.changeStatus(e,t)},null,8,["model-value","onChange"])]),toolbar:l(()=>[r(k,{size:"sm",type:"primary",onClick:d[0]||(d[0]=t=>i.showReplacement=!0)},{default:l(()=>[I("添加专业")]),_:1})]),operator:l(({row:t})=>[]),word3:l(({row:t})=>[t.state===0?(m(),f("p",ae," 待提交 ")):b("",!0),t.state===1?(m(),f("p",ne," 审核中 ")):b("",!0),t.state===2?(m(),f("p",se," 待核对 ")):b("",!0),t.state===3?(m(),f("p",le," 已退回 ")):b("",!0),t.state===4?(m(),f("p",ce," 待定稿 ")):b("",!0),t.state===5?(m(),f("p",re," 已定稿 ")):b("",!0)]),Input1:l(({row:t})=>[r(c,{modelValue:t.orginal_plan_number,"onUpdate:modelValue":e=>t.orginal_plan_number=e,placeholder:"请输入",style:{width:"180px"}},null,8,["modelValue","onUpdate:modelValue"])]),Input2:l(({row:t})=>[r(c,{modelValue:t.planned_number,"onUpdate:modelValue":e=>t.planned_number=e,placeholder:"请输入",style:{width:"180px"}},null,8,["modelValue","onUpdate:modelValue"])]),_:1},8,["columns","loading","data-source","selected-keys","onChange","onSortChange"])])])]))}const ue=K(Z,[["render",ie]]),me=Object.freeze(Object.defineProperty({__proto__:null,default:ue},Symbol.toStringTag,{value:"Module"}));export{ue as default};
