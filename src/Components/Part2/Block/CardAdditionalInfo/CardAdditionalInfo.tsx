import React from 'react';
import StyledCard from '../StyledCard';
import { Tabs } from './Tabs';
import { Title } from './Title';
import { Txt } from './Txt';
import { TeamBlock } from './TeamBlock';
import { Projects } from './Projects';
import { Frameworks } from './Frameworks';
import { Languages } from './Languages';

export const CardAdditionalInfo = () => {
  const [active, setActive] = React.useState('Projects & Skills');

  return (
    <StyledCard>
      <Tabs 
        setActive={setActive}
        active={active}
      />
      <Title 
        txt="About me"
      />
      <Txt />
      <TeamBlock />
      <Title 
        txt="Projects"
      />
      <Projects />
      <Title 
        txt="Frameworks"
      />
      <Frameworks />
      <Title 
        txt="Languages"
      />
      <Languages />
    </StyledCard>
  );
};

