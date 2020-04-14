import Vue from "vue";
import App from "./App.vue";
import store from "./store/index";
import timeFilter from "./filter/time.filter";
// подключение аильтра dateFilter по имени dateFilter
Vue.filter('timeFilter',timeFilter);

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
