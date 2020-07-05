<template>
  <div class="service-search">
    <div v-show="!isSearch" class="tabs-box">
      <van-tabs v-model="active" @change="tabChange">
        <van-tab title="最新" name="new"></van-tab>
        <van-tab title="最热" name="hot"></van-tab>
        <van-tab title="关注" name="follow"></van-tab>
      </van-tabs>
      <van-icon class="search-icon" name="search" color="#CCCCCC" size="16px" @click="handleSearchVisible" />
    </div>
    <div v-show="isSearch" class="search-box">
      <van-field v-model="searchValue" placeholder="搜索" :center="true">
        <template #button>
          <van-icon class="file-search-btn" name="search" color="#CCCCCC" size="16px" @click="searchChange" />
        </template>
      </van-field>
      <van-icon class="close-search" name="cross" size="16px" @click="handleSearchVisible(false)" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: "new",
      isSearch: false,
      searchValue: ""
    };
  },
  methods: {
    handleSearchVisible(visible = true) {
      this.isSearch = visible;
    },
    tabChange(name) {
      this.$emit("change", {
        type: name
      });
    },
    searchChange(value) {
      this.$emit("change", {
        type: name,
        search: value
      });
    }
  }
};
</script>

<style lang="less" scoped>
.service-search {
  position: relative;
  height: 40px;
}
.tabs-box {
  width: 200px;
  margin: auto;
}
.search-box {
  position: relative;
  width: 200px;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 5px;
  /deep/ .van-cell {
    padding: 0 5px;
  }
}
.search-icon {
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
}
/deep/ .van-tabs {
  .van-tabs__wrap {
    height: 35px;
  }
  [class*="van-hairline"]::after {
    border: none;
  }
}
/deep/ .van-field__body {
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 0 10px;
}
.file-search-btn {
  vertical-align: middle;
  margin-top: -3px;
}
</style>
