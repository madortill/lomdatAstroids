<template>
    <div id="astroids-types">
        <img src="@/assets/media/backToMap.png" class="backToMap" @click="backToMap" alt="">
        <div class="text">
            <p class="main-title">סוגי אסטרואידים</p>
            <p class="sub-title">קיימים שלושה סוגים של אסטרואידים</p>
            <p class="microcopy">לחצו על האסטרואידים!</p>
        </div>
        <div class="astroids">
            <div>
                
            </div>
            <img src="" alt="">
            

        </div>
    </div>
     
  
  </template>
  
  <script>
  export default {
    name: "astroids-types",
    data() {
      return{

      };
    },
    methods: {
        backToMap() {
            this.$emit("map");
        }
    }
}
  </script>

  <style scoped>

    .backToMap {
        width: 10rem;
        position: fixed;
        top: 0.1rem;

    }
    @font-face {
        font-family: "rubik";
        src: url("./assets/Rubik-Regular.ttf");
    }
    @font-face {
        font-family: "abraham";
        src: url("./assets/Abraham-Regular.ttf");
    }

    .text {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        margin-top: 5.7rem;
        color: white;
    }
    .main-title {
        font-family: "abraham";
        font-size: 3rem;
    }
    .sub-title {
        font-family: "rubik";
        font-size: 2.2rem;
        padding-right: 2rem;
        padding-left: 2rem;
        margin-top: -1rem;
    }
    .microcopy {
        font-family: "rubik";
        font-size: 2rem;
        margin-top: 0.5rem;
        transform: rotate(7deg);
        margin-left: 13rem;

    }
    </style>