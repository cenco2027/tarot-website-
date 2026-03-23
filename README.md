# 塔罗占卜 Web App

一个简洁、优雅的塔罗占卜网站，用户无需注册即可获得塔罗解读。

## 项目结构

```
塔罗牌项目/
├── public/
│   └── images/
│       ├── background/          # 背景图片
│       └── cards/               # 塔罗牌图片 (78张)
├── src/
│   ├── components/              # React 组件
│   │   ├── Header.tsx           # 页面标题
│   │   ├── Intro.tsx            # 使用说明
│   │   ├── QuestionInput.tsx    # 问题输入框
│   │   ├── ErrorMessage.tsx     # 错误提示
│   │   ├── DrawButton.tsx       # 抽牌按钮
│   │   ├── CardSpread.tsx       # 牌阵展示
│   │   ├── Card.tsx             # 单张牌
│   │   ├── Interpretation.tsx   # 解读区
│   │   ├── ResetButton.tsx      # 重置按钮
│   │   └── index.ts             # 组件导出
│   ├── styles/
│   │   └── App.css              # 全局样式
│   ├── App.tsx                  # 主应用组件
│   └── main.tsx                 # 应用入口
├── docs/                        # 项目文档
├── index.html                   # HTML 入口
├── package.json                 # 项目依赖
├── vite.config.ts               # Vite 配置
├── tsconfig.json                # TypeScript 配置
└── .gitignore                   # Git 忽略文件
```

## 组件说明

### App (主组件)
- 管理全局状态：question, error, isDrawn, cards, interpretation
- 组合所有子组件
- 占位逻辑：handleDraw(), handleReset()

### Header
- 展示网站标题和副标题
- 一直显示

### Intro
- 展示使用说明
- 引导用户操作
- 一直显示

### QuestionInput
- 接收用户输入的问题
- Props: question, setQuestion
- 一直显示

### ErrorMessage
- 显示输入错误提示
- Props: error
- error=true 时显示

### DrawButton
- 触发抽牌逻辑
- Props: onClick
- 一直显示

### CardSpread
- 展示三张牌的牌阵
- Props: cards
- isDrawn=true 时显示
- 包含 Card 子组件

### Card
- 展示单张牌的信息
- Props: name, nameCn, image, reversed, position
- 支持逆位显示（旋转180度）

### Interpretation
- 展示占卜解读内容
- Props: interpretation
- isDrawn=true 时显示

### ResetButton
- 重置页面状态
- Props: onClick
- isDrawn=true 时显示

## 样式特点

- 颜色体系：奶油白 + 浅紫色调
- 最大宽度：900px，居中显示
- 响应式设计：支持移动端
- 背景：固定背景图 + 半透明白色叠加层
- 卡片设计：圆角、边框、阴影效果

## 开发规范

- 技术栈：React 18 + TypeScript + Vite
- 命名规则：
  - 组件：PascalCase (Header.tsx)
  - 普通文件：kebab-case (tarot-cards.ts)
- 单一职责：每个组件只负责一个功能
- 逻辑与 UI 分离：逻辑待实现在 utils 中

## 快速开始

```bash
# 安装依赖
npm install

# 开发模式
npm run dev

# 构建生产版本
npm run build

# 预览生产版本
npm run preview
```

## 后续开发

- [ ] 实现抽牌逻辑
- [ ] 实现解读生成
- [ ] 实现卡牌数据结构
- [ ] 添加动画效果
- [ ] 支持多牌阵
- [ ] AI 解读增强
