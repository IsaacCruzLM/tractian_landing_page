import React from 'react';
import { UilAward } from '@iconscout/react-unicons';

import TractianTeam from '../../assets/TractianTeam.jpg';

import {
  Container,
  TitleContainer,
  Title,
  SubTitle,
  ContentContainer,
  Image,
  TextContainer,
  ConquestContainer,
  ConquestItem,
} from './styles';

const About = function About() {
  return (
    <Container>
      <TitleContainer>
        <Title>
          Sobre a Tractian
        </Title>
        <SubTitle>
          Uma breve introdução sobre nossa história
        </SubTitle>
      </TitleContainer>
      <ContentContainer>
        <Image src={TractianTeam} alt="Tractian Team" />
        <TextContainer>
          <p>
            A TRACTIAN foi fundada em 2019 por Igor e Gabriel, que viram a vida inteira seus pais,
            coordenadores de manutenção, saindo de madrugada para resolver problemas nas fábricas.
          </p>
          <ConquestContainer>
            <ConquestItem>
              <div>
                <UilAward size="40" />
                <span>100 Startups to watch 2021</span>
              </div>
              <p>
                Considerada uma das 100 startups mais promissoras e inovadoras do país pela PEGN.
              </p>
            </ConquestItem>
            <ConquestItem>
              <div>
                <UilAward />
                <span>Norte Ventures</span>
              </div>
              <p>
                Investimento na rodada pré-seed compondo Round de 2MM de reais.
              </p>
            </ConquestItem>
          </ConquestContainer>
        </TextContainer>
      </ContentContainer>
    </Container>
  );
};

export default About;
