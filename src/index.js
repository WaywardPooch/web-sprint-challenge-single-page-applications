// Import libraries
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
// Import styles
import "./reset.css";
// Import components
import App from "./App.js";
// Render the app
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
