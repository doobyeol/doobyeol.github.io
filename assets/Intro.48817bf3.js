import{d as v,A as d,r as t,i as m,B as h,o as f,c as I,e,n as r,k as S,y as g,z as k,C as y,p as B,h as b,_ as x}from"./index.6dffb682.js";const C=s=>(B("data-v-e081732b"),s=s(),b(),s),w={class:"introWrap"},$={class:"ilustWrap"},z=C(()=>e("div",{class:"illust"},null,-1)),T={class:"buttonWrap"},U={class:"txt"},W=v({__name:"Intro",setup(s){const i=d(),o=t(!1),a=t(!1);m(()=>{i.watchedIntro()}),h(()=>{clearInterval(l),clearTimeout(n.value)});const n=t(),l=setInterval(()=>{o.value=!o.value},250),u=()=>{a.value=!0,o.value=!0,clearInterval(l),n.value=setTimeout(()=>{y.push("/")},6e3)},p=t("/img/intro/images/stop.gif"),_=t("/img/intro/images/play.gif"),c=t("no-repeat center / contain fixed");return(M,A)=>(f(),I("div",w,[e("div",$,[z,e("div",{class:r(["play",a.value?"stop":""]),style:S({background:a.value?`url(${p.value+"?"+Math.random()}) ${c.value}`:`url(${_.value}) ${c.value}`})},null,6)]),e("div",T,[g(e("div",U,"Click!",512),[[k,!o.value]]),e("div",{class:r(["btn",a.value?"stop":""]),onClick:u},null,2)])]))}});const E=x(W,[["__scopeId","data-v-e081732b"]]);export{E as default};
