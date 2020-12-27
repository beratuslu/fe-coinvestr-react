(window.webpackJsonp=window.webpackJsonp||[]).push([[89,129,130,131,132],{1066:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),l=n(27),i=n(26),c=n(7);function o(){var t=Object(l.a)(["\n  font-size: 13px;\n  font-weight: 400;\n  color: ",";\n  line-height: 24px;\n"]);return o=function(){return t},t}function d(){var t=Object(l.a)(["\n  font-size: 14px;\n  font-weight: 500;\n  color: ",";\n  margin: 0;\n  margin-bottom: 5px;\n"]);return d=function(){return t},t}var p=i.d.h3(d(),Object(c.palette)("text",0)),u=i.d.p(o(),Object(c.palette)("text",3)),s=function(t){return r.a.createElement("div",null,t.title?r.a.createElement(p,{className:"isoBoxTitle"}," ",t.title," "):"",t.subtitle?r.a.createElement(u,{className:"isoBoxSubTitle"}," ",t.subtitle," "):"")};function f(){var t=Object(l.a)(["\n  width: 100%;\n  height: 100%;\n  padding: 20px;\n  background-color: #ffffff;\n  border: 1px solid ",";\n  margin: 0 0 30px;\n\n  &:last-child {\n    margin-bottom: 0;\n  }\n\n  @media only screen and (max-width: 767px) {\n    padding: 20px;\n    ",";\n  }\n\n  &.half {\n    width: calc(50% - 34px);\n    @media (max-width: 767px) {\n      width: 100%;\n    }\n  }\n"]);return f=function(){return t},t}var m=i.d.div(f(),Object(c.palette)("border",0),"");e.default=function(t){return r.a.createElement(m,{className:"".concat(t.className," isoBoxWrapper"),style:t.style},r.a.createElement(s,{title:t.title,subtitle:t.subtitle}),t.children)}},1088:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),l=n(27);function i(){var t=Object(l.a)(["\n  padding: 40px 20px;\n  display: flex;\n  flex-flow: row wrap;\n  overflow: hidden;\n\n  @media only screen and (max-width: 767px) {\n    padding: 50px 20px;\n  }\n\n  @media (max-width: 580px) {\n    padding: 15px;\n  }\n"]);return i=function(){return t},t}var c=n(26).d.div(i());e.default=function(t){return r.a.createElement(c,Object.assign({className:null!=t.className?"".concat(t.className," isoLayoutContentWrapper"):"isoLayoutContentWrapper"},t),t.children)}},1089:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),l=n(27),i=n(26),c=n(7),o=n(39);function d(){var t=Object(l.a)(["\n  font-size: 19px;\n  font-weight: 500;\n  color: ",";\n  width: 100%;\n  margin-right: 17px;\n  margin-bottom: 30px;\n  display: flex;\n  align-items: center;\n  white-space: nowrap;\n\n  @media only screen and (max-width: 767px) {\n    margin: 0 10px;\n    margin-bottom: 30px;\n  }\n\n  &:before {\n    content: '';\n    width: 5px;\n    height: 40px;\n    background-color: ",";\n    display: flex;\n    margin: ",";\n  }\n\n  &:after {\n    content: '';\n    width: 100%;\n    height: 1px;\n    background-color: ",";\n    display: flex;\n    margin: ",";\n  }\n"]);return d=function(){return t},t}var p=i.d.h1(d(),Object(c.palette)("secondary",2),Object(c.palette)("secondary",3),function(t){return"rtl"===t["data-rtl"]?"0 0 0 15px":"0 15px 0 0"},Object(c.palette)("secondary",3),function(t){return"rtl"===t["data-rtl"]?"0 15px 0 0":"0 0 0 15px"}),u=Object(o.a)(p);e.default=function(t){return r.a.createElement(u,{className:"isoComponentTitle"},t.children)}},1090:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),l=n(27),i=n(26),c=n(7),o=n(39);function d(){var t=Object(l.a)(["\n  margin-top: 30px;\n  -webkit-overflow-scrolling: touch;\n\n  .demoBtn {\n    margin-right: ",";\n    margin-left: ",";\n  }\n\n  .demoBtnsWrapper {\n    &:nth-child(1) {\n      margin-left: ",";\n      margin-right: ",";\n      white-space: nowrap;\n    }\n\n    &:nth-child(2) {\n      width: 70px;\n      float: ",";\n    }\n\n    &:nth-child(3) {\n      width: 70px;\n      margin-left: ",";\n      margin-right: ",";\n    }\n\n    &:nth-child(4) {\n      margin-left: ",";\n      margin-right: ",";\n      clear: both;\n      white-space: nowrap;\n    }\n\n    @media only screen and (max-width: 480px) {\n      margin-left: ",";\n      white-space: nowrap;\n      margin-right: ",";\n      float: none !important;\n    }\n\n    .demoPosBtn {\n      width: 70px;\n      margin-right: ",";\n      margin-left: ",";\n      margin-bottom: 8px;\n      padding: 0;\n\n      @media only screen and (max-width: 480px) {\n        width: 65px;\n      }\n    }\n  }\n\n  .ant-btn {\n    &:not(.demoPosBtn) {\n      &:last-child {\n        margin-right: 0;\n      }\n    }\n  }\n\n  .tooltipBtn {\n    display: inline-block;\n    line-height: 32px;\n    height: 32px;\n    width: 70px;\n    font-size: 14px;\n    text-align: center;\n    background: ",";\n    margin-right: ",";\n    margin-left: ",";\n    margin-bottom: 6px;\n    border-radius: 6px;\n  }\n\n  .ant-progress {\n    &.ant-progress-circle {\n      margin-right: ",";\n      margin-left: ",";\n\n      &:last-child {\n        margin-right: ",";\n        margin-left: ",";\n      }\n    }\n  }\n\n  strong {\n    font-weight: 700;\n    font-size: 14px;\n  }\n"]);return d=function(){return t},t}var p=i.d.div(d(),function(t){return"rtl"===t["data-rtl"]?"0":"10px"},function(t){return"rtl"===t["data-rtl"]?"10px":"0"},function(t){return"rtl"===t["data-rtl"]?"0":"70px"},function(t){return"rtl"===t["data-rtl"]?"70px":"0"},function(t){return"rtl"===t["data-rtl"]?"right":"left"},function(t){return"rtl"===t["data-rtl"]?"0":"295px"},function(t){return"rtl"===t["data-rtl"]?"295px":"0"},function(t){return"rtl"===t["data-rtl"]?"0":"70px"},function(t){return"rtl"===t["data-rtl"]?"70px":"0"},function(t){return"rtl"===t["data-rtl"]?"8px":"0 !important"},function(t){return"rtl"===t["data-rtl"]?"0 !important":"8px"},function(t){return"rtl"===t["data-rtl"]?"0":"8px"},function(t){return"rtl"===t["data-rtl"]?"8px":"0"},Object(c.palette)("secondary",1),function(t){return"rtl"===t["data-rtl"]?"auto":"6px"},function(t){return"rtl"===t["data-rtl"]?"6px":"0"},function(t){return"rtl"===t["data-rtl"]?"0":"15px"},function(t){return"rtl"===t["data-rtl"]?"15px":"0"},function(t){return t["data-rtl"],"0"},function(t){return t["data-rtl"],"0"}),u=Object(o.a)(p);e.default=function(t){return r.a.createElement(u,{className:"isoExampleWrapper",style:t.style},t.children)}},2832:function(t,e,n){"use strict";n.r(e);var a=n(9),r=n(10),l=n(14),i=n(15),c=n(8),o=n(0),d=n.n(o),p=n(996),u=n(1037),s=n(1833),f=n(1089),m=n(1066),h=n(1088),x=n(1090),g=n(1047),y=n(995),w=n(3),b={labels:["12am-3am","3am-6am","6am-9am","9am-12pm","12pm-3pm","3pm-6pm","6pm-9pm","9pm-12am"],datasets:[{title:"Some Data",color:"light-blue",values:[25,40,30,35,8,52,17,-4]},{title:"Another Set",color:"violet",values:[25,50,-10,15,18,32,27,14]},{title:"Yet Another",color:"blue",values:[15,20,-3,-15,58,12,-17,37]}]},v={},E=new Date,j=(new Date((new Date).setMonth(1,1)),E.getTime()/1e3);j=Math.floor(j-j%86400).toFixed(1);for(var C=0;C<375;C++)v[j]=Math.floor(6*Math.random())+1,j=Math.floor(j-86400).toFixed(1);var O={height:250,format_tooltip_x:function(t){return(t+"").toUpperCase()},format_tooltip_y:function(t){return t+" pts"}},I=Object(w.a)({header:"Bar Chart",title:"",parent:"#frappeBarChart",parentId:"frappeBarChart",type:"bar",data:b},O),S=Object(w.a)({header:"Line Chart",title:"",parent:"#frappeLineChart",parentId:"frappeLineChart",type:"line",data:b,show_dots:0,heatline:1,region_fill:1},O),k=Object(w.a)({header:"Scatter Chart",title:"",parent:"#frappeScatterChart",parentId:"frappeScatterChart",type:"scatter",data:b},O),B=Object(w.a)({header:"Pie Chart",title:"",parent:"#frappePieChart",parentId:"frappePieChart",type:"pie",data:b},O),D=Object(w.a)({header:"Percentage Chart",title:"",parent:"#frappePercentageChart",parentId:"frappePercentageChart",type:"percentage",data:b},O),_={header:"Updateable Chart",title:"",parent:"#frappeupdatedChart",parentId:"frappeupdatedChart",data:b,type:"line",show_dots:0,heatline:1};n(2575);function N(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}();return function(){var n,a=Object(c.a)(t);if(e){var r=Object(c.a)(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return Object(i.a)(this,n)}}n.d(e,"default",function(){return P}),n.d(e,"FrappeChart",function(){return s.a});var P=function(t){Object(l.a)(n,t);var e=N(n);function n(){var t;Object(a.a)(this,n);for(var r=arguments.length,l=new Array(r),i=0;i<r;i++)l[i]=arguments[i];return(t=e.call.apply(e,[this].concat(l))).state={currentIndex:2},t.addData=function(){var e=t.state.currentIndex;e+=1;var n=b.datasets[e%3];t.updatedChart.add_data_point(n.values,n.title),t.setState({currentIndex:e})},t.removeData=function(){var e=t.state.currentIndex;e>0&&(t.updatedChart.remove_data_point(e),t.setState({currentIndex:e-1}))},t}return Object(r.a)(n,[{key:"componentDidMount",value:function(){new s.a(I),new s.a(S),new s.a(k),new s.a(B),new s.a(D),this.updatedChart=new s.a(_)}},{key:"render",value:function(){var t=y.a.rowStyle,e=y.a.colStyle,n=y.a.gutter;return d.a.createElement(h.default,{className:"isoMapPage"},d.a.createElement(f.default,null,"Frappe Charts"),d.a.createElement(p.a,{style:t,gutter:n,justify:"start"},d.a.createElement(u.a,{md:24,xs:24,style:e},d.a.createElement(m.default,{title:_.header},d.a.createElement(x.default,null,d.a.createElement("div",{style:{display:"flex",justifyContent:"flex-end"}},d.a.createElement(g.b,{onClick:this.addData,style:{marginRight:"10px"}},"+ Add Value"),d.a.createElement(g.b,{onClick:this.removeData},"Remove Value")),d.a.createElement("div",{id:_.parentId}))))),d.a.createElement(p.a,{style:t,gutter:n,justify:"start"},d.a.createElement(u.a,{md:24,xs:24,style:e},d.a.createElement(m.default,{title:I.header},d.a.createElement(x.default,null,d.a.createElement("div",{id:I.parentId}))))),d.a.createElement(p.a,{style:t,gutter:n,justify:"start"},d.a.createElement(u.a,{md:24,xs:24,style:e},d.a.createElement(m.default,{title:S.header},d.a.createElement(x.default,null,d.a.createElement("div",{id:S.parentId}))))),d.a.createElement(p.a,{style:t,gutter:n,justify:"start"},d.a.createElement(u.a,{md:24,xs:24,style:e},d.a.createElement(m.default,{title:k.header},d.a.createElement(x.default,null,d.a.createElement("div",{id:k.parentId}))))),d.a.createElement(p.a,{style:t,gutter:n,justify:"start"},d.a.createElement(u.a,{md:12,xs:24,style:e},d.a.createElement(m.default,{title:B.header},d.a.createElement(x.default,null,d.a.createElement("div",{id:B.parentId})))),d.a.createElement(u.a,{md:12,xs:24,style:e},d.a.createElement(m.default,{title:D.header},d.a.createElement(x.default,null,d.a.createElement("div",{id:D.parentId}))))))}}]),n}(o.Component)},995:function(t,e,n){"use strict";var a={rowStyle:{width:"100%",display:"flex",flexFlow:"row wrap"},colStyle:{marginBottom:"16px"},gutter:16};e.a=a}}]);
//# sourceMappingURL=89.d580ac66.chunk.js.map