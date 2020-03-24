<template>
  <div class="search-block">
    <div class="search-block__wrapper">
      <input type="text"
        name="search"
        placeholder="Ваш вопрос"
        autocomplete="off"
        class="search-block__input"
        v-model="query"
        @input="input()"
        @focus="showList = true"/>
      <button
        type="reset"
        class="search-block__reset"
        @click="closeList"
        v-show="query !== ''">
        &times;
      </button>
    </div>
    <div>
      <ul class="list" ref="questionsList" v-show="showList">
        <li v-for="question in allQuestions"
          :key="question.id"
          role="option"
          class="list__search-item"
          :class="{ selected: selectedId === question.id }"
          @click="itemClick(question.id)">
          <p v-html="highlightText(question.text)"></p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState, mapMutations, mapGetters } from "vuex";
import {tokenizeText} from '@/utils/tokenizeText.js';

export default {
  name: "Search",
  data() {
    return {
      query: '',
      selectedItem: null,
      selectedId: 0,
      showList: false
    };
  },
  computed: {
    ...mapState(["allQuestions"]),
    ...mapGetters(["searchedQuestion","getSearchQuestionById"]),
    allQuestions(){
      return this.searchedQuestion(this.query);
    },
  },
  methods: {
    ...mapMutations(["SET_DIALOG"]),
    ...mapActions(["SELECT_ANSWER"]),
    highlightText(str) {
      // если есть текст и запрос
      if (str && this.query) {
        var highlight = this.query.toLowerCase();
        return str
          .replace(
            new RegExp(highlight, "ig"),
            '<span class="highlight">$&</span class="highlight">'
          );
      } else {
        return str;
      }
    },
    input(){
      tokenizeText(this.query);
    },
    itemClick(questionId) {
      this.showList = false
      this.selectedId = questionId;
      this.selectedItem = this.getSearchQuestionById(this.selectedId);
      //  формирую сообщение юзера
      const question = {
        question: {
          id: this.selectedItem.id,
          text: this.selectedItem.text,
          user: true
        },
        // step: messageStep
      };
      // пихаю сообщение юзера в диалог
      this.SET_DIALOG(question);
      // вызываю следующий вопрос
      this.SELECT_ANSWER(this.selectedId);
    },
    closeList() {
      this.query = '';
      this.showList = false;
    },
  }
};
</script>

<style lang="stylus">
@import '~@/assets/stylus/_colors.styl'
@import '~@/assets/stylus/search.styl'
</style>
