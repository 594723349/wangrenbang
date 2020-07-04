<template>
  <div class="servie-wrapper">
    <c-menu :active="0"></c-menu>
    <c-tab :tabs="tabs" :active="tabActiveIndex">
      <component :is="currentComponent"></component>
    </c-tab>
  </div>
</template>

<script>
import Menu from "@/components/comm/Header";
import Tab from "@/components/comm/Tab";
export default {
  name: "ServiceIndex",
  components: {
    "c-menu": Menu,
    "c-tab": Tab
  },
  data() {
    return {
      tabActiveIndex: 0,
      tabs: [
        {
          label: "幸运锦鲤"
        },
        {
          label: "参与计划"
        },
        {
          label: "详情记录"
        }
      ]
    };
  },
  methods: {}
};
</script>

<style></style>
