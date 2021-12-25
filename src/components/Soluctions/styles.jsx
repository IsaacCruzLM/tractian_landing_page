import styled from 'styled-components';

import Font from '../../styles/fonts';

export const Container = styled.section`
  width: 100%;
  padding: 25px 35px;
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
`;
