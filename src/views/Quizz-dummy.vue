// https://orlandster.github.io/vue-page-transition/#/
// auch nettes quizz https://codepen.io/mobihack-official/pen/EJpRXQ

<template>
  <div>
    <img src="../assets/dummies/Quiz_Startseite.jpg" alt="">
  </div>
</template>


<script>

// Create a quiz object with a title and two questions.
// A question has one or more answer, and one or more is valid.
// var quiz = {
//   title: 'Bist du ein Steinzeitexperte?<br>Teste dein Wissen und finde es heraus!',
//   questions: [
//     {
//       text: "Wann begannen Menschen erstmals Werkzeuge herzustellen?",
//       responses: [
//         {text: 'Vor ca. 300.000 Jahren, zeitgleich mit dem Auftreten des <i>H. s. sapiens.</i>', correct: true}, 
//         {text: 'Vor ca. 3,3 Mio. Jahren. Die Funde aus Lomekwi 3 belegen primitiv bearbeitete Steinwerkzeuge.'}, 
//         {text: 'Vor 1,5 Mio. Jahren, als die ersten Menschen den afrikanischen Kontinent verließen.'}, 
//       ]
//     }, 
//     {
//       text: "Welche Datierungsmethoden ermöglicht es ein genaues Alter von Fossilien zu bestimmen?",
//       responses: [
//         {text: 'Relative Methoden.'}, 
//         {text: 'Absolute Methoden.', correct: true}, 
//         {text: 'Keine der Methoden kann ein genaues Alter bestimmen.'}, 
//       ]
//     },
//     {
//       text: "Zu welcher Homininengattung gehören der <i>A. afarensis</i>, <i>A. africanus</i> und <i>A. anamensis</i>?",
//       responses: [
//         {text: 'Zur Gattung der <i>Homo</i>.', correct: true}, 
//         {text: 'Zur Gattung der <i>Paranthropinen</i>.'}, 
//         {text: 'Zur Gattung der <i>Australopithecinen</i>.'}, 
//       ]
//     },
//     {
//       text: "Welche Menschenart verließ vermutlich als erste den afrikanischen Kontinent?",
//       responses: [
//         {text: '<i>Homo s. sapiens</i>.', correct: true}, 
//         {text: '<i>Paranthropus boisei</i>.'}, 
//         {text: 'Homo erectus</i>.'}, 
//       ]
//     } 
//   ]
// };


export default {
  
  // data: function () {
  //   return {
  //     quiz: quiz,
  //     questionIndex: 0, // Store current question index
  //     // An array initialized with "false" values for each question
  //     // It means: "did the user answered correctly to the question n?" "no".
  //     userResponses: Array(quiz.questions.length).fill(false)
  //   }
  // },
  // // The view will trigger these methods on click
  // methods: {
  //   // Go to next question
  //   next: function() {
  //     console.log("next question")
  //     this.questionIndex++;
  //   },
  //   // Go to previous question
  //   prev: function() {
  //     console.log("prev question")
  //     this.questionIndex--;
  //   },
  //   // Return "true" count in userResponses
  //   score: function() {
  //     return this.userResponses.filter(function(val) { return val }).length;
  //   }
  // }
    
}
</script>

<style scoped>
  .basefade-enter-active,
  .basefade-leave-active {
    transition: opacity 0.6s;
    transition-delay: 0.7s;
  }

  .basefade-enter,
  .basefade-leave-to
  /* .fade-leave-active in <2.1.8 */
    {
    opacity: 0;
    transition-delay: 0.0s;
  }

/* .fademove-enter-active {
  transition: all 0.3s ease;
}
.fademove-leave-active {
  transition: all 0.8s cubic-bezier(0.3, 0.5, 0.8, 1);
}
.fademove-enter,
.fademove-leave-to {
  transform: translateX(15px);
  opacity: 0;
}
 */


.slide-left-enter-active,
/* .slide-left-leave-active, */
.slide-right-enter-active,
.slide-right-leave-active {
  transition-duration: 0.7s;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.55, 0, 0.1, 1);
  /* overflow: hidden; */
}

.slide-left-enter,
.slide-right-leave-active
 { 
  opacity: 0;
  transform: translate(2em, 0);
}

/* .slide-left-leave-active, */
.slide-right-enter {
  opacity: 0;
  transform: translate(-2em, 0);
}

li {
  list-style-type: none;
}

</style>