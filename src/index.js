import React, { StrictMode as Strict } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-browser-router";
import App from "./App";

export default function index() {
  return (
    <div>
      <Strict>
        <Router>
          <App />
        </Router>
      </Strict>
    </div>
  );
}

render(<index />, document.getElementById("root"));
