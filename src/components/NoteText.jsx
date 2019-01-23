import React from 'react'
import styled from 'styled-components'

const StyledNoteText = styled.textarea.attrs({
  placeholder: 'Your Note'
})`
  height: 200px;
  width: 100%;
  font-family: ${props => props.theme.fontFamily};
  color: ${props => props.theme.darkColor};
  border: .5px solid ${props => props.theme.mainColor};
  border-radius: 12px;
  padding-left: ${props => props.theme.normalSpacingSize};
  font-size: ${props => props.theme.smallFontSize};
  resize: none;
  padding: ${props => props.theme.normalSpacingSize};

  &:focus {
    resize: vertical;
    outline: none;
    box-shadow: 0px 2px 4px rgba(0,0,0, .2);
  }

  ::placeholder {
    color: ${props => props.theme.lightColor};
  }

  @media screen and (min-width: 760px) {
    border-radius: 16px;
    font-size: ${props => props.theme.normalFontSize};    
  }
`

const NoteText = ({}) => (
  <StyledNoteText>
    
  </StyledNoteText>
)

export default NoteText

