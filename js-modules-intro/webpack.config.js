const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
    // entrypoint for the tree dependecy
    entry: './src/index.js',
    output: {
        // path + filename (for the js bundle)
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
        // used by the image-loader to prepend the dirname
        // where the processed images will be located
        publicPath: 'build/',
    },
    module: {
        // rulesets
        rules: [
            {
                use: 'babel-loader',
                // regexp for the file extensions to be
                // parsed by this loader
                test: /\.js$/
            },
            {
                // example of plugin usage on a ruleset
                loader: ExtractTextPlugin.extract({
                    loader: 'css-loader'
                }),
                test: /\.css$/
            },
            {
                // more than 1 format for the loader to parse
                test: /\.(jpe?g|png|gif|svg)$/,
                use: [
                    // specification of a loader with options
                    {
                        loader: 'url-loader',
                        options: { limit: 40000 }
                    },
                    'image-webpack-loader'
                    // loaders are triggered last-in-first-out
                ]
            }
        ]
    },
    // a plugin with the output file passed as argument
    plugins: [
        new ExtractTextPlugin('style.css')
    ]
}

module.exports = config;
