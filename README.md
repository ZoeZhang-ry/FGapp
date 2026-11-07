# v5 原型本地工作副本

2026年11月7日全业务事项详情版本二扩展：按用户要求先盘点并统一所有活跃业务事项详情。当前仅存在1个共享渲染函数`v5DetailPage`，初始种子覆盖5类业务36条记录：公文17、项目6、内部事项6、通知4、物资申领3；首页四模块33条，另3条物资申领来自应用目录。版本二将`doc-detail-v2`作用域从“首页公文详情”扩展为“任何活跃业务记录的detail视图”，因此应用目录来源和物资申领详情同样适用；业务DOM、字段、页签、事件、路由和数据未改。资产详情、联系人详情、指标详情、跟踪详情及历史模式详情不是该共享事项详情模板，未纳入。qa/doc-detail-v2/all-detail-records-check.cjs验证四类首页详情、四类应用目录/物资来源详情、三页签、正文阅读返回、样式清理、深色大字和375/390/414/430px布局；除已获准的摘要标题18px/大字20px和标签11px/大字13px外，页签、字段、卡片标题和按钮字体五项在开关样式类时一致。截图all-detail-*.png与结果all-detail-results.json。仅本地Edge仿真，未做实机或真实接口验收，远端未改。

2026年11月7日公文详情版本二风格：版本二仅将“首页 → 公文处理 → 事项详情”纳入冰蓝白独立卡片风格。index.html新增assets/doc-detail-v2.css引用，并基于原路由栈增加/清理doc-detail-v2类；v5DetailPage、字段、页签、按钮、事件和数据未改。新样式只处理背景、表面、边框、阴影、状态色、页签指示线和底部操作背景，不声明字体五项属性。待处理、已办、三个页签、附件阅读、更多操作、确认取消、返回列表和关闭清理均用真实点击验证；字体五项属性和业务DOM与关闭该类时严格一致。375/390/414/430/768px无整页横向溢出，深色大字截图通过。内部事项详情保持通用工作流样式，仅favicon 404为浏览器默认请求。同日根据用户反馈将摘要卡内边距降至12px、标题降至18px（大字20px）、标签11px（大字13px），编号日期底部空隙收紧；截图detail-390-reduced.png与heading-metrics.json。截图detail-390-reduced.png与heading-metrics.json；同日按用户要求将详情底部“更多操作/提交”改为等宽各占50%，390px实测均为178px，证据action-buttons-equal.*。证据见qa/doc-detail-v2/；仅本地Edge仿真，未做实机或真实接口验收，远端未改。

2026年11月6日公文链路统一收尾：index.html新增首页公文doc-reader判定/清理，doc-handle纳入submit；assets/doc-workflow/page.css复用共用导航、按钮配色并增加阅读卡片、表格和来源链接样式。正文/PDF/XLSX阅读、提交/提交阅办确认与回执全部纳入qa/doc-completion/check.cjs验证，六状态普通/大字DOM及字体四属性与before.html严格相同。375/390/414/430px浅色/深色大字检查通过；阅读返回、确认取消、提交回执、查看事项和返回列表均通过；原链接href和新窗口target保留，外部政府页面未访问或修改。回执沿用前轮已批准样式，原成功图标与位置不改。截图与comparison.json、results.json在qa/doc-completion/。未进行真机键盘或真实业务联调。

2026年11月6日公文办理回执配色：index.html增加首页docs/record回执的doc-receipt类切换与清理；assets/doc-workflow/page.css追加隔离视觉规则。原DOM、成功图标、布局、字体、按钮及数据不变。qa/doc-receipt/comparison.json记录普通/大字所有主要元素字体四属性及位置尺寸，修改前后严格相等；375/390/414/430px无横向溢出，真实按钮转办提交→回执→查看事项→返回回执→返回列表通过。截图receipt-390.png；未执行手机真机验收。

2026年11月6日转办/退回补充升级：修改index.html的页面类切换及清理，assets/doc-workflow/page.css扩展doc-handle共用样式及作用域内表单边框/聚焦/提示条。仅首页公文来源的transfer/return确认页适用，无新增资源、DOM或业务函数改动；直接提交确认、其他业务及应用来源不变。原字段与事件见qa/doc-handle/验收基线.md；修改前快照before.html，原计算字体fonts-before.json，完整DOM/字体/控件高度对比comparison.json。check.cjs验证375/390/414/430px普通及深色大字、取消与顶部返回不修改数据、原选项和必填错误、提交回执/详情/首页列表同步、防重提交及样式隔离，结果results.json。截图transfer-390-normal.png、return-390-normal.png及其余尺寸。原型无独立的第二次确认页；本页即原确认办理步骤。键盘只做500px高视口近似验证，未做手机真机或真实接口联调。

2026年11月6日首页公文详情/办理操作更新：index.html仅增加assets/doc-workflow/page.css引用，并基于原路由栈的首页docs来源切换/清理doc-detail、doc-action类；原渲染DOM、字段、事件和业务函数未改。新增样式只设置颜色、背景、边框、圆角、阴影及少量容器留白，无字体属性。没有新增图片/字体/图标，参考图片未用于背景；确认、正文阅读、回执及其他来源保持原样。

实测：qa/doc-workflow/check.cjs，结果results.json；基线验收基线.md、before.html，字体原记录typography-before.json及完整逐元素对照typography-comparison.json。三个详情页签与操作页在普通/大字下DOM和文字完全相同，font-family/font-size/font-weight/line-height逐项相等。375/390/414/430px浅色及深色大字无横向溢出；全部正文/附件、流转、转办与退回必填/处室选项、取消返回、直接提交、回执、防重复提交、已办及阅件变体、第二页返回均通过。底部内容与返回链接可滚动到操作栏上方，公文列表/应用目录来源/内部事项/请休假样式隔离通过，三个脚本语法通过、无页面错误。截图detail-390-normal.png、actions-390-normal.png、detail-full.png、detail-bottom.png及各尺寸版本。尚未进行真实接口联调或手机实机；原型阅读/办理仍为仿真。

2026年11月6日请休假申请视觉重构：仅form/leave且无submittedId时启用leave-application命名空间。改动index.html的样式引用、页面类清理/切换及顶部heading；其余表单HTML沿用原表达式与控件。新增assets/leave-application/page.css和calendar.svg（独立静态日历/纸张/笔装饰，不是截图）。申请信息六项数据、五项输入字段、校验、附件、确认及回执事件保持原样，底部保持sticky。核对、回执、详情和其他页面不套新样式。

重构前字段与交互依据：qa/leave-application/原有字段与交互清单.md；修改前快照before.html。执行check.cjs，结果results-final.json，截图390-normal-final.png、full-final.png及375/414/430/桌面/深色大字版本。已从应用→办公协同→人事流程真实点击进入，逐属性比较控件、申请信息及九个业务函数；验证必填/日期先后/天数跨度与范围、手动天数不随日期变动、示例附件草稿保留与重复点击、填入示例、核对返回、确认回执、防重复提交、无附件提交、详情与我的办事导航；三类其他表单渲染HTML与修改前一致，三个内联脚本语法通过。无页面运行错误。键盘仅通过500px高视口检查，未做真机或真实上传验证（原型无真实上传能力）。与参考图区别：保留1500字限制、天数必填、示例附件说明、仿真提示及粘性操作；没有200字计数或20MB上传承诺。独立SVG与参考插画存在细节差异。前一条四页状态字号调整按本轮限定暂未执行。

2026年11月6日项目列表卡片调整：按用户反馈，仅首页projects的dp-list改为独立卡片布局，沿用原版9px间距、14px圆角及内边距，保留进度和协调问题。375/390/430px实测间隙9px、无横向溢出，详情进入返回通过，公文合并列表不变。截图qa/document-processing/projects-separate-cards.png为该调整后效果。

2026年11月6日项目待办扩展：用户要求同理更新，首页projects路由接入v5HomeListPage，四类首页列表共用样式；应用目录项目列表仍保持原样。项目保留原建设进度值、进度条、处室与协调问题，新增dp-progress集中样式；背景暂沿用civic-center.png，无新增图片。验证脚本check-home-lists.cjs已包含项目尺寸/主题/分类/搜索/返回/临时分页及保存进度与提交分开验证；历史测试的项目样式隔离改为验证应用目录project-search入口。截图projects-390-final.png及375/430/桌面/深色大字版本位于qa/document-processing/。默认普通字号；本轮仅本地原型变更。

2026年11月6日背景更新：按用户新提供的图1/图2，新增assets/document-processing/notices-board.png（通知公告）和internal-files.png（内部事项），由page.css按data-v5-domain限定引用。原图独立保存，使用CSS柔焦、蓝色罩层、裁切和渐隐；公文仍使用civic-center.png。390px浏览器截图检查与实际背景引用验证通过，截图qa/document-processing/notices-background.png及internal-background.png。此次仅背景资源及样式调整，业务逻辑未修改。

2026年11月6日首页列表扩展（当前状态）：按用户确认方案，首页的公文、内部事项、通知公告共用v5HomeListPage及assets/document-processing/page.css；保留document-processing作为共用样式类名和资源目录以兼容已有公文页。内部事项四分类、通知三分类等宽，通知保留三个状态页签与独立阅读/反馈状态。未改接口、数据模型、办理控制器、应用入口和详情样式；无新增图片，复用civic-center.png与bird.svg。下方“仅公文”描述为前一阶段历史范围。

新增验证：qa/document-processing/check-home-lists.cjs，结果home-lists-results-final.json。已在Edge检查375/390/430px及1280px桌面手机框、普通和深色大字、全部状态/分类、标题/编号/处室搜索、空结果、详情返回；隔离浏览器临时补记录检查第二页和滚动恢复，不写入工程样例。内部事项提交后待处理4→3、本人已办1→2且保留人事备案状态；普通通知已读完成、会议已读继续待反馈、参会/不参加反馈完成及不参加原因校验均通过，首页数量同步。公文原回归脚本通过，三个内联脚本语法通过，无页面脚本错误。截图含internal-390-final.png、notices-390-final.png及各宽度/字号版本；first为首轮检查产物，首次内部事项截图曾截到滑入动画，final改为等待动画结束。键盘仅做缩小视口检查，未进行真实手机或正式系统验收。本地预览仍为http://127.0.0.1:8766/，无线上发布。

2026年11月5日按用户要求读取同事交接并从GitHub取得当前源码，用于并排预览及讨论新方案。

- 仓库：`https://github.com/yhz412831511-coder/shenzhen-fgw-mobile-office-demo`
- 本次查询main提交：`5a2f296aa384aee1a303c59ae3a0b9a75669ec62`
- 提交时间：2026年11月3日21:17:25（北京时间）。
- 提交说明：修正宽屏机框的响应式布局和窗口高度。
- 接手时原始 `index.html` SHA-256：`9ccbea7792ae2b4f44184b6cbb8064e78c0dd8a245f05571ec319aa43cbcdb13`，与交接文档完全一致；后续修改的工作文件不再使用此指纹。
- 通过GitHub内容API获取固定提交源码；直接下载Pages及raw域名发生连接中断，未独立完成线上页面字节比对。
- 本地预览：`http://127.0.0.1:8766/`，仅绑定本机，已验证HTTP 200。预览服务停止后需重新启动。
- 这是浏览器仿真原型。2026年11月6日按用户确认方案重构首页公文列表视觉，新增独立样式、建筑图片和飞鸟SVG；未发布线上变更。复制工程时须携带assets目录。

已定位入口表FUSION_APPS、路由v5Navigate/v5Render、办理v5Commit、返回v5ReturnList、助手v5AssistantSearch及最后生效的首页渲染。历史定义及v4/v6函数前缀仍存在，修改须定位实际生效逻辑。

当前改造仅作用于首页公文列表（list/docs/home），两种办理状态、分类、搜索、每页6条、详情和办理保持现有控制器。改造源码为index.html，新增资源位于assets/document-processing/：page.css、civic-center.png、bird.svg。建筑直接采用用户提供图1；图2只用于视觉对照。

2026年11月6日按用户浏览器批注统一分类按钮宽度：普通模式五列等宽，移除“全部”的额外内边距；大字模式三列等宽换行。375/390/430px下两种字号、两种办理状态、全部五项切换均验证等宽且文字无横向溢出，截图qa/document-processing/equal-filters.png。筛选控制器与数量计算未改动。

2026年11月6日字号排查：普通模式默认关闭大字，首页公文列表标题为16px、Banner标题24px；大字模式分别为18px、28px。保留用户主动开启后的偏好记忆；初始化改为只接受布尔true，避免异常字符串（如字符串false）误触发大字。独立Edge验证首次加载、保存的开/关、异常值和设置按钮开关后刷新均通过，记录见qa/document-processing/font-state-results.json，截图font-normal.png与font-large.png。未能连接当前桌面预览检查工具，不能据此断定用户当前浏览器已保存的状态。

已在Edge浏览器390×850截图对比并调整，检查375/390/430px、桌面手机框、深色大字、查询与分页、详情返回及办理后数量同步；脚本语法与页面运行未发现异常。检查记录与截图位于qa/document-processing/。键盘场景使用缩小视口验证输入可见，未执行iPhone实机或正式业务接口验收。

参考图的长标题单行与原数据在16px字号下的宽度不完全一致，本实现保持真实文字并自然换行。建筑视角采用图1，飞鸟由参考图描绘为SVG，均存在素材层面的合理差异。按根目录AGENTS.md及项目资料基线继续工作；本页颜色和圆角以用户于2026年11月6日明确提供的参考图为优先依据。


2026年11月6日：首页项目待办、内部事项、通知公告下游流程统一UI。index.html的v5Render将既有doc-detail/doc-action/doc-handle/doc-reader/doc-receipt样式条件扩展至同领域首页来源，assets/doc-workflow/page.css补齐number输入配色。其余渲染及业务函数与本轮前源码一致；字体、字段、事件、数据不改。首页列表、应用目录来源和新建申请表单不在本轮范围。历史条目描述的排除范围以本条为准。

验收证据：qa/business-workflows/按钮与页面清单.md、button-routes.json、results.json、receipt-results.json及各页面截图；check.cjs与receipt-check.cjs可重复运行。122种状态普通/大字DOM和计算字体一致，三类回执也单独验证。375/390/414/430px、666px桌面手机框与深色大字无整页横向溢出；10条办理分支及参加反馈、回执详情/列表返回、正文和附件返回通过。390×480缩短视口验证输入及提交可达，但不替代手机实际键盘测试。仅本地Edge仿真验证，未做真实接口或双端实机验收，也未线上发布。


2026年11月6日请休假申请链路扩展：依据用户“模块同理”要求，保留已确认的日历主题填写页，核对申请、new-form回执、已提交提示复用doc-handle/doc-receipt；formId=leave且domain=internal的详情、办理操作、原确认流程及正文/附件阅读复用统一业务组件，包含从“我的办事”重新打开。共享我的办事列表及其他申请表单不扩展。此决定覆盖此前新建申请下游统一排除的历史范围，仅请休假例外。只改v5Render样式判定，业务渲染、字段、函数、字体和资源不变。13个状态普通/大字DOM与计算字体一致；375/390/414/430px及桌面、深色大字通过布局检查。原请休假完整回归通过（必填、日期/天数、示例附件、核对返回、提交防重、回执/详情/我的办事）。真实移动键盘与原生实机未验证。证据见原型工作区/qa/leave-workflow/和qa/leave-application/results-workflow-regression.json；仅本地，未发布线上。


2026年11月6日“我的办事”遗漏补齐：用户明确指出请休假回执中的“我的办事”列表未更新，现将view=list且appId=my-process纳入独立my-process-list作用域，覆盖该共享页面所有原有入口。复用doc-workflow导航、背景、白卡片与按钮配色，选中分类白底蓝字；保留现有排布、横向分类滚动、字体、四状态、所有业务记录、搜索与每页6条分页。进入详情和关闭清除作用域。此决定覆盖上一条将共享列表排除的历史描述；其他应用列表不扩展。40组普通/大字DOM及计算字体前后完全一致；375/390/414/430/708px、深色大字、提交回执进入列表、四状态全部分类、标题/编号/处室搜索、空结果、回车、第二页、详情返回保留查询/页码已通过Edge仿真测试。截图与结果见qa/my-process/。未做实机/原生键盘验收，未发布线上。


2026年11月6日四业务Banner与动效更新：依据用户粘贴要求及新图1，首页四列表分别使用原鹏鸟、抽象轨迹、三层面片和信息线；图2独立保存为project-construction.png替换项目市民中心背景，其他三背景主题保留。图1仅对照，不作为网页截图背景。字体、文案、数量、排布、事件、数据及导航保持；Banner高度比对一致。新增banner-motion.js（纯装饰内联SVG与独立Set播放记忆）和banner-motion.css。鹏鸟700ms、轨迹900ms、叠层800ms、信息900ms；当前页面加载会话每个领域首次进入一次，筛选/搜索/重开/详情返回不重播。列表首次240ms淡入，按压220ms缩放0.99；原280ms导航机制保持，详情和表单不扩展。背景仅顶部14秒缓慢透明度变化，无发光或持续弹跳。prefers-reduced-motion静态呈现，动态开启可取消活动入场。Edge仿真四宽及桌面、深色大字、所有状态/分类、搜索、隔离临时记录分页、详情返回与减弱动态验证通过；字体及非装饰DOM逐项一致。证据qa/banner-motion/；未做实机性能评测。用户明确仅改本地，未推送、未发布。
