<template>
  <div id="app">

    <VueFrameBg></VueFrameBg>
    <Titel class="titel1" msg="Titel"/>
    <Titel class="titel2" msg="Titel"/>
    <div class="titelline1"></div>
    <div class="titelline2"></div>
    
    <BgSkelett class="skelett"/>
    <BgSkelettRotated class="skelett-rotated"/>
    
    <IconMenu/>
      
      <WindowBase class="ohne-schatten" :startX="1200" :startY="1180" :startColor='"#EEEE00"'  id="id1" :idNr="1" :idName="'id1'" :startZ="201" > 
          <template slot-scope="{idNr, refresh}">
            <ContentWindow1 :idNr="idNr" :refresh="refresh" ></ContentWindow1 >
            <!-- <ContentWindow1 :active="isTimeout" :idNr="idNr"></ContentWindow1 > -->
           </template>
      </WindowBase>

      <WindowBase class="ohne-schatten" :startX="1800" :startY="1180" :startColor='"#330033"' id="id2" :idNr="2" :idName="'id2'" :startZ="202" > 
           <template slot-scope="{idNr}">
             <ContentWindow2 :idNr="idNr"></ContentWindow2>
             <!-- <ContentWindow2 :active="isTimeout" :idNr="idNr"></ContentWindow2> -->
           </template>
      </WindowBase>
      
      <WindowBase class="ohne-schatten" :startX="100" :startY="100" :startColor='"#00DDDD"' id="id3" :idNr="3" :idName="'id3'" :startZ="203">
          <template slot-scope="{idNr}">
            <ContentWindow3  :idNr="idNr"></ContentWindow3 >
            <!-- <ContentWindow3 :active="isTimeout" :idNr="idNr"></ContentWindow3 > -->
           </template>
      </WindowBase> 


       <WindowBaseImpressum class="ohne-schatten"  :startX="400" :startY="400" :startColor='"#00DDDD"' id="id10" :idNr="10" :idName="'id10'" :startZ="204">
          <template slot-scope="{idNr}"> <!-- -->
            <ContentWindowImpressum  :idNr="idNr"></ContentWindowImpressum >
           </template>
      </WindowBaseImpressum> 

      <!--
      <VueToolMultitouch class="schatten" :startX="200" :startY="600" :startColor='"#CCCCCC"'  id="id3" :idName="'id3'" :startZ="203"> 
        <my-child3 :active="isTimeout"></my-child3>
        <h2>Passing Text 3</h2>
      </VueToolMultitouch> 

      <VueToolMultitouch class="schatten" :startX="1200" :startY="100" :startColor='"#BBBBBB"'  id="id4" :idName="'id4'" :startZ="205"> 
        <my-child4 :active="isTimeout"></my-child4>
        <h2>Passing Text 4</h2>
      </VueToolMultitouch>  -->

    <AppSystemInformation/>

    <!-- <VueSplash :btnvisible='endload' :loadtext='loadtext' :headertext='headertext' /> -->
    <!-- <VueDragResize v-if="isDebug() == true" :isActive="false" :w="200" :h="150"  v-on:resizing="resize" v-on:dragging="resize">
      <div class="filler" style="background-color: rgb(255, 255, 0, 0.6);">
        <p class="info" >x: {{left}}  y: {{top}}</p>
        <p class="info" >width: {{width}} height: {{height}}</p>
      </div>

    </VueDragResize> -->

  </div>
</template>



<script>
/* eslint-disable vue/no-unused-components */
import Vue from 'vue';
import VueRouter from "vue-router";
Vue.use(VueRouter);

import VueResource from "vue-resource";
Vue.use(VueResource);


import VueFrameBg from './components/VueFrameBG.vue'
import Titel from './components/Titel.vue'
import BgSkelett from './components/Skelette.vue';
import BgSkelettRotated from './components/Skelette-rotated.vue';
import IconMenu from './components/IconMenu.vue';
import WindowBase from './components/WindowBase.vue'
import WindowBaseImpressum from './components/WindowBaseImpressum.vue'
// import SimpleMap from './components/ClusterMap.vue';


import ChildComp from './components/ChildComp.vue'
// import VueSplash from './components/VueSplash'
import AppSystemInformation from './components/SystemInformation'
// import VueDragResize from 'vue-drag-resize'

// der router kram
// import Home from './views/Home.vue'

// 1. Entstehung #EAE8E3
// 2. Alter #B5625C
// 3. Menschliche Körper #E8C35D
// 4. Stammbaum des Lebens #90B6B1
// 5. Stammbaum Homininen #95957E
// 6. Fundorte #b5995c
// 7. Quiz #D38760
import Menu0 from "./views/Menu0.vue";

import FossilisationView from "./views/Fossilisation.vue";
import AlterView from "./views/Alter.vue";
import KoerperView from "./views/KoerperMain.vue";
// subroute für koerper
import KoerperSchaedelView from "./views/KoerperSchaedel.vue";
import KoerperWirbelsaeuleView from "./views/KoerperWirbelsaeule.vue";
import KoerperKnieView from "./views/KoerperKnie.vue";
import KoerperHandView from "./views/KoerperHand.vue";
// subsubroute für koerper > hand
import KoerperHandPuzzleView from "./views/KoerperHandPuzzle.vue";
import KoerperHandZuordnungView from "./views/KoerperHandZuordnung.vue";

import StammbaumLebenView from "./views/StammbaumLeben.vue";
import StammbaumMenschenView from "./views/StammbaumMenschen.vue";
// subroute für stammbaum des menschen
import HomininenView from "./views/Homininen.vue";
import GattungView from "./views/Gattung.vue";

import FundorteView from "./views/Fundorte.vue";
//submenü für fundorte
import FundortView from "./views/Fundort.vue"; 
import QuizzView from "./views/Quizz.vue";

import ContentWindowImpressum from "./components/Impressum.vue"


const routes = [
  {
    path: "/",
    name: "Home",
    component: Menu0,
  },
  {
    path: "/menu0",
    name: "Menu0",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Menu0,
  },
  {
    path: "/menu1",
    name: "Menu1",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: FossilisationView,
  },
  {
    path: "/menu2",
    name: "Menu2",
    component: AlterView,
  },
  {
    path: "/menu3",
    name: "Menu3",
    component: KoerperView,
    children:[
              {path: "/menu3/schaedel", name:'schaedel', component: KoerperSchaedelView },
              {path: "/menu3/wirbelsaeule", name: 'wirbelsaeule', component: KoerperWirbelsaeuleView },
              {path: "/menu3/knie", name: 'knie', component: KoerperKnieView },
              {path: "/menu3/hand", name: 'hand', component: KoerperHandView,
                  children:[
                              {path: "/menu3/hand/puzzle1", name:'puzzle1', component: KoerperHandPuzzleView },
                              {path: "/menu3/hand/puzzle2", name: 'puzzle2', component: KoerperHandZuordnungView },
                          ] 
              }
            ]
  },
  {
    path: "/menu4",
    name: "Menu4",
    component: StammbaumLebenView,
  },
  {
    path: "/menu5",
    name: "Menu5",
    component: StammbaumMenschenView,
    children:[
              {path: "/menu5/homininen/:id", name:'homininen', component: HomininenView },
              {path: "/menu5/gattungen/:id", name: 'gattungen', component: GattungView ,
                children: [
                            {path: "/menu5/gattungen/homininen/:id", name:'gattunghomininen', component: HomininenView }
                          ]
              }
            ]
  },
  {
    path: "/menu6",
    name: "Menu6",
    component: FundorteView,
    children:[
      {path: "/menu6/fundorte/:id", name:'fundorte', component: FundortView },
    ]
  },
  {
    path: "/menu7",
    name: "Menu7",
    component: QuizzView,
  },
];


// scrollBehavior(to, from, savedPosition) {
//         // Default scroll position will be 0, 0 unless overridden by a saved position
//         const position = {
//           x: 0,
//           y: 0
//         };

//         // Override default with saved position (if it exists)
//         if (savedPosition) {
//           position.x = savedPosition.x;
//           position.y = savedPosition.y;
//         }

//         // Listen for scrollBeforeEnter event and set scroll position
//         return new Promise(resolve => {
//           this.app.$root.$once("scrollBeforeEnter", () => {
//             resolve(position);
//           });
//         });
//       }



function getChild() {
	return {
    extends: ChildComp,
    router: new VueRouter({
      mode: 'abstract',
      // base: process.env.BASE_URL,
      routes,
      scrollBehavior: (to, from, savedPosition) => {
          if (savedPosition) {
            return savedPosition;
          } else if (to.hash) {
            console.log("scrolltohash");
            return {
              selector: to.hash
            };
          } else {
            return { x: 0, y: 0 };
          }
      }
    })
  }
}

export default {
  name: 'app',
  components: {
    VueFrameBg,
    Titel,
    BgSkelett,
    BgSkelettRotated,
    IconMenu,
    WindowBase,
    WindowBaseImpressum,
    // SimpleMap,
    // VueToolMultitouch,
    AppSystemInformation,
    ContentWindow1: getChild(),
    ContentWindow2: getChild(),
    ContentWindow3: getChild(),
    ContentWindow4: getChild(),
    ContentWindowImpressum,
    // VueDragResize,
    // VueSplash
  },
  data() {
    return {
      width:0,
      height: 0,
      top: 0,
      left: 0,
      keyCode: 0,
      slideActive: true,
      images: ['http://127.0.0.1:8080/static/SHH_M4_Bild_1_1.jpg'],
      // errorLoads :[],
      // toLoads: [],
      // endload: false,
      // loadtext: "",
      // headertext: "LOADING!",
      // loaded: false,
      // timeouttime: 600,
    }
  },
  methods: {
    isDebug: function() {
      // console.log ("isDebug");
      return this.$store.getters.getDebugFlag;
    },
    // resize(newRect){
    //   this.width = newRect.width;
    //   this.height = newRect.height;
    //   this.top = newRect.top;
    //   this.left = newRect.left;
    // },
    handleGlobalKeyDown(e) {
      this.keyCode = e.keyCode
      console.log(e.keyCode)
    },
    // newTimeout: function (){
    //   // console.log("newTimeout");
    //   this.slideActive = !this.slideActive;
    //   //this.$emit('update:slideActive',  !this.slideActive);
    //   setTimeout(this.newTimeout, 5000);
    //   console.log(this.slideActive);
    // }
  },
  computed: {
    // isTimeout(){
    //   // console.log("isTimeout", this.$store.getters.getTimeoutFlag)
    //   return  this.$store.getters.getTimeoutFlag;
    // },
    // isNotTimeout(){
    //   // console.log("isNotTimeout", !this.$store.getters.getTimeoutFlag)
    //   return  !this.$store.getters.getTimeoutFlag;
    // },
  },
  // mounted() {
  //   console.log("mounted");
  //   var timerid
  //   var self = this;
  //   function refreshTimeout (event) {
  //     // console.log("refreshTimeout app")
  //     if (event.target.classList.contains('nostart')){
  //         console.log("kein Start der Anwendung bei Sprachwechsel");
  //         return
  //     }
  //     self.$store.dispatch('resetAppTimeout',false); 
  //     clearTimeout(timerid);
  //     timerid = setTimeout  (()=> {
  //       // console.log("timeout fired");
  //       self.$store.dispatch('setAppTimeout', true);
  //     }, self.timeouttime * 1000);
  //   }
  //   document.addEventListener('mouseDown', refreshTimeout);
  //   document.addEventListener('touchstart', refreshTimeout);
  // },
  // created() {
  //   window.addEventListener('keydown', (e) => {
  //     if(e.key =="d"){
  //       this.$store.dispatch('switchDebug'); 
  //     }
  //   });
  // }
}
</script>



<style lang="scss" scoped> 
#app {
  font-family: sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  // color: #2c3e50;
  background-color: red;
  // overflow: hidden; ?? verursacht den scroll des hintergrunds.
  position : fixed;
  top: 0px;
  width: 3840px;
  height: 2160px;
}
.window-content {
    position: relative;
    width: 1192px; 
    height: 800px;
}
.titel1 {
  position: absolute;
  top:90px;
  left:120px;
  transform: rotate(180deg);
  /* width: 3840px;
  height: 2160px; */
}

.titel2 {
  position: absolute;
  right:120px;
  bottom:90px;
  /* width: 3840px;
  height: 2160px; */
}
.titelline1 {
    position: absolute;
    background-color: $line;
    width: 3px;
    height: 400px;
    top: 0px;
    left: 1120px;
}
.titelline2 {
    position: absolute;
    background-color: $line;
    width: 3px;
    height: 400px;
    bottom: 0px;
    right: 1100px;
}
.skelett{
  position: absolute;
  overflow: hidden;
  top: 700px;
  left: 0px;
}

/* das skelett ist einmal rotiert */
.skelett-rotated{
  position: absolute;
  overflow: hidden;
  top: -200px;
  right: 0px;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

// wie könnte man das mit schatten und kombinierten svgs machen...
// https://stackoverflow.com/questions/6088409/svg-drop-shadow-using-css3/6094674#6094674
// https://stackoverflow.com/questions/50843676/css-irregular-shape-combined-with-shadow
.schatten {
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.36);
}

.ohne-schatten {
  -webkit-filter: drop-shadow(0px 0px 3px rgba(0, 0, 0, 0.36));
  filter: drop-shadow(0px 0px 3px rgba(0, 0, 0, 0.36));
}


@keyframes slide-out {
    0% {
        transform: translateY(0);
    }
    100% {
        transform: translateY(-30px);
    }
}
@keyframes slide-in {
    0% {
        transform: translateY(-30px);
    }
    100% {
        transform: translateY(0);
    }
}
</style>