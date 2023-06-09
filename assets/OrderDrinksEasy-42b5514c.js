import{r as d,f as j,o as n,c as a,a as e,F as u,g as m,h as M,i as _,v as g,t as l,u as h,d as y,n as O,j as k,k as B,X as b}from"./index-7fc82aa0.js";const D={class:"container gx-2"},L={class:"row gx-3 bg-light py-3"},E={class:"col-md-4"},z={class:"list-group"},F=["onClick"],P={class:"card-title mb-1"},S={class:"d-flex align-items-center justify-content-between"},X={class:"mb-0"},q={class:"mb-0"},G={class:"col-md-8"},H={class:"card mb-2"},K={key:0,class:"position-absolute text-white d-flex align-items-center justify-content-center active",style:{top:"0",bottom:"0",left:"0",right:"0","background-color":"rgba(0, 0, 0, 0.65)","z-index":"100"}},R={class:"card-body px-4"},W={class:"mb-3"},A=e("label",{for:"productNum",class:"form-label"},"數量",-1),I={class:"mb-3"},J=e("label",{for:"productNum",class:"form-label d-block"},"冰塊*",-1),Q=["id","value","onUpdate:modelValue"],Y=["for"],Z={class:"mb-3"},ee=e("label",{for:"productNum",class:"form-label d-block"},"甜度*",-1),te=["id","value","onUpdate:modelValue"],oe=["for"],se={class:"mb-3"},le=e("label",{for:"productNum",class:"form-label d-block"},[y(" 加料 "),e("small",{class:"text-black-50 fw-light mb-0"},"加一樣 10 元")],-1),ne=["id","value"],ae=["for"],ce={class:"mb-3"},ie=e("label",{for:"productNotice",class:"form-label"},"備註",-1),re={class:"d-flex gap-2"},de={class:"card"},ue={class:"card-body"},me={class:"table"},_e=e("thead",null,[e("tr",null,[e("th",{scope:"col"},"品項"),e("th",{scope:"col"},"冰塊"),e("th",{scope:"col"},"甜度"),e("th",{scope:"col"},"加料"),e("th",{scope:"col"},"單價"),e("th",{scope:"col"},"數量"),e("th",{scope:"col"},"小計")])],-1),pe={scope:"row"},he=e("br",null,null,-1),be={class:"text-muted fw-normal"},fe={class:"text-end"},ve={class:"text-end"},ye={__name:"OrderDrinksEasy",setup(ge){const $=d(["正常冰","少冰","微冰","去冰","熱"]),N=d(["全糖","七分","半糖","三分","無糖"]),x=d(["珍珠","粉條","小粉圓","椰果","芋頭"]),T=d([{name:"珍珠鮮奶茶",engName:"Pearl Milk Tea",price:60},{name:"鮮奶茶",engName:"Milk Tea",price:50},{name:"古意冬瓜茶",engName:"Winter Melon Drink",price:30},{name:"蜜香紅茶",engName:"Black Tea",price:30},{name:"包種青茶",engName:"Black Tea",price:35},{name:"檸檬烏龍",engName:"Lemon Oolong Tea",price:55},{name:"薑母茶",engName:"Ginger Tea",price:55},{name:"青草茶",engName:"Herbal Tea",price:35},{name:"金桔檸檬",engName:"Kumquat Lemonade",price:40},{name:"柳澄青茶",engName:"Orange Mountain Tea",price:45}]),o=j({}),p=d([]),f=d(0);function w(c){Object.assign(o,{...c,count:1,ice:"正常冰",sugar:"全糖",toppings:[],notice:""})}function v(){for(const c in o)delete o[c]}function V(c){p.value.push(Object.assign({},{...c,subtotal:(c.price+c.toppings.length*10)*c.count})),C(),v()}function C(){f.value=p.value.reduce((c,i)=>c+i.subtotal,0)}function U(){p.value.length=0,f.value=0}return(c,i)=>(n(),a("div",D,[e("div",L,[e("div",E,[e("div",z,[(n(!0),a(u,null,m(T.value,(t,s)=>(n(),a("a",{href:"javascript:void(0);",class:O(["list-group-item list-group-item-action",{active:o.name===t.name}]),key:`${s}-${t.engName}`,onClick:r=>w(t)},[e("h6",P,l(t.name),1),e("div",S,[e("p",X,[e("small",null,l(t.engName),1)]),e("p",q,[e("small",null,"NT$ "+l(t.price),1)])])],10,F))),128))])]),e("div",G,[e("div",H,[o.name?M("",!0):(n(),a("div",K," 請先選擇飲品 ")),e("div",R,[e("div",W,[A,_(e("input",{type:"number",class:"form-control",id:"productNum",placeholder:"數量",min:"0","onUpdate:modelValue":i[0]||(i[0]=t=>o.count=t)},null,512),[[g,o.count]])]),e("div",I,[J,(n(!0),a(u,null,m($.value,(t,s)=>(n(),a("div",{class:"form-check form-check-inline",key:`${s}-${t}`},[_(e("input",{class:"form-check-input",name:"iceType",type:"radio",id:`${s}-${t}`,value:t,"onUpdate:modelValue":r=>o.ice=r},null,8,Q),[[k,o.ice]]),e("label",{class:"form-check-label",for:`${s}-${t}`},l(t),9,Y)]))),128))]),e("div",Z,[ee,(n(!0),a(u,null,m(N.value,(t,s)=>(n(),a("div",{class:"form-check form-check-inline",key:`${s}-${t}`},[_(e("input",{class:"form-check-input",name:"sugarType",type:"radio",id:`${s}-${t}`,value:t,"onUpdate:modelValue":r=>o.sugar=r},null,8,te),[[k,o.sugar]]),e("label",{class:"form-check-label",for:`${s}-${t}`},l(t),9,oe)]))),128))]),e("div",se,[le,(n(!0),a(u,null,m(x.value,(t,s)=>(n(),a("div",{class:"form-check form-check-inline",key:`${s}-${t}`},[_(e("input",{class:"form-check-input",type:"checkbox",id:`${s}-${t}`,value:t,"onUpdate:modelValue":i[1]||(i[1]=r=>o.toppings=r)},null,8,ne),[[B,o.toppings]]),e("label",{class:"form-check-label",for:`${s}-${t}`},l(t),9,ae)]))),128))]),e("div",ce,[ie,_(e("textarea",{class:"form-control",id:"productNotice",rows:"2","onUpdate:modelValue":i[2]||(i[2]=t=>o.notice=t)},null,512),[[g,o.notice]])]),e("div",re,[e("button",{class:"btn btn-outline-primary w-100",type:"button",onClick:v}," 取消 "),e("button",{class:"btn btn-primary w-100",type:"button",onClick:i[3]||(i[3]=t=>V(o))}," 加入 ")])])]),e("div",de,[e("div",ue,[e("table",me,[_e,(n(!0),a(u,null,m(p.value,(t,s)=>(n(),a("tbody",{key:`${s}-${t.name}`},[e("tr",null,[e("th",pe,[y(l(t.name),1),he,e("small",be,"備註："+l(t.notice),1)]),e("td",null,l(t.ice),1),e("td",null,l(t.sugar),1),e("td",null,l(t.toppings.join(", ")),1),e("td",null,l(h(b).commafy(t.price)),1),e("td",null,l(h(b).commafy(t.count)),1),e("td",fe,l(h(b).commafy(t.subtotal)),1)])]))),128))]),e("p",ve,"共 NT$ "+l(h(b).commafy(f.value))+" 元",1),e("button",{class:"btn btn-sm btn-secondary w-100",onClick:U},"重新選擇")])])])])]))}};export{ye as default};
