const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { WebpackManifestPlugin } = require("webpack-manifest-plugin");

const SRC_ROOT = path.resolve(__dirname, "src");
const HUGO_ROOT = path.resolve(__dirname, "hugo");

module.exports = {
  devtool: "source-map",
  entry: {
    app: [
      path.resolve(SRC_ROOT, "js", "app.js"),
      path.resolve(SRC_ROOT, "styles", "app.scss"),
    ],
  },
  output: {
    path: path.resolve(HUGO_ROOT, "static/assets"),
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
      fileName: path.resolve(HUGO_ROOT, "data/manifest.json"),
    }),
  ],
};
