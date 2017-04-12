// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add addional webpack configurations.
// For more information refer the docs: https://getstorybook.io/docs/configurations/custom-webpack-config

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.

var paths = require('../config/paths');

module.exports = {
  resolve: {
    alias: {
      'egeo-react' : paths.appLibrary
    }
  },
  plugins: [
    // your custom plugins
  ],
  module: {
    loaders: [
      {
        exclude: [
          /\.html$/,
          /\.(js|jsx)$/,
          /\.css$/,
          /\.scss$/,
          /\.json$/
        ],
        loader: 'url',
        query: {
          limit: 10000,
          name: 'static/media/[name].[hash:8].[ext]'
        }
      },
      {
        test: /\.css$/,
        loader: 'style!css?importLoaders=1!postcss'
      },
      {
        test: /\.scss$/,
        loader: 'style!css?importLodaders=1&localIndentName=[path]___[name]__[local]___[hash:base64:5]!sass-loader'
      }
    ],
  },
};
