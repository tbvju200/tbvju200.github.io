(this["webpackJsonpmy-workstation"]=this["webpackJsonpmy-workstation"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){},18:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var c=n(1),o=n.n(c),a=n(8),r=n.n(a),s=(n(14),n(7)),i=n(9),d=n(2),l=n(3),u=n(5),h=n(4),j=(n(15),n(0)),p=function(e){var t=e.value,n=e.onChange,c=e.onCreate,o=e.onKeypress;return Object(j.jsxs)("div",{className:"form",children:[Object(j.jsx)("input",{value:t,onChange:n,onKeyPress:o}),Object(j.jsx)("div",{className:"create-button",onClick:c,children:"\ucd94\uac00"})]})},b=(n(17),function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"shouldComponentUpdate",value:function(e,t){return this.props.checked!==e.checked}},{key:"render",value:function(){var e=this.props,t=e.text,n=e.checked,c=e.id,o=e.onToggle,a=e.onRemove;return console.log(c),Object(j.jsxs)("div",{className:"todo-item",onClick:function(){return o(c)},children:[Object(j.jsx)("div",{className:"remove",onClick:function(e){e.stopPropagation(),a(c)},children:"\xd7"}),Object(j.jsx)("div",{className:"todo-text ".concat(n&&"checked"),children:Object(j.jsx)("div",{children:t})}),n&&Object(j.jsx)("div",{className:"check-mark",children:"\u2713"})]})}}]),n}(c.Component)),v=b,f=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"shouldComponentUpdate",value:function(e,t){return this.props.todos!==e.todos}},{key:"render",value:function(){var e=this.props,t=e.todos,n=e.onToggle,c=e.onRemove,o=t.map((function(e){var t=e.id,o=e.text,a=e.checked;return Object(j.jsx)(v,{id:t,text:o,checked:a,onToggle:n,onRemove:c},t)}));return Object(j.jsx)("div",{children:o})}}]),n}(c.Component),O=f,m=(n(18),function(e){var t=e.form,n=e.children;return Object(j.jsxs)("main",{className:"todo-list-template",children:[Object(j.jsx)("div",{className:"title",children:"\uc624\ub298 \ud560 \uc77c"}),Object(j.jsx)("section",{className:"form-wrapper",children:t}),Object(j.jsx)("section",{className:"todos-wrapper",children:n})]})}),x=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(d.a)(this,n);for(var c=arguments.length,o=new Array(c),a=0;a<c;a++)o[a]=arguments[a];return(e=t.call.apply(t,[this].concat(o))).id=3,e.state={input:"",todos:[{id:0,text:"\ub9ac\uc561\ud2b8 \uc18c\uac1c",checked:!1},{id:1,text:"\ub9ac\uc561\ud2b8 \uc18c\uac1c",checked:!0},{id:2,text:"\ub9ac\uc561\ud2b8 \uc18c\uac1c",checked:!1}]},e.handleChange=function(t){e.setState({input:t.target.value})},e.handleCreate=function(){var t=e.state,n=t.input,c=t.todos;e.setState({input:"",todos:c.concat({id:e.id++,text:n,checked:!1})})},e.handleKeyPress=function(t){"Enter"===t.key&&e.handleCreate()},e.handleToggle=function(t){var n=e.state.todos,c=n.findIndex((function(e){return e.id===t})),o=n[c],a=Object(i.a)(n);a[c]=Object(s.a)(Object(s.a)({},o),{},{checked:!o.checked}),e.setState({todos:a})},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state,t=e.input,n=e.todos,c=this.handleChange,o=this.handleCreate,a=this.handleKeyPress;return Object(j.jsx)(m,{form:Object(j.jsx)(p,{value:t,onKeypress:a,onChange:c,onCreate:o}),children:Object(j.jsx)(O,{todos:n,onToggle:this.handleToggle})})}}]),n}(c.Component),g=x,k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),c(e),o(e),a(e),r(e)}))};r.a.render(Object(j.jsx)(o.a.StrictMode,{children:Object(j.jsx)(g,{})}),document.getElementById("root")),k()}},[[19,1,2]]]);
//# sourceMappingURL=main.d2bb22fe.chunk.js.map