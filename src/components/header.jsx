import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ReactSwitch from 'react-switch'


export default function Header({darkMode, setDarkMode}) {


    const handleChange = () => {
        setDarkMode(!darkMode)
    }


    return (
        <>
        <div className="flex items-center justify-between pr-2">
            <div className="flex sticky h-1/10 w-full z-10">
            <div className="pr-5 pl-1 pt-5 text-xl">
                <Link to="/">Home</Link>
            </div>
            <div className="p-5 text-xl">
                <Link to="/Projects">Projects</Link>
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
      </>
      

    )
}