(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],{"0d98":function(t,e,n){},"126f":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:"page_head_warper"},["false"!=t.show_left?n("view",{staticClass:"uni-page-head"},[n("view",{staticClass:"uni-page-head-hd",attrs:{eventid:"dda932a2-0"},on:{tap:function(e){t.goBack(t.back_url)}}},[n("uni-icon",{attrs:{type:"arrowleft",mpcomid:"dda932a2-0"}})],1),n("view",{staticClass:"uni-page-head-title"},[t._v(t._s(t.title))]),n("view",{staticClass:"uni-page-head-ft",staticStyle:{"margin-top":"20rpx"},attrs:{eventid:"dda932a2-1"},on:{tap:function(e){t.goFn(t.right_icon_url)}}},[n("uni-icon",{attrs:{type:t.right_icon,mpcomid:"dda932a2-1"}})],1)]):t._e(),"false"==t.show_left?n("view",{staticClass:"uni-page-head"},[n("view",{staticClass:"uni-page-head-hd",staticStyle:{opacity:"0"}},[t._v("1")]),n("view",{staticClass:"uni-page-head-title"},[t._v(t._s(t.title))]),n("view",{staticClass:"uni-page-head-ft",attrs:{eventid:"dda932a2-2"},on:{tap:function(e){t.goFn(t.right_icon_url)}}},[n("uni-icon",{staticStyle:{"margin-top":"40rpx"},attrs:{type:t.right_icon,mpcomid:"dda932a2-2"}})],1)]):t._e()])},o=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return o})},"12e4":function(t,e,n){"use strict";n.r(e);var a=n("7c6a");for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);n("b0c7");var i,u,r=n("2877"),s=Object(r["a"])(a["default"],i,u,!1,null,null,null);e["default"]=s.exports},"207e":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"page-head",props:{title:{type:String,default:""},right_icon:{type:String,default:""},right_icon_url:{type:String,default:""},back_url:{type:String,default:""},show_left:{type:String,default:""}},methods:{goFn:function(e){t.navigateTo({url:e})},goBack:function(e){console.log(123,e),""!=e?(console.log("有退路"),t.navigateBack({url:e})):t.navigateBack()}}};e.default=n}).call(this,n("649d")["default"])},"339b":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:"uni-icon",class:["uni-icon-"+t.type],style:{color:t.color,"font-size":t.fontSize},attrs:{eventid:"35006e76-0"},on:{click:function(e){t.onClick()}}})},o=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return o})},"407b":function(t,e,n){"use strict";n.r(e);var a=n("339b"),o=n("dfdf");for(var i in o)"default"!==i&&function(t){n.d(e,t,function(){return o[t]})}(i);var u=n("2877"),r=Object(u["a"])(o["default"],a["a"],a["b"],!1,null,null,null);e["default"]=r.exports},"424f":function(t,e,n){"use strict";n.r(e);var a=n("207e"),o=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,function(){return a[t]})}(i);e["default"]=o.a},4415:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={onLaunch:function(){var e=this;t.getStorage({key:"access_token",success:function(t){console.log(t.data)},fail:function(){e.$store.dispatch("getBaiduToken")}})},onShow:function(){console.log("App Show")},onHide:function(){}};e.default=n}).call(this,n("649d")["default"])},"48b9":function(t,e,n){},"786e":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={},a="http://demo.hanyuan369.com/index.php/";n.ajax_uni=function(e){e=e||{},e.url=e.url||"",e.data=e.data||null,e.responseType=e.responseType||null,e.method=e.method||"post",e.header=e.header||{"Content-Type":"application/json"},e.success=e.success||function(){},e.data.token=t.getStorageSync("token"),console.log("入参数",JSON.stringify(e.data)),t.request({url:a+e.url,data:JSON.stringify(e.data),method:e.method,header:e.header,dataType:"json",success:function(t){e.success(t)},fail:function(){t.showToast({title:"请稍后重试"})}})},n.formatTime=function(t){if("number"!==typeof t||t<0)return t;var e=parseInt(t/3600);t%=3600;var n=parseInt(t/60);t%=60;var a=t;return[e,n,a].map(function(t){return t=t.toString(),t[1]?t:"0"+t}).join(":")},n.formatLocation=function(t,e){return"string"===typeof t&&"string"===typeof e&&(t=parseFloat(t),e=parseFloat(e)),t=t.toFixed(2),e=e.toFixed(2),{longitude:t.toString().split("."),latitude:e.toString().split(".")}},n.dateUtils={UNITS:{"年":315576e5,"月":26298e5,"天":864e5,"小时":36e5,"分钟":6e4,"秒":1e3},humanize:function(t){var e="";for(var n in this.UNITS)if(t>=this.UNITS[n]){e=Math.floor(t/this.UNITS[n])+n+"前";break}return e||"刚刚"},format:function(t){var e=this.parse(t),n=Date.now()-e.getTime();if(n<this.UNITS["天"])return this.humanize(n);var a=function(t){return t<10?"0"+t:t};return e.getFullYear()+"/"+a(e.getMonth()+1)+"/"+a(e.getDay())+"-"+a(e.getHours())+":"+a(e.getMinutes())},parse:function(t){var e=t.split(/[^0-9]/);return new Date(e[0],e[1]-1,e[2],e[3],e[4],e[5])}};var o=n;e.default=o}).call(this,n("649d")["default"])},"7c6a":function(t,e,n){"use strict";n.r(e);var a=n("4415"),o=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,function(){return a[t]})}(i);e["default"]=o.a},"8ba2":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={props:{type:String,color:String,size:[Number,String]},computed:{fontSize:function(){return"".concat(this.size,"px")}},methods:{onClick:function(){this.$emit("click")}}};e.default=a},"97e9":function(t,e,n){"use strict";n.r(e);var a=n("126f"),o=n("424f");for(var i in o)"default"!==i&&function(t){n.d(e,t,function(){return o[t]})}(i);n("f865");var u=n("2877"),r=Object(u["a"])(o["default"],a["a"],a["b"],!1,null,"860672b6",null);e["default"]=r.exports},b0c7:function(t,e,n){"use strict";var a=n("0d98"),o=n.n(a);o.a},b6ea:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("f3d3")),o=i(n("2f62"));function i(t){return t&&t.__esModule?t:{default:t}}a.default.use(o.default);var u=new o.default.Store({state:{forcedLogin:!1,hasLogin:!1,userName:"",img_list:[],shop_edit_index:"",shop_edit_info:{},form_data1:{},form_data2:{},form_data3:{},provider:"",clientid:"",token:""},mutations:{login:function(t,e){t.userName=e||"新用户",t.hasLogin=!0},logout:function(t){t.userName="",t.hasLogin=!1},changeImgList:function(t,e){t.img_list=t.img_list.concat(e)},changeShopEdit:function(t,e){t.shop_edit_index=e},changeShopEditInfo:function(t,e){t.shop_edit_info=e},changeFormData1:function(t,e){t.form_data1=e},changeFormData2:function(t,e){t.form_data2=e},changeFormData3:function(t,e){t.form_data3=e},setProvider:function(t,e){t.provider=e},setPushData:function(t,e){t.clientid=e.clientid,t.token=e.token}},actions:{getBaiduToken:function(e){t.request({url:"https://openapi.baidu.com/oauth/2.0/token",method:"GET",data:{grant_type:"client_credentials",client_id:"1UnRLzK0437FLCGyVMvKyLvL",client_secret:"BEBFxIWeSAfqOSpaBfGKdoKF95T7K7lz"},success:function(e){console.log(JSON.stringify(e)),e.data.access_token&&(t.setStorageSync("access_token",e.data.access_token),t.setStorageSync("expires_in",e.data.expires_in))}})},closePush:function(e){t.unsubscribePush({provider:e.state.provider,success:function(e){t.showToast({title:"已关闭收款语音"})}}),t.offPush({provider:e.state.provider,success:function(t){}})},openPush:function(e){t.subscribePush({provider:e.state.provider,success:function(n){t.showToast({title:"已开启收款语音"}),t.onPush({provider:e.state.provider,success:function(t){},fail:function(t){},callback:function(n){function a(t){for(var e=[],n=0;n<t.length;n++)t[n]&&e.push(t[n]);return e}function o(t){return t?a(Object.keys(t).map(function(e){return void 0===t[e]?"":encodeURIComponent(e)+"="+encodeURIComponent(t[e])})).join("&"):""}t.showToast({title:"喜来邦到账"+(JSON.parse(n.data).data.money_num-0)+"元"}),plus.push.createMessage("喜来邦到账"+(JSON.parse(n.data).data.money_num-0)+"元"),t.getStorage({key:"access_token",success:function(a){var i=a.data;t.getStorage({key:"access_token",success:function(t){var a=t.data;Date.parse(new Date)/1e3>a-259200&&e.dispatch("getBaiduToken");t={tex:"喜来邦到账"+(JSON.parse(n.data).data.money_num-0)+"元",tok:i,cuid:e.state.token,ctp:1,lan:"zh",spd:3,pit:6,vol:15};console.log("http://tsn.baidu.com/text2audio?"+o(t));var u=new Audio;u.src="http://tsn.baidu.com/text2audio?"+o(t),u.play()}})}})}})}})},pushInit:function(e,n){t.getProvider({service:"push",success:function(a){e.commit("setProvider",a.provider[0]);var o=plus.push.getClientInfo();e.commit("setPushData",o),console.log(n),t.request({url:"http://demo.hanyuan369.com/index.php/merchants/index/xmlogin",method:"POST",data:{token:o.token,clientid:o.clientid,ff_openid:n},success:function(n){console.log(JSON.stringify(n)),1==n.data.status&&1==n.data.data.open_audio?e.dispatch("openPush"):t.showToast({title:n.data.msg})}})},fail:function(t){console.log("获取推送通道失败",t)}})}}}),r=u;e.default=r}).call(this,n("649d")["default"])},d9b5:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n="http://demo.hanyuan369.com/index.php/",a=function(e){e=e||{},e.url=e.url||"",e.data=e.data||null,e.responseType=e.responseType||null,e.method=e.method||"post",e.header=e.header||{"Content-Type":"application/json"},e.success=e.success||function(){},e.data.token=t.getStorageSync("token"),console.log("入参数",e.data),t.request({url:n+e.url,data:e.data,method:e.method,header:e.header,dataType:"json",success:function(t){e.success(t)},fail:function(){t.showToast({title:"请稍后重试"})}})},o=a;e.default=o}).call(this,n("649d")["default"])},dfdf:function(t,e,n){"use strict";n.r(e);var a=n("8ba2"),o=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,function(){return a[t]})}(i);e["default"]=o.a},e059:function(t,e,n){"use strict";n("7297");var a=d(n("f3d3")),o=d(n("12e4")),i=d(n("b6ea")),u=d(n("407b")),r=d(n("97e9")),s=d(n("d9b5")),c=d(n("786e"));function d(t){return t&&t.__esModule?t:{default:t}}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},a=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),a.forEach(function(e){f(t,e,n[e])})}return t}function f(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}a.default.component("page-head",r.default),a.default.component("uni-icon",u.default),a.default.config.productionTip=!1,a.default.prototype.$util=c.default,a.default.prototype.$ajaxa=s.default,a.default.prototype.$store=i.default,a.default.prototype.base_url="http://demo.hanyuan369.com/index.php/",o.default.mpType="app";var p=new a.default(l({store:i.default},o.default));p.$mount()},f865:function(t,e,n){"use strict";var a=n("48b9"),o=n.n(a);o.a}},[["e059","common/runtime","common/vendor"]]]);