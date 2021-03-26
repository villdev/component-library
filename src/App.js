import React from "react";
import "./css/style.css";

// import Example from "./components/Example";
import Avatar from "./components/avatar/Avatar";
import Alert from "./components/alerts/Alert";
import Badge from "./components/badges/Badge";
import Button from "./components/buttons/Button";

export default function App() {
  return (
    <div className="App">
      <h1>Monochrome.js</h1>
      <Avatar />
      <br />
      <hr />
      <Alert />
      <br />
      <hr />
      <Badge />
      <br />
      <hr />
      <Button />
    </div>
  );
}
