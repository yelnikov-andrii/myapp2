import styled from 'styled-components'

const StyledCard = styled.div<{ large?: boolean }>`
  padding: ${props => props.large ? "30px 32px 49px" : "36px 24px 30px"};
  background: #1A1C22;
  border-radius: 15px;
  max-width: 470px;
  box-sizing: border-box;
  @media (max-width: 768px) {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`;

export default StyledCard;