var webpack = require('webpack')

module.exports = {
    entry: {
      app:'./Client/src/app.jsx',
      menu: './Client/src/menu.jsx'
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
      filename: '[name].js',
      path: __dirname + '/Client/dist'
    }
  };