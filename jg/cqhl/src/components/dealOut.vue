<template>
    <div>
        <div class="header">
            <i class="cubeic-back" @click="$router.go(-1)"></i>
            <h1>转出 </h1>
            <i></i>
        </div>
        <div class="deal-out">
            <div class="div-input">
                <span>码数</span>
                <input type="text" placeholder="码数">
            </div>
            <div class="div-input">
                <span>码数</span>
                <input type="text" placeholder="码数">
            </div>
            <div class="div-input">
                <span>码数</span>
                <input type="text" placeholder="码数">
            </div>
            <div class="div-input">
                <span>码数</span>
                <input type="text" placeholder="码数">
            </div>
            <div class="radio">
                <p>支付方式：</p>
                <Radio v-model="selected" :options="options" :horizontal="true" />
            </div>
            <br/>
        </div>
        <div class="button">
            <Button :primary="true">确认</Button>
        </div>
    </div>
</template>
<script>
import { Radio, Button } from 'cube-ui'
export default {
    components: {
        Radio,
        Button,
    },
    data() {
        return {
            selected: '线下支付',
            options: ['线下支付', '余额支付']
        }
    }
}
</script>
<style lang="stylus" scoped>
.deal-out {
    background: #fff;

    .div-input {
        padding: 20px 0;
        display: flex;
        justify-content: center;
        align-items: center;

        span {
            color: #454545;
            width: 50px;
            height: 40px;
            line-height: 40px;
            font-size: 16px;
            display: inline-block;
        }

        input {
            height: 40px;
            line-height: 40px;
            width: 50%;
            font-size: 16px;
            border: 1px solid #454545;
            color: #454545;
            padding-left: 10px;

            &:placeholder {
                color: #fdfdfd;
            }
        }
    }

    .radio {
        display: flex;
        justify-content: center;
        align-items: center;
        line-height: 50px;

        p {
            color: #454545;
            font-size: 16px;
        }
    }

    .radio >>> .cube-radio-group {
        display: flex;
        font-size: 16px;
        border: none;
    }
}

.button >>> .cube-btn-primary {
    width: 90%;
    margin: 50px auto;
}
</style>
