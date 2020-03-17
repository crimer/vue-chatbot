<template>
  <div class="search-block">
    <div class="search-block__wrapper">
      <input
        type="text"
        name="search"
        placeholder="Ваш вопрос"
        autocomplete="off"
        class="search-block__input"
        v-model="query"
        @keydown.up="up"
        @keydown.down="down"
        @focus="showList = true"
        @blur="showList = false"/>
      <button
        type="reset"
        class="search-block__reset"
        @click="closeList"
        v-show="searchQuery !== ''">
        &times;
      </button>
    </div>
    <ul class="list" role="listbox" ref="questionsList" v-show="showList">
      <li
        v-for="question in searchedQuestion"
        :key="question.id"
        role="option"
        class="list__search-item"
        :class="{ selected: selectedId === question.id }"
        @click="itemClick(question.id)">
        <p v-html="highlightKeyword(question.body)"></p>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapState, mapMutations, mapGetters } from "vuex";

export default {
  name: "Search",
  data() {
    return {
      itemHeight: 80,
      selectedItem: null,
      selectedId: null,
      showList: false
    };
  },
  computed: {
    ...mapState(["searchQuery", "allQuestions"]),
    ...mapGetters(["searchedQuestion", "getSearchQuestionById"]),
    query: {
      set(val) {
        return this.setSearchQuery(val);
      },
      get() {
        return this.searchQuery;
      }
    }
  },
  methods: {
    ...mapMutations(["CLEAR_QUERY"]),
    closeList() {
      this.CLEAR_QUERY();
      this.showList = false;
    },
    // получаю из хранилища action'ы
    ...mapActions(["setSearchQuery"]),
    // TODO: переделать родсветку (иногда не подсвечивает)
    highlightKeyword(str) {
      // если есть текст и запрос
      if (str && this.searchQuery) {
        var highlight = this.searchQuery.toLowerCase();
        return str
          .toLowerCase()
          .replace(
            new RegExp(highlight, "ig"),
            '<span class="highlight">$&</span class="highlight">'
          );
      } else {
        return str;
      }
    },

    itemClick(index) {
      this.selectedId = index;
      this.selectItem = this.getSearchQuestionById(this.selectedId);
      console.log(this.selectItem);
    },
    up() {
      if (this.selectedId === 0) return;
      this.selectedId -= 1;
      this.scrollToItem();
    },
    down() {
      if (this.selectedId >= this.dialog.length - 1) return;
      this.selectedId += 1;
      this.scrollToItem();
    },
    scrollToItem() {
      this.$refs.questionsList.scrollTop = this.selectedId * this.itemHeight;
    }
  }
};
</script>

<style lang="stylus">
@import '~@/assets/stylus/_colors.styl'
@import '~@/assets/stylus/search.styl'
</style>
