<template>
  <div>
    <div class="header">
      <div class="header-logo">
        <img src="../images/logo.png" alt="">
      </div>
      <div class="header-text">
        <ul>
          <li>
            <router-link to="/seek"><img src="../images/sos.png" alt=""></router-link>
          </li>
          <li>
            <router-link to="" style="color: rgb(42, 184, 204);">小组</router-link>
          </li>
          <li>
            <router-link to="" style="color: rgb(228, 168, 19);">广播</router-link>
          </li>
          <li>
            <router-link to="" style="color: rgb(159, 120, 96);">图书</router-link>
          </li>
          <li>
            <router-link to="/movie" style="color: rgb(35, 132, 232);">电影</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9998;
  display: flex;
  align-items: center;
  height:5rem;
  padding: 0 1.8rem;
  background: #fff;
  border-bottom: 0.1rem solid #f3f3f3;
  .header-logo {
    float: left;
    img {
      -webkit-box-flex: 1;
      -ms-flex: 1;
      flex: 1;
      max-width: 4.6rem;
      max-height: 2.2rem;
      margin-right: 1.8rem;
      font-size: 0;
      line-height: 3.2rem;
      color: #00b600;
      word-break: break-all;
    }
  }
  .header-text {
    position: absolute;
    right: 0;
    ul {
      li {
        float: right;
        margin: 0 1rem;
        img {
          width: 2.8rem;
          height: 2.1rem;
        }
        a {
          font-size: 1.6rem;
        }
      }
    }
  }
}
</style>
