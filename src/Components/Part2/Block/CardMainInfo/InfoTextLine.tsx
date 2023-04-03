import React from 'react';
import styled from 'styled-components'
  
const StyleText = styled.div`
  font-size: 16px;
  line-height: 140%;
  color: #FFFFFF;
  display: flex;
  gap: 5px;
  margin: 0 0 5px 0;
    `

export const InfoTextLine: React.FC <any> = ({title, image}) => {
  return (
    <StyleText>
      {image}
      {title}
    </StyleText>
  );
};

