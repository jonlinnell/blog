import React, { createContext, useState } from 'react';

const themeContext = createContext();

export const LIGHT = 'LIGHT';
export const DARK = 'DARK';

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(
    window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
      ? DARK
      : LIGHT
  );

  const toggleTheme = () => setTheme(theme === LIGHT ? DARK : LIGHT);

  return (
    <themeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </themeContext.Provider>
  );
}

export default themeContext;
