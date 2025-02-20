const path = require('path');
const MiniCssExtractPlugin  = require('mini-css-extract-plugin')

module.exports = {
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist')
        }
    },
    entry: {
        index: '.src/funcao.js',
    },
    mode: 'production',
    module: {
        rules: [{
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader']
        },{

        }]
    },
    output:{
        filename: '[name].min.js'
    },

    plugins: [
        new MiniCssExtractPlugin()
    ]
} 