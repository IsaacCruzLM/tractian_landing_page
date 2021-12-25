/* eslint-disable import/no-unresolved */
import React from 'react';
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { UilStar } from '@iconscout/react-unicons';
import { UisStar as UisStarFilled } from '@iconscout/react-unicons-solid';

import Person1Image from '../../assets/Person1.jpeg';
import Person2Image from '../../assets/Person2.png';
import Person3Image from '../../assets/Person3.png';

import {
  Container,
  TitleContainer,
  Title,
  ContentContainer,
  ReportCard,
  ReportCardPerson,
} from './styles';

SwiperCore.use([Navigation]);

const ClientReports = function ClientReports() {
  return (
    <Container>
      <TitleContainer>
        <Title>
          Relato de Nossos Clientes
        </Title>
      </TitleContainer>
      <ContentContainer>
        <div>
          <Swiper
            spaceBetween={50}
            cssMode
            navigation
            pagination
            mousewheel
            keyboard
          >
            <SwiperSlide>
              <ReportCard>
                <p>
                  “Uma criança pode instalar o sensor da Tractian, e a
                  plataforma é tão fácil de usar quanto uma rede social.
                  Todo sistema é muito simples e confiável.”
                </p>
                <div>
                  <UisStarFilled />
                  <UisStarFilled />
                  <UisStarFilled />
                  <UisStarFilled />
                  <UisStarFilled />
                </div>
                <ReportCardPerson>
                  <img src={Person1Image} alt="Pessoa 1" />
                  <div>
                    <h4>Joana Silva</h4>
                    <p>Técnica Mecânico - Indústria Cervejeira</p>
                  </div>
                </ReportCardPerson>
              </ReportCard>
            </SwiperSlide>
            <SwiperSlide>
              <ReportCard>
                <p>
                  “O dispositivo traz mais confiabilidade ao processo, agilizando
                  a análise de informações e evitando paradas na produção, o que
                  impacta positivamente a produtividade.”
                </p>
                <div>
                  <UisStarFilled />
                  <UisStarFilled />
                  <UisStarFilled />
                  <UisStarFilled />
                  <UilStar />
                </div>
                <ReportCardPerson>
                  <img src={Person2Image} alt="Pessoa 2" />
                  <div>
                    <h4>Rafael Andrade</h4>
                    <p>Diretor Geral - Indústria Alimentícia</p>
                  </div>
                </ReportCardPerson>
              </ReportCard>
            </SwiperSlide>
            <SwiperSlide>
              <ReportCard>
                <p>
                  “Com a Tractian otimizamos tempo, reduzimos custo com falhas
                  antecipadas pela solução. A tecnologia deles é uma grande
                  ferramenta no acompanhamento e gestão dos nossos ativos que
                  são um dos patrimônios da empresa.”
                </p>
                <div>
                  <UisStarFilled />
                  <UisStarFilled />
                  <UisStarFilled />
                  <UilStar />
                  <UilStar />
                </div>
                <ReportCardPerson>
                  <img src={Person3Image} alt="Pessoa 3" />
                  <div>
                    <h4>Fernanda Almeida</h4>
                    <p>Mecânica - Indústria Automobilistica</p>
                  </div>
                </ReportCardPerson>
              </ReportCard>
            </SwiperSlide>
          </Swiper>
        </div>
      </ContentContainer>
    </Container>
  );
};

export default ClientReports;
