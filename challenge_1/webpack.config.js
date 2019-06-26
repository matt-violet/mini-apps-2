const path = require('path');

module.exports = {
  entry: __dirname + "/client/app.jsx",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [ "babel-loader"],
      }, 
      {
        test: /\.css$/,
        use: [{loader: 'style-loader'}, 
        {loader: 'css-loader',
        options: {
          modules: true,
          importLoaders: 1,
          localIdentName: '[sha1:hash:hex:6]',
        },}],
      }
    ]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  }
};
