<template>
    
    <div id="box-content" v-if="loaded==false">
        <!-- <div id="hg"> -->
        <div class="Logo"></div>
        <!-- </div> -->
        <div class="center-me">
            <div >
                <h2 class="bu-head text-center">{{ headertext }}</h2>
                <p class="bu-text text-center p-height" >{{ loadtext }}</p>
                <md-button v-if='btnvisible' class="md-raised md-accent" @click='setLoaded()' >WEITER (Fehler zur Kenntnis genommen)</md-button>
            </div>
        </div>
    </div>
   
</template>


<script>
export default {
    data() {
        return {
            xxx: 1
        };
    },
    props: ['btnvisible','loadtext','headertext'],
    methods: {
        setLoaded() {
            this.$store.dispatch('setAppLoaded');
        }
    },
    computed: {
        isTimeout(){
        // console.log("computed in VueContent image")
        return  this.$store.getters.getTimeoutFlag;
        },
        loaded(){
            console.log("loaded")
        return this.$store.getters.getAppLoaded;
        },
        appLanguage() {
        // console.log("computed appLanguage");
        // console.log(this.$store.getters.getAppLanguage);
        return this.$store.getters.getAppLanguage;
        }
    }
}
</script>

<style scoped>
#box-content {
  position: absolute;
    background-color: rgb(255, 255, 255);
    top: 0px;
    left: 0px;
    width: 1920px;
    height: 1080px;
    opacity: 1.0;
    z-index: 1000;
}
/* .header {
  display: flex;
  align-items: center;
  justify-content: center;
} */
.center-me {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}
.p-height{
    height: 300px;
    width: 500px;
    overflow-y:scroll;
    background-color: rgb(244, 244, 244);
}
#hg {
    position: absolute;
    background-color: rgb(255, 255, 255);
    top: 0px;
    left: 0px;
    width: 1920px;
    height: 1080px;
    opacity: 1.0;
}
.Logo {
    position: absolute;
    top:972px;
    right:20px;
    width: 362px;
    height: 82px;
    background-image:url("../assets/img/bluelemon_logo.jpg");
    /* background-color: rgb(9, 255, 0); */
    /* opacity: 0.5; */
}
p::-webkit-scrollbar {
  width: 20px;
}

p::-webkit-scrollbar-track {
  background-color: rgb(255, 255, 255); 
}

p::-webkit-scrollbar-thumb {
  background-color: rgb(247, 0, 0);
}

</style>