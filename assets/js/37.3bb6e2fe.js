(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{384:function(t,s,a){"use strict";a.r(s);var e=a(42),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"transactions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#transactions"}},[t._v("#")]),t._v(" Transactions")]),t._v(" "),a("p",[t._v("Governance module contains proposal, deposit and vote transactions.")]),t._v(" "),a("h2",{attrs:{id:"proposal"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#proposal"}},[t._v("#")]),t._v(" Proposal")]),t._v(" "),a("p",[t._v("proposal types in QOS:")]),t._v(" "),a("ul",[a("li",[t._v("ProposalTypeText           // simple text")]),t._v(" "),a("li",[t._v("ProposalTypeParameterChange // parameter change")]),t._v(" "),a("li",[t._v("ProposalTypeTaxUsage       // community tax use")]),t._v(" "),a("li",[t._v("ProposalTypeModifyInflation // inflation modify")]),t._v(" "),a("li",[t._v("ProposalTypeSoftwareUpgrade // software upgrade")])]),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/en/command/qoscli.html#submit-proposal"}},[t._v("Submiting proposal")]),t._v(" to submit a proposal in QOS network.")],1),t._v(" "),a("h3",{attrs:{id:"text"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#text"}},[t._v("#")]),t._v(" Text")]),t._v(" "),a("p",[t._v("Ordinary text proposal, the proposal can be QOS network constructive opinions, new or improved functions.")]),t._v(" "),a("h4",{attrs:{id:"struct"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#struct"}},[t._v("#")]),t._v(" Struct")]),t._v(" "),a("div",{staticClass:"language-go line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" TxProposal "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tTitle          "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v("             "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"title"`')]),t._v("           "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//  title")]),t._v("\n\tDescription    "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v("             "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"description"`')]),t._v("     "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//  description")]),t._v("\n\tProposalType   types"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ProposalType "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"proposal_type"`')]),t._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//  proposal type")]),t._v("\n\tProposer       btypes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("AccAddress  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"proposer"`')]),t._v("        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//  proposer")]),t._v("\n\tInitialDeposit btypes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("BigInt      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"initial_deposit"`')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//  initial deposit by proposer")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])]),a("h4",{attrs:{id:"validations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#validations"}},[t._v("#")]),t._v(" Validations")]),t._v(" "),a("p",[t._v("Make sure to pass the following check:")]),t._v(" "),a("ul",[a("li",[t._v("title can not be empty and lte "),a("code",[t._v("MaxTitleLen")]),t._v("(default 200)")]),t._v(" "),a("li",[t._v("description can not be empty and lte "),a("code",[t._v("MaxDescriptionLen")]),t._v("(default 1000)")]),t._v(" "),a("li",[t._v("proposal_type must be "),a("code",[t._v("ProposalTypeText")])])]),t._v(" "),a("h4",{attrs:{id:"signer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#signer"}},[t._v("#")]),t._v(" Signer")]),t._v(" "),a("p",[a("code",[t._v("proposer")])]),t._v(" "),a("h4",{attrs:{id:"tx-gas"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tx-gas"}},[t._v("#")]),t._v(" Tx Gas")]),t._v(" "),a("p",[t._v("0")]),t._v(" "),a("h3",{attrs:{id:"parameterchange"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parameterchange"}},[t._v("#")]),t._v(" ParameterChange")]),t._v(" "),a("p",[t._v("Parameters can queried by "),a("RouterLink",{attrs:{to:"/en/command/qoscli.html#query-params"}},[t._v("Query params")]),t._v(" can be changed by this proposal.")],1),t._v(" "),a("h4",{attrs:{id:"struct-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#struct-2"}},[t._v("#")]),t._v(" Struct")]),t._v(" "),a("div",{staticClass:"language-go line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" TxParameterChange "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tTxProposal                           "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// `ProposalType` is `ProposalTypeParameterChange`")]),t._v("\n\tParams "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("types"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Param "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"params"`')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// parameters to be changed")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" Param "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tModule "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"module"`')]),t._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// module name")]),t._v("\n\tKey    "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"key"`')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// parameter name")]),t._v("\n\tValue  "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"value"`')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// parameter value")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br")])]),a("h4",{attrs:{id:"validations-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#validations-2"}},[t._v("#")]),t._v(" Validations")]),t._v(" "),a("p",[t._v("Make sure to pass the following check:")]),t._v(" "),a("ul",[a("li",[t._v("title can not be empty and lte "),a("code",[t._v("MaxTitleLen")]),t._v("(default 200)")]),t._v(" "),a("li",[t._v("description can not be empty and lte "),a("code",[t._v("MaxDescriptionLen")]),t._v("(default 1000)")]),t._v(" "),a("li",[t._v("proposal_type must be "),a("code",[t._v("ProposalTypeParameterChange")])]),t._v(" "),a("li",[t._v("no unfinished "),a("code",[t._v("ProposalTypeParameterChange")]),t._v(" proposal in QOS network")]),t._v(" "),a("li",[t._v("params can not be empty")]),t._v(" "),a("li",[t._v("parameters in params must have the right type and hold the right value")])]),t._v(" "),a("h4",{attrs:{id:"signer-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#signer-2"}},[t._v("#")]),t._v(" Signer")]),t._v(" "),a("p",[a("code",[t._v("proposer")])]),t._v(" "),a("h4",{attrs:{id:"tx-gas-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tx-gas-2"}},[t._v("#")]),t._v(" Tx Gas")]),t._v(" "),a("p",[t._v("0")]),t._v(" "),a("h3",{attrs:{id:"taxusage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#taxusage"}},[t._v("#")]),t._v(" TaxUsage")]),t._v(" "),a("p",[t._v("Only "),a("a",{attrs:{href:"../guardian"}},[t._v("Guardian")]),t._v(" can submit this proposal.")]),t._v(" "),a("h4",{attrs:{id:"struct-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#struct-3"}},[t._v("#")]),t._v(" Struct")]),t._v(" "),a("div",{staticClass:"language-go line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" TxTaxUsage "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tTxProposal                                          \n\tDestAddress btypes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("AccAddress "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"dest_address"`')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// address to accept QOS from community fees")]),t._v("\n\tPercent     qtypes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Dec        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"percent"`')]),t._v("      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// percent of community fees")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("h4",{attrs:{id:"validations-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#validations-3"}},[t._v("#")]),t._v(" Validations")]),t._v(" "),a("p",[t._v("Make sure to pass the following check:")]),t._v(" "),a("ul",[a("li",[t._v("title can not be empty and lte "),a("code",[t._v("MaxTitleLen")]),t._v("(default 200)")]),t._v(" "),a("li",[t._v("description can not be empty and lte "),a("code",[t._v("MaxDescriptionLen")]),t._v("(default 1000)")]),t._v(" "),a("li",[t._v("proposal_type must be "),a("code",[t._v("ProposalTypeTaxUsage")])]),t._v(" "),a("li",[t._v("dest_address can not be null and must be a guardian")]),t._v(" "),a("li",[t._v("percent ranges (0, 1]")])]),t._v(" "),a("h4",{attrs:{id:"signer-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#signer-3"}},[t._v("#")]),t._v(" Signer")]),t._v(" "),a("p",[a("code",[t._v("proposer")])]),t._v(" "),a("h4",{attrs:{id:"tx-gas-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tx-gas-3"}},[t._v("#")]),t._v(" Tx Gas")]),t._v(" "),a("p",[t._v("0")]),t._v(" "),a("h3",{attrs:{id:"modifyinflation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#modifyinflation"}},[t._v("#")]),t._v(" ModifyInflation")]),t._v(" "),a("p",[t._v("QOS network supports modification of inflation rules that have not yet begun.")]),t._v(" "),a("h4",{attrs:{id:"struct-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#struct-4"}},[t._v("#")]),t._v(" Struct")]),t._v(" "),a("div",{staticClass:"language-go line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" TxModifyInflation "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tTxProposal              \n\tTotalAmount      btypes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("BigInt         "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"total_amount"`')]),t._v("      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// total amount of QOS")]),t._v("\n\tInflationPhrases mint"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("InflationPhrases "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"inflation_phrases"`')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// inflation phrases")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("h4",{attrs:{id:"validations-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#validations-4"}},[t._v("#")]),t._v(" Validations")]),t._v(" "),a("p",[t._v("Make sure to pass the following check:")]),t._v(" "),a("ul",[a("li",[t._v("title can not be empty and lte "),a("code",[t._v("MaxTitleLen")]),t._v("(default 200)")]),t._v(" "),a("li",[t._v("description can not be empty and lte "),a("code",[t._v("MaxDescriptionLen")]),t._v("(default 1000)")]),t._v(" "),a("li",[t._v("proposal_type must be "),a("code",[t._v("ProposalTypeModifyInflation")])]),t._v(" "),a("li",[t._v("current and finished phrases can not be changed")]),t._v(" "),a("li",[t._v("total_amount must be right")])]),t._v(" "),a("h4",{attrs:{id:"signer-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#signer-4"}},[t._v("#")]),t._v(" Signer")]),t._v(" "),a("p",[a("code",[t._v("proposer")])]),t._v(" "),a("h4",{attrs:{id:"tx-gas-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tx-gas-4"}},[t._v("#")]),t._v(" Tx Gas")]),t._v(" "),a("p",[t._v("0")]),t._v(" "),a("h3",{attrs:{id:"softwareupgrade"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#softwareupgrade"}},[t._v("#")]),t._v(" SoftwareUpgrade")]),t._v(" "),a("p",[t._v("Submiting softwareupgrade to enhance existing functional or add new features.")]),t._v(" "),a("h4",{attrs:{id:"struct-5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#struct-5"}},[t._v("#")]),t._v(" Struct")]),t._v(" "),a("div",{staticClass:"language-go line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" TxSoftwareUpgrade "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tTxProposal\n\tVersion       "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"version"`')]),t._v("         "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// QOS version")]),t._v("\n\tDataHeight    "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int64")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"data_height"`')]),t._v("     "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// data height")]),t._v("\n\tGenesisFile   "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"genesis_file"`')]),t._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// `genesis.json` file url")]),t._v("\n\tGenesisMD5    "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"genesis_md5"`')]),t._v("     "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// `genesis.json` file md5")]),t._v("\n\tForZeroHeight "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bool")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"for_zero_height"`')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// whether start from zero height")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br")])]),a("h4",{attrs:{id:"validations-5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#validations-5"}},[t._v("#")]),t._v(" Validations")]),t._v(" "),a("p",[t._v("Make sure to pass the following check:")]),t._v(" "),a("ul",[a("li",[t._v("title can not be empty and lte "),a("code",[t._v("MaxTitleLen")]),t._v("(default 200)")]),t._v(" "),a("li",[t._v("description can not be empty and lte "),a("code",[t._v("MaxDescriptionLen")]),t._v("(default 1000)")]),t._v(" "),a("li",[t._v("proposal_type must be "),a("code",[t._v("ProposalTypeSoftwareUpgrade")])]),t._v(" "),a("li",[t._v("version can not be empty")]),t._v(" "),a("li",[t._v("if for_zero_height is true, make sure data_height must gt 0 ,genesis_file and genesis_md5 are not empty.")])]),t._v(" "),a("h4",{attrs:{id:"signer-5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#signer-5"}},[t._v("#")]),t._v(" Signer")]),t._v(" "),a("p",[a("code",[t._v("proposer")])]),t._v(" "),a("h4",{attrs:{id:"tx-gas-5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tx-gas-5"}},[t._v("#")]),t._v(" Tx Gas")]),t._v(" "),a("p",[t._v("0")]),t._v(" "),a("h2",{attrs:{id:"deposit"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deposit"}},[t._v("#")]),t._v(" Deposit")]),t._v(" "),a("p",[t._v("Depositing for proposals in "),a("code",[t._v("StatusDepositPeriod")]),t._v(" status.")]),t._v(" "),a("h3",{attrs:{id:"struct-6"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#struct-6"}},[t._v("#")]),t._v(" Struct")]),t._v(" "),a("div",{staticClass:"language-go line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" TxDeposit "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tProposalID "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int64")]),t._v("             "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"proposal_id"`')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// proposal ID")]),t._v("\n\tDepositor  btypes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("AccAddress "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"depositor"`')]),t._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// depositor address")]),t._v("\n\tAmount     btypes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("BigInt     "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"amount"`')]),t._v("      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// amount of QOS to deposit")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("h3",{attrs:{id:"validations-6"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#validations-6"}},[t._v("#")]),t._v(" Validations")]),t._v(" "),a("p",[t._v("Make sure to pass the following check:")]),t._v(" "),a("ul",[a("li",[t._v("proposal must exist and status is "),a("code",[t._v("StatusDepositPeriod")])]),t._v(" "),a("li",[t._v("amount must be positive")]),t._v(" "),a("li",[t._v("depositor has enough QOS to deposit")])]),t._v(" "),a("h3",{attrs:{id:"signer-6"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#signer-6"}},[t._v("#")]),t._v(" Signer")]),t._v(" "),a("p",[a("code",[t._v("depositor")])]),t._v(" "),a("h3",{attrs:{id:"tx-gas-6"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tx-gas-6"}},[t._v("#")]),t._v(" Tx Gas")]),t._v(" "),a("p",[t._v("0")]),t._v(" "),a("h2",{attrs:{id:"vote"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vote"}},[t._v("#")]),t._v(" Vote")]),t._v(" "),a("p",[t._v("Voting for proposals in "),a("code",[t._v("StatusVotingPeriod")]),t._v(" status.")]),t._v(" "),a("h3",{attrs:{id:"struct-7"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#struct-7"}},[t._v("#")]),t._v(" Struct")]),t._v(" "),a("div",{staticClass:"language-go line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" TxVote "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tProposalID "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int64")]),t._v("             "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"proposal_id"`')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// proposal ID")]),t._v("\n\tVoter      btypes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("AccAddress "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"voter"`')]),t._v("       "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// voter address")]),t._v("\n\tOption     types"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("VoteOption  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"option"`')]),t._v("      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// options: Yes/Abstain/No/Nowithveto")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("h3",{attrs:{id:"validations-7"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#validations-7"}},[t._v("#")]),t._v(" Validations")]),t._v(" "),a("p",[t._v("Make sure to pass the following check:")]),t._v(" "),a("ul",[a("li",[t._v("voter must exist")]),t._v(" "),a("li",[t._v("vote option must be one of "),a("code",[t._v("Yes/Abstain/No/Nowithveto")])]),t._v(" "),a("li",[t._v("proposal must exist and status is "),a("code",[t._v("StatusVotingPeriod")])])]),t._v(" "),a("h3",{attrs:{id:"signer-7"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#signer-7"}},[t._v("#")]),t._v(" Signer")]),t._v(" "),a("p",[a("code",[t._v("voter")])]),t._v(" "),a("h3",{attrs:{id:"tx-gas-7"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tx-gas-7"}},[t._v("#")]),t._v(" Tx Gas")]),t._v(" "),a("p",[t._v("0")])])}),[],!1,null,null,null);s.default=n.exports}}]);