var webpack = require('webpack');
var path = require('path');

module.exports = {
    context: path.join(__dirname, 'src'),
    entry: {
      javascript: './javascript/app.js',
      html: './index.html'
    },
    output: {
      path: path.join(__dirname, 'public'),
      filename: 'bundle.js'
    },
    module: {
        loaders: [
            { test: /\.js?$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/ },
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
            { test: /\.scss$/, loaders: ['style', 'css', 'sass'] },
            { test: /\.html$/, loader: 'file?name=[name].[ext]' }
        ]
    },
    plugins: [
      new webpack.NoErrorsPlugin()
    ]

};
