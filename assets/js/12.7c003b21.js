(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{358:function(s,a,t){"use strict";t.r(a);var n=t(42),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"networks"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#networks"}},[s._v("#")]),s._v(" Networks")]),s._v(" "),t("p",[s._v("This document describes how to set up your own QOS network, single node or cluster mode.")]),s._v(" "),t("h2",{attrs:{id:"single-node"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#single-node"}},[s._v("#")]),s._v(" Single-node")]),s._v(" "),t("ul",[t("li",[s._v("init")])]),s._v(" "),t("p",[s._v("run "),t("RouterLink",{attrs:{to:"/en/command/qosd.html#initialization"}},[s._v("initialization")]),s._v(" command:")],1),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ qosd init --moniker moniker --chain-id qos-test\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"moniker"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"moniker"')]),s._v(",\n "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"chain_id"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"qos-test"')]),s._v(",\n "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"node_id"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"66853240dc1b26e6f6b35afcf008658823542076"')]),s._v(",\n "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"gentxs_dir"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v(",\n "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"app_message"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"accounts"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" null,\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"mint"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"params"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"total_amount"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"10000000000"')]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"total_block"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"6307200"')]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"stake"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"params"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"max_validator_cnt"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"voting_status_len"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"voting_status_least"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("50")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"survival_secs"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("600")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(",\n   "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"validators"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" null\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"qcp"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ca_root_pub_key"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" null\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"qsc"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ca_root_pub_key"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" null\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br")])]),t("p",[s._v("the configuration file will be generated by default in the "),t("code",[s._v("$HOME/.qosd")]),s._v(" directory.")]),s._v(" "),t("ul",[t("li",[s._v("add-genesis-accounts")])]),s._v(" "),t("p",[s._v("using "),t("code",[s._v("qosd add-genesis-accounts")]),s._v(" command to add accounts:")]),s._v(" "),t("blockquote",[t("p",[s._v("using "),t("code",[s._v("qoscli keys add")]),s._v(" to create address information in the local keystore.")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("\n$ qoscli keys "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" qosInitAcc\nEnter a passphrase "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" your key:\nRepeat the passphrase:\n\n$ qoscli keys list\n\nNAME:   TYPE:   ADDRESS:                                                PUBKEY:\nqosInitAcc      "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("local")]),s._v("   qosacc1lly0audg7yem8jt77x2jc6wtrh7v96hgve8fh8  qosaccpub1zcjduepquqf6k5n8y88wywmt40376m5n9zcwsz5kmnl95j7zw2l7mazf22sq3wvmur\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("p",[s._v("visit "),t("RouterLink",{attrs:{to:"/en/command/qoscli.html#keys"}},[s._v("qoscli keys")]),s._v(" for more information.")],1),s._v(" "),t("p",[s._v("according to "),t("RouterLink",{attrs:{to:"/en/command/qosd.html#genesis-accounts"}},[s._v("add genesis accounts")]),s._v(" for account initialization:")],1),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ qosd add-genesis-accounts qosacc1lly0audg7yem8jt77x2jc6wtrh7v96hgve8fh8,1000000qos\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ul",[t("li",[s._v("config-root-ca")])]),s._v(" "),t("p",[s._v("root CA will be used in "),t("a",{attrs:{href:"../spec/qsc"}},[s._v("QSC")]),s._v(" and "),t("a",{attrs:{href:"../spec/qcp"}},[s._v("QCP")]),s._v(", no need to config if where is no related business. View "),t("RouterLink",{attrs:{to:"/en/spec/ca.html"}},[s._v("CA doc")]),s._v(" to learn more about CA.")],1),s._v(" "),t("p",[s._v("using "),t("code",[s._v("qosd config-root-ca")]),s._v(" command to initialize root CA public key:")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ qosd config-root-ca --qcp "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("qcp-root.pub"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" --qsc "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("qsc-root.pub"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ul",[t("li",[s._v("create-validator")])]),s._v(" "),t("p",[s._v("using "),t("code",[s._v("qosd gentx")]),s._v(" and "),t("code",[s._v("qosd collect-gentxs")]),s._v(" commands to initialize the validator to the configuration file.")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ qosd gentx --moniker validatorName --owner qosacc1lly0audg7yem8jt77x2jc6wtrh7v96hgve8fh8 --tokens "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("main parameters:")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("--owner")]),s._v("         owner address")]),s._v(" "),t("li",[t("code",[s._v("--moniker")]),s._v("       name of this node")]),s._v(" "),t("li",[t("code",[s._v("--logo")]),s._v("          logo")]),s._v(" "),t("li",[t("code",[s._v("--website")]),s._v("       website")]),s._v(" "),t("li",[t("code",[s._v("--details")]),s._v("       description")]),s._v(" "),t("li",[t("code",[s._v("--tokens")]),s._v("        binding tokens")]),s._v(" "),t("li",[t("code",[s._v("--compound")]),s._v("      delegation "),t("code",[s._v("coupound")]),s._v(", default "),t("code",[s._v("false")])])]),s._v(" "),t("p",[s._v("for more information about "),t("code",[s._v("gentx")]),s._v(" please visit "),t("RouterLink",{attrs:{to:"/en/command/qosd.html#gentx"}},[s._v("gentx doc")]),s._v(".")],1),s._v(" "),t("p",[s._v("run")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ qosd collect-gentxs\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("will write the create validator transaction to the "),t("code",[s._v("genesis.json")]),s._v(" file.")]),s._v(" "),t("ul",[t("li",[s._v("start")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ qosd start --log_level debug\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("If everything is ok, you will see the console output block information.")]),s._v(" "),t("h2",{attrs:{id:"cluster"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cluster"}},[s._v("#")]),s._v(" Cluster")]),s._v(" "),t("ul",[t("li",[s._v("qosd testnet\n"),t("RouterLink",{attrs:{to:"/en/command/qosd.html#testnet"}},[s._v("qosd-testnet")]),s._v(" command can batch generate multiple validators node configuration information of a test network.")],1)]),s._v(" "),t("p",[s._v("assume IP of the first machine is "),t("code",[s._v("192.168.1.100")]),s._v(":")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ qosd testnet --v "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" --name capricorn --starting-ip-address "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".1.100\nSuccessfully initialized "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" node directories\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("The "),t("code",[s._v("mytestnet")]),s._v(" folder will be generated in the current directory, and the node 0-3 configuration files will be stored separately.\nNotice that the "),t("code",[s._v("priv_validator_owner.json")]),s._v(" is the private key of the validator owner, and it can be import to the local keystore by using "),t("code",[s._v("qoscli keys import")]),s._v(" command.")]),s._v(" "),t("ul",[t("li",[s._v("start\nBe sure to install QOS correctly on all four machines in accordance with [Installation Instructions] (installation.md) before starting.\nCopy node0-3 to a different machine and execute them separately:")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ qosd start --home "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("directory_for_config_and_data"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);