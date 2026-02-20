import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import PhotoGallery from './pages/PhotoGallery';
import ChitSchemes from './pages/ChitSchemes';
import OurTeam from './pages/OurTeam';
import Testimonials from './pages/Testimonials';
import Payments from './pages/Payments';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<PhotoGallery />} />
          <Route path="/schemes" element={<ChitSchemes />} />
          <Route path="/team" element={<OurTeam />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/payments" element={<Payments />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
