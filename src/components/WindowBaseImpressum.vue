// basiert auf https://interactjs.io/

<template>
    <transition name="fade">
    
    <div :style="scaleRotateStyle" :ref="'scaleit' +  idNr" class="scale-element" v-show="isWindowActive == true" @mousedown="touchDown">
        <div class="nodrag1"></div>
        
        <div class="window-content-back" :ref="'window-content-back' + idNr"> 
           <div class="window-content-scroll" >  
                <div class="window-content" :ref="'window-content' + idNr" :id="'window-content-' + idNr">
                    <slot :idNr="idNr" ></slot>  <!--  :echo="echo"   :refresh="refresh"   -->
                </div>
            </div>
        </div>
        
        <WindowNavigation class="window-navigation" :idNr="idNr" :idName="idName"> <!-- navigation componente rechts -->
        </WindowNavigation>
        
    </div>

    </transition>
</template>



<script>
import interact from 'interactjs';
import WindowNavigation from "./WindowNavigationImpressum.vue";
import EventBus from "../eventbus.js"


export default {
    name: 'BaseWindowImpressum',
    components: {
        WindowNavigation,
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
            currX: 1200,
            currY: 200,
            currZ: 204,
            currWidth: "622",
            currHeight: "908", // 808
            rand: 300,
            // refresh: false,
            timeouttime: 240,
            impressumID: 0,
        }
    },    
    computed: {
        isWindowActive () {
            console.log("isWindowActive impressum");
            const isOpen = !(this.$store.getters.getImpressumCanOpen);
            // console.log("isWindowActive", activeString);
           return isOpen;
        },
        scaleRotateStyle( ) { // eigentliche transformation
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
        console.log("mounted impressum standard")
        this.currX = this.startX;
        this.currY = this.startY;
        
        this.$refs["scaleit" + this.idNr].style.webkitTransform = this.$refs["scaleit"+ this.idNr].style.transform = 'translate(' + this.currX + 'px, ' + this.currY + 'px)';
        this.currZ = this.startZ;
        let self = this;

        console.log("vor Drag init Impressum", self.idName);

        interact('#' + self.idName).draggable({
            inertia: true,
            // hold: 100, // ms hold to start
            // ignoreFrom: 'svg, .window-icon, .nodrag1, .nodrag2',  // weiterleiten an die navigation .scale-element'
            ignoreFrom: '.nodrag1, .window-content-scroll',  // weiterleiten an die navigation .scale-element' isWindowActive
            // allowFrom: '.window-content-back, .window-content-scroll, .window-content', 
            onmove: self.dragMoveListener,
            onstart: self.dragStartListener,
            ontab: self.tabListener,
        });

        interact('#' + self.idName).gesturable({
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

        console.log(">>> mounted windowBaseImpressum");

        // console.log(this.idNr);
        // // this.pushPath('/menu0');
       
        // // var self = this;
        function refreshTimeout (event) {
            console.log("refreshTimeout impressum")
            clearTimeout(self.timerID);
            self.timerID = setTimeout  (()=> {
                console.log("timeout impressum fired");
                clearTimeout(self.timerID);
                self.timeout = false;
                // self.$store.commit('closeWindowByIDM', self.idNr);
                // setTimeout(self.$store.dispatch('resetWindowByID', self.idNr), 1000);
                setTimeout(self.$store.commit('setImpressumCanOpenM'), 1000);
            }, self.timeouttime * 1000);
        }
        const el = this.$refs['window-content-back' + this.idNr]
        // console.log("contentWindowImpressum", el);
        // el.addEventListener('mouseDown', refreshTimeout);
        el.addEventListener('touchstart', refreshTimeout, { passive: true }); 

        EventBus.$on('open-impressum', this.openImpressum);
        EventBus.$on('custom-event', () => {
            console.log('Custom event triggered!')
        })
        console.log("WindowBaseImpressum finished")

        var event = new Event('touchstart');
        el.dispatchEvent(event);

    },
    created() {
        // interactjs kann hier nicht ordentlich initialisiert werden
      
    },
    methods: {
        openImpressum(input){
            console.log("openImpressum", input.impressumID);
            this.impressumID = input.impressumID;

            if (this.impressumID==2) {
                this.currentAngle = 180.00;
                this.currX = 300;
                this.currY = 60;
            } else {
                this.currentAngle = 0.00;
                this.currX = 2800;
                this.currY = 1200;
            }

            // this.$refs["scaleit" + this.idNr].style.webkitTransform = this.$refs["scaleit"+ this.idNr].style.transform = 'translate(' + this.currX + 'px, ' + this.currY + 'px)';
            this.$refs["scaleit" + this.idNr].style.webkitTransform = this.$refs["scaleit"+ this.idNr].style.transform =  'translate(' + this.currX + 'px, ' + this.currY + 'px) rotate(' + this.currentAngle + 'deg)' + 'scale(' + this.currentScale + ')';
            // impressumID: impressumID
            const el = this.$refs['window-content-back' + this.idNr]
            var event = new Event('touchstart');
            el.dispatchEvent(event);
        },
        touchDown (){
            console.log("windowbase impressum touchDown")
        },
        tabListener(event){
            console.log("tabListener", event);
        },
        dragStartListener (event){
            // console.log("dragStartListener Impressum", event);
            this.$store.commit('setZM'); 
            this.currZ = this.$store.getters.getAppMaxZ;
            event.target.style.zIndex = this.currZ;
            console.log("currZ", this.currZ);
            // this.$refs["windowContent" + this.idNr].resetFromExtern();
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
            this.currX < this.rand - 620 ? this.currX = this.rand - 620 : this.currX=this.currX+0;
            this.currY < -600 ? this.currY = -500 : this.currY= this.currY+0;
            // console.log(this.currX, this.currY);
            // translate the element
            if ( extra == true ){
                event.target.style.webkitTransform = event.target.style.transform = 'translate(' + this.currX + 'px, ' + this.currY + 'px) rotate(' + this.currentAngle + 'deg)' + 'scale(' + this.currentScale + ')';
             } else {
                event.target.style.webkitTransform = event.target.style.transform = 'translate(' + this.currX + 'px, ' + this.currY + 'px) rotate(' + this.currentAngle + 'deg)' + 'scale(' + this.currentScale + ')';
                // target.style.webkitTransform = target.style.transform = 'translate(' + this.currX + 'px, ' + this.currY + 'px)';
            }
            event.target.style.zIndex = event.target.style.zIndex = this.currZ;

            // update the position attributes
            event.target.setAttribute('data-x', this.currX);
            event.target.setAttribute('data-y', this.currY);
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
    width: 588px;
    background-color: $invisible;
    // background-color: orange;
}
.window-content-back { /* runde ecken oben rechts aber eckig */
    position: absolute;
    border-radius: 20px 0px 20px 20px;
    top: 48px;
    left: 0px;
    width: 622px;
    height: 832px;
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
    background-color:#EAE8E3;
}
.window-content-scroll::-webkit-scrollbar {
    // left:10px;
    width: 16px;
    // height: 10px;
}
.window-content-scroll::-webkit-scrollbar-thumb {
    // left:   10px;
    background: #ffffff54;
    opacity: 0.3;
    // border-radius: 12px;
}
.window-content-scroll::-webkit-scrollbar-thumb:hover{
    // border-right: 4px white solid;
    background: #ffffff9d;
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
    width: 576px; // 576 32 px schmaler als der scrollcontainer...
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
    top: 0px;
    right: 0px;
    min-width: 50px;
    // width: 280px;
    height: 48px;
    background-color: $windowBackColor;
}
</style>