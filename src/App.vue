<template>
  <div id="app">
    <div class="vvsu-chat-bot">
      <Chat />
      <ChatButton />
      <PhoneButton />
    </div>
  </div>
</template>

<script>
import Chat from "@/components/Chat";
import ChatButton from "@/components/ChatButton";
import PhoneButton from "@/components/PhoneButton";

export default {
  name: "App",
  components: {
    Chat,
    ChatButton,
    PhoneButton
  },
};
</script>

<style lang="css"></style>
