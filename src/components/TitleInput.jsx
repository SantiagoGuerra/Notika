import React from 'react'
import styled from 'styled-components'

const StyledTitleInput = styled.input.attrs({
  placeholder: 'Your Title'
})`
  height: 24px;
  width: 90%;
  font-family: ${props => props.theme.fontFamily};
  color: ${props => props.theme.darkColor};
  border: .5px solid ${props => props.theme.mainColor};
  border-radius: 12px;
  padding-left: ${props => props.theme.normalSpacingSize};
  font-size: ${props => props.theme.smallFontSize};
  margin-right: ${props => props.theme.smallSpacingSize};
  
  &:focus {
    outline: none;
    box-shadow: 0px 2px 4px rgba(0,0,0, .2);
  }

  ::placeholder {
    color: ${props => props.theme.lightColor};
  }

  @media screen and (min-width: 760px) {
    font-size: ${props => props.theme.normalFontSize};
    height: 32px;
    border-radius: 16px;
  }
`


const TitleInput = ({handleTitleNote}) => (
  <StyledTitleInput onChange={ e => {
    let title = e.target.value
    handleTitleNote(title)
  }}/>
)

export default TitleInput