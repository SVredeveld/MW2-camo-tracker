const path = require('path');
// @ts-ignore
const HtmlWebpackPlugin = require('html-webpack-plugin');
// @ts-ignore
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// @ts-ignore
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// @ts-ignore
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.ts',
  mode: 'development',
  devtool: 'source-map',
  optimization: {
    usedExports: true
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
	resolve: {
    extensions: ['.ts', '.js', '.json']
},
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
          options: {
            // disable type checker - we will use it in fork plugin
            transpileOnly: true
          }
        }
      },
			{
				test: /\.(scss|css)$/,
				use: [
					process.env.NODE_ENV !== 'production'
						? 'style-loader'
						: MiniCssExtractPlugin.loader,
					'css-loader',
					{
						loader: 'sass-loader',
						options: {
							sourceMap: true
						}
					}
				]
			}
    ]
  },
	plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: 'style.css'    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
		// ,
    // new CopyPlugin({
    //   patterns: [{ from: 'src/assets', to: 'assets' }]
    // })
  ]
};