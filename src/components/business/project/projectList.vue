<template>
  <div class="project-list">
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <div class="project-item" v-for="(item, index) in data" :key="index">
        <div class="project-item-info left">
          <div class="title">
            <span style="color:#E91E63;">l</span>
            <span style="color:#5AB963;">l</span>{{ item.name }}<span style="color:#FF9900;">l</span>
            <span style="color:#169BD5;">l</span>&nbsp;
            <span class="ratio">(我占股{{ item.ratio }}%)</span>
          </div>
          <div class="desc">
            {{ item.desc }}
          </div>
        </div>
        <div class="project-item-action">
          <div>
            <img :src="item.logo" alt="" />
            <div class="btn">
              <slot name="action" v-bind:data="item" v-bind:index="index"></slot>
            </div>
          </div>
        </div>
      </div>
    </van-list>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      finished: false,
      loading: false
    };
  },
  methods: {
    onLoad() {
      this.loading = true;
      this.$emit("load", this.done);
    },
    done(isFinsh = false) {
      this.finished = isFinsh;
      this.loading = false;
    }
  }
};
</script>

<style lang="less" scoped>
.project-item {
  display: flex;
  justify-content: space-between;
  background-color: rgba(242, 242, 242, 1);
  margin: 2px 0;
  padding: 15px;
  font-size: 14px;
  .left {
    position: relative;
    &::before {
      content: "";
      position: absolute;
      display: inline-block;
      width: 1px;
      height: 80%;
      background-color: #ccc;
      right: -5px;
      top: 50%;
      transform: translateY(-50%);
    }
  }
  &-info {
    flex: 1;
    text-align: left;
    .title {
      font-weight: 700;
    }
    .ratio {
      color: #f56d91;
    }
    .desc {
      font-size: 12px;
      color: #999;
    }
  }
  &-action {
    width: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }
    .btn {
      width: 100%;
      margin-top: 10px;
    }
  }
}
</style>
