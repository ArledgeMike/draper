var webpack = require('webpack');
var path = require('path');
var node_dir = __dirname + '/node_modules';

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
        new webpack.HotModuleReplacementPlugin()
       
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
                        loaders: ['style', 'css', 'sass']
                    }
                    
                ]
    }
    
}