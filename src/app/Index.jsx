import React from "react";

import "./styles/main.css";

import logo from "./shared/images/logo.svg";

export default () => (
  <div className="app-container">
    <img src={logo} className="app-logo" alt="logo" />
  </div>
);
