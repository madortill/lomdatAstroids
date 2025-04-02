<template>
    <div id="importance-of-astroids">
        
        <div class="importance">
            <img src="@/assets/media/subjectMap/closeIcon.svg" class="closeBtn" @click="closeInfo" alt="">
            <p class="text">שיעור פיצוץ אסטרואיד חשוב מפני הסכנה התמידית שנשקפת לכדור הארץ. עשרות אלפי אסטרואידים נעים ברגעים אלו לכדור הארץ שלנו ועליכם לדעת כיצד לעצור אותם.</p>
        </div>
    </div>
     
  
  </template>
  
  <script>
  
  export default {
    name: "importance-of-astroids",
    data() {
      return {
       
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
    .text {
        font-family: "rubik";
        font-size: 2.3rem;
        color: rgb(0, 0, 0);
        background-color: #A7A7BE;
        text-align: center;
        width: 20rem;
        padding: 6rem 2rem ;
        border-radius: 4rem;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 1;
        line-height: 1.3;
    }
    .closeBtn {
        z-index: 2;
        position: absolute;
        top: 23%;
        left: 73%;
    }
  
  
  
  </style>