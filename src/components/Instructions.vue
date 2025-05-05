<template>
    <div id="instructions">
        <div class="instructions1">
            <img src="@/assets/media/coordinatesgame/closeIcon.svg" class="closeBtn" @click="closeInstructions" alt="">
            <p class="title">הוראות</p>
            <p class="text">
המטרה שלכם היא לפוצץ חמישה אסטרואידים על פי הקורדינאטות שתקבלו. על כל אסטרואיד שיופיע, תהיה כתובה הקורדינאטה המתאימה לו.
  בשביל לפוצץ אסטרואיד, תצטרכו ללחוץ על הריבוע המתאים. כשתצליחו יופיע פיצוץ על המסך ואם תטעו יופיע איקס.
 סומכים עליכם!</p>
        </div>
       
    </div>
     
  
  </template>
  
  <script>
  export default {
    name: "instructions",
    components: {
    },
    data() {
        return {
            
        };
        
    },
    methods: {
        closeInstructions() {
            this.$emit("close");
        }
    }
}
  </script>

  <style scoped>
  .title {
        font-family: "abraham";
        font-size: 2.8rem;
        color: rgb(0, 0, 0);
        margin-top: -2rem;
  }
    .instructions1 {
        font-family: "rubik";
        font-size: 1.9rem;
        color: rgb(0, 0, 0);
        background-color: #A7A7BE;
        text-align: center;
        width: 20rem;
        padding: 4rem 2rem ;
        border-radius: 4rem;
        line-height: 1.3;
        
    }
    .closeBtn {
        position: relative;
        top: -2.5rem;
        left: 9rem;
    }

   
    </style>