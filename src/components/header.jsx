import React from 'react';
import { Link } from 'react-router-dom';
import ReactSwitch from 'react-switch'
import { useTheme } from '../contexts/ThemeContext';


export default function Header({setDivScroll}) {

    const { darkMode, toggleDarkMode } = useTheme();

    const headerBackground = darkMode ? "bg-darkBackground" : "bg-lightBackground";


    return (
        <div className="fixed top-0 left-0 right-0 z-50">
        <div className={`flex items-center justify-between pr-2 ${headerBackground} `}>
            <div className="flex sticky h-1/10 w-full z-10">
                <div className="pr-5 pl-2 pt-5 text-xl">
                    <Link to="/" onClick={() => setDivScroll("top")}>Home</Link>
                </div>
                <div className="p-5 text-xl">
                    <Link to="/" onClick={()=> setDivScroll("projects")}>Projects</Link>
                </div>
                <div className="pl-5 pr-1 pt-5 text-xl">
                    <Link to="/" onClick={() => setDivScroll('contact')}>Contact</Link>
                </div>
            </div>
            <div className="flex items-center flex-col">
            <ReactSwitch
                checked={darkMode}
                onChange={toggleDarkMode}
                uncheckedIcon={false}
                checkedIcon={false}
                width={56}
            />
            <div className="pr-2">
                {darkMode ? <div className="flex text-xs">Dark</div> : <div className="text-xs">Light</div>}
            </div>
            </div>
        </div>
      </div>
      

    )
}