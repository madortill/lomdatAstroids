<template>
    <div id="decision-screen">
        <div class="content">
            <p class="text">אוי לא! אסטרואידים מתקרבים במהירות לכדור הארץ! מקווים מאוד שלמדתם כמו שצריך כי אתם היחידים שיכולים לעצור אותם!</p>
            <p class="forwardBtn" @click="MoveTo">למשימה!</p>
            <p class="backBtn" @click="backTo">למעבר נוסף על החומר...</p>
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
        MoveTo() {
            this.$emit("MoveTo");
        },
        backTo() {
            this.$emit("backTo");
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
    .forwardBtn {
        font-family: "abraham";
        font-size: 2rem;
        background-color: #A7A7BE;
        padding: 1.5rem 1rem;
        border-radius: 1.5rem;
        margin-left: 13rem;
    }
    .forwardBtn:active {
        background-color: #9494aa;
    }
    .backBtn {
        font-family: "abraham";
        font-size: 1.8rem;
        background-color: #A7A7BE;
        padding: 1rem 1rem;
        width: 10rem;
        border-radius: 1.5rem;
        margin-top: -8rem;
        margin-right: 11.5rem;
    }
    .backBtn:active {
        background-color: #9494aa;
    }
   
    </style>