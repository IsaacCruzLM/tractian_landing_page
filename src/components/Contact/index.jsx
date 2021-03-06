import React, { useRef } from 'react';
import { useAlert } from 'react-alert';

import {
  UilCalling as CallIcon,
  UilLocationPoint as LocationIcon,
  UilEnvelopeEdit as MailBoxIcon,
  UilArrowRight as ArrowIcon,
} from '@iconscout/react-unicons';

import {
  Container,
  TitleContainer,
  Title,
  SubTitle,
  ContentContainer,
  InfoContainer,
  InfoItem,
  FormContainer,
  Form,
  Button,
} from './styles';

const Contact = function Contact() {
  const form = useRef();
  const alert = useAlert();

  const sendEmail = (e) => {
    e.preventDefault();

    if (form.current[0].value === '') return alert.error('Por favor, insira um nome');
    if (form.current[1].value === '') return alert.error('Por favor, insira um email');
    if (form.current[2].value === '') return alert.error('Por favor, insira seu cargo atual');
    if (form.current[3].value === '') return alert.error('Por favor, insira uma mensagem');

    alert.success('Email enviado com sucesso!');
    return form.current.reset();
  };

  return (
    <Container id="Contact" data-testid="Contact">
      <TitleContainer>
        <Title>
          Contato
        </Title>
        <SubTitle>
          Entre em contato conosco e agende uma demonstração
        </SubTitle>
      </TitleContainer>
      <ContentContainer>
        <InfoContainer>
          <InfoItem>
            <CallIcon />
            <div>
              <h3>Telefone</h3>
              <span>(00) 00000-0000</span>
            </div>
          </InfoItem>
          <InfoItem>
            <MailBoxIcon />
            <div>
              <h3>Email</h3>
              <span>get@tractian.com</span>
            </div>
          </InfoItem>
          <InfoItem>
            <LocationIcon />
            <div>
              <h3>Localização</h3>
              <span>São Paulo - SP</span>
            </div>
          </InfoItem>
        </InfoContainer>
        <FormContainer>
          <Form ref={form} onSubmit={sendEmail}>
            <div>
              <input type="text" placeholder="Nome" name="nome" />
              <input type="email" placeholder="Email" name="email" />
            </div>
            <input type="text" placeholder="Cargo Atual" name="subject" />
            <textarea rows="8" placeholder="Mensagem" name="message" />
            <Button type="submit">
              <span>MARCAR DEMONSTRAÇÃO</span>
              <ArrowIcon size="25" />
            </Button>
          </Form>
        </FormContainer>
      </ContentContainer>
    </Container>
  );
};

export default Contact;
