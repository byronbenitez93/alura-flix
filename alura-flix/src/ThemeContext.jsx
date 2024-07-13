import React, { createContext, useState } from 'react';
import { ThemeProvider } from 'styled-components';

const ThemeContext = createContext();

const lightTheme = {
  body: 'linear-gradient(145deg, #d6defd 0%, #0b7f94 100%)',
  text: '#000',
  // Otros estilos para el tema claro
};

const darkTheme = {
  body: 'linear-gradient(145deg, #2c3e50 0%, #111b1d 100%)',
  text: '#fff',
  // Otros estilos para el tema oscuro
};

const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () => {
    setTheme(theme === lightTheme ? darkTheme : lightTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeContextProvider };
