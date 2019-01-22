import React from 'react'
import styled from 'styled-components'

const StyledTextContainer = styled.div`
  height: ${props => props.isOpen ? 'auto' : '120px'};
  overflow: ${props => props.isOpen ? 'visible' : 'hidden'};
  position: relative;
  margin-top: ${props => props.theme.normalSpacingSize};
`

const StyledText = styled.p`
  font-size: ${props => props.theme.smallFontSize};
  color: black;
  font-family: ${props => props.theme.fontFamily};
  text-overflow: ellipsis;
  
`

const Text = ({children, isOpen}) => (
  <StyledTextContainer isOpen={isOpen}>
    <StyledText>
      {children}
    </StyledText>
  </StyledTextContainer>
)

export default Text