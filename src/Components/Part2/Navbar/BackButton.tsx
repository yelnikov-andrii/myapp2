import styled from 'styled-components'
  
const MenuTxt = styled.p`
    margin : 0;
    font-size: 16px;
    line-height: 140%;
    display: flex;
    align-items: center;
    gap: 10px;
    color: #FFFFFF;
    `
export const BackButton = () => {
    return (
        <MenuTxt>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M3.54169 10C3.54169 9.65482 3.82151 9.375 4.16669 9.375H15.8334C16.1785 9.375 16.4584 9.65482 16.4584 10C16.4584 10.3452 16.1785 10.625 15.8334 10.625H4.16669C3.82151 10.625 3.54169 10.3452 3.54169 10Z" fill="white"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M10.442 3.72471C10.686 3.96879 10.686 4.36452 10.442 4.6086L5.05057 9.99999L10.442 15.3914C10.686 15.6355 10.686 16.0312 10.442 16.2753C10.1979 16.5193 9.80216 16.5193 9.55808 16.2753L3.72475 10.4419C3.48067 10.1979 3.48067 9.80213 3.72475 9.55805L9.55808 3.72471C9.80216 3.48064 10.1979 3.48064 10.442 3.72471Z" fill="white"/>
        </svg>
          Back
        </MenuTxt>
    )
}