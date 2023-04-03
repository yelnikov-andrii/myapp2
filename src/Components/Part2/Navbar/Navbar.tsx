import styled from 'styled-components'
import { Menu } from './Menu'
import { Logo } from './Logo'
  
const StyledNavbar = styled.nav`
    width: 100%;
    display: flex;
    margin: 0 0 53px 0;

    @media (max-width: 768px) {
        width: 100%;
        flex-direction: column;
      }
    `

export const Navbar = () => {
    return (
        <StyledNavbar>
          <Menu />
          <Logo />
        </StyledNavbar>
    )
}