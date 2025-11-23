import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
// TODO: add Services, Gallery, Packages, About, Contact later

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />

      {/* <Route path="/services" element={<Services />} /> ... */}
    </Routes>
  );
};

export default App;
