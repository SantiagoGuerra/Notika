import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  padding: ${props => props.theme.smallSpacingSize} ${props => props.theme.normalSpacingSize};
  font-family: ${props => props.theme.fontFamily};
  border: .5px solid ${props => props.theme.mainColor};
  background: ${props => props.opposite ? '#FFF' : props.theme.mainColor};
  color: ${props => props.opposite ? props.theme.mainColor : '#FFF'};
  border-radius: ${props => props.theme.smallBorder};
  font-size: ${props => props.theme.smallFontSize};
  margin-left: ${props => props.theme.extraSmallSpacingSize};

  &:focus {
    outline: none;
    box-shadow: 0px 2px 4px rgba(0,0,0, .2);
  }

  &:hover {
    cursor: pointer;
  }
` 

const Button = ({children, opposite}) => (
  <StyledButton opposite={opposite}>
    {children}
  </StyledButton>  
)

export default Button