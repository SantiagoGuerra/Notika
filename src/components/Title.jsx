import React from 'react'
import styled from 'styled-components'

const StyledTitle = styled.h2`
  font-size: ${props => props.theme.normalFontSize};
  color: ${props => props.theme.darkColor};
  font-family: ${props => props.theme.fontFamily};
`

const Title = ({children}) => (
  <StyledTitle>
    {children}
  </StyledTitle>
)

export default Title