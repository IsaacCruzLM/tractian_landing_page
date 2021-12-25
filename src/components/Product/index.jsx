import React from 'react';

import {
  Container,
  TitleContainer,
  Title,
  SubTitle,
  ContentContainer,
} from './styles';

const Product = function Product() {
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
        <iframe src="https://www.youtube.com/embed/_6NLhkPMo9w" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" />
        <p>
          Queremos que todos os profissionais de manutenção tenham acesso ao monitoramento online
          de equipamentos, e a uma plataforma “braço direito” que analisa, fornece insights
          valiosos, otimiza rotinas e permite tomada de decisões de forma prática e eficaz.
        </p>
        <p>
          Tudo isso só é possível combinando uma plataforma fácil de usar com um sensor
          IoT rápido de implementar.
        </p>
      </ContentContainer>
    </Container>
  );
};

export default Product;