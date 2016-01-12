var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: {
        fashion: './src/fashion.js',
        vendor: [
            'vue',
            'vue-resource'
        ]

    },
    output: {
        filename: '[name].bundle.js',
        path: 'bulid',
        publicPath: "bulid/"
    },

    resolve: {
        root: [path.join(__dirname, 'bower_components')],
        extensions: ['', '.js']
    },
    module: {
        loaders: [{
            test: /\.less$/,
            loader: 'style-loader!css-loader!less-loader'
        }, {
            test: /\.css$/,
            loader: 'style-loader!css-loader'
        }, {
            test: /\.html$/,
            //loader: 'underscore-template-loader'
            loader: 'html'
        }, {
            test: /\.(jpe?g|png|gif|svg|woff|woff2|ttf|eot)$/,
            loader: 'url?limit=8192'
        }]
    },
    plugins: [
        new webpack.ResolverPlugin(
            new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin('bower.json', ['main'])
        ),
        new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
        new webpack.ProvidePlugin({
            Vue: 'vue'
        }),
        //===公共模块提取开始===
        //new CommonsChunkPlugin("admin-commons.js", ["ap1", "ap2"]),
        //new CommonsChunkPlugin("commons.js", ["p1", "p2", "admin-commons.js"])
        //===公共模块提取结束===
    ]
};
