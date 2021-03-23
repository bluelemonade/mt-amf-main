<template>
  <div id="app">
    <div class="window-content-back">
      
      <div class="window-content-scroll">
          
          <div class="window-content">
                <!-- <div class="map-container"> -->
                  <input v-model="fundortnr" placeholder="Gib 1 oder 2 ein!">
                  <p>Message is: {{ fundortnr }}</p>
                  <!-- <div class="test-div"> -->
                      <SimpleMap msg="Vue Map Component" reference="map1" :fundortnr="getFundortNr" :centernr="getCenterNr"/>
                  <!-- </div> -->
                <!-- </div> -->
          </div>
        
        </div>

      </div>
  
  </div>
</template>



<script>
import SimpleMap from './components/ClusterMap.vue'


export default {
  name: 'App',
  components: {
    SimpleMap
  },
  data() {
    return {
      fundortnr: "1",
      centerNr: "1"
    }
  },
  
  computed:{
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
    }
  },
  methods:{
    changeCenterNr: function (){
      this.centerNr = this.fundortnr;
    },
  }
}
</script>



<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.test-div {
  position: absolute;
  left: 200px;
  top: 200px;
  width: 1028px;
  height: 700px;
}


.window-content-back { /* runde ecken oben rechts aber eckig */
    position: absolute;
    border-radius: 20px 0px 20px 20px;
    top: 100px;
    left: 100px;
    width: 1240px;
    height: 960px;
    background-color: #123456;
}
.window-content-scroll {
    position: absolute;
    top: 24px;
    left: 24px;
    width: 1206px;
    max-height: 912px;
    /* min-height: 200px; */
    overflow-y: auto;
    
    overflow-x: hidden;
    background-color: #123456;
}


.window-content-scroll::-webkit-scrollbar-thumb {
    background: #ffffff63;
    opacity: 0.3;
    border-radius: 12px;
}
.window-content-scroll::-webkit-scrollbar-thumb:hover{
    background: #ffffff44;
    opacity: 0.3;
}
.window-content-scroll::-webkit-scrollbar-track{
    background: #ffffff44;
    opacity: 0.3;
    border-radius: 12px;
}
.window-content {
    position: relative;
    width: 1192px; 
    height: auto;
    
}

.map-container {
  position: relative;
  height: 800px;

}
</style>