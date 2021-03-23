<template>
  <div style="height: 548px" :ref="'' + reference">
       <LMap :ref="'map' + reference" :tms="false" :zoom="zoom" :center="initialLocation" :minZoom="minZoom" :maxZoom="maxZoom" :options="mapOptions" :maxBounds="maxBounds" zoomControl="false" 
        @ready="mapReady"
        @moveend="mapMoveEnd" 
        @update:zoom="zoomUpdated"
        @update:center="centerUpdated"
        @update:bounds="boundsUpdated">
        <LTileLayer :url="url" :tms="false" :option="tileOptions" ></LTileLayer>
        
        <v-marker-cluster :options="clusterOptions" @clusterclick="click" @ready="ready">
         <LMarker v-for="l in selection" :key="l.nr" :lat-lng="[l.lat, l.lon]" >
            <LIcon
              :icon-size="dynamicSize"
              :icon-anchor="dynamicAnchor"
              icon-url="./static/map-data/marker-passiv.svg"
            />
          <LTooltip :content="l.de" :options="tooltipOptions" @click="clusterMarkerClick"></LTooltip>
          </LMarker>
        </v-marker-cluster>

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


export default {
  name: "Map",
  props: {
    msg: String,
    reference: String,
  },
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LIcon,
    LTooltip,
    'v-marker-cluster': Vue2LeafletMarkerCluster
  },
  data() {
      let customicon = icon(Object.assign({},
        Icon.Default.prototype.options,
        {iconUrl, shadowUrl}
      ))
    return {
      
        icon: customicon,
        clusterOptions: {
          showCoverageOnHover: false,
          spiderfyDistanceMultiplier: 2,
          zoomToBoundsOnClick: true
        },
        tooltipOptions: {
          permanent: true, 
          interactive: true
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
      
      defaultIcon: L.icon({
        iconUrl: './static/map-data/marker.svg',
        // shadowUrl: 'http://leafletjs.com/examples/custom-icons/leaf-shadow.png',
        iconSize:     [40, 40],
        // shadowSize:   [50, 64],
        iconAnchor:   [20, 20],
        // shadowAnchor: [4, 62],
        // popupAnchor:  [-3, -76]
      }),
      
      selection: "",
    }
  },
  created() {
      this.$http.get('./static/fundorte-map.json').then(response => {
      console.log("!!!!!  fundorte-map wurde geladen! !!!!", this.idNr)
      this.fundorte = response.body.fundorte;
      console.log("fundorte-map", this.$route.params.id);

      this.selection  = this.find_in_object(this.fundorte, {"nr": this.$route.params.id} ); 
      console.log(this.selection);
    }, response => {
      console.log(response);
      console.log("!!!!! homininen-map wurde nicht geladen! !!!!!")
      // this.endload = true;
    });
  },
  mounted() {
  //   console.log(this.$refs['map' + this.reference]);
  //   this.$refs['map' + this.reference].fitBounds([40.712, -74.227],
  //   [40.774, -74.125]);
    console.log(this);
  },
   watch:{
    '$route' (to, from){
        console.log("route changed map")
        if (this.selection != ""){
            this.selection  = this.find_in_object(this.fundorte, {"nr": this.$route.params.id} ); 
            console.log(this.selection);
        }
        
      }
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
  },
  computed: {
    dynamicSize() {
      return [this.zoom *8 , this.zoom * 8];
    },
    dynamicAnchor() {
      return [this.zoom *8 / 2, this.zoom *8 / 2];
    },
    // returnFundortPos(){
    //   // console.log("returnFundortPos");
    //   // if ( ( parseInt(this.fundortnr) >= 1)  &&  ( parseInt(this.fundortnr) <= 2) )  {
    //   //   this.center = [ this.fundorte[parseInt(this.fundortnr) -1].lat, this.fundorte[parseInt(this.fundortnr)-1].long];
    //   // }


    //   // return [11.1,40.58333333]
    //   //  [' + fundorte[parseInt(fundortnr) -1].long + ',' + fundorte[parseInt(fundortnr)-1].lat + ' ]
    //   return [ this.fundorte[parseInt(this.fundortnr) -1].lat, this.fundorte[parseInt(this.fundortnr)-1].long]
    // },
    //  returnFundortCenter(){
    //   // console.log("returnFundortPos");
    //   // if ( ( parseInt(this.fundortnr) >= 1)  &&  ( parseInt(this.fundortnr) <= 2) )  {
    //     // this.center;
    //     return [ this.fundorte[parseInt(this.centernr) -1].lat, this.fundorte[parseInt(this.centernr)-1].long];
    //   // } else {
    //   //   return [ this.fundorte[0].lat, this.fundorte[0].long];
    //   // }
    //   // return this.center;

      
    // },
    
  }
};
</script>

<style  scoped>
@import "~leaflet.markercluster/dist/MarkerCluster.css";
@import "~leaflet.markercluster/dist/MarkerCluster.Default.css";

</style>