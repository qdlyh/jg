<template>
  <div>
    <div class="userList">
      <div class="header">
        <span @click="headerTab(index)" :class="{ headerActive: active == index }" v-for="(item,index) in header">{{item.text}}</span>
      </div>
      <div class="personnel" v-show="active==0">
        <div class="personnel-box">
          <div class="user-text">
            <span>
              <img src="../../assets/logo.png" alt="">
            </span>
            <span class="right">
              <h1>某某某公司</h1>
              <p>简介：阿打算大所大所大所大所多</p>
            </span>
          </div>
          <div class="user-theme">
            <span class="left-theme">
              参与活动主题参与活动主题参与活动主题参与活动主题参与活动主题参与活动主题
            </span>
            <span class="right-time">
              2018-4-05
            </span>
          </div>
          <div class="user-theme">
            <span class="left-theme">
              参与活动主题
            </span>
            <span class="right-time">
              2018-4-05
            </span>
          </div>
        </div>
      </div>

      <div class="volunteer" v-show="active==1">
        <div class="volunteer-box" @click="$router.push('/user')">
          <img src="../../assets/logo.png" alt="">
          <span>
            <h1>倪友尚</h1>
            <i>志愿者</i>
            <p>2013年参加志愿2013年参加志愿工作2013年参加志愿工作2013年参加志愿工作2013年参加志愿工作2013年参加志愿工作2013年参加志愿工作2013年参加志愿工作2013年参加志愿工作2013年参加志愿工作2013年参加志愿工作工作</p>
          </span>
        </div>
        <div class="volunteer-box">
          <img src="../../assets/logo.png" alt="">
          <span>
            <h1>倪友尚</h1>
            <i>志愿者</i>
            <p>2013年参加志愿2013年参加志愿工作2013年参加志</p>
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
      header: [{ text: '慈善家' }, { text: '志愿者' }],
      active: 0,
    }
  },
  methods: {
    headerTab(index) {
      this.active = index;
    }
  }
}
</script>

<style lang="less" scoped>
// 慈善家
.personnel {
  .personnel-box {
    background: #fff;
    margin-top: 0.625rem;
    padding: 1.25rem 1.875rem;
    .user-text {
      display: flex;
      img {
        width: 9.75rem;
        height: 9.75rem;
      }
      .right {
        margin-left: 1.25rem;
        h1 {
          font-size: 1.75rem;
          color: #3c3c3c;
          font-weight: normal;
        }
        p {
          color: #454545;
          margin-top: 1.25rem;
          font-size: 1.375rem;
          display: -webkit-box;
          /*! autoprefixer: off */
          -webkit-box-orient: vertical;
          /* autoprefixer: on */
          -webkit-line-clamp: 3;
          overflow: hidden;
        }
      }
    }

    .user-theme {
      display: flex;
      justify-content: space-between;
      height: 4rem;
      line-height: 4rem;
      .left-theme {
        width: 80%;
        font-size: 1.5rem;
        color: #454545;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .right-time {
        width: 20%;
        text-align: right;
        font-size: 1.25rem;
        color: #9c9c9c9c;
      }
    }
  }
}

//志愿者
.volunteer {
  .volunteer-box {
    display: flex;
    height: 14rem;
    margin-top: 0.625rem;
    padding: 1.25rem 1.875rem;
    background: #fff;
    img {
      width: 9.75rem;
      height: 9.75rem;
      background: #ccc;
      border-radius: 100%;
    }
    span {
      margin-left: 3.75rem;
      h1 {
        font-size: 1.75rem;
        color: #3c3c3c;
        font-weight: 600;
      }
      i {
        font-size: 1.25rem;
        color: #454545;
      }
      p {
        font-size: 1.5rem;
        color: #9c9c9c;
        display: -webkit-box;
        /*! autoprefixer: off */
        -webkit-box-orient: vertical;
        /* autoprefixer: on */
        -webkit-line-clamp: 3;
        overflow: hidden;
      }
    }
  }
}
</style>
