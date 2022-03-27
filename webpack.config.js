const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const Dotenv = require("dotenv-webpack")
const dotenvd = require("dotenv")

dotenvd.config({ path: "./.env" })

module.exports = {
  entry: "./app/Main.js",
  output: {
    publicPath: "/",
    path: path.resolve(__dirname, "app", "build"),
    filename: "bundled.js"
  },
  mode: process.env.NODE_ENV || "development",
  resolve: { modules: [path.resolve(__dirname), "node_modules"] },
  performance: {
    hints: false
  },
  optimization: {
    splitChunks: {
      minSize: 10000,
      maxSize: 250000
    }
  },
  devtool: "source-map",
  devServer: {
    port: process.env.NODE_PORT * 1 || 3000,
    static: {
      directory: path.join(__dirname, "app")
    },
    hot: true,
    historyApiFallback: { index: "index.html" }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-react",
              ["@babel/preset-env", { targets: { node: "12" } }]
            ]
          }
        }
      },
      {
        test: /\.(css|scss)$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
        use: ["file-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "app", "index.html")
    }),
    new Dotenv({
      path: ".env"
    })
  ]
}
