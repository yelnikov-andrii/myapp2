import styled from 'styled-components'
  
const Block = styled.div`
    display: flex;
    justify-content: center;
    gap: 30px;
    @media (max-width: 768px) {
        flex-direction: column;
      }
    `
export default Block;