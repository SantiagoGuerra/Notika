import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const StyledButtonEllipsis = styled.button`
  height: 24px;
  width: 24px;
  border-radius: 50%;
  border: none;
  background: ${props => props.theme.mainColor};
  box-shadow: 0px 2px 4px rgba(0,0,0,.2);
  &:focus {
    outline: none
  }
  &:hover {
    cursor: pointer;
  }

  @media screen and (min-width: 760px) {
    height: 32px;
    width: 32px;
  }
 `

const ButtonEllipsis = ({showAddCategory, addCategoryIsOpen}) => (
  <StyledButtonEllipsis onClick={ e => {
    e.preventDefault()
    showAddCategory(true)
  }}>
    <FontAwesomeIcon icon='ellipsis-v' style={{color: '#FFF'}}/>
  </StyledButtonEllipsis>  
)

export default ButtonEllipsis