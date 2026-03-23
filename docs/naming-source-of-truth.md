# Tarot 命名规范单一来源

## 1. 目的

- 本文档是卡牌命名的唯一规范来源。
- 当文档示例与资产文件冲突时，以本文档为准。

## 2. 总规则

- `key` 必须等于图片文件名去掉后缀。
- `image` 必须等于 `/images/cards/${key}.jpg`。
- `id` 必须从 `0` 到 `77` 连续递增。

## 3. 大阿尔卡那命名

- 格式：`NN-name`
- 示例：`00-fool`、`10-wheel-of-fortune`、`21-world`

## 4. 小阿尔卡那命名

- 花色：`wands`、`cups`、`swords`、`pentacles`
- 数字牌格式：`suit-01` 到 `suit-10`
- 宫廷牌格式：`suit-page`、`suit-knight`、`suit-queen`、`suit-king`
- 示例：`wands-01`、`cups-10`、`swords-page`、`pentacles-king`

## 5. 常见错误（禁止）

- 使用 `ace` 代替 `01`（如 `wands-ace`）
- 使用不补零数字（如 `cups-2`）
- `key` 与 `image` 不一致（如 key 为 `cups-02`，image 却是 `cups-2.jpg`）
