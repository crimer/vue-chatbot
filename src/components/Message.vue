<template>
  <li
    class="block-message"
    :class="[message.question.user ? 'block-you-message' : 'block-bot-message']"
  >
    <p class="block-message__text" v-html="message.question.text"></p>
    <ul class="block-message__answers" v-if="message.answers">
      <li
        class="block-message__answer"
        :class="disableLinks"
        v-for="answer in message.answers"
        :key="answer.id"
      >
        <span
          @click="selectAnswer(answer.id, answer.text, message.step)"
          v-html="answer.text"
        >
        </span>
      </li>
    </ul>
    <div class="block-message__footer">
      <p class="block-message__footer__data" v-if="!message.question.user">
        {{ date }}
      </p>
      <a
        class="block-message__back"
        @click="toBackQuestion(selfId)"
        v-if="message.question.user"
      >
        Назад
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          version="1.1"
          id="Capa_1"
          x="0px"
          y="0px"
          width="13px"
          height="10px"
          viewBox="0 0 459 459"
          style="enable-background:new 0 0 459 459;"
          xml:space="preserve"
        >
          <path
            xmlns="http://www.w3.org/2000/svg"
            d="M178.5,140.25v-102L0,216.75l178.5,178.5V290.7c127.5,0,216.75,40.8,280.5,130.05C433.5,293.25,357,165.75,178.5,140.25z"
          />
        </svg>
      </a>
    </div>
  </li>
</template>

<script>
import { mapActions, mapMutations } from "vuex";
export default {
  name: "Message",
  // аргументы которые принимает компонент
  props: {
    message: {
      type: Object,
      required: true,
      default: {}
    },
    selfId: {
      type: Number,
      required: true,
      default: 0
    }
  },
  data() {
    return {};
  },
  computed: {
    disableLinks() {
      // если selfId сообщения равен последнему элементу в массиве dialog
      // то значит это последнее сообщения (от бота) (сообщения бота всегда последнии)
      // и его я не выключаю, а предыдущие выключаю
      return this.selfId === this.$store.state.dialog.length ? "" : "disabled";
    },
    date() {
      return this.message.date
        ? this.message.date
        : this.$options.filters.timeFilter(new Date());
    }
  },
  methods: {
    ...mapMutations(["SET_DIALOG"]),
    ...mapActions(["SELECT_ANSWER", "BACK"]),

    toBackQuestion(selfId) {
      this.BACK(selfId);
    },

    selectAnswer(answerId, answerText, messageStep) {
      //  формирую сообщение юзера
      const question = {
        question: {
          id: answerId,
          text: answerText,
          user: true
        },
        step: messageStep
      };
      // пихаю сообщение юзера в диалог
      this.SET_DIALOG(question);
      // вызываю следующий вопрос
      this.SELECT_ANSWER(answerId);
    }
  }
};
</script>

<style lang="stylus">
@import '~@/assets/stylus/_colors.styl'
@import '~@/assets/stylus/message.styl'
</style>
