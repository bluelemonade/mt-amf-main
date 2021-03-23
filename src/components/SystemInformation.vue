<template>
  <div class="pos" v-if="isDebug() == true">
    <div class="fontInfo">_INFORMATION</div>
    <div class="items">
      <div class="item fontInfo">
        <div class="name">Platform:</div>
        <div class="value">{{ platform }}</div>
      </div>
      <div class="item fontInfo">
        <div class="name ">Vue.js:</div>
        <div class="value">{{ vue }}</div>
      </div>
      </div>
  </div>
</template>



<script>
export default {
  data () {
    return {
      platform: require('os').platform(),
      vue: require('vue/package.json').version,
      package: require('vue/package.json')
    }
  },
   methods: { // intern methoden
    isDebug: function() {
      // console.log ("isDebug");
      return this.$store.getters.getDebugFlag;
    }
   }
}
</script>



<style scoped>
.pos{
  position: absolute;
  pointer-events:none;
  background-color: rgba(0, 0, 0, 0.295);
  z-index: 100;
  left:0px;
  top: 1000px;
}
.title {
  color: #003c88;
  text-align: left;
  font-size: 10px;
  font-weight: bold;
  margin-left: 6px;
}

.items { margin-top: 6px; }

.item {
  display: flex;
  margin-bottom: 6px;
}

.item .name {
  margin-left: 6px;
}

.item .value {
  margin-right: 6px;
  margin-left: 6px;
}
</style>