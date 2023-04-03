import React from 'react';
import styled from 'styled-components';
import { FrameworkButton } from './FrameworkButton';


const FrameworksStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 0 0 16px 0;
  max-width: 316px;
`

export const Frameworks = () => {
  return (
    <FrameworksStyled>
      <FrameworkButton color="#5A9E54">
        Node
      </FrameworkButton>
      <FrameworkButton color="#8D3DF5">
        Figma
      </FrameworkButton>
      <FrameworkButton color="#00A4D3">
        React
      </FrameworkButton>
      <FrameworkButton color="#E57609">
        Spark
      </FrameworkButton>
      <FrameworkButton color="#900E04">
        Ruby
      </FrameworkButton>
      <FrameworkButton color="#194838">
        Django
      </FrameworkButton>
    </FrameworksStyled>
  );
};

