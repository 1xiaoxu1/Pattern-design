!function(n,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("react")):"function"==typeof define&&define.amd?define(["exports","react"],e):e(((n="undefined"!=typeof globalThis?globalThis:n||self)["my-lib-umd"]=n["my-lib-umd"]||{},n["my-lib-umd"].js={}),n.React)}(this,(function(n,e){"use strict";const t=e.memo((n=>{const{type:t,width:o,height:i,disabled:r,circle:l,dashed:a,loading:c,onClick:s,children:d}=n,p=e.useMemo((()=>t||"danger"===t||"warning"===t||"warning"===t||"text"===t?t:"primary"),[t]),h=e.useMemo((()=>{var n={width:"100px",height:"40px"};return o&&(n.width=o+"px"),i&&(n.height=i+"px"),l&&(n={...n,borderRadius:"50%"}),a&&"text"===t&&(n={...n,border:"1px dashed #ccc"}),r&&(n={...n,cursor:"not-allowed"}),n}),[o,i,l,a]);return e.createElement("div",{className:"button"},e.createElement("button",{className:p,style:h,disabled:!!r,onClick:s},c&&e.createElement("div",{className:"loading1"}),d))}));var o=".alertbox {\n  max-width: 400px;\n  margin: 10px;\n  padding: 5px 15px 5px 5px;\n  border: 1px solid;\n  border-radius: 10px;\n}\n.alertbox .mytitle {\n  display: flex;\n  flex-wrap: nowrap;\n  font-size: 18px;\n  justify-content: space-between;\n}\n.alertbox .mytitle p {\n  padding-left: 15px;\n}\n.alertbox .content p {\n  font-size: 14px;\n  padding: 15px;\n}\n.info {\n  background-color: #e6f4ff;\n  border-color: #1677ff;\n}\n.success {\n  background-color: #f6ffed;\n  border-color: #52c41a;\n}\n.warning {\n  background-color: #fffbe6;\n  border-color: #faad14;\n}\n.error {\n  background-color: #fff2f0;\n  border-color: #ff4d4f;\n}\n";var i=".Bigbox {\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  width: 600px;\n  margin: 10px;\n  padding: 20px 0px;\n  padding-top: 20px;\n  font-size: 20px;\n  box-shadow: 3px 3px 7px 1px #93c4f8;\n}\n.Bigbox .box {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 249px;\n}\n.Bigbox .children {\n  width: 100%;\n}\n";const r=n=>{const{showUnder:t,style:o,...i}=n,[r,l]=e.useState(!1),a=()=>{const n=window.pageYOffset||document.documentElement.scrollTop;l(n>(void 0!==t?t:300))};return e.useEffect((()=>(window.addEventListener("scroll",a),()=>{window.removeEventListener("scroll",a)})),[]),e.createElement("div",null,r&&e.createElement("button",{style:o,onClick:()=>{window.scrollTo({top:0,behavior:"smooth"})}},"UP"))};r.defaultProps={showUnder:100,style:{position:"fixed",bottom:"20px",right:"20px",cursor:"pointer"}};var l=".box {\n  min-width: 30px;\n  min-height: 30px;\n  border-radius: 20%;\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.box .icon {\n  text-align: center;\n  border: 1px solid white;\n  border-radius: 50%;\n  position: absolute;\n  top: -10px;\n  right: -10px;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  overflow: hidden;\n}\n";const a=e.memo((n=>{let{count:t,background:o,backgroundColor:i,color:r,boxWidth:a,boxHeight:c,iconWidth:s,iconHeight:d,fontSize:p,top:h,right:m}=n;return e.createElement("div",null,e.createElement("div",{className:l.box,style:{backgroundColor:o||"#bfbfbf",width:a||"50px",height:c||"50px"}},e.createElement("div",{className:l.icon,style:{backgroundColor:i||"#ff4d4f",color:r||"#fff",width:s||"30px",height:d||"30px",fontSize:p||"14px",top:h||"-10px",right:m||"-10px"}},e.createElement("span",null,t||"99"))))}));var c=".container {\n  width: 100%;\n}\n.container .title {\n  border-top: 1px solid #ebedf1;\n  height: 60px;\n  line-height: 60px;\n}\n.container .title:hover {\n  color: #409eff;\n}\n.container .content {\n  overflow: hidden;\n  height: 0;\n  transition: all 1s;\n}\n.container:nth-child(1) {\n  border-bottom: 1px solid #ebedf1;\n}\n";const s=e.memo((n=>{const{type:t,width:o,height:i,children:r}=n,l=e.useMemo((()=>t||"style"===t?t:"or-container"),[t]),a=e.useMemo((()=>{var n={width:"100%"};return o&&(n.width=o+"px"),i&&(n.height=i+"px"),n}),[o,i]);return e.createElement("div",{className:l,style:a},r)})),d=e.memo((n=>{const{type:t,width:o,height:i,children:r}=n;e.useMemo((()=>t),[t]);const l=e.useMemo((()=>{var n={};return o&&(n.width=o+"px"),i&&(n.height=i+"px"),n}),[o,i]);return e.createElement("div",{className:"or-header",style:l},r)})),p=e.memo((n=>{const{type:t,width:o,height:i,children:r}=n;e.useMemo((()=>t),[t]);const l=e.useMemo((()=>{var n={width:"200px"};return o&&(n.width=o+"px"),i&&(n.height=i+"px"),n}),[o,i]);return e.createElement("div",{className:"or-aside",style:l},r)})),h=e.memo((n=>{const{type:t,width:o,height:i,children:r}=n;e.useMemo((()=>t),[t]);const l=e.useMemo((()=>{var n={width:"100%"};return o&&(n.width=o+"px"),i&&(n.height=i+"px"),n}),[o,i]);return e.createElement("div",{className:"or-main",style:l},r)})),m=e.memo((n=>{const{type:t,width:o,height:i,children:r}=n;e.useMemo((()=>t),[t]);const l=e.useMemo((()=>{var n={width:"100%"};return o&&(n.width=o+"px"),i&&(n.height=i+"px"),n}),[o,i]);return e.createElement("div",{className:"or-footer",style:l},r)}));var u=".bigBox {\n  width: 100%;\n  height: 1px;\n  background-color: #dcdfe6;\n  margin: 24px 0px;\n  position: relative;\n}\n.bigBox .box {\n  position: absolute;\n  padding: 0px 20px;\n  background-color: white;\n  transform: translateY(-50%);\n}\n.bigBox .right {\n  right: 20px;\n}\n.bigBox .left {\n  left: 20px;\n}\n.bigBox .middle {\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n.horizontal {\n  display: inline-block;\n  height: 10px;\n  margin: 0px 24px;\n  color: #dcdfe6;\n}\n";const x=e.memo((n=>{let{children:t,Position:o,direction:i}=n;return o||(o="middle"),i?e.createElement("span",{className:u.horizontal},"|"):e.createElement("div",null,e.createElement("div",{className:u.bigBox},t?e.createElement("div",{className:[u.box,u[o]].join(" ")},t):""))}));const b=e.memo((n=>{const{children:t,loadMore:o,More:i}=n,r=e.useRef(null);return e.useEffect((()=>{const n=r.current,e=()=>{if(n){n.scrollTop+n.clientHeight>=n.scrollHeight-100&&!i&&(console.log("加载中..."),o())}};return n?.addEventListener("scroll",e),()=>{n?.removeEventListener("scroll",e)}}),[o]),e.createElement("div",{className:".container {\n  width: 100%;\n  height: 400px;\n  overflow-y: scroll;\n}\n.container .content {\n  width: 100%;\n  background-color: #e8f3fe;\n  margin-bottom: 10px;\n}\n".container,ref:r},t)}));var g="* {\n  margin: 0;\n  padding: 0;\n}\n.wrapper {\n  padding-left: 10px;\n  border: 1px solid;\n  border-radius: 5px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  user-select: none;\n}\n.wrapper input {\n  border: none;\n  outline: none;\n  width: 70%;\n}\n.wrapper .button {\n  width: 30%;\n  padding: 5px 15px;\n  margin-bottom: 0px;\n  font-weight: 500;\n  border-width: 0px;\n  background-color: #1677ff;\n  cursor: pointer;\n  color: white;\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n}\n.wrapper .clear {\n  cursor: pointer;\n  padding: 0 5px;\n}\n";var f=".input_number {\n  position: relative;\n  display: inline-block;\n  width: 150px;\n  height: 45px;\n  overflow: hidden;\n  border: 1px solid #dee0e4;\n  border-radius: 10px;\n  transition: all 0.3s;\n  user-select: none;\n}\n.input_number input {\n  position: absolute;\n  top: 0;\n  left: 30%;\n  width: 40%;\n  height: 100%;\n  text-align: center;\n  border: none;\n  outline-style: none;\n  user-select: none;\n}\n.input_number span {\n  position: absolute;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 30%;\n  height: 100%;\n  background-color: #dee0e4;\n}\n.input_number .minus {\n  top: 0;\n  left: 0;\n  cursor: pointer;\n}\n.input_number .minus::after {\n  width: 10px;\n  height: 2px;\n  background-color: #fff;\n  transition: all 0.3s;\n  content: '';\n}\n.input_number .add {\n  top: 0;\n  right: 0;\n  cursor: pointer;\n}\n.input_number .add::after {\n  color: #fff;\n  font-size: 20px;\n  line-height: 20px;\n  transition: all 0.3s;\n  content: '+';\n}\n.active {\n  border-color: #55ccf0;\n}\n.left .minus {\n  top: 50%;\n  left: 0%;\n  height: 50%;\n}\n.left .add {\n  top: 0;\n  left: 0;\n  box-sizing: border-box;\n  height: 50%;\n  border-bottom: 1px solid #c6c8ce;\n}\n.left .input {\n  left: 30%;\n  width: 70%;\n}\n.rigth .minus {\n  top: 50%;\n  left: 70%;\n  height: 50%;\n}\n.rigth .add {\n  top: 0;\n  left: 70%;\n  box-sizing: border-box;\n  height: 50%;\n  border-bottom: 1px solid #c6c8ce;\n}\n.rigth .input {\n  left: 0%;\n  width: 66%;\n}\n.disabled {\n  background-color: #e8ebf0;\n}\n.disabled .input,\n.disabled .add,\n.disabled .minus {\n  cursor: not-allowed;\n}\n.defaule:hover {\n  border: 1px solid #55ccf0;\n}\n.defaule .minus:hover::after {\n  background-color: #55ccf0;\n}\n.defaule .add:hover::after {\n  color: #55ccf0;\n}\n";const w=e.memo((({value:n,min:t,max:o,width:i,height:r,disabled:l,change:a,blur:c,focus:s,controlsPosition:d})=>{let[p,h]=e.useState(n||0),[m,u]=e.useState(!1),x={width:"150px",height:"45px"},b="";o||(o=99999999),t||(t=0),"left"===d?b="left":"rigth"===d&&(b="rigth"),i&&("string"==typeof i?(i.includes("%")||i.includes("px"))&&(x.width=i):1*i&&(x.width=i+"px")),r&&("string"==typeof r?(r.includes("%")||r.includes("px"))&&(x.height=r):1*r&&(x.height=r+"px"));let g=[f.input_number,l?f.disabled:"",l?"":f.defaule,b?f[b]:"",m?f.active:""].join(" ");return e.createElement("div",{className:g,style:x},e.createElement("span",{className:f.minus,onClick:()=>{p<=t?h(t):l||h(p-1),a&&a({value:p})}}),e.createElement("input",{className:f.input,disabled:l,type:"text",min:t,max:o,value:p,onBlur:()=>{u(!1),c&&c({value:p})},onFocus:()=>{u(!0),s&&s({value:p})}}),e.createElement("span",{className:f.add,onClick:()=>{p>=o?h(o):l||h(p+1),a&&a({value:p})}}))}));var v=".link {\n  display: inline-block;\n}\n.link a {\n  color: black;\n  text-decoration: none;\n}\n.link .danger {\n  color: #fa6060;\n}\n.link .danger:hover {\n  color: #f59b9b;\n  text-decoration: none;\n}\n.link .danger.disabled {\n  color: #f6b6b6;\n  cursor: not-allowed;\n}\n.link .warning {\n  color: #f3dd15;\n}\n.link .warning:hover {\n  color: #f8e74b;\n  text-decoration: none;\n}\n.link .warning.disabled {\n  color: #f7ec90;\n  cursor: not-allowed;\n}\n.link .text {\n  color: #000;\n}\n.link .text:hover {\n  color: #9be4fa;\n  text-decoration: none;\n}\n.link .text.disabled {\n  color: #d6d7d9;\n  cursor: not-allowed;\n}\n.link .primary {\n  color: #86e0fb;\n}\n.link .primary:hover {\n  color: #9be4fa;\n  text-decoration: none;\n}\n.link .primary.disabled {\n  color: #b9e9f7;\n  cursor: not-allowed;\n}\n.link .info {\n  color: #b1b3b8;\n}\n.link .info:hover {\n  color: #b9babe;\n  text-decoration: none;\n}\n.link .info.disabled {\n  color: #d6d7d9;\n  cursor: not-allowed;\n}\n.link .success {\n  color: #5dd105;\n}\n.link .success:hover {\n  color: #63df03;\n  text-decoration: none;\n}\n.link .success.disabled {\n  color: #ccf9a9;\n  cursor: not-allowed;\n}\n.link .underline:hover {\n  text-decoration: underline;\n}\n";const k=e.memo((({type:n,underline:t=!0,disabled:o,href:i,children:r})=>{n||"danger"===n||"warning"===n||"success"===n||"text"===n||"info"===n||(n="text"),i||(i="/"),i=o?"javascript:void(0)":i;let l=[v[n],!o&&t?v.underline:"",o?v.disabled:""].join(" ");return e.createElement("div",{className:v.link},e.createElement("a",{href:i,className:l},r))}));var y="@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.white {\n  width: 100%;\n  height: 100%;\n  background-color: #f8f4f4;\n}\n.white .content {\n  position: absolute;\n  width: 100px;\n  height: 60px;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: auto;\n  font-size: 14px;\n  color: #6ab3ff;\n  text-align: center;\n}\n.white .content .icon {\n  margin-left: 30px;\n  width: 30px;\n  height: 30px;\n  border: 2px solid #6ab3ff;\n  border-radius: 50%;\n  border-top-color: transparent;\n  animation: spin 0.8s linear infinite;\n  margin-bottom: 5px;\n}\n.white.show {\n  display: block !important;\n}\n.white.hidden {\n  display: none;\n}\n.black {\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.7);\n}\n.black .content {\n  position: absolute;\n  width: 100px;\n  height: 60px;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: auto;\n  font-size: 14px;\n  color: #6ab3ff;\n  text-align: center;\n}\n.black .content .icon {\n  margin-left: 30px;\n  width: 30px;\n  height: 30px;\n  border: 2px solid #6ab3ff;\n  border-radius: 50%;\n  border-top-color: transparent;\n  animation: spin 0.8s linear infinite;\n  margin-bottom: 5px;\n}\n.black.show {\n  display: block !important;\n}\n.black.hidden {\n  display: none;\n}\n.single {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: auto;\n}\n.all {\n  width: 100vw;\n  height: 100vh;\n  position: fixed;\n  z-index: 110;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: auto;\n}\n";const E=e.memo((n=>{const{text:t,children:o,mask:i,loading:r,all:l}=n;return e.createElement("div",{className:["white"===i?y.white:y.black,!0===r?y.show:y.hidden,!0===l?y.all:y.single].join(" ")},e.createElement("div",{className:y.content},o?o[0]:e.createElement("div",{className:y.icon}),t||""))})),N=n=>{const{type:t,children:o,className:i,...r}=n,l=["or-btn",i,t].join(" ");return e.createElement(e.Fragment,null,e.createElement("button",{className:l,...r},o))};N.defaultProps={type:"default"};const C=n=>{const{children:t,className:o,delay:i,onClick:r,title:l}=n,[a,c]=e.useState(!1),[s,d]=e.useState(!1),p=[o].join(" "),h=()=>{c((n=>!n)),d("打开信息提示"!==l)};return e.useEffect((()=>{let n=setTimeout((()=>{c((n=>!1))}),i);return()=>clearTimeout(n)}),[a]),e.createElement("div",{style:{position:"relative"},className:p},e.createElement(N,{onClick:h,style:{fontSize:"12px"}},l||"hello"),a&&e.createElement("span",{className:"box"},t||"这是一个信息提示窗!","    ",s?e.createElement("span",{onClick:h,className:"xxx"},"X"):null))};C.defaultProps={delay:3e3};var S=".container .title {\n  color: #409eff;\n  font-size: 14px;\n}\n.container .mask {\n  width: 100vw;\n  height: 100vh;\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 110;\n  background-color: rgba(0, 0, 0, 0.5);\n}\n.container .mask .box {\n  width: 400px;\n  height: 150px;\n  padding: 10px;\n  box-sizing: border-box;\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  margin: auto;\n  background-color: #fff;\n  border-radius: 10px;\n}\n.container .mask .box .top {\n  width: 100%;\n  height: 30px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.container .mask .box .content {\n  font-size: 14px;\n  color: #999;\n}\n.container .mask .box .bottom {\n  width: 100%;\n}\n.container .mask .box .bottom .cancle {\n  float: right;\n  width: 60px;\n  height: 30px;\n  background-color: #fff;\n  border: 1px solid #409eff;\n  color: #409eff;\n  text-align: center;\n  line-height: 30px;\n  margin-right: 10px;\n}\n.container .mask .box .bottom .button {\n  float: right;\n  width: 60px;\n  height: 30px;\n  background-color: #409eff;\n  color: #fff;\n  text-align: center;\n  line-height: 30px;\n  border: none;\n}\n.container .alter {\n  width: 400px;\n  height: 60px;\n  background-color: #edf2fc;\n  border-radius: 10px;\n  padding: 20px;\n  box-sizing: border-box;\n  position: fixed;\n  top: 18px;\n  left: 500px;\n  z-index: 110;\n}\n.container .style {\n  width: 400px;\n  height: 60px;\n  background-color: #b1fbcf;\n  border-radius: 10px;\n  padding: 20px;\n  box-sizing: border-box;\n  position: fixed;\n  top: 18px;\n  left: 500px;\n  z-index: 110;\n}\n.show {\n  display: block;\n}\n.hidden {\n  display: none;\n}\n";const _=e.memo((n=>{const{children:t,message:o,confirm:i,data:r}=n;let[l,a]=e.useState(!1);let[c,s]=e.useState(!1),[d,p]=e.useState(!1);const h=n=>{console.log(n.target);let e=document.getElementsByClassName("button___2_FH-")[0];document.getElementsByClassName("cancle___3SOzf")[0];console.log(e),n.target===e?s(!0):(n.target,s(!1)),a(!1),p(!0),setTimeout((()=>{p(!1)}),2e3)};return e.createElement("div",{className:S.container},e.createElement("div",{className:S.title,onClick:()=>{a(!0)}},t),e.createElement("div",{className:[S.mask,!0===l?S.show:S.hidden].join(" ")},e.createElement("div",{className:S.box},e.createElement("div",{className:S.top},e.createElement("h3",null,o.title),e.createElement("div",{onClick:n=>h(n)}," x")),e.createElement("p",{className:S.content},o.content),i?e.createElement("div",{className:S.bottom},e.createElement("button",{className:S.button,onClick:n=>h(n)},o.config),e.createElement("button",{className:S.cancle,onClick:n=>h(n)},o.cancel)):e.createElement("div",{className:S.bottom},e.createElement("button",{className:S.button,onClick:n=>h(n)},o.config)))),i?e.createElement("div",{className:[S.style,d?S.show:S.hidden].join(" ")},"action:",!0===c?r.confirm:r.del):e.createElement("div",{className:[S.alter,d?S.show:S.hidden].join(" ")},"action:",c?r.confirm:r.del))})),z=e.memo((n=>{const{type:t,width:o,height:i,duration:r,children:l}=n,a=e.useMemo((()=>t||"topLeft"===t?t:"navs"),[t]);e.useEffect((()=>{c.current&&(c.current.hidden=!0)}),[]);const c=e.useRef(null);return e.createElement("div",{className:"container"},e.createElement("button",{className:"button",onClick:()=>(c.current&&(c.current.hidden=!1),console.log(c),void(r&&setTimeout((()=>{c.current&&(c.current.hidden=!0)}),r)))},l),e.createElement("div",{className:a,ref:c},e.createElement("div",{className:"error",onClick:()=>{c.current&&(c.current.hidden=!0)}},"x"),e.createElement("h3",null,n.message," "),e.createElement("div",null,n.description," ")))}));var M=".popover {\n  position: relative;\n  display: inline-block;\n}\n.popover .popover_main {\n  position: absolute;\n  z-index: 999;\n  display: none;\n  width: 200px;\n  padding: 10px;\n  background-color: #fff;\n  border-radius: 10px;\n  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);\n}\n.popover .show {\n  display: block;\n}\n";const B=e.memo((({title:n,content:t,width:o,children:i,trigger:r,placement:l})=>{let[a,c]=e.useState(!1),[s,d]=e.useState({});const p=e.useRef(null);return"click"!==r&&"focus"!==r&&"hover"!==r&&(r="hover"),e.useEffect((()=>{console.log(p.current.clientWidth/2+"px"),d("left"===l?{top:"-50%",right:o?o+"px":"100px",width:o?o+"px":"100px"}:"rigth"===l?{top:"-50%",left:o?o+"px":"100px",width:o?o+"px":"100px"}:"top"===l?{bottom:p.current.clientHeight+"px",left:"0px",width:o?o+"px":"100px"}:{top:p.current.clientHeight+"px",left:"0px",width:o?o+"px":"100px"})}),[]),e.createElement("div",{className:M.popover,onClick:()=>{"click"===r&&c(!a)},onMouseDown:()=>{"focus"===r&&c(!0)},onMouseUp:()=>{"focus"===r&&c(!1)},onMouseMove:()=>{"hover"===r&&c(!0)},onMouseOut:()=>{"hover"===r&&c(!1)},ref:p},i||"",e.createElement("div",{className:[M.popover_main,a?M.show:""].join(" "),style:s},e.createElement("div",{className:M.title},n||"标题"),e.createElement("div",{className:M.content},t||"这是一段内容")))}));var j="* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n.line {\n  display: flex;\n  width: 100%;\n  height: 36px;\n  padding: 10px;\n}\n.line .line_outer {\n  width: 95%;\n  height: 100%;\n}\n.line .line_outer .line_inner {\n  width: 100%;\n  height: 100%;\n  background-color: #e5e5ea;\n  border-radius: 10px;\n}\n.line .line_outer .line_inner .line_bg {\n  width: 0;\n  height: 100%;\n  background-color: #ffc107;\n  border-radius: 10px;\n  transition: all 0.5s;\n}\n.line .line_outer .line_inner .line_bg_show {\n  width: 0;\n  height: 100%;\n  background-color: #ffc107;\n  border-radius: 10px;\n}\n.line .line_outer .line_inner .line_bg_show::before {\n  display: block;\n  width: 50%;\n  height: 100%;\n  background-color: rgba(233, 212, 212, 0.467);\n  border-radius: 10px;\n  animation: show 1s linear infinite;\n  content: '';\n}\n.line .line_info {\n  width: 10%;\n  height: 100%;\n  text-align: right;\n}\n.line .line_info .line_info_status {\n  width: 100%;\n  height: 100%;\n  vertical-align: baseline;\n}\n@keyframes show {\n  0% {\n    width: 10%;\n  }\n  20% {\n    width: 30%;\n  }\n  50% {\n    width: 50%;\n  }\n  70% {\n    width: 70%;\n  }\n  100% {\n    width: 100%;\n  }\n}\nButton {\n  width: 30px;\n  height: 30px;\n  display: flex;\n  margin-bottom: 10px;\n  float: left;\n}\n";const T=e.memo((n=>{let{percent:t,strokeColor:o,status:i,showInfo:r}=n;console.log(n),console.log(j);const l=e.useMemo((()=>{let n={width:"0",backgroundColor:"#ffc107",num:"0%"};return t&&(n.width=t+"%",n.num=t+"%"),100===t&&i&&"success"===i&&(n={width:t+"%",backgroundColor:"#4caf50",num:t+"%"}),t&&i&&"fail"===i&&(n={width:t+"%",backgroundColor:"#f44336",num:t+"%"}),t&&i&&"active"===i&&(n={width:t+"%",backgroundColor:"#3498ff",num:t+"%"}),o&&(n.backgroundColor=o),!1===r&&(n.num=""),n}),[i,t]);return console.log("active"===i?j.line_bg_show:j.line_bg),e.createElement("div",{className:j.line},e.createElement("div",{className:j.line_outer},e.createElement("div",{className:j.line_inner},e.createElement("div",{className:"active"===i?j.line_bg_show:j.line_bg,style:l}))),e.createElement("div",{className:j.line_info},e.createElement("span",{className:j.line_info_status},l.num)))}));var I=".wrapper {\n  display: inline-block;\n  user-select: none;\n}\n.wrapper .rateList {\n  display: flex;\n  list-style: none;\n}\n.wrapper .rateList li {\n  padding: 5px;\n  font-size: 25px;\n}\n.wrapper .rateList .selectChoice {\n  color: red;\n}\n";var L=".container {\n  position: relative;\n  width: 200px;\n  height: 32px;\n}\n.container .select {\n  border: 1px solid #f5f5f5;\n  border-radius: 5px;\n  outline: none;\n  appearance: none;\n  -webkit-appearance: none;\n  box-sizing: border-box;\n  padding: 0px 10px;\n}\n.container .select:focus {\n  border: 1px solid #1b7aff;\n  border-radius: 5px;\n}\n.container .ul {\n  margin-top: 5px;\n  width: 206px;\n  border-radius: 8px;\n  background-color: #fff;\n  list-style: none;\n  position: absolute;\n  z-index: 110;\n  box-shadow: 2px 2px 5px #999;\n  padding-inline-start: none;\n}\n.container .ul.show {\n  display: block;\n}\n.container .ul.hidden {\n  display: none;\n}\n.container .ul .li {\n  width: 100%;\n  height: 40px;\n  padding: 10px 5px;\n  box-sizing: border-box;\n  text-align: center;\n}\n.container .ul .li.NoSelect {\n  cursor: not-allowed;\n  -webkit-user-select: none;\n  /* Safari */\n  -moz-user-select: none;\n  /* Firefox */\n  -ms-user-select: none;\n  /* Internet Explorer/Edge */\n  user-select: none !important;\n}\n.container .ul .li.isSelect {\n  user-select: all;\n}\n.container .ul .li::selection {\n  background-color: transparent;\n  color: inherit;\n}\n.container .ul .li:hover {\n  background-color: #1b7aff;\n  color: #fff;\n}\n";const W=e.memo((n=>{const{width:t,disabled:o,height:i,options:r}=n,l=e.useMemo((()=>{var n={width:"200px",height:"32px"};return t&&(n.width=t+"px"),i&&(n.height=i+"px"),o&&(n={...n,cursor:"not-allowed"}),n}),[t,i,o]);let[a,c]=e.useState(!0);let[s,d]=e.useState("");return e.useState(!0),e.createElement("div",{className:L.container},e.createElement("input",{type:"text",style:l,className:L.select,onClick:n=>{c(!a)},disabled:o,value:s}),e.createElement("div",{className:[L.ul,a?L.hidden:L.show].join(" ")},r.map((n=>e.createElement("div",{className:[L.li,!0===n.state?L.isSelect:L.NoSelect].join(" "),onClick:()=>(n=>{console.log(n.state),n.state&&(d(n.title),c(!a))})(n)},n.title)))))}));var H=".box {\n  display: flex;\n  align-items: center;\n  font-size: 18px;\n  font-weight: bold;\n}\n.box .wrapper {\n  width: 34px;\n  height: 16px;\n  padding: 3px;\n  margin: 0 10px;\n  border-radius: 30px;\n  position: relative;\n  transition: all 0.5s linear;\n  display: inline-block;\n}\n.box .wrapper .inner {\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  position: absolute;\n  background-color: white;\n  transition: all 0.3s linear;\n}\n.box .negativeWord,\n.box .activeWord {\n  transition: all 0.3s linear;\n}\n";const R=e.memo((n=>{console.log(n);const{type:t,columns:o,children:i,show:r,cell:l}=n;return e.useMemo((()=>t||"warning"===t||"success"===t||"danger"===t||"primary"===t?t:"tabs"),[t]),e.createElement("table",{className:[r?"table":"tables",l?"tab":"tables"].join(" ")},e.createElement("thead",null,e.createElement("tr",null,n.columns.map((n=>e.createElement("th",null,n," "))))),n.items.map((n=>e.createElement("tbody",{key:n.name},e.createElement("tr",{className:"title"},e.createElement("td",null,n.date," "),e.createElement("td",null," ",n.name," "),e.createElement("td",null,n.address," "))))))}));var D=".container {\n  width: 100%;\n}\n.container ul {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.container .header {\n  width: 100%;\n  height: 30px;\n  border-bottom: 2px solid #ebedf1;\n}\n.container .header .title {\n  float: left;\n  height: 30px;\n  margin-right: 40px;\n}\n.container .header .title.active {\n  color: #4569d4;\n  border-bottom: 2px solid #4569d4;\n}\n.container .header .title:hover {\n  color: #4569d4;\n}\n.container .header1 {\n  width: 100%;\n  height: 40px;\n  border-bottom: 1px solid #ebedf1;\n}\n.container .header1 .title {\n  float: left;\n  height: 40px;\n  background-color: #fff;\n  padding: 10px 20px;\n  box-sizing: border-box;\n  border-top: 1px solid #ebedf1;\n  border-right: 1px solid #ebedf1;\n}\n.container .header1 .title:hover {\n  color: #4569d4;\n}\n.container .header1 .title.active {\n  height: 41px;\n  background-color: #fff;\n  color: #4569d4;\n}\n.container .header1 .title:nth-child(1) {\n  border-left: 1px solid #ebedf1;\n}\n.container .main {\n  padding-top: 20px;\n  width: 100%;\n}\n.container1 {\n  width: 100%;\n  box-shadow: 1px 1px 1px 3px #f5f5f5;\n  border: 1px solid #ebedf1;\n}\n.container1 ul {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.container1 .header1 {\n  width: 100%;\n  height: 40px;\n  border-bottom: 1px solid #ebedf1;\n  background-color: #f5f7fa;\n  box-sizing: border-box;\n}\n.container1 .header1 .title {\n  float: left;\n  height: 40px;\n  padding: 10px 20px;\n  box-sizing: border-box;\n}\n.container1 .header1 .title:hover {\n  color: #4569d4;\n}\n.container1 .header1 .title.active {\n  height: 41px;\n  background-color: #fff;\n  color: #4569d4;\n  border-top: 1px solid #ebedf1;\n  border-right: 1px solid #ebedf1;\n  border-left: 1px solid #ebedf1;\n}\n.container1 .main {\n  padding: 20px 0px 20px 20px;\n  width: 100%;\n}\n";const P=e.memo((n=>{const{option:t,option1:o,item:i,i:r,children:l,style:a,box:c}=n;let[s,d]=e.useState(t[0].Id);console.log(s);return e.createElement("div",{className:c?D.container1:D.container},e.createElement("ul",{className:a?D.header1:D.header},t.map(((n,t)=>e.createElement("li",{key:n.Id,className:[D.title,n.Id===s?D.active:""].join(" "),onClick:()=>{return e=n.Id,d(e),void console.log(s);var e}},n.title)))),e.createElement("div",{className:D.main},t.map(((n,t)=>{if(n.Id===s)return e.createElement("div",null,n.component,l)}))))}));var F=".bigBox {\n  width: 400px;\n  height: 500px;\n  padding: 20px;\n  box-shadow: 1px 1px 15px 0px #b9abab;\n}\n.bigBox div {\n  margin-bottom: 20px;\n  background-color: #f0f0f0;\n}\n.bigBox h1 {\n  margin-bottom: 20px;\n  text-align: center;\n}\n.bigBox .top {\n  width: 100%;\n  height: 100px;\n  font-weight: 600;\n  font-size: 30px;\n  text-align: center;\n}\n.bigBox .top span {\n  margin: 20px;\n  line-height: 100px;\n}\n.bigBox .center {\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  width: 100%;\n  height: 100px;\n}\n.bigBox .center button {\n  --color: #560bad;\n  position: relative;\n  z-index: 1;\n  display: inline-block;\n  width: 8em;\n  height: 2.6em;\n  margin: 20px;\n  overflow: hidden;\n  color: var(--color);\n  font-weight: 500;\n  font-size: 17px;\n  font-family: inherit;\n  line-height: 2em;\n  border: 2px solid var(--color);\n  border-radius: 6px;\n  transition: color 0.5s;\n}\n.bigBox .center button:before {\n  position: absolute;\n  z-index: -1;\n  width: 200px;\n  height: 150px;\n  background: var(--color);\n  border-radius: 50%;\n  content: '';\n}\n.bigBox .center button:hover {\n  color: #fff;\n}\n.bigBox .center button:before {\n  top: 100%;\n  left: 100%;\n  transition: all 0.7s;\n}\n.bigBox .center button:hover:before {\n  top: -30px;\n  left: -30px;\n}\n.bigBox .center button:active:before {\n  background: #3a0ca3;\n  transition: background 0s;\n}\n.bigBox .footer {\n  width: 100%;\n  max-height: 200px;\n  overflow: scroll;\n}\n.bigBox .footer p {\n  display: flex;\n  justify-content: space-around;\n  margin: 10px;\n  padding: 10px 5px;\n  border-bottom: 1px solid #dcd8d8;\n}\n",U=".container {\n  margin-left: 20px;\n  background-color: #e8f3fe;\n}\n.container .title {\n  font-size: 18px;\n  font-weight: 600;\n  width: 100%;\n  height: 30px;\n  margin-bottom: 10px;\n  display: flex;\n  align-items: center;\n}\n";const A=e.memo((({options:n})=>{const[t,o]=e.useState(!1);return e.createElement("div",{className:U.container},e.createElement("div",{onClick:()=>{o(!t)},className:U.title},n.icon,n.name),t&&n.children&&n.children.map((n=>e.createElement(A,{key:n.id,options:n}))))}));n.Alert=function(n){let{isClose:t,type:i,children:r,handleClose:l}=n,[a,c]=e.useState(t);i||(i="info");let s=[o.alertbox,o[i]];return e.createElement("div",{style:{display:a?"none":"block"},className:s.join(" ")},e.createElement("div",{className:o.mytitle},e.createElement("p",null,i),e.createElement("span",{onClick:()=>(c(!t),void(l&&l())),style:{cursor:"pointer"}},"×")),e.createElement("div",{className:o.content},r))},n.Aside=p,n.BackTime=({data:n})=>{console.log(+new Date);let t=e.useRef(),o=+new Date(n)||+new Date(new Date(+new Date+864e5).toLocaleDateString()),r=+new Date,[l,a]=e.useState(0),c=Math.floor((o-r)/1e3),s=Math.floor(c/60%60),d=Math.floor(c/60/60),p=Math.floor((o-r)/1e3%60);return clearInterval(t.current),t.current=setInterval((()=>{a(l+1)}),1e3),console.log(l),e.createElement("div",{className:i.Bigbox},e.createElement("p",null,"倒计时"),e.createElement("div",{className:i.box},e.createElement("p",null,d<10?"0"+d:d," 时"),e.createElement("p",null,s<10?"0"+s:s," 分"),e.createElement("p",null,p<10?"0"+p:p," 秒")))},n.BackToTop=r,n.Badge=a,n.Button=t,n.Collapse=n=>{const{height:t,options:o,state:i}=n;let[r,l]=e.useState(!1),[a,s]=e.useState(0),[d,p]=e.useState(0),h=e.useRef([]);return e.createElement("div",{className:c.container},o.map(((n,o)=>e.createElement(e.Fragment,null,e.createElement("div",{className:c.title,onClick:()=>((n,e)=>{if(s(n),n===a&&(l(!r),console.log(r)),!i){if(""==h.current[e].style.height)return h.current[e].style.height=t+"px",void console.log(h.current[e]?.style.height);h.current[e].style.height===t+"px"&&(console.log(123),h.current[e].style.height="",console.log(h.current[e]?.style.height))}i&&p(e)})(n.key,o),key:n.key},n.title),e.createElement("div",{className:c.content,ref:n=>{h.current[o]=n},style:i?{height:o==d?t+"px":""}:void 0},n.children)))))},n.Container=s,n.Divider=x,n.Footer=m,n.Header=d,n.InfiniteScroll=b,n.Input=({widths:n,size:t,placeHolder:o,btnhWord:i,onBtnSearch:r,headerText:l,clearIcon:a})=>{let[c,s]=e.useState(!1),[d,p]=e.useState(!1),h=e.useRef();return e.createElement("div",{className:g.wrapper,style:{width:n||"280px",borderColor:c||d?"rgb(64,150,255)":"rgb(217,217,217)",fontSize:t||"16px"},onMouseEnter:()=>{p(!0)},onMouseLeave:()=>{p(!1)}},e.createElement("div",{style:{paddingRight:"5px",display:l?"block":"none"}},l),e.createElement("input",{type:"text",ref:h,onFocus:()=>{s(!0)},onBlur:()=>{s(!1)},placeholder:o||"",style:{fontSize:t||"16px"}}),e.createElement("div",{style:{display:a?"block":"none",fontSize:t||"16px"},onClick:()=>{h.current.value=""},className:g.clear},"×"),e.createElement("button",{className:g.button,onClick:()=>{r&&r(l?"headerText"+h.current.value:h.current.value)},style:{fontSize:t||"16px"}},i||"搜索"))},n.InputNumber=w,n.Link=k,n.Loading=E,n.Main=h,n.Message=C,n.MessageBox=_,n.Notification=z,n.Popover=B,n.Progress=T,n.Rate=({totalScore:n,score:t,text:o,children:i,readonly:r})=>{let[l,a]=e.useState(t||1),[c,s]=e.useState(l),d=new Array(n).fill(i||"⚝");return e.createElement("div",{className:I.wrapper},e.createElement("div",{style:{display:o?"block":"none"}},"评分:",c),e.createElement("ul",{className:I.rateList},d.map(((n,t)=>e.createElement("li",{key:t,className:c>=t+1?I.selectChoice:"",onMouseEnter:()=>{!function(n){r||s(n+1)}(t)},onMouseLeave:()=>{r||s(l)},onClick:()=>{!function(n){r||a(n+1)}(t)}},n)))))},n.Select=W,n.Switch=({value:n,activeColor:t,negativeColor:o,activeWord:i,negativeWord:r,activeWordColor:l,changeHandle:a,disable:c})=>{let[s,d]=e.useState(n),[p,h]=e.useState(c||!1);return e.createElement("div",{className:H.box},e.createElement("span",{className:H.activeWord,style:{color:s?l||"skyblue":""}},i),e.createElement("div",{className:H.wrapper,onClick:()=>{p||(d(!s),a&&a(!s))},style:{backgroundColor:s?t||"green":o||"red",opacity:p?.5:1,cursor:p?"not-allowed":""}},e.createElement("div",{className:H.inner,style:{left:s?"3px":"21px"}})),e.createElement("span",{className:H.negativeWord,style:{color:s?"":l||"skyblue"}},r))},n.Table=R,n.Tabs=P,n.Time=({handler:n,resetHandle:t,WatchTime:o,width:i,height:r})=>{let[l,a]=e.useState(0),[c,s]=e.useState(!0),d=e.useRef(),[p,h]=e.useState([]),m=e.useMemo((()=>Math.trunc(l/1e3%60)),[l]),u=e.useMemo((()=>Math.trunc(l/1e3/60)),[l]),x=e.useMemo((()=>Math.trunc(l/10%100)),[l]);return e.createElement("div",{className:F.bigBox,style:{width:i||"400px",height:r||"500px"}},e.createElement("h1",null,"秒表"),e.createElement("div",{className:F.top},e.createElement("span",{className:F.min},u<10?"0"+u:u),":",e.createElement("span",{className:F.sec},m<10?"0"+m:m),":",e.createElement("span",{className:F.msec},x<10?"0"+x:x)),e.createElement("div",{className:F.center},e.createElement("button",{onClick:()=>{s(!c),c?d.current=setInterval((()=>{a((n=>n+16.7))}),16.7):clearInterval(d.current),n(c)}},c?"开始":"结束"),e.createElement("button",{onClick:()=>{let n=[...p];n.push(`${u<10?"0"+u:u}:${m<10?"0"+m:m}:${x<10?"0"+x:x}`),h(n),o(p),console.log(p)},disabled:c},"分段"),e.createElement("button",{onClick:()=>{clearInterval(d.current),a(0),h([]),s(!0),t&&t()}},"重置")),e.createElement("div",{className:F.footer},p.map(((n,t)=>e.createElement("p",{key:t},e.createElement("span",null,"第",t+1,"段"),e.createElement("span",null,"时间：",n))))))},n.Tree=({data:n})=>e.createElement("div",null,n.map((n=>e.createElement(A,{key:n.id,options:n}))))}));
