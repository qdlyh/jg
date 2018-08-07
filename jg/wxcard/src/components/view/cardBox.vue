<template>
    <div>
        <div class="cardBox">
            <div class="page-top">
                <letfNav v-show="letNavIcon">
                    <a href="javascript:;"><img src="../../images/631561651.png" alt=""></a>
                </letfNav>
                <span v-show="cancelIcon" @click="cancelCard()">
                    <x-button @click.native="disabled = false" type="primary" :disabled="!disabled" id="delete-false">{{('可操作') }}</x-button>
                    <a href="javascript:;"><img src="../../images/1561651.png" alt=""></a>
                </span>
                <div v-show="seekIcon" class="page-seek">
                    <input type="text" placeholder="请输入你正在找的宝贝" v-model="seartext">
                    <i><img src="../../images/15165156.png" alt=""></i>
                </div>
                <span v-show="navIcon" @click="navSelect()">
                    <a href="javascript:;"><img src="../../images/165165651.png" alt=""></a>
                </span>
                <span v-show="deleteIcon" @click="cardWarn()">
                    <a href="javascript:;"><img src="../../images/14151561.png" alt=""></a>
                </span>
            </div>
            <div class="nav-select">
                <ul v-show="navLi" @click="navSelect()">
                    <li @click="showDelete()">选择更多
                        <x-button @click.native="disabled = true" type="warn" :disabled="disabled" id="delete-true">{{('不可操作') }}</x-button>
                    </li>
                </ul>
            </div>

            <!-- 删除多选框 -->
            <div class="weui-box" v-show="weuiDialog">
                <div class="weui-mask"></div>
                <div class="weui-dialog">
                    <div class="weui-dialog__hd">
                        <strong>确认删除吗？</strong>
                    </div>
                    <div class="weui-dialog__bd">
                        <p>删除后信息将不能找回</p>
                    </div>
                    <div class="weui-dialog__ft">
                        <p class="weui-dialog__btn" @click="weuiDialog = !weuiDialog">取消</p>
                        <p class="weui-dialog__btn" @click="removeAll()">确认</p>
                    </div>
                </div>
            </div>
            <!--    字母 -->
            <transition name="slide-fade">
                <div class="right-menu" v-show="!rightMenu">
                    <div class="right-menu-box" v-for="(keys , index) in carditemText" :key="index">
                        <a href="javascript:;" @click="onLetter('#letter'+ keys.target)">{{keys.letters}}</a>
                    </div>
                </div>
            </transition>
            <!-- <div class="right-menu" v-show="!rightMenu">
                                                    <div class="right-menu-box" v-for="(keys , index) in carditemText" :key="index">
                                                        <a href="javascript:;" @click="onLetter('#letter'+ keys.target)">{{keys.letters}}</a>
                                                    </div>
                                                </div> -->

            <!-- <div class="empty" v-show="!Object.keys(this.carditem).length && empty">
                                                                                                <img src="../../images/41485156.png" alt="">
                                                                                                <p>您的名片夹是空的</p>
                                                                                                <p>赶紧添加些名片吧</p>
                                                                                            </div> -->
            <!-- <div class="empty" v-show="!this.carditem">
                                                                                            <img src="../../images/41485156.png" alt="">
                                                                                            <p>您的名片夹是空的</p>
                                                                                            <p>赶紧添加些名片吧</p>
                                                                                        </div>

                                                                                        <div class="empty" v-show="emptySeek">
                                                                                            <img src="../../images/41485156.png" alt="">
                                                                                            <p>没有找到您需要的名片</p>
                                                                                            <p>赶紧添加些名片吧</p>
                                                                                        </div> -->

            <div class="card-list" v-for="(items, keys ,index) in searchFor(carditem,seartext)" :key="keys">
                <div class="item-wire" :id="'letter'+ keys">{{keys}}</div>
                <swipeout v-for="(item,index) in items" :key="index">
                    <swipeout-item underlay-color="#fff" @on-open="openDelete('open')" @on-close="closeDelete('close')" :right-menu-width="144" :disabled="disabled">
                        <div slot="right-menu">
                            <swipeout-button @click.native="onDeleteCard(index,keys)" :width="144" background-color="#383c43" id="button-right"><img src="../../images/14151561.png" alt=""></swipeout-button>
                        </div>
                        <div slot="content" class="demo-content vux-1px-tb">
                            <div class="card-item">
                                <!-- {{item.openId}} -->
                                <!-- <router-link :to="{ path: '/youCard/' + item.openId}"> -->
                                <!-- <router-link :to="{path: '/youCard/' , query:{mun:1}}"> -->
                                <router-link :to="{path:'/youCard' , query:{openId: item.openId}}">
                                    <div class="card-item-box">
                                        <div class="item-img">
                                            <img v-if="item.picture!=null" :src="'/vcard-manage-web/image/'+item.picture">
                                            <img v-else src="../../images/logo.png">
                                        </div>
                                        <div class="item-msg">
                                            <!-- hidden="hidden" -->
                                            <div class="item-name">
                                                <span>{{item.name}}</span>
                                                <img v-if="item.sex===1" src="../../images/1165165.png" alt="">
                                                <img v-else src="../../images/1651651.png" alt="">
                                            </div>
                                            <div class="item-occupation">
                                                <p>{{item.department}}</p>
                                            </div>
                                            <div class="item-company">
                                                <p>{{item.company}}</p>
                                            </div>
                                        </div>
                                    </div>
                                </router-link>
                                <div class="telephone" v-show="!phone">
                                    <a :href="'tel:'+item.telephone">
                                        <img src="../../images/156156515.png" alt="">
                                    </a>
                                </div>
                                <div class="item-checkbox" v-show="checkbox">
                                    <label>
                                        <input type="checkbox" v-model="item.flag">
                                        <i></i>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </swipeout-item>
                    <!-- <div style="margin-top:60px">
                                                                                 <a :href="tel">{{item.telephone}}</a>
                                                                            </div> -->
                </swipeout>
            </div>
        </div>
    </div>
</template>
<script>
import { Swipeout, SwipeoutItem, SwipeoutButton, XButton } from 'vux'
import letfNav from '@/components/reuse/letfNav'
export default {
    components: {
        Swipeout,
        SwipeoutItem,
        SwipeoutButton,
        XButton,
        letfNav
    },
    data() {
        return {
            // carditem: {
            //     A: [{ name: '伊利丹51', occupation: '广告摄影师', company: '公司', flag: false }, { name: '伊利丹', occupation: '广告摄影师1', company: '公司1', flag: false }, { name: '伊利丹2', occupation: '广告摄影师2', company: '公司2', flag: false }],
            //     B: [{ name: '伊利丹52', occupation: '广告摄影师', company: '公司', flag: false }, { name: '伊利丹', occupation: '广告摄影师1', company: '公司1', flag: false }, { name: '伊利丹2', occupation: '广告摄影师2', company: '公司2', flag: false }],
            //     C: [{ name: '伊利丹53', occupation: '广告摄影师', company: '公司', flag: false }, { name: '伊利丹', occupation: '广告摄影师1', company: '公司1', flag: false }, { name: '伊利丹2', occupation: '广告摄影师2', company: '公司2', flag: false }],
            //     D: [{ name: '伊利丹54', occupation: '广告摄影师', company: '公司', flag: false }, { name: '伊利丹', occupation: '广告摄影师1', company: '公司1', flag: false }, { name: '伊利丹2', occupation: '广告摄影师2', company: '公司2', flag: false }],
            //     E: [{ name: '伊利丹51', occupation: '广告摄影师', company: '公司', flag: false }, { name: '伊利丹', occupation: '广告摄影师1', company: '公司1', flag: false }, { name: '伊利丹2', occupation: '广告摄影师2', company: '公司2', flag: false }],
            //     F: [{ name: '伊利丹6', occupation: '广告摄影师', company: '公司', flag: false }, { name: '伊利丹', occupation: '广告摄影师1', company: '公司1', flag: false }, { name: '伊利丹2', occupation: '广告摄影师2', company: '公司2', flag: false }],
            //     G: [{ name: '伊利丹7', occupation: '广告摄影师', company: '公司', flag: false }, { name: '伊利丹', occupation: '广告摄影师1', company: '公司1', flag: false }, { name: '伊利丹2', occupation: '广告摄影师2', company: '公司2', flag: false }],
            //     H: [{ name: '伊利丹7', occupation: '广告摄影师', company: '公司', flag: false }, { name: '伊利丹', occupation: '广告摄影师1', company: '公司1', flag: false }, { name: '伊利丹2', occupation: '广告摄影师2', company: '公司2', flag: false }],
            //     I: [{ name: '伊利丹7', occupation: '广告摄影师', company: '公司', flag: false }, { name: '伊利丹', occupation: '广告摄影师1', company: '公司1', flag: false }, { name: '伊利丹2', occupation: '广告摄影师2', company: '公司2', flag: false }],
            //     J: [{ name: '伊利丹7', occupation: '广告摄影师', company: '公司', flag: false }, { name: '伊利丹', occupation: '广告摄影师1', company: '公司1', flag: false }, { name: '伊利丹2', occupation: '广告摄影师2', company: '公司2', flag: false }],
            //     K: [{ name: '伊利丹7', occupation: '广告摄影师', company: '公司', flag: false }, { name: '伊利丹', occupation: '广告摄影师1', company: '公司1', flag: false }, { name: '伊利丹2', occupation: '广告摄影师2', company: '公司2', flag: false }],
            //     L: [{ name: '伊利丹5', occupation: '广告摄影师', company: '公司', flag: false }, { name: '伊利丹', occupation: '广告摄影师1', company: '公司1', flag: false }, { name: '伊利丹2', occupation: '广告摄影师2', company: '公司2', flag: false }],
            //     M: [{ name: '伊利丹5', occupation: '广告摄影师', company: '公司', flag: false }, { name: '伊利丹', occupation: '广告摄影师1', company: '公司1', flag: false }, { name: '伊利丹2', occupation: '广告摄影师2', company: '公司2', flag: false }],
            //     N: [{ name: '伊利丹5', occupation: '广告摄影师', company: '公司', flag: false }, { name: '伊利丹', occupation: '广告摄影师1', company: '公司1', flag: false }, { name: '伊利丹2', occupation: '广告摄影师2', company: '公司2', flag: false }],
            //     O: [],
            //     P: [],
            //     Q: [],
            //     Z: [],
            //     '#': [],
            // },
            carditem: {},
            seartext: '',
            activeIndex: 0,
            disabled: false,
            letNavIcon: true,
            navIcon: true,
            seekIcon: true,
            rightMenu: false,
            cancelIcon: false,
            navLi: false,
            deleteIcon: false,
            checkbox: false,
            weuiDialog: false,
            empty: false,
            emptySeek: false,
            phone: false,
            carditemLG: '',
        }
    },
    mounted() {
        this.$http({
            method: 'get',
            url: '/vcard-manage-web/con/move/list',
            params: {
                openId: this.$parent.wxOpenId,
            },
        })
            .then(response => {
                //console.log('成功');
                this.carditem = response.data;
                //console.log(this.carditem)
            })
            .catch(error => {
                console.log(error);
                console.log('网络错误，不能访问');
            })
    },
    methods: {
        navSelect() {
            if (!this.navLi) {
                this.navLi = !false;
            } else {
                this.navLi = false;
            }
        },
        showDelete() {
            this.deleteIcon = !false;
            this.cancelIcon = !false;
            this.checkbox = !false;
            this.rightMenu = !false;
            this.navIcon = false;
            this.phone = !false;
            this.letNavIcon = false;
            this.seekIcon = false;
        },
        cancelCard() {
            this.deleteIcon = false;     //返回显示
            this.cancelIcon = false;
            this.phone = false;          //返回显示手机图标
            this.checkbox = false;
            this.rightMenu = false;
            this.seekIcon = !false;
            this.navIcon = !false;
            this.letNavIcon = !false;
        },
        cardWarn() {
            for (let keys in this.carditem) {
                for (let i = 0; i < this.carditem[keys].length; i++) {
                    if (this.carditem[keys][i].flag) {
                        this.weuiDialog = !false
                    }
                }
            }
        },
        removeAll() {
            this.weuiDialog = false;
            let arr = [];
            let arrDelete
            // for (let keys in this.carditem) {
            //     this.carditem[keys] = this.carditem[keys].filter((all) => {
            //         return all.flag === false;
            //     })
            for (let keys in this.carditem) {
                for (let i = 0; i < this.carditem[keys].length; i++) {
                    if (this.carditem[keys][i].flag) {
                        //console.log(this.carditem[keys][i].id)
                        arr.push(this.carditem[keys][i].id)
                        this.carditem[keys].splice(i, 1)
                    }
                }
            }
            arrDelete = arr.join(",")
            //console.log(arrDelete)
            this.$http({
                method: 'get',
                url: '/vcard-manage-web/con/move/delete',
                params: {
                    openId: this.$parent.wxOpenId,
                    ids: arrDelete
                },
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            })
                .then(response => {
                    //console.log(response);
                    //console.log(response.data); 
                    //console.log('删除成功');
                })
                .catch(error => {
                    console.log(error);
                    console.log('网络错误，不能访问');
                })
        },
        onDeleteCard(index, keys) {
            this.$http({
                method: 'get',
                url: '/vcard-manage-web/con/move/delete',
                params: {
                    openId: this.$parent.wxOpenId,
                    ids: this.carditem[keys][index].id
                },
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            })
                .then(response => {
                    //console.log(response);
                    //console.log(response.data); 
                    //console.log('删除成功');
                })
                .catch(error => {
                    console.log(error);
                    console.log('网络错误，不能访问');
                })
            this.carditem[keys].splice(index, 1);
        },
        openDelete(type) {
            this.rightMenu = !false;
            //this.phone = !false;          //打开隐藏手机图标
        },
        closeDelete(type) {
            this.rightMenu = false;
            //this.phone = false;          //返回显示手机图标
        },
        onLetter(keys) {
            let letter = this.$el.querySelector(keys)
            document.body.scrollTop = letter.offsetTop
        },
        /* 搜索 */
        searchFor(carditem, seartext) {
            for (let keys in this.carditem) {
                //console.log(this.carditem[keys].length)
                if (!this.carditem[keys].length) {
                    //this.empty = !false;  //数据没有，显示提示图
                    //this.emptySeek = false;
                    delete this.carditem[keys]
                }
            }
            let result = {};  //用result来存放查到的结果

            if (!seartext) {
                //this.emptySeek = false;
                return this.carditem;
            }
            seartext = seartext.trim().toLowerCase();   //把查询的内容转为小写的
            for (let keys in this.carditem) {
                //result[keys] = [];                    //存放push进来的数组
                //console.log(result[keys].length)
                for (let i = 0; i < this.carditem[keys].length; i++) {
                    if (this.carditem[keys][i].name.toLowerCase().indexOf(seartext) != -1) {
                        result[keys] = this.carditem[keys];
                        //result[keys].push({ "name": this.carditem[keys][i].name });
                        //console.log(result[keys])
                    }
                }
                // if (!result[keys].length) {
                //     delete result[keys]
                // }
            }
            // if (!Object.keys(result).length) {
            //     //alert('没数据')
            //     //this.emptySeek = !false;
            //     return false;
            // } else {
            //     this.emptySeek = false;
            //     //alert('有数据')
            // }
            return result;
        },
    },
    computed: {
        carditemText() {
            let carditemText = Object.keys(this.carditem);
            let res = [];
            for (let t of carditemText) {
                res.push({
                    "letters": t,
                    "target": t.replace(/[~'!@#￥$%^&*()-+_=:]/g, function(str) {
                        return "\\" + str;
                    })
                });
            }
            return res;
        },
        /*        carditemLG() {
                   for (let keys in this.carditem) {
                       //console.log(this.carditem[keys])
                       if (!this.carditem[keys].length) {
                           delete this.carditem[keys]
                       }
                   }
                   return this.carditem
               } */
    },

}
</script>
<style lang="scss" scoped>
@import '../../css/cardBox'
</style>


