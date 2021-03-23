// 1050 x 1700 Pixel  

<template>
    <div>
      
      <transition-group tag="div" class="img-slider" :name="getTransition"  mode="out-in" appear>
        <div v-for="number in [nr]" v-bind:key="number" >
          <img :src="imagelist[Math.abs(nr) % imagelist.length]"/>
        </div>
      </transition-group>

      <div class="skelett__gui" >
        <div  style="top: 10px; left: 0px; height: 70px">
          <img style="top: 10px;" src="@/assets/bg-skelett/bg-rechts-links.png" alt="">
        </div>
      </div>

      <transition-group tag="div" name="basefade"  mode="out-in" appear >
        <div v-for="number in [nr]" v-bind:key="number" class="txt-fader" @click="fadeDirection">
          <p class="bg-skelett-text"> {{ namen.de[Math.abs(nr) % namen.de.length] }} </p>
        </div>
      </transition-group>

    </div>
</template>



<script>
import { Timer } from "../util.js";
var t = new Timer();
// console.log(t.elapsed());

export default {
  data: function() {
      return {
        nr: 0,
        direction: 1,
        lastevent: 0,
        imagelist: [
                    require('@/assets/bg-skelett/skelett-1.png'),
                    require('@/assets/bg-skelett/skelett-2.png'),
                    require('@/assets/bg-skelett/skelett-3.png'),
                    require('@/assets/bg-skelett/skelett-4.png')
                    ],
        namen: { 
                de: ["Schimpanse","Ardipithecus","Australopithecus","moderner Mensch"],
                en: ["Chimpanzee", "Ardipithecus", "Australopithecus", "modern human"]
        }
      };
  },
  computed: {
    getImage(){
      return require('@/assets/bg-skelett/skelett-' + this.nr+ '.png');
    },
    getTransition(){
      if (this.direction == 1){
        return("slideright");
      } else {
        return ("slideleft");
      }
    }
  },
  methods: {
    nextSkelett(){
      //console.log("nextSkelett");
      this.nr < 3 ? this.nr++ : this.nr = 0;
    },
    fadeDirection (e) {
      // console.log("Skelette fadeDirection", t.elapsed());
      if ( (t.elapsed() - this.lastevent) < 1500 ) {
        console.log("skelett move blocked")
        return
      }
      // console.log(e.layerX);
      if (Math.abs(e.layerX) > 200){
        this.direction = 1;
        this.nr < 3 ? this.nr++ : this.nr = 0;
      } else {
        this.direction = -1;
        this.nr > 0 ? this.nr-- : this.nr = 3;
      }
      this.lastevent = t.elapsed();
      // console.log("nextSkelett");
      // this.nr < 3 ? this.nr++ : this.nr = 0;
    }
  }
}
</script>



<style lang="scss" scoped>
.slideright-leave-active,
.slideright-enter-active {
    transition: 1s;
    transition-delay: 1s;
}
.slideright-enter {
  transform: translate(-100px, 0);
  transition-delay: 1s;
  opacity: 0;
}
.slideright-leave-to {
  transform: translate(100px, 0);
  opacity: 0;
  transition-delay: 0s;
}

.slideleft-leave-active,
.slideleft-enter-active {
    transition: 1s;
    transition-delay: 1s;
}
.slideleft-enter {
  transform: translate(100px, 0);
  transition-delay: 1s;
  opacity: 0;
}
.slideleft-leave-to {
  transform: translate(-100px, 0);
  opacity: 0;
  transition-delay: 0s;
}

.img-slider{
  // overflow: hidden;
  // position: absolute;
  width: 1070px;
  height: 1700px;
  mix-blend-mode: multiply;
}

.img-slider img {  // img
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right:0;
  opacity: 0.6;
  // z-index: 3;
  // transform: translate3d(0, 0, 0);
  // transform: rotate(0);
  mix-blend-mode: multiply;
}

.txt-fader {
  overflow: hidden;
  position: absolute;
  top: 1320px;
  left: 60px;
  width: 400px;
  height: 70px;
  vertical-align: middle;
  text-align: center;
  // background-color: rgba(0, 0, 255, 0.4);
}

.skelett__gui {
  position: absolute;
  top: 1320px;
  left: 60px;
  width: 400px;
  height: 70px;
  background-color: $invisible;
  // vertical-align: middle;
  // text-align: center;
}


.background-skelett {
   width: 1050px;
   height: 1070px;
   opacity: 0.2;
   transform: translate3d(0, 10, 0);
   // transform: rotate(0);
   mix-blend-mode: multiply;
   
}

.bg-skelett-text {
  font-family: FontLight;
  margin-top: 23px;
  font-size: 24px;
  // font-kerning: 2.0;
  color: $whitetypo;
  text-transform: uppercase;
}

.basefade-enter-active, .basefade-leave-active {
    transition: opacity 0.5s;
    transition-delay: 0.0s;
}

   /* .fade-leave-active in <2.1.8 */
.basefade-enter, .basefade-leave-to {
    opacity: 0;
    transition-delay: 0.5s;
}

.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition-duration: 0.7s;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.55, 0, 0.1, 1);
  /* transform: translate(-100px, 0); */
  /* overflow: hidden; */
}

.slide-left-enter,
.slide-right-leave-active
 {
  position: absolute;
  opacity: 0;
  transform: translate(100px, 0);
  /* transform: translate(2em, 0); */
}

/* .slide-left-leave-active, */
.slide-right-enter {
  opacity: 0;
  transform: translate(-2em, 0);
}
</style>