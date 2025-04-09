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
                <p class="sentence">{{ characterArr[randomNum].text }}</p>
                
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
        randomNum: -1,
        characterArr: [
            {
                text: "הורס שכונות מקומיות",
                id: "astroidBaby"
            },

            {
                text: "מפציץ מקומות שהוא לא אוהב",
                id: "astroidTeen"
            },

            {
                text: "יכול להשמיד את כדור הארץ",
                id: "astroidAdult"
            }, 
        ]
      };
    },
    created() {
        this.drawNumber();
    },
    methods: {
        backMap() {
            this.$emit("toMap");
        },
        drawNumber() {
            this.randomNum = Math.floor(Math.random() * (this.characterArr.length - 1));
        },
        checkIfRight(event) {
            if(event.target.tagName === "IMG") {
                if(this.randomNum <= this.characterArr.length -1) {
                    if(this.characterArr[this.randomNum].id == event.target.id) {
                        this.isRight = 1
                        this.countRight++
                        this.characterArr.splice(this.randomNum, 1);
                        console.log(this.characterArr);
                        setTimeout( ()=> {
                            this.isRight = 0
                            if(this.countRight > 2) {
                                this.drawNumber();
                            }
                        }, 2300);
                    } else {
                        this.isRight = 2
                        setTimeout( ()=> {
                            this.isRight = 0
                            this.drawNumber();
                        }, 2300);
                    }
            } else {
                this.drawNumber();
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
        left: 4rem;
        bottom: 1rem;
    }
    .right-arrow {
        position: relative;
        right: 1rem;
        bottom: 4rem;
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

 
    </style>