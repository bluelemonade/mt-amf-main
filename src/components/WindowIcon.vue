<template>
<div>
   <div class="window-icon" > <!-- icon ohr links -->
        
        <!-- <transition name="basefade" mode="out-in" appear>
            <div v-for="(number, index) in [nr]" :key="index" >
                <img :src="imagelist[Math.abs(nr) % imagelist.length]" />
                <p> {{  getMenuID }} </p>
            </div>
        </transition> -->

        <transition name="basefade" mode="out-in" appear>
            <div :key="nr" >
                <img :src="imagelist[Math.abs(nr) % imagelist.length]" />
                <!-- <p> {{  getMenuID }} </p> -->
            </div>
        </transition>

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
        menuNr:{
            type: Number,
            default: 0,
        },
    },
    data: function() {
      return {
            nr: 2,
            imagelist: [
                        require('@/assets/windowicons/windowicon-entstehung.png'),
                        require('@/assets/windowicons/windowicon-alter.png'),
                        require('@/assets/windowicons/windowicon-koerper.png'),
                        require('@/assets/windowicons/windowicon-stammbaum-des-lebens-red.png'),
                        require('@/assets/windowicons/windowicon-stammbaum.png'),
                        require('@/assets/windowicons/windowicon-fundorte.png'),
                        require('@/assets/windowicons/windowicon-quiz.png')
                    ],
      };
   },
    computed: {
        getMenuID () {
            // console.log("getMenuID");
            const menuString = this.$store.getters.getOpenWindowsMenu;
            const menuNr = menuString.charAt(this.idNr-1);
            this.setNr(menuNr);
            return menuNr;
        },
        watchMenuID () {
            const menuString = this.$store.getters.getOpenWindowsMenu;
            const menuNr = menuString.charAt(this.idNr-1);
            // console.log("watchMenuID", menuNr);
            this.setNr(menuNr);
            return menuNr;
        }
    },
    watch: {
        watchMenuID (newIcons, oldIcons) {
            console.log("watchIcons", newIcons, oldIcons);

            // step durch alle icons und einblenden
            // for (var i=0; i < newIcons.length; i++){
            //     if ( (newIcons.charAt(i) == 0) && ( oldIcons.charAt(i) > 0 ) ){
            //         const iconNr = oldIcons.charAt(i);
            //         gsap.to("#group" + iconNr, 0.5, {opacity: 1.0}); 
            //     }
            // }
        }
    },
    methods: {
        setNr (str) {
            this.nr = parseInt(str) -1;
        },
        //     switchLanguage(){
        //         console.log("changeLanguage", this.idNr);
        //     },
        //     closeWindow(event){
        //         console.log("closeWindow", this.idNr);
        //         this.$store.commit('closeWindowByIDM', this.idNr); 
        //         // this.$store.dispatch('closeWindowByIDM', this.idNr);
        //         event.stopPropagation()
        //         // stopPropagation();
        //         //this.$store.commit('setActiveWindowM', iconID); 
        //     },
        //     showMenu(){
        //         console.log("showMenu", this.idNr);
        //     },
        //     goBack(){
        //         console.log("Back", this.idNr);
        //     }
    }
}
</script>


<style lang="scss" scoped>
.window-icon {
    // border-radius: 80px 80px 80px 80px;
    // top: 0px;
    // left: 0px;
    width: auto;
    height: auto;
    // background-color: yellow;
}
img {
    width: 200px;
    // height: 200px;
    // -webkit-filter: drop-shadow(5px 5px 5px #222);
    // filter: drop-shadow(5px 5px 5px #222);
}
// .schatten {
//   box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.36);
// }

p {
    font-size: 40px;
    color: red;
    // opacity: 0.0;
}


.basefade-enter-active,
.basefade-leave-active {
  transition: all 0.5s ease;
  transition: opacity 1.0;
  transition-delay: 0.6s;
}

.basefade-enter,
.basefade-leave-to
{
  opacity: 0;
  transition-delay: 0.6s;
  transition: all 0.5s ease;
  position: absolute;
}
</style>