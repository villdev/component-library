import React from "react";
import "./css/pars.css";
import "./css/prism.css";
import "./css/style.css";
import Header from "./components/Header";
import ComponentsRoute from "./components/ComponentsRoute";
import { BrowserRouter as Router } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <ComponentsRoute />
      </Router>
    </div>
  );
}
