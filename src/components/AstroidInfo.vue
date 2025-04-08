<template>
    <div id="astroid-info">
        <div id="info">
            <p class="title">אז מהו אסטרואיד?</p>
            <p class="text">אסטרואיד הוא יצור מרושע שמטרתו להשמיד את כדור הארץ ואנחנו בברוגז איתו, ממש. הוא נראה כמו כדור עגול כזה אבל לא חלק כי יש לו בליטות ממש מכוערות שנראות כמו חצ'קונים.</p>
            <img src="@/assets/media/astroidInfo/astroid.svg" class="imgAstroid" alt="">
        </div>
        <img src="@/assets/media/next.svg" class="next" @click="next" alt="">
    </div>
     
  
  </template>
  
  <script>
  export default {
    name: "astroid-info",
    props: ["next"],
    data() {
      return{
     
      };
    },
    methods: {
        next() {
            this.$emit("next-page")
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
    #info {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 6rem;


    }
    .title {
        font-family: "abraham";
        color: white;
        text-align: center;
        font-size: 2.5rem;
    }
    .text {
        font-family: "rubik";
        color: white;
        text-align: center;
        width: 20rem;
        font-size: 2rem;
    }
    .imgAstroid {
        padding-top: 2rem;
    }
    .next {
        display: inline;
        margin-right: 1%;
        margin-top: 4rem;
    }
    </style>