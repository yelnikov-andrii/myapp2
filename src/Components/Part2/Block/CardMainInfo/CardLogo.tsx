import styled from 'styled-components';
import logo from '../../../../images/Image with Crown.svg';
  
const StyledCardLogo = styled.div`
    margin : 0 0 24px 0 ;
    `
export const CardLogo = () => {
    return (
        <StyledCardLogo>
            <img 
              src={logo}
              alt='logo with crown'
              style={{
                width: '100px',
                height: '100px',
              }}
            />
        </StyledCardLogo>
    )
}