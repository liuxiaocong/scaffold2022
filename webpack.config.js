const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const { ModuleFederationPlugin } = require("webpack").container;
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx", //  ./src/JS/index.js  ./src/TS/index.ys
  output: {
    path: path.resolve(__dirname, "./dist"), // 文件出口
    filename: "[name].bundle.js", // 出口文件名
  },
  mode: "development", //production ｜ development
  plugins: [
    new HtmlWebpackPlugin({
      title: "Scaffold-2022",
      template: path.resolve(__dirname, "./public/index.html"),
      filename: "index.html",
    }),
  ],
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".css", ".scss"],
    alias: {
      page: path.resolve(__dirname, "./src/page"),
      common: path.resolve(__dirname, "./src/common"),
    },
  },
  module: {
    /* ... */
    rules: [
      /* ... */
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
        include: [path.resolve(__dirname, "src")],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"],
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
    hot: true,
    port: 3006,
  },
};
