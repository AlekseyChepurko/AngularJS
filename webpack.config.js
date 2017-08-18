const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const entryPoints = ['vendor', 'app'];

module.exports = {
    entry: {
        app: './src/index.module.js',
        vendor: './src/vendor.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: __dirname + '/bin',
    },
    watch: true,
    devtool: 'source-map',
    resolve: {
        extensions: [ '.js', '.html', '.css' ],
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /.html$/, loader: 'html-loader', options: { minimize: true } },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            inject: 'head',
            chunksSortMode: function sort(left, right) {
                let leftIndex = entryPoints.indexOf(left.names[0]);
                let rightindex = entryPoints.indexOf(right.names[0]);
                if (leftIndex > rightindex) {
                    return 1;
                }
                else if (leftIndex < rightindex) {
                    return -1;
                }
                else {
                    return 0;
                }
            }
        }),
    ]
};