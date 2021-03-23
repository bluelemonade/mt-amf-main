
<template>
   <!--  -->
  <div v-if="(( content!= '') && (isMainMenuOpen==false))">
      
      <div class="grid-container" :id="'gattungen' + idNr">
      <!-- <div class="grid-container" id="gattungen"> -->
        
        <div class="grid-header">
            <h3 class="grid-header-text"> {{ $route.path }}  #{{ $route.hash }}   </h3>
        </div>
        
        <div class="grid-text">
          <h1 v-html="content['gattungen-' + getLanguage][parseInt($route.params.id)-1].name">
            <!-- {{ }} -->
          </h1>
          <p v-html="content['gattungen-' + getLanguage][parseInt($route.params.id)-1].text">
            <!-- {{ }} -->
          </p>
        
        </div>
        
        <div class="grid-content">
          <template v-for="(eintrag, index) in content['gattungimages'][parseInt($route.params.id)-1]">
            <div :key="eintrag.path" class="gattungimage" :style="switchgattungimage(index)" @click="onHomininen(index)">
              <img :src="'./static/gattungen/' + eintrag.path" alt="">
              <p class="gattung-sub" v-html="'> ' + eintrag['sub-' + getLanguage]"> </p>
            </div>
          </template>

        </div>

        <div class="grid-homininen">
          <!-- <transition name="fade" mode="out-in" appear>
              <router-view :idNr="idNr" :homininen="homininen" :content="content" :key="$route.path"/>
          </transition> -->
        </div>

        <div class="grid-footer">
          <div @mousedown="prevSubPage" class="footerleft">
              <p v-if="(parseInt($route.params.id)-1) > 0">&lt; {{ content["content-" +getLanguage].backgattungen }} </p>
          </div>
          <div @mousedown="toTop" class="footermiddle">
            <p> ⌃ </p> 
          </div>
          <div class="footerright">
            <p v-if="(parseInt($route.params.id)-1) < content['gattungen-de'].length -1" @mousedown="nextSubPage">  {{ content["content-" + getLanguage].forwardgattungen }}  &gt;</p>
          </div>
        </div>

      </div> 

  </div>
</template>



<script>
// import ClusterMap from '../components/ClusterMap.vue';
import storeMixin from "../mixins/storeMixin.js";


export default {
    name: 'Gattungen',
  components: {
  },
  mixins: [storeMixin],
  props: {    
      idNr:  {
              type: Number,
              default: 0,
          },
      content: {
            type: Object,
            default: () => {} ,
      },
      homininen: {
          type: Object,
          default: () => {} ,
      }
  },
  data() {
    return {
        homininennr: "1",
    }
  },
  created() {
  },
  computed: {
    // router2toEnd(){
    //   console.log("path", this.$route.path.replace("/menu5", "") );
    //   return this.$route.path.replace("/menu5", "");
    // },
  },
  methods:{
    nextSubPage(){
      // console.log("nextSubPage");
      this.onSubpage(parseInt(this.$route.params.id) +1 );
    },
    prevSubPage(){
      // console.log("prevSubPage");
      this.onSubpage(parseInt(this.$route.params.id) -1);
    },
    toTop(){
      // console.log("toTop");
      this.isForscherVisible = false;
      // this.$router.push({ name: 'gattungen', params: { id: this.$route.params.id }, hash: '#window-content-' + this.idNr }).catch(() => {});
      location.hash = "-";
      setTimeout( () => location.hash = "#window-content-" + this.idNr, 100);
    },
    onSubpage(nr){
      // fundOrtNr
      // console.log("onSubpage", nr);
      this.$router.push({ name: 'gattungen', params: { id: nr }, hash: 'gattungen' + this.idNr  }).catch(() => {});
      // this.$router.push({ name: 'gattungen', params: { id: nr }, hash: 'gattungen'  }).catch(() => {});
      location.hash = "-";
      setTimeout( () => location.hash = "#gattungen" + this.idNr, 800);
      // console.log(this.$route);
    },
    switchgattungimage (value){
      // console.log(value);
      if (( value +1) % 4 == 0){
        // console.log(value);
        return {
            marginRight: '0px',
            marginBottom: '32px',
          };
      } else {
         return {
            marginRight: '32px',
            marginBottom: '32px',
          };
      }
      
    },
    onHomininen: function (value){
      // const hominidenNr =  e.target.attributes.name.nodeValue;
      // console.log("onHomininen", value);
      const hominidenNr = this.content.gattungimages[parseInt(this.$route.params.id)-1][value].id;
      console.log("onHomininen", value, hominidenNr);  // ???? fehler wieso!!!
      this.$router.push({ name: 'homininen', params: { id: hominidenNr }, hash: 'homininen' + this.idNr  }).catch(() => {});  // 'homininen' + idNr"
      location.hash = "-";
      setTimeout( () => location.hash = "#homininen" + this.idNr, 500);
    },
    // changeCenterNr: function (){
    //   this.centerNr = this.fundortnr;
    // },
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
  grid-template-rows: 66px auto auto auto 64px;
  gap: 32px 32px;
  grid-template-areas:
    "grid-header grid-header grid-header grid-header"
    "grid-text grid-text grid-text grid-text"
    "grid-content grid-content grid-content grid-content"
    "grid-homininen grid-homininen grid-homininen grid-homininen"
    "grid-footer grid-footer grid-footer grid-footer";
  background-color: #b5995c;
  padding-left: 32px;
  padding-right: 32px;
}

.grid-header { 
  grid-area: grid-header; 
  // display: flex; 
  // align-content: end;
  // justify-content: end;
}

.grid-text { grid-area: grid-text; }
.grid-content { 
  grid-area: grid-content; 
  display: flex;
  flex-wrap: wrap;
}
.grid-homininen { 
  grid-area: grid-homininen; 
}
.grid-footer { 
  grid-area: grid-footer;
  border-top: 1px solid rgba(0, 0, 0, 0.312);
  // border-top-width: thin
  display: flex;
}

.footerleft{
  width: 45%;
  // width: 400px;
  left: 0px;
}
.footerleft p {
 font-family: FontLight;
  font-size: 26px;
  margin-top: 0px;
}
.footermiddle{
   width: 10%;
   text-align: center;
  
}
.footermiddle p {
  font-family: FontRegular;
  font-size: 40px;
  margin-top: 12px !important;
}
.footerright{
   font-family: FontLight;
  width: 45%;
  text-align: right;
  // width: 400px;
  right: 0px;
}
.footerright p {
 font-family: FontRegular;
  font-size: 26px;
  margin-top: 0px;
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

i {
    font-family: FontBoldItalic;
    font-style: italic;
    font-size: 50px;
    background-color: green;
}

.kursiv {
  font-family: FontBold;
  color: orangered;
}

.gattungimage {
  background-color: rgba(0, 0, 0, 0.459);
}

.gattung-sub {
  font-family: FontLightItalic;
  text-align: center;
  align-content: center;
  margin-top: 10px;
  line-height: 26px;
  // max-width: 254;
  color: $whitetypo;
  width: 254px;
  height: 64px;
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

// svg styles
.hominrect{
  fill:#ffffff00;
  stroke:#da0e0e;
  // stroke-miterlimit:10;
}
.gattungrect{
  fill:#ffffff00;
  stroke:#052b0a;
  // stroke-miterlimit:10;
}

</style>