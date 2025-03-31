<template>
  <div id="app">
    <opening-page @start="isStart === true"></opening-page>
    <subjects-map v-if="isStart"></subjects-map>
  </div>
   

</template>

<script>

import SubjectsMap from '@/components/SubjectsMap.vue';
import OpeningPage from './components/OpeningPage.vue';
export default {
  name: "app",
  components: {
    OpeningPage,
    SubjectsMap
  },
  data() {
    return {
      isStart: false,
    };
  },

  methods: {
  
  }
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