
<template>
   <!--  -->
  <div v-if="(( content!= '') && (isMainMenuOpen==false))">
      
      <div class="grid-container">
      
        <div class="grid-header">
            <h3 class="grid-header-text">{{ content["content-" + getLanguage ].shortheadline }} </h3>
            <div class="grid-header-line"></div>
        </div>
        
        <div class="grid-text">
          <h1>
            {{ content["content-" + getLanguage ].headline }}
          </h1>
          <p> {{ content["content-" + getLanguage ].copy[0] }} </p>
        </div>
        
        <div class="grid-content">
          <svg version="1.1" id="Ebene_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            viewBox="0 0 1128 710" style="enable-background:new 0 0 1128 710;" xml:space="preserve">
              
              <image style="overflow:visible;" width="1128" height="710" :xlink:href="require( `../assets/stammbaum/stammbaum-` + getLanguage + `-3.jpg`)" >
              <!-- <image style="overflow:visible;" width="1128" height="710" :xlink:href="'../assets/stammbaum/stammbaum-' + getLanguage + '-3.jpg'" > -->
              </image>
              <g class="clickGroup">
                <rect @click="clickHomininen" name="1" id="click1" x="67.8" y="565.6" class="hominrect" width="171.6" height="28.3"/>
                <rect @click="clickHomininen" name="2" id="click2" x="143.2" y="418.6" class="hominrect" width="171.6" height="78.1"/>
                <rect @click="clickHomininen" name="3" id="click3_1" x="196.2" y="230.1" class="hominrect" width="98.7" height="58.2"/>
                <rect @click="clickHomininen" name="4" id="click4" x="216.2" y="83.1" class="hominrect" width="121.2" height="49"/>
                <rect @click="clickHomininen" name="5" id="click5" x="371.4" y="67.7" class="hominrect" width="140.6" height="64"/>
                <rect @click="clickHomininen" name="6" id="click6" x="221.4" y="315.2" class="hominrect" width="281" height="39.8"/>
                <rect @click="clickHomininen" name="7" id="click7" x="314.8" y="387.4" class="hominrect" width="277.7" height="39.8"/>
                <rect @click="clickHomininen" name="8" id="click8" x="552.5" y="330.1" class="hominrect" width="118.9" height="50.8"/>
                <rect @click="clickHomininen" name="9" id="click9" x="339.6" y="247.1" class="hominrect" width="247.6" height="39.8"/>
                <rect @click="clickHomininen" name="19" id="click10" x="589.6" y="236.1" class="hominrect" width="113.4" height="39.8"/>
                <rect @click="clickHomininen" name="11" id="click11" x="419.6" y="214.8" class="hominrect" width="144.4" height="28.6"/>
                <rect @click="clickHomininen" name="12" id="click12" x="709.6" y="260.1" class="hominrect" width="70.2" height="31.7"/>
                <rect @click="clickHomininen" name="13" id="click13" x="585.3" y="293.7" class="hominrect" width="271.8" height="29.1"/>
                <rect @click="clickHomininen" name="14" id="click14" x="707.3" y="83.1" class="hominrect" width="198.4" height="28.3"/>
                <rect @click="clickHomininen" name="15" id="click15" x="695.3" y="157.7" class="hominrect" width="245.7" height="45.9"/>
                <rect @click="clickHomininen" name="16" id="click16" x="642.3" y="114.7" class="hominrect" width="243.1" height="39.8"/>
                <rect @click="clickHomininen" name="22" id="click22" x="749.3" y="329.7" class="hominrect" width="199.7" height="33.3"/>
                <rect @click="clickHomininen" name="26" id="click26" x="796.8" y="365.9" class="hominrect" width="199.7" height="30"/>
                <rect @click="clickHomininen" name="26" id="click26_1_" x="960.7" y="318.4" class="hominrect" width="82.9" height="62.5"/>
                <rect @click="clickHomininen" name="18" id="click18" x="611.9" y="388.5" class="hominrect" width="172.4" height="30"/>
                <rect @click="clickHomininen" name="18" id="click18_1_" x="674.8" y="329.7" class="hominrect" width="69.8" height="58.9"/>
                <rect @click="clickHomininen" name="17" id="click17" x="549.2" y="457.6" class="hominrect" width="168.9" height="26"/>
                <rect @click="clickHomininen" name="17" id="click17_1_" x="484.5" y="452.5" class="hominrect" width="75.8" height="62.9"/>
                <rect @click="clickHomininen" name="20" id="click20" x="404.5" y="428.5" class="hominrect" width="67.4" height="51.7"/>
                <rect @click="clickHomininen" name="20" id="click20_1_" x="694.5" y="427.5" class="hominrect" width="139.3" height="30"/>
                <rect @click="clickHomininen" name="27" id="click27" x="924.5" y="396.5" class="hominrect" width="179.3" height="40.8"/>
                <rect @click="clickHomininen" name="25" id="click25" x="847.5" y="441.5" class="hominrect" width="113.2" height="30"/>
                <rect @click="clickHomininen" name="21" id="click21" x="864.5" y="478.5" class="hominrect" width="172.4" height="18.1"/>
                <rect @click="clickHomininen" name="21" id="click21_1_" x="974.5" y="498.5" class="hominrect" width="60" height="67.1"/>
                <rect @click="clickHomininen" name="19" id="click19" x="704.5" y="550.5" class="hominrect" width="231.5" height="30"/>
                <rect @click="clickHomininen" name="19" id="click19_1_" x="567.5" y="532.5" class="hominrect" width="71" height="64.9"/>
                <rect @click="clickHomininen" name="24" id="click24" x="794.5" y="518.5" class="hominrect" width="172.4" height="30"/>
                <rect @click="clickHomininen" name="24" id="click24_1_" x="650.5" y="498.5" class="hominrect" width="55.1" height="58.3"/>
                <rect @click="clickHomininen" name="24" id="click24_2_" x="704.5" y="527.7" class="hominrect" width="90" height="14.2"/>
                <rect @click="clickHomininen" name="23" id="click23" x="775.8" y="497.1" class="hominrect" width="108.7" height="21.5"/>
                <rect @click="clickHomininen" name="23" id="click23_1_" x="719.8" y="467.1" class="hominrect" width="53.9" height="58.2"/>
                <!-- <rect @click="clickHomininen" name="a1" id="click-a1" x="583.9" y="420.6" class="hominrectfehlt" width="77.8" height="25.8"/> -->
                <!-- <rect @click="clickHomininen" name="a2" id="click-a2" x="423.9" y="289.6" class="hominrectfehlt" width="120.1" height="22"/> -->
                <!-- <rect @click="clickHomininen" name="13" id="click-a3" x="526.1" y="86.2" class="hominrectfehlt" width="107.6" height="38.4"/> -->
                <rect @click="clickHomininen" name="13" id="click13_1" x="788.3" y="263.5" class="hominrect" width="78.5" height="29.1"/>
                
                <rect @click="clickGattungen" name="1" id="gattung1" x="528.1" y="185.7" class="hominrect" width="119.8" height="27.8"/>
                <rect @click="clickGattungen" name="2" id="gattung2" x="701.4" y="52.7" class="hominrect" width="119.8" height="27.8"/>
                <rect @click="clickGattungen" name="3" id="gattung3" x="861.4" y="297.7" class="hominrect" width="99.3" height="27.8"/>

              </g>
          </svg>
        </div>
        <div class="grid-footer">

        </div>
      </div> 
      
      <transition name="fade" mode="out-in" appear>
        <router-view :idNr="idNr" :homininen="homininen" :content="content" :key="router2toEnd"/>  
        <!-- <router-view :idNr="idNr" :homininen="homininen" :content="content" :key="$route.path"/>   -->
         <!-- <router-view :idNr="idNr" :homininen="homininen" :content="content" :key="$route.path.split('/')[2]" />  müsste von 2 bis ende gehen ... -->
      </transition>

  </div>
</template>



<script>
// import ClusterMap from '../components/ClusterMap.vue';
// import Vue from 'vue';
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
        content:"",
        homininen: "",
        homininennr: "1",
        // centerNr: "1"
        // idNr: 0,
    }
  },
  created() {
      this.$http.get('./static/homininen-map.json').then(response => {
      // console.log("!!!!!  homininen-map wurde geladen! !!!!", this.idNr)
      this.homininen = response.body;
        // bischen search testen
        // console.log(this.homininen.homininen.filter(function(item){
        //     return item.StammbaumNr == "17";
        // }));

      }, response => {
        console.log(response);
        console.log("!!!!! homininen-map wurde nicht geladen! !!!!!")
        // this.endload = true;
      });

      this.$http.get('./static/stammbaum-homininen.json').then(response => {
      // console.log("!!!!!  stammbaum-homininen wurde geladen! !!!!", this.idNr)
      this.content = response.body;
      }, response => {
        console.log(response);
        console.log("!!!!! stammbaum-homininen wurde nicht geladen! !!!!!")
        // this.endload = true;
      });

  },
  computed: {
    router2toEnd(){
      // console.log("path", this.$route.path.replace("/menu5", "") );
      return this.$route.path.replace("/menu5", "");
    },
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
    
  },
  methods:{
    clickHomininen: function (e){
      const hominidenNr =  e.target.attributes.name.nodeValue;
      // console.log("homininen", hominidenNr);
      this.$router.push({ name: 'homininen', params: { id: hominidenNr }, hash: 'homininen' + this.idNr  }).catch(() => {});  // 'homininen' + idNr"
      location.hash = "-";
      setTimeout( () => location.hash = "#homininen" + this.idNr, 800);
    },
    clickGattungen: function (e){
      const gattungNr =  e.target.attributes.name.nodeValue;
      // console.log("gattungen", gattungNr);
      this.$router.push({ name: 'gattungen', params: { id: gattungNr } , hash: 'gattungen' + this.idNr}).catch(() => {});
      location.hash = "-";
      setTimeout( () => location.hash = "#gattungen" + this.idNr, 800);
    },
    changeCenterNr: function (){
      this.centerNr = this.fundortnr;
    },
  }
}
</script>



<style lang="scss" scoped>
.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 66px auto auto 32px; // 900px
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
  // stroke:#da0e0e;
  // stroke-miterlimit:10;
}
.hominrectfehlt{
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