(window.webpackJsonp=window.webpackJsonp||[]).push([[64,129,130,131,132],{1066:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(27),i=n(26),o=n(7);function c(){var e=Object(l.a)(["\n  font-size: 13px;\n  font-weight: 400;\n  color: ",";\n  line-height: 24px;\n"]);return c=function(){return e},e}function u(){var e=Object(l.a)(["\n  font-size: 14px;\n  font-weight: 500;\n  color: ",";\n  margin: 0;\n  margin-bottom: 5px;\n"]);return u=function(){return e},e}var m=i.d.h3(u(),Object(o.palette)("text",0)),d=i.d.p(c(),Object(o.palette)("text",3)),p=function(e){return r.a.createElement("div",null,e.title?r.a.createElement(m,{className:"isoBoxTitle"}," ",e.title," "):"",e.subtitle?r.a.createElement(d,{className:"isoBoxSubTitle"}," ",e.subtitle," "):"")};function s(){var e=Object(l.a)(["\n  width: 100%;\n  height: 100%;\n  padding: 20px;\n  background-color: #ffffff;\n  border: 1px solid ",";\n  margin: 0 0 30px;\n\n  &:last-child {\n    margin-bottom: 0;\n  }\n\n  @media only screen and (max-width: 767px) {\n    padding: 20px;\n    ",";\n  }\n\n  &.half {\n    width: calc(50% - 34px);\n    @media (max-width: 767px) {\n      width: 100%;\n    }\n  }\n"]);return s=function(){return e},e}var f=i.d.div(s(),Object(o.palette)("border",0),"");t.default=function(e){return r.a.createElement(f,{className:"".concat(e.className," isoBoxWrapper"),style:e.style},r.a.createElement(p,{title:e.title,subtitle:e.subtitle}),e.children)}},1088:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(27);function i(){var e=Object(l.a)(["\n  padding: 40px 20px;\n  display: flex;\n  flex-flow: row wrap;\n  overflow: hidden;\n\n  @media only screen and (max-width: 767px) {\n    padding: 50px 20px;\n  }\n\n  @media (max-width: 580px) {\n    padding: 15px;\n  }\n"]);return i=function(){return e},e}var o=n(26).d.div(i());t.default=function(e){return r.a.createElement(o,Object.assign({className:null!=e.className?"".concat(e.className," isoLayoutContentWrapper"):"isoLayoutContentWrapper"},e),e.children)}},1089:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(27),i=n(26),o=n(7),c=n(39);function u(){var e=Object(l.a)(["\n  font-size: 19px;\n  font-weight: 500;\n  color: ",";\n  width: 100%;\n  margin-right: 17px;\n  margin-bottom: 30px;\n  display: flex;\n  align-items: center;\n  white-space: nowrap;\n\n  @media only screen and (max-width: 767px) {\n    margin: 0 10px;\n    margin-bottom: 30px;\n  }\n\n  &:before {\n    content: '';\n    width: 5px;\n    height: 40px;\n    background-color: ",";\n    display: flex;\n    margin: ",";\n  }\n\n  &:after {\n    content: '';\n    width: 100%;\n    height: 1px;\n    background-color: ",";\n    display: flex;\n    margin: ",";\n  }\n"]);return u=function(){return e},e}var m=i.d.h1(u(),Object(o.palette)("secondary",2),Object(o.palette)("secondary",3),function(e){return"rtl"===e["data-rtl"]?"0 0 0 15px":"0 15px 0 0"},Object(o.palette)("secondary",3),function(e){return"rtl"===e["data-rtl"]?"0 15px 0 0":"0 0 0 15px"}),d=Object(c.a)(m);t.default=function(e){return r.a.createElement(d,{className:"isoComponentTitle"},e.children)}},1090:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(27),i=n(26),o=n(7),c=n(39);function u(){var e=Object(l.a)(["\n  margin-top: 30px;\n  -webkit-overflow-scrolling: touch;\n\n  .demoBtn {\n    margin-right: ",";\n    margin-left: ",";\n  }\n\n  .demoBtnsWrapper {\n    &:nth-child(1) {\n      margin-left: ",";\n      margin-right: ",";\n      white-space: nowrap;\n    }\n\n    &:nth-child(2) {\n      width: 70px;\n      float: ",";\n    }\n\n    &:nth-child(3) {\n      width: 70px;\n      margin-left: ",";\n      margin-right: ",";\n    }\n\n    &:nth-child(4) {\n      margin-left: ",";\n      margin-right: ",";\n      clear: both;\n      white-space: nowrap;\n    }\n\n    @media only screen and (max-width: 480px) {\n      margin-left: ",";\n      white-space: nowrap;\n      margin-right: ",";\n      float: none !important;\n    }\n\n    .demoPosBtn {\n      width: 70px;\n      margin-right: ",";\n      margin-left: ",";\n      margin-bottom: 8px;\n      padding: 0;\n\n      @media only screen and (max-width: 480px) {\n        width: 65px;\n      }\n    }\n  }\n\n  .ant-btn {\n    &:not(.demoPosBtn) {\n      &:last-child {\n        margin-right: 0;\n      }\n    }\n  }\n\n  .tooltipBtn {\n    display: inline-block;\n    line-height: 32px;\n    height: 32px;\n    width: 70px;\n    font-size: 14px;\n    text-align: center;\n    background: ",";\n    margin-right: ",";\n    margin-left: ",";\n    margin-bottom: 6px;\n    border-radius: 6px;\n  }\n\n  .ant-progress {\n    &.ant-progress-circle {\n      margin-right: ",";\n      margin-left: ",";\n\n      &:last-child {\n        margin-right: ",";\n        margin-left: ",";\n      }\n    }\n  }\n\n  strong {\n    font-weight: 700;\n    font-size: 14px;\n  }\n"]);return u=function(){return e},e}var m=i.d.div(u(),function(e){return"rtl"===e["data-rtl"]?"0":"10px"},function(e){return"rtl"===e["data-rtl"]?"10px":"0"},function(e){return"rtl"===e["data-rtl"]?"0":"70px"},function(e){return"rtl"===e["data-rtl"]?"70px":"0"},function(e){return"rtl"===e["data-rtl"]?"right":"left"},function(e){return"rtl"===e["data-rtl"]?"0":"295px"},function(e){return"rtl"===e["data-rtl"]?"295px":"0"},function(e){return"rtl"===e["data-rtl"]?"0":"70px"},function(e){return"rtl"===e["data-rtl"]?"70px":"0"},function(e){return"rtl"===e["data-rtl"]?"8px":"0 !important"},function(e){return"rtl"===e["data-rtl"]?"0 !important":"8px"},function(e){return"rtl"===e["data-rtl"]?"0":"8px"},function(e){return"rtl"===e["data-rtl"]?"8px":"0"},Object(o.palette)("secondary",1),function(e){return"rtl"===e["data-rtl"]?"auto":"6px"},function(e){return"rtl"===e["data-rtl"]?"6px":"0"},function(e){return"rtl"===e["data-rtl"]?"0":"15px"},function(e){return"rtl"===e["data-rtl"]?"15px":"0"},function(e){return e["data-rtl"],"0"},function(e){return e["data-rtl"],"0"}),d=Object(c.a)(m);t.default=function(e){return r.a.createElement(d,{className:"isoExampleWrapper",style:e.style},e.children)}},1291:function(e,t,n){"use strict";var a=n(1043),r=n(1057),l=n(27),i=n(26),o=n(7);function c(){var e=Object(l.a)(["\n  .ant-dropdown-menu-item {\n    a {\n      font-size: 13px;\n      color: ",";\n    }\n  }\n\n  .ant-dropdown-menu-item,\n  .ant-dropdown-menu-submenu-title {\n    a {\n      font-size: 13px;\n      color: ",";\n    }\n\n    &:hover {\n      background-color: ",";\n    }\n  }\n"]);return c=function(){return e},e}function u(){var e=Object(l.a)(["\n  display: inline-block;\n\n  &.ant-dropdown-button {\n    &.ant-btn-group > .ant-btn:first-child:not(:last-child) {\n      border-radius: ",";\n    }\n\n    &.ant-btn-group > .ant-btn:last-child:not(:first-child) {\n      border-radius: ",";\n    }\n\n    &.ant-btn-group .ant-btn + .ant-btn {\n      margin: ",";\n    }\n  }\n\n  .ant-dropdown-link {\n    font-size: 13px;\n    color: ",";\n\n    &:hover {\n      color: ",";\n    }\n  }\n"]);return u=function(){return e},e}var m=function(e){return Object(i.d)(e)(c(),Object(o.palette)("text",1),Object(o.palette)("text",1),Object(o.palette)("secondary",1))},d=function(e){return Object(i.d)(e)(u(),function(e){return"rtl"===e["data-rtl"]?"0 4px 4px 0":"4px 0  0 4px"},function(e){return"rtl"===e["data-rtl"]?"4px 0 0 4px":"0 4px 4px 0"},function(e){return"rtl"===e["data-rtl"]?"0 -1px 0 0":"0 0 0 -1px"},Object(o.palette)("primary",0),Object(o.palette)("primary",2))},p=n(39);n.d(t,"a",function(){return x}),n.d(t,"b",function(){return b}),n.d(t,"c",function(){return g}),n.d(t,"d",function(){return E});var s=d(a.a),f=Object(p.a)(s),h=d(a.a.Button),x=Object(p.a)(h),b=m(r.a),g=m(r.a.Item),E=m(r.a.SubMenu);t.e=f},1592:function(e,t,n){"use strict";var a=n(1713);t.a=a.a},2766:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return N});var a=n(9),r=n(10),l=n(14),i=n(15),o=n(8),c=n(0),u=n.n(c),m=n(996),d=n(1037),p=n(2),s=n(96),f=n(1291),h=n(1047),x=n(1592),b=n(1089),g=n(1066),E=n(1088),y=n(1090),w=n(995),v=n(36),k=n(39);function j(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var n,a=Object(o.a)(e);if(t){var r=Object(o.a)(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return Object(i.a)(this,n)}}var O=s.a.Divider,C=f.a,B=h.b,N=function(e){Object(l.a)(n,e);var t=j(n);function n(){var e;Object(a.a)(this,n);for(var r=arguments.length,l=new Array(r),i=0;i<r;i++)l[i]=arguments[i];return(e=t.call.apply(t,[this].concat(l))).state={visible:!1},e.handleButtonClick=function(e){x.a.info("Click on left button.")},e.handleMenuClickToLink=function(e){x.a.info("Click on menu item.")},e.handleMenuClick=function(t){"3"===t.key&&e.setState({visible:!1})},e.handleVisibleChange=function(t){e.setState({visible:t})},e}return Object(r.a)(n,[{key:"render",value:function(){var e=w.a.rowStyle,t=w.a.colStyle,n=w.a.gutter,a={marginBottom:"8px",marginRight:"8px"},r=u.a.createElement(f.b,null,u.a.createElement(f.c,null,u.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"http://redq.io/"},"1st menu item")),u.a.createElement(f.c,null,u.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"http://redq.io/"},"2nd menu item")),u.a.createElement(f.c,null,u.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"http://redq.io/"},"3d menu item"))),l=u.a.createElement(f.b,null,u.a.createElement(f.c,{key:"0"},u.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"http://redq.io/"},"1st menu item")),u.a.createElement(f.c,{key:"1"},u.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"http://redq.io/"},"2nd menu item")),u.a.createElement(O,null),u.a.createElement(f.c,{key:"3",disabled:!0},"3d menu item\uff08disabled\uff09")),i=u.a.createElement(f.b,{onClick:this.handleMenuClickToLink},u.a.createElement(f.c,{key:"1"},"1st menu item"),u.a.createElement(f.c,{key:"2"},"2nd menu item"),u.a.createElement(f.c,{key:"3"},"3d menu item")),o=u.a.createElement(f.b,null,u.a.createElement(f.c,null,"1st menu item"),u.a.createElement(f.c,null,"2nd menu item"),u.a.createElement(f.d,{title:"sub menu"},u.a.createElement(f.c,null,"3d menu item"),u.a.createElement(f.c,null,"4th menu item")));return u.a.createElement(E.default,null,u.a.createElement(b.default,null,u.a.createElement(v.a,{id:"uiElements.dropdown.dropdown"})),u.a.createElement(m.a,{style:e,gutter:n,justify:"start"},u.a.createElement(d.a,{md:12,sm:12,xs:24,style:t},u.a.createElement(g.default,{title:u.a.createElement(v.a,{id:"uiElements.dropdown.hoverDropdown"})},u.a.createElement(y.default,null,u.a.createElement(f.e,{overlay:r},u.a.createElement("a",{className:"ant-dropdown-link",href:"# "},u.a.createElement(v.a,{id:"uiElements.dropdown.hoverMe"})," ",u.a.createElement(p.a,{type:"down"})))))),u.a.createElement(d.a,{md:12,sm:12,xs:24,style:t},u.a.createElement(g.default,{title:u.a.createElement(v.a,{id:"uiElements.dropdown.hoverPlacement"})},u.a.createElement(y.default,null,u.a.createElement(f.e,{overlay:r,placement:"bottomLeft"},u.a.createElement(B,{style:a},"bottomLeft")),u.a.createElement(f.e,{overlay:r,placement:"bottomCenter"},u.a.createElement(B,{style:a},"bottomCenter")),u.a.createElement(f.e,{overlay:r,placement:"bottomRight"},u.a.createElement(B,{style:a},"bottomRight")),u.a.createElement("br",null),u.a.createElement(f.e,{overlay:r,placement:"topLeft"},u.a.createElement(B,{style:a},"topLeft")),u.a.createElement(f.e,{overlay:r,placement:"topCenter"},u.a.createElement(B,{style:a},"topCenter")),u.a.createElement(f.e,{overlay:r,placement:"topRight"},u.a.createElement(B,{style:a},"topRight")))))),u.a.createElement(m.a,{style:e,gutter:n,justify:"start"},u.a.createElement(d.a,{md:12,sm:12,xs:24,style:t},u.a.createElement(g.default,{title:u.a.createElement(v.a,{id:"uiElements.dropdown.hoverDisableLink"})},u.a.createElement(y.default,null,u.a.createElement(f.e,{overlay:l},u.a.createElement("a",{className:"ant-dropdown-link",href:"# "},"Hover me ",u.a.createElement(p.a,{type:"down"})))))),u.a.createElement(d.a,{md:12,sm:12,xs:24,style:t},u.a.createElement(g.default,{title:u.a.createElement(v.a,{id:"uiElements.dropdown.clickedDropdown"})},u.a.createElement(y.default,null,u.a.createElement(f.e,{overlay:r,trigger:["click"]},u.a.createElement("a",{className:"ant-dropdown-link",href:"# "},"Click me ",u.a.createElement(p.a,{type:"down"}))))))),u.a.createElement(m.a,{style:e,gutter:n,justify:"start"},u.a.createElement(d.a,{md:12,sm:12,xs:24,style:t},u.a.createElement(g.default,{title:u.a.createElement(v.a,{id:"uiElements.dropdown.buttonDropdown"})},u.a.createElement(y.default,null,u.a.createElement(C,{onClick:this.handleButtonClick,overlay:i},"Dropdown"),u.a.createElement(C,{onClick:this.handleButtonClick,overlay:i,disabled:!0,style:{margin:"rtl"===k.b?"0 8px 0 0":"0 0 0 8px"}},"Dropdown"),u.a.createElement(f.e,{overlay:i},u.a.createElement(B,{style:{margin:"rtl"===k.b?"0 8px 0 0":"0 0 0 8px"}},"Button ",u.a.createElement(p.a,{type:"down"})))))),u.a.createElement(d.a,{md:12,sm:12,xs:24,style:t},u.a.createElement(g.default,{title:u.a.createElement(v.a,{id:"uiElements.dropdown.clickedDropdown"})},u.a.createElement(y.default,null,u.a.createElement(f.e,{overlay:o},u.a.createElement("a",{className:"ant-dropdown-link",href:"# "},"Cascading menu ",u.a.createElement(p.a,{type:"down"}))))))))}}]),n}(c.Component)},995:function(e,t,n){"use strict";var a={rowStyle:{width:"100%",display:"flex",flexFlow:"row wrap"},colStyle:{marginBottom:"16px"},gutter:16};t.a=a}}]);
//# sourceMappingURL=64.55e65c8f.chunk.js.map