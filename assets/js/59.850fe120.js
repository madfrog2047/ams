(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{1014:function(e,t,i){"use strict";i.r(t);var o=i(126),s={htmlField1:{ctx:"view",type:"form",resource:{fields:{id:{type:"text",label:"序号"},html:{type:"html",label:"渲染字段",view:function(e,t,i){return e+'<img src="https://vipshop.github.io/ams/index/ams-logo.png" />'}}}},data:{id:"1204",html:'<div style="color: red">我是渲染的内容</div>'}},htmlField2:{ctx:"view",type:"list",resource:{fields:{id:{type:"text",label:"序号"},html:{type:"html",label:"渲染字段",view:function(e,t,i){return'<span style="color:red;">'+e+'</span><img src="https://vipshop.github.io/ams/index/ams-logo.png" />'}}}},data:{list:[{id:1,html:"1"},{id:2,html:"2"},{id:3,html:"3"}]}}},n=i(138),a=i.n(n),l=i(137),c=i.n(l),d={mixins:[o.a],mounted:function(){var e=a()(s[this.blockName]);this.configCode=c()(e,{indent_size:2,space_in_empty_paren:!0}),ams&&ams.blocks&&ams.blocks[this.blockName]?this.init=!0:(ams.block(this.blockName,s[this.blockName]),this.init=!0)}},r=i(1),m=Object(r.a)(d,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("el-card",{staticClass:"demo demo-card",attrs:{shadow:"hover"}},[e.init?i("ams-block",{staticClass:"demo-card-preview",attrs:{name:e.blockName}}):e._e(),e._v(" "),i("div",{class:"demo-card-config "+(e.showConfig?"open":"")},[i("highlight-code",{attrs:{lang:"javascript"}},[e._v("\n            "+e._s(e.configCode)+"\n        ")])],1),e._v(" "),i("div",{staticClass:"demo-card-config-btn",on:{click:e.toggleDemoCofig}},[i("i",{class:"el-icon-caret-"+(e.showConfig?"top":"bottom")}),e._v("\n         "+e._s(e.showConfig?"隐藏":"显示")+"配置\n        "),e.onlineDemo?i("el-link",{attrs:{href:e.onlineDemo,target:"_blank",type:"success"}},[e._v("在线运行")]):e._e()],1)],1)}),[],!1,null,null,null);t.default=m.exports},125:function(e,t,i){"use strict";var o=i(0),s=(i(131),i(130)),n=i.n(s),a=i(128),l=i.n(a),c=i(136),d=i(132),r=i.n(d),m=(i(133),i(134)),u=i.n(m),h=i(135),f=i.n(h);o.default.use(n.a),o.default.use(l.a),console.log("ams init config"),o.default.use(u.a),o.default.use(f.a),"undefined"!=typeof window&&(window.Vue=o.default),o.default.use(c.a,{languages:{javascript:r.a}}),l.a.config({resource:{api:{withCredentials:!1}}})},126:function(e,t,i){"use strict";i(125);t.a={data:function(){return{init:!1,showConfig:!1,configCode:"",codeBlock:{type:"form",data:{code:""},resource:{fields:{code:{type:"ams-code",labelWidth:"0"}}}}}},props:{blockName:String,onlineDemo:String},methods:{toggleDemoCofig:function(e){"el-link--inner"!==e.target.className&&(this.showConfig=!this.showConfig)}}}}}]);