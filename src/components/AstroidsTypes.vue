<template>
    <div id="astroids-types">
        <astroids-types-info v-if="isOpen" id="astroids-types-info" :type="type" @close="closeInfo"></astroids-types-info>
        <img src="@/assets/media/backToMap.png" class="backToMap" @click="backToMap" alt="">
        <div class="text">
            <p class="main-title">סוגי אסטרואידים</p>
            <p class="sub-title">קיימים שלושה סוגים של אסטרואידים</p>
            <p class="microcopy">לחצו על האסטרואידים!</p>
        </div>
        <div class="astroids" @click="openInfo">
            <div class="astroidBaby">
                <img :src="isPressedBaby ? imgBabyAfter : imgBaby" id="astroidBaby" class="img" alt="babyAstroidImg">
                <p class="babyText">אסטרואיד בייבי</p>
            </div>
            <div class="astroidTeen">
                <img :src="isPressedTeen ? imgTeenAfter : imgTeen" id="astroidTeen" class="img" alt="babyAstroidImg">
                <p class="teenText">אסטרואיד נער מתבגר</p>
            </div>
            <div class="astroidAdult">
                <img :src="isPressedAdult ? imgAdultAfter : imgAdult" id="astroidAdult" class="img" alt="babyAstroidImg">
                <p class="adultText">אסטרואיד בוגר</p>
            </div>
        </div>
        <img v-show="isNext" src="@/assets/media/next.svg" class="next" @click="next" alt="">
    </div>
     
  
  </template>
  
  <script>
import AstroidsTypesInfo from '@/components/AstroidsTypesInfo.vue';
  export default {
    name: "astroids-types",
    components: {
        AstroidsTypesInfo,
    },
    data() {
      return{
        type: '',
        isOpen: false,
        isNext: false,
        count: 0,
        isPressedBaby: false,
        isPressedTeen: false,
        isPressedAdult: false,
        imgBaby: "/astroidsTypes/babyAstroid.svg",
        imgBabyAfter: "/astroidsTypes/babyAfter.svg",
        imgTeen: "/astroidsTypes/teenAstroid.svg",
        imgTeenAfter: "/astroidsTypes/teenAfter.svg",
        imgAdult: "/astroidsTypes/adultAstroid.svg",
        imgAdultAfter: "/astroidsTypes/adultAfter.svg",
      };
    },
    methods: {
        backToMap() {
            this.$emit("map");
        },
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
    }
}

  </script>

  <style scoped>

    .backToMap {
        width: 10rem;
        position: fixed;
        top: 0.1rem;

    }
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
        margin-top: 5.7rem;
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
        margin-right: 17rem;
    }
    .astroidTeen {
        margin-left: 17rem;
        margin-top: -2rem;
    }
    .astroidAdult {
        margin-right: 12rem;
        margin-top: -2rem;
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
        display: inline;
        margin-right: 1%;
        margin-top: -10rem;
    }
   
    </style>