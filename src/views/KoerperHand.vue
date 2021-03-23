
<template>

  <div v-if="(( content!= '') && (isMainMenuOpen==false))">
      
      <div class="grid-container" :id="'hand' + idNr">
        
        <div class="grid-header">
            <h3 class="grid-header-text"> {{ $route.path }} </h3>
            <div class="grid-header-line"></div>
        </div>
        
        <div class="grid-text">
          <h1>
            {{ content["hand-" + getLanguage].headline}}
          </h1>
          <p>
             {{ content["hand-" + getLanguage].copy[0]}}</p>
              <p>
             {{ content["hand-" + getLanguage].copy[1]}}</p>
          <!-- <p>
            {{ content.content.copy[1][getLanguageID] }}
             <input v-model="fundortnr" placeholder="Gib 1 oder 2 ein!"> 
          </p> -->
        </div>
        
        <!-- <div > -->
        <div class="grid-nav1" :id="'handpuzzle' + idNr" @click="setPuzzle(1)"> <p> {{ content["hand-" + getLanguage].puzzle1name}} </p></div>
        <div class="grid-nav2" @click="setPuzzle(2)"> <p> {{ content["hand-" + getLanguage].puzzle2name}} </p></div> 
        <!-- </div> -->
        <div class="grid-marker">
          <div :style="markerStyle"></div>
        </div>
        
        <div class="grid-info">
            <transition name="fade" mode="out-in" appear>
               <p> {{ anleitung }} </p>
            </transition> 
        </div>
            
          <div class="grid-content">
             <transition-group name="fade" mode="out-in" appear>
                <router-view :idNr="idNr" :content="content" :key="$route.path.split('/')[3]"/>  />   <!--:key="$route.path"-->
            </transition-group>
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
      anleitung: "",
      anleitungnr: 0,
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
    markerStyle (){
      console.log("markerStyle");
      if (this.anleitungnr == 0){
        return {
              position: "relative",
              left: "0px",
              backgroundColor: "#fff",
              height: "10px",
              width: "0px",
              transition: "all .3s ease"
            }
      } else if (this.anleitungnr == 1){
        return {
              position: "relative",
              left: "0px",
              backgroundColor: "#fff",
              height: "10px",
              width: "400px",
              transition: "all .3s ease"
            }
      } else {
        return {
              position: "relative",
              left: "580px",
              backgroundColor: "#fff",
              height: "10px",
              width: "400px",
              transition: "all .3s ease"

            }
      }
      
    },
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
    setPuzzle (nr){
      console.log(nr);
        if (nr == "1"){
          console.log("puzzle router 1");
          this.anleitung = this.content["hand-" + this.getLanguage].puzzle1copy
          this.anleitungnr = 1;
          this.$router.push({ name: 'puzzle1', hash: 'handpuzzle' + this.idNr  }).catch(() => {});  // 'koerper' + idNr"
          // this.$router.push({ name: 'puzzle1', params: { id: nr }, hash: 'puzzle' + this.idNr  }).catch(() => {});  // 'koerper' + idNr"
          location.hash = "-";
          setTimeout( () => location.hash = "#handpuzzle" + this.idNr, 600);
        } else  if (nr == "2"){
          this.anleitungnr = 2;
           this.anleitung = this.content["hand-" + this.getLanguage].puzzle2copy
           this.$router.push({ name: 'puzzle2', hash: 'handpuzzle' + this.idNr  }).catch(() => {});  // 'koerper' + idNr"
          // this.$router.push({ name: 'puzzle2', params: { id: nr }, hash: 'puzzle' + this.idNr  }).catch(() => {});  // 'koerper' + idNr"
          location.hash = "-";
          setTimeout( () => location.hash = "#handpuzzle" + this.idNr, 600);
        }
    }
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
  grid-template-rows: 66px auto 32px 10px 32px 832px;
  gap: 32px 32px;
  grid-template-areas:
    "grid-header grid-header grid-header grid-header"
    "grid-text grid-text grid-text grid-text"
    "grid-nav1 grid-nav1 grid-nav2 grid-nav2"
    "grid-marker grid-marker grid-marker grid-marker"
    "grid-info grid-info grid-info grid-info"
    "grid-content grid-content grid-content grid-content";
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
  // display: flex;
  // flex-direction: row
}

.grid-nav1 { 
  grid-area: grid-nav1;
  // background-color: #orange;
  // display: flex;
  // flex-direction: row
}

.grid-nav2 { 
  grid-area: grid-nav2;
  // background-color: #orange;
  // display: flex;
  // flex-direction: row
}

.grid-marker {
  grid-area: grid-marker;
  top: 0px;
//   background-color: #da0e0e;
  }
.grid-info {
  grid-area: grid-info;
  top: 0px;
  // background-color: #orange;
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

.grid-nav1 p, .grid-nav2 p {
  font-family: FontBold;
  color: $whitetypo;
  font-size: 36px;
  line-height: 40px;
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