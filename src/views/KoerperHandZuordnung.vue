// Tiere > Wirbeltiere >> Säugetiere >> Primaten >> Große Menschenaffen >> Menschen 
// Qualle > Fisch > Giraffe > Primat > gorilla > human 

<template>
  <div class="puzzlh1-container" :ref="'koerper-hand-zuordnung' + idNr">
    <link href='https://fonts.googleapis.com/css?family=Signika+Negative:300,400,700' rel='stylesheet' type='text/css'>

    <svg version="1.1" class="svg-container" :ref="'koerper-hand-zuordnung-svg' + idNr" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
      viewBox="0 0 1128 800" xml:space="preserve">

      <filter id="dropshadow" height="130%">
        <feGaussianBlur in="SourceAlpha" stdDeviation="3"/> <!-- stdDeviation is how much to blur -->
        <feOffset dx="2" dy="2" result="offsetblur"/> <!-- how much to offset -->
        <feComponentTransfer>
          <feFuncA type="linear" slope="0.5"/> <!-- slope is the opacity of the shadow -->
        </feComponentTransfer>
        <feMerge> 
          <feMergeNode/> <!-- this contains the offset blurred image -->
          <feMergeNode in="SourceGraphic"/> <!-- this contains the element that the filter is applied to -->
        </feMerge>
      </filter>

      <image xlink:href="../assets/koerper-hand-zuordnung/l-1.png" x="20"  y="20" height="254px" width="210px" class="bild l0"></image>
      <image xlink:href="../assets/koerper-hand-zuordnung/l-2.png" x="240" y="20" height="254px" width="210px" class="bild l1"></image>
      <image xlink:href="../assets/koerper-hand-zuordnung/l-3.png" x="460" y="20" height="254px" width="210px" class="bild l2"></image>
      <image xlink:href="../assets/koerper-hand-zuordnung/l-4.png" x="680" y="20" height="254px" width="210px" class="bild l3"></image>
      <image xlink:href="../assets/koerper-hand-zuordnung/l-5.png" x="900" y="20" height="254px" width="210px" class="bild l4"></image>
    
      <rect width="100" height="150" x="75px"   y="220px" style="fill:rgb(255,255,255);opacity:0.0" class="r0 target"/>
      <rect width="100" height="150" x="295px"  y="220px" style="fill:rgb(255,255,255);opacity:0.0" class="r1 target"/>
      <rect width="100" height="150" x="515px"  y="220px" style="fill:rgb(255,255,255);opacity:0.0" class="r2 target"/>
      <rect width="100" height="150" x="735px"  y="220px" style="fill:rgb(255,255,255);opacity:0.0" class="r3 target"/>
      <rect width="100" height="150" x="955px"  y="220px" style="fill:rgb(255,255,255);opacity:0.0" class="r4 target"/>

      <text class="text t0" text-anchor="middle" x="120px" y="400"> {{ content["hand-" + getLanguage].zuordnung[0]  }}</text>
      <text class="text t1" text-anchor="middle" x="340px" y="400"> {{ content["hand-" + getLanguage].zuordnung[1]  }}</text>
      <text class="text t2" text-anchor="middle" x="560px" y="400"> {{ content["hand-" + getLanguage].zuordnung[2]  }}</text>
      <text class="text t3" text-anchor="middle" x="785px" y="400"> {{ content["hand-" + getLanguage].zuordnung[3]  }}</text>
      <text class="text t4" text-anchor="middle" x="1005px" y="400"> {{ content["hand-" + getLanguage].zuordnung[4]  }}</text>

      <image xlink:href="../assets/koerper-hand-zuordnung/hand-1.png" :x="getPosition(0)" y="450" height="314px" width="180px" class="h0"></image>
      <image xlink:href="../assets/koerper-hand-zuordnung/hand-2.png" :x="getPosition(1)" y="450" height="314px" width="180px" class="h1"></image>
      <image xlink:href="../assets/koerper-hand-zuordnung/hand-3.png" :x="getPosition(2)" y="450" height="314px" width="180px" class="h2"></image>
      <image xlink:href="../assets/koerper-hand-zuordnung/hand-4.png" :x="getPosition(3)" y="450" height="314px" width="180px" class="h3"></image>
      <image xlink:href="../assets/koerper-hand-zuordnung/hand-5.png" :x="getPosition(4)" y="450" height="314px" width="180px" class="h4"></image>
    
    </svg>

  </div>
</template>


<script>
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import { shuffle } from  "../functions.js";
import storeMixin from "../mixins/storeMixin.js";


export default {
  name: 'Stammbaum',
  mixins: [storeMixin],
  data: function () {
     return {
      counter: 0,
      x: 0,
      y: 0,
      text1: "hallo",
      endScale: 0.45,
      imagePosArray: [20, 240, 460, 680, 920],
      rightPositionArray: [],
      ydelay: 118,
      xdelay: 15,
      handxDelta: 0,
     }
  },
    props: {
      msg: {
            type: String,
            default: "",
          }, 
      idNr: { 
            type: Number,
            default: 0,
          },
      content: {
            type: Object,
            default: () => {},
          }
 },
  created() {
      this.imagePosArray = shuffle(this.imagePosArray);
      // console.log(this.imagePosArray);
      // this.updateFrame();
      console.log("KoerperPuzzleZuordnung created", this.idNr);
      console.log(this.$route);
  },
  computed: {
  },
  methods: {
    playedPosition(wert){
      this.rightPositionArray.push(wert);
      if (this.rightPositionArray.length == 5){
        console.log("du hast alles richtig zugeordnet!");
      }
    },
    getPosition(pos){
        return this.imagePosArray[pos];
    },
    updateCoordinates: function(event) {
      // pass event object, bound to mouse move with updat
      this.x = event.clientX;
      this.y = event.clientY;
      // console.log(this.x, this.y)
    },
    updateFrame() {
        // check ob refs schon da ist
        if ( this.$refs['koerper-hand-zuordnung' + this.idNr] == undefined ) {
          window.requestAnimationFrame(this.updateFrame);
          console.log("fehler");
          return;
        }
        // console.log("get svg ref")
        var svg = this.$refs['koerper-hand-zuordnung' + this.idNr].querySelector(".svg-container");
        // console.log("svg", svg)
        const h1 = this.$refs['koerper-hand-zuordnung' + this.idNr].querySelector(".h1");
        // var matrix = svg.getScreenCTM();
        var point = svg.createSVGPoint();
        var svgPoint = point.matrixTransform(svg.getScreenCTM().inverse());
        var h1Point  = point.matrixTransform(h1.getScreenCTM().inverse());
        this.$refs['koerper-hand-zuordnung' +  this.idNr].querySelector(".info").innerHTML = `
                    Screen X = ${this.x}<br/>
                    Screen Y = ${this.y}<br/><br/>

                    SVG X = ${svgPoint.x.toFixed(1)}<br/>
                    SVG Y = ${svgPoint.y.toFixed(1)}<br/><br/>

                    h1 X = ${h1Point.x.toFixed(1)}<br/>
                    h1 Y = ${h1Point.y.toFixed(1)}<br/><br/>
                    `
        window.requestAnimationFrame(this.updateFrame);
        // console.log("frameUpdate");
      }
   },
  mounted() {
    // if ('koerper-hand-zuordnung' + this.idNr == "class3"){
    gsap.registerPlugin(Draggable);
    // }

    console.log(this.$route.path);
    // console.log(this.$route.fullPath);
    console.log(this.$route.path.split('/')[1]);

    gsap.to(".text", {delay:0.0, duration: 0.0, opacity: 0})

    var that = this;
    console.log("mounted start", this.idNr, this.$refs);
    // console.log(this.$refs['koerper-hand-zuordnung' + this.idNr]);
    var h0 = this.$refs['koerper-hand-zuordnung' +  this.idNr].querySelector(".h0")
    // console.log("h0",h0);
    var l0 = this.$refs['koerper-hand-zuordnung' +  this.idNr].querySelector(".l0");
    // console.log("l0",l0);
    var r0 = this.$refs['koerper-hand-zuordnung' +  this.idNr].querySelector(".r0");
    var t0 = this.$refs['koerper-hand-zuordnung' +  this.idNr].querySelector(".t0");
    //console.log("t0",t0);
    // console.log("first elements referenced");
    var svgbound = this.$refs['koerper-hand-zuordnung-svg' + this.idNr];
    

    Draggable.create(h0, {
      bounds:svgbound,
      // bounds:"svg",
      onDragStart: function(){
        // console.log("onDragStart");
        gsap.to(h0, {duration: 0.4, scale: 1.4, transformOrigin: "center" });
        // console.log(this.target);
      },
      onDragEnd: function() {
        console.log("onDragEnd");
        if (!(this.hitTest(l0) ) ) {
          gsap.to(h0, {duration: 0.4, x: this.handxDelta, y: 0, scale: 1.0})
        }
      },
      onDrag: function() {
        if (this.hitTest(l0)) {
          // console.log("hittest 0");
          var target1x = l0.getBBox().x
          var target1y = l0.getBBox().y
          var star1x = h0.getBBox().x
          var star1y = h0.getBBox().y
          // console.log("1");
          gsap.to(h0, {duration: 0.4, x:target1x-star1x  + that.xdelay, y:target1y-star1y + that.ydelay, scale: that.endScale })
          gsap.to(t0, {duration: 0.8, opacity: 1.0});
          gsap.to(r0, {duration: 0.4, opacity: 1.0});
          that.playedPosition("l0");
          Draggable.get(h0).disable();
        }
      }
    });
    var h1 = this.$refs['koerper-hand-zuordnung' + this.idNr].querySelector(".h1")
    var l1 = this.$refs['koerper-hand-zuordnung' + this.idNr].querySelector(".l1");
    var r1 = this.$refs['koerper-hand-zuordnung' + this.idNr].querySelector(".r1");
    var t1 = this.$refs['koerper-hand-zuordnung' + this.idNr].querySelector(".t1");
    Draggable.create(h1, {
      bounds:svgbound,
      // bounds:"svg",
      onDragStart: function(){
        // console.log("onDragStart");
        gsap.to(h1, {duration: 0.4, scale: 1.4, transformOrigin: "center" });
        // console.log(this.target);
      },
      onDragEnd: function() {
        //console.log("onDragEnd");
        if (!(this.hitTest(l1) ) ) {
          gsap.to(h1, {duration: 0.4, x: this.handxDelta, y: 0, scale: 1.0})
        }
      },
      onDrag: function() {
        if (this.hitTest(l1)) {
          //console.log("hittest l1");
          var target1x = l1.getBBox().x
          var target1y = l1.getBBox().y
          var star1x = h1.getBBox().x
          var star1y =  document.querySelector(".h1").getBBox().y
          gsap.to(h1, {duration: 0.4, x:target1x-star1x + that.xdelay, y:target1y-star1y + that.ydelay, scale:that.endScale })
          gsap.to(r1, {duration: 0.4, opacity: 1.0});
          that.playedPosition("l1");
          gsap.to(t1, {duration: 0.8, opacity: 1.0});
          Draggable.get(h1).disable();
        }
      }
    });
    var h2 = this.$refs['koerper-hand-zuordnung' + this.idNr].querySelector(".h2")
    var l2 = this.$refs['koerper-hand-zuordnung' + this.idNr].querySelector(".l2");
    var r2 = this.$refs['koerper-hand-zuordnung' + this.idNr].querySelector(".r2");
    var t2 = this.$refs['koerper-hand-zuordnung' + this.idNr].querySelector(".t2");
    Draggable.create(h2, {
      bounds:svgbound,
      // bounds:"svg",
      onDragStart: function(){
        //console.log("onDragStart");
        gsap.to(h2, {duration: 0.4, scale: 1.4, transformOrigin: "center" });
        // console.log(this.target);
      },
      onDragEnd: function() {
        console.log("onDragEnd");
        if (!(this.hitTest(l2) ) ) {
          gsap.to(h2, {duration: 0.4, x: this.handxDelta, y: 0, scale: 1.0})
        }
      },
      onDrag: function() {
        if (this.hitTest(l2)) {
          var target1x = l2.getBBox().x
          var target1y = l2.getBBox().y
          var star1x = h2.getBBox().x
          var star1y = h2.getBBox().y
          gsap.to(h2, {duration: 0.4, x:target1x-star1x + that.xdelay, y:target1y-star1y+ that.ydelay, scale:that.endScale})
          gsap.to(r2, {duration: 0.4, opacity: 1.0});
          that.playedPosition("l2");
          gsap.to(t2, {duration: 0.8, opacity: 1.0});
          Draggable.get(h2).disable();
        }
      }
    });
    var h3 = this.$refs['koerper-hand-zuordnung' + this.idNr].querySelector(".h3")
    var l3 = this.$refs['koerper-hand-zuordnung' + this.idNr].querySelector(".l3");
    var r3 = this.$refs['koerper-hand-zuordnung' + this.idNr].querySelector(".r3");
    var t3 = this.$refs['koerper-hand-zuordnung' + this.idNr].querySelector(".t3");
    Draggable.create(h3, {
      bounds:svgbound,
      // bounds:"svg",
      onDragStart: function(){
        //console.log("onDragStart");
        gsap.to(h3, {duration: 0.4, scale: 1.4, transformOrigin: "center" });
        // console.log(this.target);
      },
      onDragEnd: function() {
        //console.log("onDragEnd");
        if (!(this.hitTest(l3) ) ) {
          gsap.to(h3, {duration: 0.4, x: this.handxDelta, y: 0, scale: 1.0})
        }
      },
      onDrag: function() {
        if (this.hitTest(l3)) {
          var target1x = l3.getBBox().x
          var target1y = l3.getBBox().y
          var star1x = h3.getBBox().x
          var star1y = h3.getBBox().y
          gsap.to(h3, {duration: 0.4, x:target1x-star1x + that.xdelay, y:target1y-star1y+ that.ydelay, scale:that.endScale })
          gsap.to(r3, {duration: 0.4, opacity: 1.0});
          that.playedPosition("l3");
          gsap.to(t3, {duration: 0.8, opacity: 1.0});
          Draggable.get(h3).disable();
        }
      }
    });
    var h4 = this.$refs['koerper-hand-zuordnung' + this.idNr].querySelector(".h4")
    var l4 = this.$refs['koerper-hand-zuordnung' + this.idNr].querySelector(".l4");
    var r4 = this.$refs['koerper-hand-zuordnung' + this.idNr].querySelector(".r4");
    var t4 = this.$refs['koerper-hand-zuordnung' + this.idNr].querySelector(".t4");
    Draggable.create(h4, {
      bounds:svgbound,
      // bounds:"svg",
      onDragStart: function(){
        //console.log("onDragStart");
        gsap.to(h4, {duration: 0.4, scale: 1.4, transformOrigin: "center" });
        // console.log(this.target);
      },
      onDragEnd: function() {
        //console.log("onDragEnd");
        if (!(this.hitTest(l4) ) ) {
          gsap.to(h4, {duration: 0.4, x: this.handxDelta, y: 0, scale: 1.0})
          
        }
      },
      onDrag: function() {
        if (this.hitTest(l4)) {
          var target1x = l4.getBBox().x
          var target1y = l4.getBBox().y
          var star1x = h4.getBBox().x
          var star1y = h4.getBBox().y
          gsap.to(h4, {duration: 0.4, x:target1x-star1x + that.xdelay, y:target1y-star1y+ that.ydelay, scale:that.endScale })
          gsap.to(r4, {duration: 0.4, opacity: 1.0});
          that.playedPosition("l4");
          gsap.to(t4, {duration: 0.8, opacity: 1.0});
          Draggable.get(h4).disable();
        }
      }
    });
    
    // damit der drag auf demsvg hintergrund funzt
    var svg = this.$refs['koerper-hand-zuordnung' +  this.idNr].querySelector("svg")
    svg.style = "";

  },
}
</script>



<style lang="scss" scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.target {
  fill:#f4f3f2;
}

.stammbaum-container{
  left: 0px;
}

.svg-container {
  display:block;
  position:relative;
  width:1128px;
  background:#ffffffad; 
  margin: 0px auto;
}

// svg
.text {
    font-family: FontRegular;
    font-size: 24px;
    line-height: 20px;
    fill: rgb(58, 57, 57);
    // text-transform: uppercase;
}
</style>