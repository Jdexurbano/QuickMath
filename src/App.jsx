/** @format */

import React from "react";
import Nav from "./components/Nav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdditionPage from "./pages/Addition/AdditionPage";
import Subtraction from "./pages/Subtraction/Subtraction";
import Multiplication from "./pages/Multiplication/Multiplication";
import Divison from "./pages/Division/Divison";
function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<AdditionPage />}></Route>
          <Route path="/subtraction" element={<Subtraction />}></Route>
          <Route path="/multiplication" element={<Multiplication />}></Route>
          <Route path="/division" element={<Divison />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
