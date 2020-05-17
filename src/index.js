import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import CounterProvider from "./context/count";

ReactDOM.render(
  <CounterProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </CounterProvider>,
  document.getElementById("root")
);
serviceWorker.unregister();
