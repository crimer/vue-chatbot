<template>
  <div class="body__phone">
  <form class="modal__phone" :class="{ isActive: isModalPhoneOpen }">
  <h1 class="modal__phone__title">
  Остались вопросы? 
  <br>
  Оставьте номер телефона и мы перезвоним вам
  </h1>
  <div class="modal__phone__number">
    <input type="text" title="Используйте только цифры" v-model="phone" class="modal__phone__input" placeholder="89001234567" pattern="\d+">
  </div>
  <button type='button' class="modal__phone__button" @click="sendPhone">Отправить</button>
  <button type='button' class="modal__phone__button__back" @click="cancel">Отмена</button>
 </form>
 </div>
</template>

<script>
import { mapState, mapMutations, mapActions} from "vuex";

export default {
  name: "ModalPhone",
  computed: {
    ...mapState(["isModalPhoneOpen", "session"])
  },
  data() {
    return {
      phone: null
    }
  },
  methods: {
    ...mapMutations(["TOGGLE_MODAL", "TOGGLE_CHAT"]),
    sendPhone() {
      fetch(`${process.env.VUE_APP_URL}chat/phone/?id=${this.session}&phone=${this.phone}`);
      this.phone = null;
      this.TOGGLE_MODAL(!this.isModalPhoneOpen);
      this.TOGGLE_CHAT(!this.isChatOpen);
    },
    cancel() {
      this.phone = null;
      this.TOGGLE_MODAL(!this.isModalPhoneOpen);
      this.TOGGLE_CHAT(!this.isChatOpen);
    }
  },
};

</script>

<style  lang="stylus">
@import '~@/assets/stylus/_colors.styl'
@import '~@/assets/stylus/modal-phone.styl'
</style>
