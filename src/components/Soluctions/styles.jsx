import styled from 'styled-components';

import Font from '../../styles/fonts';

export const Container = styled.section`
  width: 100%;
  padding: 25px 35px 55px;
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
    };

    svg {
      width: 30px;
      color: ${({ active, theme }) => (active ? theme.dark : theme.gray)}
    };
  }
`;

export const SelectedLine = styled.span`
  width: 40px;
  background-color: ${(props) => props.theme.primary0};
  height: 2px;
  margin-top: 5px;
`;

export const DataItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.img`
  border-radius: 0.4rem;
  width: 100%;
  max-width: 150px;
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
  }

  p {
    font-size: ${() => Font.normal_font_size_SD};
    font-weight: ${() => Font.font_regular};
    color: ${(props) => props.theme.dark};
    margin-top: 10px;
    width: 70%;
  }
`;

export const ButtonContainer = styled.div`
  text-align: center;
  padding: 35px 0 0;
`;

export const ButtonDemonstration = styled.button`
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
