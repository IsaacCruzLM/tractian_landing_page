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
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.lighter};
  font-size: ${() => Font.h1_font_size_SD};
  font-weight: ${() => Font.font_bold};
  text-align: center;
  padding: 25px 0;
`;

export const SubTitle = styled.h2`
  color: ${(props) => props.theme.lighter};
  font-size: ${() => Font.h3_font_size_SD};
  font-weight: ${() => Font.font_medium};
  text-align: center;
  padding: 25px 15px;
`;

export const ButtonContainer = styled.div`
  text-align: center;
  padding: 15px 0;
`;

export const Button = styled.button`
  width: 70%;
  max-width: 255px;
  margin: 0 auto;
  padding: 2px 10px;
  text-align: center;
  color: ${(props) => props.theme.lighter};
  background-color: ${(props) => props.theme.primary0};
  outline: none;
  border-color: ${(props) => props.theme.primary2};
  border-radius: 0.3rem;
  font-size: ${() => Font.normal_font_size_SD};
  font-weight: ${() => Font.font_semi_bold};
`;
