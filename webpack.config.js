var path = require("path");

module.exports = {
  entry: "./app.ts",
  mode: "development",
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js",
  },
  resolve: {
    alias: {
      parchment: path.resolve(
        __dirname,
        "node_modules/parchment/src/parchment.ts"
      ),
      quill$: path.resolve(__dirname, "node_modules/quill/quill.js"),
    },
    extensions: [".js", ".ts", ".svg"],
  },
  module: {
    rules: [
      {
        test: /\.(j|t)s$/,
        use: [{ loader: "babel-loader" }],
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true },
          },
        ],
      },
    ],
  },
};
