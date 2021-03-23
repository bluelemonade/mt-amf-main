

import Vue from 'vue'
import App from './App.vue'
// import App from "./App-single-window.vue";
import store from './store/global-store'
// import Stats from "stats-js";

// import VueResource from "vue-resource";
// Vue.use(VueResource);

Vue.config.productionTip = true


// import leaflet base
import 'leaflet/dist/leaflet.css';
import { Icon } from "leaflet";


delete Icon.Default.prototype._getIconUrl;

Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png")
});
// end leaflet base



import "./css/base.css";
import "./css/style.css";

// let stats = new Stats();
// console.log(stats.size);

// initStats();

new Vue({
  // router,
  store,
  render: h => h(App)
}).$mount('#app')



// stats //////////////////////////////////////////////////////////////
// function initStats() {
//   // console.log("initStats");
//   console.log("initStats debug", store.state.debug);
//   if (store.state.debug == true){
//     stats.setMode = 0
//     stats.dom.style.left = 0
//     stats.dom.style.right = 0
//     // stats.dom.style.width = "200px";
//     // stats.dom.style.height = "200px";
//     document.body.appendChild(stats.domElement)
//   }
// }

// function animateStats() {
//   stats.begin()
//   // monitored code goes here
//   stats.end()
//   requestAnimationFrame(animateStats)
// }

// requestAnimationFrame(animateStats)
// stats end ////////////////////////////////////////////////////////////