(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{380:function(e,t,a){"use strict";a.r(t);var n=a(42),i=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"qos-public-chain-economy-module-v1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#qos-public-chain-economy-module-v1"}},[e._v("#")]),e._v(" QOS Public Chain Economy Module v1")]),e._v(" "),a("p",[e._v("QOS Public chain is a double layered blockchain infrastructure constructed upon "),a("a",{attrs:{href:"https://multicoin.capital/wp-content/uploads/2018/03/DPoS_-Features-and-Tradeoffs.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("Delegated Proof-of-Stake"),a("OutboundLink")],1),e._v(" and "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Byzantine_fault_tolerance",target:"_blank",rel:"noopener noreferrer"}},[e._v("Byzantine fault tolerance"),a("OutboundLink")],1),e._v("。")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://github.com/QOSGroup/static/blob/master/eco_overview.png?raw=true",alt:"Overview of QOS Economy Module"}})]),e._v(" "),a("p",[e._v("Contents:")]),e._v(" "),a("ul",[a("li",[a("p",[a("a",{attrs:{href:"#Design-Principals"}},[e._v("Design Principals")])])]),e._v(" "),a("li",[a("p",[a("a",{attrs:{href:"#Roles"}},[e._v("Roles")])]),e._v(" "),a("ul",[a("li",[a("p",[a("a",{attrs:{href:"#Litewallets"}},[e._v("Lightwallets")])])]),e._v(" "),a("li",[a("p",[a("a",{attrs:{href:"#Fullnodes"}},[e._v("Fullnodes")])])]),e._v(" "),a("li",[a("p",[a("a",{attrs:{href:"#Validators"}},[e._v("Validators")])])]),e._v(" "),a("li",[a("p",[a("a",{attrs:{href:"#Delegators"}},[e._v("Delegators")])])])])]),e._v(" "),a("li",[a("p",[a("a",{attrs:{href:"#Modules"}},[e._v("Modules")])]),e._v(" "),a("ul",[a("li",[a("p",[a("a",{attrs:{href:"#QOS-Inflation"}},[e._v("Inflation")])])]),e._v(" "),a("li",[a("p",[a("a",{attrs:{href:"#Conmunity-Fund"}},[e._v("Conmunity Fund")])])]),e._v(" "),a("li",[a("p",[a("a",{attrs:{href:"#Validate/Delegate"}},[e._v("Validate/Delegate")])]),e._v(" "),a("ul",[a("li",[a("p",[a("a",{attrs:{href:"#Validators"}},[e._v("Validators")])])]),e._v(" "),a("li",[a("p",[a("a",{attrs:{href:"#Delegators"}},[e._v("Delegators")])])])])]),e._v(" "),a("li",[a("p",[a("a",{attrs:{href:"#Slashing"}},[e._v("Slashing")])]),e._v(" "),a("ul",[a("li",[a("p",[a("a",{attrs:{href:"#Double-signing"}},[e._v("Double signing")])])]),e._v(" "),a("li",[a("p",[a("a",{attrs:{href:"#Not-voting-in-governance"}},[e._v("Not voting in governance")])])])])]),e._v(" "),a("li",[a("p",[a("a",{attrs:{href:"#gas"}},[e._v("gas")])])])])])]),e._v(" "),a("h2",{attrs:{id:"design-principals"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#design-principals"}},[e._v("#")]),e._v(" Design-Principals")]),e._v(" "),a("ul",[a("li",[e._v("Tokens represent the same right of earning for both validators and delegators.")]),e._v(" "),a("li",[e._v("Tokens represent the same right of voting for both validators and delegators.")]),e._v(" "),a("li",[e._v("In case of slashing, not only validators being slashed, but also delegators bonded. Delegations should be commit after investigations.")]),e._v(" "),a("li",[e._v("A validator could benefit from delegations, which makes its voting power increase. QOS does not set a limit to how much delegation a validator could receive. QOS believes by means of all information and statics of a validator being public, delegators could choose, hence defend the network.")])]),e._v(" "),a("h2",{attrs:{id:"roles"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#roles"}},[e._v("#")]),e._v(" Roles")]),e._v(" "),a("h3",{attrs:{id:"litewallets"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#litewallets"}},[e._v("#")]),e._v(" Litewallets")]),e._v(" "),a("p",[e._v("QOS litewallets is decentralized light clients，it can execute transactions qoscli supports, by verifying small set of data in the block headers, a full copy of ledger is not necessary. They are suitable for low system-requirements situations, such as mobile devices.")]),e._v(" "),a("p",[e._v("The official QOS litewallet "),a("a",{attrs:{href:"https://github.com/QOSGroup/litewallet",target:"_blank",rel:"noopener noreferrer"}},[e._v("Easyzone"),a("OutboundLink")],1),e._v(", also supports other mainstream public chains like Ethereum、Cosmos.")]),e._v(" "),a("h3",{attrs:{id:"fullnodes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fullnodes"}},[e._v("#")]),e._v(" Fullnodes")]),e._v(" "),a("p",[e._v("Same as other blockchain, QOS fullnodes are nodes holding full copy of ledger of the network.")]),e._v(" "),a("h3",{attrs:{id:"validators"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#validators"}},[e._v("#")]),e._v(" Validators")]),e._v(" "),a("p",[e._v("There is a set of validator nodes in QOS public chain, they act as a concrete implementation of the BFT consensus algorithm - each block in the network needs to collect at least 2/3 of the validators signature. Each block in the QOS public chain contains zero or more transactions. Validators verify transactions in the block, and every block passes the verification is signed with validator's private key and gets broadcasted to the network.")]),e._v(" "),a("p",[e._v("A validator must be the full node of the QOS public chain, but a full node needs to send [create certifier transaction] (validators/all_about_validators.md#create-validator) and meet [certain conditions] (validators/all_about_validators.md #How to become a QOS certifier) to become a validator.")]),e._v(" "),a("p",[e._v("A validator is bonded a certain amount of QOSs and undertakes the implementation of the DPOS algorithm. By the number of QOSs it bonds, it gains the benefits of QOS network mining.")]),e._v(" "),a("p",[e._v("To learn more about the validators or to become a validator in QOS, see [Verifiers Node Details] (validators/all_about_validators.md)")]),e._v(" "),a("h3",{attrs:{id:"delegators"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#delegators"}},[e._v("#")]),e._v(" Delegators")]),e._v(" "),a("p",[e._v("For QOS holders who do not have the ability or willingness to run a validator node themselves, but wish to gain the mining revenue, they can choose a validator and contribute their own QOS to the bonding of the validator by delegation, Increasing the validator's voting power and receive the corresponding mining income as a return.\nFor the calculation of the mining income, see [Validate/Delegate] (#Validate/Delegate)")]),e._v(" "),a("p",[e._v("The delegation could be done in litewallets, fullnodes are not a necessity.")]),e._v(" "),a("p",[e._v("Delegators shares the proceeds of the validator's mining profit, at the same time that they also share the validator's responsibilities and obligations. Once the validator is slashed for be disgust, the client will be punished accordingly.")]),e._v(" "),a("p",[e._v("In community autonomy (the function to be implemented), the principal and the verifier have the same voting rights.")]),e._v(" "),a("p",[e._v("Therefore, even if the full node is not running, the largest number of clients in the network still play an active and important role, that is, they must choose trusted and stable certifiers to increase the voting weight of these certifiers, and pay attention to the certifier's movements. To maintain the security and stability of the network.")]),e._v(" "),a("h2",{attrs:{id:"modules"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#modules"}},[e._v("#")]),e._v(" Modules")]),e._v(" "),a("h3",{attrs:{id:"qos-inflation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#qos-inflation"}},[e._v("#")]),e._v(" QOS-Inflation")]),e._v(" "),a("p",[e._v("According to "),a("a",{attrs:{href:"https://github.com/QOSGroup/whitepaper",target:"_blank",rel:"noopener noreferrer"}},[e._v("QOS whitepaper"),a("OutboundLink")],1),e._v("，Inflation of QOS public chain is fixed every 4 years，during the first year of the mainnet launch, the amount of qos created in every block will be roughly the same.")]),e._v(" "),a("p",[e._v("Inflation plan in the mainnet：")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[e._v("Time")]),e._v(" "),a("th",{staticStyle:{"text-align":"center"}},[e._v("The 1st 4 years")]),e._v(" "),a("th",{staticStyle:{"text-align":"center"}},[e._v("The 2nd 4 years")]),e._v(" "),a("th",{staticStyle:{"text-align":"center"}},[e._v("The 3rd 4 years")]),e._v(" "),a("th",{staticStyle:{"text-align":"center"}},[e._v("The 4th 4 years")]),e._v(" "),a("th",{staticStyle:{"text-align":"center"}},[e._v("The 5th 4 years")]),e._v(" "),a("th",{staticStyle:{"text-align":"center"}},[e._v("The 6th 4 years")]),e._v(" "),a("th",{staticStyle:{"text-align":"center"}},[e._v("The 7th 4 years")])])]),e._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[e._v("Inflation(Million)")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("2550")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("1275")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("637.5")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("318.75")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("159.375")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("79.6875")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("79.6875")])])])]),e._v(" "),a("p",[e._v("QOS defineds these 4-years as inflation_phrases, comprised of endtime and total_amount, the amount minted is identified by applied_amount. When the endtime is reached, the current inflation_phrases is end, the next inflation_phrases takes over.")]),e._v(" "),a("p",[e._v("A sample of inflation_phrases could be seen in the "),a("code",[e._v("mint")]),e._v("-"),a("code",[e._v("params")]),e._v("-"),a("code",[e._v("inflation_phrases")]),e._v(" section of "),a("a",{attrs:{href:"https://github.com/QOSGroup/qos-testnets",target:"_blank",rel:"noopener noreferrer"}},[e._v("genesis.json in QOS testnet"),a("OutboundLink")],1),e._v(", such as:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('        "inflation_phrases": [\n                {\n                  "end_time": "2023-10-20T00:00:00Z",\n                  "total_amount": "25500000000000",\n                  "applied_amount": "0"\n                },\n                {\n                  "end_time": "2027-10-20T00:00:00Z",\n                  "total_amount": "12750000000000",\n                  "applied_amount": "0"\n                },\n                {\n                  "end_time": "2031-10-20T00:00:00Z",\n                  "total_amount": "6375000000000",\n                  "applied_amount": "0"\n                },\n                {\n                  "end_time": "2035-10-20T00:00:00Z",\n                  "total_amount": "3187500000000",\n                  "applied_amount": "0"\n                },\n                {\n                  "end_time": "2039-10-20T00:00:00Z",\n                  "total_amount": "1593750000000",\n                  "applied_amount": "0"\n                },\n                {\n                  "end_time": "2043-10-20T00:00:00Z",\n                  "total_amount": "796875000000",\n                  "applied_amount": "0"\n                },\n                {\n                  "end_time": "2047-10-20T00:00:00Z",\n                  "total_amount": "796875000000",\n                  "applied_amount": "0"\n                }\n        ]\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br"),a("span",{staticClass:"line-number"},[e._v("15")]),a("br"),a("span",{staticClass:"line-number"},[e._v("16")]),a("br"),a("span",{staticClass:"line-number"},[e._v("17")]),a("br"),a("span",{staticClass:"line-number"},[e._v("18")]),a("br"),a("span",{staticClass:"line-number"},[e._v("19")]),a("br"),a("span",{staticClass:"line-number"},[e._v("20")]),a("br"),a("span",{staticClass:"line-number"},[e._v("21")]),a("br"),a("span",{staticClass:"line-number"},[e._v("22")]),a("br"),a("span",{staticClass:"line-number"},[e._v("23")]),a("br"),a("span",{staticClass:"line-number"},[e._v("24")]),a("br"),a("span",{staticClass:"line-number"},[e._v("25")]),a("br"),a("span",{staticClass:"line-number"},[e._v("26")]),a("br"),a("span",{staticClass:"line-number"},[e._v("27")]),a("br"),a("span",{staticClass:"line-number"},[e._v("28")]),a("br"),a("span",{staticClass:"line-number"},[e._v("29")]),a("br"),a("span",{staticClass:"line-number"},[e._v("30")]),a("br"),a("span",{staticClass:"line-number"},[e._v("31")]),a("br"),a("span",{staticClass:"line-number"},[e._v("32")]),a("br"),a("span",{staticClass:"line-number"},[e._v("33")]),a("br"),a("span",{staticClass:"line-number"},[e._v("34")]),a("br"),a("span",{staticClass:"line-number"},[e._v("35")]),a("br"),a("span",{staticClass:"line-number"},[e._v("36")]),a("br"),a("span",{staticClass:"line-number"},[e._v("37")]),a("br")])]),a("p",[e._v("QOS supports modifying inflation_phrases throught governance votings.")]),e._v(" "),a("p",[e._v("Inflations of every blocks：")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://github.com/QOSGroup/static/blob/master/rewardPerBlock.png?raw=true",alt:"Inflations of every blocks"}})]),e._v(" "),a("h3",{attrs:{id:"community-fund"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#community-fund"}},[e._v("#")]),e._v(" Community-Fund")]),e._v(" "),a("p",[e._v("In every inflation of QOS, "),a("code",[e._v("$community_reward_rate")]),e._v(" of QOSs will be attributed to community funds. Community funds will be used for community operation and construction, rewarding developers, valuable ecological promotion activities (such as a community-recognized QSC consortium chain).")]),e._v(" "),a("p",[e._v("The community funds' account is public and transparent. Any end user of QOS is entitled to initiate a government proposal of type "),a("code",[e._v("TaxUsage")]),e._v(", apply for some community funds to a certain QOS address for a claimed usage, and each QOS holder participating in the QOS economy module has the right to vote the proposal.")]),e._v(" "),a("h3",{attrs:{id:"validate-delegate"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#validate-delegate"}},[e._v("#")]),e._v(" Validate/Delegate")]),e._v(" "),a("h4",{attrs:{id:"validators-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#validators-2"}},[e._v("#")]),e._v(" Validators")]),e._v(" "),a("p",[e._v("There is a set of validators in the QOS public chain, they acts as a concrete implementation of the BFT consensus algorithm - each block in the network needs to collect at least 2/3 of the voting power by validators to get recorded on chain. Each block contains zero or more transactions. Validators verify those transactions, and signed with its own private key if the verification passes and broadcasted to the network.")]),e._v(" "),a("h5",{attrs:{id:"validators-right"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#validators-right"}},[e._v("#")]),e._v(" Validators' right")]),e._v(" "),a("p",[e._v("Every block is composed by one of the validators, who is thus a proposer. Proposer gains a $proposer_reward_rate of the total inflation of the block's inflation as an extra reward:")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://github.com/QOSGroup/static/blob/master/proposerReward.png?raw=true",alt:"Proposer's reward"}})]),e._v(" "),a("p",[e._v("The chances of proposing a block are proportional to the number of QOS a validator bonds, so the extra reward of the proposer does not change the voting power of each validator in the network.")]),e._v(" "),a("p",[e._v("Validators gain reward from validating, by means of bonding QOSs and undertakes the implementation of the DPOS algorithm.")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://github.com/QOSGroup/static/blob/master/validatorReward.png?raw=true",alt:"Reward for a validator(and its delegators) in one block"}})]),e._v(" "),a("p",[e._v("To know more about validators or wish to become one，please see"),a("RouterLink",{attrs:{to:"/en/spec/validators/all_about_validators.html"}},[e._v("All about validators")]),e._v(".")],1),e._v(" "),a("h5",{attrs:{id:"slashing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#slashing"}},[e._v("#")]),e._v(" Slashing")]),e._v(" "),a("p",[e._v("In QOS, there is a observation window for every validator, each one of them must sign $ValidatorVotingStatusLeast blocks out of last $ValidatorVotingStatusLen blocks. Or else the validator and its delegator's bonded token will be slashed by a $SlashFractionDowntime portion of QOS.")]),e._v(" "),a("h4",{attrs:{id:"delegators-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#delegators-2"}},[e._v("#")]),e._v(" Delegators")]),e._v(" "),a("p",[e._v("The QOS bound on a validator consists of two parts: self-bond tokens from the validator itself and the delegation-bond ones.")]),e._v(" "),a("p",[a("strong",[e._v("A Validator's total binding (Voting Power) = Self-bond QOSs + ∑ Delegation-bonds")])]),e._v(" "),a("p",[e._v("For a delegator, QOSs it delegated can gain a corresponding proportion of the profit from the validator's total mining reward. Since the validator invested human and material resources, it can extract a certain percentage of commission from the total mining reward.")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://github.com/QOSGroup/static/blob/master/validatorSelfReward.png?raw=true",alt:"Validator reward from one block"}})]),e._v(" "),a("p",[a("img",{attrs:{src:"https://github.com/QOSGroup/static/blob/master/delegatorReward.png?raw=true",alt:"Deletgator reward from on block"}})]),e._v(" "),a("ul",[a("li",[e._v("Distribution cycle")])]),e._v(" "),a("p",[e._v("After the delegation is created, a "),a("em",[e._v("distribution cycle")]),e._v(", whose length is defined by "),a("code",[e._v("$delegator_income_period_height")]),e._v(" parameter is start. And the benefit/processing request will be only processed at the first block of a new cycle.")]),e._v(" "),a("p",[e._v("The operation of a delegator increasing/decreasing bonded tokens or modifying the configuration parameters, will not affect the current distribution cycle, will take effect at the begining of the next cycle.")]),e._v(" "),a("p",[e._v("The principal modifies the same configuration item multiple times in one cycle (for example, whether to re-invest), and applies to the next period based on the last modification in the period.")]),e._v(" "),a("p",[e._v("A delegator modifies one same configuration multiple times during one same cycle, only the last modification counts.")]),e._v(" "),a("ul",[a("li",[e._v("Unbonding")])]),e._v(" "),a("p",[e._v("Calculation of delegators unbonding by sending "),a("code",[e._v("TxUnbondDelegate")]),e._v(" transactions")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("\n     |                x                             y          |\n     |  --------------------------------|----------------------|\n     |                                 unbond -----------------|-------------------------|\n\nLast Distribution                                      Nest Distribution              Unbonded\n\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br")])]),a("p",[e._v("The validator will add another checking point after an unbond, the amount unbonded will be returned to delegator's account after a period of "),a("code",[e._v("$unbond_return_height")]),e._v(".")]),e._v(" "),a("p",[e._v("Unbonding takes effect immediately，but the reward will be calculated first, distributed at the next cycle.")]),e._v(" "),a("ol",[a("li",[e._v("Next distribution: reward x + y；")]),e._v(" "),a("li",[e._v("when all QOSs bonded is unbonding: y = 0;")]),e._v(" "),a("li",[e._v("When only a part of QOSs bonded is unbonding， x > y > 0")])]),e._v(" "),a("ul",[a("li",[e._v("Re-investment")])]),e._v(" "),a("p",[e._v("The delegator can specify and later modify whether to re-invest ("),a("code",[e._v("is_compound")]),e._v("). The re-investment means that the income generated in the previous cycle is automatically bond and participates in the next cycle. Otherwise, the profit will be automatically transferred to the delegator's account.")]),e._v(" "),a("p",[e._v("Re-investment can continuously and automatically expand the investment scale of entrusted mining, which is a good choice, but it should be noted that the bonded token redemption needs to pass a "),a("em",[e._v("freeze period")]),e._v(" defined by the parameter "),a("code",[e._v("$unbond_return_height")]),e._v(" in order to return to the client's account, blindly expanding the size of the delegation bond is not conducive to liquidity.")]),e._v(" "),a("h3",{attrs:{id:"slashing-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#slashing-2"}},[e._v("#")]),e._v(" Slashing")]),e._v(" "),a("p",[e._v("The reason for the validators being punished is due to its intentional/unintentional malicious behavior or failure to fulfill the obligations of a validator.")]),e._v(" "),a("p",[e._v("On the other hand, QOS network maintenance requires not only verifiers but also delegators. Delegators are not just a passive, only pursuing income role, but is able to actively choose and filter validators, and make his own voice heard in community governances.")]),e._v(" "),a("p",[e._v("Under the guidance of these principals, in QOS, the purpose of punishment is to reduce its bonding QOS, and the QOSs bond from delegators are also subject to proportional punishment.")]),e._v(" "),a("h4",{attrs:{id:"double-signing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#double-signing"}},[e._v("#")]),e._v(" Double-signing")]),e._v(" "),a("p",[e._v("Double-signing means that the same validator signs more than one time at the same height of the network and broadcasts different information to the network.")]),e._v(" "),a("p",[e._v("In the BFT network, double-signing validator is considered a Byzantine node. When the Byzantine node exceeds 2/3, the network will fork, so we regard the double-signing as a serious mistake and impose a higher penalty - destroy the verifier and its clients' bonded token in a hight proportion.")]),e._v(" "),a("p",[e._v("In practice, double-signing are often due to unintentional mistakes, including:")]),e._v(" "),a("ol",[a("li",[e._v("Stolen private key")]),e._v(" "),a("li",[e._v("Configuration error causes the same validator node starting twice or more")])]),e._v(" "),a("p",[e._v("This indicates the security of private key and ability of set-ups and maintainance is critical to the validator.")]),e._v(" "),a("h4",{attrs:{id:"not-voting-in-governance"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#not-voting-in-governance"}},[e._v("#")]),e._v(" Not-voting-in-governance")]),e._v(" "),a("p",[e._v("In governance voting，if a validator and its delegators are all absent to vote，both will be slashed by a "),a("code",[e._v("$penalty")]),e._v(" proportion of bonded QOSs。")]),e._v(" "),a("h3",{attrs:{id:"gas"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gas"}},[e._v("#")]),e._v(" gas")]),e._v(" "),a("p",[e._v("Other than hardware and networking costs, QOS defined different gas strategy according to transactions' nature.")])])}),[],!1,null,null,null);t.default=i.exports}}]);