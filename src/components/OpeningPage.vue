<template>
    <div id="opening-page">
        <p v-if="!isStart" class="title">לומדת פיצוץ אסטרואידים</p>
        <img v-if="!isStart" src="@/assets/media/rocket.svg" class="rocket" @click="start" alt="">
    </div>
</template>
<script>
  export default {
    name: "app",
    props: [],
    data() {
      return{
        isStart: false,
      };
    },
    methods: {
      start() {
        this.isStart = true;
        this.$emit('start')
      }
    }
  };
</script>
<style scoped>
  
.title {
  font-family: "abraham";
  color: white;
  font-size: 4rem;
  position: absolute;
  text-align: center;
  width: 20rem;
  right: 50%;
  top: 5rem;
  transform: translateX(50%);
}
.rocket {
  position: absolute;
  right: 40%;
  top: 20rem;
  transform: translateX(50%);

}
@keyframes rocket{
  0% {
    width: 60%;
  }
  50% {
    width: 65%;
  }
  100% {
    width: 60%;
  }
}
.rocket {
  animation: rocket 2s infinite;
}
@media (max-width: 280px) {
  .title {
    font-size: 2rem;
    width: 15rem;
  }

}
</style>