
const path = require('path');

const isProduction = process.env.NODE_ENV == 'production';

const stylesHandler = 'style-loader';


const config = {
  mode:'development',
  entry: './src/index.js',
  devtool:'inline-source-map',
  output: {
    filename:'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
        
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/i,
        use: [stylesHandler,'css-loader'],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: 'asset',
      },

      // Add your rules for custom modules here
    ],
  },
};

module.exports = () => {
  if (isProduction) {
    config.mode = 'production';
        
        
  } else {
    config.mode = 'development';
  }
  return config;
};
