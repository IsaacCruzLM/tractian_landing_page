import styled from 'styled-components';

import Font from '../../styles/fonts';

export const Container = styled.section`
  width: 100%;
  padding: 30px 30px 70px;
  background-color: ${(props) => props.theme.primary0};
`;

export const CopyrightContainer = styled.div`
  color: ${(props) => props.theme.lighter};
  font-weight: ${Font.font_regular};
  font-size: ${Font.normal_font_size_SD};
  text-align: center;
  margin-top: 20px;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  img {
    width: 50px;
    height: 50px;
  }

  h3 {
    color: ${(props) => props.theme.lighter};
    font-weight: ${Font.font_semi_bold};
    font-size: ${Font.h3_font_size_SD};
  }
`;
