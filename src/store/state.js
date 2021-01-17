import VueCookie from "vue-cookie";

export default {
  // список вопросов для поиска
  allQuestions: [],
  // для диалога
  dialog: [],
  // чат открыт/закрыт
  isChatOpen: false,
  // кнопка "оставтье номер телефона" 
  isShowPhoneButton: false,
  // сессия
  session: VueCookie.get("session") || null,
  // статус
  status: {},
  // status: {text: 'Не удалось загрузить вопросы для поиска', errorStatusCode: 403},
  loadingQuestion: false,
};