const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const path = require('path')

const cssModuleRegex = /\.module\.css$/

module.exports = function (webpackEnv) {
    const isEnvProduction = !!webpackEnv?.production
    return {
        entry: './src/index.tsx',
        output: {
            path: path.resolve(__dirname, './dist'), // 文件出口
            filename: '[name].bundle.js', // 出口文件名
        },
        mode: isEnvProduction ? 'production' : 'development',
        plugins: [
            new HtmlWebpackPlugin({
                title: 'Scaffold-2022',
                template: path.resolve(__dirname, './public/index.html'),
                filename: 'index.html',
            }),
            new CssMinimizerPlugin(),
            new MiniCssExtractPlugin({
                // Options similar to the same options in webpackOptions.output
                // both options are optional
                filename: 'static/css/[name].[contenthash:8].css',
                chunkFilename: 'static/css/[name].[contenthash:8].chunk.css',
            }),
        ].filter(Boolean),
        resolve: {
            extensions: ['.js', '.jsx', '.ts', '.tsx', '.css', '.scss'],
            modules: ['src', 'node_modules'],
        },
        module: {
            /* ... */
            rules: [
                /* ... */
                {
                    test: /\.(png|jpe?g|svg|gif)$/i,
                    use: [
                        {
                            loader: 'file-loader',
                        },
                    ],
                },
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
                    exclude: cssModuleRegex,
                    use: [
                        MiniCssExtractPlugin.loader,
                        {
                            loader: 'css-loader',
                            options: {
                                importLoaders: 1,
                                modules: false,
                            },
                        },
                        'postcss-loader'],
                },
                {
                    test: cssModuleRegex,
                    use: [
                        MiniCssExtractPlugin.loader,
                        {
                            loader: 'css-loader',
                            options: {
                                importLoaders: 1,
                                modules: {
                                    mode: 'local',
                                    localIdentName: '[name]__[local]--[hash:base64:5]',
                                },
                            },
                        },
                        'postcss-loader'],
                },
                {
                    test: /\.less$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        {
                            loader: 'css-loader',
                            options: {
                                importLoaders: 2,
                                modules: {
                                    mode: 'local',
                                    localIdentName: '[name]__[local]--[hash:base64:5]',
                                },
                            },
                        },
                        'postcss-loader',
                        {
                            loader: 'less-loader',
                            options: {
                                lessOptions: {
                                    javascriptEnabled: true,
                                },
                            },
                        },
                    ],
                },
            ],
        },
        devServer: {
            historyApiFallback: true,
            hot: true,
            port: 3006,
        },
    }
}
