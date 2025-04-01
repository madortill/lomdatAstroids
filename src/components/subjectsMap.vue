<template>
    <div id="subjects-map">
        <astroid-page  v-if="page === 1 || page === 2" :num="page" @map="backToMap"></astroid-page>
        <importance-of-astroids v-if="!isClosed" @close="closeInfo"></importance-of-astroids>
            <div v-if="page === 0" class="subjects">
                <p class="title">מפת נושאים</p>
                <div class="img img1"><p id="astroid1" class="astroid astroid1" @click="nextPage">מהו אסטרואיד</p></div>
                <div class="img img2"><p id="astroid2" class="astroid astroid2" @click="nextPage">סוגי אסטרואידים</p></div>
                <div class="img img3"><p id="astroid3" class="astroid astroid3" @click="nextPage">קורדינאטות</p></div>
                <div class="img img4">hgfh</div>
            
                <!-- <img src="@/assets/media/subjectMap/subj1.svg" alt="astroid1">
                <img src="@/assets/media/subjectMap/subj2.svg" alt="">
                <img src="@/assets/media/subjectMap/subj3.svg" alt="">
                <img src="@/assets/media/subjectMap/subj4.svg" alt=""> -->
                <!-- <div class="text">
                
                
                <p class="astroid astroid3">קורדינאטות</p>
                <p class="astroid astroid4">המשימה הסופית</p>
            </div> -->
            </div>
           
       
    </div>
  
</template>

<script>
import ImportanceOfAstroids from '@/components/ImportanceOfAstroids.vue';
import AstroidPage from '@/components/AstroidPage.vue';
export default {
    name: "app",
    components: {
        AstroidPage,
        ImportanceOfAstroids
    },
    data() {
      return{
        isStart: false,
        page: 0,
        isClosed: false,
      };
    },
    methods: {
      start() {
        this.isStart = true;
        this.$emit('start')
      },
      closeInfo() {
        this.isClosed = true;
      },
      nextPage(event) {

        if(event.target.id === "astroid1") {
            this.page = 1;
        } else if (event.target.id === "astroid2") {
            this.page = 2;
        } else if (event.target.id === "astroid3") {
            this.page = 3;
        }
      },
      backToMap() {
        this.page = 0;
      }
    }
  };
</script>

<style scoped>

#subjects-map {
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
  
}
.img {
    width: 30rem;
    height: 30rem;
    color: white;

}
.img1 {
    background-image: url(@/assets/media/subjectMap/subj1.svg);
    background-size: 100% 100%;
    
}
.img2 {
    background-image: url(@/assets/media/subjectMap/subj2.svg);
    background-size: 100% 100%;
}
.img3 {
    background-image: url(@/assets/media/subjectMap/subj3.svg);
    background-size: 100% 100%;
}
.img4 {
    background-image: url(@/assets/media/subjectMap/subj4.svg);
    background-size: 100% 100%;
}
.subjects {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: left;
    text-align: center;
    width: 100%;
    height: 100%;
    align-items: center;

}
@font-face {
  font-family: "abraham";
  src: url("./assets/Abraham-Regular.ttf");
}
.title {
    font-family: "abraham";
    color: white;
    position: relative;
    font-size: 3rem;
}
.astroid {
    color: white;
    font-family: "abraham";
    background-color: rgba(0, 255, 255, 0.363);
    width: 10rem;
    padding: 1rem;
    
}
.astroid1 {
    position: relative;
    top: 2rem;
    right: 7rem;
    font-size:1.1rem;
}
.astroid2 {
    position: relative;
    top: 5rem;
    right: 3.5rem;
    font-size:1rem;
}
.astroid3 {
    position: relative;
    top: 1rem;
    right: 9rem;
    font-size:1.5rem;
}
importance-of-astroids {
    z-index: 3;
    position: absolute;
}
@media (max-width: 250px) {
  .title {
    font-size: 2.5rem;
  }
}

</style>

