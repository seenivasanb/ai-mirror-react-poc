"use strict";(self.webpackChunkai_mirror_react_poc=self.webpackChunkai_mirror_react_poc||[]).push([[846],{25:(e,A,n)=>{n.d(A,{U:()=>_,B:()=>N});var t=n(294),r=n(762);const o=function(){var e=(0,t.useCallback)((function(e){alert(JSON.stringify(e,null,2))}),[]);return t.createElement(r.Ur,{formName:"login-form",onSubmit:e,formFields:[{id:"username",name:"username",className:"textbox",label:"Full Name",type:"text",rules:{required:"Required"}},{id:"password",name:"password",className:"textbox",label:"Password",type:"password",rules:{required:"Required"}}],submitButtonClassName:"Login Me"})};function a(e,A){(null==A||A>e.length)&&(A=e.length);for(var n=0,t=new Array(A);n<A;n++)t[n]=e[n];return t}function s(e,A){if(e){if("string"==typeof e)return a(e,A);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(e,A):void 0}}function l(e,A){return function(e){if(Array.isArray(e))return e}(e)||function(e,A){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var t,r,o=[],a=!0,s=!1;try{for(n=n.call(e);!(a=(t=n.next()).done)&&(o.push(t.value),!A||o.length!==A);a=!0);}catch(e){s=!0,r=e}finally{try{a||null==n.return||n.return()}finally{if(s)throw r}}return o}}(e,A)||s(e,A)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e){return function(e){if(Array.isArray(e))return a(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||s(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}const p=(0,t.memo)((function(e){var A,n=e.isVisible,r=e.value;console.log("Password Strength Tooltip"),console.log("passwordValue",r);var o=l((0,t.useState)(),2),a=o[0],s=o[1];(0,t.useEffect)((function(){d(r)}),[r]);var p=(0,t.useMemo)((function(){return{lowercase:"At least one lowercase",uppercase:"At least one uppercase",number:"At least one number",specialCharacter:"At least one special charater",minLength:"At least 8 charaters"}}),[]),d=function(e){var A=[];e.search(/[a-z]/)<0&&(A=[].concat(i(A),["lowercase"])),e.search(/[A-Z]/)<0&&(A=[].concat(i(A),["uppercase"])),e.search(/[0-9]/i)<0&&(A=[].concat(i(A),["number"])),e.search(/[!@#$%^&*]/i)<0&&(A=[].concat(i(A),["specialCharacter"])),e.length<8&&(A=[].concat(i(A),["minLength"])),A.length&&(A=[].concat(i(A),["valid"])),s(A)};return t.createElement("div",{className:"password-strength-popup ".concat(n?"show":"hidden")},t.createElement("p",{className:"password-strength-popup__title"},"Must contain:"),t.createElement("ul",null,null===(A=Object.keys(p))||void 0===A?void 0:A.map((function(e){var A=!(null!=a&&a.includes("valid")&&null!=a&&a.includes(e));return t.createElement("li",{key:e,className:A?"valid":"invalid"}," ",p[e])}))))}));var d=n(379),c=n.n(d),u=n(795),m=n.n(u),w=n(569),b=n.n(w),f=n(565),h=n.n(f),g=n(216),x=n.n(g),v=n(589),y=n.n(v),C=n(514),B={};B.styleTagTransform=y(),B.setAttributes=h(),B.insert=b().bind(null,"head"),B.domAPI=m(),B.insertStyleElement=x(),c()(C.Z,B),C.Z&&C.Z.locals&&C.Z.locals;const I=function(){var e=l((0,t.useState)(""),2),A=e[0],n=e[1],o=l((0,t.useState)(!1),2),a=o[0],s=o[1],i=(0,t.useCallback)((function(){s(!0)}),[a]),d=(0,t.useCallback)((function(){s(!1)}),[a]),c=(0,t.useCallback)((function(e){alert(JSON.stringify(e,null,2))}),[]),u=[{id:"name",name:"name",className:"textbox",label:"Full Name",type:"text",rules:{required:"Required"}},{id:"email",name:"email",className:"textbox",label:"Email Address",type:"email",rules:{required:"Required",pattern:{value:/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,message:"Invalid email address"}}},{id:"password",name:"password",className:"textbox",label:"Password",type:"password",onFocus:i,rules:{required:"Required",pattern:{value:/^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*\d)(?=.*[a-z]).{8,}$/,message:"Weak password"},onChange:function(e){n(e.target.value)},onBlur:d},children:t.createElement(p,{isVisible:a,value:A})},{id:"confirm-password",name:"confirm-password",className:"textbox",label:"Confirm Password",type:"password",rules:{required:"Required",validate:function(e){return e===A||"Passwords does not matched"}}}];return t.createElement("div",null,t.createElement(r.Ur,{formName:"register-form",onSubmit:c,formFields:u,submitButtonClassName:"Register Me"}))};var _=(0,t.memo)(o),N=(0,t.memo)(I)},846:(e,A,n)=>{n.r(A),n.d(A,{default:()=>x});var t=n(294),r=n(711),o=n(379),a=n.n(o),s=n(795),l=n.n(s),i=n(569),p=n.n(i),d=n(565),c=n.n(d),u=n(216),m=n.n(u),w=n(589),b=n.n(w),f=n(7),h={};h.styleTagTransform=b(),h.setAttributes=c(),h.insert=p().bind(null,"head"),h.domAPI=l(),h.insertStyleElement=m(),a()(f.Z,h),f.Z&&f.Z.locals&&f.Z.locals;var g=n(25);const x=(0,t.memo)((function(){return console.log("Login Page"),t.createElement("section",{className:"login max-w-lg"},t.createElement("h1",{className:"login__header"},"Login"),t.createElement("div",{className:"login__form"},t.createElement(g.U,null)),t.createElement(r.rU,{className:"login__link",to:"/register"},"Register"))}))},514:(e,A,n)=>{n.d(A,{Z:()=>s});var t=n(537),r=n.n(t),o=n(645),a=n.n(o)()(r());a.push([e.id,".password-strength-popup {\nposition: relative;\nwidth: -webkit-fit-content;\nwidth: -moz-fit-content;\nwidth: fit-content;\npadding-left: 1.5rem;\npadding-right: 1.5rem;\npadding-top: 1.25rem;\nfont-size: 0.875rem;\nline-height: 1.25rem        \n}\n    @media (min-width: 1280px) {.password-strength-popup {\nposition: absolute        \n}.password-strength-popup {\nleft: calc(100% + 30px)        \n}.password-strength-popup {\ntop: calc(calc(50% + 25px) * -1)        \n}.password-strength-popup {\nwidth: -webkit-fit-content;\nwidth: -moz-fit-content;\nwidth: fit-content        \n}.password-strength-popup {\nborder-width: 1px        \n}.password-strength-popup {\n--tw-border-opacity: 1;\nborder-color: rgb(203 213 225 / var(--tw-border-opacity))        \n}.password-strength-popup {\npadding: 1.25rem        \n}.password-strength-popup {\npadding-left: 1.5rem;\npadding-right: 1.5rem        \n}.password-strength-popup {\nfont-size: 0.875rem;\nline-height: 1.25rem        \n}.password-strength-popup {\n--tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);\n--tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);\nbox-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)        \n}.password-strength-popup {\n--tw-shadow-color: rgb(203 213 225 / 0.5);\n--tw-shadow: var(--tw-shadow-colored)        \n}        \n    }\n    .password-strength-popup__title {\nmargin-bottom: 0.5rem;\nfont-family: bold-font;\n-webkit-text-decoration-line: underline;\n        text-decoration-line: underline        \n}\n    .password-strength-popup .invalid {\n--tw-text-opacity: 1;\ncolor: rgb(239 68 68 / var(--tw-text-opacity))        \n}\n    .password-strength-popup .invalid::before {\nmargin-right: 0.25rem;\n--tw-content: '\\2716';\ncontent: var(--tw-content)        \n}\n    .password-strength-popup .valid {\n--tw-text-opacity: 1;\ncolor: rgb(34 197 94 / var(--tw-text-opacity))        \n}\n    .password-strength-popup .valid::before {\nmargin-right: 0.25rem;\n--tw-content: '\\2714';\ncontent: var(--tw-content)        \n}\n    .password-strength-popup::before, .password-strength-popup::after {\nposition: absolute;\nleft: -30px;\ntop: calc(50% - 6px);\ndisplay: none;\nborder-width: 12px;\nborder-left-width: 15px;\nborder-right-width: 15px;\n--tw-border-opacity: 1;\nborder-color: rgb(203 213 225 / var(--tw-border-opacity));\nborder-left-color: transparent;\nborder-top-color: transparent;\nborder-bottom-color: transparent;\n--tw-content: \"\";\ncontent: var(--tw-content)        \n}\n    @media (min-width: 1280px) {\n.password-strength-popup::before, .password-strength-popup::after {\ndisplay: block        \n}        \n}\n    .password-strength-popup::after {\nleft: -28px;\n--tw-border-opacity: 1;\nborder-color: rgb(255 255 255 / var(--tw-border-opacity));\nborder-left-color: transparent;\nborder-top-color: transparent;\nborder-bottom-color: transparent        \n}","",{version:3,sources:["<no source>","webpack://./src/forms/register-form/password-strength.css"],names:[],mappings:"AAAA;AAAA,mBAAA;AAAA,2BAAA;AAAA,wBAAA;AAAA,mBAAA;AAAA,qBAAA;AAAA,sBAAA;AAAA,qBAAA;AAAA,oBAAA;AAAA;CAAA;ICEI,4BDFJ;AAAA;CAAA;AAAA;CAAA;AAAA;CAAA;AAAA,2BAAA;AAAA,wBAAA;AAAA;CAAA;AAAA;CAAA;AAAA,uBAAA;AAAA;CAAA;AAAA;CAAA;AAAA,qBAAA;AAAA;CAAA;AAAA,oBAAA;AAAA;CAAA;AAAA,gFAAA;AAAA,oGAAA;AAAA;CAAA;AAAA,0CAAA;AAAA;CAAA;ICII;IDJJ;AAAA,sBAAA;AAAA,uBAAA;AAAA,wCAAA;QAAA;CAAA;IAAA;AAAA,qBAAA;AAAA;CAAA;IAAA;AAAA,sBAAA;AAAA,sBAAA;AAAA;CAAA;IAAA;AAAA,qBAAA;AAAA;CAAA;IAAA;AAAA,sBAAA;AAAA,sBAAA;AAAA;CAAA;IAAA;AAAA,mBAAA;AAAA,YAAA;AAAA,qBAAA;AAAA,cAAA;AAAA,mBAAA;AAAA,wBAAA;AAAA,yBAAA;AAAA,uBAAA;AAAA,0DAAA;AAAA,+BAAA;AAAA,8BAAA;AAAA,iCAAA;AAAA,iBAAA;AAAA;CAAA;IAAA;AAAA;AAAA;CAAA;CAAA;IAAA;AAAA,YAAA;AAAA,uBAAA;AAAA,0DAAA;AAAA,+BAAA;AAAA,8BAAA;AAAA;CAAA",sourcesContent:[null,".password-strength-popup {\n    @apply relative px-6 pt-5 text-sm w-fit;\n    @screen xl {\n        @apply absolute border border-slate-300 p-5 px-6 shadow-lg shadow-slate-300/50 text-sm left-[calc(100%+30px)] -top-[calc(50%+25px)] w-fit;        \n    }\n    &__title {\n        @apply font-family-bold mb-2 underline;\n    }\n    .invalid {\n        @apply before:content-['\\2716'] before:mr-1 text-red-500;\n    }\n    .valid {\n        @apply before:content-['\\2714'] before:mr-1 text-green-500\n    }\n    &::before,\n    &::after, {\n        @apply content-[\"\"] absolute -left-[30px] top-[calc(50%-6px)] border-[12px] border-x-[15px] border-slate-300 border-l-transparent border-t-transparent border-b-transparent hidden xl:block;\n    }\n    &::after {\n        @apply -left-[28px] border-white border-l-transparent border-t-transparent border-b-transparent;\n    }\n}"],sourceRoot:""}]);const s=a},7:(e,A,n)=>{n.d(A,{Z:()=>s});var t=n(537),r=n.n(t),o=n(645),a=n.n(o)()(r());a.push([e.id,".login {\n    display: flex;\n    flex-direction: column;\n    align-items: center\n}\n    .login__header {\n    margin-bottom: 2.5rem\n}\n    .login__form {\n    min-width: 100%\n}\n    @media (min-width: 768px) {\n    .login__form {\n        min-width: 500px\n    }\n}\n    .login__link {\n    margin-top: 2.5rem;\n    -webkit-text-decoration-line: underline;\n            text-decoration-line: underline;\n    text-underline-offset: 1px\n}","",{version:3,sources:["<no source>"],names:[],mappings:"AAAA;IAAA,cAAA;IAAA,uBAAA;IAAA;CAAA;IAAA;IAAA;CAAA;IAAA;IAAA;CAAA;IAAA;IAAA;QAAA;KAAA;CAAA;IAAA;IAAA,mBAAA;IAAA,wCAAA;YAAA,gCAAA;IAAA;CAAA",sourceRoot:""}]);const s=a}}]);
//# sourceMappingURL=846.bundle.js.map