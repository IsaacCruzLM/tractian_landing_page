/* eslint-disable no-undef */
import React from 'react';
import { render, screen } from '@testing-library/react';

import Hero from '../components/Hero';
import About from '../components/About';
import Product from '../components/Product';
import Soluctions from '../components/Soluctions';

describe('Testando os componentes da Página Main', () => {
  describe.skip('Testando o componente Hero', () => {
    beforeEach(() => {
      render(<Hero />);
    });

    test('Testa se component Hero Renderiza', () => {
      const HeroComponent = screen.getByTestId('Hero');
      expect(HeroComponent).toBeInTheDocument();
    });

    test('Testa se o componente possui o Título', () => {
      const title = screen.getByText('Monitoramento Online e Gestão de Ativos');
      expect(title).toBeInTheDocument();
    });

    test('Testa se o componente possui o Subtítulo', () => {
      const Subtítulo = screen.getByText('Evite falhas nas suas máquinas e torne o tempo de inatividade uma coisa do passado com sistema preditivo da TRACTIAN.');
      expect(Subtítulo).toBeInTheDocument();
    });

    test('Testa se o componente possui o Botão para Agendar Demonstração', () => {
      const Button = screen.getByRole('link');
      expect(Button).toHaveAttribute('href', '#Contact');
      expect(Button.textContent).toBe('AGENDE UMA DEMONSTRAÇÃO');
    });
  });

  describe('Testando o componente About', () => {
    beforeEach(() => {
      render(<About />);
    });

    test('Testa se component About Renderiza', () => {
      const AboutComponent = screen.getByTestId('About');
      expect(AboutComponent).toBeInTheDocument();
    });

    test('Testa se o componente possui o Título', () => {
      const title = screen.getByText('Sobre a Tractian');
      expect(title).toBeInTheDocument();
    });

    test('Testa se o componente possui o Subtítulo', () => {
      const Subtítulo = screen.getByText('Uma breve introdução sobre nossa história');
      expect(Subtítulo).toBeInTheDocument();
    });

    test('Testa se o componente possui a Imagem', () => {
      const Image = screen.getByRole('img');
      expect(Image).toBeInTheDocument();
      expect(Image).toHaveAttribute('src', 'TractianTeam.jpg');
    });

    test('Testa se o componente possui seus respectivos textos', () => {
      const Texts = screen.getAllByTestId('Text');
      expect(Texts.length).toBe(3);
    });
  });

  describe('Testando o componente Product', () => {
    beforeEach(() => {
      render(<Product />);
    });

    test('Testa se component Product Renderiza', () => {
      const ProductComponent = screen.getByTestId('Product');
      expect(ProductComponent).toBeInTheDocument();
    });

    test('Testa se o componente possui o Título', () => {
      const title = screen.getByText('Sobre Nosso Produto');
      expect(title).toBeInTheDocument();
    });

    test('Testa se o componente possui o Subtítulo', () => {
      const Subtítulo = screen.getByText('Conheça melhor as soluções que a Tractian pode oferecer!');
      expect(Subtítulo).toBeInTheDocument();
    });

    test('Testa se o componente possui iframe', () => {
      const Video = screen.getByTestId('Video');
      expect(Video).toBeInTheDocument();
    });

    test('Testa se o componente possui os seus reséctivos textos', () => {
      const Texts = screen.getAllByTestId('Text');
      expect(Texts.length).toBe(2);
    });
  });

  describe('Testando o componente Soluctions', () => {
    beforeEach(() => {
      render(<Soluctions />);
    });

    test('Testa se component Soluctions Renderiza', () => {
      const SoluctionsComponent = screen.getByTestId('Soluctions');
      expect(SoluctionsComponent).toBeInTheDocument();
    });

    test('Testa se o componente possui o Título', () => {
      const title = screen.getByText('Nossas Soluções');
      expect(title).toBeInTheDocument();
    });

    test('Testa se o componente possui o botão Sensor Plug & Play', () => {
      const button = screen.getByText('Sensor Plug & Play');
      expect(button).toBeInTheDocument();
    });

    test('Testa se o componente possui o botão Monitoramento Online', () => {
      const button = screen.getByText('Monitoramento Online');
      expect(button).toBeInTheDocument();
    });

    test('Testa se o componente possui o Botão para Agendar Demonstração', () => {
      const Button = screen.getByRole('link');
      expect(Button).toHaveAttribute('href', '#Contact');
      expect(Button.textContent).toBe('AGENDE UMA DEMONSTRAÇÃO');
    });
  });
});
