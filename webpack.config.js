const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  plugins: [
    new ModuleFederationPlugin({
      name: "remoteApp",
      remotes: {
        hostApp: "https://main--snazzy-valkyrie-328f8e.netlify.app/", // Remote entry URL of host application
      },
      shared: ["react", "react-dom"], // Share React and React DOM
    }),
  ],
};
