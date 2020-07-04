<template>
  <div class="c-comment">
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <div class="comment-item infinite-list-item" v-for="(item, index) in data" :key="index">
        <div class="comment-info">
          <div class="message-box">
            <img class="avatar" :src="item.avatar" />
            <div>
              <div class="nickname">
                {{ item.nickname }}
                <img v-if="item.sex === 0" class="sex" src="@/assets/img/man.png" />
                <img v-if="item.sex === 1" class="sex" src="@/assets/img/women.png" />
              </div>
              <div class="time">{{ item.createTime }}</div>
            </div>
          </div>
          <div class="action">
            <slot v-bind:data="item"></slot>
          </div>
        </div>
        <div class="comment-content">
          <div class="content">{{ item.content }}</div>
          <div class="links">
            <a v-for="(link, linkIndex) in item.links" :key="linkIndex" :href="link.url" target="_blank">{{
              link.text
            }}</a>
          </div>
          <div class="imgs">
            <div class="img-item" v-for="(img, imgIndex) in item.imgs" :key="imgIndex">
              <img :src="img" />
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
.c-comment {
  font-size: 14px;
  text-align: left;
}
.comment-item {
  margin-bottom: 10px;
  background-color: #fff;
  border-bottom: 5px solid rgb(247, 247, 247);
  padding: 10px 10px;
}
.comment-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
}
.message-box {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-align: left;
}
.imgs {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  .img-item {
    height: 100px;
    width: 100px;
    overflow: hidden;
    margin-right: 5px;
  }
  img {
    object-fit: cover;
    height: auto;
    width: 100%;
    min-height: 100%;
  }
}
.nickname {
  font-weight: 600;
}
.time {
  color: #999999;
  font-size: 12px;
}
.sex {
  width: 10px;
}
.links {
  color: #6d75f1;
  a {
    margin-right: 5px;
    font-size: 12px;
  }
}
.comment-content > div {
  margin-top: 10px;
}
.more {
  text-align: center;
  margin-bottom: 10px;
  span {
    padding: 10px;
  }
}
</style>
