import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./screen/Home";
import Login from "./screen/Login";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
