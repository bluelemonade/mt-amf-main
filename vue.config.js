const path = require("path");

// vue.config.js
module.exports = {
  // options...
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/css/_variables.scss";`,
      }
    }
  },
  // css: {
  //   loaderOptions: {
  //     sass: {
  //       sassOptions: {
  //          prependData: `@import "@/css/_variables.scss";`,
  //       }
  //     }
  //   }
  // },
  runtimeCompiler: true,
  publicPath:
    process.env.NODE_ENV === "production"
      ? "./" // prod
      : "/", // dev
};


// css: {
//     loaderOptions: {
//       sass: {
//         sassOptions: {
//           ....some options here...
//         }
//       }
//     }
//   }