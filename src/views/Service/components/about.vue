<template>
  <div class="service-about">
    <b-banner text="全心全意为用户服务" bg-color="rgba(59, 172, 106, 0.8"></b-banner>
    <div class="about-item plan-detail">聚合联创计划说明</div>
    <div class="about-item project-money">
      <div class="title">项目启动资金</div>
      <div class="money">￥132.132.00</div>
    </div>
    <div class="about-item project-center">项目中心</div>
  </div>
</template>

<script>
import BBanner from "./banner";
export default {
  components: {
    "b-banner": BBanner
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="less" scoped>
.service-about {
  font-size: 18px;
}
.about-item {
  margin: auto;
  margin-bottom: 10px;
  border-radius: 10px;
}
.plan-detail {
  width: 300px;
  height: 100px;
  line-height: 100px;
  background-color: rgba(90, 185, 99, 0.8);
  color: #fff;
  font-weight: 700;
}
.project-money {
  width: 230px;
  height: 80px;
  padding-top: 10px;
  background-color: rgba(255, 224, 104, 0.8);
  padding-top: 15px;
  .title {
    font-size: 12px;
  }
  .money {
    font-size: 24px;
    font-weight: 700;
    margin-top: 5px;
  }
}
.project-center {
  width: 150px;
  height: 40px;
  line-height: 41px;
  background-color: rgba(109, 117, 241, 1);
  color: #fff;
}
</style>
