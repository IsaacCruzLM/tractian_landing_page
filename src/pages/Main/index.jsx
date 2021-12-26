import React from 'react';
import Container from './styles';

import Hero from '../../components/Hero';
import About from '../../components/About';
import Product from '../../components/Product';
import Soluctions from '../../components/Soluctions';
import ClientReports from '../../components/ClientReports';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';
import MobileHeader from '../../components/MobileHeader';
import Header from '../../components/Header';

const Main = function Main() {
  return (
    <Container>
      <Header />
      <MobileHeader />
      <Hero />
      <About />
      <Product />
      <Soluctions />
      <ClientReports />
      <Contact />
      <Footer />
    </Container>
  );
};

export default Main;
