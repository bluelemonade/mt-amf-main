function Timer() {
   var start = new Date()
   

//   setInterval(function() {
//     time += precision;
//   }, precision);

  this.elapsed = function() {
    return new Date() - start;
  };
//   this.getDate = function() {
//     return new Date(time);
//   };
}

export { Timer }



// function Timer(init, precision) {
//   var start = (time = new Date(init || null).valueOf()),
//     precision = precision || 100;

//   //   setInterval(function() {
//   //     time += precision;
//   //   }, precision);

//   this.elapsed = function() {
//     return time - start;
//   };
//   this.getDate = function() {
//     return new Date(time);
//   };
// }

// export { Timer };

