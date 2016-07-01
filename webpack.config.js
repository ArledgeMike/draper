var webpack = require('webpack');
var path = require('path');
var node_dir = __dirname + '/node_modules';

var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports ={
    devtool: 'inline-source-map',
    entry:[
        'webpack-dev-server/client?http://127.0.0.1:8080/',
        'webpack/hot/only-dev-server',
        './src/js/index'
  
    ],
    output:{
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin('style.css',{
            allChunks:true
        })
       
    ],
    module:{
        loaders:[
                    {
                        test: /\.jsx?$/,
                        exclude: /(node_modules|bower_components)/,
                        loader: 'babel-loader',
                        query: {
                            presets: ['react', 'es2015', 'stage-0'],
                            plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy'],
                        }
                    },{
                        test: /\.scss$/,
                        loader: ExtractTextPlugin.extract('css!sass')
                        //loaders: ['style', 'css', 'sass']
                    }
                    
                ]
    }
    
}