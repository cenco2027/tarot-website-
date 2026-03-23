\# Tarot Web App 页面结构文档



\## 1. 文档目标



\* 定义页面结构

\* 定义模块划分

\* 定义显示逻辑

\* 定义用户交互流程



\## 2. 页面定位



\* 单页应用

\* 不进行页面跳转

\* 通过状态控制内容显示

\* 用户在一个页面完成全部操作



\## 3. 用户流程



\* 用户进入页面

\* 用户输入问题

\* 用户点击开始占卜

\* 系统校验输入

\* 输入为空则显示错误提示

\* 输入有效则生成牌阵

\* 显示牌阵

\* 显示解读

\* 用户点击重新开始

\* 页面回到初始状态



\## 4. 页面整体结构



\* Header 标题区



\* Intro 简介区



\* QuestionInput 提问区



\* ErrorMessage 错误提示区



\* DrawButton 抽牌按钮



\* CardSpread 牌阵展示区



\* Interpretation 解读区



\* ResetButton 重新开始按钮



\## 5. 模块说明



\### 5.1 Header



\* 展示网站名称

\* 提供整体氛围

\* 一直显示



\### 5.2 Intro



\* 提供使用说明

\* 引导用户输入问题

\* 一直显示



\### 5.3 QuestionInput



\* 接收用户输入

\* 使用 textarea

\* 一直显示



\### 5.4 ErrorMessage



\* 提示用户输入问题

\* 默认隐藏

\* question 为空且点击按钮时显示



\### 5.5 DrawButton



\* 触发抽牌逻辑

\* 一直显示

\* 点击后执行逻辑

\* 如果 question 为空

\* 设置 error 为 true

\* 如果 question 不为空

\* 设置 error 为 false

\* 生成 cards

\* 设置 isDrawn 为 true



\### 5.6 CardSpread



\* 展示三张牌

\* 包含过去 现在 未来位置

\* 每张牌包含图片 名称 正逆位

\* 默认隐藏

\* isDrawn 为 true 时显示



\### 5.7 Interpretation



\* 展示解读内容

\* 包含单牌解释

\* 包含综合解读

\* 默认隐藏

\* isDrawn 为 true 时显示



\### 5.8 ResetButton



\* 清空状态

\* 默认隐藏

\* isDrawn 为 true 时显示

\* 点击后清空 question

\* 清空 error

\* 清空 cards

\* 清空 interpretation

\* 设置 isDrawn 为 false



\## 6. 页面状态



\* question string

\* error boolean

\* isDrawn boolean

\* cards array

\* interpretation string



\## 7. 显示逻辑



\* QuestionInput 一直显示

\* ErrorMessage error 为 true 时显示

\* CardSpread isDrawn 为 true 时显示

\* Interpretation isDrawn 为 true 时显示

\* ResetButton isDrawn 为 true 时显示



\## 8. 页面阶段



\### 初始状态



\* 显示输入区

\* 不显示错误提示

\* 不显示牌阵

\* 不显示解读

\* 不显示重置按钮



\### 错误状态



\* 显示错误提示

\* 不显示牌阵

\* 不显示解读



\### 已抽牌状态



\* 显示牌阵

\* 显示解读

\* 显示重置按钮



\## 9. 页面逻辑



function handleDraw()



\* 获取 question

\* 去除空格

\* 如果为空

\* 设置 error 为 true

\* 返回

\* 设置 error 为 false

\* 生成 cards

\* 生成 interpretation

\* 设置 isDrawn 为 true



function handleReset()



\* 设置 question 为空

\* 设置 error 为 false

\* 设置 cards 为空

\* 设置 interpretation 为空

\* 设置 isDrawn 为 false



\## 10. 第一版完成标准



\* 可以输入问题

\* 可以触发抽牌

\* 未输入时显示错误提示

\* 可以展示三张牌

\* 可以展示解读

\* 可以重置页面



\## 11. 后续扩展



\* 多牌阵

\* 动画效果

\* AI解读增强

\* 历史记录

\* 收藏功能

\* 分享功能

\* 多语言支持

