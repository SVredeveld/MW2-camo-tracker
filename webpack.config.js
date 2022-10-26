// const path = require('path');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');



// module.exports = {
//   mode: 'development',
//   entry: './src/index.ts',
//   devtool: 'inline-source-map',
//   resolve: {
//     extensions: ['.tsx', '.ts', '.js'],
//   },
//   output: {
//     filename: 'bundle.js',
//     path: path.resolve(__dirname, 'dist'),
//   },
// 	module: {
//     rules: [
//       {
//         test: /\.tsx?$/,
//         use: 'ts-loader',
//         exclude: /node_modules/,
//       }, 
// 			{
//         test: /\.(scss|css)$/,
//         use: [
//           process.env.NODE_ENV !== 'production'
//             ? 'style-loader'
//             : MiniCssExtractPlugin.loader,
//           'css-loader',
//           {
//             loader: 'sass-loader',
//             options: {
//               sourceMap: true
//             }
//           }
//         ]
//       }
//     ],
//   }, 
// 	plugins: [
//     new MiniCssExtractPlugin({
//       // Options similar to the same options in webpackOptions.output
//       // both options are optional
//       filename: '[name].[contenthash].css',
//       chunkFilename: '[id].css'
//     }),
//     new CleanWebpackPlugin(),
//     new HtmlWebpackPlugin({
//       template: './src/index.html'
//     }),

//     new ESLintPlugin({
//       extensions: ['.tsx', '.ts', '.js'],
//       exclude: 'node_modules',
//       context: 'src'
//     })
//   ]
// };

/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
// @ts-ignore
const HtmlWebpackPlugin = require('html-webpack-plugin');
// @ts-ignore
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// @ts-ignore
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// @ts-ignore
//const ESLintPlugin = require('eslint-webpack-plugin');

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
        use: [

          MiniCssExtractPlugin.loader,
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
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: 'style.css',
      chunkFilename: '[id].css'
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
		// ,
    // new ESLintPlugin({
    //   extensions: ['.tsx', '.ts', '.js'],
    //   exclude: 'node_modules',
    //   context: 'src'
    // })
  ]
};