<template>
    <div id="subjects-map">
        <img v-show="(page !== 0) && (page !== 4)" src="@/assets/media/backToMap.png" class="backToMap" @click="page = 0" alt="">
        <astroid-page  v-if="page === 1 || page === 2" :num="page" @toMap="backToMap"></astroid-page>
        <coordinates v-if="page === 3" @toMap="backToMap"></coordinates>
        <coordinates-game v-if="page === 4"></coordinates-game>
        <ImportanceOfAstroids v-if="!isClosed" id="importanceof-astroids" @close="closeInfo"></ImportanceOfAstroids>
        <div v-if="!isClosed" class="cover"></div>
            <div v-if="page === 0" class="subjects">
                <p class="title">מפת נושאים</p>
                <p class="title2">לחצו!</p>
                <div v-for="(text, index) in subjects" :key="index" :id="index"  :class="['img', 'img' + (index + 1), enableArr[index] ? 'abled' : 'disabled']">
                    <p :id="(index)"
                    :class="'astroid astroid' + (index + 1)"
                    @click="nextPage">
                    {{ text }}
                    </p>
                </div>
                
            </div>
           
       
    </div>
  
</template>

<script>
import ImportanceOfAstroids from '@/components/importanceOfAstroids.vue';
import AstroidPage from '@/components/AstroidPage.vue';
import Coordinates from '@/components/Coordinates.vue';
import CoordinatesGame from '@/components/CoordinatesGame.vue';
export default {
    name: "app",
    components: {
        AstroidPage,
        ImportanceOfAstroids,
        Coordinates,
        CoordinatesGame

    },
    data() {
      return{
        isStart: false,
        // isClicked: false,
        page: 0,
        isClosed: false,
        subjects: ["מהו אסטרואיד", "סוגי אסטרואידים", "קורדינאטות", "המשימה הסופית"],
        enableArr: [true, false, false, false]
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
        if(this.enableArr[event.target.id])
        if(event.target.id === "0") {
            this.page = 1;
            this.enableArr[Number(event.target.id) + 1] = true;
        } else if (event.target.id === "1") {
            this.page = 2;
            this.enableArr[Number(event.target.id) + 1] = true;
        } else if (event.target.id === "2") {
            this.page = 3;
            this.enableArr[Number(event.target.id) + 1] = true;
        } else {
            this.page = 4;
            this.enableArr[Number(event.target.id) + 1] = true;
        }
      },
      backToMap() {
        this.page = 0;
      }
    }
  };
</script>

<style scoped>
.backToMap {
        width: 10rem;
        position: fixed;
        top: 0.1rem;

    }
.img {
    width: 35rem;  
    height: 30rem;
    margin: 0; 
    padding: 0; 
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
    display: flex;
    flex-direction: column;  
    justify-content: center;  
    align-items: center; 
    width: 100%;
    height: auto;

}
/* @font-face {
  font-family: "abraham";
  src: url("./assets/Abraham-Regular.ttf");
}
@font-face {
  font-family: "rubik";
  src: url("./assets/Rubik-Regular.ttf");
} */
.title {
    font-family: "abraham";
    color: white;
    font-size: 4.5rem;
}
.title2 {
    font-family: "rubik";
    color: white;
    font-size: 2.3rem;
    margin-top: -4rem;
}
.astroid {
    color: white;
    font-family: "abraham";
    width: 13rem; 
    margin: 0.1rem; 
    text-align: center;
}
.astroid1 {
    position: relative;
    top: 6rem;
    right: 10.5rem;
    font-size:2rem;
    padding: 5rem 2rem;
    border-radius: 5rem;
}
.astroid2 {
    position: relative;
    top: 12rem;
    right: 3rem;
    font-size:2rem;
    padding: 4.5rem 1.3rem;
    border-radius: 7rem;
}
.astroid3 {
    position: relative;
    top: 6.7rem;
    right: 18rem;
    font-size:2.3rem;
    padding: 5rem 1.3rem;
    border-radius: 6rem;
}
.astroid4 {
    position: relative;
    top: 4.5rem;
    right: 2.4rem;
    font-size:3rem;
    padding: 7rem 3.4rem;
    border-radius: 8rem;
}
#importanceof-astroids {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 2;
}
.abled {
  opacity: 100%;
}
.disabled {
  opacity: 75%;
}
.cover {
      background-color: rgba(0, 0, 0, 0.438);
      background-size: 100vw 100vh;
      height: 100vh;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }

@media (max-width: 320px) {
  .title {
    font-size: 2.8rem;
  }
  .title2 {
    font-size: 2rem;
    margin-top: -2rem;
}
  .img {
    width: 30rem;
    height: 25rem;
  }
  .astroid {
    width: 12rem;
    
    margin: 0.1rem; 
    text-align: center;
}
.astroid1 {
    position: relative;
    top: 4.2rem;
    right: 9rem;
    font-size:2rem;
    padding: 5rem 1.4rem;
    border-radius: 6rem;
}
.astroid2 {
    top: 9.5rem;
    right: 1.8rem;
    font-size:2rem;
    padding: 3rem 1rem;
    border-radius: 10rem;
}
.astroid3 {
    top: 5.5rem;
    right: 16rem;
    font-size:2rem;
    padding: 4rem 1rem;
}
.astroid4 {
    top: 3.5rem;
    right: 1rem;
    font-size:3rem;
    padding: 5.5rem 3.4rem;
    border-radius: 8rem;
}
}

</style>

