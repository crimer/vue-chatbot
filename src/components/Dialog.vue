<template>
  <div class="chat-bot__dialog" ref="chatBody">
    <ul class="chat-bot__body">
      <Message
        v-for="(item, index) in dialog"
        :key="index + 1"
        :message="item"
        :selfId="index + 1"/>
        <Loader v-if="loadingQuestion"/>
    </ul>
  </div>
</template>

<script>
import Message from "@/components/Message.vue";
import { mapState } from 'vuex';
import Loader from '@/components/Loader.vue';

export default {
  name: "Dialog",
  components: {
    Message, Loader
  },
  props: {
    dialog: {
      type: Array,
      required: true,
      default: []
    }
  },
  computed: {
    ...mapState(["loadingQuestion"]),
  },
  watch: {
    dialog() {
      // на кождое изменение dialog (в store) список будет прокручиваться вниз
      const chatBody = this.$refs.chatBody;
      setTimeout(() => {
        chatBody.scrollTop = chatBody.scrollHeight;
      });
    }
  },
  
};
</script>

<style lang="stylus">
.chat-bot
    &__dialog
    overflow-x hidden
    overflow-y scroll
    overflow -moz-scrollbars-none
    -ms-overflow-style none
    flex 1 1 auto
    .text-helper
      color: #878b90;
      font-size: 14px;
      line-height: 24px;
      margin 0 auto

    &::-webkit-scrollbar
      width 0px

ul, ol > li
  list-style-type none
</style>
