<template>
   <!-- && (isMainMenuOpen==false) -->
  <div v-if="(( content!= '') && (isMainMenuOpen==false) )">
      
      <div class="grid-container">
        
        <div class="grid-header">
            <h3 class="grid-header-text">{{ content.content.shortheadline[getLanguageID] }} </h3>
            <div class="grid-header-line"></div>
        </div>
        
        <div class="grid-text">
          <h1>
            {{ content.content.headline[getLanguageID] }}
          </h1>
          <p>
            {{ content.content.copy[0][getLanguageID] }} </p>
          <!-- <p>
            {{ content.content.copy[1][getLanguageID] }}
             <input v-model="fundortnr" placeholder="Gib 1 oder 2 ein!"> 
          </p> -->
        </div>
        
        <div class="grid-content">
          <div class="map-relative">  
              <ClusterFundorteMap :idNr="idNr" :fundortnr="getFundortNr"  :centernr="getCenterNr" @openFundort="onOpenFundort"></ClusterFundorteMap>
          </div>
        </div>
        <div class="grid-footer">

        </div>
      </div> 

      <!-- :key="$route.path" -->
      <transition name="basefade" mode="out-in" appear>
         <!-- <router-view :idNr="idNr" :content="content" :fundorte="fundorte" :key="$route.path.split('/')[2]"/>      -->
         <router-view :idNr="idNr" :content="content" :fundorte="fundorte" :key="router2toEnd"/>     
      </transition>

  </div>
</template>



<script>
import ClusterFundorteMap from '../components/ClusterFundorteMap.vue';
import storeMixin from "../mixins/storeMixin.js";

export default {
  components: {
    ClusterFundorteMap
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
        fundorte: "",
        fundortnr: "0",
    }
  },
  created() {
      this.$http.get('./static/fundorte.json').then(response => {
       // console.log("!!!!!  fundorte.json wurde in Fundorte geladen! !!!!", this.idNr)
        this.content = response.body;
      }, response => {
        console.log(response);
        console.log("!!!!! fundorte.json wurde in Fundorte nicht geladen! !!!!!")
        // this.endload = true;
      });
      this.$http.get('./static/fundorte-map.json').then(response => {
        // console.log("!!!!!  fundorte-map wurde geladen! !!!!", this.idNr)
        this.fundorte = response.body.fundorte;
        // console.log(this.fundorte);
      }, response => {
        console.log(response);
        console.log("!!!!! fundorte-map wurde nicht geladen! !!!!!")
        // this.endload = true;
      });
  },
  computed: {
    router2toEnd(){
      console.log("path", this.$route.path.replace("/6", "") );
      return this.$route.path.replace("/menu6", "");
    },
    getFundortNr(){
      console.log("getFundortNr", this.fundortnr )
      // if ( (this.fundortnr == "2") || this.fundortnr == "1"){
        return this.fundortnr;
      // } else {
      //  return "3";
      // }
    },
    getCenterNr(){
      console.log("getCenterNr", this.fundortnr )
      // if ( (this.fundortnr == "2") || this.fundortnr == "1"){
         this.changeCenterNr(); // dämlich, aber so gehts.
         return this.centerNr;
      // } else {
      //  return this.centerNr;
      // }
    },
  },
  methods:{
    onOpenFundort(fundOrtNr){
      this.fundortnr = fundOrtNr
      console.log("onOpenFundort", fundOrtNr);
      this.$router.push({ name: 'fundorte', params: { id: fundOrtNr }, hash: 'fundorte' + this.idNr  }).catch(() => {});
      location.hash = "-";
      setTimeout( () => location.hash = "#fundorte" + this.idNr, 500);
      console.log(this.$route);
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
  height: 712px; // 
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
    "grid-content grid-content grid-content grid-content"
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
.grid-content { grid-area: grid-content; }
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
  transition-delay: 0.1s;
}

.basefade-enter,
.basefade-leave-to
/* .fade-leave-active in <2.1.8 */
{
  opacity: 0;
  transition-delay: 0.1s;
  position: absolute;
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