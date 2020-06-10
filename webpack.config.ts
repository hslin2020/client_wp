/**
 * 打包webpack配置，后续改成ts配置
 * @see https://webpack.js.org/configuration/configuration-languages/
 * @author: hs.lin
 * @date: 2020/06/05 10:31:17
 */

import path from "path";
import { Configuration } from "webpack";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import ForkTsCheckerNotifierWebpackPlugin from "fork-ts-checker-notifier-webpack-plugin"

const isProduction = false;
const outPath = path.resolve("bin/js");
const srcPath = path.resolve("src");

const config: Configuration = {
    mode: isProduction ? "production" : "development",
    devtool: isProduction ? false : false,
    optimization: { minimize: isProduction, sideEffects: true },
    context: srcPath,
    entry: "./main.ts",
    resolve: {
        extensions: [".js", ".ts"],
    },
    output: {
        path: outPath,
        filename: "main_webpack.js"
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: "ts-loader",
                options: {
                    transpileOnly: true,
                },
            },
        ]
    },
    plugins: [
        new ForkTsCheckerWebpackPlugin({
            tsconfig: path.resolve("tsconfig.json"),
        }),
        new ForkTsCheckerNotifierWebpackPlugin({
            title: "TypeScript",
            excludeWarnings: false
        })
    ],
}

export default [config];
// export default webConfig;
