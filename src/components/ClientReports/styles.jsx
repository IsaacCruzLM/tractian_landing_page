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
  color: ${(props) => props.theme.dark};
  font-size: ${() => Font.h3_font_size_SD};
  font-weight: ${() => Font.font_medium};
  text-align: center;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 30px 5px 5px;

  .swiper-button-next, .swiper-button-prev {
    color: ${(props) => props.theme.lighter};
  };
`;

export const ReportCard = styled.div`
  background-color: ${(props) => props.theme.lighter};
  padding: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 9px 11px 6px 4px rgba(0,0,0,0.2);
  border-radius: 10px;
  max-width: 70%;
  margin: 0 auto;
  gap: 20px;

  p {
    color: ${(props) => props.theme.dark};
    font-size: ${() => Font.normal_font_size_SD};
    font-weight: ${() => Font.font_regular};
    text-align: center;
  }

  svg {
    color: ${(props) => props.theme.primary0};
    width: 30px;
  }
`;

export const ReportCardPerson = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  
  img {
    width: 50px;
    height: 50px;
    border-radius: 25px;
  }

  div {
    padding-left: 5px; 
    
    h4 {
      color: ${(props) => props.theme.dark};
      font-size: ${() => Font.normal_font_size_SD};
      font-weight: ${() => Font.font_semi_bold};
      text-align: center;
    };

    p {
      color: ${(props) => props.theme.dark};
      font-size: ${() => Font.small_font_size_SD};
      font-weight: ${() => Font.font_medium};
      text-align: center;
    }
  }
`;
