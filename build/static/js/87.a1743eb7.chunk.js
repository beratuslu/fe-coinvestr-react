(window.webpackJsonp=window.webpackJsonp||[]).push([[87,128,129,130,131],{1047:function(n,t,e){"use strict";e.r(t);var r=e(0),i=e.n(r),o=e(27),a=e(26),l=e(10);function c(){var n=Object(o.a)(["\n  font-size: 13px;\n  font-weight: 400;\n  color: ",";\n  line-height: 24px;\n"]);return c=function(){return n},n}function d(){var n=Object(o.a)(["\n  font-size: 14px;\n  font-weight: 500;\n  color: ",";\n  margin: 0;\n  margin-bottom: 5px;\n"]);return d=function(){return n},n}var p=a.d.h3(d(),Object(l.palette)("text",0)),s=a.d.p(c(),Object(l.palette)("text",3)),f=function(n){return i.a.createElement("div",null,n.title?i.a.createElement(p,{className:"isoBoxTitle"}," ",n.title," "):"",n.subtitle?i.a.createElement(s,{className:"isoBoxSubTitle"}," ",n.subtitle," "):"")};function u(){var n=Object(o.a)(["\n  width: 100%;\n  height: 100%;\n  padding: 20px;\n  background-color: #ffffff;\n  border: 1px solid ",";\n  margin: 0 0 30px;\n\n  &:last-child {\n    margin-bottom: 0;\n  }\n\n  @media only screen and (max-width: 767px) {\n    padding: 20px;\n    ",";\n  }\n\n  &.half {\n    width: calc(50% - 34px);\n    @media (max-width: 767px) {\n      width: 100%;\n    }\n  }\n"]);return u=function(){return n},n}var g=a.d.div(u(),Object(l.palette)("border",0),"");t.default=function(n){return i.a.createElement(g,{className:"".concat(n.className," isoBoxWrapper"),style:n.style},i.a.createElement(f,{title:n.title,subtitle:n.subtitle}),n.children)}},1093:function(n,t,e){"use strict";e.r(t);var r=e(0),i=e.n(r),o=e(27);function a(){var n=Object(o.a)(["\n  padding: 40px 20px;\n  display: flex;\n  flex-flow: row wrap;\n  overflow: hidden;\n\n  @media only screen and (max-width: 767px) {\n    padding: 50px 20px;\n  }\n\n  @media (max-width: 580px) {\n    padding: 15px;\n  }\n"]);return a=function(){return n},n}var l=e(26).d.div(a());t.default=function(n){return i.a.createElement(l,Object.assign({className:null!=n.className?"".concat(n.className," isoLayoutContentWrapper"):"isoLayoutContentWrapper"},n),n.children)}},1094:function(n,t,e){"use strict";e.r(t);var r=e(0),i=e.n(r),o=e(27),a=e(26),l=e(10),c=e(39);function d(){var n=Object(o.a)(["\n  font-size: 19px;\n  font-weight: 500;\n  color: ",";\n  width: 100%;\n  margin-right: 17px;\n  margin-bottom: 30px;\n  display: flex;\n  align-items: center;\n  white-space: nowrap;\n\n  @media only screen and (max-width: 767px) {\n    margin: 0 10px;\n    margin-bottom: 30px;\n  }\n\n  &:before {\n    content: '';\n    width: 5px;\n    height: 40px;\n    background-color: ",";\n    display: flex;\n    margin: ",";\n  }\n\n  &:after {\n    content: '';\n    width: 100%;\n    height: 1px;\n    background-color: ",";\n    display: flex;\n    margin: ",";\n  }\n"]);return d=function(){return n},n}var p=a.d.h1(d(),Object(l.palette)("secondary",2),Object(l.palette)("secondary",3),function(n){return"rtl"===n["data-rtl"]?"0 0 0 15px":"0 15px 0 0"},Object(l.palette)("secondary",3),function(n){return"rtl"===n["data-rtl"]?"0 15px 0 0":"0 0 0 15px"}),s=Object(c.a)(p);t.default=function(n){return i.a.createElement(s,{className:"isoComponentTitle"},n.children)}},1095:function(n,t,e){"use strict";e.r(t);var r=e(0),i=e.n(r),o=e(27),a=e(26),l=e(10),c=e(39);function d(){var n=Object(o.a)(["\n  margin-top: 30px;\n  -webkit-overflow-scrolling: touch;\n\n  .demoBtn {\n    margin-right: ",";\n    margin-left: ",";\n  }\n\n  .demoBtnsWrapper {\n    &:nth-child(1) {\n      margin-left: ",";\n      margin-right: ",";\n      white-space: nowrap;\n    }\n\n    &:nth-child(2) {\n      width: 70px;\n      float: ",";\n    }\n\n    &:nth-child(3) {\n      width: 70px;\n      margin-left: ",";\n      margin-right: ",";\n    }\n\n    &:nth-child(4) {\n      margin-left: ",";\n      margin-right: ",";\n      clear: both;\n      white-space: nowrap;\n    }\n\n    @media only screen and (max-width: 480px) {\n      margin-left: ",";\n      white-space: nowrap;\n      margin-right: ",";\n      float: none !important;\n    }\n\n    .demoPosBtn {\n      width: 70px;\n      margin-right: ",";\n      margin-left: ",";\n      margin-bottom: 8px;\n      padding: 0;\n\n      @media only screen and (max-width: 480px) {\n        width: 65px;\n      }\n    }\n  }\n\n  .ant-btn {\n    &:not(.demoPosBtn) {\n      &:last-child {\n        margin-right: 0;\n      }\n    }\n  }\n\n  .tooltipBtn {\n    display: inline-block;\n    line-height: 32px;\n    height: 32px;\n    width: 70px;\n    font-size: 14px;\n    text-align: center;\n    background: ",";\n    margin-right: ",";\n    margin-left: ",";\n    margin-bottom: 6px;\n    border-radius: 6px;\n  }\n\n  .ant-progress {\n    &.ant-progress-circle {\n      margin-right: ",";\n      margin-left: ",";\n\n      &:last-child {\n        margin-right: ",";\n        margin-left: ",";\n      }\n    }\n  }\n\n  strong {\n    font-weight: 700;\n    font-size: 14px;\n  }\n"]);return d=function(){return n},n}var p=a.d.div(d(),function(n){return"rtl"===n["data-rtl"]?"0":"10px"},function(n){return"rtl"===n["data-rtl"]?"10px":"0"},function(n){return"rtl"===n["data-rtl"]?"0":"70px"},function(n){return"rtl"===n["data-rtl"]?"70px":"0"},function(n){return"rtl"===n["data-rtl"]?"right":"left"},function(n){return"rtl"===n["data-rtl"]?"0":"295px"},function(n){return"rtl"===n["data-rtl"]?"295px":"0"},function(n){return"rtl"===n["data-rtl"]?"0":"70px"},function(n){return"rtl"===n["data-rtl"]?"70px":"0"},function(n){return"rtl"===n["data-rtl"]?"8px":"0 !important"},function(n){return"rtl"===n["data-rtl"]?"0 !important":"8px"},function(n){return"rtl"===n["data-rtl"]?"0":"8px"},function(n){return"rtl"===n["data-rtl"]?"8px":"0"},Object(l.palette)("secondary",1),function(n){return"rtl"===n["data-rtl"]?"auto":"6px"},function(n){return"rtl"===n["data-rtl"]?"6px":"0"},function(n){return"rtl"===n["data-rtl"]?"0":"15px"},function(n){return"rtl"===n["data-rtl"]?"15px":"0"},function(n){return n["data-rtl"],"0"},function(n){return n["data-rtl"],"0"}),s=Object(c.a)(p);t.default=function(n){return i.a.createElement(s,{className:"isoExampleWrapper",style:n.style},n.children)}},2809:function(n,t,e){"use strict";e.r(t);var r=e(0),i=e.n(r),o=e(2557),a=e.n(o),l=(e(2558),a.a),c=e(1045),d=e(1094),p=e(1047),s=e(1093),f=e(1095),u=e(27),g=e(26),h=e(10),x=e(14);function m(){var n=Object(u.a)(["\n  .filepicker {\n    width: 100%;\n    min-height: 320px;\n    padding: 35px 0px;\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    justify-content: center;\n    background-color: #ffffff;\n    border: 1px dashed ",";\n    position: relative;\n    overflow: hidden;\n    cursor: pointer;\n    text-align: center;\n    ",";\n\n    .closeBtn {\n      width: 30px;\n      height: 30px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      flex-shrink: 0;\n      padding: 0;\n      margin-right: 0;\n      background-color: transparent;\n      outline: 0;\n      border: 0;\n      position: absolute;\n      top: 0;\n      right: 0;\n      ",";\n      ",";\n      ",";\n\n      &:before {\n        content: '\f2d7';\n        font-family: 'ionicons';\n        font-size: 14px;\n        color: ",";\n        line-height: 1;\n        ",";\n      }\n\n      &:hover {\n        &:before {\n          color: ",";\n        }\n      }\n    }\n\n    .dz-message {\n      width: 100%;\n      position: relative;\n      display: flex;\n      flex-direction: column;\n      margin: 0;\n\n      span {\n        font-size: 14px;\n        color: ",";\n        font-weight: 700;\n        margin-top: 6px;\n      }\n\n      &:before {\n        content: '\f255';\n        font-family: 'ionicons';\n        font-size: 53.4px;\n        line-height: 32px;\n        color: ",";\n      }\n    }\n\n    .dz-progress {\n      width: 100%;\n      height: 100px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      flex-shrink: 0;\n      position: absolute;\n      top: 0;\n      left: 0;\n      background: none;\n      background-color: rgba(255, 255, 255, 0.8);\n      ",";\n    }\n\n    .dz-preview {\n      width: 100px;\n      height: 127px;\n      display: flex;\n      flex-direction: column;\n      flex-shrink: 0;\n      overflow: hidden;\n      float: left;\n      position: relative;\n      margin: 0;\n      margin-left: 2px;\n      margin-bottom: 2px;\n\n      .dz-progress {\n        display: none;\n      }\n\n      .dz-image {\n        width: 100%;\n        height: 100px;\n        margin-bottom: 2px;\n        display: block;\n        flex-shrink: 0;\n        overflow-y: hidden;\n        position: relative;\n        background: none;\n        background-color: ",";\n        ",";\n\n        img {\n          max-width: 100%;\n          position: absolute;\n          left: 0;\n          right: 0;\n          top: 0;\n          bottom: 0;\n          margin: auto;\n        }\n      }\n\n      .dz-details {\n        width: 100%;\n        height: 25px;\n        padding: 0 8px;\n        flex-shrink: 0;\n        opacity: 1;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        overflow: hidden;\n        position: relative;\n        cursor: default;\n        background-color: ",";\n\n        .dz-size {\n          display: none;\n        }\n        .dz-filename {\n          width: 100%;\n          overflow: hidden;\n          text-overflow: ellipsis;\n\n          span {\n            font-size: 14px;\n            color: ",";\n            white-space: nowrap;\n            background-color: transparent;\n          }\n\n          &:not(:hover) {\n            span {\n              border: 0;\n            }\n          }\n\n          &:hover {\n            span {\n              border: 0;\n              background-color: transparent;\n            }\n          }\n        }\n      }\n\n      .dz-success-mark {\n        display: none;\n      }\n\n      .dz-remove {\n        font-size: 14px;\n        font-weight: 400;\n        background-color: ",";\n        width: 100%;\n        height: 25px;\n        color: #fff;\n        line-height: 25px;\n        display: inline-block;\n        text-align: center;\n        position: absolute;\n        bottom: -25px;\n        left: 0px;\n        cursor: pointer;\n        border: 0;\n        outline: 0;\n        padding: 0;\n        ",";\n      }\n\n      &:hover {\n        .dz-remove {\n          bottom: 0;\n        }\n      }\n    }\n\n    &.dz-started {\n      .dz-message {\n        display: none;\n      }\n    }\n  }\n"],["\n  .filepicker {\n    width: 100%;\n    min-height: 320px;\n    padding: 35px 0px;\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    justify-content: center;\n    background-color: #ffffff;\n    border: 1px dashed ",";\n    position: relative;\n    overflow: hidden;\n    cursor: pointer;\n    text-align: center;\n    ",";\n\n    .closeBtn {\n      width: 30px;\n      height: 30px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      flex-shrink: 0;\n      padding: 0;\n      margin-right: 0;\n      background-color: transparent;\n      outline: 0;\n      border: 0;\n      position: absolute;\n      top: 0;\n      right: 0;\n      ",";\n      ",";\n      ",";\n\n      &:before {\n        content: '\\f2d7';\n        font-family: 'ionicons';\n        font-size: 14px;\n        color: ",";\n        line-height: 1;\n        ",";\n      }\n\n      &:hover {\n        &:before {\n          color: ",";\n        }\n      }\n    }\n\n    .dz-message {\n      width: 100%;\n      position: relative;\n      display: flex;\n      flex-direction: column;\n      margin: 0;\n\n      span {\n        font-size: 14px;\n        color: ",";\n        font-weight: 700;\n        margin-top: 6px;\n      }\n\n      &:before {\n        content: '\\f255';\n        font-family: 'ionicons';\n        font-size: 53.4px;\n        line-height: 32px;\n        color: ",";\n      }\n    }\n\n    .dz-progress {\n      width: 100%;\n      height: 100px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      flex-shrink: 0;\n      position: absolute;\n      top: 0;\n      left: 0;\n      background: none;\n      background-color: rgba(255, 255, 255, 0.8);\n      ",";\n    }\n\n    .dz-preview {\n      width: 100px;\n      height: 127px;\n      display: flex;\n      flex-direction: column;\n      flex-shrink: 0;\n      overflow: hidden;\n      float: left;\n      position: relative;\n      margin: 0;\n      margin-left: 2px;\n      margin-bottom: 2px;\n\n      .dz-progress {\n        display: none;\n      }\n\n      .dz-image {\n        width: 100%;\n        height: 100px;\n        margin-bottom: 2px;\n        display: block;\n        flex-shrink: 0;\n        overflow-y: hidden;\n        position: relative;\n        background: none;\n        background-color: ",";\n        ",";\n\n        img {\n          max-width: 100%;\n          position: absolute;\n          left: 0;\n          right: 0;\n          top: 0;\n          bottom: 0;\n          margin: auto;\n        }\n      }\n\n      .dz-details {\n        width: 100%;\n        height: 25px;\n        padding: 0 8px;\n        flex-shrink: 0;\n        opacity: 1;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        overflow: hidden;\n        position: relative;\n        cursor: default;\n        background-color: ",";\n\n        .dz-size {\n          display: none;\n        }\n        .dz-filename {\n          width: 100%;\n          overflow: hidden;\n          text-overflow: ellipsis;\n\n          span {\n            font-size: 14px;\n            color: ",";\n            white-space: nowrap;\n            background-color: transparent;\n          }\n\n          &:not(:hover) {\n            span {\n              border: 0;\n            }\n          }\n\n          &:hover {\n            span {\n              border: 0;\n              background-color: transparent;\n            }\n          }\n        }\n      }\n\n      .dz-success-mark {\n        display: none;\n      }\n\n      .dz-remove {\n        font-size: 14px;\n        font-weight: 400;\n        background-color: ",";\n        width: 100%;\n        height: 25px;\n        color: #fff;\n        line-height: 25px;\n        display: inline-block;\n        text-align: center;\n        position: absolute;\n        bottom: -25px;\n        left: 0px;\n        cursor: pointer;\n        border: 0;\n        outline: 0;\n        padding: 0;\n        ",";\n      }\n\n      &:hover {\n        .dz-remove {\n          bottom: 0;\n        }\n      }\n    }\n\n    &.dz-started {\n      .dz-message {\n        display: none;\n      }\n    }\n  }\n"]);return m=function(){return n},n}var b=g.d.div(m(),Object(h.palette)("border",0),Object(x.a)("0"),Object(x.a)("50%"),Object(x.b)("none"),Object(x.c)(),Object(h.palette)("text",3),Object(x.c)(),Object(h.palette)("text",0),Object(h.palette)("text",3),Object(h.palette)("primary",0),Object(x.a)("0"),Object(h.palette)("secondary",6),Object(x.a)("0"),Object(h.palette)("secondary",1),Object(h.palette)("text",4),Object(h.palette)("error",0),Object(x.c)());t.default=function(){var n={addedfile:function(n){return Object(c.c)("success","".concat(n.name," added"))},success:function(n){return Object(c.c)("success","".concat(n.name," successfully uploaded"))},error:function(n){return Object(c.c)("error","Server is not set in the demo")}};return i.a.createElement(s.default,null,i.a.createElement(d.default,null,"Dropzone"),i.a.createElement(p.default,null,i.a.createElement(f.default,null,i.a.createElement(b,null,i.a.createElement(l,{config:{iconFiletypes:[".jpg",".png",".gif"],method:!0,showFiletypeIcon:!0,uploadMultiple:!1,maxFilesize:2,maxFiles:2,dictMaxFilesExceeded:"You can only upload upto 2 images",dictRemoveFile:"Delete",dictCancelUploadConfirmation:"Are you sure to cancel upload?",postUrl:"no-url"},eventHandlers:n,djsConfig:{autoProcessQueue:!1}})))))}}}]);
//# sourceMappingURL=87.a1743eb7.chunk.js.map