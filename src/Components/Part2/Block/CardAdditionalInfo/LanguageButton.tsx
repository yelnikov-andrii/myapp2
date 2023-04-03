import React from 'react';
import styled from 'styled-components';

const LanguageButtonStyled = styled.button`
  width: 40px;
  height: 40px;
  background: #2F3239;
  border-radius: 5px;
  cursor: pointer;
  border: none;
  outline: none;
`

export const LanguageButton: React.FC <any> = ({image}) => {
  return (
    <LanguageButtonStyled>
      {image}
    </LanguageButtonStyled>
  );
};

