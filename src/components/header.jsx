import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Projects from './projects';
import ReactSwitch from 'react-switch'


export default function Header({darkMode, setDarkMode}) {


    const handleChange = () => {
        setDarkMode(!darkMode)
    }

    const scrollToDiv = (divId) => {
        const element = document.getElementById(divId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };



    return (
        <div className="fixed top-0 left-0 right-0 z-50">
        <div className="flex items-center justify-between pr-2">
            <div className="flex sticky h-1/10 w-full z-10">
                <div className="pr-5 pl-2 pt-5 text-xl">
                    <Link to="#" onClick={() => scrollToDiv('top')}>Home</Link>
                </div>
                <div className="p-5 text-xl">
                    <Link to="#" onClick={() => scrollToDiv('projects')}>Projects</Link>
                </div>
                <div className="pl-5 pr-1 pt-5 text-xl">
                    <Link to="/Contact">Contact</Link>
                </div>
            </div>
            <div className="pr-2">
                {darkMode ? <div className="flex text-xs">Dark</div> : <div className="text-xs">Light</div>}
            </div>
            <ReactSwitch
                checked={darkMode}
                onChange={handleChange}
                uncheckedIcon={false}
                checkedIcon={false}
                width={56}
            />
        </div>
      </div>
      

    )
}