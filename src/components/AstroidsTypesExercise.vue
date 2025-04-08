<template>
    <div id="astroids-types-exercise">
        <div class="bla">
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
            </div>
            <img src="@/assets/media/backBtn.svg" class="back" @click="backMap" alt="">
        </div>
        <!-- <img src="@/assets/media/back.svg"  alt=""> -->
        
         
    </div>
     
  
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
      };
    },
    methods: {
        backMap() {
            this.$emit("toMap");
        },
        onDragging(ev) {
      ev.dataTransfer.setData("text", ev.target.id);
    },
    allowDrop(ev) {
      ev.preventDefault();
    },
    drag(ev) {
      ev.dataTransfer.setData("text", ev.target.id);
    },
    drop(ev) {
      if (!ev.target.classList.contains('sentences')) {
 ev.preventDefault();
      let data = ev.dataTransfer.getData("text");
      this.dropA = ev.target.id;
      this.draged = data;
      ev.target.appendChild(document.getElementById(data));
    //   this.checkIfRight(this.dropA, this.draged);
      }
    },


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


    .back {
        display: inline;
        margin-right: -50%;
        margin-top: -10rem;
    }
    .bla {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 8rem;
    }
    .container {
        margin-top: 3.5rem;
        margin-right: 2;
    }
    .sentence {
        color: white;
        position: relative;
        bottom: 19.5rem;
        right: 1.8rem;
        font-size: 1.5rem;
        font-family: "rubik";
        background-color: gray;
        text-align: center;
        width: 80%;
        padding: 1rem;
        border: solid, black, 1px;
        border-radius: 1rem;
    }
    .left-arrow {
        position: relative;
        left: 4rem;
        bottom: 1rem;
    }
    .right-arrow {
        position: relative;
        right: 1rem;
        bottom: 4rem;
        transform: rotate(180deg);
    }
    .dragTo {
        margin-right: 2.2rem;
        margin-top: -10rem;
    }
    #babyContainer {
        width: 80%;
        height: 10rem;
        position: relative;
        top: 11rem;
        right: 2rem;
        border-radius: 1rem;
        border: solid, rgb(129, 127, 143), 1px;
    }
    .img {
        position: relative;
        top: 9rem;
        right: 8rem;
        width: 10rem;
    }
    .title {
        font-family: "abraham";
        color: white;
        font-size: 2rem;
        text-align: center;
        padding: 1rem;
    }
    </style>