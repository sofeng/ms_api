(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-02ed7a4c"],{"0273":function(t,e,a){"use strict";a("084d")},"0452":function(t,e,a){},"084d":function(t,e,a){},1253:function(t,e,a){},"282c":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-card",{directives:[{name:"loading",rawName:"v-loading",value:t.result.loading,expression:"result.loading"}],staticClass:"table-card",attrs:{"body-style":"padding:10px;"},scopedSlots:t._u([{key:"header",fn:function(){return[a("span",{staticClass:"title"},[t._v(" "+t._s(t.$t("api_test.home_page.failed_case_list.title"))+" ")])]},proxy:!0}])},[a("el-table",{staticClass:"adjust-table table-content",attrs:{border:"",data:t.tableData,height:"300px"}},[a("el-table-column",{attrs:{prop:"sortIndex",label:t.$t("api_test.home_page.failed_case_list.table_coloum.index"),width:"100","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"caseName",label:t.$t("api_test.home_page.failed_case_list.table_coloum.case_name"),width:"150"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.row;return[a("el-link",{attrs:{type:"info"},on:{click:function(e){return t.redirect(s.caseType,s.id)}}},[t._v(" "+t._s(s.caseName)+" ")])]}}])}),a("el-table-column",{attrs:{prop:"caseType","column-key":"caseType",label:t.$t("api_test.home_page.failed_case_list.table_coloum.case_type"),width:"150","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return["apiCase"==e.row.caseType?a("ms-tag",{attrs:{type:"success",effect:"plain",content:t.$t("api_test.home_page.failed_case_list.table_value.case_type.api")}}):t._e(),"scenario"==e.row.caseType?a("ms-tag",{attrs:{type:"warning",effect:"plain",content:t.$t("api_test.home_page.failed_case_list.table_value.case_type.scene")}}):t._e(),"load"==e.row.caseType?a("ms-tag",{attrs:{type:"danger",effect:"plain",content:t.$t("api_test.home_page.failed_case_list.table_value.case_type.load")}}):t._e()]}}])}),a("el-table-column",{attrs:{prop:"testPlan",label:t.$t("api_test.home_page.failed_case_list.table_coloum.test_plan")},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.row;return t._l(s.testPlanDTOList,(function(e,s){return a("div",{key:s},[a("el-link",{attrs:{type:"info"},on:{click:function(a){return t.redirect("testPlanEdit",e.id)}}},[t._v(" "+t._s(e.name)+"; ")])],1)}))}}])}),a("el-table-column",{attrs:{prop:"failureTimes",label:t.$t("api_test.home_page.failed_case_list.table_coloum.failure_times"),width:"100","show-overflow-tooltip":""}})],1)],1)},i=[],n=(a("4c1e"),a("6df5"),a("aa18")),o=a("495f"),r={name:"MsFailureTestCaseList",components:{MsTag:n["a"]},data:function(){return{result:{},tableData:[],loading:!1}},computed:{projectId:function(){return Object(o["g"])()}},methods:{search:function(){var t=this;this.projectId&&(this.result=this.$get("/api/faliureCaseAboutTestPlan/"+this.projectId+"/10",(function(e){t.tableData=e.data})))},redirect:function(t,e){switch(t){case"testPlanEdit":this.$emit("redirectPage","testPlanEdit",null,e);break;case"apiCase":this.$emit("redirectPage","api","apiTestCase","single:"+e);break;case"scenario":this.$emit("redirectPage","scenario","scenario","edit:"+e);break}}},created:function(){this.search()},activated:function(){this.search()}},l=r,c=(a("32b8"),a("cba8")),d=Object(c["a"])(l,s,i,!1,null,"7924884b",null);e["a"]=d.exports},2975:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-card",{directives:[{name:"loading",rawName:"v-loading",value:t.result.loading,expression:"result.loading"}],staticClass:"table-card",attrs:{"body-style":"padding:10px;"},scopedSlots:t._u([{key:"header",fn:function(){return[a("span",{staticClass:"title"},[t._v(" "+t._s(t.$t("api_test.home_page.running_task_list.title"))+" ")])]},proxy:!0}])},[a("ms-table",{attrs:{"enable-selection":!1,condition:t.condition,data:t.tableData,"screen-height":"300px"},on:{refresh:t.search}},[a("el-table-column",{attrs:{prop:"index",label:t.$t("api_test.home_page.running_task_list.table_coloum.index"),width:"80","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"name",label:t.$t("commons.name"),width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.row;return[t.isReadOnly?a("span",[t._v(" "+t._s(s.name)+" ")]):a("el-link",{attrs:{type:"info"},on:{click:function(e){return t.redirect(s)}}},[t._v(" "+t._s(s.name)+" ")])]}}])}),a("ms-table-column",{attrs:{prop:"taskType",filters:t.typeFilters,label:t.$t("api_test.home_page.running_task_list.table_coloum.task_type"),width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return["API_SCENARIO_TEST"==e.row.taskGroup?a("ms-tag",{attrs:{type:"success",effect:"plain",content:t.$t("api_test.home_page.running_task_list.scenario_schedule")}}):t._e(),"TEST_PLAN_TEST"==e.row.taskGroup?a("ms-tag",{attrs:{type:"warning",effect:"plain",content:t.$t("api_test.home_page.running_task_list.test_plan_schedule")}}):t._e(),"SWAGGER_IMPORT"==e.row.taskGroup?a("ms-tag",{attrs:{type:"danger",effect:"plain",content:t.$t("api_test.home_page.running_task_list.swagger_schedule")}}):t._e()]}}])}),a("el-table-column",{attrs:{prop:"rule",label:t.$t("api_test.home_page.running_task_list.table_coloum.run_rule"),width:"120","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{width:"100",label:t.$t("api_test.home_page.running_task_list.table_coloum.task_status")},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",[a("el-switch",{staticClass:"captcha-img",attrs:{disabled:t.isReadOnly},on:{change:function(a){return t.closeTaskConfirm(e.row)}},model:{value:e.row.taskStatus,callback:function(a){t.$set(e.row,"taskStatus",a)},expression:"scope.row.taskStatus"}})],1)]}}])}),a("el-table-column",{attrs:{width:"170",label:t.$t("api_test.home_page.running_task_list.table_coloum.next_execution_time")},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(t._f("timestampFormatDate")(e.row.nextExecutionTime)))])]}}])}),a("el-table-column",{attrs:{prop:"creator",label:t.$t("api_test.home_page.running_task_list.table_coloum.create_user"),width:"100","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{width:"170",label:t.$t("api_test.home_page.running_task_list.table_coloum.update_time")},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(t._f("timestampFormatDate")(e.row.updateTime)))])]}}])})],1)],1)},i=[],n=(a("4c1e"),a("6df5"),a("aa18")),o=a("495f"),r=a("0ac8"),l=a("625a"),c={name:"MsRunningTaskList",components:{MsTableColumn:l["a"],MsTable:r["a"],MsTag:n["a"]},props:{callFrom:String},data:function(){return{value:"100",result:{},tableData:[],visible:!1,loading:!1,typeFilters:[],condition:{filters:{}}}},computed:{isReadOnly:function(){return!1},projectId:function(){return Object(o["g"])()}},mounted:function(){"api_test"===this.callFrom?this.typeFilters=[{text:this.$t("api_test.home_page.running_task_list.scenario_schedule"),value:"API_SCENARIO_TEST"},{text:this.$t("api_test.home_page.running_task_list.swagger_schedule"),value:"SWAGGER_IMPORT"}]:this.typeFilters=[{text:this.$t("api_test.home_page.running_task_list.test_plan_schedule"),value:"TEST_PLAN_TEST"}]},methods:{search:function(){var t=this;this.condition.filters.task_type||("api_test"===this.callFrom?this.condition.filters.task_type=["SWAGGER_IMPORT","API_SCENARIO_TEST"]:this.condition.filters.task_type=["TEST_PLAN_TEST"]),this.projectId&&(this.result=this.$post("/api/runningTask/"+this.projectId,this.condition,(function(e){t.tableData=e.data})))},closeTaskConfirm:function(t){var e=this,a=t.taskStatus;t.taskStatus=!a,this.$confirm(this.$t("api_test.home_page.running_task_list.confirm.close_title"),this.$t("commons.prompt"),{confirmButtonText:this.$t("commons.confirm"),cancelButtonText:this.$t("commons.cancel"),type:"warning"}).then((function(){e.updateTask(t)})).catch((function(){}))},updateTask:function(t){var e=this;this.result=this.$post("/api/schedule/updateEnableByPrimyKey",t,(function(t){e.search()}))},redirect:function(t){"TEST_PLAN_TEST"===t.taskGroup?this.$emit("redirectPage","testPlanEdit","",t.scenarioId):"API_SCENARIO_TEST"===t.taskGroup?this.$emit("redirectPage","scenario","scenario","edit:"+t.scenarioId):"SWAGGER_IMPORT"===t.taskGroup&&this.$emit("redirectPage","api","api",{param:t})}},created:function(){this.search()},activated:function(){this.search()},handleStatus:function(t){console.log(t.row.userId)}},d=c,p=(a("e71c"),a("cba8")),u=Object(p["a"])(d,s,i,!1,null,"6e698ad9",null);e["a"]=u.exports},"32b8":function(t,e,a){"use strict";a("79d3")},3354:function(t,e,a){"use strict";a("d0e0")},"66e9":function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!=t&&e!=e}},"6df5":function(t,e,a){"use strict";var s=a("e3f7"),i=a("9dd2"),n=a("25ef"),o=a("8e74"),r=a("66e9"),l=a("3ffc"),c=a("ecf4"),d=a("bacb");i("search",(function(t,e,a){return[function(e){var a=o(this),i=void 0==e?void 0:c(e,t);return i?s(i,e,a):new RegExp(e)[t](l(a))},function(t){var s=n(this),i=l(t),o=a(e,s,i);if(o.done)return o.value;var c=s.lastIndex;r(c,0)||(s.lastIndex=0);var p=d(s,i);return r(s.lastIndex,c)||(s.lastIndex=c),null===p?-1:p.index}]}))},"77fd":function(t,e,a){},"79d3":function(t,e,a){},"95b9":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ms-container",[a("ms-main-container",{directives:[{name:"loading",rawName:"v-loading",value:t.result.loading,expression:"result.loading"}]},[a("el-row",{attrs:{gutter:10}},[a("el-col",{attrs:{span:6}},[a("ms-api-info-card",{attrs:{"api-count-data":t.apiCountData},on:{redirectPage:t.redirectPage}})],1),a("el-col",{attrs:{span:6}},[a("ms-test-case-info-card",{attrs:{"test-case-count-data":t.testCaseCountData},on:{redirectPage:t.redirectPage}})],1),a("el-col",{attrs:{span:6}},[a("ms-scene-info-card",{attrs:{"scene-count-data":t.sceneCountData,"interface-coverage":t.interfaceCoverage},on:{redirectPage:t.redirectPage}})],1),a("el-col",{attrs:{span:6}},[a("ms-schedule-task-info-card",{attrs:{"schedule-task-count-data":t.scheduleTaskCountData}})],1)],1),a("el-row",{attrs:{gutter:10}},[a("el-col",{attrs:{span:12}},[a("ms-failure-test-case-list",{on:{redirectPage:t.redirectPage}})],1),a("el-col",{attrs:{span:12}},[a("ms-running-task-list",{attrs:{"call-from":"api_test"},on:{redirectPage:t.redirectPage}})],1)],1)],1)],1)},i=[],n=(a("4c1e"),a("6df5"),a("1b11")),o=a("489a"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-card",{directives:[{name:"loading",rawName:"v-loading",value:t.result.loading,expression:"result.loading"}],staticClass:"table-card",attrs:{"body-style":"padding:10px;"}},[a("div",{attrs:{slot:"header"},slot:"header"},[a("span",{staticClass:"title"},[t._v(" "+t._s(t.$t("api_test.home_page.api_count_card.title"))+" ")])]),a("el-container",[a("el-aside",{attrs:{width:"120px"}},[a("div",{staticClass:"main-number-show"},[a("span",{staticClass:"count-number"},[t._v(" "+t._s(t.apiCountData.allApiDataCountNumber)+" ")]),a("span",{staticStyle:{color:"#6C317C"}},[t._v(" "+t._s(t.$t("api_test.home_page.unit_of_measurement"))+" ")])])]),a("el-main",{staticStyle:{"padding-left":"0px","padding-right":"0px"}},[a("div",{staticStyle:{width:"200px",margin:"0 auto"}},[a("el-row",{staticClass:"hidden-lg-and-down",attrs:{align:"center"}},[a("el-col",{staticStyle:{padding:"5px","border-right-style":"solid","border-right-width":"1px","border-right-color":"#ECEEF4"},attrs:{span:6}},[a("div",{staticClass:"count-info-div",domProps:{innerHTML:t._s(t.apiCountData.httpCountStr)}})]),a("el-col",{staticStyle:{padding:"5px","border-right-style":"solid","border-right-width":"1px","border-right-color":"#ECEEF4"},attrs:{span:6}},[a("div",{staticClass:"count-info-div",domProps:{innerHTML:t._s(t.apiCountData.rpcCountStr)}})]),a("el-col",{staticStyle:{padding:"5px","border-right-style":"solid","border-right-width":"1px","border-right-color":"#ECEEF4"},attrs:{span:6}},[a("div",{staticClass:"count-info-div",domProps:{innerHTML:t._s(t.apiCountData.tcpCountStr)}})]),a("el-col",{staticStyle:{padding:"5px"},attrs:{span:6}},[a("div",{staticClass:"count-info-div",domProps:{innerHTML:t._s(t.apiCountData.sqlCountStr)}})])],1),a("el-row",{staticClass:"hidden-xl-only",staticStyle:{"margin-left":"20px"},attrs:{align:"right"}},[a("el-col",{staticStyle:{padding:"5px","border-right-style":"solid","border-right-width":"1px","border-right-color":"#ECEEF4"},attrs:{span:6}},[a("div",{staticClass:"count-info-div",domProps:{innerHTML:t._s(t.apiCountData.httpCountStr)}})]),a("el-col",{staticStyle:{padding:"5px","border-right-style":"solid","border-right-width":"1px","border-right-color":"#ECEEF4"},attrs:{span:6}},[a("div",{staticClass:"count-info-div",domProps:{innerHTML:t._s(t.apiCountData.rpcCountStr)}})]),a("el-col",{staticStyle:{padding:"5px","border-right-style":"solid","border-right-width":"1px","border-right-color":"#ECEEF4"},attrs:{span:6}},[a("div",{staticClass:"count-info-div",domProps:{innerHTML:t._s(t.apiCountData.tcpCountStr)}})]),a("el-col",{staticStyle:{padding:"5px"},attrs:{span:6}},[a("div",{staticClass:"count-info-div",domProps:{innerHTML:t._s(t.apiCountData.sqlCountStr)}})])],1)],1)])],1),a("el-container",{staticClass:"detail-container"},[a("el-header",{staticStyle:{height:"20px",padding:"0px","margin-bottom":"10px"}},[a("el-row",[a("el-col",[t._v(" "+t._s(t.$t("api_test.home_page.api_details_card.this_week_add"))+" "),a("el-link",{staticStyle:{color:"#000000"},attrs:{type:"info",target:"_blank"},on:{click:function(e){return t.redirectPage("thisWeekCount")}}},[t._v(" "+t._s(t.apiCountData.thisWeekAddedCount)+" ")]),t._v(" "+t._s(t.$t("api_test.home_page.unit_of_measurement"))+" ")],1)],1)],1),a("el-main",{staticStyle:{padding:"5px","margin-top":"10px"}},[a("el-container",[a("el-aside",{staticClass:"count-number-show",staticStyle:{"margin-bottom":"0px","margin-top":"0px"},attrs:{width:"60%"}},[a("el-container",[a("el-aside",{attrs:{width:"30%"}},[t._v(" "+t._s(t.$t("api_test.home_page.detail_card.rate.completion")+":")+" ")]),a("el-main",{staticStyle:{padding:"0px 0px 0px 0px","line-height":"100px","text-align":"center"}},[a("span",{staticClass:"count-number"},[t._v(" "+t._s(t.apiCountData.completionRage)+" "),a("el-tooltip",{staticClass:"info-tool-tip",attrs:{placement:"top"}},[a("div",{attrs:{slot:"content"},slot:"content"},[t._v(t._s(t.$t("api_test.home_page.formula.completion")))]),a("el-button",{staticStyle:{padding:"0px",border:"0px"},attrs:{icon:"el-icon-info"}})],1)],1)])],1)],1),a("el-main",{staticStyle:{padding:"5px"}},[a("el-card",{staticClass:"no-shadow-card",attrs:{"body-style":"padding-left:5px;padding-right:5px"}},[a("main",[a("el-row",[a("el-col",[a("span",{staticClass:"default-property"},[t._v(" "+t._s(t.$t("api_test.home_page.detail_card.running"))+" "+t._s("  ")+" "),a("el-link",{staticStyle:{color:"#000000"},attrs:{type:"info",target:"_blank"},on:{click:function(e){return t.redirectPage("Underway")}}},[t._v(" "+t._s(t.apiCountData.runningCount)+" ")])],1)]),a("el-col",{staticStyle:{"margin-top":"5px"}},[a("span",{staticClass:"default-property"},[t._v(" "+t._s(t.$t("api_test.home_page.detail_card.not_started"))+" "+t._s("  ")+" "),a("el-link",{staticStyle:{color:"#000000"},attrs:{type:"info",target:"_blank"},on:{click:function(e){return t.redirectPage("Prepare")}}},[t._v(" "+t._s(t.apiCountData.notStartedCount)+" ")])],1)]),a("el-col",{staticStyle:{"margin-top":"5px"}},[a("span",{staticClass:"main-property"},[t._v(" "+t._s(t.$t("api_test.home_page.detail_card.finished"))+" "+t._s("  ")+" "),a("el-link",{staticStyle:{color:"#000000"},attrs:{type:"info",target:"_blank"},on:{click:function(e){return t.redirectPage("Completed")}}},[t._v(" "+t._s(t.apiCountData.finishedCount)+" ")])],1)])],1)],1)])],1)],1)],1)],1)],1)},l=[],c={name:"MsApiInfoCard",components:{},data:function(){return{result:{},loading:!1}},props:{apiCountData:{}},methods:{redirectPage:function(t){this.$emit("redirectPage","api","api",t)}}},d=c,p=(a("3354"),a("cba8")),u=Object(p["a"])(d,r,l,!1,null,"56ff4f07",null),_=u.exports,g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-card",{directives:[{name:"loading",rawName:"v-loading",value:t.result.loading,expression:"result.loading"}],staticClass:"table-card",attrs:{"body-style":"padding:10px;"}},[a("div",{attrs:{slot:"header"},slot:"header"},[a("span",{staticClass:"title"},[t._v(" "+t._s(t.$t("api_test.home_page.test_scene_count_card.title"))+" ")])]),a("el-container",[a("el-main",{staticStyle:{padding:"0px 0px 0px 0px","line-height":"100px","text-align":"center"}},[a("div",{staticClass:"main-number-show",staticStyle:{margin:"0px auto"}},[a("span",{staticClass:"count-number"},[t._v(" "+t._s(t.sceneCountData.allApiDataCountNumber)+" ")]),a("span",{staticStyle:{color:"#6C317C"}},[t._v(" "+t._s(t.$t("api_test.home_page.unit_of_measurement"))+" ")])])])],1),a("el-container",{staticClass:"detail-container"},[a("el-header",{staticStyle:{height:"20px",padding:"0px","margin-bottom":"10px"}},[a("el-row",{staticClass:"hidden-lg-and-down ",attrs:{gutter:20}},[a("el-col",{attrs:{span:8}},[t._v(" "+t._s(t.$t("api_test.home_page.test_scene_details_card.this_week_add"))+" "),a("el-link",{staticStyle:{color:"#000000"},attrs:{type:"info",target:"_blank"},on:{click:function(e){return t.redirectPage("thisWeekCount")}}},[t._v(t._s(t.sceneCountData.thisWeekAddedCount)+" ")]),t._v(" "+t._s(t.$t("api_test.home_page.unit_of_measurement"))+" ")],1),a("el-col",{attrs:{span:8}},[t._v(" "+t._s(t.$t("api_test.home_page.test_scene_details_card.this_week_execute",[t.sceneCountData.thisWeekExecutedCount]))+" ")]),a("el-col",{attrs:{span:8}},[t._v(" "+t._s(t.$t("api_test.home_page.test_scene_details_card.executed",[t.sceneCountData.executedCount]))+" ")])],1),a("el-row",{staticClass:"hidden-xl-only",attrs:{gutter:20}},[a("el-col",{attrs:{span:8}},[t._v(" "+t._s(t.$t("api_test.home_page.test_scene_details_card.this_week_add_sm"))+" "),a("br"),a("el-link",{staticStyle:{color:"#000000"},attrs:{type:"info",target:"_blank"},on:{click:function(e){return t.redirectPage("thisWeekCount")}}},[t._v(t._s(t.sceneCountData.thisWeekAddedCount)+" ")]),t._v(" "+t._s(t.$t("api_test.home_page.unit_of_measurement"))+" ")],1),a("el-col",{attrs:{span:8}},[a("div",{staticClass:"count-info-div",domProps:{innerHTML:t._s(t.$t("api_test.home_page.test_scene_details_card.this_week_execute_sm",[t.sceneCountData.thisWeekExecutedCount]))}})]),a("el-col",{attrs:{span:8}},[a("div",{staticClass:"count-info-div",domProps:{innerHTML:t._s(t.$t("api_test.home_page.test_scene_details_card.executed_sm",[t.sceneCountData.executedCount]))}})])],1)],1),a("el-main",{staticStyle:{padding:"5px","margin-top":"10px"}},[a("el-container",[a("el-aside",{staticClass:"count-number-show",staticStyle:{"margin-bottom":"0px","margin-top":"0px"},attrs:{width:"60%"}},[a("el-container",{staticStyle:{height:"50px","margin-top":"10px"}},[a("el-aside",{staticStyle:{"line-height":"40px"},attrs:{width:"50%"}},[t._v(" "+t._s(t.$t("api_test.home_page.detail_card.rate.pass")+":")+" ")]),a("el-main",{staticStyle:{padding:"0px 0px 0px 0px","line-height":"40px","text-align":"center"}},[a("span",{staticClass:"rows-count-number"},[t._v(" "+t._s(t.sceneCountData.passRage)+" "),a("el-tooltip",{staticClass:"info-tool-tip",attrs:{placement:"top"}},[a("div",{attrs:{slot:"content"},slot:"content"},[t._v(t._s(t.$t("api_test.home_page.formula.pass")))]),a("el-button",{staticStyle:{padding:"0px",border:"0px"},attrs:{icon:"el-icon-info"}})],1)],1)])],1),a("el-container",{staticStyle:{height:"50px","margin-top":"1px"}},[a("el-aside",{staticStyle:{"line-height":"40px"},attrs:{width:"50%"}},[a("span",[t._v(t._s(t.$t("api_test.home_page.detail_card.rate.interface_coverage")+":"))])]),a("el-main",{staticStyle:{padding:"0px 0px 0px 0px","line-height":"40px","text-align":"center"}},["waitting..."===t.interfaceCoverage?a("span",[a("i",{staticClass:"el-icon-loading lading-icon"})]):a("span",{staticClass:"rows-count-number"},[t._v(" "+t._s(t.interfaceCoverage)+" "),a("el-tooltip",{staticClass:"info-tool-tip",attrs:{placement:"top"}},[a("div",{attrs:{slot:"content"},slot:"content"},[t._v(t._s(t.$t("api_test.home_page.formula.interface_coverage")))]),a("el-button",{staticStyle:{padding:"0px",border:"0px"},attrs:{icon:"el-icon-info"}})],1)],1)])],1)],1),a("el-main",{staticStyle:{padding:"5px"}},[a("el-card",{staticClass:"no-shadow-card",attrs:{"body-style":"padding-left:5px;padding-right:5px"}},[a("main",[a("el-row",[a("el-col",[a("span",{staticClass:"defaultProperty"},[t._v(" "+t._s(t.$t("api_test.home_page.detail_card.unexecute"))+" "+t._s("  ")+" "),a("el-link",{staticStyle:{color:"#000000"},attrs:{type:"info",target:"_blank"},on:{click:function(e){return t.redirectPage("unExecute")}}},[t._v(" "+t._s(t.sceneCountData.unexecuteCount)+" ")])],1)]),a("el-col",{staticStyle:{"margin-top":"5px"}},[a("span",{staticClass:"defaultProperty"},[t._v(" "+t._s(t.$t("api_test.home_page.detail_card.execution_failed"))+" "+t._s("  ")+" "),a("el-link",{staticStyle:{color:"#000000"},attrs:{type:"info",target:"_blank"},on:{click:function(e){return t.redirectPage("executeFailed")}}},[t._v(" "+t._s(t.sceneCountData.executionFailedCount)+" ")])],1)]),a("el-col",{staticStyle:{"margin-top":"5px"}},[a("span",{staticClass:"main-property"},[t._v(" "+t._s(t.$t("api_test.home_page.detail_card.execution_pass"))+" "+t._s("  ")+" "),a("el-link",{staticStyle:{color:"#000000"},attrs:{type:"info",target:"_blank"},on:{click:function(e){return t.redirectPage("executePass")}}},[t._v(" "+t._s(t.sceneCountData.executionPassCount)+" ")])],1)])],1)],1)])],1)],1)],1)],1)],1)},h=[],m={name:"MsSceneInfoCard",components:{},data:function(){return{result:{},loading:!1}},props:{sceneCountData:{},interfaceCoverage:String},methods:{redirectPage:function(t){this.$emit("redirectPage","scenario","scenario",t)}}},f=m,C=(a("e7b2"),Object(p["a"])(f,g,h,!1,null,"a95fe346",null)),x=C.exports,v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-card",{directives:[{name:"loading",rawName:"v-loading",value:t.result.loading,expression:"result.loading"}],staticClass:"table-card",attrs:{"body-style":"padding:10px;"}},[a("div",{attrs:{slot:"header"},slot:"header"},[a("span",{staticClass:"title"},[t._v(" "+t._s(t.$t("api_test.home_page.schedule_task_count_card.title"))+" ")])]),a("el-container",[a("el-main",{staticStyle:{padding:"0px 0px 0px 0px","line-height":"100px","text-align":"center"}},[a("div",{staticClass:"main-number-show",staticStyle:{margin:"0px auto"}},[a("span",{staticClass:"count-number"},[t._v(" "+t._s(t.scheduleTaskCountData.allApiDataCountNumber)+" ")]),a("span",{staticStyle:{color:"#6C317C"}},[t._v(" "+t._s(t.$t("api_test.home_page.unit_of_measurement"))+" ")])])])],1),a("el-container",{staticClass:"detail-container"},[a("el-header",{staticStyle:{height:"20px",padding:"0px","margin-bottom":"10px"}},[a("el-row",{staticClass:"hidden-lg-and-down ",attrs:{gutter:20}},[a("el-col",{attrs:{span:8}},[t._v(" "+t._s(t.$t("api_test.home_page.schedule_task_details_card.this_week_add",[t.scheduleTaskCountData.thisWeekAddedCount]))+" ")]),a("el-col",{attrs:{span:8}},[t._v(" "+t._s(t.$t("api_test.home_page.schedule_task_details_card.this_week_execute",[t.scheduleTaskCountData.thisWeekExecutedCount]))+" ")]),a("el-col",{attrs:{span:8}},[t._v(" "+t._s(t.$t("api_test.home_page.schedule_task_details_card.executed",[t.scheduleTaskCountData.executedCount]))+" ")])],1),a("el-row",{staticClass:"hidden-xl-only",attrs:{gutter:20}},[a("el-col",{attrs:{span:8}},[a("div",{staticClass:"count-info-div",domProps:{innerHTML:t._s(t.$t("api_test.home_page.schedule_task_details_card.this_week_add_sm",[t.scheduleTaskCountData.thisWeekAddedCount]))}})]),a("el-col",{attrs:{span:8}},[a("div",{staticClass:"count-info-div",domProps:{innerHTML:t._s(t.$t("api_test.home_page.schedule_task_details_card.this_week_execute_sm",[t.scheduleTaskCountData.thisWeekExecutedCount]))}})]),a("el-col",{attrs:{span:8}},[a("div",{staticClass:"count-info-div",domProps:{innerHTML:t._s(t.$t("api_test.home_page.schedule_task_details_card.executed_sm",[t.scheduleTaskCountData.executedCount]))}})])],1)],1),a("el-main",{staticStyle:{padding:"5px","margin-top":"10px"}},[a("el-container",[a("el-aside",{staticClass:"count-number-show",staticStyle:{"margin-bottom":"0px","margin-top":"0px"},attrs:{width:"60%"}},[a("el-container",[a("el-aside",{attrs:{width:"30%"}},[t._v(" "+t._s(t.$t("api_test.home_page.detail_card.rate.success")+":")+" ")]),a("el-main",{staticStyle:{padding:"0px 0px 0px 0px","line-height":"100px","text-align":"center"}},[a("span",{staticClass:"count-number"},[t._v(" "+t._s(t.scheduleTaskCountData.successRage)+" "),a("el-tooltip",{staticClass:"info-tool-tip",attrs:{placement:"top"}},[a("div",{attrs:{slot:"content"},slot:"content"},[t._v(t._s(t.$t("api_test.home_page.formula.success")))]),a("el-button",{staticStyle:{padding:"0px",border:"0px"},attrs:{icon:"el-icon-info"}})],1)],1)])],1)],1),a("el-main",{staticStyle:{padding:"5px"}},[a("el-card",{staticClass:"no-shadow-card",attrs:{"body-style":"padding-left:5px;padding-right:5px;"}},[a("main",[a("el-row",[a("el-col",[a("span",{staticClass:"default-property"},[t._v(" "+t._s(t.$t("api_test.home_page.detail_card.failed"))+" "+t._s("  ")+" "+t._s(t.scheduleTaskCountData.failedCount)+" ")])]),a("el-col",{staticStyle:{height:"20px","margin-top":"3px"}}),a("el-col",{staticStyle:{"margin-top":"5px"}},[a("span",{staticClass:"main-property"},[t._v(" "+t._s(t.$t("api_test.home_page.detail_card.success"))+" "+t._s("  ")+" "+t._s(t.scheduleTaskCountData.successCount)+" ")])])],1)],1)])],1)],1)],1)],1)],1)},b=[],y=(a("c97f"),{name:"MsScheduleTaskInfoCard",components:{},data:function(){return{result:{},apiCountData:{},loading:!1}},props:{scheduleTaskCountData:{}},methods:{},created:function(){},activated:function(){}}),k=y,S=(a("c795"),Object(p["a"])(k,v,b,!1,null,"3cba9840",null)),w=S.exports,$=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-card",{directives:[{name:"loading",rawName:"v-loading",value:t.result.loading,expression:"result.loading"}],staticClass:"table-card",attrs:{"body-style":"padding:10px;"}},[a("div",{attrs:{slot:"header"},slot:"header"},[a("span",{staticClass:"title"},[t._v(" "+t._s(t.$t("api_test.home_page.test_case_count_card.title"))+" ")])]),a("el-container",[a("el-aside",{attrs:{width:"120px"}},[a("div",{staticClass:"main-number-show"},[a("span",{staticClass:"count-number"},[t._v(" "+t._s(t.testCaseCountData.allApiDataCountNumber)+" ")]),a("span",{staticStyle:{color:"#6C317C"}},[t._v(" "+t._s(t.$t("api_test.home_page.unit_of_measurement"))+" ")])])]),a("el-main",{staticStyle:{"padding-left":"0px","padding-right":"0px"}},[a("div",{staticStyle:{width:"200px",margin:"0 auto"}},[a("el-row",{staticClass:"hidden-lg-and-down",attrs:{align:"center"}},[a("el-col",{staticStyle:{padding:"5px","border-right-style":"solid","border-right-width":"1px","border-right-color":"#ECEEF4"},attrs:{span:6}},[a("div",{staticClass:"count-info-div",domProps:{innerHTML:t._s(t.testCaseCountData.httpCountStr)}})]),a("el-col",{staticStyle:{padding:"5px","border-right-style":"solid","border-right-width":"1px","border-right-color":"#ECEEF4"},attrs:{span:6}},[a("div",{staticClass:"count-info-div",domProps:{innerHTML:t._s(t.testCaseCountData.rpcCountStr)}})]),a("el-col",{staticStyle:{padding:"5px","border-right-style":"solid","border-right-width":"1px","border-right-color":"#ECEEF4"},attrs:{span:6}},[a("div",{staticClass:"count-info-div",domProps:{innerHTML:t._s(t.testCaseCountData.tcpCountStr)}})]),a("el-col",{staticStyle:{padding:"5px"},attrs:{span:6}},[a("div",{staticClass:"count-info-div",domProps:{innerHTML:t._s(t.testCaseCountData.sqlCountStr)}})])],1),a("el-row",{staticClass:"hidden-xl-only",staticStyle:{"margin-left":"20px"},attrs:{align:"right"}},[a("el-col",{staticStyle:{padding:"5px","border-right-style":"solid","border-right-width":"1px","border-right-color":"#ECEEF4"},attrs:{span:6}},[a("div",{staticClass:"count-info-div",domProps:{innerHTML:t._s(t.testCaseCountData.httpCountStr)}})]),a("el-col",{staticStyle:{padding:"5px","border-right-style":"solid","border-right-width":"1px","border-right-color":"#ECEEF4"},attrs:{span:6}},[a("div",{staticClass:"count-info-div",domProps:{innerHTML:t._s(t.testCaseCountData.rpcCountStr)}})]),a("el-col",{staticStyle:{padding:"5px","border-right-style":"solid","border-right-width":"1px","border-right-color":"#ECEEF4"},attrs:{span:6}},[a("div",{staticClass:"count-info-div",domProps:{innerHTML:t._s(t.testCaseCountData.tcpCountStr)}})]),a("el-col",{staticStyle:{padding:"5px"},attrs:{span:6}},[a("div",{staticClass:"count-info-div",domProps:{innerHTML:t._s(t.testCaseCountData.sqlCountStr)}})])],1)],1)])],1),a("el-container",{staticClass:"detail-container"},[a("el-header",{staticStyle:{height:"20px",padding:"0px","margin-bottom":"10px"}},[a("el-row",{staticClass:"hidden-lg-and-down ",attrs:{gutter:20}},[a("el-col",{attrs:{span:8}},[t._v(" "+t._s(t.$t("api_test.home_page.test_case_details_card.this_week_add"))+" "),a("el-link",{staticStyle:{color:"#000000"},attrs:{type:"info",target:"_blank"},on:{click:function(e){return t.redirectPage("thisWeekCount")}}},[t._v(t._s(t.testCaseCountData.thisWeekAddedCount)+" ")]),t._v(" "+t._s(t.$t("api_test.home_page.unit_of_measurement"))+" ")],1),a("el-col",{attrs:{span:8}},[t._v(" "+t._s(t.$t("api_test.home_page.test_case_details_card.this_week_execute",[t.testCaseCountData.thisWeekExecutedCount]))+" ")]),a("el-col",{attrs:{span:8}},[t._v(" "+t._s(t.$t("api_test.home_page.test_case_details_card.executed",[t.testCaseCountData.executedCount]))+" ")])],1),a("el-row",{staticClass:"hidden-xl-only",attrs:{gutter:20}},[a("el-col",{attrs:{span:8}},[t._v(" "+t._s(t.$t("api_test.home_page.test_case_details_card.this_week_add_sm"))+" "),a("br"),a("el-link",{staticStyle:{color:"#000000"},attrs:{type:"info",target:"_blank"},on:{click:function(e){return t.redirectPage("thisWeekCount")}}},[t._v(t._s(t.testCaseCountData.thisWeekAddedCount)+" ")]),t._v(" "+t._s(t.$t("api_test.home_page.unit_of_measurement"))+" ")],1),a("el-col",{attrs:{span:8}},[a("div",{staticClass:"count-info-div",domProps:{innerHTML:t._s(t.$t("api_test.home_page.test_case_details_card.this_week_execute_sm",[t.testCaseCountData.thisWeekExecutedCount]))}})]),a("el-col",{attrs:{span:8}},[a("div",{staticClass:"count-info-div",domProps:{innerHTML:t._s(t.$t("api_test.home_page.test_case_details_card.executed_sm",[t.testCaseCountData.executedCount]))}})])],1)],1),a("el-main",{staticStyle:{padding:"5px","margin-top":"10px"}},[a("el-container",[a("el-aside",{staticClass:"count-number-show",staticStyle:{"margin-bottom":"0px","margin-top":"0px"},attrs:{width:"60%"}},[a("el-container",[a("el-aside",{attrs:{width:"30%"}},[t._v(" "+t._s(t.$t("api_test.home_page.detail_card.rate.coverage")+":")+" ")]),a("el-main",{staticStyle:{padding:"0px 0px 0px 0px","line-height":"100px","text-align":"center"}},[a("span",{staticClass:"count-number"},[t._v(" "+t._s(t.testCaseCountData.coverageRage)+" "),a("el-tooltip",{staticClass:"info-tool-tip",attrs:{placement:"top"}},[a("div",{attrs:{slot:"content"},slot:"content"},[t._v(t._s(t.$t("api_test.home_page.formula.coverage")))]),a("el-button",{staticStyle:{padding:"0px",border:"0px"},attrs:{icon:"el-icon-info"}})],1)],1)])],1)],1),a("el-main",{staticStyle:{padding:"5px"}},[a("el-card",{staticClass:"no-shadow-card",attrs:{"body-style":"padding-left:5px;padding-right:5px"}},[a("main",[a("el-row",[a("el-col",[a("span",{staticClass:"default-property"},[t._v(" "+t._s(t.$t("api_test.home_page.detail_card.uncoverage"))+" "+t._s("  ")+" "),a("el-link",{staticStyle:{color:"#000000"},attrs:{type:"info",target:"_blank"},on:{click:function(e){return t.redirectPage("uncoverage")}}},[t._v(" "+t._s(t.testCaseCountData.uncoverageCount)+" ")])],1)]),a("el-col",{staticStyle:{height:"20px","margin-top":"3px"}}),a("el-col",{staticStyle:{"margin-top":"5px"}},[a("span",{staticClass:"main-property"},[t._v(" "+t._s(t.$t("api_test.home_page.detail_card.coverage"))+" "+t._s("  ")+" "),a("el-link",{staticStyle:{color:"#000000"},attrs:{type:"info",target:"_blank"},on:{click:function(e){return t.redirectPage("coverage")}}},[t._v(" "+t._s(t.testCaseCountData.coverageCount)+" ")])],1)])],1)],1)])],1)],1)],1)],1)],1)},T=[],P={name:"MsTestCaseInfoCard",components:{},data:function(){return{result:{},loading:!1}},props:{testCaseCountData:{}},methods:{redirectPage:function(t){"thisWeekCount"===t?this.$emit("redirectPage","api","apiTestCase",t):this.$emit("redirectPage","api","api",t)}},created:function(){},activated:function(){}},D=P,E=(a("a32c"),Object(p["a"])(D,$,T,!1,null,"18f69d17",null)),M=E.exports,I=a("282c"),A=a("2975"),L=a("495f"),F={name:"ApiTestHomePage",components:{MsApiInfoCard:_,MsSceneInfoCard:x,MsScheduleTaskInfoCard:w,MsTestCaseInfoCard:M,MsFailureTestCaseList:I["a"],MsRunningTaskList:A["a"],MsMainContainer:o["a"],MsContainer:n["a"]},data:function(){return{values:[],apiCountData:{},sceneCountData:{},testCaseCountData:{},scheduleTaskCountData:{},interfaceCoverage:"waitting...",result:{}}},activated:function(){this.search()},created:function(){},methods:{search:function(){var t=this,e=Object(L["g"])();this.$get("/api/apiCount/"+e,(function(e){t.apiCountData=e.data})),this.$get("/api/testSceneInfoCount/"+e,(function(e){t.sceneCountData=e.data})),this.interfaceCoverage="waitting...",this.$get("/api/countInterfaceCoverage/"+e,(function(e){t.interfaceCoverage=e.data})),this.$get("/api/testCaseInfoCount/"+e,(function(e){t.testCaseCountData=e.data})),this.$get("/api/scheduleTaskInfoCount/"+e,(function(e){t.scheduleTaskCountData=e.data}))},redirectPage:function(t,e,a){var s=Object(L["m"])();switch(t){case"api":this.$router.push({name:"ApiDefinition",params:{redirectID:s,dataType:e,dataSelectRange:a}});break;case"scenario":this.$router.push({name:"ApiAutomation",params:{redirectID:s,dataType:e,dataSelectRange:a}});break;case"testPlanEdit":this.$router.push("/track/plan/view/"+a);break}}}},H=F,O=(a("0273"),Object(p["a"])(H,s,i,!1,null,"084c4569",null));e["default"]=O.exports},a32c:function(t,e,a){"use strict";a("0452")},c795:function(t,e,a){"use strict";a("fd49")},c97f:function(t,e,a){},d0e0:function(t,e,a){},e71c:function(t,e,a){"use strict";a("1253")},e7b2:function(t,e,a){"use strict";a("77fd")},fd49:function(t,e,a){}}]);