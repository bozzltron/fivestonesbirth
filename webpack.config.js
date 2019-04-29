const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');
const config = {
  entry: [
    './views/pages/index.ejs'
  ],
  output: {
    path: __dirname + "/dist"
  },
  module: {
    rules: [
      {
          test: /\.ejs$/,
          use: [
              {
                loader: "ejs-webpack-loader",
                options: {
                  htmlmin: true,
                  minifyJS: true,
                  minifyCSS: true
                }
              }
          ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: '!!ejs-webpack-loader!views/pages/about.ejs',
      filename: 'about.html'
    }),
    new HtmlWebpackPlugin({
      template: '!!ejs-webpack-loader!views/pages/birth.ejs',
      filename: 'birth.html'
    }),
    new HtmlWebpackPlugin({
      template: '!!ejs-webpack-loader!views/pages/encapsulation.ejs',
      filename: 'encapsulation.html'
    }),
    new HtmlWebpackPlugin({
      template: '!!ejs-webpack-loader!views/pages/herbs.ejs',
      filename: 'herbs.html'
    }),
    new HtmlWebpackPlugin({
      template: '!!ejs-webpack-loader!views/pages/index.ejs',
      filename: 'index.html'
    }),
    new HtmlWebpackPlugin({
      template: '!!ejs-webpack-loader!views/pages/massage.ejs',
      filename: 'massage.html'
    }),
    new HtmlWebpackPlugin({
      template: '!!ejs-webpack-loader!views/pages/meditation.ejs',
      filename: 'meditation.html'
    }),
    new HtmlWebpackPlugin({
      template: '!!ejs-webpack-loader!views/pages/services.ejs',
      filename: 'services.html'
    }),
    new HtmlWebpackPlugin({
      template: '!!ejs-webpack-loader!views/pages/yoga.ejs',
      filename: 'yoga.html'
    }),
    new CopyPlugin([
      { from: 'public'},
      { from: '.htaccess' },
      { from: 'manifest.json' }
    ]),
    new CleanWebpackPlugin(['dist/*']),
    new WorkboxPlugin.GenerateSW({
      clientsClaim: true,
      skipWaiting: true,
      cleanupOutdatedCaches: true
    })
  ]
};
 
module.exports = config;
 