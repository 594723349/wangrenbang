<template>
  <div class="servie-wrapper">
    <c-menu :active="0"></c-menu>
    <c-tab :tabs="tabs" :active.sync="tabActiveIndex">
      <component :is="currentComponent"></component>
    </c-tab>
  </div>
</template>

<script>
import Menu from "@/components/comm/Header";
import Tab from "@/components/comm/Tab";
import Resource from "./components/resource";
import Welfare from "./components/welfare";
import About from "./components/about";
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
          label: "资源共享"
        },
        {
          label: "每日福利"
        },
        {
          label: "聚合联创"
        }
      ]
    };
  },
  computed: {
    currentComponent() {
      if (this.tabActiveIndex === 0) {
        return Resource;
      } else if (this.tabActiveIndex === 1) {
        return Welfare;
      } else if (this.tabActiveIndex == 2) {
        return About;
      }
      return Resource;
    }
  },
  methods: {}
};
</script>

<style></style>
