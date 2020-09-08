(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{428:function(t,a,s){"use strict";s.r(a);var r=s(42),e=Object(r.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"交易"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#交易"}},[t._v("#")]),t._v(" 交易")]),t._v(" "),s("p",[t._v("这里具体介绍预授权模块包含的所有交易类型，这些交易操作会直接影响"),s("RouterLink",{attrs:{to:"/spec/approve/2_state.html"}},[t._v("存储")]),t._v("。")],1),t._v(" "),s("h2",{attrs:{id:"创建预授权"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建预授权"}},[t._v("#")]),t._v(" 创建预授权")]),t._v(" "),s("p",[s("RouterLink",{attrs:{to:"/command/qoscli.html#创建预授权"}},[t._v("发送创建预授权交易")]),t._v("创建预授权。")],1),t._v(" "),s("h3",{attrs:{id:"结构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#结构"}},[t._v("#")]),t._v(" 结构")]),t._v(" "),s("div",{staticClass:"language-go line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" TxCreateApprove "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\ttypes"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Approve\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("p",[t._v("其中"),s("RouterLink",{attrs:{to:"/spec/approve/2_state.html#预授权"}},[t._v("Approve")]),t._v("为创建预授权，"),s("a",{attrs:{href:"#%E5%A2%9E%E5%8A%A0%E9%A2%84%E6%8E%88%E6%9D%83"}},[t._v("增加预授权")]),t._v("，"),s("a",{attrs:{href:"#%E5%87%8F%E5%B0%91%E9%A2%84%E6%8E%88%E6%9D%83"}},[t._v("减少预授权")]),t._v("，"),s("a",{attrs:{href:"#%E4%BD%BF%E7%94%A8%E9%A2%84%E6%8E%88%E6%9D%83"}},[t._v("使用预授权")]),t._v("通用结构。")],1),t._v(" "),s("h3",{attrs:{id:"校验"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#校验"}},[t._v("#")]),t._v(" 校验")]),t._v(" "),s("p",[t._v("创建预授权需要通过以下校验：")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("from")]),t._v(","),s("code",[t._v("to")]),t._v("地址均不能为空，且不能相同")]),t._v(" "),s("li",[s("code",[t._v("coins")]),t._v("中币种必须都存在，币值均为正，且不能重复")]),t._v(" "),s("li",[s("code",[t._v("from")]),t._v("账户在QOS网络中必须存在")]),t._v(" "),s("li",[t._v("不存在已授权记录")])]),t._v(" "),s("p",[t._v("通过校验并成功执行交易后，可通过"),s("RouterLink",{attrs:{to:"/command/qoscli.html#查询预授权"}},[t._v("查询预授权")]),t._v("搜索预授权信息。")],1),t._v(" "),s("h3",{attrs:{id:"签名"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#签名"}},[t._v("#")]),t._v(" 签名")]),t._v(" "),s("p",[s("code",[t._v("from")]),t._v("账户")]),t._v(" "),s("h3",{attrs:{id:"交易费"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#交易费"}},[t._v("#")]),t._v(" 交易费")]),t._v(" "),s("p",[s("code",[t._v("0")]),t._v(" 鼓励用户使用预授权功能")]),t._v(" "),s("h2",{attrs:{id:"增加预授权"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#增加预授权"}},[t._v("#")]),t._v(" 增加预授权")]),t._v(" "),s("p",[s("RouterLink",{attrs:{to:"/command/qoscli.html#增加预授权"}},[t._v("发送增加预授权交易")]),t._v("增加预授权。")],1),t._v(" "),s("h3",{attrs:{id:"结构-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#结构-2"}},[t._v("#")]),t._v(" 结构")]),t._v(" "),s("div",{staticClass:"language-go line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" TxIncreaseApprove "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\ttypes"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Approve\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("p",[t._v("其中"),s("RouterLink",{attrs:{to:"/spec/approve/2_state.html#预授权"}},[t._v("Approve")]),t._v("为"),s("a",{attrs:{href:"#%E5%88%9B%E5%BB%BA%E9%A2%84%E6%8E%88%E6%9D%83"}},[t._v("创建预授权")]),t._v("，增加预授权，"),s("a",{attrs:{href:"#%E5%87%8F%E5%B0%91%E9%A2%84%E6%8E%88%E6%9D%83"}},[t._v("减少预授权")]),t._v("，"),s("a",{attrs:{href:"#%E4%BD%BF%E7%94%A8%E9%A2%84%E6%8E%88%E6%9D%83"}},[t._v("使用预授权")]),t._v("通用结构。")],1),t._v(" "),s("h3",{attrs:{id:"校验-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#校验-2"}},[t._v("#")]),t._v(" 校验")]),t._v(" "),s("p",[t._v("创建预授权需要通过以下校验：")]),t._v(" "),s("ul",[s("li",[t._v("存在授权记录")])]),t._v(" "),s("h3",{attrs:{id:"签名-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#签名-2"}},[t._v("#")]),t._v(" 签名")]),t._v(" "),s("p",[s("code",[t._v("from")]),t._v("账户")]),t._v(" "),s("h3",{attrs:{id:"交易费-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#交易费-2"}},[t._v("#")]),t._v(" 交易费")]),t._v(" "),s("p",[s("code",[t._v("0")]),t._v(" 鼓励用户使用预授权功能")]),t._v(" "),s("h2",{attrs:{id:"减少预授权"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#减少预授权"}},[t._v("#")]),t._v(" 减少预授权")]),t._v(" "),s("p",[s("RouterLink",{attrs:{to:"/command/qoscli.html#减少预授权"}},[t._v("发送减少预授权交易")]),t._v("减少预授权。")],1),t._v(" "),s("h3",{attrs:{id:"结构-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#结构-3"}},[t._v("#")]),t._v(" 结构")]),t._v(" "),s("div",{staticClass:"language-go line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" TxDecreaseApprove "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\ttypes"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Approve\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("p",[t._v("其中"),s("RouterLink",{attrs:{to:"/spec/approve/2_state.html#预授权"}},[t._v("Approve")]),t._v("为"),s("a",{attrs:{href:"#%E5%88%9B%E5%BB%BA%E9%A2%84%E6%8E%88%E6%9D%83"}},[t._v("创建预授权")]),t._v("，"),s("a",{attrs:{href:"#%E5%A2%9E%E5%8A%A0%E9%A2%84%E6%8E%88%E6%9D%83"}},[t._v("增加预授权")]),t._v("，减少预授权，"),s("a",{attrs:{href:"#%E4%BD%BF%E7%94%A8%E9%A2%84%E6%8E%88%E6%9D%83"}},[t._v("使用预授权")]),t._v("通用结构。")],1),t._v(" "),s("h3",{attrs:{id:"校验-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#校验-3"}},[t._v("#")]),t._v(" 校验")]),t._v(" "),s("p",[t._v("创建预授权需要通过以下校验：")]),t._v(" "),s("ul",[s("li",[t._v("存在已授权记录")]),t._v(" "),s("li",[s("code",[t._v("coins")]),t._v("中币种币值不能大于预授权记录值")])]),t._v(" "),s("h3",{attrs:{id:"签名-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#签名-3"}},[t._v("#")]),t._v(" 签名")]),t._v(" "),s("p",[s("code",[t._v("from")]),t._v("账户")]),t._v(" "),s("h3",{attrs:{id:"交易费-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#交易费-3"}},[t._v("#")]),t._v(" 交易费")]),t._v(" "),s("p",[s("code",[t._v("0")]),t._v(" 鼓励用户使用预授权功能")]),t._v(" "),s("h2",{attrs:{id:"使用预授权"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用预授权"}},[t._v("#")]),t._v(" 使用预授权")]),t._v(" "),s("p",[t._v("被授权账户提取授权币种币值到账户，相应扣除授权账户余额，减少更新预授权额度。")]),t._v(" "),s("p",[s("RouterLink",{attrs:{to:"/command/qoscli.html#使用预授权"}},[t._v("发送使用预授权交易")]),t._v("，使用预授权。")],1),t._v(" "),s("h3",{attrs:{id:"结构-4"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#结构-4"}},[t._v("#")]),t._v(" 结构")]),t._v(" "),s("div",{staticClass:"language-go line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" TxUseApprove "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\ttypes"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Approve\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("p",[t._v("其中"),s("RouterLink",{attrs:{to:"/spec/approve/2_state.html#预授权"}},[t._v("Approve")]),t._v("为"),s("a",{attrs:{href:"#%E5%88%9B%E5%BB%BA%E9%A2%84%E6%8E%88%E6%9D%83"}},[t._v("创建预授权")]),t._v("，"),s("a",{attrs:{href:"#%E5%A2%9E%E5%8A%A0%E9%A2%84%E6%8E%88%E6%9D%83"}},[t._v("增加预授权")]),t._v("，"),s("a",{attrs:{href:"#%E5%87%8F%E5%B0%91%E9%A2%84%E6%8E%88%E6%9D%83"}},[t._v("减少预授权")]),t._v("，使用预授权通用结构。")],1),t._v(" "),s("h3",{attrs:{id:"校验-4"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#校验-4"}},[t._v("#")]),t._v(" 校验")]),t._v(" "),s("p",[t._v("创建预授权需要通过以下校验：")]),t._v(" "),s("ul",[s("li",[t._v("存在已授权记录")]),t._v(" "),s("li",[s("code",[t._v("coins")]),t._v("中币种币值不能大于预授权记录值")])]),t._v(" "),s("h3",{attrs:{id:"签名-4"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#签名-4"}},[t._v("#")]),t._v(" 签名")]),t._v(" "),s("p",[s("code",[t._v("to")]),t._v("账户")]),t._v(" "),s("h3",{attrs:{id:"交易费-4"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#交易费-4"}},[t._v("#")]),t._v(" 交易费")]),t._v(" "),s("p",[s("code",[t._v("0")]),t._v(" 鼓励用户使用预授权功能")]),t._v(" "),s("blockquote",[s("p",[t._v("当执行完减少预授权，预授权所有币种币值为零，预授权将被删除")])]),t._v(" "),s("h2",{attrs:{id:"取消预授权"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#取消预授权"}},[t._v("#")]),t._v(" 取消预授权")]),t._v(" "),s("p",[t._v("取消已存在的预授权，将从数据库中删除授权信息。")]),t._v(" "),s("p",[s("RouterLink",{attrs:{to:"/command/qoscli.html#取消预授权"}},[t._v("发送取消预授权交易")]),t._v("，取消预授权")],1),t._v(" "),s("h3",{attrs:{id:"结构-5"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#结构-5"}},[t._v("#")]),t._v(" 结构")]),t._v(" "),s("div",{staticClass:"language-go line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" TxCancelApprove "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    From btypes"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("AccAddress "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"from"`')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 授权账号")]),t._v("\n    To   btypes"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("AccAddress "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"to"`')]),t._v("   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 被授权账号")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("h3",{attrs:{id:"校验-5"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#校验-5"}},[t._v("#")]),t._v(" 校验")]),t._v(" "),s("p",[t._v("创建预授权需要通过以下校验：")]),t._v(" "),s("ul",[s("li",[t._v("存在已授权记录")])]),t._v(" "),s("h3",{attrs:{id:"签名-5"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#签名-5"}},[t._v("#")]),t._v(" 签名")]),t._v(" "),s("p",[s("code",[t._v("from")]),t._v("账户")]),t._v(" "),s("h3",{attrs:{id:"交易费-5"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#交易费-5"}},[t._v("#")]),t._v(" 交易费")]),t._v(" "),s("p",[s("code",[t._v("0")]),t._v(" 鼓励用户使用预授权功能")])])}),[],!1,null,null,null);a.default=e.exports}}]);