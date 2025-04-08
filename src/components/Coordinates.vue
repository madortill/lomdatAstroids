<template>
    <div id="coordinates">
        <div class="explain">
            <p class="title">שימוש בקורדינאטות</p>
            <img src="@/assets/media/coordinates/coordinate.svg" class="coordinates" alt="">
            <p class="text">קורדינאטה</p>
            <img src="@/assets/media/coordinates/smokeBubbleText.svg" class="bubble" alt="">
        </div>
       
        
    </div>
     
  
  </template>
  
  <script>
  export default {
    name: "coordinates",
    components: {
    },
    data() {

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
    
    }
    
    </style>