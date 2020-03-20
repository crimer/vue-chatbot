import VueCookie from "vue-cookie";

export default {
  // для поиска
  searchQuery: "",
  allQuestions: [],
  // для диалога
  dialog: [],
  isChatOpen: false,
  // другое
  session: VueCookie.get("session") || null,
  isOnline: false,
  botStatus: ""
};