(this.webpackJsonpadmin=this.webpackJsonpadmin||[]).push([[0],{342:function(e,n,t){},343:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),c=t(84),o=t.n(c),i=t(49),s=t(11),l=t(19),u=t(18),d=t.n(u),j=t(27),b=t(3),p=t(4),h=t(35),f=t.n(h),x=function(e){return{headers:{Authorization:"Bearer ".concat(e)}}},g="https://zircus.herokuapp.com/api";function O(e,n){return v.apply(this,arguments)}function v(){return(v=Object(j.a)(d.a.mark((function e(n,t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.post("".concat(g,"/login"),{username:n,password:t});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(){return w.apply(this,arguments)}function w(){return(w=Object(j.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("".concat(g,"/inv"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function y(e){return k.apply(this,arguments)}function k(){return(k=Object(j.a)(d.a.mark((function e(n){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("".concat(g,"/orders"),x(n));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function S(e,n){return C.apply(this,arguments)}function C(){return(C=Object(j.a)(d.a.mark((function e(n,t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.put("".concat(g,"/orders/").concat(n.id),n,x(t));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function L(){return(L=Object(j.a)(d.a.mark((function e(n,t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.delete("".concat(g,"/orders/").concat(n),x(t));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function M(){return(M=Object(j.a)(d.a.mark((function e(n,t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.put("".concat(g,"/inv"),n,x(t));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function F(e){return P.apply(this,arguments)}function P(){return(P=Object(j.a)(d.a.mark((function e(n){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("".concat(g,"/message"),x(n));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function T(){return(T=Object(j.a)(d.a.mark((function e(n,t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.delete("".concat(g,"/message/").concat(n),x(t));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function z(e,n){return D.apply(this,arguments)}function D(){return(D=Object(j.a)(d.a.mark((function e(n,t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.post("".concat(g,"/orders/label"),{url:n},Object(l.a)({responseType:"blob"},x(t)));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function W(e,n,t){var a=Object(r.useState)(n),c=Object(s.a)(a,2),o=c[0],i=c[1];return[{type:e,value:o,onChange:function(e){return i(e.target.value)},placeholder:t},function(){return i(n)}]}var I,N,E,B,A,q,U,R,H=t(1),_=[],V=a.a.createContext(),J=function(e){var n=e.children,t=Object(r.useRef)(null),a=250,c=function(){t.current=new WebSocket("ws://localhost:3000"),t.current.onopen=function(){console.debug("Websocket connection open"),a=250},t.current.onmessage=function(e){var n=JSON.parse(e.data);i(n)},t.current.onclose=function(e){switch(e.code){case 1e3:console.debug("Websocket closed normally");break;default:o(a+=a)}},t.current.onerror=function(e){switch(e.code){case"ECONNREFUSED":a=a+=a,o(a);break;default:console.error("Websocket encountered error: ".concat(e))}}},o=function(e){setTimeout(c,Math.min(1e4,e))},i=function(e){console.debug("[Websocket-IncomingMessage] ",e),_.forEach((function(n){return n.messageHandler(e)}))};return Object(H.jsx)(V.Provider,{value:{initializeWebSocket:c,disconnectWebSocket:function(){t.current&&t.current.close(1e3)},addListener:function(e){var n=_.length;return _.push({id:n,messageHandler:e}),n},removeListener:function(e){return _=_.filter((function(n){return n.id!==e}))}},children:n})},K=(V.Consumer,p.a.main(I||(I=Object(b.a)(["\n    width: 100%;\n    display: flex;\n    flex-flow: column nowrap;\n    align-items: center;\n"])))),Z=p.a.form(N||(N=Object(b.a)(["\n    margin-top: var(--lg-spacing);\n    padding: var(--md-spacing);\n    background-color: var(--gray-20);\n    border-radius: var(--big-radius);\n    display: flex;\n    flex-flow: column nowrap;\n    gap: 0.5rem;\n"]))),$=p.a.label(E||(E=Object(b.a)(["\n    display: flex;\n    flex-flow: column nowrap;\n"]))),G=p.a.p(B||(B=Object(b.a)(["\n    color: ",";\n    margin: var(--base-spacing) 0;\n    font-weight: 500;\n"])),(function(e){return e.failedLogin?"var(--red)":"var(--text-color)"})),Q=p.a.button(A||(A=Object(b.a)(["\n    margin-top: 0.5rem;\n"])));function X(e){var n=e.setToken,t=e.setUser,a=Object(r.useState)(!1),c=Object(s.a)(a,2),o=c[0],i=c[1],u=W("text",""),b=Object(s.a)(u,1)[0],p=W("password",""),h=Object(s.a)(p,1)[0],f=Object(r.useContext)(V).initializeWebSocket,x=function(){i(!0),setTimeout((function(){i(!1)}),2e3)},g=function(e){var r=e.data;t(r.name),n(r.token),localStorage.setItem("user",r.name),localStorage.setItem("token",r.token),f()},v=function(){var e=Object(j.a)(d.a.mark((function e(n){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.preventDefault(),O(b.value,h.value).then(g).catch(x);case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){var e=localStorage.getItem("token"),r=localStorage.getItem("user");e&&n(e),r&&t(r),e&&r&&f()}),[n,t,f]),Object(H.jsx)(K,{children:Object(H.jsxs)(Z,{onSubmit:v,children:[Object(H.jsx)("h1",{children:"Zircus Admin"}),Object(H.jsx)(G,{failedLogin:o,children:o?"Login failed":"Please Log in:"}),Object(H.jsxs)($,{htmlFor:"username",children:[Object(H.jsx)("span",{children:"Username"}),Object(H.jsx)("input",Object(l.a)(Object(l.a)({},b),{},{disabled:!!o}))]}),Object(H.jsxs)($,{htmlFor:"password",children:[Object(H.jsx)("span",{children:"Password"}),Object(H.jsx)("input",Object(l.a)(Object(l.a)({},h),{},{disabled:!!o}))]}),Object(H.jsx)(Q,{className:"button",type:"submit",disabled:!!o,children:o?"Please wait":"Log in"})]})})}function Y(){return Object(H.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[Object(H.jsx)("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),Object(H.jsx)("circle",{cx:"12",cy:"7",r:"4"})]})}var ee,ne=p.a.header(q||(q=Object(b.a)(["\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 4rem;\n    background: var(--dgray-80);\n    padding: var(--base-spacing);\n"]))),te=p.a.h3(U||(U=Object(b.a)(["\n    color: var(--invert-text-color);\n    font-size: 1.25rem;\n    flex-grow: 1;\n"]))),re=p.a.span(R||(R=Object(b.a)(["\n    display: flex;\n    align-items: center;\n    gap: var(--base-unit);\n    color: var(--gray-10);\n    margin-right: var(--base-spacing);\n\n    svg {\n        height: 1rem;\n    }\n"])));function ae(e){var n=e.text,t=e.logout,r=e.user;return Object(H.jsxs)(ne,{children:[Object(H.jsx)(te,{children:n}),Object(H.jsxs)(re,{children:[Object(H.jsx)(Y,{})," ",r.split(" ")[0]]}),Object(H.jsx)("button",{className:"button light outline",type:"button",onClick:t,children:"logout"})]})}function ce(){return Object(H.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[Object(H.jsx)("polyline",{points:"13 17 18 12 13 7"}),Object(H.jsx)("polyline",{points:"6 17 11 12 6 7"})]})}function oe(){return Object(H.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[Object(H.jsx)("polyline",{points:"11 17 6 12 11 7"}),Object(H.jsx)("polyline",{points:"18 17 13 12 18 7"})]})}function ie(){return Object(H.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[Object(H.jsx)("line",{x1:"8",y1:"6",x2:"21",y2:"6"}),Object(H.jsx)("line",{x1:"8",y1:"12",x2:"21",y2:"12"}),Object(H.jsx)("line",{x1:"8",y1:"18",x2:"21",y2:"18"}),Object(H.jsx)("line",{x1:"3",y1:"6",x2:"3.01",y2:"6"}),Object(H.jsx)("line",{x1:"3",y1:"12",x2:"3.01",y2:"12"}),Object(H.jsx)("line",{x1:"3",y1:"18",x2:"3.01",y2:"18"})]})}function se(){return Object(H.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[Object(H.jsx)("path",{d:"M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"}),Object(H.jsx)("line",{x1:"3",y1:"6",x2:"21",y2:"6"}),Object(H.jsx)("path",{d:"M16 10a4 4 0 0 1-8 0"})]})}function le(){return Object(H.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[Object(H.jsx)("polyline",{points:"23 6 13.5 15.5 8.5 10.5 1 18"}),Object(H.jsx)("polyline",{points:"17 6 23 6 23 12"})]})}function ue(){return Object(H.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:Object(H.jsx)("path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"})})}var de,je,be,pe,he=p.a.button(ee||(ee=Object(b.a)(["\n    flex-grow: 1;\n    display: flex;\n    align-items: center;\n    ","\n    justify-content: ",";\n    ","\n\n    svg {\n        height: 1.25rem;\n    }\n"])),(function(e){return e.showFull&&"gap: calc(var(--base-unit) * 1.5);"}),(function(e){return e.showFull?"left":"center"}),(function(e){return!e.showFull&&"padding: var(--input-padding);"}));function fe(e){var n=e.showFull,t=e.active,r=e.page,a=e.num,c=e.setPage,o=e.children;return Object(H.jsxs)(he,{showFull:n,className:r===t?"button":"button outline",onClick:function(){return c(t)},children:[o,n&&"".concat(t," ").concat(a?"(".concat(a,")"):"")]})}var xe=p.a.nav(de||(de=Object(b.a)(["\n    position: fixed;\n    top: 4rem;\n    left: 0;\n    bottom: 0;\n    width: ",";\n    border-right: 2px solid var(--gray-20);\n"])),(function(e){return e.showFull?"14rem":"4rem"})),ge=p.a.ul(je||(je=Object(b.a)(["\n    list-style: none;\n    display: flex;\n    gap: var(--base-unit);\n    flex-flow: column nowrap;\n    padding: var(--base-unit) var(--base-unit) 0 var(--base-unit) !important;\n"]))),Oe=p.a.li(be||(be=Object(b.a)(["\n    width: 100%;\n    display: flex;\n"]))),ve=p.a.button(pe||(pe=Object(b.a)(["\n    width: 100%;\n    padding: var(--base-unit);\n    display: flex;\n    justify-content: ",";\n    align-items: center;\n    background: transparent;\n    border: none;\n    outline: none;\n\n    &:hover,\n    &:focus {\n        background-color: var(--gray-20);\n        cursor: pointer;\n    }\n\n    svg {\n        height: 1.5rem;\n    }\n"])),(function(e){return e.showFull?"flex-end":"center"}));function me(e){var n=e.setPage,t=e.page,r=e.inv,a=e.orders,c=e.showFull,o=e.setShowFull,i=e.messages;return Object(H.jsxs)(xe,{showFull:c,children:[Object(H.jsx)(ve,{showFull:c,type:"button",onClick:function(){return o(!c)},children:c?Object(H.jsx)(oe,{}):Object(H.jsx)(ce,{})}),Object(H.jsxs)(ge,{children:[Object(H.jsx)(Oe,{children:Object(H.jsx)(fe,{showFull:c,page:t,active:"metrics",setPage:n,children:Object(H.jsx)(le,{})})}),Object(H.jsx)(Oe,{children:Object(H.jsx)(fe,{showFull:c,page:t,active:"orders",num:a,setPage:n,children:Object(H.jsx)(se,{})})}),Object(H.jsx)(Oe,{children:Object(H.jsx)(fe,{active:"inventory",page:t,showFull:c,num:r,setPage:n,children:Object(H.jsx)(ie,{})})}),Object(H.jsx)(Oe,{children:Object(H.jsx)(fe,{active:"messages",page:t,showFull:c,num:i,setPage:n,children:Object(H.jsx)(ue,{})})})]})]})}var we,ye,ke,Se,Ce,Le=t(65),Me=p.a.label(we||(we=Object(b.a)(["\n    display: flex;\n    align-items: center;\n    gap: var(--base-unit);\n    user-select: none;\n    margin: 0;\n"])));function Fe(e){var n=e.props,t=e.children;return Object(H.jsx)(Me,Object(l.a)(Object(l.a)({},n),{},{children:t}))}var Pe,Te=p.a.li(ye||(ye=Object(b.a)(["\n    display: flex;\n    width: 100%;\n    align-items: center;\n    gap: 2rem;\n    @media screen and (min-width: 1281px) {\n        gap: 3rem;\n    }\n    border-top: 2px solid var(--gray-20);\n    border-left: 2px solid var(--gray-20);\n    border-right: 2px solid var(--gray-20);\n    padding: 1rem;\n\n    &:hover {\n        background-color: var(--gray-20);\n    }\n"]))),ze=p.a.img(ke||(ke=Object(b.a)(["\n    max-height: 2rem;\n"]))),De=p.a.p(Se||(Se=Object(b.a)(["\n    font-size: 1rem;\n"]))),We=p.a.p(Ce||(Ce=Object(b.a)(["\n    font-weight: 500;\n    ","\n"])),(function(e){return e.grow&&"flex-grow: 1;"}));function Ie(e){var n=e.item,t=e.token,r=e.setInv,a=function(e,a){return function(c){r((function(t){return t.map((function(t){return t.id===n.id?Object(l.a)(Object(l.a)({},t),{},Object(Le.a)({},e,a(c.target))):t}))})),function(e,n){return M.apply(this,arguments)}(Object(l.a)(Object(l.a)({},n),{},Object(Le.a)({},e,a(c.target))),t).catch((function(e){return console.log(e)}))}},c=a("quantity",(function(e){return Number(e.value)})),o=a("active",(function(e){return e.checked})),i=a("price",(function(e){return Number(e.value)}));return Object(H.jsxs)(Te,{children:[Object(H.jsx)(ze,{src:"https://zircus.netlify.app/".concat(n.images.sm_a),alt:n.name,className:"inventory__item__img"}),Object(H.jsx)(De,{children:n.name.en}),Object(H.jsx)(We,{children:n.size}),Object(H.jsx)(We,{grow:!0,children:n.color}),Object(H.jsxs)(Fe,{htmlFor:"".concat(n.id,"-price"),children:[Object(H.jsx)(We,{children:"price"}),Object(H.jsx)("input",{min:"0",step:"1",size:"5",type:"number",id:"".concat(n.id,"-price"),value:n.price,onChange:i})]}),Object(H.jsxs)(Fe,{htmlFor:"".concat(n.id,"-quantity"),children:[Object(H.jsx)(We,{children:"quantity"}),Object(H.jsx)("input",{min:"0",step:"1",size:"5",type:"number",id:"".concat(n.id,"-quantity"),value:n.quantity,onChange:c})]}),Object(H.jsxs)(Fe,{htmlFor:"active",children:[Object(H.jsx)(We,{children:"active"}),Object(H.jsx)("input",{type:"checkbox",checked:n.active,onChange:o})]})]})}function Ne(){return Object(H.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"icon",children:[Object(H.jsx)("line",{x1:"12",y1:"2",x2:"12",y2:"6"}),Object(H.jsx)("line",{x1:"12",y1:"18",x2:"12",y2:"22"}),Object(H.jsx)("line",{x1:"4.93",y1:"4.93",x2:"7.76",y2:"7.76"}),Object(H.jsx)("line",{x1:"16.24",y1:"16.24",x2:"19.07",y2:"19.07"}),Object(H.jsx)("line",{x1:"2",y1:"12",x2:"6",y2:"12"}),Object(H.jsx)("line",{x1:"18",y1:"12",x2:"22",y2:"12"}),Object(H.jsx)("line",{x1:"4.93",y1:"19.07",x2:"7.76",y2:"16.24"}),Object(H.jsx)("line",{x1:"16.24",y1:"7.76",x2:"19.07",y2:"4.93"})]})}var Ee,Be=p.a.main(Pe||(Pe=Object(b.a)(["\n    overflow-y: scroll;\n    min-height: calc(100vh - 4rem);\n    display: flex;\n    flex-flow: column nowrap;\n    align-items: center;\n    ","\n    ","\n    ","\n    padding-bottom: var(--lg-spacing);\n"])),(function(e){return e.padTop&&"padding-top: var(--base-spacing);"}),(function(e){return e.pad&&"padding-left: var(--base-spacing);"}),(function(e){return e.pad&&"padding-right: var(--base-spacing);"}));function Ae(e){var n=e.children,t=e.padTop,r=e.pad;return Object(H.jsx)(Be,{padTop:t,pad:r,children:n})}var qe,Ue=p.a.ul(Ee||(Ee=Object(b.a)(["\n    display: flex;\n    flex-flow: column nowrap;\n    max-width: var(--screen-lg);\n    width: 100%;\n    ","\n"])),(function(e){return e.gap?"gap: var(--base-spacing);":""}));function Re(e){var n=e.gap,t=e.children;return Object(H.jsx)(Ue,{gap:n,children:t})}var He=p.a.label(qe||(qe=Object(b.a)(["\n  display: flex;\n  gap: var(--base-spacing);\n  align-items: center;\n  padding: var(--base-unit);\n  background-color: var(--gray-20);\n  border: 2px solid var(--gray-30);\n  border-radius: var(--radius);\n  right: var(--base-spacing);\n  bottom: var(--base-unit);\n  position: fixed;\n"])));function _e(e){var n=e.inv,t=e.token,a=e.setInv,c=Object(r.useState)(""),o=Object(s.a)(c,2),i=o[0],l=o[1],u=n.filter((function(e){if(!i)return!0;for(var n=0,t=[e.name.en.toLowerCase(),e.prefix,e.size,e.color];n<t.length;n++){if(t[n].includes(i.toLowerCase()))return!0}return!1}));return Object(H.jsxs)(Ae,{children:[Object(H.jsx)(He,{children:Object(H.jsx)("input",{type:"search",value:i,onChange:function(e){return l(e.target.value)}})}),Object(H.jsxs)(Re,{children:[n&&u.map((function(e){return Object(H.jsx)(Ie,{item:e,token:t,setInv:a},e.id)})),!n&&Object(H.jsx)("li",{id:"spinner",className:"spinner",children:Object(H.jsx)(Ne,{})})]})]})}var Ve,Je,Ke,Ze,$e=t(345),Ge=t(177),Qe=t(349),Xe=t(174),Ye=t(175);function en(e){var n=e.orders,t=n?n.map((function(e){return{name:e.name,date:new Date(e.createdOn).toLocaleDateString(),total:e.total}})):[];return Object(H.jsxs)($e.a,{width:500,height:400,data:t,children:[Object(H.jsx)(Ge.a,{type:"monotone",dataKey:"total",stroke:"#888888"}),Object(H.jsx)(Qe.a,{stroke:"#cccccc"}),Object(H.jsx)(Xe.a,{dataKey:"date"}),Object(H.jsx)(Ye.a,{})]})}var nn,tn=p.a.div(Ve||(Ve=Object(b.a)(["\n    display: flex;\n    ","\n    gap: var(--base-spacing);\n    margin-top: var(--base-spacing);\n    width: 100%;\n    align-items: flex-start;\n    max-width: var(--screen-md);\n"])),(function(e){return e.flow?"flex-flow: ".concat(e.flow,";"):"flex-flow: row wrap;"})),rn=p.a.div(Je||(Je=Object(b.a)(["\n    background-color: var(--gray-20);\n    border-radius: var(--radius);\n    flex-basis: 12rem;\n    flex-grow: 1;\n    display: flex;\n    flex-flow: column nowrap;\n    justify-content: flex-start;\n    overflow: hidden;\n    margin-bottom: var(--lg-spacing);\n    padding-bottom: var(--base-spacing);\n\n    h3 {\n        background-color: var(--dgray-80);\n        color: var(--gray-10);\n        width: 100%;\n        padding: var(--base-unit) var(--base-spacing);\n        margin-bottom: var(--base-spacing);\n    }\n"]))),an=p.a.span(Ke||(Ke=Object(b.a)(["\n    height: 100%;\n    font-size: var(--md-font-size);\n    line-height: 1.8;\n    padding: 0 var(--base-spacing);\n"]))),cn=p.a.ul(Ze||(Ze=Object(b.a)(["\n    width: 100%;\n    padding: var(--base-spacing) !important;\n\n    li {\n        display: flex;\n        justify-content: space-between;\n        border-bottom: 1px solid var(--gray-30);\n        padding: var(--base-unit);\n\n        &:hover {\n            background-color: var(--gray-30);\n        }\n    }\n"])));function on(e){var n=e.orders,t=e.inv,r=e.messages,a=t&&Object.values(t).flat()||[];return Object(H.jsxs)(Ae,{pad:!0,children:[Object(H.jsxs)(tn,{flow:"row wrap",children:[Object(H.jsxs)(rn,{children:[Object(H.jsx)("h3",{children:"orders"}),Object(H.jsxs)(an,{children:["pending: ",n&&n.reduce((function(e,n){return n.hasPaid||n.hasShipped?e:e+1}),0)]}),Object(H.jsxs)(an,{children:["paid: ",n&&n.reduce((function(e,n){return n.hasPaid?e+1:e}),0)]}),Object(H.jsxs)(an,{children:["shipped: ",n&&n.reduce((function(e,n){return n.hasPaid&&n.hasShipped?e+1:e}),0)]})]}),Object(H.jsxs)(rn,{children:[Object(H.jsx)("h3",{children:"messages"}),Object(H.jsxs)(an,{children:["total: ",r&&r.length]})]}),Object(H.jsxs)(rn,{children:[Object(H.jsx)("h3",{children:"low stock"}),Object(H.jsx)(cn,{children:a.map((function(e){return e.quantity<5&&Object(H.jsxs)("li",{children:[Object(H.jsx)("span",{children:e.type}),Object(H.jsx)("span",{children:e.quantity})]},e.type)}))})]})]}),Object(H.jsxs)(tn,{flow:"column nowrap",children:[Object(H.jsx)("h2",{children:"Recent Orders"}),Object(H.jsx)(en,{orders:n})]})]})}var sn,ln=p.a.h3(nn||(nn=Object(b.a)(["\n    font-size: 1.125rem;\n    font-weight: 700;\n    display: block;\n    margin-bottom: var(--base-unit);\n    font-style: normal;\n"])));function un(e){var n=e.children;return Object(H.jsx)(ln,{children:n})}var dn,jn,bn,pn,hn,fn=p.a.address(sn||(sn=Object(b.a)(["\n    flex-grow: 1;\n"])));function xn(e){var n=e.order;return Object(H.jsxs)(fn,{children:[Object(H.jsx)(un,{children:n.name}),Object(H.jsx)("a",{href:"mailto:".concat(n.email),children:n.email}),Object(H.jsx)("br",{}),Object(H.jsxs)("a",{href:"tel:+1".concat(n.phone.replaceAll(" ","")),children:["+1 ",n.phone]}),Object(H.jsx)("br",{}),n.address.line1,Object(H.jsx)("br",{}),n.address.line2,Object(H.jsx)("br",{}),n.address.city," ",n.address.state,Object(H.jsx)("br",{}),n.address.postalCode.toUpperCase()," ",n.address.country,Object(H.jsx)("br",{})]})}var gn,On,vn,mn=p.a.p(dn||(dn=Object(b.a)(["\n    margin-top: auto;\n    text-align: right;\n    font-weight: 600;\n"]))),wn=p.a.img(jn||(jn=Object(b.a)(["\n  width: var(--md-spacing);\n  object-fit: contain;\n"]))),yn=p.a.div(bn||(bn=Object(b.a)(["\n    display: flex;\n    flex-flow: column nowrap;\n    justify-content: space-between;\n    width: 14rem;\n    border-right: 2px solid var(--gray-30);\n    padding-right: var(--base-spacing);\n"]))),kn=p.a.li(pn||(pn=Object(b.a)(["\n  display: flex;\n  gap: var(--base-spacing);\n  align-items: center;\n  justify-content: space-between;\n"]))),Sn=p.a.ul(hn||(hn=Object(b.a)(["\n"])));function Cn(e){var n=e.order;return Object(H.jsxs)(yn,{children:[Object(H.jsx)(Sn,{children:n.items.map((function(e){return Object(H.jsxs)(kn,{children:[Object(H.jsx)(wn,{src:"https://zircus.netlify.app".concat(e.image)}),Object(H.jsxs)("span",{children:[e.type," x",e.quantity]})]},e.type)}))}),Object(H.jsxs)(mn,{children:["total $",n.total.toFixed(2)]})]})}function Ln(){return Object(H.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[Object(H.jsx)("polyline",{points:"3 6 5 6 21 6"}),Object(H.jsx)("path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"})]})}function Mn(e){var n=e.onClick;return Object(H.jsx)("button",{type:"button",className:"button danger icon-button outline",onClick:n,children:Object(H.jsx)(Ln,{})})}var Fn,Pn,Tn=p.a.li(gn||(gn=Object(b.a)(["\n    margin: 0 auto;\n    display: flex;\n    gap: var(--base-spacing);\n    padding: var(--base-spacing);\n    width: 100%;\n    border-left: 0.5rem solid;\n    border-right: 0.5rem solid;\n    border-bottom: 1px solid;\n    border-top: 1px solid;\n    border-color: ",";\n\n    &:hover {\n        background-color: var(--gray-20);\n    }\n"])),(function(e){return e.hasPaid&&e.hasShipped?"var(--green)":e.hasPaid?"var(--yellow)":"var(--gray-30)"})),zn=p.a.div(On||(On=Object(b.a)(["\n    display: flex;\n    flex-flow: column nowrap;\n    gap: var(--base-unit);\n"]))),Dn=p.a.div(vn||(vn=Object(b.a)(["\n    width: 100%;\n    display: flex;\n    justify-content: flex-end;\n    align-items: flex-end;\n    flex-grow: 1;\n"])));function Wn(e){var n=e.order,t=e.token,r=e.setShowModal,a=e.setOrders,c=e.notify,o=function(e){var n=e.data;return c("Error: ".concat(null===n||void 0===n?void 0:n.error),"red")&&console.log(n)},i=function(){var e=Object(j.a)(d.a.mark((function e(r){var a,c,o;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z(r,t);case 2:a=e.sent,c=window.URL.createObjectURL(new Blob([a.data])),(o=document.createElement("a")).href=c,o.setAttribute("download","".concat(n.orderId,".pdf")),document.body.appendChild(o),o.click(),o.remove();case 10:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return Object(H.jsxs)(Tn,{hasPaid:n.hasPaid,hasShipped:n.hasShipped,children:[Object(H.jsx)(Cn,{order:n}),Object(H.jsx)(xn,{order:n}),Object(H.jsxs)(zn,{children:[Object(H.jsx)(un,{children:new Date(n.createdOn).toLocaleString("en-US")}),Object(H.jsxs)(Fe,{children:["paid:",Object(H.jsx)("input",{type:"checkbox",checked:n.hasPaid,onChange:function(){r({heading:"Confirm status change",text:"Change ".concat(n.name,"'s order status to ").concat(n.hasPaid?"not paid":"paid","?'"),color:n.hasPaid?"danger":"positive",btnText:"Change",ok:function(e){e&&(a((function(e){return e.map((function(e){return e.id===n.id?Object(l.a)(Object(l.a)({},e),{},{hasPaid:!e.hasPaid}):e}))})),S({id:n.id,updatedAttributes:{hasPaid:!n.hasPaid}},t).catch((function(e){return console.log(e)})))}})}})]}),Object(H.jsxs)(Fe,{children:["shipped:",Object(H.jsx)("input",{type:"checkbox",checked:n.hasShipped,onChange:function(){r({heading:"Confirm status change",text:"Change ".concat(n.name,"'s order status to ").concat(n.hasShipped?"not shipped":"shipped","?'"),color:n.hasShipped?"danger":"positive",btnText:"Change",ok:function(e){e&&(a((function(e){return e.map((function(e){return e.id===n.id?Object(l.a)(Object(l.a)({},e),{},{hasShipped:!e.hasShipped}):e}))})),S({id:n.id,updatedAttributes:{hasShipped:!n.hasShipped}},t).catch((function(e){return console.log(e)})))}})}})]}),Object(H.jsx)(Fe,{children:Object(H.jsx)("button",{type:"button",className:"button",onClick:function(){return i(n.shipping.shipment.label)},children:"get label"})}),Object(H.jsx)(Dn,{children:Object(H.jsx)(Mn,{onClick:function(){r({heading:"Confirm deletion",text:"Delete ".concat(n.name,"'s order?'"),color:"danger",btnText:"Delete",ok:function(e){e&&function(e,n){return L.apply(this,arguments)}(n.id,t).catch(o)}})}})})]})]})}var In,Nn,En=p.a.div(Fn||(Fn=Object(b.a)(["\n    position: fixed;\n    right: calc(var(--base-unit) + 15px);\n    bottom: var(--base-unit);\n    height: 3rem;\n    padding: var(--base-unit) calc(var(--base-unit) * 2);\n    background-color: var(--dgray-90);\n    border-radius: var(--radius);\n    border: 2px solid var(--gray-20);\n    display: flex;\n    align-items: center;\n    gap: var(--base-unit);\n    color: var(--gray-10);\n"]))),Bn=p.a.div(Pn||(Pn=Object(b.a)(["\n    display: flex;\n    gap: var(--base-spacing);\n"])));function An(e){var n=e.filters;return Object(H.jsx)(En,{children:Object(H.jsx)(Bn,{children:n&&n.map((function(e,n){return Object(H.jsxs)(Fe,{htmlFor:"filter-".concat(n),active:e.active,children:[e.text,Object(H.jsx)("input",{checked:e.active,onChange:e.setActive,type:"checkbox",id:"filter-".concat(n)})]},e.text)}))})})}var qn,Un,Rn,Hn,_n,Vn=p.a.label(In||(In=Object(b.a)(["\n  display: flex;\n  gap: var(--base-unit);\n  align-items: center;\n"]))),Jn=p.a.div(Nn||(Nn=Object(b.a)(["\n  display: flex;\n  gap: var(--base-spacing);\n  margin-bottom: var(--base-unit);\n  position: absolute;\n  background-color: var(--gray-10);\n  bottom: 0;\n"])));function Kn(e){var n=e.orders,t=e.token,a=e.setShowModal,c=e.setOrders,o=e.notify,i=W("date",""),u=Object(s.a)(i,2),d=u[0],j=(u[1],W("date","")),b=Object(s.a)(j,2),p=b[0],h=(b[1],Object(r.useState)(!1)),f=Object(s.a)(h,2),x=f[0],g=f[1],O=Object(r.useState)(!0),v=Object(s.a)(O,2),m=v[0],w=v[1],y=[{active:x,text:"shipped",setActive:function(){return g((function(e){return!e}))}},{active:m,text:"paid",setActive:function(){return w((function(e){return!e}))}}],k=n&&n.filter((function(e){return e.hasPaid===m})).filter((function(e){return e.hasShipped===x})).filter((function(e){var n=d.value,t=p.value;if(!n&&!t)return!0;var r=new Date(e.createdOn).getTime();return n?t?r>=new Date(n).getTime()&&r<=new Date(t).getTime():r>=new Date(n).getTime():r<=new Date(t).getTime()}));return Object(H.jsxs)(Ae,{padTop:!0,children:[Object(H.jsxs)(Jn,{children:[Object(H.jsxs)(Vn,{htmlFor:"dateStart",children:[Object(H.jsx)("span",{children:"Date Start"}),Object(H.jsx)("input",Object(l.a)(Object(l.a)({},d),{},{id:"dateStart"}))]}),Object(H.jsxs)(Vn,{htmlFor:"dateEnd",children:[Object(H.jsx)("span",{children:"Date End"}),Object(H.jsx)("input",Object(l.a)(Object(l.a)({},p),{},{id:"dateEnd"}))]})]}),Object(H.jsx)(An,{filters:y}),Object(H.jsx)(Re,{gap:!0,children:n&&k.map((function(e){return Object(H.jsx)(Wn,{notify:o,token:t,order:e,setShowModal:a,setOrders:c},e.id)}))})]})}var Zn,$n,Gn=p.a.li(qn||(qn=Object(b.a)(["\n    margin: 0 auto;\n    display: flex;\n    justify-content: flex-start;\n    align-items: flex-start;\n    gap: var(--md-spacing);\n    padding: var(--base-spacing);\n    width: 100%;\n    border-left: 0.5rem solid;\n    border-right: 0.5rem solid;\n    border-bottom: 1px solid;\n    border-top: 1px solid;\n    border-color: var(--gray-30);\n\n    &:hover {\n        background-color: var(--gray-20);\n    }\n"]))),Qn=p.a.div(Un||(Un=Object(b.a)(["\n    display: flex;\n    max-width: 22vw;\n    width: 100%;\n    flex-flow: column nowrap;\n"]))),Xn=p.a.div(Rn||(Rn=Object(b.a)(["\n    display: flex;\n    flex-flow: column nowrap;\n    justify-content: flex-end;\n    align-items: flex-end;\n    flex-grow: 1;\n"]))),Yn=p.a.p(Hn||(Hn=Object(b.a)(["\n    max-width: 75ch;\n    width: 100%;\n"]))),et=p.a.a(_n||(_n=Object(b.a)(["\n    text-decoration: none;\n    padding: var(--base-unit);\n    color: var(--link);\n\n    &:hover,\n    &:focus {\n        text-decoration: none !important;\n        color: var(--link-hover);\n    }\n"])));function nt(e){var n=e.message,t=e.setShowModal,a=e.setMessages,c=e.token,o=e.notify,i=Object(r.useState)(!1),l=Object(s.a)(i,2),u=l[0],d=l[1],j=function(e){var t=e.data;a((function(e){return e.filter((function(e){return e.id!==n.id}))})),o("".concat(t.response,": Deleted ").concat(n.name,"'s message"),"red")},b=function(e){var n=e.data;return o("".concat(n.error),"red")},p=function(){t({heading:"Confirm deletion",text:"Delete ".concat(n.name,"'s message?'"),color:"danger",btnText:"Delete",ok:function(e){e&&function(e,n){return T.apply(this,arguments)}(n.id,c).then(j).catch(b)}})};return Object(H.jsxs)(Gn,{children:[Object(H.jsxs)(Qn,{children:[Object(H.jsx)(un,{children:n.name}),Object(H.jsx)("a",{href:"mailto:".concat(n.email),children:n.email})]}),Object(H.jsxs)(Yn,{children:[u?n.message:n.message.substring(0,140),n.message.length>140&&Object(H.jsx)(et,{href:"#",onClick:function(){return d((function(e){return!e}))},children:u?"(less)":"... (more)"})]}),Object(H.jsx)(Xn,{children:Object(H.jsx)(Mn,{onClick:function(){return p()}})})]})}function tt(e){var n=e.messages,t=e.setShowModal,r=e.setMessages,a=e.token,c=e.notify;return Object(H.jsx)(Ae,{children:Object(H.jsx)(Re,{gap:!0,children:n&&n.map((function(e){return Object(H.jsx)(nt,{notify:c,token:a,setMessages:r,message:e,setShowModal:t},e.id)}))})})}var rt,at=p.a.div(Zn||(Zn=Object(b.a)(["\n    position: fixed;\n    top: calc(var(--base-unit) + 4rem);\n    right: calc(var(--base-unit) + 15px); // for scrollbar\n    width: 22rem;\n    background-color: ","\n    z-index: 100;\n    border-radius: var(--radius);\n    opacity: 0.95;\n    box-shadow: var(--box-shadow-sm);\n    animation: 0.2s ease-out forwards fadeDown;\n"])),(function(e){return"red"===e.look?"var(--red);":"green"===e.look?"var(--green);":"var(--gray-30);"})),ct=p.a.p($n||($n=Object(b.a)(["\n    color: var(--gray-20);\n    margin: var(--base-spacing);\n    font-size: var(--small-font-size);\n    font-weight: 600;\n"])));function ot(e){var n=e.notification;return Object(H.jsx)(at,{look:n.style,children:Object(H.jsx)(ct,{children:n.text})})}var it,st,lt,ut,dt,jt,bt=p.a.div(rt||(rt=Object(b.a)(["\n    display: flex;\n    flex-flow: column nowrap;\n    padding-top: 4rem;\n    padding-left: ",";\n    height: 100vh;\n    overflow: hidden;\n"])),(function(e){return e.showFull?"14rem":"4rem"}));function pt(e){var n=e.inv,t=e.orders,a=e.token,c=e.setShowModal,o=e.logout,i=e.setOrders,l=e.setInv,u=e.user,d=e.messages,j=e.setMessages,b=e.notify,p=e.notification,h=Object(r.useState)("metrics"),f=Object(s.a)(h,2),x=f[0],g=f[1],O=Object(r.useState)(!0),v=Object(s.a)(O,2),m=v[0],w=v[1],y=t?t.length:0,k=d?d.length:0,S=n?function(e,n){return e.reduce((function(e,t){return e+n(t)}),0)}(n,(function(e){return e.quantity})):0;return Object(H.jsxs)(bt,{showFull:m,children:[Object(H.jsx)(ae,{text:"Zircus Admin Dashboard",logout:o,user:u}),Object(H.jsx)(me,{page:x,setPage:g,orders:y,inv:S,showFull:m,setShowFull:w,messages:k}),p&&Object(H.jsx)(ot,{notification:p}),"inventory"===x&&Object(H.jsx)(_e,{inv:n,token:a,setShowModal:c,setInv:l}),"orders"===x&&Object(H.jsx)(Kn,{orders:t,token:a,setShowModal:c,setOrders:i,notify:b}),"metrics"===x&&Object(H.jsx)(on,{orders:t,setShowModal:c,inv:n,messages:d}),"messages"===x&&Object(H.jsx)(tt,{messages:d,setMessages:j,setShowModal:c,token:a,notify:b})]})}var ht=p.a.div(it||(it=Object(b.a)(["\n    ",";\n"])),(function(e){return e.showModal&&"filter: blur(0.25rem)"})),ft=p.a.div(st||(st=Object(b.a)(["\n    width: 100vw;\n    height: 100vh;\n    top: 0;\n    left: 0;\n    position: fixed;\n"]))),xt=p.a.section(lt||(lt=Object(b.a)(["\n    position: fixed;\n    display: flex;\n    flex-flow: column nowrap;\n    gap: 1rem;\n    backgroud-color: var(--gray-90);\n    top: calc(25%);\n    left: calc(50% - 15rem);\n    width: 30rem;\n    min-height: 15rem;\n    background-color: var(--gray-10);\n    border-radius: var(--big-radius);\n    border: 2px solid var(--dgray-90);\n    padding: var(--base-spacing);\n"]))),gt=p.a.p(ut||(ut=Object(b.a)(["\n    flex-grow: 1;\n"]))),Ot=p.a.div(dt||(dt=Object(b.a)(["\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    width: 100%;\n    gap: 1rem;\n"]))),vt=p.a.button(jt||(jt=Object(b.a)(["\n    flex-grow: 1;\n"])));function mt(e){var n=e.children,t=e.showModal,a=e.setShowModal,c=Object(r.useRef)();return Object(r.useEffect)((function(){t&&c.current.focus()})),Object(H.jsxs)("div",{children:[Object(H.jsxs)(ht,{showModal:t,children:[n,t&&Object(H.jsx)(ft,{})]}),t&&Object(H.jsxs)(xt,{children:[Object(H.jsx)("h2",{children:t.heading}),Object(H.jsx)(gt,{children:t.text}),Object(H.jsxs)(Ot,{children:[Object(H.jsx)(vt,{className:"".concat(t.color," button"),type:"button",onClick:function(){t.ok(!0),a(null)},children:t.btnText||"Ok"}),Object(H.jsx)(vt,{className:"button outline",type:"button",onClick:function(){t.ok(!1),a(null)},ref:c,children:"Cancel"})]})]})]})}var wt=function(){var e=Object(r.useState)(null),n=Object(s.a)(e,2),t=n[0],a=n[1],c=Object(r.useState)(null),o=Object(s.a)(c,2),l=o[0],u=o[1],d=Object(r.useState)([]),j=Object(s.a)(d,2),b=j[0],p=j[1],h=Object(r.useState)(null),f=Object(s.a)(h,2),x=f[0],g=f[1],O=Object(r.useState)(null),v=Object(s.a)(O,2),w=v[0],k=v[1],S=Object(r.useState)(null),C=Object(s.a)(S,2),L=C[0],M=C[1],P=Object(r.useState)(null),T=Object(s.a)(P,2),z=T[0],D=T[1],W=Object(r.useState)(-1),I=Object(s.a)(W,2),N=I[0],E=I[1],B=Object(r.useContext)(V),A=B.addListener,q=B.removeListener,U=function(e){var n=e.text,t=e.color;J(n,t),m().then((function(e){return p([].concat(Object(i.a)(e.data.ff),Object(i.a)(e.data.pf),Object(i.a)(e.data.cf)))})).catch((function(){return p([])})),y(l).then((function(e){return k(e.data)})).catch((function(){return k(null)}))},R=function(){var e=A((function(e){if(l)switch(e.type){case"message":return function(e){var n=e.text,t=e.color;J(n,t),F(l).then((function(e){return g(e.data.messages)})).catch((function(){return g(null)}))}({text:"New message from ".concat(e.data.name),color:"green"});case"pending order":return U({text:"Pending order from ".concat(e.data.name),color:"gray"});case"paid order":return U({text:"Paid order from ".concat(e.data.name),color:"green"});case"deleted order":return U({text:"".concat(e.data.response,": Inventory updated"),color:"red"})}}));E(e)},_=function(){q(N),E(-1)},J=function(e,n){z&&z.self&&clearTimeout(z.self);var t=setTimeout((function(){return D(null)}),4500);D({text:e,style:n,self:t})};return Object(r.useEffect)((function(){return m().then((function(e){return p([].concat(Object(i.a)(e.data.ff),Object(i.a)(e.data.pf),Object(i.a)(e.data.cf)))})).catch((function(){return p([])})),null!==l&&(y(l).then((function(e){return k(e.data)})).catch((function(){return k(null)})),F(l).then((function(e){return g(e.data.messages)})).catch((function(){return g(null)}))),R(),_}),[p,l]),Object(H.jsx)(mt,{showModal:L,setShowModal:M,children:l?Object(H.jsx)(pt,{notification:z,notify:J,inv:b,orders:w,token:l,logout:function(){a(null),u(null),localStorage.removeItem("user"),localStorage.removeItem("token")},setShowModal:M,setOrders:k,setInv:p,user:t,messages:x,setMessages:g}):Object(H.jsx)(X,{setUser:a,setToken:u})})};t(342);o.a.render(Object(H.jsx)(a.a.StrictMode,{children:Object(H.jsx)(J,{children:Object(H.jsx)(wt,{})})}),document.getElementById("root"))}},[[343,1,2]]]);
//# sourceMappingURL=main.db88328e.chunk.js.map