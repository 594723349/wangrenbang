<template>
  <div class="c-layout-popup">
    <div class="header">
      <van-icon name="arrow-left" @click="back" />
      {{ title }}
    </div>
    <div class="body">
      <template v-if="tabs.length">
        <van-tabs v-model="activeName">
          <van-tab v-for="(name, index) in tabs" :key="index" :title="name">{{ name }}</van-tab>
        </van-tabs>
      </template>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tabs: {
      type: Array,
      default: () => []
    },
    title: {
      type: [String, Array],
      default: ""
    }
  },
  data() {
    return {
      activeName: ""
    };
  },
  methods: {
    back() {
      this.$emit("back");
    },
    handleClick(name) {
      console.log(name);
      this.$emit("change");
    }
  }
};
</script>

<style lang="less" scoped>
.header {
  position: relative;
  height: 40px;
  line-height: 40px;
  text-align: center;
  background-color: #e4e7ed;
  .van-icon {
    position: absolute;
    left: 5px;
    top: 50%;
    transform: translateY(-50%);
  }
}
</style>
