(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/main/shop_pic_add"],{"449c":function(t,e,a){"use strict";a.r(e);var n=a("4912"),i=a.n(n);for(var s in n)"default"!==s&&function(t){a.d(e,t,function(){return n[t]})}(s);e["default"]=i.a},4912:function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i(a("a34a"));function i(t){return t&&t.__esModule?t:{default:t}}function s(t,e,a,n,i,s,o){try{var u=t[s](o),r=u.value}catch(c){return void a(c)}u.done?e(r):Promise.resolve(r).then(n,i)}function o(t){return function(){var e=this,a=arguments;return new Promise(function(n,i){var o=t.apply(e,a);function u(t){s(o,n,i,u,r,"next",t)}function r(t){s(o,n,i,u,r,"throw",t)}u(void 0)})}}a("7389");var u={data:function(){return{image1:"",imageList:[],uploaddata:{}}},onShow:function(){this.imageList=this.$store.state.img_list,this.image1=this.$store.state.img},onLoad:function(){this.getOssParam()},methods:{chooseImage1:function(){var t=o(n.default.mark(function t(){return n.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),countChange:function(t){this.countIndex=t.target.value},chooseImage:function(){var e=o(n.default.mark(function e(a){var i,s,o=this;return n.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(i=this,1!=a){e.next=5;break}t.chooseImage({count:1,success:function(t){o.image1=t.tempFilePaths[0],o.$store.commit("changeImg",t.tempFilePaths[0])}}),e.next=13;break;case 5:if(9!==this.imageList.length){e.next=12;break}return e.next=8,this.isFullImg();case 8:if(s=e.sent,console.log("是否继续?",s),s){e.next=12;break}return e.abrupt("return");case 12:t.chooseImage({count:9-this.imageList.length,success:function(e){o.imageList=o.imageList.concat(e.tempFilePaths),o.$store.commit("changeImgList",e.tempFilePaths),console.log("res?-=======",e);for(var a=e.tempFilePaths,n=0;n<a.length;n++){var s=new FormData,u=i.uploaddata.dir+String(a[n].lastModified)+"_"+i.randomString(6);s.append("key",u),s.append("policy",i.uploaddata.policy),s.append("OSSAccessKeyId",i.uploaddata.OSSAccessKeyId),s.append("success_action_status","203"),s.append("callback",i.uploaddata.callback),s.append("signature",i.uploaddata.signature),s.append("file",a[n]),t.request({url:o.base_url+"//ffomall.oss-cn-hangzhou.aliyuncs.com",method:"post",data:s,headers:{"Content-Type":"multipart/form-data"},success:function(t){console.log("res?-=======",t),t.data.status},fail:function(){},complete:function(){}})}}});case 13:case"end":return e.stop()}},e,this)}));function a(t){return e.apply(this,arguments)}return a}(),randomString:function(t,e){e=e||"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";for(var a="",n=0;n<t;n++){var i=Math.floor(Math.random()*e.length);a+=e.substring(i,i+1)}return a},getOssParam:function(){var e=this;t.request({url:this.base_url+"notify/alioss/getsign",method:"post",data:{sign:"3521257fc593c5d202474f6ac0c245ae"},success:function(t){console.log("res?-",t),1==t.data.status&&(e.uploaddata=t.data.data)},fail:function(){},complete:function(){}})},formReset:function(t){console.log("清空数据"),this.chosen=""},isFullImg:function(){var e=this;return new Promise(function(a){t.showModal({content:"已经有9张图片了,是否清空现有图片？",success:function(t){t.confirm?(e.imageList=[],a(!0)):a(!1)},fail:function(){a(!1)}})})},previewImage:function(e,a){1==e?t.navigateTo({url:"./img_detail?data="+this.image1+"&&flag=1"}):t.navigateTo({url:"./img_detail?data="+e})},formSubmit:function(t){}}};e.default=u}).call(this,a("649d")["default"])},"49fb":function(t,e,a){"use strict";a("7297");var n=s(a("b0ce")),i=s(a("d2e8"));function s(t){return t&&t.__esModule?t:{default:t}}Page((0,n.default)(i.default))},"568b":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticClass:"content"},[a("form",{attrs:{eventid:"77e192e4-2"},on:{submit:t.formSubmit,reset:t.formReset}},[a("view",{staticClass:"uni-list"},[a("view",{staticClass:"uni-list-cell"},[a("label",[t._v("相册姓名")]),a("view",{staticClass:"uni-list-cell-right"},[a("input",{staticClass:"uni-input",attrs:{name:"store_name",placeholder:"请输入"}})])],1)]),a("view",{staticClass:"uni-list list-pd"},[a("view",{staticClass:"uni-list-cell cell-pd"},[a("view",{staticClass:"uni-uploader"},[a("view",{staticClass:"uni-uploader-head"},[a("view",{staticClass:"uni-uploader-title"},[t._v("上传相册封面照")]),a("view",{staticClass:"uni-uploader-info"},[t._v(t._s(t.imageList.length)+"/9")])]),a("view",{staticClass:"uni-uploader-body"},[a("view",{staticClass:"uni-uploader__files"},[t._l(t.imageList,function(e,n){return a("block",{key:n},[a("view",{staticClass:"uni-uploader__file"},[a("image",{staticClass:"uni-uploader__img",attrs:{src:e,"data-src":e,eventid:"77e192e4-0-"+n},on:{tap:function(a){t.previewImage(e,n)}}})])])}),a("view",{staticClass:"uni-uploader__input-box"},[a("view",{staticClass:"uni-uploader__input",attrs:{eventid:"77e192e4-1"},on:{tap:t.chooseImage}})])],2)])])])]),a("view",{staticClass:"uni-btn-v"},[a("button",{staticClass:"btn-submit",attrs:{formType:"submit",type:"primary"}},[t._v("提交")])],1)])],1)},i=[];a.d(e,"a",function(){return n}),a.d(e,"b",function(){return i})},"81b5":function(t,e,a){},d2e8:function(t,e,a){"use strict";a.r(e);var n=a("568b"),i=a("449c");for(var s in i)"default"!==s&&function(t){a.d(e,t,function(){return i[t]})}(s);a("ffe5");var o=a("2877"),u=Object(o["a"])(i["default"],n["a"],n["b"],!1,null,"40d76946",null);e["default"]=u.exports},ffe5:function(t,e,a){"use strict";var n=a("81b5"),i=a.n(n);i.a}},[["49fb","common/runtime","common/vendor"]]]);