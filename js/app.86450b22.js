(function(){"use strict";var t={3910:function(t,s,e){var i=e(5471),a=function(){var t=this,s=t._self._c;return s("div",{attrs:{id:"app"}},[s("div",{staticClass:"header"},[s("div",{class:{"banner-top":!0,scroll:t.isActive}},[s("div",{staticClass:"wd header-top"},[s("div",{staticClass:"top-logo"},[s("router-link",{attrs:{to:"/home"}},[s("img",{class:{displayb:t.isDisplay,displayn:t.isActive},attrs:{src:e(1110),alt:""}}),s("img",{class:{displayb:t.isActive,displayn:t.isDisplay},attrs:{src:e(3153),alt:""}})])],1),s("div",{staticClass:"top-links"},[s("a",{class:{"font-colorb":t.isActive,"font-colorw":t.isDisplay},attrs:{href:"#"}},[t._v("新浪微博")]),s("a",{class:{"font-colorb":t.isActive,"font-colorw":t.isDisplay},attrs:{href:"#"}},[t._v("食用攻略")]),s("a",{class:{"font-colorb":t.isActive,"font-colorw":t.isDisplay},attrs:{href:"#"}},[t._v("联系我们")]),s("a",{class:{"font-colorb":t.isActive,"font-colorw":t.isDisplay},attrs:{href:"#"}},[t._v("标签")])]),t._m(0),s("div",{directives:[{name:"show",rawName:"v-show",value:t.$store.state.isLoginFai,expression:"$store.state.isLoginFai"}],staticClass:"top-login"},[s("router-link",{attrs:{to:"/login"}},[t._v("登录")])],1),s("div",{directives:[{name:"show",rawName:"v-show",value:t.$store.state.isLoginSuc,expression:"$store.state.isLoginSuc"}],staticClass:"top-user"},[s("ul",[s("li",{staticClass:"user-item user-one"},[t._m(1),s("div",{staticClass:"user-unfold"},[t._m(2),s("div",{staticClass:"user-unfold-main"},[t._m(3),s("ul",{staticClass:"unfold-main-ul"},[t._l(t.userList,(function(e){return s("li",{key:e.id},[s("router-link",{attrs:{to:e.router}},[s("img",{attrs:{src:e.thumb,alt:""}}),t._v(" "+t._s(e.name)+" ")])],1)})),s("li",{staticClass:"unfold-li-out",on:{click:t.signout}},[s("router-link",{attrs:{to:"/"}},[s("img",{attrs:{src:"https://dimtown.com/images/tuichu.svg",alt:""}}),t._v(" 退出登录 ")])],1)],2)])])]),s("li",{staticClass:"user-item user-two"},[s("a",{staticClass:"user-a",attrs:{href:"#",title:"开通会员"}},[t._m(4),s("span",{class:{"user-span":t.isActive}},[t._v("会员")])])]),s("li",{staticClass:"user-item user-three"},[s("a",{staticClass:"user-a",attrs:{href:"#",title:"我的收藏"}},[s("span",[s("i",{class:{"user-icon":!0,"user-collect":t.isDisplay,"user-collect-scroll":t.isActive}})]),s("span",{class:{"user-span":t.isActive}},[t._v("收藏")])])]),t._m(5)])])])]),s("div",{staticClass:"header-banner"}),s("nav",{class:{nav:!0,"nav-scroll":t.isActive}},[s("ul",{staticClass:"nav-ul wd"},[s("li",[s("router-link",{attrs:{to:"/home"}},[s("div",{staticClass:"new"}),s("img",{staticStyle:{"margin-right":"8px"},attrs:{src:e(2313),alt:""}}),t._v("首页")])],1),s("li",[s("router-link",{attrs:{to:"/cosplay"}},[s("div",{staticClass:"new"},[s("span",[t._v("1")])]),s("img",{attrs:{src:e(2695),alt:""}}),t._v("COSPLAY")]),t._m(6)],1),s("li",[s("router-link",{attrs:{to:"/anime"}},[s("div",{staticClass:"new"}),s("img",{attrs:{src:e(61),alt:""}}),t._v("番剧")])],1),s("li",[s("router-link",{attrs:{to:"/bizhi"}},[s("div",{staticClass:"new"},[s("span",[t._v("2")])]),s("img",{attrs:{src:e(879),alt:""}}),t._v("动漫壁纸")]),t._m(7)],1),s("li",[s("router-link",{attrs:{to:"/comic"}},[s("div",{staticClass:"new"}),s("img",{attrs:{src:e(2274),alt:""}}),t._v("插画精选")])],1),s("li",[s("router-link",{attrs:{to:"/illustration"}},[s("div",{staticClass:"new"}),s("img",{attrs:{src:e(7492),alt:""}}),t._v("单插画")])],1),s("li",[s("router-link",{attrs:{to:"/pzmt"}},[s("div",{staticClass:"new"}),s("img",{attrs:{src:e(8424),alt:""}}),t._v("P站美图")])],1),s("li",[s("router-link",{attrs:{to:"/pzhs"}},[s("div",{staticClass:"new"}),s("img",{attrs:{src:e(2695),alt:""}}),t._v("P站画师")])],1),s("li",[s("router-link",{attrs:{to:"/photo"}},[s("div",{staticClass:"new"},[s("span",[t._v("4")])]),s("img",{attrs:{src:e(7641),alt:""}}),t._v("摄影")]),t._m(8)],1),s("li",[s("router-link",{attrs:{to:"/qbzj"}},[s("div",{staticClass:"new"},[s("span",[t._v("3")])]),s("img",{attrs:{src:e(137),alt:""}}),t._v("情报总局")]),t._m(9)],1),s("li",[s("router-link",{attrs:{to:"/acgmusic"}},[s("div",{staticClass:"new"}),s("img",{attrs:{src:e(1477),alt:""}}),t._v("ACG音乐")])],1),s("li",[s("router-link",{attrs:{to:"/miaotx"}},[s("div",{staticClass:"new"},[s("span",[t._v("4")])]),s("img",{attrs:{src:e(8743),alt:""}}),t._v("头像")]),t._m(10)],1)])])]),s("router-view")],1)},r=[function(){var t=this,s=t._self._c;return s("div",{staticClass:"top-search"},[s("form",{staticClass:"search-form",attrs:{action:""}},[s("input",{staticClass:"search-text",attrs:{type:"text",placeholder:"输入搜索文字"}}),s("button",{staticClass:"search-btn"},[s("i",{staticClass:"el-icon-search"})])])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"user-avatar"},[s("a",{attrs:{href:"#"}},[s("img",{attrs:{src:e(4766),alt:""}})])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"san"},[s("img",{attrs:{src:e(6362),alt:""}})])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"main-meta"},[s("a",{attrs:{href:"#"}},[s("img",{attrs:{src:e(4766),alt:""}}),s("span",[s("em",[t._v("SPTZ")])]),s("span",[t._v("ID: 000001")])])])},function(){var t=this,s=t._self._c;return s("span",[s("i",{staticClass:"user-icon"})])},function(){var t=this,s=t._self._c;return s("li",{staticClass:"user-item user-four"},[s("a",{attrs:{href:""}},[s("i",[t._v("")]),t._v(" 投稿")])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"nav-unfold"},[s("ul",[s("li",[s("a",{attrs:{href:"#"}},[s("div",{staticClass:"unfold-name"},[t._v("COS精选")])])])])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"nav-unfold"},[s("ul",[s("li",{staticClass:"unfold-two"},[s("a",{attrs:{href:"#"}},[s("div",{staticClass:"unfold-name"},[t._v("手机壁纸")])]),s("a",{attrs:{href:"#"}},[s("div",{staticClass:"unfold-name"},[t._v("电脑壁纸")])])])])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"nav-unfold"},[s("ul",[s("li",{staticClass:"unfold-four"},[s("a",{attrs:{href:"#"}},[s("div",{staticClass:"unfold-name"},[t._v("JK")])]),s("a",{attrs:{href:"#"}},[s("div",{staticClass:"unfold-name"},[t._v("LOLITA")])]),s("a",{attrs:{href:"#"}},[s("div",{staticClass:"unfold-name"},[t._v("汉服")])]),s("a",{attrs:{href:"#"}},[s("div",{staticClass:"unfold-name"},[t._v("私服")])])])])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"nav-unfold"},[s("ul",[s("li",{staticClass:"unfold-two"},[s("a",{attrs:{href:"#"}},[s("div",{staticClass:"unfold-name"},[t._v("展会活动")])]),s("a",{attrs:{href:"#"}},[s("div",{staticClass:"unfold-name"},[t._v("次元速报")])])])])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"nav-unfold"},[s("ul",[s("li",{staticClass:"unfold-four"},[s("a",{attrs:{href:"#"}},[s("div",{staticClass:"unfold-name"},[t._v("动漫头像")])]),s("a",{attrs:{href:"#"}},[s("div",{staticClass:"unfold-name"},[t._v("女生头像")])]),s("a",{attrs:{href:"#"}},[s("div",{staticClass:"unfold-name"},[t._v("情侣头像")])]),s("a",{attrs:{href:"#"}},[s("div",{staticClass:"unfold-name"},[t._v("男生头像")])])])])])}],o=(e(4114),e(8987)),n=e(9605);const l=n.A.create({baseURL:"https://my-json-server.typicode.com/sptzz/jsonserver",timeout:5e3});l.interceptors.request.use((function(t){return t}),(function(t){return Promise.reject(t)})),l.interceptors.response.use((function(t){return t.data}),(function(t){return Promise.reject(t)}));var c=l;const u=()=>c.get("/homeuser");var d=e(173),p=function(){var t=this,s=t._self._c;return s("div",{staticClass:"acgmusic"},[t._v("acgmusic")])},v=[],m={name:"acgmusicIndex"},h=m,f=e(1656),g=(0,f.A)(h,p,v,!1,null,null,null),C=g.exports,_=function(){var t=this,s=t._self._c;return s("div",{staticClass:"anime"},[t._v("anime")])},A=[],x={name:"animeIndex"},I=x,b=(0,f.A)(I,_,A,!1,null,null,null),w=b.exports,y=function(){var t=this,s=t._self._c;return s("div",{staticClass:"bizhi"},[t._v("bizhi")])},k=[],Q={name:"bizhiIndex"},S=Q,E=(0,f.A)(S,y,k,!1,null,null,null),B=E.exports,D=function(){var t=this,s=t._self._c;return s("div",{staticClass:"comic"},[t._v("comic")])},L=[],O={name:"comicIndex"},M=O,U=(0,f.A)(M,D,L,!1,null,null,null),j=U.exports,R=function(){var t=this,s=t._self._c;return s("div",{staticClass:"cosplay"},[t._v("cosplay")])},G=[],J={name:"cosplayIndex"},H=J,P=(0,f.A)(H,R,G,!1,null,null,null),N=P.exports,T=function(){var t=this,s=t._self._c;return s("div",{staticClass:"hobby"},[t._v("hobby")])},Z=[],z={name:"hobbyIndex"},F=z,W=(0,f.A)(F,T,Z,!1,null,null,null),Y=W.exports,V=function(){var t=this,s=t._self._c;return s("div",{staticClass:"illustration"},[t._v("illustration")])},K=[],X={name:"illustrationIndex"},$=X,q=(0,f.A)($,V,K,!1,null,null,null),tt=q.exports,st=function(){var t=this,s=t._self._c;return s("div",{staticClass:"jxmt"},[t._v("jxmt")])},et=[],it={name:"jxmtIndex"},at=it,rt=(0,f.A)(at,st,et,!1,null,null,null),ot=rt.exports,nt=function(){var t=this,s=t._self._c;return s("div",{staticClass:"miaotx"},[t._v("miaotx")])},lt=[],ct={name:"miaotxIndex"},ut=ct,dt=(0,f.A)(ut,nt,lt,!1,null,null,null),pt=dt.exports,vt=function(){var t=this,s=t._self._c;return s("div",{staticClass:"photo"},[t._v("photo")])},mt=[],ht={name:"photoIndex"},ft=ht,gt=(0,f.A)(ft,vt,mt,!1,null,null,null),Ct=gt.exports,_t=function(){var t=this,s=t._self._c;return s("div",{staticClass:"pzhs"},[t._v("pzhs")])},At=[],xt={name:"pzhsIndex"},It=xt,bt=(0,f.A)(It,_t,At,!1,null,null,null),wt=bt.exports,yt=function(){var t=this,s=t._self._c;return s("div",{staticClass:"pzmt"},[t._v("pzmt")])},kt=[],Qt={name:"pzmtIndex"},St=Qt,Et=(0,f.A)(St,yt,kt,!1,null,null,null),Bt=Et.exports,Dt=function(){var t=this,s=t._self._c;return s("div",{staticClass:"qbzj"},[t._v("qbzj")])},Lt=[],Ot={name:"qbzjIndex"},Mt=Ot,Ut=(0,f.A)(Mt,Dt,Lt,!1,null,null,null),jt=Ut.exports,Rt=function(){var t=this,s=t._self._c;return s("div",{staticClass:"home"},[s("div",{staticClass:"wrappter"},[s("div",{staticClass:"wrap-left"},[s("DtCarousel")],1),s("div",{staticClass:"wrap-right"},[s("ul",t._l(t.wrapList,(function(e){return s("li",{key:e.id},[s("a",{attrs:{href:"#"}},[s("figure",[s("img",{attrs:{src:e.thumb,alt:e.alt,width:"100%"}})]),s("div",{staticClass:"right-title"},[s("p",[t._v(t._s(e.name))])]),s("div",{staticClass:"title-hover"},[s("p",[t._v(t._s(e.namehover))]),s("span",[t._v("up主：镇长大人")]),s("span",[t._v("浏览量："+t._s(e.count))])])])])})),0)])]),s("div",{staticClass:"pop-categories"},[s("div",{staticClass:"categories-body"},[s("div",{staticClass:"categories-max"},[s("ul",t._l(t.categoriesList,(function(e){return s("li",{key:e.id},[s("div",{staticClass:"item"},[s("router-link",{attrs:{to:e.router}},[s("div",{staticClass:"img-box"},[s("img",{attrs:{src:e.thumb,alt:""}}),s("div",{staticClass:"box-hover"},[s("span",[t._v(t._s(e.name))])])])])],1)])})),0)])])])])},Gt=[];const Jt=()=>c.get("/wrapright"),Ht=()=>c.get("/popcategories");var Pt={name:"homeIndex",data(){return{wrapList:[],categoriesList:[]}},async created(){const t=await Jt();this.wrapList=t;const s=await Ht();this.categoriesList=s}},Nt=Pt,Tt=(0,f.A)(Nt,Rt,Gt,!1,null,"5a5865be",null),Zt=Tt.exports,zt=function(){var t=this,s=t._self._c;return s("div",{staticClass:"login"},[s("div",{staticClass:"login-main"},[s("div",{staticClass:"login-body"},[t._m(0),s("div",{staticClass:"login-right"},[s("transition",{attrs:{name:"fade"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],class:{prompt:!0,"prompt-show-red":t.isRed,"prompt-show-green":t.isGreen}},[s("i",{class:{iconfont:!0,"prompt-show-red":t.isRed,"prompt-show-green":t.isGreen}},[t._v(t._s(t.promptIco))]),t._v("   "),s("span",[t._v(t._s(t.promptUser))]),s("strong",[t._v(t._s(t.capUser))]),s("span",[t._v(t._s(t.promptMain))])])]),s("div",{staticClass:"form-box"},[s("form",{attrs:{action:""}},[s("div",{staticClass:"account"},[s("label",{attrs:{for:"acc"}},[t._v("账号:")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.user.username,expression:"user.username"}],attrs:{type:"text",id:"icc",placeholder:"用户名/邮箱"},domProps:{value:t.user.username},on:{input:function(s){s.target.composing||t.$set(t.user,"username",s.target.value)}}})]),s("div",{staticClass:"kong10"}),s("div",{staticClass:"password"},[s("label",{attrs:{for:"pass"}},[t._v("密码:")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.user.password,expression:"user.password"}],attrs:{type:"password",id:"pass",placeholder:"密码"},domProps:{value:t.user.password},on:{input:function(s){s.target.composing||t.$set(t.user,"password",s.target.value)}}})]),s("div",{staticClass:"captcha"},[s("label",{attrs:{for:"cap"}},[t._v("验证码:")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.user.code,expression:"user.code"}],attrs:{type:"text",id:"cap",placeholder:"右侧图形验证码中的数字"},domProps:{value:t.user.code},on:{input:function(s){s.target.composing||t.$set(t.user,"code",s.target.value)}}}),s("div",{staticClass:"cap-img"},[s("ValidCode",{on:{"update:value":t.getCode}})],1)]),s("div",{staticClass:"kong10"}),s("div",{staticStyle:{height:"auto",overflow:"hidden","max-width":"400px"}},[s("div",{staticStyle:{float:"left"}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.isChecked,expression:"isChecked"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.isChecked)?t._i(t.isChecked,null)>-1:t.isChecked},on:{change:function(s){var e=t.isChecked,i=s.target,a=!!i.checked;if(Array.isArray(e)){var r=null,o=t._i(e,r);i.checked?o<0&&(t.isChecked=e.concat([r])):o>-1&&(t.isChecked=e.slice(0,o).concat(e.slice(o+1)))}else t.isChecked=a}}}),t._v(" 记住我 "),s("span",{staticStyle:{color:"#bdbaba","padding-left":"10px","font-size":"12px"}},[t._v("公用电脑请勿勾选")])]),t._m(1)]),s("div",{staticClass:"kong20"}),s("div",{staticClass:"form-submit"},[s("button",{attrs:{type:"submit"},on:{click:t.login}},[t._v("登录")]),s("a",{attrs:{href:"#"}},[t._v("注册")])])])]),t._m(2)],1)])]),s("footer",{staticClass:"footer"},[s("div",{staticClass:"footer-body"},[s("div",{staticClass:"body-left"},[s("h4",[t._v("推荐栏目")]),s("div",{staticClass:"menua"},t._l(t.footerList,(function(e){return s("router-link",{key:e.id,attrs:{to:e.router}},[t._v(" "+t._s(e.name)+" ")])})),1)]),t._m(3),t._m(4)])]),s("div",{staticClass:"bottom"},[t._m(5),s("div",{staticClass:"bottom-logo"},[s("router-link",{attrs:{to:"/home"}},[s("img",{attrs:{src:e(3153),alt:""}})])],1)])])},Ft=[function(){var t=this,s=t._self._c;return s("div",{staticClass:"login-left"},[s("div",{staticClass:"img-box"},[s("img",{attrs:{src:e(7e3),alt:""}})])])},function(){var t=this,s=t._self._c;return s("div",{staticStyle:{float:"right"}},[s("a",{staticClass:"forgot-pass",attrs:{href:"#"}},[t._v("忘记密码")])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"other-login"},[s("div",{staticClass:"third"},[t._v("—— 使用第三方登录 ——")]),s("div",{staticClass:"other-login-main"},[s("a",{staticClass:"qq",attrs:{href:"#"}},[s("i",{staticClass:"iconfont"},[t._v("")]),t._v("   QQ登录 ")]),s("a",{staticClass:"weibo",attrs:{href:"#"}},[s("i",{staticClass:"iconfont"},[t._v("")]),t._v("   微博登录 ")])])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"body-middle"},[s("h4",[t._v("联系方式")]),s("div",{staticClass:"menub"},[s("p",[t._v("新浪微博:  "),s("a",{attrs:{href:"#"}},[t._v("喵次元")]),t._v("           ")]),s("p",[t._v("腾讯QQ:  "),s("a",{attrs:{href:"#"}},[t._v("3203589083")])]),s("p",[t._v("公众号:  "),s("a",{attrs:{href:"#"}},[t._v("DIMTOWN")])])])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"body-right"},[s("h4",[t._v("关于小镇")]),s("div",{staticClass:"menuc"},[s("p",[t._v("次元小镇是一个动漫分享平台,分享动漫资源、资讯、动漫美图壁纸、音乐和cosplay资源的小站，阿宅们快到碗里来ヽ(✿ﾟ▽ﾟ)ノ")])])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"copy"},[s("p",[t._v("Copyright © 2014-2024 次元小镇 版权所有 ")])])}];const Wt=()=>c.get("/loginfooter"),Yt=()=>c.get("/user");var Vt=function(){var t=this,s=t._self._c;return s("div",{staticClass:"ValidCode disabled-select",staticStyle:{width:"100%",height:"100%"},on:{click:t.refreshCode}},t._l(t.codeList,(function(e,i){return s("span",{key:i,style:t.getStyle(e)},[t._v(t._s(e.code))])})),0)},Kt=[],Xt={name:"validCode",data(){return{length:4,codeList:[]}},mounted(){this.createdCode()},methods:{refreshCode(){this.createdCode()},createdCode(){const t=this.length,s=[],e="ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz0123456789",i=e.length;for(let a=0;a<t;a++){const t=[Math.round(220*Math.random()),Math.round(240*Math.random()),Math.round(200*Math.random())];s.push({code:e.charAt(Math.floor(Math.random()*i)),color:`rgb(${t})`,padding:`${[Math.floor(10*Math.random())]}px`,transform:`rotate(${Math.floor(90*Math.random())-Math.floor(90*Math.random())}deg)`})}this.codeList=s,this.$emit("update:value",s.map((t=>t.code)).join(""))},getStyle(t){return`color: ${t.color}; font-size: ${t.fontSize}; padding: ${t.padding}; transform: ${t.transform}`}}},$t=Xt,qt=(0,f.A)($t,Vt,Kt,!1,null,null,null),ts=qt.exports,ss={name:"loginIndex",data(){return{code:"",user:{code:"",username:"",password:""},loginList:[],footerList:[],isUsername:!1,userId:"",isPassword:!1,promptMain:"",promptUser:"",isRed:!1,isGreen:!1,isShow:!1,promptIco:"",capUser:"",isChecked:!1}},async created(){const t=await Wt();this.footerList=t;const s=await Yt();this.loginList=s,this.getCookie()},components:{ValidCode:ts},methods:{getCode(t){this.code=t},getUser(){for(let t=0;t<this.loginList.length;t++)this.loginList[t].username===this.user.username&&(this.isUsername=!0,this.userId=this.loginList[t].id)},getPass(){this.getUser(),this.isUsername&&this.loginList[this.userId].password===this.user.password&&(this.isPassword=!0)},login(){this.getUser(),this.getPass(),this.capUser=this.user.username,""===this.user.username?(this.isRed=!0,this.promptIco="",this.promptUser="",this.capUser="",this.promptMain="请输入用户名或邮箱"):""===this.user.password?(this.isRed=!0,this.promptIco="",this.promptUser="",this.capUser="",this.promptMain="请输入密码"):""===this.user.code?(this.isRed=!0,this.promptIco="",this.promptUser="",this.capUser="",this.promptMain="请输入验证码"):this.isUsername?this.isPassword?this.code.toLowerCase===this.user.code.toLowerCase?(this.isGreen=!0,this.promptIco="",this.capUser="",this.promptMain="登录成功",this.isChecked?(o.A.set("username",this.user.username,{expires:30}),o.A.set("password",this.user.password,{expires:30}),o.A.set("rememberMe",this.isChecked,{expires:30})):(o.A.remove("username"),o.A.remove("password"),o.A.remove("rememberMe")),this.$store.state.isLoginSuc=!0,this.$store.state.isLoginFai=!1,this.$store.state.isLoginSuc?(o.A.set("rememberSuc",this.$store.state.isLoginSuc,{expires:30}),o.A.set("rememberFai",this.$store.state.isLoginFai,{expires:30})):(o.A.remove("rememberSuc"),o.A.remove("rememberFai")),os.push("/")):(this.isRed=!0,this.promptIco="",this.promptUser="",this.capUser="",this.promptMain="验证码错误"):(this.isRed=!0,this.promptIco="",this.promptUser="为用户名",this.promptMain="指定的密码不正确,请重新输入"):(this.isRed=!0,this.promptIco="",this.promptUser="用户名",this.promptMain="未在本站点注册。请重新输入"),this.user.code="",this.isShow=!0,setTimeout((()=>{this.isShow=!1}),2e3)},getCookie(){const t=o.A.get("username"),s=o.A.get("password"),e=o.A.get("rememberMe");this.user.username=void 0===t?this.user.username:t,this.user.password=void 0===s?this.user.password:s,this.isChecked=void 0!==e&&JSON.parse(e)}}},es=ss,is=(0,f.A)(es,zt,Ft,!1,null,"26495b64",null),as=is.exports;i["default"].use(d.Ay);const rs=new d.Ay({routes:[{path:"/",component:Zt,redirect:"/home"},{path:"/home",component:Zt},{path:"/login",component:as},{path:"/acgmusic",component:C},{path:"/anime",component:w},{path:"/bizhi",component:B},{path:"/comic",component:j},{path:"/cosplay",component:N},{path:"/hobby",component:Y},{path:"/illustration",component:tt},{path:"/jxmt",component:ot},{path:"/miaotx",component:pt},{path:"/photo",component:Ct},{path:"/pzhs",component:wt},{path:"/pzmt",component:Bt},{path:"/qbzj",component:jt}]});var os=rs,ns={data(){return{isActive:!1,isDisplay:!0,userList:[]}},async created(){this.getCookieLogin();const t=await u();this.userList=t},mounted:function(){window.addEventListener("scroll",this.handleScroll,!0)},methods:{handleScroll(){const t=document.documentElement.scrollTop||document.body.scrollTop;t>100?(this.isActive=!0,this.isDisplay=!1):(this.isActive=!1,this.isDisplay=!0)},getCookieLogin(){const t=o.A.get("rememberSuc"),s=o.A.get("rememberFai");this.$store.state.isLoginSuc=void 0!==t&&JSON.parse(t),this.$store.state.isLoginFai=void 0===s||JSON.parse(s)},signout(){this.$store.state.isLoginSuc=!1,this.$store.state.isLoginFai=!0,o.A.remove("rememberSuc"),o.A.remove("rememberFai"),os.push("/login")}}},ls=ns,cs=(0,f.A)(ls,a,r,!1,null,null,null),us=cs.exports,ds=e(5353);const ps={},vs={},ms={},hs={};var fs={state:ps,mutations:vs,actions:ms,getters:hs};i["default"].use(ds.Ay);var gs=new ds.Ay.Store({modules:{home:fs},state:{isLoginSuc:!1,isLoginFai:!0}}),Cs=e(4678),_s=e.n(Cs),As=e(6580),xs=e.n(As),Is=e(5174),bs=e.n(Is),ws=e(2060),ys=e.n(ws),ks=e(5658),Qs=e.n(ks),Ss=e(1654),Es=e.n(Ss);i["default"].use(Es()),i["default"].use(Qs()),i["default"].use(ys()),i["default"].use(bs()),i["default"].use(xs()),i["default"].use(_s());var Bs=function(){var t=this,s=t._self._c;return s("div",{staticClass:"block"},[s("el-carousel",{attrs:{interval:"2000",trigger:"click",height:"335px"}},t._l(t.images,(function(t){return s("el-carousel-item",{key:t.id},[s("a",{attrs:{href:"#"}},[s("img",{staticClass:"image",attrs:{src:t.idView,alt:""}})])])})),1)],1)},Ds=[],Ls={data(){return{images:[{id:0,idView:e(8862)},{id:1,idView:e(9129)},{id:2,idView:e(2252)}]}}},Os=Ls,Ms=(0,f.A)(Os,Bs,Ds,!1,null,"23eb713e",null),Us=Ms.exports;i["default"].config.productionTip=!1,i["default"].component("DtCarousel",Us),new i["default"]({router:os,store:gs,render:t=>t(us)}).$mount("#app")},8424:function(t,s,e){t.exports=e.p+"img/chahua.ca9fb1f6.svg"},2695:function(t,s,e){t.exports=e.p+"img/cosplay.9d9d6180.svg"},61:function(t,s,e){t.exports=e.p+"img/dm.9a742c72.svg"},2274:function(t,s,e){t.exports=e.p+"img/fl.dcf497f3.svg"},2313:function(t,s,e){t.exports=e.p+"img/home.ac5b8966.svg"},1477:function(t,s,e){t.exports=e.p+"img/music.08d80d6f.svg"},137:function(t,s,e){t.exports=e.p+"img/news.9284e163.svg"},7641:function(t,s,e){t.exports=e.p+"img/sheying.d3e9fcae.svg"},879:function(t,s,e){t.exports=e.p+"img/sj.52b260f2.svg"},8743:function(t,s,e){t.exports=e.p+"img/touxiang.0a8533c3.svg"},7492:function(t,s,e){t.exports=e.p+"img/yc.3dfda588.svg"},8862:function(t,s,e){t.exports=e.p+"img/1.c5d9c296.jpg"},9129:function(t,s,e){t.exports=e.p+"img/2.ac11e66a.jpg"},2252:function(t,s,e){t.exports=e.p+"img/3.b75b9b44.jpg"},6362:function(t){t.exports="data:image/png;base64,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"},7e3:function(t,s,e){t.exports=e.p+"img/login.66c17959.jpg"},1110:function(t,s,e){t.exports=e.p+"img/logo-start-white.67a813bb.png"},3153:function(t,s,e){t.exports=e.p+"img/logo.fe89ecc6.png"},4766:function(t,s,e){t.exports=e.p+"img/avatar.5da5831c.jpg"}},s={};function e(i){var a=s[i];if(void 0!==a)return a.exports;var r=s[i]={exports:{}};return t[i].call(r.exports,r,r.exports,e),r.exports}e.m=t,function(){var t=[];e.O=function(s,i,a,r){if(!i){var o=1/0;for(u=0;u<t.length;u++){i=t[u][0],a=t[u][1],r=t[u][2];for(var n=!0,l=0;l<i.length;l++)(!1&r||o>=r)&&Object.keys(e.O).every((function(t){return e.O[t](i[l])}))?i.splice(l--,1):(n=!1,r<o&&(o=r));if(n){t.splice(u--,1);var c=a();void 0!==c&&(s=c)}}return s}r=r||0;for(var u=t.length;u>0&&t[u-1][2]>r;u--)t[u]=t[u-1];t[u]=[i,a,r]}}(),function(){e.n=function(t){var s=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(s,{a:s}),s}}(),function(){e.d=function(t,s){for(var i in s)e.o(s,i)&&!e.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:s[i]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)}}(),function(){e.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){e.p=""}(),function(){var t={524:0};e.O.j=function(s){return 0===t[s]};var s=function(s,i){var a,r,o=i[0],n=i[1],l=i[2],c=0;if(o.some((function(s){return 0!==t[s]}))){for(a in n)e.o(n,a)&&(e.m[a]=n[a]);if(l)var u=l(e)}for(s&&s(i);c<o.length;c++)r=o[c],e.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return e.O(u)},i=self["webpackChunkdimensional_town"]=self["webpackChunkdimensional_town"]||[];i.forEach(s.bind(null,0)),i.push=s.bind(null,i.push.bind(i))}();var i=e.O(void 0,[504],(function(){return e(3910)}));i=e.O(i)})();
//# sourceMappingURL=app.86450b22.js.map