var webpack = require('webpack');
var path = require('path');
var CommonsChunkPlugin = require('./node_modules/webpack/lib/optimize/CommonsChunkPlugin');  // this plugin is usefull to optimize common code, and 
//to create a vendor bundle file, the vendor are files are your third party libraries, eg. jquery, react,react-dom, etc..

module.exports = { 
    entry: {
        about: './src/about', 
        contact: './src/contact',
        vendor: ['react','react-dom']
    }, 
    output: {
        path: path.join(__dirname,'build'), // both statements, creates a generic output, by creating a unique bundle, the [name].bundle
        filename: '[name].bundle.js'        // is replace by the values of the entry points.  so for this configuration, the following files 
    },                                      //the following files will be created. about.bundle.js, contact.bundle.js,vendor.budle.js file.
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
    } ,
    plugins: [
        new CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.bundle.js' })  //this is nessary to include when bundling vendor code.
    ]
}
