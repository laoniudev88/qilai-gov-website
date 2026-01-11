# 企来集团政府合作品牌宣传网站 - 项目说明文档

## 📋 项目概述

**项目名称**：企来集团政府合作品牌宣传网站  
**项目类型**：静态前端网站（React 19 + Tailwind CSS 4）  
**开发框架**：React 19、Vite、Tailwind CSS 4、shadcn/ui  
**部署方式**：静态网站（无需后端服务器）  

---

## 🎯 核心功能

### 1. **首页展示**
- 企来集团品牌宣传
- 习近平和李强的领导讲话轮播展示（各3篇）
- 地方合作展示（6个城市：岳阳、兰州、珠海、长兴、厦门、常州）
- 新闻聚焦板块（5篇企来集团新闻）
- 政策文件链接（5个国家政策文件）

### 2. **新闻详情页**
- 完整的新闻文章显示
- 发布时间、来源信息
- 新闻内容展示
- 返回首页导航

### 3. **导航系统**
- 顶部导航菜单（首页、集团概况、政策要闻、数字服务、互动交流、数据开放、地方合作）
- 搜索功能（支持关键词搜索）
- 响应式导航设计

### 4. **地方合作模块**
- 6个城市的合作展示卡片
- 城市详情页面
- 全国合作网络格局地图

### 5. **多语言支持**
- 完整的中文界面
- 所有内容均已本地化

---

## 📁 项目文件结构

```
qilai_gov_website/
├── client/                          # 前端应用目录
│   ├── public/                      # 静态资源
│   │   └── images/                  # 图片资源
│   ├── src/
│   │   ├── components/              # React 组件
│   │   │   ├── ui/                  # shadcn/ui 组件库
│   │   │   ├── Map.tsx              # 地图组件
│   │   │   ├── ManusDialog.tsx       # 对话框组件
│   │   │   └── ErrorBoundary.tsx     # 错误边界
│   │   ├── contexts/                # React Context（语言切换等）
│   │   ├── hooks/                   # 自定义 React Hooks
│   │   ├── lib/                     # 工具函数和数据
│   │   │   ├── newsData.ts          # 新闻数据（包含领导讲话、企业新闻、政策文件）
│   │   │   └── utils.ts             # 工具函数
│   │   ├── pages/                   # 页面组件
│   │   │   ├── Home.tsx             # 首页
│   │   │   ├── NewsDetail.tsx        # 新闻详情页
│   │   │   ├── CooperationMap.tsx    # 地方合作地图页
│   │   │   └── ...其他页面
│   │   ├── App.tsx                  # 应用主组件
│   │   ├── main.tsx                 # React 入口文件
│   │   ├── index.css                # 全局样式（Tailwind CSS 配置）
│   │   └── const.ts                 # 常量定义
│   └── index.html                   # HTML 入口文件
├── server/                          # 后端占位符（静态项目不使用）
├── shared/                          # 共享类型定义占位符
├── dist/                            # 构建输出目录
├── package.json                     # 项目依赖配置
├── pnpm-lock.yaml                   # 依赖锁定文件
├── vite.config.ts                   # Vite 配置文件
├── tsconfig.json                    # TypeScript 配置
├── tailwind.config.ts               # Tailwind CSS 配置
├── components.json                  # shadcn/ui 配置
└── ideas.md                         # 设计理念文档
```

---

## 🚀 运行环境要求

### 本地开发环境

**必需软件**：
- **Node.js**: v18.0.0 或更高版本（推荐 v20+）
- **pnpm**: v8.0.0 或更高版本（包管理工具）
- **Git**: 用于版本控制

**系统要求**：
- 操作系统：Windows、macOS 或 Linux
- 磁盘空间：至少 500MB（包括 node_modules）
- 内存：至少 2GB RAM

### 部署环境

**静态网站托管**（无需后端服务器）：
- 任何支持静态网站的托管服务均可，例如：
  - Netlify
  - Vercel
  - GitHub Pages
  - AWS S3 + CloudFront
  - 阿里云 OSS
  - 腾讯云 COS
  - 传统 Web 服务器（Nginx、Apache）

---

## 📦 安装和运行步骤

### 1. 本地开发

#### 步骤 1：安装依赖
```bash
cd qilai_gov_website
pnpm install
```

#### 步骤 2：启动开发服务器
```bash
pnpm dev
```

开发服务器将在 `http://localhost:5173` 启动（Vite 默认端口）

#### 步骤 3：访问网站
在浏览器中打开 `http://localhost:5173`

### 2. 生产构建

#### 步骤 1：构建项目
```bash
pnpm build
```

构建输出将生成在 `dist/` 目录

#### 步骤 2：本地预览构建结果
```bash
pnpm preview
```

### 3. 部署到生产环境

将 `dist/` 目录中的所有文件上传到您的托管服务器：

**使用 Netlify**：
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

**使用 Vercel**：
```bash
npm install -g vercel
vercel --prod
```

**使用传统服务器（Nginx）**：
```bash
# 将 dist 目录复制到 Nginx 根目录
cp -r dist/* /var/www/html/
```

---

## 🛠 主要技术栈

| 技术 | 版本 | 用途 |
|------|------|------|
| React | 19 | UI 框架 |
| Vite | 5+ | 构建工具 |
| TypeScript | 5+ | 类型系统 |
| Tailwind CSS | 4 | 样式框架 |
| shadcn/ui | 最新 | UI 组件库 |
| Wouter | 3.7+ | 路由管理 |
| React Simple Maps | 3.0 | 地图展示 |

---

## 📝 核心数据文件

### `client/src/lib/newsData.ts`

包含所有网站内容数据：

1. **leaderSlides** - 领导讲话数据
   - 习近平的3篇讲话
   - 李强的3篇讲话

2. **newsData** - 新闻和政策数据
   - 企来集团新闻（5篇）
   - 政策文件链接（5个）
   - 领导讲话数据（6篇）

3. **policyDocuments** - 政策文件链接

---

## 🌐 页面路由

| 路由 | 页面 | 说明 |
|------|------|------|
| `/` | 首页 | 主页展示 |
| `/news/:id` | 新闻详情 | 显示具体新闻文章 |
| `/cooperation-map` | 地方合作地图 | 全国合作网络展示 |
| `/city/:id` | 城市详情 | 特定城市的合作信息 |

---

## 🎨 样式和主题

- **颜色方案**：红色（#DC2626）为主色，白色为背景
- **字体**：系统默认字体栈
- **响应式设计**：支持移动设备、平板和桌面
- **暗黑模式**：支持（通过 Tailwind CSS 实现）

---

## 🔧 常见操作

### 修改网站内容

所有内容存储在 `client/src/lib/newsData.ts` 中：

```typescript
// 添加新闻
export const newsData = [
  {
    id: "news-1",
    title: "新闻标题",
    description: "新闻描述",
    content: "完整内容",
    date: "2024-01-01",
    source: "来源",
    image: "/images/news.jpg"
  },
  // ... 更多新闻
];
```

### 修改样式

全局样式在 `client/src/index.css` 中定义，使用 Tailwind CSS 工具类。

### 添加新页面

1. 在 `client/src/pages/` 中创建新的 `.tsx` 文件
2. 在 `client/src/App.tsx` 中添加路由

---

## 📱 浏览器兼容性

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- 移动浏览器（iOS Safari、Chrome Mobile）

---

## 🔐 安全性

- 所有依赖通过 `pnpm-lock.yaml` 锁定版本
- 定期更新依赖以获取安全补丁
- 无敏感信息存储在前端代码中

---

## 📞 故障排除

### 问题：页面无法加载
**解决方案**：
1. 清除浏览器缓存
2. 重新启动开发服务器：`pnpm dev`
3. 检查浏览器控制台错误信息

### 问题：样式未正确显示
**解决方案**：
1. 确保 Tailwind CSS 已正确配置
2. 运行 `pnpm install` 重新安装依赖
3. 清除 `node_modules` 和 `dist` 目录后重新构建

### 问题：图片无法显示
**解决方案**：
1. 确保图片文件位于 `client/public/images/` 目录
2. 检查图片路径是否正确（应使用 `/images/filename.jpg`）

---

## 📚 相关文档

- [Vite 官方文档](https://vitejs.dev/)
- [React 官方文档](https://react.dev/)
- [Tailwind CSS 官方文档](https://tailwindcss.com/)
- [shadcn/ui 官方文档](https://ui.shadcn.com/)

---

## 📄 许可证

本项目为企来集团内部项目，版权所有。

---

## 📧 支持

如有任何问题或需要技术支持，请联系开发团队。

**最后更新**：2026年1月11日  
**项目版本**：v1.0.0
