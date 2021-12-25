import React from 'react';

import {
  Container,
  TitleContainer,
  Title,
  SubTitle,
  ContentContainer,
} from './styles';

const Contact = function Contact() {
  return (
    <Container>
      <TitleContainer>
        <Title>
          Sobre Nosso Produto
        </Title>
        <SubTitle>
          Conheça melhor as soluções que a Tractian pode oferecer!
        </SubTitle>
      </TitleContainer>
      <ContentContainer>
        Colocar COnteudo
      </ContentContainer>
    </Container>
  );
};

export default Contact;
