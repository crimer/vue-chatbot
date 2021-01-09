import Vue from "vue";

import * as Sentry from "@sentry/browser";
import { Integrations } from "@sentry/tracing";

import App from "./App.vue";
import store from "./store/index";
import timeFilter from "./filter/time.filter";

Sentry.init({
  Vue,
  dsn: "https://fe4f7257d085491caab0e7d946a67d5c@dsn.frogling.com/5",
  autoSessionTracking: true,
  logErrors: true,
  integrations: [
    new Integrations.BrowserTracing(),
  ],

  // We recommend adjusting this value in production, or using tracesSampler
  // for finer control
  tracesSampleRate: 1.0,
});

// подключение аильтра dateFilter по имени dateFilter
Vue.filter('timeFilter',timeFilter);

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
