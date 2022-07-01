import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { initContract } from "./nearJs/utils";
import { BrowserRouter as Router } from "react-router-dom";

import { createRoot } from "react-dom/client";
import { Buffer } from "buffer";

global.Buffer = Buffer;

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

window.nearInitPromise = initContract()
  .then(() => {
    root.render(
      <Router>
        <App />
      </Router>
    );
  })
  .catch(console.error);
