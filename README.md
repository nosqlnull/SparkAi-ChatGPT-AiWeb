<div align="center">

# SparkAi-ChatGPT-AiWeb（公益免费商业版）

🚀 一站式 { 渐进式 } AIGC 系统，提供面向个人用户 (ToC)、开发者 (ToD) 和企业 (ToB) 的全面解决方案

💎 2026 特别公益重构 · 全网为数不多支持商业功能的公益版：会员套餐 · 在线支付（易支付 / 码支付 / 虎皮椒） · 分销推广，免费部署即可商业运营

简体中文 | <a href="./docs/i18n/README.zh_TW.md">繁體中文</a> | <a href="./docs/i18n/README.en.md">English</a>

<p align="center">
  <a href="https://github.com/nosqlnull/SparkAi-ChatGPT-AiWeb/stargazers" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/github/stars/nosqlnull/SparkAi-ChatGPT-AiWeb?color=brightgreen" alt="Stars"></a>
  <img src="https://img.shields.io/badge/Public%20Good-V2.1.0-blue" alt="Public Good V2.1.0">
  <a href="https://docs.sparkaigc.com/pro/" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/Commercial-V6.9.6-brightgreen" alt="Commercial V6.9.6"></a>
</p>

<p align="center">
  <a href="https://docs.sparkaigc.com" target="_blank" rel="noopener noreferrer"><strong>系统文档 · Docs</strong></a>
  &nbsp;•&nbsp;
  <a href="https://test.sparkaigc.com" target="_blank" rel="noopener noreferrer"><strong>演示站 · Live demo</strong></a>
  &nbsp;•&nbsp;
  <a href="https://docs.sparkaigc.com/pro/" target="_blank" rel="noopener noreferrer"><strong>商业授权 · License</strong></a>
</p>

<p align="center">
  <a href="#readme-about">系统介绍</a> •
  <a href="#readme-demo">官方演示站</a> •
  <a href="#readme-commercial">商业版功能</a> •
  <a href="#readme-compare">版本对比</a> •
  <a href="#readme-free">公益免费商业版</a> •
  <a href="#readme-deploy">安装部署</a> •
  <a href="#readme-changelog">更新日志</a> •
  <a href="#readme-agpl">许可证</a>
</p>

</div>

> [!NOTE]
> 本仓库为 **SparkAi 公益免费商业版 · Public Good V2.1.0（2026 特别公益重构版）**，功能底座基于 V3.2.0（未编译源码暂不开源），无需授权即可快速部署使用。
>
> **2026 特别重构，商业系统能力支持：** 公益版支持会员套餐、在线支付、分销推广等商业运营功能，免费即可商业运营。如需最新大模型、独立绘画、AI 视频等完整 AI 能力与持续更新，请选择 **<a href="https://docs.sparkaigc.com/pro/" target="_blank" rel="noopener noreferrer">官方授权商业版本</a>**。

<h2 id="readme-about">🌟 SparkAi 商业系统介绍</h2>

**SparkAi系统是一款支持多语言国际化的{ 渐进式 }AIGC系统，基于OpenAI/ChatGPT、最新旗舰大模型GPT-6、Anthropic Claude（Claude-Opus-5-5 / Claude-Fable-5-1）、Google Gemini、DeepSeek、🎨GPT-Image-2 / GPT-Image-2.5绘画、🍌Nano-Banana-2第二代绘画、Midjourney V8、VEO3.1 / Sora-2视频、Seedance2.5视频（即将上线）、Agent智能体 扣子（Coze）插件、工作流、函数、知识库 等AI大模型能力开发的一站式AI系统；支持「🤖AI聊天」、「🎨专业AI绘画」、「🧠AI智能体」、「🪟Coze-Agent工作流应用」、「🎬AI视频生成」等，支持独立私有部署！提供面向个人用户 (ToC)、开发者 (ToD)、企业 (ToB)的全面解决方案。**

🏅 **截至 2026 年 9 月，SparkAi 已坚持持续开发、更新迭代三年半**，并保持稳定的大版本更新节奏。近期大版本重点支持：

- 🧩 **全模型支持 / 自定义接入最新大模型**：OpenAI、Claude、Gemini、国内主流大模型及三方大模型统一走标准 chat 格式，新模型发布后即可在后台自由新增对接，无需系统更新
- 🎨 **多功能 / 多类型大模型绘画**：文生图、参考图生图、在线编辑绘图、局部涂抹编辑重绘、图生文（多模态识图），覆盖 GPT-Image-2 / GPT-Image-2.5、Nano Banana 2、Midjourney V7 / V8 等模型
- 🤖 **新一代对话架构**：Chat Completions / Responses 双端点自动路由，切换会话、关闭页面不中断生成
- 📄 **多类型文档理解**：PDF / Word / PPT / Excel 等文件上传识别与在线预览
- 💰 **积分与账户安全**：积分明细对账、模型调用失败零扣费、登录设备与异地识别

更多内容详见<a href="https://docs.sparkaigc.com/docs/guide/" target="_blank" rel="noopener noreferrer">系统核心功能</a>与<a href="https://docs.sparkaigc.com/log/" target="_blank" rel="noopener noreferrer">更新日志</a>。

> [!IMPORTANT]
> - SparkAi 是一套可私有化部署的 **AI 应用系统**（AIGC 网站系统软件），**不是 API 中转 / 代理系统**。
> - **系统本身不提供任何生成式人工智能服务，也不提供任何 AI 大模型、模型 API 及模型能力**；系统中的对话、绘画、视频等 AI 功能，均由使用者自行对接的第三方模型服务提供。
> - 使用者须通过合法途径自行获取上游模型服务的 API Key、账号及接口授权，并遵守上游服务商的服务条款及所在地法律法规。
> - 本项目仅面向合法合规的 AI 应用搭建、企业内部使用与私有化部署场景，禁止用于任何违法违规用途。

> [!WARNING]
> - 将本系统部署为面向公众的 AI 服务时，部署方（运营者）即为服务提供者，对站点内容与运营行为承担全部责任；SparkAi 仅提供系统软件，不参与任何站点的运营。
> - 在中国境内面向公众提供生成式人工智能服务，须遵守 <a href="http://www.cac.gov.cn/2023-07/13/c_1690898327029107.htm" target="_blank" rel="noopener noreferrer">《生成式人工智能服务管理暂行办法》</a> 等规定，自行完成备案、内容安全、用户实名、日志留存、税务、支付资质及上游授权等合规义务。
> - 系统内置的敏感词过滤、内容审核等风控功能仅为辅助工具，不能替代运营者的合规义务。

<h2 id="readme-demo">🖥️ 授权商业版本官方演示站</h2>

唯一官方演示站点（其他地址均为非官方）：

| 入口 | 地址 |
|---|---|
| 系统用户端 | <a href="https://test.sparkaigc.com" target="_blank" rel="noopener noreferrer">https://test.sparkaigc.com</a> |
| 管理后端 | <a href="https://test.sparkaigc.com/sparkai/admin" target="_blank" rel="noopener noreferrer">https://test.sparkaigc.com/sparkai/admin</a> |
| 测试账号 / 密码 | `admin` / `123456` |
| SparkAi 系统文档 | <a href="https://docs.sparkaigc.com" target="_blank" rel="noopener noreferrer">https://docs.sparkaigc.com</a> |

<h2 id="readme-commercial">🚀 商业授权版本（已支持更多功能）</h2>

### 🤖 AI 大模型对话
**全模型支持与新一代对话架构**

- 🧩 **后台自由自定义接入最新大模型（无需系统更新）**：OpenAI、Claude、Gemini、国内 AI 全模型及三方主流大模型统一走标准 chat 格式，新模型发布即可在后台新增对接并使用
- 🔥 **全模型支持**：覆盖 OpenAI（GPT-6 / GPT-5.4 / o 系列 / Codex）、Anthropic Claude（Claude-Opus-5-5 / Claude-Fable-5-1 等）、Google Gemini、DeepSeek、Azure OpenAI 及豆包、通义千问、智谱、讯飞星火、腾讯混元等国内模型
- 🧭 **双端点智能路由** `V6.9.6`：按模型能力自动路由 Chat Completions / Responses 端点，内置失败自动降级重试；大模型全局配置中心统一管理路由与扣费策略
- 🛡️ **高可靠对话内核** `V6.9.3`：切换会话、关闭页面不中断生成，SSE 边生成边落库，支持主动终止与异常兜底
- 📄 **多模态与文档理解** `V6.9.6`：多图识图（最多 9 张）、拍照上传；PDF / Word / PPT / Excel / Markdown 等文档上传识别与在线预览
- 🤔 **深度思考与联网**：推理模型思维链流式展示、联网搜索、对话导航条、Markdown / KaTeX / Mermaid 渲染、思维导图、TTS 语音对话

### 🎨 专业 AI 绘画 & 🎬 AI 视频
**独立绘画模块与视频生成**

- 🖌️ **GPT-Image-2 / GPT-Image-2.5 独立绘画模块** `V6.9.2`：文生图、最多 8 张参考图、在线编辑与涂抹框选编辑、自定义画质与分辨率
- 🍌 **Nano Banana 2 独立绘画模块** `V6.9.4`：gemini-3.1-flash-image / gemini-3-pro-image，多图参考编辑，2K / 4K 输出（取决于模型）
- 🎨 **Midjourney / Niji 全功能**：V7 / V8、Vary Region 局部重绘、图像混合、角色 / 风格一致参考图，Fast / Relax 双通道独立计费
- 🔁 **绘画体验**：「画同款」、失败自动退还积分、AI 画廊广场、绘画提示词敏感词前置拦截
- 🎬 **AI 视频生成**：VEO3.1 / Sora-2 视频、Midjourney HD 视频、Pika 文生视频 / 图生视频、Seedance 视频（Coze-Agent）

### 🧠 AI 智能体
**智能体与应用生态**

- 🤖 **Coze Agent 智能体**：扣子插件、工作流、函数、知识库智能体对接，流式展示思考过程与工具调用，一键批量导入
- 📈 **智能体商店**：评分 / 热度算法、关键字搜索、链接 / 微信扫码 / 海报分享
- 🧠 **GPTs 与预设应用**：GPTs 应用全网搜索接入、Prompt 自定义预设应用、用户自建智能体

### 💰 商业运营
**多渠道支付、会员积分与分销（在公益版基础上全面增强）**

- 🛍️ **支付系统**：微信官方支付（PC 端 Native / 微信内 JSAPI）、易支付、码支付、虎皮椒支付，订单状态同步检查与管理
- 🧑‍🤝‍🧑 **会员积分体系**：普通 / 高级模型积分、绘画积分、Agent 积分多种余额；永久 / 限时套餐，按次 / 按时间 / 组合套餐计费，每个模型可自定义扣费
- 🧾 **积分明细与失败零扣费** `V6.9.6`：用户端与管理端统一记录消耗、返还与免扣；模型调用失败、超时、空回复可按开关不扣积分
- ⏏️ **分销与增长**：A + B 分销、提现（支付宝 / 微信 / 银行卡）、邀请奖励、签到、访客体验模式
- ✨ **渠道负载均衡**：多渠道调用管理与多 API Key 轮询（优先级 / 权重 / 状态管理）

### 🔐 安全风控 & 🛠️ 管理后台
**安全、运营与多端体验**

- 🚥 **内容风控**：自定义敏感词 + 百度内容审核，覆盖对话、绘画、思维导图并前置拦截
- 📍 **账户安全** `V6.9.6`：登录设备与异地识别、异地登录强制下线、后台强制指定用户下线、敏感信息统一脱敏
- 🧪 **「系统功能测试」开关** `V6.9.4`：生成式人工智能备案完成前，可统一阻断 AI 生成请求
- 💻 **完整商用管理后台**：数据仪表盘、模型与 API 卡池管理、大模型全局配置中心、动态菜单、轮播图、对话演示数据、站点自定义
- 🌐 **系统全国际化** `V6.9.1`：前后端全量国际化，按 IP / 浏览器语言自动切换，管理后台一键 AI 国际化
- 🎨 **2026 新版 UI** `V6.9.0`：卡片 / Notion 双风格、AI 对话沉浸模式，适配 PC / 手机 H5 / 平板 / 微信公众号

完整功能（61 项）请查看 <a href="https://docs.sparkaigc.com/docs/guide/" target="_blank" rel="noopener noreferrer">系统文档 - 系统核心功能</a>，各版本更新内容请查看 <a href="https://docs.sparkaigc.com/log/" target="_blank" rel="noopener noreferrer">更新日志</a>。

<h2 id="readme-compare">📊 公益免费商业版 vs 商业授权版</h2>

| 功能 | 公益免费商业版（Public Good V2.1.0） | 商业授权版（V6.9.6） |
|---|---|---|
| 使用范围 | ✅ 支持商业运营 | ✅ 支持商业运营 |
| 版本迭代 | 2026 特别公益重构版（功能底座 V3.2.0），部分功能更新 | ✅ 持续大版本更新 |
| AI 大模型 | ✅ GPT-3.5 / GPT-4.0、Azure 及部分国内模型<br>🔜 即将支持 GPT-6、Claude-Opus-5-5 / Claude-Fable-5-1、Gemini、DeepSeek 等全模型（预计 2026.10） | ✅ GPT-6、Claude-Opus-5-5 / Claude-Fable-5-1、Gemini、DeepSeek 等全模型 |
| 后台自定义接入最新大模型（无需系统更新） | 🔜 即将支持（待更新至 GitHub，预计 2026.10） | ✅ |
| 双端点智能路由 / 大模型全局配置中心 | ❌ | ✅ |
| 深度思考推理（o3 / DeepSeek-R1 等） | ❌ | ✅ |
| 多图识图 / 多类型文档理解与在线预览 | ❌ | ✅ |
| DALL·E 绘画 | ✅ DALL·E 2 / 3 | ✅ DALL·E 2 / 3 |
| Midjourney 绘画 | ✅ 文生图、图生图、局部重绘 | ✅ 全功能：V7 / V8、Niji、角色 / 风格一致参考图、HD 视频 |
| GPT-Image-2 / Nano Banana 2 独立绘画模块 | ❌ | ✅ |
| AI 视频生成（VEO3.1 / Sora-2 / Pika / Seedance） | ❌ | ✅ |
| AI 智能体 | ✅ Prompt 自定义预设应用 | ✅ 另支持 Coze Agent、GPTs 应用、智能体商店 |
| 注册登录 | ✅ 微信扫码 / 邮箱 / 手机号 | ✅ 另支持登录设备与异地识别 |
| 卡密兑换 | ✅ | ✅ |
| 会员套餐 | ✅ 永久 / 限时会员套餐 | ✅ 多种积分余额，永久 / 限时 / 组合套餐，每个模型自定义扣费 |
| 支付系统 | ✅ 易支付 / 码支付 / 虎皮椒 | ✅ 微信官方支付 / 易支付 / 码支付 / 虎皮椒 |
| 分销推广 | ✅ 分销邀请、佣金提现 | ✅ A + B 分销、按用户单独设置提成、提现门槛 |
| 积分明细 / 模型调用失败零扣费 | ❌ | ✅ |
| 增强风控（敏感信息脱敏、「系统功能测试」开关等） | ❌ | ✅ |
| 系统全国际化 | ❌ | ✅ |
| 2026 新版 UI（卡片 / Notion 双风格、沉浸模式） | ❌ | ✅ |
| 完整商用管理后台 | 基础管理 | ✅ 数据仪表盘、模型与卡池、动态菜单、全局配置 |

**购买商业授权版本：** <a href="https://docs.sparkaigc.com/pro/" target="_blank" rel="noopener noreferrer">SparkAi 商业授权版介绍</a> · <a href="https://bx5gkpqv57j.feishu.cn/docx/EOWUdQ04no9PoBxyp6Ecg3AAnhf" target="_blank" rel="noopener noreferrer">商业版系统介绍文档与定价（飞书）</a>

<h2 id="readme-free">📚 公益免费商业版功能</h2>

- 👤 用户注册登录：支持微信扫码、邮箱、手机号注册登录
- 💳 会员套餐：支持永久会员 / 限时会员套餐，用户端在线开通，后台自定义套餐内容
- 🛍️ 在线支付：支持易支付、码支付、虎皮椒支付（虎皮椒可自定义支付网关），用户可在线购买会员套餐
- ⏏️ 分销推广：支持分销邀请，佣金可提现至微信 / 支付宝 / 银行卡
- 🎫 卡密系统：支持批量生成卡密，用户端可直接兑换或通过第三方发卡网购买，支持自定义点数
- 🤖 AI 大模型：支持 OpenAI GPT-3.5 / GPT-4.0 模型，以及微软 Azure 与部分国内模型（百度文心一言、阿里云通义千问、智谱 ChatGLM、讯飞星火）
- 🧩 自定义 AI 大模型对接（🔜 即将更新）：后台可自定义对接 AI 大模型，即将支持 GPT-6、Claude-Opus-5-5 / Claude-Fable-5-1、Gemini、DeepSeek 等全模型，预计 2026 年 10 月更新至 GitHub
- 🪄 DALL·E 绘画：支持 DALL·E 2、DALL·E 3（含对话文生图插件）
- 🎨 Midjourney 绘画：支持 MJ 文生图、图生图、局部编辑重绘（Vary Region）
- 🧠 AI 智能体：支持 Prompt 自定义预设应用与自定义 AI 智能体应用
- 🧩 对话插件系统与后台管理

<sub>📌 说明：公益版同样具备完整的商业运营能力（用户管理、注册登录、会员体系、套餐功能、在线支付、分销推广等），与商业授权版相比仅 AI 功能较少。为防止有人免费获取公益版源代码后直接倒卖牟利或二次开发盈利，公益版不开放源代码，仅公开发布后端加密打包的系统安装包。</sub>

<details>
<summary><strong>🖼️ 公益免费商业版界面预览（点击展开）</strong></summary>

**AI 模型支持**

![AI模型](https://raw.githubusercontent.com/nosqlnull/chatgpt-midjourney-web-sparkai/main/public/demo-pic/aichat02.png)

![AI模型](https://raw.githubusercontent.com/nosqlnull/chatgpt-midjourney-web-sparkai/main/public/demo-pic/aichat03.png)

**应用广场**

![应用广场](https://raw.githubusercontent.com/nosqlnull/chatgpt-midjourney-web-sparkai/main/public/demo-pic/app-store.png)

![应用广场](https://raw.githubusercontent.com/nosqlnull/chatgpt-midjourney-web-sparkai/main/public/demo-pic/app-store02.png)

**AI 绘画**

![Midjourney绘画](https://raw.githubusercontent.com/nosqlnull/chatgpt-midjourney-web-sparkai/main/public/demo-pic/midjourney01.png)

![Midjourney绘画](https://raw.githubusercontent.com/nosqlnull/chatgpt-midjourney-web-sparkai/main/public/demo-pic/midjourney02.png)

![Midjourney绘画](https://raw.githubusercontent.com/nosqlnull/chatgpt-midjourney-web-sparkai/main/public/demo-pic/midjourney03.png)

**Midjourney 局部编辑重绘**

![Midjourney局部编辑重绘](https://raw.githubusercontent.com/nosqlnull/chatgpt-midjourney-web-sparkai/main/public/demo-pic/VaryRegion.png)

**绘画广场**

![绘画广场](https://raw.githubusercontent.com/nosqlnull/chatgpt-midjourney-web-sparkai/main/public/demo-pic/market.png)

**插件功能**

![插件功能](https://raw.githubusercontent.com/nosqlnull/chatgpt-midjourney-web-sparkai/main/public/demo-pic/plug.png)

**注册登录模块**

![注册登录](https://raw.githubusercontent.com/nosqlnull/chatgpt-midjourney-web-sparkai/main/public/demo-pic/register.png)

**会员功能**

![会员功能](https://raw.githubusercontent.com/nosqlnull/chatgpt-midjourney-web-sparkai/main/public/demo-pic/member.png)

![会员功能](https://raw.githubusercontent.com/nosqlnull/chatgpt-midjourney-web-sparkai/main/public/demo-pic/member02.png)

**分销邀请**

![分销邀请](https://raw.githubusercontent.com/nosqlnull/chatgpt-midjourney-web-sparkai/main/public/demo-pic/share.png)

**后台管理**

![后台管理](https://raw.githubusercontent.com/nosqlnull/chatgpt-midjourney-web-sparkai/main/public/demo-pic/admin.png)

![用户管理](https://raw.githubusercontent.com/nosqlnull/chatgpt-midjourney-web-sparkai/main/public/demo-pic/admin02.png)

</details>

<h2 id="readme-deploy">🛠️ 安装部署</h2>

### 方式一：宝塔面板 - 官方 Docker 商店一键部署（推荐）

- 点我前往 **<a href="https://docs.sparkaigc.com/deploy/baota/process.html" target="_blank" rel="noopener noreferrer">详细图文安装部署教程</a>**
- 安装宝塔面板（9.2.0 版本及以上），前往 <a href="https://www.bt.cn/new/download.html" target="_blank" rel="noopener noreferrer">宝塔官网</a> 选择正式版的脚本下载安装
- 安装后登录宝塔面板，在菜单栏中点击 Docker，首次进入会提示安装 Docker 服务，点击立即安装，按提示完成安装
- 安装完成后在应用商店中搜索 **SparkAi**，找到 SparkAI-ChatGPT-AiWeb，点击安装，配置基本选项即可完成安装

### 方式二：Node.js + PM2 环境部署

> 可参考 <a href="https://docs.sparkaigc.com/deploy/baota/process.html" target="_blank" rel="noopener noreferrer">授权版本官方安装教程</a>

**1. 环境准备**

- 推荐使用 <a href="https://github.com/nvm-sh/nvm" target="_blank" rel="noopener noreferrer">nvm</a> 安装 Node.js 16.0 或更高版本：

  ```bash
  nvm install 16
  nvm use 16
  node -v
  ```

- 安装 PM2 与 pnpm，并确认可以正常运行：

  ```bash
  npm install pm2 -g
  npm install -g pnpm
  pm2 -v
  pnpm -v
  ```

**2. 配置项目**

- 复制 `.env.example` 文件为 `.env`，根据需要修改其中的配置项
- 运行 `pnpm i` 安装依赖（若安装缓慢可尝试使用国内源）

**3. 启动项目**

- 运行 `pnpm start` 启动服务，默认监听 9520 端口
- 在浏览器中访问 `http://localhost:9520`；如果配置了 Nginx 反向代理，则通过配置的域名访问

**4. 项目升级**

```bash
git pull        # 拉取新的整合包
pm2 del all     # 删除旧的 PM2 进程
pnpm i          # 安装依赖
pnpm start      # 启动服务（默认 9520 端口）
```

### 管理平台

| 项目 | 内容 |
|---|---|
| 管理端地址 | `sparkai/admin` |
| 超级管理员账号 / 密码 | `super` / `sparkai` |
| 普通管理员账号 / 密码 | `admin` / `123456` |

普通管理员仅可预览后台非敏感信息。请使用超级管理员账号登录后台，并**及时修改默认密码**。

<h2 id="readme-changelog">📝 更新日志</h2>

- 商业授权版本更新日志（持续更新至 V6.9.6）：<a href="https://docs.sparkaigc.com/log/" target="_blank" rel="noopener noreferrer">https://docs.sparkaigc.com/log/</a>

### 【Public Good V2.1.0】2026 特别公益重构版
- 2026 特别重构，商业系统能力支持：公益版正式更名为「公益免费商业版」，版本号更新为 Public Good V2.1.0，与商业授权版版本号区分
- 支持会员套餐、在线支付（易支付 / 码支付 / 虎皮椒）、分销推广等商业运营功能，免费部署即可用于商业运营
- 功能底座基于 V3.2.0
- 🔜 即将更新：支持自定义 AI 大模型对接，即将支持 GPT-6、Claude-Opus-5-5 / Claude-Fable-5-1、Gemini、DeepSeek 等全模型（预计 2026 年 10 月更新至 GitHub）

<details>
<summary><strong>早期版本更新日志（V2.5.7 – V3.2.0，点击展开）</strong></summary>

### 【V3.2.0】更新功能
- 新增支持最新 GPT-4 多模态模型、OpenAI GPT-4-Turbo-With-Vision-128K 模型（后续支持对话识图功能）
- 新增支持最新 OpenAI GPT-3.5-Turbo-1106、GPT-4-1106-Preview 模型
- 新增支持对话插件系统，后续逐步增加插件功能，扩展 AI 能力
- 新增支持 OpenAI DALL-E3 文生图插件，可直接对话文生图，搭配 GPT4-Turbo 使用（官网 20231107 发布）
- 新增 KEY 支持单独配置消耗费率，比如 GPT4-32K 比 GPT4 成本更高应该消耗更多的额度次数
- 新增后台配置指定用户端默认使用大模型

### 【V3.1.0】更新功能
【已支持 OpenAI GPT 全模型 + 国内 AI 全模型 + 绘画池系统】
- 新增 Midjourney 局部重绘（Vary Region）在线编辑功能
- 新增 Midjourney 绘画账号池系统，支持高并发绘画
- 支持手机端 Midjourney 局部重绘功能（Vary Region 局部重绘）
- 首页 AI 提问 UI 更新，侧边栏样式更新，对话框工具更新
- 提问模型：新增支持腾讯混元大模型
- 提问模型：新增支持讯飞星火认知大模型 V3.0 版本
- 提问模型：新增支持百度文心 4.0 版本
- 移除后台 Midjourney 绘画代理配置，将转由绘画池一并处理，优化速度
- 用户端大模型列表点击切换后允许自动关闭，且列表支持滑动选择查看
- 修复开启百度敏感词检测时，以图生图提示词包含图片链接导致无法提交绘图的问题

### 【V2.6.4】更新功能
- 新增阿里通义千问大模型 qwen-turbo、qwen-plus
- 导航侧边栏 UI 布局及样式修改
- 应用 Prompt 预设已支持国内 AI 大模型（开启 GPT 之外的大模型预设插入变量 `SAI_USER_QUESTION_CONTENT` 即可）
- 新增公安网备案号及标准图标配置显示

### 【V2.6.3】更新功能
- 重写 AI 对话系统：已支持 OpenAI GPT 全模型 + 国内 AI 全模型（百度文心一言、微软 Azure、阿里云通义千问、智谱 ChatGLM、讯飞星火等）
- 新增 AI 工具插件：开通会员、连续对话、一键清屏、导出对话功能
- 分销代理新增银行卡提现渠道（微信、支付宝、银行卡）
- 新增 Midjourney 专业绘画提示词参考功能
- 去除游客功能：修复游客指纹 ID 导致后台账户明细变动查询失败和购买套餐导致的一系列 BUG
- 修复非超级管理员（Super）可以删除订单记录的问题
- UI 界面更新等其他优化

### 【V2.6.2】更新功能
- 新增 MJ 提交绘画，中文自动翻译英文功能
- 修复非会员用户开通限时会员时会员次数计算错误的 BUG
- 优化思维导图生成逻辑，防止只生成两级
- 修复后台关闭签到功能后手机端仍然显示的 BUG

### 【V2.6.1】更新功能
- 增加访客体验功能，可配置每日未登录使用额度，注册账号可同步访客使用数据（用户端设置 -> 访客设置）
- 增加后台底部自定义配置版权信息（系统设置 -> 版权信息）
- 增加虎皮椒支付自定义网关（支付管理 -> 虎皮椒支付）
- 增加违规敏感词检测记录功能（风控管理 -> 违规检测记录）

### 【V2.6.0】更新功能
- 优化 key 池额度耗尽锁定逻辑
- 优化 MJ 绘画连接、优化 CSS、部分页面样式修改

### 【V2.5.9】更新功能
- 增加手机端签到领取免费次数功能
- 优化后台总计绘画数量逻辑

### 【V2.5.8】更新功能
- 新增 MJ 官方图片重新生成指令功能
- 新增官方 Vary 指令：单张图片对比加强 Vary(Strong) | Vary(Subtle)
- 新增官方 Zoom 指令：单张图片无限缩放 Zoom out 2x | Zoom out 1.5x

### 【V2.5.7】更新功能
- 新增 GPT 联网提问功能、手机号注册登录、签到功能、管理后台功能更新等
- 优化 MJ 首次绘画无上级 ID 显示问题、优化内置 MJ 代理
- 其他页面优化

【低版本不做记录】……

</details>

<h2 id="readme-contact">💬 学习交流</h2>

- 扫码添加微信，备注 `sparkai-open`，拉交流群（不接受私聊技术咨询）
- 商业授权咨询：<a href="https://docs.sparkaigc.com/docs/license.html" target="_blank" rel="noopener noreferrer">联系我们</a>

<h2 id="readme-star-history">⭐ Star History</h2>

<div align="center">

<a href="https://star-history.com/#nosqlnull/SparkAi-ChatGPT-AiWeb&Date" target="_blank" rel="noopener noreferrer">![Star History Chart](https://api.star-history.com/svg?repos=nosqlnull/SparkAi-ChatGPT-AiWeb&type=Date)</a>

</div>

<h2 id="readme-agpl">📜 许可证</h2>

本仓库发布的 SparkAi 公益免费商业版程序包采用 [《SparkAi 公益免费商业版使用许可协议》](./LICENSE) 授权（免费使用许可，非开源许可证）：

- ✅ **允许：** 个人或企业免费下载、安装部署，并将其用于自有站点的商业运营（会员套餐、在线支付、分销推广等）。
- ❌ **禁止：** 出售、出租或以任何形式有偿分发本程序包及其修改版本；将本系统包装为自有产品对外售卖；反编译、破解，或删除、篡改版权与授权信息。
- ⚠️ 本程序包按「现状」提供，不附带任何形式的担保；使用本系统运营 AI 服务的合规责任由部署方承担。

如需源代码授权、二次开发或其他授权方式，请发送邮件至：[evenkepler@gmail.com](mailto:evenkepler@gmail.com)，或添加作者微信 `DjiMain`（备注 `SparkAi`）。
