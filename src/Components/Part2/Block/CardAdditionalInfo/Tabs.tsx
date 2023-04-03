import React, { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components'
import { Tab } from './Tab';

const TabsStyle = styled.div`
  display: flex;
  gap: 16px;
  margin: 0 0 24px 0;
`;

interface Props {
  setActive: Dispatch<SetStateAction<string>>;
  active: string;
}

export const Tabs: React.FC <Props> = ({setActive, active}) => {
  return (
    <TabsStyle>
      <Tab 
        txt="Projects & Skills"
        setActive={setActive}
        active={active}
      />
      <Tab 
        txt="Education & Work"
        setActive={setActive}
        active={active}
      />
    </TabsStyle>
  );
};

