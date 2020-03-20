<template>
  <div class="chat-bot__dialog" ref="chatBody">
    <ul class="chat-bot__body">
      <Message
        v-for="(item, index) in dialog"
        :key="index + 1"
        :message="item"
        :selfId="index + 1"
      />
    </ul>
  </div>
</template>

<script>
import Message from "@/components/Message.vue";

export default {
  name: "Dialog",
  props: {
    dialog: {
      type: Array,
      required: true,
      default: []
    }
  },
  components: {
    Message
  },
  watch: {
    dialog() {
      const chatBody = this.$refs.chatBody;
     
      setTimeout(() => {
        chatBody.scrollTop = chatBody.scrollHeight;
      });
    }
  }
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
