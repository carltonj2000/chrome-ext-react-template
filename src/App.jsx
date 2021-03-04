import React from "react";
import ReactDOM from "react-dom";

import "./App.css";

const App = () => {
  const toContentScript = () => {
    chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(
        tabs[0].id,
        { txt: "Popup to contentScript" },
        (resp) => console.log({ resp })
      );
    });
  };

  const toBackgroundScript = () => {
    chrome.runtime.sendMessage({ txt: "Popup to background script" }, (resp) =>
      console.log({ resp })
    );
  };

  return (
    <div>
      <button onClick={toContentScript}>To Content Script</button>
      <button onClick={toBackgroundScript}>To Background Script</button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
