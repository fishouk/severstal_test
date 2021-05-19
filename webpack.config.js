const path = require("path");

module.exports = (env) => {
  const modules = {
    js: {
      test: /\.ts(x?)$/,
      exclude: /node_modules/,
      resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"],
      },
      use: [
        {
          loader: "ts-loader",
        },
      ],
    },
    loaders: [
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ],
  }

  return {
    modules
  }
}
