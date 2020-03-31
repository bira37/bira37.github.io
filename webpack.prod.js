const path = require("path");
const webpackMerge = require("webpack-merge");
const {
  webpackCommonConfig,
  cssLoader,
  postCssLoader,
  tsLoader,
  sassLoader
} = require("./webpack.common.js");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = () => {
  const config = {
    mode: "production",

    module: {
      rules: [
        {
          test: /\.ts(x?)$/,
          exclude: "/node_modules/",
          use: [tsLoader]
        },
        {
          test: /\.s[ac]ss$/i,
          use: [MiniCssExtractPlugin.loader, cssLoader, postCssLoader, sassLoader]
        }
      ]
    },

    optimization: {
      minimize: true
    },

    output: {
      filename: "prod.[name].[chunkhash].js",
      path: path.resolve(__dirname, "dist")
    },

    plugins: [
      new MiniCssExtractPlugin({
        filename: "[name].[chunkhash].css",
        chunkFilename: "[id].[chunkhash].css"
      })
    ]
  };
  return webpackMerge(webpackCommonConfig, config);
};
