// https://orlandster.github.io/vue-page-transition/#/
// auch nettes quizz https://codepen.io/mobihack-official/pen/EJpRXQ
<template>

  <div v-if="( ( quiz != '' ) && ( isMainMenuOpen==false ))" :id="'quizz' + idNr" :ref="'quizz' + idNr" style="height:912px">
    <!-- height hack, keinen ahnung woher das kommt, der content wird höer angezeigt als er ist. -->

    <img src="../assets/quiz/quiz_startseite_bg.png">

    <div class="quiz-overlay">

    <div class="grid-container">
        
        <div class="grid-header" :id="'quizheader' + idNr">
            <h3 class="grid-header-text">  {{quiz.shortheadline[getLanguageID] }}  </h3>
            <div class="grid-header-line"></div>
        </div>
        
        <div class="grid-counter">
          <!-- <transition name="fade"> -->
            <p class ="counter" v-if="gameState=='game'">
               {{ quiz.frage[getLanguageID] +  " " + questionIndex + " / " + maxQuestions }}
            </p> 
          <!-- </transition> -->
         
        </div>

        <div class="grid-content">

            <!-- startscreen -->
           <transition name="basefade" mode="out-in" appear>
                <div v-if="gameState=='start'" class="start">
                
                    <p class="counter" >
                      {{  quiz["titel-" + getLanguage][0] }}
                    </p>
                    
                    <p class="titel" v-html="quiz['titel-' + getLanguage][1]"></p>
                    
                    <div class="button-start">
                        <p class="button" @click="onStart">
                            {{  quiz["starten-" + getLanguage]  }}
                        </p>
                    </div>

                </div>
           </transition>


           <!-- quizscreen           -->
           <transition name="basefade" mode="out-in" appear>
            <div v-if="gameState=='game'">
              
              <div  v-for="(question, index) in quiz['questions-' + getLanguage]" v-bind:key="index">
              <!-- Hide all questions, show only the one with index === to current question index -->
              <!-- <transition name="fade" mode="out-in" appear> -->
              <transition name="basefade" mode="out-in" appear>
                  <div v-show="index === questionIndex-1">
                    
                    <div class="frage">
                        <p class="frage"> {{  question.text }}  </p>
                    </div>
                    
                    <div class="fragen-container">
                    
                          <ol v-for="(response, index) in question.responses" v-bind:key="index">
                            <li :class="'frage' + (index + 1)">
                              
                                <div class="abc" :style="styleSwitchABC(index)">
                                <!-- <div class="abc" :style="'transition: all 0.3s ease, background-color: '" + switchABC(index) > -->
                                  <p class="abc" @click="onAntwort(index)" > {{ ["A","B","C"][index] }} </p>
                                </div>
                                
                                <div class="antwort">
                                  <p class="antwort" v-html="response.text" :style="styleSwitchABCText(index)"></p>
                                  <transition name="fadetext" mode="in-out" appear>
                                    <p class="explain" v-html="response.explain" :style="styleSwitchABCText(index)" v-show="weiterOK==true&& index==showIndex"></p>
                                  </transition>
                              </div>

                            </li>
                        </ol>
                    
                  </div>
                  </div>
              </transition>
              </div>

            </div> 
          </transition>


          <!-- endscreen           -->
          <transition name="basefadedelay" mode="out-in" appear>
            <div v-if="gameState=='end'">
              
              <p class="counter">
                {{  richtig + " / 15 " + quiz["richtig"][getLanguageID]  }}
              </p>

              <p class="frage">
                {{  getBewertung  }}
              </p>

            </div> 
          </transition>

        </div>


        <div class="grid-footer">
          <!-- <div class="map-relative">
              <ClusterFundortMap :idNr="idNr" :fundortnr="getFundortNr" :centernr="getCenterNr"></ClusterFundortMap>
          </div> -->
          <transition name="basefade" mode="out-in" appear>
              <div class="button" v-show="weiterOK==true">
                  <p class="button" @click="onWeiter"> Weiter </p>   
              </div>
          </transition>
        </div>

      </div>   

    </div>

  </div>

</template>


<script>
import storeMixin from "../mixins/storeMixin.js";


export default {
  mixins: [storeMixin],
  props: {    
      idNr:  {
              type: Number,
              default: 0,
      },
  },
  data: function () {
    return {
      quiz: "",
      weiterOK: false,
      gameState: 'start', // start, game, end
      questionIndex: 0, // Store current question index
      // An array initialized with "false" values for each question
      // It means: "did the user answered correctly to the question n?" "no".
      maxQuestions: 15,
      // userResponses: "",
      richtig: 0,
      showIndex: -1,
    }
  },
  beforeDestroy(){
    this.$store.commit('setScrollableContentM', [this.idNr, 1]); 
  },
  created() {
      this.$store.commit('setScrollableContentM', [this.idNr, 0]); 
      this.$http.get('./static/quiz.json').then(response => {
      // console.log("!!!!!  quiz.json wurde in Quizz geladen! !!!!", this.idNr)
      this.quiz = response.body;
      // console.log(this.quiz);
      // this.userResponses = Array(this.quiz["questions-" + this.getLanguage].length).fill(false)
      // console.log(this.userResponses);
    }, response => {
      console.log(response);
      console.log("!!!!! quiz.json wurde in Quizz nicht geladen! !!!!!")
      // this.endload = true;
    });
  },
  computed: {
    // styleSwitchABC (index) {
    //   console.log("styleSwitchABC", index);
    //   if ( ( this.weiterOK == true) && ( (this.quiz["questions-" + this.getLanguage][this.questionIndex-1].responses[index].correct == true) ) ) {
    //     return {
    //       transition: "all 0.3s ease",
    //       backgroundColor: "#FFFFFF"
    //     }   
    //   } else {
    //     return {
    //       transition: "all 0.3s ease",
    //       backgroundColor: "#D38760",
    //     }
    //   }
    // }, 
    // getBackGroundImage(){
    //   if (this.gameState=="game"){
    //     return  this.imagelist[1];
    //   }else{
    //     return  this.imagelist[0];
    //   }
    // },
    getBewertung (){
      // return "hallo";
      if (this.quiz["aufloesung-" + this.getLanguage][0].richtig.indexOf(this.richtig) != -1 ) {
          return this.quiz["aufloesung-" + this.getLanguage][0].text;
      } else if (this.quiz["aufloesung-" + this.getLanguage][1].richtig.indexOf(this.richtig) != -1) {
          return this.quiz["aufloesung-" + this.getLanguage][1].text;
      } else if (this.quiz["aufloesung-" + this.getLanguage][2].richtig.indexOf(this.richtig) != -1) {
          return this.quiz["aufloesung-" + this.getLanguage][2].text;
      } else if (this.quiz["aufloesung-" + this.getLanguage][3].richtig.indexOf(this.richtig) != -1 ) {
          return this.quiz["aufloesung-" + this.getLanguage][3].text;
      } else {
        return "gibts nicht";
      }
    },
  },
  // The view will trigger these methods on click
  methods: {
    styleSwitchABC (index) {
      // console.log("styleSwitchABC", index);
      if ( ( this.weiterOK == true) && ( (index == this.showIndex) ) ) {
        return {
          transition: "all 0.4s ease",
          backgroundColor: "#FFFFFF"
        }   
      } else {
        return {
          transition: "all 0.4s ease",
          backgroundColor: "#D38760",
        }
      }
    }, 
    styleSwitchABCText (index) {
      // console.log("switchAntwortTextColor");
      if ( ( this.weiterOK == true) && ( (index == this.showIndex) ) ) {
        return {
          transition: "all 0.4s ease",
          color: "#FFFFFF",
          opacity: 1.0,
        }   
      } else {
        return {
          transition: "all 0.4s ease",
          color: "#6C2823",
          opacity: 1.0,
        }
      }
    },
    onStart: function(){
      this.weiterOK = false;
      this.gameState = "game";
      this.questionIndex = 1;
    },
    onWeiter: function (){
      if (this.questionIndex < this.maxQuestions){
        this.weiterOK = false;
        this.showIndex = -1;
        this.gameState = "game";
        this.questionIndex++;
      } else {
        this.weiterOK = false;
        this.gameState = "end";
        this.showIndex = -1;
      }
    },
    onAntwort: function(index){
      console.log(index);
      if (this.weiterOK==true){
        return;
      }
      // ist die frage Richtig
      this.showIndex = index;
      if (this.quiz["questions-" + this.getLanguage][this.questionIndex-1].responses[index].correct == true){
        this.richtig++;
        console.log("richtig")
        this.weiterOK = true;
      } else {
        this.weiterOK = true;
        console.log("falsch")
      }
    },
  }
}
</script>



<style lang="scss" scoped>
.grid-container {
  display: grid;
  width: 1128px;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 66px 66px 676px 96px;
  gap: 0px 32px;
  grid-template-areas:
    "grid-header grid-header grid-header"
    "grid-counter grid-counter grid-counter"
    "grid-content grid-content grid-content"
    "grid-footer grid-footer grid-footer";
  // background-color: #D38760;
  padding-left: 32px;
  padding-right: 32px;
}

.grid-header { 
  grid-area: grid-header; 
  // display: flex; 
  // align-content: end;
  // justify-content: end;
}

.grid-counter { 
  grid-area: grid-counter;
  // background-color: #dddddddd; 
}
.grid-content { 
  grid-area: grid-content; 
  // background-color: #aaaaaaaa; 
}
.grid-footer { 
  grid-area: grid-footer;
  justify-self: end;
  // background-color: #77777777; 
 }

.start {
  display: flex; 
  flex-direction: column;
  // justify-content: center; 
  align-items: center;
}

.fragen-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 430px;
  gap: 0px 32px;
  grid-template-areas:
    "frage1 frage2 frage3"
}
.frage1 { 
  grid-area: frage1;
  display: flex; 
  flex-direction: column;
  justify-content: center; 
  align-items: start;
}
.frage2 { 
  grid-area: frage2;
  display: flex; 
  flex-direction: column;
  justify-content: center; 
  align-items: start;
}
.frage3 { 
  grid-area: frage3;
  display: flex;
  flex-direction: column;
  justify-content: center; 
  align-self: center;
  align-items: start;
}


h1 {
  font-family: FontBold;
  font-size: 40px;
  margin-top: 0px;
  color: $blacktypo;
}

.counter {
  font-family: FontBold;
  font-size: 26px;
  text-align: center;
  line-height: 40px;
  margin-top: 20px;
  color: #6C2823;
}

.titel {
  font-family: FontBold;
  font-size: 48px;
  text-align: center;
  width: 700px;
  line-height: 56px;
  margin-top: 50px;
  color:  $whitetypo;
}

p.frage {
  font-family: FontBoldItalic;
  text-align: center;
  font-size: 26px;
  line-height: 40px;
  margin-top: 20px;
  margin-left: 100px;
  margin-right: 100px;

  color: $whitetypo;
}

div.frage{
  // width: 220px;
  min-height: 120px;
  margin-bottom: 20px;
  // margin-right: 20px;
  // background-color: #6C2823;
  // border-radius: 20px 20px 20px 20px;
}

div.abc {
  // position: absolute;
  align-self: center;
  left: 0px;
  width: 80px;
  height: 80px;
  border-radius: 80px;
  border: 8px solid #B5625C;
  z-index: 2;
}

p.abc {
  font-family: FontBold;
  font-size: 40px;
  align-content: center;
  text-align: center;
  // line-height: 40px;
  margin-top:20px;
  color: #6C2823;
}

div.button{
  width: 220px;
  height: 69px;
  margin-right: 20px;
  background-color: #6C2823;
  border-radius: 20px 20px 20px 20px;
}


div.button-start{
  width: 220px;
  height: 69px;
  margin-top: 60px;
  background-color: #6C2823;
  border-radius: 20px 20px 20px 20px;
}

p.button {
  font-family: FontBold;
  text-transform: uppercase;
  text-align: center;
  font-size: 28px;
  line-height: 40px;
  // margin-top: 30px;
  padding-top: 14px;
  color: $whitetypo;
}

p.buttonstart {
  font-family: FontBold;
  text-transform: uppercase;
  text-align: center;
  font-size: 28px;
  line-height: 40px;
  // margin-top: 30px;
  padding-top: 14px;
  color: $whitetypo;
}

div.antwort{
 width: 100%;
 margin-top: -44px;
 min-height: 240px;
 max-height: 440px;
 height:auto;
  //  border: #0000ff;
  //  background-color: 00ff00;
 border-radius: 20px;
 border: 1px solid #6C2823;
 transition:max-height 0.4s ease-out;
}

p.antwort {
  font-family: FontRegular;
  text-align: center;
  // vertical-align: center;
  font-size: 22px;
  line-height: 34px;
  margin-top: 60px;
  margin-left: 5px;
  margin-right: 5px;
  transition:all 0.4s ease-out;
  // color: #6C2823;
}

p.explain {
  font-family: FontRegular;
  text-align: center;
  // vertical-align: center;
  font-size: 22px;
  line-height: 34px;
  margin-top: 30px;
  margin-left: 5px;
  margin-right: 5px;
  margin-bottom: 10px;
  color: #6C2823;
}


h3 {
    font-family: FontBold;
    font-size: 18px;
    line-height: 30px;
    color: $blacktypo;
    text-transform: uppercase;
}

.grid-header-text {
  color: #6C2823;
  margin-top: 32px;
}

.grid-header-line {
    width: 60px;
    height: 2px; 
    background-color: #fff;
    opacity: $linealpha;
}


.quiz-overlay {
  position: absolute;
  top: 0px;
  left: 0px;
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


.basefadedelay-enter-active,
.basefadedelay-leave-active {
  transition: opacity 0.6s;
  transition-delay: 0.7s;
}

.basefadedelay-enter,
.basefadedelay-leave-to
/* .fade-leave-active in <2.1.8 */
{
  opacity: 0;
  transition-delay: 0.5s;
}


.fadetext-enter-active,
.fadetext-leave-active {
  transition: all 0.5s;
  transition-delay: 0.0s;
}

.fadetext-enter,
.fadetext-leave-to
/* .fade-leave-active in <2.1.8 */
{
  opacity: 0;
  transition-delay: 0.0s;
  transition: all 0.5s;
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

</style>