import React from 'react';
import styled from 'styled-components'
  
const CardName = styled.p`
  font-size: 20px;
  line-height: 120%;
  color: #FFFFFF;
  margin: 0 0 8px 0;
      `
export default CardName;

export const Name = () => {

  return (
    <CardName>
      Nikita Maksimov
    </CardName>
  );
};

