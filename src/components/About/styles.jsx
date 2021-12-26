import styled from 'styled-components';

import Font from '../../styles/fonts';

export const Container = styled.section`
  width: 100%;
  padding: 25px 35px 55px;
  background-color: ${(props) => props.theme.background};

  @media (min-width: 768px) {
    padding: 55px 100px 100px;
  };
`;

export const TitleContainer = styled.div`
  padding: 15px 5px 5px;
`;

export const Title = styled.h2`
  color: ${(props) => props.theme.dark};
  font-size: ${() => Font.h1_font_size_SD};
  font-weight: ${() => Font.font_bold};
  text-align: center;
  padding: 5px 0;

  @media (min-width: 768px) {
    font-size: ${() => Font.h1_font_size_LD};
  };
`;

export const SubTitle = styled.h3`
  color: ${(props) => props.theme.dark};
  font-size: ${() => Font.h3_font_size_SD};
  font-weight: ${() => Font.font_medium};
  text-align: center;

  @media (min-width: 768px) {
    font-size: ${() => Font.h3_font_size_LD};
  };
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 30px 5px 5px;

  @media (min-width: 768px) {
    flex-direction: row;
  };
`;

export const Image = styled.img`
  border-radius: 0.4rem;

  @media (min-width: 768px) {
    width: 400px;
    margin-right: 40px;
  };
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  p {
    color: ${(props) => props.theme.dark};
    font-size: ${() => Font.h3_font_size_SD};
    font-weight: ${() => Font.font_medium};
    text-align: center;
    padding: 35px 0;

    @media (min-width: 768px) {
      font-size: ${() => Font.h3_font_size_LD};
      padding: 0 0 35px;
    };
  }
`;

export const ConquestContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;

  @media (min-width: 768px) {
    flex-direction: row;
  };
`;

export const ConquestItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  div {
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      width: 30px;
      color: ${(props) => props.theme.dark};
    };

    span {
      color: ${(props) => props.theme.dark};
      font-size: ${() => Font.h3_font_size_SD};
      font-weight: ${() => Font.font_bold};
      text-align: center;

      @media (min-width: 768px) {
        font-size: ${() => Font.h3_font_size_LD};
      };
    };
  };

  p {
    padding: 5px 0;
    color: ${(props) => props.theme.dark};
    font-size: ${() => Font.normal_font_size_SD};
    font-weight: ${() => Font.font_regular};
    text-align: center;
    width: 80%;
    margin: 0 auto;

    @media (min-width: 768px) {
      font-size: ${() => Font.normal_font_size_LD};
    };
  };
`;
