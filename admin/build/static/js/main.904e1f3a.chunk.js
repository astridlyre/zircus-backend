(this.webpackJsonpadmin=this.webpackJsonpadmin||[]).push([[0],{341:function(e,n,t){},342:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),c=t(81),i=t.n(c),o=t(12),s=t(20),l=t(23),u=t.n(l),d=t(36),j=t(4),b=t(5),p=t(48),h=t.n(p),x="https://zircus.herokuapp.com/api";function f(e,n){return O.apply(this,arguments)}function O(){return(O=Object(d.a)(u.a.mark((function e(n,t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.post("".concat(x,"/login"),{username:n,password:t});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(){return(g=Object(d.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("".concat(x,"/inv"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(){return(v=Object(d.a)(u.a.mark((function e(n){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("".concat(x,"/orders"),{headers:{Authorization:"Bearer ".concat(n)}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e,n){return w.apply(this,arguments)}function w(){return(w=Object(d.a)(u.a.mark((function e(n,t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.put("".concat(x,"/orders/").concat(n.id),n,{headers:{Authorization:"Bearer ".concat(t)}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function y(){return(y=Object(d.a)(u.a.mark((function e(n,t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.delete("".concat(x,"/orders/").concat(n),{headers:{Authorization:"Bearer ".concat(t)}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function k(){return(k=Object(d.a)(u.a.mark((function e(n,t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.put("".concat(x,"/inv"),n,{headers:{Authorization:"Bearer ".concat(t)}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function S(e,n,t){var a=Object(r.useState)(n),c=Object(o.a)(a,2),i=c[0],s=c[1];return[{type:e,value:i,onChange:function(e){return s(e.target.value)},placeholder:t},function(){return s(n)}]}var C,M,F,L,P,z,A,I,B=t(1),N=b.a.main(C||(C=Object(j.a)(["\n    width: 100%;\n    display: flex;\n    flex-flow: column nowrap;\n    align-items: center;\n"]))),T=b.a.form(M||(M=Object(j.a)(["\n    margin-top: var(--lg-spacing);\n    padding: var(--md-spacing);\n    background-color: var(--gray-20);\n    border-radius: var(--big-radius);\n    display: flex;\n    flex-flow: column nowrap;\n    gap: 0.5rem;\n"]))),q=b.a.label(F||(F=Object(j.a)(["\n    display: flex;\n    flex-flow: column nowrap;\n"]))),D=b.a.p(L||(L=Object(j.a)(["\n    color: ",";\n    margin: var(--base-spacing) 0;\n    font-weight: 500;\n"])),(function(e){return e.failedLogin?"var(--red)":"var(--text-color)"})),W=b.a.button(P||(P=Object(j.a)(["\n    margin-top: 0.5rem;\n"])));function E(e){var n=e.setToken,t=e.setUser,a=Object(r.useState)(!1),c=Object(o.a)(a,2),i=c[0],l=c[1],j=S("text",""),b=Object(o.a)(j,1)[0],p=S("password",""),h=Object(o.a)(p,1)[0],x=function(){l(!0),setTimeout((function(){l(!1)}),2e3)},O=function(e){var r=e.data;t(r.name),n(r.token),localStorage.setItem("user",r.name),localStorage.setItem("token",r.token)},g=function(){var e=Object(d.a)(u.a.mark((function e(n){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.preventDefault(),f(b.value,h.value).then(O).catch(x);case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){var e=localStorage.getItem("token"),r=localStorage.getItem("user");e&&n(e),r&&t(r)}),[n,t]),Object(B.jsx)(N,{children:Object(B.jsxs)(T,{onSubmit:g,children:[Object(B.jsx)("h1",{children:"Zircus Admin"}),Object(B.jsx)(D,{failedLogin:i,children:i?"Login failed":"Please Log in:"}),Object(B.jsxs)(q,{htmlFor:"username",children:[Object(B.jsx)("span",{children:"Username"}),Object(B.jsx)("input",Object(s.a)(Object(s.a)({},b),{},{disabled:!!i}))]}),Object(B.jsxs)(q,{htmlFor:"password",children:[Object(B.jsx)("span",{children:"Password"}),Object(B.jsx)("input",Object(s.a)(Object(s.a)({},h),{},{disabled:!!i}))]}),Object(B.jsx)(W,{className:"button",type:"submit",disabled:!!i,children:i?"Please wait":"Log in"})]})})}function U(){return Object(B.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[Object(B.jsx)("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),Object(B.jsx)("circle",{cx:"12",cy:"7",r:"4"})]})}var _,V=b.a.header(z||(z=Object(j.a)(["\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 4rem;\n    background: var(--dgray-80);\n    padding: var(--base-spacing);\n"]))),H=b.a.h3(A||(A=Object(j.a)(["\n    color: var(--invert-text-color);\n    font-size: 1.25rem;\n    flex-grow: 1;\n"]))),J=b.a.span(I||(I=Object(j.a)(["\n    display: flex;\n    align-items: center;\n    gap: var(--base-unit);\n    color: var(--gray-10);\n    margin-right: var(--base-spacing);\n\n    svg {\n        height: 1rem;\n    }\n"])));function K(e){var n=e.text,t=e.logout,r=e.user;return Object(B.jsxs)(V,{children:[Object(B.jsx)(H,{children:n}),Object(B.jsxs)(J,{children:[Object(B.jsx)(U,{})," ",r.split(" ")[0]]}),Object(B.jsx)("button",{className:"button light outline",type:"button",onClick:t,children:"logout"})]})}function Z(){return Object(B.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[Object(B.jsx)("polyline",{points:"13 17 18 12 13 7"}),Object(B.jsx)("polyline",{points:"6 17 11 12 6 7"})]})}function R(){return Object(B.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[Object(B.jsx)("polyline",{points:"11 17 6 12 11 7"}),Object(B.jsx)("polyline",{points:"18 17 13 12 18 7"})]})}function $(){return Object(B.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[Object(B.jsx)("line",{x1:"8",y1:"6",x2:"21",y2:"6"}),Object(B.jsx)("line",{x1:"8",y1:"12",x2:"21",y2:"12"}),Object(B.jsx)("line",{x1:"8",y1:"18",x2:"21",y2:"18"}),Object(B.jsx)("line",{x1:"3",y1:"6",x2:"3.01",y2:"6"}),Object(B.jsx)("line",{x1:"3",y1:"12",x2:"3.01",y2:"12"}),Object(B.jsx)("line",{x1:"3",y1:"18",x2:"3.01",y2:"18"})]})}function G(){return Object(B.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[Object(B.jsx)("path",{d:"M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"}),Object(B.jsx)("line",{x1:"3",y1:"6",x2:"21",y2:"6"}),Object(B.jsx)("path",{d:"M16 10a4 4 0 0 1-8 0"})]})}function Q(){return Object(B.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[Object(B.jsx)("polyline",{points:"23 6 13.5 15.5 8.5 10.5 1 18"}),Object(B.jsx)("polyline",{points:"17 6 23 6 23 12"})]})}var X,Y,ee,ne,te=b.a.button(_||(_=Object(j.a)(["\n    flex-grow: 1;\n    display: flex;\n    align-items: center;\n    ","\n    justify-content: ",";\n    ","\n\n    svg {\n        height: 1.25rem;\n    }\n"])),(function(e){return e.showFull&&"gap: calc(var(--base-unit) * 1.5);"}),(function(e){return e.showFull?"left":"center"}),(function(e){return!e.showFull&&"padding: var(--input-padding);"}));function re(e){var n=e.showFull,t=e.active,r=e.page,a=e.num,c=e.setPage,i=e.children;return Object(B.jsxs)(te,{showFull:n,className:r===t?"button":"button outline",onClick:function(){return c(t)},children:[i,n&&"".concat(t," ").concat(a?"(".concat(a,")"):"")]})}var ae=b.a.nav(X||(X=Object(j.a)(["\n    position: fixed;\n    top: 4rem;\n    left: 0;\n    bottom: 0;\n    width: ",";\n    border-right: 2px solid var(--gray-20);\n"])),(function(e){return e.showFull?"12rem":"4rem"})),ce=b.a.ul(Y||(Y=Object(j.a)(["\n    list-style: none;\n    display: flex;\n    gap: var(--base-unit);\n    flex-flow: column nowrap;\n    padding: var(--base-unit) var(--base-unit) 0 var(--base-unit) !important;\n"]))),ie=b.a.li(ee||(ee=Object(j.a)(["\n    width: 100%;\n    display: flex;\n"]))),oe=b.a.button(ne||(ne=Object(j.a)(["\n    width: 100%;\n    padding: var(--base-unit);\n    display: flex;\n    justify-content: ",";\n    align-items: center;\n    background: transparent;\n    border: none;\n    outline: none;\n\n    &:hover,\n    &:focus {\n        background-color: var(--gray-20);\n        cursor: pointer;\n    }\n\n    svg {\n        height: 1.5rem;\n    }\n"])),(function(e){return e.showFull?"flex-end":"center"}));function se(e){var n=e.setPage,t=e.page,r=e.inv,a=e.orders,c=e.showFull,i=e.setShowFull;return Object(B.jsxs)(ae,{showFull:c,children:[Object(B.jsx)(oe,{showFull:c,type:"button",onClick:function(){return i(!c)},children:c?Object(B.jsx)(R,{}):Object(B.jsx)(Z,{})}),Object(B.jsxs)(ce,{children:[Object(B.jsx)(ie,{children:Object(B.jsx)(re,{showFull:c,page:t,active:"metrics",setPage:n,children:Object(B.jsx)(Q,{})})}),Object(B.jsx)(ie,{children:Object(B.jsx)(re,{showFull:c,page:t,active:"orders",num:a,setPage:n,children:Object(B.jsx)(G,{})})}),Object(B.jsx)(ie,{children:Object(B.jsx)(re,{active:"inventory",page:t,showFull:c,num:r,setPage:n,children:Object(B.jsx)($,{})})})]})]})}var le,ue,de,je,be,pe=t(55),he=b.a.label(le||(le=Object(j.a)(["\n    display: flex;\n    align-items: center;\n    gap: var(--base-unit);\n    user-select: none;\n    margin: 0;\n"])));function xe(e){var n=e.props,t=e.children;return Object(B.jsx)(he,Object(s.a)(Object(s.a)({},n),{},{children:t}))}function fe(){return Object(B.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[Object(B.jsx)("polyline",{points:"3 6 5 6 21 6"}),Object(B.jsx)("path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"})]})}function Oe(e){var n=e.onClick;return Object(B.jsx)("button",{type:"button",className:"button danger icon-button outline",onClick:n,children:Object(B.jsx)(fe,{})})}var ge,ve,me=b.a.li(ue||(ue=Object(j.a)(["\n    display: flex;\n    width: 100%;\n    align-items: center;\n    gap: 2rem;\n    @media screen and (min-width: 1281px) {\n        gap: 3rem;\n    }\n    border-top: 2px solid var(--gray-20);\n    border-left: 2px solid var(--gray-20);\n    border-right: 2px solid var(--gray-20);\n    padding: 1rem;\n\n    &:hover {\n        background-color: var(--gray-20);\n    }\n"]))),we=b.a.img(de||(de=Object(j.a)(["\n    max-height: 2rem;\n"]))),ye=b.a.p(je||(je=Object(j.a)(["\n    font-size: 1rem;\n"]))),ke=b.a.p(be||(be=Object(j.a)(["\n    font-weight: 500;\n    ","\n"])),(function(e){return e.grow&&"flex-grow: 1;"}));function Se(e){var n=e.item,t=e.token,r=e.setShowModal,a=e.setInv,c=function(e,r){return function(c){a((function(t){return Object(s.a)(Object(s.a)({},t),{},Object(pe.a)({},n.prefix,t[n.prefix].map((function(t){return t.id===n.id?Object(s.a)(Object(s.a)({},t),{},Object(pe.a)({},e,r(c.target))):t}))))})),function(e,n){return k.apply(this,arguments)}(Object(s.a)(Object(s.a)({},n),{},Object(pe.a)({},e,r(c.target))),t).catch((function(e){return console.log(e)}))}},i=c("quantity",(function(e){return Number(e.value)})),o=c("active",(function(e){return e.checked})),l=c("price",(function(e){return Number(e.value)}));return Object(B.jsxs)(me,{children:[Object(B.jsx)(we,{src:"https://zircus.netlify.app/".concat(n.images.sm_a),alt:n.name,className:"inventory__item__img"}),Object(B.jsx)(ye,{children:n.name.en}),Object(B.jsx)(ke,{children:n.size}),Object(B.jsx)(ke,{grow:!0,children:n.color}),Object(B.jsxs)(xe,{htmlFor:"".concat(n.id,"-price"),children:[Object(B.jsx)(ke,{children:"price"}),Object(B.jsx)("input",{min:"0",step:"1",size:"5",type:"number",id:"".concat(n.id,"-price"),value:n.price,onChange:l})]}),Object(B.jsxs)(xe,{htmlFor:"".concat(n.id,"-quantity"),children:[Object(B.jsx)(ke,{children:"quantity"}),Object(B.jsx)("input",{min:"0",step:"1",size:"5",type:"number",id:"".concat(n.id,"-quantity"),value:n.quantity,onChange:i})]}),Object(B.jsxs)(xe,{htmlFor:"active",children:[Object(B.jsx)(ke,{children:"active"}),Object(B.jsx)("input",{type:"checkbox",checked:n.active,onChange:o})]}),Object(B.jsx)(Oe,{onClick:function(){r({heading:"Confirm deletion",text:"Delete inventory item ".concat(n.type,"?"),color:"danger",btnText:"Delete",ok:function(e){e&&a((function(e){return e.filter((function(e){return e.type!==n.type}))}))}})}})]})}function Ce(){return Object(B.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"icon",children:[Object(B.jsx)("line",{x1:"12",y1:"2",x2:"12",y2:"6"}),Object(B.jsx)("line",{x1:"12",y1:"18",x2:"12",y2:"22"}),Object(B.jsx)("line",{x1:"4.93",y1:"4.93",x2:"7.76",y2:"7.76"}),Object(B.jsx)("line",{x1:"16.24",y1:"16.24",x2:"19.07",y2:"19.07"}),Object(B.jsx)("line",{x1:"2",y1:"12",x2:"6",y2:"12"}),Object(B.jsx)("line",{x1:"18",y1:"12",x2:"22",y2:"12"}),Object(B.jsx)("line",{x1:"4.93",y1:"19.07",x2:"7.76",y2:"16.24"}),Object(B.jsx)("line",{x1:"16.24",y1:"7.76",x2:"19.07",y2:"4.93"})]})}var Me,Fe=b.a.div(ge||(ge=Object(j.a)(["\n    position: fixed;\n    right: calc(var(--base-unit) + 15px);\n    bottom: var(--base-unit);\n    height: 3rem;\n    padding: var(--base-unit) calc(var(--base-unit) * 2);\n    background-color: var(--dgray-90);\n    border-radius: var(--radius);\n    border: 2px solid var(--gray-20);\n    display: flex;\n    align-items: center;\n    gap: var(--base-unit);\n    color: var(--gray-10);\n"]))),Le=b.a.div(ve||(ve=Object(j.a)(["\n    display: flex;\n    gap: var(--base-spacing);\n"])));function Pe(e){var n=e.filters;return Object(B.jsx)(Fe,{children:Object(B.jsx)(Le,{children:n&&n.map((function(e,n){return Object(B.jsxs)(xe,{htmlFor:"filter-".concat(n),active:e.active,children:[e.text,Object(B.jsx)("input",{checked:e.active,onChange:e.setActive,type:"checkbox",id:"filter-".concat(n)})]},e.text)}))})})}var ze,Ae=b.a.main(Me||(Me=Object(j.a)(["\n    overflow-y: scroll;\n    min-height: calc(100vh - 4rem);\n    display: flex;\n    flex-flow: column nowrap;\n    align-items: center;\n    ","\n    ","\n"])),(function(e){return e.padTop&&"padding-top: var(--base-spacing);"}),(function(e){return e.pad&&"padding: var(--base-spacing);"}));function Ie(e){var n=e.children,t=e.padTop,r=e.pad;return Object(B.jsx)(Ae,{padTop:t,pad:r,children:n})}var Be=b.a.ul(ze||(ze=Object(j.a)(["\n    max-width: var(--screen-lg);\n"])));function Ne(e){var n=e.children;return Object(B.jsx)(Be,{children:n})}function Te(e){var n=e.inv,t=e.token,a=e.setShowModal,c=e.setInv,i=Object(r.useState)(!0),s=Object(o.a)(i,2),l=s[0],u=s[1],d=Object(r.useState)(!0),j=Object(o.a)(d,2),b=j[0],p=j[1],h=Object(r.useState)(!0),x=Object(o.a)(h,2),f=x[0],O=x[1],g=[{active:l,text:"flat front",setActive:function(){return u(!l)}},{active:b,text:"pouch front",setActive:function(){return p(!b)}},{active:f,text:"compression front",setActive:function(){return O(!f)}}];return Object(B.jsxs)(Ie,{children:[Object(B.jsx)(Pe,{filters:g}),Object(B.jsxs)(Ne,{children:[n&&l&&n.ff.map((function(e){return Object(B.jsx)(Se,{item:e,token:t,setShowModal:a,setInv:c},e.id)})),n&&b&&n.pf.map((function(e){return Object(B.jsx)(Se,{item:e,token:t,setShowModal:a,setInv:c},e.id)})),n&&f&&n.cf.map((function(e){return Object(B.jsx)(Se,{item:e,token:t,setShowModal:a,setInv:c},e.id)})),!n&&Object(B.jsx)("li",{id:"spinner",className:"spinner",children:Object(B.jsx)(Ce,{})})]})]})}var qe,De,We,Ee,Ue,_e=t(344),Ve=t(176),He=t(348),Je=t(173),Ke=t(174),Ze=[{name:"Order 1",date:Date.now()},{name:"Order 2",date:Date.now()}];function Re(){return Object(B.jsxs)(_e.a,{width:400,height:400,data:Ze,children:[Object(B.jsx)(Ve.a,{type:"monotone",dataKey:"name",stroke:"#888888"}),Object(B.jsx)(He.a,{stroke:"#cccccc"}),Object(B.jsx)(Je.a,{dataKey:"date"}),Object(B.jsx)(Ke.a,{})]})}var $e=b.a.div(qe||(qe=Object(j.a)(["\n    display: flex;\n    gap: var(--base-spacing);\n    margin-top: var(--base-spacing);\n"]))),Ge=b.a.h1(De||(De=Object(j.a)(["\n    width: 100%;\n"]))),Qe=b.a.div(We||(We=Object(j.a)(["\n    background-color: var(--gray-20);\n    border-radius: var(--big-radius);\n    padding: var(--base-spacing);\n    display: flex;\n    flex-flow: column nowrap;\n    align-items: center;\n"]))),Xe=b.a.span(Ee||(Ee=Object(j.a)(["\n    font-size: 3rem;\n    margin-top: auto;\n"]))),Ye=b.a.ul(Ue||(Ue=Object(j.a)(["\n    width: 100%;\n\n    li {\n        display: flex;\n        justify-content: space-between;\n        border-bottom: 1px solid var(--gray-30);\n    }\n"])));function en(e){var n=e.orders,t=(e.setShowModal,e.inv),r=t&&Object.values(t).flat()||[];return Object(B.jsxs)(Ie,{pad:!0,children:[Object(B.jsx)(Ge,{children:"Metrics"}),Object(B.jsxs)($e,{children:[Object(B.jsxs)(Qe,{children:[Object(B.jsx)("h2",{children:"total orders"}),Object(B.jsx)(Xe,{children:n&&n.length})]}),Object(B.jsxs)(Qe,{children:[Object(B.jsx)("h2",{children:"low stock"}),Object(B.jsx)(Ye,{children:r.map((function(e){return e.quantity<5&&Object(B.jsxs)("li",{children:[Object(B.jsx)("span",{children:e.type}),Object(B.jsx)("span",{children:e.quantity})]},e.type)}))})]}),Object(B.jsx)(Re,{})]})]})}var nn,tn,rn=t(21),an=b.a.h3(nn||(nn=Object(j.a)(["\n    font-size: 1.125rem;\n    font-weight: 700;\n    display: block;\n    margin-bottom: var(--base-unit);\n    font-style: normal;\n"])));function cn(e){var n=e.children;return Object(B.jsx)(an,{children:n})}var on,sn,ln=b.a.address(tn||(tn=Object(j.a)(["\n    flex-grow: 1;\n"])));function un(e){var n=e.order;return Object(B.jsxs)(ln,{children:[Object(B.jsx)(cn,{children:n.name}),Object(B.jsx)("a",{href:"mailto:".concat(n.email),children:n.email}),Object(B.jsx)("br",{}),n.streetAddress,Object(B.jsx)("br",{}),n.city," ",n.state,Object(B.jsx)("br",{}),n.zip.toUpperCase()," ",n.country,Object(B.jsx)("br",{})]})}var dn,jn,bn,pn=b.a.p(on||(on=Object(j.a)(["\n    margin-top: auto;\n    text-align: right;\n    font-weight: 600;\n"]))),hn=b.a.div(sn||(sn=Object(j.a)(["\n    display: flex;\n    flex-flow: column nowrap;\n    justify-content: space-between;\n    width: 14rem;\n    border-right: 2px solid var(--gray-30);\n    padding-right: var(--base-spacing);\n"])));function xn(e){var n=e.order;return Object(B.jsxs)(hn,{children:[Object(B.jsx)("ul",{children:n.items.map((function(e){return Object(B.jsxs)("li",{children:[e.type," x ",e.quantity]},e.type)}))}),Object(B.jsxs)(pn,{children:["total $",n.total.toFixed(2)]})]})}var fn,On=b.a.li(dn||(dn=Object(j.a)(["\n    margin: 0 auto;\n    display: flex;\n    gap: var(--base-spacing);\n    padding: var(--base-spacing);\n    width: 100%;\n    border-left: 0.5rem solid;\n    border-right: 0.5rem solid;\n    border-bottom: 1px solid;\n    border-top: 1px solid;\n    border-color: ",";\n\n    &:hover {\n        background-color: var(--gray-20);\n    }\n"])),(function(e){return e.hasPaid&&e.hasShipped?"var(--green)":e.hasPaid?"var(--yellow)":"var(--gray-30)"})),gn=b.a.div(jn||(jn=Object(j.a)(["\n    display: flex;\n    flex-flow: column nowrap;\n"]))),vn=b.a.div(bn||(bn=Object(j.a)(["\n    width: 100%;\n    display: flex;\n    justify-content: flex-end;\n    align-items: flex-end;\n    flex-grow: 1;\n"])));function mn(e){var n=e.order,t=e.token,r=e.setShowModal,a=e.setOrders,c=function(e){var t=e.data;r({heading:"Success",text:t.response,ok:function(){return a((function(e){return e.filter((function(e){return e.id!==n.id}))}))}})},i=function(e){var n=e.data;r({heading:"Error",text:n.error,ok:function(){}})};return Object(B.jsxs)(On,{hasPaid:n.hasPaid,hasShipped:n.hasShipped,children:[Object(B.jsx)(xn,{order:n}),Object(B.jsx)(un,{order:n}),Object(B.jsxs)(gn,{children:[Object(B.jsx)(cn,{children:new Date(n.createdOn).toLocaleString("en-US")}),Object(B.jsxs)(xe,{children:["paid:",Object(B.jsx)("input",{type:"checkbox",checked:n.hasPaid,onChange:function(){a((function(e){return e.map((function(e){return e.id===n.id?Object(s.a)(Object(s.a)({},e),{},{hasPaid:!e.hasPaid}):e}))})),m({id:n.id,updatedAttributes:{hasPaid:!n.hasPaid}},t).catch((function(e){return console.log(e)}))}})]}),Object(B.jsxs)(xe,{children:["shipped:",Object(B.jsx)("input",{type:"checkbox",checked:n.hasShipped,onChange:function(){a((function(e){return e.map((function(e){return e.id===n.id?Object(s.a)(Object(s.a)({},e),{},{hasShipped:!e.hasShipped}):e}))})),m({id:n.id,updatedAttributes:{hasShipped:!n.hasShipped}},t).catch((function(e){return console.log(e)}))}})]}),Object(B.jsx)(vn,{children:Object(B.jsx)(Oe,{onClick:function(){r({heading:"Confirm deletion",text:"Delete ".concat(n.name,"'s order?'"),color:"danger",btnText:"Delete",ok:function(e){e&&function(e,n){return y.apply(this,arguments)}(n.id,t).then(c).catch(i)}})}})})]})]})}var wn,yn=b.a.ul(fn||(fn=Object(j.a)(["\n    display: flex;\n    flex-flow: column nowrap;\n    gap: var(--base-spacing);\n    max-width: var(--screen-lg);\n"])));function kn(e){var n=e.orders,t=e.token,a=e.setShowModal,c=e.setOrders,i=Object(r.useState)(["hasPaid"]),s=Object(o.a)(i,2),l=s[0],u=s[1],d=[{active:l.includes("hasShipped"),text:"shipped",setActive:function(){return l.includes("hasShipped")?u((function(e){return e.filter((function(e){return"hasShipped"!==e}))})):u((function(e){return e.concat("hasShipped")}))}},{active:l.includes("hasPaid"),text:"paid",setActive:function(){return l.includes("hasPaid")?u((function(e){return e.filter((function(e){return"hasPaid"!==e}))})):u((function(e){return e.concat("hasPaid")}))}}],j=n&&n.filter((function(e){if(!l.length)return!0;var n,t=Object(rn.a)(l);try{for(t.s();!(n=t.n()).done;){if(!e[n.value])return!1}}catch(r){t.e(r)}finally{t.f()}return!0}));return Object(B.jsxs)(Ie,{padTop:!0,children:[Object(B.jsx)(Pe,{filters:d}),Object(B.jsx)(yn,{children:n&&j.map((function(e){return Object(B.jsx)(mn,{token:t,order:e,setShowModal:a,setOrders:c},e.id)}))})]})}var Sn,Cn,Mn,Fn,Ln,Pn,zn=b.a.div(wn||(wn=Object(j.a)(["\n    display: flex;\n    flex-flow: column nowrap;\n    padding-top: 4rem;\n    padding-left: ",";\n    height: 100vh;\n    overflow: hidden;\n"])),(function(e){return e.showFull?"12rem":"4rem"}));function An(e){var n=e.inv,t=e.orders,a=e.token,c=e.setShowModal,i=e.logout,s=e.setOrders,l=e.setInv,u=e.user,d=Object(r.useState)("metrics"),j=Object(o.a)(d,2),b=j[0],p=j[1],h=Object(r.useState)(!0),x=Object(o.a)(h,2),f=x[0],O=x[1],g=t?t.length:0,v=function(e,n){return e.reduce((function(e,t){return e+n(t)}),0)},m=function(e){return e.quantity},w=n?v([v(n.ff,m),v(n.pf,m),v(n.cf,m)],(function(e){return e})):0;return Object(B.jsxs)(zn,{showFull:f,children:[Object(B.jsx)(K,{text:"Zircus Admin Dashboard",logout:i,user:u}),Object(B.jsx)(se,{page:b,setPage:p,orders:g,inv:w,showFull:f,setShowFull:O}),"inventory"===b&&Object(B.jsx)(Te,{inv:n,token:a,setShowModal:c,setInv:l}),"orders"===b&&Object(B.jsx)(kn,{orders:t,token:a,setShowModal:c,setOrders:s}),"metrics"===b&&Object(B.jsx)(en,{orders:t,setShowModal:c,inv:n})]})}var In=b.a.div(Sn||(Sn=Object(j.a)(["\n    ",";\n"])),(function(e){return e.showModal&&"filter: blur(0.25rem)"})),Bn=b.a.div(Cn||(Cn=Object(j.a)(["\n    width: 100vw;\n    height: 100vh;\n    top: 0;\n    left: 0;\n    position: fixed;\n"]))),Nn=b.a.section(Mn||(Mn=Object(j.a)(["\n    position: fixed;\n    display: flex;\n    flex-flow: column nowrap;\n    gap: 1rem;\n    backgroud-color: var(--gray-90);\n    top: calc(25%);\n    left: calc(50% - 15rem);\n    width: 30rem;\n    min-height: 15rem;\n    background-color: var(--gray-10);\n    border-radius: var(--big-radius);\n    border: 2px solid var(--dgray-90);\n    padding: var(--base-spacing);\n"]))),Tn=b.a.p(Fn||(Fn=Object(j.a)(["\n    flex-grow: 1;\n"]))),qn=b.a.div(Ln||(Ln=Object(j.a)(["\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    width: 100%;\n    gap: 1rem;\n"]))),Dn=b.a.button(Pn||(Pn=Object(j.a)(["\n    flex-grow: 1;\n"])));function Wn(e){var n=e.children,t=e.showModal,a=e.setShowModal,c=Object(r.useRef)();return Object(r.useEffect)((function(){t&&c.current.focus()})),Object(B.jsxs)("div",{children:[Object(B.jsxs)(In,{showModal:t,children:[n,t&&Object(B.jsx)(Bn,{})]}),t&&Object(B.jsxs)(Nn,{children:[Object(B.jsx)("h2",{children:t.heading}),Object(B.jsx)(Tn,{children:t.text}),Object(B.jsxs)(qn,{children:[Object(B.jsx)(Dn,{className:"".concat(t.color," button"),type:"button",onClick:function(){t.ok(!0),a(null)},children:t.btnText||"Ok"}),Object(B.jsx)(Dn,{className:"button outline",type:"button",onClick:function(){t.ok(!1),a(null)},ref:c,children:"Cancel"})]})]})]})}var En=function(){var e=Object(r.useState)(null),n=Object(o.a)(e,2),t=n[0],a=n[1],c=Object(r.useState)(null),i=Object(o.a)(c,2),s=i[0],l=i[1],u=Object(r.useState)(null),d=Object(o.a)(u,2),j=d[0],b=d[1],p=Object(r.useState)(null),h=Object(o.a)(p,2),x=h[0],f=h[1],O=Object(r.useState)(null),m=Object(o.a)(O,2),w=m[0],y=m[1];return Object(r.useEffect)((function(){(function(){return g.apply(this,arguments)})().then((function(e){return b(e.data)})).catch((function(){return b(null)})),s&&function(e){return v.apply(this,arguments)}(s).then((function(e){return f(e.data)})).catch((function(){return f(null)}))}),[b,s]),Object(B.jsx)(Wn,{showModal:w,setShowModal:y,children:s?Object(B.jsx)(An,{inv:j,orders:x,token:s,logout:function(){a(null),l(null),localStorage.removeItem("user"),localStorage.removeItem("token")},setShowModal:y,setOrders:f,setInv:b,user:t}):Object(B.jsx)(E,{setUser:a,setToken:l})})};t(341);i.a.render(Object(B.jsx)(a.a.StrictMode,{children:Object(B.jsx)(En,{})}),document.getElementById("root"))}},[[342,1,2]]]);
//# sourceMappingURL=main.904e1f3a.chunk.js.map