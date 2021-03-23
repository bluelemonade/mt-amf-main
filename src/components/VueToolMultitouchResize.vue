// basiert auf https://interactjs.io/

<template>
    <div :style="scaleRotateStyle" ref="scaleit" class="scale-element">
        <!-- <div ref="scaleit" class="scale-element"> :click="touchdown"  v-touch:start="touchDown"-->
        <!-- <img :src="require('../assets/logo.png')" > -->
        <!-- <div><iframe width='800px' height='800px' src="https://www.bluelemon.de" frameborder="0"></iframe></div> -->
        <slot></slot>
    </div>
     <!-- <div id="tool-play-area" ref='area'>
        <img :src="require('../assets/logo.png')" id="scale-element" :style="scaleRotateStyle" ref="scaleit">
    </div> -->
</template>


<script>
import interact from 'interactjs';
// import Vue from 'vue'

export default {
    name: 'VueToolMultitouchResize',
    props: {    
        startX:  {
                type: Number,
                default: 60,
            },
        startY:  {
                type: Number,
                default: 60,
            },
        startColor: {
                type: String,
                default: "#ff00ff",
            },
        idName:{
            type: String,
            default: "idname",
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
            currWidth: "700",
            currHeight: "700",
            rand: 200,
            // mat: [0,0,0,0,0,0]
        }
    },    
    computed: {
        scaleRotateStyle( ) { //eigentliche transformation
            // console.log(this.currentAngle);
            return {
                // transform: 'translate(' + this.currX + 'px, ' + this.currY + 'px)' + 'rotate(' + this.currentAngle + 'deg)' + 'scale(' + this.currentScale + ')',
                backgroundColor: this.startColor,
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
    mounted(){
        // console.log("mounted")
        this.currX = this.startX;
        this.currY = this.startY;
        
        this.$refs["scaleit"].style.webkitTransform = this.$refs["scaleit"].style.transform = 'translate(' + this.currX + 'px, ' + this.currY + 'px)';
        this.currZ = this.startZ;
        let self = this;

        interact('#' + self.idName).draggable({ 
            onmove: self.dragMoveListener,
            onstart:self.dragStartListener,
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
    },
    created() {
        // interactjs kann hier nicht ordentlich initialisiert werden
    },
    methods: {
        touchDown (){
            console.log("xxxxx")
        },
        dragStartListener (event){
            console.log("dragStartListener", event);
            this.$store.dispatch('setZ');
            this.currZ = this.$store.getters.getAppMaxZ;
            // console.log("this.currZ", this.currZ);
        },
        dragMoveListener (event, extra) {
            // console.log("dragMoveListener");
            // keep the dragged position in the data-x/data-y attributes
            // this.currX = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx
            // this.currY = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy
            this.currX +=  event.dx;
            this.currY +=  event.dy;
            // console.log(this.currY);
            // grenzen finden
            this.currX > 3840 - this.rand ? this.currX = 3840 - this.rand: this.currX=this.currX+0;
            this.currY > 2160 - this.rand ? this.currY = 2160 - this.rand -100: this.currY=this.currY+0;
            this.currX < this.rand - event.target.width ? this.currX = this.rand : this.currX=this.currX+0;
            this.currY < -600 ? this.currY = -500 : this.currY= this.currY+0;
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
        pinchStart(event){
            console.log("pinchStart", event);
            this.$store.dispatch('setZ');
            this.currZ = this.$store.getters.getAppMaxZ;
            console.log("this.currZ", this.currZ);
            this.angleScale.angle -= event.angle
            // clearTimeout(resetTimeout)
            // scaleElement.classList.remove('reset')
        }, 
        pinchDo(event){
            //console.log("pinchDo", event) 
            // console.log(event.target)
            console.log(event.scale)
            this.currentAngle = event.angle + this.angleScale.angle;
            // this.currentScale = event.scale * this.angleScale.scale;
            this.currWidth  = this.currWidth * event.scale;
            this.currHeight = this.currHeight * event.scale;
            
            var proz = this.currWidth / this.currHeight
            
            if (this.currWidth < 500.0){
                this.currWidth = 500;
            } else if (this.currWidth > 1200.0){
                this.currWidth = 1200;
            }

            this.currHeight = this.currWidth / proz;

            // console.log("currentScale", this.currentScale) ;
            // pass over to  the dragMoveListener
            this.dragMoveListener(event, true)
        }, 
        pinchEnd(event){
            //self.$emit("newCords", { event.dx, event.dy 
            this.angleScale.angle = this.angleScale.angle + event.angle
            this.angleScale.scale = this.angleScale.scale * event.scale
            console.log("onend", event)  
        }
    }
}
</script>



<style scoped>
h2 {
    color:black;
    font-size: 20px;
    background-color: blueviolet;
}
#tool-play-area {
  position: absolute;
  /* display: block; */
  display: flex;
  left: 30px;
  top:30px;
  width: 1860px;
  height: 1020px;
  background-color: #16ccec;
  align-items: center;
  justify-content: space-around;
  overflow: hidden;
  x-scroll: false
}
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
  background-color: red;
}
#scale-element {
  position: absolute;
  /* display: block; */
  width: 200px;
  height: 200px;
  margin: auto;
  touch-action: none;
  background-color: red;
  opacity:0.5;
}
#scale-element.reset {
  transition: -webkit-transform 0.3s ease-in-out;
  transition: transform 0.3s ease-in-out;
}
</style>