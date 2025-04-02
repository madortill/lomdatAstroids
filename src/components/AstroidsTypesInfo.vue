<template>
    <div id="astroids-types-info">
        <div class="info">
            <img src="@/assets/media/astroidsTypes/closeIcon.svg" class="closeBtn" @click="closeInfo" alt="">
            <div v-show="type === 'astroidBaby'">
                <p class="title">אסטרואיד בייבי</p>
                <p class="text">אסטרואיד ממש קטן והורס שכונות מקומיות</p>
                <img src="@/assets/media/astroidsTypes/babyAstroid.svg" id="astroidBaby" class="img" alt="babyAstroidImg">
            </div>
            <div v-show="type === 'astroidTeen'">
                <p class="title">אסטרואיד נער מתבגר</p>
                <p class="text">אסטרואיד שהוא דיי חרא כי הוא בכוונה מנסה להפציץ מקומות שהוא לא אוהב</p>
                <img src="@/assets/media/astroidsTypes/teenAstroid.svg" id="astroidTeen" class="img" alt="babyAstroidImg">
            </div>
            <div v-show="type === 'astroidAdult'">
                <p class="title">אסטרואיד בוגר</p>
                <p class="text">אסטרואיד ממש גדול שיכול להשמיד את כל כדור הארץ</p>
                <img src="@/assets/media/astroidsTypes/adultAstroid.svg" id="astroidAdult" class="img" alt="babyAstroidImg">
            </div>
            
        </div>
       
    </div>
     
  
  </template>
  
  <script>
  export default {
    name: "astroids-types-info",
    props: ["type"],
    data() {
      return{
     
      };
    },
    methods: {
        closeInfo() {
        this.$emit("close");
      }
    }
}
  </script>

  <style scoped>

    @font-face {
        font-family: "rubik";
        src: url("./assets/Rubik-Regular.ttf");
    }
    @font-face {
        font-family: "abraham";
        src: url("./assets/Abraham-Regular.ttf");
    }
    .info {
        font-family: "rubik";
        font-size: 2.3rem;
        color: rgb(0, 0, 0);
        background-color: #A7A7BE;
        text-align: center;
        width: 20rem;
        padding: 6rem 2rem ;
        border-radius: 4rem;
        line-height: 1.3;
        
    }
    .title {
        font-family: "abraham";
        font-size: 3rem;
        margin-top: -3rem;
    }
    .text {
        font-family: "rubik";
        font-size: 2.3rem;
    }
    .closeBtn {
        position: relative;
        top: -4rem;
        left: 9rem;
    }
    .img {
        width: 10rem;
    }

    </style>