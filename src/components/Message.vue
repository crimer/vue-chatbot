<template>
  <li class="block-message"
    :class="[message.question.user ? 'block-you-message' : 'block-bot-message']">
    <p class="block-message__text" v-html="message.question.text"></p>
    <ul class="block-message__answers">
      <li
        class="block-message__answer"
        :class="disableLinks"
        v-for="answer in message.answers"
        :key="answer.id">
        <span
          @click="selectAnswer(answer.id, answer.text, message.step)"
          v-html="answer.text">
        </span>
      </li>
    </ul>
    <div class="block-message__footer">
      <p class="block-message__footer__data">
        {{ date | dateFilter('time') }}
      </p>
      <a class="block-message__back"
        @click="BACK(selfId)"
        v-if="message.question.user">
        Назад
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
      tyoe: Number,
      required: true,
      default: 0
    }
  },
  // TODO: вомможно надо будет добавить к вопросу (от api) поле user
  // из-за динамического создания ногда бывают проблемы
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
        : this.$options.filters.dateFilter(new Date());
    }
  },
  methods: {
    ...mapMutations(["SET_DIALOG"]),
    ...mapActions(["SELECT_ANSWER", "BACK"]),
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
