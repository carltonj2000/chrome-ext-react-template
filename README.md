# Chrome Extension With React Template

## History

The code in this repository is based on the following.

- [Build a Chrome Extension Using ReactJS](https://anobjectisa.com/?p=135)
  article
- [Build a Chrome Extension with React](https://youtu.be/nvm3c6ilcN8)
  accompanying video to above article
- [DIY Performance Data Gathering Chrome Extension](https://youtu.be/5WbpZlJCWNk)
- [Webpack 5 Full Project Setup](https://youtu.be/TOb1c39m64A)

### Creation Setup

- create `manifest.json`
- create icons for the manifest
- `npm init -y`

```bash
npm i -D \
   webpack \
   webpack-cli \
   webpack-dev-server
```

`npm run build` works for commit 8d98cfb64656553005bcc919e658a06f8e705b4e

```bash
npm i -D \
   copy-webpack-plugin \
   clean-webpack-plugin \
   html-webpack-plugin
```

```bash
npm i -D \
   @babel/core \
   @babel/plugin-proposal-class-properties \
   @babel/preset-env \
   @babel/preset-react \
   babel-loader \
   css-loader
```
