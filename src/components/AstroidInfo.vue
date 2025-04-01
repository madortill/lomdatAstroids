<template>
    <div id="astroid-info">
        <img src="@/assets/media/backToMap.png" class="backToMap" @click="backToMap" alt="">
    </div>
     
  
  </template>
  
  <script>
  export default {
    name: "astroid-info",
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
        color: rgb(9, 255, 0);
        font-size: 3rem;
    }
    .backToMap {
        width: 13rem;

    }
    </style>