<template>
 <div :ref="'navigation-' + idNr">
    
        <div class="row" @dragstart="killEvent" @drag="killEvent">
            
            <div class="column" style="width:10px"></div>
            <div class="column " style="width:50px"  > <!-- style="width:200px, margin: 0 0 10px 0 " -->
                
                <svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 50 44" >
                    <svg:style type="text/css">
                        .st2{fill:#EAE8E3;}
                        .st7{fill:#0f00;}
                    </svg:style>
                    
                    <!-- <line class="st6" x1="121.4" y1="3.5" x2="121.4" y2="39.5"/>
                    <line class="st6" x1="59.4" y1="3.5" x2="59.4" y2="39.5"/> -->

                    <g id="close" transform="translate(-130,0)">
                        <path class="st2"  d="M165.9 10.6l-2.6-2.6 -10.4 10.4 -10.4-10.4 -2.6 2.6 10.4 10.4 -10.4 10.4 2.6 2.6 10.4-10.4 10.4 10.4 2.6-2.6 -10.4-10.4L165.9 10.6z"/>
                        <rect @mousedown="closeWindow" @dragstart="killEvent" x="134.9" y="3" class="st7" width="36" height="36" />
                    </g>
                   
                </svg>
            </div>
           
        </div>
    
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
        closeWindow(e){
            // console.log("closeWindow", this.idNr);
            this.$store.commit('closeImpressum', this.idNr);
            // var that = this;
            // // var t = setTimeout(that.$store.dispatch('resetWindowByID', that.idNr), 1000);
            // setTimeout(that.$store.commit('resetWindowByIDM', that.idNr), 1000);
            // // this.$store.dispatch('closeWindowByIDM', this.idNr);
            // e.stopPropagation()
            //this.$store.commit('setActiveWindowM', iconID); 
        },
    },
    computed: {
        // getLanguage () {
        //     // console.log("getLanguage");
        //     const languageString = this.$store.getters.getOpenWindowsLanguage;
        //     const languageNr = languageString.charAt(this.idNr-1);
        //     if (languageNr == 0){
        //         return "EN"
        //     } else {
        //         return "DE"
        //     }
        // },
        // watchLanguage () {
        //     const languageString = this.$store.getters.getOpenWindowsLanguage;
        //     const languageNr = languageString.charAt(this.idNr-1);
        //     if (languageNr == 0){
        //         return "EN"
        //     } else {
        //         return "DE"
        //     }
        // }
    },
    watch: {
        // watchLanguage (newCount, oldCount) {
        //     console.log(newCount, oldCount);
        //     // Our fancy notification (2).
        //     // console.log(this.$refs);
        //     const el =  this.$refs['navigation-language' + this.idNr]
        //     // console.log(el);
        //     el.textContent = newCount;
        // }
    }
}
</script>



<style lang="scss" scoped>
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
</style>