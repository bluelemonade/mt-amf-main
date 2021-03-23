<template>
  <div style="height: 400px" :ref="'' + idNr" >
    <!-- <h1>{{ msg }}</h1>
    <div class="info" style="height: 10%">
      <span>Center: {{ center }}</span>
      <span>Zoom: {{ zoom }}</span>
      <span>Bounds: {{ bounds }}</span>
    </div> -->
    <!-- <LMap :zoom="zoom" :center="center" :minZoom="minZoom" :maxZoom="maxZoom" :options="mapOptions" :zoomControl="false"   :bounceAtZoomLimits="true" -->
    <!-- <LMap :ref="'map' + idNr"  :zoom="zoom" :center="returnFundortCenter" :minZoom="minZoom" :maxZoom="maxZoom" :options="mapOptions" :maxBounds="maxBounds" zoomControl="false"  -->
    <LMap :ref="'map' + idNr" :tms="false" :zoom="zoom" :center="initialLocation" :minZoom="minZoom" :maxZoom="maxZoom" :options="mapOptions" :maxBounds="maxBounds" zoomControl="false" 
        @ready="mapReady"
        @moveend="mapMoveEnd" 
        @update:zoom="zoomUpdated"
        @update:center="centerUpdated"
        @update:bounds="boundsUpdated">
        <!-- <LIcondefault></LIcondefault> -->
        <LTileLayer :url="url" :tms="false" :option="tileOptions" ></LTileLayer>
        <!-- <LMarker :lat-lng="returnFundortPos" :icon="defaultIcon" @click="clickMarker()" ></LMarker> -->
        <!-- Create image icon (icon) from l-icon tag -->
        

        <v-marker-cluster :options="clusterOptions" @clusterclick="click" @ready="ready">
          <!-- <LMarker v-for="l in locations" :key="l.id" :lat-lng="l.latlng" :icon="icon" icon-url="./static/map-data/marker.svg"  @click="clusterMarkerClick"> -->
          <!-- <LMarker v-for="l in locations" :key="l.id" :lat-lng="l.latlng" @click="clusterMarkerClick"> -->
          <LMarker v-for="l in selection" :key="l.nr" :lat-lng="[l.lat, l.lon]" >
            <!-- <LPopup @popclick="popClick" :content="l.text"></LPopup> -->
            <LIcon
              :icon-size="dynamicSize"
              :icon-anchor="dynamicAnchor"
              icon-url="./static/map-data/marker-passiv.svg"
            />
          <LTooltip :content="l.Name" :options="tooltipOptions" @click="clusterMarkerClick"></LTooltip>
          </LMarker>
        </v-marker-cluster>


        <!-- <LMarker :lat-lng="returnFundortPos"  @click="clickMarker()" >
          <LIcon
            :icon-size="dynamicSize"
            :icon-anchor="dynamicAnchor"
            icon-url="./static/map-data/marker.svg"
          />
        </LMarker> -->

    </LMap>
  </div>
</template>

<script>
import L from 'leaflet';
import { LMap, LTileLayer, LMarker, LIcon, LTooltip } from "vue2-leaflet";
import { latLng, Icon, icon } from 'leaflet'
import Vue2LeafletMarkerCluster from 'vue2-leaflet-markercluster';

import iconUrl from 'leaflet/dist/images/marker-icon.png'
import shadowUrl from 'leaflet/dist/images/marker-shadow.png'

import storeMixin from "../mixins/storeMixin.js";

  // function rand(n) {
  //   let max = n +  8.0
  //   let min = n - 8.0
  //   return Math.random() * (max - min) + min;
  // }


export default {
  name: "Map",
  mixins: [storeMixin],
  props: {
    msg: String,
    idNr: Number,
    fundortnr: String,
    centernr: String
  },
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LIcon,
    // LPopup,
    LTooltip,
    'v-marker-cluster': Vue2LeafletMarkerCluster
  },
  data() {
      // let locations = []
      // for (let i = 0; i < 100; i++) {
      //   locations.push({
      //     id: i,
      //     latlng: latLng(rand(11.1), rand(40.58333333)),
      //     text: 'Punkt ' + i
      //   })
      // }
      // let customicon = icon(Object.assign({},
      //   Icon.Default.prototype.options,
      //   {iconUrl, shadowUrl}
      // ))
    return {
        // locations,
        // icon: customicon,
        clusterOptions: {
          showCoverageOnHover: false,
          spiderfyDistanceMultiplier: 2,
          zoomToBoundsOnClick: true
        },
        tooltipOptions: {
          permanent: true, 
          interactive: true,
          className: 'class-tooltip'
        },
        tileOptions: {
           minZoom: 0,
           maxZoom: 6,
           tms: false,
        },
        initialLocation: latLng(11.1, 40.58333333),
        mapOptions: { zoomControl: true, attributionControl: false, zoomSnap: true, dragging: true, doubleClickZoom: false, scrollWheelZoom: true},
      // url: "http://localhost:8080/static/map-data/NE2_LR_LC_SR_W_DR/{z}/{x}/{y}.png",
      url: "./static/map-data/NE2_LR_LC_SR_W_DR/{z}/{x}/{y}.png",
      // url: "https://{s}.tile.osm.org/{z}/{x}/{y}.png",
      zoom: 3,
      minZoom: 3,
      maxZoom: 6,
      center: [11.1, 40.58333333],
      // center: [13.1367826,77.5711133],
      tms: false,
      attribution: 'Background: <a href="http://www.shadedrelief.com/natural2/index.html"/>Natural Earth</a> by <a href="http://shadedrelief.com/"/>Tom Patterson</a>',
      bounds: null,
      maxBounds: L.latLngBounds(
        L.latLng(-50, -120), //southwest
        L.latLng(80, 250)
      ),
      // defaultIcon: L.icon({
      //   iconUrl: 'http://leafletjs.com/examples/custom-icons/leaf-green.png',
      //   shadowUrl: 'http://leafletjs.com/examples/custom-icons/leaf-shadow.png',
      //   iconSize:     [38, 95],
      //   shadowSize:   [50, 64],
      //   iconAnchor:   [22, 94],
      //   shadowAnchor: [4, 62],
      //   popupAnchor:  [-3, -76]
      // }),
      // defaultIcon: L.icon({
      //   iconUrl: './static/map-data/marker.svg',
      //   // shadowUrl: 'http://leafletjs.com/examples/custom-icons/leaf-shadow.png',
      //   iconSize:     this.dynamicSize(),
      //   // shadowSize:   [50, 64],
      //   iconAnchor:   this.dynamicAnchor(),
      //   // shadowAnchor: [4, 62],
      //   // popupAnchor:  [-3, -76]
      // }),
      defaultIcon: L.icon({
        iconUrl: './static/map-data/marker.svg',
        // shadowUrl: 'http://leafletjs.com/examples/custom-icons/leaf-shadow.png',
        iconSize:     [40, 40],
        // shadowSize:   [50, 64],
        iconAnchor:   [20, 20],
        // shadowAnchor: [4, 62],
        // popupAnchor:  [-3, -76]
      }),
      // redSymbol: { radius: 8,
      //   fillColor: "#b5625c",
      //   color: "#3d3d38",
      //   weight: 1.5,
      //   opacity: 1,
      //   fillOpacity: 1
      // },
      selection: "",
      homininen: [
        {
            "nr": 1,
            "de": "Hadar",
            "en": "Hadar",
            "long": 40.58333333,
            "lat": 11.1
        },
        {
            "nr": 2,
            "de": "xxx",
            "en": "xxx",
            "long": 30.58333333,
            "lat": 15.1
        },
        {
            "nr": 3,
            "de": "xxx",
            "en": "xxx",
            "long": 20.58333333,
            "lat": 32.1
        }
    ]
    }
  },
  created() {
      this.$http.get('./static/homininen-map.json').then(response => {
      // console.log("!!!!!  homininen-map wurde geladen! !!!!", this.idNr)
      this.homininen = response.body.homininen;
      // console.log("homininen-map", this.$route.params.id);

      this.selection  = this.find_in_object(this.homininen, {"StammbaumNr": this.$route.params.id} ); 
      // console.log(this.selection);
      // console.log(this.homininen.homininen.filter(function(item){
      //   return item.StammbaumNr == "17";
      // }));
    }, response => {
      console.log(response);
      console.log("!!!!! homininen-map wurde nicht geladen! !!!!!")
      // this.endload = true;
    });
  },
  mounted() {
  //   console.log(this.$refs['map' + this.idNr]);
  //   this.$refs['map' + this.idNr].fitBounds([40.712, -74.227],
  //   [40.774, -74.125]);

  },
  methods: {
    find_in_object(my_object, my_criteria){
      return my_object.filter(function(obj) {
        return Object.keys(my_criteria).every(function(c) {
          return obj[c] == my_criteria[c];
        });
      });
    },
    // click: (e) => console.log("clusterclick", e),
    click (e) {
      console.log("clusterclick", e)
    },
    ready: (e) => console.log('ready', e),
    // popClick (e){
    //   console.log("popClick", e);
    // },
    // toolClick (e){
    //   console.log("popClick", e);
    // },
    mapReady (e){
      console.log("mapReady", e)
    },
    clickMarker (){
      console.log("clickMarker", this.fundortnr);
    },
    clusterMarkerClick (e){
      console.log("clusterMarkerClick", e);
    },
    getIcon (){

      // return L.circleMarker([xx, yy], this.redSymbol)
    },
    zoomUpdated (zoom) {
      this.zoom = zoom;
    },
    centerUpdated (center) {
      this.center = center;
    },
    boundsUpdated (bounds) {
      this.bounds = bounds;
    },
    mapMoveEnd(){
      console.log("mapmoveEnd");
    }
    

    // returnCenterPos(){
    //   console.log("returnCenterPos");
    //   // return [11.1,40.58333333]
    //   //  [' + fundorte[parseInt(fundortnr) -1].long + ',' + fundorte[parseInt(fundortnr)-1].lat + ' ]
    //   if ( (this.fundortnr < parseInt("1")) ||  (this.fundortnr > parseInt("2") ) ) {
    //     console.log("returnCenterPos ups");
    //     return this.center
    //   }else {
    //     this.center = [ this.fundorte[parseInt(this.fundortnr) -1].lat, this.fundorte[parseInt(this.fundortnr)-1].long];
    //     console.log("returnCenterPos OK");
    //     return this.center;
    //   }
    // }
  },
  computed: {
    dynamicSize() {
      return [this.zoom *8 , this.zoom * 8];
    },
    dynamicAnchor() {
      return [this.zoom *8 / 2, this.zoom *8 / 2];
    },
    returnFundortPos(){
      // console.log("returnFundortPos");
      // if ( ( parseInt(this.fundortnr) >= 1)  &&  ( parseInt(this.fundortnr) <= 2) )  {
      //   this.center = [ this.fundorte[parseInt(this.fundortnr) -1].lat, this.fundorte[parseInt(this.fundortnr)-1].long];
      // }


      // return [11.1,40.58333333]
      //  [' + fundorte[parseInt(fundortnr) -1].long + ',' + fundorte[parseInt(fundortnr)-1].lat + ' ]
      return [ this.fundorte[parseInt(this.fundortnr) -1].lat, this.fundorte[parseInt(this.fundortnr)-1].long]
    },
     returnFundortCenter(){
      // console.log("returnFundortPos");
      // if ( ( parseInt(this.fundortnr) >= 1)  &&  ( parseInt(this.fundortnr) <= 2) )  {
        // this.center;
        return [ this.fundorte[parseInt(this.centernr) -1].lat, this.fundorte[parseInt(this.centernr)-1].long];
      // } else {
      //   return [ this.fundorte[0].lat, this.fundorte[0].long];
      // }
      // return this.center;
    },
    
  }
};
</script>

<style >
@import "~leaflet.markercluster/dist/MarkerCluster.css";
@import "~leaflet.markercluster/dist/MarkerCluster.Default.css";

.tooltip {
  background-color: orange;
  color: green;
}


/* tooltip-class*/
.class-tooltip {
  background: rgb(255, 255, 255);
  /* border: 2px solid rgb(114, 114, 114); */
  font-family: FontLight;
  font-size: 22px;
  line-height: 26px;
  margin-top: 10px;
}

/* .leaflet-tooltip.class-tooltip {
  background: green;
  border: 2px solid cyan
}

.leaflet-tooltip-left.class-tooltip::before {
  border-left-color: cyan;
}

.leaflet-tooltip-right.class-tooltip::before {
  border-right-color: cyan;
} */


</style>