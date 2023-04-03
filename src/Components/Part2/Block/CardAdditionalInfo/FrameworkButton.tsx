import React from 'react';
import styled from 'styled-components';

const FrameworkButtonStyled = styled.button<{ color?: string }>`
  background: ${props => props.color};
  width: 100px;
  height: 32px;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 5px;
  font-size: 16px;
  line-height: 140%;
  color: #FFFFFF;
`

interface Props {
  color: string;
  children: string;
}

export const FrameworkButton: React.FC <Props> = ({children, color}) => {
  return (
    <FrameworkButtonStyled color={color}>
      {children}
    </FrameworkButtonStyled>
  );
};

