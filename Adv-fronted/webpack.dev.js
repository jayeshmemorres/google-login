const webpack = require("webpack");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const CopyPlugin = require("copy-webpack-plugin");

const CopyWebpackPlugin = require("copy-webpack-plugin");
const processEnv = new webpack.DefinePlugin({
	"process.env.ENV_NAME": JSON.stringify("development"),
});
module.exports = merge(common, {
	mode: "development",
	devtool: "inline-source-map",
	devServer: {
		port: 3000,
		open: true,
		historyApiFallback: true,
	},
	plugins: [processEnv],
});
