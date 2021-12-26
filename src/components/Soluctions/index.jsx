import React, { useEffect, useState } from 'react';
import $ from 'jquery';

import { UilRss, UilDesktop, UilMoneybag } from '@iconscout/react-unicons';

import SensorPlugAndPlayImage from '../../assets/SensorPlugAndPlayImage.png';
import MonitoramentoOnlineImage from '../../assets/MonitoramentoOnlineImage.png';
import GestaoDeAtivosImage from '../../assets/GestaoDeAtivosImage.png';

import {
  Container,
  TitleContainer,
  Title,
  ContentContainer,
  ButtonsContainer,
  Button,
  SelectedLine,
  DataItem,
  Image,
  TextContainer,
  ButtonContainer,
  ButtonDemonstration,
} from './styles';

const Soluctions = function Soluctions() {
  const [sensorPlugAndPlayActive, setSensorPlugAndPlayActive] = useState(true);
  const [monitoramenteoOnlineActive, setMonitoramenteoOnlineActive] = useState(false);
  const [gestãoDeAtivosActive, setGestãoDeAtivosActive] = useState(false);

  useEffect(() => {
    $('.sensorPlugAndPlayButton').click(() => {
      $('#MonitoramentoOnline').hide(500);
      $('#GestaoDeAtivos').hide(500);
      $('#SensorPlugAndPlay').show(1000);
      setMonitoramenteoOnlineActive(false);
      setGestãoDeAtivosActive(false);
      setSensorPlugAndPlayActive(true);
    });

    $('.monitoramenteoOnlineButton').click(() => {
      $('#SensorPlugAndPlay').hide(500);
      $('#GestaoDeAtivos').hide(500);
      $('#MonitoramentoOnline').show(1000);
      setGestãoDeAtivosActive(false);
      setSensorPlugAndPlayActive(false);
      setMonitoramenteoOnlineActive(true);
    });

    $('.gestãoDeAtivosButton').click(() => {
      $('#MonitoramentoOnline').hide(500);
      $('#SensorPlugAndPlay').hide(500);
      $('#GestaoDeAtivos').show(1000);
      setSensorPlugAndPlayActive(false);
      setMonitoramenteoOnlineActive(false);
      setGestãoDeAtivosActive(true);
    });
  }, []);

  return (
    <Container id="Soluctions" data-testid="Soluctions">
      <TitleContainer>
        <Title>
          Nossas Soluções
        </Title>
      </TitleContainer>
      <ContentContainer>
        <ButtonsContainer>
          <Button active={sensorPlugAndPlayActive} className="sensorPlugAndPlayButton">
            <div>
              <UilRss />
              <span>Sensor Plug & Play</span>
            </div>
            { sensorPlugAndPlayActive && <SelectedLine /> }
          </Button>
          <Button active={monitoramenteoOnlineActive} className="monitoramenteoOnlineButton">
            <div>
              <UilDesktop />
              <span>Monitoramento Online</span>
            </div>
            { monitoramenteoOnlineActive && <SelectedLine /> }
          </Button>
          <Button active={gestãoDeAtivosActive} className="gestãoDeAtivosButton">
            <div>
              <UilMoneybag />
              <span>Gestão de Ativos</span>
            </div>
            { gestãoDeAtivosActive && <SelectedLine /> }
          </Button>
        </ButtonsContainer>
        <div>
          <DataItem id="SensorPlugAndPlay">
            <Image src={SensorPlugAndPlayImage} alt="Sensor Plug And Play Image" loading="lazy" />
            <TextContainer>
              <h3>
                Tecnologia IoT avançada para conectar seus ativos
              </h3>
              <p>
                A TRACTIAN foi fundada em 2019 por Igor e Gabriel, que viram a vida inteira seus
                pais, coordenadores de manutenção, saindo de madrugada para resolver problemas
                nas fábricas.
              </p>
            </TextContainer>
          </DataItem>
          <DataItem id="MonitoramentoOnline" style={{ display: 'none' }}>
            <Image src={MonitoramentoOnlineImage} alt="Monitoramento Online Image" loading="lazy" />
            <TextContainer>
              <h3>
                Plataforma que trabalha por você
              </h3>
              <p>
                Insights automáticos, detecção de folgas mecânica, desalinhamento,
                desacoplamento e modelos de IA exclusivos da Tractian para cada tipo de máquina.
              </p>
            </TextContainer>
          </DataItem>
          <DataItem id="GestaoDeAtivos" style={{ display: 'none' }}>
            <Image src={GestaoDeAtivosImage} alt="Gestao De Ativos Image" loading="lazy" />
            <TextContainer>
              <h3>
                O Software de manutenção dos seus sonhos
              </h3>
              <p>
                Use procedimentos online para organizar checklists e inspeções.
                Centralize a rotina do seu time e potencialize as atividades de
                cada colaborador através das automações e métricas.
              </p>
            </TextContainer>
          </DataItem>
        </div>
        <ButtonContainer>
          <ButtonDemonstration href="#Contact">
            AGENDE UMA DEMONSTRAÇÃO
          </ButtonDemonstration>
        </ButtonContainer>
      </ContentContainer>
    </Container>
  );
};

export default Soluctions;
