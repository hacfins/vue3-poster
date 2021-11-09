# vue3-poster
⚡⚡⚡海报组件. 只需要一个简单的 json 配置即可生成你需要的海报...

## Demo
###<a href="https://ayiaq1.github.io/el-tree-select/storybook-static" target="_blank">在线测试</a>
###
![Image text](https://github.com/ayiaq1/el-tree-select/raw/master/DEMO.jpg)


## 组件参数解释

### shareInfo字段

| 字段            | 类型    | 必填 | 描述     |
| --------------- | ------- | ---- | -------- |
| title           | String  | 否   | 分享标题 |
| start_time      | String  | 否   | 分享时间 |
| share_url       | String  | 否   | 分享地址 |
| share_img       | String  | 否   | 分享封面 |
| school_name     | String  | 否   | 分享机构 |
| speakers        | Object  | 否   | 看下文   |

### speakers字段

| 字段名    | 类型   | 必填 | 描述         |
| --------- | ------ | ---- | ------------ |
| full_name | String | 否   | 分享人的姓名 |
| avator    | String | 否   | 分享人的头像 |