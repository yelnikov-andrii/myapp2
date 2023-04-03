import styled from 'styled-components'
import { BackButton } from './BackButton'

const StyledMenu = styled.div`
    display: flex;
    gap: 35px;
    `

  export const Menu = () => {
    return (
        <StyledMenu>
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M11 20C11 19.5858 11.3358 19.25 11.75 19.25H21.8C22.2142 19.25 22.55 19.5858 22.55 20C22.55 20.4142 22.2142 20.75 21.8 20.75H11.75C11.3358 20.75 11 20.4142 11 20Z" fill="#5BD424"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M11 20C11 19.5858 11.3358 19.25 11.75 19.25H21.8C22.2142 19.25 22.55 19.5858 22.55 20C22.55 20.4142 22.2142 20.75 21.8 20.75H11.75C11.3358 20.75 11 20.4142 11 20Z" fill="#5BD424"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M11 14C11 13.5858 11.3358 13.25 11.75 13.25H28.25C28.6642 13.25 29 13.5858 29 14C29 14.4142 28.6642 14.75 28.25 14.75H11.75C11.3358 14.75 11 14.4142 11 14Z" fill="#5BD424"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M11 14C11 13.5858 11.3358 13.25 11.75 13.25H28.25C28.6642 13.25 29 13.5858 29 14C29 14.4142 28.6642 14.75 28.25 14.75H11.75C11.3358 14.75 11 14.4142 11 14Z" fill="#5BD424"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M11 26C11 25.5858 11.3358 25.25 11.75 25.25H28.25C28.6642 25.25 29 25.5858 29 26C29 26.4142 28.6642 26.75 28.25 26.75H11.75C11.3358 26.75 11 26.4142 11 26Z" fill="#5BD424"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M11 26C11 25.5858 11.3358 25.25 11.75 25.25H28.25C28.6642 25.25 29 25.5858 29 26C29 26.4142 28.6642 26.75 28.25 26.75H11.75C11.3358 26.75 11 26.4142 11 26Z" fill="#5BD424"/>
        </svg>
        <BackButton />
        </StyledMenu>
    )
  }

