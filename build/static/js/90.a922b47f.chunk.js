(window.webpackJsonp=window.webpackJsonp||[]).push([[90,130,131],{1066:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),i=t(27),l=t(26),o=t(7);function c(){var n=Object(i.a)(["\n  font-size: 13px;\n  font-weight: 400;\n  color: ",";\n  line-height: 24px;\n"]);return c=function(){return n},n}function s(){var n=Object(i.a)(["\n  font-size: 14px;\n  font-weight: 500;\n  color: ",";\n  margin: 0;\n  margin-bottom: 5px;\n"]);return s=function(){return n},n}var d=l.d.h3(s(),Object(o.palette)("text",0)),p=l.d.p(c(),Object(o.palette)("text",3)),u=function(n){return r.a.createElement("div",null,n.title?r.a.createElement(d,{className:"isoBoxTitle"}," ",n.title," "):"",n.subtitle?r.a.createElement(p,{className:"isoBoxSubTitle"}," ",n.subtitle," "):"")};function m(){var n=Object(i.a)(["\n  width: 100%;\n  height: 100%;\n  padding: 20px;\n  background-color: #ffffff;\n  border: 1px solid ",";\n  margin: 0 0 30px;\n\n  &:last-child {\n    margin-bottom: 0;\n  }\n\n  @media only screen and (max-width: 767px) {\n    padding: 20px;\n    ",";\n  }\n\n  &.half {\n    width: calc(50% - 34px);\n    @media (max-width: 767px) {\n      width: 100%;\n    }\n  }\n"]);return m=function(){return n},n}var f=l.d.div(m(),Object(o.palette)("border",0),"");e.default=function(n){return r.a.createElement(f,{className:"".concat(n.className," isoBoxWrapper"),style:n.style},r.a.createElement(u,{title:n.title,subtitle:n.subtitle}),n.children)}},1088:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),i=t(27);function l(){var n=Object(i.a)(["\n  padding: 40px 20px;\n  display: flex;\n  flex-flow: row wrap;\n  overflow: hidden;\n\n  @media only screen and (max-width: 767px) {\n    padding: 50px 20px;\n  }\n\n  @media (max-width: 580px) {\n    padding: 15px;\n  }\n"]);return l=function(){return n},n}var o=t(26).d.div(l());e.default=function(n){return r.a.createElement(o,Object.assign({className:null!=n.className?"".concat(n.className," isoLayoutContentWrapper"):"isoLayoutContentWrapper"},n),n.children)}},1139:function(n,e,t){"use strict";var a=t(1452);e.a=a.a},1181:function(n,e,t){"use strict";var a=t(0),r=t.n(a),i=t(27),l=t(26),o=t(7);function c(){var n=Object(i.a)(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  z-index: 10000000000;\n  top: 0;\n  right: 0;\n\n  @media only screen and (min-width: 768px) and (max-width: 1220px) {\n    width: calc(100% - 80px);\n  }\n\n  @media only screen and (max-width: 767px) {\n    width: 100%;\n  }\n\n  .isoContentLoader {\n    width: 50px;\n    height: 50px;\n    animation: svgSpinner 1.4s linear infinite;\n  }\n\n  .isoContentLoaderCircle {\n    animation: svgSpinnerCircle 1.4s ease-in-out infinite;\n    stroke-dasharray: 80px, 200px;\n    stroke-dashoffset: 0px;\n    stroke: ",";\n    stroke-linecap: round;\n  }\n\n  @keyframes svgSpinner {\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n  @keyframes svgSpinnerCircle {\n    0% {\n      stroke-dasharray: 1px, 200px;\n      stroke-dashoffset: 0px;\n    }\n    50% {\n      stroke-dasharray: 100px, 200px;\n      stroke-dashoffset: -15px;\n    }\n    100% {\n      stroke-dasharray: 100px, 200px;\n      stroke-dashoffset: -120px;\n    }\n  }\n"]);return c=function(){return n},n}var s=l.d.div(c(),Object(o.palette)("primary",0));e.a=function(n){return r.a.createElement(s,null,r.a.createElement("svg",{className:"isoContentLoader",viewBox:"0 0 50 50"},r.a.createElement("circle",{className:"isoContentLoaderCircle",cx:"25",cy:"25",r:"20",fill:"none",strokeWidth:"3.6"})))}},1203:function(n,e,t){"use strict";var a=t(1894),r=t(27),i=t(26),l=t(7),o=t(11);function c(){var n=Object(r.a)(["\n  .ant-input {\n    padding: 4px 10px;\n    width: 100%;\n    height: 35px;\n    cursor: text;\n    font-size: 13px;\n    line-height: 1.5;\n    color: ",";\n    background-color: #fff;\n    background-image: none;\n    border: 1px solid ",";\n    ",";\n    ",";\n\n    &:focus {\n      border-color: ",";\n    }\n\n    &::-webkit-input-placeholder {\n      color: ",";\n    }\n\n    &:-moz-placeholder {\n      color: ",";\n    }\n\n    &::-moz-placeholder {\n      color: ",";\n    }\n    &:-ms-input-placeholder {\n      color: ",";\n    }\n  }\n"]);return c=function(){return n},n}var s=function(n){return Object(i.d)(n)(c(),Object(l.palette)("text",1),Object(l.palette)("border",0),Object(o.a)("4px"),Object(o.c)(),Object(l.palette)("primary",0),Object(l.palette)("grayscale",0),Object(l.palette)("grayscale",0),Object(l.palette)("grayscale",0),Object(l.palette)("grayscale",0))};t.d(e,"a",function(){return p});var d=s(a.a),p=s(a.a.RangePicker);e.b=d},1291:function(n,e,t){"use strict";var a=t(1043),r=t(1057),i=t(27),l=t(26),o=t(7);function c(){var n=Object(i.a)(["\n  .ant-dropdown-menu-item {\n    a {\n      font-size: 13px;\n      color: ",";\n    }\n  }\n\n  .ant-dropdown-menu-item,\n  .ant-dropdown-menu-submenu-title {\n    a {\n      font-size: 13px;\n      color: ",";\n    }\n\n    &:hover {\n      background-color: ",";\n    }\n  }\n"]);return c=function(){return n},n}function s(){var n=Object(i.a)(["\n  display: inline-block;\n\n  &.ant-dropdown-button {\n    &.ant-btn-group > .ant-btn:first-child:not(:last-child) {\n      border-radius: ",";\n    }\n\n    &.ant-btn-group > .ant-btn:last-child:not(:first-child) {\n      border-radius: ",";\n    }\n\n    &.ant-btn-group .ant-btn + .ant-btn {\n      margin: ",";\n    }\n  }\n\n  .ant-dropdown-link {\n    font-size: 13px;\n    color: ",";\n\n    &:hover {\n      color: ",";\n    }\n  }\n"]);return s=function(){return n},n}var d=function(n){return Object(l.d)(n)(c(),Object(o.palette)("text",1),Object(o.palette)("text",1),Object(o.palette)("secondary",1))},p=function(n){return Object(l.d)(n)(s(),function(n){return"rtl"===n["data-rtl"]?"0 4px 4px 0":"4px 0  0 4px"},function(n){return"rtl"===n["data-rtl"]?"4px 0 0 4px":"0 4px 4px 0"},function(n){return"rtl"===n["data-rtl"]?"0 -1px 0 0":"0 0 0 -1px"},Object(o.palette)("primary",0),Object(o.palette)("primary",2))},u=t(39);t.d(e,"a",function(){return b}),t.d(e,"b",function(){return g}),t.d(e,"c",function(){return h}),t.d(e,"d",function(){return v});var m=p(a.a),f=Object(u.a)(m),x=p(a.a.Button),b=Object(u.a)(x),g=d(r.a),h=d(r.a.Item),v=d(r.a.SubMenu);e.e=f},2788:function(n,e,t){"use strict";t.r(e);var a=t(3),r=t(9),i=t(10),l=t(14),o=t(15),c=t(8),s=t(0),d=t.n(s),p=t(16),u=t(2753),m=t(97),f=t.n(m),x=t(110),b=t(1047),g=t(149),h=t(27),v=t(26),y=t(7),w=t(1139),E=t(11);function j(){var n=Object(h.a)(["\n  overflow: hidden;\n  overflow-x: auto;\n  background-color: #ffffff;\n\n  .ant-table-thead > tr > th {\n    color: ",";\n    font-size: 13px;\n    background-color: ",";\n    border-bottom: 0;\n\n    &.ant-table-column-sort {\n      background: ",";\n      margin: ",";\n    }\n  }\n\n  .ant-table-thead > tr > th,\n  .ant-table-tbody > tr > td {\n    padding: 16px 15px;\n    white-space: nowrap;\n    text-align: ",";\n\n    p {\n      margin-bottom: 0;\n    }\n\n    &:first-child {\n      text-align: center;\n    }\n  }\n\n  .ant-table-tbody > tr > td {\n    font-size: 12px;\n    color: ",";\n    border-bottom: 1px solid ",";\n\n    a {\n      color: ",";\n      ",";\n\n      &:hover {\n        color: ",";\n      }\n    }\n  }\n\n  .ant-table-thead > tr.ant-table-row-hover > td,\n  .ant-table-tbody > tr.ant-table-row-hover > td,\n  .ant-table-thead > tr:hover > td,\n  .ant-table-tbody > tr:hover > td {\n    background-color: transparent;\n  }\n"]);return j=function(){return n},n}var k=Object(v.d)(w.a)(j(),Object(y.palette)("secondary",2),Object(y.palette)("secondary",1),Object(y.palette)("secondary",1),function(n){return"rtl"===n["data-rtl"]?"0 4px 0 0":"0 0 0 4px"},function(n){return"rtl"===n["data-rtl"]?"right":"left"},Object(y.palette)("text",3),Object(y.palette)("border",0),Object(y.palette)("primary",0),Object(E.c)(),Object(y.palette)("primary",4)),O=[{title:"#",dataIndex:"key",width:"10%",rowKey:"key"},{title:"Item Name",dataIndex:"itemName",width:"40%",rowKey:"itemName"},{title:"Unit Costs",dataIndex:"costs",width:"15%",rowKey:"costs"},{title:"Unit",dataIndex:"qty",width:"15%",rowKey:"qty"},{title:"Price",dataIndex:"price",width:"20%",rowKey:"price"}],N=function(n){var e=n.invoiceList;return d.a.createElement(k,{columns:O,dataSource:e,pagination:!1})},S=function(n){var e=n.editableInvoice,t=n.editInvoice,a=n.updateValues,r=e.invoiceList,i=[{title:"#",dataIndex:"key",rowKey:"key",width:"10%",render:function(n,e){return d.a.createElement("span",null,e.key)}},{title:"Item Name",dataIndex:"itemName",rowKey:"itemName",width:"40%",render:function(n,a){return d.a.createElement(x.d,{placeholder:"Item Name",value:a.itemName,onChange:function(n){e.invoiceList[a.key-1].itemName=n.target.value,t(e)}})}},{title:"Unit Costs",dataIndex:"costs",rowKey:"costs",width:"20%",render:function(n,r){return d.a.createElement(x.d,{placeholder:"Unit Cost",value:r.costs,onChange:function(n){e.invoiceList[r.key-1].costs=Object(g.c)(n.target.value,r.costs),t(a(e))}})}},{title:"Unit",dataIndex:"qty",rowKey:"qty",width:"10%",render:function(n,r){return d.a.createElement(x.d,{placeholder:"Units",value:r.qty,onChange:function(n){e.invoiceList[r.key-1].qty=Object(g.c)(n.target.value,r.qty),t(a(e))}})}},{title:"Price",dataIndex:"price",rowKey:"price",width:"10%"},{title:"",dataIndex:"delete",rowKey:"delete",width:"10%",render:function(n,i){return 1===r.length?"":d.a.createElement(b.b,{onClick:function(){var n=[];r.forEach(function(e,t){t!==i.key-1&&n.push(e)}),e.invoiceList=n,t(a(e))}},"Delete")}}];return d.a.createElement(k,{columns:i,dataSource:r,pagination:!1})},C=t(1291),I=function(n){var e=n.value,t=n.onChange,a=n.orderStatusOptions;return d.a.createElement(C.a,{overlay:d.a.createElement(C.b,{onClick:function(n){return t(a[n.key])}},a.map(function(n,e){return d.a.createElement(C.c,{key:e},n)}))},e)},T=t(193),R=t(1203),B=t(1066),z=t(1088),L=t(39);function P(){var n=Object(h.a)(["\n  .PageHeader {\n    width: 100%;\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-flex-flow: row wrap;\n    -ms-flex-flow: row wrap;\n    flex-flow: row wrap;\n    -webkit-align-items: flex-end;\n    -webkit-box-align: flex-end;\n    -ms-flex-align: flex-end;\n    align-items: flex-end;\n    -webkit-box-pack: justify;\n    -webkit-justify-content: flex-end;\n    -ms-flex-pack: justify;\n    justify-content: flex-end;\n    margin-bottom: 30px;\n\n    a {\n      text-decoration: none;\n    }\n    .isoGoInvoBtn {\n      margin-right: 15px;\n    }\n    .isoInvoPrint {\n      background: ",";\n      margin: ",";\n      @media (max-width: 500px) {\n        margin-top: 15px;\n      }\n\n      @media (max-width: 485px) {\n        margin: 0;\n        margin-top: 15px;\n      }\n    }\n    .saveBtn {\n      background: ",";\n      margin: ",";\n    }\n  }\n\n  .PageContent {\n    .OrderInfo {\n      width: 100%;\n      display: -webkit-box;\n      display: -webkit-flex;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-flex-flow: row wrap;\n      -ms-flex-flow: row wrap;\n      flex-flow: row wrap;\n      -webkit-align-items: baseline;\n      -webkit-box-align: baseline;\n      -ms-flex-align: baseline;\n      align-items: baseline;\n      -webkit-box-pack: justify;\n      -webkit-justify-content: space-between;\n      -ms-flex-pack: justify;\n      justify-content: space-between;\n      padding-bottom: 30px;\n      border-bottom: 1px dashed ",";\n\n      @media (max-width: 560px) {\n        flex-direction: column;\n      }\n\n      .Title {\n        font-size: 16px;\n        font-weight: 500;\n        color: ",";\n        margin: 0 0 20px;\n        line-height: 1;\n      }\n\n      span.InvoiceNumber {\n        font-size: 16px;\n        font-weight: 400;\n        color: ",";\n        margin: 0;\n      }\n\n      .RightSideContent {\n        display: flex;\n        flex-direction: column;\n\n        @media (max-width: 769px) {\n          align-items: flex-start;\n        }\n\n        @media (max-width: 560px) {\n          margin-top: 30px;\n        }\n\n        p {\n          font-size: 14px;\n          color: ",";\n          margin: 0 0 15px;\n          font-weight: 500;\n\n          span.orderStatus {\n            margin-left: ",";\n            font-weight: 400;\n          }\n          span.orderDate {\n            font-weight: 400;\n            margin-left: ",";\n          }\n\n          &:last-child {\n            margin: 0;\n          }\n          .orderStatusSpan {\n            font-size: 14px;\n            color: ",";\n            margin: 0 0 15px;\n            font-weight: 500;\n          }\n          .orderDateSpan {\n            font-size: 14px;\n            color: ",";\n            margin: 0 0 15px;\n            margin-left: ",";\n            font-weight: 500;\n\n            @media (max-width: 420px) {\n              margin: 0;\n            }\n          }\n        }\n        .RightSideStatus {\n          display: flex;\n          flex-direction: row;\n          align-items: center;\n          font-size: 14px;\n          color: ",";\n\n          @media (max-width: 560px) {\n            margin-bottom: 10px;\n          }\n\n          .RightSideStatusSpan {\n            margin: ",";\n\n            @media (max-width: 560px) {\n              margin: ",";\n            }\n          }\n          #order-drop-list {\n            z-index: 1;\n          }\n        }\n        .RightSideDate {\n          display: flex;\n          flex-direction: row;\n          align-items: center;\n          margin-top: 15px;\n          font-size: 14px;\n          color: ",";\n          > span {\n            margin: ",";\n          }\n\n          @media (max-width: 560px) {\n            margin: ",";\n          }\n\n          > div {\n            margin: ",";\n            > div {\n              &::before {\n                background-color: #ececec;\n              }\n            }\n          }\n        }\n      }\n      .LeftSideContent {\n        .LeftSideContentInput {\n          > div {\n            &::before {\n              background-color: #ececec;\n            }\n          }\n        }\n      }\n    }\n\n    .LeftSideContent {\n      display: -webkit-box;\n      display: -webkit-flex;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-align-items: flex-start;\n      -webkit-box-align: flex-start;\n      -ms-flex-align: flex-start;\n      align-items: flex-start;\n      -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n      flex-direction: column;\n      &.LeftSideContentInput {\n        > div {\n          &::before {\n            background-color: #ececec;\n          }\n        }\n      }\n    }\n\n    .RightSideContent {\n      display: -webkit-box;\n      display: -webkit-flex;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-align-items: flex-end;\n      -webkit-box-align: flex-end;\n      -ms-flex-align: flex-end;\n      align-items: flex-end;\n      -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n      flex-direction: column;\n      text-align: right;\n\n      @media only screen and (max-width: 767px) {\n        -webkit-align-items: flex-start;\n        -webkit-box-align: flex-start;\n        -ms-flex-align: flex-start;\n        align-items: flex-start;\n        text-align: left;\n      }\n\n      @media only screen and (min-width: 501px) and (max-width: 767px) {\n        -webkit-align-items: flex-end;\n        -webkit-box-align: flex-end;\n        -ms-flex-align: flex-end;\n        align-items: flex-end;\n        text-align: right;\n      }\n    }\n\n    .BillingInformation {\n      width: 100%;\n      display: -webkit-box;\n      display: -webkit-flex;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-flex-flow: row wrap;\n      -ms-flex-flow: row wrap;\n      flex-flow: row wrap;\n      -webkit-align-items: baseline;\n      -webkit-box-align: baseline;\n      -ms-flex-align: baseline;\n      align-items: baseline;\n      -webkit-box-pack: justify;\n      -webkit-justify-content: space-between;\n      -ms-flex-pack: justify;\n      justify-content: space-between;\n      margin-top: 50px;\n      margin-bottom: 60px;\n\n      .LeftSideContent,\n      .RightSideContent {\n        width: calc(50% - 50px);\n        margin: ",";\n\n        @media (max-width: 500px) {\n          width: 100%;\n          margin: 0;\n        }\n      }\n      .RightSideContent {\n        margin: 0;\n\n        input,\n        textarea {\n          text-align: ",";\n\n          &::-webkit-input-placeholder {\n            text-align: ",";\n          }\n          &:-moz-placeholder {\n            text-align: ",";\n          }\n          &::-moz-placeholder {\n            text-align: ",";\n          }\n          &:-ms-input-placeholder {\n            text-align: ",";\n          }\n        }\n      }\n      @media only screen and (max-width: 767px) {\n        .RightSideContent {\n          margin-top: 40px;\n        }\n      }\n\n      h3.Title,\n      .BillFormTitle {\n        font-size: 16px;\n        font-weight: 500;\n        color: ",";\n        margin: 0 0 10px;\n        line-height: 1;\n        label {\n          font-size: 19px;\n          font-weight: 500;\n          color: ",";\n          margin: 0 0 10px;\n          line-height: 1;\n        }\n        > div {\n          &::before {\n            background-color: #ececec;\n          }\n        }\n        input {\n          font-size: 15px;\n          color: ",";\n          font-weight: 400;\n          display: block;\n          margin-top: 10px;\n        }\n      }\n      .BillFormAddress {\n        width: 100%;\n        > div {\n          &::before {\n            background-color: #ececec;\n          }\n        }\n        textarea {\n          height: 100%;\n          overflow: hidden;\n          font-size: 14px;\n          color: ",";\n          font-weight: 300;\n          font-style: normal;\n        }\n        textarea.ant-input {\n          min-height: 160px !important;\n        }\n      }\n      p.NameEmail {\n        span.Name {\n          font-size: 15px;\n          color: ",";\n          font-weight: 400;\n          display: block;\n        }\n\n        span.Email {\n          font-size: 14px;\n          color: ",";\n          font-weight: 300;\n        }\n      }\n\n      address {\n        font-size: 14px;\n        color: ",";\n        font-weight: 300;\n        font-style: normal;\n      }\n    }\n    .customScrollBar {\n      .scrollbar-thumb {\n        &.scrollbar-thumb-y {\n          display: none !important;\n        }\n      }\n    }\n    .InvoiceTable {\n      table {\n        thead {\n          background-color: ",";\n          tr {\n            th {\n              color: ",";\n            }\n          }\n        }\n\n        tbody {\n          tr {\n            td {\n              color: ",";\n              > div {\n                > div {\n                  &::before {\n                    background-color: #ececec;\n                  }\n                }\n              }\n              input {\n                color: ",";\n                font-size: 0.8125rem;\n              }\n              .material-icons {\n                color: #757575;\n              }\n            }\n          }\n        }\n      }\n      .InvoiceTableBtn {\n        display: flex;\n        justify-content: ",";\n        align-items: ",";\n        margin-top: 15px;\n        .InvoiceEditAddBtn {\n          background: ",";\n          color: #fff;\n        }\n      }\n      .TotalBill {\n        margin-top: 30px;\n        display: -webkit-box;\n        display: -webkit-flex;\n        display: -ms-flexbox;\n        display: flex;\n        width: 100%;\n        align-items: ",";\n        text-align: ",";\n        flex-direction: column;\n        padding-left: inherit;\n\n        p {\n          margin-top: 0;\n          font-size: 14px;\n          color: ",";\n          margin-bottom: 15px;\n          width: 250px;\n          display: flex;\n          justify-content: ",";\n          text-align: ",";\n\n          span {\n            width: 120px;\n          }\n        }\n        .TotalBillTitle {\n          margin: ",";\n        }\n        .totalVat {\n          width: 186px;\n        }\n        .vatRateCalc {\n          > div {\n            margin-top: -12px;\n            width: 25px;\n            margin: ",";\n            > div {\n              &::before {\n                background-color: #ececec;\n              }\n            }\n          }\n          input {\n            color: ",";\n            font-size: 14px;\n          }\n          > span {\n            width: 70px;\n            margin: ",";\n          }\n          .ant-input-group-wrapper {\n            width: auto;\n            margin: ",";\n          }\n          .vatRateCalcWrap {\n            > span:last-child {\n              margin: ",";\n            }\n          }\n          .ant-input-wrapper.ant-input-group {\n            margin: ",";\n            margin-top: 0;\n            input.ant-input {\n              width: 50px;\n            }\n          }\n        }\n        .currencySign {\n          > div {\n            &::before {\n              background-color: #ececec;\n            }\n          }\n          input,\n          label {\n            color: ",";\n            font-size: 14px;\n          }\n        }\n        h3 {\n          font-size: 18px;\n          color: ",";\n          margin: 0;\n          font-weight: 400;\n          width: 250px;\n          display: flex;\n          justify-content: ",";\n          text-align: ",";\n\n          span {\n            width: 120px;\n          }\n        }\n        .currencySignWithTotal {\n          span {\n            width: 100%;\n          }\n          .currencySign {\n            margin: ",";\n            width: 50px;\n            margin-top: -5px;\n          }\n          .currencySignSpan {\n            width: 120px;\n          }\n        }\n        .grandTotal {\n          margin-top: 15px;\n        }\n      }\n      &.editInvoiceTable {\n        table {\n          @media (max-width: 767px) {\n            width: 760px;\n          }\n          thead {\n            background-color: ",";\n            tr {\n              th {\n                color: ",";\n              }\n            }\n          }\n\n          tbody {\n            tr {\n              td {\n                color: ",";\n                border-bottom: 0;\n                padding: 8px 15px;\n                > div {\n                  > div {\n                    &::before {\n                      background-color: #ececec;\n                    }\n                  }\n                }\n                input {\n                  color: ",";\n                  font-size: 0.8125rem;\n                  height: 28px;\n                }\n                .material-icons {\n                  color: #757575;\n                }\n              }\n            }\n          }\n        }\n        .TotalBill {\n          p {\n            width: 300px;\n            justify-content: ",";\n            text-align: ",";\n            span {\n              width: 50%;\n            }\n            span.TotalBillTitle {\n              margin-right: ",";\n              margin-left: ",";\n            }\n          }\n          .vatRateCalc {\n            width: 300px;\n            display: flex;\n            justify-content: ",";\n            .vatRateCalcSpan {\n              width: 50%;\n            }\n            .vatRateCalcWrap {\n              width: 50%;\n              margin-top: -5px;\n              margin-left: ",";\n              margin-right: ",";\n              .ant-input-wrapper.ant-input-group {\n                margin-left: ",";\n                margin-right: ",";\n              }\n            }\n          }\n          .currencySignWithTotal {\n            width: 300px;\n            display: flex;\n            justify-content: ",";\n            margin-top: 15px;\n            .grandTotalSpan {\n              width: 50%;\n              font-size: 18px;\n              font-weight: 500;\n              color: rgba(0, 0, 0, 0.85);\n            }\n            .currencySignWrap {\n              width: 50%;\n              .currencySign {\n                margin-left: ",";\n                margin-right: ",";\n                width: 36px;\n              }\n              .currencySignSpan {\n                margin-left: ",";\n                margin-right: ",";\n              }\n            }\n          }\n        }\n      }\n    }\n\n    .ButtonWrapper {\n      width: 100%;\n      display: flex;\n      justify-content: ",";\n      margin-top: 30px;\n    }\n    .mateInvoPrint {\n      background: ",";\n      margin-left: ",";\n      margin-right: ",";\n    }\n  }\n"]);return P=function(){return n},n}var D=v.d.div(P(),Object(y.palette)("blue",14),function(n){return"rtl"===n["data-rtl"]?"0 15px 0 0":"0 0 0 15px"},Object(y.palette)("blue",14),function(n){return"rtl"===n["data-rtl"]?"0 15px 0 0":"0 0 0 15px"},Object(y.palette)("grayscale",2),Object(y.palette)("grey",8),Object(y.palette)("blue",11),Object(y.palette)("grey",8),function(n){return"rtl"===n["data-rtl"]?"0 8px 0 0":"0 0 0 8px"},function(n){return"rtl"===n["data-rtl"]?"0 8px 0 0":"0 0 0 8px"},Object(y.palette)("grey",8),Object(y.palette)("grey",8),function(n){return"rtl"===n["data-rtl"]?"0 13px 0 0":"0 0 0 13px"},Object(y.palette)("grey",8),function(n){return"rtl"===n["data-rtl"]?"0 -10px 0 7px":"0 7px 0 -10px"},function(n){return"rtl"===n["data-rtl"]?"0 0 0 10px":"0 10px 0 0"},Object(y.palette)("grey",8),function(n){return"rtl"===n["data-rtl"]?"0 10px 0 0":"0 0 0 10px"},function(n){return"rtl"===n["data-rtl"]?"0 13px 0 0":"0 0 0 13px"},function(n){return"rtl"===n["data-rtl"]?"0 7px 0 0":"0 0 0 7px"},function(n){return"rtl"===n["data-rtl"]?"0 0 0 10px":"0 10px 0 0"},function(n){return"rtl"===n["data-rtl"]?"left":"right"},function(n){return"rtl"===n["data-rtl"]?"left":"right"},function(n){return"rtl"===n["data-rtl"]?"left":"right"},function(n){return"rtl"===n["data-rtl"]?"left":"right"},function(n){return"rtl"===n["data-rtl"]?"left":"right"},Object(y.palette)("grey",9),Object(y.palette)("grey",9),Object(y.palette)("grey",7),Object(y.palette)("grey",7),Object(y.palette)("grey",7),Object(y.palette)("grey",7),Object(y.palette)("grey",7),Object(y.palette)("grey",2),Object(y.palette)("grey",8),Object(y.palette)("grey",7),Object(y.palette)("grey",7),function(n){return"rtl"===n["data-rtl"]?"flex-start":"flex-end"},function(n){return"rtl"===n["data-rtl"]?"flex-start":"flex-end"},Object(y.palette)("blue",14),function(n){return"rtl"===n["data-rtl"]?"flex-start":"flex-end"},function(n){return"rtl"===n["data-rtl"]?"left":"right"},Object(y.palette)("grey",7),function(n){return"rtl"===n["data-rtl"]?"flex-start":"flex-end"},function(n){return"rtl"===n["data-rtl"]?"left":"right"},function(n){return"rtl"===n["data-rtl"]?"0 0 0 -10px":"0 -10px 0 0"},function(n){return"rtl"===n["data-rtl"]?"0 15px 0 0":"0 0 0 15px"},Object(y.palette)("grey",7),function(n){return"rtl"===n["data-rtl"]?"-7px 10px 0 0":"-7px 0 0 10px"},function(n){return n["data-rtl"],"-7px 0 0 0"},function(n){return"rtl"===n["data-rtl"]?"-7px 10px 0 0":"-7px 0 0 10px"},function(n){return"rtl"===n["data-rtl"]?"0 -22px 0 0":"0 0 0 -22px"},Object(y.palette)("grey",7),Object(y.palette)("grey",9),function(n){return"rtl"===n["data-rtl"]?"flex-start":"flex-end"},function(n){return"rtl"===n["data-rtl"]?"left":"right"},function(n){return"rtl"===n["data-rtl"]?"0 10px 0 0":"0 0 0 10px"},Object(y.palette)("secondary",1),Object(y.palette)("secondary",2),Object(y.palette)("text",1),Object(y.palette)("text",1),function(n){return"rtl"===n["data-rtl"]?"flex-start":"flex-end"},function(n){return"rtl"===n["data-rtl"]?"left":"right"},function(n){return"rtl"===n["data-rtl"]?"inherit":"0"},function(n){return"rtl"===n["data-rtl"]?"0":"inherit"},function(n){return"rtl"===n["data-rtl"]?"flex-end":"flex-start"},function(n){return"rtl"===n["data-rtl"]?"inherit":"0"},function(n){return"rtl"===n["data-rtl"]?"0":"inherit"},function(n){return"rtl"===n["data-rtl"]?"inherit":"0"},function(n){return"rtl"===n["data-rtl"]?"0":"inherit"},function(n){return"rtl"===n["data-rtl"]?"flex-end":"flex-start"},function(n){return"rtl"===n["data-rtl"]?"inherit":"0"},function(n){return"rtl"===n["data-rtl"]?"0":"inherit"},function(n){return"rtl"===n["data-rtl"]?"inherit":"15px"},function(n){return"rtl"===n["data-rtl"]?"15px":"inherit"},function(n){return"rtl"===n["data-rtl"]?"flex-start":"flex-end"},Object(y.palette)("blue",14),function(n){return"rtl"===n["data-rtl"]?"inherit":"15px"},function(n){return"rtl"===n["data-rtl"]?"15px":"inherit"}),A=Object(L.a)(D),F=t(188);function W(n){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(n){return!1}}();return function(){var t,a=Object(c.a)(n);if(e){var r=Object(c.a)(this).constructor;t=Reflect.construct(a,arguments,r)}else t=a.apply(this,arguments);return Object(o.a)(this,t)}}var q=function(n){var e=n.invoiceList,t=0;return e.forEach(function(e,a){var r=e.costs*e.qty;n.invoiceList[a].price=r,n.invoiceList[a].key=a+1,t+=r}),n.subTotal=t,n.vatPrice=Math.floor(n.vatRate*t*.01),n.totalCost=n.vatPrice+t,n},K=function(n){for(var e=["number","billTo","billToAddress","billFrom","billFromAddress","currency"],t=["Invoice Number","Bill To","Bill To Address","Bill From","Bill From Address","Currency"],a=0;a<e.length;a++)if(!n[e[a]])return"Please fill in ".concat(t[a]);for(var r=0;r<n.invoiceList.length;r++){if(!n.invoiceList[r].itemName)return"Please fill in item name of ".concat(r+1," item");if(0===n.invoiceList[r].costs)return"cost of ".concat(r+1," item should be positive");if(0===n.invoiceList[r].qty)return"quantity of ".concat(r+1," item should be positive")}return""},M=function(n){Object(l.a)(t,n);var e=W(t);function t(){var n;Object(r.a)(this,t);for(var a=arguments.length,i=new Array(a),l=0;l<a;l++)i[l]=arguments[l];return(n=e.call.apply(e,[this].concat(i))).onSave=function(){var e=n.props,t=e.editableInvoice,a=e.isNewInvoice,r=e.updateInvoice,i=K(t);if(i)Object(T.a)("error",i);else{var l=a?"A new Invoice added":"Invoice Updated";Object(T.a)("success",l),r(t)}},n}return Object(i.a)(t,[{key:"render",value:function(){var n=this.props,e=n.editableInvoice,t=n.isNewInvoice,a=n.redirectPath,r=n.toggleView,i=n.editInvoice;return d.a.createElement(z.default,null,d.a.createElement(B.default,null,d.a.createElement(A,{className:"editView"},d.a.createElement("div",{className:"PageHeader"},t?d.a.createElement(u.a,{to:a},d.a.createElement(b.b,{color:"primary"},d.a.createElement("span",null,"Cancel"))):d.a.createElement(b.b,{onClick:function(){return r(!1)}},d.a.createElement("span",null,"Cancel")),d.a.createElement(b.b,{type:"primary",onClick:this.onSave,className:"saveBtn"},d.a.createElement("span",null,"Save"))),d.a.createElement("div",{className:"PageContent"},d.a.createElement("div",{className:"OrderInfo"},d.a.createElement("div",{className:"LeftSideContent"},d.a.createElement("h3",{className:"Title"},"Invoice Info"),d.a.createElement(x.d,{placeholder:"Number",value:e.number,onChange:function(n){e.number=n.target.value,i(e)},className:"LeftSideContentInput"})),d.a.createElement("div",{className:"RightSideContent"},d.a.createElement("div",{className:"RightSideStatus"},d.a.createElement("span",{className:"RightSideStatusSpan"},"Order Status: "),d.a.createElement(I,{value:e.orderStatus,onChange:function(n){e.orderStatus=n,i(e)},orderStatusOptions:F.d,className:"RightStatusDropdown"})),d.a.createElement("div",{className:"RightSideDate"},"Order date:"," ",d.a.createElement(R.b,{allowClear:!1,value:f()(new Date(e.orderDate)),onChange:function(n){e.orderDate=n.toDate().getTime(),i(e)},format:"MMMM Do YYYY",animateYearScrolling:!0})))),d.a.createElement("div",{className:"BillingInformation"},d.a.createElement("div",{className:"LeftSideContent"},d.a.createElement(x.d,{placeholder:"Bill From",value:e.billFrom,onChange:function(n){e.billFrom=n.target.value,i(e)},className:"BillFormTitle"}),d.a.createElement(x.c,{placeholder:"Bill From Address",value:e.billFromAddress,rows:5,onChange:function(n){e.billFromAddress=n.target.value,i(e)},className:"BillFormAddress"})),d.a.createElement("div",{className:"RightSideContent"},d.a.createElement(x.d,{placeholder:"Bill To",value:e.billTo,onChange:function(n){e.billTo=n.target.value,i(e)},className:"BillFormTitle"}),d.a.createElement(x.c,{placeholder:"Bill To Address",value:e.billToAddress,rows:5,onChange:function(n){e.billToAddress=n.target.value,i(e)},className:"BillFormAddress"}))),d.a.createElement("div",{className:"InvoiceTable editInvoiceTable"},d.a.createElement(S,{editableInvoice:e,editInvoice:i,updateValues:q}),d.a.createElement("div",{className:"InvoiceTableBtn"},d.a.createElement(b.b,{onClick:function(){e.invoiceList.push({key:e.invoiceList.length+1,itemName:"",costs:0,qty:0,price:0}),i(e)},type:"primary"},"Add Item")),d.a.createElement("div",{className:"TotalBill"},d.a.createElement("p",null,d.a.createElement("span",{className:"TotalBillTitle"},"Sub-total : "),d.a.createElement("span",null,"".concat(e.currency).concat(e.subTotal))),d.a.createElement("div",{className:"vatRateCalc"},d.a.createElement("span",{className:"vatRateCalcSpan"}," Total Vat : "),d.a.createElement("div",{className:"vatRateCalcWrap"},d.a.createElement(x.d,{value:e.vatRate,addonAfter:"%",onChange:function(n){e.vatRate=Object(g.c)(n.target.value,e.vatRate),i(q(e))}}),d.a.createElement("span",null,"".concat(e.currency).concat(e.vatPrice)))),d.a.createElement("div",{className:"currencySignWithTotal"},d.a.createElement("span",{className:"grandTotalSpan"},"Grand Total "),d.a.createElement("div",{className:"currencySignWrap"},d.a.createElement(x.d,{value:e.currency,onChange:function(n){e.currency=n.target.value,i(e)},className:"currencySign"}),d.a.createElement("span",{className:"currencySignSpan"},e.totalCost))))),d.a.createElement("div",{className:"ButtonWrapper"})))))}}]),t}(s.Component),V=function(n){var e=n.companyName,t=n.companyAddress;return d.a.createElement("div",null,d.a.createElement("p",{className:"NameEmail"},d.a.createElement("span",{className:"Name"},e),d.a.createElement("span",{className:"Email",style:{whiteSpace:"pre-line"}},t)))};function Y(n){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(n){return!1}}();return function(){var t,a=Object(c.a)(n);if(e){var r=Object(c.a)(this).constructor;t=Reflect.construct(a,arguments,r)}else t=a.apply(this,arguments);return Object(o.a)(this,t)}}var U=function(n){Object(l.a)(t,n);var e=Y(t);function t(){return Object(r.a)(this,t),e.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){var n=this.props,e=n.currentInvoice,t=n.toggleView,a=n.redirectPath;return d.a.createElement(z.default,null,d.a.createElement(B.default,null,d.a.createElement(A,{className:"InvoicePageWrapper"},d.a.createElement("div",{className:"PageHeader"},d.a.createElement(u.a,{to:a},d.a.createElement(b.b,{className:"isoGoInvoBtn"},d.a.createElement("span",null,"Go To Invoices"))),d.a.createElement(b.b,{color:"secondary",onClick:function(){return t(!0)}},d.a.createElement("span",null,"Edit Invoice")),d.a.createElement(b.b,{type:"primary",className:"isoInvoPrint"},d.a.createElement("span",null,"Print Invoice"))),d.a.createElement("div",{className:"PageContent"},d.a.createElement("div",{className:"OrderInfo"},d.a.createElement("div",{className:"LeftSideContent"},d.a.createElement("h3",{className:"Title"},"Invoice Info"),d.a.createElement("span",{className:"InvoiceNumber"},e.number)),d.a.createElement("div",{className:"RightSideContent"},d.a.createElement("p",null,d.a.createElement("span",{className:"orderStatusSpan"},"Order Status: "),d.a.createElement("span",{className:"orderStatus"},e.orderStatus)),d.a.createElement("p",null,d.a.createElement("span",{className:"orderDateSpan"},"Order date: "),d.a.createElement("span",{className:"orderDate"},f()(new Date(e.orderDate)).format("MMMM Do YYYY"))))),d.a.createElement("div",{className:"BillingInformation"},d.a.createElement("div",{className:"LeftSideContent"},d.a.createElement("h3",{className:"Title"},"Bill From"),d.a.createElement(V,{companyName:e.billFrom,companyAddress:e.billFromAddress})),d.a.createElement("div",{className:"RightSideContent"},d.a.createElement("h3",{className:"Title"},"Bill To"),d.a.createElement(V,{companyName:e.billTo,companyAddress:e.billToAddress}))),d.a.createElement("div",{className:"InvoiceTable"},d.a.createElement(N,{invoiceList:e.invoiceList}),d.a.createElement("div",{className:"TotalBill"},d.a.createElement("p",null,"Sub-total :"," ",d.a.createElement("span",null,"".concat(e.currency).concat(e.subTotal))),d.a.createElement("p",null,"Vat :"," ",d.a.createElement("span",null,"".concat(e.currency).concat(e.vatPrice))),d.a.createElement("h3",null,"Grand Total :"," ",d.a.createElement("span",null,"".concat(e.currency).concat(e.totalCost))))),d.a.createElement("div",{className:"ButtonWrapper"},d.a.createElement(b.b,{type:"primary",className:"mateInvoPrint"},d.a.createElement("span",null,"Send Invoice")))))))}}]),t}(s.Component),G=t(1181),H=t(93);function J(n){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(n){return!1}}();return function(){var t,a=Object(c.a)(n);if(e){var r=Object(c.a)(this).constructor;t=Reflect.construct(a,arguments,r)}else t=a.apply(this,arguments);return Object(o.a)(this,t)}}var Q=function(n){Object(l.a)(t,n);var e=J(t);function t(){return Object(r.a)(this,t),e.apply(this,arguments)}return Object(i.a)(t,[{key:"componentDidMount",value:function(){var n=this.props,e=n.initialInvoices,t=n.initData;e||t(),this.toggleCreatedInvoice(this.props)}},{key:"componentWillReceiveProps",value:function(n){this.toggleCreatedInvoice(n)}},{key:"toggleCreatedInvoice",value:function(n){var e=n.match,t=n.initialInvoices,a=n.currentInvoice,r=n.selectCurrentInvoice,i=e.params.invoiceId;t&&a.id!==i&&r(i)}},{key:"render",value:function(){var n=this.props,e=n.match,t=n.currentInvoice,a=n.enableEditView,r=e.url.replace(e.params.invoiceId,"");return t.id!==e.params.invoiceId?d.a.createElement(G.a,null):a?d.a.createElement(M,Object.assign({},this.props,{redirectPath:r})):d.a.createElement(U,Object.assign({},this.props,{redirectPath:r}))}}]),t}(s.Component);e.default=Object(p.c)(function(n){return Object(a.a)({},n.Invoices)},H.a)(Q)}}]);
//# sourceMappingURL=90.a922b47f.chunk.js.map