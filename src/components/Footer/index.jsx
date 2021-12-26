import React from 'react';

import Logo from '../../assets/Logo.png';

import {
  Container,
  TitleContainer,
  CopyrightContainer,
} from './styles';

const Footer = function Footer() {
  return (
    <Container>
      <TitleContainer>
        <img src={Logo} alt="Logo Tactian" />
        <h3>TRACTIAN</h3>
      </TitleContainer>
      <CopyrightContainer>
        <p>Copyright, 2021</p>
        <p>Isaac Cruz</p>
      </CopyrightContainer>
    </Container>
  );
};

export default Footer;
