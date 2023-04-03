import React from 'react';
import styled from 'styled-components';
import { Button } from './Button';

const ProjectsStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
  max-width: 406px;
  margin: 0 0 20px 0;
`

export const Projects = () => {

  return (
    <ProjectsStyled>
      <Button 
        txt="Team8s"
        image={<svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 9.16672V13.1667C12 13.5203 11.8595 13.8595 11.6095 14.1095C11.3594 14.3596 11.0203 14.5 10.6666 14.5H3.33331C2.97969 14.5 2.64055 14.3596 2.3905 14.1095C2.14045 13.8595 1.99998 13.5203 1.99998 13.1667V5.83338C1.99998 5.47976 2.14045 5.14062 2.3905 4.89057C2.64055 4.64053 2.97969 4.50005 3.33331 4.50005H7.33331" stroke="#5BD424" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M9.99998 2.50005H14V6.50005" stroke="#5BD424" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M6.66658 9.83338L13.9999 2.50005" stroke="#5BD424" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        }
      />
      <Button 
        txt="Banking App"
        image={<svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 9.16672V13.1667C12 13.5203 11.8595 13.8595 11.6095 14.1095C11.3594 14.3596 11.0203 14.5 10.6666 14.5H3.33331C2.97969 14.5 2.64055 14.3596 2.3905 14.1095C2.14045 13.8595 1.99998 13.5203 1.99998 13.1667V5.83338C1.99998 5.47976 2.14045 5.14062 2.3905 4.89057C2.64055 4.64053 2.97969 4.50005 3.33331 4.50005H7.33331" stroke="#5BD424" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M9.99998 2.50005H14V6.50005" stroke="#5BD424" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M6.66658 9.83338L13.9999 2.50005" stroke="#5BD424" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        }
      />
      <Button 
        txt="Snake"
        image={<svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 9.16672V13.1667C12 13.5203 11.8595 13.8595 11.6095 14.1095C11.3594 14.3596 11.0203 14.5 10.6666 14.5H3.33331C2.97969 14.5 2.64055 14.3596 2.3905 14.1095C2.14045 13.8595 1.99998 13.5203 1.99998 13.1667V5.83338C1.99998 5.47976 2.14045 5.14062 2.3905 4.89057C2.64055 4.64053 2.97969 4.50005 3.33331 4.50005H7.33331" stroke="#5BD424" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M9.99998 2.50005H14V6.50005" stroke="#5BD424" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M6.66658 9.83338L13.9999 2.50005" stroke="#5BD424" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        }
      />
      <Button 
        txt="Shopping App"
        image={<svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 9.16672V13.1667C12 13.5203 11.8595 13.8595 11.6095 14.1095C11.3594 14.3596 11.0203 14.5 10.6666 14.5H3.33331C2.97969 14.5 2.64055 14.3596 2.3905 14.1095C2.14045 13.8595 1.99998 13.5203 1.99998 13.1667V5.83338C1.99998 5.47976 2.14045 5.14062 2.3905 4.89057C2.64055 4.64053 2.97969 4.50005 3.33331 4.50005H7.33331" stroke="#5BD424" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M9.99998 2.50005H14V6.50005" stroke="#5BD424" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M6.66658 9.83338L13.9999 2.50005" stroke="#5BD424" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        }
      />
      <Button 
        txt="E-learning"
        image={<svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 9.16672V13.1667C12 13.5203 11.8595 13.8595 11.6095 14.1095C11.3594 14.3596 11.0203 14.5 10.6666 14.5H3.33331C2.97969 14.5 2.64055 14.3596 2.3905 14.1095C2.14045 13.8595 1.99998 13.5203 1.99998 13.1667V5.83338C1.99998 5.47976 2.14045 5.14062 2.3905 4.89057C2.64055 4.64053 2.97969 4.50005 3.33331 4.50005H7.33331" stroke="#5BD424" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M9.99998 2.50005H14V6.50005" stroke="#5BD424" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M6.66658 9.83338L13.9999 2.50005" stroke="#5BD424" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        }
      />
    </ProjectsStyled>
  );
};

