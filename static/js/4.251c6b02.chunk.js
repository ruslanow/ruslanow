(this["webpackJsonpreact-site"]=this["webpackJsonpreact-site"]||[]).push([[4],{317:function(e,a,t){"use strict";a.a=t.p+"static/media/send.222df3e7.svg"},318:function(e,a,t){"use strict";t.d(a,"a",(function(){return l}));var s=t(6),n=t(43),i=t(44),c=t(46),r=t(45),_=t(0),o=t.n(_),d=t(12),m=t(17),j=t(1),u=function(e){return{isAuth:e.auth.isAuth}},l=function(e){var a=function(a){Object(c.a)(_,a);var t=Object(r.a)(_);function _(){return Object(n.a)(this,_),t.apply(this,arguments)}return Object(i.a)(_,[{key:"render",value:function(){return this.props.isAuth?Object(j.jsx)(e,Object(s.a)({},this.props)):Object(j.jsx)(d.a,{to:"/login"})}}]),_}(o.a.Component);return Object(m.b)(u)(a)}},320:function(e,a,t){e.exports={main__intro:"Chat_main__intro__FVif0",wrapper:"Chat_wrapper__11ioD",intro:"Chat_intro__3qtPP",body:"Chat_body__Y-4eS",navigate:"Chat_navigate__1FVMb",navigate__top:"Chat_navigate__top__3IAVo",friends:"Chat_friends__2SxLN",navigate__element:"Chat_navigate__element__2aKvm",href:"Chat_href__10M65",active:"Chat_active__39RuW",friends_bottom:"Chat_friends_bottom__33I2h",menu:"Chat_menu__38nE5",content:"Chat_content__1FuM0",img:"Chat_img__2Ej6y",dialogsHead:"Chat_dialogsHead__Dtjoo",textarea:"Chat_textarea__2RPhi",messageItem:"Chat_messageItem__3CrXa",messages:"Chat_messages__23GiU",userName:"Chat_userName__2gisE"}},321:function(e,a,t){e.exports={main__intro:"Friends_main__intro__1mcWS",wrapper:"Friends_wrapper__WIPSS",intro:"Friends_intro__1Fe-R",body:"Friends_body__1UOjG",navigate:"Friends_navigate__3Bw_0",navigate__top:"Friends_navigate__top__BkY4T",navigate__menu:"Friends_navigate__menu__1qOsl",navigate__element:"Friends_navigate__element__1rTd7",href:"Friends_href__245A-",active:"Friends_active__2Z5j0",navigate__menu_bottom:"Friends_navigate__menu_bottom__b5dOQ",menu:"Friends_menu__1xVga",content:"Friends_content__1OvWT",img:"Friends_img__OVles"}},322:function(e,a,t){e.exports={form:"ChatForm_form__3uOdo",button:"ChatForm_button__1pkbc"}},329:function(e,a,t){"use strict";t.r(a);var s=t(6),n=t(43),i=t(44),c=t(46),r=t(45),_=t(0),o=t.n(_),d=t(130),m=t(17),j=t(320),u=t.n(j),l=t.p+"static/media/bottomPic.da3f8a8f.svg",b=t.p+"static/media/logo.9f358b33.png",h=t.p+"static/media/cloud.8d4f3ddd.svg",g=t(321),v=t.n(g),O=t(11),f=t(1),x=function(e){return Object(f.jsx)("div",{className:v.a.navigate__element,children:Object(f.jsx)(O.b,{to:"/chat/".concat(e.id),className:v.a.href,activeClassName:v.a.active,children:Object(f.jsx)("span",{className:v.a.href,children:e.name})})})},p=t(133),N=t(134),C=t(322),F=t.n(C),w=t(317),y=t(67),M=t(53),P=Object(N.a)({form:"send-message-form",onSubmitSuccess:function(e,a){return a(Object(M.a)("send-message-form"))}})((function(e){return Object(f.jsxs)("form",{className:F.a.form,onSubmit:e.handleSubmit,children:[Object(f.jsx)(p.a,{component:"textarea",name:"newMessageBody",validate:y.b,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f..."}),Object(f.jsx)("button",{className:F.a.button,children:Object(f.jsx)("img",{src:w.a,width:"20em",alt:""})})]})})),S=function(e){return Object(f.jsx)("div",{children:Object(f.jsxs)("div",{className:u.a.messageItem,children:[Object(f.jsxs)("div",{className:u.a.userName,children:[Object(f.jsx)("img",{src:b,height:"35px",alt:""}),Object(f.jsx)("h2",{children:e.name})]}),Object(f.jsx)("h3",{children:e.message})]})})},D=function(e){var a=e.usersMessages.map((function(e){return Object(f.jsx)(S,{message:e.messagePost,name:e.name},e.id)})),t=e.usersData.map((function(e){return Object(f.jsx)(x,{name:e.name,id:e.id},e.id)}));return Object(f.jsx)("div",{className:u.a.intro,children:Object(f.jsx)("div",{className:"container",children:Object(f.jsxs)("div",{className:u.a.body,children:[Object(f.jsxs)("div",{className:u.a.navigate,children:[Object(f.jsxs)("div",{className:u.a.navigate__top,children:[Object(f.jsx)("img",{src:h,alt:""})," ",Object(f.jsx)("h2",{className:"font-weight-bold",children:"\u0427\u0430\u0442"})]}),Object(f.jsxs)("div",{className:u.a.friends,children:[t,Object(f.jsxs)("div",{className:u.a.friends_bottom,children:[Object(f.jsx)("div",{children:Object(f.jsx)("img",{src:l,height:"108px",alt:""})}),Object(f.jsx)("div",{children:Object(f.jsx)("h4",{children:"Give your money awesome space in cloud"})})]})]})]}),Object(f.jsx)("div",{className:u.a.menu,children:Object(f.jsx)("div",{className:u.a.dialog,children:Object(f.jsx)("div",{className:u.a.dialogsHead,children:"Dialogs Page"})})}),Object(f.jsxs)("div",{className:u.a.content,children:[Object(f.jsx)("div",{className:u.a.messages,children:a}),Object(f.jsx)("div",{className:u.a.textarea,children:Object(f.jsx)(P,{onSubmit:function(a){e.addMessage(a.newMessageBody)}})})]})]})})})},k=t(12),I=t(318),A=t(10),V=function(e){Object(c.a)(t,e);var a=Object(r.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return Object(f.jsx)(D,Object(s.a)({},this.props))}}]),t}(o.a.Component);a.default=Object(A.compose)(Object(m.b)((function(e){return{usersMessages:e.dialogsPage.usersMessages,usersData:e.dialogsPage.usersData,newDialogMessage:e.dialogsPage.newDialogMessage}}),{addMessage:d.a}),k.f,I.a)(V)}}]);
//# sourceMappingURL=4.251c6b02.chunk.js.map