import { createContext } from 'react';
import { lightTheme } from '../styles/themes';

const initialTheme = {
  theme: lightTheme,
};

const ThemeContext = createContext(initialTheme);

export default ThemeContext;
