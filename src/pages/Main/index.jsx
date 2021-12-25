import React from 'react';
import Container from './styles';

import Hero from '../../components/Hero';
import About from '../../components/About';
import Product from '../../components/Product';

const Main = function Main() {
  return (
    <Container>
      <Hero />
      <About />
      <Product />
    </Container>
  );
};

export default Main;
