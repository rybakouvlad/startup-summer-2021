import React from "react";
import ReactDOM from "react-dom";
import "./styles/styles.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const entryBlock = document.getElementById("root");
const renderFunction = entryBlock.hasChildNodes()
  ? ReactDOM.hydrate
  : ReactDOM.render;

renderFunction(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>,
  entryBlock
);

