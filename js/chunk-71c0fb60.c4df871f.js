(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-71c0fb60"],{"004c":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("page-view",{attrs:{avatar:t.avatar,title:!1}},[a("div",{attrs:{slot:"headerContent"},slot:"headerContent"},[a("div",{staticClass:"title"},[t._v(" "+t._s(t.timeFix)+"，"+t._s(t.user.name)+" "),a("span",{staticClass:"welcome-text"},[t._v("，"+t._s(t.welcome))])]),a("div",[t._v("前端工程师 | 蚂蚁金服 - 某某某事业群 - VUE平台")])]),a("div",{attrs:{slot:"extra"},slot:"extra"},[a("a-row",{staticClass:"more-info"},[a("a-col",{attrs:{span:8}},[a("head-info",{attrs:{title:"项目",content:"56",center:!1,bordered:!1}})],1),a("a-col",{attrs:{span:8}},[a("head-info",{attrs:{title:"团队排名",content:"8/24",center:!1,bordered:!1}})],1),a("a-col",{attrs:{span:8}},[a("head-info",{attrs:{title:"项目数",content:"2,223",center:!1}})],1)],1)],1),a("div",[a("a-row",{attrs:{gutter:24}},[a("a-col",{attrs:{xl:16,lg:24,md:24,sm:24,xs:24}},[a("a-card",{staticClass:"project-list",staticStyle:{"margin-bottom":"24px"},attrs:{loading:t.loading,bordered:!1,title:"进行中的项目","body-style":{padding:0}}},[a("a",{attrs:{slot:"extra"},slot:"extra"},[t._v("全部项目")]),a("div",t._l(t.projects,(function(e,r){return a("a-card-grid",{key:r,staticClass:"project-card-grid"},[a("a-card",{attrs:{bordered:!1,"body-style":{padding:0}}},[a("a-card-meta",[a("div",{staticClass:"card-title",attrs:{slot:"title"},slot:"title"},[a("a-avatar",{attrs:{size:"small",src:e.cover}}),a("a",[t._v(t._s(e.title))])],1),a("div",{staticClass:"card-description",attrs:{slot:"description"},slot:"description"},[t._v(" "+t._s(e.description)+" ")])]),a("div",{staticClass:"project-item"},[a("a",{attrs:{href:"/#/"}},[t._v("科学搬砖组")]),a("span",{staticClass:"datetime"},[t._v("9小时前")])])],1)],1)})),1)]),a("a-card",{attrs:{loading:t.loading,title:"动态",bordered:!1}},[a("a-list",t._l(t.activities,(function(e,r){return a("a-list-item",{key:r},[a("a-list-item-meta",[a("a-avatar",{attrs:{slot:"avatar",src:e.user.avatar},slot:"avatar"}),a("div",{attrs:{slot:"title"},slot:"title"},[a("span",[t._v(t._s(e.user.nickname))]),t._v(" 在 "),a("a",{attrs:{href:"#"}},[t._v(t._s(e.project.name))]),t._v(" "),a("span",[t._v(t._s(e.project.action))]),t._v(" "),a("a",{attrs:{href:"#"}},[t._v(t._s(e.project.event))])]),a("div",{attrs:{slot:"description"},slot:"description"},[t._v(t._s(e.time))])],1)],1)})),1)],1)],1),a("a-col",{staticStyle:{padding:"0 12px"},attrs:{xl:8,lg:24,md:24,sm:24,xs:24}},[a("a-card",{staticStyle:{"margin-bottom":"24px"},attrs:{title:"快速开始 / 便捷导航",bordered:!1,"body-style":{padding:0}}},[a("div",{staticClass:"item-group"},[a("a",[t._v("操作一")]),a("a",[t._v("操作二")]),a("a",[t._v("操作三")]),a("a",[t._v("操作四")]),a("a",[t._v("操作五")]),a("a",[t._v("操作六")]),a("a-button",{attrs:{size:"small",type:"primary",ghost:"",icon:"plus"}},[t._v("添加")])],1)]),a("a-card",{staticStyle:{"margin-bottom":"24px"},attrs:{title:"XX 指数",loading:t.radarLoading,bordered:!1,"body-style":{padding:0}}},[a("div",{staticStyle:{"min-height":"400px"}},[a("radar",{attrs:{data:t.radarData}})],1)]),a("a-card",{attrs:{loading:t.loading,title:"团队",bordered:!1}},[a("div",{staticClass:"members"},[a("a-row",t._l(t.teams,(function(e,r){return a("a-col",{key:r,attrs:{span:12}},[a("a",[a("a-avatar",{attrs:{size:"small",src:e.avatar}}),a("span",{staticClass:"member"},[t._v(t._s(e.name))])],1)])})),1)],1)])],1)],1)],1)])},s=[],n=a("f3f3"),i=a("ca00"),c=a("5880"),o=a("680a"),l=a("81d1"),d=a("2af9"),u=a("0fea"),v=a("5fd4"),m=a("7104"),p={name:"Workplace",components:{PageView:o["c"],HeadInfo:l["a"],Radar:d["o"]},data:function(){return{timeFix:Object(i["b"])(),avatar:"",user:{},projects:[],loading:!0,radarLoading:!0,activities:[],teams:[],axis1Opts:{dataKey:"item",line:null,tickLine:null,grid:{lineStyle:{lineDash:null},hideFirstLine:!1}},axis2Opts:{dataKey:"score",line:null,tickLine:null,grid:{type:"polygon",lineStyle:{lineDash:null}}},scale:[{dataKey:"score",min:0,max:80}],axisData:[{item:"引用",a:70,b:30,c:40},{item:"口碑",a:60,b:70,c:40},{item:"产量",a:50,b:60,c:40},{item:"贡献",a:40,b:50,c:40},{item:"热度",a:60,b:70,c:40},{item:"引用",a:70,b:50,c:40}],radarData:[]}},computed:Object(n["a"])({},Object(c["mapState"])({nickname:function(t){return t.user.nickname},welcome:function(t){return t.user.welcome}}),{userInfo:function(){return this.$store.getters.userInfo}}),created:function(){this.user=this.userInfo,this.avatar=this.userInfo.avatar,Object(u["b"])().then((function(t){})),Object(u["c"])().then((function(t){}))},mounted:function(){this.getProjects(),this.getActivity(),this.getTeams(),this.initRadar()},methods:{getProjects:function(){var t=this;Object(v["b"])().then((function(e){t.projects=e.result&&e.result.data,t.loading=!1}))},getActivity:function(){var t=this;Object(v["a"])().then((function(e){t.activities=e.result}))},getTeams:function(){var t=this;Object(v["d"])().then((function(e){t.teams=e.result}))},initRadar:function(){var t=this;this.radarLoading=!0,Object(v["c"])("/workplace/radar").then((function(e){var a=(new m.View).source(e.result);a.transform({type:"fold",fields:["个人","团队","部门"],key:"user",value:"score"}),t.radarData=a.rows,t.radarLoading=!1}))}}},f=p,b=(a("0294"),a("2877")),g=Object(b["a"])(f,r,s,!1,null,"b24d9cce",null);e["default"]=g.exports},"0294":function(t,e,a){"use strict";var r=a("2e35"),s=a.n(r);s.a},"0fea":function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return c})),a.d(e,"a",(function(){return o}));var r=a("b775"),s="",n={user:"".concat(s,"/user"),role:"".concat(s,"/role"),service:"".concat(s,"/service"),permission:"".concat(s,"/permission"),permissionNoPager:"".concat(s,"/permission/no-pager"),orgTree:"".concat(s,"/org/tree")};function i(t){return Object(r["a"])({url:n.role,method:"get",params:t})}function c(t){return Object(r["a"])({url:n.service,method:"get",params:t})}function o(t){return Object(r["a"])({url:n.orgTree,method:"get",params:t})}},"2e35":function(t,e,a){},"5fd4":function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"a",(function(){return c})),a.d(e,"d",(function(){return o})),a.d(e,"c",(function(){return l}));var r=a("b775"),s="",n={Activity:"".concat(s,"/workplace/activity"),Teams:"".concat(s,"/workplace/teams"),Radar:"".concat(s,"/workplace/radar"),Projects:"".concat(s,"/list/search/projects"),ServerList:"".concat(s,"/service")};function i(){return Object(r["a"])({url:n.Projects,method:"get"})}function c(){return Object(r["a"])({url:n.Activity,method:"get"})}function o(){return Object(r["a"])({url:n.Teams,method:"get"})}function l(){return Object(r["a"])({url:n.Radar,method:"get"})}},"81d1":function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"head-info",class:t.center&&"center"},[a("span",[t._v(t._s(t.title))]),a("p",[t._v(t._s(t.content))]),t.bordered?a("em"):t._e()])},s=[],n={name:"HeadInfo",props:{title:{type:String,default:""},content:{type:String,default:""},bordered:{type:Boolean,default:!1},center:{type:Boolean,default:!0}}},i=n,c=(a("ae71"),a("2877")),o=Object(c["a"])(i,r,s,!1,null,"49b35101",null);e["a"]=o.exports},"9b26":function(t,e,a){},ae71:function(t,e,a){"use strict";var r=a("9b26"),s=a.n(r);s.a}}]);