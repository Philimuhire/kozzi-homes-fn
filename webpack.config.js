const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development', // Change to 'production' for production builds
  entry: './src/index.js', // Entry point for your app
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true, // Cleans the output directory before building
  },
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    port: 3000, // Development server port
    hot: true, // Enable Hot Module Replacement
    open: true, // Automatically open the browser
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/, // Match .js and .jsx files
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/, // Match CSS files
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|jfif)$/, // Match image files
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // Your HTML template file
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'], // Allow importing .js and .jsx files without extensions
  },
};
