(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{684:function(t,r,s){"use strict";s.r(r);var e=s(20),a=Object(e.a)({},(function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"pytest-xdist分布式测试的原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pytest-xdist分布式测试的原理"}},[t._v("#")]),t._v(" pytest-xdist分布式测试的原理")]),t._v(" "),s("h3",{attrs:{id:"前言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),s("ul",[s("li",[t._v("xdist的分布式类似于"),s("strong",[t._v("一主多从")]),t._v("的结构，master机负责下发命令，控制slave机；slave机根据master机的命令执行特定测试任务")]),t._v(" "),s("li",[t._v("在xdist中，主是master，从是workers")])]),t._v(" "),s("h3",{attrs:{id:"大致原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#大致原理"}},[t._v("#")]),t._v(" 大致原理")]),t._v(" "),s("ol",[s("li",[t._v("xdist会产生一个或多个workers，workers都通过master来控制")]),t._v(" "),s("li",[t._v("每个worker负责执行完整的测试用例集，然后按照master的要求运行测试，而master机不执行测试任务")])]),t._v(" "),s("h1",{attrs:{id:"pytest-xdist分布式测试的流程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pytest-xdist分布式测试的流程"}},[t._v("#")]),t._v(" pytest-xdist分布式测试的流程")]),t._v(" "),s("h2",{attrs:{id:"第一步-创建worker"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第一步-创建worker"}},[t._v("#")]),t._v(" 第一步：创建worker")]),t._v(" "),s("ol",[s("li",[t._v("master会在总测试会话（test session）开始前产生一个或多个worker")]),t._v(" "),s("li",[t._v("master和worker之间是通过execnet和网关来通信的")]),t._v(" "),s("li",[t._v("实际编译执行测试代码的worker可能是本地机器也可能是远程机器")])]),t._v(" "),s("h2",{attrs:{id:"第二步-收集测试项用例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第二步-收集测试项用例"}},[t._v("#")]),t._v(" 第二步：收集测试项用例")]),t._v(" "),s("ol",[s("li",[t._v("每个worker类似一个迷你型的pytest执行器")]),t._v(" "),s("li",[t._v("worker会执行一个完整的test collection过程**【收集所有测试用例的过程】**")]),t._v(" "),s("li",[t._v("然后把测试用例的ids返回给master")]),t._v(" "),s("li",[t._v("master是不会执行任何测试用例集的")])]),t._v(" "),s("h3",{attrs:{id:"注意"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#注意"}},[t._v("#")]),t._v(" 注意")]),t._v(" "),s("p",[t._v("所以为什么上面通过分布式测试的结果截图是没有输出用例的print内容，因为主机并不执行测试用例，pycharm相当于一个master")]),t._v(" "),s("h2",{attrs:{id:"第三步-master检测workers收集到的测试用例集"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第三步-master检测workers收集到的测试用例集"}},[t._v("#")]),t._v(" 第三步：master检测workers收集到的测试用例集")]),t._v(" "),s("ol",[s("li",[t._v("master接收到所有worker收集的测试用例集之后，master会进行一些完整性检查，以确保所有worker都收集到一样的测试用例集（包括顺序）")]),t._v(" "),s("li",[t._v("如果检查通过，会将测试用例的ids列表转换成简单的索引列表，每个索引对应一个测试用例的在原来测试集中的位置")]),t._v(" "),s("li",[t._v("这个方案可行的原因是：所有的节点都保存着相同的测试用例集")]),t._v(" "),s("li",[t._v("并且使用这种方式可以"),s("strong",[t._v("节省带宽，"),s("strong",[t._v("因为master只需要告知workers需要执行的测试用例")]),t._v("对应的索引")]),t._v("，而不用告知完整的测试用例信息")])]),t._v(" "),s("h2",{attrs:{id:"第四步-测试用例分发"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第四步-测试用例分发"}},[t._v("#")]),t._v(" 第四步：测试用例分发")]),t._v(" "),s("p",[t._v("--dist-mode选项")]),t._v(" "),s("p",[t._v("**each：**master将完整的测试索引列表分发到每个worker")]),t._v(" "),s("p",[t._v("**load：**master将大约25%的测试用例以轮询的方式分发到各个worker，剩余的测试用例则会等待workers执行完测试用例以后再分发")]),t._v(" "),s("h3",{attrs:{id:"注意-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#注意-2"}},[t._v("#")]),t._v(" 注意")]),t._v(" "),s("p",[t._v("可以使用  pytest_xdist_make_scheduler  这个hook来实现自定义测试分发逻辑。")]),t._v(" "),s("h2",{attrs:{id:"第五步-测试用例的执行"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第五步-测试用例的执行"}},[t._v("#")]),t._v(" 第五步：测试用例的执行")]),t._v(" "),s("ol",[s("li",[t._v("workers 重写了   pytest_runtestloop  ：pytest的默认实现是循环执行所有在test session这个对象里面收集到的测试用例")]),t._v(" "),s("li",[t._v("但是在xdist里, workers实际上是等待master为其发送需要执行的测试用例")]),t._v(" "),s("li",[t._v("当worker收到测试任务, 就顺序执行  pytest_runtest_protocol")]),t._v(" "),s("li",[t._v("值得注意的一个细节是：workers 必须始终保持至少一个测试用例在的任务队列里, 以兼容  pytest_runtest_protocol(item, nextitem)   hook的参数要求，为了将 nextitem传给hook")]),t._v(" "),s("li",[t._v("worker会在执行最后一个测试项前等待master的更多指令")]),t._v(" "),s("li",[t._v("如果它收到了更多测试项, 那么就可以安全的执行   pytest_runtest_protocol  , 因为这时nextitem参数已经可以确定")]),t._v(" "),s("li",[t._v('如果它收到一个 "shutdown"信号, 那么就将 nextitem 参数设为 None, 然后执行 pytest_runtest_protocol')])]),t._v(" "),s("h2",{attrs:{id:"第六步-测试用例再分发-dist-mode-load"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第六步-测试用例再分发-dist-mode-load"}},[t._v("#")]),t._v(" 第六步：测试用例再分发（--dist-mode=load）")]),t._v(" "),s("ol",[s("li",[t._v("当workers开始/结束执行时，会把测试结果返回给master，这样其他pytest hook比如：  pytest_runtest_protocol  和  pytest_runtest_protocol  就可以正常执行")]),t._v(" "),s("li",[t._v("master在worker执行完一个测试后，基于测试执行时长以及每个work剩余测试用例综合决定是否向这个worker发送更多的测试用例")])]),t._v(" "),s("h2",{attrs:{id:"第七步-测试结束"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第七步-测试结束"}},[t._v("#")]),t._v(" 第七步：测试结束")]),t._v(" "),s("ol",[s("li",[t._v("当master没有更多执行测试任务时，它会发送一个“shutdown”信号给所有worker")]),t._v(" "),s("li",[t._v("当worker将剩余测试用例执行完后退出进程")]),t._v(" "),s("li",[t._v("master等待所有worker全部退出")]),t._v(" "),s("li",[t._v("然此时仍需要处理诸如  pytest_runtest_logreport  等事件")])]),t._v(" "),s("p",[t._v("本文转自 "),s("a",{attrs:{href:"https://www.cnblogs.com/poloyy/p/12703290.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.cnblogs.com/poloyy/p/12703290.html"),s("OutboundLink")],1),t._v("，如有侵权，请联系删除。")])])}),[],!1,null,null,null);r.default=a.exports}}]);