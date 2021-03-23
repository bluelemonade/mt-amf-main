<template>
  <div v-if="content!=''">
   
      <div class="grid-container">  
        <div class="grid-header">
            <h3 class="grid-header-text">{{ content["shortheadline-" + getLanguage] }} </h3>
            <div class="grid-header-line"></div>
        </div>
        
        <div class="grid-headline">
          <h1> {{ content['headline-' + getLanguage]}} </h1>
          <!-- <p>  {{ content.copy[0][getLanguageID] }} </p> -->
          <!-- <p>
            {{ content.content.copy[1][getLanguageID] }} 
          </p> -->
        </div>
        <div class="grid-content">
           <!-- <img src="../assets/fossilisation/Fossilisation_1020x574_Frame_1.svg"> width="320" height="240" controls autoplay="false" autostart="false" :poster="'./static/sediment/poster.jpg' + ''"-->
            <div class="video-container">
            <video :id="'videoplayer' + idNr" @ended="onEnded"  @touchstart="onStartStop" @timeupdate="onTimeUpdate" >
                <!-- <source :src="'./static/sediment/fossi_v2.mp4#t=1' + ''" type="video/mp4" > -->
                <source :src="'./static/sediment/fossi_v3.mp4#t=0.25' + ''" type="video/mp4" >
            </video>
            <transition name="basefade" v-if="showPlayBtn==true" mode="out-in">
                <div class="btnPlay" @click="onVideoPlay" :key="showPlayBtn"><span>&gt;</span></div>
            </transition>
            </div>
             <transition name="basefade" mode="out-in">
               <div :key="videoStep">
                  <p class="center" v-html="content['steps-' + getLanguage][videoStep]" ></p>
               </div>
             </transition>
        </div>
        <div class="grid-text">
            <template v-for="(eintrag, index) in content['stepslong-' + getLanguage]">
                <p :key="index" v-html="eintrag"></p>
            </template>
        </div>
        <div class="grid-image">
          <img :src="'./static/sediment/1_Turkana boy  (Christine Hemm).jpg' + ''" alt="">
          <!-- static/sediment/1_Turkana%20boy%20%20(Christine%20Hemm).jpg -->
          <!-- <img :src="`${publicPath}/static/sediment/1_Turkana boy  (Christine Hemm).jpg`" alt=""> -->
        </div>
      </div>
      
  </div>
</template>



<script>
// import StammbaumLebenSpiel from '../components/StammbaumLebenSpiel.vue'
import storeMixin from "../mixins/storeMixin.js";
// import { gsap } from "gsap";
// import MorphSVGPlugin from "gsap/MorphSVGPlugin";


export default {
 components: {
    // StammbaumLebenSpiel,
 },
 mixins: [storeMixin],
 props: {    
        idNr: {
                type: Number,
                default: 0,
        },
 },
 data() {
   return {
      content: "",
      publicPath: process.env.BASE_URL,
      videoPlayer: "",
      videoSteps: [0, 15, 23, 30, 50, 60],
      videoStep: 6,
      showPlayBtn: true,
   }
 },
 created() {
        this.$http.get('./static/fossilisation.json').then(response => {
        // console.log("!!!!!  fossilisation wurde geladen! !!!!", this.idNr)
        this.content = response.body;
        console.log("fossilisation created", this.idNr);
        setTimeout( () => this.init(), 1000);
    }, response => {
        console.log(response);
        console.log("!!!!! fossilisation wurde nicht geladen! !!!!!")
        // this.endload = true;
    });
 },
 mounted(){
 },
  computed: {
  },
  methods: {
    init: function(){
      console.log("init videoplayer");
      this.videoPlayer = document.getElementById('videoplayer' + this.idNr);
      // console.log(this.videoPlayer);
      },
    onStartStop: function(){
      console.log("playbackRate", this.videoPlayer.playbackRate);
      if (this.videoPlayer.paused){
        console.log("play");
        this.videoPlayer.play();
      } else {
        console.log("pause");
        this.videoPlayer.pause();
        this.showPlayBtn = true;
      }
    },
    onTimeUpdate: function(){
        // console.log(this.videoPlayer.currentTime);
        for (var i = this.videoSteps.length -1 ; i >= 0; i--) {
        // for (var i = 0 ; i <= this.videoSteps.length -1  ; i++) {
          // console.log(i);
            if (this.videoPlayer.currentTime >  this.videoSteps[i]){
              this.videoStep = i;
              // console.log(this.videoStep);
              break;
            }
        }
    },
    onVideoPlay(){
      console.log("onVideoPlay");
       this.videoPlayer.play();
       this.showPlayBtn = false;
    },
    onEnded: function(){
        console.log("videoEnded");
        this.videoStep = 6;
        this.videoPlayer.currentTime = 0;
    }
  }
}
</script>


<style lang="scss" scoped>
.container {
  position: absolute;
  top: 0px;
  right: 0px;
  // height: auto;
}

.video-container {
  height: 628px;
}
video { // img 
  margin: 30px 40px 0px 40px;
  width:1020px;
  height: 574px;
  padding-bottom: 20px;
}

img {
  margin: 0px  !important;
  padding-top: 20px;
}
.center {
  font-family: FontBoldItalic;
  width: 1060px;
  font-size: 36px;
  color: #3b3b3b;
  text-align: center;
}

.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 66px auto auto auto 32px;
  gap: 32px 32px;
  grid-template-areas:
    "grid-header grid-header grid-header grid-header"
    "grid-headline grid-headline grid-headline grid-headline"
    "grid-content grid-content grid-content grid-content"
    "grid-text grid-text grid-text grid-image"
    "grid-footer grid-footer grid-footer grid-footer";
  background-color: #EAE8E3;
  padding-left: 32px;
  padding-right: 32px;
}

.grid-header { 
  grid-area: grid-header; 
}

.grid-headline { 
  grid-area: grid-headline; 
}

.grid-text { grid-area: grid-text; }
.grid-image { 
        grid-area: grid-image;
        // background-color: red;
}
.grid-content { grid-area: grid-content; }
.grid-footer { grid-area: grid-footer; }

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
  margin-right: 40px;
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
    background-color: rgb(66, 66, 66);
    opacity: $linealpha;
}

.dummy {
  position: absolute;
  top: 0px;
  left: 0px;
}

.basefade-enter-active,
.basefade-leave-active {
  transition: all 0.3s ease;
  opacity: 1.0;
}

.basefade-enter,
.basefade-leave-to
/* .fade-leave-active in <2.1.8 */
{
  opacity: 0;
  transition: all 0.5s ease;
}


.btnPlay {
    position: relative;
    margin-right: 0px;
    width:60px;
    height:60px;
    margin-left: 500px;
    margin-top: -300px;
    background-color: #00000088;
    border-radius: 10px;
}

span {
    margin-left:13px;
    font-family: FontBold;
    font-size: 60px;
    // line-height: 72px;
    color: $whitetypo;
    // margin-top:8px;
}

</style>