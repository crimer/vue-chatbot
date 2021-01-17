<template>
  <div id="app">
    <div class="vvsu-chat-bot">
      <Chat />
      <ChatButton />
      <PhoneButton />
      <ModalPhone />
    </div>
  </div>
</template>

<script>
import Chat from "@/components/Chat";
import ChatButton from "@/components/ChatButton";
import PhoneButton from "@/components/PhoneButton";
import ModalPhone from "@/components/ModalPhone";

export default {
  name: "App",
  components: {
    Chat,
    ChatButton,
    PhoneButton,
    ModalPhone
  },
};
</script>

<style lang="css"></style>
