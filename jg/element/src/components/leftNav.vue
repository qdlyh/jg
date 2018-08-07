<template>
    <div>
        <i class="icon iconfont icon-jujia" @click="toggle()"></i>
        <div class="left-nav" :class="{open,block}" @click="toggle()">
            <ul>
                <li>
                    <i class="icon iconfont icon-jujia"></i>
                    <div>收银</div>
                </li>
    
                <li>
                    <i class="icon iconfont icon-muyingwanju"></i>
                    <div>店铺</div>
                </li>
    
                <li>
                    <i class="icon iconfont icon-shipin"></i>
                    <div>商品</div>
                </li>
    
                <li>
                    <i class="icon iconfont icon-jiayongdianqi"></i>
                    <div>会员</div>
                </li>
    
                <li>
                    <i class="icon iconfont icon-zhubaoshipin"></i>
                    <div>统计</div>
                </li>
                <li>
                    <i class="icon iconfont icon-jiajujiancai"></i>
                    <div>设置</div>
                </li>
            </ul>
            <div class="cover"></div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            open: false,
            block: false,
        }
    },
    methods: {
        toggle() {
            let vue = this;
            if (!this.open) {
                this.block = true;
                setTimeout(() => {
                    vue.open = true;
                }, 0);
            } else {
                this.open = false;
                setTimeout(() => {
                    vue.block = false;
                }, 300)
            }
        }
    }
}
</script>
<style lang="less">
/* .left-nav {   
    float: left;
    width: 5%;
    color: #fff;
    font-size: 10px;
    height: 100%;
    background-color: #1D8ce0;
}

.iconfont {
    font-size: 24px;
}

.left-nav ul {
    padding: 0px;
    margin: 0px;
}

.left-nav li {
    list-style: none;
    text-align: center;
    border-bottom: 1px solid #20a0ff;
    padding: 10px;
} */


/* 侧偏栏 */

.left-nav {
    display: none;
    z-index: 11;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    position: fixed;
    &::-webkit-scrollbar {
        display: none!important;
        width: 0!important;
        height: 0!important;
        -webkit-appearance: none;
        opacity: 0!important;
    }
    ul {
        margin: 0;
        float: left;
        width: 60%;
        height: 100%;
        padding: 1.3rem 0.5rem 0.5rem;
        overflow: auto;
        background: rgba(91, 116, 146, 0.75);
        transform: translate(-100%, 0);
        transition: transform 0.3s ease;
        -webkit-overflow-scrolling: touch;
        &::-webkit-scrollbar {
            display: none!important;
            width: 0!important;
            height: 0!important;
            -webkit-appearance: none;
            opacity: 0!important;
        }
    }
    li {
        cursor: pointer;
        font-size: 0.43rem;
        list-style: none;
        color: #fff;
        margin-top: 20px;
        .iconfont {
            float: right;
            font-size: 0.6rem;
        }
        &.chose {
            color: #FFD300;
        }
    }
    .cover {
        width: 100%;
        height: 100%;
        opacity: 0;
        display: none;
        background: rgba(172, 185, 201, 0.40);
        transition: opacity 0.3s ease;
    }
    &.open {
        display: block;
        ul {
            transform: translate(0);
        }
        .cover {
            opacity: 1;
            display: block;
        }
    }
    &.block {
        display: block;
    }
}
</style>