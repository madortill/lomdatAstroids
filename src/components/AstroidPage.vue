<template>
    <div id="astroid-page">
        <astroid-info v-if="num === 1" @map="backToMap"></astroid-info>
        <astroids-types v-if="num === 2"></astroids-types>
    </div>
     
  
  </template>
  
  <script>
  import AstroidInfo from '@/components/AstroidInfo.vue';
  import AstroidsTypes from '@/components/AstroidsTypes.vue';
  export default {
    name: "astroid-page",
    props: ["num"],
    components: {
        AstroidInfo,
        AstroidsTypes

    },
    data() {

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
    </style>