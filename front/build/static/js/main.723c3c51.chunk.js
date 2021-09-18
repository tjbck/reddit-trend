(this["webpackJsonpreddit-trend"]=this["webpackJsonpreddit-trend"]||[]).push([[0],{85:function(e,t,c){"use strict";c.r(t);var n=c(106),a=c(1),i=c(62),r=c.n(i),s=c(108),o=c(65),l=c(99),j=c(103),d=c(98),b=c(109),h=c(101),x=c(97),O=c(53),g=c(87),u=c(69),m=c(54),f=c(3),p=function(e){var t=Object(g.b)().toggleColorMode,c=Object(g.c)("dark","light"),n=Object(g.c)(m.a,m.b);return Object(f.jsx)(a.Fragment,{children:Object(f.jsxs)(u.a,Object(O.a)(Object(O.a)({size:"md",fontSize:"lg","aria-label":"Switch to ".concat(c," mode"),variant:"ghost",color:"current",marginLeft:"2",onClick:t},e),{},{children:[Object(f.jsx)(n,{})," ",Object(f.jsxs)(x.a,{pl:3,children:[" Switch to ",c," mode"]})]}))})},w=function(e){e.title;return Object(f.jsx)("div",{children:Object(f.jsx)(d.a,{p:4,children:Object(f.jsx)(l.a,{children:Object(f.jsxs)(b.a,{spacing:4,maxW:"4xl",textAlign:"center",children:[Object(f.jsx)(p,{}),Object(f.jsxs)(h.a,{fontSize:{base:"3xl",sm:"4xl",md:"6xl"},pb:"4",children:["Reddit post trend prediction"," ",Object(f.jsx)(x.a,{as:"span",color:"orange.400",children:"made easy"})]}),Object(f.jsx)(x.a,{fontSize:"xl",pb:"6",children:"This project explores the possibility of applying machine learning tools for marketing and community engagement purposes. We intend to build a system consisting of several components that analyzes existing Reddit posts and makes plausible predictions about their expected performance in terms of ratings and community interactions."})]})})})})};w.defaultProps={title:"Reddit Tracker"};var v=w,y=c(5),S=c(70),z=c(112),k=c(107),C=c(110);var R=function(){var e=Object(a.useState)(""),t=Object(y.a)(e,2),c=t[0],n=t[1],i=Object(a.useState)(""),r=Object(y.a)(i,2),s=r[0],o=r[1],j=Object(a.useState)("initial"),d=Object(y.a)(j,2),O=d[0],g=d[1],m=Object(a.useState)(!1),p=Object(y.a)(m,2),w=(p[0],p[1]);return Object(f.jsxs)("div",{children:[Object(f.jsx)(l.a,{children:Object(f.jsxs)(b.a,{textAlign:"center",maxW:"560px",minW:"560px",direction:{base:"row"},as:"form",spacing:"12px",onSubmit:function(e){if(e.preventDefault(),w(!1),g("submitting"),alert("Retrieving data from ".concat(c,"...")),t=c,!new RegExp("^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$","i").test(t))return alert("'".concat(c,"' is not a valid URL, Please try again.")),w(!0),void g("initial");var t;fetch("".concat(window.location.protocol,"//").concat(window.location.hostname,"/predict?url=").concat(c)).then((function(e){return e.json()})).then((function(e){if(console.log(e),e.error)throw new Error(e.error);g("success"),o(e.result)})).catch((function(e){alert(e),console.error(e),w(!0),g("initial")}))},children:[Object(f.jsx)(S.a,{children:Object(f.jsx)(z.a,{variant:"outline",placeholder:"Copy and Paste Your Reddit Post URL Here!",onChange:function(e){return function(e){console.log("cliked"),"initial"===O?n(e):g("initial")}(e.target.value)}})}),Object(f.jsx)(S.a,{w:{base:"100%",md:"40%"},children:Object(f.jsx)(u.a,{colorScheme:"success"===O?"green":"blue",isLoading:"submitting"===O,w:"100%",type:"submit",children:"success"===O?Object(f.jsx)(C.a,{}):"Submit"})})]})}),"success"===O&&Object(f.jsx)(l.a,{pt:"5",children:Object(f.jsxs)(b.a,{w:"100%",children:[Object(f.jsxs)(x.a,{children:["Analysis of ",Object(f.jsx)(x.a,{as:"i",children:c})]}),""==s?Object(f.jsx)(k.a,{mt:"4",noOfLines:4,spacing:"4",isLoaded:!1}):Object(f.jsx)(l.a,{pt:"5",children:Object(f.jsxs)(b.a,{children:[Object(f.jsx)(l.a,{pt:"5",children:Object(f.jsx)(x.a,{as:"em",children:" expected rating \ud83d\udcc8"})}),Object(f.jsx)(h.a,{fontSize:{base:"5xl",sm:"6xl",md:"8xl"},children:s.expected_rating})]})})]})})]})},W=c(113),A=c(104),L=c(105),P=c(64),T=function(e){var t=e.children;return Object(f.jsx)(x.a,{fontWeight:"500",fontSize:"lg",mb:2,children:t})};function _(){return Object(f.jsx)(d.a,{bg:Object(g.c)("gray.50","gray.900"),color:Object(g.c)("gray.700","gray.200"),mt:5,children:Object(f.jsx)(j.a,{as:b.a,maxW:"6xl",py:10,children:Object(f.jsxs)(W.a,{templateColumns:{sm:"1fr 1fr",md:"2fr 1fr 1fr 2fr"},spacing:8,children:[Object(f.jsx)(b.a,{spacing:6,children:Object(f.jsxs)(x.a,{fontSize:"sm",children:["\xa9 2021 Agile Project, Reddit Trend ",Object(f.jsx)("br",{}),"by Nikolay, Erik, Janette and Jaeryang"]})}),Object(f.jsx)(b.a,{align:"flex-start"}),Object(f.jsxs)(b.a,{align:"flex-start",children:[Object(f.jsx)(T,{children:"Company"}),Object(f.jsx)(A.a,{href:"#",children:"About us"}),Object(f.jsx)(A.a,{href:"#",children:"Blog"}),Object(f.jsx)(A.a,{href:"#",children:"Contact us"}),Object(f.jsx)(A.a,{href:"#",children:"Pricing"}),Object(f.jsx)(A.a,{href:"#",children:"Testimonials"})]}),Object(f.jsxs)(b.a,{align:"flex-start",children:[Object(f.jsx)(T,{children:"Stay up to date"}),Object(f.jsxs)(b.a,{direction:"row",children:[Object(f.jsx)(z.a,{placeholder:"Your email address",bg:Object(g.c)("blackAlpha.100","whiteAlpha.100"),border:0,_focus:{bg:"whiteAlpha.300"}}),Object(f.jsx)(L.a,{bg:Object(g.c)("green.400","green.800"),color:Object(g.c)("white","gray.800"),_hover:{bg:"green.600"},"aria-label":"Subscribe",icon:Object(f.jsx)(P.a,{})})]})]})]})})})}var F=function(){return Object(f.jsxs)(s.a,{theme:o.theme,children:[Object(f.jsx)(l.a,{w:"100vw",h:"90vh",mb:4,children:Object(f.jsxs)(j.a,{maxW:"5xl",children:[Object(f.jsx)(v,{title:"\ud83e\udd16 Reddit Trend \ud83d\ude80"}),Object(f.jsx)(R,{})]})}),Object(f.jsx)(_,{})]})},B=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,114)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;c(e),n(e),a(e),i(e),r(e)}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(Object(f.jsxs)(a.StrictMode,{children:[Object(f.jsx)(n.a,{}),Object(f.jsx)(F,{})]}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),B()}},[[85,1,2]]]);
//# sourceMappingURL=main.723c3c51.chunk.js.map