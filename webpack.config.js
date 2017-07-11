var htmlwp = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: [
            'webpack-dev-server/client?http://localhost:9527/',
            './src/main.js'
        ]
    },
    output: {
        path: __dirname + '/dist',
        filename: 'build.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: 'style-loader!css-loader'
            },
            {
                test: /\.(png|jpg|gif|ttf|svg)$/,
                use: 'ulr-loader?limit=10000'
            },
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /.vue$/,
                use: 'vue-loader'
            }
        ]
    },
    plugins: [
        new htmlwp({
            title: '首页',  //生成的页面标题<head><title>首页</title></head>
            filename: 'index.html', //webpack-dev-server在内存中生成的文件名称，自动将build注入到这个页面底部，才能实现自动刷新功能
            template: 'template.html' //根据index1.html这个模板来生成(这个文件请程序员自己生成)
        })
    ]
}