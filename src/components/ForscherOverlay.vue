// https://qvault.io/2020/08/28/creating-a-custom-tooltip-component-in-vue/

<template>
    <transition name="fadefast" mode="out-in">
        <div class="forscher-box" v-if="isVisible" :style="switchStyleFloater()" @click="closeOverlay" >
            <div class="arrow-down teal" :style="switchNoseFloater()"></div> 
                <div class="gridx-container">
                    <div class="gridx-image">   
                        <img :src="'./static/forscher/' + forscher.image" alt="">
                    </div>

                    <div class="gridx-sub">
                        <div class="oneline"><p class="textbold" v-html="forscher.name"></p><p class="close">&times;</p></div>
                        <p class="text" v-html="forscher.von"></p>
                        <p class="text" v-if="forscher.bis!=null" v-html="forscher.bis"></p>
                        <p class="text" v-html="forscher.sub"></p>
                    </div>

                    <div class="gridx-text">
                        <p class="text" v-html="forscher.copy" ></p>
                    </div>
                        
                 </div> 
        </div>
    </transition>
</template>



<script>
export default {
    props: { 
        absX: {
            type: Number,
            required: true
        },
        absY: {
            type: Number,
            required: true
        },
        // text: {
        //      type: String,
        //      required: true
        // },
        // textx: {
        //     type: String,
        //     required: true
        // },
        // enterActiveClass:{
        //     type: String,
        //     required: false
        // },
        // leaveActiveClass: {
        //    type: String,
        //    required: false
        // },
        isVisible: {
            type: Boolean,
            required: true
        },
        forscher: {
            type: Object,
            required: () => {},
        }
    },
    data() {
        return {
            // text: "ja so ein müll, woher kommt jetzt der Text",
            // mouseX: 0,
            // mouseY: 0
        }
    },
    methods: {
        closeOverlay(){ // schliesst das fenster, im parent wird der click resettet
            console.log("closeOverlay in Overlay");
            this.$emit('closeOverlay', true);
        },
        switchStyleFloater: function() {
            // console.log("method switchStyleFloater rein", this.absX, this.absY);
            // xxx breite der box fix + linker anschlag checken
            return {
                transition: 'all 1.0s ease',
                top: '' + (this.absY  + 40) + 'px',
                // left: '' + (this.absX + 300) > 600 ? 300: this.absX + 'px',
                left: '12px',
            };  
        },
        switchNoseFloater: function() {
            // console.log("method switchStyleFloater rein", this.absX, this.absY);
            // xxx breite der box fix + linker anschlag checken
            return {
                transition: 'left 0.5s ease',
                left: '' + (this.absX  -20) + 'px',
            };  
        },
        doDestroy() {
            console.log("doDestroy");
            // if (this.showPopper) {
            //   return;
            // }

            // if (this.popperJS) {
            //   this.popperJS.destroy();
            //   this.popperJS = null;
            // }

            // if (this.appendedToBody) {
            //   this.appendedToBody = false;
            //   document.body.removeChild(this.popper.parentElement);
            // }
        }
    }   
}
</script>



<style scoped>
.forscher-box { 
    background-color: #EAE8E3;
    border-radius: 10px 10px 10px 10px;
    position: absolute;
    /* top: 200px;
    left: 100px; */
    /* width: 548px; */
    /* max-width: 548px; */
    transition: width 0.75s;
    /* display: block; */
    -webkit-box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.31);
    -moz-box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.31);
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.31);
}

.gridx-container {
    margin: 12px;
  display: grid;
  width: 566px;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto auto;
  gap: 12px 12px;
  grid-template-areas:
    "gridx-image gridx-sub gridx-sub"
    "gridx-text gridx-text gridx-text";
}
.gridx-image { 
    grid-area: gridx-image;
    /* max-width:180px;  */
    /* width: 148px; */
    /* height: 200px; */
    /* background-color: red; */
}
.gridx-sub { grid-area: gridx-sub; }
.gridx-text { grid-area: gridx-text; }

.arrow-down {
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 20px solid rgb(248, 0, 0);
    transform: rotate(180deg);
    position: absolute;
    top: -20px;
    /* left: 50%; */
    /* margin-left: -25px; */
}
.teal{
border-top: 20px solid #EAE8E3;
}  



.text {
    font-family: FontLight;
    font-size: 22px;
    line-height: 26px;
    margin-bottom: 10px;
}
.textbold {
    font-family: FontBold;
    font-size: 22px;
    line-height: 26px;
    margin-bottom: 10px;
    width: 360px;
}
.close {
    font-family: FontBold;
    font-size: 40px;
    line-height: 26px;
    margin-bottom: 10px;
    text-align: right;
}

.oneline {
    display: flex;
}

.fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
}
.fadefast-enter-active, .fadefast-leave-active {
    transition: opacity 0.45s;
}
.fadefast-enter, .fadefast-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
    transition: opacity 0.2s;
}

</style>