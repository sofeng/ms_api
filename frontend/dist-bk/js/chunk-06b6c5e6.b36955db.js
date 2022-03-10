(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-06b6c5e6"],{1249:function(e,t,i){},"1d58":function(e,t,i){},6573:function(e,t,i){"use strict";var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("el-menu-item",{attrs:{index:this.index},on:{click:e.changeRoute}},[i("font-awesome-icon",{attrs:{icon:["fa","list-ul"]}}),i("span",[e._v(e._s(e.$t("commons.show_all")))])],1)},n=[],r=(i("4c1e"),i("d1ba"),{name:"MsShowAll",props:{index:String},methods:{changeRoute:function(){this.$route.path===this.index&&this.$router.replace({path:this.index,query:{type:"all"}})}}}),o=r,a=(i("66323"),i("cba8")),c=Object(a["a"])(o,s,n,!1,null,"e0af1830",null);t["a"]=c.exports},66323:function(e,t,i){"use strict";i("82df")},"6b4c":function(e,t,i){},7487:function(e,t,i){"use strict";i("6b4c")},"79e9":function(e,t,i){},"82df":function(e,t,i){},"85c8":function(e,t,i){"use strict";i.r(t);var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("el-col",[i("ms-api-header-menus"),i("div",[i("transition",[i("keep-alive",[i("router-view",{attrs:{baseUrl:e.baseUrl}})],1)],1)],1)],1)},n=[],r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return e.isRouterAlive?i("div",{attrs:{id:"menu-bar"}},[i("el-row",{attrs:{type:"flex"}},[i("project-change",{attrs:{"project-name":e.currentProject}}),i("el-col",{attrs:{span:14}},[i("el-menu",{staticClass:"header-menu",attrs:{"unique-opened":!0,mode:"horizontal",router:"","default-active":e.$route.path}},[i("el-menu-item",{directives:[{name:"show",rawName:"v-show",value:e.isNewVersion,expression:"isNewVersion"}],attrs:{index:"/api/home"}},[e._v(" "+e._s(e.$t("i18n.home"))+" ")]),i("el-menu-item",{directives:[{name:"show",rawName:"v-show",value:e.isOldVersion,expression:"isOldVersion"}],attrs:{index:"/api/home_obsolete"}},[e._v(" "+e._s(e.$t("i18n.home"))+" ")]),i("el-menu-item",{directives:[{name:"show",rawName:"v-show",value:e.isNewVersion,expression:"isNewVersion"},{name:"permission",rawName:"v-permission",value:["PROJECT_API_DEFINITION:READ"],expression:"['PROJECT_API_DEFINITION:READ']"}],attrs:{index:"/api/definition"}},[e._v(" "+e._s(e.$t("i18n.definition"))+" ")]),i("el-menu-item",{directives:[{name:"show",rawName:"v-show",value:e.isNewVersion,expression:"isNewVersion"},{name:"permission",rawName:"v-permission",value:["PROJECT_API_SCENARIO:READ"],expression:"['PROJECT_API_SCENARIO:READ']"}],attrs:{index:"/api/automation"}},[e._v(" "+e._s(e.$t("i18n.automation"))+" ")]),i("el-menu-item",{directives:[{name:"show",rawName:"v-show",value:e.isNewVersion,expression:"isNewVersion"},{name:"permission",rawName:"v-permission",value:["PROJECT_API_REPORT:READ"],expression:"['PROJECT_API_REPORT:READ']"}],attrs:{index:"/api/automation/report"}},[e._v(" "+e._s(e.$t("i18n.report"))+" ")]),i("el-submenu",{directives:[{name:"show",rawName:"v-show",value:e.isOldVersion,expression:"isOldVersion"}],attrs:{index:"4"},scopedSlots:e._u([{key:"title",fn:function(){return[e._v(e._s(e.$t("commons.test")))]},proxy:!0}],null,!1,2665667847)},[i("ms-recent-list",{ref:"testRecent",attrs:{options:e.testRecent}}),i("el-divider",{staticClass:"menu-divider"}),i("ms-show-all",{attrs:{index:"/api/test/list/all"}}),i("el-menu-item",{staticClass:"blank_item",attrs:{index:e.apiTestProjectPath}}),i("ms-create-button",{attrs:{index:"/api/test/create",title:e.$t("load_test.create")}})],1),i("el-submenu",{directives:[{name:"show",rawName:"v-show",value:e.isOldVersion,expression:"isOldVersion"}],attrs:{index:"5"},scopedSlots:e._u([{key:"title",fn:function(){return[e._v(e._s(e.$t("commons.report")))]},proxy:!0}],null,!1,2114887359)},[i("ms-recent-list",{ref:"reportRecent",attrs:{options:e.reportRecent}}),i("el-divider",{staticClass:"menu-divider"}),i("ms-show-all",{attrs:{index:"/api/report/list/all"}})],1),i("el-menu-item",{directives:[{name:"show",rawName:"v-show",value:e.isOldVersion,expression:"isOldVersion"}],attrs:{index:"/api/monitor/view"}},[e._v(" "+e._s(e.$t("commons.monitor"))+" ")])],1)],1)],1)],1):e._e()},o=[],a=i("597f"),c=i("a35a"),u=i("6573"),l=i("97dd"),m=i("c78e"),d=i("9b14"),p=i("abe6"),h=i("7736"),v={name:"MsApiHeaderMenus",components:{SearchList:d["a"],MsCreateTest:m["a"],MsCreateButton:l["a"],MsShowAll:u["a"],MsRecentList:c["a"],ProjectChange:p["a"]},data:function(){return{testRecent:{title:this.$t("load_test.recent"),url:"/api/recent/5",index:function(e){return"/api/test/edit/"+e.id},router:function(e){return{path:"/api/test/edit",query:{id:e.id}}}},reportRecent:{title:this.$t("report.recent"),showTime:!0,url:"/api/report/recent/5",index:function(e){return"/api/report/view/"+e.id}},isProjectActivation:!0,isRouterAlive:!0,apiTestProjectPath:"",currentProject:""}},computed:Object(a["a"])({},Object(h["b"])(["isNewVersion","isOldVersion"])),methods:{reload:function(){this.isRouterAlive=!1,this.$nextTick((function(){this.isRouterAlive=!0}))}},mounted:function(){},beforeDestroy:function(){}},f=v,_=(i("7487"),i("cba8")),w=Object(_["a"])(f,r,o,!1,null,"06ec5f12",null),x=w.exports,b={name:"MsApiTest",components:{MsApiHeaderMenus:x},data:function(){return{baseUrl:"api"}}},R=b,O=Object(_["a"])(R,s,n,!1,null,"9a1811f6",null);t["default"]=O.exports},"8d88":function(e,t,i){"use strict";i("1249")},"97dd":function(e,t,i){"use strict";var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("el-menu-item",{attrs:{index:this.index}},[i("el-button",{staticClass:"create-button",attrs:{type:"text"}},[e._v(e._s(this.title))])],1)},n=[],r={name:"MsCreateButton",props:{index:String,title:String,click:Function}},o=r,a=(i("c9ac"),i("cba8")),c=Object(a["a"])(o,s,n,!1,null,"2c45f984",null);t["a"]=c.exports},a35a:function(e,t,i){"use strict";var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{directives:[{name:"loading",rawName:"v-loading",value:e.result.loading,expression:"result.loading"}]},[i("div",{staticClass:"recent-text"},[i("i",{staticClass:"el-icon-time"}),i("span",[e._v(e._s(e.options.title))]),i("i",{staticClass:"el-icon-refresh",on:{click:e.recent}})]),e._l(e.items,(function(t){return i("el-menu-item",{key:t.id,attrs:{index:e.getIndex(t),route:e.getRouter(t)}},[i("template",{slot:"title"},[i("div",{staticClass:"title"},[e._v(e._s(t.name))]),e.options.showTime&&t.updateTime?i("div",{staticClass:"time"},[e._v(e._s(e._f("timestampFormatDate")(t.updateTime)))]):e._e()])],2)}))],2)},n=[],r=(i("495f"),i("4abd"),{name:"MsRecentList",props:{options:Object},mounted:function(){this.recent()},data:function(){return{result:{},items:[]}},computed:{getIndex:function(){return function(e){return this.options.index(e)}},getRouter:function(){return function(e){if(this.options.router)return this.options.router(e)}}},methods:{recent:function(){var e=this;this.options.condition?this.result=this.$post(this.options.url,this.options.condition,(function(t){e.items=t.data})):this.result=this.$get(this.options.url,(function(t){e.items=t.data}))}}}),o=r,a=(i("b2a6"),i("cba8")),c=Object(a["a"])(o,s,n,!1,null,"19f860ce",null);t["a"]=c.exports},b2a6:function(e,t,i){"use strict";i("1d58")},c78e:function(e,t,i){"use strict";var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("router-link",{directives:[{name:"roles",rawName:"v-roles",value:this.permission,expression:"this.permission"}],staticClass:"create-test",attrs:{to:this.to}},[i("el-button",{attrs:{type:"primary",size:"small"}},[e._v(e._s(this.title))])],1)},n=[],r={name:"MsCreateTest",props:{to:[String,Object],title:{type:String,default:function(){return this.$t("load_test.create")}},permission:{type:Array,default:function(){return["test_user","test_manager"]}}}},o=r,a=(i("8d88"),i("cba8")),c=Object(a["a"])(o,s,n,!1,null,"7d658476",null);t["a"]=c.exports},c9ac:function(e,t,i){"use strict";i("79e9")}}]);