import{V as w}from"./index-f99f6722.js";import{_ as P,a as u,o as i,c as h,H as G,k as c,v as o,I as q,x as y,j as k,y as _,J as I,K as J,L as R,D as Y,A as F,g as K,w as E,p as L,f as Q,M as Z,N as A,O as $,P as H,z as ee,t as te,G as m,l as M,V as ae,Q as oe}from"./index-05e97a4c.js";import{C as ne}from"./index-fc79d775.js";const se={setup(){return{row:u(null),handleFileUpload:async(t,b)=>{await fetchData(),G.api(t,b)},stusure:()=>{}}}},le=c("h3",null,"拟计划数异常 需要上传异常证明文件",-1),ie=[le];function ce(S,l,n,t,b,z){return i(),h("div",null,ie)}const re=P(se,[["render",ce]]);const de={components:{ReplacementComponent:re},setup(){console.log(o.sturow);const S=u(o.sturow.planned_Number),l=u(o.sturow.declarationRemark),n=u(!1),t=u(o.fixadress),b=u(o.fixphone);return{data1:S,declarationRemark:l,showReplacement:n,fixphone:b,fixadress:t,stusure:async()=>{var r;console.log(v);const f=document.querySelector(".xiubox1");document.querySelector(".xiubox2");const C=document.querySelector(".xiubox3"),x=document.querySelector(".xiubox4");var v=document.querySelector(".layui-textarea").value,s=f.querySelector('input[type="number"]').value;if(console.log(s),console.log(o.abnormal),s===""||s==0||s<0)I.msg("拟计划数错误 请重新输入");else if((s>o.onumber*1.2||s<o.onumber*.8)&&o.abnormal==0)I.msg("拟计划数异常 请上传证明材料");else if(s>500)I.msg("拟计划数不能大于500");else if(v.length>50)I.msg("备注不能超过50字");else{var V=C.querySelector('input[type="text"]').value,e=x.querySelector('input[type="text"]').value;const U=F.apiurl+"/api/TranscriptionPlan32/updata_declarationrecord",j={drid:o.studrid,plannedNumber:s,DeclarationRemark:v,address:V,phone:e},T={method:"POST",headers:{"content-type":"application/json",Authorization:"Bearer "+(((r=JSON.parse(localStorage.getItem("takel")))==null?void 0:r.accessToken)||o.takel.accessToken)},body:JSON.stringify(j)};console.log(j),fetch(U,T).then(N=>N.json()).then(N=>{I.msg(N.message),J.api()}).catch(N=>{console.log(N)})}}}}},ue={key:0},me={class:"all1box"},_e={class:"xiubox1"},pe=c("span",null,"拟计划数",-1),he={class:"xiubox2"},ye=c("span",null,"备注",-1),xe={class:"xiubox3"},ve=c("span",null,"学校地址",-1),Ie={class:"xiubox4"},fe=c("span",null,"联系电话",-1),be={key:1,class:"replacement-wrapr"};function ge(S,l,n,t,b,z){const f=R,C=ne,x=Y,v=q("ReplacementComponent");return t.showReplacement?(i(),h("div",be,[y(v)])):(i(),h("div",ue,[c("div",me,[c("div",_e,[pe,y(f,{modelValue:t.data1,"onUpdate:modelValue":l[0]||(l[0]=s=>t.data1=s),type:"number",max:500,min:0},null,8,["modelValue"])]),c("div",he,[ye,y(C,{id:"ni",placeholder:"请输入描述",modelValue:t.declarationRemark,"onUpdate:modelValue":l[1]||(l[1]=s=>t.declarationRemark=s)},null,8,["modelValue"])]),c("div",xe,[ve,k(),y(f,{modelValue:t.fixadress,"onUpdate:modelValue":l[2]||(l[2]=s=>t.fixadress=s),type:"text",max:300,min:0},null,8,["modelValue"])]),c("div",Ie,[fe,k(),y(f,{modelValue:t.fixphone,"onUpdate:modelValue":l[3]||(l[3]=s=>t.fixphone=s),type:"text",max:300,min:0},null,8,["modelValue"])]),y(x,{style:{display:"flex",margin:"0 auto"},border:"green",onClick:t.stusure},{default:_(()=>[k("确定")]),_:1},8,["onClick"])])]))}const ke=P(de,[["render",ge]]);const Se={setup(){const S=o.school.value.userId?o.school.value.userId:JSON.parse(localStorage.getItem("school")).userId,l=o.school.value.schoolName?o.school.value.schoolName:JSON.parse(localStorage.getItem("school")).schoolName,n=u([]),t=()=>{I.notifiy({title:"标题",content:"上传文件大小不能超过10MB！",icon:2})},b=async()=>{J.api();var a=[];n.value.forEach(d=>{a.push(d.drid)}),Z.api(a)},z=async(a,d)=>{J.api(),G.api(a,d)},f=async a=>{I.confirm(a.auditRemark,{title:"查看原因"})},C=async a=>{J.api(),A.api(a)},x=async a=>{J.api(),$.api(a)},v=async a=>{console.log(a.drid),console.log(a.address),console.log(a.phone),o.abnormal=a.abnormal,o.fixadress=a.address,o.fixphone=a.phone,o.studrid=a.drid,o.onumber=a.orginal_Plan_Number,o.sturow=a,I.open({type:"page",title:"修改相关信息",content:H(ke)})},s=async()=>{var g;console.log("触发我了");const a=F.apiurl+"/api/TranscriptionPlan32/get_declarationrecord?TranscribeId=1",d={method:"GET",headers:{Authorization:"Bearer "+(((g=JSON.parse(localStorage.getItem("takel")))==null?void 0:g.accessToken)||o.takel.accessToken)}};try{const D=await(await fetch(a,d)).json();o.studata.value=D.data,n.value=o.studata.value,console.log(n.value)}catch(O){console.log("数据获取失败：",O)}};K(()=>{s()}),E(o.studata,()=>{n.value==o.studata.value?console.log("一样的"):s()},{immediate:!0}),E(o.studata,()=>{n.value==o.studata.value?console.log("一样的"):s()},{immediate:!0}),L("fetchData",s);const V=async a=>{U.value=!0;try{await new Promise(d=>{setTimeout(()=>{n.value=X(a.current,a.limit),d()},1e3)})}catch(d){console.error("数据加载失败：",d)}finally{U.value=!1}},e=u([{value:"",label:"",closable:!1}]);u([{value:"",label:"",closable:!1}]);const r=u(""),U=u(!1),j=u([]),T=Q({current:1,limit:6,total:50}),N=u([{title:"中职学校代码",width:"50",key:"secondary_School_Id",fixed:"left",sort:"desc"},{title:"中职学校名称",width:"50",key:"secondary_School_Name",fixed:"left",sort:"desc"},{title:"中职专业代码",width:"50",key:"secondary_Pmid"},{title:"中职专业名称",width:"50",key:"secondary_Pmname"},{title:"专业代号",width:"50",key:"pmMark"},{title:"原计划数",width:"50",key:"orginal_Plan_Number",scopedSlots:{customRender:"Input1"}},{title:"拟计划数",width:"50",key:"planned_Number"},{title:"电话",width:"10",key:"phone"},{title:"备注",width:"50",key:"declarationRemark"},{title:"地址",width:"50",key:"address"},{title:"状态",width:"50",key:"state",customSlot:"word3"},{title:"操作",width:"50",customSlot:"operator",key:"operator",fixed:"right",ignoreExport:!0}]),B=(a,d)=>{n.value.forEach(g=>{g.id===d.id&&I.msg("Success",{icon:1},()=>{g.status=a})})},W=()=>{I.msg(j.value,{area:"50%"})},X=(a,d)=>{for(var g=[],O=(a-1)*d+1,D=a*d,p=O;p<=D;p++)g.push({secondary_School_Id:n.value[p].secondary_School_Id,secondary_School_Name:n.value[p].secondary_School_Name,secondary_Pmid:n.value[p].secondary_Pmid,secondary_Pmname:n.value[p].secondary_Pmname,orginal_Plan_Number:n.value[p].orginal_Plan_Number,planned_Number:n.value[p].planned_Number,phone:n.value[p].phone,address:n.value[p].address,state:n.value[p].state});return g};return{handleUploadError:t,id:S,name:l,handleFileUpload:z,openConfirm:f,giveall:b,data1:e,del:C,give:x,index:v,inputValue1:r,columns:N,dataSource:n,selectedKeys:j,page:T,change:V,changeStatus:B,remove:W}}},Ce={class:"container-demo"},Ne={style:{height:"800px"}},ze={class:"scroll-container1"},Ve={class:"scroll-content"},je={class:"buttonbox"},Me={class:"button-row"},Je={key:0,size:"xs",type:"primary",style:{"text-align":"center"}},Ue={class:"button-row"},Oe={key:0,id:"WcCc0",style:{color:"rgb(123, 123, 123)"}},Te={key:1,id:"WcCc1",style:{color:"rgb(36, 135, 255)"}},De={key:2,id:"WcCc2",style:{color:"rgb(26,188,156)"}},Pe={key:3,id:"WcCc3",style:{color:"rgb(248, 50, 10)"}},Ee={key:4,id:"WcCc4",style:{color:"rgb(36, 135, 255)"}},Ge={key:5,id:"WcCc5",style:{color:"rgb(0, 0, 0)"}};function Re(S,l,n,t,b,z){const f=ee,C=ae,x=Y,v=oe,s=R,V=w;return i(),h("div",Ce,[y(f,{theme:"green"},{title:_(()=>[k(" 欢迎:"+te(t.name),1)]),_:1}),c("div",Ne,[c("div",ze,[c("div",Ve,[y(V,{resize:!1,height:"90%",columns:t.columns,"default-toolbar":!0,"data-source":t.dataSource,"selected-keys":t.selectedKeys,"onUpdate:selectedKeys":l[0]||(l[0]=e=>t.selectedKeys=e),onChange:t.change},{date:_(({row:e})=>[]),status:_(({row:e})=>[y(C,{"model-value":e.status,onChange:r=>t.changeStatus(r,e)},null,8,["model-value","onChange"])]),toolbar:_(()=>[y(x,{size:"sm",type:"primary",onClick:t.giveall},{default:_(()=>[k("提交全部申报")]),_:1},8,["onClick"])]),operator:_(({row:e})=>[c("div",je,[c("div",Me,[e.state==1||e.state==2||e.state==4||e.state==5?(i(),h("p",Je,"暂不可操作")):m("",!0),e.state==0||e.state==3?(i(),M(x,{key:1,size:"xs",type:"primary",onClick:r=>t.give(e)},{default:_(()=>[k("申报")]),_:2},1032,["onClick"])):m("",!0),e.state==0||e.state==3?(i(),M(x,{key:2,size:"xs",onClick:r=>t.index(e)},{default:_(()=>[k("修改")]),_:2},1032,["onClick"])):m("",!0),e.abnormal==0&&(e.state==0||e.state==3)?(i(),M(v,{key:3,multiple:!0,size:10240,text:"上传文件",acceptMime:"application/pdf",style:{"margin-left":"10px"},headers:{Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIzOTc1IiwibmFtZSI6IjE0MzkzIiwidXNlcmlkIjoiMzk3NSIsImFjY291bnQiOiIxNDM5MyIsInVzZXJ0eXBlIjoiMCIsImVtaWFsIjoiIiwicGhvbmUiOiIiLCJzY2hvb2x0eXBlIjoiMSIsInNjaG9vbG5hbWUiOiLlt53ljJflubzlhL_luIjojIPpq5jnrYnkuJPnp5HlrabmoKEiLCJuYmYiOjE2OTk3NTUxMDMsImV4cCI6MTczMTI5MTEwMywiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo1MDY1IiwiYXVkIjoiSFNDbGllbnQifQ.5G_Q4leGvJ7SWzh9AgKOv_nqGpSfUJizukSUKZ0CZ70"},data:e.ddird,onDone:r=>t.handleFileUpload(r,e),onError:t.handleUploadError},null,8,["headers","data","onDone","onError"])):m("",!0),e.abnormal==2&&(e.state==0||e.state==3)?(i(),M(v,{key:4,multiple:!0,size:1,text:"重新上传",acceptMime:"application/pdf",style:{"margin-left":"10px"},headers:{Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIzOTc1IiwibmFtZSI6IjE0MzkzIiwidXNlcmlkIjoiMzk3NSIsImFjY291bnQiOiIxNDM5MyIsInVzZXJ0eXBlIjoiMCIsImVtaWFsIjoiIiwicGhvbmUiOiIiLCJzY2hvb2x0eXBlIjoiMSIsInNjaG9vbG5hbWUiOiLlt53ljJflubzlhL_luIjojIPpq5jnrYnkuJPnp5HlrabmoKEiLCJuYmYiOjE2OTk3NTUxMDMsImV4cCI6MTczMTI5MTEwMywiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo1MDY1IiwiYXVkIjoiSFNDbGllbnQifQ.5G_Q4leGvJ7SWzh9AgKOv_nqGpSfUJizukSUKZ0CZ70"},data:e.ddird,onDone:r=>t.handleFileUpload(r,e),onError:t.handleUploadError},null,8,["headers","data","onDone","onError"])):m("",!0)]),c("div",Ue,[e.state==3?(i(),M(x,{key:0,size:"xs",type:"primary",onClick:r=>t.openConfirm(e)},{default:_(()=>[k("查看原因")]),_:2},1032,["onClick"])):m("",!0)])])]),word3:_(({row:e})=>[e.state===0?(i(),h("p",Oe," 待提交 ")):m("",!0),e.state===1?(i(),h("p",Te," 审核中 ")):m("",!0),e.state===2?(i(),h("p",De," 待核对 ")):m("",!0),e.state===3?(i(),h("p",Pe," 已退回 ")):m("",!0),e.state===4?(i(),h("p",Ee," 待定稿 ")):m("",!0),e.state===5?(i(),h("p",Ge," 已定稿 ")):m("",!0)]),Input2:_(({row:e})=>[y(s,{modelValue:e.planned_Number,"onUpdate:modelValue":r=>e.planned_Number=r,allowClear:"",placeholder:"请输入",style:{width:"180px"}},null,8,["modelValue","onUpdate:modelValue"])]),_:1},8,["columns","data-source","selected-keys","onChange"])])])])])}const We=P(Se,[["render",Re]]);export{We as default};
