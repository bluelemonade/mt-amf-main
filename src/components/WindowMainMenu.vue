<template>
<div :ref="'mainmenu-' + idNr">
    <transition name="fade"> 
        <div v-if="isMainMenuOpen == true" class="window-mainmenu" > 
            <div class="grid-mainmenu" >
                
                <div class="grid-menu7">
                    <div class="grid-header-container">
                        <div class="grid-header-text">
                            <h3 @mousedown="closeMainMenuWindow"> {{ menunamen.menu[getActiveThema-1][getLanguage][0] + " " + menunamen.menu[getActiveThema-1][getLanguage][1] + " " + menunamen.menu[getActiveThema-1][getLanguage][2] }} </h3>
                            <div class="grid-header-line"></div>
                        </div>

                        <div class="grid-header-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32.388" height="32.388" viewBox="0 0 32.388 32.388">
                                <g id="Komponente_27_1" data-name="Komponente 27 – 1" transform="translate(1.414 1.414)">
                                    <line id="Linie_3" data-name="Linie 3" x1="29.56" y2="29.56" fill="none" stroke="#fff" stroke-width="4"/>
                                    <line id="Linie_4" data-name="Linie 4" x2="29.56" y2="29.56" fill="none" stroke="#fff" stroke-width="4"/>
                                    <rect @mousedown="closeMainMenuWindow" x="-10" y="0" width="60" height="40" fill="#fff0" />
                                </g>
                            </svg>
                        </div>
                    </div>
                    <!-- <div style="left: 100px, top: 100px"> </div>  -->
                    <!-- <div style="float: left, top:64px, width: 60px, height: 2px, background-color:#ffffff"></div> -->
                    <!-- <div style="float: right">Close </div>  -->
                </div>

                <div class="grid-menu1" @mousedown="changeMainMenu(1)" :style="switchStyle('1')">
                        <MainMenuIcon 
                            :imageNr="0 + menuNumBigger(1)" 
                            :t1="menunamen.menu[0 + menuNumBigger(0)][getLanguage][0]"
                            :t2="menunamen.menu[0 + menuNumBigger(0)][getLanguage][1]"
                            :t3="menunamen.menu[0 + menuNumBigger(0)][getLanguage][2]"
                        ></MainMenuIcon>  <!-- :imagePath="getImage(0 + menuNumBigger(0))"  -->
                </div>

                <div class="grid-menu2" @mousedown="changeMainMenu(2)" :style="switchStyle('2')">
                    <MainMenuIcon 
                            :imageNr="1 + menuNumBigger(1)" 
                            :t1="menunamen.menu[1 + menuNumBigger(1)][getLanguage][0]"
                            :t2="menunamen.menu[1 + menuNumBigger(1)][getLanguage][1]"
                            :t3="menunamen.menu[1 + menuNumBigger(1)][getLanguage][2]"
                    ></MainMenuIcon>   
                </div>

                <div class="grid-menu3" @mousedown="changeMainMenu(3)" :style="switchStyle('3')">
                    <MainMenuIcon 
                            :imageNr="2 + menuNumBigger(1)" 
                            :t1="menunamen.menu[2 + menuNumBigger(2)][getLanguage][0]"
                            :t2="menunamen.menu[2 + menuNumBigger(2)][getLanguage][1]"
                            :t3="menunamen.menu[2 + menuNumBigger(2)][getLanguage][2]"
                    ></MainMenuIcon>  
                </div>

                <div class="grid-menu4" @mousedown="changeMainMenu(4)" :style="switchStyle('4')">
                    <MainMenuIcon 
                            :imageNr="3 + menuNumBigger(3)" 
                            :t1="menunamen.menu[3 + menuNumBigger(3)][getLanguage][0]"
                            :t2="menunamen.menu[3 + menuNumBigger(3)][getLanguage][1]"
                            :t3="menunamen.menu[3 + menuNumBigger(3)][getLanguage][2]"
                    ></MainMenuIcon>  
                </div>

                <div class="grid-menu5" @mousedown="changeMainMenu(5)" :style="switchStyle('5')">
                    <MainMenuIcon 
                            :imageNr="4 + menuNumBigger(4)" 
                            :t1="menunamen.menu[4 + menuNumBigger(4)][getLanguage][0]"
                            :t2="menunamen.menu[4 + menuNumBigger(4)][getLanguage][1]"
                            :t3="menunamen.menu[4 + menuNumBigger(4)][getLanguage][2]"
                    ></MainMenuIcon>  
                </div>

                <div class="grid-menu6" @mousedown="changeMainMenu(6)" :style="switchStyle('6')">
                    <MainMenuIcon 
                            :imageNr="5 + menuNumBigger(5)" 
                            :t1="menunamen.menu[5 + menuNumBigger(5)][getLanguage][0]"
                            :t2="menunamen.menu[5 + menuNumBigger(5)][getLanguage][1]"
                            :t3="menunamen.menu[5 + menuNumBigger(5)][getLanguage][2]"
                    ></MainMenuIcon>  
                </div>

            </div>

            <!-- <transition name="fade"> -->
            <!-- <p>  hallo -->
                <!-- {{  getMenuID }} -->
            <!-- </p> -->
           
        </div>
    </transition>
</div>
</template>



<script>
import Vue from 'vue'
import MainMenuIcon from  "./MainMenuIcon.vue" //  "MainMenuIcon.vue";


export default {
    name: 'WindowNavigation',
    components:{
        MainMenuIcon,
    },
    props: {
        idName:{
            type: String,
            default: "idname",
        },
        idNr:{
            type: Number,
            default: 0,
        },
        // open:{
        //     type: Boolean,
        //     default: false,
        // },
    },
    data: function() {
      return {
            menunamen: "",
            open: false,
            imageList: [
                        './assets/windowicons-shape/windowicon-entstehung.png',
                        './assets/windowicons-shape/windowicon-alter.png',
                        './assets/windowicons-shape/windowicon-koerper.png',
                        './assets/windowicons-shape/windowicon-stammbaum-des-lebens.png',
                        './assets/windowicons-shape/windowicon-stammbaum.png',
                        './assets/windowicons-shape/windowicon-fundorte.png',
                        './assets/windowicons-shape/windowicon-quiz.png'
                        ],
            // svgs: [
            //         `
            //             <svg version="1.1" :ref="'svg1-' + idNr" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 600 500" xml:space="preserve">
            //                 <g id="group1" name="g1" transform="translate(350, 200) rotate(0) scale(1.5)" >
            //                     <path class="blob1" d="M63,-11.8C71.7,6.5,62.1,39.4,42.4,52.2C22.8,65.1,-7,57.9,-27.5,42C-48,26.1,-59.2,1.6,-53.1,-13C-47,-27.6,-23.5,-32.4,1.8,-33C27.1,-33.6,54.2,-30,63,-11.8Z" transform="translate(0 0) scale(2.0)"  />
            //                     <path class="blob2 circlepulse" d="M41.8,-55.5C52.5,-40.9,58.4,-26.1,64.2,-8.9C70.1,8.2,76.1,27.8,70.4,43.6C64.8,59.4,47.6,71.4,31,71.3C14.5,71.3,-1.3,59.1,-18.1,52C-34.9,44.9,-52.6,42.8,-61.8,32.8C-70.9,22.8,-71.5,5.1,-68.5,-12C-65.4,-29.2,-58.7,-45.6,-46.7,-59.9C-34.7,-74.3,-17.3,-86.5,-0.9,-85.5C15.6,-84.4,31.2,-70.1,41.8,-55.5Z" transform="translate(0 0) scale(1.2)" />
            //                     <image xlink:href="../assets/icons/entstehung-icon.png" x="0" y="0" height="200px" width="200px" transform="translate(-100,-130)"></image>
            //                     <text x="-200" y="100" id="t11" text-anchor="left" class="icon-text-big"> {{ menunamen.menu[0][getLanguage][0] }} </text>
            //                     <text x="-200" y="140" id="t12" text-anchor="left" class="icon-text-small"> {{ menunamen.menu[0][getLanguage][1] }} </text>
            //                 </g>
            //             </svg>
            //          `,`
            //             <svg version="1.1" :ref="'svg2-' + idNr"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 600 500" xml:space="preserve">
            //                 <g id="group1" name="g1" transform="translate(400, 200) rotate(0) scale(1.5)" >
            //                     <path class="blob1" d="M45.9,161.4c-40-34.2-48.6-48.3-24.1-83.5s66.9-59.6,108-34.8s60.4,46.4,61.1,71.8c0.7,25.4,7.6,40.1-46.4,55.7S86,195.7,45.9,161.4z" transform="translate(-100 -100) scale(1.0)"/>
            //                     <path class="blob2 circlepulse" d="M189.2,109.3c3.8,39.5-51.9,30.8-79.5,45.6s-73.3,5.6-90.2-44.6s18.2-59.2,67.1-82.1S185.3,69.8,189.2,109.3z" transform="translate(-100 -100) scale(1.0)"/>
            //                     <image xlink:href="../assets/icons/alter-icon.png" x="0" y="0" height="200px" width="200px" transform="translate(-100,-100)"></image>
            //                     <text x="-200" y="100" id="t21" text-anchor="left" class="icon-text-big"> {{ menunamen.menu[1][getLanguage][0] }}  </text>
            //                     <text x="-200" y="140" id="t22" text-anchor="left" class="icon-text-small"> {{ menunamen.menu[1][getLanguage][1] }}   </text>
            //                 </g>
            //             </svg>
            //          `,`
            //             <svg version="1.1" :ref="'svg3-' + idNr" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 600 500" xml:space="preserve">
            //                 <g id="group1" name="g1" transform="translate(350, 200) rotate(0) scale(1.5)" >
            //                     <path class="blob1" d="M41.2,183.4c-64.7-26.9-27.7-74.9-1.8-112.1s47.7-57.7,91.2-31.5s66.1,95.4,63.1,114.5C190.7,173.3,105.9,210.3,41.2,183.4z" transform="translate(-100 -100) scale(1.0)"/>
            //                     <path class="blob2 circlepulse" d="M15.8,76.4c0.3-37.7,43-19.5,79.6-35.2s69.8,2,80.7,51.1c10.9,49.1-23,54.1-71.5,70.9S15.6,114.1,15.8,76.4z" transform="translate(-100 -100) scale(1.0)"/>
            //                     <image xlink:href="../assets/icons/koerper-icon.png" x="0" y="0" height="200px" width="200px" transform="translate(-100,-100)"></image>
            //                     <text x="-200" y="100" id="t31" text-anchor="left" class="icon-text-big"> {{ menunamen.menu[2].de[0] }}  </text>
            //                     <text x="-200" y="140" id="t32" text-anchor="left" class="icon-text-small"> {{ menunamen.menu[2][getLanguage][1] }}   </text>
            //                     <text x="-200" y="180" id="t33" text-anchor="left" class="icon-text-small"> {{ menunamen.menu[2][getLanguage][2] }}   </text>
            //                 </g>
            //             </svg> 
            //          ` ,`
            //             <svg version="1.1" :ref="'svg4-' + idNr" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 600 500" xml:space="preserve">
            //                 <g id="group1" name="g1" transform="translate(350, 200) rotate(0) scale(1.5)" >
            //                     <path class="blob1" d="M49.4,-63.9C59,-50.8,58.4,-30.5,56.8,-13.8C55.2,2.8,52.6,15.9,48.3,32.2C44,48.4,37.9,68,26,73.1C14,78.2,-3.8,68.8,-19.2,60C-34.6,51.3,-47.6,43.1,-53.2,31.6C-58.8,20.1,-57.1,5.2,-54.5,-9.6C-51.9,-24.4,-48.4,-39,-39.2,-52.1C-30,-65.3,-15,-77.1,2.5,-80C19.9,-82.9,39.8,-77,49.4,-63.9Z" transform="translate(50 50) scale(2.0)" />
            //                     <path class="blob2 circlepulse" d="M81.7,50.9c1.8,18.2-26.3,20.3-36.4,23.3c-10.1,3-31.1,5.9-38.9-17.1s8.4-27.2,30.9-37.8S79.9,32.7,81.7,50.9z" transform="translate(-100 -100) scale(2.0)"/>
            //                     <image xlink:href="../assets/icons/stammbaum-icon.png" x="0" y="0" height="200px" width="200px" transform="translate(-100,-150) scale(1.5)"></image>
            //                     <text x="-200" y="100" id="t41" text-anchor="left" class="icon-text-big"> {{ menunamen.menu[3][getLanguage][0] }} </text>
            //                     <text x="-200" y="140" id="t42" text-anchor="left" class="icon-text-small"> {{ menunamen.menu[3][getLanguage][1] }} </text>
            //                 </g>
            //             </svg> 
            //          `,`
            //             <svg version="1.1" :ref="'svg4-' + idNr" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 600 500" xml:space="preserve">
            //                 <g id="group1" name="g1" transform="translate(350, 200) rotate(0) scale(1.5)" >
            //                     <path class="blob1" d="M49.4,-63.9C59,-50.8,58.4,-30.5,56.8,-13.8C55.2,2.8,52.6,15.9,48.3,32.2C44,48.4,37.9,68,26,73.1C14,78.2,-3.8,68.8,-19.2,60C-34.6,51.3,-47.6,43.1,-53.2,31.6C-58.8,20.1,-57.1,5.2,-54.5,-9.6C-51.9,-24.4,-48.4,-39,-39.2,-52.1C-30,-65.3,-15,-77.1,2.5,-80C19.9,-82.9,39.8,-77,49.4,-63.9Z" transform="translate(50 50) scale(2.0)" />
            //                     <path class="blob2 circlepulse" d="M81.7,50.9c1.8,18.2-26.3,20.3-36.4,23.3c-10.1,3-31.1,5.9-38.9-17.1s8.4-27.2,30.9-37.8S79.9,32.7,81.7,50.9z" transform="translate(-100 -100) scale(2.0)"/>
            //                     <image xlink:href="../assets/icons/stammbaum-icon.png" x="0" y="0" height="200px" width="200px" transform="translate(-100,-150) scale(1.5)"></image>
            //                     <text x="-200" y="100" id="t41" text-anchor="left" class="icon-text-big"> {{ menunamen.menu[4][getLanguage][0] }} </text>
            //                     <text x="-200" y="140" id="t42" text-anchor="left" class="icon-text-small"> {{ menunamen.menu[4][getLanguage][1] }} </text>
            //                 </g>
            //             </svg> 
            //          `,`
            //             <svg version="1.1" :ref="'svg5-' + idNr" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 600 500" xml:space="preserve">
            //             <g id="group1" name="g1" transform="translate(400, 200) rotate(0) scale(1.5)" >
            //                 <path class="blob1" d="M41.2,183.4c-64.7-26.9-27.7-74.9-1.8-112.1s47.7-57.7,91.2-31.5s66.1,95.4,63.1,114.5C190.7,173.3,105.9,210.3,41.2,183.4z"  transform="translate(-100 -100) scale(1.0)"/>
            //                 <path class="blob2 circlepulse" d="M15.8,76.4c0.3-37.7,43-19.5,79.6-35.2s69.8,2,80.7,51.1c10.9,49.1-23,54.1-71.5,70.9S15.6,114.1,15.8,76.4z"  transform="translate(-100 -100) scale(1.0)"/>
            //                 <image xlink:href="../assets/icons/fundorte-icon.png" x="0" y="0" height="200px" width="200px" transform="translate(-100,-100)"></image>
            //                 <text x="-200" y="100" id="t51" text-anchor="left" class="icon-text-big"> {{ menunamen.menu[5][getLanguage][0] }}  </text>
            //                 <text x="-200" y="140" id="t52" text-anchor="left" class="icon-text-small"> {{ menunamen.menu[5][getLanguage][1] }}   </text>
            //             </g>
            //         </svg> 
            //          `,`
            //             <svg version="1.1" :ref="'svg6-' + idNr" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 600 500" xml:space="preserve">
            //             <g id="group1" name="g1" transform="translate(350, 200) rotate(0) scale(1.5)" >
            //                 <path class="blob1" d="M77.4,168.3C20.8,144.8,8,105.5,14.8,80s82.4-40.5,129.7-17.1s45,43.4,42.2,60.2C184,139.9,134,191.8,77.4,168.3z" transform="translate(-100,-100)"/>
            //                 <path class="blob2" d="M10.2,91.1c0.3-43.9,13.7-40.7,56.3-58.9s94.3,1.7,107,58.9c12.7,57.2-25.7,42-82.2,61.6S9.9,135.1,10.2,91.1z" transform="translate(-100,-100)"/>
            //                 <image xlink:href="../assets/icons/quiz-icon.png" x="0" y="0" height="200px" width="200px" transform="translate(-100,-100)"></image>
            //                 <text x="-200" y="100" id="t61" text-anchor="left" class="icon-text-big"> {{ menunamen.menu[6][getLanguage][0] }}  </text>
            //                 <text x="-200" y="140" id="t62" text-anchor="left" class="icon-text-small"> {{ menunamen.menu[6][getLanguage][1] }}   </text>
            //             </g>
            //         </svg>  `
            // ]
      };
  },
    computed: {
        getLanguage () { // mixin
            console.log("windowmainmenu getLanguageXXXXXXXXXX");
            const languageString = this.$store.getters.getOpenWindowsLanguage;
            const languageNr = languageString.charAt(this.idNr-1);
            if (languageNr == 0){
                return "de"
            } else {
                return "en"
            }
        },
        getActiveThema(){
            // console.log("windowmainmenu getActiveThema");
            const menuString = this.$store.getters.getOpenWindowsMenu;
            return menuString.charAt(this.idNr-1);
        },
        // setOpen(bl){
        //     this.open = bl;
        // },
        isMainMenuOpen () {
            console.log("getMainMenuOpen computed fensternr", this.idNr);
            const mainmenuString = this.$store.getters.getOpenWindowsMainMenu;
            // console.log("mainmenuString", mainmenuString);
            const mainmenuNr = mainmenuString.charAt(this.idNr-1);
            // console.log("mainmenuNr", mainmenuNr);
            if (mainmenuNr == "0"){
                // console.log("mainmenuNr", mainmenuNr);
                // this.setOpen(false)
                return false
            } else {
                // console.log("mainmenuNr", mainmenuNr);
                // this.setOpen(true)
                // this.fillMenu();
                return true
            }
        }
    },
    methods: {
        getSVG(pos){
            return this.svgs[pos];
        },
        getImage(pos){
            // console.log(this.imageList[pos]);
            return this.imageList[pos];
        },
        closeMainMenuWindow(e){
            // console.log("closeWindow", this.idNr);
            this.$store.commit('closeMainMenuWindow', this.idNr); 
            // this.$store.dispatch('closeWindowByIDM', this.idNr);
            e.stopPropagation()
            //this.$store.commit('setActiveWindowM', iconID); 
        },
        // getText () {
        //     return "hallo du depp";
        // },
        // fillMenu () {
        //     console.log("x0");
        //     // console.log(el);
        //     var el =  this.$refs['svg1-' + this.idNr]
        //     console.log(el);
        //     console.log("x1");
        //     // menunamen setzen
        //     el.getElementById('t11').textContent = this.menunamen.menu[0].de[0];
        //     el.getElementById('t12').textContent = this.menunamen.menu[0].de[1];
        //     el =  this.$refs['svg2-' + this.idNr]
        //     console.log("x1");
        //     el.getElementById('t21').textContent = this.menunamen.menu[1].de[0];
        //     el.getElementById('t22').textContent = this.menunamen.menu[1].de[1];
            
        //     el =  this.$refs['svg3-' + this.idNr]
        //     console.log("x2");
        //     el.getElementById('t31').textContent = this.menunamen.menu[2].de[0];
        //     el.getElementById('t32').textContent = this.menunamen.menu[2].de[1];
        //     el.getElementById('t33').textContent = this.menunamen.menu[2].de[2];
        
        //     el =  this.$refs['svg4-' + this.idNr]
        //     console.log("x3");
        //     el.getElementById('t41').textContent = this.menunamen.menu[3].de[0];
        //     el.getElementById('t42').textContent = this.menunamen.menu[3].de[1];
            
        //     el =  this.$refs['svg5-' + this.idNr]
        //     console.log("x4");
        //     el.getElementById('t51').textContent = this.menunamen.menu[4].de[0];
        //     el.getElementById('t52').textContent = this.menunamen.menu[4].de[1];
            
        //     el =  this.$refs['svg6-' + this.idNr]
        //     console.log("x5");
        //     el.getElementById('t61').textContent = this.menunamen.menu[5].de[0];
        //     el.getElementById('t62').textContent = this.menunamen.menu[5].de[1];
        //     console.log("x6");
        // },
        menuNumBigger(menu){
            // console.log("menuNumBigger", menu, this.getActiveThema);
            if (menu < (this.getActiveThema-1) ){
                return 0;
            }else {
                return 1;
            }
        },
        switchStyle (menu){
            if ( this.getActiveThema == menu ) {
                 return {
                    // transition: "all 1.0s ease",
                    opacity: 1.0, // 0.2,
                    // transitionDelay: "0.05s",
                    // left: "" + (this.infoPoints[this.getActiveInfo].x2 ) + "px",
                    // top: this.infoPoints[this.getActiveInfo].y2  + "px"
                };
            } else {
                return {
                    // transition: "all 1.0s ease",
                    opacity: 1.0,
                    // transitionDelay: "0.3s",
                    // left: "" + (this.infoPoints[this.getActiveInfo].x2 ) + "px",
                    // top: this.infoPoints[this.getActiveInfo].y2  + "px"
                    // left: "1150px",
                    // top: "112px"
                };
            }
        },
        changeMainMenu (value){
            console.log("changeMainMenu", value);
            if (value > (this.getActiveThema-1) ){
                value++;
            }
            this.$store.commit('changeMenuByWindow', [ this.idNr, value ] ); 
        }
    },
    mounted() {
            this.$http.get('./static/menu-namen.json').then(response => {
            console.log("!!!!!  menunamen wurde geladen! !!!!", this.idNr)
            this.menunamen = response.body;
            // console.log(this.menunamen.menu[0].de[0]);
            // console.log(this.$refs);
        }, response => {
            // console.log(response);
            console.log("!!!!! menunamen wurde nicht geladen! !!!!!")
            this.endload = true;
        });
    },
}
</script>



<style lang="scss" scoped>
.window-mainmenu {
    position: absolute;
    top: 100px;
    left: 100px;
    margin: 24px 24px 24px 24px;
    width: 1192px;
    height: 912px;
    background-color: $windowsMainMenuBackColor;
}

.grid-mainmenu {
    display: grid;
    grid-template-columns: repeat(3, 33,3%);
    grid-template-rows: 10% repeat(2, 45%);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    align-items: center;
    justify-items: center;
    height: 100%;
    width: 100%;
}

.grid-menu1 { 
    grid-area: 2 / 1 / 3 / 2;
    width: 320px;
    height: 240px;
    // display: block;
    // margin: auto;
    display: flex; 
    justify-content: center; 
    align-items: center;
    // justify-self: center;
    // background-color: green;
}
.grid-menu2 { 
    grid-area: 2 / 2 / 3 / 3;
    width: 320px;
    height: 240px;
    display: flex; 
    justify-content: center; 
    align-items: center;
    // background-color: green;
}
.grid-menu3 { 
    grid-area: 2 / 3 / 2 / 4;
    width: 320px;
    height: 240px;
    display: flex; 
    justify-content: center; 
    align-items: center;
    // background-color: green;
}
.grid-menu4 { 
    grid-area: 3 / 1 / 4 / 2;
    width: 320px;
    height: 240px;
    display: flex; 
    justify-content: center; 
    align-items: center;

    // background-color: green;
}
.grid-menu5 { 
    grid-area: 3 / 2 / 4 / 3;
    width: 320px;
    height: 240px;
    display: flex; 
    justify-content: center; 
    align-items: center;
    // background-color: green;
}
.grid-menu6 { 
    grid-area: 3 / 3 / 4 / 4;
    width: 320px;
    height: 240px;
    display: flex; 
    justify-content: center; 
    align-items: center;
    // background-color: green;
}
.grid-menu7 { 
    grid-area: 1 / 1 / 2 / 4; 
    width: 100%;
    height: 100%;

    // background-color: orange;
}

p {
    font-size: 40px;
    color: rgb(0, 38, 255);
}

.blob1, .blobi {fill: $iconblob;}
.blob2 {fill: $iconblob2;}

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


h3 {
    font-family: FontBold;
    font-size: 18px;
    line-height: 30px;
    color: #fff;
}

.grid-header-container {
  display: grid;
  grid-template-columns: 32px 1028px 100px;
  grid-template-rows: 32px 54px;
  gap: 0px 0px;
  grid-template-areas:
    ". . ."
    ". text icon";
}

.grid-header-text { 
    grid-area: text; 
}
.grid-header-icon { 
    grid-area: icon;
    align-self: center;
  justify-self: end;
}
.grid-header-line {
    width: 60px;
    height: 2px; 
    background-color: #ffffff;
}

</style>