(this.webpackJsonpadmin=this.webpackJsonpadmin||[]).push([[0],{57:function(e,t,n){},58:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),c=n(27),i=n.n(c),o=n(5),s=n(4),l=n(6),u=n.n(l),j=n(8),d=n(2),b=n(3),h=n(9),p=n.n(h),x="https://zircus.herokuapp.com/api";function O(e,t){return f.apply(this,arguments)}function f(){return(f=Object(j.a)(u.a.mark((function e(t,n){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.post("".concat(x,"/login"),{username:t,password:n});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(){return(v=Object(j.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("".concat(x,"/inv"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(){return(g=Object(j.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("".concat(x,"/orders"),{headers:{Authorization:"Bearer ".concat(t)}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e,t){return w.apply(this,arguments)}function w(){return(w=Object(j.a)(u.a.mark((function e(t,n){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.put("".concat(x,"/orders/").concat(t.id),t,{headers:{Authorization:"Bearer ".concat(n)}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function y(){return(y=Object(j.a)(u.a.mark((function e(t,n){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.delete("".concat(x,"/orders/").concat(t),{headers:{Authorization:"Bearer ".concat(n)}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function k(){return(k=Object(j.a)(u.a.mark((function e(t,n){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.put("".concat(x,"/inv"),t,{headers:{Authorization:"Bearer ".concat(n)}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function S(e,t,n){var a=Object(r.useState)(t),c=Object(o.a)(a,2),i=c[0],s=c[1];return[{type:e,value:i,onChange:function(e){return s(e.target.value)},placeholder:n},function(){return s(t)}]}var C,M,P,L,F,N=n(0),A=b.a.main(C||(C=Object(d.a)(["\n    width: 100%;\n    display: flex;\n    flex-flow: column nowrap;\n    align-items: center;\n"]))),I=b.a.form(M||(M=Object(d.a)(["\n    margin-top: var(--base-spacing);\n    padding: var(--md-spacing);\n    background-color: var(--gray-20);\n    border-radius: var(--big-radius);\n    display: flex;\n    flex-flow: column nowrap;\n    gap: 0.5rem;\n"]))),z=b.a.label(P||(P=Object(d.a)(["\n    display: flex;\n    flex-flow: column nowrap;\n"]))),B=b.a.p(L||(L=Object(d.a)(["\n    color: ",";\n    margin: var(--base-spacing) 0;\n    font-weight: 500;\n"])),(function(e){return e.failedLogin?"var(--red)":"var(--text-color)"})),W=b.a.button(F||(F=Object(d.a)(["\n    margin-top: 0.5rem;\n"])));function q(e){var t=e.setToken,n=e.setUser,a=Object(r.useState)(!1),c=Object(o.a)(a,2),i=c[0],l=c[1],d=S("text",""),b=Object(o.a)(d,1)[0],h=S("password",""),p=Object(o.a)(h,1)[0],x=function(){l(!0),setTimeout((function(){l(!1)}),2e3)},f=function(e){var r=e.data;n(r.name),t(r.token),localStorage.setItem("user",r.name),localStorage.setItem("token",r.token)},v=function(){var e=Object(j.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),O(b.value,p.value).then(f).catch(x);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){var e=localStorage.getItem("token"),r=localStorage.getItem("user");e&&t(e),r&&n(r)}),[t,n]),Object(N.jsx)(A,{children:Object(N.jsxs)(I,{onSubmit:v,children:[Object(N.jsx)("h1",{children:"Zircus Admin"}),Object(N.jsx)(B,{failedLogin:i,children:i?"Login failed":"Please Log in:"}),Object(N.jsxs)(z,{htmlFor:"username",children:[Object(N.jsx)("span",{children:"Username"}),Object(N.jsx)("input",Object(s.a)(Object(s.a)({},b),{},{disabled:!!i}))]}),Object(N.jsxs)(z,{htmlFor:"password",children:[Object(N.jsx)("span",{children:"Password"}),Object(N.jsx)("input",Object(s.a)(Object(s.a)({},p),{},{disabled:!!i}))]}),Object(N.jsx)(W,{className:"button",type:"submit",disabled:!!i,children:i?"Please wait":"Log in"})]})})}var D,H,U,_=n(13);function E(){return Object(N.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[Object(N.jsx)("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),Object(N.jsx)("circle",{cx:"12",cy:"7",r:"4"})]})}var T,V,J,Y,Z,$=b.a.header(D||(D=Object(d.a)(["\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 4rem;\n    background: var(--dgray-80);\n    padding: var(--base-spacing);\n"]))),G=b.a.h3(H||(H=Object(d.a)(["\n    color: var(--invert-text-color);\n    flex-grow: 1;\n"]))),K=b.a.span(U||(U=Object(d.a)(["\n    display: flex;\n    align-items: center;\n    gap: var(--base-unit);\n    color: var(--gray-10);\n    margin-right: var(--base-spacing);\n\n    svg {\n        height: 1rem;\n    }\n"])));function Q(e){var t=e.text,n=e.logout,r=e.user;return Object(N.jsxs)($,{children:[Object(N.jsx)(G,{children:t}),Object(N.jsxs)(K,{children:[Object(N.jsx)(E,{})," ",r.split(" ")[0]]}),Object(N.jsx)("button",{className:"button light outline",type:"button",onClick:n,children:"logout"})]})}function R(){return Object(N.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[Object(N.jsx)("polyline",{points:"13 17 18 12 13 7"}),Object(N.jsx)("polyline",{points:"6 17 11 12 6 7"})]})}function X(){return Object(N.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[Object(N.jsx)("polyline",{points:"11 17 6 12 11 7"}),Object(N.jsx)("polyline",{points:"18 17 13 12 18 7"})]})}function ee(){return Object(N.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[Object(N.jsx)("line",{x1:"8",y1:"6",x2:"21",y2:"6"}),Object(N.jsx)("line",{x1:"8",y1:"12",x2:"21",y2:"12"}),Object(N.jsx)("line",{x1:"8",y1:"18",x2:"21",y2:"18"}),Object(N.jsx)("line",{x1:"3",y1:"6",x2:"3.01",y2:"6"}),Object(N.jsx)("line",{x1:"3",y1:"12",x2:"3.01",y2:"12"}),Object(N.jsx)("line",{x1:"3",y1:"18",x2:"3.01",y2:"18"})]})}function te(){return Object(N.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[Object(N.jsx)("path",{d:"M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"}),Object(N.jsx)("line",{x1:"3",y1:"6",x2:"21",y2:"6"}),Object(N.jsx)("path",{d:"M16 10a4 4 0 0 1-8 0"})]})}function ne(){return Object(N.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[Object(N.jsx)("polyline",{points:"23 6 13.5 15.5 8.5 10.5 1 18"}),Object(N.jsx)("polyline",{points:"17 6 23 6 23 12"})]})}var re=b.a.nav(T||(T=Object(d.a)(["\n    position: fixed;\n    top: 4rem;\n    left: 0;\n    bottom: 0;\n    width: ",";\n    border-right: 2px solid var(--gray-20);\n"])),(function(e){return e.showFull?"12rem":"4rem"})),ae=b.a.ul(V||(V=Object(d.a)(["\n    list-style: none;\n    display: flex;\n    gap: var(--base-unit);\n    flex-flow: column nowrap;\n    padding: var(--base-unit) var(--base-unit) 0 var(--base-unit) !important;\n"]))),ce=b.a.li(J||(J=Object(d.a)(["\n    width: 100%;\n    display: flex;\n"]))),ie=b.a.button(Y||(Y=Object(d.a)(["\n    flex-grow: 1;\n    display: flex;\n    align-items: center;\n    ","\n    justify-content: ",";\n    ","\n\n    svg {\n        height: 1.25rem;\n    }\n"])),(function(e){return e.showFull&&"gap: calc(var(--base-unit) * 1.5);"}),(function(e){return e.showFull?"left":"center"}),(function(e){return!e.showFull&&"padding: var(--input-padding);"})),oe=b.a.button(Z||(Z=Object(d.a)(["\n    width: 100%;\n    padding: var(--base-unit);\n    display: flex;\n    justify-content: ",";\n    align-items: center;\n    background: transparent;\n    border: none;\n    outline: none;\n\n    &:hover,\n    &:focus {\n        background-color: var(--gray-20);\n        cursor: pointer;\n    }\n\n    svg {\n        height: 1.5rem;\n    }\n"])),(function(e){return e.showFull?"flex-end":"center"}));function se(e){var t=e.setPage,n=e.page,r=e.inv,a=e.orders,c=e.showFull,i=e.setShowFull;return Object(N.jsxs)(re,{showFull:c,children:[Object(N.jsx)(oe,{showFull:c,type:"button",onClick:function(){return i(!c)},children:c?Object(N.jsx)(X,{}):Object(N.jsx)(R,{})}),Object(N.jsxs)(ae,{children:[Object(N.jsx)(ce,{children:Object(N.jsxs)(ie,{showFull:c,className:"inventory"===n?"button":"button outline",onClick:function(){return t("inventory")},children:[Object(N.jsx)(ee,{}),c&&"Inventory (".concat(r,")")]})}),Object(N.jsx)(ce,{children:Object(N.jsxs)(ie,{showFull:c,className:"orders"===n?"button":"button outline",onClick:function(){return t("orders")},children:[Object(N.jsx)(te,{}),c&&"Orders (".concat(a,")")]})}),Object(N.jsx)(ce,{children:Object(N.jsxs)(ie,{showFull:c,className:"metrics"===n?"button":"button outline",onClick:function(){return t("metrics")},children:[Object(N.jsx)(ne,{}),c&&"Metrics"]})})]})]})}var le,ue,je,de,be,he=n(12);function pe(){return Object(N.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[Object(N.jsx)("polyline",{points:"3 6 5 6 21 6"}),Object(N.jsx)("path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"})]})}var xe,Oe,fe,ve,ge=b.a.li(le||(le=Object(d.a)(["\n    display: flex;\n    width: 100%;\n    align-items: center;\n    gap: 2rem;\n    @media screen and (min-width: 1281px) {\n        gap: 3rem;\n    }\n    border-top: 2px solid var(--gray-20);\n    padding: 1rem;\n\n    &:hover {\n        background-color: var(--gray-20);\n    }\n"]))),me=b.a.img(ue||(ue=Object(d.a)(["\n    max-height: 2rem;\n"]))),we=b.a.p(je||(je=Object(d.a)(["\n    font-size: 1rem;\n"]))),ye=b.a.p(de||(de=Object(d.a)(["\n    font-weight: 500;\n    ","\n"])),(function(e){return e.grow&&"flex-grow: 1;"})),ke=b.a.label(be||(be=Object(d.a)(["\n    display: flex;\n    align-items: center;\n    margin: 0;\n    gap: 0.5rem;\n"])));function Se(e){var t=e.item,n=e.token,a=e.setShowModal,c=e.setInv,i=e.inv,l=Object(r.useState)(t.quantity),u=Object(o.a)(l,2),j=u[0],d=u[1],b=Object(r.useState)(t.active),h=Object(o.a)(b,2),p=h[0],x=h[1],O=Object(r.useState)(t.price),f=Object(o.a)(O,2),v=f[0],g=f[1],m=function(e,r){return function(a){r(a.target.value),function(e,t){return k.apply(this,arguments)}(Object(s.a)(Object(s.a)({},t),{},Object(he.a)({},e,a.target.value)),n).catch((function(e){return console.log(e)}))}},w=m("quantity",d),y=m("active",x),S=m("price",g);return Object(N.jsxs)(ge,{children:[Object(N.jsx)(me,{src:"https://zircus.netlify.app/".concat(t.images.sm_a),alt:t.name,className:"inventory__item__img"}),Object(N.jsx)(we,{children:t.name}),Object(N.jsx)(ye,{children:t.size}),Object(N.jsx)(ye,{grow:!0,children:t.color}),Object(N.jsxs)(ke,{htmlFor:"".concat(t.id,"-price"),children:[Object(N.jsx)(ye,{children:"price"}),Object(N.jsx)("input",{min:"0",step:"1",size:"5",type:"number",id:"".concat(t.id,"-price"),value:v,onChange:S})]}),Object(N.jsxs)(ke,{htmlFor:"".concat(t.id,"-quantity"),children:[Object(N.jsx)(ye,{children:"quantity"}),Object(N.jsx)("input",{min:"0",step:"1",size:"5",type:"number",id:"".concat(t.id,"-quantity"),value:j,onChange:w})]}),Object(N.jsxs)(ke,{htmlFor:"active",children:[Object(N.jsx)(ye,{children:"active"}),Object(N.jsx)("input",{type:"checkbox",checked:!!p,onChange:y})]}),Object(N.jsx)("button",{type:"button",className:"button danger icon-button",onClick:function(){a({heading:"Confirm deletion",text:"Delete inventory item ".concat(t.type,"?"),ok:function(e){e&&c(i.filter((function(e){return e.type!==t.type})))}})},children:Object(N.jsx)(pe,{})})]})}function Ce(){return Object(N.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"icon",children:[Object(N.jsx)("line",{x1:"12",y1:"2",x2:"12",y2:"6"}),Object(N.jsx)("line",{x1:"12",y1:"18",x2:"12",y2:"22"}),Object(N.jsx)("line",{x1:"4.93",y1:"4.93",x2:"7.76",y2:"7.76"}),Object(N.jsx)("line",{x1:"16.24",y1:"16.24",x2:"19.07",y2:"19.07"}),Object(N.jsx)("line",{x1:"2",y1:"12",x2:"6",y2:"12"}),Object(N.jsx)("line",{x1:"18",y1:"12",x2:"22",y2:"12"}),Object(N.jsx)("line",{x1:"4.93",y1:"19.07",x2:"7.76",y2:"16.24"}),Object(N.jsx)("line",{x1:"16.24",y1:"7.76",x2:"19.07",y2:"4.93"})]})}var Me,Pe=b.a.div(xe||(xe=Object(d.a)(["\n    position: fixed;\n    right: calc(var(--base-unit) + 15px);\n    top: calc(4rem + var(--base-unit));\n    height: 4rem;\n    padding: var(--base-unit) calc(var(--base-unit) * 2);\n    background-color: var(--gray-10);\n    border-radius: var(--radius);\n    border: 2px solid var(--gray-20);\n    display: flex;\n    align-items: center;\n    gap: var(--base-unit);\n"]))),Le=b.a.div(Oe||(Oe=Object(d.a)(["\n    display: flex;\n    gap: var(--base-unit);\n"]))),Fe=b.a.h3(fe||(fe=Object(d.a)(["\n    font-size: 1rem;\n"]))),Ne=b.a.button(ve||(ve=Object(d.a)(["\n    border-color: ",";\n    &:hover,\n    &:focus {\n        background-color: var(--gray-20);\n        color: var(--dgray-90);\n    }\n"])),(function(e){return e.active?"var(--green)":"var(--gray-50)"}));function Ae(e){var t=e.filters;return Object(N.jsxs)(Pe,{children:[Object(N.jsx)(Fe,{children:"Show"}),Object(N.jsx)(Le,{children:t&&t.map((function(e){return Object(N.jsx)(Ne,{type:"button",className:"button outline",active:e.active,onClick:e.setActive,children:e.text},e.text)}))})]})}var Ie,ze,Be,We,qe,De=b.a.main(Me||(Me=Object(d.a)(["\n    overflow-y: scroll;\n    padding-top: calc(4rem + var(--base-unit) * 2);\n"])));function He(e){var t=e.inv,n=e.token,a=e.setShowModal,c=e.setInv,i=Object(r.useState)(!0),l=Object(o.a)(i,2),u=l[0],j=l[1],d=Object(r.useState)(!0),b=Object(o.a)(d,2),h=b[0],p=b[1],x=Object(r.useState)(!0),O=Object(o.a)(x,2),f=O[0],v=O[1],g=[{active:u,text:"Flat front",setActive:function(){return j(!u)}},{active:h,text:"Pouch front",setActive:function(){return p(!h)}},{active:f,text:"Compression front",setActive:function(){return v(!f)}}];return Object(N.jsxs)(De,{children:[Object(N.jsx)(Ae,{filters:g}),Object(N.jsxs)("ul",{className:"inv",children:[t&&u&&t.ff.map((function(e){return Object(N.jsx)(Se,{item:e,token:n,setShowModal:a,setInv:function(e){return c(Object(s.a)(Object(s.a)({},t),{},{ff:e}))},inv:t.ff},e.id)})),t&&h&&t.pf.map((function(e){return Object(N.jsx)(Se,{item:e,token:n,setShowModal:a,setInv:function(e){return c(Object(s.a)(Object(s.a)({},t),{},{pf:e}))},inv:t.pf},e.id)})),t&&f&&t.cf.map((function(e){return Object(N.jsx)(Se,{item:e,token:n,setShowModal:a,setInv:function(e){return c(Object(s.a)(Object(s.a)({},t),{},{cf:e}))},inv:t.cf},e.id)})),!t&&Object(N.jsx)("li",{id:"spinner",className:"spinner",children:Object(N.jsx)(Ce,{})})]})]})}var Ue,_e,Ee=b.a.li(Ie||(Ie=Object(d.a)(["\n    display: flex;\n    gap: 2rem;\n    @media screen and (min-width: 1281px) {\n        gap: 4rem;\n    }\n    padding: var(--base-spacing);\n    width: 100%;\n    border-left: 0.5rem solid\n        ",";\n\n    &:hover {\n        background-color: var(--gray-20);\n    }\n"])),(function(e){return e.hasPaid&&e.hasShipped?"var(--green)":e.hasPaid?"var(--yellow)":"var(--gray-20)"})),Te=b.a.address(ze||(ze=Object(d.a)(["\n    flex-grow: 1;\n"]))),Ve=b.a.div(Be||(Be=Object(d.a)([""]))),Je=b.a.span(We||(We=Object(d.a)(["\n    font-size: 1.125rem;\n    font-weight: 500;\n    display: block;\n    margin-bottom: var(--base-unit);\n"]))),Ye=b.a.div(qe||(qe=Object(d.a)(["\n    display: flex;\n    flex-flow: column nowrap;\n    gap: 1rem;\n"])));function Ze(e){var t=e.order,n=e.token,r=e.setShowModal,a=e.setOrders,c=function(e){var n=e.data;r({heading:"Success",text:n.response,ok:function(){return a()((function(e){return e.filter((function(e){return e.id!==t.id}))}))}})},i=function(e){var t=e.data;r({heading:"Error",text:t.error,ok:function(){}})};return Object(N.jsxs)(Ee,{hasPaid:t.hasPaid,hasShipped:t.hasShipped,children:[Object(N.jsxs)("div",{children:[Object(N.jsx)(Je,{children:new Date(t.createdOn).toLocaleString("en-US")}),Object(N.jsxs)("ul",{children:[Object(N.jsxs)("li",{children:["Has paid:"," ",Object(N.jsx)("strong",{children:t.hasPaid?"Yes":"No"})]}),Object(N.jsxs)("li",{children:["Has shipped:"," ",Object(N.jsx)("strong",{children:t.hasShipped?"Yes":"No"})]}),Object(N.jsx)("li",{children:Object(N.jsxs)("strong",{children:["$",t.total]})})]})]}),Object(N.jsxs)(Ve,{children:[Object(N.jsx)(Je,{children:"Items"}),Object(N.jsx)("ul",{children:t.items.map((function(e){return Object(N.jsxs)("li",{children:[e.type," x ",e.quantity]},e.type)}))})]}),Object(N.jsxs)(Te,{children:[Object(N.jsx)("strong",{children:t.name}),Object(N.jsx)("br",{}),Object(N.jsx)("a",{href:"mailto:".concat(t.email),children:t.email}),Object(N.jsx)("br",{}),t.streetAddress,Object(N.jsx)("br",{}),t.city," ",t.state,Object(N.jsx)("br",{}),t.zip.toUpperCase()," ",t.country,Object(N.jsx)("br",{})]}),Object(N.jsxs)(Ye,{children:[Object(N.jsx)("button",{className:"button outline",type:"button",onClick:function(){return m({id:t.id,updatedAttributes:{hasPaid:!t.hasPaid}},n).then((function(){return a()((function(e){return e.map((function(e){return e.id===t.id?Object(s.a)(Object(s.a)({},e),{},{hasPaid:!e.hasPaid}):e}))}))})).catch((function(e){return console.log(e)}))},children:t.hasPaid?"Set Not Paid":"Set Paid"}),Object(N.jsx)("button",{className:"button positive outline",type:"button",onClick:function(){return m({id:t.id,updatedAttributes:{hasShipped:!t.hasShipped}},n).then((function(){return a()((function(e){return e.map((function(e){return e.id===t.id?Object(s.a)(Object(s.a)({},e),{},{hasShipped:!e.hasShipped}):e}))}))})).catch((function(e){return console.log(e)}))},children:t.hasShipped?"Set Not Shipped":"Set Shipped"}),Object(N.jsx)("button",{className:"button danger outline",type:"button",onClick:function(){r({heading:"Confirm deletion",text:"Delete ".concat(t.name,"'s order?'"),ok:function(e){e&&function(e,t){return y.apply(this,arguments)}(t.id,n).then(c).catch(i)}})},children:"Delete Order"})]})]})}var $e,Ge=b.a.main(Ue||(Ue=Object(d.a)(["\n    overflow-y: scroll;\n    padding-top: calc(4rem + var(--base-unit) * 2);\n"]))),Ke=b.a.ul(_e||(_e=Object(d.a)(["\n    display: flex;\n    flex-flow: column nowrap;\n"])));function Qe(e){var t=e.orders,n=e.token,a=e.setShowModal,c=e.setOrders,i=Object(r.useState)({hasPaid:!0,hasShipped:!1}),l=Object(o.a)(i,2),u=l[0],j=l[1],d=Object(r.useState)(!1),b=Object(o.a)(d,2),h=b[0],p=b[1],x=[{active:u.hasShipped&&!h,text:"Has Shipped",setActive:function(){return u.hasShipped?j(Object(s.a)(Object(s.a)({},u),{},{hasShipped:!1})):j(Object(s.a)(Object(s.a)({},u),{},{hasShipped:!0}))}},{active:u.hasPaid&&!h,text:"Has Paid",setActive:function(){return u.hasPaid?j(Object(s.a)(Object(s.a)({},u),{},{hasPaid:!1})):j(Object(s.a)(Object(s.a)({},u),{},{hasPaid:!0}))}},{active:h,text:"All",setActive:function(){return p(!h)}}],O=t&&h?t:t.filter((function(e){for(var t=0,n=Object.entries(u);t<n.length;t++){var r=Object(o.a)(n[t],2),a=r[0],c=r[1];if(e[a]!==c)return!1}return!0}));return Object(N.jsxs)(Ge,{children:[Object(N.jsx)(Ae,{filters:x}),Object(N.jsx)(Ke,{children:t&&O.map((function(e){return Object(N.jsx)(Ze,{token:n,order:e,setShowModal:a,setOrders:function(){return function(e){return c(e)}}},e.id)}))})]})}var Re,Xe,et,tt,nt,rt,at=b.a.div($e||($e=Object(d.a)(["\n    display: flex;\n    flex-flow: column nowrap;\n    padding-top: 4rem;\n    padding-left: ",";\n    height: 100vh;\n    overflow: hidden;\n"])),(function(e){return e.showFull?"12rem":"4rem"}));function ct(e){var t=e.inv,n=e.orders,a=e.token,c=e.setShowModal,i=e.logout,s=e.setOrders,l=e.setInv,u=e.user,j=Object(r.useState)("inventory"),d=Object(o.a)(j,2),b=d[0],h=d[1],p=Object(r.useState)(!0),x=Object(o.a)(p,2),O=x[0],f=x[1],v=n?n.length:0,g=t?[].concat(Object(_.a)(t.ff),Object(_.a)(t.pf),Object(_.a)(t.cf)).length:0;return Object(N.jsxs)(at,{showFull:O,children:[Object(N.jsx)(Q,{text:"Zircus Admin Dashboard",logout:i,user:u}),Object(N.jsx)(se,{page:b,setPage:h,orders:v,inv:g,showFull:O,setShowFull:f}),"inventory"===b&&Object(N.jsx)(He,{inv:t,token:a,setShowModal:c,setInv:l}),"orders"===b&&Object(N.jsx)(Qe,{orders:n,token:a,setShowModal:c,setOrders:s})]})}var it=b.a.div(Re||(Re=Object(d.a)(["\n    ",";\n"])),(function(e){return e.showModal&&"filter: blur(0.25rem)"})),ot=b.a.div(Xe||(Xe=Object(d.a)(["\n    width: 100vw;\n    height: 100vh;\n    top: 0;\n    left: 0;\n    position: fixed;\n"]))),st=b.a.section(et||(et=Object(d.a)(["\n    position: fixed;\n    display: flex;\n    flex-flow: column nowrap;\n    gap: 1rem;\n    backgroud-color: var(--gray-90);\n    top: calc(25%);\n    left: calc(50% - 25vw);\n    width: 50vw;\n    min-height: 15rem;\n    background-color: var(--gray-10);\n    border-radius: var(--big-radius);\n    border: 2px solid var(--dgray-90);\n    padding: var(--base-spacing);\n"]))),lt=b.a.p(tt||(tt=Object(d.a)(["\n    flex-grow: 1;\n"]))),ut=b.a.div(nt||(nt=Object(d.a)(["\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    width: 100%;\n    gap: 1rem;\n"]))),jt=b.a.button(rt||(rt=Object(d.a)(["\n    flex-grow: 1;\n"])));function dt(e){var t=e.children,n=e.showModal,r=e.setShowModal;return Object(N.jsxs)("div",{children:[Object(N.jsxs)(it,{showModal:n,children:[t,n&&Object(N.jsx)(ot,{})]}),n&&Object(N.jsxs)(st,{children:[Object(N.jsx)("h2",{children:n.heading}),Object(N.jsx)(lt,{children:n.text}),Object(N.jsxs)(ut,{children:[Object(N.jsx)(jt,{className:"button",type:"button",onClick:function(){n.ok(!0),r(null)},children:"Ok"}),Object(N.jsx)(jt,{className:"button outline",type:"button",onClick:function(){n.ok(!1),r(null)},children:"Cancel"})]})]})]})}var bt=function(){var e=Object(r.useState)(null),t=Object(o.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(null),i=Object(o.a)(c,2),s=i[0],l=i[1],u=Object(r.useState)(null),j=Object(o.a)(u,2),d=j[0],b=j[1],h=Object(r.useState)(null),p=Object(o.a)(h,2),x=p[0],O=p[1],f=Object(r.useState)(null),m=Object(o.a)(f,2),w=m[0],y=m[1];return Object(r.useEffect)((function(){(function(){return v.apply(this,arguments)})().then((function(e){return b(e.data)})).catch((function(){return b(null)})),s&&function(e){return g.apply(this,arguments)}(s).then((function(e){return O(e.data)})).catch((function(){return O(null)}))}),[b,s]),Object(N.jsx)(dt,{showModal:w,setShowModal:y,children:s?Object(N.jsx)(ct,{inv:d,orders:x,token:s,logout:function(){a(null),l(null),localStorage.removeItem("user"),localStorage.removeItem("token")},setShowModal:y,setOrders:O,setInv:b,user:n}):Object(N.jsx)(q,{setUser:a,setToken:l})})};n(57);i.a.render(Object(N.jsx)(a.a.StrictMode,{children:Object(N.jsx)(bt,{})}),document.getElementById("root"))}},[[58,1,2]]]);
//# sourceMappingURL=main.9c960599.chunk.js.map