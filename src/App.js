import { useState, useEffect, useContext } from "react";
import "./styles.css";
import { MyContext } from "./MyContext";
import { Container } from "@mui/material";
import { Header } from "./Components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
const App = () => {
  return (
    <div className="App">
      {/* HEADER */}
      <Header />
    </div>
  );
};
export default App;
