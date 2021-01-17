<template>
  <button id="btn__phone" type="button" class="btn__phone" :class="{ isActive: isShowPhoneButton }" @click="openModalPhone()">
  Остались вопросы?</button>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "PhoneButton",
  computed: {
    ...mapState(["isShowPhoneButton", "isModalPhoneOpen"])
  },
  methods: {
    ...mapMutations(["TOGGLE_MODAL"]),
    openModalPhone() {
      this.TOGGLE_MODAL(!this.isModalPhoneOpen);
    }
  }
};
</script>

<style lang="stylus">
@import '~@/assets/stylus/_colors.styl'
@import '~@/assets/stylus/phone-button.styl'
</style>
