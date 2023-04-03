import React from 'react';
import styled from 'styled-components';

const TxtStyled = styled.p`
font-size: 14px;
line-height: 120%;
color: #FFFFFF;
margin: 0 0 18px 0;
max-width: 406px;
text-align: left;
`

export const Txt = () => {
  return (
    <TxtStyled>
      Front-end developer with 4 years of experience. Passionate about solving complex problems and building innovative solutions. I have a strong understanding of software development best practices. Collaborative team player with effective communication skills.
    </TxtStyled>
  );
};

