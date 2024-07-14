import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Components/Register/Login';
import Signup from './Components/Register/Signup';
import Home from './Components/Register/Home';
import Navbar from './Components/Register/Navbar';
import Footer from './Components/Register/Footer';
import Contact from './Components/Register/Contact';
import About from './Components/Register/About';
import Pricing from './Components/Register/Pricing';
import Careers from './Components/Register/Careers';
import Sidebar from './Components/Profile/Sidebar';
import Project from './Components/Profile/Project';
import HomeProfile from './Components/Profile/HomeProfile';
import Keyword from './Components/Profile/Keyword';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/Signup" element={<Signup />} />
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Navbar" element={<Navbar />} />
          <Route path="/Footer" element={<Footer />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/About" element={<About />} />
          <Route path="/Pricing" element={<Pricing />} />
          <Route path="/Careers" element={<Careers />} />
          <Route path="/Sidebar" element={<Sidebar />} />
          <Route path="/Project" element={<Project />} />
          <Route path="/Keyword" element={<Keyword />} />
          <Route path="/HomeProfile" element={<HomeProfile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
