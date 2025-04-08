<template>
    <div>
      <!-- Embed the local animation using iframe -->
      <div class="animation">
        <iframe
          :src="animationSrc"
          width="100%" 
          height="100%"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "rocket",
    computed: {
      // Dynamically get the path to the animation HTML file
      animationSrc() {
        return './animations/rocket/animation roket.html'; // Adjust to your file location
      }
    }
  };
  </script>
  
  <style scoped>
  .animation {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh; /* Full viewport height */
    width: 100vw;  /* Full viewport width */
    margin: 0;     /* Remove any default margin */
  }
  
  iframe {
    width: 1500%;
    height: 100%;
  }
  </style>