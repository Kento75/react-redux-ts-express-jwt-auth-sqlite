!function(e){function t(t){for(var n,l,u=t[0],i=t[1],c=t[2],f=0,d=[];f<u.length;f++)l=u[f],o[l]&&d.push(o[l][0]),o[l]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);for(s&&s(t);d.length;)d.shift()();return a.push.apply(a,c||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,u=1;u<r.length;u++){var i=r[u];0!==o[i]&&(n=!1)}n&&(a.splice(t--,1),e=l(l.s=r[0]))}return e}var n={},o={1:0},a=[];function l(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,l),r.l=!0,r.exports}l.m=e,l.c=n,l.d=function(e,t,r){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(l.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)l.d(r,n,function(t){return e[t]}.bind(null,n));return r},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="";var u=window.webpackJsonp=window.webpackJsonp||[],i=u.push.bind(u);u.push=t,u=u.slice();for(var c=0;c<u.length;c++)t(u[c]);var s=i;a.push([408,0]),r()}({227:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(133),o=r(226),a=r(225),l=o.createLogger(),u=window&&window.REDUX_DEVTOOLS_EXTENSION_COMPOSE||n.compose,i=n.createStore(n.applyMiddleware(u(a),l));t.default=i},228:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(22);t.history=n.createBrowserHistory()},229:function(e,t,r){"use strict";var n=this&&this.__assign||Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},o=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&(r[n[o]]=e[n[o]])}return r};Object.defineProperty(t,"__esModule",{value:!0});var a=r(0),l=r(137);t.default=function(e){var t=e.component,r=o(e,["component"]);return a.createElement(l.Route,n({},r,{render:function(e){return localStorage.getItem("user")?a.createElement(t,n({},e)):a.createElement(l.Redirect,{to:{pathname:"/login",state:{from:e.location}}})}}))}},390:function(e,t,r){"use strict";var n=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])};return function(t,r){function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(t,"__esModule",{value:!0});var o=r(0),a=r(224),l=function(e){function t(t){var r=e.call(this,t)||this;return r.state={username:"",password:"",submitted:!1},r}return n(t,e),t.prototype.render=function(){return o.createElement("div",{className:"ui inverted vertical masthead center aligned segment"},o.createElement(a.Grid,{textAlign:"center",style:{minHeight:700},verticalAlign:"middle"},o.createElement(a.Grid.Column,{style:{maxWidth:450}},o.createElement(a.Header,{as:"h2",color:"teal",textAlign:"center"},o.createElement(a.Image,{src:"/assets/logo.png"})," Log-in to your account"),o.createElement("br",null),o.createElement(a.Form,{size:"large",name:"form",onSubmit:null},o.createElement(a.Segment,{stacked:!0},o.createElement(a.Form.Input,{fluid:!0,icon:"user",iconPosition:"left",placeholder:"User Name",name:"username",error:!1,value:"",onChange:null}),o.createElement(a.Form.Input,{fluid:!0,icon:"lock",iconPosition:"left",placeholder:"Password",type:"password",name:"password",error:!1,value:"",onChange:null}),o.createElement(a.Button,{color:"teal",fluid:!0,size:"large",disabled:!1,loading:!1},"Login"))))))},t}(o.Component);t.default=l},391:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0);t.default=function(){return n.createElement("div",null,"HomePage")}},393:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0),o=r(137),a=r(391),l=r(390),u=r(229),i=r(228);t.default=function(){return n.createElement(n.Fragment,null,n.createElement(o.Router,{history:i.history},n.createElement(n.Fragment,null,n.createElement(u.default,{exact:!0,path:"/",component:a.default}),n.createElement(o.Route,{path:"/login",component:l.default}),n.createElement(o.Redirect,{to:"/"}))))}},407:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r(406);var n=r(0),o=r(69),a=r(223);r(394);var l=r(393),u=r(227);o.render(n.createElement(a.Provider,{store:u.default},n.createElement(l.default,null)),document.getElementById("root"))},408:function(e,t,r){e.exports=r(407)}});