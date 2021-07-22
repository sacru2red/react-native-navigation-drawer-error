const path = require('path')
const { WebpackManifestPlugin } = require('webpack-manifest-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
// const webpack = require('webpack')

module.exports = (_, webpackEnv = {}) => {
//   console.log('webpackEnv', webpackEnv)
  const { mode } = webpackEnv
  const isEnvDevelopment = mode === 'development'
  const isEnvProduction = mode === 'production'

  return {
    target: 'web',
    mode: isEnvProduction ? 'production' : isEnvDevelopment && 'development',
    entry: {
      main: path.join(__dirname, 'src', 'index.web.js')
    },
    output: {
      path: path.join(__dirname, 'public'),
      filename: isEnvProduction
        ? '[name].[contenthash:8].js'
        // : 'bundle.js',
        : '[name].js',
      chunkFilename: isEnvProduction
        ? '[name].[contenthash:8].chunk.js'
        : '[name].chunk.js'
    },
    devtool: isEnvProduction ? false : 'inline-source-map',
    resolve: {
      alias: {
        // 'react-native$': require.resolve('react-native-web'),
        'react-native$': 'react-native-web',
        '@': path.resolve(__dirname, 'src/'),
        components: path.resolve(__dirname, 'src/components/')
      }
    },
    module: {
      strictExportPresence: true,
      rules: [
        { parser: { requireEnsure: false } },
        {
          // 로더를 다음 중 하나로 배치하므로, 최소한 fileloader로 전달되도록 함
          oneOf: [
            {
              test: /\.(js|mjs|jsx|ts|tsx)$/,
              // @TODO
              // exclude: node_modules => include: app_src
              // append loader for runtime
              // exclude: path.resolve(__dirname, 'node_modules'),
              include: [
                path.resolve(__dirname, 'src/'),
                path.resolve(__dirname, 'node_modules', 'react-native-reanimated', 'lib')
              ],
              use: [
                {
                  loader: 'babel-loader',
                  options: {
                    presets: [
                      '@babel/preset-typescript',
                      '@babel/preset-env',
                      '@babel/preset-react',
                      '@babel/preset-flow'

                      // 'module:metro-react-native-babel-preset',
                    ],
                    plugins: mode === 'production'
                      ? [
                        'transform-remove-console',
                        '@babel/plugin-proposal-class-properties',
                        '@babel/plugin-proposal-object-rest-spread',
                        '@babel/plugin-transform-runtime'
                      ]
                      : [
                        '@babel/plugin-proposal-class-properties',
                        '@babel/plugin-proposal-object-rest-spread',
                        '@babel/plugin-transform-runtime'
                      ],
                    // 결과를 ./node_modules/.cache/babel-loader/에 캐쉬해서 rebuild 결과가 빨라짐
                    cacheDirectory: true,
                    // compact: true,
                    // babelrc: false,
                    // configFile: false,
                    // See #6846 for context on why cacheCompression is disabled
                    cacheCompression: false,
                    compact: isEnvProduction
                  }
                }
              ]
            },
            {
              test: /\.(js|mjs)$/,
              exclude: /@babel(?:\/|\\{1,2})runtime/,
              loader: require.resolve('babel-loader'),
              options: {
                babelrc: false,
                configFile: false,
                compact: false,
                cacheDirectory: true,
                // See #6846 for context on why cacheCompression is disabled
                cacheCompression: false,

                // Babel sourcemaps are needed for debugging into node_modules
                // code.  Without the options below, debuggers like VSCode
                // show incorrect code and set breakpoints on the wrong lines.
                sourceMaps: process.env.GENERATE_SOURCEMAP !== 'false',
                inputSourceMap: process.env.GENERATE_SOURCEMAP !== 'false'
              }
            },
            {
              // test: /\.(png|jpe?g|gif)$/i,
              exclude: [/\.(js|mjs|jsx|ts|tsx)$/, /\.html$/, /\.json$/],
              loader: 'file-loader',
              options: {
                name: 'static/media/[name].[hash:8].[ext]'
                // outputPath: 'images',
                // esModule: false
              }
            }
          ]
        }
      ]
    },
    // watch: true,
    devServer: {
      // contentBase --> Document Root
      contentBase: path.join(__dirname, 'public'),
      overlay: true,
      stats: 'errors-only',
      historyApiFallback: true,
      open: {
        app: ['Chrome']
      },
      openPage: 'index.html'
    },
    plugins: [
      // 해쉬가 포함된 output file 구조
      new HtmlWebpackPlugin({
        // filename: 'dev.html',
        // template: path.join(__dirname, 'template', 'index.ejs'),
        // template: path.join(__dirname, 'template', 'index.html'),
        template: 'index.html',
        filename: 'index.html'
      }),
      new WebpackManifestPlugin({
        fileName: 'manifest.json'
      })
      //   new webpack.DefinePlugin({
      //     __DEV__: process.env.NODE_ENV === 'production' || true,
      //   }),
    ],
    optimization: {
      minimize: isEnvProduction,
      minimizer: [new TerserPlugin({
        terserOptions: {
          parse: {
          // default: 5 (ES5)
          // cra setted value
            ecma: 8
          },
          compress: {
            ecma: 5,
            inline: 2,
            // 아래 두 옵션은 valid code에 대한 issue가 있어 off함
            warnings: false,
            comparisons: false
          },
          mangle: {
            safari10: true
          },
          output: {
            ecma: 5,
            comments: false,
            // 이모지와 정규식 minified시 오류가 있어 ascii_only 설정
            ascii_only: true
          },
          sourceMap: process.env.GENERATE_SOURCEMAP !== 'false'
        }
      })
      ],
      splitChunks: {
        chunks: 'async',
        minSize: 20000,
        minRemainingSize: 0,
        minChunks: 1,
        maxAsyncRequests: 30,
        maxInitialRequests: 30,
        enforceSizeThreshold: 50000,
        cacheGroups: {
          defaultVendors: {
            test: /[\\/]node_modules[\\/]/,
            priority: -10,
            reuseExistingChunk: true
          },
          default: {
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true
          }
        }
      }
      // https://medium.com/webpack/webpack-4-code-splitting-chunk-graph-and-the-splitchunks-optimization-be739a861366
      //   splitChunks: {
      //     // chunks: 'all',
      //     name: isEnvDevelopment
      //   },
      //   // Keep the runtime chunk separated to enable long term caching
    //   runtimeChunk: {
    //     name: entrypoint => `runtime-${entrypoint.name}`
    //   }
    }
    // optimization: {
    //   runtimeChunk: {
    //     name: 'runtime',
    //   },
    //   splitChunks: {
    //     cacheGroups: {
    //       commons: {
    //         // node_modules에 포함된 내용들을 vendor-chunk로 구분짓는다.
    //         test: /[\\/]node_modules[\\/]/,
    //         name: 'packages',
    //         chunks: 'all',
    //       },
    //     },
    //   },
    // },
  }
}
