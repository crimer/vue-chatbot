import VueCookie from "vue-cookie";

export default {
  // список вопросов для поиска
  allQuestions: [],
  // для диалога
  dialog: [],
  // чат открыт/закрыт
  isChatOpen: false,
  // сессия
  session: VueCookie.get("session") || null,
};