(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e8dcf118"],{1987:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",["Prepare"==t.value?a("ms-tag",{attrs:{type:"info",content:t.$t("test_track.plan.plan_status_prepare")}}):t._e(),"Underway"==t.value?a("ms-tag",{attrs:{type:"primary",content:t.$t("test_track.plan.plan_status_running")}}):t._e(),"Finished"==t.value?a("ms-tag",{attrs:{type:"warning",content:t.$t("test_track.plan.plan_status_finished")}}):t._e(),"Completed"==t.value?a("ms-tag",{attrs:{type:"success",content:t.$t("test_track.plan.plan_status_completed")}}):t._e(),"Trash"===t.value?a("ms-tag",{attrs:{type:"danger",effect:"plain",content:t.$t("test_track.plan.plan_status_trash")}}):t._e()],1)},s=[],r=a("aa18"),n={name:"PlanStatusTableItem",components:{MsTag:r["a"]},props:{value:{type:String}}},o=n,l=a("cba8"),c=Object(l["a"])(o,i,s,!1,null,"357802a2",null);e["a"]=c.exports},"2ad6":function(t,e,a){"use strict";a.d(e,"a",(function(){return s})),a.d(e,"c",(function(){return r})),a.d(e,"b",(function(){return n}));var i=a("0692"),s=(i["default"].t("commons.id"),i["default"].t("commons.name"),i["default"].t("test_track.case.priority"),i["default"].t("test_track.case.status"),i["default"].t("commons.tag"),i["default"].t("test_track.case.module"),i["default"].t("commons.update_time"),i["default"].t("commons.create_user"),i["default"].t("custom_field.case_maintainer"),[{id:"name",label:i["default"].t("test_track.review.review_name")},{id:"reviewer",label:i["default"].t("test_track.review.reviewer")},{id:"projectName",label:i["default"].t("test_track.review.review_project")},{id:"creatorName",label:i["default"].t("test_track.review.review_creator")},{id:"status",label:i["default"].t("test_track.review.review_status")},{id:"createTime",label:i["default"].t("commons.create_time")},{id:"endTime",label:i["default"].t("test_track.review.end_time")},{id:"tags",label:"标签"}]),r=[{id:"name",label:i["default"].t("commons.name")},{id:"userName",label:i["default"].t("test_track.plan.plan_principal")},{id:"status",label:i["default"].t("test_track.plan.plan_status")},{id:"stage",label:i["default"].t("test_track.plan.plan_stage")},{id:"testRate",label:i["default"].t("test_track.home.test_rate")},{id:"projectName",label:i["default"].t("test_track.plan.plan_project")},{id:"plannedStartTime",label:i["default"].t("test_track.plan.planned_start_time")},{id:"plannedEndTime",label:i["default"].t("test_track.plan.planned_end_time")},{id:"actualStartTime",label:i["default"].t("test_track.plan.actual_start_time")},{id:"actualEndTime",label:i["default"].t("test_track.plan.actual_end_time")},{id:"tags",label:i["default"].t("commons.tag")},{id:"executionTimes",label:i["default"].t("commons.execution_times")},{id:"passRate",label:i["default"].t("commons.pass_rate")},{id:"createUser",label:i["default"].t("commons.create_user")}],n=(i["default"].t("api_test.definition.api_name"),i["default"].t("api_test.definition.api_type"),i["default"].t("api_test.definition.api_principal"),i["default"].t("api_test.definition.api_path"),i["default"].t("commons.tag"),i["default"].t("api_test.definition.api_last_time"),i["default"].t("api_test.definition.api_case_number"),i["default"].t("api_test.definition.api_case_status"),i["default"].t("api_test.definition.api_case_passing_rate"),i["default"].t("api_test.definition.api_status"),[{id:"num",label:i["default"].t("commons.id")},{id:"name",label:i["default"].t("commons.name")},{id:"priority",label:i["default"].t("test_track.case.priority")},{id:"type",label:i["default"].t("test_track.case.type")},{id:"nodePath",label:i["default"].t("test_track.case.module")},{id:"projectName",label:i["default"].t("test_track.review.review_project")},{id:"reviewerName",label:i["default"].t("test_track.review.reviewer")},{id:"reviewStatus",label:i["default"].t("test_track.case.status")},{id:"updateTime",label:i["default"].t("commons.update_time")},{id:"maintainer",label:i["default"].t("custom_field.case_maintainer")}]);i["default"].t("commons.id"),i["default"].t("commons.name"),i["default"].t("test_track.case.priority"),i["default"].t("test_track.case.type"),i["default"].t("commons.tag"),i["default"].t("test_track.case.module"),i["default"].t("test_track.review.review_project"),i["default"].t("test_track.issue.issue"),i["default"].t("test_track.plan_view.executor"),i["default"].t("test_track.plan_view.execute_result"),i["default"].t("commons.update_time"),i["default"].t("api_test.definition.request.responsible"),i["default"].t("commons.id"),i["default"].t("api_test.definition.api_name"),i["default"].t("test_track.case.priority"),i["default"].t("api_test.definition.api_path"),i["default"].t("api_test.definition.api_last_time"),i["default"].t("commons.tag"),i["default"].t("api_test.definition.request.responsible"),i["default"].t("commons.create_time"),i["default"].t("commons.id"),i["default"].t("commons.name"),i["default"].t("load_test.project_name"),i["default"].t("load_test.user_name"),i["default"].t("commons.create_time"),i["default"].t("commons.status"),i["default"].t("test_track.plan.load_case.execution_status"),i["default"].t("test_track.plan.load_case.report"),i["default"].t("commons.id"),i["default"].t("api_test.automation.scenario_name"),i["default"].t("api_test.automation.case_level"),i["default"].t("api_test.automation.tag"),i["default"].t("api_test.automation.creator"),i["default"].t("api_test.automation.update_time"),i["default"].t("api_test.automation.success"),i["default"].t("api_test.automation.fail"),i["default"].t("api_test.automation.passing_rate"),i["default"].t("api_test.definition.request.responsible"),i["default"].t("commons.create_time")},3586:function(t,e,a){},"8e72":function(t,e,a){"use strict";a("c1f7")},aa08:function(t,e,a){"use strict";var i=a("88d4"),s=a("ce5b"),r=a("e544"),n=a("8e74"),o=a("3ffc"),l=a("e38b"),c=s("".indexOf);i({target:"String",proto:!0,forced:!l("includes")},{includes:function(t){return!!~c(o(n(this)),o(r(t)),arguments.length>1?arguments[1]:void 0)}})},b85d:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-row",{staticClass:"status-button",attrs:{type:"flex",justify:"start",gutter:20}},[a("el-col",[a("el-button",{attrs:{type:"info",round:"",size:"mini",icon:"Prepare"==t.status?"el-icon-check":""},on:{click:function(e){return t.setStatus("Prepare")}}},[t._v(" "+t._s(t.$t("test_track.plan.plan_status_prepare")))])],1),a("el-col",[a("el-button",{attrs:{type:"primary",round:"",size:"mini",icon:"Underway"==t.status?"el-icon-check":""},on:{click:function(e){return t.setStatus("Underway")}}},[t._v(" "+t._s(t.$t("test_track.plan.plan_status_running")))])],1),a("el-col",[a("el-button",{attrs:{type:"success",round:"",size:"mini",icon:"Completed"==t.status?"el-icon-check":""},on:{click:function(e){return t.setStatus("Completed")}}},[t._v(" "+t._s(t.$t("test_track.plan.plan_status_completed")))])],1),a("el-col",[a("el-button",{attrs:{type:"warning",round:"",size:"mini",icon:"Finished"==t.status?"el-icon-check":""},on:{click:function(e){return t.setStatus("Finished")}}},[t._v(" "+t._s(t.$t("test_track.plan.plan_status_finished")))])],1)],1)},s=[],r={name:"TestPlanStatusButton",props:{status:{type:String}},methods:{setStatus:function(t){this.$emit("statusChange",t)}}},n=r,o=(a("debb"),a("cba8")),l=Object(o["a"])(n,i,s,!1,null,"49f70368",null);e["a"]=l.exports},c1f7:function(t,e,a){},ddfe:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"el-input-tag input-tag-wrapper",class:[t.size?"el-input-tag--"+t.size:""],staticStyle:{height:"auto"},on:{click:t.foucusTagInput}},[t._l(t.innerTags,(function(e,i){return a("el-tag",t._b({key:e,staticClass:"ms-top",attrs:{type:"info",size:t.size,closable:!t.readOnly,"disable-transitions":!1},on:{close:function(e){return t.remove(i)}}},"el-tag",t.$attrs,!1),[t._v(" "+t._s(e&&e.length>10?e.substring(0,10)+"...":e)+" ")])})),a("input",{directives:[{name:"model",rawName:"v-model",value:t.newTag,expression:"newTag"}],staticClass:"tag-input el-input",attrs:{disabled:t.readOnly,placeholder:t.$t("commons.tag_tip")},domProps:{value:t.newTag},on:{keydown:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"delete",[8,46],e.key,["Backspace","Delete","Del"])?null:(e.stopPropagation(),t.removeLastTag.apply(null,arguments))},t.addNew],blur:t.addNew,input:function(e){e.target.composing||(t.newTag=e.target.value)}}})],2)},s=[],r=a("045d"),n=(a("2788"),a("aa08"),a("89a8"),a("1a91"),a("4c1e"),a("fee8"),a("cfe5"),a("993f"),{name:"MsInputTag",props:{currentScenario:{},addTagOnKeys:{type:Array,default:function(){return[13,188,9]}},readOnly:{type:Boolean,default:!1},size:{type:String,default:"small"}},created:function(){this.currentScenario.tags||(this.currentScenario.tags=[])},data:function(){return{newTag:"",innerTags:this.currentScenario.tags?Object(r["a"])(this.currentScenario.tags):[]}},watch:{innerTags:function(){this.currentScenario.tags=this.innerTags}},methods:{foucusTagInput:function(){this.readOnly||!this.$el.querySelector(".tag-input")?console.log():this.$el.querySelector(".tag-input").focus()},addNew:function(t){var e=this;if(!t||this.addTagOnKeys.includes(t.keyCode)||"blur"===t.type){t&&(t.stopPropagation(),t.preventDefault());var a=!1;this.newTag.includes(",")?this.newTag.split(",").forEach((function(t){e.addTag(t.trim())&&(a=!0)})):this.addTag(this.newTag.trim())&&(a=!0),a&&(this.tagChange(),this.newTag="")}},addTag:function(t){return t=t.trim(),!(!t||this.innerTags.includes(t))&&(this.innerTags.push(t),!0)},remove:function(t){this.innerTags.splice(t,1),this.tagChange()},removeLastTag:function(){this.newTag||(this.innerTags.pop(),this.tagChange())},tagChange:function(){this.$emit("input",this.innerTags)}}}),o=n,l=(a("8e72"),a("cba8")),c=Object(l["a"])(o,i,s,!1,null,"1ab1373a",null);e["a"]=c.exports},debb:function(t,e,a){"use strict";a("3586")},e970:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ms-container",[a("ms-main-container",[a("test-case-review-list",{ref:"caseReviewList",on:{openCaseReviewEditDialog:t.openCaseReviewEditDialog,caseReviewEdit:t.openCaseReviewEditDialog}})],1),a("test-case-review-edit",{ref:"caseReviewEditDialog",on:{refresh:t.refreshCaseReviewList}})],1)},s=[],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-card",{directives:[{name:"loading",rawName:"v-loading",value:t.result.loading,expression:"result.loading"}],staticClass:"table-card",scopedSlots:t._u([{key:"header",fn:function(){return[a("ms-table-header",{attrs:{"create-permission":["PROJECT_TRACK_REVIEW:READ+CREATE"],condition:t.condition,"create-tip":t.$t("test_track.review.create_review")},on:{"update:condition":function(e){t.condition=e},search:t.initTableData,create:t.testCaseReviewCreate}})]},proxy:!0}])},[a("el-table",{staticClass:"adjust-table",attrs:{border:"",data:t.tableData,height:t.screenHeight},on:{"filter-change":t.filter,"sort-change":t.sort,"row-click":t.intoReview}},[t._l(t.tableLabel,(function(e,i){return["name"==e.id?a("el-table-column",{key:i,attrs:{prop:"name",label:t.$t("test_track.review.review_name"),"show-overflow-tooltip":""}}):t._e(),"reviewer"==e.id?a("el-table-column",{key:i,attrs:{prop:"reviewer",label:t.$t("test_track.review.reviewer"),"show-overflow-tooltip":""}}):t._e(),"projectName"==e.id?a("el-table-column",{key:i,attrs:{prop:"projectName",label:t.$t("test_track.review.review_project"),"show-overflow-tooltip":""}}):t._e(),"creatorName"==e.id?a("el-table-column",{key:i,attrs:{prop:"creatorName",label:t.$t("test_track.review.review_creator"),"show-overflow-tooltip":""}}):t._e(),"status"==e.id?a("el-table-column",{key:i,attrs:{prop:"status","column-key":"status",label:t.$t("test_track.review.review_status"),"show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(t){return[a("span",{staticClass:"el-dropdown-link"},[a("plan-status-table-item",{attrs:{value:t.row.status}})],1)]}}],null,!0)}):t._e(),"tags"==e.id?a("el-table-column",{key:i,attrs:{prop:"tags",label:t.$t("api_test.automation.tag")},scopedSlots:t._u([{key:"default",fn:function(e){return t._l(e.row.tags,(function(t,e){return a("ms-tag",{key:e,staticStyle:{"margin-left":"0px","margin-right":"2px"},attrs:{type:"success",effect:"plain",content:t}})}))}}],null,!0)}):t._e(),"createTime"==e.id?a("el-table-column",{key:i,attrs:{prop:"createTime",label:t.$t("commons.create_time"),"show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(t._f("timestampFormatDate")(e.row.createTime)))])]}}],null,!0)}):t._e(),"endTime"==e.id?a("el-table-column",{key:i,attrs:{prop:"endTime",label:t.$t("test_track.review.end_time"),"show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(t._f("timestampFormatDate")(e.row.endTime)))])]}}],null,!0)}):t._e()]})),a("el-table-column",{attrs:{"min-width":"100",label:t.$t("commons.operating")},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",[a("ms-table-operator",{attrs:{"edit-permission":["PROJECT_TRACK_REVIEW:READ+EDIT"],"delete-permission":["PROJECT_TRACK_REVIEW:READ+DELETE"]},on:{editClick:function(a){return t.handleEdit(e.row)},deleteClick:function(a){return t.handleDelete(e.row)}}})],1)]}}])},[a("template",{slot:"header"},[a("header-label-operate",{on:{exec:t.customHeader}})],1)],2),a("header-custom",{ref:"headerCustom",attrs:{initTableData:t.initTableData,optionalFields:t.headerItems,type:t.type}})],2),a("ms-table-pagination",{attrs:{change:t.initTableData,"current-page":t.currentPage,"page-size":t.pageSize,total:t.total},on:{"update:currentPage":function(e){t.currentPage=e},"update:current-page":function(e){t.currentPage=e},"update:pageSize":function(e){t.pageSize=e},"update:page-size":function(e){t.pageSize=e}}}),a("ms-delete-confirm",{ref:"deleteConfirm",attrs:{title:t.$t("test_track.review.delete")},on:{delete:t._handleDelete}})],1)},n=[],o=(a("89a8"),a("1a91"),a("8ea3"),a("5a05"),a("1926"),a("10dd"),a("87d5"),a("a369")),l=a("1c98"),c=a("be8e"),u=a("15bc"),d=a("10b9"),p=a("978f"),m=a("59d9"),f=a("495f"),_=a("e077"),h=a("1987"),g=a("2ad6"),v=a("4abd"),b=a("6191"),w=a("aa2a"),k=a("aa18"),T={name:"TestCaseReviewList",components:{MsTag:k["a"],HeaderLabelOperate:w["a"],HeaderCustom:b["a"],MsDeleteConfirm:o["a"],MsTableOperator:l["a"],MsTableOperatorButton:c["a"],MsDialogFooter:u["a"],MsTableHeader:d["a"],MsCreateBox:p["a"],MsTablePagination:m["a"],PlanStatusTableItem:h["a"]},data:function(){return{type:v["G"],headerItems:g["a"],tableLabel:[],tableHeaderKey:"TEST_CASE_REVIEW",result:{},condition:{},tableData:[],isTestManagerOrTestUser:!1,currentPage:1,pageSize:10,total:0,screenHeight:"calc(100vh - 200px)",statusFilters:[{text:this.$t("test_track.plan.plan_status_prepare"),value:"Prepare"},{text:this.$t("test_track.plan.plan_status_running"),value:"Underway"},{text:this.$t("test_track.plan.plan_status_completed"),value:"Completed"}]}},watch:{$route:function(t){t.path.indexOf("/track/review/all")>=0&&this.initTableData()}},created:function(){this.isTestManagerOrTestUser=!0;var t=this.getSortField();t&&(this.condition.orders=t),this.initTableData()},computed:{projectId:function(){return Object(f["g"])()}},methods:{customHeader:function(){var t=Object(_["i"])(this.tableLabel);this.$refs.headerCustom.open(t)},initTableData:function(){var t=this,e=Object(f["j"])();this.condition.workspaceId=e,this.projectId&&(this.condition.projectId=this.projectId,this.result=this.$post("/test/case/review/list/"+this.currentPage+"/"+this.pageSize,this.condition,(function(e){var a=e.data;t.total=a.itemCount,t.tableData=a.listObject,t.tableData.forEach((function(t){t.tags&&t.tags.length>0&&(t.tags=JSON.parse(t.tags))}));for(var i=function(e){var a="/test/case/review/project";t.$post(a,{id:t.tableData[e].id},(function(a){var i=a.data,s=i.filter((function(a){return a.id!==t.tableData[e].projectId})).map((function(t){return t.id}));t.$set(t.tableData[e],"projectIds",s)})),t.$post("/test/case/review/reviewer",{id:t.tableData[e].id},(function(a){var i=a.data,s=i.map((function(t){return t.name})).join("、"),r=i.map((function(t){return t.id}));t.$set(t.tableData[e],"reviewer",s),t.$set(t.tableData[e],"userIds",r)}))},s=0;s<t.tableData.length;s++)i(s)})),Object(_["q"])(this,v["G"]))},intoReview:function(t){this.$router.push("/track/review/view/"+t.id)},testCaseReviewCreate:function(){this.projectId?this.$emit("openCaseReviewEditDialog"):this.$warning(this.$t("commons.check_project_tip"))},handleEdit:function(t){this.$emit("caseReviewEdit",t)},statusChange:function(){},handleDelete:function(t){this.$refs.deleteConfirm.open(t)},_handleDelete:function(t){var e=this,a=t.id;this.$get("/test/case/review/delete/"+a,(function(){e.initTableData(),e.$success(e.$t("commons.delete_success"))}))},filter:function(t){Object(_["a"])(t,this.condition),this.initTableData()},sort:function(t){this.condition.orders&&(this.condition.orders=[]),Object(_["d"])(t,this.condition),this.saveSortField(this.tableHeaderKey,this.condition.orders),this.initTableData()},saveSortField:function(t,e){Object(_["z"])(t,JSON.stringify(e))},getSortField:function(){var t=Object(_["r"])(this.tableHeaderKey),e=null;if(t)try{e=JSON.parse(t)}catch(a){return null}return e}}},y=T,$=a("cba8"),j=Object($["a"])(y,r,n,!1,null,"50d9a494",null),C=j.exports,S=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-dialog",{directives:[{name:"loading",rawName:"v-loading",value:t.result.loading,expression:"result.loading"}],attrs:{"close-on-click-modal":!1,title:"edit"===t.operationType?t.$t("test_track.review.edit_review"):t.$t("test_track.review.create_review"),visible:t.dialogFormVisible,width:"60%"},on:{"update:visible":function(e){t.dialogFormVisible=e},close:t.close},scopedSlots:t._u([{key:"footer",fn:function(){return[a("div",{staticClass:"dialog-footer"},[a("el-button",{on:{click:function(e){t.dialogFormVisible=!1}}},[t._v(" "+t._s(t.$t("test_track.cancel"))+" ")]),a("el-button",{attrs:{type:"primary"},on:{click:t.saveReview}},[t._v(" "+t._s(t.$t("test_track.confirm"))+" ")]),a("el-button",{attrs:{type:"primary"},on:{click:t.reviewInfo}},[t._v(" "+t._s(t.$t("test_track.planning_execution"))+" ")])],1)]},proxy:!0}])},[a("el-form",{ref:"reviewForm",attrs:{model:t.form,rules:t.rules}},[a("el-row",[a("el-col",{attrs:{span:10}},[a("el-form-item",{attrs:{placeholder:t.$t("test_track.review.input_review_name"),label:t.$t("test_track.review.review_name"),"label-width":t.formLabelWidth,prop:"name"}},[a("el-input",{model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1)],1),a("el-col",{attrs:{span:12,offset:1}},[a("el-form-item",{attrs:{label:t.$t("commons.tag"),"label-width":t.formLabelWidth,prop:"tag"}},[t.isStepTableAlive?a("ms-input-tag",{ref:"tag",attrs:{currentScenario:t.form,size:"-"}}):t._e()],1)],1)],1),a("el-row",[a("el-col",{attrs:{span:10}},[a("el-form-item",{attrs:{label:t.$t("test_track.review.reviewer"),"label-width":t.formLabelWidth,prop:"userIds"}},[a("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:t.$t("test_track.review.input_reviewer"),filterable:"",multiple:""},model:{value:t.form.userIds,callback:function(e){t.$set(t.form,"userIds",e)},expression:"form.userIds"}},t._l(t.reviewerOptions,(function(t){return a("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})})),1)],1)],1),a("el-col",{attrs:{span:12,offset:1}},[a("el-form-item",{attrs:{label:t.$t("test_track.review.end_time"),"label-width":t.formLabelWidth,prop:"endTime"}},[a("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"datetime",placeholder:t.$t("commons.select_date")},on:{change:t.endTimeChange},model:{value:t.form.endTime,callback:function(e){t.$set(t.form,"endTime",e)},expression:"form.endTime"}})],1)],1)],1),a("el-row",{staticStyle:{"margin-top":"10px"},attrs:{type:"flex",justify:"left"}},[a("el-col",{attrs:{span:23}},[a("el-form-item",{attrs:{label:t.$t("commons.description"),"label-width":t.formLabelWidth,prop:"description"}},[a("el-input",{attrs:{type:"textarea",autosize:{minRows:2,maxRows:4},rows:2,placeholder:t.$t("commons.input_content")},model:{value:t.form.description,callback:function(e){t.$set(t.form,"description",e)},expression:"form.description"}})],1)],1)],1),"edit"===t.operationType?a("el-row",{staticStyle:{"margin-top":"10px"},attrs:{type:"flex",justify:"left"}},[a("el-col",{attrs:{span:19}},[a("el-form-item",{attrs:{label:t.$t("test_track.review.review_status"),"label-width":t.formLabelWidth,prop:"status"}},[a("test-plan-status-button",{attrs:{status:t.form.status},on:{statusChange:t.statusChange}})],1)],1)],1):t._e()],1)],1)],1)},O=[],D=(a("cfe5"),a("304d"),a("f257"),a("b85d")),E=a("ddfe"),R={name:"TestCaseReviewEdit",components:{MsInputTag:E["a"],TestPlanStatusButton:D["a"]},data:function(){return{isStepTableAlive:!0,dialogFormVisible:!1,result:{},form:{name:"",projectIds:[],userIds:[],stage:"",description:"",endTime:""},dbProjectIds:[],rules:{name:[{required:!0,message:this.$t("test_track.review.input_review_name"),trigger:"blur"},{max:30,message:this.$t("test_track.length_less_than")+"30",trigger:"blur"}],userIds:[{required:!0,message:this.$t("test_track.review.input_reviewer"),trigger:"change"}],stage:[{required:!0,message:this.$t("test_track.plan.input_plan_stage"),trigger:"change"}],description:[{max:200,message:this.$t("test_track.length_less_than")+"200",trigger:"blur"}],endTime:[{required:!0,message:"请选择截止时间",trigger:"blur"}]},formLabelWidth:"100px",operationType:"",reviewerOptions:[]}},computed:{projectId:function(){return Object(f["g"])()}},methods:{reload:function(){var t=this;this.isStepTableAlive=!1,this.$nextTick((function(){return t.isStepTableAlive=!0}))},openCaseReviewEditDialog:function(t){if(this.resetForm(),this.setReviewerOptions(),this.operationType="save",t){this.operationType="edit";var e={};Object.assign(e,t),Object.assign(this.form,e),this.dbProjectIds=JSON.parse(JSON.stringify(this.form.projectIds))}else this.form.tags=[];Object(f["v"])(this.close),this.dialogFormVisible=!0,this.reload()},reviewInfo:function(){var t=this;this.$refs["reviewForm"].validate((function(e){if(!e)return!1;var a={};if(Object.assign(a,t.form),a.name=a.name.trim(),t.form.tags instanceof Array&&(t.form.tags=JSON.stringify(t.form.tags)),a.tags=t.form.tags,""!==a.name)return!!t.compareTime((new Date).getTime(),t.form.endTime)&&(a.projectId=t.projectId,void(t.projectId&&(t.result=t.$post("/test/case/review/"+t.operationType,a,(function(e){t.dialogFormVisible=!1,t.$router.push("/track/review/view/"+e.data)})))));t.$warning(t.$t("test_track.plan.input_plan_name"))}))},saveReview:function(){var t=this;this.$refs["reviewForm"].validate((function(e){if(!e)return!1;var a={};if(Object.assign(a,t.form),a.name=a.name.trim(),t.form.tags instanceof Array&&(t.form.tags=JSON.stringify(t.form.tags)),a.tags=t.form.tags,""!==a.name)return!!t.compareTime((new Date).getTime(),t.form.endTime)&&(a.projectId=t.projectId,void(t.projectId&&(t.result=t.$post("/test/case/review/"+t.operationType,a,(function(){t.$success(t.$t("commons.save_success")),t.dialogFormVisible=!1,t.$emit("refresh")})))));t.$warning(t.$t("test_track.plan.input_plan_name"))}))},setReviewerOptions:function(){var t=this;this.result=this.$post("/user/project/member/tester/list",{projectId:Object(f["g"])()},(function(e){t.reviewerOptions=e.data}))},statusChange:function(t){this.form.status=t,this.$forceUpdate()},close:function(){Object(f["z"])(this.close),this.dialogFormVisible=!1},resetForm:function(){var t=this;this.$refs["reviewForm"]&&this.$refs["reviewForm"].validate((function(){return t.$refs["reviewForm"].resetFields(),t.form.name="",t.form.stage="",t.form.endTime="",t.form.description="",t.form.status=null,t.form.projectIds=[],t.form.userIds=[],!0}))},endTimeChange:function(t){t&&(this.form.endTime=this.form.endTime.getTime(),this.compareTime((new Date).getTime(),t.getTime()))},compareTime:function(t,e){return!(t>e)||(this.$warning("截止时间不能早于当前时间！"),!1)}}},I=R,x=Object($["a"])(I,S,O,!1,null,"122a8ea4",null),F=x.exports,P=a("489a"),N=a("1b11"),z={name:"TestCaseReview",components:{MsMainContainer:P["a"],MsContainer:N["a"],TestCaseReviewList:C,TestCaseReviewEdit:F},data:function(){return{}},computed:{projectId:function(){return Object(f["g"])()}},mounted:function(){this.$route.path.indexOf("/track/review/create")>=0&&(this.openCaseReviewEditDialog(),this.$router.push("/track/review/all"))},watch:{$route:function(t){if(t.path.indexOf("/track/review/create")>=0){if(!this.projectId)return void this.$warning(this.$t("commons.check_project_tip"));this.openCaseReviewEditDialog(),this.$router.push("/track/review/all")}}},methods:{openCaseReviewEditDialog:function(t){this.$refs.caseReviewEditDialog.openCaseReviewEditDialog(t)},refreshCaseReviewList:function(){this.$refs.caseReviewList.condition={},this.$refs.caseReviewList.initTableData()}}},L=z,M=Object($["a"])(L,i,s,!1,null,"3a7d2084",null);e["default"]=M.exports}}]);