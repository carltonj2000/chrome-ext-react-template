module.exports = {
  mode: "development",
  entry: {
    background: "./src/background.js",
    contentScript: "./src/contentScript.js",
    options: "./src/options.js",
    popup: "./src/popup.js",
  },
};
