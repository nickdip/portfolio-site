import React, { useState, useEffect } from 'react';
import ProjectListDesktop from './projectListDesktop';
import ProjectListMobile from './projectListMobile';

function useWindowSize() {
  const [size, setSize] = useState(0);

  useEffect(() => {
    function updateSize() {
      setSize(window.innerWidth);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return size;
}



export default function Projects({projects, myRef}) {

  let width = useWindowSize();

  if (!projects) return <></>

  return (
    <div id="projects">
      <div className="py-12 px-10">
        <h1 className="flex justify-center text-3xl font-bold">Explore Projects</h1>
        {width > 768 ? <ProjectListDesktop projects={projects} myRef={myRef}/> : <ProjectListMobile projects={projects} myRef={myRef}/>}
       </div>
    </div>

  )
}
