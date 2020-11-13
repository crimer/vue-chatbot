import VueCookie from "vue-cookie";

export default {
  // в каждой мутации state должен идти как первый аргумент
  TOGGLE_CHAT(state, payload) {
    // state - переменные хранилища
    // payload - данные
    state.isChatOpen = payload;
  },
  SET_BOT_STATUS(state, payload) {
    state.botStatus = payload;
  },
  SET_COOKIE(state, payload) {
    state.session = payload;
    VueCookie.set("session", payload, { expires: "3h" });
  },
  CLEAR_COOKIE(state) {
    state.session = null;
    VueCookie.delete("session");
  },
  CLEAR_ALL(state) {
    state.allQuestions = [];
    state.dialog = [];
    state.isChatOpen = false;
    state.session = null;
    VueCookie.delete("session");
    state.status = {};
  },
  SET_DIALOG(state, payload) {
    state.dialog.push(payload);
  },
  SET_HISTORY(state, payload) {
    state.dialog = payload;
  },
  SET_ALL_QUESTIONS(state, payload) {
    state.allQuestions = payload;
  },
  BACK(state, step) {
    state.dialog.splice(step);
  },
  SET_STATUS(state, status) {
    state.status = status;
  },
  SET_LOADING_QUESTION(state, payload) {
    state.loadingQuestion = payload;
  }
};
