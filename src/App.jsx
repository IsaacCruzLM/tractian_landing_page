import React, { useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import { transitions, positions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

import GlobalStyle from './styles/global';
import ThemeContext from './context/ThemeContext';
import Main from './pages/Main';

const App = function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <ThemeProvider theme={theme}>
      <AlertProvider
        template={AlertTemplate}
        position={positions.BOTTOM_CENTER}
        timeout={5000}
        offset="30px"
        transition={transitions.SCALE}
      >
        <GlobalStyle />
        <Main />
      </AlertProvider>
    </ThemeProvider>
  );
};

export default App;
