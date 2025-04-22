<template>
    <div id="astroids-types-exercise">
        <div class="body">
            <p class="title">לחצו על האסטרואיד אשר תואם למאפיין</p>
            <div class="astroids" @click="checkIfRight">
                    <img src="@/assets/media/astroidsTypes/babyAstroid.svg" id="astroidBaby" class="img" alt="babyAstroidImg">
                    <img src="@/assets/media/astroidsTypes/teenAstroid.svg" id="astroidTeen" class="img" alt="babyAstroidImg">
                    <img src="@/assets/media/astroidsTypes/adultAstroid.svg" id="astroidAdult" class="img" alt="babyAstroidImg">
                </div>
                <p v-show="isRight === 1" class="outcome right">כל הכבודדד</p>
                <p v-show="isRight === 2" class="outcome wrong">אולי בפעם הבאה...</p>
                <p v-show="countRight === 3" class="text">כל הכבוד! אפשר לחזור למפה</p>
                <img v-show="countRight === 3" src="@/assets/media/astroidsTypesExercise/arrowMap.png" class="arrowMap" alt="arrowMap">
                <p class="sentence">{{ characterArr[num].text }}</p>
                
                
            </div>
               
            </div>
            <!-- <div class="bla">
            <p class="title">התאימו את המאפיינים לסוג האסטרואיד המתאים</p>
            <div class="dragTo">
                <div v-show="card === 0" id="baby">
                    <img src="@/assets/media/astroidsTypes/babyAstroid.svg" id="astroidBaby" class="img" alt="babyAstroidImg">
                    <div id="babyContainer" @drop="drop" @dragover="allowDrop"></div>
                </div>
                <div v-show="card === 1" id="teen">
                    <img src="@/assets/media/astroidsTypes/teenAstroid.svg" id="astroidTeen" class="img" alt="babyAstroidImg">
                    <div id="babyContainer"></div>
                </div>
                <div v-show="card === 2" id="adult">
                    <img src="@/assets/media/astroidsTypes/adultAstroid.svg" id="astroidAdult" class="img" alt="babyAstroidImg">
                    <div id="babyContainer"></div>
                </div>
                <img src="@/assets/media/astroidsTypesExercise/textBubble1.svg">
                <img v-show="card < 2 " src="@/assets/media/astroidsTypesExercise/arrow.svg" @click="card++" class="left-arrow" alt="">
                <img v-show="card > 0" src="@/assets/media/astroidsTypesExercise/arrow.svg" @click="card--" class="right-arrow" alt="">
            </div>
            <div class="container">
                <img src="@/assets/media/astroidsTypesExercise/textBubble2.svg" alt="">
                <p id="sentence" class="sentence" draggable="true" @dragstart="onDragging">מפציץ מקומות שהוא לא אוהב</p>
                <p class="sentence">יכול להשמיד את כדור הארץ</p>
                <p class="sentence">הורס שכונות מקומיות</p>
            </div> -->
        <!-- </div> -->
        <!-- <img src="@/assets/media/back.svg"  alt=""> -->
        
    <!-- </div> -->
     
  
  </template>
  
  <script>
  export default {
    name: "astroids-types-exercise",
    components: {
    },
    data() {
      return{
        card: 0,
        dropA: "",
        draged: "",
        isRight: 0,
        countRight: 0,
        num: 0,
        characterArr: [
            {
                text: "מפציץ מקומות שהוא לא אוהב",
                id: "astroidTeen"
            },

            {
                text: "יכול להשמיד את כדור הארץ",
                id: "astroidAdult"
            },

            {
                text: "הורס שכונות מקומיות",
                id: "astroidBaby"
            }, 
        ]
      };
    },
    methods: {
        backMap() {
            this.$emit("toMap");
        },
      
        checkIfRight(event) {
            if(event.target.tagName === "IMG") {
                if(this.characterArr[this.num].id == event.target.id) {
                    this.isRight = 1;
                    setTimeout(() => {
                        this.isRight = 0;
                        this.countRight++
                        if(this.num < 2) {
                            this.num++;
                        }
                    }, 2300);
                } else {
                    this.isRight = 2
                    setTimeout(() => {
                        this.isRight = 0
                    }, 2300)
                }
            }
        }
    }
}
      
               



  </script>

  <style scoped>

    .back {
        display: inline;
        margin-right: -50%;
        margin-top: -10rem;
    }
    .body {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 8rem;
    }
    /* .container {
        margin-top: 3.5rem;
        margin-right: 2;
    } */
    .sentence {
        color: white;
        font-size: 1.5rem;
        font-family: "rubik";
        background-color: gray;
        text-align: center;
        width: 80%;
        padding: 1rem;
        border: solid, black, 1px;
        border-radius: 1rem;
        margin-top: 3rem;
    }
    /* .left-arrow {
        position: relative;
    }
    .right-arrow {
        position: relative;
        transform: rotate(180deg);
    } */
    .astroids {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        gap: 2rem;
        width: 20rem;
    }
    /* #babyContainer {
        width: 80%;
        height: 10rem;
        position: relative;
        top: 11rem;
        right: 2rem;
        border-radius: 1rem;
        border: solid, rgb(129, 127, 143), 1px;
    } */
    .img {
        /* position: relative;
        top: 9rem;
        right: 8rem; */
        width: 8.5rem;
    }
    .title {
        font-family: "abraham";
        color: white;
        font-size: 2rem;
        text-align: center;
        padding: 1rem;
    }
    .outcome {
        font-family: "abraham";
        font-size: 2rem;
        margin-top: 4rem;
        padding: 2rem;
        border-radius: 1rem;
        animation: rotateAnimation 2s infinite ease;
    }
    @keyframes rotateAnimation {
        0% {
            transform: rotate(12deg);
        }
        50% {
            transform: rotate(-12deg); 
        }
        100% {
            transform: rotate(12deg);
        }
    }
    .right {
        background-color: rgb(135, 197, 238);
    }
    .wrong {
        color: white;
        background-color: rgb(119, 20, 20);
    }
    .text {
        color: white;
        font-size: 2rem;
        font-family: "rubik";
        background-color: #A7A7BE;
        padding: 1.5rem;
        border-radius: 1rem;
    }
    .arrowMap {
        width: 4rem;
        transform: rotate(90deg);
        position: relative;
        bottom: 47rem;
        left: 1.5rem;
        animation: arrowAnimation 1.5s infinite ease;
    }
    @keyframes arrowAnimation {
        0% {
            left: 1.5rem;
        }
        50% {
            left: 3rem;
        }
        100% {
            left: 1.5rem;
        }
    }
 
    </style>