<template>
  <div id="app">
    
   <div class="row">
    <my-child1></my-child1>
    <my-child2></my-child2>
  </div>
  <div class="row">
    <my-child3></my-child3>
    <my-child4></my-child4>
  </div>

     <div id="tools-container">
        <VueToolMultitouch class="schatten" :startX="600" :startY="600" :startColor='"#FF0000"' id="id1" :idName="'id1'" :startZ="2"> 
           <my-child1></my-child1>
          <h2>Passing Text 1</h2>
       </VueToolMultitouch>

        <VueToolMultitouch class="schatten" :startX="100" :startY="100" :startColor='"#00FF00"'  id="id2" :idName="'id2'" :startZ="3">
            <my-child2></my-child2>
            <!-- <div id="x1">
              <router-link to="/">/home</router-link>
              <router-link to="/foo">/foo</router-link>
              <p>Route path: {{ $route.path }}</p>
              <router-view></router-view>
            </div>-->
            <h2>Passing Text 2</h2> 
        </VueToolMultitouch> 

         <VueToolMultitouch class="schatten" :startX="200" :startY="600" :startColor='"#FF0000"'  id="id3" :idName="'id3'" :startZ="4"> 
          
            <!-- <div id="sub2">
                <router-link to="/">/home</router-link>
                <router-link to="/foo">/foo</router-link>
                <p>Route path: {{ $route.path }}</p>
                <router-view></router-view>
            </div> -->
            <my-child3></my-child3>
            <h2>Passing Text 3</h2>

        </VueToolMultitouch> 

        <VueToolMultitouch class="schatten" :startX="1200" :startY="100" :startColor='"#0000FF"'  id="id4" :idName="'id4'" :startZ="5"> 
          <my-child4></my-child4>
          <h2>Passing Text 4</h2>
        </VueToolMultitouch>

        <VueToolMultitouch class="schatten" :startX="800" :startY="100" :startColor='"#FFFFFF"'  id="id5" :idName="'id5'" :startZ="6"> 
          <!-- <iframe width="700px" height="600px" src="https://ethianum-klinik-heidelberg.de/" frameborder="0"> </iframe> -->
          <iframe width="100%" height="80%" src="https://ethianum-klinik-heidelberg.de/" frameborder="0"> </iframe>
          <!-- <VueFriendlyIframe width="100%" height="80%" :src="www.bluelemon.de" @load="onLoad" frameborder="5"></VueFriendlyIframe> -->
          <h2>Passing Text 4</h2>
        </VueToolMultitouch>

    </div>

    <AppSystemInformation />
    <!-- <VueSplash :btnvisible='endload' :loadtext='loadtext' :headertext='headertext' /> -->
    <!-- <VueDragResize v-if="isDebug() == true" :isActive="false" :w="200" :h="150"  v-on:resizing="resize" v-on:dragging="resize">
      <div class="filler" style="background-color: rgb(255, 255, 0, 0.6);">
        <p class="info" >x: {{left}}  y: {{top}}</p>
        <p class="info" >width: {{width}} height: {{height}}</p>
      </div>
    </VueDragResize> -->

  </div>
</template>


<script>
// import Vue from 'vue'
// import VueToolMultitouch from './components/VueToolMultitouchResize.vue'
// import VueFrameBg from './components/VueFrameBG'
// import VueSplash from './components/VueSplash'
// import AppSystemInformation from './components/SystemInformation'
// import VueDragResize from 'vue-drag-resize'
// import VueFriendlyIframe from './components/VueFriendlyIframe.vue' 
// import VueRouter from 'vue-router'

// import router1 from './router/router-1';
// import router2 from './router/router-2'

// new Vue({
// 	router: router1
// }).$mount('#sub1')

// new Vue({
// 	router: router2
// }).$mount('#sub2')

const routes = [
  {
    path: '/page1',
    component: { template: '<p>Page 1</p>' }
  }, {
    path: '/page2',
    component: { template: '<p>Page 2</p>' }
  }, {
    path: '/page3',
    component: { template: '<p>Page 3</p>' }
	}
]


import MyChild from './components/MyChild.vue'
// import MyChild2 from './components/MyChild.vue'
// import MyChild3 from './components/MyChild.vue'
// import MyChild4 from './components/MyChild.vue'

// const MyChild = {
//   template: `
//     <div>
//       <router-link to="/page1">Page 1</router-link>
//       <router-link to="/page2">Page 2</router-link>
//       <router-link to="/page3">Page 3</router-link>
//       <button @click="$router.back()">Back</button>
//       <div>{{ $router.path }}</div>
//       <router-view />
//     </div>
//   `
// }


function getChild() {
	return {
    extends: MyChild,
    router: new VueRouter({
      mode: 'abstract',
      routes
    })
  }
}

import Vue from 'vue';
import VueRouter from "vue-router";
Vue.use(VueRouter);

export default {
  name: 'app',
  components: {
    // VueToolMultitouch,
    // VueFrameBg,
    // VueLanguage,
    // AppSystemInformation,
    // VueDragResize,
    // MyChild1: getChild(),
    // MyChild2: getChild(),
    // MyChild3: getChild(),
    // MyChild4: getChild()
    MyChild1: getChild(),
    MyChild2: getChild(),
    MyChild3: getChild(),
    MyChild4: getChild()
    // VueSplash
  },
    data() {
      return {
        width:0,
        height: 0,
        top: 0,
        left: 0,
        keyCode: 0,
      }
    },
    methods: {
      isDebug: function() {
        console.log ("isDebug");
        return this.$store.getters.getDebugFlag;
      },
      resize(newRect){
        this.width = newRect.width;
        this.height = newRect.height;
        this.top = newRect.top;
        this.left = newRect.left;
      },
      handleGlobalKeyDown(e) {
        this.keyCode = e.keyCode
        console.log(e.keyCode)
      }
    },
    mounted() {
    },
    created() {
     
    }
}


</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.schatten {
  box-shadow: 10px 10px 15px rgb(110, 110, 110);
}

#tools-container{
    position: absolute;
    // background-color: rgba(180, 21, 21, 0);
    top: 0px;
    left: 0px;
    width: 3840px;
    height: 2160px;
    overflow:hidden;
}

// .row {
//   display: flex;
// }

// .row > * {
//   border: 1px solid red;
//   flex: 1;
//   height: 100px;
//   margin: 5px;
// }

</style>
