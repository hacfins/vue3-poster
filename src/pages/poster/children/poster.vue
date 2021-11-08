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
                start_time:'2021-09-16 14:30',
                c_id: "4a9a2c773d774d6b8b753cb541a333a9",
                c_name: "分校1数学-可录制-公开",
                img_path:'',
                school_name: "孙雪玲测试机构",
                speakers:[{
                    avator: "",
                    full_name: "孙雪玲"
                }],
			}

		}
	}
</script>

<style lang="scss" rel="stylesheet/scss">


</style>
