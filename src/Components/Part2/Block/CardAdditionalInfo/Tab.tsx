import React, { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';

const TabStyled = styled.p<{ active?: string, txt: string }>`
  font-size: 16px;
  line-height: 140%;
  color: ${props => props.active === props.txt ? "#5BD424;" : "#FFFFFF"};
  text-decoration:  ${props => props.active === props.txt ? "underline;" : "none"};
  cursor: pointer;
`
interface Props {
  txt: string;
  setActive: Dispatch<SetStateAction<string>>;
  active: string;
}

export const Tab: React.FC <Props> = ({txt, setActive, active}) => {

  return (
    <TabStyled 
      onClick={() => {
        setActive(txt)
      }}
      txt={txt}
      active={active}
    >
      {txt}
    </TabStyled>
  );
};

