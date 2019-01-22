import React from 'react'
import styled from 'styled-components'

const StyledTitleInput = styled.input.attrs({
  placeholder: 'Your Title'
})`
  height: 24px;
  width: 300px;
  font-family: ${props => props.theme.fontFamily};
  color: ${props => props.theme.darkColor};
  border: .5px solid ${props => props.theme.mainColor};
  border-radius: 12px;
  padding-left: ${props => props.theme.normalSpacingSize};
  font-size: ${props => props.theme.smallFontSize};

  &:focus {
    outline: none;
  }

  ::placeholder {
    color: ${props => props.theme.lightColor};
  }
`

const TitleInput = ({}) => (
  <StyledTitleInput/>
)

export default TitleInput