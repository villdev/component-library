import React from "react";
import "./css/style.css";

// import Example from "./components/Example";
import Avatar from "./components/Avatar";
import Alert from "./components/Alert";
import Badge from "./components/Badge";
import Button from "./components/Button";
import Card from "./components/Card";
import Input from "./components/Input";
import Typography from "./components/Typography";
import Utility from "./components/Utility";

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
      <br />
      <hr />
      <Card />
      <br />
      <hr />
      <Input />
      <br />
      <hr />
      <Typography />
      <br />
      <hr />
      <Utility />
      <br />
    </div>
  );
}
