(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[71],{"92fd":function(t,e,a){"use strict";var n=a("9b0c"),s=a.n(n);e["default"]=s.a},"9b0c":function(t,e){},a369:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("q-input",{staticStyle:{display:"none"},model:{value:t.scaneddata.request_time,callback:function(e){t.$set(t.scaneddata,"request_time",e)},expression:"scaneddata.request_time"}}),a("transition",{attrs:{appear:"","enter-active-class":"animated fadeIn"}},[a("q-table",{staticClass:"my-sticky-header-table shadow-24",attrs:{data:t.table_list,"row-key":"id",separator:t.separator,loading:t.loading,columns:t.columns,"hide-bottom":"",pagination:t.pagination,"no-data-label":"No data","no-results-label":"No data you want","table-style":{height:t.height},flat:"",bordered:""},on:{"update:pagination":function(e){t.pagination=e}},scopedSlots:t._u([{key:"top",fn:function(){return[a("q-btn-group",{attrs:{push:""}},[a("q-btn",{attrs:{label:t.$t("refresh"),icon:"refresh"},on:{click:function(e){return t.reFresh()}}})],1),a("q-space"),a("q-btn-group",{attrs:{push:""}},[a("q-btn",{attrs:{color:"purple",label:t.$t("stock.view_stocklist.cyclecountresult")},on:{click:function(e){return t.ConfirmCount()}}},[a("q-tooltip",{attrs:{"content-class":"bg-amber text-black shadow-4",offset:[10,10],"content-style":"font-size: 12px"}},[t._v("\n              "+t._s(t.$t("stock.view_stocklist.cyclecountresulttip"))+"\n            ")])],1)],1)]},proxy:!0},{key:"body",fn:function(e){return[a("q-tr",{attrs:{props:e}},[a("q-td",{key:"bin_name",class:{"scan-background":""!==t.bin_scan&&t.bin_scan===e.row.bin_name},attrs:{props:e}},[t._v("\n            "+t._s(e.row.bin_name)+"\n          ")]),a("q-td",{key:"goods_code",attrs:{props:e}},[t._v("\n            "+t._s(e.row.goods_code)+"\n          ")]),a("q-td",{key:"physical_inventory",attrs:{props:e}},[t._v("\n            "+t._s(e.row.physical_inventory)+"\n          ")]),a("q-td",{key:"action",staticStyle:{width:"50px"},attrs:{props:e}},[a("q-btn",{attrs:{round:"",flat:"",push:"",color:"purple",icon:"repeat"},on:{click:function(t){e.row.physical_inventory=0}}})],1)],1)]}}])})],1),[a("div",{staticClass:"q-pa-lg flex cordova-footer"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.barscan,expression:"barscan"}],attrs:{id:"scannedBarcodes",type:"text",readonly:"",disabled:""},domProps:{value:t.barscan},on:{input:[function(e){e.target.composing||(t.barscan=e.target.value)},function(e){return t.datachange()}]}})])]],2)},s=[],o=a("3004"),i=a("18d6"),r=a("09f9"),c=(a("e302"),{name:"Pagezebra_stocklist",data(){return{openid:"",login_name:"",authin:"0",pathname:"cyclecount/",separator:"cell",loading:!1,height:"",table_list:[],columns:[{name:"bin_name",required:!0,label:this.$t("warehouse.view_binset.bin_name"),align:"left",field:"bin_name"},{name:"goods_code",label:this.$t("stock.view_stocklist.goods_code"),field:"goods_code",align:"center"},{name:"physical_inventory",label:this.$t("stock.view_stocklist.physical_inventory"),field:"physical_inventory",align:"center"},{name:"action",label:this.$t("action"),align:"right"}],barscan:"",bin_scan:"",goods_scan:""}},methods:{getList(){var t=this;Object(o["e"])(t.pathname,{}).then((e=>{t.table_list=e.results})).catch((e=>{t.$q.notify({message:e.detail,icon:"close",color:"negative"})}))},reFresh(){var t=this;t.barscan="",t.bin_scan="",t.goods_scan="",t.getList()}},computed:{fab:{get(){return console.log("7",this.$store.state.fabchange.fab),this.$store.state.fabchange.fab}},scaneddata:{get(){return this.$store.state.scanedsolve.scaneddata}}},created(){var t=this;i["a"].has("openid")?t.openid=i["a"].getItem("openid"):(t.openid="",i["a"].set("openid","")),i["a"].has("login_name")?t.login_name=i["a"].getItem("login_name"):(t.login_name="",i["a"].set("login_name","")),i["a"].has("auth")?t.authin="1":t.authin="0"},mounted(){var t=this;t.width=1*r["a"].width+"px",t.height=r["a"].height-50+"px",t.scroll_height=r["a"].height-175+"px",t.barscan="",t.bin_scan="",t.goods_scan=""},updated(){},beforeDestroy(){},destroyed(){}}),l=c,d=a("42e1"),p=a("92fd"),u=a("27f9"),b=a("eaac"),h=a("e7a9"),_=a("9c40"),g=a("2c91"),f=a("05c0"),m=a("bd08"),y=a("db86"),v=a("eebe"),k=a.n(v),w=Object(d["a"])(l,n,s,!1,null,null,null);"function"===typeof p["default"]&&Object(p["default"])(w);e["default"]=w.exports;k()(w,"components",{QInput:u["a"],QTable:b["a"],QBtnGroup:h["a"],QBtn:_["a"],QSpace:g["a"],QTooltip:f["a"],QTr:m["a"],QTd:y["a"]})}}]);