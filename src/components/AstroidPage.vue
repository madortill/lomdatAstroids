<template>
    <div id="astroid-page">
        <astroid-info v-if="num === 1" @next-page="num = 2"></astroid-info>
        <astroids-types v-if="num === 2" @toMap="backMap" @showMap="showMap" @hideMap="hide"></astroids-types>
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
        backMap() {
            this.$emit("toMap");
        },
        showMap() {
            this.$emit("showMap");
        },
        hide() {
            this.$emit("hideMap");
        }
    }
}
  </script>

  <style scoped>
    
    </style>