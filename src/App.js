import './App.css';
import Header from './components/header';
import Homepage from './components/homepage';
import Projects from './components/projects';
import Contact from './components/contact';
import { Routes, Route } from "react-router-dom"
import React, { useState } from 'react';

function App() {

  const [ homeClicks, setHomeClicks ] = useState(0);

  return (
    <>
    <Header />
    <div className="App">
        <Routes>
        <Route path="/" element={<Homepage homeClicks={homeClicks} setHomeClicks={setHomeClicks}></Homepage>} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
       </Routes>
    </div>
    </>
  );
}

export default App;
