import React from "react";
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Home from "./footerPages/Copyright"
import Impressum from "./footerPages/Impressum"
import About from "./footerPages/About"

export const Footer = () => {
  return (
  <Router>
    <div>
      
      <nav className="bg-light fixed-bottom py-4 d-flex justify-content-around">
        <Link to="/copyright">Copyright</Link>
        <Link to="/impressum">Impressum</Link>
        <Link to="/about">About</Link>
        <Routes>
          <Route path="/copyright" element={<Home />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/about" element={<About />} />
        </Routes>
        
      </nav>
    </div>
  </Router>
    );
};
