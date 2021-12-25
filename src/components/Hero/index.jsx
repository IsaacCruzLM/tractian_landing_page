import React from 'react';
import {
  Container,
  Title,
  SubTitle,
  ButtonContianer,
  Button,
} from './styles';

const Hero = function Hero() {
  return (
    <Container>
      <Title>
        Monitoramento Online e Gestão de Ativos
      </Title>
      <SubTitle>
        Evite falhas nas suas máquinas e torne o tempo de inatividade uma
        coisa do passado com sistema preditivo da TRACTIAN.
      </SubTitle>
      <ButtonContianer>
        <Button>
          AGENDE UMA DEMONSTRAÇÃO
        </Button>
      </ButtonContianer>
    </Container>
  );
};

export default Hero;