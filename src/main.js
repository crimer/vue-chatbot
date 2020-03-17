import Vue from "vue";
import App from "./App.vue";
import store from "./store/index";
import dateFilter from "./filter/date.filter";
import Autocomplete from '@trevoreyre/autocomplete-vue'
import '@trevoreyre/autocomplete-vue/dist/style.css'

Vue.use(Autocomplete)
Vue.filter('dateFilter',dateFilter);

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
