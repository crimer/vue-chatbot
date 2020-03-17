import axios from "axios";
import url from "./url";

const http = axios.create({
  baseURL: url.domain
});

const jsonPlaceholder = () => {
  return http.get("https://jsonplaceholder.typicode.com/comments");
};

const getAll = () => {
  return http.post();
};

const getHistory = sessionId => {
  return http.post(url.paths.history, {
    id: sessionId
  });
};
const back = (sessionId, step) => {
  return http.post(url.paths.back, {
    id: sessionId,
    step: step
  });
};

const getQuestion = sessionId => {
  return http.post(url.paths.getQuestion, {
    id: sessionId
  });
};

const registerSession = () => {
  return http.post(url.paths.registerSession);
};

const checkSession = sessionId => {
  return http.post(url.paths.checkSession, {
    id: sessionId
  });
};

const selectAnswer = (sessionId, questionId) => {
  return http.post(url.paths.select, {
    id: sessionId,
    select: questionId
  });
};

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
