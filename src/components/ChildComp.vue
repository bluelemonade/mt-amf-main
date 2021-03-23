<template>
    <div :ref="'contentWindow' + idNr"> 

        <transition name="basefade" mode="out-in" appear>
            <router-view :idNr="idNr" :key="router1toEnd" />  <!-- nur der erste pfade verursacht ein neuladen... :key="$route.path.split('/')[1]" -->
        </transition>

    </div>
</template>


<script>
    
export default {
    name: 'ContentWindow',
    data () {
        return {
            backState: 0,
            timeout: true,
            // timeouttime: 180,
            timerID: 0,
            // refreshfunction: "",
        }
    },    
    props: {    
        active: {
            type: Boolean,
            default: true
        },
        idNr: {
            type: Number,
            default: 0
        },
        refresh: {
            type: Boolean,
            default: false,
        },
        newStack: {
            type: Boolean,
            default: false,
        }
    },
    mounted () {
        console.log(">>> mounted childcomp");
        console.log(this.idNr);
        // this.pushPath('/menu0');
        // var self = this;
        // function refreshTimeout (event) {
        //     console.log("refreshTimeout app")
        //     clearTimeout(self.timerID);
        //     self.timerID = setTimeout  (()=> {
        //         console.log("timeout fired");
        //         clearTimeout(self.timerID);
        //         self.timeout = false;
        //         self.$store.commit('closeWindowByIDM', self.idNr);
        //         // setTimeout(self.$store.dispatch('resetWindowByID', self.idNr), 1000);
        //         setTimeout(self.$store.commit('resetWindowByIDM', self.idNr), 1000);
        //     }, self.timeouttime * 1000);
        // }
        // const el = this.$refs['contentWindow' + this.idNr];
        // console.log("contentWindow", el);
        // // el.addEventListener('mouseDown', refreshTimeout);
        // el.addEventListener('touchstart', refreshTimeout, { passive: true });
        // var event = new Event('touchstart');
        // el.dispatchEvent(event);
    }, 
    methods: {
        // echo() {
        //     console.log('Echoing..')
        // },
        // resetFromExtern () {
        //     console.log('resetFromExtern');
        // },
        startExtern(theID){
            console.log("startExtern", theID);
            this.pushPath('/menu' + theID);
        },
        pushExtern(theID){
            console.log("startExtern", theID);
            this.pushPath('/menu' + theID);
        },
        // pushPath: function(path) {
        //     // console.log ("pushPath", path);
        //     // console.log("******************************");
        //     if (this.$route.path != path) {
        //         this.$router.push(path)
        //     }
        // },
        // routerBack: function (){
        //     // console.log (this.$router);
        //     console.log ("routerBack",  this.$router.history );
        //     this.$router.back()
        // },
        pushPath: function(path) {
            console.log ("pushPath", path);
            if (this.$router.path !== path) this.$router.push(path).catch(()=>{});
        },
        home: function() {
            console.log ("home");
            console.log("******************************");
            if (this.$router.name !== "home") this.$router.push("/").catch(()=>{});
        },
        setBackState: function(value) {
            this.backState = value;
        }
        // routerBack: function (){
        //     // console.log (this.$router);
        //     // console.log ("routerBack");
        //     this.$router.back()
        // },
        // routerHome: function (){
        //     // console.log (this.$router);
        //     // console.log ("routerBack");
        //     this.$router.back()
        // },
    },
    watch: {
        // refresh: {
        //     // the callback will be called immediately after the start of the observation
        //     immediate: true, 
        //     handler (val, oldVal) {
        //         console.log("refresh");
        //     }
        // },
        newStack: function (newStack, oldnewStack) {
            console.log(">>>>>>>>>>>>   newStack refresh");
            // this.refreshfunction();
            // const el = this.$refs['contentWindow' + this.idNr]
            // const ev = new CustomEvent('touchstart');
            // el.dispatchEvent(ev);
        },
        refresh: function (newRefreshState, oldRefreshState) {
            console.log("refresh");
            // this.refreshfunction();
            const el = this.$refs['contentWindow' + this.idNr]
            const ev = new CustomEvent('touchstart');
            el.dispatchEvent(ev);
        },
        active: function(newVal, oldVal) {
            console.log("watcher ChildComp", oldVal, newVal);
            if (newVal == true) {
                this.home();
            }
        },
        watchMenuID (newMenuID, oldMenuID) {
            console.log("watchMenuID", newMenuID, oldMenuID);
            this.pushPath('/menu' + newMenuID);
            // Our fancy notification (2).
            // console.log(this.$refs);
            // const el =  this.$refs['navigation-language' + this.idNr]
            // console.log(el);
            // el.textContent = newCount;
        },
        watchBackState (newBackState, oldBackState) {
            console.log(newBackState, oldBackState);
            
            if (this.backState != newBackState){
                console.log("watchBackState", this.$router.history);
                this.$router.back();
                this.setBackState(newBackState);
            }
            // Our fancy notification (2).
            // console.log(this.$refs);
            // const el =  this.$refs['navigation-language' + this.idNr]
            // console.log(el);
            // el.textContent = newCount;
        }
    },
    computed: {
        router1toEnd(){
            if (this.$route != null){
                 return this.$route.path.split('/')[1]
            } else {
                console.log("this.$route empty in childcomp");
                return("hoppla" + Math.random() );
            }
        },
        backvisible: function(){
            if (this.$router.history.stack.length == 0){
                // console.log("false");
                return false;
            } else {
                // console.log("false");
                return false;
            }
        },
        watchMenuID () {
            console.log("watchMenuID");
            const menuString = this.$store.getters.getOpenWindowsMenu;
            const menuNr = menuString.charAt(this.idNr-1);
            return menuNr;
        },
        watchBackState (){
            // console.log("watchBackState");
            const backStateString = this.$store.getters.getOpenWindowsBackState;
            var backState = backStateString.charAt(this.idNr-1);
            return backState;
        },
        //  watchRefreshState (){
        //     console.log("watchRefreshState");
        //     // const backStateString = this.$store.getters.getOpenWindowsBackState;
        //     // var backState = backStateString.charAt(this.idNr-1);
        //     return this.refresh;
        // }
    },
    components: {
        // About
    },
}
</script>


<style scoped>
a {
text-decoration: none !important;
}
a:link {
  color:#707070;
}
 a:hover, a:active{
  color:#e30417;
}

.basefade-enter-active,
.basefade-leave-active {
  transition: opacity 0.2s;
  transition-delay: 0.5s;
}

.basefade-enter,
.basefade-leave-to
/* .fade-leave-active in <2.1.8 */
{
  opacity: 0;
  transition-delay: 0.2s;
  position: absolute;
}
</style>