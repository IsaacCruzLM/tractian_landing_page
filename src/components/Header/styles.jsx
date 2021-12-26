import styled from 'styled-components';
import Font from '../../styles/fonts';

export const Container = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 20;

  @media (max-width: 767px) {
    display: none;
  };
`;

export const HeaderComponent = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 30px 10px;
  background-color: ${(props) => props.theme.background};  
`;

export const ImageContainer = styled.div`
  img {
    width: 120px;
  }
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    text-decoration: none;
    color: ${(props) => props.theme.dark};
    font-weight: ${Font.font_semi_bold};
    font-size: ${Font.small_font_size_LD};
    padding: 5px;
    border-radius: 10px;
    display: inline-block;
    max-width: 100px;
    text-align: center;
    vertical-align: middle;

    &:hover {
      background-color: ${(props) => props.theme.primary2};
      filter: brightness(0.9);
    };
  };
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 10px;
  border-radius: 10px;

  &:hover {
    background-color: ${(props) => props.theme.primary2};
    filter: brightness(0.9);
    cursor: pointer;
  };

  svg {
    fill: ${(props) => props.theme.dark};
  };
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;
`;

export const ButtonContainer = styled.div`
  text-align: center;
  width: 200px;
`;

export const ButtonDemonstration = styled.a`
  max-width: 150px !important;
  margin-left: 5px;
  text-align: center;
  padding: 3px 5px;
  color: ${(props) => props.theme.lighter} !important;
  background-color: ${(props) => (props.theme.name === 'light' ? props.theme.primary0 : props.theme.primary1)};
  border-style: outset;
  border-color: ${(props) => props.theme.primary2};
  border-radius: 0.3rem;

  &:hover {
    background-color: ${(props) => props.theme.primary1};
    filter: brightness(0.95);
    cursor: pointer;
  };
`;
