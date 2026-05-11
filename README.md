# 英语听读学习 🎧

一个帮助英语学习者进行听读训练的 PWA 工具。粘贴一段英文，即可朗读、翻译、查词、记生词。

**[在线体验 →](https://ruotongzhang-betty.github.io/english-learner/)**

---

## 功能

### 🔊 朗读
- 支持 **Azure 神经语音**（更自然）和**浏览器内置语音**自动切换
- 英式 / 美式多种声音可选
- 播放速度 0.5x – 2.0x 调节
- 五种播放模式：一次性 / 影子跟读 / 循环 / 播放 N 次 / 按时间

### 🌐 双语翻译
- 三种显示模式：仅英文 / 中英对照 / 仅中文
- 智能翻译引擎：**Azure Translator** 优先（200 万字/月免费），用量超限自动切换到 **MyMemory**
- 翻译结果本地缓存，重复文本不消耗额度

### 📖 单词查询
- 点击任意单词弹出释义面板
- 英文释义来自 Free Dictionary API
- 中文翻译优先使用 Google Translate，再 Azure，最后 MyMemory
- 朗读单词发音

### 📝 生词本
- 一键将单词加入生词本，保留音标、释义、中文
- 三级熟练度：学习中 / 熟悉 / 已掌握
- 自定义**彩色标签**，支持标签筛选
- 搜索支持：单词、中文、标签名
- **闪卡复习**模式
- 导出为 TSV 文件（可导入 Anki / Excel）

### 📚 文本库
- 保存多个文本片段，随时切换
- 展示模式下也可直接保存

### ⚡ 性能 & 离线
- 音频缓存（Cache API）：相同语音只合成一次，循环播放不重复消耗 Azure 额度
- 翻译缓存（localStorage）：已翻译内容离线可用
- **PWA**：可安装到桌面 / 手机主屏幕，离线使用

---

## 快速开始

无需安装，下载后直接用浏览器打开 `index.html` 即可。

```bash
git clone https://github.com/RuotongZhang-Betty/english-learner.git
cd english-learner
# 用浏览器打开 index.html，或启动本地服务器：
npx serve .
```

> PWA 功能（安装、音频缓存）需要 **HTTPS 或 localhost** 环境才能生效。

---

## 配置 Azure（可选）

不配置也可以用，浏览器语音 + Google Translate 完全免费。

配置 Azure 可获得更自然的语音和更稳定的翻译：

| 服务 | 免费额度 | 获取方式 |
|------|---------|---------|
| Azure 语音 (TTS) | 50 万字/月 | [Azure 认知服务](https://portal.azure.com/) |
| Azure 翻译 | 200 万字/月 | 同上（同一个 Key 可共用） |

在应用**设置**页填入 API Key 和区域即可，用量超限自动切回免费接口。

---

## 技术栈

- 纯原生 HTML / CSS / JavaScript，无框架无依赖
- Web Speech API（浏览器 TTS + 单词边界高亮）
- Azure Cognitive Services（TTS & Translator）
- Google Translate 非官方 API（单词翻译）
- Free Dictionary API（英文释义）
- Cache API + localStorage（离线缓存）
- Service Worker + Web App Manifest（PWA）

---

## 截图

> *(可以之后截图贴这里)*

---

## License

MIT
