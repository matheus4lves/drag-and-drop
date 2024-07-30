import path from "path";
import { Configuration } from "webpack";
// Opt 2: import { type Configuration } from "webpack"; // When "verbatimModuleSyntax": true in tsconfig.json
// Opt 3: import webpack from "webpack";
import { merge } from "webpack-merge";

const { loadTypeScript, generateHTML } = require("./webpack.parts");

const commonConfig = {
  context: path.resolve(__dirname, "app"),
  entry: "./index.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
};

const configs = {
  development: merge([loadTypeScript(), generateHTML()]),
  production: merge([]),
};

module.exports = (_env: any, argv: any) => {
  const mode: "development" | "production" = argv.mode;
  return merge<Configuration>([commonConfig, configs[mode], { mode }]);
  // return merge<webpack.Configuration>([...]); When using Opt 3
};
