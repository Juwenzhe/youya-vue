(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-707e7cb6"],{"1af6":function(t,n,e){var a=e("63b6");a(a.S,"Array",{isArray:e("9003")})},"20fd":function(t,n,e){"use strict";var a=e("d9f6"),i=e("aebd");t.exports=function(t,n,e){n in t?a.f(t,n,i(0,e)):t[n]=e}},"45f0":function(t,n,e){"use strict";var a=e("cf54"),i=e.n(a);i.a},"549b":function(t,n,e){"use strict";var a=e("d864"),i=e("63b6"),r=e("241e"),o=e("b0dc"),s=e("3702"),c=e("b447"),u=e("20fd"),f=e("7cd6");i(i.S+i.F*!e("4ee1")((function(t){Array.from(t)})),"Array",{from:function(t){var n,e,i,d,l=r(t),p="function"==typeof this?this:Array,h=arguments.length,v=h>1?arguments[1]:void 0,b=void 0!==v,g=0,m=f(l);if(b&&(v=a(v,h>2?arguments[2]:void 0,2)),void 0==m||p==Array&&s(m))for(n=c(l.length),e=new p(n);n>g;g++)u(e,g,b?v(l[g],g):l[g]);else for(d=m.call(l),e=new p;!(i=d.next()).done;g++)u(e,g,b?o(d,v,[i.value,g],!0):i.value);return e.length=g,e}})},"54a1":function(t,n,e){e("6c1c"),e("1654"),t.exports=e("95d5")},"75fc":function(t,n,e){"use strict";var a=e("a745"),i=e.n(a);function r(t){if(i()(t)){for(var n=0,e=new Array(t.length);n<t.length;n++)e[n]=t[n];return e}}var o=e("774e"),s=e.n(o),c=e("c8bb"),u=e.n(c);function f(t){if(u()(Object(t))||"[object Arguments]"===Object.prototype.toString.call(t))return s()(t)}function d(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function l(t){return r(t)||f(t)||d()}e.d(n,"a",(function(){return l}))},"774e":function(t,n,e){t.exports=e("d2d5")},9003:function(t,n,e){var a=e("6b4c");t.exports=Array.isArray||function(t){return"Array"==a(t)}},"95d5":function(t,n,e){var a=e("40c3"),i=e("5168")("iterator"),r=e("481b");t.exports=e("584a").isIterable=function(t){var n=Object(t);return void 0!==n[i]||"@@iterator"in n||r.hasOwnProperty(a(n))}},a745:function(t,n,e){t.exports=e("f410")},ac43:function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"plr-15 pt-10"},[e("div",{staticClass:"mb-10"},[e("van-swipe",{attrs:{autoplay:3e3,"show-indicators":!1}},t._l(t.banner,(function(t,n){return e("van-swipe-item",{key:n},[e("router-link",{attrs:{to:"video"}},[e("img",{attrs:{src:t.image,width:"100%",alt:""}})])],1)})),1)],1),e("van-list",{attrs:{finished:t.finished,"finished-text":"没有更多了"},on:{load:t.onLoad},model:{value:t.loading,callback:function(n){t.loading=n},expression:"loading"}},t._l(t.list,(function(n,a){return e("router-link",{key:a,attrs:{to:{name:"branch_detail",params:{id:n.id}}}},[e("div",{staticClass:"article-item"},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:n.image,expression:"item.image"}],attrs:{alt:""}}),e("div",[e("div",{staticClass:"fz-15 c3 text-hide2"},[t._v(t._s(n.title))]),e("div",{staticClass:"fz-11 c9 text-hide"},[t._v(t._s(n.subtitle))])])])])})),1)],1)},i=[],r=e("75fc"),o=(e("96cf"),e("3b8d")),s=(e("96eb"),{components:{},props:{},data:function(){return{banner:[],page:1,list:[],loading:!1,finished:!1}},watch:{},computed:{},methods:{getList:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){var n,e,a,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.$toast.loading({message:"加载中..."}),t.next=3,axios.get("/branch?page=".concat(this.page++));case 3:n=t.sent,e=n.code,a=n.data,i=n.messege,0==e?(this.$toast.clear(),this.list=[].concat(Object(r["a"])(this.list),Object(r["a"])(a.data)),this.loading=!1,this.finished=!0):this.$toast.fail(i);case 8:case"end":return t.stop()}}),t,this)})));function n(){return t.apply(this,arguments)}return n}(),onLoad:function(){}},created:function(){var t=this;axios.get("/branch/banner").then((function(n){0==n.code?t.banner=n.data:t.$toast.fail(n.messege)})),this.getList()},mounted:function(){}}),c=s,u=(e("45f0"),e("2877")),f=Object(u["a"])(c,a,i,!1,null,"5c345a70",null);n["default"]=f.exports},c8bb:function(t,n,e){t.exports=e("54a1")},cf54:function(t,n,e){},d2d5:function(t,n,e){e("1654"),e("549b"),t.exports=e("584a").Array.from},f410:function(t,n,e){e("1af6"),t.exports=e("584a").Array.isArray}}]);
//# sourceMappingURL=chunk-707e7cb6.a15511d6.js.map