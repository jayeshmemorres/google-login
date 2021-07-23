const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
//const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");
// const Dotenv = require('dotenv-webpack');
const SRC_DIR = path.resolve(__dirname, "src");
const PUBLIC_DIR = path.resolve(__dirname, "public");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const htmlWebPack = new HtmlWebPackPlugin({
	template: path.join(PUBLIC_DIR, "/index.html"),
	filename: "index.html",
});

const extractCss = new MiniCssExtractPlugin({
	filename: "assets/css/style.min.css",
});

module.exports = {
	entry: [`${SRC_DIR}/index.js`, `${SRC_DIR}/assets/sass/style.scss`],

	resolve: {
		extensions: [".js", ".jsx"],
	},

	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "bundle.min.js",
		chunkFilename: "[id].[chunkhash].js",
	},

	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
				},
			},
			{
				test: /\.(sa|sc|c)ss$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
						options: {},
					},
					"css-loader",
					"sass-loader",
				],
			},

			{
				test: /\.(jpe?g|png|gif|svg)$/i,
				loader: "file-loader",
				options: {
					name: "/src/assets/images/[name].[ext]",
				},
			},
		],
	},
	plugins: [
		new CopyWebpackPlugin({
			patterns: [
				{
					from: "./src/assets/images",
					to: "./src/assets/images",
				},
			],
		}),
		htmlWebPack,
		extractCss,
	],
};
