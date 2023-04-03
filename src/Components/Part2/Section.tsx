import React from 'react';
import { Navbar } from './Navbar/Navbar';
import Block from './Block/Block';
import styled from 'styled-components'
import { CardMainInfo } from './Block/CardMainInfo/CardMainInfo';
import { CardAdditionalInfo } from './Block/CardAdditionalInfo/CardAdditionalInfo';
  
const StyledSection = styled.section`
    max-width : 1200px;
    margin : 0 auto ;
    padding: 60px 0;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    `

export const Section = () => {
  return (
    <StyledSection>
      <Navbar />
      <Block>
        <CardMainInfo />
        <CardAdditionalInfo />
      </Block>
    </StyledSection>
  );
};

