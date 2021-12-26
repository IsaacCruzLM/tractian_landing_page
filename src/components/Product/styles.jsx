import styled from 'styled-components';

import Font from '../../styles/fonts';

export const Container = styled.section`
  width: 100%;
  padding: 25px 35px 55px;
  background-color: ${(props) => props.theme.primary0};

  @media (min-width: 768px) {
    padding: 55px 100px 100px;
  };
`;

export const TitleContainer = styled.div`
  padding: 15px 5px 5px;
`;

export const Title = styled.h2`
  color: ${(props) => props.theme.lighter};
  font-size: ${() => Font.h1_font_size_SD};
  font-weight: ${() => Font.font_bold};
  text-align: center;
  padding: 5px 0;

  @media (min-width: 768px) {
    font-size: ${() => Font.h1_font_size_LD};
  };
`;

export const SubTitle = styled.h3`
  color: ${(props) => props.theme.lighter};
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

  iframe {
    width: 100%;
    min-height: 200px;

    @media (min-width: 768px) {
      min-height: 250px;
    };
  };

  div{
    p {
      color: ${(props) => props.theme.lighter};
      font-size: ${() => Font.h3_font_size_SD};
      font-weight: ${() => Font.font_medium};
      text-align: center;
      margin-top: 30px;
  
      @media (min-width: 768px) {
        font-size: ${() => Font.h3_font_size_LD};
        margin: 40px 0 0 25px;
      };
    }

    @media (min-width: 768px) {
      max-width: 650px;
    };
  }

  p:nth-of-type(2) {
    margin-top: 20px;
  }
`;
