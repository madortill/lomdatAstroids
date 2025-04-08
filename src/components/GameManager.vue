<template>
    <div id="game-manager">
        <div class="board">
            <div class="lifes">
                <p>מה שנותר מכדור הארץ:</p>
                <img src="@/assets/media/coordinatesGame/wholeEarth.svg" class="img" alt="wholeEarth">
                <img src="@/assets/media/coordinatesGame/lesswholeEarth.svg" class="img" alt="LesswholeEarth">
                <img src="@/assets/media/coordinatesGame/littleFromEarth.svg" class="img" alt="littleFromEarth">
            </div>
            <img src="@/assets/media/coordinatesGame/board.svg" class="boardImg" alt="board">
            <div class="astroids-count">
                <p>אסטואידים שפוצצו</p>
                <p class="count">{{ numOfAstroids }}/5</p>
            </div>
            <div class="questions">
                <p class="question">(3,4)</p>
                <!-- <p v-for="(coordinate, index) in coordinatesArr" :key="index" class="bla">
                    {{ coordinate[index] }}
                </p> -->
                <img src="@/assets/media/coordinatesGame/astroid.svg" alt="">
            </div>
            
         </div>
       
    </div>
     
  
  </template>
  
  <script>

  export default {
    name: "game-manager",
    components: {
    },
    data() {
        return {
            numOfAstroids: 0,
            coordinatesArr: ["3,4","2,6","6,4"],
        };
        
    },
    methods: {
        
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
    .board {
        display: flex;
        align-items: center;
        flex-direction: column;
        margin-top: 5rem;
    }
    .boardImg {
        width: 27rem;

    }
    .lifes {
        display: flex; 
        flex-direction: row;
        color: white;
        padding: 1rem 2rem;
        font-family: "rubik";
        font-weight: 600;
        font-size: 1.3rem;
    }
    .img {
        padding-right: 1rem;
    }
    .astroids-count {
        display: flex; 
        flex-direction: column;
        color: white;
        align-items: center;
        font-family: "rubik";
        font-weight: 600;
        font-size: 1.3rem;
        width: 5rem;
        text-align: center;
        margin-top: 4rem;
        margin-right: 20rem;
    }
    .count {
        margin-top: -0.5rem;
    }
    .question {
        color: white;
        font-size: 3rem;
        position: relative;
        top: 10rem;
        right: 2.5rem;
        font-family: "rubik";
        font-weight: 500;
    }
    .questions {
        margin-top: -17rem;

    }
    /* .targets {
        background-color: rgba(0, 255, 255, 0.308);
        width: 2rem;
        height: 2rem;
        margin-top: 3rem;
    }
    .targets-container {
        display: flex; 
        flex-direction: row;
        gap: 1rem;
    } */
   
    </style>