(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/main/financial_account"],{1163:function(a,t,e){"use strict";(function(a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e={data:function(){return{form_data:{},lists:[{money:"1",name:""},{money:"2",name:""},{money:"3",name:""},{money:"4",name:""}]}},onShow:function(){console.log("token",a.getStorageSync("token")),this.getData()},methods:{toFn:function(){a.navigateTo({url:"./financial_acc_apply?data="+this.form_data.cash_available_balance})},getData:function(){var t=this;this.$util.ajax_uni({url:"merchants/Material/financial",data:{ff_openid:a.getStorageSync("user_id")},success:function(e){console.log("返回数据状态res:",e),1==e.data.status?(t.form_data=e.data.data.data,a.hideLoading()):console.log("ceeee",JSON.stringify(e.data))},error:function(a){console.log("错误res:",a)}})}}};t.default=e}).call(this,e("649d")["default"])},"1e4a":function(a,t,e){"use strict";e.r(t);var n=e("954c"),i=e("5f46");for(var c in i)"default"!==c&&function(a){e.d(t,a,function(){return i[a]})}(c);e("c96c");var s=e("2877"),l=Object(s["a"])(i["default"],n["a"],n["b"],!1,null,"3f1e2a71",null);t["default"]=l.exports},"5f2a":function(a,t,e){"use strict";e("7297");var n=c(e("b0ce")),i=c(e("1e4a"));function c(a){return a&&a.__esModule?a:{default:a}}Page((0,n.default)(i.default))},"5f46":function(a,t,e){"use strict";e.r(t);var n=e("1163"),i=e.n(n);for(var c in n)"default"!==c&&function(a){e.d(t,a,function(){return n[a]})}(c);t["default"]=i.a},"954c":function(a,t,e){"use strict";var n=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("view",{staticClass:"uni-list"},[e("page-head",{attrs:{title:"账户余额",back_url:"./user",mpcomid:"1b03bb54-0"}}),e("view",{staticClass:"uni-list-cell ",staticStyle:{"margin-top":"140rpx"}},[e("view",{},[a._v("现金可用余额")]),e("view",{},[a._v(a._s(a.form_data.cash_available_balance))])]),e("view",{staticClass:"uni-list-cell "},[e("view",{},[a._v("现金冻结余额")]),e("view",{},[a._v(a._s(a.form_data.cash_unavailable_balance))])]),e("view",{staticClass:"uni-list-cell "},[e("view",{},[a._v("流通股份余额")]),e("view",{},[a._v(a._s(a.form_data.stock_available_balance))])]),e("view",{staticClass:"uni-list-cell "},[e("view",{},[a._v("受限股份余额")]),e("view",{},[a._v(a._s(a.form_data.stock_unavailable_balance))])]),e("view",{staticClass:"uni-btn-v"},[e("button",{staticClass:"btn-submit",attrs:{type:"primary",eventid:"1b03bb54-0"},on:{tap:a.toFn}},[a._v("申请提现")])],1)],1)},i=[];e.d(t,"a",function(){return n}),e.d(t,"b",function(){return i})},b496:function(a,t,e){},c96c:function(a,t,e){"use strict";var n=e("b496"),i=e.n(n);i.a}},[["5f2a","common/runtime","common/vendor"]]]);