<template>
    <div id="coordinates-game">
        <decision-screen v-if="isReady" @MoveTo="moveToGame"></decision-screen>
        <game-manager v-if="isClose && !isReady"></game-manager>
        <instructions v-if="!isClose && !isReady" class="instructions" @close="closeInstructions"></instructions>
    </div>
       
        
  </template>
  
  <script>
  import DecisionScreen from '@/components/DecisionScreen.vue';
  import GameManager from '@/components/GameManager.vue';
  import Instructions from '@/components/Instructions.vue';

  export default {
    name: "coordinates-game",
    components: {
        DecisionScreen,
        GameManager,
        Instructions
    },
    data() {
        return {
            isReady: true,
            isClose: false,
        };
    },
    methods: {
        moveToGame() {
            this.isReady = false;
        },
        closeInstructions() {
            this.isClose = true;
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
    
    .instructions {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 2;
    }

    
    </style>