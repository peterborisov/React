const HtmlWebpackPlugin = require("html-webpack-plugin");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");

let mode = "development";

if (process.env.NODE_ENV === "production") {
  mode = "production";
}

module.exports = {
  mode,
  module: {
    rules: [
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [
          // MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  plugins: [
    // new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin(
      {template: "./src/index.html"}
    )
  ],
  devtool: "source-map",
  resolve: {
    extensions: [".js", ".jsx"],
  },
  devServer: {
    contentBase: "./dist",
    hot: true,
  },
};