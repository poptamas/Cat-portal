(this["webpackJsonpthe-cat-dog-portal"]=this["webpackJsonpthe-cat-dog-portal"]||[]).push([[0],{26:function(e,t,a){e.exports=a(46)},46:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(22),l=a.n(r),i=a(6),o=function(){return c.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark",style:{position:"fixed",width:"100vw"}},c.a.createElement("div",{className:"container-fluid"},c.a.createElement("div",{className:"collapse navbar-collapse ",id:"navbarNavAltMarkup"},c.a.createElement("div",{className:"navbar-nav"},c.a.createElement(i.c,{to:"/home",className:"nav-link text-light"},"Home"),c.a.createElement(i.c,{to:"/upload",className:"nav-link text-light"},"Upload images"),c.a.createElement(i.c,{to:"/myimages",className:"nav-link text-light"},"My images"),c.a.createElement(i.c,{to:"/publicimages",className:"nav-link text-light"},"Public images")))))},s=a(8),m=a.n(s),u=a(11),p=a(7),f=(a(37),a(25)),h=function(){var e=Object(n.useState)([]),t=Object(p.a)(e,2),a=t[0],r=t[1],l=function(){var e=Object(u.a)(m.a.mark((function e(){var t,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.thecatapi.com/v1/images/?limit=10& ",{method:"GET",headers:{Accept:"application/json","x-api-key":"709ca42e-10f2-465f-a296-07ffb1b5276a"}});case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,r(a);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){l()}),[]),c.a.createElement("div",null,c.a.createElement("div",null,"My images"),c.a.createElement(f.Carousel,{autoPlay:!0,infiniteLoop:!0,width:700,thumbWidth:50},a.map((function(e){return c.a.createElement("div",{style:{marginTop:"30%"}},c.a.createElement("img",{src:e.url,alt:"Images",key:e.id}))}))))},d=function(){var e=Object(n.useState)(""),t=Object(p.a)(e,2),a=t[0],r=t[1];return c.a.createElement("div",{className:"bg-secondary"},c.a.createElement("div",{className:"d-flex justify-content-center align-items-center",style:{height:"100vh"}},c.a.createElement("div",{className:"bg-dark pt-5 pl-5 pr-5 pb-4 rounded d-flex flex-column",style:{width:"50vw"}},c.a.createElement("label",{className:"form-label align-self-center"},c.a.createElement("h3",{className:"text-light pb-3"},c.a.createElement("b",null,"Upload an image"))),c.a.createElement("input",{className:"form-control form-control p-1",type:"file",name:"file",id:"formFile",onChange:function(e){r(e.target.files[0])}}),c.a.createElement("button",{className:"btn btn-light ml-auto mt-4",onClick:function(){var e=new FormData;console.log(a),e.append("file",a),fetch("https://api.thecatapi.com/v1/images/upload?api_key=709ca42e-10f2-465f-a296-07ffb1b5276a",{method:"POST",body:e}).then((function(e){return e.json()})).then((function(e){console.log("Success:",e)})).catch((function(e){console.error("Error:",e)}))}},"Upload"))))},v=function(){var e=Object(n.useState)(3),t=Object(p.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)([]),i=Object(p.a)(l,2),o=i[0],s=i[1],f=Object(n.useState)([]),h=Object(p.a)(f,2),d=h[0],v=h[1],b=function(){var e=Object(u.a)(m.a.mark((function e(t){var n,c,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.thecatapi.com/v1/images/search?limit=".concat(a,"&category_ids=").concat(t),{method:"GET",headers:{Accept:"application/json","x-api-key":"709ca42e-10f2-465f-a296-07ffb1b5276a"}});case 2:if(200===(n=e.sent).status){e.next=6;break}throw c="Something went wrong ".concat(n.status),new Error(c);case 6:return e.next=8,n.json();case 8:r=e.sent,s(r);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=function(){var e=Object(u.a)(m.a.mark((function e(){var t,a,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.thecatapi.com/v1/categories",{method:"GET",headers:{Accept:"application/json","x-api-key":"709ca42e-10f2-465f-a296-07ffb1b5276a"}});case 2:if(200===(t=e.sent).status){e.next=6;break}throw a="Something went wrong ".concat(t.status),new Error(a);case 6:return e.next=8,t.json();case 8:n=e.sent,v(n);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){b(),E()}),[]),c.a.createElement("div",null,c.a.createElement("div",{style:{width:"100vw"},className:"text-center"},c.a.createElement("select",{style:{marginTop:"100px"},onChange:function(e){return b(e.target.value)}},d.map((function(e){return c.a.createElement("option",{value:e.id},e.name)}))),c.a.createElement("select",{style:{marginTop:"100px"},onChange:function(e){r(e.target.value)},"aria-label":"Default select example"},c.a.createElement("option",{value:"3"},"3"),c.a.createElement("option",{value:"9"},"9"),c.a.createElement("option",{value:"15"},"15"))),c.a.createElement("div",{style:{width:"100vw",position:"relative",zIndex:"-1"},className:"d-flex justify-content-center"},c.a.createElement("div",{style:{width:"70vw"}},o.map((function(e){return c.a.createElement("img",{className:"col-4 align-self-center",src:e.url,value:e.id,alt:"Images"})})))))},b=a(1);a(45);var E=function(){return c.a.createElement(i.b,null,c.a.createElement(o,null),c.a.createElement(b.c,null,c.a.createElement(b.a,{path:"/upload",component:d}),c.a.createElement(b.a,{path:"/myimages",component:h}),c.a.createElement(b.a,{path:"/publicimages",component:v}),c.a.createElement(b.a,{path:"/home"})))};l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(i.a,null,c.a.createElement(E,null))),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.8624e4c4.chunk.js.map