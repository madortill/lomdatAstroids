<template>
    <div id="astroids-types">
        <astroids-types-exercise v-if="page === 2" @toMap="backMap"></astroids-types-exercise>
        <div v-if="page === 1">
        <astroids-types-info v-if="isOpen" id="astroids-types-info" :type="type" @close="closeInfo"></astroids-types-info>
        
        <div class="text">
            <p class="main-title">סוגי אסטרואידים</p>
            <p class="sub-title">קיימים שלושה סוגים של אסטרואידים</p>
            <p class="microcopy">לחצו על האסטרואידים!</p>
        </div>
        <div class="astroids" @click="openInfo">
            <div class="astroidBaby">
                <img :src="isPressedBaby ? imgBaby : imgBabyAfter" id="astroidBaby" class="img" alt="babyAstroidImg">
                <p class="babyText">אסטרואיד בייבי</p>
            </div>
            <div class="astroidTeen">
                <img :src="isPressedTeen ? imgTeen : imgTeenAfter" id="astroidTeen" class="img" alt="babyAstroidImg">
                <p class="teenText">אסטרואיד נער מתבגר</p>
            </div>
            <div class="astroidAdult">
                <img :src="isPressedAdult ? imgAdult : imgAdultAfter" id="astroidAdult" class="img" alt="babyAstroidImg">
                <p class="adultText">אסטרואיד בוגר</p>
            </div>
            <img v-show="isNext" src="@/assets/media/next.svg" class="next" @click="next" alt="">
        </div>
       
        </div>
    </div>
     
  
  </template>
  
  <script>
import AstroidsTypesInfo from '@/components/AstroidsTypesInfo.vue';
import AstroidsTypesExercise from '@/components/AstroidsTypesExercise.vue';

  export default {
    name: "astroids-types",
    components: {
        AstroidsTypesInfo,
        AstroidsTypesExercise
    },
    data() {
      return{
        type: '',
        isOpen: false,
        isNext: false,
        page: 1,
        count: 0,
        isPressedBaby: false,
        isPressedTeen: false,
        isPressedAdult: false,
        imgBaby: "./astroidsTypes/babyAstroid.svg",
        imgBabyAfter: "./astroidsTypes/babyAfter.svg",
        imgTeen: "./astroidsTypes/teenAstroid.svg",
        imgTeenAfter: "./astroidsTypes/teenAfter.svg",
        imgAdult: "./astroidsTypes/adultAstroid.svg",
        imgAdultAfter: "./astroidsTypes/adultAfter.svg",
      };
    },
    mounted() {
        this.$emit("hideMap");
    },
    methods: {
        openInfo(event) {
            if(event.target.tagName === "IMG") {
                this.isOpen = true;
                this.type = event.target.id;
                this.count++
            }
        },
        closeInfo() {
            this.isOpen = false;
            if (this.type === "astroidBaby") {
                    this.isPressedBaby = true;
                } else if(this.type === "astroidTeen") {
                    this.isPressedTeen = true;
                } else {
                    this.isPressedAdult = true;
                }
                if(this.count >= 3) {
                    this.isNext = true;
                }
        },
        next() {
            this.page = 2;
            this.$emit("showMap");
        },
        backMap() {
            this.$emit("toMap");
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

    .text {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        margin-top: 3rem;
        color: white;
    }
    .main-title {
        font-family: "abraham";
        font-size: 3rem;
    }
    .sub-title {
        font-family: "rubik";
        font-size: 2.2rem;
        padding-right: 2rem;
        padding-left: 2rem;
        margin-top: -1rem;
    }
    .microcopy {
        font-family: "rubik";
        font-size: 2rem;
        margin-top: 0.5rem;
        transform: rotate(7deg);
        margin-left: 13rem;
        font-weight: bold;
    }
    .astroids {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        color: white;
        font-size: 1.5rem;
        font-weight: bold;
        font-family: "rubik";
    }
    .astroidBaby {
        margin-left: 13rem;
    }
    .astroidTeen {
        margin-right: 15rem;
        margin-top: -4rem;
    }
    .astroidAdult {
        margin-left: 13rem;
        margin-top: -3rem;
    }
    .babyText {
        margin: auto;
    }
    .teenText {
        margin: auto;
    }
    .adultText {
        margin: auto;
    }
    #astroids-types-info {
        position: absolute;
        top: 50%;
        right: 50%;
        transform: translate(50%, -50%);
        z-index: 1;
    }
    .next {
        margin-right: 15rem;
        margin-top: -10rem;
    }
   
    </style>