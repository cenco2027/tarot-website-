\# Tarot Web App 组件清单文档



\## 1. 文档目标



\* 定义前端组件划分

\* 明确每个组件职责

\* 为开发提供组件结构参考



\---



\## 2. 组件列表



\* App

\* Header

\* Intro

\* QuestionInput

\* ErrorMessage

\* DrawButton

\* CardSpread

\* Card

\* Interpretation

\* ResetButton



\---



\## 3. 组件说明



\### 3.1 App



\* 页面根组件

\* 管理全局状态

\* 负责组件组合与渲染



状态



\* question

\* error

\* isDrawn

\* cards

\* interpretation



\---



\### 3.2 Header



\* 展示网站标题

\* 提供整体氛围



\---



\### 3.3 Intro



\* 展示说明文字

\* 引导用户操作



\---



\### 3.4 QuestionInput



\* 输入用户问题

\* 更新 question 状态



输入



\* question



输出



\* setQuestion



\---



\### 3.5 ErrorMessage



\* 展示错误提示信息



输入



\* error



\---



\### 3.6 DrawButton



\* 触发抽牌逻辑



输入



\* question



输出



\* handleDraw



\---



\### 3.7 CardSpread



\* 展示牌阵整体结构



输入



\* cards



\---



\### 3.8 Card



\* 展示单张牌



输入



\* name

\* image

\* reversed

\* position



\---



\### 3.9 Interpretation



\* 展示解读内容



输入



\* interpretation



\---



\### 3.10 ResetButton



\* 重置页面状态



输出



\* handleReset



\---



\## 4. 组件层级结构



App



\* Header

\* Intro

\* QuestionInput

\* ErrorMessage

\* DrawButton

\* CardSpread



&#x20; \* Card

\* Interpretation

\* ResetButton



\---



\## 5. 数据流



\* App 管理所有状态

\* 状态通过 props 传递给子组件

\* 子组件通过回调函数修改状态



\---



\## 6. 第一版组件实现优先级



\* App

\* QuestionInput

\* DrawButton

\* ErrorMessage

\* CardSpread

\* Card

\* Interpretation

\* ResetButton

\* Header

\* Intro

