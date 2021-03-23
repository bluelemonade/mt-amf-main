
<template>
   <!--  && (isMainMenuOpen==false)  -->
  <!-- <transition name="fade" mode="out-in" appear> -->
  <div v-if="(( content!= '') && (isMainMenuOpen==false) )">
      
      <div class="grid-container">
        
          <div class="grid-header" :id="'koerper-main' + idNr">
              <h3 class="grid-header-text">{{ content["main-" + getLanguage].shortheadline }} </h3>
              <div class="grid-header-line"></div>
          </div>
          
          <div class="grid-text">
              <h1> {{ content["main-" + getLanguage].headline }} </h1>
              <p> {{ content["main-" + getLanguage].copy[0] }} </p>
              <p> {{ content["main-" + getLanguage].copy[1] }} </p>
          </div>
          
          <div class="grid-content">
              <svg version="1.1" class="svg-container" :ref="'koerper-menu-svg' + idNr" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                  viewBox="0 0 1128 780" xml:space="preserve">

                  <image xlink:href="../assets/koerper/koerper-vergleich-menu-plain.jpg" x="0"  y="0" height="780px" width="1128px" class="hg"></image>
                  <g>   
                    <text class="textbolditalic names" text-anchor="end" x="245" y="756"> {{ content["typen-" + getLanguage][0]  }} </text>
                    <text class="textbolditalic names" text-anchor="start" x="275" y="756"> {{ content["typen-" + getLanguage][1]  }} </text>
                    <text class="textbolditalic names" text-anchor="end" x="845" y="756"> {{ content["typen-" + getLanguage][2]  }} </text>
                    <text class="textbolditalic names" text-anchor="start" x="875" y="756"> {{ content["typen-" + getLanguage][3]  }} </text>
                  </g> 

                  <g> 
                    <text class="textbold items" text-anchor="middle" x="560" y="98">{{ content["koerperlabel-" + getLanguage][0]  }}</text>
                    <text class="text items" text-anchor="middle" x="560" y="137"> {{ content["koerperlabel-" + getLanguage][1]  }}</text>
                    <text class="text items" text-anchor="middle" x="560" y="176">{{ content["koerperlabel-" + getLanguage][2]  }}</text>
                    <text class="text items" text-anchor="middle" x="560" y="215">{{ content["koerperlabel-" + getLanguage][3]  }}</text>
                    <text class="text items" text-anchor="middle" x="560" y="254">{{ content["koerperlabel-" + getLanguage][4]  }}</text>
                    <text class="text items" text-anchor="middle" x="560" y="293">{{ content["koerperlabel-" + getLanguage][5]  }}</text>
                    <text class="textbold items" text-anchor="middle" x="560" y="332">{{ content["koerperlabel-" + getLanguage][6]  }}</text>
                    <text class="text items" text-anchor="middle" x="560" y="371">{{ content["koerperlabel-" + getLanguage][7]  }}</text>
                    <text class="text items" text-anchor="middle" x="560" y="410">{{ content["koerperlabel-" + getLanguage][8]  }}</text>
                    <text class="text items" text-anchor="middle" x="560" y="449">{{ content["koerperlabel-" + getLanguage][9]  }}</text>
                    <text class="textbold items" text-anchor="middle" x="560" y="488">{{ content["koerperlabel-" + getLanguage][10]  }}</text>
                    <text class="text items" text-anchor="middle" x="560" y="527">{{ content["koerperlabel-" + getLanguage][11]  }}</text>
                    <text class="textbold items" text-anchor="middle" x="560" y="566">{{ content["koerperlabel-" + getLanguage][12]  }}</text>
                    <text class="text items" text-anchor="middle" x="560" y="605">{{ content["koerperlabel-" + getLanguage][13]  }}</text>
                    <text class="text items" text-anchor="middle" x="560" y="644">{{ content["koerperlabel-" + getLanguage][14]  }}</text>
                    <text class="textbold items" text-anchor="middle" x="560" y="683">{{ content["koerperlabel-" + getLanguage][15]  }}</text>
                  </g> 

                  <rect @click="clickKoerper" name="1" id="click1" x="470" y="70" class="koerperrect"  width="170" height="40"/>
                  <rect @click="clickKoerper" name="2" id="click2" x="470" y="305" class="koerperrect" width="170" height="40"/>
                  <rect @click="clickKoerper" name="3" id="click3" x="470" y="350" class="koerperrect" width="170" height="40"/>
                  <rect @click="clickKoerper" name="4" id="click4" x="470" y="460" class="koerperrect" width="170" height="40"/>
                  <rect @click="clickKoerper" name="5" id="click5" x="470" y="540" class="koerperrect" width="170" height="40"/>
                  <rect @click="clickKoerper" name="6" id="click6" x="470" y="660" class="koerperrect" width="170" height="40"/>

              </svg>
            
          </div>
      </div> 

      
      <!-- :key="$route.path" -->
      <transition name="fade" mode="out-in" appear>
        <router-view :idNr="idNr" :content="content" :key="$route.path.split('/')[2]" />
      </transition>
  </div>


</template>



<script>
import storeMixin from "../mixins/storeMixin.js";
// import KoerperPuzzleZuordnung from "../components/KoerperPuzzleZuordnung.vue";
// import ClusterFundorteMap from '../components/ClusterFundorteMap.vue';


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
  },
  data() {
    return {
        content: "",
        fundortnr: "0",
    }
  },
  created() {
  },
  mounted(){

    this.$http.get('./static/koerper.json').then(response => {
      // console.log("!!!!!  koerper.json wurde in KoerperMain geladen! !!!!", this.idNr)
      this.content = response.body;

      // console.log(this.content);
      // console.log("KoerperMain", this.idNr);

      // console.log("this.$refs", this.$refs[0]);
      // var svg = this.$refs['koerpermenusvg' + this.idNr]; // + toString(this.idNr)

    }, response => {
      console.log(response);
      console.log("!!!!! koerper.json wurde in KoerperMain nicht geladen! !!!!!")
      // this.endload = true;
    });

      // var el =  this.$refs['koerper-menu-svg' + this.idNr];
      // console.log("koerper-menu-svg", el);
      
      // var names = this.$refs['koerper-menu-svg' + this.idNr].querySelectorAll(".names");
      // for (var i=0; i< names.length; i++){
      //   names[i].textContent = this.content.content["typen-"+ this.getLanguage()][i];
      // }
      // var items = this.$refs['koerper-menu-svg' + this.idNr].querySelectorAll(".items");
      // for (i=0; i< items.length; i++){
      //   items[i].textContent = this.content.content["koerperlabel-"+ this.getLanguage()][i];
      // }
  },
  computed: {
  },
  methods:{
    checkSVG(){
      var el =  this.$refs['koerper-menu-svg' + this.idNr];
      console.log("koerper-menu-svg", el);
      
      var typen = this.$refs['koerper-menu-svg' + this.idNr].querySelectorAll(".names");
      console.log("xxxxx", typen, typen.length);
      var lang = this.getLanguage;
      //  typen[0].textContent = "blöd";
      for (var i=0; i < typen.length; i++){
        console.log("xxx");
        typen[i].textContent = this.content["typen-"+ lang][i];
      }
     
      var items = this.$refs['koerper-menu-svg' + this.idNr].querySelectorAll(".items");
      console.log(items);
      for (i=0; i< items.length; i++){
        items[i].textContent = this.content["koerperlabel-"+ lang][i] ;
      }

    },
    clickKoerper: function (e){
      const koerperNr =  e.target.attributes.name.nodeValue;
      console.log("clickKoerper", koerperNr);
      if (koerperNr == "1"){
        console.log("koerper router 1");
        this.$router.push({ name: 'schaedel', hash: 'schaedel' + this.idNr  }).catch(() => {});  // 'koerper' + idNr"
        // this.$router.push({ name: 'schaedel', params: { id: koerperNr }, hash: 'schaedel' + this.idNr  }).catch(() => {});  // 'koerper' + idNr"
        location.hash = "-";
        setTimeout( () => location.hash = "#schaedel" + this.idNr, 600);
      } else  if (koerperNr == "2"){
        this.$router.push({ name: 'wirbelsaeule', hash: 'wirbelsaeule' + this.idNr  }).catch(() => {});  // 'koerper' + idNr"
        location.hash = "-";
        setTimeout( () => location.hash = "#wirbelsaeule" + this.idNr, 600);
       } else  if (koerperNr == "5"){
        this.$router.push({ name: 'knie', hash: 'knie' + this.idNr  }).catch(() => {});  // 'koerper' + idNr"
        location.hash = "-";
        setTimeout( () => location.hash = "#knie" + this.idNr, 600);
       } else  if ((koerperNr == "4") || (koerperNr == "6") ){
        this.$router.push({ name: 'hand', hash: 'hand' + this.idNr  }).catch(() => {});  // 'koerper' + idNr"
        location.hash = "-";
        setTimeout( () => location.hash = "#hand" + this.idNr, 600);
      }
      
      // location.hash = "-";
      // setTimeout( () => location.hash = "#koerper" + this.idNr, 500);
    },
  }
}
</script>



<style lang="scss" scoped>

.map-relative {
  position: relative;
  height: 800px;
}

.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 66px auto 812px;
  gap: 32px 32px;
  grid-template-areas:
    "grid-header grid-header grid-header grid-header"
    "grid-text grid-text grid-text grid-text"
    "grid-content grid-content grid-content grid-content";
  background-color: #E8C35D;
  padding-left: 32px;
  padding-right: 32px;
}

.grid-header { 
  grid-area: grid-header; 
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
.textbolditalic {
    font-family: FontRegularItalic;
    font-size: 14px;
    line-height: 20px;
    fill: $blacktypo;
    // text-transform: uppercase;
}
// svg styles
.koerperrect{
  fill:#ffffff00;
  // stroke:#da0e0e;
  // stroke-miterlimit:10;
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