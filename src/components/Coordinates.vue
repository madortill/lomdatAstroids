<template>
    <div id="coordinates">
        <div class="explain">
            <p class="title">שימוש בקורדינאטות</p>
            <img src="@/assets/media/coordinates/coordinate.svg" class="coordinates" alt="">
            <p class="text">קורדינאטה</p>
            <p class="text2">(5,4)</p>
            <div class="smokeBubble">
                <p class="content">
                    {{ textArr[slide] }}
                </p>
                <img src="@/assets/media/coordinates/smokeBubble.svg" class="bubble" alt="">
                <div class="arrows">
                    <img v-show="slide < 3" src="@/assets/media/astroidsTypesExercise/arrow.svg" @click="slide++" class="left-arrow" alt="">
                    <img v-show="slide > 0" src="@/assets/media/astroidsTypesExercise/arrow.svg" @click="slide--" class="right-arrow" alt="">
                </div>
            </div>
            
        </div>
       
        
    </div>
     
  
  </template>
  
  <script>
  export default {
    name: "coordinates",
    components: {
    },
    data() {
        return {
            slide: 0,
            textArr: ["זאת רשת קורדינאטות, בעזרתה אתם יכולים לכוון ולפגוע באסטרואיד בצורה הכי מדוייקת וכך לפוצץ אותו.", "תחנת השיגור היא האחראית לחישוב קואורדינטות שבהן האסטרואיד נמצא בכל רגע נתון.", "תפקידכם הוא לכוון את משגר הפצצות לכיוון האסטרואיד לפי הקורדינאטות שקיבלתם מתחנת השיגור.", "הריבוע שצריכים לפגוע בו הוא הריבוע שהנקודה היא הפינה השמאלית העליונה שלו."],
        }
    },
    methods: {
        backMap() {
            this.$emit("toMap");
        },
    }
}
  </script>

  <style scoped>
  @font-face {
        font-family: "abraham";
        src: url("./assets/Abraham-Regular.ttf");
    }
    @font-face {
        font-family: "rubik";
        src: url("./assets/Rubik-Regular.ttf");
    }
    .explain {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 6rem;
    }
    .coordinates {
        margin-left: 3.5rem;
    }
    .bubble {
        margin-top: -5rem;
    }
    .title {
        font-family: "abraham";
        color: white;
        font-size: 2.1rem;
    }
    .text {
        font-family: "rubik";
        color: white;
        font-size: 1.8rem;
        margin-top: 0.5rem;
        margin-left: 21rem;
    }
    .text2 {
        font-family: "rubik";
        color: white;
        font-size: 1.8rem;
        margin-top: -1.5rem;
        margin-left: 21rem;
    }
    .smokeBubble {
        margin-top: -10rem;
    }
    .content {
        font-family: "rubik";
        color: black;
        font-size: 1.5rem;
        text-align: center;
        width: 20rem;
        position: relative;
        top: 14rem;
        right: 7rem;
    }
    .left-arrow {
        position: relative;
        top: -12rem;
        right: 22rem;
    }
    .right-arrow {
        position: relative;
        top: -12rem;
        right: 8rem;
        transform: rotate(180deg);
    }
    @media (max-width: 370px) {

    .coordinates {
        margin-left: 3.5rem;
        width: 23rem;
    }
    .bubble {
        margin-top: -4rem;
        width: 27rem;
    }
    .title {
        font-family: "abraham";
        color: white;
        font-size: 2rem;
    }
    .text {
        font-size: 1.6rem;
        margin-top: 0.5rem;
        margin-left: 18rem;
    }
    .text2 {
        font-size: 1.6rem;
        margin-left: 18rem;
    }
    .content {
        width: 19rem;
        position: relative;
        top: 12rem;
        right: 4rem;
        font-size: 1.4rem;
    }
    .left-arrow {
        position: relative;
        top: -9rem;
        right: 18rem;
    }
    .right-arrow {
        position: relative;
        top: -9rem;
        right: 6rem;
    }
    
    }
    
    </style>