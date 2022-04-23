const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { WebpackManifestPlugin } = require("webpack-manifest-plugin");

module.exports = {
  devtool: "source-map",
  entry: {
    app: [
      path.resolve("src", "js", "app.js"),
      path.resolve("src", "styles", "app.scss"),
    ],
  },
  output: {
    path: path.resolve("static", "assets"),
    filename: "[name].[contenthash].js",
    publicPath: "/assets/",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
      },
      {
        test: /\.scss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
    }),
    new WebpackManifestPlugin({
      fileName: path.resolve(__dirname, "data/manifest.json"),
    }),
  ],
};
