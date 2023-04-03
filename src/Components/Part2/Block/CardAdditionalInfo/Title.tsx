import React from 'react';
import styled from 'styled-components';

const TitleStyle = styled.p`
font-size: 16px;
line-height: 140%;
color: #FFFFFF;
margin: 0 0 8px 0;
text-align: left;
`

interface Props {
  txt: string;
}

export const Title: React.FC <Props> = ({txt}) => {

  return (
    <TitleStyle>
      {txt}
    </TitleStyle>
  );
};

