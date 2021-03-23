
<template>
   <!--  -->
  <div v-if="(( content!= '') && (isMainMenuOpen==false))">
      
      <div class="grid-container">
        
        <div class="grid-header" :id="'fundorte' + idNr">
            <h3 class="grid-header-text">  {{ $route.path }} {{ $route.params.id }} {{ $route.hash }}   </h3>
            <div class="grid-header-line"></div>
        </div>
        
        <!-- "Fundort", "Lage", "Alter", "Homininen","weitere Funde", "Forschungsgeschichte" -->
        <div class="grid-text">
           <h1>
            {{ content["fundortlabel-" + getLanguage] [0] }} <br>
            {{ content.fundorte[parseInt($route.params.id)-1]["Fundort-" + getLanguage] }}
          </h1>
          <p>
            {{ content["fundortlabel-" + getLanguage] [1] }} <br>
            {{ content.fundorte[parseInt($route.params.id)-1]["Lage-" + getLanguage]  }}
          </p>
          <p>
            {{ content["fundortlabel-" + getLanguage] [2] }} <br>
            {{ content.fundorte[parseInt($route.params.id)-1]["Alter-" + getLanguage]  }}
          </p>
          <p>
            {{ content["fundortlabel-" + getLanguage] [3] }} <br>
            {{ content.fundorte[parseInt($route.params.id)-1]["Homininen-" + getLanguage]  }}
          </p>
          <p> 
            {{ content["fundortlabel-" + getLanguage] [4] }} <br>
            {{ content.fundorte[parseInt($route.params.id)-1]["Funde-" + getLanguage]  }}
          </p>
          <p> 
            {{ content["fundortlabel-" + getLanguage] [5] }} <br>
            {{ content.fundorte[parseInt($route.params.id)-1]["Forschungsgeschichte-" + getLanguage]  }}
          </p>
        
        </div>
        
        <div class="grid-content">
          <!-- <div class="map-relative">
              <ClusterFundortMap :idNr="idNr" :fundortnr="getFundortNr" :centernr="getCenterNr"></ClusterFundortMap>
          </div> -->
        </div>
      </div> 

      <!-- <transition name="slide" mode="out-in" appear>
        <router-view :idNr="idNr" :key="$route.path"/>
      </transition> -->
      
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
  },
  data() {
    return {
        content: "",
        fundortnr: "1",
        centerNr: "1"
    }
  },
  created() {
      this.$http.get('./static/fundorte.json').then(response => {
      console.log("!!!!! fundorte.json wurde in Fundort geladen! !!!!", this.idNr)
      this.content = response.body;
    }, response => {
      console.log(response);
      console.log("!!!!! fundorte.json wurde in Fundort nicht geladen! !!!!!")
      // this.endload = true;
    });
  },
  mounted(){
    // setTimeout( () => this.scrollFix(this.$route.hash), 500);
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



<style lang="scss" scoped>

.map-relative {
  position: relative;
  height: 800px;
  // height: 80vh;
}

.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 66px auto 900px;
  gap: 32px 32px;
  grid-template-areas:
    "grid-header grid-header grid-header grid-header"
    "grid-text grid-text grid-text grid-text"
    "grid-content grid-content grid-content grid-content";
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
.grid-content { grid-area: grid-content; }

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