<template>
    <div id="coordinatesGame">
        <decision-screen v-if="isReady" @open-instruction="openInstruction"></decision-screen>
        <!-- <instructions></instructions> -->
    </div>
       
        
  </template>
  
  <script>
  import DecisionScreen from '@/components/DecisionScreen.vue';
//   import Instructions from '@/components/Instructions.vue';
  export default {
    name: "coordinatesGame",
    components: {
        DecisionScreen,
        // Instructions
    },
    data() {
        return {
            isReady: true,
            isClosed: true,
        };
    },
    methods: {
        openInstruction() {
            this.isReady = false;
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
    .cover {
      background-color: rgba(0, 0, 0, 0.438);
      background-size: 100vw 100vh;
      height: 100vh;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;

    }
    
    </style>