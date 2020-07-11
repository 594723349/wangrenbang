<template>
  <div class="personal-message">
    <c-popup-layout title="消息通知" @back="$router.push({ name: 'Personal' })">
      <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
        <div class="message-item" v-for="(message, index) in messageList" :key="index">
          <div class="thumb">
            <img class="avatar" :src="message.logo" alt="" />
          </div>
          <div class="message-info">
            <p class="title">{{ message.title }}</p>
            <p>
              {{ message.msg }}
            </p>
            <p>{{ message.date }}&nbsp;&nbsp;&nbsp;&nbsp;{{ message.time }}</p>
          </div>
        </div>
      </van-list>
    </c-popup-layout>
  </div>
</template>

<script>
import PopupLayout from "@/components/comm/PopupLayout";
export default {
  components: {
    "c-popup-layout": PopupLayout
  },
  data() {
    return {
      messageList: [
        {
          logo: require("@/assets/img/avatar.jpg"),
          title: "系统通知1",
          msg: "这是官方发布的系统消息的苏联空军噶卢卡斯经过了卡就是离开",
          date: "2020年2月8号",
          time: "18:45:26"
        }
      ],
      loading: false,
      finished: false
    };
  },
  methods: {
    onLoad() {
      this.loading = true;
      const copy = [].concat(this.messageList);
      setTimeout(() => {
        this.messageList = this.messageList.concat(copy);
        this.loading = false;
      }, 200);
    }
  }
};
</script>

<style lang="less" scoped>
.message-list {
  height: 657px;
  overflow-y: auto;
}
.message-item {
  display: flex;
  justify-items: flex-start;
  padding: 20px 0px;
  background-color: #f7f8fa;
  border-bottom: 1px solid rgb(224, 224, 224);
  .thumb {
    width: 55px;
    height: 55px;
    img {
      width: 40px;
      height: auto;
    }
  }
  .message-info {
    flex: 1;
    text-align: left;
    padding-left: 10px;
    p {
      margin-bottom: 10px;
      font-size: 12px;
      color: #666666;
    }
    .title {
      font-weight: 700;
      font-size: 14px;
    }
  }
}
</style>
