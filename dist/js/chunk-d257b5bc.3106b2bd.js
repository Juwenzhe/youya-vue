(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d257b5bc"],{"1f98":function(e,t,n){"use strict";var r=n("f425"),a=RegExp.prototype.exec,o=String.prototype.replace,i=a,c="lastIndex",s=function(){var e=/a/,t=/b*/g;return a.call(e,"a"),a.call(t,"a"),0!==e[c]||0!==t[c]}(),u=void 0!==/()??/.exec("")[1],l=s||u;l&&(i=function(e){var t,n,i,l,f=this;return u&&(n=new RegExp("^"+f.source+"$(?!\\s)",r.call(f))),s&&(t=f[c]),i=a.call(f,e),s&&i&&(f[c]=f.global?i.index+i[0].length:t),u&&i&&i.length>1&&o.call(i[0],n,(function(){for(l=1;l<arguments.length-2;l++)void 0===arguments[l]&&(i[l]=void 0)})),i}),e.exports=i},"2f03":function(e,t,n){var r=n("c481"),a=n("f01a");e.exports=function(e){return function(t,n){var o,i,c=String(a(t)),s=r(n),u=c.length;return s<0||s>=u?e?"":void 0:(o=c.charCodeAt(s),o<55296||o>56319||s+1===u||(i=c.charCodeAt(s+1))<56320||i>57343?e?c.charAt(s):o:e?c.slice(s,s+2):i-56320+(o-55296<<10)+65536)}}},"34a3":function(e,t,n){"use strict";var r=n("a013"),a=n("db4b"),o=n("b146"),i=n("c481"),c=n("b0f4"),s=n("35dd"),u=Math.max,l=Math.min,f=Math.floor,p=/\$([$&`']|\d\d?|<[^>]*>)/g,d=/\$([$&`']|\d\d?)/g,h=function(e){return void 0===e?e:String(e)};n("629c")("replace",2,(function(e,t,n,v){return[function(r,a){var o=e(this),i=void 0==r?void 0:r[t];return void 0!==i?i.call(r,o,a):n.call(String(o),r,a)},function(e,t){var a=v(n,e,this,t);if(a.done)return a.value;var f=r(e),p=String(this),d="function"===typeof t;d||(t=String(t));var b=f.global;if(b){var x=f.unicode;f.lastIndex=0}var m=[];while(1){var y=s(f,p);if(null===y)break;if(m.push(y),!b)break;var w=String(y[0]);""===w&&(f.lastIndex=c(p,o(f.lastIndex),x))}for(var k="",$=0,S=0;S<m.length;S++){y=m[S];for(var R=String(y[0]),E=u(l(i(y.index),p.length),0),C=[],_=1;_<y.length;_++)C.push(h(y[_]));var A=y.groups;if(d){var j=[R].concat(C,E,p);void 0!==A&&j.push(A);var I=String(t.apply(void 0,j))}else I=g(R,p,E,C,A,t);E>=$&&(k+=p.slice($,E)+I,$=E+R.length)}return k+p.slice($)}];function g(e,t,r,o,i,c){var s=r+e.length,u=o.length,l=d;return void 0!==i&&(i=a(i),l=p),n.call(c,l,(function(n,a){var c;switch(a.charAt(0)){case"$":return"$";case"&":return e;case"`":return t.slice(0,r);case"'":return t.slice(s);case"<":c=i[a.slice(1,-1)];break;default:var l=+a;if(0===l)return n;if(l>u){var p=f(l/10);return 0===p?n:p<=u?void 0===o[p-1]?a.charAt(1):o[p-1]+a.charAt(1):n}c=o[l-1]}return void 0===c?"":c}))}}))},"35dd":function(e,t,n){"use strict";var r=n("4819"),a=RegExp.prototype.exec;e.exports=function(e,t){var n=e.exec;if("function"===typeof n){var o=n.call(e,t);if("object"!==typeof o)throw new TypeError("RegExp exec method returned something other than an Object or null");return o}if("RegExp"!==r(e))throw new TypeError("RegExp#exec called on incompatible receiver");return a.call(e,t)}},"3a59":function(e,t,n){"use strict";var r=n("1f98");n("b2f5")({target:"RegExp",proto:!0,forced:r!==/./.exec},{exec:r})},5172:function(e,t,n){"use strict";var r=n("87fa"),a=n.n(r);a.a},"629c":function(e,t,n){"use strict";n("3a59");var r=n("e5ef"),a=n("743d"),o=n("b6f1"),i=n("f01a"),c=n("8b37"),s=n("1f98"),u=c("species"),l=!o((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),f=function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var n="ab".split(e);return 2===n.length&&"a"===n[0]&&"b"===n[1]}();e.exports=function(e,t,n){var p=c(e),d=!o((function(){var t={};return t[p]=function(){return 7},7!=""[e](t)})),h=d?!o((function(){var t=!1,n=/a/;return n.exec=function(){return t=!0,null},"split"===e&&(n.constructor={},n.constructor[u]=function(){return n}),n[p](""),!t})):void 0;if(!d||!h||"replace"===e&&!l||"split"===e&&!f){var v=/./[p],g=n(i,p,""[e],(function(e,t,n,r,a){return t.exec===s?d&&!a?{done:!0,value:v.call(t,n,r)}:{done:!0,value:e.call(n,t,r)}:{done:!1}})),b=g[0],x=g[1];r(String.prototype,e,b),a(RegExp.prototype,p,2==t?function(e,t){return x.call(e,this,t)}:function(e){return x.call(e,this)})}}},7364:function(e,t,n){var r=n("ddf7").f,a=Function.prototype,o=/^\s*function ([^ (]*)/,i="name";i in a||n("dad2")&&r(a,i,{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(e){return""}}})},"87fa":function(e,t,n){},"886d":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page"},[n("h1",{staticClass:"fz-18 c3 fw-700"},[e._v("为了更好的体验，请先验证身份")]),n("van-cell-group",{attrs:{border:!1}},[n("van-field",{attrs:{placeholder:"请输入您的真实姓名"},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),n("van-field",{attrs:{disabled:!0,placeholder:""},model:{value:e.phone,callback:function(t){e.phone=t},expression:"phone"}}),n("van-field",{attrs:{center:"",type:"number",clearable:"",placeholder:"请输入验证码"},model:{value:e.code,callback:function(t){e.code=t},expression:"code"}},[n("van-button",{attrs:{slot:"button",size:"small",disabled:e.disabled,type:"primary"},on:{click:e.getSMS},slot:"button"},[e.disabled?e._e():n("span",[e._v("获取验证码")]),e.disabled?n("van-count-down",{attrs:{format:"ss",time:e.time},on:{finish:e.reset}}):e._e()],1)],1)],1),n("footer",{staticClass:"footer-bar flex flex-center flex-align-center"},[n("div",{staticClass:"btn-youya",on:{click:e.confirm}},[e._v("确认")])])],1)},a=[],o=(n("7364"),n("63ff"),n("ad3e")),i=n("f98f"),c={components:{},props:{},data:function(){return{name:"",phone:"",code:"",disabled:!1,time:6e4}},watch:{},computed:{},methods:{getSMS:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){var t,n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t=i["a"].trim(this.phone),i["a"].checkPhone(t)){e.next=4;break}return this.$toast("手机号码输入有误"),e.abrupt("return");case 4:return this.disabled=!0,e.next=7,axios.post("/user/verify-sms",{phone:this.phone});case 7:n=e.sent,n.code,r=n.data,n.messega,console.log(r),this.time=6e4;case 13:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),confirm:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){var t,n,r,a,o,c,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t=i["a"].trim(this.name),n=i["a"].trim(this.code),r=i["a"].trim(this.phone),t){e.next=6;break}return this.$toast("请输入真实姓名"),e.abrupt("return");case 6:if(n){e.next=9;break}return this.$toast("请输入验证码"),e.abrupt("return");case 9:if(i["a"].checkPhone(r)){e.next=12;break}return this.$toast("手机号码输入有误"),e.abrupt("return");case 12:return e.next=14,axios.post("/user/verify",{phone:r,name:t,code:n});case 14:a=e.sent,o=a.code,c=a.data,s=a.message,0==o?(console.log(c),console.log(this.$route.query),this.$router.push({name:this.$route.query.path,params:{id:this.$route.query.id}})):this.$toast(s);case 19:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),reset:function(){this.disabled=!1}},created:function(){var e=JSON.parse(localStorage.getItem("userinfo"));this.phone=e.phone},mounted:function(){}},s=c,u=(n("5172"),n("6691")),l=Object(u["a"])(s,r,a,!1,null,null,null);t["default"]=l.exports},b0f4:function(e,t,n){"use strict";var r=n("2f03")(!0);e.exports=function(e,t,n){return t+(n?r(e,t).length:1)}},f425:function(e,t,n){"use strict";var r=n("a013");e.exports=function(){var e=r(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},f98f:function(e,t,n){"use strict";n("34a3");t["a"]={trim:function(e){return e.replace(/^\s*|\s*$/g,"")},checkPhone:function(e){return/^1[3456789]\d{9}$/.test(e)}}}}]);
//# sourceMappingURL=chunk-d257b5bc.3106b2bd.js.map