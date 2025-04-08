<template>
    <div id="decision-screen">
        <div class="content">
            <p class="text">אוי לא! אסטרואידים מתקרבים במהירות לכדור הארץ! מקווים מאוד שלמדתם כמו שצריך כי אתם היחידים שיכולים לעצור אותם!</p>
            <p class="btn" @click="showInstructions">למשימה!</p>
        </div>
       
    </div>
     
  
  </template>
  
  <script>
  export default {
    name: "decision-screen",
    components: {
    },
    data() {

    },
    methods: {
        showInstructions() {
            this.$emit("open-instruction");
        }
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
    .content {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        margin-top: 10rem;
    }
    .text {
        color: white;
        font-family: "abraham";
        font-size: 2.3rem;
        padding: 1rem 4.5rem;
        line-height: 1.5;
    }
    .btn {
        font-family: "abraham";
        font-size: 2.5rem;
        background-color: #A7A7BE;
        padding: 2rem 2rem;
        border-radius: 1.5rem;
    }
    .btn:active {
        background-color: #9494aa;
    }
   
    </style>