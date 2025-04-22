<template>
    <div id="explosion">
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
    name: "explosion",
    computed: {
      // Dynamically get the path to the animation HTML file
      animationSrc() {
        return './animations/explosion/explosion.html'; // Adjust to your file location
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
        margin-left: 3rem;
  }
  .correct {
    color: white;
    font-family: "abraham";
    font-size: 2rem;
    top: -10rem;
    left: 10rem;
  }
  
  
  </style>