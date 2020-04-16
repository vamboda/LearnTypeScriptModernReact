const path = require("path");
const rules = [
  {
    test: /\.tsx?/,
    exclude: /node_modules/,
    loader: "babel-loader"
  }
];

module.exports = {
  target: "web",
  mode: "development",
  // webpack will take the files from ./src/index
  entry: "./src/index",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js"
  },
  module: { rules },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  devServer: {
    contentBase: "./",
    port: 5000
  }
};