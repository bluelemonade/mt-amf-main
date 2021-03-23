// Tiere > Wirbeltiere >> Säugetiere >> Primaten >> Große Menschenaffen >> Menschen 
// Qualle > Fisch > Giraffe > Primat > gorilla > human 

<template>
  <!-- v-on:mousemove="updateCoordinates"  -->
  <div class="stammbaum-container" :ref="'stammbaum-leben-spiel' + idNr">
  <link href='https://fonts.googleapis.com/css?family=Signika+Negative:300,400,700' rel='stylesheet' type='text/css'>
  
  <!-- <h2>Stellung des Menschen in der Tierwelt</h2>
  <p>Die Evolution in Kreisen …  <br> Ordne die Symbole der Spezies in der Reihenfolge der evolutionären Entwicklung den Kreisen zu.</p> -->
   <!--  style="enable-background:new 0 0 800 600;"  -->
  <svg version="1.1" class="svg-container" :ref="'stammbaum-leben-spiel-svg' + idNr" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
    viewBox="0 0 800 600" xml:space="preserve">
    
    <!-- <svg:style type="text/css">
      .st0{fill:none;stroke:#4A453F;stroke-width:4;stroke-linecap:round;stroke-miterlimit:10;}
      .st1{fill:#E8B87E;}
      .st2{fill:#E19A60;}
      .st3{fill:#4A453F;}
      .st4{opacity:0.1;fill:#010101;enable-background:new    ;}
      .st5{fill:#F26557;}
      .st6{fill:#FFD55C;}
      .st7{fill:#FFFFFF;}
      .st8{fill:#F15F5B;}
      .st9{fill:#596874;}
      .st10{fill:#50BFEE;}
      .st11{fill:#F7F8F8;}
      .st12{fill:#97A3AB;}
      .st13{fill:none;stroke:#97A3AB;stroke-width:4;stroke-linecap:round;stroke-miterlimit:10;}
      .st14{fill:#5ABD77;}
      .st15{opacity:0.2;fill:#FFFFFF;enable-background:new    ;}
      .st16{fill:none;stroke:#FFFFFF;stroke-width:4;stroke-linecap:round;stroke-miterlimit:10;}
      .st17{fill:#F1A81E;}
      .st18{fill:none;stroke:#A2DDF2;stroke-width:4;stroke-linecap:round;stroke-miterlimit:10;}
      .st19{fill:#E8E8E8;}
      .st20{fill:#A2DDF2;}
      .st21{fill:none;stroke:#596874;stroke-width:8;stroke-linecap:round;stroke-miterlimit:10;}
      .st22{fill:#9ED2A0;}
      .st23{opacity:0.5;fill:#FFFFFF;enable-background:new    ;}
      .st24{fill:none;stroke:#596874;stroke-width:4;stroke-linecap:round;stroke-miterlimit:10;}
      .st25{fill:none;stroke:#50BFEE;stroke-width:4;stroke-linecap:round;stroke-miterlimit:10;}
    </svg:style> -->

    <svg:style>
      .small { 
        font: italic 10px sans-serif; 
        opacity: 0.0;
        }
    </svg:style>


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

    <g stroke="gray" fill="none" stroke-width="2" id="ellipsebg">
      <ellipse cx="440" cy="220" rx="350" ry="210" fill="white" fill-opacity="0.1" style="filter:url(#dropshadow)" />
      <ellipse cx="480" cy="220" rx="300" ry="195" fill="white" fill-opacity="0.2" style="filter:url(#dropshadow)"/>
      <ellipse cx="520" cy="220" rx="250" ry="180" fill="white" fill-opacity="0.3" style="filter:url(#dropshadow)"/>
      <ellipse cx="560" cy="220" rx="200" ry="165" fill="white" fill-opacity="0.4" style="filter:url(#dropshadow)"/>
      <ellipse cx="605" cy="220" rx="140" ry="140" fill="white" fill-opacity="0.5" style="filter:url(#dropshadow)"/>
    </g>

    <!-- <g stroke="000000" fill="orange" stroke-width="0.5" id="text"> -->
      <text x="45"  y="270" class="t0 small" text-anchor="middle" > {{ tiernamen[getLanguageID][0] }} </text>
      <text x="135" y="270" class="t1 small" text-anchor="middle" > {{ tiernamen[getLanguageID][1] }} </text>
      <text x="225" y="270" class="t2 small" text-anchor="middle" inline-size="20"> {{ tiernamen[getLanguageID][2] }} </text>
      <text x="315" y="270" class="t3 small" text-anchor="middle" inline-size="20"> {{ tiernamen[getLanguageID][3] }} </text>
      <text x="415" y="270" class="t4 small" text-anchor="middle" inline-size="20"> {{ tiernamen[getLanguageID][4] }} </text>
      <text x="605" y="270" class="t5 small" text-anchor="middle" inline-size="20"> {{ tiernamen[getLanguageID][5] }} </text>
    <!-- </g> -->

    <g stroke="f1f1f1" fill="black" fill-opacity="0.2" stroke-width="0.5" id="targetcircle">
      <circle cx="45"  cy="220" r="40" class="c0" />
      <circle cx="135" cy="220" r="40" class="c1" />
      <circle cx="225" cy="220" r="40" class="c2" />
      <circle cx="315" cy="220" r="40" class="c3" />
      <circle cx="415" cy="220" r="40" class="c4" />
      <circle cx="605" cy="220" r="40" class="c5" />
    </g>

    <image xlink:href="../assets/stammbaum-leben-icon/qualle.svg" :x="getPosition(0)" y="500" height="100px" width="100px"  class="icon e0"></image>
    <image xlink:href="../assets/stammbaum-leben-icon/fisch.svg" :x="getPosition(1)" y="500" height="100px" width="100px"  class="icon e1"></image>
    <image xlink:href="../assets/stammbaum-leben-icon/giraffe.svg" :x="getPosition(2)" y="500" height="100px" width="100px" class="icon e2"></image>
    <image xlink:href="../assets/stammbaum-leben-icon/primat.svg" :x="getPosition(3)" y="500" height="100px" width="100px" class="icon e3"></image>
    <image xlink:href="../assets/stammbaum-leben-icon/gorilla.svg" :x="getPosition(4)" y="500" height="100px" width="100px" class="icon e4"></image>
    <image xlink:href="../assets/stammbaum-leben-icon/human.svg" :x="getPosition(5)" y="500" height="100px" width="100px" class="icon e5"></image>

  </svg>

  <!-- <p v-on:mousemove="updateCoordinates">
    Coordinates: {{ x }} / {{ y }} <br />
  </p>
  <div class="info">Move your mouse around</div> -->

  </div>
</template>


<script>
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import { shuffle } from  "../../src/functions.js";

export default {
  name: 'Stammbaum',
  data: function () {
     return {
      counter: 0,
      x: 0,
      y: 0,
      text1: "hallo",
      endScale: 0.6,
      imagePosArray: [50, 160, 270,380, 490, 600],
      rightPositionArray: [],
      started: false,
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
      tiernamen: {
              type: Array,
              default: () => [
                        ["Tiere","Wirbeltiere","Säugetiere","Primaten","Menschenaffen","Menschen"],
                        ["Tiere en","Wirbeltiere en","Säugetiere en","Primaten en","Große Menschenaffen en","Menschen en"]
                      ]
              }
 },
  created() {
      this.imagePosArray = shuffle(this.imagePosArray);
      console.log(this.imagePosArray);
      this.started = false;
      // this.updateFrame();
      console.log("StammbaumLebenSpiel created", this.idNr);
  },
  computed: {
    getLanguageID () { // xxx
        console.log("getLanguageID");
        const languageString = this.$store.getters.getOpenWindowsLanguage;
        const languageNr = languageString.charAt(this.idNr-1);
        if (languageNr == "0"){
            return 0
        } else {
            return 1
        }
    },
  },
  methods: {
    playedPosition(wert){
      this.rightPositionArray.push(wert);
      if (this.rightPositionArray.length == 6){
        console.log("du hast das rätsel des lebens gelöst");
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
    if ( this.$refs['stammbaum-leben-spiel' + this.idNr] == undefined ) {
      if (this.started == false) {
        window.requestAnimationFrame(this.updateFrame);
      }
      console.log("fehler");
      return;
    }
    // console.log("get svg ref")
    // var svg = this.$refs['stammbaum-leben-spiel' + this.idNr].querySelector(".svg-container");
    // console.log("svg", svg)
    // const e1 = this.$refs['stammbaum-leben-spiel' + this.idNr].querySelector(".e1");
    // var matrix = svg.getScreenCTM();
    // var point = svg.createSVGPoint();
    // var svgPoint = point.matrixTransform(svg.getScreenCTM().inverse());
    // var e1Point  = point.matrixTransform(e1.getScreenCTM().inverse());
    // this.$refs['stammbaum-leben-spiel' +  this.idNr].querySelector(".info").innerHTML = `
    //   Screen X = ${this.x}<br/>
    //   Screen Y = ${this.y}<br/><br/>

    //   SVG X = ${svgPoint.x.toFixed(1)}<br/>
    //   SVG Y = ${svgPoint.y.toFixed(1)}<br/><br/>

    //   e1 X = ${e1Point.x.toFixed(1)}<br/>
    //   e1 Y = ${e1Point.y.toFixed(1)}<br/><br/>
    //   `

      // window.requestAnimationFrame(this.updateFrame);
      this.started = true;
      // console.log("frameUpdate");
      }
   },
  mounted() {
    // if ('stammbaum-leben-spiel' + this.idNr == "class3"){
    gsap.registerPlugin(Draggable);
    // }
  
    var that = this;
    console.log("mounted start", this.idNr, this.$refs);
    // console.log(this.$refs['stammbaum-leben-spiel' + this.idNr]);
    var e0 = this.$refs['stammbaum-leben-spiel' +  this.idNr].querySelector(".e0")
    // console.log("e0",e0);
    var c0 = this.$refs['stammbaum-leben-spiel' +  this.idNr].querySelector(".c0");
    // console.log("c0",c0);
    var t0 = this.$refs['stammbaum-leben-spiel' +  this.idNr].querySelector(".t0");
    // console.log("t0",t0);
    // console.log("first elements referenced");
    var svgbound = this.$refs['stammbaum-leben-spiel-svg' + this.idNr];


    Draggable.create(e0, {
      bounds:svgbound,
      // bounds:"svg",
      onDragStart: function(){
        console.log("onDragStart");
        gsap.to(e0, {duration: 0.4, scale: 1.4, transformOrigin: "center" });
        // console.log(this.target);
      },
      onDragEnd: function() {
        console.log("onDragEnd");
        if (!(this.hitTest(c0) ) ) {
          gsap.to(e0, {duration: 0.4, x: 0, y: 0, scale: 1.0})
        }
      },
      onDrag: function() {
        if (this.hitTest(c0)) {
          console.log("hittest 0");
          var target1x = c0.getBBox().x
          var target1y = c0.getBBox().y
          var star1x = e0.getBBox().x
          var star1y = e0.getBBox().y
          // console.log("1");
          gsap.to(e0, {duration: 0.4, x:target1x-star1x, y:target1y-star1y, scale: that.endScale })
          // console.log("2");
           gsap.to(c0, {duration: 0.4, opacity: 0.0});
          // console.log("3");
          gsap.to(t0, {duration: 0.4, opacity: 1.0});
          that.playedPosition("c0");
          Draggable.get(e0).disable();
        }
      }
    });
    var e1 = this.$refs['stammbaum-leben-spiel' + this.idNr].querySelector(".e1")
    var c1 = this.$refs['stammbaum-leben-spiel' + this.idNr].querySelector(".c1");
    var t1 = this.$refs['stammbaum-leben-spiel' + this.idNr].querySelector(".t1");
    Draggable.create(e1, {
      bounds:svgbound,
      // bounds:"svg",
      onDragStart: function(){
        // console.log("onDragStart");
        gsap.to(e1, {duration: 0.4, scale: 1.4, transformOrigin: "center" });
        // console.log(this.target);
      },
      onDragEnd: function() {
        // console.log("onDragEnd");
        if (!(this.hitTest(c1) ) ) {
          gsap.to(e1, {duration: 0.4, x: 0, y: 0, scale: 1.0})
        }
      },
      onDrag: function() {
        if (this.hitTest(c1)) {
          // console.log("hittest c1");
          var target1x = c1.getBBox().x
          var target1y = c1.getBBox().y
          var star1x = e1.getBBox().x
          var star1y =  document.querySelector(".e1").getBBox().y
          gsap.to(e1, {duration: 0.4, x:target1x-star1x, y:target1y-star1y, scale:that.endScale })
          gsap.to(c1, {duration: 0.4, opacity: 0.0});
          gsap.to(t1, {duration: 0.4, opacity: 1.0});
          that.playedPosition("c1");
          Draggable.get(e1).disable();
        }
      }
    });
    var e2 = this.$refs['stammbaum-leben-spiel' + this.idNr].querySelector(".e2")
    var c2 = this.$refs['stammbaum-leben-spiel' + this.idNr].querySelector(".c2");
    var t2 = this.$refs['stammbaum-leben-spiel' + this.idNr].querySelector(".t2");
    Draggable.create(e2, {
      bounds:svgbound,
      // bounds:"svg",
      onDragStart: function(){
        // console.log("onDragStart");
        gsap.to(e2, {duration: 0.4, scale: 1.4, transformOrigin: "center" });
        // console.log(this.target);
      },
      onDragEnd: function() {
        // console.log("onDragEnd");
        if (!(this.hitTest(c2) ) ) {
          gsap.to(e2, {duration: 0.4, x: 0, y: 0, scale: 1.0})
        }
      },
      onDrag: function() {
        if (this.hitTest(c2)) {
          var target1x = c2.getBBox().x
          var target1y = c2.getBBox().y
          var star1x = e2.getBBox().x
          var star1y = e2.getBBox().y
          gsap.to(e2, {duration: 0.4, x:target1x-star1x, y:target1y-star1y, scale:that.endScale})
          gsap.to(c2, {duration: 0.4, opacity: 0.0});
          gsap.to(t2, {duration: 0.4, opacity: 1.0});
          that.playedPosition("c2");
          Draggable.get(e2).disable();
        }
      }
    });
    var e3 = this.$refs['stammbaum-leben-spiel' + this.idNr].querySelector(".e3")
    var c3 = this.$refs['stammbaum-leben-spiel' + this.idNr].querySelector(".c3");
    var t3 = this.$refs['stammbaum-leben-spiel' + this.idNr].querySelector(".t3");
    Draggable.create(e3, {
      bounds:svgbound,
      // bounds:"svg",
      onDragStart: function(){
        // console.log("onDragStart");
        gsap.to(e3, {duration: 0.4, scale: 1.4, transformOrigin: "center" });
        // console.log(this.target);
      },
      onDragEnd: function() {
        // console.log("onDragEnd");
        if (!(this.hitTest(c3) ) ) {
          gsap.to(e3, {duration: 0.4, x: 0, y: 0, scale: 1.0})
        }
      },
      onDrag: function() {
        if (this.hitTest(c3)) {
          var target1x = c3.getBBox().x
          var target1y = c3.getBBox().y
          var star1x = e3.getBBox().x
          var star1y = e3.getBBox().y
          gsap.to(e3, {duration: 0.4, x:target1x-star1x, y:target1y-star1y, scale:that.endScale })
          gsap.to(c3, {duration: 0.4, opacity: 0.0});
          gsap.to(t3, {duration: 0.4, opacity: 1.0});
          that.playedPosition("c3");
          Draggable.get(e3).disable();
        }
      }
    });
    var e4 = this.$refs['stammbaum-leben-spiel' + this.idNr].querySelector(".e4")
    var c4 = this.$refs['stammbaum-leben-spiel' + this.idNr].querySelector(".c4");
    var t4 = this.$refs['stammbaum-leben-spiel' + this.idNr].querySelector(".t4");
    Draggable.create(e4, {
      bounds:svgbound,
      // bounds:"svg",
      onDragStart: function(){
        // console.log("onDragStart");
        gsap.to(e4, {duration: 0.4, scale: 1.4, transformOrigin: "center" });
        // console.log(this.target);
      },
      onDragEnd: function() {
        // console.log("onDragEnd");
        if (!(this.hitTest(c4) ) ) {
          gsap.to(e4, {duration: 0.4, x: 0, y: 0, scale: 1.0})
        }
      },
      onDrag: function() {
        if (this.hitTest(c4)) {
          var target1x = c4.getBBox().x
          var target1y = c4.getBBox().y
          var star1x = e4.getBBox().x
          var star1y = e4.getBBox().y
          gsap.to(e4, {duration: 0.4, x:target1x-star1x, y:target1y-star1y, scale:that.endScale })
          gsap.to(c4, {duration: 0.4, opacity: 0.0});
          gsap.to(t4, {duration: 0.4, opacity: 1.0});
          that.playedPosition("c4");
          Draggable.get(e4).disable();
        }
      }
    });
    var e5 = this.$refs['stammbaum-leben-spiel' + this.idNr].querySelector(".e5")
    var c5 = this.$refs['stammbaum-leben-spiel' + this.idNr].querySelector(".c5");
    var t5 = this.$refs['stammbaum-leben-spiel' + this.idNr].querySelector(".t5");
    Draggable.create(e5, {
      bounds:svgbound,
      // bounds:"svg",
      onDragStart: function(){
        // console.log("onDragStart");
        gsap.to(e5, {duration: 0.4, scale: 1.4, transformOrigin: "center" });
        // console.log(this.target);
      },
      onDragEnd: function() {
        // console.log("onDragEnd");
        if (!(this.hitTest(c5) ) ) {
          gsap.to(e5, {duration: 0.4, x: 0, y: 0, scale: 1.0})
        }
      },
      onDrag: function() {
        if (this.hitTest(c5)) {
          var target1x = c5.getBBox().x
          var target1y = c5.getBBox().y
          var star1x = e5.getBBox().x
          var star1y = e5.getBBox().y
          gsap.to(e5, {duration: 0.4, x:target1x-star1x, y:target1y-star1y, scale:that.endScale })
          gsap.to(c5, {duration: 0.4, opacity: 0.0});
          gsap.to(t5, {duration: 0.4, opacity: 1.0});
          that.playedPosition("c5");
          Draggable.get(e5).disable();
        }
      }
    });
    // damit der drag auf demsvg hintergrund funzt
    var svg = this.$refs['stammbaum-leben-spiel' +  this.idNr].querySelector("svg")
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

/* svg {
  display:block;
  position:relative;
  width:800px;
  background:#f8f7f7;
  margin:20px auto;
} */
.stammbaum-container{
  left: 0px;

}
.svg-container {
  display:block;
  position:relative;
  width:1000px;
  /* background:#f8f7f7; */
  margin: 20px auto;
}
</style>
