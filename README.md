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

`npm run build` create a minimum chrome extension in `dist` which just
has console logs for commit d46edd8ceb09fad7a0607b6ccbe0e63133d72064

```bash
npm i -D \
   @babel/core \
   @babel/preset-env \
   @babel/preset-react \
   babel-loader \
   css-loader \
   style-loader

npm i react react-dom
```

Add minimal react code, setup and dependencies in
commit aa1ce4c070a82fbb19d99ff4872582578b6edcbf

```bash
npm i -D @types/chrome
```

Add communication example from popup to contentScript and background script.
To help with development added chrome types and watch build script.
commit tbd (but one after the above)
