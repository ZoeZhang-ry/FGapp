2026年11月8日第十三轮（微信白边）：用户微信打开页面一侧露白。根因：手机壳方案用100vw收口，X5/WK内核中100vw可比可见视口宽数像素，html无底色而.phone左对齐，差值露白。修复ui-v2-system.css：≤499px时html/body宽100%+overflow-x hidden，.phone强制100%/100%（含:has的390px定宽页）。chk16实测375/390/393/412/428五宽度phone满宽、文档无横向溢出、公文列表页同样满宽，ALL PASS。已提交fd8b8c9并推送FGapp（origin仓库迁移提示无碍），Pages自动部署。仅模拟验证，微信真机待用户确认。

2026年11月8日第十二轮：请休假顶栏高度对齐标准页67px（原63px，min-height 58改67，padding-top保持11px+safe区）。chk14实测standard/leave头高均67px、标题中心33/35（居中），ALL PASS，截图r14-leave-67.png。仅Edge仿真，未实机，未发布。

2026年11月8日第十一轮（用户反馈顶部空隙过大）：列表族浮动头与body顶部padding已在16px+safe区带（箭头与标题同行，中心38px实测），本轮确认；请休假页头部为状态栏预留的37px/88px收紧为11px/58px（与标准顶栏一致），状态栏已隐藏。chk12.cjs ALL PASS（docs箭头/标题top均16px、leave头63px高、padding-top 11px、min-height 58px），chk8/chk10/chk11/round5/entry-titles/hero回归通过，截图r12-docs.png、r12-leave.png。仅Edge仿真，未实机，未发布。

2026年11月8日第十轮修正（用户反馈删状态栏引发的回归）：①请休假表单页有独立假状态栏元素.leave-application-status，与dp-status一并全局隐藏；②列表族返回箭头与banner标题错行——internal-v2浮动头top从12px改回64px+safe区（与body padding一致），箭头中心与dp-title中心同为86px实测对齐（docs/supplies/notices/projects四页断言≤6px）。chk11.cjs ALL PASS（对齐+leave状态栏隐藏），chk8/chk10/round5/entry-titles回归通过，截图r11-*.png。仅Edge仿真，未实机，未发布。

2026年11月8日第十轮（用户确认取删）：dp-status假状态栏（9:41+信号SVG装饰）全局隐藏（.dp-status display:none!important），internal-v2为其预留的44px位移同步收敛——列表族浮动头top改12px+safe区，body顶部padding改64px+safe区避开浮动头。三个列表页实测statusHidden、头12-56px、内容64px起不重叠（chk10.cjs ALL PASS），深色截图正常，chk8/round5/entry-titles/hero回归通过，截图r10-*.png。仅Edge仿真，未实机，未发布。

2026年11月8日第九轮：助手查询结果页（返回对话/查询结果/结果内搜索/资料卡/分页）补入助手族v2语言——标题白卡20px、搜索框白底内描边+主蓝实心钮、资料卡u2描边投影、分页dp风格、返回对话轻量文字链（ui-v2-system.css追加assistant作用域规则，深色随token）。内容与查询逻辑零改动。另答复用户：列表页顶部9:41为代码渲染的dp-status假状态栏（span+SVG装饰，aria-hidden），非背景图。chk8/round5/entry-titles回归ALL PASS，截图as-result-search.png。仅Edge仿真，未实机，未发布。

2026年11月8日第八轮（助手族v2对齐+首页微调）：首页待办section上移10px（mt 16px）。发改助手按既定方案重设计（内容/数据/处理器/字体五项全不动，纯布局与表面，assets/ui-v2-system.css追加作用域规则）：A 阅读页——工具行出sticky栏融入内容（返回=文字链，查看要点=白底主蓝描边44px按钮），标题降20px并入白卡横幅，来源通知改淡蓝信息条，各节改白卡（16px圆角+u2描边+投影+淡蓝节标签）；B 全助手层顶栏meta在无v5-page层隐藏，不再被全局徽章盖住；C 欢迎页——工具条/模型/知识范围收进白卡（主蓝实心新对话+描边历史对话），cap改淡蓝信息条，示例2×2卡对齐v2卡语言；D 结果页——用户气泡82%右对齐，shell底部预留104px消除输入条遮挡，composer改浅底白输入框主蓝圆钮。深色模式随u2 token切换。验证chk8.cjs（meta display none、section白卡16px、h1 20px、aiBtn白底11px、topPos static、pb 104px、深色卡rgb(24,36,49)、todos mt16）ALL PASS；round4/round5/entry-titles/hero回归通过；截图as-welcome/as-result/as-reader-new.png。仅Edge仿真，未实机，未发布。

2026年11月8日第七轮：AI+经济等dashboard族页面筛选chips条与页签条上下仅13px且同为白胶囊，视觉糊连——ui-v2-system.css为dashboard/metric族chips改margin 14/16px、tabs下边16px，条间分离清晰（实测chips top146/mb16、tabs top206/mb16）。首页发改助手卡再下移10px至69px，390px无溢出。check-round4/round5/entry-titles回归ALL PASS，截图sp-ai-economy.png、r7-home-69.png。仅Edge仿真，未实机，未发布。

2026年11月8日申领列表返回按钮修正（用户反馈）：supplies此前未列入蓝顶栏规则的浮动头排除名单，standard页white按钮!important压过墨色箭头并使顶栏出现白色块。ui-v2-system.css的6处排除:is()扩展纳入supplies后，五个领域列表顶栏统一透明、返回按钮无背景、箭头墨色rgb(23,35,52)；internal-v2的head容器同步声明transparent无边框无blur。实测btnBg rgba(0,0,0,0)、headBgImg none，截图ps-arrow-fixed.png；check-entry-titles/round4/round5回归ALL PASS。仅Edge仿真，未实机，未发布。

2026年11月8日申领页修复（skill辅助）：应用→办公协同→资产物资的申领列表（我的/待办/已办/所有申领）原不在四领域v2作用域内，页内残留旧样式：banner装饰盾牌巨图占半屏、页签与筛选chips旧蓝#2365e8胶囊、搜索按钮透明底白字（skill对比度规则判定高严重性不可读）。修复：internal-v2.css的56处列表选择器扩展纳入supplies领域（对齐四领域全部规范：v2变量、冰蓝白背景、浮动透明顶栏、短下划线页签、开放横滑筛选、主蓝实心搜索钮、白卡行、自然分页），删除ui-v2-system.css中supplies旧渐变覆盖；businessBannerDecoration与入口标题逻辑未动。数据、记录、mode映射零改动；新建申领表单页本轮前已是v2规范。验证probe-supplies.cjs（chips rgb(229,241,253)/搜索钮rgb(21,82,163)白字、盾牌消失）+全套回归check-entry-titles/check-round4/check-round5/check-hero ALL PASS，截图ps-*.png。仅Edge仿真，未实机，未发布。

2026年11月8日入口标题一致性（用户反馈）：应用目录17个列表入口打开后页内banner大标题原硬编码为领域名（公文处理/内部事项/物资申领/项目待办），与入口名不一致。修复：v5HomeListPage的dp-banner h1改按来源取题——home来源保留领域名（公文/项目/内部事项/通知公告四宫格语义不变），应用入口显示入口自身名称（待办公文、我的办事、项目调度等17项，openAppV3的route.title本已正确，仅展示层取值变化）。业务路由、mode映射、数据均未改。验证check-entry-titles.cjs：17个入口banner+顶栏h2均等于入口名，home四领域保持原标题，ALL PASS，截图r6-doc-pending-title.png。仅Edge仿真，未实机，未发布。

2026年11月8日第五轮（skill辅助诊断）：安装用户提供的ui-ux-pro-max skill包（7个skill装入 ~/.zcode/cli/skills/，未执行包内脚本）。banner同色根因确诊：ui-v2-focus页（表单/确认/办理/回执/AI评审）页面底原本就是纯白，白色banner自然融入——按用户方案将focus页底改为灰调 var(--u2-bg)（#f7fafe，深色#101923），banner保持纯白卡。应用页分类栏修复：5个分类实际宽度超390px致末项裁切且桌面无法横滑，改为等宽单行铺满（flex:1、圆角11px），375px同样完整显示。验证check-round5.cjs ALL PASS（分类栏5项一行全可见overflow visible、出差/AI页底rgb(247,250,254)+banner纯白、深色底同步、375px不换行），check-round4回归通过，截图r5-*.png。skill数据库检索（dimensional-layering等）仅作讨论素材未直接应用。仅Edge仿真，未实机，未发布。

2026年11月8日第四轮微调（用户反馈）：发改助手卡片再下移至59px（24+35）完整避让建筑。banner与背景分离：所有ui-v2页面v5-title标题区改白色圆角卡（描边+投影），因公出差申请、AI+评审等页不再与冰蓝底同色；表单/AI页页签栏加白色胶囊容器，选中#e5f1fd+#1552a3。首页四宫格隐藏“申领”入口（仅展示层display:none，申领应用与数据保留，物资申领仍可从应用目录进入）。公文处理等四领域列表浮动顶栏清除白底毛玻璃条，返回按钮无背景色。验证qa/home-v2/check-round4.cjs ALL PASS（助手59px、宫格4项且申领隐藏、出差/AI页banner白卡、AI页签白条、公文头透明rgb(0,0,0,0)、物资申领应用可达、详情页v5-detail-heading不受影响、375/390/430无溢出），check-hero回归通过，check-topbar断言同步59px后通过。仅Edge仿真，未实机，未发布。

2026年11月8日首页视觉与列表统一（用户提供背景图轮次）：首页背景改用用户提供的干净城市蓝白图（assets/home-v2/home-bg.png，已裁除右下角AI水印，向下渐隐接#f7fafe）；发改助手、待办面板改毛玻璃（rgba白+blur16），搜索框/快捷查询半透明，搜索按钮#1552a3实心11px圆角；发改助手卡片下移24px避让右上建筑。768px机框曾被历史媒体查询置为全屏无框，已恢复38px圆角外框。列表族统一（ui-v2-list扩展至list/home-list/contacts/assets）：通讯录、资产、我的待办、我的办事的筛选chips改为公文处理同款开放横滑行（选中#e5f1fd+#1552a3+600字重）、搜索框白底内描边+主蓝实心按钮、分页按钮同dp语言；我的待办补冰蓝底并入行卡片化；我的办事保留胶囊页签。顶栏统一：所有标准业务页（详情/办理/回执/通讯录/表单/助手等）白顶栏改为应用页同款蓝色渐变(135deg,#173e79,#2e63b4,#4f7cbd)白字，返回按钮透明底白图标；四领域首页列表的浮动透明顶栏按用户范围排除。全局“测试演示环境”徽章删除4处页面级隐藏/重定位规则，恢复为每页固定右上红色胶囊。验证qa/home-v2/check-topbar.cjs与check-hero.cjs全部通过（顶栏渐变/白字/透明返回钮、徽章8页面可见、助手卡24px、chips#e5f1fd、搜索钮rgb(21,82,163)、375/390/430无溢出、深色、应用页隔离），截图r3-*.png。历史断言“顶栏白底”按用户本轮指示作废。仅Edge仿真，未实机验收，未发布。

# v5 原型本地工作副本

2026年11月8日版本二非首页页面全量统一：按用户最新要求，应用页和我的页取消深蓝顶栏，统一为版本二冰蓝浏览背景、白色16px圆角卡片、蓝色线性图标与冷白组件；身份、认证、设备可信、37项应用、4类及15个实际二级分组不变。新增assets/ui-v2-system.css作为共用视觉层，并由v5Render按视图统一挂载页面族，避免逐应用复制样式。浏览/概览型页面（应用、我的、业务列表、资产、通讯录、看板、指标、事项详情）使用冰蓝背景；高专注页面（表单、确认、办理、阅读、回执、AI评审）使用纯白背景。已覆盖37项应用的11种页面类型、15个核心路由视图；375/390/414/430/768、深色大字、37入口打开、页面族作用域、纯色/冰蓝分配、横向溢出和4段内联脚本检查通过，证据见qa/ui-v2-full/。旧ui-v2-stage1对办理页背景rgb(247,250,254)的断言被本次“高专注页必须纯色”要求替代；其余既有详情、业务字段、数据、事件及导航逻辑未改。仅本地Edge仿真，不代表双端实机或真实接口验收，未发布远端。

2026年11月8日同日按用户观察去除重复徽章：“我的”页头部 mine-v4-auth 中写死的“测试演示环境”chip 删除（全局固定 demo-env-badge 已覆盖全部页面），保留身份已认证/设备可信两 chip；探查脚本确认全站仅存全局徽章与关于页数据字段两处合理文本，无页面错误，check.cjs 复跑通过。

2026年11月8日同日按用户浏览器反馈：全部业务弹层顶栏返回按钮去除背景色（doc-detail-v2 与 doc-action/doc-handle/doc-receipt/doc-reader/my-process-list 均 transparent，保留图标色），check.cjs 增加 backButtonBg 断言并复跑通过，截图已更新。

2026年11月8日三阶段UI统一阶段一（用户批准计划执行）：index.html将详情页判定改为 detailRecord（view=detail 且记录存在），全部 v5DetailPage 场景（含应用目录来源、我的办事、物资申领）统一挂 doc-detail+doc-detail-v2；第12行后引入 assets/business-v2.css。doc-detail-v2.css 按用户反馈将顶栏灰白底恢复为白底#fff+1px底边线，返回按钮恢复 soft 圆角底，暗色顶栏改 var(--dv-card)；其余规则未动。business-v2.css 为新增纯视觉层：重映射 --dw-*/--dr-* 为 v2 色板（#1552a3/#f7fafe/#172334/#63718a/#e5f1fd/#e4ebf4），doc-action/doc-handle/doc-receipt/doc-reader/my-process-list 五类页冰蓝白光晕背景、16px 圆角双层投影卡片、按钮边框#cadef5 11px、徽章 6px+inset 边线、我的办事胶囊页签加短指示线、handle 输入框与 v2 focus 环、暗色光晕背景；业务 DOM、字段、事件、字体五项、数据与导航未改。验证 qa/ui-v2-stage1/check.cjs（playwright-core+msedge，依赖装于该目录 node_modules）：顶栏白底+1px 边线（暗色#1b293a）、应用目录与物资详情均含 doc-detail-v2、五类页计算样式=v2 值（背景 rgb(247,250,254)、卡片 16px、页签胶囊 rgba(255,255,255,.7)）、转办取消不改数据、提交至回执→查看事项→返回列表、阅读返回正文页签、375/390/414/430 无横向溢出、无页面错误；截图与 results.json 同目录。历史断言“应用目录来源不挂 doc-detail”按用户 11月8日“更新所有事项详情页”指示作废。仅本地 Edge 仿真，未实机或真实接口验收，远端未改；阶段二（应用目录列表与 8 表单）、阶段三（主框架与其余页面）待用户检查后执行。

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
