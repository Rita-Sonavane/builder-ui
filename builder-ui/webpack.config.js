var path = require("path");
//var webpack=require('webpack');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const { argv } = require("process");

//run in node
module.exports = (env, args) => {
  return {
    entry: {
      main: "./src/Main.ts",
    },
    output: {
      path: path.resolve(__dirname, "./dist"),
      filename: "bundle.js",
      clean: true,
    },
    target: "web",
    devtool:
      argv.mode === "production" ? "cheap-source-map" : "inline-source-map",
      devServer: {
      contentBase: "dist",
      publicPath: "/",
      open: true,
      hot: false,
      liveReload: true,
      historyApiFallback: true,
    },
    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: /(node_modules)/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
            },
          },
        },
        {
          test: /\.html$/i,
          use: ["raw-loader"],
        },
        {
          test: /\.css$/i,
          use: ["raw-loader"],
        },
        {
          test: /\.ts?$/,
          use: ["ts-loader"],
        },
        {
          test: /\.(sass|scss)$/,
          use: ["style-loader", "sass-loader"],
        },
        {
          test:/\.json$/,
          type:'json'
        }
      ],
    },
    externals: {
      "jquery": "jQuery",
      "jquery-ui": "jquery-ui/jquery-ui.js",
    },

    watch: true,

    resolve: {
      extensions: [
        "",
        ".webpack.js",
        ".web.js",
        ".ts",
        ".js",
        ".jsx",
        ".tsx",
        ".json",
        ".css",
        ".scss",
      ],
      modules: ["src", "node_modules"], // Assuming that your files are inside the src dir
    },
    plugins: [
      //new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: "./src/index.html", //tempalte file
        filename: "index.html", //output file
      }),

      new HtmlWebpackPlugin({
        template: "./src/preview.html", //tempalte file
        filename: "preview.html", //output file
      }),
      new CopyPlugin({
        patterns: [
          { from: "src/builder.css", to: "builder.css" },

        ],
      }),
    ],
    optimization: {
      minimize: argv.mode === "production",
    },
  };
};
