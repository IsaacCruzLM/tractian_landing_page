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
  padding: 20px 5px 5px;
`;

export const InfoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

export const InfoItem = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;

  svg {
    width: 30px;
    height: 30px;
    color: ${(props) => props.theme.primary2};
  };

  div {
    margin-left: 10px;
    
    h3 {
      color: ${(props) => props.theme.dark};
      font-weight: ${Font.font_semi_bold};
      font-size: ${Font.h3_font_size_SD};
    };

    span {
      color: ${(props) => props.theme.dark};
      font-weight: ${Font.font_medium};
      font-size: ${Font.normal_font_size_SD};
    };
  };
`;

export const FormContainer = styled.div`
  width: 100%;
`;

export const Form = styled.form`
  input {
    width: 100%;
    padding: 10px;
    margin-bottom: 15px;
    font-size: ${Font.normal_font_size_LD};
    color: ${(props) => props.theme.dark};
    outline: 0;

    &:active, &:focus {
      border-color: ${(props) => props.theme.primary2};
    };
  };

  input[type="email"] {
    margin-left: 15px;
  };

  textarea {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    font-size: ${Font.normal_font_size_LD};
    color: ${(props) => props.theme.dark};
    outline: 0;

    &:active, &:focus {
      border-color: ${(props) => props.theme.primary2};
      border-width: 2.5px;
    };
  };

  div {
    display: flex;
  };
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  background-color: ${(props) => props.theme.primary0};
  border-color: ${(props) => props.theme.primary2};
  padding: 10px;
  border-radius: 5px;
  color: ${(props) => props.theme.lighter};

  span {
    font-size: ${Font.normal_font_size_SD};
    font-weight: ${Font.font_semi_bold};
    margin-right: 10px;
  };
`;
