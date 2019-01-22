import React from 'react'
import styled from 'styled-components'
import Category from './Category'

const StyledCategoryItems = styled.div`
  margin-top: ${props => props.theme.normalSpacingSize};
  display: flex
  flex-direction: column;
  width: 100%;
`


const CategoryItems = ({categories}) => (
  <StyledCategoryItems categories>
    {
      categories.filter(category => category.userInterest)
        .map(category => (
          <Category categoryName={category.name} pointColor={category.color}/>
        ))
    }
  </StyledCategoryItems>
)

export default CategoryItems