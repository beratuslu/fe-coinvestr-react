(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{1094:function(e,t,n){"use strict";var r=n(108),o=n.n(r),a=n(23),c=n.n(a),i=n(29),u=n.n(i),s=n(28),l=n.n(s),p=n(31),f=n.n(p),d=n(0),h=n.n(d),b=n(1),y=n.n(b),v=n(19),m=n.n(v),g=n(37),O=function(e){function t(n){u()(this,t);var r=l()(this,e.call(this,n));r.handleChange=function(e){var t=r.props,n=t.disabled,o=t.onChange;n||("checked"in r.props||r.setState({checked:e.target.checked}),o&&o({target:c()({},r.props,{checked:e.target.checked}),stopPropagation:function(){e.stopPropagation()},preventDefault:function(){e.preventDefault()},nativeEvent:e.nativeEvent}))},r.saveInput=function(e){r.input=e};var o="checked"in n?n.checked:n.defaultChecked;return r.state={checked:o},r}return f()(t,e),t.getDerivedStateFromProps=function(e,t){return"checked"in e?c()({},t,{checked:e.checked}):null},t.prototype.focus=function(){this.input.focus()},t.prototype.blur=function(){this.input.blur()},t.prototype.render=function(){var e,t=this.props,n=t.prefixCls,r=t.className,a=t.style,i=t.name,u=t.id,s=t.type,l=t.disabled,p=t.readOnly,f=t.tabIndex,d=t.onClick,b=t.onFocus,y=t.onBlur,v=t.autoFocus,g=t.value,O=o()(t,["prefixCls","className","style","name","id","type","disabled","readOnly","tabIndex","onClick","onFocus","onBlur","autoFocus","value"]),k=Object.keys(O).reduce(function(e,t){return"aria-"!==t.substr(0,5)&&"data-"!==t.substr(0,5)&&"role"!==t||(e[t]=O[t]),e},{}),x=this.state.checked,C=m()(n,r,((e={})[n+"-checked"]=x,e[n+"-disabled"]=l,e));return h.a.createElement("span",{className:C,style:a},h.a.createElement("input",c()({name:i,id:u,type:s,readOnly:p,disabled:l,tabIndex:f,className:n+"-input",checked:!!x,onClick:d,onFocus:b,onBlur:y,onChange:this.handleChange,autoFocus:v,ref:this.saveInput,value:g},k)),h.a.createElement("span",{className:n+"-inner"}))},t}(d.Component);O.propTypes={prefixCls:y.a.string,className:y.a.string,style:y.a.object,name:y.a.string,id:y.a.string,type:y.a.string,defaultChecked:y.a.oneOfType([y.a.number,y.a.bool]),checked:y.a.oneOfType([y.a.number,y.a.bool]),disabled:y.a.bool,onFocus:y.a.func,onBlur:y.a.func,onChange:y.a.func,onClick:y.a.func,tabIndex:y.a.oneOfType([y.a.string,y.a.number]),readOnly:y.a.bool,autoFocus:y.a.bool,value:y.a.any},O.defaultProps={prefixCls:"rc-checkbox",className:"",style:{},type:"checkbox",defaultChecked:!1,onFocus:function(){},onBlur:function(){},onChange:function(){}},Object(g.polyfill)(O);var k=O;t.a=k},1153:function(e,t,n){"use strict";var r=n(4),o=n(27),a=n(26),c=n(9);function i(){var e=Object(o.a)(["\n  &.ant-checkbox-wrapper {\n    font-size: 13px;\n    color: ",";\n    vertical-align: middle;\n\n    .ant-checkbox {\n      top: inherit;\n    }\n  }\n"]);return i=function(){return e},e}var u=function(e){return Object(a.d)(e)(i(),Object(c.palette)("text",1))};n.d(t,"a",function(){return l});var s=u(r.a),l=r.a.Group;t.b=s},1656:function(e,t,n){"use strict";n.d(t,"a",function(){return O});var r=n(5),o=n.n(r),a=n(33),c=n(11),i=n(12),u=n(17),s=n(15),l=n(16),p=n(10),f=n(0),d=n.n(f),h=n(1047),b=n(110),y=n(347),v=n(1063),m=n(58);function g(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var n,r=Object(p.a)(e);if(t){var o=Object(p.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var O=function(e){Object(s.a)(n,e);var t=g(n);function n(){var e;Object(c.a)(this,n);for(var r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).state={visible:!1,email:"demo@gmail.com",password:"demodemo",confirmLoading:!1},e.showModal=function(){e.setState({visible:!0})},e.handleCancel=function(t){e.setState({visible:!1})},e.handleLogin=Object(a.a)(o.a.mark(function t(){var n,r,a,c,i,s,l,p;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(n=e.state,r=n.email,a=n.password,r&&a){t.next=4;break}return Object(v.c)("error","Please fill in email. and password"),t.abrupt("return");case 4:if(e.setState({confirmLoading:!0}),c=Object(u.a)(e),!e.props.signup){t.next=12;break}return t.next=9,m.a.signup(m.a.EMAIL,{email:r,password:a});case 9:i=t.sent,t.next=15;break;case 12:return t.next=14,m.a.login(m.a.EMAIL,{email:r,password:a});case 14:i=t.sent;case 15:if(s=!(!i||!i.user)&&i.user,l=!1===s&&i&&i.message?i.message:"Sorry Some error occurs",!s){t.next=25;break}return t.next=20,s.getIdToken();case 20:p=t.sent,e.props.login(p),e.props.history.push("/dashboard"),t.next=27;break;case 25:Object(v.c)("error",l),c.setState({confirmLoading:!1});case 27:case"end":return t.stop()}},t)})),e.resetPassword=function(){var t=e.state.email;t?m.a.resetPassword(t).then(function(){return Object(v.c)("success","Password reset email sent to ".concat(t,"."))}).catch(function(e){return Object(v.c)("error","Email address not found.")}):Object(v.c)("error","Please fill in email.")},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this;return d.a.createElement("div",null,d.a.createElement(h.b,{type:"primary",onClick:this.showModal,className:"btnFirebase"},this.props.signup?"Sign up with Firebase":"Sign in with Firebase"),d.a.createElement(y.a,{title:this.props.signup?"Sign up with Firebase":"Sign in with Firebase",visible:this.state.visible,confirmLoading:this.state.confirmLoading,onCancel:this.handleCancel,onOk:this.handleLogin,className:"isoFirebaseLoginModal",cancelText:"Cancel",okText:"Login"},d.a.createElement("form",null,d.a.createElement("div",{className:"isoInputWrapper"},d.a.createElement("label",null,"Email"),d.a.createElement(b.d,{ref:function(t){return e.email=t},size:"large",placeholder:"Email",value:this.state.email,onChange:function(t){e.setState({email:t.target.value})}})),d.a.createElement("div",{className:"isoInputWrapper",style:{marginBottom:10}},d.a.createElement("label",null,"Password"),d.a.createElement(b.d,{type:"password",size:"large",placeholder:"Password",value:this.state.password,onChange:function(t){e.setState({password:t.target.value})}})),d.a.createElement("span",{className:"isoResetPass",onClick:this.resetPassword},"Reset Password"))))}}]),n}(f.Component)},4:function(e,t,n){"use strict";var r=n(0),o=n(1),a=n(37),c=n(19),i=n.n(c),u=n(1094),s=n(244),l=n.n(s),p=n(2738),f=n(40);function d(e){return(d="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function m(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var n,r=O(e);if(t){var o=O(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return function(e,t){if(t&&("object"===d(t)||"function"===typeof t))return t;return g(e)}(this,n)}}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function O(e){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var k=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},x=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(c,r["Component"]);var t,n,o,a=m(c);function c(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(e=a.apply(this,arguments)).saveCheckbox=function(t){e.rcCheckbox=t},e.renderCheckbox=function(t){var n,o=t.getPrefixCls,a=g(e),c=a.props,s=a.context,l=c.prefixCls,p=c.className,f=c.children,d=c.indeterminate,y=c.style,v=c.onMouseEnter,m=c.onMouseLeave,O=k(c,["prefixCls","className","children","indeterminate","style","onMouseEnter","onMouseLeave"]),x=s.checkboxGroup,C=o("checkbox",l),w=b({},O);x&&(w.onChange=function(){O.onChange&&O.onChange.apply(O,arguments),x.toggleOption({label:f,value:c.value})},w.name=x.name,w.checked=-1!==x.value.indexOf(c.value),w.disabled=c.disabled||x.disabled);var j=i()(p,(h(n={},"".concat(C,"-wrapper"),!0),h(n,"".concat(C,"-wrapper-checked"),w.checked),h(n,"".concat(C,"-wrapper-disabled"),w.disabled),n)),S=i()(h({},"".concat(C,"-indeterminate"),d));return r.createElement("label",{className:j,style:y,onMouseEnter:v,onMouseLeave:m},r.createElement(u.a,b({},w,{prefixCls:C,className:S,ref:e.saveCheckbox})),void 0!==f&&r.createElement("span",null,f))},e}return t=c,(n=[{key:"componentDidMount",value:function(){var e=this.props.value,t=(this.context||{}).checkboxGroup,n=void 0===t?{}:t;n.registerValue&&n.registerValue(e),Object(f.a)("checked"in this.props||(this.context||{}).checkboxGroup||!("value"in this.props),"Checkbox","`value` is not validate prop, do you mean `checked`?")}},{key:"shouldComponentUpdate",value:function(e,t,n){return!l()(this.props,e)||!l()(this.state,t)||!l()(this.context.checkboxGroup,n.checkboxGroup)}},{key:"componentDidUpdate",value:function(e){var t=e.value,n=this.props.value,r=(this.context||{}).checkboxGroup,o=void 0===r?{}:r;n!==t&&o.registerValue&&o.cancelValue&&(o.cancelValue(t),o.registerValue(n))}},{key:"componentWillUnmount",value:function(){var e=this.props.value,t=(this.context||{}).checkboxGroup,n=void 0===t?{}:t;n.cancelValue&&n.cancelValue(e)}},{key:"focus",value:function(){this.rcCheckbox.focus()}},{key:"blur",value:function(){this.rcCheckbox.blur()}},{key:"render",value:function(){return r.createElement(p.a,null,this.renderCheckbox)}}])&&y(t.prototype,n),o&&y(t,o),c}();x.__ANT_CHECKBOX=!0,x.defaultProps={indeterminate:!1},x.contextTypes={checkboxGroup:o.any},Object(a.polyfill)(x);var C=x,w=n(72);function j(e){return(j="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function S(){return(S=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function E(e){return function(e){if(Array.isArray(e))return P(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return P(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return P(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function P(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function V(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function N(e,t){return(N=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function R(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var n,r=I(e);if(t){var o=I(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return function(e,t){if(t&&("object"===j(t)||"function"===typeof t))return t;return _(e)}(this,n)}}function _(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function I(e){return(I=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var F=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},T=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&N(e,t)}(c,r["Component"]);var t,n,o,a=R(c);function c(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(t=a.call(this,e)).cancelValue=function(e){t.setState(function(t){return{registeredValues:t.registeredValues.filter(function(t){return t!==e})}})},t.registerValue=function(e){t.setState(function(t){var n=t.registeredValues;return{registeredValues:[].concat(E(n),[e])}})},t.toggleOption=function(e){var n=t.state.registeredValues,r=t.state.value.indexOf(e.value),o=E(t.state.value);-1===r?o.push(e.value):o.splice(r,1),"value"in t.props||t.setState({value:o});var a=t.props.onChange;if(a){var c=t.getOptions();a(o.filter(function(e){return-1!==n.indexOf(e)}).sort(function(e,t){return c.findIndex(function(t){return t.value===e})-c.findIndex(function(e){return e.value===t})}))}},t.renderGroup=function(e){var n=e.getPrefixCls,o=_(t),a=o.props,c=o.state,u=a.prefixCls,s=a.className,l=a.style,p=a.options,f=F(a,["prefixCls","className","style","options"]),d=n("checkbox",u),h="".concat(d,"-group"),b=Object(w.a)(f,["children","defaultValue","value","onChange","disabled"]),y=a.children;p&&p.length>0&&(y=t.getOptions().map(function(e){return r.createElement(C,{prefixCls:d,key:e.value.toString(),disabled:"disabled"in e?e.disabled:a.disabled,value:e.value,checked:-1!==c.value.indexOf(e.value),onChange:e.onChange,className:"".concat(h,"-item")},e.label)}));var v=i()(h,s);return r.createElement("div",S({className:v,style:l},b),y)},t.state={value:e.value||e.defaultValue||[],registeredValues:[]},t}return t=c,o=[{key:"getDerivedStateFromProps",value:function(e){return"value"in e?{value:e.value||[]}:null}}],(n=[{key:"getChildContext",value:function(){return{checkboxGroup:{toggleOption:this.toggleOption,value:this.state.value,disabled:this.props.disabled,name:this.props.name,registerValue:this.registerValue,cancelValue:this.cancelValue}}}},{key:"shouldComponentUpdate",value:function(e,t){return!l()(this.props,e)||!l()(this.state,t)}},{key:"getOptions",value:function(){return this.props.options.map(function(e){return"string"===typeof e?{label:e,value:e}:e})}},{key:"render",value:function(){return r.createElement(p.a,null,this.renderGroup)}}])&&V(t.prototype,n),o&&V(t,o),c}();T.defaultProps={options:[]},T.propTypes={defaultValue:o.array,value:o.array,options:o.array.isRequired,onChange:o.func},T.childContextTypes={checkboxGroup:o.any},Object(a.polyfill)(T);var G=T;C.Group=G;t.a=C}}]);
//# sourceMappingURL=14.7e54e231.chunk.js.map