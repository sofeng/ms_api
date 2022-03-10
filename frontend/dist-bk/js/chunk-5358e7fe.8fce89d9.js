(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5358e7fe","chunk-9c01db64"],{"07c7":function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-drawer",{directives:[{name:"loading",rawName:"v-loading",value:e.result.loading,expression:"result.loading"}],ref:"drawer",staticClass:"field-template-edit",attrs:{"before-close":e.handleClose,visible:e.visible,"with-header":!1,size:"100%","modal-append-to-body":!1},on:{"update:visible":function(t){e.visible=t}},scopedSlots:e._u([{key:"default",fn:function(t){return[a("template-component-edit-header",{attrs:{template:e.form},on:{cancel:e.handleClose,save:e.handleSave}}),a("el-main",{staticClass:"container"},[a("el-scrollbar",[a("ms-form-divider",{attrs:{title:e.$t("test_track.plan_view.base_info")}}),a("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-position":"right","label-width":"80px",size:"small"}},[a("el-form-item",{attrs:{label:e.$t("commons.name"),prop:"name","label-width":e.labelWidth}},[a("el-input",{attrs:{disabled:e.isSystem,autocomplete:"off"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._t("base"),a("el-form-item",{attrs:{label:e.$t("commons.description"),prop:"description","label-width":e.labelWidth}},[a("el-input",{attrs:{autosize:{minRows:2,maxRows:4},type:"textarea"},model:{value:e.form.description,callback:function(t){e.$set(e.form,"description",t)},expression:"form.description"}})],1),a("ms-form-divider",{attrs:{title:e.$t("custom_field.template_setting")}}),e._t("default"),a("el-form-item",{staticClass:"filed-list",attrs:{label:e.$t("table.selected_fields"),"label-width":e.labelWidth}},[a("el-button",{attrs:{type:"primary"},on:{click:e.relateField}},[e._v(e._s(e.$t("custom_field.add_field")))]),a("el-button",{attrs:{type:"primary",plain:""},on:{click:e.addField}},[e._v(e._s(e.$t("custom_field.custom_field_setting")))])],1),a("el-form-item",{attrs:{"label-width":e.labelWidth}},[a("custom-field-form-list",{ref:"customFieldFormList",attrs:{"table-data":e.relateFields,scene:e.scene,platform:e.form.platform,"template-contain-ids":e.templateContainIds,"custom-field-ids":e.form.customFieldIds}})],1)],2),a("custom-field-relate-list",{ref:"customFieldRelateList",attrs:{"template-id":e.form.id,"template-contain-ids":e.templateContainIds,scene:e.scene},on:{save:e.handleRelate}}),a("custom-field-edit",{ref:"customFieldEdit",attrs:{"label-width":e.labelWidth,scene:e.scene},on:{save:e.handleCustomFieldAdd}})],1)],1)]}}],null,!0)})},i=[],l=a("045d"),n=(a("89a8"),a("d25d"),a("b110"),a("fe35"),a("87d5"),a("1a91"),a("3335")),o=a.n(n),r=a("9722"),c=a("0b84"),d=a("d4ca"),u=a("ca90"),m=a("495f"),p=a("fd6e"),f=a("e077"),h={name:"FieldTemplateEdit",components:{CustomFieldEdit:p["a"],CustomFieldRelateList:u["a"],CustomFieldFormList:d["a"],MsFormDivider:c["a"],TemplateComponentEditHeader:r["a"],draggable:o.a},data:function(){return{result:{},templateContainIds:new Set,relateFields:[]}},props:{visible:{type:Boolean,default:function(){return!1}},scene:String,url:String,rules:Object,labelWidth:String,form:{type:Object,default:function(){return{}}}},computed:{isSystem:function(){return this.form.system}},methods:{open:function(){var e=this;this.$nextTick((function(){e.init(),e.getRelateFields(),e.$emit("update:visible",!0)}))},init:function(){this.relateFields=[],this.templateContainIds=new Set},handleClose:function(){this.$emit("update:visible",!1)},handleRelate:function(e){var t;(t=this.templateContainIds).add.apply(t,Object(l["a"])(e)),this.$refs.customFieldFormList.appendData(e)},handleSave:function(){var e=this;this.$refs.form.validate((function(t){if(t){var a={};Object.assign(a,e.form),e.form.steps&&(a.steps=JSON.stringify(e.form.steps)),a.options=JSON.stringify(e.form.options),a.workspaceId=Object(m["j"])();var s=e.relateFields;if(s){var i=Object(f["n"])(s);s.forEach((function(e){e.key||(e.key=Object(f["j"])(i,s)),e.defaultValue=JSON.stringify(e.defaultValue)}))}a.customFields=s,e.result=e.$post(e.url,a,(function(){e.handleClose(),e.$success(e.$t("commons.save_success")),e.$emit("refresh")}))}}))},handleCustomFieldAdd:function(e){this.templateContainIds.add(e.id),e.fieldId=e.id,e.id=null,e.options=JSON.parse(e.options),"checkbox"===e.type&&(e.defaultValue=[]),this.relateFields.push(e)},relateField:function(){this.$refs.customFieldRelateList.open()},addField:function(){this.$refs.customFieldEdit.open()},getRelateFields:function(){var e=this,t={};t.templateId=this.form.id,this.form.id?this.result=this.$post("custom/field/template/list",t,(function(t){e.relateFields=t.data,e.relateFields.forEach((function(t){t.options&&(t.options=JSON.parse(t.options)),t.defaultValue?t.defaultValue=JSON.parse(t.defaultValue):"checkbox"===t.type&&(t.defaultValue=[]),e.templateContainIds.add(t.fieldId)})),e.$refs.customFieldFormList.refreshTable()})):this.appendDefaultFiled()},appendDefaultFiled:function(){var e=this,t={workspaceId:Object(m["j"])(),scene:this.scene};this.result=this.$post("custom/field/default",t,(function(t){var a,s=t.data;s.forEach((function(t){t.id&&e.templateContainIds.add(t.id),t.fieldId=t.id,t.id=null,t.options=JSON.parse(t.options),"checkbox"===t.type&&(t.defaultValue=[])})),(a=e.relateFields).push.apply(a,Object(l["a"])(s))}))}}},b=h,_=(a("07e7"),a("cba8")),v=Object(_["a"])(b,s,i,!1,null,"00ee0568",null);t["a"]=v.exports},"07e7":function(e,t,a){"use strict";a("f74c")},"1b2a":function(e,t,a){"use strict";a("2c8d")},"2bc9":function(e,t,a){"use strict";a("f173")},"2c8d":function(e,t,a){},"2f59":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-card",{directives:[{name:"loading",rawName:"v-loading",value:e.result.loading,expression:"result.loading"}],scopedSlots:e._u([{key:"header",fn:function(){return[a("ms-table-header",{attrs:{condition:e.condition,title:e.$t("test_track.plan_view.report_template"),"create-tip":e.$t("test_track.plan_view.create_template")},on:{"update:condition":function(t){e.condition=t},search:e.initData,create:e.templateEdit}})]},proxy:!0}])},[e._l(e.templates,(function(t){return a("testcase-template-item",{key:t.id,attrs:{template:t},on:{templateEdit:e.templateEdit,refresh:e.initData}})})),a("test-case-report-template-edit",{ref:"templateEdit",on:{refresh:e.initData}})],2)},i=[],l=a("10b9"),n=a("8501"),o=a("cf83"),r=(a("4abd"),a("489a")),c=a("495f"),d={name:"TestCaseReportTemplate",components:{MsMainContainer:r["a"],TestcaseTemplateItem:o["a"],TestCaseReportTemplateEdit:n["a"],MsTableHeader:l["a"]},data:function(){return{result:{},condition:{},templates:[]}},mounted:function(){this.initData()},watch:{$route:function(e){e.path.indexOf("setting/testcase/report/template")>=0&&this.initData()}},methods:{initData:function(){var e=this;this.condition.workspaceId=Object(c["j"])(),this.result=this.$post("/case/report/template/list",this.condition,(function(t){e.templates=t.data}))},templateEdit:function(e){this.$refs.templateEdit.open(e)}}},u=d,m=(a("1b2a"),a("cba8")),p=Object(m["a"])(u,s,i,!1,null,"4c233ee2",null);t["default"]=p.exports},"4e4f":function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-form-item",{attrs:{label:"STEP"===e.form.stepModel?e.$t("test_track.case.step_describe"):e.$t("test_track.case.text_describe"),"label-width":e.labelWidth}},[a("el-dropdown",{attrs:{placement:"bottom-start"},on:{command:e.handleCommand}},[a("span",{staticClass:"el-dropdown-link"},[e._v(" "+e._s(e.$t("test_track.case.change_type"))+" "),a("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),a("el-dropdown-menu",[a("el-dropdown-item",{attrs:{disabled:e.disable,command:"STEP"}},[a("div",[e._v(e._s(e.$t("test_track.case.step_describe")))])]),a("el-dropdown-item",{attrs:{disabled:e.disable,command:"TEXT"}},[a("div",[e._v(e._s(e.$t("test_track.case.text_describe")))])])],1)],1)],1)},i=[],l={name:"StepChangeItem",props:["form","labelWidth","disable"],created:function(){this.form.stepModel||(this.form.stepModel="STEP")},methods:{handleCommand:function(e){this.disable||(this.form.stepModel=e)}}},n=l,o=(a("7d99"),a("cba8")),r=Object(o["a"])(n,s,i,!1,null,"55e6b8d7",null);t["a"]=r.exports},"5f95c":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-card",{scopedSlots:e._u([{key:"header",fn:function(){return[a("ms-table-header",{attrs:{condition:e.condition,"create-tip":e.$t("custom_field.template_create"),title:e.$t("custom_field.case_template")},on:{"update:condition":function(t){e.condition=t},search:e.initTableData,create:e.handleCreate}})]},proxy:!0}])},[a("ms-table",{directives:[{name:"loading",rawName:"v-loading",value:e.result.loading,expression:"result.loading"}],ref:"table",attrs:{data:e.tableData,condition:e.condition,total:e.total,"page-size":e.pageSize,operators:e.operators,"screen-height":e.tableHeight,"enable-selection":!1},on:{"update:pageSize":function(t){e.pageSize=t},"update:page-size":function(t){e.pageSize=t},handlePageChange:e.initTableData,refresh:e.initTableData}},[a("ms-table-column",{attrs:{label:e.$t("commons.name"),fields:e.fields,prop:"name"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.system?a("span",[e._v(e._s(t.row.name)+"("+e._s(e.$t("custom_field.default_template"))+")")]):a("span",[e._v(e._s(t.row.name))])]}}])}),a("ms-table-column",{attrs:{label:e.$t("api_test.home_page.failed_case_list.table_coloum.case_type"),fields:e.fields,filters:e.caseTypeFilters,prop:"type"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e.caseTypeMap[t.row.type]))])]}}])}),a("ms-table-column",{attrs:{label:e.$t("custom_field.system_template"),fields:e.fields,prop:"system"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.system?a("span",[e._v(" "+e._s(e.$t("commons.yes"))+" ")]):a("span",[e._v(" "+e._s(e.$t("commons.no"))+" ")])]}}])}),a("ms-table-column",{attrs:{label:e.$t("commons.description"),fields:e.fields,prop:"description"}}),a("ms-table-column",{attrs:{sortable:"",label:e.$t("commons.create_time"),fields:e.fields,prop:"createTime"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e._f("timestampFormatDate")(t.row.createTime)))])]}}])}),a("ms-table-column",{attrs:{sortable:"",label:e.$t("commons.update_time"),fields:e.fields,prop:"updateTime"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e._f("timestampFormatDate")(t.row.updateTime)))])]}}])})],1),a("ms-table-pagination",{attrs:{change:e.initTableData,"current-page":e.currentPage,"page-size":e.pageSize,total:e.total},on:{"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t},"update:pageSize":function(t){e.pageSize=t},"update:page-size":function(t){e.pageSize=t}}}),a("test-case-template-edit",{ref:"templateEdit",on:{refresh:e.initTableData}})],1)},i=[],l=(a("10dd"),a("cf5a")),n=a("e5a9"),o=a("495f"),r=a("10b9"),c=a("59d9"),d=a("ae75"),u=a("1763"),m=a("625a"),p=a("0ac8"),f=a("2f59"),h=a("97c1"),b={name:"TestCaseTemplateList",components:{TestCaseTemplateEdit:h["a"],TestCaseReportTemplate:f["default"],MsTableHeader:r["a"],MsTablePagination:c["a"],MsTableButton:d["a"],MsTableOperators:u["a"],MsTableColumn:m["a"],MsTable:p["a"]},data:function(){return{tableData:[],condition:{},total:0,pageSize:10,currentPage:1,result:{},caseTypeMap:{functional:this.$t("api_test.home_page.failed_case_list.table_value.case_type.functional")},operators:[{tip:this.$t("commons.edit"),icon:"el-icon-edit",exec:this.handleEdit},{tip:this.$t("commons.copy"),icon:"el-icon-copy-document",type:"success",exec:this.handleCopy,isDisable:this.systemDisable},{tip:this.$t("commons.delete"),icon:"el-icon-delete",type:"danger",exec:this.handleDelete,isDisable:this.systemDisable}]}},activated:function(){this.initTableData()},computed:{fields:function(){return l["a"]},caseTypeFilters:function(){return n["b"]},tableHeight:function(){return Object(o["k"])()}},methods:{initTableData:function(){var e=this;this.condition.workspaceId=Object(o["j"])(),this.result=this.$post("field/template/case/list/"+this.currentPage+"/"+this.pageSize,this.condition,(function(t){var a=t.data;e.total=a.itemCount,e.tableData=a.listObject,e.$refs.table.reloadTable()}))},handleEdit:function(e){this.$refs.templateEdit.open(e)},handleCreate:function(){this.$refs.templateEdit.open()},handleCopy:function(e){var t={};Object.assign(t,e),t.name=e.name+"_copy",this.$refs.templateEdit.open(t,!0)},handleDelete:function(e){var t=this;this.result=this.$get("field/template/case/delete/"+e.id,(function(){t.$success(t.$t("commons.delete_success")),t.initTableData()}))},systemDisable:function(e){return!!e.system}}},_=b,v=a("cba8"),y=Object(v["a"])(_,s,i,!1,null,"072a51c9",null);t["default"]=y.exports},"7d99":function(e,t,a){"use strict";a("f777")},"97c1":function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("field-template-edit",{ref:"fieldTemplateEdit",attrs:{"label-width":e.labelWidth,form:e.form,rules:e.rules,visible:e.showDialog,url:e.url,scene:"TEST_CASE"},on:{"update:visible":function(t){e.showDialog=t},refresh:function(t){return e.$emit("refresh")}},scopedSlots:e._u([{key:"base",fn:function(){return[a("el-form-item",{attrs:{label:e.$t("api_test.home_page.failed_case_list.table_coloum.case_type"),prop:"type","label-width":e.labelWidth}},[a("el-select",{attrs:{disabled:e.isSystem,filterable:"",placeholder:e.$t("api_test.home_page.failed_case_list.table_coloum.case_type")},model:{value:e.form.type,callback:function(t){e.$set(e.form,"type",t)},expression:"form.type"}},e._l(e.caseTypeOption,(function(e){return a("el-option",{key:e.value,attrs:{label:e.text,value:e.value}})})),1)],1)]},proxy:!0},{key:"default",fn:function(){return[a("el-form-item",{attrs:{label:e.$t("test_track.case.name"),prop:"caseName","label-width":e.labelWidth}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:e.form.caseName,callback:function(t){e.$set(e.form,"caseName",t)},expression:"form.caseName"}})],1),a("form-rich-text-item",{attrs:{"label-width":e.labelWidth,title:e.$t("test_track.case.prerequisite"),data:e.form,prop:"prerequisite"}}),a("step-change-item",{attrs:{form:e.form}}),"STEP"===e.form.stepModel?a("test-case-step-item",{attrs:{"label-width":e.labelWidth,form:e.form}}):e._e(),"TEXT"===e.form.stepModel?a("form-rich-text-item",{attrs:{"label-width":e.labelWidth,title:e.$t("test_track.case.step_desc"),data:e.form,prop:"stepDescription"}}):e._e(),"TEXT"===e.form.stepModel?a("form-rich-text-item",{attrs:{"label-width":e.labelWidth,title:e.$t("test_track.case.expected_results"),data:e.form,prop:"expectedResult"}}):e._e(),"TEXT"===e.form.stepModel?a("form-rich-text-item",{attrs:{"label-width":e.labelWidth,title:e.$t("test_track.plan_view.actual_result"),data:e.form,prop:"actualResult"}}):e._e()]},proxy:!0}])})},i=[],l=a("3335"),n=a.n(l),o=a("9722"),r=a("0b84"),c=a("e5a9"),d=a("d4ca"),u=a("ca90"),m=a("07c7"),p=a("9345"),f=a("bda4"),h=a("4e4f"),b=a("495f"),_={name:"TestCaseTemplateEdit",components:{StepChangeItem:h["a"],TestCaseStepItem:f["a"],FormRichTextItem:p["a"],FieldTemplateEdit:m["a"],CustomFieldRelateList:u["a"],CustomFieldFormList:d["a"],MsFormDivider:r["a"],TemplateComponentEditHeader:o["a"],draggable:n.a},data:function(){return{showDialog:!1,form:{name:"",type:"functional",description:"",caseName:"",prerequisite:"",stepDescription:"",expectedResult:"",actualResult:"",customFieldIds:[],stepModel:"STEP",steps:[]},labelWidth:"120px",rules:{name:[{required:!0,message:this.$t("test_track.case.input_name"),trigger:"blur"},{max:64,message:this.$t("test_track.length_less_than")+"64",trigger:"blur"}],type:[{required:!0,trigger:"change"}]},result:{},url:""}},computed:{caseTypeOption:function(){return c["b"]},isSystem:function(){return this.form.system}},methods:{open:function(e,t){var a=this;e?(Object.assign(this.form,e),this.form.steps=e.steps?JSON.parse(e.steps):[],e.options instanceof Array||(this.form.options=e.options?JSON.parse(e.options):[]),this.url=t?"field/template/case/add":"field/template/case/update",Object(b["v"])((function(){a.showDialog=!1}))):(this.form={id:"",name:"",type:"functional",description:"",caseName:"",prerequisite:"",stepDescription:"",expectedResult:"",actualResult:"",customFieldIds:[],steps:[],stepModel:"STEP"},this.url="field/template/case/add"),this.$refs.fieldTemplateEdit.open(e)}}},v=_,y=a("cba8"),g=Object(y["a"])(v,s,i,!1,null,"18e2f1b9",null);t["a"]=g.exports},bda4:function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-form-item",{attrs:{"label-width":e.labelWidth,prop:"steps"}},[a("el-table",{staticClass:"tb-edit",attrs:{data:e.form.steps,border:"",size:"mini","default-sort":{prop:"num",order:"ascending"},"highlight-current-row":""}},[a("el-table-column",{attrs:{label:e.$t("test_track.case.number"),prop:"num","min-width":"10%"}}),a("el-table-column",{attrs:{label:e.$t("test_track.case.step_desc"),prop:"desc","min-width":"35%"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-input",{staticClass:"table-edit-input",attrs:{size:"mini",disabled:e.readOnly,type:"textarea",autosize:{minRows:1,maxRows:6},rows:2,placeholder:e.$t("commons.input_content"),clearable:""},model:{value:t.row.desc,callback:function(a){e.$set(t.row,"desc",a)},expression:"scope.row.desc"}})]}}])}),a("el-table-column",{attrs:{label:e.$t("test_track.case.expected_results"),prop:"result","min-width":"35%"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-input",{staticClass:"table-edit-input",attrs:{size:"mini",disabled:e.readOnly,type:"textarea",autosize:{minRows:1,maxRows:6},rows:2,placeholder:e.$t("commons.input_content"),clearable:""},model:{value:t.row.result,callback:function(a){e.$set(t.row,"result",a)},expression:"scope.row.result"}})]}}])}),a("el-table-column",{attrs:{label:e.$t("commons.input_content"),"min-width":"25%"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"primary",disabled:e.readOnly,icon:"el-icon-plus",circle:"",size:"mini"},on:{click:function(a){return e.handleAddStep(t.$index,t.row)}}}),a("el-button",{attrs:{icon:"el-icon-document-copy",type:"success",disabled:e.readOnly,circle:"",size:"mini"},on:{click:function(a){return e.handleCopyStep(t.$index,t.row)}}}),a("el-button",{attrs:{type:"danger",icon:"el-icon-delete",circle:"",size:"mini",disabled:e.readOnly||0==t.$index&&e.form.steps.length<=1},on:{click:function(a){return e.handleDeleteStep(t.$index,t.row)}}})]}}])})],1)],1)},i=[],l=(a("89a8"),a("1a91"),a("993f"),{name:"TestCaseStepItem",props:{labelWidth:String,form:Object,readOnly:Boolean},created:function(){(!this.form.steps||this.form.steps.length<1)&&(this.form.steps=[{num:1,desc:"",result:""}])},methods:{handleAddStep:function(e,t){var a={};a.num=t.num+1,a.desc="",a.result="",this.form.steps.forEach((function(e){e.num>t.num&&e.num++})),this.form.steps.splice(e+1,0,a)},handleCopyStep:function(e,t){var a={};a.num=t.num+1,a.desc=t.desc,a.result=t.result,this.form.steps.forEach((function(e){e.num>t.num&&e.num++})),this.form.steps.splice(e+1,0,a)},handleDeleteStep:function(e,t){this.form.steps.splice(e,1),this.form.steps.forEach((function(e){e.num>t.num&&e.num--}))}}}),n=l,o=a("cba8"),r=Object(o["a"])(n,s,i,!1,null,"33ed695c",null);t["a"]=r.exports},f173:function(e,t,a){},f74c:function(e,t,a){},f777:function(e,t,a){},fd6e:function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ms-edit-dialog",{ref:"msEditDialog",attrs:{width:"30%",visible:e.visible,title:e.$t("custom_field.create"),"append-to-body":""},on:{"update:visible":function(t){e.visible=t},confirm:e.save}},[a("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-position":"right","label-width":"auto",size:"small"}},[a("el-form-item",{attrs:{label:e.$t("custom_field.field_name"),prop:"name","label-width":e.labelWidth}},[e.isSystem?a("el-input",{attrs:{disabled:e.isSystem,value:e.$t(e.systemNameMap[e.form.name]),autocomplete:"off"}}):a("el-input",{attrs:{autocomplete:"off"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),a("el-form-item",{attrs:{label:e.$t("custom_field.field_remark"),prop:"remark","label-width":e.labelWidth}},[a("el-input",{attrs:{autosize:{minRows:2,maxRows:4},type:"textarea"},model:{value:e.form.remark,callback:function(t){e.$set(e.form,"remark",t)},expression:"form.remark"}})],1),a("el-form-item",{attrs:{label:e.$t("custom_field.scene"),prop:"type","label-width":e.labelWidth}},[a("el-select",{attrs:{disabled:e.isSystem||e.isTemplateEdit,filterable:"",placeholder:e.$t("custom_field.scene")},model:{value:e.form.scene,callback:function(t){e.$set(e.form,"scene",t)},expression:"form.scene"}},e._l(e.sceneOptions,(function(e){return a("el-option",{key:e.value,attrs:{label:e.text,value:e.value}})})),1)],1),a("el-form-item",{attrs:{label:e.$t("custom_field.field_type"),prop:"type","label-width":e.labelWidth}},[a("el-select",{attrs:{disabled:e.isSystem,filterable:"",placeholder:e.$t("custom_field.field_type")},model:{value:e.form.type,callback:function(t){e.$set(e.form,"type",t)},expression:"form.type"}},e._l(e.fieldTypeOptions,(function(e){return a("el-option",{key:e.value,attrs:{label:e.text,value:e.value}})})),1)],1),e.showOptions?a("el-form-item",{attrs:{label:e.$t("custom_field.field_option"),prop:"options","label-width":e.labelWidth}},[a("ms-single-handle-drag",{attrs:{"is-kv":"ISSUE"===e.form.scene,disable:"用例等级"===e.form.name,data:e.form.options}})],1):e._e()],1)],1)},i=[],l=a("ebb4"),n=(a("87d5"),a("9b10")),o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"ms-single-handle-drag"},[a("div",[e._t("header",(function(){return[a("el-link",{staticClass:"add-text",attrs:{underline:!1,disabled:e.disable},on:{click:e.add}},[a("i",{staticClass:"el-icon-plus"},[e._v(e._s(e.$t("custom_field.add_option")))])])]})),e.isKv?a("ms-instructions-icon",{attrs:{size:"13",content:e.$t("选项值用于对接Jira等平台提交缺陷时，对应字段的属性值")}}):e._e()],2),a("draggable",{staticClass:"list-group",attrs:{list:e.data,handle:".handle"}},e._l(e.data,(function(t,s){return a("div",{key:s,staticClass:"list-group-item"},[a("font-awesome-icon",{staticClass:"handle",attrs:{icon:["fas","align-justify"]}}),e.editIndex===s&&e.isKv?a("el-input",{staticClass:"text-item",attrs:{size:"mini",type:"text",placeholder:e.$t("custom_field.field_text")},on:{blur:function(a){return e.handleTextEdit(t)}},model:{value:t.text,callback:function(a){e.$set(t,"text",a)},expression:"element.text"}}):e.isKv?a("span",{staticClass:"text-item"},[t.system?a("span",[e._v(" ("+e._s(e.$t(t.text))+") ")]):a("span",[e._v(" "+e._s(t.text)+" ")])]):e._e(),e.editIndex===s?a("el-input",{staticClass:"text-item",attrs:{size:"mini",type:"value",placeholder:e.$t("custom_field.field_value")},on:{blur:function(a){return e.handleValueEdit(t)}},model:{value:t.value,callback:function(a){e.$set(t,"value",a)},expression:"element.value"}}):a("span",{staticClass:"text-item"},[t.system?a("span",[e._v(" "+e._s(e.$t(t.value))+" ")]):a("span",[e._v(" "+e._s((t.value&&e.isKv?"(":"")+t.value+(t.value&&e.isKv?")":""))+" ")])]),e._l(e.operators,(function(i,l){return a("i",{key:l,staticClass:"operator-icon",class:i.icon,attrs:{disabled:e.disable},on:{click:function(e){return i.click(t,s)}}})}))],2)})),0)],1)},r=[],c=(a("993f"),a("3335")),d=a.n(c),u=a("60e1"),m={name:"MsSingleHandleDrag",components:{MsInstructionsIcon:u["a"],draggable:d.a},data:function(){return{editIndex:-1}},props:{disable:Boolean,isKv:Boolean,data:{type:Array,default:function(){return[{name:"John",text:"text",id:0}]}},operators:{type:Array,default:function(){var e=this;return[{icon:"el-icon-edit",click:function(t,a){e.disable||t.system||(e.editIndex=a)}},{icon:"el-icon-close",click:function(t,a){e.disable||e.data.splice(a,1)}}]}}},methods:{add:function(){var e={text:"",value:""};this.data.push(e),this.editIndex=this.data.length-1},handleTextEdit:function(e){this.isKv||(e.text=e.value,this.editIndex=-1)},handleValueEdit:function(e){this.isKv||(e.text=e.value),e.value&&e.text&&(this.editIndex=-1)},isSystem:function(e){return!!e.system}}},p=m,f=(a("2bc9"),a("cba8")),h=Object(f["a"])(p,o,r,!1,null,"2623e05d",null),b=h.exports,_=a("495f"),v=a("e5a9"),y={name:"CustomFieldEdit",components:{MsSingleHandleDrag:b,MsEditDialog:n["a"]},props:["scene","labelWidth"],data:function(){return{form:{name:"",type:"input",scene:"TEST_CASE",remark:"",system:!1,options:[]},rules:{name:[{required:!0,message:this.$t("test_track.case.input_name"),trigger:"blur"},{max:64,message:this.$t("test_track.length_less_than")+"64",trigger:"blur"}],scene:[{required:!0,trigger:"change"}],type:[{required:!0,trigger:"change"}]},visible:!1,url:""}},computed:{fieldTypeOptions:function(){return v["d"]},sceneOptions:function(){return v["c"]},showOptions:function(){return["select","multipleSelect","radio","checkbox"].indexOf(this.form.type)>-1},isSystem:function(){return this.form.system},systemNameMap:function(){return v["j"]},isTemplateEdit:function(){return!!this.scene}},methods:{open:function(e){this.visible=!0,e?(Object.assign(this.form,e),e.options instanceof Array||(this.form.options=e.options?JSON.parse(e.options):[]),e.id?this.url="custom/field/update":this.url="custom/field/add"):(this.form={name:"",type:"input",scene:"TEST_CASE",remark:"",system:!1,options:[]},this.isTemplateEdit&&(this.form.scene=this.scene),this.url="custom/field/add")},save:function(){var e=this;this.$refs.form.validate((function(t){if(t){var a={};if(Object.assign(a,e.form),a.workspaceId=Object(_["j"])(),["select","multipleSelect","radio","checkbox"].indexOf(a.type)>-1){if(a.options.length<1)return void e.$warning(e.$t("custom_field.option_check"));var s,i=Object(l["a"])(a.options);try{for(i.s();!(s=i.n()).done;){var n=s.value;if(!n.text||!n.value)return void e.$warning(e.$t("custom_field.option_value_check"))}}catch(o){i.e(o)}finally{i.f()}}a.options=JSON.stringify(e.form.options),e.result=e.$post(e.url,a,(function(t){e.visible=!1,a.id=t.data,e.$success(e.$t("commons.save_success")),e.$emit("refresh"),e.$emit("save",a)}))}}))}}},g=y,$=Object(f["a"])(g,s,i,!1,null,"5696a714",null);t["a"]=$.exports}}]);