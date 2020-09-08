(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{435:function(t,a,s){"use strict";s.r(a);var e=s(42),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"abci"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#abci"}},[t._v("#")]),t._v(" ABCI")]),t._v(" "),s("h2",{attrs:{id:"endblocker"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#endblocker"}},[t._v("#")]),t._v(" EndBlocker")]),t._v(" "),s("p",[t._v("每一块的结束会判断数据检查标志，查询锁定账户释放锁定QOS。")]),t._v(" "),s("h3",{attrs:{id:"数据检查"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数据检查"}},[t._v("#")]),t._v(" 数据检查")]),t._v(" "),s("p",[t._v("存在数据检查请求时向Event中添加"),s("code",[t._v("EventTypeInvariantCheck")]),t._v("事件")]),t._v(" "),s("div",{staticClass:"language-go line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("NeedInvariantCheck")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tctx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("EventManager")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("EmitEvent")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("btypes"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("NewEvent")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("qtypes"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("EventTypeInvariantCheck"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("p",[t._v("QOS网络会在")]),t._v(" "),s("div",{staticClass:"language-go line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("app "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("QOSApp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("EndBlocker")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" req abci"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("RequestEndBlock"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" abci"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ResponseEndBlock "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("p",[t._v("中判断是否存在数据检查事件，从而执行全网数据检查。")]),t._v(" "),s("h3",{attrs:{id:"锁定-释放"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#锁定-释放"}},[t._v("#")]),t._v(" 锁定-释放")]),t._v(" "),s("p",[t._v("如果存在"),s("RouterLink",{attrs:{to:"/spec/bank/2_state.html#锁定-释放账户"}},[t._v("锁定-释放信息")]),t._v("，到达释放时间，且未释放QOS大于零，会执行释放操作。")],1),t._v(" "),s("p",[t._v("当次释放QOS "),s("code",[t._v("releaseAmount")]),t._v("等于(待释放总量"),s("code",[t._v("TotalAmount")]),t._v("减去已释放总量"),s("code",[t._v("ReleasedAmount")]),t._v(")除以剩余释放次数"),s("code",[t._v("ReleaseTimes")]),t._v("，如果是最后一次则等于待释放总量"),s("code",[t._v("TotalAmount")]),t._v("减去已释放总量"),s("code",[t._v("ReleasedAmount")]),t._v("。")]),t._v(" "),s("p",[t._v("释放操作将从锁定账户"),s("code",[t._v("LockedAccount")]),t._v("扣除本次释放量"),s("code",[t._v("releaseAmount")]),t._v("，累加到接收账户"),s("code",[t._v("Receiver")]),t._v("，同时更新已释放总量"),s("code",[t._v("ReleasedAmount")]),t._v("，剩余释放次数"),s("code",[t._v("ReleaseTimes")]),t._v("减一，释放时间"),s("code",[t._v("ReleaseTime")]),t._v("增加一个释放周期"),s("code",[t._v("ReleaseInterval")]),t._v("。")]),t._v(" "),s("p",[t._v("如果锁定-释放全部完成，会删除锁定-释放记录。")])])}),[],!1,null,null,null);a.default=n.exports}}]);