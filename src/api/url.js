// экспорт методов api
export default {
  domain: process.env.VUE_APP_URL,
  paths: {
    back: "chat/back",
    select: "chat/select",
    history: "chat/history",
    getQuestion: "chat/get",
    checkSession: "session/check",
    registerSession: "session/register",
    keys: "chat/keys",
    phone: "chat/phone",
  }
};
