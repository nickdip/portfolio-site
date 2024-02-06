import React, { createContext, useContext, useState } from 'react';


const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
    
    const [ darkMode , setDarkMode] = useState(true);

    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
    }

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    }
    

    return (
        <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
            {children}
        </ThemeContext.Provider>
    );
}