<template>
  <div v-if="content!=''">
   
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
           <StammbaumLebenSpiel msg="Drag & Drop" :idNr="idNr" :tiernamen="content.content.tiernamen"/>
        </div>
      </div>
      
  </div>
</template>



<script>
import StammbaumLebenSpiel from '../components/StammbaumLebenSpiel.vue'
import storeMixin from "../mixins/storeMixin.js";


export default {
 components: {
    StammbaumLebenSpiel,
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
      this.$http.get('./static/stammbaum-leben.json').then(response => {
      console.log("!!!!!  stammbaum-leben wurde geladen! !!!!", this.idNr)
      this.content = response.body;
    }, response => {
      console.log(response);
      console.log("!!!!! stammbaum-leben wurde nicht geladen! !!!!!")
      // this.endload = true;
    });
    console.log("StammbaumLeben created", this.idNr);
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
  background-color: #90B6B1;
  padding-left: 32px;
  padding-right: 0px;
}

.grid-header { 
  grid-area: grid-header; 
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
    background-color: #fff;
    opacity: $linealpha;
}

.dummy {
  position: absolute;
  top: 0px;
  left: 0px;
}

</style>