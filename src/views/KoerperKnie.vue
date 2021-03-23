
<template>
   <!--  -->
  <div v-if="(( content!= '') && (isMainMenuOpen==false))">
      
      <div class="grid-container" :id="'knie' + idNr">
        
        <div class="grid-header">
            <h3 class="grid-header-text">  {{ $route.path}} </h3> 
            <div class="grid-header-line"></div>
        </div>
        
        <div class="grid-text">
          <h1>
            {{ content["knie-" + getLanguage].headline}}
          </h1>
          <p>
            {{ content["knie-" + getLanguage].copy[0]}} </p>
        </div>
        
        <div class="grid-content">
           <div class="grid-content-row1">  <img src="../assets/koerper/beinstellung.jpg" alt="">  </div>
           <div class="grid-content-row2-col1"> <p class="label"> {{ content["knie-" + getLanguage].label[0]}} </p> </div>
           <div class="grid-content-row2-col2"> <p class="label"> {{ content["knie-" + getLanguage].label[1]}} </p> </div>
           <div class="grid-content-row2-col3"> <p class="label"> {{ content["knie-" + getLanguage].label[2]}} </p> </div>
          
        </div>
      </div> 

  </div>
</template>



<script>
// import ClusterFundorteMap from '../components/ClusterFundorteMap.vue';
import storeMixin from "../mixins/storeMixin.js";
// import KoerperPuzzleZuordnung from "../components/KoerperPuzzleZuordnung.vue";

export default {
  components: {
    // ClusterFundorteMap
    // KoerperPuzzleZuordnung
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
  // created() {
  // },
  computed: {
  },
  methods:{
  }
}
</script>



<style lang="scss" scoped>

// .map-relative {
//   position: relative;
//   height: 800px;
//   // height: 80vh;
// }

.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 66px auto auto 32px;
  gap: 32px 32px;
  grid-template-areas:
    "grid-header grid-header grid-header grid-header"
    "grid-text grid-text grid-text grid-text"
    "grid-content grid-content grid-content grid-content"
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


.grid-text { grid-area: grid-text; }

// gleichzeitig celle und grid parent
.grid-content { 
  grid-area: grid-content;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto auto ;
  gap: 0px 0px;
  grid-template-areas:
    "grid-content-row1 grid-content-row1 grid-content-row1"
    "grid-content-row2-col1 grid-content-row2-col2 grid-content-row2-col3";
  background-color: #f4f3f2;
}

.grid-content-row1{
  grid-area: grid-content-row1;
  // display: contents;
  width: 100%;
}
.grid-content-row2-col1 {
  grid-area: grid-content-row2-col1;
  // background-color: #da0e0e;
  // display: contents;
  width: 100%;
}
.grid-content-row2-col2 {
  grid-area: grid-content-row2-col2;
  // display: contents;
  width: 100%;
}
.grid-content-row2-col3 {
  grid-area: grid-content-row2-col3;
  // display: contents;
  width: 100%;
}

.label {
  font-family: FontBold;
  text-align: center;
  font-size: 26px;
  margin-top: 0px;
  margin-bottom: 20px;
  color: grey;

}

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