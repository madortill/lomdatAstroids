<template>
    <div id="end-screen">
      <div class="end-screen">
        <img src="@/assets/media/endScreen/rocket1.svg" class="rocket" alt="rocket">
        <img src="@/assets/media/endScreen/astroids1.svg" class="astroids1" alt="astroids1">
        <p class="text">כל הכבוד!! הצלתם את כדור הארץ!
          אתם מוכנים לפוצץ אסטרואידים ברמה הכי גבוהה!</p>
          <img src="@/assets/media/endScreen/restart.svg" @click="restart" class="restart" alt="restart">
        <img src="@/assets/media/endScreen/astroids2.svg" class="astroids2" alt="astroids2">
      </div>
    </div>
</template>
<script>
  export default {
    name: "end-screen",
    props: [],
    data() {
      return{
        
      };
    },
    methods: {
      restart() {
        this.$emit("restart");
      }
    }
  };
</script>
<style scoped>
  .end-screen {
    display: flex;
    flex-direction: column;
    align-items: center;

    
  }
  .rocket {
    width: 23rem;
    margin-right: 8rem;
  }
  .astroids1 {
    width: 7rem;
    margin-top: -2rem;
    margin-left: 23rem;
  }
  .astroids2 {
    width: 7rem;
    margin-top: -1rem;
    margin-right: 20rem;
  }
  .text {
    color: white;
    font-family: "abraham";
    font-size: 2rem;
    text-align: center;
    margin-top: -1rem;
    padding: 2rem 4rem;
    
  }
  .restart {
    width: 10rem;
  }
  @media (max-width: 360px) {
    .astroids1 {
    margin-left: 20rem;
  }
  .astroids2 {
    margin-right: 19rem;
  }
  
  }

</style>