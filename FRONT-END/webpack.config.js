const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const Dotenv = require("dotenv-webpack"); // Import the plugin

const isProduction = process.env.NODE_ENV === "production";

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
  },

  devServer: {
    static: {
      directory: path.resolve(__dirname, "src"),
    },
    port: 3002,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: "Kanban Board - Prototype",
      template: "./src/index.html",
    }),

    new MiniCssExtractPlugin(),
    new CopyWebpackPlugin({
      patterns: [{ from: "src/pages", to: "pages" }],
    }),
    new Dotenv(),
  ],
};
