
<template>

  <div v-if="(( content!= '') && (isMainMenuOpen==false))">
      
      <div class="grid-container" :id="'homininen' + idNr">
      <!-- <div class="grid-container" id="homininen"> -->
        
        <div class="grid-header">
            <!-- <h3 class="grid-header-text"> {{ $route.params.id }} </h3> -->
            <h3 class="grid-header-text">   {{ $route.path }} #{{ $route.hash }}  </h3> 
            <div class="grid-header-line"></div>
        </div>
        

        <div class="grid-headline">
          <h1>
            {{ content["homininen-"+ getLanguage][parseInt($route.params.id)-1].name}}
          </h1>
        </div>

        <div class="grid-linksoben">
          <p class="label">  {{ content["label-"+ getLanguage][0]  }}</p> 
          <p v-html="content['homininen-'+ getLanguage][parseInt($route.params.id)-1].entdeckung"> 
            {{ content["homininen-"+ getLanguage][parseInt($route.params.id)-1].entdeckung }} 
          </p>
           
        </div>
        <div class="grid-rechtsoben">

        </div>


        <div class="grid-links">
          <p class="label">  {{ content["label-"+ getLanguage][1]  }}</p> 
          <p v-html="content['homininen-' + getLanguage][parseInt($route.params.id)-1].fundorte"> 
            {{ content["homininen-"+ getLanguage][parseInt($route.params.id)-1].fundorte }}
          </p>

          <p class="label">  {{ content["label-"+ getLanguage][2]  }}</p> 
          <p> 
            {{ content["homininen-"+ getLanguage][parseInt($route.params.id)-1].funde  }}
          </p>
          <p class="label">  {{ content["label-"+ getLanguage][3]  }}</p> 
          <p> 
            {{ content["homininen-"+ getLanguage][parseInt($route.params.id)-1].alter  }}
          </p>
          <p class="label">  {{ content["label-"+ getLanguage][4]  }}</p> 
          <p> 
            {{ content["homininen-"+ getLanguage][parseInt($route.params.id)-1].gehirnvolumen  }}
          </p>
           <p class="label">  {{ content["label-"+ getLanguage][5]  }}</p> 
          <p v-html="content['homininen-'+ getLanguage][parseInt($route.params.id)-1].merkmale"> 
            <!-- {{ content["homininen-"+ getLanguage][parseInt($route.params.id)-1].merkmale  }} -->
          </p>
          
        </div>
        
        
        <div class="grid-rechts">
            <div class="map-relative">
                <ClusterHomininenMap :idNr="idNr" :fundortnr="getFundortNr" :centernr="getCenterNr"></ClusterHomininenMap>
            </div>
            <!--  alle bilder hier reinpusten mit footer  -->
            <template v-for="(eintrag, index) in content['homininenimages'][parseInt($route.params.id)-1].rechts">

              <div :key="eintrag.path" class="homininenimage" :style="switchHomininenImageDiv(index)">
                <!-- <div :key="eintrag.path" class="homininenmages"> -->
                <img :src="'./static/homininen/' + eintrag.path" alt="">
                <p class="homininen-sub" v-html="eintrag['sub-' + getLanguage]"> </p>   
              </div>

            </template>
        </div>


        <div class="grid-footer">
          <div @mousedown="prevSubPage" class="footerleft">
              <p v-if="(parseInt($route.params.id)-1) > 0">&lt; {{ content["content-" +getLanguage].backhomininen }} </p>
          </div>
          <div @mousedown="toTop" class="footermiddle">
            <p> ⌃ </p> 
          </div>
          <div class="footerright">
            <p v-if="(parseInt($route.params.id)-1) < content['homininen-de'].length-1" @mousedown="nextSubPage">  {{ content["content-" +getLanguage].forwardhomininen }}  &gt;</p>
          </div>
        </div>

      </div> 

  </div>
</template>



<script>
import ClusterHomininenMap from '../components/ClusterHomininenMap.vue';
import storeMixin from "../mixins/storeMixin.js";


export default {
  name: 'Homininen',
  components: {
    ClusterHomininenMap
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
    router2toEnd(){
      // console.log("path", this.$route.path.replace("/6", "") );
      return this.$route.path.replace("/menu6", "");
    },

    getFundortNr(){
     // console.log("getFundortNr", this.fundortnr )
      if ( (this.fundortnr == "2") || this.fundortnr == "1"){
        return this.fundortnr;
      } else {
        return "3";
      }
    },
    getCenterNr(){
      // console.log("getCenterNr", this.fundortnr )
      if ( (this.fundortnr == "2") || this.fundortnr == "1"){
        this.changeCenterNr(); // dämlich, aber so gehts.
        return this.centerNr;
      } else {
        return this.centerNr;
      }
    },
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
      this.$router.push({ name: 'homininen', params: { id: this.$route.params.id }, hash: '#window-content-' + this.idNr }).catch(() => {});
      // location.hash = "-";
      setTimeout( () => location.hash = "#window-content-" + this.idNr, 100);
    },
    onSubpage(nr){
      // fundOrtNr
      console.log("onSubpage", nr);
      this.$router.push({ name: 'homininen', params: { id: nr }, hash: 'homininen' + this.idNr  }).catch(() => {});
      // this.$router.push({ name: 'homininen', params: { id: nr }, hash: 'homininen'  }).catch(() => {});
      location.hash = "-";
      setTimeout( () => location.hash = "#homininen" + this.idNr, 800);
      // console.log(this.$route);
    },
    switchHomininenImageDiv (value){
      console.log(value);
      if ( value  == 0){
        // console.log(value);
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
    clickHomininen: function (e){
      const hominidenNr =  e.target.attributes.name.nodeValue;
      // console.log("hominiden", hominidenNr);
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
  width: 548px;
  height: 400px;
}

.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 66px auto auto auto 64px;
  gap: 32px 32px;
  grid-template-areas:
    "grid-header grid-header grid-header grid-header"
    "grid-headline grid-headline grid-headline grid-headline"
    "grid-linksoben grid-linksoben grid-rechtsoben grid-rechtsoben"
    "grid-links grid-links grid-rechts grid-rechts"
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

.grid-headline { 
  grid-area: grid-headline; 
  // background-color: orange;
}
.grid-linksoben { 
  grid-area: grid-linksoben; 
  // background-color: magenta;
}
.grid-rechtsoben {
  width: 100%;
  grid-area: grid-rechtsoben; 
  // background-color: yellow;
}
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
  border-top: 1px solid rgba(0, 0, 0, 0.312);
  // border-top-width: thin
  display: flex;
}



h1 {
  font-family: FontBoldItalic;
  font-size: 40px;
  margin-top: 0px;
  color: $blacktypo;
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

.footerleft{
  width: 45%;
  // width: 400px;
  left: 0px;
}
.footerleft p {
 font-family: FontLight;
  font-size: 26px;
  // margin-top: 0px;
  margin-top: 0px !important;
}
.footermiddle{
   width: 10%;
   text-align: center;
}
.footermiddle p {
  font-family: FontRegular;
  font-size: 40px;
  margin-top: 16px;
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
  margin-top: 0px !important;
  margin-bottom: 20px;
  // margin-bottom: 20px;
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

.homininenimage {
  background-color: rgba(0, 0, 0, 0.459);
}

.homininen-sub {
  font-family: FontLight;
  text-align: center;
  align-content: center;
  margin-top: 10px;
  line-height: 28px;
  margin-left: 5px;
  // max-width: 254;
  color: $whitetypo;
  width: 540px;
  min-height: 64px;
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