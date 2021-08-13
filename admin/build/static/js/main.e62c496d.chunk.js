(this.webpackJsonpadmin=this.webpackJsonpadmin||[]).push([[0],{341:function(e,n,t){},342:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),c=t(81),o=t.n(c),i=t(11),s=t(18),l=t(21),u=t.n(l),d=t(30),j=t(3),b=t(4),p=t(37),h=t.n(p),f=function(e){return{headers:{Authorization:"Bearer ".concat(e)}}},x="https://zircus.herokuapp.com/api";function O(e,n){return g.apply(this,arguments)}function g(){return(g=Object(d.a)(u.a.mark((function e(n,t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.post("".concat(x,"/login"),{username:n,password:t});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(){return m.apply(this,arguments)}function m(){return(m=Object(d.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("".concat(x,"/inv"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(e){return y.apply(this,arguments)}function y(){return(y=Object(d.a)(u.a.mark((function e(n){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("".concat(x,"/orders"),f(n));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function k(e,n){return S.apply(this,arguments)}function S(){return(S=Object(d.a)(u.a.mark((function e(n,t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.put("".concat(x,"/orders/").concat(n.id),n,f(t));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function C(){return(C=Object(d.a)(u.a.mark((function e(n,t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.delete("".concat(x,"/orders/").concat(n),f(t));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function M(){return(M=Object(d.a)(u.a.mark((function e(n,t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.put("".concat(x,"/inv"),n,f(t));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function L(e){return F.apply(this,arguments)}function F(){return(F=Object(d.a)(u.a.mark((function e(n){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("".concat(x,"/message"),f(n));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function P(){return(P=Object(d.a)(u.a.mark((function e(n,t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.delete("".concat(x,"/message/").concat(n),f(t));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function z(e,n,t){var a=Object(r.useState)(n),c=Object(i.a)(a,2),o=c[0],s=c[1];return[{type:e,value:o,onChange:function(e){return s(e.target.value)},placeholder:t},function(){return s(n)}]}var I,W,N,D,T,A,E,B,q=t(1),U=[],H=a.a.createContext(),_=function(e){var n=e.children,t=Object(r.useRef)(null),a=250,c=function(){t.current=new WebSocket("wss://zircus.herokuapp.com"),t.current.onopen=function(){console.debug("Websocket connection open"),a=250},t.current.onmessage=function(e){var n=JSON.parse(e.data);i(n)},t.current.onclose=function(e){switch(e.code){case 1e3:console.debug("Websocket closed normally");break;default:o(a+=a)}},t.current.onerror=function(e){switch(e.code){case"ECONNREFUSED":a=a+=a,o(a);break;default:console.error("Websocket encountered error: ".concat(e))}}},o=function(e){setTimeout(c,Math.min(1e4,e))},i=function(e){console.debug("[Websocket-IncomingMessage] ",e),U.forEach((function(n){return n.messageHandler(e)}))};return Object(q.jsx)(H.Provider,{value:{initializeWebSocket:c,disconnectWebSocket:function(){t.current&&t.current.close(1e3)},addListener:function(e){var n=U.length;return U.push({id:n,messageHandler:e}),n},removeListener:function(e){return U=U.filter((function(n){return n.id!==e}))}},children:n})},R=(H.Consumer,b.a.main(I||(I=Object(j.a)(["\n    width: 100%;\n    display: flex;\n    flex-flow: column nowrap;\n    align-items: center;\n"])))),V=b.a.form(W||(W=Object(j.a)(["\n    margin-top: var(--lg-spacing);\n    padding: var(--md-spacing);\n    background-color: var(--gray-20);\n    border-radius: var(--big-radius);\n    display: flex;\n    flex-flow: column nowrap;\n    gap: 0.5rem;\n"]))),J=b.a.label(N||(N=Object(j.a)(["\n    display: flex;\n    flex-flow: column nowrap;\n"]))),K=b.a.p(D||(D=Object(j.a)(["\n    color: ",";\n    margin: var(--base-spacing) 0;\n    font-weight: 500;\n"])),(function(e){return e.failedLogin?"var(--red)":"var(--text-color)"})),Z=b.a.button(T||(T=Object(j.a)(["\n    margin-top: 0.5rem;\n"])));function $(e){var n=e.setToken,t=e.setUser,a=Object(r.useState)(!1),c=Object(i.a)(a,2),o=c[0],l=c[1],j=z("text",""),b=Object(i.a)(j,1)[0],p=z("password",""),h=Object(i.a)(p,1)[0],f=Object(r.useContext)(H).initializeWebSocket,x=function(){l(!0),setTimeout((function(){l(!1)}),2e3)},g=function(e){var r=e.data;t(r.name),n(r.token),localStorage.setItem("user",r.name),localStorage.setItem("token",r.token),f()},v=function(){var e=Object(d.a)(u.a.mark((function e(n){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.preventDefault(),O(b.value,h.value).then(g).catch(x);case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){var e=localStorage.getItem("token"),r=localStorage.getItem("user");e&&n(e),r&&t(r),e&&r&&f()}),[n,t,f]),Object(q.jsx)(R,{children:Object(q.jsxs)(V,{onSubmit:v,children:[Object(q.jsx)("h1",{children:"Zircus Admin"}),Object(q.jsx)(K,{failedLogin:o,children:o?"Login failed":"Please Log in:"}),Object(q.jsxs)(J,{htmlFor:"username",children:[Object(q.jsx)("span",{children:"Username"}),Object(q.jsx)("input",Object(s.a)(Object(s.a)({},b),{},{disabled:!!o}))]}),Object(q.jsxs)(J,{htmlFor:"password",children:[Object(q.jsx)("span",{children:"Password"}),Object(q.jsx)("input",Object(s.a)(Object(s.a)({},h),{},{disabled:!!o}))]}),Object(q.jsx)(Z,{className:"button",type:"submit",disabled:!!o,children:o?"Please wait":"Log in"})]})})}function G(){return Object(q.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[Object(q.jsx)("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),Object(q.jsx)("circle",{cx:"12",cy:"7",r:"4"})]})}var Q,X=b.a.header(A||(A=Object(j.a)(["\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 4rem;\n    background: var(--dgray-80);\n    padding: var(--base-spacing);\n"]))),Y=b.a.h3(E||(E=Object(j.a)(["\n    color: var(--invert-text-color);\n    font-size: 1.25rem;\n    flex-grow: 1;\n"]))),ee=b.a.span(B||(B=Object(j.a)(["\n    display: flex;\n    align-items: center;\n    gap: var(--base-unit);\n    color: var(--gray-10);\n    margin-right: var(--base-spacing);\n\n    svg {\n        height: 1rem;\n    }\n"])));function ne(e){var n=e.text,t=e.logout,r=e.user;return Object(q.jsxs)(X,{children:[Object(q.jsx)(Y,{children:n}),Object(q.jsxs)(ee,{children:[Object(q.jsx)(G,{})," ",r.split(" ")[0]]}),Object(q.jsx)("button",{className:"button light outline",type:"button",onClick:t,children:"logout"})]})}function te(){return Object(q.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[Object(q.jsx)("polyline",{points:"13 17 18 12 13 7"}),Object(q.jsx)("polyline",{points:"6 17 11 12 6 7"})]})}function re(){return Object(q.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[Object(q.jsx)("polyline",{points:"11 17 6 12 11 7"}),Object(q.jsx)("polyline",{points:"18 17 13 12 18 7"})]})}function ae(){return Object(q.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[Object(q.jsx)("line",{x1:"8",y1:"6",x2:"21",y2:"6"}),Object(q.jsx)("line",{x1:"8",y1:"12",x2:"21",y2:"12"}),Object(q.jsx)("line",{x1:"8",y1:"18",x2:"21",y2:"18"}),Object(q.jsx)("line",{x1:"3",y1:"6",x2:"3.01",y2:"6"}),Object(q.jsx)("line",{x1:"3",y1:"12",x2:"3.01",y2:"12"}),Object(q.jsx)("line",{x1:"3",y1:"18",x2:"3.01",y2:"18"})]})}function ce(){return Object(q.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[Object(q.jsx)("path",{d:"M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"}),Object(q.jsx)("line",{x1:"3",y1:"6",x2:"21",y2:"6"}),Object(q.jsx)("path",{d:"M16 10a4 4 0 0 1-8 0"})]})}function oe(){return Object(q.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[Object(q.jsx)("polyline",{points:"23 6 13.5 15.5 8.5 10.5 1 18"}),Object(q.jsx)("polyline",{points:"17 6 23 6 23 12"})]})}function ie(){return Object(q.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:Object(q.jsx)("path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"})})}var se,le,ue,de,je=b.a.button(Q||(Q=Object(j.a)(["\n    flex-grow: 1;\n    display: flex;\n    align-items: center;\n    ","\n    justify-content: ",";\n    ","\n\n    svg {\n        height: 1.25rem;\n    }\n"])),(function(e){return e.showFull&&"gap: calc(var(--base-unit) * 1.5);"}),(function(e){return e.showFull?"left":"center"}),(function(e){return!e.showFull&&"padding: var(--input-padding);"}));function be(e){var n=e.showFull,t=e.active,r=e.page,a=e.num,c=e.setPage,o=e.children;return Object(q.jsxs)(je,{showFull:n,className:r===t?"button":"button outline",onClick:function(){return c(t)},children:[o,n&&"".concat(t," ").concat(a?"(".concat(a,")"):"")]})}var pe=b.a.nav(se||(se=Object(j.a)(["\n    position: fixed;\n    top: 4rem;\n    left: 0;\n    bottom: 0;\n    width: ",";\n    border-right: 2px solid var(--gray-20);\n"])),(function(e){return e.showFull?"12rem":"4rem"})),he=b.a.ul(le||(le=Object(j.a)(["\n    list-style: none;\n    display: flex;\n    gap: var(--base-unit);\n    flex-flow: column nowrap;\n    padding: var(--base-unit) var(--base-unit) 0 var(--base-unit) !important;\n"]))),fe=b.a.li(ue||(ue=Object(j.a)(["\n    width: 100%;\n    display: flex;\n"]))),xe=b.a.button(de||(de=Object(j.a)(["\n    width: 100%;\n    padding: var(--base-unit);\n    display: flex;\n    justify-content: ",";\n    align-items: center;\n    background: transparent;\n    border: none;\n    outline: none;\n\n    &:hover,\n    &:focus {\n        background-color: var(--gray-20);\n        cursor: pointer;\n    }\n\n    svg {\n        height: 1.5rem;\n    }\n"])),(function(e){return e.showFull?"flex-end":"center"}));function Oe(e){var n=e.setPage,t=e.page,r=e.inv,a=e.orders,c=e.showFull,o=e.setShowFull,i=e.messages;return Object(q.jsxs)(pe,{showFull:c,children:[Object(q.jsx)(xe,{showFull:c,type:"button",onClick:function(){return o(!c)},children:c?Object(q.jsx)(re,{}):Object(q.jsx)(te,{})}),Object(q.jsxs)(he,{children:[Object(q.jsx)(fe,{children:Object(q.jsx)(be,{showFull:c,page:t,active:"metrics",setPage:n,children:Object(q.jsx)(oe,{})})}),Object(q.jsx)(fe,{children:Object(q.jsx)(be,{showFull:c,page:t,active:"orders",num:a,setPage:n,children:Object(q.jsx)(ce,{})})}),Object(q.jsx)(fe,{children:Object(q.jsx)(be,{active:"inventory",page:t,showFull:c,num:r,setPage:n,children:Object(q.jsx)(ae,{})})}),Object(q.jsx)(fe,{children:Object(q.jsx)(be,{active:"messages",page:t,showFull:c,num:i,setPage:n,children:Object(q.jsx)(ie,{})})})]})]})}var ge,ve,me,we,ye,ke=t(55),Se=b.a.label(ge||(ge=Object(j.a)(["\n    display: flex;\n    align-items: center;\n    gap: var(--base-unit);\n    user-select: none;\n    margin: 0;\n"])));function Ce(e){var n=e.props,t=e.children;return Object(q.jsx)(Se,Object(s.a)(Object(s.a)({},n),{},{children:t}))}function Me(){return Object(q.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[Object(q.jsx)("polyline",{points:"3 6 5 6 21 6"}),Object(q.jsx)("path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"})]})}function Le(e){var n=e.onClick;return Object(q.jsx)("button",{type:"button",className:"button danger icon-button outline",onClick:n,children:Object(q.jsx)(Me,{})})}var Fe,Pe,ze=b.a.li(ve||(ve=Object(j.a)(["\n    display: flex;\n    width: 100%;\n    align-items: center;\n    gap: 2rem;\n    @media screen and (min-width: 1281px) {\n        gap: 3rem;\n    }\n    border-top: 2px solid var(--gray-20);\n    border-left: 2px solid var(--gray-20);\n    border-right: 2px solid var(--gray-20);\n    padding: 1rem;\n\n    &:hover {\n        background-color: var(--gray-20);\n    }\n"]))),Ie=b.a.img(me||(me=Object(j.a)(["\n    max-height: 2rem;\n"]))),We=b.a.p(we||(we=Object(j.a)(["\n    font-size: 1rem;\n"]))),Ne=b.a.p(ye||(ye=Object(j.a)(["\n    font-weight: 500;\n    ","\n"])),(function(e){return e.grow&&"flex-grow: 1;"}));function De(e){var n=e.item,t=e.token,r=e.setInv,a=function(e,a){return function(c){r((function(t){return Object(s.a)(Object(s.a)({},t),{},Object(ke.a)({},n.prefix,t[n.prefix].map((function(t){return t.id===n.id?Object(s.a)(Object(s.a)({},t),{},Object(ke.a)({},e,a(c.target))):t}))))})),function(e,n){return M.apply(this,arguments)}(Object(s.a)(Object(s.a)({},n),{},Object(ke.a)({},e,a(c.target))),t).catch((function(e){return console.log(e)}))}},c=a("quantity",(function(e){return Number(e.value)})),o=a("active",(function(e){return e.checked})),i=a("price",(function(e){return Number(e.value)}));return Object(q.jsxs)(ze,{children:[Object(q.jsx)(Ie,{src:"https://zircus.netlify.app/".concat(n.images.sm_a),alt:n.name,className:"inventory__item__img"}),Object(q.jsx)(We,{children:n.name.en}),Object(q.jsx)(Ne,{children:n.size}),Object(q.jsx)(Ne,{grow:!0,children:n.color}),Object(q.jsxs)(Ce,{htmlFor:"".concat(n.id,"-price"),children:[Object(q.jsx)(Ne,{children:"price"}),Object(q.jsx)("input",{min:"0",step:"1",size:"5",type:"number",id:"".concat(n.id,"-price"),value:n.price,onChange:i})]}),Object(q.jsxs)(Ce,{htmlFor:"".concat(n.id,"-quantity"),children:[Object(q.jsx)(Ne,{children:"quantity"}),Object(q.jsx)("input",{min:"0",step:"1",size:"5",type:"number",id:"".concat(n.id,"-quantity"),value:n.quantity,onChange:c})]}),Object(q.jsxs)(Ce,{htmlFor:"active",children:[Object(q.jsx)(Ne,{children:"active"}),Object(q.jsx)("input",{type:"checkbox",checked:n.active,onChange:o})]})]})}function Te(){return Object(q.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"icon",children:[Object(q.jsx)("line",{x1:"12",y1:"2",x2:"12",y2:"6"}),Object(q.jsx)("line",{x1:"12",y1:"18",x2:"12",y2:"22"}),Object(q.jsx)("line",{x1:"4.93",y1:"4.93",x2:"7.76",y2:"7.76"}),Object(q.jsx)("line",{x1:"16.24",y1:"16.24",x2:"19.07",y2:"19.07"}),Object(q.jsx)("line",{x1:"2",y1:"12",x2:"6",y2:"12"}),Object(q.jsx)("line",{x1:"18",y1:"12",x2:"22",y2:"12"}),Object(q.jsx)("line",{x1:"4.93",y1:"19.07",x2:"7.76",y2:"16.24"}),Object(q.jsx)("line",{x1:"16.24",y1:"7.76",x2:"19.07",y2:"4.93"})]})}var Ae,Ee=b.a.div(Fe||(Fe=Object(j.a)(["\n    position: fixed;\n    right: calc(var(--base-unit) + 15px);\n    bottom: var(--base-unit);\n    height: 3rem;\n    padding: var(--base-unit) calc(var(--base-unit) * 2);\n    background-color: var(--dgray-90);\n    border-radius: var(--radius);\n    border: 2px solid var(--gray-20);\n    display: flex;\n    align-items: center;\n    gap: var(--base-unit);\n    color: var(--gray-10);\n"]))),Be=b.a.div(Pe||(Pe=Object(j.a)(["\n    display: flex;\n    gap: var(--base-spacing);\n"])));function qe(e){var n=e.filters;return Object(q.jsx)(Ee,{children:Object(q.jsx)(Be,{children:n&&n.map((function(e,n){return Object(q.jsxs)(Ce,{htmlFor:"filter-".concat(n),active:e.active,children:[e.text,Object(q.jsx)("input",{checked:e.active,onChange:e.setActive,type:"checkbox",id:"filter-".concat(n)})]},e.text)}))})})}var Ue,He=b.a.main(Ae||(Ae=Object(j.a)(["\n    overflow-y: scroll;\n    min-height: calc(100vh - 4rem);\n    display: flex;\n    flex-flow: column nowrap;\n    align-items: center;\n    ","\n    ","\n    ","\n    padding-bottom: var(--lg-spacing);\n"])),(function(e){return e.padTop&&"padding-top: var(--base-spacing);"}),(function(e){return e.pad&&"padding-left: var(--base-spacing);"}),(function(e){return e.pad&&"padding-right: var(--base-spacing);"}));function _e(e){var n=e.children,t=e.padTop,r=e.pad;return Object(q.jsx)(He,{padTop:t,pad:r,children:n})}var Re=b.a.ul(Ue||(Ue=Object(j.a)(["\n    display: flex;\n    flex-flow: column nowrap;\n    max-width: var(--screen-lg);\n    width: 100%;\n    ","\n"])),(function(e){return e.gap?"gap: var(--base-spacing);":""}));function Ve(e){var n=e.gap,t=e.children;return Object(q.jsx)(Re,{gap:n,children:t})}function Je(e){var n=e.inv,t=e.token,a=e.setInv,c=Object(r.useState)(!0),o=Object(i.a)(c,2),s=o[0],l=o[1],u=Object(r.useState)(!0),d=Object(i.a)(u,2),j=d[0],b=d[1],p=Object(r.useState)(!0),h=Object(i.a)(p,2),f=h[0],x=h[1],O=[{active:s,text:"flat front",setActive:function(){return l(!s)}},{active:j,text:"pouch front",setActive:function(){return b(!j)}},{active:f,text:"compression front",setActive:function(){return x(!f)}}];return Object(q.jsxs)(_e,{children:[Object(q.jsx)(qe,{filters:O}),Object(q.jsxs)(Ve,{children:[n&&s&&n.ff.map((function(e){return Object(q.jsx)(De,{item:e,token:t,setInv:a},e.id)})),n&&j&&n.pf.map((function(e){return Object(q.jsx)(De,{item:e,token:t,setInv:a},e.id)})),n&&f&&n.cf.map((function(e){return Object(q.jsx)(De,{item:e,token:t,setInv:a},e.id)})),!n&&Object(q.jsx)("li",{id:"spinner",className:"spinner",children:Object(q.jsx)(Te,{})})]})]})}var Ke,Ze,$e,Ge,Qe=t(344),Xe=t(176),Ye=t(348),en=t(173),nn=t(174);function tn(e){var n=e.orders,t=n?n.map((function(e){return{name:e.name,date:new Date(e.createdOn).toLocaleDateString(),total:e.total}})):[];return Object(q.jsxs)(Qe.a,{width:500,height:400,data:t,children:[Object(q.jsx)(Xe.a,{type:"monotone",dataKey:"total",stroke:"#888888"}),Object(q.jsx)(Ye.a,{stroke:"#cccccc"}),Object(q.jsx)(en.a,{dataKey:"date"}),Object(q.jsx)(nn.a,{})]})}var rn=b.a.div(Ke||(Ke=Object(j.a)(["\n    display: flex;\n    ","\n    gap: var(--base-spacing);\n    margin-top: var(--base-spacing);\n    width: 100%;\n    max-width: var(--screen-md);\n"])),(function(e){return e.flow?"flex-flow: ".concat(e.flow,";"):"flex-flow: row wrap;"})),an=b.a.div(Ze||(Ze=Object(j.a)(["\n    background-color: var(--gray-20);\n    border-radius: var(--radius);\n    flex-basis: 12rem;\n    flex-grow: 1;\n    display: flex;\n    flex-flow: column nowrap;\n    align-items: center;\n    justify-content: flex-start;\n    overflow: hidden;\n    margin-bottom: var(--lg-spacing);\n\n    h3 {\n        background-color: var(--dgray-80);\n        color: var(--gray-10);\n        width: 100%;\n        text-align: center;\n        padding: var(--base-unit) var(--base-spacing);\n    }\n"]))),cn=b.a.span($e||($e=Object(j.a)(["\n    display: flex;\n    height: 100%;\n    align-items: center;\n    justify-content: center;\n    font-size: var(--xxl-font-size);\n"]))),on=b.a.ul(Ge||(Ge=Object(j.a)(["\n    width: 100%;\n    padding: var(--base-spacing) !important;\n\n    li {\n        display: flex;\n        justify-content: space-between;\n        border-bottom: 1px solid var(--gray-30);\n        padding: var(--base-unit);\n\n        &:hover {\n            background-color: var(--gray-30);\n        }\n    }\n"])));function sn(e){var n=e.orders,t=e.inv,r=e.messages,a=t&&Object.values(t).flat()||[];return Object(q.jsxs)(_e,{pad:!0,children:[Object(q.jsxs)(rn,{flow:"row wrap",children:[Object(q.jsxs)(an,{children:[Object(q.jsx)("h3",{children:"orders"}),Object(q.jsx)(cn,{children:n&&n.length})]}),Object(q.jsxs)(an,{children:[Object(q.jsx)("h3",{children:"messages"}),Object(q.jsx)(cn,{children:r&&r.length})]}),Object(q.jsxs)(an,{children:[Object(q.jsx)("h3",{children:"low stock"}),Object(q.jsx)(on,{children:a.map((function(e){return e.quantity<5&&Object(q.jsxs)("li",{children:[Object(q.jsx)("span",{children:e.type}),Object(q.jsx)("span",{children:e.quantity})]},e.type)}))})]})]}),Object(q.jsxs)(rn,{flow:"column nowrap",children:[Object(q.jsx)("h2",{children:"Recent Orders"}),Object(q.jsx)(tn,{orders:n})]})]})}var ln,un,dn=t(22),jn=b.a.h3(ln||(ln=Object(j.a)(["\n    font-size: 1.125rem;\n    font-weight: 700;\n    display: block;\n    margin-bottom: var(--base-unit);\n    font-style: normal;\n"])));function bn(e){var n=e.children;return Object(q.jsx)(jn,{children:n})}var pn,hn,fn=b.a.address(un||(un=Object(j.a)(["\n    flex-grow: 1;\n"])));function xn(e){var n=e.order;return Object(q.jsxs)(fn,{children:[Object(q.jsx)(bn,{children:n.name}),Object(q.jsx)("a",{href:"mailto:".concat(n.email),children:n.email}),Object(q.jsx)("br",{}),Object(q.jsxs)("a",{href:"tel:+1".concat(n.phone.replaceAll(" ","")),children:["+1 ",n.phone]}),Object(q.jsx)("br",{}),n.address.line1,Object(q.jsx)("br",{}),n.address.line2,Object(q.jsx)("br",{}),n.address.city," ",n.address.state,Object(q.jsx)("br",{}),n.address.postalCode.toUpperCase()," ",n.address.country,Object(q.jsx)("br",{})]})}var On,gn,vn,mn=b.a.p(pn||(pn=Object(j.a)(["\n    margin-top: auto;\n    text-align: right;\n    font-weight: 600;\n"]))),wn=b.a.div(hn||(hn=Object(j.a)(["\n    display: flex;\n    flex-flow: column nowrap;\n    justify-content: space-between;\n    width: 14rem;\n    border-right: 2px solid var(--gray-30);\n    padding-right: var(--base-spacing);\n"])));function yn(e){var n=e.order;return Object(q.jsxs)(wn,{children:[Object(q.jsx)("ul",{children:n.items.map((function(e){return Object(q.jsxs)("li",{children:[e.type," x ",e.quantity]},e.type)}))}),Object(q.jsxs)(mn,{children:["total $",n.total.toFixed(2)]})]})}var kn,Sn,Cn=b.a.li(On||(On=Object(j.a)(["\n    margin: 0 auto;\n    display: flex;\n    gap: var(--base-spacing);\n    padding: var(--base-spacing);\n    width: 100%;\n    border-left: 0.5rem solid;\n    border-right: 0.5rem solid;\n    border-bottom: 1px solid;\n    border-top: 1px solid;\n    border-color: ",";\n\n    &:hover {\n        background-color: var(--gray-20);\n    }\n"])),(function(e){return e.hasPaid&&e.hasShipped?"var(--green)":e.hasPaid?"var(--yellow)":"var(--gray-30)"})),Mn=b.a.div(gn||(gn=Object(j.a)(["\n    display: flex;\n    flex-flow: column nowrap;\n"]))),Ln=b.a.div(vn||(vn=Object(j.a)(["\n    width: 100%;\n    display: flex;\n    justify-content: flex-end;\n    align-items: flex-end;\n    flex-grow: 1;\n"])));function Fn(e){var n=e.order,t=e.token,r=e.setShowModal,a=e.setOrders,c=e.notify,o=function(e){var n=e.data;return c("Error: ".concat(null===n||void 0===n?void 0:n.error),"red")&&console.log(n)};return Object(q.jsxs)(Cn,{hasPaid:n.hasPaid,hasShipped:n.hasShipped,children:[Object(q.jsx)(yn,{order:n}),Object(q.jsx)(xn,{order:n}),Object(q.jsxs)(Mn,{children:[Object(q.jsx)(bn,{children:new Date(n.createdOn).toLocaleString("en-US")}),Object(q.jsxs)(Ce,{children:["paid:",Object(q.jsx)("input",{type:"checkbox",checked:n.hasPaid,onChange:function(){a((function(e){return e.map((function(e){return e.id===n.id?Object(s.a)(Object(s.a)({},e),{},{hasPaid:!e.hasPaid}):e}))})),k({id:n.id,updatedAttributes:{hasPaid:!n.hasPaid}},t).catch((function(e){return console.log(e)}))}})]}),Object(q.jsxs)(Ce,{children:["shipped:",Object(q.jsx)("input",{type:"checkbox",checked:n.hasShipped,onChange:function(){a((function(e){return e.map((function(e){return e.id===n.id?Object(s.a)(Object(s.a)({},e),{},{hasShipped:!e.hasShipped}):e}))})),k({id:n.id,updatedAttributes:{hasShipped:!n.hasShipped}},t).catch((function(e){return console.log(e)}))}})]}),Object(q.jsx)(Ln,{children:Object(q.jsx)(Le,{onClick:function(){r({heading:"Confirm deletion",text:"Delete ".concat(n.name,"'s order?'"),color:"danger",btnText:"Delete",ok:function(e){e&&function(e,n){return C.apply(this,arguments)}(n.id,t).catch(o)}})}})})]})]})}var Pn,zn,In,Wn,Nn,Dn=b.a.label(kn||(kn=Object(j.a)(["\n  display: flex;\n  gap: var(--base-unit);\n  align-items: center;\n"]))),Tn=b.a.div(Sn||(Sn=Object(j.a)(["\n  display: flex;\n  gap: var(--base-spacing);\n  margin-bottom: var(--base-spacing);\n"])));function An(e){var n=e.orders,t=e.token,a=e.setShowModal,c=e.setOrders,o=e.notify,l=z("date",""),u=Object(i.a)(l,2),d=u[0],j=(u[1],z("date","")),b=Object(i.a)(j,2),p=b[0],h=(b[1],Object(r.useState)(["hasPaid"])),f=Object(i.a)(h,2),x=f[0],O=f[1],g=[{active:x.includes("hasShipped"),text:"shipped",setActive:function(){return x.includes("hasShipped")?O((function(e){return e.filter((function(e){return"hasShipped"!==e}))})):O((function(e){return e.concat("hasShipped")}))}},{active:x.includes("hasPaid"),text:"paid",setActive:function(){return x.includes("hasPaid")?O((function(e){return e.filter((function(e){return"hasPaid"!==e}))})):O((function(e){return e.concat("hasPaid")}))}}],v=n&&n.filter((function(e){if(!x.length)return!0;var n,t=Object(dn.a)(x);try{for(t.s();!(n=t.n()).done;){if(!e[n.value])return!1}}catch(r){t.e(r)}finally{t.f()}return!0}));return Object(q.jsxs)(_e,{padTop:!0,children:[Object(q.jsxs)(Tn,{children:[Object(q.jsxs)(Dn,{htmlFor:"dateStart",children:[Object(q.jsx)("span",{children:"Date Start"}),Object(q.jsx)("input",Object(s.a)(Object(s.a)({},d),{},{id:"dateStart"}))]}),Object(q.jsxs)(Dn,{htmlFor:"dateEnd",children:[Object(q.jsx)("span",{children:"Date End"}),Object(q.jsx)("input",Object(s.a)(Object(s.a)({},p),{},{id:"dateEnd"}))]})]}),Object(q.jsx)(qe,{filters:g}),Object(q.jsx)(Ve,{gap:!0,children:n&&v.map((function(e){return Object(q.jsx)(Fn,{notify:o,token:t,order:e,setShowModal:a,setOrders:c},e.id)}))})]})}var En,Bn,qn=b.a.li(Pn||(Pn=Object(j.a)(["\n    margin: 0 auto;\n    display: flex;\n    justify-content: flex-start;\n    align-items: flex-start;\n    gap: var(--md-spacing);\n    padding: var(--base-spacing);\n    width: 100%;\n    border-left: 0.5rem solid;\n    border-right: 0.5rem solid;\n    border-bottom: 1px solid;\n    border-top: 1px solid;\n    border-color: var(--gray-30);\n\n    &:hover {\n        background-color: var(--gray-20);\n    }\n"]))),Un=b.a.div(zn||(zn=Object(j.a)(["\n    display: flex;\n    max-width: 22vw;\n    width: 100%;\n    flex-flow: column nowrap;\n"]))),Hn=b.a.div(In||(In=Object(j.a)(["\n    display: flex;\n    justify-content: flex-end;\n    flex-grow: 1;\n"]))),_n=b.a.p(Wn||(Wn=Object(j.a)(["\n    max-width: 75ch;\n    width: 100%;\n"]))),Rn=b.a.a(Nn||(Nn=Object(j.a)(["\n    text-decoration: none;\n    padding: var(--base-unit);\n    color: var(--link);\n\n    &:hover,\n    &:focus {\n        text-decoration: none !important;\n        color: var(--link-hover);\n    }\n"])));function Vn(e){var n=e.message,t=e.setShowModal,a=e.setMessages,c=e.token,o=e.notify,s=Object(r.useState)(!1),l=Object(i.a)(s,2),u=l[0],d=l[1],j=function(e){var t=e.data;a((function(e){return e.filter((function(e){return e.id!==n.id}))})),o("".concat(t.response,": Deleted ").concat(n.name,"'s message"),"red")},b=function(e){var n=e.data;return o("".concat(n.error),"red")},p=function(){t({heading:"Confirm deletion",text:"Delete ".concat(n.name,"'s message?'"),color:"danger",btnText:"Delete",ok:function(e){e&&function(e,n){return P.apply(this,arguments)}(n.id,c).then(j).catch(b)}})};return Object(q.jsxs)(qn,{children:[Object(q.jsxs)(Un,{children:[Object(q.jsx)(bn,{children:n.name}),Object(q.jsx)("a",{href:"mailto:".concat(n.email),children:n.email})]}),Object(q.jsxs)(_n,{children:[u?n.message:n.message.substring(0,140),n.message.length>140&&Object(q.jsx)(Rn,{href:"#",onClick:function(){return d((function(e){return!e}))},children:u?"(less)":"... (more)"})]}),Object(q.jsx)(Hn,{children:Object(q.jsx)(Le,{onClick:function(){return p()}})})]})}function Jn(e){var n=e.messages,t=e.setShowModal,r=e.setMessages,a=e.token,c=e.notify;return Object(q.jsx)(_e,{children:Object(q.jsx)(Ve,{gap:!0,children:n&&n.map((function(e){return Object(q.jsx)(Vn,{notify:c,token:a,setMessages:r,message:e,setShowModal:t},e.id)}))})})}var Kn,Zn=b.a.div(En||(En=Object(j.a)(["\n    position: fixed;\n    top: calc(var(--base-unit) + 4rem);\n    right: calc(var(--base-unit) + 15px); // for scrollbar\n    width: 22rem;\n    background-color: ","\n    z-index: 100;\n    border-radius: var(--radius);\n    opacity: 0.95;\n    box-shadow: var(--box-shadow-sm);\n    animation: 0.2s ease-out forwards fadeDown;\n"])),(function(e){return"red"===e.look?"var(--red);":"green"===e.look?"var(--green);":"var(--gray-30);"})),$n=b.a.p(Bn||(Bn=Object(j.a)(["\n    color: var(--gray-20);\n    margin: var(--base-spacing);\n    font-size: var(--small-font-size);\n    font-weight: 600;\n"])));function Gn(e){var n=e.notification;return Object(q.jsx)(Zn,{look:n.style,children:Object(q.jsx)($n,{children:n.text})})}var Qn,Xn,Yn,et,nt,tt,rt=b.a.div(Kn||(Kn=Object(j.a)(["\n    display: flex;\n    flex-flow: column nowrap;\n    padding-top: 4rem;\n    padding-left: ",";\n    height: 100vh;\n    overflow: hidden;\n"])),(function(e){return e.showFull?"12rem":"4rem"}));function at(e){var n=e.inv,t=e.orders,a=e.token,c=e.setShowModal,o=e.logout,s=e.setOrders,l=e.setInv,u=e.user,d=e.messages,j=e.setMessages,b=e.notify,p=e.notification,h=Object(r.useState)("metrics"),f=Object(i.a)(h,2),x=f[0],O=f[1],g=Object(r.useState)(!0),v=Object(i.a)(g,2),m=v[0],w=v[1],y=t?t.length:0,k=d?d.length:0,S=function(e,n){return e.reduce((function(e,t){return e+n(t)}),0)},C=function(e){return e.quantity},M=n?S([S(n.ff,C),S(n.pf,C),S(n.cf,C)],(function(e){return e})):0;return Object(q.jsxs)(rt,{showFull:m,children:[Object(q.jsx)(ne,{text:"Zircus Admin Dashboard",logout:o,user:u}),Object(q.jsx)(Oe,{page:x,setPage:O,orders:y,inv:M,showFull:m,setShowFull:w,messages:k}),p&&Object(q.jsx)(Gn,{notification:p}),"inventory"===x&&Object(q.jsx)(Je,{inv:n,token:a,setShowModal:c,setInv:l}),"orders"===x&&Object(q.jsx)(An,{orders:t,token:a,setShowModal:c,setOrders:s,notify:b}),"metrics"===x&&Object(q.jsx)(sn,{orders:t,setShowModal:c,inv:n,messages:d}),"messages"===x&&Object(q.jsx)(Jn,{messages:d,setMessages:j,setShowModal:c,token:a,notify:b})]})}var ct=b.a.div(Qn||(Qn=Object(j.a)(["\n    ",";\n"])),(function(e){return e.showModal&&"filter: blur(0.25rem)"})),ot=b.a.div(Xn||(Xn=Object(j.a)(["\n    width: 100vw;\n    height: 100vh;\n    top: 0;\n    left: 0;\n    position: fixed;\n"]))),it=b.a.section(Yn||(Yn=Object(j.a)(["\n    position: fixed;\n    display: flex;\n    flex-flow: column nowrap;\n    gap: 1rem;\n    backgroud-color: var(--gray-90);\n    top: calc(25%);\n    left: calc(50% - 15rem);\n    width: 30rem;\n    min-height: 15rem;\n    background-color: var(--gray-10);\n    border-radius: var(--big-radius);\n    border: 2px solid var(--dgray-90);\n    padding: var(--base-spacing);\n"]))),st=b.a.p(et||(et=Object(j.a)(["\n    flex-grow: 1;\n"]))),lt=b.a.div(nt||(nt=Object(j.a)(["\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    width: 100%;\n    gap: 1rem;\n"]))),ut=b.a.button(tt||(tt=Object(j.a)(["\n    flex-grow: 1;\n"])));function dt(e){var n=e.children,t=e.showModal,a=e.setShowModal,c=Object(r.useRef)();return Object(r.useEffect)((function(){t&&c.current.focus()})),Object(q.jsxs)("div",{children:[Object(q.jsxs)(ct,{showModal:t,children:[n,t&&Object(q.jsx)(ot,{})]}),t&&Object(q.jsxs)(it,{children:[Object(q.jsx)("h2",{children:t.heading}),Object(q.jsx)(st,{children:t.text}),Object(q.jsxs)(lt,{children:[Object(q.jsx)(ut,{className:"".concat(t.color," button"),type:"button",onClick:function(){t.ok(!0),a(null)},children:t.btnText||"Ok"}),Object(q.jsx)(ut,{className:"button outline",type:"button",onClick:function(){t.ok(!1),a(null)},ref:c,children:"Cancel"})]})]})]})}var jt=function(){var e=Object(r.useState)(null),n=Object(i.a)(e,2),t=n[0],a=n[1],c=Object(r.useState)(null),o=Object(i.a)(c,2),s=o[0],l=o[1],u=Object(r.useState)(null),d=Object(i.a)(u,2),j=d[0],b=d[1],p=Object(r.useState)(null),h=Object(i.a)(p,2),f=h[0],x=h[1],O=Object(r.useState)(null),g=Object(i.a)(O,2),m=g[0],y=g[1],k=Object(r.useState)(null),S=Object(i.a)(k,2),C=S[0],M=S[1],F=Object(r.useState)(null),P=Object(i.a)(F,2),z=P[0],I=P[1],W=Object(r.useState)(-1),N=Object(i.a)(W,2),D=N[0],T=N[1],A=Object(r.useContext)(H),E=A.addListener,B=A.removeListener,U=function(e){var n=e.text,t=e.color;V(n,t),v().then((function(e){return b(e.data)})).catch((function(){return b(null)})),w(s).then((function(e){return y(e.data)})).catch((function(){return y(null)}))},_=function(){var e=E((function(e){if(s)switch(e.type){case"message":return function(e){var n=e.text,t=e.color;V(n,t),L(s).then((function(e){return x(e.data.messages)})).catch((function(){return x(null)}))}({text:"New message from ".concat(e.data.name),color:"green"});case"pending order":return U({text:"Pending order from ".concat(e.data.name),color:"gray"});case"paid order":return U({text:"Paid order from ".concat(e.data.name),color:"green"});case"deleted order":return U({text:"".concat(e.data.response,": Inventory updated"),color:"red"})}}));T(e)},R=function(){B(D),T(-1)},V=function(e,n){z&&z.self&&clearTimeout(z.self);var t=setTimeout((function(){return I(null)}),4500);I({text:e,style:n,self:t})};return Object(r.useEffect)((function(){return v().then((function(e){return b(e.data)})).catch((function(){return b(null)})),null!==s&&(w(s).then((function(e){return y(e.data)})).catch((function(){return y(null)})),L(s).then((function(e){return x(e.data.messages)})).catch((function(){return x(null)}))),_(),R}),[b,s]),Object(q.jsx)(dt,{showModal:C,setShowModal:M,children:s?Object(q.jsx)(at,{notification:z,notify:V,inv:j,orders:m,token:s,logout:function(){a(null),l(null),localStorage.removeItem("user"),localStorage.removeItem("token")},setShowModal:M,setOrders:y,setInv:b,user:t,messages:f,setMessages:x}):Object(q.jsx)($,{setUser:a,setToken:l})})};t(341);o.a.render(Object(q.jsx)(a.a.StrictMode,{children:Object(q.jsx)(_,{children:Object(q.jsx)(jt,{})})}),document.getElementById("root"))}},[[342,1,2]]]);
//# sourceMappingURL=main.e62c496d.chunk.js.map