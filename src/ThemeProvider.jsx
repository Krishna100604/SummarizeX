// ThemeProvider.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';

// Create a context for the theme
const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  // Effect to load dark mode preference from local storage on initial render
  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    setDarkMode(savedMode === 'dark');
  }, []);

  // Update local storage with current dark mode setting
  useEffect(() => {
    localStorage.setItem('darkMode', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to consume the theme
export const useTheme = () => useContext(ThemeContext);
