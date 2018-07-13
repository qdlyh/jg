<template>
    <div>
        <div class="content">
            <div class="user-header">
                <i class="cubeic-back" @click="$router.go(-1)"></i>
                <h1>个人中心</h1>
                <i></i>
            </div>
            <div class="user">
                <div class="user-data">
                    <div>
                        <div class="pictrue">
                            <img src="../assets/2.png" alt="">
                        </div>
                        <p class="user-name">昵称：未闻花名</p>
                        <div class="user-type">
                            <img src="../assets/sadas.png" alt="">
                            <i>普通会员</i>
                        </div>
                    </div>
                </div>
                <div class="user-sj">
                    <span>
                        <h6>帮助</h6>
                        <i>￥ 1000 (元)</i>
                    </span>
                    <span>
                        <h6>积分</h6>
                        <i>&nbsp;1000 (元)</i>
                    </span>
                    <span>
                        <h6>推荐码</h6>
                        <i>123456</i>
                    </span>
                </div>
            </div>
            <div class="user-input">
                <span>
                    <img src="../assets/333123.png" alt="">
                    <i>手机号</i>
                </span>
                <span>
                    <i>1303030300</i>
                </span>
            </div>
        </div>
    </div>
    </div>
</template>
<script>
export default {
    data() {
        return {

        }
    }
}
</script>

<style lang="stylus" scoped>
.content {
    .user-header {
        height: 60px;
        line-height: 60px;
        background: #fff;
        padding: 0 10px;
        display: flex;
        justify-content: space-between;
        border-bottom: 0.5px solid #dbdbdb;
        background: #2D2D2D;

        h1 {
            font-size: 18px;
            text-align: center;
            color: #fff;
            font-weight: 400;
            margin-left: -24px;
        }

        i {
            font-size: 24px;
            color: #fff;
        }
    }

    .user {
        height: 400px;
        position: relative;
        background-image: url('../assets/bg.png');
        background-repeat: no-repeat;
        background-size: 100% 100%;

        .user-data {
            display: flex;
            justify-content: center;
            padding-top: 30px;

            .pictrue {
                margin: auto;
                width: 80px;
                height: 80px;
                overflow: hidden;
                border-radius: 50%;
                border: 2px solid #454545;

                img {
                    width: 100%;
                    height: 100%;
                }
            }

            .user-name {
                color: #454545;
                font-size: 18px;
                margin: 20px 0;
            }

            .user-type {
                width: 120px;
                height: 40px;
                padding: 0 5px;
                color: #FF7437;
                font-size: 16px;
                text-align: center;
                border: 1px solid #ff7437;
                border-radius: 40px;

                i {
                    line-height: 40px;
                }

                img {
                    vertical-align: middle;
                    width: 20px;
                    height: 20px;
                }
            }
        }

        .user-sj {
            width: 100%;
            display: flex;
            margin-top: 50px;

            span {
                width: 50%;
                display: inline-block;
                color: #454545;
                text-align: center;

                h6 {
                    font-size: 16px;
                    font-weight: 600;
                }

                i {
                    font-size: 14px;
                }
            }
        }
    }
    .user-input{
        width 100%;
        mar-top 
    }
}
</style>
