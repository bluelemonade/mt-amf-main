// https://3dtransforms.desandro.com/card-flip
// https://www.w3schools.com/howto/howto_css_flip_card.asp

<template>
    <div class="scene">
        <div class="card" @touch="switchCard()" @click="switchCard()" :style="switchStyleCard">
            <div class="card__face card__face--front"><h6><slot name="front"></slot></h6></div>
            <div class="card__face card__face--back"><p><slot name="back"></slot></p></div>
        </div>
    </div>
</template>


<script>
// var card = document.querySelector('.card');
// card.addEventListener( 'click', function() {
//   card.classList.toggle('is-flipped');
// });


export default {
    data: function () {
        return {
            isActive: false
        }
    },
    computed: {
        switchStyleCard: function() {
            // console.log("computed switchStyleCard:", this.isActive);
            if (this.isActive == true) {
                return {
                    transform: "translateX(-100%) rotateY(180deg)"
                    // opacity: 0.0
                };
            } else {
                return {
                    transform: "rotateY(0deg)"
                    // opacity: 0.5
                };
            }
        },
    },
    methods: {
        switchCard: function(){
            this.isActive = !this.isActive;
        }
    }
}
</script>


<style scoped>

.scene {
  width: 500px;
  height: 400px;
  border: 0px solid #CCC;
  /* margin: 40px; */
  perspective: 2000px;
}

.card {
  width: 100%;
  height: 100%;
  position: relative;
  transition: transform 0.7s;
  transform-origin: center right;
  transform-style: preserve-3d;
   /* -webkit-filter: drop-shadow(0px 0px 3px rgba(0, 0, 0, 0.36));
  filter: drop-shadow(0px 0px 3px rgba(0, 0, 0, 0.36)); */
}

.card__face {
  border-radius: 20px;  
  position: absolute;
  height: 100%;
  width: 100%;
  backface-visibility: hidden;
}

.card__face--front {
   background: white;
   display: flex;
   align-items: center;
   justify-content: center;
}

.card__face--back {
  background: #DDCCCA;
  transform: rotateY( 180deg);
  font-family: FontLight;
  
}

h6 {

  font-family: FontBold;
  font-size: 36px;
  line-height: 50px;
  white-space: pre-line;
  text-align: center;
}
p {
    font-size: 22px;
    line-height: 34px;
    white-space: pre-line;
    text-align: left;
    margin: 20px;
}
.card.is-flipped {
  transform: rotateY(180deg);
}

</style>
