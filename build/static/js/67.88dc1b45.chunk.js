(window.webpackJsonp=window.webpackJsonp||[]).push([[67,128,129,130,131],{1047:function(t,n,e){"use strict";e.r(n);var a=e(0),r=e.n(a),l=e(27),i=e(26),c=e(10);function u(){var t=Object(l.a)(["\n  font-size: 13px;\n  font-weight: 400;\n  color: ",";\n  line-height: 24px;\n"]);return u=function(){return t},t}function o(){var t=Object(l.a)(["\n  font-size: 14px;\n  font-weight: 500;\n  color: ",";\n  margin: 0;\n  margin-bottom: 5px;\n"]);return o=function(){return t},t}var d=i.d.h3(o(),Object(c.palette)("text",0)),m=i.d.p(u(),Object(c.palette)("text",3)),s=function(t){return r.a.createElement("div",null,t.title?r.a.createElement(d,{className:"isoBoxTitle"}," ",t.title," "):"",t.subtitle?r.a.createElement(m,{className:"isoBoxSubTitle"}," ",t.subtitle," "):"")};function f(){var t=Object(l.a)(["\n  width: 100%;\n  height: 100%;\n  padding: 20px;\n  background-color: #ffffff;\n  border: 1px solid ",";\n  margin: 0 0 30px;\n\n  &:last-child {\n    margin-bottom: 0;\n  }\n\n  @media only screen and (max-width: 767px) {\n    padding: 20px;\n    ",";\n  }\n\n  &.half {\n    width: calc(50% - 34px);\n    @media (max-width: 767px) {\n      width: 100%;\n    }\n  }\n"]);return f=function(){return t},t}var p=i.d.div(f(),Object(c.palette)("border",0),"");n.default=function(t){return r.a.createElement(p,{className:"".concat(t.className," isoBoxWrapper"),style:t.style},r.a.createElement(s,{title:t.title,subtitle:t.subtitle}),t.children)}},1093:function(t,n,e){"use strict";e.r(n);var a=e(0),r=e.n(a),l=e(27);function i(){var t=Object(l.a)(["\n  padding: 40px 20px;\n  display: flex;\n  flex-flow: row wrap;\n  overflow: hidden;\n\n  @media only screen and (max-width: 767px) {\n    padding: 50px 20px;\n  }\n\n  @media (max-width: 580px) {\n    padding: 15px;\n  }\n"]);return i=function(){return t},t}var c=e(26).d.div(i());n.default=function(t){return r.a.createElement(c,Object.assign({className:null!=t.className?"".concat(t.className," isoLayoutContentWrapper"):"isoLayoutContentWrapper"},t),t.children)}},1094:function(t,n,e){"use strict";e.r(n);var a=e(0),r=e.n(a),l=e(27),i=e(26),c=e(10),u=e(39);function o(){var t=Object(l.a)(["\n  font-size: 19px;\n  font-weight: 500;\n  color: ",";\n  width: 100%;\n  margin-right: 17px;\n  margin-bottom: 30px;\n  display: flex;\n  align-items: center;\n  white-space: nowrap;\n\n  @media only screen and (max-width: 767px) {\n    margin: 0 10px;\n    margin-bottom: 30px;\n  }\n\n  &:before {\n    content: '';\n    width: 5px;\n    height: 40px;\n    background-color: ",";\n    display: flex;\n    margin: ",";\n  }\n\n  &:after {\n    content: '';\n    width: 100%;\n    height: 1px;\n    background-color: ",";\n    display: flex;\n    margin: ",";\n  }\n"]);return o=function(){return t},t}var d=i.d.h1(o(),Object(c.palette)("secondary",2),Object(c.palette)("secondary",3),function(t){return"rtl"===t["data-rtl"]?"0 0 0 15px":"0 15px 0 0"},Object(c.palette)("secondary",3),function(t){return"rtl"===t["data-rtl"]?"0 15px 0 0":"0 0 0 15px"}),m=Object(u.a)(d);n.default=function(t){return r.a.createElement(m,{className:"isoComponentTitle"},t.children)}},1095:function(t,n,e){"use strict";e.r(n);var a=e(0),r=e.n(a),l=e(27),i=e(26),c=e(10),u=e(39);function o(){var t=Object(l.a)(["\n  margin-top: 30px;\n  -webkit-overflow-scrolling: touch;\n\n  .demoBtn {\n    margin-right: ",";\n    margin-left: ",";\n  }\n\n  .demoBtnsWrapper {\n    &:nth-child(1) {\n      margin-left: ",";\n      margin-right: ",";\n      white-space: nowrap;\n    }\n\n    &:nth-child(2) {\n      width: 70px;\n      float: ",";\n    }\n\n    &:nth-child(3) {\n      width: 70px;\n      margin-left: ",";\n      margin-right: ",";\n    }\n\n    &:nth-child(4) {\n      margin-left: ",";\n      margin-right: ",";\n      clear: both;\n      white-space: nowrap;\n    }\n\n    @media only screen and (max-width: 480px) {\n      margin-left: ",";\n      white-space: nowrap;\n      margin-right: ",";\n      float: none !important;\n    }\n\n    .demoPosBtn {\n      width: 70px;\n      margin-right: ",";\n      margin-left: ",";\n      margin-bottom: 8px;\n      padding: 0;\n\n      @media only screen and (max-width: 480px) {\n        width: 65px;\n      }\n    }\n  }\n\n  .ant-btn {\n    &:not(.demoPosBtn) {\n      &:last-child {\n        margin-right: 0;\n      }\n    }\n  }\n\n  .tooltipBtn {\n    display: inline-block;\n    line-height: 32px;\n    height: 32px;\n    width: 70px;\n    font-size: 14px;\n    text-align: center;\n    background: ",";\n    margin-right: ",";\n    margin-left: ",";\n    margin-bottom: 6px;\n    border-radius: 6px;\n  }\n\n  .ant-progress {\n    &.ant-progress-circle {\n      margin-right: ",";\n      margin-left: ",";\n\n      &:last-child {\n        margin-right: ",";\n        margin-left: ",";\n      }\n    }\n  }\n\n  strong {\n    font-weight: 700;\n    font-size: 14px;\n  }\n"]);return o=function(){return t},t}var d=i.d.div(o(),function(t){return"rtl"===t["data-rtl"]?"0":"10px"},function(t){return"rtl"===t["data-rtl"]?"10px":"0"},function(t){return"rtl"===t["data-rtl"]?"0":"70px"},function(t){return"rtl"===t["data-rtl"]?"70px":"0"},function(t){return"rtl"===t["data-rtl"]?"right":"left"},function(t){return"rtl"===t["data-rtl"]?"0":"295px"},function(t){return"rtl"===t["data-rtl"]?"295px":"0"},function(t){return"rtl"===t["data-rtl"]?"0":"70px"},function(t){return"rtl"===t["data-rtl"]?"70px":"0"},function(t){return"rtl"===t["data-rtl"]?"8px":"0 !important"},function(t){return"rtl"===t["data-rtl"]?"0 !important":"8px"},function(t){return"rtl"===t["data-rtl"]?"0":"8px"},function(t){return"rtl"===t["data-rtl"]?"8px":"0"},Object(c.palette)("secondary",1),function(t){return"rtl"===t["data-rtl"]?"auto":"6px"},function(t){return"rtl"===t["data-rtl"]?"6px":"0"},function(t){return"rtl"===t["data-rtl"]?"0":"15px"},function(t){return"rtl"===t["data-rtl"]?"15px":"0"},function(t){return t["data-rtl"],"0"},function(t){return t["data-rtl"],"0"}),m=Object(u.a)(d);n.default=function(t){return r.a.createElement(m,{className:"isoExampleWrapper",style:t.style},t.children)}},2807:function(t,n,e){"use strict";e.r(n);var a=e(12),r=e(13),l=e(15),i=e(16),c=e(11),u=e(0),o=e.n(u),d=e(996),m=e(1036),s=e(2763).a,f=e(1094),p=e(1047),h=e(1093),x=e(1095),g=e(995),E=e(36),b=e(27),v=e(26),w=e(10),y=e(39);function j(){var t=Object(b.a)(["\n  .isoCarousalDemoContainer {\n    width: 100%;\n    display: flex;\n    flex-flow: row wrap;\n  }\n  .ant-carousel {\n    .slick-slider {\n      direction: ",";\n      .slick-track {\n        left: auto;\n        right: 0;\n\n        .slick-slide {\n          text-align: center;\n          height: 160px;\n          line-height: 160px;\n          background: ",";\n          color: #fff;\n          overflow: hidden;\n          float: left !important;\n        }\n      }\n    }\n  }\n"]);return j=function(){return t},t}var O=v.d.div(j(),function(t){return"rtl"===t["data-rtl"]?"ltr":"inherit"},Object(w.palette)("secondary",4)),C=Object(y.a)(O);function k(t){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}();return function(){var e,a=Object(c.a)(t);if(n){var r=Object(c.a)(this).constructor;e=Reflect.construct(a,arguments,r)}else e=a.apply(this,arguments);return Object(i.a)(this,e)}}e.d(n,"default",function(){return B});var S=function(t){return o.a.createElement(C,null,o.a.createElement(s,t))},B=function(t){Object(l.a)(e,t);var n=k(e);function e(){var t;Object(a.a)(this,e);for(var r=arguments.length,l=new Array(r),i=0;i<r;i++)l[i]=arguments[i];return(t=n.call.apply(n,[this].concat(l))).onChange=function(t,n,e){},t}return Object(r.a)(e,[{key:"render",value:function(){var t=g.a.rowStyle,n=g.a.colStyle,e=g.a.gutter;return o.a.createElement(h.default,null,o.a.createElement(f.default,null,o.a.createElement(E.a,{id:"uiElements.carousel.carousel"})),o.a.createElement(d.a,{style:t,gutter:e,justify:"start"},o.a.createElement(m.a,{md:12,sm:12,xs:24,style:n},o.a.createElement(p.default,{title:o.a.createElement(E.a,{id:"uiElements.carousel.basicCarousel"}),subtitle:o.a.createElement(E.a,{id:"uiElements.carousel.basicCarouselSubTitle"})},o.a.createElement(x.default,null,o.a.createElement(S,{afterChange:this.onChange},o.a.createElement("div",null,o.a.createElement("h3",null,"1")),o.a.createElement("div",null,o.a.createElement("h3",null,"2")),o.a.createElement("div",null,o.a.createElement("h3",null,"3")),o.a.createElement("div",null,o.a.createElement("h3",null,"4")))))),o.a.createElement(m.a,{md:12,sm:12,xs:24,style:n},o.a.createElement(p.default,{title:o.a.createElement(E.a,{id:"uiElements.carousel.verticalCarousel"}),subtitle:o.a.createElement(E.a,{id:"uiElements.carousel.verticalCarouselSubTitle"})},o.a.createElement(x.default,null,o.a.createElement(S,{afterChange:this.onChange,vertical:!0},o.a.createElement("div",null,o.a.createElement("h3",null,"1")),o.a.createElement("div",null,o.a.createElement("h3",null,"2")),o.a.createElement("div",null,o.a.createElement("h3",null,"3")),o.a.createElement("div",null,o.a.createElement("h3",null,"4"))))))),o.a.createElement(d.a,{style:t,gutter:e,justify:"start"},o.a.createElement(m.a,{md:12,sm:12,xs:24,style:n},o.a.createElement(p.default,{title:o.a.createElement(E.a,{id:"uiElements.carousel.fadeInTransition"}),subtitle:o.a.createElement(E.a,{id:"uiElements.carousel.fadeInTransitionSubTitle"})},o.a.createElement(x.default,null,o.a.createElement(S,{effect:"fade"},o.a.createElement("div",null,o.a.createElement("h3",null,"1")),o.a.createElement("div",null,o.a.createElement("h3",null,"2")),o.a.createElement("div",null,o.a.createElement("h3",null,"3")),o.a.createElement("div",null,o.a.createElement("h3",null,"4")))))),o.a.createElement(m.a,{md:12,sm:12,xs:24,style:n},o.a.createElement(p.default,{title:o.a.createElement(E.a,{id:"uiElements.carousel.scrollAutomatically"}),subtitle:o.a.createElement(E.a,{id:"uiElements.carousel.scrollAutomaticallySubTitle"})},o.a.createElement(x.default,null,o.a.createElement(S,{autoplay:!0,rtl:!0},o.a.createElement("div",null,o.a.createElement("h3",null,"1")),o.a.createElement("div",null,o.a.createElement("h3",null,"2")),o.a.createElement("div",null,o.a.createElement("h3",null,"3")),o.a.createElement("div",null,o.a.createElement("h3",null,"4"))))))))}}]),e}(u.Component)},995:function(t,n,e){"use strict";var a={rowStyle:{width:"100%",display:"flex",flexFlow:"row wrap"},colStyle:{marginBottom:"16px"},gutter:16};n.a=a}}]);
//# sourceMappingURL=67.88dc1b45.chunk.js.map