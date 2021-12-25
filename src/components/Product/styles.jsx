import styled from 'styled-components';

import Font from '../../styles/fonts';

export const Container = styled.section`
  width: 100%;
  padding: 25px 35px 55px;
  background-color: ${(props) => props.theme.primary0};
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
`;

export const SubTitle = styled.h3`
  color: ${(props) => props.theme.lighter};
  font-size: ${() => Font.h3_font_size_SD};
  font-weight: ${() => Font.font_medium};
  text-align: center;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 30px 5px 5px;

  iframe {
    width: 100%;
    min-height: 200px;
  };

  p {
    color: ${(props) => props.theme.lighter};
    font-size: ${() => Font.h3_font_size_SD};
    font-weight: ${() => Font.font_medium};
    text-align: center;
    margin-top: 30px;
  }

  p:nth-of-type(2) {
    margin-top: 20px;
  }
`;
