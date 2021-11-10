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
		setup() {

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
