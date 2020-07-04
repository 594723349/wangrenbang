<template>
  <div class="wrapper plan-wrapper">
    <div class="page-header">
      <c-menu :active="1"></c-menu>
      <c-tab :tabs="tabs" :active="tabActiveIndex"></c-tab>
    </div>
    <component :is="currentComponent"></component>
  </div>
</template>

<script>
import Menu from "@/components/comm/Header";
import Tab from "@/components/comm/Tab";
import Buy from "./components/buy";
export default {
  name: "PlanIndex",
  components: {
    "c-menu": Menu,
    "c-tab": Tab
  },
  data() {
    return {
      activeIndex: 1,
      tabActiveIndex: 1,
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
  computed: {
    currentComponent() {
      if (this.tabActiveIndex === 0) {
        return Buy;
      }
      return Buy;
    }
  },
  methods: {}
};
</script>

<style></style>
