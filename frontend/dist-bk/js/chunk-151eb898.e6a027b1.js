(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-151eb898"],{"2bc9":function(e,t,i){"use strict";i("f173")},"9b10":function(e,t,i){"use strict";var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("el-dialog",{attrs:{"close-on-click-modal":e.closeOnClickModal,title:e.title,width:e.width,visible:e.visible,"destroy-on-close":"","append-to-body":e.appendToBody},on:{close:e.handleClose},scopedSlots:e._u([{key:"footer",fn:function(){return[e._t("footer",(function(){return[e.withFooter?i("div",{staticClass:"dialog-footer"},[i("ms-dialog-footer",{on:{cancel:e.handleCancel,confirm:e.handleConfirm}})],1):e._e()]}))]},proxy:!0}],null,!0)},[e._t("header"),e._t("default")],2)},a=[],n=i("15bc"),l={name:"MsEditDialog",components:{MsDialogFooter:n["a"]},props:{title:{type:String,default:function(){return"title"}},visible:{type:Boolean,default:function(){return!1}},appendToBody:{type:Boolean,default:function(){return!1}},width:{type:String,default:function(){return"50%"}},withFooter:{type:Boolean,default:function(){return!0}},closeOnClickModal:{type:Boolean,default:!1}},methods:{handleConfirm:function(){this.$emit("confirm")},handleCancel:function(){this.handleClose(),this.$emit("cancel")},handleClose:function(){this.$emit("update:visible",!1),this.$emit("close")}}},o=l,r=i("cba8"),u=Object(r["a"])(o,s,a,!1,null,"699b7428",null);t["a"]=u.exports},a054:function(e,t,i){"use strict";i.r(t);var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("el-card",{scopedSlots:e._u([{key:"header",fn:function(){return[i("ms-table-header",{attrs:{condition:e.condition,"create-tip":e.$t("custom_field.create"),title:e.$t("custom_field.name")},on:{"update:condition":function(t){e.condition=t},search:e.getCustomFields,create:e.handleCreate}})]},proxy:!0}])},[i("ms-table",{directives:[{name:"loading",rawName:"v-loading",value:e.result.loading,expression:"result.loading"}],ref:"table",attrs:{data:e.tableData,condition:e.condition,total:e.total,"page-size":e.pageSize,operators:e.operators,fields:e.fields,"enable-selection":!1,"field-key":"CUSTOM_FIELD","screen-height":e.tableHeight},on:{"update:pageSize":function(t){e.pageSize=t},"update:page-size":function(t){e.pageSize=t},"update:fields":function(t){e.fields=t},handlePageChange:e.getCustomFields,refresh:e.getCustomFields}},e._l(e.fields,(function(t){return i("div",{key:t.key},[i("ms-table-column",{attrs:{field:t,"fields-width":e.fieldsWidth,label:e.$t("commons.name"),prop:"name"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.system?i("span",[e._v(" "+e._s(e.$t(e.systemNameMap[t.row.name]))+" ")]):i("span",[e._v(" "+e._s(t.row.name)+" ")])]}}],null,!0)}),i("ms-table-column",{attrs:{label:e.$t("custom_field.scene"),field:t,filters:e.sceneFilters,"fields-width":e.fieldsWidth,prop:"scene"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("span",[e._v(e._s(e.sceneMap[t.row.scene]))])]}}],null,!0)}),i("ms-table-column",{attrs:{field:t,label:e.$t("custom_field.attribute_type"),filters:e.fieldFilters,"fields-width":e.fieldsWidth,prop:"type"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("span",[e._v(e._s(e.fieldTypeMap[t.row.type]))])]}}],null,!0)}),i("ms-table-column",{attrs:{label:e.$t("custom_field.system_field"),field:t,"fields-width":e.fieldsWidth,prop:"system"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.system?i("span",[e._v(" "+e._s(e.$t("commons.yes"))+" ")]):i("span",[e._v(" "+e._s(e.$t("commons.no"))+" ")])]}}],null,!0)}),i("ms-table-column",{attrs:{label:e.$t("commons.remark"),field:t,"fields-width":e.fieldsWidth,prop:"remark"}}),i("ms-table-column",{attrs:{sortable:"",label:e.$t("commons.create_time"),field:t,"fields-width":e.fieldsWidth,prop:"createTime"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("span",[e._v(e._s(e._f("timestampFormatDate")(t.row.createTime)))])]}}],null,!0)}),i("ms-table-column",{attrs:{sortable:"",label:e.$t("commons.update_time"),field:t,"fields-width":e.fieldsWidth,prop:"updateTime"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("span",[e._v(e._s(e._f("timestampFormatDate")(t.row.updateTime)))])]}}],null,!0)})],1)})),0),i("ms-table-pagination",{attrs:{change:e.getCustomFields,"current-page":e.currentPage,"page-size":e.pageSize,total:e.total},on:{"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t},"update:pageSize":function(t){e.pageSize=t},"update:page-size":function(t){e.pageSize=t}}}),i("custom-field-edit",{ref:"customFieldEdit",on:{refresh:e.getCustomFields}})],1)},a=[],n=(i("10dd"),i("0ac8")),l=i("495f"),o=i("625a"),r=i("1763"),u=i("ae75"),c=i("fd6e"),d=i("59d9"),f=i("e5a9"),m=i("10b9"),p=i("6191"),h=i("e077"),b=i("e5fd"),_={name:"CustomFieldList",components:{MsCustomTableHeader:b["a"],HeaderCustom:p["a"],MsTableHeader:m["a"],MsTablePagination:d["a"],CustomFieldEdit:c["a"],MsTableButton:u["a"],MsTableOperators:r["a"],MsTableColumn:o["a"],MsTable:n["a"]},data:function(){return{tableData:[],condition:{},total:0,pageSize:10,currentPage:1,result:{},fields:Object(h["o"])("CUSTOM_FIELD"),fieldsWidth:Object(h["p"])("CUSTOM_FIELD"),operators:[{tip:this.$t("commons.edit"),icon:"el-icon-edit",exec:this.handleEdit},{tip:this.$t("commons.copy"),icon:"el-icon-copy-document",type:"success",exec:this.handleCopy,isDisable:this.systemDisable},{tip:this.$t("commons.delete"),icon:"el-icon-delete",type:"danger",exec:this.handleDelete,isDisable:this.systemDisable}]}},activated:function(){this.getCustomFields()},computed:{fieldFilters:function(){return f["d"]},sceneFilters:function(){return f["c"]},fieldTypeMap:function(){return f["e"]},sceneMap:function(){return f["i"]},systemNameMap:function(){return f["j"]},tableHeight:function(){return Object(l["k"])()}},methods:{getCustomFields:function(){var e=this;this.condition.workspaceId=Object(l["j"])(),this.result=this.$post("custom/field/list/"+this.currentPage+"/"+this.pageSize,this.condition,(function(t){var i=t.data;e.total=i.itemCount,e.tableData=i.listObject,e.$refs.table.reloadTable()}))},handleEdit:function(e){this.$refs.customFieldEdit.open(e)},handleCreate:function(){this.$refs.customFieldEdit.open()},handleCopy:function(e){var t={};Object.assign(t,e),t.id=null,t.name=e.name+"_copy",this.$refs.customFieldEdit.open(t)},handleDelete:function(e){var t=this;this.result=this.$get("custom/field/delete/"+e.id,(function(){t.$success(t.$t("commons.delete_success")),t.getCustomFields()}))},systemDisable:function(e){return!!e.system}}},v=_,y=i("cba8"),g=Object(y["a"])(v,s,a,!1,null,"7d7dd21e",null);t["default"]=g.exports},e5a9:function(e,t,i){"use strict";i.d(t,"d",(function(){return a})),i.d(t,"c",(function(){return n})),i.d(t,"b",(function(){return l})),i.d(t,"f",(function(){return o})),i.d(t,"e",(function(){return r})),i.d(t,"i",(function(){return u})),i.d(t,"j",(function(){return c})),i.d(t,"g",(function(){return d})),i.d(t,"a",(function(){return f})),i.d(t,"k",(function(){return m})),i.d(t,"h",(function(){return p}));var s=i("0692"),a=[{value:"input",text:"?????????"},{value:"textarea",text:"?????????"},{value:"select",text:"??????????????????"},{value:"multipleSelect",text:"??????????????????"},{value:"radio",text:"?????????"},{value:"checkbox",text:"?????????"},{value:"member",text:"????????????"},{value:"multipleMember",text:"????????????"},{value:"data",text:"??????"},{value:"int",text:"??????"},{value:"float",text:"?????????"}],n=[{value:"TEST_CASE",text:"????????????"},{value:"ISSUE",text:"????????????"}],l=[{value:"functional",text:"????????????"}],o=[{value:"metersphere",text:"Metersphere"},{value:"Jira",text:"JIRA"},{value:"Tapd",text:"Tapd"},{value:"Zentao",text:"??????"},{value:"AzureDevops",text:"Azure Devops"}],r={input:"?????????",textarea:"?????????",select:"??????????????????",multipleSelect:"??????????????????",radio:"?????????",checkbox:"?????????",member:"????????????",multipleMember:"????????????",data:"??????",int:"??????",float:"?????????"},u={ISSUE:"????????????",TEST_CASE:"????????????"},c={"????????????":"custom_field.case_status","?????????":"custom_field.case_maintainer","????????????":"custom_field.case_priority","?????????":"custom_field.issue_creator","?????????":"custom_field.issue_processor","??????":"custom_field.issue_status","????????????":"custom_field.issue_severity"},d={new:"??????",closed:"?????????",resolved:"?????????",active:"??????",delete:"?????????"},f={LEVEL_FILTERS:[{text:"P0",value:"P0"},{text:"P1",value:"P1"},{text:"P2",value:"P2"},{text:"P3",value:"P3"}],RESULT_FILTERS:[{text:"Fail",value:"Fail"},{text:"Success",value:"Success"}],STATUS_FILTERS:[{text:s["default"].t("test_track.plan.plan_status_prepare"),value:"Prepare"},{text:s["default"].t("test_track.plan.plan_status_running"),value:"Underway"},{text:s["default"].t("test_track.plan.plan_status_completed"),value:"Completed"},{text:s["default"].t("test_track.plan.plan_status_trash"),value:"Trash"}]},m={SYSTEM:"??????",ORGANIZATION:"??????",WORKSPACE:"????????????",PROJECT:"??????"},p={TRACK:"????????????",API:"????????????",PERFORMANCE:"????????????",REPORT:"????????????"}},f173:function(e,t,i){},fd6e:function(e,t,i){"use strict";var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ms-edit-dialog",{ref:"msEditDialog",attrs:{width:"30%",visible:e.visible,title:e.$t("custom_field.create"),"append-to-body":""},on:{"update:visible":function(t){e.visible=t},confirm:e.save}},[i("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-position":"right","label-width":"auto",size:"small"}},[i("el-form-item",{attrs:{label:e.$t("custom_field.field_name"),prop:"name","label-width":e.labelWidth}},[e.isSystem?i("el-input",{attrs:{disabled:e.isSystem,value:e.$t(e.systemNameMap[e.form.name]),autocomplete:"off"}}):i("el-input",{attrs:{autocomplete:"off"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),i("el-form-item",{attrs:{label:e.$t("custom_field.field_remark"),prop:"remark","label-width":e.labelWidth}},[i("el-input",{attrs:{autosize:{minRows:2,maxRows:4},type:"textarea"},model:{value:e.form.remark,callback:function(t){e.$set(e.form,"remark",t)},expression:"form.remark"}})],1),i("el-form-item",{attrs:{label:e.$t("custom_field.scene"),prop:"type","label-width":e.labelWidth}},[i("el-select",{attrs:{disabled:e.isSystem||e.isTemplateEdit,filterable:"",placeholder:e.$t("custom_field.scene")},model:{value:e.form.scene,callback:function(t){e.$set(e.form,"scene",t)},expression:"form.scene"}},e._l(e.sceneOptions,(function(e){return i("el-option",{key:e.value,attrs:{label:e.text,value:e.value}})})),1)],1),i("el-form-item",{attrs:{label:e.$t("custom_field.field_type"),prop:"type","label-width":e.labelWidth}},[i("el-select",{attrs:{disabled:e.isSystem,filterable:"",placeholder:e.$t("custom_field.field_type")},model:{value:e.form.type,callback:function(t){e.$set(e.form,"type",t)},expression:"form.type"}},e._l(e.fieldTypeOptions,(function(e){return i("el-option",{key:e.value,attrs:{label:e.text,value:e.value}})})),1)],1),e.showOptions?i("el-form-item",{attrs:{label:e.$t("custom_field.field_option"),prop:"options","label-width":e.labelWidth}},[i("ms-single-handle-drag",{attrs:{"is-kv":"ISSUE"===e.form.scene,disable:"????????????"===e.form.name,data:e.form.options}})],1):e._e()],1)],1)},a=[],n=i("ebb4"),l=(i("87d5"),i("9b10")),o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"ms-single-handle-drag"},[i("div",[e._t("header",(function(){return[i("el-link",{staticClass:"add-text",attrs:{underline:!1,disabled:e.disable},on:{click:e.add}},[i("i",{staticClass:"el-icon-plus"},[e._v(e._s(e.$t("custom_field.add_option")))])])]})),e.isKv?i("ms-instructions-icon",{attrs:{size:"13",content:e.$t("?????????????????????Jira???????????????????????????????????????????????????")}}):e._e()],2),i("draggable",{staticClass:"list-group",attrs:{list:e.data,handle:".handle"}},e._l(e.data,(function(t,s){return i("div",{key:s,staticClass:"list-group-item"},[i("font-awesome-icon",{staticClass:"handle",attrs:{icon:["fas","align-justify"]}}),e.editIndex===s&&e.isKv?i("el-input",{staticClass:"text-item",attrs:{size:"mini",type:"text",placeholder:e.$t("custom_field.field_text")},on:{blur:function(i){return e.handleTextEdit(t)}},model:{value:t.text,callback:function(i){e.$set(t,"text",i)},expression:"element.text"}}):e.isKv?i("span",{staticClass:"text-item"},[t.system?i("span",[e._v(" ("+e._s(e.$t(t.text))+") ")]):i("span",[e._v(" "+e._s(t.text)+" ")])]):e._e(),e.editIndex===s?i("el-input",{staticClass:"text-item",attrs:{size:"mini",type:"value",placeholder:e.$t("custom_field.field_value")},on:{blur:function(i){return e.handleValueEdit(t)}},model:{value:t.value,callback:function(i){e.$set(t,"value",i)},expression:"element.value"}}):i("span",{staticClass:"text-item"},[t.system?i("span",[e._v(" "+e._s(e.$t(t.value))+" ")]):i("span",[e._v(" "+e._s((t.value&&e.isKv?"(":"")+t.value+(t.value&&e.isKv?")":""))+" ")])]),e._l(e.operators,(function(a,n){return i("i",{key:n,staticClass:"operator-icon",class:a.icon,attrs:{disabled:e.disable},on:{click:function(e){return a.click(t,s)}}})}))],2)})),0)],1)},r=[],u=(i("993f"),i("3335")),c=i.n(u),d=i("60e1"),f={name:"MsSingleHandleDrag",components:{MsInstructionsIcon:d["a"],draggable:c.a},data:function(){return{editIndex:-1}},props:{disable:Boolean,isKv:Boolean,data:{type:Array,default:function(){return[{name:"John",text:"text",id:0}]}},operators:{type:Array,default:function(){var e=this;return[{icon:"el-icon-edit",click:function(t,i){e.disable||t.system||(e.editIndex=i)}},{icon:"el-icon-close",click:function(t,i){e.disable||e.data.splice(i,1)}}]}}},methods:{add:function(){var e={text:"",value:""};this.data.push(e),this.editIndex=this.data.length-1},handleTextEdit:function(e){this.isKv||(e.text=e.value,this.editIndex=-1)},handleValueEdit:function(e){this.isKv||(e.text=e.value),e.value&&e.text&&(this.editIndex=-1)},isSystem:function(e){return!!e.system}}},m=f,p=(i("2bc9"),i("cba8")),h=Object(p["a"])(m,o,r,!1,null,"2623e05d",null),b=h.exports,_=i("495f"),v=i("e5a9"),y={name:"CustomFieldEdit",components:{MsSingleHandleDrag:b,MsEditDialog:l["a"]},props:["scene","labelWidth"],data:function(){return{form:{name:"",type:"input",scene:"TEST_CASE",remark:"",system:!1,options:[]},rules:{name:[{required:!0,message:this.$t("test_track.case.input_name"),trigger:"blur"},{max:64,message:this.$t("test_track.length_less_than")+"64",trigger:"blur"}],scene:[{required:!0,trigger:"change"}],type:[{required:!0,trigger:"change"}]},visible:!1,url:""}},computed:{fieldTypeOptions:function(){return v["d"]},sceneOptions:function(){return v["c"]},showOptions:function(){return["select","multipleSelect","radio","checkbox"].indexOf(this.form.type)>-1},isSystem:function(){return this.form.system},systemNameMap:function(){return v["j"]},isTemplateEdit:function(){return!!this.scene}},methods:{open:function(e){this.visible=!0,e?(Object.assign(this.form,e),e.options instanceof Array||(this.form.options=e.options?JSON.parse(e.options):[]),e.id?this.url="custom/field/update":this.url="custom/field/add"):(this.form={name:"",type:"input",scene:"TEST_CASE",remark:"",system:!1,options:[]},this.isTemplateEdit&&(this.form.scene=this.scene),this.url="custom/field/add")},save:function(){var e=this;this.$refs.form.validate((function(t){if(t){var i={};if(Object.assign(i,e.form),i.workspaceId=Object(_["j"])(),["select","multipleSelect","radio","checkbox"].indexOf(i.type)>-1){if(i.options.length<1)return void e.$warning(e.$t("custom_field.option_check"));var s,a=Object(n["a"])(i.options);try{for(a.s();!(s=a.n()).done;){var l=s.value;if(!l.text||!l.value)return void e.$warning(e.$t("custom_field.option_value_check"))}}catch(o){a.e(o)}finally{a.f()}}i.options=JSON.stringify(e.form.options),e.result=e.$post(e.url,i,(function(t){e.visible=!1,i.id=t.data,e.$success(e.$t("commons.save_success")),e.$emit("refresh"),e.$emit("save",i)}))}}))}}},g=y,x=Object(p["a"])(g,s,a,!1,null,"5696a714",null);t["a"]=x.exports}}]);