import Vue from "vue";
import App from "./App.vue";
import store from "./store/index";

import 'vue-instant/dist/vue-instant.css'
import VueInstant from 'vue-instant/dist/vue-instant.common'
import dateFilter from "./filter/date.filter";
import highlightWords from "./filter/highlight.filter";

Vue.use(VueInstant)

Vue.filter('dateFilter',dateFilter);
Vue.filter('highlightFilter', highlightWords);

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
// TODO: как-то заставить работать dotenv
