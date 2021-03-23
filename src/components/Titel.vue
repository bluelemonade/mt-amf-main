<template>
    <div>
        <p class="app-titel">Die Anfänge</p>
        <p class="app-titel">des Menschseins</p>
        <!-- <div class="titelline"></div> -->
    </div>
</template>



<script>
export default {
    
}
</script>


<style lang="scss" scoped>

.app-titel {
  font-family: "FontLight";
  margin-top: 0px;
  font-size: 120px;
  line-height: 140px;
  letter-spacing: 0.020em;
  color: $whitetypo;
  /* text-transform: uppercase; */
  text-align: left;
}

.titelline {
    position: absolute;
    background-color: $line;
    width: 3px;
    height: 400px;
    top: 21px;
    left: -72px;
}
</style>