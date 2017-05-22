require("./clearCache.js");
var path = require("path");

var CopyWebpackPlugin = require("copy-webpack-plugin");
var ImageminPlugin = require("imagemin-webpack-plugin").default;
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var extractSass = new ExtractTextPlugin({
    filename: "./[name].css"
    // disable: process.env.NODE_ENV === "development"
});


module.exports = {
  entry: {
    main: ["./_js/entry.js", "./_js/analytics.js"],
    gallery: "./_js/gallery.js"
  },
  output: {
    path: path.join(__dirname, "assets/js/"),
    filename: "[name].bundle.js"
  },
  plugins: [
    // Copy the images folder and optimize all the images
    new CopyWebpackPlugin([{
      from: path.join(__dirname, "/_assets/"),
      to: path.join(__dirname, "assets")
    }]),
    new ImageminPlugin({ test: /\.(jpe?g|png|gif|svg)$/i })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  }
};