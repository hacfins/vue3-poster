# vue3-poster
⚡⚡⚡海报组件. 只需要一个简单的 json 配置即可生成你需要的海报...

## Demo
#### <a href="https://ayiaq1.github.io/el-tree-select/storybook-static" target="_blank">在线测试</a>
###
![Image text](https://github.com/hacfins/vue3-poster/blob/0e0305b75ca87f356a60e00355a47b0fccff8221/src/assets/demo.jpg)

## poster.vue

``` vue
<template>
    <poster :shareInfo="shareInfo"></poster>
</template>

<script>
import poster from 'components/poster'
export default {
    data(){
        return{
            shareInfo:{
            
            }
        }
    },
    components: {
        poster
    },
    mounted(){
        this.shareInfo = {
            start_time:'2021-09-16 14:30',//分享时间
            title: "分校1数学-可录制-公开",//分享标题
            share_url:location.origin + '/detail/prepare',//分享地址
            share_img:'',//分享图片
            school_name: "孙雪玲测试机构",//分享机构
            speakers:{//分享老师
                avator: "",
                full_name: "孙雪玲"
            },
        }

    }
}
</script>
<style lang="scss" rel="stylesheet/scss">


</style>


```

## Components

### poster

#### Props

* `shareInfo {Object}`

  Default `{}`.

#### 组件props解释

##### shareInfo字段

| 字段            | 类型    | 必填 | 描述     |
| --------------- | ------- | ---- | -------- |
| title           | String  | 否   | 分享标题 |
| start_time      | String  | 否   | 分享时间 |
| share_url       | String  | 否   | 分享地址 |
| share_img       | String  | 否   | 分享封面 |
| school_name     | String  | 否   | 分享机构 |
| speakers        | Object  | 否   | 看下文   |

##### speakers字段

| 字段            | 类型    | 必填 | 描述         |
| --------------- | ------- | ---- | ------------ |
| full_name       | String  | 否   | 分享人的姓名 |
| avator          | String  | 否   | 分享人的头像 |

## Development

``` bash
# install dependencies
npm install
# serve with hot reload at localhost:3000
npm run serve
# build for production with minification
npm run build
```