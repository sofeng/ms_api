(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6585a130"],{"0091":function(e,t,r){var n=r("0fd2"),a=n.match(/AppleWebKit\/(\d+)\./);e.exports=!!a&&+a[1]},"0ea3":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ms-container",[r("ms-main-container",[r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:24}},[r("overview-compare-card",{ref:"overviewCard"})],1)],1),r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:24}},[r("load-compare-card",{ref:"loadCard"})],1)],1),r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:24}},[r("response-time-compare-card",{ref:"responseTimeCard"})],1)],1)],1)],1)},a=[],i=(r("10dd"),r("1b11")),s=r("489a"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-card",{staticClass:"table-card",scopedSlots:e._u([{key:"header",fn:function(){return[r("span",{staticClass:"title"},[e._v("Overview")])]},proxy:!0}])},[r("el-table",{staticClass:"adjust-table test-content",attrs:{border:"",data:e.overviewList}},[r("el-table-column",{attrs:{prop:"name",label:e.$t("commons.name")}}),r("el-table-column",{attrs:{prop:"createTime",label:e.$t("commons.create_time")},scopedSlots:e._u([{key:"default",fn:function(t){return[r("span",[e._v(e._s(e._f("timestampFormatDate")(t.row.createTime)))])]}}])}),r("el-table-column",{attrs:{prop:"maxUsers",label:"Max Users"}}),r("el-table-column",{attrs:{prop:"avgTransactions",label:"Avg.Transactions"}}),r("el-table-column",{attrs:{prop:"errors",label:"Errors"}}),r("el-table-column",{attrs:{prop:"avgResponseTime",label:"Avg.Response Time"}}),r("el-table-column",{attrs:{prop:"responseTime90",label:"90% Response Time"}}),r("el-table-column",{attrs:{prop:"avgBandwidth",label:"Avg.Bandwidth"}})],1)],1)},c=[],u=(r("4c1e"),r("fee8"),r("89a8"),r("1a91"),{name:"OverviewCompareCard",data:function(){return{reportId:null,compareReports:[],overviewList:[]}},methods:{initTable:function(){var e=this;this.overviewList=[],this.reportId=this.$route.path.split("/")[4],this.compareReports=JSON.parse(localStorage.getItem("compareReports")),this.compareReports.forEach((function(t){e.initOverview(t)}))},initOverview:function(e){var t=this;this.$get("/performance/report/content/testoverview/"+e.id).then((function(r){var n=r.data.data;t.overviewList.push({name:e.name,createTime:e.createTime,maxUsers:n.maxUsers,avgThroughput:n.avgThroughput,avgTransactions:n.avgTransactions,errors:n.errors,avgResponseTime:n.avgResponseTime,responseTime90:n.responseTime90,avgBandwidth:n.avgBandwidth})})).catch((function(){}))}}}),l=u,f=r("cba8"),p=Object(f["a"])(l,o,c,!1,null,"04a0d9ff",null),m=p.exports,d=r("3996"),h=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-card",{scopedSlots:e._u([{key:"header",fn:function(){return[r("span",{staticClass:"title"},[e._v("Load")])]},proxy:!0}])},e._l(e.loadList,(function(e,t){return r("div",{key:t},[r("ms-chart",{ref:"chart1",refInFor:!0,attrs:{options:e,autoresize:!0}})],1)})),0)},v=[],x=r("045d"),g=(r("8ea3"),r("5a05"),r("993f"),r("2788"),r("a536"),r("d3af"),r("aa08"),r("e766"),r("b110"),r("d25d"),r("fe35"),{name:"LoadCompareCard",components:{MsChart:d["a"]},data:function(){return{loadList:[]}},methods:{initCard:function(){var e=this;this.loadList=[],this.reportId=this.$route.path.split("/")[4],this.compareReports=JSON.parse(localStorage.getItem("compareReports")),this.compareReports.forEach((function(t){e.initOverview(t)}))},initOverview:function(e){var t=this;this.$get("/performance/report/content/load_chart/"+e.id).then((function(r){var n=r.data.data,a=n.filter((function(e){return-1===e.yAxis2})).map((function(e){return e.yAxis})),i=n.filter((function(e){return-1===e.yAxis})).map((function(e){return e.yAxis2})),s=t._getChartMax(a),o=t._getChartMax(i),c=n.filter((function(e){return-1===e.yAxis2})).map((function(e){return e.groupName}));c=t._unique(c);var u=n.filter((function(e){return-1===e.yAxis})).map((function(e){return e.groupName}));u=t._unique(u);var l={title:{text:e.name+" "+t.$options.filters["timestampFormatDate"](e.createTime),left:"center",top:20,textStyle:{color:"#65A2FF"}},tooltip:{show:!0,trigger:"axis",confine:!0},legend:{},xAxis:{},yAxis:[{name:"User",type:"value",min:0,max:s,splitNumber:5,interval:s/5},{name:"Transactions/s",type:"value",splitNumber:5,min:0,max:o,interval:o/5}],series:[]},f={series:[{name:"users",color:"#0CA74A"},{name:"hits",yAxisIndex:"1",color:"#65A2FF"},{name:"errors",yAxisIndex:"1",color:"#E6113C"}]};c.forEach((function(e){f["series"].splice(0,0,{name:e,yAxisIndex:"0"})})),u.forEach((function(e){f["series"].splice(0,0,{name:e,yAxisIndex:"1"})})),t.loadList.push(t.generateOption(l,n,f))})).catch((function(){t.loadList=[]}))},generateOption:function(e,t,r){var n=t,a=[];for(var i in r)"series"!==i?this.$set(e,i,r[i]):a=r[i];var s=[],o={},c=[],u=[];for(var l in n.forEach((function(e){c.includes(e.xAxis)||c.push(e.xAxis),c.sort();var t=e.groupName;s.includes(t)||(s.push(t),o[t]=[]),-1===e.yAxis?o[t].splice(c.indexOf(e.xAxis),0,[e.xAxis,e.yAxis2.toFixed(2)]):o[t].splice(c.indexOf(e.xAxis),0,[e.xAxis,e.yAxis.toFixed(2)])})),this.$set(e.legend,"data",s),this.$set(e.legend,"type","scroll"),this.$set(e.legend,"bottom","10px"),this.$set(e.xAxis,"data",c),o){var f=o[l];f.sort((function(e,t){return e[0].localeCompare(t[0])}));var p={name:l,type:"line",data:f,smooth:!0},m=a.map((function(e){return e.name}));if(m.includes(l))for(var d=0;d<a.length;d++){var h=a[d];h["name"]===l&&Object.assign(p,h)}u.push(p)}return this.$set(e,"series",u),e},_getChartMax:function(e){var t=Math.max.apply(Math,Object(x["a"])(e));return 5*Math.ceil(t/4.5)},_unique:function(e){return Array.from(new Set(e))}}}),b=g,A=(r("34c5"),Object(f["a"])(b,h,v,!1,null,"2ecf0e7e",null)),y=A.exports,C=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-card",{scopedSlots:e._u([{key:"header",fn:function(){return[r("span",{staticClass:"title"},[e._v("Response Time")])]},proxy:!0}])},e._l(e.responseTimeList,(function(e,t){return r("div",{key:t},[r("ms-chart",{ref:"chart1",refInFor:!0,attrs:{options:e,autoresize:!0}})],1)})),0)},w=[],T={name:"ResponseTimeCompareCard",components:{MsChart:d["a"]},data:function(){return{responseTimeList:[]}},methods:{initCard:function(){var e=this;this.responseTimeList=[],this.reportId=this.$route.path.split("/")[4],this.compareReports=JSON.parse(localStorage.getItem("compareReports")),this.compareReports.forEach((function(t){e.initOverview(t)}))},initOverview:function(e){var t=this;this.$get("/performance/report/content/res_chart/"+e.id).then((function(r){var n=r.data.data,a=n.filter((function(e){return-1===e.yAxis2})).map((function(e){return e.yAxis})),i=n.filter((function(e){return-1===e.yAxis})).map((function(e){return e.yAxis2})),s=t._getChartMax(a),o=t._getChartMax(i),c=n.filter((function(e){return-1===e.yAxis2})).map((function(e){return e.groupName}));c=t._unique(c);var u=n.filter((function(e){return-1===e.yAxis})).map((function(e){return e.groupName}));u=t._unique(u);var l={title:{text:e.name+" "+t.$options.filters["timestampFormatDate"](e.createTime),left:"center",top:20,textStyle:{color:"#99743C"}},tooltip:{show:!0,trigger:"axis",confine:!0,formatter:function(e,t,r){var n="",a=e[0].name;n+=a+"<br/>";for(var i=0;i<e.length;i++){var s=e[i].seriesName;s.length>100&&(s=s.substring(0,100));var o=e[i].value,c=e[i].marker;n+=c+s+": "+o[1]+"<br/>"}return n}},legend:{},xAxis:{},yAxis:[{name:"User",type:"value",min:0,max:s,interval:s/5},{name:"Response Time",type:"value",min:0,max:o,interval:o/5}],series:[]},f={series:[{name:"users",color:"#0CA74A"}]};c.forEach((function(e){f["series"].splice(0,0,{name:e,yAxisIndex:"0"})})),u.forEach((function(e){f["series"].splice(0,0,{name:e,yAxisIndex:"1"})})),t.responseTimeList.push(t.generateOption(l,n,f))})).catch((function(){t.responseTimeList=[]}))},generateOption:function(e,t,r){var n=t,a=[];for(var i in r)"series"!==i?this.$set(e,i,r[i]):a=r[i];var s=[],o={},c=[],u=[];for(var l in n.forEach((function(e){c.includes(e.xAxis)||c.push(e.xAxis),c.sort();var t=e.groupName;s.includes(t)||(s.push(t),o[t]=[]),-1===e.yAxis?o[t].splice(c.indexOf(e.xAxis),0,[e.xAxis,e.yAxis2.toFixed(2)]):o[t].splice(c.indexOf(e.xAxis),0,[e.xAxis,e.yAxis.toFixed(2)])})),this.$set(e.legend,"data",s),this.$set(e.legend,"type","scroll"),this.$set(e.legend,"bottom","10px"),this.$set(e.xAxis,"data",c),o){var f=o[l];f.sort((function(e,t){return e[0].localeCompare(t[0])}));var p={name:l,type:"line",data:f,smooth:!0},m=a.map((function(e){return e.name}));if(m.includes(l))for(var d=0;d<a.length;d++){var h=a[d];h["name"]===l&&Object.assign(p,h)}u.push(p)}return this.$set(e,"series",u),e},_getChartMax:function(e){var t=Math.max.apply(Math,Object(x["a"])(e));return 5*Math.ceil(t/4.5)},_unique:function(e){return Array.from(new Set(e))}}},_=T,O=(r("c9e4"),Object(f["a"])(_,C,w,!1,null,"e62965ec",null)),$=O.exports,R={name:"PerformanceReportCompare",components:{ResponseTimeCompareCard:$,LoadCompareCard:y,MsChart:d["a"],OverviewCompareCard:m,MsMainContainer:s["a"],MsContainer:i["a"]},mounted:function(){this.init()},computed:{isReadOnly:function(){return!1}},data:function(){return{}},methods:{init:function(){this.$refs.overviewCard.initTable(),this.$refs.loadCard.initCard(),this.$refs.responseTimeCard.initCard()}},watch:{$route:function(e){"ReportCompare"===e.name&&this.init()}}},M=R,E=(r("e271"),Object(f["a"])(M,n,a,!1,null,"91ddf0d4",null));t["default"]=E.exports},"227b":function(e,t,r){"use strict";var n=r("8735"),a=r("58db"),i=r("3ffc"),s=r("8e74"),o=n.RangeError;e.exports=function(e){var t=i(s(this)),r="",n=a(e);if(n<0||n==1/0)throw o("Wrong number of repetitions");for(;n>0;(n>>>=1)&&(t+=t))1&n&&(r+=t);return r}},"34c5":function(e,t,r){"use strict";r("41a1")},"41a1":function(e,t,r){},6962:function(e,t,r){},"80d2":function(e,t,r){},a536:function(e,t,r){"use strict";var n=r("88d4"),a=r("ce5b"),i=r("092e"),s=r("ac3c"),o=r("126a"),c=r("3ffc"),u=r("9ad2"),l=r("8a1d"),f=r("fbe3"),p=r("dd35"),m=r("b1a8"),d=r("0116"),h=r("0091"),v=[],x=a(v.sort),g=a(v.push),b=u((function(){v.sort(void 0)})),A=u((function(){v.sort(null)})),y=f("sort"),C=!u((function(){if(d)return d<70;if(!(p&&p>3)){if(m)return!0;if(h)return h<603;var e,t,r,n,a="";for(e=65;e<76;e++){switch(t=String.fromCharCode(e),e){case 66:case 69:case 70:case 72:r=3;break;case 68:case 71:r=4;break;default:r=2}for(n=0;n<47;n++)v.push({k:t+n,v:r})}for(v.sort((function(e,t){return t.v-e.v})),n=0;n<v.length;n++)t=v[n].k.charAt(0),a.charAt(a.length-1)!==t&&(a+=t);return"DGBEFHACIJK"!==a}})),w=b||!A||!y||!C,T=function(e){return function(t,r){return void 0===r?-1:void 0===t?1:void 0!==e?+e(t,r)||0:c(t)>c(r)?1:-1}};n({target:"Array",proto:!0,forced:w},{sort:function(e){void 0!==e&&i(e);var t=s(this);if(C)return void 0===e?x(t):x(t,e);var r,n,a=[],c=o(t);for(n=0;n<c;n++)n in t&&g(a,t[n]);l(a,T(e)),r=a.length,n=0;while(n<r)t[n]=a[n++];while(n<c)delete t[n++];return t}})},aa08:function(e,t,r){"use strict";var n=r("88d4"),a=r("ce5b"),i=r("e544"),s=r("8e74"),o=r("3ffc"),c=r("e38b"),u=a("".indexOf);n({target:"String",proto:!0,forced:!c("includes")},{includes:function(e){return!!~u(o(s(this)),o(i(e)),arguments.length>1?arguments[1]:void 0)}})},b1a8:function(e,t,r){var n=r("0fd2");e.exports=/MSIE|Trident/.test(n)},c9e4:function(e,t,r){"use strict";r("6962")},d3af:function(e,t,r){"use strict";var n=r("88d4"),a=r("8735"),i=r("ce5b"),s=r("58db"),o=r("e14f"),c=r("227b"),u=r("9ad2"),l=a.RangeError,f=a.String,p=Math.floor,m=i(c),d=i("".slice),h=i(1..toFixed),v=function(e,t,r){return 0===t?r:t%2===1?v(e,t-1,r*e):v(e*e,t/2,r)},x=function(e){var t=0,r=e;while(r>=4096)t+=12,r/=4096;while(r>=2)t+=1,r/=2;return t},g=function(e,t,r){var n=-1,a=r;while(++n<6)a+=t*e[n],e[n]=a%1e7,a=p(a/1e7)},b=function(e,t){var r=6,n=0;while(--r>=0)n+=e[r],e[r]=p(n/t),n=n%t*1e7},A=function(e){var t=6,r="";while(--t>=0)if(""!==r||0===t||0!==e[t]){var n=f(e[t]);r=""===r?n:r+m("0",7-n.length)+n}return r},y=u((function(){return"0.000"!==h(8e-5,3)||"1"!==h(.9,0)||"1.25"!==h(1.255,2)||"1000000000000000128"!==h(0xde0b6b3a7640080,0)}))||!u((function(){h({})}));n({target:"Number",proto:!0,forced:y},{toFixed:function(e){var t,r,n,a,i=o(this),c=s(e),u=[0,0,0,0,0,0],p="",h="0";if(c<0||c>20)throw l("Incorrect fraction digits");if(i!=i)return"NaN";if(i<=-1e21||i>=1e21)return f(i);if(i<0&&(p="-",i=-i),i>1e-21)if(t=x(i*v(2,69,1))-69,r=t<0?i*v(2,-t,1):i/v(2,t,1),r*=4503599627370496,t=52-t,t>0){g(u,0,r),n=c;while(n>=7)g(u,1e7,0),n-=7;g(u,v(10,n,1),0),n=t-1;while(n>=23)b(u,1<<23),n-=23;b(u,1<<n),g(u,1,1),b(u,2),h=A(u)}else g(u,0,r),g(u,1<<-t,0),h=A(u)+m("0",c);return c>0?(a=h.length,h=p+(a<=c?"0."+m("0",c-a)+h:d(h,0,a-c)+"."+d(h,a-c))):h=p+h,h}})},dd35:function(e,t,r){var n=r("0fd2"),a=n.match(/firefox\/(\d+)/i);e.exports=!!a&&+a[1]},e271:function(e,t,r){"use strict";r("80d2")}}]);