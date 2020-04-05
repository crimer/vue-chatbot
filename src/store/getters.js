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
      if (q.text.toLowerCase().indexOf(searchQuery.toLowerCase()) !== -1) {
        return q;
      }
      if (q.keys.toLowerCase().indexOf(searchQuery.toLowerCase()) !== -1) {
        return q;
      }
    });
    // нахожу совтадения и возвращаю первые 10 совпадений
    return questions.slice(0, 10);
  }
};
