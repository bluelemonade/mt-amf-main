<template>
  <div id="app">

    <VueFrameBg></VueFrameBg>
      
      <WindowBase class="ohne-schatten" :startX="150" :startY="100" :startColor='"#EEEE00"'  id="id1" :idNr="1" :idName="'id1'" :startZ="201" > 
          <template slot-scope="{idNr, refresh}">
            <ContentWindow1 :idNr="idNr" :refresh="refresh" ></ContentWindow1 >
            <!-- <ContentWindow1 :active="isTimeout" :idNr="idNr"></ContentWindow1 > -->
           </template>
      </WindowBase>

      <WindowBaseImpressum class="ohne-schatten" :startX="400" :startY="400" :startColor='"#00DDDD"' id="id10" :idNr="10" :idName="'id10'" :startZ="204">
          <template slot-scope="{idNr}">
            <ContentWindowImpressum  :idNr="idNr"></ContentWindowImpressum >
            <!-- <ContentWindow3 :active="isTimeout" :idNr="idNr"></ContentWindow3 > -->
           </template>
      </WindowBaseImpressum> 

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
// import Titel from './components/Titel.vue'
// import BgSkelett from './components/Skelette.vue';
// import IconMenu from './components/IconMenu.vue';
import WindowBase from './components/WindowBase.vue'
import WindowBaseImpressum from './components/WindowBaseImpressum.vue'
// import SimpleMap from './components/ClusterMap.vue';


import ChildComp from './components/ChildComp.vue'
// import VueSplash from './components/VueSplash'
// import AppSystemInformation from './components/SystemInformation'
// import VueDragResize from 'vue-drag-resize'

// der router kram
// import Home from './views/Home.vue'

// 1. Entstehung
// 2. Alter
// 3. Menschliche Körper
// 4. Stammbaum des Lebens
// 5. Stammbaum Homininen
// 6. Fundorte 
// 7. Quiz
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

import QuizzView from "./views/Quizz.vue";

//submenü für fundorte
import FundortView from "./views/Fundort.vue"; 

import ContentWindowImpressum from "./components/Impressum.vue"
// const About = () => import('./components/HelloWorld.vue')
// const routes = [
//   {
//     path: '/',
//     name: "home",
//     component: { template: '<p>home</p>' } 
//   }, 
//   {
//     path: '/page1',
//     name: "page2",
//     component: About 
//   }, 
//   {
//     path: '/page2',
//     name: "page1",
//     component: { template: '<p>Page 2</p>' }
//   }, 
//   {
//     path: '/page3',
//     name: "page3",
//     component: { template: '<p>Page 3</p>' }
//   }
// ]

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
    // Titel,
    // BgSkelett,
    // IconMenu,
    WindowBase,
    WindowBaseImpressum,
    // SimpleMap,
    // VueToolMultitouch,
    // AppSystemInformation,
    ContentWindow1: getChild(),
    ContentWindowImpressum,
    // ContentWindow2: getChild(),
    // ContentWindow3: getChild(),
    // MyChild4: getChild(),
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
      timeouttime: 600,
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
    isTimeout(){
      // console.log("isTimeout", this.$store.getters.getTimeoutFlag)
      return  this.$store.getters.getTimeoutFlag;
    },
    isNotTimeout(){
      // console.log("isNotTimeout", !this.$store.getters.getTimeoutFlag)
      return  !this.$store.getters.getTimeoutFlag;
    },
    appLanguage() {
      // console.log("computed appLanguage");
      // console.log(this.$store.getters.getAppLanguage);
      return this.$store.getters.getAppLanguage;
    }
  },
  mounted() {
    // console.log("app mounted");
    setTimeout( () => (this.$store.commit('setActiveWindowM', "1") ), 2000 );
    setTimeout( () => (this.$store.commit('setImpressumCanNotOpenM') ), 3000 );

  },
  created() {
    // console.log("app created");
  }
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
  overflow: hidden;
  top: 0px;
  width: 1920px;
  height: 1080px;
}

.window-content {
    position: relative;
    width: 1192px; 
    height: 800px;
    
}

.map-container {
position: absolute;
height:800px;
width: 1024px;

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
  // box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.36);
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