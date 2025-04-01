<template>
    <div id="astroids-types">
        <img src="@/assets/media/backToMap.png" class="backToMap" @click="backToMap" alt="">
    </div>
     
  
  </template>
  
  <script>
  export default {
    name: "astroids-types",
    data() {
      return{

      };
    },
    methods: {
        backToMap() {
            this.$emit("map");
        }
    }
}
  </script>

  <style scoped>
    .bla {
        color: rgb(255, 0, 242);
        font-size: 3rem;
    }
    .backToMap {
        width: 13rem;

    }
    </style>