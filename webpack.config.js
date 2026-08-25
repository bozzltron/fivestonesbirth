const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './views/pages/index.ejs',
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
      template: '!!ejs-webpack-loader!views/pages/buccal-massage.ejs',
      filename: 'buccal-massage.html'
    }),
    new HtmlWebpackPlugin({
      template: '!!ejs-webpack-loader!views/pages/emotion-coding.ejs',
      filename: 'emotion-coding.html'
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
    new CopyPlugin({
      patterns: [
        { from: 'public', to: '.', noErrorOnMissing: true },
        { from: '.htaccess', noErrorOnMissing: true },
        { from: 'manifest.json' },
        { from: 'robots.txt', noErrorOnMissing: true },
        { from: 'sitemap.xml', noErrorOnMissing: true }
      ]
    }),
    new CleanWebpackPlugin(),
    new WorkboxPlugin.GenerateSW({
      clientsClaim: true,
      skipWaiting: true,
      cleanupOutdatedCaches: true,
      maximumFileSizeToCacheInBytes: 5 * 1024 * 1024
    })
  ]
};
