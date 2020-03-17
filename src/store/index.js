import Vue from "vue";
import Vuex from "vuex";
import VueCookie from "vue-cookie";
import {
  registerSession,
  checkSession,
  jsonPlaceholder,
  getQuestion,
  getHistory,
  selectAnswer,
  back
} from "../api/questions.api";

Vue.use(VueCookie);
Vue.use(Vuex);

// хранилище доступное из любого места приложения
export default new Vuex.Store({
  // state - переменные хранилища
  state: {
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
  },
  // getters - возвращают модифицированные даные
  getters: {
    getSearchQuestionById: state => id => {
      return state.allQuestions.find(q => q.id === id);
    },
    searchedQuestion: state => {
      if (state.searchQuery === "") return [];
      let questions = state.allQuestions.filter(q => {
        if (
          q.body.toLowerCase().indexOf(state.searchQuery.toLowerCase()) !== -1
        ) {
          return q;
        }
      });
      // нахожу совтадения и возвращаю первые 10 совпадений
      return questions.slice(0, 10);
    }
  },
  // mutations - изменяют состояния хранилища (state)
  // не писать ничего кроме изменения state
  mutations: {
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
    SET_ALL_QUESTIONS(state, payload) {
      state.allQuestions = payload;
    },
    BACK(state, step) {
      state.dialog.splice(step);
    }
  },
  // actions - используются для всего асинхронного
  actions: {
    setSearchQuery({ commit }, searchQuery) {
      commit("SET_QUERY", searchQuery);
    },
    // TODO: УДАЛИТЬ FETCH_DATA (это для тестов)
    async FETCH_DATA({ commit }) {
      try {
        const { data } = await jsonPlaceholder();
        // вызываем мутацию SET_DIALOG и передаем в нее данные
        commit("SET_ALL_QUESTIONS", data);
      } catch (e) {
        console.log(e);
      }
    },
    async REGISTER_SESSION({ commit }) {
      try {
        const res = await registerSession();
        if (res.status === 200) {
          commit("SET_COOKIE", res.data.id);
          console.log("session registred =>", res.data.id);
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
        console.log("lol", sessionId);

        const res = await getQuestion(sessionId);
        console.log("GET_QUESTION => ", res.data);

        if (res.status === 200) {
          commit("SET_DIALOG", res.data);
        } else {
          // TODO: ЧТО-ТО ТУТ ДЕЛАТЬ
          console.log("wroong", res.status);

          // commit("CLEAR_COOKIE");
        }
      } catch (e) {
        console.log("get question error", e);
      }
    },
    async CHECK_SESSION({ state }) {
      try {
        const sessionId = state.session;
        const res = await checkSession(sessionId);
        if (res.status === 200) {
          console.log("CHECK_SESSION =>", res.data.status);
          return res.data.status;
        } else {
          // TODO: ЧТО-ТО ТУТ ДЕЛАТЬ
          // commit("CLEAR_COOKIE");
        }
      } catch (e) {
        console.log("check session error", e);
      }
    },
    async GET_HISTORY({ state }) {
      try {
        const sessionId = state.session;
        const res = await getHistory(sessionId);
        if (res.status === 200) {
          console.log("history loaded");
        }
      } catch (e) {
        console.log("get history error", e);
      }
    },
    async SELECT_ANSWER({ state, commit }, questionId) {
      try {
        const sessionId = state.session;
        const res = await selectAnswer(sessionId, questionId);
        if (res.status === 200) {
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
        const res = await back(sessionId, countBack);
        if (res.status === 200) {
          commit("BACK", selfId);
        }
      } catch (e) {
        console.log("select answer error", e);
      }
    }
  }
});
