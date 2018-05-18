path = require('path');

module.exports = {
    entry: './app/client/app.js',
    output: {
        path: path.join(__dirname, 'app/static/bin'),
        filename: 'app.bundle.js',
    },
    module: {
        loaders: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
        },
        { test: /\.html$/, loader: "html-loader" },
        { test: /\.css$/, loader: "style-loader!css-loader" }
      ]
    },
    devtool: "#inline-source-map"
}
