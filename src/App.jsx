import './App.css';
import Header from './components/header';
import Homepage from './components/homepage';
import Projects from './components/projects';
import Contact from './components/contact';
import { Routes, Route } from "react-router-dom"
import React, { useState, useEffect, useRef } from 'react';
import ProjectPhotos from './utils/ProjectPhotos';
import SingleProject from './components/SingleProject';
import { ThemeProvider } from './contexts/ThemeContext';

//TODO: Save browser session for dark-light

function App() {

  const [ homeClicks, setHomeClicks ] = useState(0);

  const [ projects, setProjects ] = useState(ProjectPhotos());

  const [ divScroll, setDivScroll ] = useState("");


  if (divScroll) {
      const element = document.getElementById(divScroll);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
  } 
  

  return (
    <ThemeProvider>
      <>
      <Header setDivScroll={setDivScroll}/>
      <div className="App">
          <Routes>
          <Route path="/" element={<Homepage homeClicks={homeClicks} setHomeClicks={setHomeClicks} projects={projects}></Homepage>} />
          <Route path="/projects" element={<Projects projects={projects}/>} />
          <Route path="/contact" element={<Contact />} />
          {projects.map((project) => {
            return <Route path={`/${project.id}`} element={<SingleProject project={project} setDivScroll={setDivScroll}/>} />
          })}
        </Routes>
      </div>
      </>
    </ThemeProvider>
  );
}

export default App;
