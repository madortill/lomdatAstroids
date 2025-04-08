<template>
  <div>
    <!-- Embed the local animation using iframe -->
     <div class="animation">
      <iframe
      :src="animationSrc"
      width="100%" 
      height="500px"
      frameborder="0"
      allowfullscreen
    ></iframe>
     </div>
    
  </div>
</template>

<script>
export default {
  name: "loader",
  computed: {
    // Dynamically get the path to the animation HTML file
    animationSrc() {
      return './animations/loader/RECOVER_gif.html'; // Adjust to your file location
    }
  }
};
</script>

<style scoped>
.animation {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      margin: 0;
}


</style>