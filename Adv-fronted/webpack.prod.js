// const webpack = require("webpack");
const { merge } = require("webpack-merge");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const common = require("./webpack.common.js");
const removeDist = new CleanWebpackPlugin();

module.exports = merge(common, {
	mode: "production",
	performance: {
		hints: false,
	},
	plugins: [removeDist],
});
