import{_ as f,a as b,v as e,o as x,c as N,x as o,y as _,k as a,U as p,z as k,B as I,L as O,D as J,j as v,t as q,A as B}from"./index-05e97a4c.js";const V={setup(){const r=b(0),c=e.school.value.userId?e.school.value.userId:JSON.parse(localStorage.getItem("school")).userId,h=e.school.value.schoolName?e.school.value.schoolName:JSON.parse(localStorage.getItem("school")).schoolName;return r.value=e.passworddd?e.passworddd:JSON.parse(localStorage.getItem("password")),console.log(e.passworddd),console.log(JSON.parse(localStorage.getItem("password"))),{id:c,name:h,oldpass:r,sure:async()=>{var i;var g=document.querySelector("#surepas"),y=document.querySelector("#newpas"),u=document.querySelector("#old");const t=y.querySelector("input").value,s=g.querySelector("input").value,d=u.querySelector("input").value;if(s===t&&d===r.value&&s!=""&&d!=""){const w=B.apiurl+"/api/User/update",m={Password:s,type:3};console.log(m);const S={method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer "+(((i=JSON.parse(localStorage.getItem("takel")))==null?void 0:i.accessToken)||e.takel.accessToken)},body:JSON.stringify(m)};console.log(m),fetch(w,S).then(l=>l.json()).then(l=>{console.log(l),p.msg(l.message),e.passworddd=s,localStorage.setItem("password",JSON.stringify(e.passworddd)),router.push("/login")}).then(l=>{console.log(l)})}else s!==t?p.msg("请重新确认密码是否相同"):d!==r.value?p.msg("与旧密码不相同"):p.msg("不能输入为空")}}}},T={class:"container-demo"},C=a("p",{style:{"background-color":"#e6e6e6","font-size":"25px"}},"个人信息",-1),E={class:"adaptive-container"},j={class:"form-item"},z=a("p",null,"旧密码:",-1),P={class:"form-item"},U=a("p",null,"新密码:",-1),A={class:"form-item"},D=a("p",null,"确认密码:",-1);function L(r,c,h,n,g,y){const u=k,t=I,s=O,d=J;return x(),N("div",T,[o(u,{theme:"green"},{title:_(()=>[v(" 欢迎:"+q(n.name),1)]),_:1}),o(t,{"border-style":"#e6e6e6","border-width":"3px",theme:"green"},{default:_(()=>[C]),_:1}),a("div",E,[o(t,{class:"line","border-style":"dashed","border-width":"1px",theme:"green"}),a("div",j,[z,o(s,{id:"old",placeholder:"旧密码",modelValue:n.oldpass,"onUpdate:modelValue":c[0]||(c[0]=i=>n.oldpass=i)},null,8,["modelValue"])]),o(t,{class:"line","border-style":"dashed","border-width":"1px",theme:"green"}),a("div",P,[U,o(s,{id:"newpas",placeholder:"新密码"})]),o(t,{class:"line","border-style":"dashed","border-width":"1px",theme:"green"}),a("div",A,[D,o(s,{id:"surepas",placeholder:"确认密码"})]),o(t,{class:"line","border-style":"dashed","border-width":"1px",theme:"green"}),o(d,{class:"submit-button",border:"green",onClick:n.sure},{default:_(()=>[v("提交")]),_:1},8,["onClick"])])])}const G=f(V,[["render",L]]);export{G as default};
