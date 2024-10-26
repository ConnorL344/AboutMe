import React from 'react';
import { Button } from 'react-bootstrap';
import { FaSun, FaMoon } from 'react-icons/fa';

export const ThemeToggle = () => {
  const [isDark, setIsDark] = React.useState(true); // Set default to true for dark theme
  
  const toggleTheme = () => {
    setIsDark(!isDark);
    document.body.setAttribute('data-theme', isDark ? 'light' : 'dark');
  };

  return (
    <Button 
      variant={isDark ? 'light' : 'dark'} 
      onClick={toggleTheme}
      className="position-fixed top-0 end-0 m-3 theme-toggle"
      style={{ zIndex: 1000 }}
    >
      {isDark ? <FaSun className="text-dark" /> : <FaMoon className="text-light" />}
    </Button>
  );
};
