<template>
  <div class="c-countdown">
    <span v-for="(num, index) in timeTxt" :key="index" class="item" :class="{ 'is-num': num !== ':' }">
      {{ num }}
    </span>
  </div>
  <!-- <span>{{
    hour ? hourString + ":" + minuteString + ":" + secondString : minuteString + ":" + secondString
  }}</span> -->
</template>

<script>
export default {
  data() {
    return {
      hour: "",
      minute: "",
      second: "",
      promiseTimer: ""
    };
  },
  props: {
    remainTime: {
      // 倒计时间总秒数
      default: ""
    }
  },
  mounted() {
    if (this.remainTime > 0) {
      this.hour = Math.floor(this.remainTime / 3600);
      this.minute = Math.floor((this.remainTime / 60) % 60);
      this.second = Math.floor(this.remainTime % 60);
      this.countDowm();
    }
  },
  methods: {
    countDowm() {
      var self = this;
      clearInterval(this.promiseTimer);
      this.promiseTimer = setInterval(function() {
        if (self.hour === 0) {
          if (self.minute !== 0 && self.second === 0) {
            self.second = 59;
            self.minute -= 1;
          } else if (self.minute === 0 && self.second === 0) {
            self.second = 0;
            self.$emit("end");
            clearInterval(self.promiseTimer);
          } else {
            self.second -= 1;
          }
        } else {
          if (self.minute !== 0 && self.second === 0) {
            self.second = 59;
            self.minute -= 1;
          } else if (self.minute === 0 && self.second === 0) {
            self.hour -= 1;
            self.minute = 59;
            self.second = 59;
          } else {
            self.second -= 1;
          }
        }
      }, 1000);
    },
    formatNum(num) {
      return num < 10 ? "0" + num : "" + num;
    }
  },
  computed: {
    hourString() {
      return this.formatNum(this.hour);
    },
    minuteString() {
      return this.formatNum(this.minute);
    },
    secondString() {
      return this.formatNum(this.second);
    },
    timeTxt() {
      return [
        ...this.hourString.split(""),
        ":",
        ...this.minuteString.split(""),
        ":",
        ...this.secondString.split("")
      ];
    }
  }
};
</script>
<style lang="less" scoped>
.c-countdown {
  display: flex;
  justify-content: center;
  align-items: center;
}
.item {
  display: inline-block;
  width: 10px;
  height: 70px;
  line-height: 70px;
  font-size: 40px;
  font-weight: 700;
  color: #e0e0df;
}
.is-num {
  width: 50px;
  background-color: rgba(141, 141, 170, 1);
  font-size: 50px;
  border-radius: 12px;
  margin: 0 3px;
}
</style>
