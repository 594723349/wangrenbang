<template>
  <van-popup
    v-model="visible"
    position="right"
    :safe-area-inset-bottom="true"
    :close-on-click-overlay="false"
  >
    <c-popup-layout :title="title" @back="visible = false" :tabs="tabs">
      <c-Join-history v-if="type === 'join'"></c-Join-history>
      <c-koifish-history v-else-if="type === 'koiFish'"></c-koifish-history>
    </c-popup-layout>
  </van-popup>
</template>

<script>
import JoinHistory from "./JoinHistory";
import KoifishHistory from "./KoifishHistory";
import PopupLayout from "@/components/comm/PopupLayout";
export default {
  components: {
    "c-Join-history": JoinHistory,
    "c-koifish-history": KoifishHistory,
    "c-popup-layout": PopupLayout
  },
  data() {
    return {
      visible: false,
      type: "",
      tabs: []
    };
  },
  computed: {
    title() {
      const map = {
        join: "历史参与记录",
        koiFish: "历史幸运锦鲤",
        "2": "充值记录",
        "3": "提现记录"
      };
      return map[this.type];
    }
  },
  methods: {
    open(config) {
      this.type = config.type;
      this.tabs = config.tabs || [];
      this.visible = true;
    },
    close() {
      this.visible = false;
    }
  }
};
</script>

<style lang="less">
.van-popup--right {
  width: 100%;
}
</style>
