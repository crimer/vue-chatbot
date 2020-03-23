import axios from "axios";
import url from "./url";

// экземпляр axios для обращения к api
const http = axios.create({
  baseURL: url.domain
});

export const getAll = () => {
  return http.post();
};
// экспорт метода getHistory, который принемает sessionId и отправляет post
// запрос на url.paths.history, с атрибутом id
export const getHistory = sessionId => {
  return http.post(url.paths.history, {
    id: sessionId
  });
};
export const back = (sessionId, step) => {
  return http.post(url.paths.back, {
    id: sessionId,
    step: step
  });
};

export const getQuestion = sessionId => {
  return http.post(url.paths.getQuestion, {
    id: sessionId
  });
};

export const registerSession = () => {
  return http.post(url.paths.registerSession);
};

export const checkSession = sessionId => {
  return http.post(url.paths.checkSession, {
    id: sessionId
  });
};
export const getAllQuestions = () => {
  return http.post(url.paths.keys);
};

export const selectAnswer = (sessionId, questionId) => {
  return http.post(url.paths.select, {
    id: sessionId,
    select: questionId
  });
};
