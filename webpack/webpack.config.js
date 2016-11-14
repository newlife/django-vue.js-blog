var webpack = require('webpack');
module.exports = {
    entry: {
        base: ['../static/js/src/http.js', '../static/js/stickUp.min.js', '../static/js/src/base.js'],
        index: ['../static/js/src/index.js'],
        detail: ['../static/js/editormd.js', '../static/js/src/article.js'],
        know: ['../static/js/editormd.js', '../static/js/src/know.js'],
        list: ['../static/js/src/list.js']

    },
    output: {
        path: '../static/js/dist/',
        filename: '[name].js'
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            output: {
                comments: false
            },
            compress: {
                warnings: true
            }
        }),
    ]
}
