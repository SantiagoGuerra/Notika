import React from 'react'
import styled from 'styled-components'

const StyledCategory = styled.div`
  height: 24px;
  display: flex;
  align-items: center;
  padding-left: ${props => props.theme.smallSpacingSize};

  &:hover{
    background: #eee;
    cursor: pointer;
    border-radius: 0px 12px 12px 0px;

    @media screen and (min-width: 760px){
    border-radius: 0px 16px 16px 0px;      
    }
  }


  @media screen and (min-width: 760px){
  height: 32px;    
  
  }
`

const StyledPoint = styled.div`
  height: ${props => props.theme.smallSpacingSize};
  width: ${props => props.theme.smallSpacingSize};
  background: ${props => props.pointColor};
  border-radius: 50%;
  box-shadow: 0px 1px 2px rgba(0,0,0, .2);
  margin-right: ${props => props.theme.extraSmallSpacingSize};
`

const StyledText = styled.p`
  font-family: ${props => props.theme.fontFamily};
  font-size: ${props => props.theme.smallFontSize};

  @media screen and (min-width: 760px){
    font-size: ${props => props.theme.normalFontSize};    
  }
`

const Category = ({categoryName, pointColor, handleCategory , hideAddCategory}) => (
  <StyledCategory onClick={ e => {
    let name = categoryName
    let color = pointColor
    handleCategory(name, color)
    hideAddCategory()
  }}>
    <StyledPoint pointColor={pointColor}/>
    <StyledText>
      {categoryName}
    </StyledText>
  </StyledCategory>
)

export default Category