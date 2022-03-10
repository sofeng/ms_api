(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-71be39ba"],{"98ac":function(e,t,o){"use strict";o("cb88")},ba6d:function(e,t,o){"use strict";o.r(t);var i=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{directives:[{name:"loading",rawName:"v-loading",value:e.result.loading,expression:"result.loading"}]},[i("el-card",{staticClass:"table-card",scopedSlots:e._u([{key:"header",fn:function(){return[i("ms-table-header",{attrs:{"show-create":!1,condition:e.condition,"create-tip":e.btnTips,title:e.$t("commons.project")},on:{"update:condition":function(t){e.condition=t},search:e.search,create:e.create},scopedSlots:e._u([{key:"button",fn:function(){return[i("ms-table-button",{directives:[{name:"permission",rawName:"v-permission",value:["PROJECT_MANAGER:READ+EDIT"],expression:"['PROJECT_MANAGER:READ+EDIT']"}],attrs:{icon:"el-icon-box",content:e.$t("api_test.jar_config.title")},on:{click:e.openJarConfig}})]},proxy:!0}])})]},proxy:!0}])},[i("el-table",{staticClass:"adjust-table",staticStyle:{width:"100%"},attrs:{border:"",data:e.items,height:e.screenHeight},on:{"sort-change":e.sort,"filter-change":e.filter}},[i("el-table-column",{attrs:{prop:"name",label:e.$t("commons.name"),"min-width":"100","show-overflow-tooltip":""}}),i("el-table-column",{attrs:{prop:"description",label:e.$t("commons.description"),"show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return[i("pre",[e._v(e._s(t.row.description))])]}}])}),i("el-table-column",{attrs:{prop:"createUser",label:e.$t("commons.create_user"),filters:e.userFilters,"column-key":"create_user","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return[i("span",[e._v(e._s(t.row.createUserName))])]}}])}),i("el-table-column",{attrs:{"min-width":"100",sortable:"",prop:"createTime",label:e.$t("commons.create_time"),"show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return[i("span",[e._v(e._s(e._f("timestampFormatDate")(t.row.createTime)))])]}}])}),i("el-table-column",{attrs:{"min-width":"100",sortable:"",prop:"updateTime",label:e.$t("commons.update_time"),"show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return[i("span",[e._v(e._s(e._f("timestampFormatDate")(t.row.updateTime)))])]}}])}),i("el-table-column",{attrs:{label:e.$t("commons.operating"),width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("div",[i("ms-table-operator",{attrs:{"edit-permission":["PROJECT_MANAGER:READ+EDIT"],"delete-permission":["PROJECT_MANAGER:READ+DELETE"],"show-delete":!1},on:{editClick:function(o){return e.edit(t.row)},deleteClick:function(o){return e.handleDelete(t.row)}},scopedSlots:e._u([{key:"behind",fn:function(){return[i("ms-table-operator-button",{directives:[{name:"permission",rawName:"v-permission",value:["PROJECT_MANAGER:READ+EDIT"],expression:"['PROJECT_MANAGER:READ+EDIT']"}],attrs:{tip:e.$t("api_test.environment.environment_config"),icon:"el-icon-setting",type:"info"},on:{exec:function(o){return e.openEnvironmentConfig(t.row)}}}),i("ms-table-operator-button",{directives:[{name:"permission",rawName:"v-permission",value:["PROJECT_MANAGER:READ+EDIT"],expression:"['PROJECT_MANAGER:READ+EDIT']"}],attrs:{tip:e.$t("load_test.other_resource"),icon:"el-icon-files",type:"success"},on:{exec:function(o){return e.openFiles(t.row)}}})]},proxy:!0}],null,!0)})],1)]}}])})],1),i("ms-table-pagination",{attrs:{change:e.list,"current-page":e.currentPage,"page-size":e.pageSize,total:e.total},on:{"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t},"update:pageSize":function(t){e.pageSize=t},"update:page-size":function(t){e.pageSize=t}}})],1),i("el-dialog",{attrs:{"close-on-click-modal":!1,title:e.title,visible:e.createVisible,"destroy-on-close":""},on:{"update:visible":function(t){e.createVisible=t},close:e.handleClose},scopedSlots:e._u([{key:"footer",fn:function(){return[i("div",{staticClass:"dialog-footer"},[i("ms-dialog-footer",{on:{cancel:function(t){e.createVisible=!1},confirm:function(t){return e.submit("form")}}})],1)]},proxy:!0}])},[i("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-position":"right","label-width":"80px",size:"small"}},[i("el-form-item",{attrs:{"label-width":e.labelWidth,label:e.$t("commons.name"),prop:"name"}},[i("el-input",{attrs:{autocomplete:"off"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),i("el-form-item",{attrs:{"label-width":e.labelWidth,label:e.$t("用例模板"),prop:"caseTemplateId"}},[i("template-select",{ref:"caseTemplate",attrs:{data:e.form,scene:"API_CASE",prop:"caseTemplateId"}})],1),i("el-form-item",{attrs:{"label-width":e.labelWidth,label:e.$t("缺陷模板"),prop:"issueTemplateId"}},[i("template-select",{ref:"issueTemplate",attrs:{data:e.form,scene:"ISSUE",prop:"issueTemplateId"}})],1),i("el-form-item",{attrs:{"label-width":e.labelWidth,label:e.$t("commons.description"),prop:"description"}},[i("el-input",{attrs:{autosize:{minRows:2,maxRows:4},type:"textarea"},model:{value:e.form.description,callback:function(t){e.$set(e.form,"description",t)},expression:"form.description"}})],1),e.tapd?i("el-form-item",{attrs:{"label-width":e.labelWidth,label:e.$t("project.tapd_id")}},[i("el-input",{attrs:{autocomplete:"off"},model:{value:e.form.tapdId,callback:function(t){e.$set(e.form,"tapdId",t)},expression:"form.tapdId"}})],1):e._e(),e.jira?i("el-form-item",{attrs:{"label-width":e.labelWidth,label:e.$t("project.jira_key")}},[i("el-input",{attrs:{autocomplete:"off"},model:{value:e.form.jiraKey,callback:function(t){e.$set(e.form,"jiraKey",t)},expression:"form.jiraKey"}}),i("ms-instructions-icon",{attrs:{effect:"light"}},[[i("img",{staticClass:"jira-image",attrs:{src:o("2029")}})]],2)],1):e._e(),e.zentao?i("el-form-item",{attrs:{"label-width":e.labelWidth,label:e.$t("project.zentao_id")}},[i("el-input",{attrs:{autocomplete:"off"},model:{value:e.form.zentaoId,callback:function(t){e.$set(e.form,"zentaoId",t)},expression:"form.zentaoId"}}),i("ms-instructions-icon",{attrs:{effect:"light"}},[[e._v(" 禅道流程：产品-项目 | 产品-迭代 | 产品-冲刺 | 项目-迭代 | 项目-冲刺 "),i("br"),i("br"),e._v(' 根据 "后台 -> 自定义 -> 流程" 查看对应流程，根据流程填写ID '),i("br"),i("br"),e._v(" 产品-项目 | 产品-迭代 | 产品-冲刺 需要填写产品ID "),i("br"),i("br"),e._v(" 项目-迭代 | 项目-冲刺 需要填写项目ID ")]],2)],1):e._e(),e.azuredevops?i("el-form-item",{attrs:{"label-width":e.labelWidth,label:e.$t("project.azureDevops_id")}},[i("el-input",{attrs:{autocomplete:"off"},model:{value:e.form.azureDevopsId,callback:function(t){e.$set(e.form,"azureDevopsId",t)},expression:"form.azureDevopsId"}})],1):e._e(),i("el-form-item",{attrs:{"label-width":e.labelWidth,label:e.$t("project.repeatable"),prop:"repeatable"}},[i("el-switch",{model:{value:e.form.repeatable,callback:function(t){e.$set(e.form,"repeatable",t)},expression:"form.repeatable"}})],1),i("el-form-item",{attrs:{"label-width":e.labelWidth,label:"测试用例自定义ID",prop:"customNum"}},[i("el-switch",{model:{value:e.form.customNum,callback:function(t){e.$set(e.form,"customNum",t)},expression:"form.customNum"}})],1),i("el-form-item",{attrs:{"label-width":e.labelWidth,label:"场景自定义ID",prop:"scenarioCustomNum"}},[i("el-switch",{model:{value:e.form.scenarioCustomNum,callback:function(t){e.$set(e.form,"scenarioCustomNum",t)},expression:"form.scenarioCustomNum"}})],1)],1)],1),i("ms-delete-confirm",{ref:"deleteConfirm",attrs:{title:e.$t("project.delete")},on:{delete:e._handleDelete}}),i("api-environment-config",{ref:"environmentConfig"}),i("ms-jar-config",{ref:"jarConfig"}),i("ms-resource-files",{ref:"resourceFiles"})],1)},a=[],r=(o("4c1e"),o("fee8"),o("d1ba"),o("8ea3"),o("10dd"),o("978f")),s=o("5422"),n=o("59d9"),l=o("10b9"),c=o("1c98"),m=o("15bc"),p=o("495f"),u=o("1b11"),d=o("489a"),f=o("a369"),b=o("be8e"),h=o("c134"),g=o("0565"),v=o("4abd"),$=o("1420"),_=o("ae75"),j=o("e077"),w=o("8fd6"),E=o("a18a"),T=o("8852"),C=o("60e1"),O={name:"MsProject",components:{MsInstructionsIcon:C["a"],TemplateSelect:E["a"],MsResourceFiles:w["a"],MsTableButton:_["a"],MsJarConfig:$["a"],TemplateComponent:g["a"],ApiEnvironmentConfig:h["a"],MsTableOperatorButton:b["a"],MsDeleteConfirm:f["a"],MsMainContainer:d["a"],MsContainer:u["a"],MsTableOperator:c["a"],MsCreateBox:r["a"],MsTablePagination:n["a"],MsTableHeader:l["a"],MsDialogFooter:m["a"]},data:function(){return{createVisible:!1,result:{},btnTips:this.$t("project.create"),title:this.$t("project.create"),condition:{components:T["e"]},items:[],tapd:!1,jira:!1,zentao:!1,azuredevops:!1,form:{},currentPage:1,pageSize:10,total:0,userFilters:[],rules:{name:[{required:!0,message:this.$t("project.input_name"),trigger:"blur"},{min:2,max:50,message:this.$t("commons.input_limit",[2,50]),trigger:"blur"}],description:[{max:250,message:this.$t("commons.input_limit",[0,250]),trigger:"blur"}]},screenHeight:"calc(100vh - 195px)",labelWidth:"150px"}},props:{baseUrl:{type:String}},mounted:function(){"project"===this.$route.path.split("/")[2]&&"create"===this.$route.path.split("/")[3]&&(this.create(),this.$router.replace("/setting/project/all")),this.list(),this.getMaintainerOptions()},activated:function(){this.list()},computed:{currentUser:function(){return Object(p["h"])()}},destroyed:function(){this.createVisible=!1},methods:{getMaintainerOptions:function(){var e=this;Object(p["j"])();this.$post("/user/project/member/tester/list",{projectId:Object(p["g"])()},(function(t){e.userFilters=t.data.map((function(e){return{text:e.name,value:e.id}}))}))},create:function(){var e=Object(p["j"])();if(this.getOptions(),!e)return this.$warning(this.$t("project.please_choose_workspace")),!1;this.title=this.$t("project.create"),this.createVisible=!0,this.form={}},getOptions:function(){this.$refs.issueTemplate&&this.$refs.issueTemplate.getTemplateOptions(),this.$refs.caseTemplate&&this.$refs.caseTemplate.getTemplateOptions()},edit:function(e){var t=this;this.title=this.$t("project.edit"),this.getOptions(),this.createVisible=!0,Object(p["v"])(this.handleClose),this.form=Object.assign({},e),this.$get("/service/integration/all/"+Object(p["h"])().lastOrganizationId,(function(e){var o=e.data,i=o.map((function(e){return e.platform}));-1!==i.indexOf("Tapd")&&(t.tapd=!0),-1!==i.indexOf("Jira")&&(t.jira=!0),-1!==i.indexOf("Zentao")&&(t.zentao=!0),-1!==i.indexOf("AzureDevops")&&(t.azuredevops=!0)}))},submit:function(e){var t=this;this.$refs[e].validate((function(e){if(!e)return!1;var o="add";t.form.id&&(o="update");var i=document.location.protocol;i=i.substring(0,i.indexOf(":")),t.form.protocal=i,t.form.workspaceId=Object(p["j"])(),t.form.createUser=Object(p["i"])(),t.result=t.$post("/project/"+o,t.form,(function(){t.createVisible=!1,t.list(),s["Message"].success(t.$t("commons.save_success"))}))}))},openJarConfig:function(){this.$refs.jarConfig.open()},openFiles:function(e){this.$refs.resourceFiles.open(e)},handleDelete:function(e){this.$refs.deleteConfirm.open(e)},_handleDelete:function(e){var t=this;this.$confirm(this.$t("project.delete_tip"),"",{confirmButtonText:this.$t("commons.confirm"),cancelButtonText:this.$t("commons.cancel"),type:"warning"}).then((function(){t.$get("/project/delete/"+e.id,(function(){e.id===Object(p["g"])()&&(localStorage.removeItem(v["u"]),t.$post("/user/update/current",{id:Object(p["h"])().id,lastProjectId:""})),s["Message"].success(t.$t("commons.delete_success")),t.list()}))})).catch((function(){t.$message({type:"info",message:t.$t("commons.delete_cancelled")})}))},handleClose:function(){Object(p["z"])(this.handleClose),this.createVisible=!1,this.tapd=!1,this.jira=!1,this.zentao=!1,this.azuredevops=!1},search:function(){this.list()},list:function(){var e=this;this.condition.projectId=Object(p["g"])();var t="/project/list/"+this.currentPage+"/"+this.pageSize;this.result=this.$post(t,this.condition,(function(t){var o=t.data;e.items=o.listObject,e.total=o.itemCount}))},sort:function(e){Object(j["d"])(e,this.condition),this.list()},filter:function(e){Object(j["a"])(e,this.condition),this.list()},openEnvironmentConfig:function(e){this.$refs.environmentConfig.open(e.id)}},created:function(){document.addEventListener("keydown",this.handleEvent)},beforeDestroy:function(){document.removeEventListener("keydown",this.handleEvent)}},x=O,D=(o("98ac"),o("cba8")),I=Object(D["a"])(x,i,a,!1,null,"9b888c62",null);t["default"]=I.exports},cb88:function(e,t,o){}}]);