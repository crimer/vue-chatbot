<template>
  <div class="body__phone">
  <form class="modal__phone" :class="{ isActive: isModalPhoneOpen }">
  <h1 class="modal__phone__title">Остались вопросы?   Оставьте номер телефона и мы перезвоним вам</h1>
  <div class="modal__phone__number">
    <input v-model="phone" class="modal__phone__input" placeholder="+79001235678">
  </div>
  <button class="modal__phone__button" @click="sendPhone">Отправить</button>
  <button class="modal__phone__button">Отмена</button>
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
    sendPhone() {
      fetch(`${process.env.VUE_APP_URL}/chat/phone/?id=${this.session}&phone=${this.phone}`);
    }
  },
};

</script>

<style  lang="stylus">
@import '~@/assets/stylus/_colors.styl'
@import '~@/assets/stylus/modal-phone.styl'
</style>
