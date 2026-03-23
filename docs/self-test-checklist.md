# Tarot Web App 自测清单

## 1. 数据结构检查

- [ ] `src/data/tarotCards.ts` 共 78 张牌
- [ ] `id` 从 0 到 77 连续
- [ ] 每条包含必填字段：`id` `key` `name` `nameCn` `image` `meaningUpright` `meaningReversed`

## 2. 命名与资源检查

- [ ] `key` 符合 `docs/naming-source-of-truth.md`
- [ ] `image` 路径符合 `/images/cards/${key}.jpg`
- [ ] `public/images/cards` 中存在对应图片文件
- [ ] 运行 `npm run check:cards` 通过

## 3. 组件骨架检查

- [ ] 所有组件文件使用 PascalCase 且每个组件独立文件
- [ ] 所有组件为 React + TypeScript 函数组件
- [ ] 只保留基础结构和 props，不混入抽牌逻辑
- [ ] `App` 只做状态与组件组合

## 4. 页面基础渲染检查

- [ ] 页面可正常启动
- [ ] 输入组件、按钮组件、牌阵组件可正常渲染占位内容
- [ ] 未实现逻辑部分有明确占位说明
