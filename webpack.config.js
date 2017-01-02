var webpack = require('webpack');
var path = require('path');

module.exports = { 
    entry: {
        about: './dist/about',
        contact: './dist/contact'
    }, 
    output: {
        path: path.join(__dirname,'build'),
        filename: '[name].bundle.js'
    },
     module:{ 
         loaders: [ 
             {
                 test: /.js?/,
                 loader: 'babel-loader', 
                 exclude: /node_modules/,
                 query: {
                        presets: ['es2015','react']
                 }
             },
             {
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=2000'
             },
                 {
                     test: /\.css$/,loader: 'style-loader!css-loader'
                 }
              
        ] 
    } 
}
