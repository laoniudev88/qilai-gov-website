# GitHub 推送指南

## 快速开始

本项目已准备好推送到 GitHub。由于 GitHub 已禁用密码认证，您需要使用**个人访问令牌（Personal Access Token, PAT）**进行认证。

## 步骤 1：生成 GitHub 个人访问令牌

1. 登录 GitHub：https://github.com/login
2. 进入设置：https://github.com/settings/tokens
3. 点击"Generate new token"（经典令牌）
4. 选择以下权限：
   - `repo` - 完全访问私有和公开仓库
   - `workflow` - 更新 GitHub Actions 工作流
5. 复制生成的令牌（保存在安全的地方）

## 步骤 2：在本地推送代码

### 方法 A：使用令牌（推荐）

```bash
# 进入项目目录
cd qilai_gov_website

# 配置 Git 用户信息
git config user.name "laoniudev88"
git config user.email "1241587258@qq.com"

# 更新远程仓库 URL（使用令牌）
git remote set-url origin https://<YOUR_TOKEN>@github.com/laoniudev88/qilai-gov-website.git

# 推送到 main 分支
git push -u origin main

# 或者推送到 master 分支
git push -u origin master
```

### 方法 B：使用 SSH（更安全）

```bash
# 生成 SSH 密钥（如果还没有）
ssh-keygen -t ed25519 -C "1241587258@qq.com"

# 将公钥添加到 GitHub：https://github.com/settings/keys

# 配置远程仓库为 SSH
git remote set-url origin git@github.com:laoniudev88/qilai-gov-website.git

# 推送代码
git push -u origin main
```

## 步骤 3：验证推送

```bash
# 检查远程仓库
git remote -v

# 查看推送历史
git log --oneline -5
```

## 步骤 4：配置 GitHub Pages

推送完成后，在 GitHub 仓库设置中：

1. 进入 Settings → Pages
2. 选择 Source：`main` 分支
3. 选择文件夹：`/ (root)`
4. 点击 Save

您的网站将在以下地址发布：
```
https://laoniudev88.github.io/qilai-gov-website
```

## 常见问题

### Q: 推送时提示"Authentication failed"
**A:** 确保您使用的是正确的令牌或 SSH 密钥，而不是密码。

### Q: 如何更新已推送的代码？
**A:** 进行本地修改后，使用以下命令：
```bash
git add .
git commit -m "描述您的更改"
git push origin main
```

### Q: 如何删除远程仓库中的文件？
**A:** 
```bash
git rm <文件名>
git commit -m "删除文件"
git push origin main
```

## 项目结构

```
qilai_gov_website/
├── client/                 # 前端代码
│   ├── src/
│   │   ├── pages/         # 页面组件
│   │   ├── components/    # 可复用组件
│   │   ├── lib/           # 工具函数和数据
│   │   ├── contexts/      # React Context
│   │   └── App.tsx        # 主应用
│   ├── public/            # 静态资源
│   │   └── images/        # 图片资源
│   └── index.html         # HTML 入口
├── package.json           # 项目依赖
├── vite.config.ts         # Vite 配置
└── README.md              # 项目文档
```

## 本地开发

```bash
# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev

# 构建生产版本
pnpm build

# 预览生产构建
pnpm preview
```

## 技术栈

- **框架**：React 19 + TypeScript
- **样式**：Tailwind CSS 4
- **UI 组件**：shadcn/ui
- **路由**：Wouter
- **构建工具**：Vite
- **包管理**：pnpm

## 许可证

MIT License

## 支持

如有问题，请提交 Issue 或 Pull Request。
