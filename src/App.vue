<template>
  <div id="app">
    <div class="vvsu-chat-bot">
      <Chat />
      <ChatButton />
    </div>
  </div>
</template>

<script>
import Chat from "@/components/Chat";
import ChatButton from "@/components/ChatButton";

export default {
  name: "App",
  components: {
    Chat,
    ChatButton
  }
};
</script>

<style lang="css">

</style>
