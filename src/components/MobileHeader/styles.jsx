import styled from 'styled-components';
import Font from '../../styles/fonts';

export const Container = styled.div`
  display: none;
  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 20;
    background-color: ${(props) => props.theme.background};
    box-shadow: 0 -1px 4px rgba(0, 0, 0, 0.20);
  };
`;

export const ButtonsContainer = styled.div`
  display: none;
`;

export const ButtonsItens = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export const ButtonsItem = styled.a`
  width: 4.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 20px;
  text-decoration: none;

  span {
    font-size: ${Font.smaller_font_size_SD};
    font-weight: ${Font.font_semi_bold};
    color: ${(props) => props.theme.dark};
    text-align: center;
  };

  svg {
    fill: ${(props) => props.theme.dark};
  };
`;

export const HeaderMobile = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

export const HeaderMobileName = styled.div`
  font-size: ${Font.h2_font_size_SD};
  font-weight: ${Font.font_semi_bold};
  color: ${(props) => props.theme.dark};
`;

export const HeaderMobileButtons = styled.div`
  display: flex;
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 10px;
  border-radius: 10px;
  svg {
    fill: ${(props) => props.theme.dark};
  };
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;
`;
