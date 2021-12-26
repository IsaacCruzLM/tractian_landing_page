import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ThemeContext from './ThemeContext';
import { lightTheme } from '../styles/themes';

const ThemeProvider = function ThemeProvider({ children }) {
  const [currentTheme, setCurrentTheme] = useState(lightTheme);

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const contextValue = {
    theme: currentTheme,
    setCurrentTheme,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default ThemeProvider;
