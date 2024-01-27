import React from 'react';
import './style.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Home'; // Import HomePage component
import AltaPagina from './AltaPagina'; // Import AltaPagina component

export default function App() {
  return (
    <Router>
      <Routes> {/* Define all Routes here */}
        <Route path="/" element={<HomePage />} /> {/* Route for HomePage */}
        <Route path="/alta-pagina" element={<AltaPagina />} /> {/* Route for AltaPagina */}
      </Routes>
    </Router>
  );
}
