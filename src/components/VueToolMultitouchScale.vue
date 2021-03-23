// basiert auf https://interactjs.io/

<template>
    <div :style="scaleRotateStyle" ref="scaleit" class="scale-element" >
        <!-- <div ref="scaleit" class="scale-element"> -->
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
    name: 'VueToolMultitouchScale',
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
            rand: 80,
            // mat: [0,0,0,0,0,0]
        }
    },    
    computed: {
        scaleRotateStyle( ) { //eigentliche transformation
            // console.log(this.currentAngle);
            return {
                // transform: 'translate(' + this.currX + 'px, ' + this.currY + 'px)' + 'rotate(' + this.currentAngle + 'deg)' + 'scale(' + this.currentScale + ')',
                backgroundColor: this.startColor,
                // width: '800px', 
                // height: '1200px',
                zIndex: this.currZ,
            }
        }
    },
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
        dragStartListener (event){
            // console.log("dragStartListener", event);
            this.$store.dispatch('setZ');
            this.currZ = this.$store.getters.getAppMaxZ;
            console.log("this.currZ", this.currZ);
        },
        dragMoveListener (event, extra) {
            // console.log("dragMoveListener");
            // keep the dragged position in the data-x/data-y attributes
            // this.currX = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx
            // this.currY = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy
            this.currX +=  event.dx;
            this.currY +=  event.dy;
            // grenzen finden
            this.currX > 1920 - this.rand ? this.currX = 1920 - this.rand: this.currX=this.currX+0;
            this.currY > 1080 - this.rand ? this.currY = 1080 - this.rand: this.currY=this.currY+0;
            this.currX < this.rand - event.target.width ? this.currX = this.rand: this.currX=this.currX+0;
            this.currY < this.rand - event.target.height ? this.currY = this.rand: this.currY=this.currY+0;
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
            // console.log("pinchStart", event);
            this.$store.dispatch('setZ');
            this.currZ = this.$store.getters.getAppMaxZ;
            // console.log("this.currZ", this.currZ);
            this.angleScale.angle -= event.angle
            // clearTimeout(resetTimeout)
            // scaleElement.classList.remove('reset')
        }, 
        pinchDo(event){
            // console.log("pinchDo", event) 
            console.log(event.target)
            this.currentAngle = event.angle + this.angleScale.angle;
            this.currentScale = event.scale * this.angleScale.scale;
            
            if (this.currentScale < 1.0){
                this.currentScale = 1;
            } else if (this.currentScale > 3.0){
                this.currentScale = 3;
            }
            // console.log("currentScale", this.currentScale) ;
            // pass over to  the dragMoveListener
            this.dragMoveListener(event, true)
        }, 
        pinchEnd(event){
            //self.$emit("newCords", { event.dx, event.dy 
            this.angleScale.angle = this.angleScale.angle + event.angle
            this.angleScale.scale = this.angleScale.scale * event.scale
            // console.log("onend", event)  
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
  width: 800px;
  height: 800px;
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
} */
#scale-element.reset {
  transition: -webkit-transform 0.3s ease-in-out;
  transition: transform 0.3s ease-in-out;
}
</style>