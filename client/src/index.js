import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "normalize.css";
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from "./App";

ReactDOM.render(
  <React.Fragment>
    <Router>
      <App />
    </Router>
  </React.Fragment>,
  document.getElementById("root")
);
