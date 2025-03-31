<template>
  <div id="app">
    <opening-page @start="start"></opening-page>
  </div>
   

</template>

<script>
import OpeningPage from "@/components/OpeningPage.vue";
export default {
  name: "app",
  data() {
    return {
      
    };
  },
  components: {
    OpeningPage
  },
}
</script>

<style scoped>
#app {
  background-size: 100vw 100vh;
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  direction: rtl;
  overflow: hidden;
  background-image: url("./assets/media/Artboard 1.svg");
}



</style>