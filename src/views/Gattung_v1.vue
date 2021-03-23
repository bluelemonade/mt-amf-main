
<template>
   <!--  -->
  <div v-if="(( content!= '') && (isMainMenuOpen==false))">
      
      <div class="grid-container" :id="'gattungen' + idNr">
        
        <div class="grid-header">
            <h3 class="grid-header-text">{{ $route.params.id }} </h3>
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
        </div>

      </div> 


  </div>
</template>



<script>
// import ClusterMap from '../components/ClusterMap.vue';
import storeMixin from "../mixins/storeMixin.js";


export default {
  components: {
    // ClusterMap
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
        // content:"",
        // homininen: "",
        homininennr: "1",
        // centerNr: "1"
        // idNr: 0,
    }
  },
  created() {
      // this.$http.get('./static/homininen-map.json').then(response => {
      // console.log("!!!!!  homininen-map wurde geladen! !!!!", this.idNr)
      // this.homininen = response.body;

      //   // bischen search testen
      //   console.log(this.homininen.homininen.filter(function(item){
      //       return item.StammbaumNr == "17";
      //   }));

      // }, response => {
      //   console.log(response);
      //   console.log("!!!!! homininen-map wurde nicht geladen! !!!!!")
      //   // this.endload = true;
      // });

      // this.$http.get('./static/stammbaum-homininen.json').then(response => {
      // console.log("!!!!!  stammbaum-homininen wurde geladen! !!!!", this.idNr)
      // this.content = response.body;
      // }, response => {
      //   console.log(response);
      //   console.log("!!!!! stammbaum-homininen wurde nicht geladen! !!!!!")
      //   // this.endload = true;
      // });

  },
  computed: {
    // router2toEnd(){
    //   console.log("path", this.$route.path.replace("/menu5", "") );
    //   return this.$route.path.replace("/menu5", "");
    // },
    // getFundortNr(){
    //   console.log("getFundortNr", this.fundortnr )
    //   if ( (this.fundortnr == "2") || this.fundortnr == "1"){
    //     return this.fundortnr;
    //   } else {
    //     return "3";
    //   }
    // },
    // getCenterNr(){
    //   console.log("getCenterNr", this.fundortnr )
    //   if ( (this.fundortnr == "2") || this.fundortnr == "1"){
    //     this.changeCenterNr(); // dämlich, aber so gehts.
    //     return this.centerNr;
    //   } else {
    //     return this.centerNr;
    //   }
    // },
    // getLanguageID () {
    //     console.log("getLanguageID");
    //     const languageString = this.$store.getters.getOpenWindowsLanguage;
    //     const languageNr = languageString.charAt(this.idNr-1);
    //     if (languageNr == "0"){
    //         return 0
    //     } else {
    //         return 1
    //     }
    // },
  },
  methods:{
    switchgattungimage (value){
      console.log(value);
      if (( value +1) % 4 == 0){
        console.log(value);
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
  grid-template-rows: 66px auto auto auto 32px;
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