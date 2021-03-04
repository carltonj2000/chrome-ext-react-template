import React from "react";
import ReactDOM from "react-dom";

import "./App.css";

const App = () => {
  const clickHandler = () => console.log("click handler called");

  return (
    <div>
      <button onClick={clickHandler}>Click</button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
