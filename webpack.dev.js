const path = require("path");
const webpackMerge = require("webpack-merge");
const {
  webpackCommonConfig,
  cssLoader,
  postCssLoader,
  tsLoader,
  sassLoader
} = require("./webpack.common.js");

module.exports = () => {
  const config = {
    devServer: {
      host: "localhost",
      port: "3737",
      historyApiFallback: true,
      inline: true,
      hot: true
    },

    mode: "development",

    module: {
      rules: [
        {
          test: /\.ts(x?)$/,
          exclude: "/node_modules/",
          use: ["cache-loader", tsLoader]
        },
        {
          test: /\.s[ac]ss$/i,
          use: ["style-loader", cssLoader, postCssLoader, sassLoader]
        }
      ]
    },

    output: {
      filename: "dev.[name].js",
      path: path.resolve(__dirname, "dist")
    }
  };
  return webpackMerge(webpackCommonConfig, config);
};
