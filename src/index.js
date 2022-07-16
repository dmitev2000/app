import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
//import Navbar from './components/layout/Navbar';
import NavbarV2 from "./components/layout/NavbarV2";
import "./components/layout/Navbar.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <NavbarV2 />
    <App />
  </Router>
);
