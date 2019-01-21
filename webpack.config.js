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
        }
      ]
    },
    output: {
      filename: 'bundle.js',
      path: __dirname + '/Client/dist'
    }
  };