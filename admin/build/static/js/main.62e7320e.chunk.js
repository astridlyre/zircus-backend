(this.webpackJsonpadmin=this.webpackJsonpadmin||[]).push([[0],{54:function(e,t,n){},55:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(24),i=n.n(c),o=n(4),s=n(7),l=n(6),u=n.n(l),j=n(8),b=n(2),d=n(3),p=n(10),O=n.n(p),x="https://zircus.herokuapp.com/api";function h(e,t){return f.apply(this,arguments)}function f(){return(f=Object(j.a)(u.a.mark((function e(t,n){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.post("".concat(x,"/login"),{username:t,password:n});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(){return(m=Object(j.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("".concat(x,"/inv"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(){return(g=Object(j.a)(u.a.mark((function e(t,n){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.put("".concat(x,"/inv"),t,{headers:{Authorization:"Bearer ".concat(n)}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(e,t,n){var r=Object(a.useState)(t),c=Object(o.a)(r,2),i=c[0],s=c[1];return[{type:e,value:i,onChange:function(e){return s(e.target.value)},placeholder:n},function(){return s(t)}]}var y,w,k,S,C,N,F,L=n(0),z=d.a.main(y||(y=Object(b.a)(["\n    width: 100%;\n    display: flex;\n    flex-flow: column nowrap;\n    align-items: center;\n"]))),I=d.a.form(w||(w=Object(b.a)(["\n    margin-top: var(--base-spacing);\n    padding: var(--md-spacing);\n    background-color: var(--gray-20);\n    border-radius: var(--big-radius);\n    display: flex;\n    flex-flow: column nowrap;\n    gap: 0.5rem;\n"]))),P=d.a.label(k||(k=Object(b.a)(["\n    display: flex;\n    flex-flow: column nowrap;\n    gap: 0.325rem;\n"]))),q=d.a.p(S||(S=Object(b.a)(["\n    color: ",";\n    margin: var(--base-spacing) 0;\n    font-weight: 500;\n"])),(function(e){return e.failedLogin?"var(--red)":"var(--text-color)"})),_=d.a.button(C||(C=Object(b.a)(["\n    margin-top: 1.625rem;\n"])));function B(e){var t=e.setToken,n=e.setUser,r=Object(a.useState)(!1),c=Object(o.a)(r,2),i=c[0],l=c[1],b=v("text",""),d=Object(o.a)(b,1)[0],p=v("password",""),O=Object(o.a)(p,1)[0],x=function(){l(!0),setTimeout((function(){l(!1)}),2e3)},f=function(e){var a=e.data;n(a.name),t(a.token),localStorage.setItem("user",a.name),localStorage.setItem("token",a.token)},m=function(){var e=Object(j.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),h(d.value,O.value).then(f).catch(x);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){var e=localStorage.getItem("token"),a=localStorage.getItem("user");e&&t(e),a&&n(a)}),[t,n]),Object(L.jsx)(z,{children:Object(L.jsxs)(I,{onSubmit:m,children:[Object(L.jsx)("h1",{children:"Zircus Admin"}),Object(L.jsx)(q,{failedLogin:i,children:i?"Login failed":"Please Log in:"}),Object(L.jsxs)(P,{htmlFor:"username",children:[Object(L.jsx)("span",{children:"Username"}),Object(L.jsx)("input",Object(s.a)(Object(s.a)({},d),{},{disabled:!!i}))]}),Object(L.jsxs)(P,{htmlFor:"password",children:[Object(L.jsx)("span",{children:"Password"}),Object(L.jsx)("input",Object(s.a)(Object(s.a)({},O),{},{disabled:!!i}))]}),Object(L.jsx)(_,{className:"button",type:"submit",disabled:!!i,children:i?"Please wait":"Log in"})]})})}var A,E,M,T,U=d.a.header(N||(N=Object(b.a)(["\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 4rem;\n    background: var(--dgray-80);\n    padding: var(--base-spacing);\n"]))),D=d.a.h3(F||(F=Object(b.a)(["\n    color: var(--invert-text-color);\n"])));function J(e){var t=e.text,n=e.logout;return Object(L.jsxs)(U,{children:[Object(L.jsx)(D,{children:t}),Object(L.jsx)("button",{className:"button light outline",type:"button",onClick:n,children:"logout"})]})}var V=d.a.nav(A||(A=Object(b.a)(["\n    position: fixed;\n    top: 4rem;\n    left: 0;\n    bottom: 0;\n    width: 16vw;\n    padding: var(--base-spacing);\n    border-right: 2px solid var(--gray-20);\n"]))),W=d.a.ul(E||(E=Object(b.a)(["\n    list-style: none;\n    display: flex;\n    flex-flow: column nowrap;\n"]))),Z=d.a.li(M||(M=Object(b.a)(["\n    margin: var(--base-unit) 0;\n    width: 100%;\n    display: flex;\n"]))),H=d.a.button(T||(T=Object(b.a)(["\n    flex-grow: 1;\n"])));function G(e){var t=e.setPage,n=e.page;return Object(L.jsx)(V,{children:Object(L.jsxs)(W,{children:[Object(L.jsx)(Z,{children:Object(L.jsx)(H,{className:"inventory"===n?"button":"button outline",onClick:function(){return t("inventory")},children:"Inventory"})}),Object(L.jsx)(Z,{children:Object(L.jsx)(H,{className:"order"===n?"button":"button outline",onClick:function(){return t("orders")},children:"Orders"})}),Object(L.jsx)(Z,{children:Object(L.jsx)(H,{className:"metrics"===n?"button":"button outline",onClick:function(){return t("metrics")},children:"Metrics"})})]})})}var K,Q,R,X,Y,$=n(9);function ee(){return Object(L.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[Object(L.jsx)("polyline",{points:"3 6 5 6 21 6"}),Object(L.jsx)("path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"})]})}var te,ne,ae,re,ce=d.a.li(K||(K=Object(b.a)(["\n    display: flex;\n    width: 100%;\n    align-items: center;\n    gap: 2rem;\n    border-top: 2px solid var(--gray-20);\n    padding: 1rem;\n\n    &:hover {\n        background-color: var(--gray-20);\n    }\n"]))),ie=d.a.img(Q||(Q=Object(b.a)(["\n    max-height: 2rem;\n"]))),oe=d.a.p(R||(R=Object(b.a)(["\n    font-size: 1.125rem;\n    flex-grow: 1;\n"]))),se=d.a.p(X||(X=Object(b.a)(["\n    font-weight: 500;\n"]))),le=d.a.label(Y||(Y=Object(b.a)(["\n    display: flex;\n    align-items: center;\n    margin: 0;\n    gap: 0.5rem;\n"])));function ue(e){var t=e.item,n=e.token,r=Object(a.useState)(t.quantity),c=Object(o.a)(r,2),i=c[0],l=c[1],u=Object(a.useState)(t.active),j=Object(o.a)(u,2),b=j[0],d=j[1],p=Object(a.useState)(t.price),O=Object(o.a)(p,2),x=O[0],h=O[1],f=function(e,a){return function(r){a(r.target.value),function(e,t){return g.apply(this,arguments)}(Object(s.a)(Object(s.a)({},t),{},Object($.a)({},e,r.target.value)),n).catch((function(e){return console.log(e)}))}},m=f("quantity",l),v=f("active",d),y=f("price",h);return Object(L.jsxs)(ce,{children:[Object(L.jsx)(ie,{src:"https://zircus.netlify.app/".concat(t.images.sm_a),alt:t.name,className:"inventory__item__img"}),Object(L.jsx)(oe,{children:t.name}),Object(L.jsx)(se,{children:t.size}),Object(L.jsx)(se,{children:t.color}),Object(L.jsxs)(le,{htmlFor:"".concat(t.id,"-price"),children:[Object(L.jsx)(se,{children:"price"}),Object(L.jsx)("input",{min:"0",step:"1",size:"5",type:"number",id:"".concat(t.id,"-price"),value:x,onChange:y})]}),Object(L.jsxs)(le,{htmlFor:"".concat(t.id,"-quantity"),children:[Object(L.jsx)(se,{children:"quantity"}),Object(L.jsx)("input",{min:"0",step:"1",size:"5",type:"number",id:"".concat(t.id,"-quantity"),value:i,onChange:m})]}),Object(L.jsxs)(le,{htmlFor:"active",children:[Object(L.jsx)(se,{children:"active"}),Object(L.jsx)("input",{type:"checkbox",checked:!!b,onChange:v})]}),Object(L.jsx)("button",{type:"button",className:"button danger icon-button",children:Object(L.jsx)(ee,{})})]})}function je(){return Object(L.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"icon",children:[Object(L.jsx)("line",{x1:"12",y1:"2",x2:"12",y2:"6"}),Object(L.jsx)("line",{x1:"12",y1:"18",x2:"12",y2:"22"}),Object(L.jsx)("line",{x1:"4.93",y1:"4.93",x2:"7.76",y2:"7.76"}),Object(L.jsx)("line",{x1:"16.24",y1:"16.24",x2:"19.07",y2:"19.07"}),Object(L.jsx)("line",{x1:"2",y1:"12",x2:"6",y2:"12"}),Object(L.jsx)("line",{x1:"18",y1:"12",x2:"22",y2:"12"}),Object(L.jsx)("line",{x1:"4.93",y1:"19.07",x2:"7.76",y2:"16.24"}),Object(L.jsx)("line",{x1:"16.24",y1:"7.76",x2:"19.07",y2:"4.93"})]})}var be,de=d.a.div(te||(te=Object(b.a)(["\n    position: fixed;\n    right: var(--base-spacing);\n    top: calc(4rem + var(--base-spacing));\n    margin-left: var(--base-spacing);\n    padding: var(--base-spacing);\n    background-color: var(--gray-20);\n    border-radius: var(--big-radius);\n    display: flex;\n    align-items: center;\n    gap: 1rem;\n"]))),pe=d.a.div(ne||(ne=Object(b.a)(["\n    display: flex;\n    gap: 1rem;\n"]))),Oe=d.a.h3(ae||(ae=Object(b.a)(["\n    font-size: 1.125rem;\n"]))),xe=d.a.main(re||(re=Object(b.a)(["\n    overflow-y: scroll;\n    padding-top: 8rem;\n"])));function he(e){var t=e.inv,n=e.token,r=Object(a.useState)(!0),c=Object(o.a)(r,2),i=c[0],s=c[1],l=Object(a.useState)(!0),u=Object(o.a)(l,2),j=u[0],b=u[1],d=Object(a.useState)(!0),p=Object(o.a)(d,2),O=p[0],x=p[1];return Object(L.jsxs)(xe,{children:[Object(L.jsxs)(de,{children:[Object(L.jsx)(Oe,{children:"Filter by"}),Object(L.jsxs)(pe,{children:[Object(L.jsx)("button",{type:"button",className:i?"button":"button outline",onClick:function(){return s(!i)},children:"Flat Front"}),Object(L.jsx)("button",{type:"button",className:j?"button active":"button outline",onClick:function(){return b(!j)},children:"Pouch Front"}),Object(L.jsx)("button",{type:"button",className:O?"button active":"button outline",onClick:function(){return x(!O)},children:"Compression Front"})]})]}),Object(L.jsxs)("ul",{className:"inv",children:[t&&i&&t.ff.map((function(e){return Object(L.jsx)(ue,{item:e,token:n},e.id)})),t&&j&&t.pf.map((function(e){return Object(L.jsx)(ue,{item:e,token:n},e.id)})),t&&O&&t.cf.map((function(e){return Object(L.jsx)(ue,{item:e,token:n},e.id)})),!t&&Object(L.jsx)("li",{id:"spinner",className:"spinner",children:Object(L.jsx)(je,{})})]})]})}var fe=d.a.div(be||(be=Object(b.a)(["\n    display: flex;\n    flex-flow: column nowrap;\n    padding-top: 4rem;\n    padding-left: 16vw;\n    height: 100vh;\n    overflow: hidden;\n"])));function me(e){var t=e.inv,n=e.token,r=e.logout,c=Object(a.useState)("inventory"),i=Object(o.a)(c,2),s=i[0],l=i[1];return Object(L.jsxs)(fe,{children:[Object(L.jsx)(J,{text:"Zircus Admin Dashboard",logout:r}),Object(L.jsx)(G,{page:s,setPage:l}),"inventory"===s&&Object(L.jsx)(he,{inv:t,token:n})]})}var ge=function(){var e=Object(a.useState)(null),t=Object(o.a)(e,2),n=(t[0],t[1]),r=Object(a.useState)(null),c=Object(o.a)(r,2),i=c[0],s=c[1],l=Object(a.useState)(null),u=Object(o.a)(l,2),j=u[0],b=u[1];return Object(a.useEffect)((function(){(function(){return m.apply(this,arguments)})().then((function(e){return b(e.data)})).catch((function(){return b(null)}))}),[b]),i?Object(L.jsx)(me,{inv:j,token:i,logout:function(){n(null),s(null),localStorage.removeItem("user"),localStorage.removeItem("token")}}):Object(L.jsx)(B,{setUser:n,setToken:s})};n(54);i.a.render(Object(L.jsx)(r.a.StrictMode,{children:Object(L.jsx)(ge,{})}),document.getElementById("root"))}},[[55,1,2]]]);
//# sourceMappingURL=main.62e7320e.chunk.js.map