import React from 'react';
import styled from 'styled-components';

const ButtonStyled = styled.button`
  height: 27px;
  background: #2F3239;
  border-radius: 5px;
  font-size: 14px;
  line-height: 120%;
  color: #FFFFFF;
  padding: 0 8px;
  flex-wrap: nowrap;
  box-sizing: border-box;
  display: flex;
  gap: 8px;
  align-items: center;
  cursor: pointer;
  border: none;
  outline: none;
`
interface Props {
  txt: string;
  image: any;
}

export const Button: React.FC <Props> = ({txt, image}) => {

  return (
    <ButtonStyled>
      {image}
      {txt}
    </ButtonStyled>
  );
};

