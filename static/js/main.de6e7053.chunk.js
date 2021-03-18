(this["webpackJsonpcontacts-list-react"]=this["webpackJsonpcontacts-list-react"]||[]).push([[0],{25:function(n,e,t){"use strict";t.r(e);var a,r=t(0),i=t.n(r),c=t(10),o=t.n(c),s=t(2),b=t(3),d=b.b.div(a||(a=Object(s.a)(["\n  display: flex;\n  width: 100%;\n  height: 7vh;\n  font-size: 24px;\n  align-items: center;\n  justify-content: center;\n  background-image: linear-gradient(15deg, #13547a 0%, #80d0c7 100%);\n  color: #fff;\n"]))),l=t(1);var j,p,x,u,h,f,g,O,m,v,w=function(){return Object(l.jsx)(d,{children:"Contacts"})},k=t(8),y=t.n(k),C=t(14),z=t(4),_=b.b.div(j||(j=Object(s.a)(["\n  display: flex;\n  height: 7vh;\n  background-color: #000;\n"]))),S=b.b.input(p||(p=Object(s.a)(["\n  width: 100%;\n  font-size: 20px;\n  border: none;\n  padding: 2px 10px;\n\n  &:focus {\n    outline: none;\n  }\n"]))),L=b.b.div(x||(x=Object(s.a)(["\n  display: flex;\n  align-items: center;\n  width: 100vw;\n  height: 10vh;\n  border-bottom: 2px solid #aaa;\n  padding: 5px;\n"]))),E=b.b.img(u||(u=Object(s.a)(["\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  border: 2px solid #aaa;\n"]))),J=b.b.div(h||(h=Object(s.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding-left: 10px;\n"]))),M=b.b.h2(f||(f=Object(s.a)(["\n  font-size: 20px;\n  margin: 0px;\n"]))),T=b.b.p(g||(g=Object(s.a)(["\n  font-size: 14px;\n  margin: 0px;\n"]))),B=b.b.label(O||(O=Object(s.a)(["\n  position: relative;\n  margin-right: 30px;\n"]))),I=b.b.input(m||(m=Object(s.a)(["\n  position: absolute;\n\n  &:checked + span {\n    background-image: linear-gradient(15deg, #13547a 0%, #80d0c7 100%);\n\n    &:before {\n      left: calc(100% - 2px);\n      transform: translateX(-100%);\n    }\n  }\n"]))),X=b.b.span(v||(v=Object(s.a)(['\n  display: flex;\n  cursor: pointer;\n  width: 50px;\n  height: 25px;\n  border-radius: 100px;\n  background-color: #999;\n  position: relative;\n  transition: background-color 0.2s;\n\n  &:before {\n    content: "";\n    position: absolute;\n    top: 2px;\n    left: 2px;\n    width: 21px;\n    height: 21px;\n    border-radius: 45px;\n    transition: 0.2s;\n    background: #fff;\n    box-shadow: 0 2px 4px 0 rgba(0, 35, 11, 0.2);\n  }\n\n  &:active:before{\n    width: 28px;\n  }\n'])));var q,A=function(n){var e=n.avatar,t=n.name,a=n.email,r=n.triggerToggle;return Object(l.jsxs)(L,{children:[Object(l.jsx)(E,{src:e,alt:""}),Object(l.jsxs)(J,{children:[Object(l.jsx)(M,{children:t}),Object(l.jsx)(T,{children:a})]}),Object(l.jsxs)(B,{children:[Object(l.jsx)(I,{type:"checkbox",onChange:r}),Object(l.jsx)(X,{})]})]})},D=b.b.div(q||(q=Object(s.a)(["\n    min-height: 84vh;\n    background-color: #ccc;\n"])));var F=function(){var n=Object(r.useState)([]),e=Object(z.a)(n,2),t=e[0],a=e[1],i=Object(r.useState)(""),c=Object(z.a)(i,2),o=c[0],s=c[1],b=Object(r.useState)(!0),d=Object(z.a)(b,2),j=d[0],p=d[1];Object(r.useEffect)((function(){x()}),[]);var x=function(){var n=Object(C.a)(y.a.mark((function n(){var e,t;return y.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://teacode-recruitment-challenge.s3.eu-central-1.amazonaws.com/users.json");case 2:return e=n.sent,n.next=5,e.json();case 5:t=n.sent,a(t);case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return Object(l.jsxs)(D,{children:[Object(l.jsx)(_,{children:Object(l.jsx)(S,{type:"text",onChange:function(n){s(n.target.value)},placeholder:"Search..."})}),t.sort((function(n,e){return n.last_name.localeCompare(e.last_name)})).filter((function(n){return""===o||n.first_name.toLowerCase().includes(o.toLowerCase())||n.last_name.toLowerCase().includes(o.toLowerCase())?n:0})).map((function(n){return Object(l.jsx)(A,{avatar:n.avatar,name:n.first_name+" "+n.last_name,email:n.email,triggerToggle:function(){p(!j),!0===j&&console.log(n.id)}},n.id)}))]})};var G,H=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)(w,{}),Object(l.jsx)(F,{})]})},K=Object(b.a)(G||(G=Object(s.a)(['\n    * {\n        box-sizing: border-box;\n    }\n    ::after, ::before {\n        box-sizing: inherit;\n    }\n    body {\n        font-family: "Montserrat", sans-serif;\n        margin: 0;\n        padding: 0;\n    }\n'])));o.a.render(Object(l.jsxs)(i.a.StrictMode,{children:[Object(l.jsx)(K,{}),Object(l.jsx)(H,{})]}),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.de6e7053.chunk.js.map