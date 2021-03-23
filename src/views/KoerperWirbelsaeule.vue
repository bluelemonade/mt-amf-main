
<template>
   <!--  -->
  <div v-if="(( content!= '') && (isMainMenuOpen==false))">
      
      <div class="grid-container">
        
        <div class="grid-header" :id="'wirbelsaeule' + idNr">
            <h3 class="grid-header-text">  {{ $route.path}} </h3> 
            <div class="grid-header-line"></div>
        </div>
        
        <div class="grid-text">
          <h1>
            {{ content["wirbelsaeule-" + getLanguage].headline}}
          </h1>
          <p>
            {{ content["wirbelsaeule-" + getLanguage].copy[0]}}</p>
          <!-- <p>
            {{ content.content.copy[1][getLanguageID] }}
             <input v-model="fundortnr" placeholder="Gib 1 oder 2 ein!"> 
          </p> -->
        </div>
        
        <div class="grid-content">
           <img src="../assets/koerper/wirbelsäule.jpg">
        </div>
        <div class="grid-footer1"> <p class="label" v-html="content['wirbelsaeule-' + getLanguage].label[0]"></p></div>
        <div class="grid-footer2">  <p class="label" v-html="content['wirbelsaeule-' + getLanguage].label[1]"></p> </div>
        <div class="grid-footer3">  <p class="label" v-html="content['wirbelsaeule-' + getLanguage].label[2]"></p> </div>
        <div class="grid-footer4">  <p class="label" v-html="content['wirbelsaeule-' + getLanguage].label[3]"></p> </div>

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
        // content: "",
        // fundortnr: "0",
        // centerNr: "1"
        // idNr: 0,
    }
  },
  // created() {
  //     this.$http.get('./static/koerper.json').then(response => {
  //     console.log("!!!!!  koerper.json wurde in KoerperMain geladen! !!!!", this.idNr)
  //     this.content = response.body;
  //   }, response => {
  //     console.log(response);
  //     console.log("!!!!! koerper.json wurde in KoerperMain nicht geladen! !!!!!")
  //     // this.endload = true;
  //   });
  // },
  computed: {
    // getFundortNr(){
    //   console.log("getFundortNr", this.fundortnr )
    //   // if ( (this.fundortnr == "2") || this.fundortnr == "1"){
    //     return this.fundortnr;
    //   // } else {
    //   //  return "3";
    //   // }
    // },
    // getCenterNr(){
    //   console.log("getCenterNr", this.fundortnr )
    //   // if ( (this.fundortnr == "2") || this.fundortnr == "1"){
    //      this.changeCenterNr(); // dämlich, aber so gehts.
    //      return this.centerNr;
    //   // } else {
    //   //  return this.centerNr;
    //   // }
    // },

  },
  methods:{
    // clickKoerper: function (e){
    //   const koerperNr =  e.target.attributes.name.nodeValue;
    //   console.log("clickKoerper", koerperNr);
      
    //   this.$router.push({ name: 'koerper', params: { id: koerperNr }, hash: 'koerper' + this.idNr  }).catch(() => {});  // 'koerper' + idNr"
    //   location.hash = "-";
    //   setTimeout( () => location.hash = "#homininen" + this.idNr, 500);
    // },
    // onOpenFundort(fundOrtNr){
    //   this.fundortnr = fundOrtNr
    //   console.log("onOpenFundort", fundOrtNr);
    //   this.$router.push({ name: 'fundorte', params: { id: fundOrtNr }, hash: 'fundorte' + this.idNr  }).catch(() => {});
      
    //   location.hash = "-";
    //   setTimeout( () => location.hash = "#fundorte" + this.idNr, 500);
    //   // var self = this;
    //   // setTimeout(
    //   //   function(){ 
    //   //     console.log("setTimeout in fundorte", "#fundorte" + self.idNr);
    //   //     location.hash = "-";
    //   //     location.hash = "#fundorte" + self.idNr; 
    //   //   }, 1000);
    //   // setTimeout(
    //   //   function(){
    //   //     console.log("setTimeout scrollto in fundorte");
    //   //     window.scrollTo(0, 500) ;
    //   //   }, 2000);

    //   console.log(this.$route);
    // },
    // changeCenterNr: function (){
    //   this.centerNr = this.fundortnr;
    // },
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
  grid-template-rows: 66px auto auto;
  gap: 32px 32px;
  grid-template-areas:
    "grid-header grid-header grid-header grid-header"
    "grid-text grid-text grid-text grid-text"
    "grid-content grid-content grid-content grid-content"
    "grid-footer1 grid-footer2 grid-footer3 grid-footer4";

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
.grid-content { 
  grid-area: grid-content; 
  // background-color: #da0e0e;
  text-align: center;

}

.grid-footer1 { 
  grid-area: grid-footer1; 
  width: 100%;
  // background-color: #ffffff;
}
.grid-footer2 { 
  grid-area: grid-footer2;
  width: 100%;
  // background-color: #da0e0e;
}
.grid-footer3 { 
  grid-area: grid-footer3; 
  width: 100%;
  // background-color: #da0e0e;
}
.grid-footer4 { 
  grid-area: grid-footer4;
  width: 100%;
  // background-color: #da0e0e;
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

.label {
  font-family: FontLight;
  font-size: 22px;
  line-height: 24px;
  margin-top: 0px;
  margin-bottom: 32px;
  color: $blacktypo;
  text-align: center;
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