<template>
    <div>
        <div class="header">
            <i class="cubeic-back" @click="$router.go(-1)"></i>
            <h1>交易大厅</h1>
            <i></i>
        </div>
        <div class="deal">
            <div class="deal-top">
                <span>
                    <p>冻结量：</p>
                    <i>10.0</i>
                </span>
                <span>
                    <p>钱包地址：</p>
                    <i>10.0</i>
                </span>
                <span>
                    <input type="number" placeholder="请输入购买数量">
                    <div class="button1">
                        <Button :light="true">买入</Button>
                    </div>

                </span>

                <span class="button2">
                    <Button :outline="true" @click="$router.push('/dealOut')">转出</Button>
                    <Button :outline="true">转入</Button>
                </span>
            </div>
            <div class="deal-bottom">
                <p>流通参考价格:</p>
                <span>
                    <p>123</p>
                    <i>(元)</i>
                </span>
            </div>
        </div>
    </div>
</template>
<script>
import { Button } from 'cube-ui'
export default {
    components: {
        Button,
    },
    data() {
        return {

        }
    }
}
</script>
<style lang="stylus" scoped>
.deal {
    padding:5px;
    .deal-top {
        background: #8294BC;
        height: 250px;
        width: 100%;
        padding: 10px 20px;
        // box-shadow: 2px 2px rgba(0, 0, 0, 0.1);
        span {
            display: flex;
            margin-top: 20px;

            p {
                color: #454545;
                font-size: 16px;
                margin-right: 20px;
            }

            i {
                color: #fff;
                font-size: 16px;
            }

            input {
                border: none;
                border: 2px solid #fff;
                font-size: 16px;
                background: transparent;
                margin-right: 20px;
                height: 40px;

                &::placeholder {
                    color: #fff;
                    padding-left: 10px;
                }
            }
        }
    }

    .deal-bottom {
        margin-top: 30px;
        padding: 20px;
        height: 150px;
        width: 100%;
        background: #89B9AD;

        p {
            color: #454545;
            font-size: 18px;
        }

        span {
            margin-top: 30px;
            display: flex;
            justify-content: center;
            align-items: center;

            p {
                margin-right: 30%;
                color: #fff;
            }

            i {
                color: #454545;
                font-size: 14px;
            }
        }
    }
}

.button1 >>> .cube-btn-light {
    width: 120px;
    height: 40px;
    line-height: 10px;
}

.button2 {
    padding-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.button2 >>> .cube-btn-outline {
    width: 100px;
    border: 1px solid #fff;
    color: #fff;
    height: 40px;
    line-height: 10px;
    margin-right: 20px;
}
</style>
