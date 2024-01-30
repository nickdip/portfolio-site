import './App.css';
import Header from './components/header';
import Homepage from './components/homepage';
import Projects from './components/projects';
import Contact from './components/contact';
import { Routes, Route } from "react-router-dom"
import React, { useState, useEffect } from 'react';
import ProjectPhotos from './utils/ProjectPhotos';
import SingleProject from './components/SingleProject';

function App() {

  const [ homeClicks, setHomeClicks ] = useState(0);

  const [ projects, setProjects ] = useState(ProjectPhotos());

  const [darkMode, setDarkMode] = useState(true);
  
  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
    }
  }, [darkMode]);

  return (
    <>
    <Header darkMode={darkMode} setDarkMode={setDarkMode}/>
    <div className="App">
        <Routes>
        <Route path="/" element={<Homepage homeClicks={homeClicks} setHomeClicks={setHomeClicks}></Homepage>} />
        <Route path="/projects" element={<Projects projects={projects}/>} />
        <Route path="/contact" element={<Contact />} />
        {projects.map((project) => {
          return <Route path={`/${project.id}`} element={<SingleProject project={project} />} />
        })}
       </Routes>
    </div>
    </>
  );
}

export default App;
