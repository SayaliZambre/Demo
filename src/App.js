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

import Project from './Components/Sidebar/Project/Project';
import HomeProfile from './Components/Profile/HomeProfile';
import Keyword from './Components/Sidebar/Keyword/Keyword';
// import Backlink from './Components/Backlink/Backlink';

import Backlink from './Components/Sidebar/Backlink/Backlink';
import Snippet from './Components/Sidebar/Snippet/Snippet';
import SnippetGenerator from './Components/Sidebar/Snippet/SnippetGenerator';
import Backlinkchecker from './Components/Sidebar/Backlink/Backlinkchecker';
import Keywordresearchtool from './Components/Sidebar/KeywordResearchTool/Keywordresearchtool';
import Keywordcheker from './Components/Sidebar/Keyword/Keywordcheker';

import KeywordResearchToolmain from './Components/Sidebar/KeywordResearchTool/KeywordResearchToolmain';


import Homeapp from './Components/Sidebar/Home/Home';
import Homemain from './Components/Sidebar/Home/Homemain';



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
          <Route path="/Homeapp" element={<Homeapp />} />
          <Route path="/Homemain" element={<Homemain />} />

          <Route path="/Keywordcheker" element={<Keywordcheker />} />

          {/* <Route path="/ProjectMain" element={<ProjectMain/>}/> */}
          <Route path="/Keywordresearchtool" element={<Keywordresearchtool />} />
          <Route path="/Snippet" element={<Snippet />} />
          <Route path="/SnippetGenerator" element={<SnippetGenerator />} />
          <Route path="/Main" element={<Main/>} />
          <Route path="/Backlinkchecker" element={<Backlinkchecker/>} />

          <Route path="/KeywordResearchToolmain" element={<KeywordResearchToolmain/>} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
