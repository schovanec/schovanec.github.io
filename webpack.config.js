const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { WebpackManifestPlugin } = require("webpack-manifest-plugin");

const SRC_ROOT = path.resolve(__dirname, "src");
const HUGO_ROOT = path.resolve(__dirname);

module.exports = {
  devtool: "source-map",
  entry: {
    app: [path.resolve(SRC_ROOT, "js", "app.js")],
    lightbox: [path.resolve(SRC_ROOT, "js", "lightbox.js")],
  },
  output: {
    path: path.resolve(HUGO_ROOT, "static/assets"),
    filename: "[name].[contenthash].js",
    assetModuleFilename: "[name].[contenthash][ext][query]",
    publicPath: "/assets/",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        //exclude: /node_modules\/(?!(photoswipe)\/).*/,
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
          "resolve-url-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg)$/,
        type: "asset",
        generator: {
          filename: "fonts/[name].[contenthash][ext][query]",
        },
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
