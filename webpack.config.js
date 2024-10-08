const path = require('path')
const argv = require('yargs').argv
const webpack = require('webpack')
const {merge} = require('webpack-merge')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const StyleLintPlugin = require('stylelint-webpack-plugin')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

// Build env
const isDev = argv.mode === 'development'
const isProd = !isDev

// Paths
const publicPath = path.resolve(__dirname, 'docs')

// Common config
const commonConfig = {
  target: 'web',
  entry: {
    bundle: path.resolve(__dirname, 'src/js/index.js')
  },
  output: {
    path: publicPath,
    filename: `[name]${(isProd) ? '.[contenthash:8]' : ''}.js`
  },
  module: {
    rules: [{
      test: /\.ejs$/,
      loader: 'ejs-loader',
      options: {
        esModule: false
      }
    }, {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    }),
    new webpack.DefinePlugin({
      isProd: isProd,
      isDev: isDev
    }),
    //new StyleLintPlugin(),
    new HtmlWebpackPlugin({
      template: './src/ejs/index.ejs',
      filename: 'index.html',
      hash: isProd,
      minify: (isProd) ? {
        collapseWhitespace: true,
        keepClosingSlash: true,
        removeComments: true,
        removeRedundantAttributes: false,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true
      } : false
    }),
    new FaviconsWebpackPlugin({
      logo: path.resolve(__dirname, 'docs/assets/img/favicon.png'),
      prefix: '/favicons/',
      cache: true,
      inject: true,
      favicons: {
        start_url: '/',
        lang: 'ru',
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: false,
          coast: false,
          favicons: true,
          firefox: false,
          windows: false,
          yandex: false
        }
      }
    })
  ]
}

// Development config
if (isDev) {
  module.exports = merge(commonConfig, {
    module: {
      rules: [{
        test: /\.s?css$/,
        exclude: /node_modules/,
        use: [{
          loader: 'style-loader',
        }, {
          loader: 'css-loader',
          options: {
            url: false,
            sourceMap: true
          }
        }, {
          loader: 'sass-loader',
          options: {
            sourceMap: true
          }
        }]
      }
      ]
    },
    devServer: {
      historyApiFallback: true,
      open: true,
      hot: true,
      port: 3000,
      static: [
        { directory: path.resolve(__dirname, 'docs'), watch: false },
        { directory: path.resolve(__dirname, 'src/ejs') },
        { directory: path.resolve(__dirname, 'src/config') }
      ]
    },
    devtool: 'inline-source-map'
  })
}

// Production config
if (isProd) {
  module.exports = merge(commonConfig, {
    module: {
      rules: [{
        test: /\.s?css$/,
        exclude: /node_modules/,
        use: [{
          loader: MiniCssExtractPlugin.loader,
        }, {
          loader: 'css-loader',
          options: {
            url: false
          }
        }, {
          loader: 'postcss-loader',
          options: {
            postcssOptions: {
              plugins: ['autoprefixer']
            }
          }
        }, {
          loader: 'sass-loader'
        }]
      }]
    },
    plugins: [
      new webpack.ProgressPlugin(),
      new CleanWebpackPlugin({
        cleanOnceBeforeBuildPatterns: [
          '**/*',
          '!CNAME',
          '!robots.txt',
          '!assets/**'
        ]
      }),
      new MiniCssExtractPlugin({
        filename: '[name].[contenthash:8].css'
      })
    ],
    optimization: {
      minimize: true,
      minimizer: [
        new TerserPlugin({
          terserOptions: {format: {comments: false}},
          extractComments: false
        }),
        new CssMinimizerPlugin({
          minimizerOptions: {
            preset: [
              'default',
              {discardComments: {removeAll: true}}
            ],
          },
        })
      ],
      splitChunks: {
        cacheGroups: {
          commons: {
            test: /[\\/]node_modules|vendor[\\/]/,
            name: 'vendor',
            chunks: 'all'
          }
        }
      },
    }
  })
}
