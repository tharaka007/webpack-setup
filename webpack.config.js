const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',  // Your entry JS file
  output: {
    filename: 'bundle.js',  // Your output JS file
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader, // Extract CSS into separate file
          'css-loader',                // Handles CSS imports
          'postcss-loader',            // Apply PostCSS processing (sorting, autoprefixing)
          'sass-loader',               // Compile SCSS to CSS
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: 'styles.css' }), // Output CSS file
  ],
};
