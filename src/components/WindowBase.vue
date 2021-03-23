// basiert auf https://interactjs.io/

<template>
    <transition name="fadewindow"> <!--  :key="isWindowActive"  $route.path.split('/')[1] -->
    
    <div :style="scaleRotateStyle" :ref="'scaleit' + idNr" class="scale-element" v-show="isWindowActive == true" @mousedown="touchDown">
    <!-- <div ref="scaleit" class="scale-element" v-show="isWindowActive == true" @mousedown="touchDown"> -->
        <div class="nodrag1"></div>
        <div class="nodrag2"></div>
        
        <div class="window-content-back" :ref="'window-content-back' + idNr"> <!-- content componente :id="idName"  -->
            <div class="window-content-scroll" :style="isWindowScrollable">
                <div class="window-content" :ref="'window-content' + idNr" :id="'window-content-' + idNr">
                    <slot :idNr="idNr" :refresh="refresh" :newStack="newStack"></slot>  <!--  :echo="echo"  -->
                </div>
            </div>
        </div>
        
        <WindowNavigation class="window-navigation" :idNr="idNr" :idName="idName"> <!-- navigation componente rechts -->
        </WindowNavigation>
        
        <WindowMainMenu  :idNr="idNr" :idName="idName"> <!-- class="window-mainmenu" -->
        </WindowMainMenu>

        <WindowIcon class="window-icon" :idNr="idNr" :idName="idName"> 
        </WindowIcon>
        <!-- <div ref="scaleit" class="scale-element"> :click="touchdown"  v-touch:start="touchDown"-->
        <!-- <img :src="require('../assets/logo.png')" > -->
        <!-- <div><iframe width='800px' height='800px' src="https://www.bluelemon.de" frameborder="0"></iframe></div> -->
       
    </div>

    </transition>
    <!-- <div id="tool-play-area" ref='area'>
        <img :src="require('../assets/logo.png')" id="scale-element" :style="scaleRotateStyle" ref="scaleit">
    </div> -->
</template>


<script>
import interact from 'interactjs';
import EventBus from "../eventbus.js"

import WindowNavigation from "./WindowNavigation.vue";
import WindowIcon from "./WindowIcon.vue";
import WindowMainMenu from "./WindowMainMenu.vue";



export default {
    name: 'BaseWindow',
    components: {
        WindowNavigation,
        WindowMainMenu,
        WindowIcon
    },
    props: {    
        startX:  {
                type: Number,
                default: 60,
            },
        startY:  {
                type: Number,
                default: 60,
            },
        // startColor: {
        //         type: String,
        //         default: "#ff00ff",
        //     },
        idName:{
            type: String,
            default: "idname",
        },
        idNr:{
            type: Number,
            default: 0,
        },
        startZ:{
            type: Number,
            default: 0,
        },
        isTimeout: {
            type:Boolean,
            default: false
        }
        
    },
    data () {
        return {
            angleScale: {
                angle: 0,
                scale: 1
            },
            currentAngle: 0.00,
            currentScale: 1.00,
            currX: 400,
            currY: 300,
            currZ: 204,
            currWidth: "1340",
            currHeight: "1060",
            rand: 200,
            colors: ["#EAE8E3","#B5625C","#E8C35D","#90B6B1","#b5995c","#b5995c","#D38760"],
            timeouttime: 360,
            refresh: false,
            newStack: false,
            // 1. Entstehung #EAE8E3
            // 2. Alter #B5625C
            // 3. Menschliche Körper #E8C35D
            // 4. Stammbaum des Lebens #90B6B1
            // 5. Stammbaum Homininen #b5995c
            // 6. Fundorte #b5995c
            // 7. Quiz #D38760
        }
    },    
    computed: {
        getActiveThema(){
            console.log("windowmainmenu getActiveThema");
            const menuString = this.$store.getters.getOpenWindowsMenu;
            return menuString.charAt(this.idNr-1);
        },
        
        isWindowActive () {
            // console.log("isWindowActive", this.idNr-1 );
            const activeString = this.$store.getters.getOpenWindowsMenu;
            // console.log("isWindowActive", activeString);
            const stateOfID = activeString.charAt(this.idNr-1);
            // console.log("stateOfID", stateOfID);
            if (stateOfID != "0"){
                // console.log(activeArray)
                // console.log("isWindowActive, true" )
                // this.menuNr = activeArray[this.idNr-1];
                return true
            } else {
                // this.menuNr = 0;
                // console.log("isWindowActive, false" )
                return false 
            }
        },
        isWindowScrollable () {
            // console.log("isWindowScrollable", this.idNr-1 );
            // const scrollString = this.$store.getters.getScrollWindowsMenu;
            // console.log("isWindowActive", activeString);
            // const isScrollable = scrollString.charAt(this.idNr-1);
            // console.log("isScrollable", isScrollable);

            const thema = this.getActiveThema;
            const col = this.colors[parseInt(thema)-1];


            // if (isScrollable == "0"){
                // console.log(activeArray)
                // console.log("isWindowActive, true" )
                // this.menuNr = activeArray[this.idNr-1];
                return {
                    // overflowY: "hidden", 
                    transition: "all 0.7s ease", 
                    backgroundColor: col,
                    transitionDelay: "0.0s",
                    // transition: "background-color 0.7s ease",
                }
            // } else {
                // this.menuNr = 0;
                // console.log("isWindowActive, false" )
                // return {
                //     overflowY: "auto",
                //     backgroundColor: col,
                //     transition: "background 0.7s ease",
                //     transitionDelay: "0.5s",
                //     // transition: "background-color 0.7s ease",
                // }
            // }
        },

        scaleRotateStyle( ) { //eigentliche transformation
            // console.log(this.currentAngle);
            return {
                // transform: 'translate(' + this.currX + 'px, ' + this.currY + 'px)' + 'rotate(' + this.currentAngle + 'deg)' + 'scale(' + this.currentScale + ')',
                // backgroundColor: this.startColor,
                width: this.currWidth + "px", 
                height: this.currHeight + "px", 
                // height: '1200px',
                zIndex: this.currZ,
            }
        }
    },
    // watch: { 
    //     isTimeout: function(newVal, oldVal) {
    //         console.log(oldVal, newVal);
    //         if (newVal == true) {
    //             this.pushPath("home");
    //         } 
    //     }
    // },
    mounted() {
        // console.log("mounted")
        this.currX = this.startX;
        this.currY = this.startY;
        
        this.$refs["scaleit" +this.idNr].style.webkitTransform = this.$refs["scaleit" +this.idNr].style.transform = 'translate(' + this.currX + 'px, ' + this.currY + 'px)';
        this.currZ = this.startZ;
        let self = this;

        console.log("vor drag init", self.idName);

        interact('#' + self.idName).draggable({
            inertia: true,
            // hold: 100, // ms hold to start
            // ignoreFrom: 'svg, .window-icon, .nodrag1, .nodrag2',  // weiterleiten an die navigation .scale-element'
            ignoreFrom: '.nodrag1, .nodrag2, .window-content-scroll',  // weiterleiten an die navigation .scale-element'
            // allowFrom: '.window-content-back, .window-content-scroll, .window-content', 
            onstart: self.dragStartListener,
            onmove: self.dragMoveListener,
            ontab: self.tabListener,
        });

        interact('#' + self.idName).gesturable({
            ignoreFrom: '.vue2leaflet-map', //.window-content-scroll', 
            onstart: function (event) {
                self.pinchStart(event);
            },
            onmove: function(event) { /* change the position for draggable */
                self.pinchDo(event);
            },
            onend: function (event) {
                self.pinchEnd(event);
            }
        }) 

        console.log(">>> mounted childcomp");

        // console.log(this.idNr);
        // // this.pushPath('/menu0');
       
        // var self = this;
        function refreshTimeout (event) {
            // console.log("refreshTimeout WindowBase");
            clearTimeout(self.timerID);
            // this.newZ(event);


            self.timerID = setTimeout (()=> {
                // console.log("timeout fired");
                clearTimeout(self.timerID);
                self.timeout = false;
                self.$store.commit('closeWindowByIDM', self.idNr);
                // setTimeout(self.$store.dispatch('resetWindowByID', self.idNr), 1000);
                setTimeout(self.$store.commit('resetWindowByIDM', self.idNr), 1000);
            }, self.timeouttime * 1000);
        }
        const el = this.$refs['window-content-back' + this.idNr];
        console.log("contentWindow", el);
        // el.addEventListener('mouseDown', refreshTimeout);
        el.addEventListener('touchstart', refreshTimeout, { passive: true });
        var event = new Event('touchstart');
        el.dispatchEvent(event);

        EventBus.$on('open-window', this.openWindow);
        // EventBus.$on('custom-event', () => {
        //     console.log('Custom event triggered!')
        // })
        // console.log("WindowBaseImpressum finished")
    },
    created() {
        // interactjs kann hier nicht ordentlich initialisiert werden
    },
    methods: {
        openWindow(input){
            console.log("openWindow", this.idNr, input[0]);
            if (this.idNr == ( input[0].toString() ) ){
                console.log("fenster passt", input)
                this.currentAngle = input[1];
                this.currX = input[2];
                this.currY = input[3];
                // this.$refs["scaleit" + this.idNr].style.webkitTransform = this.$refs["scaleit"+ this.idNr].style.transform = 'translate(' + this.currX + 'px, ' + this.currY + 'px)';
                this.$refs["scaleit" + this.idNr].style.webkitTransform = 'translate(' + this.currX + 'px, ' + this.currY + 'px) rotate(' + this.currentAngle + 'deg)' + 'scale(' + this.currentScale + ')'; 
                // this.$refs["scaleit"+ this.idNr].style.transform = 'translate(' + this.currX + 'px, ' + this.currY + 'px) rotate(' + this.currentAngle + 'deg)' + 'scale(' + this.currentScale + ')';
                const el = this.$refs['window-content-back' + this.idNr]
                var event = new Event('touchstart');
                el.dispatchEvent(event);
                this.newStack = !this.newStack; // triggert in der content componente an daß der index des Stacks gemerkt wird.
                console.log("openWindow done");

            }
        },
        touchDown (){
            // console.log("windowbase touchDown");
            // this.newZ();
        },
        tabListener(event){
            console.log("tabListener", event);
        },
        dragStartListener (event){
            // console.log("dragStartListener", event);
            // console.log ("xxx", event._interaction.prevTap);
            // this.$store.dispatch('setZ');
            // this.newZ(event);
            this.$store.commit('setZM'); 
            this.currZ = this.$store.getters.getAppMaxZ;
            console.log("currZ", this.currZ);
            event.target.style.zIndex = this.currZ;


            // this.$refs["windowContent" + this.idNr].resetFromExtern();
            // console.log(this.$refs);
            // console.log(this.$slots);
            // this.$emit('echo');
            this.refresh = !this.refresh;
            console.log(this.refresh);
            // close.log(this.$refs["windowContent" + this.idNr]);
            // this.echo;

            // console.log("this.currZ", this.currZ);
        },
        dragMoveListener (event, extra) {
            // console.log("dragMoveListener", event, extra, this.currX, this.currZ);
            // keep the dragged position in the data-x/data-y attributes
            // this.currX = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx
            // this.currY = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy
            this.currX +=  event.dx;
            this.currY +=  event.dy;
            // console.log(this.currY);
            // grenzen finden
            this.currX > 3840 - this.rand ? this.currX = 3840 - this.rand: this.currX=this.currX+0;
            this.currY > 2160 - this.rand ? this.currY = 2160 - this.rand -100: this.currY=this.currY+0;
            this.currX < this.rand - 900 ? this.currX = this.rand -900 : this.currX=this.currX+0;
            this.currY < -600 ? this.currY = -600 : this.currY= this.currY+0;
            // this.currY < this.rand - event.target.height +1200? this.currY = this.rand: this.currY=this.currY+0;
            // var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx
            // var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy

            // translate the element
            if ( extra == true ){
                event.target.style.webkitTransform = event.target.style.transform = 'translate(' + this.currX + 'px, ' + this.currY + 'px) rotate(' + this.currentAngle + 'deg)' + 'scale(' + this.currentScale + ')';
             } else {
                event.target.style.webkitTransform = event.target.style.transform = 'translate(' + this.currX + 'px, ' + this.currY + 'px) rotate(' + this.currentAngle + 'deg)' + 'scale(' + this.currentScale + ')';
                // target.style.webkitTransform = target.style.transform = 'translate(' + this.currX + 'px, ' + this.currY + 'px)';
            }
            event.target.style.zIndex = event.target.style.zIndex = this.currZ;

            // update the position attributes
            event.target.setAttribute('data-x', this.currX)
            event.target.setAttribute('data-y', this.currY)
        },
        newZ(event){
            console.log("newZ trigger");
            this.$store.commit('setZM'); 
            this.currZ = this.$store.getters.getAppMaxZ;
            event.target.style.zIndex = this.currZ;
        },
        pinchStart(event){
            // console.log("pinchStart", event);
            this.$store.dispatch('setZ');
            this.currZ = this.$store.getters.getAppMaxZ;
            console.log("this.currZ", this.currZ);
            this.angleScale.angle -= event.angle;

            // clearTimeout(resetTimeout)
            // scaleElement.classList.remove('reset')
        }, 
        pinchDo(event){
            // console.log("pinchDo", event) 
            // console.log(event.target)
            // console.log(event.scale)
            this.currentAngle = event.angle + this.angleScale.angle;
            // this.currentScale = event.scale * this.angleScale.scale;
            
            // der scale kram
            // this.currWidth  = this.currWidth * event.scale;
            // this.currHeight = this.currHeight * event.scale;
            
            // var proz = this.currWidth / this.currHeight
            
            // if (this.currWidth < 500.0){
            //     this.currWidth = 500;
            // } else if (this.currWidth > 1200.0){
            //     this.currWidth = 1200;
            // }

            // this.currHeight = this.currWidth / proz;
            // end scale kram

            // console.log("currentScale", this.currentScale) ;
            // pass over to  the dragMoveListener
            this.dragMoveListener(event, true)
        }, 
        pinchEnd(event){
            //self.$emit("newCords", { event.dx, event.dy 
            this.angleScale.angle = this.angleScale.angle + event.angle
            // no scale this.angleScale.scale = this.angleScale.scale * event.scale
            // console.log("onend", event)  
        }
    }
}
</script>



<style lang="scss" scoped>
h2 {
    color:black;
    font-size: 20px;
    background-color: blueviolet;
}
// #tool-play-area {
//   position: absolute;
//   /* display: block; */
//   display: flex;
//   left: 30px;
//   top:30px;
//   width: 1860px;
//   height: 1020px;
//   background-color: #16ccec;
//   align-items: center;
//   justify-content: space-around;
//   overflow: hidden;
// //   x-scroll: false;
// }
/* #container {
    background-color: blue;
} */
.scale-element {
  position: absolute;
  /* display: block; */
  /* width: 800px;
  height: 800px; */
  margin: auto;
  touch-action: none;
  // background-color: green;
  // background-color: $invisible;
}

// #scale-element {
//   position: absolute;
//   /* display: block; */
//   width: 1290px;
//   height: 1060px;
//   margin: auto;
//   touch-action: none;
//   background-color: purple;
//   opacity:0.5;
// }

#scale-element.reset {
  transition: -webkit-transform 0.3s ease-in-out;
  transition: transform 0.3s ease-in-out;
}
.nodrag1 {
    touch-action: none;
    position: absolute;
    top: 0px;
    left: 0px;
    height: 50px;
    width: 1340px;
    background-color: $invisible;
}
.nodrag2 {
    touch-action: none;
    position: absolute;
    top: 0px;
    left: 0px;
    height: 1060px;
    width: 50px;
    background-color: $invisible;
}
.window-content-back { /* runde ecken oben rechts aber eckig */
    position: absolute;
    border-radius: 20px 0px 20px 20px;
    top: 100px;
    left: 100px;
    width: 1240px;
    height: 960px;
    background-color: $windowBackColor;
    // background-color: blue;
}
.window-content-scroll {
    // touch-action: false;
    position: absolute;
    top: 24px;
    left: 24px;
    // width: 1206px;
    max-height: 912px;
    // overflow-y: auto;
    overflow-x: hidden;
    // min-height: 800px; // ????
    // background-color:green;
    // background-color: $windowBackColor;
    // background-color: yellow;
    // background-color: #B5625C;
}

// .window-content-scroll::-webkit-scrollbar {
//   width: 10px;
// }

// .window-content-scroll::-webkit-scrollbar-track {
//   background-color: #2719df; 
// }

// .window-content-scroll::-webkit-scrollbar-thumb {
//   background-color: rgb(247, 0, 0);
// }
.window-content-scroll::-webkit-scrollbar {
    // left:10px;
    width: 16px;
    // height: 10px;
}
.window-content-scroll::-webkit-scrollbar-thumb {
    // left:   10px;
    background: #ffffff63;
    opacity: 0.3;
    // border-radius: 12px;
}
.window-content-scroll::-webkit-scrollbar-thumb:hover{
    // border-right: 4px white solid;
    background: #ffffff44;
    opacity: 0.3;
}
.window-content-scroll::-webkit-scrollbar-track{
    // border-right: 10px white solid;
    // background-clip: padding-box;
    background: $windowBackColor;
    // background: #ffffff44;
    opacity: 0.3;
    // border-radius: 12px;
}
.window-content {
    position: relative;
    // top: 0px;
    // left: 0px;
    width: 1192px; // 32 px schmaler als der scrollcontainer...
    height: auto;
    // overflow-x: hidden;
    // background-color:rgba(172, 255, 47, 0.137);
}

.window-icon {  /* links orientiert */
    touch-action: none;
    position: absolute;
    orientation: right;
    // border-radius: 80px 80px 80px 80px;
    top: 0px;
    left: 0px;
    // width: 960px;
    overflow: hidden;
    // width: 160px;
    // height: 160px;
    // background-color: $windowBackColor;
    // background-color: yellow;
}
.window-navigation { /* rechts orientiert */
    position: absolute;
    // overflow-x: auto; 
    // orientation: right;
    border-radius: 20px 20px 0px 0px;
    top: 52px;
    right: 0px;
    min-width: 252px;
    // width: 280px;
    height: 48px;
    background-color: $windowBackColor;
    // background-color: orange; 
}


.fadewindow-enter-active,
.fadewindow-leave-active {
  transition: all 0.4s ease;
  overflow: hidden;
  position: absolute;
  transition-delay: 0.2s;
}
.fadewindow-enter,
.fadewindow-leave-to {
  opacity: 0;
  visibility: hidden;
  transition-delay: 0.0s;
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


// .window-mainmenu {
//     position: absolute;
//     top: 0px;
//     left: 0px;
//     // top: 20px,
//     // left: 20px,

//     // width: 1080px;
//     // height: 800px;
//     margin: 60px 40px 40px 40px;
//     width: 1060px;
//     height: 860px;
    
//     background-color: purple;
// }

</style>