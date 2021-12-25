import React from 'react';
import Container from './styles';

import Hero from '../../components/Hero';
import About from '../../components/About';

const Main = function Main() {
  return (
    <Container>
      <Hero />
      <About />
    </Container>
  );
};

export default Main;
