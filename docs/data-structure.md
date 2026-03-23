\# Tarot Web App 数据结构文档



\## 1. 文档目标



\* 定义塔罗牌数据结构

\* 定义页面状态结构

\* 定义抽牌结果结构

\* 为前端开发提供数据标准



\## 2. 卡牌基础数据结构



每一张塔罗牌使用统一对象结构表示



字段说明



\* id 唯一标识

\* key 英文标识 对应文件名

\* name 英文名称

\* nameCn 中文名称

\* image 图片路径

\* meaningUpright 正位含义

\* meaningReversed 逆位含义



示例结构



{

id: 0,

key: "fool",

name: "The Fool",

nameCn: "愚者",

image: "/images/cards/00-fool.jpg",

meaningUpright: "新的开始 自由 冒险",

meaningReversed: "冲动 迷失方向"

}



\## 3. 卡牌数据集合结构



所有卡牌组成一个数组



结构说明



\* 数组长度为 78

\* 每个元素为卡牌对象



示例



\[

{ cardObject },

{ cardObject }

]



\## 4. 抽牌结果结构



用于表示一次占卜结果



字段说明



\* question 用户问题

\* cards 抽到的牌数组



示例



{

question: "我应该换工作吗",

cards: \[

{

position: "past",

card: cardObject,

reversed: false

},

{

position: "present",

card: cardObject,

reversed: true

},

{

position: "future",

card: cardObject,

reversed: false

}

]

}



\## 5. 卡牌位置定义



固定三张牌位置



\* past 过去

\* present 现在

\* future 未来



\## 6. 页面状态结构



用于前端管理页面状态



字段说明



\* question 当前输入问题

\* error 是否显示错误

\* isDrawn 是否已抽牌

\* cards 当前抽到的牌

\* interpretation 解读文本



示例



{

question: "",

error: false,

isDrawn: false,

cards: \[],

interpretation: ""

}



\## 7. 单张卡牌显示结构



用于组件展示



字段说明



\* name 名称

\* nameCn 中文名称

\* image 图片路径

\* reversed 是否逆位

\* position 所在位置



示例



{

name: "The Fool",

nameCn: "愚者",

image: "/images/cards/00-fool.jpg",

reversed: false,

position: "past"

}



\## 8. 正逆位逻辑



规则说明



\* 每次抽牌时为每张牌生成随机布尔值

\* true 表示逆位

\* false 表示正位



显示规则



\* reversed 为 true 时图片旋转 180 度

\* reversed 为 false 时正常显示



\## 9. 数据使用流程



\* 用户输入问题

\* 系统从卡牌数组中随机抽取三张

\* 为每张牌生成正逆位状态

\* 组合为抽牌结果结构

\* 更新页面状态

\* 页面根据状态渲染 UI



\## 10. 文件组织建议



数据文件位置



src/data/tarotCards.ts



图片资源位置



public/images/cards/



\## 11. 第一版实现范围



\* 使用本地卡牌数据

\* 不接入外部接口

\* 解读文本可先使用固定模板

\* 后续可扩展为 AI 解读

