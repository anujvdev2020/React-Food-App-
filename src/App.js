import { useState, useEffect, useContext } from "react";
import "./styles.css";
import { MyContext } from "./MyContext";
import { Container } from "@mui/material";
import { Header } from "./Components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import { Home } from "./Components/Home";
import { Menu } from "./Components/Menu";
import { Contact } from "./Components/Contact";
const App = () => {
  return (
    <div className="App">
      {/* HEADER */}
      <Header />
      {/* <Home/> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/menu" element={<Menu />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
