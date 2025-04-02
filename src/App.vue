<template>
  <div id="app">
    <opening-page @start="start"></opening-page>
    <subjects-map v-if="isStart"></subjects-map>
  </div>
   

</template>

<script>

import SubjectsMap from '@/components/subjectsMap.vue';
import OpeningPage from '@/components/OpeningPage.vue';
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
    start() {
      this.isStart = true;
    }
  }
}
</script>

<style >
#app {
  background-size: 100vw 100vh;
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  direction: rtl;
  overflow: hidden;
  background-image: url("./assets/media/Artboard 1.svg");
  overflow-x: hidden;
  overflow-y: auto;
}
html {
	Font-size: calc(10px + 0.5vw);
}



</style>