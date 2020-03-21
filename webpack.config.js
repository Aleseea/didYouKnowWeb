var path = require("path");

const basePath = path.resolve(__dirname, "ui");
const sourcePath = basePath;
const outputPath = path.resolve(__dirname, "dist");
const webpack = require("webpack");

const DEVELOPMENT = process.env.NODE_ENV === "development";

const devPlugins = DEVELOPMENT ? [
    new webpack.HotModuleReplacementPlugin(),
] : [];


module.exports = {
    entry: {
        "app": path.resolve(sourcePath, "app_entry_point"),
    },
    output: {
        filename: "[name].bundle.js",
        path: outputPath,
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: ["babel-loader"]
            },
            {
                test: /\.s?css$/,
                include: [
                    path.resolve(sourcePath, "scss")
                ],
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.s?css$/,
                include: [
                    path.resolve(sourcePath, "js")
                ],
                use: [
                    "style-loader",
                    "css-loader?sourceMap&-colormin&root=.&modules&localIdentName=[name]__[local]",
                    "sass-loader",
                ]
            }
        ]
    },
    plugins: [
        //new webpack.HotModuleReplacementPlugin(),
        // new webpack.DefinePlugin({
        //     "DEVELOPMENT": DEVELOPMENT,
        //     "DEVELOPMENT_SERVER_STATIC_PATH": "'http://localhost:8888/dist'"
        // }),
    ],
    resolve: {
        modules: [
            path.resolve(__dirname, "node_modules"),
            path.resolve(sourcePath, "js"),
            path.resolve(sourcePath, "scss")
        ],
        extensions: [
            ".js",
            ".jsx"
        ]
    },
    devtool: DEVELOPMENT ? "eval-source-map" : "",
    devServer: {
        // contentBase: [
        //     outputPath
        // ],
        publicPath: "/dist",
        hot: true,
        hotOnly: true,
        port: 8888,
        host: "0.0.0.0",
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
            "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
        }
    },
    mode: process.env.NODE_ENV || "development"
};
