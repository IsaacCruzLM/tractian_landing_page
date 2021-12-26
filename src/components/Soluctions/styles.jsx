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

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 30px 5px 5px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 15px;
`;

export const Button = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
  max-width: 40%;

  &:hover {
    background-color: ${(props) => props.theme.primary2};
    filter: brightness(0.95);
    cursor: pointer;

    span {
      color: ${(props) => props.theme.dark};
    };

    svg {
      color: ${(props) => props.theme.dark};
    };
  };

  div {
    display: flex;
    justify-content: center;
    align-items: center;

    span {
      font-size: ${() => Font.normal_font_size_SD};
      font-weight: ${() => Font.font_semi_bold};
      margin-left: 5px;
      color: ${({ active, theme }) => (active ? theme.dark : theme.gray)};
      max-width: 75%;
      text-align: center;

      @media (min-width: 768px) {
        font-size: ${() => Font.normal_font_size_LD};
      };
    };

    svg {
      width: 30px;
      color: ${({ active, theme }) => (active ? theme.dark : theme.gray)};

      @media (min-width: 768px) {
        width: 40px;
      };
    };
  }
`;

export const SelectedLine = styled.span`
  width: 40px;
  background-color: ${(props) => (props.theme.name === 'light' ? props.theme.primary0 : props.theme.primary2)};
  height: 2px;
  margin-top: 5px;

  @media (min-width: 768px) {
    width: 60px;
    margin-top: 10px;
  };
`;

export const DataItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
  };
`;

export const Image = styled.img`
  border-radius: 0.4rem;
  width: 100%;
  max-width: 150px;

  @media (min-width: 768px) {
    max-width: 300px;
  };
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  h3 {
    font-size: ${() => Font.h3_font_size_SD};
    font-weight: ${() => Font.font_semi_bold};
    color: ${(props) => props.theme.dark};
    margin-top: 20px;
    width: 80%;

    @media (min-width: 768px) {
      font-size: ${() => Font.h3_font_size_LD};
    };
  }

  p {
    font-size: ${() => Font.normal_font_size_SD};
    font-weight: ${() => Font.font_regular};
    color: ${(props) => props.theme.dark};
    margin-top: 10px;
    width: 70%;

    @media (min-width: 768px) {
      font-size: ${() => Font.normal_font_size_LD};
      margin-top: 30px;
    };
  }

  @media (min-width: 768px) {
    max-width: 400px;
  };
`;

export const ButtonContainer = styled.div`
  text-align: center;
  padding: 35px 0 0;

  @media (min-width: 768px) {
    padding: 55px 0 0;
  };
`;

export const ButtonDemonstration = styled.a`
  width: 70%;
  max-width: 255px;
  margin: 0 auto;
  padding: 10px 15px;
  text-align: center;
  text-decoration: none;
  color: ${(props) => props.theme.lighter};
  background-color: ${(props) => (props.theme.name === 'light' ? props.theme.primary0 : props.theme.primary1)};
  border-style: outset;
  border-color: ${(props) => props.theme.primary2};
  border-radius: 0.3rem;
  font-size: ${() => Font.normal_font_size_SD};
  font-weight: ${() => Font.font_semi_bold};

  &:hover {
    background-color: ${(props) => props.theme.primary1};
    filter: brightness(0.95);
    cursor: pointer;
  };

  @media (min-width: 768px) {
    font-size: ${() => Font.normal_font_size_LD};
  };
`;
