<template>
    <div id="lose-game">
        <div class="container">
            <p class="text">הפסדתם.... 
                כנראה שאתם צריכים עוד חזרה על איך לפוצץ אסטרואידים...</p>
            <p class="btn" @click="restartGame">אני רוצה עוד הזדמנות!</p>
        </div>
      
    </div>
</template>
<script>
  export default {
    name: "lose-game",
    props: [],
    data() {
      return{
        
      };
    },
    methods: {
      restartGame() {
        this.$emit("restart-Game");
      }
    }
  };
</script>
<style scoped>

    .text {
        color: white;
        font-family: "abraham";
        font-size: 2.3rem;
        padding: 1rem 4.5rem;
        line-height: 1.5;
    }
    .btn {
        font-family: "abraham";
        font-size: 2.2rem;
        background-color: #A7A7BE;
        padding: 1rem 1rem;
        width: 15rem;
        border-radius: 1.5rem;
    }
    .btn:active {
        background-color: #9494aa;
    }
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        margin-top: 10rem;
    }

</style>