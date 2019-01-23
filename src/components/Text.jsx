import React from 'react'
import styled from 'styled-components'

const StyledTextContainer = styled.div`
  height: ${props => props.isOpen ? '400px' : '120px'};
  overflow: ${props => props.isOpen ? 'auto' : 'hidden'};
  position: relative;
  margin-top: ${props => props.theme.normalSpacingSize};
  padding-left: ${props => props.theme.normalSpacingSize};
  padding-right: ${props => props.theme.normalSpacingSize};
  margin-bottom: ${props => props.theme.normalSpacingSize};
`

const StyledText = styled.p`
  font-size: ${props => props.theme.smallFontSize};
  color: black;
  font-family: ${props => props.theme.fontFamily};
  text-overflow: ellipsis;

  @media screen and (min-width: 760px) {
    font-size: ${props => props.theme.normalFontSize};    
  }
`

const Text = ({children, isOpen}) => (
  <StyledTextContainer isOpen={isOpen}>
    <StyledText>
      {children}
    </StyledText>
  </StyledTextContainer>
)

export default Text