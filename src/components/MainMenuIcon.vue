<template>
    <div>
    <!-- <div class="mainmenu-icon" > -->
            <!-- <transition name="fade" mode="out-in" appear> -->
                <!-- <div> -->
                    <div>
                        <img :src="imageList[imageNr]"  />
                        <p class="icon-text-big" v-html="t1"></p>
                        <p class="icon-text-small" v-html="t2"></p>
                        <p class="icon-text-small" v-html="t3"></p>
                        <!-- <img src="../assets/windowicons-shape/windowicon-alter.png" /> -->
                    </div>
                <!-- </div> -->
            <!-- </transition> -->
        <!-- </div> -->
    </div>
</template>



<script>


export default {
    name: 'MainMenuIcon',
    data: function() {
      return {
            imageList: [
                        require('@/assets/mainmenuicons-shape/windowicon-entstehung.png'),
                        require('@/assets/mainmenuicons-shape/windowicon-alter.png'),
                        require('@/assets/mainmenuicons-shape/windowicon-koerper.png'),
                        require('@/assets/mainmenuicons-shape/windowicon-stammbaum-des-lebens.png'),
                        require('@/assets/mainmenuicons-shape/windowicon-stammbaum.png'),
                        require('@/assets/mainmenuicons-shape/windowicon-fundorte.png'),
                        require('@/assets/mainmenuicons-shape/windowicon-quiz.png')
                    ],
        };
    },
    props: {
        imagePath:{
            type: String,
            default: "./assets/windowicons-shape/windowicon-entstehung.png",
        },
        imageNr:{
            type: Number,
            default: 0,
        },
        t1:{
            type: String,
            default: "t1",
        },
        t2:{
            type: String,
            default: "t2",
        },
        t3:{
            type: String,
            default: "t3",
        },
    },
    
    created() {
        // console.log(this.imageList);
    }
}


</script>


<style lang="scss" scoped>
.icon-text-big{
    font-family: "FontBold";
    color: $icontext;
    font-size: 42px;
}

.icon-text-small{
    font-family: "FontLight";
    font-size: 28px;
    color: $icontext;
}

.icon-text-extrasmall{
    font-family: "FontLight";
    font-size: 16px;
    color: $icontext;
}


</style>