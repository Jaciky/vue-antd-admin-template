(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-21dcab6e"],{"002a":function(e,t,a){},"0fea":function(e,t,a){"use strict";a.d(t,"c",(function(){return o})),a.d(t,"d",(function(){return s})),a.d(t,"b",(function(){return i})),a.d(t,"a",(function(){return l}));var r=a("b775"),n={user:"/user",role:"/role",service:"/service",permission:"/permission",permissionNoPager:"/permission/no-pager",orgTree:"/org/tree"};function o(e){return Object(r["b"])({url:n.role,method:"get",params:e})}function s(e){return Object(r["b"])({url:n.service,method:"get",params:e})}function i(e){return Object(r["b"])({url:n.permissionNoPager,method:"get",params:e})}function l(e){return Object(r["b"])({url:n.orgTree,method:"get",params:e})}},"68f4":function(e,t,a){"use strict";var r=a("002a"),n=a.n(r);n.a},"88bc":function(e,t,a){(function(t){var a=1/0,r=9007199254740991,n="[object Arguments]",o="[object Function]",s="[object GeneratorFunction]",i="[object Symbol]",l="object"==typeof t&&t&&t.Object===Object&&t,c="object"==typeof self&&self&&self.Object===Object&&self,u=l||c||Function("return this")();function d(e,t,a){switch(a.length){case 0:return e.call(t);case 1:return e.call(t,a[0]);case 2:return e.call(t,a[0],a[1]);case 3:return e.call(t,a[0],a[1],a[2])}return e.apply(t,a)}function p(e,t){var a=-1,r=e?e.length:0,n=Array(r);while(++a<r)n[a]=t(e[a],a,e);return n}function m(e,t){var a=-1,r=t.length,n=e.length;while(++a<r)e[n+a]=t[a];return e}var f=Object.prototype,v=f.hasOwnProperty,b=f.toString,h=u.Symbol,g=f.propertyIsEnumerable,w=h?h.isConcatSpreadable:void 0,y=Math.max;function x(e,t,a,r,n){var o=-1,s=e.length;a||(a=C),n||(n=[]);while(++o<s){var i=e[o];t>0&&a(i)?t>1?x(i,t-1,a,r,n):m(n,i):r||(n[n.length]=i)}return n}function _(e,t){return e=Object(e),k(e,t,(function(t,a){return a in e}))}function k(e,t,a){var r=-1,n=t.length,o={};while(++r<n){var s=t[r],i=e[s];a(i,s)&&(o[s]=i)}return o}function j(e,t){return t=y(void 0===t?e.length-1:t,0),function(){var a=arguments,r=-1,n=y(a.length-t,0),o=Array(n);while(++r<n)o[r]=a[t+r];r=-1;var s=Array(t+1);while(++r<t)s[r]=a[r];return s[t]=o,d(e,this,s)}}function C(e){return S(e)||R(e)||!!(w&&e&&e[w])}function O(e){if("string"==typeof e||T(e))return e;var t=e+"";return"0"==t&&1/e==-a?"-0":t}function R(e){return I(e)&&v.call(e,"callee")&&(!g.call(e,"callee")||b.call(e)==n)}var S=Array.isArray;function F(e){return null!=e&&A(e.length)&&!N(e)}function I(e){return L(e)&&F(e)}function N(e){var t=K(e)?b.call(e):"";return t==o||t==s}function A(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=r}function K(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function L(e){return!!e&&"object"==typeof e}function T(e){return"symbol"==typeof e||L(e)&&b.call(e)==i}var E=j((function(e,t){return null==e?{}:_(e,p(x(t,1),O))}));e.exports=E}).call(this,a("c8ba"))},"8b8b":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-card",{attrs:{bordered:!1}},[a("div",{staticClass:"table-page-search-wrapper"},[a("a-form",{attrs:{layout:"inline"}},[a("a-row",{attrs:{gutter:48}},[a("a-col",{attrs:{md:8,sm:24}},[a("a-form-item",{attrs:{label:"角色ID"}},[a("a-input",{attrs:{placeholder:"请输入"}})],1)],1),a("a-col",{attrs:{md:8,sm:24}},[a("a-form-item",{attrs:{label:"状态"}},[a("a-select",{attrs:{placeholder:"请选择","default-value":"0"}},[a("a-select-option",{attrs:{value:"0"}},[e._v("全部")]),a("a-select-option",{attrs:{value:"1"}},[e._v("关闭")]),a("a-select-option",{attrs:{value:"2"}},[e._v("运行中")])],1)],1)],1),a("a-col",{attrs:{md:8,sm:24}},[a("span",{staticClass:"table-page-search-submitButtons"},[a("a-button",{attrs:{type:"primary"}},[e._v("查询")]),a("a-button",{staticStyle:{"margin-left":"8px"}},[e._v("重置")])],1)])],1)],1)],1),a("s-table",{attrs:{"row-key":"id",size:"default",columns:e.columns,data:e.loadData,"expanded-row-keys":e.expandedRowKeys},on:{expand:e.handleExpand},scopedSlots:e._u([{key:"expandedRowRender",fn:function(t){return a("div",{staticStyle:{margin:"0"}},[a("a-row",{style:{marginBottom:"12px"},attrs:{gutter:24}},e._l(t.permissions,(function(t,r){return a("a-col",{key:r,style:{marginBottom:"12px",height:"23px"},attrs:{span:12}},[a("a-col",{attrs:{lg:4,md:24}},[a("span",[e._v(e._s(t.permissionName)+"：")])]),t.actionList&&t.actionList.length>0?a("a-col",{attrs:{lg:20,md:24}},e._l(t.actionList,(function(t){return a("a-tag",{key:t,attrs:{color:"cyan"}},[e._v(" "+e._s(e._f("permissionFilter")(t))+" ")])})),1):a("a-col",{attrs:{span:20}},[e._v("-")])],1)})),1)],1)}},{key:"status",fn:function(t){return a("a-tag",{attrs:{color:"blue"}},[e._v(e._s(e._f("statusFilter")(t)))])}},{key:"createTime",fn:function(t){return a("span",{},[e._v(e._s(e._f("moment")(t)))])}},{key:"action",fn:function(t,r){return a("span",{},[a("a",{on:{click:function(t){return e.handleEdit(r)}}},[e._v("编辑")]),a("a-divider",{attrs:{type:"vertical"}}),a("a-dropdown",[a("a",{staticClass:"ant-dropdown-link"},[e._v(" 更多 "),a("a-icon",{attrs:{type:"down"}})],1),a("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[a("a-menu-item",[a("a",{attrs:{href:"javascript:;"}},[e._v("详情")])]),a("a-menu-item",[a("a",{attrs:{href:"javascript:;"}},[e._v("禁用")])]),a("a-menu-item",[a("a",{attrs:{href:"javascript:;"}},[e._v("删除")])])],1)],1)],1)}}])}),a("a-modal",{staticStyle:{top:"20px"},attrs:{title:"操作",width:800},on:{ok:e.handleOk},model:{value:e.visible,callback:function(t){e.visible=t},expression:"visible"}},[a("a-form",{staticClass:"permission-form",attrs:{form:e.form}},[a("a-form-item",{attrs:{"label-col":e.labelCol,"wrapper-col":e.wrapperCol,label:"唯一识别码","has-feedback":"","validate-status":"success"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["id"],expression:"['id']"}],attrs:{placeholder:"唯一识别码",disabled:"disabled"}})],1),a("a-form-item",{attrs:{"label-col":e.labelCol,"wrapper-col":e.wrapperCol,label:"角色名称","has-feedback":"","validate-status":"success"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["name"],expression:"['name']"}],attrs:{placeholder:"起一个名字"}})],1),a("a-form-item",{attrs:{"label-col":e.labelCol,"wrapper-col":e.wrapperCol,label:"状态","has-feedback":"","validate-status":"warning"}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["status",{initialValue:1}],expression:"['status', { initialValue: 1 }]"}]},[a("a-select-option",{attrs:{value:1}},[e._v("正常")]),a("a-select-option",{attrs:{value:2}},[e._v("禁用")])],1)],1),a("a-form-item",{attrs:{"label-col":e.labelCol,"wrapper-col":e.wrapperCol,label:"描述","has-feedback":""}},[a("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["describe"],expression:"['describe']"}],attrs:{id:"describe",rows:5,placeholder:"..."}})],1),a("a-divider",[e._v("拥有权限")]),e._l(e.permissions,(function(t){return[t.actionsOptions&&t.actionsOptions.length>0?a("a-form-item",{key:t.permissionId,staticClass:"permission-group",attrs:{"label-col":e.labelCol,"wrapper-col":e.wrapperCol,label:t.permissionName}},[a("a-checkbox",[e._v("全选")]),a("a-checkbox-group",{directives:[{name:"decorator",rawName:"v-decorator",value:["permissions."+t.permissionId],expression:"[`permissions.${permission.permissionId}`]"}],attrs:{options:t.actionsOptions}})],1):e._e()]}))],2)],1)],1)},n=[],o=(a("4de4"),a("d81d"),a("f3f3")),s=a("88bc"),i=a.n(s),l=a("2af9"),c=a("0fea"),u=a("63ee"),d={1:"启用",2:"禁用"},p=[{title:"唯一识别码",dataIndex:"id"},{title:"角色名称",dataIndex:"name"},{title:"状态",dataIndex:"status",scopedSlots:{customRender:"status"}},{title:"创建时间",dataIndex:"createTime",scopedSlots:{customRender:"createTime"},sorter:!0},{title:"操作",width:"150px",dataIndex:"action",scopedSlots:{customRender:"action"}}],m={name:"TableList",components:{STable:l["r"]},filters:{statusFilter:function(e){return d[e]},permissionFilter:function(e){var t=u["a"][e];return t&&t.label}},data:function(){var e=this;return{description:"列表使用场景：后台管理中的权限管理以及角色管理，可用于基于 RBAC 设计的角色权限控制，颗粒度细到每一个操作类型。",visible:!1,labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:16}},form:this.$form.createForm(this),permissions:[],advanced:!1,queryParam:{},columns:p,loadData:function(t){return Object(c["c"])(t).then((function(t){return console.log("getRoleList",t),e.expandedRowKeys=t.result.data.map((function(e){return e.id})),t.result}))},expandedRowKeys:[],selectedRowKeys:[],selectedRows:[]}},watch:{},created:function(){Object(c["d"])().then((function(e){console.log("getServiceList.call()",e)})),Object(c["c"])().then((function(e){console.log("getRoleList.call()",e)}))},methods:{handleEdit:function(e){var t=this;this.visible=!0,console.log("record",e);var a={};this.permissions=e.permissions.map((function(e){var t="permissions.".concat(e.permissionId);a[t]=e.actionList;var r=e.actionEntitySet.map((function(e){return{label:e.describe,value:e.action,defaultCheck:e.defaultCheck}}));return Object(o["a"])({},e,{actionsOptions:r})})),this.$nextTick((function(){console.log("permissions",t.permissions),console.log("checkboxGroup",a),t.form.setFieldsValue(i()(e,["id","status","describe","name"])),t.form.setFieldsValue(a)}))},handleOk:function(e){e.preventDefault(),this.form.validateFields((function(e,t){console.log(e,t)}))},onChange:function(e,t){this.selectedRowKeys=e,this.selectedRows=t},handleExpand:function(e,t){console.log("expanded",e,t),e?this.expandedRowKeys.push(t.id):this.expandedRowKeys=this.expandedRowKeys.filter((function(e){return t.id!==e}))},toggleAdvanced:function(){this.advanced=!this.advanced}}},f=m,v=(a("68f4"),a("2877")),b=Object(v["a"])(f,r,n,!1,null,"7f861cf0",null);t["default"]=b.exports}}]);