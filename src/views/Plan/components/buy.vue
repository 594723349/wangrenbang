<template>
  <div class="plan-buy">
    <div class="section section-1">
      <div class="section-title title">
        <div class="plan-id">《12345678》</div>
        <div class="plan-state">正在进行中</div>
      </div>
      <div class="body">
        <div class="bar-char">
          <div class="bar-item bar-1">
            <div class="total">￥23435</div>
          </div>
          <div class="bar-item bar-2">祝您好运</div>
          <div class="bar-item bar-3">
            <div class="total">12345人</div>
          </div>
        </div>
        <div class="bar-footer">
          <span class="people-num">当前参与人数</span>
          <span>|</span>
          <span class="gold-num">当前金币总数</span>
        </div>
        <div class="count-down">
          <div class="text">开奖</div>
          <c-countdown :remainTime="87000" @end="countDownEnd"></c-countdown>
          <div class="text">倒计时</div>
        </div>
        <div class="button button-buy">立即参与</div>
      </div>
    </div>
    <div class="section"></div>
  </div>
</template>

<script>
import CountDown from "@/components/comm/CountDown";
export default {
  components: {
    "c-countdown": CountDown
  },
  methods: {
    countDownEnd() {
      console.log("倒计时结束");
    }
  }
};
</script>

<style lang="less" scoped>
.section {
  padding: 20px 40px;
}
.plan-id {
  font-size: 16px;
  font-weight: 600;
}
.plan-state {
  font-size: 12px;
  color: #999;
}
.bar-char {
  display: flex;
  justify-content: space-around;
  padding: 0 10px;
  margin-top: 25px;
  .total {
    position: absolute;
    top: -30px;
    left: 50%;
    transform: translateX(-50%);
    white-space: nowrap;
    font-weight: 600;
    font-size: 16px;
  }
  .bar-item {
    width: 20px;
    height: 300px;
    color: #fff;
    position: relative;
    &.bar-1,
    &.bar-3 {
      &::before {
        content: "";
        display: inline-block;
        position: absolute;
        width: 6px;
        height: 6px;
        border-radius: 50%;
        top: -3px;
        left: 0;
        right: 0;
        margin: auto;
      }
    }
    &.bar-1 {
      background-color: rgb(226, 90, 83);
      color: rgb(226, 90, 83);
      &::before {
        background-color: rgb(255, 153, 0);
      }
    }
    &.bar-2 {
      background-color: rgb(109, 117, 241);
      font-size: 16px;
      line-height: 60px;
      padding-top: 40px;
    }
    &.bar-3 {
      background-color: rgb(253, 179, 93);
      color: rgb(253, 179, 93);
      &::before {
        background-color: rgb(90, 185, 99);
      }
    }
  }
}
.bar-footer {
  background-color: rgba(252, 140, 168, 1);
  border-radius: 30px;
  height: 30px;
  line-height: 30px;
  display: flex;
  justify-content: space-between;
  color: rgb(152, 95, 109);
}
.people-num,
.gold-num {
  color: #fff;
}
.people-num {
  padding-left: 13px;
}
.gold-num {
  padding-right: 13px;
}
.count-down {
  margin-top: 40px;
  .text {
    letter-spacing: 60px;
    text-indent: 60px;
    text-align: center;
    margin: 5px 0;
  }
}
.button-buy {
  width: 120px;
  margin: auto;
  margin-top: 30px;
  font-size: 16px;
}
</style>
