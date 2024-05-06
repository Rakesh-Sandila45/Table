const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  plugins: [
    new ModuleFederationPlugin({
      name: "hostApp",
      filename: "remoteEntry.js", // File name for remote entry manifest
      exposes: {
        "./table": "./src/components/table", // Expose MyComponent
      },
      shared: ["react", "react-dom"], // Share React and React DOM
    }),
  ],
};
