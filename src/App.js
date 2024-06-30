import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Components/Register/Login';
import Signup from './Components/Register/Signup';
import Home from './Components/Register/Home';
import Navbar from './Components/Register/Navbar';
import Homea from './Components/Register/Homea';
import Footer from './Components/Register/Footer';
import Contact from './Components/Register/Contact';
import About from './Components/Register/About';
import Pricing from './Components/Register/Pricing';



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* <Route path="/" element={<Loginsignup />} /> */}
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/" element={<Login />} />
          <Route path="/Navbar" element={<Navbar/>} />
          <Route path="/Homea" element={<Homea/>} />
          <Route path="/Footer" element={<Footer/>} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/About" element={<About />} />
          <Route path="/Pricing" element={<Pricing />} />



        </Routes>
      </Router>
    </div>
  );
}

export default App;
