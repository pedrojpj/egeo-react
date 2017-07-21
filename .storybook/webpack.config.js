var paths = require('../config/paths');

module.exports = {
  resolve: {
    alias: {
      'egeo-react': paths.appLibrary
    }
  },
  module: {
    rules: [
      {
        exclude: [/\.html$/, /\.(js|jsx)$/, /\.css$/, /\.scss$/, /\.json$/],
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: 'static/media/[name].[hash:8].[ext]'
        }
      },
      {
        test: /\.scss$/,
        loader:
          'style-loader!css-loader?importLodaders=1&localIndentName=[path]___[name]__[local]___[hash:base64:5]!sass-loader',
        exclude: [paths.appComponents]
      },
      {
        test: /\.scss$/,
        loaders: [
          'style-loader',
          'css-loader?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
          'sass-loader'
        ],
        include: [paths.appComponents]
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: {
          presets: ['react-app'],
          plugins: [
            [
              'react-css-modules',
              {
                filetypes: {
                  '.scss': 'postcss-scss'
                },
                webpackHotModuleReloading: true
              }
            ]
          ]
        }
      }
    ]
  }
};
