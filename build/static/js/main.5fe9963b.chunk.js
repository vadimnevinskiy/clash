(this.webpackJsonpclash=this.webpackJsonpclash||[]).push([[0],{122:function(e,t,a){e.exports={chatBody:"ChatBody_chatBody__XQZ1a",messagesEndRef:"ChatBody_messagesEndRef__30Kun"}},123:function(e,t,a){e.exports={chatForm:"MessageForm_chatForm__Z0BbV",textField:"MessageForm_textField__gTk9-",formButton:"MessageForm_formButton__1uVVz"}},124:function(e,t,a){e.exports={controlPanel:"ControlPanel_controlPanel__bs8ns",expandMenu:"ControlPanel_expandMenu__34tEB",minimizeMenu:"ControlPanel_minimizeMenu__2FWYo"}},137:function(e,t,a){e.exports={menuLang:"MenuLanguage_menuLang__119sL",langLink:"MenuLanguage_langLink__3mlp-"}},164:function(e,t,a){e.exports={progress:"PreloaderConnection_progress__nkid4"}},166:function(e,t,a){e.exports={messageTime:"Time_messageTime__15ZjL"}},199:function(e,t,a){},200:function(e,t,a){},302:function(e,t,a){"use strict";a.r(t);var s={};a.r(s),a.d(s,"fetchHistoryMessages",(function(){return Y})),a.d(s,"setMessage",(function(){return L}));var n,c=a(0),r=a.n(c),i=a(40),o=a.n(i),l=(a(199),a(200),a(13)),j=a(56),u=a.n(j),d=a(122),f=a.n(d),b=a(164),g=a.n(b),A=a(337),h=a(2),O=function(){return Object(h.jsxs)("div",{className:g.a.progress,children:["Connection ... ",Object(h.jsx)(A.a,{sx:{color:"#ffffff"}})]})},m=a(86),x=a.n(m),p=a(87),_=a.n(p),v=function(e){var t=e.avatar,a=e.avatarColor,s=e.userName,n=e.userRating;return Object(h.jsxs)("div",{className:_.a.messageHeader,children:[Object(h.jsx)("div",{className:_.a.avatar,style:{background:a},children:Object(h.jsx)("img",{src:t,alt:""})}),Object(h.jsx)("div",{className:_.a.userName,children:s}),Object(h.jsx)("div",{className:_.a.badge,children:Object(h.jsx)("img",{src:n<10&&n>8?"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAH6SURBVHgBXVJLaxRBEP76sYOgZiNZAlEkEh9gDiIJRljRTSDuejQQQdzg8wf4+AOC+CO8GBM85CJETz4Qsl4MKmhExCAIq65G0YuLxOxMT7fVNZvJJDVT3TVV39dVU10CGTnzvac3+OtGIFESEMOAowc1WPVMaTt3u2/p8ypW+GViseeyFOIKgXZhnfgweYVILOfqZN+/u+/bVSae/rDTtSEQzmcRGbL/EkxmBL0z/V+F9CETS0RW8R7GCnuCImb2f2HdHRwhH8Xbapzi45gYETgygveVSOJofjzNN7C5jBb5jE2IoREZovUBxYF/LaDYWcaL3/Os5cI4lM0ToV2V1WtEEyekyCiMFk5hi+7AbOMenv58wvZQvsJE/qU4yaiTUgWfYWKL4rbjHDjXdynpFkmlMIZHvx4gpyS5bIZIJXhQl9qBUtcomlETf8ImAxrLDQx2HkbOdiDEMjVXZkuVNZ/1wNYhdt54dxPV51VU5ycw+ekO+050j3FjqMML6QAMzh086YSdXWkZtMIYko4LtOIbjKh8S7opUAgCDa3khVfHFqb4Upamfyx2n90uHVRJSIWczkGpHLztVSlNJXpbX3s9/OZWmnF1vvofD4w4KSZpUnrTSfGrdXVpzcX3lbc1YriNxFT2Pjx0Xkh5neawTiM49bHycnoj5j/R0c/6DjubWgAAAABJRU5ErkJggg==":n<=8&&n>5?"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHESURBVHgBXVI9bxNBFJxZn+xLCMQ1BYloEF2goCXUNGmQSAWkoHWi9CiioAMpLU1CRQdpqEDC/INQ0pkSCYQRgfh8d/syu3vnWFnpTu/Nm3lfu8TcsQ9YQY17cLgLYh3GgA7h8QUdfOZ9fG+5jIL3GIi0DbNVkDaXirCWpZ/ZSEmO+AA7SfhWUIpGVx7paBE0WFOCbMLcBF20C7kTfTf2jA897foO7DRh/uojclPY6gBePqZJnoRTBKJVE0tNrT1DWSyzmvbhbu1FSm39yEGRGsjair4E/bQZvCfSzW0ZauvKShKGmCp2upgThorhqxP4/9sQC3cGYN7HyfERltY2pFS8UEcec60WQWwxGM6fT/swEapfI/z+uJ9A38xXpq3PWkVFtNk6xRg/XtyGy5fRXewnMCQtw1LTHtrlDF0p6GQc3Z7QS39Hlv/8Gu3zihaKHDe3qiS72Khr9+6fNlaUxoUurddNmSclcSo8z2iLebhfPMle4TDm40u9hso/z2UudQjFkan1TPPk3nBZA/VCtwV2g2hWsTksn2LdeRw48pquQq8mLMKCNdKIW9lrDMPDuyicHdvCY800kDkW45AHeHORcwZAsciOrZKp8wAAAABJRU5ErkJggg==":"",alt:""})}),n&&Object(h.jsx)("div",{className:_.a.userRating,children:n})]})},S=function(e){var t=e.text;return Object(h.jsx)(h.Fragment,{children:t})},C=a(166),E=a.n(C),T=function(e){var t=e.createdAt;return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("div",{className:E.a.messageTime,children:t&&function(e){var t=new Date(e),a=t.getUTCMinutes().toString();return a.length<2?t.getUTCHours()+":0"+a:t.getUTCHours()+":"+t.getUTCMinutes()}(t)})})},M=function(e){var t=e.message,a=(e.index,Object(c.useMemo)((function(){return Math.floor(-9*Math.random())+10}),[]));return Object(h.jsxs)(h.Fragment,{children:["me"!==t.from&&Object(h.jsxs)("div",{className:x.a.message,children:[Object(h.jsxs)("div",{className:x.a.messageBlock,children:[t.from&&Object(h.jsx)(v,{avatar:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAALCAYAAACzkJeoAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACISURBVHgBXY8BEYAgDEXBM4ARjEADNYE0kAhGsIE00gZiAjWBNsA/3e6Uf/duwLi/P6WgGGNBqEQZVwN6fJh+XTxs8dXJLMBK03DTg5Irqci01oFNLpx31JBai62MGNMm2dVgEFtZg+SSDDbHXSxaCoRa0XyaTXseYOYPHVhBw+EeK8d2/hv0BrlGjqPo3sUTAAAAAElFTkSuQmCC",avatarColor:"#DD8A26",userName:t.from,userRating:a}),Object(h.jsx)(S,{text:t.text})]}),t.createdAt&&Object(h.jsx)(T,{createdAt:t.createdAt})]}),"me"===t.from&&Object(h.jsxs)("div",{className:x.a.message+" "+x.a.myMessage,children:[t.createdAt&&Object(h.jsx)(T,{createdAt:t.createdAt}),Object(h.jsx)("div",{className:x.a.messageBlock,children:Object(h.jsx)(S,{text:t.text})})]})]})},R=a(81),H=R.c,N=a(69),y=a(31),k=a(97),I=a.n(k),B=a(134);Intl.DateTimeFormat;!function(e){e.FETCH_HISTORY="FETCH_HISTORY",e.FETCH_HISTORY_SUCCESS="FETCH_HISTORY_SUCCESS",e.FETCH_HISTORY_ERROR="FETCH_HISTORY_ERROR",e.SET_MESSAGE="SET_MESSAGE",e.SET_LIMIT_SKIP="SET_LIMIT_SKIP"}(n||(n={}));var F=a(168),w=a.n(F),Y=function(e,t){return function(){var a=Object(B.a)(I.a.mark((function a(s){var c;return I.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,s({type:n.FETCH_HISTORY}),a.next=4,w.a.get("https://test-chat-backend-hwads.ondigitalocean.app/api/messages?skip=".concat(t,"&limit=").concat(e));case 4:c=a.sent,s({type:n.FETCH_HISTORY_SUCCESS,payload:c.data.reverse()}),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(0),s({type:n.FETCH_HISTORY_ERROR,payload:"Loading error!"});case 11:case"end":return a.stop()}}),a,null,[[0,8]])})));return function(e){return a.apply(this,arguments)}}()},L=function(e){return function(){var t=Object(B.a)(I.a.mark((function t(a){return I.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:try{a({type:n.SET_MESSAGE,payload:e})}catch(s){a({type:n.FETCH_HISTORY_ERROR,payload:"Loading error!"})}case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},U=Object(y.a)({},s),V=function(e){var t=e.newMessage,a=e.socket,s=H((function(e){return e.historyMessages})),n=s.historyMessages,i=s.limit,o=s.skip,j=s.error,u=r.a.useRef(null),d=r.a.useRef(null),b=Object(c.useRef)(null),g=function(){var e=Object(R.b)();return Object(N.b)(U,e)}(),A=g.fetchHistoryMessages,m=g.setMessage,x=Object(c.useState)(!1),p=Object(l.a)(x,2),_=p[0],v=p[1],S=Object(c.useState)(!0),C=Object(l.a)(S,2),E=C[0],T=C[1],y=Object(c.useState)(0),k=Object(l.a)(y,2),I=k[0],B=k[1];Object(c.useEffect)((function(){(a=a.connect()).on("connect",(function(){T(a.connected),a.on("disconnect",(function(){T(a.connected)})),a.on("message",(function(e){m(e)}))}))}),[]),Object(c.useEffect)((function(){if(t){var e={from:"me",createdAt:(new Date).toISOString(),id:Math.random().toString(16).slice(2),text:t};E&&(m(e),a.emit("message",{from:"meVadim",text:t}))}}),[t]),Object(c.useEffect)((function(){A(i,o),u.current.addEventListener("scroll",w)}),[]),Object(c.useEffect)((function(){_||(u.current.scrollTop=u.current.scrollHeight-u.current.clientHeight),_&&(u.current.scrollTop=I)}),[n]);var F=0,w=function(e){var t=e.target.scrollTop,a=u.current.scrollHeight,s=u.current.clientHeight;0===e.target.scrollTop&&A(i,F+=15),t<a-s&&t>a-s-10&&B(d.current.offsetTop),function(e,t,a){e<t-a?v(!0):e===t-a&&v(!1)}(t,a,s)};return j?Object(h.jsx)("div",{children:Object(h.jsx)("h1",{children:j})}):Object(h.jsxs)("div",{className:f.a.chatBody,ref:u,children:[n.map((function(e,t){return Object(h.jsxs)("div",{className:f.a.MessageId,children:[14===t&&Object(h.jsx)("div",{ref:d,style:{fontSize:1,lineHeight:1,height:1},children:"\xa0"}),Object(h.jsx)(M,{message:e,index:t})]},e.id+t)})),!E&&Object(h.jsx)(O,{}),Object(h.jsx)("div",{className:f.a.messagesEndRef,ref:b})]})},Q=a(123),X=a.n(Q),G=a(140),D=a(169),W=a.n(D),Z=function(e){var t=e.onSubmit,a=e.changeMessage,s=e.insertEmoji,n=e.tempNewMessageText,r=Object(c.useRef)(null),i=function(){var e;s(),null===(e=r.current)||void 0===e||e.focus()};return Object(h.jsx)(G.b,{onSubmit:t,initialValues:{message:n},render:function(e){var t=e.handleSubmit;e.form,e.submitting,e.pristine,e.values;return Object(h.jsx)("form",{onSubmit:t,children:Object(h.jsxs)("div",{className:X.a.chatForm,children:[Object(h.jsx)("div",{className:X.a.textField,children:Object(h.jsx)(G.a,{name:"message",children:function(e){return Object(h.jsx)("div",{children:Object(h.jsx)("input",Object(y.a)(Object(y.a)({ref:r},e.input),{},{type:"text",placeholder:"\u041d\u0430\u043f\u0438\u0448\u0438\u0442\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435",autoComplete:"off",onChange:function(e){return a(e.target.value)}}))})}})}),Object(h.jsx)("div",{className:X.a.formButton,children:Object(h.jsx)(W.a,{sx:{color:"#ffffff",opacity:"0.3",cursor:"pointer"},onClick:i})})]})})}})},P=a(124),J=a.n(P),z=a(338),K=a(339),q=function(e){var t=e.hideChatToggle;return Object(h.jsxs)("div",{className:J.a.controlPanel,children:[Object(h.jsx)("span",{className:J.a.expandMenu,children:Object(h.jsx)(z.a,{style:{fontSize:"14px",color:"#ffffff",lineHeight:"16px"}})}),Object(h.jsx)("span",{className:J.a.minimizeMenu,onClick:t,children:Object(h.jsx)(K.a,{style:{fontSize:"14px",color:"#ffffff",lineHeight:"16px"}})})]})},$=a(137),ee=a.n($),te=a(327),ae=a(329),se=a(340),ne=function(){var e=Object(c.useState)("Ru"),t=Object(l.a)(e,2),a=t[0],s=t[1],n=Object(h.jsxs)(te.a,{onClick:function(e){s(e.key)},children:[Object(h.jsx)(te.a.Item,{children:"Ru"},"Ru"),Object(h.jsx)(te.a.Item,{children:"En"},"En")]});return Object(h.jsx)("div",{className:ee.a.menuLang,children:Object(h.jsx)(ae.a,{overlay:n,trigger:["click"],children:Object(h.jsxs)("a",{className:ee.a.langLink+" ant-dropdown-link",onClick:function(e){return e.preventDefault()},children:[a," ",Object(h.jsx)(se.a,{})]})})})},ce=a(185),re=a(334),ie=a(333),oe=a(330),le=a(335),je=a(326),ue=a(336),de=a(71),fe=(a(295),function(e){var t=e.socket,a=Object(c.useState)("1"),s=Object(l.a)(a,2),n=s[0],r=s[1],i=Object(c.useState)(""),o=Object(l.a)(i,2),j=o[0],d=o[1],f=Object(c.useState)(""),b=Object(l.a)(f,2),g=b[0],A=b[1],O=Object(c.useState)(!1),m=Object(l.a)(O,2),x=m[0],p=m[1],_=Object(ce.a)({palette:{primary:{main:de.a[500]}}});return Object(h.jsx)("div",{className:u.a.chat,children:Object(h.jsxs)(je.a,{value:n,children:[Object(h.jsxs)("div",{className:u.a.chatHeader,children:[Object(h.jsx)("div",{className:u.a.headerMenu,children:Object(h.jsx)(ie.a,{sx:{maxWidth:270},children:Object(h.jsx)(re.a,{theme:_,children:Object(h.jsxs)(oe.a,{value:n,onChange:function(e,t){r(t)},variant:"scrollable",scrollButtons:"auto",sx:{color:"#ffffff",padding:0,margin:0},children:[Object(h.jsx)(le.a,{label:"\u041e\u0431\u0449\u0438\u0439",value:"1",sx:{color:"#ffffff"}}),Object(h.jsx)(le.a,{label:"\u041a\u043b\u0430\u043d",value:"2",sx:{color:"#ffffff"}}),Object(h.jsx)(le.a,{label:"\u0414\u0440\u0443\u0437\u044c\u044f",value:"3",sx:{color:"#ffffff"}}),Object(h.jsx)(le.a,{label:"\u041d\u043e\u0432\u043e\u0441\u0442\u0438",value:"4",sx:{color:"#ffffff"}})]})})})}),Object(h.jsx)(ne,{}),Object(h.jsx)(q,{hideChatToggle:function(){p(!x)}})]}),!x&&Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("div",{className:u.a.chatBody,children:[Object(h.jsx)(ue.a,{value:"1",sx:{padding:0},children:Object(h.jsx)("div",{className:u.a.chatContainer,children:Object(h.jsx)(V,{newMessage:j,socket:t})})}),Object(h.jsx)(ue.a,{value:"2",children:Object(h.jsx)("div",{className:u.a.chatContainer,children:"\u041a\u043b\u0430\u043d"})}),Object(h.jsx)(ue.a,{value:"3",children:Object(h.jsx)("div",{className:u.a.chatContainer,children:"\u0414\u0440\u0443\u0437\u044c\u044f"})}),Object(h.jsx)(ue.a,{value:"4",children:Object(h.jsx)("div",{className:u.a.chatContainer,children:"\u041d\u043e\u0432\u043e\u0441\u0442\u0438"})})]}),Object(h.jsx)("div",{className:u.a.chatFooter,children:Object(h.jsx)(Z,{onSubmit:function(){d(g),A("")},changeMessage:function(e){A(e)},insertEmoji:function(){A(g+" :)")},tempNewMessageText:g})})]})]})})}),be=a(184);var ge=function(){var e=Object(be.a)("wss://test-chat-backend-hwads.ondigitalocean.app",{transports:["websocket"]});return Object(h.jsx)("div",{className:"Container",children:Object(h.jsx)(fe,{socket:e})})},Ae=a(183),he=a(38),Oe={historyMessages:[],skip:0,limit:15,loading:!1,error:null},me=Object(N.c)({historyMessages:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case n.FETCH_HISTORY:return Object(y.a)(Object(y.a)({},e),{},{loading:!0});case n.FETCH_HISTORY_SUCCESS:return Object(y.a)(Object(y.a)({},e),{},{historyMessages:[].concat(Object(he.a)(t.payload),Object(he.a)(e.historyMessages)),loading:!1,error:null});case n.SET_MESSAGE:return Object(y.a)(Object(y.a)({},e),{},{historyMessages:[].concat(Object(he.a)(e.historyMessages),[t.payload]),loading:!1,error:null});case n.FETCH_HISTORY_ERROR:return Object(y.a)(Object(y.a)({},e),{},{loading:!1,error:t.payload});case n.SET_LIMIT_SKIP:return Object(y.a)(Object(y.a)({},e),{},{limit:t.payload.limit,skip:t.payload.skip});default:return e}}}),xe=Object(N.d)(me,Object(N.a)(Ae.a));o.a.render(Object(h.jsx)(R.a,{store:xe,children:Object(h.jsx)(ge,{})}),document.getElementById("root"))},56:function(e,t,a){e.exports={chat:"Chat_chat__2Ty9G",chatHeader:"Chat_chatHeader__3fBnA",chatBody:"Chat_chatBody__2aeZg",headerMenu:"Chat_headerMenu__CsuX_",chatContainer:"Chat_chatContainer__2xaB2",chatFooter:"Chat_chatFooter__2acPC"}},86:function(e,t,a){e.exports={message:"MessageItem_message__2aEJG",messageBlock:"MessageItem_messageBlock__1WN5I",myMessage:"MessageItem_myMessage__3_2Js"}},87:function(e,t,a){e.exports={messageHeader:"MessageHeader_messageHeader__18s-t",avatar:"MessageHeader_avatar__17BFA",userName:"MessageHeader_userName__3k1iK",userRating:"MessageHeader_userRating__8MXPB",badge:"MessageHeader_badge__giml3"}}},[[302,1,2]]]);
//# sourceMappingURL=main.5fe9963b.chunk.js.map