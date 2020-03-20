export default {
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
};