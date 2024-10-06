const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const Dotenv = require("dotenv-webpack"); // Import the plugin

module.exports = {
  entry: "./src/index.js",

  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
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
      patterns: [
        { from: "src/pages", to: "pages" },
        { from: "staticwebapp.config.json" },
      ],
    }),
    new Dotenv(),
  ],
};
