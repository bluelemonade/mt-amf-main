<template>
  <div v-if="content!= ''">
    <!-- <div class="dummy">
        <img src="../assets/dummies/Alter-Bestimmung.jpg" alt="">
    </div> -->
    <!-- <div class="container"> -->
      <div class="grid-container">
        
        <div class="grid-header">
            <h3 class="grid-header-text">{{ content.content.shortheadline[getLanguageID] }} </h3>
            <div class="grid-header-line"></div>
        </div>
        
        <div class="grid-text">
          <h1>
            {{ content.content.headline[getLanguageID] }}
          </h1>
          <p>
            {{ content.content.copy[0][getLanguageID] }} </p>
          <p>
            {{ content.content.copy[1][getLanguageID] }} 
          </p>
        </div>
        <div class="grid-content">
            <div class="card-container">
              <div class="label1"><span>{{content.content.label1[getLanguageID]}}</span></div>
              <div class="card1">
                  <flip-card> 
                      <template v-slot:front>
                      {{ content.content.card1[getLanguageID][0]  }} 
                    </template>
                    <template v-slot:back>
                      {{ content.content.card1[getLanguageID][1] }} 
                    </template>
                  </flip-card>
              </div>
              <div class="card2">
                  <flip-card> 
                    <template v-slot:front>
                      {{ content.content.card2[getLanguageID][0] }} 
                    </template>
                    <template v-slot:back>
                      {{ content.content.card2[getLanguageID][1] }} 
                    </template>
                  </flip-card>
              </div>
              <div class="card3">
                  <flip-card> 
                    <template v-slot:front>
                      {{ content.content.card3[getLanguageID][0] }} 
                    </template>
                    <template v-slot:back>
                      {{ content.content.card4[getLanguageID][1] }} 
                    </template>
                  </flip-card>
              </div>
              <div class="card4">
                  <flip-card> 
                    <template v-slot:front>
                      {{ content.content.card4[getLanguageID][0] }} 
                    </template>
                    <template v-slot:back>
                      {{ content.content.card4[getLanguageID][1] }} 
                    </template>
                  </flip-card>
              </div>
              <div class="label2"><span>{{content.content.label2[getLanguageID]}}</span></div>
             
          </div>

        </div>
      </div>
      
  </div>
</template>



<script>
import FlipCard from "../components/FlipCard.vue";
import storeMixin from "../mixins/storeMixin.js";

export default {
 components: {
    FlipCard,
 },
 mixins: [storeMixin],
 props: {    
        idNr:  {
                type: Number,
                default: 0,
            },
 },
 data() {
   return {
     content: "",
    //  idNr: 0,
   }
 },
 created() {
        this.$http.get('./static/alter.json').then(response => {
        console.log("!!!!!  alter wurde geladen! !!!!", this.idNr)
        this.content = response.body;
    }, response => {
        console.log(response);
        console.log("!!!!! alter wurde nicht geladen! !!!!!")
        // this.endload = true;
    });
 },
  computed: {
    // getLanguageID () {
    //     console.log("getLanguageID");
    //     const languageString = this.$store.getters.getOpenWindowsLanguage;
    //     const languageNr = languageString.charAt(this.idNr-1);
    //     if (languageNr == "0"){
    //         return 0
    //     } else {
    //         return 1
    //     }
    // },
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

.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 66px auto 900px;
  gap: 32px 32px;
  grid-template-areas:
    "grid-header grid-header grid-header grid-header"
    "grid-text grid-text grid-text grid-text"
    "grid-content grid-content grid-content grid-content";
  background-color: #B5625C;
  padding-left: 32px;
  padding-right: 16px;  // ?? nochmal checken
  
}

.grid-header { 
  grid-area: grid-header; 
  // display: flex; 
  // align-content: end;
  // justify-content: end;
}

.grid-text { grid-area: grid-text; }
.grid-content { grid-area: grid-content; }

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
    background-color: #fff;
    opacity: $linealpha;
}

.card-container {
  display: grid;
  grid-template-columns: 48px 500px 32px 500px 48px;
  grid-template-rows: 400px 32px 400px;
  gap: 0px 0px;
  grid-template-areas:
    "label1 card1 . card2 label2"
    "label1 . . . label2"
    "label1 card3 . card4 label2";
}
.label1{ 
  grid-area: label1;
  display: flex; 
  justify-content: center; 
  align-items: center;
  
}
.label1 span, .label2 span {
  -webkit-transform: rotate(-90deg);
  text-align: center;
  display: inline;
  white-space: nowrap;
  font-family: FontLight;
  font-size: 32px;
  line-height: 40px;
  color: $whitetypo;
  opacity: $whitetypoalpha;
  margin-top: 0px;
  // padding-bottom: -20px;
  width: 600px;
  // max-width: 32px;
  // max-width: 32px;
  // height: 100%;
}
.label2 { 
  grid-area: label2;
  display: flex; 
  justify-content: center; 
  align-items: center;
 }
.card1 { grid-area: card1; }
.card2 { grid-area: card2; }
.card3 { grid-area: card3; }
.card4 { grid-area: card4; }



.dummy {
  position: absolute;
  top: 0px;
  left: 0px;
}

</style>