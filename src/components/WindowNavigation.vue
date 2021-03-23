<template>
 <div :ref="'navigation-' + idNr">
    <!-- <div class="window navigation">   -->
        <div class="row" @dragstart="killEvent" @drag="killEvent">
            
            <div class="column" style="width:10px"></div>
            <div class="column " style="width:200px"  > <!-- style="width:200px, margin: 0 0 10px 0 " -->
                <svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 180 44" >
                    <svg:style type="text/css">
                        .st0{fill:#EAE8E3;}
                        .st2{fill:#EAE8E3;}
                        
                        .st3{fill:#EAE8E3;}
                        .st4{font-family:&#39;FontRegular&#39;;}
                        .st5{font-size:30px;}

                        .st6{opacity:0.8;fill:none;stroke:#EAE8E3;}
                        .st7{fill:#0f00;}
                    </svg:style>
                    
                    <line class="st6" x1="121.4" y1="3.5" x2="121.4" y2="39.5"/>
                    <line class="st6" x1="59.4" y1="3.5" x2="59.4" y2="39.5"/>

                    <g id="close" >
                        <path class="st2" translate="20 0" d="M165.9 10.6l-2.6-2.6 -10.4 10.4 -10.4-10.4 -2.6 2.6 10.4 10.4 -10.4 10.4 2.6 2.6 10.4-10.4 10.4 10.4 2.6-2.6 -10.4-10.4L165.9 10.6z"/>
                        <rect @mousedown="closeWindow" @dragstart="killEvent" x="132" y="3" class="st7" width="48" height="40" />
                    </g>
                    <g id="menu">
                        <path class="st2" d="M12.9 31h20v-3h-20V31zM12.9 23h30v-3h-30V23zM12.9 15h23.3v-3h-23.3V15z"/>
                        <rect @mousedown="showMainMenu" x="6" y="3" class="st7" width="48" height="40" :ref="'navigation-mainmenu' + idNr"/>
                    </g>

                    <g id="language">
                        <text transform="matrix(1 0 0 1 71.8636 31.5309)" id="languagetext" :ref="'navigation-language' + idNr" class="st3 st4 st5"> EN </text>
                        <rect @mousedown="switchLanguage" @dragstart="killEvent" @drag="killEvent" x="67" y="3" class="st7" width="50" height="40" />
                    </g>

                </svg>
            </div>
            <div class="column" style="width:60px">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 44" >
                    <svg:style type="text/css" class="undefined">                     
                        .st1{fill:#0f00;}
                        .st2{opacity:1.0;fill:EAE8E3;stroke:#EAE8E3;}
                        .st6{opacity:1.0;fill:EAE8E3;stroke:#EAE8E3;}
                    </svg:style>

                    <g id="back" transform="translate(8,5) rotate(0)" >
                        <!-- <path class="st2" d="M39.9 11.1l-2.6-2.6 -10.4 10.4 -10.4-10.4 -2.6 2.6 10.4 10.4 -10.4 10.4 2.6 2.6 10.4-10.4 10.4 10.4 2.6-2.6 -10.4-10.4L39.9 11.1z"/> -->
                        <path id="path" class="st2" d="M32,16.25H10.65l9.8-9.8L18,4,4,18,18,32l2.45-2.45-9.8-9.8H32v-3.5Z" transform=""/>
                        <rect x="0" y="2" class="st1" width="48" height="40" @mousedown="goBack"/>
                    </g>

                    <line class="st6" x1="53.4" y1="4" x2="53.4" y2="40"/>
                </svg>
            </div>
            
        </div>
    <!-- </div> -->
</div>
</template>



<script>
// import Vue from 'vue'


export default {
    name: 'WindowNavigation',
    props: {
        idName:{
            type: String,
            default: "idname",
        },
        idNr:{
            type: Number,
            default: 0,
        },
    },
    methods: {
        killEvent (e){
            console.log("killEvent");
            e.preventDefault();
            e.stopPropagation();
        },
        switchLanguage(e){
            // console.log("changeLanguage idNr", this.idNr);
            this.$store.commit('switchLanguageByIDM', this.idNr);
            e.stopPropagation()
            // e.preventDefault()
        },
        closeWindow(e){
            // console.log("closeWindow", this.idNr);
            this.$store.commit('closeWindowByIDM', this.idNr);
            var that = this;
            // var t = setTimeout(that.$store.dispatch('resetWindowByID', that.idNr), 1000);
            setTimeout(that.$store.commit('resetWindowByIDM', that.idNr), 1000);
            // this.$store.dispatch('closeWindowByIDM', this.idNr);
            e.stopPropagation()
            //this.$store.commit('setActiveWindowM', iconID); 
        },
        showMainMenu(e){
            // console.log("showMainMenu idNr", this.idNr);
            this.$store.commit('switchMainMenuByIDM', this.idNr); 
            e.stopPropagation()
        },
        goBack(e){
            console.log("Back", this.idNr);
            this.$store.commit('switchBackByIDM', this.idNr); 
            e.stopPropagation()
        }
    },
    computed: {
        getLanguage () {
            // console.log("getLanguage");
            const languageString = this.$store.getters.getOpenWindowsLanguage;
            const languageNr = languageString.charAt(this.idNr-1);
            if (languageNr == 0){
                return "EN"
            } else {
                return "DE"
            }
        },
        watchLanguage () {
            const languageString = this.$store.getters.getOpenWindowsLanguage;
            const languageNr = languageString.charAt(this.idNr-1);
            if (languageNr == 0){
                return "EN"
            } else {
                return "DE"
            }
        }
    },
    watch: {
        watchLanguage (newCount, oldCount) {
            console.log(newCount, oldCount);
            // Our fancy notification (2).
            // console.log(this.$refs);
            const el =  this.$refs['navigation-language' + this.idNr]
            // console.log(el);
            el.textContent = newCount;
        }
    }
}
</script>



<style lang="scss" scoped>
// .window-navigation {
//     position: absolute;
//     // overflow-x:auto; 
//     //  overflow-y: hidden;
//     margin-top: 20px;
//     top: 0px;
//     right: 0px;
//     height: 44px;
//     min-width: 180px;
//     background-color: rgb(240, 0, 0);
// }

.row {
    display: flex;
    flex-direction: row-reverse;
    margin-top: 4px;
    padding-right: 10px;
    // vertical-align: left;
    width: 100%; /*Optional*/
    // table-layout: fixed; /*Optional*/
    border-spacing: 0px; /*Optional*/
}
.column {
    // display: table-cell;
    flex-grow: 0;
    flex-shrink: 1;
    flex-basis: auto
    // margin-right: 40px;
    // background-color: rgb(0, 47, 255); /*Optional*/
}

rect {
    // fill: rgba(255, 166, 0, 0.329);
}
// .row {
//     display: table;
//     margin-top: 4px;
//     margin-right: 10px;
//     vertical-align: left;
//     width: 100%; /*Optional*/
//     // table-layout: fixed; /*Optional*/
//     border-spacing: 0px; /*Optional*/
// }
// .column {
//     display: table-cell;
    
//     // margin-right: 40px;
//     // background-color: rgb(0, 47, 255); /*Optional*/
// }

// .flex-container {
//     display: -ms-flexbox;
//     display: -webkit-flex;
//     display: flex;
//     -webkit-flex-direction: row-reverse;
//     -ms-flex-direction: row-reverse;
//     flex-direction: row-reverse;
//     -webkit-flex-wrap: nowrap;
//     -ms-flex-wrap: nowrap;
//     flex-wrap: nowrap;
//     -webkit-justify-content: flex-start;
//     -ms-flex-pack: start;
//     justify-content: flex-start;
//     -webkit-align-content: stretch;
//     -ms-flex-line-pack: stretch;
//     align-content: stretch;
//     -webkit-align-items: flex-start;
//     -ms-flex-align: start;
//     align-items: flex-start;
//     }

// .flex-item:nth-child(1) {
//     -webkit-order: 0;
//     -ms-flex-order: 0;
//     order: 0;
//     -webkit-flex: 0 1 auto;
//     -ms-flex: 0 1 auto;
//     flex: 0 1 auto;
//     -webkit-align-self: auto;
//     -ms-flex-item-align: auto;
//     align-self: auto;
//     }

// .flex-item:nth-child(2) {
//     -webkit-order: 0;
//     -ms-flex-order: 0;
//     order: 0;
//     -webkit-flex: 0 1 auto;
//     -ms-flex: 0 1 auto;
//     flex: 0 1 auto;
//     -webkit-align-self: auto;
//     -ms-flex-item-align: auto;
//     align-self: auto;
//     }

// .flex-item:nth-child(3) {
//     -webkit-order: 0;
//     -ms-flex-order: 0;
//     order: 0;
//     -webkit-flex: 0 1 auto;
//     -ms-flex: 0 1 auto;
//     flex: 0 1 auto;
//     -webkit-align-self: auto;
//     -ms-flex-item-align: auto;
//     align-self: auto;
//     }


</style>