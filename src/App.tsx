import React from "react";
import { NavBar } from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage, Login, Restaurants } from "./screens";

const App: React.FC = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<><NavBar /><HomePage/></>} />
          <Route path="/restaurants" element={<><NavBar /><Restaurants/></>} />
          <Route path="/contactus" element={<></>} />
          <Route path="/login" element={<><Login/></>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
