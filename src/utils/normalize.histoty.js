export const normalizeHistory = historyFromApi => {
  let history = [];
  let userMessage = {};
  historyFromApi.history.forEach(mes => {
    if (mes.selected) {
      userMessage.question = mes.selected;
      userMessage.question.user = true;
      userMessage.step = mes.step;
      userMessage.date = mes.date;
      delete mes.selected;
      history.push(mes);
      history.push(userMessage);
    } else {
      delete mes.selected;
      history.push(mes);
    }
    userMessage = {};
  });
  return history;
};