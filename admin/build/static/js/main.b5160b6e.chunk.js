(this.webpackJsonpadmin=this.webpackJsonpadmin||[]).push([[0],{342:function(e,n,t){},343:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),c=t(84),o=t.n(c),i=t(49),s=t(11),l=t(19),u=t(18),d=t.n(u),j=t(27),b=t(3),p=t(4),h=t(35),f=t.n(h),x=function(e){return{headers:{Authorization:"Bearer ".concat(e)}}},g="http://localhost:3000/api";function O(e,n){return v.apply(this,arguments)}function v(){return(v=Object(j.a)(d.a.mark((function e(n,t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.post("".concat(g,"/login"),{username:n,password:t});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(){return w.apply(this,arguments)}function w(){return(w=Object(j.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("".concat(g,"/inv"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function y(e){return k.apply(this,arguments)}function k(){return(k=Object(j.a)(d.a.mark((function e(n){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("".concat(g,"/orders"),x(n));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function S(e,n){return C.apply(this,arguments)}function C(){return(C=Object(j.a)(d.a.mark((function e(n,t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.put("".concat(g,"/orders/").concat(n.id),n,x(t));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function L(){return(L=Object(j.a)(d.a.mark((function e(n,t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.delete("".concat(g,"/orders/").concat(n),x(t));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function M(){return(M=Object(j.a)(d.a.mark((function e(n,t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.put("".concat(g,"/inv"),n,x(t));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function F(e){return P.apply(this,arguments)}function P(){return(P=Object(j.a)(d.a.mark((function e(n){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("".concat(g,"/message"),x(n));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function z(){return(z=Object(j.a)(d.a.mark((function e(n,t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.delete("".concat(g,"/message/").concat(n),x(t));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function W(e,n){return I.apply(this,arguments)}function I(){return(I=Object(j.a)(d.a.mark((function e(n,t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.post("".concat(g,"/orders/label"),{url:n},Object(l.a)({responseType:"blob"},x(t)));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function N(e,n,t){var a=Object(r.useState)(n),c=Object(s.a)(a,2),o=c[0],i=c[1];return[{type:e,value:o,onChange:function(e){return i(e.target.value)},placeholder:t},function(){return i(n)}]}var D,E,T,B,A,q,U,R,H=t(1),_=[],V=a.a.createContext(),J=function(e){var n=e.children,t=Object(r.useRef)(null),a=250,c=function(){t.current=new WebSocket("ws://localhost:3000"),t.current.onopen=function(){console.debug("Websocket connection open"),a=250},t.current.onmessage=function(e){var n=JSON.parse(e.data);i(n)},t.current.onclose=function(e){switch(e.code){case 1e3:console.debug("Websocket closed normally");break;default:o(a+=a)}},t.current.onerror=function(e){switch(e.code){case"ECONNREFUSED":a=a+=a,o(a);break;default:console.error("Websocket encountered error: ".concat(e))}}},o=function(e){setTimeout(c,Math.min(1e4,e))},i=function(e){console.debug("[Websocket-IncomingMessage] ",e),_.forEach((function(n){return n.messageHandler(e)}))};return Object(H.jsx)(V.Provider,{value:{initializeWebSocket:c,disconnectWebSocket:function(){t.current&&t.current.close(1e3)},addListener:function(e){var n=_.length;return _.push({id:n,messageHandler:e}),n},removeListener:function(e){return _=_.filter((function(n){return n.id!==e}))}},children:n})},K=(V.Consumer,p.a.main(D||(D=Object(b.a)(["\n    width: 100%;\n    display: flex;\n    flex-flow: column nowrap;\n    align-items: center;\n"])))),Z=p.a.form(E||(E=Object(b.a)(["\n    margin-top: var(--lg-spacing);\n    padding: var(--md-spacing);\n    background-color: var(--gray-20);\n    border-radius: var(--big-radius);\n    display: flex;\n    flex-flow: column nowrap;\n    gap: 0.5rem;\n"]))),$=p.a.label(T||(T=Object(b.a)(["\n    display: flex;\n    flex-flow: column nowrap;\n"]))),G=p.a.p(B||(B=Object(b.a)(["\n    color: ",";\n    margin: var(--base-spacing) 0;\n    font-weight: 500;\n"])),(function(e){return e.failedLogin?"var(--red)":"var(--text-color)"})),Q=p.a.button(A||(A=Object(b.a)(["\n    margin-top: 0.5rem;\n"])));function X(e){var n=e.setToken,t=e.setUser,a=Object(r.useState)(!1),c=Object(s.a)(a,2),o=c[0],i=c[1],u=N("text",""),b=Object(s.a)(u,1)[0],p=N("password",""),h=Object(s.a)(p,1)[0],f=Object(r.useContext)(V).initializeWebSocket,x=function(){i(!0),setTimeout((function(){i(!1)}),2e3)},g=function(e){var r=e.data;t(r.name),n(r.token),localStorage.setItem("user",r.name),localStorage.setItem("token",r.token),f()},v=function(){var e=Object(j.a)(d.a.mark((function e(n){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.preventDefault(),O(b.value,h.value).then(g).catch(x);case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){var e=localStorage.getItem("token"),r=localStorage.getItem("user");e&&n(e),r&&t(r),e&&r&&f()}),[n,t,f]),Object(H.jsx)(K,{children:Object(H.jsxs)(Z,{onSubmit:v,children:[Object(H.jsx)("h1",{children:"Zircus Admin"}),Object(H.jsx)(G,{failedLogin:o,children:o?"Login failed":"Please Log in:"}),Object(H.jsxs)($,{htmlFor:"username",children:[Object(H.jsx)("span",{children:"Username"}),Object(H.jsx)("input",Object(l.a)(Object(l.a)({},b),{},{disabled:!!o}))]}),Object(H.jsxs)($,{htmlFor:"password",children:[Object(H.jsx)("span",{children:"Password"}),Object(H.jsx)("input",Object(l.a)(Object(l.a)({},h),{},{disabled:!!o}))]}),Object(H.jsx)(Q,{className:"button",type:"submit",disabled:!!o,children:o?"Please wait":"Log in"})]})})}function Y(){return Object(H.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[Object(H.jsx)("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),Object(H.jsx)("circle",{cx:"12",cy:"7",r:"4"})]})}var ee,ne=p.a.header(q||(q=Object(b.a)(["\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 4rem;\n    background: var(--dgray-80);\n    padding: var(--base-spacing);\n"]))),te=p.a.h3(U||(U=Object(b.a)(["\n    color: var(--invert-text-color);\n    font-size: 1.25rem;\n    flex-grow: 1;\n"]))),re=p.a.span(R||(R=Object(b.a)(["\n    display: flex;\n    align-items: center;\n    gap: var(--base-unit);\n    color: var(--gray-10);\n    margin-right: var(--base-spacing);\n\n    svg {\n        height: 1rem;\n    }\n"])));function ae(e){var n=e.text,t=e.logout,r=e.user;return Object(H.jsxs)(ne,{children:[Object(H.jsx)(te,{children:n}),Object(H.jsxs)(re,{children:[Object(H.jsx)(Y,{})," ",r.split(" ")[0]]}),Object(H.jsx)("button",{className:"button light outline",type:"button",onClick:t,children:"logout"})]})}function ce(){return Object(H.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[Object(H.jsx)("polyline",{points:"13 17 18 12 13 7"}),Object(H.jsx)("polyline",{points:"6 17 11 12 6 7"})]})}function oe(){return Object(H.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[Object(H.jsx)("polyline",{points:"11 17 6 12 11 7"}),Object(H.jsx)("polyline",{points:"18 17 13 12 18 7"})]})}function ie(){return Object(H.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[Object(H.jsx)("line",{x1:"8",y1:"6",x2:"21",y2:"6"}),Object(H.jsx)("line",{x1:"8",y1:"12",x2:"21",y2:"12"}),Object(H.jsx)("line",{x1:"8",y1:"18",x2:"21",y2:"18"}),Object(H.jsx)("line",{x1:"3",y1:"6",x2:"3.01",y2:"6"}),Object(H.jsx)("line",{x1:"3",y1:"12",x2:"3.01",y2:"12"}),Object(H.jsx)("line",{x1:"3",y1:"18",x2:"3.01",y2:"18"})]})}function se(){return Object(H.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[Object(H.jsx)("path",{d:"M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"}),Object(H.jsx)("line",{x1:"3",y1:"6",x2:"21",y2:"6"}),Object(H.jsx)("path",{d:"M16 10a4 4 0 0 1-8 0"})]})}function le(){return Object(H.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[Object(H.jsx)("polyline",{points:"23 6 13.5 15.5 8.5 10.5 1 18"}),Object(H.jsx)("polyline",{points:"17 6 23 6 23 12"})]})}function ue(){return Object(H.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:Object(H.jsx)("path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"})})}var de,je,be,pe,he=p.a.button(ee||(ee=Object(b.a)(["\n    flex-grow: 1;\n    display: flex;\n    align-items: center;\n    ","\n    justify-content: ",";\n    ","\n\n    svg {\n        height: 1.25rem;\n    }\n"])),(function(e){return e.showFull&&"gap: calc(var(--base-unit) * 1.5);"}),(function(e){return e.showFull?"left":"center"}),(function(e){return!e.showFull&&"padding: var(--input-padding);"}));function fe(e){var n=e.showFull,t=e.active,r=e.page,a=e.num,c=e.setPage,o=e.children;return Object(H.jsxs)(he,{showFull:n,className:r===t?"button":"button outline",onClick:function(){return c(t)},children:[o,n&&"".concat(t," ").concat(a?"(".concat(a,")"):"")]})}var xe=p.a.nav(de||(de=Object(b.a)(["\n    position: fixed;\n    top: 4rem;\n    left: 0;\n    bottom: 0;\n    width: ",";\n    border-right: 2px solid var(--gray-20);\n"])),(function(e){return e.showFull?"12rem":"4rem"})),ge=p.a.ul(je||(je=Object(b.a)(["\n    list-style: none;\n    display: flex;\n    gap: var(--base-unit);\n    flex-flow: column nowrap;\n    padding: var(--base-unit) var(--base-unit) 0 var(--base-unit) !important;\n"]))),Oe=p.a.li(be||(be=Object(b.a)(["\n    width: 100%;\n    display: flex;\n"]))),ve=p.a.button(pe||(pe=Object(b.a)(["\n    width: 100%;\n    padding: var(--base-unit);\n    display: flex;\n    justify-content: ",";\n    align-items: center;\n    background: transparent;\n    border: none;\n    outline: none;\n\n    &:hover,\n    &:focus {\n        background-color: var(--gray-20);\n        cursor: pointer;\n    }\n\n    svg {\n        height: 1.5rem;\n    }\n"])),(function(e){return e.showFull?"flex-end":"center"}));function me(e){var n=e.setPage,t=e.page,r=e.inv,a=e.orders,c=e.showFull,o=e.setShowFull,i=e.messages;return Object(H.jsxs)(xe,{showFull:c,children:[Object(H.jsx)(ve,{showFull:c,type:"button",onClick:function(){return o(!c)},children:c?Object(H.jsx)(oe,{}):Object(H.jsx)(ce,{})}),Object(H.jsxs)(ge,{children:[Object(H.jsx)(Oe,{children:Object(H.jsx)(fe,{showFull:c,page:t,active:"metrics",setPage:n,children:Object(H.jsx)(le,{})})}),Object(H.jsx)(Oe,{children:Object(H.jsx)(fe,{showFull:c,page:t,active:"orders",num:a,setPage:n,children:Object(H.jsx)(se,{})})}),Object(H.jsx)(Oe,{children:Object(H.jsx)(fe,{active:"inventory",page:t,showFull:c,num:r,setPage:n,children:Object(H.jsx)(ie,{})})}),Object(H.jsx)(Oe,{children:Object(H.jsx)(fe,{active:"messages",page:t,showFull:c,num:i,setPage:n,children:Object(H.jsx)(ue,{})})})]})]})}var we,ye,ke,Se,Ce,Le=t(65),Me=p.a.label(we||(we=Object(b.a)(["\n    display: flex;\n    align-items: center;\n    gap: var(--base-unit);\n    user-select: none;\n    margin: 0;\n"])));function Fe(e){var n=e.props,t=e.children;return Object(H.jsx)(Me,Object(l.a)(Object(l.a)({},n),{},{children:t}))}function Pe(){return Object(H.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[Object(H.jsx)("polyline",{points:"3 6 5 6 21 6"}),Object(H.jsx)("path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"})]})}function ze(e){var n=e.onClick;return Object(H.jsx)("button",{type:"button",className:"button danger icon-button outline",onClick:n,children:Object(H.jsx)(Pe,{})})}var We,Ie=p.a.li(ye||(ye=Object(b.a)(["\n    display: flex;\n    width: 100%;\n    align-items: center;\n    gap: 2rem;\n    @media screen and (min-width: 1281px) {\n        gap: 3rem;\n    }\n    border-top: 2px solid var(--gray-20);\n    border-left: 2px solid var(--gray-20);\n    border-right: 2px solid var(--gray-20);\n    padding: 1rem;\n\n    &:hover {\n        background-color: var(--gray-20);\n    }\n"]))),Ne=p.a.img(ke||(ke=Object(b.a)(["\n    max-height: 2rem;\n"]))),De=p.a.p(Se||(Se=Object(b.a)(["\n    font-size: 1rem;\n"]))),Ee=p.a.p(Ce||(Ce=Object(b.a)(["\n    font-weight: 500;\n    ","\n"])),(function(e){return e.grow&&"flex-grow: 1;"}));function Te(e){var n=e.item,t=e.token,r=e.setInv,a=function(e,a){return function(c){r((function(t){return t.map((function(t){return t.id===n.id?Object(l.a)(Object(l.a)({},t),{},Object(Le.a)({},e,a(c.target))):t}))})),console.log("setting"),function(e,n){return M.apply(this,arguments)}(Object(l.a)(Object(l.a)({},n),{},Object(Le.a)({},e,a(c.target))),t).catch((function(e){return console.log(e)}))}},c=a("quantity",(function(e){return Number(e.value)})),o=a("active",(function(e){return e.checked})),i=a("price",(function(e){return Number(e.value)}));return Object(H.jsxs)(Ie,{children:[Object(H.jsx)(Ne,{src:"https://zircus.netlify.app/".concat(n.images.sm_a),alt:n.name,className:"inventory__item__img"}),Object(H.jsx)(De,{children:n.name.en}),Object(H.jsx)(Ee,{children:n.size}),Object(H.jsx)(Ee,{grow:!0,children:n.color}),Object(H.jsxs)(Fe,{htmlFor:"".concat(n.id,"-price"),children:[Object(H.jsx)(Ee,{children:"price"}),Object(H.jsx)("input",{min:"0",step:"1",size:"5",type:"number",id:"".concat(n.id,"-price"),value:n.price,onChange:i})]}),Object(H.jsxs)(Fe,{htmlFor:"".concat(n.id,"-quantity"),children:[Object(H.jsx)(Ee,{children:"quantity"}),Object(H.jsx)("input",{min:"0",step:"1",size:"5",type:"number",id:"".concat(n.id,"-quantity"),value:n.quantity,onChange:c})]}),Object(H.jsxs)(Fe,{htmlFor:"active",children:[Object(H.jsx)(Ee,{children:"active"}),Object(H.jsx)("input",{type:"checkbox",checked:n.active,onChange:o})]})]})}function Be(){return Object(H.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"icon",children:[Object(H.jsx)("line",{x1:"12",y1:"2",x2:"12",y2:"6"}),Object(H.jsx)("line",{x1:"12",y1:"18",x2:"12",y2:"22"}),Object(H.jsx)("line",{x1:"4.93",y1:"4.93",x2:"7.76",y2:"7.76"}),Object(H.jsx)("line",{x1:"16.24",y1:"16.24",x2:"19.07",y2:"19.07"}),Object(H.jsx)("line",{x1:"2",y1:"12",x2:"6",y2:"12"}),Object(H.jsx)("line",{x1:"18",y1:"12",x2:"22",y2:"12"}),Object(H.jsx)("line",{x1:"4.93",y1:"19.07",x2:"7.76",y2:"16.24"}),Object(H.jsx)("line",{x1:"16.24",y1:"7.76",x2:"19.07",y2:"4.93"})]})}var Ae,qe=p.a.main(We||(We=Object(b.a)(["\n    overflow-y: scroll;\n    min-height: calc(100vh - 4rem);\n    display: flex;\n    flex-flow: column nowrap;\n    align-items: center;\n    ","\n    ","\n    ","\n    padding-bottom: var(--lg-spacing);\n"])),(function(e){return e.padTop&&"padding-top: var(--base-spacing);"}),(function(e){return e.pad&&"padding-left: var(--base-spacing);"}),(function(e){return e.pad&&"padding-right: var(--base-spacing);"}));function Ue(e){var n=e.children,t=e.padTop,r=e.pad;return Object(H.jsx)(qe,{padTop:t,pad:r,children:n})}var Re,He=p.a.ul(Ae||(Ae=Object(b.a)(["\n    display: flex;\n    flex-flow: column nowrap;\n    max-width: var(--screen-lg);\n    width: 100%;\n    ","\n"])),(function(e){return e.gap?"gap: var(--base-spacing);":""}));function _e(e){var n=e.gap,t=e.children;return Object(H.jsx)(He,{gap:n,children:t})}var Ve=p.a.label(Re||(Re=Object(b.a)(["\n  display: flex;\n  gap: var(--base-spacing);\n  align-items: center;\n  padding: var(--base-unit);\n  background-color: var(--gray-20);\n  border: 2px solid var(--gray-30);\n  border-radius: var(--radius);\n  right: var(--base-spacing);\n  bottom: var(--base-unit);\n  position: fixed;\n"])));function Je(e){var n=e.inv,t=e.token,a=e.setInv,c=Object(r.useState)(""),o=Object(s.a)(c,2),i=o[0],l=o[1],u=Object(r.useState)(n),d=Object(s.a)(u,2),j=d[0],b=d[1],p=function(e){b(n.filter((function(n){for(var t=0,r=[n.name.en.toLowerCase(),n.prefix,n.size,n.color];t<r.length;t++){if(r[t].includes(e))return!0}return!1})))};return Object(r.useEffect)((function(){i.length?p(i.toLowerCase()):b(n)}),[i]),Object(H.jsxs)(Ue,{children:[Object(H.jsx)(Ve,{children:Object(H.jsx)("input",{type:"search",value:i,onChange:function(e){l(e.target.value),""===e.target.value?b(n):p(e.target.value.toLowerCase())}})}),Object(H.jsxs)(_e,{children:[j&&j.map((function(e){return Object(H.jsx)(Te,{item:e,token:t,setInv:a},e.id)})),!n&&Object(H.jsx)("li",{id:"spinner",className:"spinner",children:Object(H.jsx)(Be,{})})]})]})}var Ke,Ze,$e,Ge,Qe=t(345),Xe=t(177),Ye=t(349),en=t(174),nn=t(175);function tn(e){var n=e.orders,t=n?n.map((function(e){return{name:e.name,date:new Date(e.createdOn).toLocaleDateString(),total:e.total}})):[];return Object(H.jsxs)(Qe.a,{width:500,height:400,data:t,children:[Object(H.jsx)(Xe.a,{type:"monotone",dataKey:"total",stroke:"#888888"}),Object(H.jsx)(Ye.a,{stroke:"#cccccc"}),Object(H.jsx)(en.a,{dataKey:"date"}),Object(H.jsx)(nn.a,{})]})}var rn=p.a.div(Ke||(Ke=Object(b.a)(["\n    display: flex;\n    ","\n    gap: var(--base-spacing);\n    margin-top: var(--base-spacing);\n    width: 100%;\n    max-width: var(--screen-md);\n"])),(function(e){return e.flow?"flex-flow: ".concat(e.flow,";"):"flex-flow: row wrap;"})),an=p.a.div(Ze||(Ze=Object(b.a)(["\n    background-color: var(--gray-20);\n    border-radius: var(--radius);\n    flex-basis: 12rem;\n    flex-grow: 1;\n    display: flex;\n    flex-flow: column nowrap;\n    align-items: center;\n    justify-content: flex-start;\n    overflow: hidden;\n    margin-bottom: var(--lg-spacing);\n\n    h3 {\n        background-color: var(--dgray-80);\n        color: var(--gray-10);\n        width: 100%;\n        text-align: center;\n        padding: var(--base-unit) var(--base-spacing);\n    }\n"]))),cn=p.a.span($e||($e=Object(b.a)(["\n    display: flex;\n    height: 100%;\n    align-items: center;\n    justify-content: center;\n    font-size: var(--xxl-font-size);\n"]))),on=p.a.ul(Ge||(Ge=Object(b.a)(["\n    width: 100%;\n    padding: var(--base-spacing) !important;\n\n    li {\n        display: flex;\n        justify-content: space-between;\n        border-bottom: 1px solid var(--gray-30);\n        padding: var(--base-unit);\n\n        &:hover {\n            background-color: var(--gray-30);\n        }\n    }\n"])));function sn(e){var n=e.orders,t=e.inv,r=e.messages,a=t&&Object.values(t).flat()||[];return Object(H.jsxs)(Ue,{pad:!0,children:[Object(H.jsxs)(rn,{flow:"row wrap",children:[Object(H.jsxs)(an,{children:[Object(H.jsx)("h3",{children:"orders"}),Object(H.jsx)(cn,{children:n&&n.length})]}),Object(H.jsxs)(an,{children:[Object(H.jsx)("h3",{children:"messages"}),Object(H.jsx)(cn,{children:r&&r.length})]}),Object(H.jsxs)(an,{children:[Object(H.jsx)("h3",{children:"low stock"}),Object(H.jsx)(on,{children:a.map((function(e){return e.quantity<5&&Object(H.jsxs)("li",{children:[Object(H.jsx)("span",{children:e.type}),Object(H.jsx)("span",{children:e.quantity})]},e.type)}))})]})]}),Object(H.jsxs)(rn,{flow:"column nowrap",children:[Object(H.jsx)("h2",{children:"Recent Orders"}),Object(H.jsx)(tn,{orders:n})]})]})}var ln,un,dn=t(22),jn=p.a.h3(ln||(ln=Object(b.a)(["\n    font-size: 1.125rem;\n    font-weight: 700;\n    display: block;\n    margin-bottom: var(--base-unit);\n    font-style: normal;\n"])));function bn(e){var n=e.children;return Object(H.jsx)(jn,{children:n})}var pn,hn,fn=p.a.address(un||(un=Object(b.a)(["\n    flex-grow: 1;\n"])));function xn(e){var n=e.order;return Object(H.jsxs)(fn,{children:[Object(H.jsx)(bn,{children:n.name}),Object(H.jsx)("a",{href:"mailto:".concat(n.email),children:n.email}),Object(H.jsx)("br",{}),Object(H.jsxs)("a",{href:"tel:+1".concat(n.phone.replaceAll(" ","")),children:["+1 ",n.phone]}),Object(H.jsx)("br",{}),n.address.line1,Object(H.jsx)("br",{}),n.address.line2,Object(H.jsx)("br",{}),n.address.city," ",n.address.state,Object(H.jsx)("br",{}),n.address.postalCode.toUpperCase()," ",n.address.country,Object(H.jsx)("br",{})]})}var gn,On,vn,mn=p.a.p(pn||(pn=Object(b.a)(["\n    margin-top: auto;\n    text-align: right;\n    font-weight: 600;\n"]))),wn=p.a.div(hn||(hn=Object(b.a)(["\n    display: flex;\n    flex-flow: column nowrap;\n    justify-content: space-between;\n    width: 14rem;\n    border-right: 2px solid var(--gray-30);\n    padding-right: var(--base-spacing);\n"])));function yn(e){var n=e.order;return Object(H.jsxs)(wn,{children:[Object(H.jsx)("ul",{children:n.items.map((function(e){return Object(H.jsxs)("li",{children:[e.type," x ",e.quantity]},e.type)}))}),Object(H.jsxs)(mn,{children:["total $",n.total.toFixed(2)]})]})}var kn,Sn,Cn=p.a.li(gn||(gn=Object(b.a)(["\n    margin: 0 auto;\n    display: flex;\n    gap: var(--base-spacing);\n    padding: var(--base-spacing);\n    width: 100%;\n    border-left: 0.5rem solid;\n    border-right: 0.5rem solid;\n    border-bottom: 1px solid;\n    border-top: 1px solid;\n    border-color: ",";\n\n    &:hover {\n        background-color: var(--gray-20);\n    }\n"])),(function(e){return e.hasPaid&&e.hasShipped?"var(--green)":e.hasPaid?"var(--yellow)":"var(--gray-30)"})),Ln=p.a.div(On||(On=Object(b.a)(["\n    display: flex;\n    flex-flow: column nowrap;\n    gap: var(--base-unit);\n"]))),Mn=p.a.div(vn||(vn=Object(b.a)(["\n    width: 100%;\n    display: flex;\n    justify-content: flex-end;\n    align-items: flex-end;\n    flex-grow: 1;\n"])));function Fn(e){var n=e.order,t=e.token,r=e.setShowModal,a=e.setOrders,c=e.notify,o=function(e){var n=e.data;return c("Error: ".concat(null===n||void 0===n?void 0:n.error),"red")&&console.log(n)},i=function(){var e=Object(j.a)(d.a.mark((function e(r){var a,c,o;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W(r,t);case 2:a=e.sent,c=window.URL.createObjectURL(new Blob([a.data])),(o=document.createElement("a")).href=c,o.setAttribute("download","".concat(n.orderId,".pdf")),document.body.appendChild(o),o.click(),o.remove();case 10:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return Object(H.jsxs)(Cn,{hasPaid:n.hasPaid,hasShipped:n.hasShipped,children:[Object(H.jsx)(yn,{order:n}),Object(H.jsx)(xn,{order:n}),Object(H.jsxs)(Ln,{children:[Object(H.jsx)(bn,{children:new Date(n.createdOn).toLocaleString("en-US")}),Object(H.jsxs)(Fe,{children:["paid:",Object(H.jsx)("input",{type:"checkbox",checked:n.hasPaid,onChange:function(){a((function(e){return e.map((function(e){return e.id===n.id?Object(l.a)(Object(l.a)({},e),{},{hasPaid:!e.hasPaid}):e}))})),S({id:n.id,updatedAttributes:{hasPaid:!n.hasPaid}},t).catch((function(e){return console.log(e)}))}})]}),Object(H.jsxs)(Fe,{children:["shipped:",Object(H.jsx)("input",{type:"checkbox",checked:n.hasShipped,onChange:function(){a((function(e){return e.map((function(e){return e.id===n.id?Object(l.a)(Object(l.a)({},e),{},{hasShipped:!e.hasShipped}):e}))})),S({id:n.id,updatedAttributes:{hasShipped:!n.hasShipped}},t).catch((function(e){return console.log(e)}))}})]}),Object(H.jsx)(Fe,{children:Object(H.jsx)("button",{type:"button",className:"button",onClick:function(){return i(n.shipping.shipment.label)},children:"get label"})}),Object(H.jsx)(Mn,{children:Object(H.jsx)(ze,{onClick:function(){r({heading:"Confirm deletion",text:"Delete ".concat(n.name,"'s order?'"),color:"danger",btnText:"Delete",ok:function(e){e&&function(e,n){return L.apply(this,arguments)}(n.id,t).catch(o)}})}})})]})]})}var Pn,zn,Wn=p.a.div(kn||(kn=Object(b.a)(["\n    position: fixed;\n    right: calc(var(--base-unit) + 15px);\n    bottom: var(--base-unit);\n    height: 3rem;\n    padding: var(--base-unit) calc(var(--base-unit) * 2);\n    background-color: var(--dgray-90);\n    border-radius: var(--radius);\n    border: 2px solid var(--gray-20);\n    display: flex;\n    align-items: center;\n    gap: var(--base-unit);\n    color: var(--gray-10);\n"]))),In=p.a.div(Sn||(Sn=Object(b.a)(["\n    display: flex;\n    gap: var(--base-spacing);\n"])));function Nn(e){var n=e.filters;return Object(H.jsx)(Wn,{children:Object(H.jsx)(In,{children:n&&n.map((function(e,n){return Object(H.jsxs)(Fe,{htmlFor:"filter-".concat(n),active:e.active,children:[e.text,Object(H.jsx)("input",{checked:e.active,onChange:e.setActive,type:"checkbox",id:"filter-".concat(n)})]},e.text)}))})})}var Dn,En,Tn,Bn,An,qn=p.a.label(Pn||(Pn=Object(b.a)(["\n  display: flex;\n  gap: var(--base-unit);\n  align-items: center;\n"]))),Un=p.a.div(zn||(zn=Object(b.a)(["\n  display: flex;\n  gap: var(--base-spacing);\n  margin-bottom: var(--base-spacing);\n"])));function Rn(e){var n=e.orders,t=e.token,a=e.setShowModal,c=e.setOrders,o=e.notify,i=N("date",""),u=Object(s.a)(i,2),d=u[0],j=(u[1],N("date","")),b=Object(s.a)(j,2),p=b[0],h=(b[1],Object(r.useState)(["hasPaid"])),f=Object(s.a)(h,2),x=f[0],g=f[1],O=[{active:x.includes("hasShipped"),text:"shipped",setActive:function(){return x.includes("hasShipped")?g((function(e){return e.filter((function(e){return"hasShipped"!==e}))})):g((function(e){return e.concat("hasShipped")}))}},{active:x.includes("hasPaid"),text:"paid",setActive:function(){return x.includes("hasPaid")?g((function(e){return e.filter((function(e){return"hasPaid"!==e}))})):g((function(e){return e.concat("hasPaid")}))}}],v=n&&n.filter((function(e){if(!x.length)return!0;var n,t=Object(dn.a)(x);try{for(t.s();!(n=t.n()).done;){if(!e[n.value])return!1}}catch(r){t.e(r)}finally{t.f()}return!0}));return Object(H.jsxs)(Ue,{padTop:!0,children:[Object(H.jsxs)(Un,{children:[Object(H.jsxs)(qn,{htmlFor:"dateStart",children:[Object(H.jsx)("span",{children:"Date Start"}),Object(H.jsx)("input",Object(l.a)(Object(l.a)({},d),{},{id:"dateStart"}))]}),Object(H.jsxs)(qn,{htmlFor:"dateEnd",children:[Object(H.jsx)("span",{children:"Date End"}),Object(H.jsx)("input",Object(l.a)(Object(l.a)({},p),{},{id:"dateEnd"}))]})]}),Object(H.jsx)(Nn,{filters:O}),Object(H.jsx)(_e,{gap:!0,children:n&&v.map((function(e){return Object(H.jsx)(Fn,{notify:o,token:t,order:e,setShowModal:a,setOrders:c},e.id)}))})]})}var Hn,_n,Vn=p.a.li(Dn||(Dn=Object(b.a)(["\n    margin: 0 auto;\n    display: flex;\n    justify-content: flex-start;\n    align-items: flex-start;\n    gap: var(--md-spacing);\n    padding: var(--base-spacing);\n    width: 100%;\n    border-left: 0.5rem solid;\n    border-right: 0.5rem solid;\n    border-bottom: 1px solid;\n    border-top: 1px solid;\n    border-color: var(--gray-30);\n\n    &:hover {\n        background-color: var(--gray-20);\n    }\n"]))),Jn=p.a.div(En||(En=Object(b.a)(["\n    display: flex;\n    max-width: 22vw;\n    width: 100%;\n    flex-flow: column nowrap;\n"]))),Kn=p.a.div(Tn||(Tn=Object(b.a)(["\n    display: flex;\n    justify-content: flex-end;\n    flex-grow: 1;\n"]))),Zn=p.a.p(Bn||(Bn=Object(b.a)(["\n    max-width: 75ch;\n    width: 100%;\n"]))),$n=p.a.a(An||(An=Object(b.a)(["\n    text-decoration: none;\n    padding: var(--base-unit);\n    color: var(--link);\n\n    &:hover,\n    &:focus {\n        text-decoration: none !important;\n        color: var(--link-hover);\n    }\n"])));function Gn(e){var n=e.message,t=e.setShowModal,a=e.setMessages,c=e.token,o=e.notify,i=Object(r.useState)(!1),l=Object(s.a)(i,2),u=l[0],d=l[1],j=function(e){var t=e.data;a((function(e){return e.filter((function(e){return e.id!==n.id}))})),o("".concat(t.response,": Deleted ").concat(n.name,"'s message"),"red")},b=function(e){var n=e.data;return o("".concat(n.error),"red")},p=function(){t({heading:"Confirm deletion",text:"Delete ".concat(n.name,"'s message?'"),color:"danger",btnText:"Delete",ok:function(e){e&&function(e,n){return z.apply(this,arguments)}(n.id,c).then(j).catch(b)}})};return Object(H.jsxs)(Vn,{children:[Object(H.jsxs)(Jn,{children:[Object(H.jsx)(bn,{children:n.name}),Object(H.jsx)("a",{href:"mailto:".concat(n.email),children:n.email})]}),Object(H.jsxs)(Zn,{children:[u?n.message:n.message.substring(0,140),n.message.length>140&&Object(H.jsx)($n,{href:"#",onClick:function(){return d((function(e){return!e}))},children:u?"(less)":"... (more)"})]}),Object(H.jsx)(Kn,{children:Object(H.jsx)(ze,{onClick:function(){return p()}})})]})}function Qn(e){var n=e.messages,t=e.setShowModal,r=e.setMessages,a=e.token,c=e.notify;return Object(H.jsx)(Ue,{children:Object(H.jsx)(_e,{gap:!0,children:n&&n.map((function(e){return Object(H.jsx)(Gn,{notify:c,token:a,setMessages:r,message:e,setShowModal:t},e.id)}))})})}var Xn,Yn=p.a.div(Hn||(Hn=Object(b.a)(["\n    position: fixed;\n    top: calc(var(--base-unit) + 4rem);\n    right: calc(var(--base-unit) + 15px); // for scrollbar\n    width: 22rem;\n    background-color: ","\n    z-index: 100;\n    border-radius: var(--radius);\n    opacity: 0.95;\n    box-shadow: var(--box-shadow-sm);\n    animation: 0.2s ease-out forwards fadeDown;\n"])),(function(e){return"red"===e.look?"var(--red);":"green"===e.look?"var(--green);":"var(--gray-30);"})),et=p.a.p(_n||(_n=Object(b.a)(["\n    color: var(--gray-20);\n    margin: var(--base-spacing);\n    font-size: var(--small-font-size);\n    font-weight: 600;\n"])));function nt(e){var n=e.notification;return Object(H.jsx)(Yn,{look:n.style,children:Object(H.jsx)(et,{children:n.text})})}var tt,rt,at,ct,ot,it,st=p.a.div(Xn||(Xn=Object(b.a)(["\n    display: flex;\n    flex-flow: column nowrap;\n    padding-top: 4rem;\n    padding-left: ",";\n    height: 100vh;\n    overflow: hidden;\n"])),(function(e){return e.showFull?"12rem":"4rem"}));function lt(e){var n=e.inv,t=e.orders,a=e.token,c=e.setShowModal,o=e.logout,i=e.setOrders,l=e.setInv,u=e.user,d=e.messages,j=e.setMessages,b=e.notify,p=e.notification,h=Object(r.useState)("metrics"),f=Object(s.a)(h,2),x=f[0],g=f[1],O=Object(r.useState)(!0),v=Object(s.a)(O,2),m=v[0],w=v[1],y=t?t.length:0,k=d?d.length:0,S=n?function(e,n){return e.reduce((function(e,t){return e+n(t)}),0)}(n,(function(e){return e.quantity})):0;return Object(H.jsxs)(st,{showFull:m,children:[Object(H.jsx)(ae,{text:"Zircus Admin Dashboard",logout:o,user:u}),Object(H.jsx)(me,{page:x,setPage:g,orders:y,inv:S,showFull:m,setShowFull:w,messages:k}),p&&Object(H.jsx)(nt,{notification:p}),"inventory"===x&&Object(H.jsx)(Je,{inv:n,token:a,setShowModal:c,setInv:l}),"orders"===x&&Object(H.jsx)(Rn,{orders:t,token:a,setShowModal:c,setOrders:i,notify:b}),"metrics"===x&&Object(H.jsx)(sn,{orders:t,setShowModal:c,inv:n,messages:d}),"messages"===x&&Object(H.jsx)(Qn,{messages:d,setMessages:j,setShowModal:c,token:a,notify:b})]})}var ut=p.a.div(tt||(tt=Object(b.a)(["\n    ",";\n"])),(function(e){return e.showModal&&"filter: blur(0.25rem)"})),dt=p.a.div(rt||(rt=Object(b.a)(["\n    width: 100vw;\n    height: 100vh;\n    top: 0;\n    left: 0;\n    position: fixed;\n"]))),jt=p.a.section(at||(at=Object(b.a)(["\n    position: fixed;\n    display: flex;\n    flex-flow: column nowrap;\n    gap: 1rem;\n    backgroud-color: var(--gray-90);\n    top: calc(25%);\n    left: calc(50% - 15rem);\n    width: 30rem;\n    min-height: 15rem;\n    background-color: var(--gray-10);\n    border-radius: var(--big-radius);\n    border: 2px solid var(--dgray-90);\n    padding: var(--base-spacing);\n"]))),bt=p.a.p(ct||(ct=Object(b.a)(["\n    flex-grow: 1;\n"]))),pt=p.a.div(ot||(ot=Object(b.a)(["\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    width: 100%;\n    gap: 1rem;\n"]))),ht=p.a.button(it||(it=Object(b.a)(["\n    flex-grow: 1;\n"])));function ft(e){var n=e.children,t=e.showModal,a=e.setShowModal,c=Object(r.useRef)();return Object(r.useEffect)((function(){t&&c.current.focus()})),Object(H.jsxs)("div",{children:[Object(H.jsxs)(ut,{showModal:t,children:[n,t&&Object(H.jsx)(dt,{})]}),t&&Object(H.jsxs)(jt,{children:[Object(H.jsx)("h2",{children:t.heading}),Object(H.jsx)(bt,{children:t.text}),Object(H.jsxs)(pt,{children:[Object(H.jsx)(ht,{className:"".concat(t.color," button"),type:"button",onClick:function(){t.ok(!0),a(null)},children:t.btnText||"Ok"}),Object(H.jsx)(ht,{className:"button outline",type:"button",onClick:function(){t.ok(!1),a(null)},ref:c,children:"Cancel"})]})]})]})}var xt=function(){var e=Object(r.useState)(null),n=Object(s.a)(e,2),t=n[0],a=n[1],c=Object(r.useState)(null),o=Object(s.a)(c,2),l=o[0],u=o[1],d=Object(r.useState)([]),j=Object(s.a)(d,2),b=j[0],p=j[1],h=Object(r.useState)(null),f=Object(s.a)(h,2),x=f[0],g=f[1],O=Object(r.useState)(null),v=Object(s.a)(O,2),w=v[0],k=v[1],S=Object(r.useState)(null),C=Object(s.a)(S,2),L=C[0],M=C[1],P=Object(r.useState)(null),z=Object(s.a)(P,2),W=z[0],I=z[1],N=Object(r.useState)(-1),D=Object(s.a)(N,2),E=D[0],T=D[1],B=Object(r.useContext)(V),A=B.addListener,q=B.removeListener,U=function(e){var n=e.text,t=e.color;J(n,t),m().then((function(e){return p([].concat(Object(i.a)(e.data.ff),Object(i.a)(e.data.pf),Object(i.a)(e.data.cf)))})).catch((function(){return p([])})),y(l).then((function(e){return k(e.data)})).catch((function(){return k(null)}))},R=function(){var e=A((function(e){if(l)switch(e.type){case"message":return function(e){var n=e.text,t=e.color;J(n,t),F(l).then((function(e){return g(e.data.messages)})).catch((function(){return g(null)}))}({text:"New message from ".concat(e.data.name),color:"green"});case"pending order":return U({text:"Pending order from ".concat(e.data.name),color:"gray"});case"paid order":return U({text:"Paid order from ".concat(e.data.name),color:"green"});case"deleted order":return U({text:"".concat(e.data.response,": Inventory updated"),color:"red"})}}));T(e)},_=function(){q(E),T(-1)},J=function(e,n){W&&W.self&&clearTimeout(W.self);var t=setTimeout((function(){return I(null)}),4500);I({text:e,style:n,self:t})};return Object(r.useEffect)((function(){return m().then((function(e){return p([].concat(Object(i.a)(e.data.ff),Object(i.a)(e.data.pf),Object(i.a)(e.data.cf)))})).catch((function(){return p([])})),null!==l&&(y(l).then((function(e){return k(e.data)})).catch((function(){return k(null)})),F(l).then((function(e){return g(e.data.messages)})).catch((function(){return g(null)}))),R(),_}),[p,l]),Object(H.jsx)(ft,{showModal:L,setShowModal:M,children:l?Object(H.jsx)(lt,{notification:W,notify:J,inv:b,orders:w,token:l,logout:function(){a(null),u(null),localStorage.removeItem("user"),localStorage.removeItem("token")},setShowModal:M,setOrders:k,setInv:p,user:t,messages:x,setMessages:g}):Object(H.jsx)(X,{setUser:a,setToken:u})})};t(342);o.a.render(Object(H.jsx)(a.a.StrictMode,{children:Object(H.jsx)(J,{children:Object(H.jsx)(xt,{})})}),document.getElementById("root"))}},[[343,1,2]]]);
//# sourceMappingURL=main.b5160b6e.chunk.js.map