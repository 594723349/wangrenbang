(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-47fb0db1"],{"18a7":function(t,e,a){},"204c":function(t,e,a){},3239:function(t,e,a){t.exports=a.p+"img/edit-article.2be9619d.png"},"40c3":function(t,e,a){"use strict";var n=a("7afb"),s=a.n(n);s.a},"470d":function(t,e,a){"use strict";var n=a("e044"),s=a.n(n);s.a},"5fa7":function(t,e,a){"use strict";var n=a("efbc"),s=a.n(n);s.a},"7afb":function(t,e,a){},"7f15":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"c-tab"},[a("ul",{staticClass:"tab-list",class:["layout-"+t.layout]},t._l(t.tabs,(function(e,n){var s;return a("li",{key:n,staticClass:"tab-item",class:(s={active:n===t.active},s["tab-"+n]=n,s),on:{click:function(e){return t.change(n)}}},[t._v(" "+t._s(e.label)+" ")])})),0),a("div",{staticClass:"tab-content"},[t._t("default")],2)])},s=[],c=(a("a9e3"),{props:{tabs:{type:Array,default:function(){return[]}},active:{type:Number,default:0},layout:{type:String,default:"center"}},methods:{change:function(t){this.$emit("update:active",t)}}}),i=c,o=(a("9117"),a("2877")),r=Object(o["a"])(i,n,s,!1,null,"30b0dfc8",null);e["a"]=r.exports},"805b":function(t,e,a){"use strict";var n=a("18a7"),s=a.n(n);s.a},8530:function(t,e,a){"use strict";var n=a("dd40"),s=a.n(n);s.a},"8d1e":function(t,e,a){"use strict";var n=a("96ad"),s=a.n(n);s.a},"8fb9":function(t,e,a){"use strict";var n=a("f783"),s=a.n(n);s.a},9117:function(t,e,a){"use strict";var n=a("912b"),s=a.n(n);s.a},"912b":function(t,e,a){},"96ad":function(t,e,a){},aa40:function(t,e,a){"use strict";var n=a("204c"),s=a.n(n);s.a},ac6e:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"servie-wrapper"},[n("c-menu",{attrs:{active:0}}),n("c-tab",{attrs:{tabs:t.tabs,active:t.tabActiveIndex},on:{"update:active":function(e){t.tabActiveIndex=e}}},[n(t.currentComponent,{tag:"component"})],1),n("div",{staticClass:"add-message"},[n("img",{attrs:{src:a("3239")}}),n("div",{on:{click:t.openMessage}},[t._v("发帖")])]),n("b-message",{ref:"message"})],1)},s=[],c=a("c9b9"),i=a("7f15"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("van-popup",{attrs:{position:"right","safe-area-inset-bottom":!0,"close-on-click-overlay":!1},model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}},[a("c-popup-layout",{attrs:{title:"分享资源"},on:{back:function(e){t.visible=!1}}},[a("van-field",{attrs:{rows:"5",type:"textarea",placeholder:"和大家分享写什么呢",maxlength:"200","show-word-limit":""},model:{value:t.message,callback:function(e){t.message=e},expression:"message"}}),a("div",{staticClass:"upload"},[a("van-uploader",{attrs:{multiple:"","max-count":3,"after-read":t.afterRead},model:{value:t.fileList,callback:function(e){t.fileList=e},expression:"fileList"}})],1),a("van-button",{attrs:{type:"primary"},on:{click:t.relese}},[t._v("发布")])],1)],1)},r=[],l=a("425c"),u={components:{"c-popup-layout":l["a"]},data:function(){return{visible:!1,message:"",fileList:[{url:"https://img.yzcdn.cn/vant/leaf.jpg",status:"uploading",message:"上传中..."},{url:"https://img.yzcdn.cn/vant/tree.jpg",status:"failed",message:"上传失败"}]}},computed:{token:function(){return this.$store.state.token}},methods:{open:function(){this.visible=!0},close:function(){this.visible=!1},afterRead:function(t){console.log(t)},relese:function(){this.$emit("release")}}},b=u,d=(a("8d1e"),a("2877")),f=Object(d["a"])(b,o,r,!1,null,null,null),m=f.exports,v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"service-resource"},[a("b-banner",{attrs:{text:"全心全意为用户服务","bg-color":"rgba(59, 172, 106, 0.8)"}}),a("b-search",{on:{change:t.handleSearch}}),a("c-feed",{attrs:{data:t.commentList},on:{load:t.load},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{class:["state","state-"+e.data.state],on:{click:function(a){return t.handlerAction(e.data)}}},[t._v(" "+t._s(t.stateMap[e.data.state])+" ")])]}},{key:"detailAction",fn:function(e){return[a("div",{class:["state","state-"+e.data.state],on:{click:function(a){return t.handlerAction(e.data)}}},[t._v(" "+t._s(t.stateMap[e.data.state])+" ")])]}}])})],1)},p=[],h=(a("99af"),a("2c4b")),g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"banner-box"},[a("div",{staticClass:"banner",style:{"background-color":t.bgColor}})])},C=[],x={props:{text:{type:String},link:{type:String},bgColor:{type:String}}},k=x,_=(a("aa40"),Object(d["a"])(k,g,C,!1,null,"9ec07a18",null)),y=_.exports,S=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"service-search"},[a("div",{directives:[{name:"show",rawName:"v-show",value:!t.isSearch,expression:"!isSearch"}],staticClass:"tabs-box"},[a("van-tabs",{on:{change:t.tabChange},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},[a("van-tab",{attrs:{title:"最新",name:"new"}}),a("van-tab",{attrs:{title:"最热",name:"hot"}}),a("van-tab",{attrs:{title:"关注",name:"follow"}})],1),a("van-icon",{staticClass:"search-icon",attrs:{name:"search",color:"#CCCCCC",size:"16px"},on:{click:t.handleSearchVisible}})],1),a("div",{directives:[{name:"show",rawName:"v-show",value:t.isSearch,expression:"isSearch"}],staticClass:"search-box"},[a("van-field",{attrs:{placeholder:"搜索",center:!0},scopedSlots:t._u([{key:"button",fn:function(){return[a("van-icon",{staticClass:"file-search-btn",attrs:{name:"search",color:"#CCCCCC",size:"16px"},on:{click:t.searchChange}})]},proxy:!0}]),model:{value:t.searchValue,callback:function(e){t.searchValue=e},expression:"searchValue"}}),a("van-icon",{staticClass:"close-search",attrs:{name:"cross",size:"16px"},on:{click:function(e){return t.handleSearchVisible(!1)}}})],1)])},w=[],$={data:function(){return{active:"new",isSearch:!1,searchValue:""}},methods:{handleSearchVisible:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.isSearch=t},tabChange:function(t){this.$emit("change",{type:t})},searchChange:function(t){this.$emit("change",{type:name,search:t})}}},j=$,L=(a("470d"),Object(d["a"])(j,S,w,!1,null,"56b7b910",null)),A=L.exports,O={components:{"c-feed":h["a"],"b-banner":y,"b-search":A},data:function(){return{commentList:[{avatar:a("0ba3"),nickname:"哈哈哈哈",createTime:"2020-10-28 18:11:22",content:"流口水的价格卢卡斯离开股价拉升经过了解拉萨扩大供给卢卡斯就管理局阿斯利康大家过来卡时间就爱上了看结果徕卡时间管理卡是捷克两个加工零件撒旦立刻感觉阿拉山口就立刻傻瓜卢卡斯尽量靠近格蕾丝卡的价格",imgs:[a("0ba3"),a("0ba3"),a("0ba3")],state:0,sex:0},{avatar:a("0ba3"),nickname:"哈哈哈哈",createTime:"2020-10-28 18:11:22",content:"流口水的价格卢卡斯离开股价拉升经过了解拉萨扩大供给卢卡斯就管理局阿斯利康大家过来卡时间就爱上了看结果徕卡时间管理卡是捷克两个加工零件撒旦立刻感觉阿拉山口就立刻傻瓜卢卡斯尽量靠近格蕾丝卡的价格",imgs:[a("0ba3"),a("0ba3"),a("0ba3")],state:1,sex:1},{avatar:a("0ba3"),nickname:"哈哈哈哈",createTime:"2020-10-28 18:11:22",content:"流口水的价格卢卡斯离开股价拉升经过了解拉萨扩大供给卢卡斯就管理局阿斯利康大家过来卡时间就爱上了看结果徕卡时间管理卡是捷克两个加工零件撒旦立刻感觉阿拉山口就立刻傻瓜卢卡斯尽量靠近格蕾丝卡的价格",imgs:[a("0ba3"),a("0ba3"),a("0ba3")],state:2,sex:0}],stateMap:{0:"关注",1:"已关注",2:"广告"}}},methods:{handlerAction:function(t){0===t.state?this.$set(t,"state",1):1===t.state&&this.$set(t,"state",0)},load:function(t){var e=[].concat(this.commentList);this.commentList=this.commentList.concat(e),t()},handleSearch:function(t){console.log(t)}}},E=O,P=(a("5fa7"),Object(d["a"])(E,v,p,!1,null,"3a40e2ef",null)),T=P.exports,I=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"service-welfare"},[a("b-banner",{attrs:{text:"能帮一个事一个","bg-color":"rgba(59, 172, 106, 0.8)"}}),a("b-search",{on:{change:t.handleSearch}}),a("c-feed",{attrs:{data:t.commentList},on:{load:t.load},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{class:["state","state-"+e.data.state],on:{click:function(a){return t.handlerAction(e.data)}}},[t._v(" "+t._s(t.stateMap[e.data.state])+" ")])]}}])})],1)},M=[],V={components:{"c-feed":h["a"],"b-banner":y,"b-search":A},data:function(){return{commentList:[{avatar:a("0ba3"),nickname:"哈哈哈哈",createTime:"2020-10-28 18:11:22",content:"流口水的价格卢卡斯离开股价拉升经过了解拉萨扩大供给卢卡斯就管理局阿斯利康大家过来卡时间就爱上了看结果徕卡时间管理卡是捷克两个加工零件撒旦立刻感觉阿拉山口就立刻傻瓜卢卡斯尽量靠近格蕾丝卡的价格",imgs:[a("0ba3"),a("0ba3"),a("0ba3")],state:0,sex:0},{avatar:a("0ba3"),nickname:"哈哈哈哈",createTime:"2020-10-28 18:11:22",content:"流口水的价格卢卡斯离开股价拉升经过了解拉萨扩大供给卢卡斯就管理局阿斯利康大家过来卡时间就爱上了看结果徕卡时间管理卡是捷克两个加工零件撒旦立刻感觉阿拉山口就立刻傻瓜卢卡斯尽量靠近格蕾丝卡的价格",imgs:[a("0ba3"),a("0ba3"),a("0ba3")],state:0,sex:1},{avatar:a("0ba3"),nickname:"哈哈哈哈",createTime:"2020-10-28 18:11:22",content:"流口水的价格卢卡斯离开股价拉升经过了解拉萨扩大供给卢卡斯就管理局阿斯利康大家过来卡时间就爱上了看结果徕卡时间管理卡是捷克两个加工零件撒旦立刻感觉阿拉山口就立刻傻瓜卢卡斯尽量靠近格蕾丝卡的价格",imgs:[a("0ba3"),a("0ba3"),a("0ba3")],state:0,sex:0}],stateMap:{0:"话圈"}}},methods:{handlerAction:function(t){console.log(t)},load:function(t){var e=[].concat(this.commentList);this.commentList=this.commentList.concat(e),t()},handleSearch:function(t){console.log(t)}}},z=V,N=(a("805b"),Object(d["a"])(z,I,M,!1,null,"60bee4de",null)),J=N.exports,R=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"service-about"},[a("b-banner",{attrs:{text:"一切为了用户，一切依靠用户","bg-color":"rgba(59, 172, 106, 0.8)"}}),a("div",{staticClass:"about-item plan-detail",on:{click:function(e){return t.handleOpenPopup("explain")}}},[t._v("聚合联创计划说明")]),a("div",{staticClass:"about-item project-money",on:{click:function(e){return t.handleOpenPopup("money")}}},[a("div",{staticClass:"title"},[t._v("项目启动资金")]),a("div",{staticClass:"money"},[t._v("￥132.132.00")])]),a("div",{staticClass:"about-item project-center",on:{click:function(e){return t.handleOpenPopup("project")}}},[t._v("项目中心")]),a("b-about-popup",{ref:"aboutPopup"})],1)},F=[],q=a("3ee4"),B={components:{"b-banner":y,"b-about-popup":q["a"]},data:function(){return{projectTabs:[{title:"所有项目",name:"all"},{title:"我入股的项目",name:"my"},{title:"股权交易中心",name:"center"}]}},methods:{handleOpenPopup:function(t){this.$refs.aboutPopup.open({type:t,position:"money"===t?"":"right",tabs:"project"===t?this.projectTabs:[]})}}},D=B,G=(a("40c3"),Object(d["a"])(D,R,F,!1,null,"30238ab7",null)),H=G.exports,K={name:"ServiceIndex",components:{"c-menu":c["a"],"c-tab":i["a"],"b-message":m},data:function(){return{tabActiveIndex:0,tabs:[{label:"资源共享"},{label:"每日福利"},{label:"聚合联创"}]}},computed:{currentComponent:function(){return 0===this.tabActiveIndex?T:1===this.tabActiveIndex?J:2==this.tabActiveIndex?H:T}},methods:{openMessage:function(){this.$refs.message.open()}}},Q=K,U=(a("8530"),Object(d["a"])(Q,n,s,!1,null,"66b43b4a",null));e["default"]=U.exports},b0c0:function(t,e,a){var n=a("83ab"),s=a("9bf2").f,c=Function.prototype,i=c.toString,o=/^\s*function ([^ (]*)/,r="name";n&&!(r in c)&&s(c,r,{configurable:!0,get:function(){try{return i.call(this).match(o)[1]}catch(t){return""}}})},c9b9:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"header"},[a("div",{staticClass:"menu-list"},t._l(t.menuList,(function(e,n){var s;return a("div",{key:n,staticClass:"menu-item",class:(s={active:n===t.active},s["item-"+n]=n.toString(),s),on:{click:function(a){return t.handleClick(e)}}},[a("span",{staticClass:"label"},[t._v(t._s(e.label))])])})),0)])},s=[],c=(a("b0c0"),a("a9e3"),{props:{active:{type:Number,default:1}},data:function(){return{menuList:[{label:"服务大厅",name:"Service"},{label:"圆梦计划",name:"Plan"},{label:"个人中心",name:"Personal"}]}},methods:{handleClick:function(t){this.$router.push({name:t.name})}}}),i=c,o=(a("8fb9"),a("2877")),r=Object(o["a"])(i,n,s,!1,null,"294dfc54",null);e["a"]=r.exports},dd40:function(t,e,a){},e044:function(t,e,a){},efbc:function(t,e,a){},f783:function(t,e,a){}}]);
//# sourceMappingURL=chunk-47fb0db1.892244d2.js.map