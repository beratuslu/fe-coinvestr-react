(window.webpackJsonp=window.webpackJsonp||[]).push([[57,129,130,131,132],{1031:function(t,e,n){"use strict";var r=n(109),i=n.n(r)()({});e.a=i},1032:function(t,e){t.exports={isFunction:function(t){return"function"===typeof t},isArray:function(t){return"[object Array]"===Object.prototype.toString.apply(t)},each:function(t,e){for(var n=0,r=t.length;n<r&&!1!==e(t[n],n);n++);}}},1033:function(t,e,n){var r=n(1034);t.exports=new r},1034:function(t,e,n){var r=n(1035),i=n(1032),a=i.each,o=i.isFunction,c=i.isArray;function l(){if(!window.matchMedia)throw new Error("matchMedia not present, legacy browsers require a polyfill");this.queries={},this.browserIsIncapable=!window.matchMedia("only all").matches}l.prototype={constructor:l,register:function(t,e,n){var i=this.queries,l=n&&this.browserIsIncapable;return i[t]||(i[t]=new r(t,l)),o(e)&&(e={match:e}),c(e)||(e=[e]),a(e,function(e){o(e)&&(e={match:e}),i[t].addHandler(e)}),this},unregister:function(t,e){var n=this.queries[t];return n&&(e?n.removeHandler(e):(n.clear(),delete this.queries[t])),this}},t.exports=l},1035:function(t,e,n){var r=n(1036),i=n(1032).each;function a(t,e){this.query=t,this.isUnconditional=e,this.handlers=[],this.mql=window.matchMedia(t);var n=this;this.listener=function(t){n.mql=t.currentTarget||t,n.assess()},this.mql.addListener(this.listener)}a.prototype={constuctor:a,addHandler:function(t){var e=new r(t);this.handlers.push(e),this.matches()&&e.on()},removeHandler:function(t){var e=this.handlers;i(e,function(n,r){if(n.equals(t))return n.destroy(),!e.splice(r,1)})},matches:function(){return this.mql.matches||this.isUnconditional},clear:function(){i(this.handlers,function(t){t.destroy()}),this.mql.removeListener(this.listener),this.handlers.length=0},assess:function(){var t=this.matches()?"on":"off";i(this.handlers,function(e){e[t]()})}},t.exports=a},1036:function(t,e){function n(t){this.options=t,!t.deferSetup&&this.setup()}n.prototype={constructor:n,setup:function(){this.options.setup&&this.options.setup(),this.initialised=!0},on:function(){!this.initialised&&this.setup(),this.options.match&&this.options.match()},off:function(){this.options.unmatch&&this.options.unmatch()},destroy:function(){this.options.destroy?this.options.destroy():this.off()},equals:function(t){return this.options===t||this.options.match===t}},t.exports=n},1037:function(t,e,n){"use strict";var r=n(1041);e.a=r.a},1041:function(t,e,n){"use strict";n.d(e,"a",function(){return x});var r=n(0),i=n(1),a=n(19),o=n.n(a),c=n(1031),l=n(2738);function u(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function s(){return(s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function f(t){return(f="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function p(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function d(t,e){return(d=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function m(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}();return function(){var n,r=y(t);if(e){var i=y(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return function(t,e){if(e&&("object"===f(e)||"function"===typeof e))return e;return h(t)}(this,n)}}function h(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function y(t){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var b=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]])}return n},g=i.oneOfType([i.object,i.number]),x=function(t){!function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&d(t,e)}(y,r["Component"]);var e,n,i,a=m(y);function y(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,y),(t=a.apply(this,arguments)).renderCol=function(e){var n,i=e.getPrefixCls,a=h(t).props,l=a.prefixCls,p=a.span,d=a.order,m=a.offset,y=a.push,g=a.pull,x=a.className,v=a.children,w=b(a,["prefixCls","span","order","offset","push","pull","className","children"]),O=i("col",l),E={};["xs","sm","md","lg","xl","xxl"].forEach(function(t){var e,n={},r=a[t];"number"===typeof r?n.span=r:"object"===f(r)&&(n=r||{}),delete w[t],E=s(s({},E),(u(e={},"".concat(O,"-").concat(t,"-").concat(n.span),void 0!==n.span),u(e,"".concat(O,"-").concat(t,"-order-").concat(n.order),n.order||0===n.order),u(e,"".concat(O,"-").concat(t,"-offset-").concat(n.offset),n.offset||0===n.offset),u(e,"".concat(O,"-").concat(t,"-push-").concat(n.push),n.push||0===n.push),u(e,"".concat(O,"-").concat(t,"-pull-").concat(n.pull),n.pull||0===n.pull),e))});var j=o()(O,(u(n={},"".concat(O,"-").concat(p),void 0!==p),u(n,"".concat(O,"-order-").concat(d),d),u(n,"".concat(O,"-offset-").concat(m),m),u(n,"".concat(O,"-push-").concat(y),y),u(n,"".concat(O,"-pull-").concat(g),g),n),x,E);return r.createElement(c.a.Consumer,null,function(t){var e=t.gutter,n=w.style;return e&&(n=s(s(s({},e[0]>0?{paddingLeft:e[0]/2,paddingRight:e[0]/2}:{}),e[1]>0?{paddingTop:e[1]/2,paddingBottom:e[1]/2}:{}),n)),r.createElement("div",s({},w,{style:n,className:j}),v)})},t}return e=y,(n=[{key:"render",value:function(){return r.createElement(l.a,null,this.renderCol)}}])&&p(e.prototype,n),i&&p(e,i),y}();x.propTypes={span:i.number,order:i.number,offset:i.number,push:i.number,pull:i.number,className:i.string,children:i.node,xs:g,sm:g,md:g,lg:g,xl:g,xxl:g}},1048:function(t,e,n){"use strict";var r,i=n(0),a=n(19),o=n.n(a),c=n(1),l=n(2738),u=n(1031),s=n(98);function f(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function p(){return(p=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}if("undefined"!==typeof window){window.matchMedia||(window.matchMedia=function(t){return{media:t,matches:!1,addListener:function(){},removeListener:function(){}}}),r=n(1033)}var d=["xxl","xl","lg","md","sm","xs"],m={xs:"(max-width: 575px)",sm:"(min-width: 576px)",md:"(min-width: 768px)",lg:"(min-width: 992px)",xl:"(min-width: 1200px)",xxl:"(min-width: 1600px)"},h=[],y=-1,b={},g={dispatch:function(t){return b=t,!(h.length<1)&&(h.forEach(function(t){t.func(b)}),!0)},subscribe:function(t){0===h.length&&this.register();var e=(++y).toString();return h.push({token:e,func:t}),t(b),e},unsubscribe:function(t){0===(h=h.filter(function(e){return e.token!==t})).length&&this.unregister()},unregister:function(){Object.keys(m).map(function(t){return r.unregister(m[t])})},register:function(){var t=this;Object.keys(m).map(function(e){return r.register(m[e],{match:function(){var n=p(p({},b),f({},e,!0));t.dispatch(n)},unmatch:function(){var n=p(p({},b),f({},e,!1));t.dispatch(n)},destroy:function(){}})})}};function x(t){return(x="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function v(){return(v=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function w(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function O(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function E(t,e){return(E=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function j(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}();return function(){var n,r=k(t);if(e){var i=k(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return function(t,e){if(e&&("object"===x(e)||"function"===typeof e))return e;return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,n)}}function k(t){return(k=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}n.d(e,"a",function(){return P});var T=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]])}return n},C=Object(s.a)("top","middle","bottom","stretch"),S=Object(s.a)("start","end","center","space-around","space-between"),P=function(t){!function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&E(t,e)}(c,i["Component"]);var e,n,r,a=j(c);function c(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,c),(t=a.apply(this,arguments)).state={screens:{}},t.renderRow=function(e){var n,r=e.getPrefixCls,a=t.props,c=a.prefixCls,l=a.type,s=a.justify,f=a.align,p=a.className,d=a.style,m=a.children,h=T(a,["prefixCls","type","justify","align","className","style","children"]),y=r("row",c),b=t.getGutter(),g=o()((w(n={},y,!l),w(n,"".concat(y,"-").concat(l),l),w(n,"".concat(y,"-").concat(l,"-").concat(s),l&&s),w(n,"".concat(y,"-").concat(l,"-").concat(f),l&&f),n),p),x=v(v(v({},b[0]>0?{marginLeft:b[0]/-2,marginRight:b[0]/-2}:{}),b[1]>0?{marginTop:b[1]/-2,marginBottom:b[1]/-2}:{}),d),O=v({},h);return delete O.gutter,i.createElement(u.a.Provider,{value:{gutter:b}},i.createElement("div",v({},O,{className:g,style:x}),m))},t}return e=c,(n=[{key:"componentDidMount",value:function(){var t=this;this.token=g.subscribe(function(e){var n=t.props.gutter;("object"===x(n)||Array.isArray(n)&&("object"===x(n[0])||"object"===x(n[1])))&&t.setState({screens:e})})}},{key:"componentWillUnmount",value:function(){g.unsubscribe(this.token)}},{key:"getGutter",value:function(){var t=[0,0],e=this.props.gutter,n=this.state.screens;return(Array.isArray(e)?e:[e,0]).forEach(function(e,r){if("object"===x(e))for(var i=0;i<d.length;i++){var a=d[i];if(n[a]&&void 0!==e[a]){t[r]=e[a];break}}else t[r]=e||0}),t}},{key:"render",value:function(){return i.createElement(l.a,null,this.renderRow)}}])&&O(e.prototype,n),r&&O(e,r),c}();P.defaultProps={gutter:0},P.propTypes={type:c.oneOf(["flex"]),align:c.oneOf(C),justify:c.oneOf(S),className:c.string,children:c.node,gutter:c.oneOfType([c.object,c.number,c.array]),prefixCls:c.string}},1066:function(t,e,n){"use strict";n.r(e);var r=n(0),i=n.n(r),a=n(27),o=n(26),c=n(7);function l(){var t=Object(a.a)(["\n  font-size: 13px;\n  font-weight: 400;\n  color: ",";\n  line-height: 24px;\n"]);return l=function(){return t},t}function u(){var t=Object(a.a)(["\n  font-size: 14px;\n  font-weight: 500;\n  color: ",";\n  margin: 0;\n  margin-bottom: 5px;\n"]);return u=function(){return t},t}var s=o.d.h3(u(),Object(c.palette)("text",0)),f=o.d.p(l(),Object(c.palette)("text",3)),p=function(t){return i.a.createElement("div",null,t.title?i.a.createElement(s,{className:"isoBoxTitle"}," ",t.title," "):"",t.subtitle?i.a.createElement(f,{className:"isoBoxSubTitle"}," ",t.subtitle," "):"")};function d(){var t=Object(a.a)(["\n  width: 100%;\n  height: 100%;\n  padding: 20px;\n  background-color: #ffffff;\n  border: 1px solid ",";\n  margin: 0 0 30px;\n\n  &:last-child {\n    margin-bottom: 0;\n  }\n\n  @media only screen and (max-width: 767px) {\n    padding: 20px;\n    ",";\n  }\n\n  &.half {\n    width: calc(50% - 34px);\n    @media (max-width: 767px) {\n      width: 100%;\n    }\n  }\n"]);return d=function(){return t},t}var m=o.d.div(d(),Object(c.palette)("border",0),"");e.default=function(t){return i.a.createElement(m,{className:"".concat(t.className," isoBoxWrapper"),style:t.style},i.a.createElement(p,{title:t.title,subtitle:t.subtitle}),t.children)}},1088:function(t,e,n){"use strict";n.r(e);var r=n(0),i=n.n(r),a=n(27);function o(){var t=Object(a.a)(["\n  padding: 40px 20px;\n  display: flex;\n  flex-flow: row wrap;\n  overflow: hidden;\n\n  @media only screen and (max-width: 767px) {\n    padding: 50px 20px;\n  }\n\n  @media (max-width: 580px) {\n    padding: 15px;\n  }\n"]);return o=function(){return t},t}var c=n(26).d.div(o());e.default=function(t){return i.a.createElement(c,Object.assign({className:null!=t.className?"".concat(t.className," isoLayoutContentWrapper"):"isoLayoutContentWrapper"},t),t.children)}},1089:function(t,e,n){"use strict";n.r(e);var r=n(0),i=n.n(r),a=n(27),o=n(26),c=n(7),l=n(39);function u(){var t=Object(a.a)(["\n  font-size: 19px;\n  font-weight: 500;\n  color: ",";\n  width: 100%;\n  margin-right: 17px;\n  margin-bottom: 30px;\n  display: flex;\n  align-items: center;\n  white-space: nowrap;\n\n  @media only screen and (max-width: 767px) {\n    margin: 0 10px;\n    margin-bottom: 30px;\n  }\n\n  &:before {\n    content: '';\n    width: 5px;\n    height: 40px;\n    background-color: ",";\n    display: flex;\n    margin: ",";\n  }\n\n  &:after {\n    content: '';\n    width: 100%;\n    height: 1px;\n    background-color: ",";\n    display: flex;\n    margin: ",";\n  }\n"]);return u=function(){return t},t}var s=o.d.h1(u(),Object(c.palette)("secondary",2),Object(c.palette)("secondary",3),function(t){return"rtl"===t["data-rtl"]?"0 0 0 15px":"0 15px 0 0"},Object(c.palette)("secondary",3),function(t){return"rtl"===t["data-rtl"]?"0 15px 0 0":"0 0 0 15px"}),f=Object(l.a)(s);e.default=function(t){return i.a.createElement(f,{className:"isoComponentTitle"},t.children)}},1090:function(t,e,n){"use strict";n.r(e);var r=n(0),i=n.n(r),a=n(27),o=n(26),c=n(7),l=n(39);function u(){var t=Object(a.a)(["\n  margin-top: 30px;\n  -webkit-overflow-scrolling: touch;\n\n  .demoBtn {\n    margin-right: ",";\n    margin-left: ",";\n  }\n\n  .demoBtnsWrapper {\n    &:nth-child(1) {\n      margin-left: ",";\n      margin-right: ",";\n      white-space: nowrap;\n    }\n\n    &:nth-child(2) {\n      width: 70px;\n      float: ",";\n    }\n\n    &:nth-child(3) {\n      width: 70px;\n      margin-left: ",";\n      margin-right: ",";\n    }\n\n    &:nth-child(4) {\n      margin-left: ",";\n      margin-right: ",";\n      clear: both;\n      white-space: nowrap;\n    }\n\n    @media only screen and (max-width: 480px) {\n      margin-left: ",";\n      white-space: nowrap;\n      margin-right: ",";\n      float: none !important;\n    }\n\n    .demoPosBtn {\n      width: 70px;\n      margin-right: ",";\n      margin-left: ",";\n      margin-bottom: 8px;\n      padding: 0;\n\n      @media only screen and (max-width: 480px) {\n        width: 65px;\n      }\n    }\n  }\n\n  .ant-btn {\n    &:not(.demoPosBtn) {\n      &:last-child {\n        margin-right: 0;\n      }\n    }\n  }\n\n  .tooltipBtn {\n    display: inline-block;\n    line-height: 32px;\n    height: 32px;\n    width: 70px;\n    font-size: 14px;\n    text-align: center;\n    background: ",";\n    margin-right: ",";\n    margin-left: ",";\n    margin-bottom: 6px;\n    border-radius: 6px;\n  }\n\n  .ant-progress {\n    &.ant-progress-circle {\n      margin-right: ",";\n      margin-left: ",";\n\n      &:last-child {\n        margin-right: ",";\n        margin-left: ",";\n      }\n    }\n  }\n\n  strong {\n    font-weight: 700;\n    font-size: 14px;\n  }\n"]);return u=function(){return t},t}var s=o.d.div(u(),function(t){return"rtl"===t["data-rtl"]?"0":"10px"},function(t){return"rtl"===t["data-rtl"]?"10px":"0"},function(t){return"rtl"===t["data-rtl"]?"0":"70px"},function(t){return"rtl"===t["data-rtl"]?"70px":"0"},function(t){return"rtl"===t["data-rtl"]?"right":"left"},function(t){return"rtl"===t["data-rtl"]?"0":"295px"},function(t){return"rtl"===t["data-rtl"]?"295px":"0"},function(t){return"rtl"===t["data-rtl"]?"0":"70px"},function(t){return"rtl"===t["data-rtl"]?"70px":"0"},function(t){return"rtl"===t["data-rtl"]?"8px":"0 !important"},function(t){return"rtl"===t["data-rtl"]?"0 !important":"8px"},function(t){return"rtl"===t["data-rtl"]?"0":"8px"},function(t){return"rtl"===t["data-rtl"]?"8px":"0"},Object(c.palette)("secondary",1),function(t){return"rtl"===t["data-rtl"]?"auto":"6px"},function(t){return"rtl"===t["data-rtl"]?"6px":"0"},function(t){return"rtl"===t["data-rtl"]?"0":"15px"},function(t){return"rtl"===t["data-rtl"]?"15px":"0"},function(t){return t["data-rtl"],"0"},function(t){return t["data-rtl"],"0"}),f=Object(l.a)(s);e.default=function(t){return i.a.createElement(f,{className:"isoExampleWrapper",style:t.style},t.children)}},2827:function(t,e,n){"use strict";n.r(e);var r=n(9),i=n(10),a=n(14),o=n(15),c=n(8),l=n(0),u=n.n(l),s=n(2),f=n(996),p=n(1037),d=n(92),m=n(1047),h=n(1089),y=n(1066),b=n(1088),g=n(1090),x=n(995),v=n(36),w=n(27);function O(){var t=Object(w.a)(["\n  display: inline-block;\n  font-size: 13px;\n"]);return O=function(){return t},t}var E=n(26).d.div(O());function j(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}();return function(){var n,r=Object(c.a)(t);if(e){var i=Object(c.a)(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return Object(o.a)(this,n)}}n.d(e,"default",function(){return R});var k=function(){var t={message:"Notification Title",description:u.a.createElement(E,null,"I will close after 2 seconds automatically. I will be close automatically. I will never close automatically.")};d.a.open(t)},T=function(){d.a.open({message:"Notification Title",description:"I will never close automatically. Click the close button. I will be close automatically. I will never close automatically.",duration:0})},C=function(t){d.a[t]({message:"Notification Title--",description:"This is the content of the notification. This is the content of the notification. This is the content of the notification."})},S=function(){d.a.open({message:"Notification Title",description:"This is the content of the notification. This is the content of the notification. This is the content of the notification.",icon:u.a.createElement(s.a,{type:"smile-circle",style:{color:"#4482FF"}})})},P=function(){},N=function(){var t="open".concat(Date.now()),e=u.a.createElement(m.b,{type:"primary",size:"small",onClick:function(){d.a.close(t)}},"Confirm");d.a.open({message:"Notification Title",description:'A function will be be called after the notification is closed (automatically after the "duration" time of manually).',btn:e,key:t,onClose:P})},R=function(t){Object(a.a)(n,t);var e=j(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var t=x.a.rowStyle,e=x.a.colStyle,n=x.a.gutter,r={marginRight:"5px"};return u.a.createElement(b.default,null,u.a.createElement(h.default,null,u.a.createElement(v.a,{id:"feedback.alert.notification"})),u.a.createElement(f.a,{style:t,gutter:n,justify:"start"},u.a.createElement(p.a,{md:12,sm:12,xs:24,style:e},u.a.createElement(y.default,{title:u.a.createElement(v.a,{id:"feedback.alert.notificationBasicTitle"}),subtitle:u.a.createElement(v.a,{id:"feedback.alert.notificationBasicSubTitle"})},u.a.createElement(g.default,null,u.a.createElement(m.b,{type:"primary",onClick:k},u.a.createElement(v.a,{id:"feedback.alert.notificationBasicDescription"}))))),u.a.createElement(p.a,{md:12,sm:12,xs:24,style:e},u.a.createElement(y.default,{title:u.a.createElement(v.a,{id:"feedback.alert.notificationDurationTitle"}),subtitle:u.a.createElement(v.a,{id:"feedback.alert.notificationDurationSubTitle"})},u.a.createElement(g.default,null,u.a.createElement(m.b,{type:"primary",onClick:T},u.a.createElement(v.a,{id:"feedback.alert.notificationBasicDescription"})))))),u.a.createElement(f.a,{style:t,gutter:n,justify:"start"},u.a.createElement(p.a,{md:12,sm:12,xs:24,style:e},u.a.createElement(y.default,{title:u.a.createElement(v.a,{id:"feedback.alert.notificationwithIconTitle"}),subtitle:u.a.createElement(v.a,{id:"feedback.alert.notificationwithIconSubTitle"})},u.a.createElement(g.default,null,u.a.createElement(m.b,{onClick:function(){return C("success")},style:r},u.a.createElement(v.a,{id:"feedback.alert.successTitle"})),u.a.createElement(m.b,{onClick:function(){return C("info")},style:r},u.a.createElement(v.a,{id:"feedback.alert.infoTitle"})),u.a.createElement(m.b,{onClick:function(){return C("warning")},style:r},u.a.createElement(v.a,{id:"feedback.alert.warningTitle"})),u.a.createElement(m.b,{onClick:function(){return C("error")}},u.a.createElement(v.a,{id:"feedback.alert.errorTitle"}))))),u.a.createElement(p.a,{md:12,sm:12,xs:24,style:e},u.a.createElement(y.default,{title:u.a.createElement(v.a,{id:"feedback.alert.notificationwithCustomIconTitle"}),subtitle:u.a.createElement(v.a,{id:"feedback.alert.notificationwithCustomIconSubTitle"})},u.a.createElement(g.default,null,u.a.createElement(m.b,{type:"primary",onClick:S},u.a.createElement(v.a,{id:"feedback.alert.notificationBasicDescription"})))))),u.a.createElement(f.a,{style:t,gutter:n,justify:"start"},u.a.createElement(p.a,{md:12,sm:12,xs:24,style:e},u.a.createElement(y.default,{title:u.a.createElement(v.a,{id:"feedback.alert.notificationwithCustomButtonTitle"}),subtitle:u.a.createElement(v.a,{id:"feedback.alert.notificationwithCustomButtonSubTitle"})},u.a.createElement(g.default,null,u.a.createElement(m.b,{type:"primary",onClick:N},u.a.createElement(v.a,{id:"feedback.alert.notificationBasicDescription"})))))))}}]),n}(l.Component)},995:function(t,e,n){"use strict";var r={rowStyle:{width:"100%",display:"flex",flexFlow:"row wrap"},colStyle:{marginBottom:"16px"},gutter:16};e.a=r},996:function(t,e,n){"use strict";var r=n(1048);e.a=r.a}}]);
//# sourceMappingURL=57.c6026241.chunk.js.map