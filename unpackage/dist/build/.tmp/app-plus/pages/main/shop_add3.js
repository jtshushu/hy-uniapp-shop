(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/main/shop_add3"],{"2e29":function(t,a,s){"use strict";s.r(a);var e=s("86b0"),i=s("f19e");for(var o in i)"default"!==o&&function(t){s.d(a,t,function(){return i[t]})}(o);s("38ed");var n=s("2877"),l=Object(n["a"])(i["default"],e["a"],e["b"],!1,null,"7db44160",null);a["default"]=l.exports},"38ed":function(t,a,s){"use strict";var e=s("6df3"),i=s.n(e);i.a},"638c":function(t,a,s){"use strict";(function(t){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var e=i(s("a34a"));function i(t){return t&&t.__esModule?t:{default:t}}function o(t,a,s,e,i,o,n){try{var l=t[o](n),r=l.value}catch(c){return void s(c)}l.done?a(r):Promise.resolve(r).then(e,i)}function n(t){return function(){var a=this,s=arguments;return new Promise(function(e,i){var n=t.apply(a,s);function l(t){o(n,e,i,l,r,"next",t)}function r(t){o(n,e,i,l,r,"throw",t)}l(void 0)})}}s("7389");var l={data:function(){return{image1:null,imageList:[],id_image_ist:[],uploaddata:{},shop_info:{store_img1:"",id_card:""}}},onShow:function(){console.log("this.$store.state.form_data3 store===",this.$store.state.form_data3),this.$store.state.form_data3.id_card&&(this.shop_info.id_card=this.$store.state.form_data3.id_card),this.$store.state.form_data3.store_img&&(console.log("you--------",this.$store.state.form_data3.store_img),this.image1=this.$store.state.form_data3.store_img),this.$store.state.form_data3.store_img1&&(this.shop_info.store_img1=this.$store.state.form_data3.store_img1),this.$store.state.form_data3.profile_picture2&&(this.id_image_ist=[this.$store.state.form_data3.profile_picture1,this.$store.state.form_data3.profile_picture2])},onLoad:function(){this.getOssParam()},methods:{previewImageFn:function(a,s){t.previewImage({urls:[a]})},chooseImageFn:function(){var a=n(e.default.mark(function a(s){var i;return e.default.wrap(function(a){while(1)switch(a.prev=a.next){case 0:i=this,a.t0=s,a.next=1===a.t0?4:2===a.t0?6:3===a.t0?8:10;break;case 4:return t.chooseImage({count:1,success:function(a){var s=a.tempFilePaths;console.log("res?-=======",JSON.stringify(a));var e=i.uploaddata.dir+Date.parse(new Date)+"_"+i.randomString(6)+"."+s[0].split(".").pop();t.uploadFile({url:"https://ffomall.oss-cn-hangzhou.aliyuncs.com",filePath:s[0],name:"file",formData:{key:e,policy:i.uploaddata.policy,OSSAccessKeyId:i.uploaddata.OSSAccessKeyId,callback:i.uploaddata.callback,signature:i.uploaddata.signature,success_action_status:"203"},success:function(t){console.log("uploadImage success, res is:",t.data),i.image1="https://ffomall.oss-cn-hangzhou.aliyuncs.com/"+JSON.parse(t.data).filename,console.log("uploadImage ======:",JSON.stringify(i.image1))},fail:function(a){console.log("uploadImage fail",JSON.stringify(a)),t.showModal({content:a.errMsg,showCancel:!1}),t.hideLoading()},complete:function(){console.log("complate")}})}}),a.abrupt("break",11);case 6:return t.chooseImage({count:1,success:function(a){var s=a.tempFilePaths;console.log("res?-=======",JSON.stringify(a));var e=i.uploaddata.dir+Date.parse(new Date)+"_"+i.randomString(6)+"."+s[0].split(".").pop();t.uploadFile({url:"https://ffomall.oss-cn-hangzhou.aliyuncs.com",filePath:s[0],name:"file",formData:{key:e,policy:i.uploaddata.policy,OSSAccessKeyId:i.uploaddata.OSSAccessKeyId,callback:i.uploaddata.callback,signature:i.uploaddata.signature,success_action_status:"203"},success:function(t){console.log("uploadImage success, res is:",t.data),i.shop_info.store_img1="https://ffomall.oss-cn-hangzhou.aliyuncs.com/"+JSON.parse(t.data).filename,console.log("uploadImage ======:",JSON.stringify(i.shop_info))},fail:function(a){console.log("uploadImage fail",JSON.stringify(a)),t.showModal({content:a.errMsg,showCancel:!1}),t.hideLoading()},complete:function(){console.log("complate")}})}}),a.abrupt("break",11);case 8:return t.chooseImage({count:2,success:function(a){var s=a.tempFilePaths;for(var e in console.log("res?-=======",JSON.stringify(a)),s){var o=i.uploaddata.dir+Date.parse(new Date)+"_"+i.randomString(6)+"."+s[e].split(".").pop();t.uploadFile({url:"https://ffomall.oss-cn-hangzhou.aliyuncs.com",filePath:s[e],name:"file",formData:{key:o,policy:i.uploaddata.policy,OSSAccessKeyId:i.uploaddata.OSSAccessKeyId,callback:i.uploaddata.callback,signature:i.uploaddata.signature,success_action_status:"203"},success:function(t){console.log("uploadImage success, res is:",t.data),i.id_image_ist.length<2?i.id_image_ist.push("https://ffomall.oss-cn-hangzhou.aliyuncs.com/"+JSON.parse(t.data).filename):(i.id_image_ist=[],i.id_image_ist.push("https://ffomall.oss-cn-hangzhou.aliyuncs.com/"+JSON.parse(t.data).filename)),console.log("uploadImage ======:",JSON.stringify(i.id_image_ist))},fail:function(a){console.log("uploadImage fail",JSON.stringify(a)),t.showModal({content:a.errMsg,showCancel:!1}),t.hideLoading()},complete:function(){console.log("complate")}})}}}),a.abrupt("break",11);case 10:return a.abrupt("break",11);case 11:case"end":return a.stop()}},a,this)}));function s(t){return a.apply(this,arguments)}return s}(),randomString:function(t,a){a=a||"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";for(var s="",e=0;e<t;e++){var i=Math.floor(Math.random()*a.length);s+=a.substring(i,i+1)}return s},getOssParam:function(){var a=this;t.request({url:this.base_url+"notify/alioss/getsign",method:"post",data:{sign:"3521257fc593c5d202474f6ac0c245ae"},success:function(t){console.log("res?-",t),1==t.data.status&&(a.uploaddata=t.data.data)},fail:function(){},complete:function(){}})},formReset:function(t){console.log("清空数据"),this.chosen=""},isFullImg:function(){var a=this;return new Promise(function(s){t.showModal({content:"已经有9张图片了,是否清空现有图片？",success:function(t){t.confirm?(a.imageList=[],s(!0)):s(!1)},fail:function(){s(!1)}})})},uniChooseImg:function(a,s){var e=this;console.log("-----------",a,JSON.stringify(s)),t.chooseImage({count:a||1,success:function(a){var i=a.tempFilePaths;console.log("res?-=======",JSON.stringify(a));var o=e.uploaddata.dir+Date.parse(new Date)+"_"+e.randomString(6)+"."+i[0].split(".").pop();t.uploadFile({url:"https://ffomall.oss-cn-hangzhou.aliyuncs.com",filePath:i[0],name:"file",formData:{key:o,policy:e.uploaddata.policy,OSSAccessKeyId:e.uploaddata.OSSAccessKeyId,callback:e.uploaddata.callback,signature:e.uploaddata.signature,success_action_status:"203"},success:function(t){console.log("uploadImage success, res is:",t.data),s="https://ffomall.oss-cn-hangzhou.aliyuncs.com/"+JSON.parse(t.data).filename,console.log("uploadImage ======:",JSON.stringify(e.shop_info))},fail:function(a){console.log("uploadImage fail",JSON.stringify(a)),t.showModal({content:a.errMsg,showCancel:!1}),t.hideLoading()},complete:function(){console.log("complate")}})}})},formSubmit:function(a){if(this.shop_info.store_img=this.image1,this.shop_info.profile_picture1=this.id_image_ist[0],this.shop_info.profile_picture2=this.id_image_ist[1],console.log("信息333=shop_info==",JSON.stringify(this.shop_info),this.$store.state.form_data3.store_img),console.log("storexinxi===",JSON.stringify(this.$store.state.form_data3)),""==this.shop_info.id_card&&void 0==this.$store.state.form_data3.id_card)return t.showToast({title:"请输入身份证号!",icon:"none"}),!1;if(""==this.image1&&void 0==this.$store.state.form_data3.store_img)return t.showToast({title:"请上传店铺招牌!",icon:"none"}),!1;if(""==this.shop_info.store_img1&&void 0==this.$store.state.form_data3.store_img1)return t.showToast({title:"请上传营业执照!",icon:"none"}),!1;if(void 0==this.shop_info.profile_picture2&&void 0==this.$store.state.form_data3.profile_picture2)return t.showToast({title:"请上传身份证正反面照片!",icon:"none"}),!1;this.$store.commit("changeFormData3",this.shop_info),console.log("kankanjinqumei",this.$store.state);var s=this.$store.state.form_data1,e=this.$store.state.form_data2,i=this.$store.state.form_data3,o=Object.assign(s,e,i);console.log("shangchuanzuishuju--------------",o),this.$util.ajax_uni({url:"merchants/index/registered",data:o,success:function(a){console.log("dianpuxingzeng-----态res:",a),1==a.data.status?(t.showToast({icon:"none",title:a.data.msg}),t.navigateTo({url:"./user"})):(console.log("请求反参数",JSON.stringify(a.data)),t.showToast({icon:"none",title:a.data.msg}))},error:function(t){console.log("错误res:",t)}})}}};a.default=l}).call(this,s("649d")["default"])},"66f4":function(t,a,s){"use strict";s("7297");var e=o(s("b0ce")),i=o(s("2e29"));function o(t){return t&&t.__esModule?t:{default:t}}Page((0,e.default)(i.default))},"6df3":function(t,a,s){},"86b0":function(t,a,s){"use strict";var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("view",{staticClass:"content"},[s("form",{attrs:{eventid:"7179e03a-7"},on:{submit:t.formSubmit,reset:t.formReset}},[s("view",{staticClass:"uni-list"},[s("view",{staticClass:"uni-list-cell",staticStyle:{"flex-direction":"column","align-items":"flex-start"}},[t._v("招牌照片"),s("view",{staticClass:"uni-list-cell-right"},[t.image1?[s("view",{staticClass:"uni-uploader__file",staticStyle:{width:"200rpx"}},[s("image",{staticClass:"uni-uploader__img",attrs:{src:t.image1,mode:"aspectFill","data-src":t.image1,eventid:"7179e03a-0"},on:{tap:function(a){t.previewImageFn(t.image1,1)}}})])]:t._e(),s("view",{staticClass:"uni-uploader__input-box"},[s("view",{staticClass:"uni-uploader__input",attrs:{eventid:"7179e03a-1"},on:{tap:function(a){t.chooseImageFn(1)}}})])],2)]),s("view",{staticClass:"uni-list-cell cell-pd"},[s("view",{staticClass:"uni-uploader"},[s("view",{staticClass:"uni-uploader-head"},[s("view",{staticClass:"uni-uploader-title"},[t._v("营业执照")])]),s("view",{staticClass:"uni-uploader-body"},[s("view",{staticClass:"uni-uploader__files"},[""!=t.shop_info.store_img1?s("view",{staticClass:"uni-uploader__file"},[s("image",{staticClass:"uni-uploader__img",attrs:{mode:"aspectFill",src:t.shop_info.store_img1,"data-src":t.shop_info.store_img1,eventid:"7179e03a-2"},on:{tap:function(a){t.previewImageFn(t.shop_info.store_img1,1)}}})]):t._e(),s("view",{staticClass:"uni-uploader__input-box"},[s("view",{staticClass:"uni-uploader__input",attrs:{eventid:"7179e03a-3"},on:{tap:function(a){t.chooseImageFn(2)}}})])])])])]),s("view",{staticClass:"uni-list-cell cell-pd"},[s("view",{staticClass:"uni-uploader"},[s("view",{staticClass:"uni-uploader-head"},[s("view",{staticClass:"uni-uploader-title"},[t._v("身份证正反面")]),s("view",{staticClass:"uni-uploader-info"},[t._v(t._s(t.id_image_ist.length)+"/2")])]),s("view",{staticClass:"uni-uploader-body"},[s("view",{staticClass:"uni-uploader__files"},[t._l(t.id_image_ist,function(a,e){return s("block",{key:e},[s("view",{staticClass:"uni-uploader__file"},[s("image",{staticClass:"uni-uploader__img",attrs:{mode:"aspectFill",src:a,"data-src":a,eventid:"7179e03a-4-"+e},on:{tap:function(s){t.previewImageFn(a,2)}}})])])}),s("view",{staticClass:"uni-uploader__input-box"},[s("view",{staticClass:"uni-uploader__input",attrs:{eventid:"7179e03a-5"},on:{tap:function(a){t.chooseImageFn(3)}}})])],2)])])]),s("view",{staticClass:"uni-list-cell"},[t._v("身份证号"),s("view",{staticClass:"uni-list-cell-right"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.shop_info.id_card,expression:"shop_info.id_card"}],staticClass:"uni-input",attrs:{type:"idcard",name:"id_card",placeholder:"请输入",eventid:"7179e03a-6"},domProps:{value:t.shop_info.id_card},on:{input:function(a){a.target.composing||(t.shop_info.id_card=a.target.value)}}})])])]),s("view",{staticClass:"uni-btn-v"},[s("button",{staticClass:"btn-submit",attrs:{formType:"submit",type:"primary"}},[t._v("提交")])],1)])],1)},i=[];s.d(a,"a",function(){return e}),s.d(a,"b",function(){return i})},f19e:function(t,a,s){"use strict";s.r(a);var e=s("638c"),i=s.n(e);for(var o in e)"default"!==o&&function(t){s.d(a,t,function(){return e[t]})}(o);a["default"]=i.a}},[["66f4","common/runtime","common/vendor"]]]);