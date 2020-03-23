import { normalizeHistory } from "../utils/normalize.histoty";
import * as api from "../api/questions.api";

export default {
  async FETCH_QUESTIONS({ commit }) {
    try {
      const res = await api.getAllQuestions();
      if(res.status === 200){
        // вызываем мутацию SET_DIALOG и передаем в нее данные
        commit("SET_ALL_QUESTIONS", res.data);
      }
    } catch (e) {
      console.log('fetch questions faild',e);
    }
  },

  async REGISTER_SESSION({ commit }) {
    try {
      const res = await api.registerSession();
      if (res.status === 200) {
        commit("SET_COOKIE", res.data.id);
      } else {
        // TODO: ЧТО-ТО ТУТ ДЕЛАТЬ
        commit("CLEAR_COOKIE");
      }
    } catch (e) {
      console.log("register session error", e);
      commit("CLEAR_COOKIE");
    }
  },

  async GET_QUESTION({ state, commit }) {
    try {
      const sessionId = state.session;
      const res = await api.getQuestion(sessionId);
      if (res.status === 200) {
        commit("SET_DIALOG", res.data);
      } else {
        // TODO: ЧТО-ТО ТУТ ДЕЛАТЬ
        console.log("wroong", res.status);
      }
    } catch (e) {
      console.log("get question error", e);
    }
  },

  async CHECK_SESSION({ state }) {
    try {
      const sessionId = state.session;
      const res = await api.checkSession(sessionId);
      if (res.status === 200) {
        return res.data.status;
      } else {
        // TODO: ЧТО-ТО ТУТ ДЕЛАТЬ
      }
    } catch (e) {
      console.log("check session error", e);
    }
  },

  async GET_HISTORY({ state, commit }) {
    try {
      const sessionId = state.session;
      const res = await api.getHistory(sessionId);
      if (res.status === 200) {
        const history = await normalizeHistory(res.data);
        commit("SET_HISTORY", history);
      }
    } catch (e) {
      console.log("get history error", e);
    }
  },
  // работаем с запросами к api
  // первый агрумент context у которого есть state, commit, dispatch, getters
  // { state, commit } берем из context только то что нужно
  // questionId аргумент который передаем в action
  async SELECT_ANSWER({ state, commit }, questionId) {
    try {
      // получаем из state сессию
      const sessionId = state.session;
      // получаем ответ с api
      const res = await api.selectAnswer(sessionId, questionId);
      if (res.status === 200) {
        // commit вызывает мутацию SET_DIALOG в которую передаем res.data в качестве payload
        commit("SET_DIALOG", res.data);
      }
    } catch (e) {
      console.log("select answer error", e);
    }
  },

  async BACK({ state, commit }, selfId) {
    try {
      // сообщение бота идущее перед сообщением на котором нажали "назад"
      // то к которому нам надо вернутся
      const backToElement = selfId - 1;
      // кол-во шагов которых надо сделать чтоб вернуться к нужному сообщению
      const countBack = (state.dialog.length - backToElement) / 2;
      const sessionId = state.session;
      const res = await api.back(sessionId, countBack);
      if (res.status === 200) {
        commit("BACK", backToElement);
      }
    } catch (e) {
      console.log("back error", e);
    }
  }
};
