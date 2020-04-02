const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

const cssLoader = {
  loader: "css-loader",
  options: {
    modules: true,
    importLoaders: 1
  }
};

const sassLoader = {
  loader: "sass-loader",
  options: {
    implementation: require("sass")
  }
};

const postCssLoader = {
  loader: "postcss-loader",
  options: {
    config: {
      path: __dirname + "/postcss.config.js"
    }
  }
};

const tsLoader = {
  loader: "ts-loader",
  options: {
    transpileOnly: true
  }
};

const fileLoader = {
  loader: "file-loader"
};

const appTitle = "Ubiratan Neto | Homepage";

const webpackCommonConfig = {
  context: path.resolve(__dirname, "src"),

  entry: {
    index: "./index"
  },

  plugins: [
    new ForkTsCheckerWebpackPlugin({
      tsconfig: "../tsconfig.json"
    }),
    new HtmlWebpackPlugin({
      title: appTitle,
      filename: "index.html",
      template: "./index.html"
    }),
    new webpack.ProgressPlugin()
  ],

  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx"]
  },

  module: {
    rules: [
      {
        test: /\.(png|jpg|jpeg|svg)$/i,
        use: [fileLoader]
      }
    ]
  },

  target: "web"
};

exports.cssLoader = cssLoader;
exports.sassLoader = sassLoader;
exports.postCssLoader = postCssLoader;
exports.tsLoader = tsLoader;
exports.webpackCommonConfig = webpackCommonConfig;
