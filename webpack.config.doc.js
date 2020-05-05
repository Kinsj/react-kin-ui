const base = require('./webpack.config');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// 同 webpack.config.dev.js
module.exports = Object.assign({}, base, {
    mode: 'production',
    entry: {
        ...base.entry,  // 合并entry配置
        example: './example.tsx'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Gulu',
            template: "example.html"
        })
    ],
});