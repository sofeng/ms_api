(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0693c731"],{"5d01":function(e,t,o){"use strict";o.r(t);var i=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("el-card",{directives:[{name:"loading",rawName:"v-loading",value:e.result.loading,expression:"result.loading"}],staticClass:"table-card",scopedSlots:e._u([{key:"header",fn:function(){return[o("ms-table-header",{attrs:{"create-permission":["ORGANIZATION_WORKSPACE:READ+CREATE"],condition:e.condition,"create-tip":e.$t("workspace.create"),title:e.$t("commons.workspace")},on:{"update:condition":function(t){e.condition=t},search:e.list,create:e.create}})]},proxy:!0}])},[o("el-table",{staticClass:"adjust-table",staticStyle:{width:"100%"},attrs:{border:"",data:e.items,height:e.screenHeight}},[o("el-table-column",{attrs:{prop:"name",label:e.$t("commons.name")}}),o("el-table-column",{attrs:{prop:"description",label:e.$t("commons.description")}}),o("el-table-column",{attrs:{label:e.$t("commons.member")},scopedSlots:e._u([{key:"default",fn:function(t){return[o("el-link",{staticClass:"member-size",attrs:{type:"primary"},on:{click:function(o){return e.cellClick(t.row)}}},[e._v(" "+e._s(t.row.memberSize)+" ")])]}}])}),o("el-table-column",{attrs:{label:e.$t("commons.operating")},scopedSlots:e._u([{key:"default",fn:function(t){return[o("div",[o("ms-table-operator",{attrs:{"edit-permission":["ORGANIZATION_WORKSPACE:READ+EDIT"],"delete-permission":["ORGANIZATION_WORKSPACE:READ+DELETE"],"show-delete":e.workspaceId!==t.row.id},on:{editClick:function(o){return e.edit(t.row)},deleteClick:function(o){return e.handleDelete(t.row)}}})],1)]}}])})],1),o("ms-table-pagination",{attrs:{change:e.list,"current-page":e.currentPage,"page-size":e.pageSize,total:e.total},on:{"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t},"update:pageSize":function(t){e.pageSize=t},"update:page-size":function(t){e.pageSize=t}}})],1),o("el-dialog",{attrs:{"close-on-click-modal":!1,title:e.$t("workspace.create"),visible:e.dialogWsAddVisible,width:"30%"},on:{"update:visible":function(t){e.dialogWsAddVisible=t},close:e.close},scopedSlots:e._u([{key:"footer",fn:function(){return[o("ms-dialog-footer",{on:{cancel:function(t){e.dialogWsAddVisible=!1},confirm:function(t){return e.submit("form")}}})]},proxy:!0}])},[o("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-position":"right","label-width":"100px",size:"small"}},[o("el-form-item",{attrs:{label:e.$t("commons.name"),prop:"name"}},[o("el-input",{attrs:{autocomplete:"off"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),o("el-form-item",{attrs:{label:e.$t("commons.description"),prop:"description"}},[o("el-input",{attrs:{type:"textarea"},model:{value:e.form.description,callback:function(t){e.$set(e.form,"description",t)},expression:"form.description"}})],1)],1)],1),o("el-dialog",{attrs:{"close-on-click-modal":!1,title:e.$t("workspace.update"),visible:e.dialogWsUpdateVisible,width:"30%"},on:{"update:visible":function(t){e.dialogWsUpdateVisible=t}},scopedSlots:e._u([{key:"footer",fn:function(){return[o("ms-dialog-footer",{on:{cancel:function(t){e.dialogWsUpdateVisible=!1},confirm:function(t){return e.submit("form")}}})]},proxy:!0}])},[o("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-position":"right","label-width":"100px",size:"small"}},[o("el-form-item",{attrs:{label:e.$t("commons.name"),prop:"name"}},[o("el-input",{attrs:{autocomplete:"off"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),o("el-form-item",{attrs:{label:e.$t("commons.description"),prop:"description"}},[o("el-input",{attrs:{type:"textarea"},model:{value:e.form.description,callback:function(t){e.$set(e.form,"description",t)},expression:"form.description"}})],1)],1)],1),o("el-dialog",{staticClass:"dialog-css",attrs:{"close-on-click-modal":!1,visible:e.dialogWsMemberVisible,width:"70%","destroy-on-close":!0},on:{"update:visible":function(t){e.dialogWsMemberVisible=t},close:e.close},scopedSlots:e._u([{key:"title",fn:function(){return[o("ms-table-header",{attrs:{condition:e.dialogCondition,"create-permission":["ORGANIZATION_USER:READ+CREATE"],"create-tip":e.$t("member.create"),title:e.$t("commons.member")},on:{"update:condition":function(t){e.dialogCondition=t},create:e.addMember,search:e.dialogSearch}})]},proxy:!0}])},[o("el-table",{staticStyle:{width:"100%","margin-top":"5px"},attrs:{data:e.memberLineData}},[o("el-table-column",{attrs:{prop:"name",label:e.$t("commons.username")}}),o("el-table-column",{attrs:{prop:"email",label:e.$t("commons.email")}}),o("el-table-column",{attrs:{prop:"phone",label:e.$t("commons.phone")}}),o("el-table-column",{attrs:{label:e.$t("commons.group"),width:"150"},scopedSlots:e._u([{key:"default",fn:function(e){return[o("ms-roles-tag",{attrs:{roles:e.row.groups,type:"success"}})]}}])}),o("el-table-column",{attrs:{label:e.$t("commons.operating")},scopedSlots:e._u([{key:"default",fn:function(t){return[o("div",[o("ms-table-operator",{attrs:{tip2:e.$t("commons.remove"),"edit-permission":["ORGANIZATION_USER:READ+EDIT"],"delete-permission":["ORGANIZATION_USER:READ+DELETE"]},on:{editClick:function(o){return e.editMember(t.row)},deleteClick:function(o){return e.delMember(t.row)}}})],1)]}}])})],1),o("ms-table-pagination",{attrs:{change:e.dialogSearch,"current-page":e.dialogCurrentPage,"page-size":e.dialogPageSize,total:e.dialogTotal},on:{"update:currentPage":function(t){e.dialogCurrentPage=t},"update:current-page":function(t){e.dialogCurrentPage=t},"update:pageSize":function(t){e.dialogPageSize=t},"update:page-size":function(t){e.dialogPageSize=t}}})],1),o("add-member",{ref:"addMember",attrs:{"group-type":"WORKSPACE","group-scope-id":e.orgId},on:{submit:e.submitForm}}),o("el-dialog",{attrs:{"close-on-click-modal":!1,title:e.$t("member.modify"),visible:e.dialogWsMemberUpdateVisible,width:"30%","destroy-on-close":!0},on:{"update:visible":function(t){e.dialogWsMemberUpdateVisible=t},close:e.closeFunc},scopedSlots:e._u([{key:"footer",fn:function(){return[o("ms-dialog-footer",{on:{cancel:function(t){e.dialogWsMemberUpdateVisible=!1},confirm:function(t){return e.updateOrgMember("updateUserForm")}}})]},proxy:!0}])},[o("el-form",{ref:"updateUserForm",attrs:{model:e.memberForm,"label-position":"right","label-width":"100px",size:"small"}},[o("el-form-item",{attrs:{label:"ID",prop:"id"}},[o("el-input",{attrs:{autocomplete:"off",disabled:!0},model:{value:e.memberForm.id,callback:function(t){e.$set(e.memberForm,"id",t)},expression:"memberForm.id"}})],1),o("el-form-item",{attrs:{label:e.$t("commons.username"),prop:"name"}},[o("el-input",{attrs:{autocomplete:"off",disabled:!0},model:{value:e.memberForm.name,callback:function(t){e.$set(e.memberForm,"name",t)},expression:"memberForm.name"}})],1),o("el-form-item",{attrs:{label:e.$t("commons.email"),prop:"email"}},[o("el-input",{attrs:{autocomplete:"off",disabled:!0},model:{value:e.memberForm.email,callback:function(t){e.$set(e.memberForm,"email",t)},expression:"memberForm.email"}})],1),o("el-form-item",{attrs:{label:e.$t("commons.phone"),prop:"phone"}},[o("el-input",{attrs:{autocomplete:"off",disabled:!0},model:{value:e.memberForm.phone,callback:function(t){e.$set(e.memberForm,"phone",t)},expression:"memberForm.phone"}})],1),o("el-form-item",{attrs:{label:e.$t("commons.group"),prop:"groupIds",rules:{required:!0,message:e.$t("group.please_select_group"),trigger:"change"}}},[o("el-select",{staticClass:"select-width",attrs:{multiple:"",placeholder:e.$t("group.please_select_group")},model:{value:e.memberForm.groupIds,callback:function(t){e.$set(e.memberForm,"groupIds",t)},expression:"memberForm.groupIds"}},e._l(e.memberForm.allgroups,(function(e){return o("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1)],1)],1),o("ms-delete-confirm",{ref:"deleteConfirm",attrs:{title:e.$t("workspace.delete")},on:{delete:e._handleDelete}})],1)},r=[],s=(o("8ea3"),o("10dd"),o("5a05"),o("89a8"),o("978f")),a=o("5422"),n=o("4abd"),l=o("59d9"),m=o("10b9"),c=o("2edc"),d=o("1c98"),u=o("be8e"),p=o("15bc"),b=o("495f"),f=o("a369"),g=o("bcc4"),h={name:"MsOrganizationWorkspace",components:{MsDeleteConfirm:f["a"],MsCreateBox:s["a"],MsTablePagination:l["a"],MsTableHeader:m["a"],MsRolesTag:c["a"],MsTableOperator:d["a"],MsDialogFooter:p["a"],MsTableOperatorButton:u["a"],AddMember:g["a"]},activated:function(){this.list()},computed:{currentUser:function(){return Object(b["h"])()},workspaceId:function(){return Object(b["j"])()},orgId:function(){return Object(b["f"])()}},inject:["reloadTopMenus"],methods:{create:function(){this.dialogWsAddVisible=!0,this.form={}},submit:function(e){var t=this;this.$refs[e].validate((function(e){if(!e)return!1;var o="add";t.form.id&&(o="update"),t.form.organizationId=Object(b["f"])(),t.$post("/workspace/"+o,t.form,(function(){t.dialogWsAddVisible=!1,t.dialogWsUpdateVisible=!1,"add"==o?(a["Message"].success(t.$t("commons.save_success")),t.reloadTopMenus()):"update"==o&&(a["Message"].success(t.$t("commons.modify_success")),t.list())}))}))},edit:function(e){this.dialogWsUpdateVisible=!0,this.form=Object.assign({},e)},handleDelete:function(e){this.$refs.deleteConfirm.open(e)},_handleDelete:function(e){var t=this;this.$confirm(this.$t("organization.delete_confirm"),"",{confirmButtonText:this.$t("commons.confirm"),cancelButtonText:this.$t("commons.cancel"),type:"warning"}).then((function(){t.$get("/workspace/delete/"+e.id,(function(){t.$success(t.$t("commons.delete_success")),t.list()}))})).catch((function(){t.$message({type:"info",message:t.$t("commons.delete_cancelled")})}))},list:function(){var e=this,t="/workspace/list/"+this.currentPage+"/"+this.pageSize,o=Object(b["f"])();this.condition.organizationId=o,this.result=this.$post(t,this.condition,(function(t){var o=t.data;e.items=o.listObject;for(var i=function(t){var o={name:"",workspaceId:e.items[t].id},i="user/ws/member/list/all";e.$post(i,o,(function(o){var i=o.data;e.$set(e.items[t],"memberSize",i.length)}))},r=0;r<e.items.length;r++)i(r);e.total=o.itemCount}))},addMember:function(){this.$refs.addMember.open(),Object(b["v"])(this.close)},cellClick:function(e){var t=this;this.currentWorkspaceRow=e,this.dialogWsMemberVisible=!0;var o={name:"",workspaceId:e.id};this.wsId=e.id;var i="/user/ws/member/list";this.result=this.$post(this.buildPagePath(i),o,(function(o){var i=o.data;t.memberLineData=i.listObject;for(var r="/user/group/list/ws/"+e.id,s=function(e){t.$get(r+"/"+encodeURIComponent(t.memberLineData[e].id),(function(o){var i=o.data;t.$set(t.memberLineData[e],"groups",i)}))},a=0;a<t.memberLineData.length;a++)s(a);t.dialogTotal=i.itemCount}))},dialogSearch:function(){var e=this,t=this.currentWorkspaceRow;this.dialogWsMemberVisible=!0;var o=this.dialogCondition;this.$set(o,"workspaceId",t.id);var i="/user/ws/member/list";this.result=this.$post(this.buildPagePath(i),o,(function(o){var i=o.data;e.memberLineData=i.listObject;for(var r="/user/group/list/ws/"+t.id,s=function(t){e.$get(r+"/"+encodeURIComponent(e.memberLineData[t].id),(function(o){var i=o.data;e.$set(e.memberLineData[t],"groups",i)}))},a=0;a<e.memberLineData.length;a++)s(a);e.dialogTotal=i.itemCount}))},closeFunc:function(){this.form={}},submitForm:function(e){var t=this;e["workspaceId"]=this.currentWorkspaceRow.id,this.result=this.$post("user/ws/member/add",e,(function(){t.$success(t.$t("commons.save_success")),t.cellClick(t.currentWorkspaceRow),t.$refs.addMember.close()}))},editMember:function(e){var t=this;this.dialogWsMemberUpdateVisible=!0,this.memberForm=Object.assign({},e);var o=this.memberForm.groups.map((function(e){return e.id}));this.result=this.$post("/user/group/list",{type:n["l"],resourceId:Object(b["f"])()},(function(e){t.$set(t.memberForm,"allgroups",e.data)})),this.$set(this.memberForm,"groupIds",o),Object(b["v"])(this.close)},delMember:function(e){var t=this;this.$confirm(this.$t("member.remove_member"),"",{confirmButtonText:this.$t("commons.confirm"),cancelButtonText:this.$t("commons.cancel"),type:"warning"}).then((function(){t.result=t.$get("/user/ws/member/delete/"+t.currentWorkspaceRow.id+"/"+encodeURIComponent(e.id),(function(){t.$success(t.$t("commons.remove_success")),t.cellClick(t.currentWorkspaceRow)}))})).catch((function(){t.$info(t.$t("commons.remove_cancel"))}))},updateOrgMember:function(e){var t=this,o={id:this.memberForm.id,name:this.memberForm.name,email:this.memberForm.email,phone:this.memberForm.phone,groupIds:this.memberForm.groupIds,workspaceId:this.currentWorkspaceRow.id};this.$refs[e].validate((function(e){e&&(t.result=t.$post("/workspace/member/update",o,(function(){t.$success(t.$t("commons.modify_success")),t.dialogWsMemberUpdateVisible=!1,t.cellClick(t.currentWorkspaceRow)})))}))},close:function(){Object(b["z"])(this.close),this.dialogWsMemberUpdateVisible=!1,this.dialogWsMemberAddVisible=!1,this.memberLineData=[],this.list()},buildPagePath:function(e){return e+"/"+this.dialogCurrentPage+"/"+this.dialogPageSize},querySearch:function(e,t){var o=this.userList,i=e?o.filter(this.createFilter(e)):o;t(i)},createFilter:function(e){return function(t){return 0===t.email.indexOf(e.toLowerCase())||0===t.id.indexOf(e.toLowerCase())}},handleSelect:function(e){this.$set(this.form,"userId",e.id)}},data:function(){return{result:{},dialogWsAddVisible:!1,dialogWsUpdateVisible:!1,dialogWsMemberVisible:!1,dialogWsMemberAddVisible:!1,dialogWsMemberUpdateVisible:!1,condition:{},dialogCondition:{},items:[],userList:[],currentPage:1,pageSize:10,total:0,dialogCurrentPage:1,dialogPageSize:5,dialogTotal:0,memberLineData:[],memberForm:{},screenHeight:"calc(100vh - 195px)",form:{},rules:{name:[{required:!0,message:this.$t("workspace.input_name"),trigger:"blur"},{min:2,max:20,message:this.$t("commons.input_limit",[2,20]),trigger:"blur"},{required:!0,pattern:/^(?!-)(?!.*?-$)[a-zA-Z0-9\u4e00-\u9fa5-]+$/,message:this.$t("workspace.special_characters_are_not_supported"),trigger:"blur"}],description:[{max:50,message:this.$t("commons.input_limit",[0,50]),trigger:"blur"}]},wsMemberRule:{userIds:[{required:!0,message:this.$t("member.please_choose_member"),trigger:["blur"]}],groupIds:[{required:!0,message:this.$t("group.please_select_group"),trigger:["blur"]}]},currentWorkspaceRow:{},wsId:""}}},$=h,w=(o("80ba"),o("cba8")),k=Object(w["a"])($,i,r,!1,null,"39fd33b0",null);t["default"]=k.exports},"653c":function(e,t,o){},"80ba":function(e,t,o){"use strict";o("653c")}}]);