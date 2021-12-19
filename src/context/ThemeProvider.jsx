import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import ThemeContext from './ThemeContext';
import { lightTheme } from '../styles/themes';

const ThemeProvider = function ThemeProvider({ children }) {
  const [currentTheme, setCurrentTheme] = useState(lightTheme);

  const contextValue = useMemo(() => ({
    theme: currentTheme,
    setCurrentTheme,
  }), []);

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
