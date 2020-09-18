module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  publicPath: process.env.NODE_ENV === 'production'
    ? '/vvsu-chat-bot/vue-chatbot/'
    : '/'
}