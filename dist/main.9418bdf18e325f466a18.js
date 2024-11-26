(()=>{"use strict";var e={208:(e,t,n)=>{n.d(t,{A:()=>c});var r=n(601),o=n.n(r),s=n(314),a=n.n(s)()(o());a.push([e.id,'body {\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #e0e0e0;\n  font-family: sans-serif;\n  margin: 0;\n}\n\n.calculator {\n  width: 550px;\n  border-radius: 10px;\n  background-color: #585858;\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);\n}\n\n.display {\n  width: 100%;\n  height: 80px;\n  border: none;\n  box-sizing: border-box;\n  padding: 15px;\n  font-size: 36px;\n  background-color: #4a4a4a;\n  color: #fff;\n  text-align: right;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n}\n\n.keys {\n  width: 100%;\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-gap: 1px;\n  background-color: #2e2e2e;\n  border-bottom-right-radius: 10px;\n  border-bottom-left-radius: 10px;\n}\n\nbutton {\n  height: 50px;\n  font-size: 1rem;\n  border: none;\n  background-color: #505050;\n  color: white;\n  transition: background-color 0.2s;\n}\n\nbutton:hover {\n  cursor: pointer;\n  background-color: #666;\n}\n\nbutton.operator {\n  background-color: #f1a33c;\n}\n\nbutton.operator:hover {\n  background-color: #f09722;\n}\n\nbutton#result {\n  background-color: #f1a33c;\n  border-bottom-right-radius: 10px;\n}\nbutton#rad {\n  border-bottom-left-radius: 10px;\n}\n.key-wide {\n  grid-column: span 2;\n}\n\n.theme-toggle {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  grid-column: span 2;\n  background-color: #505050;\n}\n.theme-toggle input {\n  display: none;\n}\n\n.toggle-label {\n  width: 60px;\n  height: 30px;\n  background-color: #8d8383;\n  border-radius: 30px;\n  position: relative;\n  cursor: pointer;\n  transition: background-color 0.2s;\n}\n\n.toggle-label::after {\n  content: "";\n  width: 26px;\n  height: 26px;\n  background-color: #fff;\n  border-radius: 50%;\n  position: absolute;\n  left: 2px;\n  bottom: 2px;\n  transition: transform 0.2s;\n}\n.theme-toggle {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.toggle-text {\n  margin-top: 2px;\n  font-size: 0.8rem;\n  color: #fff;\n}\n\n#theme-toggle:checked + .toggle-label {\n  background-color: #f1a33c;\n}\n\n#theme-toggle:checked + .toggle-label::after {\n  transform: translateX(30px);\n}\n\n.dark-theme {\n  background-color: #121212;\n}\n\n.dark-theme .calculator {\n  background-color: #1e1e1e;\n}\n\n.dark-theme .display {\n  background-color: #424242;\n}\n\n.dark-theme button {\n  background-color: #4a4a4a;\n  color: #fff;\n}\n\n.dark-theme button.clear_btn:hover {\n  background-color: #f42a2a;\n}\n\n.dark-theme button.operator {\n  background-color: #f1a33c;\n}\n\n.dark-theme button.operator:hover {\n  background-color: #f09722;\n}\n',""]);const c=a},314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,s){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var i=this[c][0];null!=i&&(a[i]=!0)}for(var l=0;l<e.length;l++){var u=[].concat(e[l]);r&&a[u[0]]||(void 0!==s&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=s),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),t.push(u))}},t}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var s={},a=[],c=0;c<e.length;c++){var i=e[c],l=r.base?i[0]+r.base:i[0],u=s[l]||0,d="".concat(l," ").concat(u);s[l]=u+1;var h=n(d),p={css:i[1],media:i[2],sourceMap:i[3],supports:i[4],layer:i[5]};if(-1!==h)t[h].references++,t[h].updater(p);else{var f=o(p,r);r.byIndex=c,t.splice(c,0,{identifier:d,updater:f,references:1})}a.push(d)}return a}function o(e,t){var n=t.domAPI(t);n.update(e);return function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var s=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<s.length;a++){var c=n(s[a]);t[c].references--}for(var i=r(e,o),l=0;l<s.length;l++){var u=n(s[l]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}s=i}}},659:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var s=n.sourceMap;s&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var s=t[r]={id:r,exports:{}};return e[r](s,s.exports,n),s.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0;var r=n(72),o=n.n(r),s=n(825),a=n.n(s),c=n(659),i=n.n(c),l=n(56),u=n.n(l),d=n(540),h=n.n(d),p=n(113),f=n.n(p),g=n(208),m={};m.styleTagTransform=f(),m.setAttributes=u(),m.insert=i().bind(null,"head"),m.domAPI=a(),m.insertStyleElement=h();o()(g.A,m);g.A&&g.A.locals&&g.A.locals;class b{execute(){throw new Error("Метод execute() должен быть реализован!")}}class x extends b{constructor(e,t){super(),this.calculator=e,this.number=t}execute(){this.calculator.appendNumber(this.number)}}class v extends b{constructor(e,t){super(),this.calculator=e,this.operator=t}execute(){this.calculator.setOperation(this.operator)}}class y extends b{constructor(e){super(),this.calculator=e}execute(){this.calculator.isSecondValueInput?this.calculator.secondValue.includes(".")||(this.calculator.secondValue+="."):this.calculator.firstValue.includes(".")||(this.calculator.firstValue+=".")}}class V extends b{constructor(e){super(),this.calculator=e}execute(){return this.calculator.processPercentage()}}class k extends b{constructor(e){super(),this.calculator=e}execute(){return this.calculator.toggleSign()}}class w extends b{constructor(e){super(),this.calculator=e}execute(){return this.calculator.calculate()}}class S extends b{constructor(e,t){super(),this.body=e,this.themeToggle=t}execute(){this.themeToggle.checked?(this.body.classList.add("dark-theme"),localStorage.setItem("theme","dark")):(this.body.classList.remove("dark-theme"),localStorage.setItem("theme","light"))}}const E=new class{constructor(){this.firstValue="",this.secondValue="",this.currentOperator="",this.result=null,this.isSecondValueInput=!1,this.finish=!1}appendNumber(e){e=e.toString(),this.finish?(this.firstValue=e,this.secondValue="",this.currentOperator="",this.result=null,this.isSecondValueInput=!1,this.finish=!1):this.isSecondValueInput?this.secondValue+=e:this.firstValue+=e}setOperation(e){this.currentOperator&&this.secondValue&&this.calculate(),this.currentOperator=e,this.isSecondValueInput=!0,this.finish=!1}calculate(){if(!this.currentOperator){if(this.firstValue)return parseFloat(this.firstValue);throw new Error("Operation not supported")}const e=parseFloat(this.firstValue),t=parseFloat(this.secondValue||"0");if(isNaN(e)||isNaN(t))throw new Error("Incorrect data for calculation");switch(this.currentOperator){case"+":this.result=e+t;break;case"-":this.result=e-t;break;case"×":this.result=e*t;break;case"÷":this.result=0===t?"Error":e/t;break;default:throw new Error(`Operation ${this.currentOperator} not supported`)}return this.firstValue=this.result.toString(),this.secondValue="",this.currentOperator="",this.isSecondValueInput=!1,this.finish=!0,this.result}processPercentage(){if(this.secondValue){const e=parseFloat(this.firstValue||"0"),t=parseFloat(this.secondValue||"0");["+","-"].includes(this.currentOperator)?this.secondValue=(e*t/100).toString():["×","÷"].includes(this.currentOperator)&&(this.secondValue=(t/100).toString())}else this.firstValue&&(this.firstValue=(parseFloat(this.firstValue)/100).toString())}toggleSign(){this.isSecondValueInput?this.secondValue?this.secondValue=(-parseFloat(this.secondValue)).toString():this.secondValue="-0":this.firstValue?this.firstValue=(-parseFloat(this.firstValue)).toString():this.firstValue="-0"}reset(){this.firstValue="",this.secondValue="",this.currentOperator="",this.result=null,this.isSecondValueInput=!1}},I=new class{constructor(){this.history=[]}executeCommand(e){const t=e.execute();return this.history.push(e),console.log(this.history),t}},O=document.querySelector(".display");function C(e){O.value=e||"0"}document.querySelectorAll(".number").forEach((e=>{e.addEventListener("click",(()=>{const t=new x(E,e.textContent);I.executeCommand(t),C(E.isSecondValueInput?E.secondValue:E.firstValue)}))})),document.querySelectorAll(".operator").forEach((e=>{e.addEventListener("click",(()=>{try{const t=new v(E,e.textContent);I.executeCommand(t);C(E.firstValue)}catch(e){console.error("Ошибка при выборе операции:",e.message),C("Error")}}))})),document.getElementById("percent").addEventListener("click",(()=>{const e=new V(E);I.executeCommand(e);C(E.isSecondValueInput?E.secondValue:E.firstValue)})),document.getElementById("toggle-sign").addEventListener("click",(()=>{const e=new k(E);I.executeCommand(e);C(E.isSecondValueInput?E.secondValue:E.firstValue)})),document.getElementById("result").addEventListener("click",(()=>{try{const e=new w(E);C(I.executeCommand(e))}catch(e){console.error("Ошибка при вычислении:",e.message),C("Error")}})),document.getElementById("clear").addEventListener("click",(()=>{E.reset(),C()}));const L=document.getElementById("theme-toggle"),A=document.body;"dark"===localStorage.getItem("theme")&&(A.classList.add("dark-theme"),L.checked=!0),L.addEventListener("change",(()=>{const e=new S(A,L);I.executeCommand(e)})),commaButton.addEventListener("click",(()=>{const e=new y(E);I.executeCommand(e),C(E.isSecondValueInput?E.secondValue:E.firstValue)}))})();