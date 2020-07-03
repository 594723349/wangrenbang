import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loading: false
  },
  mutations: {
    /**
     * 更新loading状态
     */
    UPDATE_LOADING(state, params) {
      if (typeof params !== "boolean") {
        state.loading = false;
      } else {
        state.loading = params;
      }
    }
  },
  actions: {},
  modules: {}
});
