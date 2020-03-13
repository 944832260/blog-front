const webpack = require("webpack");
const path = require("path");
const autoprefixer = require("autoprefixer");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
// const ImageminPlugin = require("imagemin-webpack-plugin").default;
const TerserJSPlugin = require("terser-webpack-plugin");
const Config = require("./config");
const {MODE, SERVER, TEST} = process.env;
const IsDevelopment = MODE === "development";

console.log(MODE,'---------------------------------------------------------------->')
const CssExtractLoader = IsDevelopment ? "style-loader" : MiniCssExtractPlugin.loader;
const PostcssLoader = {
  loader: "postcss-loader",
  options: {
    plugins: function () {
      return [
        autoprefixer
      ];
    }
  }
};

const LessLoader = {
  loader: "less-loader",
  options: {
    javascriptEnabled: true,
    // modifyVars: <color> // antd 自定义主题颜色
  }
};


const webpackConfig = {
  entry: [
    "react-hot-loader/patch",
    path.resolve(__dirname, "./src/index.js"),
  ],
  output: {
    path: IsDevelopment ? __dirname : path.resolve(__dirname, "frontend"),
    filename:IsDevelopment?"static/js/[name].js": "static/js/build.[hash:8].js",
    chunkFilename: "static/js/[name].[hash:8].js",
    publicPath: IsDevelopment ? "/" : (SERVER ? "/" : "/frontend/")
  },
  resolve: {
    extensions: ['.js'],
    alias: {
      '@components': path.resolve(__dirname, "src/components"),
      '@public': path.resolve(__dirname, "src/public"),
      '@http': path.resolve(__dirname, "src/http"),
      '@router': path.resolve(__dirname, "src/router"),
      '@store': path.resolve(__dirname, "src/store"),
      '@assets': path.resolve(__dirname, "src/assets"),
      'react-dom': '@hot-loader/react-dom'
    }
  },
  mode: MODE,
  devtool: IsDevelopment ? "cheap-module-source-map" : "source-map",
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [
          {
            loader: "babel-loader",
            query: {
              compact: false,
              cacheDirectory: true,
            }
          }
        ],
      },
      {
        test: /\.css$/,
        include: [
          path.resolve(__dirname, "src"),
          path.resolve(__dirname, "node_modules/antd")
        ],
        use: [
          CssExtractLoader,
          "css-loader",
          PostcssLoader,
        ]
      },
      {
        test: /\.scss$/,
        include: [
          path.resolve(__dirname, "src"),
        ],
        use: [
          CssExtractLoader,
          "css-loader",
          PostcssLoader,
          "sass-loader"
        ]
      },
      {
        test: /\.less$/,
        include: [
          path.resolve(__dirname, "src"),
          path.resolve(__dirname, "node_modules/antd")
        ],
        use: [
          CssExtractLoader,
          "css-loader",
          PostcssLoader,
          LessLoader
        ]
      },
      {
        test: /\.(woff|svg|ttf|eot|woff2)(\?.*)?$/,
        loader: "url-loader",
        exclude: /node_modules/,
        query: {
          limit: 5000,
          name: "static/font/[name].[hash:8].[ext]"
        }
      },
      {
        test: /\.(png|jpg|gif|ico)$/,
        loader: "url-loader",
        exclude: /node_modules/,
        query: {
          limit: 5000,
          name: "static/image/[name].[hash:8].[ext]"
        }
      }
    ]
  },
  devServer: {
    host: Config.ip,
    port: Config.port,
    historyApiFallback: true,
    stats: {
      colors: true
    },
    proxy:
      !Config.proxy || Config.proxy.length === 0 ?
        undefined :
        Config.proxy.map(item => (
          {
            context: item.path,
            target: item.target,
            changeOrigin: true,
            secure: false
          }
        ))
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "static/css/style.[hash].css",
      chunkFilename: "static/css/[id].[hash].css",
    }),
    new HtmlWebpackPlugin({
      filename: "index.html",
      // favicon: "./src/assets/favicon.ico",
      inject: true,
      template: "index.html",
      minify:  IsDevelopment ? false : {
        removeComments: true,
        collapseWhitespace: true,
        minifyJS: true,
        minifyCSS: true
      },
      hash: false
    }),
    // new ImageminPlugin({
    //   disable: !IsDevelopment,
    //   pngquant: {
    //     quality: "50-60"
    //   }
    // })
  ]
};

if(!IsDevelopment){
  if(!SERVER) webpackConfig.entry.splice(0, 1);
    webpackConfig.optimization = {
    minimizer: [
      new TerserJSPlugin(),
      new OptimizeCSSAssetsPlugin()
    ],
  }
}

module.exports = webpackConfig;
