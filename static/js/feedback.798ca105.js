(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["feedback"],{"39e3":function(t,e,s){"use strict";var a=s("ee2f"),i=s.n(a);i.a},a7e0:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"msg-wrapper"},[s("h3",{staticClass:"title"},[t._v("Alert 警告提示")]),s("p",{staticClass:"need-time"},[t._v("何时使用")]),t._m(0),s("a-alert",{attrs:{message:"Success Text",type:"success"}}),s("a-alert",{attrs:{message:"Very long warning text warning text text text text text text text",banner:"",closable:""}}),s("a-alert",{attrs:{message:"Success Tips",description:"Detailed description and advices about successful copywriting.",type:"success","show-icon":""}}),s("a-alert",{attrs:{message:"Error Text",type:"error"}})],1),s("a-divider"),s("div",{staticClass:"msg-wrapper"},[s("h3",{staticClass:"title"},[t._v("Modal 对话框")]),s("p",{staticClass:"need-time"},[t._v("何时使用")]),t._m(1),s("div",{staticClass:"btns"},[s("a-button",{directives:[{name:"auth",rawName:"v-auth",value:[t.admin],expression:"[admin]"}],on:{click:t.success}},[t._v("Success")]),s("a-button",{on:{click:t.error}},[t._v("Error")]),s("a-button",{on:{click:t.warning}},[t._v("Warning")])],1)]),s("a-divider"),s("div",{staticClass:"msg-wrapper"},[s("h3",{staticClass:"title"},[t._v("全局顶部提示")]),s("p",{staticClass:"need-time"},[t._v("何时使用")]),t._m(2),s("div",{staticClass:"btns"},[s("a-button",{on:{click:t.success}},[t._v("Success")]),s("a-button",{on:{click:t.error}},[t._v("Error")]),s("a-button",{on:{click:t.warning}},[t._v("Warning")])],1)]),s("a-divider"),s("div",{staticClass:"msg-wrapper"},[s("h3",{staticClass:"title"},[t._v("通知提醒框")]),s("p",{staticClass:"need-time"},[t._v("何时使用")]),t._m(3),s("div",{staticClass:"btns"},[s("a-button",{on:{click:t.success}},[t._v("Success")]),s("a-button",{on:{click:t.error}},[t._v("Error")]),s("a-button",{on:{click:t.warning}},[t._v("Warning")])],1)])],1)},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",{staticClass:"features"},[s("li",[t._v("当某个页面需要向用户显示警告的信息时。")]),s("li",[t._v("非浮层的静态展现形式，始终展现，不会自动消失，用户可以点击关闭。")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",{staticClass:"features"},[s("li",[t._v("可提供成功、警告和错误等反馈信息。")]),s("li",[t._v("顶部居中显示并自动消失，是一种不打断用户操作的轻量级提示方式。")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",{staticClass:"features"},[s("li",[t._v("可提供成功、警告和错误等反馈信息。")]),s("li",[t._v("顶部居中显示并自动消失，是一种不打断用户操作的轻量级提示方式。")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",{staticClass:"features"},[s("li",[t._v("较为复杂的通知内容。")]),s("li",[t._v("带有交互的通知，给出用户下一步的行动点")]),s("li",[t._v("系统主动推送。")])])}],r=s("1da1"),c={name:"Feedback",components:{},filters:{},mixins:[],data(){return{}},computed:{},watch:{},created(){},methods:{success(){var t=this;return Object(r["a"])((function*(){t.$createElement;yield t.$g.confirm(t=>t("div",{style:"color:red;"},["Some descriptions"]),{okType:"danger"})}))()},error(){this.$success("This is an error message")},warning(){this.$message.warning("This is a warning message")}}},n=c,l=(s("39e3"),s("2877")),o=Object(l["a"])(n,a,i,!1,null,"3b04ac02",null);e["default"]=o.exports},ee2f:function(t,e,s){}}]);