const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
    entry: './src/index.tsx', //  ./src/JS/index.js  ./src/TS/index.ys
    output: {
        path: path.resolve(__dirname, './dist'), // 文件出口
        filename: '[name].bundle.js', // 出口文件名
    },
    mode: 'development', //production ｜ development
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Scaffold-2022',
            template: path.resolve(__dirname, './public/index.html'),
            filename: 'index.html',
        }),
    ],
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.css', '.scss'],
        modules: ['src', 'node_modules'],
    },
    module: {
    /* ... */
        rules: [
            /* ... */
            {
                test: /\.ts$/,
                loader: 'esbuild-loader',
                exclude: /node_modules/,
                include: [path.resolve(__dirname, 'src')],
                options: {
                    loader: 'ts',
                    target: 'es2015',
                },
            },
            {
                test: /\.tsx$/,
                loader: 'esbuild-loader',
                exclude: /node_modules/,
                include: [path.resolve(__dirname, 'src')],
                options: {
                    loader: 'tsx',
                    target: 'es2015',
                },
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader'],
            },
        ],
    },
    devServer: {
        historyApiFallback: true,
        hot: true,
        port: 3006,
    },
}
