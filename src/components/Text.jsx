import React from 'react'
import styled from 'styled-components'

const StyledTextContainer = styled.div`
  height: 120px;
  overflow: hidden;
  position: relative;
  margin-top: ${props => props.theme.normalSpacingSize};
`

const StyledText = styled.p`
  font-size: ${props => props.theme.smallFontSize};
  color: black;
  font-family: ${props => props.theme.fontFamily};
  text-overflow: ellipsis;
  
`

const Text = ({children}) => (
  <StyledTextContainer>
    <StyledText>
      {children}
    </StyledText>
  </StyledTextContainer>
)

export default Text