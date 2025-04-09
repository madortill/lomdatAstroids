<template>
    <div id="targets-squares">
        <!-- <div class="targets-container">
            <div class="targets"></div>
            <div class="targets"></div>
            <div class="targets"></div>
            <div class="targets"></div>
            <div class="targets"></div>
            <div class="targets"></div>
            <div class="targets"></div>
        </div> -->
    </div>
     
  
  </template>
  
  <script>
  export default {
    name: "targets-squares",
    components: {
    },
    data() {
        return {
            
        };
        
    },
    methods: {
    }
}
  </script>

  <style scoped>
    .targets {
        background-color: rgba(0, 255, 255, 0.308);
        width: 2rem;
        height: 2rem;
        
    }
    .targets-container {
        display: flex; 
        flex-direction: row;
        gap: 2rem;
        margin-top: -3rem;
        margin-left: 1rem;
    }

</style>