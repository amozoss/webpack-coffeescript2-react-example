module.exports = {
  entry: './index.coffee',
  output: {
    filename: 'public/static/js/bundle.js'
  },
  module: {
    loaders: [
      { test : /\.coffee$/, loader : 'babel-loader' },
      { test: /\.coffee$/, loader: "coffee-loader" }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx", ".coffee"]
  }
}
