import HtmlWebpackPlugin from "html-webpack-plugin";

exports.loadTypeScript = () => ({
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
});

exports.generateHTML = () => ({
  plugins: [new HtmlWebpackPlugin()],
});
