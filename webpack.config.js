// webpack uses this to work with directories
const path = require('path') ;
const HtmlWebpackPlugin = require('html-webpack-plugin') ;
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// This is the main configuation object.
// Here we write different options and tell webpack what to do
module.exports = {
    // Path to the entry point. From this file webpack will began its work
    entry: {
        'app': './client/js/index.js',
        'libs': './client/js/libs.js',
        'styles-custom': './client/js/styles-custom.js',
        'styles-lib': './client/js/css-lib.js'
    },
    // Path and filename of the result bundle.
    // Webpack will bundle all javascript into this file

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename:'[name].js'
    },

    // //Plugins
    plugins:[
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'client/index.html'
        }),
        new HtmlWebpackPlugin({
          filename: 'about.html',
          template: 'client/about.html'
      }),
      new HtmlWebpackPlugin({
        filename: 'project.html',
        template: 'client/project.html'
    }), new HtmlWebpackPlugin({
      filename: 'contact.html',
      template: 'client/contact.html'
    })
    ]


    // module: {
    //   rules: 
    //     {
    //     test: /\.js$/,
    //     exclude: /(node_modules)/,
    //     use: {
    //       loader: 'babel-loader',
    //       options: {
    //         presets: ['@babel/preset-env']
    //       }
    //     }
    //   ,

    //   rules: [
    //     {
    //       test: /\.css$/i,
    //       use: ['style-loader', 'css-loader'],
    //     },
    //   ],

    //   plugins: [new MiniCssExtractPlugin()],
    //   module: {
    //     rules: [
    //       {
    //         test: /\.css$/i,
    //         use: [MiniCssExtractPlugin.loader, 'css-loader'],
    //       },
    //     ],
    //   },
      
    //     rules: [
    //       {
    //         test: /\.(png|jpe?g|gif|svg)$/i,
    //         use: [
    //           {
    //             loader: 'file-loader',
    //           },
    //         ],
    //       },
    //     ],
      

      // module: {

      //   rules: [{
      //     test: /\.js$/, // include .js files
      //     enforce: "pre", // preload the jshint loader
      //     exclude: /node_modules/, // exclude any and all files in the node_modules folder
      //     use: [{
      //       loader: "jshint-loader",
      //       // more options in the optional jshint object
      //       options: {  // ⬅ formally jshint property
      //         camelcase: true,
      //         emitErrors: false,
      //         failOnHint: false
      //       }
      //     }]
      //   }]
      // }
        
          
    // Default mode for webpack is production.
    // Depending on mode webpack will apply different things.
    // on final bundle. I need prodcution for mine
}
