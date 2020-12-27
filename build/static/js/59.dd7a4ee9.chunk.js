(window.webpackJsonp=window.webpackJsonp||[]).push([[59,129,130,131,132],{1066:function(t,n,e){"use strict";e.r(n);var r=e(0),a=e.n(r),i=e(27),l=e(26),c=e(7);function o(){var t=Object(i.a)(["\n  font-size: 13px;\n  font-weight: 400;\n  color: ",";\n  line-height: 24px;\n"]);return o=function(){return t},t}function u(){var t=Object(i.a)(["\n  font-size: 14px;\n  font-weight: 500;\n  color: ",";\n  margin: 0;\n  margin-bottom: 5px;\n"]);return u=function(){return t},t}var p=l.d.h3(u(),Object(c.palette)("text",0)),d=l.d.p(o(),Object(c.palette)("text",3)),s=function(t){return a.a.createElement("div",null,t.title?a.a.createElement(p,{className:"isoBoxTitle"}," ",t.title," "):"",t.subtitle?a.a.createElement(d,{className:"isoBoxSubTitle"}," ",t.subtitle," "):"")};function f(){var t=Object(i.a)(["\n  width: 100%;\n  height: 100%;\n  padding: 20px;\n  background-color: #ffffff;\n  border: 1px solid ",";\n  margin: 0 0 30px;\n\n  &:last-child {\n    margin-bottom: 0;\n  }\n\n  @media only screen and (max-width: 767px) {\n    padding: 20px;\n    ",";\n  }\n\n  &.half {\n    width: calc(50% - 34px);\n    @media (max-width: 767px) {\n      width: 100%;\n    }\n  }\n"]);return f=function(){return t},t}var m=l.d.div(f(),Object(c.palette)("border",0),"");n.default=function(t){return a.a.createElement(m,{className:"".concat(t.className," isoBoxWrapper"),style:t.style},a.a.createElement(s,{title:t.title,subtitle:t.subtitle}),t.children)}},1088:function(t,n,e){"use strict";e.r(n);var r=e(0),a=e.n(r),i=e(27);function l(){var t=Object(i.a)(["\n  padding: 40px 20px;\n  display: flex;\n  flex-flow: row wrap;\n  overflow: hidden;\n\n  @media only screen and (max-width: 767px) {\n    padding: 50px 20px;\n  }\n\n  @media (max-width: 580px) {\n    padding: 15px;\n  }\n"]);return l=function(){return t},t}var c=e(26).d.div(l());n.default=function(t){return a.a.createElement(c,Object.assign({className:null!=t.className?"".concat(t.className," isoLayoutContentWrapper"):"isoLayoutContentWrapper"},t),t.children)}},1089:function(t,n,e){"use strict";e.r(n);var r=e(0),a=e.n(r),i=e(27),l=e(26),c=e(7),o=e(39);function u(){var t=Object(i.a)(["\n  font-size: 19px;\n  font-weight: 500;\n  color: ",";\n  width: 100%;\n  margin-right: 17px;\n  margin-bottom: 30px;\n  display: flex;\n  align-items: center;\n  white-space: nowrap;\n\n  @media only screen and (max-width: 767px) {\n    margin: 0 10px;\n    margin-bottom: 30px;\n  }\n\n  &:before {\n    content: '';\n    width: 5px;\n    height: 40px;\n    background-color: ",";\n    display: flex;\n    margin: ",";\n  }\n\n  &:after {\n    content: '';\n    width: 100%;\n    height: 1px;\n    background-color: ",";\n    display: flex;\n    margin: ",";\n  }\n"]);return u=function(){return t},t}var p=l.d.h1(u(),Object(c.palette)("secondary",2),Object(c.palette)("secondary",3),function(t){return"rtl"===t["data-rtl"]?"0 0 0 15px":"0 15px 0 0"},Object(c.palette)("secondary",3),function(t){return"rtl"===t["data-rtl"]?"0 15px 0 0":"0 0 0 15px"}),d=Object(o.a)(p);n.default=function(t){return a.a.createElement(d,{className:"isoComponentTitle"},t.children)}},1090:function(t,n,e){"use strict";e.r(n);var r=e(0),a=e.n(r),i=e(27),l=e(26),c=e(7),o=e(39);function u(){var t=Object(i.a)(["\n  margin-top: 30px;\n  -webkit-overflow-scrolling: touch;\n\n  .demoBtn {\n    margin-right: ",";\n    margin-left: ",";\n  }\n\n  .demoBtnsWrapper {\n    &:nth-child(1) {\n      margin-left: ",";\n      margin-right: ",";\n      white-space: nowrap;\n    }\n\n    &:nth-child(2) {\n      width: 70px;\n      float: ",";\n    }\n\n    &:nth-child(3) {\n      width: 70px;\n      margin-left: ",";\n      margin-right: ",";\n    }\n\n    &:nth-child(4) {\n      margin-left: ",";\n      margin-right: ",";\n      clear: both;\n      white-space: nowrap;\n    }\n\n    @media only screen and (max-width: 480px) {\n      margin-left: ",";\n      white-space: nowrap;\n      margin-right: ",";\n      float: none !important;\n    }\n\n    .demoPosBtn {\n      width: 70px;\n      margin-right: ",";\n      margin-left: ",";\n      margin-bottom: 8px;\n      padding: 0;\n\n      @media only screen and (max-width: 480px) {\n        width: 65px;\n      }\n    }\n  }\n\n  .ant-btn {\n    &:not(.demoPosBtn) {\n      &:last-child {\n        margin-right: 0;\n      }\n    }\n  }\n\n  .tooltipBtn {\n    display: inline-block;\n    line-height: 32px;\n    height: 32px;\n    width: 70px;\n    font-size: 14px;\n    text-align: center;\n    background: ",";\n    margin-right: ",";\n    margin-left: ",";\n    margin-bottom: 6px;\n    border-radius: 6px;\n  }\n\n  .ant-progress {\n    &.ant-progress-circle {\n      margin-right: ",";\n      margin-left: ",";\n\n      &:last-child {\n        margin-right: ",";\n        margin-left: ",";\n      }\n    }\n  }\n\n  strong {\n    font-weight: 700;\n    font-size: 14px;\n  }\n"]);return u=function(){return t},t}var p=l.d.div(u(),function(t){return"rtl"===t["data-rtl"]?"0":"10px"},function(t){return"rtl"===t["data-rtl"]?"10px":"0"},function(t){return"rtl"===t["data-rtl"]?"0":"70px"},function(t){return"rtl"===t["data-rtl"]?"70px":"0"},function(t){return"rtl"===t["data-rtl"]?"right":"left"},function(t){return"rtl"===t["data-rtl"]?"0":"295px"},function(t){return"rtl"===t["data-rtl"]?"295px":"0"},function(t){return"rtl"===t["data-rtl"]?"0":"70px"},function(t){return"rtl"===t["data-rtl"]?"70px":"0"},function(t){return"rtl"===t["data-rtl"]?"8px":"0 !important"},function(t){return"rtl"===t["data-rtl"]?"0 !important":"8px"},function(t){return"rtl"===t["data-rtl"]?"0":"8px"},function(t){return"rtl"===t["data-rtl"]?"8px":"0"},Object(c.palette)("secondary",1),function(t){return"rtl"===t["data-rtl"]?"auto":"6px"},function(t){return"rtl"===t["data-rtl"]?"6px":"0"},function(t){return"rtl"===t["data-rtl"]?"0":"15px"},function(t){return"rtl"===t["data-rtl"]?"15px":"0"},function(t){return t["data-rtl"],"0"},function(t){return t["data-rtl"],"0"}),d=Object(o.a)(p);n.default=function(t){return a.a.createElement(d,{className:"isoExampleWrapper",style:t.style},t.children)}},1202:function(t,n,e){"use strict";var r=e(1261),a=e(27),i=e(26),l=e(7);function c(){var t=Object(a.a)(["\n  &.ant-switch-checked {\n    border-color: ",";\n    background-color: ",";\n  }\n"]);return c=function(){return t},t}var o=function(t){return Object(i.d)(t)(c(),Object(l.palette)("primary",0),Object(l.palette)("primary",0))}(r.a);n.a=o},1652:function(t,n,e){"use strict";var r=e(27),a=e(0),i=e.n(a),l=e(2765),c=e(26),o=e(7),u=e(39);function p(){var t=Object(r.a)(["\n  && {\n    color: ",";\n    font-size: 12px;\n  }\n\n  &&.ant-alert-success {\n    .ant-alert-icon {\n      color: ",";\n    }\n  }\n\n  &&.ant-alert-error {\n    .ant-alert-icon {\n      color: ",";\n    }\n  }\n\n  &&.ant-alert-with-description {\n    padding: ",";\n    .ant-alert-message {\n      font-weight: 500;\n      color: ",";\n    }\n\n    .ant-alert-description {\n      color: ",";\n      font-size: 12px;\n    }\n\n    .ant-alert-icon {\n      top: 20px;\n      left: ",";\n      right: ",";\n    }\n    &&.ant-alert-no-icon {\n      padding: ",";\n    }\n    .ant-alert-close-icon {\n      right: ",";\n      left: ",";\n    }\n  }\n  &&.ant-alert-no-icon {\n    padding: ",";\n  }\n  .ant-alert-close-icon {\n    right: ",";\n    left: ",";\n  }\n"]);return p=function(){return t},t}var d=Object(c.d)(function(t){return i.a.createElement(l.a,t)})(p(),Object(o.palette)("text",1),Object(o.palette)("success",0),Object(o.palette)("error",0),function(t){return"rtl"===t["data-rtl"]?"16px 60px 16px 16px":"16px 16px 16px 60px"},Object(o.palette)("text",0),Object(o.palette)("text",1),function(t){return"rtl"===t["data-rtl"]?"inherit":"20px"},function(t){return"rtl"===t["data-rtl"]?"20px":"inherit"},function(t){return"rtl"===t["data-rtl"]?"12px 16px 12px 48px":"12px 48px 12px 16px"},function(t){return"rtl"===t["data-rtl"]?"inherit":"16px"},function(t){return"rtl"===t["data-rtl"]?"16px":"inherit"},function(t){return"rtl"===t["data-rtl"]?"12px 16px 12px 48px":"12px 48px 12px 16px"},function(t){return"rtl"===t["data-rtl"]?"inherit":"16px"},function(t){return"rtl"===t["data-rtl"]?"16px":"inherit"}),s=Object(u.a)(d);n.a=s},2807:function(t,n,e){"use strict";e.r(n);var r=e(9),a=e(10),i=e(14),l=e(15),c=e(8),o=e(0),u=e.n(o),p=e(996),d=e(1037),s=e(1652),f=e(1202),m=e(1089),x=e(1066),g=e(1088),h=e(1090),b=e(995),w=e(36),y=e(27),v=e(1166).a,E=e(26),j=e(7);function O(){var t=Object(y.a)(["\n  && {\n    .ant-spin-dot {\n      i {\n        background-color: ",";\n      }\n    }\n  }\n"]);return O=function(){return t},t}var k=Object(E.d)(function(t){return u.a.createElement(v,t)})(O(),Object(j.palette)("primary",0));function B(t){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}();return function(){var e,r=Object(c.a)(t);if(n){var a=Object(c.a)(this).constructor;e=Reflect.construct(r,arguments,a)}else e=r.apply(this,arguments);return Object(l.a)(this,e)}}e.d(n,"default",function(){return z});var z=function(t){Object(i.a)(e,t);var n=B(e);function e(){var t;Object(r.a)(this,e);for(var a=arguments.length,i=new Array(a),l=0;l<a;l++)i[l]=arguments[l];return(t=n.call.apply(n,[this].concat(i))).state={loading:!1},t.toggle=function(n){t.setState({loading:n})},t}return Object(a.a)(e,[{key:"render",value:function(){var t=u.a.createElement(s.a,{message:u.a.createElement(w.a,{id:"feedback.alert.spin.alertTitle"}),description:u.a.createElement(w.a,{id:"feedback.alert.spin.alertDescription"}),type:"info"}),n=b.a.rowStyle,e=b.a.colStyle,r=b.a.gutter;return u.a.createElement(g.default,null,u.a.createElement(m.default,null,u.a.createElement(w.a,{id:"feedback.alert.spin"})),u.a.createElement(p.a,{style:n,gutter:r,justify:"start"},u.a.createElement(d.a,{md:12,sm:12,xs:24,style:e},u.a.createElement(x.default,{title:u.a.createElement(w.a,{id:"feedback.alert.spin.basicTitle"})},u.a.createElement(h.default,null,u.a.createElement(k,{size:"small"}),"\xa0\xa0\xa0",u.a.createElement(k,null),"\xa0\xa0\xa0",u.a.createElement(k,{size:"large"}),"\xa0\xa0\xa0"))),u.a.createElement(d.a,{md:12,sm:12,xs:24,style:e},u.a.createElement(x.default,{title:u.a.createElement(w.a,{id:"feedback.alert.spin.background"})},u.a.createElement(h.default,null,u.a.createElement("div",{style:{textAlign:"center",background:"#f1f3f6",padding:"30px 50px"}},u.a.createElement(k,null)))))),u.a.createElement(p.a,{style:n,gutter:r,justify:"start"},u.a.createElement(d.a,{md:12,sm:12,xs:24,style:e},u.a.createElement(x.default,{title:u.a.createElement(w.a,{id:"feedback.alert.spin.backgroundDescription"})},u.a.createElement(h.default,null,u.a.createElement("div",{style:{marginBottom:"20px"}},u.a.createElement(k,{spinning:this.state.loading},t)),u.a.createElement(w.a,{id:"feedback.alert.spin.loadingState"}),u.a.createElement(f.a,{checked:this.state.loading,onChange:this.toggle}))))))}}]),e}(o.Component)},995:function(t,n,e){"use strict";var r={rowStyle:{width:"100%",display:"flex",flexFlow:"row wrap"},colStyle:{marginBottom:"16px"},gutter:16};n.a=r}}]);
//# sourceMappingURL=59.dd7a4ee9.chunk.js.map