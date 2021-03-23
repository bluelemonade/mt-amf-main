//  {{ language_de[0] }} 
// <text x="-200" y="150" id="t02" text-anchor="middle" class="icon-text-small"> {{ menunamen.menu[0].de[0]menunamen.menu[0].de[1] }} </text>
// <text x="-200" y="100" id="t01" text-anchor="middle" class="icon-text-big"> {{ menunamen.menu[0].de[0]  }} </text>

<template>

    <transition name="fade">
    <div id="svg-container"  @click="passEvent" v-show="isIconLayerActive == true">
        <svg version="1.1" ref="iconlayer" id="wiggles" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 2840 2160" style="enable-background:new 0 0 2840 2160;" xml:space="preserve">

            <g id="group1" name="g1" transform="translate(1920,1080) rotate(0)" >
                <path class="blob1" d="M63,-11.8C71.7,6.5,62.1,39.4,42.4,52.2C22.8,65.1,-7,57.9,-27.5,42C-48,26.1,-59.2,1.6,-53.1,-13C-47,-27.6,-23.5,-32.4,1.8,-33C27.1,-33.6,54.2,-30,63,-11.8Z" transform="translate(0 0) scale(2.0)"  />
                <path class="blob2 circlepulse" d="M41.8,-55.5C52.5,-40.9,58.4,-26.1,64.2,-8.9C70.1,8.2,76.1,27.8,70.4,43.6C64.8,59.4,47.6,71.4,31,71.3C14.5,71.3,-1.3,59.1,-18.1,52C-34.9,44.9,-52.6,42.8,-61.8,32.8C-70.9,22.8,-71.5,5.1,-68.5,-12C-65.4,-29.2,-58.7,-45.6,-46.7,-59.9C-34.7,-74.3,-17.3,-86.5,-0.9,-85.5C15.6,-84.4,31.2,-70.1,41.8,-55.5Z" transform="translate(0 0) scale(1.2)" />
                <image xlink:href="../assets/icons/entstehung-icon.png" x="0" y="0" height="200px" width="200px" transform="translate(-100,-130)"></image>
                <text x="-200" y="100" id="t11" text-anchor="left" class="icon-text-big"> yyy </text>
                <text x="-200" y="140" id="t12" text-anchor="left" class="icon-text-small"> xxx  </text>
                <rect @click="clickIcon" name="group1" x="-180" y="-100" width="300" height="250" class="rect" ></rect>
            </g>

            <g id="group2" transform="translate(1920,1080) rotate(0)">
                <!-- <path class="blob1" d="M41.8,-55.5C52.5,-40.9,58.4,-26.1,64.2,-8.9C70.1,8.2,76.1,27.8,70.4,43.6C64.8,59.4,47.6,71.4,31,71.3C14.5,71.3,-1.3,59.1,-18.1,52C-34.9,44.9,-52.6,42.8,-61.8,32.8C-70.9,22.8,-71.5,5.1,-68.5,-12C-65.4,-29.2,-58.7,-45.6,-46.7,-59.9C-34.7,-74.3,-17.3,-86.5,-0.9,-85.5C15.6,-84.4,31.2,-70.1,41.8,-55.5Z" transform="translate(0 0) scale(2.0)" /> -->
                <path class="blob1" d="M45.9,161.4c-40-34.2-48.6-48.3-24.1-83.5s66.9-59.6,108-34.8s60.4,46.4,61.1,71.8c0.7,25.4,7.6,40.1-46.4,55.7S86,195.7,45.9,161.4z" transform="translate(-100 -100) scale(1.0)"/>
                <path class="blob2 circlepulse" d="M189.2,109.3c3.8,39.5-51.9,30.8-79.5,45.6s-73.3,5.6-90.2-44.6s18.2-59.2,67.1-82.1S185.3,69.8,189.2,109.3z" transform="translate(-100 -100) scale(1.0)"/>
                <image xlink:href="../assets/icons/alter-icon.png" x="0" y="0" height="200px" width="200px" transform="translate(-100,-100)"></image>
                <text x="-200" y="100" id="t21" text-anchor="left" class="icon-text-big"> yyy </text>
                <text x="-200" y="140" id="t22" text-anchor="left" class="icon-text-small"> xxx  </text>
                <rect @click="clickIcon" name="group2" x="-180" y="-100" width="300" height="250" class="rect" ></rect>
            </g>
           
            <g id="group3" transform="translate(1920,1080) rotate(0)">
                <!-- <path class="blob1" d="M53.7,-63.5C69.5,-50.7,82.2,-33.7,84.6,-15.6C87,2.6,79.2,21.9,68.3,38.1C57.4,54.4,43.4,67.6,27.2,72.7C11,77.7,-7.5,74.5,-23,67.1C-38.5,59.8,-51.1,48.3,-55.9,34.8C-60.8,21.3,-57.8,5.8,-54.4,-8.9C-51.1,-23.7,-47.3,-37.7,-38.1,-51.8C-29,-65.8,-14.5,-79.7,2.2,-82.4C18.9,-85,37.9,-76.4,53.7,-63.5Z" transform="translate(0 0) scale(2.0)" /> -->
                <path class="blob1" d="M41.2,183.4c-64.7-26.9-27.7-74.9-1.8-112.1s47.7-57.7,91.2-31.5s66.1,95.4,63.1,114.5C190.7,173.3,105.9,210.3,41.2,183.4z" transform="translate(-100 -100) scale(1.0)"/>
                <path class="blob2 circlepulse" d="M15.8,76.4c0.3-37.7,43-19.5,79.6-35.2s69.8,2,80.7,51.1c10.9,49.1-23,54.1-71.5,70.9S15.6,114.1,15.8,76.4z" transform="translate(-100 -100) scale(1.0)"/>
                <image xlink:href="../assets/icons/koerper-icon.png" x="0" y="0" height="200px" width="200px" transform="translate(-100,-100)"></image>
                <text x="-200" y="100" id="t31" text-anchor="left" class="icon-text-big"> yyy </text>
                <text x="-200" y="140" id="t32" text-anchor="left" class="icon-text-small"> xxx  </text>
                <text x="-200" y="180" id="t33" text-anchor="left" class="icon-text-small"> xxx  </text>
                <rect @click="clickIcon" name="group3" x="-180" y="-100" width="300" height="250" class="rect" ></rect>
            </g>

            <g id="group4" transform="translate(1920,1080) rotate(0)">
                <path class="blob1" d="M49.4,-63.9C59,-50.8,58.4,-30.5,56.8,-13.8C55.2,2.8,52.6,15.9,48.3,32.2C44,48.4,37.9,68,26,73.1C14,78.2,-3.8,68.8,-19.2,60C-34.6,51.3,-47.6,43.1,-53.2,31.6C-58.8,20.1,-57.1,5.2,-54.5,-9.6C-51.9,-24.4,-48.4,-39,-39.2,-52.1C-30,-65.3,-15,-77.1,2.5,-80C19.9,-82.9,39.8,-77,49.4,-63.9Z" transform="translate(50 50) scale(2.0)" />
                <!-- <path class="blob1" d="M18.5,80.6C1.5,71-3.9,58.4,7.4,42.2s23.1-20.1,42-8.7s30.1,10,30.4,21.7c0.3,11.7-1.3,21.2-16.2,26.5S35.6,90.2,18.5,80.6z" transform="translate(-100 -100) scale(2.0)"/> -->
                <path class="blob2 circlepulse" d="M15.8,76.4c0.3-37.7,43-19.5,79.6-35.2s69.8,2,80.7,51.1c10.9,49.1-23,54.1-71.5,70.9S15.6,114.1,15.8,76.4z"  transform="translate(-100 -100) scale(1.0)"/>
                <image xlink:href="../assets/icons/stammbaum-icon.png" x="0" y="0" height="200px" width="200px" transform="translate(-100,-150) scale(1.5)"></image>
                <text x="-200" y="100" id="t41" text-anchor="left" class="icon-text-big"> yyy </text>
                <text x="-200" y="140" id="t42" text-anchor="left" class="icon-text-small"> xxx  </text>
                <rect @click="clickIcon" name="group4" x="-180" y="-100" width="300" height="250" class="rect" ></rect>
            </g>

            <g id="group5" transform="translate(1920,1080) rotate(0)">
                <path class="blob1" d="M49.4,-63.9C59,-50.8,58.4,-30.5,56.8,-13.8C55.2,2.8,52.6,15.9,48.3,32.2C44,48.4,37.9,68,26,73.1C14,78.2,-3.8,68.8,-19.2,60C-34.6,51.3,-47.6,43.1,-53.2,31.6C-58.8,20.1,-57.1,5.2,-54.5,-9.6C-51.9,-24.4,-48.4,-39,-39.2,-52.1C-30,-65.3,-15,-77.1,2.5,-80C19.9,-82.9,39.8,-77,49.4,-63.9Z" transform="translate(50 50) scale(2.0)" />
                <!-- <path class="blob1" d="M18.5,80.6C1.5,71-3.9,58.4,7.4,42.2s23.1-20.1,42-8.7s30.1,10,30.4,21.7c0.3,11.7-1.3,21.2-16.2,26.5S35.6,90.2,18.5,80.6z" transform="translate(-100 -100) scale(2.0)"/> -->
                <path class="blob2 circlepulse" d="M15.8,76.4c0.3-37.7,43-19.5,79.6-35.2s69.8,2,80.7,51.1c10.9,49.1-23,54.1-71.5,70.9S15.6,114.1,15.8,76.4z"  transform="translate(-100 -100) scale(1.0)"/>
                <image xlink:href="../assets/icons/stammbaum-icon.png" x="0" y="0" height="200px" width="200px" transform="translate(-100,-150) scale(1.5)"></image>
                <text x="-200" y="100" id="t51" text-anchor="left" class="icon-text-big"> yyy </text>
                <text x="-200" y="140" id="t52" text-anchor="left" class="icon-text-small"> xxx  </text>
                <rect @click="clickIcon" name="group5" x="-180" y="-100" width="300" height="250" class="rect" ></rect>
            </g>

            <g id="group6" transform="translate(1920,1080) rotate(0)">
                <!-- <path class="blob1" d="M44.5,-49.3C59.3,-40.7,73.9,-28.1,80.4,-11.3C86.8,5.6,85,26.8,73.5,38.3C61.9,49.8,40.7,51.5,23.7,51.9C6.8,52.3,-5.8,51.4,-21.9,49.9C-38.1,48.5,-57.8,46.6,-67.7,36C-77.6,25.3,-77.7,5.8,-74.7,-13.5C-71.8,-32.8,-65.7,-52,-52.7,-60.9C-39.8,-69.9,-19.9,-68.7,-2.5,-65.7C14.9,-62.7,29.7,-57.9,44.5,-49.3Z" transform="translate(0 0) scale(2.0)" /> -->
                <path class="blob1" d="M41.2,183.4c-64.7-26.9-27.7-74.9-1.8-112.1s47.7-57.7,91.2-31.5s66.1,95.4,63.1,114.5C190.7,173.3,105.9,210.3,41.2,183.4z"  transform="translate(-100 -100) scale(1.0)"/>
                <path class="blob2 circlepulse" d="M15.8,76.4c0.3-37.7,43-19.5,79.6-35.2s69.8,2,80.7,51.1c10.9,49.1-23,54.1-71.5,70.9S15.6,114.1,15.8,76.4z"  transform="translate(-100 -100) scale(1.0)"/>
                <image xlink:href="../assets/icons/fundorte-icon.png" x="0" y="0" height="200px" width="200px" transform="translate(-100,-100)"></image>
                <text x="-200" y="100" id="t61" text-anchor="left" class="icon-text-big"> yyy </text>
                <text x="-200" y="140" id="t62" text-anchor="left" class="icon-text-small"> xxx  </text>
                <rect @click="clickIcon" name="group6" x="-180" y="-100" width="300" height="250" class="rect" ></rect>
            </g>

            <g id="group7" transform="translate(1920,1080) rotate(0)">
                <path class="blob1" d="M77.4,168.3C20.8,144.8,8,105.5,14.8,80s82.4-40.5,129.7-17.1s45,43.4,42.2,60.2C184,139.9,134,191.8,77.4,168.3z" transform="translate(-100,-100)"/>
                <path class="blob2" d="M10.2,91.1c0.3-43.9,13.7-40.7,56.3-58.9s94.3,1.7,107,58.9c12.7,57.2-25.7,42-82.2,61.6S9.9,135.1,10.2,91.1z" transform="translate(-100,-100)"/>
                <image xlink:href="../assets/icons/quiz-icon.png" x="0" y="0" height="200px" width="200px" transform="translate(-100,-100)"></image>
                <text x="-200" y="100" id="t71" text-anchor="left" class="icon-text-big"> yyy </text>
                <text x="-200" y="140" id="t72" text-anchor="left" class="icon-text-small"> xxx  </text>
                <rect @click="clickIcon" name="group7" x="-180" y="-100" width="300" height="250" class="rect" ></rect>
            </g>

            <g id="impressum1" transform="translate(1950,1900) rotate(0)">
                <path class="blobi" d="M42.6,137.3c-40.1-48.8-7.8-70.1,10.8-90s74-51.9,109.4,20.1s-20.5,80.5-31.1,94.4C121.1,175.9,82.7,186.1,42.6,137.3z" transform="translate(0 0) scale(0.9)"/>
                <g id="icon" transform="translate(-121 -177)">
                    <g id="noun_rules_1219370" transform="translate(2573.49 2018.133)">
                        <path id="Pfad_1627" class="st3" d="M-2345.8-1798h-0.3c0,0-0.1,0-0.1,0h-24.7c-2.5,0-4.6,2-4.6,4.6v23.4h-1.3c0,0-0.1,0-0.1,0
                            c-2.6,0.2-4.4,2.5-4.2,5c0.2,2.2,2,4,4.2,4.2c0,0,0.1,0,0.1,0h22.8c2.6,0,4.6-2.1,4.6-4.6v-23.3h3.6c2.6,0,4.7-2,4.7-4.6
                            s-2-4.7-4.6-4.7C-2345.7-1798-2345.7-1798-2345.8-1798L-2345.8-1798z M-2376.5-1761.7c-2,0-3.6-1.6-3.6-3.6c0-2,1.6-3.6,3.6-3.6
                            h19.6c-2,1.6-2.4,4.5-0.8,6.5c0.2,0.3,0.5,0.5,0.8,0.8H-2376.5z M-2350.4-1765.4c0,2-1.6,3.6-3.6,3.6s-3.6-1.6-3.6-3.6
                            c0-2,1.6-3.6,3.6-3.6c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5h-20.5v-23.4c0-2,1.6-3.6,3.6-3.6h22.2
                            c-1.1,0.9-1.7,2.2-1.8,3.6L-2350.4-1765.4L-2350.4-1765.4z M-2345.8-1789.8h-3.6v-3.6c0-2,1.6-3.6,3.6-3.6c2,0,3.6,1.6,3.6,3.6
                            C-2342.1-1791.4-2343.7-1789.8-2345.8-1789.8L-2345.8-1789.8z"/>
                        <rect id="Rechteck_29" x="-2370.5" y="-1777.1" class="st3" width="2" height="1"/>
                        <rect id="Rechteck_30" x="-2364" y="-1777.1" class="st3" width="9" height="1"/>
                        <rect id="Rechteck_31" x="-2370.5" y="-1783.1" class="st3" width="2" height="1"/>
                        <rect id="Rechteck_32" x="-2364" y="-1783.1" class="st3" width="9" height="1"/>
                        <rect id="Rechteck_33" x="-2370.5" y="-1789.1" class="st3" width="2" height="1"/>
                        <rect id="Rechteck_34" x="-2364" y="-1789.1" class="st3" width="9" height="1"/>
                    </g>  
                </g>
                 <text x="37" y="110" id="t62" text-anchor="left" class="icon-text-extrasmall"> Impressum </text>
                 <rect @click="clickImpressum" name="impressum1" x="0" y="0" width="170" height="170" class="rect" ></rect>
            </g>  

            <g id="impressum2" transform="translate(850,280) rotate(180)">
                <path class="blobi" d="M42.6,137.3c-40.1-48.8-7.8-70.1,10.8-90s74-51.9,109.4,20.1s-20.5,80.5-31.1,94.4C121.1,175.9,82.7,186.1,42.6,137.3z" transform="translate(0 0) scale(0.9)"/>
                <g id="icon" transform="translate(-121 -177)">
                    <g id="noun_rules_1219370" transform="translate(2573.49 2018.133)">
                        <path id="Pfad_1627" class="st3" d="M-2345.8-1798h-0.3c0,0-0.1,0-0.1,0h-24.7c-2.5,0-4.6,2-4.6,4.6v23.4h-1.3c0,0-0.1,0-0.1,0
                            c-2.6,0.2-4.4,2.5-4.2,5c0.2,2.2,2,4,4.2,4.2c0,0,0.1,0,0.1,0h22.8c2.6,0,4.6-2.1,4.6-4.6v-23.3h3.6c2.6,0,4.7-2,4.7-4.6
                            s-2-4.7-4.6-4.7C-2345.7-1798-2345.7-1798-2345.8-1798L-2345.8-1798z M-2376.5-1761.7c-2,0-3.6-1.6-3.6-3.6c0-2,1.6-3.6,3.6-3.6
                            h19.6c-2,1.6-2.4,4.5-0.8,6.5c0.2,0.3,0.5,0.5,0.8,0.8H-2376.5z M-2350.4-1765.4c0,2-1.6,3.6-3.6,3.6s-3.6-1.6-3.6-3.6
                            c0-2,1.6-3.6,3.6-3.6c0.3,0,0.5-0.2,0.5-0.5c0-0.3-0.2-0.5-0.5-0.5h-20.5v-23.4c0-2,1.6-3.6,3.6-3.6h22.2
                            c-1.1,0.9-1.7,2.2-1.8,3.6L-2350.4-1765.4L-2350.4-1765.4z M-2345.8-1789.8h-3.6v-3.6c0-2,1.6-3.6,3.6-3.6c2,0,3.6,1.6,3.6,3.6
                            C-2342.1-1791.4-2343.7-1789.8-2345.8-1789.8L-2345.8-1789.8z"/>
                        <rect id="Rechteck_29" x="-2370.5" y="-1777.1" class="st3" width="2" height="1"/>
                        <rect id="Rechteck_30" x="-2364" y="-1777.1" class="st3" width="9" height="1"/>
                        <rect id="Rechteck_31" x="-2370.5" y="-1783.1" class="st3" width="2" height="1"/>
                        <rect id="Rechteck_32" x="-2364" y="-1783.1" class="st3" width="9" height="1"/>
                        <rect id="Rechteck_33" x="-2370.5" y="-1789.1" class="st3" width="2" height="1"/>
                        <rect id="Rechteck_34" x="-2364" y="-1789.1" class="st3" width="9" height="1"/>
                    </g>  
                </g>
                 <text x="37" y="110" id="t62" text-anchor="left" class="icon-text-extrasmall"> Impressum </text>
                 <rect @click="clickImpressum" name="impressum2" x="0" y="0" width="170" height="170" class="rect" ></rect>
            </g>  

        </svg>
    </div>
    </transition>

</template>



<script>
import { gsap } from "gsap";
import Vue from 'vue'
import VueResource from "vue-resource";
// import store from './store/global-store'
Vue.use(VueResource);


export default {
data() {
    return {
        menunamen: "",
        circleShapes: [],
        previousEndPoints: [],
        endPoints: [],
        radius: 300,
        deltaRotation: 30,
        deltaVertikal: 1400,
        deltaHorizontal: 700,
        borderLeft: (2840/2) - 1100,
        borderRight: (2840/2) + 1100,
        borderTop: 1080 - 600,
        borderBottom: 1080 + 600,
        currPositions: [0,1,2,3,4,5],
        oldPositions: [0,1,2,3,4,5],
        iconPositionsArray: [
            [427, 219],
            [480, 443],
            [705, 422],
            [1209, 687],
            [962, 450],
            [1083,18],
            [1296, 23],
            [1088, 257],
            [1313, 255],
            [1199, 464],
            [462, 658],
            [704 , 654],
            [691, 871],
            [1000, 871],
            [940, 665],
            [429, 875],
            [655, 148],
            [851, 18],
            [851, 245]
        ]
    }
},
mounted() {
    // gsap.registerPlugin(Draggable);
    this.initFrame();
},
created() {
    this.$http.get('./static/menu-namen.json').then(response => {
        // console.log("!!!!!  menunamen wurde geladen! !!!!")
        this.menunamen = response.body;
        // console.log(this.menunamen.menu[0].de[0]);

        // menunamen setzen
        document.getElementById('t11').textContent = this.menunamen.menu[0].de[0];
        document.getElementById('t12').textContent = this.menunamen.menu[0].de[1];
        
        document.getElementById('t21').textContent = this.menunamen.menu[1].de[0];
        document.getElementById('t22').textContent = this.menunamen.menu[1].de[1];
        
        document.getElementById('t31').textContent = this.menunamen.menu[2].de[0];
        document.getElementById('t32').textContent = this.menunamen.menu[2].de[1];
        document.getElementById('t33').textContent = this.menunamen.menu[2].de[2];
        
        document.getElementById('t41').textContent = this.menunamen.menu[3].de[0];
        document.getElementById('t42').textContent = this.menunamen.menu[3].de[1];
        
        document.getElementById('t51').textContent = this.menunamen.menu[4].de[0];
        document.getElementById('t52').textContent = this.menunamen.menu[4].de[1];
        
        document.getElementById('t61').textContent = this.menunamen.menu[5].de[0];
        document.getElementById('t62').textContent = this.menunamen.menu[5].de[1];

        document.getElementById('t71').textContent = this.menunamen.menu[6].de[0];
        document.getElementById('t72').textContent = this.menunamen.menu[6].de[1];

    }, response => {
        console.log(response);
        console.log("!!!!! menunamen wurde nicht geladen! !!!!!")
        this.endload = true;
    });
},
computed: {
    isIconLayerActive () {
      // console.log("isIconLayerActive", this.$store.getters.isIconLayerActive)
      return this.$store.getters.isIconLayerActive;
    },
    watchIcons () {
        const iconsString = this.$store.getters.getOpenWindowsMenu;
        return iconsString
    }
},
methods: {
    passEvent (){
        // console.log("click on svg div");
        // e.passEvent();
    },
    clickIcon (e){
        // console.log("clickIcon", e);
        // console.log(e.target.attributes.name.nodeValue);
        const groupID = "#" + e.target.attributes.name.nodeValue;
        // console.log(groupID);
        const iconID = groupID.replace('#group','');
        // console.log(iconID);
        // var fadeOut = document.querySelector(groupclass);
        // var fadeOut = this.$refs["iconlayer"].querySelector(groupclass);

        // checken was im store steht, kann man die npch anklicken
        // self.$store.dispatch('resetAppTimeout',false); 
        if (this.$store.getters.getWindowCanOpen == true ){
            //this.$store.dispatch('setActiveWindow', iconID); 
            this.$store.commit('setActiveWindowM', iconID); 
            gsap.to(groupID, 0.5, {opacity: 0.0}); 
        }
        // gsap.to(fadeOut, 2.0, {opacity: 0.0}); 
    },
    clickImpressum (e){
        // console.log("clickImpressum", e);
        // console.log(e.target.attributes.name.nodeValue);
        const groupID = "#" + e.target.attributes.name.nodeValue;
        // console.log(groupID);
        const iconID = groupID.replace('#impressum','');
        console.log(iconID);
        // var fadeOut = document.querySelector(groupclass);
        // var fadeOut = this.$refs["iconlayer"].querySelector(groupclass);

        // checken was im store steht, kann man die npch anklicken
        // if (this.$store.getters.getWindowCanOpen == true ){
        //     //this.$store.dispatch('setActiveWindow', iconID); 
        //     this.$store.commit('setActiveWindowM', iconID); 
        //      gsap.to(groupID, 0.5, {opacity: 0.0}); 
        // }

        // gsap.to(fadeOut, 2.0, {opacity: 0.0}); 
    },
    initFrame() {
        // positionen der icons
        for (i = 0; i < this.iconPositionsArray.length; i++) { 
            this.iconPositionsArray[i][0] = this.iconPositionsArray[i][0]*2 - 200;
            this.iconPositionsArray[i][1] = this.iconPositionsArray[i][1]*2 + 100;
        }
        this.currPositions= [0,1,2,3,4,5,6];

        this.circleShapes = document.querySelectorAll("#group1, #group2, #group3, #group4, #group5, #group6, #group7");
        gsap.set("#group1", {transformOrigin:"center center"});
        gsap.set("#group2", {transformOrigin:"center center"});
        gsap.set("#group3", {transformOrigin:"center center"});
        gsap.set("#group4", {transformOrigin:"center center"});
        gsap.set("#group5", {transformOrigin:"center center"});
        gsap.set("#group6", {transformOrigin:"center center"});
        gsap.set("#group7", {transformOrigin:"center center"});

        for (var i = 0; i < this.circleShapes.length; i++) {
            this.firstMovement(this.circleShapes[i], i);
            this.endPoints.push([0, 0]);
            this.previousEndPoints.push([0, 0]);
        }

        // console.log(this.endPoints)
        // var pulse1 = document.querySelectorAll(".circlepulse");
        // gsap.to(pulse1, 1, {scale: 1.5, yoyoEase:true, yoyo: true, repeat:-1, repeatDelay:1}); 
        // gsap.to(pulse1, 3, {rotation: 360, repeat:-1, repeatDelay:0, yoyoEase:true, yoyo: true}); 

        var blob1 = document.querySelectorAll(".blob1");
        gsap.set(".blob1", {transformOrigin:"center center"});
        for (i = 0; i < blob1.length; i++) {
            gsap.to(blob1[i], this.random(30, 50), {scale: this.random(1.2, 1.5), yoyoEase:true, yoyo: true, repeat:-1, repeatDelay:1}); 
            gsap.to(blob1[i], this.random(80, 120), {rotation: 360, repeat:-1, repeatDelay:0, yoyoEase:true, yoyo: true}); 
        }

        var blob2 = document.querySelectorAll(".blob2");
        gsap.set(".blob2", {transformOrigin:"center center"});
        for (i = 0; i < blob2.length; i++) {
            gsap.to(blob2[i], this.random(30, 60), {scale: this.random(1.0, 1.4), yoyoEase:true, yoyo: true, repeat:-1, repeatDelay:1}); 
            //gsap.to(blob2[i], this.random(50, 70), {rotation: -360, repeat:-1, repeatDelay:0, yoyoEase:true, yoyo: true}); 
        }

        var blobi = document.querySelectorAll(".blobi");
        gsap.set(".blobi", {transformOrigin:"center center"});
        for (i = 0; i < blobi.length; i++) {
            gsap.to(blobi[i], this.random(30, 60), {scale: this.random(1.0, 1.2), yoyoEase:true, yoyo: true, repeat:-1, repeatDelay:1});
            gsap.to(blobi[i], this.random(40, 60), {rotation: 360, repeat:-1, repeatDelay:0, yoyoEase:true, yoyo: true}); 
            //gsap.to(blob2[i], this.random(50, 70), {rotation: -360, repeat:-1, repeatDelay:0, yoyoEase:true, yoyo: true}); 
        }
        

    },
    firstMovement(element, i) {
        gsap.to(element, this.random(1, 2.8), {x: this.iconPositionsArray[i][0], y: this.iconPositionsArray[i][1], delay: 1, ease:"elastic", onComplete:this.randomMovement, onCompleteParams:[element, i]});
    },
    // firstMovement(element, i) {
    //     gsap.to(element, this.random(1, 2.8), {x: this.random( this.borderLeft , this.borderRight), y: this.random(this.borderTop, this.borderBottom), delay: 1, ease:"elastic", onComplete:this.randomMovement, onCompleteParams:[element, i]});
    // },
    randomMovement(element, arrayPos) { 
        if (element!=0){
            // return false;
        }
        // console.log("randomMovement", arrayPos);
        this.oldPositions[arrayPos] = parseInt(this.currPositions[arrayPos]);

        var newPos = false;
        var max = this.iconPositionsArray.length;
        while (newPos == false) {
            // newPos = true;
            // randomArrayElement(_array)
            var randomPos = Math.floor(Math.random() *max);
            // console.log(max, randomPos);
            if ( ( this.currPositions.indexOf(randomPos) == -1 ) && ( this.oldPositions.indexOf(randomPos) == -1 ) ) {
                this.currPositions[arrayPos] = randomPos;
                //console.log(this.oldPositions.toString(), this.currPositions.toString() );
                newPos = true;
            }
            
        }

       

        var newPoint = this.iconPositionsArray[randomPos];
        // var drehung = 0;

        //console.log(newPoint);
        if (newPoint[1] > 1080){
            var drehung = this.random (0 - this.deltaRotation, 0 + this.deltaRotation);
        } else {
            drehung = this.random (180 -this.deltaRotation, 180 + this.deltaRotation);
        }
        gsap.to(element, this.random(1.5, 2.5), {x: newPoint[0], y: newPoint[1], rotation: drehung,  delay: this.random(4, 10), ease:"power2.inout", onComplete:this.randomMovement, onCompleteParams:[element, arrayPos]});
        // gsap.to(element, this.random(1.5, 2.5), {x: this.checkRandom(-1400, 1400), y: this.checkRandom(700, -700), delay: this.random(4, 20), ease:"power2.inout", onComplete:this.randomMovement, onCompleteParams:[element, arrayPos]});
    },
     randomMovemenOld(element, arrayPos) { 
        if (element!=0){
            return false;
        }
        // console.log("randomMovement", arrayPos);
        
        // xxx problem: neuer positionswert wird erst nach einiger zeit angefahren...
        // xxx macht es sinn die alten und neuen werte zu checken... also, d.h. es gibt eine oldEndPoints die auch ausgeschlossen wird????
        var isInside = true;
        var doBreak = false;
        while (isInside == true) {
            // console.log("isInside = true")
            var newPoint = [ this.random(this.borderLeft , this.borderRight), this.random( this.borderTop, this.borderBottom) ];
            this.previousEndPoints[arrayPos][0] = this.endPoints[arrayPos][0];
            this.previousEndPoints[arrayPos][1] = this.endPoints[arrayPos][1];
            // console.log(this.previousEndPoints, this.endPoints );
            // console.log("next try for", arrayPos);
            // durch alle punkte ausser dem aktuellen, obwohl man kann auch den chekcen
            for (var i = 0; i < this.endPoints.length; i++) {
                if ( (this.checkPointInCircle(this.endPoints[i][0], this.endPoints[i][1], newPoint[0], newPoint[1], this.radius) == true) || (this.checkPointInCircle(this.previousEndPoints[i][0], this.previousEndPoints[i][1], newPoint[0], newPoint[1], this.radius) == true) ){
                    // console.log("point inside", i);
                    // console.log( newPoint[0], newPoint[1] , ">>", this.endPoints[arrayPos][0], this.endPoints[arrayPos][0])
                    // console.log( newPoint[0], newPoint[1] , ">>", this.previousEndPoints[arrayPos][0], this.previousEndPoints[arrayPos][0])
                    doBreak = true
                    break;
                }
            }
            if (doBreak == false){
                // console.log("isInside = false")
                isInside = false; 
            } else {
                doBreak = false
            }
        }

        this.endPoints[arrayPos][0] = newPoint[0];
        this.endPoints[arrayPos][1] = newPoint[1];
        if (newPoint[1] > 1080){
            var drehung = this.random (0 - this.deltaRotation, 0 + this.deltaRotation);
        } else {
            drehung = this.random (180 -this.deltaRotation, 180 + this.deltaRotation);
        }
        gsap.to(element, this.random(1.5, 2.5), {x: newPoint[0], y: newPoint[1], rotation: drehung,  delay: this.random(4, 10), ease:"power2.inout", onComplete:this.randomMovement, onCompleteParams:[element, arrayPos]});
        // gsap.to(element, this.random(1.5, 2.5), {x: this.checkRandom(-1400, 1400), y: this.checkRandom(700, -700), delay: this.random(4, 20), ease:"power2.inout", onComplete:this.randomMovement, onCompleteParams:[element, arrayPos]});
    },
    checkPointInCircle(cx, cy, px, py, r) { // kreisx, kreisx, pointx, pointy , radius
        // console.log( ( (x - a) * (x - a) ) +  ((y - b) * (y - b) ));
        if  ( Math.sqrt (  ( (px - cx) * (px - cx) ) + ( (py - cy) * (py - cy) ) ) <  r ) {
            console.log("inside");
            return true; 
        } else {
            return false; 
        }
    },
    // checkPointInCircle(a, b, x, y, r) { // kreisx, kreisx, pointx, pointy , radius
    //     // console.log( ( (x - a) * (x - a) ) +  ((y - b) * (y - b) ));
    //     if ( (x - a) * (x - a) +  (y - b) * (y - b) <= ( r * r) ) {
    //         // console.log("inside");
    //         return true; 
    //     } else {
    //         return false; 
    //     }
    // }, 
    checkRandom(min, max){
        return this.random(min, max);
    },
    random(min, max) {
        
        // for (var i = 0; i < this.circleShapes.length; i++) {
        //     console.log(this.circleShapes[i].transform);
        // }
        if (max == null) { 
            max = min; min = 0; 
        }
        return Math.random() * (max - min) + min;
    },
    randomArrayElement(_array){
        return _array[Math.floor(Math.random() * _array.length)];
    }
},
watch: {
    watchIcons (newIcons, oldIcons) {
        // console.log("watchIcons", newIcons, oldIcons);

        // step durch alle icons und einblenden
        for (var i=0; i < newIcons.length; i++){
            if ( (newIcons.charAt(i) == 0) && ( oldIcons.charAt(i) > 0 ) ){
                const iconNr = oldIcons.charAt(i);
                gsap.to("#group" + iconNr, 0.5, {opacity: 1.0}); 
            }
        }
    }
}
    // getBigText () {
    //     return "hey";
    // }
}
</script>



<style lang="scss" scoped >
#svg-container{
    top: 0px;
    left: 500px;
    width: 2840px;
    height: 2160px;
    position: absolute;
    // background-color: #00000022;
}

/* .background-color{
    fill:#707070;
} */

.blob1, .blobi {fill: $iconblob;}
.blob2 {fill: $iconblob2;}


.rect{fill: #ffffff00;
        stroke: orange};
// .circle1{fill:#55555544;}
// .circle2{fill:#77777744;}
// .circle3{fill:#99999944;}
// .circle4{fill:#BBBBBB44;}
// .circle5{fill:#DDDDDD44;}
// .circle6{fill:#FFFFFF44;}

// .circlepulse{fill:$iconblob2;}
/* .puls{fill:#eeff00;} */

.icon-text-big{
    font-family: "FontBold";
    fill: $icontext;
    font-size: 48px;
}

.icon-text-small{
    font-family: "FontLight";
    font-size: 34px;
    fill: $icontext;
}

.icon-text-extrasmall{
    font-family: "FontLight";
    font-size: 20px;
    fill: $icontext;
}

.st3{fill:#EAE8E3;stroke:#EAE8E3;stroke-width:0.5;}
</style>