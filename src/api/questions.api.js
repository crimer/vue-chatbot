import axios from "axios";
// import url from "./url";

const http = axios.create({
  baseURL: process.env.VUE_APP_URL,
  // headers: {
  //   "Content-Type": "application/json"
  // }
});

const registerSession = () => {
  http.post();
};

const jsonPlaceholder = () => {
  http.get('/comments');
};

const getAll = () => {
  http.post();
};

const getHistory = () => {};

const back = () => {};

const getQuestion = () => {};

const checkSession = () => {};

const selectAnswer = () => {};

export {
  registerSession,
  getAll,
  getHistory,
  back,
  getQuestion,
  checkSession,
  selectAnswer,
  jsonPlaceholder
};
// TODO: УДАЛИТЬ jsonPlaceholder (это для тестов)