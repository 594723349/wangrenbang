import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import fetch from "@/utils/fetch";
import "./assets/styles/reset.less";
import "element-ui/lib/theme-chalk/index.css";
import "./assets/styles/public.less";
import "amfe-flexible";

Vue.use(ElementUI);

Vue.prototype.$fetch = fetch;
Vue.config.productionTip = false;
Vue.config.devtools = true;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
