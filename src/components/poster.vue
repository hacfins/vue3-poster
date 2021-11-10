<template>
    <div id="app-layout" :class="{'app-layout-hd':has_hd}">
        <!--真实的页面挂载点1-->
        <div class="root prohibitCopy">
            <div class="loading-box t2 c3" v-show="!imgLoaded">
                <img  src="data:image/gif;base64,R0lGODlhJgAmAPYAAJKSkpGRkZ6enpeXl52dnZOTk7a2ttvb276+vsnJyaKioqenp6+vr5ycnI6OjpCQkI2Nja6urqWlpZSUlL29vcTExLOzs9/f38XFxcrKyrGxscbGxqamppWVlY+Pj6SkpIyMjLi4uMLCwru7u8zMzNra2tzc3Jubm8jIyJmZmZaWlqmpqYuLi9nZ2bW1tcHBwbS0tLKysry8vMDAwLe3t5qamuLi4qurq+zs7KOjo62traysrKGhoeHh4d3d3e3t7bq6uuDg4OXl5eTk5N7e3unp6erq6u7u7rm5udTU1NjY2MvLy8PDw9PT0+bm5ujo6OPj47+/v8fHx8/Pz83Nzevr6+fn59fX19DQ0NLS0tXV1dbW1v///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFBQBdACwAAAAAJgAmAAAH/4BdgoOEhYaHiImKXVxci4+QjZCTXT2HkoYLGJSDRS0XhpiEMA4KnIMXJUWFooMFBaeDPwcmrI6EOQA7sYM2B0KErV0AA7yEBwfBt4INACGUTYdCJZaDywgeBIcJGYYvFggthibA2wEkmQEOh1EuBhXGghYTASrwh0lIBgZLsTMDAQJEeLSEhgsgnCJACCCBk4hulDYQuBevosWLGA2taCCgY8caxngQ8CiAQANBAAGoVAlCBK8HAVaqhJCxps2bkxAkOGXg1AkPATgtYDFBBiQFAAI0QMdJQtIUOxFZKEDsGS8UBFQ2zORgwg1DETYkWmBoBEBYhTCY8gZB2yEDLE04HNLBgBLATYIUPCDUoUBUYxYYEiIQdBCFAG6N0SskAEChFABGGFsQoC6hxoUyEOOVoJ4hzIU+CIyVwQHFQaALFbCMMTXOQQTWvb4YCAAh+QQFBQBdACwDAAEAGgAOAAAHbIBdgoOEhVA+hYmKiRcHi4svio2KXFyJTTFRjI6FlZaJCC5JhZOdn4klBiGknIOejxUuS4SlrqeLBjSERC2Er4IUiksuIoRVtqcKIAIbiUAJi7+CAg8AHI/YhAgdAQAa2eAaBR4D4OAfDOaFgQAh+QQFBQBdACwJAAEAGgAOAAAHboBdgoODGEiEiImKghQui4sKiggGijY4iRQgAomTiU4lQYoCAQiInYgHB4soAR2mlIRBB1CPHAExhKeDBz6PggAFhDK4g0QHT75dGg8fhFeDRiVEilxchAMMi0cHR4nV1smP39Xh1OPl5uTo6YiBACH5BAUFAF0ALBIAAQATABMAAAdogCsDXYSFhoeEDQGIjIYCAIwVLY2PiFQWL5SQhzQ0jV2VhiIGUp+hhQZAn10nEIYyBlirXSKFSS4UjD9HjAcGPog2ByWzhU4mJSY4xUbIB0PFXUMtBz3RhDgXy9fc3d7FXOHi4bPj44EAIfkEBQUAXQAsFwADAA4AGgAAB2aAXYJdCxiDh4cwDgqIjQUFjYg5ADuRhwADloMNACGaXQgeBJEHJoIJASSNFQYwmiQhLkhKkVpALgYZlgkWBkyfLQi0n8TFxpZBF8rLRI0lB9DRLcfU1YJcxVza2J/b2t3exOHi3IEAIfkEBQUAXQAsFwAJAA4AGgAAB2aAXYKDhAkZhIiCCwEOiYMWEwEqFY4zAwEBEY5dERABEpuCGwSUoaanqKgvFAitrRSJLgaztBapt7iIVqg9LSZFpzYHBz4/pj8Xwz2EXIlPJgcmglzUjkNCg9TNptqo3dzVp9/gm4EAIfkEBQUAXQAsEgASABMAEwAAB2iAXYKDhF08BAKJAgQNhY4PAQCSkhCOlpeYmZqbhFOchBgxIU2fghU0BiMHpSUIqEyYNo5ZQAY0lk8tPZYJGYJcXIQmB0eZwIRFBxfGwYQ+B0WYx4Q/BybSzYQ9B0OX04UHQt7Zn9+fgQAh+QQFBQBdACwJABcAGgAOAAAHbIBdgoOEhYQGhomKgwssEzKLkYQSAAEpCZKSKAQAABKFXFyLFYYjAwEFg6GiiVMxpIY6DKqhg0ElhCE0B5GrhBe8g00GCL2sg8CFIwZZir6/wYMmBkiJz9CGTC6YoLWFyYY03Jld4OSLF7jngQAh+QQFBQBdACwDABcAGgAOAAAHboBdgoNcXIOHiImIhYaKjouMjY+OkZKTipGJQziPC4eFikYtF44GLByXXT4HnIIzLocdBQmTTgc9hxQGuQEEkyYHiAi7hykAI442B0PCxIMZAAOKPwcmicOJHwERiT8lrYfYiQUMqYPi5o8UFo+BACH5BAUFAF0ALAEAEgATABMAAAdkgFyCg4JdhoeIXYSLiY2Oj5CRkpOORj+Uh0QlJZhBByUXR5NOBwc+VpQ2LQdQjQktjjhBjlsWFJiGQAZKhwoPkSQuTIgEAZEhBokCAJAVLhnKzI4HBkiNy48mMLzRuIbY3gQOgQAh+QQFBQBdACwBAAkADgAaAAAHaIBdglyChYaFXImEh4eKi4yIjpCGkpORlpiZmoY2RBefnz6MJiUHpqYtVZurrJtJB5kUMAaWLwYGCKKMVDQGQFiTGDAhUowRG4ItM5AvEASZAwEYmBYBEpkTAZkLAQyYCQEqmRkOFYWBACH5BAkFAF0ALAEAAwAOABoAAAdngF2Cg4NchIeFXIaIh4qLjIKOkISSk5GPXUWMlUEtFziIioMXJQc2ll1GJqVCqEIHJSaoXT1Ds7e4jBgUCL29MohABsPEFle5yMmMCAmoJx4BkwoAAQ0kjBYFAAMhkAsOEzeWGAqWgQA7"
                      class="loading-icon">
                <div>数据加载中</div>
            </div>
            <div class="invite-img-box">
                <div class="inviteCardBox" v-show="imgLoaded">

                    <img  ref="poster_image" @load="imgFinished"  :src="posterData.poster_img_path" alt="" id="inviteCard" class="inviteCard inviteCardImgFin ios-img-touch" :style="{height: cardHeight}">
                </div>
                <div class="saveDes" v-show="imgLoaded">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAABTVBMVEVHcEwuLi45OTkzMzMzMzM0NDQ0NDQzMzMzMzMAAAAzMzMzMzMxMTEyMjIqKiozMzMAAABAQEAzMzMzMzMzMzM0NDQzMzMyMjIzMzM1NTUzMzMqKioyMjI0NDQzMzMyMjIwMDAzMzMzMzMzMzM1NTUzMzMzMzMyMjIzMzMvLy8zMzMzMzM3NzcwMDA0NDQzMzMzMzM0NDQzMzMsLCwzMzMzMzMuLi4zMzMyMjI0NDQzMzMzMzMgICAzMzMzMzMzMzMyMjIyMjI0NDQyMjI0NDQyMjIyMjIzMzMzMzMzMzMvLy8zMzMxMTEyMjI1NTUzMzMyMjIuLi40NDQzMzM2NjYyMjIzMzMzMzMzMzMzMzM0NDQzMzMxMTExMTEyMjI0NDQyMjIzMzM0NDQzMzMzMzM0NDQzMzMzMzM3NzcyMjIzMzMzMzMzMzNVVVUzMzO4QFy+AAAAbnRSTlMAHAn2/MHF/v0B8Psf+AYjAgSgbexUof20HW4MrCJoqCA3qfkwn5I4wxvEVRwlT3LoSpsX5XQW+sqys+EI3B7ivFuT84q75Iz44yvnKlYYlykLj6Uhk9Ty9daO6jQ+V8Yu7Z6N6SyWMg6P89LYA4GV9mUAAAFFSURBVDjLzdBFd8JQFATgCYQGdy1QHOru7u7u7jL/f9lAIAm2bu8i50zmyzv3Bfhf0zEyOWdcmgn7hIZ1JCiyPJnB7vq+y0pHYufYcOBaSNjo763tfRJj9kqITzDUU90HpFAr4Lm8OD87PdwE2oKGql6wUu7hUlYQF52AeyCqA17GMN22i5trQzSVd3DeiQC9OuA32rHH5XLKbvAEs2M23W1TBdxLxm3Yj66s6SSyDvEFafZVrfHKJ0RWiytsCcjzA7cMq+VaDvjmG3JcEZImPqLAL3njKRVk6IGRTjwwDuzzGe/8hIHrKrDRY6EEkHJwU4SFZjmZVSDypwhKqFTUAjPdjYCkAokWHRi/awCUqL0qAkkDlVIBQ6P1oLySAvqH60CLSQcs8jVLqbO96ldrJ1RAzVROUZ7F1GA00GSU75p8/YfzCw4sQ/66WFinAAAAAElFTkSuQmCC">
                    长按上方图片保存并分享
                </div>
            </div>
            <div id="posterBottom" class="posterBottom">
                <div class="bottomScrollWrap">
                    <div class="bottomScroll">
                        <ul class="scrollInner" style="width: 11.8rem;">
                            <li @click="changeTemplate(index)" :class="{'select-border':active_index == index}" v-for="(item,index) in template_list" :key="item">
                                <div class="backImg-box"
                                     :style="{backgroundImage:'url('+item.img_path+')'}">
                                    <img :src="hb_check" class="rightIcon">
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="recommendBtn" @click="show_modal = true">
                        <div class="box-shadow"></div>
                        <i class="iconfont iconfont1 icon-recommend recommendIcon"></i>
                        <span>推荐语</span>
                    </div>
                </div>
                <div class="new-card-alert">
                    <div class="card-item btn-copy" style="cursor: pointer;"  @click="copyLink">
                        <img src="data:image/png;base64,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">
                        <div class="common-item-title">复制链接</div>
                    </div>
                </div>
            </div>
            <div class="commonPosterWrap">
                <div id="commonPoster" class="commonPoster" :class="posterStyle"
                     :style="{backgroundImage:posterData.poster_url ? 'url('+posterData.poster_url+')' : 'none'}">
                    <div class="userAvatarWrap"
                         :style="{top:posterData.avatar_position.y + 'px',left:posterData.avatar_position.x + 'px',backgroundColor:shareInfo.avator ? 'none' : 'rgba(42, 103, 254, 1)'}">
                        <img class="avatarBg" v-if="posterStyle=='interact_three_cls'"
                             src="http://wechatapppro-1252524126.file.myqcloud.com/appAKLWLitn7978/image/eafb3f4d43f8101dd2eaff99a149c021.png"
                        >
                        <img v-if="shareInfo.avator" :src="shareInfo.avator" class="userAvatar">


                        {{ shareInfo.avator ? '' : shareInfo.full_name && shareInfo.full_name[0]}}
                    </div>
                    <div class="nickName"
                         :style="{textAlign:posterData.nickname_position.align,left:posterData.nickname_position.x+'px',top:posterData.nickname_position.y+'px',maxWidth:'calc(100% - '+posterData.nickname_position.x+'px)'}">
                            <span id="nickNameTxt" class="nickNameTxt hk-text-ellipsis">
                                {{shareInfo && shareInfo.full_name && shareInfo.full_name.slice(0,posterData.name_slice_num)}}
                            </span>
                        <span class="share_hint">邀请你一起观看直播</span>
                    </div>

                    <div class="posterMain">
                        <div v-if="posterData.show_goods_img || posterStyle == 'interact_three_cls' "
                             class="goodsIntro"
                             :style="{top: posterData.goods_position.y + 'px',left:posterData.goods_position.x + 'px'}">
                            <div v-if="posterData.show_goods_img" class="goodsImgBox"
                                 :style="{backgroundImage:shareInfo.share_img ? 'url('+shareInfo.share_img+')' : 'none'}">
                                <div class="shopNameMark"
                                     v-if="posterData.default_poster_mark == 'alive_general_cls' || posterStyle == 'alive_cls' || posterStyle == 'price_one_cls' || posterStyle == 'alive_specific_cls' || posterStyle == 'interact_one_cls'">
                                    <template v-if="posterData.default_poster_mark == 'alive_general_cls'">
                                        <span>-</span>
                                        {{shareInfo.pg_name}}
                                    </template>
                                    <template v-if="posterData.default_poster_mark == 'alive_cls'">
                                        来自「{{shareInfo.pg_name}}」
                                    </template>
                                    <template v-if="posterData.default_poster_mark == 'price_one_cls' || posterStyle == 'interact_one_cls'|| posterStyle == 'alive_specific_cls'">
                                        {{shareInfo.pg_name}}
                                    </template>
                                </div>
                                <!--<img  :src="shareInfo.img_path" alt="" class="goodsImg"/>-->

                                <div :data-time="'开播时间'+shareInfo.time+''" v-if="posterStyle == 'interact_one_cls'" class="shopNameTime">
                                </div>
                            </div>
                            <div v-if="posterStyle != 'alive_specific_cls'" class="goodsAddInfo" :style="{backgroundImage: posterStyle == 'price_two_cls' ? '' : !posterData.goods_add_bg ? 'none' : 'url('+posterData.goods_add_bg+')',height:posterStyle == 'price_one_cls'? '': 'auto'}">
                                <div v-if="posterData.default_poster_mark != 'alive_specific_cls'" class="goodsTitle">
                                    {{shareInfo.title}}
                                </div>

                                <div v-if="posterStyle == 'alive_general_cls' || posterStyle == 'interact_three_cls'" class="aliveStartTime">
                                    开播时间：{{shareInfo.time}}
                                </div>
                                <div v-if="(posterStyle == 'price_two_cls' || posterStyle == 'price_one_cls' || posterStyle == 'interact_two_cls')"  class="goodsPrice">
                                    <div  class="priceInfo">
                                        <div  class="price is-price-one">
                                            <div  class="price-free">
                                                开播时间：{{shareInfo.time}}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div v-if="(posterStyle == 'alive_cls' ||
                                posterStyle == 'alive_specific_cls')"  class="aliveStartTime">
                            {{shareInfo.time}}
                        </div>


                        <div v-if="posterStyle == 'study_cls'"  class="recommendBox">
                            <div  class="recommendTxtWrap">
                                <div  class="recommendTxt"><p class="motive_text">{{shareInfo.description ? shareInfo.description : ''}}</p>
                                    <div  class="author"> {{shareInfo.description ? '——' + shareInfo.full_name : ''}}</div>
                                </div>
                            </div>
                            <div  class="goodsTitle" >
                                {{shareInfo.title}}
                            </div>
                        </div>





                        <div  class="qrcodeMain" id="qr_code_main" :style="{top:posterData.qrcode_position.y + 'px',left:posterData.qrcode_position.x + 'px'}">
                            <div v-if="posterStyle == 'study_cls' || posterStyle == 'interact_two_cls' || posterStyle == 'price_two_cls' || posterStyle == 'interact_three_cls' " class="qrcodeShopName">
                                {{shareInfo.pg_name}}
                            </div>
                            <p v-if="posterStyle == 'interact_two_cls'" class="grapLine"></p>
                            <img :src="qr_code_img_path"
                                 ref="code_img"

                                 class="qrcode" :style="{width:posterData.qrcode_size.w + 'px',height:posterData.qrcode_size.h + 'px'}"
                                 @load="qrCodeLoaded"
                            >
                            <p class="scanCodeHint">
                                {{posterData.scan_code_hint}}
                            </p></div> </div>

                </div>
            </div>


            <div v-if="show_modal"  class="recommendWrap">
                <div  class="recommend">
                    <img @click="show_modal = false" src="http://wechatapppro-1252524126.file.myqcloud.com/appAKLWLitn7978/image/cbe9eb8cd79cab48d6334ac9b30fdbb7.png" class="recommendClose">
                    <div  class="recommendMain">
                        <div  class="title">推荐语</div>
                        <div  class="sideTitle">分享至好友/微信群/朋友圈/QQ群，附上推荐语更有吸引力。</div>
                        <div  class="contentBox"><p class="content">{{sugest_str}}</p></div>
                        <div  class="changeBtn" @click="shareTxt">
                            <span class="iconfont iconfont1 icon-replace replaceIcon"></span><span>换一条</span>
                        </div>
                        <div class="copyBtn" @click="copySugest">复制文案</div>
                    </div>
                </div>
            </div>





        </div>
    </div>

</template>

<script>
    import {timeCustomFormat,randomBgColor,copy} from '@/config/utils'
    export default {
        props: {
            shareInfo:{
                type:Object,
                default:null
            },
        },

        data(){
            return {
                qr_code_img_path:'',
                poster_img_path:'',
                imgLoaded:false,
                cardHeight:'',
                posterMapInfo : [
                    {
                        is_default         : 1,
                        default_poster_mark: "alive_cls",
                        avatar_position    : {x: 32, y: 56},
                        is_show_avatar     : 1,
                        is_show_nickname   : 1,
                        nickname_position  : {x: 176, y: 66, align: "left"},
                        name_slice_num     : 8,
                        share_hint         : "邀请你一起观看直播",
                        show_goods_img     : !0,
                        goods_position     : {x: 32, y: 208},
                        has_price_info     : !1,
                        title_slice_num    : 14,
                        text_wrap          : !0,
                        goods_title_bg     : "",
                        has_shop_mark      : !0,
                        qrcode_position    : {x: 512, y: 1026},
                        qrcode_size        : {w: 176, h: 176},
                        scan_code_hint     : "长按扫码查看详情",
                        poster_url         : require('assets/t-hb-3.png'),
                        poster_type_name   : "直播型",
                        poster_img_path:'',
                    },
                    {
                        is_default         : 1,
                        default_poster_mark: "alive_specific_cls",
                        poster_url         : require('assets/t-hb-2.png'),
                        avatar_position    : {x: 32, y: 730},
                        is_show_avatar     : 1,
                        is_show_price      : 0,
                        is_show_nickname   : 1,
                        nickname_position  : {x: 136, y: 735, align: "left"},
                        name_slice_num     : 8,
                        share_hint         : "邀请你一起观看直播",
                        show_goods_img     : !0,
                        goods_position     : {x: 16, y: 134},
                        has_price_info     : !1,
                        title_slice_num    : 14,
                        text_wrap          : !0,
                        goods_title_bg     : "",
                        has_shop_mark      : !0,
                        qrcode_position    : {x: 514, y: 926},
                        qrcode_size        : {w: 188, h: 188},
                        scan_code_hint     : "长按扫码查看详情",
                        poster_type_name   : "直播特有型",
                        poster_img_path:'',
                    },
                    {
                        is_default         : 1,
                        default_poster_mark: "price_one_cls",
                        avatar_position    : {x: 296, y: 25},
                        is_show_avatar     : 1,
                        is_show_nickname   : 1,
                        nickname_position  : {x: 32, y: 194, align: "center"},
                        name_slice_num     : 12,
                        share_hint         : "邀请你一起学习",
                        show_goods_img     : !0,
                        goods_position     : {x: 34, y: 354},
                        has_price_info     : !0,
                        title_slice_num    : 16,
                        text_wrap          : !0,
                        goods_add_bg       : "http://wechatapppro-1252524126.file.myqcloud.com/appAKLWLitn7978/image/71abd0bcdcfb049f64af084b469baa9b.png",
                        has_shop_mark      : !0,
                        qrcode_position    : {x: 34, y: 1026},
                        qrcode_size        : {w: 128, h: 128},
                        scan_code_hint     : "",
                        poster_url         : require('assets/t-hb-5.png'),
                        poster_type_name   : "价格型-1",
                        poster_img_path:'',
                    },
                    {
                        is_default         : 1,
                        default_poster_mark: "alive_general_cls",
                        poster_url         : require('assets/t-hb-1.png'),
                        avatar_position    : {x: 32, y: 686},
                        is_show_avatar     : 1,
                        is_show_price      : 0,
                        is_show_nickname   : 1,
                        nickname_position  : {x: 136, y: 706, align: "left"},
                        name_slice_num     : 8,
                        share_hint         : "邀请你一起观看直播",
                        show_goods_img     : !0,
                        goods_position     : {x: 0, y: 0},
                        has_price_info     : !1,
                        title_slice_num    : 14,
                        text_wrap          : !0,
                        goods_title_bg     : "",
                        has_shop_mark      : !0,
                        qrcode_position    : {x: 304, y: 1078},
                        qrcode_size        : {w: 124, h: 124},
                        scan_code_hint     : "长按扫码查看详情",
                        poster_type_name   : "直播通用型",
                        poster_img_path:'',
                    },

                    {
                        is_default         : 1,
                        default_poster_mark: "interact_one_cls",
                        avatar_position    : {x: 296, y: 32},
                        is_show_avatar     : 1,
                        is_show_nickname   : 1,
                        nickname_position  : {x: 32, y: 208, align: "center"},
                        name_slice_num     : 12,
                        share_hint         : "邀请你一起学习",
                        show_goods_img     : !0,
                        goods_position     : {x: 56, y: 392},
                        title_slice_num    : 10,
                        text_wrap          : !0,
                        goods_title_bg     : "",
                        has_shop_mark      : !0,
                        qrcode_position    : {x: 290, y: 1006, align: "center", colorDark: "#3571FF"},
                        qrcode_size        : {w: 152, h: 152},
                        scan_code_hint     : "长按扫码查看详情",
                        poster_url         : require('assets/t-hb-6.png'),
                        poster_type_name   : "社交型-1",
                        poster_img_path:'',
                    },
                    {
                        is_default         : 1,
                        default_poster_mark: "interact_two_cls",
                        avatar_position    : {x: 56, y: 32},
                        is_show_avatar     : 1,
                        is_show_nickname   : 1,
                        nickname_position  : {x: 88, y: 206, align: "left"},
                        name_slice_num     : 12,
                        share_hint         : "邀请你一起学习",
                        show_goods_img     : !0,
                        goods_position     : {x: 56, y: 340},
                        title_slice_num    : 13,
                        text_wrap          : !0,
                        goods_add_bg       : "http://wechatapppro-1252524126.file.myqcloud.com/appAKLWLitn7978/image/a11c5a4d89e3058394be20e1ce3b3025.png",
                        has_shop_mark      : !1,
                        qrcode_position    : {x: 56, y: 1030},
                        qrcode_size        : {w: 154, h: 154},
                        scan_code_hint     : "长按扫码查看详情",
                        poster_url         : require('assets/t-hb-7.png'),
                        poster_type_name   : "社交型-2",
                        poster_img_path:'',
                    },
                    {
                        is_default         : 1,
                        default_poster_mark: "interact_three_cls",
                        avatar_position    : {x: 50, y: 124},
                        is_show_avatar     : 1,
                        is_show_nickname   : 1,
                        nickname_position  : {x: 58, y: 308, align: "left"},
                        name_slice_num     : 12,
                        share_hint         : "邀请你一起学习",
                        show_goods_img     : !1,
                        goods_position     : {x: 18, y: 50},
                        title_slice_num    : 12,
                        text_wrap          : !0,
                        goods_title_bg     : "",
                        has_shop_mark      : !1,
                        qrcode_position    : {x: 0, y: 310},
                        qrcode_size        : {w: 240, h: 240},
                        scan_code_hint     : "",
                        poster_url         : require('assets/t-hb-8.png'),
                        poster_type_name   : "社交型-3",
                        poster_img_path:'',
                    },
                    {
                        is_default         : 1,
                        default_poster_mark: "price_two_cls",
                        avatar_position    : {x: 56, y: 32},
                        is_show_avatar     : 1,
                        is_show_nickname   : 1,
                        nickname_position  : {x: 68, y: 202, align: "left"},
                        name_slice_num     : 12,
                        share_hint         : "邀请你一起学习",
                        show_goods_img     : !0,
                        goods_position     : {x: 56, y: 332},
                        has_price_info     : !0,
                        title_slice_num    : 14,
                        text_wrap          : !0,
                        has_shop_mark      : !1,
                        qrcode_position    : {x: 56, y: 1056},
                        qrcode_size        : {w: 156, h: 156},
                        scan_code_hint     : "",
                        poster_url         : require('assets/t-hb-9.png'),
                        poster_type_name   : "价格型-2",
                        poster_img_path:'',
                    },
                ],
                template_list:[{
                    img_path:require('assets/hb3.png')
                },{
                    img_path:require('assets/hb2.png')
                },{
                    img_path:require('assets/hb5.png')
                },{
                    img_path:require('assets/hb1.png')
                },{
                    img_path:require('assets/hb6.png')
                },{
                    img_path:require('assets/hb7.png')
                },{
                    img_path:require('assets/hb8.png')
                },{
                    img_path:require('assets/hb9.png')
                }],
                hb_check:require('assets/hb-check.png'),
                active_index:0,
                show_modal:false,
                sugest_index:0,
                recommendText:["这门课程好棒啊！分享给你，每天都值得为它花时间！",
            "发现一门干货满满的好课！良心到想为它疯狂打Call！",
            "三千若水只为挑选最好的课程给你。点开看看吧，你会爱上它。",
            "嘀！今日份好课正在派送中，请扫描海报二维码查收哦~",
            "网友不面基也能一起学习！扫描二维码获取这份礼物，我陪你一起看课学习！一起努力！",
            "这个宝藏课程，其实我不太舍得分享出来，除你之外。",
            "这门课可是我的私人珍藏，我只舍得推荐给最珍贵的你！",
            "发现一门好课，非常通俗易懂，打开了我另一个角度的思考。",
            "这门课拓宽了我的思维方式，分享给你一起看，希望我们都能培养出自己的思维洞见。",
            "发现一门好课，涉猎的内容非常广。希望通过这门课，可以令你在知识交叉地带继续发现新的可能。",
             "这门课还不错，讲解深入浅出，条条大路通罗马，开始行动起来！祝你早日获得想要的知识！",
             "这门课讲的太好了！内容都是满满的干货！看起来简直欲罢不能！",
             "长时间困扰我的难题在这门课程中得以解决！感觉自己的知识储存又丰满了一些，难题也被拆解的干干净净！推荐给你！",
             "我刚刚看完了这门课，讲师的表达能力很到位，分享给你一起看~",
             "Hey~ 想分享一门好课给你，今天也要元气满满的学习呢！",
             "Hey~ 我刚刚看完一节好课，想分享给你一起看~ 相信在不久的将来，我们都可以成为更好自己！",
             "这门课我看完后收获很大，推荐给你，期待和你的课后交流！坚持学习！成长之路总是在坚持之中！",
             "这门课太棒了！打开了我的思维，从另一角度看问题！忍不住分享给你，期待我们能够一起打卡学习！",
             "看完这门课程，get到新知识的激动心情还未平复，忍不住想要分享这门课程给你！",
             "这门课程绝对值得沉浸其中，推荐给你！",
             "发现一门好课刷到根本停不下来！推荐给你，收获知识的感觉真的太棒啦！！",
             "这门课实在太强大了，启发了我全新的思考方式，推荐给你。",
             "优秀来自坚持和自律，共同进步在于交流和分享。 这门课让我收获匪浅，推荐给你！",
             "这门课让我学习了一个实用又有趣的技能！推荐给你~",
             "今日份学习打卡成功！该你看课打卡啦~",
             "获取知识是令人愉悦的时刻，这门课是我最近发现的宝藏，一起看看吧！",
             "最近看了一门不错的课，激发了我的思维，想把这门好课分享给你~ 共同进步！",
             "这门课给我了很大的触动和启发，分享给你，期待与你的课后交流，让我们一起知识共享！",
             "持续学习才能保持思想的鲜活~ 推荐给你一门课程看看~ 一起加油吧！",
             "每天一点小进步，促使我们成为更好的自己！我已经完成学习啦，你也快来一起吧！",
             "叮！今日份学习任务已完成！你也快来一起呀~",
             "呐~ 这份好课推荐给你，我的学习轨迹中需要有你陪伴啦~",
             "我今日份学习任务又完成啦， 成功解锁新知识！课程分享给你！快来快来~ 想和你一起UP！UP！发光发热！",
             "越自律越自由！已打卡今日份课程~ 优质内容满满的都是干货~ 推荐给你！",
             "推荐你看看这门课，获取新知识，跳出舒适圈，满足感满满！强烈推荐给你，学习之路希望有你的陪伴~!",
             "强力推荐这门课！一起来学习吧，想和你一起踏上通往成长型思维模式的路程！",
             "这门课对我的帮助实在太大了忍不住推荐给你！",
             "这门课程非常有价值，最好的课程推荐给最好的你！",
             "我非常喜欢的一门课程推荐给你，老师讲的很棒！相信我，听完会令你豁然开朗！",
             "今天打卡了这个课程，看完的一瞬间觉得自己受益匪浅，推荐给你！我们一起学习吧~",
             "今日你打卡学习了吗？我刚刚看完一门非常好的课程昵，分享给你~ 好课快快刷起来！",
             "最好的投资方式就是投资自己，用知识武装起来！",
             "希望我们能一起见证彼此的成长，一起来完成今日份学习吧~我正在学习这门课程，今日打卡成功！你也来加入吧！",
             "我怕送一般的礼物太俗气，选择送你精神食粮！一起学习吧！"]

            }
        },
        computed  : {
            posterData(){
                return this.posterMapInfo[this.active_index]
            },
            posterStyle(){
                return this.posterData.default_poster_mark || "user_custom"
            },
            sugest_str(){
                return this.recommendText[this.sugest_index]
            },
            qrcodeColor() {
                var e = {};
                switch (this.posterStyle) {
                    case "interact_one_cls":
                        e = {dark: "#3571FF", light: "#fff"};
                        break;
                    case "interact_two_cls":
                        e = {dark: "#507CFF", light: "#fff"};
                        break;
                    case "interact_three_cls":
                        e = {dark: "#333", light: "#FFEED2"};
                        break;
                    default:
                        e = {dark: "#000", light: "#fff"};
                }
                return e
            },
            linkhref(){
                return  this.shareInfo.share_url;
            },
        },
        components: {

        },
        mounted(){


        },
        methods:{
            timeCustomFormat,
            randomBgColor,
            initShare(){

                if(!this.shareInfo.share_img){
                    this.shareInfo.share_img = location.origin + require('assets/fm-1.jpg');
                }
                this.compressImg(this.shareInfo.share_img,(src) => {
                    this.shareInfo.share_img = src
                })
                var date_str =  timeCustomFormat(this.shareInfo.start_time,'YYYY-MM-DD HH:mm',true);
                this.shareInfo.pg_name = this.shareInfo.school_name;
                this.shareInfo.time = date_str;
                this.shareInfo.avator = this.shareInfo.speakers.avator;
                this.shareInfo.full_name = this.shareInfo.speakers.full_name;
                this.shareMethod(this.shareInfo)
            },
            imgToBlob (e) {
                var t = document.createElement("canvas"), n = t.getContext("2d"), r = new Image;
                return r.crossOrigin = "", new Promise((function (o, i) {
                    r.onerror = function () {
                        i("imgToBlob加载图片失败")
                    }, r.onload = function () {
                        t.height = r.height, t.width = r.width, n.drawImage(r, 0, 0), t.toBlob((function (e) {
                            try {
                                var t = URL.createObjectURL(e);
                                o(t)
                            } catch (e) {
                                i("imgToBlob转换Blob失败")
                            }
                        })), t = null
                    }, r.src = e
                }))
            },
            shareMethod(val){
                this.$nextTick(() => {
                    this.computeHeight();
                    this.setTemImgPath(this.active_index + 1);
                })
            },
            computeHeight(){
                var e = (document.documentElement.clientHeight || document.body.clientHeight) - document.getElementById("posterBottom").offsetHeight - 32;
                this.cardHeight = "".concat(.95 * e, "px");
            },
            setTemImgPath(index){

                if(this.posterData.poster_url){


                    this.compressImg(this.posterData.poster_url,(val) => {

                        this.$nextTick(() => {
                            this.setQrcode()
                        })

                    })
                }else{
                    this.$nextTick(() => {
                        this.setQrcode()
                    })
                }

            },
            imgFinished(){
                this.imgLoaded = true;

            },
            changeTemplate(index){
                if(index == this.active_index){
                    return
                }
                this.active_index = index;
                if(!this.posterData.poster_img_path){
                    this.qr_code_img_path = '';
                    this.imgLoaded = false;
                    this.setTemImgPath(index + 1);
                }
            },
            compressImg(path,fn){
                var canvas = document.createElement('canvas');
                var ctx = canvas.getContext('2d');
                var img = new Image();
                img.setAttribute('crossOrigin', 'anonymous');
                img.src = path;
                // 图片加载完毕之后进行压缩，然后上传
                if (img.complete) {
                    callback();
                } else {
                    img.onload = callback;
                }

                function callback() {
                    var data = compress(img);
                    fn && fn(data)
                    img = null;
                }

                function compress(img) {
                    var initSize = img.src.length;
                    var width = img.width;
                    var height = img.height;

                    //如果图片大于四百万像素，计算压缩比并将大小压至400万以下
                    var ratio;
                    if ((ratio = width * height / 2000000)>1) {
                        ratio = Math.sqrt(ratio);
                        width /= ratio;
                        height /= ratio;
                    }else {
                        ratio = 1;
                    }

                    canvas.width = width;
                    canvas.height = height;

                    //        铺底色
                    ctx.fillStyle = "#fff";
                    ctx.fillRect(0, 0, canvas.width, canvas.height);
                    ctx.drawImage(img, 0, 0, width,height);
                    //进行最小压缩
                    var ndata = canvas.toDataURL('image/jpeg');

                    return ndata;
                }
            },
            qrCodeLoaded(){

                this.$nextTick(() => {
                    if(this.posterData.poster_img_path){
                        return
                    }
                    html2canvas(document.querySelector("#commonPoster"),
                        {allowTaint: true,useCORS:true}).then(canvas => {
                        this.compressImg(canvas.toDataURL('image/jpeg',0.5),(src) => {
                            this.posterMapInfo[this.active_index].poster_img_path = src;

                        })
                    });
                })


            },
            setQrcode(){

                if (!location.origin) {
                    location.origin = location.origin = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port : '');
                }
                var shareUrl = this.shareInfo.share_url;
                var div = document.createElement('div');
                var code  = new QRCode(div, {
                    text        : shareUrl,
                    width:164,
                    height:164,
                    colorDark : this.qrcodeColor.dark,
                    colorLight : this.qrcodeColor.light,
                    correctLevel: QRCode.CorrectLevel.L
                });
                var code_canvas = code._el.querySelector("canvas");//获取生成二维码中的canvas，并将canvas转换成base64
                this.compressImg(code_canvas.toDataURL("image/jpeg"),(val) => {
                    this.qr_code_img_path = val;

                })
            },

            copyLink(){
                copy(this.linkhref,() => {
                    this.$message.success('复制成功，粘贴给你的朋友吧');
                })

            },
            copySugest(){
                copy(this.sugest_str,() => {
                    this.$message.success('文案复制成功');
                    this.show_modal = false
            })
            },
            shareTxt: function () {
                var e     = this.recommendText || [], t = Math.floor(Math.random() * e.length);
                this.sugest_index = t;
            }

        },
        watch:{
            shareInfo(val){
                this.initShare()
            },
        }

    }
</script>


<style scoped lang="scss" rel="stylesheet/scss">

    @font-face {
        font-family: "iconfont1";
                   /* Project id 511353 */
        src: url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'), url('//at.alicdn.com/t/font_511353_im9zd1qx2e8.woff?t=1628751079027') format('woff'), url('//at.alicdn.com/t/font_511353_im9zd1qx2e8.ttf?t=1628751079027') format('truetype');
    }

    .iconfont1 {
        font-family: "iconfont1" !important;
        font-size: 16px;
        font-style: normal;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    .icon-replace:before {
        content: "\e6d5";
    }
    .icon-recommend:before {
        content: "\e6d4";
    }

    #app-layout {
        position   : relative;
        margin     : 0 auto;
        max-width  : 480px;
        background : #f5f5f5;
        min-height: 100vh;
    }
    #app-layout.app-layout-hd{
        min-height: calc(100vh - 40px);
    }

    .loading-box{
        font-size             : .26rem;
        position              : absolute;
        top                   : 33%;
        left                  : 50%;
        margin                : auto;
        background            : rgba(0, 0, 0, 0.7);
        color                 : #fff;
        -webkit-transform     : translate(-50%, -50%);
        -ms-transform         : translate(-50%, -50%);
        transform             : translate(-50%, -50%);
        z-index               : 10000;
        -webkit-border-radius : .1rem;
        border-radius         : .1rem;
        white-space           : nowrap;
        max-width             : 6rem;
        overflow              : hidden;
        -o-text-overflow      : ellipsis;
        text-overflow         : ellipsis;
        text-align            : center;
        padding-top           : .73rem;
        height                : 2.4rem;
        width                 : 2.4rem;
        -webkit-box-sizing    : border-box;
        box-sizing            : border-box;
    }

    .loading-icon{
        width         : .6rem;
        height        : .6rem;
        margin-bottom : .3rem
    }

    @-webkit-keyframes loadingRotate {
        from {
            -webkit-transform : rotate(0);
            transform         : rotate(0)
        }
        to {
            -webkit-transform : rotate(360deg);
            transform         : rotate(360deg)
        }
    }

    @keyframes loadingRotate {
        from {
            -webkit-transform : rotate(0);
            transform         : rotate(0)
        }
        to {
            -webkit-transform : rotate(360deg);
            transform         : rotate(360deg)
        }
    }


    .new-card-alert {
        width              : 100%;
        height             : 1.44rem;
        background         : #fff;
        display            : -webkit-box;
        display            : -webkit-flex;
        display            : -ms-flexbox;
        display            : flex;
        -webkit-box-sizing : border-box;
        box-sizing         : border-box
    }

    .new-card-alert .card-item {
        -webkit-box-flex        : 1;
        -webkit-flex            : 1;
        -ms-flex                : 1;
        flex                    : 1;
        display                 : -webkit-box;
        display                 : -webkit-flex;
        display                 : -ms-flexbox;
        display                 : flex;
        text-align              : center;
        -webkit-box-pack        : center;
        -webkit-justify-content : center;
        -ms-flex-pack           : center;
        justify-content         : center
    }

    .new-card-alert .card-item img {
        width        : 0.96rem;
        height       : 0.96rem;
        display      : block;
        margin-right : 0.08rem;
        margin-top   : 0.24rem
    }
    .new-card-alert .card-item .common-item-title{
        color: #666666;
        font-size: 0.28rem;
        line-height: 1.44rem;
    }

    .root {
        position               : fixed;
        top                    : 0;
        right                  : 0;
        bottom                 : 0;
        left                   : 0;
        display                : -webkit-box;
        display                : -webkit-flex;
        display                : -ms-flexbox;
        display                : flex;
        -webkit-box-orient     : vertical;
        -webkit-box-direction  : normal;
        -webkit-flex-direction : column;
        -ms-flex-direction     : column;
        flex-direction         : column;
        -webkit-flex-wrap      : nowrap;
        -ms-flex-wrap          : nowrap;
        flex-wrap              : nowrap;
        overflow               : hidden;
        background             : #f5f5f5
    }

    .prohibitCopy {
        -webkit-touch-callout : none;
        -webkit-user-select   : none;
        -moz-user-select      : none;
        -ms-user-select       : none;
        user-select           : none
    }

    .invite-img-box {
        -webkit-box-flex        : 1;
        -webkit-flex            : 1;
        -ms-flex                : 1;
        flex                    : 1;
        display                 : -webkit-box;
        display                 : -webkit-flex;
        display                 : -ms-flexbox;
        display                 : flex;
        -webkit-box-orient      : vertical;
        -webkit-box-direction   : normal;
        -webkit-flex-direction  : column;
        -ms-flex-direction      : column;
        flex-direction          : column;
        -webkit-box-pack        : center;
        -webkit-justify-content : center;
        -ms-flex-pack           : center;
        justify-content         : center;
        -webkit-box-sizing      : border-box;
        box-sizing              : border-box
    }


    .inviteCardBox {
        text-align : center
    }


    .inviteCardBox .inviteCard {
        position : relative;
        z-index  : 3;
        height   : 8rem;
        margin   : auto;
        display  : block
    }
    .custominviteCardBox{
        display: flex;
        align-items: center;
        justify-content: center;
        .inviteCard{
            height:auto;
        }
    }

    .inviteCardBox .inviteCard.small-img {
        height : 6.12rem
    }

    .inviteCardBox .changeBtn {
        position              : absolute;
        right                 : 0;
        top                   : 4rem;
        z-index               : 5;
        padding               : 0.28rem 0.24rem;
        width                 : 0.32rem;
        background            : #fff;
        -webkit-box-shadow    : 0 0 0.2rem 0 rgba(0, 0, 0, 0.08);
        box-shadow            : 0 0 0.2rem 0 rgba(0, 0, 0, 0.08);
        -webkit-border-radius : 0.16rem 0 0 0.16rem;
        border-radius         : 0.16rem 0 0 0.16rem;
        margin-bottom         : 0.24rem;
        text-align            : center;
        font-size             : 0.24rem
    }

    .inviteCardBox .replaceIcon {
        color        : #105cfb;
        margin-right : 0.08rem
    }

    .inviteCard {

    }

    .ios-img-touch {
        -webkit-touch-callout : initial
    }

    .inviteCardImg {
        opacity           : 0;
        -webkit-transform : translateY(-5rem);
        -ms-transform     : translateY(-5rem);
        transform         : translateY(-5rem)
    }

    .inviteCardImgFin {
        opacity               : 1;
        -webkit-transform     : translateY(0);
        -ms-transform         : translateY(0);
        transform             : translateY(0);
        -webkit-box-shadow    : 0rem 0.12rem 0.22rem 0rem rgba(0, 0, 0, 0.08);
        box-shadow            : 0rem 0.12rem 0.22rem 0rem rgba(0, 0, 0, 0.08);
        -webkit-border-radius : 0.16rem;
        border-radius         : 0.16rem
    }

    .saveDes {
        width                   : 100%;
        height                  : 0.36rem;
        line-height             : 0.36rem;
        color                   : #333;
        font-size               : 0.26rem;
        text-align              : center;
        display                 : -webkit-box;
        display                 : -webkit-flex;
        display                 : -ms-flexbox;
        display                 : flex;
        -webkit-box-pack        : center;
        -webkit-justify-content : center;
        -ms-flex-pack           : center;
        justify-content         : center;
        margin-top              : 0.24rem
    }

    .saveDes img {
        display      : block;
        width        : 0.32rem;
        height       : 0.32rem;
        position     : relative;
        top          : 0.02rem;
        margin-right : 0.08rem
    }

    .bottomScroll {
        position           : relative;
        width              : 100%;
        overflow-x         : scroll;
        overflow-y         : hidden;
        padding            : 0.12rem 0 0.12rem 0.32rem;
        -webkit-box-sizing : border-box;
        box-sizing         : border-box;
        background         : #fff
    }

    .bottomScroll::-webkit-scrollbar {
        display : none
    }

    .bottomScrollBar::-webkit-scrollbar {
        display : block;
        height  : 10px
    }

    .bottomScroll:horizontal {
        display : none
    }

    .scrollInner {
        height     : 1.56rem;
        list-style : none;
        display    : -webkit-box;
        display    : -webkit-flex;
        display    : -ms-flexbox;
        display    : flex
    }

    .scrollInner li {
        position                : relative;
        display                 : -webkit-box;
        display                 : -webkit-flex;
        display                 : -ms-flexbox;
        display                 : flex;
        -webkit-align-content   : center;
        -ms-flex-line-pack      : center;
        align-content           : center;
        -webkit-box-pack        : center;
        -webkit-justify-content : center;
        -ms-flex-pack           : center;
        justify-content         : center;
        margin-right            : 0.24rem;
        -webkit-border-radius   : 0.12rem;
        border-radius           : 0.12rem;
        -webkit-box-sizing      : border-box;
        box-sizing              : border-box;
        width                   : 0.92rem;
        height                  : 1.54rem;
        padding                 : 0.03rem;
        border                  : 0.03rem solid transparent;
        cursor: pointer;
        .rightIcon{
            display:none
        }
    }

    .scrollInner li:last-child {
        margin-right : 0
    }

    .scrollInner li.select-border {
        border                : 0.03rem solid #105cfb;
        -webkit-border-radius : 0.16rem;
        border-radius         : 0.16rem;
        .rightIcon{
            display:block
        }
    }

    .scrollInner li .backImg-box {
        width                   : 0.8rem;
        height                  : 1.42rem;
        -webkit-border-radius   : 0.12rem;
        border-radius           : 0.12rem;
        position                : relative;
        overflow                : hidden;
        -webkit-background-size : 100% 100%;
        background-size         : 100% 100%;
        background-repeat       : no-repeat
    }
    .scrollInner li .user-custom-backImg-box{
        background-size: contain;
        background-position:center;

    }

    .scrollInner li .backImg-box .rightIcon {
        position : absolute;
        right    : -0.01rem;
        bottom   : -0.01rem;
        width    : 0.32rem;
        height   : 0.32rem
    }

    .scrollInner li img.backImg {
        width  : 100%;
        height : 100%
    }

    .scrollInner li .iconfont {
        font-size : 0.48rem
    }

    .posterBottom {
        background-color : #fff;
        padding-bottom   : constant(safe-area-inset-bottom);
        padding-bottom   : env(safe-area-inset-bottom)
    }

    .bottomScrollWrap {
        position : relative;
        width    : 100%
    }
    .bottomScroll::-webkit-scrollbar {
        display: none;
    }

    .recommendBtn {
        position                : absolute;
        top                     : 0;
        right                   : 0;
        display                 : -webkit-box;
        display                 : -webkit-flex;
        display                 : -ms-flexbox;
        display                 : flex;
        -webkit-box-pack        : center;
        -webkit-justify-content : center;
        -ms-flex-pack           : center;
        justify-content         : center;
        -webkit-box-orient      : vertical;
        -webkit-box-direction   : normal;
        -webkit-flex-direction  : column;
        -ms-flex-direction      : column;
        flex-direction          : column;
        -webkit-box-align       : center;
        -webkit-align-items     : center;
        -ms-flex-align          : center;
        align-items             : center;
        font-size               : 0.24rem;
        width                   : 1.44rem;
        height                  : 1.76rem;
        background              : #fff
    }

    .recommendBtn .box-shadow {
        position           : absolute;
        width              : 100%;
        height             : 100%;
        top                : 0;
        left               : 0;
        -webkit-box-shadow : -0.16rem 0rem 0.16rem -0.16rem rgba(0, 0, 0, 0.3);
        box-shadow         : -0.16rem 0rem 0.16rem -0.16rem rgba(0, 0, 0, 0.3)
    }

    .recommendBtn img {
        width  : 0.38rem;
        height : 0.38rem
    }

    .recommendBtn span {
        display    : block;
        margin-top : 0.18rem
    }

    .recommendBtn .recommendIcon {
        font-size : 22px
    }

    .recommendBtnCenter {
        width : 100%

    }

    #poster-canvas{
        display: none;
    }

    .commonPosterWrap {
        position : relative;
        z-index  : -10;
        font-family: 'PingFangSC', 'PingFangHK', 'PingFangTC', '微软雅黑', sans-serif;
        line-height:normal;
        *{
            box-sizing: content-box;
        }
    }

    .commonPoster {
        position                : absolute;
        top                     : 0;
        left                    : 0;
        display                 : -webkit-box;
        display                 : -webkit-flex;
        display                 : -ms-flexbox;
        display                 : flex;
        -webkit-box-orient      : vertical;
        -webkit-box-direction   : normal;
        -webkit-flex-direction  : column;
        -ms-flex-direction      : column;
        flex-direction          : column;
        -webkit-box-align       : center;
        -webkit-align-items     : center;
        -ms-flex-align          : center;
        align-items             : center;
        width                   : 750px;
        height                  : 1334px;
        background-repeat       : no-repeat;
        -webkit-background-size : 100% 100%;
        background-size         : 100% 100%;
        -webkit-box-sizing      : border-box;
        box-sizing              : border-box;
    }


    .posterImg{
        position : absolute;
        top      : 0;
        left     : 0;
        z-index  : 0;
        width    : 750px;
        height   : 1334px
    }

    .userAvatarWrap{
        position                : absolute;
        display                 : -webkit-box;
        display                 : -webkit-flex;
        display                 : -ms-flexbox;
        display                 : flex;
        -webkit-box-pack        : center;
        -webkit-justify-content : center;
        -ms-flex-pack           : center;
        justify-content         : center;
        -webkit-box-align       : center;
        -webkit-align-items     : center;
        -ms-flex-align          : center;
        align-items             : center;
        width                   : 160px;
        height                  : 160px;
        -webkit-box-sizing      : border-box;
        box-sizing              : border-box;

        -webkit-border-radius : 50%;
        border-radius         : 50%;





        font-size: 40px;
        font-weight: bold;
        color: #fff;
    }

    .userAvatar{
        width                 : 100%;
        height                : 100%;
        -webkit-border-radius : 50%;
        border-radius         : 50%;
        z-index               : 1
    }

    .staticPostion {
        position : static !important
    }

    .nickName {
        position           : absolute;
        font-size          : 40px;
        color              : #fff;
        z-index            : 1;
        text-align         : center;
        -webkit-box-sizing : border-box;
        box-sizing         : border-box
    }

    .nickName .nickNameTxt {
        font-size   : 44px;
        font-weight : 600
    }

    .nickName span{
        display : block
    }

    .goodsTitle {
        color              : #333;
        font-weight        : 600;
        line-height        : 48px;
        padding            : 26px 32px;
        font-size          : 32px;
        -webkit-box-sizing : border-box;
        box-sizing         : border-box;
        height             : 48px;
        overflow           : hidden;
        font-family        : 'PingFangSC', 'PingFangHK', 'PingFangTC', '微软雅黑', Arial, serif;
        letter-spacing     : 1px
    }

    .alive_general_cls .aliveStartTime {
        top: 904px;
        color: #999;
        font-weight: 400;
        background: none;
        text-align: left;
        padding: 0;
        font-size: 28px;
        position: absolute;
    }

    .textLine {
        border-bottom : 2px solid #eee;
        width         : 80%;
        margin        : 0 auto 6px;
        height        : 60px
    }

    .goodsIntro {
        position               : absolute;
        width                  : 640px;
        height                 : 636px;
        display                : -webkit-box;
        display                : -webkit-flex;
        display                : -ms-flexbox;
        display                : flex;
        -webkit-box-orient     : vertical;
        -webkit-box-direction  : normal;
        -webkit-flex-direction : column;
        -ms-flex-direction     : column;
        flex-direction         : column;
        -webkit-box-align      : center;
        -webkit-align-items    : center;
        -ms-flex-align         : center;
        align-items            : center
    }

    .goodsIntro .goodsImgBox {
        position : relative;
        width    : 640px;
        height   : 480px;
        -webkit-border-radius : 16px 16px 0px 0px;
        border-radius         : 16px 16px 0px 0px;
        background-size:cover;
        background-position:center;
    }

    .goodsIntro .goodsImg {
        width                 : 100%;
        height                : 100%;
        -webkit-border-radius : 16px 16px 0px 0px;
        border-radius         : 16px 16px 0px 0px;
        border                : none
    }

    .goodsIntro .shopNameMark {
        position              : absolute;
        top                   : 32px;
        right                 : -8px;
        font-size             : 32px;
        font-weight           : 600;
        color                 : #fff;
        height                : 56px;
        line-height           : 56px;
        text-align            : center;
        padding               : 0 22px;
        background            : -webkit-gradient(linear, left top, right top, from(#fe8455), to(#fb5736));
        background            : -webkit-linear-gradient(left, #fe8455 0%, #fb5736 100%);
        background            : -o-linear-gradient(left, #fe8455 0%, #fb5736 100%);
        background            : linear-gradient(90deg, #fe8455 0%, #fb5736 100%);
        -webkit-border-radius : 0px 6px 0px 16px;
        border-radius         : 0px 6px 0px 16px;
        -webkit-box-sizing    : border-box;
        box-sizing            : border-box;
        &:after{
            content: '';
            position: absolute;
            top: 56px;
            right: 0px;
            border: 4px solid #fe8455;
            border-right-color: transparent;
            border-bottom-color: transparent;
        }
    }

    .goodsIntro .goodsAddInfo {
        padding                 : 16px 32px;
        width                   : 100%;
        -webkit-background-size : 100% 100%;
        background-size         : 100%;
        -webkit-box-sizing      : border-box;
        box-sizing              : border-box
    }


    .goodsIntro .goodsPrice {
        display                 : -webkit-box;
        display                 : -webkit-flex;
        display                 : -ms-flexbox;
        display                 : flex;
        -webkit-box-pack        : justify;
        -webkit-justify-content : space-between;
        -ms-flex-pack           : justify;
        justify-content         : space-between;
    }

    .goodsIntro .priceInfo {
        display                 : -webkit-box;
        display                 : -webkit-flex;
        display                 : -ms-flexbox;
        display                 : flex;
        -webkit-box-pack        : start;
        -webkit-justify-content : flex-start;
        -ms-flex-pack           : start;
        justify-content         : flex-start
    }

    .goodsIntro .goodsTitle {
        padding    : 0;
        color      : #6f3811;
        word-break : break-all;
        height     : auto
    }

    .goodsIntro .activityMark {
        max-width             : 200px;
        height                : 48px;
        line-height           : 48px;
        font-size             : 28px;
        font-weight           : 500;
        color                 : #fff;
        text-align            : center;
        background            : -webkit-gradient(linear, right top, left top, from(#fd0000), to(#f70));
        background            : -webkit-linear-gradient(right, #fd0000 0%, #f70 100%);
        background            : -o-linear-gradient(right, #fd0000 0%, #f70 100%);
        background            : linear-gradient(270deg, #fd0000 0%, #f70 100%);
        -webkit-border-radius : 16px 36px 36px 0px;
        border-radius         : 16px 36px 36px 0px;
        padding               : 0 16px
    }

    .goodsIntro .linePrice {
        position    : relative;
        font-size   : 32px;
        font-weight : bold;
        color       : #666;
        line-height : 3
    }

    .goodsIntro .linePrice.is-price-one {
        height      : 64px;
        line-height : 64px
    }

    .goodsIntro .linePrice .line {
        position      : absolute;
        top           : 50%;
        width         : 100%;
        display       : inline-block;
        border-bottom : 2px solid #666
    }

    .goodsIntro .price{
        font-size    : 0;
        color        : #fd0300;
        margin-right : 16px
    }
    .interact_two_cls .goodsIntro .price,.price_two_cls .goodsIntro .price{
        color        : #fff;

    }

    .goodsIntro .price.is-price-one .price-free{
        font-size : 32px;
        line-height: 48px;
    }

    .goodsIntro .price .price-free {
        font-size : 40px
    }

    .goodsIntro .price.is-price-one span{
        font-size : 32px
    }

    .goodsIntro .price span {
        font-size : 40px;
        display   : inline-block
    }

    .goodsIntro .price .font-price-num {
        font-size : 68px
    }

    .goodsIntro .price .font-price-num.is-price-one {
        font-size   : 40px;
        font-weight : bold
    }

    .goodsIntro .font-price-small {
        font-weight : bold
    }

    .hintInfo {
        font-size    : 26px;
        color        : #999;
        margin-right : -2px
    }

    .recommendBox {
        position : absolute;
        top      : 480px;
        left     : 60px
    }

    .recommendBox .goodsTitle{
        padding        : 0px 32px;
        font-size      : 36px;
        display        : table-cell;
        vertical-align : middle;
        word-break     : break-all;
        height         : 94px;
        width          : 640px;
        margin-top     : 4px;
    }

    .recommendBox .goodsTitle.is-multi-line-title {
        font-size   : 28px;
        line-height : 36px
    }

    .recommendTxt {
        width       : 576px;
        height      : 240px;
        font-size   : 32px;
        font-weight : 500;
        color       : #333;
        line-height : 48px;
        padding     : 24px;
        height      : 234px
    }

    .motive_text {
        max-height       : 192px;
        -o-text-overflow : ellipsis;
        text-overflow    : ellipsis;
        overflow         : hidden;
        letter-spacing   : 2px
    }

    .author {
        text-align : right
    }

    .qrcodeMain{
        position                : absolute;
        display                 : -webkit-box;
        display                 : -webkit-flex;
        display                 : -ms-flexbox;
        display                 : flex;
        -webkit-box-orient      : vertical;
        -webkit-box-direction   : normal;
        -webkit-flex-direction  : column;
        -ms-flex-direction      : column;
        flex-direction          : column;
        -webkit-box-pack        : center;
        -webkit-justify-content : center;
        -ms-flex-pack           : center;
        justify-content         : center;
        -webkit-box-align       : center;
        -webkit-align-items     : center;
        -ms-flex-align          : center;
        align-items             : center;
        text-align              : center;
        color                   : #333;
        font-size               : 24px
    }

    .qrcodeMain .qrcodeShopName {
        font-size   : 32px;
        font-weight : 600
    }

    .qrcodeMain .qrcode {
        width                 : 168px;
        height                : 168px;
        margin                : 6px auto;
        padding:8px;
        background:#fff;
        -webkit-border-radius : 14px;
        border-radius         : 14px
    }

    .qrcodeMain .scanCodeHint {
        font-size               : 24px;
        font-weight             : 600;
        display                 : -webkit-box;
        display                 : -webkit-flex;
        display                 : -ms-flexbox;
        display                 : flex;
        -webkit-box-pack        : center;
        -webkit-justify-content : center;
        -ms-flex-pack           : center;
        justify-content         : center;
        -webkit-box-align       : center;
        -webkit-align-items     : center;
        -ms-flex-align          : center;
        align-items             : center;
        -webkit-background-size : 100% 100%;
        background-size         : 100%
    }

    .qrcodeMain .grapLine {
        width                 : 64px;
        height                : 8px;
        background            : #fff;
        -webkit-border-radius : 4px;
        border-radius         : 4px;
        margin                : 18px 0 15px
    }

    .qrcodeMain .priceHint{
        color      : #999;
        font-size  : 24px;
        margin-top : 6px
    }

    .qrcodeMain span {
        display : inline-block
    }

    .study_cls .nickName{
        color : #333
    }

    .study_cls .qrcodeMain {
        width : 100%
    }

    .price_one_cls .goodsIntro, .price_one_cls .nickName {
        width : 684px
    }

    .price_one_cls .goodsTitle{
        color              : #333;
        font-weight        : 600;
        line-height        : 48px;
        font-size          : 32px;
        -webkit-box-sizing : border-box;
        box-sizing         : border-box;
        height             : 48px;
        word-break         : break-all
    }

    .price_one_cls .goodsTitle.is-multi-line-title{
        height      : 84px;
        line-height : 42px
    }

    .price_one_cls .goodsAddInfo {
        -webkit-border-radius : 0px 0px 24px 24px;
        border-radius         : 0px 0px 24px 24px;
    }

    .price_one_cls .goodsImgBox {
        margin : -32px auto 0
    }

    .price_one_cls .priceHint, .price_one_cls .hintInfo {
        color : #993800
    }

    .price_one_cls .qrcodeMain {
        width : 684px
    }

    .price_one_cls .qrcode {
        margin : 0 auto 16px
    }

    .price_two_cls .goodsIntro {
        width : 640px
    }

    .price_two_cls .goodsIntro .goodsAddInfo{
        border-radius: 0 0 20px 20px;
        padding: 16px 32px;
        background              : url("data:image/png;base64,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") center no-repeat;
        -webkit-background-size : cover;
        background-size         : cover
    }

    .price_two_cls .goodsTitle {
        padding                 : 0px;
        display                 : table-cell;
        vertical-align          : middle;
        width                   : 640px;
        word-break              : break-all;
        color                   : #fff;
        font-weight             : 500;
        height                  : 48px;

    }

    .price_two_cls .goodsTitle.is-multi-line-title {
        height : 120px
    }

    .price_two_cls .goodsAddInfo {
        padding : 0
    }

    .price_two_cls .price {
        color : #fe447b
    }

    .price_two_cls .activityMark {
        background            : -webkit-gradient(linear, right top, left top, from(#fe2c65), to(#ff8ac6));
        background            : -webkit-linear-gradient(right, #fe2c65 0%, #ff8ac6 100%);
        background            : -o-linear-gradient(right, #fe2c65 0%, #ff8ac6 100%);
        background            : linear-gradient(270deg, #fe2c65 0%, #ff8ac6 100%);
        -webkit-border-radius : 16px 36px 36px 0px;
        border-radius         : 16px 36px 36px 0px
    }

    .price_two_cls .qrcodeMain {
        width               : 640px;
        padding-top         : 60px;
        -webkit-box-align   : start;
        -webkit-align-items : flex-start;
        -ms-flex-align      : start;
        align-items         : flex-start
    }

    .price_two_cls .qrcode {
        position : absolute;
        right    : 0;
        top      : 26px
    }
    .interact_one_cls .goodsImgBox{
        -webkit-border-radius : 16px;
        border-radius         : 16px
    }

    .interact_one_cls .goodsImg {
        -webkit-border-radius : 16px;
        border-radius         : 16px
    }

    .interact_one_cls .goodsTitle {
        text-align : center;
        margin     : 0 auto;
        color      : #333;
        height     : 96px;
        overflow   : hidden
    }

    .interact_one_cls .qrcode {
        border : 8px solid #2f8cfe;
    }

    .interact_one_cls .shopNameMark,.alive_specific_cls .shopNameMark{
        background : -webkit-gradient(linear, left top, right top, from(#57a1ff), to(#1883ff));
        background : -webkit-linear-gradient(left, #57a1ff 0%, #1883ff 100%);
        background : -o-linear-gradient(left, #57a1ff 0%, #1883ff 100%);
        background : linear-gradient(90deg, #57a1ff 0%, #1883ff 100%);
        &:after{
            border: 4px solid #57a1ff;
            border-right-color: transparent;
            border-bottom-color: transparent;

        }
    }
    .interact_one_cls .shopNameTime{

        &:before { /*做一个书签效果*/
            font-size             : 32px;
            font-weight           : 600;
            position: absolute; /*必须*/
            bottom:32px;
            left: -8px;
            z-index: 1;
            height: 0;
            padding-right: 20px;
            font-weight: bold;
            line-height: 0;
            color: #fff;
            border: 30px solid #57a1ff;
            border-right-color: transparent; /*右边框透明，变成空缺的角*/
            content:attr(data-time);
        }
        &:after { /*书签的夹角*/
            content: '';
            position: absolute;
            bottom:24px;
            left: -8px;
            border: 4px solid #57a1ff;
            border-left-color: transparent;
            border-bottom-color: transparent;
        }
    }

    .interact_one_cls .nickName {
        width : 684px
    }

    .interact_two_cls .goodsAddInfo {
        margin-top            : -2px;
        height                : 140px;
        -webkit-border-radius : 0px 0px 24px 24px;
        border-radius         : 0px 0px 24px 24px;
    }

    .interact_two_cls .goodsTitle {
        color      : #fff;
        max-height : 96px;
        height     : auto;
        overflow   : hidden
    }

    .interact_two_cls .qrcodeMain {
        -webkit-box-align   : start;
        -webkit-align-items : flex-start;
        -ms-flex-align      : start;
        align-items         : flex-start;
        width               : 640px;
        margin-top          : 56px;
        color               : #fff
    }

    .interact_two_cls .qrcode {
        position : absolute;
        right    : 0;
        top      : -28px
    }

    .interact_two_cls .scanCodeHint{
        font-size  : 32px;
        text-align : left;
        width      : 256px
    }

    .interact_three_cls .userAvatar {
        position              : absolute;
        -webkit-border-radius : 0;
        border-radius         : 0;
        z-index               : 0
    }

    .interact_three_cls .avatarBg {
        position : absolute;
        z-index  : 2
    }

    .interact_three_cls .nickName {
        color : #ffcf97
    }

    .interact_three_cls .posterMain {
        position : absolute;
        top      : 456px;
        width    : 672px;
        height   : 802px
    }

    .interact_three_cls .goodsAddInfo {
        margin     : 0;
        padding    : 0;
        width      : auto;
        max-width  : 100%;
        text-align : center
    }

    .interact_three_cls .goodsTitle {
        margin             : 0 auto;
        color              : #333;
        overflow           : hidden;
        padding            : 0 26px;
        line-height        : 48px;
        -webkit-box-sizing : border-box;
        box-sizing         : border-box;
        letter-spacing     : 1px
    }

    .interact_three_cls .aliveStartTime {
        margin             : 0 auto;
        color              : #333;
        overflow           : hidden;
        padding            : 0 26px;
        font-size:32px;
        font-weight:bold;
        line-height        : 48px;
        -webkit-box-sizing : border-box;
        box-sizing         : border-box;
        letter-spacing     : 1px
    }

    .interact_three_cls .qrcodeMain {
        width : 100%
    }

    .interact_three_cls .qrcode {
        margin : 24px auto 40px;
        width  : 256px;
        height : 256px
    }

    .entity_cls .userAvatarWrap {
        width                 : 96px;
        height                : 96px;
        -webkit-border-radius : 50%;
        border-radius         : 50%;
        border                : 4px solid #ff8205
    }

    .entity_cls .nickName {
        font-size : 28px;
        color     : #333
    }

    .entity_cls .nickNameTxt {
        font-size : 32px
    }

    .entity_cls .goodsAddInfo {
        position : relative
    }

    .entity_cls .goodsImgBox {
        width  : 622px;
        height : 622px
    }

    .entity_cls .goodsImg{
        width                 : 622px;
        height                : 622px;
        -webkit-border-radius : 16px;
        border-radius         : 16px;
        border                : 2px solid #eee
    }

    .entity_cls .shopNameMark {
        top         : 2px;
        right       : -2px;
        font-size   : 28px;
        font-weight : 400;
        background  : #ff8205
    }

    .entity_cls .goodsPrice {
        -webkit-box-pack        : start;
        -webkit-justify-content : flex-start;
        -ms-flex-pack           : start;
        justify-content         : flex-start
    }

    .entity_cls .goodsTitle {
        position    : absolute;
        top         : 140px;
        height      : 96px;
        width       : 576px;
        color       : #333;
        font-weight : 500
    }

    .entity_cls .linePrice {
        line-height : 3.6
    }

    .entity_cls .activityMark {
        margin-left : 16px;
        background  : -webkit-gradient(linear, right top, left top, from(#ff8205), to(#ffb405));
        background  : -webkit-linear-gradient(right, #ff8205 0%, #ffb405 100%);
        background  : -o-linear-gradient(right, #ff8205 0%, #ffb405 100%);
        background  : linear-gradient(270deg, #ff8205 0%, #ffb405 100%)
    }

    .entity_cls .price {
        color : #ff8205
    }

    .entity_cls .qrcodeMain {
        -webkit-box-align   : start;
        -webkit-align-items : flex-start;
        -ms-flex-align      : start;
        align-items         : flex-start;
        width               : 654px;
        padding-left        : 216px;
        -webkit-box-sizing  : border-box;
        box-sizing          : border-box
    }

    .entity_cls .qrcode {
        position : absolute;
        left     : 32px
    }

    .entity_cls .scanCodeHint {
        font-weight : 400
    }

    .alive_cls .userAvatarWrap {
        width  : 128px;
        height : 128px
    }

    .alive_cls .nickName {
        font-size              : 40px;
        color                  : #333;
        display                : -webkit-box;
        display                : -webkit-flex;
        display                : -ms-flexbox;
        display                : flex;
        -webkit-box-orient     : vertical;
        -webkit-box-direction  : normal;
        -webkit-flex-direction : column;
        -ms-flex-direction     : column;
        flex-direction         : column
    }

    .alive_cls .nickName span {
        display : inline-block
    }

    .alive_cls .share_hint {
        font-size   : 36px;
        font-weight : 500
    }

    .alive_cls .shopNameMark{
        top         : 548px;
        font-size   : 24px;
        font-weight : 600;
        color       : #105cfb;
        background  : none;
        padding     : 0;
        line-height : 24px
    }

    .alive_cls .goodsIntro {
        width  : 688px;
        height : 580px
    }

    .alive_cls .goodsImgBox {
        width  : 688px;
        height : 516px
    }
    .alive_cls .goodsImgBox{
        -webkit-border-radius : 16px;
        border-radius         : 16px
    }

    .alive_cls .goodsImg {
        -webkit-border-radius : 16px;
        border-radius         : 16px
    }

    .alive_cls .goodsAddInfo {
        padding : 0
    }

    .alive_cls .goodsTitle {
        position    : absolute;
        top         : 612px;
        width       : 688px;
        font-size   : 44px;
        font-weight : 600;
        color       : #3d3d54;
        line-height : 66px;
        height      : auto;
        word-break  : break-all
    }

    .alive_cls .goodsTitle.is-multi-line-title {
        height : 132px
    }

    .alive_cls .aliveStartTime {
        position    : absolute;
        left        : 90px;
        top         : 1126px;
        font-size   : 32px;
        font-weight : 600;
        color       : #3d3d54
    }

    .alive_cls .qrcode {
        -webkit-border-radius : 0;
        border-radius         : 0;
        margin-top            : 0
    }

    .user_custom .userAvatarWrap {
        width  : 90px;
        height : 90px
    }

    .user_custom .userAvatar {
        -webkit-border-radius : inherit;
        border-radius         : inherit
    }

    .user_custom .goodsImgBox, .user_custom .goodsIntro, .user_custom .goodsImg {
        width  : 612px;
        height : 459px
    }

    .user_custom .price {
        color     : #ff8533;
        font-size : 500
    }

    .user_custom .goodsTitle{
        position  : absolute;
        top       : 100px;
        width     : 550px;
        color     : #333;
        font-size : 32px
    }

    .user_custom .nickNameTxt {
        font-size   : 32px;
        line-height : 45px;
        font-weight : 500
    }

    .user_custom .goodsAddInfo {
        position              : relative;
        height                : 208px;
        background            : #fff;
        -webkit-border-radius : 0px 0px 13px 13px;
        border-radius         : 0px 0px 13px 13px
    }

    .user_custom .goodsPrice {
        margin : 0 0 80px
    }

    .user_custom .qrcodeMain {
        -webkit-box-orient     : horizontal;
        -webkit-box-direction  : normal;
        -webkit-flex-direction : row;
        -ms-flex-direction     : row;
        flex-direction         : row
    }

    .user_custom .qrcode {
        -webkit-border-radius : 0;
        border-radius         : 0
    }

    .user_custom .fingerPrint {
        position : absolute;
        width    : 140px;
        height   : 140px
    }

    .alive_general_cls .userAvatarWrap {
        width  : 80px;
        height : 80px
    }

    .alive_general_cls .posterMain .goodsImgBox, .alive_general_cls .posterMain .goodsIntro, .alive_general_cls .posterMain .goodsImg {
        width                 : 750px;
        height                : 562px;
        -webkit-border-radius : 0 0 0 0;
        border-radius         : 0 0 0 0;
    }

    .alive_general_cls .posterMain .shopNameMark {
        top         : 958px;
        left        : 32px;
        color       : #999;
        font-weight : 400;
        background  : none;
        text-align  : left;
        padding     : 0;
        font-size   : 28px;
    }

    .alive_general_cls .posterMain .scanCodeHint {
        font-size   : 20px;
        color       : #333;
        font-weight : 500;
        opacity     : 0.39;
        position    : relative;
        top         : -3px
    }

    .alive_general_cls .nickName, .alive_general_cls .nickNameTxt, .alive_general_cls .share_hint{
        font-size   : 32px;
        font-weight : 400;
        color       : #666;
        display     : -webkit-box;
        display     : -webkit-flex;
        display     : -ms-flexbox;
        display     : flex
    }


    .alive_general_cls .goodsAddInfo{
        padding:0 32px;
    }

    .alive_general_cls .goodsTitle {
        position    : absolute;
        top         : 846px;
        width       : 686px;
        color       : #333;
        font-size   : 36px;
        line-height : 48px
    }

    .alive_specific_cls .userAvatarWrap {
        width                 : 88px;
        height                : 88px;
        border                : 4px solid #ced7ea;
        -webkit-box-sizing    : border-box;
        box-sizing            : border-box;
        -webkit-border-radius : 100%;
        border-radius         : 100%;
        -webkit-transform     : scale(0.99);
        -ms-transform         : scale(0.99);
        transform             : scale(0.99)
    }

    .alive_specific_cls .posterMain .goodsImgBox, .alive_specific_cls .posterMain .goodsIntro, .alive_specific_cls .posterMain .goodsImg {
        width                 : 720px;
        height                : 540px;
        -webkit-box-sizing    : border-box;
        box-sizing            : border-box;
        -webkit-border-radius : 16px;
        border-radius         : 16px
    }

    .alive_specific_cls .posterMain .shopNameMark {

    }

    .alive_specific_cls .posterMain .scanCodeHint {
        font-size   : 24px;
        color       : #2d3f66;
        font-weight : 500
    }

    .alive_specific_cls .nickNameTxt {
        font-size   : 28px;
        font-weight : 600;
        color       : #2d3f66
    }

    .alive_specific_cls .share_hint {
        font-size   : 24px;
        font-weight : 500;
        color       : #2d3f66;
        padding-top : 6px
    }

    .alive_specific_cls .aliveStartTime {
        position    : absolute;
        left        : 56px;
        top         : 1032px;
        font-size   : 28px;
        color       : #2d3f66;
        font-weight : 600
    }

    .recommendWrap {
        *{
            box-sizing: content-box;
        }
        position                : fixed;
        top                     : 0;
        left                    : 0;
        z-index                 : 5;
        display                 : -webkit-box;
        display                 : -webkit-flex;
        display                 : -ms-flexbox;
        display                 : flex;
        -webkit-box-orient      : vertical;
        -webkit-box-direction   : normal;
        -webkit-flex-direction  : column;
        -ms-flex-direction      : column;
        flex-direction          : column;
        -webkit-box-pack        : center;
        -webkit-justify-content : center;
        -ms-flex-pack           : center;
        justify-content         : center;
        -webkit-box-align       : center;
        -webkit-align-items     : center;
        -ms-flex-align          : center;
        align-items             : center;
        width                   : 100%;
        height                  : 100vh;
        background              : rgba(51, 51, 51, 0.7);
        span{
            display : inline-block
        }

    }

    .recommendClose{
        position : absolute;
        top      : 0.16rem;
        right    : 0.16rem;
        width    : 0.4rem;
        height   : 0.4rem
    }

    .replaceIcon{
        color        : #105cfb;
        display      : inline-block;
        margin-right : 0.1rem
    }

    .recommend{
        position              : relative;
        text-align            : center;
        width                 : 5.9rem;
        max-height            : 5.8rem;
        background            : #fff;
        -webkit-border-radius : 0.24rem;
        border-radius         : 0.24rem;
        font-size             : 0.28rem;
        padding               : 0.48rem 0.34rem;
        color                 : #333
    }

    .recommend .title{
        font-size   : 0.36rem;
        font-weight : 500;
        height      : 0.48rem
    }

    .recommend .sideTitle{
        width       : 4.94rem;
        padding     : 0.24rem 0.14rem;
        font-size   : 0.24rem;
        line-height : 0.36rem;
        margin      : 0 auto
    }

    .recommend .contentBox{
        display                 : -webkit-box;
        display                 : -webkit-flex;
        display                 : -ms-flexbox;
        display                 : flex;
        -webkit-box-pack        : center;
        -webkit-justify-content : center;
        -ms-flex-pack           : center;
        justify-content         : center;
        -webkit-box-align       : center;
        -webkit-align-items     : center;
        -ms-flex-align          : center;
        align-items             : center;
        -webkit-border-radius   : 0.08rem;
        border-radius           : 0.08rem;
        -webkit-box-sizing      : border-box;
        box-sizing              : border-box;
        padding                 : 0.32rem 0.48rem;
        background              : #eee
    }

    .recommend .content{
        max-height         : 1.26rem;
        margin             : 0 auto;
        line-height        : 0.42rem;
        overflow           : hidden;
        -o-text-overflow   : ellipsis;
        text-overflow      : ellipsis;
        display            : -webkit-box;
        -webkit-line-clamp : 3;
        -webkit-box-orient : vertical;
        word-wrap          : break-word
    }

    .recommend .changeBtn{
        margin : 0.36rem auto
    }

    .recommend .copyBtn{
        margin                : 0 auto;
        width                 : 4.2rem;
        height                : 0.8rem;
        line-height           : 0.8rem;
        color                 : #fff;
        background            : #105cfb;
        -webkit-border-radius : 0.38rem;
        border-radius         : 0.38rem
    }






</style>
