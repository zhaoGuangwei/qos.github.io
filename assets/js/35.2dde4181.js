(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{381:function(o,e,t){"use strict";t.r(e);var a=t(42),r=Object(a.a)({},(function(){var o=this,e=o.$createElement,t=o._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":o.$parent.slotKey}},[t("h1",{attrs:{id:"concepts"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#concepts"}},[o._v("#")]),o._v(" Concepts")]),o._v(" "),t("h2",{attrs:{id:"proposal-procedure"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#proposal-procedure"}},[o._v("#")]),o._v(" Proposal procedure")]),o._v(" "),t("h3",{attrs:{id:"deposit"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#deposit"}},[o._v("#")]),o._v(" Deposit")]),o._v(" "),t("p",[o._v("Every proposal have to raise up a certain amount of QOS, defined by "),t("code",[o._v("$min_deposit")]),o._v(", before enter voting phrase, in order to be resistant to DDos.\nWhen a proposal having been deposited for more than "),t("code",[o._v("$max_deposit_period")]),o._v(" but still have not reached "),t("code",[o._v("$min_deposit")]),o._v(", the proposal would be dropped and deleted.\nFor the proposer, the minimum deposit should be "),t("code",[o._v("$min_deposit * $min_proposer_deposit_rate")]),o._v(".\nA proposal having entered voting phrase will still be open to deposit.")]),o._v(" "),t("ul",[t("li",[t("code",[o._v("min_deposit")]),o._v(": Minimum deposit amount of QOS")]),o._v(" "),t("li",[t("code",[o._v("min_proposer_deposit_rate")]),o._v(": Minimum deposit amount of QOS for proposer")]),o._v(" "),t("li",[t("code",[o._v("max_deposit_period")]),o._v(": How many blocks the deposit period could last at maximum, if the amount does not reach "),t("code",[o._v("$min_deposit")]),o._v(".")]),o._v(" "),t("li",[t("code",[o._v("voting_period")]),o._v(": How many blocks the voting could last at maximum, if the tally result does not reach an conclusion.")]),o._v(" "),t("li",[t("code",[o._v("quorum")]),o._v(": The least proportion of voting power participated for a proposal to tally.")]),o._v(" "),t("li",[t("code",[o._v("threshold")]),o._v(": The minimum proportion of "),t("code",[o._v("Yes")]),o._v(" for a proposal to be "),t("code",[o._v("PASS")])]),o._v(" "),t("li",[t("code",[o._v("veto")]),o._v(": The minimum proportion of "),t("code",[o._v("Veto")]),o._v(" for a proposal to be "),t("code",[o._v("NoWithVeto")])]),o._v(" "),t("li",[t("code",[o._v("penalty")]),o._v(": The proportion of voting power to be slashed if a validator does not vote")]),o._v(" "),t("li",[t("code",[o._v("burn_rate")]),o._v(": The proportion of deposit burnt when the tally result of "),t("code",[o._v("PASS")]),o._v(" or "),t("code",[o._v("REJECT")])])]),o._v(" "),t("h3",{attrs:{id:"voting"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#voting"}},[o._v("#")]),o._v(" Voting")]),o._v(" "),t("p",[o._v("The voting options are：")]),o._v(" "),t("ul",[t("li",[t("code",[o._v("Yes")])]),o._v(" "),t("li",[t("code",[o._v("Abstain")])]),o._v(" "),t("li",[t("code",[o._v("No")])]),o._v(" "),t("li",[t("code",[o._v("NoWithVeto")])])]),o._v(" "),t("p",[o._v("Only validators and delegators may vote，for repeated votes only the last one counts.")]),o._v(" "),t("h3",{attrs:{id:"tally"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tally"}},[o._v("#")]),o._v(" Tally")]),o._v(" "),t("p",[o._v("Votes from validators/delegators weights by their bonded QOS。Token holders can only gain voting right by bonding QOS to validator(s).So that QOS bonded is regarded as voting power.")]),o._v(" "),t("p",[o._v("The tally result is calculated as "),t("code",[o._v("Voting power of the voter/All Voting power of the network")])]),o._v(" "),t("p",[o._v("Tally result would be：")]),o._v(" "),t("ul",[t("li",[t("p",[o._v("Invalid："),t("code",[o._v("Voting power participated/Total Voting power")]),o._v(" < "),t("code",[o._v("$quorum")])])]),o._v(" "),t("li",[t("p",[o._v("PASS：Voting power voted "),t("code",[o._v("Yes")]),o._v("/Total Voting power > "),t("code",[o._v("$threshold")])])]),o._v(" "),t("li",[t("p",[o._v("NoWithVeto：Voting power voted "),t("code",[o._v("NoWithVeto")]),o._v("/Total voting power > "),t("code",[o._v("$veto")])])]),o._v(" "),t("li",[t("p",[o._v("REJECT：Other results other than above.")])])]),o._v(" "),t("h3",{attrs:{id:"burning"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#burning"}},[o._v("#")]),o._v(" burning")]),o._v(" "),t("p",[o._v("Ether the tally result of a proposal is "),t("code",[o._v("PASS")]),o._v(" or "),t("code",[o._v("REJECT")]),o._v(", "),t("code",[o._v("Deposit * $burn_rate")]),o._v(" of QOS would be burnt as proposal fee，the remaining "),t("code",[o._v("Deposit")]),o._v(" will return to where it comes。")]),o._v(" "),t("p",[o._v("If the tally result is "),t("code",[o._v("NoWithVeto")]),o._v("，the all "),t("code",[o._v("Deposit")]),o._v(" will go to community fund.")]),o._v(" "),t("h3",{attrs:{id:"slashing"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#slashing"}},[o._v("#")]),o._v(" Slashing")]),o._v(" "),t("p",[o._v("If a validator is bonded on both of a proposal's voting start and end heights, but not participated in the vote. Then all QOS it bonded will slashed by proportion of "),t("code",[o._v("$penalty")])]),o._v(" "),t("p",[o._v("The participation of a validator is not just the vote from the operator of validator, any vote from the delegators of the validator counts. Similarly, if a validator get slashed for not voting, every delegator bonded will will get slashed by the proportion of bonded QOS.")])])}),[],!1,null,null,null);e.default=r.exports}}]);