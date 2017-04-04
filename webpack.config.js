// require("./clearCache.js");

var CopyWebpackPlugin = require("copy-webpack-plugin");
var ImageminPlugin = require("imagemin-webpack-plugin").default;
// var ExtractTextPlugin = require("extract-text-webpack-plugin");

// var extractSass = new ExtractTextPlugin({
//     filename: "./[name].css"
//     // disable: process.env.NODE_ENV === "development"
// });


module.exports = {
  entry: ["./_js/entry.js"],
  output: {
    path: "./assets/",
    filename: "/js/bundle.js"
  },
  plugins: [
    // Copy the images folder and optimize all the images
    new CopyWebpackPlugin([{
      from: "./_assets/",
      to: "./"
    }]),
    new ImageminPlugin({ test: /\.(jpe?g|png|gif|svg)$/i })
  ]
};