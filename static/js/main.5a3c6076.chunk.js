(this["webpackJsonpto-do-list"]=this["webpackJsonpto-do-list"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n=c(1),i=c.n(n),a=c(7),s=c.n(a),d=(c(13),c(14),c(3)),o=c(2),l=(c(15),c(8)),r=c(0),j=function(e){var t=Object(n.useState)({}),c=Object(o.a)(t,2),i=c[0],a=c[1],s=function(e){a({index:parseInt(e.target.id),value:e.target.innerHTML||e.target.value})},d=function(t){"Enter"===t.key&&(e.handleEdit(i.index,i.value),a({}))};return Object(r.jsx)("div",{className:"To-do-list",children:e.listItems.map((function(t,c){return Object(r.jsxs)("div",{className:"div-container",children:[Object(r.jsx)("input",{id:c,type:"checkbox",onChange:e.handleCheckedItem,checked:e.isChecked}),!0===e.isChecked?Object(r.jsx)("label",{children:Object(r.jsx)("s",{children:t})}):c===i.index?Object(r.jsx)("input",{type:"text",id:c,value:i.value,onChange:s,onKeyDown:d}):Object(r.jsx)("label",{id:c,onClick:s,children:t}),!1===e.isChecked?Object(r.jsx)(l.a,{id:c,style:{color:"red",position:"absolute",right:"20px"},onClick:e.handleDelete}):null]},c)}))})},u=(c(17),function(){var e=localStorage.getItem("data")?JSON.parse(localStorage.getItem("data")):{items:[],checkedItems:[]},t=Object(n.useState)(""),c=Object(o.a)(t,2),i=c[0],a=c[1],s=Object(n.useState)(e.items),l=Object(o.a)(s,2),u=l[0],h=l[1],b=Object(n.useState)(e.checkedItems),O=Object(o.a)(b,2),x=O[0],m=O[1],f=function(e){!0===e.target.checked?(m([u[e.target.id]].concat(Object(d.a)(x))),u.splice(e.target.id,1)):(h([x[e.target.id]].concat(Object(d.a)(u))),x.splice(e.target.id,1))},g=function(e){u.splice(e.target.id,1),h(Object(d.a)(u))};return Object(n.useEffect)((function(){localStorage.setItem("data",JSON.stringify({items:u,checkedItems:x}))}),[u,x]),Object(r.jsxs)(n.Fragment,{children:[Object(r.jsx)("div",{children:Object(r.jsx)("figure",{children:Object(r.jsx)("figcaption",{children:"Add Your List Here"})})}),Object(r.jsxs)("div",{children:[Object(r.jsxs)("form",{className:"Todo-from",onSubmit:function(e){e.preventDefault()},children:[Object(r.jsx)("input",{type:"text",placeholder:"Add a todo",value:i,name:"text",className:"Todo-input",onChange:function(e){a(e.target.value)}}),Object(r.jsx)("button",{className:"todo-button",onClick:function(){""!==i&&h([i].concat(Object(d.a)(u)))},children:"Add todo"}),Object(r.jsx)("button",{className:"delete-button",onClick:function(){m([])},children:"Delete all checkedItems "})]}),Object(r.jsx)("h2",{children:"Pending work "}),Object(r.jsx)(j,{listItems:u,handleCheckedItem:f,isChecked:!1,handleEdit:function(e,t){h((function(c){return c[e]=t,Object(d.a)(c)}))},handleDelete:g}),Object(r.jsx)("h2",{children:"Completed work"}),Object(r.jsx)(j,{handleCheckedItem:f,listItems:x,isChecked:!0,handleDelete:g})]})]})});var h=function(){return Object(r.jsx)("div",{className:"App",children:Object(r.jsx)(u,{})})},b=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,19)).then((function(t){var c=t.getCLS,n=t.getFID,i=t.getFCP,a=t.getLCP,s=t.getTTFB;c(e),n(e),i(e),a(e),s(e)}))};s.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(h,{})}),document.getElementById("root")),b()}],[[18,1,2]]]);
//# sourceMappingURL=main.5a3c6076.chunk.js.map