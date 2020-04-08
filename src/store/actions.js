import { normalizeHistory } from "../utils/normalize.histoty";
import * as api from "../api/questions.api";

const statusHandler = (
  type,
  errorStatusCode = null,
  text = "Извините что-то пошло не так. Перезагрузите страницу",
) => {
  commit("CLEAR_ALL");
  commit("SET_STATUS", { type, text, errorStatusCode });
};

export default {
  async FETCH_QUESTIONS({ commit }) {
    try {
      const res = await api.getAllQuestions();
      if (res.status === 200) {
        // вызываем мутацию SET_DIALOG и передаем в нее данные
        commit("SET_ALL_QUESTIONS", res.data);
      } else {
        statusHandler(
          "FETCH_QUESTIONS_STATUS",
          res.status,
          "Извините не удалось загрузить вопросы для поиска. Перезагрузите страницу"
        );
      }
    } catch (e) {
      statusHandler("FETCH_QUESTIONS_ERROR");
    }
  },

  async REGISTER_SESSION({ commit }) {
    try {
      const res = await api.registerSession();
      if (res.status === 200) {
        commit("SET_COOKIE", res.data.id);
      } else {
        statusHandler(
          "REGISTER_SESSION_STATUS",
          res.status,
          "Извините не удалось зарегестрировать сессию. Перезагрузите страницу"
        );
      }
    } catch (e) {
      statusHandler("REGISTER_SESSION_ERROR");
    }
  },

  async GET_QUESTION({ state, commit }) {
    try {
      const sessionId = state.session;
      const res = await api.getQuestion(sessionId);
      if (res.status === 200) {
        commit("SET_DIALOG", res.data);
      } else {
        statusHandler(
          "GET_QUESTION_STATUS",
          res.status,
          "Извините не удалось загрузить следующий вопрос. Перезагрузите страницу"
        );
      }
    } catch (e) {
      statusHandler("GET_QUESTION_ERROR");
    }
  },

  async CHECK_SESSION({ state }) {
    try {
      const sessionId = state.session;
      const res = await api.checkSession(sessionId);
      if (res.status === 200) {
        return res.data.status;
      } else {
        statusHandler(
          "CHECK_SESSION_STATUS",
          res.status,
          "Извините не удалось проверить сессию. Перезагрузите страницу"
        );
      }
    } catch (e) {
      statusHandler("CHECK_SESSION_ERROR");
    }
  },

  async GET_HISTORY({ state, commit }) {
    try {
      const sessionId = state.session;
      const res = await api.getHistory(sessionId);
      if (res.status === 200) {
        const history = await normalizeHistory(res.data);
        commit("SET_HISTORY", history);
      } else {
        statusHandler(
          "GET_HISTORY_STATUS",
          res.status,
          "Извините не удалось загрузить сессию. Перезагрузите страницу"
        );
      }
    } catch (e) {
      statusHandler("GET_HISTORY_ERROR");
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
      } else {
        statusHandler(
          "SELECT_ANSWER_STATUS",
          res.status,
          "Извините не удалось выбрать вопрос. Перезагрузите страницу"
        );
      }
    } catch (e) {
      statusHandler("SELECT_ANSWER_ERROR");
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
      } else {
        statusHandler(
          "BACK_STATUS",
          res.status,
          "Извините не удалось вернуться на предыдущий вопрос. Перезагрузите страницу"
        );
      }
    } catch (e) {
      statusHandler("BACK_ERROR");
    }
  }
};
