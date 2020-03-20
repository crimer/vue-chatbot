import VueCookie from "vue-cookie";

export default {
  SET_QUERY(state, payload) {
    state.searchQuery = payload;
  },
  CLEAR_QUERY(state) {
    state.searchQuery = "";
  },
  TOGGLE_CHAT(state, payload) {
    state.isChatOpen = payload;
  },
  SET_BOT_STATUS(state, payload) {
    state.botStatus = payload;
  },
  SET_COOKIE(state, payload) {
    state.session = payload;
    VueCookie.set("session", payload, { expires: "15m" });
  },
  CLEAR_COOKIE(state) {
    state.session = null;
    VueCookie.delete("session");
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
  }
};
