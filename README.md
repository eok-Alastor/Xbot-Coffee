# Xbot Coffee - 智能咖啡机器人官网

[![Astro](https://img.shields.io/badge/Astro-5.11.0-000000.svg?logo=astro)](https://astro.build)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.0-38B2AC.svg?logo=tailwind-css)](https://tailwindcss.com)

## 📖 项目简介

Xbot Coffee 是一个专注于智能咖啡机器人的官方网站项目，展示 Obubu 品牌旗下的智能咖啡解决方案。该项目采用现代化的 Astro 框架构建，提供响应式设计和优秀的用户体验。

## ✨ 主要内容

- **智能咖啡机器人产品展示** - 包括 Xbot S、Xbot Lite、Xbot Pro Max 系列
- **咖啡学院** - 专业的咖啡知识和培训内容展示
- **响应式设计** - 适配各种移动端设备尺寸
- **现代化技术栈** - 基于 Astro + Tailwind CSS 构建

## 🛠️ 技术栈

- **框架**: [Astro](https://astro.build) v5.11.0
- **样式**: [Tailwind CSS](https://tailwindcss.com)
- **语言**: TypeScript
- **构建工具**: Vite
- **部署**: 支持多种静态托管平台

## 📁 项目结构

```
xbot-coffee/
├── public/                 # 静态资源文件
│   ├── favicon.ico        # 网站图标
│   └── xbot-products/     # 产品图片
├── src/
│   ├── assets/            # 项目资源文件
│   ├── components/        # Astro 组件
│   │   ├── HeroSection.astro      # 首页英雄区域
│   │   ├── Product.astro          # 产品展示
│   │   ├── Service.astro          # 服务介绍
│   │   ├── AboutUs.astro          # 关于我们
│   │   └── CoffeeAcademy.astro    # 咖啡学院
│   ├── layouts/           # 页面布局
│   ├── pages/             # 页面文件
│   └── styles/            # 全局样式
├── astro.config.mjs       # Astro 配置文件
├── tailwind.config.mjs    # Tailwind CSS 配置
└── package.json           # 项目依赖配置
```

## 🚀 快速开始

### 环境要求

- Node.js 18.0 或更高版本
- npm 或 yarn 包管理器

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

启动后访问 `http://localhost:4321` 查看本地项目

### 构建生产版本

```bash
npm run build
```

### 预览构建结果

```bash
npm run preview
```

## 📱 页面说明

- **首页** (`/`) - 产品展示、服务介绍、关于我们
- **产品页** (`/products`) - 详细的产品信息
- **服务页** (`/services`) - 运营服务详情
- **场景页** (`/scenarios`) - 应用场景展示
- **优势页** (`/advantages`) - 产品优势说明
- **咖啡学院** (`/coffee-academy`) - 咖啡知识培训

## 🎨 设计特色

- 采用现代化的卡片式设计
- 响应式布局，支持移动端和桌面端
- 专业的咖啡主题配色方案
- 流畅的动画和交互效果
- 清晰的信息层次结构

## 🤝 贡献指南

欢迎提交 Issue 和 Pull Request 来改进这个项目！

## 📞 联系我们

- **项目名称**: Xbot Coffee
- **品牌**: Obubu
- **产品**: 智能咖啡机器人
- **服务**: 全托管式智能咖啡运营

---

⭐ 如果这个项目对您有帮助，请给我们一个星标！
