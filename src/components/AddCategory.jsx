import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const StyledAddCategoryContainer = styled.div`
  display: flex;
`

const StyledAddCategoryInput = styled.input.attrs({
  placeholder: 'Create your Category'
})`
  height: 24px;
  border-radius: 12px 0px 0px 12px;
  padding-left: ${props => props.theme.normalSpacingSize};
  background: ${props => props.theme.mainColorTransparent};
  border: none;
  font-size: ${props => props.theme.smallFontSize};
  color: ${props => props.theme.darkColor};
  font-family: ${props => props.theme.fontFamily};

  ::placeholder {
    color: #FFF;
  }

  &:focus {
    outline: none;
  }

  @media screen and (min-width: 760px) {
    font-size: ${props => props.theme.normalFontSize};
    height: 32px;
    border-radius: 16px 0px 0px 16px;    
  }
`

const StyledAddCategoryButton = styled.button`
  background: ${props => props.theme.mainColor};
  height: 24px;
  width: 40px;
  border: none;
  border-radius: 0px 12px 12px 0px;
  color: #FFF;

  &:focus{
    outline: none;
  }

  &:hover {
    opacity: .4;
    cursor: pointer;
  }

  @media screen and (min-width: 760px) {
    height: 32px;
    border-radius: 0px 16px 16px 0px;    
  }
`

const AddCategory = ({hideAddCategory}) => (
  <StyledAddCategoryContainer>
    <StyledAddCategoryInput/>
    <StyledAddCategoryButton onClick={ e => {
      e.preventDefault()
      hideAddCategory()
    }}>
      <FontAwesomeIcon icon='plus'/>
    </StyledAddCategoryButton>
  </StyledAddCategoryContainer>
)

export default AddCategory