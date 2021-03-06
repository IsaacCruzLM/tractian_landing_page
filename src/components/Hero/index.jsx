import React from 'react';
import {
  Container,
  Title,
  SubTitle,
  ButtonContainer,
  Button,
} from './styles';

const Hero = function Hero() {
  return (
    <Container id="Hero" data-testid="Hero">
      <Title>
        Monitoramento Online e Gestão de Ativos
      </Title>
      <SubTitle>
        Evite falhas nas suas máquinas e torne o tempo de inatividade uma
        coisa do passado com sistema preditivo da TRACTIAN.
      </SubTitle>
      <ButtonContainer>
        <Button href="#Contact">
          AGENDE UMA DEMONSTRAÇÃO
        </Button>
      </ButtonContainer>
    </Container>
  );
};

export default Hero;
