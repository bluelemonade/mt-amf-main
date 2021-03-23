
<template>
   <!--  -->
  <div v-if="(( content!= '') && (isMainMenuOpen==false))">
      
      <div class="grid-container">
        
        <div class="grid-header" :id="'fundorte' + idNr">
            <h3 class="grid-header-text">  {{ $route.path }} {{ $route.params.id }} {{ $route.hash }}   </h3>
            <div class="grid-header-line"></div>
        </div>
        <div class="grid-headline">
          <h1 class="label" v-html="content['fundortlabel-' + getLanguage] [0]"> </h1>
          <h1 v-html="content['fundorte-'+ getLanguage][parseInt($route.params.id)-1].fundort"></h1>
        </div>
        <!-- "Fundort", "Lage", "Alter", "Homininen","weitere Funde", "Forschungsgeschichte" -->
        <div class="grid-links">
            <p class="label" v-html="content['fundortlabel-' + getLanguage] [1]"></p>
            <p v-html="content['fundorte-' + getLanguage][parseInt($route.params.id)-1].lage"> </p>
            <p class="label" v-html="content['fundortlabel-' + getLanguage] [2]"></p>
            <p v-html="content['fundorte-'+ getLanguage][parseInt($route.params.id)-1].alter"></p> 
            <p class="label" v-html="content['fundortlabel-' + getLanguage] [3]"> </p>
            <p v-html="content['fundorte-'+ getLanguage][parseInt($route.params.id)-1].homininen"></p>
            <p class="label" v-html="content['fundortlabel-' + getLanguage] [4]"></p>
            <p v-html="content['fundorte-' + getLanguage][parseInt($route.params.id)-1].funde"></p>
            <p class="label" v-html="content['fundortlabel-' + getLanguage] [5]"></p>
            <p v-html="markForscher(content['fundorte-'+ getLanguage][parseInt($route.params.id)-1].forschungsgeschichte)" class="parseevent"></p>
           
        </div>
        
        <div class="grid-rechts">
            <div class="map-relative">
                <ClusterFundortMap :idNr="idNr" :fundortnr="getFundortNr" ></ClusterFundortMap>
                <!-- <ClusterFundortMap :idNr="idNr" :fundortnr="getFundortNr" :centernr="getCenterNr" :fundorte="fundorte"></ClusterFundortMap> -->
            </div>
            
            <!--  alle bilder hier reinpusten mit footer  -->
            <template v-for="(eintrag, index) in content['fundortimages'][parseInt($route.params.id)-1].rechts">

              <div :key="eintrag.path" class="fundortimage" :style="switchFundorteImageDiv(index)">
                <!-- <div :key="eintrag.path" class="homininenmages"> -->
                <img :src="'./static/fundorte/' + eintrag.path" alt="">
                <p class="fundorte-sub" v-html="eintrag['sub-' + getLanguage]"> </p>   
              </div>

            </template>

        </div>


        <div class="grid-footer">

        </div>

      </div> 

      <forscher-overlay @closeOverlay="closeForscher" :isVisible="isForscherVisible" :absX="forscherX" :absY="forscherY" :forscher="forscher" ></forscher-overlay> 
      <!-- <transition name="slide" mode="out-in" appear>
        <router-view :idNr="idNr" :key="$route.path"/>
      </transition> -->
      
  </div>
</template>



<script>
import ClusterFundortMap from '../components/ClusterFundortMap.vue';
import ForscherOverlay from "../components/ForscherOverlay.vue";
import storeMixin from "../mixins/storeMixin.js";


export default {
  components: {
    ClusterFundortMap,
    ForscherOverlay
  },
  mixins: [storeMixin],
  props: {    
      idNr: {
              type: Number,
              default: 0,
      },
      content: {
              type: Object,
              default: () => {},
      },
      fundorte: {
              type: Array,
              default: () => [],
      },
  },
  data() {
    return {
        // content: "",
        fundortnr: "1",
        centerNr: "1",
        forscherX: 0,
        forscherY: 0,
        isForscherVisible: false,
        forscher: {
            "name": "Richard Erskine Frere Leakey",
            "von": "*19.12.1944 in Nairobi, Kenia",
            "sub": "(Kenianischer Anthropologe, Naturschützer und Politiker)&#10;",
            "copy": "Richard Leakey ist der zweite Sohn der Paläoanthropologen Louis und Mary Leakey. 1968 gründete er das Koobi Fora Base Camp, das sich mit der archäologischen Erforschung der 2.500 km² großen Fundregion beschäftigte. Richard Leakey fand am Turkana See unter anderem fossile Schädel von <i>Homo habilis</i> und <i>Homo erectus</i>. Von 1974 bis 1989 war er Direktor des Nationalmuseums von Kenia und leitete 1989–1995 und 1998–2004 den Kenya Wildlife Service. ",
            "image": "A7YDPK.jpg"
        },
    }
  },
  // filters: {
  //   markForscher(infilter){
  //     infilter = infilter.replace("<forscher>", "<mark class=\"forscher\" @click=\"showForscher\" >")
  //     infilter = infilter.replace("</bl-forscher>", "</mark>");
  //     return infilter;
  //   }
  // },
  // created() {
  //     this.$http.get('./static/fundorte.json').then(response => {
  //     console.log("!!!!! fundorte.json wurde in Fundort geladen! !!!!", this.idNr)
  //     this.content = response.body;
  //   }, response => {
  //     console.log(response);
  //     console.log("!!!!! fundorte.json wurde in Fundort nicht geladen! !!!!!")
  //     // this.endload = true;
  //   });
  // },
  mounted (){
     // setTimeout( () => this.scrollFix(this.$route.hash), 500);
     this.parseEvents();
  },
  updated (){
    console.log("uuuuuupdated");
    setTimeout(()=>{
          this.parseEvents()
    },600);

    // console.log("showForscher parseEvent fired")
  },
  watch:{
    '$route' (to, from){
      console.log("route changed")
        this.isForscherVisible = false;
      }
  },
  computed: {
    
    // isMainMenuOpen () {
    //     // console.log("getMainMenuOpen computed fensternr", this.idNr);
    //     const mainmenuString = this.$store.getters.getOpenWindowsMainMenu;
    //     // console.log("mainmenuString", mainmenuString);
    //     const mainmenuNr = mainmenuString.charAt(this.idNr-1);
        
    //     if (mainmenuNr == "0"){
    //         // console.log("mainmenuNr", mainmenuNr);
    //         // this.setOpen(false)
    //         return false
    //     } else {
    //         // console.log("mainmenuNr", mainmenuNr);
    //         // this.setOpen(true)
    //         // this.fillMenu();
    //         return true
    //     }
    // },
    getFundortNr(){
      console.log("getFundortNr", this.fundortnr )
      if ( (this.fundortnr == "2") || this.fundortnr == "1"){
        return this.fundortnr;
      } else {
        return "3";
      }
    },
    getCenterNr(){
      console.log("getCenterNr", this.fundortnr )
      if ( (this.fundortnr == "2") || this.fundortnr == "1"){
        this.changeCenterNr(); // dämlich, aber so gehts.
        return this.centerNr;
      } else {
        return this.centerNr;
      }
    },
  },
  methods:{
    parseEvents(){
      console.log("parseEvents");
      let pel = this.$el.getElementsByClassName("parseevent");
      // console.log(pel);
      let marks = pel[0].getElementsByTagName('mark');

      marks.forEach(el => {
          el.addEventListener('click', this.showForscher);
      })
      
    },
    closeForscher (value) {
            console.log("closeOverlay in parent", value);
            this.isForscherVisible = false;
    },
    markForscher(infilter){
      infilter = infilter.replaceAll("<forscher>", "<mark class=\"forscher\" @click=\"showForscher\" >")
      infilter = infilter.replaceAll("</forscher>", "</mark>");
      return infilter;
    },
    showForscher: function(event){
        console.log("showForscher", event)

        var el =document.getElementById('id' + this.idNr);
        console.log(el.getBoundingClientRect());
        var shiftY = el.getBoundingClientRect().y;
        var shiftX = el.getBoundingClientRect().x

        this.forscherX = event.layerX - shiftX;
        this.forscherY = event.layerY - shiftY; 
        var searchTerm = event.srcElement.innerHTML;
        console.log("searchTerm", searchTerm)

        for (var i=0; i <this.content['forscher-' + this.getLanguage].length; i++ ){
          console.log(this.content['forscher-' + this.getLanguage][i].searchterm.indexOf(searchTerm) );
          if (this.content['forscher-' + this.getLanguage][i].searchterm.indexOf(searchTerm) == 0) {
              this.forscher = this.content['forscher-' + this.getLanguage][i];
              this.isForscherVisible = true;
              console.log(this.forscher);
          }
        }
        // var that = this;
        // setTimeout(that.parseEvents, 1000);
        // var xxx = setTimeout (()=> {
        //   that.parseEvents();
        // }, 1000);
        // this.forscher = this.content['forscher-' + this.getLanguage][1]; // event.srcElement.innerHTML;
        },
    switchFundorteImageDiv (value){
      console.log(value);
      if ( value  == 0){
        console.log(value);
        return {
            marginRight: '0px',
            marginTop: '32px',
            marginBottom: '32px',
          };
      } else {
         return {
            marginRight: '0px',
            marginTop: '32px',
            marginBottom: '32px',
          };
      }
    },
    scrollFix: function(hashbang){
      console.log("scrollFix", hashbang);
      location.hash = hashbang;
    },
    changeCenterNr: function (){
      this.centerNr = this.fundortnr;
    },
  }
}
</script>




<style>
mark.forscher {
  background-color: rgba(255, 255, 255, 0.473);
}

mark.glossar {
    background-color: orange;
    /* color: red; */
}
</style>



<style lang="scss" scoped>

.map-relative {
  position: relative;
  height: 548px;
  width: 548px;
  margin-bottom: 32px;
}

.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 66px auto auto 32px; // 900px
  gap: 32px 32px;
  grid-template-areas:
    "grid-header grid-header grid-header grid-header"
    "grid-headline grid-headline grid-headline grid-headline"
    // "grid-text grid-text grid-text grid-text"
    "grid-links grid-links grid-rechts grid-rechts"
    "grid-footer grid-footer grid-footer grid-footer";
  background-color: #b5995c;
  padding-left: 32px;
  padding-right: 32px;
}

.grid-header { 
  grid-area: grid-header; 
}

.grid-headline { 
  grid-area: grid-headline; 
}


// .grid-text { grid-area: grid-text; }
// .grid-content { grid-area: grid-content; }
.grid-links { 
  grid-area: grid-links; 
  // background-color: red;
}
.grid-rechts { 
  grid-area: grid-rechts; 
  // background-color: blue;
}

.grid-footer { 
  grid-area: grid-footer;
}


.label {
  font-family: FontBoldItalic;
  font-size: 26px;
  line-height: 20px;
  margin-top: 0px;
  margin-bottom: 0px;
}

p {
  font-family: FontLight;
  font-size: 26px;
  line-height: 40px;
  margin-top: 4px;
  margin-bottom: 20px;
}

i {
    font-family: FontBoldItalic;
    font-style: italic;
    font-size: 50px;
    background-color: green;
}

f {
    font-family: FontBold;
    font-style: italic;
    font-size: 50px;
    background-color: green;
}

.kursiv {
  font-family: FontBold;
  color: orangered;
}

.fundortimage {
  background-color: rgba(0, 0, 0, 0.459);
}

.fundorte-sub {
  font-family: FontLight;
  text-align: center;
  align-content: center;
  margin-top: 10px;
  margin-bottom: 10px;
  line-height: 28px;
  // max-width: 254;
  color: $whitetypo;
  width: 548px;
  min-height: 64px;
}


h1 {
  font-family: FontBold;
  font-size: 40px;
  margin-top: 0px;
  color: $blacktypo;
}

h1 .label {
  font-family: FontBoldItalic;
}

// p {
//   font-family: FontLight;
//   font-size: 26px;
//   line-height: 40px;
//   margin-top: 20px;
// }

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