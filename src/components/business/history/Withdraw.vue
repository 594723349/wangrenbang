<template>
  <div class="c-join-history">
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <div v-for="(item, index) in data" :key="index" class="history-item">
        <div class="ceil"><span style="color:#E91E63;">l</span>提现金额：{{ item.money }}元</div>
        <div class="ceil"><span style="color:#5AB963;">l</span>提现状态：{{ item.state }}</div>
        <div class="ceil">
          <span style="color:#169BD5;">l</span>提现时间：{{ item.date }}&nbsp;&nbsp;{{ item.time }}
        </div>
      </div>
    </van-list>
  </div>
</template>

<script>
export default {
  data() {
    return {
      finished: false,
      loading: false,
      data: [
        {
          money: 3333,
          state: "已处理",
          date: "2020年2月8号",
          time: "18:56:08"
        },
        {
          money: 1234,
          state: "未处理",
          date: "2020年2月8号",
          time: "18:56:08"
        },
        {
          money: 3333,
          state: "已处理",
          date: "2020年2月8号",
          time: "18:56:08"
        }
      ]
    };
  },
  methods: {
    getData() {
      const copy = [].concat(this.data);
      this.data = this.data.concat(copy);
      this.done();
    },
    onLoad() {
      this.loading = true;
      this.getData();
    },
    done(isFinsh = false) {
      this.finished = isFinsh;
      this.loading = false;
    }
  }
};
</script>

<style lang="less" scoped>
.history-item {
  background-color: rgba(242, 242, 242, 1);
  margin: 2px 0;
  padding: 15px;
}
.title {
  font-size: 18px;
  font-weight: 700;
}
.ceil {
  margin: 10px 0;
}
</style>
