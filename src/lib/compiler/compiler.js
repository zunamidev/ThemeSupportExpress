"use strict";

const webpack = require("webpack");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

function compile(files) {
  // { entry: "main.css", output: { filename: "main.css" } }
  let entry = [];

  files.forEach(file => {
    entry.push(file);
  });
  console.log(entry[0]);
  const compiler = webpack({
    plugins: [new MiniCssExtractPlugin()],
    entry: entry[0],
    output: {
      filename: entry[0],
      path: path.resolve(__dirname, "dist")
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            "style-loader",
            {
              loader: "css-loader",
              options: {
                importLoaders: 1,
                modules: true
              }
            }
          ],
          include: /\.module\.css$/
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
          exclude: /\.module\.css$/
        }
      ]
    }
  });

  compiler.run();
}

module.exports = compile;
