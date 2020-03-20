export const normalizeHistory = historyFromApi => {
  let history = [];
  let userMessage = {};
  historyFromApi.history.forEach(mes => {
    if(mes.selected) {
      userMessage.question = mes.selected;
      userMessage.question.user = true;
      userMessage.step = mes.step;
      userMessage.date = mes.date;
      delete mes.selected;
      history.push(mes);
      history.push(userMessage);
    }else{
      delete mes.selected;
      history.push(mes);
    }
    // if(mes.selected)
    userMessage = {};
  });
return history;
};

// TODO: убрать потом
// история какая должна быть
const template = [
  // bot
  {
    question: { id: 1, text: "Здравствуйте, чем мы можем вам помочь?" },
    step: 1,
    answers: [{ id: 19, text: "Вопросы по поступлению", keys: null }]
  },
  // user
  { question: { id: 19, text: "Вопросы по поступлению", user: true }, step: 1 },
  // bot
  {
    question: { id: 17, text: "Что вас интересует?" },
    step: 2,
    answers: [
      {
        id: 20,
        text: "Какой распорядок работы приёмной комиссии?",
        keys: "распорядок работа комиссия"
      },
      {
        id: 21,
        text: "Какие сроки приема документов для поступления?",
        keys: "срок прием документ сдача поступление"
      },
      {
        id: 22,
        text: "Где можно заполнить заявление о поступлении?",
        keys: "заявление поступление заполнить"
      },
      {
        id: 23,
        text: "По какому адресу находится приёмная комиссия?",
        keys: "адрес коммисия"
      }
    ]
  }
  // user
];

// история которая приходит с api
const h = {
  history: [
    {
      question: {
        id: 1,
        text: "Здравствуйте, чем мы можем вам помочь?"
      },
      selected: {
        id: 19,
        text: "Вопросы по поступлению",
        keys: null
      },
      answers: [
        {
          id: 19,
          text: "Вопросы по поступлению",
          keys: null
        }
      ],
      date: "18.03.2020 12:30:37",
      step: 1
    },
    {
      question: {
        id: 17,
        text: "Что вас интересует?"
      },
      selected: null,
      answers: [
        {
          id: 20,
          text: "Какой распорядок работы приёмной комиссии?",
          keys: "распорядок работа комиссия"
        },
        {
          id: 21,
          text: "Какие сроки приема документов для поступления?",
          keys: "срок прием документ сдача поступление"
        },
        {
          id: 22,
          text: "Где можно заполнить заявление о поступлении?",
          keys: "заявление поступление заполнить"
        },
        {
          id: 23,
          text: "По какому адресу находится приёмная комиссия?",
          keys: "адрес коммисия"
        }
      ],
      date: "18.03.2020 12:30:54",
      step: 2
    }
  ],
  step: 2
};
