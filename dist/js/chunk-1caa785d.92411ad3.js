(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1caa785d"],{a381:function(t,s,a){},a74d:function(t,s,a){"use strict";var i=a("a381"),e=a.n(i);e.a},ba3e:function(t,s,a){"use strict";a.r(s);var i=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("van-swipe",{attrs:{autoplay:3e3}},t._l(t.images,(function(t,s){return a("van-swipe-item",{key:s},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t,expression:"image"}]})])})),1),t._m(0),a("div",{staticClass:"bar-10"}),t._m(1),a("div",{staticClass:"footer-bar plr-15 flex flex-align-center"},[a("router-link",{attrs:{to:"/"}},[a("div",{staticClass:"back-home"},[a("img",{attrs:{src:"/img/icon-home.png",alt:""}}),a("div",{staticClass:"fz-11 c9"},[t._v("首页")])])]),a("div",{staticClass:"btn-youya",on:{click:t.buying}},[t._v("立即购买")])],1),t._m(2),a("van-sku",{attrs:{sku:t.sku,goods:t.goods,"goods-id":t.goodsId,quota:t.quota,"hide-stock":t.sku.hide_stock},on:{"buy-clicked":t.onBuyClicked,"add-cart":t.onAddCartClicked},scopedSlots:t._u([{key:"sku-actions",fn:function(s){return[a("div",{staticClass:"van-sku-actions"},[a("van-button",{attrs:{square:"",size:"large",type:"danger"},on:{click:function(t){return s.skuEventBus.$emit("sku:buy")}}},[t._v("\n      加入购物车\n    ")])],1)]}}]),model:{value:t.show,callback:function(s){t.show=s},expression:"show"}})],1)},e=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"p-15 flex mb-10"},[a("div",{staticClass:"course-info"},[a("h2",{staticClass:"fz-17 c3 mb-5"},[t._v("五年美丽同行班五年美丽同行班五年美丽同行班")]),a("div",[a("span",{staticClass:"fz-15 text-price"},[t._v("¥99.00 ")]),a("span",{staticClass:"fz-12 c9 text-line"},[t._v("原价¥199.00")])])]),a("div",{staticClass:"course-share flex flex-align-start"},[a("div",{staticClass:"flex flex-column flex-jus flex-align-center"},[a("img",{attrs:{src:"/img/icon-wallet.png",alt:""}}),a("div",{staticClass:"fz-11 c9"},[t._v("分享获得")])]),a("div",{staticClass:"award-tips"},[t._v("46元奖励")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("div",{staticClass:"p-10 fz-15 c3"},[t._v("商品详情")]),a("div",{staticClass:"bar-1"})])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"side-btn"},[a("img",{staticClass:"mb-5",attrs:{src:"/img/btn-service.png",alt:""}}),a("img",{attrs:{src:"/img/btn-cart.png",alt:""}})])}],n={components:{},props:{},data:function(){return{images:["https://img.yzcdn.cn/vant/apple-1.jpg","https://img.yzcdn.cn/vant/apple-2.jpg"],show:!1,sku:{tree:[{k:"颜色",v:[{id:"30349",name:"红色",imgUrl:"https://img.yzcdn.cn/1.jpg"},{id:"1215",name:"蓝色",imgUrl:"https://img.yzcdn.cn/2.jpg"}],k_s:"s1"}],list:[{id:2259,price:100,s1:"1215",s2:"1193",s3:"0",stock_num:110}],price:"1.00",stock_num:227,collection_id:2261,none_sku:!1,hide_stock:!1},goodsId:1212,quota:5,goods:{title:"测试商品",picture:"https://img.yzcdn.cn/1.jpg"}}},watch:{},computed:{},methods:{buying:function(){this.show=!0},onBuyClicked:function(t){console.log(t),this.$router.push({path:"/goods/create_order"})},onAddCartClicked:function(){}},created:function(){},mounted:function(){}},c=n,o=(a("a74d"),a("6691")),l=Object(o["a"])(c,i,e,!1,null,"a3af774a",null);s["default"]=l.exports}}]);
//# sourceMappingURL=chunk-1caa785d.92411ad3.js.map