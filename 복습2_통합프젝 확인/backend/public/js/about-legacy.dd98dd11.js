"use strict";(self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[]).push([[443],{154:function(t,e,n){n.r(e),n.d(e,{default:function(){return m}});var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",[t._v(t._s(t.pagememo.title))]),n("p",[t._v(t._s(t.pagememo.memo))])])},a=[],s={created(){this.$http.get(`/api/memo/${this.$route.params.id}`).then((t=>{this.pagememo=t.data}))},data(){return{pagememo:{}}}},u=s,i=n(1),l=(0,i.Z)(u,r,a,!1,null,null,null),m=l.exports},253:function(t,e,n){n.r(e),n.d(e,{default:function(){return m}});var r=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"write"},[n("h1",[t._v("글을 작성하는 공간입니다")]),n("form",{attrs:{action:"/api/memo/writeform",method:"post"}},[n("input",{attrs:{type:"text",name:"title"}}),n("textarea",{attrs:{name:"memo",cols:"30",rows:"10"}}),n("input",{attrs:{type:"submit",value:"전송"}})])])}],s={},u=s,i=n(1),l=(0,i.Z)(u,r,a,!1,null,null,null),m=l.exports}}]);
//# sourceMappingURL=about-legacy.dd98dd11.js.map