
<template>

  <div v-if="(( content!= '') && (isMainMenuOpen==false))">
      
      <div class="grid-container" :id="'homininen' + idNr">
        
        <div class="grid-header">
            <h3 class="grid-header-text">  {{ $route.params.id }} </h3>
            <div class="grid-header-line"></div>
        </div>
        

        <div class="grid-text">
          <h1>
            {{ content.homininen[parseInt($route.params.id)-1]["Name-" + getLanguage] }}
          </h1>
        

        
          <p> 
            {{ content.homininen[parseInt($route.params.id)-1]["Entdeckung-" + getLanguage]  }}
          </p>
          <p> 
            {{ content.homininen[parseInt($route.params.id)-1]["Fundorte-" + getLanguage]  }}
          </p>
        
       


      
          <p> 
            {{ content.homininen[parseInt($route.params.id)-1]["Funde-" + getLanguage]  }}
          </p>
          <p> 
            {{ content.homininen[parseInt($route.params.id)-1]["Alter-" + getLanguage]  }}
          </p>
          <p> 
            {{ content.homininen[parseInt($route.params.id)-1]["Gehirnvolumen-" + getLanguage]  }}
          </p>
          <p> 
            {{ content.homininen[parseInt($route.params.id)-1]["Merkmale-" + getLanguage]  }}
          </p>
          
        </div>
        
        <div class="grid-content">
          <div class="map-relative">
              <ClusterHomininenMap :idNr="idNr" :fundortnr="getFundortNr" :centernr="getCenterNr"></ClusterHomininenMap>
          </div>
        </div>
      </div> 

  </div>
</template>



<script>
import ClusterHomininenMap from '../components/ClusterHomininenMap.vue';
import storeMixin from "../mixins/storeMixin.js";


export default {
  components: {
    ClusterHomininenMap
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
        content:"",
        homininen: "",
        homininennr: "1",
        // centerNr: "1"
        // idNr: 0,
    }
  },
  created() {
      this.$http.get('./static/homininen-map.json').then(response => {
      console.log("!!!!!  homininen-map wurde geladen! !!!!", this.idNr)
      this.homininen = response.body;

        // bischen search testen
        console.log(this.homininen.homininen.filter(function(item){
            return item.StammbaumNr == "17";
        }));

      }, response => {
        console.log(response);
        console.log("!!!!! homininen-map wurde nicht geladen! !!!!!")
        // this.endload = true;
      });

      this.$http.get('./static/stammbaum-homininen.json').then(response => {
      console.log("!!!!!  stammbaum-homininen wurde geladen! !!!!", this.idNr)
      this.content = response.body;
      }, response => {
        console.log(response);
        console.log("!!!!! stammbaum-homininen wurde nicht geladen! !!!!!")
        // this.endload = true;
      });

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
    getLanguageID () {
        console.log("getLanguageID");
        const languageString = this.$store.getters.getOpenWindowsLanguage;
        const languageNr = languageString.charAt(this.idNr-1);
        if (languageNr == "0"){
            return 0
        } else {
            return 1
        }
    },
  },
  methods:{
    clickHomininen: function (e){
      const hominidenNr =  e.target.attributes.name.nodeValue;
      console.log("hominiden", hominidenNr);
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