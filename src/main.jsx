import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import RoutesApp from "./routes/router";
import "./global.css";
import "./index.css";
// alora
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <RoutesApp/>
  </React.StrictMode>,
);
