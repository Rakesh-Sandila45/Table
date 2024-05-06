const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "http://path-to-table-app.com/", // Update with your Table app's public URL
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "tableApp",
      remotes: {
        tileApp: "tileApp@http://path-to-tile-app.com/remoteEntry.js", // Remote entry URL of Tile app
      },
      shared: ["react", "react-dom"], // Share React and React DOM
    }),
  ],
};
