<template>
  <mu-popup position="top" :overlay="false" popupClass="demo-popup-top" :open="topPopup">
    {{ topPopupMsg }}
  </mu-popup>
</template>

<script>
export default {
  computed: {
    topPopup() {
      return this.$store.state.topPopup
    },
    topPopupMsg() {
      return this.$store.state.topPopupMsg
    },
  },
}
</script>

<style lang="css">
.mu-popup.demo-popup-top {
   width: 100%;
   opacity: .8;
   height: 48px;
   line-height: 48px;
   display: flex;
   color: #fff;
   background-color: #000;
   align-items: center;
   justify-content: center;
   max-width: 375px;
}
</style>