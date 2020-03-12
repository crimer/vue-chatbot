import Vue from "vue";
import Vuex from "vuex";
import VueCookie from "vue-cookie";
import Axios from "axios";

Vue.use(VueCookie);
Vue.use(Vuex);
// хранилище доступное из любого места приложения
export default new Vuex.Store({
  state: {
    // state - переменные хранилища
    searchQuery: "",
    dialog: [],
    isChatOpen: false,
    session: VueCookie.get("session") || null,
    isOnline: false,
    botStatus: ""
  },
  getters: {
    getSearchQuestionById: state => id => {
      return state.dialog.find(q => q.id === id);
    },
    // getters - возвращают модифицированные даные
    searchedQuestion: state => {
      if (state.searchQuery === "") return [];
      let questions = state.dialog.filter(q => {
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
  mutations: {
    // mutations - изменяют состояния хранилища (state)
    // не писать ничего кроме изменения state
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
    },
    SET_DIALOG(state, payload) {
      state.dialog = payload;
    }
  },
  actions: {
    // actions - используются для всего асинхронного
    setSearchQuery({ commit }, searchQuery) {
      commit("SET_QUERY", searchQuery);
    },
    // searchedQuestion({state}) {
    //   if (state.searchQuery === "") return [];
    //   return state.dialog.filter(q => {
    //     // let regex = new RegExp("(" + state.searchQuery.toLowerCase() + ")", "i");
    //     // let res = q.body.toLowerCase().match(regex);
    //     let res = q.body.toLowerCase().includes(state.searchQuery.toLowerCase());
    //     console.log(res);

    //     return res.length > 10 ? res.slice(0, 10) : res;
    //   });
    // },
    // TODO: УДАЛИТЬ FETCH_DATA (это для тестов)
    async FETCH_DATA({ commit }) {
      try {
        const { data } = await Axios.get(
          "https://jsonplaceholder.typicode.com/comments"
        );
        commit("SET_DIALOG", data); // вызываем мутацию SET_DIALOG и передаем в нее данные
      } catch (e) {
        console.log(e);
      }
    },
    async REGISTER_SESSION({ commit }) {
      try {
        // const { data } = await Axios.post(`${api.url}${api.paths.registerSession}`);
        // const response = await registerSession();
        if (response.ok) {
          // const result = await response.json();
          // commit('SET_COOKIE',result);
          console.log("session registred", response);
        }
      } catch (error) {
        console.log("register session error", error);
        commit("SET_BOT_STATUS", "Ошибка :)"); // вызываем мутацию SET_BOT_STATUS и передаем в нее данные
      }
    }
  }
});
