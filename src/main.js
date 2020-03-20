import Vue from "vue";
import App from "./App.vue";
import store from "./store/index";
import dateFilter from "./filter/date.filter";

Vue.filter('dateFilter',dateFilter);

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
