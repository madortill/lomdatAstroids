<template>
    <div id="game-manager">
        <lose-game v-if="isLose" @restart-game="restartGame"></lose-game>
        <div v-if="!isLose">
        <wrong v-show="isWrong" class="wrong"></wrong>
         <explosion v-show="isRight" class="right"></explosion>
        <div class="board">
            <div class="lifes">
                <p>מה שנותר מכדור הארץ:</p>
                <img v-show="numOfWrong <= 0" src="@/assets/media/coordinatesgame/wholeEarth.svg" class="img" alt="wholeEarth">
                <img v-show="numOfWrong <= 1" src="@/assets/media/coordinatesgame/lessWholeEarth.svg" class="img" alt="LesswholeEarth">
                <img v-show="numOfWrong <= 2" src="@/assets/media/coordinatesgame/littleFromEarth.svg" class="img" alt="littleFromEarth">
            </div>
            <p class="btn" @click="openInstractions">להוראות</p>
            <!-- <img src="@/assets/media/coordinatesgame/board.svg" class="boardImg" alt="board"> -->
             <div class="numbersRow">
                <p v-for="(num, index) in ROWS" :key="index"> {{ index }}</p>
             </div>
             <div class="numbersCol">
                <p v-for="(num, index) in COLS" :key="index"> {{ index }}</p>

             </div>
            <div @click="check" class="table">
                <div v-for=" (box, index) in boxes" :key="index" :id="box" class="squre">
                </div>
            </div>
            <div class="astroids-count">
                <p>אסטואידים שפוצצו</p>
                <p class="count">{{ numOfAstroids }}/5</p>
            </div>
            <div class="questions">
                <!-- <p class="question">(3,4)</p> -->
                <p class="question">
                    {{ coordinatesArr[numOfQuestion] }}
                </p>
                <div>
                    <img src="@/assets/media/coordinatesgame/astroid.svg" class="astroid" alt="">
                </div>
                
            </div>
            
         </div>
    </div>
       
    </div>
     
  
  </template>
  
  <script>
    import Wrong from "@/components/Wrong.vue";
    import Explosion from "@/components/Explosion.vue";
    import LoseGame from '@/components/LoseGame.vue';
  export default {
    name: "game-manager",
    components: {
        Wrong,
        Explosion,
        LoseGame,
        
    },
    data() {
        return {
            numOfQuestion: 0,
            numOfAstroids: 0,
            numOfWrong: 0,
            isRight: false,
            isWrong: false,
            isLose: false,
            coordinatesArr: ["(2,5)","(1,3)","(4,2)","(1,2)","(3,2)", "(4,4)", "(3,5)", "(0,3)","(0,4)","(3,3)", "(1,4)", "(0,0)", "(3,0)", "(2,1)"],
            NUM_OF_SQURE: 30,
            ROWS: ["1","2", "3", "4", "5", "6"],
            COLS: ["1","2", "3", "4", "5", "6", "7"],
            boxes: ["1","(3,0)", "3", "4", "(0,0)", "6", "7", "(2,1)", "9", "10", "(4,2)", "(3,2)", "13", "(1,2)", "15" ,"16", "(3,3)" ,"18", "(1,3)", "(0,3)" , "(4,4)", "22", "23", "(1,4)", "(0,4)", "26" ,"(3,5)", "(2,5)", "30", "31"],
        };
        
    },
    methods: {
        check(event) {
            if (event.target.id === this.coordinatesArr[this.numOfQuestion]) {
                this.isRight = true;
                setTimeout(() => {
                    this.isRight = false
                    if(this.numOfAstroids === 5) {
                    this.$emit("end-game")
            }
                }, 2000);
                this.coordinatesArr.splice(this.numOfQuestion, 1);
                console.log(this.coordinatesArr);
                this.numOfQuestion = Math.floor(Math.random() * this.coordinatesArr.length);
                this.numOfAstroids++;
               
            } else {
                this.isWrong = true;
                setTimeout(() => {
                    this.isWrong = false;
                    if(this.numOfWrong === 3) {
                        this.isLose = true;
                    }
                }, 900);
                this.numOfWrong++;
            }
            
        },
        restartGame() {
            this.numOfQuestion = 0;
            this.numOfAstroids = 0;
            this.numOfWrong = 0;
            this.isRight = false;
            this.isWrong = false;
            this.isLose = false;
            this.coordinatesArr = ["(2,5)","(1,3)","(4,2)","(1,2)","(3,2)", "(4,4)", "(3,5)", "(0,3)","(0,4)","(3,3)", "(1,4)", "(0,0)", "(3,0)", "(2,1)"];
            this.boxes = ["1","(3,0)", "3", "4", "(0,0)", "6", "7", "(2,1)", "9", "10", "(4,2)", "(3,2)", "13", "(1,2)", "15" ,"16", "(3,3)" ,"18", "(1,3)", "(0,3)" , "(4,4)", "22", "23", "(1,4)", "(0,4)", "26" ,"(3,5)", "(2,5)", "30", "31"];
        },
        openInstractions() {
            this.$emit("openInst")
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
        font-size: 1.5rem;
        margin-top: -3.5rem;
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
        font-size: 1.7rem;
        width: 5rem;
        text-align: center;
        margin-top: 2rem;
        margin-right: 15rem;
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
        margin-top: -20rem;
        margin-left: 12rem;

    }
    /* .targets {
        background-color: rgba(0, 255, 255, 0.308);
        width: 2rem;
        height: 2rem;
        margin-top: 3rem;
    }
    .row7 {
        display: flex; 
        flex-direction: row;
        gap: 2rem;
        margin-top: -9.5rem;
        margin-left: 1rem;
    } */
    /* .astroid {
        margin-right: 5rem;
        margin-top: 3rem;
    } */
    .table {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr ;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
    color: white;
    border: solid, white, 2px;
    margin-top: -33.8rem;
    z-index: 2;
    /* grid-gap: 2rem 2rem; */
    /* justify-items: center; */
    /* align-items: center; */
    /* border-style: solid; */
    }
    .squre {
        border: 2px solid white;
        padding: 2rem;
        padding-top: 3rem;
    }
    .numbersRow {
        display: flex;
        flex-direction: row-reverse;
        color: white;
        gap: 3.5rem;
        font-family: "rubik";
        font-weight: 550;
        font-size: 1.3rem;
        margin-top: -1.5rem;
    }
    .numbersCol {
        display: flex;
        flex-direction: column;
        color: white;
        gap: 1.1rem;
        font-family: "rubik";
        font-weight: 550;
        font-size: 1.3rem;
        margin-right: 25rem;
        margin-top: -2rem;
    }
    .wrong {
        position: absolute;
        z-index: 3;
    }
    .right {
        position: absolute;
        z-index: 3;
    }
    .btn {
        background-color: #A7A7BE;
        padding: 1rem;
        font-family: "rubik";
        font-weight: 600;
        font-size: 1.5rem;
        border-radius: 2rem;
        margin-left: 16rem;
        margin-top: -1rem;
    }

   
    </style>