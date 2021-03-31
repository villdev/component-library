import React from "react";
import "./css/pars.css";
import "./css/prism.css";
import "./css/style.css";
import Header from "./components/Header";
import ComponentsRoute from "./components/ComponentsRoute";

export default function App() {
  return (
    <div className="App">
      <Header />
      <ComponentsRoute />
    </div>
  );
}
