var path = require('path');


module.exports = {
  entry: "./app.js",
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js"
  },
  resolve: {
    alias: {
      'parchment': path.resolve(__dirname, 'node_modules/parchment/src/parchment.ts'),
      'quill$': path.resolve(__dirname, 'node_modules/quill/quill.js'),
    },
    extensions: ['', '.js', '.ts', '.svg']
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      query: {
        presets: ['es2015']
      }
    }, {
      test: /\.ts$/,
      loader: 'ts'
    }, {
      test: /\.svg$/, loader: 'html?minimize=true'
    }]
  }
}
