(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,,,,,,,,,,function(t,n,e){},function(t,n,e){},function(t,n,e){},,function(t,n,e){},function(t,n,e){},function(t,n,e){"use strict";e.r(n);var a=e(1),c=e.n(a),i=e(8),l=e.n(i),r=(e(13),e(2)),o=e(3),s=e(5),d=e(4),j=(e(14),e(15),e(0)),h=function(t){Object(s.a)(e,t);var n=Object(d.a)(e);function e(){return Object(r.a)(this,e),n.apply(this,arguments)}return Object(o.a)(e,[{key:"render",value:function(){return Object(j.jsx)("div",{className:"component-display",children:Object(j.jsx)("div",{children:this.props.value})})}}]),e}(c.a.Component),u=e(6),x=e.n(u);function p(t,n,e){var a=x()(t||"0"),c=x()(n||("\xf7"===e||"x"===e?"1":"0"));if("-"===e)return a.minus(c).toString();if("+"===e)return a.plus(c).toString();if("x"===e)return a.times(c).toString();if("\xf7"===e)return"0"===c?(alert("Can not divide by zero."),"0"):a.div(c).toString();throw Error("Unknown Operation '".concat(e,"'"))}function b(t,n){if("AC"===n)return{total:null,next:null,operation:null};if(/[0-9]+/.test(n))return"0"===n&&"0"===t.next?{}:t.operation?t.next?{next:t.next+n}:{next:n}:t.next?{next:"0"===t.next?n:t.next+n,total:null}:{next:n,total:null};if("%"===n){if(t.operation&&t.next){var e=p(t.total,t.next,t.operation);return{total:x()(e).div(x()("100")).toString(),next:null,operation:null}}return t.next?{next:x()(t.next).div(x()("100")).toString()}:{}}return"."===n?t.next?t.next.includes(".")?{}:{next:t.next+"."}:{next:"0."}:"="===n?t.next&&t.operation?{total:p(t.total,t.next,t.operation),next:null,operation:null}:{}:"+/-"===n?t.next?{next:(-1*parseFloat(t.next)).toString()}:t.total?{total:(-1*parseFloat(t.total)).toString()}:{}:t.operation?{total:p(t.total,t.next,t.operation),next:null,operation:n}:t.next?{total:t.next,next:null,operation:n}:{operation:n}}e(17);var k=function(t){Object(s.a)(e,t);var n=Object(d.a)(e);function e(){var t;Object(r.a)(this,e);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(t=n.call.apply(n,[this].concat(c))).handleClick=function(){t.props.clickHandler(t.props.name)},t}return Object(o.a)(e,[{key:"render",value:function(){var t=["component-button",this.props.orange?"orange":"",this.props.width?"width":""];return Object(j.jsx)("div",{className:t.join(" ").trim(),children:Object(j.jsx)("button",{onClick:this.handleClick,children:this.props.name})})}}]),e}(c.a.Component),O=(e(18),function(t){Object(s.a)(e,t);var n=Object(d.a)(e);function e(){var t;Object(r.a)(this,e);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(t=n.call.apply(n,[this].concat(c))).handleClick=function(n){t.props.clickHandler(n)},t}return Object(o.a)(e,[{key:"render",value:function(){return Object(j.jsxs)("div",{className:"component-button-panel",children:[Object(j.jsxs)("div",{children:[Object(j.jsx)(k,{name:"AC",clickHandler:this.handleClick}),Object(j.jsx)(k,{name:"+/-",clickHandler:this.handleClick}),Object(j.jsx)(k,{name:"%",clickHandler:this.handleClick}),Object(j.jsx)(k,{name:"\xf7",clickHandler:this.handleClick,orange:!0})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)(k,{name:"7",clickHandler:this.handleClick}),Object(j.jsx)(k,{name:"8",clickHandler:this.handleClick}),Object(j.jsx)(k,{name:"9",clickHandler:this.handleClick}),Object(j.jsx)(k,{name:"x",clickHandler:this.handleClick,orange:!0})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)(k,{name:"4",clickHandler:this.handleClick}),Object(j.jsx)(k,{name:"5",clickHandler:this.handleClick}),Object(j.jsx)(k,{name:"6",clickHandler:this.handleClick}),Object(j.jsx)(k,{name:"-",clickHandler:this.handleClick,orange:!0})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)(k,{name:"1",clickHandler:this.handleClick}),Object(j.jsx)(k,{name:"2",clickHandler:this.handleClick}),Object(j.jsx)(k,{name:"3",clickHandler:this.handleClick}),Object(j.jsx)(k,{name:"+",clickHandler:this.handleClick,orange:!0})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)(k,{name:"0",clickHandler:this.handleClick,wide:!0}),Object(j.jsx)(k,{name:".",clickHandler:this.handleClick}),Object(j.jsx)(k,{name:"=",clickHandler:this.handleClick,orange:!0})]})]})}}]),e}(c.a.Component)),m=function(t){Object(s.a)(e,t);var n=Object(d.a)(e);function e(){var t;Object(r.a)(this,e);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(t=n.call.apply(n,[this].concat(c))).state={total:null,next:null,operation:null},t.handleClick=function(n){t.setState(b(t.state,n))},t}return Object(o.a)(e,[{key:"render",value:function(){return Object(j.jsxs)("div",{className:"component-app",children:[Object(j.jsx)(h,{value:this.state.next||this.state.total||"0"}),Object(j.jsx)(O,{clickHandler:this.handleClick}),Object(j.jsx)("footer",{id:"footerName",children:"S M Samnoon Abrar"})]})}}]),e}(c.a.Component),f=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,20)).then((function(n){var e=n.getCLS,a=n.getFID,c=n.getFCP,i=n.getLCP,l=n.getTTFB;e(t),a(t),c(t),i(t),l(t)}))};l.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(m,{})}),document.getElementById("root")),f()}],[[19,1,2]]]);
//# sourceMappingURL=main.a0f31917.chunk.js.map