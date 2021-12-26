import React, { useContext, useState, useEffect } from 'react';
import $ from 'jquery';

import Moon from '@iconscout/react-unicons/icons/uil-moon';
import Sun from '@iconscout/react-unicons/icons/uil-sun';
import Menu from '@iconscout/react-unicons/icons/uil-apps';
import Home from '@iconscout/react-unicons/icons/uil-home';
import About from '@iconscout/react-unicons/icons/uil-book-open';
import Product from '@iconscout/react-unicons/icons/uil-briefcase';
import Soluctions from '@iconscout/react-unicons/icons/uil-scenery';
import ClientReports from '@iconscout/react-unicons/icons/uil-user';
import Contact from '@iconscout/react-unicons/icons/uil-message';

import { lightTheme, darkTheme } from '../../styles/themes';
import ThemeContext from '../../context/ThemeContext';

import {
  Container,
  HeaderMobile,
  HeaderMobileName,
  HeaderMobileButtons,
  IconContainer,
  Button,
  ButtonsContainer,
  ButtonsItens,
  ButtonsItem,
} from './styles';

const MobileHeader = function MobileHeader() {
  const { setCurrentTheme } = useContext(ThemeContext);
  const [themeState, setThemeState] = useState('light');

  const changeTheme = () => {
    if (themeState === 'light') {
      setCurrentTheme(darkTheme);
      setThemeState('dark');
    } else {
      setCurrentTheme(lightTheme);
      setThemeState('light');
    }
  };

  useEffect(() => {
    $('.menuButton').click(() => {
      $('.menuButtons').slideToggle();
    });
  }, []);

  return (
    <Container>
      <ButtonsContainer className="menuButtons">
        <ButtonsItens>
          <ButtonsItem href="#">
            <Home size="20" />
            <span>Home</span>
          </ButtonsItem>
          <ButtonsItem href="#About">
            <About size="20" />
            <span>Sobre a Tractian</span>
          </ButtonsItem>
          <ButtonsItem href="#Product">
            <Product size="20" />
            <span>Nosso Poduto</span>
          </ButtonsItem>
          <ButtonsItem href="#Soluctions">
            <Soluctions size="20" />
            <span>Nossa Solução</span>
          </ButtonsItem>
          <ButtonsItem href="#ClientReports">
            <ClientReports size="20" />
            <span>Relatos de Clientes</span>
          </ButtonsItem>
          <ButtonsItem href="#Contact">
            <Contact size="20" />
            <span>Contato</span>
          </ButtonsItem>
        </ButtonsItens>
      </ButtonsContainer>
      <HeaderMobile>
        <HeaderMobileName>
          Isaac Cruz
        </HeaderMobileName>
        <HeaderMobileButtons>
          <div>
            <Button onClick={() => changeTheme()}>
              <IconContainer>
                {themeState === 'light' ? <Moon size="25" /> : <Sun size="25" /> }
              </IconContainer>
            </Button>
          </div>
          <div>
            <Button className="menuButton">
              <IconContainer>
                <Menu size="25" />
              </IconContainer>
            </Button>
          </div>
        </HeaderMobileButtons>
      </HeaderMobile>
    </Container>
  );
};

export default MobileHeader;
