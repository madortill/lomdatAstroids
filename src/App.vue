<template>
  <div id="app">
    <opening-page v-if="!isLoader" @start="start"></opening-page>
    <subjects-map v-if="isStart"></subjects-map>
    <Loader v-if="isLoader">dyfujghcj</Loader>
     <rocket v-if="isAnimation"></rocket>
  </div>
   

</template>

<script>
import Loader from "@/components/Loader.vue";
import Rocket from "@/components/Rocket.vue";
import SubjectsMap from '@/components/subjectsMap.vue';
import OpeningPage from '@/components/OpeningPage.vue';

export default {
  name: "app",
  components: {
    OpeningPage,
    SubjectsMap,
    Loader,
    Rocket
  },
  data() {
    return {
      isStart: false,
      isLoader: true,
      isAnimation: false,
    };
  },
  mounted() {
    setTimeout(() => {
      this.isLoader = false
    }, 1000)
  },

  methods: {
    start() {
      this.isAnimation = true;
      setTimeout(() => {
        this.isAnimation = false;
        this.isStart = true;
    }, 1000)

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