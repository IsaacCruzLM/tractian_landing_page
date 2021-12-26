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

  @media (max-width: 1023px) and (min-width: 768px) {
    a {
      font-size: ${Font.small_font_size_SD};
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
  width: 130px;
`;

export const ButtonDemonstration = styled.button`
  width: 100%;
  margin-left: 5px;
  text-align: center;
  padding: 3px 5px;
  color: ${(props) => props.theme.lighter};
  background-color: ${(props) => (props.theme.name === 'light' ? props.theme.primary0 : props.theme.primary1)};
  outline: none;
  border-color: ${(props) => props.theme.primary2};
  border-radius: 0.3rem;
  font-size: ${() => Font.smaller_font_size_SD};
  font-weight: ${() => Font.font_semi_bold};

  &:hover {
    background-color: ${(props) => props.theme.primary1};
    filter: brightness(0.95);
    cursor: pointer;
  };
`;
