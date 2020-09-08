(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{398:function(t,s,a){"use strict";a.r(s);var n=a(42),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"abci"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#abci"}},[t._v("#")]),t._v(" ABCI")]),t._v(" "),a("h2",{attrs:{id:"endblocker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#endblocker"}},[t._v("#")]),t._v(" EndBlocker")]),t._v(" "),a("p",[t._v("Inflation reward calculation:")]),t._v(" "),a("div",{staticClass:"language-go line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Since the time of the first block is the creation time of genesis.json, there is a large error in the calculated bonus value, here we save the time of the second block.")]),t._v("\nfirstBlockTime "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" mintMapper"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetFirstBlockTime")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// average block time")]),t._v("\nblockTimeAvg "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("currentBlockTime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Unix")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" firstBlockTime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("height "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" BeginRewardHeight"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// the number of blocks expected to be generated in the current inflation phase")]),t._v("\nblocks "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("int64")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("currentPhrase"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("EndTime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Sub")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("currentBlockTime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Seconds")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" blockTimeAvg\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// current inflation average block reward")]),t._v("\nrewardPerBlock "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" currentPhrase"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("TotalAmount"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Sub")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("currentPhrase"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("AppliedAmount"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("DivRaw")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("blocks"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br")])]),a("p",[a("code",[t._v("rewardPerBlock")]),t._v(" will be added to "),a("code",[t._v("PreDistributionQOS")]),t._v(" in "),a("code",[t._v("distribution")]),t._v(" module, together with the "),a("code",[t._v("tx gas")]),t._v(" collected in each block as the mining reward.")])])}),[],!1,null,null,null);s.default=e.exports}}]);