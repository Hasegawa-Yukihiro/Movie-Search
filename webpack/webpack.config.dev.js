const baseConfig = require("./webpack.config.base");
const { merge } = require("webpack-merge");
const webpack = require("webpack");

/**
 * @description 環境変数の設定
 * @param DOMAIN ドメイン
 */
const DOMAIN_API = JSON.stringify("http://localhost:4000");

const config = merge(baseConfig, {
  mode: "development",
  devServer: {
    contentBase: "dist",
    open: true,
    port: 4000,
    /** 404のfallback先を /index.html にする */
    historyApiFallback: true
  },
  plugins: [
    /** 環境変数の追加 */
    new webpack.DefinePlugin({
      "process.env": { DOMAIN_API }
    })
  ]
});

module.exports = config;
