(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{432:function(s,t,a){"use strict";a.r(t);var n=a(42),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"交易"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#交易"}},[s._v("#")]),s._v(" 交易")]),s._v(" "),a("p",[s._v("Bank 模块包含交易类型如下：")]),s._v(" "),a("h2",{attrs:{id:"转账"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#转账"}},[s._v("#")]),s._v(" 转账")]),s._v(" "),a("p",[s._v("QOS支持一次多账户多币种转账")]),s._v(" "),a("p",[a("RouterLink",{attrs:{to:"/command/qoscli.html#转账"}},[s._v("发送转账交易")])],1),s._v(" "),a("h3",{attrs:{id:"结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#结构"}},[s._v("#")]),s._v(" 结构")]),s._v(" "),a("div",{staticClass:"language-go line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("type")]),s._v(" TxTransfer "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("struct")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\tSenders   types"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("TransItems "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('`json:"senders"`')]),s._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 发送集合")]),s._v("\n\tReceivers types"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("TransItems "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('`json:"receivers"`')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 接收集合")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("type")]),s._v(" TransItems "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("TransItem\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("type")]),s._v(" TransItem "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("struct")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\tAddress btypes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("AccAddress "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('`json:"addr"`')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 账户地址")]),s._v("\n\tQOS     btypes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("BigInt     "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('`json:"qos"`')]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// QOS")]),s._v("\n\tQSCs    types"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("QSCs        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('`json:"qscs"`')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// QSCs")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("h3",{attrs:{id:"验证"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#验证"}},[s._v("#")]),s._v(" 验证")]),s._v(" "),a("p",[s._v("转账交易必须通过以下校验才会执行：")]),s._v(" "),a("ul",[a("li",[s._v("发送列表/接收列表均不能为空，每个列表中均不能有重复地址，币种币值对应相等")]),s._v(" "),a("li",[s._v("发送列表+接收列表账户数小于"),a("code",[s._v("MaxTransLen")]),s._v("（默认：500）")]),s._v(" "),a("li",[s._v("发送/接收QOS，QSC代币均为正")]),s._v(" "),a("li",[s._v("发送账户余额足够本次转账")])]),s._v(" "),a("h3",{attrs:{id:"签名"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#签名"}},[s._v("#")]),s._v(" 签名")]),s._v(" "),a("p",[s._v("所有发送账户")]),s._v(" "),a("h3",{attrs:{id:"交易费"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#交易费"}},[s._v("#")]),s._v(" 交易费")]),s._v(" "),a("p",[a("code",[s._v("0.018QOS")])]),s._v(" "),a("h2",{attrs:{id:"数据检查"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据检查"}},[s._v("#")]),s._v(" 数据检查")]),s._v(" "),a("p",[s._v("检查QOS网络中所有状态数据。")]),s._v(" "),a("p",[a("RouterLink",{attrs:{to:"/command/qoscli.html#数据检查"}},[s._v("发送数据检查交易")])],1),s._v(" "),a("h3",{attrs:{id:"结构-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#结构-2"}},[s._v("#")]),s._v(" 结构")]),s._v(" "),a("div",{staticClass:"language-go line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("type")]),s._v(" TxInvariantCheck "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("struct")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\tSender btypes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("AccAddress "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('`json:"sender"`')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 发送交易账户地址")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h3",{attrs:{id:"验证-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#验证-2"}},[s._v("#")]),s._v(" 验证")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("sender")]),s._v("不能为空.")])]),s._v(" "),a("h3",{attrs:{id:"签名-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#签名-2"}},[s._v("#")]),s._v(" 签名")]),s._v(" "),a("p",[a("code",[s._v("sender")])]),s._v(" "),a("h3",{attrs:{id:"交易费-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#交易费-2"}},[s._v("#")]),s._v(" 交易费")]),s._v(" "),a("p",[a("code",[s._v("200000QOS")])]),s._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[s._v("Note")]),s._v(" "),a("p",[s._v("为防止开发者随意发送数据校验操作影响全网健康运行，此处设置了较大的交易费，如果数据校验表明全网数据无异常，交易费正常扣除。否则全网宕机，交易费不会扣除。QOS鼓励所有持币用户监控QOS网络的正常运转，及时报告异常情况。")])])])}),[],!1,null,null,null);t.default=e.exports}}]);