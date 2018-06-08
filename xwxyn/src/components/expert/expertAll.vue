<template>
    <div>
        <div class="expertAll">
            <div class="user-list">
                <div class="user" @click="$router.push('/user')">
                    <img src="../../assets/logo.png" alt="">
                    <span>
                        <h1>倪友尚</h1>
                        <i>志愿者</i>
                        <p>2013年参加志愿2013年参加志愿工作2013年参加志愿工作2013年参加志愿工作2013年参加志愿工作2013年参加志愿工作2013年参加志愿工作2013年参加志愿工作2013年参加志愿工作2013年参加志愿工作2013年参加志愿工作工作</p>
                    </span>
                </div>
                <div class="user">
                    <img src="../../assets/logo.png" alt="">
                    <span>
                        <h1>倪友尚</h1>
                        <i>志愿者</i>
                        <p>2013年参加志愿2013年参加志愿工作2013年参加志</p>
                    </span>
                </div>
            </div>

            <div class="article-box">
                <div class="article-list">
                    <div>
                        <h1>咨询专区咨询专区咨询专区咨询专区咨询专区咨询专区咨询专区咨询专区</h1>
                        <div class="article-box-bottom">
                            <div>
                                2018-03-12 09:32
                            </div>
                            <div class="article-msg">
                                <span>126回答</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="article-list">
                    <div>
                        <h1>咨询专区咨询专区咨询专区咨询专区咨询专区咨询专区咨询专区咨询专区</h1>
                        <div class="article-box-bottom">
                            <div>
                                2018-03-12 09:32
                            </div>
                            <div class="article-msg">
                                <span>126回答</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="article-list">
                    <div>
                        <h1>咨询专区咨询专区咨询专区咨询专区咨询专区咨询专区咨询专区咨询专区</h1>
                        <div class="article-box-bottom">
                            <div>
                                2018-03-12 09:32
                            </div>
                            <div class="article-msg">
                                <span>126回答</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="questions-btn" @click="questions= true">
                    提问
                </div>
                <div>
                    <popup v-model="questions" height="70%" :hide-on-blur="true">
                        <div class="questions-box">
                            <div class="questions-title">填写问题</div>
                            <div class="input">
                                <input type="text" placeholder="填写标题">
                            </div>
                            <div class="textarea">
                                <textarea name="" cols="30" rows="10" placeholder="填写内容"></textarea>
                            </div>
                            <div class="btn-blue">
                                提交
                            </div>
                        </div>
                    </popup>
                </div>
            </div>

            <div class="questions-history">
                <h1>提问提问提问提问提问提问提问提问提问提问提问提问提问提问提问提问提问提问提问提问提问提问提问提问提问提问提问提问提问提问提问提问提问提问提问提问</h1>
                <div class="article-box-bottom">
                    <div>
                        2018-03-12 09:32
                    </div>
                    <div class="article-msg">
                        <span>126回答</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>
<script>
import { Popup } from 'vux'
export default {
    components: {
        Popup,
    },
    data() {
        return {
            questions: false,
        }
    }
}
</script>
<style lang="less" scoped>
.questions-box {
  .questions-title {
    font-size: 1.75rem;
    text-align: center;
    height: 5rem;
    line-height: 5rem;
  }
  .van-popup--right {
    background: #f3f3f3;
    width: 100%;
    height: 100%;
  }
  .input {
    input {
      width: 100%;
      height: 5rem;
      border: 0;
      font-size: 1.5rem;
      padding-left: 1.25rem;
      &::-webkit-input-placeholder {
        color: #9c9c9c;
        font-size: 1.5rem;
      }
    }
  }
  .textarea {
    margin-top: 1.25rem;
    textarea {
      padding: 1.25rem 0 0 1.25rem;
      font-size: 1.5rem;
      width: 100%;
      height: 22.5rem;
      border: 0;
      resize: none;
      &::-webkit-input-placeholder {
        color: #9c9c9c;
        font-size: 1.5rem;
      }
    }
  }
}
.expertAll {
  .user-list {
    .user {
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
          font-size: 1.125rem;
          color: #454545;
        }
        p {
          font-size: 1.25rem;
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

  .article-list,
  .questions-history {
    margin-top: 0.625rem;
    padding: 1.25rem 1.875rem;
    background: #fff;
    h1 {
      font-size: 1.5rem;
      color: #3c3c3c;
      margin-bottom: 0.625rem;
      font-weight: normal;
      display: -webkit-box;
      /*! autoprefixer: off */
      -webkit-box-orient: vertical;
      /* autoprefixer: on */
      -webkit-line-clamp: 3;
      overflow: hidden;
    }
    .article-box-bottom {
      display: flex;
      justify-content: space-between;
      color: #4545;
      font-size: 1.25rem;
      margin-top: 1.875rem;
      .article-msg {
        background: #f3f3f3;
        width: 6.25rem;
        height: 2rem;
        border-radius: 10px;
        color: #454545;
        text-align: center;
        font-size: 1.25rem;
      }
    }
  }
}

//提问按钮
.questions-btn {
  color: #fff;
  position: fixed;
  bottom: 7.5rem;
  right: 20px;
  width: 6.25rem;
  height: 6.25rem;
  line-height: 6.25rem;
  text-align: center;
  border-radius: 100%;
  background: rgba(4, 142, 255, 0.5);
  font-size: 1.75rem;
}
</style>

