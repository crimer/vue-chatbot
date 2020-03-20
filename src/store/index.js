import Vue from "vue";
import Vuex from "vuex";

import state from './state'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex);

// хранилище доступное из любого места приложения
export default new Vuex.Store({
  // state - переменные хранилища
  state,
  // getters - возвращают модифицированные даные
  getters,
  // mutations - изменяют состояния хранилища (state)
  // не писать ничего кроме изменения state
  mutations,
  // actions - используются для всего асинхронного
  actions
});
