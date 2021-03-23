
<template>
   <!--  && (isMainMenuOpen==false) -->
  <div v-if="(( content!= ''))">
      
      <div class="grid-container">
        
        <div class="grid-header" :id="'schaedel' + idNr">
            <h3 class="grid-header-text">  {{ $route.path}} </h3>  
            <div class="grid-header-line"></div>
        </div>
        
        <div class="grid-text">
          <h1>
            {{ content["schaedel-" + getLanguage].headline}}
          </h1>
          <p>
            {{  content["schaedel-" + getLanguage].copy[0] }} </p>
             <p>
            {{  content["schaedel-" + getLanguage].copy[1] }} </p>
        </div>
        
        <div class="grid-content1 schaedelimg">
           <img src="../assets/koerper/Schädel-1-de.jpg" alt="">
           <p class="imagesubtext" v-html="content['schaedel-' + getLanguage].sub"></p>
           <!-- <div class="imagesub"></div> -->
        </div>
        <div class="grid-content2">
            <p> {{  content["schaedel-" + getLanguage].copy[0] }} </p>
            <img src="../assets/koerper/hirn_de.jpg" alt="">
             <p> {{  content["schaedel-" + getLanguage].copy[1] }} </p>
             <SchaedelMorph :idNr="idNr" :names="content['schaedel-' + getLanguage].animation" ></SchaedelMorph>  
        </div>
        <div class="grid-footer"></div>

      </div> 

  </div>
</template>



<script>
import storeMixin from "../mixins/storeMixin.js";
import SchaedelMorph from "../components/SchaedelMorph.vue";

export default {
  components: {
    SchaedelMorph
  },
  mixins: [storeMixin],
  props: {    
      idNr:  {
              type: Number,
              default: 0,
          },
      content: {
            type: Object,
            default: () => {}
          }
  },
  data() {
    return {
    }
  },
  mounted(){
    console.log("Schaedel mounted", this.content);
  },
  created() {
  },
  computed: {
  },
  methods:{
    
  }
}
</script>



<style lang="scss" scoped>

.map-relative {
  position: relative;
  height: 800px;
  // height: 80vh;
}

.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 66px auto auto 32px;
  gap: 32px 32px;
  grid-template-areas:
    "grid-header grid-header grid-header grid-header"
    "grid-text grid-text grid-text grid-text"
    "grid-content1 grid-content1 grid-content2 grid-content2"
    "grid-footer grid-footer grid-footer grid-footer";
  background-color: #E8C35D;
  padding-left: 32px;
  padding-right: 32px;
}

.grid-header { 
  grid-area: grid-header; 
  // display: flex; 
  // align-content: end;
  // justify-content: end;
}

// svg
.text {
    font-family: FontRegular;
    font-size: 14px;
    line-height: 20px;
    fill: rgb(153, 153, 153);
    // text-transform: uppercase;
}
.textbold {
    font-family: FontRegular;
    font-size: 14px;
    line-height: 20px;
    fill: $blacktypo;
    // text-transform: uppercase;
}
// svg styles
.koerperrect{
  fill:#ffffff00;
  stroke:#da0e0e;
  // stroke-miterlimit:10;
}


.schaedelimg {
  margin-top: 22px;
  background-color: rgba(0, 0, 0, 0.459);
}

// .imagesub {
//   width: 100%;
//   margin-top: 0px;
// }

.imagesubtext {
  font-family: FontLight;
  text-align: center;
  align-content: center;
  margin-top: 10px;
  margin-bottom: 10px;
  line-height: 28px;
  color: $whitetypo;
  width: 548px;
  min-height: 48px;
}


.grid-text { grid-area: grid-text; }
.grid-content1 { grid-area: grid-content1; }
.grid-content2 { grid-area: grid-content2; }
.grid-footer { grid-area: grid-footer; }

h1 {
  font-family: FontBold;
  font-size: 40px;
  margin-top: 0px;
  color: $blacktypo;
}

p {
  font-family: FontLight;
  font-size: 26px;
  line-height: 40px;
  margin-top: 20px;
}

h3 {
    font-family: FontBold;
    font-size: 18px;
    line-height: 30px;
    color: $blacktypo;
    text-transform: uppercase;
}

.grid-header-text {
  margin-top: 32px;
}

.grid-header-line {
    width: 60px;
    height: 2px; 
    background-color: #fff;
    opacity: $linealpha;
}


.basefade-enter-active,
.basefade-leave-active {
  transition: opacity 0.6s;
  transition-delay: 0.7s;
}

.basefade-enter,
.basefade-leave-to
/* .fade-leave-active in <2.1.8 */
  {
  opacity: 0;
  transition-delay: 0.0s;
}

/* .fademove-enter-active {
  transition: all 0.3s ease;
}
.fademove-leave-active {
  transition: all 0.8s cubic-bezier(0.3, 0.5, 0.8, 1);
}
.fademove-enter,
.fademove-leave-to {
  transform: translateX(15px);
  opacity: 0;
}
 */

.slide-left-enter-active,
/* .slide-left-leave-active, */
.slide-right-enter-active,
.slide-right-leave-active {
  transition-duration: 0.7s;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.55, 0, 0.1, 1);
  /* overflow: hidden; */
}

.slide-left-enter,
.slide-right-leave-active
 { 
  opacity: 0;
  transform: translate(2em, 0);
}

/* .slide-left-leave-active, */
.slide-right-enter {
  opacity: 0;
  transform: translate(-2em, 0);
}

li {
  list-style-type: none;
}

</style>