import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Packages from "./pages/Packages";
import Gallery from "./pages/Gallery";
// TODO: add Services, Gallery, Packages, About, Contact later

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/packages" element={<Packages />} />
      <Route path="/gallery" element={<Gallery />} />
    </Routes>
  );
};

export default App;
