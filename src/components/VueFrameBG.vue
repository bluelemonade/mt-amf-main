<template>
  <!-- Hintergrund über ein Klasse definiert, Verlauf oder PNGs -->
  <div class="radial1"></div>
  <!-- <div class="bgImage" v-if="isDebug() == true"></div> -->
</template>


<script>
export default {
  name: 'VueFrameBG',
  props: ['bgimage'],
  data () {
    return {
    }
  },
   methods: { // intern methoden
    isDebug: function() {
      // console.log ("isDebug");
      // return this.$store.getters.getDebugFlag;
      return true;
    }
   }
}
</script>


<style lang="scss" scoped>
.bgImage {
    background-image:url("../assets/dummies/timeout.png");
    position: absolute;
    top:0px;
    left:0px;
    width: 3840px;
    height: 2160px;
}

.farbe {
  background-color: #414B46;
  position: absolute;
    top:0px;
    left:0px;
    width: 3840px;
    height: 2160px;
}

/* radiale verläufe  */
.radial1 { 
  background-image: radial-gradient( $radialout 25%, $radialin 50%); 
  // background-image: radial-gradient(#414B46 25%, #414B46 50%); 
  position: absolute;
  top:0px;
  left:0px;
  width: 3840px;
  height: 2160px;
}
/* verläufe für den hintergrund  */
.verlauf1 {
  background-image: linear-gradient(to top, #0074bd 0%, #032d44 100%);
}

.verlauf2 {
background-image: linear-gradient(to top, #e6e9f0 0%, #eef1f5 100%);
}
.verlauf3 {
 background: linear-gradient(-180deg, #BCC5CE 0%, #929EAD 98%), radial-gradient(at top left, rgba(255,255,255,0.30) 0%, rgba(0,0,0,0.30) 100%);
 background-blend-mode: screen;
}
.verlauf4 {
background: linear-gradient(to bottom, #D5DEE7 0%, #E8EBF2 50%, #E2E7ED 100%), linear-gradient(to bottom, rgba(0,0,0,0.02) 50%, rgba(255,255,255,0.02) 61%, rgba(0,0,0,0.02) 73%), linear-gradient(33deg, rgba(255,255,255,0.20) 0%, rgba(0,0,0,0.20) 100%);
background-blend-mode: normal, color-burn;
}
.verlauf5 {
background-color: #dad6ce; 
  background-image: linear-gradient(to bottom, rgba(255,255,255,0.50) 0%, rgba(0,0,0,0.50) 100%), radial-gradient(at 50% 0%, rgba(255,255,255,0.10) 0%, rgba(0,0,0,0.50) 50%); 
  background-blend-mode: soft-light,screen;
}
</style>
