<template>
  <div id="app">
    <opening-page v-if="!isLoader" @start="start"></opening-page>
    <subjects-map v-if="isStart" @end-game="endGame" :allOpen="restartAllready"></subjects-map>
    <Loader v-if="isLoader"></Loader>
    <rocket v-if="isAnimation"></rocket>
    <end-screen v-if="isEnd" @restart="restart"></end-screen>
  </div>
</template>

<script>
import Loader from "@/components/Loader.vue";
import Rocket from "@/components/Rocket.vue";
import SubjectsMap from '@/components/subjectsMap.vue';
import OpeningPage from '@/components/OpeningPage.vue';
import EndScreen from '@/components/EndScreen.vue';

export default {
  name: "app",
  components: {
    OpeningPage,
    SubjectsMap,
    Loader,
    Rocket,
    EndScreen
  },
  data() {
    return {
      isStart: false,
      isLoader: true,
      isAnimation: false,
      isEnd: false,
      loaderTimeout: null, // ה-timeout של ה-loader
      rocketTimeout: null, // ה-timeout של האנימציה
      restartAllready: '',
    };
  },
  mounted() {
    // הגדרת timeout של ה-loader
    this.startLoaderTimeout();
  },

  methods: {
    startLoaderTimeout() {
      // אם יש timeout קיים, נבטל אותו
      if (this.loaderTimeout) {
        clearTimeout(this.loaderTimeout);
      }

      // הגדרת ה-timeout מחדש ל-4 שניות
      this.loaderTimeout = setTimeout(() => {
        this.isLoader = false;
      }, 4000);
    },

    start() {
      this.isAnimation = true;
      // הגדרת timeout של האנימציה
      this.rocketTimeout = setTimeout(() => {
        this.isAnimation = false;
        this.isStart = true;
      }, 5300);
    },

    endGame() {
      this.isEnd = true;
    },

    restart() {
      // ביטול ה-timeout הקודם לפני התחלת ריסטארט
      if (this.loaderTimeout) {
        clearTimeout(this.loaderTimeout);
      }
      if (this.rocketTimeout) {
        clearTimeout(this.rocketTimeout);
      }

      // ריסטארט של כל המצב
      this.isStart = false;
      this.isLoader = true;
      this.isAnimation = false;
      this.isEnd = false;
      this.restartAllready = 1;

      // הפעלת ה-timeout מחדש אחרי הריסטארט
      this.startLoaderTimeout();
    }
  }
}
</script>

<style>
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
  font-size: calc(10px + 0.5vw);
}
@font-face {
  font-family: "rubik";
  src: url("@/assets/fonts/Rubik-Regular.ttf");
}
@font-face {
  font-family: "abraham";
  src: url("@/assets/fonts/Abraham-Regular.ttf");
}
</style>
