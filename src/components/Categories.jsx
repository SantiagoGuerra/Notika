import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const StyledCategories = styled.button`
  padding: ${props => props.theme.smallSpacingSize} ${props => props.theme.normalSpacingSize};
  border: 2px solid ${props => props.theme.mainColor};
  border-radius: ${props => props.theme.normalBorder};
  background: #FFF;
  display: flex;
  justify-content: baseline;
  align-items: center;
  &:hover {
    box-shadow: 0px 2px 4px rgba(0,0,0, .2);
    cursor: pointer;
  }

  &:focus {
    outline: none;
  }
`

const StyledValue = styled.p`
  color: ${props => props.theme.mainColor};
  font-size: ${props => props.theme.smallFontSize};
  margin-right: ${props => props.theme.smallSpacingSize};
`

const StyledIcon = styled.div`
  width: ${props => props.theme.normalIconSize};
  height: ${props => props.theme.normalIconSize};
  color: ${props => props.theme.mainColor};
`

const Categories = ({children, isOpen}) => (
  <StyledCategories>
    <StyledValue>
      Categories
    </StyledValue>
    <StyledIcon>
      {
        isOpen
          ? <FontAwesomeIcon icon='chevron-up'/>
          : <FontAwesomeIcon icon='chevron-down'/>
      }
    </StyledIcon>
  </StyledCategories>
)

export default Categories