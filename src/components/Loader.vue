<template>
    <div class="animate-iframe-container">
      <iframe
        :src="animateSrc"
        frameborder="0"
        width="100%"
        height="100%"
        title="first animation"
      ></iframe>
    </div>
  </template>
  
  <script>
  export default {
    name: "first-animation",
    data() {
      return {
        // Point to the index.html file of your exported Animate project
        animateSrc: "@/animations/loader/loader.html",
      };
    },
  };
  </script>
  
  <style scoped>
  .animate-iframe-container {
    /* width: 100%; */
    height: 100%; /* Adjust this height as per your needs */
    width: 100%;
    position: relative;
  }
  iframe {
    width: 100%;
    height: 100%;
  }
  </style>