<template>
    <div>
        <div class="seek-input">
            <i @click="back()">关闭</i>
            <input type="text">
        </div>
        <div class="seek-text">
            <ul class="seek-text-left">
                <li>
                    <router-link to="/movie" style="color: rgb(35, 132, 232);">电影
                        <i>影院热映</i>
                    </router-link>
                </li>
                <li>
                    <router-link to="" style="color: rgb(230, 70, 126);">同城
                        <i>影院热映</i>
                    </router-link>
                </li>
                <li>
                    <router-link to="" style="color: rgb(159, 120, 96);">阅读
                        <i>影院热映</i>
                    </router-link>
                </li>
                <li>
                    <router-link to="" style="color: rgb(225, 100, 77);">东西
                        <i>影院热映</i>
                    </router-link>
                </li>
            </ul>
            <ul class="seek-text-right">
                <li>
                    <router-link to="" style="color: rgb(122, 106, 219);">电视
                        <i>影院热映</i>
                    </router-link>
                </li>
                <li>
                    <router-link to="" style="color: rgb(42, 184, 204);">小组
                        <i>影院热映</i>
                    </router-link>
                </li>
                <li>
                    <router-link to="" style="color: rgb(87, 116, 197);">游戏
                        <i>影院热映</i>
                    </router-link>
                </li>
                <li>
                    <router-link to="" style="color: rgb(64, 207, 169);">FM
                        <i>影院热映</i>
                    </router-link>
                </li>
            </ul>
        </div>
        <router-link to="">
            <div class="seek-bottom">
                <p>注册账号</p>
            </div>
        </router-link>
        <router-link to="">
            <div class="seek-bottom">
                <p>注册账号</p>
            </div>
        </router-link>
    </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  methods: {
    back() {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss" scoped>
.seek-input {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  height: 5rem;
  padding: 0 1.8rem;
  background: #fff;
  border-bottom: 0.1rem solid #f3f3f3;
  i {
    color: #42bd56;
    font-size: 1.8rem;
    margin-right: 1rem;
  }
  input {
    width: 95%;
    background: #f3f3f3;
    border: none;
    height: 3.5rem;
    font-size: 1.8rem;
    margin-top: 0.8rem;
  }
}
.seek-text {
  display: flex;
  justify-content: space-between;
  max-width: 500px;
  margin: 5% auto;
  ul {
    li {
      margin: 2.5rem 0;
      a {
        font-size: 2.4rem;
      }
      i {
        color: #999;
        font-size: 1.4rem;
        display: block;
      }
    }
  }
}
.seek-bottom {
  width: 100%;
  height: 4rem;
  border-top: 0.1rem solid #f3f3f3;
  border-bottom: 0.1rem solid #f3f3f3;
  p {
    color: #42bd56;
    font-size: 1.8rem;
    text-align: center;
    line-height: 4rem;
  }
}
</style>

