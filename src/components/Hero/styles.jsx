import styled from 'styled-components';

import BackgroundImage from '../../assets/BackgroundImage.png';
import Font from '../../styles/fonts';

export const Container = styled.section`
  width: 100%;
  background-image: url(${BackgroundImage});
  background-position: center; 
  background-repeat: no-repeat; 
  background-size: cover;
  padding: 25px 35px 55px;

  @media (min-width: 768px) {
    padding: 120px 50px 80px;
    background-position: right; 
  };
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.lighter};
  font-size: ${() => Font.h1_font_size_SD};
  font-weight: ${() => Font.font_bold};
  text-align: center;
  padding: 25px 0;

  @media (min-width: 768px) {
    font-size: ${() => Font.h1_font_size_LD};
    text-align: left;
    width: 40%;
  };
`;

export const SubTitle = styled.h2`
  color: ${(props) => props.theme.lighter};
  font-size: ${() => Font.h3_font_size_SD};
  font-weight: ${() => Font.font_medium};
  text-align: center;
  padding: 25px 15px;

  @media (min-width: 768px) {
    font-size: ${() => Font.h3_font_size_LD};
    text-align: left;
    width: 40%;
  };
`;

export const ButtonContainer = styled.div`
  text-align: center;
  padding: 15px 0;

  @media (min-width: 768px) {
    width: 40%;
  };
`;

export const Button = styled.a`
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
