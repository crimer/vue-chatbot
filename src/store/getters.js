import tokenize from "@/utils/tokenizeText.js";

export default {
  getSearchQuestionById: state => id => {
    return state.allQuestions.answers.find(q => q.id === id);
  },
  searchedQuestion: state => searchQuery => {
    if (searchQuery === "") return [];
    // let query = tokenize(state.searchQuery);
    // console.log(query);

    let questions = state.allQuestions.answers.filter(q => {
      // Поиск по тексту вопроса и ключевым словам
      // TODO: нормализация слов и поиск только по ключевым словам
      var text = q.text + " " + q.keys;
      if (text.toLowerCase().indexOf(searchQuery.toLowerCase()) !== -1) {
        return q;
      }
    });
    // нахожу совтадения и возвращаю первые 10 совпадений
    return questions.slice(0, 10);
  },

};
