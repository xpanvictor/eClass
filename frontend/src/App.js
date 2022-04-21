import React from "react";

import { Route, Routes } from "react-router-dom";

import "./App.css";
import Navbar from "./components/Navbar";
import Assigned from "./pages/Assigned";
import Classes from "./pages/Classes";
import DashBoard from "./pages/Dashboard";
import Home from "./pages/Home";

function App() {
  return (
    <div className="bg-gradient-to-br from-black to-[#384E8D] h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/assigned" element={<Assigned />} />
        <Route path="/dashboard" element={<DashBoard />} />
      </Routes>
    </div>
  );
}

export default App;
