import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Components/Register/Login';
import Signup from './Components/Register/Signup';
import Home from './Components/Register/Home';
import Main from './Components/Profile/Main';
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
import Backlink from './Components/Profile/Backlink';
import Snippet from './Components/Profile/Snippet';
import SnippetGenerator from './Components/Profile/SnippetGenerator';
import BackliteChesker from './Components/Profile/BackliteChesker';
import KeywordResearchTool from './Components/Profile/KeywordResearchTool';


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
          <Route path="/Backlink" element={<Backlink />} />
          <Route path="/KeywordResearchTool" element={<KeywordResearchTool />} />
          <Route path="/Snippet" element={<Snippet />} />
          <Route path="/SnippetGenerator" element={<SnippetGenerator />} />
          <Route path="/Main" element={<Main/>} />
          <Route path="/BackliteChesker" element={<BackliteChesker/>} />


        </Routes>
      </Router>
    </div>
  );
}

export default App;
