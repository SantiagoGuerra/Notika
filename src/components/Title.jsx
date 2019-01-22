import React from 'react'
import styled from 'styled-components'

const StyledTitle = styled.h2`
  font-size: ${props => props.theme.normalFontSize};
  color: ${props => props.theme.darkColor};
  font-family: ${props => props.theme.fontFamily};
  display: ${props => props.isOpen ? 'fixed' : 'block'};
  /* box-shadow: ${props => props.isOpen ? '0px 2px 4px rgba(0, 0, 0, .2)' : '0px 2px 4px rgba(0, 0, 0, .2)'}; */
`

const Title = ({children , isOpen}) => (
  <StyledTitle isOpen={isOpen}>
    {children}
  </StyledTitle>
)

export default Title