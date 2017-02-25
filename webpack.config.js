const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './js/map.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/'
  },
  module: {
	  loaders: [
	    {
	      test: /\.js$/,
	      exclude: /(node_modules|bower_components)/,
	      loader: 'babel-loader',
	      query: {
	        presets: ['es2015']
	      }
	    },{
	    	test: /\.css$/,
	    	loaders: ['style-loader', 'css-loader']
	    }
  	]
	},
  plugins: [

  ]
};
