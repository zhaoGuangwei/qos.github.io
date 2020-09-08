(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{422:function(s,a,t){"use strict";t.r(a);var n=t(42),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"networks"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#networks"}},[s._v("#")]),s._v(" Networks")]),s._v(" "),t("p",[s._v("此文档介绍如何搭建自己的QOS网络，单节点或集群方式。")]),s._v(" "),t("h2",{attrs:{id:"single-node"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#single-node"}},[s._v("#")]),s._v(" Single-node")]),s._v(" "),t("ul",[t("li",[s._v("init")])]),s._v(" "),t("p",[s._v("参照"),t("RouterLink",{attrs:{to:"/command/qosd.html#初始化"}},[s._v("初始化")]),s._v(" 执行：")],1),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ qosd init --moniker moniker --chain-id qos-test\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"moniker"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"moniker"')]),s._v(",\n "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"chain_id"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"qos-test"')]),s._v(",\n "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"node_id"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"66853240dc1b26e6f6b35afcf008658823542076"')]),s._v(",\n "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"gentxs_dir"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v(",\n "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"app_message"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"accounts"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" null,\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"mint"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"params"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"total_amount"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"10000000000"')]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"total_block"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"6307200"')]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"stake"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"params"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"max_validator_cnt"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"voting_status_len"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"voting_status_least"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("50")]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"survival_secs"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("600")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(",\n   "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"validators"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" null\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"qcp"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ca_root_pub_key"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" null\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"qsc"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ca_root_pub_key"')]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" null\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br")])]),t("p",[s._v("默认在$HOME/.qosd目录下生成配置文件。")]),s._v(" "),t("ul",[t("li",[s._v("add-genesis-accounts")])]),s._v(" "),t("p",[s._v("使用"),t("code",[s._v("qosd add-genesis-accounts")]),s._v("初始化account账户到配置文件中.")]),s._v(" "),t("blockquote",[t("p",[s._v("使用"),t("code",[s._v("qoscli keys add")]),s._v("创建account公私钥和地址信息")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("\n$ qoscli keys "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" qosInitAcc\nEnter a passphrase "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" your key:\nRepeat the passphrase:\n\n$ qoscli keys list\n\nNAME:   TYPE:   ADDRESS:                                                PUBKEY:\nqosInitAcc      "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("local")]),s._v("   qosacc1hqcz9hhxa7qqxghc276vxxgcd3qkr279nz5gfq  qosaccpub1zcjduepqfzd5r2hzdnz58pjc9xuw5r2ez8f4khhwtekfxdjyvkvhrly6rxzqll3fgz\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("p",[s._v("更多本地秘钥库相关指令参照"),t("RouterLink",{attrs:{to:"/command/qoscli.html#密钥"}},[s._v("qoscli keys")])],1),s._v(" "),t("p",[s._v("参照"),t("RouterLink",{attrs:{to:"/command/qosd.html#设置账户"}},[s._v("设置账户")]),s._v(" 初始化账户信息：")],1),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ qosd add-genesis-accounts qosacc1hqcz9hhxa7qqxghc276vxxgcd3qkr279nz5gfq,49000000000000qos\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ul",[t("li",[s._v("config-root-ca")])]),s._v(" "),t("p",[s._v("root CA用于校验"),t("a",{attrs:{href:"../spec/qsc"}},[s._v("QSC")]),s._v("和"),t("a",{attrs:{href:"../spec/qcp"}},[s._v("QCP")]),s._v("，不存在相关业务时"),t("strong",[s._v("可不配置")]),s._v("。CA的获取和使用请查阅"),t("RouterLink",{attrs:{to:"/spec/ca.html"}},[s._v("CA 文档")])],1),s._v(" "),t("p",[s._v("使用"),t("code",[s._v("qosd config-root-ca")]),s._v("初始化root CA公钥到配置文件。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ qosd config-root-ca --qcp "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("qcp-root.pub"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" --qsc "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("qsc-root.pub"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("更多操作说明查看"),t("RouterLink",{attrs:{to:"/command/qosd.html#设置ca"}},[s._v("设置CA")])],1),s._v(" "),t("p",[s._v("查看genesis.json内容，确认配置成功。")]),s._v(" "),t("ul",[t("li",[s._v("create-validator")])]),s._v(" "),t("p",[s._v("使用"),t("code",[s._v("qosd gentx")]),s._v("和"),t("code",[s._v("qosd collect-gentxs")]),s._v("初始化validator到配置文件中，只有配置了validator才能正常运行QOS网络。")]),s._v(" "),t("p",[s._v("使用上面的初始化账户地址作为owner")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ qosd gentx --moniker validatorName --owner qosacc1hqcz9hhxa7qqxghc276vxxgcd3qkr279nz5gfq --tokens "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("主要参数说明:")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("--owner")]),s._v("         操作者账户地址")]),s._v(" "),t("li",[t("code",[s._v("--moniker")]),s._v("       验证节点名字")]),s._v(" "),t("li",[t("code",[s._v("--logo")]),s._v("          logo")]),s._v(" "),t("li",[t("code",[s._v("--website")]),s._v("       网址")]),s._v(" "),t("li",[t("code",[s._v("--details")]),s._v("       详细描述信息")]),s._v(" "),t("li",[t("code",[s._v("--tokens")]),s._v("        绑定tokens，不能大于操作者持有QOS数量")]),s._v(" "),t("li",[t("code",[s._v("--compound")]),s._v("      收益复投方式，默认false，即收益不复投")])]),s._v(" "),t("p",[s._v("更多操作说明参照"),t("RouterLink",{attrs:{to:"/command/qosd.html#生成创世交易"}},[s._v("生成创世交易")])],1),s._v(" "),t("p",[s._v("运行：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ qosd collect-gentxs\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("将创建验证节点交易写入"),t("code",[s._v("genesis.json")]),s._v("文件中。")]),s._v(" "),t("ul",[t("li",[s._v("start")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ qosd start --log_level debug\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("如果一切正常，会看到控制台输出打块信息")]),s._v(" "),t("h2",{attrs:{id:"cluster"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cluster"}},[s._v("#")]),s._v(" Cluster")]),s._v(" "),t("ul",[t("li",[s._v("qosd testnet\n"),t("RouterLink",{attrs:{to:"/command/qosd.html#初始化测试网络"}},[s._v("qosd-testnet")]),s._v("命令可以批量生成一个测试网络多个验证节点配置信息")],1)]),s._v(" "),t("p",[s._v("假设第一台机器IP: 192.168.1.100")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ qosd testnet --v "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" --name capricorn --starting-ip-address "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".1.100\nSuccessfully initialized "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" node directories\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("会在当前目录下生成mytestnet文件夹，分别放置node0-3配置文件。\n其中priv_validator_owner.json为对应validator owner私钥，可通过"),t("code",[s._v("qoscli keys import")]),s._v("导入。")]),s._v(" "),t("ul",[t("li",[s._v("start\n启动前请确保按照"),t("RouterLink",{attrs:{to:"/install/installation.html"}},[s._v("安装说明")]),s._v("在四台机器上正确安装QOS。\n拷贝node0-3至不同机器，分别执行：")],1)]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ qosd start --home "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("directory_for_config_and_data"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);