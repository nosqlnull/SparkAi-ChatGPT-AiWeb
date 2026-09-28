<div align="center">

# SparkAi-ChatGPT-AiWeb（公益免費商業版）

🚀 一站式 { 漸進式 } AIGC 系統，提供面向個人使用者 (ToC)、開發者 (ToD) 和企業 (ToB) 的全面解決方案

💎 2026 特別公益重構 · 全網為數不多支援商業功能的公益版：會員套餐 · 線上支付（易支付 / 碼支付 / 虎皮椒） · 分銷推廣，免費部署即可商業營運

<a href="../../README.md">简体中文</a> | 繁體中文 | <a href="./README.en.md">English</a>

<p align="center">
  <a href="https://github.com/nosqlnull/SparkAi-ChatGPT-AiWeb/stargazers" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/github/stars/nosqlnull/SparkAi-ChatGPT-AiWeb?color=brightgreen" alt="Stars"></a>
  <img src="https://img.shields.io/badge/Public%20Good-V2.1.0-blue" alt="Public Good V2.1.0">
  <a href="https://docs.sparkaigc.com/pro/" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/Commercial-V6.9.6-brightgreen" alt="Commercial V6.9.6"></a>
</p>

<p align="center">
  <a href="https://docs.sparkaigc.com" target="_blank" rel="noopener noreferrer"><strong>系統文件 · Docs</strong></a>
  &nbsp;•&nbsp;
  <a href="https://test.sparkaigc.com" target="_blank" rel="noopener noreferrer"><strong>演示站 · Live demo</strong></a>
  &nbsp;•&nbsp;
  <a href="https://docs.sparkaigc.com/pro/" target="_blank" rel="noopener noreferrer"><strong>商業授權 · License</strong></a>
</p>

<p align="center">
  <a href="#readme-about">系統介紹</a> •
  <a href="#readme-demo">官方演示站</a> •
  <a href="#readme-commercial">商業版功能</a> •
  <a href="#readme-compare">版本對比</a> •
  <a href="#readme-free">公益免費商業版</a> •
  <a href="#readme-deploy">安裝部署</a> •
  <a href="#readme-changelog">更新日誌</a> •
  <a href="#readme-agpl">授權條款</a>
</p>

</div>

> [!NOTE]
> 本倉庫為 **SparkAi 公益免費商業版 · Public Good V2.1.0（2026 特別公益重構版）**，功能底座基於 V3.2.0（未編譯原始碼暫不開源），無需授權即可快速部署使用。
>
> **2026 特別重構，商業系統能力支援：** 公益版支援會員套餐、線上支付、分銷推廣等商業營運功能，免費即可商業營運。如需最新大模型、獨立繪畫、AI 影片等完整 AI 能力與持續更新，請選擇 **<a href="https://docs.sparkaigc.com/pro/" target="_blank" rel="noopener noreferrer">官方授權商業版本</a>**。

<h2 id="readme-about">🌟 SparkAi 商業系統介紹</h2>

**SparkAi系統是一款支援多語言國際化的{ 漸進式 }AIGC系統，基於OpenAI/ChatGPT、最新旗艦大模型GPT-6、Anthropic Claude（Claude-Opus-5-5 / Claude-Fable-5-1）、Google Gemini、DeepSeek、🎨GPT-Image-2 / GPT-Image-2.5繪畫、🍌Nano-Banana-2第二代繪畫、Midjourney V8、VEO3.1 / Sora-2影片、Seedance2.5影片（即將上線）、Agent智慧體 扣子（Coze）外掛、工作流、函式、知識庫 等AI大模型能力開發的一站式AI系統；支援「🤖AI聊天」、「🎨專業AI繪畫」、「🧠AI智慧體」、「🪟Coze-Agent工作流應用」、「🎬AI影片生成」等，支援獨立私有部署！提供面向個人使用者 (ToC)、開發者 (ToD)、企業 (ToB)的全面解決方案。**

🏅 **截至 2026 年 9 月，SparkAi 已堅持持續開發、更新迭代三年半**，並保持穩定的大版本更新節奏。近期大版本重點支援：

- 🧩 **全模型支援 / 自定義接入最新大模型**：OpenAI、Claude、Gemini、國內主流大模型及三方大模型統一走標準 chat 格式，新模型釋出後即可在後臺自由新增對接，無需系統更新
- 🎨 **多功能 / 多類型大模型繪畫**：文生圖、參考圖生圖、線上編輯繪圖、局部塗抹編輯重繪、圖生文（多模態識圖），覆蓋 GPT-Image-2 / GPT-Image-2.5、Nano Banana 2、Midjourney V7 / V8 等模型
- 🤖 **新一代對話架構**：Chat Completions / Responses 雙端點自動路由，切換會話、關閉頁面不中斷生成
- 📄 **多類型文件理解**：PDF / Word / PPT / Excel 等檔案上傳識別與線上預覽
- 💰 **積分與帳戶安全**：積分明細對帳、模型呼叫失敗零扣費、登入裝置與異地識別

更多內容詳見<a href="https://docs.sparkaigc.com/docs/guide/" target="_blank" rel="noopener noreferrer">系統核心功能</a>與<a href="https://docs.sparkaigc.com/log/" target="_blank" rel="noopener noreferrer">更新日誌</a>。

> [!IMPORTANT]
> - SparkAi 是一套可私有化部署的 **AI 應用系統**（AIGC 網站系統軟體），**不是 API 中轉 / 代理系統**。
> - **系統本身不提供任何生成式人工智慧服務，也不提供任何 AI 大模型、模型 API 及模型能力**；系統中的對話、繪畫、影片等 AI 功能，均由使用者自行對接的第三方模型服務提供。
> - 使用者須通過合法途徑自行獲取上游模型服務的 API Key、帳號及介面授權，並遵守上游服務商的服務條款及所在地法律法規。
> - 本專案僅面向合法合規的 AI 應用搭建、企業內部使用與私有化部署場景，禁止用於任何違法違規用途。

> [!WARNING]
> - 將本系統部署為面向公眾的 AI 服務時，部署方（營運者）即為服務提供者，對站點內容與營運行為承擔全部責任；SparkAi 僅提供系統軟體，不參與任何站點的營運。
> - 在中國境內面向公眾提供生成式人工智慧服務，須遵守 <a href="http://www.cac.gov.cn/2023-07/13/c_1690898327029107.htm" target="_blank" rel="noopener noreferrer">《生成式人工智慧服務管理暫行辦法》</a> 等規定，自行完成備案、內容安全、使用者實名、日誌留存、稅務、支付資質及上游授權等合規義務。
> - 系統內建的敏感詞過濾、內容稽核等風控功能僅為輔助工具，不能替代營運者的合規義務。

<h2 id="readme-demo">🖥️ 授權商業版本官方演示站</h2>

唯一官方演示站點（其他地址均為非官方）：

| 入口 | 地址 |
|---|---|
| 系統使用者端 | <a href="https://test.sparkaigc.com" target="_blank" rel="noopener noreferrer">https://test.sparkaigc.com</a> |
| 管理後端 | <a href="https://test.sparkaigc.com/sparkai/admin" target="_blank" rel="noopener noreferrer">https://test.sparkaigc.com/sparkai/admin</a> |
| 測試帳號 / 密碼 | `admin` / `123456` |
| SparkAi 系統文件 | <a href="https://docs.sparkaigc.com" target="_blank" rel="noopener noreferrer">https://docs.sparkaigc.com</a> |

<h2 id="readme-commercial">🚀 商業授權版本（已支援更多功能）</h2>

### 🤖 AI 大模型對話
**全模型支援與新一代對話架構**

- 🧩 **後臺自由自定義接入最新大模型（無需系統更新）**：OpenAI、Claude、Gemini、國內 AI 全模型及三方主流大模型統一走標準 chat 格式，新模型釋出即可在後臺新增對接並使用
- 🔥 **全模型支援**：覆蓋 OpenAI（GPT-6 / GPT-5.4 / o 系列 / Codex）、Anthropic Claude（Claude-Opus-5-5 / Claude-Fable-5-1 等）、Google Gemini、DeepSeek、Azure OpenAI 及豆包、通義千問、智譜、訊飛星火、騰訊混元等國內模型
- 🧭 **雙端點智慧路由** `V6.9.6`：按模型能力自動路由 Chat Completions / Responses 端點，內建失敗自動降級重試；大模型全域配置中心統一管理路由與扣費策略
- 🛡️ **高可靠對話核心** `V6.9.3`：切換會話、關閉頁面不中斷生成，SSE 邊生成邊落庫，支援主動終止與異常兜底
- 📄 **多模態與文件理解** `V6.9.6`：多圖識圖（最多 9 張）、拍照上傳；PDF / Word / PPT / Excel / Markdown 等文件上傳識別與線上預覽
- 🤔 **深度思考與聯網**：推理模型思維鏈流式展示、聯網搜尋、對話導航條、Markdown / KaTeX / Mermaid 渲染、思維導圖、TTS 語音對話

### 🎨 專業 AI 繪畫 & 🎬 AI 影片
**獨立繪畫模組與影片生成**

- 🖌️ **GPT-Image-2 / GPT-Image-2.5 獨立繪畫模組** `V6.9.2`：文生圖、最多 8 張參考圖、線上編輯與塗抹框選編輯、自定義畫質與解析度
- 🍌 **Nano Banana 2 獨立繪畫模組** `V6.9.4`：gemini-3.1-flash-image / gemini-3-pro-image，多圖參考編輯，2K / 4K 輸出（取決於模型）
- 🎨 **Midjourney / Niji 全功能**：V7 / V8、Vary Region 局部重繪、影像混合、角色 / 風格一致參考圖，Fast / Relax 雙通道獨立計費
- 🔁 **繪畫體驗**：「畫同款」、失敗自動退還積分、AI 畫廊廣場、繪畫提示詞敏感詞前置攔截
- 🎬 **AI 影片生成**：VEO3.1 / Sora-2 影片、Midjourney HD 影片、Pika 文生影片 / 圖生影片、Seedance 影片（Coze-Agent）

### 🧠 AI 智慧體
**智慧體與應用生態**

- 🤖 **Coze Agent 智慧體**：扣子外掛、工作流、函式、知識庫智慧體對接，流式展示思考過程與工具呼叫，一鍵批次匯入
- 📈 **智慧體商店**：評分 / 熱度演算法、關鍵字搜尋、連結 / 微信掃碼 / 海報分享
- 🧠 **GPTs 與預設應用**：GPTs 應用全網搜尋接入、Prompt 自定義預設應用、使用者自建智慧體

### 💰 商業營運
**多渠道支付、會員積分與分銷（在公益版基礎上全面增強）**

- 🛍️ **支付系統**：微信官方支付（PC 端 Native / 微信內 JSAPI）、易支付、碼支付、虎皮椒支付，訂單狀態同步檢查與管理
- 🧑‍🤝‍🧑 **會員積分體系**：普通 / 高階模型積分、繪畫積分、Agent 積分多種餘額；永久 / 限時套餐，按次 / 按時間 / 組合套餐計費，每個模型可自定義扣費
- 🧾 **積分明細與失敗零扣費** `V6.9.6`：使用者端與管理端統一記錄消耗、返還與免扣；模型呼叫失敗、超時、空回覆可按開關不扣積分
- ⏏️ **分銷與增長**：A + B 分銷、提現（支付寶 / 微信 / 銀行卡）、邀請獎勵、簽到、訪客體驗模式
- ✨ **渠道負載均衡**：多渠道呼叫管理與多 API Key 輪詢（優先順序 / 權重 / 狀態管理）

### 🔐 安全風控 & 🛠️ 管理後臺
**安全、營運與多端體驗**

- 🚥 **內容風控**：自定義敏感詞 + 百度內容稽核，覆蓋對話、繪畫、思維導圖並前置攔截
- 📍 **帳戶安全** `V6.9.6`：登入裝置與異地識別、異地登入強制下線、後臺強制指定使用者下線、敏感資訊統一脫敏
- 🧪 **「系統功能測試」開關** `V6.9.4`：生成式人工智慧備案完成前，可統一阻斷 AI 生成請求
- 💻 **完整商用管理後臺**：資料儀表盤、模型與 API 卡池管理、大模型全域配置中心、動態選單、輪播圖、對話演示資料、站點自定義
- 🌐 **系統全國際化** `V6.9.1`：前後端全量國際化，按 IP / 瀏覽器語言自動切換，管理後臺一鍵 AI 國際化
- 🎨 **2026 新版 UI** `V6.9.0`：卡片 / Notion 雙風格、AI 對話沉浸模式，適配 PC / 手機 H5 / 平板 / 微信公眾號

完整功能（61 項）請檢視 <a href="https://docs.sparkaigc.com/docs/guide/" target="_blank" rel="noopener noreferrer">系統文件 - 系統核心功能</a>，各版本更新內容請檢視 <a href="https://docs.sparkaigc.com/log/" target="_blank" rel="noopener noreferrer">更新日誌</a>。

<h2 id="readme-compare">📊 公益免費商業版 vs 商業授權版</h2>

| 功能 | 公益免費商業版（Public Good V2.1.0） | 商業授權版（V6.9.6） |
|---|---|---|
| 使用範圍 | ✅ 支援商業營運 | ✅ 支援商業營運 |
| 版本迭代 | 2026 特別公益重構版（功能底座 V3.2.0），部分功能更新 | ✅ 持續大版本更新 |
| AI 大模型 | ✅ GPT-3.5 / GPT-4.0、Azure 及部分國內模型<br>🔜 即將支援 GPT-6、Claude-Opus-5-5 / Claude-Fable-5-1、Gemini、DeepSeek 等全模型（預計 2026.10） | ✅ GPT-6、Claude-Opus-5-5 / Claude-Fable-5-1、Gemini、DeepSeek 等全模型 |
| 後臺自定義接入最新大模型（無需系統更新） | 🔜 即將支援（待更新至 GitHub，預計 2026.10） | ✅ |
| 雙端點智慧路由 / 大模型全域配置中心 | ❌ | ✅ |
| 深度思考推理（o3 / DeepSeek-R1 等） | ❌ | ✅ |
| 多圖識圖 / 多類型文件理解與線上預覽 | ❌ | ✅ |
| DALL·E 繪畫 | ✅ DALL·E 2 / 3 | ✅ DALL·E 2 / 3 |
| Midjourney 繪畫 | ✅ 文生圖、圖生圖、局部重繪 | ✅ 全功能：V7 / V8、Niji、角色 / 風格一致參考圖、HD 影片 |
| GPT-Image-2 / Nano Banana 2 獨立繪畫模組 | ❌ | ✅ |
| AI 影片生成（VEO3.1 / Sora-2 / Pika / Seedance） | ❌ | ✅ |
| AI 智慧體 | ✅ Prompt 自定義預設應用 | ✅ 另支援 Coze Agent、GPTs 應用、智慧體商店 |
| 註冊登入 | ✅ 微信掃碼 / 郵箱 / 手機號 | ✅ 另支援登入裝置與異地識別 |
| 卡密兌換 | ✅ | ✅ |
| 會員套餐 | ✅ 永久 / 限時會員套餐 | ✅ 多種積分餘額，永久 / 限時 / 組合套餐，每個模型自定義扣費 |
| 支付系統 | ✅ 易支付 / 碼支付 / 虎皮椒 | ✅ 微信官方支付 / 易支付 / 碼支付 / 虎皮椒 |
| 分銷推廣 | ✅ 分銷邀請、佣金提現 | ✅ A + B 分銷、按使用者單獨設定提成、提現門檻 |
| 積分明細 / 模型呼叫失敗零扣費 | ❌ | ✅ |
| 增強風控（敏感資訊脫敏、「系統功能測試」開關等） | ❌ | ✅ |
| 系統全國際化 | ❌ | ✅ |
| 2026 新版 UI（卡片 / Notion 雙風格、沉浸模式） | ❌ | ✅ |
| 完整商用管理後臺 | 基礎管理 | ✅ 資料儀表盤、模型與卡池、動態選單、全域配置 |

**購買商業授權版本：** <a href="https://docs.sparkaigc.com/pro/" target="_blank" rel="noopener noreferrer">SparkAi 商業授權版介紹</a> · <a href="https://bx5gkpqv57j.feishu.cn/docx/EOWUdQ04no9PoBxyp6Ecg3AAnhf" target="_blank" rel="noopener noreferrer">商業版系統介紹文件與定價（飛書）</a>

<h2 id="readme-free">📚 公益免費商業版功能</h2>

- 👤 使用者註冊登入：支援微信掃碼、郵箱、手機號註冊登入
- 💳 會員套餐：支援永久會員 / 限時會員套餐，使用者端線上開通，後臺自定義套餐內容
- 🛍️ 線上支付：支援易支付、碼支付、虎皮椒支付（虎皮椒可自定義支付閘道器），使用者可線上購買會員套餐
- ⏏️ 分銷推廣：支援分銷邀請，佣金可提現至微信 / 支付寶 / 銀行卡
- 🎫 卡密系統：支援批次生成卡密，使用者端可直接兌換或通過第三方髮卡網購買，支援自定義點數
- 🤖 AI 大模型：支援 OpenAI GPT-3.5 / GPT-4.0 模型，以及微軟 Azure 與部分國內模型（百度文心一言、阿里雲通義千問、智譜 ChatGLM、訊飛星火）
- 🧩 自定義 AI 大模型對接（🔜 即將更新）：後臺可自定義對接 AI 大模型，即將支援 GPT-6、Claude-Opus-5-5 / Claude-Fable-5-1、Gemini、DeepSeek 等全模型，預計 2026 年 10 月更新至 GitHub
- 🪄 DALL·E 繪畫：支援 DALL·E 2、DALL·E 3（含對話文生圖外掛）
- 🎨 Midjourney 繪畫：支援 MJ 文生圖、圖生圖、局部編輯重繪（Vary Region）
- 🧠 AI 智慧體：支援 Prompt 自定義預設應用與自定義 AI 智慧體應用
- 🧩 對話外掛系統與後臺管理

<sub>📌 說明：公益版同樣具備完整的商業營運能力（使用者管理、註冊登入、會員體系、套餐功能、線上支付、分銷推廣等），與商業授權版相比僅 AI 功能較少。為防止有人免費獲取公益版原始碼後直接倒賣牟利或二次開發盈利，公益版不開放原始碼，僅公開發布後端加密打包的系統安裝包。</sub>

<details>
<summary><strong>🖼️ 公益免費商業版介面預覽（點選展開）</strong></summary>

**AI 模型支援**

![AI模型](https://raw.githubusercontent.com/nosqlnull/chatgpt-midjourney-web-sparkai/main/public/demo-pic/aichat02.png)

![AI模型](https://raw.githubusercontent.com/nosqlnull/chatgpt-midjourney-web-sparkai/main/public/demo-pic/aichat03.png)

**應用廣場**

![應用廣場](https://raw.githubusercontent.com/nosqlnull/chatgpt-midjourney-web-sparkai/main/public/demo-pic/app-store.png)

![應用廣場](https://raw.githubusercontent.com/nosqlnull/chatgpt-midjourney-web-sparkai/main/public/demo-pic/app-store02.png)

**AI 繪畫**

![Midjourney繪畫](https://raw.githubusercontent.com/nosqlnull/chatgpt-midjourney-web-sparkai/main/public/demo-pic/midjourney01.png)

![Midjourney繪畫](https://raw.githubusercontent.com/nosqlnull/chatgpt-midjourney-web-sparkai/main/public/demo-pic/midjourney02.png)

![Midjourney繪畫](https://raw.githubusercontent.com/nosqlnull/chatgpt-midjourney-web-sparkai/main/public/demo-pic/midjourney03.png)

**Midjourney 局部編輯重繪**

![Midjourney局部編輯重繪](https://raw.githubusercontent.com/nosqlnull/chatgpt-midjourney-web-sparkai/main/public/demo-pic/VaryRegion.png)

**繪畫廣場**

![繪畫廣場](https://raw.githubusercontent.com/nosqlnull/chatgpt-midjourney-web-sparkai/main/public/demo-pic/market.png)

**外掛功能**

![外掛功能](https://raw.githubusercontent.com/nosqlnull/chatgpt-midjourney-web-sparkai/main/public/demo-pic/plug.png)

**註冊登入模組**

![註冊登入](https://raw.githubusercontent.com/nosqlnull/chatgpt-midjourney-web-sparkai/main/public/demo-pic/register.png)

**會員功能**

![會員功能](https://raw.githubusercontent.com/nosqlnull/chatgpt-midjourney-web-sparkai/main/public/demo-pic/member.png)

![會員功能](https://raw.githubusercontent.com/nosqlnull/chatgpt-midjourney-web-sparkai/main/public/demo-pic/member02.png)

**分銷邀請**

![分銷邀請](https://raw.githubusercontent.com/nosqlnull/chatgpt-midjourney-web-sparkai/main/public/demo-pic/share.png)

**後臺管理**

![後臺管理](https://raw.githubusercontent.com/nosqlnull/chatgpt-midjourney-web-sparkai/main/public/demo-pic/admin.png)

![使用者管理](https://raw.githubusercontent.com/nosqlnull/chatgpt-midjourney-web-sparkai/main/public/demo-pic/admin02.png)

</details>

<h2 id="readme-deploy">🛠️ 安裝部署</h2>

### 方式一：寶塔面板 - 官方 Docker 商店一鍵部署（推薦）

- 點我前往 **<a href="https://docs.sparkaigc.com/deploy/baota/process.html" target="_blank" rel="noopener noreferrer">詳細圖文安裝部署教程</a>**
- 安裝寶塔面板（9.2.0 版本及以上），前往 <a href="https://www.bt.cn/new/download.html" target="_blank" rel="noopener noreferrer">寶塔官網</a> 選擇正式版的指令碼下載安裝
- 安裝後登入寶塔面板，在選單欄中點選 Docker，首次進入會提示安裝 Docker 服務，點選立即安裝，按提示完成安裝
- 安裝完成後在應用商店中搜尋 **SparkAi**，找到 SparkAI-ChatGPT-AiWeb，點選安裝，配置基本選項即可完成安裝

### 方式二：Node.js + PM2 環境部署

> 可參考 <a href="https://docs.sparkaigc.com/deploy/baota/process.html" target="_blank" rel="noopener noreferrer">授權版本官方安裝教程</a>

**1. 環境準備**

- 推薦使用 <a href="https://github.com/nvm-sh/nvm" target="_blank" rel="noopener noreferrer">nvm</a> 安裝 Node.js 16.0 或更高版本：

  ```bash
  nvm install 16
  nvm use 16
  node -v
  ```

- 安裝 PM2 與 pnpm，並確認可以正常執行：

  ```bash
  npm install pm2 -g
  npm install -g pnpm
  pm2 -v
  pnpm -v
  ```

**2. 配置專案**

- 複製 `.env.example` 檔案為 `.env`，根據需要修改其中的配置項
- 執行 `pnpm i` 安裝依賴（若安裝緩慢可嘗試使用國內源）

**3. 啟動專案**

- 執行 `pnpm start` 啟動服務，預設監聽 9520 埠
- 在瀏覽器中訪問 `http://localhost:9520`；如果配置了 Nginx 反向代理，則通過配置的域名訪問

**4. 專案升級**

```bash
git pull        # 拉取新的整合包
pm2 del all     # 刪除舊的 PM2 行程
pnpm i          # 安裝依賴
pnpm start      # 啟動服務（預設 9520 埠）
```

### 管理平臺

| 專案 | 內容 |
|---|---|
| 管理端地址 | `sparkai/admin` |
| 超級管理員帳號 / 密碼 | `super` / `sparkai` |
| 普通管理員帳號 / 密碼 | `admin` / `123456` |

普通管理員僅可預覽後臺非敏感資訊。請使用超級管理員帳號登入後臺，並**及時修改預設密碼**。

<h2 id="readme-changelog">📝 更新日誌</h2>

- 商業授權版本更新日誌（持續更新至 V6.9.6）：<a href="https://docs.sparkaigc.com/log/" target="_blank" rel="noopener noreferrer">https://docs.sparkaigc.com/log/</a>

### 【Public Good V2.1.0】2026 特別公益重構版
- 2026 特別重構，商業系統能力支援：公益版正式更名為「公益免費商業版」，版本號更新為 Public Good V2.1.0，與商業授權版版本號區分
- 支援會員套餐、線上支付（易支付 / 碼支付 / 虎皮椒）、分銷推廣等商業營運功能，免費部署即可用於商業營運
- 功能底座基於 V3.2.0
- 🔜 即將更新：支援自定義 AI 大模型對接，即將支援 GPT-6、Claude-Opus-5-5 / Claude-Fable-5-1、Gemini、DeepSeek 等全模型（預計 2026 年 10 月更新至 GitHub）

<details>
<summary><strong>早期版本更新日誌（V2.5.7 – V3.2.0，點選展開）</strong></summary>

### 【V3.2.0】更新功能
- 新增支援最新 GPT-4 多模態模型、OpenAI GPT-4-Turbo-With-Vision-128K 模型（後續支援對話識圖功能）
- 新增支援最新 OpenAI GPT-3.5-Turbo-1106、GPT-4-1106-Preview 模型
- 新增支援對話外掛系統，後續逐步增加外掛功能，擴充套件 AI 能力
- 新增支援 OpenAI DALL-E3 文生圖外掛，可直接對話文生圖，搭配 GPT4-Turbo 使用（官網 20231107 釋出）
- 新增 KEY 支援單獨配置消耗費率，比如 GPT4-32K 比 GPT4 成本更高應該消耗更多的額度次數
- 新增後臺配置指定使用者端預設使用大模型

### 【V3.1.0】更新功能
【已支援 OpenAI GPT 全模型 + 國內 AI 全模型 + 繪畫池系統】
- 新增 Midjourney 局部重繪（Vary Region）線上編輯功能
- 新增 Midjourney 繪畫帳號池系統，支援高併發繪畫
- 支援手機端 Midjourney 局部重繪功能（Vary Region 局部重繪）
- 首頁 AI 提問 UI 更新，側邊欄樣式更新，對話方塊工具更新
- 提問模型：新增支援騰訊混元大模型
- 提問模型：新增支援訊飛星火認知大模型 V3.0 版本
- 提問模型：新增支援百度文心 4.0 版本
- 移除後臺 Midjourney 繪畫代理配置，將轉由繪畫池一併處理，最佳化速度
- 使用者端大模型列表點選切換後允許自動關閉，且列表支援滑動選擇檢視
- 修復開啟百度敏感詞檢測時，以圖生圖提示詞包含圖片連結導致無法提交繪圖的問題

### 【V2.6.4】更新功能
- 新增阿里通義千問大模型 qwen-turbo、qwen-plus
- 導航側邊欄 UI 佈局及樣式修改
- 應用 Prompt 預設已支援國內 AI 大模型（開啟 GPT 之外的大模型預設插入變數 `SAI_USER_QUESTION_CONTENT` 即可）
- 新增公安網備案號及標準圖示配置顯示

### 【V2.6.3】更新功能
- 重寫 AI 對話系統：已支援 OpenAI GPT 全模型 + 國內 AI 全模型（百度文心一言、微軟 Azure、阿里雲通義千問、智譜 ChatGLM、訊飛星火等）
- 新增 AI 工具外掛：開通會員、連續對話、一鍵清屏、匯出對話功能
- 分銷代理新增銀行卡提現渠道（微信、支付寶、銀行卡）
- 新增 Midjourney 專業繪畫提示詞參考功能
- 去除遊客功能：修復遊客指紋 ID 導致後臺帳戶明細變動查詢失敗和購買套餐導致的一系列 BUG
- 修復非超級管理員（Super）可以刪除訂單記錄的問題
- UI 介面更新等其他最佳化

### 【V2.6.2】更新功能
- 新增 MJ 提交繪畫，中文自動翻譯英文功能
- 修復非會員使用者開通限時會員時會員次數計算錯誤的 BUG
- 最佳化思維導圖生成邏輯，防止只生成兩級
- 修復後臺關閉簽到功能後手機端仍然顯示的 BUG

### 【V2.6.1】更新功能
- 增加訪客體驗功能，可配置每日未登入使用額度，註冊帳號可同步訪客使用資料（使用者端設定 -> 訪客設定）
- 增加後臺底部自定義配置版權資訊（系統設定 -> 版權資訊）
- 增加虎皮椒支付自定義閘道器（支付管理 -> 虎皮椒支付）
- 增加違規敏感詞檢測記錄功能（風控管理 -> 違規檢測記錄）

### 【V2.6.0】更新功能
- 最佳化 key 池額度耗盡鎖定邏輯
- 最佳化 MJ 繪畫連線、最佳化 CSS、部分頁面樣式修改

### 【V2.5.9】更新功能
- 增加手機端簽到領取免費次數功能
- 最佳化後臺總計繪畫數量邏輯

### 【V2.5.8】更新功能
- 新增 MJ 官方圖片重新生成指令功能
- 新增官方 Vary 指令：單張圖片對比加強 Vary(Strong) | Vary(Subtle)
- 新增官方 Zoom 指令：單張圖片無限縮放 Zoom out 2x | Zoom out 1.5x

### 【V2.5.7】更新功能
- 新增 GPT 聯網提問功能、手機號註冊登入、簽到功能、管理後臺功能更新等
- 最佳化 MJ 首次繪畫無上級 ID 顯示問題、最佳化內建 MJ 代理
- 其他頁面最佳化

【低版本不做記錄】……

</details>

<h2 id="readme-contact">💬 學習交流</h2>

- 掃碼新增微信，備註 `sparkai-open`，拉交流群（不接受私聊技術諮詢）
- 商業授權諮詢：<a href="https://docs.sparkaigc.com/docs/license.html" target="_blank" rel="noopener noreferrer">聯絡我們</a>

<h2 id="readme-star-history">⭐ Star History</h2>

<div align="center">

<a href="https://star-history.com/#nosqlnull/SparkAi-ChatGPT-AiWeb&Date" target="_blank" rel="noopener noreferrer">![Star History Chart](https://api.star-history.com/svg?repos=nosqlnull/SparkAi-ChatGPT-AiWeb&type=Date)</a>

</div>

<h2 id="readme-agpl">📜 授權條款</h2>

本倉庫釋出的 SparkAi 公益免費商業版程式包採用 [《SparkAi 公益免費商業版使用許可協議》](../../LICENSE) 授權（免費使用許可，非開源授權條款）：

- ✅ **允許：** 個人或企業免費下載、安裝部署，並將其用於自有站點的商業營運（會員套餐、線上支付、分銷推廣等）。
- ❌ **禁止：** 出售、出租或以任何形式有償分發本程式包及其修改版本；將本系統包裝為自有產品對外售賣；反編譯、破解，或刪除、篡改版權與授權資訊。
- ⚠️ 本程式包按「現狀」提供，不附帶任何形式的擔保；使用本系統營運 AI 服務的合規責任由部署方承擔。

如需原始碼授權、二次開發或其他授權方式，請傳送郵件至：[evenkepler@gmail.com](mailto:evenkepler@gmail.com)，或加作者微信 `DjiMain`（備註 `SparkAi`）。
