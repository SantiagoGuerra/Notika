import React from 'react'
import styled from 'styled-components'

const StyledTitle = styled.h2`
  font-size: ${props => props.theme.normalFontSize};
  color: ${props => props.theme.darkColor};
  font-family: ${props => props.theme.fontFamily};
  display: ${props => props.isOpen ? 'fixed' : 'block'};
  text-align: center;
  @media screen and (min-width: 760px) {
    font-size: ${props => props.theme.largeFontSize};    
  }
`
const StyledTitleContainer = styled.div`
  width: 100%;
  /* height: 80px; */
  z-index: 3000;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #FFF;
  box-shadow: ${ props => props.isOpen ? '0px 2px 4px rgba(0,0,0, .2)' : 'none'};
  padding: ${props => props.theme.normalSpacingSize};
`

const Title = ({children , isOpen}) => (
  <StyledTitleContainer>
    <StyledTitle isOpen={isOpen}>
      {children}
    </StyledTitle>
  </StyledTitleContainer>
)

export default Title