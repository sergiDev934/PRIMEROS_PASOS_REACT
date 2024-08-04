import React from "react";
import ReactDOM from "react-dom/client";
import Card from "./components/Card.jsx";
import "./main.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Card
      title="Hola Me llamo Sergio"
      desc="Tengo 17 años y vivo en Valencia"
      initialIsFollowing
    />
    <Card></Card>
  </React.StrictMode>
);
