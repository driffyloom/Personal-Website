var webpack = require('webpack')

module.exports = {
    entry: {
      app: __dirname + '/Client/src/app.jsx'
    },
    module: {
      rules: [
        { 
          test: [/\.jsx$/],
          exclude: /node_modules/,
          loader: 'babel-loader',
          
          query: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        },
        {
          test: /\.css$/,
          loader: "style-loader!css-loader"
        },
        {
          test: /\.(ttf|eot|woff|woff2|otf)$/,
          use: {
            loader: "file-loader",
            options: {
              name: "fonts/[name].[ext]",
            },
          },
        },
        {
          test: /\.(gif|svg|jpg|png)$/,
          loader: "file-loader",
        }],
    },
    
    output: {
      filename: 'bundle.js',
      path: __dirname + '/Client/dist'
    }
  };