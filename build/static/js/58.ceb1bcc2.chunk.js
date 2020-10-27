(window.webpackJsonp=window.webpackJsonp||[]).push([[58,128,129,130,131],{1047:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(27),o=n(26),i=n(10);function c(){var e=Object(l.a)(["\n  font-size: 13px;\n  font-weight: 400;\n  color: ",";\n  line-height: 24px;\n"]);return c=function(){return e},e}function m(){var e=Object(l.a)(["\n  font-size: 14px;\n  font-weight: 500;\n  color: ",";\n  margin: 0;\n  margin-bottom: 5px;\n"]);return m=function(){return e},e}var d=o.d.h3(m(),Object(i.palette)("text",0)),p=o.d.p(c(),Object(i.palette)("text",3)),s=function(e){return r.a.createElement("div",null,e.title?r.a.createElement(d,{className:"isoBoxTitle"}," ",e.title," "):"",e.subtitle?r.a.createElement(p,{className:"isoBoxSubTitle"}," ",e.subtitle," "):"")};function f(){var e=Object(l.a)(["\n  width: 100%;\n  height: 100%;\n  padding: 20px;\n  background-color: #ffffff;\n  border: 1px solid ",";\n  margin: 0 0 30px;\n\n  &:last-child {\n    margin-bottom: 0;\n  }\n\n  @media only screen and (max-width: 767px) {\n    padding: 20px;\n    ",";\n  }\n\n  &.half {\n    width: calc(50% - 34px);\n    @media (max-width: 767px) {\n      width: 100%;\n    }\n  }\n"]);return f=function(){return e},e}var u=o.d.div(f(),Object(i.palette)("border",0),"");t.default=function(e){return r.a.createElement(u,{className:"".concat(e.className," isoBoxWrapper"),style:e.style},r.a.createElement(s,{title:e.title,subtitle:e.subtitle}),e.children)}},1093:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(27);function o(){var e=Object(l.a)(["\n  padding: 40px 20px;\n  display: flex;\n  flex-flow: row wrap;\n  overflow: hidden;\n\n  @media only screen and (max-width: 767px) {\n    padding: 50px 20px;\n  }\n\n  @media (max-width: 580px) {\n    padding: 15px;\n  }\n"]);return o=function(){return e},e}var i=n(26).d.div(o());t.default=function(e){return r.a.createElement(i,Object.assign({className:null!=e.className?"".concat(e.className," isoLayoutContentWrapper"):"isoLayoutContentWrapper"},e),e.children)}},1094:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(27),o=n(26),i=n(10),c=n(39);function m(){var e=Object(l.a)(["\n  font-size: 19px;\n  font-weight: 500;\n  color: ",";\n  width: 100%;\n  margin-right: 17px;\n  margin-bottom: 30px;\n  display: flex;\n  align-items: center;\n  white-space: nowrap;\n\n  @media only screen and (max-width: 767px) {\n    margin: 0 10px;\n    margin-bottom: 30px;\n  }\n\n  &:before {\n    content: '';\n    width: 5px;\n    height: 40px;\n    background-color: ",";\n    display: flex;\n    margin: ",";\n  }\n\n  &:after {\n    content: '';\n    width: 100%;\n    height: 1px;\n    background-color: ",";\n    display: flex;\n    margin: ",";\n  }\n"]);return m=function(){return e},e}var d=o.d.h1(m(),Object(i.palette)("secondary",2),Object(i.palette)("secondary",3),function(e){return"rtl"===e["data-rtl"]?"0 0 0 15px":"0 15px 0 0"},Object(i.palette)("secondary",3),function(e){return"rtl"===e["data-rtl"]?"0 15px 0 0":"0 0 0 15px"}),p=Object(c.a)(d);t.default=function(e){return r.a.createElement(p,{className:"isoComponentTitle"},e.children)}},1095:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(27),o=n(26),i=n(10),c=n(39);function m(){var e=Object(l.a)(["\n  margin-top: 30px;\n  -webkit-overflow-scrolling: touch;\n\n  .demoBtn {\n    margin-right: ",";\n    margin-left: ",";\n  }\n\n  .demoBtnsWrapper {\n    &:nth-child(1) {\n      margin-left: ",";\n      margin-right: ",";\n      white-space: nowrap;\n    }\n\n    &:nth-child(2) {\n      width: 70px;\n      float: ",";\n    }\n\n    &:nth-child(3) {\n      width: 70px;\n      margin-left: ",";\n      margin-right: ",";\n    }\n\n    &:nth-child(4) {\n      margin-left: ",";\n      margin-right: ",";\n      clear: both;\n      white-space: nowrap;\n    }\n\n    @media only screen and (max-width: 480px) {\n      margin-left: ",";\n      white-space: nowrap;\n      margin-right: ",";\n      float: none !important;\n    }\n\n    .demoPosBtn {\n      width: 70px;\n      margin-right: ",";\n      margin-left: ",";\n      margin-bottom: 8px;\n      padding: 0;\n\n      @media only screen and (max-width: 480px) {\n        width: 65px;\n      }\n    }\n  }\n\n  .ant-btn {\n    &:not(.demoPosBtn) {\n      &:last-child {\n        margin-right: 0;\n      }\n    }\n  }\n\n  .tooltipBtn {\n    display: inline-block;\n    line-height: 32px;\n    height: 32px;\n    width: 70px;\n    font-size: 14px;\n    text-align: center;\n    background: ",";\n    margin-right: ",";\n    margin-left: ",";\n    margin-bottom: 6px;\n    border-radius: 6px;\n  }\n\n  .ant-progress {\n    &.ant-progress-circle {\n      margin-right: ",";\n      margin-left: ",";\n\n      &:last-child {\n        margin-right: ",";\n        margin-left: ",";\n      }\n    }\n  }\n\n  strong {\n    font-weight: 700;\n    font-size: 14px;\n  }\n"]);return m=function(){return e},e}var d=o.d.div(m(),function(e){return"rtl"===e["data-rtl"]?"0":"10px"},function(e){return"rtl"===e["data-rtl"]?"10px":"0"},function(e){return"rtl"===e["data-rtl"]?"0":"70px"},function(e){return"rtl"===e["data-rtl"]?"70px":"0"},function(e){return"rtl"===e["data-rtl"]?"right":"left"},function(e){return"rtl"===e["data-rtl"]?"0":"295px"},function(e){return"rtl"===e["data-rtl"]?"295px":"0"},function(e){return"rtl"===e["data-rtl"]?"0":"70px"},function(e){return"rtl"===e["data-rtl"]?"70px":"0"},function(e){return"rtl"===e["data-rtl"]?"8px":"0 !important"},function(e){return"rtl"===e["data-rtl"]?"0 !important":"8px"},function(e){return"rtl"===e["data-rtl"]?"0":"8px"},function(e){return"rtl"===e["data-rtl"]?"8px":"0"},Object(i.palette)("secondary",1),function(e){return"rtl"===e["data-rtl"]?"auto":"6px"},function(e){return"rtl"===e["data-rtl"]?"6px":"0"},function(e){return"rtl"===e["data-rtl"]?"0":"15px"},function(e){return"rtl"===e["data-rtl"]?"15px":"0"},function(e){return e["data-rtl"],"0"},function(e){return e["data-rtl"],"0"}),p=Object(c.a)(d);t.default=function(e){return r.a.createElement(p,{className:"isoExampleWrapper",style:e.style},e.children)}},1591:function(e,t,n){"use strict";var a=n(1710);t.a=a.a},2824:function(e,t,n){"use strict";n.r(t);var a=n(12),r=n(13),l=n(15),o=n(16),i=n(11),c=n(0),m=n.n(c),d=n(996),p=n(1036),s=n(367),f=n(1591),u=n(1063),x=n(1094),h=n(1047),b=n(1093),g=n(1095),E=n(995),w=n(36),k=n(27);function y(){var e=Object(k.a)(["display: inline-block;"]);return y=function(){return e},e}var v=n(26).d.div(y());function N(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var n,a=Object(i.a)(e);if(t){var r=Object(i.a)(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return Object(o.a)(this,n)}}n.d(t,"default",function(){return O});var T=function(e){return m.a.createElement(v,null,m.a.createElement(s.a,e))},C="Are you sure delete this task?";function B(e){f.a.success("Click on Yes")}function j(e){f.a.error("Click on No")}var O=function(e){Object(l.a)(n,e);var t=N(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){var e=E.a.rowStyle,t=E.a.colStyle,n=E.a.gutter;return m.a.createElement(b.default,null,m.a.createElement(x.default,null,m.a.createElement(w.a,{id:"feedback.alert.popConfirm"})),m.a.createElement(d.a,{style:e,gutter:n,justify:"start"},m.a.createElement(p.a,{md:12,sm:12,xs:24,style:t},m.a.createElement(h.default,{title:m.a.createElement(w.a,{id:"feedback.alert.popConfirm.basicTitle"}),subtitle:m.a.createElement(w.a,{id:"feedback.alert.popConfirm.basicSubTitle"})},m.a.createElement(g.default,null,m.a.createElement(T,{title:"Are you sure\uff1f",okText:"Yes",cancelText:"No",onConfirm:B,onCancel:j},m.a.createElement("a",{href:"# "},m.a.createElement(w.a,{id:"feedback.alert.popConfirm.delete"})))))),m.a.createElement(p.a,{md:12,sm:12,xs:24,style:t},m.a.createElement(h.default,{title:m.a.createElement(w.a,{id:"feedback.alert.popConfirm.notiWithIconTitle"}),subtitle:m.a.createElement(w.a,{id:"feedback.alert.popConfirm.notiWithIconSubTitle"})},m.a.createElement(g.default,null,m.a.createElement("div",{className:"demoBtnsWrapper"},m.a.createElement(T,{placement:"topLeft",title:C,onConfirm:B,okText:"Yes",cancelText:"No"},m.a.createElement(u.b,{className:"demoPosBtn"},m.a.createElement(w.a,{id:"feedback.alert.popConfirm.TL"}))),m.a.createElement(T,{placement:"top",title:C,onConfirm:B,okText:"Yes",cancelText:"No"},m.a.createElement(u.b,{className:"demoPosBtn"},m.a.createElement(w.a,{id:"feedback.alert.popConfirm.top"}))),m.a.createElement(T,{placement:"topRight",title:C,onConfirm:B,okText:"Yes",cancelText:"No"},m.a.createElement(u.b,{className:"demoPosBtn"},m.a.createElement(w.a,{id:"feedback.alert.popConfirm.TR"})))),m.a.createElement("div",{className:"demoBtnsWrapper"},m.a.createElement(T,{placement:"leftTop",title:C,onConfirm:B,okText:"Yes",cancelText:"No"},m.a.createElement(u.b,{className:"demoPosBtn"},m.a.createElement(w.a,{id:"feedback.alert.popConfirm.LT"}))),m.a.createElement(T,{placement:"left",title:C,onConfirm:B,okText:"Yes",cancelText:"No"},m.a.createElement(u.b,{className:"demoPosBtn"},m.a.createElement(w.a,{id:"feedback.alert.popConfirm.left"}))),m.a.createElement(T,{placement:"leftBottom",title:C,onConfirm:B,okText:"Yes",cancelText:"No"},m.a.createElement(u.b,{className:"demoPosBtn"},m.a.createElement(w.a,{id:"feedback.alert.popConfirm.LB"})))),m.a.createElement("div",{className:"demoBtnsWrapper"},m.a.createElement(T,{placement:"rightTop",title:C,onConfirm:B,okText:"Yes",cancelText:"No"},m.a.createElement(u.b,{className:"demoPosBtn"},m.a.createElement(w.a,{id:"feedback.alert.popConfirm.RT"}))),m.a.createElement(T,{placement:"right",title:C,onConfirm:B,okText:"Yes",cancelText:"No"},m.a.createElement(u.b,{className:"demoPosBtn"},m.a.createElement(w.a,{id:"feedback.alert.popConfirm.right"}))),m.a.createElement(T,{placement:"rightBottom",title:C,onConfirm:B,okText:"Yes",cancelText:"No"},m.a.createElement(u.b,{className:"demoPosBtn"},m.a.createElement(w.a,{id:"feedback.alert.popConfirm.RB"})))),m.a.createElement("div",{className:"demoBtnsWrapper"},m.a.createElement(T,{placement:"bottomLeft",title:C,onConfirm:B,okText:"Yes",cancelText:"No"},m.a.createElement(u.b,{className:"demoPosBtn"},m.a.createElement(w.a,{id:"feedback.alert.popConfirm.Bl"}))),m.a.createElement(T,{placement:"bottom",title:C,onConfirm:B,okText:"Yes",cancelText:"No"},m.a.createElement(u.b,{className:"demoPosBtn"},m.a.createElement(w.a,{id:"feedback.alert.popConfirm.bottom"}))),m.a.createElement(T,{placement:"bottomRight",title:C,onConfirm:B,okText:"Yes",cancelText:"No"},m.a.createElement(u.b,{className:"demoPosBtn"},m.a.createElement(w.a,{id:"feedback.alert.popConfirm.BR"})))))))))}}]),n}(c.Component)},995:function(e,t,n){"use strict";var a={rowStyle:{width:"100%",display:"flex",flexFlow:"row wrap"},colStyle:{marginBottom:"16px"},gutter:16};t.a=a}}]);
//# sourceMappingURL=58.ceb1bcc2.chunk.js.map