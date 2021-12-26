import React, { useContext, useState } from 'react';

import Moon from '@iconscout/react-unicons/icons/uil-moon';
import Sun from '@iconscout/react-unicons/icons/uil-sun';

import ThemeContext from '../../context/ThemeContext';
import { lightTheme, darkTheme } from '../../styles/themes';
import LogoWhite from '../../assets/tractian_light.png';
import Logo from '../../assets/tractian.png';

import {
  Container,
  HeaderComponent,
  ImageContainer,
  NavContainer,
  IconContainer,
  Button,
  ButtonContainer,
  ButtonDemonstration,
} from './styles';

const Header = function Header() {
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

  return (
    <Container>
      <HeaderComponent>
        <ImageContainer>
          {themeState === 'light'
            ? <img src={Logo} alt="Logo Tractian" />
            : <img src={LogoWhite} alt="Logo Tractian" />}
        </ImageContainer>
        <NavContainer>
          <div>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="#">Principal</a>
            <a href="#About">Sobre a Tractian</a>
            <a href="#Product">Nosso Produto</a>
            <a href="#Soluctions">Nossas Soluções</a>
            <a href="#ClientReports">Relatos De Clientes</a>
            <a href="#Contact">Contato</a>
          </div>
          <Button onClick={() => changeTheme()}>
            <IconContainer>
              {themeState === 'light' ? <Moon size="25" /> : <Sun size="25" /> }
            </IconContainer>
          </Button>
          <ButtonContainer>
            <ButtonDemonstration>
              AGENDE UMA DEMONSTRAÇÃO
            </ButtonDemonstration>
          </ButtonContainer>
        </NavContainer>
      </HeaderComponent>
    </Container>
  );
};

export default Header;
