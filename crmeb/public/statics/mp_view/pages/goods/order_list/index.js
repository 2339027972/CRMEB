require('../common/vendor.js');(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/goods/order_list/index"],{"0db4":function(t,s,e){"use strict";e.r(s);var _=e("3a39"),u=e("c931");for(var n in u)["default"].indexOf(n)<0&&function(t){e.d(s,t,(function(){return u[t]}))}(n);e("cc6b");var a=e("f0c5"),p=Object(a["a"])(u["default"],_["b"],_["c"],!1,null,"364eccd6",null,!1,_["a"],void 0);s["default"]=p.exports},"3a39":function(t,s,e){"use strict";e.d(s,"b",(function(){return u})),e.d(s,"c",(function(){return n})),e.d(s,"a",(function(){return _}));var _={easyLoadimage:function(){return Promise.all([e.e("common/vendor"),e.e("components/easy-loadimage/easy-loadimage")]).then(e.bind(null,"9362"))}},u=function(){var t=this,s=t.$createElement,e=(t._self._c,t.$t("订单信息")),_=t.$t("消费订单"),u=t.$t("总消费"),n=t.$t("￥"),a=t.$t("全部"),p=t.$t("待付款"),i=t.$t("待发货"),r=t.$t("待收货"),l=t.$t("待评价"),o=t.$t("共"),y=t.$t("件商品，总金额"),d=t.$t("￥"),c=t.$t("查看详情"),h=t.__map(t.orderList,(function(s,e){var _=t.__get_orig(s),u=2==s.type?t.$t("砍价"):null,n=2!=s.type&&3==s.type?t.$t("拼团"):null,a=2!=s.type&&3!=s.type&&1==s.type?t.$t("秒杀"):null,p=2!=s.type&&3!=s.type&&1!=s.type&&4==s.type?t.$t("预售"):null,i=9==s._status._type?t.$t("线下付款,未支付"):null,r=9!=s._status._type&&0==s._status._type?t.$t("待付款"):null,l=9!=s._status._type&&0!=s._status._type&&1==s._status._type&&1==s.shipping_type?t.$t("待发货"):null,o=9!=s._status._type&&0!=s._status._type&&1==s._status._type&&1==s.shipping_type?s.refund.length:null,y=9!=s._status._type&&0!=s._status._type&&1==s._status._type&&1==s.shipping_type&&o&&s.is_all_refund?t.$t("退款中"):null,d=9!=s._status._type&&0!=s._status._type&&1==s._status._type&&1==s.shipping_type&&o&&!s.is_all_refund?t.$t("部分退款中"):null,c=9==s._status._type||0==s._status._type||1==s._status._type&&1==s.shipping_type||1!=s._status._type||2!=s.shipping_type?null:t.$t("待核销"),h=9==s._status._type||0==s._status._type||1==s._status._type&&1==s.shipping_type||1!=s._status._type||2!=s.shipping_type?null:s.refund.length,g=9!=s._status._type&&0!=s._status._type&&(1!=s._status._type||1!=s.shipping_type)&&1==s._status._type&&2==s.shipping_type&&h&&s.is_all_refund?t.$t("退款中"):null,f=9==s._status._type||0==s._status._type||1==s._status._type&&1==s.shipping_type||1!=s._status._type||2!=s.shipping_type||!h||s.is_all_refund?null:t.$t("部分退款中"),m=9==s._status._type||0==s._status._type||1==s._status._type&&1==s.shipping_type||1==s._status._type&&2==s.shipping_type||2!=s._status._type?null:t.$t("待收货"),$=9==s._status._type||0==s._status._type||1==s._status._type&&1==s.shipping_type||1==s._status._type&&2==s.shipping_type||2!=s._status._type?null:s.refund.length,v=9==s._status._type||0==s._status._type||1==s._status._type&&1==s.shipping_type||1==s._status._type&&2==s.shipping_type||2!=s._status._type||!$||!s.is_all_refund?null:t.$t("退款中"),L=9==s._status._type||0==s._status._type||1==s._status._type&&1==s.shipping_type||1==s._status._type&&2==s.shipping_type||2!=s._status._type||!$||s.is_all_refund?null:t.$t("部分退款中"),b=9==s._status._type||0==s._status._type||1==s._status._type&&1==s.shipping_type||1==s._status._type&&2==s.shipping_type||2==s._status._type||3!=s._status._type?null:t.$t("待评价"),O=9==s._status._type||0==s._status._type||1==s._status._type&&1==s.shipping_type||1==s._status._type&&2==s.shipping_type||2==s._status._type||3!=s._status._type?null:s.refund.length,D=9==s._status._type||0==s._status._type||1==s._status._type&&1==s.shipping_type||1==s._status._type&&2==s.shipping_type||2==s._status._type||3!=s._status._type||!O||!s.is_all_refund?null:t.$t("退款中"),I=9==s._status._type||0==s._status._type||1==s._status._type&&1==s.shipping_type||1==s._status._type&&2==s.shipping_type||2==s._status._type||3!=s._status._type||!O||s.is_all_refund?null:t.$t("部分退款中"),T=9==s._status._type||0==s._status._type||1==s._status._type&&1==s.shipping_type||1==s._status._type&&2==s.shipping_type||2==s._status._type||3==s._status._type||4!=s._status._type?null:t.$t("已完成"),S=9==s._status._type||0==s._status._type||1==s._status._type&&1==s.shipping_type||1==s._status._type&&2==s.shipping_type||2==s._status._type||3==s._status._type||4!=s._status._type?null:s.refund.length,P=9==s._status._type||0==s._status._type||1==s._status._type&&1==s.shipping_type||1==s._status._type&&2==s.shipping_type||2==s._status._type||3==s._status._type||4!=s._status._type||!S||!s.is_all_refund?null:t.$t("退款中"),x=9==s._status._type||0==s._status._type||1==s._status._type&&1==s.shipping_type||1==s._status._type&&2==s.shipping_type||2==s._status._type||3==s._status._type||4!=s._status._type||!S||s.is_all_refund?null:t.$t("部分退款中"),w=9==s._status._type||0==s._status._type||1==s._status._type&&1==s.shipping_type||1==s._status._type&&2==s.shipping_type||2==s._status._type||3==s._status._type||4==s._status._type||5!=s._status._type||0!=s.status?null:t.$t("未核销"),A=9==s._status._type||0==s._status._type||1==s._status._type&&1==s.shipping_type||1==s._status._type&&2==s.shipping_type||2==s._status._type||3==s._status._type||4==s._status._type||5!=s._status._type||0!=s.status?null:s.refund.length,C=9==s._status._type||0==s._status._type||1==s._status._type&&1==s.shipping_type||1==s._status._type&&2==s.shipping_type||2==s._status._type||3==s._status._type||4==s._status._type||5!=s._status._type||0!=s.status||!A||!s.is_all_refund?null:t.$t("退款中"),k=9==s._status._type||0==s._status._type||1==s._status._type&&1==s.shipping_type||1==s._status._type&&2==s.shipping_type||2==s._status._type||3==s._status._type||4==s._status._type||5!=s._status._type||0!=s.status||!A||s.is_all_refund?null:t.$t("部分退款中"),j=9==s._status._type||0==s._status._type||1==s._status._type&&1==s.shipping_type||1==s._status._type&&2==s.shipping_type||2==s._status._type||3==s._status._type||4==s._status._type||5==s._status._type&&0==s.status||-2!=s._status._type?null:t.$t("已退款"),F=t.__map(s.cartInfo,(function(e,_){var u=t.__get_orig(e),n=e.productInfo.attrInfo?t.$t("￥"):null,a=e.productInfo.attrInfo?null:t.$t("￥"),p=e.refund_num&&-2!=s._status._type?t.$t("件退款中"):null;return{$orig:u,m34:n,m35:a,m36:p}})),M=0==s._status._type||9==s._status._type?t.$t("取消订单"):null,z=0==s._status._type?t.$t("立即付款"):null,E=4==s._status._type?t.$t("删除订单"):null;return{$orig:_,m9:u,m10:n,m11:a,m12:p,m13:i,m14:r,m15:l,g0:o,m16:y,m17:d,m18:c,g1:h,m19:g,m20:f,m21:m,g2:$,m22:v,m23:L,m24:b,g3:O,m25:D,m26:I,m27:T,g4:S,m28:P,m29:x,m30:w,g5:A,m31:C,m32:k,m33:j,l0:F,m40:M,m41:z,m42:E}})),g=t.orderList.length,f=t.orderList.length,m=0!=f||t.loading?null:t.$t("暂无订单");t.$mp.data=Object.assign({},{$root:{m0:e,m1:_,m2:u,m3:n,m4:a,m5:p,m6:i,m7:r,m8:l,m37:o,m38:y,m39:d,m43:c,l1:h,g6:g,g7:f,m44:m}})},n=[]},"97ce":function(t,s,e){"use strict";(function(t,_){var u=e("4ea4");Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;var n=e("451d"),a=e("f984"),p=e("666f"),i=e("26cb"),r=u(e("66ca")),l={components:{home:function(){Promise.all([e.e("common/vendor"),e.e("components/home/index")]).then(function(){return resolve(e("03ff"))}.bind(null,e)).catch(e.oe)},emptyPage:function(){e.e("components/emptyPage").then(function(){return resolve(e("2baa"))}.bind(null,e)).catch(e.oe)},authorize:function(){e.e("components/Authorize").then(function(){return resolve(e("b29f"))}.bind(null,e)).catch(e.oe)}},mixins:[r.default],data:function(){return{loading:!1,loadend:!1,loadTitle:this.$t("加载更多"),orderList:[],orderData:{},orderStatus:9,page:1,limit:20,pay_close:!1,pay_order_id:"",totalPrice:"0",initIn:!1,isAuto:!1,isShowAuth:!1}},computed:(0,i.mapGetters)(["isLogin"]),onLoad:function(s){s.status&&(this.orderStatus=s.status);var e=t.getEnterOptionsSync();if("1038"==e.scene&&"wxef277996acc166c3"==e.referrerInfo.appId&&this.initIn){var _=e.referrerInfo.extraData;this.initIn=!1,_?"success"==_.code?this.getOrderList():_.code:this.getOrderList()}},onShow:function(){this.isLogin?(this.page=1,this.orderList=[],this.loadend=!1,this.pay_close=!1,this.onLoadFun(),this.getOrderList()):(0,p.toLogin)()},methods:{onLoadFun:function(){this.getOrderData()},authColse:function(t){this.isShowAuth=t},onChangeFun:function(t){var s=t,e=s.action||null,_=void 0!=s.value?s.value:null;e&&this[e]&&this[e](_)},payClose:function(){this.pay_close=!1},getOrderData:function(){var t=this;(0,n.orderData)().then((function(s){t.$set(t,"orderData",s.data)}))},cancelOrder:function(t,s){var e=this;if(!s)return e.$util.Tips({title:e.$t("缺少订单号无法取消订单")});(0,n.orderCancel)(s).then((function(s){return e.$util.Tips({title:s.msg,icon:"success"},(function(){e.orderList.splice(t,1),e.$set(e,"orderList",e.orderList),e.$set(e.orderData,"unpaid_count",e.orderData.unpaid_count-1),e.getOrderData()}))})).catch((function(t){return e.$util.Tips({title:t})}))},goPay:function(t,s){_.navigateTo({url:"/pages/goods/cashier/index?order_id=".concat(s,"&from_type=order")})},goOrderDetails:function(t){if(!t)return this.$util.Tips({title:this.$t("缺少订单号无法查看订单详情")});_.showLoading({title:this.$t("正在加载中")}),(0,a.openOrderSubscribe)().then((function(){_.hideLoading(),_.navigateTo({url:"/pages/goods/order_details/index?order_id="+t})})).catch((function(t){_.hideLoading()}))},statusClick:function(t){t!=this.orderStatus&&(this.orderStatus=t,this.loadend=!1,this.page=1,this.$set(this,"orderList",[]),this.getOrderList())},getOrderList:function(){var t=this;t.loadend||t.loading||(t.loading=!0,t.loadTitle=t.$t("加载更多"),(0,n.getOrderList)({type:t.orderStatus,page:t.page,limit:t.limit}).then((function(s){var e=s.data||[],_=e.length<t.limit;t.orderList=t.$util.SplitArray(e,t.orderList),t.$set(t,"orderList",t.orderList),t.loadend=_,t.loading=!1,t.loadTitle=_?t.$t("没有更多内容啦~"):t.$t("加载更多"),t.page=t.page+1})).catch((function(s){t.loading=!1,t.loadTitle=t.$t("加载更多")})))},delOrder:function(t,s){var e=this;_.showModal({title:e.$t("删除订单"),content:e.$t("确定删除该订单"),success:function(_){if(_.confirm)(0,n.orderDel)(t).then((function(t){return e.orderList.splice(s,1),e.$set(e,"orderList",e.orderList),e.$set(e.orderData,"unpaid_count",e.orderData.unpaid_count-1),e.getOrderData(),e.$util.Tips({title:e.$t("删除成功"),icon:"success"})})).catch((function(t){return e.$util.Tips({title:t})}));else if(_.cancel)return e.$util.Tips({title:e.$t("已取消")})}})}},onReachBottom:function(){this.getOrderList()},onPageScroll:function(t){_.$emit("scroll")}};s.default=l}).call(this,e("bc2e")["default"],e("543d")["default"])},c931:function(t,s,e){"use strict";e.r(s);var _=e("97ce"),u=e.n(_);for(var n in _)["default"].indexOf(n)<0&&function(t){e.d(s,t,(function(){return _[t]}))}(n);s["default"]=u.a},cc6b:function(t,s,e){"use strict";var _=e("f878"),u=e.n(_);u.a},f878:function(t,s,e){},f91a:function(t,s,e){"use strict";(function(t,s){var _=e("4ea4");e("248d");_(e("66fd"));var u=_(e("0db4"));t.__webpack_require_UNI_MP_PLUGIN__=e,s(u.default)}).call(this,e("bc2e")["default"],e("543d")["createPage"])}},[["f91a","common/runtime","common/vendor"]]]);