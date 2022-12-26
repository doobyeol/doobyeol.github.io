import{d as x,r as n,a as d,o as D,c as A,b as B,e as L,p as T,f as P,_ as g,s as h,t as E,u as r,n as y,g as S,h as p,i as $,F as _,j as F,k,l as f,m as b}from"./index.063f70b9.js";const j=x("bubbleStore",()=>{const u=n(!1),t=n(null),o=n(null),C=n(),a=n(),l=()=>{u.value=!0,C.value=setTimeout(()=>{u.value=!1},1500)},e=()=>{clearTimeout(C.value),clearTimeout(a.value)};return{isShowBubble:u,showBubble:l,onEmoji:c=>{e(),t.value=c,o.value=null,l()},onText:c=>{e(),t.value=null,o.value=c,l()},isEmoji:t,isText:o,clearBubbleAll:e}}),w=u=>(T("data-v-bf70601f"),u=u(),P(),u),M={class:"profileWrap"},I=w(()=>B("div",{class:"cover"},null,-1)),O=L('<ul class="txt" data-v-bf70601f><li class="name" data-v-bf70601f>\uB450\uBCC4</li><li data-v-bf70601f>Web Developer</li><li class="flex gray" data-v-bf70601f><a href="https://www.google.co.kr/maps/place/%EC%84%9C%EC%9A%B8%ED%8A%B9%EB%B3%84%EC%8B%9C+%EC%98%81%EB%93%B1%ED%8F%AC%EC%8B%9C%EC%9E%A5%EC%97%AD%EC%95%9E" target="_blink" data-v-bf70601f><span class="pin" data-v-bf70601f></span> Seoul </a></li><li class="flex gray" data-v-bf70601f><a href="mailto:doobyeol@gmail.com" data-v-bf70601f><span class="mail" data-v-bf70601f></span> doobyeol@gmail.com </a></li><li class="flex" data-v-bf70601f><a href="https://velog.io/@doobyeol" target="_blink" class="velog icon" title="velog" data-v-bf70601f></a><a href="https://github.com/doobyeol" target="_blink" class="github icon" title="github" data-v-bf70601f></a></li></ul>',1),V=d({__name:"Profile",setup(u){const t=j(),o=n(["hello, world !","\uBC30\uACE0\uD504\uB2E4..","\uC624\uB298 \uBB50\uBA39\uC9C0..","\uBD88\uC744 \uB044\uACE0 \uB098\uC654\uC5C8\uB098?..","\uB204\uAC00 \uC790\uAFB8 \uAC74\uB4DC\uB294 \uB290\uB08C..","\uADF8\uB9CC \uB20C\uB7EC!..","\uC0AC\uC2E4 \uC88B\uC544..","\uC774\uACF3\uC5D0 \uC640\uC918\uC11C \uACE0\uB9C8\uC6CC","\uC624\uB298 \uD558\uB8E8 \uD589\uC6B4\uC774 \uAC00\uB4DD\uD574","\uC88B\uC740 \uC77C\uC774 \uC77C\uC5B4\uB0A0\uAC70\uC57C","no need be best","only good and kind !"]),C=n(0);function a(){t.onEmoji("heart")}function l(){t.onText(o.value[C.value]),C.value++,o.value.length==C.value&&(C.value=0)}return(e,s)=>(D(),A("div",M,[B("div",{class:"content"},[I,B("div",{class:"profile"},[B("div",{class:"pic",onClick:l})]),B("div",{class:"button"},[B("a",{onClick:a})])]),O]))}});const W=g(V,[["__scopeId","data-v-bf70601f"]]),N=d({__name:"Bubble",setup(u){const t=j(),{isShowBubble:o,isEmoji:C,isText:a}=h(t);return(l,e)=>(D(),A("div",{class:y(["bubbleWrafp",r(o)?"":"hide"])},[B("p",{class:y(r(C)?r(C):"")},E(r(a)?r(a):""),3)],2))}});const G=g(N,[["__scopeId","data-v-d8f48e23"]]),v=x("timelineStore",()=>{const u=n([{date:"20221124",type:"introduction",title:"Skills and Languages",text:"",link:"",imgPath:""}]),t=n([{date:"20221124",type:"career",title:`\u321C\uC5D0\uC2A4\uD53C\uC5D0\uC774\uCE58 (\uD074\uB77C\uC6B0\uB4DC\uD300 \uC0AC\uC6D0)
                    2021.07 - \uD604\uC7AC`,text:`
            1. GS \uCE7C\uD14D\uC2A4 \uC0C1\uAD8C\uBD84\uC11D WEB (2022.08 ~ )
            - \uAE30\uC220\uC2A4\uD0DD : Vue, javascript, Java, Spring Boot, postgreSQL
            - Google Map \uAE30\uBC18 \uC11C\uBE44\uC2A4 \uAC1C\uBC1C
            - Google Map UI \uAD00\uB828 \uB354\uBE14 \uBC84\uD37C\uB9C1\uC744 \uC0AC\uC6A9\uD55C \uC131\uB2A5 \uAC1C\uC120
            - \uAD00\uB9AC\uC790 \uD398\uC774\uC9C0 \uAC1C\uBC1C
            - Azure OAuth SSO \uAC1C\uBC1C
            - \uD310\uB9E4\uC2E4\uC801/\uC810\uB450\uAC00 \uD1B5\uACC4 \uCFFC\uB9AC \uC791\uC131

            2. Kagos \uC790\uC0B0\uAD00\uB9AC \uC194\uB8E8\uC158 WEB ( 2022.01 ~ 2022.07 )
            - \uAE30\uC220\uC2A4\uD0DD : Vue, Javascript, Java, Spring Boot, postgreSQL
            - Spring Security + JWT \uB85C\uADF8\uC778 \uAC1C\uBC1C
            - Okta SAML SSO \uAC1C\uBC1C
            - Tableau \uD1A0\uD070\uAE30\uBC18 SSO \uB85C\uADF8\uC778, \uD654\uBA74 \uC5F0\uB3D9 \uAC1C\uBC1C
            - Vue Slot\uC744 \uC0AC\uC6A9\uD55C \uACF5\uD1B5 \uB808\uC774\uC544\uC6C3 \uAC1C\uBC1C
            - \uACF5\uD1B5 Vue \uCEF4\uD3EC\uB10C\uD2B8 \uAC1C\uBC1C
            - Frontend \uACF5\uD1B5 API \uBAA8\uB4C8 \uAC1C\uBC1C

            3. LG \uD558\uC774\uCF00\uC5B4 \uC0C1\uD669\uC2E4 \uC2DC\uC2A4\uD15C WEB (2021.08 ~ 2021.12)
            - \uAE30\uC220\uC2A4\uD0DD : JSP, jQuery, Java, Spring, postgreSQL
            - Tmap \uAE30\uBC18 \uC2E4\uC2DC\uAC04 \uBAA8\uB2C8\uD130\uB9C1 \uC54C\uB9BC \uC11C\uBE44\uC2A4 \uAC1C\uBC1C
            `,link:"",imgPath:""},{date:"20221124",type:"career",title:`\u321C\uC5D0\uC774\uD2B8\uC6D0 (\uC5F0\uAD6C\uAC1C\uBC1C\uD300 \uC0AC\uC6D0)
                    2018.10 - 2020.02 (1\uB144 5\uAC1C\uC6D4)`,text:`
            1. \uC548\uC804\uBCF4\uAC74\uACF5\uB2E8 \uC704\uAE30\uD0C8\uCD9C\uC548\uC804\uC810\uAC80 APP (2018.03 ~ 2019.03)
            - \uAE30\uC220\uC2A4\uD0DD : HTML, CSS, Javascript, JSP
            - UI&UX \uB514\uC790\uC778 & \uD37C\uBE14\uB9AC\uC2F1

            2. \uC548\uC804\uBCF4\uAC74\uACF5\uB2E8 \uD604\uC7A5\uBC30\uC1A1\uC11C\uBE44\uC2A4 WEB (2019.03 ~ 2019.07)
            - \uAE30\uC220\uC2A4\uD0DD : HTML, CSS, Javascript, JSP
            - UI&UX \uB514\uC790\uC778 & \uD37C\uBE14\uB9AC\uC2F1

            3. \uC0BC\uC131\uC804\uC790 \uC911\uC7A5\uBE44 APP / CMS WEB (2019.08 ~ 2019.12)
            - \uAE30\uC220\uC2A4\uD0DD : HTML, CSS, Javascript, JSP
            - UI&UX \uB514\uC790\uC778 & \uD37C\uBE14\uB9AC\uC2F1

            4. \uC194\uD2B8\uC6CD\uC2A4 \uD504\uB85C\uC81D\uD2B8 \uB9E4\uB2C8\uC9C0\uBA3C\uD2B8 WEB (2019.10 ~ 2020.02)
            - \uAE30\uC220\uC2A4\uD0DD : HTML, CSS, Javascript, JSP
            - UI&UX \uB514\uC790\uC778 & \uD37C\uBE14\uB9AC\uC2F1

            5. \uC548\uC804\uBCF4\uAC74\uACF5\uB2E8 \uC704\uAE30\uD0C8\uCD9C\uC548\uC804\uBCF4\uAC74 APP (2019.12 ~ 2020.02)
            - \uAE30\uC220\uC2A4\uD0DD : HTML, CSS, Javascript, JSP
            - UI&UX \uB514\uC790\uC778 & \uD37C\uBE14\uB9AC\uC2F1`,link:"",imgPath:""},{date:"20221124",title:"",text:"Test !",imgPath:"",link:"",type:""},{date:"20221210",type:"introduction",title:"\uC18C\uAC1C\uAE00",text:`\uB354 \uB098\uC740 \uC11C\uBE44\uC2A4\uB97C \uC704\uD574 \uB354 \uB098\uC740 \uAC1C\uBC1C\uC790\uAC00 \uB418\uACE0\uC790 \uB178\uB825\uD569\uB2C8\uB2E4.
                    \uC131\uC7A5\uD558\uB294 \uC7AC\uBBF8\uB97C \uC990\uAE41\uB2C8\uB2E4.`,link:"",imgPath:""},{date:"20221211",type:"introduction",title:"\uAE30\uB85D\uC740 \uACE7 \uC790\uC0B0\uC774 \uB41C\uB2E4!",text:`\uC785\uC0AC \uD6C4 \uAFB8\uC900\uD788 \uC5C5\uBB34\uC77C\uC9C0\uB97C \uC791\uC131\uD574\uC654\uC2B5\uB2C8\uB2E4.
            \uD559\uC6D0\uC744 \uB2E4\uB2C8\uB358 \uB54C\uC5D0\uB3C4, \uADF8\uB0A0 \uADF8\uB0A0 \uBC30\uC6B4\uAC78 \uBE14\uB85C\uADF8\uC5D0 \uC815\uB9AC\uD558\uB358 \uC2B5\uAD00\uC774 \uC788\uC5C8\uAE30 \uB54C\uBB38\uC5D0 
            \uC5C5\uBB34\uC77C\uC9C0\uB3C4 \uC790\uC5F0\uC2A4\uB808 \uC4F0\uAC8C \uB41C \uAC83 \uAC19\uC544\uC694.
            \uC8FC\uB85C \uB9E1\uC740 \uC5C5\uBB34\uC758 \uAE30\uB2A5 \uB2E8\uC704\uB85C \uC791\uC131\uD558\uACE0 \uD574\uB2F9 \uAE30\uB2A5\uC744 \uAC1C\uBC1C\uD558\uBA74\uC11C \uC0DD\uAC01\uD55C \uD50C\uB85C\uC6B0, 
            \uCC38\uACE0\uD55C \uB808\uD37C\uB7F0\uC2A4, \uC911\uC694\uD55C \uAE30\uB2A5 \uC124\uBA85, \uAC1C\uBC1C\uD558\uBA74\uC11C \uACAA\uC740 \uC5B4\uB824\uC6B4 \uC810\uACFC 
            \uC5B4\uB5BB\uAC8C \uD574\uACB0\uD588\uB294\uC9C0\uC5D0 \uB300\uD55C \uACFC\uC815\uC744 \uAE30\uB85D \uD569\uB2C8\uB2E4.
            \uC774\uB807\uAC8C \uC791\uC131\uD574\uB450\uBA74 \uB098\uC911\uC5D0 \uB0B4\uAC00 \uAC1C\uBC1C\uD588\uB358 \uAE30\uB2A5\uB4E4\uC744 \uB2E4\uC2DC \uBD10\uC57C\uD560 \uB54C 
            \uC5C5\uBB34\uC77C\uC9C0\uB97C \uCC38\uACE0\uD558\uC5EC \uAE08\uBC29 \uD30C\uC545\uD558\uAE30\uAC00 \uC27D\uACE0 
            \uC911\uC694\uD55C \uAE30\uB2A5\uB4E4\uC744 \uC78A\uC9C0 \uC54A\uACE0 \uC7AC\uC0AC\uC6A9 \uD560 \uC218 \uC788\uC5B4\uC694! \u{1F604}`,link:"",imgPath:"/img/introduction/introduction_01.png"},{date:"20221211",type:"introduction",title:"TIL & \uD68C\uACE0\uB85D \uC791\uC131\uD558\uAE30",text:`\uAC1C\uBC1C\uC790\uB294 \uC8FD\uAE30\uC804\uAE4C\uC9C0\uB3C4 \uACF5\uBD80\uB97C \uD574\uC57C \uD55C\uB2E4\uACE0\uB4E4 \uD558\uC8E0.. 
            \uADF8\uB9CC\uD07C \uAC1C\uBC1C \uD2B8\uB80C\uB4DC\uB97C \uB193\uCCD0\uC120 \uC548\uB418\uB294 \uAC83\uB3C4 \uC788\uB294 \uAC83 \uAC19\uC544\uC694.
            \uC800\uB294 \uBB54\uAC00 \uACF5\uBD80\uD558\uACE0 \uAE68\uB2EC\uC740\uAC8C \uC788\uC744\uB54C \uB9C8\uB2E4 \uD68C\uACE0\uB85D\uC744 \uC791\uC131\uD588\uC2B5\uB2C8\uB2E4.
            \uD68C\uACE0\uB85D\uC744 \uC791\uC131\uD558\uBA74 \uC88B\uC740 \uC810\uC740 \uB0B4\uAC00 \uC774\uB9CC\uD07C \uACF5\uBD80\uD588\uAD6C\uB098, 
            \uB0B4\uAC00 \uC774\uB9CC\uD07C \uC131\uC7A5\uD588\uAD6C\uB098\uB97C \uBCFC \uC218 \uC788\uACE0 \uC131\uCDE8\uAC10 \uB355\uBD84\uC5D0 \uB354 \uC5F4\uC2EC\uD788 \uD558\uAC8C \uB418\uB294 \uAC83 \uAC19\uC544\uC694!\u{1F604}`,link:"https://velog.io/@doobyeol/series",imgPath:"/img/introduction/introduction_02.png"},{date:"20221211",type:"introduction",title:"\uC544\uBB34\uB9AC \uAC80\uC0C9\uD574\uB3C4 \uC548\uB098\uC624\uB294 \uC5D0\uB7EC\uB4E4\uC740 \uAF2D \uAE30\uB85D\uC744 \uD574\uB450\uC5B4\uC57C \uD55C\uB2E4. \uADF8\uB9AC\uACE0 \uC790\uC8FC \uACAA\uB294 \uC5D0\uB7EC\uB4E4\uB3C4 \uB9C8\uCC2C\uAC00\uC9C0!",text:`\uC5D0\uB7EC\uC758 \uBC1C\uC0DD \uC6D0\uC778\uACFC \uD574\uACB0 \uBC29\uBC95\uC744 \uAE30\uB85D\uD558\uBA74 
            \uB098\uC911\uC5D0 \uAC19\uC740 \uC5D0\uB7EC\uB97C \uACAA\uC5C8\uC744 \uB54C \uBC14\uB85C \uD574\uACB0\uBC29\uBC95\uC740 \uC548\uB5A0\uC624\uB974\uB354\uB77C\uB3C4 
            \uC544! \uC774\uAC70 \uACAA\uC5B4\uBCF8 \uC5D0\uB7EC\uC57C! \uD558\uBA74\uC11C \uC774\uC804\uC5D0 \uAE30\uB85D\uD574\uB454 \uBE14\uB85C\uADF8\uC640 \uB178\uC158\uC744 \uCC38\uACE0\uD558\uC5EC 
            \uAE08\uBC29 \uD574\uACB0\uD560 \uC218 \uC788\uC5C8\uC2B5\uB2C8\uB2E4. \u{1F604}`,link:"https://velog.io/@doobyeol?tag=error",imgPath:"/img/introduction/introduction_03.png"},{date:"20221211",type:"introduction",title:"\uACB0\uACFC\uBCF4\uB2E4\uB294 \uACBD\uD5D8\uC758 \uAC00\uCE58\uB97C \uC544\uB294 \uC0AC\uB78C\uC774 \uB418\uACE0 \uC2F6\uB2E4!",text:`\uC800\uC5D0\uAC8C \uC544\uB08C\uC5C6\uB294 \uC0AC\uB791\uACFC \uC751\uC6D0\uC744 \uC8FC\uB294 \uC0AC\uB78C\uB4E4\uC5D0\uAC8C
            \uBB34\uC5C7\uC774\uB4E0 \uC798 \uD574\uB0B4\uB294 \uBAA8\uC2B5\uC73C\uB85C \uBCF4\uB2F5\uD558\uACE0 \uC2F6\uC5C8\uB358 \uC801\uC774 \uC788\uC5C8\uC2B5\uB2C8\uB2E4.
            \uC800 \uB610\uD55C \uADF8\uB4E4\uC5D0\uAC8C \uC88B\uC740 \uC601\uD5A5\uC744 \uC8FC\uACE0 \uC2F6\uC5C8\uB358 \uB9C8\uC74C\uC774 \uCEF8\uB358 \uAC83 \uAC19\uC544\uC694.
            \uD558\uC9C0\uB9CC \uC810\uC810 \uC644\uBCBD\uC744 \uCD94\uAD6C\uD558\uAC8C \uB418\uBA74\uC11C, 
            \uC2A4\uC2A4\uB85C \uB9CE\uC740 \uBD80\uB2F4\uC744 \uC9C0\uAC8C \uD588\uB358 \uAC83 \uAC19\uB354\uB77C\uAD6C\uC694.
            \uADF8\uB798\uC11C \uC774\uC81C\uB294 \uADF8\uB7F0 \uC695\uC2EC \uBAA8\uB450 \uB0B4\uB824\uB193\uACE0! 
            \uACB0\uACFC\uBCF4\uB2E4 \uC911\uC694\uD55C \uAC83\uC740 \uC5B8\uC81C\uB098 \uACBD\uD5D8\uC774\uB77C\uB294 \uAC83\uC744 \uBBFF\uAE30 \uC2DC\uC791\uD588\uC2B5\uB2C8\uB2E4.
            \uACBD\uD5D8\uC744 \uB450\uB824\uC6CC\uD558\uC9C0 \uC54A\uACE0 \uC990\uAE34\uB2E4\uBA74 \uBB34\uC5C7\uC774\uB4E0 \uD574\uB0BC \uC218 \uC788\uB2E4\uB294 \uAC83\uC744 \uAE68\uB2EC\uC558\uC2B5\uB2C8\uB2E4.
            \uADF8\uB9AC\uACE0 \uADF8\uB7F0 \uAE0D\uC815\uC801\uC778 \uC5D0\uB108\uC9C0\uB4E4\uC774 \uB098\uB97C \uBBFF\uC5B4\uC8FC\uACE0 \uC9C0\uCF1C\uBD10\uC8FC\uB294 
            \uC774\uB4E4\uC5D0\uAC8C\uB3C4 \uBD84\uBA85 \uC88B\uC740 \uC601\uD5A5\uC744 \uC904 \uC218 \uC788\uC744 \uAC83\uC774\uB77C \uBBFF\uC5B4\uC694.
            \uADF8\uB798\uC11C \uC800\uB294 \uACB0\uACFC\uBCF4\uB2E4 \uACBD\uD5D8\uC758 \uAC00\uCE58\uB97C \uC544\uB294 \uC0AC\uB78C\uC774 \uB418\uACE0\uC790 \uD569\uB2C8\uB2E4! \u{1F604}`,link:"",imgPath:"/img/introduction/introduction_04.png"},{date:"20221211",type:"introduction",title:"\uC11C\uB978\uC0B4 \uC804\uC5D0 \uD480\uC2A4\uD0DD \uAC1C\uBC1C\uC790\uAC00 \uB418\uC790!",text:`\uCC98\uC74C \uAC1C\uBC1C\uC790\uAC00 \uB418\uACA0\uB2E4\uACE0 \uB2E4\uC9D0\uD588\uC744 \uB54C 
            \uC11C\uB978 \uC804\uC5D0 \uD480\uC2A4\uD0DD \uAC1C\uBC1C\uC790\uAC00 \uB418\uC790\uB294 \uB2F9\uCC2C \uD3EC\uBD80\uB97C \uAC00\uC84C\uC5C8\uB294\uB370 (\u314B\u314B) 
            \uD480\uC2A4\uD0DD \uAC1C\uBC1C\uC790.. \uADF8\uAC70 \uADF8\uB807\uAC8C \uC27D\uAC8C \uB418\uB294\uAC8C \uC544\uB2C8\uB354\uB77C\uAD6C\uC694.. 
            \uADF8\uB798\uC11C \uCC28\uADFC\uCC28\uADFC \uB2E8\uACC4\uB97C \uBC1F\uC544 \uB098\uC544\uAC00\uB294 \uC911\uC785\uB2C8\uB2E4.
            \uD37C\uBE14\uB9AC\uC154 \uCD9C\uC2E0\uC774\uB77C \uADF8\uB7F0\uC9C0 \uC81C\uAC8C \uD504\uB860\uD2B8 \uAC1C\uBC1C\uC790 \uD560\uAC70\uB0D0\uACE0 \uBB3C\uC5B4\uBCF4\uB294 \uBD84\uB4E4\uC774 \uACC4\uC168\uB294\uB370 
            \uC0AC\uC2E4.. \uD504\uB860\uD2B8\uBCF4\uB2E4 \uBC31\uC5D4\uB4DC\uAC00 \uC880 \uB354 \uC990\uAC70\uC6CC\uC694!
            \uD654\uBA74\uC744 \uB3D9\uC801\uC73C\uB85C \uAC1C\uBC1C\uD558\uB294 \uD504\uB860\uD2B8\uB294 \uB208\uC73C\uB85C \uBCF4\uB294 \uC7AC\uBBF8\uAC00 \uC788\uC9C0\uB9CC, 
            \uADF8\uC5D0 \uBE44\uD574 \uBC31\uC5D4\uB4DC\uB294 \uCD94\uC0C1\uC801\uC774\uACE0 \uC5B4\uB835\uB2E4\uB294 \uB290\uB08C\uC774 \uAC15\uD588\uC2B5\uB2C8\uB2E4.
            \uADF8\uB798\uC11C \uBC31\uC5D4\uB4DC \uACF5\uBD80\uB97C \uC9D1\uC911\uC801\uC73C\uB85C \uC2DC\uC791\uD588\uB294\uB370, 
            \uCD94\uC0C1\uC801\uC774\uB77C\uACE0 \uB290\uAF07\uB358 \uAC1C\uB150\uB4E4\uC774 \uC810\uC810 \uB208\uC5D0 \uBCF4\uC774\uAE30 \uC2DC\uC791\uD588\uC5B4\uC694!
            \uC54C\uC544\uAC08\uC218\uB85D \uC5B4\uB835\uB2E4\uACE0 \uB290\uAF08\uB358 \uBCBD\uC774 \uD5C8\uBB3C\uC5B4\uC9C0\uACE0 
            \uC5BB\uAC8C \uB418\uB294 \uC131\uCDE8\uAC10\uB4E4\uC774 \uC815\uB9D0 \uC9DC\uB9BF\uD55C \uAC83 \uAC19\uC2B5\uB2C8\uB2E4. \u{1F604}`,link:"",imgPath:"/img/introduction/introduction_05.png"},{date:"20221211",type:"project",title:`[ \uD1A0\uC774 \uD504\uB85C\uC81D\uD2B8 ] 

                    \uAC1C\uC778 \uD3EC\uD2B8\uD3F4\uB9AC\uC624 \uC0AC\uC774\uD2B8
                    2022.11 - 2022.12 (1\uAC1C\uC6D4)`,text:`
                \uAE30\uC220\uC2A4\uD0DD : 
                - FRONT : Vite + Vue3, Typescript, CSS

                Github : https://github.com/doobyeol/portfolio
            `,link:"https://doobyeol.github.io/",imgPath:"/img/project/portfolio.png"},{date:"20221211",type:"project",title:`[ \uD1A0\uC774 \uD504\uB85C\uC81D\uD2B8 ] 

                    LoL Ground (Front)
                    2022.11 (1\uAC1C\uC6D4)`,text:`
                LoL Members \uC804\uC801 \uBE44\uAD50

                \uAE30\uC220\uC2A4\uD0DD : 
                - FRONT : Vite + Vue3, Vuetify, Javascript

                Github : https://github.com/doobyeol/lol-ground/tree/doobyeol
            `,link:"https://returntrue.tk/",imgPath:"/img/project/lol_ground.png"},{date:"20221211",type:"project",title:`[ \uD1A0\uC774 \uD504\uB85C\uC81D\uD2B8 ]

                    \uD589\uBCF5 \uBC15\uBB3C\uAD00
                    2022.07 - 2022.10 (3\uAC1C\uC6D4)`,text:`
                \uD589\uBCF5\uC744 \uC804\uC2DC\uD558\uB294 \uD589\uBCF5\uBC15\uBB3C\uAD00 DEMO

                \uAE30\uC220\uC2A4\uD0DD : 
                - BACK : Spring, JAVA, My Batis, Swagger, Spring Security, JWT, RESTful API, Spring Cloud Config, AWS EC2
                - FRONT : Vue2, Vuetify, Javascript

                2023\uB144 JPA, Vue3, Typescript\uB85C \uB9C8\uC774\uADF8\uB808\uC774\uC158 \uC608\uC815

            `,link:"https://github.com/doobyeol/happiness-museum",imgPath:"/img/project/happiness_museum.png"},{date:"20221211",type:"project",title:`[ \uD559\uC6D0 \uD504\uB85C\uC81D\uD2B8 ] 

                    \uC11C\uC6B8\uBA54\uC774\uD2B8 \uC2E4\uC2DC\uAC04 \uCC44\uD305
                    2021.04 - 2021.05 (1\uAC1C\uC6D4)`,text:`
                    \uBE44\uD2B8\uCEA0\uD504 \uC6F9\uAC1C\uBC1C\uC790 \uC591\uC131\uACFC\uC815 \uD30C\uC774\uB110 \uAC1C\uC778 \uD504\uB85C\uC81D\uD2B8
                    \uC2E4\uC2DC\uAC04 \uCC44\uD305 \uC6F9 \uC11C\uBE44\uC2A4

                    1. \uAE30\uC220\uC2A4\uD0DD : 
                    - BACK : Node.js, Oracle, 
                    - FRONT : EJS, HTML5 , CSS3, JavaScript

                    2. \uAD6C\uD604 \uAE30\uB2A5
                    - Node \uC11C\uBC84 \uAD6C\uCD95 \uBC0F DB\uC5F0\uB3D9
                    - \uC720\uC800\uAC04\uC758 \uB9E4\uCE6D\uC774 \uB418\uC5C8\uC744\uB54C \uCC44\uD305 \uD65C\uC131\uD654
                    - \uC0C8\uB85C\uC6B4 \uBA54\uC138\uC9C0 \uC218 \uC2DC\uAC01\uC801 \uC54C\uB9BC
                    - \uCD5C\uC2E0 \uBA54\uC138\uC9C0 \uC2E4\uC2DC\uAC04 \uBBF8\uB9AC\uBCF4\uAE30
                    - \uBA54\uC138\uC9C0 \uB3C4\uCC29 \uC2DC\uAC04\uC744 \uD604\uC7AC \uC2DC\uAC01 \uAE30\uC900\uC73C\uB85C \uBC29\uAE08\uC804, n\uBD84\uC804, n\uC2DC\uAC04\uC804, n\uC77C\uC804...\uC73C\uB85C \uD45C\uAE30
                    - \uC2E0\uACE0\uD558\uAE30 \uAE30\uB2A5\uC73C\uB85C \uAD00\uB9AC\uC790\uAC00 \uCC44\uD305 \uB0B4\uC6A9 \uBAA8\uB2C8\uD130\uB9C1
                    - \uCC44\uD305\uBC29 \uB098\uAC00\uAE30

                    Github : https://github.com/doobyeol/SeoulMateChat
                    \uAE30\uB2A5\uC2DC\uD604 : https://www.youtube.com/watch?v=pWZ4pJBUc0c
                    \uD504\uB85C\uC81D\uD2B8 \uD6C4\uAE30 : https://blog.naver.com/doobyeol

            `,link:"https://github.com/doobyeol/SeoulMate",imgPath:"/img/project/seoulmate_02.png"},{date:"20221211",type:"project",title:`[ \uD559\uC6D0 \uD504\uB85C\uC81D\uD2B8 ] 

                    \uC11C\uC6B8\uBA54\uC774\uD2B8
                    2021.04 - 2021.05 (1\uAC1C\uC6D4)`,text:`
                    \uBE44\uD2B8\uCEA0\uD504 \uC6F9\uAC1C\uBC1C\uC790 \uC591\uC131\uACFC\uC815 \uD30C\uC774\uB110 \uD300\uD504\uB85C\uC81D\uD2B8
                    \uC250\uC5B4\uD558\uC6B0\uC2A4 & \uD558\uC6B0\uC2A4\uBA54\uC774\uD2B8 \uB9E4\uCE6D \uD50C\uB7AB\uD3FC

                    1. \uAE30\uC220\uC2A4\uD0DD : 
                    - BACK : JAVA, JSP, Spring, My Batis, Oracle, Node.js, 
                    - FRONT : EJS, HTML5 , CSS3, JavaScript
                    - ETC : Kakao Map, Git

                    2. \uB2F4\uB2F9 \uAD6C\uD604 \uAE30\uB2A5
                    - Main \uD398\uC774\uC9C0 \uC804\uCCB4 \uAE30\uB2A5 
                    (\uAC80\uC0C9, \uB9E4\uCE6D \uBBF8\uB9AC\uBCF4\uAE30, \uB0B4\uC8FC\uBCC0 \uC250\uC5B4\uD558\uC6B0\uC2A4 \uBBF8\uB9AC\uBCF4\uAE30)
                    - \uB85C\uADF8\uC778 & \uB85C\uADF8\uC544\uC6C3
                    - \uCE74\uCE74\uC624\uB9F5 API \uD074\uB7EC\uC2A4\uD130\uB7EC, \uC624\uBC84\uB808\uC774 \uAE30\uB2A5
                    - \uD558\uC6B0\uC2A4\uBA54\uC774\uD2B8 \uC870\uD68C \uD654\uBA74 \uD398\uC774\uC9D5, \uAC80\uC0C9\uD544\uD130
                    - Node.js \uC2E4\uC2DC\uAC04 \uCC44\uD305 \uC11C\uBC84 \uAD6C\uCD95
                    (\uC2E4\uC2DC\uAC04 \uCC44\uD305, DB\uC5F0\uB3D9, \uCC44\uD305\uBC29 \uB098\uAC00\uAE30, \uC2E0\uACE0\uD558\uAE30 \uAE30\uB2A5)
                    - \uD504\uB85C\uC81D\uD2B8 \uC804\uCCB4 UI\uC124\uACC4 & \uD37C\uBE14\uB9AC\uC2F1

                    Github : https://github.com/doobyeol/SeoulMate
                    \uAE30\uB2A5\uC2DC\uD604 : https://youtu.be/XGxMIWEITew
                    \uD504\uB85C\uC81D\uD2B8 \uD6C4\uAE30 : https://blog.naver.com/doobyeol

            `,link:"https://github.com/doobyeol/SeoulMate",imgPath:"/img/project/seoulmate_01.png"},{date:"20221124",type:"career",title:"\uD559\uB825",text:`
                2020.12 ~ 2021.05 
                \uBE44\uD2B8\uCEA0\uD504 - \uC6F9 \uAC1C\uBC1C\uC790 \uC591\uC131 \uAD6D\uBE44 \uACFC\uC815 \uC218\uB8CC

                2018.04 ~ 2018.10 
                \uADF8\uB9B0\uCEF4\uD4E8\uD130\uC544\uD2B8\uD559\uC6D0 - \uBC18\uC751\uD615 \uC6F9 \uD37C\uBE14\uB9AC\uC2F1 \uAD6D\uBE44 \uACFC\uC815 \uC218\uB8CC

                2014.03 ~ 2018.02 
                \uC6A9\uC778\uB300\uD559\uAD50 - \uBBF8\uB514\uC5B4\uB514\uC790\uC778\uACFC \uC878\uC5C5

                2012.03 ~ 2014.02 
                \uC11C\uC6B8\uB514\uC790\uC778\uACE0\uB4F1\uD559\uAD50 - \uC601\uC0C1\uB514\uC790\uC778\uACFC \uC878\uC5C5
            `,link:"",imgPath:""}]),o=n("introduction"),C=s=>{o.value=s};function a(){let s=new Date;const i=s.getFullYear(),c=("0"+(s.getMonth()+1)).slice(-2),m=("0"+s.getDate()).slice(-2);return`${i}${c}${m}`}const l=async()=>{if(t.value.filter(c=>c.type=="blog").length>0)return;let s="https://proxy.cors.sh/https://v2.velog.io/graphql";const i=JSON.stringify({query:`
                query Posts($cursor: ID, $username: String, $temp_only: Boolean, $limit: Int) {
                    posts(cursor: $cursor, username: $username, temp_only: $temp_only, limit: $limit) {
                        id
                        title
                        short_description
                        thumbnail
                        user {
                            username
                            profile {
                                thumbnail
                            }
                        }
                        url_slug
                        released_at
                        updated_at
                        comments_count
                        tags
                        likes
                    }
                }
            `,variables:{username:"doobyeol",limit:100}});try{const m=await(await fetch(s,{method:"POST",headers:{"Content-Type":"application/json",Origin:"application/json"},body:i})).json();e(m.data.posts)}catch{s="https://cors-anywhere.herokuapp.com/https://v2.velog.io/graphql";try{const J=await(await fetch(s,{method:"POST",headers:{"Content-Type":"application/json",Origin:"application/json"},body:i})).json();e(J.data.posts)}catch{t.value.push({date:a(),type:"blog",title:"[ \uBE14\uB85C\uADF8\uC5D0 \uB180\uB7EC\uC624\uC138\uC694! ]",text:"\uACBD\uD5D8\uC744 \uAE30\uB85D\uD569\uB2C8\uB2E4.",link:"https://velog.io/@doobyeol",imgPath:"/img/timeline/blog_info.PNG"})}}};function e(s){for(const i of s)t.value.push({date:i.released_at,type:"blog",title:`[ ${i.title} ]`,text:`${i.short_description.substr(0,25)}...`,link:"https://velog.io/@doobyeol/"+i.url_slug,imgPath:i.thumbnail})}return{timelineList:t,activeTab:o,moveTab:C,fixedArticle:u,getPostList:l}}),U=u=>(T("data-v-b19197bb"),u=u(),P(),u),R={key:0,class:"timelineWrap"},H={class:"content"},X=U(()=>B("div",{class:"profile"},[B("div",{class:"img"}),B("p",{class:"name"},"\uB450\uBCC4")],-1)),q={class:"column"},K={class:"preLine"},Q=["href"],z={key:0,class:"img"},Y=["href"],Z=["src"],uu=d({__name:"Timeline",props:{item:null},setup(u){const t=v(),{activeTab:o}=h(t);return(C,a)=>u.item.type==r(o)?(D(),A("div",R,[B("div",H,[X,B("div",q,[B("p",K,[B("b",null,E(u.item.title),1),S(" "+E(u.item.text)+" ",1),u.item.link?(D(),A("a",{key:0,target:"_blink",href:u.item.link},E(u.item.link),9,Q)):p("",!0)]),u.item.imgPath?(D(),A("div",z,[B("a",{target:"_blink",href:u.item.link?u.item.link:"/"},[B("img",{src:u.item.imgPath,width:"100%",height:"100%"},null,8,Z)],8,Y)])):p("",!0)])])])):p("",!0)}});const Cu=g(uu,[["__scopeId","data-v-b19197bb"]]),Bu={class:"tabWrap"},tu={class:""},eu=["onClick"],ou=d({__name:"Tab",setup(u){const t=v(),{activeTab:o}=h(t);$(()=>{l()});const C=n([{class:"active",text:"\uC18C\uAC1C",type:"introduction"},{class:"",text:"\uACBD\uB825",type:"career"},{class:"",text:"\uD504\uB85C\uC81D\uD2B8",type:"project"},{class:"",text:"\uBE14\uB85C\uADF8",type:"blog"}]);function a(e){t.moveTab(e.type),l()}function l(){C.value=C.value.filter(e=>(e.type==o.value?e.class="active":e.class="",e))}return(e,s)=>(D(),A("div",Bu,[B("ul",tu,[(D(!0),A(_,null,F(C.value,i=>(D(),A("li",{key:i.type,onClick:c=>a(i)},[B("p",{class:y(i.class)},E(i.text),3)],8,eu))),128))])]))}});const Du=g(ou,[["__scopeId","data-v-ce4b6dca"]]),Au={class:"badge"},iu=["src"],su=d({__name:"Badge",props:{items:null},setup(u){return(t,o)=>(D(),A("ul",Au,[(D(!0),A(_,null,F(u.items,C=>(D(),A("li",{key:C.value,style:k({backgroundColor:C.color})},[B("img",{src:C.logo,style:k({width:C.logo?"13px":"0px"})},null,12,iu),S(" "+E(C.value),1)],4))),128))]))}});const au=g(su,[["__scopeId","data-v-963d6ffd"]]),lu={key:0,class:"timelineWrap"},nu={class:"content"},cu={class:"profile"},ru={class:"column"},Eu={class:"preLine"},pu=["href"],du={key:0,class:"img"},gu=["href"],mu=["src"],hu=d({__name:"PixArticle",props:{item:null},setup(u){const t=v(),{activeTab:o}=h(t),C=n([{value:"Java",color:"#5283a2"},{value:"Spring",color:"#62a458",logo:"https://simpleicons.org/icons/spring.svg"},{value:"Oracle",color:"#ae2525",logo:"https://simpleicons.org/icons/oracle.svg"},{value:"PostgreSQL",color:"#526e8e",logo:"https://simpleicons.org/icons/postgresql.svg"},{value:"Node.js",color:"#759c60",logo:"https://simpleicons.org/icons/nodedotjs.svg"},{value:"Vue.js",color:"#11b48a",logo:"https://simpleicons.org/icons/vuedotjs.svg"},{value:"JavaScript",color:"#f5b33c",logo:"https://simpleicons.org/icons/javascript.svg"},{value:"TypeScript",color:"#1c63b3",logo:"https://simpleicons.org/icons/typescript.svg"},{value:"SCSS",color:"#c9469d",logo:"https://simpleicons.org/icons/sass.svg"},{value:"Git",color:"#3e3e4a",logo:"https://simpleicons.org/icons/git.svg"},{value:"Docker",color:"#0090db",logo:"https://simpleicons.org/icons/docker.svg"}]);return(a,l)=>u.item.type==r(o)?(D(),A("div",lu,[B("div",nu,[B("div",cu,[B("b",null,E(u.item.title),1)]),B("div",ru,[B("p",Eu,[u.item.type=="introduction"?(D(),f(au,{key:0,items:C.value},null,8,["items"])):p("",!0),S(" "+E(u.item.text)+" ",1),u.item.link?(D(),A("a",{key:1,target:"_blink",href:u.item.link},E(u.item.link),9,pu)):p("",!0)]),u.item.imgPath?(D(),A("div",du,[B("a",{target:"_blink",href:u.item.link?u.item.link:"/"},[B("img",{src:u.item.imgPath,width:"100%",height:"100%"},null,8,mu)],8,gu)])):p("",!0)])])])):p("",!0)}});const _u=g(hu,[["__scopeId","data-v-594a60b7"]]),Fu={class:"contentWrap"},bu=d({__name:"Home",setup(u){const t=v(),{timelineList:o,fixedArticle:C}=h(t);return $(()=>{t.getPostList(),console.log(`
    %c
      \u2588\u2588\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2557 \u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2557  \u2588\u2588\u2557    \u2588\u2588\u2588\u2557   \u2588\u2588\u2588\u2557\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557    \u2588\u2588\u2557
      \u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2551\u2588\u2588\u2554\u2550\u2550\u2550\u2550\u255D\u2588\u2588\u2551 \u2588\u2588\u2554\u255D    \u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2588\u2588\u2551\u2588\u2588\u2554\u2550\u2550\u2550\u2550\u255D    \u2588\u2588\u2551
      \u2588\u2588\u2588\u2588\u2588\u2588\u2554\u255D\u2588\u2588\u2551\u2588\u2588\u2551     \u2588\u2588\u2588\u2588\u2588\u2554\u255D     \u2588\u2588\u2554\u2588\u2588\u2588\u2588\u2554\u2588\u2588\u2551\u2588\u2588\u2588\u2588\u2588\u2557      \u2588\u2588\u2551
      \u2588\u2588\u2554\u2550\u2550\u2550\u255D \u2588\u2588\u2551\u2588\u2588\u2551     \u2588\u2588\u2554\u2550\u2588\u2588\u2557     \u2588\u2588\u2551\u255A\u2588\u2588\u2554\u255D\u2588\u2588\u2551\u2588\u2588\u2554\u2550\u2550\u255D      \u255A\u2550\u255D
      \u2588\u2588\u2551     \u2588\u2588\u2551\u255A\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2551  \u2588\u2588\u2557    \u2588\u2588\u2551 \u255A\u2550\u255D \u2588\u2588\u2551\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557    \u2588\u2588\u2557
      \u255A\u2550\u255D     \u255A\u2550\u255D \u255A\u2550\u2550\u2550\u2550\u2550\u255D\u255A\u2550\u255D  \u255A\u2550\u255D    \u255A\u2550\u255D     \u255A\u2550\u255D\u255A\u2550\u2550\u2550\u2550\u2550\u2550\u255D    \u255A\u2550\u255D
                                                              
  `,"color: #bc849c")}),(a,l)=>(D(),A("div",Fu,[b(W),b(G),b(Du),(D(!0),A(_,null,F(r(C),e=>(D(),f(_u,{key:e.title,item:e},null,8,["item"]))),128)),(D(!0),A(_,null,F(r(o),e=>(D(),f(Cu,{key:e.title,item:e},null,8,["item"]))),128))]))}});export{bu as default};
